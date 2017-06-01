for (var i = this.legendOption.data, n = 0, a = i.length; a > n; n++)
    if (this._getName(i[n]) === e) return;
this.legendOption.data.push(e), this.setColor(e, t), this._selectedMap[e] = !0, this._hasDataMap[e] = !0
}, del: function(e) {
    for (var t = this.legendOption.data, i = 0, n = t.length; n > i; i++)
        if (this._getName(t[i]) === e) return this.legendOption.data.splice(i, 1)
}, getItemShape: function(e) {
    if (null != e)
        for (var t, i = 0, n = this.shapeList.length; n > i; i++)
            if (t = this.shapeList[i], t._name === e && "text" != t.type) return t
}, setItemShape: function(e, t) {
    for (var i, n = 0, a = this.shapeList.length; a > n; n++) i = this.shapeList[n], i._name === e && "text" != i.type && (this._selectedMap[e] || (t.style.color = "#ccc", t.style.strokeColor = "#ccc"), this.zr.modShape(i.id, t))
}, isSelected: function(e) {
    return "undefined" != typeof this._selectedMap[e] ? this._selectedMap[e] : !0
}, getSelectedMap: function() {
    return this._selectedMap
}, setSelected: function(e, t) {
    if ("single" === this.legendOption.selectedMode)
        for (var i in this._selectedMap) this._selectedMap[i] = !1;
    this._selectedMap[e] = t, this.messageCenter.dispatch(l.EVENT.LEGEND_SELECTED, null, {
        selected: this._selectedMap,
        target: e
    }, this.myChart)
}, onlegendSelected: function(e, t) {
    var i = e.selected;
    for (var n in i) this._selectedMap[n] != i[n] && (t.needRefresh = !0), this._selectedMap[n] = i[n]
}
};
var V = {
    line: function(e, t) {
        var i = t.height / 2;
        e.moveTo(t.x, t.y + i), e.lineTo(t.x + t.width, t.y + i)
    },
    pie: function(e, t) {
        var i = t.x,
            n = t.y,
            a = t.width,
            r = t.height;
        o.prototype.buildPath(e, {
            x: i + a / 2,
            y: n + r + 2,
            r: r,
            r0: 6,
            startAngle: 45,
            endAngle: 135
        })
    },
    eventRiver: function(e, t) {
        var i = t.x,
            n = t.y,
            a = t.width,
            o = t.height;
        e.moveTo(i, n + o), e.bezierCurveTo(i + a, n + o, i, n + 4, i + a, n + 4), e.lineTo(i + a, n), e.bezierCurveTo(i, n, i + a, n + o - 4, i, n + o - 4), e.lineTo(i, n + o)
    },
    k: function(e, t) {
        var i = t.x,
            n = t.y,
            a = t.width,
            o = t.height;
        s.prototype.buildPath(e, {
            x: i + a / 2,
            y: [n + 1, n + 1, n + o - 6, n + o],
            width: a - 6
        })
    },
    bar: function(e, t) {
        var i = t.x,
            n = t.y + 1,
            a = t.width,
            o = t.height - 2,
            r = 3;
        e.moveTo(i + r, n), e.lineTo(i + a - r, n), e.quadraticCurveTo(i + a, n, i + a, n + r), e.lineTo(i + a, n + o - r), e.quadraticCurveTo(i + a, n + o, i + a - r, n + o), e.lineTo(i + r, n + o), e.quadraticCurveTo(i, n + o, i, n + o - r), e.lineTo(i, n + r), e.quadraticCurveTo(i, n, i + r, n)
    },
    force: function(e, t) {
        r.prototype.iconLibrary.circle(e, t)
    },
    radar: function(e, t) {
        var i = 6,
            n = t.x + t.width / 2,
            a = t.y + t.height / 2,
            o = t.height / 2,
            r = 2 * Math.PI / i,
            s = -Math.PI / 2,
            l = n + o * Math.cos(s),
            h = a + o * Math.sin(s);
        e.moveTo(l, h), s += r;
        for (var m = 0, V = i - 1; V > m; m++) e.lineTo(n + o * Math.cos(s), a + o * Math.sin(s)), s += r;
        e.lineTo(l, h)
    }
};
V.chord = V.pie, V.map = V.bar;
for (var U in V) r.prototype.iconLibrary["legendicon" + U] = V[U];
return h.inherits(t, i), e("../component").define("legend", t), t
}), i("echarts/util/ecData", [], function() {
        function e(e, t, i, n, a, o, r, s) {
            var l;
            return "undefined" != typeof n && (l = null == n.value ? n : n.value), e._echartsData = {
                _series: t,
                _seriesIndex: i,
                _data: n,
                _dataIndex: a,
                _name: o,
                _value: l,
                _special: r,
                _special2: s
            }, e._echartsData
        }

        function t(e, t) {
            var i = e._echartsData;
            if (!t) return i;
            switch (t) {
                case "series":
                case "seriesIndex":
                case "data":
                case "dataIndex":
                case "name":
                case "value":
                case "special":
                case "special2":
                    return i && i["_" + t]
            }
            return null
        }

        function i(e, t, i) {
            switch (e._echartsData = e._echartsData || {}, t) {
                case "series":
                case "seriesIndex":
                case "data":
                case "dataIndex":
                case "name":
                case "value":
                case "special":
                case "special2":
                    e._echartsData["_" + t] = i
            }
        }

        function n(e, t) {
            t._echartsData = {
                _series: e._echartsData._series,
                _seriesIndex: e._echartsData._seriesIndex,
                _data: e._echartsData._data,
                _dataIndex: e._echartsData._dataIndex,
                _name: e._echartsData._name,
                _value: e._echartsData._value,
                _special: e._echartsData._special,
                _special2: e._echartsData._special2
            }
        }
        return {
            pack: e,
            set: i,
            get: t,
            clone: n
        }
    }), i("echarts/chart", [], function() {
        var e = {},
            t = {};
        return e.define = function(i, n) {
            return t[i] = n, e
        }, e.get = function(e) {
            return t[e]
        }, e
    }), i("zrender/tool/color", ["require", "../tool/util"], function(e) {
        function t(e) {
            D = e
        }

        function i() {
            D = N
        }

        function n(e, t) {
            return e = 0 | e, t = t || D, t[e % t.length]
        }

        function a(e) {
            B = e
        }

        function o() {
            H = B
        }

        function r() {
            return B
        }

        function s(e, t, i, n, a, o, r) {
            O || (O = P.getContext());
            for (var s = O.createRadialGradient(e, t, i, n, a, o), l = 0, h = r.length; h > l; l++) s.addColorStop(r[l][0], r[l][1]);
            return s.__nonRecursion = !0, s
        }

        function l(e, t, i, n, a) {
            O || (O = P.getContext());
            for (var o = O.createLinearGradient(e, t, i, n), r = 0, s = a.length; s > r; r++) o.addColorStop(a[r][0], a[r][1]);
            return o.__nonRecursion = !0, o
        }

        function h(e, t, i) {
            e = p(e), t = p(t), e = I(e), t = I(t);
            for (var n = [], a = (t[0] - e[0]) / i, o = (t[1] - e[1]) / i, r = (t[2] - e[2]) / i, s = (t[3] - e[3]) / i, l = 0, h = e[0], m = e[1], U = e[2], d = e[3]; i > l; l++) n[l] = V([S(Math.floor(h), [0, 255]), S(Math.floor(m), [0, 255]), S(Math.floor(U), [0, 255]), d.toFixed(4) - 0], "rgba"), h += a, m += o, U += r, d += s;
            return h = t[0], m = t[1], U = t[2], d = t[3], n[l] = V([h, m, U, d], "rgba"), n
        }

        function m(e, t) {
            var i = [],
                n = e.length;
            if (void 0 === t && (t = 20), 1 === n) i = h(e[0], e[0], t);
            else if (n > 1)
                for (var a = 0, o = n - 1; o > a; a++) {
                    var r = h(e[a], e[a + 1], t);
                    o - 1 > a && r.pop(), i = i.concat(r)
                }
            return i
        }

        function V(e, t) {
            if (t = t || "rgb", e && (3 === e.length || 4 === e.length)) {
                if (e = C(e, function(e) {
                        return e > 1 ? Math.ceil(e) : e
                    }), t.indexOf("hex") > -1) return "#" + ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1);
                if (t.indexOf("hs") > -1) {
                    var i = C(e.slice(1, 3), function(e) {
                        return e + "%"
                    });
                    e[1] = i[0], e[2] = i[1]
                }
                return t.indexOf("a") > -1 ? (3 === e.length && e.push(1), e[3] = S(e[3], [0, 1]), t + "(" + e.slice(0, 4).join(",") + ")") : t + "(" + e.slice(0, 3).join(",") + ")"
            }
        }

        function U(e) {
            e = L(e), e.indexOf("rgba") < 0 && (e = p(e));
            var t = [],
                i = 0;
            return e.replace(/[\d.]+/g, function(e) {
                e = 3 > i ? 0 | e : +e, t[i++] = e
            }), t
        }

        function d(e, t) {
            if (!E(e)) return e;
            var i = I(e),
                n = i[3];
            return "undefined" == typeof n && (n = 1), e.indexOf("hsb") > -1 ? i = F(i) : e.indexOf("hsl") > -1 && (i = T(i)), t.indexOf("hsb") > -1 || t.indexOf("hsv") > -1 ? i = A(i) : t.indexOf("hsl") > -1 && (i = M(i)), i[3] = n, V(i, t)
        }

        function p(e) {
            return d(e, "rgba")
        }

        function c(e) {
            return d(e, "rgb")
        }

        function u(e) {
            return d(e, "hex")
        }

        function y(e) {
            return d(e, "hsva")
        }

        function g(e) {
            return d(e, "hsv")
        }

        function b(e) {
            return d(e, "hsba")
        }

        function f(e) {
            return d(e, "hsb")
        }

        function k(e) {
            return d(e, "hsla")
        }

        function x(e) {
            return d(e, "hsl")
        }

        function _(e) {
            for (var t in G)
                if (u(G[t]) === u(e)) return t;
            return null
        }

        function L(e) {
            return String(e).replace(/\s+/g, "")
        }

        function W(e) {
            if (G[e] && (e = G[e]), e = L(e), e = e.replace(/hsv/i, "hsb"), /^#[\da-f]{3}$/i.test(e)) {
                e = parseInt(e.slice(1), 16);
                var t = (3840 & e) << 8,
                    i = (240 & e) << 4,
                    n = 15 & e;
                e = "#" + ((1 << 24) + (t << 4) + t + (i << 4) + i + (n << 4) + n).toString(16).slice(1)
            }
            return e
        }

        function X(e, t) {
            if (!E(e)) return e;
            var i = t > 0 ? 1 : -1;
            "undefined" == typeof t && (t = 0), t = Math.abs(t) > 1 ? 1 : Math.abs(t), e = c(e);
            for (var n = I(e), a = 0; 3 > a; a++) n[a] = 1 === i ? n[a] * (1 - t) | 0 : (255 - n[a]) * t + n[a] | 0;
            return "rgb(" + n.join(",") + ")"
        }

        function v(e) {
            if (!E(e)) return e;
            var t = I(p(e));
            return t = C(t, function(e) {
                return 255 - e
            }), V(t, "rgb")
        }

        function w(e, t, i) {
            if (!E(e) || !E(t)) return e;
            "undefined" == typeof i && (i = .5), i = 1 - S(i, [0, 1]);
            for (var n = 2 * i - 1, a = I(p(e)), o = I(p(t)), r = a[3] - o[3], s = ((n * r === -1 ? n : (n + r) / (1 + n * r)) + 1) / 2, l = 1 - s, h = [], m = 0; 3 > m; m++) h[m] = a[m] * s + o[m] * l;
            var U = a[3] * i + o[3] * (1 - i);
            return U = Math.max(0, Math.min(1, U)), 1 === a[3] && 1 === o[3] ? V(h, "rgb") : (h[3] = U, V(h, "rgba"))
        }

        function K() {
            return "#" + (Math.random().toString(16) + "0000").slice(2, 8)
        }

        function I(e) {
            e = W(e);
            var t = e.match(R);
            if (null === t) throw new Error("The color format error");
            var i, n, a, o = [];
            if (t[2]) i = t[2].replace("#", "").split(""), a = [i[0] + i[1], i[2] + i[3], i[4] + i[5]], o = C(a, function(e) {
                return S(parseInt(e, 16), [0, 255])
            });
            else if (t[4]) {
                var r = t[4].split(",");
                n = r[3], a = r.slice(0, 3), o = C(a, function(e) {
                    return e = Math.floor(e.indexOf("%") > 0 ? 2.55 * parseInt(e, 0) : e), S(e, [0, 255])
                }), "undefined" != typeof n && o.push(S(parseFloat(n), [0, 1]))
            } else if (t[5] || t[6]) {
                var s = (t[5] || t[6]).split(","),
                    l = parseInt(s[0], 0) / 360,
                    h = s[1],
                    m = s[2];
                n = s[3], o = C([h, m], function(e) {
                    return S(parseFloat(e) / 100, [0, 1])
                }), o.unshift(l), "undefined" != typeof n && o.push(S(parseFloat(n), [0, 1]))
            }
            return o
        }

        function J(e, t) {
            if (!E(e)) return e;
            null === t && (t = 1);
            var i = I(p(e));
            return i[3] = S(Number(t).toFixed(4), [0, 1]), V(i, "rgba")
        }

        function C(e, t) {
            if ("function" != typeof t) throw new TypeError;
            for (var i = e ? e.length : 0, n = 0; i > n; n++) e[n] = t(e[n]);
            return e
        }

        function S(e, t) {
            return e <= t[0] ? e = t[0] : e >= t[1] && (e = t[1]), e
        }

        function E(e) {
            return e instanceof Array || "string" == typeof e
        }

        function F(e) {
            var t, i, n, a = e[0],
                o = e[1],
                r = e[2];
            if (0 === o) t = 255 * r, i = 255 * r, n = 255 * r;
            else {
                var s = 6 * a;
                6 === s && (s = 0);
                var l = 0 | s,
                    h = r * (1 - o),
                    m = r * (1 - o * (s - l)),
                    V = r * (1 - o * (1 - (s - l))),
                    U = 0,
                    d = 0,
                    p = 0;
                0 === l ? (U = r, d = V, p = h) : 1 === l ? (U = m, d = r, p = h) : 2 === l ? (U = h, d = r, p = V) : 3 === l ? (U = h, d = m, p = r) : 4 === l ? (U = V, d = h, p = r) : (U = r, d = h, p = m), t = 255 * U, i = 255 * d, n = 255 * p
            }
            return [t, i, n]
        }

        function T(e) {
            var t, i, n, a = e[0],
                o = e[1],
                r = e[2];
            if (0 === o) t = 255 * r, i = 255 * r, n = 255 * r;
            else {
                var s;
                s = .5 > r ? r * (1 + o) : r + o - o * r;
                var l = 2 * r - s;
                t = 255 * z(l, s, a + 1 / 3), i = 255 * z(l, s, a), n = 255 * z(l, s, a - 1 / 3)
            }
            return [t, i, n]
        }

        function z(e, t, i) {
            return 0 > i && (i += 1), i > 1 && (i -= 1), 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + (t - e) * (2 / 3 - i) * 6 : e
        }

        function A(e) {
            var t, i, n = e[0] / 255,
                a = e[1] / 255,
                o = e[2] / 255,
                r = Math.min(n, a, o),
                s = Math.max(n, a, o),
                l = s - r,
                h = s;
            if (0 === l) t = 0, i = 0;
            else {
                i = l / s;
                var m = ((s - n) / 6 + l / 2) / l,
                    V = ((s - a) / 6 + l / 2) / l,
                    U = ((s - o) / 6 + l / 2) / l;
                n === s ? t = U - V : a === s ? t = 1 / 3 + m - U : o === s && (t = 2 / 3 + V - m), 0 > t && (t += 1), t > 1 && (t -= 1)
            }
            return t = 360 * t, i = 100 * i, h = 100 * h, [t, i, h]
        }

        function M(e) {
            var t, i, n = e[0] / 255,
                a = e[1] / 255,
                o = e[2] / 255,
                r = Math.min(n, a, o),
                s = Math.max(n, a, o),
                l = s - r,
                h = (s + r) / 2;
            if (0 === l) t = 0, i = 0;
            else {
                i = .5 > h ? l / (s + r) : l / (2 - s - r);
                var m = ((s - n) / 6 + l / 2) / l,
                    V = ((s - a) / 6 + l / 2) / l,
                    U = ((s - o) / 6 + l / 2) / l;
                n === s ? t = U - V : a === s ? t = 1 / 3 + m - U : o === s && (t = 2 / 3 + V - m), 0 > t && (t += 1), t > 1 && (t -= 1)
            }
            return t = 360 * t, i = 100 * i, h = 100 * h, [t, i, h]
        }
        var O, P = e("../tool/util"),
            D = ["#ff9277", " #dddd00", " #ffc877", " #bbe3ff", " #d5ffbb", "#bbbbff", " #ddb000", " #b0dd00", " #e2bbff", " #ffbbe3", "#ff7777", " #ff9900", " #83dd00", " #77e3ff", " #778fff", "#c877ff", " #ff77ab", " #ff6600", " #aa8800", " #77c7ff", "#ad77ff", " #ff77ff", " #dd0083", " #777700", " #00aa00", "#0088aa", " #8400dd", " #aa0088", " #dd0000", " #772e00"],
            N = D,
            B = "rgba(255,255,0,0.5)",
            H = B,
            R = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
            G = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#0ff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000",
                blanchedalmond: "#ffebcd",
                blue: "#00f",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#0ff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgrey: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#f0f",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                grey: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgrey: "#d3d3d3",
                lightgreen: "#90ee90",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#789",
                lightslategrey: "#789",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#0f0",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#f0f",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#f00",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#fff",
                whitesmoke: "#f5f5f5",
                yellow: "#ff0",
                yellowgreen: "#9acd32"
            };
        return {
            customPalette: t,
            resetPalette: i,
            getColor: n,
            getHighlightColor: r,
            customHighlight: a,
            resetHighlight: o,
            getRadialGradient: s,
            getLinearGradient: l,
            getGradientColors: m,
            getStepColors: h,
            reverse: v,
            mix: w,
            lift: X,
            trim: L,
            random: K,
            toRGB: c,
            toRGBA: p,
            toHex: u,
            toHSL: x,
            toHSLA: k,
            toHSB: f,
            toHSBA: b,
            toHSV: g,
            toHSVA: y,
            toName: _,
            toColor: V,
            toArray: U,
            alpha: J,
            getData: I
        }
    }), i("echarts/component/timeline", ["require", "./base", "zrender/shape/Rectangle", "../util/shape/Icon", "../util/shape/Chain", "../config", "zrender/tool/util", "zrender/tool/area", "zrender/tool/event", "../component"], function(e) {
        function t(e, t, i, a, o) {
            n.call(this, e, t, i, a, o);
            var r = this;
            if (r._onclick = function(e) {
                    return r.__onclick(e)
                }, r._ondrift = function(e, t) {
                    return r.__ondrift(this, e, t)
                }, r._ondragend = function() {
                    return r.__ondragend()
                }, r._setCurrentOption = function() {
                    var e = r.timelineOption;
                    r.currentIndex %= e.data.length;
                    var t = r.options[r.currentIndex] || {};
                    r.myChart._setOption(t, e.notMerge, !0), r.messageCenter.dispatch(s.EVENT.TIMELINE_CHANGED, null, {
                        currentIndex: r.currentIndex,
                        data: null != e.data[r.currentIndex].name ? e.data[r.currentIndex].name : e.data[r.currentIndex]
                    }, r.myChart)
                }, r._onFrame = function() {
                    r._setCurrentOption(), r._syncHandleShape(), r.timelineOption.autoPlay && (r.playTicket = setTimeout(function() {
                        return r.currentIndex += 1, !r.timelineOption.loop && r.currentIndex >= r.timelineOption.data.length ? (r.currentIndex = r.timelineOption.data.length - 1, void r.stop()) : void r._onFrame()
                    }, r.timelineOption.playInterval))
                }, this.setTheme(!1), this.options = this.option.options, this.currentIndex = this.timelineOption.currentIndex % this.timelineOption.data.length, this.timelineOption.notMerge || 0 === this.currentIndex || (this.options[this.currentIndex] = l.merge(this.options[this.currentIndex], this.options[0])), this.timelineOption.show && (this._buildShape(), this._syncHandleShape()), this._setCurrentOption(), this.timelineOption.autoPlay) {
                var r = this;
                this.playTicket = setTimeout(function() {
                    r.play()
                }, null != this.ecTheme.animationDuration ? this.ecTheme.animationDuration : s.animationDuration)
            }
        }

        function i(e, t) {
            var i = 2,
                n = t.x + i,
                a = t.y + i + 2,
                r = t.width - i,
                s = t.height - i,
                l = t.symbol;
            if ("last" === l) e.moveTo(n + r - 2, a + s / 3), e.lineTo(n + r - 2, a), e.lineTo(n + 2, a + s / 2), e.lineTo(n + r - 2, a + s), e.lineTo(n + r - 2, a + s / 3 * 2), e.moveTo(n, a), e.lineTo(n, a);
            else if ("next" === l) e.moveTo(n + 2, a + s / 3), e.lineTo(n + 2, a), e.lineTo(n + r - 2, a + s / 2), e.lineTo(n + 2, a + s), e.lineTo(n + 2, a + s / 3 * 2), e.moveTo(n, a), e.lineTo(n, a);
            else if ("play" === l)
                if ("stop" === t.status) e.moveTo(n + 2, a), e.lineTo(n + r - 2, a + s / 2), e.lineTo(n + 2, a + s), e.lineTo(n + 2, a);
                else {
                    var h = "both" === t.brushType ? 2 : 3;
                    e.rect(n + 2, a, h, s), e.rect(n + r - h - 2, a, h, s)
                } else if (l.match("image")) {
                var m = "";
                m = l.replace(new RegExp("^image:\\/\\/"), ""), l = o.prototype.iconLibrary.image, l(e, {
                    x: n,
                    y: a,
                    width: r,
                    height: s,
                    image: m
                })
            }
        }
        var n = e("./base"),
            a = e("zrender/shape/Rectangle"),
            o = e("../util/shape/Icon"),
            r = e("../util/shape/Chain"),
            s = e("../config");
        s.timeline = {
            zlevel: 0,
            z: 4,
            show: !0,
            type: "time",
            notMerge: !1,
            realtime: !0,
            x: 80,
            x2: 80,
            y2: 0,
            height: 50,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            controlPosition: "left",
            autoPlay: !1,
            loop: !0,
            playInterval: 2e3,
            lineStyle: {
                width: 1,
                color: "#666",
                type: "dashed"
            },
            label: {
                show: !0,
                interval: "auto",
                rotate: 0,
                textStyle: {
                    color: "#333"
                }
            },
            checkpointStyle: {
                symbol: "auto",
                symbolSize: "auto",
                color: "auto",
                borderColor: "auto",
                borderWidth: "auto",
                label: {
                    show: !1,
                    textStyle: {
                        color: "auto"
                    }
                }
            },
            controlStyle: {
                itemSize: 15,
                itemGap: 5,
                normal: {
                    color: "#333"
                },
                emphasis: {
                    color: "#1e90ff"
                }
            },
            symbol: "emptyDiamond",
            symbolSize: 4,
            currentIndex: 0
        };
        var l = e("zrender/tool/util"),
            h = e("zrender/tool/area"),
            m = e("zrender/tool/event");
        return t.prototype = {
            type: s.COMPONENT_TYPE_TIMELINE,
            _buildShape: function() {
                if (this._location = this._getLocation(), this._buildBackground(), this._buildControl(), this._chainPoint = this._getChainPoint(), this.timelineOption.label.show)
                    for (var e = this._getInterval(), t = 0, i = this._chainPoint.length; i > t; t += e) this._chainPoint[t].showLabel = !0;
                this._buildChain(), this._buildHandle();
                for (var t = 0, n = this.shapeList.length; n > t; t++) this.zr.addShape(this.shapeList[t])
            },
            _getLocation: function() {
                var e, t = this.timelineOption,
                    i = this.reformCssArray(this.timelineOption.padding),
                    n = this.zr.getWidth(),
                    a = this.parsePercent(t.x, n),
                    o = this.parsePercent(t.x2, n);
                null == t.width ? (e = n - a - o, o = n - o) : (e = this.parsePercent(t.width, n), o = a + e);
                var r, s, l = this.zr.getHeight(),
                    h = this.parsePercent(t.height, l);
                return null != t.y ? (r = this.parsePercent(t.y, l), s = r + h) : (s = l - this.parsePercent(t.y2, l), r = s - h), {
                    x: a + i[3],
                    y: r + i[0],
                    x2: o - i[1],
                    y2: s - i[2],
                    width: e - i[1] - i[3],
                    height: h - i[0] - i[2]
                }
            },
            _getReformedLabel: function(e) {
                var t = this.timelineOption,
                    i = null != t.data[e].name ? t.data[e].name : t.data[e],
                    n = t.data[e].formatter || t.label.formatter;
                return n && ("function" == typeof n ? i = n.call(this.myChart, i) : "string" == typeof n && (i = n.replace("{value}", i))), i
            },
            _getInterval: function() {
                var e = this._chainPoint,
                    t = this.timelineOption,
                    i = t.label.interval;
                if ("auto" === i) {
                    var n = t.label.textStyle.fontSize,
                        a = t.data,
                        o = t.data.length;
                    if (o > 3) {
                        var r, s, l = !1;
                        for (i = 0; !l && o > i;) {
                            i++, l = !0;
                            for (var m = i; o > m; m += i) {
                                if (r = e[m].x - e[m - i].x, 0 !== t.label.rotate) s = n;
                                else if (a[m].textStyle) s = h.getTextWidth(e[m].name, e[m].textFont);
                                else {
                                    var V = e[m].name + "",
                                        U = (V.match(/\w/g) || "").length,
                                        d = V.length - U;
                                    s = U * n * 2 / 3 + d * n
                                }
                                if (s > r) {
                                    l = !1;
                                    break
                                }
                            }
                        }
                    } else i = 1
                } else i = i - 0 + 1;
                return i
            },
            _getChainPoint: function() {
                function e(e) {
                    return null != h[e].name ? h[e].name : h[e] + ""
                }
                var t, i = this.timelineOption,
                    n = i.symbol.toLowerCase(),
                    a = i.symbolSize,
                    o = i.label.rotate,
                    r = i.label.textStyle,
                    s = this.getFont(r),
                    h = i.data,
                    m = this._location.x,
                    V = this._location.y + this._location.height / 4 * 3,
                    U = this._location.x2 - this._location.x,
                    d = h.length,
                    p = [];
                if (d > 1) {
                    var c = U / d;
                    if (c = c > 50 ? 50 : 20 > c ? 5 : c, U -= 2 * c, "number" === i.type)
                        for (var u = 0; d > u; u++) p.push(m + c + U / (d - 1) * u);
                    else {
                        p[0] = new Date(e(0).replace(/-/g, "/")), p[d - 1] = new Date(e(d - 1).replace(/-/g, "/")) - p[0];
                        for (var u = 1; d > u; u++) p[u] = m + c + U * (new Date(e(u).replace(/-/g, "/")) - p[0]) / p[d - 1];
                        p[0] = m + c
                    }
                } else p.push(m + U / 2);
                for (var y, g, b, f, k, x = [], u = 0; d > u; u++) m = p[u], y = h[u].symbol && h[u].symbol.toLowerCase() || n, y.match("empty") ? (y = y.replace("empty", ""), b = !0) : b = !1, y.match("star") && (g = y.replace("star", "") - 0 || 5, y = "star"), t = h[u].textStyle ? l.merge(h[u].textStyle || {}, r) : r, f = t.align || "center", o ? (f = o > 0 ? "right" : "left", k = [o * Math.PI / 180, m, V - 5]) : k = !1, x.push({
                    x: m,
                    n: g,
                    isEmpty: b,
                    symbol: y,
                    symbolSize: h[u].symbolSize || a,
                    color: h[u].color,
                    borderColor: h[u].borderColor,
                    borderWidth: h[u].borderWidth,
                    name: this._getReformedLabel(u),
                    textColor: t.color,
                    textAlign: f,
                    textBaseline: t.baseline || "middle",
                    textX: m,
                    textY: V - (o ? 5 : 0),
                    textFont: h[u].textStyle ? this.getFont(t) : s,
                    rotation: k,
                    showLabel: !1
                });
                return x
            },
            _buildBackground: function() {
                var e = this.timelineOption,
                    t = this.reformCssArray(this.timelineOption.padding),
                    i = this._location.width,
                    n = this._location.height;
                (0 !== e.borderWidth || "rgba(0,0,0,0)" != e.backgroundColor.replace(/\s/g, "")) && this.shapeList.push(new a({
                    zlevel: this.getZlevelBase(),
                    z: this.getZBase(),
                    hoverable: !1,
                    style: {
                        x: this._location.x - t[3],
                        y: this._location.y - t[0],
                        width: i + t[1] + t[3],
                        height: n + t[0] + t[2],
                        brushType: 0 === e.borderWidth ? "fill" : "both",
                        color: e.backgroundColor,
                        strokeColor: e.borderColor,
                        lineWidth: e.borderWidth
                    }
                }))
            },
            _buildControl: function() {
                var e = this,
                    t = this.timelineOption,
                    i = t.lineStyle,
                    n = t.controlStyle;
                if ("none" !== t.controlPosition) {
                    var a, r = n.itemSize,
                        s = n.itemGap;
                    "left" === t.controlPosition ? (a = this._location.x, this._location.x += 3 * (r + s)) : (a = this._location.x2 - (3 * (r + s) - s), this._location.x2 -= 3 * (r + s));
                    var h = this._location.y,
                        m = {
                            zlevel: this.getZlevelBase(),
                            z: this.getZBase() + 1,
                            style: {
                                iconType: "timelineControl",
                                symbol: "last",
                                x: a,
                                y: h,
                                width: r,
                                height: r,
                                brushType: "stroke",
                                color: n.normal.color,
                                strokeColor: n.normal.color,
                                lineWidth: i.width
                            },
                            highlightStyle: {
                                color: n.emphasis.color,
                                strokeColor: n.emphasis.color,
                                lineWidth: i.width + 1
                            },
                            clickable: !0
                        };
                    this._ctrLastShape = new o(m), this._ctrLastShape.onclick = function() {
                        e.last()
                    }, this.shapeList.push(this._ctrLastShape), a += r + s, this._ctrPlayShape = new o(l.clone(m)), this._ctrPlayShape.style.brushType = "fill", this._ctrPlayShape.style.symbol = "play", this._ctrPlayShape.style.status = this.timelineOption.autoPlay ? "playing" : "stop", this._ctrPlayShape.style.x = a, this._ctrPlayShape.onclick = function() {
                        "stop" === e._ctrPlayShape.style.status ? e.play() : e.stop()
                    }, this.shapeList.push(this._ctrPlayShape), a += r + s, this._ctrNextShape = new o(l.clone(m)), this._ctrNextShape.style.symbol = "next", this._ctrNextShape.style.x = a, this._ctrNextShape.onclick = function() {
                        e.next()
                    }, this.shapeList.push(this._ctrNextShape)
                }
            },
            _buildChain: function() {
                var e = this.timelineOption,
                    t = e.lineStyle;
                this._timelineShae = {
                    zlevel: this.getZlevelBase(),
                    z: this.getZBase(),
                    style: {
                        x: this._location.x,
                        y: this.subPixelOptimize(this._location.y, t.width),
                        width: this._location.x2 - this._location.x,
                        height: this._location.height,
                        chainPoint: this._chainPoint,
                        brushType: "both",
                        strokeColor: t.color,
                        lineWidth: t.width,
                        lineType: t.type
                    },
                    hoverable: !1,
                    clickable: !0,
                    onclick: this._onclick
                }, this._timelineShae = new r(this._timelineShae), this.shapeList.push(this._timelineShae)
            },
            _buildHandle: function() {
                var e = this._chainPoint[this.currentIndex],
                    t = e.symbolSize + 1;
                t = 5 > t ? 5 : t, this._handleShape = {
                    zlevel: this.getZlevelBase(),
                    z: this.getZBase() + 1,
                    hoverable: !1,
                    draggable: !0,
                    style: {
                        iconType: "diamond",
                        n: e.n,
                        x: e.x - t,
                        y: this._location.y + this._location.height / 4 - t,
                        width: 2 * t,
                        height: 2 * t,
                        brushType: "both",
                        textPosition: "specific",
                        textX: e.x,
                        textY: this._location.y - this._location.height / 4,
                        textAlign: "center",
                        textBaseline: "middle"
                    },
                    highlightStyle: {},
                    ondrift: this._ondrift,
                    ondragend: this._ondragend
                }, this._handleShape = new o(this._handleShape), this.shapeList.push(this._handleShape)
            },
            _syncHandleShape: function() {
                if (this.timelineOption.show) {
                    var e = this.timelineOption,
                        t = e.checkpointStyle,
                        i = this._chainPoint[this.currentIndex];
                    this._handleShape.style.text = t.label.show ? i.name : "", this._handleShape.style.textFont = i.textFont, this._handleShape.style.n = i.n, "auto" === t.symbol ? this._handleShape.style.iconType = "none" != i.symbol ? i.symbol : "diamond" : (this._handleShape.style.iconType = t.symbol, t.symbol.match("star") && (this._handleShape.style.n = t.symbol.replace("star", "") - 0 || 5, this._handleShape.style.iconType = "star"));
                    var n;
                    "auto" === t.symbolSize ? (n = i.symbolSize + 2, n = 5 > n ? 5 : n) : n = t.symbolSize - 0, this._handleShape.style.color = "auto" === t.color ? i.color ? i.color : e.controlStyle.emphasis.color : t.color, this._handleShape.style.textColor = "auto" === t.label.textStyle.color ? this._handleShape.style.color : t.label.textStyle.color, this._handleShape.highlightStyle.strokeColor = this._handleShape.style.strokeColor = "auto" === t.borderColor ? i.borderColor ? i.borderColor : "#fff" : t.borderColor, this._handleShape.style.lineWidth = "auto" === t.borderWidth ? i.borderWidth ? i.borderWidth : 0 : t.borderWidth - 0, this._handleShape.highlightStyle.lineWidth = this._handleShape.style.lineWidth + 1, this.zr.animate(this._handleShape.id, "style").when(500, {
                        x: i.x - n,
                        textX: i.x,
                        y: this._location.y + this._location.height / 4 - n,
                        width: 2 * n,
                        height: 2 * n
                    }).start("ExponentialOut")
                }
            },
            _findChainIndex: function(e) {
                var t = this._chainPoint,
                    i = t.length;
                if (e <= t[0].x) return 0;
                if (e >= t[i - 1].x) return i - 1;
                for (var n = 0; i - 1 > n; n++)
                    if (e >= t[n].x && e <= t[n + 1].x) return Math.abs(e - t[n].x) < Math.abs(e - t[n + 1].x) ? n : n + 1
            },
            __onclick: function(e) {
                var t = m.getX(e.event),
                    i = this._findChainIndex(t);
                return i === this.currentIndex ? !0 : (this.currentIndex = i, this.timelineOption.autoPlay && this.stop(), clearTimeout(this.playTicket), void this._onFrame())
            },
            __ondrift: function(e, t) {
                this.timelineOption.autoPlay && this.stop();
                var i, n = this._chainPoint,
                    a = n.length;
                e.style.x + t <= n[0].x - n[0].symbolSize ? (e.style.x = n[0].x - n[0].symbolSize, i = 0) : e.style.x + t >= n[a - 1].x - n[a - 1].symbolSize ? (e.style.x = n[a - 1].x - n[a - 1].symbolSize, i = a - 1) : (e.style.x += t, i = this._findChainIndex(e.style.x));
                var o = n[i],
                    r = o.symbolSize + 2;
                if (e.style.iconType = o.symbol, e.style.n = o.n, e.style.textX = e.style.x + r / 2, e.style.y = this._location.y + this._location.height / 4 - r, e.style.width = 2 * r, e.style.height = 2 * r, e.style.text = o.name, i === this.currentIndex) return !0;
                if (this.currentIndex = i, this.timelineOption.realtime) {
                    clearTimeout(this.playTicket);
                    var s = this;
                    this.playTicket = setTimeout(function() {
                        s._setCurrentOption()
                    }, 200)
                }
                return !0
            },
            __ondragend: function() {
                this.isDragend = !0
            },
            ondragend: function(e, t) {
                this.isDragend && e.target && (!this.timelineOption.realtime && this._setCurrentOption(), t.dragOut = !0, t.dragIn = !0, t.needRefresh = !1, this.isDragend = !1, this._syncHandleShape())
            },
            last: function() {
                return this.timelineOption.autoPlay && this.stop(), this.currentIndex -= 1, this.currentIndex < 0 && (this.currentIndex = this.timelineOption.data.length - 1), this._onFrame(), this.currentIndex
            },
            next: function() {
                return this.timelineOption.autoPlay && this.stop(), this.currentIndex += 1, this.currentIndex >= this.timelineOption.data.length && (this.currentIndex = 0), this._onFrame(), this.currentIndex
            },
            play: function(e, t) {
                return this._ctrPlayShape && "playing" != this._ctrPlayShape.style.status && (this._ctrPlayShape.style.status = "playing", this.zr.modShape(this._ctrPlayShape.id), this.zr.refreshNextFrame()), this.timelineOption.autoPlay = null != t ? t : !0, this.timelineOption.autoPlay || clearTimeout(this.playTicket), this.currentIndex = null != e ? e : this.currentIndex + 1, this.currentIndex >= this.timelineOption.data.length && (this.currentIndex = 0), this._onFrame(), this.currentIndex
            },
            stop: function() {
                return this._ctrPlayShape && "stop" != this._ctrPlayShape.style.status && (this._ctrPlayShape.style.status = "stop", this.zr.modShape(this._ctrPlayShape.id), this.zr.refreshNextFrame()), this.timelineOption.autoPlay = !1, clearTimeout(this.playTicket), this.currentIndex
            },
            resize: function() {
                this.timelineOption.show && (this.clear(), this._buildShape(), this._syncHandleShape())
            },
            setTheme: function(e) {
                this.timelineOption = this.reformOption(l.clone(this.option.timeline)), this.timelineOption.label.textStyle = this.getTextStyle(this.timelineOption.label.textStyle), this.timelineOption.checkpointStyle.label.textStyle = this.getTextStyle(this.timelineOption.checkpointStyle.label.textStyle), this.myChart.canvasSupported || (this.timelineOption.realtime = !1), this.timelineOption.show && e && (this.clear(), this._buildShape(), this._syncHandleShape())
            },
            onbeforDispose: function() {
                clearTimeout(this.playTicket)
            }
        }, o.prototype.iconLibrary.timelineControl = i, l.inherits(t, n), e("../component").define("timeline", t), t
    }), i("zrender/shape/Image", ["require", "./Base", "../tool/util"], function(e) {
        var t = e("./Base"),
            i = function(e) {
                t.call(this, e)
            };
        return i.prototype = {
            type: "image",
            brush: function(e, t, i) {
                var n = this.style || {};
                t && (n = this.getHighlightStyle(n, this.highlightStyle || {}));
                var a = n.image,
                    o = this;
                if (this._imageCache || (this._imageCache = {}), "string" == typeof a) {
                    var r = a;
                    this._imageCache[r] ? a = this._imageCache[r] : (a = new Image, a.onload = function() {
                        a.onload = null, o.modSelf(), i()
                    }, a.src = r, this._imageCache[r] = a)
                }
                if (a) {
                    if ("IMG" == a.nodeName.toUpperCase())
                        if (window.ActiveXObject) {
                            if ("complete" != a.readyState) return
                        } else if (!a.complete) return;
                    var s = n.width || a.width,
                        l = n.height || a.height,
                        h = n.x,
                        m = n.y;
                    if (!a.width || !a.height) return;
                    if (e.save(), this.doClip(e), this.setContext(e, n), this.setTransform(e), n.sWidth && n.sHeight) {
                        var V = n.sx || 0,
                            U = n.sy || 0;
                        e.drawImage(a, V, U, n.sWidth, n.sHeight, h, m, s, l)
                    } else if (n.sx && n.sy) {
                        var V = n.sx,
                            U = n.sy,
                            d = s - V,
                            p = l - U;
                        e.drawImage(a, V, U, d, p, h, m, s, l)
                    } else e.drawImage(a, h, m, s, l);
                    n.width || (n.width = s), n.height || (n.height = l), this.style.width || (this.style.width = s), this.style.height || (this.style.height = l), this.drawText(e, n, this.style), e.restore()
                }
            },
            getRect: function(e) {
                return {
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height
                }
            },
            clearCache: function() {
                this._imageCache = {}
            }
        }, e("../tool/util").inherits(i, t), i
    }), i("zrender/loadingEffect/Bar", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Rectangle"], function(e) {
        function t(e) {
            i.call(this, e)
        }
        var i = e("./Base"),
            n = e("../tool/util"),
            a = e("../tool/color"),
            o = e("../shape/Rectangle");
        return n.inherits(t, i), t.prototype._start = function(e, t) {
            var i = n.merge(this.options, {
                    textStyle: {
                        color: "#888"
                    },
                    backgroundColor: "rgba(250, 250, 250, 0.8)",
                    effectOption: {
                        x: 0,
                        y: this.canvasHeight / 2 - 30,
                        width: this.canvasWidth,
                        height: 5,
                        brushType: "fill",
                        timeInterval: 100
                    }
                }),
                r = this.createTextShape(i.textStyle),
                s = this.createBackgroundShape(i.backgroundColor),
                l = i.effectOption,
                h = new o({
                    highlightStyle: n.clone(l)
                });
            return h.highlightStyle.color = l.color || a.getLinearGradient(l.x, l.y, l.x + l.width, l.y + l.height, [
                [0, "#ff6400"],
                [.5, "#ffe100"],
                [1, "#b1ff00"]
            ]), null != i.progress ? (e(s), h.highlightStyle.width = this.adjust(i.progress, [0, 1]) * i.effectOption.width, e(h), e(r), void t()) : (h.highlightStyle.width = 0, setInterval(function() {
                e(s), h.highlightStyle.width < l.width ? h.highlightStyle.width += 8 : h.highlightStyle.width = 0, e(h), e(r), t()
            }, l.timeInterval))
        }, t
    }), i("zrender/loadingEffect/Bubble", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Circle"], function(e) {
        function t(e) {
            i.call(this, e)
        }
        var i = e("./Base"),
            n = e("../tool/util"),
            a = e("../tool/color"),
            o = e("../shape/Circle");
        return n.inherits(t, i), t.prototype._start = function(e, t) {
            for (var i = n.merge(this.options, {
                    textStyle: {
                        color: "#888"
                    },
                    backgroundColor: "rgba(250, 250, 250, 0.8)",
                    effect: {
                        n: 50,
                        lineWidth: 2,
                        brushType: "stroke",
                        color: "random",
                        timeInterval: 100
                    }
                }), r = this.createTextShape(i.textStyle), s = this.createBackgroundShape(i.backgroundColor), l = i.effect, h = l.n, m = l.brushType, V = l.lineWidth, U = [], d = this.canvasWidth, p = this.canvasHeight, c = 0; h > c; c++) {
                var u = "random" == l.color ? a.alpha(a.random(), .3) : l.color;
                U[c] = new o({
                    highlightStyle: {
                        x: Math.ceil(Math.random() * d),
                        y: Math.ceil(Math.random() * p),
                        r: Math.ceil(40 * Math.random()),
                        brushType: m,
                        color: u,
                        strokeColor: u,
                        lineWidth: V
                    },
                    animationY: Math.ceil(20 * Math.random())
                })
            }
            return setInterval(function() {
                e(s);
                for (var i = 0; h > i; i++) {
                    var n = U[i].highlightStyle;
                    n.y - U[i].animationY + n.r <= 0 && (U[i].highlightStyle.y = p + n.r, U[i].highlightStyle.x = Math.ceil(Math.random() * d)), U[i].highlightStyle.y -= U[i].animationY, e(U[i])
                }
                e(r), t()
            }, l.timeInterval)
        }, t
    }), i("zrender/loadingEffect/DynamicLine", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Line"], function(e) {
        function t(e) {
            i.call(this, e)
        }
        var i = e("./Base"),
            n = e("../tool/util"),
            a = e("../tool/color"),
            o = e("../shape/Line");
        return n.inherits(t, i), t.prototype._start = function(e, t) {
            for (var i = n.merge(this.options, {
                    textStyle: {
                        color: "#fff"
                    },
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    effectOption: {
                        n: 30,
                        lineWidth: 1,
                        color: "random",
                        timeInterval: 100
                    }
                }), r = this.createTextShape(i.textStyle), s = this.createBackgroundShape(i.backgroundColor), l = i.effectOption, h = l.n, m = l.lineWidth, V = [], U = this.canvasWidth, d = this.canvasHeight, p = 0; h > p; p++) {
                var c = -Math.ceil(1e3 * Math.random()),
                    u = Math.ceil(400 * Math.random()),
                    y = Math.ceil(Math.random() * d),
                    g = "random" == l.color ? a.random() : l.color;
                V[p] = new o({
                    highlightStyle: {
                        xStart: c,
                        yStart: y,
                        xEnd: c + u,
                        yEnd: y,
                        strokeColor: g,
                        lineWidth: m
                    },
                    animationX: Math.ceil(100 * Math.random()),
                    len: u
                })
            }
            return setInterval(function() {
                e(s);
                for (var i = 0; h > i; i++) {
                    var n = V[i].highlightStyle;
                    n.xStart >= U && (V[i].len = Math.ceil(400 * Math.random()), n.xStart = -400, n.xEnd = -400 + V[i].len, n.yStart = Math.ceil(Math.random() * d), n.yEnd = n.yStart), n.xStart += V[i].animationX, n.xEnd += V[i].animationX, e(V[i])
                }
                e(r), t()
            }, l.timeInterval)
        }, t
    }), i("zrender/loadingEffect/Ring", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Ring", "../shape/Sector"], function(e) {
            function t(e) {
                i.call(this, e)
            }
            var i = e("./Base"),
                n = e("../tool/util"),
                a = e("../tool/color"),
                o = e("../shape/Ring"),
                r = e("../shape/Sector");
            return n.inherits(t, i), t.prototype._start = function(e, t) {
                    var i = n.merge(this.options, {
                            textStyle: {
                                color: "#07a"
                            },
                            backgroundColor: "rgba(250, 250, 250, 0.8)",
                            effect: {
                                x: this.canvasWidth / 2,
                                y: this.canvasHeight / 2,
                                r0: 60,
                                r: 100,
                                color: "#bbdcff",
                                brushType: "fill",
                                textPosition: "inside",
                                textFont: "normal 30px verdana",
                                textColor: "rgba(30, 144, 255, 0.6)",
                                timeInterval: 100
                            }
                        }),
                        s = i.effect,
                        l = i.textStyle;
