function e(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let o = 0; o < r.length; o++) n[r[o]] = !0;
  return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
}
const t = e(
    "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"
  ),
  n = e(
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  );
function r(e) {
  if (w(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        i = r(E(o) ? a(o) : o);
      if (i) for (const e in i) t[e] = i[e];
    }
    return t;
  }
  if (k(e)) return e;
}
const o = /;(?![^(]*\))/g,
  i = /:(.+)/;
function a(e) {
  const t = {};
  return (
    e.split(o).forEach((e) => {
      if (e) {
        const n = e.split(i);
        n.length > 1 && (t[n[0].trim()] = n[1].trim());
      }
    }),
    t
  );
}
function u(e) {
  let t = "";
  if (E(e)) t = e;
  else if (w(e))
    for (let n = 0; n < e.length; n++) {
      const r = u(e[n]);
      r && (t += r + " ");
    }
  else if (k(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const c = (e) => (null == e ? "" : k(e) ? JSON.stringify(e, s, 2) : String(e)),
  s = (e, t) =>
    x(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (e, [t, n]) => ((e[`${t} =>`] = n), e),
            {}
          ),
        }
      : _(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : !k(t) || w(t) || D(t)
      ? t
      : String(t),
  l = {},
  f = [],
  d = () => {},
  m = () => !1,
  p = /^on[^a-z]/,
  g = (e) => p.test(e),
  h = (e) => e.startsWith("onUpdate:"),
  v = Object.assign,
  y = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  b = Object.prototype.hasOwnProperty,
  C = (e, t) => b.call(e, t),
  w = Array.isArray,
  x = (e) => "[object Map]" === T(e),
  _ = (e) => "[object Set]" === T(e),
  S = (e) => "function" == typeof e,
  E = (e) => "string" == typeof e,
  N = (e) => "symbol" == typeof e,
  k = (e) => null !== e && "object" == typeof e,
  A = (e) => k(e) && S(e.then) && S(e.catch),
  R = Object.prototype.toString,
  T = (e) => R.call(e),
  D = (e) => "[object Object]" === T(e),
  O = (e) => E(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
  B = e(
    ",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  P = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  L = /-(\w)/g,
  I = P((e) => e.replace(L, (e, t) => (t ? t.toUpperCase() : ""))),
  M = /\B([A-Z])/g,
  F = P((e) => e.replace(M, "-$1").toLowerCase()),
  U = P((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  j = P((e) => (e ? `on${U(e)}` : "")),
  z = (e, t) => e !== t && (e == e || t == t),
  V = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  H = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  q = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  $ = new WeakMap(),
  W = [];
let K;
const X = Symbol(""),
  Y = Symbol("");
function G(e, t = l) {
  (function (e) {
    return e && !0 === e._isEffect;
  })(e) && (e = e.raw);
  const n = (function (e, t) {
    const n = function () {
      if (!n.active) return e();
      if (!W.includes(n)) {
        Z(n);
        try {
          return te.push(ee), (ee = !0), W.push(n), (K = n), e();
        } finally {
          W.pop(), re(), (K = W[W.length - 1]);
        }
      }
    };
    return (
      (n.id = Q++),
      (n.allowRecurse = !!t.allowRecurse),
      (n._isEffect = !0),
      (n.active = !0),
      (n.raw = e),
      (n.deps = []),
      (n.options = t),
      n
    );
  })(e, t);
  return t.lazy || n(), n;
}
function J(e) {
  e.active && (Z(e), e.options.onStop && e.options.onStop(), (e.active = !1));
}
let Q = 0;
function Z(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let ee = !0;
const te = [];
function ne() {
  te.push(ee), (ee = !1);
}
function re() {
  const e = te.pop();
  ee = void 0 === e || e;
}
function oe(e, t, n) {
  if (!ee || void 0 === K) return;
  let r = $.get(e);
  r || $.set(e, (r = new Map()));
  let o = r.get(n);
  o || r.set(n, (o = new Set())), o.has(K) || (o.add(K), K.deps.push(o));
}
function ie(e, t, n, r, o, i) {
  const a = $.get(e);
  if (!a) return;
  const u = new Set(),
    c = (e) => {
      e &&
        e.forEach((e) => {
          (e !== K || e.allowRecurse) && u.add(e);
        });
    };
  if ("clear" === t) a.forEach(c);
  else if ("length" === n && w(e))
    a.forEach((e, t) => {
      ("length" === t || t >= r) && c(e);
    });
  else
    switch ((void 0 !== n && c(a.get(n)), t)) {
      case "add":
        w(e) ? O(n) && c(a.get("length")) : (c(a.get(X)), x(e) && c(a.get(Y)));
        break;
      case "delete":
        w(e) || (c(a.get(X)), x(e) && c(a.get(Y)));
        break;
      case "set":
        x(e) && c(a.get(X));
    }
  u.forEach((e) => {
    e.options.scheduler ? e.options.scheduler(e) : e();
  });
}
const ae = e("__proto__,__v_isRef,__isVue"),
  ue = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(N)
  ),
  ce = me(),
  se = me(!1, !0),
  le = me(!0),
  fe = me(!0, !0),
  de = {};
function me(e = !1, t = !1) {
  return function (n, r, o) {
    if ("__v_isReactive" === r) return !e;
    if ("__v_isReadonly" === r) return e;
    if ("__v_raw" === r && o === (e ? (t ? He : Ve) : t ? ze : je).get(n))
      return n;
    const i = w(n);
    if (!e && i && C(de, r)) return Reflect.get(de, r, o);
    const a = Reflect.get(n, r, o);
    if (N(r) ? ue.has(r) : ae(r)) return a;
    if ((e || oe(n, 0, r), t)) return a;
    if (Ze(a)) {
      return !i || !O(r) ? a.value : a;
    }
    return k(a) ? (e ? We(a) : $e(a)) : a;
  };
}
["includes", "indexOf", "lastIndexOf"].forEach((e) => {
  const t = Array.prototype[e];
  de[e] = function (...e) {
    const n = Je(this);
    for (let t = 0, o = this.length; t < o; t++) oe(n, 0, t + "");
    const r = t.apply(n, e);
    return -1 === r || !1 === r ? t.apply(n, e.map(Je)) : r;
  };
}),
  ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    const t = Array.prototype[e];
    de[e] = function (...e) {
      ne();
      const n = t.apply(this, e);
      return re(), n;
    };
  });
function pe(e = !1) {
  return function (t, n, r, o) {
    let i = t[n];
    if (!e && ((r = Je(r)), (i = Je(i)), !w(t) && Ze(i) && !Ze(r)))
      return (i.value = r), !0;
    const a = w(t) && O(n) ? Number(n) < t.length : C(t, n),
      u = Reflect.set(t, n, r, o);
    return (
      t === Je(o) && (a ? z(r, i) && ie(t, "set", n, r) : ie(t, "add", n, r)), u
    );
  };
}
const ge = {
    get: ce,
    set: pe(),
    deleteProperty: function (e, t) {
      const n = C(e, t);
      e[t];
      const r = Reflect.deleteProperty(e, t);
      return r && n && ie(e, "delete", t, void 0), r;
    },
    has: function (e, t) {
      const n = Reflect.has(e, t);
      return (N(t) && ue.has(t)) || oe(e, 0, t), n;
    },
    ownKeys: function (e) {
      return oe(e, 0, w(e) ? "length" : X), Reflect.ownKeys(e);
    },
  },
  he = { get: le, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
  ve = v({}, ge, { get: se, set: pe(!0) });
v({}, he, { get: fe });
const ye = (e) => (k(e) ? $e(e) : e),
  be = (e) => (k(e) ? We(e) : e),
  Ce = (e) => e,
  we = (e) => Reflect.getPrototypeOf(e);
function xe(e, t, n = !1, r = !1) {
  const o = Je((e = e.__v_raw)),
    i = Je(t);
  t !== i && !n && oe(o, 0, t), !n && oe(o, 0, i);
  const { has: a } = we(o),
    u = r ? Ce : n ? be : ye;
  return a.call(o, t)
    ? u(e.get(t))
    : a.call(o, i)
    ? u(e.get(i))
    : void (e !== o && e.get(t));
}
function _e(e, t = !1) {
  const n = this.__v_raw,
    r = Je(n),
    o = Je(e);
  return (
    e !== o && !t && oe(r, 0, e),
    !t && oe(r, 0, o),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function Se(e, t = !1) {
  return (e = e.__v_raw), !t && oe(Je(e), 0, X), Reflect.get(e, "size", e);
}
function Ee(e) {
  e = Je(e);
  const t = Je(this);
  return we(t).has.call(t, e) || (t.add(e), ie(t, "add", e, e)), this;
}
function Ne(e, t) {
  t = Je(t);
  const n = Je(this),
    { has: r, get: o } = we(n);
  let i = r.call(n, e);
  i || ((e = Je(e)), (i = r.call(n, e)));
  const a = o.call(n, e);
  return (
    n.set(e, t), i ? z(t, a) && ie(n, "set", e, t) : ie(n, "add", e, t), this
  );
}
function ke(e) {
  const t = Je(this),
    { has: n, get: r } = we(t);
  let o = n.call(t, e);
  o || ((e = Je(e)), (o = n.call(t, e))), r && r.call(t, e);
  const i = t.delete(e);
  return o && ie(t, "delete", e, void 0), i;
}
function Ae() {
  const e = Je(this),
    t = 0 !== e.size,
    n = e.clear();
  return t && ie(e, "clear", void 0, void 0), n;
}
function Re(e, t) {
  return function (n, r) {
    const o = this,
      i = o.__v_raw,
      a = Je(i),
      u = t ? Ce : e ? be : ye;
    return !e && oe(a, 0, X), i.forEach((e, t) => n.call(r, u(e), u(t), o));
  };
}
function Te(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      i = Je(o),
      a = x(i),
      u = "entries" === e || (e === Symbol.iterator && a),
      c = "keys" === e && a,
      s = o[e](...r),
      l = n ? Ce : t ? be : ye;
    return (
      !t && oe(i, 0, c ? Y : X),
      {
        next() {
          const { value: e, done: t } = s.next();
          return t
            ? { value: e, done: t }
            : { value: u ? [l(e[0]), l(e[1])] : l(e), done: t };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function De(e) {
  return function (...t) {
    return "delete" !== e && this;
  };
}
const Oe = {
    get(e) {
      return xe(this, e);
    },
    get size() {
      return Se(this);
    },
    has: _e,
    add: Ee,
    set: Ne,
    delete: ke,
    clear: Ae,
    forEach: Re(!1, !1),
  },
  Be = {
    get(e) {
      return xe(this, e, !1, !0);
    },
    get size() {
      return Se(this);
    },
    has: _e,
    add: Ee,
    set: Ne,
    delete: ke,
    clear: Ae,
    forEach: Re(!1, !0),
  },
  Pe = {
    get(e) {
      return xe(this, e, !0);
    },
    get size() {
      return Se(this, !0);
    },
    has(e) {
      return _e.call(this, e, !0);
    },
    add: De("add"),
    set: De("set"),
    delete: De("delete"),
    clear: De("clear"),
    forEach: Re(!0, !1),
  },
  Le = {
    get(e) {
      return xe(this, e, !0, !0);
    },
    get size() {
      return Se(this, !0);
    },
    has(e) {
      return _e.call(this, e, !0);
    },
    add: De("add"),
    set: De("set"),
    delete: De("delete"),
    clear: De("clear"),
    forEach: Re(!0, !0),
  };
function Ie(e, t) {
  const n = t ? (e ? Le : Be) : e ? Pe : Oe;
  return (t, r, o) =>
    "__v_isReactive" === r
      ? !e
      : "__v_isReadonly" === r
      ? e
      : "__v_raw" === r
      ? t
      : Reflect.get(C(n, r) && r in t ? n : t, r, o);
}
["keys", "values", "entries", Symbol.iterator].forEach((e) => {
  (Oe[e] = Te(e, !1, !1)),
    (Pe[e] = Te(e, !0, !1)),
    (Be[e] = Te(e, !1, !0)),
    (Le[e] = Te(e, !0, !0));
});
const Me = { get: Ie(!1, !1) },
  Fe = { get: Ie(!1, !0) },
  Ue = { get: Ie(!0, !1) },
  je = new WeakMap(),
  ze = new WeakMap(),
  Ve = new WeakMap(),
  He = new WeakMap();
function qe(e) {
  return e.__v_skip || !Object.isExtensible(e)
    ? 0
    : (function (e) {
        switch (e) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0;
        }
      })(((e) => T(e).slice(8, -1))(e));
}
function $e(e) {
  return e && e.__v_isReadonly ? e : Ke(e, !1, ge, Me, je);
}
function We(e) {
  return Ke(e, !0, he, Ue, Ve);
}
function Ke(e, t, n, r, o) {
  if (!k(e)) return e;
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
  const i = o.get(e);
  if (i) return i;
  const a = qe(e);
  if (0 === a) return e;
  const u = new Proxy(e, 2 === a ? r : n);
  return o.set(e, u), u;
}
function Xe(e) {
  return Ye(e) ? Xe(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function Ye(e) {
  return !(!e || !e.__v_isReadonly);
}
function Ge(e) {
  return Xe(e) || Ye(e);
}
function Je(e) {
  return (e && Je(e.__v_raw)) || e;
}
const Qe = (e) => (k(e) ? $e(e) : e);
function Ze(e) {
  return Boolean(e && !0 === e.__v_isRef);
}
function et(e) {
  return (function (e, t = !1) {
    if (Ze(e)) return e;
    return new tt(e, t);
  })(e);
}
class tt {
  constructor(e, t = !1) {
    (this._rawValue = e),
      (this._shallow = t),
      (this.__v_isRef = !0),
      (this._value = t ? e : Qe(e));
  }
  get value() {
    return oe(Je(this), 0, "value"), this._value;
  }
  set value(e) {
    z(Je(e), this._rawValue) &&
      ((this._rawValue = e),
      (this._value = this._shallow ? e : Qe(e)),
      ie(Je(this), "set", "value", e));
  }
}
const nt = {
  get: (e, t, n) => {
    return Ze((r = Reflect.get(e, t, n))) ? r.value : r;
    var r;
  },
  set: (e, t, n, r) => {
    const o = e[t];
    return Ze(o) && !Ze(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function rt(e) {
  return Xe(e) ? e : new Proxy(e, nt);
}
class ot {
  constructor(e, t) {
    (this._object = e), (this._key = t), (this.__v_isRef = !0);
  }
  get value() {
    return this._object[this._key];
  }
  set value(e) {
    this._object[this._key] = e;
  }
}
class it {
  constructor(e, t, n) {
    (this._setter = t),
      (this._dirty = !0),
      (this.__v_isRef = !0),
      (this.effect = G(e, {
        lazy: !0,
        scheduler: () => {
          this._dirty || ((this._dirty = !0), ie(Je(this), "set", "value"));
        },
      })),
      (this.__v_isReadonly = n);
  }
  get value() {
    const e = Je(this);
    return (
      e._dirty && ((e._value = this.effect()), (e._dirty = !1)),
      oe(e, 0, "value"),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
function at(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (i) {
    ct(i, t, n);
  }
  return o;
}
function ut(e, t, n, r) {
  if (S(e)) {
    const o = at(e, t, n, r);
    return (
      o &&
        A(o) &&
        o.catch((e) => {
          ct(e, t, n);
        }),
      o
    );
  }
  const o = [];
  for (let i = 0; i < e.length; i++) o.push(ut(e[i], t, n, r));
  return o;
}
function ct(e, t, n, r = !0) {
  t && t.vnode;
  if (t) {
    let r = t.parent;
    const o = t.proxy,
      i = n;
    for (; r; ) {
      const t = r.ec;
      if (t)
        for (let n = 0; n < t.length; n++) if (!1 === t[n](e, o, i)) return;
      r = r.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) return void at(a, null, 10, [e, o, i]);
  }
  !(function (e, t, n, r = !0) {
    console.error(e);
  })(e, 0, 0, r);
}
let st = !1,
  lt = !1;
const ft = [];
let dt = 0;
const mt = [];
let pt = null,
  gt = 0;
const ht = [];
let vt = null,
  yt = 0;
const bt = Promise.resolve();
let Ct = null,
  wt = null;
function xt(e) {
  const t = Ct || bt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _t(e) {
  if (
    !(
      (ft.length && ft.includes(e, st && e.allowRecurse ? dt + 1 : dt)) ||
      e === wt
    )
  ) {
    const t = (function (e) {
      let t = dt + 1,
        n = ft.length;
      const r = At(e);
      for (; t < n; ) {
        const e = (t + n) >>> 1;
        At(ft[e]) < r ? (t = e + 1) : (n = e);
      }
      return t;
    })(e);
    t > -1 ? ft.splice(t, 0, e) : ft.push(e), St();
  }
}
function St() {
  st || lt || ((lt = !0), (Ct = bt.then(Rt)));
}
function Et(e, t, n, r) {
  w(e)
    ? n.push(...e)
    : (t && t.includes(e, e.allowRecurse ? r + 1 : r)) || n.push(e),
    St();
}
function Nt(e, t = null) {
  if (mt.length) {
    for (
      wt = t, pt = [...new Set(mt)], mt.length = 0, gt = 0;
      gt < pt.length;
      gt++
    )
      pt[gt]();
    (pt = null), (gt = 0), (wt = null), Nt(e, t);
  }
}
function kt(e) {
  if (ht.length) {
    const e = [...new Set(ht)];
    if (((ht.length = 0), vt)) return void vt.push(...e);
    for (vt = e, vt.sort((e, t) => At(e) - At(t)), yt = 0; yt < vt.length; yt++)
      vt[yt]();
    (vt = null), (yt = 0);
  }
}
const At = (e) => (null == e.id ? 1 / 0 : e.id);
function Rt(e) {
  (lt = !1), (st = !0), Nt(e), ft.sort((e, t) => At(e) - At(t));
  try {
    for (dt = 0; dt < ft.length; dt++) {
      const e = ft[dt];
      e && !1 !== e.active && at(e, null, 14);
    }
  } finally {
    (dt = 0),
      (ft.length = 0),
      kt(),
      (st = !1),
      (Ct = null),
      (ft.length || mt.length || ht.length) && Rt(e);
  }
}
function Tt(e, t, ...n) {
  const r = e.vnode.props || l;
  let o = n;
  const i = t.startsWith("update:"),
    a = i && t.slice(7);
  if (a && a in r) {
    const e = `${"modelValue" === a ? "model" : a}Modifiers`,
      { number: t, trim: i } = r[e] || l;
    i ? (o = n.map((e) => e.trim())) : t && (o = n.map(q));
  }
  let u,
    c = r[(u = j(t))] || r[(u = j(I(t)))];
  !c && i && (c = r[(u = j(F(t)))]), c && ut(c, e, 6, o);
  const s = r[u + "Once"];
  if (s) {
    if (e.emitted) {
      if (e.emitted[u]) return;
    } else (e.emitted = {})[u] = !0;
    ut(s, e, 6, o);
  }
}
function Dt(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (void 0 !== o) return o;
  const i = e.emits;
  let a = {},
    u = !1;
  if (!S(e)) {
    const r = (e) => {
      const n = Dt(e, t, !0);
      n && ((u = !0), v(a, n));
    };
    !n && t.mixins.length && t.mixins.forEach(r),
      e.extends && r(e.extends),
      e.mixins && e.mixins.forEach(r);
  }
  return i || u
    ? (w(i) ? i.forEach((e) => (a[e] = null)) : v(a, i), r.set(e, a), a)
    : (r.set(e, null), null);
}
function Ot(e, t) {
  return (
    !(!e || !g(t)) &&
    ((t = t.slice(2).replace(/Once$/, "")),
    C(e, t[0].toLowerCase() + t.slice(1)) || C(e, F(t)) || C(e, t))
  );
}
let Bt = null,
  Pt = null;
function Lt(e) {
  const t = Bt;
  return (Bt = e), (Pt = (e && e.type.__scopeId) || null), t;
}
function It(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: i,
    propsOptions: [a],
    slots: u,
    attrs: c,
    emit: s,
    render: l,
    renderCache: f,
    data: d,
    setupState: m,
    ctx: p,
    inheritAttrs: g,
  } = e;
  let v;
  const y = Lt(e);
  try {
    let e;
    if (4 & n.shapeFlag) {
      const t = o || r;
      (v = gr(l.call(t, t, f, i, m, d, p))), (e = c);
    } else {
      const n = t;
      0,
        (v = gr(
          n.length > 1 ? n(i, { attrs: c, slots: u, emit: s }) : n(i, null)
        )),
        (e = t.props ? c : Mt(c));
    }
    let y = v;
    if (e && !1 !== g) {
      const t = Object.keys(e),
        { shapeFlag: n } = y;
      t.length &&
        (1 & n || 6 & n) &&
        (a && t.some(h) && (e = Ft(e, a)), (y = dr(y, e)));
    }
    0,
      n.dirs && (y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs),
      n.transition && (y.transition = n.transition),
      (v = y);
  } catch (b) {
    (er.length = 0), ct(b, e, 1), (v = fr(Qn));
  }
  return Lt(y), v;
}
const Mt = (e) => {
    let t;
    for (const n in e)
      ("class" === n || "style" === n || g(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Ft = (e, t) => {
    const n = {};
    for (const r in e) (h(r) && r.slice(9) in t) || (n[r] = e[r]);
    return n;
  };
function Ut(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t[i] !== e[i] && !Ot(n, i)) return !0;
  }
  return !1;
}
function jt(e, t, n = !1) {
  const r = Sr || Bt;
  if (r) {
    const o =
      null == r.parent
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && S(t) ? t() : t;
  }
}
const zt = {};
function Vt(e, t, n) {
  return Ht(e, t, n);
}
function Ht(
  e,
  t,
  { immediate: n, deep: r, flush: o, onTrack: i, onTrigger: a } = l,
  u = Sr
) {
  let c,
    s,
    f = !1,
    m = !1;
  if (
    (Ze(e)
      ? ((c = () => e.value), (f = !!e._shallow))
      : Xe(e)
      ? ((c = () => e), (r = !0))
      : w(e)
      ? ((m = !0),
        (f = e.some(Xe)),
        (c = () =>
          e.map((e) =>
            Ze(e) ? e.value : Xe(e) ? Wt(e) : S(e) ? at(e, u, 2) : void 0
          )))
      : (c = S(e)
          ? t
            ? () => at(e, u, 2)
            : () => {
                if (!u || !u.isUnmounted) return s && s(), ut(e, u, 3, [p]);
              }
          : d),
    t && r)
  ) {
    const e = c;
    c = () => Wt(e());
  }
  let p = (e) => {
      s = b.options.onStop = () => {
        at(e, u, 4);
      };
    },
    g = m ? [] : zt;
  const h = () => {
    if (b.active)
      if (t) {
        const e = b();
        (r || f || (m ? e.some((e, t) => z(e, g[t])) : z(e, g))) &&
          (s && s(), ut(t, u, 3, [e, g === zt ? void 0 : g, p]), (g = e));
      } else b();
  };
  let v;
  (h.allowRecurse = !!t),
    (v =
      "sync" === o
        ? h
        : "post" === o
        ? () => Vn(h, u && u.suspense)
        : () => {
            !u || u.isMounted
              ? (function (e) {
                  Et(e, pt, mt, gt);
                })(h)
              : h();
          });
  const b = G(c, { lazy: !0, onTrack: i, onTrigger: a, scheduler: v });
  return (
    Tr(b, u),
    t ? (n ? h() : (g = b())) : "post" === o ? Vn(b, u && u.suspense) : b(),
    () => {
      J(b), u && y(u.effects, b);
    }
  );
}
function qt(e, t, n) {
  const r = this.proxy,
    o = E(e) ? (e.includes(".") ? $t(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  return S(t) ? (i = t) : ((i = t.handler), (n = t)), Ht(o, i.bind(r), n, this);
}
function $t(e, t) {
  const n = t.split(".");
  return () => {
    let t = e;
    for (let e = 0; e < n.length && t; e++) t = t[n[e]];
    return t;
  };
}
function Wt(e, t = new Set()) {
  if (!k(e) || t.has(e) || e.__v_skip) return e;
  if ((t.add(e), Ze(e))) Wt(e.value, t);
  else if (w(e)) for (let n = 0; n < e.length; n++) Wt(e[n], t);
  else if (_(e) || x(e))
    e.forEach((e) => {
      Wt(e, t);
    });
  else if (D(e)) for (const n in e) Wt(e[n], t);
  return e;
}
function Kt(e) {
  return S(e) ? { setup: e, name: e.name } : e;
}
const Xt = (e) => !!e.type.__asyncLoader,
  Yt = (e) => e.type.__isKeepAlive;
function Gt(e, t) {
  Qt(e, "a", t);
}
function Jt(e, t) {
  Qt(e, "da", t);
}
function Qt(e, t, n = Sr) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let t = n;
      for (; t; ) {
        if (t.isDeactivated) return;
        t = t.parent;
      }
      e();
    });
  if ((en(t, r, n), n)) {
    let e = n.parent;
    for (; e && e.parent; )
      Yt(e.parent.vnode) && Zt(r, t, n, e), (e = e.parent);
  }
}
function Zt(e, t, n, r) {
  const o = en(t, e, r, !0);
  cn(() => {
    y(r[t], o);
  }, n);
}
function en(e, t, n = Sr, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...r) => {
          if (n.isUnmounted) return;
          ne(), Er(n);
          const o = ut(t, n, e, r);
          return Er(null), re(), o;
        });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const tn =
    (e) =>
    (t, n = Sr) =>
      (!kr || "sp" === e) && en(e, t, n),
  nn = tn("bm"),
  rn = tn("m"),
  on = tn("bu"),
  an = tn("u"),
  un = tn("bum"),
  cn = tn("um"),
  sn = tn("sp"),
  ln = tn("rtg"),
  fn = tn("rtc");
function dn(e, t = Sr) {
  en("ec", e, t);
}
let mn = !0;
function pn(e) {
  const t = vn(e),
    n = e.proxy,
    r = e.ctx;
  (mn = !1), t.beforeCreate && gn(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: i,
    methods: a,
    watch: u,
    provide: c,
    inject: s,
    created: f,
    beforeMount: m,
    mounted: p,
    beforeUpdate: g,
    updated: h,
    activated: v,
    deactivated: y,
    beforeDestroy: b,
    beforeUnmount: C,
    destroyed: x,
    unmounted: _,
    render: E,
    renderTracked: N,
    renderTriggered: A,
    errorCaptured: R,
    serverPrefetch: T,
    expose: D,
    inheritAttrs: O,
    components: B,
    directives: P,
    filters: L,
  } = t;
  if (
    (s &&
      (function (e, t, n = d) {
        w(e) && (e = wn(e));
        for (const r in e) {
          const n = e[r];
          k(n)
            ? (t[r] =
                "default" in n
                  ? jt(n.from || r, n.default, !0)
                  : jt(n.from || r))
            : (t[r] = jt(n));
        }
      })(s, r, null),
    a)
  )
    for (const l in a) {
      const e = a[l];
      S(e) && (r[l] = e.bind(n));
    }
  if (o) {
    const t = o.call(n, n);
    k(t) && (e.data = $e(t));
  }
  if (((mn = !0), i))
    for (const l in i) {
      const e = i[l],
        t = Or({
          get: S(e) ? e.bind(n, n) : S(e.get) ? e.get.bind(n, n) : d,
          set: !S(e) && S(e.set) ? e.set.bind(n) : d,
        });
      Object.defineProperty(r, l, {
        enumerable: !0,
        configurable: !0,
        get: () => t.value,
        set: (e) => (t.value = e),
      });
    }
  if (u) for (const l in u) hn(u[l], r, n, l);
  if (c) {
    const e = S(c) ? c.call(n) : c;
    Reflect.ownKeys(e).forEach((t) => {
      !(function (e, t) {
        if (Sr) {
          let n = Sr.provides;
          const r = Sr.parent && Sr.parent.provides;
          r === n && (n = Sr.provides = Object.create(r)), (n[e] = t);
        }
      })(t, e[t]);
    });
  }
  function I(e, t) {
    w(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
  }
  if (
    (f && gn(f, e, "c"),
    I(nn, m),
    I(rn, p),
    I(on, g),
    I(an, h),
    I(Gt, v),
    I(Jt, y),
    I(dn, R),
    I(fn, N),
    I(ln, A),
    I(un, C),
    I(cn, _),
    I(sn, T),
    w(D))
  )
    if (D.length) {
      const t = e.exposed || (e.exposed = rt({}));
      D.forEach((e) => {
        t[e] = (function (e, t) {
          return Ze(e[t]) ? e[t] : new ot(e, t);
        })(n, e);
      });
    } else e.exposed || (e.exposed = l);
  E && e.render === d && (e.render = E),
    null != O && (e.inheritAttrs = O),
    B && (e.components = B),
    P && (e.directives = P);
}
function gn(e, t, n) {
  ut(w(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function hn(e, t, n, r) {
  const o = r.includes(".") ? $t(n, r) : () => n[r];
  if (E(e)) {
    const n = t[e];
    S(n) && Vt(o, n);
  } else if (S(e)) Vt(o, e.bind(n));
  else if (k(e))
    if (w(e)) e.forEach((e) => hn(e, t, n, r));
    else {
      const r = S(e.handler) ? e.handler.bind(n) : t[e.handler];
      S(r) && Vt(o, r, e);
    }
}
function vn(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: i,
      config: { optionMergeStrategies: a },
    } = e.appContext,
    u = i.get(t);
  let c;
  return (
    u
      ? (c = u)
      : o.length || n || r
      ? ((c = {}), o.length && o.forEach((e) => yn(c, e, a, !0)), yn(c, t, a))
      : (c = t),
    i.set(t, c),
    c
  );
}
function yn(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && yn(e, i, n, !0), o && o.forEach((t) => yn(e, t, n, !0));
  for (const a in t)
    if (r && "expose" === a);
    else {
      const r = bn[a] || (n && n[a]);
      e[a] = r ? r(e[a], t[a]) : t[a];
    }
  return e;
}
const bn = {
  data: Cn,
  props: _n,
  emits: _n,
  methods: _n,
  computed: _n,
  beforeCreate: xn,
  created: xn,
  beforeMount: xn,
  mounted: xn,
  beforeUpdate: xn,
  updated: xn,
  beforeDestroy: xn,
  destroyed: xn,
  activated: xn,
  deactivated: xn,
  errorCaptured: xn,
  serverPrefetch: xn,
  components: _n,
  directives: _n,
  watch: _n,
  provide: Cn,
  inject: function (e, t) {
    return _n(wn(e), wn(t));
  },
};
function Cn(e, t) {
  return t
    ? e
      ? function () {
          return v(
            S(e) ? e.call(this, this) : e,
            S(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function wn(e) {
  if (w(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function xn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function _n(e, t) {
  return e ? v(v(Object.create(null), e), t) : t;
}
function Sn(e, t, n, r = !1) {
  const o = {},
    i = {};
  H(i, cr, 1), (e.propsDefaults = Object.create(null)), En(e, t, o, i);
  for (const a in e.propsOptions[0]) a in o || (o[a] = void 0);
  n
    ? (e.props = r ? o : Ke(o, !1, ve, Fe, ze))
    : e.type.props
    ? (e.props = o)
    : (e.props = i),
    (e.attrs = i);
}
function En(e, t, n, r) {
  const [o, i] = e.propsOptions;
  let a,
    u = !1;
  if (t)
    for (let c in t) {
      if (B(c)) continue;
      const s = t[c];
      let l;
      o && C(o, (l = I(c)))
        ? i && i.includes(l)
          ? ((a || (a = {}))[l] = s)
          : (n[l] = s)
        : Ot(e.emitsOptions, c) || (s !== r[c] && ((r[c] = s), (u = !0)));
    }
  if (i) {
    const t = Je(n),
      r = a || l;
    for (let a = 0; a < i.length; a++) {
      const u = i[a];
      n[u] = Nn(o, t, u, r[u], e, !C(r, u));
    }
  }
  return u;
}
function Nn(e, t, n, r, o, i) {
  const a = e[n];
  if (null != a) {
    const e = C(a, "default");
    if (e && void 0 === r) {
      const e = a.default;
      if (a.type !== Function && S(e)) {
        const { propsDefaults: i } = o;
        n in i ? (r = i[n]) : (Er(o), (r = i[n] = e.call(null, t)), Er(null));
      } else r = e;
    }
    a[0] &&
      (i && !e ? (r = !1) : !a[1] || ("" !== r && r !== F(n)) || (r = !0));
  }
  return r;
}
function kn(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const i = e.props,
    a = {},
    u = [];
  let c = !1;
  if (!S(e)) {
    const r = (e) => {
      c = !0;
      const [n, r] = kn(e, t, !0);
      v(a, n), r && u.push(...r);
    };
    !n && t.mixins.length && t.mixins.forEach(r),
      e.extends && r(e.extends),
      e.mixins && e.mixins.forEach(r);
  }
  if (!i && !c) return r.set(e, f), f;
  if (w(i))
    for (let f = 0; f < i.length; f++) {
      const e = I(i[f]);
      An(e) && (a[e] = l);
    }
  else if (i)
    for (const l in i) {
      const e = I(l);
      if (An(e)) {
        const t = i[l],
          n = (a[e] = w(t) || S(t) ? { type: t } : t);
        if (n) {
          const t = Dn(Boolean, n.type),
            r = Dn(String, n.type);
          (n[0] = t > -1),
            (n[1] = r < 0 || t < r),
            (t > -1 || C(n, "default")) && u.push(e);
        }
      }
    }
  const s = [a, u];
  return r.set(e, s), s;
}
function An(e) {
  return "$" !== e[0];
}
function Rn(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : "";
}
function Tn(e, t) {
  return Rn(e) === Rn(t);
}
function Dn(e, t) {
  return w(t) ? t.findIndex((t) => Tn(t, e)) : S(t) && Tn(t, e) ? 0 : -1;
}
const On = (e) => "_" === e[0] || "$stable" === e,
  Bn = (e) => (w(e) ? e.map(gr) : [gr(e)]),
  Pn = (e, t, n) => {
    const r = (function (e, t = Bt, n) {
      if (!t) return e;
      if (e._n) return e;
      const r = (...n) => {
        r._d && or(-1);
        const o = Lt(t),
          i = e(...n);
        return Lt(o), r._d && or(1), i;
      };
      return (r._n = !0), (r._c = !0), (r._d = !0), r;
    })((e) => Bn(t(e)), n);
    return (r._c = !1), r;
  },
  Ln = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (On(o)) continue;
      const n = e[o];
      if (S(n)) t[o] = Pn(0, n, r);
      else if (null != n) {
        const e = Bn(n);
        t[o] = () => e;
      }
    }
  },
  In = (e, t) => {
    const n = Bn(t);
    e.slots.default = () => n;
  };
function Mn(e, t, n, r) {
  const o = e.dirs,
    i = t && t.dirs;
  for (let a = 0; a < o.length; a++) {
    const u = o[a];
    i && (u.oldValue = i[a].value);
    let c = u.dir[r];
    c && (ne(), ut(c, n, 8, [e.el, u, e, t]), re());
  }
}
function Fn() {
  return {
    app: null,
    config: {
      isNativeTag: m,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Un = 0;
function jn(e, t) {
  return function (n, r = null) {
    null == r || k(r) || (r = null);
    const o = Fn(),
      i = new Set();
    let a = !1;
    const u = (o.app = {
      _uid: Un++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      version: Br,
      get config() {
        return o.config;
      },
      set config(e) {},
      use: (e, ...t) => (
        i.has(e) ||
          (e && S(e.install)
            ? (i.add(e), e.install(u, ...t))
            : S(e) && (i.add(e), e(u, ...t))),
        u
      ),
      mixin: (e) => (o.mixins.includes(e) || o.mixins.push(e), u),
      component: (e, t) => (t ? ((o.components[e] = t), u) : o.components[e]),
      directive: (e, t) => (t ? ((o.directives[e] = t), u) : o.directives[e]),
      mount(i, c, s) {
        if (!a) {
          const l = fr(n, r);
          return (
            (l.appContext = o),
            c && t ? t(l, i) : e(l, i, s),
            (a = !0),
            (u._container = i),
            (i.__vue_app__ = u),
            l.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide: (e, t) => ((o.provides[e] = t), u),
    });
    return u;
  };
}
const zn = { scheduler: _t, allowRecurse: !0 },
  Vn = function (e, t) {
    t && t.pendingBranch
      ? w(e)
        ? t.effects.push(...e)
        : t.effects.push(e)
      : Et(e, vt, ht, yt);
  },
  Hn = (e, t, n, r, o = !1) => {
    if (w(e))
      return void e.forEach((e, i) => Hn(e, t && (w(t) ? t[i] : t), n, r, o));
    if (Xt(r) && !o) return;
    const i = 4 & r.shapeFlag ? r.component.exposed || r.component.proxy : r.el,
      a = o ? null : i,
      { i: u, r: c } = e,
      s = t && t.r,
      f = u.refs === l ? (u.refs = {}) : u.refs,
      d = u.setupState;
    if (
      (null != s &&
        s !== c &&
        (E(s)
          ? ((f[s] = null), C(d, s) && (d[s] = null))
          : Ze(s) && (s.value = null)),
      E(c))
    ) {
      const e = () => {
        (f[c] = a), C(d, c) && (d[c] = a);
      };
      a ? ((e.id = -1), Vn(e, n)) : e();
    } else if (Ze(c)) {
      const e = () => {
        c.value = a;
      };
      a ? ((e.id = -1), Vn(e, n)) : e();
    } else S(c) && at(c, u, 12, [a, f]);
  };
function qn(e) {
  return (function (e, t) {
    const {
        insert: n,
        remove: r,
        patchProp: o,
        forcePatchProp: i,
        createElement: a,
        createText: u,
        createComment: c,
        setText: s,
        setElementText: m,
        parentNode: p,
        nextSibling: g,
        setScopeId: h = d,
        cloneNode: y,
        insertStaticContent: b,
      } = e,
      w = (e, t, n, r = null, o = null, i = null, a = !1, u = null, c = !1) => {
        e && !ur(e, t) && ((r = ae(e)), Q(e, o, i, !0), (e = null)),
          -2 === t.patchFlag && ((c = !1), (t.dynamicChildren = null));
        const { type: s, ref: l, shapeFlag: f } = t;
        switch (s) {
          case Jn:
            x(e, t, n, r);
            break;
          case Qn:
            _(e, t, n, r);
            break;
          case Zn:
            null == e && S(t, n, r, a);
            break;
          case Gn:
            M(e, t, n, r, o, i, a, u, c);
            break;
          default:
            1 & f
              ? k(e, t, n, r, o, i, a, u, c)
              : 6 & f
              ? U(e, t, n, r, o, i, a, u, c)
              : (64 & f || 128 & f) && s.process(e, t, n, r, o, i, a, u, c, ce);
        }
        null != l && o && Hn(l, e && e.ref, i, t || e, !t);
      },
      x = (e, t, r, o) => {
        if (null == e) n((t.el = u(t.children)), r, o);
        else {
          const n = (t.el = e.el);
          t.children !== e.children && s(n, t.children);
        }
      },
      _ = (e, t, r, o) => {
        null == e ? n((t.el = c(t.children || "")), r, o) : (t.el = e.el);
      },
      S = (e, t, n, r) => {
        [e.el, e.anchor] = b(e.children, t, n, r);
      },
      E = ({ el: e, anchor: t }, r, o) => {
        let i;
        for (; e && e !== t; ) (i = g(e)), n(e, r, o), (e = i);
        n(t, r, o);
      },
      N = ({ el: e, anchor: t }) => {
        let n;
        for (; e && e !== t; ) (n = g(e)), r(e), (e = n);
        r(t);
      },
      k = (e, t, n, r, o, i, a, u, c) => {
        (a = a || "svg" === t.type),
          null == e ? R(t, n, r, o, i, a, u, c) : O(e, t, o, i, a, u, c);
      },
      R = (e, t, r, i, u, c, s, l) => {
        let f, d;
        const {
          type: p,
          props: g,
          shapeFlag: h,
          transition: v,
          patchFlag: b,
          dirs: C,
        } = e;
        if (e.el && void 0 !== y && -1 === b) f = e.el = y(e.el);
        else {
          if (
            ((f = e.el = a(e.type, c, g && g.is, g)),
            8 & h
              ? m(f, e.children)
              : 16 & h &&
                D(
                  e.children,
                  f,
                  null,
                  i,
                  u,
                  c && "foreignObject" !== p,
                  s,
                  l || !!e.dynamicChildren
                ),
            C && Mn(e, null, i, "created"),
            g)
          ) {
            for (const t in g)
              B(t) || o(f, t, null, g[t], c, e.children, i, u, oe);
            (d = g.onVnodeBeforeMount) && $n(d, i, e);
          }
          T(f, e, e.scopeId, s, i);
        }
        C && Mn(e, null, i, "beforeMount");
        const w = (!u || (u && !u.pendingBranch)) && v && !v.persisted;
        w && v.beforeEnter(f),
          n(f, t, r),
          ((d = g && g.onVnodeMounted) || w || C) &&
            Vn(() => {
              d && $n(d, i, e), w && v.enter(f), C && Mn(e, null, i, "mounted");
            }, u);
      },
      T = (e, t, n, r, o) => {
        if ((n && h(e, n), r)) for (let i = 0; i < r.length; i++) h(e, r[i]);
        if (o) {
          if (t === o.subTree) {
            const t = o.vnode;
            T(e, t, t.scopeId, t.slotScopeIds, o.parent);
          }
        }
      },
      D = (e, t, n, r, o, i, a, u, c = 0) => {
        for (let s = c; s < e.length; s++) {
          const c = (e[s] = u ? hr(e[s]) : gr(e[s]));
          w(null, c, t, n, r, o, i, a, u);
        }
      },
      O = (e, t, n, r, a, u, c) => {
        const s = (t.el = e.el);
        let { patchFlag: f, dynamicChildren: d, dirs: p } = t;
        f |= 16 & e.patchFlag;
        const g = e.props || l,
          h = t.props || l;
        let v;
        if (
          ((v = h.onVnodeBeforeUpdate) && $n(v, n, t, e),
          p && Mn(t, e, n, "beforeUpdate"),
          f > 0)
        ) {
          if (16 & f) L(s, t, g, h, n, r, a);
          else if (
            (2 & f && g.class !== h.class && o(s, "class", null, h.class, a),
            4 & f && o(s, "style", g.style, h.style, a),
            8 & f)
          ) {
            const u = t.dynamicProps;
            for (let t = 0; t < u.length; t++) {
              const c = u[t],
                l = g[c],
                f = h[c];
              (f !== l || (i && i(s, c))) &&
                o(s, c, l, f, a, e.children, n, r, oe);
            }
          }
          1 & f && e.children !== t.children && m(s, t.children);
        } else c || null != d || L(s, t, g, h, n, r, a);
        const y = a && "foreignObject" !== t.type;
        d
          ? P(e.dynamicChildren, d, s, n, r, y, u)
          : c || W(e, t, s, null, n, r, y, u, !1),
          ((v = h.onVnodeUpdated) || p) &&
            Vn(() => {
              v && $n(v, n, t, e), p && Mn(t, e, n, "updated");
            }, r);
      },
      P = (e, t, n, r, o, i, a) => {
        for (let u = 0; u < t.length; u++) {
          const c = e[u],
            s = t[u],
            l =
              c.el &&
              (c.type === Gn ||
                !ur(c, s) ||
                6 & c.shapeFlag ||
                64 & c.shapeFlag)
                ? p(c.el)
                : n;
          w(c, s, l, null, r, o, i, a, !0);
        }
      },
      L = (e, t, n, r, a, u, c) => {
        if (n !== r) {
          for (const s in r) {
            if (B(s)) continue;
            const l = r[s],
              f = n[s];
            (l !== f || (i && i(e, s))) &&
              o(e, s, f, l, c, t.children, a, u, oe);
          }
          if (n !== l)
            for (const i in n)
              B(i) || i in r || o(e, i, n[i], null, c, t.children, a, u, oe);
        }
      },
      M = (e, t, r, o, i, a, c, s, l) => {
        const f = (t.el = e ? e.el : u("")),
          d = (t.anchor = e ? e.anchor : u(""));
        let { patchFlag: m, dynamicChildren: p, slotScopeIds: g } = t;
        p && (l = !0),
          g && (s = s ? s.concat(g) : g),
          null == e
            ? (n(f, r, o), n(d, r, o), D(t.children, r, d, i, a, c, s, l))
            : m > 0 && 64 & m && p && e.dynamicChildren
            ? (P(e.dynamicChildren, p, r, i, a, c, s),
              (null != t.key || (i && t === i.subTree)) && Wn(e, t, !0))
            : W(e, t, r, d, i, a, c, s, l);
      },
      U = (e, t, n, r, o, i, a, u, c) => {
        (t.slotScopeIds = u),
          null == e
            ? 512 & t.shapeFlag
              ? o.ctx.activate(t, n, r, a, c)
              : j(t, n, r, o, i, a, c)
            : z(e, t, c);
      },
      j = (e, t, n, r, o, i, a) => {
        const u = (e.component = (function (e, t, n) {
          const r = e.type,
            o = (t ? t.appContext : e.appContext) || xr,
            i = {
              uid: _r++,
              vnode: e,
              type: r,
              parent: t,
              appContext: o,
              root: null,
              next: null,
              subTree: null,
              update: null,
              render: null,
              proxy: null,
              exposed: null,
              withProxy: null,
              effects: null,
              provides: t ? t.provides : Object.create(o.provides),
              accessCache: null,
              renderCache: [],
              components: null,
              directives: null,
              propsOptions: kn(r, o),
              emitsOptions: Dt(r, o),
              emit: null,
              emitted: null,
              propsDefaults: l,
              inheritAttrs: r.inheritAttrs,
              ctx: l,
              data: l,
              props: l,
              attrs: l,
              slots: l,
              refs: l,
              setupState: l,
              setupContext: null,
              suspense: n,
              suspenseId: n ? n.pendingId : 0,
              asyncDep: null,
              asyncResolved: !1,
              isMounted: !1,
              isUnmounted: !1,
              isDeactivated: !1,
              bc: null,
              c: null,
              bm: null,
              m: null,
              bu: null,
              u: null,
              um: null,
              bum: null,
              da: null,
              a: null,
              rtg: null,
              rtc: null,
              ec: null,
              sp: null,
            };
          return (
            (i.ctx = { _: i }),
            (i.root = t ? t.root : i),
            (i.emit = Tt.bind(null, i)),
            i
          );
        })(e, r, o));
        if (
          (Yt(e) && (u.ctx.renderer = ce),
          (function (e, t = !1) {
            kr = t;
            const { props: n, children: r } = e.vnode,
              o = Nr(e);
            Sn(e, n, o, t),
              ((e, t) => {
                if (32 & e.vnode.shapeFlag) {
                  const n = t._;
                  n ? ((e.slots = Je(t)), H(t, "_", n)) : Ln(t, (e.slots = {}));
                } else (e.slots = {}), t && In(e, t);
                H(e.slots, cr, 1);
              })(e, r);
            const i = o
              ? (function (e, t) {
                  const n = e.type;
                  (e.accessCache = Object.create(null)),
                    (e.proxy = new Proxy(e.ctx, Cr));
                  const { setup: r } = n;
                  if (r) {
                    const n = (e.setupContext =
                      r.length > 1
                        ? (function (e) {
                            const t = (t) => {
                              e.exposed = rt(t);
                            };
                            return {
                              attrs: e.attrs,
                              slots: e.slots,
                              emit: e.emit,
                              expose: t,
                            };
                          })(e)
                        : null);
                    (Sr = e), ne();
                    const o = at(r, e, 0, [e.props, n]);
                    if ((re(), (Sr = null), A(o))) {
                      if (t)
                        return o
                          .then((t) => {
                            Ar(e, t);
                          })
                          .catch((t) => {
                            ct(t, e, 0);
                          });
                      e.asyncDep = o;
                    } else Ar(e, o);
                  } else Rr(e);
                })(e, t)
              : void 0;
            kr = !1;
          })(u),
          u.asyncDep)
        ) {
          if ((o && o.registerDep(u, q), !e.el)) {
            const e = (u.subTree = fr(Qn));
            _(null, e, t, n);
          }
        } else q(u, e, t, n, o, i, a);
      },
      z = (e, t, n) => {
        const r = (t.component = e.component);
        if (
          (function (e, t, n) {
            const { props: r, children: o, component: i } = e,
              { props: a, children: u, patchFlag: c } = t,
              s = i.emitsOptions;
            if (t.dirs || t.transition) return !0;
            if (!(n && c >= 0))
              return (
                !((!o && !u) || (u && u.$stable)) ||
                (r !== a && (r ? !a || Ut(r, a, s) : !!a))
              );
            if (1024 & c) return !0;
            if (16 & c) return r ? Ut(r, a, s) : !!a;
            if (8 & c) {
              const e = t.dynamicProps;
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (a[n] !== r[n] && !Ot(s, n)) return !0;
              }
            }
            return !1;
          })(e, t, n)
        ) {
          if (r.asyncDep && !r.asyncResolved) return void $(r, t, n);
          (r.next = t),
            (function (e) {
              const t = ft.indexOf(e);
              t > dt && ft.splice(t, 1);
            })(r.update),
            r.update();
        } else (t.component = e.component), (t.el = e.el), (r.vnode = t);
      },
      q = (e, t, n, r, o, i, a) => {
        e.update = G(function () {
          if (e.isMounted) {
            let t,
              { next: n, bu: r, u: u, parent: c, vnode: s } = e,
              l = n;
            n ? ((n.el = s.el), $(e, n, a)) : (n = s),
              r && V(r),
              (t = n.props && n.props.onVnodeBeforeUpdate) && $n(t, c, n, s);
            const f = It(e),
              d = e.subTree;
            (e.subTree = f),
              w(d, f, p(d.el), ae(d), e, o, i),
              (n.el = f.el),
              null === l &&
                (function ({ vnode: e, parent: t }, n) {
                  for (; t && t.subTree === e; )
                    ((e = t.vnode).el = n), (t = t.parent);
                })(e, f.el),
              u && Vn(u, o),
              (t = n.props && n.props.onVnodeUpdated) &&
                Vn(() => $n(t, c, n, s), o);
          } else {
            let a;
            const { el: u, props: c } = t,
              { bm: s, m: l, parent: f } = e;
            if (
              (s && V(s),
              (a = c && c.onVnodeBeforeMount) && $n(a, f, t),
              u && le)
            ) {
              const n = () => {
                (e.subTree = It(e)), le(u, e.subTree, e, o, null);
              };
              Xt(t)
                ? t.type.__asyncLoader().then(() => !e.isUnmounted && n())
                : n();
            } else {
              const a = (e.subTree = It(e));
              w(null, a, n, r, e, o, i), (t.el = a.el);
            }
            if ((l && Vn(l, o), (a = c && c.onVnodeMounted))) {
              const e = t;
              Vn(() => $n(a, f, e), o);
            }
            256 & t.shapeFlag && e.a && Vn(e.a, o),
              (e.isMounted = !0),
              (t = n = r = null);
          }
        }, zn);
      },
      $ = (e, t, n) => {
        t.component = e;
        const r = e.vnode.props;
        (e.vnode = t),
          (e.next = null),
          (function (e, t, n, r) {
            const {
                props: o,
                attrs: i,
                vnode: { patchFlag: a },
              } = e,
              u = Je(o),
              [c] = e.propsOptions;
            let s = !1;
            if (!(r || a > 0) || 16 & a) {
              let r;
              En(e, t, o, i) && (s = !0);
              for (const i in u)
                (t && (C(t, i) || ((r = F(i)) !== i && C(t, r)))) ||
                  (c
                    ? !n ||
                      (void 0 === n[i] && void 0 === n[r]) ||
                      (o[i] = Nn(c, u, i, void 0, e, !0))
                    : delete o[i]);
              if (i !== u)
                for (const e in i) (t && C(t, e)) || (delete i[e], (s = !0));
            } else if (8 & a) {
              const n = e.vnode.dynamicProps;
              for (let r = 0; r < n.length; r++) {
                let a = n[r];
                const l = t[a];
                if (c)
                  if (C(i, a)) l !== i[a] && ((i[a] = l), (s = !0));
                  else {
                    const t = I(a);
                    o[t] = Nn(c, u, t, l, e, !1);
                  }
                else l !== i[a] && ((i[a] = l), (s = !0));
              }
            }
            s && ie(e, "set", "$attrs");
          })(e, t.props, r, n),
          ((e, t, n) => {
            const { vnode: r, slots: o } = e;
            let i = !0,
              a = l;
            if (32 & r.shapeFlag) {
              const e = t._;
              e
                ? n && 1 === e
                  ? (i = !1)
                  : (v(o, t), n || 1 !== e || delete o._)
                : ((i = !t.$stable), Ln(t, o)),
                (a = t);
            } else t && (In(e, t), (a = { default: 1 }));
            if (i) for (const u in o) On(u) || u in a || delete o[u];
          })(e, t.children, n),
          ne(),
          Nt(void 0, e.update),
          re();
      },
      W = (e, t, n, r, o, i, a, u, c = !1) => {
        const s = e && e.children,
          l = e ? e.shapeFlag : 0,
          f = t.children,
          { patchFlag: d, shapeFlag: p } = t;
        if (d > 0) {
          if (128 & d) return void X(s, f, n, r, o, i, a, u, c);
          if (256 & d) return void K(s, f, n, r, o, i, a, u, c);
        }
        8 & p
          ? (16 & l && oe(s, o, i), f !== s && m(n, f))
          : 16 & l
          ? 16 & p
            ? X(s, f, n, r, o, i, a, u, c)
            : oe(s, o, i, !0)
          : (8 & l && m(n, ""), 16 & p && D(f, n, r, o, i, a, u, c));
      },
      K = (e, t, n, r, o, i, a, u, c) => {
        t = t || f;
        const s = (e = e || f).length,
          l = t.length,
          d = Math.min(s, l);
        let m;
        for (m = 0; m < d; m++) {
          const r = (t[m] = c ? hr(t[m]) : gr(t[m]));
          w(e[m], r, n, null, o, i, a, u, c);
        }
        s > l ? oe(e, o, i, !0, !1, d) : D(t, n, r, o, i, a, u, c, d);
      },
      X = (e, t, n, r, o, i, a, u, c) => {
        let s = 0;
        const l = t.length;
        let d = e.length - 1,
          m = l - 1;
        for (; s <= d && s <= m; ) {
          const r = e[s],
            l = (t[s] = c ? hr(t[s]) : gr(t[s]));
          if (!ur(r, l)) break;
          w(r, l, n, null, o, i, a, u, c), s++;
        }
        for (; s <= d && s <= m; ) {
          const r = e[d],
            s = (t[m] = c ? hr(t[m]) : gr(t[m]));
          if (!ur(r, s)) break;
          w(r, s, n, null, o, i, a, u, c), d--, m--;
        }
        if (s > d) {
          if (s <= m) {
            const e = m + 1,
              f = e < l ? t[e].el : r;
            for (; s <= m; )
              w(null, (t[s] = c ? hr(t[s]) : gr(t[s])), n, f, o, i, a, u, c),
                s++;
          }
        } else if (s > m) for (; s <= d; ) Q(e[s], o, i, !0), s++;
        else {
          const p = s,
            g = s,
            h = new Map();
          for (s = g; s <= m; s++) {
            const e = (t[s] = c ? hr(t[s]) : gr(t[s]));
            null != e.key && h.set(e.key, s);
          }
          let v,
            y = 0;
          const b = m - g + 1;
          let C = !1,
            x = 0;
          const _ = new Array(b);
          for (s = 0; s < b; s++) _[s] = 0;
          for (s = p; s <= d; s++) {
            const r = e[s];
            if (y >= b) {
              Q(r, o, i, !0);
              continue;
            }
            let l;
            if (null != r.key) l = h.get(r.key);
            else
              for (v = g; v <= m; v++)
                if (0 === _[v - g] && ur(r, t[v])) {
                  l = v;
                  break;
                }
            void 0 === l
              ? Q(r, o, i, !0)
              : ((_[l - g] = s + 1),
                l >= x ? (x = l) : (C = !0),
                w(r, t[l], n, null, o, i, a, u, c),
                y++);
          }
          const S = C
            ? (function (e) {
                const t = e.slice(),
                  n = [0];
                let r, o, i, a, u;
                const c = e.length;
                for (r = 0; r < c; r++) {
                  const c = e[r];
                  if (0 !== c) {
                    if (((o = n[n.length - 1]), e[o] < c)) {
                      (t[r] = o), n.push(r);
                      continue;
                    }
                    for (i = 0, a = n.length - 1; i < a; )
                      (u = ((i + a) / 2) | 0),
                        e[n[u]] < c ? (i = u + 1) : (a = u);
                    c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
                  }
                }
                (i = n.length), (a = n[i - 1]);
                for (; i-- > 0; ) (n[i] = a), (a = t[a]);
                return n;
              })(_)
            : f;
          for (v = S.length - 1, s = b - 1; s >= 0; s--) {
            const e = g + s,
              f = t[e],
              d = e + 1 < l ? t[e + 1].el : r;
            0 === _[s]
              ? w(null, f, n, d, o, i, a, u, c)
              : C && (v < 0 || s !== S[v] ? Y(f, n, d, 2) : v--);
          }
        }
      },
      Y = (e, t, r, o, i = null) => {
        const { el: a, type: u, transition: c, children: s, shapeFlag: l } = e;
        if (6 & l) return void Y(e.component.subTree, t, r, o);
        if (128 & l) return void e.suspense.move(t, r, o);
        if (64 & l) return void u.move(e, t, r, ce);
        if (u === Gn) {
          n(a, t, r);
          for (let e = 0; e < s.length; e++) Y(s[e], t, r, o);
          return void n(e.anchor, t, r);
        }
        if (u === Zn) return void E(e, t, r);
        if (2 !== o && 1 & l && c)
          if (0 === o) c.beforeEnter(a), n(a, t, r), Vn(() => c.enter(a), i);
          else {
            const { leave: e, delayLeave: o, afterLeave: i } = c,
              u = () => n(a, t, r),
              s = () => {
                e(a, () => {
                  u(), i && i();
                });
              };
            o ? o(a, u, s) : s();
          }
        else n(a, t, r);
      },
      Q = (e, t, n, r = !1, o = !1) => {
        const {
          type: i,
          props: a,
          ref: u,
          children: c,
          dynamicChildren: s,
          shapeFlag: l,
          patchFlag: f,
          dirs: d,
        } = e;
        if ((null != u && Hn(u, null, n, e, !0), 256 & l))
          return void t.ctx.deactivate(e);
        const m = 1 & l && d;
        let p;
        if (((p = a && a.onVnodeBeforeUnmount) && $n(p, t, e), 6 & l))
          te(e.component, n, r);
        else {
          if (128 & l) return void e.suspense.unmount(n, r);
          m && Mn(e, null, t, "beforeUnmount"),
            64 & l
              ? e.type.remove(e, t, n, o, ce, r)
              : s && (i !== Gn || (f > 0 && 64 & f))
              ? oe(s, t, n, !1, !0)
              : ((i === Gn && (128 & f || 256 & f)) || (!o && 16 & l)) &&
                oe(c, t, n),
            r && Z(e);
        }
        ((p = a && a.onVnodeUnmounted) || m) &&
          Vn(() => {
            p && $n(p, t, e), m && Mn(e, null, t, "unmounted");
          }, n);
      },
      Z = (e) => {
        const { type: t, el: n, anchor: o, transition: i } = e;
        if (t === Gn) return void ee(n, o);
        if (t === Zn) return void N(e);
        const a = () => {
          r(n), i && !i.persisted && i.afterLeave && i.afterLeave();
        };
        if (1 & e.shapeFlag && i && !i.persisted) {
          const { leave: t, delayLeave: r } = i,
            o = () => t(n, a);
          r ? r(e.el, a, o) : o();
        } else a();
      },
      ee = (e, t) => {
        let n;
        for (; e !== t; ) (n = g(e)), r(e), (e = n);
        r(t);
      },
      te = (e, t, n) => {
        const { bum: r, effects: o, update: i, subTree: a, um: u } = e;
        if ((r && V(r), o)) for (let c = 0; c < o.length; c++) J(o[c]);
        i && (J(i), Q(a, e, t, n)),
          u && Vn(u, t),
          Vn(() => {
            e.isUnmounted = !0;
          }, t),
          t &&
            t.pendingBranch &&
            !t.isUnmounted &&
            e.asyncDep &&
            !e.asyncResolved &&
            e.suspenseId === t.pendingId &&
            (t.deps--, 0 === t.deps && t.resolve());
      },
      oe = (e, t, n, r = !1, o = !1, i = 0) => {
        for (let a = i; a < e.length; a++) Q(e[a], t, n, r, o);
      },
      ae = (e) =>
        6 & e.shapeFlag
          ? ae(e.component.subTree)
          : 128 & e.shapeFlag
          ? e.suspense.next()
          : g(e.anchor || e.el),
      ue = (e, t, n) => {
        null == e
          ? t._vnode && Q(t._vnode, null, null, !0)
          : w(t._vnode || null, e, t, null, null, null, n),
          kt(),
          (t._vnode = e);
      },
      ce = {
        p: w,
        um: Q,
        m: Y,
        r: Z,
        mt: j,
        mc: D,
        pc: W,
        pbc: P,
        n: ae,
        o: e,
      };
    let se, le;
    t && ([se, le] = t(ce));
    return { render: ue, hydrate: se, createApp: jn(ue, se) };
  })(e);
}
function $n(e, t, n, r = null) {
  ut(e, t, 7, [n, r]);
}
function Wn(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (w(r) && w(o))
    for (let i = 0; i < r.length; i++) {
      const e = r[i];
      let t = o[i];
      1 & t.shapeFlag &&
        !t.dynamicChildren &&
        ((t.patchFlag <= 0 || 32 === t.patchFlag) &&
          ((t = o[i] = hr(o[i])), (t.el = e.el)),
        n || Wn(e, t));
    }
}
function Kn(e, t) {
  return (
    (function (e, t, n = !0, r = !1) {
      const o = Bt || Sr;
      if (o) {
        const n = o.type;
        if ("components" === e) {
          const e = Dr(n);
          if (e && (e === t || e === I(t) || e === U(I(t)))) return n;
        }
        const i = Yn(o[e] || n[e], t) || Yn(o.appContext[e], t);
        return !i && r ? n : i;
      }
    })("components", e, !0, t) || e
  );
}
const Xn = Symbol();
function Yn(e, t) {
  return e && (e[t] || e[I(t)] || e[U(I(t))]);
}
const Gn = Symbol(void 0),
  Jn = Symbol(void 0),
  Qn = Symbol(void 0),
  Zn = Symbol(void 0),
  er = [];
let tr = null;
function nr(e = !1) {
  er.push((tr = e ? null : []));
}
let rr = 1;
function or(e) {
  rr += e;
}
function ir(e, t, n, r, o) {
  const i = fr(e, t, n, r, o, !0);
  return (
    (i.dynamicChildren = rr > 0 ? tr || f : null),
    er.pop(),
    (tr = er[er.length - 1] || null),
    rr > 0 && tr && tr.push(i),
    i
  );
}
function ar(e) {
  return !!e && !0 === e.__v_isVNode;
}
function ur(e, t) {
  return e.type === t.type && e.key === t.key;
}
const cr = "__vInternal",
  sr = ({ key: e }) => (null != e ? e : null),
  lr = ({ ref: e }) =>
    null != e ? (E(e) || Ze(e) || S(e) ? { i: Bt, r: e } : e) : null,
  fr = function (e, t = null, n = null, o = 0, i = null, a = !1) {
    (e && e !== Xn) || (e = Qn);
    if (ar(e)) {
      const r = dr(e, t, !0);
      return n && vr(r, n), r;
    }
    (c = e), S(c) && "__vccOpts" in c && (e = e.__vccOpts);
    var c;
    if (t) {
      (Ge(t) || cr in t) && (t = v({}, t));
      let { class: e, style: n } = t;
      e && !E(e) && (t.class = u(e)),
        k(n) && (Ge(n) && !w(n) && (n = v({}, n)), (t.style = r(n)));
    }
    const s = E(e)
        ? 1
        : ((e) => e.__isSuspense)(e)
        ? 128
        : ((e) => e.__isTeleport)(e)
        ? 64
        : k(e)
        ? 4
        : S(e)
        ? 2
        : 0,
      l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && sr(t),
        ref: t && lr(t),
        scopeId: Pt,
        slotScopeIds: null,
        children: null,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: o,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
      };
    vr(l, n), 128 & s && e.normalize(l);
    rr > 0 && !a && tr && (o > 0 || 6 & s) && 32 !== o && tr.push(l);
    return l;
  };
function dr(e, t, n = !1) {
  const { props: o, ref: i, patchFlag: a, children: c } = e,
    s = t
      ? (function (...e) {
          const t = v({}, e[0]);
          for (let n = 1; n < e.length; n++) {
            const o = e[n];
            for (const e in o)
              if ("class" === e)
                t.class !== o.class && (t.class = u([t.class, o.class]));
              else if ("style" === e) t.style = r([t.style, o.style]);
              else if (g(e)) {
                const n = t[e],
                  r = o[e];
                n !== r && (t[e] = n ? [].concat(n, r) : r);
              } else "" !== e && (t[e] = o[e]);
          }
          return t;
        })(o || {}, t)
      : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: s,
    key: s && sr(s),
    ref:
      t && t.ref ? (n && i ? (w(i) ? i.concat(lr(t)) : [i, lr(t)]) : lr(t)) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Gn ? (-1 === a ? 16 : 16 | a) : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && dr(e.ssContent),
    ssFallback: e.ssFallback && dr(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function mr(e = " ", t = 0) {
  return fr(Jn, null, e, t);
}
function pr(e = "", t = !1) {
  return t ? (nr(), ir(Qn, null, e)) : fr(Qn, null, e);
}
function gr(e) {
  return null == e || "boolean" == typeof e
    ? fr(Qn)
    : w(e)
    ? fr(Gn, null, e.slice())
    : "object" == typeof e
    ? hr(e)
    : fr(Jn, null, String(e));
}
function hr(e) {
  return null === e.el ? e : dr(e);
}
function vr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (null == t) t = null;
  else if (w(t)) n = 16;
  else if ("object" == typeof t) {
    if (1 & r || 64 & r) {
      const n = t.default;
      return void (n && (n._c && (n._d = !1), vr(e, n()), n._c && (n._d = !0)));
    }
    {
      n = 32;
      const r = t._;
      r || cr in t
        ? 3 === r &&
          Bt &&
          (1 === Bt.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
        : (t._ctx = Bt);
    }
  } else
    S(t)
      ? ((t = { default: t, _ctx: Bt }), (n = 32))
      : ((t = String(t)), 64 & r ? ((n = 16), (t = [mr(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
const yr = (e) =>
    e ? (Nr(e) ? (e.exposed ? e.exposed : e.proxy) : yr(e.parent)) : null,
  br = v(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => yr(e.parent),
    $root: (e) => yr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => vn(e),
    $forceUpdate: (e) => () => _t(e.update),
    $nextTick: (e) => xt.bind(e.proxy),
    $watch: (e) => qt.bind(e),
  }),
  Cr = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: i,
        accessCache: a,
        type: u,
        appContext: c,
      } = e;
      if ("__v_skip" === t) return !0;
      let s;
      if ("$" !== t[0]) {
        const u = a[t];
        if (void 0 !== u)
          switch (u) {
            case 0:
              return r[t];
            case 1:
              return o[t];
            case 3:
              return n[t];
            case 2:
              return i[t];
          }
        else {
          if (r !== l && C(r, t)) return (a[t] = 0), r[t];
          if (o !== l && C(o, t)) return (a[t] = 1), o[t];
          if ((s = e.propsOptions[0]) && C(s, t)) return (a[t] = 2), i[t];
          if (n !== l && C(n, t)) return (a[t] = 3), n[t];
          mn && (a[t] = 4);
        }
      }
      const f = br[t];
      let d, m;
      return f
        ? ("$attrs" === t && oe(e, 0, t), f(e))
        : (d = u.__cssModules) && (d = d[t])
        ? d
        : n !== l && C(n, t)
        ? ((a[t] = 3), n[t])
        : ((m = c.config.globalProperties), C(m, t) ? m[t] : void 0);
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: i } = e;
      if (o !== l && C(o, t)) o[t] = n;
      else if (r !== l && C(r, t)) r[t] = n;
      else if (C(e.props, t)) return !1;
      return ("$" !== t[0] || !(t.slice(1) in e)) && ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: i,
        },
      },
      a
    ) {
      let u;
      return (
        void 0 !== n[a] ||
        (e !== l && C(e, a)) ||
        (t !== l && C(t, a)) ||
        ((u = i[0]) && C(u, a)) ||
        C(r, a) ||
        C(br, a) ||
        C(o.config.globalProperties, a)
      );
    },
  },
  wr = v({}, Cr, {
    get(e, t) {
      if (t !== Symbol.unscopables) return Cr.get(e, t, e);
    },
    has: (e, n) => "_" !== n[0] && !t(n),
  }),
  xr = Fn();
let _r = 0;
let Sr = null;
const Er = (e) => {
  Sr = e;
};
function Nr(e) {
  return 4 & e.vnode.shapeFlag;
}
let kr = !1;
function Ar(e, t, n) {
  S(t) ? (e.render = t) : k(t) && (e.setupState = rt(t)), Rr(e);
}
function Rr(e, t, n) {
  const r = e.type;
  e.render ||
    ((e.render = r.render || d),
    e.render._rc && (e.withProxy = new Proxy(e.ctx, wr))),
    (Sr = e),
    ne(),
    pn(e),
    re(),
    (Sr = null);
}
function Tr(e, t = Sr) {
  t && (t.effects || (t.effects = [])).push(e);
}
function Dr(e) {
  return (S(e) && e.displayName) || e.name;
}
function Or(e) {
  const t = (function (e) {
    let t, n;
    return (
      S(e) ? ((t = e), (n = d)) : ((t = e.get), (n = e.set)),
      new it(t, n, S(e) || !e.set)
    );
  })(e);
  return Tr(t.effect), t;
}
const Br = "3.1.1",
  Pr = "http://www.w3.org/2000/svg",
  Lr = "undefined" != typeof document ? document : null;
let Ir, Mr;
const Fr = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t
      ? Lr.createElementNS(Pr, e)
      : Lr.createElement(e, n ? { is: n } : void 0);
    return (
      "select" === e &&
        r &&
        null != r.multiple &&
        o.setAttribute("multiple", r.multiple),
      o
    );
  },
  createText: (e) => Lr.createTextNode(e),
  createComment: (e) => Lr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Lr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  cloneNode(e) {
    const t = e.cloneNode(!0);
    return "_value" in e && (t._value = e._value), t;
  },
  insertStaticContent(e, t, n, r) {
    const o = r
      ? Mr || (Mr = Lr.createElementNS(Pr, "svg"))
      : Ir || (Ir = Lr.createElement("div"));
    o.innerHTML = e;
    const i = o.firstChild;
    let a = i,
      u = a;
    for (; a; ) (u = a), Fr.insert(a, t, n), (a = o.firstChild);
    return [i, u];
  },
};
const Ur = /\s*!important$/;
function jr(e, t, n) {
  if (w(n)) n.forEach((n) => jr(e, t, n));
  else if (t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = (function (e, t) {
      const n = Vr[t];
      if (n) return n;
      let r = I(t);
      if ("filter" !== r && r in e) return (Vr[t] = r);
      r = U(r);
      for (let o = 0; o < zr.length; o++) {
        const n = zr[o] + r;
        if (n in e) return (Vr[t] = n);
      }
      return t;
    })(e, t);
    Ur.test(n)
      ? e.setProperty(F(r), n.replace(Ur, ""), "important")
      : (e[r] = n);
  }
}
const zr = ["Webkit", "Moz", "ms"],
  Vr = {};
const Hr = "http://www.w3.org/1999/xlink";
let qr = Date.now,
  $r = !1;
if ("undefined" != typeof window) {
  qr() > document.createEvent("Event").timeStamp &&
    (qr = () => performance.now());
  const e = navigator.userAgent.match(/firefox\/(\d+)/i);
  $r = !!(e && Number(e[1]) <= 53);
}
let Wr = 0;
const Kr = Promise.resolve(),
  Xr = () => {
    Wr = 0;
  };
function Yr(e, t, n, r, o = null) {
  const i = e._vei || (e._vei = {}),
    a = i[t];
  if (r && a) a.value = r;
  else {
    const [n, u] = (function (e) {
      let t;
      if (Gr.test(e)) {
        let n;
        for (t = {}; (n = e.match(Gr)); )
          (e = e.slice(0, e.length - n[0].length)),
            (t[n[0].toLowerCase()] = !0);
      }
      return [F(e.slice(2)), t];
    })(t);
    if (r) {
      !(function (e, t, n, r) {
        e.addEventListener(t, n, r);
      })(
        e,
        n,
        (i[t] = (function (e, t) {
          const n = (e) => {
            const r = e.timeStamp || qr();
            ($r || r >= n.attached - 1) &&
              ut(
                (function (e, t) {
                  if (w(t)) {
                    const n = e.stopImmediatePropagation;
                    return (
                      (e.stopImmediatePropagation = () => {
                        n.call(e), (e._stopped = !0);
                      }),
                      t.map((e) => (t) => !t._stopped && e(t))
                    );
                  }
                  return t;
                })(e, n.value),
                t,
                5,
                [e]
              );
          };
          return (
            (n.value = e),
            (n.attached = (() => Wr || (Kr.then(Xr), (Wr = qr())))()),
            n
          );
        })(r, o)),
        u
      );
    } else
      a &&
        (!(function (e, t, n, r) {
          e.removeEventListener(t, n, r);
        })(e, n, a, u),
        (i[t] = void 0));
  }
}
const Gr = /(?:Once|Passive|Capture)$/;
const Jr = /^on[a-z]/;
const Qr = v(
  {
    patchProp: (e, t, r, o, i = !1, a, u, c, s) => {
      switch (t) {
        case "class":
          !(function (e, t, n) {
            if ((null == t && (t = ""), n)) e.setAttribute("class", t);
            else {
              const n = e._vtc;
              n && (t = (t ? [t, ...n] : [...n]).join(" ")), (e.className = t);
            }
          })(e, o, i);
          break;
        case "style":
          !(function (e, t, n) {
            const r = e.style;
            if (n)
              if (E(n)) {
                if (t !== n) {
                  const t = r.display;
                  (r.cssText = n), "_vod" in e && (r.display = t);
                }
              } else {
                for (const e in n) jr(r, e, n[e]);
                if (t && !E(t)) for (const e in t) null == n[e] && jr(r, e, "");
              }
            else e.removeAttribute("style");
          })(e, r, o);
          break;
        default:
          g(t)
            ? h(t) || Yr(e, t, 0, o, u)
            : (function (e, t, n, r) {
                if (r)
                  return "innerHTML" === t || !!(t in e && Jr.test(t) && S(n));
                if ("spellcheck" === t || "draggable" === t) return !1;
                if ("form" === t) return !1;
                if ("list" === t && "INPUT" === e.tagName) return !1;
                if ("type" === t && "TEXTAREA" === e.tagName) return !1;
                if (Jr.test(t) && E(n)) return !1;
                return t in e;
              })(e, t, o, i)
            ? (function (e, t, n, r, o, i, a) {
                if ("innerHTML" === t || "textContent" === t)
                  return r && a(r, o, i), void (e[t] = null == n ? "" : n);
                if ("value" === t && "PROGRESS" !== e.tagName) {
                  e._value = n;
                  const r = null == n ? "" : n;
                  return (
                    e.value !== r && (e.value = r),
                    void (null == n && e.removeAttribute(t))
                  );
                }
                if ("" === n || null == n) {
                  const r = typeof e[t];
                  if ("" === n && "boolean" === r) return void (e[t] = !0);
                  if (null == n && "string" === r)
                    return (e[t] = ""), void e.removeAttribute(t);
                  if ("number" === r)
                    return (e[t] = 0), void e.removeAttribute(t);
                }
                try {
                  e[t] = n;
                } catch (u) {}
              })(e, t, o, a, u, c, s)
            : ("true-value" === t
                ? (e._trueValue = o)
                : "false-value" === t && (e._falseValue = o),
              (function (e, t, r, o, i) {
                if (o && t.startsWith("xlink:"))
                  null == r
                    ? e.removeAttributeNS(Hr, t.slice(6, t.length))
                    : e.setAttributeNS(Hr, t, r);
                else {
                  const o = n(t);
                  null == r || (o && !1 === r)
                    ? e.removeAttribute(t)
                    : e.setAttribute(t, o ? "" : r);
                }
              })(e, t, o, i));
      }
    },
    forcePatchProp: (e, t) => "value" === t,
  },
  Fr
);
let Zr;
const eo = (...e) => {
  const t = (Zr || (Zr = qn(Qr))).createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (e) => {
      const r = (function (e) {
        if (E(e)) {
          return document.querySelector(e);
        }
        return e;
      })(e);
      if (!r) return;
      const o = t._component;
      S(o) || o.render || o.template || (o.template = r.innerHTML),
        (r.innerHTML = "");
      const i = n(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
var to,
  no =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  ro = { exports: {} };
(to = ro),
  (function () {
    var e = function (e) {
        if (null === e) return "null";
        if (void 0 === e) return "undefined";
        var t = typeof e;
        return "object" === t &&
          (Array.prototype.isPrototypeOf(e) ||
            (e.constructor && "Array" === e.constructor.name))
          ? "array"
          : "object" === t &&
            (String.prototype.isPrototypeOf(e) ||
              (e.constructor && "String" === e.constructor.name))
          ? "string"
          : t;
      },
      t = function (e) {
        return { eq: e };
      },
      n = t(function (e, t) {
        return e === t;
      }),
      r = function (e) {
        return t(function (t, n) {
          if (t.length !== n.length) return !1;
          for (var r = t.length, o = 0; o < r; o++)
            if (!e.eq(t[o], n[o])) return !1;
          return !0;
        });
      },
      o = function (e, n) {
        return (function (e, n) {
          return t(function (t, r) {
            return e.eq(n(t), n(r));
          });
        })(r(e), function (e) {
          return (function (e, t) {
            return Array.prototype.slice.call(e).sort(t);
          })(e, n);
        });
      },
      i = function (e) {
        return t(function (t, r) {
          var i = Object.keys(t),
            a = Object.keys(r);
          if (!o(n).eq(i, a)) return !1;
          for (var u = i.length, c = 0; c < u; c++) {
            var s = i[c];
            if (!e.eq(t[s], r[s])) return !1;
          }
          return !0;
        });
      },
      a = t(function (t, n) {
        if (t === n) return !0;
        var o = e(t);
        return (
          o === e(n) &&
          ((function (e) {
            return (
              -1 !==
              [
                "undefined",
                "boolean",
                "number",
                "string",
                "function",
                "xml",
                "null",
              ].indexOf(e)
            );
          })(o)
            ? t === n
            : "array" === o
            ? r(a).eq(t, n)
            : "object" === o && i(a).eq(t, n))
        );
      }),
      u = function (e) {
        return function (t) {
          return (
            (r = typeof (n = t)),
            (null === n
              ? "null"
              : "object" === r &&
                (Array.prototype.isPrototypeOf(n) ||
                  (n.constructor && "Array" === n.constructor.name))
              ? "array"
              : "object" === r &&
                (String.prototype.isPrototypeOf(n) ||
                  (n.constructor && "String" === n.constructor.name))
              ? "string"
              : r) === e
          );
          var n, r;
        };
      },
      c = function (e) {
        return function (t) {
          return typeof t === e;
        };
      },
      s = function (e) {
        return function (t) {
          return e === t;
        };
      },
      l = u("string"),
      f = u("object"),
      d = u("array"),
      m = s(null),
      p = c("boolean"),
      g = s(void 0),
      h = function (e) {
        return null == e;
      },
      v = function (e) {
        return !h(e);
      },
      y = c("function"),
      b = c("number"),
      C = function () {},
      w = function (e, t) {
        return function () {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          return e(t.apply(null, n));
        };
      },
      x = function (e) {
        return function () {
          return e;
        };
      },
      _ = function (e) {
        return e;
      };
    function S(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      return function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        var o = t.concat(n);
        return e.apply(null, o);
      };
    }
    var E,
      N,
      k,
      A = function (e) {
        return function (t) {
          return !e(t);
        };
      },
      R = function (e) {
        return function () {
          throw new Error(e);
        };
      },
      T = function (e) {
        return e();
      },
      D = function (e) {
        e();
      },
      O = x(!1),
      B = x(!0),
      P = function () {
        return L;
      },
      L =
        ((E = function (e) {
          return e.isNone();
        }),
        {
          fold: function (e, t) {
            return e();
          },
          is: O,
          isSome: O,
          isNone: B,
          getOr: (k = function (e) {
            return e;
          }),
          getOrThunk: (N = function (e) {
            return e();
          }),
          getOrDie: function (e) {
            throw new Error(e || "error: getOrDie called on none.");
          },
          getOrNull: x(null),
          getOrUndefined: x(void 0),
          or: k,
          orThunk: N,
          map: P,
          each: C,
          bind: P,
          exists: O,
          forall: B,
          filter: P,
          equals: E,
          equals_: E,
          toArray: function () {
            return [];
          },
          toString: x("none()"),
        }),
      I = function (e) {
        var t = x(e),
          n = function () {
            return o;
          },
          r = function (t) {
            return t(e);
          },
          o = {
            fold: function (t, n) {
              return n(e);
            },
            is: function (t) {
              return e === t;
            },
            isSome: B,
            isNone: O,
            getOr: t,
            getOrThunk: t,
            getOrDie: t,
            getOrNull: t,
            getOrUndefined: t,
            or: n,
            orThunk: n,
            map: function (t) {
              return I(t(e));
            },
            each: function (t) {
              t(e);
            },
            bind: r,
            exists: r,
            forall: r,
            filter: function (t) {
              return t(e) ? o : L;
            },
            toArray: function () {
              return [e];
            },
            toString: function () {
              return "some(" + e + ")";
            },
            equals: function (t) {
              return t.is(e);
            },
            equals_: function (t, n) {
              return t.fold(O, function (t) {
                return n(e, t);
              });
            },
          };
        return o;
      },
      M = {
        some: I,
        none: P,
        from: function (e) {
          return null == e ? L : I(e);
        },
      },
      F = Array.prototype.slice,
      U = Array.prototype.indexOf,
      j = Array.prototype.push,
      z = function (e, t) {
        return U.call(e, t);
      },
      V = function (e, t) {
        return z(e, t) > -1;
      },
      H = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (t(e[n], n)) return !0;
        return !1;
      },
      q = function (e, t) {
        for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
          var i = e[o];
          r[o] = t(i, o);
        }
        return r;
      },
      $ = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) t(e[n], n);
      },
      W = function (e, t) {
        for (var n = e.length - 1; n >= 0; n--) t(e[n], n);
      },
      K = function (e, t) {
        for (var n = [], r = 0, o = e.length; r < o; r++) {
          var i = e[r];
          t(i, r) && n.push(i);
        }
        return n;
      },
      X = function (e, t, n) {
        return (
          W(e, function (e) {
            n = t(n, e);
          }),
          n
        );
      },
      Y = function (e, t, n) {
        return (
          $(e, function (e) {
            n = t(n, e);
          }),
          n
        );
      },
      G = function (e, t) {
        return (function (e, t, n) {
          for (var r = 0, o = e.length; r < o; r++) {
            var i = e[r];
            if (t(i, r)) return M.some(i);
            if (n(i, r)) break;
          }
          return M.none();
        })(e, t, O);
      },
      J = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (t(e[n], n)) return M.some(n);
        return M.none();
      },
      Q = function (e, t) {
        return (function (e) {
          for (var t = [], n = 0, r = e.length; n < r; ++n) {
            if (!d(e[n]))
              throw new Error(
                "Arr.flatten item " + n + " was not an array, input: " + e
              );
            j.apply(t, e[n]);
          }
          return t;
        })(q(e, t));
      },
      Z = function (e, t) {
        for (var n = 0, r = e.length; n < r; ++n)
          if (!0 !== t(e[n], n)) return !1;
        return !0;
      },
      ee = function (e) {
        var t = F.call(e, 0);
        return t.reverse(), t;
      },
      te = function (e, t) {
        return K(e, function (e) {
          return !V(t, e);
        });
      },
      ne = function (e, t) {
        return t >= 0 && t < e.length ? M.some(e[t]) : M.none();
      },
      re = function (e) {
        return ne(e, 0);
      },
      oe = function (e) {
        return ne(e, e.length - 1);
      },
      ie = y(Array.from)
        ? Array.from
        : function (e) {
            return F.call(e);
          },
      ae = Object.keys,
      ue = Object.hasOwnProperty,
      ce = function (e, t) {
        for (var n = ae(e), r = 0, o = n.length; r < o; r++) {
          var i = n[r];
          t(e[i], i);
        }
      },
      se = function (e, t) {
        return le(e, function (e, n) {
          return { k: n, v: t(e, n) };
        });
      },
      le = function (e, t) {
        var n = {};
        return (
          ce(e, function (e, r) {
            var o = t(e, r);
            n[o.k] = o.v;
          }),
          n
        );
      },
      fe = function (e) {
        return function (t, n) {
          e[n] = t;
        };
      },
      de = function (e, t, n, r) {
        return (
          ce(e, function (e, o) {
            (t(e, o) ? n : r)(e, o);
          }),
          {}
        );
      },
      me = function (e, t) {
        var n = {},
          r = {};
        return de(e, t, fe(n), fe(r)), { t: n, f: r };
      },
      pe = function (e, t) {
        var n = {};
        return de(e, t, fe(n), C), n;
      },
      ge = function (e) {
        return (function (e, t) {
          var n = [];
          return (
            ce(e, function (e, r) {
              n.push(t(e, r));
            }),
            n
          );
        })(e, function (e) {
          return e;
        });
      },
      he = function (e, t) {
        return ve(e, t) ? M.from(e[t]) : M.none();
      },
      ve = function (e, t) {
        return ue.call(e, t);
      },
      ye = function (e, t) {
        return ve(e, t) && void 0 !== e[t] && null !== e[t];
      },
      be = Array.isArray,
      Ce = function (e, t, n) {
        var r, o;
        if (!e) return !1;
        if (((n = n || e), void 0 !== e.length)) {
          for (r = 0, o = e.length; r < o; r++)
            if (!1 === t.call(n, e[r], r, e)) return !1;
        } else
          for (r in e)
            if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return !1;
        return !0;
      },
      we = function (e, t) {
        var n = [];
        return (
          Ce(e, function (r, o) {
            n.push(t(r, o, e));
          }),
          n
        );
      },
      xe = function (e, t) {
        var n = [];
        return (
          Ce(e, function (r, o) {
            (t && !t(r, o, e)) || n.push(r);
          }),
          n
        );
      },
      _e = function (e, t) {
        if (e)
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      Se = function (e, t, n, r) {
        for (var o = g(n) ? e[0] : n, i = 0; i < e.length; i++)
          o = t.call(r, o, e[i], i);
        return o;
      },
      Ee = function (e, t, n) {
        var r, o;
        for (r = 0, o = e.length; r < o; r++)
          if (t.call(n, e[r], r, e)) return r;
        return -1;
      },
      Ne = function (e) {
        return e[e.length - 1];
      },
      ke = function () {
        return (ke =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
    function Ae() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
      var r = Array(e),
        o = 0;
      for (t = 0; t < n; t++)
        for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++)
          r[o] = i[a];
      return r;
    }
    var Re,
      Te,
      De,
      Oe = function () {
        return Be(0, 0);
      },
      Be = function (e, t) {
        return { major: e, minor: t };
      },
      Pe = {
        nu: Be,
        detect: function (e, t) {
          var n = String(t).toLowerCase();
          return 0 === e.length
            ? Oe()
            : (function (e, t) {
                var n = (function (e, t) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (r.test(t)) return r;
                  }
                })(e, t);
                if (!n) return { major: 0, minor: 0 };
                var r = function (e) {
                  return Number(t.replace(n, "$" + e));
                };
                return Be(r(1), r(2));
              })(e, n);
        },
        unknown: Oe,
      },
      Le = function (e, t) {
        var n = String(t).toLowerCase();
        return G(e, function (e) {
          return e.search(n);
        });
      },
      Ie = function (e, t) {
        return Le(e, t).map(function (e) {
          var n = Pe.detect(e.versionRegexes, t);
          return { current: e.name, version: n };
        });
      },
      Me = function (e, t) {
        return Le(e, t).map(function (e) {
          var n = Pe.detect(e.versionRegexes, t);
          return { current: e.name, version: n };
        });
      },
      Fe = function (e, t) {
        return -1 !== e.indexOf(t);
      },
      Ue = function (e, t) {
        return (function (e, t, n) {
          return (
            "" === t ||
            (e.length >= t.length && e.substr(n, n + t.length) === t)
          );
        })(e, t, 0);
      },
      je = function (e) {
        return function (t) {
          return t.replace(e, "");
        };
      },
      ze = je(/^\s+|\s+$/g),
      Ve = je(/^\s+/g),
      He = je(/\s+$/g),
      qe = function (e) {
        return e.length > 0;
      },
      $e = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
      We = function (e) {
        return function (t) {
          return Fe(t, e);
        };
      },
      Ke = [
        {
          name: "Edge",
          versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
          search: function (e) {
            return (
              Fe(e, "edge/") &&
              Fe(e, "chrome") &&
              Fe(e, "safari") &&
              Fe(e, "applewebkit")
            );
          },
        },
        {
          name: "Chrome",
          versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, $e],
          search: function (e) {
            return Fe(e, "chrome") && !Fe(e, "chromeframe");
          },
        },
        {
          name: "IE",
          versionRegexes: [
            /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
            /.*?rv:([0-9]+)\.([0-9]+).*/,
          ],
          search: function (e) {
            return Fe(e, "msie") || Fe(e, "trident");
          },
        },
        {
          name: "Opera",
          versionRegexes: [$e, /.*?opera\/([0-9]+)\.([0-9]+).*/],
          search: We("opera"),
        },
        {
          name: "Firefox",
          versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
          search: We("firefox"),
        },
        {
          name: "Safari",
          versionRegexes: [$e, /.*?cpu os ([0-9]+)_([0-9]+).*/],
          search: function (e) {
            return (
              (Fe(e, "safari") || Fe(e, "mobile/")) && Fe(e, "applewebkit")
            );
          },
        },
      ],
      Xe = [
        {
          name: "Windows",
          search: We("win"),
          versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/],
        },
        {
          name: "iOS",
          search: function (e) {
            return Fe(e, "iphone") || Fe(e, "ipad");
          },
          versionRegexes: [
            /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
            /.*cpu os ([0-9]+)_([0-9]+).*/,
            /.*cpu iphone os ([0-9]+)_([0-9]+).*/,
          ],
        },
        {
          name: "Android",
          search: We("android"),
          versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/],
        },
        {
          name: "OSX",
          search: We("mac os x"),
          versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/],
        },
        { name: "Linux", search: We("linux"), versionRegexes: [] },
        { name: "Solaris", search: We("sunos"), versionRegexes: [] },
        { name: "FreeBSD", search: We("freebsd"), versionRegexes: [] },
        {
          name: "ChromeOS",
          search: We("cros"),
          versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/],
        },
      ],
      Ye = { browsers: x(Ke), oses: x(Xe) },
      Ge = "Edge",
      Je = "Chrome",
      Qe = "Opera",
      Ze = "Firefox",
      et = "Safari",
      tt = function (e) {
        var t = e.current,
          n = e.version,
          r = function (e) {
            return function () {
              return t === e;
            };
          };
        return {
          current: t,
          version: n,
          isEdge: r(Ge),
          isChrome: r(Je),
          isIE: r("IE"),
          isOpera: r(Qe),
          isFirefox: r(Ze),
          isSafari: r(et),
        };
      },
      nt = {
        unknown: function () {
          return tt({ current: void 0, version: Pe.unknown() });
        },
        nu: tt,
        edge: x(Ge),
        chrome: x(Je),
        ie: x("IE"),
        opera: x(Qe),
        firefox: x(Ze),
        safari: x(et),
      },
      rt = "Windows",
      ot = "Android",
      it = "Linux",
      at = "Solaris",
      ut = "FreeBSD",
      ct = "ChromeOS",
      st = function (e) {
        var t = e.current,
          n = e.version,
          r = function (e) {
            return function () {
              return t === e;
            };
          };
        return {
          current: t,
          version: n,
          isWindows: r(rt),
          isiOS: r("iOS"),
          isAndroid: r(ot),
          isOSX: r("OSX"),
          isLinux: r(it),
          isSolaris: r(at),
          isFreeBSD: r(ut),
          isChromeOS: r(ct),
        };
      },
      lt = {
        unknown: function () {
          return st({ current: void 0, version: Pe.unknown() });
        },
        nu: st,
        windows: x(rt),
        ios: x("iOS"),
        android: x(ot),
        linux: x(it),
        osx: x("OSX"),
        solaris: x(at),
        freebsd: x(ut),
        chromeos: x(ct),
      },
      ft = function (e, t) {
        var n = Ye.browsers(),
          r = Ye.oses(),
          o = Ie(n, e).fold(nt.unknown, nt.nu),
          i = Me(r, e).fold(lt.unknown, lt.nu),
          a = (function (e, t, n, r) {
            var o = e.isiOS() && !0 === /ipad/i.test(n),
              i = e.isiOS() && !o,
              a = e.isiOS() || e.isAndroid(),
              u = a || r("(pointer:coarse)"),
              c = o || (!i && a && r("(min-device-width:768px)")),
              s = i || (a && !c),
              l = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n),
              f = !s && !c && !l;
            return {
              isiPad: x(o),
              isiPhone: x(i),
              isTablet: x(c),
              isPhone: x(s),
              isTouch: x(u),
              isAndroid: e.isAndroid,
              isiOS: e.isiOS,
              isWebView: x(l),
              isDesktop: x(f),
            };
          })(i, o, e, t);
        return { browser: o, os: i, deviceType: a };
      },
      dt = function (e) {
        return window.matchMedia(e).matches;
      },
      mt =
        ((Re = function () {
          return ft(navigator.userAgent, dt);
        }),
        (De = !1),
        function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return De || ((De = !0), (Te = Re.apply(null, e))), Te;
        }),
      pt = function () {
        return mt();
      },
      gt = navigator.userAgent,
      ht = pt(),
      vt = ht.browser,
      yt = ht.os,
      bt = ht.deviceType,
      Ct = /WebKit/.test(gt) && !vt.isEdge(),
      wt =
        "FormData" in window &&
        "FileReader" in window &&
        "URL" in window &&
        !!URL.createObjectURL,
      xt = -1 !== gt.indexOf("Windows Phone"),
      _t = {
        opera: vt.isOpera(),
        webkit: Ct,
        ie: !(!vt.isIE() && !vt.isEdge()) && vt.version.major,
        gecko: vt.isFirefox(),
        mac: yt.isOSX() || yt.isiOS(),
        iOS: bt.isiPad() || bt.isiPhone(),
        android: yt.isAndroid(),
        contentEditable: !0,
        transparentSrc:
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        caretAfter: !0,
        range: window.getSelection && "Range" in window,
        documentMode: vt.isIE() ? document.documentMode || 7 : 10,
        fileApi: wt,
        ceFalse: !0,
        cacheSuffix: null,
        container: null,
        experimentalShadowDom: !1,
        canHaveCSP: !vt.isIE(),
        desktop: bt.isDesktop(),
        windowsPhone: xt,
        browser: {
          current: vt.current,
          version: vt.version,
          isChrome: vt.isChrome,
          isEdge: vt.isEdge,
          isFirefox: vt.isFirefox,
          isIE: vt.isIE,
          isOpera: vt.isOpera,
          isSafari: vt.isSafari,
        },
        os: {
          current: yt.current,
          version: yt.version,
          isAndroid: yt.isAndroid,
          isChromeOS: yt.isChromeOS,
          isFreeBSD: yt.isFreeBSD,
          isiOS: yt.isiOS,
          isLinux: yt.isLinux,
          isOSX: yt.isOSX,
          isSolaris: yt.isSolaris,
          isWindows: yt.isWindows,
        },
        deviceType: {
          isDesktop: bt.isDesktop,
          isiPad: bt.isiPad,
          isiPhone: bt.isiPhone,
          isPhone: bt.isPhone,
          isTablet: bt.isTablet,
          isTouch: bt.isTouch,
          isWebView: bt.isWebView,
        },
      },
      St = /^\s*|\s*$/g,
      Et = function (e) {
        return null == e ? "" : ("" + e).replace(St, "");
      },
      Nt = function (e, t) {
        return t ? !("array" !== t || !be(e)) || typeof e === t : void 0 !== e;
      },
      kt = function (e, t, n, r) {
        (r = r || this),
          e &&
            (n && (e = e[n]),
            Ce(e, function (e, o) {
              if (!1 === t.call(r, e, o, n)) return !1;
              kt(e, t, n, r);
            }));
      },
      At = {
        trim: Et,
        isArray: be,
        is: Nt,
        toArray: function (e) {
          if (be(e)) return e;
          for (var t = [], n = 0, r = e.length; n < r; n++) t[n] = e[n];
          return t;
        },
        makeMap: function (e, t, n) {
          var r;
          for (
            t = t || ",",
              "string" == typeof (e = e || []) && (e = e.split(t)),
              n = n || {},
              r = e.length;
            r--;

          )
            n[e[r]] = {};
          return n;
        },
        each: Ce,
        map: we,
        grep: xe,
        inArray: _e,
        hasOwn: function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        },
        extend: function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var a = o[i];
                void 0 !== a && (e[i] = a);
              }
          }
          return e;
        },
        create: function (e, t, n) {
          var r,
            o,
            i,
            a = this,
            u = 0,
            c = (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(
              /(^|\.)(\w+)$/i
            )[2],
            s = a.createNS(e[3].replace(/\.\w+$/, ""), n);
          if (!s[c]) {
            if ("static" === e[2])
              return (
                (s[c] = t),
                void (this.onCreate && this.onCreate(e[2], e[3], s[c]))
              );
            t[c] || ((t[c] = function () {}), (u = 1)),
              (s[c] = t[c]),
              a.extend(s[c].prototype, t),
              e[5] &&
                ((r = a.resolve(e[5]).prototype),
                (o = e[5].match(/\.(\w+)$/i)[1]),
                (i = s[c]),
                (s[c] = u
                  ? function () {
                      return r[o].apply(this, arguments);
                    }
                  : function () {
                      return (this.parent = r[o]), i.apply(this, arguments);
                    }),
                (s[c].prototype[c] = s[c]),
                a.each(r, function (e, t) {
                  s[c].prototype[t] = r[t];
                }),
                a.each(t, function (e, t) {
                  r[t]
                    ? (s[c].prototype[t] = function () {
                        return (this.parent = r[t]), e.apply(this, arguments);
                      })
                    : t !== c && (s[c].prototype[t] = e);
                })),
              a.each(t.static, function (e, t) {
                s[c][t] = e;
              });
          }
        },
        walk: kt,
        createNS: function (e, t) {
          var n, r;
          for (t = t || window, e = e.split("."), n = 0; n < e.length; n++)
            t[(r = e[n])] || (t[r] = {}), (t = t[r]);
          return t;
        },
        resolve: function (e, t) {
          var n, r;
          for (
            t = t || window, n = 0, r = (e = e.split(".")).length;
            n < r && (t = t[e[n]]);
            n++
          );
          return t;
        },
        explode: function (e, t) {
          return !e || Nt(e, "array") ? e : we(e.split(t || ","), Et);
        },
        _addCacheSuffix: function (e) {
          var t = _t.cacheSuffix;
          return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
        },
      },
      Rt = function (e) {
        if (null == e) throw new Error("Node cannot be null or undefined");
        return { dom: e };
      },
      Tt = {
        fromHtml: function (e, t) {
          var n = (t || document).createElement("div");
          if (
            ((n.innerHTML = e), !n.hasChildNodes() || n.childNodes.length > 1)
          )
            throw (
              (console.error("HTML does not have a single root node", e),
              new Error("HTML must have a single root node"))
            );
          return Rt(n.childNodes[0]);
        },
        fromTag: function (e, t) {
          var n = (t || document).createElement(e);
          return Rt(n);
        },
        fromText: function (e, t) {
          var n = (t || document).createTextNode(e);
          return Rt(n);
        },
        fromDom: Rt,
        fromPoint: function (e, t, n) {
          return M.from(e.dom.elementFromPoint(t, n)).map(Rt);
        },
      },
      Dt = function (e, t) {
        var n = [],
          r = function (e) {
            return n.push(e), t(e);
          },
          o = t(e);
        do {
          o = o.bind(r);
        } while (o.isSome());
        return n;
      },
      Ot = function (e, t) {
        var n = e.dom;
        if (1 !== n.nodeType) return !1;
        var r = n;
        if (void 0 !== r.matches) return r.matches(t);
        if (void 0 !== r.msMatchesSelector) return r.msMatchesSelector(t);
        if (void 0 !== r.webkitMatchesSelector)
          return r.webkitMatchesSelector(t);
        if (void 0 !== r.mozMatchesSelector) return r.mozMatchesSelector(t);
        throw new Error("Browser lacks native selectors");
      },
      Bt = function (e) {
        return (
          (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType) ||
          0 === e.childElementCount
        );
      },
      Pt = function (e, t) {
        return e.dom === t.dom;
      },
      Lt = function (e, t) {
        return (
          (n = e.dom),
          (r = t.dom),
          (function (e, t, n) {
            return 0 != (e.compareDocumentPosition(t) & n);
          })(n, r, Node.DOCUMENT_POSITION_CONTAINED_BY)
        );
        var n, r;
      },
      It = function (e, t) {
        return pt().browser.isIE()
          ? Lt(e, t)
          : (function (e, t) {
              var n = e.dom,
                r = t.dom;
              return n !== r && n.contains(r);
            })(e, t);
      };
    "undefined" != typeof window ? window : Function("return this;")();
    var Mt,
      Ft,
      Ut = function (e) {
        return e.dom.nodeName.toLowerCase();
      },
      jt = function (e) {
        return e.dom.nodeType;
      },
      zt = function (e) {
        return function (t) {
          return jt(t) === e;
        };
      },
      Vt = zt(1),
      Ht = zt(3),
      qt = zt(9),
      $t = zt(11),
      Wt = function (e) {
        return Tt.fromDom(e.dom.ownerDocument);
      },
      Kt = function (e) {
        return qt(e) ? e : Wt(e);
      },
      Xt = function (e) {
        return Tt.fromDom(Kt(e).dom.defaultView);
      },
      Yt = function (e) {
        return M.from(e.dom.parentNode).map(Tt.fromDom);
      },
      Gt = function (e) {
        return M.from(e.dom.previousSibling).map(Tt.fromDom);
      },
      Jt = function (e) {
        return M.from(e.dom.nextSibling).map(Tt.fromDom);
      },
      Qt = function (e) {
        return ee(Dt(e, Gt));
      },
      Zt = function (e) {
        return Dt(e, Jt);
      },
      en = function (e) {
        return q(e.dom.childNodes, Tt.fromDom);
      },
      tn = function (e, t) {
        var n = e.dom.childNodes;
        return M.from(n[t]).map(Tt.fromDom);
      },
      nn = function (e) {
        return tn(e, 0);
      },
      rn = function (e) {
        return tn(e, e.dom.childNodes.length - 1);
      },
      on = function (e) {
        return $t(e) && v(e.dom.host);
      },
      an = y(Element.prototype.attachShadow) && y(Node.prototype.getRootNode),
      un = x(an),
      cn = an
        ? function (e) {
            return Tt.fromDom(e.dom.getRootNode());
          }
        : Kt,
      sn = function (e) {
        return on(e)
          ? e
          : (function (e) {
              var t = e.dom.head;
              if (null == t) throw new Error("Head is not available yet");
              return Tt.fromDom(t);
            })(Kt(e));
      },
      ln = function (e) {
        return Tt.fromDom(e.dom.host);
      },
      fn = function (e) {
        return v(e.dom.shadowRoot);
      },
      dn = function (e, t) {
        Yt(e).each(function (n) {
          n.dom.insertBefore(t.dom, e.dom);
        });
      },
      mn = function (e, t) {
        Jt(e).fold(
          function () {
            Yt(e).each(function (e) {
              gn(e, t);
            });
          },
          function (e) {
            dn(e, t);
          }
        );
      },
      pn = function (e, t) {
        nn(e).fold(
          function () {
            gn(e, t);
          },
          function (n) {
            e.dom.insertBefore(t.dom, n.dom);
          }
        );
      },
      gn = function (e, t) {
        e.dom.appendChild(t.dom);
      },
      hn = function (e, t) {
        $(t, function (t) {
          gn(e, t);
        });
      },
      vn = function (e) {
        (e.dom.textContent = ""),
          $(en(e), function (e) {
            yn(e);
          });
      },
      yn = function (e) {
        var t = e.dom;
        null !== t.parentNode && t.parentNode.removeChild(t);
      },
      bn = function (e) {
        var t,
          n = en(e);
        n.length > 0 &&
          ((t = e),
          $(n, function (e) {
            dn(t, e);
          })),
          yn(e);
      },
      Cn = function (e) {
        var t = Ht(e) ? e.dom.parentNode : e.dom;
        if (null == t || null === t.ownerDocument) return !1;
        var n,
          r,
          o = t.ownerDocument;
        return (function (e) {
          var t = cn(e);
          return on(t) ? M.some(t) : M.none();
        })(Tt.fromDom(t)).fold(
          function () {
            return o.body.contains(t);
          },
          ((n = Cn),
          (r = ln),
          function (e) {
            return n(r(e));
          })
        );
      },
      wn = function (e, t) {
        return {
          left: e,
          top: t,
          translate: function (n, r) {
            return wn(e + n, t + r);
          },
        };
      },
      xn = wn,
      _n = function (e, t) {
        return void 0 !== e ? e : void 0 !== t ? t : 0;
      },
      Sn = function (e) {
        var t = e.dom,
          n = t.ownerDocument.body;
        return n === t
          ? xn(n.offsetLeft, n.offsetTop)
          : Cn(e)
          ? (function (e) {
              var t = e.getBoundingClientRect();
              return xn(t.left, t.top);
            })(t)
          : xn(0, 0);
      },
      En = function (e) {
        var t = void 0 !== e ? e.dom : document,
          n = t.body.scrollLeft || t.documentElement.scrollLeft,
          r = t.body.scrollTop || t.documentElement.scrollTop;
        return xn(n, r);
      },
      Nn = function (e, t, n) {
        var r = (void 0 !== n ? n.dom : document).defaultView;
        r && r.scrollTo(e, t);
      },
      kn = function (e, t) {
        pt().browser.isSafari() && y(e.dom.scrollIntoViewIfNeeded)
          ? e.dom.scrollIntoViewIfNeeded(!1)
          : e.dom.scrollIntoView(t);
      },
      An = function (e, t, n, r) {
        return { x: e, y: t, width: n, height: r, right: e + n, bottom: t + r };
      },
      Rn = function (e) {
        var t = void 0 === e ? window : e,
          n = t.document,
          r = En(Tt.fromDom(n));
        return (function (e) {
          var t = void 0 === e ? window : e;
          return M.from(t.visualViewport);
        })(t).fold(
          function () {
            var e = t.document.documentElement,
              n = e.clientWidth,
              o = e.clientHeight;
            return An(r.left, r.top, n, o);
          },
          function (e) {
            return An(
              Math.max(e.pageLeft, r.left),
              Math.max(e.pageTop, r.top),
              e.width,
              e.height
            );
          }
        );
      },
      Tn = function (e) {
        return function (t) {
          return !!t && t.nodeType === e;
        };
      },
      Dn = function (e) {
        return !!e && !Object.getPrototypeOf(e);
      },
      On = Tn(1),
      Bn = function (e) {
        var t = e.map(function (e) {
          return e.toLowerCase();
        });
        return function (e) {
          if (e && e.nodeName) {
            var n = e.nodeName.toLowerCase();
            return V(t, n);
          }
          return !1;
        };
      },
      Pn = function (e, t) {
        var n = t.toLowerCase().split(" ");
        return function (t) {
          var r;
          if (On(t))
            for (r = 0; r < n.length; r++) {
              var o = t.ownerDocument.defaultView.getComputedStyle(t, null);
              if ((o ? o.getPropertyValue(e) : null) === n[r]) return !0;
            }
          return !1;
        };
      },
      Ln = function (e) {
        return function (t) {
          return On(t) && t.hasAttribute(e);
        };
      },
      In = function (e) {
        return On(e) && e.hasAttribute("data-mce-bogus");
      },
      Mn = function (e) {
        return On(e) && "TABLE" === e.tagName;
      },
      Fn = function (e) {
        return function (t) {
          if (On(t)) {
            if (t.contentEditable === e) return !0;
            if (t.getAttribute("data-mce-contenteditable") === e) return !0;
          }
          return !1;
        };
      },
      Un = Bn(["textarea", "input"]),
      jn = Tn(3),
      zn = Tn(8),
      Vn = Tn(9),
      Hn = Tn(11),
      qn = Bn(["br"]),
      $n = Bn(["img"]),
      Wn = Fn("true"),
      Kn = Fn("false"),
      Xn = Bn(["td", "th"]),
      Yn = Bn(["video", "audio", "object", "embed"]),
      Gn = function (e) {
        return void 0 !== e.style && y(e.style.getPropertyValue);
      },
      Jn = function (e, t, n) {
        if (!(l(n) || p(n) || b(n)))
          throw (
            (console.error(
              "Invalid call to Attribute.set. Key ",
              t,
              ":: Value ",
              n,
              ":: Element ",
              e
            ),
            new Error("Attribute value was not simple"))
          );
        e.setAttribute(t, n + "");
      },
      Qn = function (e, t, n) {
        Jn(e.dom, t, n);
      },
      Zn = function (e, t) {
        var n = e.dom;
        ce(t, function (e, t) {
          Jn(n, t, e);
        });
      },
      er = function (e, t) {
        var n = e.dom.getAttribute(t);
        return null === n ? void 0 : n;
      },
      tr = function (e, t) {
        return M.from(er(e, t));
      },
      nr = function (e, t) {
        e.dom.removeAttribute(t);
      },
      rr = function (e, t) {
        var n = e.dom;
        ce(t, function (e, t) {
          !(function (e, t, n) {
            if (!l(n))
              throw (
                (console.error(
                  "Invalid call to CSS.set. Property ",
                  t,
                  ":: Value ",
                  n,
                  ":: Element ",
                  e
                ),
                new Error("CSS value must be a string: " + n))
              );
            Gn(e) && e.style.setProperty(t, n);
          })(n, t, e);
        });
      },
      or = function (e, t) {
        var n = e.dom,
          r = window.getComputedStyle(n).getPropertyValue(t);
        return "" !== r || Cn(e) ? r : ir(n, t);
      },
      ir = function (e, t) {
        return Gn(e) ? e.style.getPropertyValue(t) : "";
      },
      ar = function (e, t) {
        var n = e.dom,
          r = ir(n, t);
        return M.from(r).filter(function (e) {
          return e.length > 0;
        });
      },
      ur = function (e) {
        var t = {},
          n = e.dom;
        if (Gn(n))
          for (var r = 0; r < n.style.length; r++) {
            var o = n.style.item(r);
            t[o] = n.style[o];
          }
        return t;
      },
      cr = pt().browser,
      sr = function (e) {
        return G(e, Vt);
      },
      lr = function (e, t) {
        return e.children && V(e.children, t);
      },
      fr = function (e, t, n) {
        var r,
          o,
          i = 0,
          a = 0,
          u = e.ownerDocument;
        if (((n = n || e), t)) {
          if (
            n === e &&
            t.getBoundingClientRect &&
            "static" === or(Tt.fromDom(e), "position")
          )
            return {
              x: (i =
                (o = t.getBoundingClientRect()).left +
                (u.documentElement.scrollLeft || e.scrollLeft) -
                u.documentElement.clientLeft),
              y: (a =
                o.top +
                (u.documentElement.scrollTop || e.scrollTop) -
                u.documentElement.clientTop),
            };
          for (r = t; r && r !== n && r.nodeType && !lr(r, n); )
            (i += r.offsetLeft || 0),
              (a += r.offsetTop || 0),
              (r = r.offsetParent);
          for (r = t.parentNode; r && r !== n && r.nodeType && !lr(r, n); )
            (i -= r.scrollLeft || 0),
              (a -= r.scrollTop || 0),
              (r = r.parentNode);
          a += (function (e) {
            return cr.isFirefox() && "table" === Ut(e)
              ? sr(en(e))
                  .filter(function (e) {
                    return "caption" === Ut(e);
                  })
                  .bind(function (e) {
                    return sr(Zt(e)).map(function (t) {
                      var n = t.dom.offsetTop,
                        r = e.dom.offsetTop,
                        o = e.dom.offsetHeight;
                      return n <= r ? -o : 0;
                    });
                  })
                  .getOr(0)
              : 0;
          })(Tt.fromDom(t));
        }
        return { x: i, y: a };
      },
      dr = {},
      mr = { exports: dr };
    (Mt = dr),
      (Ft = mr),
      (function (e) {
        "object" == typeof Mt && void 0 !== Ft
          ? (Ft.exports = e())
          : (("undefined" != typeof window
              ? window
              : void 0 !== no
              ? no
              : "undefined" != typeof self
              ? self
              : this
            ).EphoxContactWrapper = e());
      })(function () {
        return (function e(t, n, r) {
          function o(a, u) {
            if (!n[a]) {
              if (!t[a]) {
                var c = !1;
                if (!u && c) return c(a, !0);
                if (i) return i(a, !0);
                var s = new Error("Cannot find module '" + a + "'");
                throw ((s.code = "MODULE_NOT_FOUND"), s);
              }
              var l = (n[a] = { exports: {} });
              t[a][0].call(
                l.exports,
                function (e) {
                  return o(t[a][1][e] || e);
                },
                l,
                l.exports,
                e,
                t,
                n,
                r
              );
            }
            return n[a].exports;
          }
          for (var i = !1, a = 0; a < r.length; a++) o(r[a]);
          return o;
        })(
          {
            1: [
              function (e, t, n) {
                var r,
                  o,
                  i = (t.exports = {});
                function a() {
                  throw new Error("setTimeout has not been defined");
                }
                function u() {
                  throw new Error("clearTimeout has not been defined");
                }
                function c(e) {
                  if (r === setTimeout) return setTimeout(e, 0);
                  if ((r === a || !r) && setTimeout)
                    return (r = setTimeout), setTimeout(e, 0);
                  try {
                    return r(e, 0);
                  } catch (t) {
                    try {
                      return r.call(null, e, 0);
                    } catch (n) {
                      return r.call(this, e, 0);
                    }
                  }
                }
                !(function () {
                  try {
                    r = "function" == typeof setTimeout ? setTimeout : a;
                  } catch (e) {
                    r = a;
                  }
                  try {
                    o = "function" == typeof clearTimeout ? clearTimeout : u;
                  } catch (e) {
                    o = u;
                  }
                })();
                var s,
                  l = [],
                  f = !1,
                  d = -1;
                function m() {
                  f &&
                    s &&
                    ((f = !1),
                    s.length ? (l = s.concat(l)) : (d = -1),
                    l.length && p());
                }
                function p() {
                  if (!f) {
                    var e = c(m);
                    f = !0;
                    for (var t = l.length; t; ) {
                      for (s = l, l = []; ++d < t; ) s && s[d].run();
                      (d = -1), (t = l.length);
                    }
                    (s = null),
                      (f = !1),
                      (function (e) {
                        if (o === clearTimeout) return clearTimeout(e);
                        if ((o === u || !o) && clearTimeout)
                          return (o = clearTimeout), clearTimeout(e);
                        try {
                          o(e);
                        } catch (t) {
                          try {
                            return o.call(null, e);
                          } catch (n) {
                            return o.call(this, e);
                          }
                        }
                      })(e);
                  }
                }
                function g(e, t) {
                  (this.fun = e), (this.array = t);
                }
                function h() {}
                (i.nextTick = function (e) {
                  var t = new Array(arguments.length - 1);
                  if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                  l.push(new g(e, t)), 1 !== l.length || f || c(p);
                }),
                  (g.prototype.run = function () {
                    this.fun.apply(null, this.array);
                  }),
                  (i.title = "browser"),
                  (i.browser = !0),
                  (i.env = {}),
                  (i.argv = []),
                  (i.version = ""),
                  (i.versions = {}),
                  (i.on = h),
                  (i.addListener = h),
                  (i.once = h),
                  (i.off = h),
                  (i.removeListener = h),
                  (i.removeAllListeners = h),
                  (i.emit = h),
                  (i.prependListener = h),
                  (i.prependOnceListener = h),
                  (i.listeners = function (e) {
                    return [];
                  }),
                  (i.binding = function (e) {
                    throw new Error("process.binding is not supported");
                  }),
                  (i.cwd = function () {
                    return "/";
                  }),
                  (i.chdir = function (e) {
                    throw new Error("process.chdir is not supported");
                  }),
                  (i.umask = function () {
                    return 0;
                  });
              },
              {},
            ],
            2: [
              function (e, t, n) {
                (function (e) {
                  !(function (n) {
                    var r = setTimeout;
                    function o() {}
                    function i(e) {
                      if ("object" != typeof this)
                        throw new TypeError(
                          "Promises must be constructed via new"
                        );
                      if ("function" != typeof e)
                        throw new TypeError("not a function");
                      (this._state = 0),
                        (this._handled = !1),
                        (this._value = void 0),
                        (this._deferreds = []),
                        f(e, this);
                    }
                    function a(e, t) {
                      for (; 3 === e._state; ) e = e._value;
                      0 !== e._state
                        ? ((e._handled = !0),
                          i._immediateFn(function () {
                            var n =
                              1 === e._state ? t.onFulfilled : t.onRejected;
                            if (null !== n) {
                              var r;
                              try {
                                r = n(e._value);
                              } catch (o) {
                                return void c(t.promise, o);
                              }
                              u(t.promise, r);
                            } else (1 === e._state ? u : c)(t.promise, e._value);
                          }))
                        : e._deferreds.push(t);
                    }
                    function u(e, t) {
                      try {
                        if (t === e)
                          throw new TypeError(
                            "A promise cannot be resolved with itself."
                          );
                        if (
                          t &&
                          ("object" == typeof t || "function" == typeof t)
                        ) {
                          var n = t.then;
                          if (t instanceof i)
                            return (e._state = 3), (e._value = t), void s(e);
                          if ("function" == typeof n)
                            return void f(
                              ((r = n),
                              (o = t),
                              function () {
                                r.apply(o, arguments);
                              }),
                              e
                            );
                        }
                        (e._state = 1), (e._value = t), s(e);
                      } catch (a) {
                        c(e, a);
                      }
                      var r, o;
                    }
                    function c(e, t) {
                      (e._state = 2), (e._value = t), s(e);
                    }
                    function s(e) {
                      2 === e._state &&
                        0 === e._deferreds.length &&
                        i._immediateFn(function () {
                          e._handled || i._unhandledRejectionFn(e._value);
                        });
                      for (var t = 0, n = e._deferreds.length; t < n; t++)
                        a(e, e._deferreds[t]);
                      e._deferreds = null;
                    }
                    function l(e, t, n) {
                      (this.onFulfilled = "function" == typeof e ? e : null),
                        (this.onRejected = "function" == typeof t ? t : null),
                        (this.promise = n);
                    }
                    function f(e, t) {
                      var n = !1;
                      try {
                        e(
                          function (e) {
                            n || ((n = !0), u(t, e));
                          },
                          function (e) {
                            n || ((n = !0), c(t, e));
                          }
                        );
                      } catch (r) {
                        if (n) return;
                        (n = !0), c(t, r);
                      }
                    }
                    (i.prototype.catch = function (e) {
                      return this.then(null, e);
                    }),
                      (i.prototype.then = function (e, t) {
                        var n = new this.constructor(o);
                        return a(this, new l(e, t, n)), n;
                      }),
                      (i.all = function (e) {
                        var t = Array.prototype.slice.call(e);
                        return new i(function (e, n) {
                          if (0 === t.length) return e([]);
                          var r = t.length;
                          function o(i, a) {
                            try {
                              if (
                                a &&
                                ("object" == typeof a || "function" == typeof a)
                              ) {
                                var u = a.then;
                                if ("function" == typeof u)
                                  return void u.call(
                                    a,
                                    function (e) {
                                      o(i, e);
                                    },
                                    n
                                  );
                              }
                              (t[i] = a), 0 == --r && e(t);
                            } catch (c) {
                              n(c);
                            }
                          }
                          for (var i = 0; i < t.length; i++) o(i, t[i]);
                        });
                      }),
                      (i.resolve = function (e) {
                        return e && "object" == typeof e && e.constructor === i
                          ? e
                          : new i(function (t) {
                              t(e);
                            });
                      }),
                      (i.reject = function (e) {
                        return new i(function (t, n) {
                          n(e);
                        });
                      }),
                      (i.race = function (e) {
                        return new i(function (t, n) {
                          for (var r = 0, o = e.length; r < o; r++)
                            e[r].then(t, n);
                        });
                      }),
                      (i._immediateFn =
                        "function" == typeof e
                          ? function (t) {
                              e(t);
                            }
                          : function (e) {
                              r(e, 0);
                            }),
                      (i._unhandledRejectionFn = function (e) {
                        "undefined" != typeof console &&
                          console &&
                          console.warn(
                            "Possible Unhandled Promise Rejection:",
                            e
                          );
                      }),
                      (i._setImmediateFn = function (e) {
                        i._immediateFn = e;
                      }),
                      (i._setUnhandledRejectionFn = function (e) {
                        i._unhandledRejectionFn = e;
                      }),
                      void 0 !== t && t.exports
                        ? (t.exports = i)
                        : n.Promise || (n.Promise = i);
                  })(this);
                }.call(this, e("timers").setImmediate));
              },
              { timers: 3 },
            ],
            3: [
              function (e, t, n) {
                (function (t, r) {
                  var o = e("process/browser.js").nextTick,
                    i = Function.prototype.apply,
                    a = Array.prototype.slice,
                    u = {},
                    c = 0;
                  function s(e, t) {
                    (this._id = e), (this._clearFn = t);
                  }
                  (n.setTimeout = function () {
                    return new s(
                      i.call(setTimeout, window, arguments),
                      clearTimeout
                    );
                  }),
                    (n.setInterval = function () {
                      return new s(
                        i.call(setInterval, window, arguments),
                        clearInterval
                      );
                    }),
                    (n.clearTimeout = n.clearInterval =
                      function (e) {
                        e.close();
                      }),
                    (s.prototype.unref = s.prototype.ref = function () {}),
                    (s.prototype.close = function () {
                      this._clearFn.call(window, this._id);
                    }),
                    (n.enroll = function (e, t) {
                      clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
                    }),
                    (n.unenroll = function (e) {
                      clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
                    }),
                    (n._unrefActive = n.active =
                      function (e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 &&
                          (e._idleTimeoutId = setTimeout(function () {
                            e._onTimeout && e._onTimeout();
                          }, t));
                      }),
                    (n.setImmediate =
                      "function" == typeof t
                        ? t
                        : function (e) {
                            var t = c++,
                              r =
                                !(arguments.length < 2) && a.call(arguments, 1);
                            return (
                              (u[t] = !0),
                              o(function () {
                                u[t] &&
                                  (r ? e.apply(null, r) : e.call(null),
                                  n.clearImmediate(t));
                              }),
                              t
                            );
                          }),
                    (n.clearImmediate =
                      "function" == typeof r
                        ? r
                        : function (e) {
                            delete u[e];
                          });
                }.call(
                  this,
                  e("timers").setImmediate,
                  e("timers").clearImmediate
                ));
              },
              { "process/browser.js": 1, timers: 3 },
            ],
            4: [
              function (e, t, n) {
                var r = e("promise-polyfill"),
                  o =
                    "undefined" != typeof window
                      ? window
                      : Function("return this;")();
                t.exports = { boltExport: o.Promise || r };
              },
              { "promise-polyfill": 2 },
            ],
          },
          {},
          [4]
        )(4);
      });
    var pr = mr.exports.boltExport,
      gr = function (e) {
        var t = M.none(),
          n = [],
          r = function (e) {
            o() ? a(e) : n.push(e);
          },
          o = function () {
            return t.isSome();
          },
          i = function (e) {
            $(e, a);
          },
          a = function (e) {
            t.each(function (t) {
              setTimeout(function () {
                e(t);
              }, 0);
            });
          };
        return (
          e(function (e) {
            o() || ((t = M.some(e)), i(n), (n = []));
          }),
          {
            get: r,
            map: function (e) {
              return gr(function (t) {
                r(function (n) {
                  t(e(n));
                });
              });
            },
            isReady: o,
          }
        );
      },
      hr = {
        nu: gr,
        pure: function (e) {
          return gr(function (t) {
            t(e);
          });
        },
      },
      vr = function (e) {
        setTimeout(function () {
          throw e;
        }, 0);
      },
      yr = function (e) {
        var t = function (t) {
          e().then(t, vr);
        };
        return {
          map: function (t) {
            return yr(function () {
              return e().then(t);
            });
          },
          bind: function (t) {
            return yr(function () {
              return e().then(function (e) {
                return t(e).toPromise();
              });
            });
          },
          anonBind: function (t) {
            return yr(function () {
              return e().then(function () {
                return t.toPromise();
              });
            });
          },
          toLazy: function () {
            return hr.nu(t);
          },
          toCached: function () {
            var t = null;
            return yr(function () {
              return null === t && (t = e()), t;
            });
          },
          toPromise: e,
          get: t,
        };
      },
      br = function (e) {
        return yr(function () {
          return new pr(e);
        });
      },
      Cr = function (e, t) {
        return t(function (t) {
          var n = [],
            r = 0;
          0 === e.length
            ? t([])
            : $(e, function (o, i) {
                o.get(
                  (function (o) {
                    return function (i) {
                      (n[o] = i), ++r >= e.length && t(n);
                    };
                  })(i)
                );
              });
        });
      },
      wr = function (e) {
        return {
          is: function (t) {
            return e === t;
          },
          isValue: B,
          isError: O,
          getOr: x(e),
          getOrThunk: x(e),
          getOrDie: x(e),
          or: function (t) {
            return wr(e);
          },
          orThunk: function (t) {
            return wr(e);
          },
          fold: function (t, n) {
            return n(e);
          },
          map: function (t) {
            return wr(t(e));
          },
          mapError: function (t) {
            return wr(e);
          },
          each: function (t) {
            t(e);
          },
          bind: function (t) {
            return t(e);
          },
          exists: function (t) {
            return t(e);
          },
          forall: function (t) {
            return t(e);
          },
          toOptional: function () {
            return M.some(e);
          },
        };
      },
      xr = function (e) {
        return {
          is: O,
          isValue: O,
          isError: B,
          getOr: _,
          getOrThunk: function (e) {
            return e();
          },
          getOrDie: function () {
            return R(String(e))();
          },
          or: function (e) {
            return e;
          },
          orThunk: function (e) {
            return e();
          },
          fold: function (t, n) {
            return t(e);
          },
          map: function (t) {
            return xr(e);
          },
          mapError: function (t) {
            return xr(t(e));
          },
          each: C,
          bind: function (t) {
            return xr(e);
          },
          exists: O,
          forall: B,
          toOptional: M.none,
        };
      },
      _r = {
        value: wr,
        error: xr,
        fromOption: function (e, t) {
          return e.fold(function () {
            return xr(t);
          }, wr);
        },
      },
      Sr = function (e) {
        if (!d(e)) throw new Error("cases must be an array");
        if (0 === e.length) throw new Error("there must be at least one case");
        var t = [],
          n = {};
        return (
          $(e, function (r, o) {
            var i = ae(r);
            if (1 !== i.length)
              throw new Error("one and only one name per case");
            var a = i[0],
              u = r[a];
            if (void 0 !== n[a]) throw new Error("duplicate key detected:" + a);
            if ("cata" === a)
              throw new Error("cannot have a case named cata (sorry)");
            if (!d(u)) throw new Error("case arguments must be an array");
            t.push(a),
              (n[a] = function () {
                for (var n = [], r = 0; r < arguments.length; r++)
                  n[r] = arguments[r];
                var i = n.length;
                if (i !== u.length)
                  throw new Error(
                    "Wrong number of arguments to case " +
                      a +
                      ". Expected " +
                      u.length +
                      " (" +
                      u +
                      "), got " +
                      i
                  );
                var c = function (e) {
                  var r = ae(e);
                  if (t.length !== r.length)
                    throw new Error(
                      "Wrong number of arguments to match. Expected: " +
                        t.join(",") +
                        "\nActual: " +
                        r.join(",")
                    );
                  if (
                    !Z(t, function (e) {
                      return V(r, e);
                    })
                  )
                    throw new Error(
                      "Not all branches were specified when using match. Specified: " +
                        r.join(", ") +
                        "\nRequired: " +
                        t.join(", ")
                    );
                  return e[a].apply(null, n);
                };
                return {
                  fold: function () {
                    for (var t = [], r = 0; r < arguments.length; r++)
                      t[r] = arguments[r];
                    if (t.length !== e.length)
                      throw new Error(
                        "Wrong number of arguments to fold. Expected " +
                          e.length +
                          ", got " +
                          t.length
                      );
                    var i = t[o];
                    return i.apply(null, n);
                  },
                  match: c,
                  log: function (e) {
                    console.log(e, {
                      constructors: t,
                      constructor: a,
                      params: n,
                    });
                  },
                };
              });
          }),
          n
        );
      };
    Sr([
      { bothErrors: ["error1", "error2"] },
      { firstError: ["error1", "value2"] },
      { secondError: ["value1", "error2"] },
      { bothValues: ["value1", "value2"] },
    ]);
    var Er = function (e) {
      return e.fold(_, _);
    };
    function Nr(e, t, n, r, o) {
      return e(n, r) ? M.some(n) : y(o) && o(n) ? M.none() : t(n, r, o);
    }
    var kr,
      Ar,
      Rr,
      Tr,
      Dr,
      Or,
      Br,
      Pr,
      Lr,
      Ir,
      Mr,
      Fr,
      Ur,
      jr,
      zr,
      Vr,
      Hr,
      qr,
      $r,
      Wr,
      Kr,
      Xr = function (e, t, n) {
        for (var r = e.dom, o = y(n) ? n : O; r.parentNode; ) {
          r = r.parentNode;
          var i = Tt.fromDom(r);
          if (t(i)) return M.some(i);
          if (o(i)) break;
        }
        return M.none();
      },
      Yr = function (e, t, n) {
        return Nr(
          function (e, t) {
            return t(e);
          },
          Xr,
          e,
          t,
          n
        );
      },
      Gr = function (e, t) {
        return G(e.dom.childNodes, function (e) {
          return t(Tt.fromDom(e));
        }).map(Tt.fromDom);
      },
      Jr = function (e, t, n) {
        return Xr(
          e,
          function (e) {
            return Ot(e, t);
          },
          n
        );
      },
      Qr = function (e, t) {
        return (function (e, t) {
          var n = void 0 === t ? document : t.dom;
          return Bt(n) ? M.none() : M.from(n.querySelector(e)).map(Tt.fromDom);
        })(t, e);
      },
      Zr = function (e, t, n) {
        return Nr(
          function (e, t) {
            return Ot(e, t);
          },
          Jr,
          e,
          t,
          n
        );
      },
      eo = window.Promise
        ? window.Promise
        : (function () {
            var e = function (e, t) {
                return function () {
                  for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                  e.apply(t, n);
                };
              },
              t =
                Array.isArray ||
                function (e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                },
              n = function (t) {
                if ("object" != typeof this)
                  throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t)
                  throw new TypeError("not a function");
                (this._state = null),
                  (this._value = null),
                  (this._deferreds = []),
                  s(t, e(i, this), e(a, this));
              },
              r =
                n.immediateFn ||
                ("function" == typeof setImmediate && setImmediate) ||
                function (e) {
                  return setTimeout(e, 1);
                };
            function o(e) {
              var t = this;
              null !== this._state
                ? r(function () {
                    var n = t._state ? e.onFulfilled : e.onRejected;
                    if (null !== n) {
                      var r;
                      try {
                        r = n(t._value);
                      } catch (o) {
                        return void e.reject(o);
                      }
                      e.resolve(r);
                    } else (t._state ? e.resolve : e.reject)(t._value);
                  })
                : this._deferreds.push(e);
            }
            function i(t) {
              try {
                if (t === this)
                  throw new TypeError(
                    "A promise cannot be resolved with itself."
                  );
                if (t && ("object" == typeof t || "function" == typeof t)) {
                  var n = t.then;
                  if ("function" == typeof n)
                    return void s(e(n, t), e(i, this), e(a, this));
                }
                (this._state = !0), (this._value = t), u.call(this);
              } catch (r) {
                a.call(this, r);
              }
            }
            function a(e) {
              (this._state = !1), (this._value = e), u.call(this);
            }
            function u() {
              for (var e = 0, t = this._deferreds.length; e < t; e++)
                o.call(this, this._deferreds[e]);
              this._deferreds = null;
            }
            function c(e, t, n, r) {
              (this.onFulfilled = "function" == typeof e ? e : null),
                (this.onRejected = "function" == typeof t ? t : null),
                (this.resolve = n),
                (this.reject = r);
            }
            var s = function (e, t, n) {
              var r = !1;
              try {
                e(
                  function (e) {
                    r || ((r = !0), t(e));
                  },
                  function (e) {
                    r || ((r = !0), n(e));
                  }
                );
              } catch (o) {
                if (r) return;
                (r = !0), n(o);
              }
            };
            return (
              (n.prototype.catch = function (e) {
                return this.then(null, e);
              }),
              (n.prototype.then = function (e, t) {
                var r = this;
                return new n(function (n, i) {
                  o.call(r, new c(e, t, n, i));
                });
              }),
              (n.all = function () {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                var o = Array.prototype.slice.call(
                  1 === e.length && t(e[0]) ? e[0] : e
                );
                return new n(function (e, t) {
                  if (0 === o.length) return e([]);
                  for (
                    var n = o.length,
                      r = function (i, a) {
                        try {
                          if (
                            a &&
                            ("object" == typeof a || "function" == typeof a)
                          ) {
                            var u = a.then;
                            if ("function" == typeof u)
                              return void u.call(
                                a,
                                function (e) {
                                  r(i, e);
                                },
                                t
                              );
                          }
                          (o[i] = a), 0 == --n && e(o);
                        } catch (c) {
                          t(c);
                        }
                      },
                      i = 0;
                    i < o.length;
                    i++
                  )
                    r(i, o[i]);
                });
              }),
              (n.resolve = function (e) {
                return e && "object" == typeof e && e.constructor === n
                  ? e
                  : new n(function (t) {
                      t(e);
                    });
              }),
              (n.reject = function (e) {
                return new n(function (t, n) {
                  n(e);
                });
              }),
              (n.race = function (e) {
                return new n(function (t, n) {
                  for (var r = 0, o = e.length; r < o; r++) e[r].then(t, n);
                });
              }),
              n
            );
          })(),
      ro = function (e, t) {
        return "number" != typeof t && (t = 0), setTimeout(e, t);
      },
      oo = function (e, t) {
        return "number" != typeof t && (t = 1), setInterval(e, t);
      },
      io = function (e, t) {
        var n,
          r = function () {
            for (var r = [], o = 0; o < arguments.length; o++)
              r[o] = arguments[o];
            clearTimeout(n),
              (n = ro(function () {
                e.apply(this, r);
              }, t));
          };
        return (
          (r.stop = function () {
            clearTimeout(n);
          }),
          r
        );
      },
      ao = {
        requestAnimationFrame: function (e, t) {
          kr
            ? kr.then(e)
            : (kr = new eo(function (e) {
                t || (t = document.body),
                  (function (e, t) {
                    for (
                      var n = window.requestAnimationFrame,
                        r = ["ms", "moz", "webkit"],
                        o = 0;
                      o < r.length && !n;
                      o++
                    )
                      n = window[r[o] + "RequestAnimationFrame"];
                    n ||
                      (n = function (e) {
                        window.setTimeout(e, 0);
                      }),
                      n(e, t);
                  })(e, t);
              }).then(e));
        },
        setTimeout: ro,
        setInterval: oo,
        setEditorTimeout: function (e, t, n) {
          return ro(function () {
            e.removed || t();
          }, n);
        },
        setEditorInterval: function (e, t, n) {
          var r = oo(function () {
            e.removed ? clearInterval(r) : t();
          }, n);
          return r;
        },
        debounce: io,
        throttle: io,
        clearInterval: function (e) {
          return clearInterval(e);
        },
        clearTimeout: function (e) {
          return clearTimeout(e);
        },
      },
      uo = function (e, t) {
        void 0 === t && (t = {});
        var n = 0,
          r = {},
          o = Tt.fromDom(e),
          i = Kt(o),
          a = t.maxLoadTime || 5e3,
          u = function (u, c, s) {
            var l,
              f = At._addCacheSuffix(u),
              d = (function (e) {
                return he(r, e).getOrThunk(function () {
                  return {
                    id: "mce-u" + n++,
                    passed: [],
                    failed: [],
                    count: 0,
                  };
                });
              })(f);
            (r[f] = d), d.count++;
            var m = function (e, t) {
                for (var n = e.length; n--; ) e[n]();
                (d.status = t),
                  (d.passed = []),
                  (d.failed = []),
                  l && ((l.onload = null), (l.onerror = null), (l = null));
              },
              p = function () {
                return m(d.passed, 2);
              },
              g = function () {
                return m(d.failed, 3);
              },
              h = function () {
                var t;
                (t = h),
                  (function () {
                    for (var t = e.styleSheets, n = t.length; n--; ) {
                      var r = t[n].ownerNode;
                      if (r && r.id === l.id) return p(), !0;
                    }
                    return !1;
                  })() || (Date.now() - b < a ? ao.setTimeout(t) : g());
              };
            if ((c && d.passed.push(c), s && d.failed.push(s), 1 !== d.status))
              if (2 !== d.status)
                if (3 !== d.status) {
                  d.status = 1;
                  var v = Tt.fromTag("link", i.dom);
                  Zn(v, { rel: "stylesheet", type: "text/css", id: d.id });
                  var y,
                    b = Date.now();
                  t.contentCssCors && Qn(v, "crossOrigin", "anonymous"),
                    t.referrerPolicy &&
                      Qn(v, "referrerpolicy", t.referrerPolicy),
                    ((l = v.dom).onload = h),
                    (l.onerror = g),
                    (y = v),
                    gn(sn(o), y),
                    Qn(v, "href", f);
                } else g();
              else p();
          },
          c = function (e) {
            return br(function (t) {
              u(e, w(t, x(_r.value(e))), w(t, x(_r.error(e))));
            });
          },
          s = function (e) {
            var t = At._addCacheSuffix(e);
            he(r, t).each(function (e) {
              0 == --e.count &&
                (delete r[t],
                (function (e) {
                  var t = sn(o);
                  Qr(t, "#" + e).each(yn);
                })(e.id));
            });
          };
        return {
          load: u,
          loadAll: function (e, t, n) {
            var r;
            ((r = q(e, c)), Cr(r, br)).get(function (e) {
              var r = (function (e, t) {
                for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                  var a = e[o];
                  (t(a, o) ? n : r).push(a);
                }
                return { pass: n, fail: r };
              })(e, function (e) {
                return e.isValue();
              });
              r.fail.length > 0 ? n(r.fail.map(Er)) : t(r.pass.map(Er));
            });
          },
          unload: s,
          unloadAll: function (e) {
            $(e, function (e) {
              s(e);
            });
          },
          _setReferrerPolicy: function (e) {
            t.referrerPolicy = e;
          },
        };
      },
      co =
        ((Ar = new WeakMap()),
        {
          forElement: function (e, t) {
            var n = cn(e).dom;
            return M.from(Ar.get(n)).getOrThunk(function () {
              var e = uo(n, t);
              return Ar.set(n, e), e;
            });
          },
        }),
      so = (function () {
        function e(e, t) {
          (this.node = e),
            (this.rootNode = t),
            (this.current = this.current.bind(this)),
            (this.next = this.next.bind(this)),
            (this.prev = this.prev.bind(this)),
            (this.prev2 = this.prev2.bind(this));
        }
        return (
          (e.prototype.current = function () {
            return this.node;
          }),
          (e.prototype.next = function (e) {
            return (
              (this.node = this.findSibling(
                this.node,
                "firstChild",
                "nextSibling",
                e
              )),
              this.node
            );
          }),
          (e.prototype.prev = function (e) {
            return (
              (this.node = this.findSibling(
                this.node,
                "lastChild",
                "previousSibling",
                e
              )),
              this.node
            );
          }),
          (e.prototype.prev2 = function (e) {
            return (
              (this.node = this.findPreviousNode(
                this.node,
                "lastChild",
                "previousSibling",
                e
              )),
              this.node
            );
          }),
          (e.prototype.findSibling = function (e, t, n, r) {
            var o, i;
            if (e) {
              if (!r && e[t]) return e[t];
              if (e !== this.rootNode) {
                if ((o = e[n])) return o;
                for (
                  i = e.parentNode;
                  i && i !== this.rootNode;
                  i = i.parentNode
                )
                  if ((o = i[n])) return o;
              }
            }
          }),
          (e.prototype.findPreviousNode = function (e, t, n, r) {
            var o, i, a;
            if (e) {
              if (((o = e[n]), this.rootNode && o === this.rootNode)) return;
              if (o) {
                if (!r) for (a = o[t]; a; a = a[t]) if (!a[t]) return a;
                return o;
              }
              if ((i = e.parentNode) && i !== this.rootNode) return i;
            }
          }),
          e
        );
      })(),
      lo = function (e) {
        var t;
        return function (n) {
          return (t =
            t ||
            (function (e, t) {
              for (var n = {}, r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                n[String(i)] = t(i, r);
              }
              return n;
            })(e, B)).hasOwnProperty(Ut(n));
        };
      },
      fo = lo(["h1", "h2", "h3", "h4", "h5", "h6"]),
      mo = lo([
        "article",
        "aside",
        "details",
        "div",
        "dt",
        "figcaption",
        "footer",
        "form",
        "fieldset",
        "header",
        "hgroup",
        "html",
        "main",
        "nav",
        "section",
        "summary",
        "body",
        "p",
        "dl",
        "multicol",
        "dd",
        "figure",
        "address",
        "center",
        "blockquote",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "listing",
        "xmp",
        "pre",
        "plaintext",
        "menu",
        "dir",
        "ul",
        "ol",
        "li",
        "hr",
        "table",
        "tbody",
        "thead",
        "tfoot",
        "th",
        "tr",
        "td",
        "caption",
      ]),
      po = function (e) {
        return Vt(e) && !mo(e);
      },
      go = function (e) {
        return Vt(e) && "br" === Ut(e);
      },
      ho = lo([
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "div",
        "address",
        "pre",
        "form",
        "blockquote",
        "center",
        "dir",
        "fieldset",
        "header",
        "footer",
        "article",
        "section",
        "hgroup",
        "aside",
        "nav",
        "figure",
      ]),
      vo = lo(["ul", "ol", "dl"]),
      yo = lo(["li", "dd", "dt"]),
      bo = lo(["thead", "tbody", "tfoot"]),
      Co = lo(["td", "th"]),
      wo = lo(["pre", "script", "textarea", "style"]),
      xo = " ",
      _o = "\ufeff",
      So = function (e) {
        return "\ufeff" === e;
      },
      Eo = function (e) {
        return e.replace(/\uFEFF/g, "");
      },
      No = On,
      ko = jn,
      Ao = function (e) {
        return (
          ko(e) && (e = e.parentNode), No(e) && e.hasAttribute("data-mce-caret")
        );
      },
      Ro = function (e) {
        return ko(e) && So(e.data);
      },
      To = function (e) {
        return Ao(e) || Ro(e);
      },
      Do = function (e) {
        return e.firstChild !== e.lastChild || !qn(e.firstChild);
      },
      Oo = function (e) {
        var t = e.container();
        return (
          !!jn(t) &&
          (t.data.charAt(e.offset()) === _o ||
            (e.isAtStart() && Ro(t.previousSibling)))
        );
      },
      Bo = function (e) {
        var t = e.container();
        return (
          !!jn(t) &&
          (t.data.charAt(e.offset() - 1) === _o ||
            (e.isAtEnd() && Ro(t.nextSibling)))
        );
      },
      Po = function (e, t, n) {
        var r,
          o = t.ownerDocument.createElement(e);
        o.setAttribute("data-mce-caret", n ? "before" : "after"),
          o.setAttribute("data-mce-bogus", "all"),
          o.appendChild(
            ((r = document.createElement("br")).setAttribute(
              "data-mce-bogus",
              "1"
            ),
            r)
          );
        var i = t.parentNode;
        return (
          n
            ? i.insertBefore(o, t)
            : t.nextSibling
            ? i.insertBefore(o, t.nextSibling)
            : i.appendChild(o),
          o
        );
      },
      Lo = function (e) {
        return ko(e) && e.data[0] === _o;
      },
      Io = function (e) {
        return ko(e) && e.data[e.data.length - 1] === _o;
      },
      Mo = function (e) {
        return e && e.hasAttribute("data-mce-caret")
          ? ((t = e.getElementsByTagName("br")),
            (n = t[t.length - 1]),
            In(n) && n.parentNode.removeChild(n),
            e.removeAttribute("data-mce-caret"),
            e.removeAttribute("data-mce-bogus"),
            e.removeAttribute("style"),
            e.removeAttribute("_moz_abspos"),
            e)
          : null;
        var t, n;
      },
      Fo = Wn,
      Uo = Kn,
      jo = qn,
      zo = jn,
      Vo = Bn(["script", "style", "textarea"]),
      Ho = Bn([
        "img",
        "input",
        "textarea",
        "hr",
        "iframe",
        "video",
        "audio",
        "object",
        "embed",
      ]),
      qo = Bn(["table"]),
      $o = To,
      Wo = function (e) {
        return (
          !$o(e) &&
          (zo(e) ? !Vo(e.parentNode) : Ho(e) || jo(e) || qo(e) || Ko(e))
        );
      },
      Ko = function (e) {
        return (
          !1 ===
            (function (e) {
              return On(e) && "true" === e.getAttribute("unselectable");
            })(e) && Uo(e)
        );
      },
      Xo = function (e, t) {
        return (
          Wo(e) &&
          (function (e, t) {
            for (e = e.parentNode; e && e !== t; e = e.parentNode) {
              if (Ko(e)) return !1;
              if (Fo(e)) return !0;
            }
            return !0;
          })(e, t)
        );
      },
      Yo = /^[ \t\r\n]*$/,
      Go = function (e) {
        return Yo.test(e);
      },
      Jo = function (e, t) {
        var n,
          r,
          o,
          i = Tt.fromDom(t),
          a = Tt.fromDom(e);
        return (n = a), (r = "pre,code"), (o = S(Pt, i)), Jr(n, r, o).isSome();
      },
      Qo = function (e, t) {
        return (
          (Wo(e) &&
            !1 ===
              (function (e, t) {
                return jn(e) && Go(e.data) && !1 === Jo(e, t);
              })(e, t)) ||
          (function (e) {
            return (
              On(e) &&
              "A" === e.nodeName &&
              !e.hasAttribute("href") &&
              (e.hasAttribute("name") || e.hasAttribute("id"))
            );
          })(e) ||
          Zo(e)
        );
      },
      Zo = Ln("data-mce-bookmark"),
      ei = Ln("data-mce-bogus"),
      ti =
        ((Rr = "data-mce-bogus"),
        (Tr = "all"),
        function (e) {
          return On(e) && e.getAttribute(Rr) === Tr;
        }),
      ni = function (e, t) {
        return (
          void 0 === t && (t = !0),
          (function (e, t) {
            var n,
              r = 0;
            if (Qo(e, e)) return !1;
            if (!(n = e.firstChild)) return !0;
            var o = new so(n, e);
            do {
              if (t) {
                if (ti(n)) {
                  n = o.next(!0);
                  continue;
                }
                if (ei(n)) {
                  n = o.next();
                  continue;
                }
              }
              if (qn(n)) r++, (n = o.next());
              else {
                if (Qo(n, e)) return !1;
                n = o.next();
              }
            } while (n);
            return r <= 1;
          })(e.dom, t)
        );
      },
      ri = function (e, t) {
        return v(e) && (Qo(e, t) || po(Tt.fromDom(e)));
      },
      oi = function (e) {
        return (
          (function (e) {
            return "span" === e.nodeName.toLowerCase();
          })(e) && "bookmark" === e.getAttribute("data-mce-type")
        );
      },
      ii = function (e, t) {
        return (
          jn(e) &&
          e.data.length > 0 &&
          (function (e, t) {
            var n = new so(e, t).prev(!1),
              r = new so(e, t).next(!1),
              o = g(n) || ri(n, t),
              i = g(r) || ri(r, t);
            return o && i;
          })(e, t)
        );
      },
      ai = function (e, t, n) {
        var r = n || t;
        if (On(t) && oi(t)) return t;
        for (var o = t.childNodes, i = o.length - 1; i >= 0; i--)
          ai(e, o[i], r);
        if (On(t)) {
          var a = t.childNodes;
          1 === a.length && oi(a[0]) && t.parentNode.insertBefore(a[0], t);
        }
        return (
          (function (e) {
            return Hn(e) || Vn(e);
          })(t) ||
            Qo(t, r) ||
            (function (e) {
              return !!On(e) && e.childNodes.length > 0;
            })(t) ||
            ii(t, r) ||
            e.remove(t),
          t
        );
      },
      ui = At.makeMap,
      ci =
        /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      si = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      li = /[<>&\"\']/g,
      fi = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
      di = {
        128: "€",
        130: "‚",
        131: "ƒ",
        132: "„",
        133: "…",
        134: "†",
        135: "‡",
        136: "ˆ",
        137: "‰",
        138: "Š",
        139: "‹",
        140: "Œ",
        142: "Ž",
        145: "‘",
        146: "’",
        147: "“",
        148: "”",
        149: "•",
        150: "–",
        151: "—",
        152: "˜",
        153: "™",
        154: "š",
        155: "›",
        156: "œ",
        158: "ž",
        159: "Ÿ",
      },
      mi = {
        '"': "&quot;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "`": "&#96;",
      },
      pi = {
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&apos;": "'",
      },
      gi = function (e, t) {
        var n,
          r,
          o,
          i = {};
        if (e) {
          for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2)
            (r = String.fromCharCode(parseInt(e[n], t))),
              mi[r] || ((o = "&" + e[n + 1] + ";"), (i[r] = o), (i[o] = r));
          return i;
        }
      },
      hi = gi(
        "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
        32
      ),
      vi = function (e, t) {
        return e.replace(t ? ci : si, function (e) {
          return mi[e] || e;
        });
      },
      yi = function (e, t) {
        return e.replace(t ? ci : si, function (e) {
          return e.length > 1
            ? "&#" +
                (1024 * (e.charCodeAt(0) - 55296) +
                  (e.charCodeAt(1) - 56320) +
                  65536) +
                ";"
            : mi[e] || "&#" + e.charCodeAt(0) + ";";
        });
      },
      bi = function (e, t, n) {
        return (
          (n = n || hi),
          e.replace(t ? ci : si, function (e) {
            return mi[e] || n[e] || e;
          })
        );
      },
      Ci = {
        encodeRaw: vi,
        encodeAllRaw: function (e) {
          return ("" + e).replace(li, function (e) {
            return mi[e] || e;
          });
        },
        encodeNumeric: yi,
        encodeNamed: bi,
        getEncodeFunc: function (e, t) {
          var n = gi(t) || hi,
            r = ui(e.replace(/\+/g, ","));
          return r.named && r.numeric
            ? function (e, t) {
                return e.replace(t ? ci : si, function (e) {
                  return void 0 !== mi[e]
                    ? mi[e]
                    : void 0 !== n[e]
                    ? n[e]
                    : e.length > 1
                    ? "&#" +
                      (1024 * (e.charCodeAt(0) - 55296) +
                        (e.charCodeAt(1) - 56320) +
                        65536) +
                      ";"
                    : "&#" + e.charCodeAt(0) + ";";
                });
              }
            : r.named
            ? t
              ? function (e, t) {
                  return bi(e, t, n);
                }
              : bi
            : r.numeric
            ? yi
            : vi;
        },
        decode: function (e) {
          return e.replace(fi, function (e, t) {
            return t
              ? (t =
                  "x" === t.charAt(0).toLowerCase()
                    ? parseInt(t.substr(1), 16)
                    : parseInt(t, 10)) > 65535
                ? ((t -= 65536),
                  String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
                : di[t] || String.fromCharCode(t)
              : pi[e] ||
                  hi[e] ||
                  (function (e) {
                    var t = Tt.fromTag("div").dom;
                    return (t.innerHTML = e), t.textContent || t.innerText || e;
                  })(e);
          });
        },
      },
      wi = {},
      xi = {},
      _i = At.makeMap,
      Si = At.each,
      Ei = At.extend,
      Ni = At.explode,
      ki = At.inArray,
      Ai = function (e, t) {
        return (e = At.trim(e)) ? e.split(t || " ") : [];
      },
      Ri = function (e, t) {
        var n;
        return (
          e &&
            ((n = {}),
            "string" == typeof e && (e = { "*": e }),
            Si(e, function (e, r) {
              n[r] = n[r.toUpperCase()] =
                "map" === t ? _i(e, /[, ]/) : Ni(e, /[, ]/);
            })),
          n
        );
      },
      Ti = function (e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          u,
          c,
          s,
          l,
          f = {},
          d = {},
          m = [],
          p = {},
          g = {},
          h = function (t, n, r) {
            var o = e[t];
            return (
              o
                ? (o = _i(o, /[, ]/, _i(o.toUpperCase(), /[, ]/)))
                : (o = wi[t]) ||
                  ((o = _i(n, " ", _i(n.toUpperCase(), " "))),
                  (o = Ei(o, r)),
                  (wi[t] = o)),
              o
            );
          },
          v =
            ((t = (e = e || {}).schema),
            (c = {}),
            (s = function (e, t, r) {
              var o,
                i,
                a,
                u = function (e, t) {
                  var n,
                    r,
                    o = {};
                  for (n = 0, r = e.length; n < r; n++) o[e[n]] = t || {};
                  return o;
                };
              (t = t || ""), "string" == typeof (r = r || []) && (r = Ai(r));
              var s = Ai(e);
              for (o = s.length; o--; )
                (a = {
                  attributes: u((i = Ai([n, t].join(" ")))),
                  attributesOrder: i,
                  children: u(r, xi),
                }),
                  (c[s[o]] = a);
            }),
            (l = function (e, t) {
              var n,
                r,
                o,
                i,
                a = Ai(e);
              n = a.length;
              for (var u = Ai(t); n--; )
                for (r = c[a[n]], o = 0, i = u.length; o < i; o++)
                  (r.attributes[u[o]] = {}), r.attributesOrder.push(u[o]);
            }),
            wi[t]
              ? wi[t]
              : ((n = "id accesskey class dir lang style tabindex title role"),
                (r =
                  "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),
                (o =
                  "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),
                "html4" !== t &&
                  ((n +=
                    " contenteditable contextmenu draggable dropzone hidden spellcheck translate"),
                  (r +=
                    " article aside details dialog figure main header footer hgroup section nav"),
                  (o +=
                    " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen")),
                "html5-strict" !== t &&
                  ((n += " xml:lang"),
                  (o = [
                    o,
                    (u = "acronym applet basefont big font strike tt"),
                  ].join(" ")),
                  Si(Ai(u), function (e) {
                    s(e, "", o);
                  }),
                  (r = [r, (a = "center dir isindex noframes")].join(" ")),
                  (i = [r, o].join(" ")),
                  Si(Ai(a), function (e) {
                    s(e, "", i);
                  })),
                (i = i || [r, o].join(" ")),
                s("html", "manifest", "head body"),
                s(
                  "head",
                  "",
                  "base command link meta noscript script style title"
                ),
                s("title hr noscript br"),
                s("base", "href target"),
                s("link", "href rel media hreflang type sizes hreflang"),
                s("meta", "name http-equiv content charset"),
                s("style", "media type scoped"),
                s("script", "src async defer type charset"),
                s(
                  "body",
                  "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",
                  i
                ),
                s("address dt dd div caption", "", i),
                s(
                  "h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn",
                  "",
                  o
                ),
                s("blockquote", "cite", i),
                s("ol", "reversed start type", "li"),
                s("ul", "", "li"),
                s("li", "value", i),
                s("dl", "", "dt dd"),
                s("a", "href target rel media hreflang type", o),
                s("q", "cite", o),
                s("ins del", "cite datetime", i),
                s("img", "src sizes srcset alt usemap ismap width height"),
                s("iframe", "src name width height", i),
                s("embed", "src type width height"),
                s(
                  "object",
                  "data type typemustmatch name usemap form width height",
                  [i, "param"].join(" ")
                ),
                s("param", "name value"),
                s("map", "name", [i, "area"].join(" ")),
                s(
                  "area",
                  "alt coords shape href target rel media hreflang type"
                ),
                s(
                  "table",
                  "border",
                  "caption colgroup thead tfoot tbody tr" +
                    ("html4" === t ? " col" : "")
                ),
                s("colgroup", "span", "col"),
                s("col", "span"),
                s("tbody thead tfoot", "", "tr"),
                s("tr", "", "td th"),
                s("td", "colspan rowspan headers", i),
                s("th", "colspan rowspan headers scope abbr", i),
                s(
                  "form",
                  "accept-charset action autocomplete enctype method name novalidate target",
                  i
                ),
                s("fieldset", "disabled form name", [i, "legend"].join(" ")),
                s("label", "form for", o),
                s(
                  "input",
                  "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"
                ),
                s(
                  "button",
                  "disabled form formaction formenctype formmethod formnovalidate formtarget name type value",
                  "html4" === t ? i : o
                ),
                s(
                  "select",
                  "disabled form multiple name required size",
                  "option optgroup"
                ),
                s("optgroup", "disabled label", "option"),
                s("option", "disabled label selected value"),
                s(
                  "textarea",
                  "cols dirname disabled form maxlength name readonly required rows wrap"
                ),
                s("menu", "type label", [i, "li"].join(" ")),
                s("noscript", "", i),
                "html4" !== t &&
                  (s("wbr"),
                  s("ruby", "", [o, "rt rp"].join(" ")),
                  s("figcaption", "", i),
                  s("mark rt rp summary bdi", "", o),
                  s("canvas", "width height", i),
                  s(
                    "video",
                    "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",
                    [i, "track source"].join(" ")
                  ),
                  s(
                    "audio",
                    "src crossorigin preload autoplay mediagroup loop muted controls buffered volume",
                    [i, "track source"].join(" ")
                  ),
                  s("picture", "", "img source"),
                  s("source", "src srcset type media sizes"),
                  s("track", "kind src srclang label default"),
                  s("datalist", "", [o, "option"].join(" ")),
                  s("article section nav aside main header footer", "", i),
                  s("hgroup", "", "h1 h2 h3 h4 h5 h6"),
                  s("figure", "", [i, "figcaption"].join(" ")),
                  s("time", "datetime", o),
                  s("dialog", "open", i),
                  s(
                    "command",
                    "type label icon disabled checked radiogroup command"
                  ),
                  s("output", "for form name", o),
                  s("progress", "value max", o),
                  s("meter", "value min max low high optimum", o),
                  s("details", "open", [i, "summary"].join(" ")),
                  s(
                    "keygen",
                    "autofocus challenge disabled form keytype name"
                  )),
                "html5-strict" !== t &&
                  (l("script", "language xml:space"),
                  l("style", "xml:space"),
                  l(
                    "object",
                    "declare classid code codebase codetype archive standby align border hspace vspace"
                  ),
                  l("embed", "align name hspace vspace"),
                  l("param", "valuetype type"),
                  l("a", "charset name rev shape coords"),
                  l("br", "clear"),
                  l(
                    "applet",
                    "codebase archive code object alt name width height align hspace vspace"
                  ),
                  l("img", "name longdesc align border hspace vspace"),
                  l(
                    "iframe",
                    "longdesc frameborder marginwidth marginheight scrolling align"
                  ),
                  l("font basefont", "size color face"),
                  l("input", "usemap align"),
                  l("select"),
                  l("textarea"),
                  l("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
                  l("ul", "type compact"),
                  l("li", "type"),
                  l("ol dl menu dir", "compact"),
                  l("pre", "width xml:space"),
                  l("hr", "align noshade size width"),
                  l("isindex", "prompt"),
                  l(
                    "table",
                    "summary width frame rules cellspacing cellpadding align bgcolor"
                  ),
                  l("col", "width align char charoff valign"),
                  l("colgroup", "width align char charoff valign"),
                  l("thead", "align char charoff valign"),
                  l("tr", "align char charoff valign bgcolor"),
                  l(
                    "th",
                    "axis align char charoff valign nowrap bgcolor width height"
                  ),
                  l("form", "accept"),
                  l(
                    "td",
                    "abbr axis scope align char charoff valign nowrap bgcolor width height"
                  ),
                  l("tfoot", "align char charoff valign"),
                  l("tbody", "align char charoff valign"),
                  l("area", "nohref"),
                  l("body", "background bgcolor text link vlink alink")),
                "html4" !== t &&
                  (l("input button select textarea", "autofocus"),
                  l("input textarea", "placeholder"),
                  l("a", "download"),
                  l("link script img", "crossorigin"),
                  l("img", "loading"),
                  l("iframe", "sandbox seamless allowfullscreen loading")),
                Si(Ai("a form meter progress dfn"), function (e) {
                  c[e] && delete c[e].children[e];
                }),
                delete c.caption.children.table,
                delete c.script,
                (wi[t] = c),
                c));
        !1 === e.verify_html && (e.valid_elements = "*[*]");
        var y = Ri(e.valid_styles),
          b = Ri(e.invalid_styles, "map"),
          C = Ri(e.valid_classes, "map"),
          w = h(
            "whitespace_elements",
            "pre script noscript style textarea video audio iframe object code"
          ),
          x = h(
            "self_closing_elements",
            "colgroup dd dt li option p td tfoot th thead tr"
          ),
          _ = h(
            "short_ended_elements",
            "area base basefont br col frame hr img input isindex link meta param embed source wbr track"
          ),
          S = h(
            "boolean_attributes",
            "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"
          ),
          E = "td th iframe video audio object script code",
          N = h("non_empty_elements", E + " pre", _),
          k = h("move_caret_before_on_enter_elements", E + " table", _),
          A = h(
            "text_block_elements",
            "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"
          ),
          R = h(
            "block_elements",
            "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",
            A
          ),
          T = h(
            "text_inline_elements",
            "span strong b em i font strike u var cite dfn code mark q sup sub samp"
          );
        Si(
          (
            e.special ||
            "script noscript iframe noframes noembed title style textarea xmp"
          ).split(" "),
          function (e) {
            g[e] = new RegExp("</" + e + "[^>]*>", "gi");
          }
        );
        var D = function (e) {
            return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$");
          },
          O = function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              u,
              c,
              s,
              l,
              d,
              p,
              g,
              h,
              v,
              y,
              b,
              C,
              w = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
              x = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
              _ = /[*?+]/;
            if (e) {
              var S = Ai(e, ",");
              for (
                f["@"] &&
                  ((y = f["@"].attributes), (b = f["@"].attributesOrder)),
                  t = 0,
                  n = S.length;
                t < n;
                t++
              )
                if ((i = w.exec(S[t]))) {
                  if (
                    ((h = i[1]),
                    (s = i[2]),
                    (v = i[3]),
                    (c = i[5]),
                    (a = { attributes: (p = {}), attributesOrder: (g = []) }),
                    "#" === h && (a.paddEmpty = !0),
                    "-" === h && (a.removeEmpty = !0),
                    "!" === i[4] && (a.removeEmptyAttrs = !0),
                    y &&
                      (ce(y, function (e, t) {
                        p[t] = e;
                      }),
                      g.push.apply(g, b)),
                    c)
                  )
                    for (r = 0, o = (c = Ai(c, "|")).length; r < o; r++)
                      if ((i = x.exec(c[r]))) {
                        if (
                          ((u = {}),
                          (d = i[1]),
                          (l = i[2].replace(/[\\:]:/g, ":")),
                          (h = i[3]),
                          (C = i[4]),
                          "!" === d &&
                            ((a.attributesRequired =
                              a.attributesRequired || []),
                            a.attributesRequired.push(l),
                            (u.required = !0)),
                          "-" === d)
                        ) {
                          delete p[l], g.splice(ki(g, l), 1);
                          continue;
                        }
                        h &&
                          ("=" === h &&
                            ((a.attributesDefault = a.attributesDefault || []),
                            a.attributesDefault.push({ name: l, value: C }),
                            (u.defaultValue = C)),
                          ":" === h &&
                            ((a.attributesForced = a.attributesForced || []),
                            a.attributesForced.push({ name: l, value: C }),
                            (u.forcedValue = C)),
                          "<" === h && (u.validValues = _i(C, "?"))),
                          _.test(l)
                            ? ((a.attributePatterns =
                                a.attributePatterns || []),
                              (u.pattern = D(l)),
                              a.attributePatterns.push(u))
                            : (p[l] || g.push(l), (p[l] = u));
                      }
                  y || "@" !== s || ((y = p), (b = g)),
                    v && ((a.outputName = s), (f[v] = a)),
                    _.test(s) ? ((a.pattern = D(s)), m.push(a)) : (f[s] = a);
                }
            }
          },
          B = function (e) {
            (f = {}),
              (m = []),
              O(e),
              Si(v, function (e, t) {
                d[t] = e.children;
              });
          },
          P = function (e) {
            var t = /^(~)?(.+)$/;
            e &&
              ((wi.text_block_elements = wi.block_elements = null),
              Si(Ai(e, ","), function (e) {
                var n = t.exec(e),
                  r = "~" === n[1],
                  o = r ? "span" : "div",
                  i = n[2];
                if (
                  ((d[i] = d[o]),
                  (p[i] = o),
                  r || ((R[i.toUpperCase()] = {}), (R[i] = {})),
                  !f[i])
                ) {
                  var a = f[o];
                  delete (a = Ei({}, a)).removeEmptyAttrs,
                    delete a.removeEmpty,
                    (f[i] = a);
                }
                Si(d, function (e, t) {
                  e[o] && ((d[t] = e = Ei({}, d[t])), (e[i] = e[o]));
                });
              }));
          },
          L = function (t) {
            var n =
              /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
            (wi[e.schema] = null),
              t &&
                Si(Ai(t, ","), function (e) {
                  var t,
                    r,
                    o = n.exec(e);
                  o &&
                    ((r = o[1]),
                    (t = r ? d[o[2]] : (d[o[2]] = { "#comment": {} })),
                    (t = d[o[2]]),
                    Si(Ai(o[3], "|"), function (e) {
                      "-" === r ? delete t[e] : (t[e] = {});
                    }));
                });
          },
          I = function (e) {
            var t,
              n = f[e];
            if (n) return n;
            for (t = m.length; t--; ) if ((n = m[t]).pattern.test(e)) return n;
          };
        return (
          e.valid_elements
            ? B(e.valid_elements)
            : (Si(v, function (e, t) {
                (f[t] = {
                  attributes: e.attributes,
                  attributesOrder: e.attributesOrder,
                }),
                  (d[t] = e.children);
              }),
              "html5" !== e.schema &&
                Si(Ai("strong/b em/i"), function (e) {
                  var t = Ai(e, "/");
                  f[t[1]].outputName = t[0];
                }),
              Si(
                Ai(
                  "ol ul sub sup blockquote span font a table tbody strong em b i"
                ),
                function (e) {
                  f[e] && (f[e].removeEmpty = !0);
                }
              ),
              Si(
                Ai("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),
                function (e) {
                  f[e].paddEmpty = !0;
                }
              ),
              Si(Ai("span"), function (e) {
                f[e].removeEmptyAttrs = !0;
              })),
          P(e.custom_elements),
          L(e.valid_children),
          O(e.extended_valid_elements),
          L("+ol[ul|ol],+ul[ul|ol]"),
          Si(
            {
              dd: "dl",
              dt: "dl",
              li: "ul ol",
              td: "tr",
              th: "tr",
              tr: "tbody thead tfoot",
              tbody: "table",
              thead: "table",
              tfoot: "table",
              legend: "fieldset",
              area: "map",
              param: "video audio object",
            },
            function (e, t) {
              f[t] && (f[t].parentsRequired = Ai(e));
            }
          ),
          e.invalid_elements &&
            Si(Ni(e.invalid_elements), function (e) {
              f[e] && delete f[e];
            }),
          I("span") || O("span[!data-mce-type|*]"),
          {
            children: d,
            elements: f,
            getValidStyles: function () {
              return y;
            },
            getValidClasses: function () {
              return C;
            },
            getBlockElements: function () {
              return R;
            },
            getInvalidStyles: function () {
              return b;
            },
            getShortEndedElements: function () {
              return _;
            },
            getTextBlockElements: function () {
              return A;
            },
            getTextInlineElements: function () {
              return T;
            },
            getBoolAttrs: function () {
              return S;
            },
            getElementRule: I,
            getSelfClosingElements: function () {
              return x;
            },
            getNonEmptyElements: function () {
              return N;
            },
            getMoveCaretBeforeOnEnterElements: function () {
              return k;
            },
            getWhiteSpaceElements: function () {
              return w;
            },
            getSpecialElements: function () {
              return g;
            },
            isValidChild: function (e, t) {
              var n = d[e.toLowerCase()];
              return !(!n || !n[t.toLowerCase()]);
            },
            isValid: function (e, t) {
              var n,
                r,
                o = I(e);
              if (o) {
                if (!t) return !0;
                if (o.attributes[t]) return !0;
                if ((n = o.attributePatterns))
                  for (r = n.length; r--; ) if (n[r].pattern.test(e)) return !0;
              }
              return !1;
            },
            getCustomElements: function () {
              return p;
            },
            addValidElements: O,
            setValidElements: B,
            addCustomElements: P,
            addValidChildren: L,
          }
        );
      },
      Di = function (e, t, n, r) {
        var o = function (e) {
          return (e = parseInt(e, 10).toString(16)).length > 1 ? e : "0" + e;
        };
        return "#" + o(t) + o(n) + o(r);
      },
      Oi = function (e, t) {
        var n,
          r,
          o,
          i = this,
          a = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
          u =
            /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
          c = /\s*([^:]+):\s*([^;]+);?/g,
          s = /\s+$/,
          l = {},
          f = "\ufeff";
        (e = e || {}),
          t && ((r = t.getValidStyles()), (o = t.getInvalidStyles()));
        var d = "\\\" \\' \\; \\: ; : \ufeff".split(" ");
        for (n = 0; n < d.length; n++) (l[d[n]] = f + n), (l[f + n] = d[n]);
        return {
          toHex: function (e) {
            return e.replace(a, Di);
          },
          parse: function (t) {
            var r,
              o,
              d,
              m,
              p,
              g,
              h,
              v,
              y = {},
              b = e.url_converter,
              C = e.url_converter_scope || i,
              w = function (e, t, r) {
                var o = y[e + "-top" + t];
                if (o) {
                  var i = y[e + "-right" + t];
                  if (i) {
                    var a = y[e + "-bottom" + t];
                    if (a) {
                      var u = y[e + "-left" + t];
                      if (u) {
                        var c = [o, i, a, u];
                        for (n = c.length - 1; n-- && c[n] === c[n + 1]; );
                        (n > -1 && r) ||
                          ((y[e + t] = -1 === n ? c[0] : c.join(" ")),
                          delete y[e + "-top" + t],
                          delete y[e + "-right" + t],
                          delete y[e + "-bottom" + t],
                          delete y[e + "-left" + t]);
                      }
                    }
                  }
                }
              },
              x = function (e) {
                var t,
                  n = y[e];
                if (n) {
                  for (t = (n = n.split(" ")).length; t--; )
                    if (n[t] !== n[0]) return !1;
                  return (y[e] = n[0]), !0;
                }
              },
              _ = function (e) {
                return (m = !0), l[e];
              },
              S = function (e, t) {
                return (
                  m &&
                    (e = e.replace(/\uFEFF[0-9]/g, function (e) {
                      return l[e];
                    })),
                  t || (e = e.replace(/\\([\'\";:])/g, "$1")),
                  e
                );
              },
              E = function (e) {
                return String.fromCharCode(parseInt(e.slice(1), 16));
              },
              N = function (e) {
                return e.replace(/\\[0-9a-f]+/gi, E);
              },
              k = function (t, n, r, o, i, a) {
                if ((i = i || a))
                  return "'" + (i = S(i)).replace(/\'/g, "\\'") + "'";
                if (((n = S(n || r || o)), !e.allow_script_urls)) {
                  var u = n.replace(/[\s\r\n]+/g, "");
                  if (/(java|vb)script:/i.test(u)) return "";
                  if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(u))
                    return "";
                }
                return (
                  b && (n = b.call(C, n, "style")),
                  "url('" + n.replace(/\'/g, "\\'") + "')"
                );
              };
            if (t) {
              for (
                t = (t = t.replace(/[\u0000-\u001F]/g, ""))
                  .replace(/\\[\"\';:\uFEFF]/g, _)
                  .replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
                    return e.replace(/[;:]/g, _);
                  });
                (r = c.exec(t));

              )
                if (
                  ((c.lastIndex = r.index + r[0].length),
                  (o = r[1].replace(s, "").toLowerCase()),
                  (d = r[2].replace(s, "")),
                  o && d)
                ) {
                  if (
                    ((o = N(o)),
                    (d = N(d)),
                    -1 !== o.indexOf(f) || -1 !== o.indexOf('"'))
                  )
                    continue;
                  if (
                    !e.allow_script_urls &&
                    ("behavior" === o || /expression\s*\(|\/\*|\*\//.test(d))
                  )
                    continue;
                  "font-weight" === o && "700" === d
                    ? (d = "bold")
                    : ("color" !== o && "background-color" !== o) ||
                      (d = d.toLowerCase()),
                    (d = (d = d.replace(a, Di)).replace(u, k)),
                    (y[o] = m ? S(d, !0) : d);
                }
              w("border", "", !0),
                w("border", "-width"),
                w("border", "-color"),
                w("border", "-style"),
                w("padding", ""),
                w("margin", ""),
                (p = "border"),
                (h = "border-style"),
                (v = "border-color"),
                x((g = "border-width")) &&
                  x(h) &&
                  x(v) &&
                  ((y[p] = y[g] + " " + y[h] + " " + y[v]),
                  delete y[g],
                  delete y[h],
                  delete y[v]),
                "medium none" === y.border && delete y.border,
                "none" === y["border-image"] && delete y["border-image"];
            }
            return y;
          },
          serialize: function (e, t) {
            var n = "",
              i = function (t) {
                var o,
                  i = r[t];
                if (i)
                  for (var a = 0, u = i.length; a < u; a++)
                    (t = i[a]),
                      (o = e[t]) &&
                        (n += (n.length > 0 ? " " : "") + t + ": " + o + ";");
              };
            return (
              t && r
                ? (i("*"), i(t))
                : ce(e, function (e, r) {
                    !e ||
                      (o &&
                        !(function (e, t) {
                          var n = o["*"];
                          return !((n && n[e]) || ((n = o[t]) && n[e]));
                        })(r, t)) ||
                      (n += (n.length > 0 ? " " : "") + r + ": " + e + ";");
                  }),
              n
            );
          },
        };
      },
      Bi = /^(?:mouse|contextmenu)|click/,
      Pi = {
        keyLocation: 1,
        layerX: 1,
        layerY: 1,
        returnValue: 1,
        webkitMovementX: 1,
        webkitMovementY: 1,
        keyIdentifier: 1,
        mozPressure: 1,
      },
      Li = O,
      Ii = B,
      Mi = function (e, t, n, r) {
        e.addEventListener
          ? e.addEventListener(t, n, r || !1)
          : e.attachEvent && e.attachEvent("on" + t, n);
      },
      Fi = function (e, t, n, r) {
        e.removeEventListener
          ? e.removeEventListener(t, n, r || !1)
          : e.detachEvent && e.detachEvent("on" + t, n);
      },
      Ui = function (e, t) {
        var n,
          r = t || {};
        for (n in e) Pi[n] || (r[n] = e[n]);
        if (
          (r.target || (r.target = r.srcElement || document),
          r.composedPath &&
            (r.composedPath = function () {
              return e.composedPath();
            }),
          e &&
            (function (e) {
              return Bi.test(e.type);
            })(e) &&
            void 0 === e.pageX &&
            void 0 !== e.clientX)
        ) {
          var o = r.target.ownerDocument || document,
            i = o.documentElement,
            a = o.body;
          (r.pageX =
            e.clientX +
            ((i && i.scrollLeft) || (a && a.scrollLeft) || 0) -
            ((i && i.clientLeft) || (a && a.clientLeft) || 0)),
            (r.pageY =
              e.clientY +
              ((i && i.scrollTop) || (a && a.scrollTop) || 0) -
              ((i && i.clientTop) || (a && a.clientTop) || 0));
        }
        return (
          (r.preventDefault = function () {
            (r.defaultPrevented = !0),
              (r.isDefaultPrevented = Ii),
              e &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
          }),
          (r.stopPropagation = function () {
            (r.cancelBubble = !0),
              (r.isPropagationStopped = Ii),
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : (e.cancelBubble = !0));
          }),
          (r.stopImmediatePropagation = function () {
            (r.isImmediatePropagationStopped = Ii), r.stopPropagation();
          }),
          !1 ===
            (function (e) {
              return e.isDefaultPrevented === Ii || e.isDefaultPrevented === Li;
            })(r) &&
            ((r.isDefaultPrevented = !0 === r.defaultPrevented ? Ii : Li),
            (r.isPropagationStopped = !0 === r.cancelBubble ? Ii : Li),
            (r.isImmediatePropagationStopped = Li)),
          void 0 === r.metaKey && (r.metaKey = !1),
          r
        );
      },
      ji = function (e, t, n) {
        var r = e.document,
          o = { type: "ready" };
        if (n.domLoaded) t(o);
        else {
          var i = function () {
            Fi(e, "DOMContentLoaded", i),
              Fi(e, "load", i),
              n.domLoaded || ((n.domLoaded = !0), t(o)),
              (e = null);
          };
          "complete" === r.readyState ||
          ("interactive" === r.readyState && r.body)
            ? i()
            : Mi(e, "DOMContentLoaded", i),
            n.domLoaded || Mi(e, "load", i);
        }
      },
      zi = (function () {
        function e() {
          (this.domLoaded = !1),
            (this.events = {}),
            (this.count = 1),
            (this.expando = "mce-data-" + (+new Date()).toString(32)),
            (this.hasMouseEnterLeave =
              "onmouseenter" in document.documentElement),
            (this.hasFocusIn = "onfocusin" in document.documentElement),
            (this.count = 1);
        }
        return (
          (e.prototype.bind = function (e, t, n, r) {
            var o,
              i,
              a,
              u,
              c,
              s,
              l,
              f = this,
              d = window,
              m = function (e) {
                f.executeHandlers(Ui(e || d.event), o);
              };
            if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
              e[f.expando]
                ? (o = e[f.expando])
                : ((o = f.count++), (e[f.expando] = o), (f.events[o] = {})),
                (r = r || e);
              var p = t.split(" ");
              for (a = p.length; a--; )
                (s = m),
                  (c = l = !1),
                  "DOMContentLoaded" === (u = p[a]) && (u = "ready"),
                  f.domLoaded && "ready" === u && "complete" === e.readyState
                    ? n.call(r, Ui({ type: u }))
                    : (f.hasMouseEnterLeave ||
                        ((c = f.mouseEnterLeave[u]) &&
                          (s = function (e) {
                            var t = e.currentTarget,
                              n = e.relatedTarget;
                            if (n && t.contains) n = t.contains(n);
                            else for (; n && n !== t; ) n = n.parentNode;
                            n ||
                              (((e = Ui(e || d.event)).type =
                                "mouseout" === e.type
                                  ? "mouseleave"
                                  : "mouseenter"),
                              (e.target = t),
                              f.executeHandlers(e, o));
                          })),
                      f.hasFocusIn ||
                        ("focusin" !== u && "focusout" !== u) ||
                        ((l = !0),
                        (c = "focusin" === u ? "focus" : "blur"),
                        (s = function (e) {
                          ((e = Ui(e || d.event)).type =
                            "focus" === e.type ? "focusin" : "focusout"),
                            f.executeHandlers(e, o);
                        })),
                      (i = f.events[o][u])
                        ? "ready" === u && f.domLoaded
                          ? n(Ui({ type: u }))
                          : i.push({ func: n, scope: r })
                        : ((f.events[o][u] = i = [{ func: n, scope: r }]),
                          (i.fakeName = c),
                          (i.capture = l),
                          (i.nativeHandler = s),
                          "ready" === u ? ji(e, s, f) : Mi(e, c || u, s, l)));
              return (e = i = null), n;
            }
          }),
          (e.prototype.unbind = function (e, t, n) {
            var r, o, i, a, u;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            var c = e[this.expando];
            if (c) {
              if (((u = this.events[c]), t)) {
                var s = t.split(" ");
                for (o = s.length; o--; )
                  if ((r = u[(a = s[o])])) {
                    if (n)
                      for (i = r.length; i--; )
                        if (r[i].func === n) {
                          var l = r.nativeHandler,
                            f = r.fakeName,
                            d = r.capture;
                          ((r = r
                            .slice(0, i)
                            .concat(r.slice(i + 1))).nativeHandler = l),
                            (r.fakeName = f),
                            (r.capture = d),
                            (u[a] = r);
                        }
                    (n && 0 !== r.length) ||
                      (delete u[a],
                      Fi(e, r.fakeName || a, r.nativeHandler, r.capture));
                  }
              } else
                ce(u, function (t, n) {
                  Fi(e, t.fakeName || n, t.nativeHandler, t.capture);
                }),
                  (u = {});
              for (a in u) if (ve(u, a)) return this;
              delete this.events[c];
              try {
                delete e[this.expando];
              } catch (m) {
                e[this.expando] = null;
              }
            }
            return this;
          }),
          (e.prototype.fire = function (e, t, n) {
            var r;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            var o = Ui(null, n);
            (o.type = t), (o.target = e);
            do {
              (r = e[this.expando]) && this.executeHandlers(o, r),
                (e =
                  e.parentNode ||
                  e.ownerDocument ||
                  e.defaultView ||
                  e.parentWindow);
            } while (e && !o.isPropagationStopped());
            return this;
          }),
          (e.prototype.clean = function (e) {
            var t, n;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            if (
              (e[this.expando] && this.unbind(e),
              e.getElementsByTagName || (e = e.document),
              e && e.getElementsByTagName)
            )
              for (
                this.unbind(e), t = (n = e.getElementsByTagName("*")).length;
                t--;

              )
                (e = n[t])[this.expando] && this.unbind(e);
            return this;
          }),
          (e.prototype.destroy = function () {
            this.events = {};
          }),
          (e.prototype.cancel = function (e) {
            return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
          }),
          (e.prototype.executeHandlers = function (e, t) {
            var n = this.events[t],
              r = n && n[e.type];
            if (r)
              for (var o = 0, i = r.length; o < i; o++) {
                var a = r[o];
                if (
                  (a && !1 === a.func.call(a.scope, e) && e.preventDefault(),
                  e.isImmediatePropagationStopped())
                )
                  return;
              }
          }),
          (e.Event = new e()),
          e
        );
      })(),
      Vi = "sizzle" + -new Date(),
      Hi = window.document,
      qi = 0,
      $i = 0,
      Wi = Ea(),
      Ki = Ea(),
      Xi = Ea(),
      Yi = function (e, t) {
        return e === t && (jr = !0), 0;
      },
      Gi = "undefined",
      Ji = 1 << 31,
      Qi = {}.hasOwnProperty,
      Zi = [],
      ea = Zi.pop,
      ta = Zi.push,
      na = Zi.push,
      ra = Zi.slice,
      oa =
        Zi.indexOf ||
        function (e) {
          for (var t = 0, n = this.length; t < n; t++)
            if (this[t] === e) return t;
          return -1;
        },
      ia = "[\\x20\\t\\r\\n\\f]",
      aa = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ua =
        "\\[[\\x20\\t\\r\\n\\f]*(" +
        aa +
        ")(?:" +
        ia +
        "*([*^$|!~]?=)" +
        ia +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        aa +
        "))|)" +
        ia +
        "*\\]",
      ca =
        ":(" +
        aa +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ua +
        ")*)|.*)\\)|)",
      sa = new RegExp(
        "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
        "g"
      ),
      la = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
      fa = new RegExp(
        "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
      ),
      da = new RegExp(
        "=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]",
        "g"
      ),
      ma = new RegExp(ca),
      pa = new RegExp("^" + aa + "$"),
      ga = {
        ID: new RegExp("^#(" + aa + ")"),
        CLASS: new RegExp("^\\.(" + aa + ")"),
        TAG: new RegExp("^(" + aa + "|[*])"),
        ATTR: new RegExp("^" + ua),
        PSEUDO: new RegExp("^" + ca),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
          "i"
        ),
        bool: new RegExp(
          "^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$",
          "i"
        ),
        needsContext: new RegExp(
          "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      ha = /^(?:input|select|textarea|button)$/i,
      va = /^h\d$/i,
      ya = /^[^{]+\{\s*\[native \w/,
      ba = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Ca = /[+~]/,
      wa = /'|\\/g,
      xa = new RegExp(
        "\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)",
        "ig"
      ),
      _a = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      };
    try {
      na.apply((Zi = ra.call(Hi.childNodes)), Hi.childNodes),
        Zi[Hi.childNodes.length].nodeType;
    } catch (VN) {
      na = {
        apply: Zi.length
          ? function (e, t) {
              ta.apply(e, ra.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    var Sa = function (e, t, n, r) {
      var o, i, a, u, c, s, l, f, d, m;
      if (
        ((t ? t.ownerDocument || t : Hi) !== Vr && zr(t),
        (n = n || []),
        !e || "string" != typeof e)
      )
        return n;
      if (1 !== (u = (t = t || Vr).nodeType) && 9 !== u) return [];
      if (qr && !r) {
        if ((o = ba.exec(e)))
          if ((a = o[1])) {
            if (9 === u) {
              if (!(i = t.getElementById(a)) || !i.parentNode) return n;
              if (i.id === a) return n.push(i), n;
            } else if (
              t.ownerDocument &&
              (i = t.ownerDocument.getElementById(a)) &&
              Kr(t, i) &&
              i.id === a
            )
              return n.push(i), n;
          } else {
            if (o[2]) return na.apply(n, t.getElementsByTagName(e)), n;
            if ((a = o[3]) && Dr.getElementsByClassName)
              return na.apply(n, t.getElementsByClassName(a)), n;
          }
        if (Dr.qsa && (!$r || !$r.test(e))) {
          if (
            ((f = l = Vi),
            (d = t),
            (m = 9 === u && e),
            1 === u && "object" !== t.nodeName.toLowerCase())
          ) {
            for (
              s = Lr(e),
                (l = t.getAttribute("id"))
                  ? (f = l.replace(wa, "\\$&"))
                  : t.setAttribute("id", f),
                f = "[id='" + f + "'] ",
                c = s.length;
              c--;

            )
              s[c] = f + Da(s[c]);
            (d = (Ca.test(e) && Ra(t.parentNode)) || t), (m = s.join(","));
          }
          if (m)
            try {
              return na.apply(n, d.querySelectorAll(m)), n;
            } catch (p) {
            } finally {
              l || t.removeAttribute("id");
            }
        }
      }
      return Mr(e.replace(sa, "$1"), t, n, r);
    };
    function Ea() {
      var e = [];
      return function t(n, r) {
        return (
          e.push(n + " ") > Or.cacheLength && delete t[e.shift()],
          (t[n + " "] = r)
        );
      };
    }
    function Na(e) {
      return (e[Vi] = !0), e;
    }
    function ka(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || Ji) - (~e.sourceIndex || Ji);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function Aa(e) {
      return Na(function (t) {
        return (
          (t = +t),
          Na(function (n, r) {
            for (var o, i = e([], n.length, t), a = i.length; a--; )
              n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
          })
        );
      });
    }
    function Ra(e) {
      return e && typeof e.getElementsByTagName !== Gi && e;
    }
    function Ta() {}
    function Da(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function Oa(e, t, n) {
      var r = t.dir,
        o = n && "parentNode" === r,
        i = $i++;
      return t.first
        ? function (t, n, i) {
            for (; (t = t[r]); ) if (1 === t.nodeType || o) return e(t, n, i);
          }
        : function (t, n, a) {
            var u,
              c,
              s = [qi, i];
            if (a) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || o) {
                  if (
                    (u = (c = t[Vi] || (t[Vi] = {}))[r]) &&
                    u[0] === qi &&
                    u[1] === i
                  )
                    return (s[2] = u[2]);
                  if (((c[r] = s), (s[2] = e(t, n, a)))) return !0;
                }
          };
    }
    function Ba(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function Pa(e, t, n, r, o) {
      for (var i, a = [], u = 0, c = e.length, s = null != t; u < c; u++)
        (i = e[u]) && ((n && !n(i, r, o)) || (a.push(i), s && t.push(u)));
      return a;
    }
    function La(e, t, n, r, o, i) {
      return (
        r && !r[Vi] && (r = La(r)),
        o && !o[Vi] && (o = La(o, i)),
        Na(function (i, a, u, c) {
          var s,
            l,
            f,
            d = [],
            m = [],
            p = a.length,
            g =
              i ||
              (function (e, t, n) {
                for (var r = 0, o = t.length; r < o; r++) Sa(e, t[r], n);
                return n;
              })(t || "*", u.nodeType ? [u] : u, []),
            h = !e || (!i && t) ? g : Pa(g, d, e, u, c),
            v = n ? (o || (i ? e : p || r) ? [] : a) : h;
          if ((n && n(h, v, u, c), r))
            for (s = Pa(v, m), r(s, [], u, c), l = s.length; l--; )
              (f = s[l]) && (v[m[l]] = !(h[m[l]] = f));
          if (i) {
            if (o || e) {
              if (o) {
                for (s = [], l = v.length; l--; )
                  (f = v[l]) && s.push((h[l] = f));
                o(null, (v = []), s, c);
              }
              for (l = v.length; l--; )
                (f = v[l]) &&
                  (s = o ? oa.call(i, f) : d[l]) > -1 &&
                  (i[s] = !(a[s] = f));
            }
          } else (v = Pa(v === a ? v.splice(p, v.length) : v)), o ? o(null, a, v, c) : na.apply(a, v);
        })
      );
    }
    function Ia(e) {
      for (
        var t,
          n,
          r,
          o = e.length,
          i = Or.relative[e[0].type],
          a = i || Or.relative[" "],
          u = i ? 1 : 0,
          c = Oa(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          s = Oa(
            function (e) {
              return oa.call(t, e) > -1;
            },
            a,
            !0
          ),
          l = [
            function (e, n, r) {
              var o =
                (!i && (r || n !== Fr)) ||
                ((t = n).nodeType ? c(e, n, r) : s(e, n, r));
              return (t = null), o;
            },
          ];
        u < o;
        u++
      )
        if ((n = Or.relative[e[u].type])) l = [Oa(Ba(l), n)];
        else {
          if ((n = Or.filter[e[u].type].apply(null, e[u].matches))[Vi]) {
            for (r = ++u; r < o && !Or.relative[e[r].type]; r++);
            return La(
              u > 1 && Ba(l),
              u > 1 &&
                Da(
                  e
                    .slice(0, u - 1)
                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                ).replace(sa, "$1"),
              n,
              u < r && Ia(e.slice(u, r)),
              r < o && Ia((e = e.slice(r))),
              r < o && Da(e)
            );
          }
          l.push(n);
        }
      return Ba(l);
    }
    (Dr = Sa.support = {}),
      (Pr = Sa.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (zr = Sa.setDocument =
        function (e) {
          var t,
            n = e ? e.ownerDocument || e : Hi,
            r = n.defaultView;
          return n !== Vr && 9 === n.nodeType && n.documentElement
            ? ((Vr = n),
              (Hr = n.documentElement),
              (qr = !Pr(n)),
              r &&
                r !==
                  (function (e) {
                    try {
                      return e.top;
                    } catch (t) {}
                    return null;
                  })(r) &&
                (r.addEventListener
                  ? r.addEventListener(
                      "unload",
                      function () {
                        zr();
                      },
                      !1
                    )
                  : r.attachEvent &&
                    r.attachEvent("onunload", function () {
                      zr();
                    })),
              (Dr.attributes = !0),
              (Dr.getElementsByTagName = !0),
              (Dr.getElementsByClassName = ya.test(n.getElementsByClassName)),
              (Dr.getById = !0),
              (Or.find.ID = function (e, t) {
                if (typeof t.getElementById !== Gi && qr) {
                  var n = t.getElementById(e);
                  return n && n.parentNode ? [n] : [];
                }
              }),
              (Or.filter.ID = function (e) {
                var t = e.replace(xa, _a);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (Or.find.TAG = Dr.getElementsByTagName
                ? function (e, t) {
                    if (typeof t.getElementsByTagName !== Gi)
                      return t.getElementsByTagName(e);
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      o = 0,
                      i = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return i;
                  }),
              (Or.find.CLASS =
                Dr.getElementsByClassName &&
                function (e, t) {
                  if (qr) return t.getElementsByClassName(e);
                }),
              (Wr = []),
              ($r = []),
              (Dr.disconnectedMatch = !0),
              ($r = $r.length && new RegExp($r.join("|"))),
              (Wr = Wr.length && new RegExp(Wr.join("|"))),
              (t = ya.test(Hr.compareDocumentPosition)),
              (Kr =
                t || ya.test(Hr.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (Yi = t
                ? function (e, t) {
                    if (e === t) return (jr = !0), 0;
                    var r =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 &
                        (r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!Dr.sortDetached && t.compareDocumentPosition(e) === r)
                        ? e === n || (e.ownerDocument === Hi && Kr(Hi, e))
                          ? -1
                          : t === n || (t.ownerDocument === Hi && Kr(Hi, t))
                          ? 1
                          : Ur
                          ? oa.call(Ur, e) - oa.call(Ur, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (jr = !0), 0;
                    var r,
                      o = 0,
                      i = e.parentNode,
                      a = t.parentNode,
                      u = [e],
                      c = [t];
                    if (!i || !a)
                      return e === n
                        ? -1
                        : t === n
                        ? 1
                        : i
                        ? -1
                        : a
                        ? 1
                        : Ur
                        ? oa.call(Ur, e) - oa.call(Ur, t)
                        : 0;
                    if (i === a) return ka(e, t);
                    for (r = e; (r = r.parentNode); ) u.unshift(r);
                    for (r = t; (r = r.parentNode); ) c.unshift(r);
                    for (; u[o] === c[o]; ) o++;
                    return o
                      ? ka(u[o], c[o])
                      : u[o] === Hi
                      ? -1
                      : c[o] === Hi
                      ? 1
                      : 0;
                  }),
              n)
            : Vr;
        }),
      (Sa.matches = function (e, t) {
        return Sa(e, null, null, t);
      }),
      (Sa.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== Vr && zr(e),
          (t = t.replace(da, "='$1']")),
          Dr.matchesSelector &&
            qr &&
            (!Wr || !Wr.test(t)) &&
            (!$r || !$r.test(t)))
        )
          try {
            var n = (void 0).call(e, t);
            if (
              n ||
              Dr.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (VN) {}
        return Sa(t, Vr, null, [e]).length > 0;
      }),
      (Sa.contains = function (e, t) {
        return (e.ownerDocument || e) !== Vr && zr(e), Kr(e, t);
      }),
      (Sa.attr = function (e, t) {
        (e.ownerDocument || e) !== Vr && zr(e);
        var n = Or.attrHandle[t.toLowerCase()],
          r =
            n && Qi.call(Or.attrHandle, t.toLowerCase())
              ? n(e, t, !qr)
              : void 0;
        return void 0 !== r
          ? r
          : Dr.attributes || !qr
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (Sa.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (Sa.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          o = 0;
        if (
          ((jr = !Dr.detectDuplicates),
          (Ur = !Dr.sortStable && e.slice(0)),
          e.sort(Yi),
          jr)
        ) {
          for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
          for (; r--; ) e.splice(n[r], 1);
        }
        return (Ur = null), e;
      }),
      (Br = Sa.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += Br(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += Br(t);
          return n;
        }),
      ((Or = Sa.selectors =
        {
          cacheLength: 50,
          createPseudo: Na,
          match: ga,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(xa, _a)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(xa, _a)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || Sa.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && Sa.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return ga.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      ma.test(n) &&
                      (t = Lr(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(xa, _a).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = Wi[e + " "];
              return (
                t ||
                ((t = new RegExp(
                  "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + ia + "|$)"
                )) &&
                  Wi(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (typeof e.getAttribute !== Gi &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (r) {
                var o = Sa.attr(r, e);
                return null == o
                  ? "!=" === t
                  : !t ||
                      ((o += ""),
                      "=" === t
                        ? o === n
                        : "!=" === t
                        ? o !== n
                        : "^=" === t
                        ? n && 0 === o.indexOf(n)
                        : "*=" === t
                        ? n && o.indexOf(n) > -1
                        : "$=" === t
                        ? n && o.slice(-n.length) === n
                        : "~=" === t
                        ? (" " + o + " ").indexOf(n) > -1
                        : "|=" === t &&
                          (o === n || o.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, r, o) {
              var i = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                u = "of-type" === t;
              return 1 === r && 0 === o
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, c) {
                    var s,
                      l,
                      f,
                      d,
                      m,
                      p,
                      g = i !== a ? "nextSibling" : "previousSibling",
                      h = t.parentNode,
                      v = u && t.nodeName.toLowerCase(),
                      y = !c && !u;
                    if (h) {
                      if (i) {
                        for (; g; ) {
                          for (f = t; (f = f[g]); )
                            if (
                              u
                                ? f.nodeName.toLowerCase() === v
                                : 1 === f.nodeType
                            )
                              return !1;
                          p = g = "only" === e && !p && "nextSibling";
                        }
                        return !0;
                      }
                      if (((p = [a ? h.firstChild : h.lastChild]), a && y)) {
                        for (
                          m =
                            (s = (l = h[Vi] || (h[Vi] = {}))[e] || [])[0] ===
                              qi && s[1],
                            d = s[0] === qi && s[2],
                            f = m && h.childNodes[m];
                          (f = (++m && f && f[g]) || (d = m = 0) || p.pop());

                        )
                          if (1 === f.nodeType && ++d && f === t) {
                            l[e] = [qi, m, d];
                            break;
                          }
                      } else if (
                        y &&
                        (s = (t[Vi] || (t[Vi] = {}))[e]) &&
                        s[0] === qi
                      )
                        d = s[1];
                      else
                        for (
                          ;
                          (f = (++m && f && f[g]) || (d = m = 0) || p.pop()) &&
                          ((u
                            ? f.nodeName.toLowerCase() !== v
                            : 1 !== f.nodeType) ||
                            !++d ||
                            (y && ((f[Vi] || (f[Vi] = {}))[e] = [qi, d]),
                            f !== t));

                        );
                      return (d -= o) === r || (d % r == 0 && d / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                r =
                  Or.pseudos[e] ||
                  Or.setFilters[e.toLowerCase()] ||
                  Sa.error("unsupported pseudo: " + e);
              return r[Vi]
                ? r(t)
                : r.length > 1
                ? ((n = [e, e, "", t]),
                  Or.setFilters.hasOwnProperty(e.toLowerCase())
                    ? Na(function (e, n) {
                        for (var o, i = r(e, t), a = i.length; a--; )
                          e[(o = oa.call(e, i[a]))] = !(n[o] = i[a]);
                      })
                    : function (e) {
                        return r(e, 0, n);
                      })
                : r;
            },
          },
          pseudos: {
            not: Na(function (e) {
              var t = [],
                n = [],
                r = Ir(e.replace(sa, "$1"));
              return r[Vi]
                ? Na(function (e, t, n, o) {
                    for (var i, a = r(e, null, o, []), u = e.length; u--; )
                      (i = a[u]) && (e[u] = !(t[u] = i));
                  })
                : function (e, o, i) {
                    return (
                      (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: Na(function (e) {
              return function (t) {
                return Sa(e, t).length > 0;
              };
            }),
            contains: Na(function (e) {
              return (
                (e = e.replace(xa, _a)),
                function (t) {
                  return (
                    (t.textContent || t.innerText || Br(t)).indexOf(e) > -1
                  );
                }
              );
            }),
            lang: Na(function (e) {
              return (
                pa.test(e || "") || Sa.error("unsupported lang: " + e),
                (e = e.replace(xa, _a).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = qr
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = window.location && window.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === Hr;
            },
            focus: function (e) {
              return (
                e === Vr.activeElement &&
                (!Vr.hasFocus || Vr.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return !1 === e.disabled;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !Or.pseudos.empty(e);
            },
            header: function (e) {
              return va.test(e.nodeName);
            },
            input: function (e) {
              return ha.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: Aa(function () {
              return [0];
            }),
            last: Aa(function (e, t) {
              return [t - 1];
            }),
            eq: Aa(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: Aa(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: Aa(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: Aa(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: Aa(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = Or.pseudos.eq),
      $(["radio", "checkbox", "file", "password", "image"], function (e) {
        var t;
        Or.pseudos[e] =
          ((t = e),
          function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          });
      }),
      $(["submit", "reset"], function (e) {
        var t;
        Or.pseudos[e] =
          ((t = e),
          function (e) {
            var n = e.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && e.type === t;
          });
      }),
      (Ta.prototype = Or.filters = Or.pseudos),
      (Or.setFilters = new Ta()),
      (Lr = Sa.tokenize =
        function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            u,
            c,
            s = Ki[e + " "];
          if (s) return t ? 0 : s.slice(0);
          for (a = e, u = [], c = Or.preFilter; a; ) {
            for (i in ((n && !(r = la.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
            (n = !1),
            (r = fa.exec(a)) &&
              ((n = r.shift()),
              o.push({ value: n, type: r[0].replace(sa, " ") }),
              (a = a.slice(n.length))),
            Or.filter))
              Or.filter.hasOwnProperty(i) &&
                (!(r = ga[i].exec(a)) ||
                  (c[i] && !(r = c[i](r))) ||
                  ((n = r.shift()),
                  o.push({ value: n, type: i, matches: r }),
                  (a = a.slice(n.length))));
            if (!n) break;
          }
          return t ? a.length : a ? Sa.error(e) : Ki(e, u).slice(0);
        }),
      (Ir = Sa.compile =
        function (e, t) {
          var n,
            r = [],
            o = [],
            i = Xi[e + " "];
          if (!i) {
            for (t || (t = Lr(e)), n = t.length; n--; )
              (i = Ia(t[n]))[Vi] ? r.push(i) : o.push(i);
            (i = Xi(
              e,
              (function (e, t) {
                var n = t.length > 0,
                  r = e.length > 0,
                  o = function (o, i, a, u, c) {
                    var s,
                      l,
                      f,
                      d = 0,
                      m = "0",
                      p = o && [],
                      g = [],
                      h = Fr,
                      v = o || (r && Or.find.TAG("*", c)),
                      y = (qi += null == h ? 1 : Math.random() || 0.1),
                      b = v.length;
                    for (
                      c && (Fr = i !== Vr && i);
                      m !== b && null != (s = v[m]);
                      m++
                    ) {
                      if (r && s) {
                        for (l = 0; (f = e[l++]); )
                          if (f(s, i, a)) {
                            u.push(s);
                            break;
                          }
                        c && (qi = y);
                      }
                      n && ((s = !f && s) && d--, o && p.push(s));
                    }
                    if (((d += m), n && m !== d)) {
                      for (l = 0; (f = t[l++]); ) f(p, g, i, a);
                      if (o) {
                        if (d > 0)
                          for (; m--; ) p[m] || g[m] || (g[m] = ea.call(u));
                        g = Pa(g);
                      }
                      na.apply(u, g),
                        c &&
                          !o &&
                          g.length > 0 &&
                          d + t.length > 1 &&
                          Sa.uniqueSort(u);
                    }
                    return c && ((qi = y), (Fr = h)), p;
                  };
                return n ? Na(o) : o;
              })(o, r)
            )).selector = e;
          }
          return i;
        }),
      (Mr = Sa.select =
        function (e, t, n, r) {
          var o,
            i,
            a,
            u,
            c,
            s = "function" == typeof e && e,
            l = !r && Lr((e = s.selector || e));
          if (((n = n || []), 1 === l.length)) {
            if (
              (i = l[0] = l[0].slice(0)).length > 2 &&
              "ID" === (a = i[0]).type &&
              Dr.getById &&
              9 === t.nodeType &&
              qr &&
              Or.relative[i[1].type]
            ) {
              if (!(t = (Or.find.ID(a.matches[0].replace(xa, _a), t) || [])[0]))
                return n;
              s && (t = t.parentNode), (e = e.slice(i.shift().value.length));
            }
            for (
              o = ga.needsContext.test(e) ? 0 : i.length;
              o-- && ((a = i[o]), !Or.relative[(u = a.type)]);

            )
              if (
                (c = Or.find[u]) &&
                (r = c(
                  a.matches[0].replace(xa, _a),
                  (Ca.test(i[0].type) && Ra(t.parentNode)) || t
                ))
              ) {
                if ((i.splice(o, 1), !(e = r.length && Da(i))))
                  return na.apply(n, r), n;
                break;
              }
          }
          return (
            (s || Ir(e, l))(
              r,
              t,
              !qr,
              n,
              (Ca.test(e) && Ra(t.parentNode)) || t
            ),
            n
          );
        }),
      (Dr.sortStable = Vi.split("").sort(Yi).join("") === Vi),
      (Dr.detectDuplicates = !!jr),
      zr(),
      (Dr.sortDetached = !0);
    var Ma = document,
      Fa = Array.prototype.push,
      Ua = Array.prototype.slice,
      ja = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
      za = zi.Event,
      Va = At.makeMap("children,contents,next,prev"),
      Ha = function (e) {
        return void 0 !== e;
      },
      qa = function (e) {
        return "string" == typeof e;
      },
      $a = function (e, t) {
        var n,
          r = (t = t || Ma).createElement("div"),
          o = t.createDocumentFragment();
        for (r.innerHTML = e; (n = r.firstChild); ) o.appendChild(n);
        return o;
      },
      Wa = function (e, t, n, r) {
        var o;
        if (qa(t)) t = $a(t, au(e[0]));
        else if (t.length && !t.nodeType) {
          if (((t = lu.makeArray(t)), r))
            for (o = t.length - 1; o >= 0; o--) Wa(e, t[o], n, r);
          else for (o = 0; o < t.length; o++) Wa(e, t[o], n, r);
          return e;
        }
        if (t.nodeType) for (o = e.length; o--; ) n.call(e[o], t);
        return e;
      },
      Ka = function (e, t) {
        return (
          e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        );
      },
      Xa = function (e, t, n) {
        var r, o;
        return (
          (t = lu(t)[0]),
          e.each(function () {
            var e = this;
            (n && r === e.parentNode) ||
              ((r = e.parentNode),
              (o = t.cloneNode(!1)),
              e.parentNode.insertBefore(o, e)),
              o.appendChild(e);
          }),
          e
        );
      },
      Ya = At.makeMap(
        "fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom",
        " "
      ),
      Ga = At.makeMap(
        "checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected",
        " "
      ),
      Ja = { for: "htmlFor", class: "className", readonly: "readOnly" },
      Qa = { float: "cssFloat" },
      Za = {},
      eu = {},
      tu = function (e, t) {
        return new lu.fn.init(e, t);
      },
      nu = /^\s*|\s*$/g,
      ru = function (e) {
        return null == e ? "" : ("" + e).replace(nu, "");
      },
      ou = function (e, t) {
        var n, r, o, i;
        if (e)
          if (void 0 === (n = e.length)) {
            for (r in e)
              if (e.hasOwnProperty(r) && ((i = e[r]), !1 === t.call(i, r, i)))
                break;
          } else
            for (o = 0; o < n && ((i = e[o]), !1 !== t.call(i, o, i)); o++);
        return e;
      },
      iu = function (e, t) {
        var n = [];
        return (
          ou(e, function (e, r) {
            t(r, e) && n.push(r);
          }),
          n
        );
      },
      au = function (e) {
        return e ? (9 === e.nodeType ? e : e.ownerDocument) : Ma;
      };
    (tu.fn = tu.prototype =
      {
        constructor: tu,
        selector: "",
        context: null,
        length: 0,
        init: function (e, t) {
          var n,
            r,
            o = this;
          if (!e) return o;
          if (e.nodeType) return (o.context = o[0] = e), (o.length = 1), o;
          if (t && t.nodeType) o.context = t;
          else {
            if (t) return lu(e).attr(t);
            o.context = t = document;
          }
          if (qa(e)) {
            if (
              ((o.selector = e),
              !(n =
                "<" === e.charAt(0) &&
                ">" === e.charAt(e.length - 1) &&
                e.length >= 3
                  ? [null, e, null]
                  : ja.exec(e)))
            )
              return lu(t).find(e);
            if (n[1])
              for (r = $a(e, au(t)).firstChild; r; )
                Fa.call(o, r), (r = r.nextSibling);
            else {
              if (!(r = au(t).getElementById(n[2]))) return o;
              if (r.id !== n[2]) return o.find(e);
              (o.length = 1), (o[0] = r);
            }
          } else this.add(e, !1);
          return o;
        },
        toArray: function () {
          return At.toArray(this);
        },
        add: function (e, t) {
          var n,
            r,
            o = this;
          if (qa(e)) return o.add(lu(e));
          if (!1 !== t)
            for (
              n = lu.unique(o.toArray().concat(lu.makeArray(e))),
                o.length = n.length,
                r = 0;
              r < n.length;
              r++
            )
              o[r] = n[r];
          else Fa.apply(o, lu.makeArray(e));
          return o;
        },
        attr: function (e, t) {
          var n,
            r = this;
          if ("object" == typeof e)
            ou(e, function (e, t) {
              r.attr(e, t);
            });
          else {
            if (!Ha(t)) {
              if (r[0] && 1 === r[0].nodeType) {
                if ((n = Za[e]) && n.get) return n.get(r[0], e);
                if (Ga[e]) return r.prop(e) ? e : void 0;
                null === (t = r[0].getAttribute(e, 2)) && (t = void 0);
              }
              return t;
            }
            this.each(function () {
              var n;
              if (1 === this.nodeType) {
                if ((n = Za[e]) && n.set) return void n.set(this, t);
                null === t
                  ? this.removeAttribute(e, 2)
                  : this.setAttribute(e, t, 2);
              }
            });
          }
          return r;
        },
        removeAttr: function (e) {
          return this.attr(e, null);
        },
        prop: function (e, t) {
          var n = this;
          if ("object" == typeof (e = Ja[e] || e))
            ou(e, function (e, t) {
              n.prop(e, t);
            });
          else {
            if (!Ha(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
            this.each(function () {
              1 === this.nodeType && (this[e] = t);
            });
          }
          return n;
        },
        css: function (e, t) {
          var n,
            r,
            o = this,
            i = function (e) {
              return e.replace(/-(\D)/g, function (e, t) {
                return t.toUpperCase();
              });
            },
            a = function (e) {
              return e.replace(/[A-Z]/g, function (e) {
                return "-" + e;
              });
            };
          if ("object" == typeof e)
            ou(e, function (e, t) {
              o.css(e, t);
            });
          else if (Ha(t))
            (e = i(e)),
              "number" != typeof t || Ya[e] || (t = t.toString() + "px"),
              o.each(function () {
                var n = this.style;
                if ((r = eu[e]) && r.set) r.set(this, t);
                else {
                  try {
                    this.style[Qa[e] || e] = t;
                  } catch (o) {}
                  (null !== t && "" !== t) ||
                    (n.removeProperty
                      ? n.removeProperty(a(e))
                      : n.removeAttribute(e));
                }
              });
          else {
            if (((n = o[0]), (r = eu[e]) && r.get)) return r.get(n);
            if (!n.ownerDocument.defaultView)
              return n.currentStyle ? n.currentStyle[i(e)] : "";
            try {
              return n.ownerDocument.defaultView
                .getComputedStyle(n, null)
                .getPropertyValue(a(e));
            } catch (u) {
              return;
            }
          }
          return o;
        },
        remove: function () {
          for (var e, t = this.length; t--; )
            (e = this[t]),
              za.clean(e),
              e.parentNode && e.parentNode.removeChild(e);
          return this;
        },
        empty: function () {
          for (var e, t = this.length; t--; )
            for (e = this[t]; e.firstChild; ) e.removeChild(e.firstChild);
          return this;
        },
        html: function (e) {
          var t,
            n = this;
          if (Ha(e)) {
            t = n.length;
            try {
              for (; t--; ) n[t].innerHTML = e;
            } catch (r) {
              lu(n[t]).empty().append(e);
            }
            return n;
          }
          return n[0] ? n[0].innerHTML : "";
        },
        text: function (e) {
          var t,
            n = this;
          if (Ha(e)) {
            for (t = n.length; t--; )
              "innerText" in n[t]
                ? (n[t].innerText = e)
                : (n[0].textContent = e);
            return n;
          }
          return n[0] ? n[0].innerText || n[0].textContent : "";
        },
        append: function () {
          return Wa(this, arguments, function (e) {
            (1 === this.nodeType || (this.host && 1 === this.host.nodeType)) &&
              this.appendChild(e);
          });
        },
        prepend: function () {
          return Wa(
            this,
            arguments,
            function (e) {
              (1 === this.nodeType ||
                (this.host && 1 === this.host.nodeType)) &&
                this.insertBefore(e, this.firstChild);
            },
            !0
          );
        },
        before: function () {
          var e = this;
          return e[0] && e[0].parentNode
            ? Wa(e, arguments, function (e) {
                this.parentNode.insertBefore(e, this);
              })
            : e;
        },
        after: function () {
          var e = this;
          return e[0] && e[0].parentNode
            ? Wa(
                e,
                arguments,
                function (e) {
                  this.parentNode.insertBefore(e, this.nextSibling);
                },
                !0
              )
            : e;
        },
        appendTo: function (e) {
          return lu(e).append(this), this;
        },
        prependTo: function (e) {
          return lu(e).prepend(this), this;
        },
        replaceWith: function (e) {
          return this.before(e).remove();
        },
        wrap: function (e) {
          return Xa(this, e);
        },
        wrapAll: function (e) {
          return Xa(this, e, !0);
        },
        wrapInner: function (e) {
          return (
            this.each(function () {
              lu(this).contents().wrapAll(e);
            }),
            this
          );
        },
        unwrap: function () {
          return this.parent().each(function () {
            lu(this).replaceWith(this.childNodes);
          });
        },
        clone: function () {
          var e = [];
          return (
            this.each(function () {
              e.push(this.cloneNode(!0));
            }),
            lu(e)
          );
        },
        addClass: function (e) {
          return this.toggleClass(e, !0);
        },
        removeClass: function (e) {
          return this.toggleClass(e, !1);
        },
        toggleClass: function (e, t) {
          var n = this;
          return (
            "string" != typeof e ||
              (-1 !== e.indexOf(" ")
                ? ou(e.split(" "), function () {
                    n.toggleClass(this, t);
                  })
                : n.each(function (n, r) {
                    var o = Ka(r, e);
                    if (o !== t) {
                      var i = r.className;
                      o
                        ? (r.className = ru(
                            (" " + i + " ").replace(" " + e + " ", " ")
                          ))
                        : (r.className += i ? " " + e : e);
                    }
                  })),
            n
          );
        },
        hasClass: function (e) {
          return Ka(this[0], e);
        },
        each: function (e) {
          return ou(this, e);
        },
        on: function (e, t) {
          return this.each(function () {
            za.bind(this, e, t);
          });
        },
        off: function (e, t) {
          return this.each(function () {
            za.unbind(this, e, t);
          });
        },
        trigger: function (e) {
          return this.each(function () {
            "object" == typeof e ? za.fire(this, e.type, e) : za.fire(this, e);
          });
        },
        show: function () {
          return this.css("display", "");
        },
        hide: function () {
          return this.css("display", "none");
        },
        slice: function () {
          return lu(Ua.apply(this, arguments));
        },
        eq: function (e) {
          return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        find: function (e) {
          var t,
            n,
            r = [];
          for (t = 0, n = this.length; t < n; t++) lu.find(e, this[t], r);
          return lu(r);
        },
        filter: function (e) {
          return lu(
            "function" == typeof e
              ? iu(this.toArray(), function (t, n) {
                  return e(n, t);
                })
              : lu.filter(e, this.toArray())
          );
        },
        closest: function (e) {
          var t = [];
          return (
            e instanceof lu && (e = e[0]),
            this.each(function (n, r) {
              for (; r; ) {
                if ("string" == typeof e && lu(r).is(e)) {
                  t.push(r);
                  break;
                }
                if (r === e) {
                  t.push(r);
                  break;
                }
                r = r.parentNode;
              }
            }),
            lu(t)
          );
        },
        offset: function (e) {
          var t,
            n,
            r,
            o,
            i = 0,
            a = 0;
          return e
            ? this.css(e)
            : ((t = this[0]) &&
                ((r = (n = t.ownerDocument).documentElement),
                t.getBoundingClientRect &&
                  ((i =
                    (o = t.getBoundingClientRect()).left +
                    (r.scrollLeft || n.body.scrollLeft) -
                    r.clientLeft),
                  (a =
                    o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop))),
              { left: i, top: a });
        },
        push: Fa,
        sort: Array.prototype.sort,
        splice: Array.prototype.splice,
      }),
      At.extend(tu, {
        extend: At.extend,
        makeArray: function (e) {
          return ((t = e) && t === t.window) || e.nodeType
            ? [e]
            : At.toArray(e);
          var t;
        },
        inArray: function (e, t) {
          var n;
          if (t.indexOf) return t.indexOf(e);
          for (n = t.length; n--; ) if (t[n] === e) return n;
          return -1;
        },
        isArray: At.isArray,
        each: ou,
        trim: ru,
        grep: iu,
        find: Sa,
        expr: Sa.selectors,
        unique: Sa.uniqueSort,
        text: Sa.getText,
        contains: Sa.contains,
        filter: function (e, t, n) {
          var r = t.length;
          for (n && (e = ":not(" + e + ")"); r--; )
            1 !== t[r].nodeType && t.splice(r, 1);
          return (t =
            1 === t.length
              ? lu.find.matchesSelector(t[0], e)
                ? [t[0]]
                : []
              : lu.find.matches(e, t));
        },
      });
    var uu = function (e, t, n) {
        var r = [],
          o = e[t];
        for (
          "string" != typeof n && n instanceof lu && (n = n[0]);
          o && 9 !== o.nodeType;

        ) {
          if (void 0 !== n) {
            if (o === n) break;
            if ("string" == typeof n && lu(o).is(n)) break;
          }
          1 === o.nodeType && r.push(o), (o = o[t]);
        }
        return r;
      },
      cu = function (e, t, n, r) {
        var o = [];
        for (r instanceof lu && (r = r[0]); e; e = e[t])
          if (!n || e.nodeType === n) {
            if (void 0 !== r) {
              if (e === r) break;
              if ("string" == typeof r && lu(e).is(r)) break;
            }
            o.push(e);
          }
        return o;
      },
      su = function (e, t, n) {
        for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
        return null;
      };
    ou(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return uu(e, "parentNode");
        },
        next: function (e) {
          return su(e, "nextSibling", 1);
        },
        prev: function (e) {
          return su(e, "previousSibling", 1);
        },
        children: function (e) {
          return cu(e.firstChild, "nextSibling", 1);
        },
        contents: function (e) {
          return At.toArray(
            ("iframe" === e.nodeName
              ? e.contentDocument || e.contentWindow.document
              : e
            ).childNodes
          );
        },
      },
      function (e, t) {
        tu.fn[e] = function (n) {
          var r = [];
          this.each(function () {
            var e = t.call(r, this, n, r);
            e && (lu.isArray(e) ? r.push.apply(r, e) : r.push(e));
          }),
            this.length > 1 &&
              (Va[e] || (r = lu.unique(r)),
              0 === e.indexOf("parents") && (r = r.reverse()));
          var o = lu(r);
          return n ? o.filter(n) : o;
        };
      }
    ),
      ou(
        {
          parentsUntil: function (e, t) {
            return uu(e, "parentNode", t);
          },
          nextUntil: function (e, t) {
            return cu(e, "nextSibling", 1, t).slice(1);
          },
          prevUntil: function (e, t) {
            return cu(e, "previousSibling", 1, t).slice(1);
          },
        },
        function (e, t) {
          tu.fn[e] = function (n, r) {
            var o = [];
            this.each(function () {
              var e = t.call(o, this, n, o);
              e && (lu.isArray(e) ? o.push.apply(o, e) : o.push(e));
            }),
              this.length > 1 &&
                ((o = lu.unique(o)),
                (0 !== e.indexOf("parents") && "prevUntil" !== e) ||
                  (o = o.reverse()));
            var i = lu(o);
            return r ? i.filter(r) : i;
          };
        }
      ),
      (tu.fn.is = function (e) {
        return !!e && this.filter(e).length > 0;
      }),
      (tu.fn.init.prototype = tu.fn),
      (tu.overrideDefaults = function (e) {
        var t,
          n = function (r, o) {
            return (
              (t = t || e()),
              0 === arguments.length && (r = t.element),
              o || (o = t.context),
              new n.fn.init(r, o)
            );
          };
        return lu.extend(n, this), n;
      }),
      (tu.attrHooks = Za),
      (tu.cssHooks = eu);
    var lu = tu,
      fu = At.each,
      du = At.grep,
      mu = _t.ie,
      pu = /^([a-z0-9],?)+$/i,
      gu = function (e, t) {
        var n = t.attr("style"),
          r = e.serialize(e.parse(n), t[0].nodeName);
        r || (r = null), t.attr("data-mce-style", r);
      },
      hu = function (e, t) {
        var n,
          r,
          o = 0;
        if (e)
          for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling)
            (r = e.nodeType),
              (!t || 3 !== r || (r !== n && e.nodeValue.length)) &&
                (o++, (n = r));
        return o;
      },
      vu = function (e, t) {
        void 0 === t && (t = {});
        var n = {},
          r = window,
          o = {},
          i = 0,
          a = co.forElement(Tt.fromDom(e), {
            contentCssCors: t.contentCssCors,
            referrerPolicy: t.referrerPolicy,
          }),
          u = [],
          c = t.schema ? t.schema : Ti({}),
          s = Oi(
            {
              url_converter: t.url_converter,
              url_converter_scope: t.url_converter_scope,
            },
            t.schema
          ),
          f = t.ownEvents ? new zi() : zi.Event,
          d = c.getBlockElements(),
          m = lu.overrideDefaults(function () {
            return { context: e, element: V.getRoot() };
          }),
          p = function (t) {
            return t && e && l(t) ? e.getElementById(t) : t;
          },
          g = function (e) {
            return m("string" == typeof e ? p(e) : e);
          },
          v = function (e, t, n) {
            var r,
              o,
              i = g(e);
            return (
              i.length && (o = (r = H[t]) && r.get ? r.get(i, t) : i.attr(t)),
              void 0 === o && (o = n || ""),
              o
            );
          },
          y = function (e) {
            var t = p(e);
            return t ? t.attributes : [];
          },
          b = function (e, n, r) {
            "" === r && (r = null);
            var o = g(e),
              i = o.attr(n);
            if (o.length) {
              var a = H[n];
              a && a.set ? a.set(o, r, n) : o.attr(n, r),
                i !== r &&
                  t.onSetAttrib &&
                  t.onSetAttrib({ attrElm: o, attrName: n, attrValue: r });
            }
          },
          w = function () {
            return t.root_element || e.body;
          },
          x = function (t, n) {
            return fr(e.body, p(t), n);
          },
          _ = function (e, t, n) {
            var r = g(e);
            return n
              ? r.css(t)
              : ("float" ===
                  (t = t.replace(/-(\D)/g, function (e, t) {
                    return t.toUpperCase();
                  })) && (t = _t.browser.isIE() ? "styleFloat" : "cssFloat"),
                r[0] && r[0].style ? r[0].style[t] : void 0);
          },
          S = function (e) {
            var t, n;
            return (
              (e = p(e)),
              (t = _(e, "width")),
              (n = _(e, "height")),
              -1 === t.indexOf("px") && (t = 0),
              -1 === n.indexOf("px") && (n = 0),
              {
                w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
                h: parseInt(n, 10) || e.offsetHeight || e.clientHeight,
              }
            );
          },
          E = function (e, t) {
            var n;
            if (!e) return !1;
            if (!Array.isArray(e)) {
              if ("*" === t) return 1 === e.nodeType;
              if (pu.test(t)) {
                var r = t.toLowerCase().split(/,/),
                  o = e.nodeName.toLowerCase();
                for (n = r.length - 1; n >= 0; n--) if (r[n] === o) return !0;
                return !1;
              }
              if (e.nodeType && 1 !== e.nodeType) return !1;
            }
            var i = Array.isArray(e) ? e : [e];
            return Sa(t, i[0].ownerDocument || i[0], null, i).length > 0;
          },
          N = function (e, t, n, r) {
            var o,
              i = [],
              a = p(e);
            for (
              r = void 0 === r,
                n = n || ("BODY" !== w().nodeName ? w().parentNode : null),
                At.is(t, "string") &&
                  ((o = t),
                  (t =
                    "*" === t
                      ? function (e) {
                          return 1 === e.nodeType;
                        }
                      : function (e) {
                          return E(e, o);
                        }));
              a && !(a === n || h(a.nodeType) || Vn(a) || Hn(a));

            ) {
              if (!t || ("function" == typeof t && t(a))) {
                if (!r) return [a];
                i.push(a);
              }
              a = a.parentNode;
            }
            return r ? i : null;
          },
          k = function (e, t, n) {
            var r = t;
            if (e)
              for (
                "string" == typeof t &&
                  (r = function (e) {
                    return E(e, t);
                  }),
                  e = e[n];
                e;
                e = e[n]
              )
                if ("function" == typeof r && r(e)) return e;
            return null;
          },
          A = function (e, t, n) {
            var r,
              o = "string" == typeof e ? p(e) : e;
            if (!o) return !1;
            if (At.isArray(o) && (o.length || 0 === o.length))
              return (
                (r = []),
                fu(o, function (e, o) {
                  e && r.push(t.call(n, "string" == typeof e ? p(e) : e, o));
                }),
                r
              );
            var i = n || this;
            return t.call(i, o);
          },
          R = function (e, t) {
            g(e).each(function (e, n) {
              fu(t, function (e, t) {
                b(n, t, e);
              });
            });
          },
          T = function (e, t) {
            var n = g(e);
            mu
              ? n.each(function (e, n) {
                  if (!1 !== n.canHaveHTML) {
                    for (; n.firstChild; ) n.removeChild(n.firstChild);
                    try {
                      (n.innerHTML = "<br>" + t), n.removeChild(n.firstChild);
                    } catch (r) {
                      lu("<div></div>")
                        .html("<br>" + t)
                        .contents()
                        .slice(1)
                        .appendTo(n);
                    }
                    return t;
                  }
                })
              : n.html(t);
          },
          D = function (t, n, r, o, i) {
            return A(t, function (t) {
              var a = "string" == typeof n ? e.createElement(n) : n;
              return (
                R(a, r),
                o &&
                  ("string" != typeof o && o.nodeType
                    ? a.appendChild(o)
                    : "string" == typeof o && T(a, o)),
                i ? a : t.appendChild(a)
              );
            });
          },
          O = function (t, n, r) {
            return D(e.createElement(t), t, n, r, !0);
          },
          B = Ci.encodeAllRaw,
          P = function (e, t) {
            var n = g(e);
            return (
              t
                ? n
                    .each(function () {
                      for (var e; (e = this.firstChild); )
                        3 === e.nodeType && 0 === e.data.length
                          ? this.removeChild(e)
                          : this.parentNode.insertBefore(e, this);
                    })
                    .remove()
                : n.remove(),
              n.length > 1 ? n.toArray() : n[0]
            );
          },
          L = function (e, t, n) {
            g(e)
              .toggleClass(t, n)
              .each(function () {
                "" === this.className && lu(this).attr("class", null);
              });
          },
          I = function (e, t, n) {
            return A(t, function (t) {
              return (
                At.is(t, "array") && (e = e.cloneNode(!0)),
                n &&
                  fu(du(t.childNodes), function (t) {
                    e.appendChild(t);
                  }),
                t.parentNode.replaceChild(e, t)
              );
            });
          },
          M = function (e) {
            if (On(e)) {
              var t =
                "a" === e.nodeName.toLowerCase() && !v(e, "href") && v(e, "id");
              if (v(e, "name") || v(e, "data-mce-bookmark") || t) return !0;
            }
            return !1;
          },
          F = function () {
            return e.createRange();
          },
          U = function (n, o, i, a) {
            if (At.isArray(n)) {
              for (var c = n.length, s = []; c--; ) s[c] = U(n[c], o, i, a);
              return s;
            }
            return (
              !t.collect || (n !== e && n !== r) || u.push([n, o, i, a]),
              f.bind(n, o, i, a || V)
            );
          },
          j = function (t, n, o) {
            if (At.isArray(t)) {
              for (var i = t.length, a = []; i--; ) a[i] = j(t[i], n, o);
              return a;
            }
            if (u.length > 0 && (t === e || t === r))
              for (i = u.length; i--; ) {
                var c = u[i];
                t !== c[0] ||
                  (n && n !== c[1]) ||
                  (o && o !== c[2]) ||
                  f.unbind(c[0], c[1], c[2]);
              }
            return f.unbind(t, n, o);
          },
          z = function (e) {
            if (e && On(e)) {
              var t = e.getAttribute("data-mce-contenteditable");
              return t && "inherit" !== t
                ? t
                : "inherit" !== e.contentEditable
                ? e.contentEditable
                : null;
            }
            return null;
          },
          V = {
            doc: e,
            settings: t,
            win: r,
            files: o,
            stdMode: !0,
            boxModel: !0,
            styleSheetLoader: a,
            boundEvents: u,
            styles: s,
            schema: c,
            events: f,
            isBlock: function (e) {
              if ("string" == typeof e) return !!d[e];
              if (e) {
                var t = e.nodeType;
                if (t) return !(1 !== t || !d[e.nodeName]);
              }
              return !1;
            },
            $: m,
            $$: g,
            root: null,
            clone: function (t, n) {
              if (!mu || 1 !== t.nodeType || n) return t.cloneNode(n);
              var r = e.createElement(t.nodeName);
              return (
                fu(y(t), function (e) {
                  b(r, e.nodeName, v(t, e.nodeName));
                }),
                r
              );
            },
            getRoot: w,
            getViewPort: function (e) {
              var t = Rn(e);
              return { x: t.x, y: t.y, w: t.width, h: t.height };
            },
            getRect: function (e) {
              e = p(e);
              var t = x(e),
                n = S(e);
              return { x: t.x, y: t.y, w: n.w, h: n.h };
            },
            getSize: S,
            getParent: function (e, t, n) {
              var r = N(e, t, n, !1);
              return r && r.length > 0 ? r[0] : null;
            },
            getParents: N,
            get: p,
            getNext: function (e, t) {
              return k(e, t, "nextSibling");
            },
            getPrev: function (e, t) {
              return k(e, t, "previousSibling");
            },
            select: function (n, r) {
              return Sa(n, p(r) || t.root_element || e, []);
            },
            is: E,
            add: D,
            create: O,
            createHTML: function (e, t, n) {
              var r,
                o = "";
              for (r in ((o += "<" + e), t))
                t.hasOwnProperty(r) &&
                  null !== t[r] &&
                  void 0 !== t[r] &&
                  (o += " " + r + '="' + B(t[r]) + '"');
              return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />";
            },
            createFragment: function (t) {
              var n,
                r = e.createElement("div"),
                o = e.createDocumentFragment();
              for (
                o.appendChild(r), t && (r.innerHTML = t);
                (n = r.firstChild);

              )
                o.appendChild(n);
              return o.removeChild(r), o;
            },
            remove: P,
            setStyle: function (e, n, r) {
              var o = l(n) ? g(e).css(n, r) : g(e).css(n);
              t.update_styles && gu(s, o);
            },
            getStyle: _,
            setStyles: function (e, n) {
              var r = g(e).css(n);
              t.update_styles && gu(s, r);
            },
            removeAllAttribs: function (e) {
              return A(e, function (e) {
                var t,
                  n = e.attributes;
                for (t = n.length - 1; t >= 0; t--)
                  e.removeAttributeNode(n.item(t));
              });
            },
            setAttrib: b,
            setAttribs: R,
            getAttrib: v,
            getPos: x,
            parseStyle: function (e) {
              return s.parse(e);
            },
            serializeStyle: function (e, t) {
              return s.serialize(e, t);
            },
            addStyle: function (t) {
              var r, o;
              if (V !== vu.DOM && e === document) {
                if (n[t]) return;
                n[t] = !0;
              }
              (o = e.getElementById("mceDefaultStyles")) ||
                (((o = e.createElement("style")).id = "mceDefaultStyles"),
                (o.type = "text/css"),
                (r = e.getElementsByTagName("head")[0]).firstChild
                  ? r.insertBefore(o, r.firstChild)
                  : r.appendChild(o)),
                o.styleSheet
                  ? (o.styleSheet.cssText += t)
                  : o.appendChild(e.createTextNode(t));
            },
            loadCSS: function (e) {
              e || (e = ""),
                $(e.split(","), function (e) {
                  (o[e] = !0), a.load(e, C);
                });
            },
            addClass: function (e, t) {
              g(e).addClass(t);
            },
            removeClass: function (e, t) {
              L(e, t, !1);
            },
            hasClass: function (e, t) {
              return g(e).hasClass(t);
            },
            toggleClass: L,
            show: function (e) {
              g(e).show();
            },
            hide: function (e) {
              g(e).hide();
            },
            isHidden: function (e) {
              return "none" === g(e).css("display");
            },
            uniqueId: function (e) {
              return (e || "mce_") + i++;
            },
            setHTML: T,
            getOuterHTML: function (e) {
              var t = "string" == typeof e ? p(e) : e;
              return On(t)
                ? t.outerHTML
                : lu("<div></div>").append(lu(t).clone()).html();
            },
            setOuterHTML: function (e, t) {
              g(e).each(function () {
                try {
                  if ("outerHTML" in this) return void (this.outerHTML = t);
                } catch (e) {}
                P(lu(this).html(t), !0);
              });
            },
            decode: Ci.decode,
            encode: B,
            insertAfter: function (e, t) {
              var n = p(t);
              return A(e, function (e) {
                var t = n.parentNode,
                  r = n.nextSibling;
                return r ? t.insertBefore(e, r) : t.appendChild(e), e;
              });
            },
            replace: I,
            rename: function (e, t) {
              var n;
              return (
                e.nodeName !== t.toUpperCase() &&
                  ((n = O(t)),
                  fu(y(e), function (t) {
                    b(n, t.nodeName, v(e, t.nodeName));
                  }),
                  I(n, e, !0)),
                n || e
              );
            },
            findCommonAncestor: function (e, t) {
              for (var n, r = e; r; ) {
                for (n = t; n && r !== n; ) n = n.parentNode;
                if (r === n) break;
                r = r.parentNode;
              }
              return !r && e.ownerDocument
                ? e.ownerDocument.documentElement
                : r;
            },
            toHex: function (e) {
              return s.toHex(At.trim(e));
            },
            run: A,
            getAttribs: y,
            isEmpty: function (e, t) {
              var n,
                r,
                o = 0;
              if (M(e)) return !1;
              if ((e = e.firstChild)) {
                var i = new so(e, e.parentNode),
                  a = c ? c.getWhiteSpaceElements() : {};
                t = t || (c ? c.getNonEmptyElements() : null);
                do {
                  if (((n = e.nodeType), On(e))) {
                    var u = e.getAttribute("data-mce-bogus");
                    if (u) {
                      e = i.next("all" === u);
                      continue;
                    }
                    if (((r = e.nodeName.toLowerCase()), t && t[r])) {
                      if ("br" === r) {
                        o++, (e = i.next());
                        continue;
                      }
                      return !1;
                    }
                    if (M(e)) return !1;
                  }
                  if (8 === n) return !1;
                  if (3 === n && !Go(e.nodeValue)) return !1;
                  if (
                    3 === n &&
                    e.parentNode &&
                    a[e.parentNode.nodeName] &&
                    Go(e.nodeValue)
                  )
                    return !1;
                  e = i.next();
                } while (e);
              }
              return o <= 1;
            },
            createRng: F,
            nodeIndex: hu,
            split: function (e, t, n) {
              var r,
                o,
                i,
                a = F();
              if (e && t)
                return (
                  a.setStart(e.parentNode, hu(e)),
                  a.setEnd(t.parentNode, hu(t)),
                  (r = a.extractContents()),
                  (a = F()).setStart(t.parentNode, hu(t) + 1),
                  a.setEnd(e.parentNode, hu(e) + 1),
                  (o = a.extractContents()),
                  (i = e.parentNode).insertBefore(ai(V, r), e),
                  n ? i.insertBefore(n, e) : i.insertBefore(t, e),
                  i.insertBefore(ai(V, o), e),
                  P(e),
                  n || t
                );
            },
            bind: U,
            unbind: j,
            fire: function (e, t, n) {
              return f.fire(e, t, n);
            },
            getContentEditable: z,
            getContentEditableParent: function (e) {
              for (
                var t = w(), n = null;
                e && e !== t && null === (n = z(e));
                e = e.parentNode
              );
              return n;
            },
            destroy: function () {
              if (u.length > 0)
                for (var e = u.length; e--; ) {
                  var t = u[e];
                  f.unbind(t[0], t[1], t[2]);
                }
              ce(o, function (e, t) {
                a.unload(t), delete o[t];
              }),
                Sa.setDocument && Sa.setDocument();
            },
            isChildOf: function (e, t) {
              for (; e; ) {
                if (t === e) return !0;
                e = e.parentNode;
              }
              return !1;
            },
            dumpRng: function (e) {
              return (
                "startContainer: " +
                e.startContainer.nodeName +
                ", startOffset: " +
                e.startOffset +
                ", endContainer: " +
                e.endContainer.nodeName +
                ", endOffset: " +
                e.endOffset
              );
            },
          },
          H = (function (e, t, n) {
            var r = t.keep_values,
              o = {
                set: function (e, r, o) {
                  t.url_converter &&
                    (r = t.url_converter.call(
                      t.url_converter_scope || n(),
                      r,
                      o,
                      e[0]
                    )),
                    e.attr("data-mce-" + o, r).attr(o, r);
                },
                get: function (e, t) {
                  return e.attr("data-mce-" + t) || e.attr(t);
                },
              },
              i = {
                style: {
                  set: function (t, n) {
                    null === n || "object" != typeof n
                      ? (r && t.attr("data-mce-style", n),
                        null !== n && "string" == typeof n
                          ? (t.removeAttr("style"), t.css(e.parse(n)))
                          : t.attr("style", n))
                      : t.css(n);
                  },
                  get: function (t) {
                    var n = t.attr("data-mce-style") || t.attr("style");
                    return e.serialize(e.parse(n), t[0].nodeName);
                  },
                },
              };
            return r && (i.href = i.src = o), i;
          })(s, t, function () {
            return V;
          });
        return V;
      };
    (vu.DOM = vu(document)), (vu.nodeIndex = hu);
    var yu = vu.DOM,
      bu = At.each,
      Cu = At.grep,
      wu = (function () {
        function e(e) {
          void 0 === e && (e = {}),
            (this.states = {}),
            (this.queue = []),
            (this.scriptLoadedCallbacks = {}),
            (this.queueLoadedCallbacks = []),
            (this.loading = 0),
            (this.settings = e);
        }
        return (
          (e.prototype._setReferrerPolicy = function (e) {
            this.settings.referrerPolicy = e;
          }),
          (e.prototype.loadScript = function (e, t, n) {
            var r,
              o = yu,
              i = function () {
                o.remove(a), r && (r.onerror = r.onload = r = null);
              },
              a = o.uniqueId();
            ((r = document.createElement("script")).id = a),
              (r.type = "text/javascript"),
              (r.src = At._addCacheSuffix(e)),
              this.settings.referrerPolicy &&
                o.setAttrib(r, "referrerpolicy", this.settings.referrerPolicy),
              (r.onload = function () {
                i(), t();
              }),
              (r.onerror = function () {
                i(),
                  y(n)
                    ? n()
                    : "undefined" != typeof console &&
                      console.log &&
                      console.log("Failed to load script: " + e);
              }),
              (
                document.getElementsByTagName("head")[0] || document.body
              ).appendChild(r);
          }),
          (e.prototype.isDone = function (e) {
            return 2 === this.states[e];
          }),
          (e.prototype.markDone = function (e) {
            this.states[e] = 2;
          }),
          (e.prototype.add = function (e, t, n, r) {
            var o = this.states[e];
            this.queue.push(e),
              void 0 === o && (this.states[e] = 0),
              t &&
                (this.scriptLoadedCallbacks[e] ||
                  (this.scriptLoadedCallbacks[e] = []),
                this.scriptLoadedCallbacks[e].push({
                  success: t,
                  failure: r,
                  scope: n || this,
                }));
          }),
          (e.prototype.load = function (e, t, n, r) {
            return this.add(e, t, n, r);
          }),
          (e.prototype.remove = function (e) {
            delete this.states[e], delete this.scriptLoadedCallbacks[e];
          }),
          (e.prototype.loadQueue = function (e, t, n) {
            this.loadScripts(this.queue, e, t, n);
          }),
          (e.prototype.loadScripts = function (e, t, n, r) {
            var o = this,
              i = [],
              a = function (e, t) {
                bu(o.scriptLoadedCallbacks[t], function (t) {
                  y(t[e]) && t[e].call(t.scope);
                }),
                  (o.scriptLoadedCallbacks[t] = void 0);
              };
            o.queueLoadedCallbacks.push({
              success: t,
              failure: r,
              scope: n || this,
            });
            var u = function () {
              var t = Cu(e);
              if (
                ((e.length = 0),
                bu(t, function (e) {
                  2 !== o.states[e]
                    ? 3 !== o.states[e]
                      ? 1 !== o.states[e] &&
                        ((o.states[e] = 1),
                        o.loading++,
                        o.loadScript(
                          e,
                          function () {
                            (o.states[e] = 2),
                              o.loading--,
                              a("success", e),
                              u();
                          },
                          function () {
                            (o.states[e] = 3),
                              o.loading--,
                              i.push(e),
                              a("failure", e),
                              u();
                          }
                        ))
                      : a("failure", e)
                    : a("success", e);
                }),
                !o.loading)
              ) {
                var n = o.queueLoadedCallbacks.slice(0);
                (o.queueLoadedCallbacks.length = 0),
                  bu(n, function (e) {
                    0 === i.length
                      ? y(e.success) && e.success.call(e.scope)
                      : y(e.failure) && e.failure.call(e.scope, i);
                  });
              }
            };
            u();
          }),
          (e.ScriptLoader = new e()),
          e
        );
      })(),
      xu = function (e) {
        var t = e;
        return {
          get: function () {
            return t;
          },
          set: function (e) {
            t = e;
          },
        };
      },
      _u = {},
      Su = xu("en"),
      Eu = function () {
        return he(_u, Su.get());
      },
      Nu = {
        getData: function () {
          return se(_u, function (e) {
            return ke({}, e);
          });
        },
        setCode: function (e) {
          e && Su.set(e);
        },
        getCode: function () {
          return Su.get();
        },
        add: function (e, t) {
          var n = _u[e];
          n || (_u[e] = n = {}),
            ce(t, function (e, t) {
              n[t.toLowerCase()] = e;
            });
        },
        translate: function (e) {
          var t,
            n = Eu().getOr({}),
            r = function (e) {
              return y(e)
                ? Object.prototype.toString.call(e)
                : o(e)
                ? ""
                : "" + e;
            },
            o = function (e) {
              return "" === e || null == e;
            },
            i = function (e) {
              var t = r(e);
              return he(n, t.toLowerCase()).map(r).getOr(t);
            },
            a = function (e) {
              return e.replace(/{context:\w+}$/, "");
            };
          if (o(e)) return "";
          if (f((t = e)) && ve(t, "raw")) return r(e.raw);
          if (
            (function (e) {
              return d(e) && e.length > 1;
            })(e)
          ) {
            var u = e.slice(1);
            return a(
              i(e[0]).replace(/\{([0-9]+)\}/g, function (e, t) {
                return ve(u, t) ? r(u[t]) : e;
              })
            );
          }
          return a(i(e));
        },
        isRtl: function () {
          return Eu()
            .bind(function (e) {
              return he(e, "_dir");
            })
            .exists(function (e) {
              return "rtl" === e;
            });
        },
        hasCode: function (e) {
          return ve(_u, e);
        },
      },
      ku = function () {
        var e = [],
          t = {},
          n = {},
          r = [],
          o = function (e, t) {
            var n = K(r, function (n) {
              return n.name === e && n.state === t;
            });
            $(n, function (e) {
              return e.callback();
            });
          },
          i = function (e) {
            var t;
            return n[e] && (t = n[e].dependencies), t || [];
          },
          a = function (e, t) {
            return "object" == typeof t
              ? t
              : "string" == typeof e
              ? { prefix: "", resource: t, suffix: "" }
              : { prefix: e.prefix, resource: t, suffix: e.suffix };
          },
          u = function (e, r, c, s, l) {
            if (!t[e]) {
              var f =
                "string" == typeof r ? r : r.prefix + r.resource + r.suffix;
              0 !== f.indexOf("/") &&
                -1 === f.indexOf("://") &&
                (f = ku.baseURL + "/" + f),
                (t[e] = f.substring(0, f.lastIndexOf("/")));
              var d = function () {
                o(e, "loaded"),
                  (function (e, t, n, r) {
                    var o = i(e);
                    $(o, function (e) {
                      var n = a(t, e);
                      u(n.resource, n, void 0, void 0);
                    }),
                      n && (r ? n.call(r) : n.call(wu));
                  })(e, r, c, s);
              };
              n[e] ? d() : wu.ScriptLoader.add(f, d, s, l);
            }
          },
          c = function (e, o, i) {
            void 0 === i && (i = "added"),
              (ve(n, e) && "added" === i) || (ve(t, e) && "loaded" === i)
                ? o()
                : r.push({ name: e, state: i, callback: o });
          };
        return {
          items: e,
          urls: t,
          lookup: n,
          _listeners: r,
          get: function (e) {
            if (n[e]) return n[e].instance;
          },
          dependencies: i,
          requireLangPack: function (e, n) {
            !1 !== ku.languageLoad &&
              c(
                e,
                function () {
                  var r = Nu.getCode();
                  !r ||
                    (n &&
                      -1 === ("," + (n || "") + ",").indexOf("," + r + ",")) ||
                    wu.ScriptLoader.add(t[e] + "/langs/" + r + ".js");
                },
                "loaded"
              );
          },
          add: function (t, r, i) {
            var a = r;
            return (
              e.push(a),
              (n[t] = { instance: a, dependencies: i }),
              o(t, "added"),
              a
            );
          },
          remove: function (e) {
            delete t[e], delete n[e];
          },
          createUrl: a,
          addComponents: function (e, n) {
            var r = t[e];
            $(n, function (e) {
              wu.ScriptLoader.add(r + "/" + e);
            });
          },
          load: u,
          waitFor: c,
        };
      };
    (ku.languageLoad = !0),
      (ku.baseURL = ""),
      (ku.PluginManager = ku()),
      (ku.ThemeManager = ku());
    var Au = function (e, t) {
        var n = null;
        return {
          cancel: function () {
            null !== n && (clearTimeout(n), (n = null));
          },
          throttle: function () {
            for (var r = [], o = 0; o < arguments.length; o++)
              r[o] = arguments[o];
            null === n &&
              (n = setTimeout(function () {
                e.apply(null, r), (n = null);
              }, t));
          },
        };
      },
      Ru = function (e, t) {
        var n = null;
        return {
          cancel: function () {
            null !== n && (clearTimeout(n), (n = null));
          },
          throttle: function () {
            for (var r = [], o = 0; o < arguments.length; o++)
              r[o] = arguments[o];
            null !== n && clearTimeout(n),
              (n = setTimeout(function () {
                e.apply(null, r), (n = null);
              }, t));
          },
        };
      },
      Tu = function (e, t) {
        var n = er(e, t);
        return void 0 === n || "" === n ? [] : n.split(" ");
      },
      Du = function (e) {
        return void 0 !== e.dom.classList;
      },
      Ou = function (e, t) {
        return (function (e, t, n) {
          var r = Tu(e, t).concat([n]);
          return Qn(e, t, r.join(" ")), !0;
        })(e, "class", t);
      },
      Bu = function (e, t) {
        return (function (e, t, n) {
          var r = K(Tu(e, t), function (e) {
            return e !== n;
          });
          return r.length > 0 ? Qn(e, t, r.join(" ")) : nr(e, t), !1;
        })(e, "class", t);
      },
      Pu = function (e, t) {
        Du(e) ? e.dom.classList.add(t) : Ou(e, t);
      },
      Lu = function (e) {
        0 ===
          (Du(e)
            ? e.dom.classList
            : (function (e) {
                return Tu(e, "class");
              })(e)
          ).length && nr(e, "class");
      },
      Iu = function (e, t) {
        return Du(e) && e.dom.classList.contains(t);
      },
      Mu = function (e, t) {
        var n = [];
        return (
          $(en(e), function (e) {
            t(e) && (n = n.concat([e])), (n = n.concat(Mu(e, t)));
          }),
          n
        );
      },
      Fu = function (e, t) {
        return (function (e, t) {
          var n = void 0 === t ? document : t.dom;
          return Bt(n) ? [] : q(n.querySelectorAll(e), Tt.fromDom);
        })(t, e);
      },
      Uu = x("mce-annotation"),
      ju = x("data-mce-annotation"),
      zu = x("data-mce-annotation-uid"),
      Vu = function (e, t) {
        var n = e.selection.getRng(),
          r = Tt.fromDom(n.startContainer),
          o = Tt.fromDom(e.getBody()),
          i = t.fold(
            function () {
              return "." + Uu();
            },
            function (e) {
              return "[" + ju() + '="' + e + '"]';
            }
          ),
          a = tn(r, n.startOffset).getOr(r),
          u = Zr(a, i, function (e) {
            return Pt(e, o);
          }),
          c = function (e, t) {
            return (
              (n = t),
              (r = e.dom) && r.hasAttribute && r.hasAttribute(n)
                ? M.some(er(e, t))
                : M.none()
            );
            var n, r;
          };
        return u.bind(function (t) {
          return c(t, "" + zu()).bind(function (n) {
            return c(t, "" + ju()).map(function (t) {
              var r = Hu(e, n);
              return { uid: n, name: t, elements: r };
            });
          });
        });
      },
      Hu = function (e, t) {
        var n = Tt.fromDom(e.getBody());
        return Fu(n, "[" + zu() + '="' + t + '"]');
      },
      qu = function (e, t) {
        var n = xu({}),
          r = function (e, t) {
            o(e, function (e) {
              return t(e), e;
            });
          },
          o = function (e, t) {
            var r = n.get(),
              o = t(
                r.hasOwnProperty(e)
                  ? r[e]
                  : { listeners: [], previous: xu(M.none()) }
              );
            (r[e] = o), n.set(r);
          },
          i = Ru(function () {
            var t,
              i,
              a,
              u = n.get(),
              c = ((t = ae(u)), (a = F.call(t, 0)).sort(i), a);
            $(c, function (t) {
              o(t, function (n) {
                var o = n.previous.get();
                return (
                  Vu(e, M.some(t)).fold(
                    function () {
                      o.isSome() &&
                        ((function (e) {
                          r(e, function (t) {
                            $(t.listeners, function (t) {
                              return t(!1, e);
                            });
                          });
                        })(t),
                        n.previous.set(M.none()));
                    },
                    function (e) {
                      var t = e.uid,
                        i = e.name,
                        a = e.elements;
                      o.is(t) ||
                        ((function (e, t, n) {
                          r(e, function (r) {
                            $(r.listeners, function (r) {
                              return r(!0, e, {
                                uid: t,
                                nodes: q(n, function (e) {
                                  return e.dom;
                                }),
                              });
                            });
                          });
                        })(i, t, a),
                        n.previous.set(M.some(t)));
                    }
                  ),
                  { previous: n.previous, listeners: n.listeners }
                );
              });
            });
          }, 30);
        return (
          e.on("remove", function () {
            i.cancel();
          }),
          e.on("NodeChange", function () {
            i.throttle();
          }),
          {
            addListener: function (e, t) {
              o(e, function (e) {
                return {
                  previous: e.previous,
                  listeners: e.listeners.concat([t]),
                };
              });
            },
          }
        );
      },
      $u = function (e, t) {
        e.on("init", function () {
          e.serializer.addNodeFilter("span", function (e) {
            $(e, function (e) {
              (function (e) {
                return M.from(e.attr(ju())).bind(t.lookup);
              })(e).each(function (t) {
                !1 === t.persistent && e.unwrap();
              });
            });
          });
        });
      },
      Wu = 0,
      Ku = function (e) {
        var t = new Date().getTime();
        return e + "_" + Math.floor(1e9 * Math.random()) + ++Wu + String(t);
      },
      Xu = function (e, t) {
        var n,
          r,
          o = Wt(e).dom,
          i = Tt.fromDom(o.createDocumentFragment()),
          a =
            ((n = t),
            ((r = (o || document).createElement("div")).innerHTML = n),
            en(Tt.fromDom(r)));
        hn(i, a), vn(e), gn(e, i);
      },
      Yu = function (e, t) {
        return Tt.fromDom(e.dom.cloneNode(t));
      },
      Gu = function (e) {
        return Yu(e, !1);
      },
      Ju = function (e) {
        return Yu(e, !0);
      },
      Qu = function (e, t, n) {
        void 0 === n && (n = O);
        var r = new so(e, t),
          o = function (e) {
            var t;
            do {
              t = r[e]();
            } while (t && !jn(t) && !n(t));
            return M.from(t).filter(jn);
          };
        return {
          current: function () {
            return M.from(r.current()).filter(jn);
          },
          next: function () {
            return o("next");
          },
          prev: function () {
            return o("prev");
          },
          prev2: function () {
            return o("prev2");
          },
        };
      },
      Zu = function (e, t) {
        var n =
            t ||
            function (t) {
              return e.isBlock(t) || qn(t) || Kn(t);
            },
          r = function (e, t, n, o) {
            if (jn(e)) {
              var i = o(e, t, e.data);
              if (-1 !== i) return M.some({ container: e, offset: i });
            }
            return n().bind(function (e) {
              return r(e.container, e.offset, n, o);
            });
          };
        return {
          backwards: function (e, t, o, i) {
            var a = Qu(e, i, n);
            return r(
              e,
              t,
              function () {
                return a.prev().map(function (e) {
                  return { container: e, offset: e.length };
                });
              },
              o
            ).getOrNull();
          },
          forwards: function (e, t, o, i) {
            var a = Qu(e, i, n);
            return r(
              e,
              t,
              function () {
                return a.next().map(function (e) {
                  return { container: e, offset: 0 };
                });
              },
              o
            ).getOrNull();
          },
        };
      },
      ec = function (e, t, n) {
        return e.isSome() && t.isSome()
          ? M.some(n(e.getOrDie(), t.getOrDie()))
          : M.none();
      },
      tc = Math.round,
      nc = function (e) {
        return e
          ? {
              left: tc(e.left),
              top: tc(e.top),
              bottom: tc(e.bottom),
              right: tc(e.right),
              width: tc(e.width),
              height: tc(e.height),
            }
          : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 };
      },
      rc = function (e, t) {
        return (
          (e = nc(e)),
          t || (e.left = e.left + e.width),
          (e.right = e.left),
          (e.width = 0),
          e
        );
      },
      oc = function (e, t, n) {
        return e >= 0 && e <= Math.min(t.height, n.height) / 2;
      },
      ic = function (e, t) {
        var n = Math.min(t.height / 2, e.height / 2);
        return (
          e.bottom - n < t.top ||
          (!(e.top > t.bottom) && oc(t.top - e.bottom, e, t))
        );
      },
      ac = function (e, t) {
        return (
          e.top > t.bottom ||
          (!(e.bottom < t.top) && oc(t.bottom - e.top, e, t))
        );
      },
      uc = function (e, t, n) {
        return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom;
      },
      cc = function (e) {
        var t = e.startContainer,
          n = e.startOffset;
        return t.hasChildNodes() && e.endOffset === n + 1
          ? t.childNodes[n]
          : null;
      },
      sc = function (e, t) {
        return (
          1 === e.nodeType &&
            e.hasChildNodes() &&
            (t >= e.childNodes.length && (t = e.childNodes.length - 1),
            (e = e.childNodes[t])),
          e
        );
      },
      lc = new RegExp(
        "[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"
      ),
      fc = function (e) {
        return "string" == typeof e && e.charCodeAt(0) >= 768 && lc.test(e);
      },
      dc = On,
      mc = Wo,
      pc = Pn("display", "block table"),
      gc = Pn("float", "left right"),
      hc = (function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function (t) {
          for (var n = 0; n < e.length; n++) if (!e[n](t)) return !1;
          return !0;
        };
      })(dc, mc, A(gc)),
      vc = A(Pn("white-space", "pre pre-line pre-wrap")),
      yc = jn,
      bc = qn,
      Cc = vu.nodeIndex,
      wc = sc,
      xc = function (e) {
        return "createRange" in e ? e.createRange() : vu.DOM.createRng();
      },
      _c = function (e) {
        return e && /[\r\n\t ]/.test(e);
      },
      Sc = function (e) {
        return !!e.setStart && !!e.setEnd;
      },
      Ec = function (e) {
        var t,
          n = e.startContainer,
          r = e.startOffset;
        return !!(
          _c(e.toString()) &&
          vc(n.parentNode) &&
          jn(n) &&
          ((t = n.data), _c(t[r - 1]) || _c(t[r + 1]))
        );
      },
      Nc = function (e) {
        return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom;
      },
      kc = function (e) {
        var t,
          n = e.getClientRects();
        return (
          (t = n.length > 0 ? nc(n[0]) : nc(e.getBoundingClientRect())),
          !Sc(e) && bc(e) && Nc(t)
            ? (function (e) {
                var t = e.ownerDocument,
                  n = xc(t),
                  r = t.createTextNode(xo),
                  o = e.parentNode;
                o.insertBefore(r, e), n.setStart(r, 0), n.setEnd(r, 1);
                var i = nc(n.getBoundingClientRect());
                return o.removeChild(r), i;
              })(e)
            : Nc(t) && Sc(e)
            ? (function (e) {
                var t = e.startContainer,
                  n = e.endContainer,
                  r = e.startOffset,
                  o = e.endOffset;
                if (t === n && jn(n) && 0 === r && 1 === o) {
                  var i = e.cloneRange();
                  return i.setEndAfter(n), kc(i);
                }
                return null;
              })(e)
            : t
        );
      },
      Ac = function (e, t) {
        var n = rc(e, t);
        return (n.width = 1), (n.right = n.left + 1), n;
      },
      Rc = function (e, t, n) {
        var r = function () {
          return (
            n ||
              (n = (function (e) {
                var t,
                  n,
                  r = [],
                  o = function (e) {
                    var t, n;
                    0 !== e.height &&
                      ((r.length > 0 &&
                        ((t = e),
                        (n = r[r.length - 1]),
                        t.left === n.left &&
                          t.top === n.top &&
                          t.bottom === n.bottom &&
                          t.right === n.right)) ||
                        r.push(e));
                  },
                  i = function (e, t) {
                    var n = xc(e.ownerDocument);
                    if (t < e.data.length) {
                      if (fc(e.data[t])) return r;
                      if (
                        fc(e.data[t - 1]) &&
                        (n.setStart(e, t), n.setEnd(e, t + 1), !Ec(n))
                      )
                        return o(Ac(kc(n), !1)), r;
                    }
                    t > 0 &&
                      (n.setStart(e, t - 1),
                      n.setEnd(e, t),
                      Ec(n) || o(Ac(kc(n), !1))),
                      t < e.data.length &&
                        (n.setStart(e, t),
                        n.setEnd(e, t + 1),
                        Ec(n) || o(Ac(kc(n), !0)));
                  };
                if (yc(e.container())) return i(e.container(), e.offset()), r;
                if (dc(e.container()))
                  if (e.isAtEnd())
                    (n = wc(e.container(), e.offset())),
                      yc(n) && i(n, n.data.length),
                      hc(n) && !bc(n) && o(Ac(kc(n), !1));
                  else {
                    if (
                      ((n = wc(e.container(), e.offset())),
                      yc(n) && i(n, 0),
                      hc(n) && e.isAtEnd())
                    )
                      return o(Ac(kc(n), !1)), r;
                    (t = wc(e.container(), e.offset() - 1)),
                      hc(t) &&
                        !bc(t) &&
                        (pc(t) || pc(n) || !hc(n)) &&
                        o(Ac(kc(t), !1)),
                      hc(n) && o(Ac(kc(n), !0));
                  }
                return r;
              })(Rc(e, t))),
            n
          );
        };
        return {
          container: x(e),
          offset: x(t),
          toRange: function () {
            var n = xc(e.ownerDocument);
            return n.setStart(e, t), n.setEnd(e, t), n;
          },
          getClientRects: r,
          isVisible: function () {
            return r().length > 0;
          },
          isAtStart: function () {
            return yc(e), 0 === t;
          },
          isAtEnd: function () {
            return yc(e) ? t >= e.data.length : t >= e.childNodes.length;
          },
          isEqual: function (n) {
            return n && e === n.container() && t === n.offset();
          },
          getNode: function (n) {
            return wc(e, n ? t - 1 : t);
          },
        };
      };
    (Rc.fromRangeStart = function (e) {
      return Rc(e.startContainer, e.startOffset);
    }),
      (Rc.fromRangeEnd = function (e) {
        return Rc(e.endContainer, e.endOffset);
      }),
      (Rc.after = function (e) {
        return Rc(e.parentNode, Cc(e) + 1);
      }),
      (Rc.before = function (e) {
        return Rc(e.parentNode, Cc(e));
      }),
      (Rc.isAbove = function (e, t) {
        return ec(re(t.getClientRects()), oe(e.getClientRects()), ic).getOr(!1);
      }),
      (Rc.isBelow = function (e, t) {
        return ec(oe(t.getClientRects()), re(e.getClientRects()), ac).getOr(!1);
      }),
      (Rc.isAtStart = function (e) {
        return !!e && e.isAtStart();
      }),
      (Rc.isAtEnd = function (e) {
        return !!e && e.isAtEnd();
      }),
      (Rc.isTextPosition = function (e) {
        return !!e && jn(e.container());
      }),
      (Rc.isElementPosition = function (e) {
        return !1 === Rc.isTextPosition(e);
      });
    var Tc,
      Dc,
      Oc = function (e, t) {
        jn(t) && 0 === t.data.length && e.remove(t);
      },
      Bc = function (e, t, n) {
        Hn(n)
          ? (function (e, t, n) {
              var r = M.from(n.firstChild),
                o = M.from(n.lastChild);
              t.insertNode(n),
                r.each(function (t) {
                  return Oc(e, t.previousSibling);
                }),
                o.each(function (t) {
                  return Oc(e, t.nextSibling);
                });
            })(e, t, n)
          : (function (e, t, n) {
              t.insertNode(n), Oc(e, n.previousSibling), Oc(e, n.nextSibling);
            })(e, t, n);
      },
      Pc = jn,
      Lc = In,
      Ic = vu.nodeIndex,
      Mc = function (e) {
        var t = e.parentNode;
        return Lc(t) ? Mc(t) : t;
      },
      Fc = function (e) {
        return e
          ? Se(
              e.childNodes,
              function (e, t) {
                return (
                  Lc(t) && "BR" !== t.nodeName
                    ? (e = e.concat(Fc(t)))
                    : e.push(t),
                  e
                );
              },
              []
            )
          : [];
      },
      Uc = function (e) {
        return function (t) {
          return e === t;
        };
      },
      jc = function (e) {
        return (
          (Pc(e) ? "text()" : e.nodeName.toLowerCase()) +
          "[" +
          (function (e) {
            var t, n;
            (t = Fc(Mc(e))), (n = Ee(t, Uc(e), e)), (t = t.slice(0, n + 1));
            var r = Se(
              t,
              function (e, n, r) {
                return Pc(n) && Pc(t[r - 1]) && e++, e;
              },
              0
            );
            return (t = xe(t, Bn([e.nodeName]))), (n = Ee(t, Uc(e), e)) - r;
          })(e) +
          "]"
        );
      },
      zc = function (e, t) {
        var n,
          r,
          o,
          i,
          a,
          u = [];
        return (
          (n = t.container()),
          (r = t.offset()),
          Pc(n)
            ? (o = (function (e, t) {
                for (; (e = e.previousSibling) && Pc(e); ) t += e.data.length;
                return t;
              })(n, r))
            : (r >= (i = n.childNodes).length
                ? ((o = "after"), (r = i.length - 1))
                : (o = "before"),
              (n = i[r])),
          u.push(jc(n)),
          (a = (function (e, t, n) {
            var r = [];
            for (t = t.parentNode; !(t === e || (n && n(t))); t = t.parentNode)
              r.push(t);
            return r;
          })(e, n)),
          (a = xe(a, A(In))),
          (u = u.concat(
            we(a, function (e) {
              return jc(e);
            })
          ))
            .reverse()
            .join("/") +
            "," +
            o
        );
      },
      Vc = function (e, t) {
        var n;
        if (!t) return null;
        var r = t.split(","),
          o = r[0].split("/");
        n = r.length > 1 ? r[1] : "before";
        var i = Se(
          o,
          function (e, t) {
            var n,
              r,
              o,
              i,
              a = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
            return a
              ? ("text()" === a[1] && (a[1] = "#text"),
                (n = e),
                (r = a[1]),
                (o = parseInt(a[2], 10)),
                (i = Fc(n)),
                (i = xe(i, function (e, t) {
                  return !Pc(e) || !Pc(i[t - 1]);
                })),
                (i = xe(i, Bn([r])))[o])
              : null;
          },
          e
        );
        return i
          ? Pc(i)
            ? (function (e, t) {
                for (var n, r = e, o = 0; Pc(r); ) {
                  if (((n = r.data.length), t >= o && t <= o + n)) {
                    (e = r), (t -= o);
                    break;
                  }
                  if (!Pc(r.nextSibling)) {
                    (e = r), (t = n);
                    break;
                  }
                  (o += n), (r = r.nextSibling);
                }
                return (
                  Pc(e) && t > e.data.length && (t = e.data.length), Rc(e, t)
                );
              })(i, parseInt(n, 10))
            : ((n = "after" === n ? Ic(i) + 1 : Ic(i)), Rc(i.parentNode, n))
          : null;
      },
      Hc = Kn,
      qc = function (e, t, n, r, o) {
        var i,
          a = r[o ? "startContainer" : "endContainer"],
          u = r[o ? "startOffset" : "endOffset"],
          c = [],
          s = 0,
          l = e.getRoot();
        for (
          jn(a)
            ? c.push(
                n
                  ? (function (e, t, n) {
                      var r, o;
                      for (
                        o = e(t.data.slice(0, n)).length, r = t.previousSibling;
                        r && jn(r);
                        r = r.previousSibling
                      )
                        o += e(r.data).length;
                      return o;
                    })(t, a, u)
                  : u
              )
            : (u >= (i = a.childNodes).length &&
                i.length &&
                ((s = 1), (u = Math.max(0, i.length - 1))),
              c.push(e.nodeIndex(i[u], n) + s));
          a && a !== l;
          a = a.parentNode
        )
          c.push(e.nodeIndex(a, n));
        return c;
      },
      $c = function (e, t, n) {
        var r = 0;
        return (
          At.each(e.select(t), function (e) {
            if ("all" !== e.getAttribute("data-mce-bogus"))
              return e !== n && void r++;
          }),
          r
        );
      },
      Wc = function (e, t) {
        var n,
          r,
          o,
          i = t ? "start" : "end";
        (n = e[i + "Container"]),
          (r = e[i + "Offset"]),
          On(n) &&
            "TR" === n.nodeName &&
            (n = (o = n.childNodes)[Math.min(t ? r : r - 1, o.length - 1)]) &&
            ((r = t ? 0 : n.childNodes.length),
            e["set" + (t ? "Start" : "End")](n, r));
      },
      Kc = function (e) {
        return Wc(e, !0), Wc(e, !1), e;
      },
      Xc = function (e, t) {
        var n;
        if (On(e) && ((e = sc(e, t)), Hc(e))) return e;
        if (To(e)) {
          if (
            (jn(e) && Ao(e) && (e = e.parentNode),
            (n = e.previousSibling),
            Hc(n))
          )
            return n;
          if (((n = e.nextSibling), Hc(n))) return n;
        }
      },
      Yc = function (e, t, n) {
        var r = n.getNode(),
          o = r ? r.nodeName : null,
          i = n.getRng();
        if (Hc(r) || "IMG" === o) return { name: o, index: $c(n.dom, o, r) };
        var a = (function (e) {
          return (
            Xc(e.startContainer, e.startOffset) ||
            Xc(e.endContainer, e.endOffset)
          );
        })(i);
        return a
          ? { name: (o = a.tagName), index: $c(n.dom, o, a) }
          : (function (e, t, n, r) {
              var o = t.dom,
                i = {};
              return (
                (i.start = qc(o, e, n, r, !0)),
                t.isCollapsed() || (i.end = qc(o, e, n, r, !1)),
                i
              );
            })(e, n, t, i);
      },
      Gc = function (e, t, n) {
        var r = {
          "data-mce-type": "bookmark",
          id: t,
          style: "overflow:hidden;line-height:0px",
        };
        return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r);
      },
      Jc = function (e, t) {
        var n = e.dom,
          r = e.getRng(),
          o = n.uniqueId(),
          i = e.isCollapsed(),
          a = e.getNode(),
          u = a.nodeName;
        if ("IMG" === u) return { name: u, index: $c(n, u, a) };
        var c = Kc(r.cloneRange());
        if (!i) {
          c.collapse(!1);
          var s = Gc(n, o + "_end", t);
          Bc(n, c, s);
        }
        (r = Kc(r)).collapse(!0);
        var l = Gc(n, o + "_start", t);
        return Bc(n, r, l), e.moveToBookmark({ id: o, keep: !0 }), { id: o };
      },
      Qc = function (e, t, n) {
        return 2 === t
          ? Yc(Eo, n, e)
          : 3 === t
          ? (function (e) {
              var t = e.getRng();
              return {
                start: zc(e.dom.getRoot(), Rc.fromRangeStart(t)),
                end: zc(e.dom.getRoot(), Rc.fromRangeEnd(t)),
              };
            })(e)
          : t
          ? (function (e) {
              return { rng: e.getRng() };
            })(e)
          : Jc(e, !1);
      },
      Zc = S(Yc, _, !0),
      es = vu.DOM,
      ts = function (e, t, n) {
        var r = e.getParam(t, n);
        if (-1 !== r.indexOf("=")) {
          var o = e.getParam(t, "", "hash");
          return o.hasOwnProperty(e.id) ? o[e.id] : n;
        }
        return r;
      },
      ns = function (e) {
        return e.getParam("content_security_policy", "");
      },
      rs = function (e) {
        if (e.getParam("force_p_newlines", !1)) return "p";
        var t = e.getParam("forced_root_block", "p");
        return !1 === t ? "" : !0 === t ? "p" : t;
      },
      os = function (e) {
        return e.getParam("forced_root_block_attrs", {});
      },
      is = function (e) {
        return e.getParam("automatic_uploads", !0, "boolean");
      },
      as = function (e) {
        return e.getParam("images_reuse_filename", !1, "boolean");
      },
      us = function (e) {
        return e.getParam("icons", "", "string");
      },
      cs = function (e) {
        return e.getParam("images_upload_url", "", "string");
      },
      ss = function (e) {
        return e.getParam("images_upload_base_path", "", "string");
      },
      ls = function (e) {
        return e.getParam("images_upload_credentials", !1, "boolean");
      },
      fs = function (e) {
        return e.getParam("images_upload_handler", null, "function");
      },
      ds = function (e) {
        return e.getParam("content_css_cors", !1, "boolean");
      },
      ms = function (e) {
        return e.getParam("referrer_policy", "", "string");
      },
      ps = function (e) {
        return e.getParam("language", "en", "string");
      },
      gs = function (e) {
        return e.getParam("indent_use_margin", !1);
      },
      hs = function (e) {
        var t = e.getParam("font_css", []);
        return d(t) ? t : q(t.split(","), ze);
      },
      vs = function (e) {
        var t = e.getParam("object_resizing");
        return (
          !1 !== t &&
          !_t.iOS &&
          (l(t) ? t : "table,img,figure.image,div,video,iframe")
        );
      },
      ys = function (e) {
        return e.getParam("event_root");
      },
      bs = function (e) {
        return e.getParam("theme");
      },
      Cs = function (e) {
        return e.getParam("validate");
      },
      ws = function (e) {
        return !1 !== e.getParam("inline_boundaries");
      },
      xs = function (e) {
        return e.getParam("content_css_cors");
      },
      _s = function (e) {
        return e.getParam("plugins", "", "string");
      },
      Ss = On,
      Es = jn,
      Ns = function (e) {
        var t = e.parentNode;
        t && t.removeChild(e);
      },
      ks = function (e) {
        var t = Eo(e);
        return { count: e.length - t.length, text: t };
      },
      As = function (e) {
        for (var t; -1 !== (t = e.data.lastIndexOf(_o)); ) e.deleteData(t, 1);
      },
      Rs = function (e, t) {
        return Bs(e), t;
      },
      Ts = function (e, t) {
        var n = t.container(),
          r = (function (e, t) {
            var n = z(e, t);
            return -1 === n ? M.none() : M.some(n);
          })(ie(n.childNodes), e)
            .map(function (e) {
              return e < t.offset() ? Rc(n, t.offset() - 1) : t;
            })
            .getOr(t);
        return Bs(e), r;
      },
      Ds = function (e, t) {
        return Es(e) && t.container() === e
          ? (function (e, t) {
              var n = ks(e.data.substr(0, t.offset())),
                r = ks(e.data.substr(t.offset()));
              return (n.text + r.text).length > 0
                ? (As(e), Rc(e, t.offset() - n.count))
                : t;
            })(e, t)
          : Rs(e, t);
      },
      Os = function (e, t) {
        return Rc.isTextPosition(t)
          ? Ds(e, t)
          : (function (e, t) {
              return t.container() === e.parentNode ? Ts(e, t) : Rs(e, t);
            })(e, t);
      },
      Bs = function (e) {
        Ss(e) && To(e) && (Do(e) ? e.removeAttribute("data-mce-caret") : Ns(e)),
          Es(e) && (As(e), 0 === e.data.length && Ns(e));
      },
      Ps = pt().browser,
      Ls = Kn,
      Is = Yn,
      Ms = Xn,
      Fs = function (e, t, n) {
        var r,
          o,
          i,
          a,
          u,
          c = rc(t.getBoundingClientRect(), n);
        return (
          "BODY" === e.tagName
            ? ((r = e.ownerDocument.documentElement),
              (o = e.scrollLeft || r.scrollLeft),
              (i = e.scrollTop || r.scrollTop))
            : ((u = e.getBoundingClientRect()),
              (o = e.scrollLeft - u.left),
              (i = e.scrollTop - u.top)),
          (c.left += o),
          (c.right += o),
          (c.top += i),
          (c.bottom += i),
          (c.width = 1),
          (a = t.offsetWidth - t.clientWidth) > 0 &&
            (n && (a *= -1), (c.left += a), (c.right += a)),
          c
        );
      },
      Us = function (e, t, n, r) {
        var o,
          i,
          a = xu(M.none()),
          u = rs(e),
          c = u.length > 0 ? u : "p",
          s = function () {
            !(function (e) {
              for (
                var t = Fu(
                    Tt.fromDom(e),
                    "*[contentEditable=false],video,audio,embed,object"
                  ),
                  n = 0;
                n < t.length;
                n++
              ) {
                var r,
                  o = t[n].dom,
                  i = o.previousSibling;
                Io(i) &&
                  (1 === (r = i.data).length
                    ? i.parentNode.removeChild(i)
                    : i.deleteData(r.length - 1, 1)),
                  (i = o.nextSibling),
                  Lo(i) &&
                    (1 === (r = i.data).length
                      ? i.parentNode.removeChild(i)
                      : i.deleteData(0, 1));
              }
            })(t),
              i && (Bs(i), (i = null)),
              a.get().each(function (e) {
                lu(e.caret).remove(), a.set(M.none());
              }),
              o && (ao.clearInterval(o), (o = null));
          },
          l = function () {
            o = ao.setInterval(function () {
              r()
                ? lu("div.mce-visual-caret", t).toggleClass(
                    "mce-visual-caret-hidden"
                  )
                : lu("div.mce-visual-caret", t).addClass(
                    "mce-visual-caret-hidden"
                  );
            }, 500);
          };
        return {
          show: function (e, r) {
            var o, u;
            if ((s(), Ms(r))) return null;
            if (!n(r))
              return (
                (i = (function (e, t) {
                  var n,
                    r = e.ownerDocument.createTextNode(_o),
                    o = e.parentNode;
                  if (t) {
                    if (((n = e.previousSibling), ko(n))) {
                      if (To(n)) return n;
                      if (Io(n)) return n.splitText(n.data.length - 1);
                    }
                    o.insertBefore(r, e);
                  } else {
                    if (((n = e.nextSibling), ko(n))) {
                      if (To(n)) return n;
                      if (Lo(n)) return n.splitText(1), n;
                    }
                    e.nextSibling
                      ? o.insertBefore(r, e.nextSibling)
                      : o.appendChild(r);
                  }
                  return r;
                })(r, e)),
                (u = r.ownerDocument.createRange()),
                zs(i.nextSibling)
                  ? (u.setStart(i, 0), u.setEnd(i, 0))
                  : (u.setStart(i, 1), u.setEnd(i, 1)),
                u
              );
            (i = Po(c, r, e)), (o = Fs(t, r, e)), lu(i).css("top", o.top);
            var f = lu(
              '<div class="mce-visual-caret" data-mce-bogus="all"></div>'
            )
              .css(o)
              .appendTo(t)[0];
            return (
              a.set(M.some({ caret: f, element: r, before: e })),
              a.get().each(function (t) {
                e && lu(t.caret).addClass("mce-visual-caret-before");
              }),
              l(),
              (u = r.ownerDocument.createRange()).setStart(i, 0),
              u.setEnd(i, 0),
              u
            );
          },
          hide: s,
          getCss: function () {
            return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
          },
          reposition: function () {
            a.get().each(function (e) {
              var n = Fs(t, e.element, e.before);
              lu(e.caret).css(ke({}, n));
            });
          },
          destroy: function () {
            return ao.clearInterval(o);
          },
        };
      },
      js = function () {
        return Ps.isIE() || Ps.isEdge() || Ps.isFirefox();
      },
      zs = function (e) {
        return Ls(e) || Is(e);
      },
      Vs = function (e) {
        return zs(e) || (Mn(e) && js());
      },
      Hs = Kn,
      qs = Yn,
      $s = Pn("display", "block table table-cell table-caption list-item"),
      Ws = To,
      Ks = Ao,
      Xs = On,
      Ys = Wo,
      Gs = function (e) {
        return e > 0;
      },
      Js = function (e) {
        return e < 0;
      },
      Qs = function (e, t) {
        for (var n; (n = e(t)); ) if (!Ks(n)) return n;
        return null;
      },
      Zs = function (e, t, n, r, o) {
        var i = new so(e, r),
          a = Hs(e) || Ks(e);
        if (Js(t)) {
          if (a && n((e = Qs(i.prev.bind(i), !0)))) return e;
          for (; (e = Qs(i.prev.bind(i), o)); ) if (n(e)) return e;
        }
        if (Gs(t)) {
          if (a && n((e = Qs(i.next.bind(i), !0)))) return e;
          for (; (e = Qs(i.next.bind(i), o)); ) if (n(e)) return e;
        }
        return null;
      },
      el = function (e, t) {
        for (; e && e !== t; ) {
          if ($s(e)) return e;
          e = e.parentNode;
        }
        return null;
      },
      tl = function (e, t, n) {
        return el(e.container(), n) === el(t.container(), n);
      },
      nl = function (e, t) {
        if (!t) return null;
        var n = t.container(),
          r = t.offset();
        return Xs(n) ? n.childNodes[r + e] : null;
      },
      rl = function (e, t) {
        var n = t.ownerDocument.createRange();
        return (
          e
            ? (n.setStartBefore(t), n.setEndBefore(t))
            : (n.setStartAfter(t), n.setEndAfter(t)),
          n
        );
      },
      ol = function (e, t, n) {
        return el(t, e) === el(n, e);
      },
      il = function (e, t, n) {
        var r, o;
        for (o = e ? "previousSibling" : "nextSibling"; n && n !== t; ) {
          if (((r = n[o]), Ws(r) && (r = r[o]), Hs(r) || qs(r))) {
            if (ol(t, r, n)) return r;
            break;
          }
          if (Ys(r)) break;
          n = n.parentNode;
        }
        return null;
      },
      al = S(rl, !0),
      ul = S(rl, !1),
      cl = function (e, t, n) {
        var r,
          o,
          i,
          a = S(il, !0, t),
          u = S(il, !1, t);
        o = n.startContainer;
        var c = n.startOffset;
        if (Ao(o)) {
          if (
            (Xs(o) || (o = o.parentNode),
            "before" === (i = o.getAttribute("data-mce-caret")) &&
              ((r = o.nextSibling), Vs(r)))
          )
            return al(r);
          if ("after" === i && ((r = o.previousSibling), Vs(r))) return ul(r);
        }
        if (!n.collapsed) return n;
        if (jn(o)) {
          if (Ws(o)) {
            if (1 === e) {
              if ((r = u(o))) return al(r);
              if ((r = a(o))) return ul(r);
            }
            if (-1 === e) {
              if ((r = a(o))) return ul(r);
              if ((r = u(o))) return al(r);
            }
            return n;
          }
          if (Io(o) && c >= o.data.length - 1)
            return 1 === e && (r = u(o)) ? al(r) : n;
          if (Lo(o) && c <= 1) return -1 === e && (r = a(o)) ? ul(r) : n;
          if (c === o.data.length) return (r = u(o)) ? al(r) : n;
          if (0 === c) return (r = a(o)) ? ul(r) : n;
        }
        return n;
      },
      sl = function (e, t) {
        return M.from(nl(e ? 0 : -1, t)).filter(Hs);
      },
      ll = function (e, t, n) {
        var r = cl(e, t, n);
        return -1 === e ? Rc.fromRangeStart(r) : Rc.fromRangeEnd(r);
      },
      fl = function (e) {
        return M.from(e.getNode()).map(Tt.fromDom);
      },
      dl = function (e, t) {
        for (; (t = e(t)); ) if (t.isVisible()) return t;
        return t;
      },
      ml = function (e, t) {
        var n = tl(e, t);
        return !(n || !qn(e.getNode())) || n;
      };
    ((Dc = Tc || (Tc = {}))[(Dc.Backwards = -1)] = "Backwards"),
      (Dc[(Dc.Forwards = 1)] = "Forwards");
    var pl,
      gl,
      hl,
      vl,
      yl = Kn,
      bl = jn,
      Cl = On,
      wl = qn,
      xl = Wo,
      _l = function (e) {
        return (
          Ho(e) ||
          (function (e) {
            return (
              !!Ko(e) &&
              !0 !==
                Y(
                  ie(e.getElementsByTagName("*")),
                  function (e, t) {
                    return e || Fo(t);
                  },
                  !1
                )
            );
          })(e)
        );
      },
      Sl = Xo,
      El = function (e, t) {
        return e.hasChildNodes() && t < e.childNodes.length
          ? e.childNodes[t]
          : null;
      },
      Nl = function (e, t) {
        if (Gs(e)) {
          if (xl(t.previousSibling) && !bl(t.previousSibling))
            return Rc.before(t);
          if (bl(t)) return Rc(t, 0);
        }
        if (Js(e)) {
          if (xl(t.nextSibling) && !bl(t.nextSibling)) return Rc.after(t);
          if (bl(t)) return Rc(t, t.data.length);
        }
        return Js(e) ? (wl(t) ? Rc.before(t) : Rc.after(t)) : Rc.before(t);
      },
      kl = function (e, t, n) {
        var r, o, i, a;
        if (!Cl(n) || !t) return null;
        if (t.isEqual(Rc.after(n)) && n.lastChild) {
          if (
            ((a = Rc.after(n.lastChild)),
            Js(e) && xl(n.lastChild) && Cl(n.lastChild))
          )
            return wl(n.lastChild) ? Rc.before(n.lastChild) : a;
        } else a = t;
        var u = a.container(),
          c = a.offset();
        if (bl(u)) {
          if (Js(e) && c > 0) return Rc(u, --c);
          if (Gs(e) && c < u.length) return Rc(u, ++c);
          r = u;
        } else {
          if (Js(e) && c > 0 && ((o = El(u, c - 1)), xl(o)))
            return !_l(o) && (i = Zs(o, e, Sl, o))
              ? bl(i)
                ? Rc(i, i.data.length)
                : Rc.after(i)
              : bl(o)
              ? Rc(o, o.data.length)
              : Rc.before(o);
          if (Gs(e) && c < u.childNodes.length && ((o = El(u, c)), xl(o)))
            return wl(o)
              ? (function (e, t) {
                  var n = t.nextSibling;
                  return n && xl(n)
                    ? bl(n)
                      ? Rc(n, 0)
                      : Rc.before(n)
                    : kl(Tc.Forwards, Rc.after(t), e);
                })(n, o)
              : !_l(o) && (i = Zs(o, e, Sl, o))
              ? bl(i)
                ? Rc(i, 0)
                : Rc.before(i)
              : bl(o)
              ? Rc(o, 0)
              : Rc.after(o);
          r = o || a.getNode();
        }
        if (
          ((Gs(e) && a.isAtEnd()) || (Js(e) && a.isAtStart())) &&
          ((r = Zs(r, e, B, n, !0)), Sl(r, n))
        )
          return Nl(e, r);
        o = Zs(r, e, Sl, n);
        var s = Ne(
          K(
            (function (e, t) {
              for (var n = []; e && e !== t; ) n.push(e), (e = e.parentNode);
              return n;
            })(u, n),
            yl
          )
        );
        return !s || (o && s.contains(o))
          ? o
            ? Nl(e, o)
            : null
          : (a = Gs(e) ? Rc.after(s) : Rc.before(s));
      },
      Al = function (e) {
        return {
          next: function (t) {
            return kl(Tc.Forwards, t, e);
          },
          prev: function (t) {
            return kl(Tc.Backwards, t, e);
          },
        };
      },
      Rl = function (e) {
        return Rc.isTextPosition(e) ? 0 === e.offset() : Wo(e.getNode());
      },
      Tl = function (e) {
        if (Rc.isTextPosition(e)) {
          var t = e.container();
          return e.offset() === t.data.length;
        }
        return Wo(e.getNode(!0));
      },
      Dl = function (e, t) {
        return (
          !Rc.isTextPosition(e) &&
          !Rc.isTextPosition(t) &&
          e.getNode() === t.getNode(!0)
        );
      },
      Ol = function (e, t, n) {
        return e
          ? !Dl(t, n) &&
              ((r = t), !(!Rc.isTextPosition(r) && qn(r.getNode()))) &&
              Tl(t) &&
              Rl(n)
          : !Dl(n, t) && Rl(t) && Tl(n);
        var r;
      },
      Bl = function (e, t, n) {
        var r = Al(t);
        return M.from(e ? r.next(n) : r.prev(n));
      },
      Pl = function (e, t, n) {
        return Bl(e, t, n).bind(function (r) {
          return tl(n, r, t) && Ol(e, n, r) ? Bl(e, t, r) : M.some(r);
        });
      },
      Ll = function (e, t, n, r) {
        return Pl(e, t, n).bind(function (n) {
          return r(n) ? Ll(e, t, n, r) : M.some(n);
        });
      },
      Il = function (e, t) {
        var n,
          r = e ? t.firstChild : t.lastChild;
        return jn(r)
          ? M.some(Rc(r, e ? 0 : r.data.length))
          : r
          ? Wo(r)
            ? M.some(
                e ? Rc.before(r) : qn((n = r)) ? Rc.before(n) : Rc.after(n)
              )
            : (function (e, t, n) {
                var r = e ? Rc.before(n) : Rc.after(n);
                return Bl(e, t, r);
              })(e, t, r)
          : M.none();
      },
      Ml = S(Bl, !0),
      Fl = S(Bl, !1),
      Ul = S(Il, !0),
      jl = S(Il, !1),
      zl = "_mce_caret",
      Vl = function (e) {
        return On(e) && e.id === zl;
      },
      Hl = function (e, t) {
        for (; t && t !== e; ) {
          if (t.id === zl) return t;
          t = t.parentNode;
        }
        return null;
      },
      ql = function (e, t) {
        return (
          On(t) &&
            e.isBlock(t) &&
            !t.innerHTML &&
            !_t.ie &&
            (t.innerHTML = '<br data-mce-bogus="1" />'),
          t
        );
      },
      $l = function (e, t) {
        return jl(e).fold(O, function (e) {
          return (
            t.setStart(e.container(), e.offset()),
            t.setEnd(e.container(), e.offset()),
            !0
          );
        });
      },
      Wl = function (e, t, n) {
        return !(
          !(function (e) {
            return !1 === e.hasChildNodes();
          })(t) ||
          !Hl(e, t) ||
          ((function (e, t) {
            var n = e.ownerDocument.createTextNode(_o);
            e.appendChild(n), t.setStart(n, 0), t.setEnd(n, 0);
          })(t, n),
          0)
        );
      },
      Kl = function (e, t, n, r) {
        var o,
          i,
          a,
          u,
          c = n[t ? "start" : "end"],
          s = e.getRoot();
        if (c) {
          for (a = c[0], i = s, o = c.length - 1; o >= 1; o--) {
            if (((u = i.childNodes), Wl(s, i, r))) return !0;
            if (c[o] > u.length - 1) return !!Wl(s, i, r) || $l(i, r);
            i = u[c[o]];
          }
          3 === i.nodeType && (a = Math.min(c[0], i.nodeValue.length)),
            1 === i.nodeType && (a = Math.min(c[0], i.childNodes.length)),
            t ? r.setStart(i, a) : r.setEnd(i, a);
        }
        return !0;
      },
      Xl = function (e) {
        return jn(e) && e.data.length > 0;
      },
      Yl = function (e, t, n) {
        var r,
          o,
          i,
          a,
          u,
          c,
          s = e.get(n.id + "_" + t),
          l = n.keep;
        if (s) {
          if (
            ((r = s.parentNode),
            "start" === t
              ? (l
                  ? s.hasChildNodes()
                    ? ((r = s.firstChild), (o = 1))
                    : Xl(s.nextSibling)
                    ? ((r = s.nextSibling), (o = 0))
                    : Xl(s.previousSibling)
                    ? ((r = s.previousSibling),
                      (o = s.previousSibling.data.length))
                    : ((r = s.parentNode), (o = e.nodeIndex(s) + 1))
                  : (o = e.nodeIndex(s)),
                (u = r),
                (c = o))
              : (l
                  ? s.hasChildNodes()
                    ? ((r = s.firstChild), (o = 1))
                    : Xl(s.previousSibling)
                    ? ((r = s.previousSibling),
                      (o = s.previousSibling.data.length))
                    : ((r = s.parentNode), (o = e.nodeIndex(s)))
                  : (o = e.nodeIndex(s)),
                (u = r),
                (c = o)),
            !l)
          ) {
            for (
              a = s.previousSibling,
                i = s.nextSibling,
                At.each(At.grep(s.childNodes), function (e) {
                  jn(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
                });
              (s = e.get(n.id + "_" + t));

            )
              e.remove(s, !0);
            a &&
              i &&
              a.nodeType === i.nodeType &&
              jn(a) &&
              !_t.opera &&
              ((o = a.nodeValue.length),
              a.appendData(i.nodeValue),
              e.remove(i),
              (u = a),
              (c = o));
          }
          return M.some(Rc(u, c));
        }
        return M.none();
      },
      Gl = function (e, t) {
        var n = e.dom;
        if (t) {
          if (
            (function (e) {
              return At.isArray(e.start);
            })(t)
          )
            return (function (e, t) {
              var n = e.createRng();
              return Kl(e, !0, t, n) && Kl(e, !1, t, n) ? M.some(n) : M.none();
            })(n, t);
          if (
            (function (e) {
              return l(e.start);
            })(t)
          )
            return M.some(
              (function (e, t) {
                var n,
                  r = e.createRng();
                return (
                  (n = Vc(e.getRoot(), t.start)),
                  r.setStart(n.container(), n.offset()),
                  (n = Vc(e.getRoot(), t.end)),
                  r.setEnd(n.container(), n.offset()),
                  r
                );
              })(n, t)
            );
          if (
            (function (e) {
              return e.hasOwnProperty("id");
            })(t)
          )
            return (function (e, t) {
              var n = Yl(e, "start", t),
                r = Yl(e, "end", t);
              return ec(n, r.or(n), function (t, n) {
                var r = e.createRng();
                return (
                  r.setStart(ql(e, t.container()), t.offset()),
                  r.setEnd(ql(e, n.container()), n.offset()),
                  r
                );
              });
            })(n, t);
          if (
            (function (e) {
              return e.hasOwnProperty("name");
            })(t)
          )
            return (function (e, t) {
              return M.from(e.select(t.name)[t.index]).map(function (t) {
                var n = e.createRng();
                return n.selectNode(t), n;
              });
            })(n, t);
          if (
            (function (e) {
              return e.hasOwnProperty("rng");
            })(t)
          )
            return M.some(t.rng);
        }
        return M.none();
      },
      Jl = function (e, t, n) {
        return Qc(e, t, n);
      },
      Ql = function (e, t) {
        Gl(e, t).each(function (t) {
          e.setRng(t);
        });
      },
      Zl = function (e) {
        return (
          On(e) &&
          "SPAN" === e.tagName &&
          "bookmark" === e.getAttribute("data-mce-type")
        );
      },
      ef =
        ((pl = xo),
        function (e) {
          return pl === e;
        }),
      tf = function (e) {
        return "" !== e && -1 !== " \f\n\r\t\v".indexOf(e);
      },
      nf = function (e) {
        return !tf(e) && !ef(e);
      },
      rf = function (e) {
        return !!e.nodeType;
      },
      of = function (e, t, n) {
        var r,
          o,
          i,
          a = n.startOffset,
          u = n.startContainer;
        if (
          (n.startContainer !== n.endContainer ||
            !(function (e) {
              return e && /^(IMG)$/.test(e.nodeName);
            })(n.startContainer.childNodes[n.startOffset])) &&
          1 === u.nodeType
        )
          for (
            a < (i = u.childNodes).length
              ? ((u = i[a]), (r = new so(u, e.getParent(u, e.isBlock))))
              : ((u = i[i.length - 1]),
                (r = new so(u, e.getParent(u, e.isBlock))).next(!0)),
              o = r.current();
            o;
            o = r.next()
          )
            if (3 === o.nodeType && !sf(o))
              return n.setStart(o, 0), void t.setRng(n);
      },
      af = function (e, t, n) {
        if (e) {
          var r = t ? "nextSibling" : "previousSibling";
          for (e = n ? e : e[r]; e; e = e[r])
            if (1 === e.nodeType || !sf(e)) return e;
        }
      },
      uf = function (e, t) {
        return (
          rf(t) && (t = t.nodeName),
          !!e.schema.getTextBlockElements()[t.toLowerCase()]
        );
      },
      cf = function (e, t, n) {
        return e.schema.isValidChild(t, n);
      },
      sf = function (e, t) {
        if ((void 0 === t && (t = !1), v(e) && jn(e))) {
          var n = t ? e.data.replace(/ /g, " ") : e.data;
          return Go(n);
        }
        return !1;
      },
      lf = function (e, t) {
        return (
          "string" != typeof e
            ? (e = e(t))
            : t &&
              (e = e.replace(/%(\w+)/g, function (e, n) {
                return t[n] || e;
              })),
          e
        );
      },
      ff = function (e, t) {
        return (
          (t = t || ""),
          (e = "" + ((e = e || "").nodeName || e)),
          (t = "" + (t.nodeName || t)),
          e.toLowerCase() === t.toLowerCase()
        );
      },
      df = function (e, t, n) {
        return (
          ("color" !== n && "backgroundColor" !== n) || (t = e.toHex(t)),
          "fontWeight" === n && 700 === t && (t = "bold"),
          "fontFamily" === n &&
            (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")),
          "" + t
        );
      },
      mf = function (e, t, n) {
        return df(e, e.getStyle(t, n), n);
      },
      pf = function (e, t) {
        var n;
        return (
          e.getParent(t, function (t) {
            return (n = e.getStyle(t, "text-decoration")) && "none" !== n;
          }),
          n
        );
      },
      gf = function (e, t, n) {
        return e.getParents(t, n, e.getRoot());
      },
      hf = function (e, t, n) {
        var r = [
            "inline",
            "block",
            "selector",
            "attributes",
            "styles",
            "classes",
          ],
          o = function (e) {
            return pe(e, function (e, t) {
              return H(r, function (e) {
                return e === t;
              });
            });
          };
        return H(e.formatter.get(t), function (t) {
          var r = o(t);
          return H(e.formatter.get(n), function (e) {
            var t = o(e);
            return (function (e, t, n) {
              return void 0 === n && (n = a), i(n).eq(e, t);
            })(r, t);
          });
        });
      },
      vf = function (e) {
        return ye(e, "block");
      },
      yf = function (e) {
        return ye(e, "selector");
      },
      bf = function (e) {
        return ye(e, "inline");
      },
      Cf = function (e, t) {
        return H(t.childNodes, e.isBlock);
      },
      wf = Zl,
      xf = gf,
      _f = sf,
      Sf = uf,
      Ef = function (e, t) {
        for (var n = t; n; ) {
          if (On(n) && e.getContentEditable(n))
            return "false" === e.getContentEditable(n) ? n : t;
          n = n.parentNode;
        }
        return t;
      },
      Nf = function (e, t, n, r) {
        for (var o = t.data, i = n; e ? i >= 0 : i < o.length; e ? i-- : i++)
          if (r(o.charAt(i))) return e ? i + 1 : i;
        return -1;
      },
      kf = function (e, t, n) {
        return Nf(e, t, n, function (e) {
          return ef(e) || tf(e);
        });
      },
      Af = function (e, t, n) {
        return Nf(e, t, n, nf);
      },
      Rf = function (e, t, n, r, o, i) {
        var a,
          u = e.getParent(n, e.isBlock) || t,
          c = function (t, n, r) {
            var i = Zu(e),
              c = o ? i.backwards : i.forwards;
            return M.from(
              c(
                t,
                n,
                function (e, t) {
                  return wf(e.parentNode) ? -1 : ((a = e), r(o, e, t));
                },
                u
              )
            );
          };
        return c(n, r, kf)
          .bind(function (e) {
            return i ? c(e.container, e.offset + (o ? -1 : 0), Af) : M.some(e);
          })
          .orThunk(function () {
            return a
              ? M.some({ container: a, offset: o ? 0 : a.length })
              : M.none();
          });
      },
      Tf = function (e, t, n, r, o) {
        jn(r) && 0 === r.nodeValue.length && r[o] && (r = r[o]);
        for (var i = xf(e, r), a = 0; a < i.length; a++)
          for (var u = 0; u < t.length; u++) {
            var c = t[u];
            if (
              (!("collapsed" in c) || c.collapsed === n.collapsed) &&
              e.is(i[a], c.selector)
            )
              return i[a];
          }
        return r;
      },
      Df = function (e, t, n, r) {
        var o,
          i = e.dom,
          a = i.getRoot();
        if ((t[0].wrapper || (o = i.getParent(n, t[0].block, a)), !o)) {
          var u = i.getParent(n, "LI,TD,TH");
          o = i.getParent(
            jn(n) ? n.parentNode : n,
            function (t) {
              return t !== a && Sf(e, t);
            },
            u
          );
        }
        if (
          (o && t[0].wrapper && (o = xf(i, o, "ul,ol").reverse()[0] || o), !o)
        )
          for (o = n; o[r] && !i.isBlock(o[r]) && ((o = o[r]), !ff(o, "br")); );
        return o || n;
      },
      Of = function (e, t, n, r) {
        var o = n.parentNode;
        return (
          !v(n[r]) && (!(o !== t && !h(o) && !e.isBlock(o)) || Of(e, t, o, r))
        );
      },
      Bf = function (e, t, n, r, o) {
        var i,
          a,
          u = n,
          c = o ? "previousSibling" : "nextSibling",
          s = e.getRoot();
        if (jn(n) && !_f(n) && (o ? r > 0 : r < n.data.length)) return n;
        for (;;) {
          if (!t[0].block_expand && e.isBlock(u)) return u;
          for (i = u[c]; i; i = i[c]) {
            var l = jn(i) && !Of(e, s, i, c);
            if (
              !wf(i) &&
              (!qn((a = i)) ||
                !a.getAttribute("data-mce-bogus") ||
                a.nextSibling) &&
              !_f(i, l)
            )
              return u;
          }
          if (u === s || u.parentNode === s) {
            n = u;
            break;
          }
          u = u.parentNode;
        }
        return n;
      },
      Pf = function (e) {
        return wf(e.parentNode) || wf(e);
      },
      Lf = function (e, t, n, r) {
        void 0 === r && (r = !1);
        var o = t.startContainer,
          i = t.startOffset,
          a = t.endContainer,
          u = t.endOffset,
          c = e.dom;
        return (
          On(o) && o.hasChildNodes() && ((o = sc(o, i)), jn(o) && (i = 0)),
          On(a) &&
            a.hasChildNodes() &&
            ((a = sc(a, t.collapsed ? u : u - 1)),
            jn(a) && (u = a.nodeValue.length)),
          (o = Ef(c, o)),
          (a = Ef(c, a)),
          Pf(o) &&
            ((o = wf(o) ? o : o.parentNode),
            (o = t.collapsed ? o.previousSibling || o : o.nextSibling || o),
            jn(o) && (i = t.collapsed ? o.length : 0)),
          Pf(a) &&
            ((a = wf(a) ? a : a.parentNode),
            (a = t.collapsed ? a.nextSibling || a : a.previousSibling || a),
            jn(a) && (u = t.collapsed ? 0 : a.length)),
          t.collapsed &&
            (Rf(c, e.getBody(), o, i, !0, r).each(function (e) {
              var t = e.container,
                n = e.offset;
              (o = t), (i = n);
            }),
            Rf(c, e.getBody(), a, u, !1, r).each(function (e) {
              var t = e.container,
                n = e.offset;
              (a = t), (u = n);
            })),
          (n[0].inline || n[0].block_expand) &&
            ((n[0].inline && jn(o) && 0 !== i) || (o = Bf(c, n, o, i, !0)),
            (n[0].inline && jn(a) && u !== a.nodeValue.length) ||
              (a = Bf(c, n, a, u, !1))),
          n[0].selector &&
            !1 !== n[0].expand &&
            !n[0].inline &&
            ((o = Tf(c, n, t, o, "previousSibling")),
            (a = Tf(c, n, t, a, "nextSibling"))),
          (n[0].block || n[0].selector) &&
            ((o = Df(e, n, o, "previousSibling")),
            (a = Df(e, n, a, "nextSibling")),
            n[0].block &&
              (c.isBlock(o) || (o = Bf(c, n, o, i, !0)),
              c.isBlock(a) || (a = Bf(c, n, a, u, !1)))),
          On(o) && ((i = c.nodeIndex(o)), (o = o.parentNode)),
          On(a) && ((u = c.nodeIndex(a) + 1), (a = a.parentNode)),
          { startContainer: o, startOffset: i, endContainer: a, endOffset: u }
        );
      },
      If = function (e, t) {
        var n = e.childNodes;
        return t >= n.length ? (t = n.length - 1) : t < 0 && (t = 0), n[t] || e;
      },
      Mf = function (e, t, n) {
        var r = t.startContainer,
          o = t.startOffset,
          i = t.endContainer,
          a = t.endOffset,
          u = function (e) {
            var t;
            return (
              3 === (t = e[0]).nodeType &&
                t === r &&
                o >= t.nodeValue.length &&
                e.splice(0, 1),
              (t = e[e.length - 1]),
              0 === a &&
                e.length > 0 &&
                t === i &&
                3 === t.nodeType &&
                e.splice(e.length - 1, 1),
              e
            );
          },
          c = function (e, t, n) {
            for (var r = []; e && e !== n; e = e[t]) r.push(e);
            return r;
          },
          s = function (e, t) {
            do {
              if (e.parentNode === t) return e;
              e = e.parentNode;
            } while (e);
          },
          l = function (e, t, r) {
            for (
              var o = r ? "nextSibling" : "previousSibling",
                i = e,
                a = i.parentNode;
              i && i !== t;
              i = a
            ) {
              a = i.parentNode;
              var s = c(i === e ? i : i[o], o);
              s.length && (r || s.reverse(), n(u(s)));
            }
          };
        if (
          (1 === r.nodeType && r.hasChildNodes() && (r = If(r, o)),
          1 === i.nodeType && i.hasChildNodes() && (i = If(i, a - 1)),
          r === i)
        )
          return n(u([r]));
        for (var f = e.findCommonAncestor(r, i), d = r; d; d = d.parentNode) {
          if (d === i) return l(r, f, !0);
          if (d === f) break;
        }
        for (d = i; d; d = d.parentNode) {
          if (d === r) return l(i, f);
          if (d === f) break;
        }
        var m = s(r, f) || r,
          p = s(i, f) || i;
        l(r, m, !0);
        var g = c(
          m === r ? m : m.nextSibling,
          "nextSibling",
          p === i ? p.nextSibling : p
        );
        g.length && n(u(g)), l(i, p);
      },
      Ff = function (e) {
        var t = [];
        if (e) for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
        return t;
      },
      Uf = function (e) {
        return K(
          (function (e) {
            return Q(e, function (e) {
              var t = cc(e);
              return t ? [Tt.fromDom(t)] : [];
            });
          })(e),
          Co
        );
      },
      jf = function (e, t) {
        var n = Fu(t, "td[data-mce-selected],th[data-mce-selected]");
        return n.length > 0 ? n : Uf(e);
      },
      zf = function (e) {
        return jf(Ff(e.selection.getSel()), Tt.fromDom(e.getBody()));
      },
      Vf = function (e) {
        return nn(e).fold(x([e]), function (t) {
          return [e].concat(Vf(t));
        });
      },
      Hf = function (e) {
        return rn(e).fold(x([e]), function (t) {
          return "br" === Ut(t)
            ? Gt(t)
                .map(function (t) {
                  return [e].concat(Hf(t));
                })
                .getOr([])
            : [e].concat(Hf(t));
        });
      },
      qf = function (e, t) {
        return ec(
          (function (e) {
            var t = e.startContainer,
              n = e.startOffset;
            return jn(t)
              ? 0 === n
                ? M.some(Tt.fromDom(t))
                : M.none()
              : M.from(t.childNodes[n]).map(Tt.fromDom);
          })(t),
          (function (e) {
            var t = e.endContainer,
              n = e.endOffset;
            return jn(t)
              ? n === t.data.length
                ? M.some(Tt.fromDom(t))
                : M.none()
              : M.from(t.childNodes[n - 1]).map(Tt.fromDom);
          })(t),
          function (t, n) {
            var r = G(Vf(e), S(Pt, t)),
              o = G(Hf(e), S(Pt, n));
            return r.isSome() && o.isSome();
          }
        ).getOr(!1);
      },
      $f = function (e, t, n, r) {
        var o = n,
          i = new so(n, o),
          a = pe(e.schema.getMoveCaretBeforeOnEnterElements(), function (e, t) {
            return !V(["td", "th", "table"], t.toLowerCase());
          });
        do {
          if (jn(n) && 0 !== At.trim(n.nodeValue).length)
            return void (r
              ? t.setStart(n, 0)
              : t.setEnd(n, n.nodeValue.length));
          if (a[n.nodeName])
            return void (r
              ? t.setStartBefore(n)
              : "BR" === n.nodeName
              ? t.setEndBefore(n)
              : t.setEndAfter(n));
        } while ((n = r ? i.next() : i.prev()));
        "BODY" === o.nodeName &&
          (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
      },
      Wf = function (e) {
        var t = e.selection.getSel();
        return t && t.rangeCount > 0;
      },
      Kf = function (e, t) {
        var n = zf(e);
        n.length > 0
          ? $(n, function (n) {
              var r = n.dom,
                o = e.dom.createRng();
              o.setStartBefore(r), o.setEndAfter(r), t(o, !0);
            })
          : t(e.selection.getRng(), !1);
      },
      Xf = function (e, t, n) {
        var r = Jc(e, t);
        n(r), e.moveToBookmark(r);
      },
      Yf =
        ((gl = Ht),
        (hl = "text"),
        {
          get: function (e) {
            if (!gl(e))
              throw new Error(
                "Can only get " + hl + " value of a " + hl + " node"
              );
            return vl(e).getOr("");
          },
          getOption: (vl = function (e) {
            return gl(e) ? M.from(e.dom.nodeValue) : M.none();
          }),
          set: function (e, t) {
            if (!gl(e))
              throw new Error(
                "Can only set raw " + hl + " value of a " + hl + " node"
              );
            e.dom.nodeValue = t;
          },
        }),
      Gf = function (e) {
        return Yf.get(e);
      },
      Jf = function (e, t, n, r) {
        return Yt(t).fold(
          function () {
            return "skipping";
          },
          function (o) {
            return "br" === r ||
              (function (e) {
                return Ht(e) && Gf(e) === _o;
              })(t)
              ? "valid"
              : (function (e) {
                  return Vt(e) && Iu(e, Uu());
                })(t)
              ? "existing"
              : Vl(t.dom)
              ? "caret"
              : cf(e, n, r) && cf(e, Ut(o), n)
              ? "valid"
              : "invalid-child";
          }
        );
      },
      Qf = function (e, t, n, r) {
        var o = t.uid,
          i = void 0 === o ? Ku("mce-annotation") : o,
          a = (function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                t.indexOf(r) < 0 &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var o = 0;
              for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                t.indexOf(r[o]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                  (n[r[o]] = e[r[o]]);
            }
            return n;
          })(t, ["uid"]),
          u = Tt.fromTag("span", e);
        Pu(u, Uu()), Qn(u, "" + zu(), i), Qn(u, "" + ju(), n);
        var c = r(i, a),
          s = c.attributes,
          l = void 0 === s ? {} : s,
          f = c.classes,
          d = void 0 === f ? [] : f;
        return (
          Zn(u, l),
          (function (e, t) {
            $(t, function (t) {
              Pu(e, t);
            });
          })(u, d),
          u
        );
      },
      Zf = function (e, t, n, r, o) {
        var i = [],
          a = Qf(e.getDoc(), o, n, r),
          u = xu(M.none()),
          c = function () {
            u.set(M.none());
          },
          s = function (e) {
            $(e, l);
          },
          l = function (t) {
            switch (Jf(e, t, "span", Ut(t))) {
              case "invalid-child":
                c();
                var n = en(t);
                s(n), c();
                break;
              case "valid":
                !(function (e, t) {
                  dn(e, t), gn(t, e);
                })(
                  t,
                  u.get().getOrThunk(function () {
                    var e = Gu(a);
                    return i.push(e), u.set(M.some(e)), e;
                  })
                );
            }
          };
        return (
          Mf(e.dom, t, function (e) {
            c(),
              (function (e) {
                var t = q(e, Tt.fromDom);
                s(t);
              })(e);
          }),
          i
        );
      },
      ed = function (e, t, n, r) {
        e.undoManager.transact(function () {
          var o = e.selection,
            i = o.getRng(),
            a = zf(e).length > 0;
          if (
            (i.collapsed &&
              !a &&
              (function (e, t) {
                var n = Lf(e, t, [{ inline: !0 }]);
                t.setStart(n.startContainer, n.startOffset),
                  t.setEnd(n.endContainer, n.endOffset),
                  e.selection.setRng(t);
              })(e, i),
            o.getRng().collapsed && !a)
          ) {
            var u = Qf(e.getDoc(), r, t, n.decorate);
            Xu(u, xo), o.getRng().insertNode(u.dom), o.select(u.dom);
          } else
            Xf(o, !1, function () {
              Kf(e, function (o) {
                Zf(e, o, t, n.decorate, r);
              });
            });
        });
      },
      td = function (e) {
        var t,
          n =
            ((t = {}),
            {
              register: function (e, n) {
                t[e] = { name: e, settings: n };
              },
              lookup: function (e) {
                return t.hasOwnProperty(e)
                  ? M.from(t[e]).map(function (e) {
                      return e.settings;
                    })
                  : M.none();
              },
            });
        $u(e, n);
        var r = qu(e);
        return {
          register: function (e, t) {
            n.register(e, t);
          },
          annotate: function (t, r) {
            n.lookup(t).each(function (n) {
              ed(e, t, n, r);
            });
          },
          annotationChanged: function (e, t) {
            r.addListener(e, t);
          },
          remove: function (t) {
            Vu(e, M.some(t)).each(function (e) {
              var t = e.elements;
              $(t, bn);
            });
          },
          getAll: function (t) {
            var n = (function (e, t) {
              var n = Tt.fromDom(e.getBody()),
                r = Fu(n, "[" + ju() + '="' + t + '"]'),
                o = {};
              return (
                $(r, function (e) {
                  var t = er(e, zu()),
                    n = o.hasOwnProperty(t) ? o[t] : [];
                  o[t] = n.concat([e]);
                }),
                o
              );
            })(e, t);
            return se(n, function (e) {
              return q(e, function (e) {
                return e.dom;
              });
            });
          },
        };
      },
      nd = function (e) {
        return { getBookmark: S(Jl, e), moveToBookmark: S(Ql, e) };
      };
    nd.isBookmarkNode = Zl;
    var rd = function (e, t) {
        for (; t && t !== e; ) {
          if (Wn(t) || Kn(t)) return t;
          t = t.parentNode;
        }
        return null;
      },
      od = function (e, t, n) {
        if (n.collapsed) return !1;
        if (
          _t.browser.isIE() &&
          n.startOffset === n.endOffset - 1 &&
          n.startContainer === n.endContainer
        ) {
          var r = n.startContainer.childNodes[n.startOffset];
          if (On(r))
            return H(r.getClientRects(), function (n) {
              return uc(n, e, t);
            });
        }
        return H(n.getClientRects(), function (n) {
          return uc(n, e, t);
        });
      },
      id = function (e, t, n) {
        return e.fire(t, n);
      },
      ad = {
        BACKSPACE: 8,
        DELETE: 46,
        DOWN: 40,
        ENTER: 13,
        LEFT: 37,
        RIGHT: 39,
        SPACEBAR: 32,
        TAB: 9,
        UP: 38,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        modifierPressed: function (e) {
          return e.shiftKey || e.ctrlKey || e.altKey || ad.metaKeyPressed(e);
        },
        metaKeyPressed: function (e) {
          return _t.mac ? e.metaKey : e.ctrlKey && !e.altKey;
        },
      },
      ud = Kn,
      cd = function (e, t) {
        var n,
          r,
          o,
          i,
          a,
          u,
          c,
          s,
          l,
          f,
          d,
          m,
          p,
          g,
          h,
          y = "data-mce-selected",
          b = t.dom,
          C = At.each,
          w = t.getDoc(),
          x = document,
          _ = Math.abs,
          S = Math.round,
          E = t.getBody(),
          N = {
            nw: [0, 0, -1, -1],
            ne: [1, 0, 1, -1],
            se: [1, 1, 1, 1],
            sw: [0, 1, -1, 1],
          },
          k = function (e) {
            return e && ("IMG" === e.nodeName || t.dom.is(e, "figure.image"));
          },
          A = function (e) {
            return Yn(e) || b.hasClass(e, "mce-preview-object");
          },
          R = function (e) {
            var n = e.target;
            (function (e, t) {
              if ("longpress" === e.type || 0 === e.type.indexOf("touch")) {
                var n = e.touches[0];
                return k(e.target) && !od(n.clientX, n.clientY, t);
              }
              return k(e.target) && !od(e.clientX, e.clientY, t);
            })(e, t.selection.getRng()) &&
              !e.isDefaultPrevented() &&
              t.selection.select(n);
          },
          T = function (e) {
            return b.is(e, "figure.image")
              ? [e.querySelector("img")]
              : b.hasClass(e, "mce-preview-object") && v(e.firstElementChild)
              ? [e, e.firstElementChild]
              : [e];
          },
          D = function (e) {
            var n = vs(t);
            return (
              !!n &&
              "false" !== e.getAttribute("data-mce-resize") &&
              e !== t.getBody() &&
              (b.hasClass(e, "mce-preview-object")
                ? Ot(Tt.fromDom(e.firstElementChild), n)
                : Ot(Tt.fromDom(e), n))
            );
          },
          O = function (e, n, r) {
            if (v(r)) {
              var o = T(e);
              $(o, function (e) {
                e.style[n] || !t.schema.isValid(e.nodeName.toLowerCase(), n)
                  ? b.setStyle(e, n, r)
                  : b.setAttrib(e, n, "" + r);
              });
            }
          },
          B = function (e, t, n) {
            O(e, "width", t), O(e, "height", n);
          },
          P = function (e) {
            var a, v, y, C;
            (a = e.screenX - u),
              (v = e.screenY - c),
              (m = a * i[2] + s),
              (p = v * i[3] + l),
              (m = m < 5 ? 5 : m),
              (p = p < 5 ? 5 : p),
              ((k(n) || A(n)) &&
              !1 !==
                (function (e) {
                  return e.getParam("resize_img_proportional", !0, "boolean");
                })(t)
                ? !ad.modifierPressed(e)
                : ad.modifierPressed(e)) &&
                (_(a) > _(v)
                  ? ((p = S(m * f)), (m = S(p / f)))
                  : ((m = S(p / f)), (p = S(m * f)))),
              B(r, m, p),
              (y = (y = i.startPos.x + a) > 0 ? y : 0),
              (C = (C = i.startPos.y + v) > 0 ? C : 0),
              b.setStyles(o, { left: y, top: C, display: "block" }),
              (o.innerHTML = m + " &times; " + p),
              i[2] < 0 &&
                r.clientWidth <= m &&
                b.setStyle(r, "left", void 0 + (s - m)),
              i[3] < 0 &&
                r.clientHeight <= p &&
                b.setStyle(r, "top", void 0 + (l - p)),
              (a = E.scrollWidth - g) + (v = E.scrollHeight - h) != 0 &&
                b.setStyles(o, { left: y - a, top: C - v }),
              d ||
                ((function (e, t, n, r, o) {
                  e.fire("ObjectResizeStart", {
                    target: t,
                    width: n,
                    height: r,
                    origin: o,
                  });
                })(t, n, s, l, "corner-" + i.name),
                (d = !0));
          },
          L = function () {
            var e = d;
            (d = !1),
              e && (O(n, "width", m), O(n, "height", p)),
              b.unbind(w, "mousemove", P),
              b.unbind(w, "mouseup", L),
              x !== w &&
                (b.unbind(x, "mousemove", P), b.unbind(x, "mouseup", L)),
              b.remove(r),
              b.remove(o),
              b.remove(a),
              I(n),
              e &&
                ((function (e, t, n, r, o) {
                  e.fire("ObjectResized", {
                    target: t,
                    width: n,
                    height: r,
                    origin: o,
                  });
                })(t, n, m, p, "corner-" + i.name),
                b.setAttrib(n, "style", b.getAttrib(n, "style"))),
              t.nodeChanged();
          },
          I = function (e) {
            j();
            var d = b.getPos(e, E),
              v = d.x,
              _ = d.y,
              S = e.getBoundingClientRect(),
              k = S.width || S.right - S.left,
              R = S.height || S.bottom - S.top;
            n !== e && (M(), (n = e), (m = p = 0));
            var O = t.fire("ObjectSelected", { target: e }),
              I = b.getAttrib(n, y, "1");
            D(e) && !O.isDefaultPrevented()
              ? C(N, function (e, t) {
                  var d,
                    m = function (d) {
                      var m,
                        p = T(n)[0];
                      (u = d.screenX),
                        (c = d.screenY),
                        (s = p.clientWidth),
                        (l = p.clientHeight),
                        (f = l / s),
                        ((i = e).name = t),
                        (i.startPos = { x: k * e[0] + v, y: R * e[1] + _ }),
                        (g = E.scrollWidth),
                        (h = E.scrollHeight),
                        (a = b.add(E, "div", { class: "mce-resize-backdrop" })),
                        b.setStyles(a, {
                          position: "fixed",
                          left: "0",
                          top: "0",
                          width: "100%",
                          height: "100%",
                        }),
                        (r = A((m = n))
                          ? b.create("img", { src: _t.transparentSrc })
                          : m.cloneNode(!0)),
                        b.addClass(r, "mce-clonedresizable"),
                        b.setAttrib(r, "data-mce-bogus", "all"),
                        (r.contentEditable = "false"),
                        b.setStyles(r, { left: v, top: _, margin: 0 }),
                        B(r, k, R),
                        r.removeAttribute(y),
                        E.appendChild(r),
                        b.bind(w, "mousemove", P),
                        b.bind(w, "mouseup", L),
                        x !== w &&
                          (b.bind(x, "mousemove", P), b.bind(x, "mouseup", L)),
                        (o = b.add(
                          E,
                          "div",
                          {
                            class: "mce-resize-helper",
                            "data-mce-bogus": "all",
                          },
                          s + " &times; " + l
                        ));
                    };
                  (d = b.get("mceResizeHandle" + t)) && b.remove(d),
                    (d = b.add(E, "div", {
                      id: "mceResizeHandle" + t,
                      "data-mce-bogus": "all",
                      class: "mce-resizehandle",
                      unselectable: !0,
                      style: "cursor:" + t + "-resize; margin:0; padding:0",
                    })),
                    11 === _t.ie && (d.contentEditable = !1),
                    b.bind(d, "mousedown", function (e) {
                      e.stopImmediatePropagation(), e.preventDefault(), m(e);
                    }),
                    (e.elm = d),
                    b.setStyles(d, {
                      left: k * e[0] + v - d.offsetWidth / 2,
                      top: R * e[1] + _ - d.offsetHeight / 2,
                    });
                })
              : M(),
              b.getAttrib(n, y) || n.setAttribute(y, I);
          },
          M = function () {
            j(),
              n && n.removeAttribute(y),
              ce(N, function (e, t) {
                var n = b.get("mceResizeHandle" + t);
                n && (b.unbind(n), b.remove(n));
              });
          },
          F = function (n) {
            var r,
              o = function (e, t) {
                if (e)
                  do {
                    if (e === t) return !0;
                  } while ((e = e.parentNode));
              };
            d ||
              t.removed ||
              (C(
                b.select("img[data-mce-selected],hr[data-mce-selected]"),
                function (e) {
                  e.removeAttribute(y);
                }
              ),
              (r = "mousedown" === n.type ? n.target : e.getNode()),
              o(
                (r = b
                  .$(r)
                  .closest(
                    "table,img,figure.image,hr,video,span.mce-preview-object"
                  )[0]),
                E
              ) && (z(), o(e.getStart(!0), r) && o(e.getEnd(!0), r))
                ? I(r)
                : M());
          },
          U = function (e) {
            return ud(rd(t.getBody(), e));
          },
          j = function () {
            ce(N, function (e) {
              e.elm && (b.unbind(e.elm), delete e.elm);
            });
          },
          z = function () {
            try {
              t.getDoc().execCommand("enableObjectResizing", !1, "false");
            } catch (e) {}
          };
        return (
          t.on("init", function () {
            if ((z(), _t.browser.isIE() || _t.browser.isEdge())) {
              t.on("mousedown click", function (e) {
                var n = e.target,
                  r = n.nodeName;
                d ||
                  !/^(TABLE|IMG|HR)$/.test(r) ||
                  U(n) ||
                  (2 !== e.button && t.selection.select(n, "TABLE" === r),
                  "mousedown" === e.type && t.nodeChanged());
              });
              var e = function (e) {
                var n = function (e) {
                  ao.setEditorTimeout(t, function () {
                    return t.selection.select(e);
                  });
                };
                if (U(e.target) || Yn(e.target))
                  return e.preventDefault(), void n(e.target);
                /^(TABLE|IMG|HR)$/.test(e.target.nodeName) &&
                  (e.preventDefault(),
                  "IMG" === e.target.tagName && n(e.target));
              };
              b.bind(E, "mscontrolselect", e),
                t.on("remove", function () {
                  return b.unbind(E, "mscontrolselect", e);
                });
            }
            var r = ao.throttle(function (e) {
              t.composing || F(e);
            });
            t.on(
              "nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged",
              r
            ),
              t.on("keyup compositionend", function (e) {
                n && "TABLE" === n.nodeName && r(e);
              }),
              t.on("hide blur", M),
              t.on("contextmenu longpress", R, !0);
          }),
          t.on("remove", j),
          {
            isResizable: D,
            showResizeRect: I,
            hideResizeRect: M,
            updateResizeRect: F,
            destroy: function () {
              n = r = a = null;
            },
          }
        );
      },
      sd = function (e) {
        return Wn(e) || Kn(e);
      },
      ld = function (e, t, n) {
        var r,
          o,
          i = n;
        if (i.caretPositionFromPoint)
          (o = i.caretPositionFromPoint(e, t)) &&
            ((r = n.createRange()).setStart(o.offsetNode, o.offset),
            r.collapse(!0));
        else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
        else if (i.body.createTextRange) {
          r = i.body.createTextRange();
          try {
            r.moveToPoint(e, t), r.collapse(!0);
          } catch (a) {
            r = (function (e, t, n) {
              var r,
                o = n.elementFromPoint(e, t),
                i = n.body.createTextRange();
              if (
                ((o && "HTML" !== o.tagName) || (o = n.body),
                i.moveToElementText(o),
                (r = (r = At.toArray(i.getClientRects())).sort(function (e, n) {
                  return (
                    (e = Math.abs(Math.max(e.top - t, e.bottom - t))) -
                    Math.abs(Math.max(n.top - t, n.bottom - t))
                  );
                })).length > 0)
              ) {
                t = (r[0].bottom + r[0].top) / 2;
                try {
                  return i.moveToPoint(e, t), i.collapse(!0), i;
                } catch (a) {}
              }
              return null;
            })(e, t, n);
          }
          return (function (e, t) {
            var n = e && e.parentElement ? e.parentElement() : null;
            return Kn(
              (function (e, t, n) {
                for (; e && e !== t; ) {
                  if (n(e)) return e;
                  e = e.parentNode;
                }
                return null;
              })(n, t, sd)
            )
              ? null
              : e;
          })(r, n.body);
        }
        return r;
      },
      fd = function (e, t) {
        return (
          e &&
          t &&
          e.startContainer === t.startContainer &&
          e.startOffset === t.startOffset &&
          e.endContainer === t.endContainer &&
          e.endOffset === t.endOffset
        );
      },
      dd = function (e, t, n) {
        return (
          null !==
          (function (e, t, n) {
            for (; e && e !== t; ) {
              if (n(e)) return e;
              e = e.parentNode;
            }
            return null;
          })(e, t, n)
        );
      },
      md = function (e, t, n) {
        return dd(e, t, function (e) {
          return e.nodeName === n;
        });
      },
      pd = function (e) {
        return e && "TABLE" === e.nodeName;
      },
      gd = function (e) {
        return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
      },
      hd = function (e, t) {
        return To(e) && !1 === dd(e, t, Vl);
      },
      vd = function (e, t, n) {
        for (
          var r = new so(
            t,
            e.getParent(t.parentNode, e.isBlock) || e.getRoot()
          );
          (t = r[n ? "prev" : "next"]());

        )
          if (qn(t)) return !0;
      },
      yd = function (e, t, n, r, o) {
        var i,
          a,
          u = e.getRoot(),
          c = e.schema.getNonEmptyElements(),
          s = e.getParent(o.parentNode, e.isBlock) || u;
        if (r && qn(o) && t && e.isEmpty(s))
          return M.some(Rc(o.parentNode, e.nodeIndex(o)));
        for (var l = new so(o, s); (a = l[r ? "prev" : "next"]()); ) {
          if ("false" === e.getContentEditableParent(a) || hd(a, u))
            return M.none();
          if (jn(a) && a.nodeValue.length > 0)
            return !1 === md(a, u, "A")
              ? M.some(Rc(a, r ? a.nodeValue.length : 0))
              : M.none();
          if (e.isBlock(a) || c[a.nodeName.toLowerCase()]) return M.none();
          i = a;
        }
        return n && i ? M.some(Rc(i, 0)) : M.none();
      },
      bd = function (e, t, n, r) {
        var o,
          i,
          a,
          u,
          c = e.getRoot(),
          s = !1;
        (o = r[(n ? "start" : "end") + "Container"]),
          (i = r[(n ? "start" : "end") + "Offset"]);
        var l = On(o) && i === o.childNodes.length,
          f = e.schema.getNonEmptyElements();
        if (((u = n), To(o))) return M.none();
        if (
          (On(o) && i > o.childNodes.length - 1 && (u = !1),
          Vn(o) && ((o = c), (i = 0)),
          o === c)
        ) {
          if (u && (a = o.childNodes[i > 0 ? i - 1 : 0])) {
            if (To(a)) return M.none();
            if (f[a.nodeName] || pd(a)) return M.none();
          }
          if (o.hasChildNodes()) {
            if (
              ((i = Math.min(!u && i > 0 ? i - 1 : i, o.childNodes.length - 1)),
              (o = o.childNodes[i]),
              (i = jn(o) && l ? o.data.length : 0),
              !t && o === c.lastChild && pd(o))
            )
              return M.none();
            if (
              (function (e, t) {
                for (; t && t !== e; ) {
                  if (Kn(t)) return !0;
                  t = t.parentNode;
                }
                return !1;
              })(c, o) ||
              To(o)
            )
              return M.none();
            if (o.hasChildNodes() && !1 === pd(o)) {
              a = o;
              var d = new so(o, c);
              do {
                if (Kn(a) || To(a)) {
                  s = !1;
                  break;
                }
                if (jn(a) && a.nodeValue.length > 0) {
                  (i = u ? 0 : a.nodeValue.length), (o = a), (s = !0);
                  break;
                }
                if (f[a.nodeName.toLowerCase()] && !gd(a)) {
                  (i = e.nodeIndex(a)), (o = a.parentNode), u || i++, (s = !0);
                  break;
                }
              } while ((a = u ? d.next() : d.prev()));
            }
          }
        }
        return (
          t &&
            (jn(o) &&
              0 === i &&
              yd(e, l, t, !0, o).each(function (e) {
                (o = e.container()), (i = e.offset()), (s = !0);
              }),
            On(o) &&
              ((a = o.childNodes[i]) || (a = o.childNodes[i - 1]),
              !a ||
                !qn(a) ||
                (function (e, t) {
                  return e.previousSibling && e.previousSibling.nodeName === t;
                })(a, "A") ||
                vd(e, a, !1) ||
                vd(e, a, !0) ||
                yd(e, l, t, !0, a).each(function (e) {
                  (o = e.container()), (i = e.offset()), (s = !0);
                }))),
          u &&
            !t &&
            jn(o) &&
            i === o.nodeValue.length &&
            yd(e, l, t, !1, o).each(function (e) {
              (o = e.container()), (i = e.offset()), (s = !0);
            }),
          s ? M.some(Rc(o, i)) : M.none()
        );
      },
      Cd = function (e, t) {
        var n = t.collapsed,
          r = t.cloneRange(),
          o = Rc.fromRangeStart(t);
        return (
          bd(e, n, !0, r).each(function (e) {
            (n && Rc.isAbove(o, e)) || r.setStart(e.container(), e.offset());
          }),
          n ||
            bd(e, n, !1, r).each(function (e) {
              r.setEnd(e.container(), e.offset());
            }),
          n && r.collapse(!0),
          fd(t, r) ? M.none() : M.some(r)
        );
      },
      wd = function (e, t) {
        return e.splitText(t);
      },
      xd = function (e) {
        var t = e.startContainer,
          n = e.startOffset,
          r = e.endContainer,
          o = e.endOffset;
        return (
          t === r && jn(t)
            ? n > 0 &&
              n < t.nodeValue.length &&
              ((t = (r = wd(t, n)).previousSibling),
              o > n
                ? ((t = r = wd(r, (o -= n)).previousSibling),
                  (o = r.nodeValue.length),
                  (n = 0))
                : (o = 0))
            : (jn(t) &&
                n > 0 &&
                n < t.nodeValue.length &&
                ((t = wd(t, n)), (n = 0)),
              jn(r) &&
                o > 0 &&
                o < r.nodeValue.length &&
                (o = (r = wd(r, o).previousSibling).nodeValue.length)),
          { startContainer: t, startOffset: n, endContainer: r, endOffset: o }
        );
      },
      _d = function (e) {
        return {
          walk: function (t, n) {
            return Mf(e, t, n);
          },
          split: xd,
          normalize: function (t) {
            return Cd(e, t).fold(O, function (e) {
              return (
                t.setStart(e.startContainer, e.startOffset),
                t.setEnd(e.endContainer, e.endOffset),
                !0
              );
            });
          },
        };
      };
    (_d.compareRanges = fd),
      (_d.getCaretRangeFromPoint = ld),
      (_d.getSelectedNode = cc),
      (_d.getNode = sc);
    var Sd,
      Ed = (function (e, t) {
        var n = function (n) {
            var r = t(n);
            if (r <= 0 || null === r) {
              var o = or(n, e);
              return parseFloat(o) || 0;
            }
            return r;
          },
          r = function (e, t) {
            return Y(
              t,
              function (t, n) {
                var r = or(e, n),
                  o = void 0 === r ? 0 : parseInt(r, 10);
                return isNaN(o) ? t : t + o;
              },
              0
            );
          };
        return {
          set: function (t, n) {
            if (!b(n) && !n.match(/^[0-9]+$/))
              throw new Error(
                e + ".set accepts only positive integer values. Value was " + n
              );
            var r = t.dom;
            Gn(r) && (r.style[e] = n + "px");
          },
          get: n,
          getOuter: n,
          aggregate: r,
          max: function (e, t, n) {
            var o = r(e, n);
            return t > o ? t - o : 0;
          },
        };
      })("height", function (e) {
        var t = e.dom;
        return Cn(e) ? t.getBoundingClientRect().height : t.offsetHeight;
      }),
      Nd = function (e, t) {
        return e.view(t).fold(x([]), function (t) {
          var n = e.owner(t),
            r = Nd(e, n);
          return [t].concat(r);
        });
      },
      kd = Object.freeze({
        __proto__: null,
        view: function (e) {
          var t;
          return (
            e.dom === document
              ? M.none()
              : M.from(
                  null === (t = e.dom.defaultView) || void 0 === t
                    ? void 0
                    : t.frameElement
                )
          ).map(Tt.fromDom);
        },
        owner: function (e) {
          return Kt(e);
        },
      }),
      Ad = function (e) {
        var t = Tt.fromDom(document),
          n = En(t),
          r = (function (e, t) {
            var n = t.owner(e);
            return Nd(t, n);
          })(e, kd),
          o = Sn(e),
          i = X(
            r,
            function (e, t) {
              var n = Sn(t);
              return { left: e.left + n.left, top: e.top + n.top };
            },
            { left: 0, top: 0 }
          );
        return xn(i.left + o.left + n.left, i.top + o.top + n.top);
      },
      Rd = function (e) {
        return "textarea" === Ut(e);
      },
      Td = function (e, t) {
        var n = (function (e) {
            var t = e.dom.ownerDocument,
              n = t.body,
              r = t.defaultView,
              o = t.documentElement;
            if (n === e.dom) return xn(n.offsetLeft, n.offsetTop);
            var i = _n(null == r ? void 0 : r.pageYOffset, o.scrollTop),
              a = _n(null == r ? void 0 : r.pageXOffset, o.scrollLeft),
              u = _n(o.clientTop, n.clientTop),
              c = _n(o.clientLeft, n.clientLeft);
            return Sn(e).translate(a - c, i - u);
          })(e),
          r = (function (e) {
            return Ed.get(e);
          })(e);
        return { element: e, bottom: n.top + r, height: r, pos: n, cleanup: t };
      },
      Dd = function (e, t) {
        var n = (function (e, t) {
            var n = en(e);
            if (0 === n.length || Rd(e)) return { element: e, offset: t };
            if (t < n.length && !Rd(n[t])) return { element: n[t], offset: 0 };
            var r = n[n.length - 1];
            return Rd(r)
              ? { element: e, offset: t }
              : "img" === Ut(r)
              ? { element: r, offset: 1 }
              : Ht(r)
              ? { element: r, offset: Gf(r).length }
              : { element: r, offset: en(r).length };
          })(e, t),
          r = Tt.fromHtml('<span data-mce-bogus="all">\ufeff</span>');
        return (
          dn(n.element, r),
          Td(r, function () {
            return yn(r);
          })
        );
      },
      Od = function (e, t, n, r) {
        Id(
          e,
          function (o, i) {
            return Pd(e, t, n, r);
          },
          n
        );
      },
      Bd = function (e, t, n, r, o) {
        var i = { elm: r.element.dom, alignToTop: o };
        (function (e, t) {
          return e.fire("ScrollIntoView", t).isDefaultPrevented();
        })(e, i) ||
          (n(t, En(t).top, r, o),
          (function (e, t) {
            e.fire("AfterScrollIntoView", t);
          })(e, i));
      },
      Pd = function (e, t, n, r) {
        var o = Tt.fromDom(e.getBody()),
          i = Tt.fromDom(e.getDoc());
        o.dom.offsetWidth;
        var a = Dd(Tt.fromDom(n.startContainer), n.startOffset);
        Bd(e, i, t, a, r), a.cleanup();
      },
      Ld = function (e, t, n, r) {
        var o = Tt.fromDom(e.getDoc());
        Bd(
          e,
          o,
          n,
          (function (e) {
            return Td(Tt.fromDom(e), C);
          })(t),
          r
        );
      },
      Id = function (e, t, n) {
        var r = n.startContainer,
          o = n.startOffset,
          i = n.endContainer,
          a = n.endOffset;
        t(Tt.fromDom(r), Tt.fromDom(i));
        var u = e.dom.createRng();
        u.setStart(r, o), u.setEnd(i, a), e.selection.setRng(n);
      },
      Md = function (e, t, n, r) {
        var o = e.pos;
        if (n) Nn(o.left, o.top, r);
        else {
          var i = o.top - t + e.height;
          Nn(o.left, i, r);
        }
      },
      Fd = function (e, t, n, r, o) {
        var i = n + t,
          a = r.pos.top,
          u = r.bottom,
          c = u - a >= n;
        a < t
          ? Md(r, n, !1 !== o, e)
          : a > i
          ? Md(r, n, c ? !1 !== o : !0 === o, e)
          : u > i && !c && Md(r, n, !0 === o, e);
      },
      Ud = function (e, t, n, r) {
        var o = e.dom.defaultView.innerHeight;
        Fd(e, t, o, n, r);
      },
      jd = function (e, t, n, r) {
        var o = e.dom.defaultView.innerHeight;
        Fd(e, t, o, n, r);
        var i = Ad(n.element),
          a = Rn(window);
        i.top < a.y
          ? kn(n.element, !1 !== r)
          : i.top > a.bottom && kn(n.element, !0 === r);
      },
      zd = function (e, t, n) {
        return Od(e, Ud, t, n);
      },
      Vd = function (e, t, n) {
        return Ld(e, t, Ud, n);
      },
      Hd = function (e, t, n) {
        return Od(e, jd, t, n);
      },
      qd = function (e, t, n) {
        return Ld(e, t, jd, n);
      },
      $d = function (e, t, n) {
        (e.inline ? zd : Hd)(e, t, n);
      },
      Wd = function (e) {
        var t = cn(e).dom;
        return e.dom === t.activeElement;
      },
      Kd = function (e) {
        return (
          void 0 === e && (e = Tt.fromDom(document)),
          M.from(e.dom.activeElement).map(Tt.fromDom)
        );
      },
      Xd = function (e, t, n, r) {
        return { start: e, soffset: t, finish: n, foffset: r };
      },
      Yd = Sr([
        { before: ["element"] },
        { on: ["element", "offset"] },
        { after: ["element"] },
      ]),
      Gd =
        (Yd.before,
        Yd.on,
        Yd.after,
        function (e) {
          return e.fold(_, _, _);
        }),
      Jd = Sr([
        { domRange: ["rng"] },
        { relative: ["startSitu", "finishSitu"] },
        { exact: ["start", "soffset", "finish", "foffset"] },
      ]),
      Qd = {
        domRange: Jd.domRange,
        relative: Jd.relative,
        exact: Jd.exact,
        exactFromRange: function (e) {
          return Jd.exact(e.start, e.soffset, e.finish, e.foffset);
        },
        getWin: function (e) {
          var t = (function (e) {
            return e.match({
              domRange: function (e) {
                return Tt.fromDom(e.startContainer);
              },
              relative: function (e, t) {
                return Gd(e);
              },
              exact: function (e, t, n, r) {
                return e;
              },
            });
          })(e);
          return Xt(t);
        },
        range: Xd,
      },
      Zd = pt().browser,
      em = function (e, t) {
        var n = Ht(t) ? Gf(t).length : en(t).length + 1;
        return e > n ? n : e < 0 ? 0 : e;
      },
      tm = function (e) {
        return Qd.range(
          e.start,
          em(e.soffset, e.start),
          e.finish,
          em(e.foffset, e.finish)
        );
      },
      nm = function (e, t) {
        return !Dn(t.dom) && (It(e, t) || Pt(e, t));
      },
      rm = function (e) {
        return function (t) {
          return nm(e, t.start) && nm(e, t.finish);
        };
      },
      om = function (e) {
        return !0 === e.inline || Zd.isIE();
      },
      im = function (e) {
        return Qd.range(
          Tt.fromDom(e.startContainer),
          e.startOffset,
          Tt.fromDom(e.endContainer),
          e.endOffset
        );
      },
      am = function (e) {
        return (function (e) {
          var t = e.getSelection();
          return (
            t && 0 !== t.rangeCount ? M.from(t.getRangeAt(0)) : M.none()
          ).map(im);
        })(Xt(e).dom).filter(rm(e));
      },
      um = function (e) {
        var t = document.createRange();
        try {
          return (
            t.setStart(e.start.dom, e.soffset),
            t.setEnd(e.finish.dom, e.foffset),
            M.some(t)
          );
        } catch (n) {
          return M.none();
        }
      },
      cm = function (e) {
        var t = om(e) ? am(Tt.fromDom(e.getBody())) : M.none();
        e.bookmark = t.isSome() ? t : e.bookmark;
      },
      sm = function (e) {
        return (e.bookmark ? e.bookmark : M.none())
          .bind(function (t) {
            return (function (e, t) {
              return M.from(t).filter(rm(e)).map(tm);
            })(Tt.fromDom(e.getBody()), t);
          })
          .bind(um);
      },
      lm = {
        isEditorUIElement: function (e) {
          var t = e.className.toString();
          return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-");
        },
      },
      fm = function (e, t) {
        pt().browser.isIE()
          ? (function (e) {
              e.on("focusout", function () {
                cm(e);
              });
            })(e)
          : (function (e, t) {
              e.on("mouseup touchend", function (e) {
                t.throttle();
              });
            })(e, t),
          e.on("keyup NodeChange", function (t) {
            (function (e) {
              return "nodechange" === e.type && e.selectionChange;
            })(t) || cm(e);
          });
      },
      dm = function (e) {
        var t = Au(function () {
          cm(e);
        }, 0);
        e.on("init", function () {
          e.inline &&
            (function (e, t) {
              var n = function () {
                t.throttle();
              };
              vu.DOM.bind(document, "mouseup", n),
                e.on("remove", function () {
                  vu.DOM.unbind(document, "mouseup", n);
                });
            })(e, t),
            fm(e, t);
        }),
          e.on("remove", function () {
            t.cancel();
          });
      },
      mm = vu.DOM,
      pm = function (e, t) {
        var n = (function (e) {
          return e.getParam("custom_ui_selector", "", "string");
        })(e);
        return (
          null !==
          mm.getParent(t, function (t) {
            return (
              (function (e) {
                return lm.isEditorUIElement(e);
              })(t) ||
              (!!n && e.dom.is(t, n))
            );
          })
        );
      },
      gm = function (e, t) {
        var n = t.editor;
        dm(n),
          n.on("focusin", function () {
            var t = e.focusedEditor;
            t !== n &&
              (t && t.fire("blur", { focusedEditor: n }),
              e.setActive(n),
              (e.focusedEditor = n),
              n.fire("focus", { blurredEditor: t }),
              n.focus(!0));
          }),
          n.on("focusout", function () {
            ao.setEditorTimeout(n, function () {
              var t = e.focusedEditor;
              pm(
                n,
                (function (e) {
                  try {
                    var t = cn(Tt.fromDom(e.getElement()));
                    return Kd(t).fold(
                      function () {
                        return document.body;
                      },
                      function (e) {
                        return e.dom;
                      }
                    );
                  } catch (n) {
                    return document.body;
                  }
                })(n)
              ) ||
                t !== n ||
                (n.fire("blur", { focusedEditor: null }),
                (e.focusedEditor = null));
            });
          }),
          Sd ||
            ((Sd = function (t) {
              var n = e.activeEditor;
              n &&
                (function (e) {
                  if (un() && v(e.target)) {
                    var t = Tt.fromDom(e.target);
                    if (Vt(t) && fn(t) && e.composed && e.composedPath) {
                      var n = e.composedPath();
                      if (n) return re(n);
                    }
                  }
                  return M.from(e.target);
                })(t).each(function (t) {
                  t.ownerDocument === document &&
                    (t === document.body ||
                      pm(n, t) ||
                      e.focusedEditor !== n ||
                      (n.fire("blur", { focusedEditor: null }),
                      (e.focusedEditor = null)));
                });
            }),
            mm.bind(document, "focusin", Sd));
      },
      hm = function (e, t) {
        e.focusedEditor === t.editor && (e.focusedEditor = null),
          e.activeEditor || (mm.unbind(document, "focusin", Sd), (Sd = null));
      },
      vm = function (e, t) {
        return (function (e) {
          return e.collapsed
            ? M.from(sc(e.startContainer, e.startOffset)).map(Tt.fromDom)
            : M.none();
        })(t).bind(function (t) {
          return bo(t) ? M.some(t) : !1 === It(e, t) ? M.some(e) : M.none();
        });
      },
      ym = function (e, t) {
        vm(Tt.fromDom(e.getBody()), t)
          .bind(function (e) {
            return Ul(e.dom);
          })
          .fold(
            function () {
              e.selection.normalize();
            },
            function (t) {
              return e.selection.setRng(t.toRange());
            }
          );
      },
      bm = function (e) {
        if (e.setActive)
          try {
            e.setActive();
          } catch (t) {
            e.focus();
          }
        else e.focus();
      },
      Cm = function (e) {
        return (
          Wd(e) ||
          ((t = e),
          Kd(cn(t)).filter(function (e) {
            return t.dom.contains(e.dom);
          })).isSome()
        );
        var t;
      },
      wm = function (e) {
        return e.inline
          ? (function (e) {
              var t = e.getBody();
              return t && Cm(Tt.fromDom(t));
            })(e)
          : (function (e) {
              return e.iframeElement && Wd(Tt.fromDom(e.iframeElement));
            })(e);
      },
      xm = function (e) {
        return (
          wm(e) ||
          (function (e) {
            var t = cn(Tt.fromDom(e.getElement()));
            return Kd(t)
              .filter(function (t) {
                return (
                  !(
                    void 0 !== (n = t.dom.classList) &&
                    (n.contains("tox-edit-area") ||
                      n.contains("tox-edit-area__iframe") ||
                      n.contains("mce-content-body"))
                  ) && pm(e, t.dom)
                );
                var n;
              })
              .isSome();
          })(e)
        );
      },
      _m = function (e) {
        return e.editorManager.setActive(e);
      },
      Sm = function (e, t) {
        e.removed ||
          (t
            ? _m(e)
            : (function (e) {
                var t = e.selection,
                  n = e.getBody(),
                  r = t.getRng();
                e.quirks.refreshContentEditable(),
                  void 0 !== e.bookmark &&
                    !1 === wm(e) &&
                    sm(e).each(function (t) {
                      e.selection.setRng(t), (r = t);
                    });
                var o = (function (e, t) {
                  return e.dom.getParent(t, function (t) {
                    return "true" === e.dom.getContentEditable(t);
                  });
                })(e, t.getNode());
                if (e.$.contains(n, o)) return bm(o), ym(e, r), void _m(e);
                e.inline || (_t.opera || bm(n), e.getWin().focus()),
                  (_t.gecko || e.inline) && (bm(n), ym(e, r)),
                  _m(e);
              })(e));
      },
      Em = function (e, t, n, r, o) {
        var i = n ? t.startContainer : t.endContainer,
          a = n ? t.startOffset : t.endOffset;
        return M.from(i)
          .map(Tt.fromDom)
          .map(function (e) {
            return r && t.collapsed ? e : tn(e, o(e, a)).getOr(e);
          })
          .bind(function (e) {
            return Vt(e) ? M.some(e) : Yt(e).filter(Vt);
          })
          .map(function (e) {
            return e.dom;
          })
          .getOr(e);
      },
      Nm = function (e, t, n) {
        return Em(e, t, !0, n, function (e, t) {
          return Math.min(e.dom.childNodes.length, t);
        });
      },
      km = function (e, t, n) {
        return Em(e, t, !1, n, function (e, t) {
          return t > 0 ? t - 1 : t;
        });
      },
      Am = function (e, t) {
        for (var n = e; e && jn(e) && 0 === e.length; )
          e = t ? e.nextSibling : e.previousSibling;
        return e || n;
      },
      Rm = function (e, t) {
        return q(t, function (t) {
          var n = e.fire("GetSelectionRange", { range: t });
          return n.range !== t ? n.range : t;
        });
      },
      Tm = {
        "#text": 3,
        "#comment": 8,
        "#cdata": 4,
        "#pi": 7,
        "#doctype": 10,
        "#document-fragment": 11,
      },
      Dm = function (e, t, n) {
        var r = n ? "lastChild" : "firstChild",
          o = n ? "prev" : "next";
        if (e[r]) return e[r];
        if (e !== t) {
          var i = e[o];
          if (i) return i;
          for (var a = e.parent; a && a !== t; a = a.parent)
            if ((i = a[o])) return i;
        }
      },
      Om = function (e) {
        if (!Go(e.value)) return !1;
        var t = e.parent;
        return (
          !t ||
          ("span" === t.name && !t.attr("style")) ||
          !/^[ ]+$/.test(e.value)
        );
      },
      Bm = function (e) {
        var t = "a" === e.name && !e.attr("href") && e.attr("id");
        return (
          e.attr("name") ||
          (e.attr("id") && !e.firstChild) ||
          e.attr("data-mce-bookmark") ||
          t
        );
      },
      Pm = (function () {
        function e(e, t) {
          (this.name = e),
            (this.type = t),
            1 === t && ((this.attributes = []), (this.attributes.map = {}));
        }
        return (
          (e.create = function (t, n) {
            var r = new e(t, Tm[t] || 1);
            return (
              n &&
                ce(n, function (e, t) {
                  r.attr(t, e);
                }),
              r
            );
          }),
          (e.prototype.replace = function (e) {
            var t = this;
            return e.parent && e.remove(), t.insert(e, t), t.remove(), t;
          }),
          (e.prototype.attr = function (e, t) {
            var n,
              r = this;
            if ("string" != typeof e)
              return (
                null != e &&
                  ce(e, function (e, t) {
                    r.attr(t, e);
                  }),
                r
              );
            if ((n = r.attributes)) {
              if (void 0 !== t) {
                if (null === t) {
                  if (e in n.map) {
                    delete n.map[e];
                    for (var o = n.length; o--; )
                      if (n[o].name === e) return n.splice(o, 1), r;
                  }
                  return r;
                }
                if (e in n.map) {
                  for (o = n.length; o--; )
                    if (n[o].name === e) {
                      n[o].value = t;
                      break;
                    }
                } else n.push({ name: e, value: t });
                return (n.map[e] = t), r;
              }
              return n.map[e];
            }
          }),
          (e.prototype.clone = function () {
            var t,
              n = this,
              r = new e(n.name, n.type);
            if ((t = n.attributes)) {
              var o = [];
              o.map = {};
              for (var i = 0, a = t.length; i < a; i++) {
                var u = t[i];
                "id" !== u.name &&
                  ((o[o.length] = { name: u.name, value: u.value }),
                  (o.map[u.name] = u.value));
              }
              r.attributes = o;
            }
            return (r.value = n.value), (r.shortEnded = n.shortEnded), r;
          }),
          (e.prototype.wrap = function (e) {
            var t = this;
            return t.parent.insert(e, t), e.append(t), t;
          }),
          (e.prototype.unwrap = function () {
            for (var e = this, t = e.firstChild; t; ) {
              var n = t.next;
              e.insert(t, e, !0), (t = n);
            }
            e.remove();
          }),
          (e.prototype.remove = function () {
            var e = this,
              t = e.parent,
              n = e.next,
              r = e.prev;
            return (
              t &&
                (t.firstChild === e
                  ? ((t.firstChild = n), n && (n.prev = null))
                  : (r.next = n),
                t.lastChild === e
                  ? ((t.lastChild = r), r && (r.next = null))
                  : (n.prev = r),
                (e.parent = e.next = e.prev = null)),
              e
            );
          }),
          (e.prototype.append = function (e) {
            var t = this;
            e.parent && e.remove();
            var n = t.lastChild;
            return (
              n
                ? ((n.next = e), (e.prev = n), (t.lastChild = e))
                : (t.lastChild = t.firstChild = e),
              (e.parent = t),
              e
            );
          }),
          (e.prototype.insert = function (e, t, n) {
            e.parent && e.remove();
            var r = t.parent || this;
            return (
              n
                ? (t === r.firstChild ? (r.firstChild = e) : (t.prev.next = e),
                  (e.prev = t.prev),
                  (e.next = t),
                  (t.prev = e))
                : (t === r.lastChild ? (r.lastChild = e) : (t.next.prev = e),
                  (e.next = t.next),
                  (e.prev = t),
                  (t.next = e)),
              (e.parent = r),
              e
            );
          }),
          (e.prototype.getAll = function (e) {
            for (var t = [], n = this.firstChild; n; n = Dm(n, this))
              n.name === e && t.push(n);
            return t;
          }),
          (e.prototype.empty = function () {
            var e = this;
            if (e.firstChild) {
              for (var t = [], n = e.firstChild; n; n = Dm(n, e)) t.push(n);
              for (var r = t.length; r--; )
                (n = t[r]).parent =
                  n.firstChild =
                  n.lastChild =
                  n.next =
                  n.prev =
                    null;
            }
            return (e.firstChild = e.lastChild = null), e;
          }),
          (e.prototype.isEmpty = function (e, t, n) {
            void 0 === t && (t = {});
            var r = this,
              o = r.firstChild;
            if (Bm(r)) return !1;
            if (o)
              do {
                if (1 === o.type) {
                  if (o.attr("data-mce-bogus")) continue;
                  if (e[o.name]) return !1;
                  if (Bm(o)) return !1;
                }
                if (8 === o.type) return !1;
                if (3 === o.type && !Om(o)) return !1;
                if (3 === o.type && o.parent && t[o.parent.name] && Go(o.value))
                  return !1;
                if (n && n(o)) return !1;
              } while ((o = Dm(o, r)));
            return !0;
          }),
          (e.prototype.walk = function (e) {
            return Dm(this, null, e);
          }),
          e
        );
      })(),
      Lm = function (e, t) {
        return e.replace(t.re, function (e) {
          return he(t.uris, e).getOr(e);
        });
      },
      Im = ["img", "video"],
      Mm = function (e, t, n) {
        return (
          !e.allow_html_data_urls &&
          (/^data:image\//i.test(t)
            ? (function (e, t) {
                return !(h(e) ? V(Im, t) : e);
              })(e.allow_svg_data_urls, n) && /^data:image\/svg\+xml/i.test(t)
            : /^data:/i.test(t))
        );
      },
      Fm = function (e, t, n) {
        var r,
          o,
          i = 1,
          a = e.getShortEndedElements(),
          u =
            /<([!?\/])?([A-Za-z0-9\-_:.]+)(\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g;
        for (u.lastIndex = r = n; (o = u.exec(t)); ) {
          if (((r = u.lastIndex), "/" === o[1])) i--;
          else if (!o[1]) {
            if (o[2] in a) continue;
            i++;
          }
          if (0 === i) break;
        }
        return r;
      },
      Um = function (e, t) {
        var n = e.exec(t);
        if (n) {
          var r = n[1],
            o = n[2];
          return "string" == typeof r && "data-mce-bogus" === r.toLowerCase()
            ? o
            : null;
        }
        return null;
      },
      jm = function (e, t) {
        void 0 === t && (t = Ti()),
          !1 !== (e = e || {}).fix_self_closing && (e.fix_self_closing = !0);
        var n = e.comment ? e.comment : C,
          r = e.cdata ? e.cdata : C,
          o = e.text ? e.text : C,
          i = e.start ? e.start : C,
          a = e.end ? e.end : C,
          u = e.pi ? e.pi : C,
          c = e.doctype ? e.doctype : C,
          s = function (s, l) {
            void 0 === l && (l = "html");
            for (
              var f,
                d,
                m,
                p,
                g,
                h,
                v,
                y,
                b,
                C,
                w,
                x,
                _,
                S,
                E,
                N,
                k,
                A,
                R,
                T = s.html,
                D = 0,
                O = [],
                B = 0,
                P = Ci.decode,
                L = At.makeMap(
                  "src,href,data,background,action,formaction,poster,xlink:href"
                ),
                I = /((java|vb)script|mhtml):/i,
                M = "html" === l ? 0 : 1,
                F = function (e) {
                  var t, n;
                  for (t = O.length; t-- && O[t].name !== e; );
                  if (t >= 0) {
                    for (n = O.length - 1; n >= t; n--)
                      (e = O[n]).valid && a(e.name);
                    O.length = t;
                  }
                },
                U = function (e, t) {
                  return o(Lm(e, s), t);
                },
                j = function (t) {
                  "" !== t &&
                    (">" === t.charAt(0) && (t = " " + t),
                    e.allow_conditional_comments ||
                      "[if" !== t.substr(0, 3).toLowerCase() ||
                      (t = " " + t),
                    n(Lm(t, s)));
                },
                z = function (e, t) {
                  var n = e || "",
                    r = !Ue(n, "--"),
                    o = (function (e, t, n) {
                      void 0 === n && (n = 0);
                      var r = e.toLowerCase();
                      if (
                        -1 !== r.indexOf("[if ", n) &&
                        (function (e, t) {
                          return /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(
                            e.substr(t)
                          );
                        })(r, n)
                      ) {
                        var o = r.indexOf("[endif]", n);
                        return r.indexOf(">", o);
                      }
                      if (t) {
                        var i = r.indexOf(">", n);
                        return -1 !== i ? i : r.length;
                      }
                      var a = /--!?>/g;
                      a.lastIndex = n;
                      var u = a.exec(e);
                      return u ? u.index + u[0].length : r.length;
                    })(T, r, t);
                  return (e = T.substr(t, o - t)), j(r ? n + e : e), o + 1;
                },
                V = function (t, n, r, o, i) {
                  var a, u;
                  if (
                    ((r = (function (e) {
                      return Lm(e, s);
                    })(
                      ((n = n.toLowerCase()) in K) ? n : P(r || o || i || "")
                    )),
                    X &&
                      !y &&
                      !1 ===
                        (function (e) {
                          return (
                            0 === e.indexOf("data-") || 0 === e.indexOf("aria-")
                          );
                        })(n))
                  ) {
                    if (!(a = S[n]) && E) {
                      for (u = E.length; u-- && !(a = E[u]).pattern.test(n); );
                      -1 === u && (a = null);
                    }
                    if (!a) return;
                    if (a.validValues && !(r in a.validValues)) return;
                  }
                  if (L[n] && !e.allow_script_urls) {
                    var c = r.replace(/[\s\u0000-\u001F]+/g, "");
                    try {
                      c = decodeURIComponent(c);
                    } catch (l) {
                      c = unescape(c);
                    }
                    if (I.test(c)) return;
                    if (Mm(e, c, t)) return;
                  }
                  (y && ((n in L) || 0 === n.indexOf("on"))) ||
                    ((p.map[n] = r), p.push({ name: n, value: r }));
                },
                H = new RegExp(
                  "<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_:.]*)(\\s(?:[^'\">]+(?:\"[^\"]*\"|'[^']*'))*[^\"'>]*(?:\"[^\">]*|'[^'>]*)?|\\s*|\\/)>))",
                  "g"
                ),
                q =
                  /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,
                $ = t.getShortEndedElements(),
                W = e.self_closing_elements || t.getSelfClosingElements(),
                K = t.getBoolAttrs(),
                X = e.validate,
                Y = e.remove_internals,
                G = e.fix_self_closing,
                J = t.getSpecialElements(),
                Q = T + ">";
              (f = H.exec(Q));

            ) {
              var Z = f[0];
              if ((D < f.index && U(P(T.substr(D, f.index - D))), (d = f[7])))
                ":" === (d = d.toLowerCase()).charAt(0) && (d = d.substr(1)),
                  F(d);
              else if ((d = f[8])) {
                if (f.index + Z.length > T.length) {
                  U(P(T.substr(f.index))), (D = f.index + Z.length);
                  continue;
                }
                ":" === (d = d.toLowerCase()).charAt(0) && (d = d.substr(1)),
                  (b = d in $),
                  G &&
                    W[d] &&
                    O.length > 0 &&
                    O[O.length - 1].name === d &&
                    F(d);
                var ee = Um(q, f[9]);
                if (null !== ee) {
                  if ("all" === ee) {
                    (D = Fm(t, T, H.lastIndex)), (H.lastIndex = D);
                    continue;
                  }
                  w = !1;
                }
                if (!X || (C = t.getElementRule(d))) {
                  if (
                    ((w = !0),
                    X && ((S = C.attributes), (E = C.attributePatterns)),
                    (_ = f[9])
                      ? ((y = -1 !== _.indexOf("data-mce-type")) &&
                          Y &&
                          (w = !1),
                        ((p = []).map = {}),
                        _.replace(q, function (e, t, n, r, o) {
                          return V(d, t, n, r, o), "";
                        }))
                      : ((p = []).map = {}),
                    X && !y)
                  ) {
                    if (
                      ((N = C.attributesRequired),
                      (k = C.attributesDefault),
                      (A = C.attributesForced),
                      C.removeEmptyAttrs && !p.length && (w = !1),
                      A)
                    )
                      for (g = A.length; g--; )
                        (v = (x = A[g]).name),
                          "{$uid}" === (R = x.value) && (R = "mce_" + B++),
                          (p.map[v] = R),
                          p.push({ name: v, value: R });
                    if (k)
                      for (g = k.length; g--; )
                        (v = (x = k[g]).name) in p.map ||
                          ("{$uid}" === (R = x.value) && (R = "mce_" + B++),
                          (p.map[v] = R),
                          p.push({ name: v, value: R }));
                    if (N) {
                      for (g = N.length; g-- && !(N[g] in p.map); );
                      -1 === g && (w = !1);
                    }
                    if ((x = p.map["data-mce-bogus"])) {
                      if ("all" === x) {
                        (D = Fm(t, T, H.lastIndex)), (H.lastIndex = D);
                        continue;
                      }
                      w = !1;
                    }
                  }
                  w && i(d, p, b);
                } else w = !1;
                if ((m = J[d])) {
                  (m.lastIndex = D = f.index + Z.length),
                    (f = m.exec(T))
                      ? (w && (h = T.substr(D, f.index - D)),
                        (D = f.index + f[0].length))
                      : ((h = T.substr(D)), (D = T.length)),
                    w && (h.length > 0 && U(h, !0), a(d)),
                    (H.lastIndex = D);
                  continue;
                }
                b ||
                  (_ && _.indexOf("/") === _.length - 1
                    ? w && a(d)
                    : O.push({ name: d, valid: w }));
              } else if ((d = f[1])) j(d);
              else if ((d = f[2])) {
                if (
                  !(
                    1 === M ||
                    e.preserve_cdata ||
                    (O.length > 0 &&
                      t.isValidChild(O[O.length - 1].name, "#cdata"))
                  )
                ) {
                  (D = z("", f.index + 2)), (H.lastIndex = D);
                  continue;
                }
                r(d);
              } else if ((d = f[3])) c(d);
              else {
                if ((d = f[4]) || "<!" === Z) {
                  (D = z(d, f.index + Z.length)), (H.lastIndex = D);
                  continue;
                }
                if ((d = f[5])) {
                  if (1 !== M) {
                    (D = z("?", f.index + 2)), (H.lastIndex = D);
                    continue;
                  }
                  u(d, f[6]);
                }
              }
              D = f.index + Z.length;
            }
            for (
              D < T.length && U(P(T.substr(D))), g = O.length - 1;
              g >= 0;
              g--
            )
              (d = O[g]).valid && a(d.name);
          };
        return {
          parse: function (e, t) {
            void 0 === t && (t = "html"),
              s(
                (function (e) {
                  for (
                    var t,
                      n = /data:[^;]+;base64,([a-z0-9\+\/=]+)/gi,
                      r = [],
                      o = {},
                      i = Ku("img"),
                      a = 0,
                      u = 0;
                    (t = n.exec(e));

                  ) {
                    var c = t[0],
                      s = i + "_" + u++;
                    (o[s] = c),
                      a < t.index && r.push(e.substr(a, t.index - a)),
                      r.push(s),
                      (a = t.index + c.length);
                  }
                  var l = new RegExp(i + "_[0-9]+", "g");
                  return 0 === a
                    ? { prefix: i, uris: o, html: e, re: l }
                    : (a < e.length && r.push(e.substr(a)),
                      { prefix: i, uris: o, html: r.join(""), re: l });
                })(e),
                t
              );
          },
        };
      };
    jm.findEndTag = Fm;
    var zm = function (e, t) {
        var n,
          r,
          o,
          i,
          a = t,
          u = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
          c = e.schema;
        a = (function (e, t) {
          var n = new RegExp(
            ["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"),
            "gi"
          );
          return t.replace(n, "");
        })(e.getTempAttrs(), a);
        for (var s = c.getShortEndedElements(); (i = u.exec(a)); )
          (r = u.lastIndex),
            (o = i[0].length),
            (n = s[i[1]] ? r : jm.findEndTag(c, a, r)),
            (a = a.substring(0, r - o) + a.substring(n)),
            (u.lastIndex = r - o);
        return Eo(a);
      },
      Vm = zm,
      Hm = function (e, t, n, r) {
        var o;
        return (
          (t.format = n),
          (t.get = !0),
          (t.getInner = !0),
          t.no_events || e.fire("BeforeGetContent", t),
          (o =
            "raw" === t.format
              ? At.trim(Vm(e.serializer, r.innerHTML))
              : "text" === t.format
              ? e.dom.isEmpty(r)
                ? ""
                : Eo(r.innerText || r.textContent)
              : "tree" === t.format
              ? e.serializer.serialize(r, t)
              : (function (e, t) {
                  var n = rs(e),
                    r = new RegExp(
                      "^(<" +
                        n +
                        "[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/" +
                        n +
                        ">[\r\n]*|<br \\/>[\r\n]*)$"
                    );
                  return t.replace(r, "");
                })(e, e.serializer.serialize(r, t))),
          V(["text", "tree"], t.format) || wo(Tt.fromDom(r))
            ? (t.content = o)
            : (t.content = At.trim(o)),
          t.no_events || e.fire("GetContent", t),
          t.content
        );
      },
      qm = At.each,
      $m = function (e) {
        return {
          compare: function (t, n) {
            if (t.nodeName !== n.nodeName) return !1;
            var r = function (t) {
                var n = {};
                return (
                  qm(e.getAttribs(t), function (r) {
                    var o = r.nodeName.toLowerCase();
                    0 !== o.indexOf("_") &&
                      "style" !== o &&
                      0 !== o.indexOf("data-") &&
                      (n[o] = e.getAttrib(t, o));
                  }),
                  n
                );
              },
              o = function (e, t) {
                var n, r;
                for (r in e)
                  if (e.hasOwnProperty(r)) {
                    if (void 0 === (n = t[r])) return !1;
                    if (e[r] !== n) return !1;
                    delete t[r];
                  }
                for (r in t) if (t.hasOwnProperty(r)) return !1;
                return !0;
              };
            return !(
              !o(r(t), r(n)) ||
              !o(
                e.parseStyle(e.getAttrib(t, "style")),
                e.parseStyle(e.getAttrib(n, "style"))
              ) ||
              Zl(t) ||
              Zl(n)
            );
          },
        };
      },
      Wm = At.makeMap,
      Km = function (e) {
        var t = [],
          n = (e = e || {}).indent,
          r = Wm(e.indent_before || ""),
          o = Wm(e.indent_after || ""),
          i = Ci.getEncodeFunc(e.entity_encoding || "raw", e.entities),
          a = "html" === e.element_format;
        return {
          start: function (e, u, c) {
            var s, l, f, d;
            if (
              (n &&
                r[e] &&
                t.length > 0 &&
                (d = t[t.length - 1]).length > 0 &&
                "\n" !== d &&
                t.push("\n"),
              t.push("<", e),
              u)
            )
              for (s = 0, l = u.length; s < l; s++)
                (f = u[s]), t.push(" ", f.name, '="', i(f.value, !0), '"');
            (t[t.length] = !c || a ? ">" : " />"),
              c &&
                n &&
                o[e] &&
                t.length > 0 &&
                (d = t[t.length - 1]).length > 0 &&
                "\n" !== d &&
                t.push("\n");
          },
          end: function (e) {
            var r;
            t.push("</", e, ">"),
              n &&
                o[e] &&
                t.length > 0 &&
                (r = t[t.length - 1]).length > 0 &&
                "\n" !== r &&
                t.push("\n");
          },
          text: function (e, n) {
            e.length > 0 && (t[t.length] = n ? e : i(e));
          },
          cdata: function (e) {
            t.push("<![CDATA[", e, "]]>");
          },
          comment: function (e) {
            t.push("\x3c!--", e, "--\x3e");
          },
          pi: function (e, r) {
            r ? t.push("<?", e, " ", i(r), "?>") : t.push("<?", e, "?>"),
              n && t.push("\n");
          },
          doctype: function (e) {
            t.push("<!DOCTYPE", e, ">", n ? "\n" : "");
          },
          reset: function () {
            t.length = 0;
          },
          getContent: function () {
            return t.join("").replace(/\n$/, "");
          },
        };
      },
      Xm = function (e, t) {
        void 0 === t && (t = Ti());
        var n = Km(e);
        return (
          ((e = e || {}).validate = !("validate" in e) || e.validate),
          {
            serialize: function (r) {
              var o = e.validate,
                i = {
                  3: function (e) {
                    n.text(e.value, e.raw);
                  },
                  8: function (e) {
                    n.comment(e.value);
                  },
                  7: function (e) {
                    n.pi(e.name, e.value);
                  },
                  10: function (e) {
                    n.doctype(e.value);
                  },
                  4: function (e) {
                    n.cdata(e.value);
                  },
                  11: function (e) {
                    if ((e = e.firstChild))
                      do {
                        a(e);
                      } while ((e = e.next));
                  },
                };
              n.reset();
              var a = function (e) {
                var r,
                  u,
                  c,
                  s,
                  l,
                  f,
                  d,
                  m,
                  p,
                  g = i[e.type];
                if (g) g(e);
                else {
                  if (
                    ((r = e.name),
                    (u = e.shortEnded),
                    (c = e.attributes),
                    o &&
                      c &&
                      c.length > 1 &&
                      (((f = []).map = {}), (p = t.getElementRule(e.name))))
                  ) {
                    for (d = 0, m = p.attributesOrder.length; d < m; d++)
                      (s = p.attributesOrder[d]) in c.map &&
                        ((l = c.map[s]),
                        (f.map[s] = l),
                        f.push({ name: s, value: l }));
                    for (d = 0, m = c.length; d < m; d++)
                      (s = c[d].name) in f.map ||
                        ((l = c.map[s]),
                        (f.map[s] = l),
                        f.push({ name: s, value: l }));
                    c = f;
                  }
                  if ((n.start(e.name, c, u), !u)) {
                    if ((e = e.firstChild))
                      do {
                        a(e);
                      } while ((e = e.next));
                    n.end(r);
                  }
                }
              };
              return 1 !== r.type || e.inner ? i[11](r) : a(r), n.getContent();
            },
          }
        );
      },
      Ym = new Set();
    $(
      [
        "margin",
        "margin-left",
        "margin-right",
        "margin-top",
        "margin-bottom",
        "padding",
        "padding-left",
        "padding-right",
        "padding-top",
        "padding-bottom",
        "border",
        "border-width",
        "border-style",
        "border-color",
        "background",
        "background-attachment",
        "background-clip",
        "background-color",
        "background-image",
        "background-origin",
        "background-position",
        "background-repeat",
        "background-size",
        "float",
        "position",
        "left",
        "right",
        "top",
        "bottom",
        "z-index",
        "display",
        "transform",
        "width",
        "max-width",
        "min-width",
        "height",
        "max-height",
        "min-height",
        "overflow",
        "overflow-x",
        "overflow-y",
        "text-overflow",
        "vertical-align",
        "transition",
        "transition-delay",
        "transition-duration",
        "transition-property",
        "transition-timing-function",
      ],
      function (e) {
        Ym.add(e);
      }
    );
    var Gm = ["font", "text-decoration", "text-emphasis"],
      Jm = function (e, t) {
        return ae(e.parseStyle(e.getAttrib(t, "style")));
      },
      Qm = function (e, t) {
        return Z(Jm(e, t), function (e) {
          return !(function (e) {
            return Ym.has(e);
          })(e);
        });
      },
      Zm = function (e, t, n) {
        var r = Jm(e, t),
          o = Jm(e, n),
          i = function (r) {
            var o = e.getStyle(t, r),
              i = e.getStyle(n, r);
            return qe(o) && qe(i) && o !== i;
          };
        return H(r, function (e) {
          var t = function (t) {
            return H(t, function (t) {
              return t === e;
            });
          };
          if (!t(o) && t(Gm)) {
            var n = K(o, function (e) {
              return H(Gm, function (t) {
                return Ue(e, t);
              });
            });
            return H(n, i);
          }
          return i(e);
        });
      },
      ep = function (e, t, n) {
        return M.from(n.container())
          .filter(jn)
          .exists(function (r) {
            var o = e ? 0 : -1;
            return t(r.data.charAt(n.offset() + o));
          });
      },
      tp = S(ep, !0, tf),
      np = S(ep, !1, tf),
      rp = function (e) {
        var t = e.container();
        return (
          jn(t) &&
          (0 === t.data.length ||
            (So(t.data) && nd.isBookmarkNode(t.parentNode)))
        );
      },
      op = function (e, t) {
        return function (n) {
          return M.from(nl(e ? 0 : -1, n))
            .filter(t)
            .isSome();
        };
      },
      ip = function (e) {
        return $n(e) && "block" === or(Tt.fromDom(e), "display");
      },
      ap = function (e) {
        return (
          Kn(e) &&
          !(function (e) {
            return On(e) && "all" === e.getAttribute("data-mce-bogus");
          })(e)
        );
      },
      up = op(!0, ip),
      cp = op(!1, ip),
      sp = op(!0, Yn),
      lp = op(!1, Yn),
      fp = op(!0, Mn),
      dp = op(!1, Mn),
      mp = op(!0, ap),
      pp = op(!1, ap),
      gp = function (e) {
        var t = Fu(e, "br"),
          n = K(
            (function (e) {
              for (var t = [], n = e.dom; n; )
                t.push(Tt.fromDom(n)), (n = n.lastChild);
              return t;
            })(e).slice(-1),
            go
          );
        t.length === n.length && $(n, yn);
      },
      hp = function (e) {
        vn(e), gn(e, Tt.fromHtml('<br data-mce-bogus="1">'));
      },
      vp = function (e) {
        rn(e).each(function (t) {
          Gt(t).each(function (n) {
            mo(e) && go(t) && mo(n) && yn(t);
          });
        });
      },
      yp = function (e, t, n) {
        return It(t, e)
          ? (function (e, t) {
              for (
                var n = y(t) ? t : O, r = e.dom, o = [];
                null !== r.parentNode && void 0 !== r.parentNode;

              ) {
                var i = r.parentNode,
                  a = Tt.fromDom(i);
                if ((o.push(a), !0 === n(a))) break;
                r = i;
              }
              return o;
            })(e, function (e) {
              return n(e) || Pt(e, t);
            }).slice(0, -1)
          : [];
      },
      bp = function (e, t) {
        return yp(e, t, O);
      },
      Cp = function (e, t) {
        return [e].concat(bp(e, t));
      },
      wp = function (e, t, n) {
        return Ll(e, t, n, rp);
      },
      xp = function (e, t) {
        return G(Cp(Tt.fromDom(t.container()), e), mo);
      },
      _p = function (e, t, n) {
        return wp(e, t.dom, n).forall(function (e) {
          return xp(t, n).fold(
            function () {
              return !1 === tl(e, n, t.dom);
            },
            function (r) {
              return !1 === tl(e, n, t.dom) && It(r, Tt.fromDom(e.container()));
            }
          );
        });
      },
      Sp = function (e, t, n) {
        return xp(t, n).fold(
          function () {
            return wp(e, t.dom, n).forall(function (e) {
              return !1 === tl(e, n, t.dom);
            });
          },
          function (t) {
            return wp(e, t.dom, n).isNone();
          }
        );
      },
      Ep = S(Sp, !1),
      Np = S(Sp, !0),
      kp = S(_p, !1),
      Ap = S(_p, !0),
      Rp = function (e) {
        return fl(e).exists(go);
      },
      Tp = function (e, t, n) {
        var r = K(Cp(Tt.fromDom(n.container()), t), mo),
          o = re(r).getOr(t);
        return Bl(e, o.dom, n).filter(Rp);
      },
      Dp = function (e, t) {
        return fl(t).exists(go) || Tp(!0, e, t).isSome();
      },
      Op = function (e, t) {
        return (
          (function (e) {
            return M.from(e.getNode(!0)).map(Tt.fromDom);
          })(t).exists(go) || Tp(!1, e, t).isSome()
        );
      },
      Bp = S(Tp, !1),
      Pp = S(Tp, !0),
      Lp = function (e) {
        return Rc.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
      },
      Ip = function (e, t) {
        var n = K(Cp(Tt.fromDom(t.container()), e), mo);
        return re(n).getOr(e);
      },
      Mp = function (e, t) {
        return Lp(t) ? np(t) : np(t) || Fl(Ip(e, t).dom, t).exists(np);
      },
      Fp = function (e, t) {
        return Lp(t) ? tp(t) : tp(t) || Ml(Ip(e, t).dom, t).exists(tp);
      },
      Up = function (e) {
        return fl(e)
          .bind(function (e) {
            return Yr(e, Vt);
          })
          .exists(function (e) {
            return (t = or(e, "white-space")), V(["pre", "pre-wrap"], t);
            var t;
          });
      },
      jp = function (e, t) {
        return (
          (function (e, t) {
            return Fl(e.dom, t).isNone();
          })(e, t) ||
          (function (e, t) {
            return Ml(e.dom, t).isNone();
          })(e, t) ||
          Ep(e, t) ||
          Np(e, t) ||
          Op(e, t) ||
          Dp(e, t)
        );
      },
      zp = function (e, t) {
        return !Up(t) && (Ep(e, t) || kp(e, t) || Op(e, t) || Mp(e, t));
      },
      Vp = function (e, t) {
        return !Up(t) && (Np(e, t) || Ap(e, t) || Dp(e, t) || Fp(e, t));
      },
      Hp = function (e, t) {
        return (
          zp(e, t) ||
          Vp(
            e,
            (function (e) {
              var t = e.container(),
                n = e.offset();
              return jn(t) && n < t.data.length ? Rc(t, n + 1) : e;
            })(t)
          )
        );
      },
      qp = function (e, t) {
        return ef(e.charAt(t));
      },
      $p = function (e) {
        var t = e.container();
        return jn(t) && Fe(t.data, xo);
      },
      Wp = function (e) {
        var t = e.data,
          n = (function (e) {
            var t = e.split("");
            return q(t, function (e, n) {
              return ef(e) &&
                n > 0 &&
                n < t.length - 1 &&
                nf(t[n - 1]) &&
                nf(t[n + 1])
                ? " "
                : e;
            }).join("");
          })(t);
        return n !== t && ((e.data = n), !0);
      },
      Kp = function (e, t) {
        return M.some(t)
          .filter($p)
          .bind(function (t) {
            var n = t.container();
            return (function (e, t) {
              var n = t.data,
                r = Rc(t, 0);
              return !(
                !qp(n, 0) ||
                Hp(e, r) ||
                ((t.data = " " + n.slice(1)), 0)
              );
            })(e, n) ||
              Wp(n) ||
              (function (e, t) {
                var n = t.data,
                  r = Rc(t, n.length - 1);
                return !(
                  !qp(n, n.length - 1) ||
                  Hp(e, r) ||
                  ((t.data = n.slice(0, -1) + " "), 0)
                );
              })(e, n)
              ? M.some(t)
              : M.none();
          });
      },
      Xp = function (e) {
        var t = Tt.fromDom(e.getBody());
        e.selection.isCollapsed() &&
          Kp(t, Rc.fromRangeStart(e.selection.getRng())).each(function (t) {
            e.selection.setRng(t.toRange());
          });
      },
      Yp = function (e, t, n) {
        if (0 !== n) {
          var r = Tt.fromDom(e),
            o = Xr(r, mo).getOr(r),
            i = e.data.slice(t, t + n),
            a = t + n >= e.data.length && Vp(o, Rc(e, e.data.length)),
            u = 0 === t && zp(o, Rc(e, 0));
          e.replaceData(
            t,
            n,
            (function (e, t, n) {
              return Y(
                e,
                function (r, o) {
                  return tf(o) || ef(o)
                    ? r.previousCharIsSpace ||
                      ("" === r.str && t) ||
                      (r.str.length === e.length - 1 && n)
                      ? { previousCharIsSpace: !1, str: r.str + xo }
                      : { previousCharIsSpace: !0, str: r.str + " " }
                    : { previousCharIsSpace: !1, str: r.str + o };
                },
                { previousCharIsSpace: !1, str: "" }
              ).str;
            })(i, u, a)
          );
        }
      },
      Gp = function (e, t) {
        var n = e.data.slice(t),
          r = n.length - Ve(n).length;
        return Yp(e, t, r);
      },
      Jp = function (e, t) {
        var n = e.data.slice(0, t),
          r = n.length - He(n).length;
        return Yp(e, t - r, r);
      },
      Qp = function (e, t, n, r) {
        void 0 === r && (r = !0);
        var o = He(e.data).length,
          i = r ? e : t,
          a = r ? t : e;
        return (
          r ? i.appendData(a.data) : i.insertData(0, a.data),
          yn(Tt.fromDom(a)),
          n && Gp(i, o),
          i
        );
      },
      Zp = function (e, t) {
        return (function (e, t) {
          var n = e.container(),
            r = e.offset();
          return (
            !1 === Rc.isTextPosition(e) &&
            n === t.parentNode &&
            r > Rc.before(t).offset()
          );
        })(t, e)
          ? Rc(t.container(), t.offset() - 1)
          : t;
      },
      eg = function (e) {
        return Wo(e.previousSibling)
          ? M.some(
              ((t = e.previousSibling),
              jn(t) ? Rc(t, t.data.length) : Rc.after(t))
            )
          : e.previousSibling
          ? jl(e.previousSibling)
          : M.none();
        var t;
      },
      tg = function (e) {
        return Wo(e.nextSibling)
          ? M.some(((t = e.nextSibling), jn(t) ? Rc(t, 0) : Rc.before(t)))
          : e.nextSibling
          ? Ul(e.nextSibling)
          : M.none();
        var t;
      },
      ng = function (e, t) {
        return eg(t)
          .orThunk(function () {
            return tg(t);
          })
          .orThunk(function () {
            return (function (e, t) {
              var n = Rc.before(
                t.previousSibling ? t.previousSibling : t.parentNode
              );
              return Fl(e, n).fold(function () {
                return Ml(e, Rc.after(t));
              }, M.some);
            })(e, t);
          });
      },
      rg = function (e, t) {
        return tg(t)
          .orThunk(function () {
            return eg(t);
          })
          .orThunk(function () {
            return (function (e, t) {
              return Ml(e, Rc.after(t)).fold(function () {
                return Fl(e, Rc.before(t));
              }, M.some);
            })(e, t);
          });
      },
      og = function (e, t, n) {
        return (function (e, t, n) {
          return e ? rg(t, n) : ng(t, n);
        })(e, t, n).map(S(Zp, n));
      },
      ig = function (e, t, n) {
        n.fold(
          function () {
            e.focus();
          },
          function (n) {
            e.selection.setRng(n.toRange(), t);
          }
        );
      },
      ag = function (e, t) {
        return t && ve(e.schema.getBlockElements(), Ut(t));
      },
      ug = function (e) {
        if (ni(e)) {
          var t = Tt.fromHtml('<br data-mce-bogus="1">');
          return vn(e), gn(e, t), M.some(Rc.before(t.dom));
        }
        return M.none();
      },
      cg = function (e, t, n) {
        var r = Gt(e).filter(Ht),
          o = Jt(e).filter(Ht);
        return (
          yn(e),
          (function (e, t, n, r) {
            return e.isSome() && t.isSome() && n.isSome()
              ? M.some(r(e.getOrDie(), t.getOrDie(), n.getOrDie()))
              : M.none();
          })(r, o, t, function (e, t, r) {
            var o = e.dom,
              i = t.dom,
              a = o.data.length;
            return Qp(o, i, n), r.container() === i ? Rc(o, a) : r;
          }).orThunk(function () {
            return (
              n &&
                (r.each(function (e) {
                  return Jp(e.dom, e.dom.length);
                }),
                o.each(function (e) {
                  return Gp(e.dom, 0);
                })),
              t
            );
          })
        );
      },
      sg = function (e, t, n, r) {
        void 0 === r && (r = !0);
        var o,
          i = og(t, e.getBody(), n.dom),
          a = Xr(
            n,
            S(ag, e),
            ((o = e.getBody()),
            function (e) {
              return e.dom === o;
            })
          ),
          u = cg(
            n,
            i,
            (function (e, t) {
              return ve(e.schema.getTextInlineElements(), Ut(t));
            })(e, n)
          );
        e.dom.isEmpty(e.getBody())
          ? (e.setContent(""), e.selection.setCursorLocation())
          : a.bind(ug).fold(
              function () {
                r && ig(e, t, u);
              },
              function (n) {
                r && ig(e, t, M.some(n));
              }
            );
      },
      lg = function (e, t) {
        return { start: e, end: t };
      },
      fg = Sr([
        { removeTable: ["element"] },
        { emptyCells: ["cells"] },
        { deleteCellSelection: ["rng", "cell"] },
      ]),
      dg = function (e, t) {
        return Zr(Tt.fromDom(e), "td,th", t);
      },
      mg = function (e, t) {
        return Jr(e, "table", t);
      },
      pg = function (e) {
        return !Pt(e.start, e.end);
      },
      gg = function (e, t) {
        return mg(e.start, t).bind(function (n) {
          return mg(e.end, t).bind(function (e) {
            return (t = Pt(n, e)), (r = n), t ? M.some(r) : M.none();
            var t, r;
          });
        });
      },
      hg = function (e) {
        return Fu(e, "td,th");
      },
      vg = function (e, t) {
        var n = dg(t.startContainer, e),
          r = dg(t.endContainer, e);
        return t.collapsed
          ? M.none()
          : ec(n, r, lg).fold(
              function () {
                return n.fold(
                  function () {
                    return r.bind(function (t) {
                      return mg(t, e).bind(function (e) {
                        return re(hg(e)).map(function (e) {
                          return lg(e, t);
                        });
                      });
                    });
                  },
                  function (t) {
                    return mg(t, e).bind(function (e) {
                      return oe(hg(e)).map(function (e) {
                        return lg(t, e);
                      });
                    });
                  }
                );
              },
              function (t) {
                return yg(e, t)
                  ? M.none()
                  : (function (e, t) {
                      return mg(e.start, t).bind(function (t) {
                        return oe(hg(t)).map(function (t) {
                          return lg(e.start, t);
                        });
                      });
                    })(t, e);
              }
            );
      },
      yg = function (e, t) {
        return gg(t, e).isSome();
      },
      bg = function (e, t, n) {
        return e
          .filter(function (e) {
            return pg(e) && yg(n, e);
          })
          .orThunk(function () {
            return vg(n, t);
          })
          .bind(function (e) {
            return (function (e, t) {
              return gg(e, t).map(function (t) {
                return (function (e, t, n) {
                  return { rng: e, table: t, cells: n };
                })(e, t, hg(t));
              });
            })(e, n);
          });
      },
      Cg = function (e, t) {
        return J(e, function (e) {
          return Pt(e, t);
        });
      },
      wg = function (e, t, n) {
        return e
          .filter(function (e) {
            return (
              (function (e, t) {
                return (
                  !pg(e) &&
                  gg(e, t).exists(function (e) {
                    var t = e.dom.rows;
                    return 1 === t.length && 1 === t[0].cells.length;
                  })
                );
              })(e, n) && qf(e.start, t)
            );
          })
          .map(function (e) {
            return e.start;
          });
      },
      xg = function (e) {
        return (function (e) {
          return ec(
            Cg(e.cells, e.rng.start),
            Cg(e.cells, e.rng.end),
            function (t, n) {
              return e.cells.slice(t, n + 1);
            }
          );
        })(e).map(function (t) {
          var n = e.cells;
          return t.length === n.length
            ? fg.removeTable(e.table)
            : fg.emptyCells(t);
        });
      },
      _g = function (e, t) {
        var n = (function (e) {
            return function (t) {
              return Pt(e, t);
            };
          })(e),
          r = (function (e, t) {
            var n = dg(e.startContainer, t),
              r = dg(e.endContainer, t);
            return ec(n, r, lg);
          })(t, n);
        return wg(r, t, n)
          .map(function (e) {
            return fg.deleteCellSelection(t, e);
          })
          .orThunk(function () {
            return bg(r, t, n).bind(xg);
          });
      },
      Sg = function (e) {
        var t;
        return (8 === jt((t = e)) || "#comment" === Ut(t) ? Gt(e) : rn(e))
          .bind(Sg)
          .orThunk(function () {
            return M.some(e);
          });
      },
      Eg = function (e, t) {
        return $(t, hp), e.selection.setCursorLocation(t[0].dom, 0), !0;
      },
      Ng = function (e, t, n) {
        t.deleteContents();
        var r,
          o = Sg(n).getOr(n),
          i = Tt.fromDom(e.dom.getParent(o.dom, e.dom.isBlock));
        if (
          (ni(i) && (hp(i), e.selection.setCursorLocation(i.dom, 0)), !Pt(n, i))
        ) {
          var a = Yt(i).is(n)
            ? []
            : Yt((r = i))
                .map(en)
                .map(function (e) {
                  return K(e, function (e) {
                    return !Pt(r, e);
                  });
                })
                .getOr([]);
          $(a.concat(en(n)), function (e) {
            Pt(e, i) || It(e, i) || yn(e);
          });
        }
        return !0;
      },
      kg = function (e, t) {
        return sg(e, !1, t), !0;
      },
      Ag = function (e, t, n, r) {
        return Tg(t, r)
          .fold(
            function () {
              return (function (e, t, n) {
                return _g(t, n).map(function (t) {
                  return t.fold(S(kg, e), S(Eg, e), S(Ng, e));
                });
              })(e, t, n);
            },
            function (t) {
              return (function (e, t) {
                return Dg(e, t);
              })(e, t);
            }
          )
          .getOr(!1);
      },
      Rg = function (e, t) {
        return G(Cp(t, e), Co);
      },
      Tg = function (e, t) {
        return G(Cp(t, e), function (e) {
          return "caption" === Ut(e);
        });
      },
      Dg = function (e, t) {
        return hp(t), e.selection.setCursorLocation(t.dom, 0), M.some(!0);
      },
      Og = function (e, t, n, r, o) {
        return Pl(n, e.getBody(), o)
          .bind(function (i) {
            return (function (e, t, n, r) {
              return Ul(e.dom)
                .bind(function (o) {
                  return jl(e.dom).map(function (e) {
                    return t
                      ? n.isEqual(o) && r.isEqual(e)
                      : n.isEqual(e) && r.isEqual(o);
                  });
                })
                .getOr(!0);
            })(r, n, o, i)
              ? (function (e, t) {
                  return Dg(e, t);
                })(e, r)
              : (function (e, t, n) {
                  return Tg(e, Tt.fromDom(n.getNode())).map(function (e) {
                    return !1 === Pt(e, t);
                  });
                })(t, r, i);
          })
          .or(M.some(!0));
      },
      Bg = function (e, t, n, r) {
        var o = Rc.fromRangeStart(e.selection.getRng());
        return Rg(n, r)
          .bind(function (r) {
            return ni(r)
              ? Dg(e, r)
              : (function (e, t, n, r, o) {
                  return Pl(n, e.getBody(), o).bind(function (e) {
                    return Rg(t, Tt.fromDom(e.getNode())).map(function (e) {
                      return !1 === Pt(e, r);
                    });
                  });
                })(e, n, t, r, o);
          })
          .getOr(!1);
      },
      Pg = function (e, t) {
        return e ? fp(t) : dp(t);
      },
      Lg = function (e, t, n) {
        var r = Tt.fromDom(e.getBody());
        return Tg(r, n).fold(
          function () {
            return (
              Bg(e, t, r, n) ||
              (function (e, t) {
                var n = Rc.fromRangeStart(e.selection.getRng());
                return (
                  Pg(t, n) ||
                  Bl(t, e.getBody(), n).exists(function (e) {
                    return Pg(t, e);
                  })
                );
              })(e, t)
            );
          },
          function (n) {
            return (function (e, t, n, r) {
              var o = Rc.fromRangeStart(e.selection.getRng());
              return ni(r) ? Dg(e, r) : Og(e, n, t, r, o);
            })(e, t, r, n).getOr(!1);
          }
        );
      },
      Ig = function (e, t) {
        var n = Tt.fromDom(e.selection.getStart(!0)),
          r = zf(e);
        return e.selection.isCollapsed() && 0 === r.length
          ? Lg(e, t, n)
          : (function (e, t) {
              var n = Tt.fromDom(e.getBody()),
                r = e.selection.getRng(),
                o = zf(e);
              return 0 !== o.length ? Eg(e, o) : Ag(e, n, r, t);
            })(e, n);
      },
      Mg = function (e) {
        var t = Rc.fromRangeStart(e),
          n = Rc.fromRangeEnd(e),
          r = e.commonAncestorContainer;
        return Bl(!1, r, n)
          .map(function (o) {
            return !tl(t, n, r) && tl(t, o, r)
              ? (function (e, t, n, r) {
                  var o = document.createRange();
                  return o.setStart(e, t), o.setEnd(n, r), o;
                })(t.container(), t.offset(), o.container(), o.offset())
              : e;
          })
          .getOr(e);
      },
      Fg = function (e) {
        return e.collapsed ? e : Mg(e);
      },
      Ug = function (e, t) {
        return (
          e.getBlockElements()[t.name] &&
          (function (e) {
            return e.firstChild && e.firstChild === e.lastChild;
          })(t) &&
          (function (e) {
            return "br" === e.name || e.value === xo;
          })(t.firstChild)
        );
      },
      jg = function (e, t) {
        var n = t.firstChild,
          r = t.lastChild;
        return (
          n && "meta" === n.name && (n = n.next),
          r && "mce_marker" === r.attr("id") && (r = r.prev),
          (function (e, t) {
            var n = e.getNonEmptyElements();
            return t && (t.isEmpty(n) || Ug(e, t));
          })(e, r) && (r = r.prev),
          !(!n || n !== r || ("ul" !== n.name && "ol" !== n.name))
        );
      },
      zg = function (e) {
        return (
          e &&
          e.firstChild &&
          e.firstChild === e.lastChild &&
          (function (e) {
            return e.data === xo || qn(e);
          })(e.firstChild)
        );
      },
      Vg = function (e) {
        return e.length > 0 && (!(t = e[e.length - 1]).firstChild || zg(t))
          ? e.slice(0, -1)
          : e;
        var t;
      },
      Hg = function (e, t) {
        var n = e.getParent(t, e.isBlock);
        return n && "LI" === n.nodeName ? n : null;
      },
      qg = function (e, t) {
        var n = Rc.after(e),
          r = Al(t).prev(n);
        return r ? r.toRange() : null;
      },
      $g = function (e, t, n) {
        var r = e.parentNode;
        return (
          At.each(t, function (t) {
            r.insertBefore(t, e);
          }),
          (function (e, t) {
            var n = Rc.before(e),
              r = Al(t).next(n);
            return r ? r.toRange() : null;
          })(e, n)
        );
      },
      Wg = function (e, t, n, r) {
        var o,
          i = (function (e, t, n) {
            var r = t.serialize(n);
            return (function (e) {
              var t = e.firstChild,
                n = e.lastChild;
              return (
                t && "META" === t.nodeName && t.parentNode.removeChild(t),
                n && "mce_marker" === n.id && n.parentNode.removeChild(n),
                e
              );
            })(e.createFragment(r));
          })(t, e, r),
          a = Hg(t, n.startContainer),
          u = Vg(
            ((o = i.firstChild),
            At.grep(o.childNodes, function (e) {
              return "LI" === e.nodeName;
            }))
          ),
          c = t.getRoot(),
          s = function (e) {
            var r = Rc.fromRangeStart(n),
              o = Al(t.getRoot()),
              i = 1 === e ? o.prev(r) : o.next(r);
            return !i || Hg(t, i.getNode()) !== a;
          };
        return s(1)
          ? $g(a, u, c)
          : s(2)
          ? (function (e, t, n, r) {
              return r.insertAfter(t.reverse(), e), qg(t[0], n);
            })(a, u, c, t)
          : (function (e, t, n, r) {
              var o = (function (e, t) {
                  var n = t.cloneRange(),
                    r = t.cloneRange();
                  return (
                    n.setStartBefore(e),
                    r.setEndAfter(e),
                    [n.cloneContents(), r.cloneContents()]
                  );
                })(e, r),
                i = e.parentNode;
              return (
                i.insertBefore(o[0], e),
                At.each(t, function (t) {
                  i.insertBefore(t, e);
                }),
                i.insertBefore(o[1], e),
                i.removeChild(e),
                qg(t[t.length - 1], n)
              );
            })(a, u, c, n);
      },
      Kg = Xn,
      Xg = function (e) {
        var t = e.dom,
          n = Fg(e.selection.getRng());
        e.selection.setRng(n);
        var r = t.getParent(n.startContainer, Kg);
        !(function (e, t, n) {
          return (
            null !== n &&
            n === e.getParent(t.endContainer, Kg) &&
            qf(Tt.fromDom(n), t)
          );
        })(t, n, r)
          ? e.getDoc().execCommand("Delete", !1, null)
          : Ng(e, n, Tt.fromDom(r));
      },
      Yg = function (e, t, n) {
        var r,
          o,
          i,
          a,
          u,
          c,
          s = e.selection,
          l = e.dom;
        /^ | $/.test(t) &&
          (t = (function (e, t, n) {
            var r = Tt.fromDom(e.getRoot());
            return (
              (n = zp(r, Rc.fromRangeStart(t))
                ? n.replace(/^ /, "&nbsp;")
                : n.replace(/^&nbsp;/, " ")),
              Vp(r, Rc.fromRangeEnd(t))
                ? n.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;")
                : n.replace(/&nbsp;(<br( \/)?>)?$/, " ")
            );
          })(l, s.getRng(), t));
        var f = e.parser,
          d = n.merge,
          m = Xm({ validate: Cs(e) }, e.schema),
          p = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>';
        if (
          ((i = { content: t, format: "html", selection: !0, paste: n.paste }),
          (i = e.fire("BeforeSetContent", i)).isDefaultPrevented())
        )
          e.fire("SetContent", {
            content: i.content,
            format: "html",
            selection: !0,
            paste: n.paste,
          });
        else {
          -1 === (t = i.content).indexOf("{$caret}") && (t += "{$caret}"),
            (t = t.replace(/\{\$caret\}/, p));
          var g =
              (u = s.getRng()).startContainer ||
              (u.parentElement ? u.parentElement() : null),
            h = e.getBody();
          g === h &&
            s.isCollapsed() &&
            l.isBlock(h.firstChild) &&
            (function (e, t) {
              return t && !e.schema.getShortEndedElements()[t.nodeName];
            })(e, h.firstChild) &&
            l.isEmpty(h.firstChild) &&
            ((u = l.createRng()).setStart(h.firstChild, 0),
            u.setEnd(h.firstChild, 0),
            s.setRng(u)),
            s.isCollapsed() || Xg(e);
          var y,
            b = {
              context: (r = s.getNode()).nodeName.toLowerCase(),
              data: n.data,
              insert: !0,
            },
            C = f.parse(t, b);
          if (
            !0 === n.paste &&
            jg(e.schema, C) &&
            (function (e, t) {
              return !!Hg(e, t);
            })(l, r)
          )
            return (
              (u = Wg(m, l, s.getRng(), C)),
              s.setRng(u),
              void e.fire("SetContent", i)
            );
          if (
            ((function (e) {
              for (var t = e; (t = t.walk()); )
                1 === t.type && t.attr("data-mce-fragment", "1");
            })(C),
            "mce_marker" === (c = C.lastChild).attr("id"))
          )
            for (a = c, c = c.prev; c; c = c.walk(!0))
              if (3 === c.type || !l.isBlock(c.name)) {
                e.schema.isValidChild(c.parent.name, "span") &&
                  c.parent.insert(a, c, "br" === c.name);
                break;
              }
          if ((e._selectionOverrides.showBlockCaretContainer(r), b.invalid)) {
            for (
              e.selection.setContent(p),
                r = s.getNode(),
                o = e.getBody(),
                9 === r.nodeType ? (r = c = o) : (c = r);
              c !== o;

            )
              (r = c), (c = c.parentNode);
            (t = r === o ? o.innerHTML : l.getOuterHTML(r)),
              (t = m.serialize(
                f.parse(
                  t.replace(
                    /<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,
                    function () {
                      return m.serialize(C);
                    }
                  )
                )
              )),
              r === o ? l.setHTML(o, t) : l.setOuterHTML(r, t);
          } else
            !(function (e, t, n) {
              if ("all" === n.getAttribute("data-mce-bogus"))
                n.parentNode.insertBefore(e.dom.createFragment(t), n);
              else {
                var r = n.firstChild,
                  o = n.lastChild;
                !r || (r === o && "BR" === r.nodeName)
                  ? e.dom.setHTML(n, t)
                  : e.selection.setContent(t);
              }
            })(e, (t = m.serialize(C)), r);
          !(function (e, t) {
            var n = e.schema.getTextInlineElements(),
              r = e.dom;
            if (t) {
              var o = e.getBody(),
                i = $m(r);
              At.each(r.select("*[data-mce-fragment]"), function (e) {
                if (v(n[e.nodeName.toLowerCase()]) && Qm(r, e))
                  for (
                    var t = e.parentNode;
                    v(t) && t !== o && !Zm(r, e, t);
                    t = t.parentNode
                  )
                    if (i.compare(t, e)) {
                      r.remove(e, !0);
                      break;
                    }
              });
            }
          })(e, d),
            (function (e, t) {
              var n,
                r,
                o = e.dom,
                i = e.selection;
              if (t) {
                i.scrollIntoView(t);
                var a = (function (t) {
                  for (var n = e.getBody(); t && t !== n; t = t.parentNode)
                    if ("false" === o.getContentEditable(t)) return t;
                  return null;
                })(t);
                if (a) return o.remove(t), void i.select(a);
                var u = o.createRng(),
                  c = t.previousSibling;
                c && 3 === c.nodeType
                  ? (u.setStart(c, c.nodeValue.length),
                    _t.ie ||
                      ((r = t.nextSibling) &&
                        3 === r.nodeType &&
                        (c.appendData(r.data), r.parentNode.removeChild(r))))
                  : (u.setStartBefore(t), u.setEndBefore(t));
                var s = o.getParent(t, o.isBlock);
                o.remove(t),
                  s &&
                    o.isEmpty(s) &&
                    (e.$(s).empty(),
                    u.setStart(s, 0),
                    u.setEnd(s, 0),
                    Kg(s) ||
                    (function (e) {
                      return !!e.getAttribute("data-mce-fragment");
                    })(s) ||
                    !(n = (function (t) {
                      var n = Rc.fromRangeStart(t);
                      if ((n = Al(e.getBody()).next(n))) return n.toRange();
                    })(u))
                      ? o.add(s, o.create("br", { "data-mce-bogus": "1" }))
                      : ((u = n), o.remove(s))),
                  i.setRng(u);
              }
            })(e, l.get("mce_marker")),
            (y = e.getBody()),
            At.each(y.getElementsByTagName("*"), function (e) {
              e.removeAttribute("data-mce-fragment");
            }),
            (function (e, t) {
              M.from(e.getParent(t, "td,th")).map(Tt.fromDom).each(vp);
            })(l, s.getStart()),
            e.fire("SetContent", i),
            e.addVisual();
        }
      },
      Gg = function (e, t) {
        t(e), e.firstChild && Gg(e.firstChild, t), e.next && Gg(e.next, t);
      },
      Jg = function (e, t, n) {
        var r = (function (e, t, n) {
          var r = {},
            o = {},
            i = [];
          for (var a in (n.firstChild &&
            Gg(n.firstChild, function (n) {
              $(e, function (e) {
                e.name === n.name &&
                  (r[e.name]
                    ? r[e.name].nodes.push(n)
                    : (r[e.name] = { filter: e, nodes: [n] }));
              }),
                $(t, function (e) {
                  "string" == typeof n.attr(e.name) &&
                    (o[e.name]
                      ? o[e.name].nodes.push(n)
                      : (o[e.name] = { filter: e, nodes: [n] }));
                });
            }),
          r))
            r.hasOwnProperty(a) && i.push(r[a]);
          for (var u in o) o.hasOwnProperty(u) && i.push(o[u]);
          return i;
        })(e, t, n);
        $(r, function (e) {
          $(e.filter.callbacks, function (t) {
            t(e.nodes, e.filter.name, {});
          });
        });
      },
      Qg = function (e) {
        return e instanceof Pm;
      },
      Zg = function (e, t) {
        e.dom.setHTML(e.getBody(), t),
          (function (e) {
            wm(e) &&
              Ul(e.getBody()).each(function (t) {
                var n = t.getNode(),
                  r = Mn(n) ? Ul(n).getOr(t) : t;
                e.selection.setRng(r.toRange());
              });
          })(e);
      },
      eh = function (e, t, n) {
        return (
          (n.format = n.format ? n.format : "html"),
          (n.set = !0),
          (n.content = Qg(t) ? "" : t),
          n.no_events || e.fire("BeforeSetContent", n),
          Qg(t) || (t = n.content),
          M.from(e.getBody()).fold(x(t), function (r) {
            return Qg(t)
              ? (function (e, t, n, r) {
                  Jg(
                    e.parser.getNodeFilters(),
                    e.parser.getAttributeFilters(),
                    n
                  );
                  var o = Xm({ validate: e.validate }, e.schema).serialize(n);
                  return (
                    (r.content = wo(Tt.fromDom(t)) ? o : At.trim(o)),
                    Zg(e, r.content),
                    r.no_events || e.fire("SetContent", r),
                    n
                  );
                })(e, r, t, n)
              : (function (e, t, n, r) {
                  var o, i;
                  return (
                    0 === n.length || /^\s+$/.test(n)
                      ? ((i = '<br data-mce-bogus="1">'),
                        "TABLE" === t.nodeName
                          ? (n = "<tr><td>" + i + "</td></tr>")
                          : /^(UL|OL)$/.test(t.nodeName) &&
                            (n = "<li>" + i + "</li>"),
                        (o = rs(e)) &&
                        e.schema.isValidChild(
                          t.nodeName.toLowerCase(),
                          o.toLowerCase()
                        )
                          ? ((n = i), (n = e.dom.createHTML(o, os(e), n)))
                          : n || (n = '<br data-mce-bogus="1">'),
                        Zg(e, n),
                        e.fire("SetContent", r))
                      : ("raw" !== r.format &&
                          (n = Xm({ validate: e.validate }, e.schema).serialize(
                            e.parser.parse(n, { isRootContent: !0, insert: !0 })
                          )),
                        (r.content = wo(Tt.fromDom(t)) ? n : At.trim(n)),
                        Zg(e, r.content),
                        r.no_events || e.fire("SetContent", r)),
                    r.content
                  );
                })(e, r, t, n);
          })
        );
      },
      th = function (e, t) {
        return (function (e, t) {
          var n = e.dom;
          return n.parentNode
            ? Gr(Tt.fromDom(n.parentNode), function (n) {
                return !Pt(e, n) && t(n);
              })
            : M.none();
        })(e, t).isSome();
      },
      nh = function (e) {
        return y(e) ? e : O;
      },
      rh = function (e, t, n) {
        var r = t(e),
          o = nh(n);
        return r.orThunk(function () {
          return o(e)
            ? M.none()
            : (function (e, t, n) {
                for (var r = e.dom, o = nh(n); r.parentNode; ) {
                  r = r.parentNode;
                  var i = Tt.fromDom(r),
                    a = t(i);
                  if (a.isSome()) return a;
                  if (o(i)) break;
                }
                return M.none();
              })(e, t, o);
        });
      },
      oh = ff,
      ih = function (e, t, n) {
        var r = e.formatter.get(n);
        if (r)
          for (var o = 0; o < r.length; o++)
            if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
        return !1;
      },
      ah = function (e, t, n, r) {
        var o = e.dom.getRoot();
        return (
          t !== o &&
          ((t = e.dom.getParent(t, function (t) {
            return !!ih(e, t, n) || t.parentNode === o || !!sh(e, t, n, r, !0);
          })),
          sh(e, t, n, r))
        );
      },
      uh = function (e, t, n) {
        return (
          !!oh(t, n.inline) ||
          !!oh(t, n.block) ||
          (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0)
        );
      },
      ch = function (e, t, n, r, o, i) {
        var a,
          u,
          c,
          s = n[r];
        if (n.onmatch) return n.onmatch(t, n, r);
        if (s)
          if (void 0 === s.length) {
            for (a in s)
              if (s.hasOwnProperty(a)) {
                if (
                  ((u = "attributes" === r ? e.getAttrib(t, a) : mf(e, t, a)),
                  o && !u && !n.exact)
                )
                  return;
                if ((!o || n.exact) && !oh(u, df(e, lf(s[a], i), a))) return;
              }
          } else
            for (c = 0; c < s.length; c++)
              if ("attributes" === r ? e.getAttrib(t, s[c]) : mf(e, t, s[c]))
                return n;
        return n;
      },
      sh = function (e, t, n, r, o) {
        var i,
          a,
          u,
          c,
          s = e.formatter.get(n),
          l = e.dom;
        if (s && t)
          for (a = 0; a < s.length; a++)
            if (
              ((i = s[a]),
              uh(e.dom, t, i) &&
                ch(l, t, i, "attributes", o, r) &&
                ch(l, t, i, "styles", o, r))
            ) {
              if ((c = i.classes))
                for (u = 0; u < c.length; u++)
                  if (!e.dom.hasClass(t, lf(c[u], r))) return;
              return i;
            }
      },
      lh = function (e, t, n, r) {
        if (r) return ah(e, r, t, n);
        if (((r = e.selection.getNode()), ah(e, r, t, n))) return !0;
        var o = e.selection.getStart();
        return !(o === r || !ah(e, o, t, n));
      },
      fh = function (e, t) {
        var n = function (t) {
          return Pt(t, Tt.fromDom(e.getBody()));
        };
        return M.from(e.selection.getStart(!0))
          .bind(function (r) {
            return rh(
              Tt.fromDom(r),
              function (n) {
                return (function (e, t) {
                  for (var n = 0; n < e.length; n++) {
                    var r = t(e[n], n);
                    if (r.isSome()) return r;
                  }
                  return M.none();
                })(t, function (t) {
                  return (function (t, n) {
                    return sh(e, t.dom, n) ? M.some(n) : M.none();
                  })(n, t);
                });
              },
              n
            );
          })
          .getOrNull();
      },
      dh = function (e, t, n) {
        return Y(
          n,
          function (n, r) {
            var o = (function (e, t) {
              return H(e.formatter.get(t), function (e) {
                var t = function (e) {
                  return e.length > 1 && "%" === e.charAt(0);
                };
                return H(["styles", "attributes"], function (n) {
                  return he(e, n).exists(function (e) {
                    var n = d(e) ? e : ge(e);
                    return H(n, t);
                  });
                });
              });
            })(e, r);
            return e.formatter.matchNode(t, r, {}, o) ? n.concat([r]) : n;
          },
          []
        );
      },
      mh = _o,
      ph = "_mce_caret",
      gh = function (e) {
        return (
          (function (e) {
            for (var t = []; e; ) {
              if (
                (3 === e.nodeType && e.nodeValue !== mh) ||
                e.childNodes.length > 1
              )
                return [];
              1 === e.nodeType && t.push(e), (e = e.firstChild);
            }
            return t;
          })(e).length > 0
        );
      },
      hh = function (e) {
        if (e) {
          var t = new so(e, e);
          for (e = t.current(); e; e = t.next()) if (jn(e)) return e;
        }
        return null;
      },
      vh = function (e) {
        var t = Tt.fromTag("span");
        return (
          Zn(t, {
            id: ph,
            "data-mce-bogus": "1",
            "data-mce-type": "format-caret",
          }),
          e && gn(t, Tt.fromText(mh)),
          t
        );
      },
      yh = function (e, t, n) {
        void 0 === n && (n = !0);
        var r = e.dom,
          o = e.selection;
        if (gh(t)) sg(e, !1, Tt.fromDom(t), n);
        else {
          var i = o.getRng(),
            a = r.getParent(t, r.isBlock),
            u = i.startContainer,
            c = i.startOffset,
            s = i.endContainer,
            l = i.endOffset,
            f = (function (e) {
              var t = hh(e);
              return t && t.nodeValue.charAt(0) === mh && t.deleteData(0, 1), t;
            })(t);
          r.remove(t, !0),
            u === f && c > 0 && i.setStart(f, c - 1),
            s === f && l > 0 && i.setEnd(f, l - 1),
            a && r.isEmpty(a) && hp(Tt.fromDom(a)),
            o.setRng(i);
        }
      },
      bh = function (e, t, n) {
        void 0 === n && (n = !0);
        var r = e.dom,
          o = e.selection;
        if (t) yh(e, t, n);
        else if (!(t = Hl(e.getBody(), o.getStart())))
          for (; (t = r.get(ph)); ) yh(e, t, !1);
      },
      Ch = function (e, t) {
        return e.appendChild(t), t;
      },
      wh = function (e, t) {
        var n = X(
          e,
          function (e, t) {
            return Ch(e, t.cloneNode(!1));
          },
          t
        );
        return Ch(n, n.ownerDocument.createTextNode(mh));
      },
      xh = function (e, t, n, r) {
        var o,
          i,
          a,
          u = e.dom,
          c = e.selection,
          s = [],
          l = c.getRng(),
          f = l.startContainer,
          d = l.startOffset;
        for (
          i = f,
            3 === f.nodeType &&
              (d !== f.nodeValue.length && (o = !0), (i = i.parentNode));
          i;

        ) {
          if (sh(e, i, t, n, r)) {
            a = i;
            break;
          }
          i.nextSibling && (o = !0), s.push(i), (i = i.parentNode);
        }
        if (a)
          if (o) {
            var m = c.getBookmark();
            l.collapse(!0);
            var p = Lf(e, l, e.formatter.get(t), !0);
            (p = xd(p)), e.formatter.remove(t, n, p, r), c.moveToBookmark(m);
          } else {
            var g = Hl(e.getBody(), a),
              h = vh(!1).dom;
            !(function (e, t, n) {
              var r = e.dom,
                o = r.getParent(n, S(uf, e));
              o && r.isEmpty(o)
                ? n.parentNode.replaceChild(t, n)
                : (gp(Tt.fromDom(n)),
                  r.isEmpty(n)
                    ? n.parentNode.replaceChild(t, n)
                    : r.insertAfter(t, n));
            })(e, h, null !== g ? g : a);
            var v = (function (e, t, n, r, o, i) {
                var a = e.formatter,
                  u = e.dom,
                  c = K(ae(a.get()), function (e) {
                    return e !== r && !Fe(e, "removeformat");
                  }),
                  s = dh(e, n, c);
                if (
                  K(s, function (t) {
                    return !hf(e, t, r);
                  }).length > 0
                ) {
                  var l = n.cloneNode(!1);
                  return (
                    u.add(t, l), a.remove(r, o, l, i), u.remove(l), M.some(l)
                  );
                }
                return M.none();
              })(e, h, a, t, n, r),
              y = wh(s.concat(v.toArray()), h);
            yh(e, g, !1),
              c.setCursorLocation(y, 1),
              u.isEmpty(a) && u.remove(a);
          }
      },
      _h = function (e) {
        e.on("mouseup keydown", function (t) {
          !(function (e, t) {
            var n = e.selection,
              r = e.getBody();
            bh(e, null, !1),
              (8 !== t && 46 !== t) ||
                !n.isCollapsed() ||
                n.getStart().innerHTML !== mh ||
                bh(e, Hl(r, n.getStart())),
              (37 !== t && 39 !== t) || bh(e, Hl(r, n.getStart()));
          })(e, t.keyCode);
        });
      },
      Sh = function (e, t) {
        return (
          e.schema.getTextInlineElements().hasOwnProperty(Ut(t)) &&
          !Vl(t.dom) &&
          !In(t.dom)
        );
      },
      Eh = {},
      Nh = xe,
      kh = Ce;
    !(function (e, t) {
      Eh[e] || (Eh[e] = []), Eh[e].push(t);
    })("pre", function (e) {
      var t,
        n = e.selection.getRng(),
        r = Bn(["pre"]);
      n.collapsed ||
        ((t = e.selection.getSelectedBlocks()),
        kh(
          Nh(Nh(t, r), function (e) {
            return r(e.previousSibling) && -1 !== _e(t, e.previousSibling);
          }),
          function (e) {
            var t, n;
            (t = e.previousSibling),
              lu((n = e)).remove(),
              lu(t).append("<br><br>").append(n.childNodes);
          }
        ));
    });
    var Ah,
      Rh,
      Th = At.each,
      Dh = function (e) {
        return On(e) && !Zl(e) && !Vl(e) && !In(e);
      },
      Oh = function (e, t) {
        var n;
        for (n = e; n; n = n[t]) {
          if (jn(n) && 0 !== n.nodeValue.length) return e;
          if (On(n) && !Zl(n)) return n;
        }
        return e;
      },
      Bh = function (e, t, n) {
        var r,
          o,
          i = $m(e);
        if (
          t &&
          n &&
          ((t = Oh(t, "previousSibling")),
          (n = Oh(n, "nextSibling")),
          i.compare(t, n))
        ) {
          for (r = t.nextSibling; r && r !== n; )
            (o = r), (r = r.nextSibling), t.appendChild(o);
          return (
            e.remove(n),
            At.each(At.grep(n.childNodes), function (e) {
              t.appendChild(e);
            }),
            t
          );
        }
        return n;
      },
      Ph = function (e, t, n, r) {
        if (r && !1 !== t.merge_siblings) {
          var o = Bh(e, af(r), r);
          Bh(e, o, af(o, !0));
        }
      },
      Lh = function (e, t, n) {
        Th(e.childNodes, function (e) {
          Dh(e) && (t(e) && n(e), e.hasChildNodes() && Lh(e, t, n));
        });
      },
      Ih = function (e, t) {
        return function (n) {
          return !(!n || !mf(e, n, t));
        };
      },
      Mh = function (e, t, n) {
        return function (r) {
          e.setStyle(r, t, n),
            "" === r.getAttribute("style") && r.removeAttribute("style"),
            (function (e, t) {
              "SPAN" === t.nodeName &&
                0 === e.getAttribs(t).length &&
                e.remove(t, !0);
            })(e, r);
        };
      },
      Fh = Sr([{ keep: [] }, { rename: ["name"] }, { removed: [] }]),
      Uh = /^(src|href|style)$/,
      jh = At.each,
      zh = ff,
      Vh = function (e, t, n) {
        return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
      },
      Hh = function (e, t, n) {
        var r, o;
        if (
          ((r = t[n ? "startContainer" : "endContainer"]),
          (o = t[n ? "startOffset" : "endOffset"]),
          On(r))
        ) {
          var i = r.childNodes.length - 1;
          !n && o && o--, (r = r.childNodes[o > i ? i : o]);
        }
        return (
          jn(r) &&
            n &&
            o >= r.nodeValue.length &&
            (r = new so(r, e.getBody()).next() || r),
          jn(r) && !n && 0 === o && (r = new so(r, e.getBody()).prev() || r),
          r
        );
      },
      qh = function (e, t) {
        var n = t ? "firstChild" : "lastChild";
        if (
          (function (e) {
            return /^(TR|TH|TD)$/.test(e.nodeName);
          })(e) &&
          e[n]
        ) {
          var r = e[n];
          return ("TR" === e.nodeName && r[n]) || r;
        }
        return e;
      },
      $h = function (e, t, n, r) {
        var o = e.create(n, r);
        return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
      },
      Wh = function (e, t, n, r, o) {
        var i = Tt.fromDom(t),
          a = Tt.fromDom(e.create(r, o)),
          u = n ? Zt(i) : Qt(i);
        return hn(a, u), n ? (dn(i, a), pn(a, i)) : (mn(i, a), gn(a, i)), a.dom;
      },
      Kh = function (e, t, n, r) {
        return !(t = af(t, n, r)) || "BR" === t.nodeName || e.isBlock(t);
      },
      Xh = function (e, t, n, r, o) {
        var i,
          a = e.dom;
        if (
          !(function (e, t, n) {
            return (
              !!zh(t, n.inline) ||
              !!zh(t, n.block) ||
              (n.selector ? On(t) && e.is(t, n.selector) : void 0)
            );
          })(a, r, t) &&
          !(function (e, t) {
            return t.links && "A" === e.nodeName;
          })(r, t)
        )
          return Fh.keep();
        var u = r;
        if (t.inline && "all" === t.remove && d(t.preserve_attributes)) {
          var c = K(a.getAttribs(u), function (e) {
            return V(t.preserve_attributes, e.name.toLowerCase());
          });
          if (
            (a.removeAllAttribs(u),
            $(c, function (e) {
              return a.setAttrib(u, e.name, e.value);
            }),
            c.length > 0)
          )
            return Fh.rename("span");
        }
        if ("all" !== t.remove) {
          jh(t.styles, function (e, r) {
            (e = df(a, lf(e, n), r + "")),
              b(r) && ((r = e), (o = null)),
              (t.remove_similar || !o || zh(mf(a, o, r), e)) &&
                a.setStyle(u, r, ""),
              (i = !0);
          }),
            i &&
              "" === a.getAttrib(u, "style") &&
              (u.removeAttribute("style"), u.removeAttribute("data-mce-style")),
            jh(t.attributes, function (e, r) {
              var i;
              if (
                ((e = lf(e, n)),
                b(r) && ((r = e), (o = null)),
                t.remove_similar || !o || zh(a.getAttrib(o, r), e))
              ) {
                if (
                  "class" === r &&
                  (e = a.getAttrib(u, r)) &&
                  ((i = ""),
                  $(e.split(/\s+/), function (e) {
                    /mce\-\w+/.test(e) && (i += (i ? " " : "") + e);
                  }),
                  i)
                )
                  return void a.setAttrib(u, r, i);
                if (
                  (Uh.test(r) && u.removeAttribute("data-mce-" + r),
                  "style" === r &&
                    Bn(["li"])(u) &&
                    "none" === a.getStyle(u, "list-style-type"))
                )
                  return (
                    u.removeAttribute(r),
                    void a.setStyle(u, "list-style-type", "none")
                  );
                "class" === r && u.removeAttribute("className"),
                  u.removeAttribute(r);
              }
            }),
            jh(t.classes, function (e) {
              (e = lf(e, n)), (o && !a.hasClass(o, e)) || a.removeClass(u, e);
            });
          for (var s = a.getAttribs(u), l = 0; l < s.length; l++) {
            var f = s[l].nodeName;
            if (0 !== f.indexOf("_") && 0 !== f.indexOf("data-"))
              return Fh.keep();
          }
        }
        return "none" !== t.remove
          ? ((function (e, t, n) {
              var r,
                o = t.parentNode,
                i = e.dom,
                a = rs(e);
              n.block &&
                (a
                  ? o === i.getRoot() &&
                    ((n.list_block && zh(t, n.list_block)) ||
                      $(ie(t.childNodes), function (t) {
                        cf(e, a, t.nodeName.toLowerCase())
                          ? r
                            ? r.appendChild(t)
                            : ((r = $h(i, t, a)),
                              i.setAttribs(
                                r,
                                e.settings.forced_root_block_attrs
                              ))
                          : (r = 0);
                      }))
                  : i.isBlock(t) &&
                    !i.isBlock(o) &&
                    (Kh(i, t, !1) ||
                      Kh(i, t.firstChild, !0, !0) ||
                      t.insertBefore(i.create("br"), t.firstChild),
                    Kh(i, t, !0) ||
                      Kh(i, t.lastChild, !1, !0) ||
                      t.appendChild(i.create("br")))),
                (n.selector && n.inline && !zh(n.inline, t)) || i.remove(t, !0);
            })(e, u, t),
            Fh.removed())
          : Fh.keep();
      },
      Yh = function (e, t, n, r, o) {
        return Xh(e, t, n, r, o).fold(
          O,
          function (t) {
            return e.dom.rename(r, t), !0;
          },
          B
        );
      },
      Gh = function (e, t, n, r) {
        return Xh(e, t, n, r, r).fold(
          x(r),
          function (t) {
            return e.dom.createFragment().appendChild(r), e.dom.rename(r, t);
          },
          x(null)
        );
      },
      Jh = function (e, t, n, r, o) {
        var i = e.formatter.get(t),
          a = i[0],
          u = !0,
          c = e.dom,
          s = e.selection,
          l = function (r) {
            var u = (function (e, t, n, r, o) {
              var i;
              return (
                $(gf(e.dom, t.parentNode).reverse(), function (t) {
                  if (!i && "_start" !== t.id && "_end" !== t.id) {
                    var a = sh(e, t, n, r, o);
                    a && !1 !== a.split && (i = t);
                  }
                }),
                i
              );
            })(e, r, t, n, o);
            return (function (e, t, n, r, o, i, a, u) {
              var c,
                s,
                l,
                f = e.dom;
              if (n) {
                for (
                  var d = n.parentNode, m = r.parentNode;
                  m && m !== d;
                  m = m.parentNode
                ) {
                  c = f.clone(m, !1);
                  for (
                    var p = 0;
                    p < t.length && null !== (c = Gh(e, t[p], u, c));
                    p++
                  );
                  c && (s && c.appendChild(s), l || (l = c), (s = c));
                }
                !i || (a.mixed && f.isBlock(n)) || (r = f.split(n, r)),
                  s &&
                    (o.parentNode.insertBefore(s, o),
                    l.appendChild(o),
                    a.inline && Ph(f, a, 0, s));
              }
              return r;
            })(e, i, u, r, r, !0, a, n);
          },
          f = function (t) {
            var r,
              o,
              s = t.parentNode;
            jn(t) && Cf(c, s) && Yh(e, a, n, s, s),
              On(t) &&
                c.getContentEditable(t) &&
                ((r = u), (u = "true" === c.getContentEditable(t)), (o = !0));
            var l = ie(t.childNodes);
            if (u && !o)
              for (var d = 0; d < i.length && !Yh(e, i[d], n, t, t); d++);
            if (a.deep && l.length) {
              for (d = 0; d < l.length; d++) f(l[d]);
              o && (u = r);
            }
          },
          d = function (e) {
            var t = c.get(e ? "_start" : "_end"),
              n = t[e ? "firstChild" : "lastChild"];
            return (
              (function (e) {
                return Zl(e) && On(e) && ("_start" === e.id || "_end" === e.id);
              })(n) && (n = n[e ? "firstChild" : "lastChild"]),
              jn(n) &&
                0 === n.data.length &&
                (n = e
                  ? t.previousSibling || t.nextSibling
                  : t.nextSibling || t.previousSibling),
              c.remove(t, !0),
              n
            );
          },
          m = function (t) {
            var n,
              r,
              o = Lf(e, t, i, t.collapsed);
            if (a.split) {
              if (((o = xd(o)), (n = Hh(e, o, !0)) !== (r = Hh(e, o)))) {
                if (((n = qh(n, !0)), (r = qh(r, !1)), Vh(c, n, r))) {
                  var u = M.from(n.firstChild).getOr(n);
                  return (
                    l(
                      Wh(c, u, !0, "span", {
                        id: "_start",
                        "data-mce-type": "bookmark",
                      })
                    ),
                    void d(!0)
                  );
                }
                if (Vh(c, r, n))
                  return (
                    (u = M.from(r.lastChild).getOr(r)),
                    l(
                      Wh(c, u, !1, "span", {
                        id: "_end",
                        "data-mce-type": "bookmark",
                      })
                    ),
                    void d(!1)
                  );
                (n = $h(c, n, "span", {
                  id: "_start",
                  "data-mce-type": "bookmark",
                })),
                  (r = $h(c, r, "span", {
                    id: "_end",
                    "data-mce-type": "bookmark",
                  }));
                var s = c.createRng();
                s.setStartAfter(n),
                  s.setEndBefore(r),
                  Mf(c, s, function (e) {
                    $(e, function (e) {
                      Zl(e) || Zl(e.parentNode) || l(e);
                    });
                  }),
                  l(n),
                  l(r),
                  (n = d(!0)),
                  (r = d());
              } else n = r = l(n);
              (o.startContainer = n.parentNode ? n.parentNode : n),
                (o.startOffset = c.nodeIndex(n)),
                (o.endContainer = r.parentNode ? r.parentNode : r),
                (o.endOffset = c.nodeIndex(r) + 1);
            }
            Mf(c, o, function (t) {
              $(t, function (t) {
                f(t),
                  $(["underline", "line-through", "overline"], function (n) {
                    On(t) &&
                      e.dom.getStyle(t, "text-decoration") === n &&
                      t.parentNode &&
                      pf(c, t.parentNode) === n &&
                      Yh(
                        e,
                        {
                          deep: !1,
                          exact: !0,
                          inline: "span",
                          styles: { textDecoration: n },
                        },
                        null,
                        t
                      );
                  });
              });
            });
          };
        if (r)
          if (rf(r)) {
            var p = c.createRng();
            p.setStartBefore(r), p.setEndAfter(r), m(p);
          } else m(r);
        else if ("false" !== c.getContentEditable(s.getNode()))
          s.isCollapsed() && a.inline && !zf(e).length
            ? xh(e, t, n, o)
            : (Xf(s, !0, function () {
                Kf(e, m);
              }),
              a.inline && lh(e, t, n, s.getStart()) && of(c, s, s.getRng()),
              e.nodeChanged());
        else {
          r = s.getNode();
          for (
            var g = 0;
            g < i.length && (!i[g].ceFalseOverride || !Yh(e, i[g], n, r, r));
            g++
          );
        }
      },
      Qh = At.each,
      Zh = function (e, t, n, r) {
        Qh(t, function (t) {
          Qh(e.dom.select(t.inline, r), function (r) {
            Dh(r) && Yh(e, t, n, r, t.exact ? r : null);
          }),
            (function (e, t, n) {
              if (t.clear_child_styles) {
                var r = t.links ? "*:not(a)" : "*";
                Th(e.select(r, n), function (n) {
                  Dh(n) &&
                    Th(t.styles, function (t, r) {
                      e.setStyle(n, r, "");
                    });
                });
              }
            })(e.dom, t, r);
        });
      },
      ev = At.each,
      tv = function (e, t) {
        return ye(e, t);
      },
      nv = function (e, t, n, r) {
        var o = e.formatter.get(t),
          i = o[0],
          a = !r && e.selection.isCollapsed(),
          u = e.dom,
          c = e.selection,
          s = function (e, t) {
            if (((t = t || i), e)) {
              if (
                (t.onformat && t.onformat(e, t, n, r),
                ev(t.styles, function (t, r) {
                  u.setStyle(e, r, lf(t, n));
                }),
                t.styles)
              ) {
                var o = u.getAttrib(e, "style");
                o && u.setAttrib(e, "data-mce-style", o);
              }
              ev(t.attributes, function (t, r) {
                u.setAttrib(e, r, lf(t, n));
              }),
                ev(t.classes, function (t) {
                  (t = lf(t, n)), u.hasClass(e, t) || u.addClass(e, t);
                });
            }
          },
          l = function (e, t) {
            var n = !1;
            return (
              !!yf(i) &&
              (ev(e, function (e) {
                if (!("collapsed" in e) || e.collapsed === a)
                  return u.is(t, e.selector) && !Vl(t)
                    ? (s(t, e), (n = !0), !1)
                    : void 0;
              }),
              n)
            );
          },
          f = function (r, a, u, c) {
            var f = [],
              d = !0,
              m = i.inline || i.block,
              p = r.create(m);
            s(p),
              Mf(r, a, function (a) {
                var u,
                  g = function (a) {
                    var h = !1,
                      v = d,
                      y = a.nodeName.toLowerCase(),
                      b = a.parentNode.nodeName.toLowerCase();
                    if (
                      (On(a) &&
                        r.getContentEditable(a) &&
                        ((v = d),
                        (d = "true" === r.getContentEditable(a)),
                        (h = !0)),
                      qn(a) &&
                        !(function (e, t, n, r) {
                          if (
                            (function (e) {
                              return e.getParam(
                                "format_empty_lines",
                                !1,
                                "boolean"
                              );
                            })(e) &&
                            bf(t)
                          ) {
                            var o = ke(
                                ke({}, e.schema.getTextBlockElements()),
                                {
                                  td: {},
                                  th: {},
                                  li: {},
                                  dt: {},
                                  dd: {},
                                  figcaption: {},
                                  caption: {},
                                  details: {},
                                  summary: {},
                                }
                              ),
                              i = th(Tt.fromDom(n), function (e) {
                                return Vl(e.dom);
                              });
                            return (
                              ye(o, r) && ni(Tt.fromDom(n.parentNode), !1) && !i
                            );
                          }
                          return !1;
                        })(e, i, a, b))
                    )
                      return (u = null), void (vf(i) && r.remove(a));
                    if (i.wrapper && sh(e, a, t, n)) u = null;
                    else {
                      if (
                        d &&
                        !h &&
                        vf(i) &&
                        !i.wrapper &&
                        uf(e, y) &&
                        cf(e, b, m)
                      ) {
                        var C = r.rename(a, m);
                        return s(C), f.push(C), void (u = null);
                      }
                      if (yf(i)) {
                        var w = l(o, a);
                        if (
                          (jn(a) && Cf(r, a.parentNode) && l(o, a.parentNode),
                          !tv(i, "inline") || w)
                        )
                          return void (u = null);
                      }
                      !d ||
                      h ||
                      !cf(e, m, y) ||
                      !cf(e, b, m) ||
                      (!c &&
                        3 === a.nodeType &&
                        1 === a.nodeValue.length &&
                        65279 === a.nodeValue.charCodeAt(0)) ||
                      Vl(a) ||
                      (tv(i, "inline") && r.isBlock(a))
                        ? ((u = null),
                          ev(At.grep(a.childNodes), g),
                          h && (d = v),
                          (u = null))
                        : (u ||
                            ((u = r.clone(p, !1)),
                            a.parentNode.insertBefore(u, a),
                            f.push(u)),
                          u.appendChild(a));
                    }
                  };
                ev(a, g);
              }),
              !0 === i.links &&
                ev(f, function (e) {
                  var t = function (e) {
                    "A" === e.nodeName && s(e, i), ev(At.grep(e.childNodes), t);
                  };
                  t(e);
                }),
              ev(f, function (a) {
                var u,
                  c = function (e) {
                    var t = !1;
                    return (
                      ev(e.childNodes, function (e) {
                        if (
                          (function (e) {
                            return (
                              e &&
                              1 === e.nodeType &&
                              !Zl(e) &&
                              !Vl(e) &&
                              !In(e)
                            );
                          })(e)
                        )
                          return (t = e), !1;
                      }),
                      t
                    );
                  },
                  l =
                    ((u = 0),
                    ev(a.childNodes, function (e) {
                      (function (e) {
                        return v(e) && jn(e) && 0 === e.length;
                      })(e) ||
                        Zl(e) ||
                        u++;
                    }),
                    u);
                (!(f.length > 1) && r.isBlock(a)) || 0 !== l
                  ? (bf(i) || i.wrapper) &&
                    (i.exact ||
                      1 !== l ||
                      (a = (function (e) {
                        var t,
                          n = c(e);
                        return (
                          n &&
                            !Zl(n) &&
                            uh(r, n, i) &&
                            ((t = r.clone(n, !1)),
                            s(t),
                            r.replace(t, e, !0),
                            r.remove(n, !0)),
                          t || e
                        );
                      })(a)),
                    Zh(e, o, n, a),
                    (function (e, t, n, r, o) {
                      (sh(e, o.parentNode, n, r) && Yh(e, t, r, o)) ||
                        (t.merge_with_parents &&
                          e.dom.getParent(o.parentNode, function (i) {
                            if (sh(e, i, n, r)) return Yh(e, t, r, o), !0;
                          }));
                    })(e, i, t, n, a),
                    (function (e, t, n, r) {
                      t.styles &&
                        t.styles.backgroundColor &&
                        Lh(
                          r,
                          Ih(e, "fontSize"),
                          Mh(
                            e,
                            "backgroundColor",
                            lf(t.styles.backgroundColor, n)
                          )
                        );
                    })(r, i, n, a),
                    (function (e, t, n, r) {
                      var o = function (t) {
                        if (
                          1 === t.nodeType &&
                          t.parentNode &&
                          1 === t.parentNode.nodeType
                        ) {
                          var n = pf(e, t.parentNode);
                          e.getStyle(t, "color") && n
                            ? e.setStyle(t, "text-decoration", n)
                            : e.getStyle(t, "text-decoration") === n &&
                              e.setStyle(t, "text-decoration", null);
                        }
                      };
                      t.styles &&
                        (t.styles.color || t.styles.textDecoration) &&
                        (At.walk(r, o, "childNodes"), o(r));
                    })(r, i, 0, a),
                    (function (e, t, n, r) {
                      ("sub" !== t.inline && "sup" !== t.inline) ||
                        (Lh(r, Ih(e, "fontSize"), Mh(e, "fontSize", "")),
                        e.remove(
                          e.select("sup" === t.inline ? "sub" : "sup", r),
                          !0
                        ));
                    })(r, i, 0, a),
                    Ph(r, i, 0, a))
                  : r.remove(a, !0);
              });
          };
        if ("false" !== u.getContentEditable(c.getNode())) {
          if (i) {
            if (r)
              if (rf(r)) {
                if (!l(o, r)) {
                  var d = u.createRng();
                  d.setStartBefore(r),
                    d.setEndAfter(r),
                    f(u, Lf(e, d, o), 0, !0);
                }
              } else f(u, r, 0, !0);
            else if (a && bf(i) && !zf(e).length)
              !(function (e, t, n) {
                var r,
                  o,
                  i = e.selection,
                  a = i.getRng(),
                  u = a.startOffset,
                  c = a.startContainer.nodeValue;
                (r = Hl(e.getBody(), i.getStart())) && (o = hh(r));
                var s,
                  l,
                  f = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                if (
                  c &&
                  u > 0 &&
                  u < c.length &&
                  f.test(c.charAt(u)) &&
                  f.test(c.charAt(u - 1))
                ) {
                  var d = i.getBookmark();
                  a.collapse(!0);
                  var m = Lf(e, a, e.formatter.get(t));
                  (m = xd(m)), e.formatter.apply(t, n, m), i.moveToBookmark(d);
                } else
                  (r && o.nodeValue === mh) ||
                    ((s = e.getDoc()),
                    (l = vh(!0).dom),
                    (o = (r = s.importNode(l, !0)).firstChild),
                    a.insertNode(r),
                    (u = 1)),
                    e.formatter.apply(t, n, r),
                    i.setCursorLocation(o, u);
              })(e, t, n);
            else {
              var m = c.getNode(),
                p = o[0];
              e.settings.forced_root_block ||
                !p.defaultBlock ||
                u.getParent(m, u.isBlock) ||
                nv(e, p.defaultBlock),
                c.setRng(Fg(c.getRng())),
                Xf(c, !0, function (t) {
                  Kf(e, function (t, n) {
                    var r = n ? t : Lf(e, t, o);
                    f(u, r);
                  });
                }),
                of(u, c, c.getRng()),
                e.nodeChanged();
            }
            !(function (e, t) {
              kh(Eh[e], function (e) {
                e(t);
              });
            })(t, e);
          }
        } else {
          r = c.getNode();
          for (var g = 0, h = o.length; g < h; g++) {
            var y = o[g];
            if (y.ceFalseOverride && yf(y) && u.is(r, y.selector))
              return void s(r, y);
          }
        }
      },
      rv = function (e, t, n, r) {
        var o = ae(n.get()),
          i = {},
          a = {},
          u = K(gf(e.dom, t), function (e) {
            return 1 === e.nodeType && !e.getAttribute("data-mce-bogus");
          });
        ce(r, function (t, n) {
          At.each(u, function (r) {
            return e.formatter.matchNode(r, n, {}, t.similar)
              ? (-1 === o.indexOf(n) &&
                  ($(t.callbacks, function (e) {
                    e(!0, { node: r, format: n, parents: u });
                  }),
                  (i[n] = t.callbacks)),
                (a[n] = t.callbacks),
                !1)
              : !ih(e, r, n) && void 0;
          });
        });
        var c = ov(n.get(), a, t, u);
        n.set(ke(ke({}, i), c));
      },
      ov = function (e, t, n, r) {
        return me(e, function (e, o) {
          return (
            !!ve(t, o) ||
            ($(e, function (e) {
              e(!1, { node: n, format: o, parents: r });
            }),
            !1)
          );
        }).t;
      },
      iv = function (e, t, n, r, o) {
        return (
          null === t.get() &&
            (function (e, t) {
              var n = xu({});
              e.set({}),
                t.on("NodeChange", function (r) {
                  rv(t, r.element, n, e.get());
                });
            })(t, e),
          (function (e, t, n, r) {
            var o = e.get();
            $(t.split(","), function (e) {
              o[e] || (o[e] = { similar: r, callbacks: [] }),
                o[e].callbacks.push(n);
            }),
              e.set(o);
          })(t, n, r, o),
          {
            unbind: function () {
              return (function (e, t, n) {
                var r = e.get();
                $(t.split(","), function (e) {
                  (r[e].callbacks = K(r[e].callbacks, function (e) {
                    return e !== n;
                  })),
                    0 === r[e].callbacks.length && delete r[e];
                }),
                  e.set(r);
              })(t, n, r);
            },
          }
        );
      },
      av = function (e, t) {
        var n = (t || document).createDocumentFragment();
        return (
          $(e, function (e) {
            n.appendChild(e.dom);
          }),
          Tt.fromDom(n)
        );
      },
      uv = function (e, t, n) {
        return { element: e, width: t, rows: n };
      },
      cv = function (e, t) {
        return { element: e, cells: t };
      },
      sv = function (e, t) {
        return { x: e, y: t };
      },
      lv = function (e, t) {
        var n = parseInt(er(e, t), 10);
        return isNaN(n) ? 1 : n;
      },
      fv = function (e, t, n) {
        var r = e.rows;
        return !!(r[n] ? r[n].cells : [])[t];
      },
      dv = function (e) {
        return Y(
          e,
          function (e, t) {
            return t.cells.length > e ? t.cells.length : e;
          },
          0
        );
      },
      mv = function (e, t) {
        for (var n = e.rows, r = 0; r < n.length; r++)
          for (var o = n[r].cells, i = 0; i < o.length; i++)
            if (Pt(o[i], t)) return M.some(sv(i, r));
        return M.none();
      },
      pv = function (e, t, n, r, o) {
        for (var i = [], a = e.rows, u = n; u <= o; u++) {
          var c = a[u].cells,
            s = t < r ? c.slice(t, r + 1) : c.slice(r, t + 1);
          i.push(cv(a[u].element, s));
        }
        return i;
      },
      gv = function (e) {
        var t = uv(Gu(e), 0, []);
        return (
          $(Fu(e, "tr"), function (e, n) {
            $(Fu(e, "td,th"), function (r, o) {
              !(function (e, t, n, r, o) {
                for (
                  var i = lv(o, "rowspan"),
                    a = lv(o, "colspan"),
                    u = e.rows,
                    c = n;
                  c < n + i;
                  c++
                ) {
                  u[c] || (u[c] = cv(Ju(r), []));
                  for (var s = t; s < t + a; s++)
                    u[c].cells[s] = c === n && s === t ? o : Gu(o);
                }
              })(
                t,
                (function (e, t, n) {
                  for (; fv(e, t, n); ) t++;
                  return t;
                })(t, o, n),
                n,
                e,
                r
              );
            });
          }),
          uv(t.element, dv(t.rows), t.rows)
        );
      },
      hv = function (e) {
        return (function (e, t) {
          var n = Gu(e.element),
            r = Tt.fromTag("tbody");
          return hn(r, t), gn(n, r), n;
        })(
          e,
          (function (e) {
            return q(e.rows, function (e) {
              var t = q(e.cells, function (e) {
                  var t = Ju(e);
                  return nr(t, "colspan"), nr(t, "rowspan"), t;
                }),
                n = Gu(e.element);
              return hn(n, t), n;
            });
          })(e)
        );
      },
      vv = function (e, t, n) {
        return mv(e, t).bind(function (t) {
          return mv(e, n).map(function (n) {
            return (function (e, t, n) {
              var r = t.x,
                o = t.y,
                i = n.x,
                a = n.y,
                u = o < a ? pv(e, r, o, i, a) : pv(e, r, a, i, o);
              return uv(e.element, dv(u), u);
            })(e, t, n);
          });
        });
      },
      yv = function (e, t) {
        return G(e, function (e) {
          return "li" === Ut(e) && qf(e, t);
        }).fold(x([]), function (t) {
          return (function (e) {
            return G(e, function (e) {
              return "ul" === Ut(e) || "ol" === Ut(e);
            });
          })(e)
            .map(function (e) {
              var t = Tt.fromTag(Ut(e)),
                n = pe(ur(e), function (e, t) {
                  return Ue(t, "list-style");
                });
              return rr(t, n), [Tt.fromTag("li"), t];
            })
            .getOr([]);
        });
      },
      bv = function (e, t) {
        var n = Tt.fromDom(t.commonAncestorContainer),
          r = Cp(n, e),
          o = K(r, function (e) {
            return po(e) || fo(e);
          }),
          i = yv(r, t),
          a = o.concat(
            i.length
              ? i
              : (function (e) {
                  return yo(e)
                    ? Yt(e)
                        .filter(vo)
                        .fold(x([]), function (t) {
                          return [e, t];
                        })
                    : vo(e)
                    ? [e]
                    : [];
                })(n)
          );
        return q(a, Gu);
      },
      Cv = function () {
        return av([]);
      },
      wv = function (e, t) {
        return (
          (n = Tt.fromDom(t.cloneContents())),
          (r = bv(e, t)),
          (o = Y(
            r,
            function (e, t) {
              return gn(t, e), t;
            },
            n
          )),
          r.length > 0 ? av([o]) : o
        );
        var n, r, o;
      },
      xv = function (e, t) {
        return ((n = e), (r = t[0]), Jr(r, "table", S(Pt, n)))
          .bind(function (e) {
            var n = t[0],
              r = t[t.length - 1],
              o = gv(e);
            return vv(o, n, r).map(function (e) {
              return av([hv(e)]);
            });
          })
          .getOrThunk(Cv);
        var n, r;
      },
      _v = function (e, t) {
        var n = jf(t, e);
        return n.length > 0
          ? xv(e, n)
          : (function (e, t) {
              return t.length > 0 && t[0].collapsed ? Cv() : wv(e, t[0]);
            })(e, t);
      },
      Sv = function (e, t) {
        return t >= 0 && t < e.length && tf(e.charAt(t));
      },
      Ev = function (e, t) {
        var n = Eo(e.innerText);
        return t
          ? (function (e) {
              return e.replace(/^[ \f\n\r\t\v]+/, "");
            })(n)
          : n;
      },
      Nv = function (e, t, n) {
        if (
          (void 0 === n && (n = {}),
          (n.get = !0),
          (n.format = t),
          (n.selection = !0),
          (n = e.fire("BeforeGetContent", n)).isDefaultPrevented())
        )
          return e.fire("GetContent", n), n.content;
        if ("text" === n.format)
          return (function (e) {
            return M.from(e.selection.getRng())
              .map(function (t) {
                var n = M.from(
                    e.dom.getParent(t.commonAncestorContainer, e.dom.isBlock)
                  ),
                  r = e.getBody(),
                  o = (function (e) {
                    return e
                      .map(function (e) {
                        return e.nodeName;
                      })
                      .getOr("div")
                      .toLowerCase();
                  })(n),
                  i = _t.browser.isIE() && "pre" !== o,
                  a = e.dom.add(
                    r,
                    o,
                    {
                      "data-mce-bogus": "all",
                      style: "overflow: hidden; opacity: 0;",
                    },
                    t.cloneContents()
                  ),
                  u = Ev(a, i),
                  c = Eo(a.textContent);
                if ((e.dom.remove(a), Sv(c, 0) || Sv(c, c.length - 1))) {
                  var s = n.getOr(r),
                    l = Ev(s, i),
                    f = l.indexOf(u);
                  return -1 === f
                    ? u
                    : (Sv(l, f - 1) ? " " : "") +
                        u +
                        (Sv(l, f + u.length) ? " " : "");
                }
                return u;
              })
              .getOr("");
          })(e);
        n.getInner = !0;
        var r = (function (e, t) {
          var n = e.selection.getRng(),
            r = e.dom.create("body"),
            o = e.selection.getSel(),
            i = Rm(e, Ff(o)),
            a = t.contextual
              ? _v(Tt.fromDom(e.getBody()), i).dom
              : n.cloneContents();
          return a && r.appendChild(a), e.selection.serializer.serialize(r, t);
        })(e, n);
        return "tree" === n.format
          ? r
          : ((n.content = e.selection.isCollapsed() ? "" : r),
            e.fire("GetContent", n),
            n.content);
      },
      kv = function (e) {
        return On(e)
          ? e.outerHTML
          : jn(e)
          ? Ci.encodeRaw(e.data, !1)
          : zn(e)
          ? "\x3c!--" + e.data + "--\x3e"
          : "";
      },
      Av = function (e, t, n) {
        var r = (function (e) {
          var t,
            n = document.createElement("div"),
            r = document.createDocumentFragment();
          for (e && (n.innerHTML = e); (t = n.firstChild); ) r.appendChild(t);
          return r;
        })(t);
        if (e.hasChildNodes() && n < e.childNodes.length) {
          var o = e.childNodes[n];
          o.parentNode.insertBefore(r, o);
        } else e.appendChild(r);
      },
      Rv = function (e, t) {
        var n,
          r,
          o,
          i,
          a,
          u,
          c,
          s,
          l,
          f = q(ie(t.childNodes), kv);
        return (
          (function (e, t) {
            var n = 0;
            $(e, function (e) {
              0 === e[0]
                ? n++
                : 1 === e[0]
                ? (Av(t, e[1], n), n++)
                : 2 === e[0] &&
                  (function (e, t) {
                    if (e.hasChildNodes() && t < e.childNodes.length) {
                      var n = e.childNodes[t];
                      n.parentNode.removeChild(n);
                    }
                  })(t, n);
            });
          })(
            ((r = e),
            (o = (n = f).length + r.length + 2),
            (i = new Array(o)),
            (a = new Array(o)),
            (u = function (e, t, o, i, a) {
              var c = s(e, t, o, i);
              if (
                null === c ||
                (c.start === t && c.diag === t - i) ||
                (c.end === e && c.diag === e - o)
              )
                for (var l = e, f = o; l < t || f < i; )
                  l < t && f < i && n[l] === r[f]
                    ? (a.push([0, n[l]]), ++l, ++f)
                    : t - e > i - o
                    ? (a.push([2, n[l]]), ++l)
                    : (a.push([1, r[f]]), ++f);
              else {
                u(e, c.start, o, c.start - c.diag, a);
                for (var d = c.start; d < c.end; ++d) a.push([0, n[d]]);
                u(c.end, t, c.end - c.diag, i, a);
              }
            }),
            (c = function (e, t, o, i) {
              for (var a = e; a - t < i && a < o && n[a] === r[a - t]; ) ++a;
              return (function (e, t, n) {
                return { start: e, end: t, diag: n };
              })(e, a, t);
            }),
            (s = function (e, t, o, u) {
              var s = t - e,
                l = u - o;
              if (0 === s || 0 === l) return null;
              var f,
                d,
                m,
                p,
                g,
                h = s - l,
                v = l + s,
                y = (v % 2 == 0 ? v : v + 1) / 2;
              for (i[1 + y] = e, a[1 + y] = t + 1, f = 0; f <= y; ++f) {
                for (d = -f; d <= f; d += 2) {
                  for (
                    m = d + y,
                      d === -f || (d !== f && i[m - 1] < i[m + 1])
                        ? (i[m] = i[m + 1])
                        : (i[m] = i[m - 1] + 1),
                      g = (p = i[m]) - e + o - d;
                    p < t && g < u && n[p] === r[g];

                  )
                    (i[m] = ++p), ++g;
                  if (
                    h % 2 != 0 &&
                    h - f <= d &&
                    d <= h + f &&
                    a[m - h] <= i[m]
                  )
                    return c(a[m - h], d + e - o, t, u);
                }
                for (d = h - f; d <= h + f; d += 2) {
                  for (
                    m = d + y - h,
                      d === h - f || (d !== h + f && a[m + 1] <= a[m - 1])
                        ? (a[m] = a[m + 1] - 1)
                        : (a[m] = a[m - 1]),
                      g = (p = a[m] - 1) - e + o - d;
                    p >= e && g >= o && n[p] === r[g];

                  )
                    (a[m] = p--), g--;
                  if (h % 2 == 0 && -f <= d && d <= f && a[m] <= i[m + h])
                    return c(a[m], d + e - o, t, u);
                }
              }
            }),
            (l = []),
            u(0, n.length, 0, r.length, l),
            l),
            t
          ),
          t
        );
      },
      Tv = xu(M.none()),
      Dv = function (e) {
        var t,
          n =
            ((t = e.getBody()),
            K(q(ie(t.childNodes), kv), function (e) {
              return e.length > 0;
            })),
          r = Q(n, function (t) {
            var n = zm(e.serializer, t);
            return n.length > 0 ? [n] : [];
          }),
          o = r.join("");
        return -1 !== o.indexOf("</iframe>")
          ? (function (e) {
              return {
                type: "fragmented",
                fragments: e,
                content: "",
                bookmark: null,
                beforeBookmark: null,
              };
            })(r)
          : (function (e) {
              return {
                type: "complete",
                fragments: null,
                content: e,
                bookmark: null,
                beforeBookmark: null,
              };
            })(o);
      },
      Ov = function (e, t, n) {
        "fragmented" === t.type
          ? Rv(t.fragments, e.getBody())
          : e.setContent(t.content, { format: "raw" }),
          e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark);
      },
      Bv = function (e) {
        return "fragmented" === e.type ? e.fragments.join("") : e.content;
      },
      Pv = function (e) {
        var t = Tt.fromTag(
          "body",
          Tv.get().getOrThunk(function () {
            var e = document.implementation.createHTMLDocument("undo");
            return Tv.set(M.some(e)), e;
          })
        );
        return Xu(t, Bv(e)), $(Fu(t, "*[data-mce-bogus]"), bn), t.dom.innerHTML;
      },
      Lv = function (e, t) {
        return (
          !(!e || !t) &&
          (!!(function (e, t) {
            return Bv(e) === Bv(t);
          })(e, t) ||
            (function (e, t) {
              return Pv(e) === Pv(t);
            })(e, t))
        );
      },
      Iv = function (e) {
        return 0 === e.get();
      },
      Mv = function (e, t, n) {
        Iv(n) && (e.typing = t);
      },
      Fv = function (e, t) {
        e.typing && (Mv(e, !1, t), e.add());
      },
      Uv = function (e) {
        return {
          undoManager: {
            beforeChange: function (t, n) {
              return (function (e, t, n) {
                Iv(t) && n.set(M.some(Zc(e.selection)));
              })(e, t, n);
            },
            addUndoLevel: function (t, n, r, o, i, a) {
              return (function (e, t, n, r, o, i, a) {
                var u = Dv(e);
                if (
                  ((i = i || {}),
                  (i = At.extend(i, u)),
                  !1 === Iv(r) || e.removed)
                )
                  return null;
                var c = t.data[n.get()];
                if (
                  e
                    .fire("BeforeAddUndo", {
                      level: i,
                      lastLevel: c,
                      originalEvent: a,
                    })
                    .isDefaultPrevented()
                )
                  return null;
                if (c && Lv(c, i)) return null;
                t.data[n.get()] &&
                  o.get().each(function (e) {
                    t.data[n.get()].beforeBookmark = e;
                  });
                var s = (function (e) {
                  return e.getParam("custom_undo_redo_levels", 0, "number");
                })(e);
                if (s && t.data.length > s) {
                  for (var l = 0; l < t.data.length - 1; l++)
                    t.data[l] = t.data[l + 1];
                  t.data.length--, n.set(t.data.length);
                }
                (i.bookmark = Zc(e.selection)),
                  n.get() < t.data.length - 1 && (t.data.length = n.get() + 1),
                  t.data.push(i),
                  n.set(t.data.length - 1);
                var f = { level: i, lastLevel: c, originalEvent: a };
                return (
                  n.get() > 0
                    ? (e.setDirty(!0),
                      e.fire("AddUndo", f),
                      e.fire("change", f))
                    : e.fire("AddUndo", f),
                  i
                );
              })(e, t, n, r, o, i, a);
            },
            undo: function (t, n, r) {
              return (function (e, t, n, r) {
                var o;
                return (
                  t.typing && (t.add(), (t.typing = !1), Mv(t, !1, n)),
                  r.get() > 0 &&
                    (r.set(r.get() - 1),
                    (o = t.data[r.get()]),
                    Ov(e, o, !0),
                    e.setDirty(!0),
                    e.fire("Undo", { level: o })),
                  o
                );
              })(e, t, n, r);
            },
            redo: function (t, n) {
              return (function (e, t, n) {
                var r;
                return (
                  t.get() < n.length - 1 &&
                    (t.set(t.get() + 1),
                    (r = n[t.get()]),
                    Ov(e, r, !1),
                    e.setDirty(!0),
                    e.fire("Redo", { level: r })),
                  r
                );
              })(e, t, n);
            },
            clear: function (t, n) {
              return (function (e, t, n) {
                (t.data = []), n.set(0), (t.typing = !1), e.fire("ClearUndos");
              })(e, t, n);
            },
            reset: function (e) {
              return (function (e) {
                e.clear(), e.add();
              })(e);
            },
            hasUndo: function (t, n) {
              return (function (e, t, n) {
                return (
                  n.get() > 0 ||
                  (t.typing && t.data[0] && !Lv(Dv(e), t.data[0]))
                );
              })(e, t, n);
            },
            hasRedo: function (e, t) {
              return (function (e, t) {
                return t.get() < e.data.length - 1 && !e.typing;
              })(e, t);
            },
            transact: function (e, t, n) {
              return (function (e, t, n) {
                return Fv(e, t), e.beforeChange(), e.ignore(n), e.add();
              })(e, t, n);
            },
            ignore: function (e, t) {
              return (function (e, t) {
                try {
                  e.set(e.get() + 1), t();
                } finally {
                  e.set(e.get() - 1);
                }
              })(e, t);
            },
            extra: function (t, n, r, o) {
              return (function (e, t, n, r, o) {
                if (t.transact(r)) {
                  var i = t.data[n.get()].bookmark,
                    a = t.data[n.get() - 1];
                  Ov(e, a, !0),
                    t.transact(o) && (t.data[n.get() - 1].beforeBookmark = i);
                }
              })(e, t, n, r, o);
            },
          },
          formatter: {
            match: function (t, n, r) {
              return lh(e, t, n, r);
            },
            matchAll: function (t, n) {
              return (function (e, t, n) {
                var r = [],
                  o = {},
                  i = e.selection.getStart();
                return (
                  e.dom.getParent(
                    i,
                    function (i) {
                      for (var a = 0; a < t.length; a++) {
                        var u = t[a];
                        !o[u] && sh(e, i, u, n) && ((o[u] = !0), r.push(u));
                      }
                    },
                    e.dom.getRoot()
                  ),
                  r
                );
              })(e, t, n);
            },
            matchNode: function (t, n, r, o) {
              return sh(e, t, n, r, o);
            },
            canApply: function (t) {
              return (function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  a,
                  u = e.formatter.get(t),
                  c = e.dom;
                if (u)
                  for (
                    n = e.selection.getStart(), r = gf(c, n), i = u.length - 1;
                    i >= 0;
                    i--
                  ) {
                    if (!(a = u[i].selector) || u[i].defaultBlock) return !0;
                    for (o = r.length - 1; o >= 0; o--)
                      if (c.is(r[o], a)) return !0;
                  }
                return !1;
              })(e, t);
            },
            closest: function (t) {
              return fh(e, t);
            },
            apply: function (t, n, r) {
              return nv(e, t, n, r);
            },
            remove: function (t, n, r, o) {
              return Jh(e, t, n, r, o);
            },
            toggle: function (t, n, r) {
              return (function (e, t, n, r) {
                var o = e.formatter.get(t);
                !lh(e, t, n, r) || ("toggle" in o[0] && !o[0].toggle)
                  ? nv(e, t, n, r)
                  : Jh(e, t, n, r);
              })(e, t, n, r);
            },
            formatChanged: function (t, n, r, o) {
              return iv(e, t, n, r, o);
            },
          },
          editor: {
            getContent: function (t, n) {
              return (function (e, t, n) {
                return M.from(e.getBody()).fold(
                  x("tree" === t.format ? new Pm("body", 11) : ""),
                  function (r) {
                    return Hm(e, t, n, r);
                  }
                );
              })(e, t, n);
            },
            setContent: function (t, n) {
              return eh(e, t, n);
            },
            insertContent: function (t, n) {
              return Yg(e, t, n);
            },
            addVisual: function (t) {
              return (function (e, t) {
                var n = e.dom,
                  r = v(t) ? t : e.getBody();
                g(e.hasVisual) &&
                  (e.hasVisual = (function (e) {
                    return e.getParam("visual", !0, "boolean");
                  })(e)),
                  $(n.select("table,a", r), function (t) {
                    switch (t.nodeName) {
                      case "TABLE":
                        var r = (function (e) {
                            return e.getParam(
                              "visual_table_class",
                              "mce-item-table",
                              "string"
                            );
                          })(e),
                          o = n.getAttrib(t, "border");
                        (o && "0" !== o) || !e.hasVisual
                          ? n.removeClass(t, r)
                          : n.addClass(t, r);
                        break;
                      case "A":
                        if (!n.getAttrib(t, "href")) {
                          var i = n.getAttrib(t, "name") || t.id,
                            a = (function (e) {
                              return e.getParam(
                                "visual_anchor_class",
                                "mce-item-anchor",
                                "string"
                              );
                            })(e);
                          i && e.hasVisual
                            ? n.addClass(t, a)
                            : n.removeClass(t, a);
                        }
                    }
                  }),
                  e.fire("VisualAid", { element: t, hasVisual: e.hasVisual });
              })(e, t);
            },
          },
          selection: {
            getContent: function (t, n) {
              return Nv(e, t, n);
            },
          },
          raw: {
            getModel: function () {
              return M.none();
            },
          },
        };
      },
      jv = function (e) {
        return ve(e.plugins, "rtc");
      },
      zv = function (e) {
        var t = e;
        return (function (e) {
          return he(e.plugins, "rtc").bind(function (e) {
            return M.from(e.setup);
          });
        })(e).fold(
          function () {
            return (t.rtcInstance = Uv(e)), M.none();
          },
          function (e) {
            return M.some(
              e().then(
                function (e) {
                  return (
                    (t.rtcInstance = (function (e) {
                      var t = function (e) {
                          return f(e) ? e : {};
                        },
                        n = R("Unimplemented feature for rtc"),
                        r = e.undoManager,
                        o = e.formatter,
                        i = e.editor,
                        a = e.selection,
                        u = e.raw;
                      return {
                        undoManager: {
                          beforeChange: C,
                          addUndoLevel: n,
                          undo: function () {
                            return r.undo();
                          },
                          redo: function () {
                            return r.redo();
                          },
                          clear: function () {
                            return r.clear();
                          },
                          reset: function () {
                            return r.reset();
                          },
                          hasUndo: function () {
                            return r.hasUndo();
                          },
                          hasRedo: function () {
                            return r.hasRedo();
                          },
                          transact: function (e, t, n) {
                            return r.transact(n);
                          },
                          ignore: function (e, t) {
                            return r.ignore(t);
                          },
                          extra: function (e, t, n, o) {
                            return r.extra(n, o);
                          },
                        },
                        formatter: {
                          match: function (e, n, r) {
                            return o.match(e, t(n));
                          },
                          matchAll: n,
                          matchNode: n,
                          canApply: function (e) {
                            return o.canApply(e);
                          },
                          closest: function (e) {
                            return o.closest(e);
                          },
                          apply: function (e, n, r) {
                            return o.apply(e, t(n));
                          },
                          remove: function (e, n, r, i) {
                            return o.remove(e, t(n));
                          },
                          toggle: function (e, n, r) {
                            return o.toggle(e, t(n));
                          },
                          formatChanged: function (e, t, n, r) {
                            return o.formatChanged(t, n, r);
                          },
                        },
                        editor: {
                          getContent: function (e, t) {
                            return i.getContent(e);
                          },
                          setContent: function (e, t) {
                            return i.setContent(e, t);
                          },
                          insertContent: function (e, t) {
                            return i.insertContent(e);
                          },
                          addVisual: C,
                        },
                        selection: {
                          getContent: function (e, t) {
                            return a.getContent(t);
                          },
                        },
                        raw: {
                          getModel: function () {
                            return M.some(u.getRawModel());
                          },
                        },
                      };
                    })(e)),
                    e.rtc.isRemote
                  );
                },
                function (e) {
                  var n, r;
                  return (
                    (t.rtcInstance =
                      ((n = x(null)),
                      (r = x("")),
                      {
                        undoManager: {
                          beforeChange: C,
                          addUndoLevel: n,
                          undo: n,
                          redo: n,
                          clear: C,
                          reset: C,
                          hasUndo: O,
                          hasRedo: O,
                          transact: n,
                          ignore: C,
                          extra: C,
                        },
                        formatter: {
                          match: O,
                          matchAll: x([]),
                          matchNode: O,
                          canApply: O,
                          closest: r,
                          apply: C,
                          remove: C,
                          toggle: C,
                          formatChanged: x({ unbind: C }),
                        },
                        editor: {
                          getContent: r,
                          setContent: r,
                          insertContent: C,
                          addVisual: C,
                        },
                        selection: { getContent: r },
                        raw: { getModel: x(M.none()) },
                      })),
                    eo.reject(e)
                  );
                }
              )
            );
          }
        );
      },
      Vv = function (e) {
        return e.rtcInstance ? e.rtcInstance : Uv(e);
      },
      Hv = function (e) {
        var t = e.rtcInstance;
        if (t) return t;
        throw new Error("Failed to get RTC instance not yet initialized.");
      },
      qv = function (e, t) {
        return (
          void 0 === t && (t = {}),
          (function (e, t, n) {
            return Hv(e).selection.getContent(t, n);
          })(e, t.format ? t.format : "html", t)
        );
      },
      $v = function (e) {
        return 0 === e.dom.length ? (yn(e), M.none()) : M.some(e);
      },
      Wv = function (e, t, n, r) {
        e.bind(function (e) {
          return (
            (r ? Jp : Gp)(e.dom, r ? e.dom.length : 0),
            t.filter(Ht).map(function (t) {
              return (function (e, t, n, r) {
                var o = e.dom,
                  i = t.dom,
                  a = r ? o.length : i.length;
                r
                  ? (Qp(o, i, !1, !r), n.setStart(i, a))
                  : (Qp(i, o, !1, !r), n.setEnd(i, a));
              })(e, t, n, r);
            })
          );
        }).orThunk(function () {
          return (function (e, t) {
            return e
              .filter(function (e) {
                return nd.isBookmarkNode(e.dom);
              })
              .bind(t ? Jt : Gt);
          })(t, r)
            .or(t)
            .filter(Ht)
            .map(function (e) {
              return (function (e, t) {
                Yt(e).each(function (n) {
                  var r = e.dom;
                  t && zp(n, Rc(r, 0))
                    ? Gp(r, 0)
                    : !t && Vp(n, Rc(r, r.length)) && Jp(r, r.length);
                });
              })(e, r);
            });
        });
      },
      Kv = function (e, t, n) {
        void 0 === n && (n = {});
        var r = (function (e, t) {
          return ke(ke({ format: "html" }, e), {
            set: !0,
            selection: !0,
            content: t,
          });
        })(n, t);
        if (
          r.no_events ||
          !(r = e.fire("BeforeSetContent", r)).isDefaultPrevented()
        ) {
          n.content = (function (e, t) {
            if ("raw" !== t.format) {
              var n = e.selection.getRng(),
                r = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
                o = r ? { context: r.nodeName.toLowerCase() } : {},
                i = e.parser.parse(
                  t.content,
                  ke(ke({ isRootContent: !0, forced_root_block: !1 }, o), t)
                );
              return Xm({ validate: e.validate }, e.schema).serialize(i);
            }
            return t.content;
          })(e, r);
          var o = e.selection.getRng();
          !(function (e, t) {
            var n = M.from(t.firstChild).map(Tt.fromDom),
              r = M.from(t.lastChild).map(Tt.fromDom);
            e.deleteContents(), e.insertNode(t);
            var o = n.bind(Gt).filter(Ht).bind($v),
              i = r.bind(Jt).filter(Ht).bind($v);
            Wv(o, n, e, !0), Wv(i, r, e, !1), e.collapse(!1);
          })(o, o.createContextualFragment(n.content)),
            e.selection.setRng(o),
            $d(e, o),
            r.no_events || e.fire("SetContent", r);
        } else e.fire("SetContent", r);
      },
      Xv = function (e, t, n) {
        if (e && e.hasOwnProperty(t)) {
          var r = K(e[t], function (e) {
            return e !== n;
          });
          0 === r.length ? delete e[t] : (e[t] = r);
        }
      },
      Yv = function (e) {
        return !!e.select;
      },
      Gv = function (e) {
        return (
          !(!e || !e.ownerDocument) &&
          It(Tt.fromDom(e.ownerDocument), Tt.fromDom(e))
        );
      },
      Jv = function (e, t, n, r) {
        var o,
          i,
          a = (function (e, t) {
            var n, r;
            return {
              selectorChangedWithUnbind: function (o, i) {
                return (
                  n ||
                    ((n = {}),
                    (r = {}),
                    t.on("NodeChange", function (t) {
                      var o = t.element,
                        i = e.getParents(o, null, e.getRoot()),
                        a = {};
                      At.each(n, function (t, n) {
                        At.each(i, function (o) {
                          if (e.is(o, n))
                            return (
                              r[n] ||
                                (At.each(t, function (e) {
                                  e(!0, { node: o, selector: n, parents: i });
                                }),
                                (r[n] = t)),
                              (a[n] = t),
                              !1
                            );
                        });
                      }),
                        At.each(r, function (e, t) {
                          a[t] ||
                            (delete r[t],
                            At.each(e, function (e) {
                              e(!1, { node: o, selector: t, parents: i });
                            }));
                        });
                    })),
                  n[o] || (n[o] = []),
                  n[o].push(i),
                  {
                    unbind: function () {
                      Xv(n, o, i), Xv(r, o, i);
                    },
                  }
                );
              },
            };
          })(e, r).selectorChangedWithUnbind,
          u = function (e, t) {
            return Kv(r, e, t);
          },
          c = function (e) {
            var t = l();
            t.collapse(!!e), f(t);
          },
          s = function () {
            return t.getSelection ? t.getSelection() : t.document.selection;
          },
          l = function () {
            var n,
              a,
              u,
              c = function (e, t, n) {
                try {
                  return t.compareBoundaryPoints(e, n);
                } catch (r) {
                  return -1;
                }
              },
              l = t.document;
            if (void 0 !== r.bookmark && !1 === wm(r)) {
              var f = sm(r);
              if (f.isSome())
                return f
                  .map(function (e) {
                    return Rm(r, [e])[0];
                  })
                  .getOr(l.createRange());
            }
            try {
              (n = s()) &&
                !Dn(n.anchorNode) &&
                ((a =
                  n.rangeCount > 0
                    ? n.getRangeAt(0)
                    : n.createRange
                    ? n.createRange()
                    : l.createRange()),
                (a = Rm(r, [a])[0]));
            } catch (d) {}
            return (
              a ||
                (a = l.createRange
                  ? l.createRange()
                  : l.body.createTextRange()),
              a.setStart &&
                9 === a.startContainer.nodeType &&
                a.collapsed &&
                ((u = e.getRoot()), a.setStart(u, 0), a.setEnd(u, 0)),
              o &&
                i &&
                (0 === c(a.START_TO_START, a, o) && 0 === c(a.END_TO_END, a, o)
                  ? (a = i)
                  : ((o = null), (i = null))),
              a
            );
          },
          f = function (e, t) {
            var n;
            if (
              (function (e) {
                return (
                  !!e &&
                  (!!Yv(e) || (Gv(e.startContainer) && Gv(e.endContainer)))
                );
              })(e)
            ) {
              var a = Yv(e) ? e : null;
              if (a) {
                i = null;
                try {
                  a.select();
                } catch (c) {}
              } else {
                var u = s();
                if (
                  ((e = r.fire("SetSelectionRange", {
                    range: e,
                    forward: t,
                  }).range),
                  u)
                ) {
                  i = e;
                  try {
                    u.removeAllRanges(), u.addRange(e);
                  } catch (c) {}
                  !1 === t &&
                    u.extend &&
                    (u.collapse(e.endContainer, e.endOffset),
                    u.extend(e.startContainer, e.startOffset)),
                    (o = u.rangeCount > 0 ? u.getRangeAt(0) : null);
                }
                e.collapsed ||
                  e.startContainer !== e.endContainer ||
                  !u.setBaseAndExtent ||
                  _t.ie ||
                  (e.endOffset - e.startOffset < 2 &&
                    e.startContainer.hasChildNodes() &&
                    (n = e.startContainer.childNodes[e.startOffset]) &&
                    "IMG" === n.tagName &&
                    (u.setBaseAndExtent(
                      e.startContainer,
                      e.startOffset,
                      e.endContainer,
                      e.endOffset
                    ),
                    (u.anchorNode === e.startContainer &&
                      u.focusNode === e.endContainer) ||
                      u.setBaseAndExtent(n, 0, n, 1))),
                  r.fire("AfterSetSelectionRange", { range: e, forward: t });
              }
            }
          },
          d = function () {
            var t = s(),
              n = null == t ? void 0 : t.anchorNode,
              r = null == t ? void 0 : t.focusNode;
            if (!t || !n || !r || Dn(n) || Dn(r)) return !0;
            var o = e.createRng();
            o.setStart(n, t.anchorOffset), o.collapse(!0);
            var i = e.createRng();
            return (
              i.setStart(r, t.focusOffset),
              i.collapse(!0),
              o.compareBoundaryPoints(o.START_TO_START, i) <= 0
            );
          },
          m = {
            bookmarkManager: null,
            controlSelection: null,
            dom: e,
            win: t,
            serializer: n,
            editor: r,
            collapse: c,
            setCursorLocation: function (t, n) {
              var o = e.createRng();
              v(t) && v(n)
                ? (o.setStart(t, n), o.setEnd(t, n), f(o), c(!1))
                : ($f(e, o, r.getBody(), !0), f(o));
            },
            getContent: function (e) {
              return qv(r, e);
            },
            setContent: u,
            getBookmark: function (e, t) {
              return p.getBookmark(e, t);
            },
            moveToBookmark: function (e) {
              return p.moveToBookmark(e);
            },
            select: function (t, n) {
              return (
                (function (e, t, n) {
                  return M.from(t).map(function (t) {
                    var r = e.nodeIndex(t),
                      o = e.createRng();
                    return (
                      o.setStart(t.parentNode, r),
                      o.setEnd(t.parentNode, r + 1),
                      n && ($f(e, o, t, !0), $f(e, o, t, !1)),
                      o
                    );
                  });
                })(e, t, n).each(f),
                t
              );
            },
            isCollapsed: function () {
              var e = l(),
                t = s();
              return (
                !(!e || e.item) &&
                (e.compareEndPoints
                  ? 0 === e.compareEndPoints("StartToEnd", e)
                  : !t || e.collapsed)
              );
            },
            isForward: d,
            setNode: function (t) {
              return u(e.getOuterHTML(t)), t;
            },
            getNode: function () {
              return (function (e, t) {
                var n, r, o;
                if (!t) return e;
                (r = t.startContainer), (o = t.endContainer);
                var i = t.startOffset,
                  a = t.endOffset;
                return (
                  (n = t.commonAncestorContainer),
                  !t.collapsed &&
                  (r === o &&
                    a - i < 2 &&
                    r.hasChildNodes() &&
                    (n = r.childNodes[i]),
                  3 === r.nodeType &&
                    3 === o.nodeType &&
                    ((r =
                      r.length === i ? Am(r.nextSibling, !0) : r.parentNode),
                    (o = 0 === a ? Am(o.previousSibling, !1) : o.parentNode),
                    r && r === o))
                    ? r
                    : n && 3 === n.nodeType
                    ? n.parentNode
                    : n
                );
              })(r.getBody(), l());
            },
            getSel: s,
            setRng: f,
            getRng: l,
            getStart: function (e) {
              return Nm(r.getBody(), l(), e);
            },
            getEnd: function (e) {
              return km(r.getBody(), l(), e);
            },
            getSelectedBlocks: function (t, n) {
              return (function (e, t, n, r) {
                var o,
                  i = [],
                  a = e.getRoot();
                if (
                  ((n = e.getParent(n || Nm(a, t, t.collapsed), e.isBlock)),
                  (r = e.getParent(r || km(a, t, t.collapsed), e.isBlock)),
                  n && n !== a && i.push(n),
                  n && r && n !== r)
                ) {
                  o = n;
                  for (var u = new so(n, a); (o = u.next()) && o !== r; )
                    e.isBlock(o) && i.push(o);
                }
                return r && n !== r && r !== a && i.push(r), i;
              })(e, l(), t, n);
            },
            normalize: function () {
              var t = l(),
                n = s();
              if (!(Ff(n).length > 1) && Wf(r)) {
                var o = Cd(e, t);
                return (
                  o.each(function (e) {
                    f(e, d());
                  }),
                  o.getOr(t)
                );
              }
              return t;
            },
            selectorChanged: function (e, t) {
              return a(e, t), m;
            },
            selectorChangedWithUnbind: a,
            getScrollContainer: function () {
              for (var t, n = e.getRoot(); n && "BODY" !== n.nodeName; ) {
                if (n.scrollHeight > n.clientHeight) {
                  t = n;
                  break;
                }
                n = n.parentNode;
              }
              return t;
            },
            scrollIntoView: function (e, t) {
              return (function (e, t, n) {
                (e.inline ? Vd : qd)(e, t, n);
              })(r, e, t);
            },
            placeCaretAt: function (e, t) {
              return f(ld(e, t, r.getDoc()));
            },
            getBoundingClientRect: function () {
              var e = l();
              return e.collapsed
                ? Rc.fromRangeStart(e).getClientRects()[0]
                : e.getBoundingClientRect();
            },
            destroy: function () {
              (t = o = i = null), g.destroy();
            },
          },
          p = nd(m),
          g = cd(m, r);
        return (m.bookmarkManager = p), (m.controlSelection = g), m;
      },
      Qv = function (e, t, n) {
        e.addNodeFilter("font", function (e) {
          $(e, function (e) {
            var r = t.parse(e.attr("style")),
              o = e.attr("color"),
              i = e.attr("face"),
              a = e.attr("size");
            o && (r.color = o),
              i && (r["font-family"] = i),
              a && (r["font-size"] = n[parseInt(e.attr("size"), 10) - 1]),
              (e.name = "span"),
              e.attr("style", t.serialize(r)),
              (function (e, t) {
                $(t, function (t) {
                  e.attr(t, null);
                });
              })(e, ["color", "face", "size"]);
          });
        });
      },
      Zv = function (e, t) {
        var n = Oi();
        t.convert_fonts_to_spans &&
          Qv(e, n, At.explode(t.font_size_legacy_values)),
          (function (e, t) {
            e.addNodeFilter("strike", function (e) {
              $(e, function (e) {
                var n = t.parse(e.attr("style"));
                (n["text-decoration"] = "line-through"),
                  (e.name = "span"),
                  e.attr("style", t.serialize(n));
              });
            });
          })(e, n);
      },
      ey = function (e) {
        var t,
          n = decodeURIComponent(e).split(","),
          r = /data:([^;]+)/.exec(n[0]);
        return r && (t = r[1]), { type: t, data: n[1] };
      },
      ty = function (e, t) {
        var n;
        try {
          n = atob(t);
        } catch (VN) {
          return M.none();
        }
        for (var r = new Uint8Array(n.length), o = 0; o < r.length; o++)
          r[o] = n.charCodeAt(o);
        return M.some(new Blob([r], { type: e }));
      },
      ny = function (e) {
        return 0 === e.indexOf("blob:")
          ? (function (e) {
              return new eo(function (t, n) {
                var r = function () {
                  n(
                    "Cannot convert " +
                      e +
                      " to Blob. Resource might not exist or is inaccessible."
                  );
                };
                try {
                  var o = new XMLHttpRequest();
                  o.open("GET", e, !0),
                    (o.responseType = "blob"),
                    (o.onload = function () {
                      200 === o.status ? t(o.response) : r();
                    }),
                    (o.onerror = r),
                    o.send();
                } catch (i) {
                  r();
                }
              });
            })(e)
          : 0 === e.indexOf("data:")
          ? ((t = e),
            new eo(function (e) {
              var n = ey(t),
                r = n.type,
                o = n.data;
              ty(r, o).fold(function () {
                return e(new Blob([]));
              }, e);
            }))
          : null;
        var t;
      },
      ry = 0,
      oy = function (e) {
        return (e || "blobid") + ry++;
      },
      iy = function (e, t, n, r) {
        var o, i;
        if (0 !== t.src.indexOf("blob:")) {
          var a = ey(t.src),
            u = a.data,
            c = a.type;
          (o = u),
            (i = e.getByData(o, c))
              ? n({ image: t, blobInfo: i })
              : ny(t.src).then(
                  function (r) {
                    (i = e.create(oy(), r, o)),
                      e.add(i),
                      n({ image: t, blobInfo: i });
                  },
                  function (e) {
                    r(e);
                  }
                );
        } else
          (i = e.getByUri(t.src))
            ? n({ image: t, blobInfo: i })
            : ny(t.src).then(
                function (r) {
                  (function (e) {
                    return new eo(function (t) {
                      var n = new FileReader();
                      (n.onloadend = function () {
                        t(n.result);
                      }),
                        n.readAsDataURL(e);
                    });
                  })(r).then(function (a) {
                    (o = ey(a).data),
                      (i = e.create(oy(), r, o)),
                      e.add(i),
                      n({ image: t, blobInfo: i });
                  });
                },
                function (e) {
                  r(e);
                }
              );
      },
      ay = function (e, t) {
        var n = {};
        return {
          findAll: function (r, o) {
            o || (o = B);
            var i = K(
                (function (e) {
                  return e ? ie(e.getElementsByTagName("img")) : [];
                })(r),
                function (t) {
                  var n = t.src;
                  return (
                    !!_t.fileApi &&
                    !t.hasAttribute("data-mce-bogus") &&
                    !t.hasAttribute("data-mce-placeholder") &&
                    !(!n || n === _t.transparentSrc) &&
                    (0 === n.indexOf("blob:")
                      ? !e.isUploaded(n) && o(t)
                      : 0 === n.indexOf("data:") && o(t))
                  );
                }
              ),
              a = q(i, function (e) {
                if (void 0 !== n[e.src])
                  return new eo(function (t) {
                    n[e.src].then(function (n) {
                      if ("string" == typeof n) return n;
                      t({ image: e, blobInfo: n.blobInfo });
                    });
                  });
                var r = new eo(function (n, r) {
                  iy(t, e, n, r);
                })
                  .then(function (e) {
                    return delete n[e.image.src], e;
                  })
                  .catch(function (t) {
                    return delete n[e.src], t;
                  });
                return (n[e.src] = r), r;
              });
            return eo.all(a);
          },
        };
      },
      uy = function (e, t, n, r) {
        (e.padd_empty_with_br || t.insert) && n[r.name]
          ? (r.empty().append(new Pm("br", 1)).shortEnded = !0)
          : (r.empty().append(new Pm("#text", 3)).value = xo);
      },
      cy = function (e, t) {
        return (
          e &&
          e.firstChild &&
          e.firstChild === e.lastChild &&
          e.firstChild.name === t
        );
      },
      sy = function (e, t, n, r) {
        return r.isEmpty(t, n, function (t) {
          return (function (e, t) {
            var n = e.getElementRule(t.name);
            return n && n.paddEmpty;
          })(e, t);
        });
      },
      ly = function (e, t) {
        var n = t.blob_cache,
          r = function (e) {
            var r,
              o,
              i = e.attr("src");
            (function (e) {
              return (
                e.attr("src") === _t.transparentSrc ||
                e.attr("data-mce-placeholder")
              );
            })(e) ||
              (function (e) {
                return e.attr("data-mce-bogus");
              })(e) ||
              ((r = i),
              (o = /data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(r)),
              o
                ? M.some({ type: o[1], data: decodeURIComponent(o[2]) })
                : M.none())
                .filter(function () {
                  return (function (e, t) {
                    if (t.images_dataimg_filter) {
                      var n = new Image();
                      return (
                        (n.src = e.attr("src")),
                        ce(e.attributes.map, function (e, t) {
                          n.setAttribute(t, e);
                        }),
                        t.images_dataimg_filter(n)
                      );
                    }
                    return !0;
                  })(e, t);
                })
                .bind(function (e) {
                  var t = e.type,
                    r = e.data;
                  return M.from(n.getByData(r, t)).orThunk(function () {
                    return ty(t, r).map(function (e) {
                      var t = n.create(oy(), e, r);
                      return n.add(t), t;
                    });
                  });
                })
                .each(function (t) {
                  e.attr("src", t.blobUri());
                });
          };
        n &&
          e.addAttributeFilter("src", function (e) {
            return $(e, r);
          });
      },
      fy = At.makeMap,
      dy = At.each,
      my = At.explode,
      py = At.extend,
      gy = function (e, t) {
        void 0 === t && (t = Ti());
        var n = {},
          r = [],
          o = {},
          i = {};
        ((e = e || {}).validate = !("validate" in e) || e.validate),
          (e.root_name = e.root_name || "body");
        var a = function (e) {
            var t, a, u;
            (a = e.name) in n && ((u = o[a]) ? u.push(e) : (o[a] = [e])),
              (t = r.length);
            for (; t--; )
              (a = r[t].name) in e.attributes.map &&
                ((u = i[a]) ? u.push(e) : (i[a] = [e]));
            return e;
          },
          u = {
            schema: t,
            addAttributeFilter: function (e, t) {
              dy(my(e), function (e) {
                var n;
                for (n = 0; n < r.length; n++)
                  if (r[n].name === e) return void r[n].callbacks.push(t);
                r.push({ name: e, callbacks: [t] });
              });
            },
            getAttributeFilters: function () {
              return [].concat(r);
            },
            addNodeFilter: function (e, t) {
              dy(my(e), function (e) {
                var r = n[e];
                r || (n[e] = r = []), r.push(t);
              });
            },
            getNodeFilters: function () {
              var e = [];
              for (var t in n)
                n.hasOwnProperty(t) && e.push({ name: t, callbacks: n[t] });
              return e;
            },
            filterNode: a,
            parse: function (u, c) {
              var s,
                l,
                f,
                d,
                m,
                p,
                g,
                h,
                v,
                y = [];
              (c = c || {}), (o = {}), (i = {});
              var b,
                C = py(
                  fy("script,style,head,html,body,title,meta,param"),
                  t.getBlockElements()
                ),
                w = t.getNonEmptyElements(),
                x = t.children,
                _ = e.validate,
                S =
                  "forced_root_block" in c
                    ? c.forced_root_block
                    : e.forced_root_block,
                E = !1 === (b = S) ? "" : !0 === b ? "p" : b,
                N = t.getWhiteSpaceElements(),
                k = /^[ \t\r\n]+/,
                A = /[ \t\r\n]+$/,
                R = /[ \t\r\n]+/g,
                T = /^[ \t\r\n]+$/;
              h = N.hasOwnProperty(c.context) || N.hasOwnProperty(e.root_name);
              var D = function (e, t) {
                  var r,
                    i = new Pm(e, t);
                  return e in n && ((r = o[e]) ? r.push(i) : (o[e] = [i])), i;
                },
                O = function (e) {
                  var n,
                    r,
                    o,
                    i,
                    a = t.getBlockElements();
                  for (n = e.prev; n && 3 === n.type; ) {
                    if ((o = n.value.replace(A, "")).length > 0)
                      return void (n.value = o);
                    if ((r = n.next)) {
                      if (3 === r.type && r.value.length) {
                        n = n.prev;
                        continue;
                      }
                      if (
                        !a[r.name] &&
                        "script" !== r.name &&
                        "style" !== r.name
                      ) {
                        n = n.prev;
                        continue;
                      }
                    }
                    (i = n.prev), n.remove(), (n = i);
                  }
                },
                B = jm(
                  {
                    validate: _,
                    allow_html_data_urls: e.allow_html_data_urls,
                    allow_svg_data_urls: e.allow_svg_data_urls,
                    allow_script_urls: e.allow_script_urls,
                    allow_conditional_comments: e.allow_conditional_comments,
                    preserve_cdata: e.preserve_cdata,
                    self_closing_elements: (function (e) {
                      var t,
                        n = {};
                      for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                      return n;
                    })(t.getSelfClosingElements()),
                    cdata: function (e) {
                      v.append(D("#cdata", 4)).value = e;
                    },
                    text: function (e, t) {
                      var n;
                      h ||
                        ((e = e.replace(R, " ")),
                        (function (e, t) {
                          return e && (t[e.name] || "br" === e.name);
                        })(v.lastChild, C) && (e = e.replace(k, ""))),
                        0 !== e.length &&
                          (((n = D("#text", 3)).raw = !!t),
                          (v.append(n).value = e));
                    },
                    comment: function (e) {
                      v.append(D("#comment", 8)).value = e;
                    },
                    pi: function (e, t) {
                      (v.append(D(e, 7)).value = t), O(v);
                    },
                    doctype: function (e) {
                      (v.append(D("#doctype", 10)).value = e), O(v);
                    },
                    start: function (e, n, o) {
                      var a,
                        u,
                        c,
                        s,
                        l = _ ? t.getElementRule(e) : {};
                      if (l) {
                        for (
                          (a = D(l.outputName || e, 1)).attributes = n,
                            a.shortEnded = o,
                            v.append(a),
                            (s = x[v.name]) &&
                              x[a.name] &&
                              !s[a.name] &&
                              y.push(a),
                            u = r.length;
                          u--;

                        )
                          (c = r[u].name) in n.map &&
                            ((p = i[c]) ? p.push(a) : (i[c] = [a]));
                        C[e] && O(a), o || (v = a), !h && N[e] && (h = !0);
                      }
                    },
                    end: function (n) {
                      var r,
                        o,
                        i,
                        a,
                        u = _ ? t.getElementRule(n) : {};
                      if (u) {
                        if (C[n] && !h) {
                          if ((r = v.firstChild) && 3 === r.type)
                            if ((o = r.value.replace(k, "")).length > 0)
                              (r.value = o), (r = r.next);
                            else
                              for (
                                i = r.next, r.remove(), r = i;
                                r && 3 === r.type;

                              )
                                (o = r.value),
                                  (i = r.next),
                                  (0 === o.length || T.test(o)) &&
                                    (r.remove(), (r = i)),
                                  (r = i);
                          if ((r = v.lastChild) && 3 === r.type)
                            if ((o = r.value.replace(A, "")).length > 0)
                              (r.value = o), (r = r.prev);
                            else
                              for (
                                i = r.prev, r.remove(), r = i;
                                r && 3 === r.type;

                              )
                                (o = r.value),
                                  (i = r.prev),
                                  (0 === o.length || T.test(o)) &&
                                    (r.remove(), (r = i)),
                                  (r = i);
                        }
                        if (
                          (h && N[n] && (h = !1),
                          u.removeEmpty && sy(t, w, N, v))
                        )
                          return (
                            (a = v.parent),
                            C[v.name] ? v.empty().remove() : v.unwrap(),
                            void (v = a)
                          );
                        u.paddEmpty &&
                          ((function (e) {
                            return cy(e, "#text") && e.firstChild.value === xo;
                          })(v) ||
                            sy(t, w, N, v)) &&
                          uy(e, c, C, v),
                          (v = v.parent);
                      }
                    },
                  },
                  t
                ),
                P = (v = new Pm(c.context || e.root_name, 11));
              if (
                (B.parse(u, c.format),
                _ &&
                  y.length &&
                  (c.context
                    ? (c.invalid = !0)
                    : (function (e) {
                        var n,
                          r,
                          o,
                          i,
                          u,
                          c,
                          s,
                          l,
                          f,
                          d,
                          m,
                          p = fy("tr,td,th,tbody,thead,tfoot,table"),
                          g = t.getNonEmptyElements(),
                          h = t.getWhiteSpaceElements(),
                          v = t.getTextBlockElements(),
                          y = t.getSpecialElements();
                        for (n = 0; n < e.length; n++)
                          if ((r = e[n]).parent && !r.fixed)
                            if (v[r.name] && "li" === r.parent.name) {
                              for (d = r.next; d && v[d.name]; )
                                (d.name = "li"),
                                  (d.fixed = !0),
                                  r.parent.insert(d, r.parent),
                                  (d = d.next);
                              r.unwrap(r);
                            } else {
                              for (
                                i = [r], o = r.parent;
                                o &&
                                !t.isValidChild(o.name, r.name) &&
                                !p[o.name];
                                o = o.parent
                              )
                                i.push(o);
                              if (o && i.length > 1) {
                                for (
                                  i.reverse(), u = c = a(i[0].clone()), f = 0;
                                  f < i.length - 1;
                                  f++
                                ) {
                                  for (
                                    t.isValidChild(c.name, i[f].name)
                                      ? ((s = a(i[f].clone())), c.append(s))
                                      : (s = c),
                                      l = i[f].firstChild;
                                    l && l !== i[f + 1];

                                  )
                                    (m = l.next), s.append(l), (l = m);
                                  c = s;
                                }
                                sy(t, g, h, u)
                                  ? o.insert(r, i[0], !0)
                                  : (o.insert(u, i[0], !0), o.insert(r, u)),
                                  (o = i[0]),
                                  (sy(t, g, h, o) || cy(o, "br")) &&
                                    o.empty().remove();
                              } else if (r.parent) {
                                if ("li" === r.name) {
                                  if (
                                    (d = r.prev) &&
                                    ("ul" === d.name || "ol" === d.name)
                                  ) {
                                    d.append(r);
                                    continue;
                                  }
                                  if (
                                    (d = r.next) &&
                                    ("ul" === d.name || "ol" === d.name)
                                  ) {
                                    d.insert(r, d.firstChild, !0);
                                    continue;
                                  }
                                  r.wrap(a(new Pm("ul", 1)));
                                  continue;
                                }
                                t.isValidChild(r.parent.name, "div") &&
                                t.isValidChild("div", r.name)
                                  ? r.wrap(a(new Pm("div", 1)))
                                  : y[r.name]
                                  ? r.empty().remove()
                                  : r.unwrap();
                              }
                            }
                      })(y)),
                E &&
                  ("body" === P.name || c.isRootContent) &&
                  (function () {
                    var n,
                      r,
                      o = P.firstChild,
                      i = function (e) {
                        e &&
                          ((o = e.firstChild) &&
                            3 === o.type &&
                            (o.value = o.value.replace(k, "")),
                          (o = e.lastChild) &&
                            3 === o.type &&
                            (o.value = o.value.replace(A, "")));
                      };
                    if (t.isValidChild(P.name, E.toLowerCase())) {
                      for (; o; )
                        (n = o.next),
                          3 === o.type ||
                          (1 === o.type &&
                            "p" !== o.name &&
                            !C[o.name] &&
                            !o.attr("data-mce-type"))
                            ? (r ||
                                ((r = D(E, 1)).attr(e.forced_root_block_attrs),
                                P.insert(r, o)),
                              r.append(o))
                            : (i(r), (r = null)),
                          (o = n);
                      i(r);
                    }
                  })(),
                !c.invalid)
              ) {
                for (g in o)
                  if (o.hasOwnProperty(g)) {
                    for (p = n[g], d = (s = o[g]).length; d--; )
                      s[d].parent || s.splice(d, 1);
                    for (l = 0, f = p.length; l < f; l++) p[l](s, g, c);
                  }
                for (l = 0, f = r.length; l < f; l++)
                  if ((p = r[l]).name in i) {
                    for (d = (s = i[p.name]).length; d--; )
                      s[d].parent || s.splice(d, 1);
                    for (d = 0, m = p.callbacks.length; d < m; d++)
                      p.callbacks[d](s, p.name, c);
                  }
              }
              return P;
            },
          };
        return (
          (function (e, t) {
            var n = e.schema;
            t.remove_trailing_brs &&
              e.addNodeFilter("br", function (e, r, o) {
                var i,
                  a,
                  u,
                  c,
                  s,
                  l,
                  f,
                  d,
                  m = e.length,
                  p = At.extend({}, n.getBlockElements()),
                  g = n.getNonEmptyElements(),
                  h = n.getWhiteSpaceElements();
                for (p.body = 1, i = 0; i < m; i++)
                  if (
                    ((u = (a = e[i]).parent),
                    p[a.parent.name] && a === u.lastChild)
                  ) {
                    for (s = a.prev; s; ) {
                      if (
                        "span" !== (l = s.name) ||
                        "bookmark" !== s.attr("data-mce-type")
                      ) {
                        "br" === l && (a = null);
                        break;
                      }
                      s = s.prev;
                    }
                    a &&
                      (a.remove(),
                      sy(n, g, h, u) &&
                        (f = n.getElementRule(u.name)) &&
                        (f.removeEmpty
                          ? u.remove()
                          : f.paddEmpty && uy(t, o, p, u)));
                  } else {
                    for (
                      c = a;
                      u &&
                      u.firstChild === c &&
                      u.lastChild === c &&
                      ((c = u), !p[u.name]);

                    )
                      u = u.parent;
                    c === u &&
                      !0 !== t.padd_empty_with_br &&
                      (((d = new Pm("#text", 3)).value = xo), a.replace(d));
                  }
              }),
              e.addAttributeFilter("href", function (e) {
                var n,
                  r,
                  o = e.length;
                if (!t.allow_unsafe_link_target)
                  for (; o--; ) {
                    var i = e[o];
                    "a" === i.name &&
                      "_blank" === i.attr("target") &&
                      i.attr(
                        "rel",
                        ((r = void 0),
                        (r = (n = i.attr("rel")) ? At.trim(n) : ""),
                        /\b(noopener)\b/g.test(r)
                          ? r
                          : (function (e) {
                              return e
                                .split(" ")
                                .filter(function (e) {
                                  return e.length > 0;
                                })
                                .concat(["noopener"])
                                .sort()
                                .join(" ");
                            })(r))
                      );
                  }
              }),
              t.allow_html_in_named_anchor ||
                e.addAttributeFilter("id,name", function (e) {
                  for (var t, n, r, o, i = e.length; i--; )
                    if (
                      "a" === (o = e[i]).name &&
                      o.firstChild &&
                      !o.attr("href")
                    ) {
                      (r = o.parent), (t = o.lastChild);
                      do {
                        (n = t.prev), r.insert(t, o), (t = n);
                      } while (t);
                    }
                }),
              t.fix_list_elements &&
                e.addNodeFilter("ul,ol", function (e) {
                  for (var t, n, r = e.length; r--; )
                    if (
                      "ul" === (n = (t = e[r]).parent).name ||
                      "ol" === n.name
                    )
                      if (t.prev && "li" === t.prev.name) t.prev.append(t);
                      else {
                        var o = new Pm("li", 1);
                        o.attr("style", "list-style-type: none"), t.wrap(o);
                      }
                }),
              t.validate &&
                n.getValidClasses() &&
                e.addAttributeFilter("class", function (e) {
                  for (
                    var t,
                      r,
                      o,
                      i,
                      a,
                      u,
                      c,
                      s = e.length,
                      l = n.getValidClasses();
                    s--;

                  ) {
                    for (
                      r = (t = e[s]).attr("class").split(" "), a = "", o = 0;
                      o < r.length;
                      o++
                    )
                      (i = r[o]),
                        (c = !1),
                        (u = l["*"]) && u[i] && (c = !0),
                        (u = l[t.name]),
                        !c && u && u[i] && (c = !0),
                        c && (a && (a += " "), (a += i));
                    a.length || (a = null), t.attr("class", a);
                  }
                }),
              ly(e, t);
          })(u, e),
          (function (e, t) {
            t.inline_styles && Zv(e, t);
          })(u, e),
          u
        );
      },
      hy = function (e, t, n) {
        return (function (e, t) {
          return e && e.hasEventListeners("PreProcess") && !t.no_events;
        })(e, n)
          ? (function (e, t, n) {
              var r,
                o,
                i = e.dom;
              t = t.cloneNode(!0);
              var a = document.implementation;
              return (
                a.createHTMLDocument &&
                  ((r = a.createHTMLDocument("")),
                  At.each(
                    "BODY" === t.nodeName ? t.childNodes : [t],
                    function (e) {
                      r.body.appendChild(r.importNode(e, !0));
                    }
                  ),
                  (t = "BODY" !== t.nodeName ? r.body.firstChild : r.body),
                  (o = i.doc),
                  (i.doc = r)),
                (function (e, t) {
                  e.fire("PreProcess", t);
                })(e, ke(ke({}, n), { node: t })),
                o && (i.doc = o),
                t
              );
            })(e, t, n)
          : t;
      },
      vy = function (e, t, n) {
        -1 === At.inArray(t, n) &&
          (e.addAttributeFilter(n, function (e, t) {
            for (var n = e.length; n--; ) e[n].attr(t, null);
          }),
          t.push(n));
      },
      yy = function (e, t, n, r, o) {
        return (function (e, t, n) {
          return !t.no_events && e
            ? (function (e, t) {
                return e.fire("PostProcess", t);
              })(e, ke(ke({}, t), { content: n })).content
            : n;
        })(
          e,
          o,
          (function (e, t, n) {
            return Xm(e, t).serialize(n);
          })(t, n, r)
        );
      },
      by = function (e, t) {
        var n = ["data-mce-selected"],
          r = t && t.dom ? t.dom : vu.DOM,
          o = t && t.schema ? t.schema : Ti(e);
        (e.entity_encoding = e.entity_encoding || "named"),
          (e.remove_trailing_brs =
            !("remove_trailing_brs" in e) || e.remove_trailing_brs);
        var i = gy(e, o);
        return (
          (function (e, t, n) {
            e.addAttributeFilter("data-mce-tabindex", function (e, t) {
              for (var n, r = e.length; r--; )
                (n = e[r]).attr("tabindex", n.attr("data-mce-tabindex")),
                  n.attr(t, null);
            }),
              e.addAttributeFilter("src,href,style", function (e, r) {
                for (
                  var o,
                    i,
                    a = e.length,
                    u = "data-mce-" + r,
                    c = t.url_converter,
                    s = t.url_converter_scope;
                  a--;

                )
                  void 0 !== (i = (o = e[a]).attr(u))
                    ? (o.attr(r, i.length > 0 ? i : null), o.attr(u, null))
                    : ((i = o.attr(r)),
                      "style" === r
                        ? (i = n.serializeStyle(n.parseStyle(i), o.name))
                        : c && (i = c.call(s, i, r, o.name)),
                      o.attr(r, i.length > 0 ? i : null));
              }),
              e.addAttributeFilter("class", function (e) {
                for (var t, n, r = e.length; r--; )
                  (n = (t = e[r]).attr("class")) &&
                    ((n = t
                      .attr("class")
                      .replace(/(?:^|\s)mce-item-\w+(?!\S)/g, "")),
                    t.attr("class", n.length > 0 ? n : null));
              }),
              e.addAttributeFilter("data-mce-type", function (e, t, n) {
                for (var r, o = e.length; o--; )
                  "bookmark" !== (r = e[o]).attr("data-mce-type") ||
                    n.cleanup ||
                    (M.from(r.firstChild).exists(function (e) {
                      return !So(e.value);
                    })
                      ? r.unwrap()
                      : r.remove());
              }),
              e.addNodeFilter("noscript", function (e) {
                for (var t, n = e.length; n--; )
                  (t = e[n].firstChild) && (t.value = Ci.decode(t.value));
              }),
              e.addNodeFilter("script,style", function (e, n) {
                for (
                  var r,
                    o,
                    i,
                    a = e.length,
                    u = function (e) {
                      return e
                        .replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n")
                        .replace(/^[\r\n]*|[\r\n]*$/g, "")
                        .replace(
                          /^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,
                          ""
                        )
                        .replace(
                          /\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,
                          ""
                        );
                    };
                  a--;

                )
                  (o = (r = e[a]).firstChild ? r.firstChild.value : ""),
                    "script" === n
                      ? ((i = r.attr("type")) &&
                          r.attr(
                            "type",
                            "mce-no/type" === i ? null : i.replace(/^mce\-/, "")
                          ),
                        "xhtml" === t.element_format &&
                          o.length > 0 &&
                          (r.firstChild.value =
                            "// <![CDATA[\n" + u(o) + "\n// ]]>"))
                      : "xhtml" === t.element_format &&
                        o.length > 0 &&
                        (r.firstChild.value = "\x3c!--\n" + u(o) + "\n--\x3e");
              }),
              e.addNodeFilter("#comment", function (e) {
                for (var r, o = e.length; o--; )
                  (r = e[o]),
                    t.preserve_cdata && 0 === r.value.indexOf("[CDATA[")
                      ? ((r.name = "#cdata"),
                        (r.type = 4),
                        (r.value = n.decode(
                          r.value.replace(/^\[CDATA\[|\]\]$/g, "")
                        )))
                      : 0 === r.value.indexOf("mce:protected ") &&
                        ((r.name = "#text"),
                        (r.type = 3),
                        (r.raw = !0),
                        (r.value = unescape(r.value).substr(14)));
              }),
              e.addNodeFilter("xml:namespace,input", function (e, t) {
                for (var n, r = e.length; r--; )
                  7 === (n = e[r]).type
                    ? n.remove()
                    : 1 === n.type &&
                      ("input" !== t ||
                        n.attr("type") ||
                        n.attr("type", "text"));
              }),
              e.addAttributeFilter("data-mce-type", function (t) {
                $(t, function (t) {
                  "format-caret" === t.attr("data-mce-type") &&
                    (t.isEmpty(e.schema.getNonEmptyElements())
                      ? t.remove()
                      : t.unwrap());
                });
              }),
              e.addAttributeFilter(
                "data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",
                function (e, t) {
                  for (var n = e.length; n--; ) e[n].attr(t, null);
                }
              );
          })(i, e, r),
          {
            schema: o,
            addNodeFilter: i.addNodeFilter,
            addAttributeFilter: i.addAttributeFilter,
            serialize: function (n, a) {
              void 0 === a && (a = {});
              var u = ke({ format: "html" }, a),
                c = hy(t, n, u),
                s = (function (e, t, n) {
                  var r = Eo(n.getInner ? t.innerHTML : e.getOuterHTML(t));
                  return n.selection || wo(Tt.fromDom(t)) ? r : At.trim(r);
                })(r, c, u),
                l = (function (e, t, n) {
                  var r = n.selection ? ke({ forced_root_block: !1 }, n) : n,
                    o = e.parse(t, r);
                  return (
                    (function (e) {
                      var t = function (e) {
                          return e && "br" === e.name;
                        },
                        n = e.lastChild;
                      if (t(n)) {
                        var r = n.prev;
                        t(r) && (n.remove(), r.remove());
                      }
                    })(o),
                    o
                  );
                })(i, s, u);
              return "tree" === u.format ? l : yy(t, e, o, l, u);
            },
            addRules: function (e) {
              o.addValidElements(e);
            },
            setRules: function (e) {
              o.setValidElements(e);
            },
            addTempAttr: S(vy, i, n),
            getTempAttrs: x(n),
            getNodeFilters: i.getNodeFilters,
            getAttributeFilters: i.getAttributeFilters,
          }
        );
      },
      Cy = function (e, t) {
        var n = by(e, t);
        return {
          schema: n.schema,
          addNodeFilter: n.addNodeFilter,
          addAttributeFilter: n.addAttributeFilter,
          serialize: n.serialize,
          addRules: n.addRules,
          setRules: n.setRules,
          addTempAttr: n.addTempAttr,
          getTempAttrs: n.getTempAttrs,
          getNodeFilters: n.getNodeFilters,
          getAttributeFilters: n.getAttributeFilters,
        };
      },
      wy = function (e, t) {
        return (
          void 0 === t && (t = {}),
          (function (e, t, n) {
            return Vv(e).editor.getContent(t, n);
          })(e, t, t.format ? t.format : "html")
        );
      },
      xy = function (e, t, n) {
        return (
          void 0 === n && (n = {}),
          (function (e, t, n) {
            return Vv(e).editor.setContent(t, n);
          })(e, t, n)
        );
      },
      _y = vu.DOM,
      Sy = function (e) {
        return M.from(e).each(function (e) {
          return e.destroy();
        });
      },
      Ey = function (e) {
        if (!e.removed) {
          var t = e._selectionOverrides,
            n = e.editorUpload,
            r = e.getBody(),
            o = e.getElement();
          r && e.save({ is_removing: !0 }),
            (e.removed = !0),
            e.unbindAllNativeEvents(),
            e.hasHiddenInput && o && _y.remove(o.nextSibling),
            (function (e) {
              e.fire("remove");
            })(e),
            e.editorManager.remove(e),
            !e.inline &&
              r &&
              (function (e) {
                _y.setStyle(e.id, "display", e.orgDisplay);
              })(e),
            (function (e) {
              e.fire("detach");
            })(e),
            _y.remove(e.getContainer()),
            Sy(t),
            Sy(n),
            e.destroy();
        }
      },
      Ny = function (e, t) {
        var n = e.selection,
          r = e.dom;
        e.destroyed ||
          (t || e.removed
            ? (t ||
                (e.editorManager.off("beforeunload", e._beforeUnload),
                e.theme && e.theme.destroy && e.theme.destroy(),
                Sy(n),
                Sy(r)),
              (function (e) {
                var t = e.formElement;
                t &&
                  (t._mceOldSubmit &&
                    ((t.submit = t._mceOldSubmit), (t._mceOldSubmit = null)),
                  _y.unbind(t, "submit reset", e.formEventDelegate));
              })(e),
              (function (e) {
                (e.contentAreaContainer =
                  e.formElement =
                  e.container =
                  e.editorContainer =
                    null),
                  (e.bodyElement = e.contentDocument = e.contentWindow = null),
                  (e.iframeElement = e.targetElm = null),
                  e.selection &&
                    (e.selection =
                      e.selection.win =
                      e.selection.dom =
                      e.selection.dom.doc =
                        null);
              })(e),
              (e.destroyed = !0))
            : e.remove());
      },
      ky = Object.prototype.hasOwnProperty,
      Ay =
        ((Ah = function (e, t) {
          return f(e) && f(t) ? Ay(e, t) : t;
        }),
        function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          if (0 === e.length) throw new Error("Can't merge zero objects");
          for (var n = {}, r = 0; r < e.length; r++) {
            var o = e[r];
            for (var i in o) ky.call(o, i) && (n[i] = Ah(n[i], o[i]));
          }
          return n;
        }),
      Ry = pt().deviceType,
      Ty = Ry.isTouch(),
      Dy = Ry.isPhone(),
      Oy = Ry.isTablet(),
      By = ["lists", "autolink", "autosave"],
      Py = { table_grid: !1, object_resizing: !1, resize: !1 },
      Ly = function (e) {
        var t = d(e) ? e.join(" ") : e,
          n = q(l(t) ? t.split(" ") : [], ze);
        return K(n, function (e) {
          return e.length > 0;
        });
      },
      Iy = function (e, t) {
        var n = me(t, function (t, n) {
          return V(e, n);
        });
        return (function (e, t) {
          return { sections: x(e), settings: x(t) };
        })(n.t, n.f);
      },
      My = function (e, t) {
        return e.sections().hasOwnProperty(t);
      },
      Fy = function (e, t) {
        return he(e, "toolbar_mode")
          .orThunk(function () {
            return he(e, "toolbar_drawer").map(function (e) {
              return !1 === e ? "wrap" : e;
            });
          })
          .getOr(t);
      },
      Uy = function (e, t) {
        var n = {
          resize: !1,
          toolbar_mode: Fy(e, "scrolling"),
          toolbar_sticky: !1,
        };
        return ke(ke(ke({}, Py), n), t ? { menubar: !1 } : {});
      },
      jy = function (e, t) {
        var n = t.external_plugins ? t.external_plugins : {};
        return e && e.external_plugins
          ? At.extend({}, e.external_plugins, n)
          : n;
      },
      zy = function (e, t, n, r) {
        return e &&
          (function (e, t, n) {
            var r = e.sections();
            return My(e, t) && r[t].theme === n;
          })(t, "mobile", "mobile")
          ? K(r, S(V, By))
          : e && My(t, "mobile")
          ? r
          : n;
      },
      Vy = function (e, t, n, r) {
        var o = Ly(n.forced_plugins),
          i = Ly(r.plugins),
          a = (function (e, t) {
            return My(e, t) ? e.sections()[t] : {};
          })(t, "mobile"),
          u = a.plugins ? Ly(a.plugins) : i,
          c = (function (e, t) {
            return [].concat(Ly(e)).concat(Ly(t));
          })(o, zy(e, t, i, u));
        if (_t.browser.isIE() && V(c, "rtc"))
          throw new Error("RTC plugin is not supported on IE 11.");
        return At.extend(r, { plugins: c.join(" ") });
      },
      Hy = function (e, t, n, r, o) {
        var i = e ? { mobile: Uy(o.mobile || {}, t) } : {},
          a = Iy(["mobile"], Ay(i, o)),
          u = At.extend(
            n,
            r,
            a.settings(),
            (function (e, t) {
              return e && My(t, "mobile");
            })(e, a)
              ? (function (e, t, n) {
                  void 0 === n && (n = {});
                  var r = e.sections(),
                    o = r.hasOwnProperty(t) ? r[t] : {};
                  return At.extend({}, n, o);
                })(a, "mobile")
              : {},
            { validate: !0, external_plugins: jy(r, a.settings()) }
          );
        return Vy(e, a, r, u);
      },
      qy = function (e, t, n, r, o) {
        var i = (function (e, t, n, r, o) {
          var i = {
            id: t,
            theme: "silver",
            toolbar_mode: Fy(e, "floating"),
            plugins: "",
            document_base_url: n,
            add_form_submit_trigger: !0,
            submit_patch: !0,
            add_unload_trigger: !0,
            convert_urls: !0,
            relative_urls: !0,
            remove_script_host: !0,
            object_resizing: !0,
            doctype: "<!DOCTYPE html>",
            visual: !0,
            font_size_legacy_values:
              "xx-small,small,medium,large,x-large,xx-large,300%",
            forced_root_block: "p",
            hidden_input: !0,
            inline_styles: !0,
            convert_fonts_to_spans: !0,
            indent: !0,
            indent_before:
              "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
            indent_after:
              "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
            entity_encoding: "named",
            url_converter: o.convertURL,
            url_converter_scope: o,
          };
          return ke(ke({}, i), r ? Py : {});
        })(o, t, n, Ty, e);
        return Hy(Dy || Oy, Dy, i, r, o);
      },
      $y = function (e, t, n) {
        return M.from(t.settings[n]).filter(e);
      },
      Wy = function (e, t, n, r) {
        var o,
          i = t in e.settings ? e.settings[t] : n;
        return "hash" === r
          ? (function (e) {
              var t = {};
              return (
                "string" == typeof e
                  ? $(
                      e.indexOf("=") > 0
                        ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/)
                        : e.split(","),
                      function (e) {
                        var n = e.split("=");
                        n.length > 1
                          ? (t[At.trim(n[0])] = At.trim(n[1]))
                          : (t[At.trim(n[0])] = At.trim(n[0]));
                      }
                    )
                  : (t = e),
                t
              );
            })(i)
          : "string" === r
          ? $y(l, e, t).getOr(n)
          : "number" === r
          ? $y(b, e, t).getOr(n)
          : "boolean" === r
          ? $y(p, e, t).getOr(n)
          : "object" === r
          ? $y(f, e, t).getOr(n)
          : "array" === r
          ? $y(d, e, t).getOr(n)
          : "string[]" === r
          ? $y(
              ((o = l),
              function (e) {
                return d(e) && Z(e, o);
              }),
              e,
              t
            ).getOr(n)
          : "function" === r
          ? $y(y, e, t).getOr(n)
          : i;
      },
      Ky =
        ((Rh = {}),
        {
          add: function (e, t) {
            Rh[e] = t;
          },
          get: function (e) {
            return Rh[e] ? Rh[e] : { icons: {} };
          },
          has: function (e) {
            return ve(Rh, e);
          },
        }),
      Xy = function (e, t) {
        return t.dom[e];
      },
      Yy = function (e, t) {
        return parseInt(or(t, e), 10);
      },
      Gy = S(Xy, "clientWidth"),
      Jy = S(Xy, "clientHeight"),
      Qy = S(Yy, "margin-top"),
      Zy = S(Yy, "margin-left"),
      eb = function (e, t, n) {
        var r,
          o = Tt.fromDom(e.getBody()),
          i = e.inline ? o : ((r = o), Tt.fromDom(Kt(r).dom.documentElement)),
          a = (function (e, t, n, r) {
            var o = (function (e) {
              return e.dom.getBoundingClientRect();
            })(t);
            return {
              x: n - (e ? o.left + t.dom.clientLeft + Zy(t) : 0),
              y: r - (e ? o.top + t.dom.clientTop + Qy(t) : 0),
            };
          })(e.inline, i, t, n);
        return (function (e, t, n) {
          var r = Gy(e),
            o = Jy(e);
          return t >= 0 && n >= 0 && t <= r && n <= o;
        })(i, a.x, a.y);
      },
      tb = function (e) {
        var t,
          n = e.inline ? e.getBody() : e.getContentAreaContainer();
        return ((t = n), M.from(t).map(Tt.fromDom)).map(Cn).getOr(!1);
      },
      nb = function (e) {
        var t,
          n = [],
          r = function () {
            var t,
              n = e.theme;
            return n && n.getNotificationManagerImpl
              ? n.getNotificationManagerImpl()
              : {
                  open: (t = function () {
                    throw new Error(
                      "Theme did not provide a NotificationManager implementation."
                    );
                  }),
                  close: t,
                  reposition: t,
                  getArgs: t,
                };
          },
          o = function () {
            return M.from(n[0]);
          },
          i = function () {
            n.length > 0 && r().reposition(n);
          },
          a = function (e) {
            J(n, function (t) {
              return t === e;
            }).each(function (e) {
              n.splice(e, 1);
            });
          },
          u = function (t, u) {
            if ((void 0 === u && (u = !0), !e.removed && tb(e)))
              return (
                u && e.fire("BeforeOpenNotification", { notification: t }),
                G(n, function (e) {
                  return (
                    (n = r().getArgs(e)),
                    (o = t),
                    !(
                      n.type !== o.type ||
                      n.text !== o.text ||
                      n.progressBar ||
                      n.timeout ||
                      o.progressBar ||
                      o.timeout
                    )
                  );
                  var n, o;
                }).getOrThunk(function () {
                  e.editorManager.setActive(e);
                  var u = r().open(t, function () {
                    a(u),
                      i(),
                      o().fold(
                        function () {
                          return e.focus();
                        },
                        function (e) {
                          return Tt.fromDom(e.getEl()).dom.focus();
                        }
                      );
                  });
                  return (
                    (function (e) {
                      n.push(e);
                    })(u),
                    i(),
                    e.fire("OpenNotification", { notification: ke({}, u) }),
                    u
                  );
                })
              );
          };
        return (
          (t = e).on("SkinLoaded", function () {
            var e = (function (e) {
              return e.getParam("service_message");
            })(t);
            e && u({ text: e, type: "warning", timeout: 0 }, !1);
          }),
          t.on("ResizeEditor ResizeWindow NodeChange", function () {
            ao.requestAnimationFrame(i);
          }),
          t.on("remove", function () {
            $(n.slice(), function (e) {
              r().close(e);
            });
          }),
          {
            open: u,
            close: function () {
              o().each(function (e) {
                r().close(e), a(e), i();
              });
            },
            getNotifications: function () {
              return n;
            },
          }
        );
      },
      rb = ku.PluginManager,
      ob = ku.ThemeManager,
      ib = function (e) {
        var t = [],
          n = function () {
            var t,
              n = e.theme;
            return n && n.getWindowManagerImpl
              ? n.getWindowManagerImpl()
              : {
                  open: (t = function () {
                    throw new Error(
                      "Theme did not provide a WindowManager implementation."
                    );
                  }),
                  openUrl: t,
                  alert: t,
                  confirm: t,
                  close: t,
                  getParams: t,
                  setParams: t,
                };
          },
          r = function (e, t) {
            return function () {
              for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
              return t ? t.apply(e, n) : void 0;
            };
          },
          o = function (n) {
            t.push(n),
              (function (t) {
                e.fire("OpenWindow", { dialog: t });
              })(n);
          },
          i = function (n) {
            !(function (t) {
              e.fire("CloseWindow", { dialog: t });
            })(n),
              0 ===
                (t = K(t, function (e) {
                  return e !== n;
                })).length && e.focus();
          },
          a = function (t) {
            e.editorManager.setActive(e), cm(e);
            var n = t();
            return o(n), n;
          };
        return (
          e.on("remove", function () {
            $(t, function (e) {
              n().close(e);
            });
          }),
          {
            open: function (e, t) {
              return a(function () {
                return n().open(e, t, i);
              });
            },
            openUrl: function (e) {
              return a(function () {
                return n().openUrl(e, i);
              });
            },
            alert: function (e, t, o) {
              var i = n();
              i.alert(e, r(o || i, t));
            },
            confirm: function (e, t, o) {
              var i = n();
              i.confirm(e, r(o || i, t));
            },
            close: function () {
              M.from(t[t.length - 1]).each(function (e) {
                n().close(e), i(e);
              });
            },
          }
        );
      },
      ab = function (e, t) {
        e.notificationManager.open({ type: "error", text: t });
      },
      ub = function (e, t) {
        e._skinLoaded
          ? ab(e, t)
          : e.on("SkinLoaded", function () {
              ab(e, t);
            });
      },
      cb = function (e, t, n) {
        id(e, t, { message: n }), console.error(n);
      },
      sb = function (e, t, n) {
        return n
          ? "Failed to load " + e + ": " + n + " from url " + t
          : "Failed to load " + e + " url: " + t;
      },
      lb = function (e, t, n) {
        cb(e, "PluginLoadError", sb("plugin", t, n));
      },
      fb = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = window.console;
        r &&
          (r.error ? r.error.apply(r, Ae([e], t)) : r.log.apply(r, Ae([e], t)));
      },
      db = function (e) {
        return mb(
          e,
          (function (e) {
            var t = e.getParam("content_css");
            return l(t)
              ? q(t.split(","), ze)
              : d(t)
              ? t
              : !1 === t || e.inline
              ? []
              : ["default"];
          })(e)
        );
      },
      mb = function (e, t) {
        var n = e.editorManager.baseURL + "/skins/content",
          r = "content" + e.editorManager.suffix + ".css",
          o = !0 === e.inline;
        return q(t, function (t) {
          return (function (e) {
            return /^[a-z0-9\-]+$/i.test(e);
          })(t) && !o
            ? n + "/" + t + "/" + r
            : e.documentBaseURI.toAbsolute(t);
        });
      },
      pb = function (e) {
        e.contentCSS = e.contentCSS.concat(
          db(e),
          (function (e) {
            return mb(e, hs(e));
          })(e)
        );
      },
      gb = function () {
        var e = {},
          t = function (e, t) {
            return { status: e, resultUri: t };
          },
          n = function (t) {
            return t in e;
          };
        return {
          hasBlobUri: n,
          getResultUri: function (t) {
            var n = e[t];
            return n ? n.resultUri : null;
          },
          isPending: function (t) {
            return !!n(t) && 1 === e[t].status;
          },
          isUploaded: function (t) {
            return !!n(t) && 2 === e[t].status;
          },
          markPending: function (n) {
            e[n] = t(1, null);
          },
          markUploaded: function (n, r) {
            e[n] = t(2, r);
          },
          removeFailed: function (t) {
            delete e[t];
          },
          destroy: function () {
            e = {};
          },
        };
      },
      hb = 0,
      vb = function (e) {
        return (
          e +
          hb++ +
          ((t = function () {
            return Math.round(4294967295 * Math.random()).toString(36);
          }),
          "s" + new Date().getTime().toString(36) + t() + t() + t())
        );
        var t;
      },
      yb = function (e, t) {
        var n = {},
          r = function (e, n, r, o) {
            var i = new XMLHttpRequest();
            i.open("POST", t.url),
              (i.withCredentials = t.credentials),
              (i.upload.onprogress = function (e) {
                o((e.loaded / e.total) * 100);
              }),
              (i.onerror = function () {
                r(
                  "Image upload failed due to a XHR Transport error. Code: " +
                    i.status
                );
              }),
              (i.onload = function () {
                if (i.status < 200 || i.status >= 300)
                  r("HTTP Error: " + i.status);
                else {
                  var e,
                    o,
                    a = JSON.parse(i.responseText);
                  a && "string" == typeof a.location
                    ? n(
                        ((e = t.basePath),
                        (o = a.location),
                        e
                          ? e.replace(/\/$/, "") + "/" + o.replace(/^\//, "")
                          : o)
                      )
                    : r("Invalid JSON: " + i.responseText);
                }
              });
            var a = new FormData();
            a.append("file", e.blob(), e.filename()), i.send(a);
          },
          o = function (e, t) {
            return { url: t, blobInfo: e, status: !0 };
          },
          i = function (e, t, n) {
            return {
              url: "",
              blobInfo: e,
              status: !1,
              error: { message: t, options: n },
            };
          },
          a = function (e, t) {
            At.each(n[e], function (e) {
              e(t);
            }),
              delete n[e];
          },
          u = function (r, u) {
            return (
              (r = At.grep(r, function (t) {
                return !e.isUploaded(t.blobUri());
              })),
              eo.all(
                At.map(r, function (r) {
                  return e.isPending(r.blobUri())
                    ? (function (e) {
                        var t = e.blobUri();
                        return new eo(function (e) {
                          (n[t] = n[t] || []), n[t].push(e);
                        });
                      })(r)
                    : (function (t, n, r) {
                        return (
                          e.markPending(t.blobUri()),
                          new eo(function (u) {
                            var c;
                            try {
                              var s = function () {
                                c && c.close();
                              };
                              n(
                                t,
                                function (n) {
                                  s(),
                                    e.markUploaded(t.blobUri(), n),
                                    a(t.blobUri(), o(t, n)),
                                    u(o(t, n));
                                },
                                function (n, r) {
                                  var o = r || {};
                                  s(),
                                    e.removeFailed(t.blobUri()),
                                    a(t.blobUri(), i(t, n, o)),
                                    u(i(t, n, o));
                                },
                                function (e) {
                                  e < 0 ||
                                    e > 100 ||
                                    M.from(c)
                                      .orThunk(function () {
                                        return M.from(r).map(T);
                                      })
                                      .each(function (t) {
                                        (c = t), t.progressBar.value(e);
                                      });
                                }
                              );
                            } catch (l) {
                              u(i(t, l.message, {}));
                            }
                          })
                        );
                      })(r, t.handler, u);
                })
              )
            );
          };
        return (
          !1 === y(t.handler) && (t.handler = r),
          {
            upload: function (e, n) {
              return t.url || t.handler !== r
                ? u(e, n)
                : new eo(function (e) {
                    e([]);
                  });
            },
          }
        );
      },
      bb = function (e) {
        return function () {
          return e.notificationManager.open({
            text: e.translate("Image uploading..."),
            type: "info",
            timeout: -1,
            progressBar: !0,
          });
        };
      },
      Cb = function (e, t) {
        return yb(t, {
          url: cs(e),
          basePath: ss(e),
          credentials: ls(e),
          handler: fs(e),
        });
      },
      wb = function (e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          u =
            ((t = []),
            (n = function (e) {
              if (!e.blob || !e.base64)
                throw new Error(
                  "blob and base64 representations of the image are required for BlobInfo to be created"
                );
              var t,
                n = e.id || vb("blobid"),
                r = e.name || n,
                o = e.blob;
              return {
                id: x(n),
                name: x(r),
                filename: x(
                  e.filename ||
                    r +
                      "." +
                      ((t = o.type),
                      {
                        "image/jpeg": "jpg",
                        "image/jpg": "jpg",
                        "image/gif": "gif",
                        "image/png": "png",
                        "image/apng": "apng",
                        "image/avif": "avif",
                        "image/svg+xml": "svg",
                        "image/webp": "webp",
                        "image/bmp": "bmp",
                        "image/tiff": "tiff",
                      }[t.toLowerCase()] || "dat")
                ),
                blob: x(o),
                base64: x(e.base64),
                blobUri: x(e.blobUri || URL.createObjectURL(o)),
                uri: x(e.uri),
              };
            }),
            {
              create: function (e, t, r, o, i) {
                if (l(e))
                  return n({ id: e, name: o, filename: i, blob: t, base64: r });
                if (f(e)) return n(e);
                throw new Error("Unknown input type");
              },
              add: function (e) {
                o(e.id()) || t.push(e);
              },
              get: (o = function (e) {
                return r(function (t) {
                  return t.id() === e;
                });
              }),
              getByUri: function (e) {
                return r(function (t) {
                  return t.blobUri() === e;
                });
              },
              getByData: function (e, t) {
                return r(function (n) {
                  return n.base64() === e && n.blob().type === t;
                });
              },
              findFirst: (r = function (e) {
                return G(t, e).getOrUndefined();
              }),
              removeByUri: function (e) {
                t = K(t, function (t) {
                  return (
                    t.blobUri() !== e || (URL.revokeObjectURL(t.blobUri()), !1)
                  );
                });
              },
              destroy: function () {
                $(t, function (e) {
                  URL.revokeObjectURL(e.blobUri());
                }),
                  (t = []);
              },
            }),
          c = gb(),
          s = [],
          d = (function (e) {
            var t = xu(null);
            return (
              e.on("change AddUndo", function (e) {
                t.set(ke({}, e.level));
              }),
              {
                fireIfChanged: function () {
                  var n = e.undoManager.data;
                  oe(n)
                    .filter(function (e) {
                      return !Lv(t.get(), e);
                    })
                    .each(function (t) {
                      e.setDirty(!0),
                        e.fire("change", {
                          level: t,
                          lastLevel: ne(n, n.length - 2).getOrNull(),
                        });
                    });
                },
              }
            );
          })(e),
          m = function (t) {
            return function (n) {
              return e.selection ? t(n) : [];
            };
          },
          p = function (e, t, n) {
            var r = 0;
            do {
              -1 !== (r = e.indexOf(t, r)) &&
                ((e = e.substring(0, r) + n + e.substr(r + t.length)),
                (r += n.length - t.length + 1));
            } while (-1 !== r);
            return e;
          },
          g = function (e, t, n) {
            var r =
              'src="' +
              n +
              '"' +
              (n === _t.transparentSrc ? ' data-mce-placeholder="1"' : "");
            return (
              (e = p(e, 'src="' + t + '"', r)),
              (e = p(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"'))
            );
          },
          h = function (t, n) {
            $(e.undoManager.data, function (e) {
              "fragmented" === e.type
                ? (e.fragments = q(e.fragments, function (e) {
                    return g(e, t, n);
                  }))
                : (e.content = g(e.content, t, n));
            });
          },
          v = function (t) {
            return (
              i || (i = Cb(e, c)),
              C().then(
                m(function (n) {
                  var r = q(n, function (e) {
                    return e.blobInfo;
                  });
                  return i.upload(r, bb(e)).then(
                    m(function (r) {
                      var o = [],
                        i = q(r, function (t, r) {
                          var i = n[r].blobInfo,
                            a = n[r].image;
                          return (
                            t.status &&
                            (function (e) {
                              return e.getParam(
                                "images_replace_blob_uris",
                                !0,
                                "boolean"
                              );
                            })(e)
                              ? (u.removeByUri(a.src),
                                (function (t, n) {
                                  var r,
                                    o = e.convertURL(n, "src");
                                  h(t.src, n),
                                    e
                                      .$(t)
                                      .attr({
                                        src: as(e)
                                          ? ((r = n),
                                            r +
                                              (-1 === r.indexOf("?")
                                                ? "?"
                                                : "&") +
                                              new Date().getTime())
                                          : n,
                                        "data-mce-src": o,
                                      });
                                })(a, t.url))
                              : t.error &&
                                (t.error.options.remove &&
                                  (h(a.getAttribute("src"), _t.transparentSrc),
                                  o.push(a)),
                                (function (e, t) {
                                  ub(
                                    e,
                                    Nu.translate([
                                      "Failed to upload image: {0}",
                                      t,
                                    ])
                                  );
                                })(e, t.error.message)),
                            {
                              element: a,
                              status: t.status,
                              uploadUri: t.url,
                              blobInfo: i,
                            }
                          );
                        });
                      return (
                        i.length > 0 && d.fireIfChanged(),
                        o.length > 0 &&
                          (jv(e)
                            ? console.error(
                                "Removing images on failed uploads is currently unsupported for RTC"
                              )
                            : e.undoManager.transact(function () {
                                $(o, function (t) {
                                  e.dom.remove(t), u.removeByUri(t.src);
                                });
                              })),
                        t && t(i),
                        i
                      );
                    })
                  );
                })
              )
            );
          },
          y = function (t) {
            if (is(e)) return v(t);
          },
          b = function (t) {
            return (
              !1 !==
                Z(s, function (e) {
                  return e(t);
                }) &&
              (0 !== t.getAttribute("src").indexOf("data:") ||
                (function (e) {
                  return e.getParam("images_dataimg_filter", B, "function");
                })(e)(t))
            );
          },
          C = function () {
            return (
              a || (a = ay(c, u)),
              a.findAll(e.getBody(), b).then(
                m(function (t) {
                  return (
                    (t = K(t, function (t) {
                      return "string" != typeof t || (ub(e, t), !1);
                    })),
                    $(t, function (e) {
                      h(e.image.src, e.blobInfo.blobUri()),
                        (e.image.src = e.blobInfo.blobUri()),
                        e.image.removeAttribute("data-mce-src");
                    }),
                    t
                  );
                })
              )
            );
          },
          w = function (t) {
            return t.replace(/src="(blob:[^"]+)"/g, function (t, n) {
              var r = c.getResultUri(n);
              if (r) return 'src="' + r + '"';
              var o = u.getByUri(n);
              return (
                o ||
                  (o = Y(
                    e.editorManager.get(),
                    function (e, t) {
                      return (
                        e ||
                        (t.editorUpload && t.editorUpload.blobCache.getByUri(n))
                      );
                    },
                    null
                  )),
                o
                  ? 'src="data:' + o.blob().type + ";base64," + o.base64() + '"'
                  : t
              );
            });
          };
        return (
          e.on("SetContent", function () {
            is(e) ? y() : C();
          }),
          e.on("RawSaveContent", function (e) {
            e.content = w(e.content);
          }),
          e.on("GetContent", function (e) {
            e.source_view ||
              "raw" === e.format ||
              "tree" === e.format ||
              (e.content = w(e.content));
          }),
          e.on("PostRender", function () {
            e.parser.addNodeFilter("img", function (e) {
              $(e, function (e) {
                var t = e.attr("src");
                if (!u.getByUri(t)) {
                  var n = c.getResultUri(t);
                  n && e.attr("src", n);
                }
              });
            });
          }),
          {
            blobCache: u,
            addFilter: function (e) {
              s.push(e);
            },
            uploadImages: v,
            uploadImagesAuto: y,
            scanForImages: C,
            destroy: function () {
              u.destroy(), c.destroy(), (a = i = null);
            },
          }
        );
      },
      xb = function (e) {
        var t = {},
          n = function (e, r) {
            e &&
              ("string" != typeof e
                ? At.each(e, function (e, t) {
                    n(t, e);
                  })
                : (d(r) || (r = [r]),
                  At.each(r, function (e) {
                    void 0 === e.deep && (e.deep = !e.selector),
                      void 0 === e.split && (e.split = !e.selector || e.inline),
                      void 0 === e.remove &&
                        e.selector &&
                        !e.inline &&
                        (e.remove = "none"),
                      e.selector &&
                        e.inline &&
                        ((e.mixed = !0), (e.block_expand = !0)),
                      "string" == typeof e.classes &&
                        (e.classes = e.classes.split(/\s+/));
                  }),
                  (t[e] = r)));
          };
        return (
          n(
            (function (e) {
              var t = {
                valigntop: [
                  { selector: "td,th", styles: { verticalAlign: "top" } },
                ],
                valignmiddle: [
                  { selector: "td,th", styles: { verticalAlign: "middle" } },
                ],
                valignbottom: [
                  { selector: "td,th", styles: { verticalAlign: "bottom" } },
                ],
                alignleft: [
                  {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-left",
                    ceFalseOverride: !0,
                    preview: "font-family font-size",
                  },
                  {
                    selector:
                      "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: { textAlign: "left" },
                    inherit: !1,
                    preview: !1,
                    defaultBlock: "div",
                  },
                  {
                    selector: "img,table,audio,video",
                    collapsed: !1,
                    styles: { float: "left" },
                    preview: "font-family font-size",
                  },
                ],
                aligncenter: [
                  {
                    selector:
                      "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: { textAlign: "center" },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div",
                  },
                  {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-center",
                    ceFalseOverride: !0,
                    preview: "font-family font-size",
                  },
                  {
                    selector: "img,audio,video",
                    collapsed: !1,
                    styles: {
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    },
                    preview: !1,
                  },
                  {
                    selector: "table",
                    collapsed: !1,
                    styles: { marginLeft: "auto", marginRight: "auto" },
                    preview: "font-family font-size",
                  },
                ],
                alignright: [
                  {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-right",
                    ceFalseOverride: !0,
                    preview: "font-family font-size",
                  },
                  {
                    selector:
                      "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: { textAlign: "right" },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div",
                  },
                  {
                    selector: "img,table,audio,video",
                    collapsed: !1,
                    styles: { float: "right" },
                    preview: "font-family font-size",
                  },
                ],
                alignjustify: [
                  {
                    selector:
                      "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: { textAlign: "justify" },
                    inherit: !1,
                    defaultBlock: "div",
                    preview: "font-family font-size",
                  },
                ],
                bold: [
                  {
                    inline: "strong",
                    remove: "all",
                    preserve_attributes: ["class", "style"],
                  },
                  { inline: "span", styles: { fontWeight: "bold" } },
                  {
                    inline: "b",
                    remove: "all",
                    preserve_attributes: ["class", "style"],
                  },
                ],
                italic: [
                  {
                    inline: "em",
                    remove: "all",
                    preserve_attributes: ["class", "style"],
                  },
                  { inline: "span", styles: { fontStyle: "italic" } },
                  {
                    inline: "i",
                    remove: "all",
                    preserve_attributes: ["class", "style"],
                  },
                ],
                underline: [
                  {
                    inline: "span",
                    styles: { textDecoration: "underline" },
                    exact: !0,
                  },
                  {
                    inline: "u",
                    remove: "all",
                    preserve_attributes: ["class", "style"],
                  },
                ],
                strikethrough: [
                  {
                    inline: "span",
                    styles: { textDecoration: "line-through" },
                    exact: !0,
                  },
                  {
                    inline: "strike",
                    remove: "all",
                    preserve_attributes: ["class", "style"],
                  },
                  {
                    inline: "s",
                    remove: "all",
                    preserve_attributes: ["class", "style"],
                  },
                ],
                forecolor: {
                  inline: "span",
                  styles: { color: "%value" },
                  links: !0,
                  remove_similar: !0,
                  clear_child_styles: !0,
                },
                hilitecolor: {
                  inline: "span",
                  styles: { backgroundColor: "%value" },
                  links: !0,
                  remove_similar: !0,
                  clear_child_styles: !0,
                },
                fontname: {
                  inline: "span",
                  toggle: !1,
                  styles: { fontFamily: "%value" },
                  clear_child_styles: !0,
                },
                fontsize: {
                  inline: "span",
                  toggle: !1,
                  styles: { fontSize: "%value" },
                  clear_child_styles: !0,
                },
                lineheight: {
                  selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div",
                  defaultBlock: "p",
                  styles: { lineHeight: "%value" },
                },
                fontsize_class: {
                  inline: "span",
                  attributes: { class: "%value" },
                },
                blockquote: { block: "blockquote", wrapper: !0, remove: "all" },
                subscript: { inline: "sub" },
                superscript: { inline: "sup" },
                code: { inline: "code" },
                link: {
                  inline: "a",
                  selector: "a",
                  remove: "all",
                  split: !0,
                  deep: !0,
                  onmatch: function (e, t, n) {
                    return On(e) && e.hasAttribute("href");
                  },
                  onformat: function (t, n, r) {
                    At.each(r, function (n, r) {
                      e.setAttrib(t, r, n);
                    });
                  },
                },
                removeformat: [
                  {
                    selector:
                      "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",
                    remove: "all",
                    split: !0,
                    expand: !1,
                    block_expand: !0,
                    deep: !0,
                  },
                  {
                    selector: "span",
                    attributes: ["style", "class"],
                    remove: "empty",
                    split: !0,
                    expand: !1,
                    deep: !0,
                  },
                  {
                    selector: "*",
                    attributes: ["style", "class"],
                    split: !1,
                    expand: !1,
                    deep: !0,
                  },
                ],
              };
              return (
                At.each(
                  "p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/),
                  function (e) {
                    t[e] = { block: e, remove: "all" };
                  }
                ),
                t
              );
            })(e.dom)
          ),
          n(
            (function (e) {
              return e.getParam("formats");
            })(e)
          ),
          {
            get: function (e) {
              return e ? t[e] : t;
            },
            has: function (e) {
              return ve(t, e);
            },
            register: n,
            unregister: function (e) {
              return e && t[e] && delete t[e], t;
            },
          }
        );
      },
      _b = At.each,
      Sb = vu.DOM,
      Eb = function (e, t) {
        var n,
          r,
          o,
          i = (t && t.schema) || Ti({}),
          a = function (e) {
            r = "string" == typeof e ? { name: e, classes: [], attrs: {} } : e;
            var t = Sb.create(r.name);
            return (
              (function (e, t) {
                t.classes.length && Sb.addClass(e, t.classes.join(" ")),
                  Sb.setAttribs(e, t.attrs);
              })(t, r),
              t
            );
          },
          u = function (e, t, n) {
            var r,
              o,
              c = t.length > 0 && t[0],
              s = c && c.name,
              l = (function (e, t) {
                var n = "string" != typeof e ? e.nodeName.toLowerCase() : e,
                  r = i.getElementRule(n),
                  o = r && r.parentsRequired;
                return (
                  !(!o || !o.length) &&
                  (t && -1 !== At.inArray(o, t) ? t : o[0])
                );
              })(e, s);
            if (l) s === l ? ((o = t[0]), (t = t.slice(1))) : (o = l);
            else if (c) (o = t[0]), (t = t.slice(1));
            else if (!n) return e;
            return (
              o && (r = a(o)).appendChild(e),
              n &&
                (r || (r = Sb.create("div")).appendChild(e),
                At.each(n, function (t) {
                  var n = a(t);
                  r.insertBefore(n, e);
                })),
              u(r, t, o && o.siblings)
            );
          };
        return e && e.length
          ? ((r = e[0]),
            (n = a(r)),
            (o = Sb.create("div")).appendChild(u(n, e.slice(1), r.siblings)),
            o)
          : "";
      },
      Nb = function (e) {
        var t,
          n = { classes: [], attrs: {} };
        return (
          "*" !== (e = n.selector = At.trim(e)) &&
            (t = e.replace(
              /(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,
              function (e, t, r, o, i) {
                switch (t) {
                  case "#":
                    n.attrs.id = r;
                    break;
                  case ".":
                    n.classes.push(r);
                    break;
                  case ":":
                    -1 !==
                      At.inArray(
                        "checked disabled enabled read-only required".split(
                          " "
                        ),
                        r
                      ) && (n.attrs[r] = r);
                }
                if ("[" === o) {
                  var a = i.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                  a && (n.attrs[a[1]] = a[2]);
                }
                return "";
              }
            )),
          (n.name = t || "div"),
          n
        );
      },
      kb = function (e, t) {
        var n,
          r,
          o,
          i = "",
          a = (function (e) {
            var t = e.getParam(
              "preview_styles",
              "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"
            );
            return l(t) ? t : "";
          })(e);
        if ("" === a) return "";
        var u = function (e) {
          return e.replace(/%(\w+)/g, "");
        };
        if ("string" == typeof t) {
          if (!(t = e.formatter.get(t))) return;
          t = t[0];
        }
        if ("preview" in t) {
          var c = he(t, "preview");
          if (c.is(!1)) return "";
          a = c.getOr(a);
        }
        n = t.block || t.inline || "span";
        var s,
          f =
            (s = t.selector) && "string" == typeof s
              ? ((s = (s = s.split(/\s*,\s*/)[0]).replace(
                  /\s*(~\+|~|\+|>)\s*/g,
                  "$1"
                )),
                At.map(s.split(/(?:>|\s+(?![^\[\]]+\]))/), function (e) {
                  var t = At.map(e.split(/(?:~\+|~|\+)/), Nb),
                    n = t.pop();
                  return t.length && (n.siblings = t), n;
                }).reverse())
              : [];
        f.length
          ? (f[0].name || (f[0].name = n), (n = t.selector), (r = Eb(f, e)))
          : (r = Eb([n], e));
        var d = Sb.select(n, r)[0] || r.firstChild;
        return (
          _b(t.styles, function (e, t) {
            var n = u(e);
            n && Sb.setStyle(d, t, n);
          }),
          _b(t.attributes, function (e, t) {
            var n = u(e);
            n && Sb.setAttrib(d, t, n);
          }),
          _b(t.classes, function (e) {
            var t = u(e);
            Sb.hasClass(d, t) || Sb.addClass(d, t);
          }),
          e.fire("PreviewFormats"),
          Sb.setStyles(r, { position: "absolute", left: -65535 }),
          e.getBody().appendChild(r),
          (o = Sb.getStyle(e.getBody(), "fontSize", !0)),
          (o = /px$/.test(o) ? parseInt(o, 10) : 0),
          _b(a.split(" "), function (t) {
            var n = Sb.getStyle(d, t, !0);
            if (
              !(
                ("background-color" === t &&
                  /transparent|rgba\s*\([^)]+,\s*0\)/.test(n) &&
                  ((n = Sb.getStyle(e.getBody(), t, !0)),
                  "#ffffff" === Sb.toHex(n).toLowerCase())) ||
                ("color" === t && "#000000" === Sb.toHex(n).toLowerCase())
              )
            ) {
              if ("font-size" === t && /em|%$/.test(n)) {
                if (0 === o) return;
                n = (parseFloat(n) / (/%$/.test(n) ? 100 : 1)) * o + "px";
              }
              "border" === t && n && (i += "padding:0 2px;"),
                (i += t + ":" + n + ";");
            }
          }),
          e.fire("AfterPreviewFormats"),
          Sb.remove(r),
          i
        );
      },
      Ab = function (e) {
        var t = xb(e),
          n = xu(null);
        return (
          (function (e) {
            e.addShortcut("meta+b", "", "Bold"),
              e.addShortcut("meta+i", "", "Italic"),
              e.addShortcut("meta+u", "", "Underline");
            for (var t = 1; t <= 6; t++)
              e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
            e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]),
              e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]),
              e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
          })(e),
          _h(e),
          {
            get: t.get,
            has: t.has,
            register: t.register,
            unregister: t.unregister,
            apply: function (t, n, r) {
              !(function (e, t, n, r) {
                Hv(e).formatter.apply(t, n, r);
              })(e, t, n, r);
            },
            remove: function (t, n, r, o) {
              !(function (e, t, n, r, o) {
                Hv(e).formatter.remove(t, n, r, o);
              })(e, t, n, r, o);
            },
            toggle: function (t, n, r) {
              !(function (e, t, n, r) {
                Hv(e).formatter.toggle(t, n, r);
              })(e, t, n, r);
            },
            match: function (t, n, r) {
              return (function (e, t, n, r) {
                return Hv(e).formatter.match(t, n, r);
              })(e, t, n, r);
            },
            closest: function (t) {
              return (function (e, t) {
                return Hv(e).formatter.closest(t);
              })(e, t);
            },
            matchAll: function (t, n) {
              return (function (e, t, n) {
                return Hv(e).formatter.matchAll(t, n);
              })(e, t, n);
            },
            matchNode: function (t, n, r, o) {
              return (function (e, t, n, r, o) {
                return Hv(e).formatter.matchNode(t, n, r, o);
              })(e, t, n, r, o);
            },
            canApply: function (t) {
              return (function (e, t) {
                return Hv(e).formatter.canApply(t);
              })(e, t);
            },
            formatChanged: function (t, r, o) {
              return (function (e, t, n, r, o) {
                return (
                  void 0 === o && (o = !1),
                  Hv(e).formatter.formatChanged(t, n, r, o)
                );
              })(e, n, t, r, o);
            },
            getCssText: S(kb, e),
          }
        );
      },
      Rb = function (e) {
        var t = xu(M.none()),
          n = xu(0),
          r = xu(0),
          o = {
            data: [],
            typing: !1,
            beforeChange: function () {
              !(function (e, t, n) {
                Hv(e).undoManager.beforeChange(t, n);
              })(e, n, t);
            },
            add: function (i, a) {
              return (function (e, t, n, r, o, i, a) {
                return Hv(e).undoManager.addUndoLevel(t, n, r, o, i, a);
              })(e, o, r, n, t, i, a);
            },
            undo: function () {
              return (function (e, t, n, r) {
                return Hv(e).undoManager.undo(t, n, r);
              })(e, o, n, r);
            },
            redo: function () {
              return (function (e, t, n) {
                return Hv(e).undoManager.redo(t, n);
              })(e, r, o.data);
            },
            clear: function () {
              !(function (e, t, n) {
                Hv(e).undoManager.clear(t, n);
              })(e, o, r);
            },
            reset: function () {
              !(function (e, t) {
                Hv(e).undoManager.reset(t);
              })(e, o);
            },
            hasUndo: function () {
              return (function (e, t, n) {
                return Hv(e).undoManager.hasUndo(t, n);
              })(e, o, r);
            },
            hasRedo: function () {
              return (function (e, t, n) {
                return Hv(e).undoManager.hasRedo(t, n);
              })(e, o, r);
            },
            transact: function (t) {
              return (function (e, t, n, r) {
                return Hv(e).undoManager.transact(t, n, r);
              })(e, o, n, t);
            },
            ignore: function (t) {
              !(function (e, t, n) {
                Hv(e).undoManager.ignore(t, n);
              })(e, n, t);
            },
            extra: function (t, n) {
              !(function (e, t, n, r, o) {
                Hv(e).undoManager.extra(t, n, r, o);
              })(e, o, r, t, n);
            },
          };
        return (
          jv(e) ||
            (function (e, t, n) {
              var r = xu(!1),
                o = function (e) {
                  Mv(t, !1, n), t.add({}, e);
                };
              e.on("init", function () {
                t.add();
              }),
                e.on("BeforeExecCommand", function (e) {
                  var r = e.command.toLowerCase();
                  "undo" !== r &&
                    "redo" !== r &&
                    "mcerepaint" !== r &&
                    (Fv(t, n), t.beforeChange());
                }),
                e.on("ExecCommand", function (e) {
                  var t = e.command.toLowerCase();
                  "undo" !== t && "redo" !== t && "mcerepaint" !== t && o(e);
                }),
                e.on("ObjectResizeStart cut", function () {
                  t.beforeChange();
                }),
                e.on("SaveContent ObjectResized blur", o),
                e.on("dragend", o),
                e.on("keyup", function (n) {
                  var i = n.keyCode;
                  n.isDefaultPrevented() ||
                    (((i >= 33 && i <= 36) ||
                      (i >= 37 && i <= 40) ||
                      45 === i ||
                      n.ctrlKey) &&
                      (o(), e.nodeChanged()),
                    (46 !== i && 8 !== i) || e.nodeChanged(),
                    r.get() &&
                      t.typing &&
                      !1 === Lv(Dv(e), t.data[0]) &&
                      (!1 === e.isDirty() &&
                        (e.setDirty(!0),
                        e.fire("change", {
                          level: t.data[0],
                          lastLevel: null,
                        })),
                      e.fire("TypingUndo"),
                      r.set(!1),
                      e.nodeChanged()));
                }),
                e.on("keydown", function (e) {
                  var i = e.keyCode;
                  if (!e.isDefaultPrevented())
                    if (
                      (i >= 33 && i <= 36) ||
                      (i >= 37 && i <= 40) ||
                      45 === i
                    )
                      t.typing && o(e);
                    else {
                      var a = (e.ctrlKey && !e.altKey) || e.metaKey;
                      !(i < 16 || i > 20) ||
                        224 === i ||
                        91 === i ||
                        t.typing ||
                        a ||
                        (t.beforeChange(),
                        Mv(t, !0, n),
                        t.add({}, e),
                        r.set(!0));
                    }
                }),
                e.on("mousedown", function (e) {
                  t.typing && o(e);
                }),
                e.on("input", function (e) {
                  var t;
                  e.inputType &&
                    ("insertReplacementText" === e.inputType ||
                      ("insertText" === (t = e).inputType && null === t.data) ||
                      (function (e) {
                        return (
                          "insertFromPaste" === e.inputType ||
                          "insertFromDrop" === e.inputType
                        );
                      })(e)) &&
                    o(e);
                }),
                e.on("AddUndo Undo Redo ClearUndos", function (t) {
                  t.isDefaultPrevented() || e.nodeChanged();
                });
            })(e, o, n),
          (function (e) {
            e.addShortcut("meta+z", "", "Undo"),
              e.addShortcut("meta+y,meta+shift+z", "", "Redo");
          })(e),
          o
        );
      },
      Tb = [
        9,
        27,
        ad.HOME,
        ad.END,
        19,
        20,
        44,
        144,
        145,
        33,
        34,
        45,
        16,
        17,
        18,
        91,
        92,
        93,
        ad.DOWN,
        ad.UP,
        ad.LEFT,
        ad.RIGHT,
      ].concat(_t.browser.isFirefox() ? [224] : []),
      Db = "data-mce-placeholder",
      Ob = function (e) {
        return "keydown" === e.type || "keyup" === e.type;
      },
      Bb = function (e) {
        var t = e.keyCode;
        return t === ad.BACKSPACE || t === ad.DELETE;
      },
      Pb = function (e) {
        var t = e.dom,
          n = rs(e),
          r = (function (e) {
            return e.getParam(
              "placeholder",
              es.getAttrib(e.getElement(), "placeholder"),
              "string"
            );
          })(e),
          o = function (i, a) {
            if (
              !(function (e) {
                if (Ob(e)) {
                  var t = e.keyCode;
                  return (
                    !Bb(e) &&
                    (ad.metaKeyPressed(e) ||
                      e.altKey ||
                      (t >= 112 && t <= 123) ||
                      V(Tb, t))
                  );
                }
                return !1;
              })(i)
            ) {
              var u = e.getBody(),
                c =
                  !(function (e) {
                    return (
                      Ob(e) &&
                      !(Bb(e) || ("keyup" === e.type && 229 === e.keyCode))
                    );
                  })(i) &&
                  (function (e, t, n) {
                    if (ni(Tt.fromDom(t), !1)) {
                      var r = "" === n,
                        o = t.firstElementChild;
                      return (
                        !o ||
                        (!e.getStyle(t.firstElementChild, "padding-left") &&
                          !e.getStyle(t.firstElementChild, "padding-right") &&
                          (r ? !e.isBlock(o) : n === o.nodeName.toLowerCase()))
                      );
                    }
                    return !1;
                  })(t, u, n);
              (("" !== t.getAttrib(u, Db)) !== c || a) &&
                (t.setAttrib(u, Db, c ? r : null),
                t.setAttrib(u, "aria-placeholder", c ? r : null),
                (function (e, t) {
                  e.fire("PlaceholderToggle", { state: t });
                })(e, c),
                e.on(c ? "keydown" : "keyup", o),
                e.off(c ? "keyup" : "keydown", o));
            }
          };
        r &&
          e.on("init", function (t) {
            o(t, !0),
              e.on("change SetContent ExecCommand", o),
              e.on("paste", function (t) {
                return ao.setEditorTimeout(e, function () {
                  return o(t);
                });
              });
          });
      },
      Lb = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
      Ib = function (e, t) {
        return Ot(
          Tt.fromDom(t),
          (function (e) {
            return e.getParam(
              "inline_boundaries_selector",
              "a[href],code,.mce-annotation",
              "string"
            );
          })(e)
        );
      },
      Mb = function (e) {
        return (
          "rtl" === vu.DOM.getStyle(e, "direction", !0) ||
          ((t = e.textContent), Lb.test(t))
        );
        var t;
      },
      Fb = function (e, t, n) {
        var r = (function (e, t, n) {
          return K(vu.DOM.getParents(n.container(), "*", t), e);
        })(e, t, n);
        return M.from(r[r.length - 1]);
      },
      Ub = function (e, t) {
        if (!t) return t;
        var n = t.container(),
          r = t.offset();
        return e
          ? Ro(n)
            ? jn(n.nextSibling)
              ? Rc(n.nextSibling, 0)
              : Rc.after(n)
            : Oo(t)
            ? Rc(n, r + 1)
            : t
          : Ro(n)
          ? jn(n.previousSibling)
            ? Rc(n.previousSibling, n.previousSibling.data.length)
            : Rc.before(n)
          : Bo(t)
          ? Rc(n, r - 1)
          : t;
      },
      jb = S(Ub, !0),
      zb = S(Ub, !1),
      Vb = function (e, t) {
        return It(e, t)
          ? Yr(
              t,
              function (e) {
                return ho(e) || yo(e);
              },
              (function (e) {
                return function (t) {
                  return Pt(e, Tt.fromDom(t.dom.parentNode));
                };
              })(e)
            )
          : M.none();
      },
      Hb = function (e) {
        e.dom.isEmpty(e.getBody()) &&
          (e.setContent(""),
          (function (e) {
            var t = e.getBody(),
              n =
                t.firstChild && e.dom.isBlock(t.firstChild) ? t.firstChild : t;
            e.selection.setCursorLocation(n, 0);
          })(e));
      },
      qb = function (e, t) {
        return { from: e, to: t };
      },
      $b = function (e, t) {
        var n = Tt.fromDom(e),
          r = Tt.fromDom(t.container());
        return Vb(n, r).map(function (e) {
          return (function (e, t) {
            return { block: e, position: t };
          })(e, t);
        });
      },
      Wb = function (e, t, n) {
        var r = $b(e, Rc.fromRangeStart(n)),
          o = r.bind(function (n) {
            return Bl(t, e, n.position).bind(function (n) {
              return $b(e, n).map(function (n) {
                return (function (e, t, n) {
                  return qn(n.position.getNode()) && !1 === ni(n.block)
                    ? Il(!1, n.block.dom)
                        .bind(function (r) {
                          return r.isEqual(n.position)
                            ? Bl(t, e, r).bind(function (t) {
                                return $b(e, t);
                              })
                            : M.some(n);
                        })
                        .getOr(n)
                    : n;
                })(e, t, n);
              });
            });
          });
        return ec(r, o, qb).filter(function (e) {
          return (
            (function (e) {
              return !1 === Pt(e.from.block, e.to.block);
            })(e) &&
            (function (e) {
              return Yt(e.from.block)
                .bind(function (t) {
                  return Yt(e.to.block).filter(function (e) {
                    return Pt(t, e);
                  });
                })
                .isSome();
            })(e) &&
            (function (e) {
              return !1 === Kn(e.from.block.dom) && !1 === Kn(e.to.block.dom);
            })(e)
          );
        });
      },
      Kb = function (e) {
        var t = (function (e) {
          var t = en(e);
          return J(t, mo).fold(
            function () {
              return t;
            },
            function (e) {
              return t.slice(0, e);
            }
          );
        })(e);
        return $(t, yn), t;
      },
      Xb = function (e, t) {
        var n = Cp(t, e);
        return G(n.reverse(), function (e) {
          return ni(e);
        }).each(yn);
      },
      Yb = function (e, t, n, r) {
        if (ni(n)) return hp(n), Ul(n.dom);
        0 ===
          K(Qt(r), function (e) {
            return !ni(e);
          }).length &&
          ni(t) &&
          dn(r, Tt.fromTag("br"));
        var o = Fl(n.dom, Rc.before(r.dom));
        return (
          $(Kb(t), function (e) {
            dn(r, e);
          }),
          Xb(e, t),
          o
        );
      },
      Gb = function (e, t, n) {
        if (ni(n)) return yn(n), ni(t) && hp(t), Ul(t.dom);
        var r = jl(n.dom);
        return (
          $(Kb(t), function (e) {
            gn(n, e);
          }),
          Xb(e, t),
          r
        );
      },
      Jb = function (e, t) {
        return It(t, e)
          ? (function (e, t) {
              var n = Cp(t, e);
              return M.from(n[n.length - 1]);
            })(t, e)
          : M.none();
      },
      Qb = function (e, t) {
        Il(e, t.dom)
          .map(function (e) {
            return e.getNode();
          })
          .map(Tt.fromDom)
          .filter(go)
          .each(yn);
      },
      Zb = function (e, t, n) {
        return (
          Qb(!0, t), Qb(!1, n), Jb(t, n).fold(S(Gb, e, t, n), S(Yb, e, t, n))
        );
      },
      eC = function (e, t, n, r) {
        return t ? Zb(e, r, n) : Zb(e, n, r);
      },
      tC = function (e, t) {
        var n = Tt.fromDom(e.getBody()),
          r = (function (e, t, n) {
            return n.collapsed ? Wb(e, t, n) : M.none();
          })(n.dom, t, e.selection.getRng()).bind(function (e) {
            return eC(n, t, e.from.block, e.to.block);
          });
        return (
          r.each(function (t) {
            e.selection.setRng(t.toRange());
          }),
          r.isSome()
        );
      },
      nC = function (e, t) {
        var n = Tt.fromDom(t),
          r = S(Pt, e);
        return Xr(n, Co, r).isSome();
      },
      rC = function (e, t) {
        var n = Fl(e.dom, Rc.fromRangeStart(t)).isNone(),
          r = Ml(e.dom, Rc.fromRangeEnd(t)).isNone();
        return (
          !(function (e, t) {
            return nC(e, t.startContainer) || nC(e, t.endContainer);
          })(e, t) &&
          n &&
          r
        );
      },
      oC = function (e) {
        var t = Tt.fromDom(e.getBody()),
          n = e.selection.getRng();
        return rC(t, n)
          ? (function (e) {
              return e.setContent(""), e.selection.setCursorLocation(), !0;
            })(e)
          : (function (e, t) {
              var n = t.getRng();
              return ec(
                Vb(e, Tt.fromDom(n.startContainer)),
                Vb(e, Tt.fromDom(n.endContainer)),
                function (r, o) {
                  return (
                    !1 === Pt(r, o) &&
                    (n.deleteContents(),
                    eC(e, !0, r, o).each(function (e) {
                      t.setRng(e.toRange());
                    }),
                    !0)
                  );
                }
              ).getOr(!1);
            })(t, e.selection);
      },
      iC = function (e, t) {
        return !e.selection.isCollapsed() && oC(e);
      },
      aC = Wn,
      uC = Kn,
      cC = function (e, t, n, r, o) {
        return M.from(t._selectionOverrides.showCaret(e, n, r, o));
      },
      sC = function (e, t) {
        return e
          .fire("BeforeObjectSelected", { target: t })
          .isDefaultPrevented()
          ? M.none()
          : M.some(
              (function (e) {
                var t = e.ownerDocument.createRange();
                return t.selectNode(e), t;
              })(t)
            );
      },
      lC = function (e, t, n) {
        var r = cl(1, e.getBody(), t),
          o = Rc.fromRangeStart(r),
          i = o.getNode();
        if (zs(i)) return cC(1, e, i, !o.isAtEnd(), !1);
        var a = o.getNode(!0);
        if (zs(a)) return cC(1, e, a, !1, !1);
        var u = e.dom.getParent(o.getNode(), function (e) {
          return uC(e) || aC(e);
        });
        return zs(u) ? cC(1, e, u, !1, n) : M.none();
      },
      fC = function (e, t, n) {
        return t.collapsed ? lC(e, t, n).getOr(t) : t;
      },
      dC = function (e) {
        return mp(e) || sp(e);
      },
      mC = function (e) {
        return pp(e) || lp(e);
      },
      pC = function (e, t, n, r, o, i) {
        return (
          cC(r, e, i.getNode(!o), o, !0).each(function (n) {
            if (t.collapsed) {
              var r = t.cloneRange();
              o
                ? r.setEnd(n.startContainer, n.startOffset)
                : r.setStart(n.endContainer, n.endOffset),
                r.deleteContents();
            } else t.deleteContents();
            e.selection.setRng(n);
          }),
          (function (e, t) {
            jn(t) && 0 === t.data.length && e.remove(t);
          })(e.dom, n),
          !0
        );
      },
      gC = function (e, t) {
        return (function (e, t) {
          var n = e.selection.getRng();
          if (!jn(n.commonAncestorContainer)) return !1;
          var r = t ? Tc.Forwards : Tc.Backwards,
            o = Al(e.getBody()),
            i = S(dl, t ? o.next : o.prev),
            a = t ? dC : mC,
            u = ll(r, e.getBody(), n),
            c = Ub(t, i(u));
          if (!c || !ml(u, c)) return !1;
          if (a(c)) return pC(e, n, u.getNode(), r, t, c);
          var s = i(c);
          return !!(s && a(s) && ml(c, s)) && pC(e, n, u.getNode(), r, t, s);
        })(e, t);
      },
      hC = Sr([
        { remove: ["element"] },
        { moveToElement: ["element"] },
        { moveToPosition: ["position"] },
      ]),
      vC = function (e, t, n, r) {
        var o = r.getNode(!1 === t);
        return Vb(Tt.fromDom(e), Tt.fromDom(n.getNode()))
          .map(function (e) {
            return ni(e) ? hC.remove(e.dom) : hC.moveToElement(o);
          })
          .orThunk(function () {
            return M.some(hC.moveToElement(o));
          });
      },
      yC = function (e, t, n) {
        return Bl(t, e, n).bind(function (r) {
          return (
            (o = r.getNode()),
            Co(Tt.fromDom(o)) ||
            yo(Tt.fromDom(o)) ||
            (function (e, t, n, r) {
              var o = function (t) {
                return po(Tt.fromDom(t)) && !tl(n, r, e);
              };
              return sl(!t, n).fold(function () {
                return sl(t, r).fold(O, o);
              }, o);
            })(e, t, n, r)
              ? M.none()
              : (t && Kn(r.getNode())) || (!1 === t && Kn(r.getNode(!0)))
              ? vC(e, t, n, r)
              : (t && pp(n)) || (!1 === t && mp(n))
              ? M.some(hC.moveToPosition(r))
              : M.none()
          );
          var o;
        });
      },
      bC = function (e, t, n) {
        return (function (e, t) {
          var n = t.getNode(!1 === e),
            r = e ? "after" : "before";
          return On(n) && n.getAttribute("data-mce-caret") === r;
        })(t, n)
          ? (function (e, t) {
              return e && Kn(t.nextSibling)
                ? M.some(hC.moveToElement(t.nextSibling))
                : !1 === e && Kn(t.previousSibling)
                ? M.some(hC.moveToElement(t.previousSibling))
                : M.none();
            })(t, n.getNode(!1 === t)).fold(function () {
              return yC(e, t, n);
            }, M.some)
          : yC(e, t, n).bind(function (t) {
              return (function (e, t, n) {
                return n.fold(
                  function (e) {
                    return M.some(hC.remove(e));
                  },
                  function (e) {
                    return M.some(hC.moveToElement(e));
                  },
                  function (n) {
                    return tl(t, n, e)
                      ? M.none()
                      : M.some(hC.moveToPosition(n));
                  }
                );
              })(e, n, t);
            });
      },
      CC = function (e, t) {
        return M.from(rd(e.getBody(), t));
      },
      wC = function (e, t) {
        var n = e.selection.getNode();
        return CC(e, n)
          .filter(Kn)
          .fold(function () {
            return (function (e, t, n) {
              var r = cl(t ? 1 : -1, e, n),
                o = Rc.fromRangeStart(r),
                i = Tt.fromDom(e);
              return !1 === t && pp(o)
                ? M.some(hC.remove(o.getNode(!0)))
                : t && mp(o)
                ? M.some(hC.remove(o.getNode()))
                : !1 === t && mp(o) && Op(i, o)
                ? Bp(i, o).map(function (e) {
                    return hC.remove(e.getNode());
                  })
                : t && pp(o) && Dp(i, o)
                ? Pp(i, o).map(function (e) {
                    return hC.remove(e.getNode());
                  })
                : bC(e, t, o);
            })(e.getBody(), t, e.selection.getRng()).exists(function (n) {
              return n.fold(
                (function (e, t) {
                  return function (n) {
                    return (
                      e._selectionOverrides.hideFakeCaret(),
                      sg(e, t, Tt.fromDom(n)),
                      !0
                    );
                  };
                })(e, t),
                (function (e, t) {
                  return function (n) {
                    var r = t ? Rc.before(n) : Rc.after(n);
                    return e.selection.setRng(r.toRange()), !0;
                  };
                })(e, t),
                (function (e) {
                  return function (t) {
                    return e.selection.setRng(t.toRange()), !0;
                  };
                })(e)
              );
            });
          }, B);
      },
      xC = function (e, t) {
        var n = e.selection.getNode();
        return (
          !!Kn(n) &&
          CC(e, n.parentNode)
            .filter(Kn)
            .fold(function () {
              var n;
              return (
                (n = Tt.fromDom(e.getBody())),
                $(Fu(n, ".mce-offscreen-selection"), yn),
                sg(e, t, Tt.fromDom(e.selection.getNode())),
                Hb(e),
                !0
              );
            }, B)
        );
      },
      _C = function (e) {
        var t = e.dom,
          n = e.selection,
          r = rd(e.getBody(), n.getNode());
        if (Wn(r) && t.isBlock(r) && t.isEmpty(r)) {
          var o = t.create("br", { "data-mce-bogus": "1" });
          t.setHTML(r, ""), r.appendChild(o), n.setRng(Rc.before(o).toRange());
        }
        return !0;
      },
      SC = function (e, t) {
        return e.selection.isCollapsed() ? wC(e, t) : xC(e, t);
      },
      EC = function (e, t) {
        return (
          !!e.selection.isCollapsed() &&
          (function (e, t) {
            var n = Rc.fromRangeStart(e.selection.getRng());
            return Bl(t, e.getBody(), n)
              .filter(function (e) {
                return t ? up(e) : cp(e);
              })
              .bind(function (e) {
                return M.from(nl(t ? 0 : -1, e));
              })
              .exists(function (t) {
                return e.selection.select(t), !0;
              });
          })(e, t)
        );
      },
      NC = jn,
      kC = function (e) {
        return NC(e) && e.data[0] === _o;
      },
      AC = function (e) {
        return NC(e) && e.data[e.data.length - 1] === _o;
      },
      RC = function (e) {
        return e.ownerDocument.createTextNode(_o);
      },
      TC = function (e, t) {
        return e
          ? (function (e) {
              if (NC(e.previousSibling))
                return (
                  AC(e.previousSibling) || e.previousSibling.appendData(_o),
                  e.previousSibling
                );
              if (NC(e)) return kC(e) || e.insertData(0, _o), e;
              var t = RC(e);
              return e.parentNode.insertBefore(t, e), t;
            })(t)
          : (function (e) {
              if (NC(e.nextSibling))
                return (
                  kC(e.nextSibling) || e.nextSibling.insertData(0, _o),
                  e.nextSibling
                );
              if (NC(e)) return AC(e) || e.appendData(_o), e;
              var t = RC(e);
              return (
                e.nextSibling
                  ? e.parentNode.insertBefore(t, e.nextSibling)
                  : e.parentNode.appendChild(t),
                t
              );
            })(t);
      },
      DC = S(TC, !0),
      OC = S(TC, !1),
      BC = function (e, t) {
        return jn(e.container()) ? TC(t, e.container()) : TC(t, e.getNode());
      },
      PC = function (e, t) {
        var n = t.get();
        return n && e.container() === n && Ro(n);
      },
      LC = function (e, t) {
        return t.fold(
          function (t) {
            Bs(e.get());
            var n = DC(t);
            return e.set(n), M.some(Rc(n, n.length - 1));
          },
          function (t) {
            return Ul(t).map(function (t) {
              if (PC(t, e)) return Rc(e.get(), 1);
              Bs(e.get());
              var n = BC(t, !0);
              return e.set(n), Rc(n, 1);
            });
          },
          function (t) {
            return jl(t).map(function (t) {
              if (PC(t, e)) return Rc(e.get(), e.get().length - 1);
              Bs(e.get());
              var n = BC(t, !1);
              return e.set(n), Rc(n, n.length - 1);
            });
          },
          function (t) {
            Bs(e.get());
            var n = OC(t);
            return e.set(n), M.some(Rc(n, 1));
          }
        );
      },
      IC = function (e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n].apply(null, t);
          if (r.isSome()) return r;
        }
        return M.none();
      },
      MC = Sr([
        { before: ["element"] },
        { start: ["element"] },
        { end: ["element"] },
        { after: ["element"] },
      ]),
      FC = function (e, t) {
        var n = el(t, e);
        return n || e;
      },
      UC = function (e, t, n) {
        var r = jb(n),
          o = FC(t, r.container());
        return Fb(e, o, r).fold(function () {
          return Ml(o, r)
            .bind(S(Fb, e, o))
            .map(function (e) {
              return MC.before(e);
            });
        }, M.none);
      },
      jC = function (e, t) {
        return null === Hl(e, t);
      },
      zC = function (e, t, n) {
        return Fb(e, t, n).filter(S(jC, t));
      },
      VC = function (e, t, n) {
        var r = zb(n);
        return zC(e, t, r).bind(function (e) {
          return Fl(e, r).isNone() ? M.some(MC.start(e)) : M.none();
        });
      },
      HC = function (e, t, n) {
        var r = jb(n);
        return zC(e, t, r).bind(function (e) {
          return Ml(e, r).isNone() ? M.some(MC.end(e)) : M.none();
        });
      },
      qC = function (e, t, n) {
        var r = zb(n),
          o = FC(t, r.container());
        return Fb(e, o, r).fold(function () {
          return Fl(o, r)
            .bind(S(Fb, e, o))
            .map(function (e) {
              return MC.after(e);
            });
        }, M.none);
      },
      $C = function (e) {
        return !1 === Mb(KC(e));
      },
      WC = function (e, t, n) {
        return IC([UC, VC, HC, qC], [e, t, n]).filter($C);
      },
      KC = function (e) {
        return e.fold(_, _, _, _);
      },
      XC = function (e) {
        return e.fold(x("before"), x("start"), x("end"), x("after"));
      },
      YC = function (e) {
        return e.fold(MC.before, MC.before, MC.after, MC.after);
      },
      GC = function (e) {
        return e.fold(MC.start, MC.start, MC.end, MC.end);
      },
      JC = function (e, t, n, r, o, i) {
        return ec(Fb(t, n, r), Fb(t, n, o), function (t, r) {
          return t !== r &&
            (function (e, t, n) {
              var r = el(t, e),
                o = el(n, e);
              return r && r === o;
            })(n, t, r)
            ? MC.after(e ? t : r)
            : i;
        }).getOr(i);
      },
      QC = function (e, t) {
        return e.fold(B, function (e) {
          return (r = t), !(XC((n = e)) === XC(r) && KC(n) === KC(r));
          var n, r;
        });
      },
      ZC = function (e, t) {
        return e
          ? t.fold(w(M.some, MC.start), M.none, w(M.some, MC.after), M.none)
          : t.fold(M.none, w(M.some, MC.before), M.none, w(M.some, MC.end));
      },
      ew = function (e, t, n, r) {
        var o = Ub(e, r),
          i = WC(t, n, o);
        return WC(t, n, o)
          .bind(S(ZC, e))
          .orThunk(function () {
            return (function (e, t, n, r, o) {
              var i = Ub(e, o);
              return Bl(e, n, i)
                .map(S(Ub, e))
                .fold(
                  function () {
                    return r.map(YC);
                  },
                  function (o) {
                    return WC(t, n, o)
                      .map(S(JC, e, t, n, i, o))
                      .filter(S(QC, r));
                  }
                )
                .filter($C);
            })(e, t, n, i, r);
          });
      };
    S(ew, !1), S(ew, !0);
    var tw,
      nw,
      rw = function (e, t, n) {
        var r = e ? 1 : -1;
        return (
          t.setRng(Rc(n.container(), n.offset() + r).toRange()),
          t.getSel().modify("move", e ? "forward" : "backward", "word"),
          !0
        );
      },
      ow = function (e, t) {
        var n = t.selection.getRng(),
          r = e ? Rc.fromRangeEnd(n) : Rc.fromRangeStart(n);
        return (
          !!(function (e) {
            return y(e.selection.getSel().modify);
          })(t) &&
          (e && Oo(r)
            ? rw(!0, t.selection, r)
            : !(e || !Bo(r)) && rw(!1, t.selection, r))
        );
      };
    ((nw = tw || (tw = {}))[(nw.Br = 0)] = "Br"),
      (nw[(nw.Block = 1)] = "Block"),
      (nw[(nw.Wrap = 2)] = "Wrap"),
      (nw[(nw.Eol = 3)] = "Eol");
    var iw,
      aw,
      uw = function (e, t) {
        return e === Tc.Backwards ? ee(t) : t;
      },
      cw = function (e, t, n) {
        return e === Tc.Forwards ? t.next(n) : t.prev(n);
      },
      sw = function (e, t, n, r) {
        return qn(r.getNode(t === Tc.Forwards))
          ? tw.Br
          : !1 === tl(n, r)
          ? tw.Block
          : tw.Wrap;
      },
      lw = function (e, t, n, r) {
        for (var o, i = Al(n), a = r, u = []; a && (o = cw(t, i, a)); ) {
          if (qn(o.getNode(!1)))
            return t === Tc.Forwards
              ? {
                  positions: uw(t, u).concat([o]),
                  breakType: tw.Br,
                  breakAt: M.some(o),
                }
              : { positions: uw(t, u), breakType: tw.Br, breakAt: M.some(o) };
          if (o.isVisible()) {
            if (e(a, o)) {
              var c = sw(0, t, a, o);
              return { positions: uw(t, u), breakType: c, breakAt: M.some(o) };
            }
            u.push(o), (a = o);
          } else a = o;
        }
        return { positions: uw(t, u), breakType: tw.Eol, breakAt: M.none() };
      },
      fw = function (e, t, n, r) {
        return t(n, r)
          .breakAt.map(function (r) {
            var o = t(n, r).positions;
            return e === Tc.Backwards ? o.concat(r) : [r].concat(o);
          })
          .getOr([]);
      },
      dw = function (e, t) {
        return Y(
          e,
          function (e, n) {
            return e.fold(
              function () {
                return M.some(n);
              },
              function (r) {
                return ec(
                  re(r.getClientRects()),
                  re(n.getClientRects()),
                  function (e, o) {
                    var i = Math.abs(t - e.left);
                    return Math.abs(t - o.left) <= i ? n : r;
                  }
                ).or(e);
              }
            );
          },
          M.none()
        );
      },
      mw = function (e, t) {
        return re(t.getClientRects()).bind(function (t) {
          return dw(e, t.left);
        });
      },
      pw = S(lw, Rc.isAbove, -1),
      gw = S(lw, Rc.isBelow, 1),
      hw = S(fw, -1, pw),
      vw = S(fw, 1, gw),
      yw = function (e) {
        var t = function (t) {
          return q(t, function (t) {
            return ((t = nc(t)).node = e), t;
          });
        };
        if (On(e)) return t(e.getClientRects());
        if (jn(e)) {
          var n = e.ownerDocument.createRange();
          return (
            n.setStart(e, 0), n.setEnd(e, e.data.length), t(n.getClientRects())
          );
        }
      },
      bw = function (e) {
        return Q(e, yw);
      };
    ((aw = iw || (iw = {}))[(aw.Up = -1)] = "Up"), (aw[(aw.Down = 1)] = "Down");
    var Cw,
      ww,
      xw = function (e, t, n, r, o, i) {
        var a = 0,
          u = [],
          c = function (r) {
            var i, c, l;
            for (
              l = bw([r]), -1 === e && (l = l.reverse()), i = 0;
              i < l.length;
              i++
            )
              if (((c = l[i]), !n(c, s))) {
                if ((u.length > 0 && t(c, Ne(u)) && a++, (c.line = a), o(c)))
                  return !0;
                u.push(c);
              }
          },
          s = Ne(i.getClientRects());
        if (!s) return u;
        var l = i.getNode();
        return (
          c(l),
          (function (e, t, n, r) {
            for (; (r = Zs(r, e, Xo, t)); ) if (n(r)) return;
          })(e, r, c, l),
          u
        );
      },
      _w = S(xw, iw.Up, ic, ac),
      Sw = S(xw, iw.Down, ac, ic),
      Ew = function (e) {
        return function (t) {
          return (function (e, t) {
            return t.line > e;
          })(e, t);
        };
      },
      Nw = function (e) {
        return function (t) {
          return (function (e, t) {
            return t.line === e;
          })(e, t);
        };
      },
      kw = Kn,
      Aw = Zs,
      Rw = function (e, t) {
        return Math.abs(e.left - t);
      },
      Tw = function (e, t) {
        return Math.abs(e.right - t);
      },
      Dw = function (e, t) {
        return e >= t.left && e <= t.right;
      },
      Ow = function (e, t) {
        return e >= t.top && e <= t.bottom;
      },
      Bw = function (e, t) {
        return Se(e, function (e, n) {
          var r = Math.min(Rw(e, t), Tw(e, t)),
            o = Math.min(Rw(n, t), Tw(n, t));
          return Dw(t, n)
            ? n
            : Dw(t, e)
            ? e
            : (o === r && kw(n.node)) || o < r
            ? n
            : e;
        });
      },
      Pw = function (e, t, n, r, o) {
        var i = Aw(r, e, Xo, t, !o);
        do {
          if (!i || n(i)) return;
        } while ((i = Aw(i, e, Xo, t)));
      },
      Lw = function (e, t, n) {
        var r = bw(
            (function (e) {
              return K(ie(e.getElementsByTagName("*")), Vs);
            })(e)
          ),
          o = K(r, S(Ow, n)),
          i = Bw(o, t);
        if (i) {
          var a = !Mn(i.node) && !Yn(i.node);
          if (
            (i = Bw(
              (function (e, t, n) {
                void 0 === n && (n = !0);
                var r = [],
                  o = function (e, n) {
                    var o = K(bw([n]), function (n) {
                      return !e(n, t);
                    });
                    return (r = r.concat(o)), 0 === o.length;
                  };
                return (
                  r.push(t),
                  Pw(iw.Up, e, S(o, ic), t.node, n),
                  Pw(iw.Down, e, S(o, ac), t.node, n),
                  r
                );
              })(e, i, a),
              t
            )) &&
            Vs(i.node)
          )
            return (function (e, t) {
              return { node: e.node, before: Rw(e, t) < Tw(e, t) };
            })(i, t);
        }
        return null;
      },
      Iw = function (e, t) {
        e.selection.setRng(t), $d(e, e.selection.getRng());
      },
      Mw = function (e, t, n) {
        return M.some(fC(e, t, n));
      },
      Fw = function (e, t, n, r, o, i) {
        var a = t === Tc.Forwards,
          u = Al(e.getBody()),
          c = S(dl, a ? u.next : u.prev),
          s = a ? r : o;
        if (!n.collapsed) {
          var l = cc(n);
          if (i(l)) return cC(t, e, l, t === Tc.Backwards, !1);
        }
        var f = ll(t, e.getBody(), n);
        if (s(f)) return sC(e, f.getNode(!a));
        var d = Ub(a, c(f)),
          m = (function (e) {
            return Ao(e.startContainer);
          })(n);
        if (!d) return m ? M.some(n) : M.none();
        if (s(d)) return cC(t, e, d.getNode(!a), a, !1);
        var p = c(d);
        return p && s(p) && ml(d, p)
          ? cC(t, e, p.getNode(!a), a, !1)
          : m
          ? Mw(e, d.toRange(), !1)
          : M.none();
      },
      Uw = function (e, t, n, r, o, i) {
        var a = ll(t, e.getBody(), n),
          u = Ne(a.getClientRects()),
          c = t === iw.Down;
        if (!u) return M.none();
        var s,
          l = (c ? Sw : _w)(e.getBody(), Ew(1), a),
          f = K(l, Nw(1)),
          d = u.left,
          m = Bw(f, d);
        if (m && i(m.node)) {
          var p = Math.abs(d - m.left),
            g = Math.abs(d - m.right);
          return cC(t, e, m.node, p < g, !1);
        }
        if ((s = r(a) ? a.getNode() : o(a) ? a.getNode(!0) : cc(n))) {
          var h = (function (e, t, n, r) {
              var o,
                i,
                a,
                u,
                c,
                s = Al(t),
                l = [],
                f = 0,
                d = function (e) {
                  return Ne(e.getClientRects());
                };
              1 === e
                ? ((o = s.next), (i = ac), (a = ic), (u = Rc.after(r)))
                : ((o = s.prev), (i = ic), (a = ac), (u = Rc.before(r)));
              var m = d(u);
              do {
                if (u.isVisible() && !a((c = d(u)), m)) {
                  if (
                    (l.length > 0 && i(c, Ne(l)) && f++,
                    ((c = nc(c)).position = u),
                    (c.line = f),
                    n(c))
                  )
                    return l;
                  l.push(c);
                }
              } while ((u = o(u)));
              return l;
            })(t, e.getBody(), Ew(1), s),
            v = Bw(K(h, Nw(1)), d);
          if (v) return Mw(e, v.position.toRange(), !1);
          if ((v = Ne(K(h, Nw(0))))) return Mw(e, v.position.toRange(), !1);
        }
        return 0 === f.length
          ? jw(e, c)
              .filter(c ? o : r)
              .map(function (t) {
                return fC(e, t.toRange(), !1);
              })
          : M.none();
      },
      jw = function (e, t) {
        var n = e.selection.getRng(),
          r = e.getBody();
        if (t) {
          var o = Rc.fromRangeEnd(n),
            i = gw(r, o);
          return oe(i.positions);
        }
        return (o = Rc.fromRangeStart(n)), (i = pw(r, o)), re(i.positions);
      },
      zw = function (e, t, n) {
        return jw(e, t)
          .filter(n)
          .exists(function (t) {
            return e.selection.setRng(t.toRange()), !0;
          });
      },
      Vw = function (e, t) {
        var n = e.dom.createRng();
        n.setStart(t.container(), t.offset()),
          n.setEnd(t.container(), t.offset()),
          e.selection.setRng(n);
      },
      Hw = function (e, t) {
        e
          ? t.setAttribute("data-mce-selected", "inline-boundary")
          : t.removeAttribute("data-mce-selected");
      },
      qw = function (e, t, n) {
        return LC(t, n).map(function (t) {
          return Vw(e, t), n;
        });
      },
      $w = function (e, t) {
        if (e.selection.isCollapsed() && !0 !== e.composing && t.get()) {
          var n = Rc.fromRangeStart(e.selection.getRng());
          Rc.isTextPosition(n) &&
            !1 ===
              (function (e) {
                return Oo(e) || Bo(e);
              })(n) &&
            (Vw(e, Os(t.get(), n)), t.set(null));
        }
      },
      Ww = function (e, t, n) {
        return (
          !!ws(e) &&
          (function (e, t, n) {
            var r = e.getBody(),
              o = Rc.fromRangeStart(e.selection.getRng()),
              i = S(Ib, e);
            return ew(n, i, r, o).bind(function (n) {
              return qw(e, t, n);
            });
          })(e, t, n).isSome()
        );
      },
      Kw = function (e, t, n) {
        return !!ws(t) && ow(e, t);
      },
      Xw = function (e) {
        var t = xu(null),
          n = S(Ib, e);
        return (
          e.on("NodeChange", function (r) {
            var o, i, a, u, c, s;
            !ws(e) ||
              (_t.browser.isIE() && r.initial) ||
              ((o = n),
              (i = e.dom),
              (a = r.parents),
              (u = q(
                Fu(
                  Tt.fromDom(i.getRoot()),
                  '*[data-mce-selected="inline-boundary"]'
                ),
                function (e) {
                  return e.dom;
                }
              )),
              (c = K(u, o)),
              (s = K(a, o)),
              $(te(c, s), S(Hw, !1)),
              $(te(s, c), S(Hw, !0)),
              $w(e, t),
              (function (e, t, n, r) {
                if (t.selection.isCollapsed()) {
                  var o = K(r, e);
                  $(o, function (r) {
                    var o = Rc.fromRangeStart(t.selection.getRng());
                    WC(e, t.getBody(), o).bind(function (e) {
                      return qw(t, n, e);
                    });
                  });
                }
              })(n, e, t, r.parents));
          }),
          t
        );
      },
      Yw = S(Kw, !0),
      Gw = S(Kw, !1),
      Jw = function (e, t, n) {
        if (ws(e)) {
          var r = jw(e, t).getOrThunk(function () {
            var n = e.selection.getRng();
            return t ? Rc.fromRangeEnd(n) : Rc.fromRangeStart(n);
          });
          return WC(S(Ib, e), e.getBody(), r).exists(function (t) {
            var r = YC(t);
            return LC(n, r).exists(function (t) {
              return Vw(e, t), !0;
            });
          });
        }
        return !1;
      },
      Qw = function (e, t) {
        return function (n) {
          return LC(t, n).exists(function (t) {
            return Vw(e, t), !0;
          });
        };
      },
      Zw = function (e, t, n, r) {
        var o = e.getBody(),
          i = S(Ib, e);
        e.undoManager.ignore(function () {
          e.selection.setRng(
            (function (e, t) {
              var n = document.createRange();
              return (
                n.setStart(e.container(), e.offset()),
                n.setEnd(t.container(), t.offset()),
                n
              );
            })(n, r)
          ),
            e.execCommand("Delete"),
            WC(i, o, Rc.fromRangeStart(e.selection.getRng()))
              .map(GC)
              .map(Qw(e, t));
        }),
          e.nodeChanged();
      },
      ex = function (e, t, n, r) {
        var o = (function (e, t) {
            return el(t, e) || e;
          })(e.getBody(), r.container()),
          i = S(Ib, e),
          a = WC(i, o, r);
        return a
          .bind(function (e) {
            return n
              ? e.fold(x(M.some(GC(e))), M.none, x(M.some(YC(e))), M.none)
              : e.fold(M.none, x(M.some(YC(e))), M.none, x(M.some(GC(e))));
          })
          .map(Qw(e, t))
          .getOrThunk(function () {
            var u = Pl(n, o, r),
              c = u.bind(function (e) {
                return WC(i, o, e);
              });
            return ec(a, c, function () {
              return Fb(i, o, r).exists(function (t) {
                return (
                  !!(function (e) {
                    return ec(Ul(e), jl(e), function (t, n) {
                      var r = Ub(!0, t),
                        o = Ub(!1, n);
                      return Ml(e, r).forall(function (e) {
                        return e.isEqual(o);
                      });
                    }).getOr(!0);
                  })(t) && (sg(e, n, Tt.fromDom(t)), !0)
                );
              });
            })
              .orThunk(function () {
                return c.bind(function (o) {
                  return u.map(function (o) {
                    return n ? Zw(e, t, r, o) : Zw(e, t, o, r), !0;
                  });
                });
              })
              .getOr(!1);
          });
      },
      tx = function (e, t, n) {
        if (e.selection.isCollapsed() && ws(e)) {
          var r = Rc.fromRangeStart(e.selection.getRng());
          return ex(e, t, n, r);
        }
        return !1;
      },
      nx = function (e) {
        return 1 === en(e).length;
      },
      rx = function (e, t, n, r) {
        var o = S(Sh, t),
          i = q(K(r, o), function (e) {
            return e.dom;
          });
        if (0 === i.length) sg(t, e, n);
        else {
          var a = (function (e, t) {
            var n = vh(!1),
              r = wh(t, n.dom);
            return dn(Tt.fromDom(e), n), yn(Tt.fromDom(e)), Rc(r, 0);
          })(n.dom, i);
          t.selection.setRng(a.toRange());
        }
      },
      ox = function (e, t) {
        var n = Tt.fromDom(e.getBody()),
          r = Tt.fromDom(e.selection.getStart()),
          o = K(
            (function (e, t) {
              var n = Cp(t, e);
              return J(n, mo).fold(x(n), function (e) {
                return n.slice(0, e);
              });
            })(n, r),
            nx
          );
        return oe(o).exists(function (n) {
          var r,
            i = Rc.fromRangeStart(e.selection.getRng());
          return !(
            !(function (e, t, n) {
              return ec(Ul(n), jl(n), function (r, o) {
                var i = Ub(!0, r),
                  a = Ub(!1, o),
                  u = Ub(!1, t);
                return e
                  ? Ml(n, u).exists(function (e) {
                      return e.isEqual(a) && t.isEqual(i);
                    })
                  : Fl(n, u).exists(function (e) {
                      return e.isEqual(i) && t.isEqual(a);
                    });
              }).getOr(!0);
            })(t, i, n.dom) ||
            ((r = n), Vl(r.dom) && gh(r.dom)) ||
            (rx(t, e, n, o), 0)
          );
        });
      },
      ix = function (e, t) {
        return !!e.selection.isCollapsed() && ox(e, t);
      },
      ax = function (e, t, n) {
        return (
          e._selectionOverrides.hideFakeCaret(), sg(e, t, Tt.fromDom(n)), !0
        );
      },
      ux = function (e, t) {
        return e.selection.isCollapsed()
          ? (function (e, t) {
              var n = t ? sp : lp,
                r = t ? Tc.Forwards : Tc.Backwards,
                o = ll(r, e.getBody(), e.selection.getRng());
              return n(o)
                ? ax(e, t, o.getNode(!t))
                : M.from(Ub(t, o))
                    .filter(function (e) {
                      return n(e) && ml(o, e);
                    })
                    .exists(function (n) {
                      return ax(e, t, n.getNode(!t));
                    });
            })(e, t)
          : (function (e, t) {
              var n = e.selection.getNode();
              return !!Yn(n) && ax(e, t, n);
            })(e, t);
      },
      cx = function (e) {
        var t = parseInt(e, 10);
        return isNaN(t) ? 0 : t;
      },
      sx = function (e, t) {
        return (
          (e || "table" === Ut(t) ? "margin" : "padding") +
          ("rtl" === or(t, "direction") ? "-right" : "-left")
        );
      },
      lx = function (e) {
        var t = dx(e);
        return (
          !e.mode.isReadOnly() &&
          (t.length > 1 ||
            (function (e, t) {
              return Z(t, function (t) {
                var n = sx(gs(e), t),
                  r = ar(t, n).map(cx).getOr(0);
                return "false" !== e.dom.getContentEditable(t.dom) && r > 0;
              });
            })(e, t))
        );
      },
      fx = function (e) {
        return vo(e) || yo(e);
      },
      dx = function (e) {
        return K(q(e.selection.getSelectedBlocks(), Tt.fromDom), function (e) {
          return (
            !fx(e) &&
            !(function (e) {
              return Yt(e).map(fx).getOr(!1);
            })(e) &&
            Yr(e, function (e) {
              return Wn(e.dom) || Kn(e.dom);
            }).exists(function (e) {
              return Wn(e.dom);
            })
          );
        });
      },
      mx = function (e, t) {
        var n = e.dom,
          r = e.selection,
          o = e.formatter,
          i = (function (e) {
            return e.getParam("indentation", "40px", "string");
          })(e),
          a = /[a-z%]+$/i.exec(i)[0],
          u = parseInt(i, 10),
          c = gs(e),
          s = rs(e);
        e.queryCommandState("InsertUnorderedList") ||
          e.queryCommandState("InsertOrderedList") ||
          "" !== s ||
          n.getParent(r.getNode(), n.isBlock) ||
          o.apply("div"),
          $(dx(e), function (e) {
            !(function (e, t, n, r, o, i) {
              var a = sx(n, Tt.fromDom(i));
              if ("outdent" === t) {
                var u = Math.max(0, cx(i.style[a]) - r);
                e.setStyle(i, a, u ? u + o : "");
              } else (u = cx(i.style[a]) + r + o), e.setStyle(i, a, u);
            })(n, t, c, u, a, e.dom);
          });
      },
      px = function (e, t) {
        if (e.selection.isCollapsed() && lx(e)) {
          var n = e.dom,
            r = e.selection.getRng(),
            o = Rc.fromRangeStart(r),
            i = n.getParent(r.startContainer, n.isBlock);
          if (null !== i && Ep(Tt.fromDom(i), o)) return mx(e, "outdent"), !0;
        }
        return !1;
      },
      gx = function (e, t) {
        e.getDoc().execCommand(t, !1, null);
      },
      hx = function (e, t) {
        e.addCommand("delete", function () {
          !(function (e, t) {
            px(e) ||
              SC(e, !1) ||
              gC(e, !1) ||
              tx(e, t, !1) ||
              tC(e, !1) ||
              Ig(e) ||
              EC(e, !1) ||
              ux(e, !1) ||
              iC(e) ||
              ix(e, !1) ||
              (gx(e, "Delete"), Hb(e));
          })(e, t);
        }),
          e.addCommand("forwardDelete", function () {
            !(function (e, t) {
              SC(e, !0) ||
                gC(e, !0) ||
                tx(e, t, !0) ||
                tC(e, !0) ||
                Ig(e) ||
                EC(e, !0) ||
                ux(e, !0) ||
                iC(e) ||
                ix(e, !0) ||
                gx(e, "ForwardDelete");
            })(e, t);
          });
      },
      vx = function (e) {
        return void 0 === e.touches || 1 !== e.touches.length
          ? M.none()
          : M.some(e.touches[0]);
      },
      yx = function (e) {
        var t = xu(M.none()),
          n = xu(!1),
          r = Ru(function (t) {
            e.fire("longpress", ke(ke({}, t), { type: "longpress" })),
              n.set(!0);
          }, 400);
        e.on(
          "touchstart",
          function (e) {
            vx(e).each(function (o) {
              r.cancel();
              var i = { x: o.clientX, y: o.clientY, target: e.target };
              r.throttle(e), n.set(!1), t.set(M.some(i));
            });
          },
          !0
        ),
          e.on(
            "touchmove",
            function (o) {
              r.cancel(),
                vx(o).each(function (r) {
                  t.get().each(function (o) {
                    (function (e, t) {
                      var n = Math.abs(e.clientX - t.x),
                        r = Math.abs(e.clientY - t.y);
                      return n > 5 || r > 5;
                    })(r, o) &&
                      (t.set(M.none()), n.set(!1), e.fire("longpresscancel"));
                  });
                });
            },
            !0
          ),
          e.on(
            "touchend touchcancel",
            function (o) {
              r.cancel(),
                "touchcancel" !== o.type &&
                  t
                    .get()
                    .filter(function (e) {
                      return e.target.isEqualNode(o.target);
                    })
                    .each(function () {
                      n.get()
                        ? o.preventDefault()
                        : e.fire("tap", ke(ke({}, o), { type: "tap" }));
                    });
            },
            !0
          );
      },
      bx = function (e, t) {
        return e.hasOwnProperty(t.nodeName);
      },
      Cx = function (e, t) {
        return !!jn(t) || (!!On(t) && !bx(e, t) && !Zl(t));
      },
      wx = function (e, t) {
        if (jn(t)) {
          if (0 === t.nodeValue.length) return !0;
          if (
            /^\s+$/.test(t.nodeValue) &&
            (!t.nextSibling || bx(e, t.nextSibling))
          )
            return !0;
        }
        return !1;
      },
      xx = function (e) {
        var t,
          n,
          r,
          o = e.dom,
          i = e.selection,
          a = e.schema,
          u = a.getBlockElements(),
          c = i.getStart(),
          s = e.getBody(),
          l = rs(e);
        if (c && On(c) && l) {
          var f = s.nodeName.toLowerCase();
          if (
            a.isValidChild(f, l.toLowerCase()) &&
            !(function (e, t, n) {
              return H(bp(Tt.fromDom(n), Tt.fromDom(t)), function (t) {
                return bx(e, t.dom);
              });
            })(u, s, c)
          ) {
            var d = i.getRng(),
              m = d.startContainer,
              p = d.startOffset,
              g = d.endContainer,
              h = d.endOffset,
              v = wm(e);
            for (c = s.firstChild; c; )
              if (Cx(u, c)) {
                if (wx(u, c)) {
                  (n = c), (c = c.nextSibling), o.remove(n);
                  continue;
                }
                t ||
                  ((t = o.create(l, os(e))),
                  c.parentNode.insertBefore(t, c),
                  (r = !0)),
                  (n = c),
                  (c = c.nextSibling),
                  t.appendChild(n);
              } else (t = null), (c = c.nextSibling);
            r &&
              v &&
              (d.setStart(m, p), d.setEnd(g, h), i.setRng(d), e.nodeChanged());
          }
        }
      },
      _x = function (e, t) {
        t.hasAttribute("data-mce-caret") &&
          (Mo(t),
          (function (e) {
            e.selection.setRng(e.selection.getRng());
          })(e),
          e.selection.scrollIntoView(t));
      },
      Sx = function (e, t) {
        var n = (function (e) {
          return Qr(Tt.fromDom(e.getBody()), "*[data-mce-caret]").fold(
            x(null),
            function (e) {
              return e.dom;
            }
          );
        })(e);
        if (n)
          return "compositionstart" === t.type
            ? (t.preventDefault(), t.stopPropagation(), void _x(e, n))
            : void (Do(n) && (_x(e, n), e.undoManager.add()));
      },
      Ex = Kn,
      Nx = function (e, t, n) {
        var r = Al(e.getBody()),
          o = S(dl, 1 === t ? r.next : r.prev);
        if (
          n.collapsed &&
          (function (e) {
            return "" !== rs(e);
          })(e)
        ) {
          var i = e.dom.getParent(n.startContainer, "PRE");
          if (!i) return;
          if (!o(Rc.fromRangeStart(n))) {
            var a = (function (e) {
              var t = e.dom.create(rs(e));
              return (
                (!_t.ie || _t.ie >= 11) &&
                  (t.innerHTML = '<br data-mce-bogus="1">'),
                t
              );
            })(e);
            1 === t ? e.$(i).after(a) : e.$(i).before(a),
              e.selection.select(a, !0),
              e.selection.collapse();
          }
        }
      },
      kx = function (e, t) {
        var n = t ? Tc.Forwards : Tc.Backwards,
          r = e.selection.getRng();
        return (function (e, t, n) {
          return Fw(t, e, n, mp, pp, Ex);
        })(n, e, r).orThunk(function () {
          return Nx(e, n, r), M.none();
        });
      },
      Ax = function (e, t) {
        var n = t ? 1 : -1,
          r = e.selection.getRng();
        return (function (e, t, n) {
          return Uw(
            t,
            e,
            n,
            function (e) {
              return mp(e) || fp(e);
            },
            function (e) {
              return pp(e) || dp(e);
            },
            Ex
          );
        })(n, e, r).orThunk(function () {
          return Nx(e, n, r), M.none();
        });
      },
      Rx = function (e, t) {
        return kx(e, t).exists(function (t) {
          return Iw(e, t), !0;
        });
      },
      Tx = function (e, t) {
        return Ax(e, t).exists(function (t) {
          return Iw(e, t), !0;
        });
      },
      Dx = function (e, t) {
        return zw(e, t, t ? pp : mp);
      },
      Ox = function (e) {
        return V(["figcaption"], Ut(e));
      },
      Bx = function (e) {
        var t = document.createRange();
        return t.setStartBefore(e.dom), t.setEndBefore(e.dom), t;
      },
      Px = function (e, t, n) {
        n ? gn(e, t) : pn(e, t);
      },
      Lx = function (e, t, n, r) {
        return "" === t
          ? (function (e, t) {
              var n = Tt.fromTag("br");
              return Px(e, n, t), Bx(n);
            })(e, r)
          : (function (e, t, n, r) {
              var o = Tt.fromTag(n),
                i = Tt.fromTag("br");
              return Zn(o, r), gn(o, i), Px(e, o, t), Bx(i);
            })(e, r, t, n);
      },
      Ix = function (e, t, n) {
        return t
          ? (function (e, t) {
              return gw(e, t).breakAt.isNone();
            })(e.dom, n)
          : (function (e, t) {
              return pw(e, t).breakAt.isNone();
            })(e.dom, n);
      },
      Mx = function (e, t) {
        var n = Tt.fromDom(e.getBody()),
          r = Rc.fromRangeStart(e.selection.getRng()),
          o = rs(e),
          i = os(e);
        return (function (e, t) {
          var n = S(Pt, t);
          return Yr(Tt.fromDom(e.container()), mo, n).filter(Ox);
        })(r, n).exists(function () {
          if (Ix(n, t, r)) {
            var a = Lx(n, o, i, t);
            return e.selection.setRng(a), !0;
          }
          return !1;
        });
      },
      Fx = function (e, t) {
        return !!e.selection.isCollapsed() && Mx(e, t);
      },
      Ux = function (e, t) {
        return Q(
          (function (e) {
            return q(e, function (e) {
              return ke(
                {
                  shiftKey: !1,
                  altKey: !1,
                  ctrlKey: !1,
                  metaKey: !1,
                  keyCode: 0,
                  action: C,
                },
                e
              );
            });
          })(e),
          function (e) {
            return (function (e, t) {
              return (
                t.keyCode === e.keyCode &&
                t.shiftKey === e.shiftKey &&
                t.altKey === e.altKey &&
                t.ctrlKey === e.ctrlKey &&
                t.metaKey === e.metaKey
              );
            })(e, t)
              ? [e]
              : [];
          }
        );
      },
      jx = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return function () {
          return e.apply(null, t);
        };
      },
      zx = function (e, t) {
        return G(Ux(e, t), function (e) {
          return e.action();
        });
      },
      Vx = function (e, t) {
        var n = t ? Tc.Forwards : Tc.Backwards,
          r = e.selection.getRng();
        return Fw(e, n, r, sp, lp, Yn).exists(function (t) {
          return Iw(e, t), !0;
        });
      },
      Hx = function (e, t) {
        var n = t ? 1 : -1,
          r = e.selection.getRng();
        return Uw(e, n, r, sp, lp, Yn).exists(function (t) {
          return Iw(e, t), !0;
        });
      },
      qx = function (e, t) {
        return zw(e, t, t ? lp : sp);
      },
      $x = function (e, t, n, r, o) {
        var i = Fu(Tt.fromDom(n), "td,th,caption").map(function (e) {
          return e.dom;
        });
        return (function (e, t, n) {
          return Y(
            e,
            function (e, r) {
              return e.fold(
                function () {
                  return M.some(r);
                },
                function (e) {
                  var o = Math.sqrt(Math.abs(e.x - t) + Math.abs(e.y - n)),
                    i = Math.sqrt(Math.abs(r.x - t) + Math.abs(r.y - n));
                  return M.some(i < o ? r : e);
                }
              );
            },
            M.none()
          );
        })(
          K(
            (function (e, t) {
              return Q(t, function (t) {
                var n = (function (e, t) {
                  return {
                    left: e.left - t,
                    top: e.top - t,
                    right: e.right + 2 * t,
                    bottom: e.bottom + 2 * t,
                    width: e.width + t,
                    height: e.height + t,
                  };
                })(nc(t.getBoundingClientRect()), -1);
                return [
                  { x: n.left, y: e(n), cell: t },
                  { x: n.right, y: e(n), cell: t },
                ];
              });
            })(e, i),
            function (e) {
              return t(e, o);
            }
          ),
          r,
          o
        ).map(function (e) {
          return e.cell;
        });
      },
      Wx = S(
        $x,
        function (e) {
          return e.bottom;
        },
        function (e, t) {
          return e.y < t;
        }
      ),
      Kx = S(
        $x,
        function (e) {
          return e.top;
        },
        function (e, t) {
          return e.y > t;
        }
      ),
      Xx = function (e, t) {
        return re(t.getClientRects())
          .bind(function (t) {
            return Wx(e, t.left, t.top);
          })
          .bind(function (e) {
            return mw(
              jl((n = e))
                .map(function (e) {
                  return pw(n, e).positions.concat(e);
                })
                .getOr([]),
              t
            );
            var n;
          });
      },
      Yx = function (e, t) {
        return oe(t.getClientRects())
          .bind(function (t) {
            return Kx(e, t.left, t.top);
          })
          .bind(function (e) {
            return mw(
              Ul((n = e))
                .map(function (e) {
                  return [e].concat(gw(n, e).positions);
                })
                .getOr([]),
              t
            );
            var n;
          });
      },
      Gx = function (e, t, n) {
        var r = e(t, n);
        return (function (e) {
          return e.breakType === tw.Wrap && 0 === e.positions.length;
        })(r) ||
          (!qn(n.getNode()) &&
            (function (e) {
              return e.breakType === tw.Br && 1 === e.positions.length;
            })(r))
          ? !(function (e, t, n) {
              return n.breakAt.exists(function (n) {
                return e(t, n).breakAt.isSome();
              });
            })(e, t, r)
          : r.breakAt.isNone();
      },
      Jx = S(Gx, pw),
      Qx = S(Gx, gw),
      Zx = function (e, t, n, r) {
        var o = e.selection.getRng(),
          i = t ? 1 : -1;
        return !(
          !js() ||
          !(function (e, t, n) {
            var r = Rc.fromRangeStart(t);
            return Il(!e, n).exists(function (e) {
              return e.isEqual(r);
            });
          })(t, o, n) ||
          (cC(i, e, n, !t, !1).each(function (t) {
            Iw(e, t);
          }),
          0)
        );
      },
      e_ = function (e, t) {
        var n = t.getNode(e);
        return On(n) && "TABLE" === n.nodeName ? M.some(n) : M.none();
      },
      t_ = function (e, t, n) {
        var r = e_(!!t, n),
          o = !1 === t;
        r.fold(
          function () {
            return Iw(e, n.toRange());
          },
          function (r) {
            return Il(o, e.getBody())
              .filter(function (e) {
                return e.isEqual(n);
              })
              .fold(
                function () {
                  return Iw(e, n.toRange());
                },
                function (o) {
                  return (function (e, t, n, r) {
                    var o = rs(t);
                    o
                      ? t.undoManager.transact(function () {
                          var r = Tt.fromTag(o);
                          Zn(r, os(t)),
                            gn(r, Tt.fromTag("br")),
                            e ? mn(Tt.fromDom(n), r) : dn(Tt.fromDom(n), r);
                          var i = t.dom.createRng();
                          i.setStart(r.dom, 0), i.setEnd(r.dom, 0), Iw(t, i);
                        })
                      : Iw(t, r.toRange());
                  })(t, e, r, n);
                }
              );
          }
        );
      },
      n_ = function (e, t, n, r) {
        var o = e.selection.getRng(),
          i = Rc.fromRangeStart(o),
          a = e.getBody();
        if (!t && Jx(r, i)) {
          var u = (function (e, t, n) {
            return Xx(t, n)
              .orThunk(function () {
                return re(n.getClientRects()).bind(function (n) {
                  return dw(hw(e, Rc.before(t)), n.left);
                });
              })
              .getOr(Rc.before(t));
          })(a, n, i);
          return t_(e, t, u), !0;
        }
        return (
          !(!t || !Qx(r, i)) &&
          ((u = (function (e, t, n) {
            return Yx(t, n)
              .orThunk(function () {
                return re(n.getClientRects()).bind(function (n) {
                  return dw(vw(e, Rc.after(t)), n.left);
                });
              })
              .getOr(Rc.after(t));
          })(a, n, i)),
          t_(e, t, u),
          !0)
        );
      },
      r_ = function (e, t, n) {
        return M.from(e.dom.getParent(e.selection.getNode(), "td,th"))
          .bind(function (r) {
            return M.from(e.dom.getParent(r, "table")).map(function (o) {
              return n(e, t, o, r);
            });
          })
          .getOr(!1);
      },
      o_ = function (e, t) {
        return r_(e, t, Zx);
      },
      i_ = function (e, t) {
        return r_(e, t, n_);
      },
      a_ = function (e, t) {
        e.on("keydown", function (n) {
          !1 === n.isDefaultPrevented() &&
            (function (e, t, n) {
              var r = pt().os;
              zx(
                [
                  { keyCode: ad.RIGHT, action: jx(Rx, e, !0) },
                  { keyCode: ad.LEFT, action: jx(Rx, e, !1) },
                  { keyCode: ad.UP, action: jx(Tx, e, !1) },
                  { keyCode: ad.DOWN, action: jx(Tx, e, !0) },
                  { keyCode: ad.RIGHT, action: jx(o_, e, !0) },
                  { keyCode: ad.LEFT, action: jx(o_, e, !1) },
                  { keyCode: ad.UP, action: jx(i_, e, !1) },
                  { keyCode: ad.DOWN, action: jx(i_, e, !0) },
                  { keyCode: ad.RIGHT, action: jx(Vx, e, !0) },
                  { keyCode: ad.LEFT, action: jx(Vx, e, !1) },
                  { keyCode: ad.UP, action: jx(Hx, e, !1) },
                  { keyCode: ad.DOWN, action: jx(Hx, e, !0) },
                  { keyCode: ad.RIGHT, action: jx(Ww, e, t, !0) },
                  { keyCode: ad.LEFT, action: jx(Ww, e, t, !1) },
                  {
                    keyCode: ad.RIGHT,
                    ctrlKey: !r.isOSX(),
                    altKey: r.isOSX(),
                    action: jx(Yw, e, t),
                  },
                  {
                    keyCode: ad.LEFT,
                    ctrlKey: !r.isOSX(),
                    altKey: r.isOSX(),
                    action: jx(Gw, e, t),
                  },
                  { keyCode: ad.UP, action: jx(Fx, e, !1) },
                  { keyCode: ad.DOWN, action: jx(Fx, e, !0) },
                ],
                n
              ).each(function (e) {
                n.preventDefault();
              });
            })(e, t, n);
        });
      },
      u_ = function (e, t) {
        e.on("keydown", function (n) {
          !1 === n.isDefaultPrevented() &&
            (function (e, t, n) {
              zx(
                [
                  { keyCode: ad.BACKSPACE, action: jx(px, e, !1) },
                  { keyCode: ad.BACKSPACE, action: jx(SC, e, !1) },
                  { keyCode: ad.DELETE, action: jx(SC, e, !0) },
                  { keyCode: ad.BACKSPACE, action: jx(gC, e, !1) },
                  { keyCode: ad.DELETE, action: jx(gC, e, !0) },
                  { keyCode: ad.BACKSPACE, action: jx(tx, e, t, !1) },
                  { keyCode: ad.DELETE, action: jx(tx, e, t, !0) },
                  { keyCode: ad.BACKSPACE, action: jx(Ig, e, !1) },
                  { keyCode: ad.DELETE, action: jx(Ig, e, !0) },
                  { keyCode: ad.BACKSPACE, action: jx(EC, e, !1) },
                  { keyCode: ad.DELETE, action: jx(EC, e, !0) },
                  { keyCode: ad.BACKSPACE, action: jx(ux, e, !1) },
                  { keyCode: ad.DELETE, action: jx(ux, e, !0) },
                  { keyCode: ad.BACKSPACE, action: jx(iC, e, !1) },
                  { keyCode: ad.DELETE, action: jx(iC, e, !0) },
                  { keyCode: ad.BACKSPACE, action: jx(tC, e, !1) },
                  { keyCode: ad.DELETE, action: jx(tC, e, !0) },
                  { keyCode: ad.BACKSPACE, action: jx(ix, e, !1) },
                  { keyCode: ad.DELETE, action: jx(ix, e, !0) },
                ],
                n
              ).each(function (e) {
                n.preventDefault();
              });
            })(e, t, n);
        }),
          e.on("keyup", function (t) {
            !1 === t.isDefaultPrevented() &&
              (function (e, t) {
                zx(
                  [
                    { keyCode: ad.BACKSPACE, action: jx(_C, e) },
                    { keyCode: ad.DELETE, action: jx(_C, e) },
                  ],
                  t
                );
              })(e, t);
          });
      },
      c_ = function (e, t) {
        var n,
          r = t,
          o = e.dom,
          i = e.schema.getMoveCaretBeforeOnEnterElements();
        if (t) {
          if (/^(LI|DT|DD)$/.test(t.nodeName)) {
            var a = (function (e) {
              for (; e; ) {
                if (
                  1 === e.nodeType ||
                  (3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data))
                )
                  return e;
                e = e.nextSibling;
              }
            })(t.firstChild);
            a &&
              /^(UL|OL|DL)$/.test(a.nodeName) &&
              t.insertBefore(o.doc.createTextNode(xo), t.firstChild);
          }
          var u = o.createRng();
          if ((t.normalize(), t.hasChildNodes())) {
            for (var c = new so(t, t); (n = c.current()); ) {
              if (jn(n)) {
                u.setStart(n, 0), u.setEnd(n, 0);
                break;
              }
              if (i[n.nodeName.toLowerCase()]) {
                u.setStartBefore(n), u.setEndBefore(n);
                break;
              }
              (r = n), (n = c.next());
            }
            n || (u.setStart(r, 0), u.setEnd(r, 0));
          } else
            qn(t)
              ? t.nextSibling && o.isBlock(t.nextSibling)
                ? (u.setStartBefore(t), u.setEndBefore(t))
                : (u.setStartAfter(t), u.setEndAfter(t))
              : (u.setStart(t, 0), u.setEnd(t, 0));
          e.selection.setRng(u), $d(e, u);
        }
      },
      s_ = function (e) {
        return M.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock));
      },
      l_ = function (e, t) {
        return e && e.parentNode && e.parentNode.nodeName === t;
      },
      f_ = function (e) {
        return e && /^(OL|UL|LI)$/.test(e.nodeName);
      },
      d_ = function (e) {
        var t = e.parentNode;
        return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
      },
      m_ = function (e, t, n) {
        for (var r = e[n ? "firstChild" : "lastChild"]; r && !On(r); )
          r = r[n ? "nextSibling" : "previousSibling"];
        return r === t;
      },
      p_ = function (e, t, n, r, o) {
        var i = e.dom,
          a = e.selection.getRng();
        if (n !== e.getBody()) {
          var u;
          f_((u = n)) && f_(u.parentNode) && (o = "LI");
          var c = o ? t(o) : i.create("BR");
          if (m_(n, r, !0) && m_(n, r, !1))
            if (l_(n, "LI")) {
              var s = d_(n);
              i.insertAfter(c, s),
                (function (e) {
                  var t;
                  return (
                    (null === (t = e.parentNode) || void 0 === t
                      ? void 0
                      : t.firstChild) === e
                  );
                })(n)
                  ? i.remove(s)
                  : i.remove(n);
            } else i.replace(c, n);
          else if (m_(n, r, !0))
            l_(n, "LI")
              ? (i.insertAfter(c, d_(n)),
                c.appendChild(i.doc.createTextNode(" ")),
                c.appendChild(n))
              : n.parentNode.insertBefore(c, n),
              i.remove(r);
          else if (m_(n, r, !1)) i.insertAfter(c, d_(n)), i.remove(r);
          else {
            n = d_(n);
            var l = a.cloneRange();
            l.setStartAfter(r), l.setEndAfter(n);
            var f = l.extractContents();
            "LI" === o &&
            (function (e, t) {
              return e.firstChild && e.firstChild.nodeName === t;
            })(f, "LI")
              ? ((c = f.firstChild), i.insertAfter(f, n))
              : (i.insertAfter(f, n), i.insertAfter(c, n)),
              i.remove(r);
          }
          c_(e, c);
        }
      },
      g_ = function (e, t) {
        return t && "A" === t.nodeName && e.isEmpty(t);
      },
      h_ = function (e) {
        e.innerHTML = '<br data-mce-bogus="1">';
      },
      v_ = function (e, t) {
        return (
          e.nodeName === t ||
          (e.previousSibling && e.previousSibling.nodeName === t)
        );
      },
      y_ = function (e, t) {
        return (
          t &&
          e.isBlock(t) &&
          !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) &&
          !/^(fixed|absolute)/i.test(t.style.position) &&
          "true" !== e.getContentEditable(t)
        );
      },
      b_ = function (e, t, n) {
        return !1 === jn(t)
          ? n
          : e
          ? 1 === n && t.data.charAt(n - 1) === _o
            ? 0
            : n
          : n === t.data.length - 1 && t.data.charAt(n) === _o
          ? t.data.length
          : n;
      },
      C_ = function (e, t) {
        var n,
          r,
          o = e.getRoot();
        for (n = t; n !== o && "false" !== e.getContentEditable(n); )
          "true" === e.getContentEditable(n) && (r = n), (n = n.parentNode);
        return n !== o ? r : o;
      },
      w_ = function (e, t) {
        var n = rs(e);
        n &&
          n.toLowerCase() === t.tagName.toLowerCase() &&
          (function (e, t, n) {
            var r = e.dom;
            M.from(n.style)
              .map(r.parseStyle)
              .each(function (e) {
                var n = ur(Tt.fromDom(t)),
                  o = ke(ke({}, n), e);
                r.setStyles(t, o);
              });
            var o = M.from(n.class).map(function (e) {
                return e.split(/\s+/);
              }),
              i = M.from(t.className).map(function (e) {
                return K(e.split(/\s+/), function (e) {
                  return "" !== e;
                });
              });
            ec(o, i, function (e, n) {
              var o = K(n, function (t) {
                  return !V(e, t);
                }),
                i = Ae(e, o);
              r.setAttrib(t, "class", i.join(" "));
            });
            var a = ["style", "class"],
              u = pe(n, function (e, t) {
                return !V(a, t);
              });
            r.setAttribs(t, u);
          })(e, t, os(e));
      },
      x_ = function (e, t) {
        var n,
          r,
          o,
          i,
          a,
          u,
          c,
          s,
          l,
          f,
          d = e.dom,
          m = e.schema,
          p = m.getNonEmptyElements(),
          g = e.selection.getRng(),
          h = function (t) {
            var n,
              o,
              a,
              u = r,
              c = m.getTextInlineElements();
            if (
              ((a = n =
                t || "TABLE" === s || "HR" === s
                  ? d.create(t || l)
                  : i.cloneNode(!1)),
              !1 ===
                (function (e) {
                  return e.getParam("keep_styles", !0);
                })(e))
            )
              d.setAttrib(n, "style", null), d.setAttrib(n, "class", null);
            else
              do {
                if (c[u.nodeName]) {
                  if (Vl(u) || Zl(u)) continue;
                  (o = u.cloneNode(!1)),
                    d.setAttrib(o, "id", ""),
                    n.hasChildNodes()
                      ? (o.appendChild(n.firstChild), n.appendChild(o))
                      : ((a = o), n.appendChild(o));
                }
              } while ((u = u.parentNode) && u !== w);
            return w_(e, n), h_(a), n;
          },
          v = function (e) {
            var t,
              n,
              a = b_(e, r, o);
            if (jn(r) && (e ? a > 0 : a < r.nodeValue.length)) return !1;
            if (r.parentNode === i && f && !e) return !0;
            if (e && On(r) && r === i.firstChild) return !0;
            if (v_(r, "TABLE") || v_(r, "HR")) return (f && !e) || (!f && e);
            var u = new so(r, i);
            for (
              jn(r) &&
              (e && 0 === a
                ? u.prev()
                : e || a !== r.nodeValue.length || u.next());
              (t = u.current());

            ) {
              if (On(t)) {
                if (
                  !t.getAttribute("data-mce-bogus") &&
                  ((n = t.nodeName.toLowerCase()), p[n] && "br" !== n)
                )
                  return !1;
              } else if (jn(t) && !Go(t.nodeValue)) return !1;
              e ? u.prev() : u.next();
            }
            return !0;
          },
          y = function () {
            (a =
              /^(H[1-6]|PRE|FIGURE)$/.test(s) && "HGROUP" !== x ? h(l) : h()),
              (function (e) {
                return e.getParam("end_container_on_empty_block", !1);
              })(e) &&
              y_(d, c) &&
              d.isEmpty(i)
                ? (a = d.split(c, i))
                : d.insertAfter(a, i),
              c_(e, a);
          };
        Cd(d, g).each(function (e) {
          g.setStart(e.startContainer, e.startOffset),
            g.setEnd(e.endContainer, e.endOffset);
        }),
          (r = g.startContainer),
          (o = g.startOffset),
          (l = rs(e));
        var b = !(!t || !t.shiftKey),
          C = !(!t || !t.ctrlKey);
        On(r) &&
          r.hasChildNodes() &&
          ((f = o > r.childNodes.length - 1),
          (r = r.childNodes[Math.min(o, r.childNodes.length - 1)] || r),
          (o = f && jn(r) ? r.nodeValue.length : 0));
        var w = C_(d, r);
        if (w) {
          ((l && !b) || (!l && b)) &&
            (r = (function (e, t, n, r, o) {
              var i,
                a,
                u,
                c,
                s,
                l,
                f = t || "P",
                d = e.dom,
                m = C_(d, r);
              if (!(a = d.getParent(r, d.isBlock)) || !y_(d, a)) {
                if (
                  ((l =
                    (a = a || m) === e.getBody() ||
                    (function (e) {
                      return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
                    })(a)
                      ? a.nodeName.toLowerCase()
                      : a.parentNode.nodeName.toLowerCase()),
                  !a.hasChildNodes())
                )
                  return (
                    (i = d.create(f)),
                    w_(e, i),
                    a.appendChild(i),
                    n.setStart(i, 0),
                    n.setEnd(i, 0),
                    i
                  );
                for (c = r; c.parentNode !== a; ) c = c.parentNode;
                for (; c && !d.isBlock(c); ) (u = c), (c = c.previousSibling);
                if (u && e.schema.isValidChild(l, f.toLowerCase())) {
                  for (
                    i = d.create(f),
                      w_(e, i),
                      u.parentNode.insertBefore(i, u),
                      c = u;
                    c && !d.isBlock(c);

                  )
                    (s = c.nextSibling), i.appendChild(c), (c = s);
                  n.setStart(r, o), n.setEnd(r, o);
                }
              }
              return r;
            })(e, l, g, r, o)),
            (i = d.getParent(r, d.isBlock)),
            (c = i ? d.getParent(i.parentNode, d.isBlock) : null),
            (s = i ? i.nodeName.toUpperCase() : "");
          var x = c ? c.nodeName.toUpperCase() : "";
          "LI" !== x || C || ((i = c), (c = c.parentNode), (s = x)),
            /^(LI|DT|DD)$/.test(s) && d.isEmpty(i)
              ? p_(e, h, c, i, l)
              : (l && i === e.getBody()) ||
                ((l = l || "P"),
                Ao(i)
                  ? ((a = Mo(i)), d.isEmpty(i) && h_(i), w_(e, a), c_(e, a))
                  : v()
                  ? y()
                  : v(!0)
                  ? ((a = i.parentNode.insertBefore(h(), i)),
                    c_(e, v_(i, "HR") ? a : i))
                  : ((n = (function (e) {
                      var t = e.cloneRange();
                      return (
                        t.setStart(
                          e.startContainer,
                          b_(!0, e.startContainer, e.startOffset)
                        ),
                        t.setEnd(
                          e.endContainer,
                          b_(!1, e.endContainer, e.endOffset)
                        ),
                        t
                      );
                    })(g).cloneRange()).setEndAfter(i),
                    (function (e) {
                      $(Mu(Tt.fromDom(e), Ht), function (e) {
                        var t = e.dom;
                        t.nodeValue = Eo(t.nodeValue);
                      });
                    })((u = n.extractContents())),
                    (function (e) {
                      do {
                        jn(e) &&
                          (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")),
                          (e = e.firstChild);
                      } while (e);
                    })(u),
                    (a = u.firstChild),
                    d.insertAfter(u, i),
                    (function (e, t, n) {
                      var r,
                        o = n,
                        i = [];
                      if (o) {
                        for (; (o = o.firstChild); ) {
                          if (e.isBlock(o)) return;
                          On(o) && !t[o.nodeName.toLowerCase()] && i.push(o);
                        }
                        for (r = i.length; r--; )
                          (!(o = i[r]).hasChildNodes() ||
                            (o.firstChild === o.lastChild &&
                              "" === o.firstChild.nodeValue) ||
                            g_(e, o)) &&
                            e.remove(o);
                      }
                    })(d, p, a),
                    (function (e, t) {
                      t.normalize();
                      var n = t.lastChild;
                      (n &&
                        !/^(left|right)$/gi.test(e.getStyle(n, "float", !0))) ||
                        e.add(t, "br");
                    })(d, i),
                    d.isEmpty(i) && h_(i),
                    a.normalize(),
                    d.isEmpty(a) ? (d.remove(a), y()) : (w_(e, a), c_(e, a))),
                d.setAttrib(a, "id", ""),
                e.fire("NewBlock", { newBlock: a }));
        }
      },
      __ = function (e, t, n) {
        var r = e.dom.createRng();
        n
          ? (r.setStartBefore(t), r.setEndBefore(t))
          : (r.setStartAfter(t), r.setEndAfter(t)),
          e.selection.setRng(r),
          $d(e, r);
      },
      S_ = function (e, t) {
        var n,
          r,
          o = e.selection,
          i = e.dom,
          a = o.getRng();
        Cd(i, a).each(function (e) {
          a.setStart(e.startContainer, e.startOffset),
            a.setEnd(e.endContainer, e.endOffset);
        });
        var u = a.startOffset,
          c = a.startContainer;
        if (1 === c.nodeType && c.hasChildNodes()) {
          var s = u > c.childNodes.length - 1;
          (c = c.childNodes[Math.min(u, c.childNodes.length - 1)] || c),
            (u = s && 3 === c.nodeType ? c.nodeValue.length : 0);
        }
        var l = i.getParent(c, i.isBlock),
          f = l ? i.getParent(l.parentNode, i.isBlock) : null,
          d = f ? f.nodeName.toUpperCase() : "",
          m = !(!t || !t.ctrlKey);
        "LI" !== d || m || (l = f),
          c &&
            3 === c.nodeType &&
            u >= c.nodeValue.length &&
            ((function (e, t, n) {
              for (
                var r, o = new so(t, n), i = e.getNonEmptyElements();
                (r = o.next());

              )
                if (i[r.nodeName.toLowerCase()] || r.length > 0) return !0;
            })(e.schema, c, l) ||
              ((n = i.create("br")),
              a.insertNode(n),
              a.setStartAfter(n),
              a.setEndAfter(n),
              (r = !0))),
          (n = i.create("br")),
          Bc(i, a, n),
          __(e, n, r),
          e.undoManager.add();
      },
      E_ = function (e, t) {
        var n = Tt.fromTag("br");
        dn(Tt.fromDom(t), n), e.undoManager.add();
      },
      N_ = function (e, t) {
        k_(e.getBody(), t) || mn(Tt.fromDom(t), Tt.fromTag("br"));
        var n = Tt.fromTag("br");
        mn(Tt.fromDom(t), n), __(e, n.dom, !1), e.undoManager.add();
      },
      k_ = function (e, t) {
        return (
          (n = Rc.after(t)),
          !!qn(n.getNode()) ||
            Ml(e, Rc.after(t))
              .map(function (e) {
                return qn(e.getNode());
              })
              .getOr(!1)
        );
        var n;
      },
      A_ = function (e) {
        return e && "A" === e.nodeName && "href" in e;
      },
      R_ = function (e) {
        return e.fold(O, A_, A_, O);
      },
      T_ = function (e, t) {
        t.fold(C, S(E_, e), S(N_, e), C);
      },
      D_ = function (e, t) {
        var n = (function (e) {
          var t = S(Ib, e),
            n = Rc.fromRangeStart(e.selection.getRng());
          return WC(t, e.getBody(), n).filter(R_);
        })(e);
        n.isSome() ? n.each(S(T_, e)) : S_(e, t);
      },
      O_ = function (e, t) {
        return s_(e)
          .filter(function (e) {
            return t.length > 0 && Ot(Tt.fromDom(e), t);
          })
          .isSome();
      },
      B_ = Sr([{ br: [] }, { block: [] }, { none: [] }]),
      P_ = function (e, t) {
        return (function (e) {
          return O_(
            e,
            (function (e) {
              return e.getParam("no_newline_selector", "");
            })(e)
          );
        })(e);
      },
      L_ = function (e) {
        return function (t, n) {
          return ("" === rs(t)) === e;
        };
      },
      I_ = function (e) {
        return function (t, n) {
          return (
            (function (e) {
              return s_(e)
                .filter(function (e) {
                  return yo(Tt.fromDom(e));
                })
                .isSome();
            })(t) === e
          );
        };
      },
      M_ = function (e, t) {
        return function (n, r) {
          return (
            ((function (e) {
              return s_(e).fold(x(""), function (e) {
                return e.nodeName.toUpperCase();
              });
            })(n) ===
              e.toUpperCase()) ===
            t
          );
        };
      },
      F_ = function (e) {
        return M_("pre", e);
      },
      U_ = function (e) {
        return function (t, n) {
          return (
            (function (e) {
              return e.getParam("br_in_pre", !0);
            })(t) === e
          );
        };
      },
      j_ = function (e, t) {
        return (function (e) {
          return O_(
            e,
            (function (e) {
              return e.getParam(
                "br_newline_selector",
                ".mce-toc h2,figcaption,caption"
              );
            })(e)
          );
        })(e);
      },
      z_ = function (e, t) {
        return t;
      },
      V_ = function (e) {
        var t = rs(e),
          n = (function (e, t) {
            var n,
              r,
              o = e.getRoot();
            for (n = t; n !== o && "false" !== e.getContentEditable(n); )
              "true" === e.getContentEditable(n) && (r = n), (n = n.parentNode);
            return n !== o ? r : o;
          })(e.dom, e.selection.getStart());
        return n && e.schema.isValidChild(n.nodeName, t || "P");
      },
      H_ = function (e, t) {
        return function (n, r) {
          return Y(
            e,
            function (e, t) {
              return e && t(n, r);
            },
            !0
          )
            ? M.some(t)
            : M.none();
        };
      },
      q_ = function (e, t) {
        (function (e, t) {
          return IC(
            [
              H_([P_], B_.none()),
              H_([M_("summary", !0)], B_.br()),
              H_([F_(!0), U_(!1), z_], B_.br()),
              H_([F_(!0), U_(!1)], B_.block()),
              H_([F_(!0), U_(!0), z_], B_.block()),
              H_([F_(!0), U_(!0)], B_.br()),
              H_([I_(!0), z_], B_.br()),
              H_([I_(!0)], B_.block()),
              H_([L_(!0), z_, V_], B_.block()),
              H_([L_(!0)], B_.br()),
              H_([j_], B_.br()),
              H_([L_(!1), z_], B_.br()),
              H_([V_], B_.block()),
            ],
            [e, !(!t || !t.shiftKey)]
          ).getOr(B_.none());
        })(e, t).fold(
          function () {
            D_(e, t);
          },
          function () {
            x_(e, t);
          },
          C
        );
      },
      $_ = function (e) {
        e.on("keydown", function (t) {
          t.keyCode === ad.ENTER &&
            (function (e, t) {
              var n;
              t.isDefaultPrevented() ||
                (t.preventDefault(),
                (n = e.undoManager).typing && ((n.typing = !1), n.add()),
                e.undoManager.transact(function () {
                  !1 === e.selection.isCollapsed() && e.execCommand("Delete"),
                    q_(e, t);
                }));
            })(e, t);
        });
      },
      W_ = function (e, t) {
        e.on("keydown", function (n) {
          !1 === n.isDefaultPrevented() &&
            (function (e, t, n) {
              zx(
                [
                  { keyCode: ad.END, action: jx(Dx, e, !0) },
                  { keyCode: ad.HOME, action: jx(Dx, e, !1) },
                  { keyCode: ad.END, action: jx(qx, e, !0) },
                  { keyCode: ad.HOME, action: jx(qx, e, !1) },
                  { keyCode: ad.END, action: jx(Jw, e, !0, t) },
                  { keyCode: ad.HOME, action: jx(Jw, e, !1, t) },
                ],
                n
              ).each(function (e) {
                n.preventDefault();
              });
            })(e, t, n);
        });
      },
      K_ = pt().browser,
      X_ = function (e) {
        !(function (e) {
          var t = Au(function () {
            e.composing || Xp(e);
          }, 0);
          K_.isIE() &&
            (e.on("keypress", function (e) {
              t.throttle();
            }),
            e.on("remove", function (e) {
              t.cancel();
            }));
        })(e),
          e.on("input", function (t) {
            !1 === t.isComposing && Xp(e);
          });
      },
      Y_ = pt(),
      G_ = function (e) {
        return e.stopImmediatePropagation();
      },
      J_ = function (e) {
        return e.keyCode === ad.PAGE_UP || e.keyCode === ad.PAGE_DOWN;
      },
      Q_ = function (e, t, n) {
        n && !e.get()
          ? t.on("NodeChange", G_, !0)
          : !n && e.get() && t.off("NodeChange", G_),
          e.set(n);
      },
      Z_ = function (e, t) {
        if (!Y_.os.isOSX()) {
          var n = xu(!1);
          e.on("keydown", function (t) {
            J_(t) && Q_(n, e, !0);
          }),
            e.on("keyup", function (r) {
              !1 === r.isDefaultPrevented() &&
                (function (e, t, n) {
                  zx(
                    [
                      { keyCode: ad.PAGE_UP, action: jx(Jw, e, !1, t) },
                      { keyCode: ad.PAGE_DOWN, action: jx(Jw, e, !0, t) },
                    ],
                    n
                  );
                })(e, t, r),
                J_(r) && n.get() && (Q_(n, e, !1), e.nodeChanged());
            });
        }
      },
      eS = function (e, t) {
        var n = t.container(),
          r = t.offset();
        return jn(n)
          ? (n.insertData(r, e), M.some(Rc(n, r + e.length)))
          : fl(t).map(function (n) {
              var r = Tt.fromText(e);
              return t.isAtEnd() ? mn(n, r) : dn(n, r), Rc(r.dom, e.length);
            });
      },
      tS = S(eS, xo),
      nS = S(eS, " "),
      rS = function (e, t) {
        return function (n) {
          return (function (e, t) {
            return !Up(t) && (jp(e, t) || Mp(e, t) || Fp(e, t));
          })(e, n)
            ? tS(t)
            : nS(t);
        };
      },
      oS = function (e) {
        var t = Rc.fromRangeStart(e.selection.getRng()),
          n = Tt.fromDom(e.getBody());
        if (e.selection.isCollapsed()) {
          var r = S(Ib, e),
            o = Rc.fromRangeStart(e.selection.getRng());
          return WC(r, e.getBody(), o)
            .bind(
              (function (e) {
                return function (t) {
                  return t.fold(
                    function (t) {
                      return Fl(e.dom, Rc.before(t));
                    },
                    function (e) {
                      return Ul(e);
                    },
                    function (e) {
                      return jl(e);
                    },
                    function (t) {
                      return Ml(e.dom, Rc.after(t));
                    }
                  );
                };
              })(n)
            )
            .bind(rS(n, t))
            .exists(
              (function (e) {
                return function (t) {
                  return e.selection.setRng(t.toRange()), e.nodeChanged(), !0;
                };
              })(e)
            );
        }
        return !1;
      },
      iS = function (e) {
        e.on("keydown", function (t) {
          !1 === t.isDefaultPrevented() &&
            (function (e, t) {
              zx([{ keyCode: ad.SPACEBAR, action: jx(oS, e) }], t).each(
                function (e) {
                  t.preventDefault();
                }
              );
            })(e, t);
        });
      },
      aS = function (e) {
        var t = Xw(e);
        return (
          (function (e) {
            e.on("keyup compositionstart", S(Sx, e));
          })(e),
          a_(e, t),
          u_(e, t),
          $_(e),
          iS(e),
          X_(e),
          W_(e, t),
          Z_(e, t),
          t
        );
      },
      uS = (function () {
        function e(e) {
          var t;
          (this.lastPath = []), (this.editor = e);
          var n = this;
          "onselectionchange" in e.getDoc() ||
            e.on("NodeChange click mouseup keyup focus", function (n) {
              var r = e.selection.getRng(),
                o = {
                  startContainer: r.startContainer,
                  startOffset: r.startOffset,
                  endContainer: r.endContainer,
                  endOffset: r.endOffset,
                };
              ("nodechange" !== n.type && fd(o, t)) ||
                e.fire("SelectionChange"),
                (t = o);
            }),
            e.on("contextmenu", function () {
              e.fire("SelectionChange");
            }),
            e.on("SelectionChange", function () {
              var t = e.selection.getStart(!0);
              !t ||
                (!_t.range && e.selection.isCollapsed()) ||
                (Wf(e) &&
                  !n.isSameElementPath(t) &&
                  e.dom.isChildOf(t, e.getBody()) &&
                  e.nodeChanged({ selectionChange: !0 }));
            }),
            e.on("mouseup", function (t) {
              !t.isDefaultPrevented() &&
                Wf(e) &&
                ("IMG" === e.selection.getNode().nodeName
                  ? ao.setEditorTimeout(e, function () {
                      e.nodeChanged();
                    })
                  : e.nodeChanged());
            });
        }
        return (
          (e.prototype.nodeChanged = function (e) {
            var t,
              n,
              r,
              o = this.editor.selection;
            this.editor.initialized &&
              o &&
              !this.editor.getParam("disable_nodechange") &&
              !this.editor.mode.isReadOnly() &&
              ((r = this.editor.getBody()),
              ((t = o.getStart(!0) || r).ownerDocument ===
                this.editor.getDoc() &&
                this.editor.dom.isChildOf(t, r)) ||
                (t = r),
              (n = []),
              this.editor.dom.getParent(t, function (e) {
                if (e === r) return !0;
                n.push(e);
              }),
              ((e = e || {}).element = t),
              (e.parents = n),
              this.editor.fire("NodeChange", e));
          }),
          (e.prototype.isSameElementPath = function (e) {
            var t,
              n = this.editor.$(e).parentsUntil(this.editor.getBody()).add(e);
            if (n.length === this.lastPath.length) {
              for (t = n.length; t >= 0 && n[t] === this.lastPath[t]; t--);
              if (-1 === t) return (this.lastPath = n), !0;
            }
            return (this.lastPath = n), !1;
          }),
          e
        );
      })(),
      cS = function (e) {
        !(function (e) {
          e.on("click", function (t) {
            e.dom.getParent(t.target, "details") && t.preventDefault();
          });
        })(e),
          (function (e) {
            e.parser.addNodeFilter("details", function (e) {
              $(e, function (e) {
                e.attr("data-mce-open", e.attr("open")), e.attr("open", "open");
              });
            }),
              e.serializer.addNodeFilter("details", function (e) {
                $(e, function (e) {
                  var t = e.attr("data-mce-open");
                  e.attr("open", l(t) ? t : null),
                    e.attr("data-mce-open", null);
                });
              });
          })(e);
      },
      sS = function (e) {
        return On(e) && ho(Tt.fromDom(e));
      },
      lS = function (e) {
        e.on("click", function (t) {
          t.detail >= 3 &&
            (function (e) {
              var t = e.selection.getRng(),
                n = Rc.fromRangeStart(t),
                r = Rc.fromRangeEnd(t);
              if (Rc.isElementPosition(n)) {
                var o = n.container();
                sS(o) &&
                  Ul(o).each(function (e) {
                    return t.setStart(e.container(), e.offset());
                  });
              }
              Rc.isElementPosition(r) &&
                ((o = n.container()),
                sS(o) &&
                  jl(o).each(function (e) {
                    return t.setEnd(e.container(), e.offset());
                  })),
                e.selection.setRng(Fg(t));
            })(e);
        });
      },
      fS = function (e) {
        var t = e.getBoundingClientRect(),
          n = e.ownerDocument,
          r = n.documentElement,
          o = n.defaultView;
        return {
          top: t.top + o.pageYOffset - r.clientTop,
          left: t.left + o.pageXOffset - r.clientLeft,
        };
      },
      dS = function (e, t) {
        return (
          (n = (function (e) {
            return e.inline ? fS(e.getBody()) : { left: 0, top: 0 };
          })(e)),
          (r = (function (e) {
            var t = e.getBody();
            return e.inline
              ? { left: t.scrollLeft, top: t.scrollTop }
              : { left: 0, top: 0 };
          })(e)),
          {
            pageX:
              (o = (function (e, t) {
                if (t.target.ownerDocument !== e.getDoc()) {
                  var n = fS(e.getContentAreaContainer()),
                    r = (function (e) {
                      var t = e.getBody(),
                        n = e.getDoc().documentElement,
                        r = { left: t.scrollLeft, top: t.scrollTop },
                        o = {
                          left: t.scrollLeft || n.scrollLeft,
                          top: t.scrollTop || n.scrollTop,
                        };
                      return e.inline ? r : o;
                    })(e);
                  return {
                    left: t.pageX - n.left + r.left,
                    top: t.pageY - n.top + r.top,
                  };
                }
                return { left: t.pageX, top: t.pageY };
              })(e, t)).left -
              n.left +
              r.left,
            pageY: o.top - n.top + r.top,
          }
        );
        var n, r, o;
      },
      mS = Kn,
      pS = Wn,
      gS = function (e, t, n, r) {
        var o = e.dom,
          i = t.cloneNode(!0);
        o.setStyles(i, { width: n, height: r }),
          o.setAttrib(i, "data-mce-selected", null);
        var a = o.create("div", {
          class: "mce-drag-container",
          "data-mce-bogus": "all",
          unselectable: "on",
          contenteditable: "false",
        });
        return (
          o.setStyles(a, {
            position: "absolute",
            opacity: 0.5,
            overflow: "hidden",
            border: 0,
            padding: 0,
            margin: 0,
            width: n,
            height: r,
          }),
          o.setStyles(i, { margin: 0, boxSizing: "border-box" }),
          a.appendChild(i),
          a
        );
      },
      hS = function (e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      },
      vS = function (e, t) {
        return function (n) {
          if (
            (function (e) {
              return 0 === e.button;
            })(n)
          ) {
            var r = G(
              t.dom.getParents(n.target),
              (function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                return function (t) {
                  for (var n = 0; n < e.length; n++) if (e[n](t)) return !0;
                  return !1;
                };
              })(mS, pS)
            ).getOr(null);
            if (((u = t.getBody()), mS((c = r)) && c !== u)) {
              var o = t.dom.getPos(r),
                i = t.getBody(),
                a = t.getDoc().documentElement;
              e.set({
                element: r,
                dragging: !1,
                screenX: n.screenX,
                screenY: n.screenY,
                maxX: (t.inline ? i.scrollWidth : a.offsetWidth) - 2,
                maxY: (t.inline ? i.scrollHeight : a.offsetHeight) - 2,
                relX: n.pageX - o.x,
                relY: n.pageY - o.y,
                width: r.offsetWidth,
                height: r.offsetHeight,
                ghost: gS(t, r, r.offsetWidth, r.offsetHeight),
              });
            }
          }
          var u, c;
        };
      },
      yS = function (e, t) {
        return function (n) {
          e.on(function (e) {
            if (
              e.dragging &&
              (function (e, t, n) {
                return t !== n && !e.dom.isChildOf(t, n) && !mS(t);
              })(
                t,
                ((a = t.selection),
                3 === (u = a.getSel().getRangeAt(0).startContainer).nodeType
                  ? u.parentNode
                  : u),
                e.element
              )
            ) {
              var r =
                ((o = e.element),
                (i = o.cloneNode(!0)).removeAttribute("data-mce-selected"),
                i);
              t
                .fire("drop", { clientX: n.clientX, clientY: n.clientY })
                .isDefaultPrevented() ||
                t.undoManager.transact(function () {
                  hS(e.element),
                    t.insertContent(t.dom.getOuterHTML(r)),
                    t._selectionOverrides.hideFakeCaret();
                });
            }
            var o, i, a, u;
          }),
            bS(e);
        };
      },
      bS = function (e) {
        e.on(function (e) {
          hS(e.ghost);
        }),
          e.clear();
      },
      CS = function (e) {
        var t,
          n =
            ((t = xu(M.none())),
            {
              clear: function () {
                return t.set(M.none());
              },
              set: function (e) {
                return t.set(M.some(e));
              },
              isSet: function () {
                return t.get().isSome();
              },
              on: function (e) {
                return t.get().each(e);
              },
            }),
          r = vu.DOM,
          o = document,
          i = vS(n, e),
          a = (function (e, t) {
            var n = ao.throttle(function (e, n) {
              t._selectionOverrides.hideFakeCaret(),
                t.selection.placeCaretAt(e, n);
            }, 0);
            return (
              t.on("remove", n.stop),
              function (r) {
                return e.on(function (e) {
                  var o,
                    i,
                    a = Math.max(
                      Math.abs(r.screenX - e.screenX),
                      Math.abs(r.screenY - e.screenY)
                    );
                  if (!e.dragging && a > 10) {
                    if (
                      t
                        .fire("dragstart", { target: e.element })
                        .isDefaultPrevented()
                    )
                      return;
                    (e.dragging = !0), t.focus();
                  }
                  if (e.dragging) {
                    var u = (function (e, t) {
                      return { pageX: t.pageX - e.relX, pageY: t.pageY + 5 };
                    })(e, dS(t, r));
                    (o = e.ghost),
                      (i = t.getBody()),
                      o.parentNode !== i && i.appendChild(o),
                      (function (e, t, n, r, o, i) {
                        var a = 0,
                          u = 0;
                        (e.style.left = t.pageX + "px"),
                          (e.style.top = t.pageY + "px"),
                          t.pageX + n > o && (a = t.pageX + n - o),
                          t.pageY + r > i && (u = t.pageY + r - i),
                          (e.style.width = n - a + "px"),
                          (e.style.height = r - u + "px");
                      })(e.ghost, u, e.width, e.height, e.maxX, e.maxY),
                      n(r.clientX, r.clientY);
                  }
                });
              }
            );
          })(n, e),
          u = yS(n, e),
          c = (function (e, t) {
            return function () {
              e.on(function (e) {
                e.dragging && t.fire("dragend");
              }),
                bS(e);
            };
          })(n, e);
        e.on("mousedown", i),
          e.on("mousemove", a),
          e.on("mouseup", u),
          r.bind(o, "mousemove", a),
          r.bind(o, "mouseup", c),
          e.on("remove", function () {
            r.unbind(o, "mousemove", a), r.unbind(o, "mouseup", c);
          });
      },
      wS = function (e) {
        CS(e),
          (function (e) {
            e.on("drop", function (t) {
              var n =
                void 0 !== t.clientX
                  ? e.getDoc().elementFromPoint(t.clientX, t.clientY)
                  : null;
              (mS(n) || "false" === e.dom.getContentEditableParent(n)) &&
                t.preventDefault();
            });
          })(e),
          (function (e) {
            return e.getParam("block_unsupported_drop", !0, "boolean");
          })(e) &&
            (function (e) {
              var t = function (t) {
                  if (!t.isDefaultPrevented()) {
                    var n = t.dataTransfer;
                    n &&
                      (V(n.types, "Files") || n.files.length > 0) &&
                      (t.preventDefault(),
                      "drop" === t.type &&
                        ub(e, "Dropped file type is not supported"));
                  }
                },
                n = function (n) {
                  pm(e, n.target) && t(n);
                },
                r = function () {
                  var r = vu.DOM,
                    o = e.dom,
                    i = document,
                    a = e.inline ? e.getBody() : e.getDoc(),
                    u = ["drop", "dragover"];
                  $(u, function (e) {
                    r.bind(i, e, n), o.bind(a, e, t);
                  }),
                    e.on("remove", function () {
                      $(u, function (e) {
                        r.unbind(i, e, n), o.unbind(a, e, t);
                      });
                    });
                };
              e.on("init", function () {
                ao.setEditorTimeout(e, r, 0);
              });
            })(e);
      },
      xS = Wn,
      _S = Kn,
      SS = function (e, t) {
        return rd(e.getBody(), t);
      },
      ES = function (e) {
        var t,
          n = e.selection,
          r = e.dom,
          o = r.isBlock,
          i = e.getBody(),
          a = Us(e, i, o, function () {
            return wm(e);
          }),
          u = "sel-" + r.uniqueId(),
          c = "data-mce-selected",
          s = function (e) {
            return e !== i && (_S(e) || Yn(e)) && r.isChildOf(e, i);
          },
          l = function (e) {
            e && n.setRng(e);
          },
          f = n.getRng,
          d = function (t, r, o, i) {
            return (
              void 0 === i && (i = !0),
              e
                .fire("ShowCaret", { target: r, direction: t, before: o })
                .isDefaultPrevented()
                ? null
                : (i && n.scrollIntoView(r, -1 === t), a.show(o, r))
            );
          },
          m = function (e) {
            return To(e) || Lo(e) || Io(e);
          },
          p = function (e) {
            return m(e.startContainer) || m(e.endContainer);
          },
          g = function (t) {
            var n = e.schema.getShortEndedElements(),
              o = r.createRng(),
              i = t.startContainer,
              a = t.startOffset,
              u = t.endContainer,
              c = t.endOffset;
            return (
              ve(n, i.nodeName.toLowerCase())
                ? 0 === a
                  ? o.setStartBefore(i)
                  : o.setStartAfter(i)
                : o.setStart(i, a),
              ve(n, u.nodeName.toLowerCase())
                ? 0 === c
                  ? o.setEndBefore(u)
                  : o.setEndAfter(u)
                : o.setEnd(u, c),
              o
            );
          },
          h = function (o) {
            var i = o.cloneNode(!0),
              a = e.fire("ObjectSelected", { target: o, targetClone: i });
            if (a.isDefaultPrevented()) return null;
            var s = (function (t, o, i) {
                var a = e.$,
                  c = Qr(Tt.fromDom(e.getBody()), "#" + u).fold(
                    function () {
                      return a([]);
                    },
                    function (e) {
                      return a([e.dom]);
                    }
                  );
                0 === c.length &&
                  (c = a(
                    '<div data-mce-bogus="all" class="mce-offscreen-selection"></div>'
                  ).attr("id", u)).appendTo(e.getBody());
                var s = r.createRng();
                o === i && _t.ie
                  ? (c
                      .empty()
                      .append(
                        '<p style="font-size: 0" data-mce-bogus="all"> </p>'
                      )
                      .append(o),
                    s.setStartAfter(c[0].firstChild.firstChild),
                    s.setEndAfter(o))
                  : (c.empty().append(xo).append(o).append(xo),
                    s.setStart(c[0].firstChild, 1),
                    s.setEnd(c[0].lastChild, 0)),
                  c.css({ top: r.getPos(t, e.getBody()).y }),
                  c[0].focus();
                var l = n.getSel();
                return l.removeAllRanges(), l.addRange(s), s;
              })(o, a.targetClone, i),
              l = Tt.fromDom(o);
            return (
              $(
                Fu(Tt.fromDom(e.getBody()), "*[data-mce-selected]"),
                function (e) {
                  Pt(l, e) || nr(e, c);
                }
              ),
              r.getAttrib(o, c) || o.setAttribute(c, "1"),
              (t = o),
              b(),
              s
            );
          },
          v = function (e, t) {
            if (!e) return null;
            if (e.collapsed) {
              if (!p(e)) {
                var n = t ? 1 : -1,
                  o = ll(n, i, e),
                  a = o.getNode(!t);
                if (Vs(a)) return d(n, a, !!t && !o.isAtEnd(), !1);
                var u = o.getNode(t);
                if (Vs(u)) return d(n, u, !t && !o.isAtEnd(), !1);
              }
              return null;
            }
            var c = e.startContainer,
              l = e.startOffset,
              f = e.endOffset;
            if (
              (3 === c.nodeType &&
                0 === l &&
                _S(c.parentNode) &&
                ((c = c.parentNode), (l = r.nodeIndex(c)), (c = c.parentNode)),
              1 !== c.nodeType)
            )
              return null;
            if (f === l + 1 && c === e.endContainer) {
              var m = c.childNodes[l];
              if (s(m)) return h(m);
            }
            return null;
          },
          y = function () {
            t && t.removeAttribute(c),
              Qr(Tt.fromDom(e.getBody()), "#" + u).each(yn),
              (t = null);
          },
          b = function () {
            a.hide();
          };
        return (
          _t.ceFalse &&
            !jv(e) &&
            (function () {
              e.on("mouseup", function (t) {
                var n = f();
                n.collapsed &&
                  eb(e, t.clientX, t.clientY) &&
                  lC(e, n, !1).each(l);
              }),
                e.on("click", function (t) {
                  var o = SS(e, t.target);
                  o &&
                    (_S(o) && (t.preventDefault(), e.focus()),
                    xS(o) && r.isChildOf(o, n.getNode()) && y());
                }),
                e.on("blur NewBlock", y),
                e.on("ResizeWindow FullscreenStateChanged", a.reposition);
              var c = function (e) {
                  var t = Al(e);
                  if (!e.firstChild) return !1;
                  var n,
                    r = Rc.before(e.firstChild),
                    o = t.next(r);
                  return o && !(mp((n = o)) || pp(n) || sp(n) || lp(n));
                },
                m = function (t, n) {
                  var i,
                    a,
                    u = r.getParent(t, o),
                    s = r.getParent(n, o);
                  return (
                    !(
                      !u ||
                      t === s ||
                      !r.isChildOf(u, s) ||
                      !1 !== _S(SS(e, u))
                    ) ||
                    (u &&
                      ((i = u),
                      (a = s),
                      !(r.getParent(i, o) === r.getParent(a, o))) &&
                      c(u))
                  );
                };
              e.on(
                "tap",
                function (t) {
                  var n = t.target,
                    r = SS(e, n);
                  _S(r)
                    ? (t.preventDefault(), sC(e, r).each(v))
                    : s(n) && sC(e, n).each(v);
                },
                !0
              ),
                e.on("mousedown", function (t) {
                  var o = t.target;
                  if (
                    (o === i || "HTML" === o.nodeName || r.isChildOf(o, i)) &&
                    !1 !== eb(e, t.clientX, t.clientY)
                  ) {
                    var a = SS(e, o);
                    if (a)
                      _S(a)
                        ? (t.preventDefault(), sC(e, a).each(v))
                        : (y(),
                          (xS(a) && t.shiftKey) ||
                            od(t.clientX, t.clientY, n.getRng()) ||
                            (b(), n.placeCaretAt(t.clientX, t.clientY)));
                    else if (s(o)) sC(e, o).each(v);
                    else if (!1 === Vs(o)) {
                      y(), b();
                      var u = Lw(i, t.clientX, t.clientY);
                      if (u && !m(o, u.node)) {
                        t.preventDefault();
                        var c = d(1, u.node, u.before, !1);
                        e.getBody().focus(), l(c);
                      }
                    }
                  }
                }),
                e.on("keypress", function (e) {
                  ad.modifierPressed(e) ||
                    (_S(n.getNode()) && e.preventDefault());
                }),
                e.on("GetSelectionRange", function (e) {
                  var n = e.range;
                  if (t) {
                    if (!t.parentNode) return void (t = null);
                    (n = n.cloneRange()).selectNode(t), (e.range = n);
                  }
                }),
                e.on("SetSelectionRange", function (e) {
                  e.range = g(e.range);
                  var t = v(e.range, e.forward);
                  t && (e.range = t);
                }),
                e.on("AfterSetSelectionRange", function (e) {
                  var t,
                    n = e.range,
                    o = n.startContainer.parentNode;
                  p(n) || "mcepastebin" === o.id || b(),
                    (t = o),
                    r.hasClass(t, "mce-offscreen-selection") || y();
                }),
                e.on("copy", function (e) {
                  var t,
                    n = e.clipboardData;
                  if (!e.isDefaultPrevented() && e.clipboardData && !_t.ie) {
                    var o = (t = r.get(u)) ? t.getElementsByTagName("*")[0] : t;
                    o &&
                      (e.preventDefault(),
                      n.clearData(),
                      n.setData("text/html", o.outerHTML),
                      n.setData("text/plain", o.outerText || o.innerText));
                  }
                }),
                wS(e),
                (function (e) {
                  var t = Au(function () {
                    if (
                      !e.removed &&
                      e.getBody().contains(document.activeElement)
                    ) {
                      var t = e.selection.getRng();
                      if (t.collapsed) {
                        var n = fC(e, t, !1);
                        e.selection.setRng(n);
                      }
                    }
                  }, 0);
                  e.on("focus", function () {
                    t.throttle();
                  }),
                    e.on("blur", function () {
                      t.cancel();
                    });
                })(e),
                (function (e) {
                  e.on("init", function () {
                    e.on("focusin", function (t) {
                      var n = t.target;
                      if (Yn(n)) {
                        var r = rd(e.getBody(), n),
                          o = Kn(r) ? r : n;
                        e.selection.getNode() !== o &&
                          sC(e, o).each(function (t) {
                            return e.selection.setRng(t);
                          });
                      }
                    });
                  });
                })(e);
            })(),
          {
            showCaret: d,
            showBlockCaretContainer: function (e) {
              e.hasAttribute("data-mce-caret") &&
                (Mo(e), l(f()), n.scrollIntoView(e));
            },
            hideFakeCaret: b,
            destroy: function () {
              a.destroy(), (t = null);
            },
          }
        );
      },
      NS = function (e) {
        var t,
          n,
          r = At.each,
          o = ad.BACKSPACE,
          i = ad.DELETE,
          a = e.dom,
          u = e.selection,
          c = e.parser,
          s = _t.gecko,
          l = _t.ie,
          f = _t.webkit,
          d = "data:text/mce-internal,",
          m = l ? "Text" : "URL",
          p = function (t, n) {
            try {
              e.getDoc().execCommand(t, !1, n);
            } catch (r) {}
          },
          g = function (e) {
            return e.isDefaultPrevented();
          },
          h = function () {
            var t = function (e) {
              var t = a.create("body"),
                n = e.cloneContents();
              return (
                t.appendChild(n), u.serializer.serialize(t, { format: "html" })
              );
            };
            e.on("keydown", function (n) {
              var r,
                u,
                c,
                s,
                l,
                f = n.keyCode;
              if (!g(n) && (f === i || f === o)) {
                if (
                  ((r = e.selection.isCollapsed()),
                  (u = e.getBody()),
                  r && !a.isEmpty(u))
                )
                  return;
                if (
                  !r &&
                  ((c = e.selection.getRng()),
                  (s = t(c)),
                  (l = a.createRng()).selectNode(e.getBody()),
                  s !== t(l))
                )
                  return;
                n.preventDefault(),
                  e.setContent(""),
                  u.firstChild && a.isBlock(u.firstChild)
                    ? e.selection.setCursorLocation(u.firstChild, 0)
                    : e.selection.setCursorLocation(u, 0),
                  e.nodeChanged();
              }
            });
          },
          v = function () {
            e.shortcuts.add("meta+a", null, "SelectAll");
          },
          y = function () {
            Range.prototype.getClientRects ||
              e.on("mousedown", function (t) {
                if (!g(t) && "HTML" === t.target.nodeName) {
                  var n = e.getBody();
                  n.blur(),
                    ao.setEditorTimeout(e, function () {
                      n.focus();
                    });
                }
              });
          },
          b = function () {
            e.on("click", function (t) {
              var n = t.target;
              /^(IMG|HR)$/.test(n.nodeName) &&
                "false" !== a.getContentEditableParent(n) &&
                (t.preventDefault(), e.selection.select(n), e.nodeChanged()),
                "A" === n.nodeName &&
                  a.hasClass(n, "mce-item-anchor") &&
                  (t.preventDefault(), u.select(n));
            });
          },
          w = function () {
            e.on("keydown", function (e) {
              if (
                !g(e) &&
                e.keyCode === o &&
                u.isCollapsed() &&
                0 === u.getRng().startOffset
              ) {
                var t = u.getNode().previousSibling;
                if (t && t.nodeName && "table" === t.nodeName.toLowerCase())
                  return e.preventDefault(), !1;
              }
            });
          },
          x = function () {
            (function (e) {
              return e.getParam("readonly");
            })(e) ||
              e.on("BeforeExecCommand mousedown", function () {
                p("StyleWithCSS", !1),
                  p("enableInlineTableEditing", !1),
                  vs(e) || p("enableObjectResizing", !1);
              });
          },
          _ = function () {
            e.on("SetContent ExecCommand", function (e) {
              ("setcontent" !== e.type && "mceInsertLink" !== e.command) ||
                r(a.select("a"), function (e) {
                  var t = e.parentNode,
                    n = a.getRoot();
                  if (t.lastChild === e) {
                    for (; t && !a.isBlock(t); ) {
                      if (t.parentNode.lastChild !== t || t === n) return;
                      t = t.parentNode;
                    }
                    a.add(t, "br", { "data-mce-bogus": 1 });
                  }
                });
            });
          },
          S = function () {
            e.contentStyles.push(
              "img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"
            );
          },
          E = function () {
            e.inline ||
              e.on("keydown", function () {
                document.activeElement === document.body && e.getWin().focus();
              });
          },
          N = function () {
            e.inline ||
              (e.contentStyles.push("body {min-height: 150px}"),
              e.on("click", function (t) {
                var n;
                if ("HTML" === t.target.nodeName) {
                  if (_t.ie > 11) return void e.getBody().focus();
                  (n = e.selection.getRng()),
                    e.getBody().focus(),
                    e.selection.setRng(n),
                    e.selection.normalize(),
                    e.nodeChanged();
                }
              }));
          },
          k = function () {
            _t.mac &&
              e.on("keydown", function (t) {
                !ad.metaKeyPressed(t) ||
                  t.shiftKey ||
                  (37 !== t.keyCode && 39 !== t.keyCode) ||
                  (t.preventDefault(),
                  e.selection
                    .getSel()
                    .modify(
                      "move",
                      37 === t.keyCode ? "backward" : "forward",
                      "lineboundary"
                    ));
              });
          },
          A = function () {
            e.on("click", function (e) {
              var t = e.target;
              do {
                if ("A" === t.tagName) return void e.preventDefault();
              } while ((t = t.parentNode));
            }),
              e.contentStyles.push(
                ".mce-content-body {-webkit-touch-callout: none}"
              );
          },
          R = function () {
            e.on("init", function () {
              e.dom.bind(e.getBody(), "submit", function (e) {
                e.preventDefault();
              });
            });
          },
          T = function () {
            e.on("dragstart", function (t) {
              !(function (t) {
                var n, r;
                t.dataTransfer &&
                  (e.selection.isCollapsed() &&
                    "IMG" === t.target.tagName &&
                    u.select(t.target),
                  (n = e.selection.getContent()).length > 0 &&
                    ((r = d + escape(e.id) + "," + escape(n)),
                    t.dataTransfer.setData(m, r)));
              })(t);
            }),
              e.on("drop", function (t) {
                if (!g(t)) {
                  var n = (function (e) {
                    var t;
                    return e.dataTransfer &&
                      (t = e.dataTransfer.getData(m)) &&
                      t.indexOf(d) >= 0
                      ? ((t = t.substr(d.length).split(",")),
                        { id: unescape(t[0]), html: unescape(t[1]) })
                      : null;
                  })(t);
                  if (n && n.id !== e.id) {
                    t.preventDefault();
                    var r = ld(t.x, t.y, e.getDoc());
                    u.setRng(r),
                      (o = n.html),
                      (i = !0),
                      e.queryCommandSupported("mceInsertClipboardContent")
                        ? e.execCommand("mceInsertClipboardContent", !1, {
                            content: o,
                            internal: i,
                          })
                        : e.execCommand("mceInsertContent", !1, o);
                  }
                }
                var o, i;
              });
          },
          D = C;
        return (
          jv(e)
            ? (f && (b(), R(), v(), _t.iOS && (E(), N(), A())),
              s && (y(), x(), S(), k()))
            : (e.on("keydown", function (t) {
                var n, r;
                if (!g(t) && t.keyCode === ad.BACKSPACE) {
                  var o = (n = u.getRng()).startContainer,
                    i = n.startOffset,
                    c = a.getRoot();
                  if (((r = o), n.collapsed && 0 === i)) {
                    for (
                      ;
                      r &&
                      r.parentNode &&
                      r.parentNode.firstChild === r &&
                      r.parentNode !== c;

                    )
                      r = r.parentNode;
                    "BLOCKQUOTE" === r.tagName &&
                      (e.formatter.toggle("blockquote", null, r),
                      (n = a.createRng()).setStart(o, 0),
                      n.setEnd(o, 0),
                      u.setRng(n));
                  }
                }
              }),
              h(),
              _t.windowsPhone ||
                e.on(
                  "keyup focusin mouseup",
                  function (e) {
                    ad.modifierPressed(e) || u.normalize();
                  },
                  !0
                ),
              f &&
                (e.inline ||
                  a.bind(e.getDoc(), "mousedown mouseup", function (t) {
                    var n;
                    if (t.target === e.getDoc().documentElement)
                      if (
                        ((n = u.getRng()),
                        e.getBody().focus(),
                        "mousedown" === t.type)
                      ) {
                        if (To(n.startContainer)) return;
                        u.placeCaretAt(t.clientX, t.clientY);
                      } else u.setRng(n);
                  }),
                b(),
                rs(e) &&
                  e.on("init", function () {
                    p("DefaultParagraphSeparator", rs(e));
                  }),
                R(),
                w(),
                c.addNodeFilter("br", function (e) {
                  for (var t = e.length; t--; )
                    "Apple-interchange-newline" === e[t].attr("class") &&
                      e[t].remove();
                }),
                _t.iOS ? (E(), N(), A()) : v()),
              _t.ie >= 11 && (N(), w()),
              _t.ie && (v(), p("AutoUrlDetect", !1), T()),
              s &&
                (e.on("keydown", function (t) {
                  if (!g(t) && t.keyCode === o) {
                    if (!e.getBody().getElementsByTagName("hr").length) return;
                    if (u.isCollapsed() && 0 === u.getRng().startOffset) {
                      var n = u.getNode(),
                        r = n.previousSibling;
                      if ("HR" === n.nodeName)
                        return a.remove(n), void t.preventDefault();
                      r &&
                        r.nodeName &&
                        "hr" === r.nodeName.toLowerCase() &&
                        (a.remove(r), t.preventDefault());
                    }
                  }
                }),
                y(),
                (t = function () {
                  var t = a.getAttribs(u.getStart().cloneNode(!1));
                  return function () {
                    var n = u.getStart();
                    n !== e.getBody() &&
                      (a.setAttrib(n, "style", null),
                      r(t, function (e) {
                        n.setAttributeNode(e.cloneNode(!0));
                      }));
                  };
                }),
                (n = function () {
                  return (
                    !u.isCollapsed() &&
                    a.getParent(u.getStart(), a.isBlock) !==
                      a.getParent(u.getEnd(), a.isBlock)
                  );
                }),
                e.on("keypress", function (r) {
                  var o;
                  if (!g(r) && (8 === r.keyCode || 46 === r.keyCode) && n())
                    return (
                      (o = t()),
                      e.getDoc().execCommand("delete", !1, null),
                      o(),
                      r.preventDefault(),
                      !1
                    );
                }),
                a.bind(e.getDoc(), "cut", function (r) {
                  var o;
                  !g(r) &&
                    n() &&
                    ((o = t()),
                    ao.setEditorTimeout(e, function () {
                      o();
                    }));
                }),
                x(),
                _(),
                S(),
                k(),
                w())),
          {
            refreshContentEditable: D,
            isHidden: function () {
              if (!s || e.removed) return !1;
              var t = e.selection.getSel();
              return !t || !t.rangeCount || 0 === t.rangeCount;
            },
          }
        );
      },
      kS = vu.DOM,
      AS = function (e) {
        return e.inline ? e.getElement().nodeName.toLowerCase() : void 0;
      },
      RS = function (e) {
        return pe(e, function (e) {
          return !1 === g(e);
        });
      },
      TS = function (e) {
        var t = e.settings,
          n = e.editorUpload.blobCache;
        return RS({
          allow_conditional_comments: t.allow_conditional_comments,
          allow_html_data_urls: t.allow_html_data_urls,
          allow_svg_data_urls: t.allow_svg_data_urls,
          allow_html_in_named_anchor: t.allow_html_in_named_anchor,
          allow_script_urls: t.allow_script_urls,
          allow_unsafe_link_target: t.allow_unsafe_link_target,
          convert_fonts_to_spans: t.convert_fonts_to_spans,
          fix_list_elements: t.fix_list_elements,
          font_size_legacy_values: t.font_size_legacy_values,
          forced_root_block: t.forced_root_block,
          forced_root_block_attrs: t.forced_root_block_attrs,
          padd_empty_with_br: t.padd_empty_with_br,
          preserve_cdata: t.preserve_cdata,
          remove_trailing_brs: t.remove_trailing_brs,
          inline_styles: t.inline_styles,
          root_name: AS(e),
          validate: !0,
          blob_cache: n,
          images_dataimg_filter: t.images_dataimg_filter,
        });
      },
      DS = function (e) {
        var t = e.dom.getRoot();
        e.inline ||
          (Wf(e) && e.selection.getStart(!0) !== t) ||
          Ul(t).each(function (t) {
            var n = t.getNode(),
              r = Mn(n) ? Ul(n).getOr(t) : t;
            _t.browser.isIE()
              ? (function (e, t) {
                  var n = Tt.fromDom(e.getBody()),
                    r = (om(e) ? M.from(t) : M.none()).map(im).filter(rm(n));
                  e.bookmark = r.isSome() ? r : e.bookmark;
                })(e, r.toRange())
              : e.selection.setRng(r.toRange());
          });
      },
      OS = function (e) {
        e.bindPendingEventDelegates(),
          (e.initialized = !0),
          (function (e) {
            e.fire("Init");
          })(e),
          e.focus(!0),
          DS(e),
          e.nodeChanged({ initial: !0 }),
          e.execCallback("init_instance_callback", e),
          (function (e) {
            e.settings.auto_focus &&
              ao.setEditorTimeout(
                e,
                function () {
                  var t;
                  (t =
                    !0 === e.settings.auto_focus
                      ? e
                      : e.editorManager.get(e.settings.auto_focus)).destroyed ||
                    t.focus();
                },
                100
              );
          })(e);
      },
      BS = function (e) {
        return e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader;
      },
      PS = function (e, t) {
        var n = BS(e),
          r = hs(e),
          o = function () {
            n.unloadAll(t), e.inline || e.ui.styleSheetLoader.unloadAll(r);
          },
          i = function () {
            e.removed ? o() : (e.on("remove", o), OS(e));
          };
        eo.all(
          (function (e, t, n) {
            var r = [
              new eo(function (n, r) {
                return BS(e).loadAll(t, n, r);
              }),
            ];
            return e.inline
              ? r
              : r.concat([
                  new eo(function (t, r) {
                    return e.ui.styleSheetLoader.loadAll(n, t, r);
                  }),
                ]);
          })(e, t, r)
        )
          .then(i)
          .catch(i);
      },
      LS = function (e) {
        var t = e.settings,
          n = e.getDoc(),
          r = e.getBody();
        t.browser_spellcheck ||
          t.gecko_spellcheck ||
          ((n.body.spellcheck = !1), kS.setAttrib(r, "spellcheck", "false")),
          (e.quirks = NS(e)),
          (function (e) {
            e.fire("PostRender");
          })(e);
        var o = (function (e) {
          return e.getParam("directionality", Nu.isRtl() ? "rtl" : void 0);
        })(e);
        if (
          (void 0 !== o && (r.dir = o),
          t.protect &&
            e.on("BeforeSetContent", function (e) {
              At.each(t.protect, function (t) {
                e.content = e.content.replace(t, function (e) {
                  return "\x3c!--mce:protected " + escape(e) + "--\x3e";
                });
              });
            }),
          e.on("SetContent", function () {
            e.addVisual(e.getBody());
          }),
          jv(e) || e.load({ initial: !0, format: "html" }),
          (e.startContent = e.getContent({ format: "raw" })),
          e.on("compositionstart compositionend", function (t) {
            e.composing = "compositionstart" === t.type;
          }),
          e.contentStyles.length > 0)
        ) {
          var i = "";
          At.each(e.contentStyles, function (e) {
            i += e + "\r\n";
          }),
            e.dom.addStyle(i);
        }
        PS(e, e.contentCSS),
          t.content_style &&
            (function (e, t) {
              var n = Tt.fromDom(e.getBody()),
                r = sn(cn(n)),
                o = Tt.fromTag("style");
              Qn(o, "type", "text/css"),
                gn(o, Tt.fromText(t)),
                gn(r, o),
                e.on("remove", function () {
                  yn(o);
                });
            })(e, t.content_style);
      },
      IS = function (e, t) {
        var n = e.settings,
          r = e.getElement(),
          o = e.getDoc();
        n.inline || (e.getElement().style.visibility = e.orgVisibility),
          t || e.inline || (o.open(), o.write(e.iframeHTML), o.close()),
          e.inline &&
            (kS.addClass(r, "mce-content-body"),
            (e.contentDocument = o = document),
            (e.contentWindow = window),
            (e.bodyElement = r),
            (e.contentAreaContainer = r));
        var i = e.getBody();
        (i.disabled = !0),
          (e.readonly = !!n.readonly),
          e.readonly ||
            (e.inline &&
              "static" === kS.getStyle(i, "position", !0) &&
              (i.style.position = "relative"),
            (i.contentEditable = e.getParam("content_editable_state", !0))),
          (i.disabled = !1),
          (e.editorUpload = wb(e)),
          (e.schema = Ti(n)),
          (e.dom = vu(o, {
            keep_values: !0,
            url_converter: e.convertURL,
            url_converter_scope: e,
            hex_colors: n.force_hex_style_colors,
            update_styles: !0,
            root_element: e.inline ? e.getBody() : null,
            collect: function () {
              return e.inline;
            },
            schema: e.schema,
            contentCssCors: ds(e),
            referrerPolicy: ms(e),
            onSetAttrib: function (t) {
              e.fire("SetAttrib", t);
            },
          })),
          (e.parser = (function (e) {
            var t = gy(TS(e), e.schema);
            return (
              t.addAttributeFilter("src,href,style,tabindex", function (t, n) {
                for (
                  var r, o, i = t.length, a = e.dom, u = "data-mce-" + n;
                  i--;

                )
                  if ((o = (r = t[i]).attr(n)) && !r.attr(u)) {
                    if (0 === o.indexOf("data:") || 0 === o.indexOf("blob:"))
                      continue;
                    "style" === n
                      ? ((o = a.serializeStyle(a.parseStyle(o), r.name))
                          .length || (o = null),
                        r.attr(u, o),
                        r.attr(n, o))
                      : "tabindex" === n
                      ? (r.attr(u, o), r.attr(n, null))
                      : r.attr(u, e.convertURL(o, n, r.name));
                  }
              }),
              t.addNodeFilter("script", function (e) {
                for (var t = e.length; t--; ) {
                  var n = e[t],
                    r = n.attr("type") || "no/type";
                  0 !== r.indexOf("mce-") && n.attr("type", "mce-" + r);
                }
              }),
              e.settings.preserve_cdata &&
                t.addNodeFilter("#cdata", function (t) {
                  for (var n = t.length; n--; ) {
                    var r = t[n];
                    (r.type = 8),
                      (r.name = "#comment"),
                      (r.value = "[CDATA[" + e.dom.encode(r.value) + "]]");
                  }
                }),
              t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (t) {
                for (
                  var n = t.length, r = e.schema.getNonEmptyElements();
                  n--;

                ) {
                  var o = t[n];
                  o.isEmpty(r) &&
                    0 === o.getAll("br").length &&
                    (o.append(new Pm("br", 1)).shortEnded = !0);
                }
              }),
              t
            );
          })(e)),
          (e.serializer = Cy(
            (function (e) {
              var t = e.settings;
              return ke(
                ke({}, TS(e)),
                RS({
                  url_converter: t.url_converter,
                  url_converter_scope: t.url_converter_scope,
                  element_format: t.element_format,
                  entities: t.entities,
                  entity_encoding: t.entity_encoding,
                  indent: t.indent,
                  indent_after: t.indent_after,
                  indent_before: t.indent_before,
                  block_elements: t.block_elements,
                  boolean_attributes: t.boolean_attributes,
                  custom_elements: t.custom_elements,
                  extended_valid_elements: t.extended_valid_elements,
                  invalid_elements: t.invalid_elements,
                  invalid_styles: t.invalid_styles,
                  move_caret_before_on_enter_elements:
                    t.move_caret_before_on_enter_elements,
                  non_empty_elements: t.non_empty_elements,
                  schema: t.schema,
                  self_closing_elements: t.self_closing_elements,
                  short_ended_elements: t.short_ended_elements,
                  special: t.special,
                  text_block_elements: t.text_block_elements,
                  text_inline_elements: t.text_inline_elements,
                  valid_children: t.valid_children,
                  valid_classes: t.valid_classes,
                  valid_elements: t.valid_elements,
                  valid_styles: t.valid_styles,
                  verify_html: t.verify_html,
                  whitespace_elements: t.whitespace_elements,
                })
              );
            })(e),
            e
          )),
          (e.selection = Jv(e.dom, e.getWin(), e.serializer, e)),
          (e.annotator = td(e)),
          (e.formatter = Ab(e)),
          (e.undoManager = Rb(e)),
          (e._nodeChangeDispatcher = new uS(e)),
          (e._selectionOverrides = ES(e)),
          yx(e),
          cS(e),
          jv(e) || lS(e);
        var a = (function (e) {
          return jv(e) ? xu(null) : aS(e);
        })(e);
        hx(e, a),
          (function (e) {
            rs(e) && e.on("NodeChange", S(xx, e));
          })(e),
          Pb(e),
          (function (e) {
            e.fire("PreInit");
          })(e),
          zv(e).fold(
            function () {
              LS(e);
            },
            function (t) {
              e.setProgressState(!0),
                t.then(
                  function (t) {
                    e.setProgressState(!1), LS(e);
                  },
                  function (t) {
                    e.notificationManager.open({
                      type: "error",
                      text: String(t),
                    }),
                      LS(e);
                  }
                );
            }
          );
      },
      MS = vu.DOM,
      FS = function (e) {
        var t =
          (function (e) {
            return e.getParam("doctype", "<!DOCTYPE html>");
          })(e) + "<html><head>";
        (function (e) {
          return e.getParam("document_base_url", "");
        })(e) !== e.documentBaseUrl &&
          (t += '<base href="' + e.documentBaseURI.getURI() + '" />'),
          (t +=
            '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />');
        var n = (function (e) {
            return ts(e, "body_id", "tinymce");
          })(e),
          r = (function (e) {
            return ts(e, "body_class", "");
          })(e);
        return (
          ns(e) &&
            (t +=
              '<meta http-equiv="Content-Security-Policy" content="' +
              ns(e) +
              '" />'),
          (t +=
            '</head><body id="' +
            n +
            '" class="mce-content-body ' +
            r +
            '" data-id="' +
            e.id +
            '"><br></body></html>')
        );
      },
      US = function (e, t) {
        var n = e.editorManager.translate(
            "Rich Text Area. Press ALT-0 for help."
          ),
          r = (function (e, t, n, r) {
            var o = Tt.fromTag("iframe");
            return (
              Zn(o, r),
              Zn(o, {
                id: e + "_ifr",
                frameBorder: "0",
                allowTransparency: "true",
                title: t,
              }),
              Pu(o, "tox-edit-area__iframe"),
              o
            );
          })(
            e.id,
            n,
            t.height,
            (function (e) {
              return e.getParam("iframe_attrs", {});
            })(e)
          ).dom;
        r.onload = function () {
          (r.onload = null), e.fire("load");
        };
        var o = (function (e, t) {
          if (
            document.domain !== window.location.hostname &&
            _t.browser.isIE()
          ) {
            var n = vb("mce");
            e[n] = function () {
              IS(e);
            };
            var r =
              'javascript:(function(){document.open();document.domain="' +
              document.domain +
              '";var ed = window.parent.tinymce.get("' +
              e.id +
              '");document.write(ed.iframeHTML);document.close();ed.' +
              n +
              "(true);})()";
            return MS.setAttrib(t, "src", r), !0;
          }
          return !1;
        })(e, r);
        return (
          (e.contentAreaContainer = t.iframeContainer),
          (e.iframeElement = r),
          (e.iframeHTML = FS(e)),
          MS.add(t.iframeContainer, r),
          o
        );
      },
      jS = vu.DOM,
      zS = function (e, t, n) {
        var r = rb.get(n),
          o = rb.urls[n] || e.documentBaseUrl.replace(/\/$/, "");
        if (((n = At.trim(n)), r && -1 === At.inArray(t, n))) {
          if (
            (At.each(rb.dependencies(n), function (n) {
              zS(e, t, n);
            }),
            e.plugins[n])
          )
            return;
          try {
            var i = new r(e, o, e.$);
            (e.plugins[n] = i), i.init && (i.init(e, o), t.push(n));
          } catch (VN) {
            !(function (e, t, n) {
              var r = Nu.translate(["Failed to initialize plugin: {0}", t]);
              id(e, "PluginLoadError", { message: r }), fb(r, n), ub(e, r);
            })(e, n, VN);
          }
        }
      },
      VS = function (e) {
        return e.replace(/^\-/, "");
      },
      HS = function (e) {
        return { editorContainer: e, iframeContainer: e, api: {} };
      },
      qS = function (e) {
        var t = e.getElement();
        return e.inline
          ? HS(null)
          : (function (e) {
              var t = jS.create("div");
              return jS.insertAfter(t, e), HS(t);
            })(t);
      },
      $S = function (e) {
        var t = e.getElement();
        return (
          (e.orgDisplay = t.style.display),
          l(bs(e))
            ? (function (e) {
                return e.theme.renderUI();
              })(e)
            : y(bs(e))
            ? (function (e) {
                var t = e.getElement(),
                  n = bs(e)(e, t);
                return (
                  n.editorContainer.nodeType &&
                    (n.editorContainer.id =
                      n.editorContainer.id || e.id + "_parent"),
                  n.iframeContainer &&
                    n.iframeContainer.nodeType &&
                    (n.iframeContainer.id =
                      n.iframeContainer.id || e.id + "_iframecontainer"),
                  (n.height = n.iframeHeight ? n.iframeHeight : t.offsetHeight),
                  n
                );
              })(e)
            : qS(e)
        );
      },
      WS = function (e) {
        e.fire("ScriptsLoaded"),
          (function (e) {
            var t = At.trim(us(e)),
              n = e.ui.registry.getAll().icons,
              r = ke(ke({}, Ky.get("default").icons), Ky.get(t).icons);
            ce(r, function (t, r) {
              ve(n, r) || e.ui.registry.addIcon(r, t);
            });
          })(e),
          (function (e) {
            var t = bs(e);
            if (l(t)) {
              e.settings.theme = VS(t);
              var n = ob.get(t);
              (e.theme = new n(e, ob.urls[t])),
                e.theme.init &&
                  e.theme.init(
                    e,
                    ob.urls[t] || e.documentBaseUrl.replace(/\/$/, ""),
                    e.$
                  );
            } else e.theme = {};
          })(e),
          (function (e) {
            var t = [];
            At.each(_s(e).split(/[ ,]/), function (n) {
              zS(e, t, VS(n));
            });
          })(e);
        var t = $S(e);
        !(function (e, t) {
          var n = {
            show: M.from(t.show).getOr(C),
            hide: M.from(t.hide).getOr(C),
            disable: M.from(t.disable).getOr(C),
            isDisabled: M.from(t.isDisabled).getOr(O),
            enable: function () {
              e.mode.isReadOnly() || M.from(t.enable).map(D);
            },
          };
          e.ui = ke(ke({}, e.ui), n);
        })(e, M.from(t.api).getOr({}));
        var n = {
          editorContainer: t.editorContainer,
          iframeContainer: t.iframeContainer,
        };
        return (
          (e.editorContainer = n.editorContainer ? n.editorContainer : null),
          pb(e),
          e.inline
            ? IS(e)
            : (function (e, t) {
                var n = US(e, t);
                t.editorContainer &&
                  ((MS.get(t.editorContainer).style.display = e.orgDisplay),
                  (e.hidden = MS.isHidden(t.editorContainer))),
                  (e.getElement().style.display = "none"),
                  MS.setAttrib(e.id, "aria-hidden", "true"),
                  n || IS(e);
              })(e, n)
        );
      },
      KS = vu.DOM,
      XS = function (e) {
        return "-" === e.charAt(0);
      },
      YS = function (e, t) {
        var n = ps(t),
          r = (function (e) {
            return e.getParam("language_url", "", "string");
          })(t);
        if (!1 === Nu.hasCode(n) && "en" !== n) {
          var o =
            "" !== r ? r : t.editorManager.baseURL + "/langs/" + n + ".js";
          e.add(o, C, void 0, function () {
            !(function (e, t, n) {
              cb(e, "LanguageLoadError", sb("language", t, n));
            })(t, o, n);
          });
        }
      },
      GS = function (e, t, n) {
        return M.from(t)
          .filter(function (e) {
            return e.length > 0 && !Ky.has(e);
          })
          .map(function (t) {
            return {
              url:
                e.editorManager.baseURL + "/icons/" + t + "/icons" + n + ".js",
              name: M.some(t),
            };
          });
      },
      JS = function (e, t, n) {
        var r = GS(t, "default", n),
          o = (function (e) {
            return M.from(
              (function (e) {
                return e.getParam("icons_url", "", "string");
              })(e)
            )
              .filter(function (e) {
                return e.length > 0;
              })
              .map(function (e) {
                return { url: e, name: M.none() };
              });
          })(t).orThunk(function () {
            return GS(t, us(t), "");
          });
        $(
          (function (e) {
            for (
              var t = [],
                n = function (e) {
                  t.push(e);
                },
                r = 0;
              r < e.length;
              r++
            )
              e[r].each(n);
            return t;
          })([r, o]),
          function (n) {
            e.add(n.url, C, void 0, function () {
              !(function (e, t, n) {
                cb(e, "IconsLoadError", sb("icons", t, n));
              })(t, n.url, n.name.getOrUndefined());
            });
          }
        );
      },
      QS = function (e, t) {
        var n = wu.ScriptLoader;
        !(function (e, t, n, r) {
          var o = bs(t);
          if (l(o)) {
            if (!XS(o) && !ob.urls.hasOwnProperty(o)) {
              var i = (function (e) {
                return e.getParam("theme_url");
              })(t);
              i
                ? ob.load(o, t.documentBaseURI.toAbsolute(i))
                : ob.load(o, "themes/" + o + "/theme" + n + ".js");
            }
            e.loadQueue(function () {
              ob.waitFor(o, r);
            });
          } else r();
        })(n, e, t, function () {
          YS(n, e),
            JS(n, e, t),
            (function (e, t) {
              At.each(
                (function (e) {
                  return e.getParam("external_plugins");
                })(e),
                function (t, n) {
                  rb.load(n, t, C, void 0, function () {
                    lb(e, t, n);
                  }),
                    (e.settings.plugins += " " + n);
                }
              ),
                At.each(_s(e).split(/[ ,]/), function (n) {
                  if ((n = At.trim(n)) && !rb.urls[n])
                    if (XS(n)) {
                      n = n.substr(1, n.length);
                      var r = rb.dependencies(n);
                      At.each(r, function (n) {
                        var r = {
                            prefix: "plugins/",
                            resource: n,
                            suffix: "/plugin" + t + ".js",
                          },
                          o = rb.createUrl(r, n);
                        rb.load(o.resource, o, C, void 0, function () {
                          lb(e, o.prefix + o.resource + o.suffix, o.resource);
                        });
                      });
                    } else {
                      var o = {
                        prefix: "plugins/",
                        resource: n,
                        suffix: "/plugin" + t + ".js",
                      };
                      rb.load(n, o, C, void 0, function () {
                        lb(e, o.prefix + o.resource + o.suffix, n);
                      });
                    }
                });
            })(e, t),
            n.loadQueue(
              function () {
                e.removed || WS(e);
              },
              e,
              function () {
                e.removed || WS(e);
              }
            );
        });
      },
      ZS = function (e) {
        var t = e.id;
        Nu.setCode(ps(e));
        var n = function () {
          KS.unbind(window, "ready", n), e.render();
        };
        if (zi.Event.domLoaded) {
          if (e.getElement() && _t.contentEditable) {
            var r = Tt.fromDom(e.getElement()),
              o = (function (e) {
                return Y(
                  e.dom.attributes,
                  function (e, t) {
                    return (e[t.name] = t.value), e;
                  },
                  {}
                );
              })(r);
            e.on("remove", function () {
              W(r.dom.attributes, function (e) {
                return nr(r, e.name);
              }),
                Zn(r, o);
            }),
              (e.ui.styleSheetLoader = (function (e, t) {
                return co.forElement(e, {
                  contentCssCors: xs(t),
                  referrerPolicy: ms(t),
                });
              })(r, e)),
              (function (e) {
                return e.getParam("inline");
              })(e)
                ? (e.inline = !0)
                : ((e.orgVisibility = e.getElement().style.visibility),
                  (e.getElement().style.visibility = "hidden"));
            var i = e.getElement().form || KS.getParent(t, "form");
            i &&
              ((e.formElement = i),
              (function (e) {
                return e.getParam("hidden_input");
              })(e) &&
                !Un(e.getElement()) &&
                (KS.insertAfter(
                  KS.create("input", { type: "hidden", name: t }),
                  t
                ),
                (e.hasHiddenInput = !0)),
              (e.formEventDelegate = function (t) {
                e.fire(t.type, t);
              }),
              KS.bind(i, "submit reset", e.formEventDelegate),
              e.on("reset", function () {
                e.resetContent();
              }),
              !(function (e) {
                return e.getParam("submit_patch");
              })(e) ||
                i.submit.nodeType ||
                i.submit.length ||
                i._mceOldSubmit ||
                ((i._mceOldSubmit = i.submit),
                (i.submit = function () {
                  return (
                    e.editorManager.triggerSave(),
                    e.setDirty(!1),
                    i._mceOldSubmit(i)
                  );
                }))),
              (e.windowManager = ib(e)),
              (e.notificationManager = nb(e)),
              (function (e) {
                return "xml" === e.getParam("encoding");
              })(e) &&
                e.on("GetContent", function (e) {
                  e.save && (e.content = KS.encode(e.content));
                }),
              (function (e) {
                return e.getParam("add_form_submit_trigger");
              })(e) &&
                e.on("submit", function () {
                  e.initialized && e.save();
                }),
              (function (e) {
                return e.getParam("add_unload_trigger");
              })(e) &&
                ((e._beforeUnload = function () {
                  !e.initialized ||
                    e.destroyed ||
                    e.isHidden() ||
                    e.save({ format: "raw", no_events: !0, set_dirty: !1 });
                }),
                e.editorManager.on("BeforeUnload", e._beforeUnload)),
              e.editorManager.add(e),
              QS(e, e.suffix);
          }
        } else KS.bind(window, "ready", n);
      },
      eE = function (e, t) {
        return (function (e, t) {
          return Hv(e).editor.addVisual(t);
        })(e, t);
      },
      tE = { "font-size": "size", "font-family": "face" },
      nE = function (e, t, n) {
        return rh(
          Tt.fromDom(n),
          function (t) {
            return (function (t) {
              return ar(t, e).orThunk(function () {
                return "font" === Ut(t)
                  ? he(tE, e).bind(function (e) {
                      return tr(t, e);
                    })
                  : M.none();
              });
            })(t);
          },
          function (e) {
            return Pt(Tt.fromDom(t), e);
          }
        );
      },
      rE = function (e) {
        return function (t, n) {
          return M.from(n)
            .map(Tt.fromDom)
            .filter(Vt)
            .bind(function (n) {
              return nE(e, t, n.dom).or(
                (function (e, t) {
                  return M.from(vu.DOM.getStyle(t, e, !0));
                })(e, n.dom)
              );
            })
            .getOr("");
        };
      },
      oE = rE("font-size"),
      iE = w(function (e) {
        return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
      }, rE("font-family")),
      aE = function (e) {
        return Ul(e.getBody()).map(function (e) {
          var t = e.container();
          return jn(t) ? t.parentNode : t;
        });
      },
      uE = function (e, t) {
        return (function (e) {
          return M.from(e.selection.getRng()).bind(function (t) {
            var n = e.getBody();
            return t.startContainer === n && 0 === t.startOffset
              ? M.none()
              : M.from(e.selection.getStart(!0));
          });
        })(e)
          .orThunk(S(aE, e))
          .map(Tt.fromDom)
          .filter(Vt)
          .map(t);
      },
      cE = function (e, t) {
        if (/^[0-9.]+$/.test(t)) {
          var n = parseInt(t, 10);
          if (n >= 1 && n <= 7) {
            var r = (function (e) {
                return At.explode(
                  e.getParam(
                    "font_size_style_values",
                    "xx-small,x-small,small,medium,large,x-large,xx-large"
                  )
                );
              })(e),
              o = (function (e) {
                return At.explode(e.getParam("font_size_classes", ""));
              })(e);
            return o ? o[n - 1] || t : r[n - 1] || t;
          }
          return t;
        }
        return t;
      },
      sE = function (e) {
        var t = e.split(/\s*,\s*/);
        return q(t, function (e) {
          return -1 === e.indexOf(" ") || Ue(e, '"') || Ue(e, "'")
            ? e
            : "'" + e + "'";
        }).join(",");
      },
      lE = function (e, t) {
        var n = (function (e) {
          var t;
          return "string" != typeof e
            ? ((t = At.extend({ paste: e.paste, data: { paste: e.paste } }, e)),
              { content: e.content, details: t })
            : { content: e, details: {} };
        })(t);
        !(function (e, t, n) {
          Vv(e).editor.insertContent(t, n);
        })(e, n.content, n.details);
      },
      fE = At.each,
      dE = At.map,
      mE = At.inArray,
      pE = (function () {
        function e(e) {
          (this.commands = { state: {}, exec: {}, value: {} }),
            (this.editor = e),
            this.setupCommands(e);
        }
        return (
          (e.prototype.execCommand = function (e, t, n, r) {
            var o,
              i = !1,
              a = this;
            if (!a.editor.removed) {
              var u;
              if (
                (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(
                  e
                ) ||
                (r && r.skip_focus)
                  ? ((u = a.editor),
                    sm(u).each(function (e) {
                      return u.selection.setRng(e);
                    }))
                  : a.editor.focus(),
                (r = a.editor.fire("BeforeExecCommand", {
                  command: e,
                  ui: t,
                  value: n,
                })).isDefaultPrevented())
              )
                return !1;
              var c = e.toLowerCase();
              if ((o = a.commands.exec[c]))
                return (
                  o(c, t, n),
                  a.editor.fire("ExecCommand", { command: e, ui: t, value: n }),
                  !0
                );
              if (
                (fE(this.editor.plugins, function (r) {
                  if (r.execCommand && r.execCommand(e, t, n))
                    return (
                      a.editor.fire("ExecCommand", {
                        command: e,
                        ui: t,
                        value: n,
                      }),
                      (i = !0),
                      !1
                    );
                }),
                i)
              )
                return i;
              if (
                a.editor.theme &&
                a.editor.theme.execCommand &&
                a.editor.theme.execCommand(e, t, n)
              )
                return (
                  a.editor.fire("ExecCommand", { command: e, ui: t, value: n }),
                  !0
                );
              try {
                i = a.editor.getDoc().execCommand(e, t, n);
              } catch (s) {}
              return (
                !!i &&
                (a.editor.fire("ExecCommand", { command: e, ui: t, value: n }),
                !0)
              );
            }
          }),
          (e.prototype.queryCommandState = function (e) {
            var t;
            if (!this.editor.quirks.isHidden() && !this.editor.removed) {
              if (((e = e.toLowerCase()), (t = this.commands.state[e])))
                return t(e);
              try {
                return this.editor.getDoc().queryCommandState(e);
              } catch (n) {}
              return !1;
            }
          }),
          (e.prototype.queryCommandValue = function (e) {
            var t;
            if (!this.editor.quirks.isHidden() && !this.editor.removed) {
              if (((e = e.toLowerCase()), (t = this.commands.value[e])))
                return t(e);
              try {
                return this.editor.getDoc().queryCommandValue(e);
              } catch (n) {}
            }
          }),
          (e.prototype.addCommands = function (e, t) {
            void 0 === t && (t = "exec");
            var n = this;
            fE(e, function (e, r) {
              fE(r.toLowerCase().split(","), function (r) {
                n.commands[t][r] = e;
              });
            });
          }),
          (e.prototype.addCommand = function (e, t, n) {
            var r = this;
            (e = e.toLowerCase()),
              (this.commands.exec[e] = function (e, o, i, a) {
                return t.call(n || r.editor, o, i, a);
              });
          }),
          (e.prototype.queryCommandSupported = function (e) {
            if (((e = e.toLowerCase()), this.commands.exec[e])) return !0;
            try {
              return this.editor.getDoc().queryCommandSupported(e);
            } catch (t) {}
            return !1;
          }),
          (e.prototype.addQueryStateHandler = function (e, t, n) {
            var r = this;
            (e = e.toLowerCase()),
              (this.commands.state[e] = function () {
                return t.call(n || r.editor);
              });
          }),
          (e.prototype.addQueryValueHandler = function (e, t, n) {
            var r = this;
            (e = e.toLowerCase()),
              (this.commands.value[e] = function () {
                return t.call(n || r.editor);
              });
          }),
          (e.prototype.hasCustomCommand = function (e) {
            return (e = e.toLowerCase()), !!this.commands.exec[e];
          }),
          (e.prototype.execNativeCommand = function (e, t, n) {
            return (
              void 0 === t && (t = !1),
              void 0 === n && (n = null),
              this.editor.getDoc().execCommand(e, t, n)
            );
          }),
          (e.prototype.isFormatMatch = function (e) {
            return this.editor.formatter.match(e);
          }),
          (e.prototype.toggleFormat = function (e, t) {
            this.editor.formatter.toggle(e, t ? { value: t } : void 0),
              this.editor.nodeChanged();
          }),
          (e.prototype.storeSelection = function (e) {
            this.selectionBookmark = this.editor.selection.getBookmark(e);
          }),
          (e.prototype.restoreSelection = function () {
            this.editor.selection.moveToBookmark(this.selectionBookmark);
          }),
          (e.prototype.setupCommands = function (e) {
            var t = this;
            this.addCommands({
              "mceResetDesignMode,mceBeginUndoLevel": C,
              "mceEndUndoLevel,mceAddUndoLevel": function () {
                e.undoManager.add();
              },
              "Cut,Copy,Paste": function (n) {
                var r,
                  o = e.getDoc();
                try {
                  t.execNativeCommand(n);
                } catch (a) {
                  r = !0;
                }
                if (
                  ("paste" !== n || o.queryCommandEnabled(n) || (r = !0),
                  r || !o.queryCommandSupported(n))
                ) {
                  var i = e.translate(
                    "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."
                  );
                  _t.mac && (i = i.replace(/Ctrl\+/g, "⌘+")),
                    e.notificationManager.open({ text: i, type: "error" });
                }
              },
              unlink: function () {
                if (e.selection.isCollapsed()) {
                  var t = e.dom.getParent(e.selection.getStart(), "a");
                  t && e.dom.remove(t, !0);
                } else e.formatter.remove("link");
              },
              "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":
                function (n) {
                  var r = n.substring(7);
                  "full" === r && (r = "justify"),
                    fE("left,center,right,justify".split(","), function (t) {
                      r !== t && e.formatter.remove("align" + t);
                    }),
                    "none" !== r && t.toggleFormat("align" + r);
                },
              "InsertUnorderedList,InsertOrderedList": function (n) {
                var r;
                t.execNativeCommand(n);
                var o = e.dom.getParent(e.selection.getNode(), "ol,ul");
                o &&
                  ((r = o.parentNode),
                  /^(H[1-6]|P|ADDRESS|PRE)$/.test(r.nodeName) &&
                    (t.storeSelection(),
                    e.dom.split(r, o),
                    t.restoreSelection()));
              },
              "Bold,Italic,Underline,Strikethrough,Superscript,Subscript":
                function (e) {
                  t.toggleFormat(e);
                },
              "ForeColor,HiliteColor": function (e, n, r) {
                t.toggleFormat(e, r);
              },
              FontName: function (t, n, r) {
                !(function (e, t) {
                  var n = cE(e, t);
                  e.formatter.toggle("fontname", { value: sE(n) }),
                    e.nodeChanged();
                })(e, r);
              },
              FontSize: function (t, n, r) {
                !(function (e, t) {
                  e.formatter.toggle("fontsize", { value: cE(e, t) }),
                    e.nodeChanged();
                })(e, r);
              },
              LineHeight: function (t, n, r) {
                !(function (e, t) {
                  e.formatter.toggle("lineheight", { value: String(t) }),
                    e.nodeChanged();
                })(e, r);
              },
              RemoveFormat: function (t) {
                e.formatter.remove(t);
              },
              mceBlockQuote: function () {
                t.toggleFormat("blockquote");
              },
              FormatBlock: function (e, n, r) {
                return t.toggleFormat(r || "p");
              },
              mceCleanup: function () {
                var t = e.selection.getBookmark();
                e.setContent(e.getContent()), e.selection.moveToBookmark(t);
              },
              mceRemoveNode: function (n, r, o) {
                var i = o || e.selection.getNode();
                i !== e.getBody() &&
                  (t.storeSelection(),
                  e.dom.remove(i, !0),
                  t.restoreSelection());
              },
              mceSelectNodeDepth: function (t, n, r) {
                var o = 0;
                e.dom.getParent(
                  e.selection.getNode(),
                  function (t) {
                    if (1 === t.nodeType && o++ === r)
                      return e.selection.select(t), !1;
                  },
                  e.getBody()
                );
              },
              mceSelectNode: function (t, n, r) {
                e.selection.select(r);
              },
              mceInsertContent: function (t, n, r) {
                lE(e, r);
              },
              mceInsertRawHTML: function (t, n, r) {
                e.selection.setContent("tiny_mce_marker");
                var o = e.getContent();
                e.setContent(
                  o.replace(/tiny_mce_marker/g, function () {
                    return r;
                  })
                );
              },
              mceInsertNewLine: function (t, n, r) {
                q_(e, r);
              },
              mceToggleFormat: function (e, n, r) {
                t.toggleFormat(r);
              },
              mceSetContent: function (t, n, r) {
                e.setContent(r);
              },
              "Indent,Outdent": function (t) {
                mx(e, t);
              },
              mceRepaint: C,
              InsertHorizontalRule: function () {
                e.execCommand("mceInsertContent", !1, "<hr />");
              },
              mceToggleVisualAid: function () {
                (e.hasVisual = !e.hasVisual), e.addVisual();
              },
              mceReplaceContent: function (t, n, r) {
                e.execCommand(
                  "mceInsertContent",
                  !1,
                  r.replace(
                    /\{\$selection\}/g,
                    e.selection.getContent({ format: "text" })
                  )
                );
              },
              mceInsertLink: function (t, n, r) {
                "string" == typeof r && (r = { href: r });
                var o = e.dom.getParent(e.selection.getNode(), "a");
                (r.href = r.href.replace(/ /g, "%20")),
                  (o && r.href) || e.formatter.remove("link"),
                  r.href && e.formatter.apply("link", r, o);
              },
              selectAll: function () {
                var t = e.dom.getParent(e.selection.getStart(), Wn);
                if (t) {
                  var n = e.dom.createRng();
                  n.selectNodeContents(t), e.selection.setRng(n);
                }
              },
              mceNewDocument: function () {
                e.setContent("");
              },
              InsertLineBreak: function (t, n, r) {
                return D_(e, r), !0;
              },
            });
            var n = function (t) {
              return function () {
                var n = e.selection,
                  r = n.isCollapsed()
                    ? [e.dom.getParent(n.getNode(), e.dom.isBlock)]
                    : n.getSelectedBlocks(),
                  o = dE(r, function (n) {
                    return !!e.formatter.matchNode(n, t);
                  });
                return -1 !== mE(o, !0);
              };
            };
            t.addCommands(
              {
                JustifyLeft: n("alignleft"),
                JustifyCenter: n("aligncenter"),
                JustifyRight: n("alignright"),
                JustifyFull: n("alignjustify"),
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript":
                  function (e) {
                    return t.isFormatMatch(e);
                  },
                mceBlockQuote: function () {
                  return t.isFormatMatch("blockquote");
                },
                Outdent: function () {
                  return lx(e);
                },
                "InsertUnorderedList,InsertOrderedList": function (t) {
                  var n = e.dom.getParent(e.selection.getNode(), "ul,ol");
                  return (
                    n &&
                    (("insertunorderedlist" === t && "UL" === n.tagName) ||
                      ("insertorderedlist" === t && "OL" === n.tagName))
                  );
                },
              },
              "state"
            ),
              t.addCommands({
                Undo: function () {
                  e.undoManager.undo();
                },
                Redo: function () {
                  e.undoManager.redo();
                },
              }),
              t.addQueryValueHandler(
                "FontName",
                function () {
                  return (function (e) {
                    return uE(e, function (t) {
                      return iE(e.getBody(), t.dom);
                    }).getOr("");
                  })(e);
                },
                this
              ),
              t.addQueryValueHandler(
                "FontSize",
                function () {
                  return (function (e) {
                    return uE(e, function (t) {
                      return oE(e.getBody(), t.dom);
                    }).getOr("");
                  })(e);
                },
                this
              ),
              t.addQueryValueHandler(
                "LineHeight",
                function () {
                  return (function (e) {
                    return uE(e, function (t) {
                      var n = Tt.fromDom(e.getBody());
                      return rh(
                        t,
                        function (e) {
                          return ar(e, "line-height");
                        },
                        S(Pt, n)
                      ).getOrThunk(function () {
                        var e = parseFloat(or(t, "line-height")),
                          n = parseFloat(or(t, "font-size"));
                        return String(e / n);
                      });
                    }).getOr("");
                  })(e);
                },
                this
              );
          }),
          e
        );
      })(),
      gE = "data-mce-contenteditable",
      hE = function (e, t, n) {
        var r, o;
        Iu(e, t) && !1 === n
          ? ((o = t), Du((r = e)) ? r.dom.classList.remove(o) : Bu(r, o), Lu(r))
          : n && Pu(e, t);
      },
      vE = function (e, t, n) {
        try {
          e.getDoc().execCommand(t, !1, String(n));
        } catch (r) {}
      },
      yE = function (e, t) {
        e.dom.contentEditable = t ? "true" : "false";
      },
      bE = function (e, t) {
        var n = Tt.fromDom(e.getBody());
        hE(n, "mce-content-readonly", t),
          t
            ? (e.selection.controlSelection.hideResizeRect(),
              e._selectionOverrides.hideFakeCaret(),
              (function (e) {
                M.from(e.selection.getNode()).each(function (e) {
                  e.removeAttribute("data-mce-selected");
                });
              })(e),
              (e.readonly = !0),
              yE(n, !1),
              $(Fu(n, '*[contenteditable="true"]'), function (e) {
                Qn(e, gE, "true"), yE(e, !1);
              }))
            : ((e.readonly = !1),
              yE(n, !0),
              (function (e) {
                $(Fu(e, '*[data-mce-contenteditable="true"]'), function (e) {
                  nr(e, gE), yE(e, !0);
                });
              })(n),
              vE(e, "StyleWithCSS", !1),
              vE(e, "enableInlineTableEditing", !1),
              vE(e, "enableObjectResizing", !1),
              xm(e) && e.focus(),
              (function (e) {
                e.selection.setRng(e.selection.getRng());
              })(e),
              e.nodeChanged());
      },
      CE = function (e) {
        return e.readonly;
      },
      wE = function (e) {
        e.parser.addAttributeFilter("contenteditable", function (t) {
          CE(e) &&
            $(t, function (e) {
              e.attr(gE, e.attr("contenteditable")),
                e.attr("contenteditable", "false");
            });
        }),
          e.serializer.addAttributeFilter(gE, function (t) {
            CE(e) &&
              $(t, function (e) {
                e.attr("contenteditable", e.attr(gE));
              });
          }),
          e.serializer.addTempAttr(gE);
      },
      xE = function (e, t) {
        if (
          (function (e) {
            return "click" === e.type;
          })(t) &&
          !ad.metaKeyPressed(t)
        ) {
          var n = Tt.fromDom(t.target);
          (function (e, t) {
            return Zr(t, "a", function (t) {
              return Pt(t, Tt.fromDom(e.getBody()));
            }).bind(function (e) {
              return tr(e, "href");
            });
          })(e, n).each(function (n) {
            if ((t.preventDefault(), /^#/.test(n))) {
              var r = e.dom.select(
                n +
                  ',[name="' +
                  (Ue((o = n), (i = "#"))
                    ? (function (e, t) {
                        return e.substring(t);
                      })(o, i.length)
                    : o) +
                  '"]'
              );
              r.length && e.selection.scrollIntoView(r[0], !0);
            } else window.open(n, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes");
            var o, i;
          });
        }
      },
      _E = At.makeMap(
        "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel",
        " "
      ),
      SE = (function () {
        function e(e) {
          (this.bindings = {}),
            (this.settings = e || {}),
            (this.scope = this.settings.scope || this),
            (this.toggleEvent = this.settings.toggleEvent || O);
        }
        return (
          (e.isNative = function (e) {
            return !!_E[e.toLowerCase()];
          }),
          (e.prototype.fire = function (e, t) {
            var n = e.toLowerCase(),
              r = t || {};
            (r.type = n),
              r.target || (r.target = this.scope),
              r.preventDefault ||
                ((r.preventDefault = function () {
                  r.isDefaultPrevented = B;
                }),
                (r.stopPropagation = function () {
                  r.isPropagationStopped = B;
                }),
                (r.stopImmediatePropagation = function () {
                  r.isImmediatePropagationStopped = B;
                }),
                (r.isDefaultPrevented = O),
                (r.isPropagationStopped = O),
                (r.isImmediatePropagationStopped = O)),
              this.settings.beforeFire && this.settings.beforeFire(r);
            var o = this.bindings[n];
            if (o)
              for (var i = 0, a = o.length; i < a; i++) {
                var u = o[i];
                if (
                  (u.once && this.off(n, u.func),
                  r.isImmediatePropagationStopped())
                )
                  return r.stopPropagation(), r;
                if (!1 === u.func.call(this.scope, r))
                  return r.preventDefault(), r;
              }
            return r;
          }),
          (e.prototype.on = function (e, t, n, r) {
            if ((!1 === t && (t = O), t)) {
              var o = { func: t };
              r && At.extend(o, r);
              for (var i = e.toLowerCase().split(" "), a = i.length; a--; ) {
                var u = i[a],
                  c = this.bindings[u];
                c || ((c = this.bindings[u] = []), this.toggleEvent(u, !0)),
                  n ? c.unshift(o) : c.push(o);
              }
            }
            return this;
          }),
          (e.prototype.off = function (e, t) {
            var n = this;
            if (e)
              for (var r = e.toLowerCase().split(" "), o = r.length; o--; ) {
                var i = r[o],
                  a = this.bindings[i];
                if (!i)
                  return (
                    ce(this.bindings, function (e, t) {
                      n.toggleEvent(t, !1), delete n.bindings[t];
                    }),
                    this
                  );
                if (a) {
                  if (t)
                    for (var u = a.length; u--; )
                      a[u].func === t &&
                        ((a = a.slice(0, u).concat(a.slice(u + 1))),
                        (this.bindings[i] = a));
                  else a.length = 0;
                  a.length ||
                    (this.toggleEvent(e, !1), delete this.bindings[i]);
                }
              }
            else
              ce(this.bindings, function (e, t) {
                n.toggleEvent(t, !1);
              }),
                (this.bindings = {});
            return this;
          }),
          (e.prototype.once = function (e, t, n) {
            return this.on(e, t, n, { once: !0 });
          }),
          (e.prototype.has = function (e) {
            return (
              (e = e.toLowerCase()),
              !(!this.bindings[e] || 0 === this.bindings[e].length)
            );
          }),
          e
        );
      })(),
      EE = function (e) {
        return (
          e._eventDispatcher ||
            (e._eventDispatcher = new SE({
              scope: e,
              toggleEvent: function (t, n) {
                SE.isNative(t) &&
                  e.toggleNativeEvent &&
                  e.toggleNativeEvent(t, n);
              },
            })),
          e._eventDispatcher
        );
      },
      NE = {
        fire: function (e, t, n) {
          var r = this;
          if (r.removed && "remove" !== e && "detach" !== e) return t;
          var o = EE(r).fire(e, t);
          if (!1 !== n && r.parent)
            for (var i = r.parent(); i && !o.isPropagationStopped(); )
              i.fire(e, o, !1), (i = i.parent());
          return o;
        },
        on: function (e, t, n) {
          return EE(this).on(e, t, n);
        },
        off: function (e, t) {
          return EE(this).off(e, t);
        },
        once: function (e, t) {
          return EE(this).once(e, t);
        },
        hasEventListeners: function (e) {
          return EE(this).has(e);
        },
      },
      kE = vu.DOM,
      AE = function (e, t) {
        if ("selectionchange" === t) return e.getDoc();
        if (
          !e.inline &&
          /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)
        )
          return e.getDoc().documentElement;
        var n = ys(e);
        return n
          ? (e.eventRoot || (e.eventRoot = kE.select(n)[0]), e.eventRoot)
          : e.getBody();
      },
      RE = function (e, t, n) {
        !(function (e) {
          return !e.hidden && !CE(e);
        })(e)
          ? CE(e) && xE(e, n)
          : e.fire(t, n);
      },
      TE = function (e, t) {
        var n;
        if (
          (e.delegates || (e.delegates = {}), !e.delegates[t] && !e.removed)
        ) {
          var r = AE(e, t);
          if (ys(e)) {
            if (
              (Cw ||
                ((Cw = {}),
                e.editorManager.on("removeEditor", function () {
                  e.editorManager.activeEditor ||
                    (Cw &&
                      (ce(Cw, function (t, n) {
                        e.dom.unbind(AE(e, n));
                      }),
                      (Cw = null)));
                })),
              Cw[t])
            )
              return;
            (n = function (n) {
              for (
                var r = n.target, o = e.editorManager.get(), i = o.length;
                i--;

              ) {
                var a = o[i].getBody();
                (a === r || kE.isChildOf(r, a)) && RE(o[i], t, n);
              }
            }),
              (Cw[t] = n),
              kE.bind(r, t, n);
          } else
            (n = function (n) {
              RE(e, t, n);
            }),
              kE.bind(r, t, n),
              (e.delegates[t] = n);
        }
      },
      DE = ke(ke({}, NE), {
        bindPendingEventDelegates: function () {
          var e = this;
          At.each(e._pendingNativeEvents, function (t) {
            TE(e, t);
          });
        },
        toggleNativeEvent: function (e, t) {
          var n = this;
          "focus" !== e &&
            "blur" !== e &&
            (t
              ? n.initialized
                ? TE(n, e)
                : n._pendingNativeEvents
                ? n._pendingNativeEvents.push(e)
                : (n._pendingNativeEvents = [e])
              : n.initialized &&
                (n.dom.unbind(AE(n, e), e, n.delegates[e]),
                delete n.delegates[e]));
        },
        unbindAllNativeEvents: function () {
          var e = this,
            t = e.getBody(),
            n = e.dom;
          e.delegates &&
            (ce(e.delegates, function (t, n) {
              e.dom.unbind(AE(e, n), n, t);
            }),
            delete e.delegates),
            !e.inline &&
              t &&
              n &&
              ((t.onload = null), n.unbind(e.getWin()), n.unbind(e.getDoc())),
            n && (n.unbind(t), n.unbind(e.getContainer()));
        },
      }),
      OE = ["design", "readonly"],
      BE = function (e, t, n, r) {
        var o = n[t.get()],
          i = n[r];
        try {
          i.activate();
        } catch (VN) {
          return void console.error(
            "problem while activating editor mode " + r + ":",
            VN
          );
        }
        o.deactivate(),
          o.editorReadOnly !== i.editorReadOnly && bE(e, i.editorReadOnly),
          t.set(r),
          (function (e, t) {
            e.fire("SwitchMode", { mode: t });
          })(e, r);
      },
      PE = function (e) {
        var t = xu("design"),
          n = xu({
            design: { activate: C, deactivate: C, editorReadOnly: !1 },
            readonly: { activate: C, deactivate: C, editorReadOnly: !0 },
          });
        return (
          (function (e) {
            e.serializer
              ? wE(e)
              : e.on("PreInit", function () {
                  wE(e);
                });
          })(e),
          (function (e) {
            e.on("ShowCaret", function (t) {
              CE(e) && t.preventDefault();
            }),
              e.on("ObjectSelected", function (t) {
                CE(e) && t.preventDefault();
              });
          })(e),
          {
            isReadOnly: function () {
              return CE(e);
            },
            set: function (r) {
              return (function (e, t, n, r) {
                if (r !== n.get()) {
                  if (!ve(t, r))
                    throw new Error("Editor mode '" + r + "' is invalid");
                  e.initialized
                    ? BE(e, n, t, r)
                    : e.on("init", function () {
                        return BE(e, n, t, r);
                      });
                }
              })(e, n.get(), t, r);
            },
            get: function () {
              return t.get();
            },
            register: function (e, t) {
              n.set(
                (function (e, t, n) {
                  var r;
                  if (V(OE, t))
                    throw new Error("Cannot override default mode " + t);
                  return ke(
                    ke({}, e),
                    (((r = {})[t] = ke(ke({}, n), {
                      deactivate: function () {
                        try {
                          n.deactivate();
                        } catch (VN) {
                          console.error(
                            "problem while deactivating editor mode " + t + ":",
                            VN
                          );
                        }
                      },
                    })),
                    r)
                  );
                })(n.get(), e, t)
              );
            },
          }
        );
      },
      LE = At.each,
      IE = At.explode,
      ME = {
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123,
      },
      FE = At.makeMap("alt,ctrl,shift,meta,access"),
      UE = function (e) {
        var t,
          n = {};
        LE(IE(e.toLowerCase(), "+"), function (e) {
          e in FE
            ? (n[e] = !0)
            : /^[0-9]{2,}$/.test(e)
            ? (n.keyCode = parseInt(e, 10))
            : ((n.charCode = e.charCodeAt(0)),
              (n.keyCode = ME[e] || e.toUpperCase().charCodeAt(0)));
        });
        var r = [n.keyCode];
        for (t in FE) n[t] ? r.push(t) : (n[t] = !1);
        return (
          (n.id = r.join(",")),
          n.access && ((n.alt = !0), _t.mac ? (n.ctrl = !0) : (n.shift = !0)),
          n.meta && (_t.mac ? (n.meta = !0) : ((n.ctrl = !0), (n.meta = !1))),
          n
        );
      },
      jE = (function () {
        function e(e) {
          (this.shortcuts = {}), (this.pendingPatterns = []), (this.editor = e);
          var t = this;
          e.on("keyup keypress keydown", function (e) {
            (!t.hasModifier(e) && !t.isFunctionKey(e)) ||
              e.isDefaultPrevented() ||
              (LE(t.shortcuts, function (n) {
                if (t.matchShortcut(e, n))
                  return (
                    (t.pendingPatterns = n.subpatterns.slice(0)),
                    "keydown" === e.type && t.executeShortcutAction(n),
                    !0
                  );
              }),
              t.matchShortcut(e, t.pendingPatterns[0]) &&
                (1 === t.pendingPatterns.length &&
                  "keydown" === e.type &&
                  t.executeShortcutAction(t.pendingPatterns[0]),
                t.pendingPatterns.shift()));
          });
        }
        return (
          (e.prototype.add = function (e, t, n, r) {
            var o = this,
              i = o.normalizeCommandFunc(n);
            return (
              LE(IE(At.trim(e)), function (e) {
                var n = o.createShortcut(e, t, i, r);
                o.shortcuts[n.id] = n;
              }),
              !0
            );
          }),
          (e.prototype.remove = function (e) {
            var t = this.createShortcut(e);
            return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0);
          }),
          (e.prototype.normalizeCommandFunc = function (e) {
            var t = this,
              n = e;
            return "string" == typeof n
              ? function () {
                  t.editor.execCommand(n, !1, null);
                }
              : At.isArray(n)
              ? function () {
                  t.editor.execCommand(n[0], n[1], n[2]);
                }
              : n;
          }),
          (e.prototype.createShortcut = function (e, t, n, r) {
            var o = At.map(IE(e, ">"), UE);
            return (
              (o[o.length - 1] = At.extend(o[o.length - 1], {
                func: n,
                scope: r || this.editor,
              })),
              At.extend(o[0], {
                desc: this.editor.translate(t),
                subpatterns: o.slice(1),
              })
            );
          }),
          (e.prototype.hasModifier = function (e) {
            return e.altKey || e.ctrlKey || e.metaKey;
          }),
          (e.prototype.isFunctionKey = function (e) {
            return "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123;
          }),
          (e.prototype.matchShortcut = function (e, t) {
            return (
              !!t &&
              t.ctrl === e.ctrlKey &&
              t.meta === e.metaKey &&
              t.alt === e.altKey &&
              t.shift === e.shiftKey &&
              !!(
                e.keyCode === t.keyCode ||
                (e.charCode && e.charCode === t.charCode)
              ) &&
              (e.preventDefault(), !0)
            );
          }),
          (e.prototype.executeShortcutAction = function (e) {
            return e.func ? e.func.call(e.scope) : null;
          }),
          e
        );
      })(),
      zE = function () {
        var e,
          t,
          n,
          r,
          o,
          i,
          a,
          u,
          c =
            ((t = {}),
            (n = {}),
            (r = {}),
            (o = {}),
            (i = {}),
            (a = {}),
            {
              addButton: (u = function (e, t) {
                return function (n, r) {
                  return (e[n.toLowerCase()] = ke(ke({}, r), { type: t }));
                };
              })((e = {}), "button"),
              addGroupToolbarButton: u(e, "grouptoolbarbutton"),
              addToggleButton: u(e, "togglebutton"),
              addMenuButton: u(e, "menubutton"),
              addSplitButton: u(e, "splitbutton"),
              addMenuItem: u(t, "menuitem"),
              addNestedMenuItem: u(t, "nestedmenuitem"),
              addToggleMenuItem: u(t, "togglemenuitem"),
              addAutocompleter: u(n, "autocompleter"),
              addContextMenu: u(o, "contextmenu"),
              addContextToolbar: u(i, "contexttoolbar"),
              addContextForm: u(i, "contextform"),
              addSidebar: u(a, "sidebar"),
              addIcon: function (e, t) {
                return (r[e.toLowerCase()] = t);
              },
              getAll: function () {
                return {
                  buttons: e,
                  menuItems: t,
                  icons: r,
                  popups: n,
                  contextMenus: o,
                  contextToolbars: i,
                  sidebars: a,
                };
              },
            });
        return {
          addAutocompleter: c.addAutocompleter,
          addButton: c.addButton,
          addContextForm: c.addContextForm,
          addContextMenu: c.addContextMenu,
          addContextToolbar: c.addContextToolbar,
          addIcon: c.addIcon,
          addMenuButton: c.addMenuButton,
          addMenuItem: c.addMenuItem,
          addNestedMenuItem: c.addNestedMenuItem,
          addSidebar: c.addSidebar,
          addSplitButton: c.addSplitButton,
          addToggleButton: c.addToggleButton,
          addGroupToolbarButton: c.addGroupToolbarButton,
          addToggleMenuItem: c.addToggleMenuItem,
          getAll: c.getAll,
        };
      },
      VE = At.each,
      HE = At.trim,
      qE =
        "source protocol authority userInfo user password host port relative path directory file query anchor".split(
          " "
        ),
      $E = { ftp: 21, http: 80, https: 443, mailto: 25 },
      WE = (function () {
        function e(t, n) {
          (t = HE(t)), (this.settings = n || {});
          var r = this.settings.base_uri,
            o = this;
          if (/^([\w\-]+):([^\/]{2})/i.test(t) || /^\s*#/.test(t)) o.source = t;
          else {
            var i = 0 === t.indexOf("//");
            if (
              (0 !== t.indexOf("/") ||
                i ||
                (t = ((r && r.protocol) || "http") + "://mce_host" + t),
              !/^[\w\-]*:?\/\//.test(t))
            ) {
              var a = this.settings.base_uri
                ? this.settings.base_uri.path
                : new e(document.location.href).directory;
              if (
                this.settings.base_uri &&
                "" == this.settings.base_uri.protocol
              )
                t = "//mce_host" + o.toAbsPath(a, t);
              else {
                var u = /([^#?]*)([#?]?.*)/.exec(t);
                t =
                  ((r && r.protocol) || "http") +
                  "://mce_host" +
                  o.toAbsPath(a, u[1]) +
                  u[2];
              }
            }
            t = t.replace(/@@/g, "(mce_at)");
            var c =
              /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
                t
              );
            VE(qE, function (e, t) {
              var n = c[t];
              n && (n = n.replace(/\(mce_at\)/g, "@@")), (o[e] = n);
            }),
              r &&
                (o.protocol || (o.protocol = r.protocol),
                o.userInfo || (o.userInfo = r.userInfo),
                o.port || "mce_host" !== o.host || (o.port = r.port),
                (o.host && "mce_host" !== o.host) || (o.host = r.host),
                (o.source = "")),
              i && (o.protocol = "");
          }
        }
        return (
          (e.parseDataUri = function (e) {
            var t,
              n = decodeURIComponent(e).split(","),
              r = /data:([^;]+)/.exec(n[0]);
            return r && (t = r[1]), { type: t, data: n[1] };
          }),
          (e.getDocumentBaseUrl = function (e) {
            var t;
            return (
              (t =
                0 !== e.protocol.indexOf("http") && "file:" !== e.protocol
                  ? e.href
                  : e.protocol + "//" + e.host + e.pathname),
              /^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
                ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
                /[\/\\]$/.test(t) || (t += "/")),
              t
            );
          }),
          (e.prototype.setPath = function (e) {
            var t = /^(.*?)\/?(\w+)?$/.exec(e);
            (this.path = t[0]),
              (this.directory = t[1]),
              (this.file = t[2]),
              (this.source = ""),
              this.getURI();
          }),
          (e.prototype.toRelative = function (t) {
            var n;
            if ("./" === t) return t;
            var r = new e(t, { base_uri: this });
            if (
              ("mce_host" !== r.host && this.host !== r.host && r.host) ||
              this.port !== r.port ||
              (this.protocol !== r.protocol && "" !== r.protocol)
            )
              return r.getURI();
            var o = this.getURI(),
              i = r.getURI();
            return o === i ||
              ("/" === o.charAt(o.length - 1) &&
                o.substr(0, o.length - 1) === i)
              ? o
              : ((n = this.toRelPath(this.path, r.path)),
                r.query && (n += "?" + r.query),
                r.anchor && (n += "#" + r.anchor),
                n);
          }),
          (e.prototype.toAbsolute = function (t, n) {
            var r = new e(t, { base_uri: this });
            return r.getURI(n && this.isSameOrigin(r));
          }),
          (e.prototype.isSameOrigin = function (e) {
            if (this.host == e.host && this.protocol == e.protocol) {
              if (this.port == e.port) return !0;
              var t = $E[this.protocol];
              if (t && (this.port || t) == (e.port || t)) return !0;
            }
            return !1;
          }),
          (e.prototype.toRelPath = function (e, t) {
            var n,
              r,
              o = 0,
              i = "",
              a = e.substring(0, e.lastIndexOf("/")).split("/"),
              u = t.split("/");
            if (a.length >= u.length)
              for (n = 0, r = a.length; n < r; n++)
                if (n >= u.length || a[n] !== u[n]) {
                  o = n + 1;
                  break;
                }
            if (a.length < u.length)
              for (n = 0, r = u.length; n < r; n++)
                if (n >= a.length || a[n] !== u[n]) {
                  o = n + 1;
                  break;
                }
            if (1 === o) return t;
            for (n = 0, r = a.length - (o - 1); n < r; n++) i += "../";
            for (n = o - 1, r = u.length; n < r; n++)
              i += n !== o - 1 ? "/" + u[n] : u[n];
            return i;
          }),
          (e.prototype.toAbsPath = function (e, t) {
            var n,
              r,
              o = 0,
              i = [],
              a = /\/$/.test(t) ? "/" : "",
              u = e.split("/"),
              c = t.split("/");
            for (
              VE(u, function (e) {
                e && i.push(e);
              }),
                u = i,
                n = c.length - 1,
                i = [];
              n >= 0;
              n--
            )
              0 !== c[n].length &&
                "." !== c[n] &&
                (".." !== c[n] ? (o > 0 ? o-- : i.push(c[n])) : o++);
            return (
              0 !==
                (r =
                  (n = u.length - o) <= 0
                    ? ee(i).join("/")
                    : u.slice(0, n).join("/") + "/" + ee(i).join("/")).indexOf(
                  "/"
                ) && (r = "/" + r),
              a && r.lastIndexOf("/") !== r.length - 1 && (r += a),
              r
            );
          }),
          (e.prototype.getURI = function (e) {
            var t;
            return (
              void 0 === e && (e = !1),
              (this.source && !e) ||
                ((t = ""),
                e ||
                  (this.protocol ? (t += this.protocol + "://") : (t += "//"),
                  this.userInfo && (t += this.userInfo + "@"),
                  this.host && (t += this.host),
                  this.port && (t += ":" + this.port)),
                this.path && (t += this.path),
                this.query && (t += "?" + this.query),
                this.anchor && (t += "#" + this.anchor),
                (this.source = t)),
              this.source
            );
          }),
          e
        );
      })(),
      KE = vu.DOM,
      XE = At.extend,
      YE = At.each,
      GE = At.resolve,
      JE = _t.ie,
      QE = (function () {
        function e(e, t, n) {
          var r = this;
          (this.plugins = {}),
            (this.contentCSS = []),
            (this.contentStyles = []),
            (this.loadedCSS = {}),
            (this.isNotDirty = !1),
            (this.editorManager = n),
            (this.documentBaseUrl = n.documentBaseURL),
            XE(this, DE),
            (this.settings = qy(
              this,
              e,
              this.documentBaseUrl,
              n.defaultSettings,
              t
            )),
            this.settings.suffix && (n.suffix = this.settings.suffix),
            (this.suffix = n.suffix),
            this.settings.base_url && n._setBaseUrl(this.settings.base_url),
            (this.baseUri = n.baseURI),
            this.settings.referrer_policy &&
              (wu.ScriptLoader._setReferrerPolicy(
                this.settings.referrer_policy
              ),
              vu.DOM.styleSheetLoader._setReferrerPolicy(
                this.settings.referrer_policy
              )),
            (ku.languageLoad = this.settings.language_load),
            (ku.baseURL = n.baseURL),
            (this.id = e),
            this.setDirty(!1),
            (this.documentBaseURI = new WE(this.settings.document_base_url, {
              base_uri: this.baseUri,
            })),
            (this.baseURI = this.baseUri),
            (this.inline = !!this.settings.inline),
            (this.shortcuts = new jE(this)),
            (this.editorCommands = new pE(this)),
            this.settings.cache_suffix &&
              (_t.cacheSuffix = this.settings.cache_suffix.replace(
                /^[\?\&]+/,
                ""
              )),
            (this.ui = {
              registry: zE(),
              styleSheetLoader: void 0,
              show: C,
              hide: C,
              enable: C,
              disable: C,
              isDisabled: O,
            });
          var o = PE(this);
          (this.mode = o),
            (this.setMode = o.set),
            n.fire("SetupEditor", { editor: this }),
            this.execCallback("setup", this),
            (this.$ = lu.overrideDefaults(function () {
              return {
                context: r.inline ? r.getBody() : r.getDoc(),
                element: r.getBody(),
              };
            }));
        }
        return (
          (e.prototype.render = function () {
            ZS(this);
          }),
          (e.prototype.focus = function (e) {
            Sm(this, e);
          }),
          (e.prototype.hasFocus = function () {
            return wm(this);
          }),
          (e.prototype.execCallback = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            var r,
              o = this,
              i = o.settings[e];
            if (i)
              return (
                o.callbackLookup &&
                  (r = o.callbackLookup[e]) &&
                  ((i = r.func), (r = r.scope)),
                "string" == typeof i &&
                  ((r = (r = i.replace(/\.\w+$/, "")) ? GE(r) : 0),
                  (i = GE(i)),
                  (o.callbackLookup = o.callbackLookup || {}),
                  (o.callbackLookup[e] = { func: i, scope: r })),
                i.apply(r || o, t)
              );
          }),
          (e.prototype.translate = function (e) {
            return Nu.translate(e);
          }),
          (e.prototype.getParam = function (e, t, n) {
            return Wy(this, e, t, n);
          }),
          (e.prototype.hasPlugin = function (e, t) {
            return !(
              !V(_s(this).split(/[ ,]/), e) ||
              (t && void 0 === rb.get(e))
            );
          }),
          (e.prototype.nodeChanged = function (e) {
            this._nodeChangeDispatcher.nodeChanged(e);
          }),
          (e.prototype.addCommand = function (e, t, n) {
            this.editorCommands.addCommand(e, t, n);
          }),
          (e.prototype.addQueryStateHandler = function (e, t, n) {
            this.editorCommands.addQueryStateHandler(e, t, n);
          }),
          (e.prototype.addQueryValueHandler = function (e, t, n) {
            this.editorCommands.addQueryValueHandler(e, t, n);
          }),
          (e.prototype.addShortcut = function (e, t, n, r) {
            this.shortcuts.add(e, t, n, r);
          }),
          (e.prototype.execCommand = function (e, t, n, r) {
            return this.editorCommands.execCommand(e, t, n, r);
          }),
          (e.prototype.queryCommandState = function (e) {
            return this.editorCommands.queryCommandState(e);
          }),
          (e.prototype.queryCommandValue = function (e) {
            return this.editorCommands.queryCommandValue(e);
          }),
          (e.prototype.queryCommandSupported = function (e) {
            return this.editorCommands.queryCommandSupported(e);
          }),
          (e.prototype.show = function () {
            var e = this;
            e.hidden &&
              ((e.hidden = !1),
              e.inline
                ? (e.getBody().contentEditable = "true")
                : (KE.show(e.getContainer()), KE.hide(e.id)),
              e.load(),
              e.fire("show"));
          }),
          (e.prototype.hide = function () {
            var e = this,
              t = e.getDoc();
            e.hidden ||
              (JE && t && !e.inline && t.execCommand("SelectAll"),
              e.save(),
              e.inline
                ? ((e.getBody().contentEditable = "false"),
                  e === e.editorManager.focusedEditor &&
                    (e.editorManager.focusedEditor = null))
                : (KE.hide(e.getContainer()),
                  KE.setStyle(e.id, "display", e.orgDisplay)),
              (e.hidden = !0),
              e.fire("hide"));
          }),
          (e.prototype.isHidden = function () {
            return !!this.hidden;
          }),
          (e.prototype.setProgressState = function (e, t) {
            this.fire("ProgressState", { state: e, time: t });
          }),
          (e.prototype.load = function (e) {
            var t,
              n = this,
              r = n.getElement();
            if (n.removed) return "";
            if (r) {
              (e = e || {}).load = !0;
              var o = Un(r) ? r.value : r.innerHTML;
              return (
                (t = n.setContent(o, e)),
                (e.element = r),
                e.no_events || n.fire("LoadContent", e),
                (e.element = r = null),
                t
              );
            }
          }),
          (e.prototype.save = function (e) {
            var t,
              n,
              r = this,
              o = r.getElement();
            if (o && r.initialized && !r.removed)
              return (
                ((e = e || {}).save = !0),
                (e.element = o),
                (e.content = r.getContent(e)),
                e.no_events || r.fire("SaveContent", e),
                "raw" === e.format && r.fire("RawSaveContent", e),
                (t = e.content),
                Un(o)
                  ? (o.value = t)
                  : ((!e.is_removing && r.inline) || (o.innerHTML = t),
                    (n = KE.getParent(r.id, "form")) &&
                      YE(n.elements, function (e) {
                        if (e.name === r.id) return (e.value = t), !1;
                      })),
                (e.element = o = null),
                !1 !== e.set_dirty && r.setDirty(!1),
                t
              );
          }),
          (e.prototype.setContent = function (e, t) {
            return xy(this, e, t);
          }),
          (e.prototype.getContent = function (e) {
            return wy(this, e);
          }),
          (e.prototype.insertContent = function (e, t) {
            t && (e = XE({ content: e }, t)),
              this.execCommand("mceInsertContent", !1, e);
          }),
          (e.prototype.resetContent = function (e) {
            void 0 === e
              ? xy(this, this.startContent, { format: "raw" })
              : xy(this, e),
              this.undoManager.reset(),
              this.setDirty(!1),
              this.nodeChanged();
          }),
          (e.prototype.isDirty = function () {
            return !this.isNotDirty;
          }),
          (e.prototype.setDirty = function (e) {
            var t = !this.isNotDirty;
            (this.isNotDirty = !e), e && e !== t && this.fire("dirty");
          }),
          (e.prototype.getContainer = function () {
            var e = this;
            return (
              e.container ||
                (e.container = KE.get(e.editorContainer || e.id + "_parent")),
              e.container
            );
          }),
          (e.prototype.getContentAreaContainer = function () {
            return this.contentAreaContainer;
          }),
          (e.prototype.getElement = function () {
            return (
              this.targetElm || (this.targetElm = KE.get(this.id)),
              this.targetElm
            );
          }),
          (e.prototype.getWin = function () {
            var e,
              t = this;
            return (
              t.contentWindow ||
                ((e = t.iframeElement) && (t.contentWindow = e.contentWindow)),
              t.contentWindow
            );
          }),
          (e.prototype.getDoc = function () {
            var e,
              t = this;
            return (
              t.contentDocument ||
                ((e = t.getWin()) && (t.contentDocument = e.document)),
              t.contentDocument
            );
          }),
          (e.prototype.getBody = function () {
            var e = this.getDoc();
            return this.bodyElement || (e ? e.body : null);
          }),
          (e.prototype.convertURL = function (e, t, n) {
            var r = this,
              o = r.settings;
            return o.urlconverter_callback
              ? r.execCallback("urlconverter_callback", e, n, !0, t)
              : !o.convert_urls ||
                (n && "LINK" === n.nodeName) ||
                0 === e.indexOf("file:") ||
                0 === e.length
              ? e
              : o.relative_urls
              ? r.documentBaseURI.toRelative(e)
              : (e = r.documentBaseURI.toAbsolute(e, o.remove_script_host));
          }),
          (e.prototype.addVisual = function (e) {
            eE(this, e);
          }),
          (e.prototype.remove = function () {
            Ey(this);
          }),
          (e.prototype.destroy = function (e) {
            Ny(this, e);
          }),
          (e.prototype.uploadImages = function (e) {
            return this.editorUpload.uploadImages(e);
          }),
          (e.prototype._scanForImages = function () {
            return this.editorUpload.scanForImages();
          }),
          (e.prototype.addButton = function () {
            throw new Error(
              "editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead"
            );
          }),
          (e.prototype.addSidebar = function () {
            throw new Error(
              "editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead"
            );
          }),
          (e.prototype.addMenuItem = function () {
            throw new Error(
              "editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead"
            );
          }),
          (e.prototype.addContextToolbar = function () {
            throw new Error(
              "editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead"
            );
          }),
          e
        );
      })(),
      ZE = vu.DOM,
      eN = At.explode,
      tN = At.each,
      nN = At.extend,
      rN = 0,
      oN = !1,
      iN = [],
      aN = [],
      uN = function (e) {
        var t = e.type;
        tN(fN.get(), function (n) {
          switch (t) {
            case "scroll":
              n.fire("ScrollWindow", e);
              break;
            case "resize":
              n.fire("ResizeWindow", e);
          }
        });
      },
      cN = function (e) {
        e !== oN &&
          (e
            ? lu(window).on("resize scroll", uN)
            : lu(window).off("resize scroll", uN),
          (oN = e));
      },
      sN = function (e) {
        var t = aN;
        delete iN[e.id];
        for (var n = 0; n < iN.length; n++)
          if (iN[n] === e) {
            iN.splice(n, 1);
            break;
          }
        return (
          (aN = K(aN, function (t) {
            return e !== t;
          })),
          fN.activeEditor === e &&
            (fN.activeEditor = aN.length > 0 ? aN[0] : null),
          fN.focusedEditor === e && (fN.focusedEditor = null),
          t.length !== aN.length
        );
      },
      lN = "CSS1Compat" !== document.compatMode,
      fN = ke(ke({}, NE), {
        baseURI: null,
        baseURL: null,
        defaultSettings: {},
        documentBaseURL: null,
        suffix: null,
        $: lu,
        majorVersion: "5",
        minorVersion: "8.1",
        releaseDate: "2021-05-20",
        editors: iN,
        i18n: Nu,
        activeEditor: null,
        focusedEditor: null,
        settings: {},
        setup: function () {
          var e,
            t,
            n = this,
            r = "";
          (t = WE.getDocumentBaseUrl(document.location)),
            /^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
              ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
              /[\/\\]$/.test(t) || (t += "/"));
          var o,
            i = window.tinymce || window.tinyMCEPreInit;
          if (i) (e = i.base || i.baseURL), (r = i.suffix);
          else {
            for (
              var a = document.getElementsByTagName("script"), u = 0;
              u < a.length;
              u++
            ) {
              var c;
              if ("" !== (c = a[u].src || "")) {
                var s = c.substring(c.lastIndexOf("/"));
                if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(c)) {
                  -1 !== s.indexOf(".min") && (r = ".min"),
                    (e = c.substring(0, c.lastIndexOf("/")));
                  break;
                }
              }
            }
            !e &&
              document.currentScript &&
              (-1 !== (c = document.currentScript.src).indexOf(".min") &&
                (r = ".min"),
              (e = c.substring(0, c.lastIndexOf("/"))));
          }
          (n.baseURL = new WE(t).toAbsolute(e)),
            (n.documentBaseURL = t),
            (n.baseURI = new WE(n.baseURL)),
            (n.suffix = r),
            (o = n).on("AddEditor", S(gm, o)),
            o.on("RemoveEditor", S(hm, o));
        },
        overrideDefaults: function (e) {
          var t = e.base_url;
          t && this._setBaseUrl(t);
          var n = e.suffix;
          e.suffix && (this.suffix = n), (this.defaultSettings = e);
          var r = e.plugin_base_urls;
          void 0 !== r &&
            ce(r, function (e, t) {
              ku.PluginManager.urls[t] = e;
            });
        },
        init: function (e) {
          var t,
            n = this,
            r = At.makeMap(
              "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu",
              " "
            ),
            o = function (e) {
              var t = e.id;
              return (
                t ||
                  ((t = he(e, "name")
                    .filter(function (e) {
                      return !ZE.get(e);
                    })
                    .getOrThunk(ZE.uniqueId)),
                  e.setAttribute("id", t)),
                t
              );
            },
            i = function (e, t) {
              return t.constructor === RegExp
                ? t.test(e.className)
                : ZE.hasClass(e, t);
            },
            a = function (e) {
              t = e;
            },
            u = function () {
              var t,
                c = 0,
                s = [],
                l = function (e, r, o) {
                  var i = new QE(e, r, n);
                  s.push(i),
                    i.on("init", function () {
                      ++c === t.length && a(s);
                    }),
                    (i.targetElm = i.targetElm || o),
                    i.render();
                };
              ZE.unbind(window, "ready", u),
                (function (t) {
                  var r = e[t];
                  r && r.apply(n, []);
                })("onpageload"),
                (t = lu.unique(
                  (function (e) {
                    var t = [];
                    if (_t.browser.isIE() && _t.browser.version.major < 11)
                      return (
                        fb(
                          "TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"
                        ),
                        []
                      );
                    if (lN)
                      return (
                        fb(
                          "Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."
                        ),
                        []
                      );
                    if (e.types)
                      return (
                        tN(e.types, function (e) {
                          t = t.concat(ZE.select(e.selector));
                        }),
                        t
                      );
                    if (e.selector) return ZE.select(e.selector);
                    if (e.target) return [e.target];
                    switch (e.mode) {
                      case "exact":
                        var n = e.elements || "";
                        n.length > 0 &&
                          tN(eN(n), function (e) {
                            var n = ZE.get(e);
                            n
                              ? t.push(n)
                              : tN(document.forms, function (n) {
                                  tN(n.elements, function (n) {
                                    n.name === e &&
                                      ((e = "mce_editor_" + rN++),
                                      ZE.setAttrib(n, "id", e),
                                      t.push(n));
                                  });
                                });
                          });
                        break;
                      case "textareas":
                      case "specific_textareas":
                        tN(ZE.select("textarea"), function (n) {
                          (e.editor_deselector && i(n, e.editor_deselector)) ||
                            (e.editor_selector && !i(n, e.editor_selector)) ||
                            t.push(n);
                        });
                    }
                    return t;
                  })(e)
                )),
                e.types
                  ? tN(e.types, function (n) {
                      At.each(t, function (t) {
                        return (
                          !ZE.is(t, n.selector) ||
                          (l(o(t), nN({}, e, n), t), !1)
                        );
                      });
                    })
                  : (At.each(t, function (e) {
                      var t;
                      (t = n.get(e.id)) &&
                        t.initialized &&
                        !(t.getContainer() || t.getBody()).parentNode &&
                        (sN(t),
                        t.unbindAllNativeEvents(),
                        t.destroy(!0),
                        (t.removed = !0),
                        (t = null));
                    }),
                    0 ===
                    (t = At.grep(t, function (e) {
                      return !n.get(e.id);
                    })).length
                      ? a([])
                      : tN(t, function (t) {
                          !(function (e, t) {
                            return e.inline && t.tagName.toLowerCase() in r;
                          })(e, t)
                            ? l(o(t), e, t)
                            : fb(
                                "Could not initialize inline editor on invalid inline target element",
                                t
                              );
                        }));
            };
          return (
            (n.settings = e),
            ZE.bind(window, "ready", u),
            new eo(function (e) {
              t
                ? e(t)
                : (a = function (t) {
                    e(t);
                  });
            })
          );
        },
        get: function (e) {
          return 0 === arguments.length
            ? aN.slice(0)
            : l(e)
            ? G(aN, function (t) {
                return t.id === e;
              }).getOr(null)
            : b(e) && aN[e]
            ? aN[e]
            : null;
        },
        add: function (e) {
          var t = this;
          return (
            iN[e.id] === e ||
              (null === t.get(e.id) &&
                ((function (e) {
                  return "length" !== e;
                })(e.id) && (iN[e.id] = e),
                iN.push(e),
                aN.push(e)),
              cN(!0),
              (t.activeEditor = e),
              t.fire("AddEditor", { editor: e }),
              ww ||
                ((ww = function (e) {
                  var n = t.fire("BeforeUnload");
                  if (n.returnValue)
                    return (
                      e.preventDefault(),
                      (e.returnValue = n.returnValue),
                      n.returnValue
                    );
                }),
                window.addEventListener("beforeunload", ww))),
            e
          );
        },
        createEditor: function (e, t) {
          return this.add(new QE(e, t, this));
        },
        remove: function (e) {
          var t,
            n,
            r = this;
          if (e) {
            if (!l(e))
              return (
                (n = e),
                m(r.get(n.id))
                  ? null
                  : (sN(n) && r.fire("RemoveEditor", { editor: n }),
                    0 === aN.length &&
                      window.removeEventListener("beforeunload", ww),
                    n.remove(),
                    cN(aN.length > 0),
                    n)
              );
            tN(ZE.select(e), function (e) {
              (n = r.get(e.id)) && r.remove(n);
            });
          } else for (t = aN.length - 1; t >= 0; t--) r.remove(aN[t]);
        },
        execCommand: function (e, t, n) {
          var r = this,
            o = r.get(n);
          switch (e) {
            case "mceAddEditor":
              return r.get(n) || new QE(n, r.settings, r).render(), !0;
            case "mceRemoveEditor":
              return o && o.remove(), !0;
            case "mceToggleEditor":
              return o
                ? (o.isHidden() ? o.show() : o.hide(), !0)
                : (r.execCommand("mceAddEditor", !1, n), !0);
          }
          return !!r.activeEditor && r.activeEditor.execCommand(e, t, n);
        },
        triggerSave: function () {
          tN(aN, function (e) {
            e.save();
          });
        },
        addI18n: function (e, t) {
          Nu.add(e, t);
        },
        translate: function (e) {
          return Nu.translate(e);
        },
        setActive: function (e) {
          var t = this.activeEditor;
          this.activeEditor !== e &&
            (t && t.fire("deactivate", { relatedTarget: e }),
            e.fire("activate", { relatedTarget: t })),
            (this.activeEditor = e);
        },
        _setBaseUrl: function (e) {
          (this.baseURL = new WE(this.documentBaseURL).toAbsolute(
            e.replace(/\/+$/, "")
          )),
            (this.baseURI = new WE(this.baseURL));
        },
      });
    fN.setup();
    var dN,
      mN,
      pN,
      gN,
      hN = Math.min,
      vN = Math.max,
      yN = Math.round,
      bN = function (e, t, n) {
        var r = t.x,
          o = t.y,
          i = e.w,
          a = e.h,
          u = t.w,
          c = t.h,
          s = (n || "").split("");
        return (
          "b" === s[0] && (o += c),
          "r" === s[1] && (r += u),
          "c" === s[0] && (o += yN(c / 2)),
          "c" === s[1] && (r += yN(u / 2)),
          "b" === s[3] && (o -= a),
          "r" === s[4] && (r -= i),
          "c" === s[3] && (o -= yN(a / 2)),
          "c" === s[4] && (r -= yN(i / 2)),
          CN(r, o, i, a)
        );
      },
      CN = function (e, t, n, r) {
        return { x: e, y: t, w: n, h: r };
      },
      wN = {
        inflate: function (e, t, n) {
          return CN(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
        },
        relativePosition: bN,
        findBestRelativePosition: function (e, t, n, r) {
          var o, i;
          for (i = 0; i < r.length; i++)
            if (
              (o = bN(e, t, r[i])).x >= n.x &&
              o.x + o.w <= n.w + n.x &&
              o.y >= n.y &&
              o.y + o.h <= n.h + n.y
            )
              return r[i];
          return null;
        },
        intersect: function (e, t) {
          var n = vN(e.x, t.x),
            r = vN(e.y, t.y),
            o = hN(e.x + e.w, t.x + t.w),
            i = hN(e.y + e.h, t.y + t.h);
          return o - n < 0 || i - r < 0 ? null : CN(n, r, o - n, i - r);
        },
        clamp: function (e, t, n) {
          var r = e.x,
            o = e.y,
            i = e.x + e.w,
            a = e.y + e.h,
            u = t.x + t.w,
            c = t.y + t.h,
            s = vN(0, t.x - r),
            l = vN(0, t.y - o),
            f = vN(0, i - u),
            d = vN(0, a - c);
          return (
            (r += s),
            (o += l),
            n && ((i += s), (a += l), (r -= f), (o -= d)),
            CN(r, o, (i -= f) - r, (a -= d) - o)
          );
        },
        create: CN,
        fromClientRect: function (e) {
          return CN(e.left, e.top, e.width, e.height);
        },
      },
      xN =
        ((dN = {}),
        (mN = {}),
        {
          load: function (e, t) {
            var n = 'Script at URL "' + t + '" failed to load',
              r =
                'Script at URL "' +
                t +
                "\" did not call `tinymce.Resource.add('" +
                e +
                "', data)` within 1 second";
            if (void 0 !== dN[e]) return dN[e];
            var o = new eo(function (o, i) {
              var a = (function (e, t, n) {
                void 0 === n && (n = 1e3);
                var r = !1,
                  o = null,
                  i = function (e) {
                    return function () {
                      for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                      r ||
                        ((r = !0),
                        null !== o && (clearTimeout(o), (o = null)),
                        e.apply(null, t));
                    };
                  },
                  a = i(e),
                  u = i(t);
                return {
                  start: function () {
                    for (var e = [], t = 0; t < arguments.length; t++)
                      e[t] = arguments[t];
                    r ||
                      null !== o ||
                      (o = setTimeout(function () {
                        return u.apply(null, e);
                      }, n));
                  },
                  resolve: a,
                  reject: u,
                };
              })(o, i);
              (mN[e] = a.resolve),
                wu.ScriptLoader.loadScript(
                  t,
                  function () {
                    return a.start(r);
                  },
                  function () {
                    return a.reject(n);
                  }
                );
            });
            return (dN[e] = o), o;
          },
          add: function (e, t) {
            void 0 !== mN[e] && (mN[e](t), delete mN[e]),
              (dN[e] = eo.resolve(t));
          },
        }),
      _N = At.each,
      SN = At.extend,
      EN = function () {};
    EN.extend = pN = function (e) {
      var t = this.prototype,
        n = function () {
          var e,
            t,
            n,
            r = this;
          if (!gN && (r.init && r.init.apply(r, arguments), (t = r.Mixins)))
            for (e = t.length; e--; )
              (n = t[e]).init && n.init.apply(r, arguments);
        },
        r = function () {
          return this;
        };
      gN = !0;
      var o = new this();
      return (
        (gN = !1),
        e.Mixins &&
          (_N(e.Mixins, function (t) {
            for (var n in t) "init" !== n && (e[n] = t[n]);
          }),
          t.Mixins && (e.Mixins = t.Mixins.concat(e.Mixins))),
        e.Methods &&
          _N(e.Methods.split(","), function (t) {
            e[t] = r;
          }),
        e.Properties &&
          _N(e.Properties.split(","), function (t) {
            var n = "_" + t;
            e[t] = function (e) {
              var t = this;
              return void 0 !== e ? ((t[n] = e), t) : t[n];
            };
          }),
        e.Statics &&
          _N(e.Statics, function (e, t) {
            n[t] = e;
          }),
        e.Defaults &&
          t.Defaults &&
          (e.Defaults = SN({}, t.Defaults, e.Defaults)),
        ce(e, function (e, n) {
          "function" == typeof e && t[n]
            ? (o[n] = (function (e, n) {
                return function () {
                  var r = this,
                    o = r._super;
                  r._super = t[e];
                  var i = n.apply(r, arguments);
                  return (r._super = o), i;
                };
              })(n, e))
            : (o[n] = e);
        }),
        (n.prototype = o),
        (n.constructor = n),
        (n.extend = pN),
        n
      );
    };
    var NN,
      kN,
      AN,
      RN,
      TN = Math.min,
      DN = Math.max,
      ON = Math.round,
      BN = {
        serialize: function (e) {
          var t = JSON.stringify(e);
          return l(t)
            ? t.replace(/[\u0080-\uFFFF]/g, function (e) {
                var t = e.charCodeAt(0).toString(16);
                return "\\u" + "0000".substring(t.length) + t;
              })
            : t;
        },
        parse: function (e) {
          try {
            return JSON.parse(e);
          } catch (t) {}
        },
      },
      PN = {
        callbacks: {},
        count: 0,
        send: function (e) {
          var t = this,
            n = vu.DOM,
            r = void 0 !== e.count ? e.count : t.count,
            o = "tinymce_jsonp_" + r;
          (t.callbacks[r] = function (i) {
            n.remove(o), delete t.callbacks[r], e.callback(i);
          }),
            n.add(n.doc.body, "script", {
              id: o,
              src: e.url,
              type: "text/javascript",
            }),
            t.count++;
        },
      },
      LN = ke(ke({}, NE), {
        send: function (e) {
          var t,
            n = 0,
            r = function () {
              !e.async || 4 === t.readyState || n++ > 1e4
                ? (e.success && n < 1e4 && 200 === t.status
                    ? e.success.call(e.success_scope, "" + t.responseText, t, e)
                    : e.error &&
                      e.error.call(
                        e.error_scope,
                        n > 1e4 ? "TIMED_OUT" : "GENERAL",
                        t,
                        e
                      ),
                  (t = null))
                : ao.setTimeout(r, 10);
            };
          if (
            ((e.scope = e.scope || this),
            (e.success_scope = e.success_scope || e.scope),
            (e.error_scope = e.error_scope || e.scope),
            (e.async = !1 !== e.async),
            (e.data = e.data || ""),
            LN.fire("beforeInitialize", { settings: e }),
            (t = new XMLHttpRequest()).overrideMimeType &&
              t.overrideMimeType(e.content_type),
            t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async),
            e.crossDomain && (t.withCredentials = !0),
            e.content_type &&
              t.setRequestHeader("Content-Type", e.content_type),
            e.requestheaders &&
              At.each(e.requestheaders, function (e) {
                t.setRequestHeader(e.key, e.value);
              }),
            t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            (t = LN.fire("beforeSend", { xhr: t, settings: e }).xhr).send(
              e.data
            ),
            !e.async)
          )
            return r();
          ao.setTimeout(r, 10);
        },
      }),
      IN = At.extend,
      MN = (function () {
        function e(e) {
          (this.settings = IN({}, e)), (this.count = 0);
        }
        return (
          (e.sendRPC = function (t) {
            return new e().send(t);
          }),
          (e.prototype.send = function (e) {
            var t = e.error,
              n = e.success,
              r = IN(this.settings, e);
            (r.success = function (e, o) {
              void 0 === (e = BN.parse(e)) &&
                (e = { error: "JSON Parse error." }),
                e.error
                  ? t.call(r.error_scope || r.scope, e.error, o)
                  : n.call(r.success_scope || r.scope, e.result);
            }),
              (r.error = function (e, n) {
                t && t.call(r.error_scope || r.scope, e, n);
              }),
              (r.data = BN.serialize({
                id: e.id || "c" + this.count++,
                method: e.method,
                params: e.params,
              })),
              (r.content_type = "application/json"),
              LN.send(r);
          }),
          e
        );
      })();
    try {
      var FN = "__storage_test__";
      (NN = window.localStorage).setItem(FN, FN), NN.removeItem(FN);
    } catch (VN) {
      (kN = {}),
        (AN = []),
        (RN = {
          getItem: function (e) {
            return kN[e] || null;
          },
          setItem: function (e, t) {
            AN.push(e), (kN[e] = String(t));
          },
          key: function (e) {
            return AN[e];
          },
          removeItem: function (e) {
            (AN = AN.filter(function (t) {
              return t === e;
            })),
              delete kN[e];
          },
          clear: function () {
            (AN = []), (kN = {});
          },
          length: 0,
        }),
        Object.defineProperty(RN, "length", {
          get: function () {
            return AN.length;
          },
          configurable: !1,
          enumerable: !1,
        }),
        (NN = RN);
    }
    var UN,
      jN = {
        geom: { Rect: wN },
        util: {
          Promise: eo,
          Delay: ao,
          Tools: At,
          VK: ad,
          URI: WE,
          Class: EN,
          EventDispatcher: SE,
          Observable: NE,
          I18n: Nu,
          XHR: LN,
          JSON: BN,
          JSONRequest: MN,
          JSONP: PN,
          LocalStorage: NN,
          Color: function (e) {
            var t = {},
              n = 0,
              r = 0,
              o = 0,
              i = function (e) {
                var i;
                return (
                  "object" == typeof e
                    ? "r" in e
                      ? ((n = e.r), (r = e.g), (o = e.b))
                      : "v" in e &&
                        (function (e, t, i) {
                          if (
                            ((e = (parseInt(e, 10) || 0) % 360),
                            (t = parseInt(t, 10) / 100),
                            (i = parseInt(i, 10) / 100),
                            (t = DN(0, TN(t, 1))),
                            (i = DN(0, TN(i, 1))),
                            0 !== t)
                          ) {
                            var a = e / 60,
                              u = i * t,
                              c = u * (1 - Math.abs((a % 2) - 1)),
                              s = i - u;
                            switch (Math.floor(a)) {
                              case 0:
                                (n = u), (r = c), (o = 0);
                                break;
                              case 1:
                                (n = c), (r = u), (o = 0);
                                break;
                              case 2:
                                (n = 0), (r = u), (o = c);
                                break;
                              case 3:
                                (n = 0), (r = c), (o = u);
                                break;
                              case 4:
                                (n = c), (r = 0), (o = u);
                                break;
                              case 5:
                                (n = u), (r = 0), (o = c);
                                break;
                              default:
                                n = r = o = 0;
                            }
                            (n = ON(255 * (n + s))),
                              (r = ON(255 * (r + s))),
                              (o = ON(255 * (o + s)));
                          } else n = r = o = ON(255 * i);
                        })(e.h, e.s, e.v)
                    : (i =
                        /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(
                          e
                        ))
                    ? ((n = parseInt(i[1], 10)),
                      (r = parseInt(i[2], 10)),
                      (o = parseInt(i[3], 10)))
                    : (i = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))
                    ? ((n = parseInt(i[1], 16)),
                      (r = parseInt(i[2], 16)),
                      (o = parseInt(i[3], 16)))
                    : (i = /#([0-F])([0-F])([0-F])/gi.exec(e)) &&
                      ((n = parseInt(i[1] + i[1], 16)),
                      (r = parseInt(i[2] + i[2], 16)),
                      (o = parseInt(i[3] + i[3], 16))),
                  (n = n < 0 ? 0 : n > 255 ? 255 : n),
                  (r = r < 0 ? 0 : r > 255 ? 255 : r),
                  (o = o < 0 ? 0 : o > 255 ? 255 : o),
                  t
                );
              };
            return (
              e && i(e),
              (t.toRgb = function () {
                return { r: n, g: r, b: o };
              }),
              (t.toHsv = function () {
                return (function (e, t, n) {
                  var r, o;
                  o = 0;
                  var i = TN((e /= 255), TN((t /= 255), (n /= 255))),
                    a = DN(e, DN(t, n));
                  return i === a
                    ? { h: 0, s: 0, v: 100 * (o = i) }
                    : ((r = (a - i) / a),
                      (o = a),
                      {
                        h: ON(
                          60 *
                            ((e === i ? 3 : n === i ? 1 : 5) -
                              (e === i ? t - n : n === i ? e - t : n - e) /
                                (a - i))
                        ),
                        s: ON(100 * r),
                        v: ON(100 * o),
                      });
                })(n, r, o);
              }),
              (t.toHex = function () {
                var e = function (e) {
                  return (e = parseInt(e, 10).toString(16)).length > 1
                    ? e
                    : "0" + e;
                };
                return "#" + e(n) + e(r) + e(o);
              }),
              (t.parse = i),
              t
            );
          },
          ImageUploader: function (e) {
            var t = gb(),
              n = Cb(e, t);
            return {
              upload: function (t, r) {
                return (
                  void 0 === r && (r = !0), n.upload(t, r ? bb(e) : void 0)
                );
              },
            };
          },
        },
        dom: {
          EventUtils: zi,
          Sizzle: Sa,
          DomQuery: lu,
          TreeWalker: so,
          TextSeeker: Zu,
          DOMUtils: vu,
          ScriptLoader: wu,
          RangeUtils: _d,
          Serializer: Cy,
          StyleSheetLoader: uo,
          ControlSelection: cd,
          BookmarkManager: nd,
          Selection: Jv,
          Event: zi.Event,
        },
        html: {
          Styles: Oi,
          Entities: Ci,
          Node: Pm,
          Schema: Ti,
          SaxParser: jm,
          DomParser: gy,
          Writer: Km,
          Serializer: Xm,
        },
        Env: _t,
        AddOnManager: ku,
        Annotator: td,
        Formatter: Ab,
        UndoManager: Rb,
        EditorCommands: pE,
        WindowManager: ib,
        NotificationManager: nb,
        EditorObservable: DE,
        Shortcuts: jE,
        Editor: QE,
        FocusManager: lm,
        EditorManager: fN,
        DOM: vu.DOM,
        ScriptLoader: wu.ScriptLoader,
        PluginManager: rb,
        ThemeManager: ob,
        IconManager: Ky,
        Resource: xN,
        trim: At.trim,
        isArray: At.isArray,
        is: At.is,
        toArray: At.toArray,
        makeMap: At.makeMap,
        each: At.each,
        map: At.map,
        grep: At.grep,
        inArray: At.inArray,
        extend: At.extend,
        create: At.create,
        walk: At.walk,
        createNS: At.createNS,
        resolve: At.resolve,
        explode: At.explode,
        _addCacheSuffix: At._addCacheSuffix,
        isOpera: _t.opera,
        isWebKit: _t.webkit,
        isIE: _t.ie,
        isGecko: _t.gecko,
        isMac: _t.mac,
      },
      zN = At.extend(fN, jN);
    (UN = zN),
      (window.tinymce = UN),
      (window.tinyMCE = UN),
      (function (e) {
        try {
          to.exports = e;
        } catch (t) {}
      })(zN);
  })();
var oo = ro.exports;
export {
  Gn as F,
  fr as a,
  un as b,
  ir as c,
  Kt as d,
  nr as e,
  $e as f,
  Or as g,
  pr as h,
  Kn as i,
  eo as j,
  xt as n,
  rn as o,
  et as r,
  c as t,
  oo as u,
  Vt as w,
};
