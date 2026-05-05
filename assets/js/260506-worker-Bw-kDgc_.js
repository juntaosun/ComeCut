var e = t;
function t(e, t) {
	return e -= 373, s()[e];
}
(function() {
	for (var e = t, n = s();;) try {
		if (195085 === parseInt(e(395)) / 1 + parseInt(e(409)) / 2 + -parseInt(e(393)) / 3 + parseInt(e(375)) / 4 + parseInt(e(384)) / 5 * (parseInt(e(378)) / 6) + -parseInt(e(389)) / 7 + parseInt(e(374)) / 8 * (parseInt(e(397)) / 9)) break;
		n.push(n.shift());
	} catch (r) {
		n.push(n.shift());
	}
})();
Object[e(392)];
var n = Object[e(400)];
Object[e(407)], Object[e(412)], Object[e(380)], Object[e(396)][e(404)];
function s() {
	var e = [
		"default",
		"create",
		"1155948vjuJFk",
		"Module",
		"7938NMSwaN",
		"prototype",
		"2382903CtoQgI",
		"function",
		"exports",
		"defineProperty",
		"module.exports",
		"__esModule",
		"toStringTag",
		"hasOwnProperty",
		"enumerable",
		"base64",
		"getOwnPropertyDescriptor",
		"from",
		"398288HZvvRt",
		"call",
		"Calling `require` for \"",
		"getOwnPropertyNames",
		"name",
		"8vBQXRu",
		"1149988ppWsns",
		"qTiIs",
		"MyccN",
		"419718fJAGvI",
		"charCodeAt",
		"getPrototypeOf",
		"BBkeS",
		"NSiTv",
		"length",
		"5wTkcbM",
		"apply",
		"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.",
		"undefined",
		"grnRs",
		"1742286FGARbn",
		"bind"
	];
	return (s = function() {
		return e;
	})();
}
var r, a, o, i, l, c, u, d, h, _, p, f, m, g, w, y, b, x, v, M, k, E, A, C, T, S, F, I, P, L, O, z, N, B, $, D = (t, s) => {
	var r = e;
	let a = {};
	for (var o in t) {
		if (r(382) != r(382)) {
			if (typeof _0x276809 !== r(387)) return _0x2b9cf6[r(385)](this, arguments);
			throw _0x1e76ee(r(411) + _0x26d405 + r(386));
		}
		n(a, o, {
			get: t[o],
			enumerable: !0
		});
	}
	return !s && n(a, Symbol[r(403)], { value: r(394) }), a;
}, R = ((() => {
	for (var t = e, n = new Uint8Array(128), s = 0; s < 64; s++) t(376) !== t(388) ? n[s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : 4 * s - 205] = s : _0x4146f4(_0x2f67ac, _0xd988df, {
		get: _0xe7133c[_0x18d6cd],
		enumerable: !0
	});
})(), r = function(t) {
	var n = e;
	if (typeof require !== n(387)) return require.apply(this, arguments);
	throw Error(n(411) + t + n(386));
}, typeof require !== e(387) ? require : typeof Proxy !== e(387) ? new Proxy(r, { get: (e, t) => ("undefined" != typeof require ? require : e)[t] }) : r), G = D({
	InferenceSession: () => $,
	TRACE: () => I,
	TRACE_EVENT_BEGIN: () => z,
	TRACE_EVENT_END: () => N,
	TRACE_FUNC_BEGIN: () => L,
	TRACE_FUNC_END: () => O,
	Tensor: () => F,
	default: () => Nn,
	env: () => p,
	registerBackend: () => l
}), U = Object.defineProperty, V = Object.getOwnPropertyDescriptor, j = Object.getOwnPropertyNames, q = Object.prototype.hasOwnProperty, W = (a = function(e) {
	if (typeof R < "u") return R.apply(this, arguments);
	throw Error("Dynamic require of \"" + e + "\" is not supported");
}, typeof R < "u" ? R : typeof Proxy < "u" ? new Proxy(a, { get: (e, t) => (typeof R < "u" ? R : e)[t] }) : a), H = (e, t) => () => (e && (t = e(e = 0)), t), Q = (e, t) => {
	for (var n in t) U(e, n, {
		get: t[n],
		enumerable: !0
	});
}, X = (e) => ((e, t, n, s) => {
	if (t && "object" == typeof t || "function" == typeof t) for (let r of j(t)) !q.call(e, r) && r !== n && U(e, r, {
		get: () => t[r],
		enumerable: !(s = V(t, r)) || s.enumerable
	});
	return e;
})(U({}, "__esModule", { value: !0 }), e), J = H(() => {
	o = /* @__PURE__ */ new Map(), i = [], l = (e, t, n) => {
		if (t && "function" == typeof t.init && "function" == typeof t.createInferenceSessionHandler) {
			let s = o.get(e);
			if (void 0 === s) o.set(e, {
				backend: t,
				priority: n
			});
			else {
				if (s.priority > n) return;
				if (s.priority === n && s.backend !== t) throw new Error(`cannot register backend "${e}" using priority ${n}`);
			}
			if (n >= 0) {
				let t = i.indexOf(e);
				-1 !== t && i.splice(t, 1);
				for (let s = 0; s < i.length; s++) if (o.get(i[s]).priority <= n) return void i.splice(s, 0, e);
				i.push(e);
			}
			return;
		}
		throw new TypeError("not a valid backend");
	}, c = async (e) => {
		let t = o.get(e);
		if (!t) return "backend not found.";
		if (t.initialized) return t.backend;
		if (t.aborted) return t.error;
		{
			let s = !!t.initPromise;
			try {
				return s || (t.initPromise = t.backend.init(e)), await t.initPromise, t.initialized = !0, t.backend;
			} catch (n) {
				return s || (t.error = `${n}`, t.aborted = !0), t.error;
			} finally {
				delete t.initPromise;
			}
		}
	}, u = async (e) => {
		let t, n = e.executionProviders || [], s = n.map((e) => "string" == typeof e ? e : e.name), r = 0 === s.length ? i : s, a = [], o = /* @__PURE__ */ new Set();
		for (let i of r) {
			let e = await c(i);
			"string" == typeof e ? a.push({
				name: i,
				err: e
			}) : (t || (t = e), t === e && o.add(i));
		}
		if (!t) throw new Error(`no available backend found. ERR: ${a.map((e) => `[${e.name}] ${e.err}`).join(", ")}`);
		for (let { name: i, err: c } of a) s.includes(i);
		let l = n.filter((e) => o.has("string" == typeof e ? e : e.name));
		return [t, new Proxy(e, { get: (e, t) => "executionProviders" === t ? l : Reflect.get(e, t) })];
	};
}), Y = H(() => {
	J();
}), K = H(() => {
	d = "1.24.0-dev.20251116-b39e144322";
}), Z = H(() => {
	K(), h = "warning", _ = {
		wasm: {},
		webgl: {},
		webgpu: {},
		versions: { common: d },
		set logLevel(e) {
			if (void 0 !== e) {
				if ("string" != typeof e || -1 === [
					"verbose",
					"info",
					"warning",
					"error",
					"fatal"
				].indexOf(e)) throw new Error(`Unsupported logging level: ${e}`);
				h = e;
			}
		},
		get logLevel() {
			return h;
		}
	}, Object.defineProperty(_, "logLevel", { enumerable: !0 });
}), ee = H(() => {
	Z(), p = _;
}), te = H(() => {
	f = (e, t) => {
		let n = typeof document < "u" ? document.createElement("canvas") : new OffscreenCanvas(1, 1);
		n.width = e.dims[3], n.height = e.dims[2];
		let s = n.getContext("2d");
		if (null != s) {
			let r, a;
			void 0 !== t?.tensorLayout && "NHWC" === t.tensorLayout ? (r = e.dims[2], a = e.dims[3]) : (r = e.dims[3], a = e.dims[2]);
			let o, i, l = void 0 !== t?.format ? t.format : "RGB", c = t?.norm;
			void 0 === c || void 0 === c.mean ? o = [
				255,
				255,
				255,
				255
			] : "number" == typeof c.mean ? o = [
				c.mean,
				c.mean,
				c.mean,
				c.mean
			] : (o = [
				c.mean[0],
				c.mean[1],
				c.mean[2],
				0
			], void 0 !== c.mean[3] && (o[3] = c.mean[3])), void 0 === c || void 0 === c.bias ? i = [
				0,
				0,
				0,
				0
			] : "number" == typeof c.bias ? i = [
				c.bias,
				c.bias,
				c.bias,
				c.bias
			] : (i = [
				c.bias[0],
				c.bias[1],
				c.bias[2],
				0
			], void 0 !== c.bias[3] && (i[3] = c.bias[3]));
			let u = a * r, d = 0, h = u, _ = 2 * u, p = -1;
			"RGBA" === l ? (d = 0, h = u, _ = 2 * u, p = 3 * u) : "RGB" === l ? (d = 0, h = u, _ = 2 * u) : "RBG" === l && (d = 0, _ = u, h = 2 * u);
			for (let t = 0; t < a; t++) for (let n = 0; n < r; n++) {
				let r = (e.data[d++] - i[0]) * o[0], a = (e.data[h++] - i[1]) * o[1], l = (e.data[_++] - i[2]) * o[2], c = -1 === p ? 255 : (e.data[p++] - i[3]) * o[3];
				s.fillStyle = "rgba(" + r + "," + a + "," + l + "," + c + ")", s.fillRect(n, t, 1, 1);
			}
			if ("toDataURL" in n) return n.toDataURL();
			throw new Error("toDataURL is not supported");
		}
		throw new Error("Can not access image data");
	}, m = (e, t) => {
		let n, s = typeof document < "u" ? document.createElement("canvas").getContext("2d") : new OffscreenCanvas(1, 1).getContext("2d");
		if (null == s) throw new Error("Can not access image data");
		{
			let r, a, o;
			void 0 !== t?.tensorLayout && "NHWC" === t.tensorLayout ? (r = e.dims[2], a = e.dims[1], o = e.dims[3]) : (r = e.dims[3], a = e.dims[2], o = e.dims[1]);
			let i, l, c = void 0 !== t && void 0 !== t.format ? t.format : "RGB", u = t?.norm;
			void 0 === u || void 0 === u.mean ? i = [
				255,
				255,
				255,
				255
			] : "number" == typeof u.mean ? i = [
				u.mean,
				u.mean,
				u.mean,
				u.mean
			] : (i = [
				u.mean[0],
				u.mean[1],
				u.mean[2],
				255
			], void 0 !== u.mean[3] && (i[3] = u.mean[3])), void 0 === u || void 0 === u.bias ? l = [
				0,
				0,
				0,
				0
			] : "number" == typeof u.bias ? l = [
				u.bias,
				u.bias,
				u.bias,
				u.bias
			] : (l = [
				u.bias[0],
				u.bias[1],
				u.bias[2],
				0
			], void 0 !== u.bias[3] && (l[3] = u.bias[3]));
			let d = a * r;
			if (void 0 !== t && (void 0 !== t.format && 4 === o && "RGBA" !== t.format || 3 === o && "RGB" !== t.format && "BGR" !== t.format)) throw new Error("Tensor format doesn't match input tensor dims");
			let h = 4, _ = 0, p = 1, f = 2, m = 3, g = 0, w = d, y = 2 * d, b = -1;
			"RGBA" === c ? (g = 0, w = d, y = 2 * d, b = 3 * d) : "RGB" === c ? (g = 0, w = d, y = 2 * d) : "RBG" === c && (g = 0, y = d, w = 2 * d), n = s.createImageData(r, a);
			for (let t = 0; t < a * r; _ += h, p += h, f += h, m += h, t++) n.data[_] = (e.data[g++] - l[0]) * i[0], n.data[p] = (e.data[w++] - l[1]) * i[1], n.data[f] = (e.data[y++] - l[2]) * i[2], n.data[m] = -1 === b ? 255 : (e.data[b++] - l[3]) * i[3];
		}
		return n;
	};
}), ne = H(() => {
	ae(), g = (e, t) => {
		if (void 0 === e) throw new Error("Image buffer must be defined");
		if (void 0 === t.height || void 0 === t.width) throw new Error("Image height and width must be defined");
		if ("NHWC" === t.tensorLayout) throw new Error("NHWC Tensor layout is not supported yet");
		let n, s, { height: r, width: a } = t, o = t.norm ?? {
			mean: 255,
			bias: 0
		};
		n = "number" == typeof o.mean ? [
			o.mean,
			o.mean,
			o.mean,
			o.mean
		] : [
			o.mean[0],
			o.mean[1],
			o.mean[2],
			o.mean[3] ?? 255
		], s = "number" == typeof o.bias ? [
			o.bias,
			o.bias,
			o.bias,
			o.bias
		] : [
			o.bias[0],
			o.bias[1],
			o.bias[2],
			o.bias[3] ?? 0
		];
		let i = void 0 !== t.format ? t.format : "RGBA", l = void 0 !== t.tensorFormat && void 0 !== t.tensorFormat ? t.tensorFormat : "RGB", c = r * a, u = "RGBA" === l ? new Float32Array(4 * c) : new Float32Array(3 * c), d = 4, h = 0, _ = 1, p = 2, f = 3, m = 0, g = c, w = 2 * c, y = -1;
		"RGB" === i && (d = 3, h = 0, _ = 1, p = 2, f = -1), "RGBA" === l ? y = 3 * c : "RBG" === l ? (m = 0, w = c, g = 2 * c) : "BGR" === l && (w = 0, g = c, m = 2 * c);
		for (let b = 0; b < c; b++, h += d, p += d, _ += d, f += d) u[m++] = (e[h] + s[0]) / n[0], u[g++] = (e[_] + s[1]) / n[1], u[w++] = (e[p] + s[2]) / n[2], -1 !== y && -1 !== f && (u[y++] = (e[f] + s[3]) / n[3]);
		return new S("float32", u, "RGBA" === l ? [
			1,
			4,
			r,
			a
		] : [
			1,
			3,
			r,
			a
		]);
	}, w = async (e, t) => {
		let n, s = typeof HTMLImageElement < "u" && e instanceof HTMLImageElement, r = typeof ImageData < "u" && e instanceof ImageData, a = typeof ImageBitmap < "u" && e instanceof ImageBitmap, o = "string" == typeof e, i = t ?? {}, l = () => {
			if (typeof document < "u") return document.createElement("canvas");
			if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(1, 1);
			throw new Error("Canvas is not supported");
		}, c = (e) => typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || e instanceof OffscreenCanvas ? e.getContext("2d") : null;
		if (s) {
			let s = l();
			s.width = e.width, s.height = e.height;
			let r = c(s);
			if (null == r) throw new Error("Can not access image data");
			{
				let s = e.height, a = e.width;
				if (void 0 !== t && void 0 !== t.resizedHeight && void 0 !== t.resizedWidth && (s = t.resizedHeight, a = t.resizedWidth), void 0 !== t) {
					if (i = t, void 0 !== t.tensorFormat) throw new Error("Image input config format must be RGBA for HTMLImageElement");
					i.tensorFormat = "RGBA", i.height = s, i.width = a;
				} else i.tensorFormat = "RGBA", i.height = s, i.width = a;
				r.drawImage(e, 0, 0), n = r.getImageData(0, 0, a, s).data;
			}
		} else {
			if (!r) {
				if (a) {
					if (void 0 === t) throw new Error("Please provide image config with format for Imagebitmap");
					let s = l();
					s.width = e.width, s.height = e.height;
					let r = c(s);
					if (null != r) {
						let t = e.height, s = e.width;
						return r.drawImage(e, 0, 0, s, t), n = r.getImageData(0, 0, s, t).data, i.height = t, i.width = s, g(n, i);
					}
					throw new Error("Can not access image data");
				}
				if (o) return new Promise((t, n) => {
					let s = l(), r = c(s);
					if (!e || !r) return n();
					let a = new Image();
					a.crossOrigin = "Anonymous", a.src = e, a.onload = () => {
						s.width = a.width, s.height = a.height, r.drawImage(a, 0, 0, s.width, s.height);
						let e = r.getImageData(0, 0, s.width, s.height);
						i.height = s.height, i.width = s.width, t(g(e.data, i));
					};
				});
				throw new Error("Input data provided is not supported - aborted tensor creation");
			}
			{
				let s, r;
				if (void 0 !== t && void 0 !== t.resizedWidth && void 0 !== t.resizedHeight ? (s = t.resizedHeight, r = t.resizedWidth) : (s = e.height, r = e.width), void 0 !== t && (i = t), i.format = "RGBA", i.height = s, i.width = r, void 0 !== t) {
					let t = l();
					t.width = r, t.height = s;
					let a = c(t);
					if (null == a) throw new Error("Can not access image data");
					a.putImageData(e, 0, 0), n = a.getImageData(0, 0, r, s).data;
				} else n = e.data;
			}
		}
		if (void 0 !== n) return g(n, i);
		throw new Error("Input data provided is not supported - aborted tensor creation");
	}, y = (e, t) => {
		let { width: n, height: s, download: r, dispose: a } = t;
		return new S({
			location: "texture",
			type: "float32",
			texture: e,
			dims: [
				1,
				s,
				n,
				4
			],
			download: r,
			dispose: a
		});
	}, b = (e, t) => {
		let { dataType: n, dims: s, download: r, dispose: a } = t;
		return new S({
			location: "gpu-buffer",
			type: n ?? "float32",
			gpuBuffer: e,
			dims: s,
			download: r,
			dispose: a
		});
	}, x = (e, t) => {
		let { dataType: n, dims: s, download: r, dispose: a } = t;
		return new S({
			location: "ml-tensor",
			type: n ?? "float32",
			mlTensor: e,
			dims: s,
			download: r,
			dispose: a
		});
	}, v = (e, t, n) => new S({
		location: "cpu-pinned",
		type: e,
		data: t,
		dims: n ?? [t.length]
	});
}), se = H(() => {
	M = new Map([
		["float32", Float32Array],
		["uint8", Uint8Array],
		["int8", Int8Array],
		["uint16", Uint16Array],
		["int16", Int16Array],
		["int32", Int32Array],
		["bool", Uint8Array],
		["float64", Float64Array],
		["uint32", Uint32Array],
		["int4", Uint8Array],
		["uint4", Uint8Array]
	]), k = new Map([
		[Float32Array, "float32"],
		[Uint8Array, "uint8"],
		[Int8Array, "int8"],
		[Uint16Array, "uint16"],
		[Int16Array, "int16"],
		[Int32Array, "int32"],
		[Float64Array, "float64"],
		[Uint32Array, "uint32"]
	]), E = !1, A = () => {
		if (!E) {
			E = !0;
			let e = typeof BigInt64Array < "u" && BigInt64Array.from, t = typeof BigUint64Array < "u" && BigUint64Array.from, n = globalThis.Float16Array, s = typeof n < "u" && n.from;
			e && (M.set("int64", BigInt64Array), k.set(BigInt64Array, "int64")), t && (M.set("uint64", BigUint64Array), k.set(BigUint64Array, "uint64")), s ? (M.set("float16", n), k.set(n, "float16")) : M.set("float16", Uint16Array);
		}
	};
}), re = H(() => {
	ae(), C = (e) => {
		let t = 1;
		for (let n = 0; n < e.length; n++) {
			let s = e[n];
			if ("number" != typeof s || !Number.isSafeInteger(s)) throw new TypeError(`dims[${n}] must be an integer, got: ${s}`);
			if (s < 0) throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${s}`);
			t *= s;
		}
		return t;
	}, T = (e, t) => {
		switch (e.location) {
			case "cpu": return new S(e.type, e.data, t);
			case "cpu-pinned": return new S({
				location: "cpu-pinned",
				data: e.data,
				type: e.type,
				dims: t
			});
			case "texture": return new S({
				location: "texture",
				texture: e.texture,
				type: e.type,
				dims: t
			});
			case "gpu-buffer": return new S({
				location: "gpu-buffer",
				gpuBuffer: e.gpuBuffer,
				type: e.type,
				dims: t
			});
			case "ml-tensor": return new S({
				location: "ml-tensor",
				mlTensor: e.mlTensor,
				type: e.type,
				dims: t
			});
			default: throw new Error(`tensorReshape: tensor location ${e.location} is not supported`);
		}
	};
}), ae = H(() => {
	te(), ne(), se(), re(), S = class {
		constructor(e, t, n) {
			let s, r;
			if (A(), "object" == typeof e && "location" in e) switch (this.dataLocation = e.location, s = e.type, r = e.dims, e.location) {
				case "cpu-pinned": {
					let t = M.get(s);
					if (!t) throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);
					if (!(e.data instanceof t)) throw new TypeError(`buffer should be of type ${t.name}`);
					this.cpuData = e.data;
					break;
				}
				case "texture":
					if ("float32" !== s) throw new TypeError(`unsupported type "${s}" to create tensor from texture`);
					this.gpuTextureData = e.texture, this.downloader = e.download, this.disposer = e.dispose;
					break;
				case "gpu-buffer":
					if ("float32" !== s && "float16" !== s && "int32" !== s && "int64" !== s && "uint32" !== s && "uint8" !== s && "bool" !== s && "uint4" !== s && "int4" !== s) throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);
					this.gpuBufferData = e.gpuBuffer, this.downloader = e.download, this.disposer = e.dispose;
					break;
				case "ml-tensor":
					if ("float32" !== s && "float16" !== s && "int32" !== s && "int64" !== s && "uint32" !== s && "uint64" !== s && "int8" !== s && "uint8" !== s && "bool" !== s && "uint4" !== s && "int4" !== s) throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);
					this.mlTensorData = e.mlTensor, this.downloader = e.download, this.disposer = e.dispose;
					break;
				default: throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`);
			}
			else {
				let a, o;
				if ("string" == typeof e) if (s = e, o = n, "string" === e) {
					if (!Array.isArray(t)) throw new TypeError("A string tensor's data must be a string array.");
					a = t;
				} else {
					let n = M.get(e);
					if (void 0 === n) throw new TypeError(`Unsupported tensor type: ${e}.`);
					if (Array.isArray(t)) {
						if ("float16" === e && n === Uint16Array || "uint4" === e || "int4" === e) throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);
						a = "uint64" === e || "int64" === e ? n.from(t, BigInt) : n.from(t);
					} else if (t instanceof n) a = t;
					else if (t instanceof Uint8ClampedArray) {
						if ("uint8" !== e) throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");
						a = Uint8Array.from(t);
					} else {
						if (!("float16" === e && t instanceof Uint16Array && n !== Uint16Array)) throw new TypeError(`A ${s} tensor's data must be type of ${n}`);
						a = new globalThis.Float16Array(t.buffer, t.byteOffset, t.length);
					}
				}
				else if (o = t, Array.isArray(e)) {
					if (0 === e.length) throw new TypeError("Tensor type cannot be inferred from an empty array.");
					let t = typeof e[0];
					if ("string" === t) s = "string", a = e;
					else {
						if ("boolean" !== t) throw new TypeError(`Invalid element type of data array: ${t}.`);
						s = "bool", a = Uint8Array.from(e);
					}
				} else if (e instanceof Uint8ClampedArray) s = "uint8", a = Uint8Array.from(e);
				else {
					let t = k.get(e.constructor);
					if (void 0 === t) throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);
					s = t, a = e;
				}
				if (void 0 === o) o = [a.length];
				else if (!Array.isArray(o)) throw new TypeError("A tensor's dims must be a number array");
				r = o, this.cpuData = a, this.dataLocation = "cpu";
			}
			let a = C(r);
			if (this.cpuData && a !== this.cpuData.length && ("uint4" !== s && "int4" !== s || Math.ceil(a / 2) !== this.cpuData.length)) throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);
			this.type = s, this.dims = r, this.size = a;
		}
		static async fromImage(e, t) {
			return w(e, t);
		}
		static fromTexture(e, t) {
			return y(e, t);
		}
		static fromGpuBuffer(e, t) {
			return b(e, t);
		}
		static fromMLTensor(e, t) {
			return x(e, t);
		}
		static fromPinnedBuffer(e, t, n) {
			return v(e, t, n);
		}
		toDataURL(e) {
			return f(this, e);
		}
		toImageData(e) {
			return m(this, e);
		}
		get data() {
			if (this.ensureValid(), !this.cpuData) throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");
			return this.cpuData;
		}
		get location() {
			return this.dataLocation;
		}
		get texture() {
			if (this.ensureValid(), !this.gpuTextureData) throw new Error("The data is not stored as a WebGL texture.");
			return this.gpuTextureData;
		}
		get gpuBuffer() {
			if (this.ensureValid(), !this.gpuBufferData) throw new Error("The data is not stored as a WebGPU buffer.");
			return this.gpuBufferData;
		}
		get mlTensor() {
			if (this.ensureValid(), !this.mlTensorData) throw new Error("The data is not stored as a WebNN MLTensor.");
			return this.mlTensorData;
		}
		async getData(e) {
			switch (this.ensureValid(), this.dataLocation) {
				case "cpu":
				case "cpu-pinned": return this.data;
				case "texture":
				case "gpu-buffer":
				case "ml-tensor":
					if (!this.downloader) throw new Error("The current tensor is not created with a specified data downloader.");
					if (this.isDownloading) throw new Error("The current tensor is being downloaded.");
					try {
						this.isDownloading = !0;
						let t = await this.downloader();
						return this.downloader = void 0, this.dataLocation = "cpu", this.cpuData = t, e && this.disposer && (this.disposer(), this.disposer = void 0), t;
					} finally {
						this.isDownloading = !1;
					}
				default: throw new Error(`cannot get data from location: ${this.dataLocation}`);
			}
		}
		dispose() {
			if (this.isDownloading) throw new Error("The current tensor is being downloaded.");
			this.disposer && (this.disposer(), this.disposer = void 0), this.cpuData = void 0, this.gpuTextureData = void 0, this.gpuBufferData = void 0, this.mlTensorData = void 0, this.downloader = void 0, this.isDownloading = void 0, this.dataLocation = "none";
		}
		ensureValid() {
			if ("none" === this.dataLocation) throw new Error("The tensor is disposed.");
		}
		reshape(e) {
			if (this.ensureValid(), this.downloader || this.disposer) throw new Error("Cannot reshape a tensor that owns GPU resource.");
			return T(this, e);
		}
	};
}), oe = H(() => {
	ae(), F = S;
}), ie = H(() => {
	Z(), I = (e, t) => {
		typeof _.trace > "u" ? _.wasm.trace : _.trace;
	}, P = (e, t) => {
		let n = (/* @__PURE__ */ new Error()).stack?.split(/\r\n|\r|\n/g) || [], s = !1;
		for (let r = 0; r < n.length; r++) {
			if (s && !n[r].includes("TRACE_FUNC")) {
				let s = `FUNC_${e}::${n[r].trim().split(" ")[1]}`;
				t && (s += `::${t}`), I("CPU", s);
				return;
			}
			n[r].includes("TRACE_FUNC") && (s = !0);
		}
	}, L = (e) => {
		(typeof _.trace > "u" ? !_.wasm.trace : !_.trace) || P("BEGIN", e);
	}, O = (e) => {
		(typeof _.trace > "u" ? !_.wasm.trace : !_.trace) || P("END", e);
	}, z = (e) => {
		typeof _.trace > "u" ? _.wasm.trace : _.trace;
	}, N = (e) => {
		typeof _.trace > "u" ? _.wasm.trace : _.trace;
	};
}), le = H(() => {
	J(), oe(), ie(), B = class e {
		constructor(e) {
			this.handler = e;
		}
		async run(e, t, n) {
			L(), z("InferenceSession.run");
			let s = {}, r = {};
			if ("object" != typeof e || null === e || e instanceof F || Array.isArray(e)) throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");
			let a = !0;
			if ("object" == typeof t) {
				if (null === t) throw new TypeError("Unexpected argument[1]: cannot be null.");
				if (t instanceof F) throw new TypeError("'fetches' cannot be a Tensor");
				if (Array.isArray(t)) {
					if (0 === t.length) throw new TypeError("'fetches' cannot be an empty array.");
					a = !1;
					for (let e of t) {
						if ("string" != typeof e) throw new TypeError("'fetches' must be a string array or an object.");
						if (-1 === this.outputNames.indexOf(e)) throw new RangeError(`'fetches' contains invalid output name: ${e}.`);
						s[e] = null;
					}
					if ("object" == typeof n && null !== n) r = n;
					else if (typeof n < "u") throw new TypeError("'options' must be an object.");
				} else {
					let e = !1, o = Object.getOwnPropertyNames(t);
					for (let n of this.outputNames) if (-1 !== o.indexOf(n)) {
						let r = t[n];
						(null === r || r instanceof F) && (e = !0, a = !1, s[n] = r);
					}
					if (e) {
						if ("object" == typeof n && null !== n) r = n;
						else if (typeof n < "u") throw new TypeError("'options' must be an object.");
					} else r = t;
				}
			} else if (typeof t < "u") throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");
			for (let l of this.inputNames) if (typeof e[l] > "u") throw new Error(`input '${l}' is missing in 'feeds'.`);
			if (a) for (let l of this.outputNames) s[l] = null;
			let o = await this.handler.run(e, s, r), i = {};
			for (let l in o) if (Object.hasOwnProperty.call(o, l)) {
				let e = o[l];
				i[l] = e instanceof F ? e : new F(e.type, e.data, e.dims);
			}
			return N("InferenceSession.run"), O(), i;
		}
		async release() {
			return this.handler.dispose();
		}
		static async create(t, n, s, r) {
			L(), z("InferenceSession.create");
			let a, o = {};
			if ("string" == typeof t) {
				if (a = t, "object" == typeof n && null !== n) o = n;
				else if (typeof n < "u") throw new TypeError("'options' must be an object.");
			} else if (t instanceof Uint8Array) {
				if (a = t, "object" == typeof n && null !== n) o = n;
				else if (typeof n < "u") throw new TypeError("'options' must be an object.");
			} else {
				if (!(t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer)) throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");
				{
					let e = t, i = 0, l = t.byteLength;
					if ("object" == typeof n && null !== n) o = n;
					else if ("number" == typeof n) {
						if (i = n, !Number.isSafeInteger(i)) throw new RangeError("'byteOffset' must be an integer.");
						if (i < 0 || i >= e.byteLength) throw new RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);
						if (l = t.byteLength - i, "number" == typeof s) {
							if (l = s, !Number.isSafeInteger(l)) throw new RangeError("'byteLength' must be an integer.");
							if (l <= 0 || i + l > e.byteLength) throw new RangeError(`'byteLength' is out of range (0, ${e.byteLength - i}].`);
							if ("object" == typeof r && null !== r) o = r;
							else if (typeof r < "u") throw new TypeError("'options' must be an object.");
						} else if (typeof s < "u") throw new TypeError("'byteLength' must be a number.");
					} else if (typeof n < "u") throw new TypeError("'options' must be an object.");
					a = new Uint8Array(e, i, l);
				}
			}
			let [i, l] = await u(o), c = await i.createInferenceSessionHandler(a, l);
			return N("InferenceSession.create"), O(), new e(c);
		}
		startProfiling() {
			this.handler.startProfiling();
		}
		endProfiling() {
			this.handler.endProfiling();
		}
		get inputNames() {
			return this.handler.inputNames;
		}
		get outputNames() {
			return this.handler.outputNames;
		}
		get inputMetadata() {
			return this.handler.inputMetadata;
		}
		get outputMetadata() {
			return this.handler.outputMetadata;
		}
	};
}), ce = H(() => {
	le(), $ = B;
}), ue = H(() => {}), de = H(() => {}), he = H(() => {}), _e = H(() => {}), pe = {};
Q(pe, {
	InferenceSession: () => $,
	TRACE: () => I,
	TRACE_EVENT_BEGIN: () => z,
	TRACE_EVENT_END: () => N,
	TRACE_FUNC_BEGIN: () => L,
	TRACE_FUNC_END: () => O,
	Tensor: () => F,
	env: () => p,
	registerBackend: () => l
});
var fe = H(() => {
	Y(), ee(), ce(), oe(), ue(), de(), ie(), he(), _e();
}), me = H(() => {}), ge = {};
Q(ge, { default: () => be });
var we, ye, be, xe = H(() => {
	Tn(), Lt(), Pt(), we = "ort-wasm-proxy-worker", (ye = globalThis.self?.name === we) && (self.onmessage = (e) => {
		let { type: t, in: n } = e.data;
		try {
			switch (t) {
				case "init-wasm":
					We(n.wasm).then(() => {
						Ht(n).then(() => {
							postMessage({ type: t });
						}, (e) => {
							postMessage({
								type: t,
								err: e
							});
						});
					}, (e) => {
						postMessage({
							type: t,
							err: e
						});
					});
					break;
				case "init-ep": {
					let { epName: e, env: s } = n;
					Qt(s, e).then(() => {
						postMessage({ type: t });
					}, (e) => {
						postMessage({
							type: t,
							err: e
						});
					});
					break;
				}
				case "copy-from": {
					let { buffer: e } = n, s = Kt(e);
					postMessage({
						type: t,
						out: s
					});
					break;
				}
				case "create": {
					let { model: e, options: s } = n;
					Zt(e, s).then((e) => {
						postMessage({
							type: t,
							out: e
						});
					}, (e) => {
						postMessage({
							type: t,
							err: e
						});
					});
					break;
				}
				case "release":
					en(n), postMessage({ type: t });
					break;
				case "run": {
					let { sessionId: e, inputIndices: s, inputs: r, outputIndices: a, options: o } = n;
					nn(e, s, r, a, new Array(a.length).fill(null), o).then((e) => {
						e.some((e) => "cpu" !== e[3]) ? postMessage({
							type: t,
							err: "Proxy does not support non-cpu tensor location."
						}) : postMessage({
							type: t,
							out: e
						}, rn([...r, ...e]));
					}, (e) => {
						postMessage({
							type: t,
							err: e
						});
					});
					break;
				}
				case "end-profiling": sn(n), postMessage({ type: t });
			}
		} catch (s) {
			postMessage({
				type: t,
				err: s
			});
		}
	}), be = ye ? null : (e) => new Worker(e ?? Te, {
		type: "module",
		name: we
	});
}), ve = {};
async function Me(e = {}) {
	var t = e, n = !!globalThis.window, s = !!globalThis.WorkerGlobalScope, r = s && self.name?.startsWith("em-pthread");
	t.mountExternalData = (e, n) => {
		e.startsWith("./") && (e = e.substring(2)), (t.Uc || (t.Uc = /* @__PURE__ */ new Map())).set(e, n);
	}, t.unmountExternalData = () => {
		delete t.Uc;
	}, globalThis.SharedArrayBuffer ?? new WebAssembly.Memory({
		initial: 0,
		maximum: 0,
		shared: !0
	}).buffer.constructor;
	let a = () => {
		let e = (e) => (...t) => {
			let n = Dt;
			return t = e(...t), Dt != n ? new Promise((e, t) => {
				Wt = {
					resolve: e,
					reject: t
				};
			}) : t;
		};
		(() => {
			for (let n of [
				"_OrtAppendExecutionProvider",
				"_OrtCreateSession",
				"_OrtRun",
				"_OrtRunWithBinding",
				"_OrtBindInput"
			]) t[n] = e(t[n]);
		})(), typeof jsepRunAsync < "u" && (t._OrtRun = jsepRunAsync(t._OrtRun), t._OrtRunWithBinding = jsepRunAsync(t._OrtRunWithBinding)), a = void 0;
	};
	t.asyncInit = () => {
		a?.();
	};
	var o, i, l = (e, t) => {
		throw t;
	}, c = import.meta.url, u = "";
	if (n || s) {
		try {
			u = new URL(".", c).href;
		} catch {}
		s && (i = (e) => {
			var t = new XMLHttpRequest();
			return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
		}), o = async (e) => {
			if (v(e)) return new Promise((t, n) => {
				var s = new XMLHttpRequest();
				s.open("GET", e, !0), s.responseType = "arraybuffer", s.onload = () => {
					200 == s.status || 0 == s.status && s.response ? t(s.response) : n(s.status);
				}, s.onerror = n, s.send(null);
			});
			var t = await fetch(e, { credentials: "same-origin" });
			if (t.ok) return t.arrayBuffer();
			throw Error(t.status + " : " + t.url);
		};
	}
	var d, h, _, p, f, m, g = function() {}.bind(), w = function() {}.bind(), y = g, b = w, x = !1, v = (e) => e.startsWith("file://");
	function M() {
		ie.buffer != E.buffer && B();
	}
	if (r) {
		let e = function(n) {
			try {
				var s = n.data, r = s.Oc;
				if ("load" === r) {
					let n = [];
					self.onmessage = (e) => n.push(e), m = () => {
						postMessage({ Oc: "loaded" });
						for (let t of n) e(t);
						self.onmessage = e;
					};
					for (let e of s.ce) t[e] && !t[e].proxy || (t[e] = (...t) => {
						postMessage({
							Oc: "callHandler",
							be: e,
							args: t
						});
					}, "print" == e && (y = t[e]), "printErr" == e && (b = t[e]));
					ie = s.ie, B(), h = s.je, G(), xo();
				} else if ("run" === r) {
					a = s.Nc, o = (M(), F)[a + 52 >>> 2 >>> 0], a = (M(), F)[a + 56 >>> 2 >>> 0], Gr(o, o - a), Ur(o), Ir(s.Nc, 0, 0, 1, 0, 0), re(), Tt(s.Nc), k || (lr(), k = !0);
					try {
						le(s.ge, s.Wc);
					} catch (a) {
						if ("unwind" != a) throw a;
					}
				} else "setimmediate" !== s.target && ("checkMailbox" === r ? k && St() : r && (b(`worker: received unknown command ${r}`), b(s)));
			} catch (a) {
				throw Pr(), a;
			}
			var a, o;
		};
		var k = !1;
		self.onunhandledrejection = (e) => {
			throw e.reason || e;
		}, self.onmessage = e;
	}
	var E, A, C, T, S, F, I, P, L, O, z, N = !1;
	function B() {
		var e = ie.buffer;
		t.HEAP8 = E = new Int8Array(e), C = new Int16Array(e), t.HEAPU8 = A = new Uint8Array(e), T = new Uint16Array(e), t.HEAP32 = S = new Int32Array(e), t.HEAPU32 = F = new Uint32Array(e), I = new Float32Array(e), P = new Float64Array(e), L = new BigInt64Array(e), O = new BigUint64Array(e);
	}
	function $() {
		N = !0, r ? m() : za._b();
	}
	function D(e) {
		throw b(e = "Aborted(" + e + ")"), x = !0, e = new WebAssembly.RuntimeError(e + ". Build with -sASSERTIONS for more info."), f?.(e), e;
	}
	function R() {
		return { a: {
			f: he,
			J: pe,
			k: ye,
			p: be,
			l: xe,
			sa: ve,
			b: Me,
			ca: ke,
			Ja: Ae,
			q: Ce,
			da: Pe,
			Za: Le,
			Fa: Oe,
			Ha: ze,
			_a: Ne,
			Xa: Be,
			Qa: $e,
			Wa: De,
			oa: Re,
			Ga: Ge,
			Xb: Ue,
			Ya: Ve,
			Yb: je,
			db: qe,
			Da: Ze,
			Sb: et,
			Qb: lt,
			Ca: ut,
			M: dt,
			I: ht,
			Rb: ft,
			ja: Mt,
			Tb: kt,
			Ta: Et,
			Vb: Ft,
			Ka: Pt,
			Ob: Lt,
			ka: Ot,
			Sa: Tt,
			ab: zt,
			U: Xt,
			n: nn,
			c: st,
			rb: sn,
			w: rn,
			L: an,
			z: on,
			j: ln,
			o: cn,
			sb: un,
			G: dn,
			T: hn,
			h: _n,
			u: pn,
			m: fn,
			i: mn,
			Na: gn,
			Oa: xn,
			Pa: vn,
			La: Mn,
			Ma: kn,
			Pb: Cn,
			eb: Tn,
			cb: In,
			Y: On,
			qb: zn,
			la: Nn,
			bb: Sn,
			fb: Bn,
			$a: $n,
			Wb: Dn,
			N: An,
			gb: Rn,
			X: Gn,
			Ub: Un,
			nb: us,
			C: ds,
			ra: hs,
			qa: _s,
			pb: ps,
			W: fs,
			v: ms,
			mb: gs,
			lb: ws,
			kb: ys,
			ob: bs,
			jb: xs,
			ib: vs,
			hb: Ms,
			Ua: Cs,
			Va: Ts,
			Ia: K,
			V: Ss,
			na: Fs,
			Ra: Is,
			ma: Ls,
			Cb: yo,
			xa: _o,
			Db: wo,
			ya: ho,
			F: eo,
			e: Ga,
			s: Da,
			x: $a,
			B: Ya,
			Fb: lo,
			ba: io,
			D: ja,
			za: co,
			$: po,
			ga: oo,
			Gb: ao,
			Hb: ro,
			Ba: to,
			Aa: so,
			Ib: no,
			wa: go,
			aa: uo,
			d: Ra,
			A: Va,
			r: Ua,
			Bb: bo,
			t: Wa,
			y: Ka,
			H: qa,
			E: Ha,
			K: Za,
			R: fo,
			ia: Ja,
			_: mo,
			Jb: Xa,
			Kb: Qa,
			g: Os,
			a: ie,
			Nb: J,
			Eb: zs,
			ha: Ns,
			O: Bs,
			pa: $s,
			Lb: Ds,
			ta: Rs,
			Q: Gs,
			yb: Us,
			zb: Vs,
			ua: js,
			ea: qs,
			P: Ws,
			Ea: Hs,
			va: Qs,
			Z: Xs,
			wb: Js,
			Zb: Ys,
			S: Ks,
			Ab: Zs,
			tb: er,
			ub: nr,
			vb: sr,
			fa: rr,
			xb: ar,
			Mb: or
		} };
	}
	async function G() {
		function e(e, n) {
			var s, r, a, o, i = za = e.exports;
			e = {};
			for (let [t, l] of Object.entries(i)) "function" == typeof l ? (i = Bt(l), e[t] = i) : e[t] = l;
			return r = za = e, a = (e) => (t) => e(t) >>> 0, o = (e) => () => e() >>> 0, (r = Object.assign({}, r)).$b = a(r.$b), r.Cc = o(r.Cc), r.Ec = a(r.Ec), r.rd = (s = r.rd, (e, t) => s(e, t) >>> 0), r.wd = a(r.wd), r.xd = o(r.xd), r.Bd = a(r.Bd), za = r, te.push(za.id), ir = (e = za).$b, lr = e.ac, t._OrtInit = e.bc, t._OrtGetLastError = e.cc, t._OrtCreateSessionOptions = e.dc, t._OrtAppendExecutionProvider = e.ec, t._OrtAddFreeDimensionOverride = e.fc, t._OrtAddSessionConfigEntry = e.gc, t._OrtReleaseSessionOptions = e.hc, t._OrtCreateSession = e.ic, t._OrtReleaseSession = e.jc, t._OrtGetInputOutputCount = e.kc, t._OrtGetInputOutputMetadata = e.lc, t._OrtFree = e.mc, t._OrtCreateTensor = e.nc, t._OrtGetTensorData = e.oc, t._OrtReleaseTensor = e.pc, t._OrtCreateRunOptions = e.qc, t._OrtAddRunConfigEntry = e.rc, t._OrtReleaseRunOptions = e.sc, t._OrtCreateBinding = e.tc, t._OrtBindInput = e.uc, t._OrtBindOutput = e.vc, t._OrtClearBoundOutputs = e.wc, t._OrtReleaseBinding = e.xc, t._OrtRunWithBinding = e.yc, t._OrtRun = e.zc, t._OrtEndProfiling = e.Ac, cr = t._OrtGetWebGpuDevice = e.Bc, ur = e.Cc, dr = t._free = e.Dc, hr = t._malloc = e.Ec, _r = t._wgpuBufferRelease = e.Fc, pr = t._wgpuCreateInstance = e.Gc, fr = e.Hc, mr = e.Ic, gr = e.Jc, wr = e.Kc, yr = e.Lc, br = e.Pc, xr = e.Zc, vr = e._c, Mr = e.$c, kr = e.bd, Er = e.cd, Ar = e.dd, Cr = e.ed, Tr = e.fd, Sr = e.gd, Fr = e.hd, Ir = e.kd, Pr = e.ld, Lr = e.md, Or = e.nd, zr = e.od, Nr = e.pd, Br = e.qd, $r = e.rd, Dr = e.sd, Rr = e.td, Gr = e.ud, Ur = e.vd, Vr = e.wd, jr = e.xd, qr = e.yd, Wr = e.zd, Hr = e.Ad, Qr = e.Bd, Xr = e.Cd, Jr = e.Dd, Yr = e.Ed, Kr = e.Fd, Zr = e.Gd, ea = e.Hd, ta = e.Id, na = e.Jd, sa = e.Kd, ra = e.Ld, aa = e.Md, oa = e.Nd, ia = e.Od, la = e.Pd, ca = e.Qd, ua = e.Rd, da = e.Td, ha = e.Ud, _a = e.Vd, pa = e.Wd, fa = e.Yd, ma = e.Zd, ga = e._d, wa = e.$d, ya = e.ae, ba = e.oe, xa = e.pe, va = e.qe, Ma = e.re, ka = e.se, Ea = e.te, Aa = e.ue, Ca = e.ve, Ta = e.we, Sa = e.xe, Fa = e.ye, Ia = e.Ye, Pa = e.Ze, La = e._e, Oa = e.$e, h = n, za;
		}
		var n, s = R();
		return t.instantiateWasm ? new Promise((n) => {
			t.instantiateWasm(s, (t, s) => {
				n(e(t, s));
			});
		}) : r ? e(new WebAssembly.Instance(h, R()), h) : (z ??= t.locateFile ? t.locateFile ? t.locateFile("ort-wasm-simd-threaded.asyncify.wasm", u) : u + "ort-wasm-simd-threaded.asyncify.wasm" : new URL("" + new URL("../ort-wasm-simd-threaded.asyncify-DMmc6YqF.wasm", import.meta.url).href, "" + import.meta.url).href, e((n = await async function(e) {
			var t = z;
			if (!d && !v(t)) try {
				var n = fetch(t, { credentials: "same-origin" });
				return await WebAssembly.instantiateStreaming(n, e);
			} catch (s) {
				b(`wasm streaming compile failed: ${s}`), b("falling back to ArrayBuffer instantiation");
			}
			return async function(e, t) {
				try {
					var n = await async function(e) {
						if (!d) try {
							var t = await o(e);
							return new Uint8Array(t);
						} catch {}
						if (e == z && d) e = new Uint8Array(d);
						else {
							if (!i) throw "both async and sync fetching of the wasm failed";
							e = i(e);
						}
						return e;
					}(e);
					return await WebAssembly.instantiate(n, t);
				} catch (s) {
					b(`failed to asynchronously prepare wasm: ${s}`), D(s);
				}
			}(t, e);
		}(s)).instance, n.module));
	}
	class U {
		name = "ExitStatus";
		constructor(e) {
			this.message = `Program terminated with exit(${e})`, this.status = e;
		}
	}
	var V = (e) => {
		e.terminate(), e.onmessage = () => {};
	}, j = [], q = 0, W = null, H = (e) => {
		0 == Z.length && (oe(), ae(Z[0]));
		var t = Z.pop();
		if (!t) return 6;
		ee.push(t), ne[e.Nc] = t, t.Nc = e.Nc;
		var n = {
			Oc: "run",
			ge: e.fe,
			Wc: e.Wc,
			Nc: e.Nc
		};
		return t.postMessage(n, e.Yc), 0;
	}, Q = 0, X = (e, t, ...n) => {
		var s, r = 16 * n.length, a = jr(), o = Vr(r), i = o >>> 3;
		for (s of n) "bigint" == typeof s ? ((M(), L)[i++ >>> 0] = 1n, (M(), L)[i++ >>> 0] = s) : ((M(), L)[i++ >>> 0] = 0n, (M(), P)[i++ >>> 0] = s);
		return e = Lr(e, 0, r, o, t), Ur(a), e;
	};
	function J(e) {
		if (r) return X(0, 1, e);
		if (_ = e, !(0 < Q)) {
			for (var t of ee) V(t);
			for (t of Z) V(t);
			Z = [], ee = [], ne = {}, x = !0;
		}
		l(0, new U(e));
	}
	function Y(e) {
		if (r) return X(1, 0, e);
		K(e);
	}
	var K = (e) => {
		if (_ = e, r) throw Y(e), "unwind";
		J(e);
	}, Z = [], ee = [], te = [], ne = {}, se = (e) => {
		var t = e.Nc;
		delete ne[t], Z.push(e), ee.splice(ee.indexOf(e), 1), e.Nc = 0, Or(t);
	};
	function re() {
		te.forEach((e) => e());
	}
	var ae = (e) => new Promise((n) => {
		e.onmessage = (s) => {
			var r = s.data;
			if (s = r.Oc, r.Vc && r.Vc != ur()) {
				var a = ne[r.Vc];
				a ? a.postMessage(r, r.Yc) : b(`Internal error! Worker sent a message "${s}" to target pthread ${r.Vc}, but that thread no longer exists!`);
			} else "checkMailbox" === s ? St() : "spawnThread" === s ? H(r) : "cleanupThread" === s ? At(() => {
				se(ne[r.he]);
			}) : "loaded" === s ? (e.loaded = !0, n(e)) : "setimmediate" === r.target ? e.postMessage(r) : "uncaughtException" === s ? e.onerror(r.error) : "callHandler" === s ? t[r.be](...r.args) : s && b(`worker sent an unknown command ${s}`);
		}, e.onerror = (e) => {
			throw b(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`), e;
		};
		var s, r = [];
		for (s of []) t.propertyIsEnumerable(s) && r.push(s);
		e.postMessage({
			Oc: "load",
			ce: r,
			ie,
			je: h
		});
	});
	function oe() {
		var e = new Worker((() => {
			let e = URL;
			return import.meta.url > "file:" && import.meta.url < "file;" ? new e("ort.webgpu.bundle.min.mjs", import.meta.url) : new URL(import.meta.url);
		})(), {
			type: "module",
			workerData: "em-pthread",
			name: "em-pthread"
		});
		Z.push(e);
	}
	var ie, le = (e, t) => {
		Q = 0, e = Jr(e, t), 0 < Q ? _ = e : zr(e);
	}, ce = [], ue = 0, de = (e) => -9007199254740992 > e || 9007199254740992 < e ? NaN : Number(e);
	function he(e) {
		var t = new ge(e >>>= 0);
		return 0 == (M(), E)[t.Qc + 12 >>> 0] && (fe(t, !0), ue--), me(t, !1), ce.push(t), Qr(e);
	}
	var _e = 0, pe = () => {
		Dr(0, 0);
		var e = ce.pop();
		qr(e.Xc), _e = 0;
	};
	function fe(e, t) {
		t = t ? 1 : 0, (M(), E)[e.Qc + 12 >>> 0] = t;
	}
	function me(e, t) {
		t = t ? 1 : 0, (M(), E)[e.Qc + 13 >>> 0] = t;
	}
	class ge {
		constructor(e) {
			this.Xc = e, this.Qc = e - 24;
		}
	}
	var we = (e) => {
		var t = _e;
		if (!t) return Rr(0), 0;
		var n = new ge(t);
		(M(), F)[n.Qc + 16 >>> 2 >>> 0] = t;
		var s = (M(), F)[n.Qc + 4 >>> 2 >>> 0];
		if (!s) return Rr(0), t;
		for (var r of e) {
			if (0 === r || r === s) break;
			if (Hr(r, s, n.Qc + 16)) return Rr(r), t;
		}
		return Rr(s), t;
	};
	function ye() {
		return we([]);
	}
	function be(e) {
		return we([e >>> 0]);
	}
	function xe(e, t, n, s) {
		return we([
			e >>> 0,
			t >>> 0,
			n >>> 0,
			s >>> 0
		]);
	}
	var ve = () => {
		var e = ce.pop();
		e || D("no exception to throw");
		var t = e.Xc;
		throw 0 == (M(), E)[e.Qc + 13 >>> 0] && (ce.push(e), me(e, !0), fe(e, !1), ue++), Wr(t), _e = t;
	};
	function Me(e, t, n) {
		var s = new ge(e >>>= 0);
		throw t >>>= 0, n >>>= 0, (M(), F)[s.Qc + 16 >>> 2 >>> 0] = 0, (M(), F)[s.Qc + 4 >>> 2 >>> 0] = t, (M(), F)[s.Qc + 8 >>> 2 >>> 0] = n, Wr(e), ue++, _e = e;
	}
	var ke = () => ue;
	function Ee(e, t, n, s) {
		return r ? X(2, 1, e, t, n, s) : Ae(e, t, n, s);
	}
	function Ae(e, t, n, s) {
		if (e >>>= 0, t >>>= 0, n >>>= 0, s >>>= 0, !globalThis.SharedArrayBuffer) return 6;
		var a = [];
		return r && 0 === a.length ? Ee(e, t, n, s) : (e = {
			fe: n,
			Nc: e,
			Wc: s,
			Yc: a
		}, r ? (e.Oc = "spawnThread", postMessage(e, a), 0) : H(e));
	}
	function Ce(e) {
		throw _e ||= e >>> 0, _e;
	}
	var Te = globalThis.TextDecoder && new TextDecoder(), Se = (e, t, n, s) => {
		if (n = t + n, s) return n;
		for (; e[t] && !(t >= n);) ++t;
		return t;
	}, Fe = (e, t = 0, n, s) => {
		if (16 < (n = Se(e, t >>>= 0, n, s)) - t && e.buffer && Te) return Te.decode(e.buffer instanceof ArrayBuffer ? e.subarray(t, n) : e.slice(t, n));
		for (s = ""; t < n;) {
			var r = e[t++];
			if (128 & r) {
				var a = 63 & e[t++];
				if (192 == (224 & r)) s += String.fromCharCode((31 & r) << 6 | a);
				else {
					var o = 63 & e[t++];
					65536 > (r = 224 == (240 & r) ? (15 & r) << 12 | a << 6 | o : (7 & r) << 18 | a << 12 | o << 6 | 63 & e[t++]) ? s += String.fromCharCode(r) : (r -= 65536, s += String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r));
				}
			} else s += String.fromCharCode(r);
		}
		return s;
	}, Ie = (e, t, n) => (e >>>= 0) ? Fe((M(), A), e, t, n) : "";
	function Pe(e, t, n) {
		return r ? X(3, 1, e, t, n) : 0;
	}
	function Le(e, t) {
		if (r) return X(4, 1, e, t);
	}
	function Oe(e, t) {
		if (r) return X(5, 1, e, t);
	}
	function ze(e, t, n) {
		if (r) return X(6, 1, e, t, n);
	}
	function Ne(e, t, n) {
		return r ? X(7, 1, e, t, n) : 0;
	}
	function Be(e, t) {
		if (r) return X(8, 1, e, t);
	}
	function $e(e, t, n) {
		if (r) return X(9, 1, e, t, n);
	}
	function De(e, t, n, s) {
		if (r) return X(10, 1, e, t, n, s);
	}
	function Re(e, t, n, s) {
		if (r) return X(11, 1, e, t, n, s);
	}
	function Ge(e, t, n, s) {
		if (r) return X(12, 1, e, t, n, s);
	}
	function Ue(e) {
		if (r) return X(13, 1, e);
	}
	function Ve(e, t) {
		if (r) return X(14, 1, e, t);
	}
	function je(e, t, n) {
		if (r) return X(15, 1, e, t, n);
	}
	var qe = () => D(""), We = (e) => {
		e >>>= 0;
		for (var t = "";;) {
			var n = (M(), A)[e++ >>> 0];
			if (!n) return t;
			t += String.fromCharCode(n);
		}
	}, He = {}, Qe = {}, Xe = {}, Je = class extends Error {
		constructor(e) {
			super(e), this.name = "BindingError";
		}
	};
	function Ye(e, t, n = {}) {
		return function(e, t, n = {}) {
			var s = t.name;
			if (!e) throw new Je(`type "${s}" must have a positive integer typeid pointer`);
			if (Qe.hasOwnProperty(e)) {
				if (n.de) return;
				throw new Je(`Cannot register type '${s}' twice`);
			}
			Qe[e] = t, delete Xe[e], He.hasOwnProperty(e) && (t = He[e], delete He[e], t.forEach((e) => e()));
		}(e, t, n);
	}
	var Ke = (e, t, n) => {
		switch (t) {
			case 1: return n ? (e) => (M(), E)[e >>> 0] : (e) => (M(), A)[e >>> 0];
			case 2: return n ? (e) => (M(), C)[e >>> 1 >>> 0] : (e) => (M(), T)[e >>> 1 >>> 0];
			case 4: return n ? (e) => (M(), S)[e >>> 2 >>> 0] : (e) => (M(), F)[e >>> 2 >>> 0];
			case 8: return n ? (e) => (M(), L)[e >>> 3 >>> 0] : (e) => (M(), O)[e >>> 3 >>> 0];
			default: throw new TypeError(`invalid integer width (${t}): ${e}`);
		}
	};
	function Ze(e, t, n, s, r) {
		e >>>= 0, n >>>= 0, t = We(t >>> 0);
		let a = (e) => e;
		if (s = 0n === s) {
			let e = 8 * n;
			a = (t) => BigInt.asUintN(e, t), r = a(r);
		}
		Ye(e, {
			name: t,
			Mc: a,
			Sc: (e, t) => ("number" == typeof t && (t = BigInt(t)), t),
			Rc: Ke(t, n, !s),
			Tc: null
		});
	}
	function et(e, t, n, s) {
		Ye(e >>>= 0, {
			name: t = We(t >>> 0),
			Mc: function(e) {
				return !!e;
			},
			Sc: function(e, t) {
				return t ? n : s;
			},
			Rc: function(e) {
				return this.Mc((M(), A)[e >>> 0]);
			},
			Tc: null
		});
	}
	var tt = [], nt = [
		0,
		1,
		,
		1,
		null,
		1,
		!0,
		1,
		!1,
		1
	];
	function st(e) {
		9 < (e >>>= 0) && 0 == --nt[e + 1] && (nt[e] = void 0, tt.push(e));
	}
	var rt = (e) => {
		if (!e) throw new Je(`Cannot use deleted val. handle = ${e}`);
		return nt[e];
	}, at = (e) => {
		switch (e) {
			case void 0: return 2;
			case null: return 4;
			case !0: return 6;
			case !1: return 8;
			default:
				let t = tt.pop() || nt.length;
				return nt[t] = e, nt[t + 1] = 1, t;
		}
	};
	function ot(e) {
		return this.Mc((M(), F)[e >>> 2 >>> 0]);
	}
	var it = {
		name: "emscripten::val",
		Mc: (e) => {
			var t = rt(e);
			return st(e), t;
		},
		Sc: (e, t) => at(t),
		Rc: ot,
		Tc: null
	};
	function lt(e) {
		return Ye(e >>> 0, it);
	}
	var ct = (e, t) => {
		switch (t) {
			case 4: return function(e) {
				return this.Mc((M(), I)[e >>> 2 >>> 0]);
			};
			case 8: return function(e) {
				return this.Mc((M(), P)[e >>> 3 >>> 0]);
			};
			default: throw new TypeError(`invalid float width (${t}): ${e}`);
		}
	};
	function ut(e, t, n) {
		n >>>= 0, Ye(e >>>= 0, {
			name: t = We(t >>> 0),
			Mc: (e) => e,
			Sc: (e, t) => t,
			Rc: ct(t, n),
			Tc: null
		});
	}
	function dt(e, t, n, s, r) {
		e >>>= 0, n >>>= 0, t = We(t >>> 0);
		let a = (e) => e;
		if (0 === s) {
			var o = 32 - 8 * n;
			a = (e) => e << o >>> o, r = a(r);
		}
		Ye(e, {
			name: t,
			Mc: a,
			Sc: (e, t) => t,
			Rc: Ke(t, n, 0 !== s),
			Tc: null
		});
	}
	function ht(e, t, n) {
		function s(e) {
			var t = (M(), F)[e >>> 2 >>> 0];
			return e = (M(), F)[e + 4 >>> 2 >>> 0], new r((M(), E).buffer, e, t);
		}
		var r = [
			Int8Array,
			Uint8Array,
			Int16Array,
			Uint16Array,
			Int32Array,
			Uint32Array,
			Float32Array,
			Float64Array,
			BigInt64Array,
			BigUint64Array
		][t];
		Ye(e >>>= 0, {
			name: n = We(n >>> 0),
			Mc: s,
			Rc: s
		}, { de: !0 });
	}
	var _t = (e, t, n) => {
		var s = (M(), A);
		if (t >>>= 0, 0 < n) {
			var r = t;
			n = t + n - 1;
			for (var a = 0; a < e.length; ++a) {
				var o = e.codePointAt(a);
				if (127 >= o) {
					if (t >= n) break;
					s[t++ >>> 0] = o;
				} else if (2047 >= o) {
					if (t + 1 >= n) break;
					s[t++ >>> 0] = 192 | o >> 6, s[t++ >>> 0] = 128 | 63 & o;
				} else if (65535 >= o) {
					if (t + 2 >= n) break;
					s[t++ >>> 0] = 224 | o >> 12, s[t++ >>> 0] = 128 | o >> 6 & 63, s[t++ >>> 0] = 128 | 63 & o;
				} else {
					if (t + 3 >= n) break;
					s[t++ >>> 0] = 240 | o >> 18, s[t++ >>> 0] = 128 | o >> 12 & 63, s[t++ >>> 0] = 128 | o >> 6 & 63, s[t++ >>> 0] = 128 | 63 & o, a++;
				}
			}
			s[t >>> 0] = 0, e = t - r;
		} else e = 0;
		return e;
	}, pt = (e) => {
		for (var t = 0, n = 0; n < e.length; ++n) {
			var s = e.charCodeAt(n);
			127 >= s ? t++ : 2047 >= s ? t += 2 : 55296 <= s && 57343 >= s ? (t += 4, ++n) : t += 3;
		}
		return t;
	};
	function ft(e, t) {
		Ye(e >>>= 0, {
			name: t = We(t >>> 0),
			Mc(e) {
				var t = (M(), F)[e >>> 2 >>> 0];
				return t = Ie(e + 4, t, !0), dr(e), t;
			},
			Sc(e, t) {
				t instanceof ArrayBuffer && (t = new Uint8Array(t));
				var n = "string" == typeof t;
				if (!(n || ArrayBuffer.isView(t) && 1 == t.BYTES_PER_ELEMENT)) throw new Je("Cannot pass non-string to std::string");
				var s = n ? pt(t) : t.length, r = hr(4 + s + 1), a = r + 4;
				return (M(), F)[r >>> 2 >>> 0] = s, n ? _t(t, a, s + 1) : (M(), A).set(t, a >>> 0), null !== e && e.push(dr, r), r;
			},
			Rc: ot,
			Tc(e) {
				dr(e);
			}
		});
	}
	var mt = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, gt = (e, t, n) => {
		if (e >>>= 1, 16 < (t = Se((M(), T), e, t / 2, n)) - e && mt) return mt.decode((M(), T).slice(e, t));
		for (n = ""; e < t; ++e) {
			var s = (M(), T)[e >>> 0];
			n += String.fromCharCode(s);
		}
		return n;
	}, wt = (e, t, n) => {
		if (n ??= 2147483647, 2 > n) return 0;
		var s = t;
		n = (n -= 2) < 2 * e.length ? n / 2 : e.length;
		for (var r = 0; r < n; ++r) {
			var a = e.charCodeAt(r);
			(M(), C)[t >>> 1 >>> 0] = a, t += 2;
		}
		return (M(), C)[t >>> 1 >>> 0] = 0, t - s;
	}, yt = (e) => 2 * e.length, bt = (e, t, n) => {
		var s = "";
		e >>>= 2;
		for (var r = 0; !(r >= t / 4); r++) {
			var a = (M(), F)[e + r >>> 0];
			if (!a && !n) break;
			s += String.fromCodePoint(a);
		}
		return s;
	}, xt = (e, t, n) => {
		if (t >>>= 0, n ??= 2147483647, 4 > n) return 0;
		var s = t;
		n = s + n - 4;
		for (var r = 0; r < e.length; ++r) {
			var a = e.codePointAt(r);
			if (65535 < a && r++, (M(), S)[t >>> 2 >>> 0] = a, (t += 4) + 4 > n) break;
		}
		return (M(), S)[t >>> 2 >>> 0] = 0, t - s;
	}, vt = (e) => {
		for (var t = 0, n = 0; n < e.length; ++n) 65535 < e.codePointAt(n) && n++, t += 4;
		return t;
	};
	function Mt(e, t, n) {
		if (e >>>= 0, t >>>= 0, n = We(n >>>= 0), 2 === t) var s = gt, r = wt, a = yt;
		else s = bt, r = xt, a = vt;
		Ye(e, {
			name: n,
			Mc: (e) => {
				var n = (M(), F)[e >>> 2 >>> 0];
				return n = s(e + 4, n * t, !0), dr(e), n;
			},
			Sc: (e, s) => {
				if ("string" != typeof s) throw new Je(`Cannot pass non-string to C++ string type ${n}`);
				var o = a(s), i = hr(4 + o + t);
				return (M(), F)[i >>> 2 >>> 0] = o / t, r(s, i + 4, o + t), null !== e && e.push(dr, i), i;
			},
			Rc: ot,
			Tc(e) {
				dr(e);
			}
		});
	}
	function kt(e, t) {
		Ye(e >>>= 0, {
			ee: !0,
			name: t = We(t >>> 0),
			Mc: () => {},
			Sc: () => {}
		});
	}
	function Et(e) {
		Ir(e >>> 0, !s, 1, !n, 131072, !1), re();
	}
	var At = (e) => {
		if (!x) try {
			if (e(), !(0 < Q)) try {
				r ? ur() && zr(_) : K(_);
			} catch (t) {
				t instanceof U || "unwind" == t || l(0, t);
			}
		} catch (t) {
			t instanceof U || "unwind" == t || l(0, t);
		}
	}, Ct = !Atomics.waitAsync || globalThis.navigator?.userAgent && 91 > Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./) || [])[2]);
	function Tt(e) {
		e >>>= 0, Ct || (Atomics.waitAsync((M(), S), e >>> 2, e).value.then(St), e += 128, Atomics.store((M(), S), e >>> 2, 1));
	}
	var St = () => At(() => {
		var e = ur();
		e && (Tt(e), Br());
	});
	function Ft(e, t) {
		(e >>>= 0) == t >>> 0 ? setTimeout(St) : r ? postMessage({
			Vc: e,
			Oc: "checkMailbox"
		}) : (e = ne[e]) && e.postMessage({ Oc: "checkMailbox" });
	}
	var It = [];
	function Pt(e, t, n, s, r) {
		for (t >>>= 0, r >>>= 0, It.length = 0, n = r >>> 3, s = r + s >>> 3; n < s;) {
			var a = (M(), L)[n++ >>> 0] ? (M(), L)[n++ >>> 0] : (M(), P)[n++ >>> 0];
			It.push(a);
		}
		return (t ? Ba[t] : Na[e])(...It);
	}
	var Lt = () => {
		Q = 0;
	};
	function Ot(e) {
		e >>>= 0, r ? postMessage({
			Oc: "cleanupThread",
			he: e
		}) : se(ne[e]);
	}
	function zt(e) {}
	var Nt = (e) => {
		try {
			e();
		} catch (t) {
			D(t);
		}
	};
	function Bt(e) {
		var t = (...t) => {
			Gt.push(e);
			try {
				return e(...t);
			} finally {
				x || (Gt.pop(), Dt && 1 === $t && 0 === Gt.length && ($t = 0, Q += 1, Nt(Pa), typeof Fibers < "u" && Fibers.Be()));
			}
		};
		return jt.set(e, t), t;
	}
	var $t = 0, Dt = null, Rt = 0, Gt = [], Ut = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), jt = /* @__PURE__ */ new Map(), qt = 0, Wt = null, Ht = [], Qt = (e) => function() {
		if (!x) {
			if (0 === $t) {
				var t = !1, n = !1;
				((t) => {
					e().then(t);
				})((e = 0) => {
					if (!x && (Rt = e, t = !0, n)) {
						$t = 2, Nt(() => La(Dt)), typeof MainLoop < "u" && MainLoop.Xd && MainLoop.resume(), e = !1;
						try {
							var s = (o = (M(), S)[Dt + 8 >>> 2 >>> 0], o = Vt.get(o), o = jt.get(o), --Q, o());
						} catch (o) {
							s = o, e = !0;
						}
						var r = !1;
						if (!Dt) {
							var a = Wt;
							a && (Wt = null, (e ? a.reject : a.resolve)(s), r = !0);
						}
						if (e && !r) throw s;
					}
					var o;
				}), n = !0, t || ($t = 1, Dt = function() {
					var e = hr(65548), t = e + 12;
					if ((M(), F)[e >>> 2 >>> 0] = t, (M(), F)[e + 4 >>> 2 >>> 0] = t + 65536, t = Gt[0], !Ut.has(t)) {
						var n = qt++;
						Ut.set(t, n), Vt.set(n, t);
					}
					return t = Ut.get(t), (M(), S)[e + 8 >>> 2 >>> 0] = t, e;
				}(), typeof MainLoop < "u" && MainLoop.Xd && MainLoop.pause(), Nt(() => Ia(Dt)));
			} else 2 === $t ? ($t = 0, Nt(Oa), dr(Dt), Dt = null, Ht.forEach(At)) : D(`invalid state: ${$t}`);
			return Rt;
		}
	}();
	function Xt(e) {
		return e >>>= 0, Qt(async () => at(await rt(e)));
	}
	var Jt = [], Yt = (e) => {
		var t = Jt.length;
		return Jt.push(e), t;
	}, Kt = (e, t) => {
		for (var n = Array(e), s = 0; s < e; ++s) {
			var r = s, a = (M(), F)[t + 4 * s >>> 2 >>> 0], o = Qe[a];
			if (void 0 === o) throw e = `parameter ${s}`, a = ir(a), t = We(a), dr(a), new Je(`${e} has unknown type ${t}`);
			n[r] = o;
		}
		return n;
	}, Zt = (e, t, n) => {
		var s = [];
		return e = e(s, n), s.length && ((M(), F)[t >>> 2 >>> 0] = at(s)), e;
	}, en = {}, tn = (e) => {
		var t = en[e];
		return void 0 === t ? We(e) : t;
	};
	function nn(e, t, n) {
		var [s, ...r] = Kt(e, t >>> 0);
		t = s.Sc.bind(s);
		var a = r.map((e) => e.Rc.bind(e));
		e--;
		var o = { toValue: rt };
		switch (e = a.map((e, t) => {
			var n = `argFromPtr${t}`;
			return o[n] = e, `${n}(args${t ? "+" + 8 * t : ""})`;
		}), n) {
			case 0:
				var i = "toValue(handle)";
				break;
			case 2:
				i = "new (toValue(handle))";
				break;
			case 3:
				i = "";
				break;
			case 1: o.getStringOrSymbol = tn, i = "toValue(handle)[getStringOrSymbol(methodName)]";
		}
		return i += `(${e})`, s.ee || (o.toReturnWire = t, o.emval_returnValue = Zt, i = `return emval_returnValue(toReturnWire, destructorsRef, ${i})`), i = `return function (handle, methodName, destructorsRef, args) {\n  ${i}\n  }`, n = new Function(Object.keys(o), i)(...Object.values(o)), i = `methodCaller<(${r.map((e) => e.name)}) => ${s.name}>`, Yt(Object.defineProperty(n, "name", { value: i }));
	}
	function sn(e, t) {
		return t >>>= 0, (e = rt(e >>> 0)) == rt(t);
	}
	function rn(e) {
		return (e >>>= 0) ? (e = tn(e), at(globalThis[e])) : at(globalThis);
	}
	function an(e) {
		return e = tn(e >>> 0), at(t[e]);
	}
	function on(e, t) {
		return t >>>= 0, e = rt(e >>> 0), t = rt(t), at(e[t]);
	}
	function ln(e) {
		9 < (e >>>= 0) && (nt[e + 1] += 1);
	}
	function cn(e, t, n, s, r) {
		return Jt[e >>> 0](t >>> 0, n >>> 0, s >>> 0, r >>> 0);
	}
	function un(e, t, n, s, r) {
		return cn(e >>> 0, t >>> 0, n >>> 0, s >>> 0, r >>> 0);
	}
	function dn() {
		return at([]);
	}
	function hn(e) {
		e = rt(e >>> 0);
		for (var t = Array(e.length), n = 0; n < e.length; n++) t[n] = e[n];
		return at(t);
	}
	function _n(e) {
		return at(tn(e >>> 0));
	}
	function pn() {
		return at({});
	}
	function fn(e) {
		for (var t = rt(e >>>= 0); t.length;) {
			var n = t.pop();
			t.pop()(n);
		}
		st(e);
	}
	function mn(e, t, n) {
		t >>>= 0, n >>>= 0, e = rt(e >>> 0), t = rt(t), n = rt(n), e[t] = n;
	}
	function gn(e, t) {
		e = de(e), t >>>= 0, e = /* @__PURE__ */ new Date(1e3 * e), (M(), S)[t >>> 2 >>> 0] = e.getUTCSeconds(), (M(), S)[t + 4 >>> 2 >>> 0] = e.getUTCMinutes(), (M(), S)[t + 8 >>> 2 >>> 0] = e.getUTCHours(), (M(), S)[t + 12 >>> 2 >>> 0] = e.getUTCDate(), (M(), S)[t + 16 >>> 2 >>> 0] = e.getUTCMonth(), (M(), S)[t + 20 >>> 2 >>> 0] = e.getUTCFullYear() - 1900, (M(), S)[t + 24 >>> 2 >>> 0] = e.getUTCDay(), e = (e.getTime() - Date.UTC(e.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5 | 0, (M(), S)[t + 28 >>> 2 >>> 0] = e;
	}
	var wn = (e) => e % 4 == 0 && (e % 100 != 0 || e % 400 == 0), yn = [
		0,
		31,
		60,
		91,
		121,
		152,
		182,
		213,
		244,
		274,
		305,
		335
	], bn = [
		0,
		31,
		59,
		90,
		120,
		151,
		181,
		212,
		243,
		273,
		304,
		334
	];
	function xn(e, t) {
		e = de(e), t >>>= 0, e = /* @__PURE__ */ new Date(1e3 * e), (M(), S)[t >>> 2 >>> 0] = e.getSeconds(), (M(), S)[t + 4 >>> 2 >>> 0] = e.getMinutes(), (M(), S)[t + 8 >>> 2 >>> 0] = e.getHours(), (M(), S)[t + 12 >>> 2 >>> 0] = e.getDate(), (M(), S)[t + 16 >>> 2 >>> 0] = e.getMonth(), (M(), S)[t + 20 >>> 2 >>> 0] = e.getFullYear() - 1900, (M(), S)[t + 24 >>> 2 >>> 0] = e.getDay();
		var n = (wn(e.getFullYear()) ? yn : bn)[e.getMonth()] + e.getDate() - 1 | 0;
		(M(), S)[t + 28 >>> 2 >>> 0] = n, (M(), S)[t + 36 >>> 2 >>> 0] = -60 * e.getTimezoneOffset(), n = new Date(e.getFullYear(), 6, 1).getTimezoneOffset();
		var s = new Date(e.getFullYear(), 0, 1).getTimezoneOffset();
		e = 0 | (n != s && e.getTimezoneOffset() == Math.min(s, n)), (M(), S)[t + 32 >>> 2 >>> 0] = e;
	}
	function vn(e) {
		e >>>= 0;
		var t = new Date((M(), S)[e + 20 >>> 2 >>> 0] + 1900, (M(), S)[e + 16 >>> 2 >>> 0], (M(), S)[e + 12 >>> 2 >>> 0], (M(), S)[e + 8 >>> 2 >>> 0], (M(), S)[e + 4 >>> 2 >>> 0], (M(), S)[e >>> 2 >>> 0], 0), n = (M(), S)[e + 32 >>> 2 >>> 0], s = t.getTimezoneOffset(), r = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(), a = new Date(t.getFullYear(), 0, 1).getTimezoneOffset(), o = Math.min(a, r);
		return 0 > n ? (M(), S)[e + 32 >>> 2 >>> 0] = +(r != a && o == s) : 0 < n != (o == s) && (r = Math.max(a, r), t.setTime(t.getTime() + 6e4 * ((0 < n ? o : r) - s))), (M(), S)[e + 24 >>> 2 >>> 0] = t.getDay(), n = (wn(t.getFullYear()) ? yn : bn)[t.getMonth()] + t.getDate() - 1 | 0, (M(), S)[e + 28 >>> 2 >>> 0] = n, (M(), S)[e >>> 2 >>> 0] = t.getSeconds(), (M(), S)[e + 4 >>> 2 >>> 0] = t.getMinutes(), (M(), S)[e + 8 >>> 2 >>> 0] = t.getHours(), (M(), S)[e + 12 >>> 2 >>> 0] = t.getDate(), (M(), S)[e + 16 >>> 2 >>> 0] = t.getMonth(), (M(), S)[e + 20 >>> 2 >>> 0] = t.getYear(), e = t.getTime(), BigInt(isNaN(e) ? -1 : e / 1e3);
	}
	function Mn(e, t, n, s, a, o, i) {
		return r ? X(16, 1, e, t, n, s, a, o, i) : -52;
	}
	function kn(e, t, n, s, a, o) {
		if (r) return X(17, 1, e, t, n, s, a, o);
	}
	var En = {}, An = () => performance.timeOrigin + performance.now();
	function Cn(e, t) {
		return r ? X(18, 1, e, t) : (En[e] && (clearTimeout(En[e].id), delete En[e]), t ? (En[e] = {
			id: setTimeout(() => {
				delete En[e], At(() => Nr(e, performance.timeOrigin + performance.now()));
			}, t),
			Ae: t
		}, 0) : 0);
	}
	function Tn(e, t, n, s) {
		e >>>= 0, t >>>= 0, n >>>= 0, s >>>= 0;
		var r = (/* @__PURE__ */ new Date()).getFullYear(), a = new Date(r, 0, 1).getTimezoneOffset();
		r = new Date(r, 6, 1).getTimezoneOffset();
		var o = Math.max(a, r);
		(M(), F)[e >>> 2 >>> 0] = 60 * o, (M(), S)[t >>> 2 >>> 0] = +(a != r), e = (t = (e) => {
			var t = Math.abs(e);
			return `UTC${0 <= e ? "-" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}${String(t % 60).padStart(2, "0")}`;
		})(a), t = t(r), r < a ? (_t(e, n, 17), _t(t, s, 17)) : (_t(e, s, 17), _t(t, n, 17));
	}
	var Sn = () => Date.now(), Fn = 1;
	function In(e, t, n) {
		if (n >>>= 0, !(0 <= e && 3 >= e)) return 28;
		if (0 === e) e = Date.now();
		else {
			if (!Fn) return 52;
			e = performance.timeOrigin + performance.now();
		}
		return e = Math.round(1e6 * e), (M(), L)[n >>> 3 >>> 0] = BigInt(e), 0;
	}
	var Pn = [], Ln = (e, t) => {
		Pn.length = 0;
		for (var n; n = (M(), A)[e++ >>> 0];) {
			var s = 105 != n;
			t += (s &= 112 != n) && t % 8 ? 4 : 0, Pn.push(112 == n ? (M(), F)[t >>> 2 >>> 0] : 106 == n ? (M(), L)[t >>> 3 >>> 0] : 105 == n ? (M(), S)[t >>> 2 >>> 0] : (M(), P)[t >>> 3 >>> 0]), t += s ? 8 : 4;
		}
		return Pn;
	};
	function On(e, t, n) {
		return e >>>= 0, t = Ln(t >>> 0, n >>> 0), Ba[e](...t);
	}
	function zn(e, t, n) {
		return e >>>= 0, t = Ln(t >>> 0, n >>> 0), Ba[e](...t);
	}
	var Nn = () => {};
	function Bn(e, t) {
		return b(Ie(e >>> 0, t >>> 0));
	}
	var $n = () => {
		throw Q += 1, "unwind";
	};
	function Dn() {
		return 4294901760;
	}
	var Rn = () => 1, Gn = () => navigator.hardwareConcurrency;
	function Un(e) {
		e >>>= 0;
		var t = (M(), A).length;
		if (e <= t || 4294901760 < e) return !1;
		for (var n = 1; 4 >= n; n *= 2) {
			var s = t * (1 + .2 / n);
			s = Math.min(s, e + 100663296);
			e: {
				s = (Math.min(4294901760, 65536 * Math.ceil(Math.max(e, s) / 65536)) - ie.buffer.byteLength + 65535) / 65536 | 0;
				try {
					ie.grow(s), B();
					var r = 1;
					break e;
				} catch {}
				r = void 0;
			}
			if (r) return !0;
		}
		return !1;
	}
	var Vn = (e) => {
		var t = pt(e) + 1, n = Vr(t);
		return _t(e, n, t), n;
	}, jn = (e, t) => {
		(M(), F)[e >>> 2 >>> 0] = t;
		var n = (M(), F)[e >>> 2 >>> 0];
		(M(), F)[e + 4 >>> 2 >>> 0] = (t - n) / 4294967296;
	}, qn = (e) => (M(), F)[e >>> 2 >>> 0] + 4294967296 * (M(), S)[e + 4 >>> 2 >>> 0], Wn = [], Hn = (e, t) => {
		Wn[e >>> 0] = t;
	}, Qn = [], Xn = [], Jn = (e, t) => {
		Xn[e] = new Promise((n) => t.finally(() => n(e)));
	}, Yn = (e) => {
		if (e) return Wn[e >>> 0];
	}, Kn = (e, t) => {
		for (e = (M(), F)[e >>> 2 >>> 0]; e; e = (M(), F)[e >>> 2 >>> 0]) t[(M(), S)[e + 4 >>> 2 >>> 0]](e);
	}, Zn = (e, t, n) => {
		(M(), F)[e >>> 2 >>> 0] = t, (M(), F)[e + 4 >>> 2 >>> 0] = n;
	}, es = (e) => {
		var t = (M(), F)[e >>> 2 >>> 0];
		return e = (M(), F)[e + 4 >>> 2 >>> 0], Ie(t, e);
	}, ts = (e) => {
		var t = (M(), F)[e >>> 2 >>> 0];
		return e = (M(), F)[e + 4 >>> 2 >>> 0], t ? Ie(t, e) : 0 === e ? "" : void 0;
	}, ns = (e) => {
		var t = ts(e + 4), n = (n = (M(), F)[e + 12 >>> 2 >>> 0]) ? Yn(n) : "auto";
		if (e += 16) {
			var s = Yn((M(), F)[e + 4 >>> 2 >>> 0]), r = (M(), F)[e + 16 >>> 2 >>> 0], a = (M(), F)[e + 20 >>> 2 >>> 0];
			if (r) {
				for (var o = {}, i = 0; i < r; ++i) {
					var l = a + 24 * i;
					o[es(l + 4)] = (M(), P)[l + 16 >>> 3 >>> 0];
				}
				r = o;
			} else r = void 0;
			e = {
				module: s,
				constants: r,
				entryPoint: ts(e + 8)
			};
		} else e = void 0;
		return {
			label: t,
			layout: n,
			compute: e
		};
	}, ss = (e, t) => {
		function n(n, s) {
			n = e[n], (M(), F)[t + s >>> 2 >>> 0] = n;
		}
		n("maxTextureDimension1D", 4), n("maxTextureDimension2D", 8), n("maxTextureDimension3D", 12), n("maxTextureArrayLayers", 16), n("maxBindGroups", 20), n("maxBindGroupsPlusVertexBuffers", 24), n("maxBindingsPerBindGroup", 28), n("maxDynamicUniformBuffersPerPipelineLayout", 32), n("maxDynamicStorageBuffersPerPipelineLayout", 36), n("maxSampledTexturesPerShaderStage", 40), n("maxSamplersPerShaderStage", 44), n("maxStorageBuffersPerShaderStage", 48), n("maxStorageTexturesPerShaderStage", 52), n("maxUniformBuffersPerShaderStage", 56), n("minUniformBufferOffsetAlignment", 80), n("minStorageBufferOffsetAlignment", 84), jn(t + 64, e.maxUniformBufferBindingSize), jn(t + 72, e.maxStorageBufferBindingSize), n("maxVertexBuffers", 88), jn(t + 96, e.maxBufferSize), n("maxVertexAttributes", 104), n("maxVertexBufferArrayStride", 108), n("maxInterStageShaderVariables", 112), n("maxColorAttachments", 116), n("maxColorAttachmentBytesPerSample", 120), n("maxComputeWorkgroupStorageSize", 124), n("maxComputeInvocationsPerWorkgroup", 128), n("maxComputeWorkgroupSizeX", 132), n("maxComputeWorkgroupSizeY", 136), n("maxComputeWorkgroupSizeZ", 140), n("maxComputeWorkgroupsPerDimension", 144), void 0 !== e.ze && n("maxImmediateSize", 148);
	}, rs = [
		,
		"validation",
		"out-of-memory",
		"internal"
	], as = [
		,
		"compatibility",
		"core"
	], os = {
		1: "core-features-and-limits",
		2: "depth-clip-control",
		3: "depth32float-stencil8",
		4: "texture-compression-bc",
		5: "texture-compression-bc-sliced-3d",
		6: "texture-compression-etc2",
		7: "texture-compression-astc",
		8: "texture-compression-astc-sliced-3d",
		9: "timestamp-query",
		10: "indirect-first-instance",
		11: "shader-f16",
		12: "rg11b10ufloat-renderable",
		13: "bgra8unorm-storage",
		14: "float32-filterable",
		15: "float32-blendable",
		16: "clip-distances",
		17: "dual-source-blending",
		18: "subgroups",
		19: "texture-formats-tier1",
		20: "texture-formats-tier2",
		21: "primitive-index",
		22: "texture-component-swizzle",
		327692: "chromium-experimental-unorm16-texture-formats",
		327729: "chromium-experimental-multi-draw-indirect"
	}, is = [
		,
		"low-power",
		"high-performance"
	], ls = [
		,
		"occlusion",
		"timestamp"
	], cs = {
		undefined: 1,
		unknown: 1,
		destroyed: 2
	};
	function us(e, t, n, s, r, a) {
		t = de(t), n = de(n), s >>>= 0, r >>>= 0, a >>>= 0;
		var o = Yn(e >>> 0);
		if (e = {}, a) {
			var i = (M(), F)[a + 12 >>> 2 >>> 0];
			if (i) {
				var l = (M(), F)[a + 16 >>> 2 >>> 0];
				e.requiredFeatures = Array.from((M(), F).subarray(l >>> 2 >>> 0, l + 4 * i >>> 2 >>> 0), (e) => os[e]);
			}
			var c = (M(), F)[a + 20 >>> 2 >>> 0];
			if (c) {
				let t = function(e, t, n = !1) {
					t = c + t, 4294967295 == (t = (M(), F)[t >>> 2 >>> 0]) || n && 0 == t || (u[e] = t);
				}, n = function(e, t) {
					t = c + t;
					var n = (M(), F)[t >>> 2 >>> 0], s = (M(), F)[t + 4 >>> 2 >>> 0];
					4294967295 == n && 4294967295 == s || (u[e] = qn(t));
				};
				var u = {};
				t("maxTextureDimension1D", 4), t("maxTextureDimension2D", 8), t("maxTextureDimension3D", 12), t("maxTextureArrayLayers", 16), t("maxBindGroups", 20), t("maxBindGroupsPlusVertexBuffers", 24), t("maxDynamicUniformBuffersPerPipelineLayout", 32), t("maxDynamicStorageBuffersPerPipelineLayout", 36), t("maxSampledTexturesPerShaderStage", 40), t("maxSamplersPerShaderStage", 44), t("maxStorageBuffersPerShaderStage", 48), t("maxStorageTexturesPerShaderStage", 52), t("maxUniformBuffersPerShaderStage", 56), t("minUniformBufferOffsetAlignment", 80), t("minStorageBufferOffsetAlignment", 84), n("maxUniformBufferBindingSize", 64), n("maxStorageBufferBindingSize", 72), t("maxVertexBuffers", 88), n("maxBufferSize", 96), t("maxVertexAttributes", 104), t("maxVertexBufferArrayStride", 108), t("maxInterStageShaderVariables", 112), t("maxColorAttachments", 116), t("maxColorAttachmentBytesPerSample", 120), t("maxComputeWorkgroupStorageSize", 124), t("maxComputeInvocationsPerWorkgroup", 128), t("maxComputeWorkgroupSizeX", 132), t("maxComputeWorkgroupSizeY", 136), t("maxComputeWorkgroupSizeZ", 140), t("maxComputeWorkgroupsPerDimension", 144), t("maxImmediateSize", 148, !0), e.requiredLimits = u;
			}
			(i = (M(), F)[a + 24 >>> 2 >>> 0]) && (i = { label: ts(i + 4) }, e.defaultQueue = i), e.label = ts(a + 4);
		}
		Q += 1, Jn(t, o.requestDevice(e).then((e) => {
			--Q, At(() => {
				Wn[r >>> 0] = e.queue, Wn[s >>> 0] = e, Q += 1, Jn(n, e.lost.then((t) => {
					At(() => {
						e.onuncapturederror = () => {};
						var s = jr(), r = Vn(t.message);
						Er(n, cs[t.reason], r), Ur(s);
					}), --Q;
				})), e.onuncapturederror = (e) => {
					var t = 5;
					e.error instanceof GPUValidationError ? t = 2 : e.error instanceof GPUOutOfMemoryError ? t = 3 : e.error instanceof GPUInternalError && (t = 4);
					var n = jr();
					e = Vn(e.error.message), Fr(s, t, e), Ur(n);
				}, "adapterInfo" in e || (e.adapterInfo = o.info), Sr(t, 1, s, 0);
			});
		}, (e) => {
			--Q, At(() => {
				var r = jr(), a = Vn(e.message);
				Sr(t, 3, s, a), n && Er(n, 4, a), Ur(r);
			});
		}));
	}
	function ds(e) {
		var t = Yn(e >>>= 0), n = Qn[e];
		if (n) {
			for (var s = 0; s < n.length; ++s) n[s]();
			delete Qn[e];
		}
		t.destroy();
	}
	function hs(e, t, n) {
		n >>>= 0;
		var s = Yn(e >>>= 0);
		4294967295 == n && (n = void 0);
		try {
			var r = s.getMappedRange(t >>> 0, n);
		} catch {
			return 0;
		}
		var a = $r(16, r.byteLength);
		return (M(), A).set(new Uint8Array(r), a >>> 0), Qn[e].push(() => dr(a)), a;
	}
	function _s(e, t, n) {
		n >>>= 0;
		var s = Yn(e >>>= 0);
		4294967295 == n && (n = void 0);
		try {
			var r = s.getMappedRange(t >>> 0, n);
		} catch {
			return 0;
		}
		var a = $r(16, r.byteLength);
		return (M(), A).fill(0, a, r.byteLength), Qn[e].push(() => {
			new Uint8Array(r).set((M(), A).subarray(a >>> 0, a + r.byteLength >>> 0)), dr(a);
		}), a;
	}
	function ps(e, t, n, s, r) {
		e >>>= 0, t = de(t), n = de(n), r >>>= 0;
		var a = Yn(e);
		Qn[e] = [], 4294967295 == r && (r = void 0), Q += 1, Jn(t, a.mapAsync(n, s >>> 0, r).then(() => {
			--Q, At(() => {
				Ar(t, 1, 0);
			});
		}, (n) => {
			--Q, At(() => {
				jr();
				var s = Vn(n.message);
				Ar(t, "AbortError" === n.name ? 4 : "OperationError" === n.name ? 3 : 0, s), delete Qn[e];
			});
		}));
	}
	function fs(e) {
		var t = Yn(e >>>= 0), n = Qn[e];
		if (n) {
			for (var s = 0; s < n.length; ++s) n[s]();
			delete Qn[e], t.unmap();
		}
	}
	function ms(e) {
		delete Wn[e >>> 0];
	}
	function gs(e, t, n) {
		e >>>= 0, t >>>= 0, n >>>= 0;
		var s = !!(M(), F)[t + 32 >>> 2 >>> 0];
		t = {
			label: ts(t + 4),
			usage: (M(), F)[t + 16 >>> 2 >>> 0],
			size: qn(t + 24),
			mappedAtCreation: s
		}, e = Yn(e);
		try {
			var r = e.createBuffer(t);
		} catch {
			return !1;
		}
		return Wn[n >>> 0] = r, s && (Qn[n] = []), !0;
	}
	function ws(e, t, n, s) {
		e >>>= 0, t = de(t), s >>>= 0, n = ns(n >>> 0), e = Yn(e), Q += 1, Jn(t, e.createComputePipelineAsync(n).then((e) => {
			--Q, At(() => {
				Wn[s >>> 0] = e, kr(t, 1, s, 0);
			});
		}, (e) => {
			--Q, At(() => {
				var n = jr(), r = Vn(e.message);
				kr(t, "validation" === e.reason ? 3 : "internal" === e.reason ? 4 : 0, s, r), Ur(n);
			});
		}));
	}
	function ys(e, t, n) {
		e >>>= 0, t >>>= 0, n >>>= 0;
		var s = (M(), F)[t >>> 2 >>> 0], r = (M(), S)[s + 4 >>> 2 >>> 0];
		t = {
			label: ts(t + 4),
			code: ""
		}, 2 === r && (t.code = es(s + 8)), e = Yn(e).createShaderModule(t), Wn[n >>> 0] = e;
	}
	var bs = (e) => {
		(e = Yn(e)).onuncapturederror = null, e.destroy();
	};
	function xs(e, t) {
		t = de(t), e = Yn(e >>> 0), Q += 1, Jn(t, e.popErrorScope().then((e) => {
			--Q, At(() => {
				var n = 5;
				e ? e instanceof GPUValidationError ? n = 2 : e instanceof GPUOutOfMemoryError ? n = 3 : e instanceof GPUInternalError && (n = 4) : n = 1;
				var s = jr(), r = e ? Vn(e.message) : 0;
				Cr(t, 1, n, r), Ur(s);
			});
		}, (e) => {
			--Q, At(() => {
				var n = jr(), s = Vn(e.message);
				Cr(t, 1, 5, s), Ur(n);
			});
		}));
	}
	function vs(e, t, n, s) {
		if (t = de(t), s >>>= 0, n >>>= 0) {
			var r = {
				featureLevel: as[(M(), S)[n + 4 >>> 2 >>> 0]],
				powerPreference: is[(M(), S)[n + 8 >>> 2 >>> 0]],
				forceFallbackAdapter: !!(M(), F)[n + 12 >>> 2 >>> 0]
			};
			0 !== (e = (M(), F)[n >>> 2 >>> 0]) && (M(), r.De = !!(M(), F)[e + 8 >>> 2 >>> 0]);
		}
		"gpu" in navigator ? (Q += 1, Jn(t, navigator.gpu.requestAdapter(r).then((e) => {
			--Q, At(() => {
				if (e) Wn[s >>> 0] = e, Tr(t, 1, s, 0);
				else {
					var n = jr(), r = Vn("WebGPU not available on this browser (requestAdapter returned null)");
					Tr(t, 3, s, r), Ur(n);
				}
			});
		}, (e) => {
			--Q, At(() => {
				var n = jr(), r = Vn(e.message);
				Tr(t, 4, s, r), Ur(n);
			});
		}))) : (r = jr(), e = Vn("WebGPU not available on this browser (navigator.gpu is not available)"), Tr(t, 3, s, e), Ur(r));
	}
	function Ms(e, t, n) {
		return e >>>= 0, t >>>= 0, n >>>= 0, Qt(async () => {
			var s = [];
			if (n) {
				var r = (M(), S)[n >>> 2 >>> 0];
				s.length = t + 1, s[t] = new Promise((e) => setTimeout(e, r, 0));
			} else s.length = t;
			for (var a = 0; a < t; ++a) {
				var o = qn(e + 8 * a);
				if (!(o in Xn)) return o;
				s[a] = Xn[o];
			}
			return s = await Promise.race(s), delete Xn[s], s;
		});
	}
	var ks, Es = {}, As = () => {
		if (!ks) {
			var e, t = {
				USER: "web_user",
				LOGNAME: "web_user",
				PATH: "/",
				PWD: "/",
				HOME: "/home/web_user",
				LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
				_: "./this.program"
			};
			for (e in Es) void 0 === Es[e] ? delete t[e] : t[e] = Es[e];
			var n = [];
			for (e in t) n.push(`${e}=${t[e]}`);
			ks = n;
		}
		return ks;
	};
	function Cs(e, t) {
		if (r) return X(19, 1, e, t);
		e >>>= 0, t >>>= 0;
		var n, s = 0, a = 0;
		for (n of As()) {
			var o = t + s;
			(M(), F)[e + a >>> 2 >>> 0] = o, s += _t(n, o, Infinity) + 1, a += 4;
		}
		return 0;
	}
	function Ts(e, t) {
		if (r) return X(20, 1, e, t);
		e >>>= 0, t >>>= 0;
		var n = As();
		for (var s of ((M(), F)[e >>> 2 >>> 0] = n.length, e = 0, n)) e += pt(s) + 1;
		return (M(), F)[t >>> 2 >>> 0] = e, 0;
	}
	function Ss(e) {
		return r ? X(21, 1, e) : 52;
	}
	function Fs(e, t, n, s) {
		return r ? X(22, 1, e, t, n, s) : 52;
	}
	function Is(e, t, n, s) {
		return r ? X(23, 1, e, t, n, s) : 70;
	}
	var Ps = [
		null,
		[],
		[]
	];
	function Ls(e, t, n, s) {
		if (r) return X(24, 1, e, t, n, s);
		t >>>= 0, n >>>= 0, s >>>= 0;
		for (var a = 0, o = 0; o < n; o++) {
			var i = (M(), F)[t >>> 2 >>> 0], l = (M(), F)[t + 4 >>> 2 >>> 0];
			t += 8;
			for (var c = 0; c < l; c++) {
				var u = e, d = (M(), A)[i + c >>> 0], h = Ps[u];
				0 === d || 10 === d ? ((1 === u ? y : b)(Fe(h)), h.length = 0) : h.push(d);
			}
			a += l;
		}
		return (M(), F)[s >>> 2 >>> 0] = a, 0;
	}
	function Os(e) {
		return e >>> 0;
	}
	function zs(e, t) {
		return ss(Yn(e >>> 0).limits, t >>> 0), 1;
	}
	function Ns(e, t) {
		return Yn(e >>> 0).features.has(os[t]);
	}
	function Bs(e) {
		return BigInt(Yn(e >>> 0).size);
	}
	function $s(e) {
		return BigInt(Yn(e >>> 0).usage);
	}
	function Ds(e, t) {
		if (e >>>= 0, t >>>= 0) {
			var n = ts(t + 4);
			n = {
				label: n,
				timestampWrites: t = 0 !== (t = (M(), F)[t + 12 >>> 2 >>> 0]) ? {
					querySet: Yn((M(), F)[t + 4 >>> 2 >>> 0]),
					beginningOfPassWriteIndex: (M(), F)[t + 8 >>> 2 >>> 0],
					endOfPassWriteIndex: (M(), F)[t + 12 >>> 2 >>> 0]
				} : void 0
			};
		}
		return t = Yn(e), e = yr(0), n = t.beginComputePass(n), Wn[e >>> 0] = n, e;
	}
	function Rs(e, t, n, s) {
		n = de(n), -1 == (s = de(s)) && (s = void 0), (e = Yn(e >>> 0)).clearBuffer(Yn(t >>> 0), n, s);
	}
	function Gs(e, t, n, s, r, a) {
		n = de(n), r = de(r), a = de(a), Yn(e >>> 0).copyBufferToBuffer(Yn(t >>> 0), n, Yn(s >>> 0), r, a);
	}
	function Us(e) {
		var t = Yn(e >>> 0);
		return e = gr(0), t = t.finish(), Wn[e >>> 0] = t, e;
	}
	function Vs(e, t, n, s, r, a) {
		a = de(a), Yn(e >>> 0).resolveQuerySet(Yn(t >>> 0), n, s, Yn(r >>> 0), a);
	}
	function js(e, t, n, s) {
		Yn(e >>> 0).dispatchWorkgroups(t, n, s);
	}
	function qs(e, t, n) {
		n = de(n), Yn(e >>> 0).dispatchWorkgroupsIndirect(Yn(t >>> 0), n);
	}
	function Ws(e) {
		Yn(e >>> 0).end();
	}
	function Hs(e, t, n, s, r) {
		s >>>= 0, r >>>= 0, e = Yn(e >>> 0), n = Yn(n >>> 0), 0 == s ? e.setBindGroup(t, n) : e.setBindGroup(t, n, (M(), F), r >>> 2, s);
	}
	function Qs(e, t) {
		Yn(e >>> 0).setPipeline(Yn(t >>> 0));
	}
	function Xs(e, t, n) {
		Yn(e >>> 0).Ce(Yn(t >>> 0), n);
	}
	function Js(e, t) {
		var n = Yn(e >>> 0);
		return e = mr(0), t = n.getBindGroupLayout(t), Wn[e >>> 0] = t, e;
	}
	function Ys(e, t) {
		function n(e) {
			var t = (M(), F)[e + 8 >>> 2 >>> 0], n = (M(), F)[e + 32 >>> 2 >>> 0], s = (M(), F)[e + 36 >>> 2 >>> 0], r = 0;
			return Kn(e, { 327681: (e) => {
				r = (M(), F)[e + 8 >>> 2 >>> 0];
			} }), t ? (-1 == (n = qn(e + 24)) && (n = void 0), t = {
				buffer: Yn(t),
				offset: qn(e + 16),
				size: n
			}) : t = Yn(n || s || r), {
				binding: (M(), F)[e + 4 >>> 2 >>> 0],
				resource: t
			};
		}
		e >>>= 0, t = {
			label: ts(4 + (t >>>= 0)),
			layout: Yn((M(), F)[t + 12 >>> 2 >>> 0]),
			entries: function(e, t) {
				for (var s = [], r = 0; r < e; ++r) s.push(n(t + 40 * r));
				return s;
			}((M(), F)[t + 16 >>> 2 >>> 0], (M(), F)[t + 20 >>> 2 >>> 0])
		}, e = Yn(e);
		var s = fr(0);
		return Hn(s, e.createBindGroup(t)), s;
	}
	function Ks(e, t) {
		var n;
		return e >>>= 0, (t >>>= 0) && (n = { label: ts(t + 4) }), t = Yn(e), e = wr(0), n = t.createCommandEncoder(n), Wn[e >>> 0] = n, e;
	}
	function Zs(e, t) {
		e >>>= 0, t >>>= 0, t = {
			type: ls[(M(), S)[t + 12 >>> 2 >>> 0]],
			count: (M(), F)[t + 16 >>> 2 >>> 0]
		};
		var n = Yn(e);
		return e = br(0), t = n.createQuerySet(t), Wn[e >>> 0] = t, e;
	}
	function er(e, t) {
		e = Yn(e >>> 0).adapterInfo, t >>>= 0, (M(), F)[t + 52 >>> 2 >>> 0] = e.subgroupMinSize, (M(), F)[t + 56 >>> 2 >>> 0] = e.subgroupMaxSize;
		var n = e.vendor + e.architecture + e.device + e.description, s = pt(n) + 1, r = hr(s);
		return r && _t(n, r, s), n = r, s = pt(e.vendor), Zn(t + 4, n, s), n += s, s = pt(e.architecture), Zn(t + 12, n, s), n += s, s = pt(e.device), Zn(t + 20, n, s), Zn(t + 28, n + s, pt(e.description)), (M(), S)[t + 36 >>> 2 >>> 0] = 2, e = e.isFallbackAdapter ? 3 : 4, (M(), S)[t + 40 >>> 2 >>> 0] = e, (M(), F)[t + 44 >>> 2 >>> 0] = 0, (M(), F)[t + 48 >>> 2 >>> 0] = 0, 1;
	}
	var tr = {
		"core-features-and-limits": 1,
		"depth-clip-control": 2,
		"depth32float-stencil8": 3,
		"texture-compression-bc": 4,
		"texture-compression-bc-sliced-3d": 5,
		"texture-compression-etc2": 6,
		"texture-compression-astc": 7,
		"texture-compression-astc-sliced-3d": 8,
		"timestamp-query": 9,
		"indirect-first-instance": 10,
		"shader-f16": 11,
		"rg11b10ufloat-renderable": 12,
		"bgra8unorm-storage": 13,
		"float32-filterable": 14,
		"float32-blendable": 15,
		"clip-distances": 16,
		"dual-source-blending": 17,
		subgroups: 18,
		"texture-formats-tier1": 19,
		"texture-formats-tier2": 20,
		"primitive-index": 21,
		"texture-component-swizzle": 22,
		"chromium-experimental-unorm16-texture-formats": 327692,
		"chromium-experimental-multi-draw-indirect": 327729
	};
	function nr(e, t) {
		t >>>= 0;
		var n = Yn(e >>> 0);
		e = hr(4 * n.features.size);
		var s = 0, r = 0;
		for (let a of n.features) 0 <= (n = tr[a]) && ((M(), S)[e + s >>> 2 >>> 0] = n, s += 4, r++);
		(M(), F)[t + 4 >>> 2 >>> 0] = e, (M(), F)[t >>> 2 >>> 0] = r;
	}
	function sr(e, t) {
		return ss(Yn(e >>> 0).limits, t >>> 0), 1;
	}
	function rr(e, t) {
		Yn(e >>> 0).pushErrorScope(rs[t]);
	}
	function ar(e, t, n) {
		t >>>= 0, n >>>= 0, e = Yn(e >>> 0), t = Array.from((M(), S).subarray(n >>> 2 >>> 0, n + 4 * t >>> 2 >>> 0), (e) => Yn(e)), e.submit(t);
	}
	function or(e, t, n, s, r) {
		n = de(n), s >>>= 0, r >>>= 0, e = Yn(e >>> 0), t = Yn(t >>> 0), s = (M(), A).subarray(s >>> 0, s + r >>> 0), e.writeBuffer(t, n, s, 0, r);
	}
	r || function() {
		for (var e = t.numThreads - 1; e--;) oe();
		j.push(async () => {
			var e = async function() {
				if (!r) return Promise.all(Z.map(ae));
			}();
			q++, await e, 0 == --q && W && (e = W, W = null, e());
		});
	}(), r || (ie = new WebAssembly.Memory({
		initial: 256,
		maximum: 65536,
		shared: !0
	}), B()), t.wasmBinary && (d = t.wasmBinary), t.stackSave = () => jr(), t.stackRestore = (e) => Ur(e), t.stackAlloc = (e) => Vr(e), t.setValue = function(e, t, n = "i8") {
		switch (n.endsWith("*") && (n = "*"), n) {
			case "i1":
			case "i8":
				(M(), E)[e >>> 0] = t;
				break;
			case "i16":
				(M(), C)[e >>> 1 >>> 0] = t;
				break;
			case "i32":
				(M(), S)[e >>> 2 >>> 0] = t;
				break;
			case "i64":
				(M(), L)[e >>> 3 >>> 0] = BigInt(t);
				break;
			case "float":
				(M(), I)[e >>> 2 >>> 0] = t;
				break;
			case "double":
				(M(), P)[e >>> 3 >>> 0] = t;
				break;
			case "*":
				(M(), F)[e >>> 2 >>> 0] = t;
				break;
			default: D(`invalid type for setValue: ${n}`);
		}
	}, t.getValue = function(e, t = "i8") {
		switch (t.endsWith("*") && (t = "*"), t) {
			case "i1":
			case "i8": return (M(), E)[e >>> 0];
			case "i16": return (M(), C)[e >>> 1 >>> 0];
			case "i32": return (M(), S)[e >>> 2 >>> 0];
			case "i64": return (M(), L)[e >>> 3 >>> 0];
			case "float": return (M(), I)[e >>> 2 >>> 0];
			case "double": return (M(), P)[e >>> 3 >>> 0];
			case "*": return (M(), F)[e >>> 2 >>> 0];
			default: D(`invalid type for getValue: ${t}`);
		}
	}, t.UTF8ToString = Ie, t.stringToUTF8 = _t, t.lengthBytesUTF8 = pt;
	var ir, lr, cr, ur, dr, hr, _r, pr, fr, mr, gr, wr, yr, br, xr, vr, Mr, kr, Er, Ar, Cr, Tr, Sr, Fr, Ir, Pr, Lr, Or, zr, Nr, Br, $r, Dr, Rr, Gr, Ur, Vr, jr, qr, Wr, Hr, Qr, Xr, Jr, Yr, Kr, Zr, ea, ta, na, sa, ra, aa, oa, ia, la, ca, ua, da, ha, _a, pa, fa, ma, ga, wa, ya, ba, xa, va, Ma, ka, Ea, Aa, Ca, Ta, Sa, Fa, Ia, Pa, La, Oa, za, Na = [
		J,
		Y,
		Ee,
		Pe,
		Le,
		Oe,
		ze,
		Ne,
		Be,
		$e,
		De,
		Re,
		Ge,
		Ue,
		Ve,
		je,
		Mn,
		kn,
		Cn,
		Cs,
		Ts,
		Ss,
		Fs,
		Is,
		Ls
	], Ba = {
		970348: (e, n, s, r, a) => {
			if (void 0 === t || !t.Uc) return 1;
			if ((e = Ie(Number(e >>> 0))).startsWith("./") && (e = e.substring(2)), !(e = t.Uc.get(e))) return 2;
			if (n = Number(n >>> 0), s = Number(s >>> 0), r = Number(r >>> 0), n + s > e.byteLength) return 3;
			try {
				let o = e.subarray(n, n + s);
				switch (a) {
					case 0:
						(M(), A).set(o, r >>> 0);
						break;
					case 1:
						t.ad ? t.ad(r, o) : t.ne(r, o);
						break;
					default: return 4;
				}
				return 0;
			} catch {
				return 4;
			}
		},
		971172: (e, n, s) => {
			t.Sd(e, (M(), A).subarray(n >>> 0, n + s >>> 0));
		},
		971236: () => t.le(),
		971278: (e) => {
			t.jd(e);
		},
		971315: () => typeof wasmOffsetConverter < "u"
	};
	function $a(e, t, n, s) {
		var r = jr();
		try {
			return ra(e, t, n, s);
		} catch (a) {
			if (Ur(r), a !== a + 0) throw a;
			Dr(1, 0);
		}
	}
	function Da(e, t, n) {
		var s = jr();
		try {
			return ta(e, t, n);
		} catch (r) {
			if (Ur(s), r !== r + 0) throw r;
			Dr(1, 0);
		}
	}
	function Ra(e) {
		var t = jr();
		try {
			Yr(e);
		} catch (n) {
			if (Ur(t), n !== n + 0) throw n;
			Dr(1, 0);
		}
	}
	function Ga(e, t) {
		var n = jr();
		try {
			return Jr(e, t);
		} catch (s) {
			if (Ur(n), s !== s + 0) throw s;
			Dr(1, 0);
		}
	}
	function Ua(e, t, n) {
		var s = jr();
		try {
			Xr(e, t, n);
		} catch (r) {
			if (Ur(s), r !== r + 0) throw r;
			Dr(1, 0);
		}
	}
	function Va(e, t) {
		var n = jr();
		try {
			aa(e, t);
		} catch (s) {
			if (Ur(n), s !== s + 0) throw s;
			Dr(1, 0);
		}
	}
	function ja(e, t, n, s, r, a, o) {
		var i = jr();
		try {
			return ea(e, t, n, s, r, a, o);
		} catch (l) {
			if (Ur(i), l !== l + 0) throw l;
			Dr(1, 0);
		}
	}
	function qa(e, t, n, s, r, a) {
		var o = jr();
		try {
			Kr(e, t, n, s, r, a);
		} catch (i) {
			if (Ur(o), i !== i + 0) throw i;
			Dr(1, 0);
		}
	}
	function Wa(e, t, n, s) {
		var r = jr();
		try {
			sa(e, t, n, s);
		} catch (a) {
			if (Ur(r), a !== a + 0) throw a;
			Dr(1, 0);
		}
	}
	function Ha(e, t, n, s, r, a, o) {
		var i = jr();
		try {
			ia(e, t, n, s, r, a, o);
		} catch (l) {
			if (Ur(i), l !== l + 0) throw l;
			Dr(1, 0);
		}
	}
	function Qa(e, t, n, s, r, a, o) {
		var i = jr();
		try {
			la(e, t, n, s, r, a, o);
		} catch (l) {
			if (Ur(i), l !== l + 0) throw l;
			Dr(1, 0);
		}
	}
	function Xa(e, t, n, s, r, a, o, i) {
		var l = jr();
		try {
			ga(e, t, n, s, r, a, o, i);
		} catch (c) {
			if (Ur(l), c !== c + 0) throw c;
			Dr(1, 0);
		}
	}
	function Ja(e, t, n, s, r, a, o, i, l, c, u, d) {
		var h = jr();
		try {
			ca(e, t, n, s, r, a, o, i, l, c, u, d);
		} catch (_) {
			if (Ur(h), _ !== _ + 0) throw _;
			Dr(1, 0);
		}
	}
	function Ya(e, t, n, s, r) {
		var a = jr();
		try {
			return oa(e, t, n, s, r);
		} catch (o) {
			if (Ur(a), o !== o + 0) throw o;
			Dr(1, 0);
		}
	}
	function Ka(e, t, n, s, r) {
		var a = jr();
		try {
			Zr(e, t, n, s, r);
		} catch (o) {
			if (Ur(a), o !== o + 0) throw o;
			Dr(1, 0);
		}
	}
	function Za(e, t, n, s, r, a, o, i) {
		var l = jr();
		try {
			na(e, t, n, s, r, a, o, i);
		} catch (c) {
			if (Ur(l), c !== c + 0) throw c;
			Dr(1, 0);
		}
	}
	function eo(e) {
		var t = jr();
		try {
			return wa(e);
		} catch (n) {
			if (Ur(t), n !== n + 0) throw n;
			Dr(1, 0);
		}
	}
	function to(e, t, n) {
		var s = jr();
		try {
			return ya(e, t, n);
		} catch (r) {
			if (Ur(s), r !== r + 0) throw r;
			Dr(1, 0);
		}
	}
	function no(e, t) {
		var n = jr();
		try {
			return Fa(e, t);
		} catch (s) {
			if (Ur(n), s !== s + 0) throw s;
			return Dr(1, 0), 0n;
		}
	}
	function so(e) {
		var t = jr();
		try {
			return ua(e);
		} catch (n) {
			if (Ur(t), n !== n + 0) throw n;
			return Dr(1, 0), 0n;
		}
	}
	function ro(e, t, n, s) {
		var r = jr();
		try {
			return ba(e, t, n, s);
		} catch (a) {
			if (Ur(r), a !== a + 0) throw a;
			Dr(1, 0);
		}
	}
	function ao(e, t, n, s, r) {
		var a = jr();
		try {
			return xa(e, t, n, s, r);
		} catch (o) {
			if (Ur(a), o !== o + 0) throw o;
			Dr(1, 0);
		}
	}
	function oo(e, t, n, s, r, a) {
		var o = jr();
		try {
			return va(e, t, n, s, r, a);
		} catch (i) {
			if (Ur(o), i !== i + 0) throw i;
			Dr(1, 0);
		}
	}
	function io(e, t, n, s, r, a) {
		var o = jr();
		try {
			return fa(e, t, n, s, r, a);
		} catch (i) {
			if (Ur(o), i !== i + 0) throw i;
			Dr(1, 0);
		}
	}
	function lo(e, t, n, s, r, a) {
		var o = jr();
		try {
			return Ma(e, t, n, s, r, a);
		} catch (i) {
			if (Ur(o), i !== i + 0) throw i;
			Dr(1, 0);
		}
	}
	function co(e, t, n, s, r, a, o, i) {
		var l = jr();
		try {
			return ma(e, t, n, s, r, a, o, i);
		} catch (c) {
			if (Ur(l), c !== c + 0) throw c;
			Dr(1, 0);
		}
	}
	function uo(e, t, n, s, r) {
		var a = jr();
		try {
			return ka(e, t, n, s, r);
		} catch (o) {
			if (Ur(a), o !== o + 0) throw o;
			return Dr(1, 0), 0n;
		}
	}
	function ho(e, t, n, s) {
		var r = jr();
		try {
			return Ea(e, t, n, s);
		} catch (a) {
			if (Ur(r), a !== a + 0) throw a;
			Dr(1, 0);
		}
	}
	function _o(e, t, n, s) {
		var r = jr();
		try {
			return Aa(e, t, n, s);
		} catch (a) {
			if (Ur(r), a !== a + 0) throw a;
			Dr(1, 0);
		}
	}
	function po(e, t, n, s, r, a, o, i, l, c, u, d) {
		var h = jr();
		try {
			return Ca(e, t, n, s, r, a, o, i, l, c, u, d);
		} catch (_) {
			if (Ur(h), _ !== _ + 0) throw _;
			Dr(1, 0);
		}
	}
	function fo(e, t, n, s, r, a, o, i, l, c, u) {
		var d = jr();
		try {
			Ta(e, t, n, s, r, a, o, i, l, c, u);
		} catch (h) {
			if (Ur(d), h !== h + 0) throw h;
			Dr(1, 0);
		}
	}
	function mo(e, t, n, s, r, a, o, i, l, c, u, d, h, _, p, f) {
		var m = jr();
		try {
			Sa(e, t, n, s, r, a, o, i, l, c, u, d, h, _, p, f);
		} catch (g) {
			if (Ur(m), g !== g + 0) throw g;
			Dr(1, 0);
		}
	}
	function go(e, t, n) {
		var s = jr();
		try {
			return ha(e, t, n);
		} catch (r) {
			if (Ur(s), r !== r + 0) throw r;
			return Dr(1, 0), 0n;
		}
	}
	function wo(e, t, n) {
		var s = jr();
		try {
			return da(e, t, n);
		} catch (r) {
			if (Ur(s), r !== r + 0) throw r;
			Dr(1, 0);
		}
	}
	function yo(e, t, n) {
		var s = jr();
		try {
			return _a(e, t, n);
		} catch (r) {
			if (Ur(s), r !== r + 0) throw r;
			Dr(1, 0);
		}
	}
	function bo(e, t, n, s) {
		var r = jr();
		try {
			pa(e, t, n, s);
		} catch (a) {
			if (Ur(r), a !== a + 0) throw a;
			Dr(1, 0);
		}
	}
	function xo() {
		if (0 < q) W = xo;
		else if (r) p?.(t), $();
		else {
			for (var e = j; 0 < e.length;) e.shift()(t);
			0 < q ? W = xo : (t.calledRun = !0, x || ($(), p?.(t)));
		}
	}
	return r || (za = await G(), xo()), t.PTR_SIZE = 4, t.webgpuInit = (e) => {
		let n, s, r = /* @__PURE__ */ new WeakMap(), a = 1;
		t.webgpuRegisterDevice = (e) => {
			if (void 0 !== s) throw Error("another WebGPU EP inference session is being created.");
			if (e) {
				var t = r.get(e);
				if (!t) {
					let n = ((e, t = 0) => {
						var n = Mr(t);
						return t = vr(t, n), Wn[n >>> 0] = e.queue, Wn[t >>> 0] = e, t;
					})(e, t = pr(0));
					t = [
						a++,
						t,
						n
					], r.set(e, t);
				}
				return n = e, s = t[0], t;
			}
			n = void 0, s = 0;
		};
		let o = /* @__PURE__ */ new Map();
		t.webgpuOnCreateSession = (t) => {
			if (void 0 !== s) {
				var r = s;
				if (s = void 0, t) {
					let s = cr(r);
					o.set(t, s), 0 === r && e(n ?? Yn(s));
				}
				n = void 0;
			}
		}, t.webgpuOnReleaseSession = (e) => {
			o.delete(e);
		};
		let i = Symbol("gpuBufferMetadata");
		t.webgpuRegisterBuffer = (e, t, n) => {
			if (n) return e[i] = [n, NaN], n;
			if (n = e[i]) return n[1]++, n[0];
			if (void 0 === (t = o.get(t))) throw Error("Invalid session handle passed to webgpuRegisterBuffer");
			return t = ((e, t = 0) => ("unmapped" === e.mapState || D(), t = xr(t), Wn[t >>> 0] = e, t))(e, t), e[i] = [t, 1], t;
		}, t.webgpuUnregisterBuffer = (e) => {
			let t = e[i];
			if (!t) throw Error("Buffer is not registered");
			t[1]--, 0 === t[1] && (_r(t[0]), delete e[i]);
		}, t.webgpuGetBuffer = (e) => Yn(e), t.webgpuCreateDownloader = (e, t, n) => {
			if (void 0 === (n = o.get(n))) throw Error("Invalid session handle passed to webgpuRegisterBuffer");
			let s = Yn(n), r = 16 * Math.ceil(Number(t) / 16);
			return async () => {
				let n = s.createBuffer({
					size: r,
					usage: 9
				});
				try {
					let a = s.createCommandEncoder();
					return a.copyBufferToBuffer(e, 0, n, 0, r), s.queue.submit([a.finish()]), await n.mapAsync(GPUMapMode.READ), n.getMappedRange().slice(0, t);
				} finally {
					n.destroy();
				}
			};
		}, t.ad = (e, t) => {
			var r = t.buffer;
			let a = t.byteOffset, o = t.byteLength;
			if (t = 16 * Math.ceil(Number(o) / 16), e = Yn(e), !n) {
				var i = cr(s);
				n = Yn(i);
			}
			let l = (i = n.createBuffer({
				mappedAtCreation: !0,
				size: t,
				usage: 6
			})).getMappedRange();
			new Uint8Array(l).set(new Uint8Array(r, a, o)), i.unmap(), (r = n.createCommandEncoder()).copyBufferToBuffer(i, 0, e, 0, t), n.queue.submit([r.finish()]), i.destroy();
		};
	}, t.webnnInit = (e) => {
		let n = e[0];
		[t.le, t.jd, t.webnnEnsureTensor, t.Sd, t.webnnDownloadTensor, t.ke, t.webnnEnableTraceEvent] = e.slice(1), t.webnnReleaseTensorId = t.jd, t.webnnUploadTensor = t.Sd, t.webnnRegisterMLContext = t.ke, t.webnnOnRunStart = (e) => n.onRunStart(e), t.webnnOnRunEnd = n.onRunEnd.bind(n), t.webnnOnReleaseSession = (e) => {
			n.onReleaseSession(e);
		}, t.webnnCreateMLTensorDownloader = (e, t) => n.createMLTensorDownloader(e, t), t.webnnRegisterMLTensor = (e, t, s, r) => n.registerMLTensor(e, t, s, r), t.webnnCreateMLContext = (e) => n.createMLContext(e), t.webnnRegisterMLConstant = (e, s, r, a, o, i) => n.registerMLConstant(e, s, r, a, o, t.Uc, i), t.webnnRegisterGraphInput = n.registerGraphInput.bind(n), t.webnnIsGraphInput = n.isGraphInput.bind(n), t.webnnRegisterGraphOutput = n.registerGraphOutput.bind(n), t.webnnIsGraphOutput = n.isGraphOutput.bind(n), t.webnnCreateTemporaryTensor = n.createTemporaryTensor.bind(n), t.webnnIsGraphInputOutputTypeSupported = n.isGraphInputOutputTypeSupported.bind(n);
	}, N ? t : new Promise((e, t) => {
		p = e, f = t;
	});
}
Q(ve, { default: () => ke });
var ke, Ee, Ae, Ce, Te, Se, Fe, Ie, Pe, Le, Oe, ze, Ne, Be, $e, De, Re, Ge, Ue, Ve, je, qe, We, He, Qe, Xe, Je, Ye, Ke, Ze, et, tt, nt, st, rt, at, ot, it, lt, ct, ut, dt, ht, _t, pt, ft, mt, gt, wt, yt, bt, xt, vt, Mt, kt, Et, At, Ct, Tt, St, Ft, It = H(() => {
	ke = Me, Ee = globalThis.self?.name?.startsWith("em-pthread"), Ee && Me();
}), Pt = H(() => {
	me(), Ae = typeof location > "u" ? void 0 : location.origin, Ce = import.meta.url > "file:" && import.meta.url < "file;", Te = Ce ? new URL(new URL("ort.webgpu.bundle.min.mjs", import.meta.url).href, Ae).href : import.meta.url, Se = () => {
		if (Te && !Te.startsWith("blob:")) return Te.substring(0, Te.lastIndexOf("/") + 1);
	}, Fe = (e, t) => {
		try {
			let n = t ?? Te;
			return (n ? new URL(e, n) : new URL(e)).origin === Ae;
		} catch {
			return !1;
		}
	}, Ie = (e, t) => {
		let n = t ?? Te;
		try {
			return (n ? new URL(e, n) : new URL(e)).href;
		} catch {
			return;
		}
	}, Pe = (e, t) => `${t ?? "./"}${e}`, Le = async (e) => {
		let t = await (await fetch(e, { credentials: "same-origin" })).blob();
		return URL.createObjectURL(t);
	}, Oe = async (e) => (await import(e)).default, ze = (xe(), X(ge)).default, Ne = async () => {
		if (!Te) throw new Error("Failed to load proxy worker: cannot determine the script source URL.");
		if (Fe(Te)) return [void 0, ze()];
		let e = await Le(Te);
		return [e, ze(e)];
	}, Be = (It(), X(ve)).default, $e = async (e, t, n, s) => {
		let r = Be && !(e || t);
		if (r) if (Te) r = Fe(Te) || s && !n;
		else {
			if (!s || n) throw new Error("cannot determine the script source URL.");
			r = !0;
		}
		if (r) return [void 0, Be];
		{
			let s = "ort-wasm-simd-threaded.asyncify.mjs", r = e ?? Ie(s, t), a = n && r && !Fe(r, t), o = a ? await Le(r) : r ?? Pe(s, t);
			return [a ? o : void 0, await Oe(o)];
		}
	};
}), Lt = H(() => {
	Pt(), Re = !1, Ge = !1, Ue = !1, Ve = () => {
		if (typeof SharedArrayBuffer > "u") return !1;
		try {
			return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(new Uint8Array([
				0,
				97,
				115,
				109,
				1,
				0,
				0,
				0,
				1,
				4,
				1,
				96,
				0,
				0,
				3,
				2,
				1,
				0,
				5,
				4,
				1,
				3,
				1,
				1,
				10,
				11,
				1,
				9,
				0,
				65,
				0,
				254,
				16,
				2,
				0,
				26,
				11
			]));
		} catch {
			return !1;
		}
	}, je = () => {
		try {
			return WebAssembly.validate(new Uint8Array([
				0,
				97,
				115,
				109,
				1,
				0,
				0,
				0,
				1,
				4,
				1,
				96,
				0,
				0,
				3,
				2,
				1,
				0,
				10,
				30,
				1,
				28,
				0,
				65,
				0,
				253,
				15,
				253,
				12,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				253,
				186,
				1,
				26,
				11
			]));
		} catch {
			return !1;
		}
	}, qe = () => {
		try {
			return WebAssembly.validate(new Uint8Array([
				0,
				97,
				115,
				109,
				1,
				0,
				0,
				0,
				1,
				5,
				1,
				96,
				0,
				1,
				123,
				3,
				2,
				1,
				0,
				10,
				19,
				1,
				17,
				0,
				65,
				1,
				253,
				15,
				65,
				2,
				253,
				15,
				65,
				3,
				253,
				15,
				253,
				147,
				2,
				11
			]));
		} catch {
			return !1;
		}
	}, We = async (e) => {
		if (Re) return Promise.resolve();
		if (Ge) throw new Error("multiple calls to 'initializeWebAssembly()' detected.");
		if (Ue) throw new Error("previous call to 'initializeWebAssembly()' failed.");
		Ge = !0;
		let t = e.initTimeout, n = e.numThreads;
		if (!1 !== e.simd) {
			if ("relaxed" === e.simd) {
				if (!qe()) throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.");
			} else if (!je()) throw new Error("WebAssembly SIMD is not supported in the current environment.");
		}
		let s = Ve();
		n > 1 && !s && (typeof self < "u" && self.crossOriginIsolated, e.numThreads = n = 1);
		let r = e.wasmPaths, a = "string" == typeof r ? r : void 0, o = r?.mjs, i = o?.href ?? o, l = r?.wasm, c = l?.href ?? l, u = e.wasmBinary, [d, h] = await $e(i, a, n > 1, !!u || !!c), _ = !1, p = [];
		if (t > 0 && p.push(new Promise((e) => {
			setTimeout(() => {
				_ = !0, e();
			}, t);
		})), p.push(new Promise((e, t) => {
			let s = { numThreads: n };
			if (u) s.wasmBinary = u, s.locateFile = (e) => e;
			else if (c || a) s.locateFile = (e) => c ?? a + e;
			else if (i && 0 !== i.indexOf("blob:")) s.locateFile = (e) => new URL(e, i).href;
			else if (d) {
				let e = Se();
				e && (s.locateFile = (t) => e + t);
			}
			h(s).then((t) => {
				Ge = !1, Re = !0, De = t, e(), d && URL.revokeObjectURL(d);
			}, (e) => {
				Ge = !1, Ue = !0, t(e);
			});
		})), await Promise.race(p), _) throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`);
	}, He = () => {
		if (Re && De) return De;
		throw new Error("WebAssembly is not initialized yet.");
	};
}), Ot = H(() => {
	Lt(), Qe = (e, t) => {
		let n = He(), s = n.lengthBytesUTF8(e) + 1, r = n._malloc(s);
		return n.stringToUTF8(e, r, s), t.push(r), r;
	}, Xe = (e, t, n, s) => {
		if ("object" == typeof e && null !== e) {
			if (n.has(e)) throw new Error("Circular reference in options");
			n.add(e);
		}
		Object.entries(e).forEach(([e, r]) => {
			let a = t ? t + e : e;
			if ("object" == typeof r) Xe(r, a + ".", n, s);
			else if ("string" == typeof r || "number" == typeof r) s(a, r.toString());
			else {
				if ("boolean" != typeof r) throw new Error("Can't handle extra config type: " + typeof r);
				s(a, r ? "1" : "0");
			}
		});
	}, Je = (e) => {
		let t = He(), n = t.stackSave();
		try {
			let n = t.PTR_SIZE, s = t.stackAlloc(2 * n);
			t._OrtGetLastError(s, s + n);
			let r = Number(t.getValue(s, 4 === n ? "i32" : "i64")), a = t.getValue(s + n, "*"), o = a ? t.UTF8ToString(a) : "";
			throw new Error(`${e} ERROR_CODE: ${r}, ERROR_MESSAGE: ${o}`);
		} finally {
			t.stackRestore(n);
		}
	};
}), zt = H(() => {
	Lt(), Ot(), Ye = (e) => {
		let t = He(), n = 0, s = [], r = e || {};
		try {
			if (void 0 === e?.logSeverityLevel) r.logSeverityLevel = 2;
			else if ("number" != typeof e.logSeverityLevel || !Number.isInteger(e.logSeverityLevel) || e.logSeverityLevel < 0 || e.logSeverityLevel > 4) throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);
			if (void 0 === e?.logVerbosityLevel) r.logVerbosityLevel = 0;
			else if ("number" != typeof e.logVerbosityLevel || !Number.isInteger(e.logVerbosityLevel)) throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);
			void 0 === e?.terminate && (r.terminate = !1);
			let a = 0;
			return void 0 !== e?.tag && (a = Qe(e.tag, s)), n = t._OrtCreateRunOptions(r.logSeverityLevel, r.logVerbosityLevel, !!r.terminate, a), 0 === n && Je("Can't create run options."), void 0 !== e?.extra && Xe(e.extra, "", /* @__PURE__ */ new WeakSet(), (e, r) => {
				let a = Qe(e, s), o = Qe(r, s);
				0 !== t._OrtAddRunConfigEntry(n, a, o) && Je(`Can't set a run config entry: ${e} - ${r}.`);
			}), [n, s];
		} catch (a) {
			throw 0 !== n && t._OrtReleaseRunOptions(n), s.forEach((e) => t._free(e)), a;
		}
	};
}), Nt = H(() => {
	Lt(), Ot(), Ke = (e) => {
		switch (e) {
			case "disabled": return 0;
			case "basic": return 1;
			case "extended": return 2;
			case "layout": return 3;
			case "all": return 99;
			default: throw new Error(`unsupported graph optimization level: ${e}`);
		}
	}, Ze = (e) => {
		switch (e) {
			case "sequential": return 0;
			case "parallel": return 1;
			default: throw new Error(`unsupported execution mode: ${e}`);
		}
	}, et = (e) => {
		e.extra || (e.extra = {}), e.extra.session || (e.extra.session = {});
		let t = e.extra.session;
		t.use_ort_model_bytes_directly || (t.use_ort_model_bytes_directly = "1"), e.executionProviders && e.executionProviders.some((e) => "webgpu" === ("string" == typeof e ? e : e.name)) && (e.enableMemPattern = !1);
	}, tt = (e, t, n, s) => {
		let r = Qe(t, s), a = Qe(n, s);
		0 !== He()._OrtAddSessionConfigEntry(e, r, a) && Je(`Can't set a session config entry: ${t} - ${n}.`);
	}, nt = (e, t, n, s) => {
		let r = Qe(t, s), a = Qe(n, s);
		e.push([r, a]);
	}, st = async (e, t, n) => {
		let s = t.executionProviders;
		for (let r of s) {
			let s = "string" == typeof r ? r : r.name, a = [];
			switch (s) {
				case "webnn":
					if (s = "WEBNN", "string" != typeof r) {
						let t = r?.deviceType;
						t && tt(e, "deviceType", t, n);
					}
					break;
				case "webgpu":
					{
						let e;
						if (s = "WebGPU", "string" != typeof r) {
							let s = r;
							if (s.device) {
								if (!(typeof GPUDevice < "u" && s.device instanceof GPUDevice)) throw new Error("Invalid GPU device set in WebGPU EP options.");
								e = s.device;
							}
							let { enableGraphCapture: o } = t;
							if ("boolean" == typeof o && o && nt(a, "enableGraphCapture", "1", n), "string" == typeof s.preferredLayout && nt(a, "preferredLayout", s.preferredLayout, n), s.forceCpuNodeNames) {
								let e = Array.isArray(s.forceCpuNodeNames) ? s.forceCpuNodeNames : [s.forceCpuNodeNames];
								nt(a, "forceCpuNodeNames", e.join("\n"), n);
							}
							s.validationMode && nt(a, "validationMode", s.validationMode, n);
						}
						let o = He().webgpuRegisterDevice(e);
						if (o) {
							let [e, t, s] = o;
							nt(a, "deviceId", e.toString(), n), nt(a, "webgpuInstance", t.toString(), n), nt(a, "webgpuDevice", s.toString(), n);
						}
					}
					break;
				case "wasm":
				case "cpu": continue;
				default: throw new Error(`not supported execution provider: ${s}`);
			}
			let o = Qe(s, n), i = a.length, l = 0, c = 0;
			if (i > 0) {
				l = He()._malloc(i * He().PTR_SIZE), n.push(l), c = He()._malloc(i * He().PTR_SIZE), n.push(c);
				for (let e = 0; e < i; e++) He().setValue(l + e * He().PTR_SIZE, a[e][0], "*"), He().setValue(c + e * He().PTR_SIZE, a[e][1], "*");
			}
			0 !== await He()._OrtAppendExecutionProvider(e, o, l, c, i) && Je(`Can't append execution provider: ${s}.`);
		}
	}, rt = async (e) => {
		let t = He(), n = 0, s = [], r = e || {};
		et(r);
		try {
			let e = Ke(r.graphOptimizationLevel ?? "all"), a = Ze(r.executionMode ?? "sequential"), o = "string" == typeof r.logId ? Qe(r.logId, s) : 0, i = r.logSeverityLevel ?? 2;
			if (!Number.isInteger(i) || i < 0 || i > 4) throw new Error(`log severity level is not valid: ${i}`);
			let l = r.logVerbosityLevel ?? 0;
			if (!Number.isInteger(l) || l < 0 || l > 4) throw new Error(`log verbosity level is not valid: ${l}`);
			let c = "string" == typeof r.optimizedModelFilePath ? Qe(r.optimizedModelFilePath, s) : 0;
			if (n = t._OrtCreateSessionOptions(e, !!r.enableCpuMemArena, !!r.enableMemPattern, a, !!r.enableProfiling, 0, o, i, l, c), 0 === n && Je("Can't create session options."), r.executionProviders && await st(n, r, s), void 0 !== r.enableGraphCapture) {
				if ("boolean" != typeof r.enableGraphCapture) throw new Error(`enableGraphCapture must be a boolean value: ${r.enableGraphCapture}`);
				tt(n, "enableGraphCapture", r.enableGraphCapture.toString(), s);
			}
			if (r.freeDimensionOverrides) for (let [u, d] of Object.entries(r.freeDimensionOverrides)) {
				if ("string" != typeof u) throw new Error(`free dimension override name must be a string: ${u}`);
				if ("number" != typeof d || !Number.isInteger(d) || d < 0) throw new Error(`free dimension override value must be a non-negative integer: ${d}`);
				let e = Qe(u, s);
				0 !== t._OrtAddFreeDimensionOverride(n, e, d) && Je(`Can't set a free dimension override: ${u} - ${d}.`);
			}
			return void 0 !== r.extra && Xe(r.extra, "", /* @__PURE__ */ new WeakSet(), (e, t) => {
				tt(n, e, t, s);
			}), [n, s];
		} catch (a) {
			throw 0 !== n && 0 !== t._OrtReleaseSessionOptions(n) && Je("Can't release session options."), s.forEach((e) => t._free(e)), a;
		}
	};
}), Bt = H(() => {
	at = (e) => {
		switch (e) {
			case "int8": return 3;
			case "uint8": return 2;
			case "bool": return 9;
			case "int16": return 5;
			case "uint16": return 4;
			case "int32": return 6;
			case "uint32": return 12;
			case "float16": return 10;
			case "float32": return 1;
			case "float64": return 11;
			case "string": return 8;
			case "int64": return 7;
			case "uint64": return 13;
			case "int4": return 22;
			case "uint4": return 21;
			default: throw new Error(`unsupported data type: ${e}`);
		}
	}, ot = (e) => {
		switch (e) {
			case 3: return "int8";
			case 2: return "uint8";
			case 9: return "bool";
			case 5: return "int16";
			case 4: return "uint16";
			case 6: return "int32";
			case 12: return "uint32";
			case 10: return "float16";
			case 1: return "float32";
			case 11: return "float64";
			case 8: return "string";
			case 7: return "int64";
			case 13: return "uint64";
			case 22: return "int4";
			case 21: return "uint4";
			default: throw new Error(`unsupported data type: ${e}`);
		}
	}, it = (e, t) => {
		let n = [
			-1,
			4,
			1,
			1,
			2,
			2,
			4,
			8,
			-1,
			1,
			2,
			8,
			4,
			8,
			-1,
			-1,
			-1,
			-1,
			-1,
			-1,
			-1,
			.5,
			.5
		][e], s = "number" == typeof t ? t : t.reduce((e, t) => e * t, 1);
		return n > 0 ? Math.ceil(s * n) : void 0;
	}, lt = (e) => {
		switch (e) {
			case "float16": return typeof Float16Array < "u" && Float16Array.from ? Float16Array : Uint16Array;
			case "float32": return Float32Array;
			case "uint8":
			case "bool": return Uint8Array;
			case "int8": return Int8Array;
			case "uint16": return Uint16Array;
			case "int16": return Int16Array;
			case "int32": return Int32Array;
			case "float64": return Float64Array;
			case "uint32": return Uint32Array;
			case "int64": return BigInt64Array;
			case "uint64": return BigUint64Array;
			default: throw new Error(`unsupported type: ${e}`);
		}
	}, ct = (e) => {
		switch (e) {
			case "verbose": return 0;
			case "info": return 1;
			case "warning": return 2;
			case "error": return 3;
			case "fatal": return 4;
			default: throw new Error(`unsupported logging level: ${e}`);
		}
	}, ut = (e) => "float32" === e || "float16" === e || "int32" === e || "int64" === e || "uint32" === e || "uint8" === e || "bool" === e || "uint4" === e || "int4" === e, dt = (e) => "float32" === e || "float16" === e || "int32" === e || "int64" === e || "uint32" === e || "uint64" === e || "int8" === e || "uint8" === e || "bool" === e || "uint4" === e || "int4" === e, ht = (e) => {
		switch (e) {
			case "none": return 0;
			case "cpu": return 1;
			case "cpu-pinned": return 2;
			case "texture": return 3;
			case "gpu-buffer": return 4;
			case "ml-tensor": return 5;
			default: throw new Error(`unsupported data location: ${e}`);
		}
	};
}), $t = H(() => {
	me(), _t = async (e) => {
		if ("string" == typeof e) {
			let n = await fetch(e);
			if (!n.ok) throw new Error(`failed to load external data file: ${e}`);
			let s = n.headers.get("Content-Length"), r = s ? parseInt(s, 10) : 0;
			if (r < 1073741824) return new Uint8Array(await n.arrayBuffer());
			{
				if (!n.body) throw new Error(`failed to load external data file: ${e}, no response body.`);
				let s, a = n.body.getReader();
				try {
					s = new ArrayBuffer(r);
				} catch (t) {
					if (!(t instanceof RangeError)) throw t;
					{
						let e = Math.ceil(r / 65536);
						s = new WebAssembly.Memory({
							initial: e,
							maximum: e
						}).buffer;
					}
				}
				let o = 0;
				for (;;) {
					let { done: e, value: t } = await a.read();
					if (e) break;
					let n = t.byteLength;
					new Uint8Array(s, o, n).set(t), o += n;
				}
				return new Uint8Array(s, 0, r);
			}
		}
		return e instanceof Blob ? new Uint8Array(await e.arrayBuffer()) : e instanceof Uint8Array ? e : new Uint8Array(e);
	};
}), Dt = H(() => {
	Bt(), pt = (e, t) => new (lt(t))(e);
}), Rt = H(() => {
	Bt(), gt = (e, t) => {
		ft = e, mt = t;
	}, wt = (e, t) => {
		ct(e) >= ct(ft) && "function" == typeof t && t();
	}, yt = (...e) => {
		mt && wt(...e);
	};
}), Gt = H(() => {
	Bt(), Rt(), bt = new Map([
		["float32", 32],
		["float16", 16],
		["int32", 32],
		["uint32", 32],
		["int64", 64],
		["uint64", 64],
		["int8", 8],
		["uint8", 8],
		["int4", 4],
		["uint4", 4]
	]), xt = (e, t) => {
		if ("int32" === t) return e;
		let n = bt.get(t);
		if (!n) throw new Error(`WebNN backend does not support data type: ${t}`);
		let s = n / 8;
		if (e.byteLength % s !== 0) throw new Error(`Invalid Uint8Array length - must be a multiple of ${s}.`);
		let r = e.byteLength / s, a = new (lt(t))(e.buffer, e.byteOffset, r);
		switch (t) {
			case "int64":
			case "uint64": {
				let e = new Int32Array(r);
				for (let t = 0; t < r; t++) {
					let n = a[t];
					if (n > 2147483647n || n < -2147483648n) throw new Error("Can not convert int64 data to int32 - value out of range.");
					e[t] = Number(n);
				}
				return new Uint8Array(e.buffer);
			}
			case "int8":
			case "uint8":
			case "uint32": {
				if ("uint32" === t && a.some((e) => e > 2147483647)) throw new Error("Can not convert uint32 data to int32 - value out of range.");
				let e = Int32Array.from(a, Number);
				return new Uint8Array(e.buffer);
			}
			default: throw new Error(`Unsupported data conversion from ${t} to 'int32'`);
		}
	}, vt = (e, t) => {
		if ("int32" === t) return e;
		if (e.byteLength % 4 != 0) throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");
		let n = e.byteLength / 4, s = new Int32Array(e.buffer, e.byteOffset, n);
		switch (t) {
			case "int64": {
				let e = BigInt64Array.from(s, BigInt);
				return new Uint8Array(e.buffer);
			}
			case "uint64": {
				if (s.some((e) => e < 0)) throw new Error("Can not convert int32 data to uin64 - negative value found.");
				let e = BigUint64Array.from(s, BigInt);
				return new Uint8Array(e.buffer);
			}
			case "int8": {
				if (s.some((e) => e < -128 || e > 127)) throw new Error("Can not convert int32 data to int8 - value out of range.");
				let e = Int8Array.from(s, Number);
				return new Uint8Array(e.buffer);
			}
			case "uint8":
				if (s.some((e) => e < 0 || e > 255)) throw new Error("Can not convert int32 data to uint8 - value out of range.");
				return Uint8Array.from(s, Number);
			case "uint32": {
				if (s.some((e) => e < 0)) throw new Error("Can not convert int32 data to uint32 - negative value found.");
				let e = Uint32Array.from(s, Number);
				return new Uint8Array(e.buffer);
			}
			default: throw new Error(`Unsupported data conversion from 'int32' to ${t}`);
		}
	}, Mt = 1, kt = () => Mt++, Et = new Map([
		["int8", "int32"],
		["uint8", "int32"],
		["uint32", "int32"],
		["int64", "int32"]
	]), At = (e, t) => {
		let n = bt.get(e);
		if (!n) throw new Error(`WebNN backend does not support data type: ${e}`);
		return t.length > 0 ? Math.ceil(t.reduce((e, t) => e * t) * n / 8) : 0;
	}, Ct = class {
		constructor(e) {
			this.isDataConverted = !1;
			let { sessionId: t, context: n, tensor: s, dataType: r, shape: a, fallbackDataType: o } = e;
			this.sessionId = t, this.mlContext = n, this.mlTensor = s, this.dataType = r, this.tensorShape = a, this.fallbackDataType = o;
		}
		get tensor() {
			return this.mlTensor;
		}
		get type() {
			return this.dataType;
		}
		get fallbackType() {
			return this.fallbackDataType;
		}
		get shape() {
			return this.tensorShape;
		}
		get byteLength() {
			return At(this.dataType, this.tensorShape);
		}
		destroy() {
			yt("verbose", () => "[WebNN] TensorWrapper.destroy"), this.mlTensor.destroy();
		}
		write(e) {
			this.mlContext.writeTensor(this.mlTensor, e);
		}
		async read(e) {
			if (this.fallbackDataType) {
				let t = await this.mlContext.readTensor(this.mlTensor), n = vt(new Uint8Array(t), this.dataType);
				return e ? void (e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)).set(n) : n.buffer;
			}
			return e ? this.mlContext.readTensor(this.mlTensor, e) : this.mlContext.readTensor(this.mlTensor);
		}
		canReuseTensor(e, t, n) {
			return this.mlContext === e && this.dataType === t && this.tensorShape.length === n.length && this.tensorShape.every((e, t) => e === n[t]);
		}
		setIsDataConverted(e) {
			this.isDataConverted = e;
		}
	}, Tt = class {
		constructor(e, t) {
			this.tensorManager = e, this.wrapper = t;
		}
		get tensorWrapper() {
			return this.wrapper;
		}
		releaseTensor() {
			this.tensorWrapper && (this.tensorManager.releaseTensor(this.tensorWrapper), this.wrapper = void 0);
		}
		async ensureTensor(e, t, n, s) {
			let r, a = this.tensorManager.getMLContext(e), o = this.tensorManager.getMLOpSupportLimits(e);
			if (!o?.input.dataTypes.includes(t)) {
				if (r = Et.get(t), !r || o?.input.dataTypes.includes(r)) throw new Error(`WebNN backend does not support data type: ${t}`);
				yt("verbose", () => `[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${r}`);
			}
			if (this.wrapper) {
				if (this.wrapper.canReuseTensor(a, t, n)) return this.wrapper.tensor;
				if (s) {
					if (this.wrapper.byteLength !== At(t, n)) throw new Error("Unable to copy data to tensor with different size.");
					this.activeUpload = new Uint8Array(await this.wrapper.read());
				}
				this.tensorManager.releaseTensor(this.wrapper);
			}
			let i = typeof MLTensorUsage > "u" ? void 0 : MLTensorUsage.READ | MLTensorUsage.WRITE;
			return this.wrapper = await this.tensorManager.getCachedTensor(e, t, n, i, !0, !0, r), s && this.activeUpload && (this.wrapper.write(this.activeUpload), this.activeUpload = void 0), this.wrapper.tensor;
		}
		upload(e) {
			let t = e;
			if (this.wrapper) {
				if (this.wrapper.fallbackType) {
					if ("int32" !== this.wrapper.fallbackType) throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);
					t = xt(e, this.wrapper.type), this.wrapper.setIsDataConverted(!0);
				}
				if (e.byteLength === this.wrapper.byteLength) return void this.wrapper.write(t);
				yt("verbose", () => "Data size does not match tensor size. Releasing tensor."), this.releaseTensor();
			}
			this.activeUpload ? this.activeUpload.set(t) : this.activeUpload = new Uint8Array(t);
		}
		async download(e) {
			if (this.activeUpload) {
				let t = this.wrapper?.isDataConverted ? vt(this.activeUpload, this.wrapper?.type) : this.activeUpload;
				return e ? void (e instanceof ArrayBuffer ? new Uint8Array(e).set(t) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength).set(t)) : t.buffer;
			}
			if (!this.wrapper) throw new Error("Tensor has not been created.");
			return e ? this.wrapper.read(e) : this.wrapper.read();
		}
	}, St = class {
		constructor(e) {
			this.backend = e, this.tensorTrackersById = /* @__PURE__ */ new Map(), this.freeTensors = [], this.externalTensors = /* @__PURE__ */ new Set();
		}
		getMLContext(e) {
			let t = this.backend.getMLContext(e);
			if (!t) throw new Error("MLContext not found for session.");
			return t;
		}
		getMLOpSupportLimits(e) {
			return this.backend.getMLOpSupportLimits(e);
		}
		reserveTensorId() {
			let e = kt();
			return this.tensorTrackersById.set(e, new Tt(this)), e;
		}
		releaseTensorId(e) {
			let t = this.tensorTrackersById.get(e);
			t && (this.tensorTrackersById.delete(e), t.tensorWrapper && this.releaseTensor(t.tensorWrapper));
		}
		async ensureTensor(e, t, n, s, r) {
			yt("verbose", () => `[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${s}, copyOld: ${r}}`);
			let a = this.tensorTrackersById.get(t);
			if (!a) throw new Error("Tensor not found.");
			return a.ensureTensor(e, n, s, r);
		}
		upload(e, t) {
			let n = this.tensorTrackersById.get(e);
			if (!n) throw new Error("Tensor not found.");
			n.upload(t);
		}
		async download(e, t) {
			yt("verbose", () => `[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);
			let n = this.tensorTrackersById.get(e);
			if (!n) throw new Error("Tensor not found.");
			return n.download(t);
		}
		releaseTensorsForSession(e) {
			for (let t of this.freeTensors) t.sessionId === e && t.destroy();
			this.freeTensors = this.freeTensors.filter((t) => t.sessionId !== e);
		}
		registerTensor(e, t, n, s) {
			let r = this.getMLContext(e), a = kt(), o = new Ct({
				sessionId: e,
				context: r,
				tensor: t,
				dataType: n,
				shape: s
			});
			return this.tensorTrackersById.set(a, new Tt(this, o)), this.externalTensors.add(o), a;
		}
		async getCachedTensor(e, t, n, s, r, a, o) {
			let i = this.getMLContext(e);
			for (let [c, u] of this.freeTensors.entries()) if (u.canReuseTensor(i, t, n)) {
				yt("verbose", () => `[WebNN] Reusing tensor {dataType: ${t}, ${o ? `fallbackDataType: ${o},` : ""} shape: ${n}`);
				let s = this.freeTensors.splice(c, 1)[0];
				return s.sessionId = e, s;
			}
			yt("verbose", () => `[WebNN] MLContext.createTensor {dataType: ${t}, ${o ? `fallbackDataType: ${o},` : ""} shape: ${n}}`);
			let l = await i.createTensor({
				dataType: o ?? t,
				shape: n,
				dimensions: n,
				usage: s,
				writable: r,
				readable: a
			});
			return new Ct({
				sessionId: e,
				context: i,
				tensor: l,
				dataType: t,
				shape: n,
				fallbackDataType: o
			});
		}
		releaseTensor(e) {
			this.externalTensors.has(e) && this.externalTensors.delete(e), this.freeTensors.push(e);
		}
	}, Ft = (...e) => new St(...e);
}), Ut = {};
Q(Ut, { WebNNBackend: () => qt });
var Vt, jt, qt, Wt, Ht, Qt, Xt, Jt, Yt, Kt, Zt, en, tn, nn, sn, rn, an, on, ln, cn, un, dn, hn, _n, pn, fn, mn, gn, wn, yn, bn, xn, vn, Mn, kn, En, An, Cn = H(() => {
	Bt(), Lt(), Dt(), Gt(), Rt(), Vt = new Map([
		[1, "float32"],
		[10, "float16"],
		[6, "int32"],
		[12, "uint32"],
		[7, "int64"],
		[13, "uint64"],
		[22, "int4"],
		[21, "uint4"],
		[3, "int8"],
		[2, "uint8"],
		[9, "uint8"]
	]), jt = (e, t) => {
		if (e === t) return !0;
		if (void 0 === e || void 0 === t) return !1;
		let n = Object.keys(e).sort(), s = Object.keys(t).sort();
		return n.length === s.length && n.every((n, r) => n === s[r] && e[n] === t[n]);
	}, qt = class {
		constructor(e) {
			this.tensorManager = Ft(this), this.mlContextBySessionId = /* @__PURE__ */ new Map(), this.sessionIdsByMLContext = /* @__PURE__ */ new Map(), this.mlContextCache = [], this.sessionGraphInputs = /* @__PURE__ */ new Map(), this.sessionGraphOutputs = /* @__PURE__ */ new Map(), this.temporaryGraphInputs = [], this.temporaryGraphOutputs = [], this.temporarySessionTensorIds = /* @__PURE__ */ new Map(), this.mlOpSupportLimitsBySessionId = /* @__PURE__ */ new Map(), gt(e.logLevel, !!e.debug);
		}
		get currentSessionId() {
			if (void 0 === this.activeSessionId) throw new Error("No active session");
			return this.activeSessionId;
		}
		onRunStart(e) {
			yt("verbose", () => `[WebNN] onRunStart {sessionId: ${e}}`), this.activeSessionId = e;
		}
		onRunEnd(e) {
			yt("verbose", () => `[WebNN] onRunEnd {sessionId: ${e}}`);
			let t = this.temporarySessionTensorIds.get(e);
			if (t) {
				for (let e of t) yt("verbose", () => `[WebNN] releasing temporary tensor {tensorId: ${e}}`), this.tensorManager.releaseTensorId(e);
				this.temporarySessionTensorIds.delete(e), this.activeSessionId = void 0;
			}
		}
		async createMLContext(e) {
			if (e instanceof GPUDevice) {
				let t = this.mlContextCache.findIndex((t) => t.gpuDevice === e);
				if (-1 !== t) return this.mlContextCache[t].mlContext;
				{
					let t = await navigator.ml.createContext(e);
					return this.mlContextCache.push({
						gpuDevice: e,
						mlContext: t
					}), t;
				}
			}
			if (void 0 === e) {
				let e = this.mlContextCache.findIndex((e) => void 0 === e.options && void 0 === e.gpuDevice);
				if (-1 !== e) return this.mlContextCache[e].mlContext;
				{
					let e = await navigator.ml.createContext();
					return this.mlContextCache.push({ mlContext: e }), e;
				}
			}
			let t = this.mlContextCache.findIndex((t) => jt(t.options, e));
			if (-1 !== t) return this.mlContextCache[t].mlContext;
			{
				let t = await navigator.ml.createContext(e);
				return this.mlContextCache.push({
					options: e,
					mlContext: t
				}), t;
			}
		}
		registerMLContext(e, t) {
			this.mlContextBySessionId.set(e, t);
			let n = this.sessionIdsByMLContext.get(t);
			n || (n = /* @__PURE__ */ new Set(), this.sessionIdsByMLContext.set(t, n)), n.add(e), this.mlOpSupportLimitsBySessionId.has(e) || this.mlOpSupportLimitsBySessionId.set(e, t.opSupportLimits()), this.temporaryGraphInputs.length > 0 && (this.sessionGraphInputs.set(e, this.temporaryGraphInputs), this.temporaryGraphInputs = []), this.temporaryGraphOutputs.length > 0 && (this.sessionGraphOutputs.set(e, this.temporaryGraphOutputs), this.temporaryGraphOutputs = []);
		}
		onReleaseSession(e) {
			this.sessionGraphInputs.delete(e), this.sessionGraphOutputs.delete(e);
			let t = this.mlContextBySessionId.get(e);
			if (!t) return;
			this.tensorManager.releaseTensorsForSession(e), this.mlContextBySessionId.delete(e), this.mlOpSupportLimitsBySessionId.delete(e);
			let n = this.sessionIdsByMLContext.get(t);
			if (n.delete(e), 0 === n.size) {
				this.sessionIdsByMLContext.delete(t);
				let e = this.mlContextCache.findIndex((e) => e.mlContext === t);
				-1 !== e && this.mlContextCache.splice(e, 1);
			}
		}
		getMLContext(e) {
			return this.mlContextBySessionId.get(e);
		}
		getMLOpSupportLimits(e) {
			return this.mlOpSupportLimitsBySessionId.get(e);
		}
		reserveTensorId() {
			return this.tensorManager.reserveTensorId();
		}
		releaseTensorId(e) {
			yt("verbose", () => `[WebNN] releaseTensorId {tensorId: ${e}}`), this.tensorManager.releaseTensorId(e);
		}
		async ensureTensor(e, t, n, s, r) {
			let a = Vt.get(n);
			if (!a) throw new Error(`Unsupported ONNX data type: ${n}`);
			return this.tensorManager.ensureTensor(e ?? this.currentSessionId, t, a, s, r);
		}
		async createTemporaryTensor(e, t, n) {
			yt("verbose", () => `[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);
			let s = Vt.get(t);
			if (!s) throw new Error(`Unsupported ONNX data type: ${t}`);
			let r = this.tensorManager.reserveTensorId();
			await this.tensorManager.ensureTensor(e, r, s, n, !1);
			let a = this.temporarySessionTensorIds.get(e);
			return a ? a.push(r) : this.temporarySessionTensorIds.set(e, [r]), r;
		}
		uploadTensor(e, t) {
			if (!He().shouldTransferToMLTensor) throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");
			yt("verbose", () => `[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`), this.tensorManager.upload(e, t);
		}
		async downloadTensor(e, t) {
			return this.tensorManager.download(e, t);
		}
		createMLTensorDownloader(e, t) {
			return async () => {
				let n = await this.tensorManager.download(e);
				return pt(n, t);
			};
		}
		registerMLTensor(e, t, n, s) {
			let r = Vt.get(n);
			if (!r) throw new Error(`Unsupported ONNX data type: ${n}`);
			let a = this.tensorManager.registerTensor(e, t, r, s);
			return yt("verbose", () => `[WebNN] registerMLTensor {tensor: ${t}, dataType: ${r}, dimensions: ${s}} -> {tensorId: ${a}}`), a;
		}
		registerMLConstant(e, t, n, s, r, a, o = !1) {
			if (!a) throw new Error("External mounted files are not available.");
			let i = e;
			e.startsWith("./") && (i = e.substring(2));
			let l = a.get(i);
			if (!l) throw new Error(`File with name ${i} not found in preloaded files.`);
			if (t + n > l.byteLength) throw new Error("Out of bounds: data offset and length exceed the external file data size.");
			let c, u = l.slice(t, t + n).buffer;
			switch (r.dataType) {
				case "float32":
					c = new Float32Array(u);
					break;
				case "float16":
					c = typeof Float16Array < "u" && Float16Array.from ? new Float16Array(u) : new Uint16Array(u);
					break;
				case "int32":
					c = new Int32Array(u);
					break;
				case "uint32":
					c = new Uint32Array(u);
					break;
				case "int64":
					if (o) {
						let e = xt(new Uint8Array(u), "int64");
						c = new Int32Array(e.buffer), r.dataType = "int32";
					} else c = new BigInt64Array(u);
					break;
				case "uint64":
					c = new BigUint64Array(u);
					break;
				case "int8":
					c = new Int8Array(u);
					break;
				case "int4":
				case "uint4":
				case "uint8":
					c = new Uint8Array(u);
					break;
				default: throw new Error(`Unsupported data type: ${r.dataType} in creating WebNN Constant from external data.`);
			}
			return yt("verbose", () => `[WebNN] registerMLConstant {dataType: ${r.dataType}, shape: ${r.shape}}} ${o ? "(Note: it was int64 data type and registered to int32 as workaround)" : ""}`), s.constant(r, c);
		}
		registerGraphInput(e) {
			this.temporaryGraphInputs.push(e);
		}
		registerGraphOutput(e) {
			this.temporaryGraphOutputs.push(e);
		}
		isGraphInput(e, t) {
			let n = this.sessionGraphInputs.get(e);
			return !!n && n.includes(t);
		}
		isGraphOutput(e, t) {
			let n = this.sessionGraphOutputs.get(e);
			return !!n && n.includes(t);
		}
		isGraphInputOutputTypeSupported(e, t, n = !0) {
			let s = Vt.get(at(t)), r = this.mlOpSupportLimitsBySessionId.get(e);
			return !(typeof s > "u") && (n ? !!r?.input.dataTypes.includes(s) : !!r?.output.dataTypes.includes(s));
		}
		flush() {}
	};
}), Tn = H(() => {
	fe(), zt(), Nt(), Bt(), Lt(), Ot(), $t(), Wt = (e, t) => {
		0 !== He()._OrtInit(e, t) && Je("Can't initialize onnxruntime.");
	}, Ht = async (e) => {
		Wt(e.wasm.numThreads, ct(e.logLevel));
	}, Qt = async (e, t) => {
		He().asyncInit?.();
		let n = e.webgpu.adapter;
		if ("webgpu" === t) {
			if (typeof navigator > "u" || !navigator.gpu) throw new Error("WebGPU is not supported in current environment");
			if (n) {
				if ("object" != typeof n.limits || "object" != typeof n.features || "function" != typeof n.requestDevice) throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.");
			} else {
				let t = e.webgpu.powerPreference;
				if (void 0 !== t && "low-power" !== t && "high-performance" !== t) throw new Error(`Invalid powerPreference setting: "${t}"`);
				let s = e.webgpu.forceFallbackAdapter;
				if (void 0 !== s && "boolean" != typeof s) throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);
				if (n = await navigator.gpu.requestAdapter({
					powerPreference: t,
					forceFallbackAdapter: s
				}), !n) throw new Error("Failed to get GPU adapter. You may need to enable flag \"--enable-unsafe-webgpu\" if you are using Chrome.");
			}
		}
		if ("webnn" === t && (typeof navigator > "u" || !navigator.ml)) throw new Error("WebNN is not supported in current environment");
		if ("webgpu" === t && He().webgpuInit((t) => {
			e.webgpu.device = t;
		}), "webnn" === t) {
			let t = new (Cn(), X(Ut)).WebNNBackend(e);
			He().webnnInit([
				t,
				() => t.reserveTensorId(),
				(e) => t.releaseTensorId(e),
				async (e, n, s, r, a) => t.ensureTensor(e, n, s, r, a),
				(e, n) => {
					t.uploadTensor(e, n);
				},
				async (e, n) => t.downloadTensor(e, n),
				(e, n) => t.registerMLContext(e, n),
				!!e.trace
			]);
		}
	}, Xt = /* @__PURE__ */ new Map(), Jt = (e) => {
		let t = He(), n = t.stackSave();
		try {
			let n = t.PTR_SIZE, s = t.stackAlloc(2 * n);
			0 !== t._OrtGetInputOutputCount(e, s, s + n) && Je("Can't get session input/output count.");
			let r = 4 === n ? "i32" : "i64";
			return [Number(t.getValue(s, r)), Number(t.getValue(s + n, r))];
		} finally {
			t.stackRestore(n);
		}
	}, Yt = (e, t) => {
		let n = He(), s = n.stackSave(), r = 0;
		try {
			let s = n.PTR_SIZE, a = n.stackAlloc(2 * s);
			0 !== n._OrtGetInputOutputMetadata(e, t, a, a + s) && Je("Can't get session input/output metadata.");
			let o = Number(n.getValue(a, "*"));
			r = Number(n.getValue(a + s, "*"));
			let i = n.HEAP32[r / 4];
			if (0 === i) return [o, 0];
			let l = n.HEAPU32[r / 4 + 1], c = [];
			for (let e = 0; e < l; e++) {
				let t = Number(n.getValue(r + 8 + e * s, "*"));
				c.push(0 !== t ? n.UTF8ToString(t) : Number(n.getValue(r + 8 + (e + l) * s, "*")));
			}
			return [
				o,
				i,
				c
			];
		} finally {
			n.stackRestore(s), 0 !== r && n._OrtFree(r);
		}
	}, Kt = (e) => {
		let t = He(), n = t._malloc(e.byteLength);
		if (0 === n) throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);
		return t.HEAPU8.set(e, n), [n, e.byteLength];
	}, Zt = async (e, t) => {
		let n, s, r = He();
		Array.isArray(e) ? [n, s] = e : e.buffer === r.HEAPU8.buffer ? [n, s] = [e.byteOffset, e.byteLength] : [n, s] = Kt(e);
		let a = 0, o = 0, i = 0, l = [], c = [], u = [];
		try {
			if ([o, l] = await rt(t), t?.externalData && r.mountExternalData) {
				let e = [];
				for (let n of t.externalData) {
					let t = "string" == typeof n ? n : n.path;
					e.push(_t("string" == typeof n ? n : n.data).then((e) => {
						r.mountExternalData(t, e);
					}));
				}
				await Promise.all(e);
			}
			for (let n of t?.executionProviders ?? []) if ("webnn" === ("string" == typeof n ? n : n.name)) {
				if (r.shouldTransferToMLTensor = !1, "string" != typeof n) {
					let e = n, t = e?.context, s = e?.gpuDevice, a = e?.deviceType, o = e?.powerPreference;
					r.currentContext = t || (s ? await r.webnnCreateMLContext(s) : await r.webnnCreateMLContext({
						deviceType: a,
						powerPreference: o
					}));
				} else r.currentContext = await r.webnnCreateMLContext();
				break;
			}
			a = await r._OrtCreateSession(n, s, o), r.webgpuOnCreateSession?.(a), 0 === a && Je("Can't create a session."), r.jsepOnCreateSession?.(), r.currentContext && (r.webnnRegisterMLContext(a, r.currentContext), r.currentContext = void 0, r.shouldTransferToMLTensor = !0);
			let [e, d] = Jt(a), h = !!t?.enableGraphCapture, _ = [], p = [], f = [], m = [], g = [];
			for (let t = 0; t < e; t++) {
				let [e, n, s] = Yt(a, t);
				0 === e && Je("Can't get an input name."), c.push(e);
				let o = r.UTF8ToString(e);
				_.push(o), f.push(0 === n ? {
					name: o,
					isTensor: !1
				} : {
					name: o,
					isTensor: !0,
					type: ot(n),
					shape: s
				});
			}
			for (let n = 0; n < d; n++) {
				let [s, o, i] = Yt(a, n + e);
				0 === s && Je("Can't get an output name."), u.push(s);
				let l = r.UTF8ToString(s);
				p.push(l), m.push(0 === o ? {
					name: l,
					isTensor: !1
				} : {
					name: l,
					isTensor: !0,
					type: ot(o),
					shape: i
				});
				{
					if (h && void 0 === t?.preferredOutputLocation) {
						g.push("gpu-buffer");
						continue;
					}
					let e = "string" == typeof t?.preferredOutputLocation ? t.preferredOutputLocation : t?.preferredOutputLocation?.[l] ?? "cpu", n = r.webnnIsGraphOutput;
					if ("cpu" === e && n && n(a, l)) {
						g.push("ml-tensor-cpu-output");
						continue;
					}
					if ("cpu" !== e && "cpu-pinned" !== e && "gpu-buffer" !== e && "ml-tensor" !== e) throw new Error(`Not supported preferred output location: ${e}.`);
					if (h && "gpu-buffer" !== e) throw new Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);
					g.push(e);
				}
			}
			let w = null;
			return g.some((e) => "gpu-buffer" === e || "ml-tensor" === e || "ml-tensor-cpu-output" === e) && (i = r._OrtCreateBinding(a), 0 === i && Je("Can't create IO binding."), w = {
				handle: i,
				outputPreferredLocations: g,
				outputPreferredLocationsEncoded: g.map((e) => "ml-tensor-cpu-output" === e ? "ml-tensor" : e).map((e) => ht(e))
			}), Xt.set(a, [
				a,
				c,
				u,
				w,
				h,
				!1
			]), [
				a,
				_,
				p,
				f,
				m
			];
		} catch (d) {
			throw c.forEach((e) => r._OrtFree(e)), u.forEach((e) => r._OrtFree(e)), 0 !== i && 0 !== r._OrtReleaseBinding(i) && Je("Can't release IO binding."), 0 !== a && 0 !== r._OrtReleaseSession(a) && Je("Can't release session."), d;
		} finally {
			r._free(n), 0 !== o && 0 !== r._OrtReleaseSessionOptions(o) && Je("Can't release session options."), l.forEach((e) => r._free(e)), r.unmountExternalData?.();
		}
	}, en = (e) => {
		let t = He(), n = Xt.get(e);
		if (!n) throw new Error(`cannot release session. invalid session id: ${e}`);
		let [s, r, a, o, i] = n;
		o && (i && 0 !== t._OrtClearBoundOutputs(o.handle) && Je("Can't clear bound outputs."), 0 !== t._OrtReleaseBinding(o.handle) && Je("Can't release IO binding.")), t.jsepOnReleaseSession?.(e), t.webnnOnReleaseSession?.(e), t.webgpuOnReleaseSession?.(e), r.forEach((e) => t._OrtFree(e)), a.forEach((e) => t._OrtFree(e)), 0 !== t._OrtReleaseSession(s) && Je("Can't release session."), Xt.delete(e);
	}, tn = async (e, t, n, s, r, a, o = !1) => {
		if (!e) return void t.push(0);
		let i, l, c = He(), u = c.PTR_SIZE, d = e[0], h = e[1], _ = e[3], p = _;
		if ("string" === d && ("gpu-buffer" === _ || "ml-tensor" === _)) throw new Error("String tensor is not supported on GPU.");
		if (o && "gpu-buffer" !== _) throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);
		if ("gpu-buffer" === _) {
			let t = e[2].gpuBuffer;
			l = it(at(d), h);
			{
				let e = c.webgpuRegisterBuffer;
				if (!e) throw new Error("Tensor location \"gpu-buffer\" is not supported without using WebGPU.");
				i = e(t, s);
			}
		} else if ("ml-tensor" === _) {
			let t = e[2].mlTensor;
			l = it(at(d), h);
			let n = c.webnnRegisterMLTensor;
			if (!n) throw new Error("Tensor location \"ml-tensor\" is not supported without using WebNN.");
			i = n(s, t, at(d), h);
		} else {
			let t = e[2];
			if (Array.isArray(t)) {
				l = u * t.length, i = c._malloc(l), n.push(i);
				for (let e = 0; e < t.length; e++) {
					if ("string" != typeof t[e]) throw new TypeError(`tensor data at index ${e} is not a string`);
					c.setValue(i + e * u, Qe(t[e], n), "*");
				}
			} else {
				let e = c.webnnIsGraphInput, a = c.webnnIsGraphOutput;
				if ("string" !== d && e && a) {
					let o = c.UTF8ToString(r);
					if (e(s, o) || a(s, o)) {
						let e = at(d);
						l = it(e, h), p = "ml-tensor";
						let n = c.webnnCreateTemporaryTensor, r = c.webnnUploadTensor;
						if (!n || !r) throw new Error("Tensor location \"ml-tensor\" is not supported without using WebNN.");
						let a = await n(s, e, h);
						r(a, new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), i = a;
					} else l = t.byteLength, i = c._malloc(l), n.push(i), c.HEAPU8.set(new Uint8Array(t.buffer, t.byteOffset, l), i);
				} else l = t.byteLength, i = c._malloc(l), n.push(i), c.HEAPU8.set(new Uint8Array(t.buffer, t.byteOffset, l), i);
			}
		}
		let f = c.stackSave(), m = c.stackAlloc(4 * h.length);
		try {
			h.forEach((e, t) => c.setValue(m + t * u, e, 4 === u ? "i32" : "i64"));
			let e = c._OrtCreateTensor(at(d), i, l, m, h.length, ht(p));
			0 === e && Je(`Can't create tensor for input/output. session=${s}, index=${a}.`), t.push(e);
		} finally {
			c.stackRestore(f);
		}
	}, nn = async (e, t, n, s, r, a) => {
		let o = He(), i = o.PTR_SIZE, l = Xt.get(e);
		if (!l) throw new Error(`cannot run inference. invalid session id: ${e}`);
		let c = l[0], u = l[1], d = l[2], h = l[3], _ = l[4], p = l[5], f = t.length, m = s.length, g = 0, w = [], y = [], b = [], x = [], v = [], M = o.stackSave(), k = o.stackAlloc(f * i), E = o.stackAlloc(f * i), A = o.stackAlloc(m * i), C = o.stackAlloc(m * i);
		try {
			[g, w] = Ye(a), z("wasm prepareInputOutputTensor");
			for (let s = 0; s < f; s++) await tn(n[s], y, x, e, u[t[s]], t[s], _);
			for (let t = 0; t < m; t++) await tn(r[t], b, x, e, d[s[t]], f + s[t], _);
			N("wasm prepareInputOutputTensor");
			for (let e = 0; e < f; e++) o.setValue(k + e * i, y[e], "*"), o.setValue(E + e * i, u[t[e]], "*");
			for (let e = 0; e < m; e++) o.setValue(A + e * i, b[e], "*"), o.setValue(C + e * i, d[s[e]], "*");
			if (h && !p) {
				let { handle: n, outputPreferredLocations: a, outputPreferredLocationsEncoded: i } = h;
				if (u.length !== f) throw new Error(`input count from feeds (${f}) is expected to be always equal to model's input count (${u.length}).`);
				z("wasm bindInputsOutputs");
				for (let s = 0; s < f; s++) {
					let r = t[s];
					0 !== await o._OrtBindInput(n, u[r], y[s]) && Je(`Can't bind input[${s}] for session=${e}.`);
				}
				for (let t = 0; t < m; t++) {
					let l = s[t];
					r[t]?.[3] ? (v.push(b[t]), 0 !== o._OrtBindOutput(n, d[l], b[t], 0) && Je(`Can't bind pre-allocated output[${t}] for session=${e}.`)) : 0 !== o._OrtBindOutput(n, d[l], 0, i[l]) && Je(`Can't bind output[${t}] to ${a[t]} for session=${e}.`);
				}
				N("wasm bindInputsOutputs"), Xt.set(e, [
					c,
					u,
					d,
					h,
					_,
					!0
				]);
			}
			let l;
			o.jsepOnRunStart?.(c), o.webnnOnRunStart?.(c), l = h ? await o._OrtRunWithBinding(c, h.handle, m, A, g) : await o._OrtRun(c, E, k, f, C, m, A, g), 0 !== l && Je("failed to call OrtRun().");
			let M = [], T = [];
			z("wasm ProcessOutputTensor");
			for (let t = 0; t < m; t++) {
				let n = Number(o.getValue(A + t * i, "*"));
				if (n === b[t] || v.includes(b[t])) {
					M.push(r[t]), n !== b[t] && 0 !== o._OrtReleaseTensor(n) && Je("Can't release tensor.");
					continue;
				}
				let a, l = o.stackSave(), c = o.stackAlloc(4 * i), u = !1, d = 0;
				try {
					0 !== o._OrtGetTensorData(n, c, c + i, c + 2 * i, c + 3 * i) && Je(`Can't access output tensor data on index ${t}.`);
					let r = 4 === i ? "i32" : "i64", l = Number(o.getValue(c, r));
					d = o.getValue(c + i, "*");
					let _ = o.getValue(c + 2 * i, "*"), p = Number(o.getValue(c + 3 * i, r)), f = [];
					for (let e = 0; e < p; e++) f.push(Number(o.getValue(_ + e * i, r)));
					0 !== o._OrtFree(_) && Je("Can't free memory for tensor dims.");
					let m = f.reduce((e, t) => e * t, 1);
					a = ot(l);
					let g = h?.outputPreferredLocations[s[t]];
					if ("string" === a) {
						if ("gpu-buffer" === g || "ml-tensor" === g) throw new Error("String tensor is not supported on GPU.");
						let e = [];
						for (let t = 0; t < m; t++) {
							let n = o.getValue(d + t * i, "*"), s = o.getValue(d + (t + 1) * i, "*"), r = t === m - 1 ? void 0 : s - n;
							e.push(o.UTF8ToString(n, r));
						}
						M.push([
							a,
							f,
							e,
							"cpu"
						]);
					} else if ("gpu-buffer" === g && m > 0) {
						let t = o.webgpuGetBuffer;
						if (!t) throw new Error("preferredLocation \"gpu-buffer\" is not supported without using WebGPU.");
						let s = t(d), r = it(l, m);
						if (void 0 === r || !ut(a)) throw new Error(`Unsupported data type: ${a}`);
						u = !0;
						{
							o.webgpuRegisterBuffer(s, e, d);
							let t = o.webgpuCreateDownloader(s, r, e);
							M.push([
								a,
								f,
								{
									gpuBuffer: s,
									download: async () => {
										let e = await t();
										return new (lt(a))(e);
									},
									dispose: () => {
										0 !== o._OrtReleaseTensor(n) && Je("Can't release tensor.");
									}
								},
								"gpu-buffer"
							]);
						}
					} else if ("ml-tensor" === g && m > 0) {
						let t = o.webnnEnsureTensor, s = o.webnnIsGraphInputOutputTypeSupported;
						if (!t || !s) throw new Error("preferredLocation \"ml-tensor\" is not supported without using WebNN.");
						if (void 0 === it(l, m) || !dt(a)) throw new Error(`Unsupported data type: ${a}`);
						if (!s(e, a, !1)) throw new Error(`preferredLocation "ml-tensor" for ${a} output is not supported by current WebNN Context.`);
						let r = await t(e, d, l, f, !1);
						u = !0, M.push([
							a,
							f,
							{
								mlTensor: r,
								download: o.webnnCreateMLTensorDownloader(d, a),
								dispose: () => {
									o.webnnReleaseTensorId(d), o._OrtReleaseTensor(n);
								}
							},
							"ml-tensor"
						]);
					} else if ("ml-tensor-cpu-output" === g && m > 0) {
						let e = o.webnnCreateMLTensorDownloader(d, a)(), t = M.length;
						u = !0, T.push((async () => {
							let s = [t, await e];
							return o.webnnReleaseTensorId(d), o._OrtReleaseTensor(n), s;
						})()), M.push([
							a,
							f,
							[],
							"cpu"
						]);
					} else {
						let e = new (lt(a))(m);
						new Uint8Array(e.buffer, e.byteOffset, e.byteLength).set(o.HEAPU8.subarray(d, d + e.byteLength)), M.push([
							a,
							f,
							e,
							"cpu"
						]);
					}
				} finally {
					o.stackRestore(l), "string" === a && d && o._free(d), u || o._OrtReleaseTensor(n);
				}
			}
			h && !_ && (0 !== o._OrtClearBoundOutputs(h.handle) && Je("Can't clear bound outputs."), Xt.set(e, [
				c,
				u,
				d,
				h,
				_,
				!1
			]));
			for (let [e, t] of await Promise.all(T)) M[e][2] = t;
			return N("wasm ProcessOutputTensor"), M;
		} finally {
			o.webnnOnRunEnd?.(c), o.stackRestore(M), n.forEach((e) => {
				e && "gpu-buffer" === e[3] && o.webgpuUnregisterBuffer(e[2].gpuBuffer);
			}), r.forEach((e) => {
				e && "gpu-buffer" === e[3] && o.webgpuUnregisterBuffer(e[2].gpuBuffer);
			}), y.forEach((e) => o._OrtReleaseTensor(e)), b.forEach((e) => o._OrtReleaseTensor(e)), x.forEach((e) => o._free(e)), 0 !== g && o._OrtReleaseRunOptions(g), w.forEach((e) => o._free(e));
		}
	}, sn = (e) => {
		let t = He(), n = Xt.get(e);
		if (!n) throw new Error("invalid session id");
		let s = n[0], r = t._OrtEndProfiling(s);
		0 === r && Je("Can't get an profile file name."), t._OrtFree(r);
	}, rn = (e) => {
		let t = [];
		for (let n of e) {
			let e = n[2];
			!Array.isArray(e) && "buffer" in e && t.push(e.buffer);
		}
		return t;
	};
}), Sn = H(() => {
	fe(), Tn(), Lt(), Pt(), an = () => !!p.wasm.proxy && typeof document < "u", ln = !1, cn = !1, un = !1, _n = /* @__PURE__ */ new Map(), pn = (e, t) => {
		let n = _n.get(e);
		n ? n.push(t) : _n.set(e, [t]);
	}, fn = () => {
		if (ln || !cn || un || !on) throw new Error("worker not ready");
	}, mn = (e) => {
		switch (e.data.type) {
			case "init-wasm":
				ln = !1, e.data.err ? (un = !0, hn[1](e.data.err)) : (cn = !0, hn[0]()), dn && (URL.revokeObjectURL(dn), dn = void 0);
				break;
			case "init-ep":
			case "copy-from":
			case "create":
			case "release":
			case "run":
			case "end-profiling": {
				let t = _n.get(e.data.type);
				e.data.err ? t.shift()[1](e.data.err) : t.shift()[0](e.data.out);
				break;
			}
		}
	}, gn = async () => {
		if (!cn) {
			if (ln) throw new Error("multiple calls to 'initWasm()' detected.");
			if (un) throw new Error("previous call to 'initWasm()' failed.");
			if (ln = !0, an()) return new Promise((e, t) => {
				on?.terminate(), Ne().then(([n, s]) => {
					try {
						(on = s).onerror = (e) => t(e), on.onmessage = mn, hn = [e, t];
						let r = {
							type: "init-wasm",
							in: p
						};
						!r.in.wasm.wasmPaths && (n || Ce) && (r.in.wasm.wasmPaths = { wasm: new URL("" + new URL("../ort-wasm-simd-threaded.asyncify-DMmc6YqF.wasm", import.meta.url).href, "" + import.meta.url).href }), on.postMessage(r), dn = n;
					} catch (r) {
						t(r);
					}
				}, t);
			});
			try {
				await We(p.wasm), await Ht(p), cn = !0;
			} catch (a) {
				throw un = !0, a;
			} finally {
				ln = !1;
			}
		}
	}, wn = async (e) => {
		if (an()) return fn(), new Promise((t, n) => {
			pn("init-ep", [t, n]);
			let s = {
				type: "init-ep",
				in: {
					epName: e,
					env: p
				}
			};
			on.postMessage(s);
		});
		await Qt(p, e);
	}, yn = async (e) => an() ? (fn(), new Promise((t, n) => {
		pn("copy-from", [t, n]);
		let s = {
			type: "copy-from",
			in: { buffer: e }
		};
		on.postMessage(s, [e.buffer]);
	})) : Kt(e), bn = async (e, t) => {
		if (an()) {
			if (t?.preferredOutputLocation) throw new Error("session option \"preferredOutputLocation\" is not supported for proxy.");
			return fn(), new Promise((n, s) => {
				pn("create", [n, s]);
				let r = {
					type: "create",
					in: {
						model: e,
						options: { ...t }
					}
				}, a = [];
				e instanceof Uint8Array && a.push(e.buffer), on.postMessage(r, a);
			});
		}
		return Zt(e, t);
	}, xn = async (e) => {
		if (an()) return fn(), new Promise((t, n) => {
			pn("release", [t, n]);
			let s = {
				type: "release",
				in: e
			};
			on.postMessage(s);
		});
		en(e);
	}, vn = async (e, t, n, s, r, a) => {
		if (an()) {
			if (n.some((e) => "cpu" !== e[3])) throw new Error("input tensor on GPU is not supported for proxy.");
			if (r.some((e) => e)) throw new Error("pre-allocated output tensor is not supported for proxy.");
			return fn(), new Promise((r, o) => {
				pn("run", [r, o]);
				let i = n, l = {
					type: "run",
					in: {
						sessionId: e,
						inputIndices: t,
						inputs: i,
						outputIndices: s,
						options: a
					}
				};
				on.postMessage(l, rn(i));
			});
		}
		return nn(e, t, n, s, r, a);
	}, Mn = async (e) => {
		if (an()) return fn(), new Promise((t, n) => {
			pn("end-profiling", [t, n]);
			let s = {
				type: "end-profiling",
				in: e
			};
			on.postMessage(s);
		});
		sn(e);
	};
}), Fn = H(() => {
	fe(), Sn(), Bt(), me(), $t(), kn = (e, t) => {
		switch (e.location) {
			case "cpu": return [
				e.type,
				e.dims,
				e.data,
				"cpu"
			];
			case "gpu-buffer": return [
				e.type,
				e.dims,
				{ gpuBuffer: e.gpuBuffer },
				"gpu-buffer"
			];
			case "ml-tensor": return [
				e.type,
				e.dims,
				{ mlTensor: e.mlTensor },
				"ml-tensor"
			];
			default: throw new Error(`invalid data location: ${e.location} for ${t()}`);
		}
	}, En = (e) => {
		switch (e[3]) {
			case "cpu": return new F(e[0], e[2], e[1]);
			case "gpu-buffer": {
				let t = e[0];
				if (!ut(t)) throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);
				let { gpuBuffer: n, download: s, dispose: r } = e[2];
				return F.fromGpuBuffer(n, {
					dataType: t,
					dims: e[1],
					download: s,
					dispose: r
				});
			}
			case "ml-tensor": {
				let t = e[0];
				if (!dt(t)) throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);
				let { mlTensor: n, download: s, dispose: r } = e[2];
				return F.fromMLTensor(n, {
					dataType: t,
					dims: e[1],
					download: s,
					dispose: r
				});
			}
			default: throw new Error(`invalid data location: ${e[3]}`);
		}
	}, An = class {
		async fetchModelAndCopyToWasmMemory(e) {
			return yn(await _t(e));
		}
		async loadModel(e, t) {
			let n;
			L(), n = "string" == typeof e ? await this.fetchModelAndCopyToWasmMemory(e) : e, [this.sessionId, this.inputNames, this.outputNames, this.inputMetadata, this.outputMetadata] = await bn(n, t), O();
		}
		async dispose() {
			return xn(this.sessionId);
		}
		async run(e, t, n) {
			L();
			let s = [], r = [];
			Object.entries(e).forEach((e) => {
				let t = e[0], n = e[1], a = this.inputNames.indexOf(t);
				if (-1 === a) throw new Error(`invalid input '${t}'`);
				s.push(n), r.push(a);
			});
			let a = [], o = [];
			Object.entries(t).forEach((e) => {
				let t = e[0], n = e[1], s = this.outputNames.indexOf(t);
				if (-1 === s) throw new Error(`invalid output '${t}'`);
				a.push(n), o.push(s);
			});
			let i = s.map((e, t) => kn(e, () => `input "${this.inputNames[r[t]]}"`)), l = a.map((e, t) => e ? kn(e, () => `output "${this.outputNames[o[t]]}"`) : null), c = await vn(this.sessionId, r, i, o, l, n), u = {};
			for (let d = 0; d < c.length; d++) u[this.outputNames[o[d]]] = a[d] ?? En(c[d]);
			return O(), u;
		}
		startProfiling() {}
		endProfiling() {
			Mn(this.sessionId);
		}
	};
}), In = {};
Q(In, {
	OnnxruntimeWebAssemblyBackend: () => Ln,
	initializeFlags: () => Pn,
	wasmBackend: () => On
});
var Pn, Ln, On, zn = H(() => {
	fe(), Sn(), Fn(), Pn = () => {
		("number" != typeof p.wasm.initTimeout || p.wasm.initTimeout < 0) && (p.wasm.initTimeout = 0);
		let e = p.wasm.simd;
		if ("boolean" != typeof e && void 0 !== e && "fixed" !== e && "relaxed" !== e && (p.wasm.simd = !1), "boolean" != typeof p.wasm.proxy && (p.wasm.proxy = !1), "boolean" != typeof p.wasm.trace && (p.wasm.trace = !1), "number" != typeof p.wasm.numThreads || !Number.isInteger(p.wasm.numThreads) || p.wasm.numThreads <= 0) if (typeof self < "u" && !self.crossOriginIsolated) p.wasm.numThreads = 1;
		else {
			let e = typeof navigator > "u" ? W("node:os").cpus().length : navigator.hardwareConcurrency;
			p.wasm.numThreads = Math.min(4, Math.ceil((e || 1) / 2));
		}
	}, On = new (Ln = class {
		async init(e) {
			Pn(), await gn(), await wn(e);
		}
		async createInferenceSessionHandler(e, t) {
			let n = new An();
			return await n.loadModel(e, t), n;
		}
	})();
});
fe(), fe(), fe();
var Nn = pe;
{
	let e = (zn(), X(In)).wasmBackend;
	l("webgpu", e, 5), l("webnn", e, 5), l("cpu", e, 10), l("wasm", e, 10);
}
Object.defineProperty(p.versions, "web", {
	value: "1.26.0-dev.20260416-b7804b056c",
	enumerable: !0
});
let Bn = "warning";
Object.defineProperty({
	wasm: {},
	webgl: {},
	webgpu: {},
	versions: { common: "1.24.3" },
	set logLevel(e) {
		if (void 0 !== e) {
			if ("string" != typeof e || -1 === [
				"verbose",
				"info",
				"warning",
				"error",
				"fatal"
			].indexOf(e)) throw new Error(`Unsupported logging level: ${e}`);
			Bn = e;
		}
	},
	get logLevel() {
		return Bn;
	}
}, "logLevel", { enumerable: !0 });
const Dn = (e, t) => {
	if (void 0 === e) throw new Error("Image buffer must be defined");
	if (void 0 === t.height || void 0 === t.width) throw new Error("Image height and width must be defined");
	if ("NHWC" === t.tensorLayout) throw new Error("NHWC Tensor layout is not supported yet");
	const { height: n, width: s } = t, r = t.norm ?? {
		mean: 255,
		bias: 0
	};
	let a, o;
	a = "number" == typeof r.mean ? [
		r.mean,
		r.mean,
		r.mean,
		r.mean
	] : [
		r.mean[0],
		r.mean[1],
		r.mean[2],
		r.mean[3] ?? 255
	], o = "number" == typeof r.bias ? [
		r.bias,
		r.bias,
		r.bias,
		r.bias
	] : [
		r.bias[0],
		r.bias[1],
		r.bias[2],
		r.bias[3] ?? 0
	];
	const i = void 0 !== t.format ? t.format : "RGBA", l = void 0 !== t.tensorFormat && void 0 !== t.tensorFormat ? t.tensorFormat : "RGB", c = n * s, u = "RGBA" === l ? new Float32Array(4 * c) : new Float32Array(3 * c);
	let d = 4, h = 0, _ = 1, p = 2, f = 3, m = 0, g = c, w = 2 * c, y = -1;
	"RGB" === i && (d = 3, h = 0, _ = 1, p = 2, f = -1), "RGBA" === l ? y = 3 * c : "RBG" === l ? (m = 0, w = c, g = 2 * c) : "BGR" === l && (w = 0, g = c, m = 2 * c);
	for (let b = 0; b < c; b++, h += d, p += d, _ += d, f += d) u[m++] = (e[h] + o[0]) / a[0], u[g++] = (e[_] + o[1]) / a[1], u[w++] = (e[p] + o[2]) / a[2], -1 !== y && -1 !== f && (u[y++] = (e[f] + o[3]) / a[3]);
	return new Vn("float32", u, "RGBA" === l ? [
		1,
		4,
		n,
		s
	] : [
		1,
		3,
		n,
		s
	]);
}, Rn = new Map([
	["float32", Float32Array],
	["uint8", Uint8Array],
	["int8", Int8Array],
	["uint16", Uint16Array],
	["int16", Int16Array],
	["int32", Int32Array],
	["bool", Uint8Array],
	["float64", Float64Array],
	["uint32", Uint32Array],
	["int4", Uint8Array],
	["uint4", Uint8Array]
]), Gn = new Map([
	[Float32Array, "float32"],
	[Uint8Array, "uint8"],
	[Int8Array, "int8"],
	[Uint16Array, "uint16"],
	[Int16Array, "int16"],
	[Int32Array, "int32"],
	[Float64Array, "float64"],
	[Uint32Array, "uint32"]
]);
let Un = !1;
var Vn = class {
	constructor(e, t, n) {
		let s, r;
		if ((() => {
			if (!Un) {
				Un = !0;
				const e = "undefined" != typeof BigInt64Array && BigInt64Array.from, t = "undefined" != typeof BigUint64Array && BigUint64Array.from, n = globalThis.Float16Array, s = void 0 !== n && n.from;
				e && (Rn.set("int64", BigInt64Array), Gn.set(BigInt64Array, "int64")), t && (Rn.set("uint64", BigUint64Array), Gn.set(BigUint64Array, "uint64")), s ? (Rn.set("float16", n), Gn.set(n, "float16")) : Rn.set("float16", Uint16Array);
			}
		})(), "object" == typeof e && "location" in e) switch (this.dataLocation = e.location, s = e.type, r = e.dims, e.location) {
			case "cpu-pinned": {
				const t = Rn.get(s);
				if (!t) throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);
				if (!(e.data instanceof t)) throw new TypeError(`buffer should be of type ${t.name}`);
				this.cpuData = e.data;
				break;
			}
			case "texture":
				if ("float32" !== s) throw new TypeError(`unsupported type "${s}" to create tensor from texture`);
				this.gpuTextureData = e.texture, this.downloader = e.download, this.disposer = e.dispose;
				break;
			case "gpu-buffer":
				if ("float32" !== s && "float16" !== s && "int32" !== s && "int64" !== s && "uint32" !== s && "uint8" !== s && "bool" !== s && "uint4" !== s && "int4" !== s) throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);
				this.gpuBufferData = e.gpuBuffer, this.downloader = e.download, this.disposer = e.dispose;
				break;
			case "ml-tensor":
				if ("float32" !== s && "float16" !== s && "int32" !== s && "int64" !== s && "uint32" !== s && "uint64" !== s && "int8" !== s && "uint8" !== s && "bool" !== s && "uint4" !== s && "int4" !== s) throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);
				this.mlTensorData = e.mlTensor, this.downloader = e.download, this.disposer = e.dispose;
				break;
			default: throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`);
		}
		else {
			let a, o;
			if ("string" == typeof e) if (s = e, o = n, "string" === e) {
				if (!Array.isArray(t)) throw new TypeError("A string tensor's data must be a string array.");
				a = t;
			} else {
				const n = Rn.get(e);
				if (void 0 === n) throw new TypeError(`Unsupported tensor type: ${e}.`);
				if (Array.isArray(t)) {
					if ("float16" === e && n === Uint16Array || "uint4" === e || "int4" === e) throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);
					a = "uint64" === e || "int64" === e ? n.from(t, BigInt) : n.from(t);
				} else if (t instanceof n) a = t;
				else if (t instanceof Uint8ClampedArray) {
					if ("uint8" !== e) throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");
					a = Uint8Array.from(t);
				} else {
					if (!("float16" === e && t instanceof Uint16Array && n !== Uint16Array)) throw new TypeError(`A ${s} tensor's data must be type of ${n}`);
					a = new globalThis.Float16Array(t.buffer, t.byteOffset, t.length);
				}
			}
			else if (o = t, Array.isArray(e)) {
				if (0 === e.length) throw new TypeError("Tensor type cannot be inferred from an empty array.");
				const t = typeof e[0];
				if ("string" === t) s = "string", a = e;
				else {
					if ("boolean" !== t) throw new TypeError(`Invalid element type of data array: ${t}.`);
					s = "bool", a = Uint8Array.from(e);
				}
			} else if (e instanceof Uint8ClampedArray) s = "uint8", a = Uint8Array.from(e);
			else {
				const t = Gn.get(e.constructor);
				if (void 0 === t) throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);
				s = t, a = e;
			}
			if (void 0 === o) o = [a.length];
			else if (!Array.isArray(o)) throw new TypeError("A tensor's dims must be a number array");
			r = o, this.cpuData = a, this.dataLocation = "cpu";
		}
		const a = ((e) => {
			let t = 1;
			for (let n = 0; n < e.length; n++) {
				const s = e[n];
				if ("number" != typeof s || !Number.isSafeInteger(s)) throw new TypeError(`dims[${n}] must be an integer, got: ${s}`);
				if (s < 0) throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${s}`);
				t *= s;
			}
			return t;
		})(r);
		if (this.cpuData && a !== this.cpuData.length && ("uint4" !== s && "int4" !== s || Math.ceil(a / 2) !== this.cpuData.length)) throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);
		this.type = s, this.dims = r, this.size = a;
	}
	static async fromImage(e, t) {
		return (async (e, t) => {
			const n = "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement, s = "undefined" != typeof ImageData && e instanceof ImageData, r = "undefined" != typeof ImageBitmap && e instanceof ImageBitmap, a = "string" == typeof e;
			let o, i = t ?? {};
			const l = () => {
				if ("undefined" != typeof document) return document.createElement("canvas");
				if ("undefined" != typeof OffscreenCanvas) return new OffscreenCanvas(1, 1);
				throw new Error("Canvas is not supported");
			}, c = (e) => "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || e instanceof OffscreenCanvas ? e.getContext("2d") : null;
			if (n) {
				const n = l();
				n.width = e.width, n.height = e.height;
				const s = c(n);
				if (null == s) throw new Error("Can not access image data");
				{
					let n = e.height, r = e.width;
					if (void 0 !== t && void 0 !== t.resizedHeight && void 0 !== t.resizedWidth && (n = t.resizedHeight, r = t.resizedWidth), void 0 !== t) {
						if (i = t, void 0 !== t.tensorFormat) throw new Error("Image input config format must be RGBA for HTMLImageElement");
						i.tensorFormat = "RGBA", i.height = n, i.width = r;
					} else i.tensorFormat = "RGBA", i.height = n, i.width = r;
					s.drawImage(e, 0, 0), o = s.getImageData(0, 0, r, n).data;
				}
			} else {
				if (!s) {
					if (r) {
						if (void 0 === t) throw new Error("Please provide image config with format for Imagebitmap");
						const n = l();
						n.width = e.width, n.height = e.height;
						const s = c(n);
						if (null != s) {
							const t = e.height, n = e.width;
							return s.drawImage(e, 0, 0, n, t), o = s.getImageData(0, 0, n, t).data, i.height = t, i.width = n, Dn(o, i);
						}
						throw new Error("Can not access image data");
					}
					if (a) return new Promise((t, n) => {
						const s = l(), r = c(s);
						if (!e || !r) return n();
						const a = new Image();
						a.crossOrigin = "Anonymous", a.src = e, a.onload = () => {
							s.width = a.width, s.height = a.height, r.drawImage(a, 0, 0, s.width, s.height);
							const e = r.getImageData(0, 0, s.width, s.height);
							i.height = s.height, i.width = s.width, t(Dn(e.data, i));
						};
					});
					throw new Error("Input data provided is not supported - aborted tensor creation");
				}
				{
					let n, s;
					if (void 0 !== t && void 0 !== t.resizedWidth && void 0 !== t.resizedHeight ? (n = t.resizedHeight, s = t.resizedWidth) : (n = e.height, s = e.width), void 0 !== t && (i = t), i.format = "RGBA", i.height = n, i.width = s, void 0 !== t) {
						const t = l();
						t.width = s, t.height = n;
						const r = c(t);
						if (null == r) throw new Error("Can not access image data");
						r.putImageData(e, 0, 0), o = r.getImageData(0, 0, s, n).data;
					} else o = e.data;
				}
			}
			if (void 0 !== o) return Dn(o, i);
			throw new Error("Input data provided is not supported - aborted tensor creation");
		})(e, t);
	}
	static fromTexture(e, t) {
		return ((e, t) => {
			const { width: n, height: s, download: r, dispose: a } = t;
			return new Vn({
				location: "texture",
				type: "float32",
				texture: e,
				dims: [
					1,
					s,
					n,
					4
				],
				download: r,
				dispose: a
			});
		})(e, t);
	}
	static fromGpuBuffer(e, t) {
		return ((e, t) => {
			const { dataType: n, dims: s, download: r, dispose: a } = t;
			return new Vn({
				location: "gpu-buffer",
				type: n ?? "float32",
				gpuBuffer: e,
				dims: s,
				download: r,
				dispose: a
			});
		})(e, t);
	}
	static fromMLTensor(e, t) {
		return ((e, t) => {
			const { dataType: n, dims: s, download: r, dispose: a } = t;
			return new Vn({
				location: "ml-tensor",
				type: n ?? "float32",
				mlTensor: e,
				dims: s,
				download: r,
				dispose: a
			});
		})(e, t);
	}
	static fromPinnedBuffer(e, t, n) {
		return ((e, t, n) => new Vn({
			location: "cpu-pinned",
			type: e,
			data: t,
			dims: n ?? [t.length]
		}))(e, t, n);
	}
	toDataURL(e) {
		return ((e, t) => {
			const n = "undefined" != typeof document ? document.createElement("canvas") : new OffscreenCanvas(1, 1);
			n.width = e.dims[3], n.height = e.dims[2];
			const s = n.getContext("2d");
			if (null != s) {
				let r, a;
				void 0 !== t?.tensorLayout && "NHWC" === t.tensorLayout ? (r = e.dims[2], a = e.dims[3]) : (r = e.dims[3], a = e.dims[2]);
				const o = void 0 !== t?.format ? t.format : "RGB", i = t?.norm;
				let l, c;
				void 0 === i || void 0 === i.mean ? l = [
					255,
					255,
					255,
					255
				] : "number" == typeof i.mean ? l = [
					i.mean,
					i.mean,
					i.mean,
					i.mean
				] : (l = [
					i.mean[0],
					i.mean[1],
					i.mean[2],
					0
				], void 0 !== i.mean[3] && (l[3] = i.mean[3])), void 0 === i || void 0 === i.bias ? c = [
					0,
					0,
					0,
					0
				] : "number" == typeof i.bias ? c = [
					i.bias,
					i.bias,
					i.bias,
					i.bias
				] : (c = [
					i.bias[0],
					i.bias[1],
					i.bias[2],
					0
				], void 0 !== i.bias[3] && (c[3] = i.bias[3]));
				const u = a * r;
				let d = 0, h = u, _ = 2 * u, p = -1;
				"RGBA" === o ? (d = 0, h = u, _ = 2 * u, p = 3 * u) : "RGB" === o ? (d = 0, h = u, _ = 2 * u) : "RBG" === o && (d = 0, _ = u, h = 2 * u);
				for (let t = 0; t < a; t++) for (let n = 0; n < r; n++) {
					const r = (e.data[d++] - c[0]) * l[0], a = (e.data[h++] - c[1]) * l[1], o = (e.data[_++] - c[2]) * l[2], i = -1 === p ? 255 : (e.data[p++] - c[3]) * l[3];
					s.fillStyle = "rgba(" + r + "," + a + "," + o + "," + i + ")", s.fillRect(n, t, 1, 1);
				}
				if ("toDataURL" in n) return n.toDataURL();
				throw new Error("toDataURL is not supported");
			}
			throw new Error("Can not access image data");
		})(this, e);
	}
	toImageData(e) {
		return ((e, t) => {
			const n = "undefined" != typeof document ? document.createElement("canvas").getContext("2d") : new OffscreenCanvas(1, 1).getContext("2d");
			let s;
			if (null == n) throw new Error("Can not access image data");
			{
				let r, a, o;
				void 0 !== t?.tensorLayout && "NHWC" === t.tensorLayout ? (r = e.dims[2], a = e.dims[1], o = e.dims[3]) : (r = e.dims[3], a = e.dims[2], o = e.dims[1]);
				const i = void 0 !== t && void 0 !== t.format ? t.format : "RGB", l = t?.norm;
				let c, u;
				void 0 === l || void 0 === l.mean ? c = [
					255,
					255,
					255,
					255
				] : "number" == typeof l.mean ? c = [
					l.mean,
					l.mean,
					l.mean,
					l.mean
				] : (c = [
					l.mean[0],
					l.mean[1],
					l.mean[2],
					255
				], void 0 !== l.mean[3] && (c[3] = l.mean[3])), void 0 === l || void 0 === l.bias ? u = [
					0,
					0,
					0,
					0
				] : "number" == typeof l.bias ? u = [
					l.bias,
					l.bias,
					l.bias,
					l.bias
				] : (u = [
					l.bias[0],
					l.bias[1],
					l.bias[2],
					0
				], void 0 !== l.bias[3] && (u[3] = l.bias[3]));
				const d = a * r;
				if (void 0 !== t && (void 0 !== t.format && 4 === o && "RGBA" !== t.format || 3 === o && "RGB" !== t.format && "BGR" !== t.format)) throw new Error("Tensor format doesn't match input tensor dims");
				const h = 4;
				let _ = 0, p = 1, f = 2, m = 3, g = 0, w = d, y = 2 * d, b = -1;
				"RGBA" === i ? (g = 0, w = d, y = 2 * d, b = 3 * d) : "RGB" === i ? (g = 0, w = d, y = 2 * d) : "RBG" === i && (g = 0, y = d, w = 2 * d), s = n.createImageData(r, a);
				for (let t = 0; t < a * r; _ += h, p += h, f += h, m += h, t++) s.data[_] = (e.data[g++] - u[0]) * c[0], s.data[p] = (e.data[w++] - u[1]) * c[1], s.data[f] = (e.data[y++] - u[2]) * c[2], s.data[m] = -1 === b ? 255 : (e.data[b++] - u[3]) * c[3];
			}
			return s;
		})(this, e);
	}
	get data() {
		if (this.ensureValid(), !this.cpuData) throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");
		return this.cpuData;
	}
	get location() {
		return this.dataLocation;
	}
	get texture() {
		if (this.ensureValid(), !this.gpuTextureData) throw new Error("The data is not stored as a WebGL texture.");
		return this.gpuTextureData;
	}
	get gpuBuffer() {
		if (this.ensureValid(), !this.gpuBufferData) throw new Error("The data is not stored as a WebGPU buffer.");
		return this.gpuBufferData;
	}
	get mlTensor() {
		if (this.ensureValid(), !this.mlTensorData) throw new Error("The data is not stored as a WebNN MLTensor.");
		return this.mlTensorData;
	}
	async getData(e) {
		switch (this.ensureValid(), this.dataLocation) {
			case "cpu":
			case "cpu-pinned": return this.data;
			case "texture":
			case "gpu-buffer":
			case "ml-tensor":
				if (!this.downloader) throw new Error("The current tensor is not created with a specified data downloader.");
				if (this.isDownloading) throw new Error("The current tensor is being downloaded.");
				try {
					this.isDownloading = !0;
					const t = await this.downloader();
					return this.downloader = void 0, this.dataLocation = "cpu", this.cpuData = t, e && this.disposer && (this.disposer(), this.disposer = void 0), t;
				} finally {
					this.isDownloading = !1;
				}
			default: throw new Error(`cannot get data from location: ${this.dataLocation}`);
		}
	}
	dispose() {
		if (this.isDownloading) throw new Error("The current tensor is being downloaded.");
		this.disposer && (this.disposer(), this.disposer = void 0), this.cpuData = void 0, this.gpuTextureData = void 0, this.gpuBufferData = void 0, this.mlTensorData = void 0, this.downloader = void 0, this.isDownloading = void 0, this.dataLocation = "none";
	}
	ensureValid() {
		if ("none" === this.dataLocation) throw new Error("The tensor is disposed.");
	}
	reshape(e) {
		if (this.ensureValid(), this.downloader || this.disposer) throw new Error("Cannot reshape a tensor that owns GPU resource.");
		return ((e, t) => {
			switch (e.location) {
				case "cpu": return new Vn(e.type, e.data, t);
				case "cpu-pinned": return new Vn({
					location: "cpu-pinned",
					data: e.data,
					type: e.type,
					dims: t
				});
				case "texture": return new Vn({
					location: "texture",
					texture: e.texture,
					type: e.type,
					dims: t
				});
				case "gpu-buffer": return new Vn({
					location: "gpu-buffer",
					gpuBuffer: e.gpuBuffer,
					type: e.type,
					dims: t
				});
				case "ml-tensor": return new Vn({
					location: "ml-tensor",
					mlTensor: e.mlTensor,
					type: e.type,
					dims: t
				});
				default: throw new Error(`tensorReshape: tensor location ${e.location} is not supported`);
			}
		})(this, e);
	}
};
const jn = Vn;
var qn = Object.defineProperty, Wn = (e, t) => {
	for (var n in t) qn(e, n, {
		get: t[n],
		enumerable: !0
	});
}, Hn = {}, Qn = {}, Xn = "undefined" != typeof self, Jn = !vs(Hn), Yn = !vs(Qn), Kn = Xn && "caches" in self, Zn = void 0 !== globalThis.Deno;
globalThis.Bun;
var es = Zn && Kn && !Jn, ts = "undefined" != typeof process, ns = ts && "node" === process?.release?.name && !es, ss = "undefined" != typeof window && void 0 !== window.document, rs = Xn && [
	"DedicatedWorkerGlobalScope",
	"ServiceWorkerGlobalScope",
	"SharedWorkerGlobalScope"
].includes(self.constructor?.name), as = ss || rs || es, os = ns || "undefined" != typeof navigator && "gpu" in navigator, is = "undefined" != typeof navigator && "ml" in navigator, ls = "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues, cs = "undefined" != typeof chrome && void 0 !== chrome.runtime && "string" == typeof chrome.runtime.id, us = "undefined" != typeof ServiceWorkerGlobalScope && Xn && self instanceof ServiceWorkerGlobalScope, ds = (() => {
	if ("undefined" == typeof navigator) return !1;
	const e = navigator.userAgent, t = (navigator.vendor || "").indexOf("Apple") > -1, n = !e.match(/CriOS|FxiOS|EdgiOS|OPiOS|mercury|brave/i) && !e.includes("Chrome") && !e.includes("Android");
	return t && n;
})(), hs = Object.freeze({
	IS_BROWSER_ENV: ss,
	IS_WEBWORKER_ENV: rs,
	IS_WEB_ENV: as,
	IS_SERVICE_WORKER_ENV: us,
	IS_DENO_WEB_RUNTIME: es,
	IS_WEB_CACHE_AVAILABLE: Kn,
	IS_WEBGPU_AVAILABLE: os,
	IS_WEBNN_AVAILABLE: is,
	IS_SAFARI: ds,
	IS_PROCESS_AVAILABLE: ts,
	IS_NODE_ENV: ns,
	IS_FS_AVAILABLE: Jn,
	IS_PATH_AVAILABLE: Yn,
	IS_CRYPTO_AVAILABLE: ls,
	IS_CHROME_AVAILABLE: cs
}), _s = Jn && Yn, ps = "./";
if (_s) {
	const e = Object(import.meta).url;
	e ? ps = Qn.dirname(Qn.dirname({}.fileURLToPath(e))) : "undefined" != typeof __dirname && (ps = Qn.dirname(__dirname));
}
var fs = _s ? Qn.join(ps, "/.cache/") : null, ms = "/models/", gs = _s ? Qn.join(ps, ms) : ms, ws = "function" == typeof globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0, ys = Object.freeze({
	DEBUG: 10,
	INFO: 20,
	WARNING: 30,
	ERROR: 40,
	NONE: 50
}), bs = ys.WARNING, xs = {
	version: "4.2.0",
	backends: { onnx: {} },
	get logLevel() {
		return bs;
	},
	set logLevel(e) {
		bs = e, xs.backends.onnx?.setLogLevel?.(e);
	},
	allowRemoteModels: !0,
	remoteHost: "https://huggingface.co/",
	remotePathTemplate: "{model}/resolve/{revision}/",
	allowLocalModels: !(ss || rs || es),
	localModelPath: gs,
	useFS: Jn,
	useBrowserCache: Kn,
	useFSCache: Jn,
	cacheDir: fs,
	useCustomCache: !1,
	customCache: null,
	useWasmCache: Kn || Jn,
	cacheKey: "transformers-cache",
	experimental_useCrossOriginStorage: !1,
	fetch: ws
};
function vs(e) {
	return 0 === Object.keys(e).length;
}
var Ms = class {
	constructor() {
		let e = function(...t) {
			return e._call(...t);
		};
		return Object.setPrototypeOf(e, new.target.prototype);
	}
	_call(...e) {
		throw Error("Must implement _call method in subclass");
	}
};
function ks(e, t) {
	e && e(t);
}
var Es = class extends Ms {
	constructor(e, t) {
		super(), this.callback = e, this.files_loading = t;
	}
	_call(e) {
		if ("progress" === e.status) {
			this.files_loading[e.file] = {
				loaded: e.loaded,
				total: e.total
			};
			const t = Object.values(this.files_loading).reduce((e, t) => e + t.loaded, 0), n = Object.values(this.files_loading).reduce((e, t) => e + t.total, 0), s = n > 0 ? t / n * 100 : 0;
			this.callback({
				status: "progress_total",
				name: e.name,
				progress: s,
				loaded: t,
				total: n,
				files: structuredClone(this.files_loading)
			});
		}
		this.callback(e);
	}
};
function As(e) {
	return null == e || -1 === e;
}
function Cs(e) {
	const t = [];
	let n = e;
	for (; Array.isArray(n);) t.push(n.length), n = n[0];
	return t;
}
function Ts(...e) {
	return Array.prototype.concat.apply([], e);
}
function Ss(...e) {
	return e.reduce((e, t) => e.flatMap((e) => t.map((t) => [e, t])));
}
function Fs(e, t) {
	return Math.abs((e + t) % (2 * t) - t);
}
function Is(e, t) {
	return Object.assign({}, ...t.map((t) => {
		if (void 0 !== e[t]) return { [t]: e[t] };
	}));
}
function Ps(e, t) {
	let n = 0;
	for (const s of e) s === t && ++n;
	return n;
}
var Ls, Os = {
	error(...e) {
		xs.logLevel, ys.ERROR;
	},
	warn(...e) {
		xs.logLevel, ys.WARNING;
	},
	info(...e) {
		xs.logLevel, ys.INFO;
	},
	debug(...e) {
		xs.logLevel, ys.DEBUG;
	},
	log(...e) {
		this.info(...e);
	}
}, zs = class {
	constructor(e) {
		this.trie = this._build_trie(e);
	}
	_build_trie(e) {
		const t = Object.create(null);
		for (const n of e) {
			let e = t;
			for (let t = 0; t < n.length; ++t) {
				const s = n[t];
				e = e[s] ??= Object.create(null);
			}
			e.end = n;
		}
		return t;
	}
	split(e) {
		const t = [], n = e.length;
		let s = 0, r = 0;
		for (; r < n;) {
			let a = this.trie, o = null, i = r;
			for (; i < n && (a = a[e[i]]);) a.end && (o = a.end), ++i;
			o ? (r > s && t.push(e.slice(s, r)), t.push(o), r += o.length, s = r) : ++r;
		}
		return s < n && t.push(e.slice(s)), t;
	}
}, Ns = class {
	constructor(e) {
		this.content = e.content, this.id = e.id, this.single_word = e.single_word ?? !1, this.lstrip = e.lstrip ?? !1, this.rstrip = e.rstrip ?? !1, this.special = e.special ?? !1, this.normalized = e.normalized ?? !this.special;
	}
}, Bs = (() => {
	const e = [
		...Array.from({ length: "~".charCodeAt(0) - "!".charCodeAt(0) + 1 }, (e, t) => t + "!".charCodeAt(0)),
		...Array.from({ length: "¬".charCodeAt(0) - "¡".charCodeAt(0) + 1 }, (e, t) => t + "¡".charCodeAt(0)),
		...Array.from({ length: "ÿ".charCodeAt(0) - "®".charCodeAt(0) + 1 }, (e, t) => t + "®".charCodeAt(0))
	], t = e.slice();
	let n = 0;
	for (let r = 0; r < 256; ++r) e.includes(r) || (e.push(r), t.push(256 + n), n += 1);
	const s = t.map((e) => String.fromCharCode(e));
	return Object.fromEntries(e.map((e, t) => [e, s[t]]));
})(), $s = (Ls = Bs, Object.fromEntries(Object.entries(Ls).map(([e, t]) => [t, e]))), Ds = ".,!?…。，、।۔،", Rs = new Map([
	["(?i:'s|'t|'re|'ve|'m|'ll|'d)", "(?:'([sS]|[tT]|[rR][eE]|[vV][eE]|[mM]|[lL][lL]|[dD]))"],
	["(?i:[sdmt]|ll|ve|re)", "(?:[sS]|[dD]|[mM]|[tT]|[lL][lL]|[vV][eE]|[rR][eE])"],
	["[^\\r\\n\\p{L}\\p{N}]?+", "[^\\r\\n\\p{L}\\p{N}]?"],
	["[^\\s\\p{L}\\p{N}]++", "[^\\s\\p{L}\\p{N}]+"],
	["(?>\\p{Nd}{510})", "(?:\\p{Nd}{510})"],
	["\\p{Nd}{3}+", "(?:\\p{Nd}{3})+"],
	["\\G", ""],
	[` ?[^(\\s|[${Ds}])]+`, ` ?[^\\s${Ds}]+`]
]), Gs = "\\p{P}\\u0021-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E", Us = (e) => e.replace(/ \./g, ".").replace(/ \?/g, "?").replace(/ \!/g, "!").replace(/ ,/g, ",").replace(/ \' /g, "'").replace(/ n't/g, "n't").replace(/ 'm/g, "'m").replace(/ 's/g, "'s").replace(/ 've/g, "'ve").replace(/ 're/g, "'re"), Vs = (e, t = !0) => {
	if (void 0 === e.Regex) {
		if (void 0 !== e.String) {
			const n = js(e.String);
			return new RegExp(t ? n : `(${n})`, "gu");
		}
		return null;
	}
	{
		let t = e.Regex.replace(/\\([#&~])/g, "$1");
		t = t.replace(/\\A/g, "^").replace(/\\z/g, "$").replace(/\\Z/g, "(?=\\r?\\n?$)");
		for (const [e, n] of Rs) t = t.replaceAll(e, n);
		try {
			return new RegExp(t, "gu");
		} catch (n) {
			if (!(n instanceof SyntaxError && n.message.toLowerCase().includes("invalid property name"))) throw n;
			let e = !1;
			const r = t.replace(/(\\[pP])\{([^}=]+)\}/g, (t, n, s) => {
				try {
					return new RegExp(`\\p{${s}}`, "u"), `${n}{${s}}`;
				} catch {
					return e = !0, `${n}{Script=${s}}`;
				}
			});
			if (!e) throw n;
			try {
				return new RegExp(r, "gu");
			} catch (s) {
				throw n;
			}
		}
	}
}, js = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), qs = (e) => e >= 19968 && e <= 40959 || e >= 13312 && e <= 19903 || e >= 131072 && e <= 173791 || e >= 173824 && e <= 177983 || e >= 177984 && e <= 178207 || e >= 178208 && e <= 183983 || e >= 63744 && e <= 64255 || e >= 194560 && e <= 195103, Ws = (e) => {
	let t = 0;
	for (const n of e) ++t;
	return t;
}, Hs = (...e) => Array.prototype.concat.apply([], e), Qs = (e) => new Map(Object.entries(e)), Xs = (e) => e.replace(/\p{M}/gu, ""), Js = (e, t, n = []) => {
	if (!e || Array.isArray(e) || "object" != typeof e) return `${t} must be a valid object`;
	for (const s of n) if (!(s in e)) return `${t} must contain a "${s}" property`;
	return null;
}, Ys = class {
	constructor() {
		const e = function(...t) {
			return e._call(...t);
		};
		return Object.setPrototypeOf(e, new.target.prototype);
	}
}, Ks = class extends Ys {
	constructor(e) {
		super(), this.config = e;
	}
	_call(e) {
		return this.normalize(e);
	}
}, Zs = class extends Ks {
	tokenize_chinese_chars(e) {
		const t = [];
		for (let n = 0; n < e.length; ++n) {
			const s = e[n];
			qs(s.charCodeAt(0)) ? (t.push(" "), t.push(s), t.push(" ")) : t.push(s);
		}
		return t.join("");
	}
	strip_accents(e) {
		return e.normalize("NFD").replace(/\p{Mn}/gu, "");
	}
	is_control(e) {
		switch (e) {
			case "	":
			case "\n":
			case "\r": return !1;
			default: return /^\p{Cc}|\p{Cf}|\p{Co}|\p{Cs}$/u.test(e);
		}
	}
	clean_text(e) {
		const t = [];
		for (const n of e) {
			const e = n.charCodeAt(0);
			0 === e || 65533 === e || this.is_control(n) || (/^\s$/.test(n) ? t.push(" ") : t.push(n));
		}
		return t.join("");
	}
	normalize(e) {
		return this.config.clean_text && (e = this.clean_text(e)), this.config.handle_chinese_chars && (e = this.tokenize_chinese_chars(e)), this.config.lowercase ? (e = e.toLowerCase(), !1 !== this.config.strip_accents && (e = this.strip_accents(e))) : this.config.strip_accents && (e = this.strip_accents(e)), e;
	}
}, er = class extends Ks {
	constructor(e) {
		super(e), this.charsmap = e.precompiled_charsmap ?? null;
	}
	normalize(e) {
		return e = (e = (e = e.replace(/[\u0001-\u0008\u000B\u000E-\u001F\u007F\u008F\u009F]/gm, "")).replace(/[\u0009\u000A\u000C\u000D\u00A0\u1680\u2000-\u200F\u2028\u2029\u202F\u205F\u2581\u3000\uFEFF\uFFFD]/gm, " ")).includes("～") ? e.split("～").map((e) => e.normalize("NFKC")).join("～") : e.normalize("NFKC");
	}
}, tr = class extends Ks {
	constructor(e) {
		super(e), this.normalizers = (e.normalizers ?? []).map((e) => hr(e));
	}
	normalize(e) {
		return this.normalizers.reduce((e, t) => t ? t.normalize(e) : e, e);
	}
}, nr = class extends Ks {
	normalize(e) {
		const t = Vs(this.config.pattern ?? {});
		return null === t ? e : e.replaceAll(t, this.config.content ?? "");
	}
}, sr = class extends Ks {
	constructor() {
		super(...arguments), this.form = "NFC";
	}
	normalize(e) {
		return e = e.normalize(this.form);
	}
}, rr = class extends sr {
	constructor() {
		super(...arguments), this.form = "NFC";
	}
}, ar = class extends sr {
	constructor() {
		super(...arguments), this.form = "NFD";
	}
}, or = class extends sr {
	constructor() {
		super(...arguments), this.form = "NFKC";
	}
}, ir = class extends sr {
	constructor() {
		super(...arguments), this.form = "NFKD";
	}
}, lr = class extends Ks {
	normalize(e) {
		return this.config.strip_left && this.config.strip_right ? e = e.trim() : (this.config.strip_left && (e = e.trimStart()), this.config.strip_right && (e = e.trimEnd())), e;
	}
}, cr = class extends Ks {
	normalize(e) {
		return Xs(e);
	}
}, ur = class extends Ks {
	normalize(e) {
		return e.toLowerCase();
	}
}, dr = class extends Ks {
	normalize(e) {
		return e = this.config.prepend + e;
	}
};
var hr = function(e) {
	if (null === e) return null;
	switch (e.type) {
		case "BertNormalizer": return new Zs(e);
		case "Precompiled": return new er(e);
		case "Sequence": return new tr(e);
		case "Replace": return new nr(e);
		case "NFC": return new rr(e);
		case "NFD": return new ar(e);
		case "NFKC": return new or(e);
		case "NFKD": return new ir(e);
		case "Strip": return new lr(e);
		case "StripAccents": return new cr(e);
		case "Lowercase": return new ur(e);
		case "Prepend": return new dr(e);
		default: throw new Error(`Unknown Normalizer type: ${e.type}`);
	}
}, _r = class extends Ys {
	pre_tokenize(e, t) {
		return (Array.isArray(e) ? e.map((e) => this.pre_tokenize_text(e, t)) : this.pre_tokenize_text(e, t)).flat();
	}
	_call(e, t) {
		return this.pre_tokenize(e, t);
	}
}, pr = class extends _r {
	constructor(e) {
		super(), this.config = e, this.add_prefix_space = this.config.add_prefix_space ?? !1, this.trim_offsets = this.config.trim_offsets ?? !1, this.use_regex = this.config.use_regex ?? !0, this.pattern = /'s|'t|'re|'ve|'m|'ll|'d| ?\p{L}+| ?\p{N}+| ?[^\s\p{L}\p{N}]+|\s+(?!\S)|\s+/gu, this.byte_encoder = Bs, this.text_encoder = new TextEncoder();
	}
	pre_tokenize_text(e, t) {
		return this.add_prefix_space && !e.startsWith(" ") && (e = " " + e), (this.use_regex ? e.match(this.pattern) || [] : [e]).map((e) => Array.from(this.text_encoder.encode(e), (e) => this.byte_encoder[e]).join(""));
	}
}, fr = class extends _r {
	pre_tokenize_text(e, t) {
		return e.match(/\w+|[^\w\s]+/g) || [];
	}
}, mr = class extends _r {
	constructor(e) {
		super(), this.replacement = e.replacement ?? "▁", this.str_rep = e.str_rep || this.replacement, this.prepend_scheme = e.prepend_scheme ?? "always";
	}
	pre_tokenize_text(e, t) {
		const { section_index: n } = t ?? {};
		let s = e.replaceAll(" ", this.str_rep);
		return s.startsWith(this.replacement) || "always" !== this.prepend_scheme && ("first" !== this.prepend_scheme || 0 !== n) || (s = this.str_rep + s), [s];
	}
}, gr = class extends _r {
	constructor(e) {
		super(), this.config = e, this.pattern = Vs(this.config.pattern ?? {}, this.config.invert ?? !0);
	}
	pre_tokenize_text(e) {
		return null === this.pattern ? [] : this.config.invert ? e.match(this.pattern) || [] : "removed" === this.config.behavior?.toLowerCase() ? e.split(this.pattern).filter((e) => e) : ((e, t) => {
			const n = [];
			let s = 0;
			for (const r of e.matchAll(t)) {
				const t = r[0];
				s < r.index && n.push(e.slice(s, r.index)), t.length > 0 && n.push(t), s = r.index + t.length;
			}
			return s < e.length && n.push(e.slice(s)), n;
		})(e, this.pattern);
	}
}, wr = class extends _r {
	constructor(e) {
		super(), this.config = e, this.pattern = new RegExp(`[^${Gs}]+|[${Gs}]+`, "gu");
	}
	pre_tokenize_text(e) {
		return e.match(this.pattern) || [];
	}
}, yr = class extends _r {
	constructor(e) {
		super(), this.config = e;
		const t = "[^\\d]+|\\d" + (this.config.individual_digits ? "" : "+");
		this.pattern = new RegExp(t, "gu");
	}
	pre_tokenize_text(e) {
		return e.match(this.pattern) || [];
	}
}, br = class extends _r {
	constructor() {
		super(), this.pattern = new RegExp(`[^\\s${Gs}]+|[${Gs}]`, "gu");
	}
	pre_tokenize_text(e, t) {
		return e.trim().match(this.pattern) || [];
	}
}, xr = class extends _r {
	constructor(e) {
		super(), this.config = e, this.pattern = Vs(this.config.pattern ?? {}), this.content = this.config.content ?? "";
	}
	pre_tokenize_text(e) {
		return null === this.pattern ? [e] : [e.replaceAll(this.pattern, this.config.content ?? "")];
	}
}, vr = class extends _r {
	constructor(e) {
		super(), this.tokenizers = (e.pretokenizers ?? []).map((e) => Er(e));
	}
	pre_tokenize_text(e, t) {
		return this.tokenizers.reduce((e, n) => n ? n.pre_tokenize(e, t) : e, [e]);
	}
}, Mr = class extends _r {
	pre_tokenize_text(e) {
		return ((e) => e.match(/\S+/g) || [])(e);
	}
}, kr = class extends _r {
	constructor(e) {
		super(), this.config = e, this._length = e.length;
	}
	pre_tokenize_text(e) {
		const t = [];
		for (let n = 0; n < e.length; n += this._length) t.push(e.slice(n, n + this._length));
		return t;
	}
};
var Er = function(e) {
	if (null === e) return null;
	switch (e.type) {
		case "BertPreTokenizer": return new br();
		case "Sequence": return new vr(e);
		case "Whitespace": return new fr();
		case "WhitespaceSplit": return new Mr();
		case "Metaspace": return new mr(e);
		case "ByteLevel": return new pr(e);
		case "Split": return new gr(e);
		case "Punctuation": return new wr(e);
		case "Digits": return new yr(e);
		case "Replace": return new xr(e);
		case "FixedLength": return new kr(e);
		default: throw new Error(`Unknown PreTokenizer type: ${e.type}`);
	}
}, Ar = class extends Ys {
	constructor(e) {
		super(), this.config = e, this.vocab = [], this.tokens_to_ids = /* @__PURE__ */ new Map(), this.unk_token_id = void 0, this.unk_token = void 0, this.end_of_word_suffix = void 0, this.fuse_unk = this.config.fuse_unk ?? !1;
	}
	_call(e) {
		let t = this.encode(e);
		return this.fuse_unk && (t = ((e, t, n) => {
			const s = [];
			let r = 0;
			for (; r < e.length;) if (s.push(e[r]), (t.get(e[r]) ?? n) === n) for (; ++r < e.length && (t.get(e[r]) ?? n) === n;) t.get(s.at(-1)) !== n && (s[s.length - 1] += e[r]);
			else ++r;
			return s;
		})(t, this.tokens_to_ids, this.unk_token_id)), t;
	}
}, Cr = class extends Ar {
	constructor(e) {
		super(e), this.max_input_chars_per_word = 100, this.tokens_to_ids = Qs(e.vocab), this.unk_token_id = this.tokens_to_ids.get(e.unk_token), this.unk_token = e.unk_token, this.max_input_chars_per_word = e.max_input_chars_per_word ?? 100, this.vocab = new Array(this.tokens_to_ids.size);
		for (const [t, n] of this.tokens_to_ids) this.vocab[n] = t;
	}
	encode(e) {
		const t = [];
		for (const n of e) {
			const e = [...n];
			if (e.length > this.max_input_chars_per_word) {
				t.push(this.unk_token);
				continue;
			}
			let s = !1, r = 0;
			const a = [];
			for (; r < e.length;) {
				let t = e.length, n = null;
				for (; r < t;) {
					let s = e.slice(r, t).join("");
					if (r > 0 && (s = this.config.continuing_subword_prefix + s), this.tokens_to_ids.has(s)) {
						n = s;
						break;
					}
					--t;
				}
				if (null === n) {
					s = !0;
					break;
				}
				a.push(n), r = t;
			}
			s ? t.push(this.unk_token) : t.push(...a);
		}
		return t;
	}
}, Tr = class e {
	constructor(e, t) {
		this.is_leaf = e, this.children = t;
	}
	static default() {
		return new e(!1, /* @__PURE__ */ new Map());
	}
}, Sr = class {
	constructor() {
		this.root = Tr.default();
	}
	extend(e) {
		for (const t of e) this.push(t);
	}
	push(e) {
		let t = this.root;
		for (const n of e) {
			let e = t.children.get(n);
			void 0 === e && (e = Tr.default(), t.children.set(n, e)), t = e;
		}
		t.is_leaf = !0;
	}
	*common_prefix_search(e) {
		let t = this.root;
		if (void 0 === t) return;
		let n = "";
		for (const s of e) {
			if (n += s, t = t.children.get(s), void 0 === t) return;
			t.is_leaf && (yield n);
		}
	}
}, Fr = class e {
	constructor(e, t, n, s, r) {
		this.token_id = e, this.node_id = t, this.pos = n, this.length = s, this.score = r, this.prev = null, this.backtrace_score = 0;
	}
	clone() {
		const t = new e(this.token_id, this.node_id, this.pos, this.length, this.score);
		return t.prev = this.prev, t.backtrace_score = this.backtrace_score, t;
	}
}, Ir = class {
	constructor(e, t, n) {
		this.chars = Array.from(e), this.len = this.chars.length, this.bos_token_id = t, this.eos_token_id = n, this.nodes = [], this.begin_nodes = Array.from({ length: this.len + 1 }, () => []), this.end_nodes = Array.from({ length: this.len + 1 }, () => []);
		const s = new Fr(this.bos_token_id ?? 0, 0, 0, 0, 0), r = new Fr(this.eos_token_id ?? 0, 1, this.len, 0, 0);
		this.nodes.push(s.clone()), this.nodes.push(r.clone()), this.begin_nodes[this.len].push(r), this.end_nodes[0].push(s);
	}
	insert(e, t, n, s) {
		const r = this.nodes.length, a = new Fr(s, r, e, t, n);
		this.begin_nodes[e].push(a), this.end_nodes[e + t].push(a), this.nodes.push(a);
	}
	viterbi() {
		const e = this.len;
		let t = 0;
		for (; t <= e;) {
			if (0 == this.begin_nodes[t].length) return [];
			for (let e of this.begin_nodes[t]) {
				e.prev = null;
				let n = 0, s = null;
				for (let r of this.end_nodes[t]) {
					const t = r.backtrace_score + e.score;
					(null === s || t > n) && (s = r.clone(), n = t);
				}
				if (null === s) return [];
				e.prev = s, e.backtrace_score = n;
			}
			++t;
		}
		const n = [], s = this.begin_nodes[e][0].prev;
		if (null === s) return [];
		let r = s.clone();
		for (; null !== r.prev;) n.push(r.clone()), r = r.clone().prev.clone();
		return n.reverse(), n;
	}
	piece(e) {
		return this.chars.slice(e.pos, e.pos + e.length).join("");
	}
	tokens() {
		return this.viterbi().map((e) => this.piece(e));
	}
	token_ids() {
		return this.viterbi().map((e) => e.token_id);
	}
};
var Pr = class extends Ar {
	constructor(e, t) {
		super(e);
		const n = e.vocab.length;
		this.vocab = new Array(n), this.scores = new Array(n);
		for (let s = 0; s < n; ++s) [this.vocab[s], this.scores[s]] = e.vocab[s];
		this.unk_token_id = e.unk_id, this.unk_token = this.vocab[e.unk_id], this.tokens_to_ids = new Map(this.vocab.map((e, t) => [e, t])), this.bos_token = " ", this.bos_token_id = this.tokens_to_ids.get(this.bos_token), this.eos_token = t, this.eos_token_id = this.tokens_to_ids.get(this.eos_token), this.unk_token = this.vocab[this.unk_token_id], this.min_score = function(e) {
			if (0 === e.length) throw new Error("Array must not be empty");
			let t = e[0], n = 0;
			for (let s = 1; s < e.length; ++s) e[s] < t && (t = e[s], n = s);
			return [t, n];
		}(this.scores)[0], this.unk_score = this.min_score - 10, this.scores[this.unk_token_id] = this.unk_score, this.trie = new Sr(), this.trie.extend(this.vocab), this.fuse_unk = !0;
	}
	populate_nodes(e) {
		const t = e.chars;
		let n = 0;
		for (; n < t.length;) {
			let s = !1;
			const r = [], a = t.slice(n).join(""), o = this.trie.common_prefix_search(a);
			for (const t of o) {
				r.push(t);
				const a = this.tokens_to_ids.get(t), o = this.scores[a], i = Ws(t);
				e.insert(n, i, o, a), s || 1 !== i || (s = !0);
			}
			s || e.insert(n, 1, this.unk_score, this.unk_token_id), n += 1;
		}
	}
	tokenize(e) {
		const t = new Ir(e, this.bos_token_id, this.eos_token_id);
		return this.populate_nodes(t), t.tokens();
	}
	encode(e) {
		const t = [];
		for (const n of e) {
			const e = this.tokenize(n);
			t.push(...e);
		}
		return t;
	}
}, Lr = class {
	constructor(e = (e, t) => e > t, t = Infinity) {
		this._heap = [], this._comparator = e, this._max_size = t;
	}
	get size() {
		return this._heap.length;
	}
	is_empty() {
		return 0 === this.size;
	}
	peek() {
		return this._heap[0];
	}
	push(...e) {
		return this.extend(e);
	}
	extend(e) {
		for (const t of e) if (this.size < this._max_size) this._heap.push(t), this._sift_up();
		else {
			const e = this._smallest();
			this._comparator(t, this._heap[e]) && (this._heap[e] = t, this._sift_up_from(e));
		}
		return this.size;
	}
	pop() {
		const e = this.peek(), t = this.size - 1;
		return t > 0 && this._swap(0, t), this._heap.pop(), this._sift_down(), e;
	}
	replace(e) {
		const t = this.peek();
		return this._heap[0] = e, this._sift_down(), t;
	}
	_parent(e) {
		return (e + 1 >>> 1) - 1;
	}
	_left(e) {
		return 1 + (e << 1);
	}
	_right(e) {
		return e + 1 << 1;
	}
	_greater(e, t) {
		return this._comparator(this._heap[e], this._heap[t]);
	}
	_swap(e, t) {
		const n = this._heap[e];
		this._heap[e] = this._heap[t], this._heap[t] = n;
	}
	_sift_up() {
		this._sift_up_from(this.size - 1);
	}
	_sift_up_from(e) {
		for (; e > 0 && this._greater(e, this._parent(e));) this._swap(e, this._parent(e)), e = this._parent(e);
	}
	_sift_down() {
		let e = 0;
		for (; this._left(e) < this.size && this._greater(this._left(e), e) || this._right(e) < this.size && this._greater(this._right(e), e);) {
			const t = this._right(e) < this.size && this._greater(this._right(e), this._left(e)) ? this._right(e) : this._left(e);
			this._swap(e, t), e = t;
		}
	}
	_smallest() {
		return 2 ** Math.floor(Math.log2(this.size)) - 1;
	}
}, Or = class {
	constructor(e) {
		this.capacity = e, this.cache = /* @__PURE__ */ new Map();
	}
	get(e) {
		if (!this.cache.has(e)) return;
		const t = this.cache.get(e);
		return this.cache.delete(e), this.cache.set(e, t), t;
	}
	put(e, t) {
		this.cache.has(e) && this.cache.delete(e), this.cache.set(e, t), this.cache.size > this.capacity && this.cache.delete(this.cache.keys().next().value);
	}
	clear() {
		this.cache.clear();
	}
}, zr = class extends Ar {
	constructor(e) {
		super(e), this.tokens_to_ids = Qs(e.vocab), this.unk_token_id = this.tokens_to_ids.get(e.unk_token), this.unk_token = e.unk_token, this.vocab = new Array(this.tokens_to_ids.size);
		for (const [n, s] of this.tokens_to_ids) this.vocab[s] = n;
		const t = Array.isArray(e.merges[0]);
		this.merges = t ? e.merges : e.merges.map((e) => e.split(" ", 2)), this.bpe_ranks = new Map(this.merges.map((e, t) => [JSON.stringify(e), t])), this.end_of_word_suffix = e.end_of_word_suffix, this.continuing_subword_suffix = e.continuing_subword_suffix ?? null, this.byte_fallback = this.config.byte_fallback ?? !1, this.byte_fallback && (this.text_encoder = new TextEncoder()), this.ignore_merges = this.config.ignore_merges ?? !1, this.max_length_to_cache = 256, this.cache_capacity = 1e4, this.cache = new Or(this.cache_capacity);
	}
	clear_cache() {
		this.cache.clear();
	}
	bpe(e) {
		if (0 === e.length) return [];
		const t = this.cache.get(e);
		if (void 0 !== t) return t;
		const n = Array.from(e);
		this.end_of_word_suffix && (n[n.length - 1] += this.end_of_word_suffix);
		let s = [];
		if (n.length > 1) {
			const e = new Lr((e, t) => e.score < t.score);
			let t = {
				token: n[0],
				bias: 0,
				prev: null,
				next: null
			}, r = t;
			for (let s = 1; s < n.length; ++s) {
				const t = {
					bias: s / n.length,
					token: n[s],
					prev: r,
					next: null
				};
				r.next = t, this.add_node(e, r), r = t;
			}
			for (; !e.is_empty();) {
				const n = e.pop();
				if (n.deleted || !n.next || n.next.deleted) continue;
				if (n.deleted = !0, n.next.deleted = !0, n.prev) {
					const e = { ...n.prev };
					n.prev.deleted = !0, n.prev = e, e.prev ? e.prev.next = e : t = e;
				}
				const s = {
					token: n.token + n.next.token,
					bias: n.bias,
					prev: n.prev,
					next: n.next.next
				};
				s.prev ? (s.prev.next = s, this.add_node(e, s.prev)) : t = s, s.next && (s.next.prev = s, this.add_node(e, s));
			}
			for (let n = t; null !== n; n = n.next) s.push(n.token);
		} else s = n;
		if (this.continuing_subword_suffix) for (let r = 0; r < s.length - 1; ++r) s[r] += this.continuing_subword_suffix;
		return e.length < this.max_length_to_cache && this.cache.put(e, s), s;
	}
	add_node(e, t) {
		const n = this.bpe_ranks.get(JSON.stringify([t.token, t.next.token]));
		void 0 !== n && (t.score = n + t.bias, e.push(t));
	}
	encode(e) {
		const t = [];
		for (const n of e) {
			if (this.ignore_merges && this.tokens_to_ids.has(n)) {
				t.push(n);
				continue;
			}
			const e = this.bpe(n);
			for (const n of e) if (this.tokens_to_ids.has(n)) t.push(n);
			else if (this.byte_fallback) {
				const e = Array.from(this.text_encoder.encode(n)).map((e) => `<0x${e.toString(16).toUpperCase().padStart(2, "0")}>`);
				e.every((e) => this.tokens_to_ids.has(e)) ? t.push(...e) : null != this.unk_token && t.push(this.unk_token);
			} else null != this.unk_token && t.push(this.unk_token);
		}
		return t;
	}
}, Nr = class extends Ar {
	constructor(e, t) {
		super(e);
		const n = e.vocab;
		this.tokens_to_ids = Qs(t.target_lang ? n[t.target_lang] : n), this.bos_token = t.bos_token, this.bos_token_id = this.tokens_to_ids.get(this.bos_token), this.eos_token = t.eos_token, this.eos_token_id = this.tokens_to_ids.get(this.eos_token), this.pad_token = t.pad_token, this.pad_token_id = this.tokens_to_ids.get(this.pad_token), this.unk_token = t.unk_token, this.unk_token_id = this.tokens_to_ids.get(this.unk_token), this.vocab = new Array(this.tokens_to_ids.size);
		for (const [s, r] of this.tokens_to_ids) this.vocab[r] = s;
	}
	encode(e) {
		return e;
	}
};
var Br = function(e, t) {
	switch (e.type) {
		case "WordPiece": return new Cr(e);
		case "Unigram": return new Pr(e, t.eos_token);
		case "BPE": return new zr(e);
		default:
			if (e.vocab) return Array.isArray(e.vocab) ? new Pr(e, t.eos_token) : Object.hasOwn(e, "continuing_subword_prefix") && Object.hasOwn(e, "unk_token") ? Object.hasOwn(e, "merges") ? new zr(e) : new Cr(e) : new Nr(e, {
				target_lang: t.target_lang,
				bos_token: t.bos_token,
				eos_token: t.eos_token,
				pad_token: t.pad_token,
				unk_token: t.unk_token
			});
			throw new Error(`Unknown TokenizerModel type: ${e?.type}`);
	}
}, $r = class extends Ys {
	constructor(e) {
		super(), this.config = e;
	}
	_call(e, ...t) {
		return this.post_process(e, ...t);
	}
}, Dr = class extends $r {
	post_process(e, t = null, n = !0) {
		const s = null === t ? this.config.single : this.config.pair;
		let r = [], a = [];
		for (const o of s) "SpecialToken" in o ? n && (r.push(o.SpecialToken.id), a.push(o.SpecialToken.type_id)) : "Sequence" in o && ("A" === o.Sequence.id ? (r = Hs(r, e), a = Hs(a, new Array(e.length).fill(o.Sequence.type_id))) : "B" === o.Sequence.id && (r = Hs(r, t), a = Hs(a, new Array(t.length).fill(o.Sequence.type_id))));
		return {
			tokens: r,
			token_type_ids: a
		};
	}
}, Rr = class extends $r {
	post_process(e, t = null) {
		return {
			tokens: e,
			tokens_pair: t
		};
	}
}, Gr = class extends $r {
	constructor(e) {
		super(e), this.sep = e.sep, this.cls = e.cls;
	}
	post_process(e, t = null, n = !0) {
		n && (e = Hs([this.cls[0]], e, [this.sep[0]]));
		let s = new Array(e.length).fill(0);
		if (t) {
			const r = [], a = n ? [this.sep[0]] : [];
			e = Hs(e, r, t, a), s = Hs(s, new Array(t.length + r.length + a.length).fill(1));
		}
		return {
			tokens: e,
			token_type_ids: s
		};
	}
}, Ur = class extends $r {
	constructor(e) {
		super(e), this.sep = e.sep, this.cls = e.cls;
	}
	post_process(e, t, n = !0) {
		n && (e = Hs([this.cls[0]], e, [this.sep[0]]));
		let s = new Array(e.length).fill(0);
		if (t) {
			const r = n ? [this.sep[0]] : [], a = n ? [this.sep[0]] : [];
			e = Hs(e, r, t, a), s = Hs(s, new Array(t.length + r.length + a.length).fill(1));
		}
		return {
			tokens: e,
			token_type_ids: s
		};
	}
}, Vr = class extends $r {
	constructor(e) {
		super(e), this.processors = (e.processors ?? []).map((e) => jr(e));
	}
	post_process(e, t = null, n = !0) {
		let s = {
			tokens: e,
			tokens_pair: t
		};
		for (const r of this.processors) s = r.post_process(s.tokens, s.tokens_pair, n);
		return s;
	}
};
var jr = function(e) {
	if (null === e) return null;
	switch (e.type) {
		case "TemplateProcessing": return new Dr(e);
		case "ByteLevel": return new Rr(e);
		case "BertProcessing": return new Gr(e);
		case "RobertaProcessing": return new Ur(e);
		case "Sequence": return new Vr(e);
		default: throw new Error(`Unknown PostProcessor type: ${e.type}`);
	}
}, qr = class extends Ys {
	constructor(e) {
		super(), this.config = e, this.added_tokens = [], this.end_of_word_suffix = null, this.trim_offsets = "trim_offsets" in e && e.trim_offsets;
	}
	_call(e) {
		return this.decode(e);
	}
	decode(e) {
		return this.decode_chain(e).join("");
	}
}, Wr = class extends qr {
	constructor(e) {
		super(e), this.byte_decoder = $s, this.text_decoder = new TextDecoder("utf-8", {
			fatal: !1,
			ignoreBOM: !0
		}), this.end_of_word_suffix = null;
	}
	convert_tokens_to_string(e) {
		const t = e.join(""), n = new Uint8Array([...t].map((e) => this.byte_decoder[e]));
		return this.text_decoder.decode(n);
	}
	decode_chain(e) {
		const t = [];
		let n = [];
		for (const s of e) void 0 !== this.added_tokens.find((e) => e.content === s) ? (n.length > 0 && (t.push(this.convert_tokens_to_string(n)), n = []), t.push(s)) : n.push(s);
		return n.length > 0 && t.push(this.convert_tokens_to_string(n)), t;
	}
}, Hr = class extends qr {
	constructor(e) {
		super(e), this.cleanup = e.cleanup;
	}
	decode_chain(e) {
		return e.map((e, t) => {
			if (0 !== t) {
				const t = this.config.prefix;
				e = t && e.startsWith(t) ? e.replace(t, "") : " " + e;
			}
			return this.cleanup && (e = Us(e)), e;
		});
	}
}, Qr = class extends qr {
	constructor(e) {
		super(e), this.replacement = e.replacement ?? "▁";
	}
	decode_chain(e) {
		const t = [];
		for (let n = 0; n < e.length; ++n) {
			let s = e[n].replaceAll(this.replacement, " ");
			0 == n && s.startsWith(" ") && (s = s.substring(1)), t.push(s);
		}
		return t;
	}
}, Xr = class extends qr {
	constructor(e) {
		super(e), this.suffix = e.suffix ?? "";
	}
	decode_chain(e) {
		return e.map((t, n) => t.replaceAll(this.suffix, n === e.length - 1 ? "" : " "));
	}
}, Jr = class extends qr {
	constructor(e) {
		super(e), this.pad_token = e.pad_token ?? "", this.word_delimiter_token = e.word_delimiter_token ?? "", this.cleanup = e.cleanup;
	}
	convert_tokens_to_string(e) {
		if (0 === e.length) return "";
		const t = [e[0]];
		for (let s = 1; s < e.length; ++s) e[s] !== t.at(-1) && t.push(e[s]);
		let n = t.filter((e) => e !== this.pad_token).join("");
		return this.cleanup && (n = Us(n).replaceAll(this.word_delimiter_token, " ").trim()), n;
	}
	decode_chain(e) {
		return [this.convert_tokens_to_string(e)];
	}
}, Yr = class extends qr {
	constructor(e) {
		super(e), this.decoders = (e.decoders ?? []).map((e) => na(e));
	}
	decode_chain(e) {
		return this.decoders.reduce((e, t) => t.decode_chain(e), e);
	}
}, Kr = class extends qr {
	decode_chain(e) {
		const t = Vs(this.config.pattern), n = this.config.content ?? "";
		return null === t ? e : e.map((e) => e.replaceAll(t, n));
	}
}, Zr = class extends qr {
	decode_chain(e) {
		return [e.join("")];
	}
}, ea = class extends qr {
	constructor(e) {
		super(e), this.content = e.content ?? "", this.start = e.start ?? 0, this.stop = e.stop ?? 0;
	}
	decode_chain(e) {
		return e.map((e) => {
			let t = 0;
			for (let s = 0; s < this.start; ++s) {
				if (e[s] === this.content) {
					t = s + 1;
					continue;
				}
				break;
			}
			let n = e.length;
			for (let s = 0; s < this.stop; ++s) {
				const t = e.length - s - 1;
				if (e[t] !== this.content) break;
				n = t;
			}
			return e.slice(t, n);
		});
	}
}, ta = class extends qr {
	constructor(e) {
		super(e), this.text_decoder = new TextDecoder();
	}
	decode_chain(e) {
		const t = [];
		let n = [];
		for (const s of e) {
			let e = null;
			if (6 === s.length && s.startsWith("<0x") && s.endsWith(">")) {
				const t = parseInt(s.slice(3, 5), 16);
				isNaN(t) || (e = t);
			}
			if (null !== e) n.push(e);
			else {
				if (n.length > 0) {
					const e = this.text_decoder.decode(Uint8Array.from(n));
					t.push(e), n = [];
				}
				t.push(s);
			}
		}
		if (n.length > 0) {
			const e = this.text_decoder.decode(Uint8Array.from(n));
			t.push(e), n = [];
		}
		return t;
	}
};
var na = function(e) {
	if (null === e) return null;
	switch (e.type) {
		case "ByteLevel": return new Wr(e);
		case "WordPiece": return new Hr(e);
		case "Metaspace": return new Qr(e);
		case "BPEDecoder": return new Xr(e);
		case "CTC": return new Jr(e);
		case "Sequence": return new Yr(e);
		case "Replace": return new Kr(e);
		case "Fuse": return new Zr(e);
		case "Strip": return new ea(e);
		case "ByteFallback": return new ta(e);
		default: throw new Error(`Unknown Decoder type: ${e.type}`);
	}
}, sa = class {
	constructor(e, t) {
		const n = Js(e, "Tokenizer", [
			"model",
			"decoder",
			"post_processor",
			"pre_tokenizer",
			"normalizer"
		]);
		if (n) throw new Error(n);
		const s = Js(t, "Config");
		if (s) throw new Error(s);
		this.tokenizer = e, this.config = t, this.normalizer = hr(this.tokenizer.normalizer), this.pre_tokenizer = Er(this.tokenizer.pre_tokenizer), this.model = Br(this.tokenizer.model, this.config), this.post_processor = jr(this.tokenizer.post_processor), this.decoder = na(this.tokenizer.decoder), this.special_tokens = [], this.all_special_ids = [], this.added_tokens = [];
		const r = [], a = [];
		this.added_tokens_map = /* @__PURE__ */ new Map();
		for (const o of this.tokenizer.added_tokens) {
			const e = new Ns(o);
			if (this.added_tokens.push(e), this.model.tokens_to_ids.set(e.content, e.id), this.model.vocab[e.id] = e.content, e.special && (this.special_tokens.push(e.content), this.all_special_ids.push(e.id)), this.added_tokens_map.set(e.content, e), e.normalized && null !== this.normalizer) {
				const t = this.normalizer(e.content);
				a.push(t), this.added_tokens_map.set(t, e);
			} else r.push(e.content);
		}
		(this.config.additional_special_tokens ?? []).forEach((e) => {
			this.special_tokens.includes(e) || this.special_tokens.push(e);
		}), this.decoder && (this.decoder.added_tokens = this.added_tokens, this.decoder.end_of_word_suffix = this.model.end_of_word_suffix), this.splitter_unnormalized = new zs(r), this.splitter_normalized = new zs(a), this.remove_space = this.config.remove_space, this.clean_up_tokenization_spaces = this.config.clean_up_tokenization_spaces ?? !0, this.do_lowercase_and_remove_accent = this.config.do_lowercase_and_remove_accent ?? !1;
	}
	encode(e, { text_pair: t = null, add_special_tokens: n = !0, return_token_type_ids: s = null } = {}) {
		const { tokens: r, token_type_ids: a } = this.tokenize_helper(e, {
			text_pair: t,
			add_special_tokens: n
		}), o = r.map((e) => this.added_tokens_map.get(e)?.id ?? this.model.tokens_to_ids.get(e) ?? this.model.unk_token_id), i = {
			ids: o,
			tokens: r,
			attention_mask: new Array(o.length).fill(1)
		};
		return s && a && (i.token_type_ids = a), i;
	}
	decode(e, t = {}) {
		if (!Array.isArray(e) || 0 === e.length || (n = e[0], !Number.isInteger(n) && "bigint" != typeof n)) throw Error("token_ids must be a non-empty array of integers.");
		var n;
		let s = e.map((e) => this.model.vocab[Number(e)] ?? this.model.unk_token);
		t.skip_special_tokens && (s = s.filter((e) => !this.special_tokens.includes(e)));
		let r = this.decoder ? this.decoder(s) : s.join(" ");
		return this.decoder && this.decoder.end_of_word_suffix && (r = r.replaceAll(this.decoder.end_of_word_suffix, " "), t.skip_special_tokens && (r = r.trim())), (t.clean_up_tokenization_spaces ?? this.clean_up_tokenization_spaces) && (r = Us(r)), r;
	}
	tokenize(e, { text_pair: t = null, add_special_tokens: n = !1 } = {}) {
		return this.tokenize_helper(e, {
			text_pair: t,
			add_special_tokens: n
		}).tokens;
	}
	encode_text(e) {
		if (null === e) return null;
		const t = this.splitter_unnormalized.split(e);
		return t.forEach((e, n) => {
			const s = this.added_tokens_map.get(e);
			s && (s.lstrip && n > 0 && (t[n - 1] = t[n - 1].trimEnd()), s.rstrip && n < t.length - 1 && (t[n + 1] = t[n + 1].trimStart()));
		}), t.flatMap((e, t) => {
			if (0 === e.length) return [];
			if (this.added_tokens_map.has(e)) return [e];
			if (!0 === this.remove_space && (e = e.trim().split(/\s+/).join(" ")), this.do_lowercase_and_remove_accent && (e = ((e) => Xs(e.toLowerCase()))(e)), null !== this.normalizer && (e = this.normalizer(e)), 0 === e.length) return [];
			const n = this.splitter_normalized.split(e);
			return n.forEach((e, t) => {
				const s = this.added_tokens_map.get(e);
				s && (s.lstrip && t > 0 && (n[t - 1] = n[t - 1].trimEnd()), s.rstrip && t < n.length - 1 && (n[t + 1] = n[t + 1].trimStart()));
			}), n.flatMap((e) => {
				if (0 === e.length) return [];
				if (this.added_tokens_map.has(e)) return [e];
				const n = null !== this.pre_tokenizer ? this.pre_tokenizer(e, { section_index: t }) : [e];
				return this.model(n);
			});
		});
	}
	tokenize_helper(e, { text_pair: t = null, add_special_tokens: n = !0 }) {
		const s = this.encode_text(e), r = this.encode_text(t || null);
		return this.post_processor ? this.post_processor(s, r, n) : { tokens: Hs(s ?? [], r ?? []) };
	}
	token_to_id(e) {
		return this.model.tokens_to_ids.get(e);
	}
	id_to_token(e) {
		return this.model.vocab[e];
	}
	get_added_tokens_decoder() {
		const e = /* @__PURE__ */ new Map();
		for (const t of this.added_tokens) e.set(t.id, t);
		return e;
	}
	get_vocab(e = !0) {
		const t = /* @__PURE__ */ new Map();
		for (let n = 0; n < this.model.vocab.length; ++n) {
			const s = this.model.vocab[n];
			!e && this.added_tokens_map.has(s) || t.set(s, n);
		}
		return t;
	}
}, ra = Object.freeze({
	Text: "Text",
	NumericLiteral: "NumericLiteral",
	StringLiteral: "StringLiteral",
	Identifier: "Identifier",
	Equals: "Equals",
	OpenParen: "OpenParen",
	CloseParen: "CloseParen",
	OpenStatement: "OpenStatement",
	CloseStatement: "CloseStatement",
	OpenExpression: "OpenExpression",
	CloseExpression: "CloseExpression",
	OpenSquareBracket: "OpenSquareBracket",
	CloseSquareBracket: "CloseSquareBracket",
	OpenCurlyBracket: "OpenCurlyBracket",
	CloseCurlyBracket: "CloseCurlyBracket",
	Comma: "Comma",
	Dot: "Dot",
	Colon: "Colon",
	Pipe: "Pipe",
	CallOperator: "CallOperator",
	AdditiveBinaryOperator: "AdditiveBinaryOperator",
	MultiplicativeBinaryOperator: "MultiplicativeBinaryOperator",
	ComparisonBinaryOperator: "ComparisonBinaryOperator",
	UnaryOperator: "UnaryOperator",
	Comment: "Comment"
}), aa = class {
	constructor(e, t) {
		this.value = e, this.type = t;
	}
};
function oa(e) {
	return /\w/.test(e);
}
function ia(e) {
	return /[0-9]/.test(e);
}
function la(e) {
	return /\s/.test(e);
}
var ca = [
	["{%", ra.OpenStatement],
	["%}", ra.CloseStatement],
	["{{", ra.OpenExpression],
	["}}", ra.CloseExpression],
	["(", ra.OpenParen],
	[")", ra.CloseParen],
	["{", ra.OpenCurlyBracket],
	["}", ra.CloseCurlyBracket],
	["[", ra.OpenSquareBracket],
	["]", ra.CloseSquareBracket],
	[",", ra.Comma],
	[".", ra.Dot],
	[":", ra.Colon],
	["|", ra.Pipe],
	["<=", ra.ComparisonBinaryOperator],
	[">=", ra.ComparisonBinaryOperator],
	["==", ra.ComparisonBinaryOperator],
	["!=", ra.ComparisonBinaryOperator],
	["<", ra.ComparisonBinaryOperator],
	[">", ra.ComparisonBinaryOperator],
	["+", ra.AdditiveBinaryOperator],
	["-", ra.AdditiveBinaryOperator],
	["~", ra.AdditiveBinaryOperator],
	["*", ra.MultiplicativeBinaryOperator],
	["/", ra.MultiplicativeBinaryOperator],
	["%", ra.MultiplicativeBinaryOperator],
	["=", ra.Equals]
], ua = new Map([
	["n", "\n"],
	["t", "	"],
	["r", "\r"],
	["b", "\b"],
	["f", "\f"],
	["v", "\v"],
	["'", "'"],
	["\"", "\""],
	["\\", "\\"]
]);
var da = class {
	type = "Statement";
}, ha = class extends da {
	constructor(e) {
		super(), this.body = e;
	}
	type = "Program";
}, _a = class extends da {
	constructor(e, t, n) {
		super(), this.test = e, this.body = t, this.alternate = n;
	}
	type = "If";
}, pa = class extends da {
	constructor(e, t, n, s) {
		super(), this.loopvar = e, this.iterable = t, this.body = n, this.defaultBlock = s;
	}
	type = "For";
}, fa = class extends da {
	type = "Break";
}, ma = class extends da {
	type = "Continue";
}, ga = class extends da {
	constructor(e, t, n) {
		super(), this.assignee = e, this.value = t, this.body = n;
	}
	type = "Set";
}, wa = class extends da {
	constructor(e, t, n) {
		super(), this.name = e, this.args = t, this.body = n;
	}
	type = "Macro";
}, ya = class extends da {
	constructor(e) {
		super(), this.value = e;
	}
	type = "Comment";
}, ba = class extends da {
	type = "Expression";
}, xa = class extends ba {
	constructor(e, t, n) {
		super(), this.object = e, this.property = t, this.computed = n;
	}
	type = "MemberExpression";
}, va = class extends ba {
	constructor(e, t) {
		super(), this.callee = e, this.args = t;
	}
	type = "CallExpression";
}, Ma = class extends ba {
	constructor(e) {
		super(), this.value = e;
	}
	type = "Identifier";
}, ka = class extends ba {
	constructor(e) {
		super(), this.value = e;
	}
	type = "Literal";
}, Ea = class extends ka {
	type = "IntegerLiteral";
}, Aa = class extends ka {
	type = "FloatLiteral";
}, Ca = class extends ka {
	type = "StringLiteral";
}, Ta = class extends ka {
	type = "ArrayLiteral";
}, Sa = class extends ka {
	type = "TupleLiteral";
}, Fa = class extends ka {
	type = "ObjectLiteral";
}, Ia = class extends ba {
	constructor(e, t, n) {
		super(), this.operator = e, this.left = t, this.right = n;
	}
	type = "BinaryExpression";
}, Pa = class extends ba {
	constructor(e, t) {
		super(), this.operand = e, this.filter = t;
	}
	type = "FilterExpression";
}, La = class extends da {
	constructor(e, t) {
		super(), this.filter = e, this.body = t;
	}
	type = "FilterStatement";
}, Oa = class extends ba {
	constructor(e, t) {
		super(), this.lhs = e, this.test = t;
	}
	type = "SelectExpression";
}, za = class extends ba {
	constructor(e, t, n) {
		super(), this.operand = e, this.negate = t, this.test = n;
	}
	type = "TestExpression";
}, Na = class extends ba {
	constructor(e, t) {
		super(), this.operator = e, this.argument = t;
	}
	type = "UnaryExpression";
}, Ba = class extends ba {
	constructor(e = void 0, t = void 0, n = void 0) {
		super(), this.start = e, this.stop = t, this.step = n;
	}
	type = "SliceExpression";
}, $a = class extends ba {
	constructor(e, t) {
		super(), this.key = e, this.value = t;
	}
	type = "KeywordArgumentExpression";
}, Da = class extends ba {
	constructor(e) {
		super(), this.argument = e;
	}
	type = "SpreadExpression";
}, Ra = class extends da {
	constructor(e, t, n) {
		super(), this.call = e, this.callerArgs = t, this.body = n;
	}
	type = "CallStatement";
}, Ga = class extends ba {
	constructor(e, t, n) {
		super(), this.condition = e, this.trueExpr = t, this.falseExpr = n;
	}
	type = "Ternary";
};
function Ua(e) {
	const t = new ha([]);
	let n = 0;
	function s(t, s) {
		const r = e[n++];
		if (!r || r.type !== t) throw new Error(`Parser Error: ${s}. ${r.type} !== ${t}.`);
		return r;
	}
	function r(e) {
		if (!l(e)) throw new SyntaxError(`Expected ${e}`);
		++n;
	}
	function a() {
		switch (e[n].type) {
			case ra.Comment: return new ya(e[n++].value);
			case ra.Text: return new Ca(s(ra.Text, "Expected text token").value);
			case ra.OpenStatement: return function() {
				if (s(ra.OpenStatement, "Expected opening statement token"), e[n].type !== ra.Identifier) throw new SyntaxError(`Unknown statement, got ${e[n].type}`);
				const t = e[n].value;
				let h;
				switch (t) {
					case "set":
						++n, h = function() {
							const e = u();
							let t = null;
							const l = [];
							if (o(ra.Equals)) ++n, t = u();
							else {
								for (s(ra.CloseStatement, "Expected %} token"); !i("endset");) l.push(a());
								s(ra.OpenStatement, "Expected {% token"), r("endset");
							}
							return s(ra.CloseStatement, "Expected closing statement token"), new ga(e, t, l);
						}();
						break;
					case "if":
						++n, h = c(), s(ra.OpenStatement, "Expected {% token"), r("endif"), s(ra.CloseStatement, "Expected %} token");
						break;
					case "macro":
						++n, h = function() {
							const e = M();
							if ("Identifier" !== e.type) throw new SyntaxError("Expected identifier following macro statement");
							const t = w();
							s(ra.CloseStatement, "Expected closing statement token");
							const n = [];
							for (; !i("endmacro");) n.push(a());
							return new wa(e, t, n);
						}(), s(ra.OpenStatement, "Expected {% token"), r("endmacro"), s(ra.CloseStatement, "Expected %} token");
						break;
					case "for":
						++n, h = function() {
							const e = u(!0);
							if (!(e instanceof Ma || e instanceof Sa)) throw new SyntaxError(`Expected identifier/tuple for the loop variable, got ${e.type} instead`);
							if (!l("in")) throw new SyntaxError("Expected `in` keyword following loop variable");
							++n;
							const t = d();
							s(ra.CloseStatement, "Expected closing statement token");
							const r = [];
							for (; !i("endfor", "else");) r.push(a());
							const o = [];
							if (i("else")) for (++n, ++n, s(ra.CloseStatement, "Expected closing statement token"); !i("endfor");) o.push(a());
							return new pa(e, t, r, o);
						}(), s(ra.OpenStatement, "Expected {% token"), r("endfor"), s(ra.CloseStatement, "Expected %} token");
						break;
					case "call": {
						++n;
						let e = null;
						o(ra.OpenParen) && (e = w());
						const t = M();
						if ("Identifier" !== t.type) throw new SyntaxError("Expected identifier following call statement");
						const l = w();
						s(ra.CloseStatement, "Expected closing statement token");
						const c = [];
						for (; !i("endcall");) c.push(a());
						s(ra.OpenStatement, "Expected '{%'"), r("endcall"), s(ra.CloseStatement, "Expected closing statement token"), h = new Ra(new va(t, l), e, c);
						break;
					}
					case "break":
						++n, s(ra.CloseStatement, "Expected closing statement token"), h = new fa();
						break;
					case "continue":
						++n, s(ra.CloseStatement, "Expected closing statement token"), h = new ma();
						break;
					case "filter": {
						++n;
						let e = M();
						e instanceof Ma && o(ra.OpenParen) && (e = g(e)), s(ra.CloseStatement, "Expected closing statement token");
						const t = [];
						for (; !i("endfilter");) t.push(a());
						s(ra.OpenStatement, "Expected '{%'"), r("endfilter"), s(ra.CloseStatement, "Expected '%}'"), h = new La(e, t);
						break;
					}
					default: throw new SyntaxError(`Unknown statement type: ${t}`);
				}
				return h;
			}();
			case ra.OpenExpression: return function() {
				s(ra.OpenExpression, "Expected opening expression token");
				const e = d();
				return s(ra.CloseExpression, "Expected closing expression token"), e;
			}();
			default: throw new SyntaxError(`Unexpected token type: ${e[n].type}`);
		}
	}
	function o(...t) {
		return n + t.length <= e.length && t.every((t, s) => t === e[n + s].type);
	}
	function i(...t) {
		return e[n]?.type === ra.OpenStatement && e[n + 1]?.type === ra.Identifier && t.includes(e[n + 1]?.value);
	}
	function l(...t) {
		return n + t.length <= e.length && t.every((t, s) => "Identifier" === e[n + s].type && t === e[n + s].value);
	}
	function c() {
		const e = d();
		s(ra.CloseStatement, "Expected closing statement token");
		const t = [], r = [];
		for (; !i("elif", "else", "endif");) t.push(a());
		if (i("elif")) {
			++n, ++n;
			const e = c();
			r.push(e);
		} else if (i("else")) for (++n, ++n, s(ra.CloseStatement, "Expected closing statement token"); !i("endif");) r.push(a());
		return new _a(e, t, r);
	}
	function u(e = !1) {
		const t = e ? M : d, s = [t()], r = o(ra.Comma);
		for (; r && (++n, s.push(t()), o(ra.Comma)););
		return r ? new Sa(s) : s[0];
	}
	function d() {
		return h();
	}
	function h() {
		const e = _();
		if (l("if")) {
			++n;
			const t = _();
			return l("else") ? (++n, new Ga(t, e, h())) : new Oa(e, t);
		}
		return e;
	}
	function _() {
		let t = p();
		for (; l("or");) {
			const s = e[n];
			++n;
			const r = p();
			t = new Ia(s, t, r);
		}
		return t;
	}
	function p() {
		let t = f();
		for (; l("and");) {
			const s = e[n];
			++n;
			const r = f();
			t = new Ia(s, t, r);
		}
		return t;
	}
	function f() {
		let t;
		for (; l("not");) {
			const s = e[n];
			++n, t = new Na(s, f());
		}
		return t ?? function() {
			let t = m();
			for (;;) {
				let s;
				if (l("not", "in")) s = new aa("not in", ra.Identifier), n += 2;
				else if (l("in")) s = e[n++];
				else {
					if (!o(ra.ComparisonBinaryOperator)) break;
					s = e[n++];
				}
				const r = m();
				t = new Ia(s, t, r);
			}
			return t;
		}();
	}
	function m() {
		let t = x();
		for (; o(ra.AdditiveBinaryOperator);) {
			const s = e[n];
			++n;
			const r = x();
			t = new Ia(s, t, r);
		}
		return t;
	}
	function g(e) {
		let t = new va(e, w());
		return t = b(t), o(ra.OpenParen) && (t = g(t)), t;
	}
	function w() {
		s(ra.OpenParen, "Expected opening parenthesis for arguments list");
		const t = function() {
			const t = [];
			for (; !o(ra.CloseParen);) {
				let s;
				if (e[n].type === ra.MultiplicativeBinaryOperator && "*" === e[n].value) ++n, s = new Da(d());
				else if (s = d(), o(ra.Equals)) {
					if (++n, !(s instanceof Ma)) throw new SyntaxError("Expected identifier for keyword argument");
					const e = d();
					s = new $a(s, e);
				}
				t.push(s), o(ra.Comma) && ++n;
			}
			return t;
		}();
		return s(ra.CloseParen, "Expected closing parenthesis for arguments list"), t;
	}
	function y() {
		const e = [];
		let t = !1;
		for (; !o(ra.CloseSquareBracket);) o(ra.Colon) ? (e.push(void 0), ++n, t = !0) : (e.push(d()), o(ra.Colon) && (++n, t = !0));
		if (0 === e.length) throw new SyntaxError("Expected at least one argument for member/slice expression");
		if (t) {
			if (e.length > 3) throw new SyntaxError("Expected 0-3 arguments for slice expression");
			return new Ba(...e);
		}
		return e[0];
	}
	function b(t) {
		for (; o(ra.Dot) || o(ra.OpenSquareBracket);) {
			const r = e[n];
			let a;
			++n;
			const o = r.type === ra.OpenSquareBracket;
			if (o) a = y(), s(ra.CloseSquareBracket, "Expected closing square bracket");
			else if (a = M(), "Identifier" !== a.type) throw new SyntaxError("Expected identifier following dot operator");
			t = new xa(t, a, o);
		}
		return t;
	}
	function x() {
		let t = v();
		for (; o(ra.MultiplicativeBinaryOperator);) {
			const s = e[n++], r = v();
			t = new Ia(s, t, r);
		}
		return t;
	}
	function v() {
		let e = function() {
			let e = function() {
				const e = b(M());
				return o(ra.OpenParen) ? g(e) : e;
			}();
			for (; o(ra.Pipe);) {
				++n;
				let t = M();
				if (!(t instanceof Ma)) throw new SyntaxError("Expected identifier for the filter");
				o(ra.OpenParen) && (t = g(t)), e = new Pa(e, t);
			}
			return e;
		}();
		for (; l("is");) {
			++n;
			const t = l("not");
			t && ++n;
			const s = M();
			if (!(s instanceof Ma)) throw new SyntaxError("Expected identifier for the test");
			e = new za(e, t, s);
		}
		return e;
	}
	function M() {
		const t = e[n++];
		switch (t.type) {
			case ra.NumericLiteral: {
				const e = t.value;
				return e.includes(".") ? new Aa(Number(e)) : new Ea(Number(e));
			}
			case ra.StringLiteral: {
				let s = t.value;
				for (; o(ra.StringLiteral);) s += e[n++].value;
				return new Ca(s);
			}
			case ra.Identifier: return new Ma(t.value);
			case ra.OpenParen: {
				const e = u();
				return s(ra.CloseParen, "Expected closing parenthesis, got ${tokens[current].type} instead."), e;
			}
			case ra.OpenSquareBracket: {
				const e = [];
				for (; !o(ra.CloseSquareBracket);) e.push(d()), o(ra.Comma) && ++n;
				return ++n, new Ta(e);
			}
			case ra.OpenCurlyBracket: {
				const e = /* @__PURE__ */ new Map();
				for (; !o(ra.CloseCurlyBracket);) {
					const t = d();
					s(ra.Colon, "Expected colon between key and value in object literal");
					const r = d();
					e.set(t, r), o(ra.Comma) && ++n;
				}
				return ++n, new Fa(e);
			}
			default: throw new SyntaxError(`Unexpected token: ${t.type}`);
		}
	}
	for (; n < e.length;) t.body.push(a());
	return t;
}
function Va(e, t, n = 1) {
	if (void 0 === t && (t = e, e = 0), 0 === n) throw new Error("range() step must not be zero");
	const s = [];
	if (n > 0) for (let r = e; r < t; r += n) s.push(r);
	else for (let r = e; r > t; r += n) s.push(r);
	return s;
}
function ja(e, t, n, s = 1) {
	const r = Math.sign(s);
	r >= 0 ? (t = (t ??= 0) < 0 ? Math.max(e.length + t, 0) : Math.min(t, e.length), n = (n ??= e.length) < 0 ? Math.max(e.length + n, 0) : Math.min(n, e.length)) : (t = (t ??= e.length - 1) < 0 ? Math.max(e.length + t, -1) : Math.min(t, e.length - 1), n = (n ??= -1) < -1 ? Math.max(e.length + n, -1) : Math.min(n, e.length - 1));
	const a = [];
	for (let o = t; r * o < r * n; o += s) a.push(e[o]);
	return a;
}
function qa(e) {
	return function(e, t) {
		const n = new Intl.DateTimeFormat(void 0, { month: "long" }), s = new Intl.DateTimeFormat(void 0, { month: "short" }), r = (e) => e < 10 ? "0" + e : e.toString();
		return t.replace(/%[YmdbBHM%]/g, (t) => {
			switch (t) {
				case "%Y": return e.getFullYear().toString();
				case "%m": return r(e.getMonth() + 1);
				case "%d": return r(e.getDate());
				case "%b": return s.format(e);
				case "%B": return n.format(e);
				case "%H": return r(e.getHours());
				case "%M": return r(e.getMinutes());
				case "%%": return "%";
				default: return t;
			}
		});
	}(/* @__PURE__ */ new Date(), e);
}
var Wa = class extends Error {}, Ha = class extends Error {}, Qa = class {
	type = "RuntimeValue";
	value;
	builtins = /* @__PURE__ */ new Map();
	constructor(e = void 0) {
		this.value = e;
	}
	__bool__() {
		return new Ka(!!this.value);
	}
	toString() {
		return String(this.value);
	}
}, Xa = class extends Qa {
	type = "IntegerValue";
}, Ja = class extends Qa {
	type = "FloatValue";
	toString() {
		return this.value % 1 == 0 ? this.value.toFixed(1) : this.value.toString();
	}
}, Ya = class extends Qa {
	type = "StringValue";
	builtins = new Map([
		["upper", new oo(() => new Ya(this.value.toUpperCase()))],
		["lower", new oo(() => new Ya(this.value.toLowerCase()))],
		["strip", new oo(() => new Ya(this.value.trim()))],
		["title", new oo(() => new Ya(this.value.replace(/\b\w/g, (e) => e.toUpperCase())))],
		["capitalize", new oo(() => new Ya(this.value.charAt(0).toUpperCase() + this.value.slice(1)))],
		["length", new Xa(this.value.length)],
		["rstrip", new oo(() => new Ya(this.value.trimEnd()))],
		["lstrip", new oo(() => new Ya(this.value.trimStart()))],
		["startswith", new oo((e) => {
			if (0 === e.length) throw new Error("startswith() requires at least one argument");
			const t = e[0];
			if (t instanceof Ya) return new Ka(this.value.startsWith(t.value));
			if (t instanceof ro) {
				for (const e of t.value) {
					if (!(e instanceof Ya)) throw new Error("startswith() tuple elements must be strings");
					if (this.value.startsWith(e.value)) return new Ka(!0);
				}
				return new Ka(!1);
			}
			throw new Error("startswith() argument must be a string or tuple of strings");
		})],
		["endswith", new oo((e) => {
			if (0 === e.length) throw new Error("endswith() requires at least one argument");
			const t = e[0];
			if (t instanceof Ya) return new Ka(this.value.endsWith(t.value));
			if (t instanceof ro) {
				for (const e of t.value) {
					if (!(e instanceof Ya)) throw new Error("endswith() tuple elements must be strings");
					if (this.value.endsWith(e.value)) return new Ka(!0);
				}
				return new Ka(!1);
			}
			throw new Error("endswith() argument must be a string or tuple of strings");
		})],
		["split", new oo((e) => {
			const t = e[0] ?? new io();
			if (!(t instanceof Ya || t instanceof io)) throw new Error("sep argument must be a string or null");
			const n = e[1] ?? new Xa(-1);
			if (!(n instanceof Xa)) throw new Error("maxsplit argument must be a number");
			let s = [];
			if (t instanceof io) {
				const e = this.value.trimStart();
				for (const { 0: t, index: r } of e.matchAll(/\S+/g)) {
					if (-1 !== n.value && s.length >= n.value && void 0 !== r) {
						s.push(t + e.slice(r + t.length));
						break;
					}
					s.push(t);
				}
			} else {
				if ("" === t.value) throw new Error("empty separator");
				s = this.value.split(t.value), -1 !== n.value && s.length > n.value && s.push(s.splice(n.value).join(t.value));
			}
			return new ro(s.map((e) => new Ya(e)));
		})],
		["replace", new oo((e) => {
			if (e.length < 2) throw new Error("replace() requires at least two arguments");
			const t = e[0], n = e[1];
			if (!(t instanceof Ya && n instanceof Ya)) throw new Error("replace() arguments must be strings");
			let s;
			if (s = e.length > 2 ? "KeywordArgumentsValue" === e[2].type ? e[2].value.get("count") ?? new io() : e[2] : new io(), !(s instanceof Xa || s instanceof io)) throw new Error("replace() count argument must be a number or null");
			return new Ya(function(e, t, n, s) {
				if (0 === s) return e;
				let r = null == s || s < 0 ? Infinity : s;
				const a = 0 === t.length ? /* @__PURE__ */ new RegExp("(?=)", "gu") : new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gu");
				return e.replaceAll(a, (e) => r > 0 ? (--r, n) : e);
			}(this.value, t.value, n.value, s.value));
		})]
	]);
}, Ka = class extends Qa {
	type = "BooleanValue";
}, Za = /[\x7f-\uffff]/g;
function eo(e) {
	return e.replace(Za, (e) => "\\u" + e.charCodeAt(0).toString(16).padStart(4, "0"));
}
function to(e, t = {}, n = 0, s = !0) {
	const { indent: r = null, ensureAscii: a = !1, separators: o = null, sortKeys: i = !1 } = t;
	let l, c;
	switch (o ? [l, c] = o : r ? (l = ",", c = ": ") : (l = ", ", c = ": "), e.type) {
		case "NullValue": return "null";
		case "UndefinedValue": return s ? "null" : "undefined";
		case "IntegerValue":
		case "FloatValue":
		case "BooleanValue": return JSON.stringify(e.value);
		case "StringValue": {
			let t = JSON.stringify(e.value);
			return a && (t = eo(t)), t;
		}
		case "ArrayValue":
		case "ObjectValue": {
			const o = r ? " ".repeat(r) : "", u = "\n" + o.repeat(n), d = u + o;
			if ("ArrayValue" === e.type) {
				const a = e.value.map((e) => to(e, t, n + 1, s));
				return r ? `[${d}${a.join(`${l}${d}`)}${u}]` : `[${a.join(l)}]`;
			}
			{
				let o = Array.from(e.value.entries());
				i && (o = o.sort(([e], [t]) => e.localeCompare(t)));
				const h = o.map(([e, o]) => {
					let i = JSON.stringify(e);
					a && (i = eo(i));
					const l = `${i}${c}${to(o, t, n + 1, s)}`;
					return r ? `${d}${l}` : l;
				});
				return r ? `{${h.join(l)}${u}}` : `{${h.join(l)}}`;
			}
		}
		default: throw new Error(`Cannot convert to JSON: ${e.type}`);
	}
}
var no = class extends Qa {
	type = "ObjectValue";
	__bool__() {
		return new Ka(this.value.size > 0);
	}
	builtins = new Map([
		["get", new oo(([e, t]) => {
			if (!(e instanceof Ya)) throw new Error(`Object key must be a string: got ${e.type}`);
			return this.value.get(e.value) ?? t ?? new io();
		})],
		["items", new oo(() => this.items())],
		["keys", new oo(() => this.keys())],
		["values", new oo(() => this.values())],
		["dictsort", new oo((e) => {
			let t = /* @__PURE__ */ new Map();
			const n = e.filter((e) => !(e instanceof so) || (t = e.value, !1)), s = n.at(0) ?? t.get("case_sensitive") ?? new Ka(!1);
			if (!(s instanceof Ka)) throw new Error("case_sensitive must be a boolean");
			const r = n.at(1) ?? t.get("by") ?? new Ya("key");
			if (!(r instanceof Ya)) throw new Error("by must be a string");
			if (!["key", "value"].includes(r.value)) throw new Error("by must be either 'key' or 'value'");
			const a = n.at(2) ?? t.get("reverse") ?? new Ka(!1);
			if (!(a instanceof Ka)) throw new Error("reverse must be a boolean");
			return new ro(Array.from(this.value.entries()).map(([e, t]) => new ro([new Ya(e), t])).sort((e, t) => {
				const n = "key" === r.value ? 0 : 1, o = ho(e.value[n], t.value[n], s.value);
				return a.value ? -o : o;
			}));
		})]
	]);
	items() {
		return new ro(Array.from(this.value.entries()).map(([e, t]) => new ro([new Ya(e), t])));
	}
	keys() {
		return new ro(Array.from(this.value.keys()).map((e) => new Ya(e)));
	}
	values() {
		return new ro(Array.from(this.value.values()));
	}
	toString() {
		return to(this, {}, 0, !1);
	}
}, so = class extends no {
	type = "KeywordArgumentsValue";
}, ro = class extends Qa {
	type = "ArrayValue";
	builtins = new Map([["length", new Xa(this.value.length)]]);
	__bool__() {
		return new Ka(this.value.length > 0);
	}
	toString() {
		return to(this, {}, 0, !1);
	}
}, ao = class extends ro {
	type = "TupleValue";
}, oo = class extends Qa {
	type = "FunctionValue";
}, io = class extends Qa {
	type = "NullValue";
}, lo = class extends Qa {
	type = "UndefinedValue";
}, co = class {
	constructor(e) {
		this.parent = e;
	}
	variables = new Map([["namespace", new oo((e) => {
		if (0 === e.length) return new no(/* @__PURE__ */ new Map());
		if (1 !== e.length || !(e[0] instanceof no)) throw new Error("`namespace` expects either zero arguments or a single object argument");
		return e[0];
	})]]);
	tests = new Map([
		["boolean", (e) => "BooleanValue" === e.type],
		["callable", (e) => e instanceof oo],
		["odd", (e) => {
			if (!(e instanceof Xa)) throw new Error(`cannot odd on ${e.type}`);
			return e.value % 2 != 0;
		}],
		["even", (e) => {
			if (!(e instanceof Xa)) throw new Error(`cannot even on ${e.type}`);
			return e.value % 2 == 0;
		}],
		["false", (e) => "BooleanValue" === e.type && !e.value],
		["true", (e) => "BooleanValue" === e.type && e.value],
		["none", (e) => "NullValue" === e.type],
		["string", (e) => "StringValue" === e.type],
		["number", (e) => e instanceof Xa || e instanceof Ja],
		["integer", (e) => e instanceof Xa],
		["iterable", (e) => "ArrayValue" === e.type || "StringValue" === e.type],
		["mapping", (e) => e instanceof no],
		["sequence", (e) => e instanceof ro || e instanceof no || e instanceof Ya],
		["lower", (e) => {
			const t = e.value;
			return "StringValue" === e.type && t === t.toLowerCase();
		}],
		["upper", (e) => {
			const t = e.value;
			return "StringValue" === e.type && t === t.toUpperCase();
		}],
		["none", (e) => "NullValue" === e.type],
		["defined", (e) => "UndefinedValue" !== e.type],
		["undefined", (e) => "UndefinedValue" === e.type],
		["equalto", (e, t) => e.value === t.value],
		["eq", (e, t) => e.value === t.value]
	]);
	set(e, t) {
		return this.declareVariable(e, po(t));
	}
	declareVariable(e, t) {
		if (this.variables.has(e)) throw new SyntaxError(`Variable already declared: ${e}`);
		return this.variables.set(e, t), t;
	}
	setVariable(e, t) {
		return this.variables.set(e, t), t;
	}
	resolve(e) {
		if (this.variables.has(e)) return this;
		if (this.parent) return this.parent.resolve(e);
		throw new Error(`Unknown variable: ${e}`);
	}
	lookupVariable(e) {
		try {
			return this.resolve(e).variables.get(e) ?? new lo();
		} catch {
			return new lo();
		}
	}
};
function uo(e, t) {
	const n = t.split(".");
	let s = e;
	for (const r of n) if (s instanceof no) s = s.value.get(r) ?? new lo();
	else {
		if (!(s instanceof ro)) return new lo();
		{
			const e = parseInt(r, 10);
			if (!(!isNaN(e) && e >= 0 && e < s.value.length)) return new lo();
			s = s.value[e];
		}
	}
	return s;
}
function ho(e, t, n = !1) {
	if (e instanceof io && t instanceof io) return 0;
	if (e instanceof io || t instanceof io) throw new Error(`Cannot compare ${e.type} with ${t.type}`);
	if (e instanceof lo && t instanceof lo) return 0;
	if (e instanceof lo || t instanceof lo) throw new Error(`Cannot compare ${e.type} with ${t.type}`);
	const s = (e) => e instanceof Xa || e instanceof Ja || e instanceof Ka, r = (e) => e instanceof Ka ? e.value ? 1 : 0 : e.value;
	if (s(e) && s(t)) {
		const n = r(e), s = r(t);
		return n < s ? -1 : n > s ? 1 : 0;
	}
	if (e.type !== t.type) throw new Error(`Cannot compare different types: ${e.type} and ${t.type}`);
	if ("StringValue" === e.type) {
		let s = e.value, r = t.value;
		return n || (s = s.toLowerCase(), r = r.toLowerCase()), s < r ? -1 : s > r ? 1 : 0;
	}
	throw new Error(`Cannot compare type: ${e.type}`);
}
var _o = class {
	global;
	constructor(e) {
		this.global = e ?? new co();
	}
	run(e) {
		return this.evaluate(e, this.global);
	}
	evaluateBinaryExpression(e, t) {
		const n = this.evaluate(e.left, t);
		switch (e.operator.value) {
			case "and": return n.__bool__().value ? this.evaluate(e.right, t) : n;
			case "or": return n.__bool__().value ? n : this.evaluate(e.right, t);
		}
		const s = this.evaluate(e.right, t);
		switch (e.operator.value) {
			case "==": return new Ka(n.value == s.value);
			case "!=": return new Ka(n.value != s.value);
		}
		if (n instanceof lo || s instanceof lo) {
			if (s instanceof lo && ["in", "not in"].includes(e.operator.value)) return new Ka("not in" === e.operator.value);
			throw new Error(`Cannot perform operation ${e.operator.value} on undefined values`);
		}
		if (n instanceof io || s instanceof io) throw new Error("Cannot perform operation on null values");
		if ("~" === e.operator.value) return new Ya(n.value.toString() + s.value.toString());
		if ((n instanceof Xa || n instanceof Ja) && (s instanceof Xa || s instanceof Ja)) {
			const t = n.value, r = s.value;
			switch (e.operator.value) {
				case "+":
				case "-":
				case "*": {
					const a = "+" === e.operator.value ? t + r : "-" === e.operator.value ? t - r : t * r;
					return n instanceof Ja || s instanceof Ja ? new Ja(a) : new Xa(a);
				}
				case "/": return new Ja(t / r);
				case "%": {
					const e = t % r;
					return n instanceof Ja || s instanceof Ja ? new Ja(e) : new Xa(e);
				}
				case "<": return new Ka(t < r);
				case ">": return new Ka(t > r);
				case ">=": return new Ka(t >= r);
				case "<=": return new Ka(t <= r);
			}
		} else if (n instanceof ro && s instanceof ro) {
			if ("+" === e.operator.value) return new ro(n.value.concat(s.value));
		} else if (s instanceof ro) {
			const t = void 0 !== s.value.find((e) => e.value === n.value);
			switch (e.operator.value) {
				case "in": return new Ka(t);
				case "not in": return new Ka(!t);
			}
		}
		if ((n instanceof Ya || s instanceof Ya) && "+" === e.operator.value) return new Ya(n.value.toString() + s.value.toString());
		if (n instanceof Ya && s instanceof Ya) switch (e.operator.value) {
			case "in": return new Ka(s.value.includes(n.value));
			case "not in": return new Ka(!s.value.includes(n.value));
		}
		if (n instanceof Ya && s instanceof no) switch (e.operator.value) {
			case "in": return new Ka(s.value.has(n.value));
			case "not in": return new Ka(!s.value.has(n.value));
		}
		throw new SyntaxError(`Unknown operator "${e.operator.value}" between ${n.type} and ${s.type}`);
	}
	evaluateArguments(e, t) {
		const n = [], s = /* @__PURE__ */ new Map();
		for (const r of e) if ("SpreadExpression" === r.type) {
			const e = r, s = this.evaluate(e.argument, t);
			if (!(s instanceof ro)) throw new Error(`Cannot unpack non-iterable type: ${s.type}`);
			for (const t of s.value) n.push(t);
		} else if ("KeywordArgumentExpression" === r.type) {
			const e = r;
			s.set(e.key.value, this.evaluate(e.value, t));
		} else {
			if (s.size > 0) throw new Error("Positional arguments must come before keyword arguments");
			n.push(this.evaluate(r, t));
		}
		return [n, s];
	}
	applyFilter(e, t, n) {
		if ("Identifier" === t.type) {
			const s = t;
			if ("safe" === s.value) return e;
			if ("tojson" === s.value) return new Ya(to(e, {}));
			if (e instanceof ro) switch (s.value) {
				case "list": return e;
				case "first": return e.value[0];
				case "last": return e.value[e.value.length - 1];
				case "length": return new Xa(e.value.length);
				case "reverse": return new ro(e.value.slice().reverse());
				case "sort": return new ro(e.value.slice().sort((e, t) => ho(e, t, !1)));
				case "join": return new Ya(e.value.map((e) => e.value).join(""));
				case "string": return new Ya(to(e, {}, 0, !1));
				case "unique": {
					const t = /* @__PURE__ */ new Set(), n = [];
					for (const s of e.value) t.has(s.value) || (t.add(s.value), n.push(s));
					return new ro(n);
				}
				default: throw new Error(`Unknown ArrayValue filter: ${s.value}`);
			}
			else if (e instanceof Ya) switch (s.value) {
				case "length":
				case "upper":
				case "lower":
				case "title":
				case "capitalize": {
					const t = e.builtins.get(s.value);
					if (t instanceof oo) return t.value([], n);
					if (t instanceof Xa) return t;
					throw new Error(`Unknown StringValue filter: ${s.value}`);
				}
				case "trim": return new Ya(e.value.trim());
				case "indent": return new Ya(e.value.split("\n").map((e, t) => 0 === t || 0 === e.length ? e : "    " + e).join("\n"));
				case "join":
				case "string": return e;
				case "int": {
					const t = parseInt(e.value, 10);
					return new Xa(isNaN(t) ? 0 : t);
				}
				case "float": {
					const t = parseFloat(e.value);
					return new Ja(isNaN(t) ? 0 : t);
				}
				default: throw new Error(`Unknown StringValue filter: ${s.value}`);
			}
			else if (e instanceof Xa || e instanceof Ja) switch (s.value) {
				case "abs": return e instanceof Xa ? new Xa(Math.abs(e.value)) : new Ja(Math.abs(e.value));
				case "int": return new Xa(Math.floor(e.value));
				case "float": return new Ja(e.value);
				case "string": return new Ya(e.toString());
				default: throw new Error(`Unknown NumericValue filter: ${s.value}`);
			}
			else if (e instanceof no) switch (s.value) {
				case "items": return new ro(Array.from(e.value.entries()).map(([e, t]) => new ro([new Ya(e), t])));
				case "length": return new Xa(e.value.size);
				default: {
					const t = e.builtins.get(s.value);
					if (t) return t instanceof oo ? t.value([], n) : t;
					throw new Error(`Unknown ObjectValue filter: ${s.value}`);
				}
			}
			else if (e instanceof Ka) switch (s.value) {
				case "bool": return new Ka(e.value);
				case "int": return new Xa(e.value ? 1 : 0);
				case "float": return new Ja(e.value ? 1 : 0);
				case "string": return new Ya(e.value ? "true" : "false");
				default: throw new Error(`Unknown BooleanValue filter: ${s.value}`);
			}
			throw new Error(`Cannot apply filter "${s.value}" to type: ${e.type}`);
		}
		if ("CallExpression" === t.type) {
			const s = t;
			if ("Identifier" !== s.callee.type) throw new Error(`Unknown filter: ${s.callee.type}`);
			const r = s.callee.value;
			if ("tojson" === r) {
				const [, t] = this.evaluateArguments(s.args, n), r = t.get("indent") ?? new io();
				if (!(r instanceof Xa || r instanceof io)) throw new Error("If set, indent must be a number");
				const a = t.get("ensure_ascii") ?? new Ka(!1);
				if (!(a instanceof Ka)) throw new Error("If set, ensure_ascii must be a boolean");
				const o = t.get("sort_keys") ?? new Ka(!1);
				if (!(o instanceof Ka)) throw new Error("If set, sort_keys must be a boolean");
				const i = t.get("separators") ?? new io();
				let l = null;
				if (i instanceof ro || i instanceof ao) {
					if (2 !== i.value.length) throw new Error("separators must be a tuple of two strings");
					const [e, t] = i.value;
					if (!(e instanceof Ya && t instanceof Ya)) throw new Error("separators must be a tuple of two strings");
					l = [e.value, t.value];
				} else if (!(i instanceof io)) throw new Error("If set, separators must be a tuple of two strings");
				return new Ya(to(e, {
					indent: r.value,
					ensureAscii: a.value,
					sortKeys: o.value,
					separators: l
				}));
			}
			if ("join" === r) {
				let t;
				if (e instanceof Ya) t = Array.from(e.value);
				else {
					if (!(e instanceof ro)) throw new Error(`Cannot apply filter "${r}" to type: ${e.type}`);
					t = e.value.map((e) => e.value);
				}
				const [a, o] = this.evaluateArguments(s.args, n), i = a.at(0) ?? o.get("separator") ?? new Ya("");
				if (!(i instanceof Ya)) throw new Error("separator must be a string");
				return new Ya(t.join(i.value));
			}
			if ("int" === r || "float" === r) {
				const [t, a] = this.evaluateArguments(s.args, n), o = t.at(0) ?? a.get("default") ?? ("int" === r ? new Xa(0) : new Ja(0));
				if (e instanceof Ya) {
					const t = "int" === r ? parseInt(e.value, 10) : parseFloat(e.value);
					return isNaN(t) ? o : "int" === r ? new Xa(t) : new Ja(t);
				}
				if (e instanceof Xa || e instanceof Ja) return e;
				if (e instanceof Ka) return "int" === r ? new Xa(e.value ? 1 : 0) : new Ja(e.value ? 1 : 0);
				throw new Error(`Cannot apply filter "${r}" to type: ${e.type}`);
			}
			if ("default" === r) {
				const [t, r] = this.evaluateArguments(s.args, n), a = t[0] ?? new Ya(""), o = t[1] ?? r.get("boolean") ?? new Ka(!1);
				if (!(o instanceof Ka)) throw new Error("`default` filter flag must be a boolean");
				return e instanceof lo || o.value && !e.__bool__().value ? a : e;
			}
			if (e instanceof ro) {
				switch (r) {
					case "sort": {
						const [t, r] = this.evaluateArguments(s.args, n), a = t.at(0) ?? r.get("reverse") ?? new Ka(!1);
						if (!(a instanceof Ka)) throw new Error("reverse must be a boolean");
						const o = t.at(1) ?? r.get("case_sensitive") ?? new Ka(!1);
						if (!(o instanceof Ka)) throw new Error("case_sensitive must be a boolean");
						const i = t.at(2) ?? r.get("attribute") ?? new io();
						if (!(i instanceof Ya || i instanceof Xa || i instanceof io)) throw new Error("attribute must be a string, integer, or null");
						const l = (e) => i instanceof io ? e : uo(e, i instanceof Xa ? String(i.value) : i.value);
						return new ro(e.value.slice().sort((e, t) => {
							const n = ho(l(e), l(t), o.value);
							return a.value ? -n : n;
						}));
					}
					case "selectattr":
					case "rejectattr": {
						const t = "selectattr" === r;
						if (e.value.some((e) => !(e instanceof no))) throw new Error(`\`${r}\` can only be applied to array of objects`);
						if (s.args.some((e) => "StringLiteral" !== e.type)) throw new Error(`arguments of \`${r}\` must be strings`);
						const [a, o, i] = s.args.map((e) => this.evaluate(e, n));
						let l;
						if (o) {
							const e = n.tests.get(o.value);
							if (!e) throw new Error(`Unknown test: ${o.value}`);
							l = e;
						} else l = (...e) => e[0].__bool__().value;
						return new ro(e.value.filter((e) => {
							const n = e.value.get(a.value), s = !!n && l(n, i);
							return t ? s : !s;
						}));
					}
					case "map": {
						const [, t] = this.evaluateArguments(s.args, n);
						if (t.has("attribute")) {
							const n = t.get("attribute");
							if (!(n instanceof Ya)) throw new Error("attribute must be a string");
							const s = t.get("default");
							return new ro(e.value.map((e) => {
								if (!(e instanceof no)) throw new Error("items in map must be an object");
								const t = uo(e, n.value);
								return t instanceof lo ? s ?? new lo() : t;
							}));
						}
						throw new Error("`map` expressions without `attribute` set are not currently supported.");
					}
				}
				throw new Error(`Unknown ArrayValue filter: ${r}`);
			}
			if (e instanceof Ya) {
				switch (r) {
					case "indent": {
						const [t, r] = this.evaluateArguments(s.args, n), a = t.at(0) ?? r.get("width") ?? new Xa(4);
						if (!(a instanceof Xa)) throw new Error("width must be a number");
						const o = t.at(1) ?? r.get("first") ?? new Ka(!1), i = t.at(2) ?? r.get("blank") ?? new Ka(!1), l = e.value.split("\n"), c = " ".repeat(a.value);
						return new Ya(l.map((e, t) => !o.value && 0 === t || !i.value && 0 === e.length ? e : c + e).join("\n"));
					}
					case "replace": {
						const t = e.builtins.get("replace");
						if (!(t instanceof oo)) throw new Error("replace filter not available");
						const [r, a] = this.evaluateArguments(s.args, n);
						return t.value([...r, new so(a)], n);
					}
				}
				throw new Error(`Unknown StringValue filter: ${r}`);
			}
			if (e instanceof no) {
				const t = e.builtins.get(r);
				if (t && t instanceof oo) {
					const [e, r] = this.evaluateArguments(s.args, n);
					return r.size > 0 && e.push(new so(r)), t.value(e, n);
				}
				throw new Error(`Unknown ObjectValue filter: ${r}`);
			}
			throw new Error(`Cannot apply filter "${r}" to type: ${e.type}`);
		}
		throw new Error(`Unknown filter: ${t.type}`);
	}
	evaluateFilterExpression(e, t) {
		const n = this.evaluate(e.operand, t);
		return this.applyFilter(n, e.filter, t);
	}
	evaluateTestExpression(e, t) {
		const n = this.evaluate(e.operand, t), s = t.tests.get(e.test.value);
		if (!s) throw new Error(`Unknown test: ${e.test.value}`);
		const r = s(n);
		return new Ka(e.negate ? !r : r);
	}
	evaluateSelectExpression(e, t) {
		return this.evaluate(e.test, t).__bool__().value ? this.evaluate(e.lhs, t) : new lo();
	}
	evaluateUnaryExpression(e, t) {
		const n = this.evaluate(e.argument, t);
		if ("not" === e.operator.value) return new Ka(!n.value);
		throw new SyntaxError(`Unknown operator: ${e.operator.value}`);
	}
	evaluateTernaryExpression(e, t) {
		return this.evaluate(e.condition, t).__bool__().value ? this.evaluate(e.trueExpr, t) : this.evaluate(e.falseExpr, t);
	}
	evalProgram(e, t) {
		return this.evaluateBlock(e.body, t);
	}
	evaluateBlock(e, t) {
		let n = "";
		for (const s of e) {
			const e = this.evaluate(s, t);
			"NullValue" !== e.type && "UndefinedValue" !== e.type && (n += e.toString());
		}
		return new Ya(n);
	}
	evaluateIdentifier(e, t) {
		return t.lookupVariable(e.value);
	}
	evaluateCallExpression(e, t) {
		const [n, s] = this.evaluateArguments(e.args, t);
		s.size > 0 && n.push(new so(s));
		const r = this.evaluate(e.callee, t);
		if ("FunctionValue" !== r.type) throw new Error(`Cannot call something that is not a function: got ${r.type}`);
		return r.value(n, t);
	}
	evaluateSliceExpression(e, t, n) {
		if (!(e instanceof ro || e instanceof Ya)) throw new Error("Slice object must be an array or string");
		const s = this.evaluate(t.start, n), r = this.evaluate(t.stop, n), a = this.evaluate(t.step, n);
		if (!(s instanceof Xa || s instanceof lo)) throw new Error("Slice start must be numeric or undefined");
		if (!(r instanceof Xa || r instanceof lo)) throw new Error("Slice stop must be numeric or undefined");
		if (!(a instanceof Xa || a instanceof lo)) throw new Error("Slice step must be numeric or undefined");
		return e instanceof ro ? new ro(ja(e.value, s.value, r.value, a.value)) : new Ya(ja(Array.from(e.value), s.value, r.value, a.value).join(""));
	}
	evaluateMemberExpression(e, t) {
		const n = this.evaluate(e.object, t);
		let s, r;
		if (e.computed) {
			if ("SliceExpression" === e.property.type) return this.evaluateSliceExpression(n, e.property, t);
			s = this.evaluate(e.property, t);
		} else s = new Ya(e.property.value);
		if (n instanceof no) {
			if (!(s instanceof Ya)) throw new Error(`Cannot access property with non-string: got ${s.type}`);
			r = n.value.get(s.value) ?? n.builtins.get(s.value);
		} else if (n instanceof ro || n instanceof Ya) if (s instanceof Xa) r = n.value.at(s.value), n instanceof Ya && (r = new Ya(n.value.at(s.value)));
		else {
			if (!(s instanceof Ya)) throw new Error(`Cannot access property with non-string/non-number: got ${s.type}`);
			r = n.builtins.get(s.value);
		}
		else {
			if (!(s instanceof Ya)) throw new Error(`Cannot access property with non-string: got ${s.type}`);
			r = n.builtins.get(s.value);
		}
		return r instanceof Qa ? r : new lo();
	}
	evaluateSet(e, t) {
		const n = e.value ? this.evaluate(e.value, t) : this.evaluateBlock(e.body, t);
		if ("Identifier" === e.assignee.type) {
			const s = e.assignee.value;
			t.setVariable(s, n);
		} else if ("TupleLiteral" === e.assignee.type) {
			const s = e.assignee;
			if (!(n instanceof ro)) throw new Error(`Cannot unpack non-iterable type in set: ${n.type}`);
			const r = n.value;
			if (r.length !== s.value.length) throw new Error(`Too ${s.value.length > r.length ? "few" : "many"} items to unpack in set`);
			for (let e = 0; e < s.value.length; ++e) {
				const n = s.value[e];
				if ("Identifier" !== n.type) throw new Error(`Cannot unpack to non-identifier in set: ${n.type}`);
				t.setVariable(n.value, r[e]);
			}
		} else {
			if ("MemberExpression" !== e.assignee.type) throw new Error(`Invalid LHS inside assignment expression: ${JSON.stringify(e.assignee)}`);
			{
				const s = e.assignee, r = this.evaluate(s.object, t);
				if (!(r instanceof no)) throw new Error("Cannot assign to member of non-object");
				if ("Identifier" !== s.property.type) throw new Error("Cannot assign to member with non-identifier property");
				r.value.set(s.property.value, n);
			}
		}
		return new io();
	}
	evaluateIf(e, t) {
		const n = this.evaluate(e.test, t);
		return this.evaluateBlock(n.__bool__().value ? e.body : e.alternate, t);
	}
	evaluateFor(e, t) {
		const n = new co(t);
		let s, r;
		if ("SelectExpression" === e.iterable.type) {
			const t = e.iterable;
			r = this.evaluate(t.lhs, n), s = t.test;
		} else r = this.evaluate(e.iterable, n);
		if (!(r instanceof ro || r instanceof no)) throw new Error(`Expected iterable or object type in for loop: got ${r.type}`);
		r instanceof no && (r = r.keys());
		const a = [], o = [];
		for (let u = 0; u < r.value.length; ++u) {
			const t = new co(n), i = r.value[u];
			let l;
			if ("Identifier" === e.loopvar.type) l = (t) => t.setVariable(e.loopvar.value, i);
			else {
				if ("TupleLiteral" !== e.loopvar.type) throw new Error(`Invalid loop variable(s): ${e.loopvar.type}`);
				{
					const t = e.loopvar;
					if ("ArrayValue" !== i.type) throw new Error(`Cannot unpack non-iterable type: ${i.type}`);
					const n = i;
					if (t.value.length !== n.value.length) throw new Error(`Too ${t.value.length > n.value.length ? "few" : "many"} items to unpack`);
					l = (e) => {
						for (let s = 0; s < t.value.length; ++s) {
							if ("Identifier" !== t.value[s].type) throw new Error(`Cannot unpack non-identifier type: ${t.value[s].type}`);
							e.setVariable(t.value[s].value, n.value[s]);
						}
					};
				}
			}
			s && (l(t), !this.evaluate(s, t).__bool__().value) || (a.push(i), o.push(l));
		}
		let i = "", l = !0;
		for (let u = 0; u < a.length; ++u) {
			const t = new Map([
				["index", new Xa(u + 1)],
				["index0", new Xa(u)],
				["revindex", new Xa(a.length - u)],
				["revindex0", new Xa(a.length - u - 1)],
				["first", new Ka(0 === u)],
				["last", new Ka(u === a.length - 1)],
				["length", new Xa(a.length)],
				["previtem", u > 0 ? a[u - 1] : new lo()],
				["nextitem", u < a.length - 1 ? a[u + 1] : new lo()]
			]);
			n.setVariable("loop", new no(t)), o[u](n);
			try {
				i += this.evaluateBlock(e.body, n).value;
			} catch (c) {
				if (c instanceof Ha) continue;
				if (c instanceof Wa) break;
				throw c;
			}
			l = !1;
		}
		if (l) i += this.evaluateBlock(e.defaultBlock, n).value;
		return new Ya(i);
	}
	evaluateMacro(e, t) {
		return t.setVariable(e.name.value, new oo((t, n) => {
			const s = new co(n);
			let r;
			t = t.slice(), "KeywordArgumentsValue" === t.at(-1)?.type && (r = t.pop());
			for (let a = 0; a < e.args.length; ++a) {
				const n = e.args[a], o = t[a];
				if ("Identifier" === n.type) {
					const e = n;
					if (!o) throw new Error(`Missing positional argument: ${e.value}`);
					s.setVariable(e.value, o);
				} else {
					if ("KeywordArgumentExpression" !== n.type) throw new Error(`Unknown argument type: ${n.type}`);
					{
						const e = n, t = o ?? r?.value.get(e.key.value) ?? this.evaluate(e.value, s);
						s.setVariable(e.key.value, t);
					}
				}
			}
			return this.evaluateBlock(e.body, s);
		})), new io();
	}
	evaluateCallStatement(e, t) {
		const n = new oo((t, n) => {
			const s = new co(n);
			if (e.callerArgs) for (let r = 0; r < e.callerArgs.length; ++r) {
				const n = e.callerArgs[r];
				if ("Identifier" !== n.type) throw new Error(`Caller parameter must be an identifier, got ${n.type}`);
				s.setVariable(n.value, t[r] ?? new lo());
			}
			return this.evaluateBlock(e.body, s);
		}), [s, r] = this.evaluateArguments(e.call.args, t);
		s.push(new so(r));
		const a = this.evaluate(e.call.callee, t);
		if ("FunctionValue" !== a.type) throw new Error(`Cannot call something that is not a function: got ${a.type}`);
		const o = new co(t);
		return o.setVariable("caller", n), a.value(s, o);
	}
	evaluateFilterStatement(e, t) {
		const n = this.evaluateBlock(e.body, t);
		return this.applyFilter(n, e.filter, t);
	}
	evaluate(e, t) {
		if (!e) return new lo();
		switch (e.type) {
			case "Program": return this.evalProgram(e, t);
			case "Set": return this.evaluateSet(e, t);
			case "If": return this.evaluateIf(e, t);
			case "For": return this.evaluateFor(e, t);
			case "Macro": return this.evaluateMacro(e, t);
			case "CallStatement": return this.evaluateCallStatement(e, t);
			case "Break": throw new Wa();
			case "Continue": throw new Ha();
			case "IntegerLiteral": return new Xa(e.value);
			case "FloatLiteral": return new Ja(e.value);
			case "StringLiteral": return new Ya(e.value);
			case "ArrayLiteral": return new ro(e.value.map((e) => this.evaluate(e, t)));
			case "TupleLiteral": return new ao(e.value.map((e) => this.evaluate(e, t)));
			case "ObjectLiteral": {
				const n = /* @__PURE__ */ new Map();
				for (const [s, r] of e.value) {
					const e = this.evaluate(s, t);
					if (!(e instanceof Ya)) throw new Error(`Object keys must be strings: got ${e.type}`);
					n.set(e.value, this.evaluate(r, t));
				}
				return new no(n);
			}
			case "Identifier": return this.evaluateIdentifier(e, t);
			case "CallExpression": return this.evaluateCallExpression(e, t);
			case "MemberExpression": return this.evaluateMemberExpression(e, t);
			case "UnaryExpression": return this.evaluateUnaryExpression(e, t);
			case "BinaryExpression": return this.evaluateBinaryExpression(e, t);
			case "FilterExpression": return this.evaluateFilterExpression(e, t);
			case "FilterStatement": return this.evaluateFilterStatement(e, t);
			case "TestExpression": return this.evaluateTestExpression(e, t);
			case "SelectExpression": return this.evaluateSelectExpression(e, t);
			case "Ternary": return this.evaluateTernaryExpression(e, t);
			case "Comment": return new io();
			default: throw new SyntaxError(`Unknown node type: ${e.type}`);
		}
	}
};
function po(e) {
	switch (typeof e) {
		case "number": return Number.isInteger(e) ? new Xa(e) : new Ja(e);
		case "string": return new Ya(e);
		case "boolean": return new Ka(e);
		case "undefined": return new lo();
		case "object": return null === e ? new io() : Array.isArray(e) ? new ro(e.map(po)) : new no(new Map(Object.entries(e).map(([e, t]) => [e, po(t)])));
		case "function": return new oo((t, n) => po(e(...t.map((e) => e.value)) ?? null));
		default: throw new Error(`Cannot convert to runtime value: ${e}`);
	}
}
var fo = "\n";
function mo(...e) {
	return "{%- " + e.join(" ") + " -%}";
}
function go(e, t, n) {
	return e.map((e) => function(e, t, n) {
		const s = n.repeat(t);
		switch (e.type) {
			case "Program": return go(e.body, t, n);
			case "If": return function(e, t, n) {
				const s = n.repeat(t), r = [];
				let a = e;
				for (; a && (r.push({
					test: a.test,
					body: a.body
				}), 1 === a.alternate.length && "If" === a.alternate[0].type);) a = a.alternate[0];
				let o = s + mo("if", wo(r[0].test)) + fo + go(r[0].body, t + 1, n);
				for (let i = 1; i < r.length; ++i) o += fo + s + mo("elif", wo(r[i].test)) + fo + go(r[i].body, t + 1, n);
				a && a.alternate.length > 0 && (o += fo + s + mo("else") + fo + go(a.alternate, t + 1, n));
				return o += fo + s + mo("endif"), o;
			}(e, t, n);
			case "For": return function(e, t, n) {
				const s = n.repeat(t);
				let r = "";
				if ("SelectExpression" === e.iterable.type) {
					const t = e.iterable;
					r = `${wo(t.lhs)} if ${wo(t.test)}`;
				} else r = wo(e.iterable);
				let a = s + mo("for", wo(e.loopvar), "in", r) + fo + go(e.body, t + 1, n);
				e.defaultBlock.length > 0 && (a += fo + s + mo("else") + fo + go(e.defaultBlock, t + 1, n));
				return a += fo + s + mo("endfor"), a;
			}(e, t, n);
			case "Set": return function(e, t, n) {
				const s = n.repeat(t), r = wo(e.assignee), a = e.value ? wo(e.value) : "", o = s + mo("set", `${r}${e.value ? " = " + a : ""}`);
				return 0 === e.body.length ? o : o + fo + go(e.body, t + 1, n) + fo + s + mo("endset");
			}(e, t, n);
			case "Macro": return function(e, t, n) {
				const s = n.repeat(t), r = e.args.map(wo).join(", ");
				return s + mo("macro", `${e.name.value}(${r})`) + fo + go(e.body, t + 1, n) + fo + s + mo("endmacro");
			}(e, t, n);
			case "Break": return s + mo("break");
			case "Continue": return s + mo("continue");
			case "CallStatement": return function(e, t, n) {
				const s = n.repeat(t), r = e.callerArgs && e.callerArgs.length > 0 ? `(${e.callerArgs.map(wo).join(", ")})` : "", a = wo(e.call);
				let o = s + mo(`call${r}`, a) + fo;
				return o += go(e.body, t + 1, n) + fo, o += s + mo("endcall"), o;
			}(e, t, n);
			case "FilterStatement": return function(e, t, n) {
				const s = n.repeat(t);
				let r = s + mo("filter", "Identifier" === e.filter.type ? e.filter.value : wo(e.filter)) + fo;
				return r += go(e.body, t + 1, n) + fo, r += s + mo("endfilter"), r;
			}(e, t, n);
			case "Comment": return s + "{# " + e.value + " #}";
			default: return s + "{{- " + wo(e) + " -}}";
		}
	}(e, t, n)).join(fo);
}
function wo(e, t = -1) {
	switch (e.type) {
		case "SpreadExpression": return `*${wo(e.argument)}`;
		case "Identifier": return e.value;
		case "IntegerLiteral":
		case "FloatLiteral": return `${e.value}`;
		case "StringLiteral": return JSON.stringify(e.value);
		case "BinaryExpression": {
			const n = e, s = function(e) {
				switch (e.operator.type) {
					case "MultiplicativeBinaryOperator": return 4;
					case "AdditiveBinaryOperator": return 3;
					case "ComparisonBinaryOperator": return 2;
					case "Identifier": return "and" === e.operator.value ? 1 : "in" === e.operator.value || "not in" === e.operator.value ? 2 : 0;
				}
				return 0;
			}(n), r = wo(n.left, s), a = wo(n.right, s + 1), o = `${r} ${n.operator.value} ${a}`;
			return s < t ? `(${o})` : o;
		}
		case "UnaryExpression": {
			const t = e;
			return t.operator.value + ("not" === t.operator.value ? " " : "") + wo(t.argument, Infinity);
		}
		case "CallExpression": {
			const t = e, n = t.args.map(wo).join(", ");
			return `${wo(t.callee)}(${n})`;
		}
		case "MemberExpression": {
			const t = e;
			let n = wo(t.object);
			[
				"Identifier",
				"MemberExpression",
				"CallExpression",
				"StringLiteral",
				"IntegerLiteral",
				"FloatLiteral",
				"ArrayLiteral",
				"TupleLiteral",
				"ObjectLiteral"
			].includes(t.object.type) || (n = `(${n})`);
			let s = wo(t.property);
			return t.computed || "Identifier" === t.property.type || (s = `(${s})`), t.computed ? `${n}[${s}]` : `${n}.${s}`;
		}
		case "FilterExpression": {
			const t = e, n = wo(t.operand, Infinity);
			return "CallExpression" === t.filter.type ? `${n} | ${wo(t.filter)}` : `${n} | ${t.filter.value}`;
		}
		case "SelectExpression": {
			const t = e;
			return `${wo(t.lhs)} if ${wo(t.test)}`;
		}
		case "TestExpression": {
			const t = e;
			return `${wo(t.operand)} is${t.negate ? " not" : ""} ${t.test.value}`;
		}
		case "ArrayLiteral":
		case "TupleLiteral": {
			const t = e.value.map(wo), n = "ArrayLiteral" === e.type ? "[]" : "()";
			return `${n[0]}${t.join(", ")}${n[1]}`;
		}
		case "ObjectLiteral": return `{${Array.from(e.value.entries()).map(([e, t]) => `${wo(e)}: ${wo(t)}`).join(", ")}}`;
		case "SliceExpression": {
			const t = e;
			return `${t.start ? wo(t.start) : ""}:${t.stop ? wo(t.stop) : ""}${t.step ? `:${wo(t.step)}` : ""}`;
		}
		case "KeywordArgumentExpression": {
			const t = e;
			return `${t.key.value}=${wo(t.value)}`;
		}
		case "Ternary": {
			const n = e, s = `${wo(n.trueExpr)} if ${wo(n.condition, 0)} else ${wo(n.falseExpr)}`;
			return t > -1 ? `(${s})` : s;
		}
		default: throw new Error(`Unknown expression type: ${e.type}`);
	}
}
var yo = class {
	parsed;
	constructor(e) {
		const t = function(e, t = {}) {
			const n = [], s = function(e, t = {}) {
				return e.endsWith("\n") && (e = e.slice(0, -1)), t.lstrip_blocks && (e = e.replace(/^[ \t]*({[#%-])/gm, "$1")), t.trim_blocks && (e = e.replace(/([#%-]})\n/g, "$1")), e.replace(/{%\s*(end)?generation\s*%}/gs, "");
			}(e, t);
			let r = 0, a = 0;
			const o = (e) => {
				let t = "";
				for (; e(s[r]);) {
					if ("\\" === s[r]) {
						if (++r, r >= s.length) throw new SyntaxError("Unexpected end of input");
						const e = s[r++], n = ua.get(e);
						if (void 0 === n) throw new SyntaxError(`Unexpected escaped character: ${e}`);
						t += n;
						continue;
					}
					if (t += s[r++], r >= s.length) throw new SyntaxError("Unexpected end of input");
				}
				return t;
			}, i = () => {
				const e = n.at(-1);
				e && e.type === ra.Text && (e.value = e.value.trimEnd(), "" === e.value && n.pop());
			}, l = () => {
				for (; r < s.length && la(s[r]);) ++r;
			};
			e: for (; r < s.length;) {
				const e = n.at(-1)?.type;
				if (void 0 === e || e === ra.CloseStatement || e === ra.CloseExpression || e === ra.Comment) {
					let e = "";
					for (; r < s.length && ("{" !== s[r] || "%" !== s[r + 1] && "{" !== s[r + 1] && "#" !== s[r + 1]);) e += s[r++];
					if (e.length > 0) {
						n.push(new aa(e, ra.Text));
						continue;
					}
				}
				if ("{" === s[r] && "#" === s[r + 1]) {
					r += 2;
					const e = "-" === s[r];
					e && ++r;
					let t = "";
					for (; "#" !== s[r] || "}" !== s[r + 1];) {
						if (r + 2 >= s.length) throw new SyntaxError("Missing end of comment tag");
						t += s[r++];
					}
					const a = t.endsWith("-");
					a && (t = t.slice(0, -1)), e && i(), n.push(new aa(t, ra.Comment)), r += 2, a && l();
					continue;
				}
				if ("{%-" === s.slice(r, r + 3)) {
					i(), n.push(new aa("{%", ra.OpenStatement)), r += 3;
					continue;
				}
				if ("{{-" === s.slice(r, r + 3)) {
					i(), n.push(new aa("{{", ra.OpenExpression)), a = 0, r += 3;
					continue;
				}
				if (o(la), "-%}" === s.slice(r, r + 3)) {
					n.push(new aa("%}", ra.CloseStatement)), r += 3, l();
					continue;
				}
				if ("-}}" === s.slice(r, r + 3)) {
					n.push(new aa("}}", ra.CloseExpression)), r += 3, l();
					continue;
				}
				const t = s[r];
				if ("-" === t || "+" === t) {
					const e = n.at(-1)?.type;
					if (e === ra.Text || void 0 === e) throw new SyntaxError(`Unexpected character: ${t}`);
					switch (e) {
						case ra.Identifier:
						case ra.NumericLiteral:
						case ra.StringLiteral:
						case ra.CloseParen:
						case ra.CloseSquareBracket: break;
						default: {
							++r;
							const e = o(ia);
							n.push(new aa(`${t}${e}`, e.length > 0 ? ra.NumericLiteral : ra.UnaryOperator));
							continue;
						}
					}
				}
				for (const [o, i] of ca) if (!("}}" === o && a > 0) && s.slice(r, r + o.length) === o) {
					n.push(new aa(o, i)), i === ra.OpenExpression ? a = 0 : i === ra.OpenCurlyBracket ? ++a : i === ra.CloseCurlyBracket && --a, r += o.length;
					continue e;
				}
				if ("'" === t || "\"" === t) {
					++r;
					const e = o((e) => e !== t);
					n.push(new aa(e, ra.StringLiteral)), ++r;
					continue;
				}
				if (ia(t)) {
					let e = o(ia);
					"." === s[r] && ia(s[r + 1]) && (++r, e = `${e}.${o(ia)}`), n.push(new aa(e, ra.NumericLiteral));
					continue;
				}
				if (oa(t)) {
					const e = o(oa);
					n.push(new aa(e, ra.Identifier));
					continue;
				}
				throw new SyntaxError(`Unexpected character: ${t}`);
			}
			return n;
		}(e, {
			lstrip_blocks: !0,
			trim_blocks: !0
		});
		this.parsed = Ua(t);
	}
	render(e) {
		const t = new co();
		if (function(e) {
			e.set("false", !1), e.set("true", !0), e.set("none", null), e.set("raise_exception", (e) => {
				throw new Error(e);
			}), e.set("range", Va), e.set("strftime_now", qa), e.set("True", !0), e.set("False", !1), e.set("None", null);
		}(t), e) for (const [n, s] of Object.entries(e)) t.set(n, s);
		return new _o(t).run(this.parsed).value;
	}
	format(e) {
		return function(e, t = "	") {
			const n = "number" == typeof t ? " ".repeat(t) : t;
			return go(e.body, 0, n).replace(/\n$/, "");
		}(this.parsed, e?.indent || "	");
	}
}, bo = {
	txt: "text/plain",
	html: "text/html",
	css: "text/css",
	js: "text/javascript",
	json: "application/json",
	png: "image/png",
	jpg: "image/jpeg",
	jpeg: "image/jpeg",
	gif: "image/gif"
}, xo = class e {
	constructor(e) {
		if (this.filePath = e, this.headers = new Headers(), this.exists = Hn.existsSync(e), this.exists) {
			this.status = 200, this.statusText = "OK";
			let t = Hn.statSync(e);
			this.headers.set("content-length", t.size.toString()), this.updateContentType();
			const n = Hn.createReadStream(e);
			this.body = new ReadableStream({
				start(e) {
					n.on("data", (t) => e.enqueue(t)), n.on("end", () => e.close()), n.on("error", (t) => e.error(t));
				},
				cancel() {
					n.destroy();
				}
			});
		} else this.status = 404, this.statusText = "Not Found", this.body = null;
	}
	updateContentType() {
		const e = this.filePath.toString().split(".").pop().toLowerCase();
		this.headers.set("content-type", bo[e] ?? "application/octet-stream");
	}
	clone() {
		let t = new e(this.filePath);
		return t.exists = this.exists, t.status = this.status, t.statusText = this.statusText, t.headers = new Headers(this.headers), t;
	}
	async arrayBuffer() {
		return (await Hn.promises.readFile(this.filePath)).buffer;
	}
	async blob() {
		const e = await Hn.promises.readFile(this.filePath);
		return new Blob([e], { type: this.headers.get("content-type") });
	}
	async text() {
		return await Hn.promises.readFile(this.filePath, "utf8");
	}
	async json() {
		return JSON.parse(await this.text());
	}
}, vo = class {
	constructor(e) {
		this._mt = new Uint32Array(624), this._idx = 625, this._gauss_next = null, this._random_fn = this.random.bind(this), this.seed(e);
	}
	seed(e) {
		if (null == e) if (hs.IS_CRYPTO_AVAILABLE) {
			const t = new Uint32Array(1);
			crypto.getRandomValues(t), e = t[0];
		} else e = Date.now() >>> 0;
		const t = this._mt, n = (e, t) => Math.imul(e, t) >>> 0, s = [];
		for (let o = e || 0; o > 0; o = Math.floor(o / 4294967296)) s.push(4294967295 & o);
		s.length || s.push(0), t[0] = 19650218;
		for (let o = 1; o < 624; ++o) t[o] = n(1812433253, t[o - 1] ^ t[o - 1] >>> 30) + o >>> 0;
		let r = 1, a = 0;
		for (let o = Math.max(624, s.length); o > 0; --o, ++r, ++a) r >= 624 && (t[0] = t[623], r = 1), a >= s.length && (a = 0), t[r] = (t[r] ^ n(t[r - 1] ^ t[r - 1] >>> 30, 1664525)) + s[a] + a >>> 0;
		for (let o = 623; o > 0; --o, ++r) r >= 624 && (t[0] = t[623], r = 1), t[r] = (t[r] ^ n(t[r - 1] ^ t[r - 1] >>> 30, 1566083941)) - r >>> 0;
		t[0] = 2147483648, this._idx = 624, this._gauss_next = null;
	}
	_int32() {
		const e = this._mt;
		if (this._idx >= 624) {
			for (let t = 0; t < 624; ++t) {
				const n = 2147483648 & e[t] | 2147483647 & e[(t + 1) % 624];
				e[t] = (e[(t + 397) % 624] ^ n >>> 1 ^ (1 & n ? 2567483615 : 0)) >>> 0;
			}
			this._idx = 0;
		}
		let t = e[this._idx++];
		return t ^= t >>> 11, t ^= t << 7 & 2636928640, t ^= t << 15 & 4022730752, t ^= t >>> 18, t >>> 0;
	}
	random() {
		return (67108864 * (this._int32() >>> 5) + (this._int32() >>> 6)) / 9007199254740992;
	}
	gauss(e = 0, t = 1) {
		let n = this._gauss_next;
		if (this._gauss_next = null, null === n) {
			const e = 2 * this.random() * Math.PI, t = Math.sqrt(-2 * Math.log(1 - this.random()));
			n = Math.cos(e) * t, this._gauss_next = Math.sin(e) * t;
		}
		return e + n * t;
	}
	shuffle(e) {
		for (let t = e.length - 1; t > 0; --t) {
			const n = 32 - Math.clz32(t + 1);
			let s = this._int32() >>> 32 - n;
			for (; s > t;) s = this._int32() >>> 32 - n;
			const r = e[t];
			e[t] = e[s], e[s] = r;
		}
	}
	choices(e, t) {
		return e[Mo(this._random_fn, t)];
	}
};
function Mo(e, t) {
	let n = 0;
	for (let r = 0; r < t.length; ++r) n += t[r];
	let s = e() * n;
	for (let r = 0; r < t.length; ++r) if (s -= t[r], s < 0) return r;
	return t.length - 1;
}
var ko = new vo(), Eo = Object.freeze({
	Random: vo,
	seed: ko.seed.bind(ko),
	random: ko.random.bind(ko),
	gauss: ko.gauss.bind(ko),
	shuffle: ko.shuffle.bind(ko),
	choices: ko.choices.bind(ko)
}), Ao = new vo(), Co = class {
	constructor(e) {
		this.path = e;
	}
	async match(e) {
		let t = new xo(Qn.join(this.path, e));
		return t.exists ? t : void 0;
	}
	async put(e, t, n = void 0) {
		const s = Qn.join(this.path, e), r = s + `.tmp.${hs.IS_PROCESS_AVAILABLE ? process.pid : Date.now()}.${Ao._int32().toString(36)}`;
		try {
			const e = t.headers.get("Content-Length"), a = parseInt(e ?? "0");
			let o = 0;
			await Hn.promises.mkdir(Qn.dirname(s), { recursive: !0 });
			const i = Hn.createWriteStream(r), l = t.body.getReader();
			for (;;) {
				const { done: e, value: t } = await l.read();
				if (e) break;
				await new Promise((e, n) => {
					i.write(t, (t) => {
						t ? n(t) : e();
					});
				}), o += t.length;
				const s = a ? o / a * 100 : 0;
				n?.({
					progress: s,
					loaded: o,
					total: a
				});
			}
			await new Promise((e, t) => {
				i.close((n) => n ? t(n) : e());
			}), await Hn.promises.rename(r, s);
		} catch (a) {
			try {
				await Hn.promises.unlink(r);
			} catch {}
			throw a;
		}
	}
	async delete(e) {
		let t = Qn.join(this.path, e);
		try {
			return await Hn.promises.unlink(t), !0;
		} catch (n) {
			return !1;
		}
	}
}, To = {
	400: "Bad request error occurred while trying to load file",
	401: "Unauthorized access to file",
	403: "Forbidden access to file",
	404: "Could not locate file",
	408: "Request timeout error occurred while trying to load file",
	500: "Internal server error error occurred while trying to load file",
	502: "Bad gateway error occurred while trying to load file",
	503: "Service unavailable error occurred while trying to load file",
	504: "Gateway timeout error occurred while trying to load file"
}, So = /^(\b[\w\-.]+\b\/)?\b[\w\-.]{1,96}\b$/;
function Fo(...e) {
	return (e = e.map((t, n) => (n && (t = t.replace(/* @__PURE__ */ new RegExp("^/"), "")), n !== e.length - 1 && (t = t.replace(/* @__PURE__ */ new RegExp("/$"), "")), t))).join("/");
}
function Io(e, t = null, n = null) {
	let s;
	try {
		s = new URL(e);
	} catch (r) {
		return !1;
	}
	return !(t && !t.includes(s.protocol)) && !(n && !n.includes(s.hostname));
}
function Po(e) {
	return Io(e, ["blob:"]);
}
function Lo(e) {
	let t;
	if ("undefined" != typeof location && location.href) t = location.href;
	else {
		if (!import.meta.url) return e;
		t = import.meta.url;
	}
	return new URL(e, t).href;
}
var Oo = "SHA-256", zo = (e) => ({
	algorithm: Oo,
	value: e
}), No = class {
	#e = null;
	_getHashCache = () => (this.#e ??= caches.open("experimental_transformers-hash-cache"), this.#e);
	static isAvailable = () => "undefined" != typeof navigator && "crossOriginStorage" in navigator;
	match = async (e) => {
		const t = await this._getFileHash(e);
		if (t) try {
			const [e] = await navigator.crossOriginStorage.requestFileHandles([zo(t)]), n = await e.getFile();
			return new Response(n, { headers: { "Content-Length": String(n.size) } });
		} catch {
			return;
		}
	};
	put = async (e, t) => {
		const n = await this._getFileHash(e);
		if (n) {
			const e = await t.blob();
			await this._storeBlobInCOS(e, n);
		} else this._processAndStore(e, t.body);
	};
	_storeBlobInCOS = async (e, t) => {
		const [n] = await navigator.crossOriginStorage.requestFileHandles([zo(t)], { create: !0 }), s = await n.createWritable();
		await s.write(e), await s.close();
	};
	_processAndStore = async (e, t) => {
		try {
			const n = [];
			for await (const e of t) n.push(e);
			const s = new Blob(n), r = await this._getBlobHash(s);
			await this._storeBlobInCOS(s, r);
			try {
				await (await this._getHashCache()).put(e, new Response(r));
			} catch {}
		} catch {}
	};
	delete = async (e) => {
		try {
			return await (await this._getHashCache()).delete(e);
		} catch {
			return !1;
		}
	};
	_getFileHash = async (e) => {
		try {
			const t = await this._getHashCache(), n = await t.match(e);
			if (n) return n.text();
			const s = await this._getLfsFileHash(e);
			return s ? (await t.put(e, new Response(s)), s) : null;
		} catch {
			return null;
		}
	};
	_getLfsFileHash = async (e) => {
		if (!e.includes("/resolve/")) return null;
		const t = e.replace("/resolve/", "/raw/");
		try {
			const e = (await fetch(t).then((e) => e.text())).match(/^oid sha256:([0-9a-f]+)$/m);
			return e ? e[1] : null;
		} catch {
			return null;
		}
	};
	_getBlobHash = async (e) => {
		const t = await e.arrayBuffer(), n = await crypto.subtle.digest(Oo, t);
		return Array.from(new Uint8Array(n)).map((e) => e.toString(16).padStart(2, "0")).join("");
	};
};
async function Bo(e = null) {
	let t = null;
	if (xs.useCustomCache) {
		if (!xs.customCache) throw Error("`env.useCustomCache=true`, but `env.customCache` is not defined.");
		if (!xs.customCache.match || !xs.customCache.put) throw new Error("`env.customCache` must be an object which implements the `match` and `put` functions of the Web Cache API. For more information, see https://developer.mozilla.org/en-US/docs/Web/API/Cache");
		t = xs.customCache;
	}
	if (!t && xs.experimental_useCrossOriginStorage && No.isAvailable() && (t = new No()), !t && xs.useBrowserCache) {
		if ("undefined" == typeof caches) throw Error("Browser cache is not available in this environment.");
		try {
			t = await caches.open(xs.cacheKey);
		} catch (n) {
			Os.warn("An error occurred while opening the browser cache:", n);
		}
	}
	if (!t && xs.useFSCache) {
		if (!hs.IS_FS_AVAILABLE) throw Error("File System Cache is not available in this environment.");
		t = new Co(e ?? xs.cacheDir);
	}
	return t;
}
var $o = new class {
	#t;
	#n;
	constructor(e) {
		this.#t = e, this.#n = /* @__PURE__ */ new Map();
	}
	get(e) {
		if (!this.#n.has(e)) return;
		const t = this.#n.get(e);
		return this.#n.delete(e), this.#n.set(e, t), t;
	}
	put(e, t) {
		this.#n.has(e) && this.#n.delete(e), this.#n.set(e, t), this.#n.size > this.#t && this.#n.delete(this.#n.keys().next().value);
	}
	delete(e) {
		return this.#n.delete(e);
	}
	clear() {
		this.#n.clear();
	}
}(100);
function Do(e, t) {
	const n = $o.get(e);
	if (void 0 !== n) return n;
	const s = t().then((e) => e, (t) => ($o.delete(e), Promise.reject(t)));
	return $o.put(e, s), s;
}
function Ro(e, t, n = {}) {
	return Do(JSON.stringify([
		e,
		t,
		n?.revision,
		n?.cache_dir,
		n?.local_files_only
	]), () => async function(e, t, n) {
		const s = await Bo(n?.cache_dir), { localPath: r, remoteURL: a, proposedCacheKey: o, validModelId: i } = Vo(e, t, n, s), l = await jo(s, r, o);
		if (void 0 !== l && "string" != typeof l) {
			const e = l.headers.get("content-length"), t = l.headers.get("content-type");
			return {
				exists: !0,
				size: e ? parseInt(e, 10) : void 0,
				contentType: t || void 0,
				fromCache: !0
			};
		}
		if (xs.allowLocalModels && !Io(r, ["http:", "https:"])) try {
			const e = await Go(r);
			if ("string" != typeof e && 404 !== e.status) {
				const t = e.headers.get("content-length"), n = e.headers.get("content-type");
				return {
					exists: !0,
					size: t ? parseInt(t, 10) : void 0,
					contentType: n || void 0,
					fromCache: !1
				};
			}
		} catch (c) {}
		if (xs.allowRemoteModels && !n.local_files_only && i) try {
			const e = await async function(e) {
				if (!Io(e, ["http:", "https:"])) return null;
				const t = Uo(e);
				return t.set("Range", "bytes=0-0"), xs.fetch(e, {
					method: "GET",
					headers: t,
					cache: "no-store"
				});
			}(a);
			if (e && e.status >= 200 && e.status < 300) {
				let t;
				const n = e.headers.get("content-type");
				if (206 === e.status) {
					const n = e.headers.get("content-range");
					if (n) {
						const e = n.match(/bytes \d+-\d+\/(\d+)/);
						e && (t = parseInt(e[1], 10));
					}
				} else if (200 === e.status) try {
					await e.body?.cancel();
				} catch (u) {}
				if (void 0 === t) {
					const n = e.headers.get("content-length");
					t = n ? parseInt(n, 10) : void 0;
				}
				return {
					exists: !0,
					size: t,
					contentType: n || void 0,
					fromCache: !1
				};
			}
		} catch (c) {
			Os.warn(`Unable to fetch file metadata for "${a}": ${c}`);
		}
		return {
			exists: !1,
			fromCache: !1
		};
	}(e, t, n));
}
async function Go(e) {
	return xs.useFS && !Io(e, [
		"http:",
		"https:",
		"blob:"
	]) ? new xo(e instanceof URL ? "file:" === e.protocol ? e.pathname : e.toString() : e) : xs.fetch(e, { headers: Uo(e) });
}
function Uo(e) {
	const t = "undefined" != typeof process && "node" === process?.release?.name, n = new Headers();
	if (t) {
		const t = !!{}?.TESTING_REMOTELY, s = xs.version;
		if (n.set("User-Agent", `transformers.js/${s}; is_ci/${t};`), Io(e, ["http:", "https:"], ["huggingface.co", "hf.co"])) {
			const e = {}?.HF_TOKEN ?? {}?.HF_ACCESS_TOKEN;
			e && n.set("Authorization", `Bearer ${e}`);
		}
	}
	return n;
}
function Vo(e, t, n = {}, s = null) {
	const r = n.revision ?? "main", a = Fo(e, t), o = (i = e, !(!So.test(i) || i.includes("..") || i.includes("--") || i.endsWith(".git") || i.endsWith(".ipynb")));
	var i;
	const l = o ? Fo(xs.localModelPath, a) : a, c = Fo(xs.remoteHost, xs.remotePathTemplate.replaceAll("{model}", e).replaceAll("{revision}", encodeURIComponent(r)), t);
	return {
		requestURL: a,
		localPath: l,
		remoteURL: c,
		proposedCacheKey: s instanceof Co ? "main" === r ? a : Fo(e, r, t) : c,
		validModelId: o
	};
}
async function jo(e, t, n) {
	if (e) return await async function(e, ...t) {
		for (let s of t) try {
			let t = await e.match(s);
			if (t) return t;
		} catch (n) {
			continue;
		}
	}(e, t, n);
}
async function qo(e, t, n = !0, s = {}, r = !1, a = null) {
	const { requestURL: o, localPath: i, remoteURL: l, proposedCacheKey: c, validModelId: u } = Vo(e, t, s, a);
	let d, h, _ = !1;
	h = await jo(a, i, c);
	const p = void 0 !== h;
	if (p) d = c;
	else {
		if (xs.allowLocalModels) if (Io(o, ["http:", "https:"])) {
			if (s.local_files_only) throw new Error(`\`local_files_only=true\`, but attempted to load a remote file from: ${o}.`);
			if (!xs.allowRemoteModels) throw new Error(`\`env.allowRemoteModels=false\`, but attempted to load a remote file from: ${o}.`);
		} else try {
			h = await Go(i), d = i;
		} catch (g) {
			Os.warn(`Unable to load from local path "${i}": "${g}"`);
		}
		if (void 0 === h || "string" != typeof h && 404 === h.status) {
			if (s.local_files_only || !xs.allowRemoteModels) {
				if (n) throw Error(`\`local_files_only=true\` or \`env.allowRemoteModels=false\` and file was not found locally at "${i}".`);
				return null;
			}
			if (!u) throw Error(`Local file missing at "${i}" and download aborted due to invalid model ID "${e}".`);
			if (h = await Go(l), 200 !== h.status) return function(e, t, n) {
				if (!n) return null;
				throw Error(`${To[e] ?? `Error (${e}) occurred while trying to load file`}: "${t}".`);
			}(h.status, l, n);
			d = c;
		}
		_ = a && "undefined" != typeof Response && h instanceof Response && 200 === h.status;
	}
	let f;
	if (ks(s.progress_callback, {
		status: "download",
		name: e,
		file: t
	}), hs.IS_NODE_ENV && r);
	else {
		let n;
		if ("string" != typeof h) if (s.progress_callback) if (p && "undefined" != typeof navigator && /firefox/i.test(navigator.userAgent)) n = new Uint8Array(await h.arrayBuffer()), ks(s.progress_callback, {
			status: "progress",
			name: e,
			file: t,
			progress: 100,
			loaded: n.length,
			total: n.length
		});
		else {
			let r;
			const a = h.headers.get("content-length");
			if (a) r = parseInt(a, 10);
			else try {
				const n = await Ro(e, t, s);
				n.size && (r = n.size);
			} catch (g) {}
			n = await async function(e, t, n) {
				const s = e.headers.get("Content-Length");
				let r = s ? parseInt(s, 10) : n ?? 0;
				null !== s || n || Os.warn("Unable to determine content-length from response headers. Will expand buffer when needed.");
				let a = new Uint8Array(r), o = 0;
				const i = e.body.getReader();
				return await async function e() {
					const { done: n, value: s } = await i.read();
					if (n) return;
					const l = o + s.length;
					if (l > r) {
						r = l;
						const e = new Uint8Array(r);
						e.set(a), a = e;
					}
					return a.set(s, o), o = l, t({
						progress: o / r * 100,
						loaded: o,
						total: r
					}), e();
				}(), a;
			}(h, (n) => {
				ks(s.progress_callback, {
					status: "progress",
					name: e,
					file: t,
					...n
				});
			}, r);
		}
		else n = new Uint8Array(await h.arrayBuffer());
		f = n;
	}
	if (_ && d && "string" != typeof h && await async function(e, t, n, s, r, a, o = {}) {
		if (void 0 === await n.match(s)) if (a) {
			if ("string" != typeof r) {
				const e = new Headers(r.headers);
				e.set("content-length", a.byteLength.toString()), await n.put(s, new Response(a, { headers: e })).catch((e) => {
					Os.warn(`Unable to add response to browser cache: ${e}.`);
				});
			}
		} else {
			const a = o.progress_callback ? (n) => ks(o.progress_callback, {
				status: "progress",
				name: e,
				file: t,
				...n
			}) : void 0;
			await n.put(s, r, a);
		}
	}(e, t, a, d, h, f, s), hs.IS_NODE_ENV && r && s.progress_callback && "string" != typeof h) {
		const n = parseInt(h.headers.get("content-length"), 10) || 0;
		ks(s.progress_callback, {
			status: "progress",
			name: e,
			file: t,
			progress: 100,
			loaded: n,
			total: n
		});
	}
	if (ks(s.progress_callback, {
		status: "done",
		name: e,
		file: t
	}), f) {
		if (!hs.IS_NODE_ENV && r) throw new Error("Cannot return path in a browser environment.");
		return f;
	}
	if (h instanceof xo) return h.filePath;
	const m = await a?.match(d);
	if (m instanceof xo) return m.filePath;
	if (m instanceof Response) return new Uint8Array(await m.arrayBuffer());
	if ("string" == typeof m) return m;
	throw new Error("Unable to get model file path or buffer.");
}
var Wo = /* @__PURE__ */ new Map();
async function Ho(e, t, n = !0, s = {}, r = !1) {
	if (!xs.allowLocalModels) {
		if (s.local_files_only) throw Error("Invalid configuration detected: local models are disabled (`env.allowLocalModels=false`) but you have requested to only use local models (`local_files_only=true`).");
		if (!xs.allowRemoteModels) throw Error("Invalid configuration detected: both local and remote models are disabled. Fix by setting `env.allowLocalModels` or `env.allowRemoteModels` to `true`.");
	}
	ks(s.progress_callback, {
		status: "initiate",
		name: e,
		file: t
	});
	const a = `${e}::${t}`;
	let o = Wo.get(a);
	return o || (o = qo(e, t, n, s, r, await Bo(s?.cache_dir)).then((e) => (Wo.delete(a), e), (e) => {
		throw Wo.delete(a), e;
	}), Wo.set(a, o)), await o;
}
async function Qo(e, t, n = !0, s = {}) {
	const r = await Ho(e, t, n, s, !1);
	return null === r ? null : new TextDecoder("utf-8").decode(r);
}
async function Xo(e, t, n = !0, s = {}) {
	const r = await Qo(e, t, n, s);
	return null === r ? {} : JSON.parse(r);
}
function Jo(e) {
	const t = Zo(e)[0], n = e.map((e) => Math.exp(e - t)), s = n.reduce((e, t) => e + t, 0);
	return n.map((e) => e / s);
}
function Yo(e) {
	const t = Zo(e)[0];
	let n = 0;
	for (let r = 0; r < e.length; ++r) n += Math.exp(e[r] - t);
	const s = Math.log(n);
	return e.map((e) => e - t - s);
}
function Ko(e) {
	if (0 === e.length) throw Error("Array must not be empty");
	let t = e[0], n = 0;
	for (let s = 1; s < e.length; ++s) e[s] < t && (t = e[s], n = s);
	return [t, n];
}
function Zo(e) {
	if (0 === e.length) throw Error("Array must not be empty");
	let t = e[0], n = 0;
	for (let s = 1; s < e.length; ++s) e[s] > t && (t = e[s], n = s);
	return [t, n];
}
function ei(e) {
	return e > 0 && !(e & e - 1);
}
var ti = class {
	constructor(e) {
		if (this.size = 0 | e, this.size <= 1 || !ei(this.size)) throw new Error("FFT size must be a power of two larger than 1");
		this._csize = e << 1, this.table = new Float64Array(2 * this.size);
		for (let n = 0; n < this.table.length; n += 2) {
			const e = Math.PI * n / this.size;
			this.table[n] = Math.cos(e), this.table[n + 1] = -Math.sin(e);
		}
		let t = 0;
		for (let n = 1; this.size > n; n <<= 1) ++t;
		this._width = t % 2 == 0 ? t - 1 : t, this._bitrev = new Int32Array(1 << this._width);
		for (let n = 0; n < this._bitrev.length; ++n) {
			this._bitrev[n] = 0;
			for (let e = 0; e < this._width; e += 2) {
				const t = this._width - e - 2;
				this._bitrev[n] |= (n >>> e & 3) << t;
			}
		}
	}
	createComplexArray() {
		return new Float64Array(this._csize);
	}
	fromComplexArray(e, t) {
		const n = t || new Array(e.length >>> 1);
		for (let s = 0; s < e.length; s += 2) n[s >>> 1] = e[s];
		return n;
	}
	toComplexArray(e, t) {
		const n = t || this.createComplexArray();
		for (let s = 0; s < n.length; s += 2) n[s] = e[s >>> 1], n[s + 1] = 0;
		return n;
	}
	transform(e, t) {
		if (e === t) throw new Error("Input and output buffers must be different");
		this._transform4(e, t, 1);
	}
	realTransform(e, t) {
		if (e === t) throw new Error("Input and output buffers must be different");
		this._realTransform4(e, t, 1);
	}
	inverseTransform(e, t) {
		if (e === t) throw new Error("Input and output buffers must be different");
		this._transform4(e, t, -1);
		for (let n = 0; n < e.length; ++n) e[n] /= this.size;
	}
	_transform4(e, t, n) {
		const s = this._csize;
		let r, a, o = 1 << this._width, i = s / o << 1;
		const l = this._bitrev;
		if (4 === i) for (r = 0, a = 0; r < s; r += i, ++a) {
			const n = l[a];
			this._singleTransform2(t, e, r, n, o);
		}
		else for (r = 0, a = 0; r < s; r += i, ++a) {
			const s = l[a];
			this._singleTransform4(t, e, r, s, o, n);
		}
		const c = this.table;
		for (o >>= 2; o >= 2; o >>= 2) {
			i = s / o << 1;
			const t = i >>> 2;
			for (r = 0; r < s; r += i) {
				const s = r + t - 1;
				for (let a = r, i = 0; a < s; a += 2, i += o) {
					const s = a, r = s + t, o = r + t, l = o + t, u = e[s], d = e[s + 1], h = e[r], _ = e[r + 1], p = e[o], f = e[o + 1], m = e[l], g = e[l + 1], w = c[i], y = n * c[i + 1], b = h * w - _ * y, x = h * y + _ * w, v = c[2 * i], M = n * c[2 * i + 1], k = p * v - f * M, E = p * M + f * v, A = c[3 * i], C = n * c[3 * i + 1], T = m * A - g * C, S = m * C + g * A, F = u + k, I = d + E, P = u - k, L = d - E, O = b + T, z = x + S, N = n * (b - T), B = n * (x - S);
					e[s] = F + O, e[s + 1] = I + z, e[r] = P + B, e[r + 1] = L - N, e[o] = F - O, e[o + 1] = I - z, e[l] = P - B, e[l + 1] = L + N;
				}
			}
		}
	}
	_singleTransform2(e, t, n, s, r) {
		const a = e[s], o = e[s + 1], i = e[s + r], l = e[s + r + 1];
		t[n] = a + i, t[n + 1] = o + l, t[n + 2] = a - i, t[n + 3] = o - l;
	}
	_singleTransform4(e, t, n, s, r, a) {
		const o = 2 * r, i = 3 * r, l = e[s], c = e[s + 1], u = e[s + r], d = e[s + r + 1], h = e[s + o], _ = e[s + o + 1], p = e[s + i], f = e[s + i + 1], m = l + h, g = c + _, w = l - h, y = c - _, b = u + p, x = d + f, v = a * (u - p), M = a * (d - f);
		t[n] = m + b, t[n + 1] = g + x, t[n + 2] = w + M, t[n + 3] = y - v, t[n + 4] = m - b, t[n + 5] = g - x, t[n + 6] = w - M, t[n + 7] = y + v;
	}
	_realTransform4(e, t, n) {
		const s = this._csize;
		let r, a, o = 1 << this._width, i = s / o << 1;
		const l = this._bitrev;
		if (4 === i) for (r = 0, a = 0; r < s; r += i, ++a) {
			const n = l[a];
			this._singleRealTransform2(t, e, r, n >>> 1, o >>> 1);
		}
		else for (r = 0, a = 0; r < s; r += i, ++a) {
			const s = l[a];
			this._singleRealTransform4(t, e, r, s >>> 1, o >>> 1, n);
		}
		const c = this.table;
		for (o >>= 2; o >= 2; o >>= 2) {
			i = s / o << 1;
			const t = i >>> 1, a = t >>> 1, l = a >>> 1;
			for (r = 0; r < s; r += i) for (let s = 0, i = 0; s <= l; s += 2, i += o) {
				const o = r + s, u = o + a, d = u + a, h = d + a, _ = e[o], p = e[o + 1], f = e[u], m = e[u + 1], g = e[d], w = e[d + 1], y = e[h], b = e[h + 1], x = _, v = p, M = c[i], k = n * c[i + 1], E = f * M - m * k, A = f * k + m * M, C = c[2 * i], T = n * c[2 * i + 1], S = g * C - w * T, F = g * T + w * C, I = c[3 * i], P = n * c[3 * i + 1], L = y * I - b * P, O = y * P + b * I, z = x + S, N = v + F, B = x - S, $ = v - F, D = E + L, R = A + O, G = n * (E - L), U = n * (A - O);
				if (e[o] = z + D, e[o + 1] = N + R, e[u] = B + U, e[u + 1] = $ - G, 0 === s) {
					e[d] = z - D, e[d + 1] = N - R;
					continue;
				}
				if (s === l) continue;
				const V = r + a - s, j = r + t - s;
				e[V] = B - n * U, e[V + 1] = -$ - n * G, e[j] = z - n * D, e[j + 1] = n * R - N;
			}
		}
		const u = s >>> 1;
		for (let d = 2; d < u; d += 2) e[s - d] = e[d], e[s - d + 1] = -e[d + 1];
	}
	_singleRealTransform2(e, t, n, s, r) {
		const a = e[s], o = e[s + r];
		t[n] = a + o, t[n + 1] = 0, t[n + 2] = a - o, t[n + 3] = 0;
	}
	_singleRealTransform4(e, t, n, s, r, a) {
		const o = 2 * r, i = 3 * r, l = e[s], c = e[s + r], u = e[s + o], d = e[s + i], h = l + u, _ = l - u, p = c + d, f = a * (c - d);
		t[n] = h + p, t[n + 1] = 0, t[n + 2] = _, t[n + 3] = -f, t[n + 4] = h - p, t[n + 5] = 0, t[n + 6] = _, t[n + 7] = f;
	}
}, ni = class {
	constructor(e) {
		const t = 2 * (e - 1), n = 2 * (2 * e - 1), s = 2 ** Math.ceil(Math.log2(n));
		this.bufferSize = s, this._a = t;
		const r = new Float64Array(n), a = new Float64Array(s);
		this._chirpBuffer = new Float64Array(s), this._buffer1 = new Float64Array(s), this._buffer2 = new Float64Array(s), this._outBuffer1 = new Float64Array(s), this._outBuffer2 = new Float64Array(s);
		const o = -2 * Math.PI / e, i = Math.cos(o), l = Math.sin(o);
		for (let c = 0; c < n >> 1; ++c) {
			const t = (c + 1 - e) ** 2 / 2, n = Math.sqrt(i ** 2 + l ** 2) ** t, s = t * Math.atan2(l, i), o = 2 * c;
			r[o] = n * Math.cos(s), r[o + 1] = n * Math.sin(s), a[o] = r[o], a[o + 1] = -r[o + 1];
		}
		this._slicedChirpBuffer = r.subarray(t, n), this._f = new ti(s >> 1), this._f.transform(this._chirpBuffer, a);
	}
	_transform(e, t, n) {
		const s = this._buffer1, r = this._buffer2, a = this._outBuffer1, o = this._outBuffer2, i = this._chirpBuffer, l = this._slicedChirpBuffer, c = this._a;
		if (n) for (let u = 0; u < l.length; u += 2) {
			const e = u + 1, n = t[u >> 1];
			s[u] = n * l[u], s[e] = n * l[e];
		}
		else for (let u = 0; u < l.length; u += 2) {
			const e = u + 1;
			s[u] = t[u] * l[u] - t[e] * l[e], s[e] = t[u] * l[e] + t[e] * l[u];
		}
		this._f.transform(a, s);
		for (let u = 0; u < i.length; u += 2) {
			const e = u + 1;
			r[u] = a[u] * i[u] - a[e] * i[e], r[e] = a[u] * i[e] + a[e] * i[u];
		}
		this._f.inverseTransform(o, r);
		for (let u = 0; u < o.length; u += 2) {
			const t = o[u + c], n = o[u + c + 1], s = l[u], r = l[u + 1];
			e[u] = t * s - n * r, e[u + 1] = t * r + n * s;
		}
	}
	transform(e, t) {
		this._transform(e, t, !1);
	}
	realTransform(e, t) {
		this._transform(e, t, !0);
	}
}, si = class {
	constructor(e) {
		this.fft_length = e, this.isPowerOfTwo = ei(e), this.isPowerOfTwo ? (this.fft = new ti(e), this.outputBufferSize = 2 * e) : (this.fft = new ni(e), this.outputBufferSize = this.fft.bufferSize);
	}
	realTransform(e, t) {
		this.fft.realTransform(e, t);
	}
	transform(e, t) {
		this.fft.transform(e, t);
	}
};
function ri(e, t) {
	if (t % 2 == 0 || t <= 0) throw new Error("Window size must be a positive odd number");
	const n = new e.constructor(e.length), s = new e.constructor(t), r = Math.floor(t / 2);
	for (let a = 0; a < e.length; ++a) {
		let t = 0;
		for (let n = -r; n <= r; ++n) {
			let r = a + n;
			r < 0 ? r = Math.abs(r) : r >= e.length && (r = 2 * (e.length - 1) - r), s[t++] = e[r];
		}
		s.sort(), n[a] = s[r];
	}
	return n;
}
function ai(e, t) {
	const n = Math.pow(10, t);
	return Math.round(e * n) / n;
}
function oi(e) {
	const t = e.length, n = e[0].length, s = [t + 1, n + 1], r = Array.from({ length: s[0] }, () => Array(s[1]).fill(Infinity));
	r[0][0] = 0;
	const a = Array.from({ length: s[0] }, () => Array(s[1]).fill(-1));
	for (let u = 1; u < s[1]; ++u) for (let t = 1; t < s[0]; ++t) {
		const n = r[t - 1][u - 1], s = r[t - 1][u], o = r[t][u - 1];
		let i, l;
		n < s && n < o ? (i = n, l = 0) : s < n && s < o ? (i = s, l = 1) : (i = o, l = 2), r[t][u] = e[t - 1][u - 1] + i, a[t][u] = l;
	}
	for (let u = 0; u < s[1]; ++u) a[0][u] = 2;
	for (let u = 0; u < s[0]; ++u) a[u][0] = 1;
	let o = t, i = n, l = [], c = [];
	for (; o > 0 || i > 0;) switch (l.push(o - 1), c.push(i - 1), a[o][i]) {
		case 0:
			--o, --i;
			break;
		case 1:
			--o;
			break;
		case 2:
			--i;
			break;
		default: throw new Error(`Internal error in dynamic time warping. Unexpected trace[${o}, ${i}]. Please file a bug report.`);
	}
	return l.reverse(), c.reverse(), [l, c];
}
var ii = function() {
	let e = null;
	return function(t) {
		if (!e) {
			e = new Float32Array(65536);
			const t = /* @__PURE__ */ new ArrayBuffer(4), n = new Uint32Array(t), s = new Float32Array(t);
			for (let r = 0; r < e.length; ++r) {
				let t = 0;
				const a = (32768 & r) << 16, o = (31744 & r) >> 10;
				let i = 1023 & r;
				if (31 === o) t = 2139095040 | a | i << 13;
				else if (0 === o) if (0 === i) t = a;
				else {
					let e = 113;
					for (; !(1024 & i);) i <<= 1, --e;
					i &= -1025, t = a | e << 23 | i << 13;
				}
				else t = a | o + 112 << 23 | i << 13;
				n[0] = t, e[r] = s[0];
			}
		}
		const n = t.length, s = e, r = new Float32Array(n);
		for (let e = 0; e < n; ++e) r[e] = s[t[e]];
		return r;
	};
}(), li = {};
Wn(li, { default: () => ci });
var ci = {};
async function ui(e) {
	const t = e.split("/").pop();
	let n;
	try {
		if (n = await Bo(), n) {
			const t = await n.match(e);
			if (t) return t;
		}
	} catch (r) {
		Os.warn(`Failed to load ${t} from cache:`, r);
	}
	const s = await xs.fetch(e);
	if (!s.ok) throw new Error(`Failed to fetch ${t}: ${s.status} ${s.statusText}`);
	if (n) try {
		await n.put(e, s.clone());
	} catch (a) {
		Os.warn(`Failed to cache ${t}:`, a);
	}
	return s;
}
var di = Object.freeze({
	auto: null,
	gpu: null,
	cpu: "cpu",
	wasm: "wasm",
	webgpu: "webgpu",
	cuda: "cuda",
	dml: "dml",
	coreml: "coreml",
	webnn: {
		name: "webnn",
		deviceType: "cpu"
	},
	"webnn-npu": {
		name: "webnn",
		deviceType: "npu"
	},
	"webnn-gpu": {
		name: "webnn",
		deviceType: "gpu"
	},
	"webnn-cpu": {
		name: "webnn",
		deviceType: "cpu"
	}
});
function hi(e) {
	return e <= ys.DEBUG ? 0 : e <= ys.INFO ? 2 : e <= ys.WARNING || e <= ys.ERROR ? 3 : 4;
}
var _i, pi, fi = {
	0: "verbose",
	1: "info",
	2: "warning",
	3: "error",
	4: "fatal"
}, mi = [], gi = Symbol.for("onnxruntime");
if (gi in globalThis) pi = globalThis[gi];
else if (hs.IS_NODE_ENV) {
	switch (pi = li, process.platform) {
		case "win32":
			mi.push("dml");
			break;
		case "linux":
			"x64" === process.arch && mi.push("cuda");
			break;
		case "darwin": mi.push("coreml");
	}
	mi.push("webgpu"), mi.push("cpu"), _i = ["cpu"];
} else pi = G, hs.IS_WEBNN_AVAILABLE && mi.push("webnn-npu", "webnn-gpu", "webnn-cpu", "webnn"), hs.IS_WEBGPU_AVAILABLE && mi.push("webgpu"), mi.push("wasm"), _i = ["wasm"];
var wi = pi.InferenceSession;
var yi = Promise.resolve(), bi = null;
async function xi() {
	if (bi) return bi;
	if (!(xs.useWasmCache && "object" == typeof Ai?.wasm?.wasmPaths && Ai?.wasm?.wasmPaths?.wasm && Ai?.wasm?.wasmPaths?.mjs)) {
		if (hs.IS_DENO_WEB_RUNTIME) throw new Error("env.useWasmCache=false is not supported in Deno's web runtime. Remove the useWasmCache override.");
		return bi = Promise.resolve();
	}
	return bi = (async () => {
		const e = Ai.wasm.wasmPaths;
		let t = !1;
		await Promise.all([e.wasm && !Po(e.wasm) ? (async () => {
			try {
				const n = await async function(e) {
					const t = await ui(e);
					if (!t || "string" == typeof t) return null;
					try {
						return await t.arrayBuffer();
					} catch (n) {
						return Os.warn("Failed to read WASM binary:", n), null;
					}
				}(Lo(e.wasm));
				n && (Ai.wasm.wasmBinary = n, t = !0);
			} catch (n) {
				Os.warn("Failed to pre-load WASM binary:", n);
			}
		})() : Promise.resolve(), e.mjs && !Po(e.mjs) ? (async () => {
			try {
				const t = await async function(e) {
					if (hs.IS_SERVICE_WORKER_ENV || hs.IS_CHROME_AVAILABLE) return e;
					const t = await ui(e);
					if (!t || "string" == typeof t) return null;
					try {
						let e = await t.text();
						e = e.replaceAll("globalThis.process?.versions?.node", "false");
						const n = new Blob([e], { type: "text/javascript" });
						return URL.createObjectURL(n);
					} catch (n) {
						return Os.warn("Failed to read WASM factory:", n), null;
					}
				}(Lo(e.mjs));
				t && (Ai.wasm.wasmPaths.mjs = t);
			} catch (t) {
				Os.warn("Failed to pre-load WASM factory:", t);
			}
		})() : Promise.resolve()]), t || (Ai.wasm.wasmPaths.mjs = e.mjs);
	})();
}
async function vi(e, t, n) {
	await xi();
	const s = hi(xs.logLevel ?? ys.WARNING), r = () => wi.create(e, {
		logSeverityLevel: s,
		...t
	}), a = await (hs.IS_WEB_ENV ? yi = yi.then(r) : r());
	return a.config = n, a;
}
var Mi = Promise.resolve();
async function ki(e, t) {
	const n = () => e.run(t);
	return hs.IS_WEB_ENV ? Mi = Mi.then(n) : n();
}
function Ei(e) {
	return e instanceof pi.Tensor;
}
var Ai = pi?.env;
function Ci() {
	return Ai?.wasm?.proxy;
}
if (Ai) {
	let e = function(e) {
		Ai.logLevel = fi[hi(e)];
	};
	if (Ai.wasm) {
		if (!("undefined" != typeof ServiceWorkerGlobalScope && self instanceof ServiceWorkerGlobalScope) && Ai.versions?.web && !Ai.wasm.wasmPaths) {
			const e = `https://cdn.jsdelivr.net/npm/onnxruntime-web@${Ai.versions.web}/dist/`;
			Ai.wasm.wasmPaths = hs.IS_SAFARI ? {
				mjs: `${e}ort-wasm-simd-threaded.mjs`,
				wasm: `${e}ort-wasm-simd-threaded.wasm`
			} : {
				mjs: `${e}ort-wasm-simd-threaded.asyncify.mjs`,
				wasm: `${e}ort-wasm-simd-threaded.asyncify.wasm`
			};
		}
		Ai.wasm.proxy = !1;
	}
	Ai.webgpu && (Ai.webgpu.powerPreference = "high-performance"), e(xs.logLevel ?? ys.WARNING), xs.backends.onnx = {
		...Ai,
		setLogLevel: e
	};
}
var Ti = async (e, t, n) => {
	const s = await vi(new Uint8Array(e), t);
	return async (e) => {
		const t = Ci(), r = await ki(s, Object.fromEntries(Object.entries(e).map(([e, n]) => [e, (t ? n.clone() : n).ort_tensor])));
		return Array.isArray(n) ? n.map((e) => new Ri(r[e])) : new Ri(r[n]);
	};
}, Si = class {
	static session_options = {};
	static get nearest_interpolate_4d() {
		return this._nearest_interpolate_4d || (this._nearest_interpolate_4d = Ti([
			8,
			10,
			18,
			0,
			58,
			129,
			1,
			10,
			41,
			10,
			1,
			120,
			10,
			0,
			10,
			0,
			10,
			1,
			115,
			18,
			1,
			121,
			34,
			6,
			82,
			101,
			115,
			105,
			122,
			101,
			42,
			18,
			10,
			4,
			109,
			111,
			100,
			101,
			34,
			7,
			110,
			101,
			97,
			114,
			101,
			115,
			116,
			160,
			1,
			3,
			18,
			1,
			114,
			90,
			31,
			10,
			1,
			120,
			18,
			26,
			10,
			24,
			8,
			1,
			18,
			20,
			10,
			3,
			18,
			1,
			98,
			10,
			3,
			18,
			1,
			99,
			10,
			3,
			18,
			1,
			104,
			10,
			3,
			18,
			1,
			119,
			90,
			15,
			10,
			1,
			115,
			18,
			10,
			10,
			8,
			8,
			7,
			18,
			4,
			10,
			2,
			8,
			4,
			98,
			31,
			10,
			1,
			121,
			18,
			26,
			10,
			24,
			8,
			1,
			18,
			20,
			10,
			3,
			18,
			1,
			98,
			10,
			3,
			18,
			1,
			99,
			10,
			3,
			18,
			1,
			104,
			10,
			3,
			18,
			1,
			119,
			66,
			2,
			16,
			21
		], this.session_options, "y")), this._nearest_interpolate_4d;
	}
	static get bilinear_interpolate_4d() {
		return this._bilinear_interpolate_4d || (this._bilinear_interpolate_4d = Ti([
			8,
			9,
			18,
			0,
			58,
			128,
			1,
			10,
			40,
			10,
			1,
			120,
			10,
			0,
			10,
			0,
			10,
			1,
			115,
			18,
			1,
			121,
			34,
			6,
			82,
			101,
			115,
			105,
			122,
			101,
			42,
			17,
			10,
			4,
			109,
			111,
			100,
			101,
			34,
			6,
			108,
			105,
			110,
			101,
			97,
			114,
			160,
			1,
			3,
			18,
			1,
			114,
			90,
			31,
			10,
			1,
			120,
			18,
			26,
			10,
			24,
			8,
			1,
			18,
			20,
			10,
			3,
			18,
			1,
			98,
			10,
			3,
			18,
			1,
			99,
			10,
			3,
			18,
			1,
			104,
			10,
			3,
			18,
			1,
			119,
			90,
			15,
			10,
			1,
			115,
			18,
			10,
			10,
			8,
			8,
			7,
			18,
			4,
			10,
			2,
			8,
			4,
			98,
			31,
			10,
			1,
			121,
			18,
			26,
			10,
			24,
			8,
			1,
			18,
			20,
			10,
			3,
			18,
			1,
			98,
			10,
			3,
			18,
			1,
			99,
			10,
			3,
			18,
			1,
			104,
			10,
			3,
			18,
			1,
			119,
			66,
			2,
			16,
			20
		], this.session_options, "y")), this._bilinear_interpolate_4d;
	}
	static get bicubic_interpolate_4d() {
		return this._bicubic_interpolate_4d || (this._bicubic_interpolate_4d = Ti([
			8,
			9,
			18,
			0,
			58,
			127,
			10,
			39,
			10,
			1,
			120,
			10,
			0,
			10,
			0,
			10,
			1,
			115,
			18,
			1,
			121,
			34,
			6,
			82,
			101,
			115,
			105,
			122,
			101,
			42,
			16,
			10,
			4,
			109,
			111,
			100,
			101,
			34,
			5,
			99,
			117,
			98,
			105,
			99,
			160,
			1,
			3,
			18,
			1,
			114,
			90,
			31,
			10,
			1,
			120,
			18,
			26,
			10,
			24,
			8,
			1,
			18,
			20,
			10,
			3,
			18,
			1,
			98,
			10,
			3,
			18,
			1,
			99,
			10,
			3,
			18,
			1,
			104,
			10,
			3,
			18,
			1,
			119,
			90,
			15,
			10,
			1,
			115,
			18,
			10,
			10,
			8,
			8,
			7,
			18,
			4,
			10,
			2,
			8,
			4,
			98,
			31,
			10,
			1,
			121,
			18,
			26,
			10,
			24,
			8,
			1,
			18,
			20,
			10,
			3,
			18,
			1,
			98,
			10,
			3,
			18,
			1,
			99,
			10,
			3,
			18,
			1,
			104,
			10,
			3,
			18,
			1,
			119,
			66,
			2,
			16,
			20
		], this.session_options, "y")), this._bicubic_interpolate_4d;
	}
	static get matmul() {
		return this._matmul || (this._matmul = Ti([
			8,
			9,
			18,
			0,
			58,
			55,
			10,
			17,
			10,
			1,
			97,
			10,
			1,
			98,
			18,
			1,
			99,
			34,
			6,
			77,
			97,
			116,
			77,
			117,
			108,
			18,
			1,
			114,
			90,
			9,
			10,
			1,
			97,
			18,
			4,
			10,
			2,
			8,
			1,
			90,
			9,
			10,
			1,
			98,
			18,
			4,
			10,
			2,
			8,
			1,
			98,
			9,
			10,
			1,
			99,
			18,
			4,
			10,
			2,
			8,
			1,
			66,
			2,
			16,
			20
		], this.session_options, "c")), this._matmul;
	}
	static get stft() {
		return this._stft || (this._stft = Ti([
			8,
			7,
			18,
			0,
			58,
			148,
			1,
			10,
			38,
			10,
			1,
			115,
			10,
			1,
			106,
			10,
			1,
			119,
			10,
			1,
			108,
			18,
			1,
			111,
			34,
			4,
			83,
			84,
			70,
			84,
			42,
			15,
			10,
			8,
			111,
			110,
			101,
			115,
			105,
			100,
			101,
			100,
			24,
			1,
			160,
			1,
			2,
			18,
			1,
			115,
			90,
			26,
			10,
			1,
			115,
			18,
			21,
			10,
			19,
			8,
			1,
			18,
			15,
			10,
			3,
			18,
			1,
			98,
			10,
			3,
			18,
			1,
			115,
			10,
			3,
			18,
			1,
			99,
			90,
			11,
			10,
			1,
			106,
			18,
			6,
			10,
			4,
			8,
			7,
			18,
			0,
			90,
			16,
			10,
			1,
			119,
			18,
			11,
			10,
			9,
			8,
			1,
			18,
			5,
			10,
			3,
			18,
			1,
			119,
			90,
			11,
			10,
			1,
			108,
			18,
			6,
			10,
			4,
			8,
			7,
			18,
			0,
			98,
			31,
			10,
			1,
			111,
			18,
			26,
			10,
			24,
			8,
			1,
			18,
			20,
			10,
			3,
			18,
			1,
			98,
			10,
			3,
			18,
			1,
			102,
			10,
			3,
			18,
			1,
			100,
			10,
			3,
			18,
			1,
			99,
			66,
			2,
			16,
			17
		], this.session_options, "o")), this._stft;
	}
	static get rfft() {
		return this._rfft || (this._rfft = Ti([
			8,
			9,
			18,
			0,
			58,
			97,
			10,
			33,
			10,
			1,
			120,
			10,
			0,
			10,
			1,
			97,
			18,
			1,
			121,
			34,
			3,
			68,
			70,
			84,
			42,
			15,
			10,
			8,
			111,
			110,
			101,
			115,
			105,
			100,
			101,
			100,
			24,
			1,
			160,
			1,
			2,
			18,
			1,
			100,
			90,
			21,
			10,
			1,
			120,
			18,
			16,
			10,
			14,
			8,
			1,
			18,
			10,
			10,
			3,
			18,
			1,
			115,
			10,
			3,
			18,
			1,
			99,
			90,
			11,
			10,
			1,
			97,
			18,
			6,
			10,
			4,
			8,
			7,
			18,
			0,
			98,
			21,
			10,
			1,
			121,
			18,
			16,
			10,
			14,
			8,
			1,
			18,
			10,
			10,
			3,
			18,
			1,
			115,
			10,
			3,
			18,
			1,
			99,
			66,
			2,
			16,
			20
		], this.session_options, "y")), this._rfft;
	}
	static get top_k() {
		return this._top_k || (this._top_k = Ti([
			8,
			10,
			18,
			0,
			58,
			73,
			10,
			18,
			10,
			1,
			120,
			10,
			1,
			107,
			18,
			1,
			118,
			18,
			1,
			105,
			34,
			4,
			84,
			111,
			112,
			75,
			18,
			1,
			116,
			90,
			9,
			10,
			1,
			120,
			18,
			4,
			10,
			2,
			8,
			1,
			90,
			15,
			10,
			1,
			107,
			18,
			10,
			10,
			8,
			8,
			7,
			18,
			4,
			10,
			2,
			8,
			1,
			98,
			9,
			10,
			1,
			118,
			18,
			4,
			10,
			2,
			8,
			1,
			98,
			9,
			10,
			1,
			105,
			18,
			4,
			10,
			2,
			8,
			7,
			66,
			2,
			16,
			21
		], this.session_options, ["v", "i"])), this._top_k;
	}
	static get slice() {
		return this._slice || (this._slice = Ti([
			8,
			7,
			18,
			0,
			58,
			96,
			10,
			25,
			10,
			1,
			120,
			10,
			1,
			115,
			10,
			1,
			101,
			10,
			1,
			97,
			10,
			1,
			116,
			18,
			1,
			121,
			34,
			5,
			83,
			108,
			105,
			99,
			101,
			18,
			1,
			114,
			90,
			9,
			10,
			1,
			120,
			18,
			4,
			10,
			2,
			8,
			1,
			90,
			9,
			10,
			1,
			115,
			18,
			4,
			10,
			2,
			8,
			7,
			90,
			9,
			10,
			1,
			101,
			18,
			4,
			10,
			2,
			8,
			7,
			90,
			9,
			10,
			1,
			97,
			18,
			4,
			10,
			2,
			8,
			7,
			90,
			9,
			10,
			1,
			116,
			18,
			4,
			10,
			2,
			8,
			7,
			98,
			9,
			10,
			1,
			121,
			18,
			4,
			10,
			2,
			8,
			1,
			66,
			2,
			16,
			13
		], this.session_options, "y")), this._slice;
	}
}, Fi = Object.freeze({
	auto: "auto",
	gpu: "gpu",
	cpu: "cpu",
	wasm: "wasm",
	webgpu: "webgpu",
	cuda: "cuda",
	dml: "dml",
	coreml: "coreml",
	webnn: "webnn",
	"webnn-npu": "webnn-npu",
	"webnn-gpu": "webnn-gpu",
	"webnn-cpu": "webnn-cpu"
}), Ii = hs.IS_NODE_ENV ? "cpu" : "wasm";
function Pi(e, t, { warn: n } = {}) {
	return e ? "string" == typeof e ? e : e.hasOwnProperty(t) ? e[t] : (n && n(`device not specified for "${t}". Using the default device (${Ii}).`), Ii) : Ii;
}
var Li = function() {
	let e;
	return async function() {
		if (void 0 === e) if (hs.IS_WEBGPU_AVAILABLE) try {
			e = (await navigator.gpu.requestAdapter()).features.has("shader-f16");
		} catch (t) {
			e = !1;
		}
		else e = !1;
		return e;
	};
}(), Oi = Object.freeze({
	auto: "auto",
	fp32: "fp32",
	fp16: "fp16",
	q8: "q8",
	int8: "int8",
	uint8: "uint8",
	q4: "q4",
	bnb4: "bnb4",
	q4f16: "q4f16",
	q2: "q2",
	q2f16: "q2f16",
	q1: "q1",
	q1f16: "q1f16"
}), zi = Oi.fp32, Ni = Object.freeze({ [Fi.wasm]: Oi.q8 }), Bi = Object.freeze({
	[Oi.fp32]: "",
	[Oi.fp16]: "_fp16",
	[Oi.int8]: "_int8",
	[Oi.uint8]: "_uint8",
	[Oi.q8]: "_quantized",
	[Oi.q4]: "_q4",
	[Oi.q2]: "_q2",
	[Oi.q1]: "_q1",
	[Oi.q4f16]: "_q4f16",
	[Oi.q2f16]: "_q2f16",
	[Oi.q1f16]: "_q1f16",
	[Oi.bnb4]: "_bnb4"
});
function $i(e, t, n, { configDtype: s = null, warn: r } = {}) {
	let a, o, i = !1;
	if (e && "string" != typeof e ? e.hasOwnProperty(t) ? a = e[t] : (a = null, i = !0) : a = e, a === Oi.auto) {
		if (s) {
			const e = "string" == typeof s ? s : s?.[t];
			if (e && e !== Oi.auto && Oi.hasOwnProperty(e)) return e;
		}
		o = Ni[n] ?? zi;
	} else o = a && Oi.hasOwnProperty(a) ? a : Ni[n] ?? zi;
	return i && r && r(`dtype not specified for "${t}". Using the default dtype (${o}) for this device (${n}).`), o;
}
var Di = Object.freeze({
	float32: Float32Array,
	float16: "undefined" != typeof Float16Array ? Float16Array : Uint16Array,
	float64: Float64Array,
	string: Array,
	int8: Int8Array,
	uint8: Uint8Array,
	int16: Int16Array,
	uint16: Uint16Array,
	int32: Int32Array,
	uint32: Uint32Array,
	int64: BigInt64Array,
	uint64: BigUint64Array,
	bool: Uint8Array,
	uint4: Uint8Array,
	int4: Int8Array
}), Ri = class e {
	get dims() {
		return this.ort_tensor.dims;
	}
	set dims(e) {
		this.ort_tensor.dims = e;
	}
	get type() {
		return this.ort_tensor.type;
	}
	get data() {
		return this.ort_tensor.data;
	}
	get size() {
		return this.ort_tensor.size;
	}
	get location() {
		return this.ort_tensor.location;
	}
	ort_tensor;
	constructor(...e) {
		return Ei(e[0]) ? this.ort_tensor = e[0] : this.ort_tensor = new jn(e[0], e[1], e[2]), new Proxy(this, {
			get: (e, t) => {
				if ("string" == typeof t) {
					let n = Number(t);
					if (Number.isInteger(n)) return e._getitem(n);
				}
				return e[t];
			},
			set: (e, t, n) => e[t] = n
		});
	}
	dispose() {
		this.ort_tensor.dispose();
	}
	*[Symbol.iterator]() {
		const [e, ...t] = this.dims;
		if (t.length > 0) {
			const n = t.reduce((e, t) => e * t);
			for (let s = 0; s < e; ++s) yield this._subarray(s, n, t);
		} else yield* this.data;
	}
	_getitem(t) {
		const [n, ...s] = this.dims;
		if (t = Qi(t, n), s.length > 0) {
			const e = s.reduce((e, t) => e * t);
			return this._subarray(t, e, s);
		}
		return new e(this.type, [this.data[t]], s);
	}
	indexOf(e) {
		const t = this.data;
		for (let n = 0; n < t.length; ++n) if (t[n] == e) return n;
		return -1;
	}
	_subarray(t, n, s) {
		const r = t * n, a = (t + 1) * n, o = "subarray" in this.data ? this.data.subarray(r, a) : this.data.slice(r, a);
		return new e(this.type, o, s);
	}
	item() {
		const e = this.data;
		if (1 !== e.length) throw new Error(`a Tensor with ${e.length} elements cannot be converted to Scalar`);
		return e[0];
	}
	tolist() {
		return function(e, t) {
			const n = e.length;
			if (n !== t.reduce((e, t) => e * t)) throw Error(`cannot reshape array of size ${n} into shape (${t})`);
			let s = e;
			for (let r = t.length - 1; r >= 0; r--) s = s.reduce((e, n) => {
				let s = e[e.length - 1];
				return s.length < t[r] ? s.push(n) : e.push([n]), e;
			}, [[]]);
			return s[0];
		}(this.data, this.dims);
	}
	sigmoid() {
		return this.clone().sigmoid_();
	}
	sigmoid_() {
		const e = this.data;
		for (let t = 0; t < e.length; ++t) e[t] = 1 / (1 + Math.exp(-e[t]));
		return this;
	}
	map(e) {
		return this.clone().map_(e);
	}
	map_(e) {
		const t = this.data;
		for (let n = 0; n < t.length; ++n) t[n] = e(t[n], n, t);
		return this;
	}
	mul(e) {
		return this.clone().mul_(e);
	}
	mul_(e) {
		const t = this.data;
		for (let n = 0; n < t.length; ++n) t[n] *= e;
		return this;
	}
	div(e) {
		return this.clone().div_(e);
	}
	div_(e) {
		const t = this.data;
		for (let n = 0; n < t.length; ++n) t[n] /= e;
		return this;
	}
	add(e) {
		return this.clone().add_(e);
	}
	add_(e) {
		const t = this.data;
		for (let n = 0; n < t.length; ++n) t[n] += e;
		return this;
	}
	sub(e) {
		return this.clone().sub_(e);
	}
	sub_(e) {
		const t = this.data;
		for (let n = 0; n < t.length; ++n) t[n] -= e;
		return this;
	}
	clone() {
		return new e(this.type, this.data.slice(), this.dims.slice());
	}
	slice(...t) {
		const n = [], s = [];
		for (let e = 0; e < this.dims.length; ++e) {
			let r = t[e];
			if (null == r) s.push([0, this.dims[e]]), n.push(this.dims[e]);
			else if ("number" == typeof r) r = Qi(r, this.dims[e], e), s.push([r, r + 1]);
			else {
				if (!Array.isArray(r) || 2 !== r.length) throw new Error(`Invalid slice: ${r}`);
				{
					let [t, a] = r;
					if (t = null === t ? 0 : Qi(t, this.dims[e], e, !1), a = null === a ? this.dims[e] : Qi(a, this.dims[e], e, !1), t > a) throw new Error(`Invalid slice: ${r}`);
					const o = [Math.max(t, 0), Math.min(a, this.dims[e])];
					s.push(o), n.push(o[1] - o[0]);
				}
			}
		}
		const r = s.map(([e, t]) => t - e), a = r.reduce((e, t) => e * t), o = this.data, i = new o.constructor(a), l = this.stride();
		let c = !0;
		for (let e = 1; e < r.length; ++e) if (0 !== s[e][0] || s[e][1] !== this.dims[e]) {
			c = !1;
			break;
		}
		if (c) {
			const e = s[0][0] * l[0], t = s[0][1] * l[0];
			if (ArrayBuffer.isView(o)) i.set(o.subarray(e, t));
			else {
				if (!Array.isArray(o)) throw new Error("Unsupported data type for slicing");
				{
					const n = o.slice(e, t);
					for (let e = 0; e < n.length; ++e) i[e] = n[e];
				}
			}
		} else for (let e = 0; e < a; ++e) {
			let t = 0;
			for (let n = r.length - 1, a = e; n >= 0; --n) {
				const e = r[n];
				t += (a % e + s[n][0]) * l[n], a = Math.floor(a / e);
			}
			i[e] = o[t];
		}
		return new e(this.type, i, n);
	}
	permute(...e) {
		return function(e, t) {
			const [n, s] = function(e, t, n) {
				const s = new Array(n.length), r = new Array(n.length);
				for (let i = n.length - 1, l = 1; i >= 0; --i) r[i] = l, s[i] = t[n[i]], l *= s[i];
				const a = n.map((e, t) => r[n.indexOf(t)]), o = new e.constructor(e.length);
				for (let i = 0; i < e.length; ++i) {
					let n = 0;
					for (let e = t.length - 1, s = i; e >= 0; --e) n += s % t[e] * a[e], s = Math.floor(s / t[e]);
					o[n] = e[i];
				}
				return [o, s];
			}(e.data, e.dims, t);
			return new Ri(e.type, n, s);
		}(this, e);
	}
	transpose(...e) {
		return this.permute(...e);
	}
	sum(e = null, t = !1) {
		return this.norm(1, e, t);
	}
	norm(t = "fro", n = null, s = !1) {
		if ("fro" === t) t = 2;
		else if ("string" == typeof t) throw Error(`Unsupported norm: ${t}`);
		const r = this.data, a = r instanceof BigInt64Array || r instanceof BigUint64Array;
		if (a && 1 !== t) throw Error(`Expected a floating point tensor as input. Got ${this.type}`);
		let o, i;
		if (a ? (o = (e, t) => e + t, i = 0n) : (o = (e, n) => e + n ** t, i = 0), null === n) {
			let n = r.reduce(o, i);
			return 1 !== t && (n = n ** (1 / t)), new e(this.type, [n], []);
		}
		const [l, c, u] = Yi(o, this, n, s);
		if (1 !== t) for (let e = 0; e < c.length; ++e) c[e] = c[e] ** (1 / t);
		return new e(l, c, u);
	}
	normalize_(e = 2, t = 1) {
		t = Qi(t, this.dims.length);
		const n = this.norm(e, t, !0), s = this.data, r = n.data;
		for (let a = 0; a < s.length; ++a) {
			let e = 0;
			for (let n = this.dims.length - 1, s = a, r = 1; n >= 0; --n) {
				const a = this.dims[n];
				if (n !== t) e += s % a * r, r *= this.dims[n];
				s = Math.floor(s / a);
			}
			s[a] /= r[e];
		}
		return this;
	}
	normalize(e = 2, t = 1) {
		return this.clone().normalize_(e, t);
	}
	stride() {
		return Zi(this.dims);
	}
	squeeze(t = null) {
		return new e(this.type, this.data, Wi(this.dims, t));
	}
	squeeze_(e = null) {
		return this.dims = Wi(this.dims, e), this;
	}
	unsqueeze(t) {
		return new e(this.type, this.data, Hi(this.dims, t));
	}
	unsqueeze_(e) {
		return this.dims = Hi(this.dims, e), this;
	}
	flatten_(e = 0, t = -1) {
		t = (t + this.dims.length) % this.dims.length;
		let n = this.dims.slice(0, e), s = this.dims.slice(e, t + 1), r = this.dims.slice(t + 1);
		return this.dims = [
			...n,
			s.reduce((e, t) => e * t, 1),
			...r
		], this;
	}
	flatten(e = 0, t = -1) {
		return this.clone().flatten_(e, t);
	}
	view(...t) {
		let n = -1;
		for (let e = 0; e < t.length; ++e) if (-1 === t[e]) {
			if (-1 !== n) throw new Error("Only one dimension can be inferred");
			n = e;
		}
		const s = this.data;
		if (-1 !== n) {
			const e = t.reduce((e, t, s) => s !== n ? e * t : e, 1);
			t[n] = s.length / e;
		}
		return new e(this.type, s, t);
	}
	neg_() {
		const e = this.data;
		for (let t = 0; t < e.length; ++t) e[t] = -e[t];
		return this;
	}
	neg() {
		return this.clone().neg_();
	}
	gt(t) {
		const n = new Uint8Array(this.data.length), s = this.data;
		for (let e = 0; e < s.length; ++e) n[e] = s[e] > t ? 1 : 0;
		return new e("bool", n, this.dims);
	}
	lt(t) {
		const n = new Uint8Array(this.data.length), s = this.data;
		for (let e = 0; e < s.length; ++e) n[e] = s[e] < t ? 1 : 0;
		return new e("bool", n, this.dims);
	}
	clamp_(e, t) {
		const n = this.data;
		for (let s = 0; s < n.length; ++s) n[s] = Math.min(Math.max(n[s], e), t);
		return this;
	}
	clamp(e, t) {
		return this.clone().clamp_(e, t);
	}
	round_() {
		const e = this.data;
		for (let t = 0; t < e.length; ++t) e[t] = Math.round(e[t]);
		return this;
	}
	round() {
		return this.clone().round_();
	}
	mean(e = null, t = !1) {
		return Ki(this, e, t);
	}
	min(t = null, n = !1) {
		if (null === t) {
			const t = Ko(this.data)[0];
			return new e(this.type, [t], []);
		}
		const [s, r, a] = Yi((e, t) => Math.min(e, t), this, t, n, Infinity);
		return new e(s, r, a);
	}
	max(t = null, n = !1) {
		if (null === t) {
			const t = Zo(this.data)[0];
			return new e(this.type, [t], []);
		}
		const [s, r, a] = Yi((e, t) => Math.max(e, t), this, t, n, -Infinity);
		return new e(s, r, a);
	}
	argmin(t = null, n = !1) {
		if (null !== t) throw new Error("`dim !== null` not yet implemented.");
		const s = Ko(this.data)[1];
		return new e("int64", [BigInt(s)], []);
	}
	argmax(t = null, n = !1) {
		if (null !== t) throw new Error("`dim !== null` not yet implemented.");
		const s = Zo(this.data)[1];
		return new e("int64", [BigInt(s)], []);
	}
	repeat(...t) {
		if (t.length < this.dims.length) throw new Error(`Number of dimensions of repeat dims (${t.length}) cannot be smaller than number of dimensions of tensor (${this.dims.length})`);
		if (t.every((e) => 1 === e)) {
			if (t.length === this.dims.length) return this.clone();
			const n = t.length - this.dims.length, s = Array(n).fill(1).concat(this.dims);
			return new e(this.type, this.data.slice(), s);
		}
		const n = t.length - this.dims.length, s = Array(n).fill(1).concat(this.dims), r = s.map((e, n) => e * t[n]), a = r.reduce((e, t) => e * t, 1), o = this.data, i = new o.constructor(a), l = Zi(s), c = Zi(r);
		for (let e = 0; e < a; ++e) {
			let t = e, n = 0;
			for (let e = 0; e < r.length; ++e) {
				const r = Math.floor(t / c[e]);
				t %= c[e];
				n += r % s[e] * l[e];
			}
			i[e] = o[n];
		}
		return new e(this.type, i, r);
	}
	tile(...e) {
		if (e.length < this.dims.length) {
			const t = this.dims.length - e.length;
			e = Array(t).fill(1).concat(e);
		}
		return this.repeat(...e);
	}
	to(t) {
		if (this.type === t) return this;
		if (!Di.hasOwnProperty(t)) throw new Error(`Unsupported type: ${t}`);
		let n;
		const s = ["int64", "uint64"].includes(this.type), r = ["int64", "uint64"].includes(t);
		if (s && !r) n = Number;
		else if (!s && r) n = [
			"float16",
			"float32",
			"float64"
		].includes(this.type) ? (e) => BigInt(Math.floor(e)) : BigInt;
		else if ("float16" === this.type && "float32" == t && this.data instanceof Uint16Array) return new e(t, ii(this.data), this.dims);
		return new e(t, Di[t].from(this.data, n), this.dims);
	}
};
function Gi(e, [t, n], s = "bilinear", r = !1) {
	const a = e.dims.at(-3) ?? 1, o = e.dims.at(-2), i = e.dims.at(-1), l = function(e, [t, n, s], [r, a]) {
		const o = a / s, i = r / n, l = new e.constructor(r * a * t), c = n * s, u = r * a;
		for (let d = 0; d < r; ++d) for (let r = 0; r < a; ++r) {
			const h = d * a + r, _ = (r + .5) / o - .5, p = (d + .5) / i - .5;
			let f = Math.floor(_), m = Math.floor(p);
			const g = Math.min(f + 1, s - 1), w = Math.min(m + 1, n - 1);
			f = Math.max(f, 0), m = Math.max(m, 0);
			const y = _ - f, b = p - m, x = (1 - y) * (1 - b), v = y * (1 - b), M = (1 - y) * b, k = y * b, E = m * s, A = w * s, C = E + f, T = E + g, S = A + f, F = A + g;
			for (let n = 0; n < t; ++n) {
				const t = n * c;
				l[n * u + h] = x * e[t + C] + v * e[t + T] + M * e[t + S] + k * e[t + F];
			}
		}
		return l;
	}(e.data, [
		a,
		o,
		i
	], [t, n], s, r);
	return new Ri(e.type, l, [
		a,
		t,
		n
	]);
}
async function Ui(e, { size: t = null, mode: n = "bilinear" } = {}) {
	if (4 !== e.dims.length) throw new Error("`interpolate_4d` currently only supports 4D input.");
	if (!t) throw new Error("`interpolate_4d` requires a `size` argument.");
	let s, r;
	if (2 === t.length) s = [...e.dims.slice(0, 2), ...t];
	else if (3 === t.length) s = [e.dims[0], ...t];
	else {
		if (4 !== t.length) throw new Error("`size` must be of length 2, 3, or 4.");
		s = t;
	}
	if ("nearest" === n) r = await Si.nearest_interpolate_4d;
	else if ("bilinear" === n) r = await Si.bilinear_interpolate_4d;
	else {
		if ("bicubic" !== n) throw new Error(`Unsupported mode: ${n}`);
		r = await Si.bicubic_interpolate_4d;
	}
	const a = new Ri("int64", new BigInt64Array(s.map(BigInt)), [s.length]);
	return await r({
		x: e,
		s: a
	});
}
async function Vi(e, t) {
	const n = await Si.top_k;
	return t = null == t ? e.dims.at(-1) : Math.min(t, e.dims.at(-1)), await n({
		x: e,
		k: new Ri("int64", [BigInt(t)], [1])
	});
}
var ji = (e) => new Ri("int64", e, [e.length]);
async function qi(e, t, n, s, r) {
	return await (await Si.slice)({
		x: e,
		s: ji(t),
		e: ji(n),
		a: ji(s),
		t: ji(r ?? new Array(s.length).fill(1))
	});
}
function Wi(e, t) {
	return e = e.slice(), null === t ? e = e.filter((e) => 1 !== e) : "number" == typeof t ? 1 === e[t] && e.splice(t, 1) : Array.isArray(t) && (e = e.filter((e, n) => 1 !== e || !t.includes(n))), e;
}
function Hi(e, t) {
	return t = Qi(t, e.length + 1), (e = e.slice()).splice(t, 0, 1), e;
}
function Qi(e, t, n = null, s = !0) {
	if (e < -t || e >= t) {
		if (s) throw new Error(`IndexError: index ${e} is out of bounds for dimension${null === n ? "" : " " + n} with size ${t}`);
		return e < -t ? 0 : t;
	}
	return e < 0 && (e = (e % t + t) % t), e;
}
function Xi(e, t = 0) {
	t = Qi(t, e[0].dims.length);
	const n = e[0].dims.slice();
	n[t] = e.reduce((e, n) => e + n.dims[t], 0);
	const s = n.reduce((e, t) => e * t, 1), r = new e[0].data.constructor(s), a = e[0].type;
	if (0 === t) {
		let t = 0;
		for (const n of e) {
			const e = n.data;
			r.set(e, t), t += e.length;
		}
	} else {
		let s = 0;
		for (let a = 0; a < e.length; ++a) {
			const { data: o, dims: i } = e[a];
			for (let e = 0; e < o.length; ++e) {
				let a = 0;
				for (let r = i.length - 1, o = e, l = 1; r >= 0; --r) {
					const e = i[r];
					let c = o % e;
					r === t && (c += s), a += c * l, l *= n[r], o = Math.floor(o / e);
				}
				r[a] = o[e];
			}
			s += i[t];
		}
	}
	return new Ri(a, r, n);
}
function Ji(e, t = 0) {
	return Xi(e.map((e) => e.unsqueeze(t)), t);
}
function Yi(e, t, n, s = !1, r = null) {
	const a = t.data, o = t.dims;
	n = Qi(n, o.length);
	const i = o.slice();
	i[n] = 1;
	const l = new a.constructor(a.length / o[n]);
	null !== r && l.fill(r);
	for (let c = 0; c < a.length; ++c) {
		let t = 0;
		for (let e = o.length - 1, s = c, r = 1; e >= 0; --e) {
			const a = o[e];
			if (e !== n) t += s % a * r, r *= i[e];
			s = Math.floor(s / a);
		}
		l[t] = e(l[t], a[c], c, t);
	}
	return s || i.splice(n, 1), [
		t.type,
		l,
		i
	];
}
function Ki(e, t = null, n = !1) {
	const s = e.dims, r = e.data;
	if (null === t) {
		const t = r.reduce((e, t) => e + t, 0);
		return new Ri(e.type, [t / r.length], []);
	}
	t = Qi(t, s.length);
	const [a, o, i] = Yi((e, t) => e + t, e, t, n);
	if (1 !== s[t]) for (let l = 0; l < o.length; ++l) o[l] /= s[t];
	return new Ri(a, o, i);
}
function Zi(e) {
	const t = new Array(e.length);
	for (let n = e.length - 1, s = 1; n >= 0; --n) t[n] = s, s *= e[n];
	return t;
}
function el(e, t, n, s) {
	return new Ri(n, new s(e.reduce((e, t) => e * t, 1)).fill(t), e);
}
function tl(e, t) {
	let n, s;
	if ("number" == typeof t) n = "float32", s = Float32Array;
	else if ("bigint" == typeof t) n = "int64", s = BigInt64Array;
	else {
		if ("boolean" != typeof t) throw new Error("Unsupported data type: " + typeof t);
		n = "bool", s = Uint8Array;
	}
	return el(e, t, n, s);
}
function nl(e, t) {
	return tl(e.dims, t);
}
function sl(e) {
	return el(e, 1n, "int64", BigInt64Array);
}
function rl(e) {
	return sl(e.dims);
}
function al(e) {
	return el(e, 0n, "int64", BigInt64Array);
}
function ol(e) {
	return al(e.dims);
}
async function il(e) {
	if (!e) throw new Error("modelId is required for get_tokenizer_files");
	return (await Ro(e, "tokenizer_config.json", {})).exists ? ["tokenizer.json", "tokenizer_config.json"] : [];
}
async function ll(e, t) {
	const n = await il(e);
	return await Promise.all(n.map((n) => Xo(e, n, !0, t)));
}
function cl(e) {
	const t = e.dims;
	switch (t.length) {
		case 1: return e.tolist();
		case 2:
			if (1 !== t[0]) throw new Error("Unable to decode tensor with `batch size !== 1`. Use `tokenizer.batch_decode(...)` for batched inputs.");
			return e.tolist()[0];
		default: throw new Error(`Expected tensor to have 1-2 dimensions, got ${t.length}.`);
	}
}
var ul = [
	"bos_token",
	"eos_token",
	"unk_token",
	"sep_token",
	"pad_token",
	"cls_token",
	"mask_token"
];
function dl(e, t, n, s) {
	for (const r of Object.keys(e)) {
		const a = t - e[r].length, o = n(r), i = new Array(a).fill(o);
		e[r] = "right" === s ? Ts(e[r], i) : Ts(i, e[r]);
	}
}
function hl(e, t) {
	for (const n of Object.keys(e)) e[n].length = t;
}
function _l(e, ...t) {
	for (const n of t) {
		if (!Object.hasOwn(e, n)) continue;
		const t = e[n];
		if (t) {
			if ("object" == typeof t) {
				if ("AddedToken" === t.__type) return t.content;
				throw Error(`Unknown token: ${t}`);
			}
			return t;
		}
	}
	return null;
}
var pl = class extends Ms {
	return_token_type_ids = !1;
	padding_side = "right";
	constructor(e, t) {
		if (super(), this._tokenizerJSON = e, this._tokenizerConfig = t, this._tokenizer = new sa(e, t), this.config = t, this.padding_side = t.padding_side ?? this.padding_side, this.mask_token = _l(t, "mask_token"), this.mask_token_id = this._tokenizer.token_to_id(this.mask_token), this.pad_token = _l(t, "pad_token", "eos_token"), this.pad_token_id = this._tokenizer.token_to_id(this.pad_token), this.sep_token = _l(t, "sep_token"), this.sep_token_id = this._tokenizer.token_to_id(this.sep_token), this.unk_token = _l(t, "unk_token"), this.unk_token_id = this._tokenizer.token_to_id(this.unk_token), this.bos_token = _l(t, "bos_token"), this.bos_token_id = this._tokenizer.token_to_id(this.bos_token), this.eos_token = _l(t, "eos_token"), this.eos_token_id = this._tokenizer.token_to_id(this.eos_token), this.chat_template = t.chat_template ?? null, Array.isArray(this.chat_template)) {
			const e = Object.create(null);
			for (const { name: t, template: n } of this.chat_template) {
				if ("string" != typeof t || "string" != typeof n) throw new Error("Chat template must be a list of objects with \"name\" and \"template\" properties");
				e[t] = n;
			}
			this.chat_template = e;
		}
		this._compiled_template_cache = /* @__PURE__ */ new Map();
		const n = function(e) {
			const t = [];
			for (const n of e.get_added_tokens_decoder().values()) n.special && t.push(n);
			return t;
		}(this._tokenizer);
		this.all_special_ids = n.map((e) => e.id), this.all_special_tokens = n.map((e) => e.content);
	}
	static async from_pretrained(e, { progress_callback: t = null, config: n = null, cache_dir: s = null, local_files_only: r = !1, revision: a = "main" } = {}) {
		return new this(...await ll(e, {
			progress_callback: t,
			config: n,
			cache_dir: s,
			local_files_only: r,
			revision: a
		}));
	}
	get_vocab() {
		return this._tokenizer.get_vocab();
	}
	get model_max_length() {
		return this._tokenizerConfig.model_max_length ?? Infinity;
	}
	get add_eos_token() {
		return this._tokenizerConfig.add_eos_token;
	}
	get add_bos_token() {
		return this._tokenizerConfig.add_bos_token;
	}
	convert_tokens_to_ids(e) {
		return "string" == typeof e ? this._tokenizer.token_to_id(e) : e.map((e) => this._tokenizer.token_to_id(e));
	}
	_call(e, t = {}) {
		const { text_pair: n = null, add_special_tokens: s = !0, padding: r = !1, return_token_type_ids: a = null } = t;
		let { truncation: o = null, max_length: i = null } = t;
		const l = t.return_tensor ?? !0, c = Array.isArray(e);
		let u;
		if (c) {
			if (0 === e.length) throw Error("text array must be non-empty");
			if (null !== n) {
				if (!Array.isArray(n)) throw Error("text_pair must also be an array");
				if (e.length !== n.length) throw Error("text and text_pair must have the same length");
				u = e.map((e, t) => this._encode_plus(e, {
					text_pair: n[t],
					add_special_tokens: s,
					return_token_type_ids: a
				}));
			} else u = e.map((e) => this._encode_plus(e, {
				add_special_tokens: s,
				return_token_type_ids: a
			}));
		} else {
			if (null == e) throw Error("text may not be null or undefined");
			if (Array.isArray(n)) throw Error("When specifying `text_pair`, since `text` is a string, `text_pair` must also be a string (i.e., not an array).");
			u = [this._encode_plus(e, {
				text_pair: n,
				add_special_tokens: s,
				return_token_type_ids: a
			})];
		}
		if (null === i ? i = this.model_max_length : null === o && (!0 === r ? (Os.warn("`max_length` is ignored when `padding: true` and there is no truncation strategy. To pad to max length, use `padding: 'max_length'`."), i = this.model_max_length) : !1 === r && (Os.warn("Truncation was not explicitly activated but `max_length` is provided a specific value, please use `truncation: true` to explicitly truncate examples to max length."), o = !0)), !0 === r && (i = Math.min(Zo(u.map((e) => e.input_ids.length))[0], i ?? Infinity)), i = Math.min(i, this.model_max_length ?? Infinity), r || o) for (let h = 0; h < u.length; ++h) {
			if (u[h].input_ids.length === i) continue;
			u[h].input_ids.length > i ? o && hl(u[h], i) : r && dl(u[h], i, (e) => "input_ids" === e ? this.pad_token_id : 0, this.padding_side);
		}
		const d = {};
		if (l) {
			if ((!r || !o) && u.some((e) => {
				for (const t of Object.keys(e)) if (e[t].length !== u[0][t]?.length) return !0;
				return !1;
			})) throw Error("Unable to create tensor, you should probably activate truncation and/or padding with 'padding=true' and 'truncation=true' to have batched tensors with the same length.");
			const e = [u.length, u[0].input_ids.length];
			for (const t of Object.keys(u[0])) d[t] = new Ri("int64", BigInt64Array.from(u.flatMap((e) => e[t]).map(BigInt)), e);
		} else {
			for (const e of Object.keys(u[0])) d[e] = u.map((t) => t[e]);
			if (!c) for (const e of Object.keys(d)) d[e] = d[e][0];
		}
		return d;
	}
	_encode_text(e) {
		return null === e ? null : this._tokenizer.encode(e).tokens;
	}
	_encode_plus(e, { text_pair: t = null, add_special_tokens: n = !0, return_token_type_ids: s = null } = {}) {
		const { ids: r, attention_mask: a, token_type_ids: o } = this._tokenizer.encode(e, {
			text_pair: t,
			add_special_tokens: n,
			return_token_type_ids: s ?? this.return_token_type_ids
		});
		return {
			input_ids: r,
			attention_mask: a,
			...o ? { token_type_ids: o } : {}
		};
	}
	tokenize(e, { pair: t = null, add_special_tokens: n = !1 } = {}) {
		return this._tokenizer.tokenize(e, {
			text_pair: t,
			add_special_tokens: n
		});
	}
	encode(e, { text_pair: t = null, add_special_tokens: n = !0, return_token_type_ids: s = null } = {}) {
		return this._tokenizer.encode(e, {
			text_pair: t,
			add_special_tokens: n,
			return_token_type_ids: s
		}).ids;
	}
	batch_decode(e, t = {}) {
		return e instanceof Ri && (e = e.tolist()), e.map((e) => this.decode(e, t));
	}
	decode(e, t = {}) {
		if (e instanceof Ri && (e = cl(e)), !Array.isArray(e) || 0 === e.length || (n = e[0], !Number.isInteger(n) && "bigint" != typeof n)) throw Error("token_ids must be a non-empty array of integers.");
		var n;
		return this.decode_single(e, t);
	}
	decode_single(e, { skip_special_tokens: t = !1, clean_up_tokenization_spaces: n = null }) {
		return this._tokenizer.decode(e, {
			skip_special_tokens: t,
			clean_up_tokenization_spaces: n
		});
	}
	get_chat_template({ chat_template: e = null, tools: t = null } = {}) {
		if (this.chat_template && "object" == typeof this.chat_template) {
			const n = this.chat_template;
			if (null !== e && Object.hasOwn(n, e)) e = n[e];
			else if (null === e) if (null !== t && "tool_use" in n) e = n.tool_use;
			else {
				if (!("default" in n)) throw Error(`This model has multiple chat templates with no default specified! Please either pass a chat template or the name of the template you wish to use to the 'chat_template' argument. Available template names are ${Object.keys(n).sort()}.`);
				e = n.default;
			}
		} else if (null === e) {
			if (!this.chat_template) throw Error("Cannot use apply_chat_template() because tokenizer.chat_template is not set and no template argument was passed! For information about writing templates and setting the tokenizer.chat_template attribute, please see the documentation at https://huggingface.co/docs/transformers/main/en/chat_templating");
			e = this.chat_template;
		}
		return e;
	}
	apply_chat_template(e, t = {}) {
		let { tools: n = null, documents: s = null, chat_template: r = null, add_generation_prompt: a = !1, tokenize: o = !0, padding: i = !1, truncation: l = !1, max_length: c = null, return_tensor: u = !0, return_dict: d = !0, tokenizer_kwargs: h = {}, ..._ } = t;
		if (r = this.get_chat_template({
			chat_template: r,
			tools: n
		}), "string" != typeof r) throw Error("chat_template must be a string, but got " + typeof r);
		let p = this._compiled_template_cache.get(r);
		void 0 === p && (p = new yo(r), this._compiled_template_cache.set(r, p));
		const f = Object.create(null);
		for (const g of ul) {
			const e = _l(this.config, g);
			e && (f[g] = e);
		}
		const m = p.render({
			messages: e,
			add_generation_prompt: a,
			tools: n,
			documents: s,
			...f,
			..._
		});
		if (o) {
			const e = this._call(m, {
				add_special_tokens: !1,
				padding: i,
				truncation: l,
				max_length: c,
				return_tensor: u,
				...h
			});
			return d ? e : e.input_ids;
		}
		return m;
	}
};
function fl(e, t, n, s) {
	if (!("language_codes" in e) || !Array.isArray(e.language_codes)) throw new Error("Tokenizer must have `language_codes` attribute set and it should be an array of language ids.");
	if (!("languageRegex" in e && e.languageRegex instanceof RegExp)) throw new Error("Tokenizer must have `languageRegex` attribute set and it should be a regular expression.");
	if (!("lang_to_token" in e) || "function" != typeof e.lang_to_token) throw new Error("Tokenizer must have `lang_to_token` attribute set and it should be a function.");
	const r = s.src_lang, a = s.tgt_lang;
	if (!e.language_codes.includes(a)) throw new Error(`Target language code "${a}" is not valid. Must be one of: {${e.language_codes.join(", ")}}`);
	if (void 0 !== r) {
		if (!e.language_codes.includes(r)) throw new Error(`Source language code "${r}" is not valid. Must be one of: {${e.language_codes.join(", ")}}`);
		for (const t of e._tokenizer.post_processor.config.single) if ("SpecialToken" in t && e.languageRegex.test(t.SpecialToken.id)) {
			t.SpecialToken.id = e.lang_to_token(r);
			break;
		}
	}
	return s.forced_bos_token_id = e._tokenizer.token_to_id(e.lang_to_token(a)), e._call(t, n);
}
var ml = {};
Wn(ml, {
	AlbertTokenizer: () => gl,
	AutoTokenizer: () => _c,
	BartTokenizer: () => wl,
	BertTokenizer: () => yl,
	BlenderbotSmallTokenizer: () => bl,
	BlenderbotTokenizer: () => xl,
	BloomTokenizer: () => vl,
	CLIPTokenizer: () => kl,
	CamembertTokenizer: () => Ml,
	CodeGenTokenizer: () => Al,
	CodeLlamaTokenizer: () => El,
	CohereAsrTokenizer: () => Tl,
	CohereTokenizer: () => Cl,
	ConvBertTokenizer: () => Sl,
	DebertaTokenizer: () => Il,
	DebertaV2Tokenizer: () => Fl,
	DistilBertTokenizer: () => Pl,
	ElectraTokenizer: () => Ll,
	EsmTokenizer: () => Ol,
	FalconTokenizer: () => zl,
	GPT2Tokenizer: () => $l,
	GPTNeoXTokenizer: () => Bl,
	GemmaTokenizer: () => Nl,
	HerbertTokenizer: () => Dl,
	LlamaTokenizer: () => Rl,
	M2M100Tokenizer: () => Gl,
	MBart50Tokenizer: () => jl,
	MBartTokenizer: () => Vl,
	MPNetTokenizer: () => Hl,
	MarianTokenizer: () => Ul,
	MgpstrTokenizer: () => ql,
	MobileBertTokenizer: () => Wl,
	NllbTokenizer: () => Ql,
	NougatTokenizer: () => Xl,
	PreTrainedTokenizer: () => pl,
	Qwen2Tokenizer: () => Jl,
	RoFormerTokenizer: () => Kl,
	RobertaTokenizer: () => Yl,
	SiglipTokenizer: () => Zl,
	SpeechT5Tokenizer: () => ec,
	SqueezeBertTokenizer: () => tc,
	T5Tokenizer: () => nc,
	TokenizersBackend: () => pl,
	VitsTokenizer: () => rc,
	Wav2Vec2CTCTokenizer: () => ac,
	WhisperTokenizer: () => uc,
	XLMRobertaTokenizer: () => dc,
	XLMTokenizer: () => hc
});
var gl = class extends pl {
	return_token_type_ids = !0;
}, wl = class extends pl {}, yl = class extends pl {
	return_token_type_ids = !0;
}, bl = class extends pl {}, xl = class extends pl {}, vl = class extends pl {}, Ml = class extends pl {}, kl = class extends pl {}, El = class extends pl {}, Al = class extends pl {}, Cl = class extends pl {}, Tl = class extends pl {}, Sl = class extends pl {
	return_token_type_ids = !0;
}, Fl = class extends pl {
	return_token_type_ids = !0;
}, Il = class extends pl {
	return_token_type_ids = !0;
}, Pl = class extends pl {}, Ll = class extends pl {
	return_token_type_ids = !0;
}, Ol = class extends pl {}, zl = class extends pl {}, Nl = class extends pl {}, Bl = class extends pl {}, $l = class extends pl {}, Dl = class extends pl {
	return_token_type_ids = !0;
}, Rl = class extends pl {
	padding_side = "left";
}, Gl = class extends pl {
	constructor(e, t) {
		super(e, t), this.languageRegex = /^__[a-z]{2,3}__$/, this.language_codes = this.all_special_tokens.filter((e) => this.languageRegex.test(e)).map((e) => e.slice(2, -2)), this.lang_to_token = (e) => `__${e}__`;
	}
	_build_translation_inputs(e, t, n) {
		return fl(this, e, t, n);
	}
}, Ul = class extends pl {
	constructor(e, t) {
		super(e, t), this.languageRegex = /^(>>\w+<<)\s*/g, this.supported_language_codes = Array.from(this.get_vocab().keys()).filter((e) => this.languageRegex.test(e)), Os.warn("WARNING: `MarianTokenizer` is not yet supported by Hugging Face's \"fast\" tokenizers library. Therefore, you may experience slightly inaccurate results.");
	}
	_encode_text(e) {
		if (null === e) return null;
		const [t, ...n] = e.trim().split(this.languageRegex);
		if (0 === n.length) return super._encode_text(t);
		if (2 === n.length) {
			const [e, t] = n;
			return this.supported_language_codes.includes(e) || Os.warn(`Unsupported language code "${e}" detected, which may lead to unexpected behavior. Should be one of: ${JSON.stringify(this.supported_language_codes)}`), Ts([e], super._encode_text(t));
		}
	}
}, Vl = class extends pl {
	constructor(e, t) {
		super(e, t), this.languageRegex = /^[a-z]{2}_[A-Z]{2}$/, this.language_codes = this.all_special_tokens.filter((e) => this.languageRegex.test(e)).map((e) => e), this.lang_to_token = (e) => e;
	}
	_build_translation_inputs(e, t, n) {
		return fl(this, e, t, n);
	}
}, jl = class extends Vl {}, ql = class extends pl {}, Wl = class extends pl {
	return_token_type_ids = !0;
}, Hl = class extends pl {}, Ql = class extends pl {
	constructor(e, t) {
		super(e, t), this.languageRegex = /^[a-z]{3}_[A-Z][a-z]{3}$/, this.language_codes = this.all_special_tokens.filter((e) => this.languageRegex.test(e)), this.lang_to_token = (e) => e;
	}
	_build_translation_inputs(e, t, n) {
		return fl(this, e, t, n);
	}
}, Xl = class extends pl {}, Jl = class extends pl {}, Yl = class extends pl {}, Kl = class extends pl {
	return_token_type_ids = !0;
}, Zl = class extends pl {}, ec = class extends pl {}, tc = class extends pl {
	return_token_type_ids = !0;
}, nc = class extends pl {}, sc = class extends qr {
	decode_chain(e) {
		let t = "";
		for (let n = 1; n < e.length; n += 2) t += e[n];
		return [t];
	}
}, rc = class extends pl {
	constructor(e, t) {
		super(e, t), this._tokenizer.decoder = new sc({ type: "VitsDecoder" });
	}
}, ac = class extends pl {}, oc = [
	["en", "english"],
	["zh", "chinese"],
	["de", "german"],
	["es", "spanish"],
	["ru", "russian"],
	["ko", "korean"],
	["fr", "french"],
	["ja", "japanese"],
	["pt", "portuguese"],
	["tr", "turkish"],
	["pl", "polish"],
	["ca", "catalan"],
	["nl", "dutch"],
	["ar", "arabic"],
	["sv", "swedish"],
	["it", "italian"],
	["id", "indonesian"],
	["hi", "hindi"],
	["fi", "finnish"],
	["vi", "vietnamese"],
	["he", "hebrew"],
	["uk", "ukrainian"],
	["el", "greek"],
	["ms", "malay"],
	["cs", "czech"],
	["ro", "romanian"],
	["da", "danish"],
	["hu", "hungarian"],
	["ta", "tamil"],
	["no", "norwegian"],
	["th", "thai"],
	["ur", "urdu"],
	["hr", "croatian"],
	["bg", "bulgarian"],
	["lt", "lithuanian"],
	["la", "latin"],
	["mi", "maori"],
	["ml", "malayalam"],
	["cy", "welsh"],
	["sk", "slovak"],
	["te", "telugu"],
	["fa", "persian"],
	["lv", "latvian"],
	["bn", "bengali"],
	["sr", "serbian"],
	["az", "azerbaijani"],
	["sl", "slovenian"],
	["kn", "kannada"],
	["et", "estonian"],
	["mk", "macedonian"],
	["br", "breton"],
	["eu", "basque"],
	["is", "icelandic"],
	["hy", "armenian"],
	["ne", "nepali"],
	["mn", "mongolian"],
	["bs", "bosnian"],
	["kk", "kazakh"],
	["sq", "albanian"],
	["sw", "swahili"],
	["gl", "galician"],
	["mr", "marathi"],
	["pa", "punjabi"],
	["si", "sinhala"],
	["km", "khmer"],
	["sn", "shona"],
	["yo", "yoruba"],
	["so", "somali"],
	["af", "afrikaans"],
	["oc", "occitan"],
	["ka", "georgian"],
	["be", "belarusian"],
	["tg", "tajik"],
	["sd", "sindhi"],
	["gu", "gujarati"],
	["am", "amharic"],
	["yi", "yiddish"],
	["lo", "lao"],
	["uz", "uzbek"],
	["fo", "faroese"],
	["ht", "haitian creole"],
	["ps", "pashto"],
	["tk", "turkmen"],
	["nn", "nynorsk"],
	["mt", "maltese"],
	["sa", "sanskrit"],
	["lb", "luxembourgish"],
	["my", "myanmar"],
	["bo", "tibetan"],
	["tl", "tagalog"],
	["mg", "malagasy"],
	["as", "assamese"],
	["tt", "tatar"],
	["haw", "hawaiian"],
	["ln", "lingala"],
	["ha", "hausa"],
	["ba", "bashkir"],
	["jw", "javanese"],
	["su", "sundanese"]
], ic = new Map(oc), lc = new Map([
	...oc.map(([e, t]) => [t, e]),
	["burmese", "my"],
	["valencian", "ca"],
	["flemish", "nl"],
	["haitian", "ht"],
	["letzeburgesch", "lb"],
	["pushto", "ps"],
	["panjabi", "pa"],
	["moldavian", "ro"],
	["moldovan", "ro"],
	["sinhalese", "si"],
	["castilian", "es"]
]);
var cc = /* @__PURE__ */ new RegExp("^[\\p{P}\\u0021-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E]+$", "gu"), uc = class extends pl {
	get timestamp_begin() {
		return this._tokenizer.token_to_id("<|notimestamps|>") + 1;
	}
	_decode_asr(e, { return_timestamps: t = !1, return_language: n = !1, time_precision: s = null, force_full_sequences: r = !0 } = {}) {
		if (null === s) throw Error("Must specify time_precision");
		let a = null;
		const o = "word" === t;
		function i() {
			return {
				language: a,
				timestamp: [null, null],
				text: ""
			};
		}
		const l = [];
		let c = i(), u = 0;
		const d = this.timestamp_begin, h = d + 1500;
		let _ = [], p = [], f = !1, m = null;
		const g = new Set(this.all_special_ids);
		for (const b of e) {
			const e = b.tokens, n = o ? b.token_timestamps : null;
			let r = null, w = d;
			if ("stride" in b) {
				const [t, n, a] = b.stride;
				if (u -= n, m = t - a, n && (w = n / s + d), a) for (let o = e.length - 1; o >= 0; --o) {
					const t = Number(e[o]);
					if (t >= d) {
						if (null !== r && (t - d) * s < m) break;
						r = t;
					}
				}
			}
			let y = [], x = [];
			for (let m = 0; m < e.length; ++m) {
				const b = Number(e[m]);
				if (g.has(b)) {
					const e = this.decode([b]), n = ic.get(e.slice(2, -2));
					if (void 0 !== n) {
						if (null !== a && n !== a && !t) {
							_.push(y);
							const e = this.findLongestCommonSequence(_)[0], t = this.decode(e);
							c.text = t, l.push(c), _ = [], y = [], c = i();
						}
						a = c.language = n;
					}
				} else if (b >= d && b <= h) {
					const e = ai((b - d) * s + u, 2);
					if (null !== r && b >= r) f = !0;
					else if (f || _.length > 0 && b < w) f = !1;
					else if (null === c.timestamp[0]) c.timestamp[0] = e;
					else if (e === c.timestamp[0]);
					else {
						c.timestamp[1] = e, _.push(y), o && p.push(x);
						const [t, n] = this.findLongestCommonSequence(_, p), s = this.decode(t);
						if (c.text = s, o && (c.words = this.collateWordTimestamps(t, n, a), c.words.length > 0 && null !== c.timestamp[1])) for (const e of c.words) e.timestamp[1] > c.timestamp[1] && c.timestamp[1] >= e.timestamp[0] && (e.timestamp[1] = c.timestamp[1]);
						l.push(c), _ = [], y = [], p = [], x = [], c = i();
					}
				} else if (y.push(b), o) {
					let e, t = ai(n[m] + u, 2);
					if (m + 1 < n.length) {
						e = ai(n[m + 1] + u, 2);
						const r = this.decode([b]);
						cc.test(r) && (e = ai(Math.min(t + s, e), 2));
					} else e = null;
					x.push([t, e]);
				}
			}
			if ("stride" in b) {
				const [e, t, n] = b.stride;
				u += e - n;
			}
			y.length > 0 ? (_.push(y), o && p.push(x)) : _.every((e) => 0 === e.length) && (c = i(), _ = [], y = [], p = [], x = []);
		}
		if (_.length > 0) {
			if (r && t) throw new Error("Whisper did not predict an ending timestamp, which can happen if audio is cut off in the middle of a word. Also make sure WhisperTimeStampLogitsProcessor was used during generation.");
			const [e, n] = this.findLongestCommonSequence(_, p), s = this.decode(e);
			c.text = s, o && (c.words = this.collateWordTimestamps(e, n, a)), l.push(c);
		}
		let w = Object.create(null);
		const y = l.map((e) => e.text).join("");
		if (t || n) {
			for (let e = 0; e < l.length; ++e) {
				const s = l[e];
				t || delete s.timestamp, n || delete s.language;
			}
			if (o) {
				const e = [];
				for (const t of l) for (const n of t.words) e.push(n);
				w = { chunks: e };
			} else w = { chunks: l };
		}
		return [y, w];
	}
	findLongestCommonSequence(e, t = null) {
		let n = e[0], s = n.length, r = [];
		const a = Array.isArray(t) && t.length > 0;
		let o = a ? [] : null, i = a ? t[0] : null;
		for (let l = 1; l < e.length; ++l) {
			const c = e[l];
			let u = 0, d = [
				s,
				s,
				0,
				0
			];
			const h = c.length;
			for (let e = 1; e < s + h; ++e) {
				const r = Math.max(0, s - e), o = Math.min(s, s + h - e), _ = n.slice(r, o), p = Math.max(0, e - s), f = Math.min(h, e), m = c.slice(p, f);
				if (_.length !== m.length) throw new Error("There is a bug within whisper `decode_asr` function, please report it. Dropping to prevent bad inference.");
				let g;
				g = a ? _.filter((e, n) => e === m[n] && i[r + n][0] - .1 <= t[l][p + n][0]).length : _.filter((e, t) => e === m[t]).length;
				const w = g / e + e / 1e4;
				g > 1 && w > u && (u = w, d = [
					r,
					o,
					p,
					f
				]);
			}
			const [_, p, f, m] = d, g = Math.floor((p + _) / 2);
			let w = Math.floor((m + f) / 2);
			if (a && 0 === u && s > 0) {
				const e = i[s - 1][0], n = t[l].findIndex((t) => t[0] >= e);
				w = -1 === n ? c.length : n;
			}
			r.push(...n.slice(0, g)), n = c.slice(w), s = n.length, a && (o.push(...i.slice(0, g)), i = t[l].slice(w));
		}
		return r.push(...n), a ? (o.push(...i), [r, o]) : [r, []];
	}
	collateWordTimestamps(e, t, n) {
		const [s, r, a] = this.combineTokensIntoWords(e, n), o = [];
		for (let i = 0; i < s.length; ++i) {
			const e = a[i];
			o.push({
				text: s[i],
				timestamp: [t[e.at(0)][0], t[e.at(-1)][1]]
			});
		}
		return o;
	}
	combineTokensIntoWords(e, t, n = "\"'“¡¿([{-", s = "\"'.。,，!！?？:：”)]}、") {
		let r, a, o;
		return [
			"chinese",
			"japanese",
			"thai",
			"lao",
			"myanmar"
		].includes(t = t ?? "english") ? [r, a, o] = this.splitTokensOnUnicode(e) : [r, a, o] = this.splitTokensOnSpaces(e), this.mergePunctuations(r, a, o, n, s);
	}
	decode(e, t) {
		let n;
		return t?.decode_with_timestamps ? (e instanceof Ri && (e = cl(e)), n = this.decodeWithTimestamps(e, t)) : n = super.decode(e, t), n;
	}
	decodeWithTimestamps(e, t) {
		const n = t?.time_precision ?? .02, s = this.all_special_ids.at(-1) + 1;
		let r = [[]];
		for (let a of e) if (a = Number(a), a >= s) {
			const e = ((a - s) * n).toFixed(2);
			r.push(`<|${e}|>`), r.push([]);
		} else r[r.length - 1].push(a);
		return r = r.map((e) => "string" == typeof e ? e : super.decode(e, t)), r.join("");
	}
	splitTokensOnUnicode(e) {
		const t = this.decode(e, { decode_with_timestamps: !0 }), n = [], s = [], r = [];
		let a = [], o = [], i = 0;
		for (let l = 0; l < e.length; ++l) {
			const c = e[l];
			a.push(c), o.push(l);
			const u = this.decode(a, { decode_with_timestamps: !0 });
			u.includes("�") && "�" !== t[i + u.indexOf("�")] || (n.push(u), s.push(a), r.push(o), a = [], o = [], i += u.length);
		}
		return [
			n,
			s,
			r
		];
	}
	splitTokensOnSpaces(e) {
		const [t, n, s] = this.splitTokensOnUnicode(e), r = [], a = [], o = [];
		for (let i = 0; i < t.length; ++i) {
			const e = t[i], l = n[i], c = s[i], u = l[0] >= this._tokenizer.token_to_id("<|endoftext|>"), d = e.startsWith(" "), h = e.trim(), _ = cc.test(h);
			if (u || d || _ || 0 === r.length) r.push(e), a.push(l), o.push(c);
			else {
				const t = r.length - 1;
				r[t] += e, a[t].push(...l), o[t].push(...c);
			}
		}
		return [
			r,
			a,
			o
		];
	}
	mergePunctuations(e, t, n, s, r) {
		const a = structuredClone(e), o = structuredClone(t), i = structuredClone(n);
		let l = a.length - 2, c = a.length - 1;
		for (; l >= 0;) a[l].startsWith(" ") && s.includes(a[l].trim()) ? (a[c] = a[l] + a[c], o[c] = Ts(o[l], o[c]), i[c] = Ts(i[l], i[c]), a[l] = "", o[l] = [], i[l] = []) : c = l, --l;
		for (l = 0, c = 1; c < a.length;) !a[l].endsWith(" ") && r.includes(a[c]) ? (a[l] += a[c], o[l] = Ts(o[l], o[c]), i[l] = Ts(i[l], i[c]), a[c] = "", o[c] = [], i[c] = []) : l = c, ++c;
		return [
			a.filter((e) => e),
			o.filter((e) => e.length > 0),
			i.filter((e) => e.length > 0)
		];
	}
}, dc = class extends pl {}, hc = class extends pl {
	return_token_type_ids = !0;
	constructor(e, t) {
		super(e, t), Os.warn("WARNING: `XLMTokenizer` is not yet supported by Hugging Face's \"fast\" tokenizers library. Therefore, you may experience slightly inaccurate results.");
	}
}, _c = class {
	static async from_pretrained(e, { progress_callback: t = null, config: n = null, cache_dir: s = null, local_files_only: r = !1, revision: a = "main" } = {}) {
		const [o, i] = await ll(e, {
			progress_callback: t,
			config: n,
			cache_dir: s,
			local_files_only: r,
			revision: a
		}), l = i.tokenizer_class?.replace(/Fast$/, "") ?? "PreTrainedTokenizer";
		let c = ml[l];
		return c || (Os.warn(`Unknown tokenizer class "${l}", attempting to construct from base class.`), c = pl), new c(o, i);
	}
}, pc = "https://github.com/huggingface/transformers.js/issues/new/choose", fc = "preprocessor_config.json", mc = fc, gc = "processor_config.json", wc = "chat_template.jinja", yc = class extends Ms {
	static classes = [
		"image_processor_class",
		"tokenizer_class",
		"feature_extractor_class"
	];
	static uses_processor_config = !1;
	static uses_chat_template_file = !1;
	constructor(e, t, n) {
		super(), this.config = e, this.components = t, this.chat_template = n;
	}
	get image_processor() {
		return this.components.image_processor;
	}
	get tokenizer() {
		return this.components.tokenizer;
	}
	get feature_extractor() {
		return this.components.feature_extractor;
	}
	apply_chat_template(e, t = {}) {
		if (!this.tokenizer) throw new Error("Unable to apply chat template without a tokenizer.");
		return this.tokenizer.apply_chat_template(e, {
			tokenize: !1,
			chat_template: this.chat_template ?? void 0,
			...t
		});
	}
	batch_decode(...e) {
		if (!this.tokenizer) throw new Error("Unable to decode without a tokenizer.");
		return this.tokenizer.batch_decode(...e);
	}
	decode(...e) {
		if (!this.tokenizer) throw new Error("Unable to decode without a tokenizer.");
		return this.tokenizer.decode(...e);
	}
	async _call(e, ...t) {
		for (const n of [
			this.image_processor,
			this.feature_extractor,
			this.tokenizer
		]) if (n) return n(e, ...t);
		throw new Error("No image processor, feature extractor, or tokenizer found.");
	}
	static async from_pretrained(e, t = {}) {
		const [n, s, r] = await Promise.all([
			this.uses_processor_config ? Xo(e, gc, !0, t) : {},
			Promise.all(this.classes.filter((e) => e in this).map(async (n) => {
				const s = await this[n].from_pretrained(e, t);
				return [n.replace(/_class$/, ""), s];
			})).then(Object.fromEntries),
			this.uses_chat_template_file ? Qo(e, wc, !0, t) : null
		]);
		return new this(n, s, r);
	}
}, bc = {};
Wn(bc, {
	ChatterboxProcessor: () => cu,
	CohereAsrProcessor: () => du,
	Florence2Processor: () => Xd,
	Gemma3Processor: () => Jd,
	Gemma3nProcessor: () => Yd,
	Gemma4Processor: () => Kd,
	Glm46VProcessor: () => eh,
	GraniteSpeechProcessor: () => th,
	GroundingDinoProcessor: () => sh,
	Idefics3Processor: () => ah,
	JinaCLIPProcessor: () => ih,
	Lfm2VlProcessor: () => lh,
	LlavaProcessor: () => ch,
	MgpstrProcessor: () => dh,
	MoonshineProcessor: () => hh,
	OwlViTProcessor: () => _h,
	PaliGemmaProcessor: () => fh,
	Phi3VProcessor: () => wh,
	PixtralProcessor: () => yh,
	Processor: () => yc,
	PyAnnoteProcessor: () => bh,
	Qwen2VLProcessor: () => Zd,
	Qwen2_5_VLProcessor: () => xh,
	Qwen3VLProcessor: () => vh,
	Sam2Processor: () => kh,
	Sam2VideoProcessor: () => Eh,
	SamProcessor: () => Mh,
	SmolVLMProcessor: () => ah,
	SpeechT5Processor: () => Ah,
	UltravoxProcessor: () => Ch,
	VLChatProcessor: () => oh,
	VoxtralProcessor: () => Sh,
	VoxtralRealtimeProcessor: () => Fh,
	Wav2Vec2Processor: () => Ih,
	Wav2Vec2ProcessorWithLM: () => Ph,
	WhisperProcessor: () => Lh
});
var xc = class extends Ms {
	constructor(e) {
		super(), this.config = e;
	}
	static async from_pretrained(e, t = {}) {
		return new this(await Xo(e, fc, !0, t));
	}
};
function vc(e, t) {
	if (!(e instanceof Float32Array || e instanceof Float64Array)) throw new Error(`${t} expects input to be a Float32Array or a Float64Array, but got ${e?.constructor?.name ?? typeof e} instead. If using the feature extractor directly, remember to use \`read_audio(url, sampling_rate)\` to obtain the raw audio data of the file/url.`);
}
var Mc = {};
Wn(Mc, {
	ASTFeatureExtractor: () => Vc,
	ChatterboxFeatureExtractor: () => qc,
	ClapFeatureExtractor: () => Wc,
	CohereAsrFeatureExtractor: () => Qc,
	DacFeatureExtractor: () => Xc,
	EncodecFeatureExtractor: () => jc,
	FeatureExtractor: () => xc,
	Gemma3nAudioFeatureExtractor: () => Jc,
	Gemma4AudioFeatureExtractor: () => Yc,
	GraniteSpeechFeatureExtractor: () => Kc,
	MoonshineFeatureExtractor: () => Zc,
	ParakeetFeatureExtractor: () => Hc,
	PyAnnoteFeatureExtractor: () => eu,
	SeamlessM4TFeatureExtractor: () => tu,
	SnacFeatureExtractor: () => nu,
	SpeechT5FeatureExtractor: () => su,
	VoxtralRealtimeFeatureExtractor: () => ou,
	Wav2Vec2FeatureExtractor: () => ru,
	WeSpeakerFeatureExtractor: () => au,
	WhisperFeatureExtractor: () => iu
});
var kc = () => {}, Ec = () => {};
async function Ac(e, t) {
	if (hs.IS_BROWSER_ENV) {
		if (hs.IS_WEBWORKER_ENV) throw new Error("Unable to save a file from a Web Worker.");
		const n = URL.createObjectURL(t), s = document.createElement("a");
		s.href = n, s.download = e, s.click(), s.remove(), URL.revokeObjectURL(n);
	} else {
		if (!hs.IS_FS_AVAILABLE) throw new Error("Unable to save because filesystem is disabled in this environment.");
		await Ec(kc(t.stream()), Hn.createWriteStream(e));
	}
}
var Cc = async function(e, t) {
	if ("undefined" == typeof AudioContext) throw Error("Unable to load audio from path/URL since `AudioContext` is not available in your environment. Instead, audio data should be passed directly to the pipeline/processor. For more information and some example code, see https://huggingface.co/docs/transformers.js/guides/node-audio-processing.");
	const n = await (await Go(e)).arrayBuffer(), s = new AudioContext({ sampleRate: t });
	void 0 === t && Os.warn(`No sampling rate provided, using default of ${s.sampleRate}Hz.`);
	const r = await s.decodeAudioData(n);
	let a;
	if (2 === r.numberOfChannels) {
		const e = Math.sqrt(2), t = r.getChannelData(0), n = r.getChannelData(1);
		a = new Float32Array(t.length);
		for (let s = 0; s < r.length; ++s) a[s] = e * (t[s] + n[s]) / 2;
	} else a = r.getChannelData(0);
	return a;
};
function Tc(e, t) {
	if (e < 1) return new Float64Array();
	if (1 === e) return new Float64Array([1]);
	const n = 1 - t, s = 2 * Math.PI / (e - 1), r = new Float64Array(e);
	for (let a = 0; a < e; ++a) r[a] = t - n * Math.cos(a * s);
	return r;
}
function Sc(e) {
	return Tc(e, .5);
}
var Fc = {
	htk: (e) => 2595 * Math.log10(1 + e / 700),
	kaldi: (e) => 1127 * Math.log(1 + e / 700),
	slaney: (e, t = 1e3, n = 15, s = 27 / Math.log(6.4)) => e >= t ? n + Math.log(e / t) * s : 3 * e / 200
};
function Ic(e, t = "htk") {
	const n = Fc[t];
	if (!n) throw new Error("mel_scale should be one of \"htk\", \"slaney\" or \"kaldi\".");
	return "number" == typeof e ? n(e) : e.map((e) => n(e));
}
var Pc = {
	htk: (e) => 700 * (10 ** (e / 2595) - 1),
	kaldi: (e) => 700 * (Math.exp(e / 1127) - 1),
	slaney: (e, t = 1e3, n = 15, s = Math.log(6.4) / 27) => e >= n ? t * Math.exp(s * (e - n)) : 200 * e / 3
};
function Lc(e, t, n) {
	const s = (t - e) / (n - 1);
	return Float64Array.from({ length: n }, (t, n) => e + s * n);
}
function Oc(e, t, n, s, r, a = null, o = "htk", i = !1) {
	if (null !== a && "slaney" !== a) throw new Error("norm must be one of null or \"slaney\"");
	if (e < 2) throw new Error(`Require num_frequency_bins: ${e} >= 2`);
	if (n > s) throw new Error(`Require min_frequency: ${n} <= max_frequency: ${s}`);
	const l = Lc(Ic(n, o), Ic(s, o), t + 2);
	let c, u = function(e, t = "htk") {
		const n = Pc[t];
		if (!n) throw new Error("mel_scale should be one of \"htk\", \"slaney\" or \"kaldi\".");
		return "number" == typeof e ? n(e) : e.map((e) => n(e));
	}(l, o);
	if (i) {
		const t = r / (2 * (e - 1));
		c = Ic(Float64Array.from({ length: e }, (e, n) => n * t), o), u = l;
	} else c = Lc(0, Math.floor(r / 2), e);
	const d = function(e, t) {
		const n = Float64Array.from({ length: t.length - 1 }, (e, n) => t[n + 1] - t[n]), s = Array.from({ length: e.length }, () => new Array(t.length));
		for (let o = 0; o < e.length; ++o) {
			const n = s[o];
			for (let s = 0; s < t.length; ++s) n[s] = t[s] - e[o];
		}
		const r = t.length - 2, a = Array.from({ length: r }, () => new Array(e.length));
		for (let o = 0; o < e.length; ++o) {
			const e = s[o];
			for (let t = 0; t < r; ++t) {
				const s = -e[t] / n[t], r = e[t + 2] / n[t + 1];
				a[t][o] = Math.max(0, Math.min(s, r));
			}
		}
		return a;
	}(c, u);
	if (null !== a && "slaney" === a) for (let h = 0; h < t; ++h) {
		const t = d[h], n = 2 / (u[h + 2] - u[h]);
		for (let s = 0; s < e; ++s) t[s] *= n;
	}
	return d;
}
function zc(e, t, n, s, r) {
	if (n <= 0) throw new Error("reference must be greater than zero");
	if (s <= 0) throw new Error("min_value must be greater than zero");
	n = Math.max(s, n);
	const a = Math.log10(n);
	for (let o = 0; o < e.length; ++o) e[o] = t * Math.log10(Math.max(s, e[o]) - a);
	if (null !== r) {
		if (r <= 0) throw new Error("db_range must be greater than zero");
		const t = Zo(e)[0] - r;
		for (let n = 0; n < e.length; ++n) e[n] = Math.max(e[n], t);
	}
	return e;
}
async function Nc(e, t, n, s, { fft_length: r = null, power: a = 1, center: o = !0, pad_mode: i = "reflect", onesided: l = !0, preemphasis: c = null, preemphasis_htk_flavor: u = !0, mel_filters: d = null, mel_floor: h = 1e-10, log_mel: _ = null, max_log_mel: p = null, reference: f = 1, min_value: m = 1e-10, db_range: g = null, remove_dc_offset: w = null, min_num_frames: y = null, max_num_frames: b = null, do_pad: x = !0, transpose: v = !1, mel_offset: M = 0, mel_floor_mode: k = "clamp" } = {}) {
	const E = t.length;
	if (null === r && (r = n), n > r) throw Error(`frame_length (${n}) may not be larger than fft_length (${r})`);
	if (E !== n) throw new Error(`Length of the window (${E}) must equal frame_length (${n})`);
	if (s <= 0) throw new Error("hop_length must be greater than zero");
	if (null === a && null !== d) throw new Error("You have provided `mel_filters` but `power` is `None`. Mel spectrogram computation is not yet supported for complex-valued spectrogram. Specify `power` to fix this issue.");
	if (!u) throw new Error("`preemphasis_htk_flavor=false` is not currently supported.");
	if (o) {
		const t = Math.floor(n / 2);
		switch (i) {
			case "reflect":
				e = function(e, t, n) {
					const s = new e.constructor(e.length + t + n), r = e.length - 1;
					for (let a = 0; a < e.length; ++a) s[t + a] = e[a];
					for (let a = 1; a <= t; ++a) s[t - a] = e[Fs(a, r)];
					for (let a = 1; a <= n; ++a) s[r + t + a] = e[Fs(r - a, r)];
					return s;
				}(e, t, t);
				break;
			case "constant": {
				const n = new e.constructor(e.length + 2 * t);
				n.set(e, t), e = n;
				break;
			}
			case "semicausal": {
				const n = new e.constructor(e.length + t);
				n.set(e, t), e = n;
				break;
			}
			default: throw new Error(`pad_mode="${i}" not implemented yet.`);
		}
	}
	let A = Math.floor(1 + Math.floor((e.length - n) / s));
	null !== y && A < y && (A = y);
	const C = l ? Math.floor(r / 2) + 1 : r;
	let T = A, S = A;
	null !== b && (b > A ? x && (S = b) : S = T = b);
	const F = new si(r), I = new Float64Array(r), P = new Float64Array(F.outputBufferSize), L = new Float32Array(C * S);
	for (let B = 0; B < T; ++B) {
		const r = B * s, a = Math.min(e.length - r, n);
		a !== n && I.fill(0, 0, n);
		for (let t = 0; t < a; ++t) I[t] = e[r + t];
		if (w) {
			let e = 0;
			for (let n = 0; n < a; ++n) e += I[n];
			const t = e / a;
			for (let n = 0; n < a; ++n) I[n] -= t;
		}
		if (null !== c) {
			for (let e = a - 1; e >= 1; --e) I[e] -= c * I[e - 1];
			I[0] *= 1 - c;
		}
		for (let e = 0; e < t.length; ++e) I[e] *= t[e];
		F.realTransform(P, I);
		for (let e = 0; e < C; ++e) {
			const t = e << 1;
			L[e * S + B] = P[t] ** 2 + P[t + 1] ** 2;
		}
	}
	if (null !== a && 2 !== a) {
		const e = a / 2;
		for (let t = 0; t < L.length; ++t) L[t] **= e;
	}
	const O = d.length;
	let z = await async function(e, t) {
		return await (await Si.matmul)({
			a: e,
			b: t
		});
	}(new Ri("float32", d.flat(), [O, C]), new Ri("float32", L, [C, S]));
	v && (z = z.transpose(1, 0));
	const N = z.data;
	if ("add" === k) for (let B = 0; B < N.length; ++B) N[B] = M + N[B] + h;
	else for (let B = 0; B < N.length; ++B) N[B] = M + Math.max(h, N[B]);
	if (null !== a && null !== _) {
		const e = Math.min(N.length, T * O);
		switch (_) {
			case "log":
				for (let t = 0; t < e; ++t) N[t] = Math.log(N[t]);
				break;
			case "log10":
				for (let t = 0; t < e; ++t) N[t] = Math.log10(N[t]);
				break;
			case "log10_max_norm": {
				for (let n = 0; n < e; ++n) N[n] = Math.log10(N[n]);
				const t = (p ?? Zo(N)[0]) - 8;
				for (let n = 0; n < e; ++n) N[n] = (Math.max(N[n], t) + 4) / 4;
				break;
			}
			case "dB":
				if (1 === a) (function(e, t = 1, n = 1e-5, s = null) {
					zc(e, 20, t, n, s);
				})(N, f, m, g);
				else {
					if (2 !== a) throw new Error(`Cannot use log_mel option '${_}' with power ${a}`);
					(function(e, t = 1, n = 1e-10, s = null) {
						zc(e, 10, t, n, s);
					})(N, f, m, g);
				}
				break;
			default: throw new Error(`log_mel must be one of null, 'log', 'log10', 'log10_max_norm', or 'dB'. Got '${_}'`);
		}
	}
	return z;
}
function Bc(e, t, { periodic: n = !0, frame_length: s = null, center: r = !0 } = {}) {
	const a = n ? e + 1 : e;
	let o;
	switch (t) {
		case "boxcar":
			o = new Float64Array(a).fill(1);
			break;
		case "hann":
		case "hann_window":
			o = Sc(a);
			break;
		case "hamming":
			o = Tc(a, .54);
			break;
		case "povey":
			o = Sc(a).map((e) => Math.pow(e, .85));
			break;
		default: throw new Error(`Unknown window type ${t}.`);
	}
	if (n && (o = o.subarray(0, e)), null === s || e === s) return o;
	if (e > s) throw new Error(`Length of the window (${e}) may not be larger than frame_length (${s})`);
	const i = new Float64Array(s), l = r ? Math.floor((s - e) / 2) : 0;
	return i.set(o, l), i;
}
function $c(e, t, n) {
	for (let s = 0; s < n.length; ++s) e.setUint8(t + s, n.charCodeAt(s));
}
var Dc, Rc, Gc, Uc = class {
	constructor(e, t) {
		this.audio = e, this.sampling_rate = t;
	}
	get data() {
		if (Array.isArray(this.audio)) {
			if (0 === this.audio.length) return new Float32Array(0);
			if (1 === this.audio.length) return this.audio[0];
			const e = this.audio.reduce((e, t) => e + t.length, 0), t = new Float32Array(e);
			let n = 0;
			for (const s of this.audio) t.set(s, n), n += s.length;
			return t;
		}
		return this.audio;
	}
	toBlob() {
		let e = this.audio;
		return e instanceof Float32Array && (e = [e]), function(e, t) {
			const n = e.reduce((e, t) => e + t.length, 0), s = /* @__PURE__ */ new ArrayBuffer(44), r = new DataView(s);
			return $c(r, 0, "RIFF"), r.setUint32(4, 36 + 4 * n, !0), $c(r, 8, "WAVE"), $c(r, 12, "fmt "), r.setUint32(16, 16, !0), r.setUint16(20, 3, !0), r.setUint16(22, 1, !0), r.setUint32(24, t, !0), r.setUint32(28, 4 * t, !0), r.setUint16(32, 4, !0), r.setUint16(34, 32, !0), $c(r, 36, "data"), r.setUint32(40, 4 * n, !0), new Blob([s, ...e.map((e) => e.buffer)], { type: "audio/wav" });
		}(e, this.sampling_rate);
	}
	async save(e) {
		return Ac(e, this.toBlob());
	}
}, Vc = class extends xc {
	constructor(e) {
		super(e);
		const t = this.config.sampling_rate, n = Oc(257, this.config.num_mel_bins, 20, Math.floor(t / 2), t, null, "kaldi", !0);
		this.mel_filters = n, this.window = Bc(400, "hann", { periodic: !1 }), this.mean = this.config.mean, this.std = this.config.std;
	}
	async _extract_fbank_features(e, t) {
		return Nc(e, this.window, 400, 160, {
			fft_length: 512,
			power: 2,
			center: !1,
			preemphasis: .97,
			mel_filters: this.mel_filters,
			log_mel: "log",
			mel_floor: 1.192092955078125e-7,
			remove_dc_offset: !0,
			max_num_frames: t,
			transpose: !0
		});
	}
	async _call(e) {
		vc(e, "ASTFeatureExtractor");
		const t = await this._extract_fbank_features(e, this.config.max_length);
		if (this.config.do_normalize) {
			const e = 2 * this.std, n = t.data;
			for (let t = 0; t < n.length; ++t) n[t] = (n[t] - this.mean) / e;
		}
		return { input_values: t.unsqueeze_(0) };
	}
}, jc = class extends xc {
	async _call(e) {
		vc(e, "EncodecFeatureExtractor"), e instanceof Float64Array && (e = new Float32Array(e));
		const t = this.config.feature_size;
		if (e.length % t !== 0) throw new Error(`The length of the audio data must be a multiple of the number of channels (${t}).`);
		const n = [
			1,
			t,
			e.length / t
		];
		return { input_values: new Ri("float32", e, n) };
	}
}, qc = class extends xc {
	async _call(e) {
		vc(e, "ChatterboxFeatureExtractor"), e instanceof Float64Array && (e = new Float32Array(e));
		const t = [1, e.length];
		return { input_values: new Ri("float32", e, t) };
	}
}, Wc = class extends xc {
	constructor(e) {
		super(e), this.mel_filters = Oc(this.config.nb_frequency_bins, this.config.feature_size, this.config.frequency_min, this.config.frequency_max, this.config.sampling_rate, null, "htk"), this.mel_filters_slaney = Oc(this.config.nb_frequency_bins, this.config.feature_size, this.config.frequency_min, this.config.frequency_max, this.config.sampling_rate, "slaney", "slaney"), this.window = Bc(this.config.fft_window_size, "hann");
	}
	async _get_input_mel(e, t, n, s) {
		let r;
		const a = e.length - t;
		if (a > 0) {
			if ("rand_trunc" !== n) throw new Error(`Truncation strategy "${n}" not implemented`);
			{
				const n = Math.floor(Eo.random() * (a + 1));
				e = e.subarray(n, n + t), r = await this._extract_fbank_features(e, this.mel_filters_slaney, this.config.nb_max_samples);
			}
		} else {
			if (a < 0) {
				let n = new Float64Array(t);
				if (n.set(e), "repeat" === s) for (let s = e.length; s < t; s += e.length) n.set(e.subarray(0, Math.min(e.length, t - s)), s);
				else if ("repeatpad" === s) for (let t = e.length; t < -a; t += e.length) n.set(e, t);
				e = n;
			}
			if ("fusion" === n) throw new Error(`Truncation strategy "${n}" not implemented`);
			r = await this._extract_fbank_features(e, this.mel_filters_slaney, this.config.nb_max_samples);
		}
		return r.unsqueeze_(0);
	}
	async _extract_fbank_features(e, t, n = null) {
		return Nc(e, this.window, this.config.fft_window_size, this.config.hop_length, {
			power: 2,
			mel_filters: t,
			log_mel: "dB",
			max_num_frames: n,
			do_pad: !1,
			transpose: !0
		});
	}
	async _call(e, { max_length: t = null } = {}) {
		return vc(e, "ClapFeatureExtractor"), { input_features: (await this._get_input_mel(e, t ?? this.config.nb_max_samples, this.config.truncation, this.config.padding)).unsqueeze_(0) };
	}
}, Hc = class extends xc {
	constructor(e) {
		super(e), this.config.mel_filters ??= Oc(Math.floor(1 + this.config.n_fft / 2), this.config.feature_size, 0, this.config.sampling_rate / 2, this.config.sampling_rate, "slaney", "slaney");
		const t = Bc(this.config.win_length, "hann", { periodic: !1 });
		this.window = new Float64Array(this.config.n_fft);
		const n = Math.floor((this.config.n_fft - this.config.win_length) / 2);
		this.window.set(t, n);
	}
	async _extract_fbank_features(e) {
		const t = this.config.preemphasis;
		for (let n = (e = new Float64Array(e)).length - 1; n >= 1; --n) e[n] -= t * e[n - 1];
		return await Nc(e, this.window, this.window.length, this.config.hop_length, {
			fft_length: this.config.n_fft,
			power: 2,
			mel_filters: this.config.mel_filters,
			log_mel: "log",
			mel_floor: -Infinity,
			pad_mode: "constant",
			center: !0,
			transpose: !0,
			mel_offset: 2 ** -24
		});
	}
	async _call(e) {
		vc(e, "ParakeetFeatureExtractor");
		const t = await this._extract_fbank_features(e), n = Math.floor((e.length + 2 * Math.floor(this.config.n_fft / 2) - this.config.n_fft) / this.config.hop_length), s = t.data;
		s.fill(0, n * t.dims[1]);
		const [r, a] = t.dims, o = new Float64Array(a), i = new Float64Array(a);
		for (let u = 0; u < n; ++u) {
			const e = u * a;
			for (let t = 0; t < a; ++t) {
				const n = s[e + t];
				o[t] += n, i[t] += n * n;
			}
		}
		const l = n > 1 ? n - 1 : 1;
		for (let u = 0; u < a; ++u) {
			const e = o[u] / n, t = (i[u] - n * e * e) / l, r = 1 / (Math.sqrt(t) + 1e-5);
			for (let o = 0; o < n; ++o) {
				const t = o * a + u;
				s[t] = (s[t] - e) * r;
			}
		}
		const c = new BigInt64Array(r);
		return c.fill(1n, 0, n), {
			input_features: t.unsqueeze_(0),
			attention_mask: new Ri("int64", c, [1, r])
		};
	}
}, Qc = class extends Hc {
	_apply_dither(e) {
		const t = this.config.dither ?? 0;
		if (t <= 0) return e;
		const n = new vo(e.length);
		for (let s = 0; s < e.length; ++s) e[s] += t * n.gauss();
		return e;
	}
	split_audio(e) {
		const t = this.config.max_audio_clip_s ?? 35, n = this.config.overlap_chunk_second ?? 5, s = this.config.min_energy_window_samples ?? 1600, r = this.config.sampling_rate, a = Math.max(1, Math.round(t * r)), o = Math.max(1, Math.round(n * r));
		if (e.length <= a) return [e];
		const i = [];
		let l = 0;
		const c = e.length;
		for (; l < c;) {
			if (l + a >= c) {
				i.push(e.slice(l, c));
				break;
			}
			const t = Math.max(l, l + a - o), n = Math.min(l + a, c);
			let r;
			r = n <= t ? l + a : this._find_split_point_energy(e, t, n, s), r = Math.max(l + 1, Math.min(r, c)), i.push(e.slice(l, r)), l = r;
		}
		return i;
	}
	_find_split_point_energy(e, t, n, s) {
		const r = n - t;
		if (r <= s) return Math.floor((t + n) / 2);
		let a = Infinity, o = t;
		const i = r - s;
		for (let l = 0; l <= i; l += s) {
			let n = 0;
			for (let r = 0; r < s; ++r) {
				const s = e[t + l + r];
				n += s * s;
			}
			n = Math.sqrt(n / s), n < a && (a = n, o = t + l);
		}
		return o;
	}
	async _call(e) {
		vc(e, "CohereAsrFeatureExtractor");
		const t = new Float64Array(e);
		return this._apply_dither(t), super._call(t);
	}
}, Xc = class extends jc {}, Jc = class extends xc {
	constructor(e) {
		super(e);
		const { fft_length: t, feature_size: n, min_frequency: s, max_frequency: r, sampling_rate: a, frame_length: o } = this.config, i = Oc(Math.floor(1 + t / 2), n, s, r, a, null, "htk", !1);
		this.mel_filters = i, this.window = Bc(o, "hann");
	}
	async _extract_fbank_features(e, t) {
		return Nc(e, this.window, this.config.frame_length, this.config.hop_length, {
			fft_length: this.config.fft_length,
			center: !1,
			onesided: !0,
			preemphasis: this.config.preemphasis,
			preemphasis_htk_flavor: this.config.preemphasis_htk_flavor,
			mel_filters: this.mel_filters,
			log_mel: "log",
			mel_floor: this.config.mel_floor,
			remove_dc_offset: !1,
			transpose: !0
		});
	}
	async _call(e, { max_length: t = 48e4, truncation: n = !0, padding: s = !0, pad_to_multiple_of: r = 128 } = {}) {
		if (vc(e, "Gemma3nAudioFeatureExtractor"), n && e.length > t && (e = e.slice(0, t)), s && e.length % r !== 0) {
			const t = r - e.length % r, n = new Float64Array(e.length + t);
			n.set(e), 0 !== this.config.padding_value && n.fill(this.config.padding_value, e.length), e = n;
		}
		const a = await this._extract_fbank_features(e, this.config.max_length), o = tl([1, a.dims[0]], !0);
		return {
			input_features: a.unsqueeze_(0),
			input_features_mask: o
		};
	}
}, Yc = class extends Jc {
	async _extract_fbank_features(e, t) {
		const { frame_length: n, hop_length: s, fft_length: r } = this.config, a = Math.floor(n / 2), o = Math.floor((e.length + a - (n + 1)) / s) + 1;
		return Nc(e, this.window, n, s, {
			fft_length: r,
			center: !0,
			pad_mode: "semicausal",
			onesided: !0,
			preemphasis: this.config.preemphasis,
			preemphasis_htk_flavor: this.config.preemphasis_htk_flavor,
			mel_filters: this.mel_filters,
			log_mel: "log",
			mel_floor: this.config.mel_floor,
			mel_floor_mode: "add",
			remove_dc_offset: !1,
			transpose: !0,
			max_num_frames: o
		});
	}
	async _call(e, t = {}) {
		vc(e, "Gemma4AudioFeatureExtractor");
		const n = e.length, s = await super._call(e, t), { input_features: r } = s, [, a, o] = r.dims, { frame_length: i, hop_length: l } = this.config, c = Math.floor(i / 2), u = i + 1, d = new Uint8Array(n + c + (t.pad_to_multiple_of ?? 128));
		d.fill(1, c, c + n);
		const h = new Uint8Array(a);
		for (let p = 0; p < a; ++p) h[p] = d[p * l + u - 1] ? 1 : 0;
		const _ = r.data;
		for (let p = 0; p < a; ++p) h[p] || _.fill(0, p * o, (p + 1) * o);
		return s.input_features_mask = new Ri("bool", h, [1, a]), s;
	}
}, Kc = class extends xc {
	constructor(e) {
		super(e);
		const { n_fft: t, win_length: n, n_mels: s, sample_rate: r } = e.melspec_kwargs;
		this.mel_filters = Oc(Math.floor(1 + t / 2), s, 0, r / 2, r, null, "htk");
		const a = Bc(n, "hann");
		this.window = new Float64Array(t);
		const o = Math.floor((t - n) / 2);
		this.window.set(a, o);
	}
	async _call(e) {
		vc(e, "GraniteSpeechFeatureExtractor");
		const { n_fft: t, hop_length: n, n_mels: s } = this.config.melspec_kwargs, r = 1 + Math.floor((e.length - 1) / n), a = r - r % 2;
		return { input_features: (await Nc(e, this.window, t, n, {
			power: 2,
			mel_filters: this.mel_filters,
			log_mel: "log10_max_norm",
			transpose: !0,
			max_num_frames: a,
			do_pad: !1
		})).view(-1, 2 * s).unsqueeze_(0) };
	}
}, Zc = class extends xc {
	async _call(e) {
		vc(e, "MoonshineFeatureExtractor"), e instanceof Float64Array && (e = new Float32Array(e));
		const t = [1, e.length];
		return { input_values: new Ri("float32", e, t) };
	}
}, eu = class extends xc {
	async _call(e) {
		vc(e, "PyAnnoteFeatureExtractor"), e instanceof Float64Array && (e = new Float32Array(e));
		const t = [
			1,
			1,
			e.length
		];
		return { input_values: new Ri("float32", e, t) };
	}
	samples_to_frames(e) {
		return (e - this.config.offset) / this.config.step;
	}
	post_process_speaker_diarization(e, t) {
		const n = t / this.samples_to_frames(t) / this.config.sampling_rate, s = [];
		for (const r of e.tolist()) {
			const e = [];
			let t = -1;
			for (let n = 0; n < r.length; ++n) {
				const [s, a] = Zo(Jo(r[n])), [o, i] = [n, n + 1];
				a !== t ? (t = a, e.push({
					id: a,
					start: o,
					end: i,
					score: s
				})) : (e.at(-1).end = i, e.at(-1).score += s);
			}
			s.push(e.map(({ id: e, start: t, end: s, score: r }) => ({
				id: e,
				start: t * n,
				end: s * n,
				confidence: r / (s - t)
			})));
		}
		return s;
	}
}, tu = class extends xc {
	constructor(e) {
		super(e);
		const t = this.config.sampling_rate, n = Oc(257, this.config.num_mel_bins, 20, Math.floor(t / 2), t, null, "kaldi", !0);
		this.mel_filters = n, this.window = Bc(400, "povey", { periodic: !1 });
	}
	async _extract_fbank_features(e, t) {
		return Nc(e = e.map((e) => 32768 * e), this.window, 400, 160, {
			fft_length: 512,
			power: 2,
			center: !1,
			preemphasis: .97,
			mel_filters: this.mel_filters,
			log_mel: "log",
			mel_floor: 1.192092955078125e-7,
			remove_dc_offset: !0,
			max_num_frames: t,
			transpose: !0
		});
	}
	async _call(e, { padding: t = !0, pad_to_multiple_of: n = 2, do_normalize_per_mel_bins: s = !0, return_attention_mask: r = !0 } = {}) {
		vc(e, "SeamlessM4TFeatureExtractor");
		let a, o = await this._extract_fbank_features(e, this.config.max_length);
		if (s) {
			const [e, t] = o.dims, n = o.data;
			for (let s = 0; s < t; ++s) {
				let r = 0;
				for (let l = 0; l < e; ++l) r += n[l * t + s];
				const a = r / e;
				let o = 0;
				for (let l = 0; l < e; ++l) o += (n[l * t + s] - a) ** 2;
				o /= e - 1;
				const i = Math.sqrt(o + 1e-7);
				for (let l = 0; l < e; ++l) {
					const e = l * t + s;
					n[e] = (n[e] - a) / i;
				}
			}
		}
		if (t) {
			const [e, t] = o.dims, s = o.data, i = e % n;
			if (i > 0) {
				const n = new Float32Array(t * (e + i));
				n.set(s), n.fill(this.config.padding_value, s.length);
				const l = e + i;
				o = new Ri(o.type, n, [l, t]), r && (a = new Ri("int64", new BigInt64Array(l), [1, l]), a.data.fill(1n, 0, e));
			}
		}
		const [i, l] = o.dims, c = this.config.stride;
		if (i % c !== 0) throw new Error(`The number of frames (${i}) must be a multiple of the stride (${c}).`);
		const u = o.view(1, Math.floor(i / c), l * c), d = { input_features: u };
		if (r) {
			const e = u.dims[1], t = new BigInt64Array(e);
			if (a) {
				const e = a.data;
				for (let n = 1, s = 0; n < i; n += c, ++s) t[s] = e[n];
			} else t.fill(1n);
			d.attention_mask = new Ri("int64", t, [1, e]);
		}
		return d;
	}
}, nu = class extends Xc {}, su = class extends xc {}, ru = class extends xc {
	_zero_mean_unit_var_norm(e) {
		const t = e.reduce((e, t) => e + t, 0) / e.length, n = e.reduce((e, n) => e + (n - t) ** 2, 0) / e.length;
		return e.map((e) => (e - t) / Math.sqrt(n + 1e-7));
	}
	async _call(e) {
		vc(e, "Wav2Vec2FeatureExtractor"), e instanceof Float64Array && (e = new Float32Array(e));
		let t = e;
		this.config.do_normalize && (t = this._zero_mean_unit_var_norm(t));
		const n = [1, t.length];
		return {
			input_values: new Ri("float32", t, n),
			attention_mask: new Ri("int64", new BigInt64Array(t.length).fill(1n), n)
		};
	}
}, au = class extends xc {
	constructor(e) {
		super(e);
		const t = this.config.sampling_rate, n = Oc(257, this.config.num_mel_bins, 20, Math.floor(t / 2), t, null, "kaldi", !0);
		this.mel_filters = n, this.window = Bc(400, "hamming", { periodic: !1 }), this.min_num_frames = this.config.min_num_frames;
	}
	async _extract_fbank_features(e) {
		return Nc(e = e.map((e) => 32768 * e), this.window, 400, 160, {
			fft_length: 512,
			power: 2,
			center: !1,
			preemphasis: .97,
			mel_filters: this.mel_filters,
			log_mel: "log",
			mel_floor: 1.192092955078125e-7,
			remove_dc_offset: !0,
			transpose: !0,
			min_num_frames: this.min_num_frames
		});
	}
	async _call(e) {
		vc(e, "WeSpeakerFeatureExtractor");
		const t = (await this._extract_fbank_features(e)).unsqueeze_(0);
		if (null === this.config.fbank_centering_span) {
			const e = t.mean(1).data, n = t.data, [s, r, a] = t.dims;
			for (let t = 0; t < s; ++t) {
				const s = t * r * a, o = t * a;
				for (let t = 0; t < r; ++t) {
					const r = s + t * a;
					for (let t = 0; t < a; ++t) n[r + t] -= e[o + t];
				}
			}
		}
		return { input_features: t };
	}
}, ou = class extends xc {
	constructor(e) {
		super(e), this.config.mel_filters ??= Oc(Math.floor(1 + this.config.n_fft / 2), this.config.feature_size, 0, 8e3, this.config.sampling_rate, "slaney", "slaney"), this.window = Bc(this.config.n_fft, "hann");
	}
	async _extract_fbank_features(e, { center: t = !0 } = {}) {
		const { n_fft: n, hop_length: s, mel_filters: r, global_log_mel_max: a } = this.config, o = t ? Math.floor(e.length / s) : Math.floor((e.length - n) / s);
		return await Nc(e, this.window, n, s, {
			power: 2,
			mel_filters: r,
			log_mel: "log10_max_norm",
			max_log_mel: a,
			center: t,
			max_num_frames: o,
			do_pad: !1
		});
	}
	async _call(e, { center: t = !0 } = {}) {
		return vc(e, "VoxtralRealtimeFeatureExtractor"), { input_features: (await this._extract_fbank_features(e, { center: t })).unsqueeze_(0) };
	}
}, iu = class extends xc {
	constructor(e) {
		super(e), this.config.mel_filters ??= Oc(Math.floor(1 + this.config.n_fft / 2), this.config.feature_size, 0, 8e3, this.config.sampling_rate, "slaney", "slaney"), this.window = Bc(this.config.n_fft, "hann");
	}
	async _extract_fbank_features(e) {
		return await Nc(e, this.window, this.config.n_fft, this.config.hop_length, {
			power: 2,
			mel_filters: this.config.mel_filters,
			log_mel: "log10_max_norm",
			max_num_frames: Math.min(Math.floor(e.length / this.config.hop_length), this.config.nb_max_frames)
		});
	}
	async _call(e, { max_length: t = null } = {}) {
		let n;
		vc(e, "WhisperFeatureExtractor");
		const s = t ?? this.config.n_samples;
		return e.length > s ? (e.length > this.config.n_samples && Os.warn("Attempting to extract features for audio longer than 30 seconds. If using a pipeline to extract transcript from a long audio clip, remember to specify `chunk_length_s` and/or `stride_length_s`."), n = e.slice(0, s)) : (n = new Float32Array(s), n.set(e)), { input_features: (await this._extract_fbank_features(n)).unsqueeze_(0) };
	}
}, lu = class {
	static async from_pretrained(e, t = {}) {
		const n = await Xo(e, fc, !0, t), s = n.feature_extractor_type, r = Mc[s];
		if (!r) throw new Error(`Unknown feature_extractor_type: '${s}'. Please report this at ${pc}.`);
		return new r(n);
	}
}, cu = class extends yc {
	static tokenizer_class = _c;
	static feature_extractor_class = lu;
	async _call(e, t = null) {
		return {
			...this.tokenizer(e),
			...t ? await this.feature_extractor(t) : {}
		};
	}
}, uu = new Set(["ja", "zh"]), du = class extends yc {
	static tokenizer_class = _c;
	static feature_extractor_class = lu;
	static uses_processor_config = !0;
	get_decoder_prompt_ids(e = "en") {
		const t = [
			"▁",
			"<|startofcontext|>",
			"<|startoftranscript|>",
			"<|emo:undefined|>",
			`<|${e}|>`,
			`<|${e}|>`,
			"<|pnc|>",
			"<|noitn|>",
			"<|notimestamp|>",
			"<|nodiarize|>"
		];
		return this.tokenizer.convert_tokens_to_ids(t);
	}
	static join_chunks(e, t = "en") {
		const n = e.filter((e) => e && e.trim());
		if (0 === n.length) return "";
		const s = uu.has(t) ? "" : " ";
		return [n[0].trimEnd(), ...n.slice(1).map((e) => e.trim())].join(s);
	}
	async _call(e) {
		return await this.feature_extractor(e);
	}
}, hu = {};
if (hs.IS_WEB_ENV) Dc = (e, t) => {
	if (!self.OffscreenCanvas) throw new Error("OffscreenCanvas not supported by this environment.");
	return new self.OffscreenCanvas(e, t);
}, Gc = self.createImageBitmap, Rc = self.ImageData;
else {
	if (!hu) throw new Error("Unable to load image processing library.");
	Gc = async (e) => {
		const t = (await e.metadata()).channels, { data: n, info: s } = await e.rotate().raw().toBuffer({ resolveWithObject: !0 }), r = new fu(new Uint8ClampedArray(n), s.width, s.height, s.channels);
		return void 0 !== t && t !== s.channels && r.convert(t), r;
	};
}
var _u = {
	0: "nearest",
	1: "lanczos",
	2: "bilinear",
	3: "bicubic",
	4: "box",
	5: "hamming"
}, pu = new Map([
	["png", "image/png"],
	["jpg", "image/jpeg"],
	["jpeg", "image/jpeg"],
	["gif", "image/gif"]
]), fu = class e {
	constructor(e, t, n, s) {
		this.data = e, this.width = t, this.height = n, this.channels = s;
	}
	get size() {
		return [this.width, this.height];
	}
	static async read(t) {
		if (t instanceof e) return t;
		if ("string" == typeof t || t instanceof URL) return await this.fromURL(t);
		if (t instanceof Blob) return await this.fromBlob(t);
		if ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas) return this.fromCanvas(t);
		throw new Error("Unsupported input type: " + typeof t);
	}
	static fromCanvas(t) {
		if (!hs.IS_WEB_ENV) throw new Error("fromCanvas() is only supported in browser environments.");
		const n = t.getContext("2d").getImageData(0, 0, t.width, t.height).data;
		return new e(n, t.width, t.height, 4);
	}
	static async fromURL(e) {
		const t = await Go(e);
		if (200 !== t.status) throw new Error(`Unable to read image from "${e}" (${t.status} ${t.statusText})`);
		const n = await t.blob();
		return this.fromBlob(n);
	}
	static async fromBlob(e) {
		if (hs.IS_WEB_ENV) {
			const t = await Gc(e), n = Dc(t.width, t.height).getContext("2d");
			return n.drawImage(t, 0, 0), new this(n.getImageData(0, 0, t.width, t.height).data, t.width, t.height, 4);
		}
		{
			const t = hu(await e.arrayBuffer());
			return await Gc(t);
		}
	}
	static fromTensor(t, n = "CHW") {
		if (3 !== t.dims.length) throw new Error(`Tensor should have 3 dimensions, but has ${t.dims.length} dimensions.`);
		if ("CHW" === n) t = t.transpose(1, 2, 0);
		else if ("HWC" !== n) throw new Error(`Unsupported channel format: ${n}`);
		if (!(t.data instanceof Uint8ClampedArray || t.data instanceof Uint8Array)) throw new Error(`Unsupported tensor type: ${t.type}`);
		switch (t.dims[2]) {
			case 1:
			case 2:
			case 3:
			case 4: return new e(t.data, t.dims[1], t.dims[0], t.dims[2]);
			default: throw new Error(`Unsupported number of channels: ${t.dims[2]}`);
		}
	}
	grayscale() {
		if (1 === this.channels) return this;
		const e = new Uint8ClampedArray(this.width * this.height * 1);
		switch (this.channels) {
			case 3:
			case 4:
				for (let t = 0, n = 0; t < this.data.length; t += this.channels) {
					const s = this.data[t], r = this.data[t + 1], a = this.data[t + 2];
					e[n++] = Math.round(.2989 * s + .587 * r + .114 * a);
				}
				break;
			default: throw new Error(`Conversion failed due to unsupported number of channels: ${this.channels}`);
		}
		return this._update(e, this.width, this.height, 1);
	}
	rgb() {
		if (3 === this.channels) return this;
		const e = new Uint8ClampedArray(this.width * this.height * 3);
		switch (this.channels) {
			case 1:
				for (let t = 0, n = 0; t < this.data.length; ++t) e[n++] = this.data[t], e[n++] = this.data[t], e[n++] = this.data[t];
				break;
			case 4:
				for (let t = 0, n = 0; t < this.data.length; t += 4) e[n++] = this.data[t], e[n++] = this.data[t + 1], e[n++] = this.data[t + 2];
				break;
			default: throw new Error(`Conversion failed due to unsupported number of channels: ${this.channels}`);
		}
		return this._update(e, this.width, this.height, 3);
	}
	rgba() {
		if (4 === this.channels) return this;
		const e = new Uint8ClampedArray(this.width * this.height * 4);
		switch (this.channels) {
			case 1:
				for (let t = 0, n = 0; t < this.data.length; ++t) e[n++] = this.data[t], e[n++] = this.data[t], e[n++] = this.data[t], e[n++] = 255;
				break;
			case 3:
				for (let t = 0, n = 0; t < this.data.length; t += 3) e[n++] = this.data[t], e[n++] = this.data[t + 1], e[n++] = this.data[t + 2], e[n++] = 255;
				break;
			default: throw new Error(`Conversion failed due to unsupported number of channels: ${this.channels}`);
		}
		return this._update(e, this.width, this.height, 4);
	}
	putAlpha(e) {
		if (e.width !== this.width || e.height !== this.height) throw new Error(`Expected mask size to be ${this.width}x${this.height}, but got ${e.width}x${e.height}`);
		if (1 !== e.channels) throw new Error(`Expected mask to have 1 channel, but got ${e.channels}`);
		const t = this.data, n = e.data, s = this.width * this.height;
		if (3 === this.channels) {
			const e = new Uint8ClampedArray(4 * s);
			for (let r = 0, a = 0, o = 0; r < s; ++r) e[o++] = t[a++], e[o++] = t[a++], e[o++] = t[a++], e[o++] = n[r];
			return this._update(e, this.width, this.height, 4);
		}
		if (4 === this.channels) {
			for (let e = 0; e < s; ++e) t[4 * e + 3] = n[e];
			return this;
		}
		throw new Error(`Expected image to have 3 or 4 channels, but got ${this.channels}`);
	}
	async resize(t, n, { resample: s = 2 } = {}) {
		if (this.width === t && this.height === n) return this;
		let r = _u[s] ?? s;
		const a = As(t), o = As(n);
		if (a && o) return this;
		if (a ? t = n / this.height * this.width : o && (n = t / this.width * this.height), hs.IS_WEB_ENV) {
			const s = this.channels, r = this.toCanvas(), a = Dc(t, n).getContext("2d");
			return a.drawImage(r, 0, 0, t, n), new e(a.getImageData(0, 0, t, n).data, t, n, 4).convert(s);
		}
		{
			let e = this.toSharp();
			switch (r) {
				case "box":
				case "hamming": "box" !== r && "hamming" !== r || (Os.warn(`Resampling method ${r} is not yet supported. Using bilinear instead.`), r = "bilinear");
				case "nearest":
				case "bilinear":
				case "bicubic":
					e = e.affine([
						t / this.width,
						0,
						0,
						n / this.height
					], { interpolator: r });
					break;
				case "lanczos":
					e = e.resize({
						width: t,
						height: n,
						fit: "fill",
						kernel: "lanczos3"
					});
					break;
				default: throw new Error(`Resampling method ${r} is not supported.`);
			}
			return await Gc(e);
		}
	}
	async pad([t, n, s, r]) {
		if (t = Math.max(t, 0), n = Math.max(n, 0), s = Math.max(s, 0), r = Math.max(r, 0), 0 === t && 0 === n && 0 === s && 0 === r) return this;
		if (hs.IS_WEB_ENV) {
			const a = this.channels, o = this.toCanvas(), i = this.width + t + n, l = this.height + s + r, c = Dc(i, l).getContext("2d");
			return c.drawImage(o, 0, 0, this.width, this.height, t, s, this.width, this.height), new e(c.getImageData(0, 0, i, l).data, i, l, 4).convert(a);
		}
		{
			const e = this.toSharp().extend({
				left: t,
				right: n,
				top: s,
				bottom: r
			});
			return await Gc(e);
		}
	}
	async crop([t, n, s, r]) {
		if (t = Math.max(t, 0), n = Math.max(n, 0), s = Math.min(s, this.width - 1), r = Math.min(r, this.height - 1), 0 === t && 0 === n && s === this.width - 1 && r === this.height - 1) return this;
		const a = s - t + 1, o = r - n + 1;
		if (hs.IS_WEB_ENV) {
			const s = this.channels, r = this.toCanvas(), i = Dc(a, o).getContext("2d");
			return i.drawImage(r, t, n, a, o, 0, 0, a, o), new e(i.getImageData(0, 0, a, o).data, a, o, 4).convert(s);
		}
		{
			const e = this.toSharp().extract({
				left: t,
				top: n,
				width: a,
				height: o
			});
			return await Gc(e);
		}
	}
	async center_crop(t, n) {
		if (this.width === t && this.height === n) return this;
		const s = (this.width - t) / 2, r = (this.height - n) / 2;
		if (hs.IS_WEB_ENV) {
			const a = this.channels, o = this.toCanvas(), i = Dc(t, n).getContext("2d");
			let l = 0, c = 0, u = 0, d = 0;
			return s >= 0 ? l = s : u = -s, r >= 0 ? c = r : d = -r, i.drawImage(o, l, c, t, n, u, d, t, n), new e(i.getImageData(0, 0, t, n).data, t, n, 4).convert(a);
		}
		{
			let e = this.toSharp();
			if (s >= 0 && r >= 0) e = e.extract({
				left: Math.floor(s),
				top: Math.floor(r),
				width: t,
				height: n
			});
			else if (s <= 0 && r <= 0) {
				const a = Math.floor(-r), o = Math.floor(-s);
				e = e.extend({
					top: a,
					left: o,
					right: t - this.width - o,
					bottom: n - this.height - a
				});
			} else {
				let a = [0, 0], o = 0;
				r < 0 ? (a[0] = Math.floor(-r), a[1] = n - this.height - a[0]) : o = Math.floor(r);
				let i = [0, 0], l = 0;
				s < 0 ? (i[0] = Math.floor(-s), i[1] = t - this.width - i[0]) : l = Math.floor(s), e = e.extend({
					top: a[0],
					bottom: a[1],
					left: i[0],
					right: i[1]
				}).extract({
					left: l,
					top: o,
					width: t,
					height: n
				});
			}
			return await Gc(e);
		}
	}
	async toBlob(e = "image/png", t = 1) {
		if (!hs.IS_WEB_ENV) throw new Error("toBlob() is only supported in browser environments.");
		return await this.toCanvas().convertToBlob({
			type: e,
			quality: t
		});
	}
	toTensor(e = "CHW") {
		let t = new Ri("uint8", new Uint8Array(this.data), [
			this.height,
			this.width,
			this.channels
		]);
		if ("HWC" === e);
		else {
			if ("CHW" !== e) throw new Error(`Unsupported channel format: ${e}`);
			t = t.permute(2, 0, 1);
		}
		return t;
	}
	toCanvas() {
		if (!hs.IS_WEB_ENV) throw new Error("toCanvas() is only supported in browser environments.");
		const e = this.clone().rgba(), t = Dc(e.width, e.height), n = new Rc(e.data, e.width, e.height);
		return t.getContext("2d").putImageData(n, 0, 0), t;
	}
	split() {
		const { data: t, width: n, height: s, channels: r } = this, a = t.constructor, o = t.length / r, i = Array.from({ length: r }, () => new a(o));
		for (let e = 0; e < o; ++e) {
			const n = r * e;
			for (let s = 0; s < r; ++s) i[s][e] = t[n + s];
		}
		return i.map((t) => new e(t, n, s, 1));
	}
	_update(e, t, n, s = null) {
		return this.data = e, this.width = t, this.height = n, null !== s && (this.channels = s), this;
	}
	clone() {
		return new e(this.data.slice(), this.width, this.height, this.channels);
	}
	convert(e) {
		if (this.channels === e) return this;
		switch (e) {
			case 1:
				this.grayscale();
				break;
			case 3:
				this.rgb();
				break;
			case 4:
				this.rgba();
				break;
			default: throw new Error(`Conversion failed due to unsupported number of channels: ${this.channels}`);
		}
		return this;
	}
	async save(e) {
		if (hs.IS_WEB_ENV) {
			if (hs.IS_WEBWORKER_ENV) throw new Error("Unable to save an image from a Web Worker.");
			const t = e.split(".").pop().toLowerCase(), n = pu.get(t) ?? "image/png";
			return Ac(e, await this.toBlob(n));
		}
		if (!hs.IS_FS_AVAILABLE) throw new Error("Unable to save the image because filesystem is disabled in this environment.");
		await this.toSharp().toFile(e);
	}
	toSharp() {
		if (hs.IS_WEB_ENV) throw new Error("toSharp() is only supported in server-side environments.");
		return hu(this.data, { raw: {
			width: this.width,
			height: this.height,
			channels: this.channels
		} });
	}
};
fu.read.bind(fu);
function mu(e, t, n = 0, s = null) {
	const r = e / t;
	let a = function(e) {
		const t = Math.round(e);
		return Math.abs(e) % 1 == .5 ? t % 2 == 0 ? t : t - 1 : t;
	}(r) * t;
	return null !== s && a > s && (a = Math.floor(r) * t), a < n && (a = Math.ceil(r) * t), a;
}
function gu([e, t], n) {
	return [Math.max(Math.floor(e / n), 1) * n, Math.max(Math.floor(t / n), 1) * n];
}
function wu([e, t, n, s]) {
	return [
		e - n / 2,
		t - s / 2,
		e + n / 2,
		t + s / 2
	];
}
function yu(e, t = .5, n = null, s = !1) {
	const r = e.logits, a = e.pred_boxes, [o, i, l] = r.dims;
	if (null !== n && n.length !== o) throw Error("Make sure that you pass in as many target sizes as the batch dimension of the logits");
	let c = [];
	for (let u = 0; u < o; ++u) {
		let e = null !== n ? n[u] : null, o = {
			boxes: [],
			classes: [],
			scores: []
		}, d = r[u], h = a[u];
		for (let n = 0; n < i; ++n) {
			let r, a = d[n], i = [];
			if (s) {
				r = a.sigmoid().data;
				for (let e = 0; e < r.length; ++e) r[e] > t && i.push(e);
			} else {
				let e = Zo(a.data)[1];
				if (e === l - 1) continue;
				if (r = Jo(a.data), r[e] < t) continue;
				i.push(e);
			}
			for (const t of i) {
				let s = h[n].data;
				s = wu(s), null !== e && (s = s.map((t, n) => t * e[(n + 1) % 2])), o.boxes.push(s), o.classes.push(t), o.scores.push(r[t]);
			}
		}
		c.push(o);
	}
	return c;
}
function bu(e, t = null) {
	const n = e.logits, s = n.dims[0];
	if (null !== t && t.length !== s) throw Error("Make sure that you pass in as many target sizes as the batch dimension of the logits");
	const r = [];
	for (let a = 0; a < s; ++a) {
		const e = null !== t ? t[a] : null;
		let s = n[a];
		null !== e && (s = Gi(s, e, "bilinear", !1));
		const [o, i] = e ?? s.dims.slice(-2), l = new Ri("int32", new Int32Array(o * i), [o, i]), c = s[0].data, u = l.data;
		for (let t = 1; t < s.dims[0]; ++t) {
			const e = s[t].data;
			for (let n = 0; n < e.length; ++n) e[n] > c[n] && (c[n] = e[n], u[n] = t);
		}
		const d = new Array(s.dims[0]);
		for (let t = 0; t < u.length; ++t) {
			const e = u[t];
			d[e] = e;
		}
		const h = d.filter((e) => void 0 !== e);
		r.push({
			segmentation: l,
			labels: h
		});
	}
	return r;
}
function xu(e, t, n, s) {
	const r = [], a = [], o = [];
	for (let i = 0; i < e.dims[0]; ++i) {
		const l = e[i], c = t[i], u = Zo(l.data)[1];
		if (u === s) continue;
		const d = Jo(l.data)[u];
		d > n && (r.push(c), a.push(d), o.push(u));
	}
	return [
		r,
		a,
		o
	];
}
function vu(e, t, n, s = .5, r = .8) {
	const a = [];
	let o = 0, i = 0;
	const l = t[n].data;
	for (let u = 0; u < e.length; ++u) e[u] === n && (a.push(u), ++o), l[u] >= s && ++i;
	let c = o > 0 && i > 0;
	return c && (c = o / i > r), [c, a];
}
function Mu(e, t, n, s, r, a = null, o = null) {
	const [i, l] = o ?? e[0].dims, c = new Ri("int32", new Int32Array(i * l), [i, l]), u = [];
	if (null !== o) for (let f = 0; f < e.length; ++f) e[f] = Gi(e[f], o, "bilinear", !1);
	const d = new Int32Array(e[0].data.length), h = new Float32Array(e[0].data.length);
	for (let f = 0; f < e.length; ++f) {
		let n = t[f];
		const s = e[f].data;
		for (let e = 0; e < s.length; ++e) s[e] *= n, s[e] > h[e] && (d[e] = f, h[e] = s[e]);
	}
	let _ = 0;
	const p = c.data;
	for (let f = 0; f < n.length; ++f) {
		const a = n[f], [o, i] = vu(d, e, f, s, r);
		if (o) {
			++_;
			for (const e of i) p[e] = _;
			u.push({
				id: _,
				label_id: a,
				score: t[f]
			});
		}
	}
	return [c, u];
}
function ku(e, t, n = 28, s = 3136, r = 1003520, a = 1) {
	if (e < n || t < n) {
		const s = Math.max(n / e, n / t);
		e = Math.round(e * s), t = Math.round(t * s);
	}
	if (Math.max(e, t) / Math.min(e, t) > 200) throw new Error("absolute aspect ratio must be smaller than 200, got " + Math.max(e, t) / Math.min(e, t));
	let o = Math.round(e / n) * n, i = Math.round(t / n) * n;
	if (a * o * i > r) {
		const s = Math.sqrt(a * e * t / r);
		o = Math.max(n, Math.floor(e / s / n) * n), i = Math.max(n, Math.floor(t / s / n) * n);
	} else if (a * o * i < s) {
		const r = Math.sqrt(s / (a * e * t));
		o = Math.ceil(e * r / n) * n, i = Math.ceil(t * r / n) * n;
	}
	return [i, o];
}
function Eu(e, t = .5, n = .5, s = .8, r = null, a = null) {
	null === r && (Os.warn("`label_ids_to_fuse` unset. No instance will be fused."), r = /* @__PURE__ */ new Set());
	const o = e.class_queries_logits ?? e.logits, i = (e.masks_queries_logits ?? e.pred_masks).sigmoid();
	let [l, c, u] = o.dims;
	if (u -= 1, null !== a && a.length !== l) throw Error("Make sure that you pass in as many target sizes as the batch dimension of the logits");
	let d = [];
	for (let h = 0; h < l; ++h) {
		let e = null !== a ? a[h] : null, l = o[h], c = i[h], [_, p, f] = xu(l, c, t, u);
		if (0 === f.length) {
			let [t, n] = e ?? c.dims.slice(-2), s = new Ri("int32", new Int32Array(t * n).fill(-1), [t, n]);
			d.push({
				segmentation: s,
				segments_info: []
			});
			continue;
		}
		let [m, g] = Mu(_, p, f, n, s, r, e);
		d.push({
			segmentation: m,
			segments_info: g
		});
	}
	return d;
}
function Au(e, t = .5, n = null) {
	throw new Error("`post_process_instance_segmentation` is not yet implemented.");
}
var Cu = class extends Ms {
	constructor(e) {
		super(), this.image_mean = e.image_mean ?? e.mean, this.image_std = e.image_std ?? e.std, this.resample = e.resample ?? 2, this.do_rescale = e.do_rescale ?? !0, this.rescale_factor = e.rescale_factor ?? 1 / 255, this.do_normalize = e.do_normalize, this.do_thumbnail = e.do_thumbnail, this.size = e.size ?? e.image_size, this.do_resize = e.do_resize ?? void 0 !== this.size, this.size_divisibility = e.size_divisibility ?? e.size_divisor, this.do_center_crop = e.do_center_crop, this.crop_size = e.crop_size, this.do_convert_rgb = e.do_convert_rgb ?? !0, this.do_crop_margin = e.do_crop_margin, this.pad_size = e.pad_size, this.do_pad = e.do_pad, this.min_pixels = e.min_pixels, this.max_pixels = e.max_pixels, this.do_pad && !this.pad_size && !this.size_divisibility && this.size && void 0 !== this.size.width && void 0 !== this.size.height && (this.pad_size = this.size), this.do_flip_channel_order = e.do_flip_channel_order ?? !1, this.config = e;
	}
	async thumbnail(e, t, n = 2) {
		const s = e.height, r = e.width, a = t.height, o = t.width;
		let i = Math.min(s, a), l = Math.min(r, o);
		return i === s && l === r ? e : (s > r ? l = Math.floor(r * i / s) : r > s && (i = Math.floor(s * l / r)), await e.resize(l, i, { resample: n }));
	}
	async crop_margin(e, t = 200) {
		const n = e.clone().grayscale(), s = Ko(n.data)[0], r = Zo(n.data)[0] - s;
		if (0 === r) return e;
		const a = t / 255;
		let o = n.width, i = n.height, l = 0, c = 0;
		const u = n.data;
		for (let d = 0; d < n.height; ++d) {
			const e = d * n.width;
			for (let t = 0; t < n.width; ++t) (u[e + t] - s) / r < a && (o = Math.min(o, t), i = Math.min(i, d), l = Math.max(l, t), c = Math.max(c, d));
		}
		return e = await e.crop([
			o,
			i,
			l,
			c
		]);
	}
	pad_image(e, t, n, { mode: s = "constant", center: r = !1, constant_values: a = 0 } = {}) {
		const [o, i, l] = t;
		let c, u;
		if ("number" == typeof n ? (c = n, u = n) : "square" === n ? c = u = Math.max(o, i) : (c = n.width, u = n.height), c !== i || u !== o) {
			const n = new Float32Array(c * u * l);
			if (Array.isArray(a)) for (let e = 0; e < n.length; ++e) n[e] = a[e % l];
			else 0 !== a && n.fill(a);
			const [d, h] = r ? [Math.floor((c - i) / 2), Math.floor((u - o) / 2)] : [0, 0];
			for (let t = 0; t < o; ++t) {
				const s = (t + h) * c, r = t * i;
				for (let t = 0; t < i; ++t) {
					const a = (s + t + d) * l, o = (r + t) * l;
					for (let t = 0; t < l; ++t) n[a + t] = e[o + t];
				}
			}
			if ("symmetric" === s) {
				if (r) throw new Error("`center` padding is not supported when `mode` is set to `symmetric`.");
				const t = o - 1, s = i - 1;
				for (let r = 0; r < u; ++r) {
					const a = r * c, u = Fs(r, t) * i;
					for (let t = 0; t < c; ++t) {
						if (r < o && t < i) continue;
						const c = (a + t) * l, d = (u + Fs(t, s)) * l;
						for (let t = 0; t < l; ++t) n[c + t] = e[d + t];
					}
				}
			}
			e = n, t = [
				u,
				c,
				l
			];
		}
		return [e, t];
	}
	rescale(e) {
		for (let t = 0; t < e.length; ++t) e[t] = this.rescale_factor * e[t];
	}
	get_resize_output_image_size(e, t) {
		const [n, s] = e.size;
		let r, a;
		if (this.do_thumbnail) {
			const { height: e, width: n } = t;
			r = Math.min(e, n);
		} else Number.isInteger(t) ? (r = t, a = this.config.max_size ?? r) : void 0 !== t && (r = t.shortest_edge, a = t.longest_edge);
		if (void 0 !== r || void 0 !== a) {
			const e = void 0 === r ? 1 : Math.max(r / n, r / s), t = n * e, o = s * e, i = void 0 === a ? 1 : Math.min(a / t, a / o);
			let l = Math.floor(Number((t * i).toFixed(2))), c = Math.floor(Number((o * i).toFixed(2)));
			return void 0 !== this.size_divisibility && ([l, c] = gu([l, c], this.size_divisibility)), [l, c];
		}
		if (void 0 !== t && void 0 !== t.width && void 0 !== t.height) {
			let e = t.width, r = t.height;
			if (this.config.keep_aspect_ratio && this.config.ensure_multiple_of) {
				let t = r / s, a = e / n;
				Math.abs(1 - a) < Math.abs(1 - t) ? t = a : a = t, r = mu(t * s, this.config.ensure_multiple_of), e = mu(a * n, this.config.ensure_multiple_of);
			}
			return [e, r];
		}
		if (void 0 !== this.size_divisibility) return gu([n, s], this.size_divisibility);
		throw new Error(`Could not resize image due to unsupported \`this.size\` option in config: ${JSON.stringify(t)}`);
	}
	async resize(e) {
		const [t, n] = this.get_resize_output_image_size(e, this.size);
		return await e.resize(t, n, { resample: this.resample });
	}
	async preprocess(e, { do_normalize: t = null, do_pad: n = null, do_convert_rgb: s = null, do_convert_grayscale: r = null, do_flip_channel_order: a = null } = {}) {
		this.do_crop_margin && (e = await this.crop_margin(e));
		const [o, i] = e.size;
		if (s ?? this.do_convert_rgb ? e = e.rgb() : r && (e = e.grayscale()), this.do_resize && (e = await this.resize(e)), this.do_thumbnail && (e = await this.thumbnail(e, this.size, this.resample)), this.do_center_crop) {
			let t, n;
			Number.isInteger(this.crop_size) ? (t = this.crop_size, n = this.crop_size) : (t = this.crop_size.width, n = this.crop_size.height), e = await e.center_crop(t, n);
		}
		const l = [e.height, e.width];
		let c = Float32Array.from(e.data), u = [
			e.height,
			e.width,
			e.channels
		];
		if (this.do_rescale && this.rescale(c), t ?? this.do_normalize) {
			let t = this.image_mean;
			Array.isArray(this.image_mean) || (t = new Array(e.channels).fill(t));
			let n = this.image_std;
			if (Array.isArray(this.image_std) || (n = new Array(e.channels).fill(n)), t.length !== e.channels || n.length !== e.channels) throw new Error(`When set to arrays, the length of \`image_mean\` (${t.length}) and \`image_std\` (${n.length}) must match the number of channels in the image (${e.channels}).`);
			for (let s = 0; s < c.length; s += e.channels) for (let r = 0; r < e.channels; ++r) c[s + r] = (c[s + r] - t[r]) / n[r];
		}
		if (n ?? this.do_pad) {
			if (this.pad_size) {
				const t = this.pad_image(c, [
					e.height,
					e.width,
					e.channels
				], this.pad_size);
				[c, u] = t;
			} else if (this.size_divisibility) {
				const e = Math.ceil(u[1] / this.size_divisibility) * this.size_divisibility, t = Math.ceil(u[0] / this.size_divisibility) * this.size_divisibility;
				[c, u] = this.pad_image(c, u, {
					width: e,
					height: t
				});
			}
		}
		if (a ?? this.do_flip_channel_order) {
			if (3 !== u[2]) throw new Error("Flipping channel order is only supported for RGB images.");
			for (let e = 0; e < c.length; e += 3) {
				const t = c[e];
				c[e] = c[e + 2], c[e + 2] = t;
			}
		}
		return {
			original_size: [i, o],
			reshaped_input_size: l,
			pixel_values: new Ri("float32", c, u).permute(2, 0, 1)
		};
	}
	async _call(e, ...t) {
		Array.isArray(e) || (e = [e]);
		const n = await Promise.all(e.map((e) => this.preprocess(e)));
		return {
			pixel_values: Ji(n.map((e) => e.pixel_values), 0),
			original_sizes: n.map((e) => e.original_size),
			reshaped_input_sizes: n.map((e) => e.reshaped_input_size)
		};
	}
	static async from_pretrained(e, t = {}) {
		return new this(await Xo(e, mc, !0, t));
	}
}, Tu = {};
Wn(Tu, {
	BeitFeatureExtractor: () => Su,
	BitImageProcessor: () => Fu,
	CHMv2ImageProcessor: () => Pu,
	CLIPFeatureExtractor: () => Ou,
	CLIPImageProcessor: () => Lu,
	ChineseCLIPFeatureExtractor: () => Iu,
	ConvNextFeatureExtractor: () => Nu,
	ConvNextImageProcessor: () => zu,
	DINOv3ViTImageProcessor: () => Gu,
	DPTFeatureExtractor: () => qu,
	DPTImageProcessor: () => ju,
	DeiTFeatureExtractor: () => $u,
	DeiTImageProcessor: () => Bu,
	DetrFeatureExtractor: () => Ru,
	DetrImageProcessor: () => Du,
	DonutFeatureExtractor: () => Vu,
	DonutImageProcessor: () => Uu,
	EfficientNetImageProcessor: () => Wu,
	GLPNFeatureExtractor: () => Zu,
	Gemma3ImageProcessor: () => Hu,
	Gemma4ImageProcessor: () => Ju,
	Glm46VImageProcessor: () => Ku,
	GroundingDinoImageProcessor: () => ed,
	Idefics3ImageProcessor: () => td,
	ImageFeatureExtractor: () => Cu,
	ImageProcessor: () => Cu,
	JinaCLIPImageProcessor: () => sd,
	Lfm2VlImageProcessor: () => id,
	LlavaOnevisionImageProcessor: () => ld,
	Mask2FormerImageProcessor: () => dd,
	MaskFormerFeatureExtractor: () => ud,
	MaskFormerImageProcessor: () => cd,
	MobileNetV1FeatureExtractor: () => _d,
	MobileNetV1ImageProcessor: () => hd,
	MobileNetV2FeatureExtractor: () => fd,
	MobileNetV2ImageProcessor: () => pd,
	MobileNetV3FeatureExtractor: () => gd,
	MobileNetV3ImageProcessor: () => md,
	MobileNetV4FeatureExtractor: () => yd,
	MobileNetV4ImageProcessor: () => wd,
	MobileViTFeatureExtractor: () => xd,
	MobileViTImageProcessor: () => bd,
	NougatImageProcessor: () => vd,
	OwlViTFeatureExtractor: () => kd,
	OwlViTImageProcessor: () => Md,
	Owlv2ImageProcessor: () => Ed,
	Phi3VImageProcessor: () => Id,
	PixtralImageProcessor: () => Pd,
	PvtImageProcessor: () => Ld,
	Qwen2VLImageProcessor: () => Yu,
	RTDetrImageProcessor: () => Od,
	Sam2ImageProcessor: () => zd,
	Sam3ImageProcessor: () => zd,
	SamImageProcessor: () => zd,
	SapiensFeatureExtractor: () => Bd,
	SapiensImageProcessor: () => Nd,
	SegformerFeatureExtractor: () => Dd,
	SegformerImageProcessor: () => $d,
	SiglipImageProcessor: () => Rd,
	SmolVLMImageProcessor: () => td,
	Swin2SRImageProcessor: () => Gd,
	VLMImageProcessor: () => nd,
	ViTFeatureExtractor: () => Vd,
	ViTImageProcessor: () => Ud,
	VitMatteImageProcessor: () => jd,
	VitPoseImageProcessor: () => qd,
	YolosFeatureExtractor: () => Hd,
	YolosImageProcessor: () => Wd
});
var Su = class extends Cu {}, Fu = class extends Cu {}, Iu = class extends Cu {}, Pu = class extends Cu {}, Lu = class extends Cu {}, Ou = class extends Lu {}, zu = class extends Cu {
	constructor(e) {
		super(e), this.crop_pct = this.config.crop_pct ?? .875;
	}
	async resize(e) {
		const t = this.size?.shortest_edge;
		if (void 0 === t) throw new Error("Size dictionary must contain 'shortest_edge' key.");
		if (t < 384) {
			const n = Math.floor(t / this.crop_pct), [s, r] = this.get_resize_output_image_size(e, { shortest_edge: n });
			e = await e.resize(s, r, { resample: this.resample }), e = await e.center_crop(t, t);
		} else e = await e.resize(t, t, { resample: this.resample });
		return e;
	}
}, Nu = class extends zu {}, Bu = class extends Cu {}, $u = class extends Bu {}, Du = class extends Cu {
	async _call(e) {
		const t = await super._call(e), n = tl([
			t.pixel_values.dims[0],
			64,
			64
		], 1n);
		return {
			...t,
			pixel_mask: n
		};
	}
	post_process_object_detection(...e) {
		return yu(...e);
	}
	post_process_panoptic_segmentation(...e) {
		return Eu(...e);
	}
	post_process_instance_segmentation(...e) {
		return Au(...e);
	}
}, Ru = class extends Du {}, Gu = class extends Cu {}, Uu = class extends Cu {
	pad_image(e, t, n, s = {}) {
		const [r, a, o] = t;
		let i = this.image_mean;
		Array.isArray(this.image_mean) || (i = new Array(o).fill(i));
		let l = this.image_std;
		Array.isArray(l) || (l = new Array(o).fill(i));
		const c = i.map((e, t) => -e / l[t]);
		return super.pad_image(e, t, n, {
			center: !0,
			constant_values: c,
			...s
		});
	}
}, Vu = class extends Uu {}, ju = class extends Cu {}, qu = class extends ju {}, Wu = class extends Cu {
	constructor(e) {
		super(e), this.include_top = this.config.include_top ?? !0, this.include_top && (this.image_std = this.image_std.map((e) => e * e));
	}
}, Hu = class extends Cu {};
function Qu(e, t, n, s, r) {
	const a = s * n ** 2, o = Math.sqrt(a / (e * t)), i = r * n;
	let l = Math.floor(o * e / i) * i, c = Math.floor(o * t / i) * i;
	if (0 === l && 0 === c) throw new Error(`Attempting to resize to a 0 x 0 image. Resized height should be divisible by \`pooling_kernel_size * patch_size\`=${i}.`);
	const u = Math.floor(s / r ** 2) * i;
	return 0 === l ? (l = i, c = Math.min(Math.floor(t / e) * i, u)) : 0 === c && (c = i, l = Math.min(Math.floor(e / t) * i, u)), [l, c];
}
function Xu(e, t, n, s, r, a, o) {
	const i = Math.floor(t / r), l = Math.floor(n / r), c = i * l, u = r * r * s, d = new Float32Array(a * u);
	let h = 0;
	for (let f = 0; f < i; ++f) for (let t = 0; t < l; ++t) for (let a = 0; a < r; ++a) {
		const o = (f * r + a) * n * s + t * r * s;
		for (let t = 0; t < r; ++t) {
			const n = o + t * s;
			for (let t = 0; t < s; ++t) d[h++] = e[n + t];
		}
	}
	const _ = new BigInt64Array(2 * a).fill(-1n);
	let p = 0;
	for (let f = 0; f < i; ++f) for (let e = 0; e < l; ++e) _[p++] = BigInt(e), _[p++] = BigInt(f);
	return {
		patches: new Ri("float32", d, [a, u]),
		positions: new Ri("int64", _, [a, 2]),
		num_soft_tokens: Math.floor(c / o ** 2)
	};
}
var Ju = class extends Ms {
	constructor(e) {
		super(), this.config = e, this.patch_size = e.patch_size ?? 16, this.max_soft_tokens = e.max_soft_tokens ?? 280, this.pooling_kernel_size = e.pooling_kernel_size ?? 3, this.resample = e.resample ?? 3, this.rescale_factor = e.rescale_factor ?? 1 / 255, this.do_rescale = e.do_rescale ?? !0, this.do_resize = e.do_resize ?? !0, this.do_convert_rgb = e.do_convert_rgb ?? !0;
	}
	async _call(e) {
		Array.isArray(e) || (e = [e]);
		const { patch_size: t, pooling_kernel_size: n } = this, s = this.max_soft_tokens * n ** 2, r = [], a = [], o = [];
		for (let i of e) {
			if (this.do_convert_rgb && (i = i.rgb()), this.do_resize) {
				const [e, r] = Qu(i.height, i.width, t, s, n);
				e === i.height && r === i.width || (i = await i.resize(r, e, { resample: this.resample }));
			}
			const e = Float32Array.from(i.data);
			if (this.do_rescale) for (let t = 0; t < e.length; ++t) e[t] *= this.rescale_factor;
			const { patches: l, positions: c, num_soft_tokens: u } = Xu(e, i.height, i.width, i.channels, t, s, n);
			r.push(l), a.push(c), o.push(u);
		}
		return {
			pixel_values: Ji(r, 0),
			image_position_ids: Ji(a, 0),
			num_soft_tokens_per_image: o
		};
	}
}, Yu = class extends Cu {
	constructor(e) {
		super(e), this.min_pixels = e.min_pixels ?? e.size?.shortest_edge, this.max_pixels = e.max_pixels ?? e.size?.longest_edge, this.patch_size = e.patch_size, this.merge_size = e.merge_size;
	}
	get_resize_output_image_size(e, t) {
		const n = this.patch_size * this.merge_size;
		return ku(e.height, e.width, n, this.min_pixels, this.max_pixels);
	}
	async _call(e, ...t) {
		const { pixel_values: n, original_sizes: s, reshaped_input_sizes: r } = await super._call(e, ...t);
		let a = n;
		const { temporal_patch_size: o, merge_size: i, patch_size: l } = this.config;
		1 === a.dims[0] && (a = Xi(Array.from({ length: o }, () => a), 0));
		const c = a.dims[0] / o, u = a.dims[1], d = Math.floor(a.dims[2] / l), h = Math.floor(a.dims[3] / l);
		return {
			pixel_values: a.view(c, o, u, Math.floor(d / i), i, l, Math.floor(h / i), i, l).permute(0, 3, 6, 4, 7, 2, 1, 5, 8).view(c * d * h, u * o * l * l),
			image_grid_thw: new Ri("int64", [
				c,
				d,
				h
			], [1, 3]),
			original_sizes: s,
			reshaped_input_sizes: r
		};
	}
}, Ku = class extends Yu {
	get_resize_output_image_size(e, t) {
		const n = this.patch_size * this.merge_size, s = this.config.temporal_patch_size ?? 2;
		return ku(e.height, e.width, n, this.min_pixels, this.max_pixels, s);
	}
}, Zu = class extends Cu {}, ed = class extends Cu {
	async _call(e) {
		const t = await super._call(e), n = t.pixel_values.dims, s = sl([
			n[0],
			n[2],
			n[3]
		]);
		return {
			...t,
			pixel_mask: s
		};
	}
}, td = class extends Cu {
	constructor(e) {
		super(e), this.do_image_splitting = e.do_image_splitting ?? !0, this.max_image_size = e.max_image_size;
	}
	get_resize_for_vision_encoder(e, t) {
		let [n, s] = e.dims.slice(-2);
		const r = s / n;
		return s >= n ? (s = Math.ceil(s / t) * t, n = Math.floor(s / r), n = Math.ceil(n / t) * t) : (n = Math.ceil(n / t) * t, s = Math.floor(n * r), s = Math.ceil(s / t) * t), {
			height: n,
			width: s
		};
	}
	async _call(e, { do_image_splitting: t = null, return_row_col_info: n = !1 } = {}) {
		let s;
		if (Array.isArray(e)) {
			if (0 === e.length || !e[0]) throw new Error("No images provided.");
			s = Array.isArray(e[0]) ? e : [e];
		} else s = [[e]];
		let r = [], a = [], o = [];
		const i = [], l = [];
		for (const m of s) {
			let e = await Promise.all(m.map((e) => this.preprocess(e)));
			i.push(...e.map((e) => e.original_size)), l.push(...e.map((e) => e.reshaped_input_size)), e.forEach((e) => e.pixel_values.unsqueeze_(0));
			const { longest_edge: n } = this.max_image_size;
			let s;
			if (t ?? this.do_image_splitting) {
				let t = new Array(e.length), r = new Array(e.length);
				s = await Promise.all(e.map(async (e, s) => {
					const a = this.get_resize_for_vision_encoder(e.pixel_values, n), o = await Ui(e.pixel_values, { size: [a.height, a.width] }), { frames: i, num_splits_h: l, num_splits_w: c } = await this.split_image(o, this.max_image_size);
					return t[s] = l, r[s] = c, Xi(i, 0);
				})), a.push(t), o.push(r);
			} else {
				const t = [n, n];
				s = await Promise.all(e.map((e) => Ui(e.pixel_values, { size: t }))), a.push(new Array(e.length).fill(0)), o.push(new Array(e.length).fill(0));
			}
			r.push(Xi(s, 0));
		}
		const c = r.length, [u, d, h, _] = r[0].dims;
		let p, f;
		if (1 === c) p = r[0].unsqueeze_(0), f = tl([
			c,
			u,
			h,
			_
		], !0);
		else {
			const e = Math.max(...r.map((e) => e.dims.at(0)));
			f = tl([
				c,
				e,
				h,
				_
			], !0);
			const t = f.data, n = e * h * _;
			for (let s = 0; s < c; ++s) {
				const a = r[s].dims[0];
				if (a < e) {
					r[s] = Xi([r[s], tl([
						e - a,
						d,
						h,
						_
					], 0)], 0);
					const o = s * n + a * h * _, i = (s + 1) * n;
					t.fill(!1, o, i);
				}
			}
			p = Ji(r, 0);
		}
		return {
			pixel_values: p,
			pixel_attention_mask: f,
			original_sizes: i,
			reshaped_input_sizes: l,
			...n ? {
				rows: a,
				cols: o
			} : {}
		};
	}
	async split_image(e, { longest_edge: t }) {
		const n = t, s = t, r = [], [a, o] = e.dims.slice(-2);
		let i = 0, l = 0;
		if (a > n || o > s) {
			i = Math.ceil(a / n), l = Math.ceil(o / s);
			const t = Math.ceil(a / i), c = Math.ceil(o / l);
			for (let n = 0; n < i; ++n) for (let s = 0; s < l; ++s) {
				let u, d, h, _;
				n === i - 1 ? (d = a - t, _ = a) : (d = n * t, _ = (n + 1) * t), s === l - 1 ? (u = o - c, h = o) : (u = s * c, h = (s + 1) * c);
				const p = await qi(e, [d, u], [_, h], [2, 3]);
				r.push(p);
			}
			const u = n, d = s;
			a === u && o === d || (e = await Ui(e, { size: [u, d] }));
		}
		return r.push(e), {
			frames: r,
			num_splits_h: i,
			num_splits_w: l
		};
	}
}, nd = class extends Cu {
	constructor(e) {
		super({
			do_pad: !0,
			pad_size: {
				width: e.image_size,
				height: e.image_size
			},
			...e
		}), this.constant_values = this.config.background_color.map((e) => e * this.rescale_factor);
	}
	pad_image(e, t, n, s) {
		return super.pad_image(e, t, n, {
			constant_values: this.constant_values,
			center: !0,
			...s
		});
	}
}, sd = class extends Cu {
	constructor(e) {
		const { resize_mode: t, fill_color: n, interpolation: s, size: r, ...a } = e;
		super({
			...a,
			size: "squash" === t ? {
				width: r,
				height: r
			} : "shortest" === t ? { shortest_edge: r } : { longest_edge: r },
			resample: "bicubic" === s ? 3 : 2,
			do_center_crop: !0,
			crop_size: r,
			do_normalize: !0
		});
	}
};
function rd(e, t) {
	return Math.round(e / t) * t;
}
function ad(e, t) {
	const [n, s, r, a] = e.dims, o = Math.floor(r / t), i = Math.floor(a / t), l = t * t * s, c = e.data, u = new Float32Array(n * o * i * l), d = r * a;
	for (let h = 0; h < n; ++h) {
		const e = h * s * d, n = h * o * i * l;
		for (let r = 0; r < o; ++r) for (let o = 0; o < i; ++o) {
			let h = n + (r * i + o) * l;
			for (let n = 0; n < t; ++n) {
				const i = (r * t + n) * a + o * t;
				for (let n = 0; n < t; ++n) {
					const t = i + n;
					for (let n = 0; n < s; ++n) u[h++] = c[e + n * d + t];
				}
			}
		}
	}
	return new Ri("float32", u, [
		n,
		o * i,
		l
	]);
}
function od(e, t) {
	const [, n, s] = e.dims, r = new BigInt64Array(t);
	r.fill(1n, 0, n);
	let a = e;
	if (n < t) {
		const n = new Float32Array(t * s);
		n.set(e.data), a = new Ri("float32", n, [
			1,
			t,
			s
		]);
	}
	return {
		padded: a,
		mask: new Ri("int64", r, [t])
	};
}
var id = class extends Cu {
	constructor(e) {
		super(e), this.downsample_factor = e.downsample_factor ?? 2, this.do_image_splitting = e.do_image_splitting ?? !0, this.min_tiles = e.min_tiles ?? 2, this.max_tiles = e.max_tiles ?? 10, this.use_thumbnail = e.use_thumbnail ?? !0, this.min_image_tokens = e.min_image_tokens ?? 64, this.max_image_tokens = e.max_image_tokens ?? 256, this.encoder_patch_size = e.encoder_patch_size ?? e.patch_size ?? 16, this.tile_size = e.tile_size ?? 512, this.max_pixels_tolerance = e.max_pixels_tolerance ?? 2, this.return_row_col_info = e.return_row_col_info ?? !1;
		const t = this.max_image_tokens * this.downsample_factor ** 2, n = this.do_image_splitting ? (this.tile_size / this.encoder_patch_size) ** 2 : 0;
		this.max_num_patches = Math.max(t, n);
	}
	_is_image_too_large(e, t) {
		const n = this.encoder_patch_size * this.downsample_factor;
		return Math.max(this.encoder_patch_size, rd(e, n)) * Math.max(this.encoder_patch_size, rd(t, n)) > this.max_image_tokens * (this.encoder_patch_size * this.downsample_factor) ** 2 * this.max_pixels_tolerance;
	}
	_get_grid_layout(e, t) {
		const n = function(e, t) {
			const n = [], s = /* @__PURE__ */ new Set();
			for (let r = e; r <= t; ++r) for (let a = 1; a <= r; ++a) for (let o = 1; o <= r; ++o) {
				const r = a * o;
				if (r >= e && r <= t) {
					const e = a << 16 | o;
					s.has(e) || (s.add(e), n.push([a, o]));
				}
			}
			return n.sort((e, t) => e[0] * e[1] - t[0] * t[1]);
		}(this.min_tiles, this.max_tiles), [s, r] = function(e, t, n, s, r) {
			let a = Infinity, o = [1, 1];
			const i = n * s;
			for (const l of t) {
				const t = Math.abs(e - l[0] / l[1]);
				t < a ? (a = t, o = l) : t === a && i > .5 * r * r * l[0] * l[1] && (o = l);
			}
			return o;
		}(t / e, n, t, e, this.tile_size);
		return {
			grid_width: s,
			grid_height: r,
			target_width: this.tile_size * s,
			target_height: this.tile_size * r
		};
	}
	async _call(e, { return_row_col_info: t = null } = {}) {
		let n;
		n = Array.isArray(e) ? Array.isArray(e[0]) ? e : [e] : [[e]];
		const s = [], r = [], a = [], o = [], i = [], l = [];
		for (const u of n) {
			const e = await Promise.all(u.map((e) => this.preprocess(e, { do_pad: !1 })));
			for (const { pixel_values: t } of e) {
				const [, e, n] = t.dims, c = t.unsqueeze_(0), u = this.encoder_patch_size * this.downsample_factor, d = u ** 2, [h, _] = ku(Math.max(u, e), Math.max(u, n), u, this.min_image_tokens * d, this.max_image_tokens * d).map((e) => Math.max(u, e));
				let p, f = 1, m = 1;
				const g = this._is_image_too_large(e, n), w = this.do_image_splitting && !(1 === this.min_tiles && 1 === this.max_tiles);
				if (g && w) {
					const { grid_width: t, grid_height: s, target_width: r, target_height: a } = this._get_grid_layout(e, n);
					f = s, m = t;
					const o = await Ui(c, { size: [a, r] });
					p = [];
					for (let e = 0; e < s; ++e) for (let n = 0; n < t; ++n) {
						const t = e * this.tile_size, s = n * this.tile_size;
						p.push(o.slice(null, null, [t, t + this.tile_size], [s, s + this.tile_size]));
					}
					this.use_thumbnail && t * s !== 1 && p.push(await Ui(c, { size: [_, h] }));
				} else p = [await Ui(c, { size: [_, h] })];
				for (const t of p) {
					const [, , e, n] = t.dims, { padded: o, mask: i } = od(ad(t, this.encoder_patch_size), this.max_num_patches);
					s.push(o), r.push(i), a.push([Math.floor(e / this.encoder_patch_size), Math.floor(n / this.encoder_patch_size)]);
				}
				o.push(f), i.push(m), l.push([_, h]);
			}
		}
		const c = {
			pixel_values: Xi(s, 0),
			pixel_attention_mask: Ji(r, 0),
			spatial_shapes: new Ri("int64", BigInt64Array.from(a.flat(), BigInt), [a.length, 2])
		};
		return (t ?? this.return_row_col_info) && (c.image_rows = o, c.image_cols = i, c.image_sizes = l), c;
	}
}, ld = class extends Cu {}, cd = class extends Cu {
	post_process_panoptic_segmentation(...e) {
		return Eu(...e);
	}
	post_process_instance_segmentation(...e) {
		return Au(...e);
	}
}, ud = class extends cd {}, dd = class extends cd {}, hd = class extends Cu {}, _d = class extends hd {}, pd = class extends Cu {}, fd = class extends pd {}, md = class extends Cu {}, gd = class extends md {}, wd = class extends Cu {}, yd = class extends wd {}, bd = class extends Cu {}, xd = class extends bd {}, vd = class extends Uu {}, Md = class extends Cu {
	post_process_object_detection(...e) {
		return yu(...e);
	}
}, kd = class extends Md {}, Ed = class extends Md {}, Ad = 336, Cd = [2, 3], { ceil: Td, floor: Sd, sqrt: Fd } = Math, Id = class extends Cu {
	constructor(e) {
		super({
			...e,
			do_normalize: !0,
			do_pad: !0,
			pad_size: "custom",
			do_convert_rgb: !0,
			do_resize: !0
		}), this._num_crops = e.num_crops;
	}
	calc_num_image_tokens_from_image_size(e, t) {
		const { num_img_tokens: n } = this.config;
		return Sd((Sd(t / Ad) * Sd(e / Ad) + 1) * n + 1 + (Sd(t / Ad) + 1) * Fd(n));
	}
	get_resize_output_image_size(e, t) {
		const n = this._num_crops, [s, r] = e.size;
		let a = s / r, o = 1;
		for (; o * Math.ceil(o / a) <= n;) o += 1;
		o -= 1;
		const i = Math.floor(336 * o);
		return [i, Math.floor(i / a)];
	}
	pad_image(e, t, n, s = {}) {
		const [r, a] = t, o = Ad * Td(r / Ad), i = Ad * Td(a / Ad), l = [
			1,
			1,
			1
		].map((e, t) => (e - this.image_mean[t]) / this.image_std[t]);
		return super.pad_image(e, t, {
			width: i,
			height: o
		}, {
			center: !0,
			constant_values: l,
			...s
		});
	}
	async _call(e, { num_crops: t = null } = {}) {
		if (this._num_crops = t ??= this.config.num_crops, t < 4 || Fd(t) % 1 != 0) throw new Error("num_crops must be a square number >= 4");
		Array.isArray(e) || (e = [e]);
		const n = e.length, s = await Promise.all(e.map((e) => this.preprocess(e))), r = s.map((e) => e.original_size), a = s.map((e) => e.reshaped_input_size), o = [];
		for (const { pixel_values: c } of s) {
			c.unsqueeze_(0);
			const [e, n] = c.dims.slice(-2), s = await Ui(c, {
				size: [Ad, Ad],
				mode: "bicubic"
			});
			if (t > 0) {
				const r = [], a = Fd(t), i = Sd(n / a), l = Sd(e / a);
				for (let t = 0; t < a; ++t) for (let s = 0; s < a; ++s) {
					let o, u, d, h;
					t === a - 1 ? (u = e - l, h = e) : (u = t * l, h = (t + 1) * l), s === a - 1 ? (o = n - i, d = n) : (o = s * i, d = (s + 1) * i);
					const _ = await qi(c, [u, o], [h, d], Cd);
					r.push(_);
				}
				const u = await Ui(Xi(r, 0), {
					size: [Ad, Ad],
					mode: "bicubic"
				});
				o.push(Xi([s, u], 0));
			} else o.push(s);
		}
		const i = Ji(o, 0), l = a.map((e) => e.map((e) => Ad * Td(e / Ad)));
		return {
			pixel_values: i,
			original_sizes: r,
			reshaped_input_sizes: a,
			image_sizes: new Ri("int64", l.flat(), [n, 2]),
			num_img_tokens: l.map(([e, t]) => this.calc_num_image_tokens_from_image_size(t, e))
		};
	}
}, Pd = class extends Cu {
	get_resize_output_image_size(e, t) {
		const { longest_edge: n } = t;
		if (void 0 === n) throw new Error("size must contain 'longest_edge'");
		const [s, r] = e.size, a = Math.max(s, r) / n;
		let o = s, i = r;
		a > 1 && (o = Math.floor(s / a), i = Math.floor(r / a));
		const { patch_size: l, spatial_merge_size: c } = this.config;
		if (!c) throw new Error("config must contain 'spatial_merge_size'");
		const u = l * c;
		return [(Math.floor((o - 1) / u) + 1) * u, (Math.floor((i - 1) / u) + 1) * u];
	}
}, Ld = class extends Cu {}, Od = class extends Cu {
	post_process_object_detection(...e) {
		return yu(...e);
	}
}, zd = class extends Cu {
	reshape_input_points(e, t, n, s = !1) {
		let r = Cs(e = structuredClone(e));
		if (3 === r.length) s || (r = [1, ...r]), e = [e];
		else if (4 !== r.length) throw Error("The input_points must be a 4D tensor of shape `batch_size`, `point_batch_size`, `nb_points_per_image`, `2`.");
		for (let a = 0; a < e.length; ++a) {
			const [s, r] = t[a], [o, i] = n[a], l = [i / r, o / s];
			for (let t = 0; t < e[a].length; ++t) for (let n = 0; n < e[a][t].length; ++n) for (let s = 0; s < e[a][t][n].length; ++s) e[a][t][n][s] *= l[s % 2];
		}
		return new Ri("float32", Float32Array.from(e.flat(Infinity)), r);
	}
	add_input_labels(e, t) {
		let n = Cs(e);
		if (2 === n.length) n = [1, ...n], e = [e];
		else if (3 !== n.length) throw Error("The input_points must be a 4D tensor of shape `batch_size`, `point_batch_size`, `nb_points_per_image`, `2`.");
		if (n.some((e, n) => e !== t.dims[n])) throw Error(`The first ${n.length} dimensions of 'input_points' and 'input_labels' must be the same.`);
		return new Ri("int64", e.flat(Infinity).map(BigInt), n);
	}
	async _call(e, { input_points: t = null, input_labels: n = null, input_boxes: s = null } = {}) {
		const r = await super._call(e);
		if (t && (r.input_points = this.reshape_input_points(t, r.original_sizes, r.reshaped_input_sizes)), n) {
			if (!r.input_points) throw Error("`input_points` must be provided if `input_labels` are provided.");
			r.input_labels = this.add_input_labels(n, r.input_points);
		}
		return s && (r.input_boxes = this.reshape_input_points(s, r.original_sizes, r.reshaped_input_sizes, !0)), r;
	}
	async post_process_masks(e, t, n, { mask_threshold: s = 0, binarize: r = !0, pad_size: a = null } = {}) {
		const o = [], i = [(a = a ?? this.pad_size ?? this.size).height, a.width];
		for (let l = 0; l < t.length; ++l) {
			const a = t[l], c = n[l];
			let u = await Ui(e[l], {
				mode: "bilinear",
				size: i
			});
			if (u = u.slice(null, null, [0, c[0]], [0, c[1]]), u = await Ui(u, {
				mode: "bilinear",
				size: a
			}), r) {
				const e = u.data, t = new Uint8Array(e.length);
				for (let n = 0; n < e.length; ++n) e[n] > s && (t[n] = 1);
				u = new Ri("bool", t, u.dims);
			}
			o.push(u);
		}
		return o;
	}
	generate_crop_boxes(e, t, { crop_n_layers: n = 0, overlap_ratio: s = 512 / 1500, points_per_crop: r = 32, crop_n_points_downscale_factor: a = 1 } = {}) {}
}, Nd = class extends Cu {
	post_process_semantic_segmentation(...e) {
		return bu(...e);
	}
}, Bd = class extends Nd {}, $d = class extends Cu {
	post_process_semantic_segmentation(...e) {
		return bu(...e);
	}
}, Dd = class extends $d {}, Rd = class extends Cu {}, Gd = class extends Cu {
	pad_image(e, t, n, s = {}) {
		const [r, a, o] = t;
		return super.pad_image(e, t, {
			width: a + (n - a % n) % n,
			height: r + (n - r % n) % n
		}, {
			mode: "symmetric",
			center: !1,
			constant_values: -1,
			...s
		});
	}
}, Ud = class extends Cu {}, Vd = class extends Ud {}, jd = class extends Cu {
	async _call(e, t) {
		Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]);
		const n = await Promise.all(e.map((e) => this.preprocess(e))), s = await Promise.all(t.map((e) => this.preprocess(e, {
			do_normalize: !1,
			do_convert_rgb: !1,
			do_convert_grayscale: !0
		})));
		return {
			pixel_values: Ji(n.map((e, t) => Xi([e.pixel_values, s[t].pixel_values], 0)), 0),
			original_sizes: n.map((e) => e.original_size),
			reshaped_input_sizes: n.map((e) => e.reshaped_input_size)
		};
	}
}, qd = class extends Cu {
	post_process_pose_estimation(e, t, { threshold: n = null } = {}) {
		const s = e.tolist(), [r, a, o, i] = e.dims, l = [];
		for (let c = 0; c < r; ++c) {
			const e = s[c], r = t[c], a = [];
			for (let t = 0; t < r.length; ++t) {
				const s = r[t], l = [], c = [], u = [], d = s.at(-2) / i, h = s.at(-1) / o;
				for (let t = 0; t < e.length; ++t) {
					let [s, r] = [0, 0], a = 0, o = -Infinity;
					const i = e[t];
					for (let e = 0; e < i.length; ++e) {
						const t = i[e];
						for (let n = 0; n < t.length; ++n) {
							const i = t[n];
							a += i, o = Math.max(o, i), s += (n + .5) * i, r += e * i;
						}
					}
					if (null != n && o < n) continue;
					const _ = [d * s / a, h * r / a];
					l.push(_), u.push(t), c.push(o);
				}
				a.push({
					bbox: s,
					scores: c,
					labels: u,
					keypoints: l
				});
			}
			l.push(a);
		}
		return l;
	}
}, Wd = class extends Cu {
	post_process_object_detection(...e) {
		return yu(...e);
	}
}, Hd = class extends Wd {}, Qd = class {
	static async from_pretrained(e, t = {}) {
		const n = await Xo(e, mc, !0, t), s = n.image_processor_type ?? n.feature_extractor_type;
		let r = Tu[s?.replace(/Fast$/, "")];
		return r || (void 0 !== s && Os.warn(`Image processor type '${s}' not found, assuming base ImageProcessor. Please report this at ${pc}.`), r = Cu), new r(n);
	}
}, Xd = class extends yc {
	static tokenizer_class = _c;
	static image_processor_class = Qd;
	constructor(e, t, n) {
		super(e, t, n);
		const { tasks_answer_post_processing_type: s, task_prompts_without_inputs: r, task_prompts_with_input: a } = this.image_processor.config;
		this.tasks_answer_post_processing_type = new Map(Object.entries(s ?? {})), this.task_prompts_without_inputs = new Map(Object.entries(r ?? {})), this.task_prompts_with_input = new Map(Object.entries(a ?? {})), this.regexes = {
			quad_boxes: /(.+?)<loc_(\d+)><loc_(\d+)><loc_(\d+)><loc_(\d+)><loc_(\d+)><loc_(\d+)><loc_(\d+)><loc_(\d+)>/gm,
			bboxes: /([^<]+)?<loc_(\d+)><loc_(\d+)><loc_(\d+)><loc_(\d+)>/gm
		}, this.size_per_bin = 1e3;
	}
	construct_prompts(e) {
		"string" == typeof e && (e = [e]);
		const t = [];
		for (const n of e) if (this.task_prompts_without_inputs.has(n)) t.push(this.task_prompts_without_inputs.get(n));
		else {
			for (const [e, s] of this.task_prompts_with_input) if (n.includes(e)) {
				t.push(s.replaceAll("{input}", n).replaceAll(e, ""));
				break;
			}
			t.length !== e.length && t.push(n);
		}
		return t;
	}
	post_process_generation(e, t, n) {
		const s = this.tasks_answer_post_processing_type.get(t) ?? "pure_text";
		let r;
		switch (e = e.replaceAll("<s>", "").replaceAll("</s>", ""), s) {
			case "pure_text":
				r = e;
				break;
			case "description_with_bboxes":
			case "bboxes":
			case "phrase_grounding":
			case "ocr":
				const a = "ocr" === s ? "quad_boxes" : "bboxes", o = e.matchAll(this.regexes[a]), i = [], l = [];
				for (const [e, t, ...s] of o) i.push(t ? t.trim() : i.at(-1) ?? ""), l.push(s.map((e, t) => (Number(e) + .5) / this.size_per_bin * n[t % 2]));
				r = {
					labels: i,
					[a]: l
				};
				break;
			default: throw new Error(`Task "${t}" (of type "${s}") not yet implemented.`);
		}
		return { [t]: r };
	}
	async _call(e, t = null, n = {}) {
		if (!e && !t) throw new Error("Either text or images must be provided");
		return {
			...await this.image_processor(e, n),
			...t ? this.tokenizer(this.construct_prompts(t), n) : {}
		};
	}
}, Jd = class extends yc {
	static tokenizer_class = _c;
	static image_processor_class = Qd;
	static uses_processor_config = !0;
	static uses_chat_template_file = !0;
	constructor(e, t, n) {
		super(e, t, n), this.image_seq_length = this.config.image_seq_length;
		const { boi_token: s, image_token: r, eoi_token: a } = this.tokenizer.config;
		this.boi_token = s, this.image_token = r, this.eoi_token = a;
		const o = r.repeat(this.image_seq_length);
		this.full_image_sequence = `\n\n${s}${o}${a}\n\n`;
	}
	async _call(e, t = null, n = {}) {
		let s;
		return "string" == typeof e && (e = [e]), t && (s = await this.image_processor(t, n), e = e.map((e) => e.replaceAll(this.boi_token, this.full_image_sequence))), {
			...this.tokenizer(e, n),
			...s
		};
	}
}, Yd = class extends yc {
	static image_processor_class = Qd;
	static feature_extractor_class = lu;
	static tokenizer_class = _c;
	static uses_processor_config = !0;
	static uses_chat_template_file = !0;
	constructor(e, t, n) {
		super(e, t, n), this.audio_seq_length = this.config.audio_seq_length, this.image_seq_length = this.config.image_seq_length;
		const { audio_token_id: s, boa_token: r, audio_token: a, eoa_token: o, image_token_id: i, boi_token: l, image_token: c, eoi_token: u } = this.tokenizer.config;
		this.audio_token_id = s, this.boa_token = r, this.audio_token = a;
		const d = a.repeat(this.audio_seq_length);
		this.full_audio_sequence = `\n\n${r}${d}${o}\n\n`, this.image_token_id = i, this.boi_token = l, this.image_token = c;
		const h = c.repeat(this.image_seq_length);
		this.full_image_sequence = `\n\n${l}${h}${u}\n\n`;
	}
	async _call(e, t = null, n = null, s = {}) {
		let r, a;
		return "string" == typeof e && (e = [e]), n && (r = await this.feature_extractor(n, s), e = e.map((e) => e.replaceAll(this.audio_token, this.full_audio_sequence))), t && (a = await this.image_processor(t, s), e = e.map((e) => e.replaceAll(this.image_token, this.full_image_sequence))), {
			...this.tokenizer(e, s),
			...a,
			...r
		};
	}
}, Kd = class extends yc {
	static uses_processor_config = !0;
	static uses_chat_template_file = !0;
	constructor(e, t, n) {
		super(e, t, n), this.audio_ms_per_token = this.config.audio_ms_per_token ?? 40, this.audio_seq_length = this.config.audio_seq_length ?? 750, this.image_seq_length = this.config.image_seq_length ?? 280;
		const { audio_token: s, boa_token: r, eoa_token: a, image_token: o, boi_token: i, eoi_token: l } = this.tokenizer.config;
		this.audio_token = s, this.boa_token = r, this.eoa_token = a, this.image_token = o, this.boi_token = i, this.eoi_token = l;
	}
	static async from_pretrained(e, t = {}) {
		const [n, s, r] = await Promise.all([
			Xo(e, gc, !0, t),
			_c.from_pretrained(e, t),
			Qo(e, wc, !1, t)
		]), a = { tokenizer: s };
		return n.image_processor && (a.image_processor = new Ju(n.image_processor)), n.feature_extractor && (a.feature_extractor = new Yc(n.feature_extractor)), new this(n, a, r);
	}
	_compute_audio_num_tokens(e, t) {
		const n = Math.round(20 * t / 1e3), s = Math.round(10 * t / 1e3), r = Math.floor(n / 2);
		let a = Math.floor((e + r - n - 1) / s) + 1;
		if (a <= 0) return 0;
		for (let o = 0; o < 2; ++o) a = Math.floor((a - 1) / 2) + 1;
		return Math.min(a, this.audio_seq_length);
	}
	async _call(e, t = null, n = null, s = {}) {
		let r, a;
		if ("string" == typeof e && (e = [e]), t) {
			r = await this.image_processor(t, s);
			const n = r.num_soft_tokens_per_image;
			let a = 0;
			e = e.map((e) => e.replaceAll(this.image_token, () => `\n\n${this.boi_token}${this.image_token.repeat(n[a++])}${this.eoi_token}\n\n`));
		}
		if (n) {
			const t = Array.isArray(n) ? n : [n];
			a = await this.feature_extractor(t[0], s);
			const r = this.feature_extractor.config.sampling_rate ?? 16e3;
			let o = 0;
			e = e.map((e) => e.replaceAll(this.audio_token, () => `\n\n${this.boa_token}${this.audio_token.repeat(this._compute_audio_num_tokens(t[o++].length, r))}${this.eoa_token}\n\n`));
		}
		return {
			...this.tokenizer(e, s),
			...r,
			...a
		};
	}
}, Zd = class extends yc {
	static image_processor_class = Qd;
	static tokenizer_class = _c;
	static image_token = "<|image_pad|>";
	async _call(e, t = null, ...n) {
		let s, r;
		if (Array.isArray(e) || (e = [e]), t && (s = await this.image_processor(t), r = s.image_grid_thw), r) {
			let t = this.image_processor.config.merge_size ** 2, n = 0;
			const s = this.constructor.image_token, a = r.tolist();
			e = e.map((e) => {
				for (; e.includes(s);) {
					const r = Number(a[n++].reduce((e, t) => e * t, 1n));
					e = e.replace(s, "<|placeholder|>".repeat(Math.floor(r / t)));
				}
				return e.replaceAll("<|placeholder|>", s);
			});
		}
		return {
			...this.tokenizer(e),
			...s
		};
	}
}, eh = class extends Zd {
	static image_token = "<|image|>";
}, th = class extends yc {
	static tokenizer_class = _c;
	static feature_extractor_class = lu;
	static uses_processor_config = !0;
	_get_num_audio_features(e) {
		const { hop_length: t } = this.feature_extractor.config.melspec_kwargs, { projector_window_size: n, projector_downsample_rate: s } = this.feature_extractor.config, r = Math.floor(n / s), a = Math.floor(e / t) + 1, o = Math.floor(a / 2);
		return Math.ceil(o / n) * r;
	}
	async _call(e, t = null, n = {}) {
		if (Array.isArray(e)) throw new Error("Batched inputs are not supported yet.");
		let s = {};
		if (t) {
			const { input_features: n } = await this.feature_extractor(t);
			s.input_features = n;
			const r = this._get_num_audio_features(t.length);
			s.input_features_mask = new Ri("bool", new Uint8Array(r).fill(1), [1, r]);
			const a = this.config.audio_token ?? "<|audio|>";
			if (!e.includes(a)) throw new Error(`The input text does not contain the audio token ${a}.`);
			e = e.replaceAll(a, a.repeat(r));
		}
		return {
			...this.tokenizer(e, {
				add_special_tokens: !1,
				...n
			}),
			...s
		};
	}
};
function nh(e, t) {
	const n = e.dims.at(-1) - 1, s = e.tolist();
	s.fill(!1, 0, 1), s.fill(!1, n);
	const r = t.tolist();
	return s.map((e, t) => e ? t : null).filter((e) => null !== e).map((e) => r[e]);
}
var sh = class extends yc {
	static tokenizer_class = _c;
	static image_processor_class = Qd;
	async _call(e, t, n = {}) {
		const s = e ? await this.image_processor(e, n) : {};
		return {
			...t ? this.tokenizer(t, n) : {},
			...s
		};
	}
	post_process_grounded_object_detection(e, t, { box_threshold: n = .25, text_threshold: s = .25, target_sizes: r = null } = {}) {
		const { logits: a, pred_boxes: o } = e, i = a.dims[0];
		if (null !== r && r.length !== i) throw Error("Make sure that you pass in as many target sizes as the batch dimension of the logits");
		const l = a.dims.at(1), c = a.sigmoid(), u = c.max(-1).tolist(), d = o.tolist().map((e) => e.map((e) => wu(e))), h = [];
		for (let _ = 0; _ < i; ++_) {
			const e = null !== r ? r[_] : null;
			null !== e && (d[_] = d[_].map((t) => t.map((t, n) => t * e[(n + 1) % 2])));
			const a = u[_], o = [], i = [], p = [];
			for (let r = 0; r < l; ++r) {
				const e = a[r];
				if (e <= n) continue;
				const l = d[_][r], u = c[_][r];
				o.push(e), p.push(l);
				const h = nh(u.gt(s), t[_]);
				i.push(h);
			}
			h.push({
				scores: o,
				boxes: p,
				labels: this.batch_decode(i)
			});
		}
		return h;
	}
};
function rh(e, t, n, s, r, a) {
	return 0 === e && 0 === t ? function(e, t, n, s) {
		return `${t}${s}` + n.repeat(e) + `${t}`;
	}(n, s, r, a) : function(e, t, n, s, r, a) {
		let o = "";
		for (let i = 0; i < t; ++i) {
			for (let t = 0; t < n; ++t) o += s + `<row_${i + 1}_col_${t + 1}>` + r.repeat(e);
			o += "\n";
		}
		return o += `\n${s}${a}` + r.repeat(e) + `${s}`, o;
	}(n, e, t, s, r, a);
}
var ah = class extends yc {
	static image_processor_class = Qd;
	static tokenizer_class = _c;
	static uses_processor_config = !0;
	fake_image_token = "<fake_token_around_image>";
	image_token = "<image>";
	global_img_token = "<global-img>";
	async _call(e, t = null, n = {}) {
		let s;
		n.return_row_col_info ??= !0, t && (s = await this.image_processor(t, n)), Array.isArray(e) || (e = [e]);
		const r = s.rows ?? [new Array(e.length).fill(0)], a = s.cols ?? [new Array(e.length).fill(0)], o = this.config.image_seq_len, i = [], l = [];
		for (let c = 0; c < e.length; ++c) {
			const t = e[c], n = r[c], s = a[c];
			i.push(Ps(t, this.image_token));
			const u = n.map((e, t) => rh(e, s[t], o, this.fake_image_token, this.image_token, this.global_img_token)), d = t.split(this.image_token);
			if (0 === d.length) throw new Error("The image token should be present in the text.");
			let h = d[0];
			for (let e = 0; e < u.length; ++e) h += u[e] + d[e + 1];
			l.push(h);
		}
		return {
			...this.tokenizer(l),
			...s
		};
	}
}, oh = class extends yc {
	static image_processor_class = Qd;
	static tokenizer_class = _c;
	static uses_processor_config = !0;
	constructor(e, t, n) {
		super(e, t, n), this.image_tag = this.config.image_tag, this.image_start_tag = this.config.image_start_tag, this.image_end_tag = this.config.image_end_tag, this.num_image_tokens = this.config.num_image_tokens;
	}
	async _call(e, { images: t = null, chat_template: n = "default" } = {}) {
		t ? Array.isArray(t) || (t = [t]) : t = await Promise.all(e.filter((e) => e.images).flatMap((e) => e.images).map((e) => fu.read(e)));
		const s = this.tokenizer, r = (e) => s.encode(e, { add_special_tokens: !1 }), a = s.apply_chat_template(e, {
			tokenize: !1,
			add_generation_prompt: !0,
			chat_template: n
		}).split(this.image_tag), o = a.length - 1;
		if (t.length !== o) throw new Error(`Number of images provided (${t.length}) does not match number of "${this.image_tag}" image tags (${o})`);
		const [i, l, c] = s.convert_tokens_to_ids([
			this.image_tag,
			this.image_start_tag,
			this.image_end_tag
		]);
		let u = r(a[0]), d = new Array(u.length).fill(!1);
		for (let p = 1; p < a.length; ++p) {
			const e = new Array(this.num_image_tokens).fill(i), t = r(a[p]);
			u = Ts(u, [l], e, [c], t);
			d = Ts(d, [!1], new Array(this.num_image_tokens).fill(!0), [!1], new Array(t.length).fill(!1));
		}
		const h = [1, u.length], _ = {
			input_ids: new Ri("int64", u, h),
			attention_mask: new Ri("int64", new Array(u.length).fill(1), h),
			images_seq_mask: new Ri("bool", d, h),
			images_emb_mask: new Ri("bool", new Array(o * this.num_image_tokens).fill(!0), [
				1,
				o,
				this.num_image_tokens
			])
		};
		if (t && t.length > 0) {
			const e = await this.image_processor(t);
			return e.pixel_values.unsqueeze_(0), {
				..._,
				...e
			};
		}
		return _;
	}
}, ih = class extends yc {
	static tokenizer_class = _c;
	static image_processor_class = Qd;
	async _call(e = null, t = null, n = {}) {
		if (!e && !t) throw new Error("Either text or images must be provided");
		return {
			...e ? this.tokenizer(e, n) : {},
			...t ? await this.image_processor(t, n) : {}
		};
	}
}, lh = class extends yc {
	static tokenizer_class = _c;
	static image_processor_class = Qd;
	async _call(e, t = null, n = {}) {
		const { image_rows: s, image_cols: r, image_sizes: a, ...o } = await this.image_processor(e, {
			...n,
			return_row_col_info: !0
		});
		if (t) {
			const e = this.config.image_token ?? "<image>", { tile_size: n = 512, downsample_factor: o = 2, encoder_patch_size: i = 16, use_thumbnail: l = !0 } = this.image_processor.config, c = (e) => Math.ceil(Math.floor(e / i) / o), u = c(n) ** 2, d = this.config.image_start_token ?? "<|image_start|>", h = this.config.image_end_token ?? "<|image_end|>", _ = this.config.image_thumbnail ?? "<|img_thumbnail|>";
			Array.isArray(t) || (t = [t]);
			let p = 0;
			t = t.map((t) => {
				const n = t.split(e);
				return n[0] + n.slice(1).map((t) => {
					const n = p++, [o, i] = a[n], f = s[n], m = r[n], g = c(o) * c(i);
					let w = d;
					if (f > 1 || m > 1) {
						const t = e.repeat(u);
						for (let e = 0; e < f; ++e) for (let n = 0; n < m; ++n) w += `<|img_row_${e + 1}_col_${n + 1}|>` + t;
						l && (w += _ + e.repeat(g));
					} else w += e.repeat(g);
					return w + h + t;
				}).join("");
			});
		}
		return {
			...o,
			...t ? this.tokenizer(t, n) : {}
		};
	}
}, ch = class extends yc {
	static tokenizer_class = _c;
	static image_processor_class = Qd;
	static uses_processor_config = !0;
	async _call(e, t = null, n = {}) {
		const s = await this.image_processor(e, n);
		if (t) {
			const [e, n] = s.pixel_values.dims.slice(-2), { image_token: r, patch_size: a, num_additional_image_tokens: o } = this.config, i = Math.floor(e / a) * Math.floor(n / a) + o;
			t = structuredClone(t), Array.isArray(t) || (t = [t]);
			for (let s = 0; s < t.length; ++s) t[s] = t[s].replace(r, r.repeat(i));
		}
		const r = t ? this.tokenizer(t, n) : {};
		return {
			...s,
			...r
		};
	}
}, uh = {
	char: ["char_decode", 1],
	bpe: ["bpe_decode", 2],
	wp: ["wp_decode", 102]
}, dh = class extends yc {
	static tokenizer_class = _c;
	static image_processor_class = Qd;
	get char_tokenizer() {
		return this.components.char_tokenizer;
	}
	get bpe_tokenizer() {
		return this.components.bpe_tokenizer;
	}
	get wp_tokenizer() {
		return this.components.wp_tokenizer;
	}
	_decode_helper(e, t) {
		if (!uh.hasOwnProperty(t)) throw new Error(`Format ${t} is not supported.`);
		const [n, s] = uh[t], r = this[n].bind(this), [a, o] = e.dims, i = [], l = [], c = e.tolist();
		for (let u = 0; u < a; ++u) {
			const e = c[u], t = [], n = [];
			for (let a = 1; a < o; ++a) {
				const [r, o] = Zo(Jo(e[a]));
				if (n.push(r), o == s) break;
				t.push(o);
			}
			const r = n.length > 0 ? n.reduce((e, t) => e * t, 1) : 0;
			l.push(t), i.push(r);
		}
		return [r(l), i];
	}
	char_decode(e) {
		return this.char_tokenizer.batch_decode(e).map((e) => e.replaceAll(" ", ""));
	}
	bpe_decode(e) {
		return this.bpe_tokenizer.batch_decode(e);
	}
	wp_decode(e) {
		return this.wp_tokenizer.batch_decode(e).map((e) => e.replaceAll(" ", ""));
	}
	batch_decode([e, t, n]) {
		const [s, r] = this._decode_helper(e, "char"), [a, o] = this._decode_helper(t, "bpe"), [i, l] = this._decode_helper(n, "wp"), c = [], u = [];
		for (let d = 0; d < s.length; ++d) {
			const [e, t] = Zo([
				r[d],
				o[d],
				l[d]
			]);
			c.push([
				s[d],
				a[d],
				i[d]
			][t]), u.push(e);
		}
		return {
			generated_text: c,
			scores: u,
			char_preds: s,
			bpe_preds: a,
			wp_preds: i
		};
	}
	static async from_pretrained(...e) {
		const t = await super.from_pretrained(...e), n = await _c.from_pretrained("Xenova/gpt2"), s = await _c.from_pretrained("Xenova/bert-base-uncased");
		return t.components = {
			image_processor: t.image_processor,
			char_tokenizer: t.tokenizer,
			bpe_tokenizer: n,
			wp_tokenizer: s
		}, t;
	}
	async _call(e, t = null) {
		const n = await this.image_processor(e);
		return t && (n.labels = this.tokenizer(t).input_ids), n;
	}
}, hh = class extends yc {
	static tokenizer_class = _c;
	static feature_extractor_class = lu;
	async _call(e) {
		return await this.feature_extractor(e);
	}
}, _h = class extends yc {
	static tokenizer_class = _c;
	static image_processor_class = Qd;
}, ph = "<image>";
var fh = class extends yc {
	static tokenizer_class = _c;
	static image_processor_class = Qd;
	static uses_processor_config = !1;
	async _call(e, t = null, n = {}) {
		t || (Os.warn("You are using PaliGemma without a text prefix. It will perform as a picture-captioning model."), t = ""), Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]);
		const s = this.tokenizer.bos_token, r = this.image_processor.config.image_seq_length;
		let a;
		t.some((e) => e.includes(ph)) ? a = t.map((e) => {
			const t = e.replaceAll(ph, ph.repeat(r)), n = t.lastIndexOf(ph), a = -1 === n ? 0 : n + 7;
			return t.slice(0, a) + s + t.slice(a) + "\n";
		}) : (Os.warn("You are passing both `text` and `images` to `PaliGemmaProcessor`. The processor expects special image tokens in the text, as many tokens as there are images per each text. It is recommended to add `<image>` tokens in the very beginning of your text. For this call, we will infer how many images each text has and add special tokens."), a = t.map((t) => function(e, t, n, s, r) {
			return `${s.repeat(n * r)}${t}${e}\n`;
		}(t, s, r, ph, e.length)));
		const o = this.tokenizer(a, n);
		return {
			...await this.image_processor(e, n),
			...o
		};
	}
}, mh = "<|image|>", gh = /<\|image_\d+\|>/g, wh = class extends yc {
	static image_processor_class = Qd;
	static tokenizer_class = _c;
	async _call(e, t = null, { padding: n = !0, truncation: s = !0, num_crops: r = null } = {}) {
		let a, o;
		if (Array.isArray(e) || (e = [e]), t) {
			o = await this.image_processor(t, { num_crops: r });
			const { num_img_tokens: i } = o, l = e.map((e, t) => e.split(gh).join(mh.repeat(i[t])));
			a = this.tokenizer(l, {
				padding: n,
				truncation: s
			});
			const c = this.tokenizer._tokenizer.token_to_id(mh);
			a.input_ids.map_((e) => e == c ? -e : e);
		} else a = this.tokenizer(e);
		return {
			...a,
			...o
		};
	}
}, yh = class extends yc {
	static tokenizer_class = _c;
	static image_processor_class = Qd;
	static uses_processor_config = !0;
	async _call(e, t = null, n = {}) {
		const s = await this.image_processor(e, n);
		if (t) {
			const [e, n] = s.pixel_values.dims.slice(-2), { image_token: r, image_break_token: a, image_end_token: o, patch_size: i, spatial_merge_size: l } = this.config, c = i * l, u = Math.floor(e / c), d = Math.floor(n / c);
			t = structuredClone(t), Array.isArray(t) || (t = [t]);
			for (let s = 0; s < t.length; ++s) {
				const e = r.repeat(d), n = e + o, i = (e + a).repeat(u - 1) + n;
				t[s] = t[s].replace(r, i);
			}
		}
		const r = t ? this.tokenizer(t, n) : {};
		return {
			...s,
			...r
		};
	}
}, bh = class extends yc {
	static feature_extractor_class = eu;
	async _call(e) {
		return await this.feature_extractor(e);
	}
	post_process_speaker_diarization(...e) {
		return this.feature_extractor.post_process_speaker_diarization(...e);
	}
	get sampling_rate() {
		return this.feature_extractor.config.sampling_rate;
	}
}, xh = class extends Zd {}, vh = class extends xh {}, Mh = class extends yc {
	static image_processor_class = Qd;
	async _call(...e) {
		return await this.image_processor(...e);
	}
	post_process_masks(...e) {
		return this.image_processor.post_process_masks(...e);
	}
	reshape_input_points(...e) {
		return this.image_processor.reshape_input_points(...e);
	}
}, kh = class extends Mh {}, Eh = class extends kh {}, Ah = class extends yc {
	static tokenizer_class = _c;
	static feature_extractor_class = lu;
	async _call(e) {
		return await this.feature_extractor(e);
	}
}, Ch = class extends yc {
	static tokenizer_class = _c;
	static feature_extractor_class = lu;
	static uses_processor_config = !0;
	async _call(e, t = null, n = {}) {
		if (Array.isArray(e)) throw new Error("Batched inputs are not supported yet.");
		let s = {};
		if (t) {
			const r = t.length, { input_features: a } = await this.feature_extractor(t, {
				...n,
				max_length: r
			}), o = Math.round(r / this.config.encoder_ds_factor + 1e-4), i = 1 + Math.ceil(o / this.config.stack_factor);
			s.audio_token_len = [i], s.audio_values = a;
			const l = this.config.audio_placeholder;
			if (!e.includes(l)) throw new Error(`The input text does not contain the image token ${l}.`);
			e = e.replaceAll(l, l.repeat(i));
		}
		return {
			...this.tokenizer(e, {
				add_special_tokens: !1,
				...n
			}),
			...s
		};
	}
}, Th = "[AUDIO]";
var Sh = class extends yc {
	static tokenizer_class = _c;
	static feature_extractor_class = lu;
	static uses_processor_config = !1;
	async _call(e, t = null, n = {}) {
		if (Array.isArray(e)) throw new Error("Batched inputs are not supported yet.");
		const s = {};
		if (t) {
			if (!e.includes(Th)) throw new Error(`The input text does not contain the audio token ${Th}.`);
			Array.isArray(t) || (t = [t]);
			const r = e.split(Th), a = r.length - 1;
			if (a !== t.length) throw new Error(`The number of audio inputs (${t.length}) does not match the number of audio tokens in the text (${a}).`);
			const o = this.feature_extractor.config.n_samples, i = t.map((e) => function(e, t) {
				const n = [];
				for (let s = 0; s < e.length; s += t) n.push(e.subarray(s, Math.min(s + t, e.length)));
				return n;
			}(e, o)), l = i.map((e) => e.length), c = i.flat(), u = (await Promise.all(c.map((e) => this.feature_extractor(e, n)))).map((e) => e.input_features);
			s.audio_values = u.length > 1 ? Xi(u, 0) : u[0];
			let d = r[0];
			for (let e = 0; e < l.length; ++e) {
				d += "[BEGIN_AUDIO]";
				for (let t = 0; t < l[e]; ++t) d += Th.repeat(375);
				d += r[e + 1];
			}
			e = d;
		}
		return {
			...this.tokenizer(e, {
				add_special_tokens: !1,
				...n
			}),
			...s
		};
	}
}, Fh = class extends yc {
	static tokenizer_class = _c;
	static feature_extractor_class = lu;
	static uses_processor_config = !1;
	get num_mel_frames_first_audio_chunk() {
		return 56;
	}
	get num_samples_first_audio_chunk() {
		const { hop_length: e, n_fft: t } = this.feature_extractor.config;
		return (this.num_mel_frames_first_audio_chunk - 1) * e + Math.floor(t / 2);
	}
	get num_samples_per_audio_chunk() {
		const { hop_length: e, n_fft: t } = this.feature_extractor.config;
		return 8 * e + t;
	}
	get num_right_pad_tokens() {
		return 17;
	}
	get audio_length_per_tok() {
		return 8;
	}
	get raw_audio_length_per_tok() {
		return 8 * this.feature_extractor.config.hop_length;
	}
	async _call(e, { is_streaming: t = !1, is_first_audio_chunk: n = !0 } = {}) {
		if (vc(e, "VoxtralRealtimeProcessor"), !t && !n) throw new Error("In non-streaming mode (`is_streaming=false`), `is_first_audio_chunk` must be `true`.");
		if (n) {
			if (t) {
				const t = 32 * this.raw_audio_length_per_tok, n = new Float32Array(t + e.length);
				n.set(e, t);
				const s = await this.feature_extractor(n, { center: !0 }), r = 39, a = new BigInt64Array(r).fill(BigInt(32));
				return a[0] = 1n, {
					input_ids: new Ri("int64", a, [1, r]),
					...s
				};
			}
			{
				const t = this.num_right_pad_tokens * this.raw_audio_length_per_tok, n = new Float32Array(e.length + t);
				return n.set(e), await this.feature_extractor(n, { center: !0 });
			}
		}
		return await this.feature_extractor(e, { center: !1 });
	}
}, Ih = class extends yc {
	static tokenizer_class = _c;
	static feature_extractor_class = lu;
	async _call(e) {
		return await this.feature_extractor(e);
	}
}, Ph = class extends yc {
	static tokenizer_class = _c;
	static feature_extractor_class = lu;
	async _call(e) {
		return await this.feature_extractor(e);
	}
}, Lh = class extends yc {
	static tokenizer_class = _c;
	static feature_extractor_class = lu;
	async _call(e) {
		return await this.feature_extractor(e);
	}
}, Oh = class {
	static async from_pretrained(e, t = {}) {
		const n = await Xo(e, mc, !0, t), { image_processor_type: s, feature_extractor_type: r, processor_class: a } = n;
		if (a && bc[a]) return bc[a].from_pretrained(e, t);
		if (!s && !r) throw new Error("No `image_processor_type` or `feature_extractor_type` found in the config.");
		const o = {};
		if (s) {
			const e = Tu[s.replace(/Fast$/, "")];
			if (!e) throw new Error(`Unknown image_processor_type: '${s}'.`);
			o.image_processor = new e(n);
		}
		if (r) {
			const e = Tu[r];
			if (e) o.image_processor = new e(n);
			else {
				const e = Mc[r];
				if (!e) throw new Error(`Unknown feature_extractor_type: '${r}'.`);
				o.feature_extractor = new e(n);
			}
		}
		return new yc({}, o, null);
	}
};
function zh(e) {
	const t = {};
	let n = {};
	switch (e.model_type) {
		case "llava":
		case "paligemma":
		case "gemma3":
		case "florence2":
		case "llava_onevision":
		case "idefics3":
		case "granite_speech":
		case "ultravox":
		case "voxtral":
		case "voxtral_realtime":
		case "smolvlm":
		case "gemma3n":
		case "gemma4":
		case "lfm2_vl":
		case "chatterbox":
		case "lighton_ocr":
		case "glm_ocr":
		case "mistral3":
		case "qwen2_5_vl":
		case "qwen3_vl":
		case "qwen3_vl_moe":
			n = zh(e.text_config);
			break;
		case "moondream1":
			n = zh(e.phi_config);
			break;
		case "musicgen":
			n = zh(e.decoder);
			break;
		case "multi_modality":
			n = zh(e.language_config);
			break;
		case "gpt2":
		case "gptj":
		case "jais":
		case "codegen":
		case "gpt_bigcode":
			t.num_heads = "n_head", t.num_layers = "n_layer", t.hidden_size = "n_embd";
			break;
		case "gpt_neox":
		case "stablelm":
		case "opt":
		case "falcon":
		case "modernbert-decoder":
			t.num_heads = "num_attention_heads", t.num_layers = "num_hidden_layers", t.hidden_size = "hidden_size";
			break;
		case "gpt_oss":
		case "llama":
		case "llama4_text":
		case "nanochat":
		case "apertus":
		case "arcee":
		case "afmoe":
		case "lfm2":
		case "lfm2_moe":
		case "smollm3":
		case "olmo":
		case "olmo2":
		case "olmo3":
		case "mobilellm":
		case "granite":
		case "granitemoehybrid":
		case "cohere":
		case "cohere2":
		case "mistral":
		case "voxtral_realtime_text":
		case "voxtral_realtime_encoder":
		case "starcoder2":
		case "qwen2":
		case "qwen2_moe":
		case "qwen2_vl":
		case "qwen2_vl_text":
		case "qwen2_5_vl_text":
		case "qwen3_moe":
		case "qwen3_vl_text":
		case "qwen3_vl_moe_text":
		case "phi":
		case "phi3":
		case "phi3_v":
		case "llava_qwen2":
			t.num_heads = "num_key_value_heads", t.num_layers = "num_hidden_layers", t.hidden_size = "hidden_size", t.num_attention_heads = "num_attention_heads", t.dim_kv = "head_dim";
			break;
		case "qwen3":
		case "solar_open":
		case "glm_ocr_text":
		case "gemma":
		case "gemma2":
		case "vaultgemma":
		case "gemma3_text":
		case "gemma3n_text":
		case "gemma4_text":
		case "glm":
		case "helium":
		case "ernie4_5":
		case "hunyuan_v1_dense":
		case "falcon_h1":
		case "nemotron_h":
		case "ministral":
		case "ministral3":
			t.num_heads = "num_key_value_heads", t.num_layers = "num_hidden_layers", t.dim_kv = "head_dim";
			break;
		case "openelm":
			t.num_heads = "num_kv_heads", t.num_layers = "num_transformer_layers", t.dim_kv = "head_dim";
			break;
		case "gpt_neo":
		case "donut-swin":
			t.num_heads = "num_heads", t.num_layers = "num_layers", t.hidden_size = "hidden_size";
			break;
		case "bloom":
			t.num_heads = "n_head", t.num_layers = "n_layer", t.hidden_size = "hidden_size";
			break;
		case "mpt":
			t.num_heads = "n_heads", t.num_layers = "n_layers", t.hidden_size = "d_model";
			break;
		case "exaone":
			t.num_heads = "num_key_value_heads", t.num_layers = "num_layers", t.dim_kv = "head_dim", t.num_attention_heads = "num_attention_heads";
			break;
		case "youtu":
		case "deepseek_v3":
		case "glm_moe_dsa":
		case "mistral4":
			t.num_heads = "num_key_value_heads", t.num_layers = "num_hidden_layers", t.dim_kv = "qk_head_dim", t.num_attention_heads = "num_attention_heads";
			break;
		case "t5":
		case "mt5":
		case "longt5":
			t.num_decoder_layers = "num_decoder_layers", t.num_decoder_heads = "num_heads", t.decoder_dim_kv = "d_kv", t.num_encoder_layers = "num_layers", t.num_encoder_heads = "num_heads", t.encoder_dim_kv = "d_kv";
			break;
		case "bart":
		case "mbart":
		case "marian":
		case "whisper":
		case "lite-whisper":
		case "m2m_100":
		case "blenderbot":
		case "blenderbot-small":
		case "florence2_language":
			t.num_decoder_layers = "decoder_layers", t.num_decoder_heads = "decoder_attention_heads", t.decoder_hidden_size = "d_model", t.num_encoder_layers = "encoder_layers", t.num_encoder_heads = "encoder_attention_heads", t.encoder_hidden_size = "d_model";
			break;
		case "speecht5":
			t.num_decoder_layers = "decoder_layers", t.num_decoder_heads = "decoder_attention_heads", t.decoder_hidden_size = "hidden_size", t.num_encoder_layers = "encoder_layers", t.num_encoder_heads = "encoder_attention_heads", t.encoder_hidden_size = "hidden_size";
			break;
		case "trocr":
			t.num_encoder_layers = t.num_decoder_layers = "decoder_layers", t.num_encoder_heads = t.num_decoder_heads = "decoder_attention_heads", t.encoder_hidden_size = t.decoder_hidden_size = "d_model";
			break;
		case "musicgen_decoder":
			t.num_encoder_layers = t.num_decoder_layers = "num_hidden_layers", t.num_encoder_heads = t.num_decoder_heads = "num_attention_heads", t.encoder_hidden_size = t.decoder_hidden_size = "hidden_size";
			break;
		case "moonshine":
			t.num_decoder_layers = "decoder_num_hidden_layers", t.num_decoder_heads = "decoder_num_key_value_heads", t.num_encoder_layers = "encoder_num_hidden_layers", t.num_encoder_heads = "encoder_num_key_value_heads", t.encoder_hidden_size = t.decoder_hidden_size = "hidden_size";
			break;
		case "cohere_asr":
			t.num_decoder_layers = "num_hidden_layers", t.num_decoder_heads = "num_key_value_heads", t.decoder_hidden_size = "hidden_size", t.decoder_dim_kv = "head_dim";
			const { num_hidden_layers: s, num_attention_heads: r, hidden_size: a } = e.encoder_config;
			n = {
				num_encoder_layers: s,
				num_encoder_heads: r,
				encoder_hidden_size: a,
				encoder_dim_kv: e.head_dim
			};
			break;
		case "vision-encoder-decoder":
			const o = zh(e.decoder), i = "num_decoder_layers" in o, l = Is(e, ["model_type", "is_encoder_decoder"]);
			return i ? (l.num_decoder_layers = o.num_decoder_layers, l.num_decoder_heads = o.num_decoder_heads, l.decoder_hidden_size = o.decoder_hidden_size, l.num_encoder_layers = o.num_encoder_layers, l.num_encoder_heads = o.num_encoder_heads, l.encoder_hidden_size = o.encoder_hidden_size) : (l.num_layers = o.num_layers, l.num_heads = o.num_heads, l.hidden_size = o.hidden_size), l;
	}
	const s = {
		...n,
		...Is(e, [
			"model_type",
			"multi_query",
			"is_encoder_decoder"
		])
	};
	for (const r in t) s[r] = e[t[r]];
	return s;
}
function Nh(e, t) {
	e instanceof Bh || (e = new Bh(e));
	const n = t?.prefix ?? "past_key_values", s = "present" === n ? "present" : "past", r = /* @__PURE__ */ new Set();
	if (["lfm2", "lfm2_moe"].includes(e.model_type)) {
		const { layer_types: t } = e;
		for (let e = 0; e < t.length; ++e) if ("full_attention" === t[e]) r.add(`${n}.${e}.key`), r.add(`${n}.${e}.value`);
		else {
			if ("conv" !== t[e]) throw new Error(`Unsupported layer type: ${t[e]}`);
			r.add(`${s}_conv.${e}`);
		}
		return r;
	}
	if ([
		"granitemoehybrid",
		"falcon_h1",
		"nemotron_h"
	].includes(e.model_type)) {
		const t = e, a = t.layer_types ?? t.layers_block_type, o = t.num_hidden_layers ?? a?.length;
		for (let e = 0; e < o; ++e) a && "mamba" !== a[e] || (r.add(`${s}_conv.${e}`), r.add(`${s}_ssm.${e}`)), a && "attention" !== a[e] || (r.add(`${n}.${e}.key`), r.add(`${n}.${e}.value`));
		return r;
	}
	if ([
		"qwen3_next",
		"qwen3_5_text",
		"qwen3_5_moe_text",
		"olmo_hybrid"
	].includes(e.model_type)) {
		const { layer_types: t } = e;
		for (let a = 0; a < t.length; ++a) if ("full_attention" === t[a]) r.add(`${n}.${a}.key`), r.add(`${n}.${a}.value`);
		else {
			if ("linear_attention" !== t[a]) throw new Error(`Unsupported layer type: ${t[a]}`);
			"olmo_hybrid" === e.model_type ? (r.add(`${s}_conv.${a}.key`), r.add(`${s}_conv.${a}.value`), r.add(`${s}_conv.${a}.query`)) : r.add(`${s}_conv.${a}`), r.add(`${s}_recurrent.${a}`);
		}
		return r;
	}
	if (["gemma4", "gemma4_text"].includes(e.model_type)) {
		const t = "gemma4" === e.model_type ? e.text_config : e, s = t.num_hidden_layers - (t.num_kv_shared_layers ?? 0);
		for (let e = 0; e < s; ++e) r.add(`${n}.${e}.key`), r.add(`${n}.${e}.value`);
		return r;
	}
	if ([
		"lfm2_vl",
		"qwen3_5",
		"qwen3_5_moe",
		"voxtral_realtime"
	].includes(e.model_type)) {
		let n;
		return n = "voxtral_realtime" === e.model_type && "audio_encoder" === t?.session_name ? e.audio_config : e.text_config, Nh(n, t);
	}
	return function(e, { prefix: t = "past_key_values" } = {}) {
		const n = /* @__PURE__ */ new Set(), s = e.normalized_config;
		if (s.is_encoder_decoder && "num_encoder_heads" in s && "num_decoder_heads" in s) for (let r = 0; r < s.num_decoder_layers; ++r) n.add(`${t}.${r}.encoder.key`), n.add(`${t}.${r}.encoder.value`), n.add(`${t}.${r}.decoder.key`), n.add(`${t}.${r}.decoder.value`);
		else if (s.multi_query) for (let r = 0; r < s.num_layers; ++r) n.add(`${t}.${r}.key_value`);
		else for (let r = 0; r < s.num_layers; ++r) n.add(`${t}.${r}.key`), n.add(`${t}.${r}.value`);
		return n;
	}(e, { prefix: n });
}
var Bh = class e {
	model_type = null;
	is_encoder_decoder = !1;
	max_position_embeddings;
	"transformers.js_config";
	constructor(e) {
		Object.assign(this, e), this.normalized_config = zh(this);
	}
	static async from_pretrained(t, { progress_callback: n = null, config: s = null, cache_dir: r = null, local_files_only: a = !1, revision: o = "main" } = {}) {
		!s || s instanceof e || (s = new e(s));
		const i = s ?? await async function(e, t) {
			return await Xo(e, "config.json", !0, t);
		}(t, {
			progress_callback: n,
			config: s,
			cache_dir: r,
			local_files_only: a,
			revision: o
		});
		return new this(i);
	}
}, $h = class {
	static async from_pretrained(...e) {
		return Bh.from_pretrained(...e);
	}
};
function Dh(e, t, n) {
	return e ? "object" == typeof e && null !== e ? e.hasOwnProperty(t) ? +e[t] : e.hasOwnProperty(n) ? +e[n] : 0 : +e : 0;
}
function Rh(e, t) {
	const n = [];
	for (let s = 0; s < t; ++s) n.push(`${e}_data${0 === s ? "" : "_" + s}`);
	return n;
}
async function Gh(e, t, n, s = !1, r = void 0) {
	let a = n.config?.["transformers.js_config"] ?? {};
	const o = Pi(n.device ?? a.device, t, { warn: (e) => Os.info(e) }), i = function(e = null) {
		if (!e) return _i;
		switch (e) {
			case "auto": return mi;
			case "gpu": return mi.filter((e) => [
				"webgpu",
				"cuda",
				"dml",
				"webnn-gpu"
			].includes(e));
		}
		if (mi.includes(e)) return [di[e] ?? e];
		throw new Error(`Unsupported device: "${e}". Should be one of: ${mi.join(", ")}.`);
	}(o), l = a.device_config ?? {};
	l.hasOwnProperty(o) && (a = {
		...a,
		...l[o]
	});
	const c = $i(n.dtype ?? a.dtype, t, o, {
		configDtype: a.dtype,
		warn: (e) => Os.info(e)
	});
	if (!Bi.hasOwnProperty(c)) throw new Error(`Invalid dtype: ${c}. Should be one of: ${Object.keys(Oi).join(", ")}`);
	if ("webgpu" === o && !hs.IS_NODE_ENV && c === Oi.fp16 && !await Li()) throw new Error(`The device (${o}) does not support fp16.`);
	const u = Bi[c], d = { ...n.session_options };
	d.executionProviders ??= i;
	const h = a.free_dimension_overrides;
	h ? d.freeDimensionOverrides ??= h : o.startsWith("webnn") && !d.freeDimensionOverrides && Os.warn(`WebNN does not currently support dynamic shapes and requires 'free_dimension_overrides' to be set in config.json, preferably as a field within config["transformers.js_config"]["device_config"]["${o}"]. When 'free_dimension_overrides' is not set, you may experience significant performance degradation.`);
	const _ = async function(e, t, n, s) {
		const r = `${t}${s}.onnx`;
		return await Ho(e, `${n.subfolder ?? ""}/${r}`, !0, n, hs.IS_NODE_ENV);
	}(e, t, n, u), p = await async function(e, t, n, s, r, a = {}) {
		const o = `${t}${n}.onnx`, i = hs.IS_NODE_ENV;
		let l = [];
		const c = Dh(r, o, t);
		if (c > 0) {
			if (c > 100) throw new Error(`The number of external data chunks (${c}) exceeds the maximum allowed value (100).`);
			const t = Rh(o, c);
			for (const n of t) {
				const t = `${s.subfolder ?? ""}/${n}`;
				l.push(new Promise(async (r, a) => {
					const o = await Ho(e, t, !0, s, i);
					r(o instanceof Uint8Array ? {
						path: n,
						data: o
					} : n);
				}));
			}
		} else void 0 !== a.externalData && (l = a.externalData.map(async (t) => {
			if ("string" == typeof t.data) {
				const n = await Ho(e, t.data, !0, s);
				return {
					...t,
					data: n
				};
			}
			return t;
		}));
		return Promise.all(l);
	}(e, t, u, n, n.use_external_data_format ?? a.use_external_data_format, d);
	if (p.length > 0 && (!hs.IS_NODE_ENV || p.some((e) => "string" != typeof e)) && (d.externalData = p), s && "webgpu" === o) {
		const e = Nh(n.config, {
			prefix: "present",
			session_name: r
		});
		if (e.size > 0 && !Ci()) {
			const t = {};
			for (const n of e) t[n] = "gpu-buffer";
			d.preferredOutputLocation = t;
		}
	}
	return {
		buffer_or_path: await _,
		session_options: d,
		session_config: {
			dtype: c,
			device: o
		}
	};
}
async function Uh(e, t, n, s = void 0) {
	return Object.fromEntries(await Promise.all(Object.keys(t).map(async (r) => {
		const a = s?.[r] ?? !1, { buffer_or_path: o, session_options: i, session_config: l } = await Gh(e, t[r], n, a, r);
		return [r, await vi(o, i, l)];
	})));
}
function Vh(e) {
	for (let t in e) Ei(e[t]) ? e[t] = new Ri(e[t]) : "object" == typeof e[t] && Vh(e[t]);
	return e;
}
async function jh(e, t) {
	const n = function(e, t) {
		const n = Object.create(null), s = [];
		for (const o of e.inputNames) {
			const e = t[o];
			e instanceof Ri ? n[o] = Ci() ? e.clone() : e : s.push(o);
		}
		if (s.length > 0) throw new Error(`An error occurred during model execution: "Missing the following inputs: ${s.join(", ")}.`);
		const r = Object.keys(t).length, a = e.inputNames.length;
		if (r > a) {
			let n = Object.keys(t).filter((t) => !e.inputNames.includes(t));
			Os.warn(`WARNING: Too many inputs were provided (${r} > ${a}). The following inputs will be ignored: "${n.join(", ")}".`);
		}
		return n;
	}(e, t);
	try {
		return Vh(await ki(e, Object.fromEntries(Object.entries(n).map(([e, t]) => {
			const n = t.ort_tensor;
			return hs.IS_NODE_ENV && "undefined" != typeof Float16Array && n.cpuData instanceof Float16Array && (n.cpuData = new Uint16Array(n.cpuData.buffer)), [e, n];
		}))));
	} catch (s) {
		const e = Object.fromEntries(Object.entries(n).map(([e, t]) => {
			const n = {
				type: t.type,
				dims: t.dims,
				location: t.location
			};
			return "gpu-buffer" !== n.location && (n.data = t.data), [e, n];
		}));
		throw Os.error(`An error occurred during model execution: "${s}".`), Os.error("Inputs given to model:", e), s;
	}
}
var qh = class {}, Wh = class extends qh {
	constructor({ logits: e, ...t }) {
		super(), this.logits = e;
		const n = Object.values(t);
		n.length > 0 && (this.attentions = n);
	}
}, Hh = class extends qh {
	constructor({ logits: e }) {
		super(), this.logits = e;
	}
}, Qh = class extends qh {
	constructor({ logits: e }) {
		super(), this.logits = e;
	}
}, Xh = class extends qh {
	constructor({ start_logits: e, end_logits: t }) {
		super(), this.start_logits = e, this.end_logits = t;
	}
}, Jh = class extends qh {
	constructor({ logits: e }) {
		super(), this.logits = e;
	}
}, Yh = class extends qh {
	constructor({ alphas: e }) {
		super(), this.alphas = e;
	}
}, Kh = class extends Ms {
	_call(e, t) {
		throw Error("`_call` should be implemented in a subclass");
	}
}, Zh = class extends Ms {
	_call(e, t) {
		throw Error("`_call` should be implemented in a subclass");
	}
}, e_ = class extends Ms {
	constructor() {
		super(), this.processors = [];
	}
	push(e) {
		this.processors.push(e);
	}
	extend(e) {
		this.processors.push(...e);
	}
	_call(e, t) {
		let n = t;
		for (const s of this.processors) n = s(e, n);
		return n;
	}
	[Symbol.iterator]() {
		return this.processors.values();
	}
}, t_ = class extends Kh {
	constructor(e) {
		super(), this.bos_token_id = e;
	}
	_call(e, t) {
		for (let n = 0; n < e.length; ++n) if (1 === e[n].length) {
			const e = t[n].data;
			e.fill(-Infinity), e[this.bos_token_id] = 0;
		}
		return t;
	}
}, n_ = class extends Kh {
	constructor(e, t) {
		super(), this.max_length = e, this.eos_token_id = Array.isArray(t) ? t : [t];
	}
	_call(e, t) {
		for (let n = 0; n < e.length; ++n) if (e[n].length === this.max_length - 1) {
			const e = t[n].data;
			e.fill(-Infinity);
			for (const t of this.eos_token_id) e[t] = 0;
		}
		return t;
	}
}, s_ = class extends Kh {
	constructor(e) {
		super(), this.suppress_tokens = e;
	}
	_call(e, t) {
		for (let n = 0; n < e.length; ++n) {
			const e = t[n].data;
			for (const t of this.suppress_tokens) e[t] = -Infinity;
		}
		return t;
	}
}, r_ = class extends Kh {
	constructor(e, t) {
		super(), this.begin_suppress_tokens = e, this.begin_index = t;
	}
	_call(e, t) {
		for (let n = 0; n < e.length; ++n) if (e[n].length === this.begin_index) {
			const e = t[n].data;
			for (const t of this.begin_suppress_tokens) e[t] = -Infinity;
		}
		return t;
	}
}, a_ = class extends Kh {
	constructor(e, t) {
		super(), this.eos_token_id = Array.isArray(e.eos_token_id) ? e.eos_token_id[0] : e.eos_token_id, this.no_timestamps_token_id = e.no_timestamps_token_id, this.timestamp_begin = this.no_timestamps_token_id + 1, this.begin_index = t.length, t.at(-1) === this.no_timestamps_token_id && (this.begin_index -= 1), this.max_initial_timestamp_index = e.max_initial_timestamp_index;
	}
	_call(e, t) {
		for (let n = 0; n < e.length; ++n) {
			const s = t[n].data;
			if (s[this.no_timestamps_token_id] = -Infinity, e[n].length === this.begin_index) {
				s.subarray(0, this.timestamp_begin).fill(-Infinity);
				continue;
			}
			const r = e[n].slice(this.begin_index), a = r.length >= 1 && r[r.length - 1] >= this.timestamp_begin, o = r.length < 2 || r[r.length - 2] >= this.timestamp_begin;
			if (a && (o ? s.subarray(this.timestamp_begin).fill(-Infinity) : s.subarray(0, this.eos_token_id).fill(-Infinity)), e[n].length === this.begin_index && null !== this.max_initial_timestamp_index) {
				const e = this.timestamp_begin + this.max_initial_timestamp_index;
				s.subarray(e + 1).fill(-Infinity);
			}
			const i = Yo(s);
			Math.log(i.subarray(this.timestamp_begin).map(Math.exp).reduce((e, t) => e + t)) > Zo(i.subarray(0, this.timestamp_begin))[0] && s.subarray(0, this.timestamp_begin).fill(-Infinity);
		}
		return t;
	}
}, o_ = class extends Kh {
	constructor(e) {
		super(), this.no_repeat_ngram_size = e;
	}
	getNgrams(e) {
		const t = e.length, n = [];
		for (let r = 0; r < t + 1 - this.no_repeat_ngram_size; ++r) {
			const t = [];
			for (let n = 0; n < this.no_repeat_ngram_size; ++n) t.push(e[r + n]);
			n.push(t.map(Number));
		}
		const s = /* @__PURE__ */ new Map();
		for (const r of n) {
			const e = r.slice(0, r.length - 1), t = JSON.stringify(e), n = s.get(t) ?? [];
			n.push(r[r.length - 1]), s.set(t, n);
		}
		return s;
	}
	getGeneratedNgrams(e, t) {
		const n = t.slice(t.length + 1 - this.no_repeat_ngram_size, t.length);
		return e.get(JSON.stringify(n.map(Number))) ?? [];
	}
	calcBannedNgramTokens(e) {
		if (e.length + 1 < this.no_repeat_ngram_size) return [];
		{
			const t = this.getNgrams(e);
			return this.getGeneratedNgrams(t, e);
		}
	}
	_call(e, t) {
		for (let n = 0; n < e.length; ++n) {
			const s = t[n].data, r = this.calcBannedNgramTokens(e[n]);
			for (const e of r) s[e] = -Infinity;
		}
		return t;
	}
}, i_ = class extends Kh {
	constructor(e) {
		super(), this.penalty = e;
	}
	_call(e, t) {
		for (let n = 0; n < e.length; ++n) {
			const s = t[n].data;
			for (const t of new Set(e[n])) {
				const e = Number(t);
				s[e] < 0 ? s[e] *= this.penalty : s[e] /= this.penalty;
			}
		}
		return t;
	}
}, l_ = class extends Kh {
	constructor(e, t) {
		super(), this.min_length = e, this.eos_token_id = Array.isArray(t) ? t : [t];
	}
	_call(e, t) {
		for (let n = 0; n < e.length; ++n) if (e[n].length < this.min_length) {
			const e = t[n].data;
			for (const t of this.eos_token_id) e[t] = -Infinity;
		}
		return t;
	}
}, c_ = class extends Kh {
	constructor(e, t, n) {
		super(), this.prompt_length_to_skip = e, this.min_new_tokens = t, this.eos_token_id = Array.isArray(n) ? n : [n];
	}
	_call(e, t) {
		for (let n = 0; n < e.length; ++n) if (e[n].length - this.prompt_length_to_skip < this.min_new_tokens) {
			const e = t[n].data;
			for (const t of this.eos_token_id) e[t] = -Infinity;
		}
		return t;
	}
}, u_ = class extends Kh {
	constructor(e, t) {
		super(), this.bad_words_ids = e, this.eos_token_id = Array.isArray(t) ? t : [t];
	}
	_call(e, t) {
		for (let n = 0; n < e.length; ++n) {
			const s = t[n].data, r = e[n];
			for (const e of this.bad_words_ids) {
				if (r.length < e.length - 1) continue;
				let t = !0;
				for (let n = 1; n <= e.length - 1; ++n) if (e.at(-n - 1) != r.at(-n)) {
					t = !1;
					break;
				}
				t && (s[e.at(-1)] = -Infinity);
			}
		}
		return t;
	}
}, d_ = class extends Kh {
	constructor(e) {
		if (super(), e <= 1) throw new Error(`Require guidance scale >1 to use the classifier free guidance processor, got guidance scale ${e}.`);
		this.guidance_scale = e;
	}
	_call(e, t) {
		if (t.dims[0] !== 2 * e.length) throw new Error(`Logits should have twice the batch size of the input ids, the first half of batches corresponding to the conditional inputs, and the second half of batches corresponding to the unconditional inputs. Got batch size ${t.dims[0]} for the logits and ${e.length} for the input ids.`);
		const n = e.length, s = t.slice([0, n], null), r = t.slice([n, t.dims[0]], null);
		for (let a = 0; a < r.data.length; ++a) r.data[a] += (s.data[a] - r.data[a]) * this.guidance_scale;
		return r;
	}
}, h_ = class extends Zh {
	constructor(e) {
		if (super(), "number" != typeof e || e <= 0) {
			let t = `\`temperature\` (=${e}) must be a strictly positive float, otherwise your next token scores will be invalid.`;
			0 === e && (t += " If you're looking for greedy decoding strategies, set `do_sample=false`.");
		}
		this.temperature = e;
	}
	_call(e, t) {
		const n = t.data;
		for (let s = 0; s < n.length; ++s) n[s] /= this.temperature;
		return t;
	}
}, __ = class {
	max_length = 20;
	max_new_tokens = null;
	min_length = 0;
	min_new_tokens = null;
	early_stopping = !1;
	max_time = null;
	do_sample = !1;
	num_beams = 1;
	num_beam_groups = 1;
	penalty_alpha = null;
	use_cache = !0;
	temperature = 1;
	top_k = 50;
	top_p = 1;
	typical_p = 1;
	epsilon_cutoff = 0;
	eta_cutoff = 0;
	diversity_penalty = 0;
	repetition_penalty = 1;
	encoder_repetition_penalty = 1;
	length_penalty = 1;
	no_repeat_ngram_size = 0;
	bad_words_ids = null;
	force_words_ids = null;
	renormalize_logits = !1;
	constraints = null;
	forced_bos_token_id = null;
	forced_eos_token_id = null;
	remove_invalid_values = !1;
	exponential_decay_length_penalty = null;
	suppress_tokens = null;
	streamer = null;
	begin_suppress_tokens = null;
	forced_decoder_ids = null;
	guidance_scale = null;
	num_return_sequences = 1;
	output_attentions = !1;
	output_hidden_states = !1;
	output_scores = !1;
	return_dict_in_generate = !1;
	pad_token_id = null;
	bos_token_id = null;
	eos_token_id = null;
	encoder_no_repeat_ngram_size = 0;
	decoder_start_token_id = null;
	generation_kwargs = {};
	constructor(e) {
		Object.assign(this, Is(e, Object.getOwnPropertyNames(this)));
	}
}, p_ = class extends Ms {
	_call(e, t) {
		throw Error("StoppingCriteria needs to be subclassed");
	}
}, f_ = class e extends Ms {
	constructor() {
		super(), this.criteria = [];
	}
	push(e) {
		this.criteria.push(e);
	}
	extend(t) {
		t instanceof e ? t = t.criteria : t instanceof p_ && (t = [t]), this.criteria.push(...t);
	}
	_call(e, t) {
		const n = new Array(e.length).fill(!1);
		for (const s of this.criteria) {
			const r = s(e, t);
			for (let e = 0; e < n.length; ++e) n[e] ||= r[e];
		}
		return n;
	}
	[Symbol.iterator]() {
		return this.criteria.values();
	}
}, m_ = class extends p_ {
	constructor(e, t = null) {
		super(), this.max_length = e, this.max_position_embeddings = t;
	}
	_call(e) {
		return e.map((e) => e.length >= this.max_length);
	}
}, g_ = class extends p_ {
	constructor(e) {
		super(), Array.isArray(e) || (e = [e]), this.eos_token_id = e;
	}
	_call(e, t) {
		return e.map((e) => {
			const t = e.at(-1);
			return this.eos_token_id.some((e) => t == e);
		});
	}
}, w_ = class extends Ms {
	constructor(e) {
		super(), this.generation_config = e;
	}
	async _call(e) {
		return this.sample(e);
	}
	async sample(e) {
		throw Error("sample should be implemented in subclasses.");
	}
	getLogits(e, t) {
		let n = e.dims.at(-1), s = e.data;
		if (-1 === t) s = s.slice(-n);
		else {
			let e = t * n;
			s = s.slice(e, e + n);
		}
		return s;
	}
	randomSelect(e) {
		return t = e, Mo(Eo.random, t);
		var t;
	}
	static getSampler(e) {
		if (e.do_sample) return new b_(e);
		if (e.num_beams > 1) return new x_(e);
		if (e.num_return_sequences > 1) throw Error(`num_return_sequences has to be 1 when doing greedy search, but is ${e.num_return_sequences}.`);
		return new y_(e);
	}
}, y_ = class extends w_ {
	async sample(e) {
		const t = Zo(e.data)[1];
		return [[BigInt(t), 0]];
	}
}, b_ = class extends w_ {
	async sample(e) {
		let t = e.dims.at(-1);
		this.generation_config.top_k > 0 && (t = Math.min(this.generation_config.top_k, t));
		const [n, s] = await Vi(e, t), r = Jo(n.data);
		return Array.from({ length: this.generation_config.num_beams }, () => {
			const e = this.randomSelect(r);
			return [s.data[e], Math.log(r[e])];
		});
	}
}, x_ = class extends w_ {
	async sample(e) {
		let t = e.dims.at(-1);
		this.generation_config.top_k > 0 && (t = Math.min(this.generation_config.top_k, t));
		const [n, s] = await Vi(e, t), r = Jo(n.data);
		return Array.from({ length: this.generation_config.num_beams }, (e, t) => [s.data[t], Math.log(r[t])]);
	}
}, v_ = class {
	constructor(e) {
		if (e) for (const t in e) {
			if (t in this) throw new TypeError(`Key "${t}" conflicts with an existing property on DynamicCache`);
			const n = e[t];
			if (!(n instanceof Ri)) throw new TypeError(`Expected a Tensor for key "${t}", got ${typeof n}`);
			this[t] = n;
		}
	}
	get_seq_length() {
		const e = this;
		if (0 === Object.keys(e).length) return 0;
		for (const t in e) if (t.startsWith("past_key_values.")) return e[t].dims.at(-2);
		throw new Error("Unable to determine sequence length from the cache.");
	}
	update(e) {
		for (const t in e) {
			const n = this[t], s = e[t];
			n && n !== s && "gpu-buffer" === n.location && n.dispose(), this[t] = s;
		}
	}
	async dispose() {
		const e = [];
		for (const t of Object.values(this)) "gpu-buffer" === t.location && e.push(t.dispose());
		await Promise.all(e);
	}
}, M_ = 0, k_ = 1, E_ = 2, A_ = 3, C_ = 4, T_ = 5, S_ = 6, F_ = 7, I_ = 8, P_ = 9, L_ = 10, O_ = 11, z_ = 12, N_ = 13, B_ = 14, $_ = 15, D_ = 16, R_ = {
	[C_]: {
		sessions: (e, t) => ({ model: t.model_file_name ?? "model" }),
		cache_sessions: { model: !0 },
		optional_configs: { generation_config: "generation_config.json" }
	},
	[T_]: { sessions: (e, t) => ({ model: t.model_file_name ?? "model" }) },
	[E_]: {
		sessions: () => ({
			model: "encoder_model",
			decoder_model_merged: "decoder_model_merged"
		}),
		cache_sessions: { decoder_model_merged: !0 },
		optional_configs: { generation_config: "generation_config.json" }
	},
	[A_]: {
		sessions: () => ({
			model: "encoder_model",
			decoder_model_merged: "decoder_model_merged"
		}),
		cache_sessions: { decoder_model_merged: !0 },
		optional_configs: { generation_config: "generation_config.json" }
	},
	[I_]: {
		sessions: () => ({
			model: "text_encoder",
			decoder_model_merged: "decoder_model_merged",
			encodec_decode: "encodec_decode"
		}),
		cache_sessions: { decoder_model_merged: !0 },
		optional_configs: { generation_config: "generation_config.json" }
	},
	[k_]: {
		sessions: () => ({
			model: "encoder_model",
			decoder_model_merged: "decoder_model_merged"
		}),
		cache_sessions: { decoder_model_merged: !0 }
	},
	[S_]: { sessions: () => ({
		model: "vision_encoder",
		prompt_encoder_mask_decoder: "prompt_encoder_mask_decoder"
	}) },
	[F_]: {
		text_only_sessions: {
			embed_tokens: "embed_tokens",
			decoder_model_merged: "decoder_model_merged"
		},
		sessions: (e, t, n) => {
			const s = { ...R_[F_].text_only_sessions };
			return n || (s.vision_encoder = "vision_encoder"), e.is_encoder_decoder && (s.model = "encoder_model"), s;
		},
		cache_sessions: { decoder_model_merged: !0 },
		optional_configs: { generation_config: "generation_config.json" }
	},
	[O_]: {
		text_only_sessions: {
			embed_tokens: "embed_tokens",
			decoder_model_merged: "decoder_model_merged"
		},
		sessions: (e, t, n) => {
			const s = { ...R_[O_].text_only_sessions };
			return n || (s.audio_encoder = "audio_encoder"), s;
		},
		cache_sessions: { decoder_model_merged: !0 },
		optional_configs: { generation_config: "generation_config.json" }
	},
	[N_]: {
		text_only_sessions: {
			embed_tokens: "embed_tokens",
			decoder_model_merged: "decoder_model_merged"
		},
		sessions: (e, t, n) => {
			const s = { ...R_[N_].text_only_sessions };
			return n || (s.audio_encoder = "audio_encoder", s.vision_encoder = "vision_encoder"), s;
		},
		optional_configs: { generation_config: "generation_config.json" }
	},
	[L_]: {
		sessions: () => ({
			prepare_inputs_embeds: "prepare_inputs_embeds",
			model: "model",
			vision_encoder: "vision_encoder"
		}),
		cache_sessions: { model: !0 },
		optional_configs: { generation_config: "generation_config.json" }
	},
	[P_]: {
		sessions: () => ({
			prepare_inputs_embeds: "prepare_inputs_embeds",
			model: "language_model",
			lm_head: "lm_head",
			gen_head: "gen_head",
			gen_img_embeds: "gen_img_embeds",
			image_decode: "image_decode"
		}),
		cache_sessions: { model: !0 },
		optional_configs: { generation_config: "generation_config.json" }
	},
	[z_]: { sessions: () => ({
		encoder_model: "encoder_model",
		decoder_model: "decoder_model"
	}) },
	[B_]: { sessions: () => ({
		text_encoder: "text_encoder",
		latent_denoiser: "latent_denoiser",
		voice_decoder: "voice_decoder"
	}) },
	[$_]: {
		sessions: () => ({
			embed_tokens: "embed_tokens",
			speech_encoder: "speech_encoder",
			model: "language_model",
			conditional_decoder: "conditional_decoder"
		}),
		cache_sessions: { model: !0 },
		optional_configs: { generation_config: "generation_config.json" }
	},
	[D_]: {
		text_only_sessions: {
			embed_tokens: "embed_tokens",
			decoder_model_merged: "decoder_model_merged"
		},
		sessions: (e, t, n) => {
			const s = { ...R_[D_].text_only_sessions };
			return n || (s.audio_encoder = "audio_encoder"), s;
		},
		cache_sessions: {
			decoder_model_merged: !0,
			audio_encoder: !0
		},
		optional_configs: { generation_config: "generation_config.json" }
	},
	default: { sessions: (e, t) => ({ model: t.model_file_name ?? "model" }) }
};
function G_(e, { warn: t = !0 } = {}) {
	const n = e.architectures || [];
	for (const s of n) {
		const e = X_.get(s);
		if (void 0 !== e) return e;
	}
	if (e.model_type) {
		const t = X_.get(e.model_type);
		if (void 0 !== t) return t;
		for (const n of Object.values(j_)) if (n.has(e.model_type)) {
			const t = X_.get(n.get(e.model_type));
			if (void 0 !== t) return t;
		}
	}
	if (t) {
		const t = n.length > 0 ? n.join(", ") : "(none)";
		Os.warn(`[resolve_model_type] Architecture(s) not found in MODEL_TYPE_MAPPING: [${t}] for model type '${e.model_type}'. Falling back to EncoderOnly (single model.onnx file). If you encounter issues, please report at: ${pc}`);
	}
	return M_;
}
function U_(e, { config: t = null, cache_dir: n = null, local_files_only: s = !1, revision: r = "main" } = {}) {
	return null !== t ? $h.from_pretrained(e, {
		config: t,
		cache_dir: n,
		local_files_only: s,
		revision: r
	}) : Do(JSON.stringify([
		e,
		n,
		s,
		r
	]), () => $h.from_pretrained(e, {
		config: t,
		cache_dir: n,
		local_files_only: s,
		revision: r
	}));
}
async function V_(e, { config: t = null, dtype: n = null, device: s = null, model_file_name: r = null } = {}) {
	t = await U_(e, { config: t });
	const a = ["config.json"], o = t["transformers.js_config"] ?? {}, i = o.use_external_data_format, l = "onnx", c = s ?? o.device;
	let u = n ?? o.dtype;
	const d = G_(t), h = (e, t = null) => {
		const n = `${t = t ?? e}${Bi[$i(u, e, Pi(c, e))] ?? ""}.onnx`, s = `${l}/${n}`;
		a.push(s);
		const r = Dh(i, n, e);
		for (const o of Rh(n, r)) {
			const e = `${l}/${o}`;
			a.push(e);
		}
	}, { sessions: _, optional_configs: p } = function(e, t, n = {}) {
		const s = R_[e] ?? R_.default;
		return {
			sessions: s.sessions(t, n, n.textOnly ?? !1),
			cache_sessions: s.cache_sessions,
			optional_configs: s.optional_configs
		};
	}(d, t, { model_file_name: r });
	for (const [f, m] of Object.entries(_)) h(f, m);
	if (p) for (const f of Object.values(p)) a.push(f);
	return a;
}
var j_ = null;
function q_(e) {
	if (e instanceof Ri) return e;
	if (0 === e.length) throw Error("items must be non-empty");
	if (Array.isArray(e[0])) {
		if (e.some((t) => t.length !== e[0].length)) throw Error("Unable to create tensor, you should probably activate truncation and/or padding with 'padding=True' and/or 'truncation=True' to have batched tensors with the same length.");
		return new Ri("int64", BigInt64Array.from(e.flat().map((e) => BigInt(e))), [e.length, e[0].length]);
	}
	return new Ri("int64", BigInt64Array.from(e.map((e) => BigInt(e))), [1, e.length]);
}
function W_(e) {
	return new Ri("bool", [e], [1]);
}
var H_ = {
	[C_]: {
		can_generate: !0,
		forward: ap,
		prepare_inputs: lp
	},
	[T_]: {
		can_generate: !1,
		forward: ap,
		prepare_inputs: lp
	},
	[E_]: {
		can_generate: !0,
		forward: Z_,
		prepare_inputs: cp
	},
	[A_]: {
		can_generate: !0,
		forward: Z_,
		prepare_inputs: cp
	},
	[I_]: {
		can_generate: !0,
		forward: Z_
	},
	[k_]: {
		can_generate: !1,
		forward: Z_
	},
	[F_]: {
		can_generate: !0,
		forward: async function(e, t) {
			return await op(e, {
				...t,
				modality_input_names: ["pixel_values"],
				modality_output_name: "image_features",
				encode_function: e.encode_image.bind(e),
				merge_function: e._merge_input_ids_with_image_features.bind(e)
			});
		},
		prepare_inputs: up
	},
	[O_]: {
		can_generate: !0,
		forward: async function(e, t) {
			return await op(e, {
				...t,
				modality_input_names: ["audio_values", "input_features"],
				modality_output_name: "audio_features",
				encode_function: e.encode_audio.bind(e),
				merge_function: e._merge_input_ids_with_audio_features.bind(e)
			});
		},
		prepare_inputs: up
	},
	[N_]: {
		can_generate: !0,
		prepare_inputs: up
	},
	[L_]: {
		can_generate: !0,
		prepare_inputs: up
	},
	[P_]: { can_generate: !0 },
	[z_]: {
		can_generate: !1,
		forward: async function(e, t) {
			const n = await e.encode(t);
			return await e.decode(n);
		}
	},
	[$_]: {
		can_generate: !0,
		forward: ep
	},
	[D_]: {
		can_generate: !0,
		prepare_inputs: lp
	},
	default: {
		can_generate: !1,
		forward: ep
	}
};
function Q_(e, t) {
	let n = X_.get(e), s = !1;
	const r = t?.architectures?.[0];
	if (r && r !== e && e?.endsWith("ForCausalLM") && r.endsWith("ForConditionalGeneration")) {
		const e = X_.get(r);
		void 0 !== e && (n = e, s = !0);
	}
	return {
		typeConfig: {
			...H_[n] ?? H_.default,
			...R_[n] ?? R_.default
		},
		textOnly: s,
		modelType: n
	};
}
var X_ = /* @__PURE__ */ new Map(), J_ = /* @__PURE__ */ new Map(), Y_ = /* @__PURE__ */ new Map(), K_ = class extends Ms {
	main_input_name = "input_ids";
	forward_params = ["input_ids", "attention_mask"];
	_return_dict_in_generate_keys = null;
	constructor(e, t, n) {
		super(), this.config = e, this.sessions = t, this.configs = n;
		const { typeConfig: s } = Q_(Y_.get(this.constructor), e);
		this.can_generate = s.can_generate, this._forward = s.forward, this._prepare_inputs_for_generation = s.prepare_inputs, this.can_generate && this.forward_params.push("past_key_values"), this.custom_config = this.config["transformers.js_config"] ?? {};
	}
	async dispose() {
		const e = [];
		for (const t of Object.values(this.sessions)) e.push(t.release?.());
		return await Promise.all(e);
	}
	static async from_pretrained(e, { progress_callback: t = null, config: n = null, cache_dir: s = null, local_files_only: r = !1, revision: a = "main", model_file_name: o = null, subfolder: i = "onnx", device: l = null, dtype: c = null, use_external_data_format: u = null, session_options: d = {} } = {}) {
		const h = {
			progress_callback: t,
			config: n,
			cache_dir: s,
			local_files_only: r,
			revision: a,
			model_file_name: o,
			subfolder: i,
			device: l,
			dtype: c,
			use_external_data_format: u,
			session_options: d
		}, _ = Y_.get(this);
		n = h.config = await $h.from_pretrained(e, h);
		const { typeConfig: p, textOnly: f, modelType: m } = Q_(_, n);
		if (void 0 === m) {
			const e = _ ?? n?.model_type;
			"custom" !== e && Os.warn(`Model type for '${e}' not found, assuming encoder-only architecture. Please report this at ${pc}.`);
		}
		if (t && !(t instanceof Es)) {
			const s = {};
			try {
				const t = await V_(e, {
					config: n,
					dtype: c,
					device: l,
					model_file_name: o
				});
				(await Promise.all(t.map((t) => Ro(e, t, h)))).forEach((e, n) => {
					if (e.exists) {
						const r = "config.json" === t[n];
						s[t[n]] = {
							loaded: r ? e.size ?? 0 : 0,
							total: e.size ?? 0
						};
					}
				});
			} catch (w) {
				Os.warn(`Unable to fetch model file metadata for total progress tracking: ${w}`);
			}
			Object.keys(s).length > 0 && (h.progress_callback = new Es(t, s));
		}
		const g = [Uh(e, p.sessions(n, h, f), h, p.cache_sessions)];
		p.optional_configs && g.push(async function(e, t, n) {
			return Object.fromEntries(await Promise.all(Object.keys(t).map(async (s) => [s, await Xo(e, t[s], !1, n)])));
		}(e, p.optional_configs, h));
		return new this(n, ...await Promise.all(g));
	}
	async _call(e) {
		return await this.forward(e);
	}
	async forward(e) {
		return await this._forward(this, e);
	}
	get generation_config() {
		return this.configs?.generation_config ?? null;
	}
	_get_logits_processor(e, t, n = null) {
		const s = new e_();
		if (null !== e.repetition_penalty && 1 !== e.repetition_penalty && s.push(new i_(e.repetition_penalty)), null !== e.no_repeat_ngram_size && e.no_repeat_ngram_size > 0 && s.push(new o_(e.no_repeat_ngram_size)), null !== e.bad_words_ids && s.push(new u_(e.bad_words_ids, e.eos_token_id)), null !== e.min_length && null !== e.eos_token_id && e.min_length > 0 && s.push(new l_(e.min_length, e.eos_token_id)), null !== e.min_new_tokens && null !== e.eos_token_id && e.min_new_tokens > 0 && s.push(new c_(t, e.min_new_tokens, e.eos_token_id)), null !== e.forced_bos_token_id && s.push(new t_(e.forced_bos_token_id)), null !== e.forced_eos_token_id && s.push(new n_(e.max_length, e.forced_eos_token_id)), null !== e.suppress_tokens && s.push(new s_(e.suppress_tokens)), null !== e.begin_suppress_tokens) {
			const n = t > 1 || null === e.forced_bos_token_id ? t : t + 1;
			s.push(new r_(e.begin_suppress_tokens, n));
		}
		return null !== e.guidance_scale && e.guidance_scale > 1 && s.push(new d_(e.guidance_scale)), 0 === e.temperature && e.do_sample && (Os.warn("`do_sample` changed to false because `temperature: 0` implies greedy sampling (always selecting the most likely token), which is incompatible with `do_sample: true`."), e.do_sample = !1), e.do_sample && null !== e.temperature && 1 !== e.temperature && s.push(new h_(e.temperature)), null !== n && s.extend(n), s;
	}
	_prepare_generation_config(e, t, n = __) {
		const s = { ...this.config };
		for (const a of [
			"decoder",
			"generator",
			"text_config"
		]) a in s && Object.assign(s, s[a]);
		const r = new n(s);
		return Object.assign(r, this.generation_config ?? {}), e && Object.assign(r, e), t && Object.assign(r, Is(t, Object.getOwnPropertyNames(r))), r;
	}
	_get_stopping_criteria(e, t = null) {
		const n = new f_();
		return null !== e.max_length && n.push(new m_(e.max_length, this.config.max_position_embeddings ?? null)), null !== e.eos_token_id && n.push(new g_(e.eos_token_id)), t && n.extend(t), n;
	}
	_validate_model_class() {
		if (!this.can_generate) {
			const e = [
				j_.MODEL_FOR_CAUSAL_LM_MAPPING_NAMES,
				j_.MODEL_FOR_VISION_2_SEQ_MAPPING_NAMES,
				j_.MODEL_FOR_SEQ_TO_SEQ_CAUSAL_LM_MAPPING_NAMES,
				j_.MODEL_FOR_SPEECH_SEQ_2_SEQ_MAPPING_NAMES
			].filter(Boolean), t = Y_.get(this.constructor), n = /* @__PURE__ */ new Set(), s = this.config.model_type;
			for (const a of e) {
				const e = a?.get(s);
				e && n.add(e);
			}
			let r = `The current model class (${t}) is not compatible with \`.generate()\`, as it doesn't have a language model head.`;
			throw n.size > 0 && (r += ` Please use the following class instead: ${[...n].join(", ")}`), Error(r);
		}
	}
	prepare_inputs_for_generation(...e) {
		if (!this._prepare_inputs_for_generation) throw new Error("prepare_inputs_for_generation is not implemented for this model.");
		return this._prepare_inputs_for_generation(this, ...e);
	}
	_update_model_kwargs_for_generation({ generated_input_ids: e, outputs: t, model_inputs: n, is_encoder_decoder: s }) {
		return n.past_key_values = tp(t, n.past_key_values), n.input_ids = new Ri("int64", e.flat(), [e.length, 1]), s ? "decoder_attention_mask" in n && (n.decoder_attention_mask = Xi([n.decoder_attention_mask, sl([n.decoder_attention_mask.dims[0], 1])], 1)) : n.attention_mask = Xi([n.attention_mask, sl([n.attention_mask.dims[0], 1])], 1), n.position_ids = null, n;
	}
	_prepare_model_inputs({ inputs: e, bos_token_id: t, model_kwargs: n }) {
		const s = Is(n, this.forward_params), r = this.main_input_name;
		if (r in s) {
			if (e) throw new Error("`inputs`: {inputs}` were passed alongside {input_name} which is not allowed. Make sure to either pass {inputs} or {input_name}=...");
		} else s[r] = e;
		return {
			inputs_tensor: s[r],
			model_inputs: s,
			model_input_name: r
		};
	}
	async _prepare_encoder_decoder_kwargs_for_generation({ inputs_tensor: e, model_inputs: t, model_input_name: n, generation_config: s }) {
		if (this.sessions.model.inputNames.includes("inputs_embeds") && !t.inputs_embeds && "_prepare_inputs_embeds" in this) {
			const { input_ids: e, pixel_values: n, attention_mask: s, ...r } = t;
			t = {
				...r,
				...Is(await this._prepare_inputs_embeds(t), ["inputs_embeds", "attention_mask"])
			};
		}
		let { last_hidden_state: r } = await ep(this, t);
		if (null !== s.guidance_scale && s.guidance_scale > 1) r = Xi([r, nl(r, 0)], 0), "attention_mask" in t && (t.attention_mask = Xi([t.attention_mask, ol(t.attention_mask)], 0));
		else if (t.decoder_input_ids) {
			const e = q_(t.decoder_input_ids).dims[0];
			if (e !== r.dims[0]) {
				if (1 !== r.dims[0]) throw new Error(`The encoder outputs have a different batch size (${r.dims[0]}) than the decoder inputs (${e}).`);
				r = Xi(Array.from({ length: e }, () => r), 0);
			}
		}
		return t.encoder_outputs = r, t;
	}
	_prepare_decoder_input_ids_for_generation({ batch_size: e, model_input_name: t, model_kwargs: n, decoder_start_token_id: s, bos_token_id: r, generation_config: a }) {
		let { decoder_input_ids: o, ...i } = n;
		if (!(o instanceof Ri)) {
			if (o) Array.isArray(o[0]) || (o = Array.from({ length: e }, () => o));
			else if (s ??= r, "musicgen" === this.config.model_type) o = Array.from({ length: e * this.config.decoder.num_codebooks }, () => [s]);
			else if (Array.isArray(s)) {
				if (s.length !== e) throw new Error(`\`decoder_start_token_id\` expcted to have length ${e} but got ${s.length}`);
				o = s;
			} else o = Array.from({ length: e }, () => [s]);
			o = q_(o);
		}
		return i.decoder_attention_mask = rl(o), {
			input_ids: o,
			model_inputs: i
		};
	}
	async generate({ inputs: e = null, generation_config: t = null, logits_processor: n = null, stopping_criteria: s = null, streamer: r = null, ...a }) {
		this._validate_model_class(), t = this._prepare_generation_config(t, a);
		let { inputs_tensor: o, model_inputs: i, model_input_name: l } = this._prepare_model_inputs({
			inputs: e,
			model_kwargs: a
		});
		const c = this.config.is_encoder_decoder;
		let u;
		c && ("encoder_outputs" in i || (i = await this._prepare_encoder_decoder_kwargs_for_generation({
			inputs_tensor: o,
			model_inputs: i,
			model_input_name: l,
			generation_config: t
		}))), c ? {input_ids: u, model_inputs: i} = this._prepare_decoder_input_ids_for_generation({
			batch_size: i[l].dims.at(0),
			model_input_name: l,
			model_kwargs: i,
			decoder_start_token_id: t.decoder_start_token_id,
			bos_token_id: t.bos_token_id,
			generation_config: t
		}) : u = i[l];
		let d = u.dims.at(-1);
		null !== t.max_new_tokens && (t.max_length = d + t.max_new_tokens);
		const h = this._get_logits_processor(t, d, n), _ = this._get_stopping_criteria(t, s), p = i[l].dims.at(0), f = w_.getSampler(t), m = new Array(p).fill(0), g = u.tolist();
		let w;
		r && r.put(g);
		let y = {}, b = {};
		for (;;) {
			if (i = this.prepare_inputs_for_generation(g, i, t), w = await this.forward(i), t.return_dict_in_generate) if (t.output_attentions) {
				const e = np(w);
				for (const t in e) t in y || (y[t] = []), y[t].push(e[t]);
			} else this._return_dict_in_generate_keys && Object.assign(b, Is(w, this._return_dict_in_generate_keys));
			const e = h(g, w.logits.slice(null, -1, null).to("float32")), n = [];
			for (let t = 0; t < e.dims.at(0); ++t) {
				const s = e[t], r = await f(s);
				for (const [e, a] of r) {
					const s = BigInt(e);
					m[t] += a, g[t].push(s), n.push([s]);
					break;
				}
			}
			if (r && r.put(n), _(g).every((e) => e)) break;
			i = this._update_model_kwargs_for_generation({
				generated_input_ids: n,
				outputs: w,
				model_inputs: i,
				is_encoder_decoder: c
			});
		}
		r && r.end();
		const x = new Ri("int64", g.flat(), [g.length, g[0].length]), v = tp(w, i.past_key_values), M = new Set(Object.values(v));
		for (const k of Object.values(w)) "gpu-buffer" !== k.location || M.has(k) || k.dispose();
		return "past_key_values" in a || t.return_dict_in_generate || await v.dispose(), t.return_dict_in_generate ? {
			sequences: x,
			past_key_values: v,
			...y,
			...b
		} : x;
	}
	async _encode_input(e, t, n) {
		if (!Object.hasOwn(this.sessions, e)) throw new Error(`Model does not have a ${e} session.`);
		const s = this.sessions[e];
		return (await jh(s, Is(t, s.inputNames)))[n];
	}
	async encode_image(e) {
		return this._encode_input("vision_encoder", e, "image_features");
	}
	async encode_text(e) {
		return this._encode_input("embed_tokens", e, "inputs_embeds");
	}
	async encode_audio(e) {
		return this._encode_input("audio_encoder", e, "audio_features");
	}
};
async function Z_(e, t) {
	let { encoder_outputs: n, input_ids: s, decoder_input_ids: r, decoder_attention_mask: a, ...o } = t;
	return n || (n = (await ep(e, Is(t, e.sessions.model.inputNames))).last_hidden_state), o.input_ids = r, o.encoder_hidden_states = n, e.sessions.decoder_model_merged.inputNames.includes("encoder_attention_mask") && (o.encoder_attention_mask = t.attention_mask), a && !o.attention_mask && (o.attention_mask = a), await ap(e, o, !0);
}
async function ep(e, t) {
	const n = e.sessions.model, s = Is(t, n.inputNames);
	if (n.inputNames.includes("inputs_embeds") && !s.inputs_embeds) {
		if (!t.input_ids) throw new Error("Both `input_ids` and `inputs_embeds` are missing in the model inputs.");
		s.inputs_embeds = await e.encode_text({ input_ids: t.input_ids });
	}
	if (n.inputNames.includes("token_type_ids") && !s.token_type_ids) {
		if (!s.input_ids) throw new Error("Both `input_ids` and `token_type_ids` are missing in the model inputs.");
		s.token_type_ids = ol(s.input_ids);
	}
	if (n.inputNames.includes("pixel_mask") && !s.pixel_mask) {
		if (!s.pixel_values) throw new Error("Both `pixel_values` and `pixel_mask` are missing in the model inputs.");
		const e = s.pixel_values.dims;
		s.pixel_mask = sl([
			e[0],
			e[2],
			e[3]
		]);
	}
	return await jh(n, s);
}
function tp(e, t) {
	const n = Object.create(null);
	for (const s in e) if (s.startsWith("present")) {
		const r = s.replace("present_ssm", "past_ssm").replace("present_conv", "past_conv").replace("present_recurrent", "past_recurrent").replace("present", "past_key_values");
		s.includes("encoder") && t ? n[r] = t[r] : n[r] = e[s];
	}
	return t ? (t.update(n), t) : new v_(n);
}
function np(e) {
	const t = {};
	for (const n of [
		"cross_attentions",
		"encoder_attentions",
		"decoder_attentions"
	]) for (const s in e) s.startsWith(n) && (n in t || (t[n] = []), t[n].push(e[s]));
	return t;
}
function sp(e, t) {
	return e.map((e) => "number" == typeof e ? e : t[e] ?? 0);
}
function rp(e, t, n) {
	if (n && Object.keys(n).length > 0) return Object.assign(t, n), n;
	const s = e.sessions.decoder_model_merged ?? e.sessions.model, r = (t[e.main_input_name] ?? t.attention_mask)?.dims?.[0] ?? 1, a = Nh(e.config), o = e.config?.normalized_config?.num_heads, i = { batch_size: r };
	"number" == typeof o && (i["batch_size x num_heads"] = r * o);
	const l = Object.create(null);
	for (const c of s.inputMetadata) {
		if (!a.has(c.name)) continue;
		const e = sp(c.shape, i), n = e.reduce((e, t) => e * t, 1), s = Di[c.type], r = new Ri(c.type, new s(n), e);
		t[c.name] = r, l[c.name] = r;
	}
	return n ? (n.update(l), n) : new v_(l);
}
async function ap(e, t, n = !1) {
	const s = e.sessions[n ? "decoder_model_merged" : "model"], { past_key_values: r, ...a } = t;
	return s.inputNames.includes("use_cache_branch") && (a.use_cache_branch = W_(null != r && Object.keys(r).length > 0)), s.inputNames.includes("position_ids") && a.attention_mask && !a.position_ids && (a.position_ids = function(e, t = null, n = 0) {
		const { input_ids: s, inputs_embeds: r, attention_mask: a } = e, { data: o, dims: i } = ip(a, n);
		let l = new Ri("int64", o, i);
		if (t) {
			const e = -(s ?? r).dims.at(1);
			l = l.slice(null, [e, null]);
		}
		return l;
	}(a, r, [
		"paligemma",
		"gemma3_text",
		"gemma3"
	].includes(e.config.model_type) ? 1 : 0)), s.inputNames.includes("num_logits_to_keep") && !a.num_logits_to_keep && (a.num_logits_to_keep = new Ri("int64", [0n], [])), rp(e, a, r), await jh(s, Is(a, s.inputNames));
}
async function op(e, { encode_function: t, merge_function: n, modality_input_names: s, modality_output_name: r, input_ids: a = null, attention_mask: o = null, position_ids: i = null, inputs_embeds: l = null, past_key_values: c = null, generation_config: u = null, logits_processor: d = null, ...h }) {
	if (!l) {
		l = await e.encode_text({
			input_ids: a,
			...h
		});
		const i = Is(h, s);
		if (Object.keys(i).length > 0) {
			if (1 !== a.dims[1]) {
				const e = await t({
					...i,
					...h
				});
				({inputs_embeds: l, attention_mask: o} = n({
					[r]: e,
					inputs_embeds: l,
					input_ids: a,
					attention_mask: o
				}));
			} else if (c && 1 === a.dims[1]) {
				const e = a.dims[1], t = c.get_seq_length();
				o = Xi([sl([a.dims[0], t]), o.slice(null, [o.dims[1] - e, o.dims[1]])], 1);
			}
		}
	}
	if (!i && [
		"qwen2_vl",
		"qwen2_vl_text",
		"qwen2_5_vl",
		"qwen2_5_vl_text",
		"qwen3_vl",
		"qwen3_vl_text",
		"qwen3_vl_moe",
		"qwen3_vl_moe_text",
		"qwen3_5",
		"qwen3_5_text",
		"qwen3_5_moe",
		"qwen3_5_moe_text",
		"glm_ocr",
		"glm_ocr_text"
	].includes(e.config.model_type)) {
		const { image_grid_thw: t, video_grid_thw: n } = h;
		[i] = e.get_rope_index(a, t, n, o);
	}
	return await ap(e, {
		inputs_embeds: l,
		past_key_values: c,
		attention_mask: o,
		position_ids: i,
		generation_config: u,
		logits_processor: d
	}, !0);
}
function ip(e, t = 0) {
	const [n, s] = e.dims, r = e.data, a = new BigInt64Array(r.length);
	for (let o = 0; o < n; ++o) {
		const e = o * s;
		let n = BigInt(t);
		for (let t = 0; t < s; ++t) {
			const s = e + t;
			0n === r[s] ? a[s] = BigInt(1) : (a[s] = n, n += r[s]);
		}
	}
	return {
		data: a,
		dims: e.dims
	};
}
function lp(e, t, n, s) {
	const r = n.past_key_values ? n.past_key_values.get_seq_length() : 0;
	if ((e.sessions.decoder_model_merged ?? e.sessions.model)?.inputNames.includes("num_logits_to_keep") && !n.num_logits_to_keep && (n.num_logits_to_keep = new Ri("int64", [1n], [])), !n.attention_mask) {
		let e;
		for (const t of [
			"input_ids",
			"inputs_embeds",
			"position_ids"
		]) if (n[t]) {
			e = n[t].dims;
			break;
		}
		if (!e) throw new Error("attention_mask is not provided, and unable to infer its shape from model inputs.");
		n.attention_mask = sl([e[0], r + e[1]]);
	}
	if (n.past_key_values) {
		const { input_ids: e, attention_mask: t } = n;
		t && t.dims[1] > e.dims[1] || r < e.dims[1] && (n.input_ids = e.slice(null, [r, null]));
	}
	return n;
}
function cp(e, t, n, s) {
	return n.past_key_values && (t = t.map((e) => [e.at(-1)])), {
		...n,
		decoder_input_ids: q_(t)
	};
}
function up(e, ...t) {
	return e.config.is_encoder_decoder ? cp(e, ...t) : lp(e, ...t);
}
function dp({ modality_token_id: e, inputs_embeds: t, modality_features: n, input_ids: s, attention_mask: r }) {
	const a = s.tolist().map((t) => t.reduce((t, n, s) => (n == e && t.push(s), t), [])), o = a.reduce((e, t) => e + t.length, 0), i = n.dims[0];
	if (o !== i) throw new Error(`Number of tokens and features do not match: tokens: ${o}, features ${i}`);
	let l = 0;
	for (let c = 0; c < a.length; ++c) {
		const e = a[c], s = t[c];
		for (let t = 0; t < e.length; ++t) s[e[t]].data.set(n[l++].data);
	}
	return {
		inputs_embeds: t,
		attention_mask: r
	};
}
function hp({ image_token_id: e, inputs_embeds: t, image_features: n, input_ids: s, attention_mask: r }) {
	return dp({
		modality_token_id: e,
		inputs_embeds: t,
		modality_features: n,
		input_ids: s,
		attention_mask: r
	});
}
function _p({ audio_token_id: e, inputs_embeds: t, audio_features: n, input_ids: s, attention_mask: r }) {
	return dp({
		modality_token_id: e,
		inputs_embeds: t,
		modality_features: n,
		input_ids: s,
		attention_mask: r
	});
}
var pp = {};
Wn(pp, {
	ASTForAudioClassification: () => Ip,
	ASTModel: () => Fp,
	ASTPreTrainedModel: () => Sp,
	AfmoeForCausalLM: () => Ep,
	AfmoeModel: () => kp,
	AfmoePreTrainedModel: () => Mp,
	AlbertForMaskedLM: () => yp,
	AlbertForQuestionAnswering: () => wp,
	AlbertForSequenceClassification: () => gp,
	AlbertModel: () => mp,
	AlbertPreTrainedModel: () => fp,
	ApertusForCausalLM: () => vp,
	ApertusModel: () => xp,
	ApertusPreTrainedModel: () => bp,
	ArceeForCausalLM: () => Tp,
	ArceeModel: () => Cp,
	ArceePreTrainedModel: () => Ap,
	BartForConditionalGeneration: () => Op,
	BartForSequenceClassification: () => zp,
	BartModel: () => Lp,
	BartPretrainedModel: () => Pp,
	BeitForImageClassification: () => $p,
	BeitModel: () => Bp,
	BeitPreTrainedModel: () => Np,
	BertForMaskedLM: () => Gp,
	BertForQuestionAnswering: () => jp,
	BertForSequenceClassification: () => Up,
	BertForTokenClassification: () => Vp,
	BertModel: () => Rp,
	BertPreTrainedModel: () => Dp,
	BlenderbotForConditionalGeneration: () => Hp,
	BlenderbotModel: () => Wp,
	BlenderbotPreTrainedModel: () => qp,
	BlenderbotSmallForConditionalGeneration: () => Jp,
	BlenderbotSmallModel: () => Xp,
	BlenderbotSmallPreTrainedModel: () => Qp,
	BloomForCausalLM: () => Zp,
	BloomModel: () => Kp,
	BloomPreTrainedModel: () => Yp,
	CHMv2ForDepthEstimation: () => hf,
	CHMv2PreTrainedModel: () => df,
	CLIPModel: () => wf,
	CLIPPreTrainedModel: () => gf,
	CLIPSegForImageSegmentation: () => Ef,
	CLIPSegModel: () => kf,
	CLIPSegPreTrainedModel: () => Mf,
	CLIPTextModel: () => yf,
	CLIPTextModelWithProjection: () => bf,
	CLIPVisionModel: () => xf,
	CLIPVisionModelWithProjection: () => vf,
	CamembertForMaskedLM: () => nf,
	CamembertForQuestionAnswering: () => af,
	CamembertForSequenceClassification: () => sf,
	CamembertForTokenClassification: () => rf,
	CamembertModel: () => tf,
	CamembertPreTrainedModel: () => ef,
	ChatterboxModel: () => lf,
	ChatterboxPreTrainedModel: () => of,
	ChineseCLIPModel: () => uf,
	ChineseCLIPPreTrainedModel: () => cf,
	ClapAudioModelWithProjection: () => mf,
	ClapModel: () => pf,
	ClapPreTrainedModel: () => _f,
	ClapTextModelWithProjection: () => ff,
	CodeGenForCausalLM: () => Tf,
	CodeGenModel: () => Cf,
	CodeGenPreTrainedModel: () => Af,
	Cohere2ForCausalLM: () => Of,
	Cohere2Model: () => Lf,
	Cohere2PreTrainedModel: () => Pf,
	CohereAsrForConditionalGeneration: () => Bf,
	CohereAsrModel: () => Nf,
	CohereAsrPreTrainedModel: () => zf,
	CohereForCausalLM: () => If,
	CohereModel: () => Ff,
	CoherePreTrainedModel: () => Sf,
	ConvBertForMaskedLM: () => Rf,
	ConvBertForQuestionAnswering: () => Vf,
	ConvBertForSequenceClassification: () => Gf,
	ConvBertForTokenClassification: () => Uf,
	ConvBertModel: () => Df,
	ConvBertPreTrainedModel: () => $f,
	ConvNextForImageClassification: () => Wf,
	ConvNextModel: () => qf,
	ConvNextPreTrainedModel: () => jf,
	ConvNextV2ForImageClassification: () => Xf,
	ConvNextV2Model: () => Qf,
	ConvNextV2PreTrainedModel: () => Hf,
	DFineForObjectDetection: () => nm,
	DFineModel: () => tm,
	DFinePreTrainedModel: () => em,
	DINOv3ConvNextModel: () => Wm,
	DINOv3ConvNextPreTrainedModel: () => qm,
	DINOv3ViTModel: () => Qm,
	DINOv3ViTPreTrainedModel: () => Hm,
	DPTForDepthEstimation: () => ag,
	DPTModel: () => rg,
	DPTPreTrainedModel: () => sg,
	DacDecoderModel: () => lm,
	DacDecoderOutput: () => rm,
	DacEncoderModel: () => im,
	DacEncoderOutput: () => sm,
	DacModel: () => om,
	DacPreTrainedModel: () => am,
	DebertaForMaskedLM: () => dm,
	DebertaForQuestionAnswering: () => pm,
	DebertaForSequenceClassification: () => hm,
	DebertaForTokenClassification: () => _m,
	DebertaModel: () => um,
	DebertaPreTrainedModel: () => cm,
	DebertaV2ForMaskedLM: () => bm,
	DebertaV2ForQuestionAnswering: () => Mm,
	DebertaV2ForSequenceClassification: () => xm,
	DebertaV2ForTokenClassification: () => vm,
	DebertaV2Model: () => ym,
	DebertaV2PreTrainedModel: () => wm,
	DecisionTransformerModel: () => Em,
	DecisionTransformerPreTrainedModel: () => km,
	DeepseekV3ForCausalLM: () => gm,
	DeepseekV3Model: () => mm,
	DeepseekV3PreTrainedModel: () => fm,
	DeiTForImageClassification: () => Tm,
	DeiTModel: () => Cm,
	DeiTPreTrainedModel: () => Am,
	DepthAnythingForDepthEstimation: () => Fm,
	DepthAnythingPreTrainedModel: () => Sm,
	DepthProForDepthEstimation: () => Pm,
	DepthProPreTrainedModel: () => Im,
	DetrForObjectDetection: () => zm,
	DetrForSegmentation: () => Nm,
	DetrModel: () => Om,
	DetrObjectDetectionOutput: () => Bm,
	DetrPreTrainedModel: () => Lm,
	DetrSegmentationOutput: () => $m,
	Dinov2ForImageClassification: () => Gm,
	Dinov2Model: () => Rm,
	Dinov2PreTrainedModel: () => Dm,
	Dinov2WithRegistersForImageClassification: () => jm,
	Dinov2WithRegistersModel: () => Vm,
	Dinov2WithRegistersPreTrainedModel: () => Um,
	DistilBertForMaskedLM: () => eg,
	DistilBertForQuestionAnswering: () => Zm,
	DistilBertForSequenceClassification: () => Ym,
	DistilBertForTokenClassification: () => Km,
	DistilBertModel: () => Jm,
	DistilBertPreTrainedModel: () => Xm,
	DonutSwinModel: () => ng,
	DonutSwinPreTrainedModel: () => tg,
	EdgeTamModel: () => NM,
	EfficientNetForImageClassification: () => lg,
	EfficientNetModel: () => ig,
	EfficientNetPreTrainedModel: () => og,
	ElectraForMaskedLM: () => dg,
	ElectraForQuestionAnswering: () => pg,
	ElectraForSequenceClassification: () => hg,
	ElectraForTokenClassification: () => _g,
	ElectraModel: () => ug,
	ElectraPreTrainedModel: () => cg,
	Ernie4_5ForCausalLM: () => gg,
	Ernie4_5Model: () => mg,
	Ernie4_5PretrainedModel: () => fg,
	EsmForMaskedLM: () => bg,
	EsmForSequenceClassification: () => xg,
	EsmForTokenClassification: () => vg,
	EsmModel: () => yg,
	EsmPreTrainedModel: () => wg,
	EuroBertForMaskedLM: () => Eg,
	EuroBertForSequenceClassification: () => Ag,
	EuroBertForTokenClassification: () => Cg,
	EuroBertModel: () => kg,
	EuroBertPreTrainedModel: () => Mg,
	ExaoneForCausalLM: () => Fg,
	ExaoneModel: () => Sg,
	ExaonePreTrainedModel: () => Tg,
	FalconForCausalLM: () => Lg,
	FalconH1ForCausalLM: () => Ng,
	FalconH1Model: () => zg,
	FalconH1PreTrainedModel: () => Og,
	FalconModel: () => Pg,
	FalconPreTrainedModel: () => Ig,
	FastViTForImageClassification: () => Dg,
	FastViTModel: () => $g,
	FastViTPreTrainedModel: () => Bg,
	Florence2ForConditionalGeneration: () => Gg,
	Florence2PreTrainedModel: () => Rg,
	GLPNForDepthEstimation: () => xw,
	GLPNModel: () => bw,
	GLPNPreTrainedModel: () => yw,
	GPT2LMHeadModel: () => Nw,
	GPT2Model: () => zw,
	GPT2PreTrainedModel: () => Ow,
	GPTBigCodeForCausalLM: () => kw,
	GPTBigCodeModel: () => Mw,
	GPTBigCodePreTrainedModel: () => vw,
	GPTJForCausalLM: () => Dw,
	GPTJModel: () => $w,
	GPTJPreTrainedModel: () => Bw,
	GPTNeoForCausalLM: () => Cw,
	GPTNeoModel: () => Aw,
	GPTNeoPreTrainedModel: () => Ew,
	GPTNeoXForCausalLM: () => Fw,
	GPTNeoXModel: () => Sw,
	GPTNeoXPreTrainedModel: () => Tw,
	Gemma2ForCausalLM: () => Hg,
	Gemma2Model: () => Wg,
	Gemma2PreTrainedModel: () => qg,
	Gemma3ForCausalLM: () => tw,
	Gemma3ForConditionalGeneration: () => ew,
	Gemma3Model: () => Zg,
	Gemma3PreTrainedModel: () => Kg,
	Gemma3nForCausalLM: () => rw,
	Gemma3nForConditionalGeneration: () => sw,
	Gemma3nPreTrainedModel: () => nw,
	Gemma4ForCausalLM: () => ow,
	Gemma4ForConditionalGeneration: () => aw,
	GemmaForCausalLM: () => jg,
	GemmaModel: () => Vg,
	GemmaPreTrainedModel: () => Ug,
	GlmForCausalLM: () => cw,
	GlmModel: () => lw,
	GlmMoeDsaForCausalLM: () => hw,
	GlmMoeDsaModel: () => dw,
	GlmMoeDsaPreTrainedModel: () => uw,
	GlmOcrForConditionalGeneration: () => ww,
	GlmPreTrainedModel: () => iw,
	GptOssForCausalLM: () => Lw,
	GptOssModel: () => Pw,
	GptOssPreTrainedModel: () => Iw,
	GraniteForCausalLM: () => Uw,
	GraniteModel: () => Gw,
	GraniteMoeHybridForCausalLM: () => qw,
	GraniteMoeHybridModel: () => jw,
	GraniteMoeHybridPreTrainedModel: () => Vw,
	GranitePreTrainedModel: () => Rw,
	GraniteSpeechForConditionalGeneration: () => Qw,
	GroundingDinoForObjectDetection: () => Jw,
	GroundingDinoPreTrainedModel: () => Xw,
	GroupViTModel: () => Kw,
	GroupViTPreTrainedModel: () => Yw,
	HeliumForCausalLM: () => ty,
	HeliumModel: () => ey,
	HeliumPreTrainedModel: () => Zw,
	HieraForImageClassification: () => ry,
	HieraModel: () => sy,
	HieraPreTrainedModel: () => ny,
	HubertForCTC: () => hy,
	HubertForSequenceClassification: () => _y,
	HubertModel: () => dy,
	HubertPreTrainedModel: () => uy,
	HunYuanDenseV1ForCausalLM: () => my,
	HunYuanDenseV1Model: () => fy,
	HunYuanDenseV1PreTrainedModel: () => py,
	IJepaForImageClassification: () => by,
	IJepaModel: () => yy,
	IJepaPreTrainedModel: () => wy,
	Idefics3ForConditionalGeneration: () => gy,
	JAISLMHeadModel: () => My,
	JAISModel: () => vy,
	JAISPreTrainedModel: () => xy,
	JinaCLIPModel: () => Ey,
	JinaCLIPPreTrainedModel: () => ky,
	JinaCLIPTextModel: () => Ay,
	JinaCLIPVisionModel: () => Cy,
	Lfm2ForCausalLM: () => Fy,
	Lfm2Model: () => Sy,
	Lfm2MoeForCausalLM: () => Oy,
	Lfm2MoeModel: () => Ly,
	Lfm2MoePreTrainedModel: () => Py,
	Lfm2PreTrainedModel: () => Ty,
	Lfm2VlForConditionalGeneration: () => zy,
	LightOnOcrForConditionalGeneration: () => Iy,
	LiteWhisperForConditionalGeneration: () => RE,
	Llama4ForCausalLM: () => Ry,
	Llama4PreTrainedModel: () => Dy,
	LlamaForCausalLM: () => $y,
	LlamaModel: () => By,
	LlamaPreTrainedModel: () => Ny,
	LlavaForConditionalGeneration: () => Xg,
	LlavaOnevisionForConditionalGeneration: () => Xg,
	LlavaPreTrainedModel: () => Qg,
	LlavaQwen2ForCausalLM: () => Yg,
	LongT5ForConditionalGeneration: () => Vy,
	LongT5Model: () => Uy,
	LongT5PreTrainedModel: () => Gy,
	M2M100ForConditionalGeneration: () => Wy,
	M2M100Model: () => qy,
	M2M100PreTrainedModel: () => jy,
	MBartForCausalLM: () => sb,
	MBartForConditionalGeneration: () => tb,
	MBartForSequenceClassification: () => nb,
	MBartModel: () => eb,
	MBartPreTrainedModel: () => Zy,
	MPNetForMaskedLM: () => hx,
	MPNetForQuestionAnswering: () => fx,
	MPNetForSequenceClassification: () => _x,
	MPNetForTokenClassification: () => px,
	MPNetModel: () => dx,
	MPNetPreTrainedModel: () => ux,
	MT5ForConditionalGeneration: () => xx,
	MT5Model: () => bx,
	MT5PreTrainedModel: () => yx,
	MarianMTModel: () => Xy,
	MarianModel: () => Qy,
	MarianPreTrainedModel: () => Hy,
	MaskFormerForInstanceSegmentation: () => Ky,
	MaskFormerModel: () => Yy,
	MaskFormerPreTrainedModel: () => Jy,
	Metric3DForDepthEstimation: () => ab,
	Metric3DPreTrainedModel: () => rb,
	Metric3Dv2ForDepthEstimation: () => ib,
	Metric3Dv2PreTrainedModel: () => ob,
	MgpstrForSceneTextRecognition: () => ub,
	MgpstrModelOutput: () => lb,
	MgpstrPreTrainedModel: () => cb,
	MimiDecoderModel: () => mb,
	MimiDecoderOutput: () => hb,
	MimiEncoderModel: () => fb,
	MimiEncoderOutput: () => db,
	MimiModel: () => pb,
	MimiPreTrainedModel: () => _b,
	Mistral4ForCausalLM: () => vb,
	Mistral4Model: () => xb,
	Mistral4PreTrainedModel: () => bb,
	MistralForCausalLM: () => yb,
	MistralModel: () => wb,
	MistralPreTrainedModel: () => gb,
	MobileBertForMaskedLM: () => Eb,
	MobileBertForQuestionAnswering: () => Cb,
	MobileBertForSequenceClassification: () => Ab,
	MobileBertModel: () => kb,
	MobileBertPreTrainedModel: () => Mb,
	MobileLLMForCausalLM: () => Fb,
	MobileLLMModel: () => Sb,
	MobileLLMPreTrainedModel: () => Tb,
	MobileNetV1ForImageClassification: () => Lb,
	MobileNetV1ForSemanticSegmentation: () => Ob,
	MobileNetV1Model: () => Pb,
	MobileNetV1PreTrainedModel: () => Ib,
	MobileNetV2ForImageClassification: () => Bb,
	MobileNetV2ForSemanticSegmentation: () => $b,
	MobileNetV2Model: () => Nb,
	MobileNetV2PreTrainedModel: () => zb,
	MobileNetV3ForImageClassification: () => Gb,
	MobileNetV3ForSemanticSegmentation: () => Ub,
	MobileNetV3Model: () => Rb,
	MobileNetV3PreTrainedModel: () => Db,
	MobileNetV4ForImageClassification: () => qb,
	MobileNetV4ForSemanticSegmentation: () => Wb,
	MobileNetV4Model: () => jb,
	MobileNetV4PreTrainedModel: () => Vb,
	MobileViTForImageClassification: () => Xb,
	MobileViTModel: () => Qb,
	MobileViTPreTrainedModel: () => Hb,
	MobileViTV2ForImageClassification: () => Kb,
	MobileViTV2Model: () => Yb,
	MobileViTV2PreTrainedModel: () => Jb,
	ModernBertDecoderForCausalLM: () => ox,
	ModernBertDecoderModel: () => ax,
	ModernBertDecoderPreTrainedModel: () => rx,
	ModernBertForMaskedLM: () => tx,
	ModernBertForSequenceClassification: () => nx,
	ModernBertForTokenClassification: () => sx,
	ModernBertModel: () => ex,
	ModernBertPreTrainedModel: () => Zb,
	Moondream1ForConditionalGeneration: () => Jg,
	MoonshineForConditionalGeneration: () => cx,
	MoonshineModel: () => lx,
	MoonshinePreTrainedModel: () => ix,
	MptForCausalLM: () => wx,
	MptModel: () => gx,
	MptPreTrainedModel: () => mx,
	MultiModalityCausalLM: () => Mx,
	MultiModalityPreTrainedModel: () => vx,
	MusicgenForCausalLM: () => Ax,
	MusicgenForConditionalGeneration: () => Cx,
	MusicgenModel: () => Ex,
	MusicgenPreTrainedModel: () => kx,
	NanoChatForCausalLM: () => Fx,
	NanoChatModel: () => Sx,
	NanoChatPreTrainedModel: () => Tx,
	NemotronHForCausalLM: () => Lx,
	NemotronHModel: () => Px,
	NemotronHPreTrainedModel: () => Ix,
	NeoBertForMaskedLM: () => Nx,
	NeoBertForQuestionAnswering: () => Dx,
	NeoBertForSequenceClassification: () => Bx,
	NeoBertForTokenClassification: () => $x,
	NeoBertModel: () => zx,
	NeoBertPreTrainedModel: () => Ox,
	NomicBertModel: () => Gx,
	NomicBertPreTrainedModel: () => Rx,
	OPTForCausalLM: () => lv,
	OPTModel: () => iv,
	OPTPreTrainedModel: () => ov,
	Olmo2ForCausalLM: () => Hx,
	Olmo2Model: () => Wx,
	Olmo2PreTrainedModel: () => qx,
	Olmo3ForCausalLM: () => Jx,
	Olmo3Model: () => Xx,
	Olmo3PreTrainedModel: () => Qx,
	OlmoForCausalLM: () => jx,
	OlmoHybridForCausalLM: () => Zx,
	OlmoHybridModel: () => Kx,
	OlmoHybridPreTrainedModel: () => Yx,
	OlmoModel: () => Vx,
	OlmoPreTrainedModel: () => Ux,
	OpenAIPrivacyFilterForTokenClassification: () => nv,
	OpenAIPrivacyFilterModel: () => tv,
	OpenAIPrivacyFilterPreTrainedModel: () => ev,
	OpenELMForCausalLM: () => av,
	OpenELMModel: () => rv,
	OpenELMPreTrainedModel: () => sv,
	OwlViTForObjectDetection: () => pv,
	OwlViTModel: () => _v,
	OwlViTPreTrainedModel: () => hv,
	Owlv2ForObjectDetection: () => dv,
	Owlv2Model: () => uv,
	Owlv2PreTrainedModel: () => cv,
	PaliGemmaForConditionalGeneration: () => fv,
	ParakeetForCTC: () => gv,
	ParakeetPreTrainedModel: () => mv,
	PatchTSMixerForPrediction: () => bv,
	PatchTSMixerModel: () => yv,
	PatchTSMixerPreTrainedModel: () => wv,
	PatchTSTForPrediction: () => Mv,
	PatchTSTModel: () => vv,
	PatchTSTPreTrainedModel: () => xv,
	Phi3ForCausalLM: () => Sv,
	Phi3Model: () => Tv,
	Phi3PreTrainedModel: () => Cv,
	Phi3VForCausalLM: () => Iv,
	Phi3VPreTrainedModel: () => Fv,
	PhiForCausalLM: () => Av,
	PhiModel: () => Ev,
	PhiPreTrainedModel: () => kv,
	PreTrainedModel: () => K_,
	PvtForImageClassification: () => Ov,
	PvtModel: () => Lv,
	PvtPreTrainedModel: () => Pv,
	PyAnnoteForAudioFrameClassification: () => Bv,
	PyAnnoteModel: () => Nv,
	PyAnnotePreTrainedModel: () => zv,
	Qwen2ForCausalLM: () => Rv,
	Qwen2Model: () => Dv,
	Qwen2MoeForCausalLM: () => Vv,
	Qwen2MoeModel: () => Uv,
	Qwen2MoePreTrainedModel: () => Gv,
	Qwen2PreTrainedModel: () => $v,
	Qwen2VLForCausalLM: () => fw,
	Qwen2VLForConditionalGeneration: () => pw,
	Qwen2VLPreTrainedModel: () => _w,
	Qwen2_5_VLForCausalLM: () => gw,
	Qwen2_5_VLForConditionalGeneration: () => mw,
	Qwen3ForCausalLM: () => Wv,
	Qwen3Model: () => qv,
	Qwen3MoeForCausalLM: () => Xv,
	Qwen3MoeModel: () => Qv,
	Qwen3MoePreTrainedModel: () => Hv,
	Qwen3NextForCausalLM: () => Kv,
	Qwen3NextModel: () => Yv,
	Qwen3NextPreTrainedModel: () => Jv,
	Qwen3PreTrainedModel: () => jv,
	Qwen3VLForCausalLM: () => eM,
	Qwen3VLForConditionalGeneration: () => Zv,
	Qwen3VLMoeForCausalLM: () => nM,
	Qwen3VLMoeForConditionalGeneration: () => tM,
	Qwen3_5ForCausalLM: () => rM,
	Qwen3_5ForConditionalGeneration: () => sM,
	Qwen3_5MoeForCausalLM: () => oM,
	Qwen3_5MoeForConditionalGeneration: () => aM,
	RFDetrForObjectDetection: () => hM,
	RFDetrModel: () => dM,
	RFDetrObjectDetectionOutput: () => _M,
	RFDetrPreTrainedModel: () => uM,
	RTDetrForObjectDetection: () => Kf,
	RTDetrModel: () => Yf,
	RTDetrObjectDetectionOutput: () => Zf,
	RTDetrPreTrainedModel: () => Jf,
	RTDetrV2ForObjectDetection: () => TM,
	RTDetrV2Model: () => CM,
	RTDetrV2ObjectDetectionOutput: () => SM,
	RTDetrV2PreTrainedModel: () => AM,
	ResNetForImageClassification: () => cM,
	ResNetModel: () => lM,
	ResNetPreTrainedModel: () => iM,
	RoFormerForMaskedLM: () => vM,
	RoFormerForQuestionAnswering: () => EM,
	RoFormerForSequenceClassification: () => MM,
	RoFormerForTokenClassification: () => kM,
	RoFormerModel: () => xM,
	RoFormerPreTrainedModel: () => bM,
	RobertaForMaskedLM: () => mM,
	RobertaForQuestionAnswering: () => yM,
	RobertaForSequenceClassification: () => gM,
	RobertaForTokenClassification: () => wM,
	RobertaModel: () => fM,
	RobertaPreTrainedModel: () => pM,
	Sam2ImageSegmentationOutput: () => LM,
	Sam2Model: () => zM,
	Sam2PreTrainedModel: () => OM,
	Sam3TrackerModel: () => BM,
	SamImageSegmentationOutput: () => FM,
	SamModel: () => PM,
	SamPreTrainedModel: () => IM,
	SapiensForDepthEstimation: () => RM,
	SapiensForNormalEstimation: () => GM,
	SapiensForSemanticSegmentation: () => DM,
	SapiensPreTrainedModel: () => $M,
	SegformerForImageClassification: () => jM,
	SegformerForSemanticSegmentation: () => qM,
	SegformerModel: () => VM,
	SegformerPreTrainedModel: () => UM,
	SiglipModel: () => HM,
	SiglipPreTrainedModel: () => WM,
	SiglipTextModel: () => QM,
	SiglipVisionModel: () => XM,
	SmolLM3ForCausalLM: () => KM,
	SmolLM3Model: () => YM,
	SmolLM3PreTrainedModel: () => JM,
	SmolVLMForConditionalGeneration: () => ZM,
	SnacDecoderModel: () => sk,
	SnacEncoderModel: () => nk,
	SnacModel: () => tk,
	SnacPreTrainedModel: () => ek,
	SolarOpenForCausalLM: () => ok,
	SolarOpenModel: () => ak,
	SolarOpenPreTrainedModel: () => rk,
	SpeechT5ForSpeechToText: () => ck,
	SpeechT5ForTextToSpeech: () => uk,
	SpeechT5HifiGan: () => dk,
	SpeechT5Model: () => lk,
	SpeechT5PreTrainedModel: () => ik,
	SqueezeBertForMaskedLM: () => pk,
	SqueezeBertForQuestionAnswering: () => mk,
	SqueezeBertForSequenceClassification: () => fk,
	SqueezeBertModel: () => _k,
	SqueezeBertPreTrainedModel: () => hk,
	StableLmForCausalLM: () => yk,
	StableLmModel: () => wk,
	StableLmPreTrainedModel: () => gk,
	Starcoder2ForCausalLM: () => vk,
	Starcoder2Model: () => xk,
	Starcoder2PreTrainedModel: () => bk,
	StyleTextToSpeech2Model: () => kk,
	StyleTextToSpeech2PreTrainedModel: () => Mk,
	SupertonicForConditionalGeneration: () => Ak,
	SupertonicPreTrainedModel: () => Ek,
	Swin2SRForImageSuperResolution: () => Lk,
	Swin2SRModel: () => Pk,
	Swin2SRPreTrainedModel: () => Ik,
	SwinForImageClassification: () => Sk,
	SwinForSemanticSegmentation: () => Fk,
	SwinModel: () => Tk,
	SwinPreTrainedModel: () => Ck,
	T5ForConditionalGeneration: () => Nk,
	T5Model: () => zk,
	T5PreTrainedModel: () => Ok,
	TableTransformerForObjectDetection: () => Dk,
	TableTransformerModel: () => $k,
	TableTransformerObjectDetectionOutput: () => Rk,
	TableTransformerPreTrainedModel: () => Bk,
	TrOCRForCausalLM: () => Uk,
	TrOCRPreTrainedModel: () => Gk,
	UltravoxModel: () => Hw,
	UltravoxPreTrainedModel: () => Ww,
	UniSpeechForCTC: () => qk,
	UniSpeechForSequenceClassification: () => Wk,
	UniSpeechModel: () => jk,
	UniSpeechPreTrainedModel: () => Vk,
	UniSpeechSatForAudioFrameClassification: () => Yk,
	UniSpeechSatForCTC: () => Xk,
	UniSpeechSatForSequenceClassification: () => Jk,
	UniSpeechSatModel: () => Qk,
	UniSpeechSatPreTrainedModel: () => Hk,
	VaultGemmaForCausalLM: () => eE,
	VaultGemmaModel: () => Zk,
	VaultGemmaPreTrainedModel: () => Kk,
	ViTForImageClassification: () => rE,
	ViTMAEModel: () => oE,
	ViTMAEPreTrainedModel: () => aE,
	ViTMSNForImageClassification: () => cE,
	ViTMSNModel: () => lE,
	ViTMSNPreTrainedModel: () => iE,
	ViTModel: () => sE,
	ViTPreTrainedModel: () => nE,
	VisionEncoderDecoderModel: () => tE,
	VitMatteForImageMatting: () => dE,
	VitMattePreTrainedModel: () => uE,
	VitPoseForPoseEstimation: () => _E,
	VitPosePreTrainedModel: () => hE,
	VitsModel: () => mE,
	VitsModelOutput: () => pE,
	VitsPreTrainedModel: () => fE,
	VoxtralForConditionalGeneration: () => gE,
	VoxtralRealtimeForConditionalGeneration: () => vE,
	VoxtralRealtimePreTrainedModel: () => xE,
	Wav2Vec2BertForCTC: () => EE,
	Wav2Vec2BertForSequenceClassification: () => AE,
	Wav2Vec2BertModel: () => kE,
	Wav2Vec2BertPreTrainedModel: () => ME,
	Wav2Vec2ForAudioFrameClassification: () => cy,
	Wav2Vec2ForCTC: () => iy,
	Wav2Vec2ForSequenceClassification: () => ly,
	Wav2Vec2Model: () => oy,
	Wav2Vec2PreTrainedModel: () => ay,
	WavLMForAudioFrameClassification: () => LE,
	WavLMForCTC: () => FE,
	WavLMForSequenceClassification: () => IE,
	WavLMForXVector: () => PE,
	WavLMModel: () => SE,
	WavLMPreTrainedModel: () => TE,
	WeSpeakerResNetModel: () => zE,
	WeSpeakerResNetPreTrainedModel: () => OE,
	WhisperForConditionalGeneration: () => DE,
	WhisperModel: () => $E,
	WhisperPreTrainedModel: () => BE,
	XLMForQuestionAnswering: () => WE,
	XLMForSequenceClassification: () => jE,
	XLMForTokenClassification: () => qE,
	XLMModel: () => UE,
	XLMPreTrainedModel: () => GE,
	XLMRobertaForMaskedLM: () => XE,
	XLMRobertaForQuestionAnswering: () => KE,
	XLMRobertaForSequenceClassification: () => JE,
	XLMRobertaForTokenClassification: () => YE,
	XLMRobertaModel: () => QE,
	XLMRobertaPreTrainedModel: () => HE,
	XLMWithLMHeadModel: () => VE,
	XVectorOutput: () => CE,
	YolosForObjectDetection: () => tA,
	YolosModel: () => eA,
	YolosObjectDetectionOutput: () => nA,
	YolosPreTrainedModel: () => ZE,
	YoutuForCausalLM: () => aA,
	YoutuModel: () => rA,
	YoutuPreTrainedModel: () => sA
});
var fp = class extends K_ {}, mp = class extends fp {}, gp = class extends fp {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, wp = class extends fp {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, yp = class extends fp {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, bp = class extends K_ {}, xp = class extends bp {}, vp = class extends bp {}, Mp = class extends K_ {}, kp = class extends Mp {}, Ep = class extends Mp {}, Ap = class extends K_ {}, Cp = class extends Ap {}, Tp = class extends Ap {}, Sp = class extends K_ {}, Fp = class extends Sp {}, Ip = class extends Sp {}, Pp = class extends K_ {}, Lp = class extends Pp {}, Op = class extends Pp {}, zp = class extends Pp {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Np = class extends K_ {}, Bp = class extends Np {}, $p = class extends Np {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Dp = class extends K_ {}, Rp = class extends Dp {}, Gp = class extends Dp {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, Up = class extends Dp {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Vp = class extends Dp {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, jp = class extends Dp {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, qp = class extends K_ {}, Wp = class extends qp {}, Hp = class extends qp {}, Qp = class extends K_ {}, Xp = class extends Qp {}, Jp = class extends Qp {}, Yp = class extends K_ {}, Kp = class extends Yp {}, Zp = class extends Yp {}, ef = class extends K_ {}, tf = class extends ef {}, nf = class extends ef {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, sf = class extends ef {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, rf = class extends ef {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, af = class extends ef {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, of = class extends K_ {
	forward_params = [
		"input_ids",
		"inputs_embeds",
		"attention_mask",
		"position_ids",
		"audio_values",
		"exaggeration",
		"audio_features",
		"audio_tokens",
		"speaker_embeddings",
		"speaker_features",
		"past_key_values"
	];
	main_input_name = "input_ids";
	_return_dict_in_generate_keys = [
		"audio_tokens",
		"speaker_embeddings",
		"speaker_features"
	];
}, lf = class extends of {
	async encode_speech(e) {
		return jh(this.sessions.speech_encoder, { audio_values: e });
	}
	async forward({ input_ids: e = null, attention_mask: t = null, audio_values: n = null, exaggeration: s = null, position_ids: r = null, inputs_embeds: a = null, past_key_values: o = null, generation_config: i = null, logits_processor: l = null, audio_features: c = null, audio_tokens: u = null, speaker_embeddings: d = null, speaker_features: h = null, ..._ }) {
		let p;
		if (!a) {
			const i = this.sessions.embed_tokens.inputNames, l = { input_ids: e };
			if (i.includes("exaggeration")) {
				if (!(s instanceof Ri)) {
					const t = e.dims[0];
					if (null == s) s = tl([t], .5);
					else if ("number" == typeof s) s = tl([t], s);
					else {
						if (!Array.isArray(s)) throw new Error("Unsupported type for `exaggeration` input");
						s = new Ri("float32", s, [t]);
					}
				}
				l.exaggeration = s;
			}
			if (i.includes("position_ids") && (l.position_ids = r), {inputs_embeds: a} = await jh(this.sessions.embed_tokens, l), c && u && d && h && (p = {
				audio_features: c,
				audio_tokens: u,
				speaker_embeddings: d,
				speaker_features: h
			}), p || n) p ??= await this.encode_speech(n), t = sl([(a = Xi([p.audio_features, a], 1)).dims[0], a.dims[1]]);
			else {
				const e = a.dims[1];
				if (!o || 1 !== e) throw new Error("Incorrect state encountered during generation.");
				const n = o.get_seq_length();
				t = sl([a.dims[0], n + e]);
			}
		}
		return {
			...await ap(this, {
				inputs_embeds: a,
				past_key_values: o,
				attention_mask: t,
				generation_config: i,
				logits_processor: l
			}, !1),
			...p
		};
	}
	prepare_inputs_for_generation(e, t, n) {
		return !t.position_ids && this.sessions.embed_tokens.inputNames.includes("position_ids") && (1 === t.input_ids.dims[1] ? t.position_ids = new Ri("int64", Array.from({ length: e.length }, (t, n) => e[n].length - e[n].findLastIndex((e) => 6561n == e) - 1), [e.length, 1]) : t.position_ids = new Ri("int64", t.input_ids.tolist().map((e) => {
			let t = 0;
			return e.map((e) => e >= 6561n ? 0 : t++);
		}).flat(), t.input_ids.dims)), 1 === t.input_ids.dims[1] && (delete t.audio_values, delete t.audio_features, delete t.audio_tokens, delete t.speaker_embeddings, delete t.speaker_features), lp(this, 0, t);
	}
	async generate(e) {
		const { sequences: t, audio_tokens: n, speaker_embeddings: s, speaker_features: r } = await super.generate({
			...e,
			return_dict_in_generate: !0
		}), a = t.slice(null, [e.input_ids.dims[1], -1]), o = Xi([
			n,
			a,
			tl([a.dims[0], 3], 4299n)
		], 1), { waveform: i } = await jh(this.sessions.conditional_decoder, {
			speech_tokens: o,
			speaker_features: r,
			speaker_embeddings: s
		});
		return i;
	}
}, cf = class extends K_ {}, uf = class extends cf {}, df = class extends K_ {}, hf = class extends df {}, _f = class extends K_ {}, pf = class extends _f {}, ff = class extends _f {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "text_model"
		});
	}
}, mf = class extends _f {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "audio_model"
		});
	}
}, gf = class extends K_ {}, wf = class extends gf {}, yf = class extends gf {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "text_model"
		});
	}
}, bf = class extends gf {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "text_model"
		});
	}
}, xf = class extends gf {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "vision_model"
		});
	}
}, vf = class extends gf {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "vision_model"
		});
	}
}, Mf = class extends K_ {}, kf = class extends Mf {}, Ef = class extends Mf {}, Af = class extends K_ {}, Cf = class extends Af {}, Tf = class extends Af {}, Sf = class extends K_ {}, Ff = class extends Sf {}, If = class extends Sf {}, Pf = class extends K_ {}, Lf = class extends Pf {}, Of = class extends Pf {}, zf = class extends K_ {
	requires_attention_mask = !1;
	main_input_name = "input_features";
	forward_params = [
		"input_features",
		"decoder_input_ids",
		"decoder_attention_mask",
		"past_key_values"
	];
}, Nf = class extends zf {}, Bf = class extends zf {}, $f = class extends K_ {}, Df = class extends $f {}, Rf = class extends $f {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, Gf = class extends $f {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Uf = class extends $f {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, Vf = class extends $f {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, jf = class extends K_ {}, qf = class extends jf {}, Wf = class extends jf {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Hf = class extends K_ {}, Qf = class extends Hf {}, Xf = class extends Hf {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Jf = class extends K_ {}, Yf = class extends Jf {}, Kf = class extends Jf {
	async _call(e) {
		return new Zf(await super._call(e));
	}
}, Zf = class extends qh {
	constructor({ logits: e, pred_boxes: t }) {
		super(), this.logits = e, this.pred_boxes = t;
	}
}, em = class extends K_ {}, tm = class extends em {}, nm = class extends em {
	async _call(e) {
		return new Zf(await super._call(e));
	}
}, sm = class extends qh {
	constructor({ audio_codes: e }) {
		super(), this.audio_codes = e;
	}
}, rm = class extends qh {
	constructor({ audio_values: e }) {
		super(), this.audio_values = e;
	}
}, am = class extends K_ {
	main_input_name = "input_values";
	forward_params = ["input_values"];
}, om = class extends am {
	async encode(e) {
		return new sm(await jh(this.sessions.encoder_model, e));
	}
	async decode(e) {
		return new rm(await jh(this.sessions.decoder_model, e));
	}
}, im = class extends am {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "encoder_model"
		});
	}
}, lm = class extends am {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "decoder_model"
		});
	}
}, cm = class extends K_ {}, um = class extends cm {}, dm = class extends cm {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, hm = class extends cm {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, _m = class extends cm {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, pm = class extends cm {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, fm = class extends K_ {}, mm = class extends fm {}, gm = class extends fm {}, wm = class extends K_ {}, ym = class extends wm {}, bm = class extends wm {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, xm = class extends wm {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, vm = class extends wm {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, Mm = class extends wm {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, km = class extends K_ {}, Em = class extends km {}, Am = class extends K_ {}, Cm = class extends Am {}, Tm = class extends Am {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Sm = class extends K_ {}, Fm = class extends Sm {}, Im = class extends K_ {}, Pm = class extends Im {}, Lm = class extends K_ {}, Om = class extends Lm {}, zm = class extends Lm {
	async _call(e) {
		return new Bm(await super._call(e));
	}
}, Nm = class extends Lm {
	async _call(e) {
		return new $m(await super._call(e));
	}
}, Bm = class extends qh {
	constructor({ logits: e, pred_boxes: t }) {
		super(), this.logits = e, this.pred_boxes = t;
	}
}, $m = class extends qh {
	constructor({ logits: e, pred_boxes: t, pred_masks: n }) {
		super(), this.logits = e, this.pred_boxes = t, this.pred_masks = n;
	}
}, Dm = class extends K_ {}, Rm = class extends Dm {}, Gm = class extends Dm {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Um = class extends K_ {}, Vm = class extends Um {}, jm = class extends Um {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, qm = class extends K_ {}, Wm = class extends qm {}, Hm = class extends K_ {}, Qm = class extends Hm {}, Xm = class extends K_ {}, Jm = class extends Xm {}, Ym = class extends Xm {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Km = class extends Xm {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, Zm = class extends Xm {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, eg = class extends Xm {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, tg = class extends K_ {}, ng = class extends tg {}, sg = class extends K_ {}, rg = class extends sg {}, ag = class extends sg {}, og = class extends K_ {}, ig = class extends og {}, lg = class extends og {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, cg = class extends K_ {}, ug = class extends cg {}, dg = class extends cg {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, hg = class extends cg {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, _g = class extends cg {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, pg = class extends cg {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, fg = class extends K_ {}, mg = class extends fg {}, gg = class extends fg {}, wg = class extends K_ {}, yg = class extends wg {}, bg = class extends wg {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, xg = class extends wg {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, vg = class extends wg {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, Mg = class extends K_ {}, kg = class extends Mg {}, Eg = class extends Mg {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, Ag = class extends Mg {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Cg = class extends Mg {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, Tg = class extends K_ {}, Sg = class extends Tg {}, Fg = class extends Tg {}, Ig = class extends K_ {}, Pg = class extends Ig {}, Lg = class extends Ig {}, Og = class extends K_ {}, zg = class extends Og {}, Ng = class extends Og {}, Bg = class extends K_ {}, $g = class extends Bg {}, Dg = class extends Bg {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Rg = class extends K_ {
	forward_params = [
		"input_ids",
		"inputs_embeds",
		"attention_mask",
		"pixel_values",
		"encoder_outputs",
		"decoder_input_ids",
		"decoder_inputs_embeds",
		"decoder_attention_mask",
		"past_key_values"
	];
	main_input_name = "inputs_embeds";
}, Gg = class extends Rg {
	_merge_input_ids_with_image_features({ inputs_embeds: e, image_features: t, input_ids: n, attention_mask: s }) {
		return {
			inputs_embeds: Xi([t, e], 1),
			attention_mask: Xi([sl(t.dims.slice(0, 2)), s], 1)
		};
	}
	async _prepare_inputs_embeds({ input_ids: e, pixel_values: t, inputs_embeds: n, attention_mask: s }) {
		if (!e && !t) throw new Error("Either `input_ids` or `pixel_values` should be provided.");
		let r, a;
		return e && (r = await this.encode_text({ input_ids: e })), t && (a = await this.encode_image({ pixel_values: t })), r && a ? {inputs_embeds: n, attention_mask: s} = this._merge_input_ids_with_image_features({
			inputs_embeds: r,
			image_features: a,
			input_ids: e,
			attention_mask: s
		}) : n = r || a, {
			inputs_embeds: n,
			attention_mask: s
		};
	}
	async forward({ input_ids: e, pixel_values: t, attention_mask: n, decoder_input_ids: s, decoder_attention_mask: r, encoder_outputs: a, past_key_values: o, inputs_embeds: i, decoder_inputs_embeds: l }) {
		if (i || ({inputs_embeds: i, attention_mask: n} = await this._prepare_inputs_embeds({
			input_ids: e,
			pixel_values: t,
			inputs_embeds: i,
			attention_mask: n
		})), !a) {
			let { last_hidden_state: e } = await ep(this, {
				inputs_embeds: i,
				attention_mask: n
			});
			a = e;
		}
		if (!l) {
			if (!s) throw new Error("Either `decoder_input_ids` or `decoder_inputs_embeds` should be provided.");
			l = await this.encode_text({ input_ids: s });
		}
		const c = {
			inputs_embeds: l,
			attention_mask: r,
			encoder_attention_mask: n,
			encoder_hidden_states: a,
			past_key_values: o
		};
		return await ap(this, c, !0);
	}
}, Ug = class extends K_ {}, Vg = class extends Ug {}, jg = class extends Ug {}, qg = class extends K_ {}, Wg = class extends qg {}, Hg = class extends qg {}, Qg = class extends K_ {
	forward_params = [
		"input_ids",
		"attention_mask",
		"pixel_values",
		"position_ids",
		"past_key_values"
	];
}, Xg = class extends Qg {
	_merge_input_ids_with_image_features(e) {
		const t = e.image_features.dims.at(-1), n = e.image_features.view(-1, t);
		return hp({
			image_token_id: this.config.image_token_index ?? this.config.image_token_id,
			...e,
			image_features: n
		});
	}
}, Jg = class extends Xg {}, Yg = class extends Xg {}, Kg = class extends K_ {}, Zg = class extends Kg {}, ew = class extends Xg {}, tw = class extends ew {}, nw = class extends K_ {
	forward_params = [
		"input_ids",
		"attention_mask",
		"inputs_embeds",
		"per_layer_inputs",
		"position_ids",
		"pixel_values",
		"input_features",
		"input_features_mask",
		"past_key_values"
	];
}, sw = class extends nw {
	async forward({ input_ids: e = null, attention_mask: t = null, pixel_values: n = null, input_features: s = null, input_features_mask: r = null, position_ids: a = null, inputs_embeds: o = null, per_layer_inputs: i = null, past_key_values: l = null, generation_config: c = null, logits_processor: u = null, ...d }) {
		if (!(o && i || ({inputs_embeds: o, per_layer_inputs: i} = await jh(this.sessions.embed_tokens, { input_ids: e }), 1 === e.dims[1]))) {
			if (n) {
				const { image_features: s } = await this._encode_vision({
					pixel_values: n,
					...d
				});
				({inputs_embeds: o, attention_mask: t} = this._merge_input_ids_with_image_features({
					image_features: s,
					inputs_embeds: o,
					input_ids: e,
					attention_mask: t
				}));
			}
			if (s) {
				const { audio_features: n } = await jh(this.sessions.audio_encoder, {
					input_features: s,
					input_features_mask: r
				});
				({inputs_embeds: o, attention_mask: t} = this._merge_input_ids_with_audio_features({
					audio_features: n,
					inputs_embeds: o,
					input_ids: e,
					attention_mask: t
				}));
			}
		}
		return await ap(this, {
			inputs_embeds: o,
			per_layer_inputs: i,
			past_key_values: l,
			attention_mask: t,
			position_ids: a,
			generation_config: c,
			logits_processor: u
		}, !0);
	}
	_encode_vision(e) {
		return jh(this.sessions.vision_encoder, { pixel_values: e.pixel_values });
	}
	_merge_input_ids_with_image_features(e) {
		const t = e.image_features.dims.at(-1), n = e.image_features.view(-1, t);
		return hp({
			image_token_id: this.config.image_token_id,
			...e,
			image_features: n
		});
	}
	_merge_input_ids_with_audio_features(e) {
		const t = e.audio_features.dims.at(-1), n = e.audio_features.view(-1, t);
		return _p({
			audio_token_id: this.config.audio_token_id,
			...e,
			audio_features: n
		});
	}
}, rw = class extends sw {}, aw = class extends sw {
	forward_params = [
		"input_ids",
		"attention_mask",
		"inputs_embeds",
		"per_layer_inputs",
		"position_ids",
		"pixel_values",
		"image_position_ids",
		"input_features",
		"input_features_mask",
		"past_key_values"
	];
	_encode_vision(e) {
		return jh(this.sessions.vision_encoder, {
			pixel_values: e.pixel_values,
			pixel_position_ids: e.image_position_ids
		});
	}
}, ow = class extends aw {}, iw = class extends K_ {}, lw = class extends iw {}, cw = class extends iw {}, uw = class extends K_ {}, dw = class extends uw {}, hw = class extends uw {}, _w = class extends K_ {
	forward_params = [
		"input_ids",
		"attention_mask",
		"position_ids",
		"past_key_values",
		"pixel_values",
		"image_grid_thw"
	];
}, pw = class extends _w {
	image_grid_thw_name = "grid_thw";
	_get_text_only_rope_index(e, t) {
		if (t) {
			const { data: e, dims: n } = ip(t), s = BigInt64Array.from({ length: 3 * e.length }, (t, n) => e[n % e.length]), r = Array.from({ length: n[0] }, (t, s) => Zo(e.subarray(n[1] * s, n[1] * (s + 1)))[0] + 1n + BigInt(n[1]));
			return [new Ri("int64", s, [3, ...n]), new Ri("int64", r, [r.length, 1])];
		}
		{
			const [t, n] = e.dims;
			return [new Ri("int64", BigInt64Array.from({ length: 3 * t * n }, (e, s) => BigInt(Math.floor(s % n / t))), [3, ...e.dims]), al([t, 1])];
		}
	}
	_reorder_and_write_positions(e, t, n, s) {
		const r = e.reduce((e, t) => e + t.length, 0), a = new Array(r);
		let o = 0;
		for (let l = 0; l < 3; ++l) for (const t of e) {
			const e = t.length / 3;
			for (let n = l * e; n < (l + 1) * e; ++n) a[o++] = t[n];
		}
		let i = 0;
		for (let l = 0; l < t.length; ++l) if (1 == t[l]) {
			for (let e = 0; e < 3; ++e) n[e][s][l] = a[e * r / 3 + i];
			++i;
		}
		return a;
	}
	_get_multimodal_rope_positions({ filtered_ids: e, image_grid_thw_list: t, video_grid_thw_list: n, spatial_merge_size: s, state: r }) {
		const { image_token_id: a, video_token_id: o, vision_start_token_id: i } = this.config, l = e, c = l.reduce((e, t, n) => (t == i && e.push(n), e), []).map((e) => l[e + 1]), u = c.filter((e) => e == a).length, d = c.filter((e) => e == o).length, h = [];
		let _ = 0, p = u, f = d;
		for (let m = 0; m < c.length; ++m) {
			const e = l.findIndex((e, t) => t > _ && e == a), i = l.findIndex((e, t) => t > _ && e == o), c = p > 0 && -1 !== e ? e : l.length + 1, u = f > 0 && -1 !== i ? i : l.length + 1;
			let d, m, g, w;
			c < u ? ([m, g, w] = t[r.image_index], ++r.image_index, --p, d = c) : ([m, g, w] = n[r.video_index], ++r.video_index, --f, d = u);
			const [y, b, x] = [
				Number(m),
				Math.floor(Number(g) / s),
				Math.floor(Number(w) / s)
			], v = d - _, M = h.length > 0 ? Zo(h.at(-1))[0] + 1 : 0;
			h.push(Array.from({ length: 3 * v }, (e, t) => M + t % v));
			const k = v + M, E = y * b * x, A = Array.from({ length: E }, (e, t) => k + Math.floor(t / (b * x))), C = Array.from({ length: E }, (e, t) => k + Math.floor(t / x) % b), T = Array.from({ length: E }, (e, t) => k + t % x);
			h.push([
				A,
				C,
				T
			].flat()), _ = d + E;
		}
		if (_ < l.length) {
			const e = h.length > 0 ? Zo(h.at(-1))[0] + 1 : 0, t = l.length - _;
			h.push(Array.from({ length: 3 * t }, (n, s) => e + s % t));
		}
		return h;
	}
	get_rope_index(e, t, n, s) {
		const { vision_config: r } = this.config, a = r.spatial_merge_size ?? 2;
		if (t || n) {
			const r = e.tolist();
			s || (s = rl(e));
			const o = s.tolist(), i = Array.from({ length: 3 }, () => Array.from({ length: e.dims[0] }, () => Array.from({ length: e.dims[1] }, () => 0))), l = t ? t.tolist() : [], c = n ? n.tolist() : [], u = {
				image_index: 0,
				video_index: 0
			}, d = [];
			for (let e = 0; e < r.length; ++e) {
				const t = r[e].filter((t, n) => 1 == o[e][n]), n = this._get_multimodal_rope_positions({
					filtered_ids: t,
					image_grid_thw_list: l,
					video_grid_thw_list: c,
					spatial_merge_size: a,
					state: u
				}), s = this._reorder_and_write_positions(n, o[e], i, e);
				d.push(Zo(s)[0] + 1 - r[e].length);
			}
			return [new Ri("int64", i.flat(Infinity), [
				3,
				e.dims[0],
				e.dims[1]
			]), new Ri("int64", d, [d.length, 1])];
		}
		return this._get_text_only_rope_index(e, s);
	}
	async encode_image({ pixel_values: e, image_grid_thw: t }) {
		return (await jh(this.sessions.vision_encoder, {
			pixel_values: e,
			[this.image_grid_thw_name]: t
		})).image_features;
	}
	_merge_input_ids_with_image_features(e) {
		return hp({
			image_token_id: this.config.image_token_id,
			...e
		});
	}
	prepare_inputs_for_generation(e, t, n) {
		if (!t.attention_mask || t.position_ids) return t;
		if (!(this.sessions.decoder_model_merged ?? this.sessions.model).inputNames.includes("position_ids")) return t;
		if (t.past_key_values) {
			t.pixel_values = null;
			const e = t.past_key_values.get_seq_length();
			if (e < t.input_ids.dims[1]) {
				const [n, s] = this.get_rope_index(t.input_ids, t.image_grid_thw, t.video_grid_thw, t.attention_mask);
				t.rope_deltas = s, t.position_ids = n.slice(null, null, [e, null]), t.input_ids = t.input_ids.slice(null, [e, null]);
			} else {
				t.rope_deltas || ([, t.rope_deltas] = this.get_rope_index(t.input_ids, t.image_grid_thw, t.video_grid_thw, t.attention_mask));
				const n = BigInt(e), s = t.rope_deltas.map((e) => n + e);
				t.position_ids = Ji([
					s,
					s,
					s
				], 0);
			}
		} else [t.position_ids, t.rope_deltas] = this.get_rope_index(t.input_ids, t.image_grid_thw, t.video_grid_thw, t.attention_mask);
		return t;
	}
}, fw = class extends pw {}, mw = class extends pw {
	image_grid_thw_name = "image_grid_thw";
}, gw = class extends fw {
	image_grid_thw_name = "image_grid_thw";
}, ww = class extends mw {
	get_vision_position_ids(e, t, n, s) {
		const r = Math.floor(t[0] / n), a = Math.floor(t[1] / s), o = Math.floor(t[2] / s), i = a * o * r;
		return [
			...Array.from({ length: i }, () => e),
			...Array.from({ length: i }, (t, n) => e + Math.floor(n / (o * r))),
			...Array.from({ length: i }, (t, n) => e + n % o)
		];
	}
	_get_multimodal_rope_positions({ filtered_ids: e, image_grid_thw_list: t, video_grid_thw_list: n, spatial_merge_size: s, state: r }) {
		const { image_token_id: a } = this.config, o = [];
		let i = 0, l = e[0] == a ? 1 : 0;
		for (let d = 1; d <= e.length; ++d) {
			const t = d < e.length ? e[d] == a ? 1 : 0 : -1;
			t !== l && (o.push([
				l,
				i,
				d
			]), i = d, l = t);
		}
		let c = 0;
		const u = [];
		for (const [d, h, _] of o) if (0 === d) {
			const e = _ - h;
			u.push(Array.from({ length: 3 * e }, (t, n) => c + n % e)), c += e;
		} else {
			const e = t[r.image_index++].map(Number), n = e[0];
			u.push(this.get_vision_position_ids(c, e, n, s)), c += Math.max(e[1], e[2]) / s;
		}
		return u;
	}
}, yw = class extends K_ {}, bw = class extends yw {}, xw = class extends yw {}, vw = class extends K_ {}, Mw = class extends vw {}, kw = class extends vw {}, Ew = class extends K_ {}, Aw = class extends Ew {}, Cw = class extends Ew {}, Tw = class extends K_ {}, Sw = class extends Tw {}, Fw = class extends Tw {}, Iw = class extends K_ {}, Pw = class extends Iw {}, Lw = class extends Iw {}, Ow = class extends K_ {}, zw = class extends Ow {}, Nw = class extends Ow {}, Bw = class extends K_ {}, $w = class extends Bw {}, Dw = class extends Bw {}, Rw = class extends K_ {}, Gw = class extends Rw {}, Uw = class extends Rw {}, Vw = class extends K_ {}, jw = class extends Vw {}, qw = class extends Vw {}, Ww = class extends K_ {
	forward_params = [
		"input_ids",
		"attention_mask",
		"position_ids",
		"audio_values",
		"past_key_values"
	];
}, Hw = class extends Ww {
	_merge_input_ids_with_audio_features(e) {
		const t = e.audio_features.dims.at(-1), n = e.audio_features.view(-1, t);
		return _p({
			audio_token_id: this.config.ignore_index ?? this.config.audio_token_id ?? this.config.audio_token_index,
			...e,
			audio_features: n
		});
	}
}, Qw = class extends Hw {
	forward_params = [
		"input_ids",
		"attention_mask",
		"input_features",
		"past_key_values"
	];
}, Xw = class extends K_ {}, Jw = class extends Xw {}, Yw = class extends K_ {}, Kw = class extends Yw {}, Zw = class extends K_ {}, ey = class extends Zw {}, ty = class extends Zw {}, ny = class extends K_ {}, sy = class extends ny {}, ry = class extends ny {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, ay = class extends K_ {}, oy = class extends ay {}, iy = class extends ay {
	async _call(e) {
		return new Jh(await super._call(e));
	}
}, ly = class extends ay {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, cy = class extends ay {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, uy = class extends K_ {}, dy = class extends ay {}, hy = class extends ay {
	async _call(e) {
		return new Jh(await super._call(e));
	}
}, _y = class extends ay {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, py = class extends K_ {}, fy = class extends py {}, my = class extends py {}, gy = class extends Xg {
	forward_params = [
		"input_ids",
		"attention_mask",
		"pixel_values",
		"pixel_attention_mask",
		"position_ids",
		"past_key_values"
	];
}, wy = class extends K_ {}, yy = class extends wy {}, by = class extends wy {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, xy = class extends K_ {}, vy = class extends xy {}, My = class extends xy {}, ky = class extends K_ {}, Ey = class extends ky {
	async forward(e) {
		const t = !e.input_ids, n = !e.pixel_values;
		if (t && n) throw new Error("Either `input_ids` or `pixel_values` should be provided.");
		if (t && (e.input_ids = sl([e.pixel_values.dims[0], 1])), n) {
			const { image_size: t } = this.config.vision_config;
			e.pixel_values = tl([
				0,
				3,
				t,
				t
			], 0);
		}
		const { text_embeddings: s, image_embeddings: r, l2norm_text_embeddings: a, l2norm_image_embeddings: o } = await super.forward(e), i = {};
		return t || (i.text_embeddings = s, i.l2norm_text_embeddings = a), n || (i.image_embeddings = r, i.l2norm_image_embeddings = o), i;
	}
}, Ay = class extends ky {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "text_model"
		});
	}
}, Cy = class extends ky {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "vision_model"
		});
	}
}, Ty = class extends K_ {}, Sy = class extends Ty {}, Fy = class extends Ty {}, Iy = class extends Xg {}, Py = class extends K_ {}, Ly = class extends Py {}, Oy = class extends Py {}, zy = class extends Xg {
	forward_params = [
		"input_ids",
		"attention_mask",
		"pixel_values",
		"pixel_attention_mask",
		"spatial_shapes",
		"position_ids",
		"past_key_values"
	];
}, Ny = class extends K_ {}, By = class extends Ny {}, $y = class extends Ny {}, Dy = class extends K_ {}, Ry = class extends Dy {}, Gy = class extends K_ {}, Uy = class extends Gy {}, Vy = class extends Gy {}, jy = class extends K_ {}, qy = class extends jy {}, Wy = class extends jy {}, Hy = class extends K_ {}, Qy = class extends Hy {}, Xy = class extends Hy {}, Jy = class extends K_ {}, Yy = class extends Jy {}, Ky = class extends Jy {}, Zy = class extends K_ {}, eb = class extends Zy {}, tb = class extends Zy {}, nb = class extends Zy {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, sb = class extends Zy {}, rb = class extends K_ {}, ab = class extends rb {}, ob = class extends K_ {}, ib = class extends ob {}, lb = class extends qh {
	constructor({ char_logits: e, bpe_logits: t, wp_logits: n }) {
		super(), this.char_logits = e, this.bpe_logits = t, this.wp_logits = n;
	}
	get logits() {
		return [
			this.char_logits,
			this.bpe_logits,
			this.wp_logits
		];
	}
}, cb = class extends K_ {}, ub = class extends cb {
	async _call(e) {
		return new lb(await super._call(e));
	}
}, db = class extends qh {
	constructor({ audio_codes: e }) {
		super(), this.audio_codes = e;
	}
}, hb = class extends qh {
	constructor({ audio_values: e }) {
		super(), this.audio_values = e;
	}
}, _b = class extends K_ {
	main_input_name = "input_values";
	forward_params = ["input_values"];
}, pb = class extends _b {
	async encode(e) {
		return new db(await jh(this.sessions.encoder_model, e));
	}
	async decode(e) {
		return new hb(await jh(this.sessions.decoder_model, e));
	}
}, fb = class extends _b {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "encoder_model"
		});
	}
}, mb = class extends _b {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "decoder_model"
		});
	}
}, gb = class extends K_ {}, wb = class extends gb {}, yb = class extends gb {}, bb = class extends K_ {}, xb = class extends bb {}, vb = class extends bb {}, Mb = class extends K_ {}, kb = class extends Mb {}, Eb = class extends Mb {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, Ab = class extends Mb {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Cb = class extends Mb {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, Tb = class extends K_ {}, Sb = class extends Tb {}, Fb = class extends Tb {}, Ib = class extends K_ {}, Pb = class extends Ib {}, Lb = class extends Ib {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Ob = class extends Ib {}, zb = class extends K_ {}, Nb = class extends zb {}, Bb = class extends zb {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, $b = class extends zb {}, Db = class extends K_ {}, Rb = class extends Db {}, Gb = class extends Db {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Ub = class extends Db {}, Vb = class extends K_ {}, jb = class extends Vb {}, qb = class extends Vb {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Wb = class extends Vb {}, Hb = class extends K_ {}, Qb = class extends Hb {}, Xb = class extends Hb {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Jb = class extends K_ {}, Yb = class extends Jb {}, Kb = class extends Jb {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Zb = class extends K_ {}, ex = class extends Zb {}, tx = class extends Zb {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, nx = class extends Zb {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, sx = class extends Zb {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, rx = class extends K_ {}, ax = class extends rx {}, ox = class extends rx {}, ix = class extends K_ {
	requires_attention_mask = !1;
	main_input_name = "input_values";
	forward_params = [
		"input_values",
		"decoder_input_ids",
		"past_key_values"
	];
}, lx = class extends ix {}, cx = class extends ix {}, ux = class extends K_ {}, dx = class extends ux {}, hx = class extends ux {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, _x = class extends ux {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, px = class extends ux {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, fx = class extends ux {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, mx = class extends K_ {}, gx = class extends mx {}, wx = class extends mx {}, yx = class extends K_ {}, bx = class extends yx {}, xx = class extends yx {}, vx = class extends K_ {}, Mx = class extends vx {
	forward_params = [
		"input_ids",
		"pixel_values",
		"images_seq_mask",
		"images_emb_mask",
		"attention_mask",
		"position_ids",
		"past_key_values"
	];
	constructor(...e) {
		super(...e), this._generation_mode = "text";
	}
	async forward(e) {
		const t = this._generation_mode ?? "text";
		let n;
		if ("text" !== t && e.past_key_values) {
			const t = this.sessions.gen_img_embeds;
			n = await jh(t, Is({ image_ids: e.input_ids }, t.inputNames));
		} else {
			const t = this.sessions.prepare_inputs_embeds;
			n = await jh(t, Is(e, t.inputNames));
		}
		const s = {
			...e,
			...n
		}, r = await ap(this, s), a = this.sessions["text" === t ? "lm_head" : "gen_head"];
		if (!a) throw new Error(`Unable to find "${a}" generation head`);
		const o = await jh(a, Is(r, a.inputNames));
		return {
			...n,
			...r,
			...o
		};
	}
	prepare_inputs_for_generation(e, t, n) {
		const s = !!t.past_key_values;
		if (null !== n.guidance_scale && n.guidance_scale > 1 && (s ? t.input_ids = Xi([t.input_ids, t.input_ids], 0) : (t.input_ids = Xi([t.input_ids, nl(t.input_ids, BigInt(n.pad_token_id))], 0), t.attention_mask = Xi([t.attention_mask, nl(t.attention_mask, 0n)], 0))), !s && t.pixel_values || (t.pixel_values = tl([
			0,
			0,
			3,
			384,
			384
		], 1)), s) {
			const e = 0, n = 1, s = e > 0 ? 1 : 0, r = 1;
			t.images_seq_mask = new Ri("bool", new Array(e + n).fill(!0).fill(!1, 0, n), [r, e + n]), t.images_emb_mask = new Ri("bool", new Array(e).fill(!!s), [
				r,
				1,
				e
			]);
		}
		return t;
	}
	async generate(e) {
		return this._generation_mode = "text", super.generate(e);
	}
	async generate_images(e) {
		this._generation_mode = "image";
		const t = (e.inputs ?? e[this.main_input_name]).dims[1], n = (await super.generate(e)).slice(null, [t, null]), s = this.sessions.image_decode, { decoded_image: r } = await jh(s, { generated_tokens: n }), a = r.add_(1).mul_(127.5).clamp_(0, 255).to("uint8"), o = [];
		for (const i of a) {
			const e = fu.fromTensor(i);
			o.push(e);
		}
		return o;
	}
}, kx = class extends K_ {}, Ex = class extends kx {}, Ax = class extends kx {}, Cx = class extends K_ {
	forward_params = [
		"input_ids",
		"attention_mask",
		"encoder_outputs",
		"decoder_input_ids",
		"decoder_attention_mask",
		"past_key_values"
	];
	_apply_and_filter_by_delay_pattern_mask(e) {
		const [t, n] = e.dims, s = this.config.decoder.num_codebooks, r = n - s;
		let a = 0;
		for (let l = 0; l < e.size; ++l) {
			if (e.data[l] == this.config.decoder.pad_token_id) continue;
			const t = l % n - Math.floor(l / n) % s;
			t > 0 && t <= r && (e.data[a++] = e.data[l]);
		}
		const o = Math.floor(t / s), i = a / (o * s);
		return new Ri(e.type, e.data.slice(0, a), [
			o,
			s,
			i
		]);
	}
	prepare_inputs_for_generation(e, t, n) {
		const s = BigInt(this.config.decoder.pad_token_id);
		let r = structuredClone(e);
		for (let a = 0; a < r.length; ++a) for (let e = 0; e < r[a].length; ++e) a % this.config.decoder.num_codebooks >= e && (r[a][e] = s);
		return null !== n.guidance_scale && n.guidance_scale > 1 && (r = r.concat(r)), cp(0, r, t);
	}
	async generate(e) {
		const t = await super.generate(e), n = this._apply_and_filter_by_delay_pattern_mask(t).unsqueeze_(0), { audio_values: s } = await jh(this.sessions.encodec_decode, { audio_codes: n });
		return s;
	}
}, Tx = class extends K_ {}, Sx = class extends Tx {}, Fx = class extends Tx {}, Ix = class extends K_ {}, Px = class extends Ix {}, Lx = class extends Ix {}, Ox = class extends K_ {}, zx = class extends Ox {}, Nx = class extends Ox {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, Bx = class extends Ox {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, $x = class extends Ox {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, Dx = class extends Ox {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, Rx = class extends K_ {}, Gx = class extends Rx {}, Ux = class extends K_ {}, Vx = class extends Ux {}, jx = class extends Ux {}, qx = class extends K_ {}, Wx = class extends qx {}, Hx = class extends qx {}, Qx = class extends K_ {}, Xx = class extends Qx {}, Jx = class extends Qx {}, Yx = class extends K_ {}, Kx = class extends Yx {}, Zx = class extends Yx {}, ev = class extends K_ {}, tv = class extends ev {}, nv = class extends ev {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, sv = class extends K_ {}, rv = class extends sv {}, av = class extends sv {}, ov = class extends K_ {}, iv = class extends ov {}, lv = class extends ov {}, cv = class extends K_ {}, uv = class extends cv {}, dv = class extends cv {}, hv = class extends K_ {}, _v = class extends hv {}, pv = class extends hv {}, fv = class extends Xg {}, mv = class extends K_ {}, gv = class extends mv {
	async _call(e) {
		return new Jh(await super._call(e));
	}
}, wv = class extends K_ {}, yv = class extends wv {}, bv = class extends wv {}, xv = class extends K_ {}, vv = class extends xv {}, Mv = class extends xv {}, kv = class extends K_ {}, Ev = class extends kv {}, Av = class extends kv {}, Cv = class extends K_ {}, Tv = class extends Cv {}, Sv = class extends Cv {}, Fv = class extends K_ {
	forward_params = [
		"input_ids",
		"inputs_embeds",
		"attention_mask",
		"position_ids",
		"pixel_values",
		"image_sizes",
		"past_key_values"
	];
}, Iv = class extends Fv {
	async forward({ input_ids: e = null, attention_mask: t = null, pixel_values: n = null, image_sizes: s = null, position_ids: r = null, inputs_embeds: a = null, past_key_values: o = null, generation_config: i = null, logits_processor: l = null, ...c }) {
		if (!a) {
			let t;
			if (n && 1 !== e.dims[1]) {
				if (!s) throw new Error("`image_sizes` must be provided when `pixel_values` is provided.");
				({image_features: t} = await jh(this.sessions.vision_encoder, {
					pixel_values: n,
					image_sizes: s
				}));
			} else {
				const e = this.config.normalized_config.hidden_size;
				t = new Ri("float32", [], [0, e]);
			}
			({inputs_embeds: a} = await jh(this.sessions.prepare_inputs_embeds, {
				input_ids: e,
				image_features: t
			}));
		}
		return await ap(this, {
			inputs_embeds: a,
			past_key_values: o,
			attention_mask: t,
			position_ids: r,
			generation_config: i,
			logits_processor: l
		}, !1);
	}
}, Pv = class extends K_ {}, Lv = class extends Pv {}, Ov = class extends Pv {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, zv = class extends K_ {}, Nv = class extends zv {}, Bv = class extends zv {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, $v = class extends K_ {}, Dv = class extends $v {}, Rv = class extends $v {}, Gv = class extends K_ {}, Uv = class extends Gv {}, Vv = class extends Gv {}, jv = class extends K_ {}, qv = class extends jv {}, Wv = class extends jv {}, Hv = class extends K_ {}, Qv = class extends Hv {}, Xv = class extends Hv {}, Jv = class extends K_ {}, Yv = class extends Jv {}, Kv = class extends Jv {}, Zv = class extends mw {}, eM = class extends gw {}, tM = class extends Zv {}, nM = class extends eM {}, sM = class extends Zv {}, rM = class extends sM {}, aM = class extends sM {}, oM = class extends rM {}, iM = class extends K_ {}, lM = class extends iM {}, cM = class extends iM {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, uM = class extends K_ {}, dM = class extends uM {}, hM = class extends uM {
	async _call(e) {
		return new _M(await super._call(e));
	}
}, _M = class extends Zf {}, pM = class extends K_ {}, fM = class extends pM {}, mM = class extends pM {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, gM = class extends pM {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, wM = class extends pM {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, yM = class extends pM {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, bM = class extends K_ {}, xM = class extends bM {}, vM = class extends bM {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, MM = class extends bM {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, kM = class extends bM {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, EM = class extends bM {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, AM = class extends K_ {}, CM = class extends AM {}, TM = class extends AM {
	async _call(e) {
		return new SM(await super._call(e));
	}
}, SM = class extends Zf {}, FM = class extends qh {
	constructor({ iou_scores: e, pred_masks: t }) {
		super(), this.iou_scores = e, this.pred_masks = t;
	}
}, IM = class extends K_ {}, PM = class extends IM {
	async get_image_embeddings({ pixel_values: e }) {
		return await ep(this, { pixel_values: e });
	}
	async forward(e) {
		e = e.image_embeddings && e.image_positional_embeddings ? { ...e } : {
			...e,
			...await this.get_image_embeddings(e)
		}, e.input_labels ??= sl(e.input_points.dims.slice(0, -1));
		const t = {
			image_embeddings: e.image_embeddings,
			image_positional_embeddings: e.image_positional_embeddings
		};
		return e.input_points && (t.input_points = e.input_points), e.input_labels && (t.input_labels = e.input_labels), e.input_boxes && (t.input_boxes = e.input_boxes), await jh(this.sessions.prompt_encoder_mask_decoder, t);
	}
	async _call(e) {
		return new FM(await super._call(e));
	}
}, LM = class extends qh {
	constructor({ iou_scores: e, pred_masks: t, object_score_logits: n }) {
		super(), this.iou_scores = e, this.pred_masks = t, this.object_score_logits = n;
	}
}, OM = class extends K_ {}, zM = class extends OM {
	async get_image_embeddings({ pixel_values: e }) {
		return await ep(this, { pixel_values: e });
	}
	async forward(e) {
		const { num_feature_levels: t } = this.config.vision_config;
		if ((e = Array.from({ length: t }, (e, t) => `image_embeddings.${t}`).some((t) => !e[t]) ? {
			...e,
			...await this.get_image_embeddings(e)
		} : { ...e }).input_points) {
			if (e.input_boxes && 1 !== e.input_boxes.dims[1]) throw new Error("When both `input_points` and `input_boxes` are provided, the number of boxes per image must be 1.");
			const t = e.input_points.dims;
			e.input_labels ??= sl(t.slice(0, -1)), e.input_boxes ??= tl([
				t[0],
				0,
				4
			], 0);
		} else {
			if (!e.input_boxes) throw new Error("At least one of `input_points` or `input_boxes` must be provided.");
			{
				const t = e.input_boxes.dims;
				e.input_labels = tl([
					t[0],
					t[1],
					0
				], -1n), e.input_points = tl([
					t[0],
					1,
					0,
					2
				], 0);
			}
		}
		const n = this.sessions.prompt_encoder_mask_decoder;
		return await jh(n, Is(e, n.inputNames));
	}
	async _call(e) {
		return new LM(await super._call(e));
	}
}, NM = class extends zM {}, BM = class extends zM {}, $M = class extends K_ {}, DM = class extends $M {}, RM = class extends $M {}, GM = class extends $M {}, UM = class extends K_ {}, VM = class extends UM {}, jM = class extends UM {}, qM = class extends UM {}, WM = class extends K_ {}, HM = class extends WM {}, QM = class extends WM {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "text_model"
		});
	}
}, XM = class extends gf {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "vision_model"
		});
	}
}, JM = class extends K_ {}, YM = class extends JM {}, KM = class extends JM {}, ZM = class extends gy {}, ek = class extends K_ {
	main_input_name = "input_values";
	forward_params = ["input_values"];
}, tk = class extends ek {
	async encode(e) {
		return await jh(this.sessions.encoder_model, e);
	}
	async decode(e) {
		return await jh(this.sessions.decoder_model, e);
	}
}, nk = class extends ek {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "encoder_model"
		});
	}
}, sk = class extends ek {
	static async from_pretrained(e, t = {}) {
		return super.from_pretrained(e, {
			...t,
			model_file_name: t.model_file_name ?? "decoder_model"
		});
	}
}, rk = class extends K_ {}, ak = class extends rk {}, ok = class extends rk {}, ik = class extends K_ {}, lk = class extends ik {}, ck = class extends ik {}, uk = class extends ik {
	async generate_speech(e, t, { threshold: n = .5, minlenratio: s = 0, maxlenratio: r = 20, vocoder: a = null } = {}) {
		const o = { input_ids: e }, { encoder_outputs: i, encoder_attention_mask: l } = await ep(this, o), c = i.dims[1] / this.config.reduction_factor, u = Math.floor(c * r), d = Math.floor(c * s), h = this.config.num_mel_bins;
		let _ = [], p = null, f = null, m = 0;
		for (;;) {
			++m;
			const e = W_(!!f);
			let s;
			s = f ? f.output_sequence_out : new Ri("float32", new Float32Array(h), [
				1,
				1,
				h
			]);
			let r = {
				use_cache_branch: e,
				output_sequence: s,
				encoder_attention_mask: l,
				speaker_embeddings: t,
				encoder_hidden_states: i
			};
			rp(this, r, p), f = await jh(this.sessions.decoder_model_merged, r), p = tp(f, p);
			const { prob: a, spectrum: o } = f;
			if (_.push(o), m >= d && (Array.from(a.data).filter((e) => e >= n).length > 0 || m >= u)) break;
		}
		const g = Xi(_), { waveform: w } = await jh(a.sessions.model, { spectrogram: g });
		return {
			spectrogram: g,
			waveform: w
		};
	}
}, dk = class extends K_ {
	main_input_name = "spectrogram";
}, hk = class extends K_ {}, _k = class extends hk {}, pk = class extends hk {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, fk = class extends hk {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, mk = class extends hk {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, gk = class extends K_ {}, wk = class extends gk {}, yk = class extends gk {}, bk = class extends K_ {}, xk = class extends bk {}, vk = class extends bk {}, Mk = class extends K_ {}, kk = class extends Mk {}, Ek = class extends K_ {}, Ak = class extends Ek {
	async generate_speech({ input_ids: e, attention_mask: t, style: n, num_inference_steps: s = 5, speed: r = 1.05 }) {
		const { sampling_rate: a, chunk_compress_factor: o, base_chunk_size: i, latent_dim: l } = this.config, { last_hidden_state: c, durations: u } = await jh(this.sessions.text_encoder, {
			input_ids: e,
			attention_mask: t,
			style: n
		}), d = u.div(r).mul_(a), h = i * o, _ = d.data, p = Int32Array.from(_, (e) => Math.ceil(e / h)), f = Math.max(...p), m = e.dims[0], g = new BigInt64Array(m * f);
		for (let E = 0; E < m; ++E) g.fill(1n, E * f, E * f + p[E]);
		const w = new Ri("int64", g, [m, f]), y = l * o, b = y * f;
		let x = function(e) {
			const t = e.reduce((e, t) => e * t, 1);
			return new Ri("float32", Float32Array.from({ length: t }, () => Eo.gauss()), e);
		}([
			m,
			y,
			f
		]);
		const v = x.data;
		for (let E = 0; E < m; ++E) if (p[E] !== f) for (let e = 0; e < y; ++e) v.fill(0, E * b + e * f + p[E], E * b + (e + 1) * f);
		const M = tl([m], s);
		for (let E = 0; E < s; ++E) {
			const e = tl([m], E);
			({denoised_latents: x} = await jh(this.sessions.latent_denoiser, {
				style: n,
				noisy_latents: x,
				latent_mask: w,
				encoder_outputs: c,
				attention_mask: t,
				timestep: e,
				num_inference_steps: M
			}));
		}
		const { waveform: k } = await jh(this.sessions.voice_decoder, { latents: x });
		return {
			waveform: k,
			durations: d
		};
	}
}, Ck = class extends K_ {}, Tk = class extends Ck {}, Sk = class extends Ck {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Fk = class extends Ck {}, Ik = class extends K_ {}, Pk = class extends Ik {}, Lk = class extends Ik {}, Ok = class extends K_ {
	forward_params = [
		"input_ids",
		"attention_mask",
		"encoder_outputs",
		"decoder_input_ids",
		"decoder_attention_mask",
		"past_key_values"
	];
}, zk = class extends Ok {}, Nk = class extends Ok {}, Bk = class extends K_ {}, $k = class extends Bk {}, Dk = class extends Bk {
	async _call(e) {
		return new Rk(await super._call(e));
	}
}, Rk = class extends Bm {}, Gk = class extends K_ {}, Uk = class extends Gk {}, Vk = class extends K_ {}, jk = class extends Vk {}, qk = class extends Vk {
	async _call(e) {
		return new Jh(await super._call(e));
	}
}, Wk = class extends Vk {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Hk = class extends K_ {}, Qk = class extends Hk {}, Xk = class extends Hk {
	async _call(e) {
		return new Jh(await super._call(e));
	}
}, Jk = class extends Hk {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, Yk = class extends Hk {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, Kk = class extends K_ {}, Zk = class extends Kk {}, eE = class extends Kk {}, tE = class extends K_ {
	main_input_name = "pixel_values";
	forward_params = [
		"pixel_values",
		"decoder_input_ids",
		"encoder_hidden_states",
		"past_key_values"
	];
}, nE = class extends K_ {}, sE = class extends nE {}, rE = class extends nE {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, aE = class extends K_ {}, oE = class extends aE {}, iE = class extends K_ {}, lE = class extends iE {}, cE = class extends iE {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, uE = class extends K_ {}, dE = class extends uE {
	async _call(e) {
		return new Yh(await super._call(e));
	}
}, hE = class extends K_ {}, _E = class extends hE {}, pE = class extends qh {
	constructor({ waveform: e, spectrogram: t }) {
		super(), this.waveform = e, this.spectrogram = t;
	}
}, fE = class extends K_ {}, mE = class extends fE {
	async _call(e) {
		return new pE(await super._call(e));
	}
}, gE = class extends Hw {}, wE = /* @__PURE__ */ new WeakMap();
async function yE(e, t) {
	const n = t.dims[2], s = Math.floor((1 + n - 3) / 2) + 1, r = new Ri("int64", BigInt64Array.from({ length: s }, (t, n) => BigInt(e.enc_past_seq_len + n)), [1, s]), a = e.enc_past_seq_len + s, o = sl([1, a]), { audio_embeds: i, present_padding_cache: l, ...c } = await jh(e.encoder_session, {
		input_features: t,
		attention_mask: o,
		position_ids: r,
		past_padding_cache: e.enc_padding_cache,
		...e.enc_kv_cache
	});
	"gpu-buffer" === e.enc_padding_cache.location && e.enc_padding_cache.dispose(), e.enc_padding_cache = l;
	for (const u in c) if (u.startsWith("present.")) {
		const t = u.replace("present", "past_key_values"), n = e.enc_kv_cache[t];
		"gpu-buffer" === n?.location && n.dispose(), e.enc_kv_cache[t] = c[u];
	}
	return e.enc_past_seq_len = a, i;
}
var bE = class extends p_ {
	constructor(e) {
		super(), this._s = e;
	}
	_call(e) {
		const t = this._s.stream_exhausted && 0 === this._s.audio_embed_queue.length;
		return e.map(() => t);
	}
}, xE = class extends K_ {
	forward_params = [
		"input_ids",
		"attention_mask",
		"position_ids",
		"past_key_values"
	];
}, vE = class extends xE {
	async forward({ input_ids: e, past_key_values: t, ...n }) {
		const s = e.dims[1], r = wE.get(this);
		r && await async function(e, t) {
			for (; e.audio_embed_total_tokens < t && !e.stream_exhausted;) {
				const t = await e.chunks_iter.next();
				if (t.done) {
					e.stream_exhausted = !0;
					break;
				}
				const n = await yE(e, t.value);
				e.audio_embed_queue.push({
					data: n.data,
					tokens: n.dims[1]
				}), e.audio_embed_total_tokens += n.dims[1];
			}
		}(r, r.audio_consumed + s);
		const { inputs_embeds: a } = await jh(this.sessions.embed_tokens, { input_ids: e });
		r && function(e, t, n) {
			if (0 === e.audio_embed_queue.length) return;
			const s = t.data;
			let r = 0, a = n;
			for (; a > 0 && e.audio_embed_queue.length > 0;) {
				const t = e.audio_embed_queue[0], n = t.tokens - e.audio_queue_offset, o = Math.min(a, n), i = e.audio_queue_offset * e.text_hidden_size;
				for (let a = 0; a < o * e.text_hidden_size; ++a) s[r * e.text_hidden_size + a] += t.data[i + a];
				r += o, a -= o, e.audio_queue_offset += o, e.audio_queue_offset >= t.tokens && (e.audio_embed_queue.shift(), e.audio_queue_offset = 0);
			}
			e.audio_consumed += n - a;
		}(r, a, s);
		const o = {
			inputs_embeds: a,
			...n
		};
		rp(this, o, t);
		const i = this.sessions.decoder_model_merged;
		return await jh(i, Is(o, i.inputNames));
	}
	async generate({ input_features: e, stopping_criteria: t, ...n }) {
		if (!e) throw new Error("input_features (generator/iterable) must be provided");
		const s = function(e, t) {
			const { text_config: n, audio_config: s } = e.config, r = e.sessions.audio_encoder, { num_mel_bins: a, hidden_size: o } = s, i = a + o, l = new v_(), c = Nh(s), u = { batch_size: 1 };
			let d = "float32";
			for (const f of r.inputMetadata) {
				if ("past_padding_cache" === f.name) {
					d = f.type;
					continue;
				}
				if (!c.has(f.name)) continue;
				const e = sp(f.shape, u), t = e.reduce((e, t) => e * t, 1), n = Di[f.type];
				l[f.name] = new Ri(f.type, new n(t), e);
			}
			const h = Di[d], _ = new Ri(d, new h(2 * i), [
				1,
				i,
				2
			]), p = t[Symbol.asyncIterator]?.() ?? t[Symbol.iterator]?.();
			if (!p) throw new Error("input_features must be iterable or async iterable");
			return {
				encoder_session: r,
				enc_kv_cache: l,
				enc_padding_cache: _,
				enc_past_seq_len: 0,
				audio_embed_queue: [],
				audio_embed_total_tokens: 0,
				audio_queue_offset: 0,
				audio_consumed: 0,
				stream_exhausted: !1,
				chunks_iter: p,
				text_hidden_size: n.hidden_size
			};
		}(this, e);
		wE.set(this, s);
		const r = new f_();
		r.push(new bE(s)), t && r.extend(t);
		try {
			return await super.generate({
				...n,
				stopping_criteria: r
			});
		} finally {
			s.enc_kv_cache.dispose(), wE.delete(this);
		}
	}
}, ME = class extends K_ {}, kE = class extends ME {}, EE = class extends ME {
	async _call(e) {
		return new Jh(await super._call(e));
	}
}, AE = class extends ME {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, CE = class extends qh {
	constructor({ logits: e, embeddings: t }) {
		super(), this.logits = e, this.embeddings = t;
	}
}, TE = class extends K_ {}, SE = class extends TE {}, FE = class extends TE {
	async _call(e) {
		return new Jh(await super._call(e));
	}
}, IE = class extends TE {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, PE = class extends TE {
	async _call(e) {
		return new CE(await super._call(e));
	}
}, LE = class extends TE {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, OE = class extends K_ {}, zE = class extends OE {}, NE = class extends __ {
	return_timestamps = null;
	return_token_timestamps = null;
	num_frames = null;
	alignment_heads = null;
	task = null;
	language = null;
	no_timestamps_token_id = null;
	prompt_ids = null;
	is_multilingual = null;
	lang_to_id = null;
	task_to_id = null;
	max_initial_timestamp_index = 1;
}, BE = class extends K_ {
	requires_attention_mask = !1;
	main_input_name = "input_features";
	forward_params = [
		"input_features",
		"attention_mask",
		"decoder_input_ids",
		"decoder_attention_mask",
		"past_key_values"
	];
}, $E = class extends BE {}, DE = class extends BE {
	_prepare_generation_config(e, t) {
		return super._prepare_generation_config(e, t, NE);
	}
	_retrieve_init_tokens(e) {
		const t = [e.decoder_start_token_id];
		let n = e.language;
		const s = e.task;
		if (e.is_multilingual) {
			n || (Os.warn("No language specified - defaulting to English (en)."), n = "en");
			const r = `<|${function(e) {
				e = e.toLowerCase();
				let t = lc.get(e);
				if (void 0 === t) {
					const n = e.match(/^<\|([a-z]{2})\|>$/);
					if (n && (e = n[1]), !ic.has(e)) {
						const t = 2 === e.length ? ic.keys() : ic.values();
						throw new Error(`Language "${e}" is not supported. Must be one of: ${JSON.stringify(Array.from(t))}`);
					}
					t = e;
				}
				return t;
			}(n)}|>`;
			t.push(e.lang_to_id[r]), t.push(e.task_to_id[s ?? "transcribe"]);
		} else if (n || s) throw new Error("Cannot specify `task` or `language` for an English-only model. If the model is intended to be multilingual, pass `is_multilingual=true` to generate, or update the generation config.");
		return !e.return_timestamps && e.no_timestamps_token_id && t.at(-1) !== e.no_timestamps_token_id ? t.push(e.no_timestamps_token_id) : e.return_timestamps && t.at(-1) === e.no_timestamps_token_id && (Os.warn("<|notimestamps|> prompt token is removed from generation_config since `return_timestamps` is set to `true`."), t.pop()), t.filter((e) => null != e);
	}
	async generate({ inputs: e = null, generation_config: t = null, logits_processor: n = null, stopping_criteria: s = null, ...r }) {
		t = this._prepare_generation_config(t, r);
		const a = r.decoder_input_ids instanceof Ri ? cl(r.decoder_input_ids) : r.decoder_input_ids ?? this._retrieve_init_tokens(t);
		if (t.return_timestamps && (n ??= new e_(), n.push(new a_(t, a))), t.begin_suppress_tokens && (n ??= new e_(), n.push(new r_(t.begin_suppress_tokens, a.length))), t.return_token_timestamps) {
			if (!t.alignment_heads) throw new Error("Model generation config has no `alignment_heads`, token-level timestamps not available. See https://gist.github.com/hollance/42e32852f24243b748ae6bc1f985b13a on how to add this property to the generation config.");
			"translate" === t.task && Os.warn("Token-level timestamps may not be reliable for task 'translate'."), t.output_attentions = !0, t.return_dict_in_generate = !0;
		}
		if (t.return_timestamps && !r.max_new_tokens) return this._generate_with_seek({
			inputs: e,
			generation_config: t,
			logits_processor: n,
			init_tokens: a,
			kwargs: r
		});
		const o = await super.generate({
			inputs: e,
			generation_config: t,
			logits_processor: n,
			decoder_input_ids: a,
			...r
		});
		return t.return_token_timestamps && (o.token_timestamps = this._extract_token_timestamps(o, t.alignment_heads, t.num_frames, .02, a.length)), o;
	}
	async _generate_with_seek({ inputs: e, generation_config: t, logits_processor: n, init_tokens: s, kwargs: r }) {
		const a = t.no_timestamps_token_id + 1, o = Array.isArray(t.eos_token_id) ? t.eos_token_id[0] : t.eos_token_id, i = t.return_token_timestamps, l = e, c = l.dims[2], u = 2 * this.config.max_source_positions;
		let d = 0;
		const h = [], _ = [];
		for (; d < c;) {
			const e = Math.min(d + u, c), p = l.slice(null, null, [d, e]);
			let f;
			const m = p.dims[2];
			if (m < u) {
				const e = l.dims[1], t = new Float32Array(e * u), n = p.data;
				for (let s = 0; s < e; ++s) t.set(n.subarray(s * m, (s + 1) * m), s * u);
				f = new Ri("float32", t, [
					1,
					e,
					u
				]);
			} else f = p;
			if (n) for (const t of n) "begin_index" in t && (t.begin_index = s.length);
			const g = await super.generate({
				inputs: f,
				generation_config: t,
				logits_processor: n,
				decoder_input_ids: s,
				...r
			}), w = (i ? g.sequences : g)[0].tolist().map(Number).slice(s.length);
			let y;
			if (i) {
				g.token_timestamps = this._extract_token_timestamps(g, t.alignment_heads, Math.floor((e - d) / 2), .02, s.length);
				const n = d / 2 * .02;
				y = g.token_timestamps[0].tolist().slice(s.length).map((e) => e + n);
			}
			if (w.length > 0 && w.at(-1) === o && w.pop(), 0 === w.length) break;
			const b = w.map((e) => e >= a), x = w.length >= 2 && b[w.length - 1] && !b[w.length - 2], v = [];
			for (let t = 0; t < w.length - 1; ++t) b[t] && b[t + 1] && v.push(t + 1);
			let M, k = w.length;
			if (v.length > 0) if (x) M = e - d;
			else {
				const e = v.at(-1);
				M = 2 * (w[e - 1] - a), k = e;
			}
			else M = e - d;
			const E = Math.floor(d / 2), A = a + 1500;
			for (let t = 0; t < k; ++t) w[t] >= a && (w[t] = Math.min(w[t] + E, A));
			h.push(...w.slice(0, k)), y && _.push(...y.slice(0, k)), d += M;
		}
		h.push(o);
		const p = [...s, ...h];
		if (i) {
			const e = new Ri("int64", p.map(BigInt), [1, p.length]), t = [
				...new Array(s.length).fill(0),
				..._,
				0
			];
			return {
				sequences: e,
				token_timestamps: new Ri("float32", new Float32Array(t), [1, t.length])
			};
		}
		return new Ri("int64", p.map(BigInt), [1, p.length]);
	}
	_extract_token_timestamps(e, t, n = null, s = .02, r = 0) {
		if (!e.cross_attentions) throw new Error("Model outputs must contain cross attentions to extract timestamps. This is most likely because the model was not exported with `output_attentions=True`.");
		null == n && Os.warn("`num_frames` has not been set, meaning the entire audio will be analyzed. This may lead to inaccurate token-level timestamps for short audios (< 30 seconds).");
		let a = this.config.median_filter_width;
		void 0 === a && (Os.warn("Model config has no `median_filter_width`, using default value of 7."), a = 7);
		const o = e.cross_attentions, i = Array.from({ length: this.config.decoder_layers }, (e, t) => Xi(o.map((e) => e[t]), 2)), l = Ji(t.map(([e, t]) => {
			if (e >= i.length) throw new Error(`Layer index ${e} is out of bounds for cross attentions (length ${i.length}).`);
			return n ? i[e].slice(null, t, null, [0, n]) : i[e].slice(null, t);
		})).transpose(1, 0, 2, 3), [c, u] = function(e, t = null, n = 1, s = !1) {
			const r = e.data, a = e.dims;
			if (null === t) {
				const t = r.reduce((e, t) => e + t, 0) / r.length, s = Math.sqrt(r.reduce((e, n) => e + (n - t) ** 2, 0) / (r.length - n)), a = new Ri(e.type, [t], []);
				return [new Ri(e.type, [s], []), a];
			}
			const o = Ki(e, t = Qi(t, a.length), s), i = o.data, [l, c, u] = Yi((e, t, n, s) => e + (t - i[s]) ** 2, e, t, s);
			for (let d = 0; d < c.length; ++d) c[d] = Math.sqrt(c[d] / (a[t] - n));
			return [new Ri(l, c, u), o];
		}(l, -2, 0, !0), d = l.clone();
		for (let f = 0; f < d.dims[0]; ++f) {
			const e = d[f];
			for (let t = 0; t < e.dims[0]; ++t) {
				const n = e[t], s = c[f][t][0].data, r = u[f][t][0].data;
				for (let e = 0; e < n.dims[0]; ++e) {
					let t = n[e].data;
					for (let e = 0; e < t.length; ++e) t[e] = (t[e] - r[e]) / s[e];
					t.set(ri(t, a));
				}
			}
		}
		const h = [Ki(r > 0 ? d.slice(null, null, [r, d.dims[2]], null) : d, 1)], _ = e.sequences.dims, p = new Ri("float32", new Float32Array(_[0] * _[1]), _);
		for (let f = 0; f < _[0]; ++f) {
			const [e, t] = oi(h[f].neg().squeeze_(0).tolist()), n = Ts([1], Array.from({ length: e.length - 1 }, (t, n) => e[n + 1] - e[n])).map((e) => !!e), a = [];
			for (let r = 0; r < n.length; ++r) n[r] && a.push(t[r] * s);
			const o = new Array(r).fill(0);
			o.push(...a), a.length > 0 && o.push(a.at(-1)), p[f].data.set(o);
		}
		return p;
	}
}, RE = class extends DE {}, GE = class extends K_ {}, UE = class extends GE {}, VE = class extends GE {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, jE = class extends GE {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, qE = class extends GE {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, WE = class extends GE {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, HE = class extends K_ {}, QE = class extends HE {}, XE = class extends HE {
	async _call(e) {
		return new Qh(await super._call(e));
	}
}, JE = class extends HE {
	async _call(e) {
		return new Wh(await super._call(e));
	}
}, YE = class extends HE {
	async _call(e) {
		return new Hh(await super._call(e));
	}
}, KE = class extends HE {
	async _call(e) {
		return new Xh(await super._call(e));
	}
}, ZE = class extends K_ {}, eA = class extends ZE {}, tA = class extends ZE {
	async _call(e) {
		return new nA(await super._call(e));
	}
}, nA = class extends qh {
	constructor({ logits: e, pred_boxes: t }) {
		super(), this.logits = e, this.pred_boxes = t;
	}
}, sA = class extends K_ {}, rA = class extends sA {}, aA = class extends sA {}, oA = new Map([
	["bert", "BertModel"],
	["eurobert", "EuroBertModel"],
	["neobert", "NeoBertModel"],
	["modernbert", "ModernBertModel"],
	["nomic_bert", "NomicBertModel"],
	["roformer", "RoFormerModel"],
	["electra", "ElectraModel"],
	["esm", "EsmModel"],
	["convbert", "ConvBertModel"],
	["camembert", "CamembertModel"],
	["deberta", "DebertaModel"],
	["deberta-v2", "DebertaV2Model"],
	["mpnet", "MPNetModel"],
	["albert", "AlbertModel"],
	["distilbert", "DistilBertModel"],
	["roberta", "RobertaModel"],
	["xlm", "XLMModel"],
	["xlm-roberta", "XLMRobertaModel"],
	["clap", "ClapModel"],
	["clip", "CLIPModel"],
	["clipseg", "CLIPSegModel"],
	["chinese_clip", "ChineseCLIPModel"],
	["siglip", "SiglipModel"],
	["jina_clip", "JinaCLIPModel"],
	["mobilebert", "MobileBertModel"],
	["squeezebert", "SqueezeBertModel"],
	["wav2vec2", "Wav2Vec2Model"],
	["wav2vec2-bert", "Wav2Vec2BertModel"],
	["unispeech", "UniSpeechModel"],
	["unispeech-sat", "UniSpeechSatModel"],
	["hubert", "HubertModel"],
	["wavlm", "WavLMModel"],
	["audio-spectrogram-transformer", "ASTModel"],
	["vits", "VitsModel"],
	["pyannote", "PyAnnoteModel"],
	["wespeaker-resnet", "WeSpeakerResNetModel"],
	["detr", "DetrModel"],
	["rt_detr", "RTDetrModel"],
	["rt_detr_v2", "RTDetrV2Model"],
	["rf_detr", "RFDetrModel"],
	["d_fine", "DFineModel"],
	["table-transformer", "TableTransformerModel"],
	["vit", "ViTModel"],
	["ijepa", "IJepaModel"],
	["pvt", "PvtModel"],
	["vit_msn", "ViTMSNModel"],
	["vit_mae", "ViTMAEModel"],
	["groupvit", "GroupViTModel"],
	["fastvit", "FastViTModel"],
	["mobilevit", "MobileViTModel"],
	["mobilevitv2", "MobileViTV2Model"],
	["owlvit", "OwlViTModel"],
	["owlv2", "Owlv2Model"],
	["beit", "BeitModel"],
	["deit", "DeiTModel"],
	["hiera", "HieraModel"],
	["convnext", "ConvNextModel"],
	["convnextv2", "ConvNextV2Model"],
	["dinov2", "Dinov2Model"],
	["dinov2_with_registers", "Dinov2WithRegistersModel"],
	["dinov3_vit", "DINOv3ViTModel"],
	["dinov3_convnext", "DINOv3ConvNextModel"],
	["resnet", "ResNetModel"],
	["swin", "SwinModel"],
	["swin2sr", "Swin2SRModel"],
	["donut-swin", "DonutSwinModel"],
	["yolos", "YolosModel"],
	["dpt", "DPTModel"],
	["glpn", "GLPNModel"],
	["hifigan", "SpeechT5HifiGan"],
	["efficientnet", "EfficientNetModel"],
	["decision_transformer", "DecisionTransformerModel"],
	["patchtst", "PatchTSTModel"],
	["patchtsmixer", "PatchTSMixerModel"],
	["mobilenet_v1", "MobileNetV1Model"],
	["mobilenet_v2", "MobileNetV2Model"],
	["mobilenet_v3", "MobileNetV3Model"],
	["mobilenet_v4", "MobileNetV4Model"],
	["maskformer", "MaskFormerModel"],
	["mgp-str", "MgpstrForSceneTextRecognition"],
	["style_text_to_speech_2", "StyleTextToSpeech2Model"],
	["openai_privacy_filter", "OpenAIPrivacyFilterModel"]
]), iA = new Map([
	["t5", "T5Model"],
	["longt5", "LongT5Model"],
	["mt5", "MT5Model"],
	["bart", "BartModel"],
	["mbart", "MBartModel"],
	["marian", "MarianModel"],
	["whisper", "WhisperModel"],
	["cohere_asr", "CohereAsrModel"],
	["m2m_100", "M2M100Model"],
	["blenderbot", "BlenderbotModel"],
	["blenderbot-small", "BlenderbotSmallModel"]
]), lA = new Map([
	["mimi", "MimiModel"],
	["dac", "DacModel"],
	["snac", "SnacModel"]
]), cA = new Map([
	["bloom", "BloomModel"],
	["jais", "JAISModel"],
	["gpt2", "GPT2Model"],
	["gpt_oss", "GptOssModel"],
	["gptj", "GPTJModel"],
	["gpt_bigcode", "GPTBigCodeModel"],
	["gpt_neo", "GPTNeoModel"],
	["gpt_neox", "GPTNeoXModel"],
	["codegen", "CodeGenModel"],
	["llama", "LlamaModel"],
	["apertus", "ApertusModel"],
	["nanochat", "NanoChatModel"],
	["arcee", "ArceeModel"],
	["afmoe", "AfmoeModel"],
	["lfm2", "Lfm2Model"],
	["lfm2_moe", "Lfm2MoeModel"],
	["smollm3", "SmolLM3Model"],
	["exaone", "ExaoneModel"],
	["olmo", "OlmoModel"],
	["olmo2", "Olmo2Model"],
	["olmo3", "Olmo3Model"],
	["olmo_hybrid", "OlmoHybridModel"],
	["mobilellm", "MobileLLMModel"],
	["granite", "GraniteModel"],
	["granitemoehybrid", "GraniteMoeHybridModel"],
	["cohere", "CohereModel"],
	["cohere2", "Cohere2Model"],
	["gemma", "GemmaModel"],
	["gemma2", "Gemma2Model"],
	["vaultgemma", "VaultGemmaModel"],
	["gemma3_text", "Gemma3Model"],
	["helium", "HeliumModel"],
	["glm", "GlmModel"],
	["glm_moe_dsa", "GlmMoeDsaModel"],
	["openelm", "OpenELMModel"],
	["qwen2", "Qwen2Model"],
	["qwen2_moe", "Qwen2MoeModel"],
	["qwen3", "Qwen3Model"],
	["qwen3_moe", "Qwen3MoeModel"],
	["qwen3_next", "Qwen3NextModel"],
	["phi", "PhiModel"],
	["phi3", "Phi3Model"],
	["mpt", "MptModel"],
	["opt", "OPTModel"],
	["mistral", "MistralModel"],
	["mistral4", "Mistral4Model"],
	["ministral", "MinistralModel"],
	["ministral3", "Ministral3Model"],
	["ernie4_5", "Ernie4_5ForCausalLM"],
	["starcoder2", "Starcoder2Model"],
	["deepseek_v3", "DeepseekV3Model"],
	["falcon", "FalconModel"],
	["falcon_h1", "FalconH1Model"],
	["nemotron_h", "NemotronHModel"],
	["solar_open", "SolarOpenModel"],
	["stablelm", "StableLmModel"],
	["modernbert-decoder", "ModernBertDecoderModel"],
	["hunyuan_v1_dense", "HunYuanDenseV1Model"],
	["youtu", "YoutuModel"]
]), uA = new Map([
	["speecht5", "SpeechT5ForSpeechToText"],
	["whisper", "WhisperForConditionalGeneration"],
	["lite-whisper", "LiteWhisperForConditionalGeneration"],
	["moonshine", "MoonshineForConditionalGeneration"],
	["cohere_asr", "CohereAsrForConditionalGeneration"]
]), dA = new Map([["speecht5", "SpeechT5ForTextToSpeech"]]), hA = new Map([
	["vits", "VitsModel"],
	["musicgen", "MusicgenForConditionalGeneration"],
	["supertonic", "SupertonicForConditionalGeneration"]
]), _A = new Map([
	["bert", "BertForSequenceClassification"],
	["eurobert", "EuroBertForSequenceClassification"],
	["neobert", "NeoBertForSequenceClassification"],
	["modernbert", "ModernBertForSequenceClassification"],
	["roformer", "RoFormerForSequenceClassification"],
	["electra", "ElectraForSequenceClassification"],
	["esm", "EsmForSequenceClassification"],
	["convbert", "ConvBertForSequenceClassification"],
	["camembert", "CamembertForSequenceClassification"],
	["deberta", "DebertaForSequenceClassification"],
	["deberta-v2", "DebertaV2ForSequenceClassification"],
	["mpnet", "MPNetForSequenceClassification"],
	["albert", "AlbertForSequenceClassification"],
	["distilbert", "DistilBertForSequenceClassification"],
	["roberta", "RobertaForSequenceClassification"],
	["xlm", "XLMForSequenceClassification"],
	["xlm-roberta", "XLMRobertaForSequenceClassification"],
	["bart", "BartForSequenceClassification"],
	["mbart", "MBartForSequenceClassification"],
	["mobilebert", "MobileBertForSequenceClassification"],
	["squeezebert", "SqueezeBertForSequenceClassification"]
]), pA = new Map([
	["bert", "BertForTokenClassification"],
	["eurobert", "EuroBertForTokenClassification"],
	["neobert", "NeoBertForTokenClassification"],
	["modernbert", "ModernBertForTokenClassification"],
	["roformer", "RoFormerForTokenClassification"],
	["electra", "ElectraForTokenClassification"],
	["esm", "EsmForTokenClassification"],
	["convbert", "ConvBertForTokenClassification"],
	["camembert", "CamembertForTokenClassification"],
	["deberta", "DebertaForTokenClassification"],
	["deberta-v2", "DebertaV2ForTokenClassification"],
	["mpnet", "MPNetForTokenClassification"],
	["distilbert", "DistilBertForTokenClassification"],
	["roberta", "RobertaForTokenClassification"],
	["xlm", "XLMForTokenClassification"],
	["xlm-roberta", "XLMRobertaForTokenClassification"],
	["openai_privacy_filter", "OpenAIPrivacyFilterForTokenClassification"]
]), fA = new Map([
	["t5", "T5ForConditionalGeneration"],
	["longt5", "LongT5ForConditionalGeneration"],
	["mt5", "MT5ForConditionalGeneration"],
	["bart", "BartForConditionalGeneration"],
	["mbart", "MBartForConditionalGeneration"],
	["marian", "MarianMTModel"],
	["m2m_100", "M2M100ForConditionalGeneration"],
	["blenderbot", "BlenderbotForConditionalGeneration"],
	["blenderbot-small", "BlenderbotSmallForConditionalGeneration"]
]), mA = new Map([
	["bloom", "BloomForCausalLM"],
	["gpt2", "GPT2LMHeadModel"],
	["gpt_oss", "GptOssForCausalLM"],
	["jais", "JAISLMHeadModel"],
	["gptj", "GPTJForCausalLM"],
	["gpt_bigcode", "GPTBigCodeForCausalLM"],
	["gpt_neo", "GPTNeoForCausalLM"],
	["gpt_neox", "GPTNeoXForCausalLM"],
	["codegen", "CodeGenForCausalLM"],
	["llama", "LlamaForCausalLM"],
	["nanochat", "NanoChatForCausalLM"],
	["apertus", "ApertusForCausalLM"],
	["llama4_text", "Llama4ForCausalLM"],
	["arcee", "ArceeForCausalLM"],
	["afmoe", "AfmoeForCausalLM"],
	["lfm2", "Lfm2ForCausalLM"],
	["lfm2_moe", "Lfm2MoeForCausalLM"],
	["smollm3", "SmolLM3ForCausalLM"],
	["exaone", "ExaoneForCausalLM"],
	["olmo", "OlmoForCausalLM"],
	["olmo2", "Olmo2ForCausalLM"],
	["olmo3", "Olmo3ForCausalLM"],
	["olmo_hybrid", "OlmoHybridForCausalLM"],
	["mobilellm", "MobileLLMForCausalLM"],
	["granite", "GraniteForCausalLM"],
	["granitemoehybrid", "GraniteMoeHybridForCausalLM"],
	["cohere", "CohereForCausalLM"],
	["cohere2", "Cohere2ForCausalLM"],
	["gemma", "GemmaForCausalLM"],
	["gemma2", "Gemma2ForCausalLM"],
	["vaultgemma", "VaultGemmaForCausalLM"],
	["gemma3_text", "Gemma3ForCausalLM"],
	["gemma3", "Gemma3ForCausalLM"],
	["helium", "HeliumForCausalLM"],
	["glm", "GlmForCausalLM"],
	["glm_moe_dsa", "GlmMoeDsaForCausalLM"],
	["openelm", "OpenELMForCausalLM"],
	["qwen2", "Qwen2ForCausalLM"],
	["qwen2_moe", "Qwen2MoeForCausalLM"],
	["qwen3", "Qwen3ForCausalLM"],
	["qwen3_moe", "Qwen3MoeForCausalLM"],
	["qwen3_next", "Qwen3NextForCausalLM"],
	["qwen2_vl", "Qwen2VLForCausalLM"],
	["qwen2_5_vl", "Qwen2_5_VLForCausalLM"],
	["qwen3_vl", "Qwen3VLForCausalLM"],
	["qwen3_vl_moe", "Qwen3VLMoeForCausalLM"],
	["qwen3_5", "Qwen3_5ForCausalLM"],
	["qwen3_5_text", "Qwen3_5ForCausalLM"],
	["qwen3_5_moe", "Qwen3_5MoeForCausalLM"],
	["gemma3n", "Gemma3nForCausalLM"],
	["gemma4", "Gemma4ForCausalLM"],
	["phi", "PhiForCausalLM"],
	["phi3", "Phi3ForCausalLM"],
	["mpt", "MptForCausalLM"],
	["opt", "OPTForCausalLM"],
	["mbart", "MBartForCausalLM"],
	["mistral", "MistralForCausalLM"],
	["mistral4", "Mistral4ForCausalLM"],
	["ministral", "MinistralForCausalLM"],
	["ministral3", "Ministral3ForCausalLM"],
	["ernie4_5", "Ernie4_5ForCausalLM"],
	["starcoder2", "Starcoder2ForCausalLM"],
	["deepseek_v3", "DeepseekV3ForCausalLM"],
	["falcon", "FalconForCausalLM"],
	["falcon_h1", "FalconH1ForCausalLM"],
	["nemotron_h", "NemotronHForCausalLM"],
	["trocr", "TrOCRForCausalLM"],
	["solar_open", "SolarOpenForCausalLM"],
	["stablelm", "StableLmForCausalLM"],
	["modernbert-decoder", "ModernBertDecoderForCausalLM"],
	["hunyuan_v1_dense", "HunYuanDenseV1ForCausalLM"],
	["youtu", "YoutuForCausalLM"],
	["phi3_v", "Phi3VForCausalLM"]
]), gA = new Map([["multi_modality", "MultiModalityCausalLM"]]), wA = new Map([
	["bert", "BertForMaskedLM"],
	["eurobert", "EuroBertForMaskedLM"],
	["neobert", "NeoBertForMaskedLM"],
	["modernbert", "ModernBertForMaskedLM"],
	["roformer", "RoFormerForMaskedLM"],
	["electra", "ElectraForMaskedLM"],
	["esm", "EsmForMaskedLM"],
	["convbert", "ConvBertForMaskedLM"],
	["camembert", "CamembertForMaskedLM"],
	["deberta", "DebertaForMaskedLM"],
	["deberta-v2", "DebertaV2ForMaskedLM"],
	["mpnet", "MPNetForMaskedLM"],
	["albert", "AlbertForMaskedLM"],
	["distilbert", "DistilBertForMaskedLM"],
	["roberta", "RobertaForMaskedLM"],
	["xlm", "XLMWithLMHeadModel"],
	["xlm-roberta", "XLMRobertaForMaskedLM"],
	["mobilebert", "MobileBertForMaskedLM"],
	["squeezebert", "SqueezeBertForMaskedLM"]
]), yA = new Map([
	["bert", "BertForQuestionAnswering"],
	["neobert", "NeoBertForQuestionAnswering"],
	["roformer", "RoFormerForQuestionAnswering"],
	["electra", "ElectraForQuestionAnswering"],
	["convbert", "ConvBertForQuestionAnswering"],
	["camembert", "CamembertForQuestionAnswering"],
	["deberta", "DebertaForQuestionAnswering"],
	["deberta-v2", "DebertaV2ForQuestionAnswering"],
	["mpnet", "MPNetForQuestionAnswering"],
	["albert", "AlbertForQuestionAnswering"],
	["distilbert", "DistilBertForQuestionAnswering"],
	["roberta", "RobertaForQuestionAnswering"],
	["xlm", "XLMForQuestionAnswering"],
	["xlm-roberta", "XLMRobertaForQuestionAnswering"],
	["mobilebert", "MobileBertForQuestionAnswering"],
	["squeezebert", "SqueezeBertForQuestionAnswering"]
]), bA = new Map([
	["vision-encoder-decoder", "VisionEncoderDecoderModel"],
	["idefics3", "Idefics3ForConditionalGeneration"],
	["smolvlm", "SmolVLMForConditionalGeneration"]
]), xA = new Map([
	["llava", "LlavaForConditionalGeneration"],
	["llava_onevision", "LlavaOnevisionForConditionalGeneration"],
	["moondream1", "Moondream1ForConditionalGeneration"],
	["florence2", "Florence2ForConditionalGeneration"],
	["qwen2_vl", "Qwen2VLForConditionalGeneration"],
	["qwen2_5_vl", "Qwen2_5_VLForConditionalGeneration"],
	["qwen3_vl", "Qwen3VLForConditionalGeneration"],
	["qwen3_vl_moe", "Qwen3VLMoeForConditionalGeneration"],
	["qwen3_5", "Qwen3_5ForConditionalGeneration"],
	["qwen3_5_moe", "Qwen3_5MoeForConditionalGeneration"],
	["lfm2_vl", "Lfm2VlForConditionalGeneration"],
	["idefics3", "Idefics3ForConditionalGeneration"],
	["smolvlm", "SmolVLMForConditionalGeneration"],
	["paligemma", "PaliGemmaForConditionalGeneration"],
	["llava_qwen2", "LlavaQwen2ForCausalLM"],
	["gemma3", "Gemma3ForConditionalGeneration"],
	["gemma3n", "Gemma3nForConditionalGeneration"],
	["gemma4", "Gemma4ForConditionalGeneration"],
	["mistral3", "Mistral3ForConditionalGeneration"],
	["lighton_ocr", "LightOnOcrForConditionalGeneration"],
	["glm_ocr", "GlmOcrForConditionalGeneration"]
]), vA = new Map([
	["granite_speech", "GraniteSpeechForConditionalGeneration"],
	["ultravox", "UltravoxModel"],
	["voxtral", "VoxtralForConditionalGeneration"],
	["voxtral_realtime", "VoxtralRealtimeForConditionalGeneration"]
]), MA = new Map([["vision-encoder-decoder", "VisionEncoderDecoderModel"]]), kA = new Map([
	["vit", "ViTForImageClassification"],
	["ijepa", "IJepaForImageClassification"],
	["pvt", "PvtForImageClassification"],
	["vit_msn", "ViTMSNForImageClassification"],
	["fastvit", "FastViTForImageClassification"],
	["mobilevit", "MobileViTForImageClassification"],
	["mobilevitv2", "MobileViTV2ForImageClassification"],
	["beit", "BeitForImageClassification"],
	["deit", "DeiTForImageClassification"],
	["hiera", "HieraForImageClassification"],
	["convnext", "ConvNextForImageClassification"],
	["convnextv2", "ConvNextV2ForImageClassification"],
	["dinov2", "Dinov2ForImageClassification"],
	["dinov2_with_registers", "Dinov2WithRegistersForImageClassification"],
	["resnet", "ResNetForImageClassification"],
	["swin", "SwinForImageClassification"],
	["segformer", "SegformerForImageClassification"],
	["efficientnet", "EfficientNetForImageClassification"],
	["mobilenet_v1", "MobileNetV1ForImageClassification"],
	["mobilenet_v2", "MobileNetV2ForImageClassification"],
	["mobilenet_v3", "MobileNetV3ForImageClassification"],
	["mobilenet_v4", "MobileNetV4ForImageClassification"]
]), EA = new Map([
	["detr", "DetrForObjectDetection"],
	["rt_detr", "RTDetrForObjectDetection"],
	["rt_detr_v2", "RTDetrV2ForObjectDetection"],
	["rf_detr", "RFDetrForObjectDetection"],
	["d_fine", "DFineForObjectDetection"],
	["table-transformer", "TableTransformerForObjectDetection"],
	["yolos", "YolosForObjectDetection"]
]), AA = new Map([
	["owlvit", "OwlViTForObjectDetection"],
	["owlv2", "Owlv2ForObjectDetection"],
	["grounding-dino", "GroundingDinoForObjectDetection"]
]), CA = new Map([["detr", "DetrForSegmentation"], ["clipseg", "CLIPSegForImageSegmentation"]]), TA = new Map([
	["segformer", "SegformerForSemanticSegmentation"],
	["sapiens", "SapiensForSemanticSegmentation"],
	["swin", "SwinForSemanticSegmentation"],
	["mobilenet_v1", "MobileNetV1ForSemanticSegmentation"],
	["mobilenet_v2", "MobileNetV2ForSemanticSegmentation"],
	["mobilenet_v3", "MobileNetV3ForSemanticSegmentation"],
	["mobilenet_v4", "MobileNetV4ForSemanticSegmentation"]
]), SA = new Map([["detr", "DetrForSegmentation"], ["maskformer", "MaskFormerForInstanceSegmentation"]]), FA = new Map([
	["sam", "SamModel"],
	["sam2", "Sam2Model"],
	["edgetam", "EdgeTamModel"],
	["sam3_tracker", "Sam3TrackerModel"]
]), IA = new Map([
	["wav2vec2", "Wav2Vec2ForCTC"],
	["wav2vec2-bert", "Wav2Vec2BertForCTC"],
	["unispeech", "UniSpeechForCTC"],
	["unispeech-sat", "UniSpeechSatForCTC"],
	["wavlm", "WavLMForCTC"],
	["hubert", "HubertForCTC"],
	["parakeet_ctc", "ParakeetForCTC"]
]), PA = new Map([
	["wav2vec2", "Wav2Vec2ForSequenceClassification"],
	["wav2vec2-bert", "Wav2Vec2BertForSequenceClassification"],
	["unispeech", "UniSpeechForSequenceClassification"],
	["unispeech-sat", "UniSpeechSatForSequenceClassification"],
	["wavlm", "WavLMForSequenceClassification"],
	["hubert", "HubertForSequenceClassification"],
	["audio-spectrogram-transformer", "ASTForAudioClassification"]
]), LA = new Map([["wavlm", "WavLMForXVector"]]), OA = new Map([
	["unispeech-sat", "UniSpeechSatForAudioFrameClassification"],
	["wavlm", "WavLMForAudioFrameClassification"],
	["wav2vec2", "Wav2Vec2ForAudioFrameClassification"],
	["pyannote", "PyAnnoteForAudioFrameClassification"]
]), zA = new Map([["vitmatte", "VitMatteForImageMatting"]]), NA = new Map([["patchtst", "PatchTSTForPrediction"], ["patchtsmixer", "PatchTSMixerForPrediction"]]), BA = new Map([["swin2sr", "Swin2SRForImageSuperResolution"]]), $A = new Map([
	["chmv2", "CHMv2ForDepthEstimation"],
	["dpt", "DPTForDepthEstimation"],
	["depth_anything", "DepthAnythingForDepthEstimation"],
	["glpn", "GLPNForDepthEstimation"],
	["sapiens", "SapiensForDepthEstimation"],
	["depth_pro", "DepthProForDepthEstimation"],
	["metric3d", "Metric3DForDepthEstimation"],
	["metric3dv2", "Metric3Dv2ForDepthEstimation"]
]), DA = new Map([["sapiens", "SapiensForNormalEstimation"]]), RA = new Map([["vitpose", "VitPoseForPoseEstimation"]]), GA = new Map([
	["clip", "CLIPVisionModelWithProjection"],
	["siglip", "SiglipVisionModel"],
	["jina_clip", "JinaCLIPVisionModel"]
]), UA = [
	[oA, M_],
	[iA, k_],
	[cA, T_],
	[lA, z_],
	[_A, M_],
	[pA, M_],
	[fA, E_],
	[uA, E_],
	[mA, C_],
	[gA, P_],
	[wA, M_],
	[yA, M_],
	[bA, A_],
	[xA, F_],
	[vA, O_],
	[kA, M_],
	[CA, M_],
	[SA, M_],
	[TA, M_],
	[zA, M_],
	[NA, M_],
	[BA, M_],
	[$A, M_],
	[DA, M_],
	[RA, M_],
	[EA, M_],
	[AA, M_],
	[FA, S_],
	[IA, M_],
	[PA, M_],
	[dA, E_],
	[hA, M_],
	[LA, M_],
	[OA, M_],
	[GA, M_]
];
for (const [LC, OC] of UA) for (const e of LC.values()) {
	X_.set(e, OC);
	const t = pp[e];
	Y_.set(t, e), J_.set(e, t);
}
var VA = [
	[
		"MusicgenForConditionalGeneration",
		Cx,
		I_
	],
	[
		"Phi3VForCausalLM",
		Iv,
		L_
	],
	[
		"CLIPTextModelWithProjection",
		bf,
		M_
	],
	[
		"SiglipTextModel",
		QM,
		M_
	],
	[
		"JinaCLIPTextModel",
		Ay,
		M_
	],
	[
		"ClapTextModelWithProjection",
		ff,
		M_
	],
	[
		"ClapAudioModelWithProjection",
		mf,
		M_
	],
	[
		"DacEncoderModel",
		im,
		M_
	],
	[
		"DacDecoderModel",
		lm,
		M_
	],
	[
		"MimiEncoderModel",
		fb,
		M_
	],
	[
		"MimiDecoderModel",
		mb,
		M_
	],
	[
		"SnacEncoderModel",
		nk,
		M_
	],
	[
		"SnacDecoderModel",
		sk,
		M_
	],
	[
		"Gemma3nForConditionalGeneration",
		sw,
		N_
	],
	[
		"Gemma4ForConditionalGeneration",
		aw,
		N_
	],
	[
		"SupertonicForConditionalGeneration",
		Ak,
		B_
	],
	[
		"ChatterboxModel",
		lf,
		$_
	],
	[
		"VoxtralRealtimeForConditionalGeneration",
		vE,
		D_
	]
];
for (const [LC, OC, zC] of VA) X_.set(LC, zC), Y_.set(OC, LC), J_.set(LC, OC);
var jA = new Map([
	["modnet", CA],
	["birefnet", CA],
	["isnet", CA],
	["ben", CA]
]);
for (const [LC, OC] of jA.entries()) OC.set(LC, "PreTrainedModel"), X_.set(LC, M_), J_.set(LC, K_);
var qA = new Set(jA.keys());
X_.set("PreTrainedModel", M_), Y_.set(K_, "PreTrainedModel");
var WA = {
	MODEL_FOR_SEQUENCE_CLASSIFICATION_MAPPING_NAMES: _A,
	MODEL_FOR_TOKEN_CLASSIFICATION_MAPPING_NAMES: pA,
	MODEL_FOR_TEXT_TO_SPECTROGRAM_MAPPING_NAMES: dA,
	MODEL_FOR_TEXT_TO_WAVEFORM_MAPPING_NAMES: hA,
	MODEL_FOR_MASKED_LM_MAPPING_NAMES: wA,
	MODEL_FOR_QUESTION_ANSWERING_MAPPING_NAMES: yA,
	MODEL_FOR_IMAGE_CLASSIFICATION_MAPPING_NAMES: kA,
	MODEL_FOR_IMAGE_SEGMENTATION_MAPPING_NAMES: CA,
	MODEL_FOR_SEMANTIC_SEGMENTATION_MAPPING_NAMES: TA,
	MODEL_FOR_UNIVERSAL_SEGMENTATION_MAPPING_NAMES: SA,
	MODEL_FOR_OBJECT_DETECTION_MAPPING_NAMES: EA,
	MODEL_FOR_ZERO_SHOT_OBJECT_DETECTION_MAPPING_NAMES: AA,
	MODEL_FOR_MASK_GENERATION_MAPPING_NAMES: FA,
	MODEL_FOR_CTC_MAPPING_NAMES: IA,
	MODEL_FOR_AUDIO_CLASSIFICATION_MAPPING_NAMES: PA,
	MODEL_FOR_AUDIO_XVECTOR_MAPPING_NAMES: LA,
	MODEL_FOR_AUDIO_FRAME_CLASSIFICATION_MAPPING_NAMES: OA,
	MODEL_FOR_DOCUMENT_QUESTION_ANSWERING_MAPPING_NAMES: MA,
	MODEL_FOR_IMAGE_MATTING_MAPPING_NAMES: zA,
	MODEL_FOR_IMAGE_TO_IMAGE_MAPPING_NAMES: BA,
	MODEL_FOR_DEPTH_ESTIMATION_MAPPING_NAMES: $A,
	MODEL_FOR_NORMAL_ESTIMATION_MAPPING_NAMES: DA,
	MODEL_FOR_POSE_ESTIMATION_MAPPING_NAMES: RA,
	MODEL_FOR_IMAGE_FEATURE_EXTRACTION_MAPPING_NAMES: GA,
	MODEL_FOR_IMAGE_TEXT_TO_TEXT_MAPPING_NAMES: xA,
	MODEL_FOR_AUDIO_TEXT_TO_TEXT_MAPPING_NAMES: vA,
	MODEL_FOR_SEQ_TO_SEQ_CAUSAL_LM_MAPPING_NAMES: fA,
	MODEL_FOR_SPEECH_SEQ_2_SEQ_MAPPING_NAMES: uA,
	MODEL_FOR_CAUSAL_LM_MAPPING_NAMES: mA,
	MODEL_FOR_VISION_2_SEQ_MAPPING_NAMES: bA
};
j_ = WA;
var HA = class {
	static MODEL_CLASS_MAPPINGS = null;
	static BASE_IF_FAIL = !1;
	static supports(e) {
		if (!this.MODEL_CLASS_MAPPINGS) return !1;
		for (const t of this.MODEL_CLASS_MAPPINGS) if (t.has(e)) return !0;
		return this.BASE_IF_FAIL;
	}
	static async from_pretrained(e, { progress_callback: t = null, config: n = null, cache_dir: s = null, local_files_only: r = !1, revision: a = "main", model_file_name: o = null, subfolder: i = "onnx", device: l = null, dtype: c = null, use_external_data_format: u = null, session_options: d = {} } = {}) {
		const h = {
			progress_callback: t,
			config: n,
			cache_dir: s,
			local_files_only: r,
			revision: a,
			model_file_name: o,
			subfolder: i,
			device: l,
			dtype: c,
			use_external_data_format: u,
			session_options: d
		};
		if (h.config = await $h.from_pretrained(e, h), !this.MODEL_CLASS_MAPPINGS) throw new Error("`MODEL_CLASS_MAPPINGS` not implemented for this type of `AutoClass`: " + this.name);
		const { model_type: _ } = h.config;
		for (const p of this.MODEL_CLASS_MAPPINGS) {
			let t = p.get(_);
			if (!t) {
				for (const e of p.values()) if (e[0] === _) {
					t = e;
					break;
				}
				if (!t) continue;
			}
			return await pp[t].from_pretrained(e, h);
		}
		if (this.BASE_IF_FAIL) return qA.has(_) || Os.warn(`Unknown model class "${_}", attempting to construct from base class.`), await K_.from_pretrained(e, h);
		throw Error(`Unsupported model type: ${_}`);
	}
}, QA = class extends HA {
	static MODEL_CLASS_MAPPINGS = UA.map((e) => e[0]);
	static BASE_IF_FAIL = !0;
}, XA = class extends HA {
	static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_SEQUENCE_CLASSIFICATION_MAPPING_NAMES];
}, JA = class extends HA {
	static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_SEQ_TO_SEQ_CAUSAL_LM_MAPPING_NAMES];
}, YA = class extends HA {
	static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_IMAGE_SEGMENTATION_MAPPING_NAMES];
}, KA = class extends HA {
	static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_SEMANTIC_SEGMENTATION_MAPPING_NAMES];
}, ZA = class extends HA {
	static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_UNIVERSAL_SEGMENTATION_MAPPING_NAMES];
};
async function eC(e) {
	return Array.isArray(e) || (e = [e]), await Promise.all(e.map((e) => fu.read(e)));
}
async function tC(e, t) {
	return Array.isArray(e) || (e = [e]), await Promise.all(e.map((e) => "string" == typeof e || e instanceof URL ? Cc(e, t) : e instanceof Float64Array ? new Float32Array(e) : e));
}
function nC(e, t) {
	t && (e = e.map((e) => 0 | e));
	const [n, s, r, a] = e;
	return {
		xmin: n,
		ymin: s,
		xmax: r,
		ymax: a
	};
}
var sC = class extends Ms {
	constructor({ task: e, model: t, tokenizer: n = null, processor: s = null }) {
		super(), this.task = e, this.model = t, this.tokenizer = n, this.processor = s;
	}
	async dispose() {
		await this.model.dispose();
	}
};
function rC(e) {
	const t = e[0];
	return "-" !== e[1] || "B" !== t && "I" !== t && "E" !== t && "S" !== t ? ["I", e] : [t, e.slice(2)];
}
function aC(e, t, n) {
	const s = [];
	let r = null;
	for (let a = 0; a < e.length; ++a) {
		const [t, n] = rC(e[a].entity);
		r === n && "B" !== t && "S" !== t ? (s[s.length - 1].end = a + 1, "E" === t && (r = null)) : (s.push({
			tag: n,
			start: a,
			end: a + 1
		}), r = "S" === t ? null : n);
	}
	return s.map(({ tag: s, start: r, end: a }) => {
		let o = 0;
		const i = [];
		for (let n = r; n < a; ++n) o += e[n].score, i.push(t[e[n].index]);
		return {
			entity_group: s,
			score: o / (a - r),
			word: n.decode(i, { skip_special_tokens: !0 })
		};
	});
}
var oC = class extends sC {
	_default_generation_config = { max_new_tokens: 256 };
	_key = "generated_text";
	async _call(e, t = {}) {
		Array.isArray(e) || (e = [e]), this.model.config.prefix && (e = e.map((e) => this.model.config.prefix + e));
		const n = this.model.config.task_specific_params;
		n && n[this.task] && n[this.task].prefix && (e = e.map((e) => n[this.task].prefix + e));
		const s = this.tokenizer, r = {
			padding: !0,
			truncation: !0
		};
		let a;
		a = "translation" === this.task && "_build_translation_inputs" in s ? s._build_translation_inputs(e, r, t) : s(e, r);
		const o = await this.model.generate({
			...a,
			...this._default_generation_config,
			...t
		});
		return s.batch_decode(o, { skip_special_tokens: !0 }).map((e) => ({ [this._key]: e }));
	}
};
function iC(e) {
	return Array.isArray(e) && e.every((e) => "role" in e && "content" in e);
}
var lC = {
	panoptic: "post_process_panoptic_segmentation",
	instance: "post_process_instance_segmentation",
	semantic: "post_process_semantic_segmentation"
}, cC = class extends sC {
	async _call(e, { threshold: t = .5, mask_threshold: n = .5, overlap_mask_area_threshold: s = .8, label_ids_to_fuse: r = null, target_sizes: a = null, subtask: o = null } = {}) {
		if (Array.isArray(e) && 1 !== e.length) throw Error("Image segmentation pipeline currently only supports a batch size of 1.");
		const i = await eC(e), l = i.map((e) => [e.height, e.width]), c = await this.processor(i), { inputNames: u, outputNames: d } = this.model.sessions.model;
		if (!u.includes("pixel_values")) {
			if (1 !== u.length) throw Error(`Expected a single input name, but got ${u.length} inputs: ${u}.`);
			const e = u[0];
			if (e in c) throw Error(`Input name ${e} already exists in the inputs.`);
			c[e] = c.pixel_values;
		}
		const h = await this.model(c);
		let _ = null;
		if (null !== o) _ = lC[o];
		else if (this.processor.image_processor) {
			for (const [m, g] of Object.entries(lC)) if (g in this.processor.image_processor) {
				_ = this.processor.image_processor[g].bind(this.processor.image_processor), o = m;
				break;
			}
		}
		const p = this.model.config.id2label, f = [];
		if (o) if ("panoptic" === o || "instance" === o) {
			const e = _(h, t, n, s, r, a ?? l)[0], o = e.segmentation;
			for (const t of e.segments_info) {
				const e = new Uint8ClampedArray(o.data.length);
				for (let s = 0; s < o.data.length; ++s) o.data[s] === t.id && (e[s] = 255);
				const n = new fu(e, o.dims[1], o.dims[0], 1);
				f.push({
					score: t.score,
					label: p[t.label_id],
					mask: n
				});
			}
		} else {
			if ("semantic" !== o) throw Error(`Subtask ${o} not supported.`);
			{
				const { segmentation: e, labels: t } = _(h, a ?? l)[0];
				for (const n of t) {
					const t = new Uint8ClampedArray(e.data.length);
					for (let r = 0; r < e.data.length; ++r) e.data[r] === n && (t[r] = 255);
					const s = new fu(t, e.dims[1], e.dims[0], 1);
					f.push({
						score: null,
						label: p[n],
						mask: s
					});
				}
			}
		}
		else {
			const e = 1e-5, t = h[d[0]];
			for (let n = 0; n < l.length; ++n) {
				const s = l[n], r = t[n];
				r.data.some((t) => t < -e || t > 1 + e) && r.sigmoid_();
				const a = await fu.fromTensor(r.mul_(255).to("uint8")).resize(s[1], s[0]);
				f.push({
					label: null,
					score: null,
					mask: a
				});
			}
		}
		return f;
	}
}, uC = Object.freeze({
	"text-classification": {
		pipeline: class extends sC {
			async _call(e, { top_k: t = 1 } = {}) {
				const n = this.tokenizer(e, {
					padding: !0,
					truncation: !0
				}), s = await this.model(n), { problem_type: r, id2label: a } = this.model.config, o = "multi_label_classification" === r ? (e) => e.sigmoid() : (e) => new Ri("float32", Jo(e.data), e.dims), i = [];
				for (const l of s.logits) {
					const e = await Vi(o(l), t), n = e[0].tolist(), s = e[1].tolist().map((e, t) => ({
						label: a ? a[e] : `LABEL_${e}`,
						score: n[t]
					}));
					1 === t ? i.push(...s) : i.push(s);
				}
				return Array.isArray(e) || 1 === t ? i : i[0];
			}
		},
		model: XA,
		default: { model: "Xenova/distilbert-base-uncased-finetuned-sst-2-english" },
		type: "text"
	},
	"token-classification": {
		pipeline: class extends sC {
			async _call(e, { ignore_labels: t = ["O"], aggregation_strategy: n = "none" } = {}) {
				if ("none" !== n && "simple" !== n) throw new Error(`Invalid aggregation_strategy: "${n}". Must be one of "none" or "simple".`);
				const s = Array.isArray(e), r = this.tokenizer(s ? e : [e], {
					padding: !0,
					truncation: !0
				}), a = (await this.model(r)).logits, o = this.model.config.id2label, i = [];
				for (let l = 0; l < a.dims[0]; ++l) {
					const e = r.input_ids[l].tolist(), s = a[l], c = [];
					for (let n = 0; n < s.dims[0]; ++n) {
						const r = s[n], a = Zo(r.data)[1], i = o ? o[a] : `LABEL_${a}`;
						if (t.includes(i)) continue;
						const l = this.tokenizer.decode([e[n]], { skip_special_tokens: !0 });
						if ("" === l) continue;
						const u = Jo(r.data);
						c.push({
							entity: i,
							score: u[a],
							index: n,
							word: l
						});
					}
					i.push("simple" === n ? aC(c, e, this.tokenizer) : c);
				}
				return s ? i : i[0];
			}
		},
		model: class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_TOKEN_CLASSIFICATION_MAPPING_NAMES];
		},
		default: { model: "Xenova/bert-base-multilingual-cased-ner-hrl" },
		type: "text"
	},
	"question-answering": {
		pipeline: class extends sC {
			async _call(e, t, { top_k: n = 1 } = {}) {
				const s = this.tokenizer(e, {
					text_pair: t,
					padding: !0,
					truncation: !0
				}), r = Array.isArray(e), { start_logits: a, end_logits: o } = await this.model(s), i = s.input_ids.tolist(), l = s.attention_mask.tolist(), { all_special_ids: c, sep_token_id: u } = this.tokenizer, d = [];
				for (let h = 0; h < a.dims[0]; ++h) {
					const e = i[h], t = e.findIndex((e) => e == u), s = a[h].tolist(), r = o[h].tolist();
					for (let n = 1; n < s.length; ++n) (0 == l[h] || n <= t || -1 !== c.findIndex((t) => t == e[n])) && (s[n] = -Infinity, r[n] = -Infinity);
					const _ = Jo(s).map((e, t) => [e, t]), p = Jo(r).map((e, t) => [e, t]);
					_[0][0] = 0, p[0][0] = 0;
					const f = Ss(_, p).filter((e) => e[0][1] <= e[1][1]).map((e) => [
						e[0][1],
						e[1][1],
						e[0][0] * e[1][0]
					]).sort((e, t) => t[2] - e[2]), m = [];
					for (let a = 0; a < Math.min(f.length, n); ++a) {
						const [t, n, s] = f[a], r = e.slice(t, n + 1), o = this.tokenizer.decode(r, { skip_special_tokens: !0 });
						m.push({
							answer: o,
							score: s
						});
					}
					1 === n ? d.push(...m) : d.push(m);
				}
				return r ? d : d[0];
			}
		},
		model: class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_QUESTION_ANSWERING_MAPPING_NAMES];
		},
		default: { model: "Xenova/distilbert-base-cased-distilled-squad" },
		type: "text"
	},
	"fill-mask": {
		pipeline: class extends sC {
			async _call(e, { top_k: t = 5 } = {}) {
				const { mask_token_id: n, mask_token: s } = this.tokenizer, r = this.tokenizer(e, {
					padding: !0,
					truncation: !0
				}), { logits: a } = await this.model(r), o = [], i = r.input_ids.tolist();
				for (let l = 0; l < i.length; ++l) {
					const e = i[l], r = e.findIndex((e) => e == n);
					if (-1 === r) throw Error(`Mask token (${s}) not found in text.`);
					const c = a[l][r], u = await Vi(new Ri("float32", Jo(c.data), c.dims), t), d = u[0].tolist(), h = u[1].tolist();
					o.push(h.map((t, n) => {
						const s = e.slice();
						return s[r] = t, {
							score: d[n],
							token: Number(t),
							token_str: this.tokenizer.decode([t]),
							sequence: this.tokenizer.decode(s, { skip_special_tokens: !0 })
						};
					}));
				}
				return Array.isArray(e) ? o : o[0];
			}
		},
		model: class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_MASKED_LM_MAPPING_NAMES];
		},
		default: {
			model: "onnx-community/ettin-encoder-32m-ONNX",
			dtype: "fp32"
		},
		type: "text"
	},
	summarization: {
		pipeline: class extends oC {
			_key = "summary_text";
		},
		model: JA,
		default: { model: "Xenova/distilbart-cnn-6-6" },
		type: "text"
	},
	translation: {
		pipeline: class extends oC {
			_key = "translation_text";
		},
		model: JA,
		default: { model: "Xenova/t5-small" },
		type: "text"
	},
	"text2text-generation": {
		pipeline: oC,
		model: JA,
		default: { model: "Xenova/flan-t5-small" },
		type: "text"
	},
	"text-generation": {
		pipeline: class extends sC {
			_default_generation_config = { max_new_tokens: 256 };
			async _call(e, t = {}) {
				const { add_special_tokens: n, return_full_text: s, tools: r, documents: a, chat_template: o, tokenizer_encode_kwargs: i, ...l } = t;
				let c, u = !1, d = !1, h = n ?? (this.tokenizer.add_bos_token || this.tokenizer.add_eos_token) ?? !1, _ = i;
				if ("string" == typeof e) c = e = [e];
				else if (Array.isArray(e) && e.every((e) => "string" == typeof e)) u = !0, c = e;
				else {
					if (iC(e)) e = [e];
					else {
						if (!Array.isArray(e) || !e.every(iC)) throw new Error("Input must be a string, an array of strings, a Chat, or an array of Chats");
						u = !0;
					}
					d = !0;
					const t = {
						tokenize: !1,
						add_generation_prompt: !0,
						...Is({
							tools: r,
							documents: a,
							chat_template: o
						}, [
							"tools",
							"documents",
							"chat_template"
						]),
						..._
					};
					c = e.map((e) => this.tokenizer.apply_chat_template(e, t)), h = !1, _ = void 0;
				}
				const p = !d && (s ?? !0);
				this.tokenizer.padding_side = "left";
				const f = this.tokenizer(c, {
					add_special_tokens: h,
					padding: !0,
					truncation: !0,
					..._
				}), m = await this.model.generate({
					...f,
					...this._default_generation_config,
					...l
				}), g = this.tokenizer.batch_decode(m, { skip_special_tokens: !0 });
				let w;
				!p && f.input_ids.dims.at(-1) > 0 && (w = this.tokenizer.batch_decode(f.input_ids, { skip_special_tokens: !0 }).map((e) => e.length));
				const y = Array.from({ length: e.length }, (e) => []);
				for (let b = 0; b < g.length; ++b) {
					const t = Math.floor(b / m.dims[0] * e.length);
					w && (g[b] = g[b].slice(w[t])), y[t].push({ generated_text: d ? [...e[t], {
						role: "assistant",
						content: g[b]
					}] : g[b] });
				}
				return u || 1 !== y.length ? y : y[0];
			}
		},
		model: class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_CAUSAL_LM_MAPPING_NAMES];
		},
		default: {
			model: "onnx-community/Qwen3-0.6B-ONNX",
			dtype: "q4"
		},
		type: "text"
	},
	"zero-shot-classification": {
		pipeline: class extends sC {
			constructor(e) {
				super(e), this.label2id = Object.fromEntries(Object.entries(this.model.config.label2id).map(([e, t]) => [e.toLowerCase(), t])), this.entailment_id = this.label2id.entailment, void 0 === this.entailment_id && (Os.warn("Could not find 'entailment' in label2id mapping. Using 2 as entailment_id."), this.entailment_id = 2), this.contradiction_id = this.label2id.contradiction ?? this.label2id.not_entailment, void 0 === this.contradiction_id && (Os.warn("Could not find 'contradiction' in label2id mapping. Using 0 as contradiction_id."), this.contradiction_id = 0);
			}
			async _call(e, t, { hypothesis_template: n = "This example is {}.", multi_label: s = !1 } = {}) {
				const r = Array.isArray(e);
				r || (e = [e]), Array.isArray(t) || (t = [t]);
				const a = t.map((e) => n.replace("{}", e)), o = s || 1 === t.length, i = [];
				for (const l of e) {
					const e = [];
					for (const t of a) {
						const n = this.tokenizer(l, {
							text_pair: t,
							padding: !0,
							truncation: !0
						}), s = await this.model(n);
						o ? e.push([s.logits.data[this.contradiction_id], s.logits.data[this.entailment_id]]) : e.push(s.logits.data[this.entailment_id]);
					}
					const n = (o ? e.map((e) => Jo(e)[1]) : Jo(e)).map((e, t) => [e, t]).sort((e, t) => t[0] - e[0]);
					i.push({
						sequence: l,
						labels: n.map((e) => t[e[1]]),
						scores: n.map((e) => e[0])
					});
				}
				return r ? i : i[0];
			}
		},
		model: XA,
		default: { model: "Xenova/distilbert-base-uncased-mnli" },
		type: "text"
	},
	"audio-classification": {
		pipeline: class extends sC {
			async _call(e, { top_k: t = 5 } = {}) {
				const n = this.processor.feature_extractor.config.sampling_rate, s = await tC(e, n), r = this.model.config.id2label, a = [];
				for (const o of s) {
					const e = await this.processor(o), n = (await this.model(e)).logits[0], s = await Vi(new Ri("float32", Jo(n.data), n.dims), t), i = s[0].tolist(), l = s[1].tolist().map((e, t) => ({
						label: r ? r[e] : `LABEL_${e}`,
						score: i[t]
					}));
					a.push(l);
				}
				return Array.isArray(e) ? a : a[0];
			}
		},
		model: class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_AUDIO_CLASSIFICATION_MAPPING_NAMES];
		},
		default: { model: "Xenova/wav2vec2-base-superb-ks" },
		type: "audio"
	},
	"zero-shot-audio-classification": {
		pipeline: class extends sC {
			async _call(e, t, { hypothesis_template: n = "This is a sound of {}." } = {}) {
				const s = !Array.isArray(e);
				s && (e = [e]);
				const r = t.map((e) => n.replace("{}", e)), a = this.tokenizer(r, {
					padding: !0,
					truncation: !0
				}), o = this.processor.feature_extractor.config.sampling_rate, i = await tC(e, o), l = [];
				for (const c of i) {
					const e = await this.processor(c), n = Jo((await this.model({
						...a,
						...e
					})).logits_per_audio.data);
					l.push([...n].map((e, n) => ({
						score: e,
						label: t[n]
					})));
				}
				return s ? l[0] : l;
			}
		},
		model: QA,
		default: { model: "Xenova/clap-htsat-unfused" },
		type: "multimodal"
	},
	"automatic-speech-recognition": {
		pipeline: class extends sC {
			_default_generation_config = {};
			async _call(e, t = {}) {
				switch (t = {
					...this._default_generation_config,
					...t
				}, this.model.config.model_type) {
					case "whisper":
					case "lite-whisper": return this._call_whisper(e, t);
					case "wav2vec2":
					case "wav2vec2-bert":
					case "unispeech":
					case "unispeech-sat":
					case "hubert":
					case "parakeet_ctc": return this._call_wav2vec2(e, t);
					case "moonshine": return this._call_moonshine(e, t);
					case "cohere_asr": return this._call_cohere_asr(e, t);
					default: throw new Error(`AutomaticSpeechRecognitionPipeline does not support model type '${this.model.config.model_type}'.`);
				}
			}
			async _call_wav2vec2(e, t) {
				t.language && Os.warn("`language` parameter is not yet supported for `wav2vec2` models, defaulting to \"English\"."), t.task && Os.warn("`task` parameter is not yet supported for `wav2vec2` models, defaulting to \"transcribe\".");
				const n = !Array.isArray(e), s = n ? [e] : e, r = this.processor.feature_extractor.config.sampling_rate, a = await tC(s, r), o = [];
				for (const i of a) {
					const e = await this.processor(i), t = (await this.model(e)).logits[0], n = [];
					for (const r of t) n.push(Zo(r.data)[1]);
					const s = this.tokenizer.decode(n, { skip_special_tokens: !0 }).trim();
					o.push({ text: s });
				}
				return n ? o[0] : o;
			}
			async _call_whisper(e, t) {
				const n = t.return_timestamps ?? !1, s = t.chunk_length_s ?? 0, r = t.force_full_sequences ?? !1;
				let a = t.stride_length_s ?? null;
				const o = { ...t };
				"word" === n && (o.return_token_timestamps = !0, o.return_timestamps = !0);
				const i = !Array.isArray(e), l = i ? [e] : e, c = this.processor.feature_extractor.config, u = c.chunk_length / this.model.config.max_source_positions, d = c.hop_length, h = c.sampling_rate, _ = await tC(l, h), p = [];
				for (const f of _) {
					let e = [];
					if (s > 0) {
						if (null === a) a = s / 6;
						else if (s <= a) throw Error("`chunk_length_s` must be larger than `stride_length_s`.");
						const t = h * s, n = h * a, r = t - 2 * n;
						let o = 0;
						for (;;) {
							const s = o + t, a = f.subarray(o, s), i = await this.processor(a), l = 0 === o, c = s >= f.length;
							if (e.push({
								stride: [
									a.length,
									l ? 0 : n,
									c ? 0 : n
								],
								input_features: i.input_features,
								is_last: c
							}), c) break;
							o += r;
						}
					} else e = [{
						stride: [
							f.length,
							0,
							0
						],
						input_features: (await this.processor(f)).input_features,
						is_last: !0
					}];
					for (const s of e) {
						o.num_frames = Math.floor(s.stride[0] / d);
						const e = await this.model.generate({
							inputs: s.input_features,
							...o
						});
						if ("word" === n) {
							const t = e.sequences.tolist()[0], n = e.token_timestamps.tolist()[0], r = this.tokenizer.timestamp_begin, a = Math.max(t.findIndex((e) => Number(e) >= r), 0);
							s.tokens = t.slice(a), s.token_timestamps = n.slice(a).map((e) => ai(e, 2));
						} else s.tokens = e[0].tolist();
						s.stride = s.stride.map((e) => e / h);
					}
					const [t, i] = this.tokenizer._decode_asr(e, {
						time_precision: u,
						return_timestamps: n,
						force_full_sequences: r
					});
					p.push({
						text: t,
						...i
					});
				}
				return i ? p[0] : p;
			}
			async _call_moonshine(e, t) {
				const n = !Array.isArray(e), s = n ? [e] : e, r = this.processor.feature_extractor.config.sampling_rate, a = await tC(s, r), o = [];
				for (const i of a) {
					const e = await this.processor(i), n = 6 * Math.floor(i.length / r), s = await this.model.generate({
						max_new_tokens: n,
						...t,
						...e
					}), a = this.processor.batch_decode(s, { skip_special_tokens: !0 })[0];
					o.push({ text: a });
				}
				return n ? o[0] : o;
			}
			async _call_cohere_asr(e, t) {
				const n = !Array.isArray(e), s = n ? [e] : e, r = this.processor.feature_extractor, a = r.config.sampling_rate, o = await tC(s, a), i = t.language ?? "en", l = this.processor.get_decoder_prompt_ids(i), c = [];
				for (const u of o) {
					const e = r.split_audio(u), n = [];
					for (const r of e) {
						const e = await this.processor(r), s = await this.model.generate({
							...e,
							decoder_input_ids: l,
							...t
						}), a = this.tokenizer.decode(s[0].tolist(), { skip_special_tokens: !0 }).trim();
						n.push(a);
					}
					const s = this.processor.constructor.join_chunks(n, i);
					c.push({ text: s });
				}
				return n ? c[0] : c;
			}
		},
		model: [class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_SPEECH_SEQ_2_SEQ_MAPPING_NAMES];
		}, class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_CTC_MAPPING_NAMES];
		}],
		default: { model: "Xenova/whisper-tiny.en" },
		type: "multimodal"
	},
	"text-to-audio": {
		pipeline: class extends sC {
			DEFAULT_VOCODER_ID = "Xenova/speecht5_hifigan";
			constructor(e) {
				super(e), this.vocoder = e.vocoder ?? null;
			}
			async _prepare_speaker_embeddings(e, t) {
				if (("string" == typeof e || e instanceof URL) && (e = new Float32Array(await (await xs.fetch(e)).arrayBuffer())), e instanceof Float32Array) e = new Ri("float32", e, [e.length]);
				else if (!(e instanceof Ri)) throw new Error("Speaker embeddings must be a `Tensor`, `Float32Array`, `string`, or `URL`.");
				if (t > 1) {
					if (1 === e.dims[0]) e = e.repeat(t, 1);
					else if (e.dims[0] !== t) throw new Error(`Expected speaker embeddings batch size to be 1 or ${t}, but got ${e.dims[0]}.`);
				}
				return e;
			}
			_postprocess_waveform(e, t, n, s = null) {
				const r = t.data, [a, o] = t.dims, i = s ? s.data : null, l = [];
				for (let c = 0; c < a; ++c) {
					const e = i ? Math.min(Math.ceil(i[c]), o) : o, t = c * o;
					l.push(new Uc(r.slice(t, t + e), n));
				}
				return Array.isArray(e) ? l : l[0];
			}
			async _call(e, t) {
				return this.processor ? this._call_text_to_spectrogram(e, t) : "supertonic" === this.model.config.model_type ? this._call_supertonic(e, t) : this._call_text_to_waveform(e);
			}
			async _call_supertonic(e, { speaker_embeddings: t, num_inference_steps: n, speed: s }) {
				if (!t) throw new Error("Speaker embeddings must be provided for Supertonic models.");
				const { sampling_rate: r, style_dim: a } = this.model.config, o = this.tokenizer(e, {
					padding: !0,
					truncation: !0
				}), i = o.input_ids.dims[0];
				t = (t = await this._prepare_speaker_embeddings(t, i)).view(i, -1, a);
				const { waveform: l, durations: c } = await this.model.generate_speech({
					...o,
					style: t,
					num_inference_steps: n,
					speed: s
				});
				return this._postprocess_waveform(e, l, r, c);
			}
			async _call_text_to_waveform(e) {
				const t = this.tokenizer(e, {
					padding: !0,
					truncation: !0
				}), { waveform: n } = await this.model(t), s = this.model.config.sampling_rate;
				return this._postprocess_waveform(e, n, s);
			}
			async _call_text_to_spectrogram(e, { speaker_embeddings: t }) {
				this.vocoder || (Os.info("No vocoder specified, using default HifiGan vocoder."), this.vocoder = await QA.from_pretrained(this.DEFAULT_VOCODER_ID, { dtype: "fp32" }));
				const { input_ids: n } = this.tokenizer(e, {
					padding: !0,
					truncation: !0
				}), s = n.dims[0];
				t = (t = await this._prepare_speaker_embeddings(t, s)).view(s, -1);
				const { waveform: r } = await this.model.generate_speech(n, t, { vocoder: this.vocoder }), a = this.processor.feature_extractor.config.sampling_rate;
				return this._postprocess_waveform(e, r, a);
			}
		},
		model: [class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_TEXT_TO_WAVEFORM_MAPPING_NAMES];
		}, class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_TEXT_TO_SPECTROGRAM_MAPPING_NAMES];
		}],
		default: {
			model: "onnx-community/Supertonic-TTS-ONNX",
			dtype: "fp32"
		},
		type: "text"
	},
	"image-to-text": {
		pipeline: class extends sC {
			async _call(e, t = {}) {
				const n = Array.isArray(e), s = await eC(e), { pixel_values: r } = await this.processor(s), a = [];
				for (const o of r) {
					o.dims = [1, ...o.dims];
					const e = await this.model.generate({
						inputs: o,
						...t
					}), n = this.tokenizer.batch_decode(e, { skip_special_tokens: !0 }).map((e) => ({ generated_text: e.trim() }));
					a.push(n);
				}
				return n ? a : a[0];
			}
		},
		model: class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_VISION_2_SEQ_MAPPING_NAMES];
		},
		default: { model: "Xenova/vit-gpt2-image-captioning" },
		type: "multimodal"
	},
	"image-classification": {
		pipeline: class extends sC {
			async _call(e, { top_k: t = 5 } = {}) {
				const n = await eC(e), { pixel_values: s } = await this.processor(n), r = await this.model({ pixel_values: s }), { id2label: a } = this.model.config, o = [];
				for (const i of r.logits) {
					const e = await Vi(new Ri("float32", Jo(i.data), i.dims), t), n = e[0].tolist(), s = e[1].tolist().map((e, t) => ({
						label: a ? a[e] : `LABEL_${e}`,
						score: n[t]
					}));
					o.push(s);
				}
				return Array.isArray(e) ? o : o[0];
			}
		},
		model: class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_IMAGE_CLASSIFICATION_MAPPING_NAMES];
		},
		default: { model: "Xenova/vit-base-patch16-224" },
		type: "multimodal"
	},
	"image-segmentation": {
		pipeline: cC,
		model: [
			YA,
			KA,
			ZA
		],
		default: { model: "Xenova/detr-resnet-50-panoptic" },
		type: "multimodal"
	},
	"background-removal": {
		pipeline: class extends cC {
			async _call(e, t = {}) {
				const n = await eC(e), s = await super._call(e, t), r = n.map((e, t) => {
					const n = e.clone();
					return n.putAlpha(s[t].mask), n;
				});
				return Array.isArray(e) ? r : r[0];
			}
		},
		model: [
			YA,
			KA,
			ZA
		],
		default: { model: "Xenova/modnet" },
		type: "image"
	},
	"zero-shot-image-classification": {
		pipeline: class extends sC {
			async _call(e, t, { hypothesis_template: n = "This is a photo of {}" } = {}) {
				const s = Array.isArray(e), r = await eC(e), a = t.map((e) => n.replace("{}", e)), o = this.tokenizer(a, {
					padding: "siglip" !== this.model.config.model_type || "max_length",
					truncation: !0
				}), { pixel_values: i } = await this.processor(r), l = await this.model({
					...o,
					pixel_values: i
				}), c = "siglip" === this.model.config.model_type ? (e) => e.sigmoid().data : (e) => Jo(e.data), u = [];
				for (const d of l.logits_per_image) {
					const e = [...c(d)].map((e, n) => ({
						score: e,
						label: t[n]
					}));
					e.sort((e, t) => t.score - e.score), u.push(e);
				}
				return s ? u : u[0];
			}
		},
		model: QA,
		default: { model: "Xenova/clip-vit-base-patch32" },
		type: "multimodal"
	},
	"object-detection": {
		pipeline: class extends sC {
			async _call(e, { threshold: t = .9, percentage: n = !1 } = {}) {
				const s = Array.isArray(e);
				if (s && 1 !== e.length) throw Error("Object detection pipeline currently only supports a batch size of 1.");
				const r = await eC(e), a = n ? null : r.map((e) => [e.height, e.width]), { pixel_values: o, pixel_mask: i } = await this.processor(r), l = await this.model({
					pixel_values: o,
					pixel_mask: i
				}), c = this.processor.image_processor.post_process_object_detection(l, t, a), { id2label: u } = this.model.config, d = c.map((e) => e.boxes.map((t, s) => ({
					score: e.scores[s],
					label: u[e.classes[s]],
					box: nC(t, !n)
				})));
				return s ? d : d[0];
			}
		},
		model: class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_OBJECT_DETECTION_MAPPING_NAMES];
		},
		default: { model: "Xenova/detr-resnet-50" },
		type: "multimodal"
	},
	"zero-shot-object-detection": {
		pipeline: class extends sC {
			async _call(e, t, { threshold: n = .1, top_k: s = null, percentage: r = !1 } = {}) {
				const a = Array.isArray(e), o = await eC(e), i = this.tokenizer(t, {
					padding: !0,
					truncation: !0
				}), l = await this.processor(o), c = [];
				for (let u = 0; u < o.length; ++u) {
					const e = o[u], a = r ? null : [[e.height, e.width]], d = l.pixel_values[u].unsqueeze_(0), h = await this.model({
						...i,
						pixel_values: d
					});
					let _;
					if ("post_process_grounded_object_detection" in this.processor) {
						const e = this.processor.post_process_grounded_object_detection(h, i.input_ids, {
							box_threshold: n,
							text_threshold: n,
							target_sizes: a
						})[0];
						_ = e.boxes.map((t, n) => ({
							score: e.scores[n],
							label: e.labels[n],
							box: nC(t, !r)
						}));
					} else {
						const e = this.processor.image_processor.post_process_object_detection(h, n, a, !0)[0];
						_ = e.boxes.map((n, s) => ({
							score: e.scores[s],
							label: t[e.classes[s]],
							box: nC(n, !r)
						}));
					}
					_.sort((e, t) => t.score - e.score), null !== s && (_ = _.slice(0, s)), c.push(_);
				}
				return a ? c : c[0];
			}
		},
		model: class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_ZERO_SHOT_OBJECT_DETECTION_MAPPING_NAMES];
		},
		default: { model: "Xenova/owlvit-base-patch32" },
		type: "multimodal"
	},
	"document-question-answering": {
		pipeline: class extends sC {
			_default_generation_config = { max_new_tokens: 256 };
			async _call(e, t, n = {}) {
				if (Array.isArray(e)) {
					if (1 !== e.length) throw Error("Document Question Answering pipeline currently only supports a batch size of 1.");
					e = e[0];
				}
				const s = (await eC(e))[0], { pixel_values: r } = await this.processor(s), a = `<s_docvqa><s_question>${t}</s_question><s_answer>`, o = this.tokenizer(a, {
					add_special_tokens: !1,
					padding: !0,
					truncation: !0
				}).input_ids, i = await this.model.generate({
					inputs: r,
					max_length: this.model.config.decoder.max_position_embeddings,
					decoder_input_ids: o,
					...this._default_generation_config,
					...n
				}), l = this.tokenizer.batch_decode(i)[0].match(/<s_answer>(.*?)<\/s_answer>/);
				let c = null;
				return l && l.length >= 2 && (c = l[1].trim()), [{ answer: c }];
			}
		},
		model: class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_DOCUMENT_QUESTION_ANSWERING_MAPPING_NAMES];
		},
		default: { model: "Xenova/donut-base-finetuned-docvqa" },
		type: "multimodal"
	},
	"image-to-image": {
		pipeline: class extends sC {
			async _call(e) {
				const t = await eC(e), n = await this.processor(t), s = await this.model(n), r = [];
				for (const a of s.reconstruction) {
					const e = a.squeeze().clamp_(0, 1).mul_(255).round_().to("uint8");
					r.push(fu.fromTensor(e));
				}
				return Array.isArray(e) ? r : r[0];
			}
		},
		model: class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_IMAGE_TO_IMAGE_MAPPING_NAMES];
		},
		default: { model: "Xenova/swin2SR-classical-sr-x2-64" },
		type: "image"
	},
	"depth-estimation": {
		pipeline: class extends sC {
			async _call(e) {
				const t = await eC(e), n = await this.processor(t), { predicted_depth: s } = await this.model(n), r = [];
				for (let a = 0; a < t.length; ++a) {
					const e = s[a], [n, o] = e.dims.slice(-2), [i, l] = t[a].size, c = (await Ui(e.view(1, 1, n, o), {
						size: [l, i],
						mode: "bilinear"
					})).view(l, i), u = c.min().item(), d = c.max().item(), h = c.sub(u).div_(d - u).mul_(255).to("uint8").unsqueeze(0), _ = fu.fromTensor(h);
					r.push({
						predicted_depth: c,
						depth: _
					});
				}
				return Array.isArray(e) ? r : r[0];
			}
		},
		model: class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_DEPTH_ESTIMATION_MAPPING_NAMES];
		},
		default: { model: "onnx-community/depth-anything-v2-small" },
		type: "image"
	},
	"feature-extraction": {
		pipeline: class extends sC {
			async _call(e, { pooling: t = "none", normalize: n = !1, quantize: s = !1, precision: r = "binary" } = {}) {
				const a = this.tokenizer(e, {
					padding: !0,
					truncation: !0
				}), o = await this.model(a);
				let i = o.last_hidden_state ?? o.logits ?? o.token_embeddings;
				switch (t) {
					case "none": break;
					case "mean":
						i = function(e, t) {
							const n = e.data, s = t.data, r = [e.dims[0], e.dims[2]], a = new n.constructor(r[0] * r[1]), [o, i, l] = e.dims;
							let c = 0;
							for (let u = 0; u < o; ++u) {
								const e = u * l * i;
								for (let t = 0; t < l; ++t) {
									let r = 0, o = 0;
									const d = u * i, h = e + t;
									for (let e = 0; e < i; ++e) {
										const t = Number(s[d + e]);
										o += t, r += n[h + e * l] * t;
									}
									const _ = r / o;
									a[c++] = _;
								}
							}
							return new Ri(e.type, a, r);
						}(i, a.attention_mask);
						break;
					case "first_token":
					case "cls":
						i = i.slice(null, 0);
						break;
					case "last_token":
					case "eos":
						i = i.slice(null, -1);
						break;
					default: throw Error(`Pooling method '${t}' not supported.`);
				}
				return n && (i = i.normalize(2, -1)), s && (i = function(e, t) {
					if (2 !== e.dims.length) throw new Error("The tensor must have 2 dimensions");
					if (e.dims.at(-1) % 8 != 0) throw new Error("The last dimension of the tensor must be a multiple of 8");
					if (!["binary", "ubinary"].includes(t)) throw new Error("The precision must be either 'binary' or 'ubinary'");
					const n = "binary" === t, s = n ? "int8" : "uint8", r = n ? Int8Array : Uint8Array, a = e.data, o = new r(a.length / 8);
					for (let i = 0; i < a.length; ++i) {
						const e = a[i] > 0 ? 1 : 0, t = Math.floor(i / 8), s = i % 8;
						o[t] |= e << 7 - s, n && 0 === s && (o[t] -= 128);
					}
					return new Ri(s, o, [e.dims[0], e.dims[1] / 8]);
				}(i, r)), i;
			}
		},
		model: QA,
		default: {
			model: "onnx-community/all-MiniLM-L6-v2-ONNX",
			dtype: "fp32"
		},
		type: "text"
	},
	"image-feature-extraction": {
		pipeline: class extends sC {
			async _call(e, { pool: t = null } = {}) {
				const n = await eC(e), { pixel_values: s } = await this.processor(n), r = await this.model({ pixel_values: s });
				let a;
				if (t) {
					if (!("pooler_output" in r)) throw Error("No pooled output was returned. Make sure the model has a 'pooler' layer when using the 'pool' option.");
					a = r.pooler_output;
				} else a = r.last_hidden_state ?? r.logits ?? r.image_embeds;
				return a;
			}
		},
		model: [class extends HA {
			static MODEL_CLASS_MAPPINGS = [WA.MODEL_FOR_IMAGE_FEATURE_EXTRACTION_MAPPING_NAMES];
		}, QA],
		default: {
			model: "onnx-community/dinov3-vits16-pretrain-lvd1689m-ONNX",
			dtype: "fp32"
		},
		type: "image"
	}
}), dC = Object.freeze({
	"sentiment-analysis": "text-classification",
	ner: "token-classification",
	asr: "automatic-speech-recognition",
	"text-to-speech": "text-to-audio",
	embeddings: "feature-extraction"
});
async function hC(e, { config: t = null, dtype: n = null, device: s = null, model_file_name: r = null, include_tokenizer: a = !0, include_processor: o = !0 } = {}) {
	const i = await V_(e, {
		config: t,
		dtype: n,
		device: s,
		model_file_name: r
	});
	if (a) {
		const t = await il(e);
		i.push(...t);
	}
	if (o) {
		const t = await async function(e) {
			if (!e) throw new Error("modelId is required");
			return (await Ro(e, mc, {})).exists ? [mc] : [];
		}(e);
		i.push(...t);
	}
	return i;
}
async function _C(e, t, n = {}) {
	e = dC[e] ?? e;
	const s = uC[e];
	if (!s) throw new Error(`Unsupported pipeline task: ${e}. Must be one of [${Object.keys(uC).join(", ")}]`);
	const { type: r } = s, a = "audio" !== r && "image" !== r, o = "text" !== r, i = await hC(t, {
		...n,
		include_tokenizer: a,
		include_processor: o
	});
	if ("text-generation" === e) {
		const e = (l = G_(await U_(t, n)), R_[l]?.text_only_sessions ?? null);
		if (e) {
			const t = Object.values(e).map((e) => `onnx/${e}`);
			return i.filter((e) => !e.startsWith("onnx/") || t.some((t) => e.startsWith(t)));
		}
	}
	var l;
	return i;
}
var pC = class {
	put(e) {
		throw Error("Not implemented");
	}
	end() {
		throw Error("Not implemented");
	}
}, fC = hs.IS_PROCESS_AVAILABLE ? (e) => process.stdout.write(e) : (e) => {}, mC = class extends pC {
	constructor(e, { skip_prompt: t = !1, callback_function: n = null, token_callback_function: s = null, skip_special_tokens: r = !0, decode_kwargs: a = {}, ...o } = {}) {
		super(), this.tokenizer = e, this.skip_prompt = t, this.callback_function = n ?? fC, this.token_callback_function = s, this.decode_kwargs = {
			skip_special_tokens: r,
			...a,
			...o
		}, this.token_cache = [], this.print_len = 0, this.next_tokens_are_prompt = !0, this.special_ids = new Set(this.tokenizer.all_special_ids.map(BigInt));
	}
	put(e) {
		if (e.length > 1) throw Error("TextStreamer only supports batch size of 1");
		const t = this.next_tokens_are_prompt;
		if (t && (this.next_tokens_are_prompt = !1, this.skip_prompt)) return;
		const n = e[0];
		if (this.token_callback_function?.(n), 1 === n.length && this.special_ids.has(n[0])) {
			if (this.decode_kwargs.skip_special_tokens) return;
			if (this.token_cache.length > 0) {
				const e = this.tokenizer.decode(this.token_cache, this.decode_kwargs).slice(this.print_len);
				this.on_finalized_text(e, !1), this.token_cache = [], this.print_len = 0;
			}
			const e = this.tokenizer.decode(n, this.decode_kwargs);
			this.on_finalized_text(e, !1);
			return;
		}
		this.token_cache = Ts(this.token_cache, n);
		const s = this.tokenizer.decode(this.token_cache, this.decode_kwargs);
		let r;
		var a;
		t || s.endsWith("\n") ? (r = s.slice(this.print_len), this.token_cache = [], this.print_len = 0) : s.length > 0 && ((a = s.charCodeAt(s.length - 1)) >= 19968 && a <= 40959 || a >= 13312 && a <= 19903 || a >= 131072 && a <= 173791 || a >= 173824 && a <= 177983 || a >= 177984 && a <= 178207 || a >= 178208 && a <= 183983 || a >= 63744 && a <= 64255 || a >= 194560 && a <= 195103) ? (r = s.slice(this.print_len), this.print_len += r.length) : (r = s.slice(this.print_len, s.lastIndexOf(" ") + 1), this.print_len += r.length), this.on_finalized_text(r, !1);
	}
	end() {
		let e;
		this.token_cache.length > 0 ? (e = this.tokenizer.decode(this.token_cache, this.decode_kwargs).slice(this.print_len), this.token_cache = [], this.print_len = 0) : e = "", this.next_tokens_are_prompt = !0, this.on_finalized_text(e, !0);
	}
	on_finalized_text(e, t) {
		e.length > 0 && this.callback_function?.(e), t && this.callback_function === fC && hs.IS_PROCESS_AVAILABLE && this.callback_function?.("\n");
	}
}, gC = class extends mC {
	constructor(e, { skip_prompt: t = !1, callback_function: n = null, token_callback_function: s = null, on_chunk_start: r = null, on_chunk_end: a = null, on_finalize: o = null, time_precision: i = .02, skip_special_tokens: l = !0, decode_kwargs: c = {} } = {}) {
		super(e, {
			skip_prompt: t,
			skip_special_tokens: l,
			callback_function: n,
			token_callback_function: s,
			decode_kwargs: c
		}), this.timestamp_begin = e.timestamp_begin, this.on_chunk_start = r, this.on_chunk_end = a, this.on_finalize = o, this.time_precision = i, this.waiting_for_timestamp = !1;
	}
	put(e) {
		if (e.length > 1) throw Error("WhisperTextStreamer only supports batch size of 1");
		const t = e[0];
		if (1 === t.length) {
			const e = Number(t[0]) - this.timestamp_begin;
			if (e >= 0) {
				const n = e * this.time_precision;
				this.waiting_for_timestamp ? this.on_chunk_end?.(n) : this.on_chunk_start?.(n), this.waiting_for_timestamp = !this.waiting_for_timestamp, this.token_callback_function?.(t);
				return;
			}
		}
		return super.put(e);
	}
	end() {
		super.end(), this.on_finalize?.();
	}
};
const wC = yC;
function yC(e, t) {
	return e -= 263, xC()[e];
}
(function() {
	const e = yC, t = xC();
	for (;;) try {
		if (parseInt(e(279)) / 1 * (-parseInt(e(272)) / 2) + -parseInt(e(277)) / 3 * (parseInt(e(283)) / 4) + parseInt(e(266)) / 5 + parseInt(e(287)) / 6 + -parseInt(e(268)) / 7 * (parseInt(e(265)) / 8) + parseInt(e(284)) / 9 * (-parseInt(e(281)) / 10) + parseInt(e(276)) / 11 == 342663) break;
		t.push(t.shift());
	} catch (n) {
		t.push(t.shift());
	}
})();
const bC = [
	{
		id: wC(271),
		name: wC(263),
		huggingFaceId: "onnx-community/whisper-tiny",
		description: wC(269)
	},
	{
		id: wC(273),
		name: wC(285),
		huggingFaceId: wC(274),
		description: wC(282)
	},
	{
		id: wC(286),
		name: "Medium",
		huggingFaceId: wC(270),
		description: wC(264)
	},
	{
		id: wC(275),
		name: wC(267),
		huggingFaceId: wC(280),
		description: wC(278)
	}
];
function xC() {
	const e = [
		"Best",
		"220OsLwTi",
		"onnx-community/whisper-large-v3-turbo",
		"10hnqVlW",
		"Balanced",
		"262372UVAIHu",
		"3496464OlcRkS",
		"Small",
		"whisper-medium",
		"194028EJeFdL",
		"Tiny",
		"High",
		"5095784kegdSu",
		"499370fgCsJv",
		"Large v3 Turbo",
		"7FcTVfW",
		"Fastest",
		"onnx-community/whisper-medium",
		"whisper-tiny",
		"2764bsgYgm",
		"whisper-small",
		"onnx-community/whisper-small",
		"whisper-large-v3-turbo",
		"18382606HUfmeA",
		"6NHWTSo"
	];
	return (xC = function() {
		return e;
	})();
}
wC(273);
const vC = TC;
(function() {
	const e = TC, t = AC();
	for (;;) try {
		if (-parseInt(e(252)) / 1 * (-parseInt(e(299)) / 2) + -parseInt(e(297)) / 3 * (parseInt(e(340)) / 4) + parseInt(e(325)) / 5 + parseInt(e(307)) / 6 * (-parseInt(e(296)) / 7) + parseInt(e(304)) / 8 * (parseInt(e(294)) / 9) + parseInt(e(339)) / 10 * (parseInt(e(336)) / 11) + parseInt(e(321)) / 12 == 868938) break;
		t.push(t.shift());
	} catch (n) {
		t.push(t.shift());
	}
})();
const MC = [{
	name: vC(278),
	host: vC(295)
}];
let kC = vC(295), EC = !1;
function AC() {
	const e = [
		"chunks",
		"values",
		"bQcVR",
		"huggingFaceId",
		"push",
		" 不可用，请检查网络连接。",
		"transcribe-progress",
		"allowRemote",
		"NMEbu",
		"get",
		"max",
		"12973VVlATs",
		"remoteHost",
		"file",
		"map",
		"init-progress",
		"allowRemoteModels:",
		"message",
		"qMZwq",
		"error",
		"秒)...",
		"uokFy",
		"正在准备加载模型: ",
		"floor",
		"log",
		"正在探测源连通性: ",
		"modelId",
		"🛰️ 正在检测最佳下载源...",
		"正在转录:",
		"total",
		"cancelled",
		"allowLocalModels",
		"length",
		" 探测完成, 延迟: ",
		"type",
		"uWGaY",
		"audio",
		"official",
		"ms)",
		"timestamp",
		" 不可用",
		"set",
		"onmessage",
		"signal",
		"转录过程中发生未知错误",
		"[ASR Worker] 初始化失败:",
		"language",
		"all",
		"YFRyp",
		"识别完成！",
		" (延迟: ",
		"SwRIy",
		"sort",
		"999BKFEGm",
		"huggingface.co",
		"6708366ifbHhR",
		"18nenoiJ",
		"status",
		"246hskJTq",
		"Pjgqj",
		"olpEk",
		"init-error",
		"init",
		"1904rPxkIm",
		"automatic-speech-recognition",
		"postMessage",
		"6QsohMN",
		"transcribe",
		"模型未初始化",
		"filter",
		"HEAD",
		"Failed to load model",
		"ping",
		"round",
		"clear",
		"下载源 ",
		"latency",
		"cancel",
		"init-status",
		"progress",
		"498528LyerFw",
		"HaMGs",
		"host",
		"find",
		"741965VwSnVt",
		"loaded",
		"...",
		"isArray",
		"min",
		"准备开始 (时长: ",
		"transcribe-error",
		"[ASR Worker] 🚀 已选定最佳源: ",
		"text",
		"now",
		"allowRemoteModels",
		"242uoFcuU",
		"https://",
		"data",
		"360440DGRENS",
		"518484jzkBhg",
		"allowLocalModels:",
		"auto"
	];
	return (AC = function() {
		return e;
	})();
}
async function CC() {
	const e = vC;
	if (EC) return;
	self[e(306)]({
		type: e(319),
		status: e(268)
	});
	const t = (await Promise[e(288)](MC[e(255)]((t) => async function(e) {
		const t = vC;
		self[t(306)]({
			type: "init-status",
			status: t(266) + e + t(327)
		});
		const n = t(337) + e + "/", s = new AbortController(), r = setTimeout(() => s.abort(), 5e3), a = Date[t(334)]();
		try {
			if ("kTtCn" !== t(351)) {
				await fetch(n, {
					method: t(311),
					mode: "no-cors",
					signal: s[t(284)]
				}), clearTimeout(r);
				const o = Date[t(334)]() - a, i = {
					host: e,
					latency: o
				};
				return self[t(306)]({
					type: "init-status",
					status: "源 " + e + t(274) + o + "ms"
				}), i;
			}
			_0x14e90d += _0xd7e8c4, _0x48cec1 += _0x40434d;
		} catch (o) {
			if (t(300) !== t(289)) return clearTimeout(r), self.postMessage({
				type: t(319),
				status: "源 " + e + t(281)
			}), null;
			_0x36db16[t(280)] && _0xafdf30[t(280)].length >= 2 && _0x6601ee[t(347)]({
				text: _0x448bc5[t(333)],
				start: _0x29728a[t(280)][0] ?? 0,
				end: _0x186fca[t(280)][1] ?? _0x5a09d2[t(280)][0] ?? 0
			});
		}
	}(t[e(323)]))))[e(310)]((e) => null !== e);
	if (0 === t.length) {
		if (e(292) == e(292)) throw new Error(e(316) + kC + e(348));
		if (_0x432f2d) return;
		_0x5dd784[e(306)]({
			type: e(331),
			error: _0x207737 instanceof _0x41be4c ? _0x14071a[e(258)] : e(285)
		});
	}
	t[e(293)]((t, n) => t[e(317)] - n[e(317)]), kC = t[0][e(323)], self.postMessage({
		type: e(319),
		status: "🚀 已选定最佳源: " + kC + e(291) + t[0].latency + e(279)
	}), xs[e(253)] = "https://" + kC, EC = !0;
}
function TC(e, t) {
	return e -= 251, AC()[e];
}
xs.useBrowserCache = !0, xs[vC(335)] = !0, xs[vC(272)] = !1;
let SC = null, FC = !1, IC = -1;
const PC = /* @__PURE__ */ new Map();
self[vC(283)] = async (e) => {
	const t = vC, n = e[t(338)];
	switch (n[t(275)]) {
		case t(313):
			self[t(306)]({ type: "pong" });
			break;
		case t(303):
			await async function({ modelId: e, allowRemote: t = !0 }) {
				const n = vC;
				IC = -1, PC[n(315)]();
				try {
					xs[n(335)] = t, t && await CC();
					const s = bC[n(324)]((t) => t.id === e || t[n(346)] === e), r = s ? s.huggingFaceId : e;
					self[n(306)]({
						type: n(319),
						status: n(263) + r + n(327)
					}), SC = await async function(e, t = null, { progress_callback: n = null, config: s = null, cache_dir: r = null, local_files_only: a = !1, revision: o = "main", device: i = null, dtype: l = null, subfolder: c = "onnx", use_external_data_format: u = null, model_file_name: d = null, session_options: h = {} } = {}) {
						e = dC[e] ?? e;
						const _ = uC[e.split("_", 1)[0]];
						if (!_) throw Error(`Unsupported pipeline: ${e}. Must be one of [${Object.keys(uC)}]`);
						t || (t = _.default.model, Os.info(`No model specified. Using default model: "${t}".`), !l && _.default.dtype && (l = _.default.dtype));
						const p = await _C(e, t, {
							device: i,
							dtype: l
						});
						let f = {};
						n && (await Promise.all(p.map(async (e) => Ro(t, e)))).forEach((e, t) => {
							e.exists && (f[p[t]] = {
								loaded: 0,
								total: e.size ?? 0
							});
						});
						const m = {
							progress_callback: n ? new Es(n, f) : void 0,
							config: s,
							cache_dir: r,
							local_files_only: a,
							revision: o,
							device: i,
							dtype: l,
							subfolder: c,
							use_external_data_format: u,
							model_file_name: d,
							session_options: h
						}, g = p.includes("tokenizer.json"), w = p.includes("preprocessor_config.json"), y = _.model;
						let b;
						if (Array.isArray(y)) {
							const n = s ?? await $h.from_pretrained(t, m), { model_type: r } = n, a = y.find((e) => e.supports(r));
							if (!a) throw Error(`Unsupported model type "${r}" for task "${e}". None of the candidate model classes support this type.`);
							b = a.from_pretrained(t, {
								...m,
								config: n
							});
						} else b = y.from_pretrained(t, m);
						const [x, v, M] = await Promise.all([
							g ? _c.from_pretrained(t, m) : null,
							w ? Oh.from_pretrained(t, m) : null,
							b
						]), k = {
							task: e,
							model: M
						};
						return x && (k.tokenizer = x), v && (k.processor = v), ks(n, {
							status: "ready",
							task: e,
							model: t
						}), new _.pipeline(k);
					}(n(305), r, {
						dtype: "q4",
						device: n(342),
						progress_callback: (e) => {
							const t = n, s = e[t(254)];
							if (!s) return;
							const r = e[t(326)] ?? 0, a = e[t(270)] ?? 0;
							if (e.status === t(320) && a > 0) "uWGaY" !== t(276) ? (_0xc59417 = _0x3e4cf7, _0x2fa331[t(306)]({
								type: t(256),
								progress: _0x4cc76b
							})) : PC[t(282)](s, {
								loaded: r,
								total: a
							});
							else if ("done" === e[t(298)]) if (t(259) === t(301)) _0x512114 += _0xce5912 - _0x2b800a, _0x5e88f4 = _0x2d3382[t(329)](99, _0x3d4e85[t(264)](_0x11faa4 / _0xb3b2d5 * 100));
							else {
								const e = PC[t(352)](s);
								e && PC.set(s, {
									loaded: e[t(270)],
									total: e[t(270)]
								});
							}
							let o = 0, i = 0;
							for (const { loaded: n, total: u } of PC[t(344)]()) t(262) == t(262) ? (o += n, i += u) : (_0x27f97f[t(260)]("[ASR Worker] 初始化失败:", _0x378645), _0x4c2b29[t(306)]({
								type: t(302),
								error: _0x19bea8 instanceof _0x34abee ? _0x38184a.message : "Failed to load model"
							}));
							if (0 === i) return;
							const l = o / i * 100, c = Math[t(264)](l);
							c !== IC && (IC = c, self.postMessage({
								type: t(256),
								progress: c
							}));
						}
					}), self.postMessage({ type: "init-complete" });
				} catch (s) {
					self.postMessage({
						type: "init-error",
						error: s instanceof Error ? s.message : n(312)
					});
				}
			}({
				modelId: n[t(267)],
				allowRemote: n[t(350)] ?? !0
			});
			break;
		case t(308):
			await async function({ audio: e, language: t }) {
				const n = vC;
				if (!SC) {
					if ("HaMGs" === n(322)) return void self.postMessage({
						type: n(331),
						error: n(309)
					});
					throw new _0x2098f6(n(316) + _0x504796 + n(348));
				}
				FC = !1;
				const s = e[n(273)] / 16e3;
				Math[n(251)](1, Math.ceil(s / 25)), Date[n(334)]();
				let a = 0;
				self[n(306)]({
					type: n(349),
					progress: 0,
					message: n(330) + Math[n(314)](s) + n(261)
				});
				let o = 0, i = 0;
				const l = new gC(SC.tokenizer, {
					on_chunk_start: (e) => {
						i = e;
					},
					callback_function: (e) => {},
					on_chunk_end: (e) => {
						const t = n;
						if (t(345) != t(345)) {
							const e = _0x118c73[t(352)](_0x548821);
							e && _0x27e374[t(282)](_0x334cab, {
								loaded: e[t(270)],
								total: e[t(270)]
							});
						} else e > 0 && (o += e - i, a = Math[t(329)](99, Math[t(264)](o / s * 100))), self[t(306)]({
							type: "transcribe-progress",
							progress: a,
							message: t(269)
						});
					},
					on_finalize: () => {}
				});
				try {
					const s = await SC(e, {
						chunk_length_s: 30,
						stride_length_s: 5,
						language: t === n(342) ? void 0 : t,
						return_timestamps: !0,
						streamer: l
					});
					if (FC) return;
					const r = Array[n(328)](s) ? s[0] : s, a = [];
					if (r[n(343)]) for (const e of r.chunks) e[n(280)] && e[n(280)][n(273)] >= 2 && a[n(347)]({
						text: e[n(333)],
						start: e[n(280)][0] ?? 0,
						end: e[n(280)][1] ?? e[n(280)][0] ?? 0
					});
					self[n(306)]({
						type: "transcribe-progress",
						progress: 100,
						message: n(290)
					}), self[n(306)]({
						type: "transcribe-complete",
						text: r[n(333)],
						segments: a
					});
				} catch (c) {
					if (FC) return;
					self[n(306)]({
						type: n(331),
						error: c instanceof Error ? c[n(258)] : n(285)
					});
				}
			}({
				audio: n[t(277)],
				language: n[t(287)]
			});
			break;
		case t(318): FC = !0, self[t(306)]({ type: t(271) });
	}
};
