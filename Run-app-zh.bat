@echo off
setlocal enabledelayedexpansion

:: 初始化变量
set count=0
set use_conda=0

:: 首先尝试使用 where python 查找 Python 环境
for /f "tokens=*" %%a in ('where python 2^>nul') do (
    set /a count+=1
    set "python!count!=%%a"
    set "python_path_!count!=%%a"
)

:: 如果 where python 没有找到，尝试 conda env list
if !count! equ 0 (
    echo 正在查找 conda 环境...
    for /f "tokens=1* delims= " %%a in ('conda env list ^| findstr /r /v "^#"') do (
        if not "%%a"=="" if not "%%a"=="base" (
            set /a count+=1
            set "python!count!=%%a"
            set "python_path_!count!=%%b"
            set use_conda=1
        )
    )
)

:: 如果没有找到任何 Python 环境
if !count! equ 0 (
    echo 没有可用的 Python 环境
    echo 请先安装 Python 或 Anaconda/Miniconda
    pause
    exit /b 1
)

:: 如果只有一个 Python 环境，直接使用
if !count! equ 1 (
    if !use_conda! equ 1 (
        echo 找到一个 conda 环境: !python1!
        call conda activate "!python1!"
    ) else (
        echo 找到一个 Python 环境: !python1!
        set selected_python=!python1!
    )
    goto :start_server
)

:: 如果有多个环境，让用户选择
echo 找到多个环境，请选择一个:
echo.
for /l %%i in (1,1,!count!) do (
    echo [%%i] !python%%i!
)
echo.

:select
set /p choice="请输入数字选择 python 运行环境 (1-!count!): "
if !choice! lss 1 (
    echo 选择无效
    goto :select
)
if !choice! gtr !count! (
    echo 选择无效
    goto :select
)

:: 处理用户选择
for /l %%i in (1,1,!count!) do (
    if !choice! equ %%i (
        if !use_conda! equ 1 (
            echo 正在激活 conda 环境: !python%%i!
            call conda activate "!python%%i!"
        ) else (
            set selected_python=!python%%i!
        )
    )
)

:start_server
:: 如果要打开其他文件，可以修改这里
set "default_page=index.html"
set "server_url=http://127.0.0.1:8000/%default_page%"


echo.
echo ========================================
echo 本地 HTTP 服务已启动！
echo 访问地址: %server_url%
echo 
echo 按 Ctrl+C 停止运行
echo ========================================
echo.


:: 先打开浏览器（服务器启动后会自动加载）
start "" "%server_url%"

:: 在当前窗口启动服务器
if !use_conda! equ 1 (
    python -m http.server 8000 --bind 127.0.0.1
) else (
    "!selected_python!" -m http.server 8000 --bind 127.0.0.1
)

pause