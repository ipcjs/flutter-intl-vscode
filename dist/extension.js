module.exports = function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    return n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(r, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 49)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Type = t.Char = void 0;
    t.Char = {
        ANCHOR: "&",
        COMMENT: "#",
        TAG: "!",
        DIRECTIVES_END: "-",
        DOCUMENT_END: "."
    };
    t.Type = {
        ALIAS: "ALIAS",
        BLANK_LINE: "BLANK_LINE",
        BLOCK_FOLDED: "BLOCK_FOLDED",
        BLOCK_LITERAL: "BLOCK_LITERAL",
        COMMENT: "COMMENT",
        DIRECTIVE: "DIRECTIVE",
        DOCUMENT: "DOCUMENT",
        FLOW_MAP: "FLOW_MAP",
        FLOW_SEQ: "FLOW_SEQ",
        MAP: "MAP",
        MAP_KEY: "MAP_KEY",
        MAP_VALUE: "MAP_VALUE",
        PLAIN: "PLAIN",
        QUOTE_DOUBLE: "QUOTE_DOUBLE",
        QUOTE_SINGLE: "QUOTE_SINGLE",
        SEQ: "SEQ",
        SEQ_ITEM: "SEQ_ITEM"
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.YAMLWarning = t.YAMLSyntaxError = t.YAMLSemanticError = t.YAMLReferenceError = t.YAMLError = void 0;
    var r = o(n(4))
      , i = n(51)
      , s = o(n(2));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class a extends Error {
        constructor(e, t, n) {
            if (!(n && t instanceof r.default))
                throw new Error("Invalid arguments for new " + e);
            super(),
            this.name = e,
            this.message = n,
            this.source = t
        }
        makePretty() {
            if (!this.source)
                return;
            this.nodeType = this.source.type;
            const e = this.source.context && this.source.context.root;
            if ("number" == typeof this.offset) {
                this.range = new s.default(this.offset,this.offset + 1);
                const t = e && (0,
                i.getLinePos)(this.offset, e);
                if (t) {
                    const e = {
                        line: t.line,
                        col: t.col + 1
                    };
                    this.linePos = {
                        start: t,
                        end: e
                    }
                }
                delete this.offset
            } else
                this.range = this.source.range,
                this.linePos = this.source.rangeAsLinePos;
            if (this.linePos) {
                const {line: t, col: n} = this.linePos.start;
                this.message += ` at line ${t}, column ${n}`;
                const r = e && (0,
                i.getPrettyContext)(this.linePos, e);
                r && (this.message += `:\n\n${r}\n`)
            }
            delete this.source
        }
    }
    t.YAMLError = a;
    t.YAMLReferenceError = class extends a {
        constructor(e, t) {
            super("YAMLReferenceError", e, t)
        }
    }
    ;
    t.YAMLSemanticError = class extends a {
        constructor(e, t) {
            super("YAMLSemanticError", e, t)
        }
    }
    ;
    t.YAMLSyntaxError = class extends a {
        constructor(e, t) {
            super("YAMLSyntaxError", e, t)
        }
    }
    ;
    t.YAMLWarning = class extends a {
        constructor(e, t) {
            super("YAMLWarning", e, t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    class r {
        static copy(e) {
            return new r(e.start,e.end)
        }
        constructor(e, t) {
            this.start = e,
            this.end = t || e
        }
        isEmpty() {
            return "number" != typeof this.start || !this.end || this.end <= this.start
        }
        setOrigRange(e, t) {
            const {start: n, end: r} = this;
            if (0 === e.length || r <= e[0])
                return this.origStart = n,
                this.origEnd = r,
                t;
            let i = t;
            for (; i < e.length && !(e[i] > n); )
                ++i;
            this.origStart = n + i;
            const s = i;
            for (; i < e.length && !(e[i] >= r); )
                ++i;
            return this.origEnd = r + i,
            s
        }
    }
    t.default = r
}
, function(e, t, n) {
    const r = n(29)
      , {MAX_LENGTH: i, MAX_SAFE_INTEGER: s} = n(28)
      , {re: o, t: a} = n(20)
      , l = n(30)
      , {compareIdentifiers: c} = n(42);
    class u {
        constructor(e, t) {
            if (t = l(t),
            e instanceof u) {
                if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease)
                    return e;
                e = e.version
            } else if ("string" != typeof e)
                throw new TypeError("Invalid Version: " + e);
            if (e.length > i)
                throw new TypeError(`version is longer than ${i} characters`);
            r("SemVer", e, t),
            this.options = t,
            this.loose = !!t.loose,
            this.includePrerelease = !!t.includePrerelease;
            const n = e.trim().match(t.loose ? o[a.LOOSE] : o[a.FULL]);
            if (!n)
                throw new TypeError("Invalid Version: " + e);
            if (this.raw = e,
            this.major = +n[1],
            this.minor = +n[2],
            this.patch = +n[3],
            this.major > s || this.major < 0)
                throw new TypeError("Invalid major version");
            if (this.minor > s || this.minor < 0)
                throw new TypeError("Invalid minor version");
            if (this.patch > s || this.patch < 0)
                throw new TypeError("Invalid patch version");
            n[4] ? this.prerelease = n[4].split(".").map(e=>{
                if (/^[0-9]+$/.test(e)) {
                    const t = +e;
                    if (t >= 0 && t < s)
                        return t
                }
                return e
            }
            ) : this.prerelease = [],
            this.build = n[5] ? n[5].split(".") : [],
            this.format()
        }
        format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`,
            this.prerelease.length && (this.version += "-" + this.prerelease.join(".")),
            this.version
        }
        toString() {
            return this.version
        }
        compare(e) {
            if (r("SemVer.compare", this.version, this.options, e),
            !(e instanceof u)) {
                if ("string" == typeof e && e === this.version)
                    return 0;
                e = new u(e,this.options)
            }
            return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
        }
        compareMain(e) {
            return e instanceof u || (e = new u(e,this.options)),
            c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch)
        }
        comparePre(e) {
            if (e instanceof u || (e = new u(e,this.options)),
            this.prerelease.length && !e.prerelease.length)
                return -1;
            if (!this.prerelease.length && e.prerelease.length)
                return 1;
            if (!this.prerelease.length && !e.prerelease.length)
                return 0;
            let t = 0;
            do {
                const n = this.prerelease[t]
                  , i = e.prerelease[t];
                if (r("prerelease compare", t, n, i),
                void 0 === n && void 0 === i)
                    return 0;
                if (void 0 === i)
                    return 1;
                if (void 0 === n)
                    return -1;
                if (n !== i)
                    return c(n, i)
            } while (++t)
        }
        compareBuild(e) {
            e instanceof u || (e = new u(e,this.options));
            let t = 0;
            do {
                const n = this.build[t]
                  , i = e.build[t];
                if (r("prerelease compare", t, n, i),
                void 0 === n && void 0 === i)
                    return 0;
                if (void 0 === i)
                    return 1;
                if (void 0 === n)
                    return -1;
                if (n !== i)
                    return c(n, i)
            } while (++t)
        }
        inc(e, t) {
            switch (e) {
            case "premajor":
                this.prerelease.length = 0,
                this.patch = 0,
                this.minor = 0,
                this.major++,
                this.inc("pre", t);
                break;
            case "preminor":
                this.prerelease.length = 0,
                this.patch = 0,
                this.minor++,
                this.inc("pre", t);
                break;
            case "prepatch":
                this.prerelease.length = 0,
                this.inc("patch", t),
                this.inc("pre", t);
                break;
            case "prerelease":
                0 === this.prerelease.length && this.inc("patch", t),
                this.inc("pre", t);
                break;
            case "major":
                0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++,
                this.minor = 0,
                this.patch = 0,
                this.prerelease = [];
                break;
            case "minor":
                0 === this.patch && 0 !== this.prerelease.length || this.minor++,
                this.patch = 0,
                this.prerelease = [];
                break;
            case "patch":
                0 === this.prerelease.length && this.patch++,
                this.prerelease = [];
                break;
            case "pre":
                if (0 === this.prerelease.length)
                    this.prerelease = [0];
                else {
                    let e = this.prerelease.length;
                    for (; --e >= 0; )
                        "number" == typeof this.prerelease[e] && (this.prerelease[e]++,
                        e = -2);
                    -1 === e && this.prerelease.push(0)
                }
                t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                break;
            default:
                throw new Error("invalid increment argument: " + e)
            }
            return this.format(),
            this.raw = this.version,
            this
        }
    }
    e.exports = u
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r, i = n(0), s = n(51), o = (r = n(2)) && r.__esModule ? r : {
        default: r
    };
    class a {
        static addStringTerminator(e, t, n) {
            if ("\n" === n[n.length - 1])
                return n;
            const r = a.endOfWhiteSpace(e, t);
            return r >= e.length || "\n" === e[r] ? n + "\n" : n
        }
        static atDocumentBoundary(e, t, n) {
            const r = e[t];
            if (!r)
                return !0;
            const s = e[t - 1];
            if (s && "\n" !== s)
                return !1;
            if (n) {
                if (r !== n)
                    return !1
            } else if (r !== i.Char.DIRECTIVES_END && r !== i.Char.DOCUMENT_END)
                return !1;
            const o = e[t + 1]
              , a = e[t + 2];
            if (o !== r || a !== r)
                return !1;
            const l = e[t + 3];
            return !l || "\n" === l || "\t" === l || " " === l
        }
        static endOfIdentifier(e, t) {
            let n = e[t];
            const r = "<" === n
              , i = r ? ["\n", "\t", " ", ">"] : ["\n", "\t", " ", "[", "]", "{", "}", ","];
            for (; n && -1 === i.indexOf(n); )
                n = e[t += 1];
            return r && ">" === n && (t += 1),
            t
        }
        static endOfIndent(e, t) {
            let n = e[t];
            for (; " " === n; )
                n = e[t += 1];
            return t
        }
        static endOfLine(e, t) {
            let n = e[t];
            for (; n && "\n" !== n; )
                n = e[t += 1];
            return t
        }
        static endOfWhiteSpace(e, t) {
            let n = e[t];
            for (; "\t" === n || " " === n; )
                n = e[t += 1];
            return t
        }
        static startOfLine(e, t) {
            let n = e[t - 1];
            if ("\n" === n)
                return t;
            for (; n && "\n" !== n; )
                n = e[t -= 1];
            return t + 1
        }
        static endOfBlockIndent(e, t, n) {
            const r = a.endOfIndent(e, n);
            if (r > n + t)
                return r;
            {
                const t = a.endOfWhiteSpace(e, r)
                  , n = e[t];
                if (!n || "\n" === n)
                    return t
            }
            return null
        }
        static atBlank(e, t, n) {
            const r = e[t];
            return "\n" === r || "\t" === r || " " === r || n && !r
        }
        static atCollectionItem(e, t) {
            const n = e[t];
            return ("?" === n || ":" === n || "-" === n) && a.atBlank(e, t + 1, !0)
        }
        static nextNodeIsIndented(e, t, n) {
            return !(!e || t < 0) && (t > 0 || n && "-" === e)
        }
        static normalizeOffset(e, t) {
            const n = e[t];
            return n ? "\n" !== n && "\n" === e[t - 1] ? t - 1 : a.endOfWhiteSpace(e, t) : t
        }
        static foldNewline(e, t, n) {
            let r = 0
              , i = !1
              , s = ""
              , o = e[t + 1];
            for (; " " === o || "\t" === o || "\n" === o; ) {
                switch (o) {
                case "\n":
                    r = 0,
                    t += 1,
                    s += "\n";
                    break;
                case "\t":
                    r <= n && (i = !0),
                    t = a.endOfWhiteSpace(e, t + 2) - 1;
                    break;
                case " ":
                    r += 1,
                    t += 1
                }
                o = e[t + 1]
            }
            return s || (s = " "),
            o && r <= n && (i = !0),
            {
                fold: s,
                offset: t,
                error: i
            }
        }
        constructor(e, t, n) {
            Object.defineProperty(this, "context", {
                value: n || null,
                writable: !0
            }),
            this.error = null,
            this.range = null,
            this.valueRange = null,
            this.props = t || [],
            this.type = e,
            this.value = null
        }
        getPropValue(e, t, n) {
            if (!this.context)
                return null;
            const {src: r} = this.context
              , i = this.props[e];
            return i && r[i.start] === t ? r.slice(i.start + (n ? 1 : 0), i.end) : null
        }
        get anchor() {
            for (let e = 0; e < this.props.length; ++e) {
                const t = this.getPropValue(e, i.Char.ANCHOR, !0);
                if (null != t)
                    return t
            }
            return null
        }
        get comment() {
            const e = [];
            for (let t = 0; t < this.props.length; ++t) {
                const n = this.getPropValue(t, i.Char.COMMENT, !0);
                null != n && e.push(n)
            }
            return e.length > 0 ? e.join("\n") : null
        }
        commentHasRequiredWhitespace(e) {
            const {src: t} = this.context;
            if (this.header && e === this.header.end)
                return !1;
            if (!this.valueRange)
                return !1;
            const {end: n} = this.valueRange;
            return e !== n || a.atBlank(t, n - 1)
        }
        get hasComment() {
            if (this.context) {
                const {src: e} = this.context;
                for (let t = 0; t < this.props.length; ++t)
                    if (e[this.props[t].start] === i.Char.COMMENT)
                        return !0
            }
            return !1
        }
        get hasProps() {
            if (this.context) {
                const {src: e} = this.context;
                for (let t = 0; t < this.props.length; ++t)
                    if (e[this.props[t].start] !== i.Char.COMMENT)
                        return !0
            }
            return !1
        }
        get includesTrailingLines() {
            return !1
        }
        get jsonLike() {
            return -1 !== [i.Type.FLOW_MAP, i.Type.FLOW_SEQ, i.Type.QUOTE_DOUBLE, i.Type.QUOTE_SINGLE].indexOf(this.type)
        }
        get rangeAsLinePos() {
            if (!this.range || !this.context)
                return;
            const e = (0,
            s.getLinePos)(this.range.start, this.context.root);
            if (!e)
                return;
            return {
                start: e,
                end: (0,
                s.getLinePos)(this.range.end, this.context.root)
            }
        }
        get rawValue() {
            if (!this.valueRange || !this.context)
                return null;
            const {start: e, end: t} = this.valueRange;
            return this.context.src.slice(e, t)
        }
        get tag() {
            for (let e = 0; e < this.props.length; ++e) {
                const t = this.getPropValue(e, i.Char.TAG, !1);
                if (null != t) {
                    if ("<" === t[1])
                        return {
                            verbatim: t.slice(2, -1)
                        };
                    {
                        const [e,n,r] = t.match(/^(.*!)([^!]*)$/);
                        return {
                            handle: n,
                            suffix: r
                        }
                    }
                }
            }
            return null
        }
        get valueRangeContainsNewline() {
            if (!this.valueRange || !this.context)
                return !1;
            const {start: e, end: t} = this.valueRange
              , {src: n} = this.context;
            for (let r = e; r < t; ++r)
                if ("\n" === n[r])
                    return !0;
            return !1
        }
        parseComment(e) {
            const {src: t} = this.context;
            if (t[e] === i.Char.COMMENT) {
                const n = a.endOfLine(t, e + 1)
                  , r = new o.default(e,n);
                return this.props.push(r),
                n
            }
            return e
        }
        setOrigRanges(e, t) {
            return this.range && (t = this.range.setOrigRange(e, t)),
            this.valueRange && this.valueRange.setOrigRange(e, t),
            this.props.forEach(n=>n.setOrigRange(e, t)),
            t
        }
        toString() {
            const {context: {src: e}, range: t, value: n} = this;
            if (null != n)
                return n;
            const r = e.slice(t.start, t.end);
            return a.addStringTerminator(e, t.end, r)
        }
    }
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(n(14))
      , i = s(n(15));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class o extends i.default {
        constructor(e) {
            super(),
            this.value = e
        }
        toJSON(e, t) {
            return t && t.keep ? this.value : (0,
            r.default)(this.value, e, t)
        }
        toString() {
            return String(this.value)
        }
    }
    t.default = o
}
, function(e, t) {
    e.exports = require("path")
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = c(n(24))
      , i = n(0)
      , s = c(n(14))
      , o = c(n(10))
      , a = c(n(15))
      , l = c(n(5));
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class u extends a.default {
        constructor(e, t=null) {
            super(),
            this.key = e,
            this.value = t,
            this.type = "PAIR"
        }
        get commentBefore() {
            return this.key && this.key.commentBefore
        }
        set commentBefore(e) {
            null == this.key && (this.key = new l.default(null)),
            this.key.commentBefore = e
        }
        addToJSMap(e, t) {
            const n = (0,
            s.default)(this.key, "", e);
            if (t instanceof Map) {
                const r = (0,
                s.default)(this.value, n, e);
                t.set(n, r)
            } else if (t instanceof Set)
                t.add(n);
            else {
                const r = ((e,t,n)=>null === t ? "" : "object" != typeof t ? String(t) : e instanceof a.default && n && n.doc ? e.toString({
                    anchors: {},
                    doc: n.doc,
                    indent: "",
                    inFlow: !0,
                    inStringifyKey: !0
                }) : JSON.stringify(t))(this.key, n, e);
                t[r] = (0,
                s.default)(this.value, r, e)
            }
            return t
        }
        toJSON(e, t) {
            const n = t && t.mapAsMap ? new Map : {};
            return this.addToJSMap(t, n)
        }
        toString(e, t, n) {
            if (!e || !e.doc)
                return JSON.stringify(this);
            const {simpleKeys: s} = e.doc.options;
            let {key: l, value: c} = this
              , u = l instanceof a.default && l.comment;
            if (s) {
                if (u)
                    throw new Error("With simple keys, key nodes cannot have comments");
                if (l instanceof o.default) {
                    throw new Error("With simple keys, collection cannot be used as a key value")
                }
            }
            const f = !s && (!l || u || l instanceof o.default || l.type === i.Type.BLOCK_FOLDED || l.type === i.Type.BLOCK_LITERAL)
              , {doc: d, indent: h} = e;
            e = Object.assign({}, e, {
                implicitKey: !f,
                indent: h + "  "
            });
            let p = !1
              , g = d.schema.stringify(l, e, ()=>u = null, ()=>p = !0);
            if (g = (0,
            r.default)(g, e.indent, u),
            e.allNullValues && !s)
                return this.comment ? (g = (0,
                r.default)(g, e.indent, this.comment),
                t && t()) : p && !u && n && n(),
                e.inFlow ? g : "? " + g;
            g = f ? `? ${g}\n${h}:` : g + ":",
            this.comment && (g = (0,
            r.default)(g, e.indent, this.comment),
            t && t());
            let m = ""
              , v = null;
            if (c instanceof a.default) {
                if (c.spaceBefore && (m = "\n"),
                c.commentBefore) {
                    m += "\n" + c.commentBefore.replace(/^/gm, e.indent + "#")
                }
                v = c.comment
            } else
                c && "object" == typeof c && (c = d.schema.createNode(c, !0));
            e.implicitKey = !1,
            p = !1;
            const E = d.schema.stringify(c, e, ()=>v = null, ()=>p = !0);
            let y = " ";
            if (m || this.comment)
                y = `${m}\n${e.indent}`;
            else if (!f && c instanceof o.default) {
                ("[" === E[0] || "{" === E[0]) && !E.includes("\n") || (y = "\n" + e.indent)
            }
            return p && !v && n && n(),
            (0,
            r.default)(g + y + E, e.indent, v)
        }
    }
    t.default = u
}
, function(e, t, n) {
    const r = n(3);
    e.exports = (e,t,n)=>new r(e,n).compare(new r(t,n))
}
, function(e, t, n) {
    class r {
        constructor(e, t) {
            if (t = s(t),
            e instanceof r)
                return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new r(e.raw,t);
            if (e instanceof o)
                return this.raw = e.value,
                this.set = [[e]],
                this.format(),
                this;
            if (this.options = t,
            this.loose = !!t.loose,
            this.includePrerelease = !!t.includePrerelease,
            this.raw = e,
            this.set = e.split(/\s*\|\|\s*/).map(e=>this.parseRange(e.trim())).filter(e=>e.length),
            !this.set.length)
                throw new TypeError("Invalid SemVer Range: " + e);
            if (this.set.length > 1) {
                const e = this.set[0];
                if (this.set = this.set.filter(e=>!p(e[0])),
                0 === this.set.length)
                    this.set = [e];
                else if (this.set.length > 1)
                    for (const e of this.set)
                        if (1 === e.length && g(e[0])) {
                            this.set = [e];
                            break
                        }
            }
            this.format()
        }
        format() {
            return this.range = this.set.map(e=>e.join(" ").trim()).join("||").trim(),
            this.range
        }
        toString() {
            return this.range
        }
        parseRange(e) {
            e = e.trim();
            const t = `parseRange:${Object.keys(this.options).join(",")}:${e}`
              , n = i.get(t);
            if (n)
                return n;
            const r = this.options.loose
              , s = r ? c[u.HYPHENRANGELOOSE] : c[u.HYPHENRANGE];
            e = e.replace(s, A(this.options.includePrerelease)),
            a("hyphen replace", e),
            e = e.replace(c[u.COMPARATORTRIM], f),
            a("comparator trim", e, c[u.COMPARATORTRIM]),
            e = (e = (e = e.replace(c[u.TILDETRIM], d)).replace(c[u.CARETTRIM], h)).split(/\s+/).join(" ");
            const l = r ? c[u.COMPARATORLOOSE] : c[u.COMPARATOR]
              , g = e.split(" ").map(e=>v(e, this.options)).join(" ").split(/\s+/).map(e=>I(e, this.options)).filter(this.options.loose ? e=>!!e.match(l) : ()=>!0).map(e=>new o(e,this.options))
              , m = (g.length,
            new Map);
            for (const e of g) {
                if (p(e))
                    return [e];
                m.set(e.value, e)
            }
            m.size > 1 && m.has("") && m.delete("");
            const E = [...m.values()];
            return i.set(t, E),
            E
        }
        intersects(e, t) {
            if (!(e instanceof r))
                throw new TypeError("a Range is required");
            return this.set.some(n=>m(n, t) && e.set.some(e=>m(e, t) && n.every(n=>e.every(e=>n.intersects(e, t)))))
        }
        test(e) {
            if (!e)
                return !1;
            if ("string" == typeof e)
                try {
                    e = new l(e,this.options)
                } catch (e) {
                    return !1
                }
            for (let t = 0; t < this.set.length; t++)
                if (T(this.set[t], e, this.options))
                    return !0;
            return !1
        }
    }
    e.exports = r;
    const i = new (n(111))({
        max: 1e3
    })
      , s = n(30)
      , o = n(32)
      , a = n(29)
      , l = n(3)
      , {re: c, t: u, comparatorTrimReplace: f, tildeTrimReplace: d, caretTrimReplace: h} = n(20)
      , p = e=>"<0.0.0-0" === e.value
      , g = e=>"" === e.value
      , m = (e,t)=>{
        let n = !0;
        const r = e.slice();
        let i = r.pop();
        for (; n && r.length; )
            n = r.every(e=>i.intersects(e, t)),
            i = r.pop();
        return n
    }
      , v = (e,t)=>(a("comp", e, t),
    e = w(e, t),
    a("caret", e),
    e = y(e, t),
    a("tildes", e),
    e = L(e, t),
    a("xrange", e),
    e = N(e, t),
    a("stars", e),
    e)
      , E = e=>!e || "x" === e.toLowerCase() || "*" === e
      , y = (e,t)=>e.trim().split(/\s+/).map(e=>O(e, t)).join(" ")
      , O = (e,t)=>{
        const n = t.loose ? c[u.TILDELOOSE] : c[u.TILDE];
        return e.replace(n, (t,n,r,i,s)=>{
            let o;
            return a("tilde", e, t, n, r, i, s),
            E(n) ? o = "" : E(r) ? o = `>=${n}.0.0 <${+n + 1}.0.0-0` : E(i) ? o = `>=${n}.${r}.0 <${n}.${+r + 1}.0-0` : s ? (a("replaceTilde pr", s),
            o = `>=${n}.${r}.${i}-${s} <${n}.${+r + 1}.0-0`) : o = `>=${n}.${r}.${i} <${n}.${+r + 1}.0-0`,
            a("tilde return", o),
            o
        }
        )
    }
      , w = (e,t)=>e.trim().split(/\s+/).map(e=>_(e, t)).join(" ")
      , _ = (e,t)=>{
        a("caret", e, t);
        const n = t.loose ? c[u.CARETLOOSE] : c[u.CARET]
          , r = t.includePrerelease ? "-0" : "";
        return e.replace(n, (t,n,i,s,o)=>{
            let l;
            return a("caret", e, t, n, i, s, o),
            E(n) ? l = "" : E(i) ? l = `>=${n}.0.0${r} <${+n + 1}.0.0-0` : E(s) ? l = "0" === n ? `>=${n}.${i}.0${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.0${r} <${+n + 1}.0.0-0` : o ? (a("replaceCaret pr", o),
            l = "0" === n ? "0" === i ? `>=${n}.${i}.${s}-${o} <${n}.${i}.${+s + 1}-0` : `>=${n}.${i}.${s}-${o} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${s}-${o} <${+n + 1}.0.0-0`) : (a("no pr"),
            l = "0" === n ? "0" === i ? `>=${n}.${i}.${s}${r} <${n}.${i}.${+s + 1}-0` : `>=${n}.${i}.${s}${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${s} <${+n + 1}.0.0-0`),
            a("caret return", l),
            l
        }
        )
    }
      , L = (e,t)=>(a("replaceXRanges", e, t),
    e.split(/\s+/).map(e=>b(e, t)).join(" "))
      , b = (e,t)=>{
        e = e.trim();
        const n = t.loose ? c[u.XRANGELOOSE] : c[u.XRANGE];
        return e.replace(n, (n,r,i,s,o,l)=>{
            a("xRange", e, n, r, i, s, o, l);
            const c = E(i)
              , u = c || E(s)
              , f = u || E(o)
              , d = f;
            return "=" === r && d && (r = ""),
            l = t.includePrerelease ? "-0" : "",
            c ? n = ">" === r || "<" === r ? "<0.0.0-0" : "*" : r && d ? (u && (s = 0),
            o = 0,
            ">" === r ? (r = ">=",
            u ? (i = +i + 1,
            s = 0,
            o = 0) : (s = +s + 1,
            o = 0)) : "<=" === r && (r = "<",
            u ? i = +i + 1 : s = +s + 1),
            "<" === r && (l = "-0"),
            n = `${r + i}.${s}.${o}${l}`) : u ? n = `>=${i}.0.0${l} <${+i + 1}.0.0-0` : f && (n = `>=${i}.${s}.0${l} <${i}.${+s + 1}.0-0`),
            a("xRange return", n),
            n
        }
        )
    }
      , N = (e,t)=>(a("replaceStars", e, t),
    e.trim().replace(c[u.STAR], ""))
      , I = (e,t)=>(a("replaceGTE0", e, t),
    e.trim().replace(c[t.includePrerelease ? u.GTE0PRE : u.GTE0], ""))
      , A = e=>(t,n,r,i,s,o,a,l,c,u,f,d,h)=>`${n = E(r) ? "" : E(i) ? `>=${r}.0.0${e ? "-0" : ""}` : E(s) ? `>=${r}.${i}.0${e ? "-0" : ""}` : o ? ">=" + n : `>=${n}${e ? "-0" : ""}`} ${l = E(c) ? "" : E(u) ? `<${+c + 1}.0.0-0` : E(f) ? `<${c}.${+u + 1}.0-0` : d ? `<=${c}.${u}.${f}-${d}` : e ? `<${c}.${u}.${+f + 1}-0` : "<=" + l}`.trim()
      , T = (e,t,n)=>{
        for (let n = 0; n < e.length; n++)
            if (!e[n].test(t))
                return !1;
        if (t.prerelease.length && !n.includePrerelease) {
            for (let n = 0; n < e.length; n++)
                if (a(e[n].semver),
                e[n].semver !== o.ANY && e[n].semver.prerelease.length > 0) {
                    const r = e[n].semver;
                    if (r.major === t.major && r.minor === t.minor && r.patch === t.patch)
                        return !0
                }
            return !1
        }
        return !0
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = t.isEmptyPath = void 0;
    var r = a(n(24))
      , i = a(n(15))
      , s = a(n(7))
      , o = a(n(5));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    const c = e=>null == e || "object" == typeof e && e[Symbol.iterator]().next().done;
    t.isEmptyPath = c;
    class u extends i.default {
        constructor(...e) {
            super(...e),
            l(this, "items", [])
        }
        addIn(e, t) {
            if (c(e))
                this.add(t);
            else {
                const [n,...r] = e
                  , i = this.get(n, !0);
                if (!(i instanceof u))
                    throw new Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
                i.addIn(r, t)
            }
        }
        deleteIn([e,...t]) {
            if (0 === t.length)
                return this.delete(e);
            const n = this.get(e, !0);
            if (n instanceof u)
                return n.deleteIn(t);
            throw new Error(`Expected YAML collection at ${e}. Remaining path: ${t}`)
        }
        getIn([e,...t], n) {
            const r = this.get(e, !0);
            return 0 === t.length ? !n && r instanceof o.default ? r.value : r : r instanceof u ? r.getIn(t, n) : void 0
        }
        hasAllNullValues() {
            return this.items.every(e=>{
                if (!(e instanceof s.default))
                    return !1;
                const t = e.value;
                return null == t || t instanceof o.default && null == t.value && !t.commentBefore && !t.comment && !t.tag
            }
            )
        }
        hasIn([e,...t]) {
            if (0 === t.length)
                return this.has(e);
            const n = this.get(e, !0);
            return n instanceof u && n.hasIn(t)
        }
        setIn([e,...t], n) {
            if (0 === t.length)
                this.set(e, n);
            else {
                const r = this.get(e, !0);
                if (!(r instanceof u))
                    throw new Error(`Expected YAML collection at ${e}. Remaining path: ${t}`);
                r.setIn(t, n)
            }
        }
        toJSON() {
            return null
        }
        toString(e, {blockItem: t, flowChars: n, isMap: i, itemIndent: s}, o, a) {
            const {doc: l, indent: c} = e
              , f = this.type && "FLOW" === this.type.substr(0, 4) || e.inFlow;
            f && (s += "  ");
            const d = i && this.hasAllNullValues();
            e = Object.assign({}, e, {
                allNullValues: d,
                indent: s,
                inFlow: f,
                type: null
            });
            let h = !1
              , p = !1;
            const g = this.items.reduce((t,n,i)=>{
                let o;
                n && (!h && n.spaceBefore && t.push({
                    type: "comment",
                    str: ""
                }),
                n.commentBefore && n.commentBefore.match(/^.*$/gm).forEach(e=>{
                    t.push({
                        type: "comment",
                        str: "#" + e
                    })
                }
                ),
                n.comment && (o = n.comment),
                f && (!h && n.spaceBefore || n.commentBefore || n.comment || n.key && (n.key.commentBefore || n.key.comment) || n.value && (n.value.commentBefore || n.value.comment)) && (p = !0)),
                h = !1;
                let a = l.schema.stringify(n, e, ()=>o = null, ()=>h = !0);
                return f && !p && a.includes("\n") && (p = !0),
                f && i < this.items.length - 1 && (a += ","),
                a = (0,
                r.default)(a, s, o),
                h && (o || f) && (h = !1),
                t.push({
                    type: "item",
                    str: a
                }),
                t
            }
            , []);
            let m;
            if (0 === g.length)
                m = n.start + n.end;
            else if (f) {
                const {start: e, end: t} = n
                  , r = g.map(e=>e.str);
                if (p || r.reduce((e,t)=>e + t.length + 2, 2) > u.maxFlowStringSingleLineLength) {
                    m = e;
                    for (const e of r)
                        m += e ? `\n  ${c}${e}` : "\n";
                    m += `\n${c}${t}`
                } else
                    m = `${e} ${r.join(" ")} ${t}`
            } else {
                const e = g.map(t);
                m = e.shift();
                for (const t of e)
                    m += t ? `\n${c}${t}` : "\n"
            }
            return this.comment ? (m += "\n" + this.comment.replace(/^/gm, c + "#"),
            o && o()) : h && a && a(),
            m
        }
    }
    t.default = u,
    l(u, "maxFlowStringSingleLineLength", 60)
}
, function(e, t) {
    e.exports = require("vscode")
}
, function(e, t) {
    e.exports = require("fs")
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.findPair = a,
    t.default = void 0;
    var r = o(n(10))
      , i = o(n(7))
      , s = o(n(5));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function a(e, t) {
        const n = t instanceof s.default ? t.value : t;
        for (const r of e)
            if (r instanceof i.default) {
                if (r.key === t || r.key === n)
                    return r;
                if (r.key && r.key.value === n)
                    return r
            }
    }
    class l extends r.default {
        add(e) {
            e ? e instanceof i.default || (e = new i.default(e.key || e,e.value)) : e = new i.default(e);
            if (a(this.items, e.key))
                throw new Error(`Key ${e.key} already set`);
            this.items.push(e)
        }
        delete(e) {
            const t = a(this.items, e);
            if (!t)
                return !1;
            return this.items.splice(this.items.indexOf(t), 1).length > 0
        }
        get(e, t) {
            const n = a(this.items, e)
              , r = n && n.value;
            return !t && r instanceof s.default ? r.value : r
        }
        has(e) {
            return !!a(this.items, e)
        }
        set(e, t) {
            const n = a(this.items, e);
            n ? n.value = t : this.items.push(new i.default(e,t))
        }
        toJSON(e, t, n) {
            const r = n ? new n : t && t.mapAsMap ? new Map : {};
            t && t.onCreate && t.onCreate(r);
            for (const e of this.items)
                e.addToJSMap(t, r);
            return r
        }
        toString(e, t, n) {
            if (!e)
                return JSON.stringify(this);
            for (const e of this.items)
                if (!(e instanceof i.default))
                    throw new Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);
            return super.toString(e, {
                blockItem: e=>e.str,
                flowChars: {
                    start: "{",
                    end: "}"
                },
                isMap: !0,
                itemIndent: e.indent || ""
            }, t, n)
        }
    }
    t.default = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function e(t, n, r) {
        if (Array.isArray(t))
            return t.map((t,n)=>e(t, String(n), r));
        if (t && "function" == typeof t.toJSON) {
            const e = r && r.anchors && r.anchors.find(e=>e.node === t);
            e && (r.onCreate = t=>{
                e.res = t,
                delete r.onCreate
            }
            );
            const i = t.toJSON(n, r);
            return e && r.onCreate && r.onCreate(i),
            i
        }
        return t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    t.default = class {
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = o(n(14))
      , i = o(n(10))
      , s = o(n(5));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function a(e) {
        let t = e instanceof s.default ? e.value : e;
        return t && "string" == typeof t && (t = Number(t)),
        Number.isInteger(t) && t >= 0 ? t : null
    }
    class l extends i.default {
        add(e) {
            this.items.push(e)
        }
        delete(e) {
            const t = a(e);
            if ("number" != typeof t)
                return !1;
            return this.items.splice(t, 1).length > 0
        }
        get(e, t) {
            const n = a(e);
            if ("number" != typeof n)
                return;
            const r = this.items[n];
            return !t && r instanceof s.default ? r.value : r
        }
        has(e) {
            const t = a(e);
            return "number" == typeof t && t < this.items.length
        }
        set(e, t) {
            const n = a(e);
            if ("number" != typeof n)
                throw new Error(`Expected a valid index, not ${e}.`);
            this.items[n] = t
        }
        toJSON(e, t) {
            const n = [];
            t && t.onCreate && t.onCreate(n);
            let i = 0;
            for (const e of this.items)
                n.push((0,
                r.default)(e, String(i++), t));
            return n
        }
        toString(e, t, n) {
            return e ? super.toString(e, {
                blockItem: e=>"comment" === e.type ? e.str : "- " + e.str,
                flowChars: {
                    start: "[",
                    end: "]"
                },
                isMap: !1,
                itemIndent: (e.indent || "") + "  "
            }, t, n) : JSON.stringify(this)
        }
    }
    t.default = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.stringifyNumber = function({format: e, minFractionDigits: t, tag: n, value: r}) {
        if (!isFinite(r))
            return isNaN(r) ? ".nan" : r < 0 ? "-.inf" : ".inf";
        let i = JSON.stringify(r);
        if (!e && t && (!n || "tag:yaml.org,2002:float" === n) && /^\d/.test(i)) {
            let e = i.indexOf(".");
            e < 0 && (e = i.length,
            i += ".");
            let n = t - (i.length - e - 1);
            for (; n-- > 0; )
                i += "0"
        }
        return i
    }
    ,
    t.stringifyString = function(e, t, n, a) {
        const {defaultType: f} = o.strOptions
          , {implicitKey: d, inFlow: h} = t;
        let {type: p, value: g} = e;
        "string" != typeof g && (g = String(g),
        e = Object.assign({}, e, {
            value: g
        }));
        const m = f=>{
            switch (f) {
            case i.Type.BLOCK_FOLDED:
            case i.Type.BLOCK_LITERAL:
                return u(e, t, n, a);
            case i.Type.QUOTE_DOUBLE:
                return l(g, t);
            case i.Type.QUOTE_SINGLE:
                return c(g, t);
            case i.Type.PLAIN:
                return function(e, t, n, a) {
                    const {comment: f, type: d, value: h} = e
                      , {actualString: p, implicitKey: g, indent: m, inFlow: v, tags: E} = t;
                    if (g && /[\n[\]{},]/.test(h) || v && /[[\]{},]/.test(h))
                        return l(h, t);
                    if (!h || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(h))
                        return g || v || -1 === h.indexOf("\n") ? -1 !== h.indexOf('"') && -1 === h.indexOf("'") ? c(h, t) : l(h, t) : u(e, t, n, a);
                    if (!g && !v && d !== i.Type.PLAIN && -1 !== h.indexOf("\n"))
                        return u(e, t, n, a);
                    const y = h.replace(/\n+/g, "$&\n" + m);
                    if (p && "string" != typeof E.resolveScalar(y).value)
                        return l(h, t);
                    const O = g ? y : (0,
                    s.default)(y, m, s.FOLD_FLOW, o.strOptions.fold);
                    if (f && !v && (-1 !== O.indexOf("\n") || -1 !== f.indexOf("\n")))
                        return n && n(),
                        (0,
                        r.addCommentBefore)(O, m, f);
                    return O
                }(e, t, n, a);
            default:
                return null
            }
        }
        ;
        p !== i.Type.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(g) ? p = i.Type.QUOTE_DOUBLE : !d && !h || p !== i.Type.BLOCK_FOLDED && p !== i.Type.BLOCK_LITERAL || (p = i.Type.QUOTE_DOUBLE);
        let v = m(p);
        if (null === v && (v = m(f),
        null === v))
            throw new Error("Unsupported default string type " + f);
        return v
    }
    ;
    var r = n(24)
      , i = n(0)
      , s = function(e) {
        if (e && e.__esModule)
            return e;
        var t = a();
        if (t && t.has(e))
            return t.get(e);
        var n = {};
        if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i]
                }
        }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(86))
      , o = n(22);
    function a() {
        if ("function" != typeof WeakMap)
            return null;
        var e = new WeakMap;
        return a = function() {
            return e
        }
        ,
        e
    }
    function l(e, {implicitKey: t, indent: n}) {
        const {jsonEncoding: r, minMultiLineLength: i} = o.strOptions.doubleQuoted
          , a = JSON.stringify(e);
        if (r)
            return a;
        let l = ""
          , c = 0;
        for (let e = 0, r = a[e]; r; r = a[++e])
            if (" " === r && "\\" === a[e + 1] && "n" === a[e + 2] && (l += a.slice(c, e) + "\\ ",
            e += 1,
            c = e,
            r = "\\"),
            "\\" === r)
                switch (a[e + 1]) {
                case "u":
                    {
                        l += a.slice(c, e);
                        const t = a.substr(e + 2, 4);
                        switch (t) {
                        case "0000":
                            l += "\\0";
                            break;
                        case "0007":
                            l += "\\a";
                            break;
                        case "000b":
                            l += "\\v";
                            break;
                        case "001b":
                            l += "\\e";
                            break;
                        case "0085":
                            l += "\\N";
                            break;
                        case "00a0":
                            l += "\\_";
                            break;
                        case "2028":
                            l += "\\L";
                            break;
                        case "2029":
                            l += "\\P";
                            break;
                        default:
                            "00" === t.substr(0, 2) ? l += "\\x" + t.substr(2) : l += a.substr(e, 6)
                        }
                        e += 5,
                        c = e + 1
                    }
                    break;
                case "n":
                    if (t || '"' === a[e + 2] || a.length < i)
                        e += 1;
                    else {
                        for (l += a.slice(c, e) + "\n\n"; "\\" === a[e + 2] && "n" === a[e + 3] && '"' !== a[e + 4]; )
                            l += "\n",
                            e += 2;
                        l += n,
                        " " === a[e + 2] && (l += "\\"),
                        e += 1,
                        c = e + 1
                    }
                    break;
                default:
                    e += 1
                }
        return l = c ? l + a.slice(c) : a,
        t ? l : (0,
        s.default)(l, n, s.FOLD_QUOTED, o.strOptions.fold)
    }
    function c(e, t) {
        const {indent: n, implicitKey: r} = t;
        if (r) {
            if (/\n/.test(e))
                return l(e, t)
        } else if (/[ \t]\n|\n[ \t]/.test(e))
            return l(e, t);
        const i = "'" + e.replace(/'/g, "''").replace(/\n+/g, "$&\n" + n) + "'";
        return r ? i : (0,
        s.default)(i, n, s.FOLD_FLOW, o.strOptions.fold)
    }
    function u({comment: e, type: t, value: n}, r, a, c) {
        if (/\n[\t ]+$/.test(n) || /^\s*$/.test(n))
            return l(n, r);
        const u = r.indent || (r.forceBlockIndent ? " " : "")
          , f = u ? "2" : "1"
          , d = t !== i.Type.BLOCK_FOLDED && (t === i.Type.BLOCK_LITERAL || !function(e, t) {
            const n = e.length;
            if (n <= t)
                return !1;
            for (let r = 0, i = 0; r < n; ++r)
                if ("\n" === e[r]) {
                    if (r - i > t)
                        return !0;
                    if (i = r + 1,
                    n - i <= t)
                        return !1
                }
            return !0
        }(n, o.strOptions.fold.lineWidth - u.length));
        let h = d ? "|" : ">";
        if (!n)
            return h + "\n";
        let p = ""
          , g = "";
        if (n = n.replace(/[\n\t ]*$/, e=>{
            const t = e.indexOf("\n");
            return -1 === t ? h += "-" : n !== e && t === e.length - 1 || (h += "+",
            c && c()),
            g = e.replace(/\n$/, ""),
            ""
        }
        ).replace(/^[\n ]*/, e=>{
            -1 !== e.indexOf(" ") && (h += f);
            const t = e.match(/ +$/);
            return t ? (p = e.slice(0, -t[0].length),
            t[0]) : (p = e,
            "")
        }
        ),
        g && (g = g.replace(/\n+(?!\n|$)/g, "$&" + u)),
        p && (p = p.replace(/\n+/g, "$&" + u)),
        e && (h += " #" + e.replace(/ ?[\r\n]+/g, " "),
        a && a()),
        !n)
            return `${h}${f}\n${u}${g}`;
        if (d)
            return n = n.replace(/\n+/g, "$&" + u),
            `${h}\n${u}${p}${n}${g}`;
        n = n.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, "$&" + u);
        const m = (0,
        s.default)(`${p}${n}${g}`, u, s.FOLD_BLOCK, o.strOptions.fold);
        return `${h}\n${u}${m}`
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(6)
      , i = n(19);
    t.FLUTTER_EXECUTABLE_NAME = i.isWin ? "flutter.bat" : "flutter",
    t.FLUTTER_PATH = "bin/" + t.FLUTTER_EXECUTABLE_NAME,
    t.INTL_UTILS = "intl_utils",
    t.INTL_UTILS_NOT_NULL_SAFE_VERSION = "1.9.0",
    t.INTL_UTILS_NULL_SAFE_VERSION = "2.6.1",
    t.PUBSPEC_YAML = "pubspec.yaml",
    t.LIB_DIRECTORY = "lib",
    t.L10N_DIRECTORY = "l10n",
    t.LOCALIZELY_DIRECTORY = ".localizely",
    t.CREDENTIALS_YAML = "credentials.yaml",
    t.DEFAULT_CLASS_NAME = "S",
    t.DEFAULT_ARB_PREFIX = "intl",
    t.DEFAULT_MAIN_LOCALE = "en",
    t.DEFAULT_ARB_DIR = r.join(t.LIB_DIRECTORY, t.L10N_DIRECTORY),
    t.FLUTTER_INTL_CHANNEL = "Flutter Intl",
    t.EXTENSION_CONFIG = "flutter_intl",
    t.EXTENSION_CONFIG_ENABLED = "enabled",
    t.EXTENSION_CONFIG_CLASS_NAME = "class_name",
    t.EXTENSION_CONFIG_MAIN_LOCALE = "main_locale",
    t.EXTENSION_CONFIG_ARB_PREFIX = "arb_prefix",
    t.EXTENSION_CONFIG_GENERATE = "generate",
    t.EXTENSION_CONFIG_ARB_DIR = "arb_dir",
    t.EXTENSION_CONFIG_OUTPUT_DIR = "output_dir",
    t.EXTENSION_CONFIG_USE_DEFERRED_LOADING = "use_deferred_loading",
    t.EXTENSION_CONFIG_LOCALIZELY = "localizely",
    t.EXTENSION_CONFIG_LOCALIZELY_PROJECT_ID = "project_id",
    t.EXTENSION_CONFIG_LOCALIZELY_BRANCH = "branch",
    t.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_AS_REVIEWED = "upload_as_reviewed",
    t.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_OVERWRITE = "upload_overwrite",
    t.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_TAG_ADDED = "upload_tag_added",
    t.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_TAG_UPDATED = "upload_tag_updated",
    t.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_TAG_REMOVED = "upload_tag_removed",
    t.EXTENSION_CONFIG_LOCALIZELY_DOWNLOAD_EMPTY_AS = "download_empty_as",
    t.EXTENSION_CONFIG_LOCALIZELY_DOWNLOAD_INCLUDE_TAGS = "download_include_tags",
    t.EXTENSION_CONFIG_LOCALIZELY_DOWNLOAD_EXCLUDE_TAGS = "download_exclude_tags",
    t.EXTENSION_CONFIG_LOCALIZELY_OTA_ENABLED = "ota_enabled",
    t.EXTENSION_CONFIG_API_TOKEN = "api_token",
    t.LOCALIZELY_LEARN_MORE_PAGE = "https://localizely.com/blog/flutter-localization-step-by-step/?tab=automated-using-flutter-intl&utm_medium=ide_plugin&utm_source=vscode_readmore"
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(6)
      , i = n(18)
      , s = n(66);
    function o(e) {
        return /^[a-z]{2}(_[A-Z][a-z]{3})?(_[A-Z]{2})?$/.test(e)
    }
    function a(e) {
        return /^[a-zA-Z][a-zA-Z0-9_]*$/.test(e)
    }
    t.isWin = /^win/.test(process.platform),
    t.getFlutterSdkExePath = function(e) {
        return r.join(e, i.FLUTTER_PATH)
    }
    ,
    t.isValidEnvironmentVersion = function(e) {
        return /^.*\d+\.\d+\.\d+.*$/.test(e)
    }
    ,
    t.isValidClassName = function(e) {
        return /^[A-Z][a-zA-Z0-9]*$/.test(e)
    }
    ,
    t.isValidLocale = o,
    t.isValidPath = function(e) {
        return /^(?:[A-Za-z]:)?([\/\\]{0,2}\w*)+$/.test(e)
    }
    ,
    t.isValidStringKey = a,
    t.validateLocaleCode = function(e) {
        return o(e) ? null : "Invalid locale code provided. Hint: 'en', 'en_GB', 'zh_Hans_CN'."
    }
    ,
    t.validateProjectId = function(e) {
        return "" === e ? "Project ID can't be empty." : null
    }
    ,
    t.validateApiToken = function(e) {
        return "" === e ? "Api token can't be empty." : null
    }
    ,
    t.validateStringKey = function(e) {
        return a(e) ? null : "Invalid string key. Valid example: 'pageHomeTitle'"
    }
    ,
    t.sanitizePathForRegex = function(e) {
        let t = e.replace(/\\/g, "/");
        return t.endsWith("/") && (t = t.substring(0, t.length - 1)),
        t
    }
    ,
    t.generateStringKeyFromMarkedValue = function(e) {
        const t = e.replace(/[^A-Za-z0-9\s]/g, "").toLowerCase().split(" ").filter(e=>e);
        return (t.length > 0 ? t[0] : "") + (t.length > 1 ? t.slice(1, Math.min(t.length, 10)).map(e=>e.substring(0, 1).toUpperCase() + e.substring(1)).join("") : "")
    }
    ,
    t.info = function(e) {
        s.getChannel(i.FLUTTER_INTL_CHANNEL).appendLine("INFO: " + e)
    }
    ,
    t.warning = function(e) {
        s.getChannel(i.FLUTTER_INTL_CHANNEL).appendLine("WARNING: " + e)
    }
    ,
    t.error = function(e) {
        s.getChannel(i.FLUTTER_INTL_CHANNEL).appendLine("ERROR: " + e)
    }
}
, function(e, t, n) {
    const {MAX_SAFE_COMPONENT_LENGTH: r} = n(28)
      , i = n(29)
      , s = (t = e.exports = {}).re = []
      , o = t.src = []
      , a = t.t = {};
    let l = 0;
    const c = (e,t,n)=>{
        const r = l++;
        i(r, t),
        a[e] = r,
        o[r] = t,
        s[r] = new RegExp(t,n ? "g" : void 0)
    }
    ;
    c("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
    c("NUMERICIDENTIFIERLOOSE", "[0-9]+"),
    c("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
    c("MAINVERSION", `(${o[a.NUMERICIDENTIFIER]})\\.(${o[a.NUMERICIDENTIFIER]})\\.(${o[a.NUMERICIDENTIFIER]})`),
    c("MAINVERSIONLOOSE", `(${o[a.NUMERICIDENTIFIERLOOSE]})\\.(${o[a.NUMERICIDENTIFIERLOOSE]})\\.(${o[a.NUMERICIDENTIFIERLOOSE]})`),
    c("PRERELEASEIDENTIFIER", `(?:${o[a.NUMERICIDENTIFIER]}|${o[a.NONNUMERICIDENTIFIER]})`),
    c("PRERELEASEIDENTIFIERLOOSE", `(?:${o[a.NUMERICIDENTIFIERLOOSE]}|${o[a.NONNUMERICIDENTIFIER]})`),
    c("PRERELEASE", `(?:-(${o[a.PRERELEASEIDENTIFIER]}(?:\\.${o[a.PRERELEASEIDENTIFIER]})*))`),
    c("PRERELEASELOOSE", `(?:-?(${o[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[a.PRERELEASEIDENTIFIERLOOSE]})*))`),
    c("BUILDIDENTIFIER", "[0-9A-Za-z-]+"),
    c("BUILD", `(?:\\+(${o[a.BUILDIDENTIFIER]}(?:\\.${o[a.BUILDIDENTIFIER]})*))`),
    c("FULLPLAIN", `v?${o[a.MAINVERSION]}${o[a.PRERELEASE]}?${o[a.BUILD]}?`),
    c("FULL", `^${o[a.FULLPLAIN]}$`),
    c("LOOSEPLAIN", `[v=\\s]*${o[a.MAINVERSIONLOOSE]}${o[a.PRERELEASELOOSE]}?${o[a.BUILD]}?`),
    c("LOOSE", `^${o[a.LOOSEPLAIN]}$`),
    c("GTLT", "((?:<|>)?=?)"),
    c("XRANGEIDENTIFIERLOOSE", o[a.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"),
    c("XRANGEIDENTIFIER", o[a.NUMERICIDENTIFIER] + "|x|X|\\*"),
    c("XRANGEPLAIN", `[v=\\s]*(${o[a.XRANGEIDENTIFIER]})(?:\\.(${o[a.XRANGEIDENTIFIER]})(?:\\.(${o[a.XRANGEIDENTIFIER]})(?:${o[a.PRERELEASE]})?${o[a.BUILD]}?)?)?`),
    c("XRANGEPLAINLOOSE", `[v=\\s]*(${o[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})(?:${o[a.PRERELEASELOOSE]})?${o[a.BUILD]}?)?)?`),
    c("XRANGE", `^${o[a.GTLT]}\\s*${o[a.XRANGEPLAIN]}$`),
    c("XRANGELOOSE", `^${o[a.GTLT]}\\s*${o[a.XRANGEPLAINLOOSE]}$`),
    c("COERCE", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`),
    c("COERCERTL", o[a.COERCE], !0),
    c("LONETILDE", "(?:~>?)"),
    c("TILDETRIM", `(\\s*)${o[a.LONETILDE]}\\s+`, !0),
    t.tildeTrimReplace = "$1~",
    c("TILDE", `^${o[a.LONETILDE]}${o[a.XRANGEPLAIN]}$`),
    c("TILDELOOSE", `^${o[a.LONETILDE]}${o[a.XRANGEPLAINLOOSE]}$`),
    c("LONECARET", "(?:\\^)"),
    c("CARETTRIM", `(\\s*)${o[a.LONECARET]}\\s+`, !0),
    t.caretTrimReplace = "$1^",
    c("CARET", `^${o[a.LONECARET]}${o[a.XRANGEPLAIN]}$`),
    c("CARETLOOSE", `^${o[a.LONECARET]}${o[a.XRANGEPLAINLOOSE]}$`),
    c("COMPARATORLOOSE", `^${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]})$|^$`),
    c("COMPARATOR", `^${o[a.GTLT]}\\s*(${o[a.FULLPLAIN]})$|^$`),
    c("COMPARATORTRIM", `(\\s*)${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]}|${o[a.XRANGEPLAIN]})`, !0),
    t.comparatorTrimReplace = "$1$2$3",
    c("HYPHENRANGE", `^\\s*(${o[a.XRANGEPLAIN]})\\s+-\\s+(${o[a.XRANGEPLAIN]})\\s*$`),
    c("HYPHENRANGELOOSE", `^\\s*(${o[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[a.XRANGEPLAINLOOSE]})\\s*$`),
    c("STAR", "(<|>)?=?\\s*\\*"),
    c("GTE0", "^\\s*>=\\s*0.0.0\\s*$"),
    c("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$")
}
, function(e, t, n) {
    const {MAX_LENGTH: r} = n(28)
      , {re: i, t: s} = n(20)
      , o = n(3)
      , a = n(30);
    e.exports = (e,t)=>{
        if (t = a(t),
        e instanceof o)
            return e;
        if ("string" != typeof e)
            return null;
        if (e.length > r)
            return null;
        if (!(t.loose ? i[s.LOOSE] : i[s.FULL]).test(e))
            return null;
        try {
            return new o(e,t)
        } catch (e) {
            return null
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.strOptions = t.nullOptions = t.boolOptions = t.binaryOptions = void 0;
    var r = n(0);
    const i = {
        defaultType: r.Type.BLOCK_LITERAL,
        lineWidth: 76
    };
    t.binaryOptions = i;
    t.boolOptions = {
        trueStr: "true",
        falseStr: "false"
    };
    t.nullOptions = {
        nullStr: "null"
    };
    const s = {
        defaultType: r.Type.PLAIN,
        doubleQuoted: {
            jsonEncoding: !1,
            minMultiLineLength: 40
        },
        fold: {
            lineWidth: 80,
            minContentWidth: 20
        }
    };
    t.strOptions = s
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(0)
      , i = o(n(4))
      , s = o(n(2));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class a extends i.default {
        constructor() {
            super(r.Type.BLANK_LINE)
        }
        get includesTrailingLines() {
            return !0
        }
        parse(e, t) {
            this.context = e;
            const {src: n} = e;
            let r = t + 1;
            for (; i.default.atBlank(n, r); ) {
                const e = i.default.endOfWhiteSpace(n, r);
                if ("\n" !== e)
                    break;
                r = e + 1
            }
            return this.range = new s.default(t,r),
            r
        }
    }
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.addCommentBefore = function(e, t, n) {
        if (!n)
            return e;
        return `#${n.replace(/[\s\S]^/gm, `$&${t}#`)}\n${t}${e}`
    }
    ,
    t.default = function(e, t, n) {
        return n ? -1 === n.indexOf("\n") ? `${e} #${n}` : e + "\n" + n.replace(/^/gm, (t || "") + "#") : e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(0)
      , i = n(1)
      , s = c(n(14))
      , o = c(n(10))
      , a = c(n(15))
      , l = c(n(7));
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    const u = (e,t)=>{
        if (e instanceof f) {
            const n = t.find(t=>t.node === e.source);
            return n.count * n.aliasCount
        }
        if (e instanceof o.default) {
            let n = 0;
            for (const r of e.items) {
                const e = u(r, t);
                e > n && (n = e)
            }
            return n
        }
        if (e instanceof l.default) {
            const n = u(e.key, t)
              , r = u(e.value, t);
            return Math.max(n, r)
        }
        return 1
    }
    ;
    class f extends a.default {
        static stringify({range: e, source: t}, {anchors: n, doc: r, implicitKey: i, inStringifyKey: s}) {
            let o = Object.keys(n).find(e=>n[e] === t);
            if (!o && s && (o = r.anchors.getName(t) || r.anchors.newName()),
            o)
                return `*${o}${i ? " " : ""}`;
            const a = r.anchors.getName(t) ? "Alias node must be after source node" : "Source node not found for alias node";
            throw new Error(`${a} [${e}]`)
        }
        constructor(e) {
            super(),
            this.source = e,
            this.type = r.Type.ALIAS
        }
        set tag(e) {
            throw new Error("Alias nodes cannot have tags")
        }
        toJSON(e, t) {
            if (!t)
                return (0,
                s.default)(this.source, e, t);
            const {anchors: n, maxAliasCount: r} = t
              , o = n.find(e=>e.node === this.source);
            if (!o || void 0 === o.res) {
                const e = "This should not happen: Alias anchor was not resolved?";
                throw this.cstNode ? new i.YAMLReferenceError(this.cstNode,e) : new ReferenceError(e)
            }
            if (r >= 0 && (o.count += 1,
            0 === o.aliasCount && (o.aliasCount = u(this.source, n)),
            o.count * o.aliasCount > r)) {
                const e = "Excessive alias count indicates a resource exhaustion attack";
                throw this.cstNode ? new i.YAMLReferenceError(this.cstNode,e) : new ReferenceError(e)
            }
            return o.res
        }
        toString(e) {
            return f.stringify(this, e)
        }
    }
    var d, h, p;
    t.default = f,
    p = !0,
    (h = "default")in (d = f) ? Object.defineProperty(d, h, {
        value: p,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : d[h] = p
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = t.resolveString = void 0;
    var r = n(17)
      , i = n(22);
    const s = (e,t)=>{
        const n = t.strValue;
        return n ? "string" == typeof n ? n : (n.errors.forEach(n=>{
            n.source || (n.source = t),
            e.errors.push(n)
        }
        ),
        n.str) : ""
    }
    ;
    t.resolveString = s;
    var o = {
        identify: e=>"string" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:str",
        resolve: s,
        stringify: (e,t,n,i)=>(t = Object.assign({
            actualString: !0
        }, t),
        (0,
        r.stringifyString)(e, t, n, i)),
        options: i.strOptions
    };
    t.default = o
}
, function(e, t) {
    e.exports = require("util")
}
, function(e, t) {
    const n = Number.MAX_SAFE_INTEGER || 9007199254740991;
    e.exports = {
        SEMVER_SPEC_VERSION: "2.0.0",
        MAX_LENGTH: 256,
        MAX_SAFE_INTEGER: n,
        MAX_SAFE_COMPONENT_LENGTH: 16
    }
}
, function(e, t) {
    const n = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e)=>console.error("SEMVER", ...e) : ()=>{}
    ;
    e.exports = n
}
, function(e, t) {
    const n = ["includePrerelease", "loose", "rtl"];
    e.exports = e=>e ? "object" != typeof e ? {
        loose: !0
    } : n.filter(t=>e[t]).reduce((e,t)=>(e[t] = !0,
    e), {}) : {}
}
, function(e, t, n) {
    const r = n(8);
    e.exports = (e,t,n)=>r(e, t, n) > 0
}
, function(e, t, n) {
    const r = Symbol("SemVer ANY");
    class i {
        static get ANY() {
            return r
        }
        constructor(e, t) {
            if (t = s(t),
            e instanceof i) {
                if (e.loose === !!t.loose)
                    return e;
                e = e.value
            }
            c("comparator", e, t),
            this.options = t,
            this.loose = !!t.loose,
            this.parse(e),
            this.semver === r ? this.value = "" : this.value = this.operator + this.semver.version,
            c("comp", this)
        }
        parse(e) {
            const t = this.options.loose ? o[a.COMPARATORLOOSE] : o[a.COMPARATOR]
              , n = e.match(t);
            if (!n)
                throw new TypeError("Invalid comparator: " + e);
            this.operator = void 0 !== n[1] ? n[1] : "",
            "=" === this.operator && (this.operator = ""),
            n[2] ? this.semver = new u(n[2],this.options.loose) : this.semver = r
        }
        toString() {
            return this.value
        }
        test(e) {
            if (c("Comparator.test", e, this.options.loose),
            this.semver === r || e === r)
                return !0;
            if ("string" == typeof e)
                try {
                    e = new u(e,this.options)
                } catch (e) {
                    return !1
                }
            return l(e, this.operator, this.semver, this.options)
        }
        intersects(e, t) {
            if (!(e instanceof i))
                throw new TypeError("a Comparator is required");
            if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }),
            "" === this.operator)
                return "" === this.value || new f(e.value,t).test(this.value);
            if ("" === e.operator)
                return "" === e.value || new f(this.value,t).test(e.semver);
            const n = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e.operator)
              , r = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e.operator)
              , s = this.semver.version === e.semver.version
              , o = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e.operator)
              , a = l(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator)
              , c = l(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
            return n || r || s && o || a || c
        }
    }
    e.exports = i;
    const s = n(30)
      , {re: o, t: a} = n(20)
      , l = n(69)
      , c = n(29)
      , u = n(3)
      , f = n(9)
}
, function(e, t, n) {
    const r = n(9);
    e.exports = (e,t,n)=>{
        try {
            t = new r(t,n)
        } catch (e) {
            return !1
        }
        return t.test(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isWin = /^win/.test(process.platform),
    t.flutterExecutableName = t.isWin ? "flutter.bat" : "flutter",
    t.flutterPath = "bin/" + t.flutterExecutableName,
    t.FLUTTER_CREATE_PROJECT_TRIGGER_FILE = "flutter.create"
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))((function(i, s) {
            function o(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    s(e)
                }
            }
            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    s(e)
                }
            }
            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(o, a)
            }
            l((r = r.apply(e, t || [])).next())
        }
        ))
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(12)
      , s = n(6)
      , o = n(34);
    t.forceWindowsDriveLetterToUppercase = function(e) {
        return e && o.isWin && s.isAbsolute(e) && e.charAt(0) === e.charAt(0).toLowerCase() && (e = e.substr(0, 1).toUpperCase() + e.substr(1)),
        e
    }
    ,
    t.isWithinPath = function(e, t) {
        const n = s.relative(t, e);
        return !!n && !n.startsWith("..") && !s.isAbsolute(n)
    }
    ,
    t.flatMap = function(e, t) {
        return e.reduce((e,n)=>e.concat(t(n)), [])
    }
    ,
    t.flatMapAsync = function(e, t) {
        return r(this, void 0, void 0, (function*() {
            let n = [];
            for (const r of e)
                n = n.concat(yield t(r));
            return n
        }
        ))
    }
    ,
    t.findFile = function(e, t) {
        let n, r = t;
        for (; r && r.length > 1 && r !== n; ) {
            const t = s.join(r, e);
            if (i.existsSync(t))
                return t;
            n = r,
            r = s.dirname(r)
        }
    }
    ,
    t.uriToFilePath = function(e, t=o.isWin) {
        let n = e;
        return e.startsWith("file://") ? n = decodeURI(e.substring(7)) : e.startsWith("file:") && (n = decodeURI(e.substring(5))),
        t ? (n = n.replace(/\//g, "\\"),
        "\\" === n[0] && (n = n.substring(1))) : "/" !== n[0] && (n = "/" + n),
        n
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(0)
      , i = o(n(4))
      , s = o(n(2));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class a extends i.default {
        constructor() {
            super(r.Type.COMMENT)
        }
        parse(e, t) {
            this.context = e;
            const n = this.parseComment(t);
            return this.range = new s.default(t,n),
            n
        }
    }
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = o(n(38))
      , i = o(n(39))
      , s = o(n(26));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = [r.default, i.default, s.default];
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(n(13))
      , i = s(n(58));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = {
        createNode: function(e, t, n) {
            const i = new r.default;
            if (t instanceof Map)
                for (const [r,s] of t)
                    i.items.push(e.createPair(r, s, n));
            else if (t && "object" == typeof t)
                for (const r of Object.keys(t))
                    i.items.push(e.createPair(r, t[r], n));
            return i
        },
        default: !0,
        nodeClass: r.default,
        tag: "tag:yaml.org,2002:map",
        resolve: i.default
    };
    t.default = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(n(60))
      , i = s(n(16));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = {
        createNode: function(e, t, n) {
            const r = new i.default;
            if (t && t[Symbol.iterator])
                for (const i of t) {
                    const t = e.createNode(i, n.wrapScalars, null, n);
                    r.items.push(t)
                }
            return r
        },
        default: !0,
        nodeClass: i.default,
        tag: "tag:yaml.org,2002:seq",
        resolve: r.default
    };
    t.default = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parsePairs = c,
    t.createPairs = u,
    t.default = void 0;
    var r = n(1)
      , i = l(n(13))
      , s = l(n(7))
      , o = l(n(60))
      , a = l(n(16));
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function c(e, t) {
        const n = (0,
        o.default)(e, t);
        for (let e = 0; e < n.items.length; ++e) {
            let o = n.items[e];
            if (!(o instanceof s.default)) {
                if (o instanceof i.default) {
                    if (o.items.length > 1) {
                        const e = "Each pair must have its own sequence indicator";
                        throw new r.YAMLSemanticError(t,e)
                    }
                    const e = o.items[0] || new s.default;
                    o.commentBefore && (e.commentBefore = e.commentBefore ? `${o.commentBefore}\n${e.commentBefore}` : o.commentBefore),
                    o.comment && (e.comment = e.comment ? `${o.comment}\n${e.comment}` : o.comment),
                    o = e
                }
                n.items[e] = o instanceof s.default ? o : new s.default(o)
            }
        }
        return n
    }
    function u(e, t, n) {
        const r = new a.default;
        r.tag = "tag:yaml.org,2002:pairs";
        for (const i of t) {
            let t, s;
            if (Array.isArray(i)) {
                if (2 !== i.length)
                    throw new TypeError("Expected [key, value] tuple: " + i);
                t = i[0],
                s = i[1]
            } else if (i && i instanceof Object) {
                const e = Object.keys(i);
                if (1 !== e.length)
                    throw new TypeError("Expected { key: value } tuple: " + i);
                t = e[0],
                s = i[t]
            } else
                t = i;
            const o = e.createPair(t, s, n);
            r.items.push(o)
        }
        return r
    }
    var f = {
        default: !1,
        tag: "tag:yaml.org,2002:pairs",
        resolve: c,
        createNode: u
    };
    t.default = f
}
, function(e, t) {
    e.exports = require("os")
}
, function(e, t) {
    const n = /^[0-9]+$/
      , r = (e,t)=>{
        const r = n.test(e)
          , i = n.test(t);
        return r && i && (e = +e,
        t = +t),
        e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1
    }
    ;
    e.exports = {
        compareIdentifiers: r,
        rcompareIdentifiers: (e,t)=>r(t, e)
    }
}
, function(e, t, n) {
    const r = n(8);
    e.exports = (e,t,n)=>0 === r(e, t, n)
}
, function(e, t, n) {
    const r = n(3);
    e.exports = (e,t,n)=>{
        const i = new r(e,n)
          , s = new r(t,n);
        return i.compare(s) || i.compareBuild(s)
    }
}
, function(e, t, n) {
    const r = n(8);
    e.exports = (e,t,n)=>r(e, t, n) < 0
}
, function(e, t, n) {
    const r = n(8);
    e.exports = (e,t,n)=>r(e, t, n) >= 0
}
, function(e, t, n) {
    const r = n(8);
    e.exports = (e,t,n)=>r(e, t, n) <= 0
}
, function(e, t, n) {
    const r = n(3)
      , i = n(32)
      , {ANY: s} = i
      , o = n(9)
      , a = n(33)
      , l = n(31)
      , c = n(45)
      , u = n(47)
      , f = n(46);
    e.exports = (e,t,n,d)=>{
        let h, p, g, m, v;
        switch (e = new r(e,d),
        t = new o(t,d),
        n) {
        case ">":
            h = l,
            p = u,
            g = c,
            m = ">",
            v = ">=";
            break;
        case "<":
            h = c,
            p = f,
            g = l,
            m = "<",
            v = "<=";
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (a(e, t, d))
            return !1;
        for (let n = 0; n < t.set.length; ++n) {
            const r = t.set[n];
            let o = null
              , a = null;
            if (r.forEach(e=>{
                e.semver === s && (e = new i(">=0.0.0")),
                o = o || e,
                a = a || e,
                h(e.semver, o.semver, d) ? o = e : g(e.semver, a.semver, d) && (a = e)
            }
            ),
            o.operator === m || o.operator === v)
                return !1;
            if ((!a.operator || a.operator === m) && p(e, a.semver))
                return !1;
            if (a.operator === v && g(e, a.semver))
                return !1
        }
        return !0
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))((function(i, s) {
            function o(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    s(e)
                }
            }
            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    s(e)
                }
            }
            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(o, a)
            }
            l((r = r.apply(e, t || [])).next())
        }
        ))
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(11)
      , s = n(6)
      , o = n(50)
      , a = n(91)
      , l = n(27)
      , c = n(93)
      , u = n(94)
      , f = n(95)
      , d = n(124)
      , h = n(132)
      , p = n(18)
      , g = n(70)
      , m = n(19)
      , v = n(67);
    let E = []
      , y = null;
    function O() {
        return r(this, void 0, void 0, (function*() {
            if (!i.workspace.workspaceFolders)
                return [];
            const e = [];
            for (const t of i.workspace.workspaceFolders) {
                const n = yield w(t);
                n && e.push(n)
            }
            return e
        }
        ))
    }
    function w(e) {
        return r(this, void 0, void 0, (function*() {
            if ((yield i.workspace.fs.readDirectory(e.uri)).some(e=>e[0] === p.PUBSPEC_YAML && e[1] === i.FileType.File)) {
                const t = i.Uri.file(s.join(e.uri.fsPath, p.PUBSPEC_YAML))
                  , n = yield i.workspace.fs.readFile(t)
                  , r = new l.TextDecoder
                  , a = o.parse(r.decode(n));
                if (!("flutter" === ((a.dependencies || {}).flutter || {}).sdk))
                    return;
                let f;
                if (a[p.EXTENSION_CONFIG]) {
                    const e = a[p.EXTENSION_CONFIG][p.EXTENSION_CONFIG_ENABLED]
                      , t = a[p.EXTENSION_CONFIG][p.EXTENSION_CONFIG_CLASS_NAME]
                      , n = a[p.EXTENSION_CONFIG][p.EXTENSION_CONFIG_MAIN_LOCALE]
                      , r = a[p.EXTENSION_CONFIG][p.EXTENSION_CONFIG_ARB_DIR]
                      , i = a[p.EXTENSION_CONFIG][p.EXTENSION_CONFIG_OUTPUT_DIR]
                      , s = a[p.EXTENSION_CONFIG][p.EXTENSION_CONFIG_USE_DEFERRED_LOADING]
                      , o = a[p.EXTENSION_CONFIG][p.EXTENSION_CONFIG_LOCALIZELY]
                      , l = o ? o[p.EXTENSION_CONFIG_LOCALIZELY_PROJECT_ID] : void 0
                      , c = o ? o[p.EXTENSION_CONFIG_LOCALIZELY_BRANCH] : void 0
                      , d = o ? o[p.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_OVERWRITE] : void 0
                      , h = o ? o[p.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_AS_REVIEWED] : void 0
                      , g = o ? o[p.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_TAG_ADDED] : void 0
                      , m = o ? o[p.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_TAG_UPDATED] : void 0
                      , v = o ? o[p.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_TAG_REMOVED] : void 0
                      , E = o ? o[p.EXTENSION_CONFIG_LOCALIZELY_DOWNLOAD_EMPTY_AS] : void 0
                      , y = o ? o[p.EXTENSION_CONFIG_LOCALIZELY_DOWNLOAD_INCLUDE_TAGS] : void 0
                      , O = o ? o[p.EXTENSION_CONFIG_LOCALIZELY_DOWNLOAD_EXCLUDE_TAGS] : void 0
                      , w = o ? o[p.EXTENSION_CONFIG_LOCALIZELY_OTA_ENABLED] : void 0
                      , _ = o ? new u.LocalizelyConfig(l,c,d,h,g,m,v,E,y,O,w) : void 0;
                    const arbPrefix = a[p.EXTENSION_CONFIG][p.EXTENSION_CONFIG_ARB_PREFIX];
                    const generate = a[p.EXTENSION_CONFIG][p.EXTENSION_CONFIG_GENERATE];
                    f = new u.PubspecConfig(arbPrefix,generate,e,t,n,r,i,s,_)
                }
                const d = g.getModules(e.uri.fsPath).filter(t=>t !== e.uri.fsPath);
                return new c.Project(e,d,f)
            }
        }
        ))
    }
    function _(e) {
        return r(this, void 0, void 0, (function*() {
            if (0 === e.length)
                return;
            if (1 === e.length)
                return e[0];
            const t = e.map(e=>e.getName())
              , n = yield i.window.showQuickPick(t, {
                canPickMany: !1,
                placeHolder: "Select project"
            });
            return n ? e.find(e=>e.getName() === n) : void 0
        }
        ))
    }
    function L(e) {
        var t, n, a, c, u, f, d, h, g, m, v, E, y, O, w, _, L, b, N, I, A, T, S, M, C, P, x, R, k, F, $, D, j, U;
        return r(this, void 0, void 0, (function*() {
            if ((yield i.workspace.fs.readDirectory(e.root.uri)).some(e=>e[0] === p.PUBSPEC_YAML && e[1] === i.FileType.File)) {
                const r = i.Uri.file(s.join(e.getPath(), p.PUBSPEC_YAML))
                  , B = yield i.workspace.fs.readFile(r)
                  , Y = new l.TextEncoder
                  , G = new l.TextDecoder
                  , W = o.parseDocument(G.decode(B), {
                    keepCstNodes: !0
                });
                let config = {};
                // 这在写啥? 意义不明...仿照着写, 不一定对
                if(e.config?.arbPrefix){
                    config = Object.assign(config, {
                        [p.EXTENSION_CONFIG_ARB_PREFIX]: e.config.arbPrefix
                    })
                }
                if(e.config?.generate){
                    config = Object.assign(config, {
                        [p.EXTENSION_CONFIG_GENERATE]: e.config.generate
                    })
                }
                config = Object.assign(config, void 0 !== (null === (t = e.config) || void 0 === t ? void 0 : t.enabled) ? {
                    [p.EXTENSION_CONFIG_ENABLED]: e.config.enabled
                } : {});
                config = Object.assign(config, void 0 !== (null === (a = null === (n = e) || void 0 === n ? void 0 : n.config) || void 0 === a ? void 0 : a.className) ? {
                    [p.EXTENSION_CONFIG_CLASS_NAME]: e.config.className
                } : {});
                config = Object.assign(config, void 0 !== (null === (u = null === (c = e) || void 0 === c ? void 0 : c.config) || void 0 === u ? void 0 : u.mainLocale) ? {
                    [p.EXTENSION_CONFIG_MAIN_LOCALE]: e.config.mainLocale
                } : {});
                config = Object.assign(config, void 0 !== (null === (d = null === (f = e) || void 0 === f ? void 0 : f.config) || void 0 === d ? void 0 : d.arbDir) ? {
                    [p.EXTENSION_CONFIG_ARB_DIR]: e.config.arbDir
                } : {});
                config = Object.assign(config, void 0 !== (null === (g = null === (h = e) || void 0 === h ? void 0 : h.config) || void 0 === g ? void 0 : g.outputDir) ? {
                    [p.EXTENSION_CONFIG_OUTPUT_DIR]: e.config.outputDir
                } : {});
                const $useDeferredLoading = Object.assign(config, void 0 !== (null === (v = null === (m = e) || void 0 === m ? void 0 : m.config) || void 0 === v ? void 0 : v.useDeferredLoading) ? {
                    [p.EXTENSION_CONFIG_USE_DEFERRED_LOADING]: e.config.useDeferredLoading
                } : {});
                W.set(p.EXTENSION_CONFIG, Object.assign($useDeferredLoading, void 0 !== (null === (y = null === (E = e.config) || void 0 === E ? void 0 : E.localizelyConfig) || void 0 === y ? void 0 : y.projectId) || void 0 !== (null === (w = null === (O = e.config) || void 0 === O ? void 0 : O.localizelyConfig) || void 0 === w ? void 0 : w.branch) || void 0 !== (null === (L = null === (_ = e.config) || void 0 === _ ? void 0 : _.localizelyConfig) || void 0 === L ? void 0 : L.uploadOverwrite) || void 0 !== (null === (N = null === (b = e.config) || void 0 === b ? void 0 : b.localizelyConfig) || void 0 === N ? void 0 : N.uploadAsReviewed) || void 0 !== (null === (A = null === (I = e.config) || void 0 === I ? void 0 : I.localizelyConfig) || void 0 === A ? void 0 : A.downloadEmptyAs) || void 0 !== (null === (S = null === (T = e.config) || void 0 === T ? void 0 : T.localizelyConfig) || void 0 === S ? void 0 : S.otaEnabled) ? {
                    [p.EXTENSION_CONFIG_LOCALIZELY]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, void 0 !== (null === (M = e.config.localizelyConfig) || void 0 === M ? void 0 : M.projectId) ? {
                        [p.EXTENSION_CONFIG_LOCALIZELY_PROJECT_ID]: e.config.localizelyConfig.projectId
                    } : {}), void 0 !== (null === (C = e.config.localizelyConfig) || void 0 === C ? void 0 : C.branch) ? {
                        [p.EXTENSION_CONFIG_LOCALIZELY_BRANCH]: e.config.localizelyConfig.branch
                    } : {}), void 0 !== (null === (P = e.config.localizelyConfig) || void 0 === P ? void 0 : P.uploadOverwrite) ? {
                        [p.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_OVERWRITE]: e.config.localizelyConfig.uploadOverwrite
                    } : {}), void 0 !== (null === (x = e.config.localizelyConfig) || void 0 === x ? void 0 : x.uploadAsReviewed) ? {
                        [p.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_AS_REVIEWED]: e.config.localizelyConfig.uploadAsReviewed
                    } : {}), void 0 !== (null === (R = e.config.localizelyConfig) || void 0 === R ? void 0 : R.uploadTagAdded) ? {
                        [p.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_TAG_ADDED]: e.config.localizelyConfig.uploadTagAdded
                    } : {}), void 0 !== (null === (k = e.config.localizelyConfig) || void 0 === k ? void 0 : k.uploadTagUpdated) ? {
                        [p.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_TAG_UPDATED]: e.config.localizelyConfig.uploadTagUpdated
                    } : {}), void 0 !== (null === (F = e.config.localizelyConfig) || void 0 === F ? void 0 : F.uploadTagRemoved) ? {
                        [p.EXTENSION_CONFIG_LOCALIZELY_UPLOAD_TAG_REMOVED]: e.config.localizelyConfig.uploadTagRemoved
                    } : {}), void 0 !== (null === ($ = e.config.localizelyConfig) || void 0 === $ ? void 0 : $.downloadEmptyAs) ? {
                        [p.EXTENSION_CONFIG_LOCALIZELY_DOWNLOAD_EMPTY_AS]: e.config.localizelyConfig.downloadEmptyAs
                    } : {}), void 0 !== (null === (D = e.config.localizelyConfig) || void 0 === D ? void 0 : D.downloadIncludeTags) ? {
                        [p.EXTENSION_CONFIG_LOCALIZELY_DOWNLOAD_INCLUDE_TAGS]: e.config.localizelyConfig.downloadIncludeTags
                    } : {}), void 0 !== (null === (j = e.config.localizelyConfig) || void 0 === j ? void 0 : j.downloadExcludeTags) ? {
                        [p.EXTENSION_CONFIG_LOCALIZELY_DOWNLOAD_EXCLUDE_TAGS]: e.config.localizelyConfig.downloadExcludeTags
                    } : {}), void 0 !== (null === (U = e.config.localizelyConfig) || void 0 === U ? void 0 : U.otaEnabled) ? {
                        [p.EXTENSION_CONFIG_LOCALIZELY_OTA_ENABLED]: e.config.localizelyConfig.otaEnabled
                    } : {})
                } : {})),
                yield i.workspace.fs.writeFile(r, Y.encode(String(W)))
            }
        }
        ))
    }
    function b(...e) {
        return r(this, void 0, void 0, (function*() {
            try {
                const e = yield O();
                if (0 === e.length)
                    return void i.window.showErrorMessage("No Flutter projects detected.");
                if (!(yield d.getFlutterSdkPath()))
                    return void i.window.showErrorMessage("Flutter SDK not available.");
                const t = e.filter(e=>!e.getEnabledConfig())
                  , n = yield _(t);
                n && (n.config ? n.config.enabled = !0 : n.config = new u.PubspecConfig(!0),
                yield L(n),
                m.info(`Flutter Intl extension enabled for the '${n.getName()}' project.`),
                E.push(n),
                y && (yield y.generate(n)))
            } catch (e) {
                i.window.showErrorMessage("Failed to initialize project.")
            }
        }
        ))
    }
    function N(...e) {
        return r(this, void 0, void 0, (function*() {
            try {
                if (!y)
                    return;
                if (0 === E.length)
                    return void i.window.showWarningMessage("No Flutter projects with Flutter Intl extension enabled.");
                const e = yield _(E);
                if (!e)
                    return;
                const t = yield i.window.showInputBox({
                    placeHolder: "e.g. en_GB",
                    validateInput: m.validateLocaleCode
                });
                if (!t)
                    return;
                yield y.createArbFile(e, t)
            } catch (e) {
                i.window.showErrorMessage("Failed to add locale.")
            }
        }
        ))
    }
    function I(...e) {
        return r(this, void 0, void 0, (function*() {
            try {
                if (!y)
                    return;
                if (0 === E.length)
                    return void i.window.showWarningMessage("No Flutter projects with Flutter Intl extension enabled.");
                const e = yield _(E);
                if (!e)
                    return;
                const t = yield g.getArbFiles(e)
                  , n = e.getMainLocaleConfig() + " (main)"
                  , r = t.map(e=>s.basename(e.fsPath, ".arb").substring(5)).filter(e=>m.isValidLocale(e)).map(t=>t === e.getMainLocaleConfig() ? n : t);
                if (0 === r.length)
                    return void i.window.showWarningMessage(`No locales detected within the '${_.name}' project.`);
                const o = yield i.window.showQuickPick(r, {
                    canPickMany: !1,
                    placeHolder: "Select locale"
                });
                if (!o)
                    return;
                if (o === n)
                    return void i.window.showWarningMessage("The main locale can't be deleted.");
                yield y.removeArbFile(e, o)
            } catch (e) {
                i.window.showErrorMessage("Failed to remove locale.")
            }
        }
        ))
    }
    function A(...e) {
        var t, n;
        return r(this, void 0, void 0, (function*() {
            try {
                if (0 === E.length)
                    return void i.window.showWarningMessage("No Flutter projects with Flutter Intl extension enabled.");
                const e = yield _(E);
                if (!e)
                    return;
                let r = null === (n = null === (t = e.config) || void 0 === t ? void 0 : t.localizelyConfig) || void 0 === n ? void 0 : n.projectId
                  , s = g.getLocalizelyApiToken();
                if (r && s) {
                    const e = "Disconnect from Localizely"
                      , t = "Update connection config";
                    if ((yield i.window.showQuickPick([e, t], {
                        canPickMany: !1,
                        placeHolder: "Already connected to the Localizely"
                    })) === e)
                        return void (yield i.commands.executeCommand("flutterIntl.localizelyDisconnect"))
                }
                if (r = yield i.window.showInputBox({
                    ignoreFocusOut: !0,
                    prompt: "Enter project ID",
                    placeHolder: "Project ID",
                    value: r || "",
                    validateInput: m.validateProjectId
                }),
                !r)
                    return;
                if (s = yield i.window.showInputBox({
                    ignoreFocusOut: !0,
                    prompt: "Enter API token",
                    placeHolder: "API token",
                    value: s || "",
                    password: !0,
                    validateInput: m.validateApiToken
                }),
                !s)
                    return;
                e.config && (e.config.localizelyConfig = Object.assign(Object.assign({}, e.config.localizelyConfig || {}), {
                    projectId: r
                })),
                yield L(e),
                g.updateLocalizelyApiToken(s)
            } catch (e) {
                i.window.showErrorMessage("Failed to connect to Localizely")
            }
        }
        ))
    }
    function T(...e) {
        var t, n, s;
        return r(this, void 0, void 0, (function*() {
            try {
                if (0 === E.length)
                    return void i.window.showWarningMessage("No Flutter projects with Flutter Intl extension enabled.");
                const e = yield _(E);
                if (!e)
                    return;
                if (!(null === (n = null === (t = e.config) || void 0 === t ? void 0 : t.localizelyConfig) || void 0 === n ? void 0 : n.projectId)) {
                    const t = "Connect to Localizely";
                    return (yield i.window.showInformationMessage(`The '${e.getName()}' project is not connected to the Localizely`, t)) === t ? void i.commands.executeCommand("flutterIntl.localizelyConnect") : void 0
                }
                (null === (s = e.config) || void 0 === s ? void 0 : s.localizelyConfig) && (e.config.localizelyConfig.projectId = void 0),
                yield L(e)
            } catch (e) {
                i.window.showErrorMessage("Failed to disconnect from Localizely")
            }
        }
        ))
    }
    function S(...e) {
        return r(this, void 0, void 0, (function*() {
            try {
                yield a(p.LOCALIZELY_LEARN_MORE_PAGE)
            } catch (e) {
                i.window.showErrorMessage("Failed to open 'Learn more' page")
            }
        }
        ))
    }
    function M(...e) {
        var t, n;
        return r(this, void 0, void 0, (function*() {
            try {
                if (!y)
                    return;
                if (0 === E.length)
                    return void i.window.showWarningMessage("No Flutter projects with Flutter Intl extension enabled.");
                const e = yield _(E);
                if (!e)
                    return;
                const r = null === (n = null === (t = e.config) || void 0 === t ? void 0 : t.localizelyConfig) || void 0 === n ? void 0 : n.projectId
                  , s = g.getLocalizelyApiToken();
                if (!r || !s) {
                    const t = "Connect to Localizely";
                    return (yield i.window.showInformationMessage(`The project '${e.getName()}' is not connected to the Localizely`, t)) === t ? void i.commands.executeCommand("flutterIntl.localizelyConnect") : void 0
                }
                const o = yield y.uploadMain(e);
                if (!o)
                    return void i.window.showErrorMessage(`Failed to upload main ARB file to Localizely for the '${e.getName()}' project due to a lack of required dependencies.`);
                o.isSuccess() ? (m.info(o.message),
                i.window.showInformationMessage(o.message)) : (m.error(o.message),
                i.window.showErrorMessage(o.message))
            } catch (e) {
                i.window.showErrorMessage("Failed to upload main ARB file to Localizely")
            }
        }
        ))
    }
    function C(...e) {
        var t, n;
        return r(this, void 0, void 0, (function*() {
            try {
                if (!y)
                    return;
                if (0 === E.length)
                    return void i.window.showWarningMessage("No Flutter projects with Flutter Intl extension enabled.");
                const e = yield _(E);
                if (!e)
                    return;
                const r = null === (n = null === (t = e.config) || void 0 === t ? void 0 : t.localizelyConfig) || void 0 === n ? void 0 : n.projectId
                  , s = g.getLocalizelyApiToken();
                if (!r || !s) {
                    const t = "Connect to Localizely";
                    return (yield i.window.showInformationMessage(`The project '${e.getName()}' is not connected to the Localizely`, t)) === t ? void i.commands.executeCommand("flutterIntl.localizelyConnect") : void 0
                }
                const o = yield y.download(e);
                if (!o)
                    return void i.window.showErrorMessage(`Failed to download ARB files from Localizely for the '${e.getName()}' project due to a lack of required dependencies.`);
                o.isSuccess() ? (m.info(o.message),
                i.window.showInformationMessage(o.message),
                yield y.generate(e)) : (m.error(o.message),
                i.window.showErrorMessage(o.message))
            } catch (e) {
                i.window.showErrorMessage("Failed to download ARB files from Localizely")
            }
        }
        ))
    }
    function P(e, t) {
        return r(this, void 0, void 0, (function*() {
            try {
                if (!y)
                    return;
                const n = E.find(t=>e.uri.fsPath.startsWith(t.getPath()));
                if (!n)
                    return;
                const r = new i.Range(t.start.translate(0, 1),t.end.translate(0, -1))
                  , s = e.getText(r)
                  , o = yield i.window.showInputBox({
                    value: m.generateStringKeyFromMarkedValue(s),
                    placeHolder: "Enter string key",
                    validateInput: m.validateStringKey
                });
                if (!o)
                    return;
                yield g.updateArbFiles(n, o, s),
                yield g.updateDartFile(e, t, `${n.getClassNameConfig()}.of(context).${o}`),
                yield y.generate(n)
            } catch (e) {
                i.window.showErrorMessage("Failed to extract string key to ARB files")
            }
        }
        ))
    }
    function x(e) {
        return r(this, void 0, void 0, (function*() {
            try {
                if (!y)
                    return;
                const {fileName: t} = e;
                if (g.checkIsArbFile(t)) {
                    const e = E.find(e=>t.startsWith(e.getPath()));
                    if (!e)
                        return;
                    if (g.checkIsArbFileFromArbDir(e, t))
                        yield y.generate(e);
                    else if (g.checkIsArbFileFromModule(e, t)) {
                        const n = e.modules.find(e=>t.startsWith(e));
                        if (!n)
                            return;
                        if (!v.checkIsExtensionEnabled(n))
                            return;
                        yield y.generateProjectModule(e, n)
                    }
                } else if (g.checkIsPubspecFile(t)) {
                    const e = (yield O()).find(e=>e.getPath() === s.dirname(t));
                    if (e) {
                        const t = e.getEnabledConfig()
                          , n = E.find(t=>t.getPath() === e.getPath());
                        n && !t ? (E = E.filter(t=>t.getPath() !== e.getPath()),
                        m.info(`Flutter Intl extension disabled for the '${e.getName()}' project.`)) : n && t ? (n.config = e.config,
                        yield y.generate(n)) : !n && t && (E.push(e),
                        m.info(`Flutter Intl extension enabled for the '${e.getName()}' project.`),
                        yield y.generate(e))
                    }
                }
            } catch (e) {
                i.window.showErrorMessage("Failed to update project on file save.")
            }
        }
        ))
    }
    function R(e) {
        return r(this, void 0, void 0, (function*() {
            try {
                if (!y)
                    return;
                for (const t of e.added) {
                    const e = yield w(t);
                    e && e.getEnabledConfig() && (E.push(e),
                    yield y.generate(e))
                }
                for (const t of e.removed) {
                    const e = yield w(t);
                    e && (E = E.filter(t=>t.getPath() !== e.getPath()))
                }
            } catch (e) {
                i.window.showErrorMessage("Failed to update extension on workspace change.")
            }
        }
        ))
    }
    function k(e) {
        return r(this, void 0, void 0, (function*() {
            try {
                if (!y)
                    return;
                const t = e.fsPath
                  , n = E.find(e=>t.startsWith(e.getPath()));
                if (!n)
                    return;
                g.checkIsArbDir(n, t) && (m.warning(`Enabled extension requires the '${n.getArbDirConfig()}' directory within the '${n.getName()}' project.`),
                yield y.generate(n))
            } catch (e) {
                i.window.showErrorMessage("Failed to generate localization files.")
            }
        }
        ))
    }
    function F(e) {
        return r(this, void 0, void 0, (function*() {
            try {
                if (!y)
                    return;
                const t = e.fsPath
                  , n = E.find(e=>t.startsWith(e.getPath()));
                if (!n)
                    return;
                if (g.checkIsArbFileFromArbDir(n, t)) {
                    if (g.extractLocaleFromArbFilePath(t, n) === n.getMainLocaleConfig())
                        return;
                    yield y.generate(n)
                } else if (g.checkIsArbFileFromModule(n, t)) {
                    const e = n.modules.find(e=>t.startsWith(e));
                    if (!e)
                        return;
                    if (!v.checkIsExtensionEnabled(e))
                        return;
                    yield y.generateProjectModule(n, e)
                }
            } catch (e) {
                i.window.showErrorMessage("Failed to generate localization files.")
            }
        }
        ))
    }
    function $(e) {
        return r(this, void 0, void 0, (function*() {
            try {
                if (!y)
                    return;
                const t = e.fsPath
                  , n = E.find(e=>t.startsWith(e.getPath()));
                if (!n)
                    return;
                if (g.checkIsArbFileFromArbDir(n, t)) {
                    const e = g.extractLocaleFromArbFilePath(t, n);
                    if (e === n.getMainLocaleConfig()) {
                        const t = `${n.getArbPrefixConfig()}_${e}.arb`;
                        m.warning(`Enabled extension requires the '${t}' file within the arb directory of the '${n.getName()}' project.`)
                    }
                    yield y.generate(n)
                } else if (g.checkIsArbFileFromModule(n, t)) {
                    const e = n.modules.find(e=>t.startsWith(e));
                    if (!e)
                        return;
                    if (!v.checkIsExtensionEnabled(e))
                        return;
                    yield y.generateProjectModule(n, e)
                }
            } catch (e) {
                i.window.showErrorMessage("Failed to generate localization files.")
            }
        }
        ))
    }
    t.isExtensionEnabledForDocument = function(e) {
        const t = e.uri.fsPath;
        return E.some(e=>t.startsWith(e.getPath()))
    }
    ,
    t.activate = function(e) {
        return r(this, void 0, void 0, (function*() {
            const {commands: {registerCommand: t}, languages: {registerCodeActionsProvider: n}} = i;
            try {
                yield function() {
                    return r(this, void 0, void 0, (function*() {
                        if (y)
                            return;
                        const e = yield O();
                        if (0 === e.length)
                            return;
                        const t = yield d.getFlutterSdkPath();
                        if (t) {
                            E = [];
                            for (const t of e) {
                                t.getEnabledConfig() && (m.info(`Flutter Intl extension enabled for the '${t.getName()}' project.`),
                                E.push(t))
                            }
                            y = new f.Generator(t)
                        }
                    }
                    ))
                }(),
                y && (yield y.generateAll(E)),
                e.subscriptions.push(t("flutterIntl.initialize", b)),
                e.subscriptions.push(t("flutterIntl.addLocale", N)),
                e.subscriptions.push(t("flutterIntl.removeLocale", I)),
                e.subscriptions.push(t("flutterIntl.localizelyConnect", A)),
                e.subscriptions.push(t("flutterIntl.localizelyDisconnect", T)),
                e.subscriptions.push(t("flutterIntl.localizelyLearnMore", S)),
                e.subscriptions.push(t("flutterIntl.localizelyUploadMain", M)),
                e.subscriptions.push(t("flutterIntl.localizelyDownload", C)),
                e.subscriptions.push(t("flutterIntl.extractToArb", P)),
                e.subscriptions.push(n({
                    language: "dart",
                    scheme: "file"
                }, new h.ExtractCodeActionProvider, {
                    providedCodeActionKinds: h.ExtractCodeActionProvider.providedCodeActionKinds
                })),
                i.workspace.onDidSaveTextDocument(x),
                i.workspace.onDidChangeWorkspaceFolders(R);
                const s = "**/*";
                i.workspace.createFileSystemWatcher(s, !0, !0, !1).onDidDelete(k);
                const o = "**/*_*.arb"
                  , a = i.workspace.createFileSystemWatcher(o, !1, !0, !1);
                a.onDidCreate(F),
                a.onDidDelete($)
            } catch (e) {
                i.window.showErrorMessage("Failed to activate Flutter Intl extension.")
            }
        }
        ))
    }
    ,
    t.deactivate = function() {
        E = [],
        y = null
    }
}
, function(e, t, n) {
    e.exports = n(73).default
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        const t = [0];
        let n = e.indexOf("\n");
        for (; -1 !== n; )
            n += 1,
            t.push(n),
            n = e.indexOf("\n", n);
        return t
    }
    function i(e) {
        let t, n;
        return "string" == typeof e ? (t = r(e),
        n = e) : (Array.isArray(e) && (e = e[0]),
        e && e.context && (e.lineStarts || (e.lineStarts = r(e.context.src)),
        t = e.lineStarts,
        n = e.context.src)),
        {
            lineStarts: t,
            src: n
        }
    }
    function s(e, t) {
        const {lineStarts: n, src: r} = i(t);
        if (!n || !(e >= 1) || e > n.length)
            return null;
        const s = n[e - 1];
        let o = n[e];
        for (; o && o > s && "\n" === r[o - 1]; )
            --o;
        return r.slice(s, o)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getLinePos = function(e, t) {
        if ("number" != typeof e || e < 0)
            return null;
        const {lineStarts: n, src: r} = i(t);
        if (!n || !r || e > r.length)
            return null;
        for (let t = 0; t < n.length; ++t) {
            const r = n[t];
            if (e < r)
                return {
                    line: t,
                    col: e - n[t - 1] + 1
                };
            if (e === r)
                return {
                    line: t + 1,
                    col: 1
                }
        }
        const s = n.length;
        return {
            line: s,
            col: e - n[s - 1] + 1
        }
    }
    ,
    t.getLine = s,
    t.getPrettyContext = function({start: e, end: t}, n, r=80) {
        let i = s(e.line, n);
        if (!i)
            return null;
        let {col: o} = e;
        if (i.length > r)
            if (o <= r - 10)
                i = i.substr(0, r - 1) + "…";
            else {
                const e = Math.round(r / 2);
                i.length > o + e && (i = i.substr(0, o + e - 1) + "…"),
                o -= i.length - r,
                i = "…" + i.substr(1 - r)
            }
        let a = 1
          , l = "";
        t && (t.line === e.line && o + (t.col - e.col) <= r + 1 ? a = t.col - e.col : (a = Math.min(i.length + 1, r) - o,
        l = "…"));
        const c = o > 1 ? " ".repeat(o - 1) : ""
          , u = "^".repeat(a);
        return `${i}\n${c}${u}${l}`
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.grabCollectionEndComments = u,
    t.default = void 0;
    var r = n(0)
      , i = c(n(23))
      , s = c(n(53))
      , o = c(n(36))
      , a = c(n(4))
      , l = c(n(2));
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function u(e) {
        let t = e;
        for (; t instanceof s.default; )
            t = t.node;
        if (!(t instanceof f))
            return null;
        const n = t.items.length;
        let i = -1;
        for (let e = n - 1; e >= 0; --e) {
            const n = t.items[e];
            if (n.type === r.Type.COMMENT) {
                const {indent: t, lineStart: r} = n.context;
                if (t > 0 && n.range.start >= r + t)
                    break;
                i = e
            } else {
                if (n.type !== r.Type.BLANK_LINE)
                    break;
                i = e
            }
        }
        if (-1 === i)
            return null;
        const o = t.items.splice(i, n - i)
          , a = o[0].range.start;
        for (; t.range.end = a,
        t.valueRange && t.valueRange.end > a && (t.valueRange.end = a),
        t !== e; )
            t = t.context.parent;
        return o
    }
    class f extends a.default {
        static nextContentHasIndent(e, t, n) {
            const r = a.default.endOfLine(e, t) + 1
              , i = e[t = a.default.endOfWhiteSpace(e, r)];
            return !!i && (t >= r + n || ("#" === i || "\n" === i) && f.nextContentHasIndent(e, t, n))
        }
        constructor(e) {
            super(e.type === r.Type.SEQ_ITEM ? r.Type.SEQ : r.Type.MAP);
            for (let t = e.props.length - 1; t >= 0; --t)
                if (e.props[t].start < e.context.lineStart) {
                    this.props = e.props.slice(0, t + 1),
                    e.props = e.props.slice(t + 1);
                    const n = e.props[0] || e.valueRange;
                    e.range.start = n.start;
                    break
                }
            this.items = [e];
            const t = u(e);
            t && Array.prototype.push.apply(this.items, t)
        }
        get includesTrailingLines() {
            return this.items.length > 0
        }
        parse(e, t) {
            this.context = e;
            const {parseNode: n, src: s} = e;
            let c = a.default.startOfLine(s, t);
            const d = this.items[0];
            d.context.parent = this,
            this.valueRange = l.default.copy(d.valueRange);
            const h = d.range.start - d.context.lineStart;
            let p = t;
            p = a.default.normalizeOffset(s, p);
            let g = s[p]
              , m = a.default.endOfWhiteSpace(s, c) === p
              , v = !1;
            for (; g; ) {
                for (; "\n" === g || "#" === g; ) {
                    if (m && "\n" === g && !v) {
                        const e = new i.default;
                        if (p = e.parse({
                            src: s
                        }, p),
                        this.valueRange.end = p,
                        p >= s.length) {
                            g = null;
                            break
                        }
                        this.items.push(e),
                        p -= 1
                    } else if ("#" === g) {
                        if (p < c + h && !f.nextContentHasIndent(s, p, h))
                            return p;
                        const e = new o.default;
                        if (p = e.parse({
                            indent: h,
                            lineStart: c,
                            src: s
                        }, p),
                        this.items.push(e),
                        this.valueRange.end = p,
                        p >= s.length) {
                            g = null;
                            break
                        }
                    }
                    if (c = p + 1,
                    p = a.default.endOfIndent(s, c),
                    a.default.atBlank(s, p)) {
                        const e = a.default.endOfWhiteSpace(s, p)
                          , t = s[e];
                        t && "\n" !== t && "#" !== t || (p = e)
                    }
                    g = s[p],
                    m = !0
                }
                if (!g)
                    break;
                if (p !== c + h && (m || ":" !== g)) {
                    c > t && (p = c);
                    break
                }
                if (d.type === r.Type.SEQ_ITEM != ("-" === g)) {
                    let e = !0;
                    if ("-" === g) {
                        const t = s[p + 1];
                        e = !t || "\n" === t || "\t" === t || " " === t
                    }
                    if (e) {
                        c > t && (p = c);
                        break
                    }
                }
                const e = n({
                    atLineStart: m,
                    inCollection: !0,
                    indent: h,
                    lineStart: c,
                    parent: this
                }, p);
                if (!e)
                    return p;
                if (this.items.push(e),
                this.valueRange.end = e.valueRange.end,
                p = a.default.normalizeOffset(s, e.range.end),
                g = s[p],
                m = !1,
                v = e.includesTrailingLines,
                g) {
                    let e = p - 1
                      , t = s[e];
                    for (; " " === t || "\t" === t; )
                        t = s[--e];
                    "\n" === t && (c = e + 1,
                    m = !0)
                }
                const l = u(e);
                l && Array.prototype.push.apply(this.items, l)
            }
            return p
        }
        setOrigRanges(e, t) {
            return t = super.setOrigRanges(e, t),
            this.items.forEach(n=>{
                t = n.setOrigRanges(e, t)
            }
            ),
            t
        }
        toString() {
            const {context: {src: e}, items: t, range: n, value: r} = this;
            if (null != r)
                return r;
            let i = e.slice(n.start, t[0].range.start) + String(t[0]);
            for (let e = 1; e < t.length; ++e) {
                const n = t[e]
                  , {atLineStart: r, indent: s} = n.context;
                if (r)
                    for (let e = 0; e < s; ++e)
                        i += " ";
                i += String(n)
            }
            return a.default.addStringTerminator(e, n.end, i)
        }
    }
    t.default = f
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(0)
      , i = n(1)
      , s = l(n(23))
      , o = l(n(4))
      , a = l(n(2));
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class c extends o.default {
        constructor(e, t) {
            super(e, t),
            this.node = null
        }
        get includesTrailingLines() {
            return !!this.node && this.node.includesTrailingLines
        }
        parse(e, t) {
            this.context = e;
            const {parseNode: n, src: l} = e;
            let {atLineStart: c, lineStart: u} = e;
            c || this.type !== r.Type.SEQ_ITEM || (this.error = new i.YAMLSemanticError(this,"Sequence items must not have preceding content on the same line"));
            const f = c ? t - u : e.indent;
            let d = o.default.endOfWhiteSpace(l, t + 1)
              , h = l[d];
            const p = "#" === h
              , g = [];
            let m = null;
            for (; "\n" === h || "#" === h; ) {
                if ("#" === h) {
                    const e = o.default.endOfLine(l, d + 1);
                    g.push(new a.default(d,e)),
                    d = e
                } else {
                    c = !0,
                    u = d + 1;
                    "\n" === l[o.default.endOfWhiteSpace(l, u)] && 0 === g.length && (m = new s.default,
                    u = m.parse({
                        src: l
                    }, u)),
                    d = o.default.endOfIndent(l, u)
                }
                h = l[d]
            }
            if (o.default.nextNodeIsIndented(h, d - (u + f), this.type !== r.Type.SEQ_ITEM) ? this.node = n({
                atLineStart: c,
                inCollection: !1,
                indent: f,
                lineStart: u,
                parent: this
            }, d) : h && u > t + 1 && (d = u - 1),
            this.node) {
                if (m) {
                    const t = e.parent.items || e.parent.contents;
                    t && t.push(m)
                }
                g.length && Array.prototype.push.apply(this.props, g),
                d = this.node.range.end
            } else if (p) {
                const e = g[0];
                this.props.push(e),
                d = e.end
            } else
                d = o.default.endOfLine(l, t + 1);
            const v = this.node ? this.node.valueRange.end : d;
            return this.valueRange = new a.default(t,v),
            d
        }
        setOrigRanges(e, t) {
            return t = super.setOrigRanges(e, t),
            this.node ? this.node.setOrigRanges(e, t) : t
        }
        toString() {
            const {context: {src: e}, node: t, range: n, value: r} = this;
            if (null != r)
                return r;
            const i = t ? e.slice(n.start, t.range.start) + String(t) : e.slice(n.start, n.end);
            return o.default.addStringTerminator(e, n.end, i)
        }
    }
    t.default = c
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(n(4))
      , i = s(n(2));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class o extends r.default {
        static endOfLine(e, t, n) {
            let r = e[t]
              , i = t;
            for (; r && "\n" !== r && (!n || "[" !== r && "]" !== r && "{" !== r && "}" !== r && "," !== r); ) {
                const t = e[i + 1];
                if (":" === r && (!t || "\n" === t || "\t" === t || " " === t || n && "," === t))
                    break;
                if ((" " === r || "\t" === r) && "#" === t)
                    break;
                i += 1,
                r = t
            }
            return i
        }
        get strValue() {
            if (!this.valueRange || !this.context)
                return null;
            let {start: e, end: t} = this.valueRange;
            const {src: n} = this.context;
            let i = n[t - 1];
            for (; e < t && ("\n" === i || "\t" === i || " " === i); )
                i = n[--t - 1];
            for (i = n[e]; e < t && ("\n" === i || "\t" === i || " " === i); )
                i = n[++e];
            let s = "";
            for (let i = e; i < t; ++i) {
                const e = n[i];
                if ("\n" === e) {
                    const {fold: e, offset: t} = r.default.foldNewline(n, i, -1);
                    s += e,
                    i = t
                } else if (" " === e || "\t" === e) {
                    const r = i;
                    let o = n[i + 1];
                    for (; i < t && (" " === o || "\t" === o); )
                        i += 1,
                        o = n[i + 1];
                    "\n" !== o && (s += i > r ? n.slice(r, i + 1) : e)
                } else
                    s += e
            }
            return s
        }
        parseBlockValue(e) {
            const {indent: t, inFlow: n, src: i} = this.context;
            let s = e
              , a = e;
            for (let e = i[s]; "\n" === e && !r.default.atDocumentBoundary(i, s + 1); e = i[s]) {
                const e = r.default.endOfBlockIndent(i, t, s + 1);
                if (null === e || "#" === i[e])
                    break;
                "\n" === i[e] ? s = e : (a = o.endOfLine(i, e, n),
                s = a)
            }
            return this.valueRange.isEmpty() && (this.valueRange.start = e),
            this.valueRange.end = a,
            a
        }
        parse(e, t) {
            this.context = e;
            const {inFlow: n, src: s} = e;
            let a = t;
            const l = s[a];
            return l && "#" !== l && "\n" !== l && (a = o.endOfLine(s, t, n)),
            this.valueRange = new i.default(t,a),
            a = r.default.endOfWhiteSpace(s, a),
            a = this.parseComment(a),
            this.hasComment && !this.valueRange.isEmpty() || (a = this.parseBlockValue(a)),
            a
        }
    }
    t.default = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = t.MERGE_KEY = void 0;
    var r = a(n(13))
      , i = a(n(7))
      , s = a(n(5))
      , o = a(n(16));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.MERGE_KEY = "<<";
    class l extends i.default {
        constructor(e) {
            if (e instanceof i.default) {
                let t = e.value;
                t instanceof o.default || (t = new o.default,
                t.items.push(e.value),
                t.range = e.value.range),
                super(e.key, t),
                this.range = e.range
            } else
                super(new s.default("<<"), new o.default);
            this.type = "MERGE_PAIR"
        }
        addToJSMap(e, t) {
            for (const {source: n} of this.value.items) {
                if (!(n instanceof r.default))
                    throw new Error("Merge sources must be maps");
                const i = n.toJSON(null, e, Map);
                for (const [e,n] of i)
                    t instanceof Map ? t.has(e) || t.set(e, n) : t instanceof Set ? t.add(e) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = n)
            }
            return t
        }
        toString(e, t) {
            const n = this.value;
            if (n.items.length > 1)
                return super.toString(e, t);
            this.value = n.items[0];
            const r = super.toString(e, t);
            return this.value = n,
            r
        }
    }
    t.default = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(57)
      , i = n(0)
      , s = n(1)
      , o = n(17)
      , a = n(87)
      , l = n(26)
      , c = p(n(25))
      , u = p(n(10))
      , f = p(n(15))
      , d = p(n(7))
      , h = p(n(5));
    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    class m {
        constructor({customTags: e, merge: t, schema: n, tags: i}) {
            if (this.merge = !!t,
            this.name = n,
            this.tags = a.schemas[n.replace(/\W/g, "")],
            !this.tags) {
                const e = Object.keys(a.schemas).map(e=>JSON.stringify(e)).join(", ");
                throw new Error(`Unknown schema "${n}"; use one of ${e}`)
            }
            if (!e && i && (e = i,
            (0,
            r.warnOptionDeprecation)("tags", "customTags")),
            Array.isArray(e))
                for (const t of e)
                    this.tags = this.tags.concat(t);
            else
                "function" == typeof e && (this.tags = e(this.tags.slice()));
            for (let e = 0; e < this.tags.length; ++e) {
                const t = this.tags[e];
                if ("string" == typeof t) {
                    const n = a.tags[t];
                    if (!n) {
                        const e = Object.keys(a.tags).map(e=>JSON.stringify(e)).join(", ");
                        throw new Error(`Unknown custom tag "${t}"; use one of ${e}`)
                    }
                    this.tags[e] = n
                }
            }
        }
        createNode(e, t, n, r) {
            if (e instanceof f.default)
                return e;
            let i;
            if (n) {
                n.startsWith("!!") && (n = m.defaultPrefix + n.slice(2));
                const e = this.tags.filter(e=>e.tag === n);
                if (i = e.find(e=>!e.format) || e[0],
                !i)
                    throw new Error(`Tag ${n} not found`)
            } else if (i = this.tags.find(t=>(t.identify && t.identify(e) || t.class && e instanceof t.class) && !t.format),
            !i) {
                if ("function" == typeof e.toJSON && (e = e.toJSON()),
                "object" != typeof e)
                    return t ? new h.default(e) : e;
                i = e instanceof Map ? a.tags.map : e[Symbol.iterator] ? a.tags.seq : a.tags.map
            }
            r ? r.wrapScalars = t : r = {
                wrapScalars: t
            },
            r.onTagObj && (r.onTagObj(i),
            delete r.onTagObj);
            const s = {};
            if (e && "object" == typeof e && r.prevObjects) {
                const t = r.prevObjects.find(t=>t.value === e);
                if (t) {
                    const e = new c.default(t);
                    return r.aliasNodes.push(e),
                    e
                }
                s.value = e,
                r.prevObjects.push(s)
            }
            return s.node = i.createNode ? i.createNode(this, e, r) : t ? new h.default(e) : e,
            s.node
        }
        createPair(e, t, n) {
            const r = this.createNode(e, n.wrapScalars, null, n)
              , i = this.createNode(t, n.wrapScalars, null, n);
            return new d.default(r,i)
        }
        resolveScalar(e, t) {
            t || (t = this.tags);
            for (let n = 0; n < t.length; ++n) {
                const {format: r, test: i, resolve: s} = t[n];
                if (i) {
                    const t = e.match(i);
                    if (t) {
                        let e = s.apply(null, t);
                        return e instanceof h.default || (e = new h.default(e)),
                        r && (e.format = r),
                        e
                    }
                }
            }
            return this.tags.scalarFallback && (e = this.tags.scalarFallback(e)),
            new h.default(e)
        }
        resolveNode(e, t, n) {
            const r = this.tags.filter(({tag: e})=>e === n)
              , i = r.find(({test: e})=>!e);
            t.error && e.errors.push(t.error);
            try {
                if (i) {
                    let n = i.resolve(e, t);
                    n instanceof u.default || (n = new h.default(n)),
                    t.resolved = n
                } else {
                    const n = (0,
                    l.resolveString)(e, t);
                    "string" == typeof n && r.length > 0 && (t.resolved = this.resolveScalar(n, r))
                }
            } catch (n) {
                n.source || (n.source = t),
                e.errors.push(n),
                t.resolved = null
            }
            return t.resolved ? (n && t.tag && (t.resolved.tag = n),
            t.resolved) : null
        }
        resolveNodeWithFallback(e, t, n) {
            const r = this.resolveNode(e, t, n);
            if (Object.prototype.hasOwnProperty.call(t, "resolved"))
                return r;
            const o = (({type: e})=>e === i.Type.FLOW_MAP || e === i.Type.MAP)(t) ? m.defaultTags.MAP : (({type: e})=>e === i.Type.FLOW_SEQ || e === i.Type.SEQ)(t) ? m.defaultTags.SEQ : m.defaultTags.STR;
            if (o) {
                e.warnings.push(new s.YAMLWarning(t,`The tag ${n} is unavailable, falling back to ${o}`));
                const r = this.resolveNode(e, t, o);
                return r.tag = n,
                r
            }
            return e.errors.push(new s.YAMLReferenceError(t,`The tag ${n} is unavailable`)),
            null
        }
        getTagObject(e) {
            if (e instanceof c.default)
                return c.default;
            if (e.tag) {
                const t = this.tags.filter(t=>t.tag === e.tag);
                if (t.length > 0)
                    return t.find(t=>t.format === e.format) || t[0]
            }
            let t, n;
            if (e instanceof h.default) {
                n = e.value;
                const r = this.tags.filter(e=>e.identify && e.identify(n) || e.class && n instanceof e.class);
                t = r.find(t=>t.format === e.format) || r.find(e=>!e.format)
            } else
                n = e,
                t = this.tags.find(e=>e.nodeClass && n instanceof e.nodeClass);
            if (!t) {
                const e = n && n.constructor ? n.constructor.name : typeof n;
                throw new Error(`Tag not resolved for ${e} value`)
            }
            return t
        }
        stringifyProps(e, t, {anchors: n, doc: r}) {
            const i = []
              , s = r.anchors.getName(e);
            return s && (n[s] = e,
            i.push("&" + s)),
            e.tag ? i.push(r.stringifyTag(e.tag)) : t.default || i.push(r.stringifyTag(t.tag)),
            i.join(" ")
        }
        stringify(e, t, n, r) {
            let i;
            if (!(e instanceof f.default)) {
                const n = {
                    aliasNodes: [],
                    onTagObj: e=>i = e,
                    prevObjects: []
                };
                e = this.createNode(e, !0, null, n);
                const {anchors: r} = t.doc;
                for (const e of n.aliasNodes) {
                    e.source = e.source.node;
                    let t = r.getName(e.source);
                    t || (t = r.newName(),
                    r.map[t] = e.source)
                }
            }
            if (t.tags = this,
            e instanceof d.default)
                return e.toString(t, n, r);
            i || (i = this.getTagObject(e));
            const s = this.stringifyProps(e, i, t)
              , a = "function" == typeof i.stringify ? i.stringify(e, t, n, r) : e instanceof u.default ? e.toString(t, n, r) : (0,
            o.stringifyString)(e, t, n, r);
            return s ? e instanceof u.default && "{" !== a[0] && "[" !== a[0] ? `${s}\n${t.indent}${a}` : `${s} ${a}` : a
        }
    }
    t.default = m,
    g(m, "defaultPrefix", "tag:yaml.org,2002:"),
    g(m, "defaultTags", {
        MAP: "tag:yaml.org,2002:map",
        SEQ: "tag:yaml.org,2002:seq",
        STR: "tag:yaml.org,2002:str"
    })
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (global && global._YAML_SILENCE_WARNINGS)
            return;
        const {emitWarning: n} = global && global.process;
        n ? n(e, t) : console.warn(t ? `${t}: ${e}` : e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.warn = r,
    t.warnFileDeprecation = function(e) {
        if (global && global._YAML_SILENCE_DEPRECATION_WARNINGS)
            return;
        r(`The endpoint 'yaml/${e.replace(/.*yaml[/\\]/i, "").replace(/\.js$/, "").replace(/\\/g, "/")}' will be removed in a future release.`, "DeprecationWarning")
    }
    ,
    t.warnOptionDeprecation = function(e, t) {
        if (global && global._YAML_SILENCE_DEPRECATION_WARNINGS)
            return;
        if (i[e])
            return;
        i[e] = !0;
        let n = `The option '${e}' will be removed in a future release`;
        n += t ? `, use '${t}' instead.` : ".",
        r(n, "DeprecationWarning")
    }
    ;
    const i = {}
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e, t) {
        if (t.type !== r.Type.MAP && t.type !== r.Type.FLOW_MAP) {
            const n = `A ${t.type} node cannot be resolved as a mapping`;
            return e.errors.push(new s.YAMLSyntaxError(t,n)),
            null
        }
        const {comments: n, items: d} = t.type === r.Type.FLOW_MAP ? function(e, t) {
            const n = []
              , i = [];
            let o = void 0
              , a = null
              , u = !1
              , f = "{";
            for (let d = 0; d < t.items.length; ++d) {
                (0,
                c.checkKeyLength)(e.errors, t, d, o, a);
                const h = t.items[d];
                if ("string" == typeof h.char) {
                    const {char: n, offset: r} = h;
                    if ("?" === n && void 0 === o && !u) {
                        u = !0,
                        f = ":";
                        continue
                    }
                    if (":" === n) {
                        if (void 0 === o && (o = null),
                        ":" === f) {
                            f = ",";
                            continue
                        }
                    } else if (u && (void 0 === o && "," !== n && (o = null),
                    u = !1),
                    void 0 !== o && (i.push(new l.default(o)),
                    o = void 0,
                    a = null,
                    "," === n)) {
                        f = ":";
                        continue
                    }
                    if ("}" === n) {
                        if (d === t.items.length - 1)
                            continue
                    } else if (n === f) {
                        f = ":";
                        continue
                    }
                    const c = "Flow map contains an unexpected " + n
                      , p = new s.YAMLSyntaxError(t,c);
                    p.offset = r,
                    e.errors.push(p)
                } else
                    h.type === r.Type.BLANK_LINE ? n.push({
                        afterKey: !!o,
                        before: i.length
                    }) : h.type === r.Type.COMMENT ? n.push({
                        afterKey: !!o,
                        before: i.length,
                        comment: h.comment
                    }) : void 0 === o ? ("," === f && e.errors.push(new s.YAMLSemanticError(h,"Separator , missing in flow map")),
                    o = e.resolveNode(h),
                    a = u ? null : h.range.start) : ("," !== f && e.errors.push(new s.YAMLSemanticError(h,"Indicator : missing in flow map entry")),
                    i.push(new l.default(o,e.resolveNode(h))),
                    o = void 0,
                    u = !1)
            }
            (0,
            c.checkFlowCollectionEnd)(e.errors, t),
            void 0 !== o && i.push(new l.default(o));
            return {
                comments: n,
                items: i
            }
        }(e, t) : function(e, t) {
            const n = []
              , o = [];
            let a = void 0
              , u = null;
            for (let f = 0; f < t.items.length; ++f) {
                const d = t.items[f];
                switch (d.type) {
                case r.Type.BLANK_LINE:
                    n.push({
                        afterKey: !!a,
                        before: o.length
                    });
                    break;
                case r.Type.COMMENT:
                    n.push({
                        afterKey: !!a,
                        before: o.length,
                        comment: d.comment
                    });
                    break;
                case r.Type.MAP_KEY:
                    void 0 !== a && o.push(new l.default(a)),
                    d.error && e.errors.push(d.error),
                    a = e.resolveNode(d.node),
                    u = null;
                    break;
                case r.Type.MAP_VALUE:
                    {
                        if (void 0 === a && (a = null),
                        d.error && e.errors.push(d.error),
                        !d.context.atLineStart && d.node && d.node.type === r.Type.MAP && !d.node.context.atLineStart) {
                            const t = "Nested mappings are not allowed in compact mappings";
                            e.errors.push(new s.YAMLSemanticError(d.node,t))
                        }
                        let n = d.node;
                        if (!n && d.props.length > 0) {
                            n = new i.default(r.Type.PLAIN,[]),
                            n.context = {
                                parent: d,
                                src: d.context.src
                            };
                            const e = d.range.start + 1;
                            if (n.range = {
                                start: e,
                                end: e
                            },
                            n.valueRange = {
                                start: e,
                                end: e
                            },
                            "number" == typeof d.range.origStart) {
                                const e = d.range.origStart + 1;
                                n.range.origStart = n.range.origEnd = e,
                                n.valueRange.origStart = n.valueRange.origEnd = e
                            }
                        }
                        const h = new l.default(a,e.resolveNode(n));
                        p(d, h),
                        o.push(h),
                        (0,
                        c.checkKeyLength)(e.errors, t, f, a, u),
                        a = void 0,
                        u = null
                    }
                    break;
                default:
                    void 0 !== a && o.push(new l.default(a)),
                    a = e.resolveNode(d),
                    u = d.range.start,
                    d.error && e.errors.push(d.error);
                    e: for (let n = f + 1; ; ++n) {
                        const i = t.items[n];
                        switch (i && i.type) {
                        case r.Type.BLANK_LINE:
                        case r.Type.COMMENT:
                            continue e;
                        case r.Type.MAP_VALUE:
                            break e;
                        default:
                            e.errors.push(new s.YAMLSemanticError(d,"Implicit map keys need to be followed by map values"));
                            break e
                        }
                    }
                    if (d.valueRangeContainsNewline) {
                        const t = "Implicit map keys need to be on a single line";
                        e.errors.push(new s.YAMLSemanticError(d,t))
                    }
                }
            }
            void 0 !== a && o.push(new l.default(a));
            return {
                comments: n,
                items: o
            }
        }(e, t)
          , h = new o.default;
        h.items = d,
        (0,
        c.resolveComments)(h, n);
        let g = !1;
        for (let n = 0; n < d.length; ++n) {
            const {key: i} = d[n];
            if (i instanceof f.default && (g = !0),
            e.schema.merge && i && i.value === a.MERGE_KEY) {
                d[n] = new a.default(d[n]);
                const i = d[n].value.items;
                let o = null;
                i.some(e=>{
                    if (e instanceof u.default) {
                        const {type: t} = e.source;
                        return t !== r.Type.MAP && t !== r.Type.FLOW_MAP && (o = "Merge nodes aliases can only point to maps")
                    }
                    return o = "Merge nodes can only have Alias nodes as values"
                }
                ),
                o && e.errors.push(new s.YAMLSemanticError(t,o))
            } else
                for (let r = n + 1; r < d.length; ++r) {
                    const {key: n} = d[r];
                    if (i === n || i && n && Object.prototype.hasOwnProperty.call(i, "value") && i.value === n.value) {
                        const n = `Map keys must be unique; "${i}" is repeated`;
                        e.errors.push(new s.YAMLSemanticError(t,n));
                        break
                    }
                }
        }
        if (g && !e.options.mapAsMap) {
            const n = "Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.";
            e.warnings.push(new s.YAMLWarning(t,n))
        }
        return t.resolved = h,
        h
    }
    ;
    var r = n(0)
      , i = h(n(54))
      , s = n(1)
      , o = h(n(13))
      , a = function(e) {
        if (e && e.__esModule)
            return e;
        var t = d();
        if (t && t.has(e))
            return t.get(e);
        var n = {};
        if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i]
                }
        }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(55))
      , l = h(n(7))
      , c = n(59)
      , u = h(n(25))
      , f = h(n(10));
    function d() {
        if ("function" != typeof WeakMap)
            return null;
        var e = new WeakMap;
        return d = function() {
            return e
        }
        ,
        e
    }
    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function p(e, t) {
        if (!(({context: {lineStart: e, node: t, src: n}, props: i})=>{
            if (0 === i.length)
                return !1;
            const {start: s} = i[0];
            if (t && s > t.valueRange.start)
                return !1;
            if (n[s] !== r.Char.COMMENT)
                return !1;
            for (let t = e; t < s; ++t)
                if ("\n" === n[t])
                    return !1;
            return !0
        }
        )(e))
            return;
        const n = e.getPropValue(0, r.Char.COMMENT, !0);
        let i = !1;
        const s = t.value.commentBefore;
        if (s && s.startsWith(n))
            t.value.commentBefore = s.substr(n.length + 1),
            i = !0;
        else {
            const r = t.value.comment;
            !e.node && r && r.startsWith(n) && (t.value.comment = r.substr(n.length + 1),
            i = !0)
        }
        i && (t.comment = n)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.checkFlowCollectionEnd = function(e, t) {
        let n, s, o;
        switch (t.type) {
        case i.Type.FLOW_MAP:
            n = "}",
            s = "flow map";
            break;
        case i.Type.FLOW_SEQ:
            n = "]",
            s = "flow sequence";
            break;
        default:
            return void e.push(new r.YAMLSemanticError(t,"Not a flow collection!?"))
        }
        for (let e = t.items.length - 1; e >= 0; --e) {
            const n = t.items[e];
            if (!n || n.type !== i.Type.COMMENT) {
                o = n;
                break
            }
        }
        if (o && o.char !== n) {
            const i = `Expected ${s} to end with ${n}`;
            let a;
            "number" == typeof o.offset ? (a = new r.YAMLSemanticError(t,i),
            a.offset = o.offset + 1) : (a = new r.YAMLSemanticError(o,i),
            o.range && o.range.end && (a.offset = o.range.end - o.range.start)),
            e.push(a)
        }
    }
    ,
    t.checkKeyLength = function(e, t, n, i, s) {
        if (!i || "number" != typeof s)
            return;
        const o = t.items[n];
        let a = o && o.range && o.range.start;
        if (!a)
            for (let e = n - 1; e >= 0; --e) {
                const r = t.items[e];
                if (r && r.range) {
                    a = r.range.end + 2 * (n - e);
                    break
                }
            }
        if (a > s + 1024) {
            const n = String(i).substr(0, 8) + "..." + String(i).substr(-8);
            e.push(new r.YAMLSemanticError(t,`The "${n}" key is too long`))
        }
    }
    ,
    t.resolveComments = function(e, t) {
        for (const {afterKey: n, before: r, comment: i} of t) {
            let t = e.items[r];
            t ? (n && t.value && (t = t.value),
            void 0 === i ? !n && t.commentBefore || (t.spaceBefore = !0) : t.commentBefore ? t.commentBefore += "\n" + i : t.commentBefore = i) : void 0 !== i && (e.comment ? e.comment += "\n" + i : e.comment = i)
        }
    }
    ;
    var r = n(1)
      , i = n(0)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e, t) {
        if (t.type !== r.Type.SEQ && t.type !== r.Type.FLOW_SEQ) {
            const n = `A ${t.type} node cannot be resolved as a sequence`;
            return e.errors.push(new i.YAMLSyntaxError(t,n)),
            null
        }
        const {comments: n, items: c} = t.type === r.Type.FLOW_SEQ ? function(e, t) {
            const n = []
              , a = [];
            let l = !1
              , c = void 0
              , u = null
              , f = "[";
            for (let d = 0; d < t.items.length; ++d) {
                const h = t.items[d];
                if ("string" == typeof h.char) {
                    const {char: n, offset: r} = h;
                    if (":" === n || !l && void 0 === c || (l && void 0 === c && (c = f ? a.pop() : null),
                    a.push(new s.default(c)),
                    l = !1,
                    c = void 0,
                    u = null),
                    n === f)
                        f = null;
                    else if (f || "?" !== n) {
                        if ("[" !== f && ":" === n && void 0 === c) {
                            if ("," === f) {
                                if (c = a.pop(),
                                c instanceof s.default) {
                                    const n = "Chaining flow sequence pairs is invalid"
                                      , s = new i.YAMLSemanticError(t,n);
                                    s.offset = r,
                                    e.errors.push(s)
                                }
                                l || (0,
                                o.checkKeyLength)(e.errors, t, d, c, u)
                            } else
                                c = null;
                            u = null,
                            l = !1,
                            f = null
                        } else if ("[" === f || "]" !== n || d < t.items.length - 1) {
                            const s = "Flow sequence contains an unexpected " + n
                              , o = new i.YAMLSyntaxError(t,s);
                            o.offset = r,
                            e.errors.push(o)
                        }
                    } else
                        l = !0
                } else if (h.type === r.Type.BLANK_LINE)
                    n.push({
                        before: a.length
                    });
                else if (h.type === r.Type.COMMENT)
                    n.push({
                        comment: h.comment,
                        before: a.length
                    });
                else {
                    if (f) {
                        const t = `Expected a ${f} in flow sequence`;
                        e.errors.push(new i.YAMLSemanticError(h,t))
                    }
                    const t = e.resolveNode(h);
                    void 0 === c ? a.push(t) : (a.push(new s.default(c,t)),
                    c = void 0),
                    u = h.range.start,
                    f = ","
                }
            }
            (0,
            o.checkFlowCollectionEnd)(e.errors, t),
            void 0 !== c && a.push(new s.default(c));
            return {
                comments: n,
                items: a
            }
        }(e, t) : function(e, t) {
            const n = []
              , s = [];
            for (let o = 0; o < t.items.length; ++o) {
                const a = t.items[o];
                switch (a.type) {
                case r.Type.BLANK_LINE:
                    n.push({
                        before: s.length
                    });
                    break;
                case r.Type.COMMENT:
                    n.push({
                        comment: a.comment,
                        before: s.length
                    });
                    break;
                case r.Type.SEQ_ITEM:
                    if (a.error && e.errors.push(a.error),
                    s.push(e.resolveNode(a.node)),
                    a.hasProps) {
                        const t = "Sequence items cannot have tags or anchors before the - indicator";
                        e.errors.push(new i.YAMLSemanticError(a,t))
                    }
                    break;
                default:
                    a.error && e.errors.push(a.error),
                    e.errors.push(new i.YAMLSyntaxError(a,`Unexpected ${a.type} node in sequence`))
                }
            }
            return {
                comments: n,
                items: s
            }
        }(e, t)
          , u = new a.default;
        if (u.items = c,
        (0,
        o.resolveComments)(u, n),
        !e.options.mapAsMap && c.some(e=>e instanceof s.default && e.key instanceof l.default)) {
            const n = "Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.";
            e.warnings.push(new i.YAMLWarning(t,n))
        }
        return t.resolved = u,
        u
    }
    ;
    var r = n(0)
      , i = n(1)
      , s = c(n(7))
      , o = n(59)
      , a = c(n(16))
      , l = c(n(10));
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(0)
      , i = n(1)
      , s = n(17)
      , o = n(26)
      , a = n(22)
      , l = {
        identify: e=>e instanceof Uint8Array,
        default: !1,
        tag: "tag:yaml.org,2002:binary",
        resolve: (e,t)=>{
            if ("function" == typeof Buffer) {
                const n = (0,
                o.resolveString)(e, t);
                return Buffer.from(n, "base64")
            }
            if ("function" == typeof atob) {
                const n = atob((0,
                o.resolveString)(e, t))
                  , r = new Uint8Array(n.length);
                for (let e = 0; e < n.length; ++e)
                    r[e] = n.charCodeAt(e);
                return r
            }
            return e.errors.push(new i.YAMLReferenceError(t,"This environment does not support reading binary tags; either Buffer or atob is required")),
            null
        }
        ,
        options: a.binaryOptions,
        stringify: ({comment: e, type: t, value: n},i,o,l)=>{
            let c;
            if ("function" == typeof Buffer)
                c = n instanceof Buffer ? n.toString("base64") : Buffer.from(n.buffer).toString("base64");
            else {
                if ("function" != typeof btoa)
                    throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
                {
                    let e = "";
                    for (let t = 0; t < n.length; ++t)
                        e += String.fromCharCode(n[t]);
                    c = btoa(e)
                }
            }
            if (t || (t = a.binaryOptions.defaultType),
            t === r.Type.QUOTE_DOUBLE)
                n = c;
            else {
                const {lineWidth: e} = a.binaryOptions
                  , i = Math.ceil(c.length / e)
                  , s = new Array(i);
                for (let t = 0, n = 0; t < i; ++t,
                n += e)
                    s[t] = c.substr(n, e);
                n = s.join(t === r.Type.BLOCK_LITERAL ? "\n" : " ")
            }
            return (0,
            s.stringifyString)({
                comment: e,
                type: t,
                value: n
            }, i, o, l)
        }
    };
    t.default = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = t.YAMLOMap = void 0;
    var r = n(1)
      , i = u(n(14))
      , s = u(n(13))
      , o = u(n(7))
      , a = u(n(5))
      , l = u(n(16))
      , c = n(40);
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    class d extends l.default {
        constructor() {
            super(),
            f(this, "add", s.default.prototype.add.bind(this)),
            f(this, "delete", s.default.prototype.delete.bind(this)),
            f(this, "get", s.default.prototype.get.bind(this)),
            f(this, "has", s.default.prototype.has.bind(this)),
            f(this, "set", s.default.prototype.set.bind(this)),
            this.tag = d.tag
        }
        toJSON(e, t) {
            const n = new Map;
            t && t.onCreate && t.onCreate(n);
            for (const e of this.items) {
                let r, s;
                if (e instanceof o.default ? (r = (0,
                i.default)(e.key, "", t),
                s = (0,
                i.default)(e.value, r, t)) : r = (0,
                i.default)(e, "", t),
                n.has(r))
                    throw new Error("Ordered maps must not include duplicate keys");
                n.set(r, s)
            }
            return n
        }
    }
    t.YAMLOMap = d,
    f(d, "tag", "tag:yaml.org,2002:omap");
    var h = {
        identify: e=>e instanceof Map,
        nodeClass: d,
        default: !1,
        tag: "tag:yaml.org,2002:omap",
        resolve: function(e, t) {
            const n = (0,
            c.parsePairs)(e, t)
              , i = [];
            for (const {key: e} of n.items)
                if (e instanceof a.default) {
                    if (i.includes(e.value)) {
                        const e = "Ordered maps must not include duplicate keys";
                        throw new r.YAMLSemanticError(t,e)
                    }
                    i.push(e.value)
                }
            return Object.assign(new d, n)
        },
        createNode: function(e, t, n) {
            const r = (0,
            c.createPairs)(e, t, n)
              , i = new d;
            return i.items = r.items,
            i
        }
    };
    t.default = h
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = t.YAMLSet = void 0;
    var r, i, s, o = n(1), a = function(e) {
        if (e && e.__esModule)
            return e;
        var t = d();
        if (t && t.has(e))
            return t.get(e);
        var n = {};
        if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i]
                }
        }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(13)), l = f(n(7)), c = f(n(58)), u = f(n(5));
    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function d() {
        if ("function" != typeof WeakMap)
            return null;
        var e = new WeakMap;
        return d = function() {
            return e
        }
        ,
        e
    }
    class h extends a.default {
        constructor() {
            super(),
            this.tag = h.tag
        }
        add(e) {
            const t = e instanceof l.default ? e : new l.default(e);
            (0,
            a.findPair)(this.items, t.key) || this.items.push(t)
        }
        get(e, t) {
            const n = (0,
            a.findPair)(this.items, e);
            return !t && n instanceof l.default ? n.key instanceof u.default ? n.key.value : n.key : n
        }
        set(e, t) {
            if ("boolean" != typeof t)
                throw new Error("Expected boolean value for set(key, value) in a YAML set, not " + typeof t);
            const n = (0,
            a.findPair)(this.items, e);
            n && !t ? this.items.splice(this.items.indexOf(n), 1) : !n && t && this.items.push(new l.default(e))
        }
        toJSON(e, t) {
            return super.toJSON(e, t, Set)
        }
        toString(e, t, n) {
            if (!e)
                return JSON.stringify(this);
            if (this.hasAllNullValues())
                return super.toString(e, t, n);
            throw new Error("Set items must all have null values")
        }
    }
    t.YAMLSet = h,
    s = "tag:yaml.org,2002:set",
    (i = "tag")in (r = h) ? Object.defineProperty(r, i, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[i] = s;
    var p = {
        identify: e=>e instanceof Set,
        nodeClass: h,
        default: !1,
        tag: "tag:yaml.org,2002:set",
        resolve: function(e, t) {
            const n = (0,
            c.default)(e, t);
            if (!n.hasAllNullValues())
                throw new o.YAMLSemanticError(t,"Set items must all have null values");
            return Object.assign(new h, n)
        },
        createNode: function(e, t, n) {
            const r = new h;
            for (const i of t)
                r.items.push(e.createPair(i, null, n));
            return r
        }
    };
    t.default = p
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.timestamp = t.floatTime = t.intTime = void 0;
    var r = n(17);
    const i = (e,t)=>{
        const n = t.split(":").reduce((e,t)=>60 * e + Number(t), 0);
        return "-" === e ? -n : n
    }
      , s = ({value: e})=>{
        if (isNaN(e) || !isFinite(e))
            return (0,
            r.stringifyNumber)(e);
        let t = "";
        e < 0 && (t = "-",
        e = Math.abs(e));
        const n = [e % 60];
        return e < 60 ? n.unshift(0) : (e = Math.round((e - n[0]) / 60),
        n.unshift(e % 60),
        e >= 60 && (e = Math.round((e - n[0]) / 60),
        n.unshift(e))),
        t + n.map(e=>e < 10 ? "0" + String(e) : String(e)).join(":").replace(/000000\d*$/, "")
    }
      , o = {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:int",
        format: "TIME",
        test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/,
        resolve: (e,t,n)=>i(t, n.replace(/_/g, "")),
        stringify: s
    };
    t.intTime = o;
    const a = {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:float",
        format: "TIME",
        test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/,
        resolve: (e,t,n)=>i(t, n.replace(/_/g, "")),
        stringify: s
    };
    t.floatTime = a;
    const l = {
        identify: e=>e instanceof Date,
        default: !0,
        tag: "tag:yaml.org,2002:timestamp",
        test: RegExp("^(?:([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?)$"),
        resolve: (e,t,n,r,s,o,a,l,c)=>{
            l && (l = (l + "00").substr(1, 3));
            let u = Date.UTC(t, n - 1, r, s || 0, o || 0, a || 0, l || 0);
            if (c && "Z" !== c) {
                let e = i(c[0], c.slice(1));
                Math.abs(e) < 30 && (e *= 60),
                u -= 6e4 * e
            }
            return new Date(u)
        }
        ,
        stringify: ({value: e})=>e.toISOString().replace(/((T00:00)?:00)?\.000Z$/, "")
    };
    t.timestamp = l
}
, function(e, t) {
    e.exports = require("child_process")
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(11)
      , i = {};
    function s(e) {
        return i[e] || (i[e] = r.window.createOutputChannel(e)),
        i[e]
    }
    t.createChannel = s,
    t.getChannel = function(e) {
        return i[e] ? i[e] : s(e)
    }
    ,
    t.runProcessInChannel = function(e, t) {
        e.stdout && e.stdout.on("data", e=>t.append(e.toString())),
        e.stderr && e.stderr.on("data", e=>t.append(e.toString())),
        e.on("close", e=>t.appendLine("exit code " + e))
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))((function(i, s) {
            function o(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    s(e)
                }
            }
            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    s(e)
                }
            }
            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(o, a)
            }
            l((r = r.apply(e, t || [])).next())
        }
        ))
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(97)
      , s = n(19)
      , o = n(70)
      , a = n(18);
    function l(e) {
        const t = e.environment.sdk;
        return t && s.isValidEnvironmentVersion(t) ? t : null
    }
    t.isProjectInNullSafeMode = function(e) {
        return r(this, void 0, void 0, (function*() {
            const t = yield o.getPubspecFile(e);
            if (null !== t) {
                const e = l(t);
                if (null !== e) {
                    const t = i.minVersion(e);
                    if (null !== t)
                        return t.major >= 2 && t.minor >= 12
                }
            }
            return !0
        }
        ))
    }
    ,
    t.getEnvironmentSdkVersion = l,
    t.checkIsExtensionEnabled = function(e) {
        const t = o.getPubspecFileForDirectory(e);
        return t && t[a.EXTENSION_CONFIG] && !0 === t[a.EXTENSION_CONFIG][a.EXTENSION_CONFIG_ENABLED]
    }
}
, function(e, t, n) {
    const r = n(8);
    e.exports = (e,t,n)=>0 !== r(e, t, n)
}
, function(e, t, n) {
    const r = n(43)
      , i = n(68)
      , s = n(31)
      , o = n(46)
      , a = n(45)
      , l = n(47);
    e.exports = (e,t,n,c)=>{
        switch (t) {
        case "===":
            return "object" == typeof e && (e = e.version),
            "object" == typeof n && (n = n.version),
            e === n;
        case "!==":
            return "object" == typeof e && (e = e.version),
            "object" == typeof n && (n = n.version),
            e !== n;
        case "":
        case "=":
        case "==":
            return r(e, n, c);
        case "!=":
            return i(e, n, c);
        case ">":
            return s(e, n, c);
        case ">=":
            return o(e, n, c);
        case "<":
            return a(e, n, c);
        case "<=":
            return l(e, n, c);
        default:
            throw new TypeError("Invalid operator: " + t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))((function(i, s) {
            function o(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    s(e)
                }
            }
            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    s(e)
                }
            }
            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(o, a)
            }
            l((r = r.apply(e, t || [])).next())
        }
        ))
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(12)
      , s = n(41)
      , o = n(6)
      , a = n(50)
      , l = n(11)
      , c = n(27)
      , u = n(18)
      , f = n(19);
    function d() {
        return s.homedir()
    }
    function h() {
        return o.join(d(), u.LOCALIZELY_DIRECTORY, u.CREDENTIALS_YAML)
    }
    function getArbFiles(project) {
        const t = f.sanitizePathForRegex(project.getArbDirConfig())
          , n = new l.RelativePattern(project.getPath(),t + `/${project.getArbPrefixConfig()}_*.arb`);
        return l.workspace.findFiles(n)
    }
    function g(e) {
        return ".arb" === o.extname(e)
    }
    function m(e, t) {
        let n = o.normalize(o.join(o.basename(e.getPath()), e.getArbDirConfig()));
        return n.endsWith(o.sep) && (n = n.substring(0, n.length - 1)),
        t.endsWith(n)
    }
    function v(e) {
        return o.basename(e) === u.PUBSPEC_YAML
    }
    t.getHomeDirPath = d,
    t.getLocalizelyCredentialsFilePath = h,
    t.getLocalizelyApiToken = function() {
        const e = h();
        if (i.existsSync(e)) {
            const t = new c.TextDecoder
              , n = i.readFileSync(e);
            return a.parse(t.decode(n))[u.EXTENSION_CONFIG_API_TOKEN]
        }
    }
    ,
    t.updateLocalizelyApiToken = function(e) {
        const t = h();
        if (i.existsSync(t)) {
            const n = new c.TextDecoder
              , r = new c.TextEncoder
              , s = i.readFileSync(t)
              , o = a.parseDocument(n.decode(s), {
                keepCstNodes: !0
            });
            o.set(u.EXTENSION_CONFIG_API_TOKEN, e),
            i.writeFileSync(t, r.encode(String(o)))
        } else {
            const n = o.dirname(t);
            i.existsSync(n) || i.mkdirSync(n),
            i.writeFileSync(t, `${u.EXTENSION_CONFIG_API_TOKEN}: ${e}`)
        }
    }
    ,
    t.getArbFiles = getArbFiles,
    t.updateArbFiles = function(project, key, n) {
        return r(this, void 0, void 0, (function*() {
            const r = new c.TextEncoder
              , i = new c.TextDecoder
              , s = yield getArbFiles(project);
            for (let a = 0; a < s.length; a++) {
                if (t.extractLocaleFromArbFilePath(s[a].path, project) !== project.getMainLocaleConfig()){
                    continue;
                }
                const c = yield l.workspace.fs.readFile(s[a]);
                let u;
                try {
                    u = JSON.parse(i.decode(c))
                } catch (t) {
                    f.warning(`Failed to export string key to '${o.basename(s[a].fsPath)}' file within the '${project.getName()}' project due to invalid file structure.`);
                    continue
                }
                u[key] || (u[key] = n,
                yield l.workspace.fs.writeFile(s[a], r.encode(JSON.stringify(u, null, 2))))
            }
        }
        ))
    }
    ,
    t.extractLocaleFromArbFilePath = function(e, project) {
        return o.basename(e, ".arb").substring(`${project.getArbPrefixConfig()}_`.length)
    }
    ,
    t.checkIsArbFile = g,
    t.checkIsArbDir = m,
    t.checkIsArbFileFromArbDir = function(e, t) {
        return m(e, o.dirname(t))
    }
    ,
    t.checkIsArbFileFromModule = function(e, t) {
        return g(t) && e.modules.some(e=>t.startsWith(e))
    }
    ,
    t.updateDartFile = function(e, t, n) {
        const r = new l.WorkspaceEdit;
        return r.replace(e.uri, t, n),
        l.workspace.applyEdit(r)
    }
    ,
    t.checkIsPubspecFile = v,
    t.getPubspecFile = function(e) {
        return r(this, void 0, void 0, (function*() {
            if ((yield l.workspace.fs.readDirectory(e.root.uri)).some(e=>e[0] === u.PUBSPEC_YAML && e[1] === l.FileType.File)) {
                const t = l.Uri.file(o.join(e.root.uri.fsPath, u.PUBSPEC_YAML))
                  , n = yield l.workspace.fs.readFile(t)
                  , r = new c.TextDecoder;
                return a.parse(r.decode(n))
            }
            return null
        }
        ))
    }
    ,
    t.getPubspecFileForDirectory = function(e) {
        try {
            const t = o.join(e, u.PUBSPEC_YAML);
            if (!i.existsSync(t))
                return null;
            const n = i.readFileSync(t, "utf8");
            return a.parse(n)
        } catch (e) {
            return null
        }
    }
    ,
    t.getModules = function e(t) {
        const n = []
          , r = i.readdirSync(t);
        for (let s = 0; s < r.length; s++) {
            const a = r[s]
              , l = o.join(t, a);
            if (v(a)) {
                n.push(t);
                continue
            }
            i.lstatSync(l).isDirectory() && !a.startsWith(".") && n.push(...e(l))
        }
        return n
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(11)
      , i = n(35);
    function s(e) {
        return !(!e || "file" !== e.uri.scheme)
    }
    t.fsPath = function(e) {
        return i.forceWindowsDriveLetterToUppercase(e instanceof r.Uri ? e.fsPath : e)
    }
    ,
    t.getDartWorkspaceFolders = function() {
        return r.workspace.workspaceFolders ? r.workspace.workspaceFolders.filter(s) : []
    }
    ,
    t.isDartWorkspaceFolder = s
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(41)
      , i = n(6)
      , s = n(11)
      , o = n(71);
    t.resolvePaths = function(e) {
        if ("string" == typeof e)
            return e.startsWith("~/") ? i.join(r.homedir(), e.substr(2)) : !i.isAbsolute(e) && s.workspace.workspaceFolders && s.workspace.workspaceFolders.length ? i.join(o.fsPath(s.workspace.workspaceFolders[0].uri), e) : e
    }
    ,
    t.notUndefined = function(e) {
        return void 0 !== e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = l(n(74))
      , i = l(n(83))
      , s = n(1)
      , o = l(n(56))
      , a = n(57);
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    const c = {
        anchorPrefix: "a",
        customTags: null,
        keepCstNodes: !1,
        keepNodeTypes: !0,
        keepBlobsInJSON: !0,
        mapAsMap: !1,
        maxAliasCount: 100,
        prettyErrors: !1,
        simpleKeys: !1,
        version: "1.2"
    };
    class u extends i.default {
        constructor(e) {
            super(Object.assign({}, c, e))
        }
    }
    function f(e, t) {
        const n = (0,
        r.default)(e)
          , i = new u(t).parse(n[0]);
        if (n.length > 1) {
            const e = "Source contains multiple documents; please use YAML.parseAllDocuments()";
            i.errors.unshift(new s.YAMLSemanticError(n[1],e))
        }
        return i
    }
    var d = {
        createNode: function(e, t=!0, n) {
            void 0 === n && "string" == typeof t && (n = t,
            t = !0);
            const r = Object.assign({}, i.default.defaults[c.version], c);
            return new o.default(r).createNode(e, t, n)
        },
        defaultOptions: c,
        Document: u,
        parse: function(e, t) {
            const n = f(e, t);
            if (n.warnings.forEach(e=>(0,
            a.warn)(e)),
            n.errors.length > 0)
                throw n.errors[0];
            return n.toJSON()
        },
        parseAllDocuments: function(e, t) {
            const n = [];
            let i;
            for (const s of (0,
            r.default)(e)) {
                const e = new u(t);
                e.parse(s, i),
                n.push(e),
                i = e
            }
            return n
        },
        parseCST: r.default,
        parseDocument: f,
        stringify: function(e, t) {
            const n = new u(t);
            return n.contents = e,
            String(n)
        }
    };
    t.default = d
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e) {
        const t = [];
        -1 !== e.indexOf("\r") && (e = e.replace(/\r\n?/g, (e,n)=>(e.length > 1 && t.push(n),
        "\n")));
        const n = [];
        let s = 0;
        do {
            const t = new r.default
              , o = new i.default({
                src: e
            });
            s = t.parse(o, s),
            n.push(t)
        } while (s < e.length);
        return n.setOrigRanges = ()=>{
            if (0 === t.length)
                return !1;
            for (let e = 1; e < t.length; ++e)
                t[e] -= e;
            let e = 0;
            for (let r = 0; r < n.length; ++r)
                e = n[r].setOrigRanges(t, e);
            return t.splice(0, t.length),
            !0
        }
        ,
        n.toString = ()=>n.join("...\n"),
        n
    }
    ;
    var r = s(n(75))
      , i = s(n(77));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(0)
      , i = n(1)
      , s = f(n(23))
      , o = n(52)
      , a = f(n(36))
      , l = f(n(76))
      , c = f(n(4))
      , u = f(n(2));
    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class d extends c.default {
        static startCommentOrEndBlankLine(e, t) {
            const n = c.default.endOfWhiteSpace(e, t)
              , r = e[n];
            return "#" === r || "\n" === r ? n : t
        }
        constructor() {
            super(r.Type.DOCUMENT),
            this.directives = null,
            this.contents = null,
            this.directivesEndMarker = null,
            this.documentEndMarker = null
        }
        parseDirectives(e) {
            const {src: t} = this.context;
            this.directives = [];
            let n = !0
              , o = !1
              , f = e;
            for (; !c.default.atDocumentBoundary(t, f, r.Char.DIRECTIVES_END); )
                switch (f = d.startCommentOrEndBlankLine(t, f),
                t[f]) {
                case "\n":
                    if (n) {
                        const e = new s.default;
                        f = e.parse({
                            src: t
                        }, f),
                        f < t.length && this.directives.push(e)
                    } else
                        f += 1,
                        n = !0;
                    break;
                case "#":
                    {
                        const e = new a.default;
                        f = e.parse({
                            src: t
                        }, f),
                        this.directives.push(e),
                        n = !1
                    }
                    break;
                case "%":
                    {
                        const e = new l.default;
                        f = e.parse({
                            parent: this,
                            src: t
                        }, f),
                        this.directives.push(e),
                        o = !0,
                        n = !1
                    }
                    break;
                default:
                    return o ? this.error = new i.YAMLSemanticError(this,"Missing directives-end indicator line") : this.directives.length > 0 && (this.contents = this.directives,
                    this.directives = []),
                    f
                }
            return t[f] ? (this.directivesEndMarker = new u.default(f,f + 3),
            f + 3) : (o ? this.error = new i.YAMLSemanticError(this,"Missing directives-end indicator line") : this.directives.length > 0 && (this.contents = this.directives,
            this.directives = []),
            f)
        }
        parseContents(e) {
            const {parseNode: t, src: n} = this.context;
            this.contents || (this.contents = []);
            let l = e;
            for (; "-" === n[l - 1]; )
                l -= 1;
            let f = c.default.endOfWhiteSpace(n, e)
              , h = l === e;
            for (this.valueRange = new u.default(f); !c.default.atDocumentBoundary(n, f, r.Char.DOCUMENT_END); ) {
                switch (n[f]) {
                case "\n":
                    if (h) {
                        const e = new s.default;
                        f = e.parse({
                            src: n
                        }, f),
                        f < n.length && this.contents.push(e)
                    } else
                        f += 1,
                        h = !0;
                    l = f;
                    break;
                case "#":
                    {
                        const e = new a.default;
                        f = e.parse({
                            src: n
                        }, f),
                        this.contents.push(e),
                        h = !1
                    }
                    break;
                default:
                    {
                        const e = c.default.endOfIndent(n, f)
                          , r = t({
                            atLineStart: h,
                            indent: -1,
                            inFlow: !1,
                            inCollection: !1,
                            lineStart: l,
                            parent: this
                        }, e);
                        if (!r)
                            return this.valueRange.end = e;
                        this.contents.push(r),
                        f = r.range.end,
                        h = !1;
                        const i = (0,
                        o.grabCollectionEndComments)(r);
                        i && Array.prototype.push.apply(this.contents, i)
                    }
                }
                f = d.startCommentOrEndBlankLine(n, f)
            }
            if (this.valueRange.end = f,
            n[f] && (this.documentEndMarker = new u.default(f,f + 3),
            f += 3,
            n[f])) {
                if (f = c.default.endOfWhiteSpace(n, f),
                "#" === n[f]) {
                    const e = new a.default;
                    f = e.parse({
                        src: n
                    }, f),
                    this.contents.push(e)
                }
                switch (n[f]) {
                case "\n":
                    f += 1;
                    break;
                case void 0:
                    break;
                default:
                    this.error = new i.YAMLSyntaxError(this,"Document end marker line cannot have a non-comment suffix")
                }
            }
            return f
        }
        parse(e, t) {
            e.root = this,
            this.context = e;
            const {src: n} = e;
            let r = 65279 === n.charCodeAt(t) ? t + 1 : t;
            return r = this.parseDirectives(r),
            r = this.parseContents(r),
            r
        }
        setOrigRanges(e, t) {
            return t = super.setOrigRanges(e, t),
            this.directives.forEach(n=>{
                t = n.setOrigRanges(e, t)
            }
            ),
            this.directivesEndMarker && (t = this.directivesEndMarker.setOrigRange(e, t)),
            this.contents.forEach(n=>{
                t = n.setOrigRanges(e, t)
            }
            ),
            this.documentEndMarker && (t = this.documentEndMarker.setOrigRange(e, t)),
            t
        }
        toString() {
            const {contents: e, directives: t, value: n} = this;
            if (null != n)
                return n;
            let i = t.join("");
            return e.length > 0 && ((t.length > 0 || e[0].type === r.Type.COMMENT) && (i += "---\n"),
            i += e.join("")),
            "\n" !== i[i.length - 1] && (i += "\n"),
            i
        }
    }
    t.default = d
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(0)
      , i = o(n(4))
      , s = o(n(2));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class a extends i.default {
        static endOfDirective(e, t) {
            let n = e[t];
            for (; n && "\n" !== n && "#" !== n; )
                n = e[t += 1];
            for (n = e[t - 1]; " " === n || "\t" === n; )
                n = e[(t -= 1) - 1];
            return t
        }
        constructor() {
            super(r.Type.DIRECTIVE),
            this.name = null
        }
        get parameters() {
            const e = this.rawValue;
            return e ? e.trim().split(/[ \t]+/) : []
        }
        parseName(e) {
            const {src: t} = this.context;
            let n = e
              , r = t[n];
            for (; r && "\n" !== r && "\t" !== r && " " !== r; )
                r = t[n += 1];
            return this.name = t.slice(e, n),
            n
        }
        parseParameters(e) {
            const {src: t} = this.context;
            let n = e
              , r = t[n];
            for (; r && "\n" !== r && "#" !== r; )
                r = t[n += 1];
            return this.valueRange = new s.default(e,n),
            n
        }
        parse(e, t) {
            this.context = e;
            let n = this.parseName(t + 1);
            return n = this.parseParameters(n),
            n = this.parseComment(n),
            this.range = new s.default(t,n),
            n
        }
    }
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(0)
      , i = n(1)
      , s = g(n(78))
      , o = g(n(79))
      , a = g(n(52))
      , l = g(n(53))
      , c = g(n(80))
      , u = g(n(4))
      , f = g(n(54))
      , d = g(n(81))
      , h = g(n(82))
      , p = g(n(2));
    function g(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class m {
        static parseType(e, t, n) {
            switch (e[t]) {
            case "*":
                return r.Type.ALIAS;
            case ">":
                return r.Type.BLOCK_FOLDED;
            case "|":
                return r.Type.BLOCK_LITERAL;
            case "{":
                return r.Type.FLOW_MAP;
            case "[":
                return r.Type.FLOW_SEQ;
            case "?":
                return !n && u.default.atBlank(e, t + 1, !0) ? r.Type.MAP_KEY : r.Type.PLAIN;
            case ":":
                return !n && u.default.atBlank(e, t + 1, !0) ? r.Type.MAP_VALUE : r.Type.PLAIN;
            case "-":
                return !n && u.default.atBlank(e, t + 1, !0) ? r.Type.SEQ_ITEM : r.Type.PLAIN;
            case '"':
                return r.Type.QUOTE_DOUBLE;
            case "'":
                return r.Type.QUOTE_SINGLE;
            default:
                return r.Type.PLAIN
            }
        }
        constructor(e={}, {atLineStart: t, inCollection: n, inFlow: g, indent: v, lineStart: E, parent: y}={}) {
            var O, w, _;
            _ = (e,t)=>{
                if (u.default.atDocumentBoundary(this.src, t))
                    return null;
                const n = new m(this,e)
                  , {props: g, type: v, valueStart: E} = n.parseProps(t);
                let y;
                switch (v) {
                case r.Type.ALIAS:
                    y = new s.default(v,g);
                    break;
                case r.Type.BLOCK_FOLDED:
                case r.Type.BLOCK_LITERAL:
                    y = new o.default(v,g);
                    break;
                case r.Type.FLOW_MAP:
                case r.Type.FLOW_SEQ:
                    y = new c.default(v,g);
                    break;
                case r.Type.MAP_KEY:
                case r.Type.MAP_VALUE:
                case r.Type.SEQ_ITEM:
                    y = new l.default(v,g);
                    break;
                case r.Type.COMMENT:
                case r.Type.PLAIN:
                    y = new f.default(v,g);
                    break;
                case r.Type.QUOTE_DOUBLE:
                    y = new d.default(v,g);
                    break;
                case r.Type.QUOTE_SINGLE:
                    y = new h.default(v,g);
                    break;
                default:
                    return y.error = new i.YAMLSyntaxError(y,"Unknown node type: " + JSON.stringify(v)),
                    y.range = new p.default(t,t + 1),
                    y
                }
                let O = y.parse(n, E);
                if (y.range = new p.default(t,O),
                O <= t && (y.error = new Error("Node#parse consumed no characters"),
                y.error.parseEnd = O,
                y.error.source = y,
                y.range.end = t + 1),
                n.nodeStartsCollection(y)) {
                    y.error || n.atLineStart || n.parent.type !== r.Type.DOCUMENT || (y.error = new i.YAMLSyntaxError(y,"Block collection must not have preceding content here (e.g. directives-end indicator)"));
                    const e = new a.default(y);
                    return O = e.parse(new m(n), O),
                    e.range = new p.default(t,O),
                    e
                }
                return y
            }
            ,
            (w = "parseNode")in (O = this) ? Object.defineProperty(O, w, {
                value: _,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : O[w] = _,
            this.atLineStart = null != t ? t : e.atLineStart || !1,
            this.inCollection = null != n ? n : e.inCollection || !1,
            this.inFlow = null != g ? g : e.inFlow || !1,
            this.indent = null != v ? v : e.indent,
            this.lineStart = null != E ? E : e.lineStart,
            this.parent = null != y ? y : e.parent || {},
            this.root = e.root,
            this.src = e.src
        }
        get pretty() {
            const e = {
                start: `${this.lineStart} + ${this.indent}`,
                in: [],
                parent: this.parent.type
            };
            return this.atLineStart || (e.start += " + N"),
            this.inCollection && e.in.push("collection"),
            this.inFlow && e.in.push("flow"),
            e
        }
        nodeStartsCollection(e) {
            const {inCollection: t, inFlow: n, src: r} = this;
            if (t || n)
                return !1;
            if (e instanceof l.default)
                return !0;
            let i = e.range.end;
            return "\n" !== r[i] && "\n" !== r[i - 1] && (i = u.default.endOfWhiteSpace(r, i),
            ":" === r[i])
        }
        parseProps(e) {
            const {inFlow: t, parent: n, src: i} = this
              , s = [];
            let o = !1
              , a = i[e = u.default.endOfWhiteSpace(i, e)];
            for (; a === r.Char.ANCHOR || a === r.Char.COMMENT || a === r.Char.TAG || "\n" === a; ) {
                if ("\n" === a) {
                    const t = e + 1
                      , s = u.default.endOfIndent(i, t)
                      , a = s - (t + this.indent)
                      , l = n.type === r.Type.SEQ_ITEM && n.context.atLineStart;
                    if (!u.default.nextNodeIsIndented(i[s], a, !l))
                        break;
                    this.atLineStart = !0,
                    this.lineStart = t,
                    o = !1,
                    e = s
                } else if (a === r.Char.COMMENT) {
                    const t = u.default.endOfLine(i, e + 1);
                    s.push(new p.default(e,t)),
                    e = t
                } else {
                    let t = u.default.endOfIdentifier(i, e + 1);
                    a === r.Char.TAG && "," === i[t] && /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(i.slice(e + 1, t + 13)) && (t = u.default.endOfIdentifier(i, t + 5)),
                    s.push(new p.default(e,t)),
                    o = !0,
                    e = u.default.endOfWhiteSpace(i, t)
                }
                a = i[e]
            }
            o && ":" === a && u.default.atBlank(i, e + 1, !0) && (e -= 1);
            return {
                props: s,
                type: m.parseType(i, e, t),
                valueStart: e
            }
        }
    }
    t.default = m
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(n(4))
      , i = s(n(2));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class o extends r.default {
        parse(e, t) {
            this.context = e;
            const {src: n} = e;
            let s = r.default.endOfIdentifier(n, t + 1);
            return this.valueRange = new i.default(t + 1,s),
            s = r.default.endOfWhiteSpace(n, s),
            s = this.parseComment(s),
            s
        }
    }
    t.default = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = t.Chomp = void 0;
    var r = n(0)
      , i = o(n(4))
      , s = o(n(2));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    const a = {
        CLIP: "CLIP",
        KEEP: "KEEP",
        STRIP: "STRIP"
    };
    t.Chomp = a;
    class l extends i.default {
        constructor(e, t) {
            super(e, t),
            this.blockIndent = null,
            this.chomping = a.CLIP,
            this.header = null
        }
        get includesTrailingLines() {
            return this.chomping === a.KEEP
        }
        get strValue() {
            if (!this.valueRange || !this.context)
                return null;
            let {start: e, end: t} = this.valueRange;
            const {indent: n, src: s} = this.context;
            if (this.valueRange.isEmpty())
                return "";
            let o = null
              , l = s[t - 1];
            for (; "\n" === l || "\t" === l || " " === l; ) {
                if (t -= 1,
                t <= e) {
                    if (this.chomping === a.KEEP)
                        break;
                    return ""
                }
                "\n" === l && (o = t),
                l = s[t - 1]
            }
            let c = t + 1;
            o && (this.chomping === a.KEEP ? (c = o,
            t = this.valueRange.end) : t = o);
            const u = n + this.blockIndent
              , f = this.type === r.Type.BLOCK_FOLDED;
            let d = !0
              , h = ""
              , p = ""
              , g = !1;
            for (let n = e; n < t; ++n) {
                for (let e = 0; e < u && " " === s[n]; ++e)
                    n += 1;
                const e = s[n];
                if ("\n" === e)
                    "\n" === p ? h += "\n" : p = "\n";
                else {
                    const r = i.default.endOfLine(s, n)
                      , o = s.slice(n, r);
                    n = r,
                    f && (" " === e || "\t" === e) && n < c ? (" " === p ? p = "\n" : g || d || "\n" !== p || (p = "\n\n"),
                    h += p + o,
                    p = r < t && s[r] || "",
                    g = !0) : (h += p + o,
                    p = f && n < c ? " " : "\n",
                    g = !1),
                    d && "" !== o && (d = !1)
                }
            }
            return this.chomping === a.STRIP ? h : h + "\n"
        }
        parseBlockHeader(e) {
            const {src: t} = this.context;
            let n = e + 1
              , r = "";
            for (; ; ) {
                const i = t[n];
                switch (i) {
                case "-":
                    this.chomping = a.STRIP;
                    break;
                case "+":
                    this.chomping = a.KEEP;
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    r += i;
                    break;
                default:
                    return this.blockIndent = Number(r) || null,
                    this.header = new s.default(e,n),
                    n
                }
                n += 1
            }
        }
        parseBlockValue(e) {
            const {indent: t, src: n} = this.context;
            let r = e
              , o = e
              , l = this.blockIndent ? t + this.blockIndent - 1 : t
              , c = 1;
            for (let e = n[r]; "\n" === e && (r += 1,
            !i.default.atDocumentBoundary(n, r)); e = n[r]) {
                const e = i.default.endOfBlockIndent(n, l, r);
                if (null === e)
                    break;
                if (!this.blockIndent) {
                    const i = e - (r + t);
                    if ("\n" !== n[e]) {
                        if (i < c) {
                            r -= 1;
                            break
                        }
                        this.blockIndent = i,
                        l = t + this.blockIndent - 1
                    } else
                        i > c && (c = i)
                }
                r = "\n" === n[e] ? e : o = i.default.endOfLine(n, e)
            }
            return this.chomping !== a.KEEP && (r = n[o] ? o + 1 : o),
            this.valueRange = new s.default(e + 1,r),
            r
        }
        parse(e, t) {
            this.context = e;
            const {src: n} = e;
            let r = this.parseBlockHeader(t);
            return r = i.default.endOfWhiteSpace(n, r),
            r = this.parseComment(r),
            r = this.parseBlockValue(r),
            r
        }
        setOrigRanges(e, t) {
            return t = super.setOrigRanges(e, t),
            this.header ? this.header.setOrigRange(e, t) : t
        }
    }
    t.default = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(0)
      , i = n(1)
      , s = c(n(23))
      , o = c(n(36))
      , a = c(n(4))
      , l = c(n(2));
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class u extends a.default {
        constructor(e, t) {
            super(e, t),
            this.items = null
        }
        prevNodeIsJsonLike(e=this.items.length) {
            const t = this.items[e - 1];
            return !!t && (t.jsonLike || t.type === r.Type.COMMENT && this.nodeIsJsonLike(e - 1))
        }
        parse(e, t) {
            this.context = e;
            const {parseNode: n, src: r} = e;
            let {indent: c, lineStart: u} = e
              , f = r[t];
            this.items = [{
                char: f,
                offset: t
            }];
            let d = a.default.endOfWhiteSpace(r, t + 1);
            for (f = r[d]; f && "]" !== f && "}" !== f; ) {
                switch (f) {
                case "\n":
                    u = d + 1;
                    if ("\n" === r[a.default.endOfWhiteSpace(r, u)]) {
                        const e = new s.default;
                        u = e.parse({
                            src: r
                        }, u),
                        this.items.push(e)
                    }
                    if (d = a.default.endOfIndent(r, u),
                    d <= u + c && (f = r[d],
                    d < u + c || "]" !== f && "}" !== f)) {
                        const e = "Insufficient indentation in flow collection";
                        this.error = new i.YAMLSemanticError(this,e)
                    }
                    break;
                case ",":
                    this.items.push({
                        char: f,
                        offset: d
                    }),
                    d += 1;
                    break;
                case "#":
                    {
                        const e = new o.default;
                        d = e.parse({
                            src: r
                        }, d),
                        this.items.push(e)
                    }
                    break;
                case "?":
                case ":":
                    {
                        const e = r[d + 1];
                        if ("\n" === e || "\t" === e || " " === e || "," === e || ":" === f && this.prevNodeIsJsonLike()) {
                            this.items.push({
                                char: f,
                                offset: d
                            }),
                            d += 1;
                            break
                        }
                    }
                default:
                    {
                        const e = n({
                            atLineStart: !1,
                            inCollection: !1,
                            inFlow: !0,
                            indent: -1,
                            lineStart: u,
                            parent: this
                        }, d);
                        if (!e)
                            return this.valueRange = new l.default(t,d),
                            d;
                        this.items.push(e),
                        d = a.default.normalizeOffset(r, e.range.end)
                    }
                }
                d = a.default.endOfWhiteSpace(r, d),
                f = r[d]
            }
            return this.valueRange = new l.default(t,d + 1),
            f && (this.items.push({
                char: f,
                offset: d
            }),
            d = a.default.endOfWhiteSpace(r, d + 1),
            d = this.parseComment(d)),
            d
        }
        setOrigRanges(e, t) {
            return t = super.setOrigRanges(e, t),
            this.items.forEach(n=>{
                if (n instanceof a.default)
                    t = n.setOrigRanges(e, t);
                else if (0 === e.length)
                    n.origOffset = n.offset;
                else {
                    let r = t;
                    for (; r < e.length && !(e[r] > n.offset); )
                        ++r;
                    n.origOffset = n.offset + r,
                    t = r
                }
            }
            ),
            t
        }
        toString() {
            const {context: {src: e}, items: t, range: n, value: r} = this;
            if (null != r)
                return r;
            const i = t.filter(e=>e instanceof a.default);
            let s = ""
              , o = n.start;
            return i.forEach(t=>{
                const n = e.slice(o, t.range.start);
                o = t.range.end,
                s += n + String(t),
                "\n" === s[s.length - 1] && "\n" !== e[o - 1] && "\n" === e[o] && (o += 1)
            }
            ),
            s += e.slice(o, n.end),
            a.default.addStringTerminator(e, n.end, s)
        }
    }
    t.default = u
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(1)
      , i = o(n(4))
      , s = o(n(2));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class a extends i.default {
        static endOfQuote(e, t) {
            let n = e[t];
            for (; n && '"' !== n; )
                n = e[t += "\\" === n ? 2 : 1];
            return t + 1
        }
        get strValue() {
            if (!this.valueRange || !this.context)
                return null;
            const e = []
              , {start: t, end: n} = this.valueRange
              , {indent: s, src: o} = this.context;
            '"' !== o[n - 1] && e.push(new r.YAMLSyntaxError(this,'Missing closing "quote'));
            let a = "";
            for (let l = t + 1; l < n - 1; ++l) {
                const t = o[l];
                if ("\n" === t) {
                    i.default.atDocumentBoundary(o, l + 1) && e.push(new r.YAMLSemanticError(this,"Document boundary indicators are not allowed within string values"));
                    const {fold: t, offset: n, error: c} = i.default.foldNewline(o, l, s);
                    a += t,
                    l = n,
                    c && e.push(new r.YAMLSemanticError(this,"Multi-line double-quoted string needs to be sufficiently indented"))
                } else if ("\\" === t)
                    switch (l += 1,
                    o[l]) {
                    case "0":
                        a += "\0";
                        break;
                    case "a":
                        a += "";
                        break;
                    case "b":
                        a += "\b";
                        break;
                    case "e":
                        a += "";
                        break;
                    case "f":
                        a += "\f";
                        break;
                    case "n":
                        a += "\n";
                        break;
                    case "r":
                        a += "\r";
                        break;
                    case "t":
                        a += "\t";
                        break;
                    case "v":
                        a += "\v";
                        break;
                    case "N":
                        a += "";
                        break;
                    case "_":
                        a += " ";
                        break;
                    case "L":
                        a += "\u2028";
                        break;
                    case "P":
                        a += "\u2029";
                        break;
                    case " ":
                        a += " ";
                        break;
                    case '"':
                        a += '"';
                        break;
                    case "/":
                        a += "/";
                        break;
                    case "\\":
                        a += "\\";
                        break;
                    case "\t":
                        a += "\t";
                        break;
                    case "x":
                        a += this.parseCharCode(l + 1, 2, e),
                        l += 2;
                        break;
                    case "u":
                        a += this.parseCharCode(l + 1, 4, e),
                        l += 4;
                        break;
                    case "U":
                        a += this.parseCharCode(l + 1, 8, e),
                        l += 8;
                        break;
                    case "\n":
                        for (; " " === o[l + 1] || "\t" === o[l + 1]; )
                            l += 1;
                        break;
                    default:
                        e.push(new r.YAMLSyntaxError(this,"Invalid escape sequence " + o.substr(l - 1, 2))),
                        a += "\\" + o[l]
                    }
                else if (" " === t || "\t" === t) {
                    const e = l;
                    let n = o[l + 1];
                    for (; " " === n || "\t" === n; )
                        l += 1,
                        n = o[l + 1];
                    "\n" !== n && (a += l > e ? o.slice(e, l + 1) : t)
                } else
                    a += t
            }
            return e.length > 0 ? {
                errors: e,
                str: a
            } : a
        }
        parseCharCode(e, t, n) {
            const {src: i} = this.context
              , s = i.substr(e, t)
              , o = s.length === t && /^[0-9a-fA-F]+$/.test(s) ? parseInt(s, 16) : NaN;
            return isNaN(o) ? (n.push(new r.YAMLSyntaxError(this,"Invalid escape sequence " + i.substr(e - 2, t + 2))),
            i.substr(e - 2, t + 2)) : String.fromCodePoint(o)
        }
        parse(e, t) {
            this.context = e;
            const {src: n} = e;
            let r = a.endOfQuote(n, t + 1);
            return this.valueRange = new s.default(t,r),
            r = i.default.endOfWhiteSpace(n, r),
            r = this.parseComment(r),
            r
        }
    }
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(1)
      , i = o(n(4))
      , s = o(n(2));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class a extends i.default {
        static endOfQuote(e, t) {
            let n = e[t];
            for (; n; )
                if ("'" === n) {
                    if ("'" !== e[t + 1])
                        break;
                    n = e[t += 2]
                } else
                    n = e[t += 1];
            return t + 1
        }
        get strValue() {
            if (!this.valueRange || !this.context)
                return null;
            const e = []
              , {start: t, end: n} = this.valueRange
              , {indent: s, src: o} = this.context;
            "'" !== o[n - 1] && e.push(new r.YAMLSyntaxError(this,"Missing closing 'quote"));
            let a = "";
            for (let l = t + 1; l < n - 1; ++l) {
                const t = o[l];
                if ("\n" === t) {
                    i.default.atDocumentBoundary(o, l + 1) && e.push(new r.YAMLSemanticError(this,"Document boundary indicators are not allowed within string values"));
                    const {fold: t, offset: n, error: c} = i.default.foldNewline(o, l, s);
                    a += t,
                    l = n,
                    c && e.push(new r.YAMLSemanticError(this,"Multi-line single-quoted string needs to be sufficiently indented"))
                } else if ("'" === t)
                    a += t,
                    l += 1,
                    "'" !== o[l] && e.push(new r.YAMLSyntaxError(this,"Unescaped single quote? This should not happen."));
                else if (" " === t || "\t" === t) {
                    const e = l;
                    let n = o[l + 1];
                    for (; " " === n || "\t" === n; )
                        l += 1,
                        n = o[l + 1];
                    "\n" !== n && (a += l > e ? o.slice(e, l + 1) : t)
                } else
                    a += t
            }
            return e.length > 0 ? {
                errors: e,
                str: a
            } : a
        }
        parse(e, t) {
            this.context = e;
            const {src: n} = e;
            let r = a.endOfQuote(n, t + 1);
            return this.valueRange = new s.default(t,r),
            r = i.default.endOfWhiteSpace(n, r),
            r = this.parseComment(r),
            r
        }
    }
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = g(n(24))
      , i = g(n(84))
      , s = n(0)
      , o = n(1)
      , a = g(n(85))
      , l = g(n(56))
      , c = g(n(25))
      , u = function(e) {
        if (e && e.__esModule)
            return e;
        var t = p();
        if (t && t.has(e))
            return t.get(e);
        var n = {};
        if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i]
                }
        }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(10))
      , f = g(n(15))
      , d = g(n(5))
      , h = g(n(14));
    function p() {
        if ("function" != typeof WeakMap)
            return null;
        var e = new WeakMap;
        return p = function() {
            return e
        }
        ,
        e
    }
    function g(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class m {
        constructor(e) {
            this.anchors = new i.default(e.anchorPrefix),
            this.commentBefore = null,
            this.comment = null,
            this.contents = null,
            this.directivesEndMarker = null,
            this.errors = [],
            this.options = e,
            this.schema = null,
            this.tagPrefixes = [],
            this.version = null,
            this.warnings = []
        }
        assertCollectionContents() {
            if (this.contents instanceof u.default)
                return !0;
            throw new Error("Expected a YAML collection as document contents")
        }
        add(e) {
            return this.assertCollectionContents(),
            this.contents.add(e)
        }
        addIn(e, t) {
            this.assertCollectionContents(),
            this.contents.addIn(e, t)
        }
        delete(e) {
            return this.assertCollectionContents(),
            this.contents.delete(e)
        }
        deleteIn(e) {
            return (0,
            u.isEmptyPath)(e) ? null != this.contents && (this.contents = null,
            !0) : (this.assertCollectionContents(),
            this.contents.deleteIn(e))
        }
        getDefaults() {
            return m.defaults[this.version] || m.defaults[this.options.version] || {}
        }
        get(e, t) {
            return this.contents instanceof u.default ? this.contents.get(e, t) : void 0
        }
        getIn(e, t) {
            return (0,
            u.isEmptyPath)(e) ? !t && this.contents instanceof d.default ? this.contents.value : this.contents : this.contents instanceof u.default ? this.contents.getIn(e, t) : void 0
        }
        has(e) {
            return this.contents instanceof u.default && this.contents.has(e)
        }
        hasIn(e) {
            return (0,
            u.isEmptyPath)(e) ? void 0 !== this.contents : this.contents instanceof u.default && this.contents.hasIn(e)
        }
        set(e, t) {
            this.assertCollectionContents(),
            this.contents.set(e, t)
        }
        setIn(e, t) {
            (0,
            u.isEmptyPath)(e) ? this.contents = t : (this.assertCollectionContents(),
            this.contents.setIn(e, t))
        }
        setSchema(e, t) {
            if (!e && !t && this.schema)
                return;
            "number" == typeof e && (e = e.toFixed(1)),
            "1.0" === e || "1.1" === e || "1.2" === e ? (this.version ? this.version = e : this.options.version = e,
            delete this.options.schema) : e && "string" == typeof e && (this.options.schema = e),
            Array.isArray(t) && (this.options.customTags = t);
            const n = Object.assign({}, this.getDefaults(), this.options);
            this.schema = new l.default(n)
        }
        parse(e, t) {
            this.options.keepCstNodes && (this.cstNode = e),
            this.options.keepNodeTypes && (this.type = "DOCUMENT");
            const {directives: n=[], contents: r=[], directivesEndMarker: i, error: s, valueRange: a} = e;
            if (s && (s.source || (s.source = this),
            this.errors.push(s)),
            this.parseDirectives(n, t),
            i && (this.directivesEndMarker = !0),
            this.range = a ? [a.start, a.end] : null,
            this.setSchema(),
            this.anchors._cstAliases = [],
            this.parseContents(r),
            this.anchors.resolveNodes(),
            this.options.prettyErrors) {
                for (const e of this.errors)
                    e instanceof o.YAMLError && e.makePretty();
                for (const e of this.warnings)
                    e instanceof o.YAMLError && e.makePretty()
            }
            return this
        }
        parseDirectives(e, t) {
            const n = [];
            let r = !1;
            if (e.forEach(e=>{
                const {comment: t, name: i} = e;
                switch (i) {
                case "TAG":
                    this.resolveTagDirective(e),
                    r = !0;
                    break;
                case "YAML":
                case "YAML:1.0":
                    this.resolveYamlDirective(e),
                    r = !0;
                    break;
                default:
                    if (i) {
                        const t = "YAML only supports %TAG and %YAML directives, and not %" + i;
                        this.warnings.push(new o.YAMLWarning(e,t))
                    }
                }
                t && n.push(t)
            }
            ),
            t && !r && "1.1" === (this.version || t.version || this.options.version)) {
                const e = ({handle: e, prefix: t})=>({
                    handle: e,
                    prefix: t
                });
                this.tagPrefixes = t.tagPrefixes.map(e),
                this.version = t.version
            }
            this.commentBefore = n.join("\n") || null
        }
        parseContents(e) {
            const t = {
                before: [],
                after: []
            }
              , n = [];
            let r = !1;
            switch (e.forEach(e=>{
                if (e.valueRange) {
                    if (1 === n.length) {
                        const t = "Document is not valid YAML (bad indentation?)";
                        this.errors.push(new o.YAMLSyntaxError(e,t))
                    }
                    const t = this.resolveNode(e);
                    r && (t.spaceBefore = !0,
                    r = !1),
                    n.push(t)
                } else if (null !== e.comment) {
                    (0 === n.length ? t.before : t.after).push(e.comment)
                } else
                    e.type === s.Type.BLANK_LINE && (r = !0,
                    0 === n.length && t.before.length > 0 && !this.commentBefore && (this.commentBefore = t.before.join("\n"),
                    t.before = []))
            }
            ),
            n.length) {
            case 0:
                this.contents = null,
                t.after = t.before;
                break;
            case 1:
                if (this.contents = n[0],
                this.contents) {
                    const e = t.before.join("\n") || null;
                    if (e) {
                        const t = this.contents instanceof u.default && this.contents.items[0] ? this.contents.items[0] : this.contents;
                        t.commentBefore = t.commentBefore ? `${e}\n${t.commentBefore}` : e
                    }
                } else
                    t.after = t.before.concat(t.after);
                break;
            default:
                this.contents = n,
                this.contents[0] ? this.contents[0].commentBefore = t.before.join("\n") || null : t.after = t.before.concat(t.after)
            }
            this.comment = t.after.join("\n") || null
        }
        resolveTagDirective(e) {
            const [t,n] = e.parameters;
            if (t && n)
                if (this.tagPrefixes.every(e=>e.handle !== t))
                    this.tagPrefixes.push({
                        handle: t,
                        prefix: n
                    });
                else {
                    const t = "The %TAG directive must only be given at most once per handle in the same document.";
                    this.errors.push(new o.YAMLSemanticError(e,t))
                }
            else {
                const t = "Insufficient parameters given for %TAG directive";
                this.errors.push(new o.YAMLSemanticError(e,t))
            }
        }
        resolveYamlDirective(e) {
            let[t] = e.parameters;
            if ("YAML:1.0" === e.name && (t = "1.0"),
            this.version) {
                const t = "The %YAML directive must only be given at most once per document.";
                this.errors.push(new o.YAMLSemanticError(e,t))
            }
            if (t) {
                if (!m.defaults[t]) {
                    const n = `Document will be parsed as YAML ${this.version || this.options.version} rather than YAML ${t}`;
                    this.warnings.push(new o.YAMLWarning(e,n))
                }
                this.version = t
            } else {
                const t = "Insufficient parameters given for %YAML directive";
                this.errors.push(new o.YAMLSemanticError(e,t))
            }
        }
        resolveTagName(e) {
            const {tag: t, type: n} = e;
            let r = !1;
            if (t) {
                const {handle: n, suffix: i, verbatim: s} = t;
                if (s) {
                    if ("!" !== s && "!!" !== s)
                        return s;
                    const t = `Verbatim tags aren't resolved, so ${s} is invalid.`;
                    this.errors.push(new o.YAMLSemanticError(e,t))
                } else if ("!" !== n || i) {
                    let t = this.tagPrefixes.find(e=>e.handle === n);
                    if (!t) {
                        const e = this.getDefaults().tagPrefixes;
                        e && (t = e.find(e=>e.handle === n))
                    }
                    if (t) {
                        if (i) {
                            if ("!" === n && "1.0" === (this.version || this.options.version)) {
                                if ("^" === i[0])
                                    return i;
                                if (/[:/]/.test(i)) {
                                    const e = i.match(/^([a-z0-9-]+)\/(.*)/i);
                                    return e ? `tag:${e[1]}.yaml.org,2002:${e[2]}` : "tag:" + i
                                }
                            }
                            return t.prefix + decodeURIComponent(i)
                        }
                        this.errors.push(new o.YAMLSemanticError(e,`The ${n} tag has no suffix.`))
                    } else {
                        const t = `The ${n} tag handle is non-default and was not declared.`;
                        this.errors.push(new o.YAMLSemanticError(e,t))
                    }
                } else
                    r = !0
            }
            switch (n) {
            case s.Type.BLOCK_FOLDED:
            case s.Type.BLOCK_LITERAL:
            case s.Type.QUOTE_DOUBLE:
            case s.Type.QUOTE_SINGLE:
                return l.default.defaultTags.STR;
            case s.Type.FLOW_MAP:
            case s.Type.MAP:
                return l.default.defaultTags.MAP;
            case s.Type.FLOW_SEQ:
            case s.Type.SEQ:
                return l.default.defaultTags.SEQ;
            case s.Type.PLAIN:
                return r ? l.default.defaultTags.STR : null;
            default:
                return null
            }
        }
        resolveNode(e) {
            if (!e)
                return null;
            const {anchors: t, errors: n, schema: r} = this;
            let i = !1
              , a = !1;
            const l = {
                before: [],
                after: []
            }
              , u = (e=>e && [s.Type.MAP_KEY, s.Type.MAP_VALUE, s.Type.SEQ_ITEM].includes(e.type))(e.context.parent) ? e.context.parent.props.concat(e.props) : e.props;
            for (const {start: t, end: r} of u)
                switch (e.context.src[t]) {
                case s.Char.COMMENT:
                    {
                        if (!e.commentHasRequiredWhitespace(t)) {
                            const t = "Comments must be separated from other tokens by white space characters";
                            n.push(new o.YAMLSemanticError(e,t))
                        }
                        const i = e.context.src.slice(t + 1, r)
                          , {header: s, valueRange: a} = e;
                        a && (t > a.start || s && t > s.start) ? l.after.push(i) : l.before.push(i)
                    }
                    break;
                case s.Char.ANCHOR:
                    if (i) {
                        const t = "A node can have at most one anchor";
                        n.push(new o.YAMLSemanticError(e,t))
                    }
                    i = !0;
                    break;
                case s.Char.TAG:
                    if (a) {
                        const t = "A node can have at most one tag";
                        n.push(new o.YAMLSemanticError(e,t))
                    }
                    a = !0
                }
            if (i) {
                const n = e.anchor
                  , r = t.getNode(n);
                r && (t.map[t.newName(n)] = r),
                t.map[n] = e
            }
            let f;
            if (e.type === s.Type.ALIAS) {
                if (i || a) {
                    const t = "An alias node must not specify any properties";
                    n.push(new o.YAMLSemanticError(e,t))
                }
                const r = e.rawValue
                  , s = t.getNode(r);
                if (!s) {
                    const t = "Aliased anchor not found: " + r;
                    return n.push(new o.YAMLReferenceError(e,t)),
                    null
                }
                f = new c.default(s),
                t._cstAliases.push(f)
            } else {
                const t = this.resolveTagName(e);
                if (t)
                    f = r.resolveNodeWithFallback(this, e, t);
                else {
                    if (e.type !== s.Type.PLAIN) {
                        const t = `Failed to resolve ${e.type} node here`;
                        return n.push(new o.YAMLSyntaxError(e,t)),
                        null
                    }
                    try {
                        f = r.resolveScalar(e.strValue || "")
                    } catch (t) {
                        return t.source || (t.source = e),
                        n.push(t),
                        null
                    }
                }
            }
            if (f) {
                f.range = [e.range.start, e.range.end],
                this.options.keepCstNodes && (f.cstNode = e),
                this.options.keepNodeTypes && (f.type = e.type);
                const t = l.before.join("\n");
                t && (f.commentBefore = f.commentBefore ? `${f.commentBefore}\n${t}` : t);
                const n = l.after.join("\n");
                n && (f.comment = f.comment ? `${f.comment}\n${n}` : n)
            }
            return e.resolved = f
        }
        listNonDefaultTags() {
            return (0,
            a.default)(this.contents).filter(e=>0 !== e.indexOf(l.default.defaultPrefix))
        }
        setTagPrefix(e, t) {
            if ("!" !== e[0] || "!" !== e[e.length - 1])
                throw new Error("Handle must start and end with !");
            if (t) {
                const n = this.tagPrefixes.find(t=>t.handle === e);
                n ? n.prefix = t : this.tagPrefixes.push({
                    handle: e,
                    prefix: t
                })
            } else
                this.tagPrefixes = this.tagPrefixes.filter(t=>t.handle !== e)
        }
        stringifyTag(e) {
            if ("1.0" === (this.version || this.options.version)) {
                const t = e.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/);
                if (t)
                    return "!" + t[1];
                const n = e.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/);
                return n ? `!${n[1]}/${n[2]}` : "!" + e.replace(/^tag:/, "")
            }
            {
                let t = this.tagPrefixes.find(t=>0 === e.indexOf(t.prefix));
                if (!t) {
                    const n = this.getDefaults().tagPrefixes;
                    t = n && n.find(t=>0 === e.indexOf(t.prefix))
                }
                if (!t)
                    return "!" === e[0] ? e : `!<${e}>`;
                const n = e.substr(t.prefix.length).replace(/[!,[\]{}]/g, e=>({
                    "!": "%21",
                    ",": "%2C",
                    "[": "%5B",
                    "]": "%5D",
                    "{": "%7B",
                    "}": "%7D"
                }[e]));
                return t.handle + n
            }
        }
        toJSON(e) {
            const {keepBlobsInJSON: t, mapAsMap: n, maxAliasCount: r} = this.options
              , i = t && ("string" != typeof e || !(this.contents instanceof d.default))
              , s = {
                doc: this,
                keep: i,
                mapAsMap: i && !!n,
                maxAliasCount: r
            }
              , o = Object.keys(this.anchors.map);
            return o.length > 0 && (s.anchors = o.map(e=>({
                alias: [],
                aliasCount: 0,
                count: 1,
                node: this.anchors.map[e]
            }))),
            (0,
            h.default)(this.contents, e, s)
        }
        toString() {
            if (this.errors.length > 0)
                throw new Error("Document with errors cannot be stringified");
            this.setSchema();
            const e = [];
            let t = !1;
            if (this.version) {
                let n = "%YAML 1.2";
                "yaml-1.1" === this.schema.name && ("1.0" === this.version ? n = "%YAML:1.0" : "1.1" === this.version && (n = "%YAML 1.1")),
                e.push(n),
                t = !0
            }
            const n = this.listNonDefaultTags();
            this.tagPrefixes.forEach(({handle: r, prefix: i})=>{
                n.some(e=>0 === e.indexOf(i)) && (e.push(`%TAG ${r} ${i}`),
                t = !0)
            }
            ),
            (t || this.directivesEndMarker) && e.push("---"),
            this.commentBefore && (!t && this.directivesEndMarker || e.unshift(""),
            e.unshift(this.commentBefore.replace(/^/gm, "#")));
            const i = {
                anchors: {},
                doc: this,
                indent: ""
            };
            let s = !1
              , o = null;
            if (this.contents) {
                this.contents instanceof f.default && (this.contents.spaceBefore && (t || this.directivesEndMarker) && e.push(""),
                this.contents.commentBefore && e.push(this.contents.commentBefore.replace(/^/gm, "#")),
                i.forceBlockIndent = !!this.comment,
                o = this.contents.comment);
                const n = o ? null : ()=>s = !0
                  , a = this.schema.stringify(this.contents, i, ()=>o = null, n);
                e.push((0,
                r.default)(a, "", o))
            } else
                void 0 !== this.contents && e.push(this.schema.stringify(this.contents, i));
            return this.comment && (s && !o || "" === e[e.length - 1] || e.push(""),
            e.push(this.comment.replace(/^/gm, "#"))),
            e.join("\n") + "\n"
        }
    }
    var v, E, y;
    t.default = m,
    v = m,
    E = "defaults",
    y = {
        "1.0": {
            schema: "yaml-1.1",
            merge: !0,
            tagPrefixes: [{
                handle: "!",
                prefix: l.default.defaultPrefix
            }, {
                handle: "!!",
                prefix: "tag:private.yaml.org,2002:"
            }]
        },
        1.1: {
            schema: "yaml-1.1",
            merge: !0,
            tagPrefixes: [{
                handle: "!",
                prefix: "!"
            }, {
                handle: "!!",
                prefix: l.default.defaultPrefix
            }]
        },
        1.2: {
            schema: "core",
            merge: !1,
            tagPrefixes: [{
                handle: "!",
                prefix: "!"
            }, {
                handle: "!!",
                prefix: l.default.defaultPrefix
            }]
        }
    },
    E in v ? Object.defineProperty(v, E, {
        value: y,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : v[E] = y
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = l(n(25))
      , i = l(n(13))
      , s = l(n(55))
      , o = l(n(5))
      , a = l(n(16));
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class c {
        static validAnchorNode(e) {
            return e instanceof o.default || e instanceof a.default || e instanceof i.default
        }
        constructor(e) {
            var t, n, r;
            r = {},
            (n = "map")in (t = this) ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r,
            this.prefix = e
        }
        createAlias(e, t) {
            return this.setAnchor(e, t),
            new r.default(e)
        }
        createMergePair(...e) {
            const t = new s.default;
            return t.value.items = e.map(e=>{
                if (e instanceof r.default) {
                    if (e.source instanceof i.default)
                        return e
                } else if (e instanceof i.default)
                    return this.createAlias(e);
                throw new Error("Merge sources must be Map nodes or their Aliases")
            }
            ),
            t
        }
        getName(e) {
            const {map: t} = this;
            return Object.keys(t).find(n=>t[n] === e)
        }
        getNode(e) {
            return this.map[e]
        }
        newName(e) {
            e || (e = this.prefix);
            const t = Object.keys(this.map);
            for (let n = 1; ; ++n) {
                const r = `${e}${n}`;
                if (!t.includes(r))
                    return r
            }
        }
        resolveNodes() {
            const {map: e, _cstAliases: t} = this;
            Object.keys(e).forEach(t=>{
                e[t] = e[t].resolved
            }
            ),
            t.forEach(e=>{
                e.source = e.source.resolved
            }
            ),
            delete this._cstAliases
        }
        setAnchor(e, t) {
            if (null != e && !c.validAnchorNode(e))
                throw new Error("Anchors may only be set for Scalar, Seq and Map nodes");
            if (t && /[\x00-\x19\s,[\]{}]/.test(t))
                throw new Error("Anchor names must not contain whitespace or control characters");
            const {map: n} = this
              , r = e && Object.keys(n).find(t=>n[t] === e);
            if (r) {
                if (!t)
                    return r;
                r !== t && (delete n[r],
                n[t] = e)
            } else {
                if (!t) {
                    if (!e)
                        return null;
                    t = this.newName()
                }
                n[t] = e
            }
            return t
        }
    }
    t.default = c
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = o(n(10))
      , i = o(n(7))
      , s = o(n(5));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    const a = (e,t)=>{
        if (e && "object" == typeof e) {
            const {tag: n} = e;
            e instanceof r.default ? (n && (t[n] = !0),
            e.items.forEach(e=>a(e, t))) : e instanceof i.default ? (a(e.key, t),
            a(e.value, t)) : e instanceof s.default && n && (t[n] = !0)
        }
        return t
    }
    ;
    t.default = e=>Object.keys(a(e, {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e, t, n, {indentAtStart: i, lineWidth: s=80, minContentWidth: o=20, onFold: a, onOverflow: l}) {
        if (!s || s < 0)
            return e;
        const c = Math.max(1 + o, 1 + s - t.length);
        if (e.length <= c)
            return e;
        const u = []
          , f = {};
        let d, h = s - ("number" == typeof i ? i : t.length), p = void 0, g = void 0, m = !1, v = -1;
        "block" === n && (v = r(e, v),
        -1 !== v && (h = v + c));
        for (; d = e[v += 1]; ) {
            if ("quoted" === n && "\\" === d)
                switch (e[v + 1]) {
                case "x":
                    v += 3;
                    break;
                case "u":
                    v += 5;
                    break;
                case "U":
                    v += 9;
                    break;
                default:
                    v += 1
                }
            if ("\n" === d)
                "block" === n && (v = r(e, v)),
                h = v + c,
                p = void 0;
            else {
                if (" " === d && g && " " !== g && "\n" !== g && "\t" !== g) {
                    const t = e[v + 1];
                    t && " " !== t && "\n" !== t && "\t" !== t && (p = v)
                }
                if (v >= h)
                    if (p)
                        u.push(p),
                        h = p + c,
                        p = void 0;
                    else if ("quoted" === n) {
                        for (; " " === g || "\t" === g; )
                            g = d,
                            d = e[v += 1],
                            m = !0;
                        u.push(v - 2),
                        f[v - 2] = !0,
                        h = v - 2 + c,
                        p = void 0
                    } else
                        m = !0
            }
            g = d
        }
        m && l && l();
        if (0 === u.length)
            return e;
        a && a();
        let E = e.slice(0, u[0]);
        for (let r = 0; r < u.length; ++r) {
            const i = u[r]
              , s = u[r + 1] || e.length;
            "quoted" === n && f[i] && (E += e[i] + "\\"),
            E += `\n${t}${e.slice(i + 1, s)}`
        }
        return E
    }
    ,
    t.FOLD_QUOTED = t.FOLD_BLOCK = t.FOLD_FLOW = void 0;
    t.FOLD_FLOW = "flow";
    t.FOLD_BLOCK = "block";
    t.FOLD_QUOTED = "quoted";
    const r = (e,t)=>{
        let n = e[t + 1];
        for (; " " === n || "\t" === n; ) {
            do {
                n = e[t += 1]
            } while (n && "\n" !== n);
            n = e[t + 1]
        }
        return t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.tags = t.schemas = void 0;
    var r = p(n(88))
      , i = p(n(37))
      , s = p(n(89))
      , o = p(n(90))
      , a = p(n(38))
      , l = p(n(39))
      , c = p(n(61))
      , u = p(n(62))
      , f = p(n(40))
      , d = p(n(63))
      , h = n(64);
    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    const g = {
        core: r.default,
        failsafe: i.default,
        json: s.default,
        yaml11: o.default
    };
    t.schemas = g;
    const m = {
        binary: c.default,
        floatTime: h.floatTime,
        intTime: h.intTime,
        map: a.default,
        omap: u.default,
        pairs: f.default,
        seq: l.default,
        set: d.default,
        timestamp: h.timestamp
    };
    t.tags = m
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = a(n(5))
      , i = n(17)
      , s = a(n(37))
      , o = n(22);
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = s.default.concat([{
        identify: e=>null == e,
        createNode: (e,t,n)=>n.wrapScalars ? new r.default(null) : null,
        default: !0,
        tag: "tag:yaml.org,2002:null",
        test: /^(?:~|[Nn]ull|NULL)?$/,
        resolve: ()=>null,
        options: o.nullOptions,
        stringify: ()=>o.nullOptions.nullStr
    }, {
        identify: e=>"boolean" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:bool",
        test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
        resolve: e=>"t" === e[0] || "T" === e[0],
        options: o.boolOptions,
        stringify: ({value: e})=>e ? o.boolOptions.trueStr : o.boolOptions.falseStr
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:int",
        format: "OCT",
        test: /^0o([0-7]+)$/,
        resolve: (e,t)=>parseInt(t, 8),
        stringify: ({value: e})=>"0o" + e.toString(8)
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:int",
        test: /^[-+]?[0-9]+$/,
        resolve: e=>parseInt(e, 10),
        stringify: i.stringifyNumber
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:int",
        format: "HEX",
        test: /^0x([0-9a-fA-F]+)$/,
        resolve: (e,t)=>parseInt(t, 16),
        stringify: ({value: e})=>"0x" + e.toString(16)
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:float",
        test: /^(?:[-+]?\.inf|(\.nan))$/i,
        resolve: (e,t)=>t ? NaN : "-" === e[0] ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
        stringify: i.stringifyNumber
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:float",
        format: "EXP",
        test: /^[-+]?(?:0|[1-9][0-9]*)(\.[0-9]*)?[eE][-+]?[0-9]+$/,
        resolve: e=>parseFloat(e),
        stringify: ({value: e})=>Number(e).toExponential()
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:float",
        test: /^[-+]?(?:0|[1-9][0-9]*)\.([0-9]*)$/,
        resolve(e, t) {
            const n = new r.default(parseFloat(e));
            return t && "0" === t[t.length - 1] && (n.minFractionDigits = t.length),
            n
        },
        stringify: i.stringifyNumber
    }]);
    t.default = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = a(n(38))
      , i = a(n(39))
      , s = a(n(5))
      , o = n(26);
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    const l = [r.default, i.default, {
        identify: e=>"string" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:str",
        resolve: o.resolveString,
        stringify: e=>JSON.stringify(e)
    }, {
        identify: e=>null == e,
        createNode: (e,t,n)=>n.wrapScalars ? new s.default(null) : null,
        default: !0,
        tag: "tag:yaml.org,2002:null",
        test: /^null$/,
        resolve: ()=>null,
        stringify: e=>JSON.stringify(e)
    }, {
        identify: e=>"boolean" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:bool",
        test: /^true$/,
        resolve: ()=>!0,
        stringify: e=>JSON.stringify(e)
    }, {
        identify: e=>"boolean" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:bool",
        test: /^false$/,
        resolve: ()=>!1,
        stringify: e=>JSON.stringify(e)
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:int",
        test: /^-?(?:0|[1-9][0-9]*)$/,
        resolve: e=>parseInt(e, 10),
        stringify: e=>JSON.stringify(e)
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:float",
        test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
        resolve: e=>parseFloat(e),
        stringify: e=>JSON.stringify(e)
    }];
    l.scalarFallback = e=>{
        throw new SyntaxError("Unresolved plain scalar " + JSON.stringify(e))
    }
    ;
    var c = l;
    t.default = c
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = d(n(5))
      , i = n(17)
      , s = d(n(37))
      , o = n(22)
      , a = d(n(61))
      , l = d(n(62))
      , c = d(n(40))
      , u = d(n(63))
      , f = n(64);
    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var h = s.default.concat([{
        identify: e=>null == e,
        createNode: (e,t,n)=>n.wrapScalars ? new r.default(null) : null,
        default: !0,
        tag: "tag:yaml.org,2002:null",
        test: /^(?:~|[Nn]ull|NULL)?$/,
        resolve: ()=>null,
        options: o.nullOptions,
        stringify: ()=>o.nullOptions.nullStr
    }, {
        identify: e=>"boolean" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:bool",
        test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
        resolve: ()=>!0,
        options: o.boolOptions,
        stringify: ({value: e})=>e ? o.boolOptions.trueStr : o.boolOptions.falseStr
    }, {
        identify: e=>"boolean" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:bool",
        test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
        resolve: ()=>!1,
        options: o.boolOptions,
        stringify: ({value: e})=>e ? o.boolOptions.trueStr : o.boolOptions.falseStr
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:int",
        format: "BIN",
        test: /^0b([0-1_]+)$/,
        resolve: (e,t)=>parseInt(t.replace(/_/g, ""), 2),
        stringify: ({value: e})=>"0b" + e.toString(2)
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:int",
        format: "OCT",
        test: /^[-+]?0([0-7_]+)$/,
        resolve: (e,t)=>parseInt(t.replace(/_/g, ""), 8),
        stringify: ({value: e})=>(e < 0 ? "-0" : "0") + e.toString(8)
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:int",
        test: /^[-+]?[0-9][0-9_]*$/,
        resolve: e=>parseInt(e.replace(/_/g, ""), 10),
        stringify: i.stringifyNumber
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:int",
        format: "HEX",
        test: /^0x([0-9a-fA-F_]+)$/,
        resolve: (e,t)=>parseInt(t.replace(/_/g, ""), 16),
        stringify: ({value: e})=>(e < 0 ? "-0x" : "0x") + e.toString(16)
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:float",
        test: /^(?:[-+]?\.inf|(\.nan))$/i,
        resolve: (e,t)=>t ? NaN : "-" === e[0] ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
        stringify: i.stringifyNumber
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:float",
        format: "EXP",
        test: /^[-+]?([0-9][0-9_]*)?(\.[0-9_]*)?[eE][-+]?[0-9]+$/,
        resolve: e=>parseFloat(e.replace(/_/g, "")),
        stringify: ({value: e})=>Number(e).toExponential()
    }, {
        identify: e=>"number" == typeof e,
        default: !0,
        tag: "tag:yaml.org,2002:float",
        test: /^[-+]?(?:[0-9][0-9_]*)?\.([0-9_]*)$/,
        resolve(e, t) {
            const n = new r.default(parseFloat(e.replace(/_/g, "")));
            if (t) {
                const e = t.replace(/_/g, "");
                "0" === e[e.length - 1] && (n.minFractionDigits = e.length)
            }
            return n
        },
        stringify: i.stringifyNumber
    }], a.default, l.default, c.default, u.default, f.intTime, f.floatTime, f.timestamp);
    t.default = h
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        const {promisify: r} = n(27)
          , i = n(6)
          , s = n(65)
          , o = n(12)
          , a = n(92)
          , l = r(o.access)
          , c = r(s.execFile)
          , u = i.join(t, "xdg-open");
        e.exports = async(e,n)=>{
            if ("string" != typeof e)
                throw new TypeError("Expected a `target`");
            let r;
            n = {
                wait: !1,
                background: !1,
                ...n
            };
            let i = [];
            const f = []
              , d = {};
            if (Array.isArray(n.app) && (i = n.app.slice(1),
            n.app = n.app[0]),
            "darwin" === process.platform)
                r = "open",
                n.wait && f.push("--wait-apps"),
                n.background && f.push("--background"),
                n.app && f.push("-a", n.app);
            else if ("win32" === process.platform || a) {
                if (r = "cmd" + (a ? ".exe" : ""),
                f.push("/c", "start", '""', "/b"),
                e = e.replace(/&/g, "^&"),
                n.wait && f.push("/wait"),
                n.app) {
                    if (a && n.app.startsWith("/mnt/")) {
                        const e = await (async e=>{
                            const {stdout: t} = await c("wslpath", ["-w", e]);
                            return t.trim()
                        }
                        )(n.app);
                        n.app = e
                    }
                    f.push(n.app)
                }
                i.length > 0 && f.push(...i)
            } else {
                if (n.app)
                    r = n.app;
                else {
                    const e = "/" === t;
                    let n = !1;
                    try {
                        await l(u, o.constants.X_OK),
                        n = !0
                    } catch (e) {}
                    r = process.versions.electron || "android" === process.platform || e || !n ? "xdg-open" : u
                }
                i.length > 0 && f.push(...i),
                n.wait || (d.stdio = "ignore",
                d.detached = !0)
            }
            f.push(e),
            "darwin" === process.platform && i.length > 0 && f.push("--args", ...i);
            const h = s.spawn(r, f, d);
            return n.wait ? new Promise((e,t)=>{
                h.once("error", t),
                h.once("close", n=>{
                    n > 0 ? t(new Error("Exited with code " + n)) : e(h)
                }
                )
            }
            ) : (h.unref(),
            h)
        }
    }
    ).call(this, "/")
}
, function(e, t, n) {
    "use strict";
    const r = n(41)
      , i = n(12)
      , s = ()=>{
        if ("linux" !== process.platform)
            return !1;
        if (r.release().includes("Microsoft"))
            return !0;
        try {
            return i.readFileSync("/proc/version", "utf8").includes("Microsoft")
        } catch (e) {
            return !1
        }
    }
    ;
    process.env.__IS_WSL_TEST__ ? e.exports = s : e.exports = s()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(18)
      , i = n(19);
    t.Project = class {
        constructor(e, t, n) {
            this.root = e,
            this.modules = t,
            this.config = n
        }
        getName() {
            return this.root.name
        }
        getPath() {
            return this.root.uri.fsPath
        }
        getEnabledConfig() {
            var e;
            return (null === (e = this.config) || void 0 === e ? void 0 : e.enabled) || !1
        }
        getClassNameConfig() {
            var e;
            const t = null === (e = this.config) || void 0 === e ? void 0 : e.className;
            return t && i.isValidClassName(t) ? t : r.DEFAULT_CLASS_NAME
        }
        getMainLocaleConfig() {
            var e;
            const t = null === (e = this.config) || void 0 === e ? void 0 : e.mainLocale;
            return t && i.isValidLocale(t) ? t : r.DEFAULT_MAIN_LOCALE
        }
        getArbDirConfig() {
            var e;
            const t = null === (e = this.config) || void 0 === e ? void 0 : e.arbDir;
            return t && i.isValidPath(t) ? t : r.DEFAULT_ARB_DIR
        }
        getArbPrefixConfig() {
            return this.config?.arbPrefix ?? r.DEFAULT_ARB_PREFIX
        }
        getGenerateConfig() {
            return this.config?.generate ?? true
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.PubspecConfig = class {
        constructor(arbPrefix, generate, e, t, n, r, i, s, o) {
            this.enabled = e,
            this.generate = generate,
            this.className = t,
            this.mainLocale = n,
            this.arbDir = r,
            this.arbPrefix = arbPrefix,
            this.outputDir = i,
            this.useDeferredLoading = s,
            this.localizelyConfig = o
        }
    }
    ;
    t.LocalizelyConfig = class {
        constructor(e, t, n, r, i, s, o, a, l, c, u) {
            this.projectId = e,
            this.branch = t,
            this.uploadOverwrite = n,
            this.uploadAsReviewed = r,
            this.uploadTagAdded = i,
            this.uploadTagUpdated = s,
            this.uploadTagRemoved = o,
            this.downloadEmptyAs = a,
            this.downloadIncludeTags = l,
            this.downloadExcludeTags = c,
            this.otaEnabled = u
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))((function(i, s) {
            function o(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    s(e)
                }
            }
            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    s(e)
                }
            }
            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(o, a)
            }
            l((r = r.apply(e, t || [])).next())
        }
        ))
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(11)
      , path = n(6)
      , o = n(12)
      , a = n(27)
      , l = n(96)
      , c = n(66)
      , u = n(18)
      , f = n(19)
      , d = n(67);
    t.Generator = class {
        constructor(e) {
            this._flutterSdkExePath = f.getFlutterSdkExePath(e)
        }
        createArbFile(e, t) {
            return r(this, void 0, void 0, (function*() {
                try {
                    const n = e.getPath()
                      , r = e.getArbDirConfig()
                      , l = i.Uri.file(path.join(n, r, `${e.getArbPrefixConfig()}_${t}.arb`));
                    o.existsSync(l.fsPath) || (yield i.workspace.fs.writeFile(l, (new a.TextEncoder).encode("{}")))
                } catch (n) {
                    throw f.error(`Failed to generate '${e.getArbPrefixConfig()}_${t}.arb' file within '${e.getName()}' project.`),
                    n
                }
            }
            ))
        }
        removeArbFile(e, t) {
            return r(this, void 0, void 0, (function*() {
                try {
                    const n = e.getPath()
                      , r = e.getArbDirConfig()
                      , a = i.Uri.file(path.join(n, r, `${e.getArbPrefixConfig()}_${t}.arb`));
                    o.existsSync(a.fsPath) && (yield i.workspace.fs.delete(a))
                } catch (n) {
                    throw f.error(`Failed to remove '${e.getArbPrefixConfig()}_${t}.arb' file from the '${e.getName()}' project.`),
                    n
                }
            }
            ))
        }
        generateAll(e) {
            return r(this, void 0, void 0, (function*() {
                for (const t of e)
                    yield this.generate(t)
            }
            ))
        }
        generate(project) {
            if(!project.getGenerateConfig()){
                return;
            }
            return this.generateImpl(project);
        }
        generateImpl(project) {
            return r(this, void 0, void 0, (function*() {
                try {
                    if (!(yield this.checkDependencies(project)))
                        return void i.window.showErrorMessage(`Failed to generate localization files for the '${project.getName()}' project due to a lack of required dependencies.`);
                    f.info(`Generating localization files for the '${project.getName()}' project...`);
                    const t = project.getPath()
                      , n = l.runProcess(this._flutterSdkExePath, ["pub", "global", "run", "intl_utils:generate"], t);
                    c.runProcessInChannel(n, c.getChannel(u.FLUTTER_INTL_CHANNEL))
                } catch (t) {
                    i.window.showErrorMessage(`Failed to generate localization files for the "${project.getName()}" project.`)
                }
            }
            ))
        }
        generateProjectModule(project, t) {
            if(!project.getGenerateConfig()){
                return;
            }
            return this.generateProjectModuleImpl(project, t);
        }
        generateProjectModuleImpl(project, t) {
            return r(this, void 0, void 0, (function*() {
                const n = path.basename(t);
                try {
                    if (!(yield this.checkDependencies(project)))
                        return void i.window.showErrorMessage(`Failed to generate localization files for the '${n}' module due to a lack of required dependencies.`);
                    f.info(`Generating localization files for the '${n}' module...`);
                    const r = l.runProcess(this._flutterSdkExePath, ["pub", "global", "run", "intl_utils:generate"], t);
                    c.runProcessInChannel(r, c.getChannel(u.FLUTTER_INTL_CHANNEL))
                } catch (e) {
                    i.window.showErrorMessage(`Failed to generate localization files for the "${n}" module.`)
                }
            }
            ))
        }
        uploadMain(e) {
            return r(this, void 0, void 0, (function*() {
                if (!(yield this.checkDependencies(e)))
                    return;
                const t = e.getPath();
                return yield i.window.withProgress({
                    location: i.ProgressLocation.Notification,
                    title: "Flutter Intl",
                    cancellable: !1
                }, (e,n)=>r(this, void 0, void 0, (function*() {
                    return e.report({
                        message: "Uploading to Localizely..."
                    }),
                    new Promise(e=>{
                        const n = []
                          , r = l.runProcess(this._flutterSdkExePath, ["pub", "global", "run", "intl_utils:localizely_upload_main"], t);
                        r.stderr && r.stderr.on("data", e=>{
                            n.push((new a.TextDecoder).decode(e))
                        }
                        ),
                        r.on("close", t=>{
                            e(new h(t,0 === t ? "Successfully uploaded main ARB file to Localizely" : this.generateErrorMessage(n, "Failed to upload main ARB file to Localizely")))
                        }
                        )
                    }
                    )
                }
                )))
            }
            ))
        }
        download(e) {
            return r(this, void 0, void 0, (function*() {
                if (!(yield this.checkDependencies(e)))
                    return;
                const t = e.getPath();
                return yield i.window.withProgress({
                    location: i.ProgressLocation.Notification,
                    title: "Flutter Intl",
                    cancellable: !1
                }, (e,n)=>r(this, void 0, void 0, (function*() {
                    return e.report({
                        message: "Downloading from Localizely..."
                    }),
                    new Promise(e=>{
                        const n = []
                          , r = l.runProcess(this._flutterSdkExePath, ["pub", "global", "run", "intl_utils:localizely_download"], t);
                        r.stderr && r.stderr.on("data", e=>{
                            n.push((new a.TextDecoder).decode(e))
                        }
                        ),
                        r.on("close", t=>{
                            this.printErrors(n),
                            e(new h(t,0 === t ? "Successfully downloaded ARB files from Localizely" : this.generateErrorMessage(n, "Failed to download ARB files from Localizely")))
                        }
                        )
                    }
                    )
                }
                )))
            }
            ))
        }
        printErrors(e) {
            const t = c.getChannel(u.FLUTTER_INTL_CHANNEL);
            let n = !1;
            e.forEach(e=>{
                e.split("\n").filter(e=>e.startsWith("ERROR:")).forEach(e=>{
                    t.appendLine(e),
                    n = !0
                }
                )
            }
            ),
            n && t.show()
        }
        generateErrorMessage(e, t) {
            for (let t = 0; t < e.length; t++) {
                const n = e[t].split("\n").find(e=>e.startsWith("{") && e.endsWith("}"));
                if (n)
                    try {
                        const e = JSON.parse(n);
                        if (e.errorCode && e.errorMessage)
                            return e.errorMessage
                    } catch (e) {}
            }
            return t
        }
        checkDependencies(e) {
            return r(this, void 0, void 0, (function*() {
                const t = yield this.getIntlUtilsVersion(e);
                let n = yield this.checkIsActivatedDependency(u.INTL_UTILS, t);
                return n || (yield i.window.withProgress({
                    location: i.ProgressLocation.Notification,
                    title: "Flutter Intl",
                    cancellable: !1
                }, (e,i)=>r(this, void 0, void 0, (function*() {
                    e.report({
                        message: "Installing dependencies..."
                    }),
                    n = yield this.activateGlobalDependency(u.INTL_UTILS, t)
                }
                )))),
                n
            }
            ))
        }
        checkIsActivatedDependency(e, t) {
            return r(this, void 0, void 0, (function*() {
                const n = yield this.getGlobalDependencies();
                if (!n)
                    return !1;
                const r = t ? `${e} ${t}` : e;
                return n.some(e=>e.includes(r))
            }
            ))
        }
        activateGlobalDependency(e, t) {
            return r(this, void 0, void 0, (function*() {
                return new Promise(n=>{
                    l.runProcess(this._flutterSdkExePath, ["pub", "global", "activate", e, ...t ? [t] : []]).on("close", e=>n(!0))
                }
                )
            }
            ))
        }
        getGlobalDependencies() {
            return r(this, void 0, void 0, (function*() {
                return new Promise(e=>{
                    const t = new a.TextDecoder;
                    let n;
                    const r = l.runProcess(this._flutterSdkExePath, ["pub", "global", "list"]);
                    r.stdout && r.stdout.on("data", e=>{
                        n || (n = []);
                        const r = t.decode(e);
                        n.push(...r.split("\n").filter(e=>"" !== e))
                    }
                    ),
                    r.on("close", t=>e(n))
                }
                )
            }
            ))
        }
        getIntlUtilsVersion(e) {
            return r(this, void 0, void 0, (function*() {
                return (yield d.isProjectInNullSafeMode(e)) ? u.INTL_UTILS_NULL_SAFE_VERSION : u.INTL_UTILS_NOT_NULL_SAFE_VERSION
            }
            ))
        }
    }
    ;
    class h {
        constructor(e, t) {
            this.code = e,
            this.message = t
        }
        isSuccess() {
            return 0 === this.code
        }
    }
    t.LocalizelyResponse = h
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(65);
    function i(e, t, n) {
        const i = t.map(e=>`"${e.replace(/"/g, '\\"')}"`);
        return r.spawn(`"${e}"`, i, {
            cwd: n,
            shell: !0
        })
    }
    t.safeSpawn = i,
    t.runProcess = function(e, t=[], n) {
        return i(e, t, n)
    }
}
, function(e, t, n) {
    const r = n(20);
    e.exports = {
        re: r.re,
        src: r.src,
        tokens: r.t,
        SEMVER_SPEC_VERSION: n(28).SEMVER_SPEC_VERSION,
        SemVer: n(3),
        compareIdentifiers: n(42).compareIdentifiers,
        rcompareIdentifiers: n(42).rcompareIdentifiers,
        parse: n(21),
        valid: n(98),
        clean: n(99),
        inc: n(100),
        diff: n(101),
        major: n(102),
        minor: n(103),
        patch: n(104),
        prerelease: n(105),
        compare: n(8),
        rcompare: n(106),
        compareLoose: n(107),
        compareBuild: n(44),
        sort: n(108),
        rsort: n(109),
        gt: n(31),
        lt: n(45),
        eq: n(43),
        neq: n(68),
        gte: n(46),
        lte: n(47),
        cmp: n(69),
        coerce: n(110),
        Comparator: n(32),
        Range: n(9),
        satisfies: n(33),
        toComparators: n(114),
        maxSatisfying: n(115),
        minSatisfying: n(116),
        minVersion: n(117),
        validRange: n(118),
        outside: n(48),
        gtr: n(119),
        ltr: n(120),
        intersects: n(121),
        simplifyRange: n(122),
        subset: n(123)
    }
}
, function(e, t, n) {
    const r = n(21);
    e.exports = (e,t)=>{
        const n = r(e, t);
        return n ? n.version : null
    }
}
, function(e, t, n) {
    const r = n(21);
    e.exports = (e,t)=>{
        const n = r(e.trim().replace(/^[=v]+/, ""), t);
        return n ? n.version : null
    }
}
, function(e, t, n) {
    const r = n(3);
    e.exports = (e,t,n,i)=>{
        "string" == typeof n && (i = n,
        n = void 0);
        try {
            return new r(e,n).inc(t, i).version
        } catch (e) {
            return null
        }
    }
}
, function(e, t, n) {
    const r = n(21)
      , i = n(43);
    e.exports = (e,t)=>{
        if (i(e, t))
            return null;
        {
            const n = r(e)
              , i = r(t)
              , s = n.prerelease.length || i.prerelease.length
              , o = s ? "pre" : ""
              , a = s ? "prerelease" : "";
            for (const e in n)
                if (("major" === e || "minor" === e || "patch" === e) && n[e] !== i[e])
                    return o + e;
            return a
        }
    }
}
, function(e, t, n) {
    const r = n(3);
    e.exports = (e,t)=>new r(e,t).major
}
, function(e, t, n) {
    const r = n(3);
    e.exports = (e,t)=>new r(e,t).minor
}
, function(e, t, n) {
    const r = n(3);
    e.exports = (e,t)=>new r(e,t).patch
}
, function(e, t, n) {
    const r = n(21);
    e.exports = (e,t)=>{
        const n = r(e, t);
        return n && n.prerelease.length ? n.prerelease : null
    }
}
, function(e, t, n) {
    const r = n(8);
    e.exports = (e,t,n)=>r(t, e, n)
}
, function(e, t, n) {
    const r = n(8);
    e.exports = (e,t)=>r(e, t, !0)
}
, function(e, t, n) {
    const r = n(44);
    e.exports = (e,t)=>e.sort((e,n)=>r(e, n, t))
}
, function(e, t, n) {
    const r = n(44);
    e.exports = (e,t)=>e.sort((e,n)=>r(n, e, t))
}
, function(e, t, n) {
    const r = n(3)
      , i = n(21)
      , {re: s, t: o} = n(20);
    e.exports = (e,t)=>{
        if (e instanceof r)
            return e;
        if ("number" == typeof e && (e = String(e)),
        "string" != typeof e)
            return null;
        let n = null;
        if ((t = t || {}).rtl) {
            let t;
            for (; (t = s[o.COERCERTL].exec(e)) && (!n || n.index + n[0].length !== e.length); )
                n && t.index + t[0].length === n.index + n[0].length || (n = t),
                s[o.COERCERTL].lastIndex = t.index + t[1].length + t[2].length;
            s[o.COERCERTL].lastIndex = -1
        } else
            n = e.match(s[o.COERCE]);
        return null === n ? null : i(`${n[2]}.${n[3] || "0"}.${n[4] || "0"}`, t)
    }
}
, function(e, t, n) {
    "use strict";
    const r = n(112)
      , i = Symbol("max")
      , s = Symbol("length")
      , o = Symbol("lengthCalculator")
      , a = Symbol("allowStale")
      , l = Symbol("maxAge")
      , c = Symbol("dispose")
      , u = Symbol("noDisposeOnSet")
      , f = Symbol("lruList")
      , d = Symbol("cache")
      , h = Symbol("updateAgeOnGet")
      , p = ()=>1;
    const g = (e,t,n)=>{
        const r = e[d].get(t);
        if (r) {
            const t = r.value;
            if (m(e, t)) {
                if (E(e, r),
                !e[a])
                    return
            } else
                n && (e[h] && (r.value.now = Date.now()),
                e[f].unshiftNode(r));
            return t.value
        }
    }
      , m = (e,t)=>{
        if (!t || !t.maxAge && !e[l])
            return !1;
        const n = Date.now() - t.now;
        return t.maxAge ? n > t.maxAge : e[l] && n > e[l]
    }
      , v = e=>{
        if (e[s] > e[i])
            for (let t = e[f].tail; e[s] > e[i] && null !== t; ) {
                const n = t.prev;
                E(e, t),
                t = n
            }
    }
      , E = (e,t)=>{
        if (t) {
            const n = t.value;
            e[c] && e[c](n.key, n.value),
            e[s] -= n.length,
            e[d].delete(n.key),
            e[f].removeNode(t)
        }
    }
    ;
    class y {
        constructor(e, t, n, r, i) {
            this.key = e,
            this.value = t,
            this.length = n,
            this.now = r,
            this.maxAge = i || 0
        }
    }
    const O = (e,t,n,r)=>{
        let i = n.value;
        m(e, i) && (E(e, n),
        e[a] || (i = void 0)),
        i && t.call(r, i.value, i.key, e)
    }
    ;
    e.exports = class {
        constructor(e) {
            if ("number" == typeof e && (e = {
                max: e
            }),
            e || (e = {}),
            e.max && ("number" != typeof e.max || e.max < 0))
                throw new TypeError("max must be a non-negative number");
            this[i] = e.max || 1 / 0;
            const t = e.length || p;
            if (this[o] = "function" != typeof t ? p : t,
            this[a] = e.stale || !1,
            e.maxAge && "number" != typeof e.maxAge)
                throw new TypeError("maxAge must be a number");
            this[l] = e.maxAge || 0,
            this[c] = e.dispose,
            this[u] = e.noDisposeOnSet || !1,
            this[h] = e.updateAgeOnGet || !1,
            this.reset()
        }
        set max(e) {
            if ("number" != typeof e || e < 0)
                throw new TypeError("max must be a non-negative number");
            this[i] = e || 1 / 0,
            v(this)
        }
        get max() {
            return this[i]
        }
        set allowStale(e) {
            this[a] = !!e
        }
        get allowStale() {
            return this[a]
        }
        set maxAge(e) {
            if ("number" != typeof e)
                throw new TypeError("maxAge must be a non-negative number");
            this[l] = e,
            v(this)
        }
        get maxAge() {
            return this[l]
        }
        set lengthCalculator(e) {
            "function" != typeof e && (e = p),
            e !== this[o] && (this[o] = e,
            this[s] = 0,
            this[f].forEach(e=>{
                e.length = this[o](e.value, e.key),
                this[s] += e.length
            }
            )),
            v(this)
        }
        get lengthCalculator() {
            return this[o]
        }
        get length() {
            return this[s]
        }
        get itemCount() {
            return this[f].length
        }
        rforEach(e, t) {
            t = t || this;
            for (let n = this[f].tail; null !== n; ) {
                const r = n.prev;
                O(this, e, n, t),
                n = r
            }
        }
        forEach(e, t) {
            t = t || this;
            for (let n = this[f].head; null !== n; ) {
                const r = n.next;
                O(this, e, n, t),
                n = r
            }
        }
        keys() {
            return this[f].toArray().map(e=>e.key)
        }
        values() {
            return this[f].toArray().map(e=>e.value)
        }
        reset() {
            this[c] && this[f] && this[f].length && this[f].forEach(e=>this[c](e.key, e.value)),
            this[d] = new Map,
            this[f] = new r,
            this[s] = 0
        }
        dump() {
            return this[f].map(e=>!m(this, e) && {
                k: e.key,
                v: e.value,
                e: e.now + (e.maxAge || 0)
            }).toArray().filter(e=>e)
        }
        dumpLru() {
            return this[f]
        }
        set(e, t, n) {
            if ((n = n || this[l]) && "number" != typeof n)
                throw new TypeError("maxAge must be a number");
            const r = n ? Date.now() : 0
              , a = this[o](t, e);
            if (this[d].has(e)) {
                if (a > this[i])
                    return E(this, this[d].get(e)),
                    !1;
                const o = this[d].get(e).value;
                return this[c] && (this[u] || this[c](e, o.value)),
                o.now = r,
                o.maxAge = n,
                o.value = t,
                this[s] += a - o.length,
                o.length = a,
                this.get(e),
                v(this),
                !0
            }
            const h = new y(e,t,a,r,n);
            return h.length > this[i] ? (this[c] && this[c](e, t),
            !1) : (this[s] += h.length,
            this[f].unshift(h),
            this[d].set(e, this[f].head),
            v(this),
            !0)
        }
        has(e) {
            if (!this[d].has(e))
                return !1;
            const t = this[d].get(e).value;
            return !m(this, t)
        }
        get(e) {
            return g(this, e, !0)
        }
        peek(e) {
            return g(this, e, !1)
        }
        pop() {
            const e = this[f].tail;
            return e ? (E(this, e),
            e.value) : null
        }
        del(e) {
            E(this, this[d].get(e))
        }
        load(e) {
            this.reset();
            const t = Date.now();
            for (let n = e.length - 1; n >= 0; n--) {
                const r = e[n]
                  , i = r.e || 0;
                if (0 === i)
                    this.set(r.k, r.v);
                else {
                    const e = i - t;
                    e > 0 && this.set(r.k, r.v, e)
                }
            }
        }
        prune() {
            this[d].forEach((e,t)=>g(this, t, !1))
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        var t = this;
        if (t instanceof r || (t = new r),
        t.tail = null,
        t.head = null,
        t.length = 0,
        e && "function" == typeof e.forEach)
            e.forEach((function(e) {
                t.push(e)
            }
            ));
        else if (arguments.length > 0)
            for (var n = 0, i = arguments.length; n < i; n++)
                t.push(arguments[n]);
        return t
    }
    function i(e, t, n) {
        var r = t === e.head ? new a(n,null,t,e) : new a(n,t,t.next,e);
        return null === r.next && (e.tail = r),
        null === r.prev && (e.head = r),
        e.length++,
        r
    }
    function s(e, t) {
        e.tail = new a(t,e.tail,null,e),
        e.head || (e.head = e.tail),
        e.length++
    }
    function o(e, t) {
        e.head = new a(t,null,e.head,e),
        e.tail || (e.tail = e.head),
        e.length++
    }
    function a(e, t, n, r) {
        if (!(this instanceof a))
            return new a(e,t,n,r);
        this.list = r,
        this.value = e,
        t ? (t.next = this,
        this.prev = t) : this.prev = null,
        n ? (n.prev = this,
        this.next = n) : this.next = null
    }
    e.exports = r,
    r.Node = a,
    r.create = r,
    r.prototype.removeNode = function(e) {
        if (e.list !== this)
            throw new Error("removing node which does not belong to this list");
        var t = e.next
          , n = e.prev;
        return t && (t.prev = n),
        n && (n.next = t),
        e === this.head && (this.head = t),
        e === this.tail && (this.tail = n),
        e.list.length--,
        e.next = null,
        e.prev = null,
        e.list = null,
        t
    }
    ,
    r.prototype.unshiftNode = function(e) {
        if (e !== this.head) {
            e.list && e.list.removeNode(e);
            var t = this.head;
            e.list = this,
            e.next = t,
            t && (t.prev = e),
            this.head = e,
            this.tail || (this.tail = e),
            this.length++
        }
    }
    ,
    r.prototype.pushNode = function(e) {
        if (e !== this.tail) {
            e.list && e.list.removeNode(e);
            var t = this.tail;
            e.list = this,
            e.prev = t,
            t && (t.next = e),
            this.tail = e,
            this.head || (this.head = e),
            this.length++
        }
    }
    ,
    r.prototype.push = function() {
        for (var e = 0, t = arguments.length; e < t; e++)
            s(this, arguments[e]);
        return this.length
    }
    ,
    r.prototype.unshift = function() {
        for (var e = 0, t = arguments.length; e < t; e++)
            o(this, arguments[e]);
        return this.length
    }
    ,
    r.prototype.pop = function() {
        if (this.tail) {
            var e = this.tail.value;
            return this.tail = this.tail.prev,
            this.tail ? this.tail.next = null : this.head = null,
            this.length--,
            e
        }
    }
    ,
    r.prototype.shift = function() {
        if (this.head) {
            var e = this.head.value;
            return this.head = this.head.next,
            this.head ? this.head.prev = null : this.tail = null,
            this.length--,
            e
        }
    }
    ,
    r.prototype.forEach = function(e, t) {
        t = t || this;
        for (var n = this.head, r = 0; null !== n; r++)
            e.call(t, n.value, r, this),
            n = n.next
    }
    ,
    r.prototype.forEachReverse = function(e, t) {
        t = t || this;
        for (var n = this.tail, r = this.length - 1; null !== n; r--)
            e.call(t, n.value, r, this),
            n = n.prev
    }
    ,
    r.prototype.get = function(e) {
        for (var t = 0, n = this.head; null !== n && t < e; t++)
            n = n.next;
        if (t === e && null !== n)
            return n.value
    }
    ,
    r.prototype.getReverse = function(e) {
        for (var t = 0, n = this.tail; null !== n && t < e; t++)
            n = n.prev;
        if (t === e && null !== n)
            return n.value
    }
    ,
    r.prototype.map = function(e, t) {
        t = t || this;
        for (var n = new r, i = this.head; null !== i; )
            n.push(e.call(t, i.value, this)),
            i = i.next;
        return n
    }
    ,
    r.prototype.mapReverse = function(e, t) {
        t = t || this;
        for (var n = new r, i = this.tail; null !== i; )
            n.push(e.call(t, i.value, this)),
            i = i.prev;
        return n
    }
    ,
    r.prototype.reduce = function(e, t) {
        var n, r = this.head;
        if (arguments.length > 1)
            n = t;
        else {
            if (!this.head)
                throw new TypeError("Reduce of empty list with no initial value");
            r = this.head.next,
            n = this.head.value
        }
        for (var i = 0; null !== r; i++)
            n = e(n, r.value, i),
            r = r.next;
        return n
    }
    ,
    r.prototype.reduceReverse = function(e, t) {
        var n, r = this.tail;
        if (arguments.length > 1)
            n = t;
        else {
            if (!this.tail)
                throw new TypeError("Reduce of empty list with no initial value");
            r = this.tail.prev,
            n = this.tail.value
        }
        for (var i = this.length - 1; null !== r; i--)
            n = e(n, r.value, i),
            r = r.prev;
        return n
    }
    ,
    r.prototype.toArray = function() {
        for (var e = new Array(this.length), t = 0, n = this.head; null !== n; t++)
            e[t] = n.value,
            n = n.next;
        return e
    }
    ,
    r.prototype.toArrayReverse = function() {
        for (var e = new Array(this.length), t = 0, n = this.tail; null !== n; t++)
            e[t] = n.value,
            n = n.prev;
        return e
    }
    ,
    r.prototype.slice = function(e, t) {
        (t = t || this.length) < 0 && (t += this.length),
        (e = e || 0) < 0 && (e += this.length);
        var n = new r;
        if (t < e || t < 0)
            return n;
        e < 0 && (e = 0),
        t > this.length && (t = this.length);
        for (var i = 0, s = this.head; null !== s && i < e; i++)
            s = s.next;
        for (; null !== s && i < t; i++,
        s = s.next)
            n.push(s.value);
        return n
    }
    ,
    r.prototype.sliceReverse = function(e, t) {
        (t = t || this.length) < 0 && (t += this.length),
        (e = e || 0) < 0 && (e += this.length);
        var n = new r;
        if (t < e || t < 0)
            return n;
        e < 0 && (e = 0),
        t > this.length && (t = this.length);
        for (var i = this.length, s = this.tail; null !== s && i > t; i--)
            s = s.prev;
        for (; null !== s && i > e; i--,
        s = s.prev)
            n.push(s.value);
        return n
    }
    ,
    r.prototype.splice = function(e, t, ...n) {
        e > this.length && (e = this.length - 1),
        e < 0 && (e = this.length + e);
        for (var r = 0, s = this.head; null !== s && r < e; r++)
            s = s.next;
        var o = [];
        for (r = 0; s && r < t; r++)
            o.push(s.value),
            s = this.removeNode(s);
        null === s && (s = this.tail),
        s !== this.head && s !== this.tail && (s = s.prev);
        for (r = 0; r < n.length; r++)
            s = i(this, s, n[r]);
        return o
    }
    ,
    r.prototype.reverse = function() {
        for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
            var r = n.prev;
            n.prev = n.next,
            n.next = r
        }
        return this.head = t,
        this.tail = e,
        this
    }
    ;
    try {
        n(113)(r)
    } catch (e) {}
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        e.prototype[Symbol.iterator] = function*() {
            for (let e = this.head; e; e = e.next)
                yield e.value
        }
    }
}
, function(e, t, n) {
    const r = n(9);
    e.exports = (e,t)=>new r(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))
}
, function(e, t, n) {
    const r = n(3)
      , i = n(9);
    e.exports = (e,t,n)=>{
        let s = null
          , o = null
          , a = null;
        try {
            a = new i(t,n)
        } catch (e) {
            return null
        }
        return e.forEach(e=>{
            a.test(e) && (s && -1 !== o.compare(e) || (s = e,
            o = new r(s,n)))
        }
        ),
        s
    }
}
, function(e, t, n) {
    const r = n(3)
      , i = n(9);
    e.exports = (e,t,n)=>{
        let s = null
          , o = null
          , a = null;
        try {
            a = new i(t,n)
        } catch (e) {
            return null
        }
        return e.forEach(e=>{
            a.test(e) && (s && 1 !== o.compare(e) || (s = e,
            o = new r(s,n)))
        }
        ),
        s
    }
}
, function(e, t, n) {
    const r = n(3)
      , i = n(9)
      , s = n(31);
    e.exports = (e,t)=>{
        e = new i(e,t);
        let n = new r("0.0.0");
        if (e.test(n))
            return n;
        if (n = new r("0.0.0-0"),
        e.test(n))
            return n;
        n = null;
        for (let t = 0; t < e.set.length; ++t) {
            const i = e.set[t];
            let o = null;
            i.forEach(e=>{
                const t = new r(e.semver.version);
                switch (e.operator) {
                case ">":
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                    t.raw = t.format();
                case "":
                case ">=":
                    o && !s(t, o) || (o = t);
                    break;
                case "<":
                case "<=":
                    break;
                default:
                    throw new Error("Unexpected operation: " + e.operator)
                }
            }
            ),
            !o || n && !s(n, o) || (n = o)
        }
        return n && e.test(n) ? n : null
    }
}
, function(e, t, n) {
    const r = n(9);
    e.exports = (e,t)=>{
        try {
            return new r(e,t).range || "*"
        } catch (e) {
            return null
        }
    }
}
, function(e, t, n) {
    const r = n(48);
    e.exports = (e,t,n)=>r(e, t, ">", n)
}
, function(e, t, n) {
    const r = n(48);
    e.exports = (e,t,n)=>r(e, t, "<", n)
}
, function(e, t, n) {
    const r = n(9);
    e.exports = (e,t,n)=>(e = new r(e,n),
    t = new r(t,n),
    e.intersects(t))
}
, function(e, t, n) {
    const r = n(33)
      , i = n(8);
    e.exports = (e,t,n)=>{
        const s = [];
        let o = null
          , a = null;
        const l = e.sort((e,t)=>i(e, t, n));
        for (const e of l) {
            r(e, t, n) ? (a = e,
            o || (o = e)) : (a && s.push([o, a]),
            a = null,
            o = null)
        }
        o && s.push([o, null]);
        const c = [];
        for (const [e,t] of s)
            e === t ? c.push(e) : t || e !== l[0] ? t ? e === l[0] ? c.push("<=" + t) : c.push(`${e} - ${t}`) : c.push(">=" + e) : c.push("*");
        const u = c.join(" || ")
          , f = "string" == typeof t.raw ? t.raw : String(t);
        return u.length < f.length ? u : t
    }
}
, function(e, t, n) {
    const r = n(9)
      , {ANY: i} = n(32)
      , s = n(33)
      , o = n(8)
      , a = (e,t,n)=>{
        if (e === t)
            return !0;
        if (1 === e.length && e[0].semver === i)
            return 1 === t.length && t[0].semver === i;
        const r = new Set;
        let a, u, f, d, h, p, g;
        for (const t of e)
            ">" === t.operator || ">=" === t.operator ? a = l(a, t, n) : "<" === t.operator || "<=" === t.operator ? u = c(u, t, n) : r.add(t.semver);
        if (r.size > 1)
            return null;
        if (a && u) {
            if (f = o(a.semver, u.semver, n),
            f > 0)
                return null;
            if (0 === f && (">=" !== a.operator || "<=" !== u.operator))
                return null
        }
        for (const e of r) {
            if (a && !s(e, String(a), n))
                return null;
            if (u && !s(e, String(u), n))
                return null;
            for (const r of t)
                if (!s(e, String(r), n))
                    return !1;
            return !0
        }
        for (const e of t) {
            if (g = g || ">" === e.operator || ">=" === e.operator,
            p = p || "<" === e.operator || "<=" === e.operator,
            a)
                if (">" === e.operator || ">=" === e.operator) {
                    if (d = l(a, e, n),
                    d === e && d !== a)
                        return !1
                } else if (">=" === a.operator && !s(a.semver, String(e), n))
                    return !1;
            if (u)
                if ("<" === e.operator || "<=" === e.operator) {
                    if (h = c(u, e, n),
                    h === e && h !== u)
                        return !1
                } else if ("<=" === u.operator && !s(u.semver, String(e), n))
                    return !1;
            if (!e.operator && (u || a) && 0 !== f)
                return !1
        }
        return !(a && p && !u && 0 !== f) && !(u && g && !a && 0 !== f)
    }
      , l = (e,t,n)=>{
        if (!e)
            return t;
        const r = o(e.semver, t.semver, n);
        return r > 0 ? e : r < 0 || ">" === t.operator && ">=" === e.operator ? t : e
    }
      , c = (e,t,n)=>{
        if (!e)
            return t;
        const r = o(e.semver, t.semver, n);
        return r < 0 ? e : r > 0 || "<" === t.operator && "<=" === e.operator ? t : e
    }
    ;
    e.exports = (e,t,n)=>{
        if (e === t)
            return !0;
        e = new r(e,n),
        t = new r(t,n);
        let i = !1;
        e: for (const r of e.set) {
            for (const e of t.set) {
                const t = a(r, e, n);
                if (i = i || null !== t,
                t)
                    continue e
            }
            if (i)
                return !1
        }
        return !0
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))((function(i, s) {
            function o(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    s(e)
                }
            }
            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    s(e)
                }
            }
            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(o, a)
            }
            l((r = r.apply(e, t || [])).next())
        }
        ))
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(125);
    let s;
    t.getFlutterSdkPath = function() {
        return r(this, void 0, void 0, (function*() {
            if (s)
                return s;
            const e = new i.SdkUtils;
            return s = yield e.scanWorkspace(),
            s
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))((function(i, s) {
            function o(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    s(e)
                }
            }
            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    s(e)
                }
            }
            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(o, a)
            }
            l((r = r.apply(e, t || [])).next())
        }
        ))
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(12)
      , s = n(6)
      , o = n(34)
      , a = n(126)
      , l = n(35)
      , c = n(127)
      , u = n(129)
      , f = n(71)
      , d = n(130)
      , h = n(72);
    function p(e) {
        if (e && c.hasPubspec(e)) {
            return new RegExp("sdk\\s*:\\s*flutter","i").test(i.readFileSync(s.join(e, "pubspec.yaml")).toString())
        }
        return !1
    }
    function g(e) {
        if (!i.existsSync(e))
            return;
        let t = new a.PackageMap(e).getPackagePath("flutter");
        if (!t)
            return;
        o.isWin && (t = t.replace(/\\/g, "/"));
        return t.endsWith("/packages/flutter/lib/") && (t = t.substr(0, t.length - "/packages/flutter/lib/".length)),
        t.endsWith("/") || (t += "/"),
        t.endsWith("/bin/") || (t += "bin/"),
        o.isWin && (t = t.replace(/\//g, "\\"),
        "\\" === t[0] && (t = t.substring(1))),
        t
    }
    t.SdkUtils = class {
        scanWorkspace() {
            return r(this, void 0, void 0, (function*() {
                const e = f.getDartWorkspaceFolders().map(e=>e.uri.fsPath)
                  , t = process.env.DART_PATH_OVERRIDE || ""
                  , n = process.env.PATH || ""
                  , r = (t + s.delimiter + n).split(s.delimiter).filter(e=>e);
                let a, l;
                e.forEach(e=>a = a || function(e) {
                    return function(e, t) {
                        if (e) {
                            let n = e;
                            for (; n; ) {
                                try {
                                    if (i.statSync(s.join(n, t)).isDirectory())
                                        return n
                                } catch (e) {}
                                const e = s.dirname(n);
                                if (n === e)
                                    break;
                                n = e
                            }
                        }
                        return
                    }(e, ".jiri_root")
                }(e));
                const m = yield c.findProjectFolders(e);
                for (const e of m) {
                    const t = c.hasPubspec(e) && p(e)
                      , n = i.existsSync(s.join(e, o.FLUTTER_CREATE_PROJECT_TRIGGER_FILE))
                      , r = i.existsSync(s.join(e, "bin/flutter")) && i.existsSync(s.join(e, "bin/cache/dart-sdk"));
                    yield u.resolvedPromise;
                    const a = t || n || r;
                    l = l || (a ? e : void 0)
                }
                const v = [d.config.flutterSdkPath, a && s.join(a, "lib/flutter"), a && s.join(a, "third_party/dart-pkg/git/flutter"), l, l && g(s.join(l, ".packages")), l && s.join(l, ".flutter"), l && s.join(l, "vendor/flutter"), process.env.FLUTTER_ROOT].concat(r).filter(h.notUndefined)
                  , E = this.findFlutterSdk(v);
                return yield u.resolvedPromise,
                E
            }
            ))
        }
        findFlutterSdk(e) {
            return this.searchPaths(e, o.flutterExecutableName, e=>this.hasExecutable(e, o.flutterPath))
        }
        hasExecutable(e, t) {
            const n = s.join(e, t);
            return i.existsSync(n) && i.statSync(n).isFile()
        }
        searchPaths(e, t, n) {
            let r = e.filter(e=>e).map(h.resolvePaths).filter(h.notUndefined);
            r = l.flatMap(r, e=>{
                return t = e,
                -1 !== ["bin", "sbin"].indexOf(s.basename(t)) ? [e] : [e, s.join(e, "bin")];
                var t
            }
            ),
            r = r.filter(e=>i.existsSync(s.join(e, t))),
            r = r.map(e=>{
                const n = s.join(e, t)
                  , r = e && i.realpathSync(n);
                return s.dirname(s.dirname(r))
            }
            );
            return r.find(n || (e=>!0))
        }
    }
    ,
    t.referencesFlutterSdk = p
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(12)
      , i = n(6)
      , s = n(34)
      , o = n(35);
    t.PackageMap = class {
        constructor(e) {
            if (this.map = {},
            !e)
                return;
            this.localPackageRoot = i.dirname(e);
            const t = r.readFileSync(e, {
                encoding: "utf8"
            }).split("\n");
            for (let e of t) {
                if (e = e.trim(),
                0 === e.length || e.startsWith("#"))
                    continue;
                const t = e.indexOf(":");
                if (-1 !== t) {
                    const n = e.substr(0, t)
                      , r = e.substring(t + 1);
                    r.startsWith("file:") ? this.map[n] = o.uriToFilePath(r) : (this.map[n] = i.join(this.localPackageRoot, r),
                    "lib" !== r && "lib\\" !== r && "lib/" !== r || (this.localPackageName = n))
                }
            }
        }
        static findPackagesFile(e) {
            if ("string" == typeof e)
                return o.findFile(".packages", e)
        }
        get packages() {
            return Object.assign({}, this.map)
        }
        getPackagePath(e) {
            return this.map[e]
        }
        resolvePackageUri(e) {
            if (!e)
                return;
            let t = e;
            t.startsWith("package:") && (t = t.substring(8));
            const n = t.indexOf("/");
            if (-1 === n)
                return;
            const r = t.substring(n + 1);
            t = t.substring(0, n);
            const s = this.getPackagePath(t);
            return s ? i.join(s, r) : void 0
        }
        convertFileToPackageUri(e, t=!0) {
            if (e)
                for (const n of Object.keys(this.map)) {
                    const r = this.map[n];
                    if (o.isWithinPath(e, r)) {
                        if (!t && n === this.localPackageName)
                            return;
                        let i = e.substring(r.length);
                        return s.isWin && (i = i.replace(/\\/g, "/")),
                        i.startsWith("/") && (i = i.substr(1)),
                        `package:${n}/${i}`
                    }
                }
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))((function(i, s) {
            function o(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    s(e)
                }
            }
            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    s(e)
                }
            }
            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(o, a)
            }
            l((r = r.apply(e, t || [])).next())
        }
        ))
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(12)
      , s = n(6)
      , o = n(34)
      , a = n(35)
      , l = n(128);
    function c(e, t) {
        return r(this, void 0, void 0, (function*() {
            if (!i.existsSync(e))
                return [];
            var n;
            return (yield(n = e,
            new Promise((e,t)=>i.readdir(n, {
                withFileTypes: !0
            }, (n,r)=>{
                n ? t(n) : e(r)
            }
            )))).filter(e=>e.isDirectory()).filter(e=>"bin" !== e.name || t && t.allowBin).filter(e=>"cache" !== e.name || t && t.allowCache).map(t=>s.join(e, t.name))
        }
        ))
    }
    function u(e) {
        return i.existsSync(s.join(e, "pubspec.yaml"))
    }
    function f(e) {
        return i.existsSync(s.join(e, o.FLUTTER_CREATE_PROJECT_TRIGGER_FILE))
    }
    function d(e) {
        return i.existsSync(s.join(e, "bin/flutter")) && i.existsSync(s.join(e, "bin/cache/dart-sdk"))
    }
    t.getChildFolders = c,
    t.hasPubspec = u,
    t.hasCreateTriggerFile = f,
    t.isFlutterRepo = d,
    t.findProjectFolders = function(e, t={}) {
        return r(this, void 0, void 0, (function*() {
            const n = yield a.flatMapAsync(e, c)
              , r = yield a.flatMapAsync(n, c)
              , i = e.concat(n).concat(r).filter(e=>t && t.requirePubspec ? u(e) : u(e) || f(e) || d(e));
            return t && t.sort ? l.sortBy(i, e=>e.toLowerCase()) : i
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.sortBy = function(e, t) {
        return e.sort((e,n)=>{
            const r = t(e)
              , i = t(n);
            return r < i ? -1 : r > i ? 1 : 0
        }
        )
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.resolvedPromise = Promise.resolve(!0)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(11)
      , i = n(72)
      , s = n(131);
    t.config = new class {
        constructor() {
            r.workspace.onDidChangeConfiguration(e=>this.reloadConfig()),
            this.config = r.workspace.getConfiguration("dart")
        }
        reloadConfig() {
            this.config = r.workspace.getConfiguration("dart")
        }
        getConfig(e, t) {
            const n = this.config.get(e, t);
            return s.nullToUndefined(n)
        }
        get flutterSdkPath() {
            return i.resolvePaths(this.getConfig("flutterSdkPath", null))
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.nullToUndefined = function(e) {
        return null === e ? void 0 : e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(11)
      , i = n(49);
    class s {
        provideCodeActions(e, t, n, r) {
            const i = [];
            return this.isCodeActionAvailable(e, t, n) && i.push(this.createExtractToArbCodeAction(e, t)),
            i
        }
        isCodeActionAvailable(e, t, n) {
            if (n && n.only && !r.CodeActionKind.RefactorExtract.contains(n.only))
                return !1;
            if (!i.isExtensionEnabledForDocument(e))
                return !1;
            const s = e.getText(t);
            return this.isSelectedString(s)
        }
        isSelectedString(e) {
            return e.length >= 2 && (e.startsWith("'") && e.endsWith("'") || e.startsWith('"') && e.endsWith('"'))
        }
        createExtractToArbCodeAction(e, t) {
            const n = new r.CodeAction("Extract to ARB",r.CodeActionKind.RefactorExtract);
            return n.command = {
                title: "Extract to ARB",
                command: "flutterIntl.extractToArb",
                arguments: [e, t]
            },
            n
        }
    }
    t.ExtractCodeActionProvider = s,
    s.providedCodeActionKinds = [r.CodeActionKind.RefactorExtract]
}
]);
//# sourceMappingURL=extension.js.map
