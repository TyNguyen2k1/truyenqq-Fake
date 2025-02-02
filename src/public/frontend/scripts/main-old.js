!(function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (f, e) {
    function t(e, t) {
        return t.toUpperCase();
    }
    var d = [],
        u = d.slice,
        m = d.concat,
        a = d.push,
        o = d.indexOf,
        n = {},
        i = n.toString,
        g = n.hasOwnProperty,
        v = {},
        s = "1.11.1",
        C = function (e, t) {
            return new C.fn.init(e, t);
        },
        r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        l = /^-ms-/,
        c = /-([\da-z])/gi;
    function p(e) {
        var t = e.length,
            n = C.type(e);
        return "function" !== n && !C.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (C.fn = C.prototype = {
        jquery: s,
        constructor: C,
        selector: "",
        length: 0,
        toArray: function () {
            return u.call(this);
        },
        get: function (e) {
            return null != e ? (e < 0 ? this[e + this.length] : this[e]) : u.call(this);
        },
        pushStack: function (e) {
            var t = C.merge(this.constructor(), e);
            return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e, t) {
            return C.each(this, e, t);
        },
        map: function (n) {
            return this.pushStack(
                C.map(this, function (e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(u.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor(null);
        },
        push: a,
        sort: d.sort,
        splice: d.splice,
    }),
        (C.extend = C.fn.extend = function () {
            var e,
                t,
                n,
                i,
                o,
                s,
                r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++), "object" == typeof r || C.isFunction(r) || (r = {}), a === l && ((r = this), a--); a < l; a++)
                if (null != (o = arguments[a]))
                    for (i in o)
                        (e = r[i]),
                            r !== (n = o[i]) &&
                                (c && n && (C.isPlainObject(n) || (t = C.isArray(n))) ? ((s = t ? ((t = !1), e && C.isArray(e) ? e : []) : e && C.isPlainObject(e) ? e : {}), (r[i] = C.extend(c, s, n))) : void 0 !== n && (r[i] = n));
            return r;
        }),
        C.extend({
            expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isFunction: function (e) {
                return "function" === C.type(e);
            },
            isArray:
                Array.isArray ||
                function (e) {
                    return "array" === C.type(e);
                },
            isWindow: function (e) {
                return null != e && e == e.window;
            },
            isNumeric: function (e) {
                return !C.isArray(e) && 0 <= e - parseFloat(e);
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            isPlainObject: function (e) {
                var t;
                if (!e || "object" !== C.type(e) || e.nodeType || C.isWindow(e)) return !1;
                try {
                    if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (e) {
                    return !1;
                }
                if (v.ownLast) for (t in e) return g.call(e, t);
                for (t in e);
                return void 0 === t || g.call(e, t);
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e;
            },
            globalEval: function (e) {
                e &&
                    C.trim(e) &&
                    (
                        f.execScript ||
                        function (e) {
                            f.eval.call(f, e);
                        }
                    )(e);
            },
            camelCase: function (e) {
                return e.replace(l, "ms-").replace(c, t);
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function (e, t, n) {
                var i = 0,
                    o = e.length,
                    s = p(e);
                if (n) {
                    if (s) for (; i < o && !1 !== t.apply(e[i], n); i++);
                    else for (i in e) if (!1 === t.apply(e[i], n)) break;
                } else if (s) for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(r, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (p(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (o) return o.call(t, e, n);
                    for (i = t.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0; n < i; n++) if (n in t && t[n] === e) return n;
                }
                return -1;
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; ) e[o++] = t[i++];
                if (n != n) for (; void 0 !== t[i]; ) e[o++] = t[i++];
                return (e.length = o), e;
            },
            grep: function (e, t, n) {
                for (var i = [], o = 0, s = e.length, r = !n; o < s; o++) !t(e[o], o) != r && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var i,
                    o = 0,
                    s = e.length,
                    r = [];
                if (p(e)) for (; o < s; o++) null != (i = t(e[o], o, n)) && r.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && r.push(i);
                return m.apply([], r);
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, o;
                return (
                    "string" == typeof t && ((o = e[t]), (t = e), (e = o)),
                    C.isFunction(e)
                        ? ((n = u.call(arguments, 2)),
                          ((i = function () {
                              return e.apply(t || this, n.concat(u.call(arguments)));
                          }).guid = e.guid = e.guid || C.guid++),
                          i)
                        : void 0
                );
            },
            now: function () {
                return +new Date();
            },
            support: v,
        }),
        C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            n["[object " + t + "]"] = t.toLowerCase();
        });
    var h = (function (n) {
        function d(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        }
        var e,
            f,
            w,
            s,
            i,
            m,
            p,
            g,
            k,
            c,
            u,
            v,
            x,
            o,
            y,
            b,
            r,
            a,
            C,
            T = "sizzle" + -new Date(),
            S = n.document,
            _ = 0,
            h = 0,
            l = oe(),
            $ = oe(),
            A = oe(),
            E = function (e, t) {
                return e === t && (u = !0), 0;
            },
            j = "undefined",
            N = {}.hasOwnProperty,
            t = [],
            L = t.pop,
            D = t.push,
            H = t.push,
            O = t.slice,
            z =
                t.indexOf ||
                function (e) {
                    for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
                    return -1;
                },
            q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            I = M.replace("w", "w#"),
            F = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + P + "*\\]",
            B = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            R = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            W = new RegExp("^" + P + "*," + P + "*"),
            Q = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            X = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            U = new RegExp(B),
            K = new RegExp("^" + I + "$"),
            V = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + q + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i"),
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig");
        try {
            H.apply((t = O.call(S.childNodes)), S.childNodes), t[S.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length
                    ? function (e, t) {
                          D.apply(e, O.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                          e.length = n - 1;
                      },
            };
        }
        function ie(e, t, n, i) {
            var o, s, r, a, l, c, u, d, p, h;
            if (((t ? t.ownerDocument || t : S) !== x && v(t), (n = n || []), !e || "string" != typeof e)) return n;
            if (1 !== (a = (t = t || x).nodeType) && 9 !== a) return [];
            if (y && !i) {
                if ((o = Z.exec(e)))
                    if ((r = o[1])) {
                        if (9 === a) {
                            if (!(s = t.getElementById(r)) || !s.parentNode) return n;
                            if (s.id === r) return n.push(s), n;
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(r)) && C(t, s) && s.id === r) return n.push(s), n;
                    } else {
                        if (o[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = o[3]) && f.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(r)), n;
                    }
                if (f.qsa && (!b || !b.test(e))) {
                    if (((d = u = T), (p = t), (h = 9 === a && e), 1 === a && "object" !== t.nodeName.toLowerCase())) {
                        for (c = m(e), (u = t.getAttribute("id")) ? (d = u.replace(te, "\\$&")) : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--; ) c[l] = d + fe(c[l]);
                        (p = (ee.test(e) && pe(t.parentNode)) || t), (h = c.join(","));
                    }
                    if (h)
                        try {
                            return H.apply(n, p.querySelectorAll(h)), n;
                        } catch (e) {
                        } finally {
                            u || t.removeAttribute("id");
                        }
                }
            }
            return g(e.replace(R, "$1"), t, n, i);
        }
        function oe() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > w.cacheLength && delete e[i.shift()], (e[t + " "] = n);
            };
        }
        function se(e) {
            return (e[T] = !0), e;
        }
        function re(e) {
            var t = x.createElement("div");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function ae(e, t) {
            for (var n = e.split("|"), i = e.length; i--; ) w.attrHandle[n[i]] = t;
        }
        function le(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function ce(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function ue(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function de(r) {
            return se(function (s) {
                return (
                    (s = +s),
                    se(function (e, t) {
                        for (var n, i = r([], e.length, s), o = i.length; o--; ) e[(n = i[o])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function pe(e) {
            return e && typeof e.getElementsByTagName !== j && e;
        }
        for (e in ((f = ie.support = {}),
        (i = ie.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }),
        (v = ie.setDocument = function (e) {
            var t,
                l = e ? e.ownerDocument || e : S,
                n = l.defaultView;
            return l !== x && 9 === l.nodeType && l.documentElement
                ? ((o = (x = l).documentElement),
                  (y = !i(l)),
                  n &&
                      n !== n.top &&
                      (n.addEventListener
                          ? n.addEventListener(
                                "unload",
                                function () {
                                    v();
                                },
                                !1
                            )
                          : n.attachEvent &&
                            n.attachEvent("onunload", function () {
                                v();
                            })),
                  (f.attributes = re(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (f.getElementsByTagName = re(function (e) {
                      return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length;
                  })),
                  (f.getElementsByClassName =
                      J.test(l.getElementsByClassName) &&
                      re(function (e) {
                          return (e.innerHTML = "<div class='a'></div><div class='a i'></div>"), (e.firstChild.className = "i"), 2 === e.getElementsByClassName("i").length;
                      })),
                  (f.getById = re(function (e) {
                      return (o.appendChild(e).id = T), !l.getElementsByName || !l.getElementsByName(T).length;
                  })),
                  f.getById
                      ? ((w.find.ID = function (e, t) {
                            if (typeof t.getElementById !== j && y) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : [];
                            }
                        }),
                        (w.filter.ID = function (e) {
                            var t = e.replace(ne, d);
                            return function (e) {
                                return e.getAttribute("id") === t;
                            };
                        }))
                      : (delete w.find.ID,
                        (w.filter.ID = function (e) {
                            var n = e.replace(ne, d);
                            return function (e) {
                                var t = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                                return t && t.value === n;
                            };
                        })),
                  (w.find.TAG = f.getElementsByTagName
                      ? function (e, t) {
                            return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : void 0;
                        }
                      : function (e, t) {
                            var n,
                                i = [],
                                o = 0,
                                s = t.getElementsByTagName(e);
                            if ("*" !== e) return s;
                            for (; (n = s[o++]); ) 1 === n.nodeType && i.push(n);
                            return i;
                        }),
                  (w.find.CLASS =
                      f.getElementsByClassName &&
                      function (e, t) {
                          return typeof t.getElementsByClassName !== j && y ? t.getElementsByClassName(e) : void 0;
                      }),
                  (r = []),
                  (b = []),
                  (f.qsa = J.test(l.querySelectorAll)) &&
                      (re(function (e) {
                          (e.innerHTML = "<select msallowclip=''><option selected=''></option></select>"),
                              e.querySelectorAll("[msallowclip^='']").length && b.push("[*^$]=" + P + "*(?:''|\"\")"),
                              e.querySelectorAll("[selected]").length || b.push("\\[" + P + "*(?:value|" + q + ")"),
                              e.querySelectorAll(":checked").length || b.push(":checked");
                      }),
                      re(function (e) {
                          var t = l.createElement("input");
                          t.setAttribute("type", "hidden"),
                              e.appendChild(t).setAttribute("name", "D"),
                              e.querySelectorAll("[name=d]").length && b.push("name" + P + "*[*^$|!~]?="),
                              e.querySelectorAll(":enabled").length || b.push(":enabled", ":disabled"),
                              e.querySelectorAll("*,:x"),
                              b.push(",.*:");
                      })),
                  (f.matchesSelector = J.test((a = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector))) &&
                      re(function (e) {
                          (f.disconnectedMatch = a.call(e, "div")), a.call(e, "[s!='']:x"), r.push("!=", B);
                      }),
                  (b = b.length && new RegExp(b.join("|"))),
                  (r = r.length && new RegExp(r.join("|"))),
                  (t = J.test(o.compareDocumentPosition)),
                  (C =
                      t || J.test(o.contains)
                          ? function (e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    i = t && t.parentNode;
                                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                            }
                          : function (e, t) {
                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                return !1;
                            }),
                  (E = t
                      ? function (e, t) {
                            if (e === t) return (u = !0), 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return (
                                n ||
                                (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!f.sortDetached && t.compareDocumentPosition(e) === n)
                                    ? e === l || (e.ownerDocument === S && C(S, e))
                                        ? -1
                                        : t === l || (t.ownerDocument === S && C(S, t))
                                        ? 1
                                        : c
                                        ? z.call(c, e) - z.call(c, t)
                                        : 0
                                    : 4 & n
                                    ? -1
                                    : 1)
                            );
                        }
                      : function (e, t) {
                            if (e === t) return (u = !0), 0;
                            var n,
                                i = 0,
                                o = e.parentNode,
                                s = t.parentNode,
                                r = [e],
                                a = [t];
                            if (!o || !s) return e === l ? -1 : t === l ? 1 : o ? -1 : s ? 1 : c ? z.call(c, e) - z.call(c, t) : 0;
                            if (o === s) return le(e, t);
                            for (n = e; (n = n.parentNode); ) r.unshift(n);
                            for (n = t; (n = n.parentNode); ) a.unshift(n);
                            for (; r[i] === a[i]; ) i++;
                            return i ? le(r[i], a[i]) : r[i] === S ? -1 : a[i] === S ? 1 : 0;
                        }),
                  l)
                : x;
        }),
        (ie.matches = function (e, t) {
            return ie(e, null, null, t);
        }),
        (ie.matchesSelector = function (e, t) {
            if (((e.ownerDocument || e) !== x && v(e), (t = t.replace(X, "='$1']")), !(!f.matchesSelector || !y || (r && r.test(t)) || (b && b.test(t)))))
                try {
                    var n = a.call(e, t);
                    if (n || f.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {}
            return 0 < ie(t, x, null, [e]).length;
        }),
        (ie.contains = function (e, t) {
            return (e.ownerDocument || e) !== x && v(e), C(e, t);
        }),
        (ie.attr = function (e, t) {
            (e.ownerDocument || e) !== x && v(e);
            var n = w.attrHandle[t.toLowerCase()],
                i = n && N.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0;
            return void 0 !== i ? i : f.attributes || !y ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }),
        (ie.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (ie.uniqueSort = function (e) {
            var t,
                n = [],
                i = 0,
                o = 0;
            if (((u = !f.detectDuplicates), (c = !f.sortStable && e.slice(0)), e.sort(E), u)) {
                for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
                for (; i--; ) e.splice(n[i], 1);
            }
            return (c = null), e;
        }),
        (s = ie.getText = function (e) {
            var t,
                n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += s(t);
            return n;
        }),
        ((w = ie.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(ne, d)), (e[3] = (e[3] || e[4] || e[5] || "").replace(ne, d)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && ie.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return V.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && U.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ne, d).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = l[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                            l(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (typeof e.getAttribute !== j && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (n, i, o) {
                    return function (e) {
                        var t = ie.attr(e, n);
                        return null == t
                            ? "!=" === i
                            : !i ||
                                  ((t += ""),
                                  "=" === i
                                      ? t === o
                                      : "!=" === i
                                      ? t !== o
                                      : "^=" === i
                                      ? o && 0 === t.indexOf(o)
                                      : "*=" === i
                                      ? o && -1 < t.indexOf(o)
                                      : "$=" === i
                                      ? o && t.slice(-o.length) === o
                                      : "~=" === i
                                      ? -1 < (" " + t + " ").indexOf(o)
                                      : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"));
                    };
                },
                CHILD: function (h, e, t, f, m) {
                    var g = "nth" !== h.slice(0, 3),
                        v = "last" !== h.slice(-4),
                        y = "of-type" === e;
                    return 1 === f && 0 === m
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var i,
                                  o,
                                  s,
                                  r,
                                  a,
                                  l,
                                  c = g != v ? "nextSibling" : "previousSibling",
                                  u = e.parentNode,
                                  d = y && e.nodeName.toLowerCase(),
                                  p = !n && !y;
                              if (u) {
                                  if (g) {
                                      for (; c; ) {
                                          for (s = e; (s = s[c]); ) if (y ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                          l = c = "only" === h && !l && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((l = [v ? u.firstChild : u.lastChild]), v && p)) {
                                      for (a = (i = (o = u[T] || (u[T] = {}))[h] || [])[0] === _ && i[1], r = i[0] === _ && i[2], s = a && u.childNodes[a]; (s = (++a && s && s[c]) || (r = a = 0) || l.pop()); )
                                          if (1 === s.nodeType && ++r && s === e) {
                                              o[h] = [_, a, r];
                                              break;
                                          }
                                  } else if (p && (i = (e[T] || (e[T] = {}))[h]) && i[0] === _) r = i[1];
                                  else for (; (s = (++a && s && s[c]) || (r = a = 0) || l.pop()) && ((y ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++r || (p && ((s[T] || (s[T] = {}))[h] = [_, r]), s !== e)); );
                                  return (r -= m) === f || (r % f == 0 && 0 <= r / f);
                              }
                          };
                },
                PSEUDO: function (e, s) {
                    var t,
                        r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                    return r[T]
                        ? r(s)
                        : 1 < r.length
                        ? ((t = [e, e, "", s]),
                          w.setFilters.hasOwnProperty(e.toLowerCase())
                              ? se(function (e, t) {
                                    for (var n, i = r(e, s), o = i.length; o--; ) e[(n = z.call(e, i[o]))] = !(t[n] = i[o]);
                                })
                              : function (e) {
                                    return r(e, 0, t);
                                })
                        : r;
                },
            },
            pseudos: {
                not: se(function (e) {
                    var i = [],
                        o = [],
                        a = p(e.replace(R, "$1"));
                    return a[T]
                        ? se(function (e, t, n, i) {
                              for (var o, s = a(e, null, i, []), r = e.length; r--; ) (o = s[r]) && (e[r] = !(t[r] = o));
                          })
                        : function (e, t, n) {
                              return (i[0] = e), a(i, null, n, o), !o.pop();
                          };
                }),
                has: se(function (t) {
                    return function (e) {
                        return 0 < ie(t, e).length;
                    };
                }),
                contains: se(function (t) {
                    return function (e) {
                        return -1 < (e.textContent || e.innerText || s(e)).indexOf(t);
                    };
                }),
                lang: se(function (n) {
                    return (
                        K.test(n || "") || ie.error("unsupported lang: " + n),
                        (n = n.replace(ne, d).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === o;
                },
                focus: function (e) {
                    return e === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function (e) {
                    return !1 === e.disabled;
                },
                disabled: function (e) {
                    return !0 === e.disabled;
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !w.pseudos.empty(e);
                },
                header: function (e) {
                    return Y.test(e.nodeName);
                },
                input: function (e) {
                    return G.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: de(function () {
                    return [0];
                }),
                last: de(function (e, t) {
                    return [t - 1];
                }),
                eq: de(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: de(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: de(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: de(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
                    return e;
                }),
                gt: de(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                }),
            },
        }).pseudos.nth = w.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            w.pseudos[e] = ce(e);
        for (e in { submit: !0, reset: !0 }) w.pseudos[e] = ue(e);
        function he() {}
        function fe(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function me(r, e, t) {
            var a = e.dir,
                l = t && "parentNode" === a,
                c = h++;
            return e.first
                ? function (e, t, n) {
                      for (; (e = e[a]); ) if (1 === e.nodeType || l) return r(e, t, n);
                  }
                : function (e, t, n) {
                      var i,
                          o,
                          s = [_, c];
                      if (n) {
                          for (; (e = e[a]); ) if ((1 === e.nodeType || l) && r(e, t, n)) return !0;
                      } else
                          for (; (e = e[a]); )
                              if (1 === e.nodeType || l) {
                                  if ((i = (o = e[T] || (e[T] = {}))[a]) && i[0] === _ && i[1] === c) return (s[2] = i[2]);
                                  if (((o[a] = s)[2] = r(e, t, n))) return !0;
                              }
                  };
        }
        function ge(o) {
            return 1 < o.length
                ? function (e, t, n) {
                      for (var i = o.length; i--; ) if (!o[i](e, t, n)) return !1;
                      return !0;
                  }
                : o[0];
        }
        function ve(e, t, n, i, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++) !(s = e[a]) || (n && !n(s, i, o)) || (r.push(s), c && t.push(a));
            return r;
        }
        function ye(h, f, m, g, v, e) {
            return (
                g && !g[T] && (g = ye(g)),
                v && !v[T] && (v = ye(v, e)),
                se(function (e, t, n, i) {
                    var o,
                        s,
                        r,
                        a = [],
                        l = [],
                        c = t.length,
                        u =
                            e ||
                            (function (e, t, n) {
                                for (var i = 0, o = t.length; i < o; i++) ie(e, t[i], n);
                                return n;
                            })(f || "*", n.nodeType ? [n] : n, []),
                        d = !h || (!e && f) ? u : ve(u, a, h, n, i),
                        p = m ? (v || (e ? h : c || g) ? [] : t) : d;
                    if ((m && m(d, p, n, i), g)) for (o = ve(p, l), g(o, [], n, i), s = o.length; s--; ) (r = o[s]) && (p[l[s]] = !(d[l[s]] = r));
                    if (e) {
                        if (v || h) {
                            if (v) {
                                for (o = [], s = p.length; s--; ) (r = p[s]) && o.push((d[s] = r));
                                v(null, (p = []), o, i);
                            }
                            for (s = p.length; s--; ) (r = p[s]) && -1 < (o = v ? z.call(e, r) : a[s]) && (e[o] = !(t[o] = r));
                        }
                    } else (p = ve(p === t ? p.splice(c, p.length) : p)), v ? v(null, t, p, i) : H.apply(t, p);
                })
            );
        }
        function be(e) {
            for (
                var i,
                    t,
                    n,
                    o = e.length,
                    s = w.relative[e[0].type],
                    r = s || w.relative[" "],
                    a = s ? 1 : 0,
                    l = me(
                        function (e) {
                            return e === i;
                        },
                        r,
                        !0
                    ),
                    c = me(
                        function (e) {
                            return -1 < z.call(i, e);
                        },
                        r,
                        !0
                    ),
                    u = [
                        function (e, t, n) {
                            return (!s && (n || t !== k)) || ((i = t).nodeType ? l(e, t, n) : c(e, t, n));
                        },
                    ];
                a < o;
                a++
            )
                if ((t = w.relative[e[a].type])) u = [me(ge(u), t)];
                else {
                    if ((t = w.filter[e[a].type].apply(null, e[a].matches))[T]) {
                        for (n = ++a; n < o && !w.relative[e[n].type]; n++);
                        return ye(1 < a && ge(u), 1 < a && fe(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(R, "$1"), t, a < n && be(e.slice(a, n)), n < o && be((e = e.slice(n))), n < o && fe(e));
                    }
                    u.push(t);
                }
            return ge(u);
        }
        return (
            (he.prototype = w.filters = w.pseudos),
            (w.setFilters = new he()),
            (m = ie.tokenize = function (e, t) {
                var n,
                    i,
                    o,
                    s,
                    r,
                    a,
                    l,
                    c = $[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (r = e, a = [], l = w.preFilter; r; ) {
                    for (s in ((n && !(i = W.exec(r))) || (i && (r = r.slice(i[0].length) || r), a.push((o = []))),
                    (n = !1),
                    (i = Q.exec(r)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(R, " ") }), (r = r.slice(n.length))),
                    w.filter))
                        !(i = V[s].exec(r)) || (l[s] && !(i = l[s](i))) || ((n = i.shift()), o.push({ value: n, type: s, matches: i }), (r = r.slice(n.length)));
                    if (!n) break;
                }
                return t ? r.length : r ? ie.error(e) : $(e, a).slice(0);
            }),
            (p = ie.compile = function (e, t) {
                var n,
                    i = [],
                    o = [],
                    s = A[e + " "];
                if (!s) {
                    for (t || (t = m(e)), n = t.length; n--; ) (s = be(t[n]))[T] ? i.push(s) : o.push(s);
                    (s = A(
                        e,
                        (function (g, v) {
                            function e(e, t, n, i, o) {
                                var s,
                                    r,
                                    a,
                                    l = 0,
                                    c = "0",
                                    u = e && [],
                                    d = [],
                                    p = k,
                                    h = e || (b && w.find.TAG("*", o)),
                                    f = (_ += null == p ? 1 : Math.random() || 0.1),
                                    m = h.length;
                                for (o && (k = t !== x && t); c !== m && null != (s = h[c]); c++) {
                                    if (b && s) {
                                        for (r = 0; (a = g[r++]); )
                                            if (a(s, t, n)) {
                                                i.push(s);
                                                break;
                                            }
                                        o && (_ = f);
                                    }
                                    y && ((s = !a && s) && l--, e && u.push(s));
                                }
                                if (((l += c), y && c !== l)) {
                                    for (r = 0; (a = v[r++]); ) a(u, d, t, n);
                                    if (e) {
                                        if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = L.call(i));
                                        d = ve(d);
                                    }
                                    H.apply(i, d), o && !e && 0 < d.length && 1 < l + v.length && ie.uniqueSort(i);
                                }
                                return o && ((_ = f), (k = p)), u;
                            }
                            var y = 0 < v.length,
                                b = 0 < g.length;
                            return y ? se(e) : e;
                        })(o, i)
                    )).selector = e;
                }
                return s;
            }),
            (g = ie.select = function (e, t, n, i) {
                var o,
                    s,
                    r,
                    a,
                    l,
                    c = "function" == typeof e && e,
                    u = !i && m((e = c.selector || e));
                if (((n = n || []), 1 === u.length)) {
                    if (2 < (s = u[0] = u[0].slice(0)).length && "ID" === (r = s[0]).type && f.getById && 9 === t.nodeType && y && w.relative[s[1].type]) {
                        if (!(t = (w.find.ID(r.matches[0].replace(ne, d), t) || [])[0])) return n;
                        c && (t = t.parentNode), (e = e.slice(s.shift().value.length));
                    }
                    for (o = V.needsContext.test(e) ? 0 : s.length; o-- && ((r = s[o]), !w.relative[(a = r.type)]); )
                        if ((l = w.find[a]) && (i = l(r.matches[0].replace(ne, d), (ee.test(s[0].type) && pe(t.parentNode)) || t))) {
                            if ((s.splice(o, 1), !(e = i.length && fe(s)))) return H.apply(n, i), n;
                            break;
                        }
                }
                return (c || p(e, u))(i, t, !y, n, (ee.test(e) && pe(t.parentNode)) || t), n;
            }),
            (f.sortStable = T.split("").sort(E).join("") === T),
            (f.detectDuplicates = !!u),
            v(),
            (f.sortDetached = re(function (e) {
                return 1 & e.compareDocumentPosition(x.createElement("div"));
            })),
            re(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                ae("type|href|height|width", function (e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (f.attributes &&
                re(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                ae("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
                }),
            re(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                ae(q, function (e, t, n) {
                    var i;
                    return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                }),
            ie
        );
    })(f);
    (C.find = h), (C.expr = h.selectors), (C.expr[":"] = C.expr.pseudos), (C.unique = h.uniqueSort), (C.text = h.getText), (C.isXMLDoc = h.isXML), (C.contains = h.contains);
    var y = C.expr.match.needsContext,
        b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;
    function k(e, n, i) {
        if (C.isFunction(n))
            return C.grep(e, function (e, t) {
                return !!n.call(e, t, e) !== i;
            });
        if (n.nodeType)
            return C.grep(e, function (e) {
                return (e === n) !== i;
            });
        if ("string" == typeof n) {
            if (w.test(n)) return C.filter(n, e, i);
            n = C.filter(n, e);
        }
        return C.grep(e, function (e) {
            return 0 <= C.inArray(e, n) !== i;
        });
    }
    (C.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
                ? C.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : C.find.matches(
                      e,
                      C.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        C.fn.extend({
            find: function (e) {
                var t,
                    n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof e)
                    return this.pushStack(
                        C(e).filter(function () {
                            for (t = 0; t < o; t++) if (C.contains(i[t], this)) return !0;
                        })
                    );
                for (t = 0; t < o; t++) C.find(e, i[t], n);
                return ((n = this.pushStack(1 < o ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e), n;
            },
            filter: function (e) {
                return this.pushStack(k(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(k(this, e || [], !0));
            },
            is: function (e) {
                return !!k(this, "string" == typeof e && y.test(e) ? C(e) : e || [], !1).length;
            },
        });
    var x,
        T = f.document,
        S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((C.fn.init = function (e, t) {
        var n, i;
        if (!e) return this;
        if ("string" != typeof e)
            return e.nodeType
                ? ((this.context = this[0] = e), (this.length = 1), this)
                : C.isFunction(e)
                ? void 0 !== x.ready
                    ? x.ready(e)
                    : e(C)
                : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)), C.makeArray(e, this));
        if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : S.exec(e)) || (!n[1] && t)) return !t || t.jquery ? (t || x).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (((t = t instanceof C ? t[0] : t), C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), b.test(n[1]) && C.isPlainObject(t)))
                for (n in t) C.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this;
        }
        if ((i = T.getElementById(n[2])) && i.parentNode) {
            if (i.id !== n[2]) return x.find(e);
            (this.length = 1), (this[0] = i);
        }
        return (this.context = T), (this.selector = e), this;
    }).prototype = C.fn),
        (x = C(T));
    var _ = /^(?:parents|prev(?:Until|All))/,
        $ = { children: !0, contents: !0, next: !0, prev: !0 };
    function A(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    C.extend({
        dir: function (e, t, n) {
            for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !C(o).is(n)); ) 1 === o.nodeType && i.push(o), (o = o[t]);
            return i;
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
    }),
        C.fn.extend({
            has: function (e) {
                var t,
                    n = C(e, this),
                    i = n.length;
                return this.filter(function () {
                    for (t = 0; t < i; t++) if (C.contains(this, n[t])) return !0;
                });
            },
            closest: function (e, t) {
                for (var n, i = 0, o = this.length, s = [], r = y.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            s.push(n);
                            break;
                        }
                return this.pushStack(1 < s.length ? C.unique(s) : s);
            },
            index: function (e) {
                return e ? ("string" == typeof e ? C.inArray(this[0], C(e)) : C.inArray(e.jquery ? e[0] : e, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (e, t) {
                return this.pushStack(C.unique(C.merge(this.get(), C(e, t))));
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
        }),
        C.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return C.dir(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return C.dir(e, "parentNode", n);
                },
                next: function (e) {
                    return A(e, "nextSibling");
                },
                prev: function (e) {
                    return A(e, "previousSibling");
                },
                nextAll: function (e) {
                    return C.dir(e, "nextSibling");
                },
                prevAll: function (e) {
                    return C.dir(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return C.dir(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return C.dir(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return C.sibling((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return C.sibling(e.firstChild);
                },
                contents: function (e) {
                    return C.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : C.merge([], e.childNodes);
                },
            },
            function (i, o) {
                C.fn[i] = function (e, t) {
                    var n = C.map(this, o, e);
                    return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && ($[i] || (n = C.unique(n)), _.test(i) && (n = n.reverse())), this.pushStack(n);
                };
            }
        );
    var E,
        j = /\S+/g,
        N = {};
    function L() {
        T.addEventListener ? (T.removeEventListener("DOMContentLoaded", D, !1), f.removeEventListener("load", D, !1)) : (T.detachEvent("onreadystatechange", D), f.detachEvent("onload", D));
    }
    function D() {
        (!T.addEventListener && "load" !== event.type && "complete" !== T.readyState) || (L(), C.ready());
    }
    (C.Callbacks = function (o) {
        o =
            "string" == typeof o
                ? N[o] ||
                  (function (e) {
                      var n = (N[e] = {});
                      return (
                          C.each(e.match(j) || [], function (e, t) {
                              n[t] = !0;
                          }),
                          n
                      );
                  })(o)
                : C.extend({}, o);
        var i,
            t,
            n,
            s,
            r,
            a,
            l = [],
            c = !o.once && [],
            u = function (e) {
                for (t = o.memory && e, n = !0, r = a || 0, a = 0, s = l.length, i = !0; l && r < s; r++)
                    if (!1 === l[r].apply(e[0], e[1]) && o.stopOnFalse) {
                        t = !1;
                        break;
                    }
                (i = !1), l && (c ? c.length && u(c.shift()) : t ? (l = []) : d.disable());
            },
            d = {
                add: function () {
                    if (l) {
                        var e = l.length;
                        !(function i(e) {
                            C.each(e, function (e, t) {
                                var n = C.type(t);
                                "function" === n ? (o.unique && d.has(t)) || l.push(t) : t && t.length && "string" !== n && i(t);
                            });
                        })(arguments),
                            i ? (s = l.length) : t && ((a = e), u(t));
                    }
                    return this;
                },
                remove: function () {
                    return (
                        l &&
                            C.each(arguments, function (e, t) {
                                for (var n; -1 < (n = C.inArray(t, l, n)); ) l.splice(n, 1), i && (n <= s && s--, n <= r && r--);
                            }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < C.inArray(e, l) : !(!l || !l.length);
                },
                empty: function () {
                    return (l = []), (s = 0), this;
                },
                disable: function () {
                    return (l = c = t = void 0), this;
                },
                disabled: function () {
                    return !l;
                },
                lock: function () {
                    return (c = void 0), t || d.disable(), this;
                },
                locked: function () {
                    return !c;
                },
                fireWith: function (e, t) {
                    return !l || (n && !c) || ((t = [e, (t = t || []).slice ? t.slice() : t]), i ? c.push(t) : u(t)), this;
                },
                fire: function () {
                    return d.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!n;
                },
            };
        return d;
    }),
        C.extend({
            Deferred: function (e) {
                var s = [
                        ["resolve", "done", C.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", C.Callbacks("memory")],
                    ],
                    o = "pending",
                    r = {
                        state: function () {
                            return o;
                        },
                        always: function () {
                            return a.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var o = arguments;
                            return C.Deferred(function (i) {
                                C.each(s, function (e, t) {
                                    var n = C.isFunction(o[e]) && o[e];
                                    a[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && C.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === r ? i.promise() : this, n ? [e] : arguments);
                                    });
                                }),
                                    (o = null);
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? C.extend(e, r) : r;
                        },
                    },
                    a = {};
                return (
                    (r.pipe = r.then),
                    C.each(s, function (e, t) {
                        var n = t[2],
                            i = t[3];
                        (r[t[1]] = n.add),
                            i &&
                                n.add(
                                    function () {
                                        o = i;
                                    },
                                    s[1 ^ e][2].disable,
                                    s[2][2].lock
                                ),
                            (a[t[0]] = function () {
                                return a[t[0] + "With"](this === a ? r : this, arguments), this;
                            }),
                            (a[t[0] + "With"] = n.fireWith);
                    }),
                    r.promise(a),
                    e && e.call(a, a),
                    a
                );
            },
            when: function (e) {
                function t(t, n, i) {
                    return function (e) {
                        (n[t] = this), (i[t] = 1 < arguments.length ? u.call(arguments) : e), i === o ? c.notifyWith(n, i) : --l || c.resolveWith(n, i);
                    };
                }
                var o,
                    n,
                    i,
                    s = 0,
                    r = u.call(arguments),
                    a = r.length,
                    l = 1 !== a || (e && C.isFunction(e.promise)) ? a : 0,
                    c = 1 === l ? e : C.Deferred();
                if (1 < a) for (o = new Array(a), n = new Array(a), i = new Array(a); s < a; s++) r[s] && C.isFunction(r[s].promise) ? r[s].promise().done(t(s, i, r)).fail(c.reject).progress(t(s, n, o)) : --l;
                return l || c.resolveWith(i, r), c.promise();
            },
        }),
        (C.fn.ready = function (e) {
            return C.ready.promise().done(e), this;
        }),
        C.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? C.readyWait++ : C.ready(!0);
            },
            ready: function (e) {
                if (!0 === e ? !--C.readyWait : !C.isReady) {
                    if (!T.body) return setTimeout(C.ready);
                    ((C.isReady = !0) !== e && 0 < --C.readyWait) || (E.resolveWith(T, [C]), C.fn.triggerHandler && (C(T).triggerHandler("ready"), C(T).off("ready")));
                }
            },
        }),
        (C.ready.promise = function (e) {
            if (!E)
                if (((E = C.Deferred()), "complete" === T.readyState)) setTimeout(C.ready);
                else if (T.addEventListener) T.addEventListener("DOMContentLoaded", D, !1), f.addEventListener("load", D, !1);
                else {
                    T.attachEvent("onreadystatechange", D), f.attachEvent("onload", D);
                    var n = !1;
                    try {
                        n = null == f.frameElement && T.documentElement;
                    } catch (e) {}
                    n &&
                        n.doScroll &&
                        !(function t() {
                            if (!C.isReady) {
                                try {
                                    n.doScroll("left");
                                } catch (e) {
                                    return setTimeout(t, 50);
                                }
                                L(), C.ready();
                            }
                        })();
                }
            return E.promise(e);
        });
    var H,
        O = "undefined";
    for (H in C(v)) break;
    (v.ownLast = "0" !== H),
        (v.inlineBlockNeedsLayout = !1),
        C(function () {
            var e, t, n, i;
            (n = T.getElementsByTagName("body")[0]) &&
                n.style &&
                ((t = T.createElement("div")),
                ((i = T.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                n.appendChild(i).appendChild(t),
                typeof t.style.zoom !== O && ((t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"), (v.inlineBlockNeedsLayout = e = 3 === t.offsetWidth), e && (n.style.zoom = 1)),
                n.removeChild(i));
        }),
        (function () {
            var e = T.createElement("div");
            if (null == v.deleteExpando) {
                v.deleteExpando = !0;
                try {
                    delete e.test;
                } catch (e) {
                    v.deleteExpando = !1;
                }
            }
            e = null;
        })(),
        (C.acceptData = function (e) {
            var t = C.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || (!0 !== t && e.getAttribute("classid") === t));
        });
    var z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        q = /([A-Z])/g;
    function P(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(q, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || ("false" !== n && ("null" === n ? null : +n + "" === n ? +n : z.test(n) ? C.parseJSON(n) : n));
                } catch (e) {}
                C.data(e, t, n);
            } else n = void 0;
        }
        return n;
    }
    function M(e) {
        var t;
        for (t in e) if (("data" !== t || !C.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function I(e, t, n, i) {
        if (C.acceptData(e)) {
            var o,
                s,
                r = C.expando,
                a = e.nodeType,
                l = a ? C.cache : e,
                c = a ? e[r] : e[r] && r;
            if ((c && l[c] && (i || l[c].data)) || void 0 !== n || "string" != typeof t)
                return (
                    c || (c = a ? (e[r] = d.pop() || C.guid++) : r),
                    l[c] || (l[c] = a ? {} : { toJSON: C.noop }),
                    ("object" != typeof t && "function" != typeof t) || (i ? (l[c] = C.extend(l[c], t)) : (l[c].data = C.extend(l[c].data, t))),
                    (s = l[c]),
                    i || (s.data || (s.data = {}), (s = s.data)),
                    void 0 !== n && (s[C.camelCase(t)] = n),
                    "string" == typeof t ? null == (o = s[t]) && (o = s[C.camelCase(t)]) : (o = s),
                    o
                );
        }
    }
    function F(e, t, n) {
        if (C.acceptData(e)) {
            var i,
                o,
                s = e.nodeType,
                r = s ? C.cache : e,
                a = s ? e[C.expando] : C.expando;
            if (r[a]) {
                if (t && (i = n ? r[a] : r[a].data)) {
                    o = (t = C.isArray(t) ? t.concat(C.map(t, C.camelCase)) : t in i ? [t] : (t = C.camelCase(t)) in i ? [t] : t.split(" ")).length;
                    for (; o--; ) delete i[t[o]];
                    if (n ? !M(i) : !C.isEmptyObject(i)) return;
                }
                (n || (delete r[a].data, M(r[a]))) && (s ? C.cleanData([e], !0) : v.deleteExpando || r != r.window ? delete r[a] : (r[a] = null));
            }
        }
    }
    C.extend({
        cache: {},
        noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },
        hasData: function (e) {
            return !!(e = e.nodeType ? C.cache[e[C.expando]] : e[C.expando]) && !M(e);
        },
        data: function (e, t, n) {
            return I(e, t, n);
        },
        removeData: function (e, t) {
            return F(e, t);
        },
        _data: function (e, t, n) {
            return I(e, t, n, !0);
        },
        _removeData: function (e, t) {
            return F(e, t, !0);
        },
    }),
        C.fn.extend({
            data: function (e, t) {
                var n,
                    i,
                    o,
                    s = this[0],
                    r = s && s.attributes;
                if (void 0 !== e)
                    return "object" == typeof e
                        ? this.each(function () {
                              C.data(this, e);
                          })
                        : 1 < arguments.length
                        ? this.each(function () {
                              C.data(this, e, t);
                          })
                        : s
                        ? P(s, e, C.data(s, e))
                        : void 0;
                if (this.length && ((o = C.data(s)), 1 === s.nodeType && !C._data(s, "parsedAttrs"))) {
                    for (n = r.length; n--; ) r[n] && 0 === (i = r[n].name).indexOf("data-") && P(s, (i = C.camelCase(i.slice(5))), o[i]);
                    C._data(s, "parsedAttrs", !0);
                }
                return o;
            },
            removeData: function (e) {
                return this.each(function () {
                    C.removeData(this, e);
                });
            },
        }),
        C.extend({
            queue: function (e, t, n) {
                var i;
                return e ? ((t = (t || "fx") + "queue"), (i = C._data(e, t)), n && (!i || C.isArray(n) ? (i = C._data(e, t, C.makeArray(n))) : i.push(n)), i || []) : void 0;
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    s = C._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), i--),
                    o &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete s.stop,
                        o.call(
                            e,
                            function () {
                                C.dequeue(e, t);
                            },
                            s
                        )),
                    !i && s && s.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    C._data(e, n) ||
                    C._data(e, n, {
                        empty: C.Callbacks("once memory").add(function () {
                            C._removeData(e, t + "queue"), C._removeData(e, n);
                        }),
                    })
                );
            },
        }),
        C.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? C.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = C.queue(this, t, n);
                              C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    C.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                function n() {
                    --o || s.resolveWith(r, [r]);
                }
                var i,
                    o = 1,
                    s = C.Deferred(),
                    r = this,
                    a = this.length;
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (i = C._data(r[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
                return n(), s.promise(t);
            },
        });
    function B(e, t) {
        return (e = t || e), "none" === C.css(e, "display") || !C.contains(e.ownerDocument, e);
    }
    var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        W = ["Top", "Right", "Bottom", "Left"],
        Q = (C.access = function (e, t, n, i, o, s, r) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === C.type(n)) for (a in ((o = !0), n)) C.access(e, t, a, n[a], !0, s, r);
            else if (
                void 0 !== i &&
                ((o = !0),
                C.isFunction(i) || (r = !0),
                c &&
                    (t = r
                        ? (t.call(e, i), null)
                        : ((c = t),
                          function (e, t, n) {
                              return c.call(C(e), n);
                          })),
                t)
            )
                for (; a < l; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : s;
        }),
        X = /^(?:checkbox|radio)$/i;
    !(function () {
        var e = T.createElement("input"),
            t = T.createElement("div"),
            n = T.createDocumentFragment();
        if (
            ((t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (v.leadingWhitespace = 3 === t.firstChild.nodeType),
            (v.tbody = !t.getElementsByTagName("tbody").length),
            (v.htmlSerialize = !!t.getElementsByTagName("link").length),
            (v.html5Clone = "<:nav></:nav>" !== T.createElement("nav").cloneNode(!0).outerHTML),
            (e.type = "checkbox"),
            (e.checked = !0),
            n.appendChild(e),
            (v.appendChecked = e.checked),
            (t.innerHTML = "<textarea>x</textarea>"),
            (v.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
            n.appendChild(t),
            (t.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
            (v.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (v.noCloneEvent = !0),
            t.attachEvent &&
                (t.attachEvent("onclick", function () {
                    v.noCloneEvent = !1;
                }),
                t.cloneNode(!0).click()),
            null == v.deleteExpando)
        ) {
            v.deleteExpando = !0;
            try {
                delete t.test;
            } catch (e) {
                v.deleteExpando = !1;
            }
        }
    })(),
        (function () {
            var e,
                t,
                n = T.createElement("div");
            for (e in { submit: !0, change: !0, focusin: !0 }) (t = "on" + e), (v[e + "Bubbles"] = t in f) || (n.setAttribute(t, "t"), (v[e + "Bubbles"] = !1 === n.attributes[t].expando));
            n = null;
        })();
    var U = /^(?:input|select|textarea)$/i,
        K = /^key/,
        V = /^(?:mouse|pointer|contextmenu)|click/,
        G = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;
    function J() {
        return !0;
    }
    function Z() {
        return !1;
    }
    function ee() {
        try {
            return T.activeElement;
        } catch (e) {}
    }
    function te(e) {
        var t = ne.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) for (; t.length; ) n.createElement(t.pop());
        return n;
    }
    (C.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var s,
                r,
                a,
                l,
                c,
                u,
                d,
                p,
                h,
                f,
                m,
                g = C._data(e);
            if (g) {
                for (
                    n.handler && ((n = (l = n).handler), (o = l.selector)),
                        n.guid || (n.guid = C.guid++),
                        (r = g.events) || (r = g.events = {}),
                        (u = g.handle) ||
                            ((u = g.handle = function (e) {
                                return typeof C === O || (e && C.event.triggered === e.type) ? void 0 : C.event.dispatch.apply(u.elem, arguments);
                            }).elem = e),
                        a = (t = (t || "").match(j) || [""]).length;
                    a--;

                )
                    (h = m = (s = Y.exec(t[a]) || [])[1]),
                        (f = (s[2] || "").split(".").sort()),
                        h &&
                            ((c = C.event.special[h] || {}),
                            (h = (o ? c.delegateType : c.bindType) || h),
                            (c = C.event.special[h] || {}),
                            (d = C.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && C.expr.match.needsContext.test(o), namespace: f.join(".") }, l)),
                            (p = r[h]) || (((p = r[h] = []).delegateCount = 0), (c.setup && !1 !== c.setup.call(e, i, f, u)) || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))),
                            c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
                            o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                            (C.event.global[h] = !0));
                e = null;
            }
        },
        remove: function (e, t, n, i, o) {
            var s,
                r,
                a,
                l,
                c,
                u,
                d,
                p,
                h,
                f,
                m,
                g = C.hasData(e) && C._data(e);
            if (g && (u = g.events)) {
                for (c = (t = (t || "").match(j) || [""]).length; c--; )
                    if (((h = m = (a = Y.exec(t[c]) || [])[1]), (f = (a[2] || "").split(".").sort()), h)) {
                        for (d = C.event.special[h] || {}, p = u[(h = (i ? d.delegateType : d.bindType) || h)] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = p.length; s--; )
                            (r = p[s]),
                                (!o && m !== r.origType) ||
                                    (n && n.guid !== r.guid) ||
                                    (a && !a.test(r.namespace)) ||
                                    (i && i !== r.selector && ("**" !== i || !r.selector)) ||
                                    (p.splice(s, 1), r.selector && p.delegateCount--, d.remove && d.remove.call(e, r));
                        l && !p.length && ((d.teardown && !1 !== d.teardown.call(e, f, g.handle)) || C.removeEvent(e, h, g.handle), delete u[h]);
                    } else for (h in u) C.event.remove(e, h + t[c], n, i, !0);
                C.isEmptyObject(u) && (delete g.handle, C._removeData(e, "events"));
            }
        },
        trigger: function (e, t, n, i) {
            var o,
                s,
                r,
                a,
                l,
                c,
                u,
                d = [n || T],
                p = g.call(e, "type") ? e.type : e,
                h = g.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((r = c = n = n || T),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !G.test(p + C.event.triggered) &&
                    (0 <= p.indexOf(".") && ((p = (h = p.split(".")).shift()), h.sort()),
                    (s = p.indexOf(":") < 0 && "on" + p),
                    ((e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                    (e.namespace = h.join(".")),
                    (e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : C.makeArray(t, [e])),
                    (l = C.event.special[p] || {}),
                    i || !l.trigger || !1 !== l.trigger.apply(n, t)))
            ) {
                if (!i && !l.noBubble && !C.isWindow(n)) {
                    for (a = l.delegateType || p, G.test(a + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), (c = r);
                    c === (n.ownerDocument || T) && d.push(c.defaultView || c.parentWindow || f);
                }
                for (u = 0; (r = d[u++]) && !e.isPropagationStopped(); )
                    (e.type = 1 < u ? a : l.bindType || p),
                        (o = (C._data(r, "events") || {})[e.type] && C._data(r, "handle")) && o.apply(r, t),
                        (o = s && r[s]) && o.apply && C.acceptData(r) && ((e.result = o.apply(r, t)), !1 === e.result && e.preventDefault());
                if (((e.type = p), !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && C.acceptData(n) && s && n[p] && !C.isWindow(n))) {
                    (c = n[s]) && (n[s] = null), (C.event.triggered = p);
                    try {
                        n[p]();
                    } catch (e) {}
                    (C.event.triggered = void 0), c && (n[s] = c);
                }
                return e.result;
            }
        },
        dispatch: function (e) {
            e = C.event.fix(e);
            var t,
                n,
                i,
                o,
                s,
                r = [],
                a = u.call(arguments),
                l = (C._data(this, "events") || {})[e.type] || [],
                c = C.event.special[e.type] || {};
            if ((((a[0] = e).delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, e))) {
                for (r = C.event.handlers.call(this, e, l), t = 0; (o = r[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = o.elem, s = 0; (i = o.handlers[s++]) && !e.isImmediatePropagationStopped(); )
                        (e.namespace_re && !e.namespace_re.test(i.namespace)) ||
                            ((e.handleObj = i), (e.data = i.data), void 0 !== (n = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                o,
                s,
                r = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (o = [], s = 0; s < a; s++) void 0 === o[(n = (i = t[s]).selector + " ")] && (o[n] = i.needsContext ? 0 <= C(n, this).index(l) : C.find(n, this, null, [l]).length), o[n] && o.push(i);
                        o.length && r.push({ elem: l, handlers: o });
                    }
            return a < t.length && r.push({ elem: this, handlers: t.slice(a) }), r;
        },
        fix: function (e) {
            if (e[C.expando]) return e;
            var t,
                n,
                i,
                o = e.type,
                s = e,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = V.test(o) ? this.mouseHooks : K.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new C.Event(s), t = i.length; t--; ) e[(n = i[t])] = s[n];
            return e.target || (e.target = s.srcElement || T), 3 === e.target.nodeType && (e.target = e.target.parentNode), (e.metaKey = !!e.metaKey), r.filter ? r.filter(e, s) : e;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n,
                    i,
                    o,
                    s = t.button,
                    r = t.fromElement;
                return (
                    null == e.pageX &&
                        null != t.clientX &&
                        ((o = (i = e.target.ownerDocument || T).documentElement),
                        (n = i.body),
                        (e.pageX = t.clientX + ((o && o.scrollLeft) || (n && n.scrollLeft) || 0) - ((o && o.clientLeft) || (n && n.clientLeft) || 0)),
                        (e.pageY = t.clientY + ((o && o.scrollTop) || (n && n.scrollTop) || 0) - ((o && o.clientTop) || (n && n.clientTop) || 0))),
                    !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r),
                    e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                    e
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== ee() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (e) {}
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    return this === ee() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    return C.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
                },
                _default: function (e) {
                    return C.nodeName(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
        simulate: function (e, t, n, i) {
            var o = C.extend(new C.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });
            i ? C.event.trigger(o, null, t) : C.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault();
        },
    }),
        (C.removeEvent = T.removeEventListener
            ? function (e, t, n) {
                  e.removeEventListener && e.removeEventListener(t, n, !1);
              }
            : function (e, t, n) {
                  var i = "on" + t;
                  e.detachEvent && (typeof e[i] === O && (e[i] = null), e.detachEvent(i, n));
              }),
        (C.Event = function (e, t) {
            return this instanceof C.Event
                ? (e && e.type ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? J : Z)) : (this.type = e),
                  t && C.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || C.now()),
                  void (this[C.expando] = !0))
                : new C.Event(e, t);
        }),
        (C.Event.prototype = {
            isDefaultPrevented: Z,
            isPropagationStopped: Z,
            isImmediatePropagationStopped: Z,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = J), e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = J), e && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = J), e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        C.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, o) {
            C.event.special[e] = {
                delegateType: o,
                bindType: o,
                handle: function (e) {
                    var t,
                        n = e.relatedTarget,
                        i = e.handleObj;
                    return (n && (n === this || C.contains(this, n))) || ((e.type = i.origType), (t = i.handler.apply(this, arguments)), (e.type = o)), t;
                },
            };
        }),
        v.submitBubbles ||
            (C.event.special.submit = {
                setup: function () {
                    return (
                        !C.nodeName(this, "form") &&
                        void C.event.add(this, "click._submit keypress._submit", function (e) {
                            var t = e.target,
                                n = C.nodeName(t, "input") || C.nodeName(t, "button") ? t.form : void 0;
                            n &&
                                !C._data(n, "submitBubbles") &&
                                (C.event.add(n, "submit._submit", function (e) {
                                    e._submit_bubble = !0;
                                }),
                                C._data(n, "submitBubbles", !0));
                        })
                    );
                },
                postDispatch: function (e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && C.event.simulate("submit", this.parentNode, e, !0));
                },
                teardown: function () {
                    return !C.nodeName(this, "form") && void C.event.remove(this, "._submit");
                },
            }),
        v.changeBubbles ||
            (C.event.special.change = {
                setup: function () {
                    return U.test(this.nodeName)
                        ? (("checkbox" !== this.type && "radio" !== this.type) ||
                              (C.event.add(this, "propertychange._change", function (e) {
                                  "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
                              }),
                              C.event.add(this, "click._change", function (e) {
                                  this._just_changed && !e.isTrigger && (this._just_changed = !1), C.event.simulate("change", this, e, !0);
                              })),
                          !1)
                        : void C.event.add(this, "beforeactivate._change", function (e) {
                              var t = e.target;
                              U.test(t.nodeName) &&
                                  !C._data(t, "changeBubbles") &&
                                  (C.event.add(t, "change._change", function (e) {
                                      !this.parentNode || e.isSimulated || e.isTrigger || C.event.simulate("change", this.parentNode, e, !0);
                                  }),
                                  C._data(t, "changeBubbles", !0));
                          });
                },
                handle: function (e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || ("radio" !== t.type && "checkbox" !== t.type) ? e.handleObj.handler.apply(this, arguments) : void 0;
                },
                teardown: function () {
                    return C.event.remove(this, "._change"), !U.test(this.nodeName);
                },
            }),
        v.focusinBubbles ||
            C.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
                function o(e) {
                    C.event.simulate(i, e.target, C.event.fix(e), !0);
                }
                C.event.special[i] = {
                    setup: function () {
                        var e = this.ownerDocument || this,
                            t = C._data(e, i);
                        t || e.addEventListener(n, o, !0), C._data(e, i, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this,
                            t = C._data(e, i) - 1;
                        t ? C._data(e, i, t) : (e.removeEventListener(n, o, !0), C._removeData(e, i));
                    },
                };
            }),
        C.fn.extend({
            on: function (e, t, n, i, o) {
                var s, r;
                if ("object" == typeof e) {
                    for (s in ("string" != typeof t && ((n = n || t), (t = void 0)), e)) this.on(s, t, n, e[s], o);
                    return this;
                }
                if ((null == n && null == i ? ((i = t), (n = t = void 0)) : null == i && ("string" == typeof t ? ((i = n), (n = void 0)) : ((i = n), (n = t), (t = void 0))), !1 === i)) i = Z;
                else if (!i) return this;
                return (
                    1 === o &&
                        ((r = i),
                        ((i = function (e) {
                            return C().off(e), r.apply(this, arguments);
                        }).guid = r.guid || (r.guid = C.guid++))),
                    this.each(function () {
                        C.event.add(this, e, i, n, t);
                    })
                );
            },
            one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                        !1 === n && (n = Z),
                        this.each(function () {
                            C.event.remove(this, e, n, t);
                        })
                    );
                for (o in e) this.off(o, t, e[o]);
                return this;
            },
            trigger: function (e, t) {
                return this.each(function () {
                    C.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                return n ? C.event.trigger(e, t, n, !0) : void 0;
            },
        });
    var ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ie = / jQuery\d+="(?:null|\d+)"/g,
        oe = new RegExp("<(?:" + ne + ")[\\s/>]", "i"),
        se = /^\s+/,
        re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ae = /<([\w:]+)/,
        le = /<tbody/i,
        ce = /<|&#?\w+;/,
        ue = /<(?:script|style|link)/i,
        de = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pe = /^$|\/(?:java|ecma)script/i,
        he = /^true\/(.*)/,
        fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
        },
        ge = te(T).appendChild(T.createElement("div"));
    function ve(e, t) {
        var n,
            i,
            o = 0,
            s = typeof e.getElementsByTagName !== O ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== O ? e.querySelectorAll(t || "*") : void 0;
        if (!s) for (s = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || C.nodeName(i, t) ? s.push(i) : C.merge(s, ve(i, t));
        return void 0 === t || (t && C.nodeName(e, t)) ? C.merge([e], s) : s;
    }
    function ye(e) {
        X.test(e.type) && (e.defaultChecked = e.checked);
    }
    function be(e, t) {
        return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function we(e) {
        return (e.type = (null !== C.find.attr(e, "type")) + "/" + e.type), e;
    }
    function ke(e) {
        var t = he.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function xe(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) C._data(n, "globalEval", !t || C._data(t[i], "globalEval"));
    }
    function Ce(e, t) {
        if (1 === t.nodeType && C.hasData(e)) {
            var n,
                i,
                o,
                s = C._data(e),
                r = C._data(t, s),
                a = s.events;
            if (a) for (n in (delete r.handle, (r.events = {}), a)) for (i = 0, o = a[n].length; i < o; i++) C.event.add(t, n, a[n][i]);
            r.data && (r.data = C.extend({}, r.data));
        }
    }
    function Te(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (((n = t.nodeName.toLowerCase()), !v.noCloneEvent && t[C.expando])) {
                for (i in (o = C._data(t)).events) C.removeEvent(t, i, o.handle);
                t.removeAttribute(C.expando);
            }
            "script" === n && t.text !== e.text
                ? ((we(t).text = e.text), ke(t))
                : "object" === n
                ? (t.parentNode && (t.outerHTML = e.outerHTML), v.html5Clone && e.innerHTML && !C.trim(t.innerHTML) && (t.innerHTML = e.innerHTML))
                : "input" === n && X.test(e.type)
                ? ((t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value))
                : "option" === n
                ? (t.defaultSelected = t.selected = e.defaultSelected)
                : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
        }
    }
    (me.optgroup = me.option),
        (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
        (me.th = me.td),
        C.extend({
            clone: function (e, t, n) {
                var i,
                    o,
                    s,
                    r,
                    a,
                    l = C.contains(e.ownerDocument, e);
                if (
                    (v.html5Clone || C.isXMLDoc(e) || !oe.test("<" + e.nodeName + ">") ? (s = e.cloneNode(!0)) : ((ge.innerHTML = e.outerHTML), ge.removeChild((s = ge.firstChild))),
                    !((v.noCloneEvent && v.noCloneChecked) || (1 !== e.nodeType && 11 !== e.nodeType) || C.isXMLDoc(e)))
                )
                    for (i = ve(s), a = ve(e), r = 0; null != (o = a[r]); ++r) i[r] && Te(o, i[r]);
                if (t)
                    if (n) for (a = a || ve(e), i = i || ve(s), r = 0; null != (o = a[r]); r++) Ce(o, i[r]);
                    else Ce(e, s);
                return 0 < (i = ve(s, "script")).length && xe(i, !l && ve(e, "script")), (i = a = o = null), s;
            },
            buildFragment: function (e, t, n, i) {
                for (var o, s, r, a, l, c, u, d = e.length, p = te(t), h = [], f = 0; f < d; f++)
                    if ((s = e[f]) || 0 === s)
                        if ("object" === C.type(s)) C.merge(h, s.nodeType ? [s] : s);
                        else if (ce.test(s)) {
                            for (a = a || p.appendChild(t.createElement("div")), l = (ae.exec(s) || ["", ""])[1].toLowerCase(), u = me[l] || me._default, a.innerHTML = u[1] + s.replace(re, "<$1></$2>") + u[2], o = u[0]; o--; )
                                a = a.lastChild;
                            if ((!v.leadingWhitespace && se.test(s) && h.push(t.createTextNode(se.exec(s)[0])), !v.tbody))
                                for (o = (s = "table" !== l || le.test(s) ? ("<table>" !== u[1] || le.test(s) ? 0 : a) : a.firstChild) && s.childNodes.length; o--; )
                                    C.nodeName((c = s.childNodes[o]), "tbody") && !c.childNodes.length && s.removeChild(c);
                            for (C.merge(h, a.childNodes), a.textContent = ""; a.firstChild; ) a.removeChild(a.firstChild);
                            a = p.lastChild;
                        } else h.push(t.createTextNode(s));
                for (a && p.removeChild(a), v.appendChecked || C.grep(ve(h, "input"), ye), f = 0; (s = h[f++]); )
                    if ((!i || -1 === C.inArray(s, i)) && ((r = C.contains(s.ownerDocument, s)), (a = ve(p.appendChild(s), "script")), r && xe(a), n)) for (o = 0; (s = a[o++]); ) pe.test(s.type || "") && n.push(s);
                return (a = null), p;
            },
            cleanData: function (e, t) {
                for (var n, i, o, s, r = 0, a = C.expando, l = C.cache, c = v.deleteExpando, u = C.event.special; null != (n = e[r]); r++)
                    if ((t || C.acceptData(n)) && (s = (o = n[a]) && l[o])) {
                        if (s.events) for (i in s.events) u[i] ? C.event.remove(n, i) : C.removeEvent(n, i, s.handle);
                        l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== O ? n.removeAttribute(a) : (n[a] = null), d.push(o));
                    }
            },
        }),
        C.fn.extend({
            text: function (e) {
                return Q(
                    this,
                    function (e) {
                        return void 0 === e ? C.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || T).createTextNode(e));
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return this.domManip(arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || be(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = be(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            remove: function (e, t) {
                for (var n, i = e ? C.filter(e, this) : this, o = 0; null != (n = i[o]); o++)
                    t || 1 !== n.nodeType || C.cleanData(ve(n)), n.parentNode && (t && C.contains(n.ownerDocument, n) && xe(ve(n, "script")), n.parentNode.removeChild(n));
                return this;
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && C.cleanData(ve(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                    e.options && C.nodeName(e, "select") && (e.options.length = 0);
                }
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return C.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return Q(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ie, "") : void 0;
                        if (!("string" != typeof e || ue.test(e) || (!v.htmlSerialize && oe.test(e)) || (!v.leadingWhitespace && se.test(e)) || me[(ae.exec(e) || ["", ""])[1].toLowerCase()])) {
                            e = e.replace(re, "<$1></$2>");
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(ve(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var t = arguments[0];
                return (
                    this.domManip(arguments, function (e) {
                        (t = this.parentNode), C.cleanData(ve(this)), t && t.replaceChild(e, this);
                    }),
                    t && (t.length || t.nodeType) ? this : this.remove()
                );
            },
            detach: function (e) {
                return this.remove(e, !0);
            },
            domManip: function (n, i) {
                n = m.apply([], n);
                var e,
                    t,
                    o,
                    s,
                    r,
                    a,
                    l = 0,
                    c = this.length,
                    u = this,
                    d = c - 1,
                    p = n[0],
                    h = C.isFunction(p);
                if (h || (1 < c && "string" == typeof p && !v.checkClone && de.test(p)))
                    return this.each(function (e) {
                        var t = u.eq(e);
                        h && (n[0] = p.call(this, e, t.html())), t.domManip(n, i);
                    });
                if (c && ((e = (a = C.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild), 1 === a.childNodes.length && (a = e), e)) {
                    for (o = (s = C.map(ve(a, "script"), we)).length; l < c; l++) (t = a), l !== d && ((t = C.clone(t, !0, !0)), o && C.merge(s, ve(t, "script"))), i.call(this[l], t, l);
                    if (o)
                        for (r = s[s.length - 1].ownerDocument, C.map(s, ke), l = 0; l < o; l++)
                            (t = s[l]), pe.test(t.type || "") && !C._data(t, "globalEval") && C.contains(r, t) && (t.src ? C._evalUrl && C._evalUrl(t.src) : C.globalEval((t.text || t.textContent || t.innerHTML || "").replace(fe, "")));
                    a = e = null;
                }
                return this;
            },
        }),
        C.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, r) {
            C.fn[e] = function (e) {
                for (var t, n = 0, i = [], o = C(e), s = o.length - 1; n <= s; n++) (t = n === s ? this : this.clone(!0)), C(o[n])[r](t), a.apply(i, t.get());
                return this.pushStack(i);
            };
        });
    var Se,
        _e,
        $e = {};
    function Ae(e, t) {
        var n,
            i = C(t.createElement(e)).appendTo(t.body),
            o = f.getDefaultComputedStyle && (n = f.getDefaultComputedStyle(i[0])) ? n.display : C.css(i[0], "display");
        return i.detach(), o;
    }
    function Ee(e) {
        var t = T,
            n = $e[e];
        return (
            n ||
                (("none" !== (n = Ae(e, t)) && n) ||
                    ((t = ((Se = (Se || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Se[0].contentDocument).document).write(), t.close(), (n = Ae(e, t)), Se.detach()),
                ($e[e] = n)),
            n
        );
    }
    v.shrinkWrapBlocks = function () {
        return null != _e
            ? _e
            : ((_e = !1),
              (t = T.getElementsByTagName("body")[0]) && t.style
                  ? ((e = T.createElement("div")),
                    ((n = T.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                    t.appendChild(n).appendChild(e),
                    typeof e.style.zoom !== O &&
                        ((e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                        (e.appendChild(T.createElement("div")).style.width = "5px"),
                        (_e = 3 !== e.offsetWidth)),
                    t.removeChild(n),
                    _e)
                  : void 0);
    };
    var je,
        Ne,
        Le = /^margin/,
        De = new RegExp("^(" + R + ")(?!px)[a-z%]+$", "i"),
        He = /^(top|right|bottom|left)$/;
    function Oe(t, n) {
        return {
            get: function () {
                var e = t();
                if (null != e) return e ? void delete this.get : (this.get = n).apply(this, arguments);
            },
        };
    }
    f.getComputedStyle
        ? ((je = function (e) {
              return e.ownerDocument.defaultView.getComputedStyle(e, null);
          }),
          (Ne = function (e, t, n) {
              var i,
                  o,
                  s,
                  r,
                  a = e.style;
              return (
                  (r = (n = n || je(e)) ? n.getPropertyValue(t) || n[t] : void 0),
                  n &&
                      ("" !== r || C.contains(e.ownerDocument, e) || (r = C.style(e, t)),
                      De.test(r) && Le.test(t) && ((i = a.width), (o = a.minWidth), (s = a.maxWidth), (a.minWidth = a.maxWidth = a.width = r), (r = n.width), (a.width = i), (a.minWidth = o), (a.maxWidth = s))),
                  void 0 === r ? r : r + ""
              );
          }))
        : T.documentElement.currentStyle &&
          ((je = function (e) {
              return e.currentStyle;
          }),
          (Ne = function (e, t, n) {
              var i,
                  o,
                  s,
                  r,
                  a = e.style;
              return (
                  null == (r = (n = n || je(e)) ? n[t] : void 0) && a && a[t] && (r = a[t]),
                  De.test(r) && !He.test(t) && ((i = a.left), (s = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), (a.left = "fontSize" === t ? "1em" : r), (r = a.pixelLeft + "px"), (a.left = i), s && (o.left = s)),
                  void 0 === r ? r : r + "" || "auto"
              );
          })),
        (function () {
            var e, t, n, o, s, r, a;
            if ((((e = T.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"), (t = (n = e.getElementsByTagName("a")[0]) && n.style))) {
                function i() {
                    var e, t, n, i;
                    (t = T.getElementsByTagName("body")[0]) &&
                        t.style &&
                        ((e = T.createElement("div")),
                        ((n = T.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                        t.appendChild(n).appendChild(e),
                        (e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                        (o = s = !1),
                        (a = !0),
                        f.getComputedStyle &&
                            ((o = "1%" !== (f.getComputedStyle(e, null) || {}).top),
                            (s = "4px" === (f.getComputedStyle(e, null) || { width: "4px" }).width),
                            ((i = e.appendChild(T.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                            (i.style.marginRight = i.style.width = "0"),
                            (e.style.width = "1px"),
                            (a = !parseFloat((f.getComputedStyle(i, null) || {}).marginRight))),
                        (e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                        ((i = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                        (r = 0 === i[0].offsetHeight) && ((i[0].style.display = ""), (i[1].style.display = "none"), (r = 0 === i[0].offsetHeight)),
                        t.removeChild(n));
                }
                (t.cssText = "float:left;opacity:.5"),
                    (v.opacity = "0.5" === t.opacity),
                    (v.cssFloat = !!t.cssFloat),
                    (e.style.backgroundClip = "content-box"),
                    (e.cloneNode(!0).style.backgroundClip = ""),
                    (v.clearCloneStyle = "content-box" === e.style.backgroundClip),
                    (v.boxSizing = "" === t.boxSizing || "" === t.MozBoxSizing || "" === t.WebkitBoxSizing),
                    C.extend(v, {
                        reliableHiddenOffsets: function () {
                            return null == r && i(), r;
                        },
                        boxSizingReliable: function () {
                            return null == s && i(), s;
                        },
                        pixelPosition: function () {
                            return null == o && i(), o;
                        },
                        reliableMarginRight: function () {
                            return null == a && i(), a;
                        },
                    });
            }
        })(),
        (C.swap = function (e, t, n, i) {
            var o,
                s,
                r = {};
            for (s in t) (r[s] = e.style[s]), (e.style[s] = t[s]);
            for (s in ((o = n.apply(e, i || [])), t)) e.style[s] = r[s];
            return o;
        });
    var ze = /alpha\([^)]*\)/i,
        qe = /opacity\s*=\s*([^)]*)/,
        Pe = /^(none|table(?!-c[ea]).+)/,
        Me = new RegExp("^(" + R + ")(.*)$", "i"),
        Ie = new RegExp("^([+-])=(" + R + ")", "i"),
        Fe = { position: "absolute", visibility: "hidden", display: "block" },
        Be = { letterSpacing: "0", fontWeight: "400" },
        Re = ["Webkit", "O", "Moz", "ms"];
    function We(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = Re.length; o--; ) if ((t = Re[o] + n) in e) return t;
        return i;
    }
    function Qe(e, t) {
        for (var n, i, o, s = [], r = 0, a = e.length; r < a; r++)
            (i = e[r]).style &&
                ((s[r] = C._data(i, "olddisplay")),
                (n = i.style.display),
                t
                    ? (s[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && B(i) && (s[r] = C._data(i, "olddisplay", Ee(i.nodeName))))
                    : ((o = B(i)), ((n && "none" !== n) || !o) && C._data(i, "olddisplay", o ? n : C.css(i, "display"))));
        for (r = 0; r < a; r++) (i = e[r]).style && ((t && "none" !== i.style.display && "" !== i.style.display) || (i.style.display = t ? s[r] || "" : "none"));
        return e;
    }
    function Xe(e, t, n) {
        var i = Me.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
    }
    function Ue(e, t, n, i, o) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; s < 4; s += 2)
            "margin" === n && (r += C.css(e, n + W[s], !0, o)),
                i
                    ? ("content" === n && (r -= C.css(e, "padding" + W[s], !0, o)), "margin" !== n && (r -= C.css(e, "border" + W[s] + "Width", !0, o)))
                    : ((r += C.css(e, "padding" + W[s], !0, o)), "padding" !== n && (r += C.css(e, "border" + W[s] + "Width", !0, o)));
        return r;
    }
    function Ke(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = je(e),
            r = v.boxSizing && "border-box" === C.css(e, "boxSizing", !1, s);
        if (o <= 0 || null == o) {
            if ((((o = Ne(e, t, s)) < 0 || null == o) && (o = e.style[t]), De.test(o))) return o;
            (i = r && (v.boxSizingReliable() || o === e.style[t])), (o = parseFloat(o) || 0);
        }
        return o + Ue(e, t, n || (r ? "border" : "content"), i, s) + "px";
    }
    function Ve(e, t, n, i, o) {
        return new Ve.prototype.init(e, t, n, i, o);
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ne(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: v.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                    s,
                    r,
                    a = C.camelCase(t),
                    l = e.style;
                if (((t = C.cssProps[a] || (C.cssProps[a] = We(l, a))), (r = C.cssHooks[t] || C.cssHooks[a]), void 0 === n)) return r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : l[t];
                if (
                    ("string" === (s = typeof n) && (o = Ie.exec(n)) && ((n = (o[1] + 1) * o[2] + parseFloat(C.css(e, t))), (s = "number")),
                    null != n && n == n && ("number" !== s || C.cssNumber[a] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (n = r.set(e, n, i)))))
                )
                    try {
                        l[t] = n;
                    } catch (e) {}
            }
        },
        css: function (e, t, n, i) {
            var o,
                s,
                r,
                a = C.camelCase(t);
            return (
                (t = C.cssProps[a] || (C.cssProps[a] = We(e.style, a))),
                (r = C.cssHooks[t] || C.cssHooks[a]) && "get" in r && (s = r.get(e, !0, n)),
                void 0 === s && (s = Ne(e, t, i)),
                "normal" === s && t in Be && (s = Be[t]),
                "" === n || n ? ((o = parseFloat(s)), !0 === n || C.isNumeric(o) ? o || 0 : s) : s
            );
        },
    }),
        C.each(["height", "width"], function (e, o) {
            C.cssHooks[o] = {
                get: function (e, t, n) {
                    return t
                        ? Pe.test(C.css(e, "display")) && 0 === e.offsetWidth
                            ? C.swap(e, Fe, function () {
                                  return Ke(e, o, n);
                              })
                            : Ke(e, o, n)
                        : void 0;
                },
                set: function (e, t, n) {
                    var i = n && je(e);
                    return Xe(0, t, n ? Ue(e, o, n, v.boxSizing && "border-box" === C.css(e, "boxSizing", !1, i), i) : 0);
                },
            };
        }),
        v.opacity ||
            (C.cssHooks.opacity = {
                get: function (e, t) {
                    return qe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
                },
                set: function (e, t) {
                    var n = e.style,
                        i = e.currentStyle,
                        o = C.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        s = (i && i.filter) || n.filter || "";
                    (((n.zoom = 1) <= t || "" === t) && "" === C.trim(s.replace(ze, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || (i && !i.filter))) || (n.filter = ze.test(s) ? s.replace(ze, o) : s + " " + o);
                },
            }),
        (C.cssHooks.marginRight = Oe(v.reliableMarginRight, function (e, t) {
            return t ? C.swap(e, { display: "inline-block" }, Ne, [e, "marginRight"]) : void 0;
        })),
        C.each({ margin: "", padding: "", border: "Width" }, function (o, s) {
            (C.cssHooks[o + s] = {
                expand: function (e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + W[t] + s] = i[t] || i[t - 2] || i[0];
                    return n;
                },
            }),
                Le.test(o) || (C.cssHooks[o + s].set = Xe);
        }),
        C.fn.extend({
            css: function (e, t) {
                return Q(
                    this,
                    function (e, t, n) {
                        var i,
                            o,
                            s = {},
                            r = 0;
                        if (C.isArray(t)) {
                            for (i = je(e), o = t.length; r < o; r++) s[t[r]] = C.css(e, t[r], !1, i);
                            return s;
                        }
                        return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
            show: function () {
                return Qe(this, !0);
            },
            hide: function () {
                return Qe(this);
            },
            toggle: function (e) {
                return "boolean" == typeof e
                    ? e
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          B(this) ? C(this).show() : C(this).hide();
                      });
            },
        }),
        (((C.Tween = Ve).prototype = {
            constructor: Ve,
            init: function (e, t, n, i, o, s) {
                (this.elem = e), (this.prop = n), (this.easing = o || "swing"), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = s || (C.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = Ve.propHooks[this.prop];
                return e && e.get ? e.get(this) : Ve.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = Ve.propHooks[this.prop];
                return (
                    (this.pos = t = this.options.duration ? C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Ve.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = Ve.prototype),
        ((Ve.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || (e.elem.style && null != e.elem.style[e.prop]) ? ((t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0) : e.elem[e.prop];
                },
                set: function (e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[C.cssProps[e.prop]] || C.cssHooks[e.prop]) ? C.style(e.elem, e.prop, e.now + e.unit) : (e.elem[e.prop] = e.now);
                },
            },
        }).scrollTop = Ve.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (C.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
        }),
        (C.fx = Ve.prototype.init),
        (C.fx.step = {});
    var Ge,
        Ye,
        Je,
        Ze,
        et,
        tt,
        nt,
        it = /^(?:toggle|show|hide)$/,
        ot = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$", "i"),
        st = /queueHooks$/,
        rt = [
            function (t, e, n) {
                var i,
                    o,
                    s,
                    r,
                    a,
                    l,
                    c,
                    u = this,
                    d = {},
                    p = t.style,
                    h = t.nodeType && B(t),
                    f = C._data(t, "fxshow");
                for (i in (n.queue ||
                    (null == (a = C._queueHooks(t, "fx")).unqueued &&
                        ((a.unqueued = 0),
                        (l = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || l();
                        })),
                    a.unqueued++,
                    u.always(function () {
                        u.always(function () {
                            a.unqueued--, C.queue(t, "fx").length || a.empty.fire();
                        });
                    })),
                1 === t.nodeType &&
                    ("height" in e || "width" in e) &&
                    ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                    (c = C.css(t, "display")),
                    "inline" === ("none" === c ? C._data(t, "olddisplay") || Ee(t.nodeName) : c) && "none" === C.css(t, "float") && (v.inlineBlockNeedsLayout && "inline" !== Ee(t.nodeName) ? (p.zoom = 1) : (p.display = "inline-block"))),
                n.overflow &&
                    ((p.overflow = "hidden"),
                    v.shrinkWrapBlocks() ||
                        u.always(function () {
                            (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                        })),
                e))
                    if (((o = e[i]), it.exec(o))) {
                        if ((delete e[i], (s = s || "toggle" === o), o === (h ? "hide" : "show"))) {
                            if ("show" !== o || !f || void 0 === f[i]) continue;
                            h = !0;
                        }
                        d[i] = (f && f[i]) || C.style(t, i);
                    } else c = void 0;
                if (C.isEmptyObject(d)) "inline" === ("none" === c ? Ee(t.nodeName) : c) && (p.display = c);
                else
                    for (i in (f ? "hidden" in f && (h = f.hidden) : (f = C._data(t, "fxshow", {})),
                    s && (f.hidden = !h),
                    h
                        ? C(t).show()
                        : u.done(function () {
                              C(t).hide();
                          }),
                    u.done(function () {
                        var e;
                        for (e in (C._removeData(t, "fxshow"), d)) C.style(t, e, d[e]);
                    }),
                    d))
                        (r = ut(h ? f[i] : 0, i, u)), i in f || ((f[i] = r.start), h && ((r.end = r.start), (r.start = "width" === i || "height" === i ? 1 : 0)));
            },
        ],
        at = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        o = ot.exec(t),
                        s = (o && o[3]) || (C.cssNumber[e] ? "" : "px"),
                        r = (C.cssNumber[e] || ("px" !== s && +i)) && ot.exec(C.css(n.elem, e)),
                        a = 1,
                        l = 20;
                    if (r && r[3] !== s) for (s = s || r[3], o = o || [], r = +i || 1; (r /= a = a || ".5"), C.style(n.elem, e, r + s), a !== (a = n.cur() / i) && 1 !== a && --l; );
                    return o && ((r = n.start = +r || +i || 0), (n.unit = s), (n.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2])), n;
                },
            ],
        };
    function lt() {
        return (
            setTimeout(function () {
                Ge = void 0;
            }),
            (Ge = C.now())
        );
    }
    function ct(e, t) {
        var n,
            i = { height: e },
            o = 0;
        for (t = t ? 1 : 0; o < 4; o += 2 - t) i["margin" + (n = W[o])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function ut(e, t, n) {
        for (var i, o = (at[t] || []).concat(at["*"]), s = 0, r = o.length; s < r; s++) if ((i = o[s].call(n, t, e))) return i;
    }
    function dt(s, e, t) {
        var n,
            r,
            i = 0,
            o = rt.length,
            a = C.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (r) return !1;
                for (var e = Ge || lt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
                return a.notifyWith(s, [c, n, t]), n < 1 && o ? t : (a.resolveWith(s, [c]), !1);
            },
            c = a.promise({
                elem: s,
                props: C.extend({}, e),
                opts: C.extend(!0, { specialEasing: {} }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ge || lt(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = C.Tween(s, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? a.resolveWith(s, [c, e]) : a.rejectWith(s, [c, e]), this;
                },
            }),
            u = c.props;
        for (
            (function (e, t) {
                var n, i, o, s, r;
                for (n in e)
                    if (((o = t[(i = C.camelCase(n))]), (s = e[n]), C.isArray(s) && ((o = s[1]), (s = e[n] = s[0])), n !== i && ((e[i] = s), delete e[n]), (r = C.cssHooks[i]) && ("expand" in r)))
                        for (n in ((s = r.expand(s)), delete e[i], s)) (n in e) || ((e[n] = s[n]), (t[n] = o));
                    else t[i] = o;
            })(u, c.opts.specialEasing);
            i < o;
            i++
        )
            if ((n = rt[i].call(c, s, u, c.opts))) return n;
        return (
            C.map(u, ut, c),
            C.isFunction(c.opts.start) && c.opts.start.call(s, c),
            C.fx.timer(C.extend(l, { elem: s, anim: c, queue: c.opts.queue })),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        );
    }
    (C.Animation = C.extend(dt, {
        tweener: function (e, t) {
            for (var n, i = 0, o = (e = C.isFunction(e) ? ((t = e), ["*"]) : e.split(" ")).length; i < o; i++) (n = e[i]), (at[n] = at[n] || []), at[n].unshift(t);
        },
        prefilter: function (e, t) {
            t ? rt.unshift(e) : rt.push(e);
        },
    })),
        (C.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? C.extend({}, e) : { complete: n || (!n && t) || (C.isFunction(e) && e), duration: e, easing: (n && t) || (t && !C.isFunction(t) && t) };
            return (
                (i.duration = C.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in C.fx.speeds ? C.fx.speeds[i.duration] : C.fx.speeds._default),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    C.isFunction(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
                }),
                i
            );
        }),
        C.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(B).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
            },
            animate: function (t, e, n, i) {
                function o() {
                    var e = dt(this, C.extend({}, t), r);
                    (s || C._data(this, "finish")) && e.stop(!0);
                }
                var s = C.isEmptyObject(t),
                    r = C.speed(e, n, i);
                return (o.finish = o), s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o);
            },
            stop: function (o, e, s) {
                function r(e) {
                    var t = e.stop;
                    delete e.stop, t(s);
                }
                return (
                    "string" != typeof o && ((s = e), (e = o), (o = void 0)),
                    e && !1 !== o && this.queue(o || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != o && o + "queueHooks",
                            n = C.timers,
                            i = C._data(this);
                        if (t) i[t] && i[t].stop && r(i[t]);
                        else for (t in i) i[t] && i[t].stop && st.test(t) && r(i[t]);
                        for (t = n.length; t--; ) n[t].elem !== this || (null != o && n[t].queue !== o) || (n[t].anim.stop(s), (e = !1), n.splice(t, 1));
                        (!e && s) || C.dequeue(this, o);
                    })
                );
            },
            finish: function (r) {
                return (
                    !1 !== r && (r = r || "fx"),
                    this.each(function () {
                        var e,
                            t = C._data(this),
                            n = t[r + "queue"],
                            i = t[r + "queueHooks"],
                            o = C.timers,
                            s = n ? n.length : 0;
                        for (t.finish = !0, C.queue(this, r, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === r && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        C.each(["toggle", "show", "hide"], function (e, i) {
            var o = C.fn[i];
            C.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(ct(i, !0), e, t, n);
            };
        }),
        C.each({ slideDown: ct("show"), slideUp: ct("hide"), slideToggle: ct("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, i) {
            C.fn[e] = function (e, t, n) {
                return this.animate(i, e, t, n);
            };
        }),
        (C.timers = []),
        (C.fx.tick = function () {
            var e,
                t = C.timers,
                n = 0;
            for (Ge = C.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || C.fx.stop(), (Ge = void 0);
        }),
        (C.fx.timer = function (e) {
            C.timers.push(e), e() ? C.fx.start() : C.timers.pop();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
            Ye || (Ye = setInterval(C.fx.tick, C.fx.interval));
        }),
        (C.fx.stop = function () {
            clearInterval(Ye), (Ye = null);
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (i, e) {
            return (
                (i = (C.fx && C.fx.speeds[i]) || i),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                    var n = setTimeout(e, i);
                    t.stop = function () {
                        clearTimeout(n);
                    };
                })
            );
        }),
        (Ze = T.createElement("div")).setAttribute("className", "t"),
        (Ze.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (tt = Ze.getElementsByTagName("a")[0]),
        (nt = (et = T.createElement("select")).appendChild(T.createElement("option"))),
        (Je = Ze.getElementsByTagName("input")[0]),
        (tt.style.cssText = "top:1px"),
        (v.getSetAttribute = "t" !== Ze.className),
        (v.style = /top/.test(tt.getAttribute("style"))),
        (v.hrefNormalized = "/a" === tt.getAttribute("href")),
        (v.checkOn = !!Je.value),
        (v.optSelected = nt.selected),
        (v.enctype = !!T.createElement("form").enctype),
        (et.disabled = !0),
        (v.optDisabled = !nt.disabled),
        (Je = T.createElement("input")).setAttribute("value", ""),
        (v.input = "" === Je.getAttribute("value")),
        (Je.value = "t"),
        Je.setAttribute("type", "radio"),
        (v.radioValue = "t" === Je.value);
    var pt = /\r/g;
    C.fn.extend({
        val: function (n) {
            var i,
                e,
                o,
                t = this[0];
            return arguments.length
                ? ((o = C.isFunction(n)),
                  this.each(function (e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = o ? n.call(this, e, C(this).val()) : n)
                              ? (t = "")
                              : "number" == typeof t
                              ? (t += "")
                              : C.isArray(t) &&
                                (t = C.map(t, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value")) || (this.value = t));
                  }))
                : t
                ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value"))
                    ? e
                    : "string" == typeof (e = t.value)
                    ? e.replace(pt, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        C.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : C.trim(C.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, s = "select-one" === e.type || o < 0, r = s ? null : [], a = s ? o + 1 : i.length, l = o < 0 ? a : s ? o : 0; l < a; l++)
                            if (!((!(n = i[l]).selected && l !== o) || (v.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || (n.parentNode.disabled && C.nodeName(n.parentNode, "optgroup")))) {
                                if (((t = C(n).val()), s)) return t;
                                r.push(t);
                            }
                        return r;
                    },
                    set: function (e, t) {
                        for (var n, i, o = e.options, s = C.makeArray(t), r = o.length; r--; )
                            if (((i = o[r]), 0 <= C.inArray(C.valHooks.option.get(i), s)))
                                try {
                                    i.selected = n = !0;
                                } catch (e) {
                                    i.scrollHeight;
                                }
                            else i.selected = !1;
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        C.each(["radio", "checkbox"], function () {
            (C.valHooks[this] = {
                set: function (e, t) {
                    return C.isArray(t) ? (e.checked = 0 <= C.inArray(C(e).val(), t)) : void 0;
                },
            }),
                v.checkOn ||
                    (C.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        });
    var ht,
        ft,
        mt = C.expr.attrHandle,
        gt = /^(?:checked|selected)$/i,
        vt = v.getSetAttribute,
        yt = v.input;
    C.fn.extend({
        attr: function (e, t) {
            return Q(this, C.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                C.removeAttr(this, e);
            });
        },
    }),
        C.extend({
            attr: function (e, t, n) {
                var i,
                    o,
                    s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return typeof e.getAttribute === O
                        ? C.prop(e, t, n)
                        : ((1 === s && C.isXMLDoc(e)) || ((t = t.toLowerCase()), (i = C.attrHooks[t] || (C.expr.match.bool.test(t) ? ft : ht))),
                          void 0 === n
                              ? i && "get" in i && null !== (o = i.get(e, t))
                                  ? o
                                  : null == (o = C.find.attr(e, t))
                                  ? void 0
                                  : o
                              : null !== n
                              ? i && "set" in i && void 0 !== (o = i.set(e, n, t))
                                  ? o
                                  : (e.setAttribute(t, n + ""), n)
                              : void C.removeAttr(e, t));
            },
            removeAttr: function (e, t) {
                var n,
                    i,
                    o = 0,
                    s = t && t.match(j);
                if (s && 1 === e.nodeType)
                    for (; (n = s[o++]); ) (i = C.propFix[n] || n), C.expr.match.bool.test(n) ? ((yt && vt) || !gt.test(n) ? (e[i] = !1) : (e[C.camelCase("default-" + n)] = e[i] = !1)) : C.attr(e, n, ""), e.removeAttribute(vt ? n : i);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!v.radioValue && "radio" === t && C.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
        }),
        (ft = {
            set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : (yt && vt) || !gt.test(n) ? e.setAttribute((!vt && C.propFix[n]) || n, n) : (e[C.camelCase("default-" + n)] = e[n] = !0), n;
            },
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var s = mt[t] || C.find.attr;
            mt[t] =
                (yt && vt) || !gt.test(t)
                    ? function (e, t, n) {
                          var i, o;
                          return n || ((o = mt[t]), (mt[t] = i), (i = null != s(e, t, n) ? t.toLowerCase() : null), (mt[t] = o)), i;
                      }
                    : function (e, t, n) {
                          return n ? void 0 : e[C.camelCase("default-" + t)] ? t.toLowerCase() : null;
                      };
        }),
        (yt && vt) ||
            (C.attrHooks.value = {
                set: function (e, t, n) {
                    return C.nodeName(e, "input") ? void (e.defaultValue = t) : ht && ht.set(e, t, n);
                },
            }),
        vt ||
            ((ht = {
                set: function (e, t, n) {
                    var i = e.getAttributeNode(n);
                    return i || e.setAttributeNode((i = e.ownerDocument.createAttribute(n))), (i.value = t += ""), "value" === n || t === e.getAttribute(n) ? t : void 0;
                },
            }),
            (mt.id = mt.name = mt.coords = function (e, t, n) {
                var i;
                return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null;
            }),
            (C.valHooks.button = {
                get: function (e, t) {
                    var n = e.getAttributeNode(t);
                    return n && n.specified ? n.value : void 0;
                },
                set: ht.set,
            }),
            (C.attrHooks.contenteditable = {
                set: function (e, t, n) {
                    ht.set(e, "" !== t && t, n);
                },
            }),
            C.each(["width", "height"], function (e, n) {
                C.attrHooks[n] = {
                    set: function (e, t) {
                        return "" === t ? (e.setAttribute(n, "auto"), t) : void 0;
                    },
                };
            })),
        v.style ||
            (C.attrHooks.style = {
                get: function (e) {
                    return e.style.cssText || void 0;
                },
                set: function (e, t) {
                    return (e.style.cssText = t + "");
                },
            });
    var bt = /^(?:input|select|textarea|button|object)$/i,
        wt = /^(?:a|area)$/i;
    C.fn.extend({
        prop: function (e, t) {
            return Q(this, C.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return (
                (e = C.propFix[e] || e),
                this.each(function () {
                    try {
                        (this[e] = void 0), delete this[e];
                    } catch (e) {}
                })
            );
        },
    }),
        C.extend({
            propFix: { for: "htmlFor", class: "className" },
            prop: function (e, t, n) {
                var i,
                    o,
                    s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return (
                        (1 !== s || !C.isXMLDoc(e)) && ((t = C.propFix[t] || t), (o = C.propHooks[t])),
                        void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e[t] = n)) : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
        }),
        v.hrefNormalized ||
            C.each(["href", "src"], function (e, t) {
                C.propHooks[t] = {
                    get: function (e) {
                        return e.getAttribute(t, 4);
                    },
                };
            }),
        v.optSelected ||
            (C.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
                },
            }),
        C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            C.propFix[this.toLowerCase()] = this;
        }),
        v.enctype || (C.propFix.enctype = "encoding");
    var kt = /[\t\r\n\f]/g;
    C.fn.extend({
        addClass: function (t) {
            var e,
                n,
                i,
                o,
                s,
                r,
                a = 0,
                l = this.length,
                c = "string" == typeof t && t;
            if (C.isFunction(t))
                return this.each(function (e) {
                    C(this).addClass(t.call(this, e, this.className));
                });
            if (c)
                for (e = (t || "").match(j) || []; a < l; a++)
                    if ((i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(kt, " ") : " "))) {
                        for (s = 0; (o = e[s++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        (r = C.trim(i)), n.className !== r && (n.className = r);
                    }
            return this;
        },
        removeClass: function (t) {
            var e,
                n,
                i,
                o,
                s,
                r,
                a = 0,
                l = this.length,
                c = 0 === arguments.length || ("string" == typeof t && t);
            if (C.isFunction(t))
                return this.each(function (e) {
                    C(this).removeClass(t.call(this, e, this.className));
                });
            if (c)
                for (e = (t || "").match(j) || []; a < l; a++)
                    if ((i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(kt, " ") : ""))) {
                        for (s = 0; (o = e[s++]); ) for (; 0 <= i.indexOf(" " + o + " "); ) i = i.replace(" " + o + " ", " ");
                        (r = t ? C.trim(i) : ""), n.className !== r && (n.className = r);
                    }
            return this;
        },
        toggleClass: function (o, t) {
            var s = typeof o;
            return "boolean" == typeof t && "string" == s
                ? t
                    ? this.addClass(o)
                    : this.removeClass(o)
                : this.each(
                      C.isFunction(o)
                          ? function (e) {
                                C(this).toggleClass(o.call(this, e, this.className, t), t);
                            }
                          : function () {
                                if ("string" == s) for (var e, t = 0, n = C(this), i = o.match(j) || []; (e = i[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                                else (s !== O && "boolean" != s) || (this.className && C._data(this, "__className__", this.className), (this.className = this.className || !1 === o ? "" : C._data(this, "__className__") || ""));
                            }
                  );
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++) if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(kt, " ").indexOf(t)) return !0;
            return !1;
        },
    }),
        C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
            e,
            n
        ) {
            C.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
            };
        }),
        C.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        });
    var xt = C.now(),
        Ct = /\?/,
        Tt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (C.parseJSON = function (e) {
        if (f.JSON && f.JSON.parse) return f.JSON.parse(e + "");
        var o,
            s = null,
            t = C.trim(e + "");
        return t &&
            !C.trim(
                t.replace(Tt, function (e, t, n, i) {
                    return o && t && (s = 0), 0 === s ? e : ((o = n || t), (s += !i - !n), "");
                })
            )
            ? Function("return " + t)()
            : C.error("Invalid JSON: " + e);
    }),
        (C.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                f.DOMParser ? (t = new DOMParser().parseFromString(e, "text/xml")) : (((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false"), t.loadXML(e));
            } catch (e) {
                t = void 0;
            }
            return (t && t.documentElement && !t.getElementsByTagName("parsererror").length) || C.error("Invalid XML: " + e), t;
        });
    var St,
        _t,
        $t = /#.*$/,
        At = /([?&])_=[^&]*/,
        Et = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        jt = /^(?:GET|HEAD)$/,
        Nt = /^\/\//,
        Lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Dt = {},
        Ht = {},
        Ot = "*/".concat("*");
    try {
        _t = location.href;
    } catch (e) {
        ((_t = T.createElement("a")).href = ""), (_t = _t.href);
    }
    function zt(s) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                i = 0,
                o = e.toLowerCase().match(j) || [];
            if (C.isFunction(t)) for (; (n = o[i++]); ) "+" === n.charAt(0) ? ((n = n.slice(1) || "*"), (s[n] = s[n] || []).unshift(t)) : (s[n] = s[n] || []).push(t);
        };
    }
    function qt(t, o, s, r) {
        var a = {},
            l = t === Ht;
        function c(e) {
            var i;
            return (
                (a[e] = !0),
                C.each(t[e] || [], function (e, t) {
                    var n = t(o, s, r);
                    return "string" != typeof n || l || a[n] ? (l ? !(i = n) : void 0) : (o.dataTypes.unshift(n), c(n), !1);
                }),
                i
            );
        }
        return c(o.dataTypes[0]) || (!a["*"] && c("*"));
    }
    function Pt(e, t) {
        var n,
            i,
            o = C.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && C.extend(!0, e, n), e;
    }
    (St = Lt.exec(_t.toLowerCase()) || []),
        C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: _t,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Ot, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": C.parseJSON, "text xml": C.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Pt(Pt(e, C.ajaxSettings), t) : Pt(C.ajaxSettings, e);
            },
            ajaxPrefilter: zt(Dt),
            ajaxTransport: zt(Ht),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                    i,
                    u,
                    d,
                    p,
                    h,
                    f,
                    o,
                    m = C.ajaxSetup({}, t),
                    g = m.context || m,
                    v = m.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                    y = C.Deferred(),
                    b = C.Callbacks("once memory"),
                    w = m.statusCode || {},
                    s = {},
                    r = {},
                    k = 0,
                    a = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === k) {
                                if (!o) for (o = {}; (t = Et.exec(d)); ) o[t[1].toLowerCase()] = t[2];
                                t = o[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === k ? d : null;
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return k || ((e = r[n] = r[n] || e), (s[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return k || (m.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (k < 2) for (t in e) w[t] = [w[t], e[t]];
                                else x.always(e[x.status]);
                            return this;
                        },
                        abort: function (e) {
                            var t = e || a;
                            return f && f.abort(t), l(0, t), this;
                        },
                    };
                if (
                    ((y.promise(x).complete = b.add),
                    (x.success = x.done),
                    (x.error = x.fail),
                    (m.url = ((e || m.url || _t) + "").replace($t, "").replace(Nt, St[1] + "//")),
                    (m.type = t.method || t.type || m.method || m.type),
                    (m.dataTypes = C.trim(m.dataType || "*")
                        .toLowerCase()
                        .match(j) || [""]),
                    null == m.crossDomain &&
                        ((n = Lt.exec(m.url.toLowerCase())), (m.crossDomain = !(!n || (n[1] === St[1] && n[2] === St[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (St[3] || ("http:" === St[1] ? "80" : "443")))))),
                    m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)),
                    qt(Dt, m, t, x),
                    2 === k)
                )
                    return x;
                for (i in ((h = m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
                (m.type = m.type.toUpperCase()),
                (m.hasContent = !jt.test(m.type)),
                (u = m.url),
                m.hasContent || (m.data && ((u = m.url += (Ct.test(u) ? "&" : "?") + m.data), delete m.data), !1 === m.cache && (m.url = At.test(u) ? u.replace(At, "$1_=" + xt++) : u + (Ct.test(u) ? "&" : "?") + "_=" + xt++)),
                m.ifModified && (C.lastModified[u] && x.setRequestHeader("If-Modified-Since", C.lastModified[u]), C.etag[u] && x.setRequestHeader("If-None-Match", C.etag[u])),
                ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) && x.setRequestHeader("Content-Type", m.contentType),
                x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : m.accepts["*"]),
                m.headers))
                    x.setRequestHeader(i, m.headers[i]);
                if (m.beforeSend && (!1 === m.beforeSend.call(g, x, m) || 2 === k)) return x.abort();
                for (i in ((a = "abort"), { success: 1, error: 1, complete: 1 })) x[i](m[i]);
                if ((f = qt(Ht, m, t, x))) {
                    (x.readyState = 1),
                        h && v.trigger("ajaxSend", [x, m]),
                        m.async &&
                            0 < m.timeout &&
                            (p = setTimeout(function () {
                                x.abort("timeout");
                            }, m.timeout));
                    try {
                        (k = 1), f.send(s, l);
                    } catch (e) {
                        if (!(k < 2)) throw e;
                        l(-1, e);
                    }
                } else l(-1, "No Transport");
                function l(e, t, n, i) {
                    var o,
                        s,
                        r,
                        a,
                        l,
                        c = t;
                    2 !== k &&
                        ((k = 2),
                        p && clearTimeout(p),
                        (f = void 0),
                        (d = i || ""),
                        (x.readyState = 0 < e ? 4 : 0),
                        (o = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (a = (function (e, t, n) {
                                for (var i, o, s, r, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (o)
                                    for (r in a)
                                        if (a[r] && a[r].test(o)) {
                                            l.unshift(r);
                                            break;
                                        }
                                if (l[0] in n) s = l[0];
                                else {
                                    for (r in n) {
                                        if (!l[0] || e.converters[r + " " + l[0]]) {
                                            s = r;
                                            break;
                                        }
                                        i || (i = r);
                                    }
                                    s = s || i;
                                }
                                return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0;
                            })(m, x, n)),
                        (a = (function (e, t, n, i) {
                            var o,
                                s,
                                r,
                                a,
                                l,
                                c = {},
                                u = e.dataTypes.slice();
                            if (u[1]) for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                            for (s = u.shift(); s; )
                                if ((e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = s), (s = u.shift())))
                                    if ("*" === s) s = l;
                                    else if ("*" !== l && l !== s) {
                                        if (!(r = c[l + " " + s] || c["* " + s]))
                                            for (o in c)
                                                if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === r ? (r = c[o]) : !0 !== c[o] && ((s = a[0]), u.unshift(a[1]));
                                                    break;
                                                }
                                        if (!0 !== r)
                                            if (r && e.throws) t = r(t);
                                            else
                                                try {
                                                    t = r(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: r ? e : "No conversion from " + l + " to " + s };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(m, a, x, o)),
                        o
                            ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (C.lastModified[u] = l), (l = x.getResponseHeader("etag")) && (C.etag[u] = l)),
                              204 === e || "HEAD" === m.type ? (c = "nocontent") : 304 === e ? (c = "notmodified") : ((c = a.state), (s = a.data), (o = !(r = a.error))))
                            : ((r = c), (!e && c) || ((c = "error"), e < 0 && (e = 0))),
                        (x.status = e),
                        (x.statusText = (t || c) + ""),
                        o ? y.resolveWith(g, [s, c, x]) : y.rejectWith(g, [x, c, r]),
                        x.statusCode(w),
                        (w = void 0),
                        h && v.trigger(o ? "ajaxSuccess" : "ajaxError", [x, m, o ? s : r]),
                        b.fireWith(g, [x, c]),
                        h && (v.trigger("ajaxComplete", [x, m]), --C.active || C.event.trigger("ajaxStop")));
                }
                return x;
            },
            getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
            },
        }),
        C.each(["get", "post"], function (e, o) {
            C[o] = function (e, t, n, i) {
                return C.isFunction(t) && ((i = i || n), (n = t), (t = void 0)), C.ajax({ url: e, type: o, dataType: i, data: t, success: n });
            };
        }),
        C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            C.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (C._evalUrl = function (e) {
            return C.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
        }),
        C.fn.extend({
            wrapAll: function (t) {
                if (C.isFunction(t))
                    return this.each(function (e) {
                        C(this).wrapAll(t.call(this, e));
                    });
                if (this[0]) {
                    var e = C(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                                return e;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (n) {
                return this.each(
                    C.isFunction(n)
                        ? function (e) {
                              C(this).wrapInner(n.call(this, e));
                          }
                        : function () {
                              var e = C(this),
                                  t = e.contents();
                              t.length ? t.wrapAll(n) : e.append(n);
                          }
                );
            },
            wrap: function (t) {
                var n = C.isFunction(t);
                return this.each(function (e) {
                    C(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        C.nodeName(this, "body") || C(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (C.expr.filters.hidden = function (e) {
            return (e.offsetWidth <= 0 && e.offsetHeight <= 0) || (!v.reliableHiddenOffsets() && "none" === ((e.style && e.style.display) || C.css(e, "display")));
        }),
        (C.expr.filters.visible = function (e) {
            return !C.expr.filters.hidden(e);
        });
    var Mt = /%20/g,
        It = /\[\]$/,
        Ft = /\r?\n/g,
        Bt = /^(?:submit|button|image|reset|file)$/i,
        Rt = /^(?:input|select|textarea|keygen)/i;
    function Wt(n, e, i, o) {
        var t;
        if (C.isArray(e))
            C.each(e, function (e, t) {
                i || It.test(n) ? o(n, t) : Wt(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, o);
            });
        else if (i || "object" !== C.type(e)) o(n, e);
        else for (t in e) Wt(n + "[" + t + "]", e[t], i, o);
    }
    (C.param = function (e, t) {
        function n(e, t) {
            (t = C.isFunction(t) ? t() : null == t ? "" : t), (o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        }
        var i,
            o = [];
        if ((void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || (e.jquery && !C.isPlainObject(e))))
            C.each(e, function () {
                n(this.name, this.value);
            });
        else for (i in e) Wt(i, e[i], t, n);
        return o.join("&").replace(Mt, "+");
    }),
        C.fn.extend({
            serialize: function () {
                return C.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !C(this).is(":disabled") && Rt.test(this.nodeName) && !Bt.test(e) && (this.checked || !X.test(e));
                    })
                    .map(function (e, t) {
                        var n = C(this).val();
                        return null == n
                            ? null
                            : C.isArray(n)
                            ? C.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Ft, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Ft, "\r\n") };
                    })
                    .get();
            },
        }),
        (C.ajaxSettings.xhr =
            void 0 !== f.ActiveXObject
                ? function () {
                      return (
                          (!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Kt()) ||
                          (function () {
                              try {
                                  return new f.ActiveXObject("Microsoft.XMLHTTP");
                              } catch (e) {}
                          })()
                      );
                  }
                : Kt);
    var Qt = 0,
        Xt = {},
        Ut = C.ajaxSettings.xhr();
    function Kt() {
        try {
            return new f.XMLHttpRequest();
        } catch (e) {}
    }
    var Vt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Vt.pop() || C.expando + "_" + xt++;
            return (this[e] = !0), e;
        },
    }),
        C.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
                o,
                s,
                r = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
            return r || "jsonp" === e.dataTypes[0]
                ? ((i = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  r ? (e[r] = e[r].replace(Gt, "$1" + i)) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                      return s || C.error(i + " was not called"), s[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = f[i]),
                  (f[i] = function () {
                      s = arguments;
                  }),
                  n.always(function () {
                      (f[i] = o), e[i] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(i)), s && C.isFunction(o) && o(s[0]), (s = o = void 0);
                  }),
                  "script")
                : void 0;
        }),
        (C.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && ((n = t), (t = !1)), (t = t || T);
            var i = b.exec(e),
                o = !n && [];
            return i ? [t.createElement(i[1])] : ((i = C.buildFragment([e], t, o)), o && o.length && C(o).remove(), C.merge([], i.childNodes));
        });
    var Yt = C.fn.load;
    (C.fn.load = function (e, t, n) {
        if ("string" != typeof e && Yt) return Yt.apply(this, arguments);
        var i,
            o,
            s,
            r = this,
            a = e.indexOf(" ");
        return (
            0 <= a && ((i = C.trim(e.slice(a, e.length))), (e = e.slice(0, a))),
            C.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (s = "POST"),
            0 < r.length &&
                C.ajax({ url: e, type: s, dataType: "html", data: t })
                    .done(function (e) {
                        (o = arguments), r.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e);
                    })
                    .complete(
                        n &&
                            function (e, t) {
                                r.each(n, o || [e.responseText, t, e]);
                            }
                    ),
            this
        );
    }),
        (C.expr.filters.animated = function (t) {
            return C.grep(C.timers, function (e) {
                return t === e.elem;
            }).length;
        });
    var Jt = f.document.documentElement;
    function Zt(e) {
        return C.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    (C.offset = {
        setOffset: function (e, t, n) {
            var i,
                o,
                s,
                r,
                a,
                l,
                c = C.css(e, "position"),
                u = C(e),
                d = {};
            "static" === c && (e.style.position = "relative"),
                (a = u.offset()),
                (s = C.css(e, "top")),
                (l = C.css(e, "left")),
                (o = ("absolute" === c || "fixed" === c) && -1 < C.inArray("auto", [s, l]) ? ((r = (i = u.position()).top), i.left) : ((r = parseFloat(s) || 0), parseFloat(l) || 0)),
                C.isFunction(t) && (t = t.call(e, n, a)),
                null != t.top && (d.top = t.top - a.top + r),
                null != t.left && (d.left = t.left - a.left + o),
                "using" in t ? t.using.call(e, d) : u.css(d);
        },
    }),
        C.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              C.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    i = { top: 0, left: 0 },
                    o = this[0],
                    s = o && o.ownerDocument;
                return s
                    ? ((e = s.documentElement),
                      C.contains(e, o)
                          ? (typeof o.getBoundingClientRect !== O && (i = o.getBoundingClientRect()),
                            (n = Zt(s)),
                            { top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) })
                          : i)
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n = { top: 0, left: 0 },
                        i = this[0];
                    return (
                        "fixed" === C.css(i, "position")
                            ? (t = i.getBoundingClientRect())
                            : ((e = this.offsetParent()), (t = this.offset()), C.nodeName(e[0], "html") || (n = e.offset()), (n.top += C.css(e[0], "borderTopWidth", !0)), (n.left += C.css(e[0], "borderLeftWidth", !0))),
                        { top: t.top - n.top - C.css(i, "marginTop", !0), left: t.left - n.left - C.css(i, "marginLeft", !0) }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || Jt; e && !C.nodeName(e, "html") && "static" === C.css(e, "position"); ) e = e.offsetParent;
                    return e || Jt;
                });
            },
        }),
        C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, o) {
            var s = /Y/.test(o);
            C.fn[t] = function (e) {
                return Q(
                    this,
                    function (e, t, n) {
                        var i = Zt(e);
                        return void 0 === n ? (i ? (o in i ? i[o] : i.document.documentElement[t]) : e[t]) : void (i ? i.scrollTo(s ? C(i).scrollLeft() : n, s ? n : C(i).scrollTop()) : (e[t] = n));
                    },
                    t,
                    e,
                    arguments.length,
                    null
                );
            };
        }),
        C.each(["top", "left"], function (e, n) {
            C.cssHooks[n] = Oe(v.pixelPosition, function (e, t) {
                return t ? ((t = Ne(e, n)), De.test(t) ? C(e).position()[n] + "px" : t) : void 0;
            });
        }),
        C.each({ Height: "height", Width: "width" }, function (s, r) {
            C.each({ padding: "inner" + s, content: r, "": "outer" + s }, function (i, e) {
                C.fn[e] = function (e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                        o = i || (!0 === e || !0 === t ? "margin" : "border");
                    return Q(
                        this,
                        function (e, t, n) {
                            var i;
                            return C.isWindow(e)
                                ? e.document.documentElement["client" + s]
                                : 9 === e.nodeType
                                ? ((i = e.documentElement), Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s]))
                                : void 0 === n
                                ? C.css(e, t, o)
                                : C.style(e, t, n, o);
                        },
                        r,
                        n ? e : void 0,
                        n,
                        null
                    );
                };
            });
        }),
        (C.fn.size = function () {
            return this.length;
        }),
        (C.fn.andSelf = C.fn.addBack),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return C;
            });
    var en = f.jQuery,
        tn = f.$;
    return (
        (C.noConflict = function (e) {
            return f.$ === C && (f.$ = tn), e && f.jQuery === C && (f.jQuery = en), C;
        }),
        typeof e === O && (f.jQuery = f.$ = C),
        C
    );
}),
    (function (t, n) {
        "function" == typeof define && define.amd
            ? define("bloodhound", ["jquery"], function (e) {
                  return (t.Bloodhound = n(e));
              })
            : "object" == typeof exports
            ? (module.exports = n(require("jquery")))
            : (t.Bloodhound = n(jQuery));
    })(this, function (u) {
        var d = (function () {
                "use strict";
                return {
                    isMsie: function () {
                        return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2];
                    },
                    isBlankString: function (e) {
                        return !e || /^\s*$/.test(e);
                    },
                    escapeRegExChars: function (e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                    },
                    isString: function (e) {
                        return "string" == typeof e;
                    },
                    isNumber: function (e) {
                        return "number" == typeof e;
                    },
                    isArray: u.isArray,
                    isFunction: u.isFunction,
                    isObject: u.isPlainObject,
                    isUndefined: function (e) {
                        return void 0 === e;
                    },
                    isElement: function (e) {
                        return !(!e || 1 !== e.nodeType);
                    },
                    isJQuery: function (e) {
                        return e instanceof u;
                    },
                    toStr: function (e) {
                        return d.isUndefined(e) || null === e ? "" : e + "";
                    },
                    bind: u.proxy,
                    each: function (e, n) {
                        u.each(e, function (e, t) {
                            return n(t, e);
                        });
                    },
                    map: u.map,
                    filter: u.grep,
                    every: function (n, i) {
                        var o = !0;
                        return n
                            ? (u.each(n, function (e, t) {
                                  return !!(o = i.call(null, t, e, n)) && void 0;
                              }),
                              !!o)
                            : o;
                    },
                    some: function (n, i) {
                        var o = !1;
                        return n
                            ? (u.each(n, function (e, t) {
                                  return !(o = i.call(null, t, e, n)) && void 0;
                              }),
                              !!o)
                            : o;
                    },
                    mixin: u.extend,
                    identity: function (e) {
                        return e;
                    },
                    clone: function (e) {
                        return u.extend(!0, {}, e);
                    },
                    getIdGenerator: function () {
                        var e = 0;
                        return function () {
                            return e++;
                        };
                    },
                    templatify: function (e) {
                        return u.isFunction(e)
                            ? e
                            : function () {
                                  return String(e);
                              };
                    },
                    defer: function (e) {
                        setTimeout(e, 0);
                    },
                    debounce: function (o, s, r) {
                        var a, l;
                        return function () {
                            var e,
                                t,
                                n = this,
                                i = arguments;
                            return (
                                (e = function () {
                                    (a = null), r || (l = o.apply(n, i));
                                }),
                                (t = r && !a),
                                clearTimeout(a),
                                (a = setTimeout(e, s)),
                                t && (l = o.apply(n, i)),
                                l
                            );
                        };
                    },
                    throttle: function (n, i) {
                        var o, s, r, a, l, c;
                        return (
                            (l = 0),
                            (c = function () {
                                (l = new Date()), (r = null), (a = n.apply(o, s));
                            }),
                            function () {
                                var e = new Date(),
                                    t = i - (e - l);
                                return (o = this), (s = arguments), t <= 0 ? (clearTimeout(r), (r = null), (l = e), (a = n.apply(o, s))) : r || (r = setTimeout(c, t)), a;
                            }
                        );
                    },
                    stringify: function (e) {
                        return d.isString(e) ? e : JSON.stringify(e);
                    },
                    noop: function () {},
                };
            })(),
            n = (function () {
                "use strict";
                function e(e) {
                    return (e = d.toStr(e)) ? e.split(/\s+/) : [];
                }
                function t(e) {
                    return (e = d.toStr(e)) ? e.split(/\W+/) : [];
                }
                function n(i) {
                    return function (e) {
                        return (
                            (e = d.isArray(e) ? e : [].slice.call(arguments, 0)),
                            function (t) {
                                var n = [];
                                return (
                                    d.each(e, function (e) {
                                        n = n.concat(i(d.toStr(t[e])));
                                    }),
                                    n
                                );
                            }
                        );
                    };
                }
                return { nonword: t, whitespace: e, obj: { nonword: n(t), whitespace: n(e) } };
            })(),
            i = (function () {
                "use strict";
                function e(e) {
                    (this.maxSize = d.isNumber(e) ? e : 100), this.reset(), this.maxSize <= 0 && (this.set = this.get = u.noop);
                }
                function t() {
                    this.head = this.tail = null;
                }
                function o(e, t) {
                    (this.key = e), (this.val = t), (this.prev = this.next = null);
                }
                return (
                    d.mixin(e.prototype, {
                        set: function (e, t) {
                            var n,
                                i = this.list.tail;
                            this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key], this.size--),
                                (n = this.hash[e]) ? ((n.val = t), this.list.moveToFront(n)) : ((n = new o(e, t)), this.list.add(n), (this.hash[e] = n), this.size++);
                        },
                        get: function (e) {
                            var t = this.hash[e];
                            return t ? (this.list.moveToFront(t), t.val) : void 0;
                        },
                        reset: function () {
                            (this.size = 0), (this.hash = {}), (this.list = new t());
                        },
                    }),
                    d.mixin(t.prototype, {
                        add: function (e) {
                            this.head && ((e.next = this.head), (this.head.prev = e)), (this.head = e), (this.tail = this.tail || e);
                        },
                        remove: function (e) {
                            e.prev ? (e.prev.next = e.next) : (this.head = e.next), e.next ? (e.next.prev = e.prev) : (this.tail = e.prev);
                        },
                        moveToFront: function (e) {
                            this.remove(e), this.add(e);
                        },
                    }),
                    e
                );
            })(),
            t = (function () {
                "use strict";
                function e(e, t) {
                    (this.prefix = ["__", e, "__"].join("")), (this.ttlKey = "__ttl__"), (this.keyMatcher = new RegExp("^" + d.escapeRegExChars(this.prefix))), (this.ls = t || s), this.ls || this._noop();
                }
                function i() {
                    return new Date().getTime();
                }
                function o(e) {
                    return JSON.stringify(d.isUndefined(e) ? null : e);
                }
                function n(e) {
                    return u.parseJSON(e);
                }
                var s;
                try {
                    (s = window.localStorage).setItem("~~~", "!"), s.removeItem("~~~");
                } catch (e) {
                    s = null;
                }
                return (
                    d.mixin(e.prototype, {
                        _prefix: function (e) {
                            return this.prefix + e;
                        },
                        _ttlKey: function (e) {
                            return this._prefix(e) + this.ttlKey;
                        },
                        _noop: function () {
                            this.get = this.set = this.remove = this.clear = this.isExpired = d.noop;
                        },
                        _safeSet: function (e, t) {
                            try {
                                this.ls.setItem(e, t);
                            } catch (e) {
                                "QuotaExceededError" === e.name && (this.clear(), this._noop());
                            }
                        },
                        get: function (e) {
                            return this.isExpired(e) && this.remove(e), n(this.ls.getItem(this._prefix(e)));
                        },
                        set: function (e, t, n) {
                            return d.isNumber(n) ? this._safeSet(this._ttlKey(e), o(i() + n)) : this.ls.removeItem(this._ttlKey(e)), this._safeSet(this._prefix(e), o(t));
                        },
                        remove: function (e) {
                            return this.ls.removeItem(this._ttlKey(e)), this.ls.removeItem(this._prefix(e)), this;
                        },
                        clear: function () {
                            var e,
                                t = (function (e) {
                                    var t,
                                        n,
                                        i = [],
                                        o = s.length;
                                    for (t = 0; t < o; t++) (n = s.key(t)).match(e) && i.push(n.replace(e, ""));
                                    return i;
                                })(this.keyMatcher);
                            for (e = t.length; e--; ) this.remove(t[e]);
                            return this;
                        },
                        isExpired: function (e) {
                            var t = n(this.ls.getItem(this._ttlKey(e)));
                            return !!(d.isNumber(t) && i() > t);
                        },
                    }),
                    e
                );
            })(),
            o = (function () {
                "use strict";
                function e(e) {
                    (e = e || {}), (this.cancelled = !1), (this.lastReq = null), (this._send = e.transport), (this._get = e.limiter ? e.limiter(this._get) : this._get), (this._cache = !1 === e.cache ? new i(0) : t);
                }
                var a = 0,
                    l = {},
                    c = 6,
                    t = new i(10);
                return (
                    (e.setMaxPendingRequests = function (e) {
                        c = e;
                    }),
                    (e.resetCache = function () {
                        t.reset();
                    }),
                    d.mixin(e.prototype, {
                        _fingerprint: function (e) {
                            return (e = e || {}).url + e.type + u.param(e.data || {});
                        },
                        _get: function (e, t) {
                            function n(e) {
                                t(null, e), r._cache.set(o, e);
                            }
                            function i() {
                                t(!0);
                            }
                            var o,
                                s,
                                r = this;
                            (o = this._fingerprint(e)),
                                this.cancelled ||
                                    o !== this.lastReq ||
                                    ((s = l[o])
                                        ? s.done(n).fail(i)
                                        : a < c
                                        ? (a++,
                                          (l[o] = this._send(e)
                                              .done(n)
                                              .fail(i)
                                              .always(function () {
                                                  a--, delete l[o], r.onDeckRequestArgs && (r._get.apply(r, r.onDeckRequestArgs), (r.onDeckRequestArgs = null));
                                              })))
                                        : (this.onDeckRequestArgs = [].slice.call(arguments, 0)));
                        },
                        get: function (e, t) {
                            var n, i;
                            (t = t || u.noop), (e = d.isString(e) ? { url: e } : e || {}), (i = this._fingerprint(e)), (this.cancelled = !1), (this.lastReq = i), (n = this._cache.get(i)) ? t(null, n) : this._get(e, t);
                        },
                        cancel: function () {
                            this.cancelled = !0;
                        },
                    }),
                    e
                );
            })(),
            s = (window.SearchIndex = (function () {
                "use strict";
                function e(e) {
                    ((e = e || {}).datumTokenizer && e.queryTokenizer) || u.error("datumTokenizer and queryTokenizer are both required"),
                        (this.identify = e.identify || d.stringify),
                        (this.datumTokenizer = e.datumTokenizer),
                        (this.queryTokenizer = e.queryTokenizer),
                        this.reset();
                }
                function n(e) {
                    return (
                        (e = d.filter(e, function (e) {
                            return !!e;
                        })),
                        d.map(e, function (e) {
                            return e.toLowerCase();
                        })
                    );
                }
                function r() {
                    var e = {};
                    return (e[l] = []), (e[a] = {}), e;
                }
                var a = "c",
                    l = "i";
                return (
                    d.mixin(e.prototype, {
                        bootstrap: function (e) {
                            (this.datums = e.datums), (this.trie = e.trie);
                        },
                        add: function (e) {
                            var s = this;
                            (e = d.isArray(e) ? e : [e]),
                                d.each(e, function (e) {
                                    var o, t;
                                    (s.datums[(o = s.identify(e))] = e),
                                        (t = n(s.datumTokenizer(e))),
                                        d.each(t, function (e) {
                                            var t, n, i;
                                            for (t = s.trie, n = e.split(""); (i = n.shift()); ) (t = t[a][i] || (t[a][i] = r()))[l].push(o);
                                        });
                                });
                        },
                        get: function (e) {
                            var t = this;
                            return d.map(e, function (e) {
                                return t.datums[e];
                            });
                        },
                        search: function (e) {
                            var t,
                                s,
                                r = this;
                            return (
                                (t = n(this.queryTokenizer(e))),
                                d.each(t, function (e) {
                                    var t, n, i, o;
                                    if (s && 0 === s.length) return !1;
                                    for (t = r.trie, n = e.split(""); t && (i = n.shift()); ) t = t[a][i];
                                    return t && 0 === n.length
                                        ? ((o = t[l].slice(0)),
                                          void (s = s
                                              ? (function (e, t) {
                                                    var n = 0,
                                                        i = 0,
                                                        o = [];
                                                    (e = e.sort()), (t = t.sort());
                                                    for (var s = e.length, r = t.length; n < s && i < r; ) e[n] < t[i] ? n++ : (e[n] > t[i] || (o.push(e[n]), n++), i++);
                                                    return o;
                                                })(s, o)
                                              : o))
                                        : !(s = []);
                                }),
                                s
                                    ? d.map(
                                          (function (e) {
                                              for (var t = {}, n = [], i = 0, o = e.length; i < o; i++) t[e[i]] || ((t[e[i]] = !0), n.push(e[i]));
                                              return n;
                                          })(s),
                                          function (e) {
                                              return r.datums[e];
                                          }
                                      )
                                    : []
                            );
                        },
                        all: function () {
                            var e = [];
                            for (var t in this.datums) e.push(this.datums[t]);
                            return e;
                        },
                        reset: function () {
                            (this.datums = {}), (this.trie = r());
                        },
                        serialize: function () {
                            return { datums: this.datums, trie: this.trie };
                        },
                    }),
                    e
                );
            })()),
            r = (function () {
                "use strict";
                function e(e) {
                    (this.url = e.url),
                        (this.ttl = e.ttl),
                        (this.cache = e.cache),
                        (this.prepare = e.prepare),
                        (this.transform = e.transform),
                        (this.transport = e.transport),
                        (this.thumbprint = e.thumbprint),
                        (this.storage = new t(e.cacheKey));
                }
                var n;
                return (
                    (n = { data: "data", protocol: "protocol", thumbprint: "thumbprint" }),
                    d.mixin(e.prototype, {
                        _settings: function () {
                            return { url: this.url, type: "GET", dataType: "json" };
                        },
                        store: function (e) {
                            this.cache && (this.storage.set(n.data, e, this.ttl), this.storage.set(n.protocol, location.protocol, this.ttl), this.storage.set(n.thumbprint, this.thumbprint, this.ttl));
                        },
                        fromCache: function () {
                            var e,
                                t = {};
                            return this.cache
                                ? ((t.data = this.storage.get(n.data)),
                                  (t.protocol = this.storage.get(n.protocol)),
                                  (t.thumbprint = this.storage.get(n.thumbprint)),
                                  (e = t.thumbprint !== this.thumbprint || t.protocol !== location.protocol),
                                  t.data && !e ? t.data : null)
                                : null;
                        },
                        fromNetwork: function (t) {
                            var e,
                                n = this;
                            t &&
                                ((e = this.prepare(this._settings())),
                                this.transport(e)
                                    .fail(function () {
                                        t(!0);
                                    })
                                    .done(function (e) {
                                        t(null, n.transform(e));
                                    }));
                        },
                        clear: function () {
                            return this.storage.clear(), this;
                        },
                    }),
                    e
                );
            })(),
            a = (function () {
                "use strict";
                function e(e) {
                    (this.url = e.url), (this.prepare = e.prepare), (this.transform = e.transform), (this.transport = new o({ cache: e.cache, limiter: e.limiter, transport: e.transport }));
                }
                return (
                    d.mixin(e.prototype, {
                        _settings: function () {
                            return { url: this.url, type: "GET", dataType: "json" };
                        },
                        get: function (e, n) {
                            var t,
                                i = this;
                            if (n)
                                return (
                                    (e = e || ""),
                                    (t = this.prepare(e, this._settings())),
                                    this.transport.get(t, function (e, t) {
                                        n(e ? [] : i.transform(t));
                                    })
                                );
                        },
                        cancelLastRequest: function () {
                            this.transport.cancel();
                        },
                    }),
                    e
                );
            })(),
            l = (function () {
                "use strict";
                function i(e) {
                    var t;
                    if (e)
                        return (
                            (t = { url: null, cache: !0, prepare: null, replace: null, wildcard: null, limiter: null, rateLimitBy: "debounce", rateLimitWait: 300, transform: d.identity, transport: null }),
                            (e = d.isString(e) ? { url: e } : e),
                            (e = d.mixin(t, e)).url || u.error("remote requires url to be set"),
                            (e.transform = e.filter || e.transform),
                            (e.prepare = (function (e) {
                                var t, n, i;
                                return (
                                    (t = e.prepare),
                                    (n = e.replace),
                                    (i = e.wildcard),
                                    t ||
                                        (t = n
                                            ? function (e, t) {
                                                  return (t.url = n(t.url, e)), t;
                                              }
                                            : e.wildcard
                                            ? function (e, t) {
                                                  return (t.url = t.url.replace(i, encodeURIComponent(e))), t;
                                              }
                                            : function (e, t) {
                                                  return t;
                                              })
                                );
                            })(e)),
                            (e.limiter = (function (e) {
                                var t, n, i;
                                return (
                                    (t = e.limiter),
                                    (n = e.rateLimitBy),
                                    (i = e.rateLimitWait),
                                    t ||
                                        (t = /^throttle$/i.test(n)
                                            ? (function (t) {
                                                  return function (e) {
                                                      return d.throttle(e, t);
                                                  };
                                              })(i)
                                            : (function (t) {
                                                  return function (e) {
                                                      return d.debounce(e, t);
                                                  };
                                              })(i)),
                                    t
                                );
                            })(e)),
                            (e.transport = e.transport ? o(e.transport) : u.ajax),
                            delete e.replace,
                            delete e.wildcard,
                            delete e.rateLimitBy,
                            delete e.rateLimitWait,
                            e
                        );
                }
                function o(n) {
                    return function (e) {
                        var t = u.Deferred();
                        return (
                            n(
                                e,
                                function (e) {
                                    d.defer(function () {
                                        t.resolve(e);
                                    });
                                },
                                function (e) {
                                    d.defer(function () {
                                        t.reject(e);
                                    });
                                }
                            ),
                            t
                        );
                    };
                }
                return function (e) {
                    var t, n;
                    return (
                        (t = { initialize: !0, identify: d.stringify, datumTokenizer: null, queryTokenizer: null, sufficient: 5, sorter: null, local: [], prefetch: null, remote: null }),
                        (e = d.mixin(t, e || {})).datumTokenizer || u.error("datumTokenizer is required"),
                        e.queryTokenizer || u.error("queryTokenizer is required"),
                        (n = e.sorter),
                        (e.sorter = n
                            ? function (e) {
                                  return e.sort(n);
                              }
                            : d.identity),
                        (e.local = d.isFunction(e.local) ? e.local() : e.local),
                        (e.prefetch = (function (e) {
                            var t;
                            return e
                                ? ((t = { url: null, ttl: 864e5, cache: !0, cacheKey: null, thumbprint: "", prepare: d.identity, transform: d.identity, transport: null }),
                                  (e = d.isString(e) ? { url: e } : e),
                                  (e = d.mixin(t, e)).url || u.error("prefetch requires url to be set"),
                                  (e.transform = e.filter || e.transform),
                                  (e.cacheKey = e.cacheKey || e.url),
                                  (e.thumbprint = "0.11.1" + e.thumbprint),
                                  (e.transport = e.transport ? o(e.transport) : u.ajax),
                                  e)
                                : null;
                        })(e.prefetch)),
                        (e.remote = i(e.remote)),
                        e
                    );
                };
            })();
        return (function () {
            "use strict";
            function e(e) {
                (e = l(e)),
                    (this.sorter = e.sorter),
                    (this.identify = e.identify),
                    (this.sufficient = e.sufficient),
                    (this.local = e.local),
                    (this.remote = e.remote ? new a(e.remote) : null),
                    (this.prefetch = e.prefetch ? new r(e.prefetch) : null),
                    (this.index = new s({ identify: this.identify, datumTokenizer: e.datumTokenizer, queryTokenizer: e.queryTokenizer })),
                    !1 !== e.initialize && this.initialize();
            }
            var t;
            return (
                (t = window && window.Bloodhound),
                (e.noConflict = function () {
                    return window && (window.Bloodhound = t), e;
                }),
                (e.tokenizers = n),
                d.mixin(e.prototype, {
                    __ttAdapter: function () {
                        var i = this;
                        return this.remote
                            ? function (e, t, n) {
                                  return i.search(e, t, n);
                              }
                            : function (e, t) {
                                  return i.search(e, t);
                              };
                    },
                    _loadPrefetch: function () {
                        var n,
                            e,
                            i = this;
                        return (
                            (n = u.Deferred()),
                            this.prefetch
                                ? (e = this.prefetch.fromCache())
                                    ? (this.index.bootstrap(e), n.resolve())
                                    : this.prefetch.fromNetwork(function (e, t) {
                                          return e ? n.reject() : (i.add(t), i.prefetch.store(i.index.serialize()), void n.resolve());
                                      })
                                : n.resolve(),
                            n.promise()
                        );
                    },
                    _initialize: function () {
                        var e = this;
                        return (
                            this.clear(),
                            (this.initPromise = this._loadPrefetch()).done(function () {
                                e.add(e.local);
                            }),
                            this.initPromise
                        );
                    },
                    initialize: function (e) {
                        return !this.initPromise || e ? this._initialize() : this.initPromise;
                    },
                    add: function (e) {
                        return this.index.add(e), this;
                    },
                    get: function (e) {
                        return (e = d.isArray(e) ? e : [].slice.call(arguments)), this.index.get(e);
                    },
                    search: function (e, t, i) {
                        var o,
                            s = this;
                        return (
                            (o = this.sorter(this.index.search(e))),
                            t(this.remote ? o.slice() : o),
                            this.remote && o.length < this.sufficient
                                ? this.remote.get(e, function (e) {
                                      var n = [];
                                      d.each(e, function (t) {
                                          d.some(o, function (e) {
                                              return s.identify(t) === s.identify(e);
                                          }) || n.push(t);
                                      }),
                                          i && i(n);
                                  })
                                : this.remote && this.remote.cancelLastRequest(),
                            this
                        );
                    },
                    all: function () {
                        return this.index.all();
                    },
                    clear: function () {
                        return this.index.reset(), this;
                    },
                    clearPrefetchCache: function () {
                        return this.prefetch && this.prefetch.clear(), this;
                    },
                    clearRemoteCache: function () {
                        return o.resetCache(), this;
                    },
                    ttAdapter: function () {
                        return this.__ttAdapter();
                    },
                }),
                e
            );
        })();
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("typeahead.js", ["jquery"], function (e) {
                  return t(e);
              })
            : "object" == typeof exports
            ? (module.exports = t(require("jquery")))
            : t(jQuery);
    })(0, function (g) {
        var v = (function () {
                "use strict";
                return {
                    isMsie: function () {
                        return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2];
                    },
                    isBlankString: function (e) {
                        return !e || /^\s*$/.test(e);
                    },
                    escapeRegExChars: function (e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                    },
                    isString: function (e) {
                        return "string" == typeof e;
                    },
                    isNumber: function (e) {
                        return "number" == typeof e;
                    },
                    isArray: g.isArray,
                    isFunction: g.isFunction,
                    isObject: g.isPlainObject,
                    isUndefined: function (e) {
                        return void 0 === e;
                    },
                    isElement: function (e) {
                        return !(!e || 1 !== e.nodeType);
                    },
                    isJQuery: function (e) {
                        return e instanceof g;
                    },
                    toStr: function (e) {
                        return v.isUndefined(e) || null === e ? "" : e + "";
                    },
                    bind: g.proxy,
                    each: function (e, n) {
                        g.each(e, function (e, t) {
                            return n(t, e);
                        });
                    },
                    map: g.map,
                    filter: g.grep,
                    every: function (n, i) {
                        var o = !0;
                        return n
                            ? (g.each(n, function (e, t) {
                                  return !!(o = i.call(null, t, e, n)) && void 0;
                              }),
                              !!o)
                            : o;
                    },
                    some: function (n, i) {
                        var o = !1;
                        return n
                            ? (g.each(n, function (e, t) {
                                  return !(o = i.call(null, t, e, n)) && void 0;
                              }),
                              !!o)
                            : o;
                    },
                    mixin: g.extend,
                    identity: function (e) {
                        return e;
                    },
                    clone: function (e) {
                        return g.extend(!0, {}, e);
                    },
                    getIdGenerator: function () {
                        var e = 0;
                        return function () {
                            return e++;
                        };
                    },
                    templatify: function (e) {
                        return g.isFunction(e)
                            ? e
                            : function () {
                                  return String(e);
                              };
                    },
                    defer: function (e) {
                        setTimeout(e, 0);
                    },
                    debounce: function (o, s, r) {
                        var a, l;
                        return function () {
                            var e,
                                t,
                                n = this,
                                i = arguments;
                            return (
                                (e = function () {
                                    (a = null), r || (l = o.apply(n, i));
                                }),
                                (t = r && !a),
                                clearTimeout(a),
                                (a = setTimeout(e, s)),
                                t && (l = o.apply(n, i)),
                                l
                            );
                        };
                    },
                    throttle: function (n, i) {
                        var o, s, r, a, l, c;
                        return (
                            (l = 0),
                            (c = function () {
                                (l = new Date()), (r = null), (a = n.apply(o, s));
                            }),
                            function () {
                                var e = new Date(),
                                    t = i - (e - l);
                                return (o = this), (s = arguments), t <= 0 ? (clearTimeout(r), (r = null), (l = e), (a = n.apply(o, s))) : r || (r = setTimeout(c, t)), a;
                            }
                        );
                    },
                    stringify: function (e) {
                        return v.isString(e) ? e : JSON.stringify(e);
                    },
                    noop: function () {},
                };
            })(),
            n = (function () {
                "use strict";
                var i = {
                    wrapper: "twitter-typeahead",
                    input: "tt-input",
                    hint: "tt-hint",
                    menu: "tt-menu",
                    dataset: "tt-dataset",
                    suggestion: "tt-suggestion",
                    selectable: "tt-selectable",
                    empty: "tt-empty",
                    open: "tt-open",
                    cursor: "tt-cursor",
                    highlight: "tt-highlight",
                };
                return function (e) {
                    var t, n;
                    return (
                        (n = v.mixin({}, i, e)),
                        {
                            css: (t = {
                                css: (function () {
                                    var e = {
                                        wrapper: { position: "relative", display: "inline-block" },
                                        hint: { position: "absolute", top: "0", left: "0", borderColor: "transparent", boxShadow: "none", opacity: "1" },
                                        input: { position: "relative", verticalAlign: "top", backgroundColor: "transparent" },
                                        inputWithNoHint: { position: "relative", verticalAlign: "top" },
                                        menu: { position: "absolute", top: "100%", left: "0", zIndex: "100", display: "none" },
                                        ltr: { left: "0", right: "auto" },
                                        rtl: { left: "auto", right: " 0" },
                                    };
                                    return v.isMsie() && v.mixin(e.input, { backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)" }), e;
                                })(),
                                classes: n,
                                html: (function (e) {
                                    return { wrapper: '<span class="' + e.wrapper + '"></span>', menu: '<div class="' + e.menu + '"></div>' };
                                })(n),
                                selectors: (function (e) {
                                    var n = {};
                                    return (
                                        v.each(e, function (e, t) {
                                            n[t] = "." + e;
                                        }),
                                        n
                                    );
                                })(n),
                            }).css,
                            html: t.html,
                            classes: t.classes,
                            selectors: t.selectors,
                            mixin: function (e) {
                                v.mixin(e, t);
                            },
                        }
                    );
                };
            })(),
            y = (function () {
                "use strict";
                function e(e) {
                    (e && e.el) || g.error("EventBus initialized without el"), (this.$el = g(e.el));
                }
                var n;
                return (
                    "typeahead:",
                    (n = { render: "rendered", cursorchange: "cursorchanged", select: "selected", autocomplete: "autocompleted" }),
                    v.mixin(e.prototype, {
                        _trigger: function (e, t) {
                            var n;
                            return (n = g.Event("typeahead:" + e)), (t = t || []).unshift(n), this.$el.trigger.apply(this.$el, t), n;
                        },
                        before: function (e) {
                            var t;
                            return (t = [].slice.call(arguments, 1)), this._trigger("before" + e, t).isDefaultPrevented();
                        },
                        trigger: function (e) {
                            var t;
                            this._trigger(e, [].slice.call(arguments, 1)), (t = n[e]) && this._trigger(t, [].slice.call(arguments, 1));
                        },
                    }),
                    e
                );
            })(),
            t = (function () {
                "use strict";
                function i(e, t, n, i) {
                    var o;
                    if (!n) return this;
                    for (
                        t = t.split(a),
                            n = i
                                ? (function (e, t) {
                                      return e.bind
                                          ? e.bind(t)
                                          : function () {
                                                e.apply(t, [].slice.call(arguments, 0));
                                            };
                                  })(n, i)
                                : n,
                            this._callbacks = this._callbacks || {};
                        (o = t.shift());

                    )
                        (this._callbacks[o] = this._callbacks[o] || { sync: [], async: [] }), this._callbacks[o][e].push(n);
                    return this;
                }
                function r(i, o, s) {
                    return function () {
                        for (var e, t = 0, n = i.length; !e && t < n; t += 1) e = !1 === i[t].apply(o, s);
                        return !e;
                    };
                }
                var a = /\s+/,
                    l = window.setImmediate
                        ? function (e) {
                              setImmediate(function () {
                                  e();
                              });
                          }
                        : function (e) {
                              setTimeout(function () {
                                  e();
                              }, 0);
                          };
                return {
                    onSync: function (e, t, n) {
                        return i.call(this, "sync", e, t, n);
                    },
                    onAsync: function (e, t, n) {
                        return i.call(this, "async", e, t, n);
                    },
                    off: function (e) {
                        var t;
                        if (!this._callbacks) return this;
                        for (e = e.split(a); (t = e.shift()); ) delete this._callbacks[t];
                        return this;
                    },
                    trigger: function (e) {
                        var t, n, i, o, s;
                        if (!this._callbacks) return this;
                        for (e = e.split(a), i = [].slice.call(arguments, 1); (t = e.shift()) && (n = this._callbacks[t]); ) (o = r(n.sync, this, [t].concat(i))), (s = r(n.async, this, [t].concat(i))), o() && l(s);
                        return this;
                    },
                };
            })(),
            a = (function (r) {
                "use strict";
                var e = { node: null, pattern: null, tagName: "strong", className: null, wordsOnly: !1, caseSensitive: !1 };
                return function (o) {
                    var s;
                    (o = v.mixin({}, e, o)).node &&
                        o.pattern &&
                        ((o.pattern = v.isArray(o.pattern) ? o.pattern : [o.pattern]),
                        (s = (function (e, t, n) {
                            for (var i, o = [], s = 0, r = e.length; s < r; s++) o.push(v.escapeRegExChars(e[s]));
                            return (i = n ? "\\b(" + o.join("|") + ")\\b" : "(" + o.join("|") + ")"), t ? new RegExp(i) : new RegExp(i, "i");
                        })(o.pattern, o.caseSensitive, o.wordsOnly)),
                        (function e(t, n) {
                            for (var i, o = 0; o < t.childNodes.length; o++) 3 === (i = t.childNodes[o]).nodeType ? (o += n(i) ? 1 : 0) : e(i, n);
                        })(o.node, function (e) {
                            var t, n, i;
                            return (
                                (t = s.exec(e.data)) &&
                                    ((i = r.createElement(o.tagName)), o.className && (i.className = o.className), (n = e.splitText(t.index)).splitText(t[0].length), i.appendChild(n.cloneNode(!0)), e.parentNode.replaceChild(i, n)),
                                !!t
                            );
                        }));
                };
            })(window.document),
            b = (function () {
                "use strict";
                function o(e, t) {
                    (e = e || {}).input || g.error("input is missing"),
                        t.mixin(this),
                        (this.$hint = g(e.hint)),
                        (this.$input = g(e.input)),
                        (this.query = this.$input.val()),
                        (this.queryWhenFocused = this.hasFocus() ? this.query : null),
                        (this.$overflowHelper = (function (e) {
                            return g('<pre aria-hidden="true"></pre>')
                                .css({
                                    position: "absolute",
                                    visibility: "hidden",
                                    whiteSpace: "pre",
                                    fontFamily: e.css("font-family"),
                                    fontSize: e.css("font-size"),
                                    fontStyle: e.css("font-style"),
                                    fontVariant: e.css("font-variant"),
                                    fontWeight: e.css("font-weight"),
                                    wordSpacing: e.css("word-spacing"),
                                    letterSpacing: e.css("letter-spacing"),
                                    textIndent: e.css("text-indent"),
                                    textRendering: e.css("text-rendering"),
                                    textTransform: e.css("text-transform"),
                                })
                                .insertAfter(e);
                        })(this.$input)),
                        this._checkLanguageDirection(),
                        0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = v.noop);
                }
                function i(e) {
                    return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                }
                var s;
                return (
                    (s = { 9: "tab", 27: "esc", 37: "left", 39: "right", 13: "enter", 38: "up", 40: "down" }),
                    (o.normalizeQuery = function (e) {
                        return v
                            .toStr(e)
                            .replace(/^\s*/g, "")
                            .replace(/\s{2,}/g, " ");
                    }),
                    v.mixin(o.prototype, t, {
                        _onBlur: function () {
                            this.resetInputValue(), this.trigger("blurred");
                        },
                        _onFocus: function () {
                            (this.queryWhenFocused = this.query), this.trigger("focused");
                        },
                        _onKeydown: function (e) {
                            var t = s[e.which || e.keyCode];
                            this._managePreventDefault(t, e), t && this._shouldTrigger(t, e) && this.trigger(t + "Keyed", e);
                        },
                        _onInput: function () {
                            this._setQuery(this.getInputValue()), this.clearHintIfInvalid(), this._checkLanguageDirection();
                        },
                        _managePreventDefault: function (e, t) {
                            var n;
                            switch (e) {
                                case "up":
                                case "down":
                                    n = !i(t);
                                    break;
                                default:
                                    n = !1;
                            }
                            n && t.preventDefault();
                        },
                        _shouldTrigger: function (e, t) {
                            var n;
                            switch (e) {
                                case "tab":
                                    n = !i(t);
                                    break;
                                default:
                                    n = !0;
                            }
                            return n;
                        },
                        _checkLanguageDirection: function () {
                            var e = (this.$input.css("direction") || "ltr").toLowerCase();
                            this.dir !== e && ((this.dir = e), this.$hint.attr("dir", e), this.trigger("langDirChanged", e));
                        },
                        _setQuery: function (e, t) {
                            var n, i;
                            (i =
                                !!(n = (function (e, t) {
                                    return o.normalizeQuery(e) === o.normalizeQuery(t);
                                })(e, this.query)) && this.query.length !== e.length),
                                (this.query = e),
                                t || n ? !t && i && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query);
                        },
                        bind: function () {
                            var e,
                                t,
                                n,
                                i,
                                o = this;
                            return (
                                (e = v.bind(this._onBlur, this)),
                                (t = v.bind(this._onFocus, this)),
                                (n = v.bind(this._onKeydown, this)),
                                (i = v.bind(this._onInput, this)),
                                this.$input.on("blur.tt", e).on("focus.tt", t).on("keydown.tt", n),
                                !v.isMsie() || 9 < v.isMsie()
                                    ? this.$input.on("input.tt", i)
                                    : this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (e) {
                                          s[e.which || e.keyCode] || v.defer(v.bind(o._onInput, o, e));
                                      }),
                                this
                            );
                        },
                        focus: function () {
                            this.$input.focus();
                        },
                        blur: function () {
                            this.$input.blur();
                        },
                        getLangDir: function () {
                            return this.dir;
                        },
                        getQuery: function () {
                            return this.query || "";
                        },
                        setQuery: function (e, t) {
                            this.setInputValue(e), this._setQuery(e, t);
                        },
                        hasQueryChangedSinceLastFocus: function () {
                            return this.query !== this.queryWhenFocused;
                        },
                        getInputValue: function () {
                            return this.$input.val();
                        },
                        setInputValue: function (e) {
                            this.$input.val(e), this.clearHintIfInvalid(), this._checkLanguageDirection();
                        },
                        resetInputValue: function () {
                            this.setInputValue(this.query);
                        },
                        getHint: function () {
                            return this.$hint.val();
                        },
                        setHint: function (e) {
                            this.$hint.val(e);
                        },
                        clearHint: function () {
                            this.setHint("");
                        },
                        clearHintIfInvalid: function () {
                            var e, t, n;
                            (n = (e = this.getInputValue()) !== (t = this.getHint()) && 0 === t.indexOf(e)), ("" !== e && n && !this.hasOverflow()) || this.clearHint();
                        },
                        hasFocus: function () {
                            return this.$input.is(":focus");
                        },
                        hasOverflow: function () {
                            var e = this.$input.width() - 2;
                            return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= e;
                        },
                        isCursorAtEnd: function () {
                            var e, t, n;
                            return (
                                (e = this.$input.val().length), (t = this.$input[0].selectionStart), v.isNumber(t) ? t === e : !document.selection || ((n = document.selection.createRange()).moveStart("character", -e), e === n.text.length)
                            );
                        },
                        destroy: function () {
                            this.$hint.off(".tt"), this.$input.off(".tt"), this.$overflowHelper.remove(), (this.$hint = this.$input = this.$overflowHelper = g("<div>"));
                        },
                    }),
                    o
                );
            })(),
            o = (function () {
                "use strict";
                function e(e, t) {
                    ((e = e || {}).templates = e.templates || {}),
                        (e.templates.notFound = e.templates.notFound || e.templates.empty),
                        e.source || g.error("missing source"),
                        e.node || g.error("missing node"),
                        e.name &&
                            !(function (e) {
                                return /^[_a-zA-Z0-9-]+$/.test(e);
                            })(e.name) &&
                            g.error("invalid dataset name: " + e.name),
                        t.mixin(this),
                        (this.highlight = !!e.highlight),
                        (this.name = e.name || n()),
                        (this.limit = e.limit || 5),
                        (this.displayFn = (function (t) {
                            return (
                                (t = t || v.stringify),
                                v.isFunction(t)
                                    ? t
                                    : function (e) {
                                          return e[t];
                                      }
                            );
                        })(e.display || e.displayKey)),
                        (this.templates = (function (e, t) {
                            return {
                                notFound: e.notFound && v.templatify(e.notFound),
                                pending: e.pending && v.templatify(e.pending),
                                header: e.header && v.templatify(e.header),
                                footer: e.footer && v.templatify(e.footer),
                                suggestion:
                                    e.suggestion ||
                                    function (e) {
                                        return g("<div>").text(t(e));
                                    },
                            };
                        })(e.templates, this.displayFn)),
                        (this.source = e.source.__ttAdapter ? e.source.__ttAdapter() : e.source),
                        (this.async = v.isUndefined(e.async) ? 2 < this.source.length : !!e.async),
                        this._resetLastSuggestion(),
                        (this.$el = g(e.node)
                            .addClass(this.classes.dataset)
                            .addClass(this.classes.dataset + "-" + this.name));
                }
                var r, n;
                return (
                    (r = { val: "tt-selectable-display", obj: "tt-selectable-object" }),
                    (n = v.getIdGenerator()),
                    (e.extractData = function (e) {
                        var t = g(e);
                        return t.data(r.obj) ? { val: t.data(r.val) || "", obj: t.data(r.obj) || null } : null;
                    }),
                    v.mixin(e.prototype, t, {
                        _overwrite: function (e, t) {
                            (t = t || []).length ? this._renderSuggestions(e, t) : this.async && this.templates.pending ? this._renderPending(e) : !this.async && this.templates.notFound ? this._renderNotFound(e) : this._empty(),
                                this.trigger("rendered", this.name, t, !1);
                        },
                        _append: function (e, t) {
                            (t = t || []).length && this.$lastSuggestion.length ? this._appendSuggestions(e, t) : t.length ? this._renderSuggestions(e, t) : !this.$lastSuggestion.length && this.templates.notFound && this._renderNotFound(e),
                                this.trigger("rendered", this.name, t, !0);
                        },
                        _renderSuggestions: function (e, t) {
                            var n;
                            (n = this._getSuggestionsFragment(e, t)), (this.$lastSuggestion = n.children().last()), this.$el.html(n).prepend(this._getHeader(e, t)).append(this._getFooter(e, t));
                        },
                        _appendSuggestions: function (e, t) {
                            var n, i;
                            (i = (n = this._getSuggestionsFragment(e, t)).children().last()), this.$lastSuggestion.after(n), (this.$lastSuggestion = i);
                        },
                        _renderPending: function (e) {
                            var t = this.templates.pending;
                            this._resetLastSuggestion(), t && this.$el.html(t({ query: e, dataset: this.name }));
                        },
                        _renderNotFound: function (e) {
                            var t = this.templates.notFound;
                            this._resetLastSuggestion(), t && this.$el.html(t({ query: e, dataset: this.name }));
                        },
                        _empty: function () {
                            this.$el.empty(), this._resetLastSuggestion();
                        },
                        _getSuggestionsFragment: function (i, e) {
                            var o,
                                s = this;
                            return (
                                (o = document.createDocumentFragment()),
                                v.each(e, function (e) {
                                    var t, n;
                                    (n = s._injectQuery(i, e)),
                                        (t = g(s.templates.suggestion(n))
                                            .data(r.obj, e)
                                            .data(r.val, s.displayFn(e))
                                            .addClass(s.classes.suggestion + " " + s.classes.selectable)),
                                        o.appendChild(t[0]);
                                }),
                                this.highlight && a({ className: this.classes.highlight, node: o, pattern: i }),
                                g(o)
                            );
                        },
                        _getFooter: function (e, t) {
                            return this.templates.footer ? this.templates.footer({ query: e, suggestions: t, dataset: this.name }) : null;
                        },
                        _getHeader: function (e, t) {
                            return this.templates.header ? this.templates.header({ query: e, suggestions: t, dataset: this.name }) : null;
                        },
                        _resetLastSuggestion: function () {
                            this.$lastSuggestion = g();
                        },
                        _injectQuery: function (e, t) {
                            return v.isObject(t) ? v.mixin({ _query: e }, t) : t;
                        },
                        update: function (t) {
                            function e(e) {
                                o || ((o = !0), (e = (e || []).slice(0, n.limit)), (s = e.length), n._overwrite(t, e), s < n.limit && n.async && n.trigger("asyncRequested", t));
                            }
                            var n = this,
                                i = !1,
                                o = !1,
                                s = 0;
                            this.cancel(),
                                (this.cancel = function () {
                                    (i = !0), (n.cancel = g.noop), n.async && n.trigger("asyncCanceled", t);
                                }),
                                this.source(t, e, function (e) {
                                    (e = e || []), !i && s < n.limit && ((n.cancel = g.noop), (s += e.length), n._append(t, e.slice(0, n.limit - s)), n.async && n.trigger("asyncReceived", t));
                                }),
                                o || e([]);
                        },
                        cancel: g.noop,
                        clear: function () {
                            this._empty(), this.cancel(), this.trigger("cleared");
                        },
                        isEmpty: function () {
                            return this.$el.is(":empty");
                        },
                        destroy: function () {
                            this.$el = g("<div>");
                        },
                    }),
                    e
                );
            })(),
            w = (function () {
                "use strict";
                function e(e, n) {
                    var i = this;
                    (e = e || {}).node || g.error("node is required"),
                        n.mixin(this),
                        (this.$node = g(e.node)),
                        (this.query = null),
                        (this.datasets = v.map(e.datasets, function (e) {
                            var t = i.$node.find(e.node).first();
                            return (e.node = t.length ? t : g("<div>").appendTo(i.$node)), new o(e, n);
                        }));
                }
                return (
                    v.mixin(e.prototype, t, {
                        _onSelectableClick: function (e) {
                            this.trigger("selectableClicked", g(e.currentTarget));
                        },
                        _onRendered: function (e, t, n, i) {
                            this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetRendered", t, n, i);
                        },
                        _onCleared: function () {
                            this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetCleared");
                        },
                        _propagate: function () {
                            this.trigger.apply(this, arguments);
                        },
                        _allDatasetsEmpty: function () {
                            return v.every(this.datasets, function (e) {
                                return e.isEmpty();
                            });
                        },
                        _getSelectables: function () {
                            return this.$node.find(this.selectors.selectable);
                        },
                        _removeCursor: function () {
                            var e = this.getActiveSelectable();
                            e && e.removeClass(this.classes.cursor);
                        },
                        _ensureVisible: function (e) {
                            var t, n, i, o;
                            (n = (t = e.position().top) + e.outerHeight(!0)),
                                (i = this.$node.scrollTop()),
                                (o = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10)),
                                t < 0 ? this.$node.scrollTop(i + t) : o < n && this.$node.scrollTop(i + (n - o));
                        },
                        bind: function () {
                            var e,
                                t = this;
                            return (
                                (e = v.bind(this._onSelectableClick, this)),
                                this.$node.on("click.tt", this.selectors.selectable, e),
                                v.each(this.datasets, function (e) {
                                    e.onSync("asyncRequested", t._propagate, t).onSync("asyncCanceled", t._propagate, t).onSync("asyncReceived", t._propagate, t).onSync("rendered", t._onRendered, t).onSync("cleared", t._onCleared, t);
                                }),
                                this
                            );
                        },
                        isOpen: function () {
                            return this.$node.hasClass(this.classes.open);
                        },
                        open: function () {
                            this.$node.addClass(this.classes.open);
                        },
                        close: function () {
                            this.$node.removeClass(this.classes.open), this._removeCursor();
                        },
                        setLanguageDirection: function (e) {
                            this.$node.attr("dir", e);
                        },
                        selectableRelativeToCursor: function (e) {
                            var t, n, i;
                            return (n = this.getActiveSelectable()), (t = this._getSelectables()), -1 === (i = (i = (((i = (n ? t.index(n) : -1) + e) + 1) % (t.length + 1)) - 1) < -1 ? t.length - 1 : i) ? null : t.eq(i);
                        },
                        setCursor: function (e) {
                            this._removeCursor(), (e = e && e.first()) && (e.addClass(this.classes.cursor), this._ensureVisible(e));
                        },
                        getSelectableData: function (e) {
                            return e && e.length ? o.extractData(e) : null;
                        },
                        getActiveSelectable: function () {
                            var e = this._getSelectables().filter(this.selectors.cursor).first();
                            return e.length ? e : null;
                        },
                        getTopSelectable: function () {
                            var e = this._getSelectables().first();
                            return e.length ? e : null;
                        },
                        update: function (t) {
                            var e = t !== this.query;
                            return (
                                e &&
                                    ((this.query = t),
                                    v.each(this.datasets, function (e) {
                                        e.update(t);
                                    })),
                                e
                            );
                        },
                        empty: function () {
                            v.each(this.datasets, function (e) {
                                e.clear();
                            }),
                                (this.query = null),
                                this.$node.addClass(this.classes.empty);
                        },
                        destroy: function () {
                            this.$node.off(".tt"),
                                (this.$node = g("<div>")),
                                v.each(this.datasets, function (e) {
                                    e.destroy();
                                });
                        },
                    }),
                    e
                );
            })(),
            k = (function () {
                "use strict";
                function e() {
                    w.apply(this, [].slice.call(arguments, 0));
                }
                var t = w.prototype;
                return (
                    v.mixin(e.prototype, w.prototype, {
                        open: function () {
                            return this._allDatasetsEmpty() || this._show(), t.open.apply(this, [].slice.call(arguments, 0));
                        },
                        close: function () {
                            return this._hide(), t.close.apply(this, [].slice.call(arguments, 0));
                        },
                        _onRendered: function () {
                            return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), t._onRendered.apply(this, [].slice.call(arguments, 0));
                        },
                        _onCleared: function () {
                            return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), t._onCleared.apply(this, [].slice.call(arguments, 0));
                        },
                        setLanguageDirection: function (e) {
                            return this.$node.css("ltr" === e ? this.css.ltr : this.css.rtl), t.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
                        },
                        _hide: function () {
                            this.$node.hide();
                        },
                        _show: function () {
                            this.$node.css("display", "block");
                        },
                    }),
                    e
                );
            })(),
            x = (function () {
                "use strict";
                function e(e, t) {
                    var n, i, o, s, r, a, l, c, u, d, p;
                    (e = e || {}).input || g.error("missing input"),
                        e.menu || g.error("missing menu"),
                        e.eventBus || g.error("missing event bus"),
                        t.mixin(this),
                        (this.eventBus = e.eventBus),
                        (this.minLength = v.isNumber(e.minLength) ? e.minLength : 1),
                        (this.input = e.input),
                        (this.menu = e.menu),
                        (this.enabled = !0),
                        (this.active = !1),
                        this.input.hasFocus() && this.activate(),
                        (this.dir = this.input.getLangDir()),
                        this._hacks(),
                        this.menu
                            .bind()
                            .onSync("selectableClicked", this._onSelectableClicked, this)
                            .onSync("asyncRequested", this._onAsyncRequested, this)
                            .onSync("asyncCanceled", this._onAsyncCanceled, this)
                            .onSync("asyncReceived", this._onAsyncReceived, this)
                            .onSync("datasetRendered", this._onDatasetRendered, this)
                            .onSync("datasetCleared", this._onDatasetCleared, this),
                        (n = h(this, "activate", "open", "_onFocused")),
                        (i = h(this, "deactivate", "_onBlurred")),
                        (o = h(this, "isActive", "isOpen", "_onEnterKeyed")),
                        (s = h(this, "isActive", "isOpen", "_onTabKeyed")),
                        (r = h(this, "isActive", "_onEscKeyed")),
                        (a = h(this, "isActive", "open", "_onUpKeyed")),
                        (l = h(this, "isActive", "open", "_onDownKeyed")),
                        (c = h(this, "isActive", "isOpen", "_onLeftKeyed")),
                        (u = h(this, "isActive", "isOpen", "_onRightKeyed")),
                        (d = h(this, "_openIfActive", "_onQueryChanged")),
                        (p = h(this, "_openIfActive", "_onWhitespaceChanged")),
                        this.input
                            .bind()
                            .onSync("focused", n, this)
                            .onSync("blurred", i, this)
                            .onSync("enterKeyed", o, this)
                            .onSync("tabKeyed", s, this)
                            .onSync("escKeyed", r, this)
                            .onSync("upKeyed", a, this)
                            .onSync("downKeyed", l, this)
                            .onSync("leftKeyed", c, this)
                            .onSync("rightKeyed", u, this)
                            .onSync("queryChanged", d, this)
                            .onSync("whitespaceChanged", p, this)
                            .onSync("langDirChanged", this._onLangDirChanged, this);
                }
                function h(n) {
                    var e = [].slice.call(arguments, 1);
                    return function () {
                        var t = [].slice.call(arguments);
                        v.each(e, function (e) {
                            return n[e].apply(n, t);
                        });
                    };
                }
                return (
                    v.mixin(e.prototype, {
                        _hacks: function () {
                            var o, s;
                            (o = this.input.$input || g("<div>")),
                                (s = this.menu.$node || g("<div>")),
                                o.on("blur.tt", function (e) {
                                    var t, n, i;
                                    (t = document.activeElement),
                                        (n = s.is(t)),
                                        (i = 0 < s.has(t).length),
                                        v.isMsie() &&
                                            (n || i) &&
                                            (e.preventDefault(),
                                            e.stopImmediatePropagation(),
                                            v.defer(function () {
                                                o.focus();
                                            }));
                                }),
                                s.on("mousedown.tt", function (e) {
                                    e.preventDefault();
                                });
                        },
                        _onSelectableClicked: function (e, t) {
                            this.select(t);
                        },
                        _onDatasetCleared: function () {
                            this._updateHint();
                        },
                        _onDatasetRendered: function (e, t, n, i) {
                            this._updateHint(), this.eventBus.trigger("render", n, i, t);
                        },
                        _onAsyncRequested: function (e, t, n) {
                            this.eventBus.trigger("asyncrequest", n, t);
                        },
                        _onAsyncCanceled: function (e, t, n) {
                            this.eventBus.trigger("asynccancel", n, t);
                        },
                        _onAsyncReceived: function (e, t, n) {
                            this.eventBus.trigger("asyncreceive", n, t);
                        },
                        _onFocused: function () {
                            this._minLengthMet() && this.menu.update(this.input.getQuery());
                        },
                        _onBlurred: function () {
                            this.input.hasQueryChangedSinceLastFocus() && this.eventBus.trigger("change", this.input.getQuery());
                        },
                        _onEnterKeyed: function (e, t) {
                            var n;
                            (n = this.menu.getActiveSelectable()) && this.select(n) && t.preventDefault();
                        },
                        _onTabKeyed: function (e, t) {
                            var n;
                            (n = this.menu.getActiveSelectable()) ? this.select(n) && t.preventDefault() : (n = this.menu.getTopSelectable()) && this.autocomplete(n) && t.preventDefault();
                        },
                        _onEscKeyed: function () {
                            this.close();
                        },
                        _onUpKeyed: function () {
                            this.moveCursor(-1);
                        },
                        _onDownKeyed: function () {
                            this.moveCursor(1);
                        },
                        _onLeftKeyed: function () {
                            "rtl" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable());
                        },
                        _onRightKeyed: function () {
                            "ltr" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable());
                        },
                        _onQueryChanged: function (e, t) {
                            this._minLengthMet(t) ? this.menu.update(t) : this.menu.empty();
                        },
                        _onWhitespaceChanged: function () {
                            this._updateHint();
                        },
                        _onLangDirChanged: function (e, t) {
                            this.dir !== t && ((this.dir = t), this.menu.setLanguageDirection(t));
                        },
                        _openIfActive: function () {
                            this.isActive() && this.open();
                        },
                        _minLengthMet: function (e) {
                            return (e = v.isString(e) ? e : this.input.getQuery() || "").length >= this.minLength;
                        },
                        _updateHint: function () {
                            var e, t, n, i, o, s;
                            (e = this.menu.getTopSelectable()),
                                (t = this.menu.getSelectableData(e)),
                                (n = this.input.getInputValue()),
                                !t || v.isBlankString(n) || this.input.hasOverflow()
                                    ? this.input.clearHint()
                                    : ((i = b.normalizeQuery(n)), (o = v.escapeRegExChars(i)), (s = new RegExp("^(?:" + o + ")(.+$)", "i").exec(t.val)) && this.input.setHint(n + s[1]));
                        },
                        isEnabled: function () {
                            return this.enabled;
                        },
                        enable: function () {
                            this.enabled = !0;
                        },
                        disable: function () {
                            this.enabled = !1;
                        },
                        isActive: function () {
                            return this.active;
                        },
                        activate: function () {
                            return !!this.isActive() || (!(!this.isEnabled() || this.eventBus.before("active")) && ((this.active = !0), this.eventBus.trigger("active"), !0));
                        },
                        deactivate: function () {
                            return !this.isActive() || (!this.eventBus.before("idle") && ((this.active = !1), this.close(), this.eventBus.trigger("idle"), !0));
                        },
                        isOpen: function () {
                            return this.menu.isOpen();
                        },
                        open: function () {
                            return this.isOpen() || this.eventBus.before("open") || (this.menu.open(), this._updateHint(), this.eventBus.trigger("open")), this.isOpen();
                        },
                        close: function () {
                            return this.isOpen() && !this.eventBus.before("close") && (this.menu.close(), this.input.clearHint(), this.input.resetInputValue(), this.eventBus.trigger("close")), !this.isOpen();
                        },
                        setVal: function (e) {
                            this.input.setQuery(v.toStr(e));
                        },
                        getVal: function () {
                            return this.input.getQuery();
                        },
                        select: function (e) {
                            var t = this.menu.getSelectableData(e);
                            return !(!t || this.eventBus.before("select", t.obj)) && (this.input.setQuery(t.val, !0), this.eventBus.trigger("select", t.obj), this.close(), !0);
                        },
                        autocomplete: function (e) {
                            var t, n;
                            return (
                                (t = this.input.getQuery()),
                                !(!((n = this.menu.getSelectableData(e)) && t !== n.val) || this.eventBus.before("autocomplete", n.obj)) && (this.input.setQuery(n.val), this.eventBus.trigger("autocomplete", n.obj), !0)
                            );
                        },
                        moveCursor: function (e) {
                            var t, n, i, o;
                            return (
                                (t = this.input.getQuery()),
                                (n = this.menu.selectableRelativeToCursor(e)),
                                (o = (i = this.menu.getSelectableData(n)) ? i.obj : null),
                                !(this._minLengthMet() && this.menu.update(t)) &&
                                    !this.eventBus.before("cursorchange", o) &&
                                    (this.menu.setCursor(n), i ? this.input.setInputValue(i.val) : (this.input.resetInputValue(), this._updateHint()), this.eventBus.trigger("cursorchange", o), !0)
                            );
                        },
                        destroy: function () {
                            this.input.destroy(), this.menu.destroy();
                        },
                    }),
                    e
                );
            })();
        !(function () {
            "use strict";
            function i(e, n) {
                e.each(function () {
                    var e,
                        t = g(this);
                    (e = t.data(m.typeahead)) && n(e, t);
                });
            }
            function f(e) {
                var t;
                return (t = v.isJQuery(e) || v.isElement(e) ? g(e).first() : []).length ? t : null;
            }
            var e, m, t;
            (e = g.fn.typeahead),
                (m = { www: "tt-www", attrs: "tt-attrs", typeahead: "tt-typeahead" }),
                (t = {
                    initialize: function (d, p) {
                        var h;
                        return (
                            (p = v.isArray(p) ? p : [].slice.call(arguments, 1)),
                            (h = n((d = d || {}).classNames)),
                            this.each(function () {
                                var e, t, n, i, o, s, r, a, l, c, u;
                                v.each(p, function (e) {
                                    e.highlight = !!d.highlight;
                                }),
                                    (e = g(this)),
                                    (t = g(h.html.wrapper)),
                                    (n = f(d.hint)),
                                    (i = f(d.menu)),
                                    (o = !1 !== d.hint && !n),
                                    (s = !1 !== d.menu && !i),
                                    o &&
                                        (n = (function (e, t) {
                                            return e
                                                .clone()
                                                .addClass(t.classes.hint)
                                                .removeData()
                                                .css(t.css.hint)
                                                .css(
                                                    (function (e) {
                                                        return {
                                                            backgroundAttachment: e.css("background-attachment"),
                                                            backgroundClip: e.css("background-clip"),
                                                            backgroundColor: e.css("background-color"),
                                                            backgroundImage: e.css("background-image"),
                                                            backgroundOrigin: e.css("background-origin"),
                                                            backgroundPosition: e.css("background-position"),
                                                            backgroundRepeat: e.css("background-repeat"),
                                                            backgroundSize: e.css("background-size"),
                                                        };
                                                    })(e)
                                                )
                                                .prop("readonly", !0)
                                                .removeAttr("id name placeholder required")
                                                .attr({ autocomplete: "off", spellcheck: "false", tabindex: -1 });
                                        })(e, h)),
                                    s && (i = g(h.html.menu).css(h.css.menu)),
                                    n && n.val(""),
                                    (e = (function (e, t) {
                                        e.data(m.attrs, { dir: e.attr("dir"), autocomplete: e.attr("autocomplete"), spellcheck: e.attr("spellcheck"), style: e.attr("style") }),
                                            e.addClass(t.classes.input).attr({ autocomplete: "off", spellcheck: !1 });
                                        try {
                                            e.attr("dir") || e.attr("dir", "auto");
                                        } catch (e) {}
                                        return e;
                                    })(e, h)),
                                    (o || s) &&
                                        (t.css(h.css.wrapper),
                                        e.css(o ? h.css.input : h.css.inputWithNoHint),
                                        e
                                            .wrap(t)
                                            .parent()
                                            .prepend(o ? n : null)
                                            .append(s ? i : null)),
                                    (u = s ? k : w),
                                    (r = new y({ el: e })),
                                    (a = new b({ hint: n, input: e }, h)),
                                    (l = new u({ node: i, datasets: p }, h)),
                                    (c = new x({ input: a, menu: l, eventBus: r, minLength: d.minLength }, h)),
                                    e.data(m.www, h),
                                    e.data(m.typeahead, c);
                            })
                        );
                    },
                    isEnabled: function () {
                        var t;
                        return (
                            i(this.first(), function (e) {
                                t = e.isEnabled();
                            }),
                            t
                        );
                    },
                    enable: function () {
                        return (
                            i(this, function (e) {
                                e.enable();
                            }),
                            this
                        );
                    },
                    disable: function () {
                        return (
                            i(this, function (e) {
                                e.disable();
                            }),
                            this
                        );
                    },
                    isActive: function () {
                        var t;
                        return (
                            i(this.first(), function (e) {
                                t = e.isActive();
                            }),
                            t
                        );
                    },
                    activate: function () {
                        return (
                            i(this, function (e) {
                                e.activate();
                            }),
                            this
                        );
                    },
                    deactivate: function () {
                        return (
                            i(this, function (e) {
                                e.deactivate();
                            }),
                            this
                        );
                    },
                    isOpen: function () {
                        var t;
                        return (
                            i(this.first(), function (e) {
                                t = e.isOpen();
                            }),
                            t
                        );
                    },
                    open: function () {
                        return (
                            i(this, function (e) {
                                e.open();
                            }),
                            this
                        );
                    },
                    close: function () {
                        return (
                            i(this, function (e) {
                                e.close();
                            }),
                            this
                        );
                    },
                    select: function (e) {
                        var t = !1,
                            n = g(e);
                        return (
                            i(this.first(), function (e) {
                                t = e.select(n);
                            }),
                            t
                        );
                    },
                    autocomplete: function (e) {
                        var t = !1,
                            n = g(e);
                        return (
                            i(this.first(), function (e) {
                                t = e.autocomplete(n);
                            }),
                            t
                        );
                    },
                    moveCursor: function (t) {
                        var n = !1;
                        return (
                            i(this.first(), function (e) {
                                n = e.moveCursor(t);
                            }),
                            n
                        );
                    },
                    val: function (t) {
                        var n;
                        return arguments.length
                            ? (i(this, function (e) {
                                  e.setVal(t);
                              }),
                              this)
                            : (i(this.first(), function (e) {
                                  n = e.getVal();
                              }),
                              n);
                    },
                    destroy: function () {
                        return (
                            i(this, function (e, t) {
                                (function (n) {
                                    var e, t;
                                    (e = n.data(m.www)),
                                        (t = n.parent().filter(e.selectors.wrapper)),
                                        v.each(n.data(m.attrs), function (e, t) {
                                            v.isUndefined(e) ? n.removeAttr(t) : n.attr(t, e);
                                        }),
                                        n.removeData(m.typeahead).removeData(m.www).removeData(m.attr).removeClass(e.classes.input),
                                        t.length && (n.detach().insertAfter(t), t.remove());
                                })(t),
                                    e.destroy();
                            }),
                            this
                        );
                    },
                }),
                (g.fn.typeahead = function (e) {
                    return t[e] ? t[e].apply(this, [].slice.call(arguments, 1)) : t.initialize.apply(this, arguments);
                }),
                (g.fn.typeahead.noConflict = function () {
                    return (g.fn.typeahead = e), this;
                });
        })();
    }),
    (function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? (module.exports = e(require("jquery"))) : e(jQuery);
    })(function (c) {
        "use strict";
        var o,
            r = window.Slick || {};
        (((o = 0),
        (r = function (e, t) {
            var n,
                i = this;
            (i.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: c(e),
                appendDots: c(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return c('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
                (i.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                c.extend(i, i.initials),
                (i.activeBreakpoint = null),
                (i.animType = null),
                (i.animProp = null),
                (i.breakpoints = []),
                (i.breakpointSettings = []),
                (i.cssTransitions = !1),
                (i.focussed = !1),
                (i.interrupted = !1),
                (i.hidden = "hidden"),
                (i.paused = !0),
                (i.positionProp = null),
                (i.respondTo = null),
                (i.rowCount = 1),
                (i.shouldClick = !0),
                (i.$slider = c(e)),
                (i.$slidesCache = null),
                (i.transformType = null),
                (i.transitionType = null),
                (i.visibilityChange = "visibilitychange"),
                (i.windowWidth = 0),
                (i.windowTimer = null),
                (n = c(e).data("slick") || {}),
                (i.options = c.extend({}, i.defaults, t, n)),
                (i.currentSlide = i.options.initialSlide),
                (i.originalSettings = i.options),
                void 0 !== document.mozHidden ? ((i.hidden = "mozHidden"), (i.visibilityChange = "mozvisibilitychange")) : void 0 !== document.webkitHidden && ((i.hidden = "webkitHidden"), (i.visibilityChange = "webkitvisibilitychange")),
                (i.autoPlay = c.proxy(i.autoPlay, i)),
                (i.autoPlayClear = c.proxy(i.autoPlayClear, i)),
                (i.autoPlayIterator = c.proxy(i.autoPlayIterator, i)),
                (i.changeSlide = c.proxy(i.changeSlide, i)),
                (i.clickHandler = c.proxy(i.clickHandler, i)),
                (i.selectHandler = c.proxy(i.selectHandler, i)),
                (i.setPosition = c.proxy(i.setPosition, i)),
                (i.swipeHandler = c.proxy(i.swipeHandler, i)),
                (i.dragHandler = c.proxy(i.dragHandler, i)),
                (i.keyHandler = c.proxy(i.keyHandler, i)),
                (i.instanceUid = o++),
                (i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                i.registerBreakpoints(),
                i.init(!0);
        })).prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
        }),
            (r.prototype.addSlide = r.prototype.slickAdd = function (e, t, n) {
                var i = this;
                if ("boolean" == typeof t) (n = t), (t = null);
                else if (t < 0 || t >= i.slideCount) return !1;
                i.unload(),
                    "number" == typeof t
                        ? 0 === t && 0 === i.$slides.length
                            ? c(e).appendTo(i.$slideTrack)
                            : n
                            ? c(e).insertBefore(i.$slides.eq(t))
                            : c(e).insertAfter(i.$slides.eq(t))
                        : !0 === n
                        ? c(e).prependTo(i.$slideTrack)
                        : c(e).appendTo(i.$slideTrack),
                    (i.$slides = i.$slideTrack.children(this.options.slide)),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slideTrack.append(i.$slides),
                    i.$slides.each(function (e, t) {
                        c(t).attr("data-slick-index", e);
                    }),
                    (i.$slidesCache = i.$slides),
                    i.reinit();
            }),
            (r.prototype.animateHeight = function () {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({ height: t }, e.options.speed);
                }
            }),
            (r.prototype.animateSlide = function (e, t) {
                var n = {},
                    i = this;
                i.animateHeight(),
                    !0 === i.options.rtl && !1 === i.options.vertical && (e = -e),
                    !1 === i.transformsEnabled
                        ? !1 === i.options.vertical
                            ? i.$slideTrack.animate({ left: e }, i.options.speed, i.options.easing, t)
                            : i.$slideTrack.animate({ top: e }, i.options.speed, i.options.easing, t)
                        : !1 === i.cssTransitions
                        ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft),
                          c({ animStart: i.currentLeft }).animate(
                              { animStart: e },
                              {
                                  duration: i.options.speed,
                                  easing: i.options.easing,
                                  step: function (e) {
                                      (e = Math.ceil(e)), !1 === i.options.vertical ? (n[i.animType] = "translate(" + e + "px, 0px)") : (n[i.animType] = "translate(0px," + e + "px)"), i.$slideTrack.css(n);
                                  },
                                  complete: function () {
                                      t && t.call();
                                  },
                              }
                          ))
                        : (i.applyTransition(),
                          (e = Math.ceil(e)),
                          !1 === i.options.vertical ? (n[i.animType] = "translate3d(" + e + "px, 0px, 0px)") : (n[i.animType] = "translate3d(0px," + e + "px, 0px)"),
                          i.$slideTrack.css(n),
                          t &&
                              setTimeout(function () {
                                  i.disableTransition(), t.call();
                              }, i.options.speed));
            }),
            (r.prototype.getNavTarget = function () {
                var e = this.options.asNavFor;
                return e && null !== e && (e = c(e).not(this.$slider)), e;
            }),
            (r.prototype.asNavFor = function (t) {
                var e = this.getNavTarget();
                null !== e &&
                    "object" == typeof e &&
                    e.each(function () {
                        var e = c(this).slick("getSlick");
                        e.unslicked || e.slideHandler(t, !0);
                    });
            }),
            (r.prototype.applyTransition = function (e) {
                var t = this,
                    n = {};
                !1 === t.options.fade ? (n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase) : (n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase),
                    !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
            }),
            (r.prototype.autoPlay = function () {
                var e = this;
                e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
            }),
            (r.prototype.autoPlayClear = function () {
                this.autoPlayTimer && clearInterval(this.autoPlayTimer);
            }),
            (r.prototype.autoPlayIterator = function () {
                var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                e.paused ||
                    e.interrupted ||
                    e.focussed ||
                    (!1 === e.options.infinite &&
                        (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? (e.direction = 0) : 0 === e.direction && ((t = e.currentSlide - e.options.slidesToScroll), e.currentSlide - 1 == 0 && (e.direction = 1))),
                    e.slideHandler(t));
            }),
            (r.prototype.buildArrows = function () {
                var e = this;
                !0 === e.options.arrows &&
                    ((e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow")),
                    (e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow")),
                    e.slideCount > e.options.slidesToShow
                        ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                          e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                          !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                        : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (r.prototype.buildDots = function () {
                var e,
                    t,
                    n = this;
                if (!0 === n.options.dots) {
                    for (n.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(c("<li />").append(n.options.customPaging.call(this, n, e)));
                    (n.$dots = t.appendTo(n.options.appendDots)), n.$dots.find("li").first().addClass("slick-active");
                }
            }),
            (r.prototype.buildOut = function () {
                var e = this;
                (e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (e.slideCount = e.$slides.length),
                    e.$slides.each(function (e, t) {
                        c(t)
                            .attr("data-slick-index", e)
                            .data("originalStyling", c(t).attr("style") || "");
                    }),
                    e.$slider.addClass("slick-slider"),
                    (e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                    e.$slideTrack.css("opacity", 0),
                    (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
                    c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.buildDots(),
                    e.updateDots(),
                    e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                    !0 === e.options.draggable && e.$list.addClass("draggable");
            }),
            (r.prototype.buildRows = function () {
                var e,
                    t,
                    n,
                    i,
                    o,
                    s,
                    r,
                    a = this;
                if (((i = document.createDocumentFragment()), (s = a.$slider.children()), 1 < a.options.rows)) {
                    for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
                        var l = document.createElement("div");
                        for (t = 0; t < a.options.rows; t++) {
                            var c = document.createElement("div");
                            for (n = 0; n < a.options.slidesPerRow; n++) {
                                var u = e * r + (t * a.options.slidesPerRow + n);
                                s.get(u) && c.appendChild(s.get(u));
                            }
                            l.appendChild(c);
                        }
                        i.appendChild(l);
                    }
                    a.$slider.empty().append(i),
                        a.$slider
                            .children()
                            .children()
                            .children()
                            .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
                }
            }),
            (r.prototype.checkResponsive = function (e, t) {
                var n,
                    i,
                    o,
                    s = this,
                    r = !1,
                    a = s.$slider.width(),
                    l = window.innerWidth || c(window).width();
                if (("window" === s.respondTo ? (o = l) : "slider" === s.respondTo ? (o = a) : "min" === s.respondTo && (o = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive)) {
                    for (n in ((i = null), s.breakpoints)) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[n] && (i = s.breakpoints[n]) : o > s.breakpoints[n] && (i = s.breakpoints[n]));
                    null !== i
                        ? null !== s.activeBreakpoint
                            ? (i === s.activeBreakpoint && !t) ||
                              ((s.activeBreakpoint = i),
                              "unslick" === s.breakpointSettings[i] ? s.unslick(i) : ((s.options = c.extend({}, s.originalSettings, s.breakpointSettings[i])), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)),
                              (r = i))
                            : ((s.activeBreakpoint = i),
                              "unslick" === s.breakpointSettings[i] ? s.unslick(i) : ((s.options = c.extend({}, s.originalSettings, s.breakpointSettings[i])), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)),
                              (r = i))
                        : null !== s.activeBreakpoint && ((s.activeBreakpoint = null), (s.options = s.originalSettings), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), (r = i)),
                        e || !1 === r || s.$slider.trigger("breakpoint", [s, r]);
                }
            }),
            (r.prototype.changeSlide = function (e, t) {
                var n,
                    i,
                    o = this,
                    s = c(e.currentTarget);
                switch ((s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), (n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll), e.data.message)) {
                    case "previous":
                        (i = 0 == n ? o.options.slidesToScroll : o.options.slidesToShow - n), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, t);
                        break;
                    case "next":
                        (i = 0 == n ? o.options.slidesToScroll : n), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, t);
                        break;
                    case "index":
                        var r = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
                        o.slideHandler(o.checkNavigable(r), !1, t), s.children().trigger("focus");
                        break;
                    default:
                        return;
                }
            }),
            (r.prototype.checkNavigable = function (e) {
                var t, n;
                if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1])) e = t[t.length - 1];
                else
                    for (var i in t) {
                        if (e < t[i]) {
                            e = n;
                            break;
                        }
                        n = t[i];
                    }
                return e;
            }),
            (r.prototype.cleanUpEvents = function () {
                var e = this;
                e.options.dots &&
                    null !== e.$dots &&
                    (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)),
                    !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
                    e.$slider.off("focus.slick blur.slick"),
                    !0 === e.options.arrows &&
                        e.slideCount > e.options.slidesToShow &&
                        (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
                        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                    e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                    e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                    e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                    e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                    e.$list.off("click.slick", e.clickHandler),
                    c(document).off(e.visibilityChange, e.visibility),
                    e.cleanUpSlideEvents(),
                    !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
                    !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler),
                    c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                    c(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                    c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                    c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
            }),
            (r.prototype.cleanUpSlideEvents = function () {
                var e = this;
                e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1));
            }),
            (r.prototype.cleanUpRows = function () {
                var e;
                1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e));
            }),
            (r.prototype.clickHandler = function (e) {
                !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
            }),
            (r.prototype.destroy = function (e) {
                var t = this;
                t.autoPlayClear(),
                    (t.touchObject = {}),
                    t.cleanUpEvents(),
                    c(".slick-cloned", t.$slider).detach(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow &&
                        t.$prevArrow.length &&
                        (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
                    t.$nextArrow &&
                        t.$nextArrow.length &&
                        (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
                    t.$slides &&
                        (t.$slides
                            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                            .removeAttr("aria-hidden")
                            .removeAttr("data-slick-index")
                            .each(function () {
                                c(this).attr("style", c(this).data("originalStyling"));
                            }),
                        t.$slideTrack.children(this.options.slide).detach(),
                        t.$slideTrack.detach(),
                        t.$list.detach(),
                        t.$slider.append(t.$slides)),
                    t.cleanUpRows(),
                    t.$slider.removeClass("slick-slider"),
                    t.$slider.removeClass("slick-initialized"),
                    t.$slider.removeClass("slick-dotted"),
                    (t.unslicked = !0),
                    e || t.$slider.trigger("destroy", [t]);
            }),
            (r.prototype.disableTransition = function (e) {
                var t = {};
                (t[this.transitionType] = ""), !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t);
            }),
            (r.prototype.fadeSlide = function (e, t) {
                var n = this;
                !1 === n.cssTransitions
                    ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
                    : (n.applyTransition(e),
                      n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
                      t &&
                          setTimeout(function () {
                              n.disableTransition(e), t.call();
                          }, n.options.speed));
            }),
            (r.prototype.fadeSlideOut = function (e) {
                var t = this;
                !1 === t.cssTransitions ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
            }),
            (r.prototype.filterSlides = r.prototype.slickFilter = function (e) {
                var t = this;
                null !== e && ((t.$slidesCache = t.$slides), t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
            }),
            (r.prototype.focusHandler = function () {
                var n = this;
                n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (e) {
                    e.stopImmediatePropagation();
                    var t = c(this);
                    setTimeout(function () {
                        n.options.pauseOnFocus && ((n.focussed = t.is(":focus")), n.autoPlay());
                    }, 0);
                });
            }),
            (r.prototype.getCurrent = r.prototype.slickCurrentSlide = function () {
                return this.currentSlide;
            }),
            (r.prototype.getDotCount = function () {
                var e = this,
                    t = 0,
                    n = 0,
                    i = 0;
                if (!0 === e.options.infinite)
                    if (e.slideCount <= e.options.slidesToShow) ++i;
                    else for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                else if (!0 === e.options.centerMode) i = e.slideCount;
                else if (e.options.asNavFor) for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                return i - 1;
            }),
            (r.prototype.getLeft = function (e) {
                var t,
                    n,
                    i,
                    o,
                    s = this,
                    r = 0;
                return (
                    (s.slideOffset = 0),
                    (n = s.$slides.first().outerHeight(!0)),
                    !0 === s.options.infinite
                        ? (s.slideCount > s.options.slidesToShow &&
                              ((s.slideOffset = s.slideWidth * s.options.slidesToShow * -1),
                              (o = -1),
                              !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? (o = -1.5) : 1 === s.options.slidesToShow && (o = -2)),
                              (r = n * s.options.slidesToShow * o)),
                          s.slideCount % s.options.slidesToScroll != 0 &&
                              e + s.options.slidesToScroll > s.slideCount &&
                              s.slideCount > s.options.slidesToShow &&
                              (r =
                                  e > s.slideCount
                                      ? ((s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1), (s.options.slidesToShow - (e - s.slideCount)) * n * -1)
                                      : ((s.slideOffset = (s.slideCount % s.options.slidesToScroll) * s.slideWidth * -1), (s.slideCount % s.options.slidesToScroll) * n * -1)))
                        : e + s.options.slidesToShow > s.slideCount && ((s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth), (r = (e + s.options.slidesToShow - s.slideCount) * n)),
                    s.slideCount <= s.options.slidesToShow && (r = s.slideOffset = 0),
                    !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow
                        ? (s.slideOffset = (s.slideWidth * Math.floor(s.options.slidesToShow)) / 2 - (s.slideWidth * s.slideCount) / 2)
                        : !0 === s.options.centerMode && !0 === s.options.infinite
                        ? (s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth)
                        : !0 === s.options.centerMode && ((s.slideOffset = 0), (s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
                    (t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * n * -1 + r),
                    !0 === s.options.variableWidth &&
                        ((i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow)),
                        (t = !0 === s.options.rtl ? (i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                        !0 === s.options.centerMode &&
                            ((i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1)),
                            (t = !0 === s.options.rtl ? (i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                            (t += (s.$list.width() - i.outerWidth()) / 2))),
                    t
                );
            }),
            (r.prototype.getOption = r.prototype.slickGetOption = function (e) {
                return this.options[e];
            }),
            (r.prototype.getNavigableIndexes = function () {
                var e,
                    t = this,
                    n = 0,
                    i = 0,
                    o = [];
                for (e = !1 === t.options.infinite ? t.slideCount : ((n = -1 * t.options.slidesToScroll), (i = -1 * t.options.slidesToScroll), 2 * t.slideCount); n < e; )
                    o.push(n), (n = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                return o;
            }),
            (r.prototype.getSlick = function () {
                return this;
            }),
            (r.prototype.getSlideCount = function () {
                var n,
                    i,
                    o = this;
                return (
                    (i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0),
                    !0 === o.options.swipeToSlide
                        ? (o.$slideTrack.find(".slick-slide").each(function (e, t) {
                              if (t.offsetLeft - i + c(t).outerWidth() / 2 > -1 * o.swipeLeft) return (n = t), !1;
                          }),
                          Math.abs(c(n).attr("data-slick-index") - o.currentSlide) || 1)
                        : o.options.slidesToScroll
                );
            }),
            (r.prototype.goTo = r.prototype.slickGoTo = function (e, t) {
                this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
            }),
            (r.prototype.init = function (e) {
                var t = this;
                c(t.$slider).hasClass("slick-initialized") ||
                    (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()),
                    e && t.$slider.trigger("init", [t]),
                    !0 === t.options.accessibility && t.initADA(),
                    t.options.autoplay && ((t.paused = !1), t.autoPlay());
            }),
            (r.prototype.initADA = function () {
                var n = this,
                    i = Math.ceil(n.slideCount / n.options.slidesToShow),
                    o = n.getNavigableIndexes().filter(function (e) {
                        return 0 <= e && e < n.slideCount;
                    });
                n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                    null !== n.$dots &&
                        (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function (e) {
                            var t = o.indexOf(e);
                            c(this).attr({ role: "tabpanel", id: "slick-slide" + n.instanceUid + e, tabindex: -1 }), -1 !== t && c(this).attr({ "aria-describedby": "slick-slide-control" + n.instanceUid + t });
                        }),
                        n.$dots
                            .attr("role", "tablist")
                            .find("li")
                            .each(function (e) {
                                var t = o[e];
                                c(this).attr({ role: "presentation" }),
                                    c(this)
                                        .find("button")
                                        .first()
                                        .attr({ role: "tab", id: "slick-slide-control" + n.instanceUid + e, "aria-controls": "slick-slide" + n.instanceUid + t, "aria-label": e + 1 + " of " + i, "aria-selected": null, tabindex: "-1" });
                            })
                            .eq(n.currentSlide)
                            .find("button")
                            .attr({ "aria-selected": "true", tabindex: "0" })
                            .end());
                for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++) n.$slides.eq(e).attr("tabindex", 0);
                n.activateADA();
            }),
            (r.prototype.initArrowEvents = function () {
                var e = this;
                !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide),
                    e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide),
                    !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
            }),
            (r.prototype.initDotEvents = function () {
                var e = this;
                !0 === e.options.dots && (c("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
                    !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1));
            }),
            (r.prototype.initSlideEvents = function () {
                var e = this;
                e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)));
            }),
            (r.prototype.initializeEvents = function () {
                var e = this;
                e.initArrowEvents(),
                    e.initDotEvents(),
                    e.initSlideEvents(),
                    e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
                    e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
                    e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
                    e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
                    e.$list.on("click.slick", e.clickHandler),
                    c(document).on(e.visibilityChange, c.proxy(e.visibility, e)),
                    !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
                    !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler),
                    c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)),
                    c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)),
                    c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                    c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                    c(e.setPosition);
            }),
            (r.prototype.initUI = function () {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
            }),
            (r.prototype.keyHandler = function (e) {
                var t = this;
                e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === e.keyCode && !0 === t.options.accessibility
                        ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } })
                        : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } }));
            }),
            (r.prototype.lazyLoad = function () {
                function e(e) {
                    c("img[data-lazy]", e).each(function () {
                        var e = c(this),
                            t = c(this).attr("data-lazy"),
                            n = c(this).attr("data-srcset"),
                            i = c(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                            o = document.createElement("img");
                        (o.onload = function () {
                            e.animate({ opacity: 0 }, 100, function () {
                                n && (e.attr("srcset", n), i && e.attr("sizes", i)),
                                    e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                                        e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                    }),
                                    s.$slider.trigger("lazyLoaded", [s, e, t]);
                            });
                        }),
                            (o.onerror = function () {
                                e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, t]);
                            }),
                            (o.src = t);
                    });
                }
                var t,
                    n,
                    i,
                    s = this;
                if (
                    (!0 === s.options.centerMode
                        ? (i =
                              !0 === s.options.infinite
                                  ? (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2
                                  : ((n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1))), s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
                        : ((n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide), (i = Math.ceil(n + s.options.slidesToShow)), !0 === s.options.fade && (0 < n && n--, i <= s.slideCount && i++)),
                    (t = s.$slider.find(".slick-slide").slice(n, i)),
                    "anticipated" === s.options.lazyLoad)
                )
                    for (var o = n - 1, r = i, a = s.$slider.find(".slick-slide"), l = 0; l < s.options.slidesToScroll; l++) o < 0 && (o = s.slideCount - 1), (t = (t = t.add(a.eq(o))).add(a.eq(r))), o--, r++;
                e(t),
                    s.slideCount <= s.options.slidesToShow
                        ? e(s.$slider.find(".slick-slide"))
                        : s.currentSlide >= s.slideCount - s.options.slidesToShow
                        ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow))
                        : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow));
            }),
            (r.prototype.loadSlider = function () {
                var e = this;
                e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
            }),
            (r.prototype.next = r.prototype.slickNext = function () {
                this.changeSlide({ data: { message: "next" } });
            }),
            (r.prototype.orientationChange = function () {
                this.checkResponsive(), this.setPosition();
            }),
            (r.prototype.pause = r.prototype.slickPause = function () {
                this.autoPlayClear(), (this.paused = !0);
            }),
            (r.prototype.play = r.prototype.slickPlay = function () {
                var e = this;
                e.autoPlay(), (e.options.autoplay = !0), (e.paused = !1), (e.focussed = !1), (e.interrupted = !1);
            }),
            (r.prototype.postSlide = function (e) {
                var t = this;
                t.unslicked ||
                    (t.$slider.trigger("afterChange", [t, e]),
                    (t.animating = !1),
                    t.slideCount > t.options.slidesToShow && t.setPosition(),
                    (t.swipeLeft = null),
                    t.options.autoplay && t.autoPlay(),
                    !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
            }),
            (r.prototype.prev = r.prototype.slickPrev = function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
            (r.prototype.preventDefault = function (e) {
                e.preventDefault();
            }),
            (r.prototype.progressiveLazyLoad = function (e) {
                e = e || 1;
                var t,
                    n,
                    i,
                    o,
                    s,
                    r = this,
                    a = c("img[data-lazy]", r.$slider);
                a.length
                    ? ((t = a.first()),
                      (n = t.attr("data-lazy")),
                      (i = t.attr("data-srcset")),
                      (o = t.attr("data-sizes") || r.$slider.attr("data-sizes")),
                      ((s = document.createElement("img")).onload = function () {
                          i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                              t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                              !0 === r.options.adaptiveHeight && r.setPosition(),
                              r.$slider.trigger("lazyLoaded", [r, t, n]),
                              r.progressiveLazyLoad();
                      }),
                      (s.onerror = function () {
                          e < 3
                              ? setTimeout(function () {
                                    r.progressiveLazyLoad(e + 1);
                                }, 500)
                              : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]), r.progressiveLazyLoad());
                      }),
                      (s.src = n))
                    : r.$slider.trigger("allImagesLoaded", [r]);
            }),
            (r.prototype.refresh = function (e) {
                var t,
                    n,
                    i = this;
                (n = i.slideCount - i.options.slidesToShow),
                    !i.options.infinite && i.currentSlide > n && (i.currentSlide = n),
                    i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
                    (t = i.currentSlide),
                    i.destroy(!0),
                    c.extend(i, i.initials, { currentSlide: t }),
                    i.init(),
                    e || i.changeSlide({ data: { message: "index", index: t } }, !1);
            }),
            (r.prototype.registerBreakpoints = function () {
                var e,
                    t,
                    n,
                    i = this,
                    o = i.options.responsive || null;
                if ("array" === c.type(o) && o.length) {
                    for (e in ((i.respondTo = i.options.respondTo || "window"), o))
                        if (((n = i.breakpoints.length - 1), o.hasOwnProperty(e))) {
                            for (t = o[e].breakpoint; 0 <= n; ) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
                            i.breakpoints.push(t), (i.breakpointSettings[t] = o[e].settings);
                        }
                    i.breakpoints.sort(function (e, t) {
                        return i.options.mobileFirst ? e - t : t - e;
                    });
                }
            }),
            (r.prototype.reinit = function () {
                var e = this;
                (e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
                    (e.slideCount = e.$slides.length),
                    e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                    e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                    e.registerBreakpoints(),
                    e.setProps(),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.updateArrows(),
                    e.initArrowEvents(),
                    e.buildDots(),
                    e.updateDots(),
                    e.initDotEvents(),
                    e.cleanUpSlideEvents(),
                    e.initSlideEvents(),
                    e.checkResponsive(!1, !0),
                    !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler),
                    e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                    e.setPosition(),
                    e.focusHandler(),
                    (e.paused = !e.options.autoplay),
                    e.autoPlay(),
                    e.$slider.trigger("reInit", [e]);
            }),
            (r.prototype.resize = function () {
                var e = this;
                c(window).width() !== e.windowWidth &&
                    (clearTimeout(e.windowDelay),
                    (e.windowDelay = window.setTimeout(function () {
                        (e.windowWidth = c(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
                    }, 50)));
            }),
            (r.prototype.removeSlide = r.prototype.slickRemove = function (e, t, n) {
                var i = this;
                if (((e = "boolean" == typeof e ? (!0 === (t = e) ? 0 : i.slideCount - 1) : !0 === t ? --e : e), i.slideCount < 1 || e < 0 || e > i.slideCount - 1)) return !1;
                i.unload(),
                    !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(),
                    (i.$slides = i.$slideTrack.children(this.options.slide)),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slideTrack.append(i.$slides),
                    (i.$slidesCache = i.$slides),
                    i.reinit();
            }),
            (r.prototype.setCSS = function (e) {
                var t,
                    n,
                    i = this,
                    o = {};
                !0 === i.options.rtl && (e = -e),
                    (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (o[i.positionProp] = e),
                    !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")") : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)")),
                    i.$slideTrack.css(o);
            }),
            (r.prototype.setDimensions = function () {
                var e = this;
                !1 === e.options.vertical
                    ? !0 === e.options.centerMode && e.$list.css({ padding: "0px " + e.options.centerPadding })
                    : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + " 0px" })),
                    (e.listWidth = e.$list.width()),
                    (e.listHeight = e.$list.height()),
                    !1 === e.options.vertical && !1 === e.options.variableWidth
                        ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)))
                        : !0 === e.options.variableWidth
                        ? e.$slideTrack.width(5e3 * e.slideCount)
                        : ((e.slideWidth = Math.ceil(e.listWidth)), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
            }),
            (r.prototype.setFade = function () {
                var n,
                    i = this;
                i.$slides.each(function (e, t) {
                    (n = i.slideWidth * e * -1),
                        !0 === i.options.rtl ? c(t).css({ position: "relative", right: n, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) : c(t).css({ position: "relative", left: n, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 });
                }),
                    i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 });
            }),
            (r.prototype.setHeight = function () {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t);
                }
            }),
            (r.prototype.setOption = r.prototype.slickSetOption = function () {
                var e,
                    t,
                    n,
                    i,
                    o,
                    s = this,
                    r = !1;
                if (
                    ("object" === c.type(arguments[0])
                        ? ((n = arguments[0]), (r = arguments[1]), (o = "multiple"))
                        : "string" === c.type(arguments[0]) &&
                          ((i = arguments[1]), (r = arguments[2]), "responsive" === (n = arguments[0]) && "array" === c.type(arguments[1]) ? (o = "responsive") : void 0 !== arguments[1] && (o = "single")),
                    "single" === o)
                )
                    s.options[n] = i;
                else if ("multiple" === o)
                    c.each(n, function (e, t) {
                        s.options[e] = t;
                    });
                else if ("responsive" === o)
                    for (t in i)
                        if ("array" !== c.type(s.options.responsive)) s.options.responsive = [i[t]];
                        else {
                            for (e = s.options.responsive.length - 1; 0 <= e; ) s.options.responsive[e].breakpoint === i[t].breakpoint && s.options.responsive.splice(e, 1), e--;
                            s.options.responsive.push(i[t]);
                        }
                r && (s.unload(), s.reinit());
            }),
            (r.prototype.setPosition = function () {
                var e = this;
                e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
            }),
            (r.prototype.setProps = function () {
                var e = this,
                    t = document.body.style;
                (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                    "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
                    (void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition) || (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                    e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : (e.options.zIndex = e.defaults.zIndex)),
                    void 0 !== t.OTransform && ((e.animType = "OTransform"), (e.transformType = "-o-transform"), (e.transitionType = "OTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                    void 0 !== t.MozTransform &&
                        ((e.animType = "MozTransform"), (e.transformType = "-moz-transform"), (e.transitionType = "MozTransition"), void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
                    void 0 !== t.webkitTransform &&
                        ((e.animType = "webkitTransform"), (e.transformType = "-webkit-transform"), (e.transitionType = "webkitTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                    void 0 !== t.msTransform && ((e.animType = "msTransform"), (e.transformType = "-ms-transform"), (e.transitionType = "msTransition"), void 0 === t.msTransform && (e.animType = !1)),
                    void 0 !== t.transform && !1 !== e.animType && ((e.animType = "transform"), (e.transformType = "transform"), (e.transitionType = "transition")),
                    (e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType);
            }),
            (r.prototype.setSlideClasses = function (e) {
                var t,
                    n,
                    i,
                    o,
                    s = this;
                if (((n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode)) {
                    var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (t = Math.floor(s.options.slidesToShow / 2)),
                        !0 === s.options.infinite &&
                            (t <= e && e <= s.slideCount - 1 - t
                                ? s.$slides
                                      .slice(e - t + r, e + t + 1)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")
                                : ((i = s.options.slidesToShow + e),
                                  n
                                      .slice(i - t + 1 + r, i + t + 2)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")),
                            0 === e ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")),
                        s.$slides.eq(e).addClass("slick-center");
                } else
                    0 <= e && e <= s.slideCount - s.options.slidesToShow
                        ? s.$slides
                              .slice(e, e + s.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                        : n.length <= s.options.slidesToShow
                        ? n.addClass("slick-active").attr("aria-hidden", "false")
                        : ((o = s.slideCount % s.options.slidesToShow),
                          (i = !0 === s.options.infinite ? s.options.slidesToShow + e : e),
                          s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow
                              ? n
                                    .slice(i - (s.options.slidesToShow - o), i + o)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                              : n
                                    .slice(i, i + s.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false"));
                ("ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad) || s.lazyLoad();
            }),
            (r.prototype.setupInfinite = function () {
                var e,
                    t,
                    n,
                    i = this;
                if ((!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && ((t = null), i.slideCount > i.options.slidesToShow))) {
                    for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; e -= 1)
                        (t = e - 1),
                            c(i.$slides[t])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", t - i.slideCount)
                                .prependTo(i.$slideTrack)
                                .addClass("slick-cloned");
                    for (e = 0; e < n + i.slideCount; e += 1)
                        (t = e),
                            c(i.$slides[t])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", t + i.slideCount)
                                .appendTo(i.$slideTrack)
                                .addClass("slick-cloned");
                    i.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                            c(this).attr("id", "");
                        });
                }
            }),
            (r.prototype.interrupt = function (e) {
                e || this.autoPlay(), (this.interrupted = e);
            }),
            (r.prototype.selectHandler = function (e) {
                var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
                    n = parseInt(t.attr("data-slick-index"));
                n || (n = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(n, !1, !0) : this.slideHandler(n);
            }),
            (r.prototype.slideHandler = function (e, t, n) {
                var i,
                    o,
                    s,
                    r,
                    a,
                    l = null,
                    c = this;
                if (((t = t || !1), !((!0 === c.animating && !0 === c.options.waitForAnimate) || (!0 === c.options.fade && c.currentSlide === e))))
                    if (
                        (!1 === t && c.asNavFor(e),
                        (i = e),
                        (l = c.getLeft(i)),
                        (r = c.getLeft(c.currentSlide)),
                        (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
                        !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                    )
                        !1 === c.options.fade &&
                            ((i = c.currentSlide),
                            !0 !== n
                                ? c.animateSlide(r, function () {
                                      c.postSlide(i);
                                  })
                                : c.postSlide(i));
                    else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll))
                        !1 === c.options.fade &&
                            ((i = c.currentSlide),
                            !0 !== n
                                ? c.animateSlide(r, function () {
                                      c.postSlide(i);
                                  })
                                : c.postSlide(i));
                    else {
                        if (
                            (c.options.autoplay && clearInterval(c.autoPlayTimer),
                            (o =
                                i < 0
                                    ? c.slideCount % c.options.slidesToScroll != 0
                                        ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                                        : c.slideCount + i
                                    : i >= c.slideCount
                                    ? c.slideCount % c.options.slidesToScroll != 0
                                        ? 0
                                        : i - c.slideCount
                                    : i),
                            (c.animating = !0),
                            c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                            (s = c.currentSlide),
                            (c.currentSlide = o),
                            c.setSlideClasses(c.currentSlide),
                            c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide),
                            c.updateDots(),
                            c.updateArrows(),
                            !0 === c.options.fade)
                        )
                            return (
                                !0 !== n
                                    ? (c.fadeSlideOut(s),
                                      c.fadeSlide(o, function () {
                                          c.postSlide(o);
                                      }))
                                    : c.postSlide(o),
                                void c.animateHeight()
                            );
                        !0 !== n
                            ? c.animateSlide(l, function () {
                                  c.postSlide(o);
                              })
                            : c.postSlide(o);
                    }
            }),
            (r.prototype.startLoad = function () {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
                    !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
                    e.$slider.addClass("slick-loading");
            }),
            (r.prototype.swipeDirection = function () {
                var e,
                    t,
                    n,
                    i,
                    o = this;
                return (
                    (e = o.touchObject.startX - o.touchObject.curX),
                    (t = o.touchObject.startY - o.touchObject.curY),
                    (n = Math.atan2(t, e)),
                    (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
                    i <= 45 && 0 <= i
                        ? !1 === o.options.rtl
                            ? "left"
                            : "right"
                        : i <= 360 && 315 <= i
                        ? !1 === o.options.rtl
                            ? "left"
                            : "right"
                        : 135 <= i && i <= 225
                        ? !1 === o.options.rtl
                            ? "right"
                            : "left"
                        : !0 === o.options.verticalSwiping
                        ? 35 <= i && i <= 135
                            ? "down"
                            : "up"
                        : "vertical"
                );
            }),
            (r.prototype.swipeEnd = function (e) {
                var t,
                    n,
                    i = this;
                if (((i.dragging = !1), (i.swiping = !1), i.scrolling)) return (i.scrolling = !1);
                if (((i.interrupted = !1), (i.shouldClick = !(10 < i.touchObject.swipeLength)), void 0 === i.touchObject.curX)) return !1;
                if ((!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe)) {
                    switch ((n = i.swipeDirection())) {
                        case "left":
                        case "down":
                            (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount()), (i.currentDirection = 0);
                            break;
                        case "right":
                        case "up":
                            (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount()), (i.currentDirection = 1);
                    }
                    "vertical" != n && (i.slideHandler(t), (i.touchObject = {}), i.$slider.trigger("swipe", [i, n]));
                } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), (i.touchObject = {}));
            }),
            (r.prototype.swipeHandler = function (e) {
                var t = this;
                if (!(!1 === t.options.swipe || ("ontouchend" in document && !1 === t.options.swipe) || (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))))
                    switch (
                        ((t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
                        (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
                        !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                        e.data.action)
                    ) {
                        case "start":
                            t.swipeStart(e);
                            break;
                        case "move":
                            t.swipeMove(e);
                            break;
                        case "end":
                            t.swipeEnd(e);
                    }
            }),
            (r.prototype.swipeMove = function (e) {
                var t,
                    n,
                    i,
                    o,
                    s,
                    r,
                    a = this;
                return (
                    (s = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
                    !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
                        ((t = a.getLeft(a.currentSlide)),
                        (a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX),
                        (a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY),
                        (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
                        (r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                        !a.options.verticalSwiping && !a.swiping && 4 < r
                            ? !(a.scrolling = !0)
                            : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r),
                              (n = a.swipeDirection()),
                              void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && ((a.swiping = !0), e.preventDefault()),
                              (o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                              !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                              (i = a.touchObject.swipeLength),
                              (a.touchObject.edgeHit = !1) === a.options.infinite &&
                                  ((0 === a.currentSlide && "right" === n) || (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                                  ((i = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                              !1 === a.options.vertical ? (a.swipeLeft = t + i * o) : (a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o),
                              !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
                              !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
                );
            }),
            (r.prototype.swipeStart = function (e) {
                var t,
                    n = this;
                if (((n.interrupted = !0), 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)) return !(n.touchObject = {});
                void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
                    (n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX),
                    (n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY),
                    (n.dragging = !0);
            }),
            (r.prototype.unfilterSlides = r.prototype.slickUnfilter = function () {
                var e = this;
                null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
            }),
            (r.prototype.unload = function () {
                var e = this;
                c(".slick-cloned", e.$slider).remove(),
                    e.$dots && e.$dots.remove(),
                    e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                    e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                    e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }),
            (r.prototype.unslick = function (e) {
                this.$slider.trigger("unslick", [this, e]), this.destroy();
            }),
            (r.prototype.updateArrows = function () {
                var e = this;
                Math.floor(e.options.slidesToShow / 2),
                    !0 === e.options.arrows &&
                        e.slideCount > e.options.slidesToShow &&
                        !e.options.infinite &&
                        (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === e.currentSlide
                            ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode
                            ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : e.currentSlide >= e.slideCount - 1 &&
                              !0 === e.options.centerMode &&
                              (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }),
            (r.prototype.updateDots = function () {
                var e = this;
                null !== e.$dots &&
                    (e.$dots.find("li").removeClass("slick-active").end(),
                    e.$dots
                        .find("li")
                        .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                        .addClass("slick-active"));
            }),
            (r.prototype.visibility = function () {
                this.options.autoplay && (document[this.hidden] ? (this.interrupted = !0) : (this.interrupted = !1));
            }),
            (c.fn.slick = function () {
                var e,
                    t,
                    n = this,
                    i = arguments[0],
                    o = Array.prototype.slice.call(arguments, 1),
                    s = n.length;
                for (e = 0; e < s; e++) if (("object" == typeof i || void 0 === i ? (n[e].slick = new r(n[e], i)) : (t = n[e].slick[i].apply(n[e].slick, o)), void 0 !== t)) return t;
                return n;
            });
    }),
    (function (e, t) {
        jQuery.fn[t] = function (e) {
            return e
                ? this.bind(
                      "resize",
                      ((n = e),
                      function () {
                          var e = this,
                              t = arguments;
                          i && clearTimeout(i),
                              (i = setTimeout(function () {
                                  n.apply(e, t), (i = null);
                              }, 100));
                      })
                  )
                : this.trigger(t);
        };
    })(jQuery, "smartresize"),
    (function (s) {
        function i(e, t) {
            if (
                ((this.element = e),
                (this.options = s.extend({}, r, t)),
                s(this.element).data("max-height", this.options.maxHeight),
                s(this.element).data("height-margin", this.options.heightMargin),
                delete this.options.maxHeight,
                this.options.embedCSS && !a)
            ) {
                var n = ".readmore-js-toggle, .readmore-js-section { " + this.options.sectionCSS + " } .readmore-js-section { overflow: hidden; }",
                    i = document.createElement("style");
                (i.type = "text/css"), i.styleSheet ? (i.styleSheet.cssText = n) : i.appendChild(document.createTextNode(n)), document.getElementsByTagName("head")[0].appendChild(i), (a = !0);
            }
            (this._defaults = r), (this._name = o), this.init();
        }
        var o = "readmore",
            r = {
                speed: 100,
                maxHeight: 200,
                heightMargin: 16,
                moreLink: '<a href="#">Read More</a>',
                lessLink: '<a href="#">Close</a>',
                embedCSS: !0,
                sectionCSS: "display: block; width: 100%;",
                startOpen: !1,
                expandedClass: "readmore-js-expanded",
                collapsedClass: "readmore-js-collapsed",
                beforeToggle: function () {},
                afterToggle: function () {},
            },
            a = !1;
        (i.prototype = {
            init: function () {
                var i = this;
                s(this.element).each(function () {
                    var t = s(this),
                        e = t.css("max-height").replace(/[^-\d\.]/g, "") > t.data("max-height") ? t.css("max-height").replace(/[^-\d\.]/g, "") : t.data("max-height"),
                        n = t.data("height-margin");
                    if (("none" != t.css("max-height") && t.css("max-height", "none"), i.setBoxHeight(t), t.outerHeight(!0) <= e + n)) return !0;
                    t.addClass("readmore-js-section " + i.options.collapsedClass).data("collapsedHeight", e),
                        t.after(
                            s(i.options.startOpen ? i.options.lessLink : i.options.moreLink)
                                .on("click", function (e) {
                                    i.toggleSlider(this, t, e);
                                })
                                .addClass("readmore-js-toggle")
                        ),
                        i.options.startOpen || t.css({ height: e });
                }),
                    s(window).on("resize", function (e) {
                        i.resizeBoxes();
                    });
            },
            toggleSlider: function (e, t, n) {
                n.preventDefault();
                var i = this;
                n = newLink = sectionClass = "";
                var o = !1;
                (n = s(t).data("collapsedHeight")),
                    s(t).height() <= n ? ((n = s(t).data("expandedHeight") + "px"), (newLink = "lessLink"), (o = !0), (sectionClass = i.options.expandedClass)) : ((newLink = "moreLink"), (sectionClass = i.options.collapsedClass)),
                    i.options.beforeToggle(e, t, o),
                    s(t).animate(
                        { height: n },
                        {
                            duration: i.options.speed,
                            complete: function () {
                                i.options.afterToggle(e, t, o),
                                    s(e).replaceWith(
                                        s(i.options[newLink])
                                            .on("click", function (e) {
                                                i.toggleSlider(this, t, e);
                                            })
                                            .addClass("readmore-js-toggle")
                                    ),
                                    s(this)
                                        .removeClass(i.options.collapsedClass + " " + i.options.expandedClass)
                                        .addClass(sectionClass);
                            },
                        }
                    );
            },
            setBoxHeight: function (e) {
                var t = e.clone().css({ height: "auto", width: e.width(), overflow: "hidden" }).insertAfter(e),
                    n = t.outerHeight(!0);
                t.remove(), e.data("expandedHeight", n);
            },
            resizeBoxes: function () {
                var t = this;
                s(".readmore-js-section").each(function () {
                    var e = s(this);
                    t.setBoxHeight(e), (e.height() > e.data("expandedHeight") || (e.hasClass(t.options.expandedClass) && e.height() < e.data("expandedHeight"))) && e.css("height", e.data("expandedHeight"));
                });
            },
            destroy: function () {
                var t = this;
                s(this.element).each(function () {
                    var e = s(this);
                    e
                        .removeClass("readmore-js-section " + t.options.collapsedClass + " " + t.options.expandedClass)
                        .css({ "max-height": "", height: "auto" })
                        .next(".readmore-js-toggle")
                        .remove(),
                        e.removeData();
                });
            },
        }),
            (s.fn[o] = function (t) {
                var n = arguments;
                return void 0 === t || "object" == typeof t
                    ? this.each(function () {
                          if (s.data(this, "plugin_" + o)) {
                              var e = s.data(this, "plugin_" + o);
                              e.destroy.apply(e);
                          }
                          s.data(this, "plugin_" + o, new i(this, t));
                      })
                    : "string" == typeof t && "_" !== t[0] && "init" !== t
                    ? this.each(function () {
                          var e = s.data(this, "plugin_" + o);
                          e instanceof i && "function" == typeof e[t] && e[t].apply(e, Array.prototype.slice.call(n, 1));
                      })
                    : void 0;
            });
    })(jQuery),
    (function (p) {
        var h,
            f,
            m = p(window),
            i = {},
            g = [],
            v = [],
            y = null,
            u = "_open",
            b = [],
            w = null,
            d = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
            k = {
                _init: function (e) {
                    var t = p(e),
                        n = t.data("popupoptions");
                    (v[e.id] = !1),
                        (g[e.id] = 0),
                        t.data("popup-initialized") || (t.attr("data-popup-initialized", "true"), k._initonce(e)),
                        n.autoopen &&
                            setTimeout(function () {
                                k.show(e, 0);
                            }, 0);
                },
                _initonce: function (n) {
                    var e,
                        t,
                        i,
                        o,
                        s = p(n),
                        r = p("body"),
                        a = s.data("popupoptions");
                    (y = parseInt(r.css("margin-right"), 10)),
                        (w =
                            void 0 !== document.body.style.webkitTransition ||
                            void 0 !== document.body.style.MozTransition ||
                            void 0 !== document.body.style.msTransition ||
                            void 0 !== document.body.style.OTransition ||
                            void 0 !== document.body.style.transition),
                        "tooltip" == a.type && ((a.background = !1), (a.scrolllock = !1)),
                        a.backgroundactive && ((a.background = !1), (a.blur = !1), (a.scrolllock = !1)),
                        !a.scrolllock || (void 0 === h && ((o = (i = p('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body")).children()), (h = o.innerWidth() - o.height(99).innerWidth()), i.remove()));
                    if ((s.attr("id") || s.attr("id", "j-popup-" + parseInt(1e8 * Math.random(), 10)), s.addClass("popup_content"), a.background && !p("#" + n.id + "_background").length)) {
                        r.append('<div id="' + n.id + '_background" class="popup_background"></div>');
                        var l = p("#" + n.id + "_background");
                        l.css({ opacity: 0, visibility: "hidden", backgroundColor: a.color, position: "fixed", top: 0, right: 0, bottom: 0, left: 0 }),
                            a.setzindex && !a.autozindex && l.css("z-index", "100000"),
                            a.transition && l.css("transition", a.transition);
                    }
                    r.append(n),
                        s.wrap('<div id="' + n.id + '_wrapper" class="popup_wrapper" />'),
                        (e = p("#" + n.id + "_wrapper")).css({ opacity: 0, visibility: "hidden", position: "absolute" }),
                        d && e.css("cursor", "pointer"),
                        "overlay" == a.type && e.css("overflow", "auto"),
                        s.css({ opacity: 0, visibility: "hidden", display: "inline-block" }),
                        a.setzindex && !a.autozindex && e.css("z-index", "100001"),
                        a.outline || s.css("outline", "none"),
                        a.transition && (s.css("transition", a.transition), e.css("transition", a.transition)),
                        s.attr("aria-hidden", !0),
                        "overlay" == a.type &&
                            (s.css({ textAlign: "left", position: "relative", verticalAlign: "middle" }),
                            (t = { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, textAlign: "center" }),
                            a.backgroundactive && ((t.position = "absolute"), (t.height = "0"), (t.overflow = "visible")),
                            e.css(t),
                            e.append('<div class="popup_align" />'),
                            p(".popup_align").css({ display: "inline-block", verticalAlign: "middle", height: "100%" })),
                        s.attr("role", "dialog");
                    var c = a.openelement ? a.openelement : "." + n.id + u;
                    p(c).each(function (e, t) {
                        p(t).attr("data-popup-ordinal", e), t.id || p(t).attr("id", "open_" + parseInt(1e8 * Math.random(), 10));
                    }),
                        s.attr("aria-labelledby") || s.attr("aria-label") || s.attr("aria-labelledby", p(c).attr("id")),
                        "hover" == a.action
                            ? ((a.keepfocus = !1),
                              p(c).on("mouseenter", function (e) {
                                  k.show(n, p(this).data("popup-ordinal"));
                              }),
                              p(c).on("mouseleave", function (e) {
                                  k.hide(n);
                              }))
                            : p(document).on("click", c, function (e) {
                                  e.preventDefault();
                                  var t = p(this).data("popup-ordinal");
                                  setTimeout(function () {
                                      k.show(n, t);
                                  }, 0);
                              }),
                        a.closebutton && k.addclosebutton(n),
                        a.detach ? s.hide().detach() : e.hide();
                },
                show: function (e, t) {
                    var n = p(e);
                    if (!n.data("popup-visible")) {
                        n.data("popup-initialized") || k._init(e), n.attr("data-popup-initialized", "true");
                        var i = p("body"),
                            o = n.data("popupoptions"),
                            s = p("#" + e.id + "_wrapper"),
                            r = p("#" + e.id + "_background");
                        if (
                            (x(e, t, o.beforeopen),
                            (v[e.id] = t),
                            setTimeout(function () {
                                b.push(e.id);
                            }, 0),
                            o.autozindex)
                        ) {
                            for (var a = document.getElementsByTagName("*"), l = a.length, c = 0, u = 0; u < l; u++) {
                                var d = p(a[u]).css("z-index");
                                "auto" !== d && c < (d = parseInt(d, 10)) && (c = d);
                            }
                            (g[e.id] = c), o.background && 0 < g[e.id] && p("#" + e.id + "_background").css({ zIndex: g[e.id] + 1 }), 0 < g[e.id] && s.css({ zIndex: g[e.id] + 2 });
                        }
                        o.detach ? (s.prepend(e), n.show()) : s.show(),
                            (f = setTimeout(function () {
                                s.css({ visibility: "visible", opacity: 1 }),
                                    p("html")
                                        .addClass("popup_visible")
                                        .addClass("popup_visible_" + e.id),
                                    s.addClass("popup_wrapper_visible");
                            }, 20)),
                            o.scrolllock && (i.css("overflow", "hidden"), i.height() > m.height() && i.css("margin-right", y + h)),
                            o.backgroundactive && n.css({ top: (m.height() - (n.get(0).offsetHeight + parseInt(n.css("margin-top"), 10) + parseInt(n.css("margin-bottom"), 10))) / 2 + "px" }),
                            n.css({ visibility: "visible", opacity: 1 }),
                            o.background &&
                                (r.css({ visibility: "visible", opacity: o.opacity }),
                                setTimeout(function () {
                                    r.css({ opacity: o.opacity });
                                }, 0)),
                            n.data("popup-visible", !0),
                            k.reposition(e, t),
                            n.data("focusedelementbeforepopup", document.activeElement),
                            o.keepfocus &&
                                (n.attr("tabindex", -1),
                                setTimeout(function () {
                                    "closebutton" === o.focuselement ? p("#" + e.id + " ." + e.id + "_close:first").focus() : o.focuselement ? p(o.focuselement).focus() : n.focus();
                                }, o.focusdelay)),
                            p(o.pagecontainer).attr("aria-hidden", !0),
                            n.attr("aria-hidden", !1),
                            x(e, t, o.onopen),
                            w
                                ? s.one("transitionend", function () {
                                      x(e, t, o.opentransitionend);
                                  })
                                : x(e, t, o.opentransitionend),
                            "tooltip" == o.type &&
                                p(window).on("resize." + e.id, function () {
                                    k.reposition(e, t);
                                });
                    }
                },
                hide: function (t, e) {
                    var n = p.inArray(t.id, b);
                    if (-1 !== n) {
                        f && clearTimeout(f);
                        var i = p("body"),
                            o = p(t),
                            s = o.data("popupoptions"),
                            r = p("#" + t.id + "_wrapper"),
                            a = p("#" + t.id + "_background");
                        o.data("popup-visible", !1),
                            1 === b.length
                                ? p("html")
                                      .removeClass("popup_visible")
                                      .removeClass("popup_visible_" + t.id)
                                : p("html").hasClass("popup_visible_" + t.id) && p("html").removeClass("popup_visible_" + t.id),
                            b.splice(n, 1),
                            r.hasClass("popup_wrapper_visible") && r.removeClass("popup_wrapper_visible"),
                            s.keepfocus &&
                                !e &&
                                setTimeout(function () {
                                    p(o.data("focusedelementbeforepopup")).is(":visible") && o.data("focusedelementbeforepopup").focus();
                                }, 0),
                            r.css({ visibility: "hidden", opacity: 0 }),
                            o.css({ visibility: "hidden", opacity: 0 }),
                            s.background && a.css({ visibility: "hidden", opacity: 0 }),
                            p(s.pagecontainer).attr("aria-hidden", !1),
                            o.attr("aria-hidden", !0),
                            x(t, v[t.id], s.onclose),
                            w && "0s" !== o.css("transition-duration")
                                ? o.one("transitionend", function (e) {
                                      o.data("popup-visible") || (s.detach ? o.hide().detach() : r.hide()),
                                          s.scrolllock &&
                                              setTimeout(function () {
                                                  i.css({ overflow: "visible", "margin-right": y });
                                              }, 10),
                                          x(t, v[t.id], s.closetransitionend);
                                  })
                                : (s.detach ? o.hide().detach() : r.hide(),
                                  s.scrolllock &&
                                      setTimeout(function () {
                                          i.css({ overflow: "visible", "margin-right": y });
                                      }, 10),
                                  x(t, v[t.id], s.closetransitionend)),
                            "tooltip" == s.type && p(window).off("resize." + t.id);
                    }
                },
                toggle: function (e, t) {
                    p(e).data("popup-visible")
                        ? k.hide(e)
                        : setTimeout(function () {
                              k.show(e, t);
                          }, 0);
                },
                reposition: function (e, t) {
                    var n = p(e),
                        i = n.data("popupoptions"),
                        o = p("#" + e.id + "_wrapper");
                    p("#" + e.id + "_background");
                    if (((t = t || 0), "tooltip" == i.type)) {
                        var s;
                        o.css({ position: "absolute" });
                        var r = (s = i.tooltipanchor ? p(i.tooltipanchor) : i.openelement ? p(i.openelement).filter('[data-popup-ordinal="' + t + '"]') : p("." + e.id + u + '[data-popup-ordinal="' + t + '"]')).offset();
                        "right" == i.horizontal
                            ? o.css("left", r.left + s.outerWidth() + i.offsetleft)
                            : "leftedge" == i.horizontal
                            ? o.css("left", r.left + s.outerWidth() - s.outerWidth() + i.offsetleft)
                            : "left" == i.horizontal
                            ? o.css("right", m.width() - r.left - i.offsetleft)
                            : "rightedge" == i.horizontal
                            ? o.css("right", m.width() - r.left - s.outerWidth() - i.offsetleft)
                            : o.css("left", r.left + s.outerWidth() / 2 - n.outerWidth() / 2 - parseFloat(n.css("marginLeft")) + i.offsetleft),
                            "bottom" == i.vertical
                                ? o.css("top", r.top + s.outerHeight() + i.offsettop)
                                : "bottomedge" == i.vertical
                                ? o.css("top", r.top + s.outerHeight() - n.outerHeight() + i.offsettop)
                                : "top" == i.vertical
                                ? o.css("bottom", m.height() - r.top - i.offsettop)
                                : "topedge" == i.vertical
                                ? o.css("bottom", m.height() - r.top - n.outerHeight() - i.offsettop)
                                : o.css("top", r.top + s.outerHeight() / 2 - n.outerHeight() / 2 - parseFloat(n.css("marginTop")) + i.offsettop);
                    } else "overlay" == i.type && (i.horizontal ? o.css("text-align", i.horizontal) : o.css("text-align", "center"), i.vertical ? n.css("vertical-align", i.vertical) : n.css("vertical-align", "middle"));
                },
                addclosebutton: function (e) {
                    var t;
                    (t = p(e).data("popupoptions").closebuttonmarkup
                        ? p(i.closebuttonmarkup).addClass(e.id + "_close")
                        : '<button class="popup_close ' + e.id + '_close" title="Close" aria-label="Close"><span aria-hidden="true">×</span></button>'),
                        p(e).data("popup-initialized") && p(e).append(t);
                },
            },
            x = function (e, t, n) {
                var i = p(e).data("popupoptions"),
                    o = i.openelement ? i.openelement : "." + e.id + u,
                    s = p(o + '[data-popup-ordinal="' + t + '"]');
                "function" == typeof n && n.call(p(e), e, s);
            };
        p(document).on("keydown", function (e) {
            if (b.length) {
                var t = b[b.length - 1],
                    n = document.getElementById(t);
                p(n).data("popupoptions").escape && 27 == e.keyCode && k.hide(n);
            }
        }),
            p(document).on("click", function (e) {
                if (b.length) {
                    var t = b[b.length - 1],
                        n = document.getElementById(t),
                        i = p(n).data("popupoptions").closeelement ? p(n).data("popupoptions").closeelement : "." + n.id + "_close";
                    p(e.target).closest(i).length && (e.preventDefault(), k.hide(n)),
                        p(n).data("popupoptions").blur && !p(e.target).closest("#" + t).length && 2 !== e.which && p(e.target).is(":visible") && (p(n).data("popupoptions").background ? (k.hide(n), e.preventDefault()) : k.hide(n, !0));
                }
            }),
            p(document).on("keydown", function (e) {
                if (b.length && 9 == e.which) {
                    var t = b[b.length - 1],
                        n = document.getElementById(t),
                        i = p(n)
                            .find("*")
                            .filter("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]")
                            .filter(":visible"),
                        o = p(":focus"),
                        s = i.length,
                        r = i.index(o);
                    0 === s ? (p(n).focus(), e.preventDefault()) : e.shiftKey ? 0 === r && (i.get(s - 1).focus(), e.preventDefault()) : r == s - 1 && (i.get(0).focus(), e.preventDefault());
                }
            }),
            (p.fn.popup = function (n) {
                return this.each(function () {
                    var e = p(this);
                    if ("object" == typeof n) {
                        var t = p.extend({}, p.fn.popup.defaults, e.data("popupoptions"), n);
                        e.data("popupoptions", t), (i = e.data("popupoptions")), k._init(this);
                    } else "string" == typeof n ? (e.data("popupoptions") || (e.data("popupoptions", p.fn.popup.defaults), (i = e.data("popupoptions"))), k[n].call(this, this)) : (e.data("popupoptions") || (e.data("popupoptions", p.fn.popup.defaults), (i = e.data("popupoptions"))), k._init(this));
                });
            }),
            (p.fn.popup.defaults = {
                type: "overlay",
                autoopen: !1,
                background: !0,
                backgroundactive: !1,
                color: "black",
                opacity: "0.5",
                horizontal: "center",
                vertical: "middle",
                offsettop: 0,
                offsetleft: 0,
                escape: !0,
                blur: !0,
                setzindex: !0,
                autozindex: !1,
                scrolllock: !1,
                closebutton: !1,
                closebuttonmarkup: null,
                keepfocus: !0,
                focuselement: null,
                focusdelay: 50,
                outline: !1,
                pagecontainer: null,
                detach: !1,
                openelement: null,
                closeelement: null,
                transition: null,
                tooltipanchor: null,
                beforeopen: null,
                onclose: null,
                onopen: null,
                opentransitionend: null,
                closetransitionend: null,
            });
    })(jQuery),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).LazyLoad = t());
    })(this, function () {
        "use strict";
        function t() {
            return (t =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        function i(e) {
            return t({}, M, e);
        }
        function o(e, t) {
            var n,
                i = new e(t);
            try {
                n = new CustomEvent("LazyLoad::Initialized", { detail: { instance: i } });
            } catch (e) {
                (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: i });
            }
            window.dispatchEvent(n);
        }
        function m(e, t) {
            return e.getAttribute("data-" + t);
        }
        function s(e, t, n) {
            var i = "data-" + t;
            null !== n ? e.setAttribute(i, n) : e.removeAttribute(i);
        }
        function g(e, t) {
            return s(e, "ll-status", t);
        }
        function c(e, t) {
            return s(e, "ll-timeout", t);
        }
        function u(e) {
            return m(e, "ll-timeout");
        }
        function v(e, t, n, i) {
            e && (void 0 === i ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, i));
        }
        function y(e, t) {
            q ? e.classList.add(t) : (e.className += (e.className ? " " : "") + t);
        }
        function r(e, t) {
            q
                ? e.classList.remove(t)
                : (e.className = e.className
                      .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                      .replace(/^\s+/, "")
                      .replace(/\s+$/, ""));
        }
        function b(e) {
            return e.llTempImage;
        }
        function w(e) {
            e && (e.loadingCount += 1);
        }
        function a(e) {
            for (var t, n = [], i = 0; (t = e.children[i]); i += 1) "SOURCE" === t.tagName && n.push(t);
            return n;
        }
        function n(e, t, n) {
            n && e.setAttribute(t, n);
        }
        function l(e, t) {
            n(e, "sizes", m(e, t.data_sizes)), n(e, "srcset", m(e, t.data_srcset)), n(e, "src", m(e, t.data_src));
        }
        function d(e, t, n) {
            var i = I[e.tagName];
            i && (i(e, t), w(n), y(e, t.class_loading), g(e, "loading"), v(t.callback_loading, e, n), v(t.callback_reveal, e, n));
        }
        function p(e, t) {
            !t || t.toLoadCount || t.loadingCount || v(e.callback_finish, t);
        }
        function h(e, t, n) {
            e.addEventListener(t, n);
        }
        function f(e, t, n) {
            e.removeEventListener(t, n);
        }
        function k(e, t, n) {
            f(e, "load", t), f(e, "loadeddata", t), f(e, "error", n);
        }
        function x(e, t, n) {
            delete e.llTempImage, n && (n.loadingCount -= 1), r(e, t.class_loading);
        }
        function C(s, r, a) {
            function l(e) {
                var t, n, i;
                x((t = s), (n = r), (i = a)), y(t, n.class_loaded), g(t, "loaded"), v(n.callback_loaded, t, i), p(n, i), k(c, l, o);
            }
            var e,
                t,
                n,
                c = b(s) || s,
                o = function e(t) {
                    var n, i, o;
                    x((n = s), (i = r), (o = a)), y(n, i.class_error), g(n, "error"), v(i.callback_error, n, o), p(i, o), k(c, l, e);
                };
            (n = o), h((e = c), "load", (t = l)), h(e, "loadeddata", t), h(e, "error", n);
        }
        function T(e, t) {
            t && (t.toLoadCount -= 1);
        }
        function S(e, t, n) {
            var i, o, s, r;
            (r = e),
                -1 < F.indexOf(r.tagName)
                    ? (C((i = e), (o = t), (s = n)), d(i, o, s))
                    : (function (e, t, n) {
                          var i, o, s, r, a, l, c, u, d, p, h, f;
                          (e.llTempImage = document.createElement("img")),
                              C(e, t, n),
                              (d = n),
                              (p = m((c = e), (u = t).data_bg)),
                              (h = m(c, u.data_bg_hidpi)),
                              (f = P && h ? h : p) && ((c.style.backgroundImage = 'url("'.concat(f, '")')), b(c).setAttribute("src", f), w(d), y(c, u.class_loading), g(c, "loading"), v(u.callback_loading, c, d), v(u.callback_reveal, c, d)),
                              (s = n),
                              (r = m((i = e), (o = t).data_bg_multi)),
                              (a = m(i, o.data_bg_multi_hidpi)),
                              (l = P && a ? a : r) && ((i.style.backgroundImage = l), y(i, o.class_applied), g(i, "applied"), v(o.callback_applied, i, s));
                      })(e, t, n),
                T(0, n),
                (function (e, t) {
                    if (t) {
                        var n = t._observer;
                        n && t._settings.auto_unobserve && n.unobserve(e);
                    }
                })(e, n),
                p(t, n);
        }
        function _(e) {
            var t = u(e);
            t && (clearTimeout(t), c(e, null));
        }
        function $(e) {
            return e.use_native && "loading" in HTMLImageElement.prototype;
        }
        function A(r) {
            var e;
            z &&
                !$(r._settings) &&
                (r._observer = new IntersectionObserver(
                    function (e) {
                        e.forEach(function (e) {
                            return (s = e).isIntersecting || 0 < s.intersectionRatio
                                ? (function (e, t, n) {
                                      var i,
                                          o,
                                          s,
                                          r,
                                          a,
                                          l = n._settings;
                                      v(l.callback_enter, e, t, n),
                                          l.load_delay
                                              ? ((i = e),
                                                (s = n),
                                                (r = (o = l).load_delay),
                                                (a = u(i)) ||
                                                    ((a = setTimeout(function () {
                                                        S(i, o, s), _(i);
                                                    }, r)),
                                                    c(i, a)))
                                              : S(e, l, n);
                                  })(e.target, e, r)
                                : ((t = e.target), (n = e), (o = (i = r)._settings), v(o.callback_exit, t, n, i), void (o.load_delay && _(t)));
                        });
                    },
                    { root: (e = r._settings).container === document ? null : e.container, rootMargin: e.thresholds || e.threshold + "px" }
                ));
        }
        function E(e) {
            return Array.prototype.slice.call(e);
        }
        function j(e) {
            return e.container.querySelectorAll(e.elements_selector);
        }
        function N(e) {
            return !(null !== m(e, "ll-status")) || "observed" === m(e, "ll-status");
        }
        function L(e) {
            return "error" === m(e, "ll-status");
        }
        function D(e, t) {
            return (n = e || j(t)), E(n).filter(N);
        }
        function e(e, t) {
            var n;
            (this._settings = i(e)),
                (this.loadingCount = 0),
                A(this),
                (n = this),
                H &&
                    window.addEventListener("online", function (e) {
                        !(function (e) {
                            var t,
                                n = e._settings;
                            ((t = j(n)), E(t).filter(L)).forEach(function (e) {
                                r(e, n.class_error), s(e, "ll-status", null);
                            }),
                                e.update();
                        })(n);
                    }),
                this.update(t);
        }
        var H = "undefined" != typeof window,
            O = (H && !("onscroll" in window)) || ("undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            z = H && "IntersectionObserver" in window,
            q = H && "classList" in document.createElement("p"),
            P = H && 1 < window.devicePixelRatio,
            M = {
                elements_selector: "img",
                container: O || H ? document : null,
                threshold: 300,
                thresholds: null,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                data_bg: "bg",
                data_bg_hidpi: "bg-hidpi",
                data_bg_multi: "bg-multi",
                data_bg_multi_hidpi: "bg-multi-hidpi",
                data_poster: "poster",
                class_applied: "applied",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                load_delay: 0,
                auto_unobserve: !0,
                callback_enter: null,
                callback_exit: null,
                callback_applied: null,
                callback_loading: null,
                callback_loaded: null,
                callback_error: null,
                callback_finish: null,
                use_native: !1,
            },
            I = {
                IMG: function (e, t) {
                    var n = e.parentNode;
                    n &&
                        "PICTURE" === n.tagName &&
                        a(n).forEach(function (e) {
                            l(e, t);
                        }),
                        l(e, t);
                },
                IFRAME: function (e, t) {
                    n(e, "src", m(e, t.data_src));
                },
                VIDEO: function (e, t) {
                    a(e).forEach(function (e) {
                        n(e, "src", m(e, t.data_src));
                    }),
                        n(e, "poster", m(e, t.data_poster)),
                        n(e, "src", m(e, t.data_src)),
                        e.load();
                },
            },
            F = ["IMG", "IFRAME", "VIDEO"],
            B = ["IMG", "IFRAME"];
        return (
            (e.prototype = {
                update: function (e) {
                    var t = this._settings,
                        n = D(e, t);
                    (this.toLoadCount = n.length),
                        !O && z
                            ? $(t)
                                ? (function (e, o, s) {
                                      e.forEach(function (e) {
                                          var t, n, i;
                                          -1 !== B.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), C((t = e), (n = o), (i = s)), d(t, n, i), T(0, i), g(t, "native"), p(n, i));
                                      }),
                                          (s.toLoadCount = 0);
                                  })(n, t, this)
                                : (function (e, t) {
                                      var n;
                                      e.disconnect(),
                                          (n = e),
                                          t.forEach(function (e) {
                                              n.observe(e), g(e, "observed");
                                          });
                                  })(this._observer, n)
                            : this.loadAll(n);
                },
                destroy: function () {
                    this._observer && this._observer.disconnect(), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount;
                },
                loadAll: function (e) {
                    var t = this,
                        n = this._settings;
                    D(e, n).forEach(function (e) {
                        S(e, n, t);
                    });
                },
                load: function (e) {
                    S(e, this._settings, this);
                },
            }),
            (e.load = function (e, t) {
                var n = i(t);
                S(e, n);
            }),
            H &&
                (function (e, t) {
                    if (t)
                        if (t.length) for (var n, i = 0; (n = t[i]); i += 1) o(e, n);
                        else o(e, t);
                })(e, window.lazyLoadOptions),
            e
        );
    }),
    (function (h) {
        "use strict";
        var u = jQuery(window).width(),
            d = jQuery(window).height(),
            p = 1024;
        function f(e) {
            return new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(e);
        }
        function m(t) {
            h.ajax({
                type: "get",
                cache: !1,
                url: urlCaptcha,
                cache: !1,
                dataType: "json",
                success: function (e) {
                    "register" == t
                        ? (h(".login-modal img").attr("src", e.imgCaptcha), h(".login-modal #captcha-register").val(e.idCaptcha))
                        : "forgot" == t && (h(".forget-password-section img").attr("src", e.imgCaptcha), h(".forget-password-section #captcha-forgot").val(e.idCaptcha));
                },
            });
        }
        function g(e, t, n) {
            var i = new Date();
            i.setTime(i.getTime() + parseFloat(36e5 * n));
            var o = "expires=" + i.toUTCString();
            document.cookie = e + "=" + t + ";" + o + ";path=/";
        }
        (jQuery.fn.scrollTo = function (e, t) {
            return h(this).animate({ scrollTop: h(this).scrollTop() - h(this).offset().top + h(e).offset().top }, null == t ? 500 : t), this;
        }),
            (jQuery.fn.isInViewport = function () {
                var e = h(this).offset().top;
                h(this).outerHeight();
                return e < h(window).scrollTop() + h(window).height();
            }),
            h(document).ready(function () {
                jQuery(window)
                    .resize(function () {
                        (u = jQuery(window).width()), (d = jQuery(window).height());
                    })
                    .resize(),
                    h(this).on("click", ".top-bar .notify", function () {
                        if (h(this).hasClass("open")) h(this).removeClass("open");
                        else if ((h(".top-bar .notify").removeClass("open"), h(".top-bar .btn-search").removeClass("action"), h(this).addClass("open"), "notification" == h(this).data("id") && "" != h("#id_notification").val())) {
                            // var t = this;
                            // h.ajax({
                            //     type: "POST",
                            //     cache: !1,
                            //     url: urlNotification,
                            //     cache: !1,
                            //     data: { id: h("#id_notification").val() },
                            //     success: function (e) {
                            //         h(t).removeClass("unread"), h("#id_notification").val("");
                            //     },
                            // });
                        }
                    }),
                    h(document).on("click", "body", function (e) {
                        var t = h(".top-bar .notify");
                        t.is(e.target) || 0 !== t.has(e.target).length || t.removeClass("open");
                    }),
                    h(document).on("click", ".navbar-burger", function () {
                        h(".navbar-burger").toggleClass("is-active"), h(".navbar-menu").toggleClass("is-active");
                    }),
                    document.addEventListener("keydown", function (e) {
                        "Escape" === (e || window.event).code && (h(".modal").removeClass("is-active"), h(".tabs-contents > div").removeClass("is-active"));
                    }),
                    h(document).on("click", ".modal-background", function () {
                        h(this).parent().hasClass("is-active") && (h(this).parent().removeClass("is-active"), h(".tabs-contents > div").removeClass("is-active"));
                    }),
                    h(document).on("click", ".top-buttons .login-btn", function () {
                        return (
                            h(".tabs-buttons button").removeClass("is-active"),
                            h(".tabs-contents > div").removeClass("is-active"),
                            h(".login-modal").addClass("is-active"),
                            h(".login-section").addClass("is-active"),
                            h('.tabs-buttons button[data-type="login"]').addClass("is-active"),
                            !1
                        );
                    }),
                    h(document).on("click", ".login-modal-open", function () {
                        return (
                            h(".tabs-buttons button").removeClass("is-active"),
                            h(".tabs-contents > div").removeClass("is-active"),
                            h(".login-modal").addClass("is-active"),
                            h(".login-section").addClass("is-active"),
                            h('.tabs-buttons button[data-type="login"]').addClass("is-active"),
                            !1
                        );
                    }),
                    h(document).on("click", ".top-buttons .register-btn", function () {
                        return (
                            h(".tabs-buttons button").removeClass("is-active"),
                            h(".tabs-contents > div").removeClass("is-active"),
                            h(".login-modal").addClass("is-active"),
                            h(".register-section").addClass("is-active"),
                            h('.tabs-buttons button[data-type="register"]').addClass("is-active"),
                            m("register"),
                            !1
                        );
                    }),
                    h(document).on("click", ".back-to-login", function () {
                        return (
                            h(".notify-modal").removeClass("is-active"),
                            h(".tabs-buttons button").removeClass("is-active"),
                            h(".tabs-contents > div").removeClass("is-active"),
                            h(".login-modal").addClass("is-active"),
                            h(".login-section").addClass("is-active"),
                            h('.tabs-buttons button[data-type="login"]').addClass("is-active"),
                            !1
                        );
                    }),
                    h(document).on("click", ".download-app-link", function () {
                        return h(".qr-modal").addClass("is-active"), !1;
                    }),
                    h(document).on("click", ".close-button", function () {
                        return h(".qr-modal").removeClass("is-active"), !1;
                    }),
                    h(document).on("click", ".download-app-bottom", function () {
                        return h(".qr-modal").addClass("is-active"), !1;
                    }),
                    h(document).on("click", ".forget-password-link", function () {
                        return h(".forget-password-section").removeClass("hidden"), h(".sent-password-section").addClass("hidden"), h(".login-modal").removeClass("is-active"), h(".notify-modal").addClass("is-active"), m("forgot"), !1;
                    }),
                    h(document).on("click", ".tabs-buttons button", function () {
                        var e = h(this).data("type");
                        return (
                            h(".tabs-buttons button").removeClass("is-active"),
                            h(".tabs-contents > div").removeClass("is-active"),
                            h(this).addClass("is-active"),
                            h(".tabs-contents ." + e + "-section").addClass("is-active"),
                            "register" == e && m("register"),
                            !1
                        );
                    }),
                    h(".hero-item.has-excerpt")
                        .on("mouseenter", function () {
                            h(this).addClass("open");
                        })
                        .on("mouseleave", function () {
                            h(this).removeClass("open");
                        }),
                    p < u &&
                        (h(".story-item")
                            .on("mouseenter", function () {
                                var e = h(this).find(".more-info");
                                h(window).width() - (e.offset().left + e.outerWidth()) < 0 && h(this).addClass("show-left"), h(this).addClass("open");
                            })
                            .on("mouseleave", function () {
                                h(this).hasClass("show-left") &&
                                    setTimeout(function () {
                                        h(this).removeClass("show-left");
                                    }, 50),
                                    h(this).removeClass("open");
                            }),
                        h(this).on("click", ".more-info .favorite", function () {
                            var e = h(this).find("i");
                            return e.hasClass("far") ? (e.removeClass("far"), e.addClass("fas")) : (e.removeClass("fas"), e.addClass("far")), !1;
                        }));
                var e = jQuery(".messages"),
                    t = d - jQuery(".top-bar").height() - jQuery(".main-menu").height() - jQuery(".footer").height() - 55;
                e.height() < t && e.height(t),
                    0 < h(".check-all").length &&
                        h(".check-all").on("change", function () {
                            var e = h(this).parents("table").find('tbody input[type="checkbox"]');
                            this.checked ? e.prop("checked", !0) : e.prop("checked", !1);
                        }),
                    h('.form-coll input[type="radio"]').click(function () {
                        "coll-01" == h(this).attr("id") ? h(".coll-group-01").show(500) : h(".coll-group-01").hide(500), "coll-02" == h(this).attr("id") ? h(".coll-group-02").show(500) : h(".coll-group-02").hide(500);
                    }),
                    h(".mab-jquery-taginput").css("display", "none"),
                    h(".input-2").css("display", "block"),
                    h('.form-group input[type="radio"]').click(function () {
                        "group01" == h(this).attr("id") ? (h(".mab-jquery-taginput").css("display", "none"), h(".input-2").css("display", "block")) : (h(".input-2").css("display", "none"), h(".mab-jquery-taginput").css("display", "block"));
                    }),
                    h(".story-list-bl02 ul li a").click(function (e) {
                        e.preventDefault(), h(".story-list-bl02 ul li a").not(this).addClass("none").removeClass("down"), h(this).removeClass("none").toggleClass("down");
                    }),
                    new Bloodhound({
                        datumTokenizer: function (e) {
                            return Bloodhound.tokenizers.whitespace(e.tag);
                        },
                        queryTokenizer: Bloodhound.tokenizers.whitespace,
                    }).initialize();
                if (
                    (h('#results a[rel="external"]').attr("target", "_blank"),
                    0 < jQuery(".scrollTop").length &&
                        jQuery(window).on("scroll", function (e) {
                            500 < jQuery(window).scrollTop() ? h(".scrollTop").css("display", "block") : h(".scrollTop").css("display", "none");
                        }),
                    h(".light-see").click(function (e) {
                        e.preventDefault(),
                            h(".top-bar, .main-content, .story-see-footer, .nav, .button-nav, .story-see-blur, .outsite").toggleClass("on"),
                            p < u &&
                                (h(".outsite").hasClass("on") ? (h(this).html('<i class="fas fa-lightbulb"></i> Bật đèn'), g("light-see", 1, 2628e3)) : (h(this).html('<i class="far fa-lightbulb"></i> Tắt đèn'), g("light-see", 0, 2628e3)));
                    }),
                    h(".scrollTop").click(function () {
                        return h("html, body").animate({ scrollTop: 0 }, 600), !1;
                    }),
                    h("#faul").click(function (e) {
                        e.preventDefault(), h(".story-see-blur").addClass("blur"), h(".background").css("display", "block").height(h("body").height());
                    }),
                    h(".story-faul .close").click(function (e) {
                        e.preventDefault(), h(".story-see-blur").removeClass("blur"), h(".background").css("display", "none");
                    }),
                    u <= p)
                ) {
                    h(this).on("click", "body", function (e) {
                        var t = h(".top-bar .user");
                        t.is(e.target) || 0 !== t.has(e.target).length || t.removeClass("open");
                    });
                    var n = h(".navbar-menu");
                    n.height(d - jQuery(".top-bar").height()),
                        h(".head_menu").click(function (e) {
                            e.preventDefault(),
                                (h(".navbar-menu").is(":visible") && "menu" != h(".navbar-menu").data("icon")) || (h(this).toggleClass("open"), h(".navbar-menu").data("icon", "menu")),
                                n.slideToggle(400).toggleClass("expanded"),
                                h(".top-bar .notify").removeClass("open"),
                                h(".btn-search").toggleClass("action"),
                                h(".top-bar .user").removeClass("open"),
                                i();
                        }),
                        h(".btn-search").click(function (e) {
                            (h(".navbar-menu").is(":visible") && "search" != h(".navbar-menu").data("icon")) || (h(this).toggleClass("open"), h(".navbar-menu").data("icon", "search")),
                                n.slideToggle(400).toggleClass("expanded"),
                                h(".top-bar .notify").removeClass("open"),
                                h(".btn-search").toggleClass("action"),
                                h(".top-bar .user").removeClass("open"),
                                i(),
                                h(".smp .text-search").focus();
                        }),
                        h(".navbar-link").click(function (e) {
                            e.preventDefault(), h(this).toggleClass("expanded"), h(this).parent().find(".navbar-dropdown").slideToggle(300).toggleClass("expanded"), i();
                        }),
                        h(".top-buttons .notify").click(function () {
                            0 == h(this).hasClass("btn-search") &&
                                (h(".head_menu").removeClass("open"),
                                h(".navbar-menu").slideUp(400).removeClass("expanded"),
                                h(".top-bar .notify").removeClass("open"),
                                h(".top-bar .btn-search").removeClass("action"),
                                h(this).addClass("active"));
                        }),
                        h(".hero .is-ancestor .is-child").unwrap(),
                        h(".hero .tile.is-ancestor").slick({ autoplay: !0, infinite: !0, autoplaySpeed: 2e3, arrows: !1 }),
                        h(".story-see .nav .story-main-list").slick({ autoplay: !0, infinite: !0, autoplaySpeed: 1e3, slidesToShow: 2, slidesToScroll: 2, arrows: !1 });
                }
                function i() {
                    if (u <= p) {
                        var e = d - jQuery(".top-bar").height();
                        n.css("height", e);
                    }
                }
                var s = null;
                h(".text-search").bind("keyup", function (e) {
                    var t = h(this),
                        n = h(this).val(),
                        i = e.keyCode;
                    if (38 != i && 40 != i && 37 != i && 39 != i && 13 != i)
                        0 < n.trim().length
                            ? (clearTimeout(s),
                              (s = setTimeout(function () {
                                  h.ajax({ type: "POST", url: urlSearch, data: { search: n, type: 0 } }).done(function (e) {
                                      h(".list-results").addClass("open"), h(".list-results").html(e);
                                  });
                              }, 500)))
                            : h(".list-results").removeClass("open");
                    else if (0 < n.trim().length && 1 == t.is(":focus") && 13 == i && 0 == h(".list-results .active").length) {
                        var o = h(t).val();
                        window.location.href = document.location.origin + "/tim-kiem.html?q=" + o;
                    }
                }),
                    h(".text-search").click(function () {
                        var e = h(this).val();
                        "" != h(this).val() && 0 == h(".list-results").hasClass("open")
                            ? h.ajax({ type: "POST", url: urlSearch, data: { search: e, type: 0 } }).done(function (e) {
                                  h(".list-results").addClass("open"), h(".list-results").html(e);
                              })
                            : "" != h(".list-container").html().trim()
                            ? h(".list-results").addClass("open")
                            : h.ajax({ type: "POST", url: urlSearch, data: { search: h("#keyword-default").val(), type: 1 } }).done(function (e) {
                                  h(".list-results").addClass("open"), h(".list-results").html(e);
                              });
                    }),
                    h("body").click(function (e) {
                        h(e.target).closest(".list-results").length || h(e.target).closest(".text-search").length || h(".list-results").removeClass("open");
                    }),
                    h(document).on("click", ".subscribeBook", function () {
                        var t = h(this),
                            e = t.data("id"),
                            n = t.data("page");
                        h.ajax({
                            url: urlSubcribe,
                            type: "POST",
                            data: { id: e },
                            success: function (e) {
                                "" != e &&
                                    ("index" == n
                                        ? 0 == e
                                            ? t.html('<span class="fa fa-heart"></span>Theo dõi')
                                            : t.html('<span class="far fa-heart"></span>Huỷ theo dõi')
                                        : 0 == e
                                        ? t.html('<i class="far fa-heart"></i><span class="control-see"> Theo dõi</span>')
                                        : t.html('<i class="fa fa-heart"></i><span class="control-see"> Huỷ theo dõi</span>'));
                            },
                        });
                    });
                var o = 0;
                h(document).on("click", ".btn-like", function () {
                    var e = h(this).data("id");
                    0 == o &&
                        ((o = 1),
                        h.ajax({
                            url: urlLike,
                            type: "POST",
                            data: { id: e },
                            success: function (e) {
                                1 == (e = h.parseJSON(e)).success ? h(".number-like").text(parseInt(h(".number-like").text()) + 1) : alert(e.error), (o = 0);
                            },
                        }));
                }),
                    h(".content-comment").readmore({
                        maxHeight: 105,
                        speed: 100,
                        moreLink: '<p class="readmore"><a href="#">Xem Thêm</a></p>',
                        lessLink: '<p class="readmore"><a href="#">Rút Gọn</a></p>',
                        embedCSS: !0,
                        sectionCSS: "display: block; width: 100%;",
                        startOpen: !1,
                        expandedClass: "readmore-js-expanded",
                        collapsedClass: "readmore-js-collapsed",
                    }),
                    h(".story-detail-info").readmore({
                        maxHeight: 60,
                        speed: 100,
                        moreLink: '<p class="readmore"><a href="#">Xem Thêm</a></p>',
                        lessLink: '<p class="readmore"><a href="#">Rút Gọn</a></p>',
                        embedCSS: !0,
                        sectionCSS: "display: block; width: 100%;",
                        startOpen: !1,
                        expandedClass: "readmore-js-expanded",
                        collapsedClass: "readmore-js-collapsed",
                    }),
                    h(document).on("click", ".comments-container textarea", function (e) {
                        h("#id_textarea").val(h(this).prop("id"));
                    }),
                    h(document).on("click", ".comments-container .click_emoji", function (e) {
                        h.ajax({ method: "POST", url: urlCommentEmoji }).done(function (e) {
                            h("#list_emoji .modal-body").html(e);
                        }),
                            h("#list_emoji").addClass("is-active");
                        var t = h(this).parent().parent().parent().find("textarea").prop("id");
                        return h("#id_textarea").val(t), !1;
                    }),
                    h(document).on("click", ".btn-mua", function (e) {
                        // alert('oke');
                        h.ajax({
                            url: urlBuy,
                            type: "POST",
                            data: { userID: userID, chapterID: h(this).data("id"), },
                            success: function (e) {
                                alert('Mua thanh cong!');
                            },
                            error: function(xhr, status, error) {
                                var err = eval("(" + xhr.responseText + ")");
                                alert(err);
                            },
                        });
                            h("#list_emoji").addClass("is-active");

                        return h("#id_textarea").val(t), !1;
                    }),
                    h(".box").on("click", ".btn-buy", function (e) {
                        if(isLogin){
                            return h("#list_emoji").addClass("is-active");
                        }else{
                            return alert('ban chua dang nhap');
                        }
                    }),
                    h(document).on("click", ".close-emoji", function (e) {
                        return h("#list_emoji").removeClass("is-active"), !1;
                    }),
                    h(document).on("click", ".action-comment .reply-comment", function (e) {
                        var t = h(this).data("id"),
                            n = h(this).data("parent");
                        if ((0 == n && (n = t), 0 == h(".comments-container").find(".reply_" + t).length)) {
                            // document.getElementById("form_comment").scrollIntoView();
                            location.href = "#form_comment";
                            // var
                            //     s = h(h(".main_comment").clone()).insertAfter(h(this).parent().parent().parent().parent());
                            // s.removeClass("main_comment"),
                            //     s.addClass("reply_comment"),
                            //     s
                            //         .find("textarea")
                            //         .attr("id", "content_comment_" + t)
                            //         .val("")
                            //         .focus(),
                            //     s.addClass("reply_" + t);
                        }
                    }),
                    h(document).on("click", ".list-comment .remove_comnent", function (e) {
                        var t = h(this).data("id"),
                            n = h("#book_id").val(),
                            i = confirm("Bạn có chắc muốn xoá comment này không?"),
                            o = h(this);
                        "" == n && (n = h(this).data("bookid")),
                            1 == i &&
                                h.ajax({ method: "POST", url: urlCommentRemove, data: { id: t, book_id: n } }).done(function (e) {
                                    o.parent().parent().parent().parent().remove(), h(".list-comment .parent_" + t).remove();
                                });
                    }),
                    h(document).on("click", ".comment-head .bannick_comnent", function (e) {
                        var t = h(this).data("id"),
                            n = confirm("Bạn có chắc muốn xoá Cấm Bình Luận thành viên này không?");
                        h(this);
                        1 == n && h.ajax({ method: "POST", url: urlCommentBannick, data: { id: t } }).done(function (e) {});
                    });

                if (
                    (h(document).on("click", ".load_more_comment", function (e) {
                        var t = h("#book_id").val(),
                            n = h("#total_page").val(),
                            i = h("#current_page").val(),
                            o = parseFloat(i) + 1;
                        parseFloat(i) <= parseFloat(n) &&
                            (1,
                            h(".load_more_comment a").text("Đang tải thêm bình luận...."),
                            h.ajax({ method: "POST", url: urlCommentLoad, data: { book_id: t, page: o } }).done(function (e) {
                                h(".list-comment").append(e),
                                    0,
                                    o < n ? h("#current_page").val(o) : h(".load_more_comment").hide(),
                                    h(".load_more_comment a").text("Tải Thêm Bình Luận"),
                                    h(".content-comment").readmore({
                                        maxHeight: 105,
                                        speed: 100,
                                        moreLink: '<p class="readmore"><a href="#">Xem Thêm</a></p>',
                                        lessLink: '<p class="readmore"><a href="#">Rút Gọn</a></p>',
                                        embedCSS: !0,
                                        sectionCSS: "display: block; width: 100%;",
                                        startOpen: !1,
                                        expandedClass: "readmore-js-expanded",
                                        collapsedClass: "readmore-js-collapsed",
                                    });
                            }));
                    }),
                    h(document).on("click", "#list_emoji .modal-body ul li a", function (e) {
                        h("#list_emoji .modal-body ul li").removeClass("active"),
                            h(this).parent().addClass("active"),
                            h(".tab-content div").removeClass("active"),
                            h(".tab-content #" + h(this).data("id")).addClass("active"),
                            h(".tab-content div").removeClass("in"),
                            h(".tab-content #" + h(this).data("id")).addClass("in");
                    }),
                    h(document).on("change", ".selectEpisode", function () {
                        window.location.href = h(this).val();
                    }),
                    "#_=_" == window.location.hash)
                )
                    if (history.replaceState) {
                        var r = window.location.href.split("#")[0];
                        history.replaceState(null, null, r);
                    } else window.location.hash = "";
                h(this).keyup(function (e) {
                    var t = e.keyCode;
                    if (38 === t || 40 === t) {
                        var n = h(".top-search .list-results .result-item"),
                            i = n.length;
                        if (0 === i) return;
                        var o = h(".top-search .list-results .active"),
                            s = null,
                            r = h(".top-search .list-results .result-item:first-child"),
                            a = h(".top-search .list-results .result-item:last-child");
                        if (0 === o.length) 38 === t ? (s = a) : 40 === t && (s = r);
                        else {
                            var l = o.index(n);
                            38 === t ? (s = 0 === l ? a : o.prev()) : 40 === t && (s = i - 1 <= l ? r : o.next());
                        }
                        null !== s && (n.removeClass("active"), s.addClass("active"), h(".top-search .list-container").scrollTo(".top-search .list-results .active"));
                    } else if (13 === t) {
                        if (h(".result-item").is(":visible")) e.preventDefault(), 1 === (o = h(".top-search .list-results .active a")).length && (window.location.href = o.attr("href"));
                    }
                }),
                    h("#typeError").on("change", function () {
                        "-1" != h("#typeError").val() ? h("#contentError").parent().parent().addClass("hidden") : h("#contentError").parent().parent().removeClass("hidden");
                    }),
                    h(document).on("click", "#report_error #submit_error", function (e) {
                        var t = h("#contentError").val(),
                            n = h("#typeError").val(),
                            i = h("#captcha").val(),
                            o = h("#order").val(),
                            s = h("#book_id").val(),
                            r = h("#idcaptcha").val(),
                            a = h("#episode_id").val(),
                            l = "";
                        0 == n && (l += "Vui Lòng Chọn Loại Báo Lỗi.\n"),
                            "-1" == n && "" == t.trim() && (l += "Vui Lòng Nhập Nội Dung Báo Lỗi.\n"),
                            "" == i.trim() && (l += "Vui Lòng Nhập Mã Xác Nhận.\n"),
                            "" != l
                                ? alert(l)
                                : h.ajax({
                                      type: "POST",
                                      cache: !1,
                                      url: urlError,
                                      data: { episode_id: a, contentError: t, book_id: s, typeError: n, order: o, captcha: i, idcaptcha: r },
                                      success: function (e) {
                                          if (0 == (e = h.parseJSON(e)).status) for (var t in e.error) l += e.error[t] + "\n";
                                          else h(".story-see-blur").removeClass("blur"), h(".background").css("display", "none"), alert("Báo lỗi thành công. Cảm ơn bạn.");
                                      },
                                  });
                    }),
                    h(".refresh-captcha").click(function (e) {
                        m(h(this).data("type"));
                    }),
                    h("#button_register").click(function (i) {
                        var e = "";
                        "" == h("#email_register").val().trim() ? (e += "Email không được để trống.\n") : 0 == f(h("#email_register").val().trim()) && (e += "Định dạng email không chính xác.\n"),
                            "" == h("#password_register").val().trim() ? (e += "Mật khẩu không được để trống.\n") : h("#password_register").val().trim().length <= 6 && (e += "Mật khẩu phải lớn hơn 6 ký tự.\n"),
                            "" == h("#captcha_register").val().trim() && (e += "Mã xác nhận không được để trống.\n"),
                            "" != e
                                ? alert(e)
                                : h.ajax({
                                      type: "POST",
                                      cache: !1,
                                      url: urlRegister,
                                      dataType: "json",
                                      data: { email: h("#email_register").val(), password: h("#password_register").val(), captcha: h("#captcha_register").val(), id_captcha: h("#captcha-register").val(), expire: 1 },
                                      success: function (e) {
                                          if ("0" == e.status) {
                                              var t = "";
                                              for (var n in e.error) t += e.error[n] + "\n";
                                              alert(t), i.preventDefault();
                                          } else location.reload(!0);
                                      },
                                  });
                    }),
                    h("#button-forgot").click(function (e) {
                        var t = "";
                        "" == h("#email-forgot").val().trim() ? (t += "Email không được để trống.\n") : 0 == f(h("#email-forgot").val().trim()) && (t += "Định dạng email không chính xác.\n"),
                            "" == h("#captcha_forgot").val().trim() && (t += "Mã xác nhận không được để trống.\n"),
                            "" != t
                                ? alert(t)
                                : (e.preventDefault(),
                                  h.ajax({
                                      type: "POST",
                                      cache: !1,
                                      url: urlForgot,
                                      dataType: "json",
                                      data: { email: h("#email-forgot").val(), captcha: h("#captcha_forgot").val(), id_captcha: h("#captcha-forgot").val() },
                                      success: function (e) {
                                          if ("0" == e.status) {
                                              var t = "";
                                              for (var n in e.error) t += e.error[n] + "\n";
                                              alert(t);
                                          } else h(".forget-password-section").addClass("hidden"), h(".sent-password-section").removeClass("hidden");
                                      },
                                  }));
                    }),
                    h(".story-list #category").change(function () {
                        window.location.href = h(this).val();
                    }),
                    h(".story-list #category-sort").change(function () {
                        window.location.href = h(this).val();
                    }),
                    h(".btn_search").click(function () {
                        var e = h(this).parent().find(".text-search").val();
                        "" != e && (window.location.href = document.location.origin + "/tim-kiem.html?q=" + e);
                    }),
                    h(".remove-subscribe").click(function () {
                        var e = h(this).data("id");
                        h.ajax({
                            url: linkRemoveSubscribe,
                            type: "POST",
                            data: { id: e },
                            success: function (e) {
                                location.reload(!0);
                            },
                        });
                    }),
                    h(".submit-message").click(function () {
                        var e = "";
                        if (("" == h("#content-message").val().trim() && (e += "Nội dung tin nhắn không được để trống.\n"), "" != e)) alert(e);
                        else {
                            var t = h(this).data("id"),
                                n = h(this).data("receiver"),
                                i = h(this).data("type"),
                                o = h(this).data("token");
                            h.ajax({
                                url: linkMessage,
                                type: "POST",
                                data: { token: o, parent_id: t, receive_id: n, type: i, content: h("#content-message").val().trim() },
                                success: function (e) {
                                    location.reload(!0);
                                },
                            });
                        }
                    });
                var a = 0;
                h(document).on("click", ".like-comment", function () {
                    var t = h(this),
                        e = t.data("id");
                    0 == a &&
                        ((a = 1),
                        h.ajax({
                            url: urlLikeComment,
                            type: "POST",
                            data: { id: e },
                            success: function (e) {
                                1 == (e = h.parseJSON(e)).success ? t.find(".total-like-comment").text(parseInt(t.find(".total-like-comment").text()) + 1) : alert(e.error), (a = 0);
                            },
                        }));
                }),
                    h(document).on("click", ".ads_close_mobile", function () {
                        h("#ads_mobile").remove(), g("mobile_banner", "1", 1);
                    }),
                    h(document).on("click", ".ads_close", function () {
                        h("#left-banner").remove(), g("left_banner", "1", 1);
                    }),
                    h(document).on("click touchstart", ".button_login", function (i) {
                        var e = "";
                        "" == h("#email_login").val().trim() ? (e += "Email không được để trống.\n") : 0 == f(h("#email_login").val().trim()) && (e += "Định dạng email không chính xác.\n"),
                            "" == h("#password_login").val().trim() ? (e += "Mật khẩu không được để trống.\n") : h("#password_login").val().trim().length <= 6 && (e += "Mật khẩu phải lớn hơn 6 ký tự.\n"),
                            "" != e
                                ? alert(e)
                                : h.ajax({
                                      type: "POST",
                                      cache: !1,
                                      url: urlLogin,
                                      dataType: "json",
                                      data: { email: h("#email_login").val(), password: h("#password_login").val(), expire: 1 },
                                      success: function (e) {
                                          if ("0" == e.status) {
                                              var t = "";
                                              for (var n in e.error) t += e.error[n] + "\n";
                                              alert(t), i.preventDefault();
                                          } else location.reload(!0);
                                      },
                                  });
                    }),
                    h(document).on("click", ".popup_close, .image_close", function (e) {
                        h("#image_popup").popup("hide"), g("preload_banner", 1, 2);
                    }),
                    h(document).on("click", ".popup_close_mobile, .image_close_mobile", function (e) {
                        h("#image_popup_mobile").popup("hide"), g("preload_banner_mobile", 1, 2);
                    });
                var l = h(".story-see-footer");
                if (0 < l.length) {
                    var c = 0;
                    h(window).on("resize scroll", function () {
                        var e = h(".show-footer").isInViewport(),
                            t = h(this).scrollTop();
                        t < c || 1 == e ? (l.show(), h(".scrollTop").css("bottom", "60px")) : 0 == e && (l.hide(), h(".scrollTop").css("bottom", "20px")), (c = t);
                    });
                }
                0 < h("#image_popup").length &&
                    h("#image_popup").popup({
                        opacity: 0.7,
                        type: "overlay",
                        autoopen: !0,
                        outline: !0,
                        blur: !0,
                        closetransitionend: function () {
                            g("preload_banner", 1, 2);
                        },
                    }),
                    0 < h("#image_popup_mobile").length &&
                        h("#image_popup_mobile").popup({
                            opacity: 0.7,
                            type: "overlay",
                            autoopen: !0,
                            outline: !0,
                            blur: !0,
                            closetransitionend: function () {
                                g("preload_banner_mobile", 1, 2);
                            },
                        });
            });
    })(window.jQuery);
