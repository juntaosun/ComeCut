// ComeCut 本地 ASR 服务参考实现（mock）
//
// 作用：用固定的假字幕复现 ComeCut「ASR 语音转文本」面板的整套调用，
//       —— 用来做联调、回归测试、或作为自己实现真实 ASR 服务的骨架。
//
// 用法：
//   node server.mjs            # 监听 127.0.0.1:8799
//   PORT=9000 node server.mjs  # 换端口
//
// 在 ComeCut 里（v0.2.3 桌面版）：
//   模型和插件 → API 管理 → 新增 API 服务
//     服务名称：本地 ASR（mock）
//     服务类型：ASR-语音识别
//     接口地址：http://127.0.0.1:8799/v1
//     模型选择：mock-asr
//   保存后，右键时间线上的**音频剪辑**（视频剪辑需先「分离音频」）→「语音识别」
//   → 保持「标准时间字幕（SRT）」→「执行语音识别」→ 应出现下面三条假字幕。
//
// 端点（ComeCut 实际会调用的）：
//   GET  /v1/models                         模型列表，带 task:"asr"
//   POST /v1/audio/transcriptions           纯文本模式
//   POST /v1/audio/transcriptions/details   时间戳模式（面板默认）
//
// 注意：请求体是 multipart/form-data，文件字段固定为 file，文件名 clip.wav，
//      内容是 **16 kHz 单声道 WAV**（ComeCut 已用 WebAudio 重采样，服务端不需要解视频）。
import http from 'node:http';

const PORT = Number(process.env.PORT || 8799);
const SAMPLE_RATE = 16000;

// 假字幕：秒 → 采样点
const LINES = [
  [0.0, 2.4, '这是一段本地语音识别的测试字幕。'],
  [2.6, 5.2, '识别完全在本机完成，不联网。'],
  [5.4, 8.0, '看到这三行，说明服务商配置正确。'],
];

const segments = LINES.map(([start, end, text]) => ({
  text,
  start_sample: Math.round(start * SAMPLE_RATE),
  end_sample: Math.round(end * SAMPLE_RATE),
}));

const fullText = LINES.map(([, , t]) => t).join('');

function reply(res, status, body, headers = {}) {
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*', // 见 README「关于 CORS」
    ...headers,
  });
  res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  const path = new URL(req.url, `http://127.0.0.1:${PORT}`).pathname.replace(/\/+$/, '') || '/';

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'access-control-allow-origin': '*',
      'access-control-allow-headers': '*',
      'access-control-allow-methods': 'GET,POST,OPTIONS',
    });
    return res.end();
  }

  // 请求体用不到（固定返回），读完丢掉即可
  req.resume();
  req.on('end', () => {
    console.log(new Date().toISOString(), req.method, path);

    if (path === '/v1/models') {
      return reply(res, 200, {
        object: 'list',
        data: [
          {
            id: 'mock-asr',
            object: 'model',
            owned_by: 'local',
            task: 'asr', // 带上 task，ComeCut 才会把菜单项标成「语音识别」
          },
        ],
      });
    }

    if (path === '/v1/audio/transcriptions/details') {
      return reply(res, 200, { text: fullText, sample_rate: SAMPLE_RATE, segments });
    }

    if (path === '/v1/audio/transcriptions') {
      return reply(res, 200, { text: fullText });
    }

    reply(res, 404, { error: { message: 'not found', path } });
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`ComeCut 本地 ASR mock 已启动: http://127.0.0.1:${PORT}/v1`);
  console.log('在「模型和插件 → API 管理」里把它加成 ASR-语音识别 服务即可。');
});