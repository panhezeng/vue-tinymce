var L4 = Object.defineProperty,
  F4 = Object.defineProperties;
var M4 = Object.getOwnPropertyDescriptors;
var au = Object.getOwnPropertySymbols;
var BS = Object.prototype.hasOwnProperty,
  IS = Object.prototype.propertyIsEnumerable;
var DS = (l, u, m) =>
    u in l
      ? L4(l, u, { enumerable: !0, configurable: !0, writable: !0, value: m })
      : (l[u] = m),
  Se = (l, u) => {
    for (var m in u || (u = {})) BS.call(u, m) && DS(l, m, u[m]);
    if (au) for (var m of au(u)) IS.call(u, m) && DS(l, m, u[m]);
    return l;
  },
  ct = (l, u) => F4(l, M4(u));
var $S = (l, u) => {
  var m = {};
  for (var h in l) BS.call(l, h) && u.indexOf(h) < 0 && (m[h] = l[h]);
  if (l != null && au)
    for (var h of au(l)) u.indexOf(h) < 0 && IS.call(l, h) && (m[h] = l[h]);
  return m;
};
function jp(l, u) {
  const m = Object.create(null),
    h = l.split(",");
  for (let v = 0; v < h.length; v++) m[h[v]] = !0;
  return u ? (v) => !!m[v.toLowerCase()] : (v) => !!m[v];
}
const U4 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  z4 = jp(U4);
function c_(l) {
  return !!l || l === "";
}
function qp(l) {
  if (Xe(l)) {
    const u = {};
    for (let m = 0; m < l.length; m++) {
      const h = l[m],
        v = ln(h) ? W4(h) : qp(h);
      if (v) for (const w in v) u[w] = v[w];
    }
    return u;
  } else {
    if (ln(l)) return l;
    if (cn(l)) return l;
  }
}
const H4 = /;(?![^(]*\))/g,
  V4 = /:(.+)/;
function W4(l) {
  const u = {};
  return (
    l.split(H4).forEach((m) => {
      if (m) {
        const h = m.split(V4);
        h.length > 1 && (u[h[0].trim()] = h[1].trim());
      }
    }),
    u
  );
}
function Kp(l) {
  let u = "";
  if (ln(l)) u = l;
  else if (Xe(l))
    for (let m = 0; m < l.length; m++) {
      const h = Kp(l[m]);
      h && (u += h + " ");
    }
  else if (cn(l)) for (const m in l) l[m] && (u += m + " ");
  return u.trim();
}
const K9 = (l) =>
    ln(l)
      ? l
      : l == null
      ? ""
      : Xe(l) || (cn(l) && (l.toString === m_ || !Qe(l.toString)))
      ? JSON.stringify(l, u_, 2)
      : String(l),
  u_ = (l, u) =>
    u && u.__v_isRef
      ? u_(l, u.value)
      : Ai(u)
      ? {
          [`Map(${u.size})`]: [...u.entries()].reduce(
            (m, [h, v]) => ((m[`${h} =>`] = v), m),
            {}
          ),
        }
      : f_(u)
      ? { [`Set(${u.size})`]: [...u.values()] }
      : cn(u) && !Xe(u) && !p_(u)
      ? String(u)
      : u,
  St = {},
  Ni = [],
  ms = () => {},
  j4 = () => !1,
  q4 = /^on[^a-z]/,
  xu = (l) => q4.test(l),
  Gp = (l) => l.startsWith("onUpdate:"),
  Tn = Object.assign,
  Yp = (l, u) => {
    const m = l.indexOf(u);
    m > -1 && l.splice(m, 1);
  },
  K4 = Object.prototype.hasOwnProperty,
  ot = (l, u) => K4.call(l, u),
  Xe = Array.isArray,
  Ai = (l) => wu(l) === "[object Map]",
  f_ = (l) => wu(l) === "[object Set]",
  Qe = (l) => typeof l == "function",
  ln = (l) => typeof l == "string",
  Xp = (l) => typeof l == "symbol",
  cn = (l) => l !== null && typeof l == "object",
  d_ = (l) => cn(l) && Qe(l.then) && Qe(l.catch),
  m_ = Object.prototype.toString,
  wu = (l) => m_.call(l),
  G4 = (l) => wu(l).slice(8, -1),
  p_ = (l) => wu(l) === "[object Object]",
  Qp = (l) =>
    ln(l) && l !== "NaN" && l[0] !== "-" && "" + parseInt(l, 10) === l,
  mu = jp(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Su = (l) => {
    const u = Object.create(null);
    return (m) => u[m] || (u[m] = l(m));
  },
  Y4 = /-(\w)/g,
  Ws = Su((l) => l.replace(Y4, (u, m) => (m ? m.toUpperCase() : ""))),
  X4 = /\B([A-Z])/g,
  Pi = Su((l) => l.replace(X4, "-$1").toLowerCase()),
  _u = Su((l) => l.charAt(0).toUpperCase() + l.slice(1)),
  Sp = Su((l) => (l ? `on${_u(l)}` : "")),
  Ga = (l, u) => !Object.is(l, u),
  _p = (l, u) => {
    for (let m = 0; m < l.length; m++) l[m](u);
  },
  gu = (l, u, m) => {
    Object.defineProperty(l, u, { configurable: !0, enumerable: !1, value: m });
  },
  Q4 = (l) => {
    const u = parseFloat(l);
    return isNaN(u) ? l : u;
  };
let LS;
const Z4 = () =>
  LS ||
  (LS =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
let co;
class J4 {
  constructor(u = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !u &&
        co &&
        ((this.parent = co),
        (this.index = (co.scopes || (co.scopes = [])).push(this) - 1));
  }
  run(u) {
    if (this.active)
      try {
        return (co = this), u();
      } finally {
        co = this.parent;
      }
  }
  on() {
    co = this;
  }
  off() {
    co = this.parent;
  }
  stop(u) {
    if (this.active) {
      let m, h;
      for (m = 0, h = this.effects.length; m < h; m++) this.effects[m].stop();
      for (m = 0, h = this.cleanups.length; m < h; m++) this.cleanups[m]();
      if (this.scopes)
        for (m = 0, h = this.scopes.length; m < h; m++) this.scopes[m].stop(!0);
      if (this.parent && !u) {
        const v = this.parent.scopes.pop();
        v &&
          v !== this &&
          ((this.parent.scopes[this.index] = v), (v.index = this.index));
      }
      this.active = !1;
    }
  }
}
function e5(l, u = co) {
  u && u.active && u.effects.push(l);
}
const Zp = (l) => {
    const u = new Set(l);
    return (u.w = 0), (u.n = 0), u;
  },
  g_ = (l) => (l.w & Wo) > 0,
  h_ = (l) => (l.n & Wo) > 0,
  t5 = ({ deps: l }) => {
    if (l.length) for (let u = 0; u < l.length; u++) l[u].w |= Wo;
  },
  n5 = (l) => {
    const { deps: u } = l;
    if (u.length) {
      let m = 0;
      for (let h = 0; h < u.length; h++) {
        const v = u[h];
        g_(v) && !h_(v) ? v.delete(l) : (u[m++] = v),
          (v.w &= ~Wo),
          (v.n &= ~Wo);
      }
      u.length = m;
    }
  },
  Pp = new WeakMap();
let Va = 0,
  Wo = 1;
const Op = 30;
let Hs;
const Rr = Symbol(""),
  Dp = Symbol("");
class Jp {
  constructor(u, m = null, h) {
    (this.fn = u),
      (this.scheduler = m),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      e5(this, h);
  }
  run() {
    if (!this.active) return this.fn();
    let u = Hs,
      m = Ho;
    for (; u; ) {
      if (u === this) return;
      u = u.parent;
    }
    try {
      return (
        (this.parent = Hs),
        (Hs = this),
        (Ho = !0),
        (Wo = 1 << ++Va),
        Va <= Op ? t5(this) : FS(this),
        this.fn()
      );
    } finally {
      Va <= Op && n5(this),
        (Wo = 1 << --Va),
        (Hs = this.parent),
        (Ho = m),
        (this.parent = void 0);
    }
  }
  stop() {
    this.active && (FS(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function FS(l) {
  const { deps: u } = l;
  if (u.length) {
    for (let m = 0; m < u.length; m++) u[m].delete(l);
    u.length = 0;
  }
}
let Ho = !0;
const b_ = [];
function Oi() {
  b_.push(Ho), (Ho = !1);
}
function Di() {
  const l = b_.pop();
  Ho = l === void 0 ? !0 : l;
}
function Wn(l, u, m) {
  if (Ho && Hs) {
    let h = Pp.get(l);
    h || Pp.set(l, (h = new Map()));
    let v = h.get(m);
    v || h.set(m, (v = Zp())), C_(v);
  }
}
function C_(l, u) {
  let m = !1;
  Va <= Op ? h_(l) || ((l.n |= Wo), (m = !g_(l))) : (m = !l.has(Hs)),
    m && (l.add(Hs), Hs.deps.push(l));
}
function po(l, u, m, h, v, w) {
  const A = Pp.get(l);
  if (!A) return;
  let O = [];
  if (u === "clear") O = [...A.values()];
  else if (m === "length" && Xe(l))
    A.forEach((F, ee) => {
      (ee === "length" || ee >= h) && O.push(F);
    });
  else
    switch ((m !== void 0 && O.push(A.get(m)), u)) {
      case "add":
        Xe(l)
          ? Qp(m) && O.push(A.get("length"))
          : (O.push(A.get(Rr)), Ai(l) && O.push(A.get(Dp)));
        break;
      case "delete":
        Xe(l) || (O.push(A.get(Rr)), Ai(l) && O.push(A.get(Dp)));
        break;
      case "set":
        Ai(l) && O.push(A.get(Rr));
        break;
    }
  if (O.length === 1) O[0] && Bp(O[0]);
  else {
    const F = [];
    for (const ee of O) ee && F.push(...ee);
    Bp(Zp(F));
  }
}
function Bp(l, u) {
  for (const m of Xe(l) ? l : [...l])
    (m !== Hs || m.allowRecurse) && (m.scheduler ? m.scheduler() : m.run());
}
const s5 = jp("__proto__,__v_isRef,__isVue"),
  y_ = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((l) => Symbol[l])
      .filter(Xp)
  ),
  o5 = eg(),
  r5 = eg(!1, !0),
  i5 = eg(!0),
  MS = a5();
function a5() {
  const l = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((u) => {
      l[u] = function (...m) {
        const h = ft(this);
        for (let w = 0, A = this.length; w < A; w++) Wn(h, "get", w + "");
        const v = h[u](...m);
        return v === -1 || v === !1 ? h[u](...m.map(ft)) : v;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((u) => {
      l[u] = function (...m) {
        Oi();
        const h = ft(this)[u].apply(this, m);
        return Di(), h;
      };
    }),
    l
  );
}
function eg(l = !1, u = !1) {
  return function (h, v, w) {
    if (v === "__v_isReactive") return !l;
    if (v === "__v_isReadonly") return l;
    if (v === "__v_isShallow") return u;
    if (v === "__v_raw" && w === (l ? (u ? w5 : S_) : u ? w_ : x_).get(h))
      return h;
    const A = Xe(h);
    if (!l && A && ot(MS, v)) return Reflect.get(MS, v, w);
    const O = Reflect.get(h, v, w);
    return (Xp(v) ? y_.has(v) : s5(v)) || (l || Wn(h, "get", v), u)
      ? O
      : an(O)
      ? !A || !Qp(v)
        ? O.value
        : O
      : cn(O)
      ? l
        ? __(O)
        : sg(O)
      : O;
  };
}
const l5 = v_(),
  c5 = v_(!0);
function v_(l = !1) {
  return function (m, h, v, w) {
    let A = m[h];
    if (Ya(A) && an(A) && !an(v)) return !1;
    if (
      !l &&
      !Ya(v) &&
      (k_(v) || ((v = ft(v)), (A = ft(A))), !Xe(m) && an(A) && !an(v))
    )
      return (A.value = v), !0;
    const O = Xe(m) && Qp(h) ? Number(h) < m.length : ot(m, h),
      F = Reflect.set(m, h, v, w);
    return (
      m === ft(w) && (O ? Ga(v, A) && po(m, "set", h, v) : po(m, "add", h, v)),
      F
    );
  };
}
function u5(l, u) {
  const m = ot(l, u);
  l[u];
  const h = Reflect.deleteProperty(l, u);
  return h && m && po(l, "delete", u, void 0), h;
}
function f5(l, u) {
  const m = Reflect.has(l, u);
  return (!Xp(u) || !y_.has(u)) && Wn(l, "has", u), m;
}
function d5(l) {
  return Wn(l, "iterate", Xe(l) ? "length" : Rr), Reflect.ownKeys(l);
}
const E_ = { get: o5, set: l5, deleteProperty: u5, has: f5, ownKeys: d5 },
  m5 = {
    get: i5,
    set(l, u) {
      return !0;
    },
    deleteProperty(l, u) {
      return !0;
    },
  },
  p5 = Tn({}, E_, { get: r5, set: c5 }),
  tg = (l) => l,
  ku = (l) => Reflect.getPrototypeOf(l);
function lu(l, u, m = !1, h = !1) {
  l = l.__v_raw;
  const v = ft(l),
    w = ft(u);
  u !== w && !m && Wn(v, "get", u), !m && Wn(v, "get", w);
  const { has: A } = ku(v),
    O = h ? tg : m ? rg : Xa;
  if (A.call(v, u)) return O(l.get(u));
  if (A.call(v, w)) return O(l.get(w));
  l !== v && l.get(u);
}
function cu(l, u = !1) {
  const m = this.__v_raw,
    h = ft(m),
    v = ft(l);
  return (
    l !== v && !u && Wn(h, "has", l),
    !u && Wn(h, "has", v),
    l === v ? m.has(l) : m.has(l) || m.has(v)
  );
}
function uu(l, u = !1) {
  return (
    (l = l.__v_raw), !u && Wn(ft(l), "iterate", Rr), Reflect.get(l, "size", l)
  );
}
function US(l) {
  l = ft(l);
  const u = ft(this);
  return ku(u).has.call(u, l) || (u.add(l), po(u, "add", l, l)), this;
}
function zS(l, u) {
  u = ft(u);
  const m = ft(this),
    { has: h, get: v } = ku(m);
  let w = h.call(m, l);
  w || ((l = ft(l)), (w = h.call(m, l)));
  const A = v.call(m, l);
  return (
    m.set(l, u), w ? Ga(u, A) && po(m, "set", l, u) : po(m, "add", l, u), this
  );
}
function HS(l) {
  const u = ft(this),
    { has: m, get: h } = ku(u);
  let v = m.call(u, l);
  v || ((l = ft(l)), (v = m.call(u, l))), h && h.call(u, l);
  const w = u.delete(l);
  return v && po(u, "delete", l, void 0), w;
}
function VS() {
  const l = ft(this),
    u = l.size !== 0,
    m = l.clear();
  return u && po(l, "clear", void 0, void 0), m;
}
function fu(l, u) {
  return function (h, v) {
    const w = this,
      A = w.__v_raw,
      O = ft(A),
      F = u ? tg : l ? rg : Xa;
    return (
      !l && Wn(O, "iterate", Rr),
      A.forEach((ee, ie) => h.call(v, F(ee), F(ie), w))
    );
  };
}
function du(l, u, m) {
  return function (...h) {
    const v = this.__v_raw,
      w = ft(v),
      A = Ai(w),
      O = l === "entries" || (l === Symbol.iterator && A),
      F = l === "keys" && A,
      ee = v[l](...h),
      ie = m ? tg : u ? rg : Xa;
    return (
      !u && Wn(w, "iterate", F ? Dp : Rr),
      {
        next() {
          const { value: we, done: Re } = ee.next();
          return Re
            ? { value: we, done: Re }
            : { value: O ? [ie(we[0]), ie(we[1])] : ie(we), done: Re };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Mo(l) {
  return function (...u) {
    return l === "delete" ? !1 : this;
  };
}
function g5() {
  const l = {
      get(w) {
        return lu(this, w);
      },
      get size() {
        return uu(this);
      },
      has: cu,
      add: US,
      set: zS,
      delete: HS,
      clear: VS,
      forEach: fu(!1, !1),
    },
    u = {
      get(w) {
        return lu(this, w, !1, !0);
      },
      get size() {
        return uu(this);
      },
      has: cu,
      add: US,
      set: zS,
      delete: HS,
      clear: VS,
      forEach: fu(!1, !0),
    },
    m = {
      get(w) {
        return lu(this, w, !0);
      },
      get size() {
        return uu(this, !0);
      },
      has(w) {
        return cu.call(this, w, !0);
      },
      add: Mo("add"),
      set: Mo("set"),
      delete: Mo("delete"),
      clear: Mo("clear"),
      forEach: fu(!0, !1),
    },
    h = {
      get(w) {
        return lu(this, w, !0, !0);
      },
      get size() {
        return uu(this, !0);
      },
      has(w) {
        return cu.call(this, w, !0);
      },
      add: Mo("add"),
      set: Mo("set"),
      delete: Mo("delete"),
      clear: Mo("clear"),
      forEach: fu(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((w) => {
      (l[w] = du(w, !1, !1)),
        (m[w] = du(w, !0, !1)),
        (u[w] = du(w, !1, !0)),
        (h[w] = du(w, !0, !0));
    }),
    [l, m, u, h]
  );
}
const [h5, b5, C5, y5] = g5();
function ng(l, u) {
  const m = u ? (l ? y5 : C5) : l ? b5 : h5;
  return (h, v, w) =>
    v === "__v_isReactive"
      ? !l
      : v === "__v_isReadonly"
      ? l
      : v === "__v_raw"
      ? h
      : Reflect.get(ot(m, v) && v in h ? m : h, v, w);
}
const v5 = { get: ng(!1, !1) },
  E5 = { get: ng(!1, !0) },
  x5 = { get: ng(!0, !1) },
  x_ = new WeakMap(),
  w_ = new WeakMap(),
  S_ = new WeakMap(),
  w5 = new WeakMap();
function S5(l) {
  switch (l) {
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
}
function _5(l) {
  return l.__v_skip || !Object.isExtensible(l) ? 0 : S5(G4(l));
}
function sg(l) {
  return Ya(l) ? l : og(l, !1, E_, v5, x_);
}
function k5(l) {
  return og(l, !1, p5, E5, w_);
}
function __(l) {
  return og(l, !0, m5, x5, S_);
}
function og(l, u, m, h, v) {
  if (!cn(l) || (l.__v_raw && !(u && l.__v_isReactive))) return l;
  const w = v.get(l);
  if (w) return w;
  const A = _5(l);
  if (A === 0) return l;
  const O = new Proxy(l, A === 2 ? h : m);
  return v.set(l, O), O;
}
function Ti(l) {
  return Ya(l) ? Ti(l.__v_raw) : !!(l && l.__v_isReactive);
}
function Ya(l) {
  return !!(l && l.__v_isReadonly);
}
function k_(l) {
  return !!(l && l.__v_isShallow);
}
function N_(l) {
  return Ti(l) || Ya(l);
}
function ft(l) {
  const u = l && l.__v_raw;
  return u ? ft(u) : l;
}
function A_(l) {
  return gu(l, "__v_skip", !0), l;
}
const Xa = (l) => (cn(l) ? sg(l) : l),
  rg = (l) => (cn(l) ? __(l) : l);
function T_(l) {
  Ho && Hs && ((l = ft(l)), C_(l.dep || (l.dep = Zp())));
}
function R_(l, u) {
  (l = ft(l)), l.dep && Bp(l.dep);
}
function an(l) {
  return !!(l && l.__v_isRef === !0);
}
function G9(l) {
  return N5(l, !1);
}
function N5(l, u) {
  return an(l) ? l : new A5(l, u);
}
class A5 {
  constructor(u, m) {
    (this.__v_isShallow = m),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = m ? u : ft(u)),
      (this._value = m ? u : Xa(u));
  }
  get value() {
    return T_(this), this._value;
  }
  set value(u) {
    (u = this.__v_isShallow ? u : ft(u)),
      Ga(u, this._rawValue) &&
        ((this._rawValue = u),
        (this._value = this.__v_isShallow ? u : Xa(u)),
        R_(this));
  }
}
function T5(l) {
  return an(l) ? l.value : l;
}
const R5 = {
  get: (l, u, m) => T5(Reflect.get(l, u, m)),
  set: (l, u, m, h) => {
    const v = l[u];
    return an(v) && !an(m) ? ((v.value = m), !0) : Reflect.set(l, u, m, h);
  },
};
function P_(l) {
  return Ti(l) ? l : new Proxy(l, R5);
}
class P5 {
  constructor(u, m, h, v) {
    (this._setter = m),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new Jp(u, () => {
        this._dirty || ((this._dirty = !0), R_(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !v),
      (this.__v_isReadonly = h);
  }
  get value() {
    const u = ft(this);
    return (
      T_(u),
      (u._dirty || !u._cacheable) &&
        ((u._dirty = !1), (u._value = u.effect.run())),
      u._value
    );
  }
  set value(u) {
    this._setter(u);
  }
}
function O5(l, u, m = !1) {
  let h, v;
  const w = Qe(l);
  return (
    w ? ((h = l), (v = ms)) : ((h = l.get), (v = l.set)),
    new P5(h, v, w || !v, m)
  );
}
Promise.resolve();
function Vo(l, u, m, h) {
  let v;
  try {
    v = h ? l(...h) : l();
  } catch (w) {
    Nu(w, u, m);
  }
  return v;
}
function ps(l, u, m, h) {
  if (Qe(l)) {
    const w = Vo(l, u, m, h);
    return (
      w &&
        d_(w) &&
        w.catch((A) => {
          Nu(A, u, m);
        }),
      w
    );
  }
  const v = [];
  for (let w = 0; w < l.length; w++) v.push(ps(l[w], u, m, h));
  return v;
}
function Nu(l, u, m, h = !0) {
  const v = u ? u.vnode : null;
  if (u) {
    let w = u.parent;
    const A = u.proxy,
      O = m;
    for (; w; ) {
      const ee = w.ec;
      if (ee) {
        for (let ie = 0; ie < ee.length; ie++)
          if (ee[ie](l, A, O) === !1) return;
      }
      w = w.parent;
    }
    const F = u.appContext.config.errorHandler;
    if (F) {
      Vo(F, null, 10, [l, A, O]);
      return;
    }
  }
  D5(l, m, v, h);
}
function D5(l, u, m, h = !0) {
  console.error(l);
}
let hu = !1,
  Ip = !1;
const Vn = [];
let fo = 0;
const ja = [];
let Wa = null,
  Si = 0;
const qa = [];
let Uo = null,
  _i = 0;
const O_ = Promise.resolve();
let ig = null,
  $p = null;
function B5(l) {
  const u = ig || O_;
  return l ? u.then(this ? l.bind(this) : l) : u;
}
function I5(l) {
  let u = fo + 1,
    m = Vn.length;
  for (; u < m; ) {
    const h = (u + m) >>> 1;
    Qa(Vn[h]) < l ? (u = h + 1) : (m = h);
  }
  return u;
}
function D_(l) {
  (!Vn.length || !Vn.includes(l, hu && l.allowRecurse ? fo + 1 : fo)) &&
    l !== $p &&
    (l.id == null ? Vn.push(l) : Vn.splice(I5(l.id), 0, l), B_());
}
function B_() {
  !hu && !Ip && ((Ip = !0), (ig = O_.then(L_)));
}
function $5(l) {
  const u = Vn.indexOf(l);
  u > fo && Vn.splice(u, 1);
}
function I_(l, u, m, h) {
  Xe(l)
    ? m.push(...l)
    : (!u || !u.includes(l, l.allowRecurse ? h + 1 : h)) && m.push(l),
    B_();
}
function L5(l) {
  I_(l, Wa, ja, Si);
}
function F5(l) {
  I_(l, Uo, qa, _i);
}
function ag(l, u = null) {
  if (ja.length) {
    for (
      $p = u, Wa = [...new Set(ja)], ja.length = 0, Si = 0;
      Si < Wa.length;
      Si++
    )
      Wa[Si]();
    (Wa = null), (Si = 0), ($p = null), ag(l, u);
  }
}
function $_(l) {
  if (qa.length) {
    const u = [...new Set(qa)];
    if (((qa.length = 0), Uo)) {
      Uo.push(...u);
      return;
    }
    for (Uo = u, Uo.sort((m, h) => Qa(m) - Qa(h)), _i = 0; _i < Uo.length; _i++)
      Uo[_i]();
    (Uo = null), (_i = 0);
  }
}
const Qa = (l) => (l.id == null ? 1 / 0 : l.id);
function L_(l) {
  (Ip = !1), (hu = !0), ag(l), Vn.sort((m, h) => Qa(m) - Qa(h));
  const u = ms;
  try {
    for (fo = 0; fo < Vn.length; fo++) {
      const m = Vn[fo];
      m && m.active !== !1 && Vo(m, null, 14);
    }
  } finally {
    (fo = 0),
      (Vn.length = 0),
      $_(),
      (hu = !1),
      (ig = null),
      (Vn.length || ja.length || qa.length) && L_(l);
  }
}
function M5(l, u, ...m) {
  const h = l.vnode.props || St;
  let v = m;
  const w = u.startsWith("update:"),
    A = w && u.slice(7);
  if (A && A in h) {
    const ie = `${A === "modelValue" ? "model" : A}Modifiers`,
      { number: we, trim: Re } = h[ie] || St;
    Re ? (v = m.map((Ge) => Ge.trim())) : we && (v = m.map(Q4));
  }
  let O,
    F = h[(O = Sp(u))] || h[(O = Sp(Ws(u)))];
  !F && w && (F = h[(O = Sp(Pi(u)))]), F && ps(F, l, 6, v);
  const ee = h[O + "Once"];
  if (ee) {
    if (!l.emitted) l.emitted = {};
    else if (l.emitted[O]) return;
    (l.emitted[O] = !0), ps(ee, l, 6, v);
  }
}
function F_(l, u, m = !1) {
  const h = u.emitsCache,
    v = h.get(l);
  if (v !== void 0) return v;
  const w = l.emits;
  let A = {},
    O = !1;
  if (!Qe(l)) {
    const F = (ee) => {
      const ie = F_(ee, u, !0);
      ie && ((O = !0), Tn(A, ie));
    };
    !m && u.mixins.length && u.mixins.forEach(F),
      l.extends && F(l.extends),
      l.mixins && l.mixins.forEach(F);
  }
  return !w && !O
    ? (h.set(l, null), null)
    : (Xe(w) ? w.forEach((F) => (A[F] = null)) : Tn(A, w), h.set(l, A), A);
}
function lg(l, u) {
  return !l || !xu(u)
    ? !1
    : ((u = u.slice(2).replace(/Once$/, "")),
      ot(l, u[0].toLowerCase() + u.slice(1)) || ot(l, Pi(u)) || ot(l, u));
}
let Vs = null,
  M_ = null;
function bu(l) {
  const u = Vs;
  return (Vs = l), (M_ = (l && l.type.__scopeId) || null), u;
}
function U5(l, u = Vs, m) {
  if (!u || l._n) return l;
  const h = (...v) => {
    h._d && JS(-1);
    const w = bu(u),
      A = l(...v);
    return bu(w), h._d && JS(1), A;
  };
  return (h._n = !0), (h._c = !0), (h._d = !0), h;
}
function kp(l) {
  const {
    type: u,
    vnode: m,
    proxy: h,
    withProxy: v,
    props: w,
    propsOptions: [A],
    slots: O,
    attrs: F,
    emit: ee,
    render: ie,
    renderCache: we,
    data: Re,
    setupState: Ge,
    ctx: Et,
    inheritAttrs: Rt,
  } = l;
  let Je, dt;
  const Bn = bu(l);
  try {
    if (m.shapeFlag & 4) {
      const ut = v || h;
      (Je = zs(ie.call(ut, ut, we, w, Ge, Re, Et))), (dt = F);
    } else {
      const ut = u;
      (Je = zs(
        ut.length > 1 ? ut(w, { attrs: F, slots: O, emit: ee }) : ut(w, null)
      )),
        (dt = u.props ? F : z5(F));
    }
  } catch (ut) {
    (Ka.length = 0), Nu(ut, l, 1), (Je = mo(Dr));
  }
  let be = Je;
  if (dt && Rt !== !1) {
    const ut = Object.keys(dt),
      { shapeFlag: js } = be;
    ut.length &&
      js & 7 &&
      (A && ut.some(Gp) && (dt = H5(dt, A)), (be = Za(be, dt)));
  }
  return (
    m.dirs && (be.dirs = be.dirs ? be.dirs.concat(m.dirs) : m.dirs),
    m.transition && (be.transition = m.transition),
    (Je = be),
    bu(Bn),
    Je
  );
}
const z5 = (l) => {
    let u;
    for (const m in l)
      (m === "class" || m === "style" || xu(m)) && ((u || (u = {}))[m] = l[m]);
    return u;
  },
  H5 = (l, u) => {
    const m = {};
    for (const h in l) (!Gp(h) || !(h.slice(9) in u)) && (m[h] = l[h]);
    return m;
  };
function V5(l, u, m) {
  const { props: h, children: v, component: w } = l,
    { props: A, children: O, patchFlag: F } = u,
    ee = w.emitsOptions;
  if (u.dirs || u.transition) return !0;
  if (m && F >= 0) {
    if (F & 1024) return !0;
    if (F & 16) return h ? WS(h, A, ee) : !!A;
    if (F & 8) {
      const ie = u.dynamicProps;
      for (let we = 0; we < ie.length; we++) {
        const Re = ie[we];
        if (A[Re] !== h[Re] && !lg(ee, Re)) return !0;
      }
    }
  } else
    return (v || O) && (!O || !O.$stable)
      ? !0
      : h === A
      ? !1
      : h
      ? A
        ? WS(h, A, ee)
        : !0
      : !!A;
  return !1;
}
function WS(l, u, m) {
  const h = Object.keys(u);
  if (h.length !== Object.keys(l).length) return !0;
  for (let v = 0; v < h.length; v++) {
    const w = h[v];
    if (u[w] !== l[w] && !lg(m, w)) return !0;
  }
  return !1;
}
function W5({ vnode: l, parent: u }, m) {
  for (; u && u.subTree === l; ) ((l = u.vnode).el = m), (u = u.parent);
}
const j5 = (l) => l.__isSuspense;
function q5(l, u) {
  u && u.pendingBranch
    ? Xe(l)
      ? u.effects.push(...l)
      : u.effects.push(l)
    : F5(l);
}
function K5(l, u) {
  if (rn) {
    let m = rn.provides;
    const h = rn.parent && rn.parent.provides;
    h === m && (m = rn.provides = Object.create(h)), (m[l] = u);
  }
}
function Np(l, u, m = !1) {
  const h = rn || Vs;
  if (h) {
    const v =
      h.parent == null
        ? h.vnode.appContext && h.vnode.appContext.provides
        : h.parent.provides;
    if (v && l in v) return v[l];
    if (arguments.length > 1) return m && Qe(u) ? u.call(h.proxy) : u;
  }
}
const jS = {};
function Ap(l, u, m) {
  return U_(l, u, m);
}
function U_(
  l,
  u,
  { immediate: m, deep: h, flush: v, onTrack: w, onTrigger: A } = St
) {
  const O = rn;
  let F,
    ee = !1,
    ie = !1;
  if (
    (an(l)
      ? ((F = () => l.value), (ee = k_(l)))
      : Ti(l)
      ? ((F = () => l), (h = !0))
      : Xe(l)
      ? ((ie = !0),
        (ee = l.some(Ti)),
        (F = () =>
          l.map((dt) => {
            if (an(dt)) return dt.value;
            if (Ti(dt)) return ki(dt);
            if (Qe(dt)) return Vo(dt, O, 2);
          })))
      : Qe(l)
      ? u
        ? (F = () => Vo(l, O, 2))
        : (F = () => {
            if (!(O && O.isUnmounted)) return we && we(), ps(l, O, 3, [Re]);
          })
      : (F = ms),
    u && h)
  ) {
    const dt = F;
    F = () => ki(dt());
  }
  let we,
    Re = (dt) => {
      we = Je.onStop = () => {
        Vo(dt, O, 4);
      };
    };
  if (Ja)
    return (
      (Re = ms), u ? m && ps(u, O, 3, [F(), ie ? [] : void 0, Re]) : F(), ms
    );
  let Ge = ie ? [] : jS;
  const Et = () => {
    if (!!Je.active)
      if (u) {
        const dt = Je.run();
        (h || ee || (ie ? dt.some((Bn, be) => Ga(Bn, Ge[be])) : Ga(dt, Ge))) &&
          (we && we(),
          ps(u, O, 3, [dt, Ge === jS ? void 0 : Ge, Re]),
          (Ge = dt));
      } else Je.run();
  };
  Et.allowRecurse = !!u;
  let Rt;
  v === "sync"
    ? (Rt = Et)
    : v === "post"
    ? (Rt = () => Dn(Et, O && O.suspense))
    : (Rt = () => {
        !O || O.isMounted ? L5(Et) : Et();
      });
  const Je = new Jp(F, Rt);
  return (
    u
      ? m
        ? Et()
        : (Ge = Je.run())
      : v === "post"
      ? Dn(Je.run.bind(Je), O && O.suspense)
      : Je.run(),
    () => {
      Je.stop(), O && O.scope && Yp(O.scope.effects, Je);
    }
  );
}
function G5(l, u, m) {
  const h = this.proxy,
    v = ln(l) ? (l.includes(".") ? z_(h, l) : () => h[l]) : l.bind(h, h);
  let w;
  Qe(u) ? (w = u) : ((w = u.handler), (m = u));
  const A = rn;
  Ri(this);
  const O = U_(v, w.bind(h), m);
  return A ? Ri(A) : Or(), O;
}
function z_(l, u) {
  const m = u.split(".");
  return () => {
    let h = l;
    for (let v = 0; v < m.length && h; v++) h = h[m[v]];
    return h;
  };
}
function ki(l, u) {
  if (!cn(l) || l.__v_skip || ((u = u || new Set()), u.has(l))) return l;
  if ((u.add(l), an(l))) ki(l.value, u);
  else if (Xe(l)) for (let m = 0; m < l.length; m++) ki(l[m], u);
  else if (f_(l) || Ai(l))
    l.forEach((m) => {
      ki(m, u);
    });
  else if (p_(l)) for (const m in l) ki(l[m], u);
  return l;
}
function Y9(l) {
  return Qe(l) ? { setup: l, name: l.name } : l;
}
const Lp = (l) => !!l.type.__asyncLoader,
  H_ = (l) => l.type.__isKeepAlive;
function Y5(l, u) {
  V_(l, "a", u);
}
function X5(l, u) {
  V_(l, "da", u);
}
function V_(l, u, m = rn) {
  const h =
    l.__wdc ||
    (l.__wdc = () => {
      let v = m;
      for (; v; ) {
        if (v.isDeactivated) return;
        v = v.parent;
      }
      return l();
    });
  if ((Au(u, h, m), m)) {
    let v = m.parent;
    for (; v && v.parent; )
      H_(v.parent.vnode) && Q5(h, u, m, v), (v = v.parent);
  }
}
function Q5(l, u, m, h) {
  const v = Au(u, l, h, !0);
  W_(() => {
    Yp(h[u], v);
  }, m);
}
function Au(l, u, m = rn, h = !1) {
  if (m) {
    const v = m[l] || (m[l] = []),
      w =
        u.__weh ||
        (u.__weh = (...A) => {
          if (m.isUnmounted) return;
          Oi(), Ri(m);
          const O = ps(u, m, l, A);
          return Or(), Di(), O;
        });
    return h ? v.unshift(w) : v.push(w), w;
  }
}
const go =
    (l) =>
    (u, m = rn) =>
      (!Ja || l === "sp") && Au(l, u, m),
  Z5 = go("bm"),
  J5 = go("m"),
  eq = go("bu"),
  tq = go("u"),
  nq = go("bum"),
  W_ = go("um"),
  sq = go("sp"),
  oq = go("rtg"),
  rq = go("rtc");
function iq(l, u = rn) {
  Au("ec", l, u);
}
let Fp = !0;
function aq(l) {
  const u = q_(l),
    m = l.proxy,
    h = l.ctx;
  (Fp = !1), u.beforeCreate && qS(u.beforeCreate, l, "bc");
  const {
    data: v,
    computed: w,
    methods: A,
    watch: O,
    provide: F,
    inject: ee,
    created: ie,
    beforeMount: we,
    mounted: Re,
    beforeUpdate: Ge,
    updated: Et,
    activated: Rt,
    deactivated: Je,
    beforeDestroy: dt,
    beforeUnmount: Bn,
    destroyed: be,
    unmounted: ut,
    render: js,
    renderTracked: Nt,
    renderTriggered: qs,
    errorCaptured: gs,
    serverPrefetch: Pt,
    expose: Mt,
    inheritAttrs: ke,
    components: Ye,
    directives: yn,
    filters: Ks,
  } = u;
  if ((ee && lq(ee, h, null, l.appContext.config.unwrapInjectedRef), A))
    for (const _t in A) {
      const K = A[_t];
      Qe(K) && (h[_t] = K.bind(m));
    }
  if (v) {
    const _t = v.call(m, m);
    cn(_t) && (l.data = sg(_t));
  }
  if (((Fp = !0), w))
    for (const _t in w) {
      const K = w[_t],
        xt = Qe(K) ? K.bind(m, m) : Qe(K.get) ? K.get.bind(m, m) : ms,
        Bi = !Qe(K) && Qe(K.set) ? K.set.bind(m) : ms,
        oe = Vq({ get: xt, set: Bi });
      Object.defineProperty(h, _t, {
        enumerable: !0,
        configurable: !0,
        get: () => oe.value,
        set: (hs) => (oe.value = hs),
      });
    }
  if (O) for (const _t in O) j_(O[_t], h, m, _t);
  if (F) {
    const _t = Qe(F) ? F.call(m) : F;
    Reflect.ownKeys(_t).forEach((K) => {
      K5(K, _t[K]);
    });
  }
  ie && qS(ie, l, "c");
  function Ot(_t, K) {
    Xe(K) ? K.forEach((xt) => _t(xt.bind(m))) : K && _t(K.bind(m));
  }
  if (
    (Ot(Z5, we),
    Ot(J5, Re),
    Ot(eq, Ge),
    Ot(tq, Et),
    Ot(Y5, Rt),
    Ot(X5, Je),
    Ot(iq, gs),
    Ot(rq, Nt),
    Ot(oq, qs),
    Ot(nq, Bn),
    Ot(W_, ut),
    Ot(sq, Pt),
    Xe(Mt))
  )
    if (Mt.length) {
      const _t = l.exposed || (l.exposed = {});
      Mt.forEach((K) => {
        Object.defineProperty(_t, K, {
          get: () => m[K],
          set: (xt) => (m[K] = xt),
        });
      });
    } else l.exposed || (l.exposed = {});
  js && l.render === ms && (l.render = js),
    ke != null && (l.inheritAttrs = ke),
    Ye && (l.components = Ye),
    yn && (l.directives = yn);
}
function lq(l, u, m = ms, h = !1) {
  Xe(l) && (l = Mp(l));
  for (const v in l) {
    const w = l[v];
    let A;
    cn(w)
      ? "default" in w
        ? (A = Np(w.from || v, w.default, !0))
        : (A = Np(w.from || v))
      : (A = Np(w)),
      an(A) && h
        ? Object.defineProperty(u, v, {
            enumerable: !0,
            configurable: !0,
            get: () => A.value,
            set: (O) => (A.value = O),
          })
        : (u[v] = A);
  }
}
function qS(l, u, m) {
  ps(Xe(l) ? l.map((h) => h.bind(u.proxy)) : l.bind(u.proxy), u, m);
}
function j_(l, u, m, h) {
  const v = h.includes(".") ? z_(m, h) : () => m[h];
  if (ln(l)) {
    const w = u[l];
    Qe(w) && Ap(v, w);
  } else if (Qe(l)) Ap(v, l.bind(m));
  else if (cn(l))
    if (Xe(l)) l.forEach((w) => j_(w, u, m, h));
    else {
      const w = Qe(l.handler) ? l.handler.bind(m) : u[l.handler];
      Qe(w) && Ap(v, w, l);
    }
}
function q_(l) {
  const u = l.type,
    { mixins: m, extends: h } = u,
    {
      mixins: v,
      optionsCache: w,
      config: { optionMergeStrategies: A },
    } = l.appContext,
    O = w.get(u);
  let F;
  return (
    O
      ? (F = O)
      : !v.length && !m && !h
      ? (F = u)
      : ((F = {}),
        v.length && v.forEach((ee) => Cu(F, ee, A, !0)),
        Cu(F, u, A)),
    w.set(u, F),
    F
  );
}
function Cu(l, u, m, h = !1) {
  const { mixins: v, extends: w } = u;
  w && Cu(l, w, m, !0), v && v.forEach((A) => Cu(l, A, m, !0));
  for (const A in u)
    if (!(h && A === "expose")) {
      const O = cq[A] || (m && m[A]);
      l[A] = O ? O(l[A], u[A]) : u[A];
    }
  return l;
}
const cq = {
  data: KS,
  props: Ar,
  emits: Ar,
  methods: Ar,
  computed: Ar,
  beforeCreate: An,
  created: An,
  beforeMount: An,
  mounted: An,
  beforeUpdate: An,
  updated: An,
  beforeDestroy: An,
  beforeUnmount: An,
  destroyed: An,
  unmounted: An,
  activated: An,
  deactivated: An,
  errorCaptured: An,
  serverPrefetch: An,
  components: Ar,
  directives: Ar,
  watch: fq,
  provide: KS,
  inject: uq,
};
function KS(l, u) {
  return u
    ? l
      ? function () {
          return Tn(
            Qe(l) ? l.call(this, this) : l,
            Qe(u) ? u.call(this, this) : u
          );
        }
      : u
    : l;
}
function uq(l, u) {
  return Ar(Mp(l), Mp(u));
}
function Mp(l) {
  if (Xe(l)) {
    const u = {};
    for (let m = 0; m < l.length; m++) u[l[m]] = l[m];
    return u;
  }
  return l;
}
function An(l, u) {
  return l ? [...new Set([].concat(l, u))] : u;
}
function Ar(l, u) {
  return l ? Tn(Tn(Object.create(null), l), u) : u;
}
function fq(l, u) {
  if (!l) return u;
  if (!u) return l;
  const m = Tn(Object.create(null), l);
  for (const h in u) m[h] = An(l[h], u[h]);
  return m;
}
function dq(l, u, m, h = !1) {
  const v = {},
    w = {};
  gu(w, Tu, 1), (l.propsDefaults = Object.create(null)), K_(l, u, v, w);
  for (const A in l.propsOptions[0]) A in v || (v[A] = void 0);
  m ? (l.props = h ? v : k5(v)) : l.type.props ? (l.props = v) : (l.props = w),
    (l.attrs = w);
}
function mq(l, u, m, h) {
  const {
      props: v,
      attrs: w,
      vnode: { patchFlag: A },
    } = l,
    O = ft(v),
    [F] = l.propsOptions;
  let ee = !1;
  if ((h || A > 0) && !(A & 16)) {
    if (A & 8) {
      const ie = l.vnode.dynamicProps;
      for (let we = 0; we < ie.length; we++) {
        let Re = ie[we];
        const Ge = u[Re];
        if (F)
          if (ot(w, Re)) Ge !== w[Re] && ((w[Re] = Ge), (ee = !0));
          else {
            const Et = Ws(Re);
            v[Et] = Up(F, O, Et, Ge, l, !1);
          }
        else Ge !== w[Re] && ((w[Re] = Ge), (ee = !0));
      }
    }
  } else {
    K_(l, u, v, w) && (ee = !0);
    let ie;
    for (const we in O)
      (!u || (!ot(u, we) && ((ie = Pi(we)) === we || !ot(u, ie)))) &&
        (F
          ? m &&
            (m[we] !== void 0 || m[ie] !== void 0) &&
            (v[we] = Up(F, O, we, void 0, l, !0))
          : delete v[we]);
    if (w !== O)
      for (const we in w)
        (!u || (!ot(u, we) && !0)) && (delete w[we], (ee = !0));
  }
  ee && po(l, "set", "$attrs");
}
function K_(l, u, m, h) {
  const [v, w] = l.propsOptions;
  let A = !1,
    O;
  if (u)
    for (let F in u) {
      if (mu(F)) continue;
      const ee = u[F];
      let ie;
      v && ot(v, (ie = Ws(F)))
        ? !w || !w.includes(ie)
          ? (m[ie] = ee)
          : ((O || (O = {}))[ie] = ee)
        : lg(l.emitsOptions, F) ||
          ((!(F in h) || ee !== h[F]) && ((h[F] = ee), (A = !0)));
    }
  if (w) {
    const F = ft(m),
      ee = O || St;
    for (let ie = 0; ie < w.length; ie++) {
      const we = w[ie];
      m[we] = Up(v, F, we, ee[we], l, !ot(ee, we));
    }
  }
  return A;
}
function Up(l, u, m, h, v, w) {
  const A = l[m];
  if (A != null) {
    const O = ot(A, "default");
    if (O && h === void 0) {
      const F = A.default;
      if (A.type !== Function && Qe(F)) {
        const { propsDefaults: ee } = v;
        m in ee ? (h = ee[m]) : (Ri(v), (h = ee[m] = F.call(null, u)), Or());
      } else h = F;
    }
    A[0] &&
      (w && !O ? (h = !1) : A[1] && (h === "" || h === Pi(m)) && (h = !0));
  }
  return h;
}
function G_(l, u, m = !1) {
  const h = u.propsCache,
    v = h.get(l);
  if (v) return v;
  const w = l.props,
    A = {},
    O = [];
  let F = !1;
  if (!Qe(l)) {
    const ie = (we) => {
      F = !0;
      const [Re, Ge] = G_(we, u, !0);
      Tn(A, Re), Ge && O.push(...Ge);
    };
    !m && u.mixins.length && u.mixins.forEach(ie),
      l.extends && ie(l.extends),
      l.mixins && l.mixins.forEach(ie);
  }
  if (!w && !F) return h.set(l, Ni), Ni;
  if (Xe(w))
    for (let ie = 0; ie < w.length; ie++) {
      const we = Ws(w[ie]);
      GS(we) && (A[we] = St);
    }
  else if (w)
    for (const ie in w) {
      const we = Ws(ie);
      if (GS(we)) {
        const Re = w[ie],
          Ge = (A[we] = Xe(Re) || Qe(Re) ? { type: Re } : Re);
        if (Ge) {
          const Et = QS(Boolean, Ge.type),
            Rt = QS(String, Ge.type);
          (Ge[0] = Et > -1),
            (Ge[1] = Rt < 0 || Et < Rt),
            (Et > -1 || ot(Ge, "default")) && O.push(we);
        }
      }
    }
  const ee = [A, O];
  return h.set(l, ee), ee;
}
function GS(l) {
  return l[0] !== "$";
}
function YS(l) {
  const u = l && l.toString().match(/^\s*function (\w+)/);
  return u ? u[1] : l === null ? "null" : "";
}
function XS(l, u) {
  return YS(l) === YS(u);
}
function QS(l, u) {
  return Xe(u) ? u.findIndex((m) => XS(m, l)) : Qe(u) && XS(u, l) ? 0 : -1;
}
const Y_ = (l) => l[0] === "_" || l === "$stable",
  cg = (l) => (Xe(l) ? l.map(zs) : [zs(l)]),
  pq = (l, u, m) => {
    const h = U5((...v) => cg(u(...v)), m);
    return (h._c = !1), h;
  },
  X_ = (l, u, m) => {
    const h = l._ctx;
    for (const v in l) {
      if (Y_(v)) continue;
      const w = l[v];
      if (Qe(w)) u[v] = pq(v, w, h);
      else if (w != null) {
        const A = cg(w);
        u[v] = () => A;
      }
    }
  },
  Q_ = (l, u) => {
    const m = cg(u);
    l.slots.default = () => m;
  },
  gq = (l, u) => {
    if (l.vnode.shapeFlag & 32) {
      const m = u._;
      m ? ((l.slots = ft(u)), gu(u, "_", m)) : X_(u, (l.slots = {}));
    } else (l.slots = {}), u && Q_(l, u);
    gu(l.slots, Tu, 1);
  },
  hq = (l, u, m) => {
    const { vnode: h, slots: v } = l;
    let w = !0,
      A = St;
    if (h.shapeFlag & 32) {
      const O = u._;
      O
        ? m && O === 1
          ? (w = !1)
          : (Tn(v, u), !m && O === 1 && delete v._)
        : ((w = !u.$stable), X_(u, v)),
        (A = u);
    } else u && (Q_(l, u), (A = { default: 1 }));
    if (w) for (const O in v) !Y_(O) && !(O in A) && delete v[O];
  };
function kr(l, u, m, h) {
  const v = l.dirs,
    w = u && u.dirs;
  for (let A = 0; A < v.length; A++) {
    const O = v[A];
    w && (O.oldValue = w[A].value);
    let F = O.dir[h];
    F && (Oi(), ps(F, m, 8, [l.el, O, l, u]), Di());
  }
}
function Z_() {
  return {
    app: null,
    config: {
      isNativeTag: j4,
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
let bq = 0;
function Cq(l, u) {
  return function (h, v = null) {
    v != null && !cn(v) && (v = null);
    const w = Z_(),
      A = new Set();
    let O = !1;
    const F = (w.app = {
      _uid: bq++,
      _component: h,
      _props: v,
      _container: null,
      _context: w,
      _instance: null,
      version: Wq,
      get config() {
        return w.config;
      },
      set config(ee) {},
      use(ee, ...ie) {
        return (
          A.has(ee) ||
            (ee && Qe(ee.install)
              ? (A.add(ee), ee.install(F, ...ie))
              : Qe(ee) && (A.add(ee), ee(F, ...ie))),
          F
        );
      },
      mixin(ee) {
        return w.mixins.includes(ee) || w.mixins.push(ee), F;
      },
      component(ee, ie) {
        return ie ? ((w.components[ee] = ie), F) : w.components[ee];
      },
      directive(ee, ie) {
        return ie ? ((w.directives[ee] = ie), F) : w.directives[ee];
      },
      mount(ee, ie, we) {
        if (!O) {
          const Re = mo(h, v);
          return (
            (Re.appContext = w),
            ie && u ? u(Re, ee) : l(Re, ee, we),
            (O = !0),
            (F._container = ee),
            (ee.__vue_app__ = F),
            dg(Re.component) || Re.component.proxy
          );
        }
      },
      unmount() {
        O && (l(null, F._container), delete F._container.__vue_app__);
      },
      provide(ee, ie) {
        return (w.provides[ee] = ie), F;
      },
    });
    return F;
  };
}
function zp(l, u, m, h, v = !1) {
  if (Xe(l)) {
    l.forEach((Re, Ge) => zp(Re, u && (Xe(u) ? u[Ge] : u), m, h, v));
    return;
  }
  if (Lp(h) && !v) return;
  const w = h.shapeFlag & 4 ? dg(h.component) || h.component.proxy : h.el,
    A = v ? null : w,
    { i: O, r: F } = l,
    ee = u && u.r,
    ie = O.refs === St ? (O.refs = {}) : O.refs,
    we = O.setupState;
  if (
    (ee != null &&
      ee !== F &&
      (ln(ee)
        ? ((ie[ee] = null), ot(we, ee) && (we[ee] = null))
        : an(ee) && (ee.value = null)),
    Qe(F))
  )
    Vo(F, O, 12, [A, ie]);
  else {
    const Re = ln(F),
      Ge = an(F);
    if (Re || Ge) {
      const Et = () => {
        if (l.f) {
          const Rt = Re ? ie[F] : F.value;
          v
            ? Xe(Rt) && Yp(Rt, w)
            : Xe(Rt)
            ? Rt.includes(w) || Rt.push(w)
            : Re
            ? (ie[F] = [w])
            : ((F.value = [w]), l.k && (ie[l.k] = F.value));
        } else
          Re
            ? ((ie[F] = A), ot(we, F) && (we[F] = A))
            : an(F) && ((F.value = A), l.k && (ie[l.k] = A));
      };
      A ? ((Et.id = -1), Dn(Et, m)) : Et();
    }
  }
}
const Dn = q5;
function yq(l) {
  return vq(l);
}
function vq(l, u) {
  const m = Z4();
  m.__VUE__ = !0;
  const {
      insert: h,
      remove: v,
      patchProp: w,
      createElement: A,
      createText: O,
      createComment: F,
      setText: ee,
      setElementText: ie,
      parentNode: we,
      nextSibling: Re,
      setScopeId: Ge = ms,
      cloneNode: Et,
      insertStaticContent: Rt,
    } = l,
    Je = (
      k,
      R,
      M,
      U = null,
      T = null,
      ce = null,
      Ce = !1,
      H = null,
      fe = !!R.dynamicChildren
    ) => {
      if (k === R) return;
      k && !Ha(k, R) && ((U = g(k)), bs(k, T, ce, !0), (k = null)),
        R.patchFlag === -2 && ((fe = !1), (R.dynamicChildren = null));
      const { type: X, ref: Pe, shapeFlag: de } = R;
      switch (X) {
        case ug:
          dt(k, R, M, U);
          break;
        case Dr:
          Bn(k, R, M, U);
          break;
        case Tp:
          k == null && be(R, M, U, Ce);
          break;
        case uo:
          yn(k, R, M, U, T, ce, Ce, H, fe);
          break;
        default:
          de & 1
            ? Nt(k, R, M, U, T, ce, Ce, H, fe)
            : de & 6
            ? Ks(k, R, M, U, T, ce, Ce, H, fe)
            : (de & 64 || de & 128) &&
              X.process(k, R, M, U, T, ce, Ce, H, fe, ho);
      }
      Pe != null && T && zp(Pe, k && k.ref, ce, R || k, !R);
    },
    dt = (k, R, M, U) => {
      if (k == null) h((R.el = O(R.children)), M, U);
      else {
        const T = (R.el = k.el);
        R.children !== k.children && ee(T, R.children);
      }
    },
    Bn = (k, R, M, U) => {
      k == null ? h((R.el = F(R.children || "")), M, U) : (R.el = k.el);
    },
    be = (k, R, M, U) => {
      [k.el, k.anchor] = Rt(k.children, R, M, U, k.el, k.anchor);
    },
    ut = ({ el: k, anchor: R }, M, U) => {
      let T;
      for (; k && k !== R; ) (T = Re(k)), h(k, M, U), (k = T);
      h(R, M, U);
    },
    js = ({ el: k, anchor: R }) => {
      let M;
      for (; k && k !== R; ) (M = Re(k)), v(k), (k = M);
      v(R);
    },
    Nt = (k, R, M, U, T, ce, Ce, H, fe) => {
      (Ce = Ce || R.type === "svg"),
        k == null ? qs(R, M, U, T, ce, Ce, H, fe) : Mt(k, R, T, ce, Ce, H, fe);
    },
    qs = (k, R, M, U, T, ce, Ce, H) => {
      let fe, X;
      const {
        type: Pe,
        props: de,
        shapeFlag: Ne,
        transition: Ue,
        patchFlag: qe,
        dirs: it,
      } = k;
      if (k.el && Et !== void 0 && qe === -1) fe = k.el = Et(k.el);
      else {
        if (
          ((fe = k.el = A(k.type, ce, de && de.is, de)),
          Ne & 8
            ? ie(fe, k.children)
            : Ne & 16 &&
              Pt(
                k.children,
                fe,
                null,
                U,
                T,
                ce && Pe !== "foreignObject",
                Ce,
                H
              ),
          it && kr(k, null, U, "created"),
          de)
        ) {
          for (const gt in de)
            gt !== "value" &&
              !mu(gt) &&
              w(fe, gt, null, de[gt], ce, k.children, U, T, rt);
          "value" in de && w(fe, "value", null, de.value),
            (X = de.onVnodeBeforeMount) && Us(X, U, k);
        }
        gs(fe, k, k.scopeId, Ce, U);
      }
      it && kr(k, null, U, "beforeMount");
      const nt = (!T || (T && !T.pendingBranch)) && Ue && !Ue.persisted;
      nt && Ue.beforeEnter(fe),
        h(fe, R, M),
        ((X = de && de.onVnodeMounted) || nt || it) &&
          Dn(() => {
            X && Us(X, U, k),
              nt && Ue.enter(fe),
              it && kr(k, null, U, "mounted");
          }, T);
    },
    gs = (k, R, M, U, T) => {
      if ((M && Ge(k, M), U))
        for (let ce = 0; ce < U.length; ce++) Ge(k, U[ce]);
      if (T) {
        let ce = T.subTree;
        if (R === ce) {
          const Ce = T.vnode;
          gs(k, Ce, Ce.scopeId, Ce.slotScopeIds, T.parent);
        }
      }
    },
    Pt = (k, R, M, U, T, ce, Ce, H, fe = 0) => {
      for (let X = fe; X < k.length; X++) {
        const Pe = (k[X] = H ? zo(k[X]) : zs(k[X]));
        Je(null, Pe, R, M, U, T, ce, Ce, H);
      }
    },
    Mt = (k, R, M, U, T, ce, Ce) => {
      const H = (R.el = k.el);
      let { patchFlag: fe, dynamicChildren: X, dirs: Pe } = R;
      fe |= k.patchFlag & 16;
      const de = k.props || St,
        Ne = R.props || St;
      let Ue;
      M && Nr(M, !1),
        (Ue = Ne.onVnodeBeforeUpdate) && Us(Ue, M, R, k),
        Pe && kr(R, k, M, "beforeUpdate"),
        M && Nr(M, !0);
      const qe = T && R.type !== "foreignObject";
      if (
        (X
          ? ke(k.dynamicChildren, X, H, M, U, qe, ce)
          : Ce || xt(k, R, H, null, M, U, qe, ce, !1),
        fe > 0)
      ) {
        if (fe & 16) Ye(H, R, de, Ne, M, U, T);
        else if (
          (fe & 2 && de.class !== Ne.class && w(H, "class", null, Ne.class, T),
          fe & 4 && w(H, "style", de.style, Ne.style, T),
          fe & 8)
        ) {
          const it = R.dynamicProps;
          for (let nt = 0; nt < it.length; nt++) {
            const gt = it[nt],
              vn = de[gt],
              jn = Ne[gt];
            (jn !== vn || gt === "value") &&
              w(H, gt, vn, jn, T, k.children, M, U, rt);
          }
        }
        fe & 1 && k.children !== R.children && ie(H, R.children);
      } else !Ce && X == null && Ye(H, R, de, Ne, M, U, T);
      ((Ue = Ne.onVnodeUpdated) || Pe) &&
        Dn(() => {
          Ue && Us(Ue, M, R, k), Pe && kr(R, k, M, "updated");
        }, U);
    },
    ke = (k, R, M, U, T, ce, Ce) => {
      for (let H = 0; H < R.length; H++) {
        const fe = k[H],
          X = R[H],
          Pe =
            fe.el && (fe.type === uo || !Ha(fe, X) || fe.shapeFlag & 70)
              ? we(fe.el)
              : M;
        Je(fe, X, Pe, null, U, T, ce, Ce, !0);
      }
    },
    Ye = (k, R, M, U, T, ce, Ce) => {
      if (M !== U) {
        for (const H in U) {
          if (mu(H)) continue;
          const fe = U[H],
            X = M[H];
          fe !== X &&
            H !== "value" &&
            w(k, H, X, fe, Ce, R.children, T, ce, rt);
        }
        if (M !== St)
          for (const H in M)
            !mu(H) &&
              !(H in U) &&
              w(k, H, M[H], null, Ce, R.children, T, ce, rt);
        "value" in U && w(k, "value", M.value, U.value);
      }
    },
    yn = (k, R, M, U, T, ce, Ce, H, fe) => {
      const X = (R.el = k ? k.el : O("")),
        Pe = (R.anchor = k ? k.anchor : O(""));
      let { patchFlag: de, dynamicChildren: Ne, slotScopeIds: Ue } = R;
      Ue && (H = H ? H.concat(Ue) : Ue),
        k == null
          ? (h(X, M, U), h(Pe, M, U), Pt(R.children, M, Pe, T, ce, Ce, H, fe))
          : de > 0 && de & 64 && Ne && k.dynamicChildren
          ? (ke(k.dynamicChildren, Ne, M, T, ce, Ce, H),
            (R.key != null || (T && R === T.subTree)) && J_(k, R, !0))
          : xt(k, R, M, Pe, T, ce, Ce, H, fe);
    },
    Ks = (k, R, M, U, T, ce, Ce, H, fe) => {
      (R.slotScopeIds = H),
        k == null
          ? R.shapeFlag & 512
            ? T.ctx.activate(R, M, U, Ce, fe)
            : Ie(R, M, U, T, ce, Ce, fe)
          : Ot(k, R, fe);
    },
    Ie = (k, R, M, U, T, ce, Ce) => {
      const H = (k.component = $q(k, U, T));
      if ((H_(k) && (H.ctx.renderer = ho), Lq(H), H.asyncDep)) {
        if ((T && T.registerDep(H, _t), !k.el)) {
          const fe = (H.subTree = mo(Dr));
          Bn(null, fe, R, M);
        }
        return;
      }
      _t(H, k, R, M, T, ce, Ce);
    },
    Ot = (k, R, M) => {
      const U = (R.component = k.component);
      if (V5(k, R, M))
        if (U.asyncDep && !U.asyncResolved) {
          K(U, R, M);
          return;
        } else (U.next = R), $5(U.update), U.update();
      else (R.component = k.component), (R.el = k.el), (U.vnode = R);
    },
    _t = (k, R, M, U, T, ce, Ce) => {
      const H = () => {
          if (k.isMounted) {
            let { next: Pe, bu: de, u: Ne, parent: Ue, vnode: qe } = k,
              it = Pe,
              nt;
            Nr(k, !1),
              Pe ? ((Pe.el = qe.el), K(k, Pe, Ce)) : (Pe = qe),
              de && _p(de),
              (nt = Pe.props && Pe.props.onVnodeBeforeUpdate) &&
                Us(nt, Ue, Pe, qe),
              Nr(k, !0);
            const gt = kp(k),
              vn = k.subTree;
            (k.subTree = gt),
              Je(vn, gt, we(vn.el), g(vn), k, T, ce),
              (Pe.el = gt.el),
              it === null && W5(k, gt.el),
              Ne && Dn(Ne, T),
              (nt = Pe.props && Pe.props.onVnodeUpdated) &&
                Dn(() => Us(nt, Ue, Pe, qe), T);
          } else {
            let Pe;
            const { el: de, props: Ne } = R,
              { bm: Ue, m: qe, parent: it } = k,
              nt = Lp(R);
            if (
              (Nr(k, !1),
              Ue && _p(Ue),
              !nt && (Pe = Ne && Ne.onVnodeBeforeMount) && Us(Pe, it, R),
              Nr(k, !0),
              de && $r)
            ) {
              const gt = () => {
                (k.subTree = kp(k)), $r(de, k.subTree, k, T, null);
              };
              nt
                ? R.type.__asyncLoader().then(() => !k.isUnmounted && gt())
                : gt();
            } else {
              const gt = (k.subTree = kp(k));
              Je(null, gt, M, U, k, T, ce), (R.el = gt.el);
            }
            if ((qe && Dn(qe, T), !nt && (Pe = Ne && Ne.onVnodeMounted))) {
              const gt = R;
              Dn(() => Us(Pe, it, gt), T);
            }
            R.shapeFlag & 256 && k.a && Dn(k.a, T),
              (k.isMounted = !0),
              (R = M = U = null);
          }
        },
        fe = (k.effect = new Jp(H, () => D_(k.update), k.scope)),
        X = (k.update = fe.run.bind(fe));
      (X.id = k.uid), Nr(k, !0), X();
    },
    K = (k, R, M) => {
      R.component = k;
      const U = k.vnode.props;
      (k.vnode = R),
        (k.next = null),
        mq(k, R.props, U, M),
        hq(k, R.children, M),
        Oi(),
        ag(void 0, k.update),
        Di();
    },
    xt = (k, R, M, U, T, ce, Ce, H, fe = !1) => {
      const X = k && k.children,
        Pe = k ? k.shapeFlag : 0,
        de = R.children,
        { patchFlag: Ne, shapeFlag: Ue } = R;
      if (Ne > 0) {
        if (Ne & 128) {
          oe(X, de, M, U, T, ce, Ce, H, fe);
          return;
        } else if (Ne & 256) {
          Bi(X, de, M, U, T, ce, Ce, H, fe);
          return;
        }
      }
      Ue & 8
        ? (Pe & 16 && rt(X, T, ce), de !== X && ie(M, de))
        : Pe & 16
        ? Ue & 16
          ? oe(X, de, M, U, T, ce, Ce, H, fe)
          : rt(X, T, ce, !0)
        : (Pe & 8 && ie(M, ""), Ue & 16 && Pt(de, M, U, T, ce, Ce, H, fe));
    },
    Bi = (k, R, M, U, T, ce, Ce, H, fe) => {
      (k = k || Ni), (R = R || Ni);
      const X = k.length,
        Pe = R.length,
        de = Math.min(X, Pe);
      let Ne;
      for (Ne = 0; Ne < de; Ne++) {
        const Ue = (R[Ne] = fe ? zo(R[Ne]) : zs(R[Ne]));
        Je(k[Ne], Ue, M, null, T, ce, Ce, H, fe);
      }
      X > Pe ? rt(k, T, ce, !0, !1, de) : Pt(R, M, U, T, ce, Ce, H, fe, de);
    },
    oe = (k, R, M, U, T, ce, Ce, H, fe) => {
      let X = 0;
      const Pe = R.length;
      let de = k.length - 1,
        Ne = Pe - 1;
      for (; X <= de && X <= Ne; ) {
        const Ue = k[X],
          qe = (R[X] = fe ? zo(R[X]) : zs(R[X]));
        if (Ha(Ue, qe)) Je(Ue, qe, M, null, T, ce, Ce, H, fe);
        else break;
        X++;
      }
      for (; X <= de && X <= Ne; ) {
        const Ue = k[de],
          qe = (R[Ne] = fe ? zo(R[Ne]) : zs(R[Ne]));
        if (Ha(Ue, qe)) Je(Ue, qe, M, null, T, ce, Ce, H, fe);
        else break;
        de--, Ne--;
      }
      if (X > de) {
        if (X <= Ne) {
          const Ue = Ne + 1,
            qe = Ue < Pe ? R[Ue].el : U;
          for (; X <= Ne; )
            Je(
              null,
              (R[X] = fe ? zo(R[X]) : zs(R[X])),
              M,
              qe,
              T,
              ce,
              Ce,
              H,
              fe
            ),
              X++;
        }
      } else if (X > Ne) for (; X <= de; ) bs(k[X], T, ce, !0), X++;
      else {
        const Ue = X,
          qe = X,
          it = new Map();
        for (X = qe; X <= Ne; X++) {
          const pt = (R[X] = fe ? zo(R[X]) : zs(R[X]));
          pt.key != null && it.set(pt.key, X);
        }
        let nt,
          gt = 0;
        const vn = Ne - qe + 1;
        let jn = !1,
          Lr = 0;
        const Ut = new Array(vn);
        for (X = 0; X < vn; X++) Ut[X] = 0;
        for (X = Ue; X <= de; X++) {
          const pt = k[X];
          if (gt >= vn) {
            bs(pt, T, ce, !0);
            continue;
          }
          let en;
          if (pt.key != null) en = it.get(pt.key);
          else
            for (nt = qe; nt <= Ne; nt++)
              if (Ut[nt - qe] === 0 && Ha(pt, R[nt])) {
                en = nt;
                break;
              }
          en === void 0
            ? bs(pt, T, ce, !0)
            : ((Ut[en - qe] = X + 1),
              en >= Lr ? (Lr = en) : (jn = !0),
              Je(pt, R[en], M, null, T, ce, Ce, H, fe),
              gt++);
        }
        const Cs = jn ? Eq(Ut) : Ni;
        for (nt = Cs.length - 1, X = vn - 1; X >= 0; X--) {
          const pt = qe + X,
            en = R[pt],
            el = pt + 1 < Pe ? R[pt + 1].el : U;
          Ut[X] === 0
            ? Je(null, en, M, el, T, ce, Ce, H, fe)
            : jn && (nt < 0 || X !== Cs[nt] ? hs(en, M, el, 2) : nt--);
        }
      }
    },
    hs = (k, R, M, U, T = null) => {
      const { el: ce, type: Ce, transition: H, children: fe, shapeFlag: X } = k;
      if (X & 6) {
        hs(k.component.subTree, R, M, U);
        return;
      }
      if (X & 128) {
        k.suspense.move(R, M, U);
        return;
      }
      if (X & 64) {
        Ce.move(k, R, M, ho);
        return;
      }
      if (Ce === uo) {
        h(ce, R, M);
        for (let de = 0; de < fe.length; de++) hs(fe[de], R, M, U);
        h(k.anchor, R, M);
        return;
      }
      if (Ce === Tp) {
        ut(k, R, M);
        return;
      }
      if (U !== 2 && X & 1 && H)
        if (U === 0) H.beforeEnter(ce), h(ce, R, M), Dn(() => H.enter(ce), T);
        else {
          const { leave: de, delayLeave: Ne, afterLeave: Ue } = H,
            qe = () => h(ce, R, M),
            it = () => {
              de(ce, () => {
                qe(), Ue && Ue();
              });
            };
          Ne ? Ne(ce, qe, it) : it();
        }
      else h(ce, R, M);
    },
    bs = (k, R, M, U = !1, T = !1) => {
      const {
        type: ce,
        props: Ce,
        ref: H,
        children: fe,
        dynamicChildren: X,
        shapeFlag: Pe,
        patchFlag: de,
        dirs: Ne,
      } = k;
      if ((H != null && zp(H, null, M, k, !0), Pe & 256)) {
        R.ctx.deactivate(k);
        return;
      }
      const Ue = Pe & 1 && Ne,
        qe = !Lp(k);
      let it;
      if ((qe && (it = Ce && Ce.onVnodeBeforeUnmount) && Us(it, R, k), Pe & 6))
        mt(k.component, M, U);
      else {
        if (Pe & 128) {
          k.suspense.unmount(M, U);
          return;
        }
        Ue && kr(k, null, R, "beforeUnmount"),
          Pe & 64
            ? k.type.remove(k, R, M, T, ho, U)
            : X && (ce !== uo || (de > 0 && de & 64))
            ? rt(X, R, M, !1, !0)
            : ((ce === uo && de & 384) || (!T && Pe & 16)) && rt(fe, R, M),
          U && Br(k);
      }
      ((qe && (it = Ce && Ce.onVnodeUnmounted)) || Ue) &&
        Dn(() => {
          it && Us(it, R, k), Ue && kr(k, null, R, "unmounted");
        }, M);
    },
    Br = (k) => {
      const { type: R, el: M, anchor: U, transition: T } = k;
      if (R === uo) {
        jo(M, U);
        return;
      }
      if (R === Tp) {
        js(k);
        return;
      }
      const ce = () => {
        v(M), T && !T.persisted && T.afterLeave && T.afterLeave();
      };
      if (k.shapeFlag & 1 && T && !T.persisted) {
        const { leave: Ce, delayLeave: H } = T,
          fe = () => Ce(M, ce);
        H ? H(k.el, ce, fe) : fe();
      } else ce();
    },
    jo = (k, R) => {
      let M;
      for (; k !== R; ) (M = Re(k)), v(k), (k = M);
      v(R);
    },
    mt = (k, R, M) => {
      const { bum: U, scope: T, update: ce, subTree: Ce, um: H } = k;
      U && _p(U),
        T.stop(),
        ce && ((ce.active = !1), bs(Ce, k, R, M)),
        H && Dn(H, R),
        Dn(() => {
          k.isUnmounted = !0;
        }, R),
        R &&
          R.pendingBranch &&
          !R.isUnmounted &&
          k.asyncDep &&
          !k.asyncResolved &&
          k.suspenseId === R.pendingId &&
          (R.deps--, R.deps === 0 && R.resolve());
    },
    rt = (k, R, M, U = !1, T = !1, ce = 0) => {
      for (let Ce = ce; Ce < k.length; Ce++) bs(k[Ce], R, M, U, T);
    },
    g = (k) =>
      k.shapeFlag & 6
        ? g(k.component.subTree)
        : k.shapeFlag & 128
        ? k.suspense.next()
        : Re(k.anchor || k.el),
    Ir = (k, R, M) => {
      k == null
        ? R._vnode && bs(R._vnode, null, null, !0)
        : Je(R._vnode || null, k, R, null, null, null, M),
        $_(),
        (R._vnode = k);
    },
    ho = {
      p: Je,
      um: bs,
      m: hs,
      r: Br,
      mt: Ie,
      mc: Pt,
      pc: xt,
      pbc: ke,
      n: g,
      o: l,
    };
  let Ii, $r;
  return (
    u && ([Ii, $r] = u(ho)), { render: Ir, hydrate: Ii, createApp: Cq(Ir, Ii) }
  );
}
function Nr({ effect: l, update: u }, m) {
  l.allowRecurse = u.allowRecurse = m;
}
function J_(l, u, m = !1) {
  const h = l.children,
    v = u.children;
  if (Xe(h) && Xe(v))
    for (let w = 0; w < h.length; w++) {
      const A = h[w];
      let O = v[w];
      O.shapeFlag & 1 &&
        !O.dynamicChildren &&
        ((O.patchFlag <= 0 || O.patchFlag === 32) &&
          ((O = v[w] = zo(v[w])), (O.el = A.el)),
        m || J_(A, O));
    }
}
function Eq(l) {
  const u = l.slice(),
    m = [0];
  let h, v, w, A, O;
  const F = l.length;
  for (h = 0; h < F; h++) {
    const ee = l[h];
    if (ee !== 0) {
      if (((v = m[m.length - 1]), l[v] < ee)) {
        (u[h] = v), m.push(h);
        continue;
      }
      for (w = 0, A = m.length - 1; w < A; )
        (O = (w + A) >> 1), l[m[O]] < ee ? (w = O + 1) : (A = O);
      ee < l[m[w]] && (w > 0 && (u[h] = m[w - 1]), (m[w] = h));
    }
  }
  for (w = m.length, A = m[w - 1]; w-- > 0; ) (m[w] = A), (A = u[A]);
  return m;
}
const xq = (l) => l.__isTeleport,
  ek = "components";
function X9(l, u) {
  return Sq(ek, l, !0, u) || l;
}
const wq = Symbol();
function Sq(l, u, m = !0, h = !1) {
  const v = Vs || rn;
  if (v) {
    const w = v.type;
    if (l === ek) {
      const O = zq(w);
      if (O && (O === u || O === Ws(u) || O === _u(Ws(u)))) return w;
    }
    const A = ZS(v[l] || w[l], u) || ZS(v.appContext[l], u);
    return !A && h ? w : A;
  }
}
function ZS(l, u) {
  return l && (l[u] || l[Ws(u)] || l[_u(Ws(u))]);
}
const uo = Symbol(void 0),
  ug = Symbol(void 0),
  Dr = Symbol(void 0),
  Tp = Symbol(void 0),
  Ka = [];
let Pr = null;
function _q(l = !1) {
  Ka.push((Pr = l ? null : []));
}
function kq() {
  Ka.pop(), (Pr = Ka[Ka.length - 1] || null);
}
let yu = 1;
function JS(l) {
  yu += l;
}
function tk(l) {
  return (
    (l.dynamicChildren = yu > 0 ? Pr || Ni : null),
    kq(),
    yu > 0 && Pr && Pr.push(l),
    l
  );
}
function Q9(l, u, m, h, v, w) {
  return tk(sk(l, u, m, h, v, w, !0));
}
function Nq(l, u, m, h, v) {
  return tk(mo(l, u, m, h, v, !0));
}
function Aq(l) {
  return l ? l.__v_isVNode === !0 : !1;
}
function Ha(l, u) {
  return l.type === u.type && l.key === u.key;
}
const Tu = "__vInternal",
  nk = ({ key: l }) => (l != null ? l : null),
  pu = ({ ref: l, ref_key: u, ref_for: m }) =>
    l != null
      ? ln(l) || an(l) || Qe(l)
        ? { i: Vs, r: l, k: u, f: !!m }
        : l
      : null;
function sk(
  l,
  u = null,
  m = null,
  h = 0,
  v = null,
  w = l === uo ? 0 : 1,
  A = !1,
  O = !1
) {
  const F = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: l,
    props: u,
    key: u && nk(u),
    ref: u && pu(u),
    scopeId: M_,
    slotScopeIds: null,
    children: m,
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
    shapeFlag: w,
    patchFlag: h,
    dynamicProps: v,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    O
      ? (fg(F, m), w & 128 && l.normalize(F))
      : m && (F.shapeFlag |= ln(m) ? 8 : 16),
    yu > 0 &&
      !A &&
      Pr &&
      (F.patchFlag > 0 || w & 6) &&
      F.patchFlag !== 32 &&
      Pr.push(F),
    F
  );
}
const mo = Tq;
function Tq(l, u = null, m = null, h = 0, v = null, w = !1) {
  if (((!l || l === wq) && (l = Dr), Aq(l))) {
    const O = Za(l, u, !0);
    return m && fg(O, m), O;
  }
  if ((Hq(l) && (l = l.__vccOpts), u)) {
    u = Rq(u);
    let { class: O, style: F } = u;
    O && !ln(O) && (u.class = Kp(O)),
      cn(F) && (N_(F) && !Xe(F) && (F = Tn({}, F)), (u.style = qp(F)));
  }
  const A = ln(l) ? 1 : j5(l) ? 128 : xq(l) ? 64 : cn(l) ? 4 : Qe(l) ? 2 : 0;
  return sk(l, u, m, h, v, A, w, !0);
}
function Rq(l) {
  return l ? (N_(l) || Tu in l ? Tn({}, l) : l) : null;
}
function Za(l, u, m = !1) {
  const { props: h, ref: v, patchFlag: w, children: A } = l,
    O = u ? Oq(h || {}, u) : h;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: l.type,
    props: O,
    key: O && nk(O),
    ref:
      u && u.ref
        ? m && v
          ? Xe(v)
            ? v.concat(pu(u))
            : [v, pu(u)]
          : pu(u)
        : v,
    scopeId: l.scopeId,
    slotScopeIds: l.slotScopeIds,
    children: A,
    target: l.target,
    targetAnchor: l.targetAnchor,
    staticCount: l.staticCount,
    shapeFlag: l.shapeFlag,
    patchFlag: u && l.type !== uo ? (w === -1 ? 16 : w | 16) : w,
    dynamicProps: l.dynamicProps,
    dynamicChildren: l.dynamicChildren,
    appContext: l.appContext,
    dirs: l.dirs,
    transition: l.transition,
    component: l.component,
    suspense: l.suspense,
    ssContent: l.ssContent && Za(l.ssContent),
    ssFallback: l.ssFallback && Za(l.ssFallback),
    el: l.el,
    anchor: l.anchor,
  };
}
function Pq(l = " ", u = 0) {
  return mo(ug, null, l, u);
}
function Z9(l = "", u = !1) {
  return u ? (_q(), Nq(Dr, null, l)) : mo(Dr, null, l);
}
function zs(l) {
  return l == null || typeof l == "boolean"
    ? mo(Dr)
    : Xe(l)
    ? mo(uo, null, l.slice())
    : typeof l == "object"
    ? zo(l)
    : mo(ug, null, String(l));
}
function zo(l) {
  return l.el === null || l.memo ? l : Za(l);
}
function fg(l, u) {
  let m = 0;
  const { shapeFlag: h } = l;
  if (u == null) u = null;
  else if (Xe(u)) m = 16;
  else if (typeof u == "object")
    if (h & 65) {
      const v = u.default;
      v && (v._c && (v._d = !1), fg(l, v()), v._c && (v._d = !0));
      return;
    } else {
      m = 32;
      const v = u._;
      !v && !(Tu in u)
        ? (u._ctx = Vs)
        : v === 3 &&
          Vs &&
          (Vs.slots._ === 1 ? (u._ = 1) : ((u._ = 2), (l.patchFlag |= 1024)));
    }
  else
    Qe(u)
      ? ((u = { default: u, _ctx: Vs }), (m = 32))
      : ((u = String(u)), h & 64 ? ((m = 16), (u = [Pq(u)])) : (m = 8));
  (l.children = u), (l.shapeFlag |= m);
}
function Oq(...l) {
  const u = {};
  for (let m = 0; m < l.length; m++) {
    const h = l[m];
    for (const v in h)
      if (v === "class")
        u.class !== h.class && (u.class = Kp([u.class, h.class]));
      else if (v === "style") u.style = qp([u.style, h.style]);
      else if (xu(v)) {
        const w = u[v],
          A = h[v];
        A &&
          w !== A &&
          !(Xe(w) && w.includes(A)) &&
          (u[v] = w ? [].concat(w, A) : A);
      } else v !== "" && (u[v] = h[v]);
  }
  return u;
}
function Us(l, u, m, h = null) {
  ps(l, u, 7, [m, h]);
}
const Hp = (l) => (l ? (ok(l) ? dg(l) || l.proxy : Hp(l.parent)) : null),
  vu = Tn(Object.create(null), {
    $: (l) => l,
    $el: (l) => l.vnode.el,
    $data: (l) => l.data,
    $props: (l) => l.props,
    $attrs: (l) => l.attrs,
    $slots: (l) => l.slots,
    $refs: (l) => l.refs,
    $parent: (l) => Hp(l.parent),
    $root: (l) => Hp(l.root),
    $emit: (l) => l.emit,
    $options: (l) => q_(l),
    $forceUpdate: (l) => () => D_(l.update),
    $nextTick: (l) => B5.bind(l.proxy),
    $watch: (l) => G5.bind(l),
  }),
  Dq = {
    get({ _: l }, u) {
      const {
        ctx: m,
        setupState: h,
        data: v,
        props: w,
        accessCache: A,
        type: O,
        appContext: F,
      } = l;
      let ee;
      if (u[0] !== "$") {
        const Ge = A[u];
        if (Ge !== void 0)
          switch (Ge) {
            case 1:
              return h[u];
            case 2:
              return v[u];
            case 4:
              return m[u];
            case 3:
              return w[u];
          }
        else {
          if (h !== St && ot(h, u)) return (A[u] = 1), h[u];
          if (v !== St && ot(v, u)) return (A[u] = 2), v[u];
          if ((ee = l.propsOptions[0]) && ot(ee, u)) return (A[u] = 3), w[u];
          if (m !== St && ot(m, u)) return (A[u] = 4), m[u];
          Fp && (A[u] = 0);
        }
      }
      const ie = vu[u];
      let we, Re;
      if (ie) return u === "$attrs" && Wn(l, "get", u), ie(l);
      if ((we = O.__cssModules) && (we = we[u])) return we;
      if (m !== St && ot(m, u)) return (A[u] = 4), m[u];
      if (((Re = F.config.globalProperties), ot(Re, u))) return Re[u];
    },
    set({ _: l }, u, m) {
      const { data: h, setupState: v, ctx: w } = l;
      return v !== St && ot(v, u)
        ? ((v[u] = m), !0)
        : h !== St && ot(h, u)
        ? ((h[u] = m), !0)
        : ot(l.props, u) || (u[0] === "$" && u.slice(1) in l)
        ? !1
        : ((w[u] = m), !0);
    },
    has(
      {
        _: {
          data: l,
          setupState: u,
          accessCache: m,
          ctx: h,
          appContext: v,
          propsOptions: w,
        },
      },
      A
    ) {
      let O;
      return (
        !!m[A] ||
        (l !== St && ot(l, A)) ||
        (u !== St && ot(u, A)) ||
        ((O = w[0]) && ot(O, A)) ||
        ot(h, A) ||
        ot(vu, A) ||
        ot(v.config.globalProperties, A)
      );
    },
    defineProperty(l, u, m) {
      return (
        m.get != null
          ? this.set(l, u, m.get(), null)
          : m.value != null && this.set(l, u, m.value, null),
        Reflect.defineProperty(l, u, m)
      );
    },
  },
  Bq = Z_();
let Iq = 0;
function $q(l, u, m) {
  const h = l.type,
    v = (u ? u.appContext : l.appContext) || Bq,
    w = {
      uid: Iq++,
      vnode: l,
      type: h,
      parent: u,
      appContext: v,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new J4(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: u ? u.provides : Object.create(v.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: G_(h, v),
      emitsOptions: F_(h, v),
      emit: null,
      emitted: null,
      propsDefaults: St,
      inheritAttrs: h.inheritAttrs,
      ctx: St,
      data: St,
      props: St,
      attrs: St,
      slots: St,
      refs: St,
      setupState: St,
      setupContext: null,
      suspense: m,
      suspenseId: m ? m.pendingId : 0,
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
    (w.ctx = { _: w }),
    (w.root = u ? u.root : w),
    (w.emit = M5.bind(null, w)),
    l.ce && l.ce(w),
    w
  );
}
let rn = null;
const Ri = (l) => {
    (rn = l), l.scope.on();
  },
  Or = () => {
    rn && rn.scope.off(), (rn = null);
  };
function ok(l) {
  return l.vnode.shapeFlag & 4;
}
let Ja = !1;
function Lq(l, u = !1) {
  Ja = u;
  const { props: m, children: h } = l.vnode,
    v = ok(l);
  dq(l, m, v, u), gq(l, h);
  const w = v ? Fq(l, u) : void 0;
  return (Ja = !1), w;
}
function Fq(l, u) {
  const m = l.type;
  (l.accessCache = Object.create(null)), (l.proxy = A_(new Proxy(l.ctx, Dq)));
  const { setup: h } = m;
  if (h) {
    const v = (l.setupContext = h.length > 1 ? Uq(l) : null);
    Ri(l), Oi();
    const w = Vo(h, l, 0, [l.props, v]);
    if ((Di(), Or(), d_(w))) {
      if ((w.then(Or, Or), u))
        return w
          .then((A) => {
            e_(l, A, u);
          })
          .catch((A) => {
            Nu(A, l, 0);
          });
      l.asyncDep = w;
    } else e_(l, w, u);
  } else rk(l, u);
}
function e_(l, u, m) {
  Qe(u)
    ? l.type.__ssrInlineRender
      ? (l.ssrRender = u)
      : (l.render = u)
    : cn(u) && (l.setupState = P_(u)),
    rk(l, m);
}
let t_;
function rk(l, u, m) {
  const h = l.type;
  if (!l.render) {
    if (!u && t_ && !h.render) {
      const v = h.template;
      if (v) {
        const { isCustomElement: w, compilerOptions: A } = l.appContext.config,
          { delimiters: O, compilerOptions: F } = h,
          ee = Tn(Tn({ isCustomElement: w, delimiters: O }, A), F);
        h.render = t_(v, ee);
      }
    }
    l.render = h.render || ms;
  }
  Ri(l), Oi(), aq(l), Di(), Or();
}
function Mq(l) {
  return new Proxy(l.attrs, {
    get(u, m) {
      return Wn(l, "get", "$attrs"), u[m];
    },
  });
}
function Uq(l) {
  const u = (h) => {
    l.exposed = h || {};
  };
  let m;
  return {
    get attrs() {
      return m || (m = Mq(l));
    },
    slots: l.slots,
    emit: l.emit,
    expose: u,
  };
}
function dg(l) {
  if (l.exposed)
    return (
      l.exposeProxy ||
      (l.exposeProxy = new Proxy(P_(A_(l.exposed)), {
        get(u, m) {
          if (m in u) return u[m];
          if (m in vu) return vu[m](l);
        },
      }))
    );
}
function zq(l) {
  return (Qe(l) && l.displayName) || l.name;
}
function Hq(l) {
  return Qe(l) && "__vccOpts" in l;
}
const Vq = (l, u) => O5(l, u, Ja),
  Wq = "3.2.31",
  jq = "http://www.w3.org/2000/svg",
  Tr = typeof document != "undefined" ? document : null,
  n_ = Tr && Tr.createElement("template"),
  qq = {
    insert: (l, u, m) => {
      u.insertBefore(l, m || null);
    },
    remove: (l) => {
      const u = l.parentNode;
      u && u.removeChild(l);
    },
    createElement: (l, u, m, h) => {
      const v = u
        ? Tr.createElementNS(jq, l)
        : Tr.createElement(l, m ? { is: m } : void 0);
      return (
        l === "select" &&
          h &&
          h.multiple != null &&
          v.setAttribute("multiple", h.multiple),
        v
      );
    },
    createText: (l) => Tr.createTextNode(l),
    createComment: (l) => Tr.createComment(l),
    setText: (l, u) => {
      l.nodeValue = u;
    },
    setElementText: (l, u) => {
      l.textContent = u;
    },
    parentNode: (l) => l.parentNode,
    nextSibling: (l) => l.nextSibling,
    querySelector: (l) => Tr.querySelector(l),
    setScopeId(l, u) {
      l.setAttribute(u, "");
    },
    cloneNode(l) {
      const u = l.cloneNode(!0);
      return "_value" in l && (u._value = l._value), u;
    },
    insertStaticContent(l, u, m, h, v, w) {
      const A = m ? m.previousSibling : u.lastChild;
      if (v && (v === w || v.nextSibling))
        for (
          ;
          u.insertBefore(v.cloneNode(!0), m),
            !(v === w || !(v = v.nextSibling));

        );
      else {
        n_.innerHTML = h ? `<svg>${l}</svg>` : l;
        const O = n_.content;
        if (h) {
          const F = O.firstChild;
          for (; F.firstChild; ) O.appendChild(F.firstChild);
          O.removeChild(F);
        }
        u.insertBefore(O, m);
      }
      return [
        A ? A.nextSibling : u.firstChild,
        m ? m.previousSibling : u.lastChild,
      ];
    },
  };
function Kq(l, u, m) {
  const h = l._vtc;
  h && (u = (u ? [u, ...h] : [...h]).join(" ")),
    u == null
      ? l.removeAttribute("class")
      : m
      ? l.setAttribute("class", u)
      : (l.className = u);
}
function Gq(l, u, m) {
  const h = l.style,
    v = ln(m);
  if (m && !v) {
    for (const w in m) Vp(h, w, m[w]);
    if (u && !ln(u)) for (const w in u) m[w] == null && Vp(h, w, "");
  } else {
    const w = h.display;
    v ? u !== m && (h.cssText = m) : u && l.removeAttribute("style"),
      "_vod" in l && (h.display = w);
  }
}
const s_ = /\s*!important$/;
function Vp(l, u, m) {
  if (Xe(m)) m.forEach((h) => Vp(l, u, h));
  else if (u.startsWith("--")) l.setProperty(u, m);
  else {
    const h = Yq(l, u);
    s_.test(m)
      ? l.setProperty(Pi(h), m.replace(s_, ""), "important")
      : (l[h] = m);
  }
}
const o_ = ["Webkit", "Moz", "ms"],
  Rp = {};
function Yq(l, u) {
  const m = Rp[u];
  if (m) return m;
  let h = Ws(u);
  if (h !== "filter" && h in l) return (Rp[u] = h);
  h = _u(h);
  for (let v = 0; v < o_.length; v++) {
    const w = o_[v] + h;
    if (w in l) return (Rp[u] = w);
  }
  return u;
}
const r_ = "http://www.w3.org/1999/xlink";
function Xq(l, u, m, h, v) {
  if (h && u.startsWith("xlink:"))
    m == null
      ? l.removeAttributeNS(r_, u.slice(6, u.length))
      : l.setAttributeNS(r_, u, m);
  else {
    const w = z4(u);
    m == null || (w && !c_(m))
      ? l.removeAttribute(u)
      : l.setAttribute(u, w ? "" : m);
  }
}
function Qq(l, u, m, h, v, w, A) {
  if (u === "innerHTML" || u === "textContent") {
    h && A(h, v, w), (l[u] = m == null ? "" : m);
    return;
  }
  if (u === "value" && l.tagName !== "PROGRESS" && !l.tagName.includes("-")) {
    l._value = m;
    const O = m == null ? "" : m;
    (l.value !== O || l.tagName === "OPTION") && (l.value = O),
      m == null && l.removeAttribute(u);
    return;
  }
  if (m === "" || m == null) {
    const O = typeof l[u];
    if (O === "boolean") {
      l[u] = c_(m);
      return;
    } else if (m == null && O === "string") {
      (l[u] = ""), l.removeAttribute(u);
      return;
    } else if (O === "number") {
      try {
        l[u] = 0;
      } catch {}
      l.removeAttribute(u);
      return;
    }
  }
  try {
    l[u] = m;
  } catch {}
}
let Eu = Date.now,
  ik = !1;
if (typeof window != "undefined") {
  Eu() > document.createEvent("Event").timeStamp &&
    (Eu = () => performance.now());
  const l = navigator.userAgent.match(/firefox\/(\d+)/i);
  ik = !!(l && Number(l[1]) <= 53);
}
let Wp = 0;
const Zq = Promise.resolve(),
  Jq = () => {
    Wp = 0;
  },
  e9 = () => Wp || (Zq.then(Jq), (Wp = Eu()));
function t9(l, u, m, h) {
  l.addEventListener(u, m, h);
}
function n9(l, u, m, h) {
  l.removeEventListener(u, m, h);
}
function s9(l, u, m, h, v = null) {
  const w = l._vei || (l._vei = {}),
    A = w[u];
  if (h && A) A.value = h;
  else {
    const [O, F] = o9(u);
    if (h) {
      const ee = (w[u] = r9(h, v));
      t9(l, O, ee, F);
    } else A && (n9(l, O, A, F), (w[u] = void 0));
  }
}
const i_ = /(?:Once|Passive|Capture)$/;
function o9(l) {
  let u;
  if (i_.test(l)) {
    u = {};
    let m;
    for (; (m = l.match(i_)); )
      (l = l.slice(0, l.length - m[0].length)), (u[m[0].toLowerCase()] = !0);
  }
  return [Pi(l.slice(2)), u];
}
function r9(l, u) {
  const m = (h) => {
    const v = h.timeStamp || Eu();
    (ik || v >= m.attached - 1) && ps(i9(h, m.value), u, 5, [h]);
  };
  return (m.value = l), (m.attached = e9()), m;
}
function i9(l, u) {
  if (Xe(u)) {
    const m = l.stopImmediatePropagation;
    return (
      (l.stopImmediatePropagation = () => {
        m.call(l), (l._stopped = !0);
      }),
      u.map((h) => (v) => !v._stopped && h && h(v))
    );
  } else return u;
}
const a_ = /^on[a-z]/,
  a9 = (l, u, m, h, v = !1, w, A, O, F) => {
    u === "class"
      ? Kq(l, h, v)
      : u === "style"
      ? Gq(l, m, h)
      : xu(u)
      ? Gp(u) || s9(l, u, m, h, A)
      : (
          u[0] === "."
            ? ((u = u.slice(1)), !0)
            : u[0] === "^"
            ? ((u = u.slice(1)), !1)
            : l9(l, u, h, v)
        )
      ? Qq(l, u, h, w, A, O, F)
      : (u === "true-value"
          ? (l._trueValue = h)
          : u === "false-value" && (l._falseValue = h),
        Xq(l, u, h, v));
  };
function l9(l, u, m, h) {
  return h
    ? !!(
        u === "innerHTML" ||
        u === "textContent" ||
        (u in l && a_.test(u) && Qe(m))
      )
    : u === "spellcheck" ||
      u === "draggable" ||
      u === "form" ||
      (u === "list" && l.tagName === "INPUT") ||
      (u === "type" && l.tagName === "TEXTAREA") ||
      (a_.test(u) && ln(m))
    ? !1
    : u in l;
}
const c9 = Tn({ patchProp: a9 }, qq);
let l_;
function u9() {
  return l_ || (l_ = yq(c9));
}
const J9 = (...l) => {
  const u = u9().createApp(...l),
    { mount: m } = u;
  return (
    (u.mount = (h) => {
      const v = f9(h);
      if (!v) return;
      const w = u._component;
      !Qe(w) && !w.render && !w.template && (w.template = v.innerHTML),
        (v.innerHTML = "");
      const A = m(v, !1, v instanceof SVGElement);
      return (
        v instanceof Element &&
          (v.removeAttribute("v-cloak"), v.setAttribute("data-v-app", "")),
        A
      );
    }),
    u
  );
};
function f9(l) {
  return ln(l) ? document.querySelector(l) : l;
}
var ak = { exports: {} };
(function (l) {
  (function () {
    var u = function (e) {
        if (e === null) return "null";
        if (e === void 0) return "undefined";
        var t = typeof e;
        return t === "object" &&
          (Array.prototype.isPrototypeOf(e) ||
            (e.constructor && e.constructor.name === "Array"))
          ? "array"
          : t === "object" &&
            (String.prototype.isPrototypeOf(e) ||
              (e.constructor && e.constructor.name === "String"))
          ? "string"
          : t;
      },
      m = function (e) {
        return (
          [
            "undefined",
            "boolean",
            "number",
            "string",
            "function",
            "xml",
            "null",
          ].indexOf(e) !== -1
        );
      },
      h = function (e, t) {
        var n = Array.prototype.slice.call(e);
        return n.sort(t);
      },
      v = function (e, t) {
        return w(function (n, s) {
          return e.eq(t(n), t(s));
        });
      },
      w = function (e) {
        return { eq: e };
      },
      A = w(function (e, t) {
        return e === t;
      }),
      O = A,
      F = function (e) {
        return w(function (t, n) {
          if (t.length !== n.length) return !1;
          for (var s = t.length, o = 0; o < s; o++)
            if (!e.eq(t[o], n[o])) return !1;
          return !0;
        });
      },
      ee = function (e, t) {
        return v(F(e), function (n) {
          return h(n, t);
        });
      },
      ie = function (e) {
        return w(function (t, n) {
          var s = Object.keys(t),
            o = Object.keys(n);
          if (!ee(O).eq(s, o)) return !1;
          for (var r = s.length, i = 0; i < r; i++) {
            var a = s[i];
            if (!e.eq(t[a], n[a])) return !1;
          }
          return !0;
        });
      },
      we = w(function (e, t) {
        if (e === t) return !0;
        var n = u(e),
          s = u(t);
        return n !== s
          ? !1
          : m(n)
          ? e === t
          : n === "array"
          ? F(we).eq(e, t)
          : n === "object"
          ? ie(we).eq(e, t)
          : !1;
      });
    const Re = Object.getPrototypeOf,
      Ge = (e, t, n) => {
        var s;
        return n(e, t.prototype)
          ? !0
          : ((s = e.constructor) === null || s === void 0 ? void 0 : s.name) ===
              t.name;
      },
      Et = (e) => {
        const t = typeof e;
        return e === null
          ? "null"
          : t === "object" && Array.isArray(e)
          ? "array"
          : t === "object" && Ge(e, String, (n, s) => s.isPrototypeOf(n))
          ? "string"
          : t;
      },
      Rt = (e) => (t) => Et(t) === e,
      Je = (e) => (t) => typeof t === e,
      dt = (e) => (t) => e === t,
      Bn = (e, t) => ut(e) && Ge(e, t, (n, s) => Re(n) === s),
      be = Rt("string"),
      ut = Rt("object"),
      js = (e) => Bn(e, Object),
      Nt = Rt("array"),
      qs = dt(null),
      gs = Je("boolean"),
      Pt = dt(void 0),
      Mt = (e) => e == null,
      ke = (e) => !Mt(e),
      Ye = Je("function"),
      yn = Je("number"),
      Ks = (e, t) => {
        if (Nt(e)) {
          for (let n = 0, s = e.length; n < s; ++n) if (!t(e[n])) return !1;
          return !0;
        }
        return !1;
      },
      Ie = () => {},
      Ot =
        (e, t) =>
        (...n) =>
          e(t.apply(null, n)),
      _t = (e, t) => (n) => e(t(n)),
      K = (e) => () => e,
      xt = (e) => e,
      Bi = (e, t) => e === t;
    function oe(e, ...t) {
      return (...n) => {
        const s = t.concat(n);
        return e.apply(null, s);
      };
    }
    const hs = (e) => (t) => !e(t),
      bs = (e) => () => {
        throw new Error(e);
      },
      Br = (e) => e(),
      jo = (e) => {
        e();
      },
      mt = K(!1),
      rt = K(!0);
    class g {
      constructor(t, n) {
        (this.tag = t), (this.value = n);
      }
      static some(t) {
        return new g(!0, t);
      }
      static none() {
        return g.singletonNone;
      }
      fold(t, n) {
        return this.tag ? n(this.value) : t();
      }
      isSome() {
        return this.tag;
      }
      isNone() {
        return !this.tag;
      }
      map(t) {
        return this.tag ? g.some(t(this.value)) : g.none();
      }
      bind(t) {
        return this.tag ? t(this.value) : g.none();
      }
      exists(t) {
        return this.tag && t(this.value);
      }
      forall(t) {
        return !this.tag || t(this.value);
      }
      filter(t) {
        return !this.tag || t(this.value) ? this : g.none();
      }
      getOr(t) {
        return this.tag ? this.value : t;
      }
      or(t) {
        return this.tag ? this : t;
      }
      getOrThunk(t) {
        return this.tag ? this.value : t();
      }
      orThunk(t) {
        return this.tag ? this : t();
      }
      getOrDie(t) {
        if (this.tag) return this.value;
        throw new Error(t != null ? t : "Called getOrDie on None");
      }
      static from(t) {
        return ke(t) ? g.some(t) : g.none();
      }
      getOrNull() {
        return this.tag ? this.value : null;
      }
      getOrUndefined() {
        return this.value;
      }
      each(t) {
        this.tag && t(this.value);
      }
      toArray() {
        return this.tag ? [this.value] : [];
      }
      toString() {
        return this.tag ? `some(${this.value})` : "none()";
      }
    }
    g.singletonNone = new g(!1);
    const Ir = Array.prototype.slice,
      ho = Array.prototype.indexOf,
      Ii = Array.prototype.push,
      $r = (e, t) => ho.call(e, t),
      k = (e, t) => {
        const n = $r(e, t);
        return n === -1 ? g.none() : g.some(n);
      },
      R = (e, t) => $r(e, t) > -1,
      M = (e, t) => {
        for (let n = 0, s = e.length; n < s; n++) {
          const o = e[n];
          if (t(o, n)) return !0;
        }
        return !1;
      },
      U = (e, t) => {
        const n = e.length,
          s = new Array(n);
        for (let o = 0; o < n; o++) {
          const r = e[o];
          s[o] = t(r, o);
        }
        return s;
      },
      T = (e, t) => {
        for (let n = 0, s = e.length; n < s; n++) {
          const o = e[n];
          t(o, n);
        }
      },
      ce = (e, t) => {
        for (let n = e.length - 1; n >= 0; n--) {
          const s = e[n];
          t(s, n);
        }
      },
      Ce = (e, t) => {
        const n = [],
          s = [];
        for (let o = 0, r = e.length; o < r; o++) {
          const i = e[o];
          (t(i, o) ? n : s).push(i);
        }
        return { pass: n, fail: s };
      },
      H = (e, t) => {
        const n = [];
        for (let s = 0, o = e.length; s < o; s++) {
          const r = e[s];
          t(r, s) && n.push(r);
        }
        return n;
      },
      fe = (e, t, n) => (
        ce(e, (s, o) => {
          n = t(n, s, o);
        }),
        n
      ),
      X = (e, t, n) => (
        T(e, (s, o) => {
          n = t(n, s, o);
        }),
        n
      ),
      Pe = (e, t, n) => {
        for (let s = 0, o = e.length; s < o; s++) {
          const r = e[s];
          if (t(r, s)) return g.some(r);
          if (n(r, s)) break;
        }
        return g.none();
      },
      de = (e, t) => Pe(e, t, mt),
      Ne = (e, t) => {
        for (let n = 0, s = e.length; n < s; n++) {
          const o = e[n];
          if (t(o, n)) return g.some(n);
        }
        return g.none();
      },
      Ue = (e) => {
        const t = [];
        for (let n = 0, s = e.length; n < s; ++n) {
          if (!Nt(e[n]))
            throw new Error(
              "Arr.flatten item " + n + " was not an array, input: " + e
            );
          Ii.apply(t, e[n]);
        }
        return t;
      },
      qe = (e, t) => Ue(U(e, t)),
      it = (e, t) => {
        for (let n = 0, s = e.length; n < s; ++n) {
          const o = e[n];
          if (t(o, n) !== !0) return !1;
        }
        return !0;
      },
      nt = (e) => {
        const t = Ir.call(e, 0);
        return t.reverse(), t;
      },
      gt = (e, t) => H(e, (n) => !R(t, n)),
      vn = (e, t) => {
        const n = {};
        for (let s = 0, o = e.length; s < o; s++) {
          const r = e[s];
          n[String(r)] = t(r, s);
        }
        return n;
      },
      jn = (e, t) => {
        const n = Ir.call(e, 0);
        return n.sort(t), n;
      },
      Lr = (e, t) => (t >= 0 && t < e.length ? g.some(e[t]) : g.none()),
      Ut = (e) => Lr(e, 0),
      Cs = (e) => Lr(e, e.length - 1),
      pt = Ye(Array.from) ? Array.from : (e) => Ir.call(e),
      en = (e, t) => {
        for (let n = 0; n < e.length; n++) {
          const s = t(e[n], n);
          if (s.isSome()) return s;
        }
        return g.none();
      },
      el = (e, t) => {
        const n = [],
          s = Ye(t) ? (o) => M(n, (r) => t(r, o)) : (o) => R(n, o);
        for (let o = 0, r = e.length; o < r; o++) {
          const i = e[o];
          s(i) || n.push(i);
        }
        return n;
      },
      Jn = Object.keys,
      lk = Object.hasOwnProperty,
      ht = (e, t) => {
        const n = Jn(e);
        for (let s = 0, o = n.length; s < o; s++) {
          const r = n[s],
            i = e[r];
          t(i, r);
        }
      },
      $i = (e, t) => ck(e, (n, s) => ({ k: s, v: t(n, s) })),
      ck = (e, t) => {
        const n = {};
        return (
          ht(e, (s, o) => {
            const r = t(s, o);
            n[r.k] = r.v;
          }),
          n
        );
      },
      Ru = (e) => (t, n) => {
        e[n] = t;
      },
      mg = (e, t, n, s) => {
        const o = {};
        return (
          ht(e, (r, i) => {
            (t(r, i) ? n : s)(r, i);
          }),
          o
        );
      },
      uk = (e, t) => {
        const n = {},
          s = {};
        return mg(e, t, Ru(n), Ru(s)), { t: n, f: s };
      },
      Li = (e, t) => {
        const n = {};
        return mg(e, t, Ru(n), Ie), n;
      },
      Pu = (e, t) => {
        const n = [];
        return (
          ht(e, (s, o) => {
            n.push(t(s, o));
          }),
          n
        );
      },
      pg = (e) => Pu(e, xt),
      at = (e, t) => (Fe(e, t) ? g.from(e[t]) : g.none()),
      Fe = (e, t) => lk.call(e, t),
      Fr = (e, t) => Fe(e, t) && e[t] !== void 0 && e[t] !== null,
      fk = (e, t, n = we) => ie(n).eq(e, t),
      gg = (e) => {
        const t = {};
        return (
          T(e, (n) => {
            t[n] = {};
          }),
          Jn(t)
        );
      },
      Ou = Array.isArray,
      dk = (e) => {
        if (Ou(e)) return e;
        {
          const t = [];
          for (let n = 0, s = e.length; n < s; n++) t[n] = e[n];
          return t;
        }
      },
      Fi = (e, t, n) => {
        let s, o;
        if (!e) return !1;
        if (((n = n || e), e.length !== void 0)) {
          for (s = 0, o = e.length; s < o; s++)
            if (t.call(n, e[s], s, e) === !1) return !1;
        } else
          for (s in e) if (Fe(e, s) && t.call(n, e[s], s, e) === !1) return !1;
        return !0;
      },
      Du = (e, t) => {
        const n = [];
        return (
          Fi(e, (s, o) => {
            n.push(t(s, o, e));
          }),
          n
        );
      },
      Mr = (e, t) => {
        const n = [];
        return (
          Fi(e, (s, o) => {
            (!t || t(s, o, e)) && n.push(s);
          }),
          n
        );
      },
      hg = (e, t) => {
        if (e) {
          for (let n = 0, s = e.length; n < s; n++) if (e[n] === t) return n;
        }
        return -1;
      },
      tl = (e, t, n, s) => {
        let o = Pt(n) ? e[0] : n;
        for (let r = 0; r < e.length; r++) o = t.call(s, o, e[r], r);
        return o;
      },
      bg = (e, t, n) => {
        let s, o;
        for (s = 0, o = e.length; s < o; s++)
          if (t.call(n, e[s], s, e)) return s;
        return -1;
      },
      bo = (e) => e[e.length - 1],
      qo = (e) => {
        let t = !1,
          n;
        return (...s) => (t || ((t = !0), (n = e.apply(null, s))), n);
      },
      mk = (e, t, n, s) => {
        const o = e.isiOS() && /ipad/i.test(n) === !0,
          r = e.isiOS() && !o,
          i = e.isiOS() || e.isAndroid(),
          a = i || s("(pointer:coarse)"),
          c = o || (!r && i && s("(min-device-width:768px)")),
          f = r || (i && !c),
          d = t.isSafari() && e.isiOS() && /safari/i.test(n) === !1,
          p = !f && !c && !d;
        return {
          isiPad: K(o),
          isiPhone: K(r),
          isTablet: K(c),
          isPhone: K(f),
          isTouch: K(a),
          isAndroid: e.isAndroid,
          isiOS: e.isiOS,
          isWebView: K(d),
          isDesktop: K(p),
        };
      },
      pk = (e, t) => {
        for (let n = 0; n < e.length; n++) {
          const s = e[n];
          if (s.test(t)) return s;
        }
      },
      gk = (e, t) => {
        const n = pk(e, t);
        if (!n) return { major: 0, minor: 0 };
        const s = (o) => Number(t.replace(n, "$" + o));
        return Bu(s(1), s(2));
      },
      hk = (e, t) => {
        const n = String(t).toLowerCase();
        return e.length === 0 ? Cg() : gk(e, n);
      },
      Cg = () => Bu(0, 0),
      Bu = (e, t) => ({ major: e, minor: t }),
      Mi = { nu: Bu, detect: hk, unknown: Cg },
      bk = (e, t) =>
        en(t.brands, (n) => {
          const s = n.brand.toLowerCase();
          return de(e, (o) => {
            var r;
            return (
              s ===
              ((r = o.brand) === null || r === void 0
                ? void 0
                : r.toLowerCase())
            );
          }).map((o) => ({
            current: o.name,
            version: Mi.nu(parseInt(n.version, 10), 0),
          }));
        }),
      yg = (e, t) => {
        const n = String(t).toLowerCase();
        return de(e, (s) => s.search(n));
      },
      Ck = (e, t) =>
        yg(e, t).map((n) => {
          const s = Mi.detect(n.versionRegexes, t);
          return { current: n.name, version: s };
        }),
      yk = (e, t) =>
        yg(e, t).map((n) => {
          const s = Mi.detect(n.versionRegexes, t);
          return { current: n.name, version: s };
        }),
      vk = (e, t) => e.substring(t),
      vg = (e, t, n) =>
        t === "" || (e.length >= t.length && e.substr(n, n + t.length) === t),
      Ek = (e, t) => (qn(e, t) ? vk(e, t.length) : e),
      un = (e, t) => e.indexOf(t) !== -1,
      qn = (e, t) => vg(e, t, 0),
      Eg = (e, t) => vg(e, t, e.length - t.length),
      Iu = (e) => (t) => t.replace(e, ""),
      Ur = Iu(/^\s+|\s+$/g),
      xk = Iu(/^\s+/g),
      xg = Iu(/\s+$/g),
      Gs = (e) => e.length > 0,
      nl = (e) => !Gs(e),
      wk = (e, t) => (t <= 0 ? "" : new Array(t + 1).join(e)),
      Sk = (e, t = 10) => {
        const n = parseInt(e, t);
        return isNaN(n) ? g.none() : g.some(n);
      },
      $u = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
      Ys = (e) => (t) => un(t, e),
      _k = [
        {
          name: "Edge",
          versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
          search: (e) =>
            un(e, "edge/") &&
            un(e, "chrome") &&
            un(e, "safari") &&
            un(e, "applewebkit"),
        },
        {
          name: "Chromium",
          brand: "Chromium",
          versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, $u],
          search: (e) => un(e, "chrome") && !un(e, "chromeframe"),
        },
        {
          name: "IE",
          versionRegexes: [
            /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
            /.*?rv:([0-9]+)\.([0-9]+).*/,
          ],
          search: (e) => un(e, "msie") || un(e, "trident"),
        },
        {
          name: "Opera",
          versionRegexes: [$u, /.*?opera\/([0-9]+)\.([0-9]+).*/],
          search: Ys("opera"),
        },
        {
          name: "Firefox",
          versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
          search: Ys("firefox"),
        },
        {
          name: "Safari",
          versionRegexes: [$u, /.*?cpu os ([0-9]+)_([0-9]+).*/],
          search: (e) =>
            (un(e, "safari") || un(e, "mobile/")) && un(e, "applewebkit"),
        },
      ],
      kk = [
        {
          name: "Windows",
          search: Ys("win"),
          versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/],
        },
        {
          name: "iOS",
          search: (e) => un(e, "iphone") || un(e, "ipad"),
          versionRegexes: [
            /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
            /.*cpu os ([0-9]+)_([0-9]+).*/,
            /.*cpu iphone os ([0-9]+)_([0-9]+).*/,
          ],
        },
        {
          name: "Android",
          search: Ys("android"),
          versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/],
        },
        {
          name: "macOS",
          search: Ys("mac os x"),
          versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/],
        },
        { name: "Linux", search: Ys("linux"), versionRegexes: [] },
        { name: "Solaris", search: Ys("sunos"), versionRegexes: [] },
        { name: "FreeBSD", search: Ys("freebsd"), versionRegexes: [] },
        {
          name: "ChromeOS",
          search: Ys("cros"),
          versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/],
        },
      ],
      wg = { browsers: K(_k), oses: K(kk) },
      Sg = "Edge",
      _g = "Chromium",
      kg = "IE",
      Ng = "Opera",
      Ag = "Firefox",
      Tg = "Safari",
      Nk = () => Rg({ current: void 0, version: Mi.unknown() }),
      Rg = (e) => {
        const t = e.current,
          n = e.version,
          s = (o) => () => t === o;
        return {
          current: t,
          version: n,
          isEdge: s(Sg),
          isChromium: s(_g),
          isIE: s(kg),
          isOpera: s(Ng),
          isFirefox: s(Ag),
          isSafari: s(Tg),
        };
      },
      Pg = {
        unknown: Nk,
        nu: Rg,
        edge: K(Sg),
        chromium: K(_g),
        ie: K(kg),
        opera: K(Ng),
        firefox: K(Ag),
        safari: K(Tg),
      },
      Og = "Windows",
      Dg = "iOS",
      Bg = "Android",
      Ig = "Linux",
      $g = "macOS",
      Lg = "Solaris",
      Fg = "FreeBSD",
      Mg = "ChromeOS",
      Ak = () => Ug({ current: void 0, version: Mi.unknown() }),
      Ug = (e) => {
        const t = e.current,
          n = e.version,
          s = (o) => () => t === o;
        return {
          current: t,
          version: n,
          isWindows: s(Og),
          isiOS: s(Dg),
          isAndroid: s(Bg),
          isMacOS: s($g),
          isLinux: s(Ig),
          isSolaris: s(Lg),
          isFreeBSD: s(Fg),
          isChromeOS: s(Mg),
        };
      },
      zg = {
        unknown: Ak,
        nu: Ug,
        windows: K(Og),
        ios: K(Dg),
        android: K(Bg),
        linux: K(Ig),
        macos: K($g),
        solaris: K(Lg),
        freebsd: K(Fg),
        chromeos: K(Mg),
      },
      Tk = {
        detect: (e, t, n) => {
          const s = wg.browsers(),
            o = wg.oses(),
            r = t
              .bind((c) => bk(s, c))
              .orThunk(() => Ck(s, e))
              .fold(Pg.unknown, Pg.nu),
            i = yk(o, e).fold(zg.unknown, zg.nu),
            a = mk(i, r, e, n);
          return { browser: r, os: i, deviceType: a };
        },
      },
      Rk = (e) => window.matchMedia(e).matches;
    let Pk = qo(() =>
      Tk.detect(navigator.userAgent, g.from(navigator.userAgentData), Rk)
    );
    const Co = () => Pk(),
      Ok = navigator.userAgent,
      Lu = Co(),
      ys = Lu.browser,
      vs = Lu.os,
      Ko = Lu.deviceType,
      Dk = Ok.indexOf("Windows Phone") !== -1,
      et = {
        transparentSrc:
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        documentMode: ys.isIE() ? document.documentMode || 7 : 10,
        cacheSuffix: null,
        container: null,
        canHaveCSP: !ys.isIE(),
        windowsPhone: Dk,
        browser: {
          current: ys.current,
          version: ys.version,
          isChromium: ys.isChromium,
          isEdge: ys.isEdge,
          isFirefox: ys.isFirefox,
          isIE: ys.isIE,
          isOpera: ys.isOpera,
          isSafari: ys.isSafari,
        },
        os: {
          current: vs.current,
          version: vs.version,
          isAndroid: vs.isAndroid,
          isChromeOS: vs.isChromeOS,
          isFreeBSD: vs.isFreeBSD,
          isiOS: vs.isiOS,
          isLinux: vs.isLinux,
          isMacOS: vs.isMacOS,
          isSolaris: vs.isSolaris,
          isWindows: vs.isWindows,
        },
        deviceType: {
          isDesktop: Ko.isDesktop,
          isiPad: Ko.isiPad,
          isiPhone: Ko.isiPhone,
          isPhone: Ko.isPhone,
          isTablet: Ko.isTablet,
          isTouch: Ko.isTouch,
          isWebView: Ko.isWebView,
        },
      },
      Bk = /^\s*|\s*$/g,
      Hg = (e) => (e == null ? "" : ("" + e).replace(Bk, "")),
      Vg = (e, t) =>
        t ? (t === "array" && Ou(e) ? !0 : typeof e === t) : e !== void 0,
      Ik = (e, t, n) => {
        let s;
        for (
          e = e || [],
            t = t || ",",
            typeof e == "string" && (e = e.split(t)),
            n = n || {},
            s = e.length;
          s--;

        )
          n[e[s]] = {};
        return n;
      },
      $k = Fe,
      Lk = (e, ...t) => {
        for (let n = 0; n < t.length; n++) {
          const s = t[n];
          for (const o in s)
            if (Fe(s, o)) {
              const r = s[o];
              r !== void 0 && (e[o] = r);
            }
        }
        return e;
      },
      Wg = function (e, t, n, s) {
        (s = s || this),
          e &&
            (n && (e = e[n]),
            Fi(e, (o, r) => {
              if (t.call(s, o, r, n) === !1) return !1;
              Wg(o, t, n, s);
            }));
      },
      G = {
        trim: Hg,
        isArray: Ou,
        is: Vg,
        toArray: dk,
        makeMap: Ik,
        each: Fi,
        map: Du,
        grep: Mr,
        inArray: hg,
        hasOwn: $k,
        extend: Lk,
        walk: Wg,
        resolve: (e, t) => {
          let n, s;
          for (
            t = t || window, e = e.split("."), n = 0, s = e.length;
            n < s && ((t = t[e[n]]), !!t);
            n++
          );
          return t;
        },
        explode: (e, t) =>
          !e || Vg(e, "array") ? e : Du(e.split(t || ","), Hg),
        _addCacheSuffix: (e) => {
          const t = et.cacheSuffix;
          return t && (e += (e.indexOf("?") === -1 ? "?" : "&") + t), e;
        },
      },
      zr = (e, t, n = Bi) => e.exists((s) => n(s, t)),
      Fk = (e) => {
        const t = [],
          n = (s) => {
            t.push(s);
          };
        for (let s = 0; s < e.length; s++) e[s].each(n);
        return t;
      },
      En = (e, t, n) =>
        e.isSome() && t.isSome()
          ? g.some(n(e.getOrDie(), t.getOrDie()))
          : g.none(),
      Mk = (e, t, n, s) =>
        e.isSome() && t.isSome() && n.isSome()
          ? g.some(s(e.getOrDie(), t.getOrDie(), n.getOrDie()))
          : g.none(),
      Fu = (e, t) => (e ? g.some(t) : g.none());
    typeof window != "undefined" || Function("return this;")();
    const jg = 8,
      qg = 9,
      Kg = 11,
      Ui = 1,
      Gg = 3,
      bt = (e) => e.dom.nodeName.toLowerCase(),
      Yg = (e) => e.dom.nodeType,
      sl = (e) => (t) => Yg(t) === e,
      Uk = (e) => Yg(e) === jg || bt(e) === "#comment",
      Kn = sl(Ui),
      In = sl(Gg),
      zk = sl(qg),
      Hk = sl(Kg),
      Vk = (e) => (t) => Kn(t) && bt(t) === e,
      Xg = (e, t, n) => {
        if (be(n) || gs(n) || yn(n)) e.setAttribute(t, n + "");
        else
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
      },
      fn = (e, t, n) => {
        Xg(e.dom, t, n);
      },
      Es = (e, t) => {
        const n = e.dom;
        ht(t, (s, o) => {
          Xg(n, o, s);
        });
      },
      $n = (e, t) => {
        const n = e.dom.getAttribute(t);
        return n === null ? void 0 : n;
      },
      ol = (e, t) => g.from($n(e, t)),
      rl = (e, t) => {
        const n = e.dom;
        return n && n.hasAttribute ? n.hasAttribute(t) : !1;
      },
      Gn = (e, t) => {
        e.dom.removeAttribute(t);
      },
      Wk = (e) => {
        const t = e.dom.attributes;
        return t == null || t.length === 0;
      },
      Qg = (e) => X(e.dom.attributes, (t, n) => ((t[n.name] = n.value), t), {}),
      Mu = (e, t) => {
        const n = $n(e, t);
        return n === void 0 || n === "" ? [] : n.split(" ");
      },
      jk = (e, t, n) => {
        const o = Mu(e, t).concat([n]);
        return fn(e, t, o.join(" ")), !0;
      },
      qk = (e, t, n) => {
        const s = H(Mu(e, t), (o) => o !== n);
        return s.length > 0 ? fn(e, t, s.join(" ")) : Gn(e, t), !1;
      },
      zi = (e) => e.dom.classList !== void 0,
      Zg = (e) => Mu(e, "class"),
      Jg = (e, t) => jk(e, "class", t),
      eh = (e, t) => qk(e, "class", t),
      Kk = (e, t) => (R(Zg(e), t) ? eh(e, t) : Jg(e, t)),
      Hi = (e, t) => {
        zi(e) ? e.dom.classList.add(t) : Jg(e, t);
      },
      th = (e) => {
        (zi(e) ? e.dom.classList : Zg(e)).length === 0 && Gn(e, "class");
      },
      nh = (e, t) => {
        zi(e) ? e.dom.classList.remove(t) : eh(e, t), th(e);
      },
      Gk = (e, t) => {
        const n = zi(e) ? e.dom.classList.toggle(t) : Kk(e, t);
        return th(e), n;
      },
      Uu = (e, t) => zi(e) && e.dom.classList.contains(t),
      Vi = (e) => e.style !== void 0 && Ye(e.style.getPropertyValue),
      Yk = (e, t) => {
        const s = (t || document).createElement("div");
        if (
          ((s.innerHTML = e), !s.hasChildNodes() || s.childNodes.length > 1)
        ) {
          const o = "HTML does not have a single root node";
          throw (console.error(o, e), new Error(o));
        }
        return Wi(s.childNodes[0]);
      },
      Xk = (e, t) => {
        const s = (t || document).createElement(e);
        return Wi(s);
      },
      Qk = (e, t) => {
        const s = (t || document).createTextNode(e);
        return Wi(s);
      },
      Wi = (e) => {
        if (e == null) throw new Error("Node cannot be null or undefined");
        return { dom: e };
      },
      S = {
        fromHtml: Yk,
        fromTag: Xk,
        fromText: Qk,
        fromDom: Wi,
        fromPoint: (e, t, n) => g.from(e.dom.elementFromPoint(t, n)).map(Wi),
      },
      sh = (e, t) => {
        const n = [],
          s = (r) => (n.push(r), t(r));
        let o = t(e);
        do o = o.bind(s);
        while (o.isSome());
        return n;
      },
      Xs = (e, t) => {
        const n = e.dom;
        if (n.nodeType !== Ui) return !1;
        {
          const s = n;
          if (s.matches !== void 0) return s.matches(t);
          if (s.msMatchesSelector !== void 0) return s.msMatchesSelector(t);
          if (s.webkitMatchesSelector !== void 0)
            return s.webkitMatchesSelector(t);
          if (s.mozMatchesSelector !== void 0) return s.mozMatchesSelector(t);
          throw new Error("Browser lacks native selectors");
        }
      },
      oh = (e) =>
        (e.nodeType !== Ui && e.nodeType !== qg && e.nodeType !== Kg) ||
        e.childElementCount === 0,
      Zk = (e, t) => {
        const n = t === void 0 ? document : t.dom;
        return oh(n) ? [] : U(n.querySelectorAll(e), S.fromDom);
      },
      Jk = (e, t) => {
        const n = t === void 0 ? document : t.dom;
        return oh(n) ? g.none() : g.from(n.querySelector(e)).map(S.fromDom);
      },
      tt = (e, t) => e.dom === t.dom,
      Qs = (e, t) => {
        const n = e.dom,
          s = t.dom;
        return n === s ? !1 : n.contains(s);
      },
      rh = (e) => S.fromDom(e.dom.ownerDocument),
      yo = (e) => (zk(e) ? e : rh(e)),
      eN = (e) => S.fromDom(yo(e).dom.documentElement),
      ih = (e) => S.fromDom(yo(e).dom.defaultView),
      Yn = (e) => g.from(e.dom.parentNode).map(S.fromDom),
      tN = (e) => g.from(e.dom.parentElement).map(S.fromDom),
      nN = (e, t) => {
        const n = Ye(t) ? t : mt;
        let s = e.dom;
        const o = [];
        for (; s.parentNode !== null && s.parentNode !== void 0; ) {
          const r = s.parentNode,
            i = S.fromDom(r);
          if ((o.push(i), n(i) === !0)) break;
          s = r;
        }
        return o;
      },
      sN = (e) => {
        const t = (n) => H(n, (s) => !tt(e, s));
        return Yn(e).map(Yt).map(t).getOr([]);
      },
      Go = (e) => g.from(e.dom.previousSibling).map(S.fromDom),
      ji = (e) => g.from(e.dom.nextSibling).map(S.fromDom),
      ah = (e) => nt(sh(e, Go)),
      lh = (e) => sh(e, ji),
      Yt = (e) => U(e.dom.childNodes, S.fromDom),
      il = (e, t) => {
        const n = e.dom.childNodes;
        return g.from(n[t]).map(S.fromDom);
      },
      ch = (e) => il(e, 0),
      zu = (e) => il(e, e.dom.childNodes.length - 1),
      uh = (e) => e.dom.childNodes.length,
      oN = (e) => {
        const t = e.dom.head;
        if (t == null) throw new Error("Head is not available yet");
        return S.fromDom(t);
      },
      fh = (e) => Hk(e) && ke(e.dom.host),
      dh = Ye(Element.prototype.attachShadow) && Ye(Node.prototype.getRootNode),
      rN = K(dh),
      Yo = dh ? (e) => S.fromDom(e.dom.getRootNode()) : yo,
      Hu = (e) => (fh(e) ? e : oN(yo(e))),
      iN = (e) => {
        const t = Yo(e);
        return fh(t) ? g.some(t) : g.none();
      },
      aN = (e) => S.fromDom(e.dom.host),
      mh = (e) => {
        if (rN() && ke(e.target)) {
          const t = S.fromDom(e.target);
          if (Kn(t) && lN(t) && e.composed && e.composedPath) {
            const n = e.composedPath();
            if (n) return Ut(n);
          }
        }
        return g.from(e.target);
      },
      lN = (e) => ke(e.dom.shadowRoot),
      Hr = (e) => {
        const t = In(e) ? e.dom.parentNode : e.dom;
        if (t == null || t.ownerDocument === null) return !1;
        const n = t.ownerDocument;
        return iN(S.fromDom(t)).fold(() => n.body.contains(t), _t(Hr, aN));
      },
      ph = (e, t, n) => {
        if (!be(n))
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
        Vi(e) && e.style.setProperty(t, n);
      },
      cN = (e, t) => {
        Vi(e) && e.style.removeProperty(t);
      },
      gh = (e, t, n) => {
        const s = e.dom;
        ph(s, t, n);
      },
      al = (e, t) => {
        const n = e.dom;
        ht(t, (s, o) => {
          ph(n, o, s);
        });
      },
      xs = (e, t) => {
        const n = e.dom,
          o = window.getComputedStyle(n).getPropertyValue(t);
        return o === "" && !Hr(e) ? hh(n, t) : o;
      },
      hh = (e, t) => (Vi(e) ? e.style.getPropertyValue(t) : ""),
      ll = (e, t) => {
        const n = e.dom,
          s = hh(n, t);
        return g.from(s).filter((o) => o.length > 0);
      },
      bh = (e) => {
        const t = {},
          n = e.dom;
        if (Vi(n))
          for (let s = 0; s < n.style.length; s++) {
            const o = n.style.item(s);
            t[o] = n.style[o];
          }
        return t;
      },
      Ch = (e, t) => {
        const n = e.dom;
        cN(n, t), zr(ol(e, "style").map(Ur), "") && Gn(e, "style");
      },
      uN = (e) => e.dom.offsetWidth,
      Xn = (e, t) => {
        Yn(e).each((s) => {
          s.dom.insertBefore(t.dom, e.dom);
        });
      },
      vo = (e, t) => {
        ji(e).fold(
          () => {
            Yn(e).each((o) => {
              It(o, t);
            });
          },
          (s) => {
            Xn(s, t);
          }
        );
      },
      yh = (e, t) => {
        ch(e).fold(
          () => {
            It(e, t);
          },
          (s) => {
            e.dom.insertBefore(t.dom, s.dom);
          }
        );
      },
      It = (e, t) => {
        e.dom.appendChild(t.dom);
      },
      fN = (e, t) => {
        Xn(e, t), It(t, e);
      },
      dN = (e, t) => {
        T(t, (n, s) => {
          const o = s === 0 ? e : t[s - 1];
          vo(o, n);
        });
      },
      Xo = (e, t) => {
        T(t, (n) => {
          It(e, n);
        });
      },
      qi = (e) => {
        (e.dom.textContent = ""),
          T(Yt(e), (t) => {
            At(t);
          });
      },
      At = (e) => {
        const t = e.dom;
        t.parentNode !== null && t.parentNode.removeChild(t);
      },
      Eo = (e) => {
        const t = Yt(e);
        t.length > 0 && dN(e, t), At(e);
      },
      mN = (e, t) => {
        const s = (t || document).createElement("div");
        return (s.innerHTML = e), Yt(S.fromDom(s));
      },
      pN = (e) => U(e, S.fromDom),
      vh = (e) => e.dom.innerHTML,
      Vu = (e, t) => {
        const s = rh(e).dom,
          o = S.fromDom(s.createDocumentFragment()),
          r = mN(t, s);
        Xo(o, r), qi(e), It(e, o);
      },
      gN = (e) => {
        const t = S.fromTag("div"),
          n = S.fromDom(e.dom.cloneNode(!0));
        return It(t, n), vh(t);
      },
      hN = (e, t, n, s, o, r, i) => ({
        target: e,
        x: t,
        y: n,
        stop: s,
        prevent: o,
        kill: r,
        raw: i,
      }),
      bN = (e) => {
        const t = S.fromDom(mh(e).getOr(e.target)),
          n = () => e.stopPropagation(),
          s = () => e.preventDefault(),
          o = Ot(s, n);
        return hN(t, e.clientX, e.clientY, n, s, o, e);
      },
      CN = (e, t) => (n) => {
        e(n) && t(bN(n));
      },
      yN = (e, t, n, s, o) => {
        const r = CN(n, s);
        return e.dom.addEventListener(t, r, o), { unbind: oe(EN, e, t, r, o) };
      },
      vN = (e, t, n, s) => yN(e, t, n, s, !1),
      EN = (e, t, n, s) => {
        e.dom.removeEventListener(t, n, s);
      },
      Eh = (e, t) => ({
        left: e,
        top: t,
        translate: (s, o) => Eh(e + s, t + o),
      }),
      Vr = Eh,
      xN = (e) => {
        const t = e.getBoundingClientRect();
        return Vr(t.left, t.top);
      },
      cl = (e, t) => (e !== void 0 ? e : t !== void 0 ? t : 0),
      wN = (e) => {
        const t = e.dom.ownerDocument,
          n = t.body,
          s = t.defaultView,
          o = t.documentElement;
        if (n === e.dom) return Vr(n.offsetLeft, n.offsetTop);
        const r = cl(s == null ? void 0 : s.pageYOffset, o.scrollTop),
          i = cl(s == null ? void 0 : s.pageXOffset, o.scrollLeft),
          a = cl(o.clientTop, n.clientTop),
          c = cl(o.clientLeft, n.clientLeft);
        return Wu(e).translate(i - c, r - a);
      },
      Wu = (e) => {
        const t = e.dom,
          s = t.ownerDocument.body;
        return s === t
          ? Vr(s.offsetLeft, s.offsetTop)
          : Hr(e)
          ? xN(t)
          : Vr(0, 0);
      },
      ju = (e) => {
        const t = e !== void 0 ? e.dom : document,
          n = t.body.scrollLeft || t.documentElement.scrollLeft,
          s = t.body.scrollTop || t.documentElement.scrollTop;
        return Vr(n, s);
      },
      xh = (e, t, n) => {
        const o = (n !== void 0 ? n.dom : document).defaultView;
        o && o.scrollTo(e, t);
      },
      wh = (e, t) => {
        Co().browser.isSafari() && Ye(e.dom.scrollIntoViewIfNeeded)
          ? e.dom.scrollIntoViewIfNeeded(!1)
          : e.dom.scrollIntoView(t);
      },
      SN = (e) => {
        const t = e === void 0 ? window : e;
        return Co().browser.isFirefox() ? g.none() : g.from(t.visualViewport);
      },
      Sh = (e, t, n, s) => ({
        x: e,
        y: t,
        width: n,
        height: s,
        right: e + n,
        bottom: t + s,
      }),
      _h = (e) => {
        const t = e === void 0 ? window : e,
          n = t.document,
          s = ju(S.fromDom(n));
        return SN(t).fold(
          () => {
            const o = t.document.documentElement,
              r = o.clientWidth,
              i = o.clientHeight;
            return Sh(s.left, s.top, r, i);
          },
          (o) =>
            Sh(
              Math.max(o.pageLeft, s.left),
              Math.max(o.pageTop, s.top),
              o.width,
              o.height
            )
        );
      },
      Qo = (e) => (t) => !!t && t.nodeType === e,
      ul = (e) => !!e && !Object.getPrototypeOf(e),
      ve = Qo(1),
      Qn = (e) => {
        const t = e.map((n) => n.toLowerCase());
        return (n) => {
          if (n && n.nodeName) {
            const s = n.nodeName.toLowerCase();
            return R(t, s);
          }
          return !1;
        };
      },
      fl = (e, t) => {
        const n = t.toLowerCase().split(" ");
        return (s) => {
          if (ve(s))
            for (let o = 0; o < n.length; o++) {
              const r = s.ownerDocument.defaultView.getComputedStyle(s, null);
              if ((r ? r.getPropertyValue(e) : null) === n[o]) return !0;
            }
          return !1;
        };
      },
      kh = (e) => (t) => ve(t) && t.hasAttribute(e),
      _N = (e, t) => (n) => ve(n) && n.getAttribute(e) === t,
      Zo = (e) => ve(e) && e.hasAttribute("data-mce-bogus"),
      kN = (e) => ve(e) && e.getAttribute("data-mce-bogus") === "all",
      Ki = (e) => ve(e) && e.tagName === "TABLE",
      Nh = (e) => (t) =>
        !!(
          ve(t) &&
          (t.contentEditable === e ||
            t.getAttribute("data-mce-contenteditable") === e)
        ),
      qu = Qn(["textarea", "input"]),
      ne = Qo(3),
      NN = Qo(4),
      AN = Qo(7),
      Ah = Qo(8),
      Ku = Qo(9),
      Gu = Qo(11),
      Dt = Qn(["br"]),
      Th = Qn(["img"]),
      Zs = Nh("true"),
      wt = Nh("false"),
      dl = Qn(["td", "th"]),
      ws = Qn(["video", "audio", "object", "embed"]),
      TN = Co().browser,
      Rh = (e) => de(e, Kn),
      RN = (e) =>
        TN.isFirefox() && bt(e) === "table"
          ? Rh(Yt(e))
              .filter((t) => bt(t) === "caption")
              .bind((t) =>
                Rh(lh(t)).map((n) => {
                  const s = n.dom.offsetTop,
                    o = t.dom.offsetTop,
                    r = t.dom.offsetHeight;
                  return s <= o ? -r : 0;
                })
              )
              .getOr(0)
          : 0,
      Ph = (e, t) => e.children && R(e.children, t),
      PN = (e, t, n) => {
        let s = 0,
          o = 0;
        const r = e.ownerDocument;
        if (((n = n || e), t)) {
          if (
            n === e &&
            t.getBoundingClientRect &&
            xs(S.fromDom(e), "position") === "static"
          ) {
            const a = t.getBoundingClientRect();
            return (
              (s =
                a.left +
                (r.documentElement.scrollLeft || e.scrollLeft) -
                r.documentElement.clientLeft),
              (o =
                a.top +
                (r.documentElement.scrollTop || e.scrollTop) -
                r.documentElement.clientTop),
              { x: s, y: o }
            );
          }
          let i = t;
          for (; i && i !== n && i.nodeType && !Ph(i, n); ) {
            const a = i;
            (s += a.offsetLeft || 0),
              (o += a.offsetTop || 0),
              (i = a.offsetParent);
          }
          for (i = t.parentNode; i && i !== n && i.nodeType && !Ph(i, n); )
            (s -= i.scrollLeft || 0),
              (o -= i.scrollTop || 0),
              (i = i.parentNode);
          o += RN(S.fromDom(t));
        }
        return { x: s, y: o };
      };
    var Oh = (e, t, n, s, o) =>
      e(n, s) ? g.some(n) : Ye(o) && o(n) ? g.none() : t(n, s, o);
    const Wr = (e, t, n) => {
        let s = e.dom;
        const o = Ye(n) ? n : mt;
        for (; s.parentNode; ) {
          s = s.parentNode;
          const r = S.fromDom(s);
          if (t(r)) return g.some(r);
          if (o(r)) break;
        }
        return g.none();
      },
      ml = (e, t, n) => Oh((o, r) => r(o), Wr, e, t, n),
      ON = (e, t) => {
        const n = e.dom;
        return n.parentNode
          ? DN(S.fromDom(n.parentNode), (s) => !tt(e, s) && t(s))
          : g.none();
      },
      DN = (e, t) => {
        const n = (o) => t(S.fromDom(o));
        return de(e.dom.childNodes, n).map(S.fromDom);
      },
      BN = (e, t) => {
        const n = (s) => {
          for (let o = 0; o < s.childNodes.length; o++) {
            const r = S.fromDom(s.childNodes[o]);
            if (t(r)) return g.some(r);
            const i = n(s.childNodes[o]);
            if (i.isSome()) return i;
          }
          return g.none();
        };
        return n(e.dom);
      },
      Gi = (e, t, n) => Wr(e, (s) => Xs(s, t), n),
      Yi = (e, t) => Jk(t, e),
      Jo = (e, t, n) => Oh((o, r) => Xs(o, r), Gi, e, t, n),
      Dh = (e, t = {}) => {
        let n = 0;
        const s = {},
          o = S.fromDom(e),
          r = yo(o),
          i = t.maxLoadTime || 5e3,
          a = (y) => {
            t.referrerPolicy = y;
          },
          c = (y) => {
            It(Hu(o), y);
          },
          f = (y) => {
            const E = Hu(o);
            Yi(E, "#" + y).each(At);
          },
          d = (y) =>
            at(s, y).getOrThunk(() => ({
              id: "mce-u" + n++,
              passed: [],
              failed: [],
              count: 0,
            })),
          p = (y) =>
            new Promise((E, _) => {
              let P;
              const z = G._addCacheSuffix(y),
                I = d(z);
              (s[z] = I), I.count++;
              const $ = (ae, se) => {
                  T(ae, jo),
                    (I.status = se),
                    (I.passed = []),
                    (I.failed = []),
                    P && ((P.onload = null), (P.onerror = null), (P = null));
                },
                te = () => $(I.passed, 2),
                W = () => $(I.failed, 3),
                q = (ae, se) => {
                  ae() || (Date.now() - Ee < i ? setTimeout(se) : W());
                },
                Q = () => {
                  q(() => {
                    const ae = e.styleSheets;
                    let se = ae.length;
                    for (; se--; ) {
                      const We = ae[se].ownerNode;
                      if (We && We.id === P.id) return te(), !0;
                    }
                    return !1;
                  }, Q);
                };
              if (
                (E && I.passed.push(E), _ && I.failed.push(_), I.status === 1)
              )
                return;
              if (I.status === 2) {
                te();
                return;
              }
              if (I.status === 3) {
                W();
                return;
              }
              I.status = 1;
              const J = S.fromTag("link", r.dom);
              Es(J, { rel: "stylesheet", type: "text/css", id: I.id });
              const Ee = Date.now();
              t.contentCssCors && fn(J, "crossOrigin", "anonymous"),
                t.referrerPolicy && fn(J, "referrerpolicy", t.referrerPolicy),
                (P = J.dom),
                (P.onload = Q),
                (P.onerror = W),
                c(J),
                fn(J, "href", z);
            }),
          C = (y) =>
            Promise.allSettled(U(y, (_) => p(_).then(K(_)))).then((_) => {
              const P = Ce(_, (z) => z.status === "fulfilled");
              return P.fail.length > 0
                ? Promise.reject(U(P.fail, (z) => z.reason))
                : U(P.pass, (z) => z.value);
            }),
          b = (y) => {
            const E = G._addCacheSuffix(y);
            at(s, E).each((_) => {
              --_.count === 0 && (delete s[E], f(_.id));
            });
          };
        return {
          load: p,
          loadAll: C,
          unload: b,
          unloadAll: (y) => {
            T(y, (E) => {
              b(E);
            });
          },
          _setReferrerPolicy: a,
        };
      },
      Bh = (() => {
        const e = new WeakMap();
        return {
          forElement: (n, s) => {
            const r = Yo(n).dom;
            return g.from(e.get(r)).getOrThunk(() => {
              const i = Dh(r, s);
              return e.set(r, i), i;
            });
          },
        };
      })();
    class zt {
      constructor(t, n) {
        (this.node = t),
          (this.rootNode = n),
          (this.current = this.current.bind(this)),
          (this.next = this.next.bind(this)),
          (this.prev = this.prev.bind(this)),
          (this.prev2 = this.prev2.bind(this));
      }
      current() {
        return this.node;
      }
      next(t) {
        return (
          (this.node = this.findSibling(
            this.node,
            "firstChild",
            "nextSibling",
            t
          )),
          this.node
        );
      }
      prev(t) {
        return (
          (this.node = this.findSibling(
            this.node,
            "lastChild",
            "previousSibling",
            t
          )),
          this.node
        );
      }
      prev2(t) {
        return (
          (this.node = this.findPreviousNode(
            this.node,
            "lastChild",
            "previousSibling",
            t
          )),
          this.node
        );
      }
      findSibling(t, n, s, o) {
        let r, i;
        if (t) {
          if (!o && t[n]) return t[n];
          if (t !== this.rootNode) {
            if (((r = t[s]), r)) return r;
            for (i = t.parentNode; i && i !== this.rootNode; i = i.parentNode)
              if (((r = i[s]), r)) return r;
          }
        }
      }
      findPreviousNode(t, n, s, o) {
        let r, i, a;
        if (t) {
          if (((r = t[s]), this.rootNode && r === this.rootNode)) return;
          if (r) {
            if (!o) {
              for (a = r[n]; a; a = a[n]) if (!a[n]) return a;
            }
            return r;
          }
          if (((i = t.parentNode), i && i !== this.rootNode)) return i;
        }
      }
    }
    const IN = [
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
      ],
      $N = ["td", "th"],
      LN = ["thead", "tbody", "tfoot"],
      FN = [
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
      ],
      MN = ["h1", "h2", "h3", "h4", "h5", "h6"],
      UN = ["li", "dd", "dt"],
      zN = ["ul", "ol", "dl"],
      HN = ["pre", "script", "textarea", "style"],
      xo = (e) => {
        let t;
        return (n) => ((t = t || vn(e, rt)), Fe(t, bt(n)));
      },
      VN = xo(MN),
      Ss = xo(IN),
      WN = (e) => bt(e) === "table",
      Yu = (e) => Kn(e) && !Ss(e),
      jr = (e) => Kn(e) && bt(e) === "br",
      Ih = xo(FN),
      Xu = xo(zN),
      Xi = xo(UN),
      jN = xo(LN),
      pl = xo($N),
      gl = xo(HN),
      qN = (e, t, n) => Gi(e, t, n).isSome(),
      Qi = "\uFEFF",
      Xt = "\xA0",
      $h = (e) => e === Qi,
      KN = (e) => e.replace(/\uFEFF/g, ""),
      Kt = Qi,
      hl = $h,
      wo = KN,
      GN = ve,
      qr = ne,
      Kr = (e) => (
        qr(e) && (e = e.parentNode), GN(e) && e.hasAttribute("data-mce-caret")
      ),
      Gr = (e) => qr(e) && hl(e.data),
      Ln = (e) => Kr(e) || Gr(e),
      Lh = (e) => e.firstChild !== e.lastChild || !Dt(e.firstChild),
      YN = (e, t) => {
        const s = e.ownerDocument.createTextNode(Kt),
          o = e.parentNode;
        if (t) {
          const r = e.previousSibling;
          if (qr(r)) {
            if (Ln(r)) return r;
            if (Cl(r)) return r.splitText(r.data.length - 1);
          }
          o.insertBefore(s, e);
        } else {
          const r = e.nextSibling;
          if (qr(r)) {
            if (Ln(r)) return r;
            if (bl(r)) return r.splitText(1), r;
          }
          e.nextSibling ? o.insertBefore(s, e.nextSibling) : o.appendChild(s);
        }
        return s;
      },
      Qu = (e) => {
        const t = e.container();
        return ne(t)
          ? t.data.charAt(e.offset()) === Kt ||
              (e.isAtStart() && Gr(t.previousSibling))
          : !1;
      },
      Zu = (e) => {
        const t = e.container();
        return ne(t)
          ? t.data.charAt(e.offset() - 1) === Kt ||
              (e.isAtEnd() && Gr(t.nextSibling))
          : !1;
      },
      XN = () => {
        const e = document.createElement("br");
        return e.setAttribute("data-mce-bogus", "1"), e;
      },
      QN = (e, t, n) => {
        const o = t.ownerDocument.createElement(e);
        o.setAttribute("data-mce-caret", n ? "before" : "after"),
          o.setAttribute("data-mce-bogus", "all"),
          o.appendChild(XN());
        const r = t.parentNode;
        return (
          n
            ? r.insertBefore(o, t)
            : t.nextSibling
            ? r.insertBefore(o, t.nextSibling)
            : r.appendChild(o),
          o
        );
      },
      bl = (e) => qr(e) && e.data[0] === Kt,
      Cl = (e) => qr(e) && e.data[e.data.length - 1] === Kt,
      ZN = (e) => {
        const t = e.getElementsByTagName("br"),
          n = t[t.length - 1];
        Zo(n) && n.parentNode.removeChild(n);
      },
      Ju = (e) =>
        e && e.hasAttribute("data-mce-caret")
          ? (ZN(e),
            e.removeAttribute("data-mce-caret"),
            e.removeAttribute("data-mce-bogus"),
            e.removeAttribute("style"),
            e.removeAttribute("data-mce-style"),
            e.removeAttribute("_moz_abspos"),
            e)
          : null,
      Fh = (e) => Kr(e.startContainer),
      Mh = Zs,
      JN = wt,
      eA = Dt,
      tA = ne,
      nA = Qn(["script", "style", "textarea"]),
      Uh = Qn([
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
      sA = Qn(["table"]),
      oA = Ln,
      es = (e) =>
        oA(e)
          ? !1
          : tA(e)
          ? !nA(e.parentNode)
          : Uh(e) || eA(e) || sA(e) || ef(e),
      rA = (e) => ve(e) && e.getAttribute("unselectable") === "true",
      ef = (e) => rA(e) === !1 && JN(e),
      iA = (e, t) => {
        for (e = e.parentNode; e && e !== t; e = e.parentNode) {
          if (ef(e)) return !1;
          if (Mh(e)) return !0;
        }
        return !0;
      },
      aA = (e) =>
        ef(e)
          ? X(pt(e.getElementsByTagName("*")), (t, n) => t || Mh(n), !1) !== !0
          : !1,
      lA = (e) => Uh(e) || aA(e),
      zh = (e, t) => es(e) && iA(e, t),
      cA = /^[ \t\r\n]*$/,
      er = (e) => cA.test(e),
      uA = (e) => " \f	\v".indexOf(e) !== -1,
      Hh = (e) =>
        e ===
          `
` || e === "\r",
      fA = (e, t) => (t < e.length && t >= 0 ? Hh(e[t]) : !1),
      Vh = (e, t = 4, n = !0, s = !0) => {
        const o = wk(" ", t),
          r = e.replace(/\t/g, o);
        return X(
          r,
          (a, c) =>
            uA(c) || c === Xt
              ? a.pcIsSpace ||
                (a.str === "" && n) ||
                (a.str.length === r.length - 1 && s) ||
                fA(r, a.str.length + 1)
                ? { pcIsSpace: !1, str: a.str + Xt }
                : { pcIsSpace: !0, str: a.str + " " }
              : { pcIsSpace: Hh(c), str: a.str + c },
          { pcIsSpace: !1, str: "" }
        ).str;
      },
      dA = (e, t) => {
        const n = S.fromDom(t),
          s = S.fromDom(e);
        return qN(s, "pre,code", oe(tt, n));
      },
      mA = (e, t) => ne(e) && er(e.data) && dA(e, t) === !1,
      pA = (e) =>
        ve(e) &&
        e.nodeName === "A" &&
        !e.hasAttribute("href") &&
        (e.hasAttribute("name") || e.hasAttribute("id")),
      yl = (e, t) => (es(e) && mA(e, t) === !1) || pA(e) || gA(e),
      gA = kh("data-mce-bookmark"),
      hA = kh("data-mce-bogus"),
      bA = _N("data-mce-bogus", "all"),
      CA = (e, t) => {
        let n = 0;
        if (yl(e, e)) return !1;
        {
          let s = e.firstChild;
          if (!s) return !0;
          const o = new zt(s, e);
          do {
            if (t) {
              if (bA(s)) {
                s = o.next(!0);
                continue;
              }
              if (hA(s)) {
                s = o.next();
                continue;
              }
            }
            if (Dt(s)) {
              n++, (s = o.next());
              continue;
            }
            if (yl(s, e)) return !1;
            s = o.next();
          } while (s);
          return n <= 1;
        }
      },
      Ht = (e, t = !0) => CA(e.dom, t),
      yA = (e) => e.nodeName.toLowerCase() === "span",
      Wh = (e, t) => ke(e) && (yl(e, t) || Yu(S.fromDom(e))),
      vA = (e, t) => {
        const n = new zt(e, t).prev(!1),
          s = new zt(e, t).next(!1),
          o = Pt(n) || Wh(n, t),
          r = Pt(s) || Wh(s, t);
        return o && r;
      },
      jh = (e) => yA(e) && e.getAttribute("data-mce-type") === "bookmark",
      EA = (e, t) => ne(e) && e.data.length > 0 && vA(e, t),
      xA = (e) => (ve(e) ? e.childNodes.length > 0 : !1),
      wA = (e) => Gu(e) || Ku(e),
      tf = (e, t, n) => {
        const s = n || t;
        if (ve(t) && jh(t)) return t;
        const o = t.childNodes;
        for (let r = o.length - 1; r >= 0; r--) tf(e, o[r], s);
        if (ve(t)) {
          const r = t.childNodes;
          r.length === 1 && jh(r[0]) && t.parentNode.insertBefore(r[0], t);
        }
        return !wA(t) && !yl(t, s) && !xA(t) && !EA(t, s) && e.remove(t), t;
      },
      SA = G.makeMap,
      vl =
        /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      El = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      _A = /[<>&\"\']/g,
      kA = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
      NA = {
        128: "\u20AC",
        130: "\u201A",
        131: "\u0192",
        132: "\u201E",
        133: "\u2026",
        134: "\u2020",
        135: "\u2021",
        136: "\u02C6",
        137: "\u2030",
        138: "\u0160",
        139: "\u2039",
        140: "\u0152",
        142: "\u017D",
        145: "\u2018",
        146: "\u2019",
        147: "\u201C",
        148: "\u201D",
        149: "\u2022",
        150: "\u2013",
        151: "\u2014",
        152: "\u02DC",
        153: "\u2122",
        154: "\u0161",
        155: "\u203A",
        156: "\u0153",
        158: "\u017E",
        159: "\u0178",
      },
      tr = {
        '"': "&quot;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "`": "&#96;",
      },
      AA = {
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&apos;": "'",
      },
      TA = (e) => {
        const t = S.fromTag("div").dom;
        return (t.innerHTML = e), t.textContent || t.innerText || e;
      },
      qh = (e, t) => {
        let n, s, o;
        const r = {};
        if (e) {
          for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2)
            (s = String.fromCharCode(parseInt(e[n], t))),
              tr[s] || ((o = "&" + e[n + 1] + ";"), (r[s] = o), (r[o] = s));
          return r;
        }
      },
      nf = qh(
        "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
        32
      ),
      Kh = (e, t) => e.replace(t ? vl : El, (n) => tr[n] || n),
      RA = (e) => ("" + e).replace(_A, (t) => tr[t] || t),
      Gh = (e, t) =>
        e.replace(t ? vl : El, (n) =>
          n.length > 1
            ? "&#" +
              ((n.charCodeAt(0) - 55296) * 1024 +
                (n.charCodeAt(1) - 56320) +
                65536) +
              ";"
            : tr[n] || "&#" + n.charCodeAt(0) + ";"
        ),
      sf = (e, t, n) => (
        (n = n || nf), e.replace(t ? vl : El, (s) => tr[s] || n[s] || s)
      ),
      So = {
        encodeRaw: Kh,
        encodeAllRaw: RA,
        encodeNumeric: Gh,
        encodeNamed: sf,
        getEncodeFunc: (e, t) => {
          const n = qh(t) || nf,
            s = (i, a) =>
              i.replace(a ? vl : El, (c) =>
                tr[c] !== void 0
                  ? tr[c]
                  : n[c] !== void 0
                  ? n[c]
                  : c.length > 1
                  ? "&#" +
                    ((c.charCodeAt(0) - 55296) * 1024 +
                      (c.charCodeAt(1) - 56320) +
                      65536) +
                    ";"
                  : "&#" + c.charCodeAt(0) + ";"
              ),
            o = (i, a) => sf(i, a, n),
            r = SA(e.replace(/\+/g, ","));
          return r.named && r.numeric
            ? s
            : r.named
            ? t
              ? o
              : sf
            : r.numeric
            ? Gh
            : Kh;
        },
        decode: (e) =>
          e.replace(kA, (t, n) =>
            n
              ? (n.charAt(0).toLowerCase() === "x"
                  ? (n = parseInt(n.substr(1), 16))
                  : (n = parseInt(n, 10)),
                n > 65535
                  ? ((n -= 65536),
                    String.fromCharCode(55296 + (n >> 10), 56320 + (n & 1023)))
                  : NA[n] || String.fromCharCode(n))
              : AA[t] || nf[t] || TA(t)
          ),
      },
      _o = {},
      PA = {},
      Yr = G.makeMap,
      tn = G.each,
      of = G.extend,
      Yh = G.explode,
      OA = G.inArray,
      Gt = (e, t) => ((e = G.trim(e)), e ? e.split(t || " ") : []),
      DA = (e) => {
        const t = {};
        let n, s, o, r, i, a;
        const c = (d, p = "", C = "") => {
            const b = Gt(C),
              x = Gt(d);
            let y = x.length;
            for (; y--; ) {
              const E = Gt([n, p].join(" "));
              t[x[y]] = {
                attributes: vn(E, () => ({})),
                attributesOrder: E,
                children: vn(b, K(PA)),
              };
            }
          },
          f = (d, p) => {
            const C = Gt(d),
              b = Gt(p);
            let x = C.length;
            for (; x--; ) {
              const y = t[C[x]];
              for (let E = 0, _ = b.length; E < _; E++)
                (y.attributes[b[E]] = {}), y.attributesOrder.push(b[E]);
            }
          };
        return _o[e]
          ? _o[e]
          : ((n = "id accesskey class dir lang style tabindex title role"),
            (s =
              "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),
            (o =
              "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),
            e !== "html4" &&
              ((n +=
                " contenteditable contextmenu draggable dropzone hidden spellcheck translate"),
              (s +=
                " article aside details dialog figure main header footer hgroup section nav"),
              (o +=
                " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen")),
            e !== "html5-strict" &&
              ((n += " xml:lang"),
              (a = "acronym applet basefont big font strike tt"),
              (o = [o, a].join(" ")),
              tn(Gt(a), (d) => {
                c(d, "", o);
              }),
              (i = "center dir isindex noframes"),
              (s = [s, i].join(" ")),
              (r = [s, o].join(" ")),
              tn(Gt(i), (d) => {
                c(d, "", r);
              })),
            (r = r || [s, o].join(" ")),
            c("html", "manifest", "head body"),
            c("head", "", "base command link meta noscript script style title"),
            c("title hr noscript br"),
            c("base", "href target"),
            c("link", "href rel media hreflang type sizes hreflang"),
            c("meta", "name http-equiv content charset"),
            c("style", "media type scoped"),
            c("script", "src async defer type charset"),
            c(
              "body",
              "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",
              r
            ),
            c("address dt dd div caption", "", r),
            c(
              "h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn",
              "",
              o
            ),
            c("blockquote", "cite", r),
            c("ol", "reversed start type", "li"),
            c("ul", "", "li"),
            c("li", "value", r),
            c("dl", "", "dt dd"),
            c("a", "href target rel media hreflang type", o),
            c("q", "cite", o),
            c("ins del", "cite datetime", r),
            c("img", "src sizes srcset alt usemap ismap width height"),
            c("iframe", "src name width height", r),
            c("embed", "src type width height"),
            c(
              "object",
              "data type typemustmatch name usemap form width height",
              [r, "param"].join(" ")
            ),
            c("param", "name value"),
            c("map", "name", [r, "area"].join(" ")),
            c("area", "alt coords shape href target rel media hreflang type"),
            c(
              "table",
              "border",
              "caption colgroup thead tfoot tbody tr" +
                (e === "html4" ? " col" : "")
            ),
            c("colgroup", "span", "col"),
            c("col", "span"),
            c("tbody thead tfoot", "", "tr"),
            c("tr", "", "td th"),
            c("td", "colspan rowspan headers", r),
            c("th", "colspan rowspan headers scope abbr", r),
            c(
              "form",
              "accept-charset action autocomplete enctype method name novalidate target",
              r
            ),
            c("fieldset", "disabled form name", [r, "legend"].join(" ")),
            c("label", "form for", o),
            c(
              "input",
              "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"
            ),
            c(
              "button",
              "disabled form formaction formenctype formmethod formnovalidate formtarget name type value",
              e === "html4" ? r : o
            ),
            c(
              "select",
              "disabled form multiple name required size",
              "option optgroup"
            ),
            c("optgroup", "disabled label", "option"),
            c("option", "disabled label selected value"),
            c(
              "textarea",
              "cols dirname disabled form maxlength name readonly required rows wrap"
            ),
            c("menu", "type label", [r, "li"].join(" ")),
            c("noscript", "", r),
            e !== "html4" &&
              (c("wbr"),
              c("ruby", "", [o, "rt rp"].join(" ")),
              c("figcaption", "", r),
              c("mark rt rp summary bdi", "", o),
              c("canvas", "width height", r),
              c(
                "video",
                "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",
                [r, "track source"].join(" ")
              ),
              c(
                "audio",
                "src crossorigin preload autoplay mediagroup loop muted controls buffered volume",
                [r, "track source"].join(" ")
              ),
              c("picture", "", "img source"),
              c("source", "src srcset type media sizes"),
              c("track", "kind src srclang label default"),
              c("datalist", "", [o, "option"].join(" ")),
              c("article section nav aside main header footer", "", r),
              c("hgroup", "", "h1 h2 h3 h4 h5 h6"),
              c("figure", "", [r, "figcaption"].join(" ")),
              c("time", "datetime", o),
              c("dialog", "open", r),
              c(
                "command",
                "type label icon disabled checked radiogroup command"
              ),
              c("output", "for form name", o),
              c("progress", "value max", o),
              c("meter", "value min max low high optimum", o),
              c("details", "open", [r, "summary"].join(" ")),
              c("keygen", "autofocus challenge disabled form keytype name")),
            e !== "html5-strict" &&
              (f("script", "language xml:space"),
              f("style", "xml:space"),
              f(
                "object",
                "declare classid code codebase codetype archive standby align border hspace vspace"
              ),
              f("embed", "align name hspace vspace"),
              f("param", "valuetype type"),
              f("a", "charset name rev shape coords"),
              f("br", "clear"),
              f(
                "applet",
                "codebase archive code object alt name width height align hspace vspace"
              ),
              f("img", "name longdesc align border hspace vspace"),
              f(
                "iframe",
                "longdesc frameborder marginwidth marginheight scrolling align"
              ),
              f("font basefont", "size color face"),
              f("input", "usemap align"),
              f("select"),
              f("textarea"),
              f("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
              f("ul", "type compact"),
              f("li", "type"),
              f("ol dl menu dir", "compact"),
              f("pre", "width xml:space"),
              f("hr", "align noshade size width"),
              f("isindex", "prompt"),
              f(
                "table",
                "summary width frame rules cellspacing cellpadding align bgcolor"
              ),
              f("col", "width align char charoff valign"),
              f("colgroup", "width align char charoff valign"),
              f("thead", "align char charoff valign"),
              f("tr", "align char charoff valign bgcolor"),
              f(
                "th",
                "axis align char charoff valign nowrap bgcolor width height"
              ),
              f("form", "accept"),
              f(
                "td",
                "abbr axis scope align char charoff valign nowrap bgcolor width height"
              ),
              f("tfoot", "align char charoff valign"),
              f("tbody", "align char charoff valign"),
              f("area", "nohref"),
              f("body", "background bgcolor text link vlink alink")),
            e !== "html4" &&
              (f("input button select textarea", "autofocus"),
              f("input textarea", "placeholder"),
              f("a", "download"),
              f("link script img", "crossorigin"),
              f("img", "loading"),
              f("iframe", "sandbox seamless allowfullscreen loading")),
            e !== "html4" &&
              T([t.video, t.audio], (d) => {
                delete d.children.audio, delete d.children.video;
              }),
            tn(Gt("a form meter progress dfn"), (d) => {
              t[d] && delete t[d].children[d];
            }),
            delete t.caption.children.table,
            delete t.script,
            (_o[e] = t),
            t);
      },
      rf = (e, t) => {
        let n;
        return (
          e &&
            ((n = {}),
            typeof e == "string" && (e = { "*": e }),
            tn(e, (s, o) => {
              n[o] = n[o.toUpperCase()] =
                t === "map" ? Yr(s, /[, ]/) : Yh(s, /[, ]/);
            })),
          n
        );
      },
      ko = (e) => {
        var t;
        const n = {},
          s = {};
        let o = [];
        const r = {},
          i = {},
          a = (Y, he, Ae) => {
            let Te = e[Y];
            return (
              Te
                ? (Te = Yr(Te, /[, ]/, Yr(Te.toUpperCase(), /[, ]/)))
                : ((Te = _o[Y]),
                  Te ||
                    ((Te = Yr(he, " ", Yr(he.toUpperCase(), " "))),
                    (Te = of(Te, Ae)),
                    (_o[Y] = Te))),
              Te
            );
          };
        e = e || {};
        const c = (t = e.schema) !== null && t !== void 0 ? t : "html5",
          f = DA(c);
        e.verify_html === !1 && (e.valid_elements = "*[*]");
        const d = rf(e.valid_styles),
          p = rf(e.invalid_styles, "map"),
          C = rf(e.valid_classes, "map"),
          b = a(
            "whitespace_elements",
            "pre script noscript style textarea video audio iframe object code"
          ),
          x = a(
            "self_closing_elements",
            "colgroup dd dt li option p td tfoot th thead tr"
          ),
          y = a(
            "void_elements",
            "area base basefont br col frame hr img input isindex link meta param embed source wbr track"
          ),
          E = a(
            "boolean_attributes",
            "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls allowfullscreen"
          ),
          _ = "td th iframe video audio object script code",
          P = a("non_empty_elements", _ + " pre", y),
          z = a("move_caret_before_on_enter_elements", _ + " table", y),
          I = a(
            "text_block_elements",
            "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"
          ),
          $ = a(
            "block_elements",
            "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",
            I
          ),
          te = a(
            "text_inline_elements",
            "span strong b em i font strike u var cite dfn code mark q sup sub samp"
          );
        tn(
          "script noscript iframe noframes noembed title style textarea xmp plaintext".split(
            " "
          ),
          (Y) => {
            i[Y] = new RegExp("</" + Y + "[^>]*>", "gi");
          }
        );
        const W = (Y) => new RegExp("^" + Y.replace(/([?+*])/g, ".$1") + "$"),
          q = (Y) => {
            let he,
              Ae,
              Te,
              je,
              ze,
              Le,
              yt,
              Qt,
              Zt,
              Bt,
              Ft,
              Jt,
              Tt,
              hn,
              Lo,
              Fs,
              Ms,
              cs;
            const Sr =
                /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
              Fo = /^([!\-])?(\w+[\\:]:\w+|[^=~<]+)?(?:([=~<])(.*))?$/,
              Hn = /[*?+]/;
            if (Y) {
              const us = Gt(Y, ",");
              for (
                n["@"] &&
                  ((Fs = n["@"].attributes), (Ms = n["@"].attributesOrder)),
                  he = 0,
                  Ae = us.length;
                he < Ae;
                he++
              )
                if (((ze = Sr.exec(us[he])), ze)) {
                  if (
                    ((hn = ze[1]),
                    (Zt = ze[2]),
                    (Lo = ze[3]),
                    (Qt = ze[5]),
                    (Jt = {}),
                    (Tt = []),
                    (Le = { attributes: Jt, attributesOrder: Tt }),
                    hn === "#" && (Le.paddEmpty = !0),
                    hn === "-" && (Le.removeEmpty = !0),
                    ze[4] === "!" && (Le.removeEmptyAttrs = !0),
                    Fs &&
                      (ht(Fs, (_r, fs) => {
                        Jt[fs] = _r;
                      }),
                      Tt.push.apply(Tt, Ms)),
                    Qt)
                  ) {
                    for (
                      Qt = Gt(Qt, "|"), Te = 0, je = Qt.length;
                      Te < je;
                      Te++
                    )
                      if (((ze = Fo.exec(Qt[Te])), ze)) {
                        if (
                          ((yt = {}),
                          (Ft = ze[1]),
                          (Bt = ze[2].replace(/[\\:]:/g, ":")),
                          (hn = ze[3]),
                          (cs = ze[4]),
                          Ft === "!" &&
                            ((Le.attributesRequired =
                              Le.attributesRequired || []),
                            Le.attributesRequired.push(Bt),
                            (yt.required = !0)),
                          Ft === "-")
                        ) {
                          delete Jt[Bt], Tt.splice(OA(Tt, Bt), 1);
                          continue;
                        }
                        hn &&
                          (hn === "=" &&
                            ((Le.attributesDefault =
                              Le.attributesDefault || []),
                            Le.attributesDefault.push({ name: Bt, value: cs }),
                            (yt.defaultValue = cs)),
                          hn === "~" &&
                            ((Le.attributesForced = Le.attributesForced || []),
                            Le.attributesForced.push({ name: Bt, value: cs }),
                            (yt.forcedValue = cs)),
                          hn === "<" && (yt.validValues = Yr(cs, "?"))),
                          Hn.test(Bt)
                            ? ((Le.attributePatterns =
                                Le.attributePatterns || []),
                              (yt.pattern = W(Bt)),
                              Le.attributePatterns.push(yt))
                            : (Jt[Bt] || Tt.push(Bt), (Jt[Bt] = yt));
                      }
                  }
                  !Fs && Zt === "@" && ((Fs = Jt), (Ms = Tt)),
                    Lo && ((Le.outputName = Zt), (n[Lo] = Le)),
                    Hn.test(Zt)
                      ? ((Le.pattern = W(Zt)), o.push(Le))
                      : (n[Zt] = Le);
                }
            }
          },
          Q = (Y) => {
            (o = []),
              T(Jn(n), (he) => {
                delete n[he];
              }),
              q(Y),
              tn(f, (he, Ae) => {
                s[Ae] = he.children;
              });
          },
          J = (Y) => {
            const he = /^(~)?(.+)$/;
            Y &&
              ((_o.text_block_elements = _o.block_elements = null),
              tn(Gt(Y, ","), (Ae) => {
                const Te = he.exec(Ae),
                  je = Te[1] === "~",
                  ze = je ? "span" : "div",
                  Le = Te[2];
                if (
                  ((s[Le] = s[ze]),
                  (r[Le] = ze),
                  je || (($[Le.toUpperCase()] = {}), ($[Le] = {})),
                  !n[Le])
                ) {
                  let yt = n[ze];
                  (yt = of({}, yt)),
                    delete yt.removeEmptyAttrs,
                    delete yt.removeEmpty,
                    (n[Le] = yt);
                }
                tn(s, (yt, Qt) => {
                  yt[ze] && ((s[Qt] = yt = of({}, s[Qt])), (yt[Le] = yt[ze]));
                });
              }));
          },
          Ee = (Y) => {
            const he =
              /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
            (_o[c] = null),
              Y &&
                tn(Gt(Y, ","), (Ae) => {
                  const Te = he.exec(Ae);
                  let je, ze;
                  Te &&
                    ((ze = Te[1]),
                    ze ? (je = s[Te[2]]) : (je = s[Te[2]] = { "#comment": {} }),
                    (je = s[Te[2]]),
                    tn(Gt(Te[3], "|"), (Le) => {
                      ze === "-" ? delete je[Le] : (je[Le] = {});
                    }));
                });
          },
          ae = (Y) => {
            let he = n[Y],
              Ae;
            if (he) return he;
            for (Ae = o.length; Ae--; )
              if (((he = o[Ae]), he.pattern.test(Y))) return he;
          };
        e.valid_elements
          ? Q(e.valid_elements)
          : (tn(f, (Y, he) => {
              (n[he] = {
                attributes: Y.attributes,
                attributesOrder: Y.attributesOrder,
              }),
                (s[he] = Y.children);
            }),
            tn(Gt("strong/b em/i"), (Y) => {
              const he = Gt(Y, "/");
              n[he[1]].outputName = he[0];
            }),
            tn(
              Gt(
                "ol ul sub sup blockquote span font a table tbody strong em b i"
              ),
              (Y) => {
                n[Y] && (n[Y].removeEmpty = !0);
              }
            ),
            tn(
              Gt("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),
              (Y) => {
                n[Y].paddEmpty = !0;
              }
            ),
            tn(Gt("span"), (Y) => {
              n[Y].removeEmptyAttrs = !0;
            })),
          J(e.custom_elements),
          Ee(e.valid_children),
          q(e.extended_valid_elements),
          Ee("+ol[ul|ol],+ul[ul|ol]"),
          tn(
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
            (Y, he) => {
              n[he] && (n[he].parentsRequired = Gt(Y));
            }
          ),
          e.invalid_elements &&
            tn(Yh(e.invalid_elements), (Y) => {
              n[Y] && delete n[Y];
            }),
          ae("span") || q("span[!data-mce-type|*]");
        const se = K(d),
          Ke = K(p),
          We = K(C),
          lt = K(E),
          qt = K($),
          Z = K(I),
          pe = K(te),
          Me = K(Object.seal(y)),
          De = K(x),
          me = K(P),
          le = K(z),
          xe = K(b),
          Be = K(Object.seal(i)),
          Ct = (Y, he) => {
            const Ae = s[Y.toLowerCase()];
            return !!(Ae && Ae[he.toLowerCase()]);
          },
          Lt = (Y, he) => {
            let Ae, Te;
            const je = ae(Y);
            if (je)
              if (he) {
                if (je.attributes[he]) return !0;
                if (((Ae = je.attributePatterns), Ae)) {
                  for (Te = Ae.length; Te--; )
                    if (Ae[Te].pattern.test(he)) return !0;
                }
              } else return !0;
            return !1;
          },
          wr = K(r);
        return {
          type: c,
          children: s,
          elements: n,
          getValidStyles: se,
          getValidClasses: We,
          getBlockElements: qt,
          getInvalidStyles: Ke,
          getVoidElements: Me,
          getTextBlockElements: Z,
          getTextInlineElements: pe,
          getBoolAttrs: lt,
          getElementRule: ae,
          getSelfClosingElements: De,
          getNonEmptyElements: me,
          getMoveCaretBeforeOnEnterElements: le,
          getWhitespaceElements: xe,
          getSpecialElements: Be,
          isValidChild: Ct,
          isValid: Lt,
          getCustomElements: wr,
          addValidElements: q,
          setValidElements: Q,
          addCustomElements: J,
          addValidChildren: Ee,
        };
      },
      af = (e, t) => {
        const n =
            /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
          s = /\s*([^:]+):\s*([^;]+);?/g,
          o = /\s+$/;
        let r;
        const i = {};
        let a, c;
        const f = Qi;
        (e = e || {}),
          t && ((a = t.getValidStyles()), (c = t.getInvalidStyles()));
        const d = (`\\" \\' \\; \\: ; : ` + f).split(" ");
        for (r = 0; r < d.length; r++) (i[d[r]] = f + r), (i[f + r] = d[r]);
        const p = {
          parse: (C) => {
            const b = {};
            let x, y, E, _;
            const P = e.url_converter,
              z = e.url_converter_scope || p,
              I = (ae, se, Ke) => {
                const We = b[ae + "-top" + se];
                if (!We) return;
                const lt = b[ae + "-right" + se];
                if (!lt) return;
                const qt = b[ae + "-bottom" + se];
                if (!qt) return;
                const Z = b[ae + "-left" + se];
                if (!Z) return;
                const pe = [We, lt, qt, Z];
                for (r = pe.length - 1; r-- && pe[r] === pe[r + 1]; );
                (r > -1 && Ke) ||
                  ((b[ae + se] = r === -1 ? pe[0] : pe.join(" ")),
                  delete b[ae + "-top" + se],
                  delete b[ae + "-right" + se],
                  delete b[ae + "-bottom" + se],
                  delete b[ae + "-left" + se]);
              },
              $ = (ae) => {
                let se = b[ae],
                  Ke;
                if (!!se) {
                  for (se = se.split(" "), Ke = se.length; Ke--; )
                    if (se[Ke] !== se[0]) return !1;
                  return (b[ae] = se[0]), !0;
                }
              },
              te = (ae, se, Ke, We) => {
                !$(se) ||
                  !$(Ke) ||
                  !$(We) ||
                  ((b[ae] = b[se] + " " + b[Ke] + " " + b[We]),
                  delete b[se],
                  delete b[Ke],
                  delete b[We]);
              },
              W = (ae) => ((_ = !0), i[ae]),
              q = (ae, se) => (
                _ && (ae = ae.replace(/\uFEFF[0-9]/g, (Ke) => i[Ke])),
                se || (ae = ae.replace(/\\([\'\";:])/g, "$1")),
                ae
              ),
              Q = (ae) => String.fromCharCode(parseInt(ae.slice(1), 16)),
              J = (ae) => ae.replace(/\\[0-9a-f]+/gi, Q),
              Ee = (ae, se, Ke, We, lt, qt) => {
                if (((lt = lt || qt), lt))
                  return (lt = q(lt)), "'" + lt.replace(/\'/g, "\\'") + "'";
                if (((se = q(se || Ke || We)), !e.allow_script_urls)) {
                  const Z = se.replace(/[\s\r\n]+/g, "");
                  if (
                    /(java|vb)script:/i.test(Z) ||
                    (!e.allow_svg_data_urls && /^data:image\/svg/i.test(Z))
                  )
                    return "";
                }
                return (
                  P && (se = P.call(z, se, "style")),
                  "url('" + se.replace(/\'/g, "\\'") + "')"
                );
              };
            if (C) {
              for (
                C = C.replace(/[\u0000-\u001F]/g, ""),
                  C = C.replace(/\\[\"\';:\uFEFF]/g, W).replace(
                    /\"[^\"]+\"|\'[^\']+\'/g,
                    (ae) => ae.replace(/[;:]/g, W)
                  );
                (x = s.exec(C));

              )
                if (
                  ((s.lastIndex = x.index + x[0].length),
                  (y = x[1].replace(o, "").toLowerCase()),
                  (E = x[2].replace(o, "")),
                  y && E)
                ) {
                  if (
                    ((y = J(y)),
                    (E = J(E)),
                    y.indexOf(f) !== -1 ||
                      y.indexOf('"') !== -1 ||
                      (!e.allow_script_urls &&
                        (y === "behavior" ||
                          /expression\s*\(|\/\*|\*\//.test(E))))
                  )
                    continue;
                  y === "font-weight" && E === "700"
                    ? (E = "bold")
                    : (y === "color" || y === "background-color") &&
                      (E = E.toLowerCase()),
                    (E = E.replace(n, Ee)),
                    (b[y] = _ ? q(E, !0) : E);
                }
              I("border", "", !0),
                I("border", "-width"),
                I("border", "-color"),
                I("border", "-style"),
                I("padding", ""),
                I("margin", ""),
                te("border", "border-width", "border-style", "border-color"),
                b.border === "medium none" && delete b.border,
                b["border-image"] === "none" && delete b["border-image"];
            }
            return b;
          },
          serialize: (C, b) => {
            let x = "";
            const y = (_) => {
                let P;
                const z = a[_];
                if (z)
                  for (let I = 0, $ = z.length; I < $; I++)
                    (_ = z[I]),
                      (P = C[_]),
                      P &&
                        (x += (x.length > 0 ? " " : "") + _ + ": " + P + ";");
              },
              E = (_, P) => {
                let z = c["*"];
                return z && z[_] ? !1 : ((z = c[P]), !(z && z[_]));
              };
            return (
              b && a
                ? (y("*"), y(b))
                : ht(C, (_, P) => {
                    _ &&
                      (!c || E(P, b)) &&
                      (x += (x.length > 0 ? " " : "") + P + ": " + _ + ";");
                  }),
              x
            );
          },
        };
        return p;
      },
      BA = {
        keyLocation: !0,
        layerX: !0,
        layerY: !0,
        returnValue: !0,
        webkitMovementX: !0,
        webkitMovementY: !0,
        keyIdentifier: !0,
        mozPressure: !0,
      },
      IA = (e) => e instanceof Event || Ye(e.initEvent),
      $A = (e) => e.isDefaultPrevented === rt || e.isDefaultPrevented === mt,
      LA = (e) => Mt(e.preventDefault) || IA(e),
      Xh = (e, t) => {
        const n = t != null ? t : {};
        for (const s in e) Fe(BA, s) || (n[s] = e[s]);
        return (
          ke(n.composedPath) && (n.composedPath = () => e.composedPath()), n
        );
      },
      lf = (e, t, n, s) => {
        var o;
        const r = Xh(t, s);
        return (
          (r.type = e),
          Mt(r.target) &&
            (r.target = (o = r.srcElement) !== null && o !== void 0 ? o : n),
          LA(t) &&
            ((r.preventDefault = () => {
              (r.defaultPrevented = !0),
                (r.isDefaultPrevented = rt),
                Ye(t.preventDefault) && t.preventDefault();
            }),
            (r.stopPropagation = () => {
              (r.cancelBubble = !0),
                (r.isPropagationStopped = rt),
                Ye(t.stopPropagation) && t.stopPropagation();
            }),
            (r.stopImmediatePropagation = () => {
              (r.isImmediatePropagationStopped = rt), r.stopPropagation();
            }),
            $A(r) ||
              ((r.isDefaultPrevented = r.defaultPrevented === !0 ? rt : mt),
              (r.isPropagationStopped = r.cancelBubble === !0 ? rt : mt),
              (r.isImmediatePropagationStopped = mt))),
          r
        );
      },
      FA = "mce-data-",
      MA = /^(?:mouse|contextmenu)|click/,
      cf = (e, t, n, s) => {
        e.addEventListener
          ? e.addEventListener(t, n, s || !1)
          : e.attachEvent && e.attachEvent("on" + t, n);
      },
      xl = (e, t, n, s) => {
        e.removeEventListener
          ? e.removeEventListener(t, n, s || !1)
          : e.detachEvent && e.detachEvent("on" + t, n);
      },
      UA = (e) => ke(e) && MA.test(e.type),
      Xr = (e, t) => {
        const n = lf(e.type, e, document, t);
        if (UA(e) && Pt(e.pageX) && !Pt(e.clientX)) {
          const s = n.target.ownerDocument || document,
            o = s.documentElement,
            r = s.body,
            i = n;
          (i.pageX =
            e.clientX +
            ((o && o.scrollLeft) || (r && r.scrollLeft) || 0) -
            ((o && o.clientLeft) || (r && r.clientLeft) || 0)),
            (i.pageY =
              e.clientY +
              ((o && o.scrollTop) || (r && r.scrollTop) || 0) -
              ((o && o.clientTop) || (r && r.clientTop) || 0));
        }
        return n;
      },
      zA = (e, t, n) => {
        const s = e.document,
          o = { type: "ready" };
        if (n.domLoaded) {
          t(o);
          return;
        }
        const r = () =>
            s.readyState === "complete" ||
            (s.readyState === "interactive" && s.body),
          i = () => {
            xl(e, "DOMContentLoaded", i),
              xl(e, "load", i),
              n.domLoaded || ((n.domLoaded = !0), t(o)),
              (e = null);
          };
        r() ? i() : cf(e, "DOMContentLoaded", i),
          n.domLoaded || cf(e, "load", i);
      };
    class nr {
      constructor() {
        (this.domLoaded = !1),
          (this.events = {}),
          (this.count = 1),
          (this.expando = FA + (+new Date()).toString(32)),
          (this.hasMouseEnterLeave =
            "onmouseenter" in document.documentElement),
          (this.hasFocusIn = "onfocusin" in document.documentElement),
          (this.count = 1);
      }
      bind(t, n, s, o) {
        const r = this;
        let i, a, c, f, d, p, C;
        const b = window,
          x = (E) => {
            r.executeHandlers(Xr(E || b.event), i);
          };
        if (!t || t.nodeType === 3 || t.nodeType === 8) return;
        t[r.expando]
          ? (i = t[r.expando])
          : ((i = r.count++), (t[r.expando] = i), (r.events[i] = {})),
          (o = o || t);
        const y = n.split(" ");
        for (c = y.length; c--; ) {
          if (
            ((f = y[c]),
            (p = x),
            (d = C = !1),
            f === "DOMContentLoaded" && (f = "ready"),
            r.domLoaded && f === "ready" && t.readyState === "complete")
          ) {
            s.call(o, Xr({ type: f }));
            continue;
          }
          r.hasMouseEnterLeave ||
            ((d = r.mouseEnterLeave[f]),
            d &&
              (p = (E) => {
                const _ = E.currentTarget;
                let P = E.relatedTarget;
                if (P && _.contains) P = _.contains(P);
                else for (; P && P !== _; ) P = P.parentNode;
                P ||
                  ((E = Xr(E || b.event)),
                  (E.type =
                    E.type === "mouseout" ? "mouseleave" : "mouseenter"),
                  (E.target = _),
                  r.executeHandlers(E, i));
              })),
            !r.hasFocusIn &&
              (f === "focusin" || f === "focusout") &&
              ((C = !0),
              (d = f === "focusin" ? "focus" : "blur"),
              (p = (E) => {
                (E = Xr(E || b.event)),
                  (E.type = E.type === "focus" ? "focusin" : "focusout"),
                  r.executeHandlers(E, i);
              })),
            (a = r.events[i][f]),
            a
              ? f === "ready" && r.domLoaded
                ? s(Xr({ type: f }))
                : a.push({ func: s, scope: o })
              : ((r.events[i][f] = a = [{ func: s, scope: o }]),
                (a.fakeName = d),
                (a.capture = C),
                (a.nativeHandler = p),
                f === "ready" ? zA(t, p, r) : cf(t, d || f, p, C));
        }
        return (t = a = null), s;
      }
      unbind(t, n, s) {
        let o, r, i, a, c;
        if (!t || t.nodeType === 3 || t.nodeType === 8) return this;
        const f = t[this.expando];
        if (f) {
          if (((c = this.events[f]), n)) {
            const d = n.split(" ");
            for (r = d.length; r--; )
              if (((a = d[r]), (o = c[a]), o)) {
                if (s) {
                  for (i = o.length; i--; )
                    if (o[i].func === s) {
                      const p = o.nativeHandler,
                        C = o.fakeName,
                        b = o.capture;
                      (o = o.slice(0, i).concat(o.slice(i + 1))),
                        (o.nativeHandler = p),
                        (o.fakeName = C),
                        (o.capture = b),
                        (c[a] = o);
                    }
                }
                (!s || o.length === 0) &&
                  (delete c[a],
                  xl(t, o.fakeName || a, o.nativeHandler, o.capture));
              }
          } else
            ht(c, (d, p) => {
              xl(t, d.fakeName || p, d.nativeHandler, d.capture);
            }),
              (c = {});
          for (a in c) if (Fe(c, a)) return this;
          delete this.events[f];
          try {
            delete t[this.expando];
          } catch {
            t[this.expando] = null;
          }
        }
        return this;
      }
      fire(t, n, s) {
        return this.dispatch(t, n, s);
      }
      dispatch(t, n, s) {
        let o;
        if (!t || t.nodeType === 3 || t.nodeType === 8) return this;
        const r = Xr({ type: n, target: t }, s);
        do
          (o = t[this.expando]),
            o && this.executeHandlers(r, o),
            (t =
              t.parentNode ||
              t.ownerDocument ||
              t.defaultView ||
              t.parentWindow);
        while (t && !r.isPropagationStopped());
        return this;
      }
      clean(t) {
        let n, s;
        if (!t || t.nodeType === 3 || t.nodeType === 8) return this;
        if (
          (t[this.expando] && this.unbind(t),
          t.getElementsByTagName || (t = t.document),
          t && t.getElementsByTagName)
        )
          for (
            this.unbind(t), s = t.getElementsByTagName("*"), n = s.length;
            n--;

          )
            (t = s[n]), t[this.expando] && this.unbind(t);
        return this;
      }
      destroy() {
        this.events = {};
      }
      cancel(t) {
        return t && (t.preventDefault(), t.stopImmediatePropagation()), !1;
      }
      executeHandlers(t, n) {
        const s = this.events[n],
          o = s && s[t.type];
        if (o)
          for (let r = 0, i = o.length; r < i; r++) {
            const a = o[r];
            if (
              (a && a.func.call(a.scope, t) === !1 && t.preventDefault(),
              t.isImmediatePropagationStopped())
            )
              return;
          }
      }
    }
    nr.Event = new nr();
    const uf = G.each,
      HA = G.grep,
      ff = "data-mce-style",
      Zi = (e, t, n) => {
        Mt(n) || n === "" ? Gn(e, t) : fn(e, t, n);
      },
      VA = (e, t, n) => {
        const s = t.keep_values,
          o = {
            set: (i, a, c) => {
              const f = S.fromDom(i);
              Ye(t.url_converter) &&
                ke(a) &&
                (a = t.url_converter.call(
                  t.url_converter_scope || n(),
                  a,
                  c,
                  i[0]
                ));
              const d = "data-mce-" + c;
              Zi(f, d, a), Zi(f, c, a);
            },
            get: (i, a) => {
              const c = S.fromDom(i);
              return $n(c, "data-mce-" + a) || $n(c, a);
            },
          },
          r = {
            style: {
              set: (i, a) => {
                const c = S.fromDom(i);
                if (ut(a)) {
                  al(c, a);
                  return;
                }
                s && Zi(c, ff, a), Gn(c, "style"), be(a) && al(c, e.parse(a));
              },
              get: (i) => {
                const a = S.fromDom(i),
                  c = $n(a, ff) || $n(a, "style");
                return e.serialize(e.parse(c), bt(a));
              },
            },
          };
        return s && (r.href = r.src = o), r;
      },
      WA = (e, t) => {
        const n = $n(t, "style"),
          s = e.serialize(e.parse(n), bt(t));
        Zi(t, ff, s);
      },
      Qr = (e, t) => {
        let n = 0,
          s,
          o;
        if (e)
          for (s = e.nodeType, e = e.previousSibling; e; e = e.previousSibling)
            (o = e.nodeType),
              !(t && o === 3 && (o === s || !e.nodeValue.length)) &&
                (n++, (s = o));
        return n;
      },
      jA = G.makeMap(
        "fill-opacity font-weight line-height opacity orphans widows z-index zoom",
        " "
      ),
      Qh = (e) => e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()),
      st = (e, t = {}) => {
        const n = {},
          s = window,
          o = {};
        let r = 0;
        const i = !0,
          a = !0,
          c = Bh.forElement(S.fromDom(e), {
            contentCssCors: t.contentCssCors,
            referrerPolicy: t.referrerPolicy,
          }),
          f = [],
          d = t.schema ? t.schema : ko({}),
          p = af(
            {
              url_converter: t.url_converter,
              url_converter_scope: t.url_converter_scope,
            },
            t.schema
          ),
          C = t.ownEvents ? new nr() : nr.Event,
          b = d.getBlockElements(),
          x = (N) => (be(N) ? Fe(b, N) : ve(N) && Fe(b, N.nodeName)),
          y = (N) => (N && e && be(N) ? e.getElementById(N) : N),
          E = (N) => {
            const D = y(N);
            return ke(D) ? S.fromDom(D) : null;
          },
          _ = (N, D, j) => {
            let V;
            const ye = E(N);
            if (ke(ye) && Kn(ye)) {
              const Ve = ru[D];
              Ve && Ve.get ? (V = Ve.get(ye.dom, D)) : (V = $n(ye, D));
            }
            return ke(V) ? V : j != null ? j : "";
          },
          P = (N) => {
            const D = y(N);
            return Mt(D) ? [] : D.attributes;
          },
          z = (N, D, j) => {
            Me(N, (V) => {
              if (ve(V)) {
                const ye = S.fromDom(V);
                j === "" && (j = null);
                const Ve = $n(ye, D),
                  He = ru[D];
                He && He.set ? He.set(ye.dom, j, D) : Zi(ye, D, j),
                  Ve !== j &&
                    t.onSetAttrib &&
                    t.onSetAttrib({ attrElm: ye, attrName: D, attrValue: j });
              }
            });
          },
          I = (N, D) => N.cloneNode(D),
          $ = () => t.root_element || e.body,
          te = (N) => {
            const D = _h(N);
            return { x: D.x, y: D.y, w: D.width, h: D.height };
          },
          W = (N, D) => PN(e.body, y(N), D),
          q = (N, D, j) => {
            const V = (Ve, He) =>
                be(Ve)
                  ? Ve
                  : yn(Ve)
                  ? Fe(jA, He)
                    ? Ve + ""
                    : Ve + "px"
                  : $i(Ve, V),
              ye = (Ve, He, Nn) => {
                const ds = Qh(He);
                Mt(Nn) || Nn === "" ? Ch(Ve, ds) : gh(Ve, ds, V(Nn, ds));
              };
            Me(N, (Ve) => {
              const He = S.fromDom(Ve);
              be(D)
                ? ye(He, D, j)
                : ht(D, (Nn, ds) => {
                    ye(He, ds, Nn);
                  }),
                t.update_styles && WA(p, He);
            });
          },
          Q = (N, D) => {
            q(N, D);
          },
          J = (N, D, j) => {
            const V = y(N);
            if (!(Mt(V) || !ve(V)))
              return j
                ? xs(S.fromDom(V), Qh(D))
                : ((D = D.replace(/-(\D)/g, (ye, Ve) => Ve.toUpperCase())),
                  D === "float" && (D = "cssFloat"),
                  V.style ? V.style[D] : void 0);
          },
          Ee = (N) => {
            let D, j;
            const V = y(N);
            return (
              (D = J(V, "width")),
              (j = J(V, "height")),
              D.indexOf("px") === -1 && (D = 0),
              j.indexOf("px") === -1 && (j = 0),
              {
                w: parseInt(D, 10) || V.offsetWidth || V.clientWidth,
                h: parseInt(j, 10) || V.offsetHeight || V.clientHeight,
              }
            );
          },
          ae = (N) => {
            const D = y(N),
              j = W(D),
              V = Ee(D);
            return { x: j.x, y: j.y, w: V.w, h: V.h };
          },
          se = (N, D) => {
            if (!N) return !1;
            const j = Nt(N) ? N : [N];
            return M(j, (V) => Xs(S.fromDom(V), D));
          },
          Ke = (N, D, j, V) => {
            const ye = [];
            let Ve,
              He = y(N);
            for (
              V = V === void 0,
                j = j || ($().nodeName !== "BODY" ? $().parentNode : null),
                be(D) &&
                  ((Ve = D), D === "*" ? (D = ve) : (D = (Nn) => se(Nn, Ve)));
              He && !(He === j || Mt(He.nodeType) || Ku(He) || Gu(He));

            ) {
              if (!D || D(He))
                if (V) ye.push(He);
                else return [He];
              He = He.parentNode;
            }
            return V ? ye : null;
          },
          We = (N, D, j) => {
            const V = Ke(N, D, j, !1);
            return V && V.length > 0 ? V[0] : null;
          },
          lt = (N, D, j) => {
            let V = D;
            if (N) {
              for (be(D) && (V = (ye) => se(ye, D)), N = N[j]; N; N = N[j])
                if (Ye(V) && V(N)) return N;
            }
            return null;
          },
          qt = (N, D) => lt(N, D, "nextSibling"),
          Z = (N, D) => lt(N, D, "previousSibling"),
          pe = (N, D) => {
            var j, V;
            const ye =
              (V = (j = y(D)) !== null && j !== void 0 ? j : t.root_element) !==
                null && V !== void 0
                ? V
                : e;
            return pt(ye.querySelectorAll(N));
          },
          Me = function (N, D, j) {
            const V = j != null ? j : this,
              ye = be(N) ? y(N) : N;
            if (!ye) return !1;
            if (Nt(ye) && (ye.length || ye.length === 0)) {
              const Ve = [];
              return (
                uf(ye, (He, Nn) => {
                  He && Ve.push(D.call(V, be(He) ? y(He) : He, Nn));
                }),
                Ve
              );
            } else return D.call(V, ye);
          },
          De = (N, D) => {
            Me(N, (j) => {
              ht(D, (V, ye) => {
                z(j, ye, V);
              });
            });
          },
          me = (N, D) => {
            Me(N, (j) => {
              const V = S.fromDom(j);
              Vu(V, D);
            });
          },
          le = (N, D, j, V, ye) =>
            Me(N, (Ve) => {
              const He = be(D) ? e.createElement(D) : D;
              return (
                ke(j) && De(He, j),
                V &&
                  (!be(V) && V.nodeType
                    ? He.appendChild(V)
                    : be(V) && me(He, V)),
                ye ? He : Ve.appendChild(He)
              );
            }),
          xe = (N, D, j) => le(e.createElement(N), N, D, j, !0),
          Be = So.decode,
          Ct = So.encodeAllRaw,
          Lt = (N, D, j = "") => {
            let V = "",
              ye;
            V += "<" + N;
            for (ye in D) Fr(D, ye) && (V += " " + ye + '="' + Ct(D[ye]) + '"');
            return nl(j) && Fe(d.getVoidElements(), N)
              ? V + " />"
              : V + ">" + j + "</" + N + ">";
          },
          wr = (N) => {
            let D;
            const j = e.createElement("div"),
              V = e.createDocumentFragment();
            for (V.appendChild(j), N && (j.innerHTML = N); (D = j.firstChild); )
              V.appendChild(D);
            return V.removeChild(j), V;
          },
          Y = (N, D) =>
            Me(N, (j) => {
              const V = S.fromDom(j);
              return (
                D &&
                  T(Yt(V), (ye) => {
                    In(ye) && ye.dom.length === 0 ? At(ye) : Xn(V, ye);
                  }),
                At(V),
                V.dom
              );
            }),
          he = (N) =>
            Me(N, (D) => {
              const j = D.attributes;
              for (let V = j.length - 1; V >= 0; V--)
                D.removeAttributeNode(j.item(V));
            }),
          Ae = (N) => p.parse(N),
          Te = (N, D) => p.serialize(N, D),
          je = (N) => {
            let D, j;
            if (ao !== st.DOM && e === document) {
              if (n[N]) return;
              n[N] = !0;
            }
            (j = e.getElementById("mceDefaultStyles")),
              j ||
                ((j = e.createElement("style")),
                (j.id = "mceDefaultStyles"),
                (j.type = "text/css"),
                (D = e.getElementsByTagName("head")[0]),
                D.firstChild
                  ? D.insertBefore(j, D.firstChild)
                  : D.appendChild(j)),
              j.styleSheet
                ? (j.styleSheet.cssText += N)
                : j.appendChild(e.createTextNode(N));
          },
          ze = (N) => {
            N || (N = ""),
              T(N.split(","), (D) => {
                (o[D] = !0), c.load(D).catch(Ie);
              });
          },
          Le = (N, D, j) => {
            Me(N, (V) => {
              if (ve(V)) {
                const ye = S.fromDom(V),
                  Ve = D.split(" ");
                T(Ve, (He) => {
                  ke(j) ? (j ? Hi : nh)(ye, He) : Gk(ye, He);
                });
              }
            });
          },
          yt = (N, D) => {
            Le(N, D, !0);
          },
          Qt = (N, D) => {
            Le(N, D, !1);
          },
          Zt = (N, D) => {
            const j = E(N),
              V = D.split(" ");
            return it(V, (ye) => Uu(j, ye));
          },
          Bt = (N) => {
            Me(N, (D) => Ch(S.fromDom(D), "display"));
          },
          Ft = (N) => {
            Me(N, (D) => gh(S.fromDom(D), "display", "none"));
          },
          Jt = (N) => {
            const D = E(N);
            return zr(ll(D, "display"), "none");
          },
          Tt = (N) => (N || "mce_") + r++,
          hn = (N) => {
            const D = E(N);
            return ve(D.dom) ? D.dom.outerHTML : gN(D);
          },
          Lo = (N, D) => {
            Me(N, (j) => {
              ve(j) && (j.outerHTML = D);
            });
          },
          Fs = (N, D) => {
            const j = y(D);
            return Me(N, (V) => {
              const ye = j.parentNode,
                Ve = j.nextSibling;
              return Ve ? ye.insertBefore(V, Ve) : ye.appendChild(V), V;
            });
          },
          Ms = (N, D, j) =>
            Me(
              D,
              (V) => (
                Nt(V) && (N = N.cloneNode(!0)),
                j &&
                  uf(HA(V.childNodes), (ye) => {
                    N.appendChild(ye);
                  }),
                V.parentNode.replaceChild(N, V)
              )
            ),
          cs = (N, D) => {
            let j;
            return (
              N.nodeName !== D.toUpperCase() &&
                ((j = xe(D)),
                uf(P(N), (V) => {
                  z(j, V.nodeName, _(N, V.nodeName));
                }),
                Ms(j, N, !0)),
              j || N
            );
          },
          Sr = (N, D) => {
            let j = N,
              V;
            for (; j; ) {
              for (V = D; V && j !== V; ) V = V.parentNode;
              if (j === V) break;
              j = j.parentNode;
            }
            return !j && N.ownerDocument ? N.ownerDocument.documentElement : j;
          },
          Fo = (N) => {
            if (ve(N)) {
              const D =
                N.nodeName.toLowerCase() === "a" && !_(N, "href") && _(N, "id");
              if (_(N, "name") || _(N, "data-mce-bookmark") || D) return !0;
            }
            return !1;
          },
          Hn = (N, D) => {
            let j,
              V,
              ye = 0;
            if (Fo(N)) return !1;
            if (((N = N.firstChild), N)) {
              const Ve = new zt(N, N.parentNode),
                He = d ? d.getWhitespaceElements() : {};
              D = D || (d ? d.getNonEmptyElements() : null);
              do {
                if (((j = N.nodeType), ve(N))) {
                  const Nn = N.getAttribute("data-mce-bogus");
                  if (Nn) {
                    N = Ve.next(Nn === "all");
                    continue;
                  }
                  if (((V = N.nodeName.toLowerCase()), D && D[V])) {
                    if (V === "br") {
                      ye++, (N = Ve.next());
                      continue;
                    }
                    return !1;
                  }
                  if (Fo(N)) return !1;
                }
                if (
                  j === 8 ||
                  (j === 3 && !er(N.nodeValue)) ||
                  (j === 3 &&
                    N.parentNode &&
                    He[N.parentNode.nodeName] &&
                    er(N.nodeValue))
                )
                  return !1;
                N = Ve.next();
              } while (N);
            }
            return ye <= 1;
          },
          us = () => e.createRange(),
          _r = (N, D, j) => {
            let V = us(),
              ye,
              Ve,
              He;
            if (N && D)
              return (
                V.setStart(N.parentNode, Qr(N)),
                V.setEnd(D.parentNode, Qr(D)),
                (ye = V.extractContents()),
                (V = us()),
                V.setStart(D.parentNode, Qr(D) + 1),
                V.setEnd(N.parentNode, Qr(N) + 1),
                (Ve = V.extractContents()),
                (He = N.parentNode),
                He.insertBefore(tf(ao, ye), N),
                j ? He.insertBefore(j, N) : He.insertBefore(D, N),
                He.insertBefore(tf(ao, Ve), N),
                Y(N),
                j || D
              );
          },
          fs = (N, D, j, V) => {
            if (Nt(N)) {
              let ye = N.length;
              const Ve = [];
              for (; ye--; ) Ve[ye] = fs(N[ye], D, j, V);
              return Ve;
            } else
              return (
                t.collect && (N === e || N === s) && f.push([N, D, j, V]),
                C.bind(N, D, j, V || ao)
              );
          },
          su = (N, D, j) => {
            if (Nt(N)) {
              let V = N.length;
              const ye = [];
              for (; V--; ) ye[V] = su(N[V], D, j);
              return ye;
            } else {
              if (f.length > 0 && (N === e || N === s)) {
                let V = f.length;
                for (; V--; ) {
                  const ye = f[V];
                  N === ye[0] &&
                    (!D || D === ye[1]) &&
                    (!j || j === ye[2]) &&
                    C.unbind(ye[0], ye[1], ye[2]);
                }
              }
              return C.unbind(N, D, j);
            }
          },
          Ep = (N, D, j) => C.dispatch(N, D, j),
          ro = (N, D, j) => C.dispatch(N, D, j),
          io = (N) => {
            if (N && ve(N)) {
              const D = N.getAttribute("data-mce-contenteditable");
              return D && D !== "inherit"
                ? D
                : N.contentEditable !== "inherit"
                ? N.contentEditable
                : null;
            } else return null;
          },
          ao = {
            doc: e,
            settings: t,
            win: s,
            files: o,
            stdMode: i,
            boxModel: a,
            styleSheetLoader: c,
            boundEvents: f,
            styles: p,
            schema: d,
            events: C,
            isBlock: x,
            root: null,
            clone: I,
            getRoot: $,
            getViewPort: te,
            getRect: ae,
            getSize: Ee,
            getParent: We,
            getParents: Ke,
            get: y,
            getNext: qt,
            getPrev: Z,
            select: pe,
            is: se,
            add: le,
            create: xe,
            createHTML: Lt,
            createFragment: wr,
            remove: Y,
            setStyle: q,
            getStyle: J,
            setStyles: Q,
            removeAllAttribs: he,
            setAttrib: z,
            setAttribs: De,
            getAttrib: _,
            getPos: W,
            parseStyle: Ae,
            serializeStyle: Te,
            addStyle: je,
            loadCSS: ze,
            addClass: yt,
            removeClass: Qt,
            hasClass: Zt,
            toggleClass: Le,
            show: Bt,
            hide: Ft,
            isHidden: Jt,
            uniqueId: Tt,
            setHTML: me,
            getOuterHTML: hn,
            setOuterHTML: Lo,
            decode: Be,
            encode: Ct,
            insertAfter: Fs,
            replace: Ms,
            rename: cs,
            findCommonAncestor: Sr,
            run: Me,
            getAttribs: P,
            isEmpty: Hn,
            createRng: us,
            nodeIndex: Qr,
            split: _r,
            bind: fs,
            unbind: su,
            fire: ro,
            dispatch: Ep,
            getContentEditable: io,
            getContentEditableParent: (N) => {
              const D = $();
              let j = null;
              for (
                ;
                N && N !== D && ((j = io(N)), j === null);
                N = N.parentNode
              );
              return j;
            },
            destroy: () => {
              if (f.length > 0) {
                let N = f.length;
                for (; N--; ) {
                  const D = f[N];
                  C.unbind(D[0], D[1], D[2]);
                }
              }
              ht(o, (N, D) => {
                c.unload(D), delete o[D];
              });
            },
            isChildOf: (N, D) => N === D || D.contains(N),
            dumpRng: (N) =>
              "startContainer: " +
              N.startContainer.nodeName +
              ", startOffset: " +
              N.startOffset +
              ", endContainer: " +
              N.endContainer.nodeName +
              ", endOffset: " +
              N.endOffset,
          },
          ru = VA(p, t, K(ao));
        return ao;
      };
    (st.DOM = st(document)), (st.nodeIndex = Qr);
    const qA = st.DOM,
      KA = 0,
      GA = 1,
      wl = 2,
      Zh = 3;
    class Js {
      constructor(t = {}) {
        (this.states = {}),
          (this.queue = []),
          (this.scriptLoadedCallbacks = {}),
          (this.queueLoadedCallbacks = []),
          (this.loading = !1),
          (this.settings = t);
      }
      _setReferrerPolicy(t) {
        this.settings.referrerPolicy = t;
      }
      loadScript(t) {
        return new Promise((n, s) => {
          const o = qA;
          let r;
          const i = () => {
              o.remove(f), r && (r.onerror = r.onload = r = null);
            },
            a = () => {
              i(), n();
            },
            c = () => {
              i(), s("Failed to load script: " + t);
            },
            f = o.uniqueId();
          (r = document.createElement("script")),
            (r.id = f),
            (r.type = "text/javascript"),
            (r.src = G._addCacheSuffix(t)),
            this.settings.referrerPolicy &&
              o.setAttrib(r, "referrerpolicy", this.settings.referrerPolicy),
            (r.onload = a),
            (r.onerror = c),
            (
              document.getElementsByTagName("head")[0] || document.body
            ).appendChild(r);
        });
      }
      isDone(t) {
        return this.states[t] === wl;
      }
      markDone(t) {
        this.states[t] = wl;
      }
      add(t) {
        const n = this;
        return (
          n.queue.push(t),
          n.states[t] === void 0 && (n.states[t] = KA),
          new Promise((o, r) => {
            n.scriptLoadedCallbacks[t] || (n.scriptLoadedCallbacks[t] = []),
              n.scriptLoadedCallbacks[t].push({ resolve: o, reject: r });
          })
        );
      }
      load(t) {
        return this.add(t);
      }
      remove(t) {
        delete this.states[t], delete this.scriptLoadedCallbacks[t];
      }
      loadQueue() {
        const t = this.queue;
        return (this.queue = []), this.loadScripts(t);
      }
      loadScripts(t) {
        const n = this,
          s = (c, f) => {
            at(n.scriptLoadedCallbacks, f).each((d) => {
              T(d, (p) => p[c](f));
            }),
              delete n.scriptLoadedCallbacks[f];
          },
          o = (c) => {
            const f = H(c, (d) => d.status === "rejected");
            return f.length > 0
              ? Promise.reject(qe(f, ({ reason: d }) => (Nt(d) ? d : [d])))
              : Promise.resolve();
          },
          r = (c) =>
            Promise.allSettled(
              U(c, (f) =>
                n.states[f] === wl
                  ? (s("resolve", f), Promise.resolve())
                  : n.states[f] === Zh
                  ? (s("reject", f), Promise.reject(f))
                  : ((n.states[f] = GA),
                    n.loadScript(f).then(
                      () => {
                        (n.states[f] = wl), s("resolve", f);
                        const d = n.queue;
                        if (d.length > 0) return (n.queue = []), r(d).then(o);
                      },
                      () => (
                        (n.states[f] = Zh), s("reject", f), Promise.reject(f)
                      )
                    ))
              )
            ),
          i = (c) => (
            (n.loading = !0),
            r(c).then((f) => {
              n.loading = !1;
              const d = n.queueLoadedCallbacks.shift();
              return g.from(d).each(jo), o(f);
            })
          ),
          a = gg(t);
        return n.loading
          ? new Promise((c, f) => {
              n.queueLoadedCallbacks.push(() => i(a).then(c, f));
            })
          : i(a);
      }
    }
    Js.ScriptLoader = new Js();
    const $t = (e) => {
        let t = e;
        return {
          get: () => t,
          set: (o) => {
            t = o;
          },
        };
      },
      YA = (e) => ut(e) && Fe(e, "raw"),
      XA = (e) => Nt(e) && e.length > 1,
      Ji = {},
      df = $t("en"),
      Jh = () => at(Ji, df.get()),
      ts = {
        getData: () => $i(Ji, (e) => Se({}, e)),
        setCode: (e) => {
          e && df.set(e);
        },
        getCode: () => df.get(),
        add: (e, t) => {
          let n = Ji[e];
          n || (Ji[e] = n = {}),
            ht(t, (s, o) => {
              n[o.toLowerCase()] = s;
            });
        },
        translate: (e) => {
          const t = Jh().getOr({}),
            n = (i) =>
              Ye(i) ? Object.prototype.toString.call(i) : s(i) ? "" : "" + i,
            s = (i) => i === "" || i === null || i === void 0,
            o = (i) => {
              const a = n(i);
              return at(t, a.toLowerCase()).map(n).getOr(a);
            },
            r = (i) => i.replace(/{context:\w+}$/, "");
          if (s(e)) return "";
          if (YA(e)) return n(e.raw);
          if (XA(e)) {
            const i = e.slice(1),
              a = o(e[0]).replace(/\{([0-9]+)\}/g, (c, f) =>
                Fe(i, f) ? n(i[f]) : c
              );
            return r(a);
          }
          return r(o(e));
        },
        isRtl: () =>
          Jh()
            .bind((e) => at(e, "_dir"))
            .exists((e) => e === "rtl"),
        hasCode: (e) => Fe(Ji, e),
      },
      nn = () => {
        const e = [],
          t = {},
          n = {},
          s = [],
          o = (y, E) => {
            const _ = H(s, (P) => P.name === y && P.state === E);
            T(_, (P) => P.resolve());
          },
          r = (y) => Fe(t, y),
          i = (y) => Fe(n, y),
          a = (y) => {
            if (n[y]) return n[y].instance;
          },
          c = (y, E) => {
            const _ = ts.getCode(),
              P = "," + (E || "") + ",";
            !_ ||
              (E && P.indexOf("," + _ + ",") === -1) ||
              Js.ScriptLoader.add(t[y] + "/langs/" + _ + ".js");
          },
          f = (y, E) => {
            nn.languageLoad !== !1 &&
              (r(y) ? c(y, E) : x(y, "loaded").then(() => c(y, E)));
          },
          d = (y, E) => (e.push(E), (n[y] = { instance: E }), o(y, "added"), E),
          p = (y) => {
            delete t[y], delete n[y];
          },
          C = (y, E) =>
            be(E)
              ? be(y)
                ? { prefix: "", resource: E, suffix: "" }
                : { prefix: y.prefix, resource: E, suffix: y.suffix }
              : E,
          b = (y, E) => {
            if (t[y]) return Promise.resolve();
            let _ = be(E) ? E : E.prefix + E.resource + E.suffix;
            _.indexOf("/") !== 0 &&
              _.indexOf("://") === -1 &&
              (_ = nn.baseURL + "/" + _),
              (t[y] = _.substring(0, _.lastIndexOf("/")));
            const P = () => (o(y, "loaded"), Promise.resolve());
            return n[y] ? P() : Js.ScriptLoader.add(_).then(P);
          },
          x = (y, E = "added") =>
            (E === "added" && i(y)) || (E === "loaded" && r(y))
              ? Promise.resolve()
              : new Promise((_) => {
                  s.push({ name: y, state: E, resolve: _ });
                });
        return {
          items: e,
          urls: t,
          lookup: n,
          get: a,
          requireLangPack: f,
          add: d,
          remove: p,
          createUrl: C,
          load: b,
          waitFor: x,
        };
      };
    (nn.languageLoad = !0),
      (nn.baseURL = ""),
      (nn.PluginManager = nn()),
      (nn.ThemeManager = nn()),
      (nn.ModelManager = nn());
    const QA = (e) => {
        const t = $t(g.none()),
          n = () => t.get().each(e);
        return {
          clear: () => {
            n(), t.set(g.none());
          },
          isSet: () => t.get().isSome(),
          get: () => t.get(),
          set: (a) => {
            n(), t.set(g.some(a));
          },
        };
      },
      No = () => {
        const e = QA(Ie),
          t = (n) => e.get().each(n);
        return ct(Se({}, e), { on: t });
      },
      Sl = (e, t) => {
        let n = null;
        return {
          cancel: () => {
            qs(n) || (clearTimeout(n), (n = null));
          },
          throttle: (...r) => {
            qs(n) &&
              (n = setTimeout(() => {
                (n = null), e.apply(null, r);
              }, t));
          },
        };
      },
      mf = (e, t) => {
        let n = null;
        const s = () => {
          qs(n) || (clearTimeout(n), (n = null));
        };
        return {
          cancel: s,
          throttle: (...r) => {
            s(),
              (n = setTimeout(() => {
                (n = null), e.apply(null, r);
              }, t));
          },
        };
      },
      eb = (e, t) => {
        let n = [];
        return (
          T(Yt(e), (s) => {
            t(s) && (n = n.concat([s])), (n = n.concat(eb(s, t)));
          }),
          n
        );
      },
      xn = (e, t) => Zk(t, e),
      pf = K("mce-annotation"),
      ea = K("data-mce-annotation"),
      _l = K("data-mce-annotation-uid"),
      gf = K("data-mce-annotation-active"),
      tb = (e, t) => {
        const n = e.selection.getRng(),
          s = S.fromDom(n.startContainer),
          o = S.fromDom(e.getBody()),
          r = t.fold(
            () => "." + pf(),
            (f) => `[${ea()}="${f}"]`
          ),
          i = il(s, n.startOffset).getOr(s),
          a = Jo(i, r, (f) => tt(f, o)),
          c = (f, d) => (rl(f, d) ? g.some($n(f, d)) : g.none());
        return a.bind((f) =>
          c(f, `${_l()}`).bind((d) =>
            c(f, `${ea()}`).map((p) => {
              const C = nb(e, d);
              return { uid: d, name: p, elements: C };
            })
          )
        );
      },
      ZA = (e) => Kn(e) && Uu(e, pf()),
      nb = (e, t) => {
        const n = S.fromDom(e.getBody());
        return xn(n, `[${_l()}="${t}"]`);
      },
      sb = (e, t) => {
        const n = S.fromDom(e.getBody()),
          s = xn(n, `[${ea()}="${t}"]`),
          o = {};
        return (
          T(s, (r) => {
            const i = $n(r, _l()),
              a = at(o, i).getOr([]);
            o[i] = a.concat([r]);
          }),
          o
        );
      },
      JA = (e, t) => {
        const n = $t({}),
          s = () => ({ listeners: [], previous: No() }),
          o = (p, C) => {
            r(p, (b) => (C(b), b));
          },
          r = (p, C) => {
            const b = n.get(),
              x = at(b, p).getOrThunk(s),
              y = C(x);
            (b[p] = y), n.set(b);
          },
          i = (p, C, b) => {
            o(p, (x) => {
              T(x.listeners, (y) =>
                y(!0, p, { uid: C, nodes: U(b, (E) => E.dom) })
              );
            });
          },
          a = (p) => {
            o(p, (C) => {
              T(C.listeners, (b) => b(!1, p));
            });
          },
          c = (p, C) => {
            T(nb(e, p), (b) => {
              C ? fn(b, gf(), "true") : Gn(b, gf());
            });
          },
          f = mf(() => {
            const p = jn(t.getNames());
            T(p, (C) => {
              r(C, (b) => {
                const x = b.previous.get();
                return (
                  tb(e, g.some(C)).fold(
                    () => {
                      x.each((y) => {
                        a(C), b.previous.clear(), c(y, !1);
                      });
                    },
                    ({ uid: y, name: E, elements: _ }) => {
                      zr(x, y) ||
                        (x.each((P) => c(P, !1)),
                        i(E, y, _),
                        b.previous.set(y),
                        c(y, !0));
                    }
                  ),
                  { previous: b.previous, listeners: b.listeners }
                );
              });
            });
          }, 30);
        return (
          e.on("remove", () => {
            f.cancel();
          }),
          e.on("NodeChange", () => {
            f.throttle();
          }),
          {
            addListener: (p, C) => {
              r(p, (b) => ({
                previous: b.previous,
                listeners: b.listeners.concat([C]),
              }));
            },
          }
        );
      },
      eT = (e, t) => {
        const n = (s) => g.from(s.attr(ea())).bind(t.lookup);
        e.serializer.addTempAttr(gf()),
          e.serializer.addNodeFilter("span", (s) => {
            T(s, (o) => {
              n(o).each((r) => {
                r.persistent === !1 && o.unwrap();
              });
            });
          });
      },
      tT = () => {
        const e = {};
        return {
          register: (o, r) => {
            e[o] = { name: o, settings: r };
          },
          lookup: (o) => at(e, o).map((r) => r.settings),
          getNames: () => Jn(e),
        };
      };
    let ob = 0;
    const rb = (e) => {
        const n = new Date().getTime(),
          s = Math.floor(Math.random() * 1e9);
        return ob++, e + "_" + s + ob + String(n);
      },
      nT = (e, t) => {
        T(t, (n) => {
          Hi(e, n);
        });
      },
      ib = (e, t) => S.fromDom(e.dom.cloneNode(t)),
      Zr = (e) => ib(e, !1),
      ab = (e) => ib(e, !0),
      sT = (e, t) => {
        const n = S.fromTag(t),
          s = Qg(e);
        return Es(n, s), n;
      },
      oT = (e, t) => {
        const n = sT(e, t);
        vo(e, n);
        const s = Yt(e);
        return Xo(n, s), At(e), n;
      },
      lb = (e, t, n = mt) => {
        const s = new zt(e, t),
          o = (r) => {
            let i;
            do i = s[r]();
            while (i && !ne(i) && !n(i));
            return g.from(i).filter(ne);
          };
        return {
          current: () => g.from(s.current()).filter(ne),
          next: () => o("next"),
          prev: () => o("prev"),
          prev2: () => o("prev2"),
        };
      },
      sr = (e, t) => {
        const n = t || ((i) => e.isBlock(i) || Dt(i) || wt(i)),
          s = (i, a, c, f) => {
            if (ne(i)) {
              const d = f(i, a, i.data);
              if (d !== -1) return g.some({ container: i, offset: d });
            }
            return c().bind((d) => s(d.container, d.offset, c, f));
          };
        return {
          backwards: (i, a, c, f) => {
            const d = lb(i, f, n);
            return s(
              i,
              a,
              () => d.prev().map((p) => ({ container: p, offset: p.length })),
              c
            ).getOrNull();
          },
          forwards: (i, a, c, f) => {
            const d = lb(i, f, n);
            return s(
              i,
              a,
              () => d.next().map((p) => ({ container: p, offset: 0 })),
              c
            ).getOrNull();
          },
        };
      },
      Jr = Math.round,
      or = (e) =>
        e
          ? {
              left: Jr(e.left),
              top: Jr(e.top),
              bottom: Jr(e.bottom),
              right: Jr(e.right),
              width: Jr(e.width),
              height: Jr(e.height),
            }
          : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 },
      cb = (e, t) => (
        (e = or(e)),
        t || (e.left = e.left + e.width),
        (e.right = e.left),
        (e.width = 0),
        e
      ),
      rT = (e, t) =>
        e.left === t.left &&
        e.top === t.top &&
        e.bottom === t.bottom &&
        e.right === t.right,
      ub = (e, t, n) => e >= 0 && e <= Math.min(t.height, n.height) / 2,
      ta = (e, t) => {
        const n = Math.min(t.height / 2, e.height / 2);
        return e.bottom - n < t.top
          ? !0
          : e.top > t.bottom
          ? !1
          : ub(t.top - e.bottom, e, t);
      },
      na = (e, t) =>
        e.top > t.bottom
          ? !0
          : e.bottom < t.top
          ? !1
          : ub(t.bottom - e.top, e, t),
      iT = (e, t, n) =>
        t >= e.left && t <= e.right && n >= e.top && n <= e.bottom,
      aT = (e) =>
        X(
          e,
          (t, n) =>
            t.fold(
              () => g.some(n),
              (s) => {
                const o = Math.min(n.left, s.left),
                  r = Math.min(n.top, s.top),
                  i = Math.max(n.right, s.right),
                  a = Math.max(n.bottom, s.bottom);
                return g.some({
                  top: r,
                  right: i,
                  bottom: a,
                  left: o,
                  width: i - o,
                  height: a - r,
                });
              }
            ),
          g.none()
        ),
      fb = (e, t, n) => {
        const s = Math.max(Math.min(t, e.left + e.width), e.left),
          o = Math.max(Math.min(n, e.top + e.height), e.top);
        return Math.sqrt((t - s) * (t - s) + (n - o) * (n - o));
      },
      lT = (e, t) =>
        Math.max(0, Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top)),
      cT = (e, t, n) => Math.min(Math.max(e, t), n),
      kl = (e) => {
        const t = e.startContainer,
          n = e.startOffset;
        return t.hasChildNodes() && e.endOffset === n + 1
          ? t.childNodes[n]
          : null;
      },
      Ao = (e, t) => {
        if (ve(e) && e.hasChildNodes()) {
          const n = e.childNodes,
            s = cT(t, 0, n.length - 1);
          return n[s];
        } else return e;
      },
      uT = (e, t) => {
        if (!(t < 0 && ve(e) && e.hasChildNodes())) return Ao(e, t);
      },
      fT = new RegExp(
        "[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962-\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2-\u09E3\u0A01-\u0A02\u0A3C\u0A41-\u0A42\u0A47-\u0A48\u0A4B-\u0A4D\u0A51\u0A70-\u0A71\u0A75\u0A81-\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7-\u0AC8\u0ACD\u0AE2-\u0AE3\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B57\u0B62-\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55-\u0C56\u0C62-\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC-\u0CCD\u0CD5-\u0CD6\u0CE2-\u0CE3\u0D01\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62-\u0D63\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB-\u0EBC\u0EC8-\u0ECD\u0F18-\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039-\u103A\u103D-\u103E\u1058-\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17B4-\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193B\u1A17-\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1ABE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80-\u1B81\u1BA2-\u1BA5\u1BA8-\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8-\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8-\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u200C-\u200D\u20D0-\u20DC\u20DD-\u20E0\u20E1\u20E2-\u20E4\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u302E-\u302F\u3099-\u309A\uA66F\uA670-\uA672\uA674-\uA67D\uA69E-\uA69F\uA6F0-\uA6F1\uA802\uA806\uA80B\uA825-\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31-\uAA32\uAA35-\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7-\uAAB8\uAABE-\uAABF\uAAC1\uAAEC-\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E-\uFF9F]"
      ),
      db = (e) => typeof e == "string" && e.charCodeAt(0) >= 768 && fT.test(e),
      dT =
        (...e) =>
        (t) => {
          for (let n = 0; n < e.length; n++) if (e[n](t)) return !0;
          return !1;
        },
      mT =
        (...e) =>
        (t) => {
          for (let n = 0; n < e.length; n++) if (!e[n](t)) return !1;
          return !0;
        },
      mb = ve,
      pT = es,
      pb = fl("display", "block table"),
      gT = fl("float", "left right"),
      sa = mT(mb, pT, hs(gT)),
      hT = hs(fl("white-space", "pre pre-line pre-wrap")),
      oa = ne,
      hf = Dt,
      gb = st.nodeIndex,
      Nl = uT,
      bf = (e) => ("createRange" in e ? e.createRange() : st.DOM.createRng()),
      Cf = (e) => e && /[\r\n\t ]/.test(e),
      hb = (e) => !!e.setStart && !!e.setEnd,
      yf = (e) => {
        const t = e.startContainer,
          n = e.startOffset;
        if (Cf(e.toString()) && hT(t.parentNode) && ne(t)) {
          const s = t.data;
          if (Cf(s[n - 1]) || Cf(s[n + 1])) return !0;
        }
        return !1;
      },
      bT = (e) => {
        const t = e.ownerDocument,
          n = bf(t),
          s = t.createTextNode(Xt),
          o = e.parentNode;
        o.insertBefore(s, e), n.setStart(s, 0), n.setEnd(s, 1);
        const r = or(n.getBoundingClientRect());
        return o.removeChild(s), r;
      },
      CT = (e) => {
        const t = e.startContainer,
          n = e.endContainer,
          s = e.startOffset,
          o = e.endOffset;
        if (t === n && ne(n) && s === 0 && o === 1) {
          const r = e.cloneRange();
          return r.setEndAfter(n), To(r);
        } else return null;
      },
      bb = (e) =>
        e.left === 0 && e.right === 0 && e.top === 0 && e.bottom === 0,
      To = (e) => {
        let t;
        const n = e.getClientRects();
        return (
          n.length > 0 ? (t = or(n[0])) : (t = or(e.getBoundingClientRect())),
          !hb(e) && hf(e) && bb(t) ? bT(e) : bb(t) && hb(e) ? CT(e) : t
        );
      },
      rr = (e, t) => {
        const n = cb(e, t);
        return (n.width = 1), (n.right = n.left + 1), n;
      },
      yT = (e) => {
        const t = [],
          n = (i) => {
            i.height !== 0 &&
              ((t.length > 0 && rT(i, t[t.length - 1])) || t.push(i));
          },
          s = (i, a) => {
            const c = bf(i.ownerDocument);
            if (a < i.data.length) {
              if (db(i.data[a])) return t;
              if (
                db(i.data[a - 1]) &&
                (c.setStart(i, a), c.setEnd(i, a + 1), !yf(c))
              )
                return n(rr(To(c), !1)), t;
            }
            a > 0 &&
              (c.setStart(i, a - 1), c.setEnd(i, a), yf(c) || n(rr(To(c), !1))),
              a < i.data.length &&
                (c.setStart(i, a),
                c.setEnd(i, a + 1),
                yf(c) || n(rr(To(c), !0)));
          },
          o = e.container(),
          r = e.offset();
        if (oa(o)) return s(o, r), t;
        if (mb(o))
          if (e.isAtEnd()) {
            const i = Nl(o, r);
            oa(i) && s(i, i.data.length), sa(i) && !hf(i) && n(rr(To(i), !1));
          } else {
            const i = Nl(o, r);
            if ((oa(i) && s(i, 0), sa(i) && e.isAtEnd()))
              return n(rr(To(i), !1)), t;
            const a = Nl(e.container(), e.offset() - 1);
            sa(a) && !hf(a) && (pb(a) || pb(i) || !sa(i)) && n(rr(To(a), !1)),
              sa(i) && n(rr(To(i), !0));
          }
        return t;
      },
      L = (e, t, n) => {
        const s = () => (oa(e), t === 0),
          o = () => (oa(e) ? t >= e.data.length : t >= e.childNodes.length),
          r = () => {
            const d = bf(e.ownerDocument);
            return d.setStart(e, t), d.setEnd(e, t), d;
          },
          i = () => (n || (n = yT(L(e, t))), n),
          a = () => i().length > 0,
          c = (d) => d && e === d.container() && t === d.offset(),
          f = (d) => Nl(e, d ? t - 1 : t);
        return {
          container: K(e),
          offset: K(t),
          toRange: r,
          getClientRects: i,
          isVisible: a,
          isAtStart: s,
          isAtEnd: o,
          isEqual: c,
          getNode: f,
        };
      };
    (L.fromRangeStart = (e) => L(e.startContainer, e.startOffset)),
      (L.fromRangeEnd = (e) => L(e.endContainer, e.endOffset)),
      (L.after = (e) => L(e.parentNode, gb(e) + 1)),
      (L.before = (e) => L(e.parentNode, gb(e))),
      (L.isAbove = (e, t) =>
        En(Ut(t.getClientRects()), Cs(e.getClientRects()), ta).getOr(!1)),
      (L.isBelow = (e, t) =>
        En(Cs(t.getClientRects()), Ut(e.getClientRects()), na).getOr(!1)),
      (L.isAtStart = (e) => (e ? e.isAtStart() : !1)),
      (L.isAtEnd = (e) => (e ? e.isAtEnd() : !1)),
      (L.isTextPosition = (e) => (e ? ne(e.container()) : !1)),
      (L.isElementPosition = (e) => L.isTextPosition(e) === !1);
    const Al = (e, t) => {
        ne(t) && t.data.length === 0 && e.remove(t);
      },
      vT = (e, t, n) => {
        t.insertNode(n), Al(e, n.previousSibling), Al(e, n.nextSibling);
      },
      ET = (e, t, n) => {
        const s = g.from(n.firstChild),
          o = g.from(n.lastChild);
        t.insertNode(n),
          s.each((r) => Al(e, r.previousSibling)),
          o.each((r) => Al(e, r.nextSibling));
      },
      vf = (e, t, n) => {
        Gu(n) ? ET(e, t, n) : vT(e, t, n);
      },
      ns = ne,
      Cb = Zo,
      yb = st.nodeIndex,
      vb = (e) => {
        const t = e.parentNode;
        return Cb(t) ? vb(t) : t;
      },
      Ef = (e) =>
        e
          ? tl(
              e.childNodes,
              (t, n) => (
                Cb(n) && n.nodeName !== "BR"
                  ? (t = t.concat(Ef(n)))
                  : t.push(n),
                t
              ),
              []
            )
          : [],
      xT = (e, t) => {
        for (; (e = e.previousSibling) && ns(e); ) t += e.data.length;
        return t;
      },
      Eb = (e) => (t) => e === t,
      wT = (e) => {
        let t, n;
        (t = Ef(vb(e))), (n = bg(t, Eb(e), e)), (t = t.slice(0, n + 1));
        const s = tl(t, (o, r, i) => (ns(r) && ns(t[i - 1]) && o++, o), 0);
        return (t = Mr(t, Qn([e.nodeName]))), (n = bg(t, Eb(e), e)), n - s;
      },
      xb = (e) => {
        let t;
        return (
          ns(e) ? (t = "text()") : (t = e.nodeName.toLowerCase()),
          t + "[" + wT(e) + "]"
        );
      },
      ST = (e, t, n) => {
        const s = [];
        for (t = t.parentNode; t !== e && !(n && n(t)); t = t.parentNode)
          s.push(t);
        return s;
      },
      wb = (e, t) => {
        let n,
          s,
          o = [],
          r,
          i,
          a;
        return (
          (n = t.container()),
          (s = t.offset()),
          ns(n)
            ? (r = xT(n, s))
            : ((i = n.childNodes),
              s >= i.length
                ? ((r = "after"), (s = i.length - 1))
                : (r = "before"),
              (n = i[s])),
          o.push(xb(n)),
          (a = ST(e, n)),
          (a = Mr(a, hs(Zo))),
          (o = o.concat(Du(a, (c) => xb(c)))),
          o.reverse().join("/") + "," + r
        );
      },
      _T = (e, t, n) => {
        let s = Ef(e);
        return (
          (s = Mr(s, (o, r) => !ns(o) || !ns(s[r - 1]))),
          (s = Mr(s, Qn([t]))),
          s[n]
        );
      },
      kT = (e, t) => {
        let n = e,
          s = 0,
          o;
        for (; ns(n); ) {
          if (((o = n.data.length), t >= s && t <= s + o)) {
            (e = n), (t = t - s);
            break;
          }
          if (!ns(n.nextSibling)) {
            (e = n), (t = o);
            break;
          }
          (s += o), (n = n.nextSibling);
        }
        return ns(e) && t > e.data.length && (t = e.data.length), L(e, t);
      },
      Sb = (e, t) => {
        let n;
        if (!t) return null;
        const s = t.split(","),
          o = s[0].split("/");
        n = s.length > 1 ? s[1] : "before";
        const r = tl(
          o,
          (i, a) => {
            const c = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(a);
            return c
              ? (c[1] === "text()" && (c[1] = "#text"),
                _T(i, c[1], parseInt(c[2], 10)))
              : null;
          },
          e
        );
        return r
          ? ns(r)
            ? kT(r, parseInt(n, 10))
            : (n === "after" ? (n = yb(r) + 1) : (n = yb(r)),
              L(r.parentNode, n))
          : null;
      },
      Tl = wt,
      NT = (e, t, n) => {
        let s, o;
        for (
          o = e(t.data.slice(0, n)).length, s = t.previousSibling;
          s && ne(s);
          s = s.previousSibling
        )
          o += e(s.data).length;
        return o;
      },
      _b = (e, t, n, s, o) => {
        let r = s[o ? "startContainer" : "endContainer"],
          i = s[o ? "startOffset" : "endOffset"];
        const a = [];
        let c,
          f = 0;
        const d = e.getRoot();
        for (
          ne(r)
            ? a.push(n ? NT(t, r, i) : i)
            : ((c = r.childNodes),
              i >= c.length &&
                c.length &&
                ((f = 1), (i = Math.max(0, c.length - 1))),
              a.push(e.nodeIndex(c[i], n) + f));
          r && r !== d;
          r = r.parentNode
        )
          a.push(e.nodeIndex(r, n));
        return a;
      },
      AT = (e, t, n, s) => {
        const o = t.dom,
          r = {};
        return (
          (r.start = _b(o, e, n, s, !0)),
          t.isCollapsed() || (r.end = _b(o, e, n, s, !1)),
          Fh(s) && (r.isFakeCaret = !0),
          r
        );
      },
      xf = (e, t, n) => {
        let s = 0;
        return (
          G.each(e.select(t), (o) => {
            if (o.getAttribute("data-mce-bogus") !== "all") {
              if (o === n) return !1;
              s++;
            }
          }),
          s
        );
      },
      kb = (e, t) => {
        let n, s, o;
        const r = t ? "start" : "end";
        (n = e[r + "Container"]),
          (s = e[r + "Offset"]),
          ve(n) &&
            n.nodeName === "TR" &&
            ((o = n.childNodes),
            (n = o[Math.min(t ? s : s - 1, o.length - 1)]),
            n &&
              ((s = t ? 0 : n.childNodes.length),
              e["set" + (t ? "Start" : "End")](n, s)));
      },
      Nb = (e) => (kb(e, !0), kb(e, !1), e),
      Ab = (e, t) => {
        let n;
        if (ve(e) && ((e = Ao(e, t)), Tl(e))) return e;
        if (
          Ln(e) &&
          (ne(e) && Kr(e) && (e = e.parentNode),
          (n = e.previousSibling),
          Tl(n) || ((n = e.nextSibling), Tl(n)))
        )
          return n;
      },
      TT = (e) =>
        Ab(e.startContainer, e.startOffset) || Ab(e.endContainer, e.endOffset),
      Tb = (e, t, n) => {
        const s = n.getNode();
        let o = s ? s.nodeName : null;
        const r = n.getRng();
        if (Tl(s) || o === "IMG") return { name: o, index: xf(n.dom, o, s) };
        const i = TT(r);
        return i
          ? ((o = i.tagName), { name: o, index: xf(n.dom, o, i) })
          : AT(e, n, t, r);
      },
      RT = (e) => {
        const t = e.getRng();
        return {
          start: wb(e.dom.getRoot(), L.fromRangeStart(t)),
          end: wb(e.dom.getRoot(), L.fromRangeEnd(t)),
        };
      },
      PT = (e) => ({ rng: e.getRng() }),
      Rb = (e, t, n) => {
        const s = {
          "data-mce-type": "bookmark",
          id: t,
          style: "overflow:hidden;line-height:0px",
        };
        return n ? e.create("span", s, "&#xFEFF;") : e.create("span", s);
      },
      Pb = (e, t) => {
        const n = e.dom;
        let s = e.getRng();
        const o = n.uniqueId(),
          r = e.isCollapsed(),
          i = e.getNode(),
          a = i.nodeName;
        if (a === "IMG") return { name: a, index: xf(n, a, i) };
        const c = Nb(s.cloneRange());
        if (!r) {
          c.collapse(!1);
          const d = Rb(n, o + "_end", t);
          vf(n, c, d);
        }
        (s = Nb(s)), s.collapse(!0);
        const f = Rb(n, o + "_start", t);
        return vf(n, s, f), e.moveToBookmark({ id: o, keep: !0 }), { id: o };
      },
      OT = (e, t, n) =>
        t === 2 ? Tb(wo, n, e) : t === 3 ? RT(e) : t ? PT(e) : Pb(e, !1),
      Ob = oe(Tb, xt, !0),
      Db = (e) => {
        const t = (r) => r(e),
          n = K(e),
          s = () => o,
          o = {
            tag: !0,
            inner: e,
            fold: (r, i) => i(e),
            isValue: rt,
            isError: mt,
            map: (r) => dn.value(r(e)),
            mapError: s,
            bind: t,
            exists: t,
            forall: t,
            getOr: n,
            or: s,
            getOrThunk: n,
            orThunk: s,
            getOrDie: n,
            each: (r) => {
              r(e);
            },
            toOptional: () => g.some(e),
          };
        return o;
      },
      Bb = (e) => {
        const t = () => n,
          n = {
            tag: !1,
            inner: e,
            fold: (s, o) => s(e),
            isValue: mt,
            isError: rt,
            map: t,
            mapError: (s) => dn.error(s(e)),
            bind: t,
            exists: mt,
            forall: rt,
            getOr: xt,
            or: xt,
            getOrThunk: Br,
            orThunk: Br,
            getOrDie: bs(String(e)),
            each: Ie,
            toOptional: g.none,
          };
        return n;
      },
      dn = {
        value: Db,
        error: Bb,
        fromOption: (e, t) => e.fold(() => Bb(t), Db),
      },
      _s = {
        generate: (e) => {
          if (!Nt(e)) throw new Error("cases must be an array");
          if (e.length === 0)
            throw new Error("there must be at least one case");
          const t = [],
            n = {};
          return (
            T(e, (s, o) => {
              const r = Jn(s);
              if (r.length !== 1)
                throw new Error("one and only one name per case");
              const i = r[0],
                a = s[i];
              if (n[i] !== void 0)
                throw new Error("duplicate key detected:" + i);
              if (i === "cata")
                throw new Error("cannot have a case named cata (sorry)");
              if (!Nt(a)) throw new Error("case arguments must be an array");
              t.push(i),
                (n[i] = (...c) => {
                  const f = c.length;
                  if (f !== a.length)
                    throw new Error(
                      "Wrong number of arguments to case " +
                        i +
                        ". Expected " +
                        a.length +
                        " (" +
                        a +
                        "), got " +
                        f
                    );
                  return {
                    fold: (...p) => {
                      if (p.length !== e.length)
                        throw new Error(
                          "Wrong number of arguments to fold. Expected " +
                            e.length +
                            ", got " +
                            p.length
                        );
                      return p[o].apply(null, c);
                    },
                    match: (p) => {
                      const C = Jn(p);
                      if (t.length !== C.length)
                        throw new Error(
                          "Wrong number of arguments to match. Expected: " +
                            t.join(",") +
                            `
Actual: ` +
                            C.join(",")
                        );
                      if (!it(t, (x) => R(C, x)))
                        throw new Error(
                          "Not all branches were specified when using match. Specified: " +
                            C.join(", ") +
                            `
Required: ` +
                            t.join(", ")
                        );
                      return p[i].apply(null, c);
                    },
                    log: (p) => {
                      console.log(p, {
                        constructors: t,
                        constructor: i,
                        params: c,
                      });
                    },
                  };
                });
            }),
            n
          );
        },
      };
    _s.generate([
      { bothErrors: ["error1", "error2"] },
      { firstError: ["error1", "value2"] },
      { secondError: ["value1", "error2"] },
      { bothValues: ["value1", "value2"] },
    ]);
    const DT = (e) => {
        const t = [],
          n = [];
        return (
          T(e, (s) => {
            s.fold(
              (o) => {
                t.push(o);
              },
              (o) => {
                n.push(o);
              }
            );
          }),
          { errors: t, values: n }
        );
      },
      BT = (e) => e.type === "inline-command" || e.type === "inline-format",
      IT = (e) => e.type === "block-command" || e.type === "block-format",
      $T = (e) =>
        jn(e, (t, n) =>
          t.start.length === n.start.length
            ? 0
            : t.start.length > n.start.length
            ? -1
            : 1
        ),
      LT = (e) => {
        const t = (s) => dn.error({ message: s, pattern: e }),
          n = (s, o, r) => {
            if (e.format !== void 0) {
              let i;
              if (Nt(e.format)) {
                if (!it(e.format, be))
                  return t(
                    s + " pattern has non-string items in the `format` array"
                  );
                i = e.format;
              } else if (be(e.format)) i = [e.format];
              else return t(s + " pattern has non-string `format` parameter");
              return dn.value(o(i));
            } else
              return e.cmd !== void 0
                ? be(e.cmd)
                  ? dn.value(r(e.cmd, e.value))
                  : t(s + " pattern has non-string `cmd` parameter")
                : t(
                    s + " pattern is missing both `format` and `cmd` parameters"
                  );
          };
        if (!ut(e)) return t("Raw pattern is not an object");
        if (!be(e.start)) return t("Raw pattern is missing `start` parameter");
        if (e.end !== void 0) {
          if (!be(e.end))
            return t("Inline pattern has non-string `end` parameter");
          if (e.start.length === 0 && e.end.length === 0)
            return t("Inline pattern has empty `start` and `end` parameters");
          let s = e.start,
            o = e.end;
          return (
            o.length === 0 && ((o = s), (s = "")),
            n(
              "Inline",
              (r) => ({ type: "inline-format", start: s, end: o, format: r }),
              (r, i) => ({
                type: "inline-command",
                start: s,
                end: o,
                cmd: r,
                value: i,
              })
            )
          );
        } else
          return e.replacement !== void 0
            ? be(e.replacement)
              ? e.start.length === 0
                ? t("Replacement pattern has empty `start` parameter")
                : dn.value({
                    type: "inline-command",
                    start: "",
                    end: e.start,
                    cmd: "mceInsertContent",
                    value: e.replacement,
                  })
              : t("Replacement pattern has non-string `replacement` parameter")
            : e.start.length === 0
            ? t("Block pattern has empty `start` parameter")
            : n(
                "Block",
                (s) => ({ type: "block-format", start: e.start, format: s[0] }),
                (s, o) => ({
                  type: "block-command",
                  start: e.start,
                  cmd: s,
                  value: o,
                })
              );
      },
      FT = (e) => $T(H(e, IT)),
      Ib = (e) => H(e, BT),
      MT = (e) => ({ inlinePatterns: Ib(e), blockPatterns: FT(e) }),
      UT = (e) => {
        const t = DT(U(e, LT));
        return (
          T(t.errors, (n) => console.error(n.message, n.pattern)), t.values
        );
      },
      wf = Co().deviceType,
      zT = wf.isTouch(),
      HT = st.DOM,
      VT = (e) => {
        const t =
          e.indexOf("=") > 0
            ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/)
            : e.split(",");
        return X(
          t,
          (n, s) => {
            const o = s.split("="),
              r = o[0],
              i = o.length > 1 ? o[1] : r;
            return (n[Ur(r)] = Ur(i)), n;
          },
          {}
        );
      },
      $b = (e) => Bn(e, RegExp),
      ue = (e) => (t) => t.options.get(e),
      Sf = (e) => be(e) || ut(e),
      Lb =
        (e, t = "") =>
        (n) => {
          const s = be(n);
          if (s)
            if (n.indexOf("=") !== -1) {
              const o = VT(n);
              return { value: at(o, e.id).getOr(t), valid: s };
            } else return { value: n, valid: s };
          else return { valid: !1, message: "Must be a string." };
        },
      WT = (e) => {
        const t = e.options.register;
        t("id", { processor: "string", default: e.id }),
          t("selector", { processor: "string" }),
          t("target", { processor: "object" }),
          t("suffix", { processor: "string" }),
          t("cache_suffix", { processor: "string" }),
          t("base_url", { processor: "string" }),
          t("referrer_policy", { processor: "string", default: "" }),
          t("language_load", { processor: "boolean" }),
          t("inline", { processor: "boolean", default: !1 }),
          t("iframe_attrs", { processor: "object", default: {} }),
          t("doctype", { processor: "string", default: "<!DOCTYPE html>" }),
          t("document_base_url", {
            processor: "string",
            default: e.documentBaseUrl,
          }),
          t("body_id", { processor: Lb(e, "tinymce"), default: "tinymce" }),
          t("body_class", { processor: Lb(e), default: "" }),
          t("content_security_policy", { processor: "string", default: "" }),
          t("br_in_pre", { processor: "boolean", default: !0 }),
          t("forced_root_block", {
            processor: (n) => {
              const s = be(n) && Gs(n);
              return s
                ? { value: n, valid: s }
                : { valid: !1, message: "Must be a non-empty string." };
            },
            default: "p",
          }),
          t("forced_root_block_attrs", { processor: "object", default: {} }),
          t("br_newline_selector", {
            processor: "string",
            default: ".mce-toc h2,figcaption,caption",
          }),
          t("no_newline_selector", { processor: "string", default: "" }),
          t("keep_styles", { processor: "boolean", default: !0 }),
          t("end_container_on_empty_block", {
            processor: "boolean",
            default: !1,
          }),
          t("font_size_style_values", {
            processor: "string",
            default: "xx-small,x-small,small,medium,large,x-large,xx-large",
          }),
          t("font_size_legacy_values", {
            processor: "string",
            default: "xx-small,small,medium,large,x-large,xx-large,300%",
          }),
          t("font_size_classes", { processor: "string", default: "" }),
          t("automatic_uploads", { processor: "boolean", default: !0 }),
          t("images_reuse_filename", { processor: "boolean", default: !1 }),
          t("images_replace_blob_uris", { processor: "boolean", default: !0 }),
          t("icons", { processor: "string", default: "" }),
          t("icons_url", { processor: "string", default: "" }),
          t("images_upload_url", { processor: "string", default: "" }),
          t("images_upload_base_path", { processor: "string", default: "" }),
          t("images_upload_base_path", { processor: "string", default: "" }),
          t("images_upload_credentials", { processor: "boolean", default: !1 }),
          t("images_upload_handler", { processor: "function" }),
          t("language", { processor: "string", default: "en" }),
          t("language_url", { processor: "string", default: "" }),
          t("entity_encoding", { processor: "string", default: "named" }),
          t("indent", { processor: "boolean", default: !0 }),
          t("indent_before", {
            processor: "string",
            default:
              "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
          }),
          t("indent_after", {
            processor: "string",
            default:
              "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
          }),
          t("indent_use_margin", { processor: "boolean", default: !1 }),
          t("indentation", { processor: "string", default: "40px" }),
          t("content_css", {
            processor: (n) => {
              const s = n === !1 || be(n) || Ks(n, be);
              return s
                ? be(n)
                  ? { value: U(n.split(","), Ur), valid: s }
                  : Nt(n)
                  ? { value: n, valid: s }
                  : n === !1
                  ? { value: [], valid: s }
                  : { value: n, valid: s }
                : {
                    valid: !1,
                    message: "Must be false, a string or an array of strings.",
                  };
            },
            default: Nf(e) ? [] : ["default"],
          }),
          t("content_style", { processor: "string" }),
          t("content_css_cors", { processor: "boolean", default: !1 }),
          t("font_css", {
            processor: (n) => {
              const s = be(n) || Ks(n, be);
              return s
                ? { value: Nt(n) ? n : U(n.split(","), Ur), valid: s }
                : {
                    valid: !1,
                    message: "Must be a string or an array of strings.",
                  };
            },
            default: [],
          }),
          t("inline_boundaries", { processor: "boolean", default: !0 }),
          t("inline_boundaries_selector", {
            processor: "string",
            default: "a[href],code,.mce-annotation",
          }),
          t("object_resizing", {
            processor: (n) => {
              const s = gs(n) || be(n);
              return s
                ? n === !1 || wf.isiPhone() || wf.isiPad()
                  ? { value: "", valid: s }
                  : {
                      value:
                        n === !0
                          ? "table,img,figure.image,div,video,iframe"
                          : n,
                      valid: s,
                    }
                : { valid: !1, message: "Must be boolean or a string" };
            },
            default: !zT,
          }),
          t("resize_img_proportional", { processor: "boolean", default: !0 }),
          t("event_root", { processor: "object" }),
          t("service_message", { processor: "string" }),
          t("theme", {
            processor: (n) => n === !1 || be(n) || Ye(n),
            default: "silver",
          }),
          t("theme_url", { processor: "string" }),
          t("formats", { processor: "object" }),
          t("format_empty_lines", { processor: "boolean", default: !1 }),
          t("preview_styles", {
            processor: (n) => {
              const s = n === !1 || be(n);
              return s
                ? { value: n === !1 ? "" : n, valid: s }
                : { valid: !1, message: "Must be false or a string" };
            },
            default:
              "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow",
          }),
          t("custom_ui_selector", { processor: "string", default: "" }),
          t("hidden_input", { processor: "boolean", default: !0 }),
          t("submit_patch", { processor: "boolean", default: !0 }),
          t("encoding", { processor: "string" }),
          t("add_form_submit_trigger", { processor: "boolean", default: !0 }),
          t("add_unload_trigger", { processor: "boolean", default: !0 }),
          t("custom_undo_redo_levels", { processor: "number", default: 0 }),
          t("disable_nodechange", { processor: "boolean", default: !1 }),
          t("readonly", { processor: "boolean", default: !1 }),
          t("plugins", { processor: "string[]", default: [] }),
          t("external_plugins", { processor: "object" }),
          t("forced_plugins", { processor: "string[]" }),
          t("model", {
            processor: "string",
            default: e.hasPlugin("rtc") ? "plugin" : "dom",
          }),
          t("model_url", { processor: "string" }),
          t("block_unsupported_drop", { processor: "boolean", default: !0 }),
          t("visual", { processor: "boolean", default: !0 }),
          t("visual_table_class", {
            processor: "string",
            default: "mce-item-table",
          }),
          t("visual_anchor_class", {
            processor: "string",
            default: "mce-item-anchor",
          }),
          t("iframe_aria_text", {
            processor: "string",
            default: "Rich Text Area. Press ALT-0 for help.",
          }),
          t("setup", { processor: "function" }),
          t("init_instance_callback", { processor: "function" }),
          t("url_converter", { processor: "function", default: e.convertURL }),
          t("url_converter_scope", { processor: "object", default: e }),
          t("urlconverter_callback", { processor: "function" }),
          t("allow_conditional_comments", {
            processor: "boolean",
            default: !1,
          }),
          t("allow_html_data_urls", { processor: "boolean", default: !1 }),
          t("allow_svg_data_urls", { processor: "boolean" }),
          t("allow_html_in_named_anchor", {
            processor: "boolean",
            default: !1,
          }),
          t("allow_script_urls", { processor: "boolean", default: !1 }),
          t("allow_unsafe_link_target", { processor: "boolean", default: !1 }),
          t("convert_fonts_to_spans", {
            processor: "boolean",
            default: !0,
            deprecated: !0,
          }),
          t("fix_list_elements", { processor: "boolean", default: !1 }),
          t("preserve_cdata", { processor: "boolean", default: !1 }),
          t("remove_trailing_brs", { processor: "boolean" }),
          t("inline_styles", {
            processor: "boolean",
            default: !0,
            deprecated: !0,
          }),
          t("element_format", { processor: "string", default: "html" }),
          t("entities", { processor: "string" }),
          t("schema", { processor: "string", default: "html5" }),
          t("convert_urls", { processor: "boolean", default: !0 }),
          t("relative_urls", { processor: "boolean", default: !0 }),
          t("remove_script_host", { processor: "boolean", default: !0 }),
          t("custom_elements", { processor: "string" }),
          t("extended_valid_elements", { processor: "string" }),
          t("invalid_elements", { processor: "string" }),
          t("invalid_styles", { processor: Sf }),
          t("valid_children", { processor: "string" }),
          t("valid_classes", { processor: Sf }),
          t("valid_elements", { processor: "string" }),
          t("valid_styles", { processor: Sf }),
          t("verify_html", { processor: "boolean", default: !0 }),
          t("auto_focus", { processor: (n) => be(n) || n === !0 }),
          t("browser_spellcheck", { processor: "boolean", default: !1 }),
          t("protect", { processor: "array" }),
          t("images_file_types", {
            processor: "string",
            default: "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp",
          }),
          t("deprecation_warnings", { processor: "boolean", default: !0 }),
          t("a11y_advanced_options", { processor: "boolean", default: !1 }),
          t("api_key", { processor: "string" }),
          t("paste_block_drop", { processor: "boolean", default: !1 }),
          t("paste_data_images", { processor: "boolean", default: !0 }),
          t("paste_preprocess", { processor: "function" }),
          t("paste_postprocess", { processor: "function" }),
          t("paste_webkit_styles", { processor: "string", default: "none" }),
          t("paste_remove_styles_if_webkit", {
            processor: "boolean",
            default: !0,
          }),
          t("paste_merge_formats", { processor: "boolean", default: !0 }),
          t("smart_paste", { processor: "boolean", default: !0 }),
          t("paste_as_text", { processor: "boolean", default: !1 }),
          t("paste_tab_spaces", { processor: "number", default: 4 }),
          t("text_patterns", {
            processor: (n) =>
              Ks(n, ut) || n === !1
                ? { value: UT(n === !1 ? [] : n), valid: !0 }
                : {
                    valid: !1,
                    message: "Must be an array of objects or false.",
                  },
            default: [
              { start: "*", end: "*", format: "italic" },
              { start: "**", end: "**", format: "bold" },
              { start: "#", format: "h1" },
              { start: "##", format: "h2" },
              { start: "###", format: "h3" },
              { start: "####", format: "h4" },
              { start: "#####", format: "h5" },
              { start: "######", format: "h6" },
              { start: "1. ", cmd: "InsertOrderedList" },
              { start: "* ", cmd: "InsertUnorderedList" },
              { start: "- ", cmd: "InsertUnorderedList" },
            ],
          }),
          t("noneditable_class", {
            processor: "string",
            default: "mceNonEditable",
          }),
          t("editable_class", { processor: "string", default: "mceEditable" }),
          t("noneditable_regexp", {
            processor: (n) =>
              Ks(n, $b)
                ? { value: n, valid: !0 }
                : $b(n)
                ? { value: [n], valid: !0 }
                : {
                    valid: !1,
                    message: "Must be a RegExp or an array of RegExp.",
                  },
            default: [],
          }),
          t("table_tab_navigation", { processor: "boolean", default: !0 }),
          e.on("ScriptsLoaded", () => {
            t("directionality", {
              processor: "string",
              default: ts.isRtl() ? "rtl" : void 0,
            }),
              t("placeholder", {
                processor: "string",
                default: HT.getAttrib(e.getElement(), "placeholder"),
              });
          });
      },
      jT = ue("iframe_attrs"),
      qT = ue("doctype"),
      Fb = ue("document_base_url"),
      KT = ue("body_id"),
      GT = ue("body_class"),
      Mb = ue("content_security_policy"),
      YT = ue("br_in_pre"),
      wn = ue("forced_root_block"),
      ir = ue("forced_root_block_attrs"),
      XT = ue("br_newline_selector"),
      QT = ue("no_newline_selector"),
      ZT = ue("keep_styles"),
      JT = ue("end_container_on_empty_block"),
      Ub = ue("automatic_uploads"),
      zb = ue("images_reuse_filename"),
      e1 = ue("images_replace_blob_uris"),
      Hb = ue("icons"),
      t1 = ue("icons_url"),
      n1 = ue("images_upload_url"),
      s1 = ue("images_upload_base_path"),
      o1 = ue("images_upload_credentials"),
      r1 = ue("images_upload_handler"),
      i1 = ue("content_css_cors"),
      _f = ue("referrer_policy"),
      Vb = ue("language"),
      a1 = ue("language_url"),
      Wb = ue("indent_use_margin"),
      l1 = ue("indentation"),
      c1 = ue("content_css"),
      u1 = ue("content_style"),
      jb = ue("font_css"),
      f1 = ue("directionality"),
      d1 = ue("inline_boundaries_selector"),
      qb = ue("object_resizing"),
      m1 = ue("resize_img_proportional"),
      p1 = ue("placeholder"),
      Kb = ue("event_root"),
      g1 = ue("service_message"),
      ei = ue("theme"),
      h1 = ue("theme_url"),
      kf = ue("model"),
      b1 = ue("model_url"),
      ra = ue("inline_boundaries"),
      C1 = ue("formats"),
      y1 = ue("preview_styles"),
      v1 = ue("format_empty_lines"),
      E1 = ue("custom_ui_selector"),
      Nf = ue("inline"),
      x1 = ue("hidden_input"),
      w1 = ue("submit_patch"),
      S1 = ue("add_form_submit_trigger"),
      _1 = ue("add_unload_trigger"),
      k1 = ue("custom_undo_redo_levels"),
      N1 = ue("disable_nodechange"),
      Gb = ue("readonly"),
      A1 = ue("content_css_cors"),
      Rl = ue("plugins"),
      T1 = ue("external_plugins"),
      R1 = ue("block_unsupported_drop"),
      P1 = ue("visual"),
      O1 = ue("visual_table_class"),
      Yb = ue("visual_anchor_class"),
      D1 = ue("iframe_aria_text"),
      B1 = ue("setup"),
      I1 = ue("init_instance_callback"),
      $1 = ue("urlconverter_callback"),
      L1 = ue("auto_focus"),
      F1 = ue("browser_spellcheck"),
      M1 = ue("protect"),
      U1 = ue("paste_block_drop"),
      Pl = ue("paste_data_images"),
      z1 = ue("paste_preprocess"),
      H1 = ue("paste_postprocess"),
      V1 = ue("paste_webkit_styles"),
      W1 = ue("paste_remove_styles_if_webkit"),
      j1 = ue("paste_merge_formats"),
      q1 = ue("smart_paste"),
      K1 = ue("paste_as_text"),
      G1 = ue("paste_tab_spaces"),
      Y1 = ue("allow_html_data_urls"),
      Xb = ue("text_patterns"),
      Qb = ue("noneditable_class"),
      X1 = ue("editable_class"),
      Q1 = ue("noneditable_regexp"),
      Z1 = (e) => G.explode(e.options.get("font_size_style_values")),
      J1 = (e) => G.explode(e.options.get("font_size_classes")),
      eR = (e) => e.options.get("encoding") === "xml",
      Zb = (e) => G.explode(e.options.get("images_file_types")),
      tR = ue("table_tab_navigation"),
      nR = ve,
      Jb = ne,
      eC = (e) => {
        const t = e.parentNode;
        t && t.removeChild(e);
      },
      tC = (e) => {
        const t = wo(e);
        return { count: e.length - t.length, text: t };
      },
      nC = (e) => {
        let t;
        for (; (t = e.data.lastIndexOf(Kt)) !== -1; ) e.deleteData(t, 1);
      },
      sC = (e, t) => (ar(e), t),
      sR = (e, t) => {
        const n = tC(e.data.substr(0, t.offset())),
          s = tC(e.data.substr(t.offset()));
        return (n.text + s.text).length > 0
          ? (nC(e), L(e, t.offset() - n.count))
          : t;
      },
      oR = (e, t) => {
        const n = t.container(),
          s = k(pt(n.childNodes), e)
            .map((o) => (o < t.offset() ? L(n, t.offset() - 1) : t))
            .getOr(t);
        return ar(e), s;
      },
      rR = (e, t) => (Jb(e) && t.container() === e ? sR(e, t) : sC(e, t)),
      iR = (e, t) => (t.container() === e.parentNode ? oR(e, t) : sC(e, t)),
      aR = (e, t) => (L.isTextPosition(t) ? rR(e, t) : iR(e, t)),
      ar = (e) => {
        nR(e) && Ln(e) && (Lh(e) ? e.removeAttribute("data-mce-caret") : eC(e)),
          Jb(e) && (nC(e), e.data.length === 0 && eC(e));
      },
      lR = wt,
      cR = ws,
      uR = dl,
      fR = "*[contentEditable=false],video,audio,embed,object",
      oC = (e, t, n) => {
        const s = cb(t.getBoundingClientRect(), n);
        let o, r;
        if (e.tagName === "BODY") {
          const a = e.ownerDocument.documentElement;
          (o = e.scrollLeft || a.scrollLeft), (r = e.scrollTop || a.scrollTop);
        } else {
          const a = e.getBoundingClientRect();
          (o = e.scrollLeft - a.left), (r = e.scrollTop - a.top);
        }
        (s.left += o),
          (s.right += o),
          (s.top += r),
          (s.bottom += r),
          (s.width = 1);
        let i = t.offsetWidth - t.clientWidth;
        return i > 0 && (n && (i *= -1), (s.left += i), (s.right += i)), s;
      },
      dR = (e) => {
        const t = xn(S.fromDom(e), fR);
        for (let n = 0; n < t.length; n++) {
          const s = t[n].dom;
          let o = s.previousSibling;
          if (Cl(o)) {
            const r = o.data;
            r.length === 1
              ? o.parentNode.removeChild(o)
              : o.deleteData(r.length - 1, 1);
          }
          (o = s.nextSibling),
            bl(o) &&
              (o.data.length === 1
                ? o.parentNode.removeChild(o)
                : o.deleteData(0, 1));
        }
      },
      mR = (e, t, n, s) => {
        const o = No();
        let r, i;
        const a = wn(e),
          c = e.dom,
          f = (y, E) => {
            let _;
            if ((d(), uR(E))) return null;
            if (n(E)) {
              i = QN(a, E, y);
              const P = oC(t, E, y);
              c.setStyle(i, "top", P.top);
              const z = c.create("div", {
                class: "mce-visual-caret",
                "data-mce-bogus": "all",
              });
              c.setStyles(z, Se({}, P)),
                c.add(t, z),
                o.set({ caret: z, element: E, before: y }),
                y && c.addClass(z, "mce-visual-caret-before"),
                p(),
                (_ = E.ownerDocument.createRange()),
                _.setStart(i, 0),
                _.setEnd(i, 0);
            } else
              return (
                (i = YN(E, y)),
                (_ = E.ownerDocument.createRange()),
                ia(i.nextSibling)
                  ? (_.setStart(i, 0), _.setEnd(i, 0))
                  : (_.setStart(i, 1), _.setEnd(i, 1)),
                _
              );
            return _;
          },
          d = () => {
            dR(t),
              i && (ar(i), (i = null)),
              o.on((y) => {
                c.remove(y.caret), o.clear();
              }),
              r && (clearInterval(r), (r = void 0));
          },
          p = () => {
            r = setInterval(() => {
              o.on((y) => {
                s()
                  ? c.toggleClass(y.caret, "mce-visual-caret-hidden")
                  : c.addClass(y.caret, "mce-visual-caret-hidden");
              });
            }, 500);
          };
        return {
          show: f,
          hide: d,
          getCss: () =>
            ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}",
          reposition: () => {
            o.on((y) => {
              const E = oC(t, y.element, y.before);
              c.setStyles(y.caret, Se({}, E));
            });
          },
          destroy: () => clearInterval(r),
        };
      },
      rC = () => et.browser.isFirefox(),
      ia = (e) => lR(e) || cR(e),
      aa = (e) => ia(e) || (Ki(e) && rC()),
      pR = Zs,
      Af = wt,
      gR = ws,
      hR = fl("display", "block table table-cell table-caption list-item"),
      iC = Ln,
      aC = Kr,
      lC = ve,
      bR = es,
      ti = (e) => e > 0,
      lr = (e) => e < 0,
      Ol = (e, t) => {
        let n;
        for (; (n = e(t)); ) if (!aC(n)) return n;
        return null;
      },
      la = (e, t, n, s, o) => {
        const r = new zt(e, s),
          i = Af(e) || aC(e);
        if (lr(t)) {
          if (i && ((e = Ol(r.prev.bind(r), !0)), n(e))) return e;
          for (; (e = Ol(r.prev.bind(r), o)); ) if (n(e)) return e;
        }
        if (ti(t)) {
          if (i && ((e = Ol(r.next.bind(r), !0)), n(e))) return e;
          for (; (e = Ol(r.next.bind(r), o)); ) if (n(e)) return e;
        }
        return null;
      },
      CR = (e, t) => {
        const n = (o) => pR(o.dom),
          s = (o) => o.dom === t;
        return Wr(S.fromDom(e), n, s)
          .map((o) => o.dom)
          .getOr(t);
      },
      Ro = (e, t) => {
        for (; e && e !== t; ) {
          if (hR(e)) return e;
          e = e.parentNode;
        }
        return null;
      },
      ks = (e, t, n) => Ro(e.container(), n) === Ro(t.container(), n),
      Tf = (e, t) => {
        if (!t) return null;
        const n = t.container(),
          s = t.offset();
        return lC(n) ? n.childNodes[s + e] : null;
      },
      cC = (e, t) => {
        const n = t.ownerDocument.createRange();
        return (
          e
            ? (n.setStartBefore(t), n.setEndBefore(t))
            : (n.setStartAfter(t), n.setEndAfter(t)),
          n
        );
      },
      yR = (e, t, n) => Ro(t, e) === Ro(n, e),
      uC = (e, t, n) => {
        const s = e ? "previousSibling" : "nextSibling";
        for (; n && n !== t; ) {
          let o = n[s];
          if ((iC(o) && (o = o[s]), Af(o) || gR(o))) {
            if (yR(t, o, n)) return o;
            break;
          }
          if (bR(o)) break;
          n = n.parentNode;
        }
        return null;
      },
      ca = oe(cC, !0),
      ua = oe(cC, !1),
      Rf = (e, t, n) => {
        let s;
        const o = oe(uC, !0, t),
          r = oe(uC, !1, t);
        let i = n.startContainer;
        const a = n.startOffset;
        if (Kr(i)) {
          lC(i) || (i = i.parentNode);
          const c = i.getAttribute("data-mce-caret");
          if (c === "before" && ((s = i.nextSibling), aa(s))) return ca(s);
          if (c === "after" && ((s = i.previousSibling), aa(s))) return ua(s);
        }
        if (!n.collapsed) return n;
        if (ne(i)) {
          if (iC(i)) {
            if (e === 1) {
              if (((s = r(i)), s)) return ca(s);
              if (((s = o(i)), s)) return ua(s);
            }
            if (e === -1) {
              if (((s = o(i)), s)) return ua(s);
              if (((s = r(i)), s)) return ca(s);
            }
            return n;
          }
          if (Cl(i) && a >= i.data.length - 1)
            return e === 1 && ((s = r(i)), s) ? ca(s) : n;
          if (bl(i) && a <= 1) return e === -1 && ((s = o(i)), s) ? ua(s) : n;
          if (a === i.data.length) return (s = r(i)), s ? ca(s) : n;
          if (a === 0) return (s = o(i)), s ? ua(s) : n;
        }
        return n;
      },
      fC = (e, t) => g.from(Tf(e ? 0 : -1, t)).filter(Af),
      fa = (e, t, n) => {
        const s = Rf(e, t, n);
        return e === -1 ? L.fromRangeStart(s) : L.fromRangeEnd(s);
      },
      Dl = (e) => g.from(e.getNode()).map(S.fromDom),
      vR = (e) => g.from(e.getNode(!0)).map(S.fromDom),
      Pf = (e, t) => {
        for (; (t = e(t)); ) if (t.isVisible()) return t;
        return t;
      },
      Bl = (e, t) => {
        const n = ks(e, t);
        return !n && Dt(e.getNode()) ? !0 : n;
      };
    var Vt;
    (function (e) {
      (e[(e.Backwards = -1)] = "Backwards"), (e[(e.Forwards = 1)] = "Forwards");
    })(Vt || (Vt = {}));
    const ER = wt,
      Ns = ne,
      dC = ve,
      Of = Dt,
      ni = es,
      mC = lA,
      Il = zh,
      xR = (e, t) => {
        const n = [];
        for (; e && e !== t; ) n.push(e), (e = e.parentNode);
        return n;
      },
      pC = (e, t) =>
        e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null,
      gC = (e, t) => {
        if (ti(e)) {
          if (ni(t.previousSibling) && !Ns(t.previousSibling))
            return L.before(t);
          if (Ns(t)) return L(t, 0);
        }
        if (lr(e)) {
          if (ni(t.nextSibling) && !Ns(t.nextSibling)) return L.after(t);
          if (Ns(t)) return L(t, t.data.length);
        }
        return lr(e) ? (Of(t) ? L.before(t) : L.after(t)) : L.before(t);
      },
      wR = (e, t) => {
        const n = t.nextSibling;
        return n && ni(n)
          ? Ns(n)
            ? L(n, 0)
            : L.before(n)
          : Df(Vt.Forwards, L.after(t), e);
      },
      Df = (e, t, n) => {
        let s, o, r, i;
        if (!dC(n) || !t) return null;
        if (t.isEqual(L.after(n)) && n.lastChild) {
          if (
            ((i = L.after(n.lastChild)),
            lr(e) && ni(n.lastChild) && dC(n.lastChild))
          )
            return Of(n.lastChild) ? L.before(n.lastChild) : i;
        } else i = t;
        const a = i.container();
        let c = i.offset();
        if (Ns(a)) {
          if (lr(e) && c > 0) return L(a, --c);
          if (ti(e) && c < a.length) return L(a, ++c);
          s = a;
        } else {
          if (lr(e) && c > 0 && ((o = pC(a, c - 1)), ni(o)))
            return !mC(o) && ((r = la(o, e, Il, o)), r)
              ? Ns(r)
                ? L(r, r.data.length)
                : L.after(r)
              : Ns(o)
              ? L(o, o.data.length)
              : L.before(o);
          if (ti(e) && c < a.childNodes.length && ((o = pC(a, c)), ni(o)))
            return Of(o)
              ? wR(n, o)
              : !mC(o) && ((r = la(o, e, Il, o)), r)
              ? Ns(r)
                ? L(r, 0)
                : L.before(r)
              : Ns(o)
              ? L(o, 0)
              : L.after(o);
          s = o || i.getNode();
        }
        if (
          ((ti(e) && i.isAtEnd()) || (lr(e) && i.isAtStart())) &&
          ((s = la(s, e, rt, n, !0)), Il(s, n))
        )
          return gC(e, s);
        o = la(s, e, Il, n);
        const f = bo(H(xR(a, n), ER));
        return f && (!o || !f.contains(o))
          ? (ti(e) ? (i = L.after(f)) : (i = L.before(f)), i)
          : o
          ? gC(e, o)
          : null;
      },
      As = (e) => ({
        next: (t) => Df(Vt.Forwards, t, e),
        prev: (t) => Df(Vt.Backwards, t, e),
      }),
      SR = (e, t, n) => {
        const s = e ? L.before(n) : L.after(n);
        return Fn(e, t, s);
      },
      _R = (e) => (Dt(e) ? L.before(e) : L.after(e)),
      hC = (e) => (L.isTextPosition(e) ? e.offset() === 0 : es(e.getNode())),
      bC = (e) => {
        if (L.isTextPosition(e)) {
          const t = e.container();
          return e.offset() === t.data.length;
        } else return es(e.getNode(!0));
      },
      CC = (e, t) =>
        !L.isTextPosition(e) &&
        !L.isTextPosition(t) &&
        e.getNode() === t.getNode(!0),
      kR = (e) => !L.isTextPosition(e) && Dt(e.getNode()),
      NR = (e, t, n) =>
        e ? !CC(t, n) && !kR(t) && bC(t) && hC(n) : !CC(n, t) && hC(t) && bC(n),
      Fn = (e, t, n) => {
        const s = As(t);
        return g.from(e ? s.next(n) : s.prev(n));
      },
      $l = (e, t, n) =>
        Fn(e, t, n).bind((s) =>
          ks(n, s, t) && NR(e, n, s) ? Fn(e, t, s) : g.some(s)
        ),
      yC = (e, t, n, s) =>
        $l(e, t, n).bind((o) => (s(o) ? yC(e, t, o, s) : g.some(o))),
      si = (e, t) => {
        const n = e ? t.firstChild : t.lastChild;
        return ne(n)
          ? g.some(L(n, e ? 0 : n.data.length))
          : n
          ? es(n)
            ? g.some(e ? L.before(n) : _R(n))
            : SR(e, t, n)
          : g.none();
      },
      ss = oe(Fn, !0),
      Ts = oe(Fn, !1),
      mn = oe(si, !0),
      Rs = oe(si, !1),
      vC = "_mce_caret",
      Ps = (e) => ve(e) && e.id === vC,
      cr = (e, t) => {
        for (; t && t !== e; ) {
          if (t.id === vC) return t;
          t = t.parentNode;
        }
        return null;
      },
      AR = (e) => be(e.start),
      TR = (e) => Fe(e, "rng"),
      RR = (e) => Fe(e, "id"),
      PR = (e) => Fe(e, "name"),
      EC = (e) => G.isArray(e.start),
      xC = (e, t) => (
        ve(t) &&
          e.isBlock(t) &&
          !t.innerHTML &&
          (t.innerHTML = '<br data-mce-bogus="1" />'),
        t
      ),
      OR = (e, t) => {
        let n;
        const s = e.createRng();
        return (
          (n = Sb(e.getRoot(), t.start)),
          s.setStart(n.container(), n.offset()),
          (n = Sb(e.getRoot(), t.end)),
          s.setEnd(n.container(), n.offset()),
          s
        );
      },
      DR = (e, t) => {
        const n = e.ownerDocument.createTextNode(Kt);
        e.appendChild(n), t.setStart(n, 0), t.setEnd(n, 0);
      },
      BR = (e) => e.hasChildNodes() === !1,
      IR = (e, t) =>
        Rs(e).fold(
          mt,
          (n) => (
            t.setStart(n.container(), n.offset()),
            t.setEnd(n.container(), n.offset()),
            !0
          )
        ),
      wC = (e, t, n) => (BR(t) && cr(e, t) ? (DR(t, n), !0) : !1),
      SC = (e, t, n, s) => {
        const o = n[t ? "start" : "end"];
        let r, i, a, c;
        const f = e.getRoot();
        if (o) {
          for (a = o[0], i = f, r = o.length - 1; r >= 1; r--) {
            if (((c = i.childNodes), wC(f, i, s))) return !0;
            if (o[r] > c.length - 1) return wC(f, i, s) ? !0 : IR(i, s);
            i = c[o[r]];
          }
          i.nodeType === 3 && (a = Math.min(o[0], i.nodeValue.length)),
            i.nodeType === 1 && (a = Math.min(o[0], i.childNodes.length)),
            t ? s.setStart(i, a) : s.setEnd(i, a);
        }
        return !0;
      },
      Bf = (e) => ne(e) && e.data.length > 0,
      _C = (e, t, n) => {
        let s = e.get(n.id + "_" + t),
          o,
          r,
          i,
          a;
        const c = n.keep;
        let f, d;
        if (s) {
          if (
            ((o = s.parentNode),
            t === "start"
              ? (c
                  ? s.hasChildNodes()
                    ? ((o = s.firstChild), (r = 1))
                    : Bf(s.nextSibling)
                    ? ((o = s.nextSibling), (r = 0))
                    : Bf(s.previousSibling)
                    ? ((o = s.previousSibling),
                      (r = s.previousSibling.data.length))
                    : ((o = s.parentNode), (r = e.nodeIndex(s) + 1))
                  : (r = e.nodeIndex(s)),
                (f = o),
                (d = r))
              : (c
                  ? s.hasChildNodes()
                    ? ((o = s.firstChild), (r = 1))
                    : Bf(s.previousSibling)
                    ? ((o = s.previousSibling),
                      (r = s.previousSibling.data.length))
                    : ((o = s.parentNode), (r = e.nodeIndex(s)))
                  : (r = e.nodeIndex(s)),
                (f = o),
                (d = r)),
            !c)
          ) {
            for (
              a = s.previousSibling,
                i = s.nextSibling,
                G.each(G.grep(s.childNodes), (p) => {
                  ne(p) && (p.nodeValue = p.nodeValue.replace(/\uFEFF/g, ""));
                });
              (s = e.get(n.id + "_" + t));

            )
              e.remove(s, !0);
            a &&
              i &&
              a.nodeType === i.nodeType &&
              ne(a) &&
              !et.browser.isOpera() &&
              ((r = a.nodeValue.length),
              a.appendData(i.nodeValue),
              e.remove(i),
              (f = a),
              (d = r));
          }
          return g.some(L(f, d));
        } else return g.none();
      },
      $R = (e, t) => {
        const n = e.createRng();
        return SC(e, !0, t, n) && SC(e, !1, t, n) ? g.some(n) : g.none();
      },
      LR = (e, t) => {
        const n = _C(e, "start", t),
          s = _C(e, "end", t);
        return En(n, s.or(n), (o, r) => {
          const i = e.createRng();
          return (
            i.setStart(xC(e, o.container()), o.offset()),
            i.setEnd(xC(e, r.container()), r.offset()),
            i
          );
        });
      },
      FR = (e, t) =>
        g.from(e.select(t.name)[t.index]).map((n) => {
          const s = e.createRng();
          return s.selectNode(n), s;
        }),
      MR = (e, t) => {
        const n = e.dom;
        if (t) {
          if (EC(t)) return $R(n, t);
          if (AR(t)) return g.some(OR(n, t));
          if (RR(t)) return LR(n, t);
          if (PR(t)) return FR(n, t);
          if (TR(t)) return g.some(t.rng);
        }
        return g.none();
      },
      UR = (e, t, n) => OT(e, t, n),
      zR = (e, t) => {
        MR(e, t).each((n) => {
          e.setRng(n);
        });
      },
      Mn = (e) =>
        ve(e) &&
        e.tagName === "SPAN" &&
        e.getAttribute("data-mce-type") === "bookmark",
      Ll = (
        (e) => (t) =>
          e === t
      )(Xt),
      da = (e) =>
        e !== "" &&
        ` \f
\r	\v`.indexOf(e) !== -1,
      If = (e) => !da(e) && !Ll(e) && !$h(e),
      HR = (e) => ({ value: e }),
      $f = (e) => {
        const t = e.toString(16);
        return (t.length === 1 ? "0" + t : t).toUpperCase();
      },
      VR = (e) => {
        const t = $f(e.red) + $f(e.green) + $f(e.blue);
        return HR(t);
      },
      WR = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i,
      jR =
        /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i,
      kC = (e, t, n, s) => ({ red: e, green: t, blue: n, alpha: s }),
      NC = (e, t, n, s) => {
        const o = parseInt(e, 10),
          r = parseInt(t, 10),
          i = parseInt(n, 10),
          a = parseFloat(s);
        return kC(o, r, i, a);
      },
      qR = (e) => {
        if (e === "transparent") return g.some(kC(0, 0, 0, 0));
        const t = WR.exec(e);
        if (t !== null) return g.some(NC(t[1], t[2], t[3], "1"));
        const n = jR.exec(e);
        return n !== null ? g.some(NC(n[1], n[2], n[3], n[4])) : g.none();
      },
      Fl = (e) =>
        qR(e)
          .map(VR)
          .map((t) => "#" + t.value)
          .getOr(e),
      Ml = (e) => !!e.nodeType,
      KR = (e) => e && /^(IMG)$/.test(e.nodeName),
      AC = (e, t, n) => {
        const s = n.startOffset;
        let o = n.startContainer;
        if (!(o === n.endContainer && KR(o.childNodes[s])) && ve(o)) {
          const r = o.childNodes;
          let i;
          s < r.length
            ? ((o = r[s]), (i = new zt(o, e.getParent(o, e.isBlock))))
            : ((o = r[r.length - 1]),
              (i = new zt(o, e.getParent(o, e.isBlock))),
              i.next(!0));
          for (let a = i.current(); a; a = i.next())
            if (ne(a) && !Ff(a)) {
              n.setStart(a, 0), t.setRng(n);
              return;
            }
        }
      },
      TC = (e, t, n) => {
        if (e) {
          const s = t ? "nextSibling" : "previousSibling";
          for (e = n ? e : e[s]; e; e = e[s]) if (ve(e) || !Ff(e)) return e;
        }
      },
      Lf = (e, t) => (
        Ml(t) && (t = t.nodeName),
        !!e.schema.getTextBlockElements()[t.toLowerCase()]
      ),
      oi = (e, t, n) => e.schema.isValidChild(t, n),
      Ff = (e, t = !1) => {
        if (ke(e) && ne(e)) {
          const n = t ? e.data.replace(/ /g, "\xA0") : e.data;
          return er(n);
        } else return !1;
      },
      GR = (e) => ke(e) && ne(e) && e.length === 0,
      eo = (e, t) => (
        Ye(e)
          ? (e = e(t))
          : ke(t) && (e = e.replace(/%(\w+)/g, (n, s) => t[s] || n)),
        e
      ),
      Mf = (e, t) => (
        (e = e || ""),
        (t = t || ""),
        (e = "" + (e.nodeName || e)),
        (t = "" + (t.nodeName || t)),
        e.toLowerCase() === t.toLowerCase()
      ),
      Uf = (e, t) => (
        (t === "color" || t === "backgroundColor") && (e = Fl(e)),
        t === "fontWeight" && e === 700 && (e = "bold"),
        t === "fontFamily" &&
          (e = e.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")),
        "" + e
      ),
      Ul = (e, t, n) => Uf(e.getStyle(t, n), n),
      RC = (e, t) => {
        let n;
        return (
          e.getParent(
            t,
            (s) => ((n = e.getStyle(s, "text-decoration")), n && n !== "none")
          ),
          n
        );
      },
      zl = (e, t, n) => e.getParents(t, n, e.getRoot()),
      YR = (e, t) => {
        const n = (s) => {
          const o = (r) => r.length > 1 && r.charAt(0) === "%";
          return M(["styles", "attributes"], (r) =>
            at(s, r).exists((i) => {
              const a = Nt(i) ? i : pg(i);
              return M(a, o);
            })
          );
        };
        return M(e.formatter.get(t), n);
      },
      XR = (e, t, n) => {
        const s = [
            "inline",
            "block",
            "selector",
            "attributes",
            "styles",
            "classes",
          ],
          o = (r) => Li(r, (i, a) => M(s, (c) => c === a));
        return M(e.formatter.get(t), (r) => {
          const i = o(r);
          return M(e.formatter.get(n), (a) => {
            const c = o(a);
            return fk(i, c);
          });
        });
      },
      Os = (e) => Fr(e, "block"),
      Rn = (e) => Fr(e, "selector"),
      Wt = (e) => Fr(e, "inline"),
      QR = (e) => Rn(e) && Wt(e) && zr(at(e, "mixed"), !0),
      zf = (e) => Rn(e) && e.expand !== !1 && !Wt(e),
      ri = Mn,
      PC = zl,
      OC = Ff,
      ZR = Lf,
      JR = (e) => Dt(e) && e.getAttribute("data-mce-bogus") && !e.nextSibling,
      DC = (e, t) => {
        let n = t;
        for (; n; ) {
          if (ve(n) && e.getContentEditable(n))
            return e.getContentEditable(n) === "false" ? n : t;
          n = n.parentNode;
        }
        return t;
      },
      BC = (e, t, n, s) => {
        const o = t.data;
        for (let r = n; e ? r >= 0 : r < o.length; e ? r-- : r++)
          if (s(o.charAt(r))) return e ? r + 1 : r;
        return -1;
      },
      eP = (e, t, n) => BC(e, t, n, (s) => Ll(s) || da(s)),
      tP = (e, t, n) => BC(e, t, n, If),
      IC = (e, t, n, s, o, r) => {
        let i;
        const a = e.getParent(n, e.isBlock) || t,
          c = (d, p, C) => {
            const b = sr(e),
              x = o ? b.backwards : b.forwards;
            return g.from(
              x(
                d,
                p,
                (y, E) => (ri(y.parentNode) ? -1 : ((i = y), C(o, y, E))),
                a
              )
            );
          };
        return c(n, s, eP)
          .bind((d) =>
            r ? c(d.container, d.offset + (o ? -1 : 0), tP) : g.some(d)
          )
          .orThunk(() =>
            i ? g.some({ container: i, offset: o ? 0 : i.length }) : g.none()
          );
      },
      $C = (e, t, n, s, o) => {
        ne(s) && nl(s.data) && s[o] && (s = s[o]);
        const r = PC(e, s);
        for (let i = 0; i < r.length; i++)
          for (let a = 0; a < t.length; a++) {
            const c = t[a];
            if (
              !(ke(c.collapsed) && c.collapsed !== n.collapsed) &&
              Rn(c) &&
              e.is(r[i], c.selector)
            )
              return r[i];
          }
        return s;
      },
      LC = (e, t, n, s) => {
        let o = n;
        const r = e.dom,
          i = r.getRoot(),
          a = t[0];
        if (
          (Os(a) && (o = a.wrapper ? null : r.getParent(n, a.block, i)), !o)
        ) {
          const c = r.getParent(n, "LI,TD,TH");
          o = r.getParent(
            ne(n) ? n.parentNode : n,
            (f) => f !== i && ZR(e, f),
            c
          );
        }
        if (
          (o && Os(a) && a.wrapper && (o = PC(r, o, "ul,ol").reverse()[0] || o),
          !o)
        )
          for (o = n; o[s] && !r.isBlock(o[s]) && ((o = o[s]), !Mf(o, "br")); );
        return o || n;
      },
      FC = (e, t, n, s) => {
        const o = n.parentNode;
        return ke(n[s])
          ? !1
          : o === t || Mt(o) || e.isBlock(o)
          ? !0
          : FC(e, t, o, s);
      },
      Hl = (e, t, n, s, o) => {
        let r = n;
        const i = o ? "previousSibling" : "nextSibling",
          a = e.getRoot();
        if (ne(n) && !OC(n) && (o ? s > 0 : s < n.data.length)) return n;
        for (;;) {
          if (!t[0].block_expand && e.isBlock(r)) return r;
          for (let c = r[i]; c; c = c[i]) {
            const f = ne(c) && !FC(e, a, c, i);
            if (!ri(c) && !JR(c) && !OC(c, f)) return r;
          }
          if (r === a || r.parentNode === a) {
            n = r;
            break;
          }
          r = r.parentNode;
        }
        return n;
      },
      MC = (e) => ri(e.parentNode) || ri(e),
      ii = (e, t, n, s = !1) => {
        let {
          startContainer: o,
          startOffset: r,
          endContainer: i,
          endOffset: a,
        } = t;
        const c = e.dom,
          f = n[0];
        return (
          ve(o) && o.hasChildNodes() && ((o = Ao(o, r)), ne(o) && (r = 0)),
          ve(i) &&
            i.hasChildNodes() &&
            ((i = Ao(i, t.collapsed ? a : a - 1)),
            ne(i) && (a = i.nodeValue.length)),
          (o = DC(c, o)),
          (i = DC(c, i)),
          MC(o) &&
            ((o = ri(o) ? o : o.parentNode),
            t.collapsed
              ? (o = o.previousSibling || o)
              : (o = o.nextSibling || o),
            ne(o) && (r = t.collapsed ? o.length : 0)),
          MC(i) &&
            ((i = ri(i) ? i : i.parentNode),
            t.collapsed
              ? (i = i.nextSibling || i)
              : (i = i.previousSibling || i),
            ne(i) && (a = t.collapsed ? 0 : i.length)),
          t.collapsed &&
            (IC(c, e.getBody(), o, r, !0, s).each(
              ({ container: C, offset: b }) => {
                (o = C), (r = b);
              }
            ),
            IC(c, e.getBody(), i, a, !1, s).each(
              ({ container: C, offset: b }) => {
                (i = C), (a = b);
              }
            )),
          (Wt(f) || f.block_expand) &&
            ((!Wt(f) || !ne(o) || r === 0) && (o = Hl(c, n, o, r, !0)),
            (!Wt(f) || !ne(i) || a === i.nodeValue.length) &&
              (i = Hl(c, n, i, a, !1))),
          zf(f) &&
            ((o = $C(c, n, t, o, "previousSibling")),
            (i = $C(c, n, t, i, "nextSibling"))),
          (Os(f) || Rn(f)) &&
            ((o = LC(e, n, o, "previousSibling")),
            (i = LC(e, n, i, "nextSibling")),
            Os(f) &&
              (c.isBlock(o) || (o = Hl(c, n, o, r, !0)),
              c.isBlock(i) || (i = Hl(c, n, i, a, !1)))),
          ve(o) && ((r = c.nodeIndex(o)), (o = o.parentNode)),
          ve(i) && ((a = c.nodeIndex(i) + 1), (i = i.parentNode)),
          { startContainer: o, startOffset: r, endContainer: i, endOffset: a }
        );
      },
      ma = (e, t, n) => {
        const s = t.startOffset,
          o = Ao(t.startContainer, s),
          r = t.endOffset,
          i = Ao(t.endContainer, r - 1),
          a = (y) => {
            const E = y[0];
            ne(E) && E === o && s >= E.data.length && y.splice(0, 1);
            const _ = y[y.length - 1];
            return (
              r === 0 &&
                y.length > 0 &&
                _ === i &&
                ne(_) &&
                y.splice(y.length - 1, 1),
              y
            );
          },
          c = (y, E, _) => {
            const P = [];
            for (; y && y !== _; y = y[E]) P.push(y);
            return P;
          },
          f = (y, E) => e.getParent(y, (_) => _.parentNode === E, E),
          d = (y, E, _) => {
            const P = _ ? "nextSibling" : "previousSibling";
            for (let z = y, I = z.parentNode; z && z !== E; z = I) {
              I = z.parentNode;
              const $ = c(z === y ? z : z[P], P);
              $.length && (_ || $.reverse(), n(a($)));
            }
          };
        if (o === i) return n(a([o]));
        const p = e.findCommonAncestor(o, i);
        if (e.isChildOf(o, i)) return d(o, p, !0);
        if (e.isChildOf(i, o)) return d(i, p);
        const C = f(o, p) || o,
          b = f(i, p) || i;
        d(o, C, !0);
        const x = c(
          C === o ? C : C.nextSibling,
          "nextSibling",
          b === i ? b.nextSibling : b
        );
        x.length && n(a(x)), d(i, b);
      },
      Hf = (e) => {
        const t = [];
        if (e) for (let n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
        return t;
      },
      nP = (e) =>
        qe(e, (t) => {
          const n = kl(t);
          return n ? [S.fromDom(n)] : [];
        }),
      sP = (e) => Hf(e).length > 1,
      oP = (e) => H(nP(e), pl),
      rP = (e) => xn(e, "td[data-mce-selected],th[data-mce-selected]"),
      UC = (e, t) => {
        const n = rP(t);
        return n.length > 0 ? n : oP(e);
      },
      ai = (e) => UC(Hf(e.selection.getSel()), S.fromDom(e.getBody())),
      pa = (e, t) => Gi(e, "table", t),
      iP = (e) => {
        const t = e.startContainer,
          n = e.startOffset;
        return ne(t)
          ? n === 0
            ? g.some(S.fromDom(t))
            : g.none()
          : g.from(t.childNodes[n]).map(S.fromDom);
      },
      aP = (e) => {
        const t = e.endContainer,
          n = e.endOffset;
        return ne(t)
          ? n === t.data.length
            ? g.some(S.fromDom(t))
            : g.none()
          : g.from(t.childNodes[n - 1]).map(S.fromDom);
      },
      zC = (e) => ch(e).fold(K([e]), (t) => [e].concat(zC(t))),
      Vf = (e) =>
        zu(e).fold(K([e]), (t) =>
          bt(t) === "br"
            ? Go(t)
                .map((n) => [e].concat(Vf(n)))
                .getOr([])
            : [e].concat(Vf(t))
        ),
      Wf = (e, t) =>
        En(iP(t), aP(t), (n, s) => {
          const o = de(zC(e), oe(tt, n)),
            r = de(Vf(e), oe(tt, s));
          return o.isSome() && r.isSome();
        }).getOr(!1),
      jf = (e, t, n, s) => {
        const o = n,
          r = new zt(n, o),
          i = Li(
            e.schema.getMoveCaretBeforeOnEnterElements(),
            (a, c) => !R(["td", "th", "table"], c.toLowerCase())
          );
        do {
          if (ne(n) && G.trim(n.nodeValue).length !== 0) {
            s ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length);
            return;
          }
          if (i[n.nodeName]) {
            s
              ? t.setStartBefore(n)
              : n.nodeName === "BR"
              ? t.setEndBefore(n)
              : t.setEndAfter(n);
            return;
          }
        } while ((n = s ? r.next() : r.prev()));
        o.nodeName === "BODY" &&
          (s ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
      },
      Vl = (e) => {
        const t = e.selection.getSel();
        return t && t.rangeCount > 0;
      },
      qf = (e, t) => {
        const n = ai(e);
        n.length > 0
          ? T(n, (s) => {
              const o = s.dom,
                r = e.dom.createRng();
              r.setStartBefore(o), r.setEndAfter(o), t(r, !0);
            })
          : t(e.selection.getRng(), !1);
      },
      Kf = (e, t, n) => {
        const s = Pb(e, t);
        n(s), e.moveToBookmark(s);
      },
      HC = ((e, t) => {
        const n = (r) => {
            if (!e(r))
              throw new Error(
                "Can only get " + t + " value of a " + t + " node"
              );
            return s(r).getOr("");
          },
          s = (r) => (e(r) ? g.from(r.dom.nodeValue) : g.none());
        return {
          get: n,
          getOption: s,
          set: (r, i) => {
            if (!e(r))
              throw new Error(
                "Can only set raw " + t + " value of a " + t + " node"
              );
            r.dom.nodeValue = i;
          },
        };
      })(In, "text"),
      Gf = (e) => HC.get(e),
      VC = (e) => HC.getOption(e),
      lP = (e) => In(e) && Gf(e) === Kt,
      cP = (e, t, n, s) =>
        Yn(t).fold(
          () => "skipping",
          (o) =>
            s === "br" || lP(t)
              ? "valid"
              : ZA(t)
              ? "existing"
              : Ps(t.dom)
              ? "caret"
              : !oi(e, n, s) || !oi(e, bt(o), n)
              ? "invalid-child"
              : "valid"
        ),
      uP = (e, t) => {
        const n = ii(e, t, [{ inline: "span" }]);
        t.setStart(n.startContainer, n.startOffset),
          t.setEnd(n.endContainer, n.endOffset),
          e.selection.setRng(t);
      },
      WC = (e, r, s, o) => {
        var i = r,
          { uid: t = rb("mce-annotation") } = i,
          n = $S(i, ["uid"]);
        const a = S.fromTag("span", e);
        Hi(a, pf()), fn(a, `${_l()}`, t), fn(a, `${ea()}`, s);
        const { attributes: c = {}, classes: f = [] } = o(t, n);
        return Es(a, c), nT(a, f), a;
      },
      fP = (e, t, n, s, o) => {
        const r = [],
          i = WC(e.getDoc(), o, n, s),
          a = No(),
          c = () => {
            a.clear();
          },
          f = () =>
            a.get().getOrThunk(() => {
              const b = Zr(i);
              return r.push(b), a.set(b), b;
            }),
          d = (b) => {
            T(b, p);
          },
          p = (b) => {
            switch (cP(e, b, "span", bt(b))) {
              case "invalid-child": {
                c();
                const y = Yt(b);
                d(y), c();
                break;
              }
              case "valid": {
                const y = f();
                fN(b, y);
                break;
              }
            }
          },
          C = (b) => {
            const x = U(b, S.fromDom);
            d(x);
          };
        return (
          ma(e.dom, t, (b) => {
            c(), C(b);
          }),
          r
        );
      },
      dP = (e, t, n, s) => {
        e.undoManager.transact(() => {
          const o = e.selection,
            r = o.getRng(),
            i = ai(e).length > 0;
          if ((r.collapsed && !i && uP(e, r), o.getRng().collapsed && !i)) {
            const a = WC(e.getDoc(), s, t, n.decorate);
            Vu(a, Xt), o.getRng().insertNode(a.dom), o.select(a.dom);
          } else
            Kf(o, !1, () => {
              qf(e, (a) => {
                fP(e, a, t, n.decorate, s);
              });
            });
        });
      },
      jC = (e) => {
        const t = tT();
        eT(e, t);
        const n = JA(e, t);
        return {
          register: (s, o) => {
            t.register(s, o);
          },
          annotate: (s, o) => {
            t.lookup(s).each((r) => {
              dP(e, s, r, o);
            });
          },
          annotationChanged: (s, o) => {
            n.addListener(s, o);
          },
          remove: (s) => {
            const o = e.selection.getBookmark();
            tb(e, g.some(s)).each(({ elements: r }) => {
              T(r, Eo);
            }),
              e.selection.moveToBookmark(o);
          },
          removeAll: (s) => {
            const o = e.selection.getBookmark();
            ht(sb(e, s), (r, i) => T(r, Eo)), e.selection.moveToBookmark(o);
          },
          getAll: (s) => {
            const o = sb(e, s);
            return $i(o, (r) => U(r, (i) => i.dom));
          },
        };
      },
      ga = (e) => ({ getBookmark: oe(UR, e), moveToBookmark: oe(zR, e) });
    ga.isBookmarkNode = Mn;
    const qC = (e, t, n) =>
        n.collapsed ? !1 : M(n.getClientRects(), (s) => iT(s, e, t)),
      mP = (e, t) => e.dispatch("PreProcess", t),
      pP = (e, t) => e.dispatch("PostProcess", t),
      gP = (e) => e.dispatch("remove"),
      hP = (e) => e.dispatch("detach"),
      bP = (e, t) => e.dispatch("SwitchMode", { mode: t }),
      CP = (e, t, n, s, o) => {
        e.dispatch("ObjectResizeStart", {
          target: t,
          width: n,
          height: s,
          origin: o,
        });
      },
      yP = (e, t, n, s, o) => {
        e.dispatch("ObjectResized", {
          target: t,
          width: n,
          height: s,
          origin: o,
        });
      },
      vP = (e) => e.dispatch("PreInit"),
      EP = (e) => e.dispatch("PostRender"),
      xP = (e) => e.dispatch("Init"),
      wP = (e, t) => e.dispatch("PlaceholderToggle", { state: t }),
      KC = (e, t, n) => e.dispatch(t, n),
      GC = (e, t, n, s) =>
        e.dispatch("FormatApply", { format: t, node: n, vars: s }),
      Yf = (e, t, n, s) =>
        e.dispatch("FormatRemove", { format: t, node: n, vars: s }),
      SP = (e, t) => e.dispatch("BeforeSetContent", t),
      YC = (e, t) => e.dispatch("SetContent", t),
      _P = (e, t) => e.dispatch("BeforeGetContent", t),
      XC = (e, t) => e.dispatch("GetContent", t),
      kP = (e, t) => e.dispatch("AutocompleterStart", t),
      NP = (e, t) => e.dispatch("AutocompleterUpdate", t),
      AP = (e) => e.dispatch("AutocompleterEnd"),
      TP = (e, t, n) =>
        e.dispatch("PastePreProcess", { content: t, internal: n }),
      RP = (e, t, n) =>
        e.dispatch("PastePostProcess", { node: t, internal: n }),
      QC = (e, t) => e.dispatch("PastePlainTextToggle", { state: t }),
      ge = {
        BACKSPACE: 8,
        DELETE: 46,
        DOWN: 40,
        ENTER: 13,
        ESC: 27,
        LEFT: 37,
        RIGHT: 39,
        SPACEBAR: 32,
        TAB: 9,
        UP: 38,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        modifierPressed: (e) =>
          e.shiftKey || e.ctrlKey || e.altKey || ge.metaKeyPressed(e),
        metaKeyPressed: (e) =>
          et.os.isMacOS() || et.os.isiOS() ? e.metaKey : e.ctrlKey && !e.altKey,
      },
      ZC = (e, t) => {
        const n = "data-mce-selected",
          s = t.dom,
          o = G.each;
        let r, i, a, c, f, d, p, C, b, x, y, E, _, P, z;
        const I = t.getDoc(),
          $ = document,
          te = Math.abs,
          W = Math.round,
          q = t.getBody();
        let Q, J;
        const Ee = {
            nw: [0, 0, -1, -1],
            ne: [1, 0, 1, -1],
            se: [1, 1, 1, 1],
            sw: [0, 1, -1, 1],
          },
          ae = (Y) => ke(Y) && (Th(Y) || t.dom.is(Y, "figure.image")),
          se = (Y) => ws(Y) || s.hasClass(Y, "mce-preview-object"),
          Ke = (Y, he) => {
            if (Y.type === "longpress" || Y.type.indexOf("touch") === 0) {
              const Ae = Y.touches[0];
              return ae(Y.target) && !qC(Ae.clientX, Ae.clientY, he);
            } else return ae(Y.target) && !qC(Y.clientX, Y.clientY, he);
          },
          We = (Y) => {
            const he = Y.target;
            Ke(Y, t.selection.getRng()) &&
              !Y.isDefaultPrevented() &&
              t.selection.select(he);
          },
          lt = (Y) =>
            s.is(Y, "figure.image")
              ? [Y.querySelector("img")]
              : s.hasClass(Y, "mce-preview-object") && ke(Y.firstElementChild)
              ? [Y, Y.firstElementChild]
              : [Y],
          qt = (Y) => {
            const he = qb(t);
            return !he ||
              Y.getAttribute("data-mce-resize") === "false" ||
              Y === t.getBody()
              ? !1
              : s.hasClass(Y, "mce-preview-object")
              ? Xs(S.fromDom(Y.firstElementChild), he)
              : Xs(S.fromDom(Y), he);
          },
          Z = (Y) =>
            se(Y)
              ? s.create("img", { src: et.transparentSrc })
              : Y.cloneNode(!0),
          pe = (Y, he, Ae) => {
            if (ke(Ae)) {
              const Te = lt(Y);
              T(Te, (je) => {
                je.style[he] || !t.schema.isValid(je.nodeName.toLowerCase(), he)
                  ? s.setStyle(je, he, Ae)
                  : s.setAttrib(je, he, "" + Ae);
              });
            }
          },
          Me = (Y, he, Ae) => {
            pe(Y, "width", he), pe(Y, "height", Ae);
          },
          De = (Y) => {
            let he, Ae, Te, je, ze;
            (he = Y.screenX - d),
              (Ae = Y.screenY - p),
              (P = he * c[2] + x),
              (z = Ae * c[3] + y),
              (P = P < 5 ? 5 : P),
              (z = z < 5 ? 5 : z),
              (ae(r) || se(r)) && m1(t) !== !1
                ? (Te = !ge.modifierPressed(Y))
                : (Te = ge.modifierPressed(Y)),
              Te &&
                (te(he) > te(Ae)
                  ? ((z = W(P * E)), (P = W(z / E)))
                  : ((P = W(z / E)), (z = W(P * E)))),
              Me(i, P, z),
              (je = c.startPos.x + he),
              (ze = c.startPos.y + Ae),
              (je = je > 0 ? je : 0),
              (ze = ze > 0 ? ze : 0),
              s.setStyles(a, { left: je, top: ze, display: "block" }),
              (a.innerHTML = P + " &times; " + z),
              c[2] < 0 &&
                i.clientWidth <= P &&
                s.setStyle(i, "left", C + (x - P)),
              c[3] < 0 &&
                i.clientHeight <= z &&
                s.setStyle(i, "top", b + (y - z)),
              (he = q.scrollWidth - Q),
              (Ae = q.scrollHeight - J),
              he + Ae !== 0 && s.setStyles(a, { left: je - he, top: ze - Ae }),
              _ || (CP(t, r, x, y, "corner-" + c.name), (_ = !0));
          },
          me = () => {
            const Y = _;
            (_ = !1),
              Y && (pe(r, "width", P), pe(r, "height", z)),
              s.unbind(I, "mousemove", De),
              s.unbind(I, "mouseup", me),
              $ !== I &&
                (s.unbind($, "mousemove", De), s.unbind($, "mouseup", me)),
              s.remove(i),
              s.remove(a),
              s.remove(f),
              le(r),
              Y &&
                (yP(t, r, P, z, "corner-" + c.name),
                s.setAttrib(r, "style", s.getAttrib(r, "style"))),
              t.nodeChanged();
          },
          le = (Y) => {
            Ct();
            const he = s.getPos(Y, q),
              Ae = he.x,
              Te = he.y,
              je = Y.getBoundingClientRect(),
              ze = je.width || je.right - je.left,
              Le = je.height || je.bottom - je.top;
            r !== Y && (xe(), (r = Y), (P = z = 0));
            const yt = t.dispatch("ObjectSelected", { target: Y }),
              Qt = s.getAttrib(r, n, "1");
            qt(Y) && !yt.isDefaultPrevented()
              ? o(Ee, (Zt, Bt) => {
                  let Ft;
                  const Jt = (Tt) => {
                    const hn = lt(r)[0];
                    (d = Tt.screenX),
                      (p = Tt.screenY),
                      (x = hn.clientWidth),
                      (y = hn.clientHeight),
                      (E = y / x),
                      (c = Zt),
                      (c.name = Bt),
                      (c.startPos = { x: ze * Zt[0] + Ae, y: Le * Zt[1] + Te }),
                      (Q = q.scrollWidth),
                      (J = q.scrollHeight),
                      (f = s.add(q, "div", {
                        class: "mce-resize-backdrop",
                        "data-mce-bogus": "all",
                      })),
                      s.setStyles(f, {
                        position: "fixed",
                        left: "0",
                        top: "0",
                        width: "100%",
                        height: "100%",
                      }),
                      (i = Z(r)),
                      s.addClass(i, "mce-clonedresizable"),
                      s.setAttrib(i, "data-mce-bogus", "all"),
                      (i.contentEditable = "false"),
                      s.setStyles(i, { left: Ae, top: Te, margin: 0 }),
                      Me(i, ze, Le),
                      i.removeAttribute(n),
                      q.appendChild(i),
                      s.bind(I, "mousemove", De),
                      s.bind(I, "mouseup", me),
                      $ !== I &&
                        (s.bind($, "mousemove", De), s.bind($, "mouseup", me)),
                      (a = s.add(
                        q,
                        "div",
                        { class: "mce-resize-helper", "data-mce-bogus": "all" },
                        x + " &times; " + y
                      ));
                  };
                  (Ft = s.get("mceResizeHandle" + Bt)),
                    Ft && s.remove(Ft),
                    (Ft = s.add(q, "div", {
                      id: "mceResizeHandle" + Bt,
                      "data-mce-bogus": "all",
                      class: "mce-resizehandle",
                      unselectable: !0,
                      style: "cursor:" + Bt + "-resize; margin:0; padding:0",
                    })),
                    s.bind(Ft, "mousedown", (Tt) => {
                      Tt.stopImmediatePropagation(),
                        Tt.preventDefault(),
                        Jt(Tt);
                    }),
                    (Zt.elm = Ft),
                    s.setStyles(Ft, {
                      left: ze * Zt[0] + Ae - Ft.offsetWidth / 2,
                      top: Le * Zt[1] + Te - Ft.offsetHeight / 2,
                    });
                })
              : xe(),
              s.getAttrib(r, n) || r.setAttribute(n, Qt);
          },
          xe = () => {
            Ct(),
              r && r.removeAttribute(n),
              ht(Ee, (Y, he) => {
                const Ae = s.get("mceResizeHandle" + he);
                Ae && (s.unbind(Ae), s.remove(Ae));
              });
          },
          Be = (Y) => {
            var he;
            let Ae, Te;
            const je = (ze, Le) => {
              if (ze)
                do if (ze === Le) return !0;
                while ((ze = ze.parentNode));
            };
            if (!(_ || t.removed)) {
              if (
                (o(
                  s.select("img[data-mce-selected],hr[data-mce-selected]"),
                  (ze) => {
                    ze.removeAttribute(n);
                  }
                ),
                (Te = Y.type === "mousedown" ? Y.target : e.getNode()),
                (Te =
                  (he = Jo(
                    S.fromDom(Te),
                    "table,img,figure.image,hr,video,span.mce-preview-object"
                  ).getOrUndefined()) === null || he === void 0
                    ? void 0
                    : he.dom),
                je(Te, q) &&
                  (Lt(),
                  (Ae = e.getStart(!0)),
                  je(Ae, Te) && je(e.getEnd(!0), Te)))
              ) {
                le(Te);
                return;
              }
              xe();
            }
          },
          Ct = () => {
            ht(Ee, (Y) => {
              Y.elm && (s.unbind(Y.elm), delete Y.elm);
            });
          },
          Lt = () => {
            try {
              t.getDoc().execCommand("enableObjectResizing", !1, "false");
            } catch {}
          };
        return (
          t.on("init", () => {
            Lt();
            const Y = Sl((he) => {
              t.composing || Be(he);
            }, 0);
            t.on(
              "nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged",
              Y.throttle
            ),
              t.on("keyup compositionend", (he) => {
                r && r.nodeName === "TABLE" && Y.throttle(he);
              }),
              t.on("hide blur", xe),
              t.on("contextmenu longpress", We, !0);
          }),
          t.on("remove", Ct),
          {
            isResizable: qt,
            showResizeRect: le,
            hideResizeRect: xe,
            updateResizeRect: Be,
            destroy: () => {
              r = i = f = null;
            },
          }
        );
      },
      PP = (e, t) => {
        t.fold(
          (n) => {
            e.setStartBefore(n.dom);
          },
          (n, s) => {
            e.setStart(n.dom, s);
          },
          (n) => {
            e.setStartAfter(n.dom);
          }
        );
      },
      OP = (e, t) => {
        t.fold(
          (n) => {
            e.setEndBefore(n.dom);
          },
          (n, s) => {
            e.setEnd(n.dom, s);
          },
          (n) => {
            e.setEndAfter(n.dom);
          }
        );
      },
      JC = (e, t, n) => {
        const s = e.document.createRange();
        return PP(s, t), OP(s, n), s;
      },
      Xf = (e, t, n, s, o) => {
        const r = e.document.createRange();
        return r.setStart(t.dom, n), r.setEnd(s.dom, o), r;
      },
      ha = _s.generate([
        { ltr: ["start", "soffset", "finish", "foffset"] },
        { rtl: ["start", "soffset", "finish", "foffset"] },
      ]),
      ey = (e, t, n) =>
        t(
          S.fromDom(n.startContainer),
          n.startOffset,
          S.fromDom(n.endContainer),
          n.endOffset
        ),
      DP = (e, t) =>
        t.match({
          domRange: (n) => ({ ltr: K(n), rtl: g.none }),
          relative: (n, s) => ({
            ltr: qo(() => JC(e, n, s)),
            rtl: qo(() => g.some(JC(e, s, n))),
          }),
          exact: (n, s, o, r) => ({
            ltr: qo(() => Xf(e, n, s, o, r)),
            rtl: qo(() => g.some(Xf(e, o, r, n, s))),
          }),
        }),
      BP = (e, t) => {
        const n = t.ltr();
        return n.collapsed
          ? t
              .rtl()
              .filter((o) => o.collapsed === !1)
              .map((o) =>
                ha.rtl(
                  S.fromDom(o.endContainer),
                  o.endOffset,
                  S.fromDom(o.startContainer),
                  o.startOffset
                )
              )
              .getOrThunk(() => ey(e, ha.ltr, n))
          : ey(e, ha.ltr, n);
      },
      IP = (e, t) => {
        const n = DP(e, t);
        return BP(e, n);
      };
    ha.ltr, ha.rtl;
    const ty = {
        create: (e, t, n, s) => ({
          start: e,
          soffset: t,
          finish: n,
          foffset: s,
        }),
      },
      $P = (e, t, n) => {
        var s, o;
        return g
          .from(
            (o = (s = e.dom).caretPositionFromPoint) === null || o === void 0
              ? void 0
              : o.call(s, t, n)
          )
          .bind((r) => {
            if (r.offsetNode === null) return g.none();
            const i = e.dom.createRange();
            return i.setStart(r.offsetNode, r.offset), i.collapse(), g.some(i);
          });
      },
      LP = (e, t, n) => {
        var s, o;
        return g.from(
          (o = (s = e.dom).caretRangeFromPoint) === null || o === void 0
            ? void 0
            : o.call(s, t, n)
        );
      },
      FP = (() =>
        document.caretPositionFromPoint
          ? $P
          : document.caretRangeFromPoint
          ? LP
          : g.none)(),
      MP = (e, t, n) => {
        const s = S.fromDom(e.document);
        return FP(s, t, n).map((o) =>
          ty.create(
            S.fromDom(o.startContainer),
            o.startOffset,
            S.fromDom(o.endContainer),
            o.endOffset
          )
        );
      },
      Qf = _s.generate([
        { before: ["element"] },
        { on: ["element", "offset"] },
        { after: ["element"] },
      ]),
      UP = (e, t, n, s) => e.fold(t, n, s),
      zP = (e) => e.fold(xt, xt, xt),
      HP = Qf.before,
      VP = Qf.on,
      WP = Qf.after,
      to = { before: HP, on: VP, after: WP, cata: UP, getStart: zP },
      Wl = _s.generate([
        { domRange: ["rng"] },
        { relative: ["startSitu", "finishSitu"] },
        { exact: ["start", "soffset", "finish", "foffset"] },
      ]),
      jP = (e) => Wl.exact(e.start, e.soffset, e.finish, e.foffset),
      qP = (e) =>
        e.match({
          domRange: (t) => S.fromDom(t.startContainer),
          relative: (t, n) => to.getStart(t),
          exact: (t, n, s, o) => t,
        }),
      KP = Wl.domRange,
      GP = Wl.relative,
      YP = Wl.exact,
      XP = (e) => {
        const t = qP(e);
        return ih(t);
      },
      QP = ty.create,
      li = {
        domRange: KP,
        relative: GP,
        exact: YP,
        exactFromRange: jP,
        getWin: XP,
        range: QP,
      },
      jl = (e, t) => {
        const n = bt(e);
        return n === "input"
          ? to.after(e)
          : R(["br", "img"], n)
          ? t === 0
            ? to.before(e)
            : to.after(e)
          : to.on(e, t);
      },
      ZP = (e, t) => {
        const n = e.fold(to.before, jl, to.after),
          s = t.fold(to.before, jl, to.after);
        return li.relative(n, s);
      },
      ny = (e, t, n, s) => {
        const o = jl(e, t),
          r = jl(n, s);
        return li.relative(o, r);
      },
      JP = (e) =>
        e.match({
          domRange: (t) => {
            const n = S.fromDom(t.startContainer),
              s = S.fromDom(t.endContainer);
            return ny(n, t.startOffset, s, t.endOffset);
          },
          relative: ZP,
          exact: ny,
        }),
      Zf = (e, t) => {
        const s = (t || document).createDocumentFragment();
        return (
          T(e, (o) => {
            s.appendChild(o.dom);
          }),
          S.fromDom(s)
        );
      },
      eO = (e) => {
        const t = li.getWin(e).dom,
          n = (o, r, i, a) => Xf(t, o, r, i, a),
          s = JP(e);
        return IP(t, s).match({ ltr: n, rtl: n });
      },
      tO = (e, t, n) => MP(e, t, n),
      sy = (e, t, n) =>
        tO(n.defaultView, e, t)
          .map((s) => {
            const o = n.createRange();
            return (
              o.setStart(s.start.dom, s.soffset),
              o.setEnd(s.finish.dom, s.foffset),
              o
            );
          })
          .getOrUndefined(),
      Jf = (e, t) =>
        e &&
        t &&
        e.startContainer === t.startContainer &&
        e.startOffset === t.startOffset &&
        e.endContainer === t.endContainer &&
        e.endOffset === t.endOffset,
      nO = (e, t, n) => {
        for (; e && e !== t; ) {
          if (n(e)) return e;
          e = e.parentNode;
        }
        return null;
      },
      oy = (e, t, n) => nO(e, t, n) !== null,
      sO = (e, t, n) => oy(e, t, (s) => s.nodeName === n),
      ed = (e) => e && e.nodeName === "TABLE",
      oO = (e) => e && /^(TD|TH|CAPTION)$/.test(e.nodeName),
      rO = (e, t) => Ln(e) && oy(e, t, Ps) === !1,
      ry = (e, t, n) => {
        const s = new zt(
          t,
          e.getParent(t.parentNode, e.isBlock) || e.getRoot()
        );
        for (; (t = s[n ? "prev" : "next"]()); ) if (Dt(t)) return !0;
      },
      iO = (e, t) => e.previousSibling && e.previousSibling.nodeName === t,
      aO = (e, t) => {
        for (; t && t !== e; ) {
          if (wt(t)) return !0;
          t = t.parentNode;
        }
        return !1;
      },
      td = (e, t, n, s, o) => {
        let r;
        const i = e.getRoot();
        let a;
        const c = e.schema.getNonEmptyElements(),
          f = e.getParent(o.parentNode, e.isBlock) || i;
        if (s && Dt(o) && t && e.isEmpty(f))
          return g.some(L(o.parentNode, e.nodeIndex(o)));
        const d = new zt(o, f);
        for (; (a = d[s ? "prev" : "next"]()); ) {
          if (e.getContentEditableParent(a) === "false" || rO(a, i))
            return g.none();
          if (ne(a) && a.nodeValue.length > 0)
            return sO(a, i, "A") === !1
              ? g.some(L(a, s ? a.nodeValue.length : 0))
              : g.none();
          if (e.isBlock(a) || c[a.nodeName.toLowerCase()]) return g.none();
          r = a;
        }
        return n && r ? g.some(L(r, 0)) : g.none();
      },
      iy = (e, t, n, s) => {
        let o, r;
        const i = e.getRoot();
        let a,
          c,
          f = !1;
        (o = s[(n ? "start" : "end") + "Container"]),
          (r = s[(n ? "start" : "end") + "Offset"]);
        const d = ve(o) && r === o.childNodes.length,
          p = e.schema.getNonEmptyElements();
        if (((c = n), Ln(o))) return g.none();
        if (
          (ve(o) && r > o.childNodes.length - 1 && (c = !1),
          Ku(o) && ((o = i), (r = 0)),
          o === i)
        ) {
          if (
            c &&
            ((a = o.childNodes[r > 0 ? r - 1 : 0]),
            a && (Ln(a) || p[a.nodeName] || ed(a)))
          )
            return g.none();
          if (o.hasChildNodes()) {
            if (
              ((r = Math.min(!c && r > 0 ? r - 1 : r, o.childNodes.length - 1)),
              (o = o.childNodes[r]),
              (r = ne(o) && d ? o.data.length : 0),
              (!t && o === i.lastChild && ed(o)) || aO(i, o) || Ln(o))
            )
              return g.none();
            if (o.hasChildNodes() && ed(o) === !1) {
              a = o;
              const C = new zt(o, i);
              do {
                if (wt(a) || Ln(a)) {
                  f = !1;
                  break;
                }
                if (ne(a) && a.nodeValue.length > 0) {
                  (r = c ? 0 : a.nodeValue.length), (o = a), (f = !0);
                  break;
                }
                if (p[a.nodeName.toLowerCase()] && !oO(a)) {
                  (r = e.nodeIndex(a)), (o = a.parentNode), c || r++, (f = !0);
                  break;
                }
              } while ((a = c ? C.next() : C.prev()));
            }
          }
        }
        return (
          t &&
            (ne(o) &&
              r === 0 &&
              td(e, d, t, !0, o).each((C) => {
                (o = C.container()), (r = C.offset()), (f = !0);
              }),
            ve(o) &&
              ((a = o.childNodes[r]),
              a || (a = o.childNodes[r - 1]),
              a &&
                Dt(a) &&
                !iO(a, "A") &&
                !ry(e, a, !1) &&
                !ry(e, a, !0) &&
                td(e, d, t, !0, a).each((C) => {
                  (o = C.container()), (r = C.offset()), (f = !0);
                }))),
          c &&
            !t &&
            ne(o) &&
            r === o.nodeValue.length &&
            td(e, d, t, !1, o).each((C) => {
              (o = C.container()), (r = C.offset()), (f = !0);
            }),
          f ? g.some(L(o, r)) : g.none()
        );
      },
      ql = (e, t) => {
        const n = t.collapsed,
          s = t.cloneRange(),
          o = L.fromRangeStart(t);
        return (
          iy(e, n, !0, s).each((r) => {
            (!n || !L.isAbove(o, r)) && s.setStart(r.container(), r.offset());
          }),
          n ||
            iy(e, n, !1, s).each((r) => {
              s.setEnd(r.container(), r.offset());
            }),
          n && s.collapse(!0),
          Jf(t, s) ? g.none() : g.some(s)
        );
      },
      Kl = (e, t) => e.splitText(t),
      Gl = (e) => {
        let t = e.startContainer,
          n = e.startOffset,
          s = e.endContainer,
          o = e.endOffset;
        return (
          t === s && ne(t)
            ? n > 0 &&
              n < t.nodeValue.length &&
              ((s = Kl(t, n)),
              (t = s.previousSibling),
              o > n
                ? ((o = o - n),
                  (t = s = Kl(s, o).previousSibling),
                  (o = s.nodeValue.length),
                  (n = 0))
                : (o = 0))
            : (ne(t) &&
                n > 0 &&
                n < t.nodeValue.length &&
                ((t = Kl(t, n)), (n = 0)),
              ne(s) &&
                o > 0 &&
                o < s.nodeValue.length &&
                ((s = Kl(s, o).previousSibling), (o = s.nodeValue.length))),
          { startContainer: t, startOffset: n, endContainer: s, endOffset: o }
        );
      },
      ci = (e) => ({
        walk: (o, r) => ma(e, o, r),
        split: Gl,
        normalize: (o) =>
          ql(e, o).fold(
            mt,
            (r) => (
              o.setStart(r.startContainer, r.startOffset),
              o.setEnd(r.endContainer, r.endOffset),
              !0
            )
          ),
      });
    (ci.compareRanges = Jf),
      (ci.getCaretRangeFromPoint = sy),
      (ci.getSelectedNode = kl),
      (ci.getNode = Ao);
    const lO = ((e, t) => {
        const n = (a, c) => {
            if (!yn(c) && !c.match(/^[0-9]+$/))
              throw new Error(
                e + ".set accepts only positive integer values. Value was " + c
              );
            const f = a.dom;
            Vi(f) && (f.style[e] = c + "px");
          },
          s = (a) => {
            const c = t(a);
            if (c <= 0 || c === null) {
              const f = xs(a, e);
              return parseFloat(f) || 0;
            }
            return c;
          },
          o = s,
          r = (a, c) =>
            X(
              c,
              (f, d) => {
                const p = xs(a, d),
                  C = p === void 0 ? 0 : parseInt(p, 10);
                return isNaN(C) ? f : f + C;
              },
              0
            );
        return {
          set: n,
          get: s,
          getOuter: o,
          aggregate: r,
          max: (a, c, f) => {
            const d = r(a, f);
            return c > d ? c - d : 0;
          },
        };
      })("height", (e) => {
        const t = e.dom;
        return Hr(e) ? t.getBoundingClientRect().height : t.offsetHeight;
      }),
      cO = (e) => lO.get(e),
      ay = () => S.fromDom(document),
      ly = (e, t) =>
        e.view(t).fold(K([]), (s) => {
          const o = e.owner(s),
            r = ly(e, o);
          return [s].concat(r);
        }),
      uO = (e, t) => {
        const n = t.owner(e);
        return ly(t, n);
      };
    var fO = Object.freeze({
      __proto__: null,
      view: (e) => {
        var t;
        return (
          e.dom === document
            ? g.none()
            : g.from(
                (t = e.dom.defaultView) === null || t === void 0
                  ? void 0
                  : t.frameElement
              )
        ).map(S.fromDom);
      },
      owner: (e) => yo(e),
    });
    const dO = (e) => {
        const t = ay(),
          n = ju(t),
          s = uO(e, fO),
          o = Wu(e),
          r = fe(
            s,
            (i, a) => {
              const c = Wu(a);
              return { left: i.left + c.left, top: i.top + c.top };
            },
            { left: 0, top: 0 }
          );
        return Vr(r.left + o.left + n.left, r.top + o.top + n.top);
      },
      nd = (e) => bt(e) === "textarea",
      mO = (e, t) => e.dispatch("ScrollIntoView", t).isDefaultPrevented(),
      pO = (e, t) => {
        e.dispatch("AfterScrollIntoView", t);
      },
      gO = (e, t) => {
        const n = Yt(e);
        if (n.length === 0 || nd(e)) return { element: e, offset: t };
        if (t < n.length && !nd(n[t])) return { element: n[t], offset: 0 };
        {
          const s = n[n.length - 1];
          return nd(s)
            ? { element: e, offset: t }
            : bt(s) === "img"
            ? { element: s, offset: 1 }
            : In(s)
            ? { element: s, offset: Gf(s).length }
            : { element: s, offset: Yt(s).length };
        }
      },
      cy = (e, t) => {
        const n = wN(e),
          s = cO(e);
        return { element: e, bottom: n.top + s, height: s, pos: n, cleanup: t };
      },
      hO = (e, t) => {
        const n = gO(e, t),
          s = S.fromHtml(
            '<span data-mce-bogus="all" style="display: inline-block;">' +
              Kt +
              "</span>"
          );
        return Xn(n.element, s), cy(s, () => At(s));
      },
      bO = (e) => cy(S.fromDom(e), Ie),
      uy = (e, t, n, s) => {
        yO(e, (o, r) => CO(e, t, n, s), n);
      },
      fy = (e, t, n, s, o) => {
        const r = { elm: s.element.dom, alignToTop: o };
        if (mO(e, r)) return;
        const i = ju(t).top;
        n(t, i, s, o), pO(e, r);
      },
      CO = (e, t, n, s) => {
        const o = S.fromDom(e.getBody()),
          r = S.fromDom(e.getDoc());
        uN(o);
        const i = hO(S.fromDom(n.startContainer), n.startOffset);
        fy(e, r, t, i, s), i.cleanup();
      },
      dy = (e, t, n, s) => {
        const o = S.fromDom(e.getDoc());
        fy(e, o, n, bO(t), s);
      },
      yO = (e, t, n) => {
        const s = n.startContainer,
          o = n.startOffset,
          r = n.endContainer,
          i = n.endOffset;
        t(S.fromDom(s), S.fromDom(r));
        const a = e.dom.createRng();
        a.setStart(s, o), a.setEnd(r, i), e.selection.setRng(n);
      },
      sd = (e, t, n, s) => {
        const o = e.pos;
        if (n) xh(o.left, o.top, s);
        else {
          const r = o.top - t + e.height;
          xh(o.left, r, s);
        }
      },
      my = (e, t, n, s, o) => {
        const r = n + t,
          i = s.pos.top,
          a = s.bottom,
          c = a - i >= n;
        i < t
          ? sd(s, n, o !== !1, e)
          : i > r
          ? sd(s, n, c ? o !== !1 : o === !0, e)
          : a > r && !c && sd(s, n, o === !0, e);
      },
      py = (e, t, n, s) => {
        const o = e.dom.defaultView.innerHeight;
        my(e, t, o, n, s);
      },
      gy = (e, t, n, s) => {
        const o = e.dom.defaultView.innerHeight;
        my(e, t, o, n, s);
        const r = dO(n.element),
          i = _h(window);
        r.top < i.y
          ? wh(n.element, s !== !1)
          : r.top > i.bottom && wh(n.element, s === !0);
      },
      vO = (e, t, n) => uy(e, py, t, n),
      EO = (e, t, n) => dy(e, t, py, n),
      xO = (e, t, n) => uy(e, gy, t, n),
      wO = (e, t, n) => dy(e, t, gy, n),
      SO = (e, t, n) => {
        (e.inline ? EO : wO)(e, t, n);
      },
      ba = (e, t, n) => {
        (e.inline ? vO : xO)(e, t, n);
      },
      hy = (e) => e.dom.focus(),
      by = (e) => {
        const t = Yo(e).dom;
        return e.dom === t.activeElement;
      },
      od = (e = ay()) => g.from(e.dom.activeElement).map(S.fromDom),
      _O = (e) => od(Yo(e)).filter((t) => e.dom.contains(t.dom)),
      Cy = (e, t) => {
        const n = In(t) ? Gf(t).length : Yt(t).length + 1;
        return e > n ? n : e < 0 ? 0 : e;
      },
      kO = (e) =>
        li.range(
          e.start,
          Cy(e.soffset, e.start),
          e.finish,
          Cy(e.foffset, e.finish)
        ),
      yy = (e, t) => !ul(t.dom) && (Qs(e, t) || tt(e, t)),
      vy = (e) => (t) => yy(e, t.start) && yy(e, t.finish),
      NO = (e) => e.inline,
      AO = (e) =>
        li.range(
          S.fromDom(e.startContainer),
          e.startOffset,
          S.fromDom(e.endContainer),
          e.endOffset
        ),
      TO = (e) => {
        const t = e.getSelection();
        return (
          !t || t.rangeCount === 0 ? g.none() : g.from(t.getRangeAt(0))
        ).map(AO);
      },
      RO = (e) => {
        const t = ih(e);
        return TO(t.dom).filter(vy(e));
      },
      PO = (e, t) => g.from(t).filter(vy(e)).map(kO),
      OO = (e) => {
        const t = document.createRange();
        try {
          return (
            t.setStart(e.start.dom, e.soffset),
            t.setEnd(e.finish.dom, e.foffset),
            g.some(t)
          );
        } catch {
          return g.none();
        }
      },
      rd = (e) => {
        const t = NO(e) ? RO(S.fromDom(e.getBody())) : g.none();
        e.bookmark = t.isSome() ? t : e.bookmark;
      },
      id = (e) =>
        (e.bookmark ? e.bookmark : g.none())
          .bind((n) => PO(S.fromDom(e.getBody()), n))
          .bind(OO),
      DO = (e) => {
        id(e).each((t) => e.selection.setRng(t));
      },
      Ey = {
        isEditorUIElement: (e) => {
          const t = e.className.toString();
          return t.indexOf("tox-") !== -1 || t.indexOf("mce-") !== -1;
        },
      },
      BO = (e, t) => (yn(t) || (t = 0), setTimeout(e, t)),
      IO = (e, t) => (yn(t) || (t = 0), setInterval(e, t)),
      Un = {
        setEditorTimeout: (e, t, n) =>
          BO(() => {
            e.removed || t();
          }, n),
        setEditorInterval: (e, t, n) => {
          const s = IO(() => {
            e.removed ? clearInterval(s) : t();
          }, n);
          return s;
        },
      },
      $O = (e) => e.type === "nodechange" && e.selectionChange,
      LO = (e, t) => {
        const n = () => {
          t.throttle();
        };
        st.DOM.bind(document, "mouseup", n),
          e.on("remove", () => {
            st.DOM.unbind(document, "mouseup", n);
          });
      },
      FO = (e, t) => {
        e.on("mouseup touchend", (n) => {
          t.throttle();
        });
      },
      MO = (e, t) => {
        FO(e, t),
          e.on("keyup NodeChange AfterSetSelectionRange", (n) => {
            $O(n) || rd(e);
          });
      },
      UO = (e) => {
        const t = Sl(() => {
          rd(e);
        }, 0);
        e.on("init", () => {
          e.inline && LO(e, t), MO(e, t);
        }),
          e.on("remove", () => {
            t.cancel();
          });
      };
    let Ca;
    const ad = st.DOM,
      zO = (e) => Ey.isEditorUIElement(e),
      HO = (e) => {
        const t = e.classList;
        return t !== void 0
          ? t.contains("tox-edit-area") ||
              t.contains("tox-edit-area__iframe") ||
              t.contains("mce-content-body")
          : !1;
      },
      Yl = (e, t) => {
        const n = E1(e);
        return (
          ad.getParent(t, (o) => zO(o) || (n ? e.dom.is(o, n) : !1)) !== null
        );
      },
      VO = (e) => {
        try {
          const t = Yo(S.fromDom(e.getElement()));
          return od(t).fold(
            () => document.body,
            (n) => n.dom
          );
        } catch {
          return document.body;
        }
      },
      WO = (e, t) => {
        const n = t.editor;
        UO(n),
          n.on("focusin", () => {
            const s = e.focusedEditor;
            s !== n &&
              (s && s.dispatch("blur", { focusedEditor: n }),
              e.setActive(n),
              (e.focusedEditor = n),
              n.dispatch("focus", { blurredEditor: s }),
              n.focus(!0));
          }),
          n.on("focusout", () => {
            Un.setEditorTimeout(n, () => {
              const s = e.focusedEditor;
              !Yl(n, VO(n)) &&
                s === n &&
                (n.dispatch("blur", { focusedEditor: null }),
                (e.focusedEditor = null));
            });
          }),
          Ca ||
            ((Ca = (s) => {
              const o = e.activeEditor;
              o &&
                mh(s).each((r) => {
                  r.ownerDocument === document &&
                    r !== document.body &&
                    !Yl(o, r) &&
                    e.focusedEditor === o &&
                    (o.dispatch("blur", { focusedEditor: null }),
                    (e.focusedEditor = null));
                });
            }),
            ad.bind(document, "focusin", Ca));
      },
      jO = (e, t) => {
        e.focusedEditor === t.editor && (e.focusedEditor = null),
          e.activeEditor || (ad.unbind(document, "focusin", Ca), (Ca = null));
      },
      qO = (e) => {
        e.on("AddEditor", oe(WO, e)), e.on("RemoveEditor", oe(jO, e));
      },
      KO = (e, t) =>
        e.dom.getParent(t, (n) => e.dom.getContentEditable(n) === "true"),
      GO = (e) =>
        e.collapsed
          ? g.from(Ao(e.startContainer, e.startOffset)).map(S.fromDom)
          : g.none(),
      YO = (e, t) =>
        GO(t).bind((n) =>
          jN(n) ? g.some(n) : Qs(e, n) === !1 ? g.some(e) : g.none()
        ),
      xy = (e, t) => {
        YO(S.fromDom(e.getBody()), t)
          .bind((n) => mn(n.dom))
          .fold(
            () => {
              e.selection.normalize();
            },
            (n) => e.selection.setRng(n.toRange())
          );
      },
      ld = (e) => {
        if (e.setActive)
          try {
            e.setActive();
          } catch {
            e.focus();
          }
        else e.focus();
      },
      XO = (e) => by(e) || _O(e).isSome(),
      QO = (e) => e.iframeElement && by(S.fromDom(e.iframeElement)),
      ZO = (e) => {
        const t = e.getBody();
        return t && XO(S.fromDom(t));
      },
      JO = (e) => {
        const t = Yo(S.fromDom(e.getElement()));
        return od(t)
          .filter((n) => !HO(n.dom) && Yl(e, n.dom))
          .isSome();
      },
      ur = (e) => (e.inline ? ZO(e) : QO(e)),
      eD = (e) => ur(e) || JO(e),
      tD = (e) => {
        const t = e.selection,
          n = e.getBody();
        let s = t.getRng();
        e.quirks.refreshContentEditable(),
          e.bookmark !== void 0 &&
            ur(e) === !1 &&
            id(e).each((r) => {
              e.selection.setRng(r), (s = r);
            });
        const o = KO(e, t.getNode());
        if (e.dom.isChildOf(o, n)) {
          ld(o), xy(e, s), cd(e);
          return;
        }
        e.inline || (et.browser.isOpera() || ld(n), e.getWin().focus()),
          (et.browser.isFirefox() || e.inline) && (ld(n), xy(e, s)),
          cd(e);
      },
      cd = (e) => e.editorManager.setActive(e),
      nD = (e, t) => {
        e.removed || (t ? cd(e) : tD(e));
      },
      wy = (e, t, n, s, o) => {
        const r = n ? t.startContainer : t.endContainer,
          i = n ? t.startOffset : t.endOffset;
        return g
          .from(r)
          .map(S.fromDom)
          .map((a) => (!s || !t.collapsed ? il(a, o(a, i)).getOr(a) : a))
          .bind((a) => (Kn(a) ? g.some(a) : Yn(a).filter(Kn)))
          .map((a) => a.dom)
          .getOr(e);
      },
      Sy = (e, t, n) => wy(e, t, !0, n, (s, o) => Math.min(uh(s), o)),
      _y = (e, t, n) => wy(e, t, !1, n, (s, o) => (o > 0 ? o - 1 : o)),
      ky = (e, t) => {
        const n = e;
        for (; e && ne(e) && e.length === 0; )
          e = t ? e.nextSibling : e.previousSibling;
        return e || n;
      },
      sD = (e, t) => {
        let n, s, o;
        if (!t) return e;
        (s = t.startContainer), (o = t.endContainer);
        const r = t.startOffset,
          i = t.endOffset;
        return (
          (n = t.commonAncestorContainer),
          !t.collapsed &&
          (s === o && i - r < 2 && s.hasChildNodes() && (n = s.childNodes[r]),
          s.nodeType === 3 &&
            o.nodeType === 3 &&
            (s.length === r ? (s = ky(s.nextSibling, !0)) : (s = s.parentNode),
            i === 0 ? (o = ky(o.previousSibling, !1)) : (o = o.parentNode),
            s && s === o))
            ? s
            : n && n.nodeType === 3
            ? n.parentNode
            : n
        );
      },
      oD = (e, t, n, s) => {
        let o;
        const r = [],
          i = e.getRoot();
        if (
          ((n = e.getParent(n || Sy(i, t, t.collapsed), e.isBlock)),
          (s = e.getParent(s || _y(i, t, t.collapsed), e.isBlock)),
          n && n !== i && r.push(n),
          n && s && n !== s)
        ) {
          o = n;
          const a = new zt(n, i);
          for (; (o = a.next()) && o !== s; ) e.isBlock(o) && r.push(o);
        }
        return s && n !== s && s !== i && r.push(s), r;
      },
      rD = (e, t, n) =>
        g.from(t).map((s) => {
          const o = e.nodeIndex(s),
            r = e.createRng();
          return (
            r.setStart(s.parentNode, o),
            r.setEnd(s.parentNode, o + 1),
            n && (jf(e, r, s, !0), jf(e, r, s, !1)),
            r
          );
        }),
      ud = (e, t) =>
        U(t, (n) => {
          const s = e.dispatch("GetSelectionRange", { range: n });
          return s.range !== n ? s.range : n;
        }),
      iD = (e) =>
        bt(e) === "img"
          ? 1
          : VC(e).fold(
              () => Yt(e).length,
              (t) => t.length
            ),
      aD = (e) =>
        VC(e)
          .filter((t) => t.trim().length !== 0 || t.indexOf(Xt) > -1)
          .isSome(),
      lD = ["img", "br"],
      Ny = (e) => aD(e) || R(lD, bt(e)),
      cD = (e) => BN(e, Ny),
      uD = (e) => fD(e, Ny),
      fD = (e, t) => {
        const n = (s) => {
          const o = Yt(s);
          for (let r = o.length - 1; r >= 0; r--) {
            const i = o[r];
            if (t(i)) return g.some(i);
            const a = n(i);
            if (a.isSome()) return a;
          }
          return g.none();
        };
        return n(e);
      },
      Ay = "[data-mce-autocompleter]",
      dD = (e, t) => {
        if (Ty(S.fromDom(e.getBody())).isNone()) {
          const n = S.fromHtml(
            '<span data-mce-autocompleter="1" data-mce-bogus="1"></span>',
            e.getDoc()
          );
          It(n, S.fromDom(t.extractContents())),
            t.insertNode(n.dom),
            Yn(n).each((s) => s.dom.normalize()),
            uD(n).map((s) => {
              e.selection.setCursorLocation(s.dom, iD(s));
            });
        }
      },
      mD = (e) => Jo(e, Ay),
      Ty = (e) => Yi(e, Ay),
      pD = (e, t) =>
        Ty(t).each((n) => {
          const s = e.selection.getBookmark();
          Eo(n), e.selection.moveToBookmark(s);
        }),
      gD = {
        "#text": 3,
        "#comment": 8,
        "#cdata": 4,
        "#pi": 7,
        "#doctype": 10,
        "#document-fragment": 11,
      },
      Xl = (e, t, n) => {
        const s = n ? "lastChild" : "firstChild",
          o = n ? "prev" : "next";
        if (e[s]) return e[s];
        if (e !== t) {
          let r = e[o];
          if (r) return r;
          for (let i = e.parent; i && i !== t; i = i.parent)
            if (((r = i[o]), r)) return r;
        }
      },
      hD = (e) => {
        if (!er(e.value)) return !1;
        const t = e.parent;
        return !(
          t &&
          (t.name !== "span" || t.attr("style")) &&
          /^[ ]+$/.test(e.value)
        );
      },
      Ry = (e) => {
        const t = e.name === "a" && !e.attr("href") && e.attr("id");
        return (
          e.attr("name") ||
          (e.attr("id") && !e.firstChild) ||
          e.attr("data-mce-bookmark") ||
          t
        );
      };
    class pn {
      constructor(t, n) {
        (this.name = t),
          (this.type = n),
          n === 1 && ((this.attributes = []), (this.attributes.map = {}));
      }
      static create(t, n) {
        const s = new pn(t, gD[t] || 1);
        return (
          n &&
            ht(n, (o, r) => {
              s.attr(r, o);
            }),
          s
        );
      }
      replace(t) {
        const n = this;
        return t.parent && t.remove(), n.insert(t, n), n.remove(), n;
      }
      attr(t, n) {
        const s = this;
        let o;
        if (typeof t != "string")
          return (
            t != null &&
              ht(t, (r, i) => {
                s.attr(i, r);
              }),
            s
          );
        if ((o = s.attributes)) {
          if (n !== void 0) {
            if (n === null) {
              if (t in o.map) {
                delete o.map[t];
                let r = o.length;
                for (; r--; ) if (o[r].name === t) return o.splice(r, 1), s;
              }
              return s;
            }
            if (t in o.map) {
              let r = o.length;
              for (; r--; )
                if (o[r].name === t) {
                  o[r].value = n;
                  break;
                }
            } else o.push({ name: t, value: n });
            return (o.map[t] = n), s;
          }
          return o.map[t];
        }
      }
      clone() {
        const t = this,
          n = new pn(t.name, t.type);
        let s;
        if ((s = t.attributes)) {
          const o = [];
          o.map = {};
          for (let r = 0, i = s.length; r < i; r++) {
            const a = s[r];
            a.name !== "id" &&
              ((o[o.length] = { name: a.name, value: a.value }),
              (o.map[a.name] = a.value));
          }
          n.attributes = o;
        }
        return (n.value = t.value), n;
      }
      wrap(t) {
        const n = this;
        return n.parent.insert(t, n), t.append(n), n;
      }
      unwrap() {
        const t = this;
        for (let n = t.firstChild; n; ) {
          const s = n.next;
          t.insert(n, t, !0), (n = s);
        }
        t.remove();
      }
      remove() {
        const t = this,
          n = t.parent,
          s = t.next,
          o = t.prev;
        return (
          n &&
            (n.firstChild === t
              ? ((n.firstChild = s), s && (s.prev = null))
              : (o.next = s),
            n.lastChild === t
              ? ((n.lastChild = o), o && (o.next = null))
              : (s.prev = o),
            (t.parent = t.next = t.prev = null)),
          t
        );
      }
      append(t) {
        const n = this;
        t.parent && t.remove();
        const s = n.lastChild;
        return (
          s
            ? ((s.next = t), (t.prev = s), (n.lastChild = t))
            : (n.lastChild = n.firstChild = t),
          (t.parent = n),
          t
        );
      }
      insert(t, n, s) {
        t.parent && t.remove();
        const o = n.parent || this;
        return (
          s
            ? (n === o.firstChild ? (o.firstChild = t) : (n.prev.next = t),
              (t.prev = n.prev),
              (t.next = n),
              (n.prev = t))
            : (n === o.lastChild ? (o.lastChild = t) : (n.next.prev = t),
              (t.next = n.next),
              (t.prev = n),
              (n.next = t)),
          (t.parent = o),
          t
        );
      }
      getAll(t) {
        const n = this,
          s = [];
        for (let o = n.firstChild; o; o = Xl(o, n)) o.name === t && s.push(o);
        return s;
      }
      children() {
        const t = this,
          n = [];
        for (let s = t.firstChild; s; s = s.next) n.push(s);
        return n;
      }
      empty() {
        const t = this;
        if (t.firstChild) {
          const n = [];
          for (let o = t.firstChild; o; o = Xl(o, t)) n.push(o);
          let s = n.length;
          for (; s--; ) {
            const o = n[s];
            o.parent = o.firstChild = o.lastChild = o.next = o.prev = null;
          }
        }
        return (t.firstChild = t.lastChild = null), t;
      }
      isEmpty(t, n = {}, s) {
        const o = this;
        let r = o.firstChild;
        if (Ry(o)) return !1;
        if (r)
          do {
            if (r.type === 1) {
              if (r.attr("data-mce-bogus")) continue;
              if (t[r.name] || Ry(r)) return !1;
            }
            if (
              r.type === 8 ||
              (r.type === 3 && !hD(r)) ||
              (r.type === 3 && r.parent && n[r.parent.name] && er(r.value)) ||
              (s && s(r))
            )
              return !1;
          } while ((r = Xl(r, o)));
        return !0;
      }
      walk(t) {
        return Xl(this, null, t);
      }
    }
    const bD = (e, t) =>
        /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(e.substr(t)),
      Py = (e, t, n = 0) => {
        const s = e.toLowerCase();
        if (s.indexOf("[if ", n) !== -1 && bD(s, n)) {
          const o = s.indexOf("[endif]", n);
          return s.indexOf(">", o);
        } else if (t) {
          const o = s.indexOf(">", n);
          return o !== -1 ? o : s.length;
        } else {
          const o = /--!?>/g;
          o.lastIndex = n;
          const r = o.exec(e);
          return r ? r.index + r[0].length : s.length;
        }
      },
      CD = (e, t, n) => {
        const s = /<([!?\/])?([A-Za-z0-9\-_:.]+)/g,
          o =
            /(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g,
          r = e.getVoidElements();
        let i = 1,
          a = n;
        for (; i !== 0; )
          for (s.lastIndex = a; ; ) {
            const c = s.exec(t);
            if (c === null) return a;
            if (c[1] === "!") {
              qn(c[2], "--")
                ? (a = Py(t, !1, c.index + 3))
                : (a = Py(t, !0, c.index + 1));
              break;
            } else {
              o.lastIndex = s.lastIndex;
              const f = o.exec(t);
              if (qs(f) || f.index !== s.lastIndex) continue;
              c[1] === "/" ? (i -= 1) : Fe(r, c[2]) || (i += 1),
                (a = s.lastIndex + f[0].length);
              break;
            }
          }
        return a;
      },
      yD = (e, t) => {
        const n = new RegExp(
          ["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"),
          "gi"
        );
        return t.replace(n, "");
      },
      Oy = (e, t) => {
        const n = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
          s = e.schema;
        let o = yD(e.getTempAttrs(), t);
        const r = s.getVoidElements();
        let i;
        for (; (i = n.exec(o)); ) {
          const a = n.lastIndex,
            c = i[0].length;
          let f;
          r[i[1]] ? (f = a) : (f = CD(s, o, a)),
            (o = o.substring(0, a - c) + o.substring(f)),
            (n.lastIndex = a - c);
        }
        return wo(o);
      },
      vD = Oy,
      ED = (e, t) => {
        const n = wn(e),
          s =
            new RegExp(`^(<${n}[^>]*>(&nbsp;|&#160;|\\s|\xA0|<br \\/>|)<\\/${n}>[\r
]*|<br \\/>[\r
]*)$`);
        return t.replace(s, "");
      },
      xD = (e, t, n) => {
        let s;
        return (
          t.format === "raw"
            ? (s = G.trim(vD(e.serializer, n.innerHTML)))
            : t.format === "text"
            ? (s = e.dom.isEmpty(n) ? "" : wo(n.innerText || n.textContent))
            : t.format === "tree"
            ? (s = e.serializer.serialize(n, t))
            : (s = ED(e, e.serializer.serialize(n, t))),
          t.format !== "text" && !gl(S.fromDom(n)) && be(s) ? G.trim(s) : s
        );
      },
      wD = (e, t) =>
        g
          .from(e.getBody())
          .fold(K(t.format === "tree" ? new pn("body", 11) : ""), (n) =>
            xD(e, t, n)
          ),
      SD = G.each,
      Dy = (e) => ({
        compare: (n, s) => {
          if (n.nodeName !== s.nodeName) return !1;
          const o = (i) => {
              const a = {};
              return (
                SD(e.getAttribs(i), (c) => {
                  const f = c.nodeName.toLowerCase();
                  f.indexOf("_") !== 0 &&
                    f !== "style" &&
                    f.indexOf("data-") !== 0 &&
                    (a[f] = e.getAttrib(i, f));
                }),
                a
              );
            },
            r = (i, a) => {
              let c, f;
              for (f in i)
                if (Fe(i, f)) {
                  if (((c = a[f]), typeof c == "undefined" || i[f] !== c))
                    return !1;
                  delete a[f];
                }
              for (f in a) if (Fe(a, f)) return !1;
              return !0;
            };
          return !r(o(n), o(s)) ||
            !r(
              e.parseStyle(e.getAttrib(n, "style")),
              e.parseStyle(e.getAttrib(s, "style"))
            )
            ? !1
            : !Mn(n) && !Mn(s);
        },
      }),
      By = G.makeMap,
      Iy = (e) => {
        const t = [];
        e = e || {};
        const n = e.indent,
          s = By(e.indent_before || ""),
          o = By(e.indent_after || ""),
          r = So.getEncodeFunc(e.entity_encoding || "raw", e.entities),
          i = e.element_format !== "xhtml";
        return {
          start: (a, c, f) => {
            let d, p, C, b;
            if (
              (n &&
                s[a] &&
                t.length > 0 &&
                ((b = t[t.length - 1]),
                b.length > 0 &&
                  b !==
                    `
` &&
                  t.push(`
`)),
              t.push("<", a),
              c)
            )
              for (d = 0, p = c.length; d < p; d++)
                (C = c[d]), t.push(" ", C.name, '="', r(C.value, !0), '"');
            !f || i ? (t[t.length] = ">") : (t[t.length] = " />"),
              f &&
                n &&
                o[a] &&
                t.length > 0 &&
                ((b = t[t.length - 1]),
                b.length > 0 &&
                  b !==
                    `
` &&
                  t.push(`
`));
          },
          end: (a) => {
            let c;
            t.push("</", a, ">"),
              n &&
                o[a] &&
                t.length > 0 &&
                ((c = t[t.length - 1]),
                c.length > 0 &&
                  c !==
                    `
` &&
                  t.push(`
`));
          },
          text: (a, c) => {
            a.length > 0 && (t[t.length] = c ? a : r(a));
          },
          cdata: (a) => {
            t.push("<![CDATA[", a, "]]>");
          },
          comment: (a) => {
            t.push("<!--", a, "-->");
          },
          pi: (a, c) => {
            c ? t.push("<?", a, " ", r(c), "?>") : t.push("<?", a, "?>"),
              n &&
                t.push(`
`);
          },
          doctype: (a) => {
            t.push(
              "<!DOCTYPE",
              a,
              ">",
              n
                ? `
`
                : ""
            );
          },
          reset: () => {
            t.length = 0;
          },
          getContent: () => t.join("").replace(/\n$/, ""),
        };
      },
      Po = (e, t = ko()) => {
        const n = Iy(e);
        return (
          (e = e || {}),
          (e.validate = "validate" in e ? e.validate : !0),
          {
            serialize: (o) => {
              const r = e.validate,
                i = {
                  3: (c) => {
                    n.text(c.value, c.raw);
                  },
                  8: (c) => {
                    n.comment(c.value);
                  },
                  7: (c) => {
                    n.pi(c.name, c.value);
                  },
                  10: (c) => {
                    n.doctype(c.value);
                  },
                  4: (c) => {
                    n.cdata(c.value);
                  },
                  11: (c) => {
                    if ((c = c.firstChild))
                      do a(c);
                      while ((c = c.next));
                  },
                };
              n.reset();
              const a = (c) => {
                const f = i[c.type];
                if (f) f(c);
                else {
                  const d = c.name,
                    p = d in t.getVoidElements();
                  let C = c.attributes;
                  if (r && C && C.length > 1) {
                    const b = [];
                    b.map = {};
                    const x = t.getElementRule(c.name);
                    if (x) {
                      for (
                        let y = 0, E = x.attributesOrder.length;
                        y < E;
                        y++
                      ) {
                        const _ = x.attributesOrder[y];
                        if (_ in C.map) {
                          const P = C.map[_];
                          (b.map[_] = P), b.push({ name: _, value: P });
                        }
                      }
                      for (let y = 0, E = C.length; y < E; y++) {
                        const _ = C[y].name;
                        if (!(_ in b.map)) {
                          const P = C.map[_];
                          (b.map[_] = P), b.push({ name: _, value: P });
                        }
                      }
                      C = b;
                    }
                  }
                  if ((n.start(d, C, p), !p)) {
                    let b = c.firstChild;
                    if (b) {
                      (d === "pre" || d === "textarea") &&
                        b.type === 3 &&
                        b.value[0] ===
                          `
` &&
                        n.text(
                          `
`,
                          !0
                        );
                      do a(b);
                      while ((b = b.next));
                    }
                    n.end(d);
                  }
                }
              };
              return (
                o.type === 1 && !e.inner
                  ? a(o)
                  : o.type === 3
                  ? i[3](o)
                  : i[11](o),
                n.getContent()
              );
            },
          }
        );
      },
      $y = new Set();
    T(
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
      (t) => {
        $y.add(t);
      }
    );
    const Ly = ["font", "text-decoration", "text-emphasis"],
      fd = (e, t) => Jn(e.parseStyle(e.getAttrib(t, "style"))),
      _D = (e) => $y.has(e),
      kD = (e, t) => it(fd(e, t), (n) => !_D(n)),
      ND = (e) => H(e, (t) => M(Ly, (n) => qn(t, n))),
      AD = (e, t, n) => {
        const s = fd(e, t),
          o = fd(e, n),
          r = (i) => {
            var a, c;
            const f = (a = e.getStyle(t, i)) !== null && a !== void 0 ? a : "",
              d = (c = e.getStyle(n, i)) !== null && c !== void 0 ? c : "";
            return Gs(f) && Gs(d) && f !== d;
          };
        return M(s, (i) => {
          const a = (c) => M(c, (f) => f === i);
          if (!a(o) && a(Ly)) {
            const c = ND(o);
            return M(c, r);
          } else return r(i);
        });
      },
      Fy = (e, t, n) =>
        g
          .from(n.container())
          .filter(ne)
          .exists((s) => {
            const o = e ? 0 : -1;
            return t(s.data.charAt(n.offset() + o));
          }),
      dd = oe(Fy, !0, da),
      md = oe(Fy, !1, da),
      TD = (e) => {
        const t = e.container();
        return (
          ne(t) &&
          (t.data.length === 0 ||
            (hl(t.data) && ga.isBookmarkNode(t.parentNode)))
        );
      },
      Oo = (e, t) => (n) =>
        g
          .from(Tf(e ? 0 : -1, n))
          .filter(t)
          .isSome(),
      My = (e) => Th(e) && xs(S.fromDom(e), "display") === "block",
      Uy = (e) => wt(e) && !kN(e),
      RD = Oo(!0, My),
      PD = Oo(!1, My),
      ya = Oo(!0, ws),
      va = Oo(!1, ws),
      zy = Oo(!0, Ki),
      Hy = Oo(!1, Ki),
      fr = Oo(!0, Uy),
      dr = Oo(!1, Uy),
      OD = (e) => {
        const t = [];
        let n = e.dom;
        for (; n; ) t.push(S.fromDom(n)), (n = n.lastChild);
        return t;
      },
      DD = (e) => {
        const t = xn(e, "br"),
          n = H(OD(e).slice(-1), jr);
        t.length === n.length && T(n, At);
      },
      mr = (e) => {
        qi(e), It(e, S.fromHtml('<br data-mce-bogus="1">'));
      },
      BD = (e) => {
        zu(e).each((t) => {
          Go(t).each((n) => {
            Ss(e) && jr(t) && Ss(n) && At(t);
          });
        });
      },
      ID = (e) => e.slice(0, -1),
      $D = (e, t, n) => (Qs(t, e) ? ID(nN(e, (s) => n(s) || tt(s, t))) : []),
      Vy = (e, t) => $D(e, t, mt),
      no = (e, t) => [e].concat(Vy(e, t)),
      pd = (e, t, n) => yC(e, t, n, TD),
      Wy = (e, t) => de(no(S.fromDom(t.container()), e), Ss),
      jy = (e, t, n) =>
        pd(e, t.dom, n).forall((s) =>
          Wy(t, n).fold(
            () => ks(s, n, t.dom) === !1,
            (o) => ks(s, n, t.dom) === !1 && Qs(o, S.fromDom(s.container()))
          )
        ),
      qy = (e, t, n) =>
        Wy(t, n).fold(
          () => pd(e, t.dom, n).forall((s) => ks(s, n, t.dom) === !1),
          (s) => pd(e, s.dom, n).isNone()
        ),
      gd = oe(qy, !1),
      Ky = oe(qy, !0),
      LD = oe(jy, !1),
      FD = oe(jy, !0),
      MD = (e) => Dl(e).exists(jr),
      Ql = (e, t, n) => {
        const s = H(no(S.fromDom(n.container()), t), Ss),
          o = Ut(s).getOr(t);
        return Fn(e, o.dom, n).filter(MD);
      },
      hd = (e, t) => Dl(t).exists(jr) || Ql(!0, e, t).isSome(),
      bd = (e, t) => vR(t).exists(jr) || Ql(!1, e, t).isSome(),
      UD = oe(Ql, !1),
      zD = oe(Ql, !0),
      Gy = (e) => L.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd(),
      Yy = (e, t) => {
        const n = H(no(S.fromDom(t.container()), e), Ss);
        return Ut(n).getOr(e);
      },
      Xy = (e, t) => (Gy(t) ? md(t) : md(t) || Ts(Yy(e, t).dom, t).exists(md)),
      Qy = (e, t) => (Gy(t) ? dd(t) : dd(t) || ss(Yy(e, t).dom, t).exists(dd)),
      HD = (e) => R(["pre", "pre-wrap"], e),
      Cd = (e) =>
        Dl(e)
          .bind((t) => ml(t, Kn))
          .exists((t) => HD(xs(t, "white-space"))),
      VD = (e, t) => Ts(e.dom, t).isNone(),
      WD = (e, t) => ss(e.dom, t).isNone(),
      jD = (e, t) =>
        VD(e, t) || WD(e, t) || gd(e, t) || Ky(e, t) || bd(e, t) || hd(e, t),
      qD = (e, t) => (Cd(t) ? !1 : jD(e, t) || Xy(e, t) || Qy(e, t)),
      Zl = (e, t) =>
        Cd(t) ? !1 : gd(e, t) || LD(e, t) || bd(e, t) || Xy(e, t),
      KD = (e) => {
        const t = e.container(),
          n = e.offset();
        return ne(t) && n < t.data.length ? L(t, n + 1) : e;
      },
      Jl = (e, t) =>
        Cd(t) ? !1 : Ky(e, t) || FD(e, t) || hd(e, t) || Qy(e, t),
      Zy = (e, t) => Zl(e, t) || Jl(e, KD(t)),
      Jy = (e, t) => Ll(e.charAt(t)),
      GD = (e) => {
        const t = e.container();
        return ne(t) && un(t.data, Xt);
      },
      YD = (e) => {
        const t = e.split("");
        return U(t, (n, s) =>
          Ll(n) && s > 0 && s < t.length - 1 && If(t[s - 1]) && If(t[s + 1])
            ? " "
            : n
        ).join("");
      },
      XD = (e, t) => {
        const n = t.data,
          s = L(t, 0);
        return Jy(n, 0) && !Zy(e, s) ? ((t.data = " " + n.slice(1)), !0) : !1;
      },
      QD = (e) => {
        const t = e.data,
          n = YD(t);
        return n !== t ? ((e.data = n), !0) : !1;
      },
      ZD = (e, t) => {
        const n = t.data,
          s = L(t, n.length - 1);
        return Jy(n, n.length - 1) && !Zy(e, s)
          ? ((t.data = n.slice(0, -1) + " "), !0)
          : !1;
      },
      JD = (e, t) =>
        g
          .some(t)
          .filter(GD)
          .bind((n) => {
            const s = n.container();
            return XD(e, s) || QD(s) || ZD(e, s) ? g.some(n) : g.none();
          }),
      eB = (e) => {
        const t = S.fromDom(e.getBody());
        e.selection.isCollapsed() &&
          JD(t, L.fromRangeStart(e.selection.getRng())).each((n) => {
            e.selection.setRng(n.toRange());
          });
      },
      ev = (e, t, n) => {
        if (n === 0) return;
        const s = S.fromDom(e),
          o = Wr(s, Ss).getOr(s),
          r = e.data.slice(t, t + n),
          i = t + n >= e.data.length && Jl(o, L(e, e.data.length)),
          a = t === 0 && Zl(o, L(e, 0));
        e.replaceData(t, n, Vh(r, 4, a, i));
      },
      ec = (e, t) => {
        const n = e.data.slice(t),
          s = n.length - xk(n).length;
        ev(e, t, s);
      },
      yd = (e, t) => {
        const n = e.data.slice(0, t),
          s = n.length - xg(n).length;
        ev(e, t - s, s);
      },
      vd = (e, t, n, s = !0) => {
        const o = xg(e.data).length,
          r = s ? e : t,
          i = s ? t : e;
        return (
          s ? r.appendData(i.data) : r.insertData(0, i.data),
          At(S.fromDom(i)),
          n && ec(r, o),
          r
        );
      },
      tB = (e, t) => {
        const n = e.container(),
          s = e.offset();
        return (
          L.isTextPosition(e) === !1 &&
          n === t.parentNode &&
          s > L.before(t).offset()
        );
      },
      nB = (e, t) => (tB(t, e) ? L(t.container(), t.offset() - 1) : t),
      sB = (e) => (ne(e) ? L(e, 0) : L.before(e)),
      oB = (e) => (ne(e) ? L(e, e.data.length) : L.after(e)),
      tv = (e) =>
        es(e.previousSibling)
          ? g.some(oB(e.previousSibling))
          : e.previousSibling
          ? Rs(e.previousSibling)
          : g.none(),
      nv = (e) =>
        es(e.nextSibling)
          ? g.some(sB(e.nextSibling))
          : e.nextSibling
          ? mn(e.nextSibling)
          : g.none(),
      rB = (e, t) => {
        const n = L.before(
          t.previousSibling ? t.previousSibling : t.parentNode
        );
        return Ts(e, n).fold(() => ss(e, L.after(t)), g.some);
      },
      iB = (e, t) => ss(e, L.after(t)).fold(() => Ts(e, L.before(t)), g.some),
      aB = (e, t) =>
        tv(t)
          .orThunk(() => nv(t))
          .orThunk(() => rB(e, t)),
      lB = (e, t) =>
        nv(t)
          .orThunk(() => tv(t))
          .orThunk(() => iB(e, t)),
      cB = (e, t, n) => (e ? lB(t, n) : aB(t, n)),
      uB = (e, t, n) => cB(e, t, n).map(oe(nB, n)),
      sv = (e, t, n) => {
        n.fold(
          () => {
            e.focus();
          },
          (s) => {
            e.selection.setRng(s.toRange(), t);
          }
        );
      },
      fB = (e) => (t) => t.dom === e,
      dB = (e, t) => t && Fe(e.schema.getBlockElements(), bt(t)),
      mB = (e) => {
        if (Ht(e)) {
          const t = S.fromHtml('<br data-mce-bogus="1">');
          return qi(e), It(e, t), g.some(L.before(t.dom));
        } else return g.none();
      },
      pB = (e, t, n) => {
        const s = Go(e).filter(In),
          o = ji(e).filter(In);
        return (
          At(e),
          Mk(s, o, t, (r, i, a) => {
            const c = r.dom,
              f = i.dom,
              d = c.data.length;
            return vd(c, f, n), a.container() === f ? L(c, d) : a;
          }).orThunk(
            () => (
              n &&
                (s.each((r) => yd(r.dom, r.dom.length)),
                o.each((r) => ec(r.dom, 0))),
              t
            )
          )
        );
      },
      gB = (e, t) => Fe(e.schema.getTextInlineElements(), bt(t)),
      pr = (e, t, n, s = !0) => {
        const o = uB(t, e.getBody(), n.dom),
          r = Wr(n, oe(dB, e), fB(e.getBody())),
          i = pB(n, o, gB(e, n));
        e.dom.isEmpty(e.getBody())
          ? (e.setContent(""), e.selection.setCursorLocation())
          : r.bind(mB).fold(
              () => {
                s && sv(e, t, i);
              },
              (a) => {
                s && sv(e, t, g.some(a));
              }
            );
      },
      hB = (e) => (t) => tt(e, t),
      Ed = (e) => xn(e, "td,th"),
      bB = (e, t) => {
        const n = (f) => pa(S.fromDom(f), t),
          s = n(e.startContainer),
          o = n(e.endContainer),
          r = s.isSome(),
          i = o.isSome(),
          a = En(s, o, tt).getOr(!1);
        return {
          startTable: s,
          endTable: o,
          isStartInTable: r,
          isEndInTable: i,
          isSameTable: a,
          isMultiTable: !a && r && i,
        };
      },
      xd = (e, t) => ({ start: e, end: t }),
      CB = (e, t, n) => ({ rng: e, table: t, cells: n }),
      Ea = _s.generate([
        { singleCellTable: ["rng", "cell"] },
        { fullTable: ["table"] },
        { partialTable: ["cells", "outsideDetails"] },
        { multiTable: ["startTableCells", "endTableCells", "betweenRng"] },
      ]),
      tc = (e, t) => Jo(S.fromDom(e), "td,th", t),
      ov = (e) => !tt(e.start, e.end),
      rv = (e, t) =>
        pa(e.start, t).bind((n) => pa(e.end, t).bind((s) => Fu(tt(n, s), n))),
      yB = (e, t) =>
        !ov(e) &&
        rv(e, t).exists((n) => {
          const s = n.dom.rows;
          return s.length === 1 && s[0].cells.length === 1;
        }),
      vB = (e, t) => {
        const n = tc(e.startContainer, t),
          s = tc(e.endContainer, t);
        return En(n, s, xd);
      },
      EB = (e) => (t) => pa(t, e).bind((n) => Cs(Ed(n)).map((s) => xd(t, s))),
      xB = (e) => (t) => pa(t, e).bind((n) => Ut(Ed(n)).map((s) => xd(s, t))),
      wd = (e) => (t) => rv(t, e).map((n) => CB(t, n, Ed(n))),
      iv = (e, t, n, s) => {
        if (n.collapsed || !e.forall(ov)) return g.none();
        if (t.isSameTable) {
          const o = e.bind(wd(s));
          return g.some({ start: o, end: o });
        } else {
          const o = tc(n.startContainer, s),
            r = tc(n.endContainer, s),
            i = o.bind(EB(s)).bind(wd(s)),
            a = r.bind(xB(s)).bind(wd(s));
          return g.some({ start: i, end: a });
        }
      },
      av = (e, t) => Ne(e, (n) => tt(n, t)),
      Sd = (e) =>
        En(av(e.cells, e.rng.start), av(e.cells, e.rng.end), (t, n) =>
          e.cells.slice(t, n + 1)
        ),
      wB = (e, t, n) => e.exists((s) => yB(s, n) && Wf(s.start, t)),
      lv = (e, t) => {
        const { startTable: n, endTable: s } = t,
          o = e.cloneRange();
        return (
          n.each((r) => o.setStartAfter(r.dom)),
          s.each((r) => o.setEndBefore(r.dom)),
          o
        );
      },
      SB = (e, t, n, s) =>
        iv(e, t, n, s)
          .bind(({ start: o, end: r }) => o.or(r))
          .bind((o) => {
            const { isSameTable: r } = t,
              i = Sd(o).getOr([]);
            if (r && o.cells.length === i.length)
              return g.some(Ea.fullTable(o.table));
            if (i.length > 0) {
              if (r) return g.some(Ea.partialTable(i, g.none()));
              {
                const a = lv(n, t);
                return g.some(
                  Ea.partialTable(i, g.some(ct(Se({}, t), { rng: a })))
                );
              }
            } else return g.none();
          }),
      _B = (e, t, n, s) =>
        iv(e, t, n, s).bind(({ start: o, end: r }) => {
          const i = o.bind(Sd).getOr([]),
            a = r.bind(Sd).getOr([]);
          if (i.length > 0 && a.length > 0) {
            const c = lv(n, t);
            return g.some(Ea.multiTable(i, a, c));
          } else return g.none();
        }),
      kB = (e, t) => {
        const n = hB(e),
          s = vB(t, n),
          o = bB(t, n);
        return wB(s, t, n)
          ? s.map((r) => Ea.singleCellTable(t, r.start))
          : o.isMultiTable
          ? _B(s, o, t, n)
          : SB(s, o, t, n);
      },
      cv = (e) => (Uk(e) ? Go(e) : zu(e)).bind(cv).orThunk(() => g.some(e)),
      uv = (e) =>
        T(e, (t) => {
          Gn(t, "contenteditable"), mr(t);
        }),
      NB = (e, t) => g.from(e.dom.getParent(t, e.dom.isBlock)).map(S.fromDom),
      AB = (e, t, n) => {
        n.each((s) => {
          t ? At(s) : (mr(s), e.selection.setCursorLocation(s.dom, 0));
        });
      },
      _d = (e, t, n, s) => {
        const o = n.cloneRange();
        s
          ? (o.setStart(n.startContainer, n.startOffset),
            o.setEndAfter(t.dom.lastChild))
          : (o.setStartBefore(t.dom.firstChild),
            o.setEnd(n.endContainer, n.endOffset)),
          kd(e, o, t, !1).each((r) => r());
      },
      fv = (e) => {
        const t = ai(e),
          n = S.fromDom(e.selection.getNode());
        dl(n.dom) && Ht(n)
          ? e.selection.setCursorLocation(n.dom, 0)
          : e.selection.collapse(!0),
          t.length > 1 &&
            M(t, (s) => tt(s, n)) &&
            fn(n, "data-mce-selected", "1");
      },
      dv = (e, t, n) =>
        g.some(() => {
          const s = e.selection.getRng(),
            o = n
              .bind(({ rng: r, isStartInTable: i }) => {
                const a = NB(e, i ? r.endContainer : r.startContainer);
                r.deleteContents(), AB(e, i, a.filter(Ht));
                const c = i ? t[0] : t[t.length - 1];
                return (
                  _d(e, c, s, i),
                  Ht(c) ? g.none() : g.some(i ? t.slice(1) : t.slice(0, -1))
                );
              })
              .getOr(t);
          uv(o), fv(e);
        }),
      TB = (e, t, n, s) =>
        g.some(() => {
          const o = e.selection.getRng(),
            r = t[0],
            i = n[n.length - 1];
          _d(e, r, o, !0), _d(e, i, o, !1);
          const a = Ht(r) ? t : t.slice(1),
            c = Ht(i) ? n : n.slice(0, -1);
          uv(a.concat(c)), s.deleteContents(), fv(e);
        }),
      kd = (e, t, n, s = !0) =>
        g.some(() => {
          t.deleteContents();
          const o = cv(n).getOr(n),
            r = S.fromDom(e.dom.getParent(o.dom, e.dom.isBlock));
          if (
            (Ht(r) && (mr(r), s && e.selection.setCursorLocation(r.dom, 0)),
            !tt(n, r))
          ) {
            const i = zr(Yn(r), n) ? [] : sN(r);
            T(i.concat(Yt(n)), (a) => {
              !tt(a, r) && !Qs(a, r) && Ht(a) && At(a);
            });
          }
        }),
      RB = (e, t) => g.some(() => pr(e, !1, t)),
      PB = (e, t, n) =>
        kB(t, n).bind((s) =>
          s.fold(oe(kd, e), oe(RB, e), oe(dv, e), oe(TB, e))
        ),
      OB = (e, t) => nc(e, t),
      DB = (e, t, n, s) =>
        Nd(t, s).fold(
          () => PB(e, t, n),
          (o) => OB(e, o)
        ),
      BB = (e, t, n) => {
        const s = S.fromDom(e.getBody()),
          o = e.selection.getRng();
        return n.length !== 0 ? dv(e, n, g.none()) : DB(e, s, o, t);
      },
      mv = (e, t) => de(no(t, e), pl),
      Nd = (e, t) => de(no(t, e), Vk("caption")),
      IB = (e, t, n, s, o) =>
        $l(n, e.getBody(), o).bind((r) =>
          mv(t, S.fromDom(r.getNode())).bind((i) =>
            tt(i, s) ? g.none() : g.some(Ie)
          )
        ),
      nc = (e, t) =>
        g.some(() => {
          mr(t), e.selection.setCursorLocation(t.dom, 0);
        }),
      $B = (e, t, n, s) =>
        mn(e.dom)
          .bind((o) =>
            Rs(e.dom).map((r) =>
              t ? n.isEqual(o) && s.isEqual(r) : n.isEqual(r) && s.isEqual(o)
            )
          )
          .getOr(!0),
      LB = (e, t) => nc(e, t),
      FB = (e, t, n) =>
        Nd(e, S.fromDom(n.getNode())).fold(
          () => g.some(Ie),
          (s) => Fu(!tt(s, t), Ie)
        ),
      MB = (e, t, n, s, o) =>
        $l(n, e.getBody(), o).fold(
          () => g.some(Ie),
          (r) => ($B(s, n, o, r) ? LB(e, s) : FB(t, s, r))
        ),
      UB = (e, t, n, s) => {
        const o = L.fromRangeStart(e.selection.getRng());
        return mv(n, s).bind((r) => (Ht(r) ? nc(e, r) : IB(e, n, t, r, o)));
      },
      zB = (e, t, n, s) => {
        const o = L.fromRangeStart(e.selection.getRng());
        return Ht(s) ? nc(e, s) : MB(e, n, t, s, o);
      },
      pv = (e, t) => (e ? zy(t) : Hy(t)),
      HB = (e, t) => {
        const n = L.fromRangeStart(e.selection.getRng());
        return pv(t, n) || Fn(t, e.getBody(), n).exists((s) => pv(t, s));
      },
      VB = (e, t, n) => {
        const s = S.fromDom(e.getBody());
        return Nd(s, n).fold(
          () => UB(e, t, s, n).orThunk(() => Fu(HB(e, t), Ie)),
          (o) => zB(e, t, s, o)
        );
      },
      Ad = (e, t) => {
        const n = S.fromDom(e.selection.getStart(!0)),
          s = ai(e);
        return e.selection.isCollapsed() && s.length === 0
          ? VB(e, t, n)
          : BB(e, n, s);
      },
      xa = (e, t) => {
        for (; t && t !== e; ) {
          if (Zs(t) || wt(t)) return t;
          t = t.parentNode;
        }
        return null;
      },
      Td = (e, t) => {
        t(e), e.firstChild && Td(e.firstChild, t), e.next && Td(e.next, t);
      },
      gv = (e, t, n, s) => {
        const o = n.name;
        for (let r = 0, i = e.length; r < i; r++) {
          const a = e[r];
          if (a.name === o) {
            const c = s.nodes[o];
            c ? c.nodes.push(n) : (s.nodes[o] = { filter: a, nodes: [n] });
          }
        }
        if (n.attributes)
          for (let r = 0, i = t.length; r < i; r++) {
            const a = t[r],
              c = a.name;
            if (c in n.attributes.map) {
              const f = s.attributes[c];
              f
                ? f.nodes.push(n)
                : (s.attributes[c] = { filter: a, nodes: [n] });
            }
          }
      },
      WB = (e, t, n) => {
        const s = { nodes: {}, attributes: {} };
        return (
          n.firstChild &&
            Td(n.firstChild, (o) => {
              gv(e, t, o, s);
            }),
          s
        );
      },
      hv = (e, t) => {
        const n = (s) => {
          ht(s, (o) => {
            const r = H(o.nodes, (i) => ke(i.parent));
            T(o.filter.callbacks, (i) => {
              i(r, o.filter.name, t);
            });
          });
        };
        n(e.nodes), n(e.attributes);
      },
      bv = (e, t, n, s = {}) => {
        const o = WB(e, t, n);
        hv(o, s);
      },
      Cv = (e, t, n, s) => {
        t.insert && n[s.name]
          ? s.empty().append(new pn("br", 1))
          : (s.empty().append(new pn("#text", 3)).value = Xt);
      },
      jB = (e) => yv(e, "#text") && e.firstChild.value === Xt,
      yv = (e, t) =>
        e &&
        e.firstChild &&
        e.firstChild === e.lastChild &&
        e.firstChild.name === t,
      qB = (e, t) => {
        const n = e.getElementRule(t.name);
        return n && n.paddEmpty;
      },
      sc = (e, t, n, s) => s.isEmpty(t, n, (o) => qB(e, o)),
      KB = (e, t) => e && (e.name in t || e.name === "br"),
      Rd = (e, t, n = e.parent) => {
        if (t.getSpecialElements()[e.name]) e.empty().remove();
        else {
          const s = e.children();
          for (const o of s) t.isValidChild(n.name, o.name) || Rd(o, t, n);
          e.unwrap();
        }
      },
      Pd = (e, t, n = Ie) => {
        const s = t.getTextBlockElements(),
          o = t.getNonEmptyElements(),
          r = t.getWhitespaceElements(),
          i = G.makeMap("tr,td,th,tbody,thead,tfoot,table"),
          a = new Set();
        for (let c = 0; c < e.length; c++) {
          const f = e[c];
          let d, p, C;
          if (!f.parent || a.has(f)) continue;
          if (s[f.name] && f.parent.name === "li") {
            let x = f.next;
            for (; x && s[x.name]; ) {
              (x.name = "li"), a.add(x), f.parent.insert(x, f.parent);
              x = x.next;
            }
            f.unwrap();
            continue;
          }
          const b = [f];
          for (
            d = f.parent;
            d && !t.isValidChild(d.name, f.name) && !i[d.name];
            d = d.parent
          )
            b.push(d);
          if (d && b.length > 1)
            if (t.isValidChild(d.name, f.name)) {
              b.reverse(), (p = b[0].clone()), n(p);
              let x = p;
              for (let y = 0; y < b.length - 1; y++) {
                t.isValidChild(x.name, b[y].name)
                  ? ((C = b[y].clone()), n(C), x.append(C))
                  : (C = x);
                for (let E = b[y].firstChild; E && E !== b[y + 1]; ) {
                  const _ = E.next;
                  C.append(E), (E = _);
                }
                x = C;
              }
              sc(t, o, r, p)
                ? d.insert(f, b[0], !0)
                : (d.insert(p, b[0], !0), d.insert(f, p)),
                (d = b[0]),
                (sc(t, o, r, d) || yv(d, "br")) && d.empty().remove();
            } else Rd(f, t);
          else if (f.parent) {
            if (f.name === "li") {
              let x = f.prev;
              if (x && (x.name === "ul" || x.name === "ol")) {
                x.append(f);
                continue;
              }
              if (((x = f.next), x && (x.name === "ul" || x.name === "ol"))) {
                x.insert(f, x.firstChild, !0);
                continue;
              }
              const y = new pn("ul", 1);
              n(y), f.wrap(y);
              continue;
            }
            if (
              t.isValidChild(f.parent.name, "div") &&
              t.isValidChild("div", f.name)
            ) {
              const x = new pn("div", 1);
              n(x), f.wrap(x);
            } else Rd(f, t);
          }
        }
      },
      GB = (e, t, n, s) => {
        const o = document.createRange();
        return o.setStart(e, t), o.setEnd(n, s), o;
      },
      YB = (e) => {
        const t = L.fromRangeStart(e),
          n = L.fromRangeEnd(e),
          s = e.commonAncestorContainer;
        return Fn(!1, s, n)
          .map((o) =>
            !ks(t, n, s) && ks(t, o, s)
              ? GB(t.container(), t.offset(), o.container(), o.offset())
              : e
          )
          .getOr(e);
      },
      Od = (e) => (e.collapsed ? e : YB(e)),
      XB = (e) => e.firstChild && e.firstChild === e.lastChild,
      QB = (e) => e.name === "br" || e.value === Xt,
      ZB = (e, t) => e.getBlockElements()[t.name] && XB(t) && QB(t.firstChild),
      JB = (e, t) => {
        const n = e.getNonEmptyElements();
        return t && (t.isEmpty(n) || ZB(e, t));
      },
      eI = (e, t) => {
        let n = t.firstChild,
          s = t.lastChild;
        return (
          n && n.name === "meta" && (n = n.next),
          s && s.attr("id") === "mce_marker" && (s = s.prev),
          JB(e, s) && (s = s.prev),
          !n || n !== s ? !1 : n.name === "ul" || n.name === "ol"
        );
      },
      tI = (e) => {
        const t = e.firstChild,
          n = e.lastChild;
        return (
          t && t.nodeName === "META" && t.parentNode.removeChild(t),
          n && n.id === "mce_marker" && n.parentNode.removeChild(n),
          e
        );
      },
      nI = (e, t, n) => {
        const s = t.serialize(n),
          o = e.createFragment(s);
        return tI(o);
      },
      sI = (e) => H(e.childNodes, (t) => t.nodeName === "LI"),
      oI = (e) => e.data === Xt || Dt(e),
      rI = (e) =>
        e && e.firstChild && e.firstChild === e.lastChild && oI(e.firstChild),
      iI = (e) => !e.firstChild || rI(e),
      aI = (e) => (e.length > 0 && iI(e[e.length - 1]) ? e.slice(0, -1) : e),
      Dd = (e, t) => {
        const n = e.getParent(t, e.isBlock);
        return n && n.nodeName === "LI" ? n : null;
      },
      lI = (e, t) => !!Dd(e, t),
      cI = (e, t) => {
        const n = t.cloneRange(),
          s = t.cloneRange();
        return (
          n.setStartBefore(e),
          s.setEndAfter(e),
          [n.cloneContents(), s.cloneContents()]
        );
      },
      uI = (e, t) => {
        const n = L.before(e),
          o = As(t).next(n);
        return o ? o.toRange() : null;
      },
      vv = (e, t) => {
        const n = L.after(e),
          o = As(t).prev(n);
        return o ? o.toRange() : null;
      },
      fI = (e, t, n, s) => {
        const o = cI(e, s),
          r = e.parentNode;
        return (
          r.insertBefore(o[0], e),
          G.each(t, (i) => {
            r.insertBefore(i, e);
          }),
          r.insertBefore(o[1], e),
          r.removeChild(e),
          vv(t[t.length - 1], n)
        );
      },
      dI = (e, t, n) => {
        const s = e.parentNode;
        return (
          G.each(t, (o) => {
            s.insertBefore(o, e);
          }),
          uI(e, n)
        );
      },
      mI = (e, t, n, s) => (s.insertAfter(t.reverse(), e), vv(t[0], n)),
      pI = (e, t, n, s) => {
        const o = nI(t, e, s),
          r = Dd(t, n.startContainer),
          i = aI(sI(o.firstChild)),
          a = 1,
          c = 2,
          f = t.getRoot(),
          d = (p) => {
            const C = L.fromRangeStart(n),
              b = As(t.getRoot()),
              x = p === a ? b.prev(C) : b.next(C);
            return x ? Dd(t, x.getNode()) !== r : !0;
          };
        return d(a) ? dI(r, i, f) : d(c) ? mI(r, i, f, t) : fI(r, i, f, n);
      },
      Bd = dl,
      gI = (e, t, n) => {
        if (n !== null) {
          const s = e.getParent(t.endContainer, Bd);
          return n === s && Wf(S.fromDom(n), t);
        } else return !1;
      },
      hI = (e, t, n) => {
        if (n.getAttribute("data-mce-bogus") === "all")
          n.parentNode.insertBefore(e.dom.createFragment(t), n);
        else {
          const s = n.firstChild,
            o = n.lastChild;
          !s || (s === o && s.nodeName === "BR")
            ? e.dom.setHTML(n, t)
            : e.selection.setContent(t, { no_events: !0 });
        }
      },
      bI = (e, t) => {
        g.from(e.getParent(t, "td,th")).map(S.fromDom).each(BD);
      },
      CI = (e, t) => {
        const n = e.schema.getTextInlineElements(),
          s = e.dom;
        if (t) {
          const o = e.getBody(),
            r = Dy(s);
          G.each(s.select("*[data-mce-fragment]"), (i) => {
            if (ke(n[i.nodeName.toLowerCase()]) && kD(s, i)) {
              for (
                let c = i.parentNode;
                ke(c) && c !== o && !AD(s, i, c);
                c = c.parentNode
              )
                if (r.compare(c, i)) {
                  s.remove(i, !0);
                  break;
                }
            }
          });
        }
      },
      yI = (e) => {
        let t = e;
        for (; (t = t.walk()); )
          t.type === 1 && t.attr("data-mce-fragment", "1");
      },
      vI = (e) => {
        G.each(e.getElementsByTagName("*"), (t) => {
          t.removeAttribute("data-mce-fragment");
        });
      },
      EI = (e) => !!e.getAttribute("data-mce-fragment"),
      xI = (e, t) => t && !e.schema.getVoidElements()[t.nodeName],
      wI = (e, t) => {
        let n;
        const s = e.dom,
          o = e.selection;
        if (!t) return;
        o.scrollIntoView(t);
        const r = xa(e.getBody(), t);
        if (s.getContentEditable(r) === "false") {
          s.remove(t), o.select(r);
          return;
        }
        let i = s.createRng();
        const a = t.previousSibling;
        if (ne(a)) {
          i.setStart(a, a.nodeValue.length);
          const d = t.nextSibling;
          ne(d) && (a.appendData(d.data), d.parentNode.removeChild(d));
        } else i.setStartBefore(t), i.setEndBefore(t);
        const c = (d) => {
            let p = L.fromRangeStart(d);
            if (((p = As(e.getBody()).next(p)), p)) return p.toRange();
          },
          f = s.getParent(t, s.isBlock);
        s.remove(t),
          f &&
            s.isEmpty(f) &&
            (qi(S.fromDom(f)),
            i.setStart(f, 0),
            i.setEnd(f, 0),
            !Bd(f) && !EI(f) && (n = c(i))
              ? ((i = n), s.remove(f))
              : s.add(f, s.create("br", { "data-mce-bogus": "1" }))),
          o.setRng(i);
      },
      SI = (e) => {
        const t = e.dom,
          n = Od(e.selection.getRng());
        e.selection.setRng(n);
        const s = t.getParent(n.startContainer, Bd);
        gI(t, n, s)
          ? kd(e, n, S.fromDom(s))
          : e.getDoc().execCommand("Delete", !1, null);
      },
      _I = (e, t, n) => {
        let s, o, r;
        const i = e.selection,
          a = e.dom,
          c = e.parser,
          f = n.merge,
          d = Po({ validate: !0 }, e.schema),
          p = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>';
        t.indexOf("{$caret}") === -1 && (t += "{$caret}"),
          (t = t.replace(/\{\$caret\}/, p)),
          (o = i.getRng());
        const C =
            o.startContainer || (o.parentElement ? o.parentElement() : null),
          b = e.getBody();
        C === b &&
          i.isCollapsed() &&
          a.isBlock(b.firstChild) &&
          xI(e, b.firstChild) &&
          a.isEmpty(b.firstChild) &&
          ((o = a.createRng()),
          o.setStart(b.firstChild, 0),
          o.setEnd(b.firstChild, 0),
          i.setRng(o)),
          i.isCollapsed() || SI(e),
          (s = i.getNode());
        const x = {
            context: s.nodeName.toLowerCase(),
            data: n.data,
            insert: !0,
          },
          y = c.parse(t, x);
        if (n.paste === !0 && eI(e.schema, y) && lI(a, s))
          return (o = pI(d, a, i.getRng(), y)), i.setRng(o), t;
        if ((yI(y), (r = y.lastChild), r.attr("id") === "mce_marker")) {
          const E = r;
          for (r = r.prev; r; r = r.walk(!0))
            if (r.type === 3 || !a.isBlock(r.name)) {
              e.schema.isValidChild(r.parent.name, "span") &&
                r.parent.insert(E, r, r.name === "br");
              break;
            }
        }
        if ((e._selectionOverrides.showBlockCaretContainer(s), !x.invalid))
          (t = d.serialize(y)), hI(e, t, s);
        else {
          e.selection.setContent(p), (s = i.getNode());
          const E = e.getBody();
          for (s.nodeType === 9 ? (s = r = E) : (r = s); r !== E; )
            (s = r), (r = r.parentNode);
          t = s === E ? E.innerHTML : a.getOuterHTML(s);
          const _ = c.parse(t);
          for (let $ = _; $; $ = $.walk())
            if ($.attr("id") === "mce_marker") {
              $.replace(y);
              break;
            }
          const P = y.children(),
            z = y.parent.name;
          y.unwrap();
          const I = H(P, ($) => !e.schema.isValidChild(z, $.name));
          Pd(I, e.schema),
            bv(c.getNodeFilters(), c.getAttributeFilters(), _),
            (t = d.serialize(_)),
            s === E ? a.setHTML(E, t) : a.setOuterHTML(s, t);
        }
        return (
          CI(e, f),
          wI(e, a.get("mce_marker")),
          vI(e.getBody()),
          bI(a, i.getStart()),
          t
        );
      },
      oc = (e) => e instanceof pn,
      kI = (e) => {
        ur(e) &&
          mn(e.getBody()).each((t) => {
            const n = t.getNode(),
              s = Ki(n) ? mn(n).getOr(t) : t;
            e.selection.setRng(s.toRange());
          });
      },
      Id = (e, t, n) => {
        e.dom.setHTML(e.getBody(), t), n !== !0 && kI(e);
      },
      NI = (e, t, n, s) => {
        if (n.length === 0 || /^\s+$/.test(n)) {
          const o = '<br data-mce-bogus="1">';
          t.nodeName === "TABLE"
            ? (n = "<tr><td>" + o + "</td></tr>")
            : /^(UL|OL)$/.test(t.nodeName) && (n = "<li>" + o + "</li>");
          const r = wn(e);
          return (
            e.schema.isValidChild(t.nodeName.toLowerCase(), r.toLowerCase())
              ? ((n = o), (n = e.dom.createHTML(r, ir(e), n)))
              : n || (n = o),
            Id(e, n, s.no_selection),
            { content: n, html: n }
          );
        } else {
          s.format !== "raw" &&
            (n = Po({ validate: !1 }, e.schema).serialize(
              e.parser.parse(n, { isRootContent: !0, insert: !0 })
            ));
          const o = gl(S.fromDom(t)) ? n : G.trim(n);
          return Id(e, o, s.no_selection), { content: o, html: o };
        }
      },
      AI = (e, t, n, s) => {
        bv(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
        const o = Po({ validate: !1 }, e.schema).serialize(n),
          r = gl(S.fromDom(t)) ? o : G.trim(o);
        return Id(e, r, s.no_selection), { content: n, html: r };
      },
      TI = (e, t, n) =>
        g
          .from(e.getBody())
          .map((s) => (oc(t) ? AI(e, s, t, n) : NI(e, s, t, n)))
          .getOr({ content: t, html: oc(n.content) ? "" : n.content }),
      RI = (e, t) => ON(e, t).isSome(),
      Ev = (e) => (Ye(e) ? e : mt),
      PI = (e, t, n) => {
        let s = e.dom;
        const o = Ev(n);
        for (; s.parentNode; ) {
          s = s.parentNode;
          const r = S.fromDom(s),
            i = t(r);
          if (i.isSome()) return i;
          if (o(r)) break;
        }
        return g.none();
      },
      $d = (e, t, n) => {
        const s = t(e),
          o = Ev(n);
        return s.orThunk(() => (o(e) ? g.none() : PI(e, t, o)));
      },
      Ld = Mf,
      xv = (e, t, n) => {
        const s = e.formatter.get(n);
        if (s)
          for (let o = 0; o < s.length; o++) {
            const r = s[o];
            if (Rn(r) && r.inherit === !1 && e.dom.is(t, r.selector)) return !0;
          }
        return !1;
      },
      Fd = (e, t, n, s, o) => {
        const r = e.dom.getRoot();
        return t === r
          ? !1
          : ((t = e.dom.getParent(t, (i) =>
              xv(e, i, n) ? !0 : i.parentNode === r || !!Ds(e, i, n, s, !0)
            )),
            !!Ds(e, t, n, s, o));
      },
      rc = (e, t, n) =>
        (Wt(n) && Ld(t, n.inline)) || (Os(n) && Ld(t, n.block))
          ? !0
          : Rn(n)
          ? ve(t) && e.is(t, n.selector)
          : !1,
      wv = (e, t, n, s, o, r) => {
        const i = n[s];
        if (Ye(n.onmatch)) return n.onmatch(t, n, s);
        if (i) {
          if (Pt(i.length)) {
            for (const a in i)
              if (Fe(i, a)) {
                const c = s === "attributes" ? e.getAttrib(t, a) : Ul(e, t, a),
                  f = eo(i[a], r),
                  d = Mt(c) || nl(c);
                if (d && Mt(f)) continue;
                if (
                  (o && d && !n.exact) ||
                  ((!o || n.exact) && !Ld(c, Uf(f, a)))
                )
                  return !1;
              }
          } else
            for (let a = 0; a < i.length; a++)
              if (s === "attributes" ? e.getAttrib(t, i[a]) : Ul(e, t, i[a]))
                return !0;
        }
        return !0;
      },
      Ds = (e, t, n, s, o) => {
        const r = e.formatter.get(n),
          i = e.dom;
        if (r && t)
          for (let a = 0; a < r.length; a++) {
            const c = r[a];
            if (
              rc(e.dom, t, c) &&
              wv(i, t, c, "attributes", o, s) &&
              wv(i, t, c, "styles", o, s)
            ) {
              const f = c.classes;
              if (f) {
                for (let d = 0; d < f.length; d++)
                  if (!e.dom.hasClass(t, eo(f[d], s))) return;
              }
              return c;
            }
          }
      },
      Md = (e, t, n, s, o) => {
        if (s) return Fd(e, s, t, n, o);
        if (((s = e.selection.getNode()), Fd(e, s, t, n, o))) return !0;
        const r = e.selection.getStart();
        return !!(r !== s && Fd(e, r, t, n, o));
      },
      OI = (e, t, n) => {
        const s = [],
          o = {},
          r = e.selection.getStart();
        return (
          e.dom.getParent(
            r,
            (i) => {
              for (let a = 0; a < t.length; a++) {
                const c = t[a];
                !o[c] && Ds(e, i, c, n) && ((o[c] = !0), s.push(c));
              }
            },
            e.dom.getRoot()
          ),
          s
        );
      },
      DI = (e, t) => {
        const n = (o) => tt(o, S.fromDom(e.getBody())),
          s = (o, r) => (Ds(e, o.dom, r) ? g.some(r) : g.none());
        return g
          .from(e.selection.getStart(!0))
          .bind((o) => $d(S.fromDom(o), (r) => en(t, (i) => s(r, i)), n))
          .getOrNull();
      },
      BI = (e, t) => {
        const n = e.formatter.get(t),
          s = e.dom;
        if (n) {
          const o = e.selection.getStart(),
            r = zl(s, o);
          for (let i = n.length - 1; i >= 0; i--) {
            const a = n[i];
            if (!Rn(a)) return !0;
            for (let c = r.length - 1; c >= 0; c--)
              if (s.is(r[c], a.selector)) return !0;
          }
        }
        return !1;
      },
      II = (e, t, n) =>
        X(
          n,
          (s, o) => {
            const r = YR(e, o);
            return e.formatter.matchNode(t, o, {}, r) ? s.concat([o]) : s;
          },
          []
        ),
      ui = Kt,
      Sv = "_mce_caret",
      $I = (e, t) => e.importNode(t, !0),
      LI = (e) => {
        const t = [];
        for (; e; ) {
          if (
            (e.nodeType === 3 && e.nodeValue !== ui) ||
            e.childNodes.length > 1
          )
            return [];
          e.nodeType === 1 && t.push(e), (e = e.firstChild);
        }
        return t;
      },
      _v = (e) => LI(e).length > 0,
      kv = (e) => {
        if (e) {
          const t = new zt(e, e);
          for (e = t.current(); e; e = t.next()) if (ne(e)) return e;
        }
        return null;
      },
      Ud = (e) => {
        const t = S.fromTag("span");
        return (
          Es(t, {
            id: Sv,
            "data-mce-bogus": "1",
            "data-mce-type": "format-caret",
          }),
          e && It(t, S.fromText(ui)),
          t
        );
      },
      FI = (e) => {
        const t = kv(e);
        return t && t.nodeValue.charAt(0) === ui && t.deleteData(0, 1), t;
      },
      zd = (e, t, n = !0) => {
        const s = e.dom,
          o = e.selection;
        if (_v(t)) pr(e, !1, S.fromDom(t), n);
        else {
          const r = o.getRng(),
            i = s.getParent(t, s.isBlock),
            a = r.startContainer,
            c = r.startOffset,
            f = r.endContainer,
            d = r.endOffset,
            p = FI(t);
          s.remove(t, !0),
            a === p && c > 0 && r.setStart(p, c - 1),
            f === p && d > 0 && r.setEnd(p, d - 1),
            i && s.isEmpty(i) && mr(S.fromDom(i)),
            o.setRng(r);
        }
      },
      Hd = (e, t, n = !0) => {
        const s = e.dom,
          o = e.selection;
        if (t) zd(e, t, n);
        else if (((t = cr(e.getBody(), o.getStart())), !t))
          for (; (t = s.get(Sv)); ) zd(e, t, !1);
      },
      MI = (e, t, n) => {
        const s = e.dom,
          o = s.getParent(n, oe(Lf, e));
        o && s.isEmpty(o)
          ? n.parentNode.replaceChild(t, n)
          : (DD(S.fromDom(n)),
            s.isEmpty(n)
              ? n.parentNode.replaceChild(t, n)
              : s.insertAfter(t, n));
      },
      Nv = (e, t) => (e.appendChild(t), t),
      Av = (e, t) => {
        const n = fe(e, (s, o) => Nv(s, o.cloneNode(!1)), t);
        return Nv(n, n.ownerDocument.createTextNode(ui));
      },
      UI = (e, t, n, s, o, r) => {
        const i = e.formatter,
          a = e.dom,
          c = H(Jn(i.get()), (p) => p !== s && !un(p, "removeformat")),
          f = II(e, n, c);
        if (H(f, (p) => !XR(e, p, s)).length > 0) {
          const p = n.cloneNode(!1);
          return a.add(t, p), i.remove(s, o, p, r), a.remove(p), g.some(p);
        } else return g.none();
      },
      zI = (e, t, n) => {
        let s, o;
        const r = e.selection,
          i = r.getRng();
        let a = i.startOffset;
        const f = i.startContainer.nodeValue;
        (s = cr(e.getBody(), r.getStart())), s && (o = kv(s));
        const d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
        if (
          f &&
          a > 0 &&
          a < f.length &&
          d.test(f.charAt(a)) &&
          d.test(f.charAt(a - 1))
        ) {
          const p = r.getBookmark();
          i.collapse(!0);
          let C = ii(e, i, e.formatter.get(t));
          (C = Gl(C)), e.formatter.apply(t, n, C), r.moveToBookmark(p);
        } else
          (!s || o.nodeValue !== ui) &&
            ((s = $I(e.getDoc(), Ud(!0).dom)),
            (o = s.firstChild),
            i.insertNode(s),
            (a = 1)),
            e.formatter.apply(t, n, s),
            r.setCursorLocation(o, a);
      },
      HI = (e, t, n, s) => {
        const o = e.dom,
          r = e.selection;
        let i, a, c;
        const f = [],
          d = r.getRng(),
          p = d.startContainer,
          C = d.startOffset;
        for (
          a = p,
            p.nodeType === 3 &&
              (C !== p.nodeValue.length && (i = !0), (a = a.parentNode));
          a;

        ) {
          if (Ds(e, a, t, n, s)) {
            c = a;
            break;
          }
          a.nextSibling && (i = !0), f.push(a), (a = a.parentNode);
        }
        if (!!c)
          if (i) {
            const b = r.getBookmark();
            d.collapse(!0);
            let x = ii(e, d, e.formatter.get(t), !0);
            (x = Gl(x)), e.formatter.remove(t, n, x, s), r.moveToBookmark(b);
          } else {
            const b = cr(e.getBody(), c),
              x = Ud(!1).dom;
            MI(e, x, b !== null ? b : c);
            const y = UI(e, x, c, t, n, s),
              E = Av(f.concat(y.toArray()), x);
            zd(e, b, !1),
              r.setCursorLocation(E, 1),
              o.isEmpty(c) && o.remove(c);
          }
      },
      VI = (e, t) => {
        const n = e.selection,
          s = e.getBody();
        Hd(e, null, !1),
          (t === 8 || t === 46) &&
            n.isCollapsed() &&
            n.getStart().innerHTML === ui &&
            Hd(e, cr(s, n.getStart())),
          (t === 37 || t === 39) && Hd(e, cr(s, n.getStart()));
      },
      WI = (e) => {
        e.on("mouseup keydown", (t) => {
          VI(e, t.keyCode);
        });
      },
      jI = (e, t) => {
        const n = Ud(!1),
          s = Av(t, n.dom);
        return Xn(S.fromDom(e), n), At(S.fromDom(e)), L(s, 0);
      },
      qI = (e, t) => {
        const n = e.schema.getTextInlineElements();
        return Fe(n, bt(t)) && !Ps(t.dom) && !Zo(t.dom);
      },
      KI = (e) => Ps(e.dom) && _v(e.dom),
      ic = {},
      Tv = Mr,
      Rv = Fi,
      GI = (e, t) => {
        ic[e] || (ic[e] = []), ic[e].push(t);
      },
      YI = (e, t) => {
        Rv(ic[e], (n) => {
          n(t);
        });
      };
    GI("pre", (e) => {
      const t = e.selection.getRng();
      let n;
      const s = (i) => r(i.previousSibling) && hg(n, i.previousSibling) !== -1,
        o = (i, a) => {
          const c = S.fromDom(a),
            f = yo(c).dom;
          At(c),
            Xo(S.fromDom(i), [
              S.fromTag("br", f),
              S.fromTag("br", f),
              ...Yt(c),
            ]);
        },
        r = Qn(["pre"]);
      t.collapsed ||
        ((n = e.selection.getSelectedBlocks()),
        Rv(Tv(Tv(n, r), s), (i) => {
          o(i.previousSibling, i);
        }));
    });
    const Vd = G.each,
      Wd = (e) => ve(e) && !Mn(e) && !Ps(e) && !Zo(e),
      Pv = (e, t) => {
        for (let n = e; n; n = n[t]) {
          if (ne(n) && Gs(n.data)) return e;
          if (ve(n) && !Mn(n)) return n;
        }
        return e;
      },
      Ov = (e, t, n) => {
        const s = Dy(e);
        if (
          t &&
          n &&
          ((t = Pv(t, "previousSibling")),
          (n = Pv(n, "nextSibling")),
          s.compare(t, n))
        ) {
          for (let o = t.nextSibling; o && o !== n; ) {
            const r = o;
            (o = o.nextSibling), t.appendChild(r);
          }
          return (
            e.remove(n),
            G.each(G.grep(n.childNodes), (o) => {
              t.appendChild(o);
            }),
            t
          );
        }
        return n;
      },
      Dv = (e, t, n, s) => {
        if (s && t.merge_siblings !== !1) {
          const o = Ov(e, TC(s), s);
          Ov(e, o, TC(o, !0));
        }
      },
      XI = (e, t, n) => {
        if (t.clear_child_styles) {
          const s = t.links ? "*:not(a)" : "*";
          Vd(e.select(s, n), (o) => {
            Wd(o) &&
              Vd(t.styles, (r, i) => {
                e.setStyle(o, i, "");
              });
          });
        }
      },
      jd = (e, t, n) => {
        Vd(e.childNodes, (s) => {
          Wd(s) && (t(s) && n(s), s.hasChildNodes() && jd(s, t, n));
        });
      },
      QI = (e, t) => {
        t.nodeName === "SPAN" &&
          e.getAttribs(t).length === 0 &&
          e.remove(t, !0);
      },
      Bv = (e, t) => (n) => !!(n && Ul(e, n, t)),
      Iv = (e, t, n) => (s) => {
        e.setStyle(s, t, n),
          s.getAttribute("style") === "" && s.removeAttribute("style"),
          QI(e, s);
      },
      wa = _s.generate([{ keep: [] }, { rename: ["name"] }, { removed: [] }]),
      ZI = /^(src|href|style)$/,
      qd = G.each,
      ac = Mf,
      JI = (e) => /^(TR|TH|TD)$/.test(e.nodeName),
      $v = (e, t, n) => e.isChildOf(t, n) && t !== n && !e.isBlock(n),
      Lv = (e, t, n) => {
        let s = t[n ? "startContainer" : "endContainer"],
          o = t[n ? "startOffset" : "endOffset"];
        if (ve(s)) {
          const r = s.childNodes.length - 1;
          !n && o && o--, (s = s.childNodes[o > r ? r : o]);
        }
        return (
          ne(s) &&
            n &&
            o >= s.nodeValue.length &&
            (s = new zt(s, e.getBody()).next() || s),
          ne(s) && !n && o === 0 && (s = new zt(s, e.getBody()).prev() || s),
          s
        );
      },
      Fv = (e, t) => {
        const n = t ? "firstChild" : "lastChild";
        if (JI(e) && e[n]) {
          const s = e[n];
          return (e.nodeName === "TR" && s[n]) || s;
        }
        return e;
      },
      Kd = (e, t, n, s) => {
        const o = e.create(n, s);
        return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
      },
      Mv = (e, t, n, s, o) => {
        const r = S.fromDom(t),
          i = S.fromDom(e.create(s, o)),
          a = n ? lh(r) : ah(r);
        return Xo(i, a), n ? (Xn(r, i), yh(i, r)) : (vo(r, i), It(i, r)), i.dom;
      },
      e$ = (e, t) => t.links && e.nodeName === "A",
      t$ = (e, t, n) => {
        const s = t.parentNode;
        let o;
        const r = e.dom,
          i = wn(e);
        Os(n) &&
          s === r.getRoot() &&
          (!n.list_block || !ac(t, n.list_block)) &&
          T(pt(t.childNodes), (a) => {
            oi(e, i, a.nodeName.toLowerCase())
              ? o
                ? o.appendChild(a)
                : ((o = Kd(r, a, i)), r.setAttribs(o, ir(e)))
              : (o = null);
          }),
          !(QR(n) && !ac(n.inline, t)) && r.remove(t, !0);
      },
      Uv = (e, t, n, s, o) => {
        let r;
        const i = e.dom;
        if (!rc(i, s, t) && !e$(s, t)) return wa.keep();
        const a = s;
        if (Wt(t) && t.remove === "all" && Nt(t.preserve_attributes)) {
          const c = H(i.getAttribs(a), (f) =>
            R(t.preserve_attributes, f.name.toLowerCase())
          );
          if (
            (i.removeAllAttribs(a),
            T(c, (f) => i.setAttrib(a, f.name, f.value)),
            c.length > 0)
          )
            return wa.rename("span");
        }
        if (t.remove !== "all") {
          qd(t.styles, (f, d) => {
            (f = Uf(eo(f, n), d + "")),
              yn(d) && ((d = f), (o = null)),
              (t.remove_similar || !o || ac(Ul(i, o, d), f)) &&
                i.setStyle(a, d, ""),
              (r = !0);
          }),
            r &&
              i.getAttrib(a, "style") === "" &&
              (a.removeAttribute("style"), a.removeAttribute("data-mce-style")),
            qd(t.attributes, (f, d) => {
              let p;
              if (
                ((f = eo(f, n)),
                yn(d) && ((d = f), (o = null)),
                t.remove_similar || !o || ac(i.getAttrib(o, d), f))
              ) {
                if (
                  d === "class" &&
                  ((f = i.getAttrib(a, d)),
                  f &&
                    ((p = ""),
                    T(f.split(/\s+/), (C) => {
                      /mce\-\w+/.test(C) && (p += (p ? " " : "") + C);
                    }),
                    p))
                ) {
                  i.setAttrib(a, d, p);
                  return;
                }
                if (
                  (ZI.test(d) && a.removeAttribute("data-mce-" + d),
                  d === "style" &&
                    Qn(["li"])(a) &&
                    i.getStyle(a, "list-style-type") === "none")
                ) {
                  a.removeAttribute(d),
                    i.setStyle(a, "list-style-type", "none");
                  return;
                }
                d === "class" && a.removeAttribute("className"),
                  a.removeAttribute(d);
              }
            }),
            qd(t.classes, (f) => {
              (f = eo(f, n)), (!o || i.hasClass(o, f)) && i.removeClass(a, f);
            });
          const c = i.getAttribs(a);
          for (let f = 0; f < c.length; f++) {
            const d = c[f].nodeName;
            if (d.indexOf("_") !== 0 && d.indexOf("data-") !== 0)
              return wa.keep();
          }
        }
        return t.remove !== "none" ? (t$(e, a, t), wa.removed()) : wa.keep();
      },
      fi = (e, t, n, s, o) =>
        Uv(e, t, n, s, o).fold(mt, (r) => (e.dom.rename(s, r), !0), rt),
      n$ = (e, t, n, s, o) => {
        let r;
        return (
          T(zl(e.dom, t.parentNode).reverse(), (i) => {
            if (!r && i.id !== "_start" && i.id !== "_end") {
              const a = Ds(e, i, n, s, o);
              a && a.split !== !1 && (r = i);
            }
          }),
          r
        );
      },
      s$ = (e, t, n, s) =>
        Uv(e, t, n, s, s).fold(
          K(s),
          (o) => (e.dom.createFragment().appendChild(s), e.dom.rename(s, o)),
          K(null)
        ),
      o$ = (e, t, n, s, o, r, i, a) => {
        let c, f, d;
        const p = e.dom;
        if (n) {
          const C = n.parentNode;
          for (let b = s.parentNode; b && b !== C; b = b.parentNode) {
            c = p.clone(b, !1);
            for (
              let x = 0;
              x < t.length && ((c = s$(e, t[x], a, c)), c !== null);
              x++
            );
            c && (f && c.appendChild(f), d || (d = c), (f = c));
          }
          r && (!i.mixed || !p.isBlock(n)) && (s = p.split(n, s)),
            f &&
              (o.parentNode.insertBefore(f, o),
              d.appendChild(o),
              Wt(i) && Dv(p, i, a, f));
        }
        return s;
      },
      zv = (e, t, n, s, o) => {
        const r = e.formatter.get(t),
          i = r[0];
        let a = !0;
        const c = e.dom,
          f = e.selection,
          d = (E) => {
            const _ = n$(e, E, t, n, o);
            return o$(e, r, _, E, E, !0, i, n);
          },
          p = (E) => Mn(E) && ve(E) && (E.id === "_start" || E.id === "_end"),
          C = (E) => M(r, (_) => fi(e, _, n, E, E)),
          b = (E) => {
            let _ = !0,
              P = !1;
            ve(E) &&
              c.getContentEditable(E) &&
              ((_ = a), (a = c.getContentEditable(E) === "true"), (P = !0));
            const z = pt(E.childNodes);
            if (a && !P) {
              const te = C(E) || M(r, (q) => rc(c, E, q)),
                W = E.parentNode;
              !te && ke(W) && zf(i) && C(W);
            }
            if (i.deep && z.length) {
              for (let $ = 0; $ < z.length; $++) b(z[$]);
              P && (a = _);
            }
            T(["underline", "line-through", "overline"], ($) => {
              ve(E) &&
                e.dom.getStyle(E, "text-decoration") === $ &&
                E.parentNode &&
                RC(c, E.parentNode) === $ &&
                fi(
                  e,
                  {
                    deep: !1,
                    exact: !0,
                    inline: "span",
                    styles: { textDecoration: $ },
                  },
                  null,
                  E
                );
            });
          },
          x = (E) => {
            const _ = c.get(E ? "_start" : "_end");
            let P = _[E ? "firstChild" : "lastChild"];
            return (
              p(P) && (P = P[E ? "firstChild" : "lastChild"]),
              ne(P) &&
                P.data.length === 0 &&
                (P = E
                  ? _.previousSibling || _.nextSibling
                  : _.nextSibling || _.previousSibling),
              c.remove(_, !0),
              P
            );
          },
          y = (E) => {
            let _,
              P,
              z = ii(e, E, r, E.collapsed);
            if (i.split) {
              if (((z = Gl(z)), (_ = Lv(e, z, !0)), (P = Lv(e, z)), _ !== P)) {
                if (((_ = Fv(_, !0)), (P = Fv(P, !1)), $v(c, _, P))) {
                  const $ = g.from(_.firstChild).getOr(_);
                  d(
                    Mv(c, $, !0, "span", {
                      id: "_start",
                      "data-mce-type": "bookmark",
                    })
                  ),
                    x(!0);
                  return;
                }
                if ($v(c, P, _)) {
                  const $ = g.from(P.lastChild).getOr(P);
                  d(
                    Mv(c, $, !1, "span", {
                      id: "_end",
                      "data-mce-type": "bookmark",
                    })
                  ),
                    x(!1);
                  return;
                }
                (_ = Kd(c, _, "span", {
                  id: "_start",
                  "data-mce-type": "bookmark",
                })),
                  (P = Kd(c, P, "span", {
                    id: "_end",
                    "data-mce-type": "bookmark",
                  }));
                const I = c.createRng();
                I.setStartAfter(_),
                  I.setEndBefore(P),
                  ma(c, I, ($) => {
                    T($, (te) => {
                      !Mn(te) && !Mn(te.parentNode) && d(te);
                    });
                  }),
                  d(_),
                  d(P),
                  (_ = x(!0)),
                  (P = x());
              } else _ = P = d(_);
              (z.startContainer = _.parentNode ? _.parentNode : _),
                (z.startOffset = c.nodeIndex(_)),
                (z.endContainer = P.parentNode ? P.parentNode : P),
                (z.endOffset = c.nodeIndex(P) + 1);
            }
            ma(c, z, (I) => {
              T(I, b);
            });
          };
        if (s) {
          if (Ml(s)) {
            const E = c.createRng();
            E.setStartBefore(s), E.setEndAfter(s), y(E);
          } else y(s);
          Yf(e, t, s, n);
          return;
        }
        if (c.getContentEditable(f.getNode()) === "false") {
          s = f.getNode();
          for (
            let E = 0;
            E < r.length && !(r[E].ceFalseOverride && fi(e, r[E], n, s, s));
            E++
          );
          Yf(e, t, s, n);
          return;
        }
        !f.isCollapsed() || !Wt(i) || ai(e).length
          ? (Kf(f, !0, () => {
              qf(e, y);
            }),
            Wt(i) && Md(e, t, n, f.getStart()) && AC(c, f, f.getRng()),
            e.nodeChanged())
          : HI(e, t, n, o),
          Yf(e, t, s, n);
      },
      Hv = G.each,
      r$ = (e, t, n, s) => {
        const o = (r) => {
          if (r.nodeType === 1 && r.parentNode && r.parentNode.nodeType === 1) {
            const i = RC(e, r.parentNode);
            e.getStyle(r, "color") && i
              ? e.setStyle(r, "text-decoration", i)
              : e.getStyle(r, "text-decoration") === i &&
                e.setStyle(r, "text-decoration", null);
          }
        };
        t.styles &&
          (t.styles.color || t.styles.textDecoration) &&
          (G.walk(s, o, "childNodes"), o(s));
      },
      i$ = (e, t, n, s) => {
        t.styles &&
          t.styles.backgroundColor &&
          jd(
            s,
            Bv(e, "fontSize"),
            Iv(e, "backgroundColor", eo(t.styles.backgroundColor, n))
          );
      },
      a$ = (e, t, n, s) => {
        Wt(t) &&
          (t.inline === "sub" || t.inline === "sup") &&
          (jd(s, Bv(e, "fontSize"), Iv(e, "fontSize", "")),
          e.remove(e.select(t.inline === "sup" ? "sub" : "sup", s), !0));
      },
      l$ = (e, t, n, s) => {
        Hv(t, (o) => {
          Wt(o) &&
            Hv(e.dom.select(o.inline, s), (r) => {
              !Wd(r) || fi(e, o, n, r, o.exact ? r : null);
            }),
            XI(e.dom, o, s);
        });
      },
      c$ = (e, t, n, s, o) => {
        (Ds(e, o.parentNode, n, s) && fi(e, t, s, o)) ||
          (t.merge_with_parents &&
            e.dom.getParent(o.parentNode, (r) => {
              if (Ds(e, r, n, s)) return fi(e, t, s, o), !0;
            }));
      },
      lc = G.each,
      u$ = (e) => ve(e) && !Mn(e) && !Ps(e) && !Zo(e),
      f$ = (e, t, n, s) => {
        if (v1(e) && Wt(t)) {
          const o = ct(Se({}, e.schema.getTextBlockElements()), {
              td: {},
              th: {},
              li: {},
              dt: {},
              dd: {},
              figcaption: {},
              caption: {},
              details: {},
              summary: {},
            }),
            r = RI(S.fromDom(n), (i) => Ps(i.dom));
          return Fr(o, s) && Ht(S.fromDom(n.parentNode), !1) && !r;
        } else return !1;
      },
      Vv = (e, t, n, s) => {
        const o = e.formatter.get(t),
          r = o[0],
          i = !s && e.selection.isCollapsed(),
          a = e.dom,
          c = e.selection,
          f = (b, x = r) => {
            if (
              (Ye(x.onformat) && x.onformat(b, x, n, s),
              lc(x.styles, (y, E) => {
                a.setStyle(b, E, eo(y, n));
              }),
              x.styles)
            ) {
              const y = a.getAttrib(b, "style");
              y && a.setAttrib(b, "data-mce-style", y);
            }
            lc(x.attributes, (y, E) => {
              a.setAttrib(b, E, eo(y, n));
            }),
              lc(x.classes, (y) => {
                (y = eo(y, n)), a.hasClass(b, y) || a.addClass(b, y);
              });
          },
          d = (b, x) => {
            let y = !1;
            return (
              lc(b, (E) => {
                if (!Rn(E)) return !1;
                if (
                  !(ke(E.collapsed) && E.collapsed !== i) &&
                  a.is(x, E.selector) &&
                  !Ps(x)
                )
                  return f(x, E), (y = !0), !1;
              }),
              y
            );
          },
          p = (b) => {
            if (be(b)) {
              const x = a.create(b);
              return f(x), x;
            } else return null;
          },
          C = (b, x, y) => {
            const E = [];
            let _ = !0;
            const P = r.inline || r.block,
              z = p(P);
            ma(b, x, (I) => {
              let $;
              const te = (W) => {
                let q = !1,
                  Q = _;
                const J = W.nodeName.toLowerCase(),
                  Ee = W.parentNode,
                  ae = Ee.nodeName.toLowerCase();
                if (
                  (ve(W) &&
                    b.getContentEditable(W) &&
                    ((Q = _),
                    (_ = b.getContentEditable(W) === "true"),
                    (q = !0)),
                  Dt(W) && !f$(e, r, W, ae))
                ) {
                  ($ = null), Os(r) && b.remove(W);
                  return;
                }
                if (Os(r) && r.wrapper && Ds(e, W, t, n)) {
                  $ = null;
                  return;
                }
                if (
                  _ &&
                  !q &&
                  Os(r) &&
                  !r.wrapper &&
                  Lf(e, J) &&
                  oi(e, ae, P)
                ) {
                  const se = b.rename(W, P);
                  f(se), E.push(se), ($ = null);
                  return;
                }
                if (Rn(r)) {
                  let se = d(o, W);
                  if (
                    (!se && ke(Ee) && zf(r) && (se = d(o, Ee)), !Wt(r) || se)
                  ) {
                    $ = null;
                    return;
                  }
                }
                _ &&
                !q &&
                oi(e, P, J) &&
                oi(e, ae, P) &&
                !(!y && ne(W) && hl(W.data)) &&
                !Ps(W) &&
                (!Wt(r) || !b.isBlock(W))
                  ? ($ ||
                      (($ = b.clone(z, !1)),
                      W.parentNode.insertBefore($, W),
                      E.push($)),
                    $.appendChild(W))
                  : (($ = null),
                    T(pt(W.childNodes), te),
                    q && (_ = Q),
                    ($ = null));
              };
              T(I, te);
            }),
              r.links === !0 &&
                T(E, (I) => {
                  const $ = (te) => {
                    te.nodeName === "A" && f(te, r), T(pt(te.childNodes), $);
                  };
                  $(I);
                }),
              T(E, (I) => {
                const $ = (q) => {
                    let Q = 0;
                    return (
                      T(q.childNodes, (J) => {
                        !GR(J) && !Mn(J) && Q++;
                      }),
                      Q
                    );
                  },
                  te = (q) =>
                    de(q.childNodes, u$)
                      .filter((J) => rc(b, J, r))
                      .map((J) => {
                        const Ee = b.clone(J, !1);
                        return f(Ee), b.replace(Ee, q, !0), b.remove(J, !0), Ee;
                      })
                      .getOr(q),
                  W = $(I);
                if ((E.length > 1 || !b.isBlock(I)) && W === 0) {
                  b.remove(I, !0);
                  return;
                }
                (Wt(r) || (Os(r) && r.wrapper)) &&
                  (!r.exact && W === 1 && (I = te(I)),
                  l$(e, o, n, I),
                  c$(e, r, t, n, I),
                  i$(b, r, n, I),
                  r$(b, r, n, I),
                  a$(b, r, n, I),
                  Dv(b, r, n, I));
              });
          };
        if (a.getContentEditable(c.getNode()) === "false") {
          s = c.getNode();
          for (let b = 0, x = o.length; b < x; b++) {
            const y = o[b];
            if (y.ceFalseOverride && Rn(y) && a.is(s, y.selector)) {
              f(s, y);
              break;
            }
          }
          GC(e, t, s, n);
          return;
        }
        if (r) {
          if (s)
            if (Ml(s)) {
              if (!d(o, s)) {
                const b = a.createRng();
                b.setStartBefore(s), b.setEndAfter(s), C(a, ii(e, b, o), !0);
              }
            } else C(a, s, !0);
          else
            !i || !Wt(r) || ai(e).length
              ? (c.setRng(Od(c.getRng())),
                Kf(c, !0, () => {
                  qf(e, (b, x) => {
                    const y = x ? b : ii(e, b, o);
                    C(a, y, !1);
                  });
                }),
                AC(a, c, c.getRng()),
                e.nodeChanged())
              : zI(e, t, n);
          YI(t, e);
        }
        GC(e, t, s, n);
      },
      Wv = (e) => Fe(e, "vars"),
      d$ = (e, t) => {
        e.set({}),
          t.on("NodeChange", (n) => {
            Gv(t, n.element, e.get());
          }),
          t.on("FormatApply FormatRemove", (n) => {
            const s = g
              .from(n.node)
              .map((o) => (Ml(o) ? o : o.startContainer))
              .bind((o) => (ve(o) ? g.some(o) : g.from(o.parentElement)))
              .getOrThunk(() => jv(t));
            Gv(t, s, e.get());
          });
      },
      jv = (e) => e.selection.getStart(),
      qv = (e, t, n, s, o) =>
        Pe(
          t,
          (a) => {
            const c = e.formatter.matchNode(a, n, o != null ? o : {}, s);
            return !Pt(c);
          },
          (a) =>
            xv(e, a, n) ? !0 : s ? !1 : ke(e.formatter.matchNode(a, n, o, !0))
        ),
      Kv = (e, t) => {
        const n = t != null ? t : jv(e);
        return H(zl(e.dom, n), (s) => ve(s) && !Zo(s));
      },
      Gv = (e, t, n) => {
        const s = Kv(e, t);
        ht(n, (o, r) => {
          const i = (a) => {
            const c = qv(e, s, r, a.similar, Wv(a) ? a.vars : void 0),
              f = c.isSome();
            if (a.state.get() !== f) {
              a.state.set(f);
              const d = c.getOr(t);
              Wv(a)
                ? a.callback(f, { node: d, format: r, parents: s })
                : T(a.callbacks, (p) =>
                    p(f, { node: d, format: r, parents: s })
                  );
            }
          };
          T([o.withSimilar, o.withoutSimilar], i), T(o.withVars, i);
        });
      },
      m$ = (e, t, n, s, o, r) => {
        const i = t.get();
        T(n.split(","), (a) => {
          const c = at(i, a).getOrThunk(() => {
              const d = {
                withSimilar: { state: $t(!1), similar: !0, callbacks: [] },
                withoutSimilar: { state: $t(!1), similar: !1, callbacks: [] },
                withVars: [],
              };
              return (i[a] = d), d;
            }),
            f = () => {
              const d = Kv(e);
              return qv(e, d, a, o, r).isSome();
            };
          if (Pt(r)) {
            const d = o ? c.withSimilar : c.withoutSimilar;
            d.callbacks.push(s), d.callbacks.length === 1 && d.state.set(f());
          } else
            c.withVars.push({
              state: $t(f()),
              similar: o,
              vars: r,
              callback: s,
            });
        }),
          t.set(i);
      },
      p$ = (e, t, n) => {
        const s = e.get();
        T(t.split(","), (o) =>
          at(s, o).each((r) => {
            s[o] = {
              withSimilar: ct(Se({}, r.withSimilar), {
                callbacks: H(r.withSimilar.callbacks, (i) => i !== n),
              }),
              withoutSimilar: ct(Se({}, r.withoutSimilar), {
                callbacks: H(r.withoutSimilar.callbacks, (i) => i !== n),
              }),
              withVars: H(r.withVars, (i) => i.callback !== n),
            };
          })
        ),
          e.set(s);
      },
      g$ = (e, t, n, s, o, r) => (
        t.get() === null && d$(t, e),
        m$(e, t, n, s, o, r),
        { unbind: () => p$(t, n, s) }
      ),
      h$ = (e, t, n, s) => {
        const o = e.formatter.get(t);
        Md(e, t, n, s) && (!("toggle" in o[0]) || o[0].toggle)
          ? zv(e, t, n, s)
          : Vv(e, t, n, s);
      };
    function b$(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      } else return Array.from(e);
    }
    var C$ = Object.hasOwnProperty,
      Yv = Object.setPrototypeOf,
      y$ = Object.isFrozen,
      v$ = Object.getPrototypeOf,
      E$ = Object.getOwnPropertyDescriptor,
      Sn = Object.freeze,
      Bs = Object.seal,
      x$ = Object.create,
      Xv = typeof Reflect != "undefined" && Reflect,
      cc = Xv.apply,
      Gd = Xv.construct;
    cc ||
      (cc = function (t, n, s) {
        return t.apply(n, s);
      }),
      Sn ||
        (Sn = function (t) {
          return t;
        }),
      Bs ||
        (Bs = function (t) {
          return t;
        }),
      Gd ||
        (Gd = function (t, n) {
          return new (Function.prototype.bind.apply(t, [null].concat(b$(n))))();
        });
    var w$ = os(Array.prototype.forEach),
      S$ = os(Array.prototype.pop),
      Sa = os(Array.prototype.push),
      uc = os(String.prototype.toLowerCase),
      _$ = os(String.prototype.match),
      Do = os(String.prototype.replace),
      k$ = os(String.prototype.indexOf),
      N$ = os(String.prototype.trim),
      _n = os(RegExp.prototype.test),
      Yd = A$(TypeError);
    function os(e) {
      return function (t) {
        for (
          var n = arguments.length, s = Array(n > 1 ? n - 1 : 0), o = 1;
          o < n;
          o++
        )
          s[o - 1] = arguments[o];
        return cc(e, t, s);
      };
    }
    function A$(e) {
      return function () {
        for (var t = arguments.length, n = Array(t), s = 0; s < t; s++)
          n[s] = arguments[s];
        return Gd(e, n);
      };
    }
    function Ze(e, t) {
      Yv && Yv(e, null);
      for (var n = t.length; n--; ) {
        var s = t[n];
        if (typeof s == "string") {
          var o = uc(s);
          o !== s && (y$(t) || (t[n] = o), (s = o));
        }
        e[s] = !0;
      }
      return e;
    }
    function gr(e) {
      var t = x$(null),
        n = void 0;
      for (n in e) cc(C$, e, [n]) && (t[n] = e[n]);
      return t;
    }
    function fc(e, t) {
      for (; e !== null; ) {
        var n = E$(e, t);
        if (n) {
          if (n.get) return os(n.get);
          if (typeof n.value == "function") return os(n.value);
        }
        e = v$(e);
      }
      function s(o) {
        return console.warn("fallback value for", o), null;
      }
      return s;
    }
    var Qv = Sn([
        "a",
        "abbr",
        "acronym",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "bdi",
        "bdo",
        "big",
        "blink",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "col",
        "colgroup",
        "content",
        "data",
        "datalist",
        "dd",
        "decorator",
        "del",
        "details",
        "dfn",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "element",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "font",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meter",
        "nav",
        "nobr",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "section",
        "select",
        "shadow",
        "small",
        "source",
        "spacer",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "track",
        "tt",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
      ]),
      Xd = Sn([
        "svg",
        "a",
        "altglyph",
        "altglyphdef",
        "altglyphitem",
        "animatecolor",
        "animatemotion",
        "animatetransform",
        "circle",
        "clippath",
        "defs",
        "desc",
        "ellipse",
        "filter",
        "font",
        "g",
        "glyph",
        "glyphref",
        "hkern",
        "image",
        "line",
        "lineargradient",
        "marker",
        "mask",
        "metadata",
        "mpath",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialgradient",
        "rect",
        "stop",
        "style",
        "switch",
        "symbol",
        "text",
        "textpath",
        "title",
        "tref",
        "tspan",
        "view",
        "vkern",
      ]),
      Qd = Sn([
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
      ]),
      T$ = Sn([
        "animate",
        "color-profile",
        "cursor",
        "discard",
        "fedropshadow",
        "font-face",
        "font-face-format",
        "font-face-name",
        "font-face-src",
        "font-face-uri",
        "foreignobject",
        "hatch",
        "hatchpath",
        "mesh",
        "meshgradient",
        "meshpatch",
        "meshrow",
        "missing-glyph",
        "script",
        "set",
        "solidcolor",
        "unknown",
        "use",
      ]),
      Zd = Sn([
        "math",
        "menclose",
        "merror",
        "mfenced",
        "mfrac",
        "mglyph",
        "mi",
        "mlabeledtr",
        "mmultiscripts",
        "mn",
        "mo",
        "mover",
        "mpadded",
        "mphantom",
        "mroot",
        "mrow",
        "ms",
        "mspace",
        "msqrt",
        "mstyle",
        "msub",
        "msup",
        "msubsup",
        "mtable",
        "mtd",
        "mtext",
        "mtr",
        "munder",
        "munderover",
      ]),
      R$ = Sn([
        "maction",
        "maligngroup",
        "malignmark",
        "mlongdiv",
        "mscarries",
        "mscarry",
        "msgroup",
        "mstack",
        "msline",
        "msrow",
        "semantics",
        "annotation",
        "annotation-xml",
        "mprescripts",
        "none",
      ]),
      Zv = Sn(["#text"]),
      Jv = Sn([
        "accept",
        "action",
        "align",
        "alt",
        "autocapitalize",
        "autocomplete",
        "autopictureinpicture",
        "autoplay",
        "background",
        "bgcolor",
        "border",
        "capture",
        "cellpadding",
        "cellspacing",
        "checked",
        "cite",
        "class",
        "clear",
        "color",
        "cols",
        "colspan",
        "controls",
        "controlslist",
        "coords",
        "crossorigin",
        "datetime",
        "decoding",
        "default",
        "dir",
        "disabled",
        "disablepictureinpicture",
        "disableremoteplayback",
        "download",
        "draggable",
        "enctype",
        "enterkeyhint",
        "face",
        "for",
        "headers",
        "height",
        "hidden",
        "high",
        "href",
        "hreflang",
        "id",
        "inputmode",
        "integrity",
        "ismap",
        "kind",
        "label",
        "lang",
        "list",
        "loading",
        "loop",
        "low",
        "max",
        "maxlength",
        "media",
        "method",
        "min",
        "minlength",
        "multiple",
        "muted",
        "name",
        "nonce",
        "noshade",
        "novalidate",
        "nowrap",
        "open",
        "optimum",
        "pattern",
        "placeholder",
        "playsinline",
        "poster",
        "preload",
        "pubdate",
        "radiogroup",
        "readonly",
        "rel",
        "required",
        "rev",
        "reversed",
        "role",
        "rows",
        "rowspan",
        "spellcheck",
        "scope",
        "selected",
        "shape",
        "size",
        "sizes",
        "span",
        "srclang",
        "start",
        "src",
        "srcset",
        "step",
        "style",
        "summary",
        "tabindex",
        "title",
        "translate",
        "type",
        "usemap",
        "valign",
        "value",
        "width",
        "xmlns",
        "slot",
      ]),
      Jd = Sn([
        "accent-height",
        "accumulate",
        "additive",
        "alignment-baseline",
        "ascent",
        "attributename",
        "attributetype",
        "azimuth",
        "basefrequency",
        "baseline-shift",
        "begin",
        "bias",
        "by",
        "class",
        "clip",
        "clippathunits",
        "clip-path",
        "clip-rule",
        "color",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "cx",
        "cy",
        "d",
        "dx",
        "dy",
        "diffuseconstant",
        "direction",
        "display",
        "divisor",
        "dur",
        "edgemode",
        "elevation",
        "end",
        "fill",
        "fill-opacity",
        "fill-rule",
        "filter",
        "filterunits",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "fx",
        "fy",
        "g1",
        "g2",
        "glyph-name",
        "glyphref",
        "gradientunits",
        "gradienttransform",
        "height",
        "href",
        "id",
        "image-rendering",
        "in",
        "in2",
        "k",
        "k1",
        "k2",
        "k3",
        "k4",
        "kerning",
        "keypoints",
        "keysplines",
        "keytimes",
        "lang",
        "lengthadjust",
        "letter-spacing",
        "kernelmatrix",
        "kernelunitlength",
        "lighting-color",
        "local",
        "marker-end",
        "marker-mid",
        "marker-start",
        "markerheight",
        "markerunits",
        "markerwidth",
        "maskcontentunits",
        "maskunits",
        "max",
        "mask",
        "media",
        "method",
        "mode",
        "min",
        "name",
        "numoctaves",
        "offset",
        "operator",
        "opacity",
        "order",
        "orient",
        "orientation",
        "origin",
        "overflow",
        "paint-order",
        "path",
        "pathlength",
        "patterncontentunits",
        "patterntransform",
        "patternunits",
        "points",
        "preservealpha",
        "preserveaspectratio",
        "primitiveunits",
        "r",
        "rx",
        "ry",
        "radius",
        "refx",
        "refy",
        "repeatcount",
        "repeatdur",
        "restart",
        "result",
        "rotate",
        "scale",
        "seed",
        "shape-rendering",
        "specularconstant",
        "specularexponent",
        "spreadmethod",
        "startoffset",
        "stddeviation",
        "stitchtiles",
        "stop-color",
        "stop-opacity",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke",
        "stroke-width",
        "style",
        "surfacescale",
        "systemlanguage",
        "tabindex",
        "targetx",
        "targety",
        "transform",
        "transform-origin",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "textlength",
        "type",
        "u1",
        "u2",
        "unicode",
        "values",
        "viewbox",
        "visibility",
        "version",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "width",
        "word-spacing",
        "wrap",
        "writing-mode",
        "xchannelselector",
        "ychannelselector",
        "x",
        "x1",
        "x2",
        "xmlns",
        "y",
        "y1",
        "y2",
        "z",
        "zoomandpan",
      ]),
      eE = Sn([
        "accent",
        "accentunder",
        "align",
        "bevelled",
        "close",
        "columnsalign",
        "columnlines",
        "columnspan",
        "denomalign",
        "depth",
        "dir",
        "display",
        "displaystyle",
        "encoding",
        "fence",
        "frame",
        "height",
        "href",
        "id",
        "largeop",
        "length",
        "linethickness",
        "lspace",
        "lquote",
        "mathbackground",
        "mathcolor",
        "mathsize",
        "mathvariant",
        "maxsize",
        "minsize",
        "movablelimits",
        "notation",
        "numalign",
        "open",
        "rowalign",
        "rowlines",
        "rowspacing",
        "rowspan",
        "rspace",
        "rquote",
        "scriptlevel",
        "scriptminsize",
        "scriptsizemultiplier",
        "selection",
        "separator",
        "separators",
        "stretchy",
        "subscriptshift",
        "supscriptshift",
        "symmetric",
        "voffset",
        "width",
        "xmlns",
      ]),
      dc = Sn([
        "xlink:href",
        "xml:id",
        "xlink:title",
        "xml:space",
        "xmlns:xlink",
      ]),
      P$ = Bs(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
      O$ = Bs(/<%[\s\S]*|[\s\S]*%>/gm),
      D$ = Bs(/^data-[\-\w.\u00B7-\uFFFF]/),
      B$ = Bs(/^aria-[\-\w]+$/),
      I$ = Bs(
        /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
      ),
      $$ = Bs(/^(?:\w+script|data):/i),
      L$ = Bs(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
      F$ = Bs(/^html$/i),
      _a =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol == "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
    function Is(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      } else return Array.from(e);
    }
    var M$ = function () {
        return typeof window == "undefined" ? null : window;
      },
      U$ = function (t, n) {
        if (
          (typeof t == "undefined" ? "undefined" : _a(t)) !== "object" ||
          typeof t.createPolicy != "function"
        )
          return null;
        var s = null,
          o = "data-tt-policy-suffix";
        n.currentScript &&
          n.currentScript.hasAttribute(o) &&
          (s = n.currentScript.getAttribute(o));
        var r = "dompurify" + (s ? "#" + s : "");
        try {
          return t.createPolicy(r, {
            createHTML: function (a) {
              return a;
            },
          });
        } catch {
          return (
            console.warn("TrustedTypes policy " + r + " could not be created."),
            null
          );
        }
      };
    function tE() {
      var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M$(),
        t = function (B) {
          return tE(B);
        };
      if (
        ((t.version = "2.3.6"),
        (t.removed = []),
        !e || !e.document || e.document.nodeType !== 9)
      )
        return (t.isSupported = !1), t;
      var n = e.document,
        s = e.document,
        o = e.DocumentFragment,
        r = e.HTMLTemplateElement,
        i = e.Node,
        a = e.Element,
        c = e.NodeFilter,
        f = e.NamedNodeMap,
        d = f === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : f,
        p = e.HTMLFormElement,
        C = e.DOMParser,
        b = e.trustedTypes,
        x = a.prototype,
        y = fc(x, "cloneNode"),
        E = fc(x, "nextSibling"),
        _ = fc(x, "childNodes"),
        P = fc(x, "parentNode");
      if (typeof r == "function") {
        var z = s.createElement("template");
        z.content && z.content.ownerDocument && (s = z.content.ownerDocument);
      }
      var I = U$(b, n),
        $ = I ? I.createHTML("") : "",
        te = s,
        W = te.implementation,
        q = te.createNodeIterator,
        Q = te.createDocumentFragment,
        J = te.getElementsByTagName,
        Ee = n.importNode,
        ae = {};
      try {
        ae = gr(s).documentMode ? s.documentMode : {};
      } catch {}
      var se = {};
      t.isSupported =
        typeof P == "function" &&
        W &&
        typeof W.createHTMLDocument != "undefined" &&
        ae !== 9;
      var Ke = P$,
        We = O$,
        lt = D$,
        qt = B$,
        Z = $$,
        pe = L$,
        Me = I$,
        De = null,
        me = Ze({}, [].concat(Is(Qv), Is(Xd), Is(Qd), Is(Zd), Is(Zv))),
        le = null,
        xe = Ze({}, [].concat(Is(Jv), Is(Jd), Is(eE), Is(dc))),
        Be = Object.seal(
          Object.create(null, {
            tagNameCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            attributeNameCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            allowCustomizedBuiltInElements: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: !1,
            },
          })
        ),
        Ct = null,
        Lt = null,
        wr = !0,
        Y = !0,
        he = !1,
        Ae = !1,
        Te = !1,
        je = !1,
        ze = !1,
        Le = !1,
        yt = !1,
        Qt = !1,
        Zt = !0,
        Bt = !0,
        Ft = !1,
        Jt = {},
        Tt = null,
        hn = Ze({}, [
          "annotation-xml",
          "audio",
          "colgroup",
          "desc",
          "foreignobject",
          "head",
          "iframe",
          "math",
          "mi",
          "mn",
          "mo",
          "ms",
          "mtext",
          "noembed",
          "noframes",
          "noscript",
          "plaintext",
          "script",
          "style",
          "svg",
          "template",
          "thead",
          "title",
          "video",
          "xmp",
        ]),
        Lo = null,
        Fs = Ze({}, ["audio", "video", "img", "source", "image", "track"]),
        Ms = null,
        cs = Ze({}, [
          "alt",
          "class",
          "for",
          "id",
          "label",
          "name",
          "pattern",
          "placeholder",
          "role",
          "summary",
          "title",
          "value",
          "style",
          "xmlns",
        ]),
        Sr = "http://www.w3.org/1998/Math/MathML",
        Fo = "http://www.w3.org/2000/svg",
        Hn = "http://www.w3.org/1999/xhtml",
        us = Hn,
        _r = !1,
        fs = void 0,
        su = ["application/xhtml+xml", "text/html"],
        Ep = "text/html",
        ro = void 0,
        io = null,
        NS = s.createElement("form"),
        xp = function (B) {
          return B instanceof RegExp || B instanceof Function;
        },
        ou = function (B) {
          (io && io === B) ||
            ((!B ||
              (typeof B == "undefined" ? "undefined" : _a(B)) !== "object") &&
              (B = {}),
            (B = gr(B)),
            (De = "ALLOWED_TAGS" in B ? Ze({}, B.ALLOWED_TAGS) : me),
            (le = "ALLOWED_ATTR" in B ? Ze({}, B.ALLOWED_ATTR) : xe),
            (Ms =
              "ADD_URI_SAFE_ATTR" in B ? Ze(gr(cs), B.ADD_URI_SAFE_ATTR) : cs),
            (Lo =
              "ADD_DATA_URI_TAGS" in B ? Ze(gr(Fs), B.ADD_DATA_URI_TAGS) : Fs),
            (Tt = "FORBID_CONTENTS" in B ? Ze({}, B.FORBID_CONTENTS) : hn),
            (Ct = "FORBID_TAGS" in B ? Ze({}, B.FORBID_TAGS) : {}),
            (Lt = "FORBID_ATTR" in B ? Ze({}, B.FORBID_ATTR) : {}),
            (Jt = "USE_PROFILES" in B ? B.USE_PROFILES : !1),
            (wr = B.ALLOW_ARIA_ATTR !== !1),
            (Y = B.ALLOW_DATA_ATTR !== !1),
            (he = B.ALLOW_UNKNOWN_PROTOCOLS || !1),
            (Ae = B.SAFE_FOR_TEMPLATES || !1),
            (Te = B.WHOLE_DOCUMENT || !1),
            (Le = B.RETURN_DOM || !1),
            (yt = B.RETURN_DOM_FRAGMENT || !1),
            (Qt = B.RETURN_TRUSTED_TYPE || !1),
            (ze = B.FORCE_BODY || !1),
            (Zt = B.SANITIZE_DOM !== !1),
            (Bt = B.KEEP_CONTENT !== !1),
            (Ft = B.IN_PLACE || !1),
            (Me = B.ALLOWED_URI_REGEXP || Me),
            (us = B.NAMESPACE || Hn),
            B.CUSTOM_ELEMENT_HANDLING &&
              xp(B.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
              (Be.tagNameCheck = B.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
            B.CUSTOM_ELEMENT_HANDLING &&
              xp(B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
              (Be.attributeNameCheck =
                B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
            B.CUSTOM_ELEMENT_HANDLING &&
              typeof B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
                "boolean" &&
              (Be.allowCustomizedBuiltInElements =
                B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
            (fs =
              su.indexOf(B.PARSER_MEDIA_TYPE) === -1
                ? (fs = Ep)
                : (fs = B.PARSER_MEDIA_TYPE)),
            (ro =
              fs === "application/xhtml+xml"
                ? function (re) {
                    return re;
                  }
                : uc),
            Ae && (Y = !1),
            yt && (Le = !0),
            Jt &&
              ((De = Ze({}, [].concat(Is(Zv)))),
              (le = []),
              Jt.html === !0 && (Ze(De, Qv), Ze(le, Jv)),
              Jt.svg === !0 && (Ze(De, Xd), Ze(le, Jd), Ze(le, dc)),
              Jt.svgFilters === !0 && (Ze(De, Qd), Ze(le, Jd), Ze(le, dc)),
              Jt.mathMl === !0 && (Ze(De, Zd), Ze(le, eE), Ze(le, dc))),
            B.ADD_TAGS && (De === me && (De = gr(De)), Ze(De, B.ADD_TAGS)),
            B.ADD_ATTR && (le === xe && (le = gr(le)), Ze(le, B.ADD_ATTR)),
            B.ADD_URI_SAFE_ATTR && Ze(Ms, B.ADD_URI_SAFE_ATTR),
            B.FORBID_CONTENTS &&
              (Tt === hn && (Tt = gr(Tt)), Ze(Tt, B.FORBID_CONTENTS)),
            Bt && (De["#text"] = !0),
            Te && Ze(De, ["html", "head", "body"]),
            De.table && (Ze(De, ["tbody"]), delete Ct.tbody),
            Sn && Sn(B),
            (io = B));
        },
        wp = Ze({}, ["mi", "mo", "mn", "ms", "mtext"]),
        ao = Ze({}, ["foreignobject", "desc", "title", "annotation-xml"]),
        ru = Ze({}, ["title", "style", "font", "a", "script"]),
        N = Ze({}, Xd);
      Ze(N, Qd), Ze(N, T$);
      var D = Ze({}, Zd);
      Ze(D, R$);
      var j = function (B) {
          var re = P(B);
          (!re || !re.tagName) &&
            (re = { namespaceURI: Hn, tagName: "template" });
          var _e = uc(B.tagName),
            vt = uc(re.tagName);
          return B.namespaceURI === Fo
            ? re.namespaceURI === Hn
              ? _e === "svg"
              : re.namespaceURI === Sr
              ? _e === "svg" && (vt === "annotation-xml" || wp[vt])
              : Boolean(N[_e])
            : B.namespaceURI === Sr
            ? re.namespaceURI === Hn
              ? _e === "math"
              : re.namespaceURI === Fo
              ? _e === "math" && ao[vt]
              : Boolean(D[_e])
            : B.namespaceURI === Hn
            ? (re.namespaceURI === Fo && !ao[vt]) ||
              (re.namespaceURI === Sr && !wp[vt])
              ? !1
              : !D[_e] && (ru[_e] || !N[_e])
            : !1;
        },
        V = function (B) {
          Sa(t.removed, { element: B });
          try {
            B.parentNode.removeChild(B);
          } catch {
            try {
              B.outerHTML = $;
            } catch {
              B.remove();
            }
          }
        },
        ye = function (B, re) {
          try {
            Sa(t.removed, { attribute: re.getAttributeNode(B), from: re });
          } catch {
            Sa(t.removed, { attribute: null, from: re });
          }
          if ((re.removeAttribute(B), B === "is" && !le[B]))
            if (Le || yt)
              try {
                V(re);
              } catch {}
            else
              try {
                re.setAttribute(B, "");
              } catch {}
        },
        Ve = function (B) {
          var re = void 0,
            _e = void 0;
          if (ze) B = "<remove></remove>" + B;
          else {
            var vt = _$(B, /^[\r\n\t ]+/);
            _e = vt && vt[0];
          }
          fs === "application/xhtml+xml" &&
            (B =
              '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
              B +
              "</body></html>");
          var On = I ? I.createHTML(B) : B;
          if (us === Hn)
            try {
              re = new C().parseFromString(On, fs);
            } catch {}
          if (!re || !re.documentElement) {
            re = W.createDocument(us, "template", null);
            try {
              re.documentElement.innerHTML = _r ? "" : On;
            } catch {}
          }
          var bn = re.body || re.documentElement;
          return (
            B &&
              _e &&
              bn.insertBefore(s.createTextNode(_e), bn.childNodes[0] || null),
            us === Hn
              ? J.call(re, Te ? "html" : "body")[0]
              : Te
              ? re.documentElement
              : bn
          );
        },
        He = function (B) {
          return q.call(
            B.ownerDocument || B,
            B,
            c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT,
            null,
            !1
          );
        },
        Nn = function (B) {
          return (
            B instanceof p &&
            (typeof B.nodeName != "string" ||
              typeof B.textContent != "string" ||
              typeof B.removeChild != "function" ||
              !(B.attributes instanceof d) ||
              typeof B.removeAttribute != "function" ||
              typeof B.setAttribute != "function" ||
              typeof B.namespaceURI != "string" ||
              typeof B.insertBefore != "function")
          );
        },
        ds = function (B) {
          return (typeof i == "undefined" ? "undefined" : _a(i)) === "object"
            ? B instanceof i
            : B &&
                (typeof B == "undefined" ? "undefined" : _a(B)) === "object" &&
                typeof B.nodeType == "number" &&
                typeof B.nodeName == "string";
        },
        lo = function (B, re, _e) {
          !se[B] ||
            w$(se[B], function (vt) {
              vt.call(t, re, _e, io);
            });
        },
        AS = function (B) {
          var re = void 0;
          if (
            (lo("beforeSanitizeElements", B, null),
            Nn(B) || _n(/[\u0080-\uFFFF]/, B.nodeName))
          )
            return V(B), !0;
          var _e = ro(B.nodeName);
          if (
            (lo("uponSanitizeElement", B, { tagName: _e, allowedTags: De }),
            (B.hasChildNodes() &&
              !ds(B.firstElementChild) &&
              (!ds(B.content) || !ds(B.content.firstElementChild)) &&
              _n(/<[/\w]/g, B.innerHTML) &&
              _n(/<[/\w]/g, B.textContent)) ||
              (_e === "select" && _n(/<template/i, B.innerHTML)))
          )
            return V(B), !0;
          if (!De[_e] || Ct[_e]) {
            if (
              !Ct[_e] &&
              RS(_e) &&
              ((Be.tagNameCheck instanceof RegExp && _n(Be.tagNameCheck, _e)) ||
                (Be.tagNameCheck instanceof Function && Be.tagNameCheck(_e)))
            )
              return !1;
            if (Bt && !Tt[_e]) {
              var vt = P(B) || B.parentNode,
                On = _(B) || B.childNodes;
              if (On && vt)
                for (var bn = On.length, on = bn - 1; on >= 0; --on)
                  vt.insertBefore(y(On[on], !0), E(B));
            }
            return V(B), !0;
          }
          return (B instanceof a && !j(B)) ||
            ((_e === "noscript" || _e === "noembed") &&
              _n(/<\/no(script|embed)/i, B.innerHTML))
            ? (V(B), !0)
            : (Ae &&
                B.nodeType === 3 &&
                ((re = B.textContent),
                (re = Do(re, Ke, " ")),
                (re = Do(re, We, " ")),
                B.textContent !== re &&
                  (Sa(t.removed, { element: B.cloneNode() }),
                  (B.textContent = re))),
              lo("afterSanitizeElements", B, null),
              !1);
        },
        TS = function (B, re, _e) {
          if (Zt && (re === "id" || re === "name") && (_e in s || _e in NS))
            return !1;
          if (!(Y && !Lt[re] && _n(lt, re))) {
            if (!(wr && _n(qt, re))) {
              if (!le[re] || Lt[re]) {
                if (
                  !(
                    (RS(B) &&
                      ((Be.tagNameCheck instanceof RegExp &&
                        _n(Be.tagNameCheck, B)) ||
                        (Be.tagNameCheck instanceof Function &&
                          Be.tagNameCheck(B))) &&
                      ((Be.attributeNameCheck instanceof RegExp &&
                        _n(Be.attributeNameCheck, re)) ||
                        (Be.attributeNameCheck instanceof Function &&
                          Be.attributeNameCheck(re)))) ||
                    (re === "is" &&
                      Be.allowCustomizedBuiltInElements &&
                      ((Be.tagNameCheck instanceof RegExp &&
                        _n(Be.tagNameCheck, _e)) ||
                        (Be.tagNameCheck instanceof Function &&
                          Be.tagNameCheck(_e))))
                  )
                )
                  return !1;
              } else if (!Ms[re]) {
                if (!_n(Me, Do(_e, pe, ""))) {
                  if (
                    !(
                      (re === "src" || re === "xlink:href" || re === "href") &&
                      B !== "script" &&
                      k$(_e, "data:") === 0 &&
                      Lo[B]
                    )
                  ) {
                    if (!(he && !_n(Z, Do(_e, pe, "")))) {
                      if (_e) return !1;
                    }
                  }
                }
              }
            }
          }
          return !0;
        },
        RS = function (B) {
          return B.indexOf("-") > 0;
        },
        PS = function (B) {
          var re = void 0,
            _e = void 0,
            vt = void 0,
            On = void 0;
          lo("beforeSanitizeAttributes", B, null);
          var bn = B.attributes;
          if (!!bn) {
            var on = {
              attrName: "",
              attrValue: "",
              keepAttr: !0,
              allowedAttributes: le,
            };
            for (On = bn.length; On--; ) {
              re = bn[On];
              var iu = re,
                Cn = iu.name,
                OS = iu.namespaceURI;
              (_e = N$(re.value)), (vt = ro(Cn));
              var I4 = _e;
              if (
                ((on.attrName = vt),
                (on.attrValue = _e),
                (on.keepAttr = !0),
                (on.forceKeepAttr = void 0),
                lo("uponSanitizeAttribute", B, on),
                (_e = on.attrValue),
                !on.forceKeepAttr)
              ) {
                if (!on.keepAttr) {
                  ye(Cn, B);
                  continue;
                }
                if (_n(/\/>/i, _e)) {
                  ye(Cn, B);
                  continue;
                }
                Ae && ((_e = Do(_e, Ke, " ")), (_e = Do(_e, We, " ")));
                var $4 = ro(B.nodeName);
                if (!TS($4, vt, _e)) {
                  ye(Cn, B);
                  continue;
                }
                if (_e !== I4)
                  try {
                    OS ? B.setAttributeNS(OS, Cn, _e) : B.setAttribute(Cn, _e);
                  } catch {
                    ye(Cn, B);
                  }
              }
            }
            lo("afterSanitizeAttributes", B, null);
          }
        },
        B4 = function Oe(B) {
          var re = void 0,
            _e = He(B);
          for (lo("beforeSanitizeShadowDOM", B, null); (re = _e.nextNode()); )
            lo("uponSanitizeShadowNode", re, null),
              !AS(re) && (re.content instanceof o && Oe(re.content), PS(re));
          lo("afterSanitizeShadowDOM", B, null);
        };
      return (
        (t.sanitize = function (Oe, B) {
          var re = void 0,
            _e = void 0,
            vt = void 0,
            On = void 0,
            bn = void 0;
          if (
            ((_r = !Oe), _r && (Oe = "<!-->"), typeof Oe != "string" && !ds(Oe))
          ) {
            if (typeof Oe.toString != "function")
              throw Yd("toString is not a function");
            if (((Oe = Oe.toString()), typeof Oe != "string"))
              throw Yd("dirty is not a string, aborting");
          }
          if (!t.isSupported) {
            if (
              _a(e.toStaticHTML) === "object" ||
              typeof e.toStaticHTML == "function"
            ) {
              if (typeof Oe == "string") return e.toStaticHTML(Oe);
              if (ds(Oe)) return e.toStaticHTML(Oe.outerHTML);
            }
            return Oe;
          }
          if (
            (je || ou(B),
            (t.removed = []),
            typeof Oe == "string" && (Ft = !1),
            Ft)
          ) {
            if (Oe.nodeName) {
              var on = ro(Oe.nodeName);
              if (!De[on] || Ct[on])
                throw Yd(
                  "root node is forbidden and cannot be sanitized in-place"
                );
            }
          } else if (Oe instanceof i)
            (re = Ve("<!---->")),
              (_e = re.ownerDocument.importNode(Oe, !0)),
              (_e.nodeType === 1 && _e.nodeName === "BODY") ||
              _e.nodeName === "HTML"
                ? (re = _e)
                : re.appendChild(_e);
          else {
            if (!Le && !Ae && !Te && Oe.indexOf("<") === -1)
              return I && Qt ? I.createHTML(Oe) : Oe;
            if (((re = Ve(Oe)), !re)) return Le ? null : Qt ? $ : "";
          }
          re && ze && V(re.firstChild);
          for (var iu = He(Ft ? Oe : re); (vt = iu.nextNode()); )
            (vt.nodeType === 3 && vt === On) ||
              AS(vt) ||
              (vt.content instanceof o && B4(vt.content), PS(vt), (On = vt));
          if (((On = null), Ft)) return Oe;
          if (Le) {
            if (yt)
              for (bn = Q.call(re.ownerDocument); re.firstChild; )
                bn.appendChild(re.firstChild);
            else bn = re;
            return le.shadowroot && (bn = Ee.call(n, bn, !0)), bn;
          }
          var Cn = Te ? re.outerHTML : re.innerHTML;
          return (
            Te &&
              De["!doctype"] &&
              re.ownerDocument &&
              re.ownerDocument.doctype &&
              re.ownerDocument.doctype.name &&
              _n(F$, re.ownerDocument.doctype.name) &&
              (Cn =
                "<!DOCTYPE " +
                re.ownerDocument.doctype.name +
                `>
` +
                Cn),
            Ae && ((Cn = Do(Cn, Ke, " ")), (Cn = Do(Cn, We, " "))),
            I && Qt ? I.createHTML(Cn) : Cn
          );
        }),
        (t.setConfig = function (Oe) {
          ou(Oe), (je = !0);
        }),
        (t.clearConfig = function () {
          (io = null), (je = !1);
        }),
        (t.isValidAttribute = function (Oe, B, re) {
          io || ou({});
          var _e = ro(Oe),
            vt = ro(B);
          return TS(_e, vt, re);
        }),
        (t.addHook = function (Oe, B) {
          typeof B == "function" && ((se[Oe] = se[Oe] || []), Sa(se[Oe], B));
        }),
        (t.removeHook = function (Oe) {
          se[Oe] && S$(se[Oe]);
        }),
        (t.removeHooks = function (Oe) {
          se[Oe] && (se[Oe] = []);
        }),
        (t.removeAllHooks = function () {
          se = {};
        }),
        t
      );
    }
    var z$ = tE();
    const H$ = (e, t) => {
        T(t, (n) => {
          e.attr(n, null);
        });
      },
      V$ = (e, t, n) => {
        e.addNodeFilter("font", (s) => {
          T(s, (o) => {
            const r = t.parse(o.attr("style")),
              i = o.attr("color"),
              a = o.attr("face"),
              c = o.attr("size");
            i && (r.color = i),
              a && (r["font-family"] = a),
              c && (r["font-size"] = n[parseInt(o.attr("size"), 10) - 1]),
              (o.name = "span"),
              o.attr("style", t.serialize(r)),
              H$(o, ["color", "face", "size"]);
          });
        });
      },
      W$ = (e, t, n) => {
        e.addNodeFilter("strike", (s) => {
          const o = t.type !== "html4";
          T(s, (r) => {
            if (o) r.name = "s";
            else {
              const i = n.parse(r.attr("style"));
              (i["text-decoration"] = "line-through"),
                (r.name = "span"),
                r.attr("style", n.serialize(i));
            }
          });
        });
      },
      j$ = (e, t, n) => {
        const s = af();
        t.convert_fonts_to_spans &&
          V$(e, s, G.explode(t.font_size_legacy_values)),
          W$(e, n, s);
      },
      q$ = (e, t, n) => {
        t.inline_styles && j$(e, t, n);
      },
      K$ = (e) =>
        new Promise((t, n) => {
          const s = () => {
            n(
              "Cannot convert " +
                e +
                " to Blob. Resource might not exist or is inaccessible."
            );
          };
          try {
            const o = new XMLHttpRequest();
            o.open("GET", e, !0),
              (o.responseType = "blob"),
              (o.onload = () => {
                o.status === 200 ? t(o.response) : s();
              }),
              (o.onerror = s),
              o.send();
          } catch {
            s();
          }
        }),
      mc = (e) => {
        let t;
        const n = decodeURIComponent(e).split(","),
          s = /data:([^;]+)/.exec(n[0]);
        return s && (t = s[1]), { type: t, data: n[1] };
      },
      nE = (e, t) => {
        let n;
        try {
          n = atob(t);
        } catch {
          return g.none();
        }
        const s = new Uint8Array(n.length);
        for (let o = 0; o < s.length; o++) s[o] = n.charCodeAt(o);
        return g.some(new Blob([s], { type: e }));
      },
      G$ = (e) =>
        new Promise((t) => {
          const { type: n, data: s } = mc(e);
          nE(n, s).fold(() => t(new Blob([])), t);
        }),
      sE = (e) =>
        e.indexOf("blob:") === 0
          ? K$(e)
          : e.indexOf("data:") === 0
          ? G$(e)
          : null,
      oE = (e) =>
        new Promise((t) => {
          const n = new FileReader();
          (n.onloadend = () => {
            t(n.result);
          }),
            n.readAsDataURL(e);
        });
    let Y$ = 0;
    const em = (e) => (e || "blobid") + Y$++,
      X$ = (e, t, n, s) => {
        let o, r;
        if (t.src.indexOf("blob:") === 0) {
          (r = e.getByUri(t.src)),
            r
              ? n({ image: t, blobInfo: r })
              : sE(t.src).then(
                  (c) => {
                    oE(c).then((f) => {
                      (o = mc(f).data),
                        (r = e.create(em(), c, o)),
                        e.add(r),
                        n({ image: t, blobInfo: r });
                    });
                  },
                  (c) => {
                    s(c);
                  }
                );
          return;
        }
        const { data: i, type: a } = mc(t.src);
        (o = i),
          (r = e.getByData(o, a)),
          r
            ? n({ image: t, blobInfo: r })
            : sE(t.src).then(
                (c) => {
                  (r = e.create(em(), c, o)),
                    e.add(r),
                    n({ image: t, blobInfo: r });
                },
                (c) => {
                  s(c);
                }
              );
      },
      Q$ = (e) => (e ? pt(e.getElementsByTagName("img")) : []),
      Z$ = (e, t) => {
        const n = {};
        return {
          findAll: (o, r) => {
            r || (r = rt);
            const i = H(Q$(o), (c) => {
                const f = c.src;
                return c.hasAttribute("data-mce-bogus") ||
                  c.hasAttribute("data-mce-placeholder") ||
                  !f ||
                  f === et.transparentSrc
                  ? !1
                  : f.indexOf("blob:") === 0
                  ? !e.isUploaded(f) && r(c)
                  : f.indexOf("data:") === 0
                  ? r(c)
                  : !1;
              }),
              a = U(i, (c) => {
                if (n[c.src] !== void 0)
                  return new Promise((d) => {
                    n[c.src].then((p) => {
                      if (typeof p == "string") return p;
                      d({ image: c, blobInfo: p.blobInfo });
                    });
                  });
                const f = new Promise((d, p) => {
                  X$(t, c, d, p);
                })
                  .then((d) => (delete n[d.image.src], d))
                  .catch((d) => (delete n[c.src], d));
                return (n[c.src] = f), f;
              });
            return Promise.all(a);
          },
        };
      },
      J$ = (e) => {
        const t = /data:([^;]+);base64,([a-z0-9\+\/=\s]+)/i.exec(e);
        return t
          ? g.some({ type: t[1], data: decodeURIComponent(t[2]) })
          : g.none();
      },
      eL = (e) => ke(e.attr("data-mce-bogus")),
      tL = (e) =>
        e.attr("src") === et.transparentSrc ||
        ke(e.attr("data-mce-placeholder")),
      nL = (e, t) => {
        const { blob_cache: n } = t,
          s = (o) => {
            const r = o.attr("src");
            tL(o) ||
              eL(o) ||
              J$(r)
                .bind(({ type: i, data: a }) =>
                  g.from(n.getByData(a, i)).orThunk(() =>
                    nE(i, a).map((c) => {
                      const f = n.create(em(), c, a);
                      return n.add(f), f;
                    })
                  )
                )
                .each((i) => {
                  o.attr("src", i.blobUri());
                });
          };
        n && e.addAttributeFilter("src", (o) => T(o, s));
      },
      sL = (e, t) => {
        const n = e.schema;
        t.remove_trailing_brs &&
          e.addNodeFilter("br", (s, o, r) => {
            const i = G.extend({}, n.getBlockElements()),
              a = n.getNonEmptyElements(),
              c = n.getWhitespaceElements();
            i.body = 1;
            for (let f = 0, d = s.length; f < d; f++) {
              let p = s[f],
                C = p.parent;
              if (i[p.parent.name] && p === C.lastChild) {
                let b = p.prev;
                for (; b; ) {
                  const x = b.name;
                  if (x !== "span" || b.attr("data-mce-type") !== "bookmark") {
                    x === "br" && (p = null);
                    break;
                  }
                  b = b.prev;
                }
                if (p && (p.remove(), sc(n, a, c, C))) {
                  const x = n.getElementRule(C.name);
                  x &&
                    (x.removeEmpty
                      ? C.remove()
                      : x.paddEmpty && Cv(t, r, i, C));
                }
              } else {
                let b = p;
                for (
                  ;
                  C &&
                  C.firstChild === b &&
                  C.lastChild === b &&
                  ((b = C), !i[C.name]);

                )
                  C = C.parent;
                if (b === C) {
                  const x = new pn("#text", 3);
                  (x.value = Xt), p.replace(x);
                }
              }
            }
          }),
          e.addAttributeFilter("href", (s) => {
            let o = s.length;
            const r = (a) =>
                a
                  .split(" ")
                  .filter((f) => f.length > 0)
                  .concat(["noopener"])
                  .sort()
                  .join(" "),
              i = (a) => {
                const c = a ? G.trim(a) : "";
                return /\b(noopener)\b/g.test(c) ? c : r(c);
              };
            if (!t.allow_unsafe_link_target)
              for (; o--; ) {
                const a = s[o];
                a.name === "a" &&
                  a.attr("target") === "_blank" &&
                  a.attr("rel", i(a.attr("rel")));
              }
          }),
          t.allow_html_in_named_anchor ||
            e.addAttributeFilter("id,name", (s) => {
              let o = s.length,
                r,
                i,
                a,
                c;
              for (; o--; )
                if (
                  ((c = s[o]),
                  c.name === "a" && c.firstChild && !c.attr("href"))
                ) {
                  (a = c.parent), (r = c.lastChild);
                  do (i = r.prev), a.insert(r, c), (r = i);
                  while (r);
                }
            }),
          t.fix_list_elements &&
            e.addNodeFilter("ul,ol", (s) => {
              let o = s.length,
                r,
                i;
              for (; o--; )
                if (
                  ((r = s[o]),
                  (i = r.parent),
                  i.name === "ul" || i.name === "ol")
                )
                  if (r.prev && r.prev.name === "li") r.prev.append(r);
                  else {
                    const a = new pn("li", 1);
                    a.attr("style", "list-style-type: none"), r.wrap(a);
                  }
            }),
          t.validate &&
            n.getValidClasses() &&
            e.addAttributeFilter("class", (s) => {
              const o = n.getValidClasses();
              let r = s.length;
              for (; r--; ) {
                const i = s[r],
                  a = i.attr("class").split(" ");
                let c = "";
                for (let f = 0; f < a.length; f++) {
                  const d = a[f];
                  let p = !1,
                    C = o["*"];
                  C && C[d] && (p = !0),
                    (C = o[i.name]),
                    !p && C && C[d] && (p = !0),
                    p && (c && (c += " "), (c += d));
                }
                c.length || (c = null), i.attr("class", c);
              }
            }),
          nL(e, t);
      },
      rE = G.each,
      oL = G.trim,
      rL =
        "source protocol authority userInfo user password host port relative path directory file query anchor".split(
          " "
        ),
      iL = { ftp: 21, http: 80, https: 443, mailto: 25 },
      aL = ["img", "video"],
      lL = (e, t) => (ke(e) ? !e : ke(t) ? !R(aL, t) : !0),
      cL = (e) => {
        try {
          return decodeURIComponent(e);
        } catch {
          return unescape(e);
        }
      },
      iE = (e, t, n) => {
        const s = cL(t);
        return e.allow_script_urls
          ? !1
          : /((java|vb)script|mhtml):/i.test(s)
          ? !0
          : e.allow_html_data_urls
          ? !1
          : /^data:image\//i.test(s)
          ? lL(e.allow_svg_data_urls, n) && /^data:image\/svg\+xml/i.test(s)
          : /^data:/i.test(s);
      };
    class rs {
      constructor(t, n) {
        (t = oL(t)), (this.settings = n || {});
        const s = this.settings.base_uri,
          o = this;
        if (/^([\w\-]+):([^\/]{2})/i.test(t) || /^\s*#/.test(t)) {
          o.source = t;
          return;
        }
        const r = t.indexOf("//") === 0;
        if (
          (t.indexOf("/") === 0 &&
            !r &&
            (t = ((s && s.protocol) || "http") + "://mce_host" + t),
          !/^[\w\-]*:?\/\//.test(t))
        ) {
          const a = this.settings.base_uri
            ? this.settings.base_uri.path
            : new rs(document.location.href).directory;
          if (this.settings.base_uri && this.settings.base_uri.protocol == "")
            t = "//mce_host" + o.toAbsPath(a, t);
          else {
            const c = /([^#?]*)([#?]?.*)/.exec(t);
            t =
              ((s && s.protocol) || "http") +
              "://mce_host" +
              o.toAbsPath(a, c[1]) +
              c[2];
          }
        }
        t = t.replace(/@@/g, "(mce_at)");
        const i =
          /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
            t
          );
        rE(rL, (a, c) => {
          let f = i[c];
          f && (f = f.replace(/\(mce_at\)/g, "@@")), (o[a] = f);
        }),
          s &&
            (o.protocol || (o.protocol = s.protocol),
            o.userInfo || (o.userInfo = s.userInfo),
            !o.port && o.host === "mce_host" && (o.port = s.port),
            (!o.host || o.host === "mce_host") && (o.host = s.host),
            (o.source = "")),
          r && (o.protocol = "");
      }
      static parseDataUri(t) {
        let n;
        const s = decodeURIComponent(t).split(","),
          o = /data:([^;]+)/.exec(s[0]);
        return o && (n = o[1]), { type: n, data: s[1] };
      }
      static isDomSafe(t, n, s = {}) {
        if (s.allow_script_urls) return !0;
        {
          const o = So.decode(t).replace(/[\s\u0000-\u001F]+/g, "");
          return !iE(s, o, n);
        }
      }
      static getDocumentBaseUrl(t) {
        let n;
        return (
          t.protocol.indexOf("http") !== 0 && t.protocol !== "file:"
            ? (n = t.href)
            : (n = t.protocol + "//" + t.host + t.pathname),
          /^[^:]+:\/\/\/?[^\/]+\//.test(n) &&
            ((n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
            /[\/\\]$/.test(n) || (n += "/")),
          n
        );
      }
      setPath(t) {
        const n = /^(.*?)\/?(\w+)?$/.exec(t);
        (this.path = n[0]),
          (this.directory = n[1]),
          (this.file = n[2]),
          (this.source = ""),
          this.getURI();
      }
      toRelative(t) {
        let n;
        if (t === "./") return t;
        const s = new rs(t, { base_uri: this });
        if (
          (s.host !== "mce_host" && this.host !== s.host && s.host) ||
          this.port !== s.port ||
          (this.protocol !== s.protocol && s.protocol !== "")
        )
          return s.getURI();
        const o = this.getURI(),
          r = s.getURI();
        return o === r ||
          (o.charAt(o.length - 1) === "/" && o.substr(0, o.length - 1) === r)
          ? o
          : ((n = this.toRelPath(this.path, s.path)),
            s.query && (n += "?" + s.query),
            s.anchor && (n += "#" + s.anchor),
            n);
      }
      toAbsolute(t, n) {
        const s = new rs(t, { base_uri: this });
        return s.getURI(n && this.isSameOrigin(s));
      }
      isSameOrigin(t) {
        if (this.host == t.host && this.protocol == t.protocol) {
          if (this.port == t.port) return !0;
          const n = iL[this.protocol];
          if (n && (this.port || n) == (t.port || n)) return !0;
        }
        return !1;
      }
      toRelPath(t, n) {
        let s = 0,
          o = "",
          r,
          i;
        const a = t.substring(0, t.lastIndexOf("/")).split("/"),
          c = n.split("/");
        if (a.length >= c.length) {
          for (r = 0, i = a.length; r < i; r++)
            if (r >= c.length || a[r] !== c[r]) {
              s = r + 1;
              break;
            }
        }
        if (a.length < c.length) {
          for (r = 0, i = c.length; r < i; r++)
            if (r >= a.length || a[r] !== c[r]) {
              s = r + 1;
              break;
            }
        }
        if (s === 1) return n;
        for (r = 0, i = a.length - (s - 1); r < i; r++) o += "../";
        for (r = s - 1, i = c.length; r < i; r++)
          r !== s - 1 ? (o += "/" + c[r]) : (o += c[r]);
        return o;
      }
      toAbsPath(t, n) {
        let s,
          o = 0,
          r = [],
          i;
        const a = /\/$/.test(n) ? "/" : "";
        let c = t.split("/");
        const f = n.split("/");
        for (
          rE(c, (d) => {
            d && r.push(d);
          }),
            c = r,
            s = f.length - 1,
            r = [];
          s >= 0;
          s--
        )
          if (!(f[s].length === 0 || f[s] === ".")) {
            if (f[s] === "..") {
              o++;
              continue;
            }
            if (o > 0) {
              o--;
              continue;
            }
            r.push(f[s]);
          }
        return (
          (s = c.length - o),
          s <= 0
            ? (i = nt(r).join("/"))
            : (i = c.slice(0, s).join("/") + "/" + nt(r).join("/")),
          i.indexOf("/") !== 0 && (i = "/" + i),
          a && i.lastIndexOf("/") !== i.length - 1 && (i += a),
          i
        );
      }
      getURI(t = !1) {
        let n;
        return (
          (!this.source || t) &&
            ((n = ""),
            t ||
              (this.protocol ? (n += this.protocol + "://") : (n += "//"),
              this.userInfo && (n += this.userInfo + "@"),
              this.host && (n += this.host),
              this.port && (n += ":" + this.port)),
            this.path && (n += this.path),
            this.query && (n += "?" + this.query),
            this.anchor && (n += "#" + this.anchor),
            (this.source = n)),
          this.source
        );
      }
    }
    const aE = G.makeMap,
      lE = G.each,
      cE = G.explode,
      uE = G.extend,
      uL = {
        IN_PLACE: !0,
        ALLOW_UNKNOWN_PROTOCOLS: !0,
        ALLOWED_TAGS: ["#comment", "#cdata-section", "body"],
        ALLOWED_ATTR: [],
      },
      fL = G.makeMap(
        "src,href,data,background,action,formaction,poster,xlink:href"
      ),
      tm = "data-mce-type",
      dL = (e, t) => {
        const n = Se({}, uL);
        return (
          (n.PARSER_MEDIA_TYPE = t),
          e.allow_script_urls
            ? (n.ALLOWED_URI_REGEXP = /.*/)
            : e.allow_html_data_urls &&
              (n.ALLOWED_URI_REGEXP = /^(?!(\w+script|mhtml):)/i),
          n
        );
      },
      mL = (e, t) => {
        const n = z$(),
          s = e.validate;
        let o = 0;
        return (
          n.addHook("uponSanitizeElement", (r, i) => {
            var a, c;
            r.nodeType === jg &&
              !e.allow_conditional_comments &&
              /^\[if/i.test(r.nodeValue) &&
              (r.nodeValue = " " + r.nodeValue);
            const f = i.tagName;
            if (r.nodeType !== Ui || f === "body") return;
            const d = S.fromDom(r),
              p = rl(d, tm),
              C = $n(d, "data-mce-bogus");
            if (!p && be(C)) {
              C === "all" ? At(d) : Eo(d);
              return;
            }
            const b = t.getElementRule(f.toLowerCase());
            if (s && !b) {
              Eo(d);
              return;
            } else i.allowedTags[f] = !0;
            if (s && !p) {
              if (
                (T(
                  (a = b.attributesForced) !== null && a !== void 0 ? a : [],
                  (x) => {
                    fn(
                      d,
                      x.name,
                      x.value === "{$uid}" ? `mce_${o++}` : x.value
                    );
                  }
                ),
                T(
                  (c = b.attributesDefault) !== null && c !== void 0 ? c : [],
                  (x) => {
                    rl(d, x.name) ||
                      fn(
                        d,
                        x.name,
                        x.value === "{$uid}" ? `mce_${o++}` : x.value
                      );
                  }
                ),
                b.attributesRequired &&
                  !M(b.attributesRequired, (x) => rl(d, x)))
              ) {
                Eo(d);
                return;
              }
              if (b.removeEmptyAttrs && Wk(d)) {
                Eo(d);
                return;
              }
              b.outputName &&
                b.outputName !== f.toLowerCase() &&
                oT(d, b.outputName);
            }
          }),
          n.addHook("uponSanitizeAttribute", (r, i) => {
            const a = r.tagName.toLowerCase(),
              { attrName: c, attrValue: f } = i;
            (i.keepAttr =
              !s || t.isValid(a, c) || qn(c, "data-") || qn(c, "aria-")),
              c in fL && iE(e, f, a) && (i.keepAttr = !1),
              i.keepAttr
                ? ((i.allowedAttributes[c] = !0),
                  c in t.getBoolAttrs() && (i.attrValue = c),
                  e.allow_svg_data_urls &&
                    qn(f, "data:image/svg+xml") &&
                    (i.forceKeepAttr = !0))
                : r.hasAttribute(tm) &&
                  (c === "id" || c === "class" || c === "style") &&
                  (i.forceKeepAttr = !0);
          }),
          n
        );
      },
      fE = (e, t, n) => {
        const s = e.name,
          o = s in n && s !== "title" && s !== "textarea",
          r = t.childNodes;
        for (let i = 0, a = r.length; i < a; i++) {
          const c = r[i],
            f = new pn(c.nodeName.toLowerCase(), c.nodeType);
          if (ve(c)) {
            const d = c.attributes;
            for (let p = 0, C = d.length; p < C; p++) {
              const b = d[p];
              f.attr(b.name, b.value);
            }
          } else
            ne(c)
              ? ((f.value = c.data), o && (f.raw = !0))
              : (Ah(c) || NN(c) || AN(c)) && (f.value = c.data);
          fE(f, c, n), e.append(f);
        }
      },
      pL = (e, t, n) => {
        const s = [];
        for (let o = e, r = o; ke(o); r = o, o = o.walk())
          T(t, (i) => i(o)), Mt(o.parent) && o !== e ? (o = r) : s.push(o);
        for (let o = s.length - 1; o >= 0; o--) {
          const r = s[o];
          T(n, (i) => i(r));
        }
      },
      gL = (e, t, n, s) => {
        const o = n.validate,
          r = t.getNonEmptyElements(),
          i = t.getWhitespaceElements(),
          a = uE(
            aE("script,style,head,html,body,title,meta,param"),
            t.getBlockElements()
          ),
          c = /[ \t\r\n]+/g,
          f = /^[ \t\r\n]+/,
          d = /[ \t\r\n]+$/,
          p = (y) => {
            for (y = y.parent; ke(y); ) {
              if (y.name in i) return !0;
              y = y.parent;
            }
            return !1;
          },
          C = (y, E) => {
            const _ = E ? y.prev : y.next;
            return ke(_)
              ? !1
              : y.parent.name in a && (y.parent !== e || s.isRootContent);
          };
        return [
          (y) => {
            if (y.type === 3 && !p(y)) {
              let E = y.value;
              (E = E.replace(c, " ")),
                (KB(y.prev, a) || C(y, !0)) && (E = E.replace(f, "")),
                E.length === 0 ? y.remove() : (y.value = E);
            }
          },
          (y) => {
            var E;
            if (y.type === 1) {
              const _ = t.getElementRule(y.name);
              if (o && _) {
                const P = sc(t, r, i, y);
                _.removeEmpty && P
                  ? a[y.name]
                    ? y.remove()
                    : y.unwrap()
                  : _.paddEmpty && (P || jB(y)) && Cv(n, s, a, y);
              }
            } else if (y.type === 3 && !p(y)) {
              let _ = y.value;
              (a[(E = y.next) === null || E === void 0 ? void 0 : E.name] ||
                C(y, !1)) &&
                (_ = _.replace(d, "")),
                _.length === 0 ? y.remove() : (y.value = _);
            }
          },
        ];
      },
      hL = (e, t) => {
        var n;
        const s =
          (n = t.forced_root_block) !== null && n !== void 0
            ? n
            : e.forced_root_block;
        return s === !1 ? "" : s === !0 ? "p" : s;
      },
      di = (e = {}, t = ko()) => {
        const n = {},
          s = [],
          o = Se({ validate: !0, root_name: "body" }, e),
          r = new DOMParser(),
          i = mL(o, t),
          a = (E, _, P = "html") => {
            const z = P === "xhtml" ? "application/xhtml+xml" : "text/html",
              I = Fe(t.getSpecialElements(), _.toLowerCase()),
              $ = I ? `<${_}>${E}</${_}>` : E,
              te =
                P === "xhtml"
                  ? `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>${$}</body></html>`
                  : `<body>${$}</body>`,
              W = r.parseFromString(te, z).body;
            return (
              i.sanitize(W, dL(o, z)), (i.removed = []), I ? W.firstChild : W
            );
          },
          c = (E, _) => {
            lE(cE(E), (P) => {
              let z = n[P];
              z || (n[P] = z = []), z.push(_);
            });
          },
          f = () => {
            const E = [];
            for (const _ in n) Fe(n, _) && E.push({ name: _, callbacks: n[_] });
            return E;
          },
          d = (E, _) => {
            lE(cE(E), (P) => {
              let z;
              for (z = 0; z < s.length; z++)
                if (s[z].name === P) {
                  s[z].callbacks.push(_);
                  return;
                }
              s.push({ name: P, callbacks: [_] });
            });
          },
          p = () => [].concat(s),
          C = (E, _) => {
            const P = E.parent;
            P &&
              t.children[E.name] &&
              !t.isValidChild(P.name, E.name) &&
              _.push(E);
          },
          b = (E, _) => {
            const P = uE(
                aE("script,style,head,html,body,title,meta,param"),
                t.getBlockElements()
              ),
              z = /^[ \t\r\n]+/,
              I = /[ \t\r\n]+$/;
            let $ = E.firstChild,
              te = null;
            const W = (q) => {
              q &&
                (($ = q.firstChild),
                $ && $.type === 3 && ($.value = $.value.replace(z, "")),
                ($ = q.lastChild),
                $ && $.type === 3 && ($.value = $.value.replace(I, "")));
            };
            if (!!t.isValidChild(E.name, _.toLowerCase())) {
              for (; $; ) {
                const q = $.next;
                $.type === 3 ||
                ($.type === 1 && $.name !== "p" && !P[$.name] && !$.attr(tm))
                  ? (te ||
                      ((te = new pn(_, 1)),
                      te.attr(o.forced_root_block_attrs),
                      E.insert(te, $)),
                    te.append($))
                  : (W(te), (te = null)),
                  ($ = q);
              }
              W(te);
            }
          },
          y = {
            schema: t,
            addAttributeFilter: d,
            getAttributeFilters: p,
            addNodeFilter: c,
            getNodeFilters: f,
            parse: (E, _ = {}) => {
              var P;
              const z = o.validate,
                I = (P = _.context) !== null && P !== void 0 ? P : o.root_name,
                $ = a(E, I, _.format),
                te = new pn(I, 11);
              fE(te, $, t.getSpecialElements());
              const [W, q] = gL(te, t, o, _),
                Q = [],
                J = z ? (We) => C(We, Q) : Ie,
                Ee = f(),
                ae = { nodes: {}, attributes: {} },
                se = (We) => gv(Ee, s, We, ae);
              if ((pL(te, [W, se], [q, J]), Q.reverse(), z && Q.length > 0))
                if (_.context) {
                  const { pass: We, fail: lt } = Ce(
                    Q,
                    (qt) => qt.parent === te
                  );
                  Pd(lt, t, se), (_.invalid = We.length > 0);
                } else Pd(Q, t, se);
              const Ke = hL(o, _);
              return (
                Ke && (te.name === "body" || _.isRootContent) && b(te, Ke),
                _.invalid || hv(ae, _),
                te
              );
            },
          };
        return sL(y, o), q$(y, o, t), y;
      },
      bL = (e) => (oc(e) ? Po({ validate: !1 }).serialize(e) : e),
      dE = (e, t) => {
        const n = bL(e),
          s = t(n);
        if (s.isDefaultPrevented()) return s;
        if (oc(e))
          if (s.content !== n) {
            const o = di({ validate: !1, forced_root_block: !1 }).parse(
              s.content,
              { context: e.name }
            );
            return ct(Se({}, s), { content: o });
          } else return ct(Se({}, s), { content: e });
        else return s;
      },
      mE = (e, t) => {
        if (t.no_events) return dn.value(t);
        {
          const n = _P(e, t);
          return n.isDefaultPrevented()
            ? dn.error(XC(e, Se({ content: "" }, n)).content)
            : dn.value(n);
        }
      },
      pE = (e, t, n) =>
        n.no_events
          ? t
          : dE(t, (o) => XC(e, ct(Se({}, n), { content: o }))).content,
      nm = (e, t) => {
        if (t.no_events) return dn.value(t);
        {
          const n = dE(t.content, (s) => SP(e, ct(Se({}, t), { content: s })));
          return n.isDefaultPrevented()
            ? (YC(e, n), dn.error(void 0))
            : dn.value(n);
        }
      },
      sm = (e, t, n) => {
        n.no_events || YC(e, ct(Se({}, n), { content: t }));
      },
      om = (e, t, n) => ({ element: e, width: t, rows: n }),
      gE = (e, t) => ({ element: e, cells: t }),
      CL = (e, t) => ({ x: e, y: t }),
      hE = (e, t) => {
        const n = parseInt($n(e, t), 10);
        return isNaN(n) ? 1 : n;
      },
      yL = (e, t, n, s, o) => {
        const r = hE(o, "rowspan"),
          i = hE(o, "colspan"),
          a = e.rows;
        for (let c = n; c < n + r; c++) {
          a[c] || (a[c] = gE(ab(s), []));
          for (let f = t; f < t + i; f++) {
            const d = a[c].cells;
            d[f] = c === n && f === t ? o : Zr(o);
          }
        }
      },
      vL = (e, t, n) => {
        const s = e.rows;
        return !!(s[n] ? s[n].cells : [])[t];
      },
      EL = (e, t, n) => {
        for (; vL(e, t, n); ) t++;
        return t;
      },
      bE = (e) => X(e, (t, n) => (n.cells.length > t ? n.cells.length : t), 0),
      CE = (e, t) => {
        const n = e.rows;
        for (let s = 0; s < n.length; s++) {
          const o = n[s].cells;
          for (let r = 0; r < o.length; r++)
            if (tt(o[r], t)) return g.some(CL(r, s));
        }
        return g.none();
      },
      yE = (e, t, n, s, o) => {
        const r = [],
          i = e.rows;
        for (let a = n; a <= o; a++) {
          const c = i[a].cells,
            f = t < s ? c.slice(t, s + 1) : c.slice(s, t + 1);
          r.push(gE(i[a].element, f));
        }
        return r;
      },
      xL = (e, t, n) => {
        const s = t.x,
          o = t.y,
          r = n.x,
          i = n.y,
          a = o < i ? yE(e, s, o, r, i) : yE(e, s, i, r, o);
        return om(e.element, bE(a), a);
      },
      wL = (e, t) => {
        const n = Zr(e.element),
          s = S.fromTag("tbody");
        return Xo(s, t), It(n, s), n;
      },
      SL = (e) =>
        U(e.rows, (t) => {
          const n = U(t.cells, (o) => {
              const r = ab(o);
              return Gn(r, "colspan"), Gn(r, "rowspan"), r;
            }),
            s = Zr(t.element);
          return Xo(s, n), s;
        }),
      _L = (e) => {
        const t = om(Zr(e), 0, []);
        return (
          T(xn(e, "tr"), (n, s) => {
            T(xn(n, "td,th"), (o, r) => {
              yL(t, EL(t, r, s), s, n, o);
            });
          }),
          om(t.element, bE(t.rows), t.rows)
        );
      },
      kL = (e) => wL(e, SL(e)),
      NL = (e, t, n) => CE(e, t).bind((s) => CE(e, n).map((o) => xL(e, s, o))),
      AL = (e) => de(e, (t) => bt(t) === "ul" || bt(t) === "ol"),
      TL = (e, t) =>
        de(e, (n) => bt(n) === "li" && Wf(n, t)).fold(K([]), (n) =>
          AL(e)
            .map((s) => {
              const o = S.fromTag(bt(s)),
                r = Li(bh(s), (i, a) => qn(a, "list-style"));
              return al(o, r), [S.fromTag("li"), o];
            })
            .getOr([])
        ),
      RL = (e, t) => {
        const n = X(t, (s, o) => (It(o, s), o), e);
        return t.length > 0 ? Zf([n]) : n;
      },
      PL = (e) =>
        Xi(e)
          ? Yn(e)
              .filter(Xu)
              .fold(K([]), (t) => [e, t])
          : Xu(e)
          ? [e]
          : [],
      OL = (e, t) => {
        const n = S.fromDom(t.commonAncestorContainer),
          s = no(n, e),
          o = H(s, (a) => Yu(a) || VN(a)),
          r = TL(s, t),
          i = o.concat(r.length ? r : PL(n));
        return U(i, Zr);
      },
      vE = () => Zf([]),
      DL = (e, t) => RL(S.fromDom(t.cloneContents()), OL(e, t)),
      BL = (e, t) => Gi(t, "table", oe(tt, e)),
      IL = (e, t) =>
        BL(e, t[0])
          .bind((n) => {
            const s = t[0],
              o = t[t.length - 1],
              r = _L(n);
            return NL(r, s, o).map((i) => Zf([kL(i)]));
          })
          .getOrThunk(vE),
      $L = (e, t) => (t.length > 0 && t[0].collapsed ? vE() : DL(e, t[0])),
      LL = (e, t) => {
        const n = UC(t, e);
        return n.length > 0 ? IL(e, n) : $L(e, t);
      },
      pc = (e, t) => t >= 0 && t < e.length && da(e.charAt(t)),
      EE = (e) => wo(e.innerText),
      FL = (e) =>
        e
          .map((t) => t.nodeName)
          .getOr("div")
          .toLowerCase(),
      ML = (e) =>
        g
          .from(e.selection.getRng())
          .map((t) => {
            const n = g.from(
                e.dom.getParent(t.commonAncestorContainer, e.dom.isBlock)
              ),
              s = e.getBody(),
              o = FL(n),
              r = e.dom.add(
                s,
                o,
                {
                  "data-mce-bogus": "all",
                  style: "overflow: hidden; opacity: 0;",
                },
                t.cloneContents()
              ),
              i = EE(r),
              a = wo(r.textContent);
            if ((e.dom.remove(r), pc(a, 0) || pc(a, a.length - 1))) {
              const c = n.getOr(s),
                f = EE(c),
                d = f.indexOf(i);
              if (d === -1) return i;
              {
                const p = pc(f, d - 1),
                  C = pc(f, d + i.length);
                return (p ? " " : "") + i + (C ? " " : "");
              }
            } else return i;
          })
          .getOr(""),
      UL = (e, t) => {
        const n = e.selection.getRng(),
          s = e.dom.create("body"),
          o = e.selection.getSel(),
          r = ud(e, Hf(o)),
          i = t.contextual
            ? LL(S.fromDom(e.getBody()), r).dom
            : n.cloneContents();
        return i && s.appendChild(i), e.selection.serializer.serialize(s, t);
      },
      zL = (e, t) => {
        if (t.format === "text") return ML(e);
        {
          const n = UL(e, t);
          return t.format === "tree" ? n : e.selection.isCollapsed() ? "" : n;
        }
      },
      HL = (e, t) =>
        ct(Se({}, e), { format: t, get: !0, selection: !0, getInner: !0 }),
      VL = (e, t, n = {}) => {
        const s = HL(n, t);
        return mE(e, s).fold(xt, (o) => {
          const r = zL(e, o);
          return pE(e, r, o);
        });
      },
      rm = 0,
      xE = 1,
      wE = 2,
      WL = (e, t) => {
        const n = e.length + t.length + 2,
          s = new Array(n),
          o = new Array(n),
          r = (d, p, C) => ({ start: d, end: p, diag: C }),
          i = (d, p, C, b, x) => {
            const y = c(d, p, C, b);
            if (
              y === null ||
              (y.start === p && y.diag === p - b) ||
              (y.end === d && y.diag === d - C)
            ) {
              let E = d,
                _ = C;
              for (; E < p || _ < b; )
                E < p && _ < b && e[E] === t[_]
                  ? (x.push([rm, e[E]]), ++E, ++_)
                  : p - d > b - C
                  ? (x.push([wE, e[E]]), ++E)
                  : (x.push([xE, t[_]]), ++_);
            } else {
              i(d, y.start, C, y.start - y.diag, x);
              for (let E = y.start; E < y.end; ++E) x.push([rm, e[E]]);
              i(y.end, p, y.end - y.diag, b, x);
            }
          },
          a = (d, p, C, b) => {
            let x = d;
            for (; x - p < b && x < C && e[x] === t[x - p]; ) ++x;
            return r(d, x, p);
          },
          c = (d, p, C, b) => {
            const x = p - d,
              y = b - C;
            if (x === 0 || y === 0) return null;
            const E = x - y,
              _ = y + x,
              P = (_ % 2 === 0 ? _ : _ + 1) / 2;
            (s[1 + P] = d), (o[1 + P] = p + 1);
            let z, I, $, te, W;
            for (z = 0; z <= P; ++z) {
              for (I = -z; I <= z; I += 2) {
                for (
                  $ = I + P,
                    I === -z || (I !== z && s[$ - 1] < s[$ + 1])
                      ? (s[$] = s[$ + 1])
                      : (s[$] = s[$ - 1] + 1),
                    te = s[$],
                    W = te - d + C - I;
                  te < p && W < b && e[te] === t[W];

                )
                  (s[$] = ++te), ++W;
                if (E % 2 !== 0 && E - z <= I && I <= E + z && o[$ - E] <= s[$])
                  return a(o[$ - E], I + d - C, p, b);
              }
              for (I = E - z; I <= E + z; I += 2) {
                for (
                  $ = I + P - E,
                    I === E - z || (I !== E + z && o[$ + 1] <= o[$ - 1])
                      ? (o[$] = o[$ + 1] - 1)
                      : (o[$] = o[$ - 1]),
                    te = o[$] - 1,
                    W = te - d + C - I;
                  te >= d && W >= C && e[te] === t[W];

                )
                  (o[$] = te--), W--;
                if (E % 2 === 0 && -z <= I && I <= z && o[$] <= s[$ + E])
                  return a(o[$], I + d - C, p, b);
              }
            }
          },
          f = [];
        return i(0, e.length, 0, t.length, f), f;
      },
      SE = (e) =>
        ve(e)
          ? e.outerHTML
          : ne(e)
          ? So.encodeRaw(e.data, !1)
          : Ah(e)
          ? "<!--" + e.data + "-->"
          : "",
      jL = (e) => {
        let t;
        const n = document.createElement("div"),
          s = document.createDocumentFragment();
        for (e && (n.innerHTML = e); (t = n.firstChild); ) s.appendChild(t);
        return s;
      },
      qL = (e, t, n) => {
        const s = jL(t);
        if (e.hasChildNodes() && n < e.childNodes.length) {
          const o = e.childNodes[n];
          o.parentNode.insertBefore(s, o);
        } else e.appendChild(s);
      },
      KL = (e, t) => {
        if (e.hasChildNodes() && t < e.childNodes.length) {
          const n = e.childNodes[t];
          n.parentNode.removeChild(n);
        }
      },
      GL = (e, t) => {
        let n = 0;
        T(e, (s) => {
          s[0] === rm
            ? n++
            : s[0] === xE
            ? (qL(t, s[1], n), n++)
            : s[0] === wE && KL(t, n);
        });
      },
      YL = (e) => H(U(pt(e.childNodes), SE), (t) => t.length > 0),
      XL = (e, t) => {
        const n = U(pt(t.childNodes), SE);
        return GL(WL(n, e), t), t;
      },
      QL = qo(() => document.implementation.createHTMLDocument("undo")),
      ZL = (e) => e.indexOf("</iframe>") !== -1,
      JL = (e) => ({
        type: "fragmented",
        fragments: e,
        content: "",
        bookmark: null,
        beforeBookmark: null,
      }),
      eF = (e) => ({
        type: "complete",
        fragments: null,
        content: e,
        bookmark: null,
        beforeBookmark: null,
      }),
      im = (e) => {
        const t = YL(e.getBody()),
          n = qe(t, (o) => {
            const r = Oy(e.serializer, o);
            return r.length > 0 ? [r] : [];
          }),
          s = n.join("");
        return ZL(s) ? JL(n) : eF(s);
      },
      am = (e, t, n) => {
        const s = n ? t.beforeBookmark : t.bookmark;
        t.type === "fragmented"
          ? XL(t.fragments, e.getBody())
          : e.setContent(t.content, {
              format: "raw",
              no_selection: ke(s) && EC(s) ? !s.isFakeCaret : !0,
            }),
          e.selection.moveToBookmark(s);
      },
      lm = (e) => (e.type === "fragmented" ? e.fragments.join("") : e.content),
      _E = (e) => {
        const t = S.fromTag("body", QL());
        return Vu(t, lm(e)), T(xn(t, "*[data-mce-bogus]"), Eo), vh(t);
      },
      tF = (e, t) => lm(e) === lm(t),
      nF = (e, t) => _E(e) === _E(t),
      gc = (e, t) => (!e || !t ? !1 : tF(e, t) ? !0 : nF(e, t)),
      cm = (e) => e.get() === 0,
      hc = (e, t, n) => {
        cm(n) && (e.typing = t);
      },
      kE = (e, t) => {
        e.typing && (hc(e, !1, t), e.add());
      },
      sF = (e) => {
        e.typing && ((e.typing = !1), e.add());
      },
      oF = (e, t, n) => {
        cm(t) && n.set(Ob(e.selection));
      },
      rF = (e, t, n, s, o, r, i) => {
        const a = im(e);
        if (((r = r || {}), (r = G.extend(r, a)), cm(s) === !1 || e.removed))
          return null;
        const c = t.data[n.get()];
        if (
          e
            .dispatch("BeforeAddUndo", {
              level: r,
              lastLevel: c,
              originalEvent: i,
            })
            .isDefaultPrevented() ||
          (c && gc(c, r))
        )
          return null;
        t.data[n.get()] &&
          o.get().each((p) => {
            t.data[n.get()].beforeBookmark = p;
          });
        const f = k1(e);
        if (f && t.data.length > f) {
          for (let p = 0; p < t.data.length - 1; p++) t.data[p] = t.data[p + 1];
          t.data.length--, n.set(t.data.length);
        }
        (r.bookmark = Ob(e.selection)),
          n.get() < t.data.length - 1 && (t.data.length = n.get() + 1),
          t.data.push(r),
          n.set(t.data.length - 1);
        const d = { level: r, lastLevel: c, originalEvent: i };
        return (
          n.get() > 0
            ? (e.setDirty(!0),
              e.dispatch("AddUndo", d),
              e.dispatch("change", d))
            : e.dispatch("AddUndo", d),
          r
        );
      },
      iF = (e, t, n) => {
        (t.data = []), n.set(0), (t.typing = !1), e.dispatch("ClearUndos");
      },
      aF = (e, t, n, s, o) => {
        if (t.transact(s)) {
          const r = t.data[n.get()].bookmark,
            i = t.data[n.get() - 1];
          am(e, i, !0),
            t.transact(o) && (t.data[n.get() - 1].beforeBookmark = r);
        }
      },
      lF = (e, t, n) => {
        let s;
        return (
          t.get() < n.length - 1 &&
            (t.set(t.get() + 1),
            (s = n[t.get()]),
            am(e, s, !1),
            e.setDirty(!0),
            e.dispatch("Redo", { level: s })),
          s
        );
      },
      cF = (e, t, n, s) => {
        let o;
        return (
          t.typing && (t.add(), (t.typing = !1), hc(t, !1, n)),
          s.get() > 0 &&
            (s.set(s.get() - 1),
            (o = t.data[s.get()]),
            am(e, o, !0),
            e.setDirty(!0),
            e.dispatch("Undo", { level: o })),
          o
        );
      },
      uF = (e) => {
        e.clear(), e.add();
      },
      fF = (e, t, n) =>
        n.get() > 0 || (t.typing && t.data[0] && !gc(im(e), t.data[0])),
      dF = (e, t) => t.get() < e.data.length - 1 && !e.typing,
      mF = (e, t, n) => (kE(e, t), e.beforeChange(), e.ignore(n), e.add()),
      pF = (e, t) => {
        try {
          e.set(e.get() + 1), t();
        } finally {
          e.set(e.get() - 1);
        }
      },
      gF = (e, t) => {
        const n = e.dom,
          s = ke(t) ? t : e.getBody();
        Pt(e.hasVisual) && (e.hasVisual = P1(e)),
          T(n.select("table,a", s), (o) => {
            switch (o.nodeName) {
              case "TABLE":
                const r = O1(e),
                  i = n.getAttrib(o, "border");
                (!i || i === "0") && e.hasVisual
                  ? n.addClass(o, r)
                  : n.removeClass(o, r);
                break;
              case "A":
                if (!n.getAttrib(o, "href")) {
                  const a = n.getAttrib(o, "name") || o.id,
                    c = Yb(e);
                  a && e.hasVisual ? n.addClass(o, c) : n.removeClass(o, c);
                }
                break;
            }
          }),
          e.dispatch("VisualAid", { element: t, hasVisual: e.hasVisual });
      },
      NE = (e) => ({
        init: { bindEvents: Ie },
        undoManager: {
          beforeChange: (t, n) => oF(e, t, n),
          add: (t, n, s, o, r, i) => rF(e, t, n, s, o, r, i),
          undo: (t, n, s) => cF(e, t, n, s),
          redo: (t, n) => lF(e, t, n),
          clear: (t, n) => iF(e, t, n),
          reset: (t) => uF(t),
          hasUndo: (t, n) => fF(e, t, n),
          hasRedo: (t, n) => dF(t, n),
          transact: (t, n, s) => mF(t, n, s),
          ignore: (t, n) => pF(t, n),
          extra: (t, n, s, o) => aF(e, t, n, s, o),
        },
        formatter: {
          match: (t, n, s, o) => Md(e, t, n, s, o),
          matchAll: (t, n) => OI(e, t, n),
          matchNode: (t, n, s, o) => Ds(e, t, n, s, o),
          canApply: (t) => BI(e, t),
          closest: (t) => DI(e, t),
          apply: (t, n, s) => Vv(e, t, n, s),
          remove: (t, n, s, o) => zv(e, t, n, s, o),
          toggle: (t, n, s) => h$(e, t, n, s),
          formatChanged: (t, n, s, o, r) => g$(e, t, n, s, o, r),
        },
        editor: {
          getContent: (t) => wD(e, t),
          setContent: (t, n) => TI(e, t, n),
          insertContent: (t, n) => _I(e, t, n),
          addVisual: (t) => gF(e, t),
        },
        selection: { getContent: (t, n) => VL(e, t, n) },
        autocompleter: {
          addDecoration: (t) => dD(e, t),
          removeDecoration: () => pD(e, S.fromDom(e.getBody())),
        },
        raw: { getModel: () => g.none() },
      }),
      hF = (e) => {
        const t = (f) => (ut(f) ? f : {}),
          {
            init: n,
            undoManager: s,
            formatter: o,
            editor: r,
            selection: i,
            autocompleter: a,
            raw: c,
          } = e;
        return {
          init: { bindEvents: n.bindEvents },
          undoManager: {
            beforeChange: s.beforeChange,
            add: s.add,
            undo: s.undo,
            redo: s.redo,
            clear: s.clear,
            reset: s.reset,
            hasUndo: s.hasUndo,
            hasRedo: s.hasRedo,
            transact: (f, d, p) => s.transact(p),
            ignore: (f, d) => s.ignore(d),
            extra: (f, d, p, C) => s.extra(p, C),
          },
          formatter: {
            match: (f, d, p, C) => o.match(f, t(d), C),
            matchAll: o.matchAll,
            matchNode: o.matchNode,
            canApply: (f) => o.canApply(f),
            closest: (f) => o.closest(f),
            apply: (f, d, p) => o.apply(f, t(d)),
            remove: (f, d, p, C) => o.remove(f, t(d)),
            toggle: (f, d, p) => o.toggle(f, t(d)),
            formatChanged: (f, d, p, C, b) => o.formatChanged(d, p, C, b),
          },
          editor: {
            getContent: (f) => r.getContent(f),
            setContent: (f, d) => ({ content: r.setContent(f, d), html: "" }),
            insertContent: (f, d) => (r.insertContent(f), ""),
            addVisual: r.addVisual,
          },
          selection: { getContent: (f, d) => i.getContent(d) },
          autocompleter: {
            addDecoration: a.addDecoration,
            removeDecoration: a.removeDecoration,
          },
          raw: { getModel: () => g.some(c.getRawModel()) },
        };
      },
      bF = () => {
        const e = K(null),
          t = K("");
        return {
          init: { bindEvents: Ie },
          undoManager: {
            beforeChange: Ie,
            add: e,
            undo: e,
            redo: e,
            clear: Ie,
            reset: Ie,
            hasUndo: mt,
            hasRedo: mt,
            transact: e,
            ignore: Ie,
            extra: Ie,
          },
          formatter: {
            match: mt,
            matchAll: K([]),
            matchNode: K(void 0),
            canApply: mt,
            closest: t,
            apply: Ie,
            remove: Ie,
            toggle: Ie,
            formatChanged: K({ unbind: Ie }),
          },
          editor: {
            getContent: t,
            setContent: K({ content: "", html: "" }),
            insertContent: K(""),
            addVisual: Ie,
          },
          selection: { getContent: t },
          autocompleter: { addDecoration: Ie, removeDecoration: Ie },
          raw: { getModel: K(g.none()) },
        };
      },
      so = (e) => Fe(e.plugins, "rtc"),
      CF = (e) => at(e.plugins, "rtc").bind((t) => g.from(t.setup)),
      yF = (e) => {
        const t = e;
        return CF(e).fold(
          () => ((t.rtcInstance = NE(e)), g.none()),
          (n) => (
            (t.rtcInstance = bF()),
            g.some(() =>
              n().then((s) => ((t.rtcInstance = hF(s)), s.rtc.isRemote))
            )
          )
        );
      },
      um = (e) => (e.rtcInstance ? e.rtcInstance : NE(e)),
      kt = (e) => {
        const t = e.rtcInstance;
        if (t) return t;
        throw new Error("Failed to get RTC instance not yet initialized.");
      },
      vF = (e, t, n) => {
        kt(e).undoManager.beforeChange(t, n);
      },
      EF = (e, t, n, s, o, r, i) => kt(e).undoManager.add(t, n, s, o, r, i),
      xF = (e, t, n, s) => kt(e).undoManager.undo(t, n, s),
      wF = (e, t, n) => kt(e).undoManager.redo(t, n),
      SF = (e, t, n) => {
        kt(e).undoManager.clear(t, n);
      },
      _F = (e, t) => {
        kt(e).undoManager.reset(t);
      },
      kF = (e, t, n) => kt(e).undoManager.hasUndo(t, n),
      NF = (e, t, n) => kt(e).undoManager.hasRedo(t, n),
      AF = (e, t, n, s) => kt(e).undoManager.transact(t, n, s),
      TF = (e, t, n) => {
        kt(e).undoManager.ignore(t, n);
      },
      RF = (e, t, n, s, o) => {
        kt(e).undoManager.extra(t, n, s, o);
      },
      PF = (e, t, n, s, o) => kt(e).formatter.match(t, n, s, o),
      OF = (e, t, n) => kt(e).formatter.matchAll(t, n),
      DF = (e, t, n, s, o) => kt(e).formatter.matchNode(t, n, s, o),
      BF = (e, t) => kt(e).formatter.canApply(t),
      IF = (e, t) => kt(e).formatter.closest(t),
      $F = (e, t, n, s) => {
        kt(e).formatter.apply(t, n, s);
      },
      LF = (e, t, n, s, o) => {
        kt(e).formatter.remove(t, n, s, o);
      },
      FF = (e, t, n, s) => {
        kt(e).formatter.toggle(t, n, s);
      },
      MF = (e, t, n, s, o, r) => kt(e).formatter.formatChanged(t, n, s, o, r),
      UF = (e, t) => um(e).editor.getContent(t),
      zF = (e, t, n) => um(e).editor.setContent(t, n),
      HF = (e, t, n) => um(e).editor.insertContent(t, n),
      VF = (e, t, n) => kt(e).selection.getContent(t, n),
      WF = (e, t) => kt(e).editor.addVisual(t),
      AE = (e) => kt(e).init.bindEvents(),
      jF = (e, t) => kt(e).autocompleter.addDecoration(t),
      qF = (e) => kt(e).autocompleter.removeDecoration(),
      KF = (e, t = {}) => {
        const n = t.format ? t.format : "html";
        return VF(e, n, t);
      },
      TE = (e) => (e.dom.length === 0 ? (At(e), g.none()) : g.some(e)),
      GF = (e, t) =>
        e.filter((n) => ga.isBookmarkNode(n.dom)).bind(t ? ji : Go),
      YF = (e, t, n, s) => {
        const o = e.dom,
          r = t.dom,
          i = s ? o.length : r.length;
        s
          ? (vd(o, r, !1, !s), n.setStart(r, i))
          : (vd(r, o, !1, !s), n.setEnd(r, i));
      },
      XF = (e, t) => {
        Yn(e).each((n) => {
          const s = e.dom;
          t && Zl(n, L(s, 0))
            ? ec(s, 0)
            : !t && Jl(n, L(s, s.length)) && yd(s, s.length);
        });
      },
      RE = (e, t, n, s) => {
        e.bind(
          (o) => (
            (s ? yd : ec)(o.dom, s ? o.dom.length : 0),
            t.filter(In).map((i) => YF(o, i, n, s))
          )
        ).orThunk(() =>
          GF(t, s)
            .or(t)
            .filter(In)
            .map((r) => XF(r, s))
        );
      },
      QF = (e, t) => {
        const n = g.from(t.firstChild).map(S.fromDom),
          s = g.from(t.lastChild).map(S.fromDom);
        e.deleteContents(), e.insertNode(t);
        const o = n.bind(Go).filter(In).bind(TE),
          r = s.bind(ji).filter(In).bind(TE);
        RE(o, n, e, !0), RE(r, s, e, !1), e.collapse(!1);
      },
      ZF = (e, t) =>
        ct(Se({ format: "html" }, e), { set: !0, selection: !0, content: t }),
      JF = (e, t) => {
        if (t.format !== "raw") {
          const n = e.selection.getRng(),
            s = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
            o = s ? { context: s.nodeName.toLowerCase() } : {},
            r = e.parser.parse(
              t.content,
              Se(Se({ forced_root_block: !1 }, o), t)
            );
          return Po({ validate: !1 }, e.schema).serialize(r);
        } else return t.content;
      },
      eM = (e, t, n = {}) => {
        const s = ZF(n, t);
        nm(e, s).each((o) => {
          const r = JF(e, o),
            i = e.selection.getRng();
          QF(i, i.createContextualFragment(r)),
            e.selection.setRng(i),
            ba(e, i),
            sm(e, r, o);
        });
      },
      PE = (e, t, n) => {
        if (e && Fe(e, t)) {
          const s = H(e[t], (o) => o !== n);
          s.length === 0 ? delete e[t] : (e[t] = s);
        }
      };
    var tM = (e, t) => {
      let n, s;
      const o = (i, a) => de(a, (c) => e.is(c, i)),
        r = (i) => e.getParents(i, null, e.getRoot());
      return {
        selectorChangedWithUnbind: (i, a) => (
          n ||
            ((n = {}),
            (s = {}),
            t.on("NodeChange", (c) => {
              const f = c.element,
                d = r(f),
                p = {};
              G.each(n, (C, b) => {
                o(b, d).each((x) => {
                  s[b] ||
                    (T(C, (y) => {
                      y(!0, { node: x, selector: b, parents: d });
                    }),
                    (s[b] = C)),
                    (p[b] = C);
                });
              }),
                G.each(s, (C, b) => {
                  p[b] ||
                    (delete s[b],
                    G.each(C, (x) => {
                      x(!1, { node: f, selector: b, parents: d });
                    }));
                });
            })),
          n[i] || (n[i] = []),
          n[i].push(a),
          o(i, r(t.selection.getStart())).each(() => {
            s[i] = n[i];
          }),
          {
            unbind: () => {
              PE(n, i, a), PE(s, i, a);
            },
          }
        ),
      };
    };
    const OE = (e) =>
        !!(e && e.ownerDocument) &&
        Qs(S.fromDom(e.ownerDocument), S.fromDom(e)),
      nM = (e) => (e ? OE(e.startContainer) && OE(e.endContainer) : !1),
      DE = (e, t, n, s) => {
        let o, r;
        const { selectorChangedWithUnbind: i } = tM(e, s),
          a = (Z, pe) => {
            const Me = e.createRng();
            ke(Z) && ke(pe)
              ? (Me.setStart(Z, pe), Me.setEnd(Z, pe), z(Me), E(!1))
              : (jf(e, Me, s.getBody(), !0), z(Me));
          },
          c = (Z) => KF(s, Z),
          f = (Z, pe) => eM(s, Z, pe),
          d = (Z) => Sy(s.getBody(), P(), Z),
          p = (Z) => _y(s.getBody(), P(), Z),
          C = (Z, pe) => lt.getBookmark(Z, pe),
          b = (Z) => lt.moveToBookmark(Z),
          x = (Z, pe) => (rD(e, Z, pe).each(z), Z),
          y = () => {
            const Z = P(),
              pe = _();
            return !Z || Z.item
              ? !1
              : Z.compareEndPoints
              ? Z.compareEndPoints("StartToEnd", Z) === 0
              : !pe || Z.collapsed;
          },
          E = (Z) => {
            const pe = P();
            pe.collapse(!!Z), z(pe);
          },
          _ = () => (t.getSelection ? t.getSelection() : t.document.selection),
          P = () => {
            let Z, pe, Me;
            const De = (le, xe, Be) => {
                try {
                  return xe.compareBoundaryPoints(le, Be);
                } catch {
                  return -1;
                }
              },
              me = t.document;
            if (s.bookmark !== void 0 && ur(s) === !1) {
              const le = id(s);
              if (le.isSome())
                return le.map((xe) => ud(s, [xe])[0]).getOr(me.createRange());
            }
            try {
              (Z = _()) &&
                !ul(Z.anchorNode) &&
                (Z.rangeCount > 0
                  ? (pe = Z.getRangeAt(0))
                  : (pe = Z.createRange ? Z.createRange() : me.createRange()),
                (pe = ud(s, [pe])[0]));
            } catch {}
            return (
              pe || (pe = me.createRange()),
              pe.setStart &&
                pe.startContainer.nodeType === 9 &&
                pe.collapsed &&
                ((Me = e.getRoot()), pe.setStart(Me, 0), pe.setEnd(Me, 0)),
              o &&
                r &&
                (De(pe.START_TO_START, pe, o) === 0 &&
                De(pe.END_TO_END, pe, o) === 0
                  ? (pe = r)
                  : ((o = null), (r = null))),
              pe
            );
          },
          z = (Z, pe) => {
            let Me;
            if (!nM(Z)) return;
            const De = _();
            if (
              ((Z = s.dispatch("SetSelectionRange", {
                range: Z,
                forward: pe,
              }).range),
              De)
            ) {
              r = Z;
              try {
                De.removeAllRanges(), De.addRange(Z);
              } catch {}
              pe === !1 &&
                De.extend &&
                (De.collapse(Z.endContainer, Z.endOffset),
                De.extend(Z.startContainer, Z.startOffset)),
                (o = De.rangeCount > 0 ? De.getRangeAt(0) : null);
            }
            !Z.collapsed &&
              Z.startContainer === Z.endContainer &&
              De.setBaseAndExtent &&
              Z.endOffset - Z.startOffset < 2 &&
              Z.startContainer.hasChildNodes() &&
              ((Me = Z.startContainer.childNodes[Z.startOffset]),
              Me &&
                Me.tagName === "IMG" &&
                (De.setBaseAndExtent(
                  Z.startContainer,
                  Z.startOffset,
                  Z.endContainer,
                  Z.endOffset
                ),
                (De.anchorNode !== Z.startContainer ||
                  De.focusNode !== Z.endContainer) &&
                  De.setBaseAndExtent(Me, 0, Me, 1))),
              s.dispatch("AfterSetSelectionRange", { range: Z, forward: pe });
          },
          I = (Z) => (f(e.getOuterHTML(Z)), Z),
          $ = () => sD(s.getBody(), P()),
          te = (Z, pe) => oD(e, P(), Z, pe),
          W = () => {
            const Z = _(),
              pe = Z == null ? void 0 : Z.anchorNode,
              Me = Z == null ? void 0 : Z.focusNode;
            if (!Z || !pe || !Me || ul(pe) || ul(Me)) return !0;
            const De = e.createRng();
            De.setStart(pe, Z.anchorOffset), De.collapse(!0);
            const me = e.createRng();
            return (
              me.setStart(Me, Z.focusOffset),
              me.collapse(!0),
              De.compareBoundaryPoints(De.START_TO_START, me) <= 0
            );
          },
          We = {
            bookmarkManager: null,
            controlSelection: null,
            dom: e,
            win: t,
            serializer: n,
            editor: s,
            collapse: E,
            setCursorLocation: a,
            getContent: c,
            setContent: f,
            getBookmark: C,
            moveToBookmark: b,
            select: x,
            isCollapsed: y,
            isForward: W,
            setNode: I,
            getNode: $,
            getSel: _,
            setRng: z,
            getRng: P,
            getStart: d,
            getEnd: p,
            getSelectedBlocks: te,
            normalize: () => {
              const Z = P(),
                pe = _();
              if (!sP(pe) && Vl(s)) {
                const Me = ql(e, Z);
                return (
                  Me.each((De) => {
                    z(De, W());
                  }),
                  Me.getOr(Z)
                );
              }
              return Z;
            },
            selectorChanged: (Z, pe) => (i(Z, pe), We),
            selectorChangedWithUnbind: i,
            getScrollContainer: () => {
              let Z,
                pe = e.getRoot();
              for (; pe && pe.nodeName !== "BODY"; ) {
                if (pe.scrollHeight > pe.clientHeight) {
                  Z = pe;
                  break;
                }
                pe = pe.parentNode;
              }
              return Z;
            },
            scrollIntoView: (Z, pe) => {
              ke(Z) ? SO(s, Z, pe) : ba(s, P(), pe);
            },
            placeCaretAt: (Z, pe) => z(sy(Z, pe, s.getDoc())),
            getBoundingClientRect: () => {
              const Z = P();
              return Z.collapsed
                ? L.fromRangeStart(Z).getClientRects()[0]
                : Z.getBoundingClientRect();
            },
            destroy: () => {
              (t = o = r = null), qt.destroy();
            },
          },
          lt = ga(We),
          qt = ZC(We, s);
        return (We.bookmarkManager = lt), (We.controlSelection = qt), We;
      },
      sM = (e, t, n) => {
        e.addAttributeFilter("data-mce-tabindex", (s, o) => {
          let r = s.length;
          for (; r--; ) {
            const i = s[r];
            i.attr("tabindex", i.attr("data-mce-tabindex")), i.attr(o, null);
          }
        }),
          e.addAttributeFilter("src,href,style", (s, o) => {
            const r = "data-mce-" + o,
              i = t.url_converter,
              a = t.url_converter_scope;
            let c = s.length;
            for (; c--; ) {
              const f = s[c];
              let d = f.attr(r);
              d !== void 0
                ? (f.attr(o, d.length > 0 ? d : null), f.attr(r, null))
                : ((d = f.attr(o)),
                  o === "style"
                    ? (d = n.serializeStyle(n.parseStyle(d), f.name))
                    : i && (d = i.call(a, d, o, f.name)),
                  f.attr(o, d.length > 0 ? d : null));
            }
          }),
          e.addAttributeFilter("class", (s) => {
            let o = s.length;
            for (; o--; ) {
              const r = s[o];
              let i = r.attr("class");
              i &&
                ((i = r
                  .attr("class")
                  .replace(/(?:^|\s)mce-item-\w+(?!\S)/g, "")),
                r.attr("class", i.length > 0 ? i : null));
            }
          }),
          e.addAttributeFilter("data-mce-type", (s, o, r) => {
            let i = s.length;
            for (; i--; ) {
              const a = s[i];
              a.attr("data-mce-type") === "bookmark" &&
                !r.cleanup &&
                (g.from(a.firstChild).exists((f) => !hl(f.value))
                  ? a.unwrap()
                  : a.remove());
            }
          }),
          e.addNodeFilter("noscript", (s) => {
            let o = s.length;
            for (; o--; ) {
              const r = s[o].firstChild;
              r && (r.value = So.decode(r.value));
            }
          }),
          e.addNodeFilter("script,style", (s, o) => {
            const r = (a) =>
              a
                .replace(
                  /(<!--\[CDATA\[|\]\]-->)/g,
                  `
`
                )
                .replace(/^[\r\n]*|[\r\n]*$/g, "")
                .replace(
                  /^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,
                  ""
                )
                .replace(
                  /\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,
                  ""
                );
            let i = s.length;
            for (; i--; ) {
              const a = s[i],
                c = a.firstChild ? a.firstChild.value : "";
              if (o === "script") {
                const f = a.attr("type");
                f &&
                  a.attr(
                    "type",
                    f === "mce-no/type" ? null : f.replace(/^mce\-/, "")
                  ),
                  t.element_format === "xhtml" &&
                    c.length > 0 &&
                    (a.firstChild.value =
                      `// <![CDATA[
` +
                      r(c) +
                      `
// ]]>`);
              } else
                t.element_format === "xhtml" &&
                  c.length > 0 &&
                  (a.firstChild.value =
                    `<!--
` +
                    r(c) +
                    `
-->`);
            }
          }),
          e.addNodeFilter("#comment", (s) => {
            let o = s.length;
            for (; o--; ) {
              const r = s[o];
              t.preserve_cdata && r.value.indexOf("[CDATA[") === 0
                ? ((r.name = "#cdata"),
                  (r.type = 4),
                  (r.value = n.decode(
                    r.value.replace(/^\[CDATA\[|\]\]$/g, "")
                  )))
                : r.value.indexOf("mce:protected ") === 0 &&
                  ((r.name = "#text"),
                  (r.type = 3),
                  (r.raw = !0),
                  (r.value = unescape(r.value).substr(14)));
            }
          }),
          e.addNodeFilter("xml:namespace,input", (s, o) => {
            let r = s.length;
            for (; r--; ) {
              const i = s[r];
              i.type === 7
                ? i.remove()
                : i.type === 1 &&
                  o === "input" &&
                  !i.attr("type") &&
                  i.attr("type", "text");
            }
          }),
          e.addAttributeFilter("data-mce-type", (s) => {
            T(s, (o) => {
              o.attr("data-mce-type") === "format-caret" &&
                (o.isEmpty(e.schema.getNonEmptyElements())
                  ? o.remove()
                  : o.unwrap());
            });
          }),
          e.addAttributeFilter(
            "data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",
            (s, o) => {
              let r = s.length;
              for (; r--; ) s[r].attr(o, null);
            }
          );
      },
      oM = (e) => {
        const t = (s) => s && s.name === "br",
          n = e.lastChild;
        if (t(n)) {
          const s = n.prev;
          t(s) && (n.remove(), s.remove());
        }
      },
      rM = (e, t, n) => {
        let s;
        const o = e.dom;
        let r = t.cloneNode(!0);
        const i = document.implementation;
        if (i.createHTMLDocument) {
          const a = i.createHTMLDocument("");
          G.each(r.nodeName === "BODY" ? r.childNodes : [r], (c) => {
            a.body.appendChild(a.importNode(c, !0));
          }),
            r.nodeName !== "BODY" ? (r = a.body.firstChild) : (r = a.body),
            (s = o.doc),
            (o.doc = a);
        }
        return mP(e, ct(Se({}, n), { node: r })), s && (o.doc = s), r;
      },
      iM = (e, t) => e && e.hasEventListeners("PreProcess") && !t.no_events,
      aM = (e, t, n) => (iM(e, n) ? rM(e, t, n) : t),
      lM = (e, t, n) => {
        G.inArray(t, n) === -1 &&
          (e.addAttributeFilter(n, (s, o) => {
            let r = s.length;
            for (; r--; ) s[r].attr(o, null);
          }),
          t.push(n));
      },
      cM = (e, t, n) =>
        !t.no_events && e ? pP(e, ct(Se({}, t), { content: n })).content : n,
      uM = (e, t, n) => {
        const s = wo(n.getInner ? t.innerHTML : e.getOuterHTML(t));
        return n.selection || gl(S.fromDom(t)) ? s : G.trim(s);
      },
      fM = (e, t, n) => {
        const s = n.selection ? Se({ forced_root_block: !1 }, n) : n,
          o = e.parse(t, s);
        return oM(o), o;
      },
      dM = (e, t, n) => Po(e, t).serialize(n),
      mM = (e, t, n, s, o) => {
        const r = dM(t, n, s);
        return cM(e, o, r);
      },
      pM = (e, t) => {
        const n = ["data-mce-selected"],
          s = t && t.dom ? t.dom : st.DOM,
          o = t && t.schema ? t.schema : ko(e);
        (e.entity_encoding = e.entity_encoding || "named"),
          (e.remove_trailing_brs =
            "remove_trailing_brs" in e ? e.remove_trailing_brs : !0);
        const r = di(e, o);
        sM(r, e, s);
        const i = (a, c = {}) => {
          const f = Se({ format: "html" }, c),
            d = aM(t, a, f),
            p = uM(s, d, f),
            C = fM(r, p, f);
          return f.format === "tree" ? C : mM(t, e, o, C, f);
        };
        return {
          schema: o,
          addNodeFilter: r.addNodeFilter,
          addAttributeFilter: r.addAttributeFilter,
          serialize: i,
          addRules: o.addValidElements,
          setRules: o.setValidElements,
          addTempAttr: oe(lM, r, n),
          getTempAttrs: K(n),
          getNodeFilters: r.getNodeFilters,
          getAttributeFilters: r.getAttributeFilters,
        };
      },
      BE = (e, t) => {
        const n = pM(e, t);
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
      gM = "html",
      hM = (e, t) => ct(Se({}, e), { format: t, get: !0, getInner: !0 }),
      bM = (e, t = {}) => {
        const n = t.format ? t.format : gM,
          s = hM(t, n);
        return mE(e, s).fold(xt, (o) => {
          const r = UF(e, o);
          return pE(e, r, o);
        });
      },
      CM = "html",
      yM = (e, t) => ct(Se({ format: CM }, e), { set: !0, content: t }),
      fm = (e, t, n = {}) => {
        const s = yM(n, t);
        return nm(e, s)
          .map((o) => {
            const r = zF(e, o.content, o);
            return sm(e, r.html, o), r.content;
          })
          .getOr(t);
      },
      vM =
        "autoresize_on_init,content_editable_state,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,tabfocus_elements,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_enable_default_filters,paste_filter_drop,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(
          ","
        ),
      EM =
        "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(
          ","
        ),
      xM = (e) => {
        const t = H(vM, (s) => Fe(e, s)),
          n = e.forced_root_block;
        return (
          (n === !1 || n === "") && t.push("forced_root_block (false only)"),
          jn(t)
        );
      },
      wM = (e) => {
        const t = G.makeMap(e.plugins, " "),
          s = H(EM, (o) => Fe(t, o));
        return jn(s);
      },
      SM = (e, t) => {
        const n = xM(e),
          s = wM(t),
          o = s.length > 0,
          r = n.length > 0,
          i = t.theme === "mobile";
        if (o || r || i) {
          const a = `
- `,
            c = i
              ? `

Themes:${a}mobile`
              : "",
            f = o
              ? `

Plugins:${a}${s.join(a)}`
              : "",
            d = r
              ? `

Options:${a}${n.join(a)}`
              : "";
          console.warn(
            "The following deprecated features are currently enabled and have been removed in TinyMCE 6.0. These features will no longer work and should be removed from the TinyMCE configuration. See https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/ for more information." +
              c +
              f +
              d
          );
        }
      },
      _M = (e, t) => {
        SM(e, t);
      },
      bc = st.DOM,
      kM = (e) => {
        bc.setStyle(e.id, "display", e.orgDisplay);
      },
      Cc = (e) => g.from(e).each((t) => t.destroy()),
      NM = (e) => {
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
      },
      AM = (e) => {
        const t = e.formElement;
        t &&
          (t._mceOldSubmit &&
            ((t.submit = t._mceOldSubmit), (t._mceOldSubmit = null)),
          bc.unbind(t, "submit reset", e.formEventDelegate));
      },
      TM = (e) => {
        if (!e.removed) {
          const { _selectionOverrides: t, editorUpload: n } = e,
            s = e.getBody(),
            o = e.getElement();
          s && e.save({ is_removing: !0 }),
            (e.removed = !0),
            e.unbindAllNativeEvents(),
            e.hasHiddenInput && o && bc.remove(o.nextSibling),
            gP(e),
            e.editorManager.remove(e),
            !e.inline && s && kM(e),
            hP(e),
            bc.remove(e.getContainer()),
            Cc(t),
            Cc(n),
            e.destroy();
        }
      },
      RM = (e, t) => {
        const { selection: n, dom: s } = e;
        if (!e.destroyed) {
          if (!t && !e.removed) {
            e.remove();
            return;
          }
          t ||
            (e.editorManager.off("beforeunload", e._beforeUnload),
            e.theme && e.theme.destroy && e.theme.destroy(),
            Cc(n),
            Cc(s)),
            AM(e),
            NM(e),
            (e.destroyed = !0);
        }
      },
      yc = (() => {
        const e = {};
        return {
          add: (o, r) => {
            e[o] = r;
          },
          get: (o) => (e[o] ? e[o] : { icons: {} }),
          has: (o) => Fe(e, o),
        };
      })(),
      mi = nn.ModelManager,
      IE = (e, t) => t.dom[e],
      $E = (e, t) => parseInt(xs(t, e), 10),
      PM = oe(IE, "clientWidth"),
      OM = oe(IE, "clientHeight"),
      DM = oe($E, "margin-top"),
      BM = oe($E, "margin-left"),
      IM = (e) => e.dom.getBoundingClientRect(),
      $M = (e, t, n) => {
        const s = PM(e),
          o = OM(e);
        return t >= 0 && n >= 0 && t <= s && n <= o;
      },
      LM = (e, t, n, s) => {
        const o = IM(t),
          r = e ? o.left + t.dom.clientLeft + BM(t) : 0,
          i = e ? o.top + t.dom.clientTop + DM(t) : 0,
          a = n - r,
          c = s - i;
        return { x: a, y: c };
      },
      FM = (e, t, n) => {
        const s = S.fromDom(e.getBody()),
          o = e.inline ? s : eN(s),
          r = LM(e.inline, o, t, n);
        return $M(o, r.x, r.y);
      },
      MM = (e) => g.from(e).map(S.fromDom),
      UM = (e) => {
        const t = e.inline ? e.getBody() : e.getContentAreaContainer();
        return MM(t).map(Hr).getOr(!1);
      },
      zM = () => {
        const e = () => {
          throw new Error(
            "Theme did not provide a NotificationManager implementation."
          );
        };
        return { open: e, close: e, getArgs: e };
      },
      LE = (e) => {
        const t = [],
          n = () => {
            const C = e.theme;
            return C && C.getNotificationManagerImpl
              ? C.getNotificationManagerImpl()
              : zM();
          },
          s = () => g.from(t[0]),
          o = (C, b) =>
            C.type === b.type &&
            C.text === b.text &&
            !C.progressBar &&
            !C.timeout &&
            !b.progressBar &&
            !b.timeout,
          r = () => {
            T(t, (C) => {
              C.reposition();
            });
          },
          i = (C) => {
            t.push(C);
          },
          a = (C) => {
            Ne(t, (b) => b === C).each((b) => {
              t.splice(b, 1);
            });
          },
          c = (C, b = !0) => {
            if (!(e.removed || !UM(e)))
              return (
                b && e.dispatch("BeforeOpenNotification", { notification: C }),
                de(t, (x) => o(n().getArgs(x), C)).getOrThunk(() => {
                  e.editorManager.setActive(e);
                  const x = n().open(C, () => {
                    a(x),
                      r(),
                      s().fold(
                        () => e.focus(),
                        (y) => hy(S.fromDom(y.getEl()))
                      );
                  });
                  return (
                    i(x),
                    r(),
                    e.dispatch("OpenNotification", { notification: Se({}, x) }),
                    x
                  );
                })
              );
          },
          f = () => {
            s().each((C) => {
              n().close(C), a(C), r();
            });
          },
          d = K(t);
        return (
          ((C) => {
            C.on("SkinLoaded", () => {
              const b = g1(C);
              b && c({ text: b, type: "warning", timeout: 0 }, !1), r();
            }),
              C.on("show ResizeEditor ResizeWindow NodeChange", () => {
                requestAnimationFrame(r);
              }),
              C.on("remove", () => {
                T(t.slice(), (b) => {
                  n().close(b);
                });
              });
          })(e),
          { open: c, close: f, getNotifications: d }
        );
      },
      pi = nn.PluginManager,
      hr = nn.ThemeManager;
    var HM = () => {
      const e = () => {
        throw new Error(
          "Theme did not provide a WindowManager implementation."
        );
      };
      return {
        open: e,
        openUrl: e,
        alert: e,
        confirm: e,
        close: e,
        getParams: e,
        setParams: e,
      };
    };
    const FE = (e) => {
        let t = [];
        const n = () => {
            const y = e.theme;
            return y && y.getWindowManagerImpl
              ? y.getWindowManagerImpl()
              : HM();
          },
          s =
            (y, E) =>
            (..._) =>
              E ? E.apply(y, _) : void 0,
          o = (y) => {
            e.dispatch("OpenWindow", { dialog: y });
          },
          r = (y) => {
            e.dispatch("CloseWindow", { dialog: y });
          },
          i = (y) => {
            t.push(y), o(y);
          },
          a = (y) => {
            r(y), (t = H(t, (E) => E !== y)), t.length === 0 && e.focus();
          },
          c = () => g.from(t[t.length - 1]),
          f = (y) => {
            e.editorManager.setActive(e), rd(e), e.ui.show();
            const E = y();
            return i(E), E;
          },
          d = (y, E) => f(() => n().open(y, E, a)),
          p = (y) => f(() => n().openUrl(y, a)),
          C = (y, E, _) => {
            const P = n();
            P.alert(y, s(_ || P, E));
          },
          b = (y, E, _) => {
            const P = n();
            P.confirm(y, s(_ || P, E));
          },
          x = () => {
            c().each((y) => {
              n().close(y), a(y);
            });
          };
        return (
          e.on("remove", () => {
            T(t, (y) => {
              n().close(y);
            });
          }),
          { open: d, openUrl: p, alert: C, confirm: b, close: x }
        );
      },
      ME = (e, t) => {
        e.notificationManager.open({ type: "error", text: t });
      },
      vc = (e, t) => {
        e._skinLoaded
          ? ME(e, t)
          : e.on("SkinLoaded", () => {
              ME(e, t);
            });
      },
      VM = (e, t) => {
        vc(e, ts.translate(["Failed to upload image: {0}", t]));
      },
      ka = (e, t, n) => {
        KC(e, t, { message: n }), console.error(n);
      },
      Na = (e, t, n) =>
        n
          ? `Failed to load ${e}: ${n} from url ${t}`
          : `Failed to load ${e} url: ${t}`,
      WM = (e, t, n) => {
        ka(e, "PluginLoadError", Na("plugin", t, n));
      },
      jM = (e, t, n) => {
        ka(e, "IconsLoadError", Na("icons", t, n));
      },
      qM = (e, t, n) => {
        ka(e, "LanguageLoadError", Na("language", t, n));
      },
      KM = (e, t, n) => {
        ka(e, "ThemeLoadError", Na("theme", t, n));
      },
      GM = (e, t, n) => {
        ka(e, "ModelLoadError", Na("model", t, n));
      },
      YM = (e, t, n) => {
        const s = ts.translate(["Failed to initialize plugin: {0}", t]);
        KC(e, "PluginLoadError", { message: s }), Ec(s, n), vc(e, s);
      },
      Ec = (e, ...t) => {
        const n = window.console;
        n && (n.error ? n.error(e, ...t) : n.log(e, ...t));
      },
      XM = (e) => /^[a-z0-9\-]+$/i.test(e),
      QM = (e) => UE(e, c1(e)),
      ZM = (e) => UE(e, jb(e)),
      UE = (e, t) => {
        const n = e.editorManager.baseURL + "/skins/content",
          o = `content${e.editorManager.suffix}.css`,
          r = e.inline === !0;
        return U(t, (i) =>
          XM(i) && !r ? `${n}/${i}/${o}` : e.documentBaseURI.toAbsolute(i)
        );
      },
      JM = (e) => {
        e.contentCSS = e.contentCSS.concat(QM(e), ZM(e));
      },
      eU = rt,
      tU = (e, t, n) => vN(e, t, eU, n),
      zE = () => {
        let n = {};
        const s = (C, b) => ({ status: C, resultUri: b }),
          o = (C) => C in n;
        return {
          hasBlobUri: o,
          getResultUri: (C) => {
            const b = n[C];
            return b ? b.resultUri : null;
          },
          isPending: (C) => (o(C) ? n[C].status === 1 : !1),
          isUploaded: (C) => (o(C) ? n[C].status === 2 : !1),
          markPending: (C) => {
            n[C] = s(1, null);
          },
          markUploaded: (C, b) => {
            n[C] = s(2, b);
          },
          removeFailed: (C) => {
            delete n[C];
          },
          destroy: () => {
            n = {};
          },
        };
      };
    let nU = 0;
    const sU = () => {
        const e = () => Math.round(Math.random() * 4294967295).toString(36),
          t = new Date().getTime();
        return "s" + t.toString(36) + e() + e() + e();
      },
      oU = (e) => e + nU++ + sU(),
      rU = () => {
        let e = [];
        const t = (p) =>
            ({
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
            }[p.toLowerCase()] || "dat"),
          n = (p, C, b, x, y) => {
            if (be(p))
              return s({ id: p, name: x, filename: y, blob: C, base64: b });
            if (ut(p)) return s(p);
            throw new Error("Unknown input type");
          },
          s = (p) => {
            if (!p.blob || !p.base64)
              throw new Error(
                "blob and base64 representations of the image are required for BlobInfo to be created"
              );
            const C = p.id || oU("blobid"),
              b = p.name || C,
              x = p.blob;
            return {
              id: K(C),
              name: K(b),
              filename: K(p.filename || b + "." + t(x.type)),
              blob: K(x),
              base64: K(p.base64),
              blobUri: K(p.blobUri || URL.createObjectURL(x)),
              uri: K(p.uri),
            };
          },
          o = (p) => {
            i(p.id()) || e.push(p);
          },
          r = (p) => de(e, p).getOrUndefined(),
          i = (p) => r((C) => C.id() === p);
        return {
          create: n,
          add: o,
          get: i,
          getByUri: (p) => r((C) => C.blobUri() === p),
          getByData: (p, C) =>
            r((b) => b.base64() === p && b.blob().type === C),
          findFirst: r,
          removeByUri: (p) => {
            e = H(e, (C) =>
              C.blobUri() === p ? (URL.revokeObjectURL(C.blobUri()), !1) : !0
            );
          },
          destroy: () => {
            T(e, (p) => {
              URL.revokeObjectURL(p.blobUri());
            }),
              (e = []);
          },
        };
      },
      iU = (e, t) => {
        const n = {},
          s = (x, y) =>
            x ? x.replace(/\/$/, "") + "/" + y.replace(/^\//, "") : y,
          o = (x, y) =>
            new Promise((E, _) => {
              const P = new XMLHttpRequest();
              P.open("POST", t.url),
                (P.withCredentials = t.credentials),
                (P.upload.onprogress = (I) => {
                  y((I.loaded / I.total) * 100);
                }),
                (P.onerror = () => {
                  _(
                    "Image upload failed due to a XHR Transport error. Code: " +
                      P.status
                  );
                }),
                (P.onload = () => {
                  if (P.status < 200 || P.status >= 300) {
                    _("HTTP Error: " + P.status);
                    return;
                  }
                  const I = JSON.parse(P.responseText);
                  if (!I || !be(I.location)) {
                    _("Invalid JSON: " + P.responseText);
                    return;
                  }
                  E(s(t.basePath, I.location));
                });
              const z = new FormData();
              z.append("file", x.blob(), x.filename()), P.send(z);
            }),
          r = () =>
            new Promise((x) => {
              x([]);
            }),
          i = (x, y) => ({ url: y, blobInfo: x, status: !0 }),
          a = (x, y) => ({ url: "", blobInfo: x, status: !1, error: y }),
          c = (x, y) => {
            G.each(n[x], (E) => {
              E(y);
            }),
              delete n[x];
          },
          f = (x, y, E) => (
            e.markPending(x.blobUri()),
            new Promise((_) => {
              let P, z;
              try {
                const I = () => {
                    P && (P.close(), (z = Ie));
                  },
                  $ = (W) => {
                    I(),
                      e.markUploaded(x.blobUri(), W),
                      c(x.blobUri(), i(x, W)),
                      _(i(x, W));
                  },
                  te = (W) => {
                    I(),
                      e.removeFailed(x.blobUri()),
                      c(x.blobUri(), a(x, W)),
                      _(a(x, W));
                  };
                (z = (W) => {
                  W < 0 ||
                    W > 100 ||
                    g
                      .from(P)
                      .orThunk(() => g.from(E).map(Br))
                      .each((q) => {
                        (P = q), q.progressBar.value(W);
                      });
                }),
                  y(x, z).then($, (W) => {
                    te(be(W) ? { message: W } : W);
                  });
              } catch (I) {
                _(a(x, I));
              }
            })
          ),
          d = (x) => x === o,
          p = (x) => {
            const y = x.blobUri();
            return new Promise((E) => {
              (n[y] = n[y] || []), n[y].push(E);
            });
          },
          C = (x, y) => (
            (x = G.grep(x, (E) => !e.isUploaded(E.blobUri()))),
            Promise.all(
              G.map(x, (E) =>
                e.isPending(E.blobUri()) ? p(E) : f(E, t.handler, y)
              )
            )
          ),
          b = (x, y) => (!t.url && d(t.handler) ? r() : C(x, y));
        return Ye(t.handler) === !1 && (t.handler = o), { upload: b };
      },
      HE = (e) => () =>
        e.notificationManager.open({
          text: e.translate("Image uploading..."),
          type: "info",
          timeout: -1,
          progressBar: !0,
        }),
      VE = (e, t) =>
        iU(t, {
          url: n1(e),
          basePath: s1(e),
          credentials: o1(e),
          handler: r1(e),
        }),
      aU = (e) => {
        const t = zE(),
          n = VE(e, t);
        return { upload: (s, o = !0) => n.upload(s, o ? HE(e) : void 0) };
      },
      lU = (e) => {
        const t = $t(null);
        return (
          e.on("change AddUndo", (s) => {
            t.set(Se({}, s.level));
          }),
          {
            fireIfChanged: () => {
              const s = e.undoManager.data;
              Cs(s)
                .filter((o) => !gc(t.get(), o))
                .each((o) => {
                  e.setDirty(!0),
                    e.dispatch("change", {
                      level: o,
                      lastLevel: Lr(s, s.length - 2).getOrNull(),
                    });
                });
            },
          }
        );
      },
      cU = (e) => {
        const t = rU();
        let n, s;
        const o = zE(),
          r = [],
          i = lU(e),
          a = (I) => ($) => e.selection ? I($) : [],
          c = (I) =>
            I + (I.indexOf("?") === -1 ? "?" : "&") + new Date().getTime(),
          f = (I, $, te) => {
            let W = 0;
            do
              (W = I.indexOf($, W)),
                W !== -1 &&
                  ((I = I.substring(0, W) + te + I.substr(W + $.length)),
                  (W += te.length - $.length + 1));
            while (W !== -1);
            return I;
          },
          d = (I, $, te) => {
            const W = `src="${te}"${
              te === et.transparentSrc ? ' data-mce-placeholder="1"' : ""
            }`;
            return (
              (I = f(I, `src="${$}"`, W)),
              (I = f(
                I,
                'data-mce-src="' + $ + '"',
                'data-mce-src="' + te + '"'
              )),
              I
            );
          },
          p = (I, $) => {
            T(e.undoManager.data, (te) => {
              te.type === "fragmented"
                ? (te.fragments = U(te.fragments, (W) => d(W, I, $)))
                : (te.content = d(te.content, I, $));
            });
          },
          C = (I, $) => {
            const te = e.convertURL($, "src");
            p(I.src, $),
              Es(S.fromDom(I), { src: zb(e) ? c($) : $, "data-mce-src": te });
          },
          b = () => (
            n || (n = VE(e, o)),
            _().then(
              a((I) => {
                const $ = U(I, (te) => te.blobInfo);
                return n.upload($, HE(e)).then(
                  a((te) => {
                    const W = [],
                      q = U(te, (Q, J) => {
                        const Ee = I[J].blobInfo,
                          ae = I[J].image;
                        let se = !1;
                        return (
                          Q.status && e1(e)
                            ? (t.removeByUri(ae.src), so(e) || C(ae, Q.url))
                            : Q.error &&
                              (Q.error.remove &&
                                (p(ae.getAttribute("src"), et.transparentSrc),
                                W.push(ae),
                                (se = !0)),
                              VM(e, Q.error.message)),
                          {
                            element: ae,
                            status: Q.status,
                            uploadUri: Q.url,
                            blobInfo: Ee,
                            removed: se,
                          }
                        );
                      });
                    return (
                      q.length > 0 && i.fireIfChanged(),
                      W.length > 0 &&
                        !so(e) &&
                        e.undoManager.transact(() => {
                          T(W, (Q) => {
                            e.dom.remove(Q), t.removeByUri(Q.src);
                          });
                        }),
                      q
                    );
                  })
                );
              })
            )
          ),
          x = () => (Ub(e) ? b() : Promise.resolve([])),
          y = (I) => it(r, ($) => $(I)),
          E = (I) => {
            r.push(I);
          },
          _ = () => (
            s || (s = Z$(o, t)),
            s.findAll(e.getBody(), y).then(
              a(
                (I) => (
                  (I = H(I, ($) =>
                    typeof $ == "string" ? (vc(e, $), !1) : !0
                  )),
                  so(e) ||
                    T(I, ($) => {
                      p($.image.src, $.blobInfo.blobUri()),
                        ($.image.src = $.blobInfo.blobUri()),
                        $.image.removeAttribute("data-mce-src");
                    }),
                  I
                )
              )
            )
          ),
          P = () => {
            t.destroy(), o.destroy(), (s = n = null);
          },
          z = (I) =>
            I.replace(/src="(blob:[^"]+)"/g, ($, te) => {
              const W = o.getResultUri(te);
              if (W) return 'src="' + W + '"';
              let q = t.getByUri(te);
              if (
                (q ||
                  (q = X(
                    e.editorManager.get(),
                    (Q, J) =>
                      Q ||
                      (J.editorUpload && J.editorUpload.blobCache.getByUri(te)),
                    null
                  )),
                q)
              ) {
                const Q = q.blob();
                return 'src="data:' + Q.type + ";base64," + q.base64() + '"';
              }
              return $;
            });
        return (
          e.on("SetContent", () => {
            Ub(e) ? x() : _();
          }),
          e.on("RawSaveContent", (I) => {
            I.content = z(I.content);
          }),
          e.on("GetContent", (I) => {
            I.source_view ||
              I.format === "raw" ||
              I.format === "tree" ||
              (I.content = z(I.content));
          }),
          e.on("PostRender", () => {
            e.parser.addNodeFilter("img", (I) => {
              T(I, ($) => {
                const te = $.attr("src");
                if (t.getByUri(te)) return;
                const W = o.getResultUri(te);
                W && $.attr("src", W);
              });
            });
          }),
          {
            blobCache: t,
            addFilter: E,
            uploadImages: b,
            uploadImagesAuto: x,
            scanForImages: _,
            destroy: P,
          }
        );
      },
      uU = (e) => {
        const t = e.dom,
          n = e.schema.type,
          s = {
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
                selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                styles: { textAlign: "left" },
                inherit: !1,
                preview: !1,
              },
              {
                selector: "img,audio,video",
                collapsed: !1,
                styles: { float: "left" },
                preview: "font-family font-size",
              },
              {
                selector: "table",
                collapsed: !1,
                styles: { marginLeft: "0px", marginRight: "auto" },
                onformat: (o) => {
                  t.setStyle(o, "float", null);
                },
                preview: "font-family font-size",
              },
            ],
            aligncenter: [
              {
                selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                styles: { textAlign: "center" },
                inherit: !1,
                preview: "font-family font-size",
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
                selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                styles: { textAlign: "right" },
                inherit: !1,
                preview: "font-family font-size",
              },
              {
                selector: "img,audio,video",
                collapsed: !1,
                styles: { float: "right" },
                preview: "font-family font-size",
              },
              {
                selector: "table",
                collapsed: !1,
                styles: { marginRight: "0px", marginLeft: "auto" },
                onformat: (o) => {
                  t.setStyle(o, "float", null);
                },
                preview: "font-family font-size",
              },
            ],
            alignjustify: [
              {
                selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                styles: { textAlign: "justify" },
                inherit: !1,
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
            strikethrough: (() => {
              const o = {
                  inline: "span",
                  styles: { textDecoration: "line-through" },
                  exact: !0,
                },
                r = {
                  inline: "strike",
                  remove: "all",
                  preserve_attributes: ["class", "style"],
                },
                i = {
                  inline: "s",
                  remove: "all",
                  preserve_attributes: ["class", "style"],
                };
              return n !== "html4" ? [i, o, r] : [o, i, r];
            })(),
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
              styles: { lineHeight: "%value" },
            },
            fontsize_class: { inline: "span", attributes: { class: "%value" } },
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
              onmatch: (o, r, i) => ve(o) && o.hasAttribute("href"),
              onformat: (o, r, i) => {
                G.each(i, (a, c) => {
                  t.setAttrib(o, c, a);
                });
              },
            },
            lang: {
              inline: "span",
              clear_child_styles: !0,
              remove_similar: !0,
              attributes: {
                lang: "%value",
                "data-mce-lang": (o) => {
                  var r;
                  return (r = o == null ? void 0 : o.customValue) !== null &&
                    r !== void 0
                    ? r
                    : null;
                },
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
          G.each(
            "p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/),
            (o) => {
              s[o] = { block: o, remove: "all" };
            }
          ),
          s
        );
      },
      WE = { remove_similar: !0, inherit: !1 },
      gi = Se({ selector: "td,th" }, WE),
      fU = {
        tablecellbackgroundcolor: Se(
          { styles: { backgroundColor: "%value" } },
          gi
        ),
        tablecellverticalalign: Se(
          { styles: { "vertical-align": "%value" } },
          gi
        ),
        tablecellbordercolor: Se({ styles: { borderColor: "%value" } }, gi),
        tablecellclass: Se({ classes: ["%value"] }, gi),
        tableclass: Se({ selector: "table", classes: ["%value"] }, WE),
        tablecellborderstyle: Se({ styles: { borderStyle: "%value" } }, gi),
        tablecellborderwidth: Se({ styles: { borderWidth: "%value" } }, gi),
      },
      dU = K(fU),
      mU = (e) => {
        const t = {},
          n = (i) => (ke(i) ? t[i] : t),
          s = (i) => Fe(t, i),
          o = (i, a) => {
            i &&
              (be(i)
                ? (Nt(a) || (a = [a]),
                  T(a, (c) => {
                    Pt(c.deep) && (c.deep = !Rn(c)),
                      Pt(c.split) && (c.split = !Rn(c) || Wt(c)),
                      Pt(c.remove) && Rn(c) && !Wt(c) && (c.remove = "none"),
                      Rn(c) && Wt(c) && ((c.mixed = !0), (c.block_expand = !0)),
                      be(c.classes) && (c.classes = c.classes.split(/\s+/));
                  }),
                  (t[i] = a))
                : ht(i, (c, f) => {
                    o(f, c);
                  }));
          },
          r = (i) => (i && t[i] && delete t[i], t);
        return (
          o(uU(e)),
          o(dU()),
          o(C1(e)),
          { get: n, has: s, register: o, unregister: r }
        );
      },
      xc = G.each,
      kn = st.DOM,
      jE = (e, t) => {
        let n, s, o;
        const r = (t && t.schema) || ko({}),
          i = (d, p) => {
            p.classes.length && kn.addClass(d, p.classes.join(" ")),
              kn.setAttribs(d, p.attrs);
          },
          a = (d) => {
            s = typeof d == "string" ? { name: d, classes: [], attrs: {} } : d;
            const p = kn.create(s.name);
            return i(p, s), p;
          },
          c = (d, p) => {
            const C = typeof d != "string" ? d.nodeName.toLowerCase() : d,
              b = r.getElementRule(C),
              x = b && b.parentsRequired;
            return x && x.length
              ? p && G.inArray(x, p) !== -1
                ? p
                : x[0]
              : !1;
          },
          f = (d, p, C) => {
            let b, x;
            const y = p.length > 0 && p[0],
              E = y && y.name,
              _ = c(d, E);
            if (_) E === _ ? ((x = p[0]), (p = p.slice(1))) : (x = _);
            else if (y) (x = p[0]), (p = p.slice(1));
            else if (!C) return d;
            return (
              x && ((b = a(x)), b.appendChild(d)),
              C &&
                (b || ((b = kn.create("div")), b.appendChild(d)),
                G.each(C, (P) => {
                  const z = a(P);
                  b.insertBefore(z, d);
                })),
              f(b, p, x && x.siblings)
            );
          };
        return e && e.length
          ? ((s = e[0]),
            (n = a(s)),
            (o = kn.create("div")),
            o.appendChild(f(n, e.slice(1), s.siblings)),
            o)
          : "";
      },
      pU = (e) => {
        let t;
        const n = { classes: [], attrs: {} };
        return (
          (e = n.selector = G.trim(e)),
          e !== "*" &&
            (t = e.replace(
              /(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,
              (s, o, r, i, a) => {
                switch (o) {
                  case "#":
                    n.attrs.id = r;
                    break;
                  case ".":
                    n.classes.push(r);
                    break;
                  case ":":
                    G.inArray(
                      "checked disabled enabled read-only required".split(" "),
                      r
                    ) !== -1 && (n.attrs[r] = r);
                    break;
                }
                if (i === "[") {
                  const c = a.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                  c && (n.attrs[c[1]] = c[2]);
                }
                return "";
              }
            )),
          (n.name = t || "div"),
          n
        );
      },
      gU = (e) =>
        !e || typeof e != "string"
          ? []
          : ((e = e.split(/\s*,\s*/)[0]),
            (e = e.replace(/\s*(~\+|~|\+|>)\s*/g, "$1")),
            G.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), (t) => {
              const n = G.map(t.split(/(?:~\+|~|\+)/), pU),
                s = n.pop();
              return n.length && (s.siblings = n), s;
            }).reverse()),
      hU = (e, t) => {
        let n,
          s,
          o = "",
          r,
          i = y1(e);
        if (i === "") return "";
        const a = (d) => d.replace(/%(\w+)/g, "");
        if (typeof t == "string") {
          if (((t = e.formatter.get(t)), !t)) return;
          t = t[0];
        }
        if ("preview" in t) {
          const d = at(t, "preview");
          if (zr(d, !1)) return "";
          i = d.getOr(i);
        }
        n = t.block || t.inline || "span";
        const c = gU(t.selector);
        c.length
          ? (c[0].name || (c[0].name = n), (n = t.selector), (s = jE(c, e)))
          : (s = jE([n], e));
        const f = kn.select(n, s)[0] || s.firstChild;
        return (
          xc(t.styles, (d, p) => {
            const C = a(d);
            C && kn.setStyle(f, p, C);
          }),
          xc(t.attributes, (d, p) => {
            const C = a(d);
            C && kn.setAttrib(f, p, C);
          }),
          xc(t.classes, (d) => {
            const p = a(d);
            kn.hasClass(f, p) || kn.addClass(f, p);
          }),
          e.dispatch("PreviewFormats"),
          kn.setStyles(s, { position: "absolute", left: -65535 }),
          e.getBody().appendChild(s),
          (r = kn.getStyle(e.getBody(), "fontSize", !0)),
          (r = /px$/.test(r) ? parseInt(r, 10) : 0),
          xc(i.split(" "), (d) => {
            let p = kn.getStyle(f, d, !0);
            if (
              !(
                d === "background-color" &&
                /transparent|rgba\s*\([^)]+,\s*0\)/.test(p) &&
                ((p = kn.getStyle(e.getBody(), d, !0)),
                Fl(p).toLowerCase() === "#ffffff")
              ) &&
              !(d === "color" && Fl(p).toLowerCase() === "#000000")
            ) {
              if (d === "font-size" && /em|%$/.test(p)) {
                if (r === 0) return;
                p = (parseFloat(p) / (/%$/.test(p) ? 100 : 1)) * r + "px";
              }
              d === "border" && p && (o += "padding:0 2px;"),
                (o += d + ":" + p + ";");
            }
          }),
          e.dispatch("AfterPreviewFormats"),
          kn.remove(s),
          o
        );
      },
      bU = (e) => {
        e.addShortcut("meta+b", "", "Bold"),
          e.addShortcut("meta+i", "", "Italic"),
          e.addShortcut("meta+u", "", "Underline");
        for (let t = 1; t <= 6; t++)
          e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
        e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]),
          e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]),
          e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
      },
      qE = (e) => {
        const t = mU(e),
          n = $t(null);
        return (
          bU(e),
          WI(e),
          {
            get: t.get,
            has: t.has,
            register: t.register,
            unregister: t.unregister,
            apply: (s, o, r) => {
              $F(e, s, o, r);
            },
            remove: (s, o, r, i) => {
              LF(e, s, o, r, i);
            },
            toggle: (s, o, r) => {
              FF(e, s, o, r);
            },
            match: (s, o, r, i) => PF(e, s, o, r, i),
            closest: (s) => IF(e, s),
            matchAll: (s, o) => OF(e, s, o),
            matchNode: (s, o, r, i) => DF(e, s, o, r, i),
            canApply: (s) => BF(e, s),
            formatChanged: (s, o, r, i) => MF(e, n, s, o, r, i),
            getCssText: oe(hU, e),
          }
        );
      },
      KE = (e) => {
        switch (e.toLowerCase()) {
          case "undo":
          case "redo":
          case "mcefocus":
            return !0;
          default:
            return !1;
        }
      },
      CU = (e, t, n) => {
        const s = $t(!1),
          o = (c) => {
            hc(t, !1, n), t.add({}, c);
          };
        e.on("init", () => {
          t.add();
        }),
          e.on("BeforeExecCommand", (c) => {
            const f = c.command;
            KE(f) || (kE(t, n), t.beforeChange());
          }),
          e.on("ExecCommand", (c) => {
            const f = c.command;
            KE(f) || o(c);
          }),
          e.on("ObjectResizeStart cut", () => {
            t.beforeChange();
          }),
          e.on("SaveContent ObjectResized blur", o),
          e.on("dragend", o),
          e.on("keyup", (c) => {
            const f = c.keyCode;
            c.isDefaultPrevented() ||
              (((f >= 33 && f <= 36) ||
                (f >= 37 && f <= 40) ||
                f === 45 ||
                c.ctrlKey) &&
                (o(), e.nodeChanged()),
              (f === 46 || f === 8) && e.nodeChanged(),
              s.get() &&
                t.typing &&
                gc(im(e), t.data[0]) === !1 &&
                (e.isDirty() === !1 && e.setDirty(!0),
                e.dispatch("TypingUndo"),
                s.set(!1),
                e.nodeChanged()));
          }),
          e.on("keydown", (c) => {
            const f = c.keyCode;
            if (c.isDefaultPrevented()) return;
            if ((f >= 33 && f <= 36) || (f >= 37 && f <= 40) || f === 45) {
              t.typing && o(c);
              return;
            }
            const d = (c.ctrlKey && !c.altKey) || c.metaKey;
            (f < 16 || f > 20) &&
              f !== 224 &&
              f !== 91 &&
              !t.typing &&
              !d &&
              (t.beforeChange(), hc(t, !0, n), t.add({}, c), s.set(!0));
          }),
          e.on("mousedown", (c) => {
            t.typing && o(c);
          });
        const r = (c) => c.inputType === "insertReplacementText",
          i = (c) => c.inputType === "insertText" && c.data === null,
          a = (c) =>
            c.inputType === "insertFromPaste" ||
            c.inputType === "insertFromDrop";
        e.on("input", (c) => {
          c.inputType && (r(c) || i(c) || a(c)) && o(c);
        }),
          e.on("AddUndo Undo Redo ClearUndos", (c) => {
            c.isDefaultPrevented() || e.nodeChanged();
          });
      },
      yU = (e) => {
        e.addShortcut("meta+z", "", "Undo"),
          e.addShortcut("meta+y,meta+shift+z", "", "Redo");
      },
      GE = (e) => {
        const t = No(),
          n = $t(0),
          s = $t(0),
          o = {
            data: [],
            typing: !1,
            beforeChange: () => {
              vF(e, n, t);
            },
            add: (r, i) => EF(e, o, s, n, t, r, i),
            undo: () => xF(e, o, n, s),
            redo: () => wF(e, s, o.data),
            clear: () => {
              SF(e, o, s);
            },
            reset: () => {
              _F(e, o);
            },
            hasUndo: () => kF(e, o, s),
            hasRedo: () => NF(e, o, s),
            transact: (r) => AF(e, o, n, r),
            ignore: (r) => {
              TF(e, n, r);
            },
            extra: (r, i) => {
              RF(e, o, s, r, i);
            },
          };
        return so(e) || CU(e, o, n), yU(e), o;
      },
      vU = [
        9,
        27,
        ge.HOME,
        ge.END,
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
        ge.DOWN,
        ge.UP,
        ge.LEFT,
        ge.RIGHT,
      ].concat(et.browser.isFirefox() ? [224] : []),
      YE = "data-mce-placeholder",
      XE = (e) => e.type === "keydown" || e.type === "keyup",
      QE = (e) => {
        const t = e.keyCode;
        return t === ge.BACKSPACE || t === ge.DELETE;
      },
      EU = (e) => {
        if (XE(e)) {
          const t = e.keyCode;
          return (
            !QE(e) &&
            (ge.metaKeyPressed(e) ||
              e.altKey ||
              (t >= 112 && t <= 123) ||
              R(vU, t))
          );
        } else return !1;
      },
      xU = (e) =>
        XE(e) && !(QE(e) || (e.type === "keyup" && e.keyCode === 229)),
      wU = (e, t, n) => {
        if (Ht(S.fromDom(t), !1)) {
          const s = t.firstElementChild;
          return s
            ? e.getStyle(t.firstElementChild, "padding-left") ||
              e.getStyle(t.firstElementChild, "padding-right")
              ? !1
              : n === s.nodeName.toLowerCase()
            : !0;
        } else return !1;
      },
      SU = (e) => {
        const t = e.dom,
          n = wn(e),
          s = p1(e),
          o = (r, i) => {
            if (EU(r)) return;
            const a = e.getBody(),
              c = xU(r) ? !1 : wU(t, a, n);
            ((t.getAttrib(a, YE) !== "") !== c || i) &&
              (t.setAttrib(a, YE, c ? s : null),
              t.setAttrib(a, "aria-placeholder", c ? s : null),
              wP(e, c),
              e.on(c ? "keydown" : "keyup", o),
              e.off(c ? "keyup" : "keydown", o));
          };
        s &&
          e.on("init", (r) => {
            o(r, !0),
              e.on("change SetContent ExecCommand", o),
              e.on("paste", (i) => Un.setEditorTimeout(e, () => o(i)));
          });
      },
      _U = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
      kU = (e) => _U.test(e),
      br = (e, t) => Xs(S.fromDom(t), d1(e)),
      NU = (e) =>
        st.DOM.getStyle(e, "direction", !0) === "rtl" || kU(e.textContent),
      AU = (e, t, n) => H(st.DOM.getParents(n.container(), "*", t), e),
      Bo = (e, t, n) => {
        const s = AU(e, t, n);
        return g.from(s[s.length - 1]);
      },
      TU = (e, t, n) => {
        const s = Ro(t, e),
          o = Ro(n, e);
        return s && s === o;
      },
      RU = (e) => Qu(e) || Zu(e),
      zn = (e, t) => {
        if (!t) return t;
        const n = t.container(),
          s = t.offset();
        return e
          ? Gr(n)
            ? ne(n.nextSibling)
              ? L(n.nextSibling, 0)
              : L.after(n)
            : Qu(t)
            ? L(n, s + 1)
            : t
          : Gr(n)
          ? ne(n.previousSibling)
            ? L(n.previousSibling, n.previousSibling.data.length)
            : L.before(n)
          : Zu(t)
          ? L(n, s - 1)
          : t;
      },
      ZE = oe(zn, !0),
      JE = oe(zn, !1),
      e0 = (e, t) => {
        const n = (s) => s.stopImmediatePropagation();
        e.on("beforeinput input", n, !0),
          e.getDoc().execCommand(t),
          e.off("beforeinput input", n);
      },
      dm = (e) => e0(e, "Delete"),
      PU = (e) => e0(e, "ForwardDelete"),
      OU = (e) => (t) => tt(e, S.fromDom(t.dom.parentNode)),
      DU = (e) => Ih(e) || Xi(e),
      wc = (e, t) => (Qs(e, t) ? ml(t, DU, OU(e)) : g.none()),
      BU = (e) => {
        const t = e.getBody(),
          n = t.firstChild && e.dom.isBlock(t.firstChild) ? t.firstChild : t;
        e.selection.setCursorLocation(n, 0);
      },
      t0 = (e) => {
        e.dom.isEmpty(e.getBody()) && (e.setContent(""), BU(e));
      },
      IU = (e, t, n) =>
        En(mn(n), Rs(n), (s, o) => {
          const r = zn(!0, s),
            i = zn(!1, o),
            a = zn(!1, t);
          return e
            ? ss(n, a).exists((c) => c.isEqual(i) && t.isEqual(r))
            : Ts(n, a).exists((c) => c.isEqual(r) && t.isEqual(i));
        }).getOr(!0),
      $U = (e, t) => ({ block: e, position: t }),
      LU = (e, t) => ({ from: e, to: t }),
      mm = (e, t) => {
        const n = S.fromDom(e),
          s = S.fromDom(t.container());
        return wc(n, s).map((o) => $U(o, t));
      },
      FU = (e) => tt(e.from.block, e.to.block) === !1,
      MU = (e) =>
        Yn(e.from.block)
          .bind((t) => Yn(e.to.block).filter((n) => tt(t, n)))
          .isSome(),
      UU = (e) => wt(e.from.block.dom) === !1 && wt(e.to.block.dom) === !1,
      zU = (e, t, n) =>
        Dt(n.position.getNode()) && Ht(n.block) === !1
          ? si(!1, n.block.dom)
              .bind((s) =>
                s.isEqual(n.position)
                  ? Fn(t, e, s).bind((o) => mm(e, o))
                  : g.some(n)
              )
              .getOr(n)
          : n,
      HU = (e, t, n) => {
        const s = mm(e, L.fromRangeStart(n)),
          o = s.bind((r) =>
            Fn(t, e, r.position).bind((i) => mm(e, i).map((a) => zU(e, t, a)))
          );
        return En(s, o, LU).filter((r) => FU(r) && MU(r) && UU(r));
      },
      VU = (e, t, n) => (n.collapsed ? HU(e, t, n) : g.none()),
      WU = (e) => {
        const t = Yt(e);
        return Ne(t, Ss).fold(K(t), (n) => t.slice(0, n));
      },
      n0 = (e) => {
        const t = WU(e);
        return T(t, At), t;
      },
      s0 = (e, t) => {
        const n = no(t, e);
        return de(n.reverse(), (s) => Ht(s)).each(At);
      },
      jU = (e) => H(ah(e), (t) => !Ht(t)).length === 0,
      qU = (e, t, n, s) => {
        if (Ht(n)) return mr(n), mn(n.dom);
        jU(s) && Ht(t) && Xn(s, S.fromTag("br"));
        const o = Ts(n.dom, L.before(s.dom));
        return (
          T(n0(t), (r) => {
            Xn(s, r);
          }),
          s0(e, t),
          o
        );
      },
      KU = (e, t, n) => {
        if (Ht(n)) return At(n), Ht(t) && mr(t), mn(t.dom);
        const s = Rs(n.dom);
        return (
          T(n0(t), (o) => {
            It(n, o);
          }),
          s0(e, t),
          s
        );
      },
      GU = (e, t) => {
        const n = no(t, e);
        return g.from(n[n.length - 1]);
      },
      YU = (e, t) => (Qs(t, e) ? GU(t, e) : g.none()),
      o0 = (e, t) => {
        si(e, t.dom)
          .map((n) => n.getNode())
          .map(S.fromDom)
          .filter(jr)
          .each(At);
      },
      r0 = (e, t, n) => (
        o0(!0, t), o0(!1, n), YU(t, n).fold(oe(KU, e, t, n), oe(qU, e, t, n))
      ),
      i0 = (e, t, n, s) => (t ? r0(e, s, n) : r0(e, n, s)),
      pm = (e, t) => {
        const n = S.fromDom(e.getBody());
        return VU(n.dom, t, e.selection.getRng()).map((o) => () => {
          i0(n, t, o.from.block, o.to.block).each((r) => {
            e.selection.setRng(r.toRange());
          });
        });
      },
      XU = (e, t) => {
        const n = t.getRng();
        return En(
          wc(e, S.fromDom(n.startContainer)),
          wc(e, S.fromDom(n.endContainer)),
          (s, o) =>
            tt(s, o) === !1
              ? g.some(() => {
                  n.deleteContents(),
                    i0(e, !0, s, o).each((r) => {
                      t.setRng(r.toRange());
                    });
                })
              : g.none()
        ).getOr(g.none());
      },
      a0 = (e, t) => {
        const n = S.fromDom(t),
          s = oe(tt, e);
        return Wr(n, pl, s).isSome();
      },
      QU = (e, t) => a0(e, t.startContainer) || a0(e, t.endContainer),
      ZU = (e, t) => {
        const n = Ts(e.dom, L.fromRangeStart(t)).isNone(),
          s = ss(e.dom, L.fromRangeEnd(t)).isNone();
        return !QU(e, t) && n && s;
      },
      JU = (e) =>
        g.some(() => {
          e.setContent(""), e.selection.setCursorLocation();
        }),
      ez = (e) => {
        const t = S.fromDom(e.getBody()),
          n = e.selection.getRng();
        return ZU(t, n) ? JU(e) : XU(t, e.selection);
      },
      gm = (e, t) => (e.selection.isCollapsed() ? g.none() : ez(e)),
      tz = Zs,
      nz = wt,
      oo = (e, t, n, s, o) =>
        g.from(t._selectionOverrides.showCaret(e, n, s, o)),
      sz = (e) => {
        const t = e.ownerDocument.createRange();
        return t.selectNode(e), t;
      },
      Aa = (e, t) =>
        e.dispatch("BeforeObjectSelected", { target: t }).isDefaultPrevented()
          ? g.none()
          : g.some(sz(t)),
      oz = (e, t, n) => {
        const s = Rf(1, e.getBody(), t),
          o = L.fromRangeStart(s),
          r = o.getNode();
        if (ia(r)) return oo(1, e, r, !o.isAtEnd(), !1);
        const i = o.getNode(!0);
        if (ia(i)) return oo(1, e, i, !1, !1);
        const a = e.dom.getParent(o.getNode(), (c) => nz(c) || tz(c));
        return ia(a) ? oo(1, e, a, !1, n) : g.none();
      },
      hm = (e, t, n) => (t.collapsed ? oz(e, t, n).getOr(t) : t),
      rz = (e) => fr(e) || ya(e),
      iz = (e) => dr(e) || va(e),
      az = (e, t) => {
        ne(t) && t.data.length === 0 && e.remove(t);
      },
      l0 = (e, t, n, s, o, r) => {
        oo(s, e, r.getNode(!o), o, !0).each((i) => {
          if (t.collapsed) {
            const a = t.cloneRange();
            o
              ? a.setEnd(i.startContainer, i.startOffset)
              : a.setStart(i.endContainer, i.endOffset),
              a.deleteContents();
          } else t.deleteContents();
          e.selection.setRng(i);
        }),
          az(e.dom, n);
      },
      lz = (e, t) => {
        const n = e.selection.getRng();
        if (!ne(n.commonAncestorContainer)) return g.none();
        const s = t ? Vt.Forwards : Vt.Backwards,
          o = As(e.getBody()),
          r = oe(Pf, t ? o.next : o.prev),
          i = t ? rz : iz,
          a = fa(s, e.getBody(), n),
          c = zn(t, r(a));
        if (!c || !Bl(a, c)) return g.none();
        if (i(c)) return g.some(() => l0(e, n, a.getNode(), s, t, c));
        const f = r(c);
        return f && i(f) && Bl(c, f)
          ? g.some(() => l0(e, n, a.getNode(), s, t, f))
          : g.none();
      },
      bm = (e, t) => lz(e, t),
      cz = (e) => pl(S.fromDom(e)) || Xi(S.fromDom(e)),
      Pn = _s.generate([
        { remove: ["element"] },
        { moveToElement: ["element"] },
        { moveToPosition: ["position"] },
      ]),
      uz = (e, t) => {
        const n = t.getNode(e === !1),
          s = e ? "after" : "before";
        return ve(n) && n.getAttribute("data-mce-caret") === s;
      },
      fz = (e, t, n, s) => {
        const o = (r) => Yu(S.fromDom(r)) && !ks(n, s, e);
        return fC(!t, n).fold(() => fC(t, s).fold(mt, o), o);
      },
      c0 = (e, t, n, s) => {
        const o = s.getNode(t === !1);
        return wc(S.fromDom(e), S.fromDom(n.getNode()))
          .map((r) => (Ht(r) ? Pn.remove(r.dom) : Pn.moveToElement(o)))
          .orThunk(() => g.some(Pn.moveToElement(o)));
      },
      u0 = (e, t, n) =>
        Fn(t, e, n).bind((s) =>
          cz(s.getNode()) || fz(e, t, n, s)
            ? g.none()
            : (t && wt(s.getNode())) || (t === !1 && wt(s.getNode(!0)))
            ? c0(e, t, n, s)
            : (t && dr(n)) || (t === !1 && fr(n))
            ? g.some(Pn.moveToPosition(s))
            : g.none()
        ),
      dz = (e, t) =>
        e && wt(t.nextSibling)
          ? g.some(Pn.moveToElement(t.nextSibling))
          : e === !1 && wt(t.previousSibling)
          ? g.some(Pn.moveToElement(t.previousSibling))
          : g.none(),
      mz = (e, t, n) =>
        n.fold(
          (s) => g.some(Pn.remove(s)),
          (s) => g.some(Pn.moveToElement(s)),
          (s) => (ks(t, s, e) ? g.none() : g.some(Pn.moveToPosition(s)))
        ),
      pz = (e, t, n) =>
        uz(t, n)
          ? dz(t, n.getNode(t === !1)).fold(() => u0(e, t, n), g.some)
          : u0(e, t, n).bind((s) => mz(e, n, s)),
      gz = (e, t, n) => {
        const s = Rf(t ? 1 : -1, e, n),
          o = L.fromRangeStart(s),
          r = S.fromDom(e);
        return t === !1 && dr(o)
          ? g.some(Pn.remove(o.getNode(!0)))
          : t && fr(o)
          ? g.some(Pn.remove(o.getNode()))
          : t === !1 && fr(o) && bd(r, o)
          ? UD(r, o).map((i) => Pn.remove(i.getNode()))
          : t && dr(o) && hd(r, o)
          ? zD(r, o).map((i) => Pn.remove(i.getNode()))
          : pz(e, t, o);
      },
      hz = (e, t) => (n) => (
        e._selectionOverrides.hideFakeCaret(), pr(e, t, S.fromDom(n)), !0
      ),
      bz = (e, t) => (n) => {
        const s = t ? L.before(n) : L.after(n);
        return e.selection.setRng(s.toRange()), !0;
      },
      Cz = (e) => (t) => (e.selection.setRng(t.toRange()), !0),
      f0 = (e, t) => g.from(xa(e.getBody(), t)),
      yz = (e, t) => {
        const n = e.selection.getNode();
        return f0(e, n)
          .filter(wt)
          .fold(
            () =>
              gz(e.getBody(), t, e.selection.getRng()).map(
                (s) => () => s.fold(hz(e, t), bz(e, t), Cz(e))
              ),
            () => g.some(Ie)
          );
      },
      vz = (e) => {
        T(xn(e, ".mce-offscreen-selection"), At);
      },
      Ez = (e, t) => {
        const n = e.selection.getNode();
        return wt(n) && !dl(n)
          ? f0(e, n.parentNode)
              .filter(wt)
              .fold(
                () =>
                  g.some(() => {
                    vz(S.fromDom(e.getBody())),
                      pr(e, t, S.fromDom(e.selection.getNode())),
                      t0(e);
                  }),
                () => g.some(Ie)
              )
          : g.none();
      },
      d0 = (e) => {
        const t = e.dom,
          n = e.selection,
          s = xa(e.getBody(), n.getNode());
        if (Zs(s) && t.isBlock(s) && t.isEmpty(s)) {
          const o = t.create("br", { "data-mce-bogus": "1" });
          t.setHTML(s, ""), s.appendChild(o), n.setRng(L.before(o).toRange());
        }
        return !0;
      },
      Cm = (e, t) => (e.selection.isCollapsed() ? yz(e, t) : Ez(e, t)),
      xz = (e, t) => {
        const n = L.fromRangeStart(e.selection.getRng());
        return Fn(t, e.getBody(), n)
          .filter((s) => (t ? RD(s) : PD(s)))
          .bind((s) => g.from(Tf(t ? 0 : -1, s)))
          .map((s) => () => e.selection.select(s));
      },
      ym = (e, t) => (e.selection.isCollapsed() ? xz(e, t) : g.none()),
      hi = ne,
      m0 = (e) => hi(e) && e.data[0] === Kt,
      p0 = (e) => hi(e) && e.data[e.data.length - 1] === Kt,
      g0 = (e) => e.ownerDocument.createTextNode(Kt),
      wz = (e) => {
        if (hi(e.previousSibling))
          return (
            p0(e.previousSibling) || e.previousSibling.appendData(Kt),
            e.previousSibling
          );
        if (hi(e)) return m0(e) || e.insertData(0, Kt), e;
        {
          const t = g0(e);
          return e.parentNode.insertBefore(t, e), t;
        }
      },
      Sz = (e) => {
        if (hi(e.nextSibling))
          return (
            m0(e.nextSibling) || e.nextSibling.insertData(0, Kt), e.nextSibling
          );
        if (hi(e)) return p0(e) || e.appendData(Kt), e;
        {
          const t = g0(e);
          return (
            e.nextSibling
              ? e.parentNode.insertBefore(t, e.nextSibling)
              : e.parentNode.appendChild(t),
            t
          );
        }
      },
      Sc = (e, t) => (e ? wz(t) : Sz(t)),
      _z = oe(Sc, !0),
      kz = oe(Sc, !1),
      h0 = (e, t) =>
        ne(e.container()) ? Sc(t, e.container()) : Sc(t, e.getNode()),
      b0 = (e, t) => {
        const n = t.get();
        return n && e.container() === n && Gr(n);
      },
      vm = (e, t) =>
        t.fold(
          (n) => {
            ar(e.get());
            const s = _z(n);
            return e.set(s), g.some(L(s, s.length - 1));
          },
          (n) =>
            mn(n).map((s) => {
              if (b0(s, e)) return L(e.get(), 1);
              {
                ar(e.get());
                const o = h0(s, !0);
                return e.set(o), L(o, 1);
              }
            }),
          (n) =>
            Rs(n).map((s) => {
              if (b0(s, e)) return L(e.get(), e.get().length - 1);
              {
                ar(e.get());
                const o = h0(s, !1);
                return e.set(o), L(o, o.length - 1);
              }
            }),
          (n) => {
            ar(e.get());
            const s = kz(n);
            return e.set(s), g.some(L(s, 1));
          }
        ),
      C0 = (e, t) => {
        for (let n = 0; n < e.length; n++) {
          const s = e[n].apply(null, t);
          if (s.isSome()) return s;
        }
        return g.none();
      },
      sn = _s.generate([
        { before: ["element"] },
        { start: ["element"] },
        { end: ["element"] },
        { after: ["element"] },
      ]),
      y0 = (e, t) => {
        const n = Ro(t, e);
        return n || e;
      },
      Nz = (e, t, n) => {
        const s = ZE(n),
          o = y0(t, s.container());
        return Bo(e, o, s).fold(
          () =>
            ss(o, s)
              .bind(oe(Bo, e, o))
              .map((r) => sn.before(r)),
          g.none
        );
      },
      Az = (e, t) => cr(e, t) === null,
      v0 = (e, t, n) => Bo(e, t, n).filter(oe(Az, t)),
      Tz = (e, t, n) => {
        const s = JE(n);
        return v0(e, t, s).bind((o) =>
          Ts(o, s).isNone() ? g.some(sn.start(o)) : g.none()
        );
      },
      Rz = (e, t, n) => {
        const s = ZE(n);
        return v0(e, t, s).bind((o) =>
          ss(o, s).isNone() ? g.some(sn.end(o)) : g.none()
        );
      },
      Pz = (e, t, n) => {
        const s = JE(n),
          o = y0(t, s.container());
        return Bo(e, o, s).fold(
          () =>
            Ts(o, s)
              .bind(oe(Bo, e, o))
              .map((r) => sn.after(r)),
          g.none
        );
      },
      E0 = (e) => NU(Em(e)) === !1,
      $s = (e, t, n) => C0([Nz, Tz, Rz, Pz], [e, t, n]).filter(E0),
      Em = (e) => e.fold(xt, xt, xt, xt),
      x0 = (e) => e.fold(K("before"), K("start"), K("end"), K("after")),
      _c = (e) => e.fold(sn.before, sn.before, sn.after, sn.after),
      xm = (e) => e.fold(sn.start, sn.start, sn.end, sn.end),
      Oz = (e, t) => x0(e) === x0(t) && Em(e) === Em(t),
      Dz = (e, t, n, s, o, r) =>
        En(Bo(t, n, s), Bo(t, n, o), (i, a) =>
          i !== a && TU(n, i, a) ? sn.after(e ? i : a) : r
        ).getOr(r),
      Bz = (e, t) => e.fold(rt, (n) => !Oz(n, t)),
      Iz = (e, t, n, s, o) => {
        const r = zn(e, o);
        return Fn(e, n, r)
          .map(oe(zn, e))
          .fold(
            () => s.map(_c),
            (c) => $s(t, n, c).map(oe(Dz, e, t, n, r, c)).filter(oe(Bz, s))
          )
          .filter(E0);
      },
      $z = (e, t) =>
        e
          ? t.fold(Ot(g.some, sn.start), g.none, Ot(g.some, sn.after), g.none)
          : t.fold(g.none, Ot(g.some, sn.before), g.none, Ot(g.some, sn.end)),
      Lz = (e, t, n, s) => {
        const o = zn(e, s),
          r = $s(t, n, o);
        return $s(t, n, o)
          .bind(oe($z, e))
          .orThunk(() => Iz(e, t, n, r, s));
      },
      Fz = (e) => Ye(e.selection.getSel().modify),
      w0 = (e, t, n) => {
        const s = e ? 1 : -1;
        return (
          t.setRng(L(n.container(), n.offset() + s).toRange()),
          t.getSel().modify("move", e ? "forward" : "backward", "word"),
          !0
        );
      },
      Mz = (e, t) => {
        const n = t.selection.getRng(),
          s = e ? L.fromRangeEnd(n) : L.fromRangeStart(n);
        return Fz(t)
          ? e && Qu(s)
            ? w0(!0, t.selection, s)
            : !e && Zu(s)
            ? w0(!1, t.selection, s)
            : !1
          : !1;
      };
    var Ls;
    (function (e) {
      (e[(e.Br = 0)] = "Br"),
        (e[(e.Block = 1)] = "Block"),
        (e[(e.Wrap = 2)] = "Wrap"),
        (e[(e.Eol = 3)] = "Eol");
    })(Ls || (Ls = {}));
    const kc = (e, t) => (e === Vt.Backwards ? nt(t) : t),
      Uz = (e, t, n) => (e === Vt.Forwards ? t.next(n) : t.prev(n)),
      zz = (e, t, n, s) =>
        Dt(s.getNode(t === Vt.Forwards))
          ? Ls.Br
          : ks(n, s) === !1
          ? Ls.Block
          : Ls.Wrap,
      S0 = (e, t, n, s) => {
        const o = As(n);
        let r = s;
        const i = [];
        for (; r; ) {
          const a = Uz(t, o, r);
          if (!a) break;
          if (Dt(a.getNode(!1)))
            return t === Vt.Forwards
              ? {
                  positions: kc(t, i).concat([a]),
                  breakType: Ls.Br,
                  breakAt: g.some(a),
                }
              : { positions: kc(t, i), breakType: Ls.Br, breakAt: g.some(a) };
          if (!a.isVisible()) {
            r = a;
            continue;
          }
          if (e(r, a)) {
            const c = zz(n, t, r, a);
            return { positions: kc(t, i), breakType: c, breakAt: g.some(a) };
          }
          i.push(a), (r = a);
        }
        return { positions: kc(t, i), breakType: Ls.Eol, breakAt: g.none() };
      },
      _0 = (e, t, n, s) =>
        t(n, s)
          .breakAt.map((o) => {
            const r = t(n, o).positions;
            return e === Vt.Backwards ? r.concat(o) : [o].concat(r);
          })
          .getOr([]),
      wm = (e, t) =>
        X(
          e,
          (n, s) =>
            n.fold(
              () => g.some(s),
              (o) =>
                En(Ut(o.getClientRects()), Ut(s.getClientRects()), (r, i) => {
                  const a = Math.abs(t - r.left);
                  return Math.abs(t - i.left) <= a ? s : o;
                }).or(n)
            ),
          g.none()
        ),
      k0 = (e, t) => Ut(t.getClientRects()).bind((n) => wm(e, n.left)),
      Ta = oe(S0, L.isAbove, -1),
      Ra = oe(S0, L.isBelow, 1),
      Hz = oe(_0, -1, Ta),
      Vz = oe(_0, 1, Ra),
      Wz = (e, t) => Ta(e, t).breakAt.isNone(),
      jz = (e, t) => Ra(e, t).breakAt.isNone(),
      qz = (e) =>
        mn(e)
          .map((t) => [t].concat(Ra(e, t).positions))
          .getOr([]),
      Kz = (e) =>
        Rs(e)
          .map((t) => Ta(e, t).positions.concat(t))
          .getOr([]),
      Gz = wt,
      N0 = (e, t) => Math.abs(e.left - t),
      A0 = (e, t) => Math.abs(e.right - t),
      Yz = (e) => Fr(e, "node"),
      T0 = (e, t) =>
        tl(e, (n, s) => {
          const o = Math.min(N0(n, t), A0(n, t)),
            r = Math.min(N0(s, t), A0(s, t));
          return (r === o && Yz(s) && Gz(s.node)) || r < o ? s : n;
        }),
      Xz = (e) => {
        const t = (n) =>
          U(n, (s) => {
            const o = or(s);
            return (o.node = e), o;
          });
        if (ve(e)) return t(e.getClientRects());
        if (ne(e)) {
          const n = e.ownerDocument.createRange();
          return (
            n.setStart(e, 0), n.setEnd(e, e.data.length), t(n.getClientRects())
          );
        } else return [];
      },
      R0 = (e) => qe(e, Xz);
    var Pa;
    (function (e) {
      (e[(e.Up = -1)] = "Up"), (e[(e.Down = 1)] = "Down");
    })(Pa || (Pa = {}));
    const Qz = (e, t, n, s) => {
        for (; (s = la(s, e, zh, t)); ) if (n(s)) return;
      },
      P0 = (e, t, n, s, o, r) => {
        let i = 0;
        const a = [],
          c = (p) => {
            let C = R0([p]);
            e === -1 && (C = C.reverse());
            for (let b = 0; b < C.length; b++) {
              const x = C[b];
              if (!n(x, f)) {
                if ((a.length > 0 && t(x, bo(a)) && i++, (x.line = i), o(x)))
                  return !0;
                a.push(x);
              }
            }
          },
          f = bo(r.getClientRects());
        if (!f) return a;
        const d = r.getNode();
        return c(d), Qz(e, s, c, d), a;
      },
      Zz = (e, t) => t.line > e,
      Jz = (e, t) => t.line === e,
      eH = oe(P0, Pa.Up, ta, na),
      tH = oe(P0, Pa.Down, na, ta),
      nH = (e, t, n, s) => {
        const o = As(t);
        let r, i, a, c;
        const f = [];
        let d = 0;
        const p = (b) => bo(b.getClientRects());
        e === 1
          ? ((r = o.next), (i = na), (a = ta), (c = L.after(s)))
          : ((r = o.prev), (i = ta), (a = na), (c = L.before(s)));
        const C = p(c);
        do {
          if (!c.isVisible()) continue;
          const b = p(c);
          if (a(b, C)) continue;
          f.length > 0 && i(b, bo(f)) && d++;
          const x = or(b);
          if (((x.position = c), (x.line = d), n(x))) return f;
          f.push(x);
        } while ((c = r(c)));
        return f;
      },
      O0 = (e) => (t) => Zz(e, t),
      Sm = (e) => (t) => Jz(e, t),
      Io = (e, t) => {
        e.selection.setRng(t), ba(e, e.selection.getRng());
      },
      _m = (e, t, n) => g.some(hm(e, t, n)),
      D0 = (e, t, n, s, o, r) => {
        const i = t === Vt.Forwards,
          a = As(e.getBody()),
          c = oe(Pf, i ? a.next : a.prev),
          f = i ? s : o;
        if (!n.collapsed) {
          const x = kl(n);
          if (r(x)) return oo(t, e, x, t === Vt.Backwards, !1);
        }
        const d = fa(t, e.getBody(), n);
        if (f(d)) return Aa(e, d.getNode(!i));
        const p = zn(i, c(d)),
          C = Fh(n);
        if (!p) return C ? g.some(n) : g.none();
        if (f(p)) return oo(t, e, p.getNode(!i), i, !1);
        const b = c(p);
        return b && f(b) && Bl(p, b)
          ? oo(t, e, b.getNode(!i), i, !1)
          : C
          ? _m(e, p.toRange(), !1)
          : g.none();
      },
      B0 = (e, t, n, s, o, r) => {
        const i = fa(t, e.getBody(), n),
          a = bo(i.getClientRects()),
          c = t === Pa.Down;
        if (!a) return g.none();
        const d = (c ? tH : eH)(e.getBody(), O0(1), i),
          p = H(d, Sm(1)),
          C = a.left,
          b = T0(p, C);
        if (b && r(b.node)) {
          const y = Math.abs(C - b.left),
            E = Math.abs(C - b.right);
          return oo(t, e, b.node, y < E, !1);
        }
        let x;
        if (
          (s(i) ? (x = i.getNode()) : o(i) ? (x = i.getNode(!0)) : (x = kl(n)),
          x)
        ) {
          const y = nH(t, e.getBody(), O0(1), x);
          let E = T0(H(y, Sm(1)), C);
          if (E || ((E = bo(H(y, Sm(0)))), E))
            return _m(e, E.position.toRange(), !1);
        }
        return p.length === 0
          ? km(e, c)
              .filter(c ? o : s)
              .map((y) => hm(e, y.toRange(), !1))
          : g.none();
      },
      km = (e, t) => {
        const n = e.selection.getRng(),
          s = t ? L.fromRangeEnd(n) : L.fromRangeStart(n),
          o = CR(s.container(), e.getBody());
        if (t) {
          const r = Ra(o, s);
          return Cs(r.positions);
        } else {
          const r = Ta(o, s);
          return Ut(r.positions);
        }
      },
      I0 = (e, t, n) =>
        km(e, t)
          .filter(n)
          .exists((s) => (e.selection.setRng(s.toRange()), !0)),
      Nc = (e, t) => {
        const n = e.dom.createRng();
        n.setStart(t.container(), t.offset()),
          n.setEnd(t.container(), t.offset()),
          e.selection.setRng(n);
      },
      $0 = (e, t) => {
        e
          ? t.setAttribute("data-mce-selected", "inline-boundary")
          : t.removeAttribute("data-mce-selected");
      },
      L0 = (e, t, n) => vm(t, n).map((s) => (Nc(e, s), n)),
      sH = (e, t, n) => {
        const s = e.getBody(),
          o = L.fromRangeStart(e.selection.getRng()),
          r = oe(br, e);
        return Lz(n, r, s, o).bind((a) => L0(e, t, a));
      },
      oH = (e, t, n) => {
        const s = U(
            xn(
              S.fromDom(t.getRoot()),
              '*[data-mce-selected="inline-boundary"]'
            ),
            (i) => i.dom
          ),
          o = H(s, e),
          r = H(n, e);
        T(gt(o, r), oe($0, !1)), T(gt(r, o), oe($0, !0));
      },
      rH = (e, t) => {
        if (e.selection.isCollapsed() && e.composing !== !0 && t.get()) {
          const n = L.fromRangeStart(e.selection.getRng());
          L.isTextPosition(n) &&
            RU(n) === !1 &&
            (Nc(e, aR(t.get(), n)), t.set(null));
        }
      },
      iH = (e, t, n, s) => {
        if (t.selection.isCollapsed()) {
          const o = H(s, e);
          T(o, (r) => {
            const i = L.fromRangeStart(t.selection.getRng());
            $s(e, t.getBody(), i).bind((a) => L0(t, n, a));
          });
        }
      },
      F0 = (e, t, n) => (ra(e) ? sH(e, t, n).isSome() : !1),
      M0 = (e, t, n) => (ra(t) ? Mz(e, t) : !1),
      aH = (e) => {
        const t = $t(null),
          n = oe(br, e);
        return (
          e.on("NodeChange", (s) => {
            ra(e) &&
              (oH(n, e.dom, s.parents), rH(e, t), iH(n, e, t, s.parents));
          }),
          t
        );
      },
      lH = oe(M0, !0),
      cH = oe(M0, !1),
      Ac = (e, t, n) => {
        if (ra(e)) {
          const s = km(e, t).getOrThunk(() => {
            const o = e.selection.getRng();
            return t ? L.fromRangeEnd(o) : L.fromRangeStart(o);
          });
          return $s(oe(br, e), e.getBody(), s).exists((o) => {
            const r = _c(o);
            return vm(n, r).exists((i) => (Nc(e, i), !0));
          });
        } else return !1;
      },
      uH = (e, t) => {
        const n = document.createRange();
        return (
          n.setStart(e.container(), e.offset()),
          n.setEnd(t.container(), t.offset()),
          n
        );
      },
      fH = (e) =>
        En(mn(e), Rs(e), (t, n) => {
          const s = zn(!0, t),
            o = zn(!1, n);
          return ss(e, s).forall((r) => r.isEqual(o));
        }).getOr(!0),
      U0 = (e, t) => (n) => vm(t, n).map((s) => () => Nc(e, s)),
      z0 = (e, t, n, s) => {
        const o = e.getBody(),
          r = oe(br, e);
        e.undoManager.ignore(() => {
          e.selection.setRng(uH(n, s)),
            dm(e),
            $s(r, o, L.fromRangeStart(e.selection.getRng()))
              .map(xm)
              .bind(U0(e, t))
              .each(jo);
        }),
          e.nodeChanged();
      },
      dH = (e, t) => {
        const n = Ro(t, e);
        return n || e;
      },
      mH = (e, t, n, s) => {
        const o = dH(e.getBody(), s.container()),
          r = oe(br, e),
          i = $s(r, o, s);
        return i
          .bind((c) =>
            n
              ? c.fold(K(g.some(xm(c))), g.none, K(g.some(_c(c))), g.none)
              : c.fold(g.none, K(g.some(_c(c))), g.none, K(g.some(xm(c))))
          )
          .map(U0(e, t))
          .getOrThunk(() => {
            const c = $l(n, o, s),
              f = c.bind((d) => $s(r, o, d));
            return En(i, f, () =>
              Bo(r, o, s).bind((d) =>
                fH(d)
                  ? g.some(() => {
                      pr(e, n, S.fromDom(d));
                    })
                  : g.none()
              )
            ).getOrThunk(() =>
              f.bind(() =>
                c.map((d) => () => {
                  n ? z0(e, t, s, d) : z0(e, t, d, s);
                })
              )
            );
          });
      },
      Nm = (e, t, n) => {
        if (e.selection.isCollapsed() && ra(e)) {
          const s = L.fromRangeStart(e.selection.getRng());
          return mH(e, t, n, s);
        }
        return g.none();
      },
      pH = (e, t) => {
        const n = no(t, e);
        return Ne(n, Ss).fold(K(n), (s) => n.slice(0, s));
      },
      gH = (e) => uh(e) === 1,
      hH = (e, t, n, s) => {
        const o = oe(qI, t),
          r = U(H(s, o), (i) => i.dom);
        if (r.length === 0) pr(t, e, n);
        else {
          const i = jI(n.dom, r);
          t.selection.setRng(i.toRange());
        }
      },
      bH = (e, t) => {
        const n = S.fromDom(e.getBody()),
          s = S.fromDom(e.selection.getStart()),
          o = H(pH(n, s), gH);
        return Cs(o).bind((r) => {
          const i = L.fromRangeStart(e.selection.getRng());
          return IU(t, i, r.dom) && !KI(r)
            ? g.some(() => hH(t, e, r, o))
            : g.none();
        });
      },
      Am = (e, t) => (e.selection.isCollapsed() ? bH(e, t) : g.none()),
      Tm = (e, t, n) =>
        g.some(() => {
          e._selectionOverrides.hideFakeCaret(), pr(e, t, S.fromDom(n));
        }),
      CH = (e, t) => {
        const n = t ? ya : va,
          s = t ? Vt.Forwards : Vt.Backwards,
          o = fa(s, e.getBody(), e.selection.getRng());
        return n(o)
          ? Tm(e, t, o.getNode(!t))
          : g
              .from(zn(t, o))
              .filter((r) => n(r) && Bl(o, r))
              .map((r) => () => Tm(e, t, r.getNode(!t)));
      },
      yH = (e, t) => {
        const n = e.selection.getNode();
        return ws(n) ? Tm(e, t, n) : g.none();
      },
      Rm = (e, t) => (e.selection.isCollapsed() ? CH(e, t) : yH(e, t)),
      vH = (e) => ml(e, (t) => Zs(t.dom) || wt(t.dom)).exists((t) => Zs(t.dom)),
      Pm = (e) => {
        const t = parseInt(e, 10);
        return isNaN(t) ? 0 : t;
      },
      H0 = (e, t) => {
        const n = e || WN(t) ? "margin" : "padding",
          s = xs(t, "direction") === "rtl" ? "-right" : "-left";
        return n + s;
      },
      EH = (e, t, n, s, o, r) => {
        const i = H0(n, S.fromDom(r));
        if (t === "outdent") {
          const a = Math.max(0, Pm(r.style[i]) - s);
          e.setStyle(r, i, a ? a + o : "");
        } else {
          const a = Pm(r.style[i]) + s + o;
          e.setStyle(r, i, a);
        }
      },
      xH = (e, t) =>
        it(t, (n) => {
          const s = H0(Wb(e), n),
            o = ll(n, s).map(Pm).getOr(0);
          return e.dom.getContentEditable(n.dom) !== "false" && o > 0;
        }),
      V0 = (e) => {
        const t = j0(e);
        return !e.mode.isReadOnly() && (t.length > 1 || xH(e, t));
      },
      W0 = (e) => Xu(e) || Xi(e),
      wH = (e) => Yn(e).exists(W0),
      j0 = (e) =>
        H(
          pN(e.selection.getSelectedBlocks()),
          (t) => !W0(t) && !wH(t) && vH(t)
        ),
      q0 = (e, t) => {
        const { dom: n } = e,
          s = l1(e),
          o = /[a-z%]+$/i.exec(s)[0],
          r = parseInt(s, 10),
          i = Wb(e);
        T(j0(e), (a) => {
          EH(n, t, i, r, o, a.dom);
        });
      },
      SH = (e) => q0(e, "indent"),
      K0 = (e) => q0(e, "outdent"),
      G0 = (e) => {
        if (e.selection.isCollapsed() && V0(e)) {
          const t = e.dom,
            n = e.selection.getRng(),
            s = L.fromRangeStart(n),
            o = t.getParent(n.startContainer, t.isBlock);
          if (o !== null && gd(S.fromDom(o), s)) return g.some(() => K0(e));
        }
        return g.none();
      },
      Y0 = (e, t, n) =>
        en([G0, Cm, bm, (s, o) => Nm(s, t, o), pm, Ad, ym, Rm, gm, Am], (s) =>
          s(e, n)
        ),
      _H = (e, t) => {
        Y0(e, t, !1).fold(() => {
          dm(e), t0(e);
        }, jo);
      },
      kH = (e, t) => {
        Y0(e, t, !0).fold(() => PU(e), jo);
      },
      NH = (e, t) => {
        e.addCommand("delete", () => {
          _H(e, t);
        }),
          e.addCommand("forwardDelete", () => {
            kH(e, t);
          });
      },
      X0 = 5,
      AH = 400,
      Q0 = (e) =>
        e.touches === void 0 || e.touches.length !== 1
          ? g.none()
          : g.some(e.touches[0]),
      TH = (e, t) => {
        const n = Math.abs(e.clientX - t.x),
          s = Math.abs(e.clientY - t.y);
        return n > X0 || s > X0;
      },
      RH = (e) => {
        const t = No(),
          n = $t(!1),
          s = mf((o) => {
            e.dispatch("longpress", ct(Se({}, o), { type: "longpress" })),
              n.set(!0);
          }, AH);
        e.on(
          "touchstart",
          (o) => {
            Q0(o).each((r) => {
              s.cancel();
              const i = { x: r.clientX, y: r.clientY, target: o.target };
              s.throttle(o), n.set(!1), t.set(i);
            });
          },
          !0
        ),
          e.on(
            "touchmove",
            (o) => {
              s.cancel(),
                Q0(o).each((r) => {
                  t.on((i) => {
                    TH(r, i) &&
                      (t.clear(), n.set(!1), e.dispatch("longpresscancel"));
                  });
                });
            },
            !0
          ),
          e.on(
            "touchend touchcancel",
            (o) => {
              s.cancel(),
                o.type !== "touchcancel" &&
                  t
                    .get()
                    .filter((r) => r.target.isEqualNode(o.target))
                    .each(() => {
                      n.get()
                        ? o.preventDefault()
                        : e.dispatch("tap", ct(Se({}, o), { type: "tap" }));
                    });
            },
            !0
          );
      },
      Om = (e, t) => Fe(e, t.nodeName),
      PH = (e, t) => (ne(t) ? !0 : ve(t) ? !Om(e, t) && !Mn(t) : !1),
      OH = (e, t, n) => M(Vy(S.fromDom(n), S.fromDom(t)), (s) => Om(e, s.dom)),
      DH = (e, t) => {
        if (ne(t)) {
          if (t.nodeValue.length === 0) return !0;
          if (
            /^\s+$/.test(t.nodeValue) &&
            (!t.nextSibling || Om(e, t.nextSibling))
          )
            return !0;
        }
        return !1;
      },
      BH = (e) => {
        const t = e.dom,
          n = e.selection,
          s = e.schema,
          o = s.getBlockElements();
        let r = n.getStart();
        const i = e.getBody();
        let a, c, f;
        const d = wn(e);
        if (!r || !ve(r)) return;
        const p = i.nodeName.toLowerCase();
        if (!s.isValidChild(p, d.toLowerCase()) || OH(o, i, r)) return;
        const C = n.getRng(),
          b = C.startContainer,
          x = C.startOffset,
          y = C.endContainer,
          E = C.endOffset,
          _ = ur(e);
        for (r = i.firstChild; r; )
          if (PH(o, r)) {
            if (DH(o, r)) {
              (c = r), (r = r.nextSibling), t.remove(c);
              continue;
            }
            a ||
              ((a = t.create(d, ir(e))),
              r.parentNode.insertBefore(a, r),
              (f = !0)),
              (c = r),
              (r = r.nextSibling),
              a.appendChild(c);
          } else (a = null), (r = r.nextSibling);
        f &&
          _ &&
          (C.setStart(b, x), C.setEnd(y, E), n.setRng(C), e.nodeChanged());
      },
      IH = (e) => {
        e.on("NodeChange", oe(BH, e));
      },
      Z0 = (e) => (t) => (" " + t.attr("class") + " ").indexOf(e) !== -1,
      $H = (e, t, n) =>
        function (s) {
          const o = arguments,
            r = o[o.length - 2],
            i = r > 0 ? t.charAt(r - 1) : "";
          if (i === '"') return s;
          if (i === ">") {
            const a = t.lastIndexOf("<", r);
            if (
              a !== -1 &&
              t.substring(a, r).indexOf('contenteditable="false"') !== -1
            )
              return s;
          }
          return (
            '<span class="' +
            n +
            '" data-mce-content="' +
            e.dom.encode(o[0]) +
            '">' +
            e.dom.encode(typeof o[1] == "string" ? o[1] : o[0]) +
            "</span>"
          );
        },
      LH = (e, t, n) => {
        let s = t.length,
          o = n.content;
        if (n.format !== "raw") {
          for (; s--; ) o = o.replace(t[s], $H(e, o, Qb(e)));
          n.content = o;
        }
      },
      FH = (e) => {
        const t = "contenteditable",
          n = " " + G.trim(X1(e)) + " ",
          s = " " + G.trim(Qb(e)) + " ",
          o = Z0(n),
          r = Z0(s),
          i = Q1(e);
        i.length > 0 &&
          e.on("BeforeSetContent", (a) => {
            LH(e, i, a);
          }),
          e.parser.addAttributeFilter("class", (a) => {
            let c = a.length;
            for (; c--; ) {
              const f = a[c];
              o(f) ? f.attr(t, "true") : r(f) && f.attr(t, "false");
            }
          }),
          e.serializer.addAttributeFilter(t, (a) => {
            let c = a.length;
            for (; c--; ) {
              const f = a[c];
              (!o(f) && !r(f)) ||
                (i.length > 0 && f.attr("data-mce-content")
                  ? ((f.name = "#text"),
                    (f.type = 3),
                    (f.raw = !0),
                    (f.value = f.attr("data-mce-content")))
                  : f.attr(t, null));
            }
          });
      },
      MH = (e) =>
        Yi(S.fromDom(e.getBody()), "*[data-mce-caret]")
          .map((t) => t.dom)
          .getOrNull(),
      J0 = (e, t) => {
        t.hasAttribute("data-mce-caret") &&
          (Ju(t),
          e.selection.setRng(e.selection.getRng()),
          e.selection.scrollIntoView(t));
      },
      UH = (e, t) => {
        const n = MH(e);
        if (!!n) {
          if (t.type === "compositionstart") {
            t.preventDefault(), t.stopPropagation(), J0(e, n);
            return;
          }
          Lh(n) && (J0(e, n), e.undoManager.add());
        }
      },
      zH = (e) => {
        e.on("keyup compositionstart", oe(UH, e));
      },
      ex = wt,
      HH = (e, t, n) => D0(t, e, n, fr, dr, ex),
      VH = (e, t, n) =>
        B0(
          t,
          e,
          n,
          (r) => fr(r) || zy(r),
          (r) => dr(r) || Hy(r),
          ex
        ),
      WH = (e) => {
        const t = e.dom.create(wn(e));
        return (t.innerHTML = '<br data-mce-bogus="1">'), t;
      },
      tx = (e, t, n) => {
        const s = As(e.getBody()),
          o = oe(Pf, t === 1 ? s.next : s.prev);
        if (n.collapsed) {
          const r = e.dom.getParent(n.startContainer, "PRE");
          if (!r) return;
          if (!o(L.fromRangeStart(n))) {
            const a = S.fromDom(WH(e));
            t === 1 ? vo(S.fromDom(r), a) : Xn(S.fromDom(r), a),
              e.selection.select(a.dom, !0),
              e.selection.collapse();
          }
        }
      },
      jH = (e, t) => {
        const n = t ? Vt.Forwards : Vt.Backwards,
          s = e.selection.getRng();
        return HH(n, e, s).orThunk(() => (tx(e, n, s), g.none()));
      },
      qH = (e, t) => {
        const n = t ? 1 : -1,
          s = e.selection.getRng();
        return VH(n, e, s).orThunk(() => (tx(e, n, s), g.none()));
      },
      nx = (e, t) => jH(e, t).exists((n) => (Io(e, n), !0)),
      sx = (e, t) => qH(e, t).exists((n) => (Io(e, n), !0)),
      ox = (e, t) => I0(e, t, t ? dr : fr),
      KH = (e) => R(["figcaption"], bt(e)),
      GH = (e) => {
        const t = document.createRange();
        return t.setStartBefore(e.dom), t.setEndBefore(e.dom), t;
      },
      YH = (e, t, n) => {
        n ? It(e, t) : yh(e, t);
      },
      XH = (e, t, n, s) => {
        const o = S.fromTag(n),
          r = S.fromTag("br");
        return Es(o, s), It(o, r), YH(e, o, t), GH(r);
      },
      QH = (e, t) => {
        const n = oe(tt, t);
        return ml(S.fromDom(e.container()), Ss, n).filter(KH);
      },
      ZH = (e, t, n) => (t ? jz(e.dom, n) : Wz(e.dom, n)),
      JH = (e, t) => {
        const n = S.fromDom(e.getBody()),
          s = L.fromRangeStart(e.selection.getRng()),
          o = wn(e),
          r = ir(e);
        return QH(s, n).exists(() => {
          if (ZH(n, t, s)) {
            const i = XH(n, t, o, r);
            return e.selection.setRng(i), !0;
          } else return !1;
        });
      },
      rx = (e, t) => (e.selection.isCollapsed() ? JH(e, t) : !1),
      ix = { shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0 },
      e3 = (e) => U(e, (t) => Se(ct(Se({}, ix), { action: Ie }), t)),
      t3 = (e) =>
        U(e, (t) => Se(ct(Se({}, ix), { action: () => g.none() }), t)),
      ax = (e, t) =>
        t.keyCode === e.keyCode &&
        t.shiftKey === e.shiftKey &&
        t.altKey === e.altKey &&
        t.ctrlKey === e.ctrlKey &&
        t.metaKey === e.metaKey,
      n3 = (e, t) => qe(e3(e), (n) => (ax(n, t) ? [n] : [])),
      s3 = (e, t) => qe(t3(e), (n) => (ax(n, t) ? [n] : [])),
      $e =
        (e, ...t) =>
        () =>
          e.apply(null, t),
      Oa = (e, t) => de(n3(e, t), (n) => n.action()),
      lx = (e, t) => en(s3(e, t), (n) => n.action()),
      cx = (e, t) => {
        const n = t ? Vt.Forwards : Vt.Backwards,
          s = e.selection.getRng();
        return D0(e, n, s, ya, va, ws).exists((o) => (Io(e, o), !0));
      },
      ux = (e, t) => {
        const n = t ? 1 : -1,
          s = e.selection.getRng();
        return B0(e, n, s, ya, va, ws).exists((o) => (Io(e, o), !0));
      },
      fx = (e, t) => I0(e, t, t ? va : ya),
      dx = _s.generate([
        { none: ["current"] },
        { first: ["current"] },
        { middle: ["current", "target"] },
        { last: ["current"] },
      ]),
      o3 = (e) => dx.none(e),
      Da = ct(Se({}, dx), { none: o3 }),
      r3 = (e, t) => mx(e, t, rt),
      mx = (e, t, n) =>
        qe(Yt(e), (s) => (Xs(s, t) ? (n(s) ? [s] : []) : mx(s, t, n))),
      i3 = (e, t, n = mt) => {
        if (n(t)) return g.none();
        if (R(e, bt(t))) return g.some(t);
        const s = (o) => Xs(o, "table") || n(o);
        return Gi(t, e.join(","), s);
      },
      a3 = (e, t) => i3(["td", "th"], e, t),
      l3 = (e) => r3(e, "th,td"),
      px = (e, t) => Jo(e, "table", t),
      Dm = (e, t, n, s, o = rt) => {
        const r = s === 1;
        if (!r && n <= 0) return Da.first(e[0]);
        if (r && n >= e.length - 1) return Da.last(e[e.length - 1]);
        {
          const i = n + s,
            a = e[i];
          return o(a) ? Da.middle(t, a) : Dm(e, t, i, s, o);
        }
      },
      gx = (e, t) =>
        px(e, t).bind((n) => {
          const s = l3(n);
          return Ne(s, (r) => tt(e, r)).map((r) => ({ index: r, all: s }));
        }),
      c3 = (e, t, n) =>
        gx(e, n).fold(
          () => Da.none(e),
          (o) => Dm(o.all, e, o.index, 1, t)
        ),
      u3 = (e, t, n) =>
        gx(e, n).fold(
          () => Da.none(),
          (o) => Dm(o.all, e, o.index, -1, t)
        ),
      f3 = (e) => Jo(e, "[contenteditable]"),
      hx = (e, t = !1) =>
        Hr(e)
          ? e.dom.isContentEditable
          : f3(e).fold(K(t), (n) => d3(n) === "true"),
      d3 = (e) => e.dom.contentEditable,
      m3 = (e, t) => ({
        left: e.left - t,
        top: e.top - t,
        right: e.right + t * 2,
        bottom: e.bottom + t * 2,
        width: e.width + t,
        height: e.height + t,
      }),
      p3 = (e, t) =>
        qe(t, (n) => {
          const s = m3(or(n.getBoundingClientRect()), -1);
          return [
            { x: s.left, y: e(s), cell: n },
            { x: s.right, y: e(s), cell: n },
          ];
        }),
      g3 = (e, t, n) =>
        X(
          e,
          (s, o) =>
            s.fold(
              () => g.some(o),
              (r) => {
                const i = Math.sqrt(Math.abs(r.x - t) + Math.abs(r.y - n)),
                  a = Math.sqrt(Math.abs(o.x - t) + Math.abs(o.y - n));
                return g.some(a < i ? o : r);
              }
            ),
          g.none()
        ),
      bx = (e, t, n, s, o) => {
        const r = xn(S.fromDom(n), "td,th,caption").map((a) => a.dom),
          i = H(p3(e, r), (a) => t(a, o));
        return g3(i, s, o).map((a) => a.cell);
      },
      h3 = (e) => e.bottom,
      b3 = (e) => e.top,
      C3 = (e, t) => e.y < t,
      y3 = (e, t) => e.y > t,
      v3 = oe(bx, h3, C3),
      E3 = oe(bx, b3, y3),
      x3 = (e, t) =>
        Ut(t.getClientRects())
          .bind((n) => v3(e, n.left, n.top))
          .bind((n) => k0(Kz(n), t)),
      w3 = (e, t) =>
        Cs(t.getClientRects())
          .bind((n) => E3(e, n.left, n.top))
          .bind((n) => k0(qz(n), t)),
      S3 = (e, t, n) => n.breakAt.exists((s) => e(t, s).breakAt.isSome()),
      _3 = (e) => e.breakType === Ls.Wrap && e.positions.length === 0,
      k3 = (e) => e.breakType === Ls.Br && e.positions.length === 1,
      Cx = (e, t, n) => {
        const s = e(t, n);
        return _3(s) || (!Dt(n.getNode()) && k3(s))
          ? !S3(e, t, s)
          : s.breakAt.isNone();
      },
      N3 = oe(Cx, Ta),
      A3 = oe(Cx, Ra),
      T3 = (e, t, n) => {
        const s = L.fromRangeStart(t);
        return si(!e, n).exists((o) => o.isEqual(s));
      },
      R3 = (e, t, n, s) => {
        const o = e.selection.getRng(),
          r = t ? 1 : -1;
        return rC() && T3(t, o, n)
          ? (oo(r, e, n, !t, !1).each((i) => {
              Io(e, i);
            }),
            !0)
          : !1;
      },
      P3 = (e, t, n) =>
        x3(t, n)
          .orThunk(() =>
            Ut(n.getClientRects()).bind((s) => wm(Hz(e, L.before(t)), s.left))
          )
          .getOr(L.before(t)),
      O3 = (e, t, n) =>
        w3(t, n)
          .orThunk(() =>
            Ut(n.getClientRects()).bind((s) => wm(Vz(e, L.after(t)), s.left))
          )
          .getOr(L.after(t)),
      yx = (e, t) => {
        const n = t.getNode(e);
        return ve(n) && n.nodeName === "TABLE" ? g.some(n) : g.none();
      },
      D3 = (e, t, n) => {
        const s = wn(t);
        t.undoManager.transact(() => {
          const o = S.fromTag(s);
          Es(o, ir(t)),
            It(o, S.fromTag("br")),
            e ? vo(S.fromDom(n), o) : Xn(S.fromDom(n), o);
          const r = t.dom.createRng();
          r.setStart(o.dom, 0), r.setEnd(o.dom, 0), Io(t, r);
        });
      },
      vx = (e, t, n) => {
        const s = yx(!!t, n),
          o = t === !1;
        s.fold(
          () => Io(e, n.toRange()),
          (r) =>
            si(o, e.getBody())
              .filter((i) => i.isEqual(n))
              .fold(
                () => Io(e, n.toRange()),
                (i) => D3(t, e, r)
              )
        );
      },
      B3 = (e, t, n, s) => {
        const o = e.selection.getRng(),
          r = L.fromRangeStart(o),
          i = e.getBody();
        if (!t && N3(s, r)) {
          const a = P3(i, n, r);
          return vx(e, t, a), !0;
        } else if (t && A3(s, r)) {
          const a = O3(i, n, r);
          return vx(e, t, a), !0;
        } else return !1;
      },
      Ex = (e, t, n) =>
        g
          .from(e.dom.getParent(e.selection.getNode(), "td,th"))
          .bind((s) =>
            g.from(e.dom.getParent(s, "table")).map((o) => n(e, t, o, s))
          )
          .getOr(!1),
      xx = (e, t) => Ex(e, t, R3),
      wx = (e, t) => Ex(e, t, B3),
      I3 = (e) => {
        const t = li.exact(e, 0, e, 0);
        return eO(t);
      },
      Sx = (e, t, n) =>
        n.fold(
          g.none,
          g.none,
          (s, o) => cD(o).map((r) => I3(r)),
          (s) => (e.execCommand("mceTableInsertRowAfter"), _x(e, t, s))
        ),
      _x = (e, t, n) => Sx(e, t, c3(n, hx)),
      $3 = (e, t, n) => Sx(e, t, u3(n, hx)),
      kx = (e, t) => {
        const n = ["table", "li", "dl"],
          s = S.fromDom(e.getBody()),
          o = (a) => {
            const c = bt(a);
            return tt(a, s) || R(n, c);
          },
          r = e.selection.getRng(),
          i = S.fromDom(t ? r.endContainer : r.startContainer);
        return a3(i, o)
          .map(
            (a) => (
              px(a, o).each((d) => {
                e.model.table.clearSelectedCells(d.dom);
              }),
              e.selection.collapse(!t),
              (t ? _x : $3)(e, o, a).each((d) => {
                e.selection.setRng(d);
              }),
              !0
            )
          )
          .getOr(!1);
      },
      L3 = (e, t, n) => {
        const s = Co().os;
        Oa(
          [
            { keyCode: ge.RIGHT, action: $e(nx, e, !0) },
            { keyCode: ge.LEFT, action: $e(nx, e, !1) },
            { keyCode: ge.UP, action: $e(sx, e, !1) },
            { keyCode: ge.DOWN, action: $e(sx, e, !0) },
            { keyCode: ge.RIGHT, action: $e(xx, e, !0) },
            { keyCode: ge.LEFT, action: $e(xx, e, !1) },
            { keyCode: ge.UP, action: $e(wx, e, !1) },
            { keyCode: ge.DOWN, action: $e(wx, e, !0) },
            { keyCode: ge.RIGHT, action: $e(cx, e, !0) },
            { keyCode: ge.LEFT, action: $e(cx, e, !1) },
            { keyCode: ge.UP, action: $e(ux, e, !1) },
            { keyCode: ge.DOWN, action: $e(ux, e, !0) },
            { keyCode: ge.RIGHT, action: $e(F0, e, t, !0) },
            { keyCode: ge.LEFT, action: $e(F0, e, t, !1) },
            {
              keyCode: ge.RIGHT,
              ctrlKey: !s.isMacOS(),
              altKey: s.isMacOS(),
              action: $e(lH, e, t),
            },
            {
              keyCode: ge.LEFT,
              ctrlKey: !s.isMacOS(),
              altKey: s.isMacOS(),
              action: $e(cH, e, t),
            },
            { keyCode: ge.UP, action: $e(rx, e, !1) },
            { keyCode: ge.DOWN, action: $e(rx, e, !0) },
          ],
          n
        ).each((o) => {
          n.preventDefault();
        });
      },
      F3 = (e, t) => {
        e.on("keydown", (n) => {
          n.isDefaultPrevented() === !1 && L3(e, t, n);
        });
      },
      is = (e, t) => ({ container: e, offset: t }),
      Tc = st.DOM,
      Rc = (e) => (t) => e === t ? -1 : 0,
      M3 = (e) => (t) =>
        e.isBlock(t) ||
        R(["BR", "IMG", "HR", "INPUT"], t.nodeName) ||
        e.getContentEditable(t) === "false",
      Bm = (e, t, n) => {
        if (ne(e) && t >= 0) return g.some(is(e, t));
        {
          const s = sr(Tc);
          return g
            .from(s.backwards(e, t, Rc(e), n))
            .map((o) => is(o.container, o.container.data.length));
        }
      },
      U3 = (e, t, n) => {
        if (ne(e) && t >= e.length) return g.some(is(e, t));
        {
          const s = sr(Tc);
          return g
            .from(s.forwards(e, t, Rc(e), n))
            .map((o) => is(o.container, 0));
        }
      },
      Im = (e, t, n) => {
        if (!ne(e)) return g.none();
        const s = e.textContent;
        if (t >= 0 && t <= s.length) return g.some(is(e, t));
        {
          const o = sr(Tc);
          return g.from(o.backwards(e, t, Rc(e), n)).bind((r) => {
            const i = r.container.data;
            return Im(r.container, t + i.length, n);
          });
        }
      },
      Nx = (e, t, n) => {
        if (!ne(e)) return g.none();
        const s = e.textContent;
        if (t <= s.length) return g.some(is(e, t));
        {
          const o = sr(Tc);
          return g
            .from(o.forwards(e, t, Rc(e), n))
            .bind((r) => Nx(r.container, t - s.length, n));
        }
      },
      $m = (e, t, n, s, o) => {
        const r = sr(e, M3(e));
        return g.from(r.backwards(t, n, s, o));
      },
      z3 = (e) => e.collapsed && e.startContainer.nodeType === 3,
      Ax = (e) =>
        e
          .toString()
          .replace(/\u00A0/g, " ")
          .replace(/\uFEFF/g, ""),
      Tx = (e) =>
        e !== "" &&
        ` \xA0\f
\r	\v`.indexOf(e) !== -1,
      Lm = (e, t) => e.substring(t.length),
      H3 = (e, t, n) => {
        let s;
        for (s = t - 1; s >= 0; s--) {
          const o = e.charAt(s);
          if (Tx(o)) return g.none();
          if (o === n) break;
        }
        return g.some(s);
      },
      V3 = (e, t, n, s = 0) => {
        if (!z3(t)) return g.none();
        const o = (i, a, c) => H3(c, a, n).getOr(a),
          r = e.getParent(t.startContainer, e.isBlock) || e.getRoot();
        return $m(e, t.startContainer, t.startOffset, o, r).bind((i) => {
          const a = t.cloneRange();
          if (
            (a.setStart(i.container, i.offset),
            a.setEnd(t.endContainer, t.endOffset),
            a.collapsed)
          )
            return g.none();
          const c = Ax(a);
          return c.lastIndexOf(n) !== 0 || Lm(c, n).length < s
            ? g.none()
            : g.some({ text: Lm(c, n), range: a, triggerChar: n });
        });
      },
      Rx = (e, t, n, s = 0) =>
        mD(S.fromDom(t.startContainer)).fold(
          () => V3(e, t, n, s),
          (o) => {
            const r = e.createRng();
            r.selectNode(o.dom);
            const i = Ax(r);
            return g.some({ range: r, text: Lm(i, n), triggerChar: n });
          }
        ),
      W3 = (e) => e.nodeType === Gg,
      j3 = (e) => e.nodeType === Ui,
      Px = (e) => {
        if (W3(e)) return is(e, e.data.length);
        {
          const t = e.childNodes;
          return t.length > 0 ? Px(t[t.length - 1]) : is(e, t.length);
        }
      },
      Ox = (e, t) => {
        const n = e.childNodes;
        return n.length > 0 && t < n.length
          ? Ox(n[t], 0)
          : n.length > 0 && j3(e) && n.length === t
          ? Px(n[n.length - 1])
          : is(e, t);
      },
      q3 = (e, t) =>
        $m(e, t.container, t.offset, (n, s) => (s === 0 ? -1 : s), e.getRoot())
          .filter((n) => {
            const s = n.container.data.charAt(n.offset - 1);
            return !Tx(s);
          })
          .isSome(),
      K3 = (e) => (t) => {
        const n = Ox(t.startContainer, t.startOffset);
        return !q3(e, n);
      },
      G3 = (e, t, n) => en(n.triggerChars, (s) => Rx(e, t, s)),
      Y3 = (e, t) => {
        const n = t(),
          s = e.selection.getRng();
        return G3(e.dom, s, n).bind((o) => Dx(e, t, o));
      },
      Dx = (e, t, n, s = {}) => {
        const o = t(),
          i = e.selection.getRng().startContainer.nodeValue,
          a = H(
            o.lookupByChar(n.triggerChar),
            (f) =>
              n.text.length >= f.minChars &&
              f.matches.getOrThunk(() => K3(e.dom))(n.range, i, n.text)
          );
        if (a.length === 0) return g.none();
        const c = Promise.all(
          U(a, (f) =>
            f
              .fetch(n.text, f.maxResults, s)
              .then((p) => ({
                matchText: n.text,
                items: p,
                columns: f.columns,
                onAction: f.onAction,
                highlightOn: f.highlightOn,
              }))
          )
        );
        return g.some({ lookupData: c, context: n });
      };
    var as;
    (function (e) {
      (e[(e.Error = 0)] = "Error"), (e[(e.Value = 1)] = "Value");
    })(as || (as = {}));
    const Fm = (e, t, n) => (e.stype === as.Error ? t(e.serror) : n(e.svalue)),
      X3 = (e) => {
        const t = [],
          n = [];
        return (
          T(e, (s) => {
            Fm(
              s,
              (o) => n.push(o),
              (o) => t.push(o)
            );
          }),
          { values: t, errors: n }
        );
      },
      Q3 = (e, t) =>
        e.stype === as.Error ? { stype: as.Error, serror: t(e.serror) } : e,
      Z3 = (e, t) =>
        e.stype === as.Value ? { stype: as.Value, svalue: t(e.svalue) } : e,
      J3 = (e, t) => (e.stype === as.Value ? t(e.svalue) : e),
      e2 = (e, t) => (e.stype === as.Error ? t(e.serror) : e),
      Bx = (e) => ({ stype: as.Value, svalue: e }),
      Ix = (e) => ({ stype: as.Error, serror: e }),
      jt = {
        fromResult: (e) => e.fold(Ix, Bx),
        toResult: (e) => Fm(e, dn.error, dn.value),
        svalue: Bx,
        partition: X3,
        serror: Ix,
        bind: J3,
        bindError: e2,
        map: Z3,
        mapError: Q3,
        fold: Fm,
      },
      Mm = (e) =>
        ut(e) && Jn(e).length > 100
          ? " removed due to size"
          : JSON.stringify(e, null, 2),
      t2 = (e) => {
        const t =
          e.length > 10
            ? e
                .slice(0, 10)
                .concat([
                  {
                    path: [],
                    getErrorInfo: K("... (only showing first ten failures)"),
                  },
                ])
            : e;
        return U(
          t,
          (n) =>
            "Failed path: (" +
            n.path.join(" > ") +
            `)
` +
            n.getErrorInfo()
        );
      },
      Pc = (e, t) => jt.serror([{ path: e, getErrorInfo: t }]),
      n2 = (e, t, n) =>
        Pc(
          e,
          () =>
            'Could not find valid *required* value for "' + t + '" in ' + Mm(n)
        ),
      s2 = (e, t) =>
        Pc(e, () => 'Choice schema did not contain choice key: "' + t + '"'),
      o2 = (e, t, n) =>
        Pc(
          e,
          () =>
            'The chosen schema: "' + n + '" did not exist in branches: ' + Mm(t)
        ),
      r2 = (e, t) => Pc(e, K(t)),
      i2 = (e, t, n, s) =>
        at(n, s).fold(
          () => o2(e, n, s),
          (r) => r.extract(e.concat(["branch: " + s]), t)
        ),
      a2 = (e, t) => ({
        extract: (o, r) =>
          at(r, e).fold(
            () => s2(o, e),
            (a) => i2(o, r, t, a)
          ),
        toString: () => "chooseOn(" + e + "). Possible values: " + Jn(t),
      }),
      l2 = (e, t) => t,
      c2 = (e, t) => (js(e) && js(t) ? Oc(e, t) : t),
      $x =
        (e) =>
        (...t) => {
          if (t.length === 0) throw new Error("Can't merge zero objects");
          const n = {};
          for (let s = 0; s < t.length; s++) {
            const o = t[s];
            for (const r in o) Fe(o, r) && (n[r] = e(n[r], o[r]));
          }
          return n;
        },
      Oc = $x(c2),
      u2 = $x(l2),
      Lx = () => ({ tag: "required", process: {} }),
      f2 = (e) => ({ tag: "defaultedThunk", process: e }),
      Fx = (e) => f2(K(e)),
      d2 = () => ({ tag: "option", process: {} }),
      m2 = (e, t) =>
        e.length > 0 ? jt.svalue(Oc(t, u2.apply(void 0, e))) : jt.svalue(t),
      Mx = (e) => Ot(jt.serror, Ue)(e),
      p2 = {
        consolidateObj: (e, t) => {
          const n = jt.partition(e);
          return n.errors.length > 0 ? Mx(n.errors) : m2(n.values, t);
        },
        consolidateArr: (e) => {
          const t = jt.partition(e);
          return t.errors.length > 0 ? Mx(t.errors) : jt.svalue(t.values);
        },
      },
      g2 = (e, t, n, s) => ({
        tag: "field",
        key: e,
        newKey: t,
        presence: n,
        prop: s,
      }),
      h2 = (e, t) => ({ tag: "custom", newKey: e, instantiator: t }),
      Ux = (e, t, n) => {
        switch (e.tag) {
          case "field":
            return t(e.key, e.newKey, e.presence, e.prop);
          case "custom":
            return n(e.newKey, e.instantiator);
        }
      },
      Um = (e) => {
        const t = (s, o) => jt.bindError(e(o), (r) => r2(s, r)),
          n = K("val");
        return { extract: t, toString: n };
      },
      b2 = Um(jt.svalue),
      C2 = (e, t, n, s) => at(t, n).fold(() => n2(e, n, t), s),
      zx = (e, t, n, s) => {
        const o = at(e, t).getOrThunk(() => n(e));
        return s(o);
      },
      y2 = (e, t, n) => n(at(e, t)),
      v2 = (e, t, n, s) => {
        const o = at(e, t).map((r) => (r === !0 ? n(e) : r));
        return s(o);
      },
      E2 = (e, t, n, s, o) => {
        const r = (a) => o.extract(t.concat([s]), a),
          i = (a) =>
            a.fold(
              () => jt.svalue(g.none()),
              (c) => {
                const f = o.extract(t.concat([s]), c);
                return jt.map(f, g.some);
              }
            );
        switch (e.tag) {
          case "required":
            return C2(t, n, s, r);
          case "defaultedThunk":
            return zx(n, s, e.process, r);
          case "option":
            return y2(n, s, i);
          case "defaultedOptionThunk":
            return v2(n, s, e.process, i);
          case "mergeWithThunk":
            return zx(n, s, K({}), (a) => {
              const c = Oc(e.process(n), a);
              return r(c);
            });
        }
      },
      x2 = (e, t, n) => {
        const s = {},
          o = [];
        for (const r of n)
          Ux(
            r,
            (i, a, c, f) => {
              const d = E2(c, e, t, i, f);
              jt.fold(
                d,
                (p) => {
                  o.push(...p);
                },
                (p) => {
                  s[a] = p;
                }
              );
            },
            (i, a) => {
              s[i] = a(t);
            }
          );
        return o.length > 0 ? jt.serror(o) : jt.svalue(s);
      },
      zm = (e) => ({
        extract: (s, o) => x2(s, o, e),
        toString: () => {
          const s = U(e, (o) =>
            Ux(
              o,
              (r, i, a, c) => r + " -> " + c.toString(),
              (r, i) => "state(" + r + ")"
            )
          );
          return (
            `obj{
` +
            s.join(`
`) +
            "}"
          );
        },
      }),
      Hx = (e) => ({
        extract: (s, o) => {
          const r = U(o, (i, a) => e.extract(s.concat(["[" + a + "]"]), i));
          return p2.consolidateArr(r);
        },
        toString: () => "array(" + e.toString() + ")",
      }),
      w2 = (e) => Um((t) => e(t).fold(jt.serror, jt.svalue)),
      S2 = (e, t, n) => {
        const s = t.extract([e], n);
        return jt.mapError(s, (o) => ({ input: n, errors: o }));
      },
      _2 = (e, t, n) => jt.toResult(S2(e, t, n)),
      k2 = (e) =>
        `Errors: 
` +
        t2(e.errors).join(`
`) +
        `

Input object: ` +
        Mm(e.input),
      Vx = (e, t) => a2(e, $i(t, zm)),
      N2 = K(b2),
      Dc = (e, t) =>
        Um((n) => {
          const s = typeof n;
          return e(n)
            ? jt.svalue(n)
            : jt.serror(`Expected type: ${t} but got: ${s}`);
        }),
      A2 = Dc(yn, "number"),
      Bc = Dc(be, "string"),
      T2 = Dc(gs, "boolean"),
      Hm = Dc(Ye, "function"),
      Ba = g2,
      Wx = h2,
      R2 = (e) =>
        w2((t) =>
          R(e, t)
            ? dn.value(t)
            : dn.error(
                `Unsupported value: "${t}", choose one of "${e.join(", ")}".`
              )
        ),
      jx = (e, t) => Ba(e, e, Lx(), t),
      qx = (e) => jx(e, Bc),
      Kx = (e) => jx(e, Hm),
      P2 = (e, t) => Ba(e, e, Lx(), Hx(t)),
      Vm = (e, t) => Ba(e, e, d2(), t),
      Ic = (e) => Vm(e, Bc),
      O2 = (e) => Vm(e, Hm),
      D2 = (e, t) => Ba(e, e, Fx(t), N2()),
      bi = (e, t, n) => Ba(e, e, Fx(t), n),
      Gx = (e, t) => bi(e, t, A2),
      B2 = (e, t) => bi(e, t, Bc),
      Yx = (e, t, n) => bi(e, t, R2(n)),
      Wm = (e, t) => bi(e, t, T2),
      jm = (e, t) => bi(e, t, Hm),
      I2 = (e, t, n) => bi(e, t, Hx(n)),
      $2 = qx("type"),
      L2 = Kx("fetch"),
      qm = Kx("onAction"),
      F2 = jm("onSetup", () => Ie),
      M2 = Ic("text"),
      U2 = Ic("icon"),
      z2 = Ic("tooltip"),
      H2 = Ic("label"),
      V2 = Wm("active", !1),
      W2 = Wm("enabled", !0),
      Xx = Wm("primary", !1),
      j2 = (e) => D2("columns", e),
      Ia = (e) => B2("type", e),
      q2 = zm([
        $2,
        qx("ch"),
        Gx("minChars", 1),
        j2(1),
        Gx("maxResults", 10),
        O2("matches"),
        L2,
        qm,
        I2("highlightOn", [], Bc),
      ]),
      K2 = (e) => _2("Autocompleter", q2, e),
      Km = [W2, z2, U2, M2, F2],
      Qx = [V2].concat(Km),
      G2 = [
        jm("predicate", mt),
        Yx("scope", "node", ["node", "editor"]),
        Yx("position", "selection", ["node", "selection", "line"]),
      ],
      Y2 = Km.concat([Ia("contextformbutton"), Xx, qm, Wx("original", xt)]),
      X2 = Qx.concat([Ia("contextformbutton"), Xx, qm, Wx("original", xt)]),
      Q2 = Km.concat([Ia("contextformbutton")]),
      Z2 = Qx.concat([Ia("contextformtogglebutton")]),
      J2 = Vx("type", { contextformbutton: Y2, contextformtogglebutton: X2 });
    zm(
      [
        Ia("contextform"),
        jm("initValue", K("")),
        H2,
        P2("commands", J2),
        Vm(
          "launch",
          Vx("type", { contextformbutton: Q2, contextformtogglebutton: Z2 })
        ),
      ].concat(G2)
    );
    const eV = (e) => {
        const t = e.ui.registry.getAll().popups,
          n = $i(t, (i) =>
            K2(i).fold((a) => {
              throw new Error(k2(a));
            }, xt)
          ),
          s = gg(Pu(n, (i) => i.ch)),
          o = pg(n);
        return {
          dataset: n,
          triggerChars: s,
          lookupByChar: (i) => H(o, (a) => a.ch === i),
        };
      },
      tV = (e, t) => {
        const n = mf(t.load, 50);
        e.on("keypress compositionend", (s) => {
          s.which !== 27 && n.throttle();
        }),
          e.on("keydown", (s) => {
            const o = s.which;
            o === 8 ? n.throttle() : o === 27 && t.cancelIfNecessary();
          }),
          e.on("remove", n.cancel);
      },
      nV = (e) => {
        const t = No(),
          n = $t(!1),
          s = t.isSet,
          o = () => {
            s() && (qF(e), AP(e), n.set(!1), t.clear());
          },
          r = (f) => {
            s() ||
              (jF(e, f.range),
              t.set({
                triggerChar: f.triggerChar,
                matchLength: f.text.length,
              }));
          },
          i = qo(() => eV(e)),
          a = (f) =>
            t
              .get()
              .map((d) =>
                Rx(e.dom, e.selection.getRng(), d.triggerChar).bind((p) =>
                  Dx(e, i, p, f)
                )
              )
              .getOrThunk(() => Y3(e, i)),
          c = (f) => {
            a(f).fold(o, (d) => {
              r(d.context),
                d.lookupData.then((p) => {
                  t.get().map((C) => {
                    const b = d.context;
                    C.triggerChar === b.triggerChar &&
                      (b.text.length - C.matchLength >= 10
                        ? o()
                        : (t.set(ct(Se({}, C), { matchLength: b.text.length })),
                          n.get()
                            ? NP(e, { lookupData: p })
                            : (n.set(!0), kP(e, { lookupData: p }))));
                  });
                });
            });
          };
        e.addCommand("mceAutocompleterReload", (f, d) => {
          const p = ut(d) ? d.fetchOptions : {};
          c(p);
        }),
          e.addCommand("mceAutocompleterClose", o),
          tV(e, { cancelIfNecessary: o, load: c });
      },
      Zx =
        (e) =>
        (t, n, s = {}) => {
          const o = t.getBody(),
            r = {
              bubbles: !0,
              composed: !0,
              data: null,
              isComposing: !1,
              detail: 0,
              view: null,
              target: o,
              currentTarget: o,
              eventPhase: Event.AT_TARGET,
              originalTarget: o,
              explicitOriginalTarget: o,
              isTrusted: !1,
              srcElement: o,
              cancelable: !1,
              preventDefault: Ie,
              inputType: n,
            },
            i = Xh(new InputEvent(e));
          return t.dispatch(e, Se(Se(Se({}, i), r), s));
        },
      $c = Zx("input"),
      Lc = Zx("beforeinput"),
      sV = (e, t, n) => {
        const s =
          n.keyCode === ge.BACKSPACE
            ? "deleteContentBackward"
            : "deleteContentForward";
        lx(
          [
            { keyCode: ge.BACKSPACE, action: $e(G0, e) },
            { keyCode: ge.BACKSPACE, action: $e(Cm, e, !1) },
            { keyCode: ge.DELETE, action: $e(Cm, e, !0) },
            { keyCode: ge.BACKSPACE, action: $e(bm, e, !1) },
            { keyCode: ge.DELETE, action: $e(bm, e, !0) },
            { keyCode: ge.BACKSPACE, action: $e(Nm, e, t, !1) },
            { keyCode: ge.DELETE, action: $e(Nm, e, t, !0) },
            { keyCode: ge.BACKSPACE, action: $e(Ad, e, !1) },
            { keyCode: ge.DELETE, action: $e(Ad, e, !0) },
            { keyCode: ge.BACKSPACE, action: $e(ym, e, !1) },
            { keyCode: ge.DELETE, action: $e(ym, e, !0) },
            { keyCode: ge.BACKSPACE, action: $e(Rm, e, !1) },
            { keyCode: ge.DELETE, action: $e(Rm, e, !0) },
            { keyCode: ge.BACKSPACE, action: $e(gm, e, !1) },
            { keyCode: ge.DELETE, action: $e(gm, e, !0) },
            { keyCode: ge.BACKSPACE, action: $e(pm, e, !1) },
            { keyCode: ge.DELETE, action: $e(pm, e, !0) },
            { keyCode: ge.BACKSPACE, action: $e(Am, e, !1) },
            { keyCode: ge.DELETE, action: $e(Am, e, !0) },
          ],
          n
        ).each((o) => {
          n.preventDefault(), Lc(e, s).isDefaultPrevented() || (o(), $c(e, s));
        });
      },
      oV = (e, t) => {
        Oa(
          [
            { keyCode: ge.BACKSPACE, action: $e(d0, e) },
            { keyCode: ge.DELETE, action: $e(d0, e) },
          ],
          t
        );
      },
      rV = (e, t) => {
        e.on("keydown", (n) => {
          n.isDefaultPrevented() === !1 && sV(e, t, n);
        }),
          e.on("keyup", (n) => {
            n.isDefaultPrevented() === !1 && oV(e, n);
          });
      },
      iV = (e) => {
        for (; e; ) {
          if (
            e.nodeType === 1 ||
            (e.nodeType === 3 && e.data && /[\r\n\s]/.test(e.data))
          )
            return e;
          e = e.nextSibling;
        }
      },
      $a = (e, t) => {
        let n,
          s = t;
        const o = e.dom,
          r = e.schema.getMoveCaretBeforeOnEnterElements();
        if (!t) return;
        if (/^(LI|DT|DD)$/.test(t.nodeName)) {
          const a = iV(t.firstChild);
          a &&
            /^(UL|OL|DL)$/.test(a.nodeName) &&
            t.insertBefore(o.doc.createTextNode(Xt), t.firstChild);
        }
        const i = o.createRng();
        if ((t.normalize(), t.hasChildNodes())) {
          const a = new zt(t, t);
          for (; (n = a.current()); ) {
            if (ne(n)) {
              i.setStart(n, 0), i.setEnd(n, 0);
              break;
            }
            if (r[n.nodeName.toLowerCase()]) {
              i.setStartBefore(n), i.setEndBefore(n);
              break;
            }
            (s = n), (n = a.next());
          }
          n || (i.setStart(s, 0), i.setEnd(s, 0));
        } else
          Dt(t)
            ? t.nextSibling && o.isBlock(t.nextSibling)
              ? (i.setStartBefore(t), i.setEndBefore(t))
              : (i.setStartAfter(t), i.setEndAfter(t))
            : (i.setStart(t, 0), i.setEnd(t, 0));
        e.selection.setRng(i), ba(e, i);
      },
      aV = (e, t) => {
        const n = e.getRoot();
        let s, o;
        for (s = t; s !== n && e.getContentEditable(s) !== "false"; )
          e.getContentEditable(s) === "true" && (o = s), (s = s.parentNode);
        return s !== n ? o : n;
      },
      Gm = (e) =>
        g.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)),
      lV = (e) => Gm(e).fold(K(""), (t) => t.nodeName.toUpperCase()),
      cV = (e) =>
        Gm(e)
          .filter((t) => Xi(S.fromDom(t)))
          .isSome(),
      uV = (e, t) => e.firstChild && e.firstChild.nodeName === t,
      fV = (e) => {
        var t;
        return (
          ((t = e.parentNode) === null || t === void 0
            ? void 0
            : t.firstChild) === e
        );
      },
      Jx = (e, t) => e && e.parentNode && e.parentNode.nodeName === t,
      ew = (e) => e && /^(OL|UL|LI)$/.test(e.nodeName),
      dV = (e) => ew(e) && ew(e.parentNode),
      Fc = (e) => {
        const t = e.parentNode;
        return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
      },
      Mc = (e, t, n) => {
        let s = e[n ? "firstChild" : "lastChild"];
        for (; s && !ve(s); ) s = s[n ? "nextSibling" : "previousSibling"];
        return s === t;
      },
      mV = (e, t, n, s, o) => {
        const r = e.dom,
          i = e.selection.getRng();
        if (n === e.getBody()) return;
        dV(n) && (o = "LI");
        let a = t(o);
        if (Mc(n, s, !0) && Mc(n, s, !1))
          if (Jx(n, "LI")) {
            const c = Fc(n);
            r.insertAfter(a, c), fV(n) ? r.remove(c) : r.remove(n);
          } else r.replace(a, n);
        else if (Mc(n, s, !0))
          Jx(n, "LI")
            ? (r.insertAfter(a, Fc(n)),
              a.appendChild(r.doc.createTextNode(" ")),
              a.appendChild(n))
            : n.parentNode.insertBefore(a, n),
            r.remove(s);
        else if (Mc(n, s, !1)) r.insertAfter(a, Fc(n)), r.remove(s);
        else {
          n = Fc(n);
          const c = i.cloneRange();
          c.setStartAfter(s), c.setEndAfter(n);
          const f = c.extractContents();
          o === "LI" && uV(f, "LI")
            ? ((a = f.firstChild), r.insertAfter(f, n))
            : (r.insertAfter(f, n), r.insertAfter(a, n)),
            r.remove(s);
        }
        $a(e, a);
      },
      pV = (e) => {
        T(eb(S.fromDom(e), In), (t) => {
          const n = t.dom;
          n.nodeValue = wo(n.nodeValue);
        });
      },
      gV = (e, t) => t && t.nodeName === "A" && e.isEmpty(t),
      hV = (e) => e && /^(TD|TH|CAPTION)$/.test(e.nodeName),
      Ym = (e) => {
        e.innerHTML = '<br data-mce-bogus="1">';
      },
      Xm = (e, t) =>
        e.nodeName === t ||
        (e.previousSibling && e.previousSibling.nodeName === t),
      tw = (e, t) =>
        t &&
        e.isBlock(t) &&
        !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) &&
        !/^(fixed|absolute)/i.test(t.style.position) &&
        e.getContentEditable(t) !== "true",
      bV = (e, t, n) => {
        let s = n;
        const o = [];
        let r;
        if (!!s) {
          for (; (s = s.firstChild); ) {
            if (e.isBlock(s)) return;
            ve(s) && !t[s.nodeName.toLowerCase()] && o.push(s);
          }
          for (r = o.length; r--; )
            (s = o[r]),
              (!s.hasChildNodes() ||
                (s.firstChild === s.lastChild &&
                  s.firstChild.nodeValue === "") ||
                gV(e, s)) &&
                e.remove(s);
        }
      },
      Qm = (e, t, n) =>
        ne(t) === !1
          ? n
          : e
          ? n === 1 && t.data.charAt(n - 1) === Kt
            ? 0
            : n
          : n === t.data.length - 1 && t.data.charAt(n) === Kt
          ? t.data.length
          : n,
      CV = (e) => {
        const t = e.cloneRange();
        return (
          t.setStart(e.startContainer, Qm(!0, e.startContainer, e.startOffset)),
          t.setEnd(e.endContainer, Qm(!1, e.endContainer, e.endOffset)),
          t
        );
      },
      yV = (e) => {
        do
          ne(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")),
            (e = e.firstChild);
        while (e);
      },
      nw = (e, t) => {
        const n = e.getRoot();
        let s, o;
        for (s = t; s !== n && e.getContentEditable(s) !== "false"; )
          e.getContentEditable(s) === "true" && (o = s), (s = s.parentNode);
        return s !== n ? o : n;
      },
      vV = (e, t, n) => {
        const s = e.dom;
        g.from(n.style)
          .map(s.parseStyle)
          .each((c) => {
            const f = bh(S.fromDom(t)),
              d = Se(Se({}, f), c);
            s.setStyles(t, d);
          });
        const o = g.from(n.class).map((c) => c.split(/\s+/)),
          r = g
            .from(t.className)
            .map((c) => H(c.split(/\s+/), (f) => f !== ""));
        En(o, r, (c, f) => {
          const d = H(f, (C) => !R(c, C)),
            p = [...c, ...d];
          s.setAttrib(t, "class", p.join(" "));
        });
        const i = ["style", "class"],
          a = Li(n, (c, f) => !R(i, f));
        s.setAttribs(t, a);
      },
      La = (e, t) => {
        if (wn(e).toLowerCase() === t.tagName.toLowerCase()) {
          const s = ir(e);
          vV(e, t, s);
        }
      },
      EV = (e, t, n, s, o) => {
        let r, i, a, c, f, d;
        const p = e.dom,
          C = nw(p, s);
        if (((i = p.getParent(s, p.isBlock)), !i || !tw(p, i))) {
          if (
            ((i = i || C),
            i === e.getBody() || hV(i)
              ? (d = i.nodeName.toLowerCase())
              : (d = i.parentNode.nodeName.toLowerCase()),
            !i.hasChildNodes())
          )
            return (
              (r = p.create(t)),
              La(e, r),
              i.appendChild(r),
              n.setStart(r, 0),
              n.setEnd(r, 0),
              r
            );
          for (c = s; c.parentNode !== i; ) c = c.parentNode;
          for (; c && !p.isBlock(c); ) (a = c), (c = c.previousSibling);
          if (a && e.schema.isValidChild(d, t.toLowerCase())) {
            for (
              r = p.create(t), La(e, r), a.parentNode.insertBefore(r, a), c = a;
              c && !p.isBlock(c);

            )
              (f = c.nextSibling), r.appendChild(c), (c = f);
            n.setStart(s, o), n.setEnd(s, o);
          }
        }
        return s;
      },
      xV = (e, t) => {
        t.normalize();
        const n = t.lastChild;
        (!n || /^(left|right)$/gi.test(e.getStyle(n, "float", !0))) &&
          e.add(t, "br");
      },
      wV = (e, t) => {
        let n, s, o, r, i, a, c, f, d;
        const p = e.dom,
          C = e.schema,
          b = C.getNonEmptyElements(),
          x = e.selection.getRng(),
          y = wn(e),
          E = (W) => {
            let q = s,
              Q,
              J,
              Ee;
            const ae = C.getTextInlineElements();
            if (
              (W || f === "TABLE" || f === "HR"
                ? (Q = p.create(W || y))
                : (Q = r.cloneNode(!1)),
              (Ee = Q),
              ZT(e) === !1)
            )
              p.setAttrib(Q, "style", null), p.setAttrib(Q, "class", null);
            else
              do
                if (ae[q.nodeName]) {
                  if (Ps(q) || Mn(q)) continue;
                  (J = q.cloneNode(!1)),
                    p.setAttrib(J, "id", ""),
                    Q.hasChildNodes()
                      ? (J.appendChild(Q.firstChild), Q.appendChild(J))
                      : ((Ee = J), Q.appendChild(J));
                }
              while ((q = q.parentNode) && q !== $);
            return La(e, Q), Ym(Ee), Q;
          },
          _ = (W) => {
            let q, Q;
            const J = Qm(W, s, o);
            if (ne(s) && (W ? J > 0 : J < s.nodeValue.length)) return !1;
            if (
              (s.parentNode === r && d && !W) ||
              (W && ve(s) && s === r.firstChild)
            )
              return !0;
            if (Xm(s, "TABLE") || Xm(s, "HR")) return (d && !W) || (!d && W);
            const Ee = new zt(s, r);
            for (
              ne(s) &&
              (W && J === 0
                ? Ee.prev()
                : !W && J === s.nodeValue.length && Ee.next());
              (q = Ee.current());

            ) {
              if (ve(q)) {
                if (
                  !q.getAttribute("data-mce-bogus") &&
                  ((Q = q.nodeName.toLowerCase()), b[Q] && Q !== "br")
                )
                  return !1;
              } else if (ne(q) && !er(q.nodeValue)) return !1;
              W ? Ee.prev() : Ee.next();
            }
            return !0;
          },
          P = () => {
            /^(H[1-6]|PRE|FIGURE)$/.test(f) && te !== "HGROUP"
              ? (i = E(y))
              : (i = E()),
              JT(e) && tw(p, c) && p.isEmpty(r)
                ? (i = p.split(c, r))
                : p.insertAfter(i, r),
              $a(e, i);
          };
        ql(p, x).each((W) => {
          x.setStart(W.startContainer, W.startOffset),
            x.setEnd(W.endContainer, W.endOffset);
        }),
          (s = x.startContainer),
          (o = x.startOffset);
        const z = !!(t && t.shiftKey),
          I = !!(t && t.ctrlKey);
        ve(s) &&
          s.hasChildNodes() &&
          ((d = o > s.childNodes.length - 1),
          (s = s.childNodes[Math.min(o, s.childNodes.length - 1)] || s),
          d && ne(s) ? (o = s.nodeValue.length) : (o = 0));
        const $ = nw(p, s);
        if (!$) return;
        z || (s = EV(e, y, x, s, o)),
          (r = p.getParent(s, p.isBlock)),
          (c = r ? p.getParent(r.parentNode, p.isBlock) : null),
          (f = r ? r.nodeName.toUpperCase() : "");
        const te = c ? c.nodeName.toUpperCase() : "";
        if (
          (te === "LI" && !I && ((r = c), (c = c.parentNode), (f = te)),
          /^(LI|DT|DD)$/.test(f) && p.isEmpty(r))
        ) {
          mV(e, E, c, r, y);
          return;
        }
        r !== e.getBody() &&
          (Kr(r)
            ? ((i = Ju(r)), p.isEmpty(r) && Ym(r), La(e, i), $a(e, i))
            : _()
            ? P()
            : _(!0)
            ? ((i = r.parentNode.insertBefore(E(), r)),
              $a(e, Xm(r, "HR") ? i : r))
            : ((n = CV(x).cloneRange()),
              n.setEndAfter(r),
              (a = n.extractContents()),
              pV(a),
              yV(a),
              (i = a.firstChild),
              p.insertAfter(a, r),
              bV(p, b, i),
              xV(p, r),
              p.isEmpty(r) && Ym(r),
              i.normalize(),
              p.isEmpty(i) ? (p.remove(i), P()) : (La(e, i), $a(e, i))),
          p.setAttrib(i, "id", ""),
          e.dispatch("NewBlock", { newBlock: i }));
      },
      SV = (e, t, n) => {
        const s = new zt(t, n);
        let o;
        const r = e.getNonEmptyElements();
        for (; (o = s.next()); )
          if (r[o.nodeName.toLowerCase()] || o.length > 0) return !0;
      },
      sw = (e, t, n) => {
        const s = e.dom.createRng();
        n
          ? (s.setStartBefore(t), s.setEndBefore(t))
          : (s.setStartAfter(t), s.setEndAfter(t)),
          e.selection.setRng(s),
          ba(e, s);
      },
      _V = (e, t) => {
        const n = e.selection,
          s = e.dom,
          o = n.getRng();
        let r, i;
        ql(s, o).each((b) => {
          o.setStart(b.startContainer, b.startOffset),
            o.setEnd(b.endContainer, b.endOffset);
        });
        let a = o.startOffset,
          c = o.startContainer;
        if (c.nodeType === 1 && c.hasChildNodes()) {
          const b = a > c.childNodes.length - 1;
          (c = c.childNodes[Math.min(a, c.childNodes.length - 1)] || c),
            b && c.nodeType === 3 ? (a = c.nodeValue.length) : (a = 0);
        }
        let f = s.getParent(c, s.isBlock);
        const d = f ? s.getParent(f.parentNode, s.isBlock) : null,
          p = d ? d.nodeName.toUpperCase() : "",
          C = !!(t && t.ctrlKey);
        p === "LI" && !C && (f = d),
          c &&
            c.nodeType === 3 &&
            a >= c.nodeValue.length &&
            (SV(e.schema, c, f) ||
              ((r = s.create("br")),
              o.insertNode(r),
              o.setStartAfter(r),
              o.setEndAfter(r),
              (i = !0))),
          (r = s.create("br")),
          vf(s, o, r),
          sw(e, r, i),
          e.undoManager.add();
      },
      kV = (e, t) => {
        const n = S.fromTag("br");
        Xn(S.fromDom(t), n), e.undoManager.add();
      },
      NV = (e, t) => {
        TV(e.getBody(), t) || vo(S.fromDom(t), S.fromTag("br"));
        const n = S.fromTag("br");
        vo(S.fromDom(t), n), sw(e, n.dom, !1), e.undoManager.add();
      },
      AV = (e) => Dt(e.getNode()),
      TV = (e, t) =>
        AV(L.after(t))
          ? !0
          : ss(e, L.after(t))
              .map((n) => Dt(n.getNode()))
              .getOr(!1),
      ow = (e) => e && e.nodeName === "A" && "href" in e,
      RV = (e) => e.fold(mt, ow, ow, mt),
      PV = (e) => {
        const t = oe(br, e),
          n = L.fromRangeStart(e.selection.getRng());
        return $s(t, e.getBody(), n).filter(RV);
      },
      OV = (e, t) => {
        t.fold(Ie, oe(kV, e), oe(NV, e), Ie);
      },
      rw = (e, t) => {
        const n = PV(e);
        n.isSome() ? n.each(oe(OV, e)) : _V(e, t);
      },
      iw = (e, t) =>
        Gm(e)
          .filter((n) => t.length > 0 && Xs(S.fromDom(n), t))
          .isSome(),
      DV = (e) => iw(e, XT(e)),
      BV = (e) => iw(e, QT(e)),
      Zn = _s.generate([{ br: [] }, { block: [] }, { none: [] }]),
      IV = (e, t) => BV(e),
      aw = (e) => (t, n) => cV(t) === e,
      lw = (e, t) => (n, s) => (lV(n) === e.toUpperCase()) === t,
      Uc = (e) => lw("pre", e),
      $V = () => lw("summary", !0),
      zc = (e) => (t, n) => YT(t) === e,
      LV = (e, t) => DV(e),
      Hc = (e, t) => t,
      FV = (e) => {
        const t = wn(e),
          n = aV(e.dom, e.selection.getStart());
        return n && e.schema.isValidChild(n.nodeName, t);
      },
      ls = (e, t) => (n, s) =>
        X(e, (r, i) => r && i(n, s), !0) ? g.some(t) : g.none(),
      MV = (e, t) =>
        C0(
          [
            ls([IV], Zn.none()),
            ls([$V()], Zn.br()),
            ls([Uc(!0), zc(!1), Hc], Zn.br()),
            ls([Uc(!0), zc(!1)], Zn.block()),
            ls([Uc(!0), zc(!0), Hc], Zn.block()),
            ls([Uc(!0), zc(!0)], Zn.br()),
            ls([aw(!0), Hc], Zn.br()),
            ls([aw(!0)], Zn.block()),
            ls([LV], Zn.br()),
            ls([Hc], Zn.br()),
            ls([FV], Zn.block()),
          ],
          [e, !!(t && t.shiftKey)]
        ).getOr(Zn.none()),
      Zm = (e, t) => {
        MV(e, t).fold(
          () => {
            (ke(t) && Lc(e, "insertLineBreak").isDefaultPrevented()) ||
              (rw(e, t), ke(t) && $c(e, "insertLineBreak"));
          },
          () => {
            (ke(t) && Lc(e, "insertParagraph").isDefaultPrevented()) ||
              (wV(e, t), ke(t) && $c(e, "insertParagraph"));
          },
          Ie
        );
      },
      UV = (e, t) => {
        t.isDefaultPrevented() ||
          (t.preventDefault(),
          sF(e.undoManager),
          e.undoManager.transact(() => {
            e.selection.isCollapsed() === !1 && dm(e), Zm(e, t);
          }));
      },
      zV = (e) => {
        e.on("keydown", (t) => {
          t.keyCode === ge.ENTER && UV(e, t);
        });
      },
      HV = (e, t, n) => {
        Oa(
          [
            { keyCode: ge.END, action: $e(ox, e, !0) },
            { keyCode: ge.HOME, action: $e(ox, e, !1) },
            { keyCode: ge.END, action: $e(fx, e, !0) },
            { keyCode: ge.HOME, action: $e(fx, e, !1) },
            { keyCode: ge.END, action: $e(Ac, e, !0, t) },
            { keyCode: ge.HOME, action: $e(Ac, e, !1, t) },
          ],
          n
        ).each((s) => {
          n.preventDefault();
        });
      },
      VV = (e, t) => {
        e.on("keydown", (n) => {
          n.isDefaultPrevented() === !1 && HV(e, t, n);
        });
      },
      WV = (e) => {
        e.on("input", (t) => {
          t.isComposing === !1 && eB(e);
        });
      },
      jV = Co(),
      qV = (e, t, n) => {
        Oa(
          [
            { keyCode: ge.PAGE_UP, action: $e(Ac, e, !1, t) },
            { keyCode: ge.PAGE_DOWN, action: $e(Ac, e, !0, t) },
          ],
          n
        );
      },
      cw = (e) => e.stopImmediatePropagation(),
      uw = (e) => e.keyCode === ge.PAGE_UP || e.keyCode === ge.PAGE_DOWN,
      fw = (e, t, n) => {
        n && !e.get()
          ? t.on("NodeChange", cw, !0)
          : !n && e.get() && t.off("NodeChange", cw),
          e.set(n);
      },
      KV = (e, t) => {
        if (jV.os.isMacOS()) return;
        const n = $t(!1);
        e.on("keydown", (s) => {
          uw(s) && fw(n, e, !0);
        }),
          e.on("keyup", (s) => {
            s.isDefaultPrevented() === !1 && qV(e, t, s),
              uw(s) && n.get() && (fw(n, e, !1), e.nodeChanged());
          });
      },
      dw = (e, t) => {
        const n = t.container(),
          s = t.offset();
        return ne(n)
          ? (n.insertData(s, e), g.some(L(n, s + e.length)))
          : Dl(t).map((o) => {
              const r = S.fromText(e);
              return t.isAtEnd() ? vo(o, r) : Xn(o, r), L(r.dom, e.length);
            });
      },
      GV = oe(dw, Xt),
      YV = oe(dw, " "),
      XV = (e) => (t) =>
        t.fold(
          (n) => Ts(e.dom, L.before(n)),
          (n) => mn(n),
          (n) => Rs(n),
          (n) => ss(e.dom, L.after(n))
        ),
      QV = (e, t) => (n) => qD(e, n) ? GV(t) : YV(t),
      ZV = (e) => (t) => (e.selection.setRng(t.toRange()), e.nodeChanged(), !0),
      JV = (e) => {
        const t = L.fromRangeStart(e.selection.getRng()),
          n = S.fromDom(e.getBody());
        if (e.selection.isCollapsed()) {
          const s = oe(br, e),
            o = L.fromRangeStart(e.selection.getRng());
          return $s(s, e.getBody(), o)
            .bind(XV(n))
            .map((r) => () => QV(n, t)(r).each(ZV(e)));
        } else return g.none();
      },
      eW = (e, t) => {
        lx([{ keyCode: ge.SPACEBAR, action: $e(JV, e) }], t).each((n) => {
          t.preventDefault(),
            Lc(e, "insertText", { data: " " }).isDefaultPrevented() ||
              (n(), $c(e, "insertText", { data: " " }));
        });
      },
      tW = (e) => {
        e.on("keydown", (t) => {
          t.isDefaultPrevented() === !1 && eW(e, t);
        });
      },
      nW = (e) =>
        tR(e)
          ? [
              { keyCode: ge.TAB, action: $e(kx, e, !0) },
              { keyCode: ge.TAB, shiftKey: !0, action: $e(kx, e, !1) },
            ]
          : [],
      sW = (e, t) => {
        Oa([...nW(e)], t).each((n) => {
          t.preventDefault();
        });
      },
      oW = (e) => {
        e.on("keydown", (t) => {
          t.isDefaultPrevented() === !1 && sW(e, t);
        });
      },
      rW = (e) => {
        if ((e.addShortcut("Meta+P", "", "mcePrint"), nV(e), so(e)))
          return $t(null);
        {
          const t = aH(e);
          return (
            zH(e),
            F3(e, t),
            rV(e, t),
            zV(e),
            tW(e),
            WV(e),
            oW(e),
            VV(e, t),
            KV(e, t),
            t
          );
        }
      };
    class iW {
      constructor(t) {
        (this.lastPath = []), (this.editor = t);
        let n;
        const s = this;
        "onselectionchange" in t.getDoc() ||
          t.on("NodeChange click mouseup keyup focus", (o) => {
            const r = t.selection.getRng(),
              i = {
                startContainer: r.startContainer,
                startOffset: r.startOffset,
                endContainer: r.endContainer,
                endOffset: r.endOffset,
              };
            (o.type === "nodechange" || !Jf(i, n)) &&
              t.dispatch("SelectionChange"),
              (n = i);
          }),
          t.on("contextmenu", () => {
            t.dispatch("SelectionChange");
          }),
          t.on("SelectionChange", () => {
            const o = t.selection.getStart(!0);
            !o ||
              (Vl(t) &&
                !s.isSameElementPath(o) &&
                t.dom.isChildOf(o, t.getBody()) &&
                t.nodeChanged({ selectionChange: !0 }));
          }),
          t.on("mouseup", (o) => {
            !o.isDefaultPrevented() &&
              Vl(t) &&
              (t.selection.getNode().nodeName === "IMG"
                ? Un.setEditorTimeout(t, () => {
                    t.nodeChanged();
                  })
                : t.nodeChanged());
          });
      }
      nodeChanged(t) {
        const n = this.editor.selection;
        let s, o, r;
        this.editor.initialized &&
          n &&
          !N1(this.editor) &&
          !this.editor.mode.isReadOnly() &&
          ((r = this.editor.getBody()),
          (s = n.getStart(!0) || r),
          (s.ownerDocument !== this.editor.getDoc() ||
            !this.editor.dom.isChildOf(s, r)) &&
            (s = r),
          (o = []),
          this.editor.dom.getParent(s, (i) => {
            if (i === r) return !0;
            o.push(i);
          }),
          (t = t || {}),
          (t.element = s),
          (t.parents = o),
          this.editor.dispatch("NodeChange", t));
      }
      isSameElementPath(t) {
        let n;
        const s = this.editor,
          o = nt(s.dom.getParents(t, rt, s.getBody()));
        if (o.length === this.lastPath.length) {
          for (n = o.length; n >= 0 && o[n] === this.lastPath[n]; n--);
          if (n === -1) return (this.lastPath = o), !0;
        }
        return (this.lastPath = o), !1;
      }
    }
    const mw = "x-tinymce/html",
      Vc = K(mw),
      Jm = "<!-- " + mw + " -->",
      aW = (e) => Jm + e,
      lW = (e) => e.replace(Jm, ""),
      pw = (e) => e.indexOf(Jm) !== -1,
      cW = (e) =>
        !/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(
          e
        ),
      uW = (e, t) => {
        let n = "<" + e;
        const s = Pu(t, (o, r) => r + '="' + So.encodeAllRaw(o) + '"');
        return s.length && (n += " " + s.join(" ")), n + ">";
      },
      fW = (e, t, n) => {
        const s = e.split(/\n\n/),
          o = uW(t, n),
          r = "</" + t + ">",
          i = U(s, (c) => c.split(/\n/).join("<br />")),
          a = (c) => o + c + r;
        return i.length === 1 ? i[0] : U(i, a).join("");
      },
      gw = "%MCEPASTEBIN%",
      dW = (e, t) => {
        const { dom: n, selection: s } = e,
          o = e.getBody();
        t.set(s.getRng());
        const r = n.add(
          e.getBody(),
          "div",
          {
            id: "mcepastebin",
            class: "mce-pastebin",
            contentEditable: !0,
            "data-mce-bogus": "all",
            style:
              "position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0",
          },
          gw
        );
        et.browser.isFirefox() &&
          n.setStyle(
            r,
            "left",
            n.getStyle(o, "direction", !0) === "rtl" ? 65535 : -65535
          ),
          n.bind(r, "beforedeactivate focusin focusout", (i) => {
            i.stopPropagation();
          }),
          r.focus(),
          s.select(r, !0);
      },
      mW = (e, t) => {
        const n = e.dom;
        if (ep(e)) {
          let s;
          const o = t.get();
          for (; (s = ep(e)); ) n.remove(s), n.unbind(s);
          o && e.selection.setRng(o);
        }
        t.set(null);
      },
      ep = (e) => e.dom.get("mcepastebin"),
      pW = (e) => e && e.id === "mcepastebin",
      gW = (e) => {
        const t = e.dom,
          n = (i, a) => {
            i.appendChild(a), t.remove(a, !0);
          },
          [s, ...o] = H(e.getBody().childNodes, pW);
        T(o, (i) => {
          n(s, i);
        });
        const r = t.select("div[id=mcepastebin]", s);
        for (let i = r.length - 1; i >= 0; i--) {
          const a = t.create("div");
          s.insertBefore(a, r[i]), n(a, r[i]);
        }
        return s ? s.innerHTML : "";
      },
      hw = (e) => e === gw,
      hW = (e) => {
        const t = $t(null);
        return {
          create: () => dW(e, t),
          remove: () => mW(e, t),
          getEl: () => ep(e),
          getHtml: () => gW(e),
          getLastRng: t.get,
        };
      },
      bw = (e, t) => (
        G.each(t, (n) => {
          Bn(n, RegExp) ? (e = e.replace(n, "")) : (e = e.replace(n[0], n[1]));
        }),
        e
      ),
      bW = (e) => {
        const t = ko(),
          n = di({}, t);
        let s = "";
        const o = t.getVoidElements(),
          r = G.makeMap(
            "script noscript style textarea video audio iframe object",
            " "
          ),
          i = t.getBlockElements(),
          a = (c) => {
            const f = c.name,
              d = c;
            if (f === "br") {
              s += `
`;
              return;
            }
            if (f !== "wbr") {
              if ((o[f] && (s += " "), r[f])) {
                s += " ";
                return;
              }
              if (
                (c.type === 3 && (s += c.value),
                !(c.name in t.getVoidElements()) && (c = c.firstChild))
              )
                do a(c);
                while ((c = c.next));
              i[f] &&
                d.next &&
                ((s += `
`),
                f === "p" &&
                  (s += `
`));
            }
          };
        return (e = bw(e, [/<!\[[^\]]+\]>/g])), a(n.parse(e)), s;
      },
      Cw = (e) => (
        (e = bw(e, [
          /^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,
          /<!--StartFragment-->|<!--EndFragment-->/g,
          [
            /( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,
            (n, s, o) => (!s && !o ? " " : Xt),
          ],
          /<br class="Apple-interchange-newline">/g,
          /<br>$/i,
        ])),
        e
      ),
      CW = (e) => {
        let t = 0;
        return () => e + t++;
      },
      yW = (e) => {
        const t = e.toLowerCase(),
          n = {
            jpg: "jpeg",
            jpe: "jpeg",
            jfi: "jpeg",
            jif: "jpeg",
            jfif: "jpeg",
            pjpeg: "jpeg",
            pjp: "jpeg",
            svg: "svg+xml",
          };
        return G.hasOwn(n, t) ? "image/" + n[t] : "image/" + t;
      },
      vW = (e, t) => {
        const n = di({}, e.schema);
        n.addNodeFilter("meta", (o) => {
          G.each(o, (r) => {
            r.remove();
          });
        });
        const s = n.parse(t, { forced_root_block: !1, isRootContent: !0 });
        return Po({ validate: !0 }, e.schema).serialize(s);
      },
      yw = (e, t) => ({ content: e, cancelled: t }),
      EW = (e, t, n) => {
        const s = e.dom.create("div", { style: "display:none" }, t),
          o = RP(e, s, n);
        return yw(o.node.innerHTML, o.isDefaultPrevented());
      },
      xW = (e, t, n) => {
        const s = TP(e, t, n),
          o = vW(e, s.content);
        return e.hasEventListeners("PastePostProcess") &&
          !s.isDefaultPrevented()
          ? EW(e, o, n)
          : yw(o, s.isDefaultPrevented());
      },
      wW = (e, t, n) => xW(e, t, n),
      tp = (e, t) => (e.insertContent(t, { merge: j1(e), paste: !0 }), !0),
      np = (e) => /^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e),
      SW = (e, t) =>
        np(t) && M(Zb(e), (n) => Eg(t.toLowerCase(), `.${n.toLowerCase()}`)),
      _W = (e, t, n) => (
        e.undoManager.extra(
          () => {
            n(e, t);
          },
          () => {
            e.insertContent('<img src="' + t + '">');
          }
        ),
        !0
      ),
      kW = (e, t, n) => (
        e.undoManager.extra(
          () => {
            n(e, t);
          },
          () => {
            e.execCommand("mceInsertLink", !1, t);
          }
        ),
        !0
      ),
      NW = (e, t, n) =>
        !e.selection.isCollapsed() && np(t) ? kW(e, t, n) : !1,
      AW = (e, t, n) => (SW(e, t) ? _W(e, t, n) : !1),
      TW = (e, t) => {
        G.each([NW, AW, tp], (n) => n(e, t, tp) !== !0);
      },
      RW = (e, t, n) => {
        n || !q1(e) ? tp(e, t) : TW(e, t);
      },
      PW = CW("mceclip"),
      vw = (e, t, n, s) => {
        const o = wW(e, t, n);
        o.cancelled === !1 && RW(e, o.content, s);
      },
      Wc = (e, t, n) => {
        const s = n || pw(t);
        vw(e, lW(t), s, !1);
      },
      sp = (e, t) => {
        const n = e.dom.encode(t).replace(
            /\r\n/g,
            `
`
          ),
          s = Vh(n, G1(e)),
          o = fW(s, wn(e), ir(e));
        vw(e, o, !1, !0);
      },
      Ew = (e) => {
        const t = {};
        if (e && e.types)
          for (let n = 0; n < e.types.length; n++) {
            const s = e.types[n];
            try {
              t[s] = e.getData(s);
            } catch {
              t[s] = "";
            }
          }
        return t;
      },
      Ci = (e, t) => t in e && e[t].length > 0,
      xw = (e) => Ci(e, "text/html") || Ci(e, "text/plain"),
      OW = (e, t) => {
        const n = t.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i);
        return ke(n) ? e.dom.encode(n[1]) : null;
      },
      DW = (e, t, n, s) => {
        const o = PW(),
          r = zb(e) && ke(n.name),
          i = r ? OW(e, n.name) : o,
          a = r ? n.name : void 0,
          c = t.create(o, n, s, i, a);
        return t.add(c), c;
      },
      BW = (e, t) => {
        const { data: n, type: s } = mc(t.uri),
          o = t.file,
          r = e.editorUpload.blobCache,
          i = r.getByData(n, s),
          a = i != null ? i : DW(e, r, o, n);
        Wc(e, `<img src="${a.blobUri()}">`, !1);
      },
      IW = (e) => e.type === "paste",
      $W = (e) =>
        Promise.all(U(e, (t) => oE(t).then((n) => ({ file: t, uri: n })))),
      LW = (e) => {
        const t = Zb(e);
        return (n) => qn(n.type, "image/") && M(t, (s) => yW(s) === n.type);
      },
      FW = (e, t) => {
        const n = t.items
            ? qe(pt(t.items), (o) => (o.kind === "file" ? [o.getAsFile()] : []))
            : [],
          s = t.files ? pt(t.files) : [];
        return H(n.length > 0 ? n : s, LW(e));
      },
      ww = (e, t, n) => {
        const s = IW(t) ? t.clipboardData : t.dataTransfer;
        if (Pl(e) && s) {
          const o = FW(e, s);
          if (o.length > 0)
            return (
              t.preventDefault(),
              $W(o).then((r) => {
                n && e.selection.setRng(n),
                  T(r, (i) => {
                    BW(e, i);
                  });
              }),
              !0
            );
        }
        return !1;
      },
      MW = (e) => {
        var t, n;
        return (
          et.os.isAndroid() &&
          ((n =
            (t = e.clipboardData) === null || t === void 0
              ? void 0
              : t.items) === null || n === void 0
            ? void 0
            : n.length) === 0
        );
      },
      UW = (e) =>
        (ge.metaKeyPressed(e) && e.keyCode === 86) ||
        (e.shiftKey && e.keyCode === 45),
      Sw = (e, t, n, s) => {
        let o = Cw(n);
        const r = Ci(t, Vc()) || pw(n),
          i = !r && cW(o),
          a = np(o);
        (hw(o) || !o.length || (i && !a)) && (s = !0),
          (s || a) &&
            (Ci(t, "text/plain") && i ? (o = t["text/plain"]) : (o = bW(o))),
          !hw(o) && (s ? sp(e, o) : Wc(e, o, r));
      },
      zW = (e, t, n) => {
        let s;
        const o = () => t.getLastRng() || e.selection.getRng();
        e.on("keydown", (r) => {
          UW(r) &&
            !r.isDefaultPrevented() &&
            (s = r.shiftKey && r.keyCode === 86);
        }),
          e.on("paste", (r) => {
            if (r.isDefaultPrevented() || MW(r)) return;
            const i = n.get() === "text" || s;
            s = !1;
            const a = Ew(r.clipboardData);
            (!xw(a) && ww(e, r, o())) ||
              (Ci(a, "text/html")
                ? (r.preventDefault(), Sw(e, a, a["text/html"], i))
                : (t.create(),
                  Un.setEditorTimeout(
                    e,
                    () => {
                      const c = t.getHtml();
                      t.remove(), Sw(e, a, c, i);
                    },
                    0
                  )));
          });
      },
      HW = (e) => {
        const t = (o) => qn(o, "webkit-fake-url"),
          n = (o) => qn(o, "data:"),
          s = (o) => {
            var r;
            return (
              ((r = o.data) === null || r === void 0 ? void 0 : r.paste) === !0
            );
          };
        e.parser.addNodeFilter("img", (o, r, i) => {
          if (!Pl(e) && s(i))
            for (const a of o) {
              const c = a.attr("src");
              be(c) &&
                !a.attr("data-mce-object") &&
                c !== et.transparentSrc &&
                (t(c) || (!Y1(e) && n(c))) &&
                a.remove();
            }
        });
      },
      VW = (e, t, n) => {
        zW(e, t, n), HW(e);
      },
      WW = (e, t) => {
        t.get() === "text"
          ? (t.set("html"), QC(e, !1))
          : (t.set("text"), QC(e, !0)),
          e.focus();
      },
      jW = (e, t) => {
        e.addCommand("mceTogglePlainTextPaste", () => {
          WW(e, t);
        }),
          e.addCommand("mceInsertClipboardContent", (n, s) => {
            s.html && Wc(e, s.html, s.internal), s.text && sp(e, s.text);
          });
      },
      qW = (e, t, n) => {
        try {
          return (
            e.clearData(),
            e.setData("text/html", t),
            e.setData("text/plain", n),
            e.setData(Vc(), t),
            !0
          );
        } catch {
          return !1;
        }
      },
      _w = (e, t, n, s) => {
        qW(e.clipboardData, t.html, t.text)
          ? (e.preventDefault(), s())
          : n(t.html, s);
      },
      kw = (e) => (t, n) => {
        const { dom: s, selection: o } = e,
          r = s.create("div", {
            contenteditable: "false",
            "data-mce-bogus": "all",
          }),
          i = s.create("div", { contenteditable: "true" }, t);
        s.setStyles(r, {
          position: "fixed",
          top: "0",
          left: "-3000px",
          width: "1000px",
          overflow: "hidden",
        }),
          r.appendChild(i),
          s.add(e.getBody(), r);
        const a = o.getRng();
        i.focus();
        const c = s.createRng();
        c.selectNodeContents(i),
          o.setRng(c),
          Un.setEditorTimeout(
            e,
            () => {
              o.setRng(a), s.remove(r), n();
            },
            0
          );
      },
      Nw = (e) => ({
        html: aW(e.selection.getContent({ contextual: !0 })),
        text: e.selection.getContent({ format: "text" }),
      }),
      KW = (e) =>
        !!e.dom.getParent(
          e.selection.getStart(),
          "td[data-mce-selected],th[data-mce-selected]",
          e.getBody()
        ),
      Aw = (e) => !e.selection.isCollapsed() || KW(e),
      GW = (e) => (t) => {
        !t.isDefaultPrevented() &&
          Aw(e) &&
          _w(t, Nw(e), kw(e), () => {
            if (et.browser.isChromium() || et.browser.isFirefox()) {
              const n = e.selection.getRng();
              Un.setEditorTimeout(
                e,
                () => {
                  e.selection.setRng(n), e.execCommand("Delete");
                },
                0
              );
            } else e.execCommand("Delete");
          });
      },
      YW = (e) => (t) => {
        !t.isDefaultPrevented() && Aw(e) && _w(t, Nw(e), kw(e), Ie);
      },
      XW = (e) => {
        e.on("cut", GW(e)), e.on("copy", YW(e));
      },
      Tw = (e, t) => {
        var n, s;
        return ci.getCaretRangeFromPoint(
          (n = t.clientX) !== null && n !== void 0 ? n : 0,
          (s = t.clientY) !== null && s !== void 0 ? s : 0,
          e.getDoc()
        );
      },
      QW = (e) => {
        const t = e["text/plain"];
        return t ? t.indexOf("file://") === 0 : !1;
      },
      Rw = (e, t) => {
        e.focus(), t && e.selection.setRng(t);
      },
      ZW = (e) => M(e.files, (t) => /^image\//.test(t.type)),
      JW = (e, t) => {
        U1(e) &&
          e.on("dragend dragover draggesture dragdrop drop drag", (n) => {
            n.preventDefault(), n.stopPropagation();
          }),
          Pl(e) ||
            e.on("drop", (n) => {
              const s = n.dataTransfer;
              s && ZW(s) && n.preventDefault();
            }),
          e.on("drop", (n) => {
            if (n.isDefaultPrevented() || t.get()) return;
            const s = Tw(e, n);
            if (Mt(s)) return;
            const o = Ew(n.dataTransfer),
              r = Ci(o, Vc());
            if ((!xw(o) || QW(o)) && ww(e, n, s)) return;
            const i = o[Vc()],
              a = i || o["text/html"] || o["text/plain"];
            a &&
              (n.preventDefault(),
              Un.setEditorTimeout(e, () => {
                e.undoManager.transact(() => {
                  i && e.execCommand("Delete"), Rw(e, s);
                  const c = Cw(a);
                  o["text/html"] ? Wc(e, c, r) : sp(e, c);
                });
              }));
          }),
          e.on("dragstart", (n) => {
            t.set(!0);
          }),
          e.on("dragover dragend", (n) => {
            Pl(e) && t.get() === !1 && (n.preventDefault(), Rw(e, Tw(e, n))),
              n.type === "dragend" && t.set(!1);
          });
      },
      e6 = (e) => {
        const t = (o) => (r) => {
            o(e, r);
          },
          n = z1(e);
        Ye(n) && e.on("PastePreProcess", t(n));
        const s = H1(e);
        Ye(s) && e.on("PastePostProcess", t(s));
      },
      t6 = (e, t) => {
        e.on("PastePreProcess", (n) => {
          n.content = t(e, n.content, n.internal);
        });
      },
      n6 = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
      Pw = (e) => G.trim(e).replace(n6, Fl).toLowerCase(),
      s6 = (e, t, n) => {
        const s = V1(e);
        if (n || s === "all" || !W1(e)) return t;
        const o = s ? s.split(/[, ]/) : [];
        if (o && s !== "none") {
          const r = e.dom,
            i = e.selection.getNode();
          t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, (a, c, f, d) => {
            const p = r.parseStyle(r.decode(f)),
              C = {};
            for (let x = 0; x < o.length; x++) {
              const y = p[o[x]];
              let E = y,
                _ = r.getStyle(i, o[x], !0);
              /color/.test(o[x]) && ((E = Pw(E)), (_ = Pw(_))),
                _ !== E && (C[o[x]] = y);
            }
            const b = r.serializeStyle(C, "span");
            return b ? c + ' style="' + b + '"' + d : c + d;
          });
        } else t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, "$1$3");
        return (
          (t = t.replace(
            /(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,
            (r, i, a, c) => i + ' style="' + a + '"' + c
          )),
          t
        );
      },
      o6 = (e) => {
        (et.browser.isChromium() || et.browser.isSafari()) && t6(e, s6);
      },
      r6 = (e) => {
        const t = $t(!1),
          n = $t(K1(e) ? "text" : "html"),
          s = hW(e);
        o6(e),
          jW(e, n),
          e6(e),
          e.on("PreInit", () => {
            XW(e), JW(e, t), VW(e, s, n);
          });
      },
      i6 = (e) => {
        e.on("click", (t) => {
          e.dom.getParent(t.target, "details") && t.preventDefault();
        });
      },
      a6 = (e) => {
        e.parser.addNodeFilter("details", (t) => {
          T(t, (n) => {
            n.attr("data-mce-open", n.attr("open")), n.attr("open", "open");
          });
        }),
          e.serializer.addNodeFilter("details", (t) => {
            T(t, (n) => {
              const s = n.attr("data-mce-open");
              n.attr("open", be(s) ? s : null), n.attr("data-mce-open", null);
            });
          });
      },
      l6 = (e) => {
        i6(e), a6(e);
      },
      Ow = (e) => ve(e) && Ih(S.fromDom(e)),
      c6 = (e) => {
        const t = e.selection.getRng(),
          n = L.fromRangeStart(t),
          s = L.fromRangeEnd(t);
        if (L.isElementPosition(n)) {
          const o = n.container();
          Ow(o) && mn(o).each((r) => t.setStart(r.container(), r.offset()));
        }
        if (L.isElementPosition(s)) {
          const o = n.container();
          Ow(o) && Rs(o).each((r) => t.setEnd(r.container(), r.offset()));
        }
        e.selection.setRng(Od(t));
      },
      u6 = (e) => {
        e.on("click", (t) => {
          t.detail >= 3 && c6(e);
        });
      };
    var Fa;
    (function (e) {
      (e.Before = "before"), (e.After = "after");
    })(Fa || (Fa = {}));
    const f6 = (e, t) => Math.abs(e.left - t),
      d6 = (e, t) => Math.abs(e.right - t),
      m6 = (e, t) => e >= t.top && e <= t.bottom,
      p6 = (e, t) => e.top < t.bottom && e.bottom > t.top,
      g6 = (e, t) => {
        const n = lT(e, t) / Math.min(e.height, t.height);
        return p6(e, t) && n > 0.5;
      },
      h6 = (e, t) => {
        const n = H(e, (s) => m6(t, s));
        return aT(n).fold(
          () => [[], e],
          (s) => {
            const { pass: o, fail: r } = Ce(e, (i) => g6(i, s));
            return [o, r];
          }
        );
      },
      b6 = (e, t) => ({
        node: e.node,
        position: f6(e, t) < d6(e, t) ? Fa.Before : Fa.After,
      }),
      C6 = (e, t, n) =>
        t > e.left && t < e.right
          ? 0
          : Math.min(Math.abs(e.left - t), Math.abs(e.right - t)),
      op = (e, t, n) => {
        const s = (d) =>
            es(d.node)
              ? g.some(d)
              : ve(d.node)
              ? op(pt(d.node.childNodes), t, n)
              : g.none(),
          o = (d, p) => {
            if (d.length >= 2) {
              const C = s(d[0]).getOr(d[0]),
                b = s(d[1]).getOr(d[1]);
              if (Math.abs(p(C, t, n) - p(b, t, n)) < 2) {
                if (ne(C.node)) return g.some(C);
                if (ne(b.node)) return g.some(b);
              }
            }
            return g.none();
          },
          r = (d, p) => {
            const C = jn(d, (b, x) => p(b, t, n) - p(x, t, n));
            return o(C, p).orThunk(() => en(C, s));
          },
          [i, a] = h6(R0(e), n),
          { pass: c, fail: f } = Ce(a, (d) => d.top < n);
        return r(i, C6)
          .orThunk(() => r(f, fb))
          .orThunk(() => r(c, fb));
      },
      y6 = (e, t, n, s) => {
        const o = (r, i) =>
          i
            .fold(
              () => op(pt(r.dom.childNodes), n, s),
              (a) => {
                const c = H(pt(r.dom.childNodes), (f) => f !== a.dom);
                return op(c, n, s);
              }
            )
            .orThunk(() =>
              (tt(r, e) ? g.none() : tN(r)).bind((c) => o(c, g.some(r)))
            );
        return o(t, g.none());
      },
      v6 = (e, t, n) => {
        const s = S.fromDom(e),
          o = yo(s),
          i = S.fromPoint(o, t, n)
            .filter((a) => Qs(s, a))
            .getOr(s);
        return y6(s, i, t, n);
      },
      E6 = (e, t, n) =>
        v6(e, t, n)
          .filter((s) => aa(s.node))
          .map((s) => b6(s, t)),
      Dw = (e) => {
        const t = e.getBoundingClientRect(),
          n = e.ownerDocument,
          s = n.documentElement,
          o = n.defaultView;
        return {
          top: t.top + o.pageYOffset - s.clientTop,
          left: t.left + o.pageXOffset - s.clientLeft,
        };
      },
      x6 = (e) => (e.inline ? Dw(e.getBody()) : { left: 0, top: 0 }),
      w6 = (e) => {
        const t = e.getBody();
        return e.inline
          ? { left: t.scrollLeft, top: t.scrollTop }
          : { left: 0, top: 0 };
      },
      S6 = (e) => {
        const t = e.getBody(),
          n = e.getDoc().documentElement,
          s = { left: t.scrollLeft, top: t.scrollTop },
          o = {
            left: t.scrollLeft || n.scrollLeft,
            top: t.scrollTop || n.scrollTop,
          };
        return e.inline ? s : o;
      },
      _6 = (e, t) => {
        if (t.target.ownerDocument !== e.getDoc()) {
          const n = Dw(e.getContentAreaContainer()),
            s = S6(e);
          return {
            left: t.pageX - n.left + s.left,
            top: t.pageY - n.top + s.top,
          };
        }
        return { left: t.pageX, top: t.pageY };
      },
      k6 = (e, t, n) => ({
        pageX: n.left - e.left + t.left,
        pageY: n.top - e.top + t.top,
      }),
      N6 = (e, t) => k6(x6(e), w6(e), _6(e, t)),
      rp = wt,
      A6 = Zs,
      T6 = (e, t) => rp(t) && t !== e,
      R6 = (e, t, n) => (t === n || e.dom.isChildOf(t, n) ? !1 : !rp(t)),
      P6 = (e) => {
        const t = e.cloneNode(!0);
        return t.removeAttribute("data-mce-selected"), t;
      },
      O6 = (e, t, n, s) => {
        const o = e.dom,
          r = t.cloneNode(!0);
        o.setStyles(r, { width: n, height: s }),
          o.setAttrib(r, "data-mce-selected", null);
        const i = o.create("div", {
          class: "mce-drag-container",
          "data-mce-bogus": "all",
          unselectable: "on",
          contenteditable: "false",
        });
        return (
          o.setStyles(i, {
            position: "absolute",
            opacity: 0.5,
            overflow: "hidden",
            border: 0,
            padding: 0,
            margin: 0,
            width: n,
            height: s,
          }),
          o.setStyles(r, { margin: 0, boxSizing: "border-box" }),
          i.appendChild(r),
          i
        );
      },
      D6 = (e, t) => {
        e.parentNode !== t && t.appendChild(e);
      },
      B6 = (e, t, n, s, o, r) => {
        let i = 0,
          a = 0;
        (e.style.left = t.pageX + "px"),
          (e.style.top = t.pageY + "px"),
          t.pageX + n > o && (i = t.pageX + n - o),
          t.pageY + s > r && (a = t.pageY + s - r),
          (e.style.width = n - i + "px"),
          (e.style.height = s - a + "px");
      },
      Bw = (e) => {
        e && e.parentNode && e.parentNode.removeChild(e);
      },
      I6 = (e) => e.button === 0,
      $6 = (e, t) => ({ pageX: t.pageX - e.relX, pageY: t.pageY + 5 }),
      L6 = (e, t) => (n) => {
        if (I6(n)) {
          const s = de(t.dom.getParents(n.target), dT(rp, A6)).getOr(null);
          if (T6(t.getBody(), s)) {
            const o = t.dom.getPos(s),
              r = t.getBody(),
              i = t.getDoc().documentElement;
            e.set({
              element: s,
              dragging: !1,
              screenX: n.screenX,
              screenY: n.screenY,
              maxX: (t.inline ? r.scrollWidth : i.offsetWidth) - 2,
              maxY: (t.inline ? r.scrollHeight : i.offsetHeight) - 2,
              relX: n.pageX - o.x,
              relY: n.pageY - o.y,
              width: s.offsetWidth,
              height: s.offsetHeight,
              ghost: O6(t, s, s.offsetWidth, s.offsetHeight),
            });
          }
        }
      },
      F6 = (e, t) => {
        const n = Sl((s, o) => {
          t._selectionOverrides.hideFakeCaret(), t.selection.placeCaretAt(s, o);
        }, 0);
        return (
          t.on("remove", n.cancel),
          (s) =>
            e.on((o) => {
              const r = Math.max(
                Math.abs(s.screenX - o.screenX),
                Math.abs(s.screenY - o.screenY)
              );
              if (!o.dragging && r > 10) {
                if (
                  t
                    .dispatch("dragstart", { target: o.element })
                    .isDefaultPrevented()
                )
                  return;
                (o.dragging = !0), t.focus();
              }
              if (o.dragging) {
                const i = $6(o, N6(t, s));
                D6(o.ghost, t.getBody()),
                  B6(o.ghost, i, o.width, o.height, o.maxX, o.maxY),
                  n.throttle(s.clientX, s.clientY);
              }
            })
        );
      },
      M6 = (e) => {
        const n = e.getSel().getRangeAt(0).startContainer;
        return n.nodeType === 3 ? n.parentNode : n;
      },
      U6 = (e, t) => (n) => {
        e.on((s) => {
          if (s.dragging) {
            if (R6(t, M6(t.selection), s.element)) {
              const o = P6(s.element);
              t
                .dispatch("drop", { clientX: n.clientX, clientY: n.clientY })
                .isDefaultPrevented() ||
                t.undoManager.transact(() => {
                  Bw(s.element),
                    t.insertContent(t.dom.getOuterHTML(o)),
                    t._selectionOverrides.hideFakeCaret();
                });
            }
            t.dispatch("dragend");
          }
        }),
          Iw(e);
      },
      z6 = (e, t) => () => {
        e.on((n) => {
          n.dragging && t.dispatch("dragend");
        }),
          Iw(e);
      },
      Iw = (e) => {
        e.on((t) => {
          Bw(t.ghost);
        }),
          e.clear();
      },
      H6 = (e) => {
        const t = No(),
          n = st.DOM,
          s = document,
          o = L6(t, e),
          r = F6(t, e),
          i = U6(t, e),
          a = z6(t, e);
        e.on("mousedown", o),
          e.on("mousemove", r),
          e.on("mouseup", i),
          n.bind(s, "mousemove", r),
          n.bind(s, "mouseup", a),
          e.on("remove", () => {
            n.unbind(s, "mousemove", r), n.unbind(s, "mouseup", a);
          }),
          e.on("keydown", (c) => {
            c.keyCode === ge.ESC && a();
          });
      },
      V6 = (e) => {
        const t = (o) => {
            if (!o.isDefaultPrevented()) {
              const r = o.dataTransfer;
              r &&
                (R(r.types, "Files") || r.files.length > 0) &&
                (o.preventDefault(),
                o.type === "drop" &&
                  vc(e, "Dropped file type is not supported"));
            }
          },
          n = (o) => {
            Yl(e, o.target) && t(o);
          },
          s = () => {
            const o = st.DOM,
              r = e.dom,
              i = document,
              a = e.inline ? e.getBody() : e.getDoc(),
              c = ["drop", "dragover"];
            T(c, (f) => {
              o.bind(i, f, n), r.bind(a, f, t);
            }),
              e.on("remove", () => {
                T(c, (f) => {
                  o.unbind(i, f, n), r.unbind(a, f, t);
                });
              });
          };
        e.on("init", () => {
          Un.setEditorTimeout(e, s, 0);
        });
      },
      W6 = (e) => {
        H6(e), R1(e) && V6(e);
      },
      j6 = (e) => {
        const t = Sl(() => {
          if (!e.removed && e.getBody().contains(document.activeElement)) {
            const n = e.selection.getRng();
            if (n.collapsed) {
              const s = hm(e, n, !1);
              e.selection.setRng(s);
            }
          }
        }, 0);
        e.on("focus", () => {
          t.throttle();
        }),
          e.on("blur", () => {
            t.cancel();
          });
      },
      q6 = (e) => {
        e.on("init", () => {
          e.on("focusin", (t) => {
            const n = t.target;
            if (ws(n)) {
              const s = xa(e.getBody(), n),
                o = wt(s) ? s : n;
              e.selection.getNode() !== o &&
                Aa(e, o).each((r) => e.selection.setRng(r));
            }
          });
        });
      },
      yi = wt,
      ip = (e, t) => xa(e.getBody(), t),
      K6 = (e) => {
        const t = e.selection,
          n = e.dom,
          s = n.isBlock,
          o = e.getBody(),
          r = mR(e, o, s, () => ur(e)),
          i = "sel-" + n.uniqueId(),
          a = "data-mce-selected";
        let c;
        const f = (q) => n.hasClass(q, "mce-offscreen-selection"),
          d = (q) => q !== o && (yi(q) || ws(q)) && n.isChildOf(q, o),
          p = (q) => {
            q && t.setRng(q);
          },
          C = (q, Q, J, Ee = !0) =>
            e
              .dispatch("ShowCaret", { target: Q, direction: q, before: J })
              .isDefaultPrevented()
              ? null
              : (Ee && t.scrollIntoView(Q, q === -1), r.show(J, Q)),
          b = (q) => {
            q.hasAttribute("data-mce-caret") && (Ju(q), t.scrollIntoView(q));
          },
          x = () => {
            e.on("click", (Q) => {
              const J = ip(e, Q.target);
              J && yi(J) && (Q.preventDefault(), e.focus());
            }),
              e.on("blur NewBlock", $),
              e.on("ResizeWindow FullscreenStateChanged", r.reposition),
              e.on(
                "tap",
                (Q) => {
                  const J = Q.target,
                    Ee = ip(e, J);
                  yi(Ee)
                    ? (Q.preventDefault(), Aa(e, Ee).each(I))
                    : d(J) && Aa(e, J).each(I);
                },
                !0
              ),
              e.on("mousedown", (Q) => {
                const J = Q.target;
                if (
                  (J !== o && J.nodeName !== "HTML" && !n.isChildOf(J, o)) ||
                  FM(e, Q.clientX, Q.clientY) === !1
                )
                  return;
                $(), W();
                const Ee = ip(e, J);
                yi(Ee)
                  ? (Q.preventDefault(), Aa(e, Ee).each(I))
                  : E6(o, Q.clientX, Q.clientY).each((ae) => {
                      Q.preventDefault();
                      const se = C(1, ae.node, ae.position === Fa.Before, !1);
                      p(se), ve(Ee) ? Ee.focus() : e.getBody().focus();
                    });
              }),
              e.on("keypress", (Q) => {
                ge.modifierPressed(Q) ||
                  (yi(t.getNode()) && Q.preventDefault());
              }),
              e.on("GetSelectionRange", (Q) => {
                let J = Q.range;
                if (c) {
                  if (!c.parentNode) {
                    c = null;
                    return;
                  }
                  (J = J.cloneRange()), J.selectNode(c), (Q.range = J);
                }
              }),
              e.on("SetSelectionRange", (Q) => {
                Q.range = _(Q.range);
                const J = I(Q.range, Q.forward);
                J && (Q.range = J);
              });
            const q = (Q) => Q.id === "mcepastebin";
            e.on("AfterSetSelectionRange", (Q) => {
              const J = Q.range,
                Ee = J.startContainer.parentNode;
              !E(J) && !q(Ee) && W(), f(Ee) || $();
            }),
              W6(e),
              j6(e),
              q6(e);
          },
          y = (q) => Ln(q) || bl(q) || Cl(q),
          E = (q) => y(q.startContainer) || y(q.endContainer),
          _ = (q) => {
            const Q = e.schema.getVoidElements(),
              J = n.createRng(),
              Ee = q.startContainer,
              ae = q.startOffset,
              se = q.endContainer,
              Ke = q.endOffset;
            return (
              Fe(Q, Ee.nodeName.toLowerCase())
                ? ae === 0
                  ? J.setStartBefore(Ee)
                  : J.setStartAfter(Ee)
                : J.setStart(Ee, ae),
              Fe(Q, se.nodeName.toLowerCase())
                ? Ke === 0
                  ? J.setEndBefore(se)
                  : J.setEndAfter(se)
                : J.setEnd(se, Ke),
              J
            );
          },
          P = (q, Q) => {
            const J = S.fromDom(e.getBody()),
              Ee = e.getDoc(),
              ae = Yi(J, "#" + i).getOrThunk(() => {
                const We = S.fromHtml(
                  '<div data-mce-bogus="all" class="mce-offscreen-selection"></div>',
                  Ee
                );
                return fn(We, "id", i), It(J, We), We;
              }),
              se = n.createRng();
            qi(ae),
              Xo(ae, [S.fromText(Xt, Ee), S.fromDom(Q), S.fromText(Xt, Ee)]),
              se.setStart(ae.dom.firstChild, 1),
              se.setEnd(ae.dom.lastChild, 0),
              al(ae, { top: n.getPos(q, e.getBody()).y + "px" }),
              hy(ae);
            const Ke = t.getSel();
            return Ke.removeAllRanges(), Ke.addRange(se), se;
          },
          z = (q) => {
            const Q = q.cloneNode(!0),
              J = e.dispatch("ObjectSelected", { target: q, targetClone: Q });
            if (J.isDefaultPrevented()) return null;
            const Ee = P(q, J.targetClone),
              ae = S.fromDom(q);
            return (
              T(xn(S.fromDom(e.getBody()), "*[data-mce-selected]"), (se) => {
                tt(ae, se) || Gn(se, a);
              }),
              n.getAttrib(q, a) || q.setAttribute(a, "1"),
              (c = q),
              W(),
              Ee
            );
          },
          I = (q, Q) => {
            if (!q) return null;
            if (q.collapsed) {
              if (!E(q)) {
                const se = Q ? 1 : -1,
                  Ke = fa(se, o, q),
                  We = Ke.getNode(!Q);
                if (aa(We)) return C(se, We, Q ? !Ke.isAtEnd() : !1, !1);
                const lt = Ke.getNode(Q);
                if (aa(lt)) return C(se, lt, Q ? !1 : !Ke.isAtEnd(), !1);
              }
              return null;
            }
            let J = q.startContainer,
              Ee = q.startOffset;
            const ae = q.endOffset;
            if (
              (J.nodeType === 3 &&
                Ee === 0 &&
                yi(J.parentNode) &&
                ((J = J.parentNode), (Ee = n.nodeIndex(J)), (J = J.parentNode)),
              J.nodeType !== 1)
            )
              return null;
            if (ae === Ee + 1 && J === q.endContainer) {
              const se = J.childNodes[Ee];
              if (d(se)) return z(se);
            }
            return null;
          },
          $ = () => {
            c && c.removeAttribute(a),
              Yi(S.fromDom(e.getBody()), "#" + i).each(At),
              (c = null);
          },
          te = () => {
            r.destroy(), (c = null);
          },
          W = () => {
            r.hide();
          };
        return (
          so(e) || x(),
          {
            showCaret: C,
            showBlockCaretContainer: b,
            hideFakeCaret: W,
            destroy: te,
          }
        );
      },
      $w = (e, t, n) => {
        if (ne(t) && (n < 0 || n > t.data.length)) return [];
        const s = [n];
        let o = t;
        for (; o !== e && o.parentNode; ) {
          const r = o.parentNode;
          for (let i = 0; i < r.childNodes.length; i++)
            if (r.childNodes[i] === o) {
              s.push(i);
              break;
            }
          o = r;
        }
        return o === e ? s.reverse() : [];
      },
      ap = (e, t, n, s, o) => {
        const r = $w(e, t, n),
          i = $w(e, s, o);
        return { start: r, end: i };
      },
      Lw = (e, t) => {
        const n = t.slice(),
          s = n.pop();
        return X(
          n,
          (r, i) => r.bind((a) => g.from(a.childNodes[i])),
          g.some(e)
        ).bind((r) =>
          ne(r) && (s < 0 || s > r.data.length)
            ? g.none()
            : g.some({ node: r, offset: s })
        );
      },
      Fw = (e, t) =>
        Lw(e, t.start).bind(({ node: n, offset: s }) =>
          Lw(e, t.end).map(({ node: o, offset: r }) => {
            const i = document.createRange();
            return i.setStart(n, s), i.setEnd(o, r), i;
          })
        ),
      G6 = (e, t) =>
        ap(e, t.startContainer, t.startOffset, t.endContainer, t.endOffset),
      vi = (e, t, n) => {
        if (t && e.isEmpty(t) && !n(t)) {
          const s = t.parentNode;
          e.remove(t), vi(e, s, n);
        }
      },
      jc = (e, t, n, s = !0) => {
        const o = t.startContainer.parentNode,
          r = t.endContainer.parentNode;
        t.deleteContents(),
          s &&
            !n(t.startContainer) &&
            (ne(t.startContainer) &&
              t.startContainer.data.length === 0 &&
              e.remove(t.startContainer),
            ne(t.endContainer) &&
              t.endContainer.data.length === 0 &&
              e.remove(t.endContainer),
            vi(e, o, n),
            o !== r && vi(e, r, n));
      },
      lp = (e, t) => g.from(e.dom.getParent(t.startContainer, e.dom.isBlock)),
      Mw = (e, t, n) => {
        U3(t, 0, t).each((o) => {
          const r = o.container;
          Nx(r, n.start.length, t).each((i) => {
            const a = e.createRng();
            a.setStart(r, 0),
              a.setEnd(i.container, i.offset),
              jc(e, a, (c) => c === t);
          });
        });
      },
      Y6 = (e, t) => {
        const n = e.dom,
          s = t.pattern,
          o = Fw(n.getRoot(), t.range).getOrDie("Unable to resolve path range"),
          r = (i, a) => {
            const c = a.get(i);
            return Nt(c) && Ut(c).exists((f) => Fe(f, "block"));
          };
        return (
          lp(e, o).each((i) => {
            s.type === "block-format"
              ? r(s.format, e.formatter) &&
                e.undoManager.transact(() => {
                  Mw(e.dom, i, s), e.formatter.apply(s.format);
                })
              : s.type === "block-command" &&
                e.undoManager.transact(() => {
                  Mw(e.dom, i, s), e.execCommand(s.cmd, !1, s.value);
                });
          }),
          !0
        );
      },
      X6 = (e, t) => {
        const n = t.replace(Xt, " ");
        return de(
          e,
          (s) => t.indexOf(s.start) === 0 || n.indexOf(s.start) === 0
        );
      },
      Q6 = (e, t) => {
        const n = e.dom,
          s = e.selection.getRng();
        return lp(e, s)
          .filter((o) => {
            const r = wn(e),
              i = n.is(o, r);
            return o !== null && i;
          })
          .bind((o) => {
            const r = o.textContent;
            return X6(t, r).map((a) =>
              G.trim(r).length === a.start.length
                ? []
                : [{ pattern: a, range: ap(n.getRoot(), o, 0, o, 0) }]
            );
          })
          .getOr([]);
      },
      Z6 = (e, t) => {
        if (t.length === 0) return;
        const n = e.selection.getBookmark();
        T(t, (s) => Y6(e, s)), e.selection.moveToBookmark(n);
      },
      Uw = (e, t) => e.create("span", { "data-mce-type": "bookmark", id: t }),
      qc = (e, t) => {
        const n = e.createRng();
        return n.setStartAfter(t.start), n.setEndBefore(t.end), n;
      },
      zw = (e, t, n) => {
        const s = Fw(e.getRoot(), n).getOrDie("Unable to resolve path range"),
          o = s.startContainer,
          r = s.endContainer,
          i = s.endOffset === 0 ? r : r.splitText(s.endOffset),
          a = s.startOffset === 0 ? o : o.splitText(s.startOffset);
        return {
          prefix: t,
          end: i.parentNode.insertBefore(Uw(e, t + "-end"), i),
          start: a.parentNode.insertBefore(Uw(e, t + "-start"), a),
        };
      },
      Hw = (e, t, n) => {
        vi(e, e.get(t.prefix + "-end"), n),
          vi(e, e.get(t.prefix + "-start"), n);
      },
      cp = (e) => e.start.length === 0,
      J6 = (e) => (t, n) => {
        const o = t.data.substring(0, n),
          r = o.lastIndexOf(e.charAt(e.length - 1)),
          i = o.lastIndexOf(e);
        return i !== -1 ? i + e.length : r !== -1 ? r + 1 : -1;
      },
      Vw = (e, t, n, s) => {
        const o = t.start;
        return $m(e, s.container, s.offset, J6(o), n).bind((i) => {
          if (i.offset >= o.length) {
            const a = e.createRng();
            return (
              a.setStart(i.container, i.offset - o.length),
              a.setEnd(i.container, i.offset),
              g.some(a)
            );
          } else {
            const a = i.offset - o.length;
            return Im(i.container, a, n)
              .map((c) => {
                const f = e.createRng();
                return (
                  f.setStart(c.container, c.offset),
                  f.setEnd(i.container, i.offset),
                  f
                );
              })
              .filter((c) => c.toString() === o)
              .orThunk(() => Vw(e, t, n, is(i.container, 0)));
          }
        });
      },
      e8 = (e, t, n, s, o, r = !1) => {
        if (t.start.length === 0 && !r) {
          const i = e.createRng();
          return i.setStart(n, s), i.setEnd(n, s), g.some(i);
        }
        return Bm(n, s, o).bind((i) =>
          Vw(e, t, o, i).bind((c) => {
            if (r) {
              if (c.endContainer === i.container && c.endOffset === i.offset)
                return g.none();
              if (
                i.offset === 0 &&
                c.endContainer.textContent.length === c.endOffset
              )
                return g.none();
            }
            return g.some(c);
          })
        );
      },
      t8 = (e, t, n) => {
        const s = e.dom,
          o = s.getRoot(),
          r = n.pattern,
          i = n.position.container,
          a = n.position.offset;
        return Im(i, a - n.pattern.end.length, t).bind((c) => {
          const f = ap(o, c.container, c.offset, i, a);
          if (cp(r))
            return g.some({
              matches: [{ pattern: r, startRng: f, endRng: f }],
              position: c,
            });
          {
            const d = Ww(e, n.remainingPatterns, c.container, c.offset, t),
              p = d.getOr({ matches: [], position: c }),
              C = p.position;
            return e8(s, r, C.container, C.offset, t, d.isNone()).map((x) => {
              const y = G6(o, x);
              return {
                matches: p.matches.concat([
                  { pattern: r, startRng: y, endRng: f },
                ]),
                position: is(x.startContainer, x.startOffset),
              };
            });
          }
        });
      },
      Ww = (e, t, n, s, o) => {
        const r = e.dom;
        return Bm(n, s, r.getRoot()).bind((i) => {
          const a = r.createRng();
          a.setStart(o, 0), a.setEnd(n, s);
          const c = a.toString();
          for (let f = 0; f < t.length; f++) {
            const d = t[f];
            if (!Eg(c, d.end)) continue;
            const p = t.slice();
            p.splice(f, 1);
            const C = t8(e, o, {
              pattern: d,
              remainingPatterns: p,
              position: i,
            });
            if (C.isSome()) return C;
          }
          return g.none();
        });
      },
      jw = (e, t, n) => {
        e.selection.setRng(n),
          t.type === "inline-format"
            ? T(t.format, (s) => {
                e.formatter.apply(s);
              })
            : e.execCommand(t.cmd, !1, t.value);
      },
      n8 = (e, t, n, s) => {
        const o = qc(e.dom, n);
        jc(e.dom, o, s), jw(e, t, o);
      },
      s8 = (e, t, n, s, o) => {
        const r = e.dom,
          i = qc(r, s),
          a = qc(r, n);
        jc(r, a, o), jc(r, i, o);
        const c = { prefix: n.prefix, start: n.end, end: s.start },
          f = qc(r, c);
        jw(e, t, f);
      },
      o8 = (e, t) => {
        const n = rb("mce_textpattern"),
          s = fe(
            t,
            (o, r) => {
              const i = zw(e, n + `_end${o.length}`, r.endRng);
              return o.concat([ct(Se({}, r), { endMarker: i })]);
            },
            []
          );
        return fe(
          s,
          (o, r) => {
            const i = s.length - o.length - 1,
              a = cp(r.pattern)
                ? r.endMarker
                : zw(e, n + `_start${i}`, r.startRng);
            return o.concat([ct(Se({}, r), { startMarker: a })]);
          },
          []
        );
      },
      qw = (e, t, n) => {
        const s = e.selection.getRng();
        return s.collapsed === !1
          ? []
          : lp(e, s)
              .bind((o) => {
                const r = Math.max(0, s.startOffset - (n ? 1 : 0));
                return Ww(e, t, s.startContainer, r, o);
              })
              .fold(
                () => [],
                (o) => o.matches
              );
      },
      Kw = (e, t) => {
        if (t.length === 0) return;
        const n = e.dom,
          s = e.selection.getBookmark(),
          o = o8(n, t);
        T(o, (r) => {
          const i = n.getParent(r.startMarker.start, n.isBlock),
            a = (c) => c === i;
          cp(r.pattern)
            ? n8(e, r.pattern, r.endMarker, a)
            : s8(e, r.pattern, r.startMarker, r.endMarker, a),
            Hw(n, r.endMarker, a),
            Hw(n, r.startMarker, a);
        }),
          e.selection.moveToBookmark(s);
      },
      r8 = (e) => e.inlinePatterns.length > 0 || e.blockPatterns.length > 0,
      i8 = (e, t) => {
        if (!e.selection.isCollapsed() || !r8(t)) return !1;
        const n = qw(e, t.inlinePatterns, !1),
          s = Q6(e, t.blockPatterns);
        return s.length > 0 || n.length > 0
          ? (e.undoManager.add(),
            e.undoManager.extra(
              () => {
                e.execCommand("mceInsertNewLine");
              },
              () => {
                e.insertContent(Qi), Kw(e, n), Z6(e, s);
                const o = e.selection.getRng(),
                  r = Bm(o.startContainer, o.startOffset, e.dom.getRoot());
                e.execCommand("mceInsertNewLine"),
                  r.each((i) => {
                    const a = i.container;
                    a.data.charAt(i.offset - 1) === Qi &&
                      (a.deleteData(i.offset - 1, 1),
                      vi(e.dom, a.parentNode, (c) => c === e.dom.getRoot()));
                  });
              }
            ),
            !0)
          : !1;
      },
      Gw = (e, t) => {
        if (t.length > 0) {
          const n = qw(e, t, !0);
          n.length > 0 &&
            e.undoManager.transact(() => {
              Kw(e, n);
            });
        }
      },
      Yw = (e, t, n) => {
        for (let s = 0; s < e.length; s++) if (n(e[s], t)) return !0;
        return !1;
      },
      a8 = (e, t) =>
        Yw(e, t, (n, s) => n === s.keyCode && ge.modifierPressed(s) === !1),
      l8 = (e, t) => Yw(e, t, (n, s) => n.charCodeAt(0) === s.charCode),
      c8 = (e) => {
        const t = [",", ".", ";", ":", "!", "?"],
          n = [32],
          s = () => MT(Xb(e)),
          o = () => Ib(Xb(e));
        e.on(
          "keydown",
          (r) => {
            r.keyCode === 13 &&
              !ge.modifierPressed(r) &&
              i8(e, s()) &&
              r.preventDefault();
          },
          !0
        ),
          e.on("keyup", (r) => {
            a8(n, r) && Gw(e, o());
          }),
          e.on("keypress", (r) => {
            l8(t, r) &&
              Un.setEditorTimeout(e, () => {
                Gw(e, o());
              });
          });
      },
      u8 = (e) => {
        c8(e);
      },
      f8 = (e) => {
        const t = G.each,
          n = ge.BACKSPACE,
          s = ge.DELETE,
          o = e.dom,
          r = e.selection,
          i = e.parser,
          a = et.browser,
          c = a.isFirefox(),
          f = a.isChromium() || a.isSafari(),
          d = et.deviceType.isiPhone() || et.deviceType.isiPad(),
          p = et.os.isMacOS() || et.os.isiOS(),
          C = (me, le) => {
            try {
              e.getDoc().execCommand(me, !1, le);
            } catch {}
          },
          b = (me) => me.isDefaultPrevented(),
          x = () => {
            const me = (xe) => {
                const Be = o.create("body"),
                  Ct = xe.cloneContents();
                return (
                  Be.appendChild(Ct),
                  r.serializer.serialize(Be, { format: "html" })
                );
              },
              le = (xe) => {
                const Be = me(xe),
                  Ct = o.createRng();
                Ct.selectNode(e.getBody());
                const Lt = me(Ct);
                return Be === Lt;
              };
            e.on("keydown", (xe) => {
              const Be = xe.keyCode;
              let Ct, Lt;
              if (!b(xe) && (Be === s || Be === n)) {
                if (
                  ((Ct = e.selection.isCollapsed()),
                  (Lt = e.getBody()),
                  (Ct && !o.isEmpty(Lt)) || (!Ct && !le(e.selection.getRng())))
                )
                  return;
                xe.preventDefault(),
                  e.setContent(""),
                  Lt.firstChild && o.isBlock(Lt.firstChild)
                    ? e.selection.setCursorLocation(Lt.firstChild, 0)
                    : e.selection.setCursorLocation(Lt, 0),
                  e.nodeChanged();
              }
            });
          },
          y = () => {
            e.shortcuts.add("meta+a", null, "SelectAll");
          },
          E = () => {
            e.inline ||
              o.bind(e.getDoc(), "mousedown mouseup", (me) => {
                let le;
                if (me.target === e.getDoc().documentElement)
                  if (
                    ((le = r.getRng()),
                    e.getBody().focus(),
                    me.type === "mousedown")
                  ) {
                    if (Ln(le.startContainer)) return;
                    r.placeCaretAt(me.clientX, me.clientY);
                  } else r.setRng(le);
              });
          },
          _ = () => {
            e.on("keydown", (me) => {
              if (!b(me) && me.keyCode === n) {
                if (!e.getBody().getElementsByTagName("hr").length) return;
                if (r.isCollapsed() && r.getRng().startOffset === 0) {
                  const le = r.getNode(),
                    xe = le.previousSibling;
                  if (le.nodeName === "HR") {
                    o.remove(le), me.preventDefault();
                    return;
                  }
                  xe &&
                    xe.nodeName &&
                    xe.nodeName.toLowerCase() === "hr" &&
                    (o.remove(xe), me.preventDefault());
                }
              }
            });
          },
          P = () => {
            Range.prototype.getClientRects ||
              e.on("mousedown", (me) => {
                if (!b(me) && me.target.nodeName === "HTML") {
                  const le = e.getBody();
                  le.blur(),
                    Un.setEditorTimeout(e, () => {
                      le.focus();
                    });
                }
              });
          },
          z = () => {
            const me = Yb(e);
            e.on("click", (le) => {
              const xe = le.target;
              /^(IMG|HR)$/.test(xe.nodeName) &&
                o.getContentEditableParent(xe) !== "false" &&
                (le.preventDefault(), e.selection.select(xe), e.nodeChanged()),
                xe.nodeName === "A" &&
                  o.hasClass(xe, me) &&
                  xe.childNodes.length === 0 &&
                  (le.preventDefault(), r.select(xe));
            });
          },
          I = () => {
            const me = () => {
                const xe = o.getAttribs(r.getStart().cloneNode(!1));
                return () => {
                  const Be = r.getStart();
                  Be !== e.getBody() &&
                    (o.setAttrib(Be, "style", null),
                    t(xe, (Ct) => {
                      Be.setAttributeNode(Ct.cloneNode(!0));
                    }));
                };
              },
              le = () =>
                !r.isCollapsed() &&
                o.getParent(r.getStart(), o.isBlock) !==
                  o.getParent(r.getEnd(), o.isBlock);
            e.on("keypress", (xe) => {
              let Be;
              if (!b(xe) && (xe.keyCode === 8 || xe.keyCode === 46) && le())
                return (
                  (Be = me()),
                  e.getDoc().execCommand("delete", !1, null),
                  Be(),
                  xe.preventDefault(),
                  !1
                );
            }),
              o.bind(e.getDoc(), "cut", (xe) => {
                let Be;
                !b(xe) &&
                  le() &&
                  ((Be = me()),
                  Un.setEditorTimeout(e, () => {
                    Be();
                  }));
              });
          },
          $ = () => {
            e.on("keydown", (me) => {
              if (
                !b(me) &&
                me.keyCode === n &&
                r.isCollapsed() &&
                r.getRng().startOffset === 0
              ) {
                const le = r.getNode().previousSibling;
                if (le && le.nodeName && le.nodeName.toLowerCase() === "table")
                  return me.preventDefault(), !1;
              }
            });
          },
          te = () => {
            e.on("keydown", (me) => {
              let le, xe;
              if (b(me) || me.keyCode !== ge.BACKSPACE) return;
              le = r.getRng();
              const Be = le.startContainer,
                Ct = le.startOffset,
                Lt = o.getRoot();
              if (((xe = Be), !(!le.collapsed || Ct !== 0))) {
                for (
                  ;
                  xe &&
                  xe.parentNode &&
                  xe.parentNode.firstChild === xe &&
                  xe.parentNode !== Lt;

                )
                  xe = xe.parentNode;
                xe.tagName === "BLOCKQUOTE" &&
                  (e.formatter.toggle("blockquote", null, xe),
                  (le = o.createRng()),
                  le.setStart(Be, 0),
                  le.setEnd(Be, 0),
                  r.setRng(le));
              }
            });
          },
          W = () => {
            const me = () => {
              C("StyleWithCSS", !1),
                C("enableInlineTableEditing", !1),
                qb(e) || C("enableObjectResizing", !1);
            };
            Gb(e) || e.on("BeforeExecCommand mousedown", me);
          },
          q = () => {
            const me = () => {
              t(o.select("a"), (le) => {
                let xe = le.parentNode;
                const Be = o.getRoot();
                if (xe.lastChild === le) {
                  for (; xe && !o.isBlock(xe); ) {
                    if (xe.parentNode.lastChild !== xe || xe === Be) return;
                    xe = xe.parentNode;
                  }
                  o.add(xe, "br", { "data-mce-bogus": 1 });
                }
              });
            };
            e.on("SetContent ExecCommand", (le) => {
              (le.type === "setcontent" || le.command === "mceInsertLink") &&
                me();
            });
          },
          Q = () => {
            e.on("init", () => {
              C("DefaultParagraphSeparator", wn(e));
            });
          },
          J = () => {
            e.on(
              "keyup focusin mouseup",
              (me) => {
                ge.modifierPressed(me) || r.normalize();
              },
              !0
            );
          },
          Ee = () => {
            e.contentStyles.push(
              "img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"
            );
          },
          ae = () => {
            e.inline ||
              e.on("keydown", () => {
                document.activeElement === document.body && e.getWin().focus();
              });
          },
          se = () => {
            e.inline ||
              (e.contentStyles.push("body {min-height: 150px}"),
              e.on("click", (me) => {
                let le;
                me.target.nodeName === "HTML" &&
                  ((le = e.selection.getRng()),
                  e.getBody().focus(),
                  e.selection.setRng(le),
                  e.selection.normalize(),
                  e.nodeChanged());
              }));
          },
          Ke = () => {
            p &&
              e.on("keydown", (me) => {
                ge.metaKeyPressed(me) &&
                  !me.shiftKey &&
                  (me.keyCode === 37 || me.keyCode === 39) &&
                  (me.preventDefault(),
                  e.selection
                    .getSel()
                    .modify(
                      "move",
                      me.keyCode === 37 ? "backward" : "forward",
                      "lineboundary"
                    ));
              });
          },
          We = () => {
            e.on("click", (me) => {
              let le = me.target;
              do
                if (le.tagName === "A") {
                  me.preventDefault();
                  return;
                }
              while ((le = le.parentNode));
            }),
              e.contentStyles.push(
                ".mce-content-body {-webkit-touch-callout: none}"
              );
          },
          lt = () => {
            e.on("init", () => {
              e.dom.bind(e.getBody(), "submit", (me) => {
                me.preventDefault();
              });
            });
          },
          qt = () => {
            i.addNodeFilter("br", (me) => {
              let le = me.length;
              for (; le--; )
                me[le].attr("class") === "Apple-interchange-newline" &&
                  me[le].remove();
            });
          },
          Z = Ie,
          pe = () => {
            if (!c || e.removed) return !1;
            const me = e.selection.getSel();
            return !me || !me.rangeCount || me.rangeCount === 0;
          },
          Me = () => {
            f && (E(), z(), lt(), y(), d && (ae(), se(), We())),
              c && (P(), W(), Ee(), Ke());
          },
          De = () => {
            te(),
              x(),
              et.windowsPhone || J(),
              f &&
                (E(), z(), Q(), lt(), $(), qt(), d ? (ae(), se(), We()) : y()),
              c && (_(), P(), I(), W(), q(), Ee(), Ke(), $());
          };
        return so(e) ? Me() : De(), { refreshContentEditable: Z, isHidden: pe };
      },
      up = st.DOM,
      d8 = (e, t) => {
        const n = S.fromDom(e.getBody()),
          s = Hu(Yo(n)),
          o = S.fromTag("style");
        fn(o, "type", "text/css"),
          It(o, S.fromText(t)),
          It(s, o),
          e.on("remove", () => {
            At(o);
          });
      },
      m8 = (e) => (e.inline ? e.getElement().nodeName.toLowerCase() : void 0),
      fp = (e) => Li(e, (t) => Pt(t) === !1),
      Xw = (e) => {
        const t = e.options.get,
          n = e.editorUpload.blobCache;
        return fp({
          allow_conditional_comments: t("allow_conditional_comments"),
          allow_html_data_urls: t("allow_html_data_urls"),
          allow_svg_data_urls: t("allow_svg_data_urls"),
          allow_html_in_named_anchor: t("allow_html_in_named_anchor"),
          allow_script_urls: t("allow_script_urls"),
          allow_unsafe_link_target: t("allow_unsafe_link_target"),
          convert_fonts_to_spans: t("convert_fonts_to_spans"),
          fix_list_elements: t("fix_list_elements"),
          font_size_legacy_values: t("font_size_legacy_values"),
          forced_root_block: t("forced_root_block"),
          forced_root_block_attrs: t("forced_root_block_attrs"),
          preserve_cdata: t("preserve_cdata"),
          remove_trailing_brs: t("remove_trailing_brs"),
          inline_styles: t("inline_styles"),
          root_name: m8(e),
          validate: !0,
          blob_cache: n,
          document: e.getDoc(),
        });
      },
      Qw = (e) => {
        const t = e.options.get;
        return fp({
          custom_elements: t("custom_elements"),
          extended_valid_elements: t("extended_valid_elements"),
          invalid_elements: t("invalid_elements"),
          invalid_styles: t("invalid_styles"),
          schema: t("schema"),
          valid_children: t("valid_children"),
          valid_classes: t("valid_classes"),
          valid_elements: t("valid_elements"),
          valid_styles: t("valid_styles"),
          verify_html: t("verify_html"),
        });
      },
      p8 = (e) => {
        const t = e.options.get;
        return Se(
          Se(Se({}, Xw(e)), Qw(e)),
          fp({
            url_converter: t("url_converter"),
            url_converter_scope: t("url_converter_scope"),
            element_format: t("element_format"),
            entities: t("entities"),
            entity_encoding: t("entity_encoding"),
            indent: t("indent"),
            indent_after: t("indent_after"),
            indent_before: t("indent_before"),
          })
        );
      },
      g8 = (e) => {
        const t = di(Xw(e), e.schema);
        return (
          t.addAttributeFilter("src,href,style,tabindex", (n, s) => {
            let o = n.length,
              r,
              i;
            const a = e.dom,
              c = "data-mce-" + s;
            for (; o--; )
              if (((r = n[o]), (i = r.attr(s)), i && !r.attr(c))) {
                if (i.indexOf("data:") === 0 || i.indexOf("blob:") === 0)
                  continue;
                s === "style"
                  ? ((i = a.serializeStyle(a.parseStyle(i), r.name)),
                    i.length || (i = null),
                    r.attr(c, i),
                    r.attr(s, i))
                  : s === "tabindex"
                  ? (r.attr(c, i), r.attr(s, null))
                  : r.attr(c, e.convertURL(i, s, r.name));
              }
          }),
          t.addNodeFilter("script", (n) => {
            let s = n.length;
            for (; s--; ) {
              const o = n[s],
                r = o.attr("type") || "no/type";
              r.indexOf("mce-") !== 0 && o.attr("type", "mce-" + r);
            }
          }),
          e.options.get("preserve_cdata") &&
            t.addNodeFilter("#cdata", (n) => {
              let s = n.length;
              for (; s--; ) {
                const o = n[s];
                (o.type = 8),
                  (o.name = "#comment"),
                  (o.value = "[CDATA[" + e.dom.encode(o.value) + "]]");
              }
            }),
          t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", (n) => {
            let s = n.length;
            const o = e.schema.getNonEmptyElements();
            for (; s--; ) {
              const r = n[s];
              r.isEmpty(o) &&
                r.getAll("br").length === 0 &&
                r.append(new pn("br", 1));
            }
          }),
          t
        );
      },
      h8 = (e) => {
        const t = L1(e);
        t &&
          Un.setEditorTimeout(
            e,
            () => {
              let n;
              t === !0 ? (n = e) : (n = e.editorManager.get(t)),
                n.destroyed || n.focus();
            },
            100
          );
      },
      b8 = (e) => {
        const t = e.dom.getRoot();
        !e.inline &&
          (!Vl(e) || e.selection.getStart(!0) === t) &&
          mn(t).each((n) => {
            const s = n.getNode(),
              o = Ki(s) ? mn(s).getOr(n) : n;
            e.selection.setRng(o.toRange());
          });
      },
      C8 = (e) => {
        e.bindPendingEventDelegates(),
          (e.initialized = !0),
          xP(e),
          e.focus(!0),
          b8(e),
          e.nodeChanged({ initial: !0 });
        const t = I1(e);
        Ye(t) && t.call(e, e), h8(e);
      },
      Zw = (e) => (e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader),
      y8 = (e, t, n) => {
        const s = [Zw(e).loadAll(t)];
        return e.inline ? s : s.concat([e.ui.styleSheetLoader.loadAll(n)]);
      },
      Jw = (e) => {
        const t = Zw(e),
          n = jb(e),
          s = e.contentCSS,
          o = () => {
            t.unloadAll(s), e.inline || e.ui.styleSheetLoader.unloadAll(n);
          },
          r = () => {
            e.removed ? o() : e.on("remove", o);
          };
        if (e.contentStyles.length > 0) {
          let c = "";
          G.each(e.contentStyles, (f) => {
            c +=
              f +
              `\r
`;
          }),
            e.dom.addStyle(c);
        }
        const i = Promise.all(y8(e, s, n)).then(r).catch(r),
          a = u1(e);
        return a && d8(e, a), i;
      },
      v8 = (e) => {
        const t = e.getDoc(),
          n = e.getBody();
        vP(e),
          F1(e) ||
            ((t.body.spellcheck = !1), up.setAttrib(n, "spellcheck", "false")),
          (e.quirks = f8(e)),
          EP(e);
        const s = f1(e);
        s !== void 0 && (n.dir = s);
        const o = M1(e);
        o &&
          e.on("BeforeSetContent", (r) => {
            G.each(o, (i) => {
              r.content = r.content.replace(
                i,
                (a) => "<!--mce:protected " + escape(a) + "-->"
              );
            });
          }),
          e.on("SetContent", () => {
            e.addVisual(e.getBody());
          }),
          e.on("compositionstart compositionend", (r) => {
            e.composing = r.type === "compositionstart";
          });
      },
      E8 = (e) => {
        so(e) || e.load({ initial: !0, format: "html" }),
          (e.startContent = e.getContent({ format: "raw" }));
      },
      dp = (e) => {
        e.removed !== !0 && (E8(e), C8(e));
      },
      eS = (e) => {
        const t = e.getElement();
        let n = e.getDoc();
        e.inline &&
          (up.addClass(t, "mce-content-body"),
          (e.contentDocument = n = document),
          (e.contentWindow = window),
          (e.bodyElement = t),
          (e.contentAreaContainer = t));
        const s = e.getBody();
        (s.disabled = !0),
          (e.readonly = Gb(e)),
          e.readonly ||
            (e.inline &&
              up.getStyle(s, "position", !0) === "static" &&
              (s.style.position = "relative"),
            (s.contentEditable = "true")),
          (s.disabled = !1),
          (e.editorUpload = cU(e)),
          (e.schema = ko(Qw(e))),
          (e.dom = st(n, {
            keep_values: !0,
            url_converter: e.convertURL,
            url_converter_scope: e,
            update_styles: !0,
            root_element: e.inline ? e.getBody() : null,
            collect: () => e.inline,
            schema: e.schema,
            contentCssCors: i1(e),
            referrerPolicy: _f(e),
            onSetAttrib: (i) => {
              e.dispatch("SetAttrib", i);
            },
          })),
          (e.parser = g8(e)),
          (e.serializer = BE(p8(e), e)),
          (e.selection = DE(e.dom, e.getWin(), e.serializer, e)),
          (e.annotator = jC(e)),
          (e.formatter = qE(e)),
          (e.undoManager = GE(e)),
          (e._nodeChangeDispatcher = new iW(e)),
          (e._selectionOverrides = K6(e)),
          RH(e),
          l6(e),
          FH(e),
          so(e) || (u6(e), u8(e));
        const o = rW(e);
        NH(e, o), IH(e), SU(e), r6(e);
        const r = yF(e);
        v8(e),
          r.fold(
            () => {
              Jw(e).then(() => dp(e));
            },
            (i) => {
              e.setProgressState(!0),
                Jw(e).then(() => {
                  i().then(
                    (a) => {
                      e.setProgressState(!1), dp(e), AE(e);
                    },
                    (a) => {
                      e.notificationManager.open({
                        type: "error",
                        text: String(a),
                      }),
                        dp(e),
                        AE(e);
                    }
                  );
                });
            }
          );
      },
      tS = (e, t) => {
        if (
          (e.inline || (e.getElement().style.visibility = e.orgVisibility),
          !t && !e.inline)
        ) {
          const n = e.iframeElement,
            s = tU(S.fromDom(n), "load", () => {
              s.unbind(), (e.contentDocument = n.contentDocument), eS(e);
            });
          n.srcdoc = e.iframeHTML;
        } else eS(e);
      },
      Kc = st.DOM,
      x8 = (e, t, n, s) => {
        const o = S.fromTag("iframe");
        return (
          s.each((r) => fn(o, "tabindex", r)),
          Es(o, n),
          Es(o, {
            id: e + "_ifr",
            frameBorder: "0",
            allowTransparency: "true",
            title: t,
          }),
          Hi(o, "tox-edit-area__iframe"),
          o
        );
      },
      w8 = (e) => {
        let t = qT(e) + "<html><head>";
        Fb(e) !== e.documentBaseUrl &&
          (t += '<base href="' + e.documentBaseURI.getURI() + '" />'),
          (t +=
            '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />');
        const n = KT(e),
          s = GT(e),
          o = e.translate(D1(e));
        return (
          Mb(e) &&
            (t +=
              '<meta http-equiv="Content-Security-Policy" content="' +
              Mb(e) +
              '" />'),
          (t += `</head><body id="${n}" class="mce-content-body ${s}" data-id="${e.id}" aria-label="${o}"><br></body></html>`),
          t
        );
      },
      S8 = (e, t) => {
        const n = e.translate("Rich Text Area"),
          s = ol(S.fromDom(e.getElement()), "tabindex").bind(Sk),
          o = x8(e.id, n, jT(e), s).dom;
        (o.onload = () => {
          (o.onload = null), e.dispatch("load");
        }),
          (e.contentAreaContainer = t.iframeContainer),
          (e.iframeElement = o),
          (e.iframeHTML = w8(e)),
          Kc.add(t.iframeContainer, o);
      },
      _8 = (e, t) => {
        S8(e, t),
          t.editorContainer &&
            ((Kc.get(t.editorContainer).style.display = e.orgDisplay),
            (e.hidden = Kc.isHidden(t.editorContainer))),
          (e.getElement().style.display = "none"),
          Kc.setAttrib(e.id, "aria-hidden", "true"),
          tS(e);
      },
      nS = st.DOM,
      k8 = (e, t, n) => {
        const s = pi.get(n),
          o = pi.urls[n] || e.documentBaseUrl.replace(/\/$/, "");
        if (((n = G.trim(n)), s && G.inArray(t, n) === -1)) {
          if (e.plugins[n]) return;
          try {
            const r = s(e, o) || {};
            (e.plugins[n] = r), Ye(r.init) && (r.init(e, o), t.push(n));
          } catch (r) {
            YM(e, n, r);
          }
        }
      },
      N8 = (e) => e.replace(/^\-/, ""),
      A8 = (e) => {
        const t = [];
        T(Rl(e), (n) => {
          k8(e, t, N8(n));
        });
      },
      T8 = (e) => {
        const t = G.trim(Hb(e)),
          n = e.ui.registry.getAll().icons,
          s = Se(Se({}, yc.get("default").icons), yc.get(t).icons);
        ht(s, (o, r) => {
          Fe(n, r) || e.ui.registry.addIcon(r, o);
        });
      },
      R8 = (e) => {
        const t = ei(e);
        if (be(t)) {
          const n = hr.get(t);
          (e.theme = n(e, hr.urls[t]) || {}),
            Ye(e.theme.init) &&
              e.theme.init(
                e,
                hr.urls[t] || e.documentBaseUrl.replace(/\/$/, "")
              );
        } else e.theme = {};
      },
      P8 = (e) => {
        const t = kf(e),
          n = mi.get(t);
        e.model = n(e, mi.urls[t]);
      },
      O8 = (e) => e.theme.renderUI(),
      D8 = (e) => {
        const t = e.getElement(),
          s = ei(e)(e, t);
        return (
          s.editorContainer.nodeType &&
            (s.editorContainer.id = s.editorContainer.id || e.id + "_parent"),
          s.iframeContainer &&
            s.iframeContainer.nodeType &&
            (s.iframeContainer.id =
              s.iframeContainer.id || e.id + "_iframecontainer"),
          (s.height = s.iframeHeight ? s.iframeHeight : t.offsetHeight),
          s
        );
      },
      sS = (e) => ({ editorContainer: e, iframeContainer: e, api: {} }),
      B8 = (e) => {
        const t = nS.create("div");
        return nS.insertAfter(t, e), sS(t);
      },
      I8 = (e) => {
        const t = e.getElement();
        return e.inline ? sS(null) : B8(t);
      },
      $8 = (e) => {
        const t = e.getElement();
        return (
          (e.orgDisplay = t.style.display),
          be(ei(e)) ? O8(e) : Ye(ei(e)) ? D8(e) : I8(e)
        );
      },
      L8 = (e, t) => {
        const n = {
          show: g.from(t.show).getOr(Ie),
          hide: g.from(t.hide).getOr(Ie),
          isEnabled: g.from(t.isEnabled).getOr(rt),
          setEnabled: (s) => {
            e.mode.isReadOnly() || g.from(t.setEnabled).each((o) => o(s));
          },
        };
        e.ui = Se(Se({}, e.ui), n);
      },
      F8 = (e) => {
        e.dispatch("ScriptsLoaded"), T8(e), R8(e), P8(e), A8(e);
        const t = $8(e);
        L8(e, g.from(t.api).getOr({}));
        const n = {
          editorContainer: t.editorContainer,
          iframeContainer: t.iframeContainer,
        };
        return (
          (e.editorContainer = n.editorContainer ? n.editorContainer : null),
          JM(e),
          e.inline ? tS(e) : _8(e, n)
        );
      },
      Cr = st.DOM,
      oS = (e) => e.charAt(0) === "-",
      M8 = (e, t) => {
        const n = Vb(t),
          s = a1(t);
        if (ts.hasCode(n) === !1 && n !== "en") {
          const o = Gs(s) ? s : `${t.editorManager.baseURL}/langs/${n}.js`;
          e.add(o).catch(() => {
            qM(t, o, n);
          });
        }
      },
      U8 = (e, t) => {
        const n = ei(e);
        if (be(n) && !oS(n) && !Fe(hr.urls, n)) {
          const s = h1(e),
            o = s
              ? e.documentBaseURI.toAbsolute(s)
              : `themes/${n}/theme${t}.js`;
          hr.load(n, o).catch(() => {
            KM(e, o, n);
          });
        }
      },
      z8 = (e, t) => {
        const n = kf(e);
        if (n !== "plugin" && !Fe(mi.urls, n)) {
          const s = b1(e),
            o = be(s)
              ? e.documentBaseURI.toAbsolute(s)
              : `models/${n}/model${t}.js`;
          mi.load(n, o).catch(() => {
            GM(e, o, n);
          });
        }
      },
      H8 = (e) =>
        g
          .from(t1(e))
          .filter(Gs)
          .map((t) => ({ url: t, name: g.none() })),
      rS = (e, t, n) =>
        g
          .from(t)
          .filter((s) => Gs(s) && !yc.has(s))
          .map((s) => ({
            url: `${e.editorManager.baseURL}/icons/${s}/icons${n}.js`,
            name: g.some(s),
          })),
      V8 = (e, t, n) => {
        const s = rS(t, "default", n),
          o = H8(t).orThunk(() => rS(t, Hb(t), ""));
        T(Fk([s, o]), (r) => {
          e.add(r.url).catch(() => {
            jM(t, r.url, r.name.getOrUndefined());
          });
        });
      },
      W8 = (e, t) => {
        const n = (s, o) => {
          pi.load(s, o).catch(() => {
            WM(e, o, s);
          });
        };
        ht(T1(e), (s, o) => {
          n(o, s), e.options.set("plugins", Rl(e).concat(o));
        }),
          T(Rl(e), (s) => {
            (s = G.trim(s)),
              s && !pi.urls[s] && !oS(s) && n(s, `plugins/${s}/plugin${t}.js`);
          });
      },
      j8 = (e) => {
        const t = ei(e);
        return !be(t) || ke(hr.get(t));
      },
      q8 = (e) => {
        const t = kf(e);
        return ke(mi.get(t));
      },
      K8 = (e, t) => {
        const n = Js.ScriptLoader,
          s = () => {
            !e.removed && j8(e) && q8(e) && F8(e);
          };
        U8(e, t),
          z8(e, t),
          M8(n, e),
          V8(n, e, t),
          W8(e, t),
          n.loadQueue().then(s, s);
      },
      G8 = (e, t) =>
        Bh.forElement(e, { contentCssCors: A1(t), referrerPolicy: _f(t) }),
      Y8 = (e) => {
        const t = e.id;
        ts.setCode(Vb(e));
        const n = () => {
          Cr.unbind(window, "ready", n), e.render();
        };
        if (!nr.Event.domLoaded) {
          Cr.bind(window, "ready", n);
          return;
        }
        if (!e.getElement()) return;
        const s = S.fromDom(e.getElement()),
          o = Qg(s);
        e.on("remove", () => {
          ce(s.dom.attributes, (i) => Gn(s, i.name)), Es(s, o);
        }),
          (e.ui.styleSheetLoader = G8(s, e)),
          Nf(e)
            ? (e.inline = !0)
            : ((e.orgVisibility = e.getElement().style.visibility),
              (e.getElement().style.visibility = "hidden"));
        const r = e.getElement().form || Cr.getParent(t, "form");
        r &&
          ((e.formElement = r),
          x1(e) &&
            !qu(e.getElement()) &&
            (Cr.insertAfter(Cr.create("input", { type: "hidden", name: t }), t),
            (e.hasHiddenInput = !0)),
          (e.formEventDelegate = (i) => {
            e.dispatch(i.type, i);
          }),
          Cr.bind(r, "submit reset", e.formEventDelegate),
          e.on("reset", () => {
            e.resetContent();
          }),
          w1(e) &&
            !r.submit.nodeType &&
            !r.submit.length &&
            !r._mceOldSubmit &&
            ((r._mceOldSubmit = r.submit),
            (r.submit = () => (
              e.editorManager.triggerSave(), e.setDirty(!1), r._mceOldSubmit(r)
            )))),
          (e.windowManager = FE(e)),
          (e.notificationManager = LE(e)),
          eR(e) &&
            e.on("GetContent", (i) => {
              i.save && (i.content = Cr.encode(i.content));
            }),
          S1(e) &&
            e.on("submit", () => {
              e.initialized && e.save();
            }),
          _1(e) &&
            ((e._beforeUnload = () => {
              e.initialized &&
                !e.destroyed &&
                !e.isHidden() &&
                e.save({ format: "raw", no_events: !0, set_dirty: !1 });
            }),
            e.editorManager.on("BeforeUnload", e._beforeUnload)),
          e.editorManager.add(e),
          K8(e, e.suffix);
      },
      X8 = (e, t) => ({ sections: K(e), options: K(t) }),
      iS = Co().deviceType,
      aS = iS.isPhone(),
      Q8 = iS.isTablet(),
      Ma = (e) => {
        if (Mt(e)) return [];
        {
          const t = Nt(e) ? e : e.split(/[ ,]/),
            n = U(t, Ur);
          return H(n, Gs);
        }
      },
      Z8 = (e, t) => {
        const n = uk(t, (s, o) => R(e, o));
        return X8(n.t, n.f);
      },
      J8 = (e, t, n = {}) => {
        const s = e.sections(),
          o = at(s, t).getOr({});
        return G.extend({}, n, o);
      },
      mp = (e, t) => Fe(e.sections(), t),
      ej = (e, t) => (mp(e, t) ? e.sections()[t] : {}),
      tj = (e, t) => {
        const n = {
            table_grid: !1,
            object_resizing: !1,
            resize: !1,
            toolbar_mode: at(e, "toolbar_mode").getOr("scrolling"),
            toolbar_sticky: !1,
          },
          s = { menubar: !1 };
        return Se(Se({}, n), t ? s : {});
      },
      nj = (e, t) => {
        var n;
        const s = (n = t.external_plugins) !== null && n !== void 0 ? n : {};
        return e && e.external_plugins
          ? G.extend({}, e.external_plugins, s)
          : s;
      },
      sj = (e, t) => [].concat(Ma(e)).concat(Ma(t)),
      oj = (e, t, n, s) => (e && mp(t, "mobile") ? s : n),
      rj = (e, t, n, s) => {
        const o = Ma(n.forced_plugins),
          r = Ma(s.plugins),
          i = ej(t, "mobile"),
          a = i.plugins ? Ma(i.plugins) : r,
          c = oj(e, t, r, a),
          f = sj(o, c);
        return G.extend(s, { forced_plugins: o, plugins: f });
      },
      ij = (e, t) => e && mp(t, "mobile"),
      aj = (e, t, n, s, o) => {
        var r;
        const i = e
            ? {
                mobile: tj((r = o.mobile) !== null && r !== void 0 ? r : {}, t),
              }
            : {},
          a = Z8(["mobile"], Oc(i, o)),
          c = G.extend(n, s, a.options(), ij(e, a) ? J8(a, "mobile") : {}, {
            external_plugins: nj(s, a.options()),
          });
        return rj(e, a, s, c);
      },
      lj = (e, t) => aj(aS || Q8, aS, t, e, t),
      cj = (e, t) => WF(e, t),
      uj = (e) => {
        const t = (s, o) => {
            e.formatter.toggle(s, o), e.nodeChanged();
          },
          n = (s) => () => {
            T("left,center,right,justify".split(","), (o) => {
              s !== o && e.formatter.remove("align" + o);
            }),
              s !== "none" && t("align" + s);
          };
        e.editorCommands.addCommands({
          JustifyLeft: n("left"),
          JustifyCenter: n("center"),
          JustifyRight: n("right"),
          JustifyFull: n("justify"),
          JustifyNone: n("none"),
        });
      },
      fj = (e) => {
        const t = (n) => () => {
          const s = e.selection,
            o = s.isCollapsed()
              ? [e.dom.getParent(s.getNode(), e.dom.isBlock)]
              : s.getSelectedBlocks();
          return M(o, (r) => ke(e.formatter.matchNode(r, n)));
        };
        e.editorCommands.addCommands(
          {
            JustifyLeft: t("alignleft"),
            JustifyCenter: t("aligncenter"),
            JustifyRight: t("alignright"),
            JustifyFull: t("alignjustify"),
          },
          "state"
        );
      },
      dj = (e) => {
        uj(e), fj(e);
      },
      mj = (e) => {
        e.editorCommands.addCommands({
          "Cut,Copy,Paste": (t) => {
            const n = e.getDoc();
            let s;
            try {
              n.execCommand(t);
            } catch {
              s = !0;
            }
            if (
              (t === "paste" && !n.queryCommandEnabled(t) && (s = !0),
              s || !n.queryCommandSupported(t))
            ) {
              let o = e.translate(
                "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."
              );
              (et.os.isMacOS() || et.os.isiOS()) &&
                (o = o.replace(/Ctrl\+/g, "\u2318+")),
                e.notificationManager.open({ text: o, type: "error" });
            }
          },
        });
      },
      pj = (e, t, n) => {
        const s = S.fromDom(e.getRoot());
        return (
          Zl(s, L.fromRangeStart(t))
            ? (n = n.replace(/^ /, "&nbsp;"))
            : (n = n.replace(/^&nbsp;/, " ")),
          Jl(s, L.fromRangeEnd(t))
            ? (n = n.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;"))
            : (n = n.replace(/&nbsp;(<br( \/)?>)?$/, " ")),
          n
        );
      },
      gj = (e) => {
        if (typeof e != "string") {
          const t = G.extend({ paste: e.paste, data: { paste: e.paste } }, e);
          return { content: e.content, details: t };
        }
        return { content: e, details: {} };
      },
      hj = (e, t) => {
        const n = e.selection,
          s = e.dom;
        return /^ | $/.test(t) ? pj(s, n.getRng(), t) : t;
      },
      Gc = (e, t) => {
        const { content: n, details: s } = gj(t);
        nm(e, {
          content: hj(e, n),
          format: "html",
          set: !1,
          selection: !0,
          paste: s.paste,
        }).each((o) => {
          const r = HF(e, o.content, s);
          sm(e, r, o), e.addVisual();
        });
      },
      bj = (e) => {
        e.editorCommands.addCommands({
          mceCleanup: () => {
            const t = e.selection.getBookmark();
            e.setContent(e.getContent()), e.selection.moveToBookmark(t);
          },
          insertImage: (t, n, s) => {
            Gc(e, e.dom.createHTML("img", { src: s }));
          },
          insertHorizontalRule: () => {
            e.execCommand("mceInsertContent", !1, "<hr>");
          },
          insertText: (t, n, s) => {
            Gc(e, e.dom.encode(s));
          },
          insertHTML: (t, n, s) => {
            Gc(e, s);
          },
          mceInsertContent: (t, n, s) => {
            Gc(e, s);
          },
          mceSetContent: (t, n, s) => {
            e.setContent(s);
          },
          mceReplaceContent: (t, n, s) => {
            e.execCommand(
              "mceInsertContent",
              !1,
              s.replace(
                /\{\$selection\}/g,
                e.selection.getContent({ format: "text" })
              )
            );
          },
          mceNewDocument: () => {
            e.setContent("");
          },
        });
      },
      Cj = { "font-size": "size", "font-family": "face" },
      yj = (e, t, n) => {
        const s = (r) =>
            ll(r, e).orThunk(() =>
              bt(r) === "font" ? at(Cj, e).bind((i) => ol(r, i)) : g.none()
            ),
          o = (r) => tt(S.fromDom(t), r);
        return $d(S.fromDom(n), (r) => s(r), o);
      },
      vj = (e) => e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ","),
      Ej = (e, t) => g.from(st.DOM.getStyle(t, e, !0)),
      lS = (e) => (t, n) =>
        g
          .from(n)
          .map(S.fromDom)
          .filter(Kn)
          .bind((s) => yj(e, t, s.dom).or(Ej(e, s.dom)))
          .getOr(""),
      xj = lS("font-size"),
      wj = Ot(vj, lS("font-family")),
      Sj = (e) =>
        mn(e.getBody()).map((t) => {
          const n = t.container();
          return ne(n) ? n.parentNode : n;
        }),
      _j = (e) =>
        g.from(e.selection.getRng()).bind((t) => {
          const n = e.getBody();
          return t.startContainer === n && t.startOffset === 0
            ? g.none()
            : g.from(e.selection.getStart(!0));
        }),
      kj = (e, t) => _j(e).orThunk(oe(Sj, e)).map(S.fromDom).filter(Kn).bind(t),
      pp = (e, t) => kj(e, _t(g.some, t)),
      cS = (e, t) => {
        if (/^[0-9.]+$/.test(t)) {
          const n = parseInt(t, 10);
          if (n >= 1 && n <= 7) {
            const s = Z1(e),
              o = J1(e);
            return o ? o[n - 1] || t : s[n - 1] || t;
          } else return t;
        } else return t;
      },
      Nj = (e) => {
        const t = e.split(/\s*,\s*/);
        return U(t, (n) =>
          n.indexOf(" ") !== -1 && !(qn(n, '"') || qn(n, "'")) ? `'${n}'` : n
        ).join(",");
      },
      Aj = (e, t) => {
        const n = cS(e, t);
        e.formatter.toggle("fontname", { value: Nj(n) }), e.nodeChanged();
      },
      Tj = (e) => pp(e, (t) => wj(e.getBody(), t.dom)).getOr(""),
      Rj = (e, t) => {
        e.formatter.toggle("fontsize", { value: cS(e, t) }), e.nodeChanged();
      },
      Pj = (e) => pp(e, (t) => xj(e.getBody(), t.dom)).getOr(""),
      Oj = (e) =>
        pp(e, (t) => {
          const n = S.fromDom(e.getBody()),
            s = $d(t, (r) => ll(r, "line-height"), oe(tt, n)),
            o = () => {
              const r = parseFloat(xs(t, "line-height")),
                i = parseFloat(xs(t, "font-size"));
              return String(r / i);
            };
          return s.getOrThunk(o);
        }).getOr(""),
      Dj = (e, t) => {
        e.formatter.toggle("lineheight", { value: String(t) }), e.nodeChanged();
      },
      Bj = (e) => {
        const t = (n, s) => {
          e.formatter.toggle(n, s), e.nodeChanged();
        };
        e.editorCommands.addCommands({
          "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": (n) => {
            t(n);
          },
          "ForeColor,HiliteColor": (n, s, o) => {
            t(n, { value: o });
          },
          BackColor: (n, s, o) => {
            t("hilitecolor", { value: o });
          },
          FontName: (n, s, o) => {
            Aj(e, o);
          },
          FontSize: (n, s, o) => {
            Rj(e, o);
          },
          LineHeight: (n, s, o) => {
            Dj(e, o);
          },
          Lang: (n, s, o) => {
            t(n, { value: o.code, customValue: o.customCode });
          },
          RemoveFormat: (n) => {
            e.formatter.remove(n);
          },
          mceBlockQuote: () => {
            t("blockquote");
          },
          FormatBlock: (n, s, o) => {
            t(be(o) ? o : "p");
          },
          mceToggleFormat: (n, s, o) => {
            t(o);
          },
        });
      },
      Ij = (e) => {
        const t = (n) => e.formatter.match(n);
        e.editorCommands.addCommands(
          {
            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": (n) =>
              t(n),
            mceBlockQuote: () => t("blockquote"),
          },
          "state"
        ),
          e.editorCommands.addQueryValueHandler("FontName", () => Tj(e)),
          e.editorCommands.addQueryValueHandler("FontSize", () => Pj(e)),
          e.editorCommands.addQueryValueHandler("LineHeight", () => Oj(e));
      },
      $j = (e) => {
        Bj(e), Ij(e);
      },
      Lj = (e) => {
        e.editorCommands.addCommands({
          mceAddUndoLevel: () => {
            e.undoManager.add();
          },
          mceEndUndoLevel: () => {
            e.undoManager.add();
          },
          Undo: () => {
            e.undoManager.undo();
          },
          Redo: () => {
            e.undoManager.redo();
          },
        });
      },
      Fj = (e) => {
        e.editorCommands.addCommands({
          Indent: () => {
            SH(e);
          },
          Outdent: () => {
            K0(e);
          },
        }),
          e.editorCommands.addCommands({ Outdent: () => V0(e) }, "state");
      },
      Mj = (e) => {
        const t = (n, s, o) => {
          const r = be(o) ? { href: o } : o,
            i = e.dom.getParent(e.selection.getNode(), "a");
          ut(r) &&
            be(r.href) &&
            ((r.href = r.href.replace(/ /g, "%20")),
            (!i || !r.href) && e.formatter.remove("link"),
            r.href && e.formatter.apply("link", r, i));
        };
        e.editorCommands.addCommands({
          unlink: () => {
            if (e.selection.isCollapsed()) {
              const n = e.dom.getParent(e.selection.getStart(), "a");
              n && e.dom.remove(n, !0);
              return;
            }
            e.formatter.remove("link");
          },
          mceInsertLink: t,
          createLink: t,
        });
      },
      Uj = (e) => {
        e.editorCommands.addCommands({
          "InsertUnorderedList,InsertOrderedList": (t) => {
            e.getDoc().execCommand(t);
            const n = e.dom.getParent(e.selection.getNode(), "ol,ul");
            if (n) {
              const s = n.parentNode;
              if (/^(H[1-6]|P|ADDRESS|PRE)$/.test(s.nodeName)) {
                const o = e.selection.getBookmark();
                e.dom.split(s, n), e.selection.moveToBookmark(o);
              }
            }
          },
        });
      },
      zj = (e) => {
        e.editorCommands.addCommands(
          {
            "InsertUnorderedList,InsertOrderedList": (t) => {
              const n = e.dom.getParent(e.selection.getNode(), "ul,ol");
              return (
                n &&
                ((t === "insertunorderedlist" && n.tagName === "UL") ||
                  (t === "insertorderedlist" && n.tagName === "OL"))
              );
            },
          },
          "state"
        );
      },
      Hj = (e) => {
        Uj(e), zj(e);
      },
      Vj = (e) => {
        e.editorCommands.addCommands({
          insertParagraph: () => {
            Zm(e);
          },
          mceInsertNewLine: (t, n, s) => {
            Zm(e, s);
          },
          InsertLineBreak: (t, n, s) => {
            rw(e, s);
          },
        });
      },
      Wj = (e) => {
        e.editorCommands.addCommands({
          mceSelectNodeDepth: (t, n, s) => {
            let o = 0;
            e.dom.getParent(
              e.selection.getNode(),
              (r) => {
                if (r.nodeType === 1 && o++ === s)
                  return e.selection.select(r), !1;
              },
              e.getBody()
            );
          },
          mceSelectNode: (t, n, s) => {
            e.selection.select(s);
          },
          selectAll: () => {
            const t = e.dom.getParent(e.selection.getStart(), Zs);
            if (t) {
              const n = e.dom.createRng();
              n.selectNodeContents(t), e.selection.setRng(n);
            }
          },
        });
      },
      jj = (e) => {
        e.editorCommands.addCommands({
          mceRemoveNode: (t, n, s) => {
            const o = s != null ? s : e.selection.getNode();
            if (o !== e.getBody()) {
              const r = e.selection.getBookmark();
              e.dom.remove(o, !0), e.selection.moveToBookmark(r);
            }
          },
          mcePrint: () => {
            e.getWin().print();
          },
          mceFocus: (t, n, s) => {
            nD(e, s);
          },
          mceToggleVisualAid: () => {
            (e.hasVisual = !e.hasVisual), e.addVisual();
          },
        });
      },
      qj = (e) => {
        dj(e),
          mj(e),
          Lj(e),
          Wj(e),
          bj(e),
          Mj(e),
          Fj(e),
          Vj(e),
          Hj(e),
          $j(e),
          jj(e);
      };
    class uS {
      constructor(t) {
        (this.commands = { state: {}, exec: {}, value: {} }), (this.editor = t);
      }
      execCommand(t, n, s, o) {
        const r = this.editor,
          i = t.toLowerCase(),
          a = o == null ? void 0 : o.skip_focus;
        if (
          r.removed ||
          (i !== "mcefocus" &&
            (!/^(mceAddUndoLevel|mceEndUndoLevel)$/i.test(i) && !a
              ? r.focus()
              : DO(r)),
          r
            .dispatch("BeforeExecCommand", { command: t, ui: n, value: s })
            .isDefaultPrevented())
        )
          return !1;
        const f = this.commands.exec[i];
        return Ye(f)
          ? (f(i, n, s),
            r.dispatch("ExecCommand", { command: t, ui: n, value: s }),
            !0)
          : !1;
      }
      queryCommandState(t) {
        if (this.editor.quirks.isHidden() || this.editor.removed) return !1;
        const n = t.toLowerCase(),
          s = this.commands.state[n];
        return Ye(s) ? s(n) : !1;
      }
      queryCommandValue(t) {
        if (this.editor.quirks.isHidden() || this.editor.removed) return "";
        const n = t.toLowerCase(),
          s = this.commands.value[n];
        return Ye(s) ? s(n) : "";
      }
      addCommands(t, n = "exec") {
        const s = this.commands;
        ht(t, (o, r) => {
          T(r.toLowerCase().split(","), (i) => {
            s[n][i] = o;
          });
        });
      }
      addCommand(t, n, s) {
        const o = t.toLowerCase();
        this.commands.exec[o] = (r, i, a) =>
          n.call(s != null ? s : this.editor, i, a);
      }
      queryCommandSupported(t) {
        const n = t.toLowerCase();
        return !!this.commands.exec[n];
      }
      addQueryStateHandler(t, n, s) {
        this.commands.state[t.toLowerCase()] = () =>
          n.call(s != null ? s : this.editor);
      }
      addQueryValueHandler(t, n, s) {
        this.commands.value[t.toLowerCase()] = () =>
          n.call(s != null ? s : this.editor);
      }
    }
    const yr = "data-mce-contenteditable",
      Kj = (e, t, n) => {
        Uu(e, t) && n === !1 ? nh(e, t) : n && Hi(e, t);
      },
      gp = (e, t, n) => {
        try {
          e.getDoc().execCommand(t, !1, String(n));
        } catch {}
      },
      Yc = (e, t) => {
        e.dom.contentEditable = t ? "true" : "false";
      },
      Gj = (e) => {
        T(xn(e, '*[contenteditable="true"]'), (t) => {
          fn(t, yr, "true"), Yc(t, !1);
        });
      },
      Yj = (e) => {
        T(xn(e, `*[${yr}="true"]`), (t) => {
          Gn(t, yr), Yc(t, !0);
        });
      },
      Xj = (e) => {
        g.from(e.selection.getNode()).each((t) => {
          t.removeAttribute("data-mce-selected");
        });
      },
      Qj = (e) => {
        e.selection.setRng(e.selection.getRng());
      },
      Zj = (e, t) => {
        const n = S.fromDom(e.getBody());
        Kj(n, "mce-content-readonly", t),
          t
            ? (e.selection.controlSelection.hideResizeRect(),
              e._selectionOverrides.hideFakeCaret(),
              Xj(e),
              (e.readonly = !0),
              Yc(n, !1),
              Gj(n))
            : ((e.readonly = !1),
              Yc(n, !0),
              Yj(n),
              gp(e, "StyleWithCSS", !1),
              gp(e, "enableInlineTableEditing", !1),
              gp(e, "enableObjectResizing", !1),
              eD(e) && e.focus(),
              Qj(e),
              e.nodeChanged());
      },
      vr = (e) => e.readonly,
      fS = (e) => {
        e.parser.addAttributeFilter("contenteditable", (t) => {
          vr(e) &&
            T(t, (n) => {
              n.attr(yr, n.attr("contenteditable")),
                n.attr("contenteditable", "false");
            });
        }),
          e.serializer.addAttributeFilter(yr, (t) => {
            vr(e) &&
              T(t, (n) => {
                n.attr("contenteditable", n.attr(yr));
              });
          }),
          e.serializer.addTempAttr(yr);
      },
      Jj = (e) => {
        e.serializer
          ? fS(e)
          : e.on("PreInit", () => {
              fS(e);
            });
      },
      e4 = (e) => e.type === "click",
      t4 = (e, t) =>
        Jo(t, "a", (s) => tt(s, S.fromDom(e.getBody()))).bind((s) =>
          ol(s, "href")
        ),
      n4 = (e, t) => {
        if (e4(t) && !ge.metaKeyPressed(t)) {
          const n = S.fromDom(t.target);
          t4(e, n).each((s) => {
            if ((t.preventDefault(), /^#/.test(s))) {
              const o = e.dom.select(`${s},[name="${Ek(s, "#")}"]`);
              o.length && e.selection.scrollIntoView(o[0], !0);
            } else
              window.open(
                s,
                "_blank",
                "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes"
              );
          });
        }
      },
      s4 = (e) => {
        e.on("ShowCaret", (t) => {
          vr(e) && t.preventDefault();
        }),
          e.on("ObjectSelected", (t) => {
            vr(e) && t.preventDefault();
          });
      },
      o4 = G.makeMap(
        "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel",
        " "
      );
    class hp {
      constructor(t) {
        (this.bindings = {}),
          (this.settings = t || {}),
          (this.scope = this.settings.scope || this),
          (this.toggleEvent = this.settings.toggleEvent || mt);
      }
      static isNative(t) {
        return !!o4[t.toLowerCase()];
      }
      fire(t, n) {
        return this.dispatch(t, n);
      }
      dispatch(t, n) {
        const s = t.toLowerCase(),
          o = lf(s, n != null ? n : {}, this.scope);
        this.settings.beforeFire && this.settings.beforeFire(o);
        const r = this.bindings[s];
        if (r)
          for (let i = 0, a = r.length; i < a; i++) {
            const c = r[i];
            if (!c.removed) {
              if (
                (c.once && this.off(s, c.func),
                o.isImmediatePropagationStopped())
              )
                return o;
              if (c.func.call(this.scope, o) === !1)
                return o.preventDefault(), o;
            }
          }
        return o;
      }
      on(t, n, s, o) {
        if ((n === !1 && (n = mt), n)) {
          const r = { func: n, removed: !1 };
          o && G.extend(r, o);
          const i = t.toLowerCase().split(" ");
          let a = i.length;
          for (; a--; ) {
            const c = i[a];
            let f = this.bindings[c];
            f || ((f = []), this.toggleEvent(c, !0)),
              s ? (f = [r, ...f]) : (f = [...f, r]),
              (this.bindings[c] = f);
          }
        }
        return this;
      }
      off(t, n) {
        if (t) {
          const s = t.toLowerCase().split(" ");
          let o = s.length;
          for (; o--; ) {
            const r = s[o];
            let i = this.bindings[r];
            if (!r)
              return (
                ht(this.bindings, (a, c) => {
                  this.toggleEvent(c, !1), delete this.bindings[c];
                }),
                this
              );
            if (i) {
              if (!n) i.length = 0;
              else {
                const a = Ce(i, (c) => c.func === n);
                (i = a.fail),
                  (this.bindings[r] = i),
                  T(a.pass, (c) => {
                    c.removed = !0;
                  });
              }
              i.length || (this.toggleEvent(t, !1), delete this.bindings[r]);
            }
          }
        } else
          ht(this.bindings, (s, o) => {
            this.toggleEvent(o, !1);
          }),
            (this.bindings = {});
        return this;
      }
      once(t, n, s) {
        return this.on(t, n, s, { once: !0 });
      }
      has(t) {
        return (
          (t = t.toLowerCase()),
          !(!this.bindings[t] || this.bindings[t].length === 0)
        );
      }
    }
    const Ua = (e) => (
        e._eventDispatcher ||
          (e._eventDispatcher = new hp({
            scope: e,
            toggleEvent: (t, n) => {
              hp.isNative(t) &&
                e.toggleNativeEvent &&
                e.toggleNativeEvent(t, n);
            },
          })),
        e._eventDispatcher
      ),
      bp = {
        fire(e, t, n) {
          return this.dispatch(e, t, n);
        },
        dispatch(e, t, n) {
          const s = this;
          if (s.removed && e !== "remove" && e !== "detach")
            return lf(e.toLowerCase(), t != null ? t : {}, s);
          const o = Ua(s).dispatch(e, t);
          if (n !== !1 && s.parent) {
            let r = s.parent();
            for (; r && !o.isPropagationStopped(); )
              r.dispatch(e, o, !1), (r = r.parent());
          }
          return o;
        },
        on(e, t, n) {
          return Ua(this).on(e, t, n);
        },
        off(e, t) {
          return Ua(this).off(e, t);
        },
        once(e, t) {
          return Ua(this).once(e, t);
        },
        hasEventListeners(e) {
          return Ua(this).has(e);
        },
      },
      Xc = st.DOM;
    let Er;
    const Qc = (e, t) => {
        if (t === "selectionchange") return e.getDoc();
        if (
          !e.inline &&
          /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)
        )
          return e.getDoc().documentElement;
        const n = Kb(e);
        return n
          ? (e.eventRoot || (e.eventRoot = Xc.select(n)[0]), e.eventRoot)
          : e.getBody();
      },
      r4 = (e) => !e.hidden && !vr(e),
      dS = (e, t, n) => {
        r4(e) ? e.dispatch(t, n) : vr(e) && n4(e, n);
      },
      mS = (e, t) => {
        let n;
        if ((e.delegates || (e.delegates = {}), e.delegates[t] || e.removed))
          return;
        const s = Qc(e, t);
        if (Kb(e)) {
          if (
            (Er ||
              ((Er = {}),
              e.editorManager.on("removeEditor", () => {
                e.editorManager.activeEditor ||
                  (Er &&
                    (ht(Er, (o, r) => {
                      e.dom.unbind(Qc(e, r));
                    }),
                    (Er = null)));
              })),
            Er[t])
          )
            return;
          (n = (o) => {
            const r = o.target,
              i = e.editorManager.get();
            let a = i.length;
            for (; a--; ) {
              const c = i[a].getBody();
              (c === r || Xc.isChildOf(r, c)) && dS(i[a], t, o);
            }
          }),
            (Er[t] = n),
            Xc.bind(s, t, n);
        } else
          (n = (o) => {
            dS(e, t, o);
          }),
            Xc.bind(s, t, n),
            (e.delegates[t] = n);
      },
      pS = ct(Se({}, bp), {
        bindPendingEventDelegates() {
          const e = this;
          G.each(e._pendingNativeEvents, (t) => {
            mS(e, t);
          });
        },
        toggleNativeEvent(e, t) {
          const n = this;
          e === "focus" ||
            e === "blur" ||
            n.removed ||
            (t
              ? n.initialized
                ? mS(n, e)
                : n._pendingNativeEvents
                ? n._pendingNativeEvents.push(e)
                : (n._pendingNativeEvents = [e])
              : n.initialized &&
                (n.dom.unbind(Qc(n, e), e, n.delegates[e]),
                delete n.delegates[e]));
        },
        unbindAllNativeEvents() {
          const e = this,
            t = e.getBody(),
            n = e.dom;
          e.delegates &&
            (ht(e.delegates, (s, o) => {
              e.dom.unbind(Qc(e, o), o, s);
            }),
            delete e.delegates),
            !e.inline &&
              t &&
              n &&
              ((t.onload = null), n.unbind(e.getWin()), n.unbind(e.getDoc())),
            n && (n.unbind(t), n.unbind(e.getContainer()));
        },
      }),
      i4 = (e) =>
        be(e)
          ? { value: e.split(/[ ,]/), valid: !0 }
          : Ks(e, be)
          ? { value: e, valid: !0 }
          : {
              valid: !1,
              message:
                "The value must be a string[] or a comma/space separated string.",
            },
      a4 = (e) => {
        const t = (() => {
          switch (e) {
            case "array":
              return Nt;
            case "boolean":
              return gs;
            case "function":
              return Ye;
            case "number":
              return yn;
            case "object":
              return ut;
            case "string":
              return be;
            case "string[]":
              return i4;
            case "object[]":
              return (n) => Ks(n, ut);
            case "regexp":
              return (n) => Bn(n, RegExp);
          }
        })();
        return (n) => Cp(n, t, `The value must be a ${e}.`);
      },
      l4 = (e) => be(e.processor),
      gS = (e, t) => {
        const n = nl(t.message) ? "" : `. ${t.message}`;
        return e + n;
      },
      hS = (e) => e.valid,
      Cp = (e, t, n = "") => {
        const s = t(e);
        return gs(s)
          ? s
            ? { value: e, valid: !0 }
            : { valid: !1, message: n }
          : s;
      },
      c4 = (e, t, n) => {
        if (!Pt(t)) {
          const s = Cp(t, n);
          if (hS(s)) return s.value;
          console.error(
            gS(`Invalid default value passed for the "${e}" option`, s)
          );
        }
      },
      u4 = (e, t) => {
        const n = {},
          s = {},
          o = (p, C, b) => {
            const x = Cp(C, b);
            return hS(x)
              ? ((s[p] = x.value), !0)
              : (console.warn(
                  gS(`Invalid value passed for the ${p} option`, x)
                ),
                !1);
          },
          r = (p, C) => {
            const b = l4(C) ? a4(C.processor) : C.processor,
              x = c4(p, C.default, b);
            (n[p] = ct(Se({}, C), { default: x, processor: b })),
              at(s, p)
                .orThunk(() => at(t, p))
                .each((E) => o(p, E, b));
          },
          i = (p) => Fe(n, p);
        return {
          register: r,
          isRegistered: i,
          get: (p) =>
            at(s, p)
              .orThunk(() => at(n, p).map((C) => C.default))
              .getOrUndefined(),
          set: (p, C) => {
            if (i(p)) {
              const b = n[p];
              return b.immutable
                ? (console.error(
                    `"${p}" is an immutable option and cannot be updated`
                  ),
                  !1)
                : o(p, C, b.processor);
            } else
              return (
                console.warn(
                  `"${p}" is not a registered option. Ensure the option has been registered before setting a value.`
                ),
                !1
              );
          },
          unset: (p) => {
            const C = i(p);
            return C && delete s[p], C;
          },
          isSet: (p) => Fe(s, p),
        };
      },
      f4 = ["design", "readonly"],
      bS = (e, t, n, s) => {
        const o = n[t.get()],
          r = n[s];
        try {
          r.activate();
        } catch (i) {
          console.error(`problem while activating editor mode ${s}:`, i);
          return;
        }
        o.deactivate(),
          o.editorReadOnly !== r.editorReadOnly && Zj(e, r.editorReadOnly),
          t.set(s),
          bP(e, s);
      },
      d4 = (e, t, n, s) => {
        if (s !== n.get()) {
          if (!Fe(t, s)) throw new Error(`Editor mode '${s}' is invalid`);
          e.initialized ? bS(e, n, t, s) : e.on("init", () => bS(e, n, t, s));
        }
      },
      m4 = (e, t, n) => {
        if (R(f4, t)) throw new Error(`Cannot override default mode ${t}`);
        return ct(Se({}, e), {
          [t]: ct(Se({}, n), {
            deactivate: () => {
              try {
                n.deactivate();
              } catch (s) {
                console.error(
                  `problem while deactivating editor mode ${t}:`,
                  s
                );
              }
            },
          }),
        });
      },
      p4 = (e) => {
        const t = $t("design"),
          n = $t({
            design: { activate: Ie, deactivate: Ie, editorReadOnly: !1 },
            readonly: { activate: Ie, deactivate: Ie, editorReadOnly: !0 },
          });
        return (
          Jj(e),
          s4(e),
          {
            isReadOnly: () => vr(e),
            set: (s) => d4(e, n.get(), t, s),
            get: () => t.get(),
            register: (s, o) => {
              n.set(m4(n.get(), s, o));
            },
          }
        );
      },
      yp = G.each,
      vp = G.explode,
      g4 = {
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
      CS = G.makeMap("alt,ctrl,shift,meta,access"),
      h4 = (e) => {
        let t;
        const n = {},
          s = et.os.isMacOS() || et.os.isiOS();
        yp(vp(e.toLowerCase(), "+"), (r) => {
          r in CS
            ? (n[r] = !0)
            : /^[0-9]{2,}$/.test(r)
            ? (n.keyCode = parseInt(r, 10))
            : ((n.charCode = r.charCodeAt(0)),
              (n.keyCode = g4[r] || r.toUpperCase().charCodeAt(0)));
        });
        const o = [n.keyCode];
        for (t in CS) n[t] ? o.push(t) : (n[t] = !1);
        return (
          (n.id = o.join(",")),
          n.access && ((n.alt = !0), s ? (n.ctrl = !0) : (n.shift = !0)),
          n.meta && (s ? (n.meta = !0) : ((n.ctrl = !0), (n.meta = !1))),
          n
        );
      };
    class yS {
      constructor(t) {
        (this.shortcuts = {}), (this.pendingPatterns = []), (this.editor = t);
        const n = this;
        t.on("keyup keypress keydown", (s) => {
          (n.hasModifier(s) || n.isFunctionKey(s)) &&
            !s.isDefaultPrevented() &&
            (yp(n.shortcuts, (o) => {
              if (n.matchShortcut(s, o))
                return (
                  (n.pendingPatterns = o.subpatterns.slice(0)),
                  s.type === "keydown" && n.executeShortcutAction(o),
                  !0
                );
            }),
            n.matchShortcut(s, n.pendingPatterns[0]) &&
              (n.pendingPatterns.length === 1 &&
                s.type === "keydown" &&
                n.executeShortcutAction(n.pendingPatterns[0]),
              n.pendingPatterns.shift()));
        });
      }
      add(t, n, s, o) {
        const r = this,
          i = r.normalizeCommandFunc(s);
        return (
          yp(vp(G.trim(t)), (a) => {
            const c = r.createShortcut(a, n, i, o);
            r.shortcuts[c.id] = c;
          }),
          !0
        );
      }
      remove(t) {
        const n = this.createShortcut(t);
        return this.shortcuts[n.id] ? (delete this.shortcuts[n.id], !0) : !1;
      }
      normalizeCommandFunc(t) {
        const n = this,
          s = t;
        return typeof s == "string"
          ? () => {
              n.editor.execCommand(s, !1, null);
            }
          : G.isArray(s)
          ? () => {
              n.editor.execCommand(s[0], s[1], s[2]);
            }
          : s;
      }
      createShortcut(t, n, s, o) {
        const r = G.map(vp(t, ">"), h4);
        return (
          (r[r.length - 1] = G.extend(r[r.length - 1], {
            func: s,
            scope: o || this.editor,
          })),
          G.extend(r[0], {
            desc: this.editor.translate(n),
            subpatterns: r.slice(1),
          })
        );
      }
      hasModifier(t) {
        return t.altKey || t.ctrlKey || t.metaKey;
      }
      isFunctionKey(t) {
        return t.type === "keydown" && t.keyCode >= 112 && t.keyCode <= 123;
      }
      matchShortcut(t, n) {
        return !n ||
          n.ctrl !== t.ctrlKey ||
          n.meta !== t.metaKey ||
          n.alt !== t.altKey ||
          n.shift !== t.shiftKey
          ? !1
          : t.keyCode === n.keyCode || (t.charCode && t.charCode === n.charCode)
          ? (t.preventDefault(), !0)
          : !1;
      }
      executeShortcutAction(t) {
        return t.func ? t.func.call(t.scope) : null;
      }
    }
    const b4 = () => {
        const e = {},
          t = {},
          n = {},
          s = {},
          o = {},
          r = {},
          i = {},
          a = (f, d) => (p, C) =>
            (f[p.toLowerCase()] = ct(Se({}, C), { type: d })),
          c = (f, d) => (s[f.toLowerCase()] = d);
        return {
          addButton: a(e, "button"),
          addGroupToolbarButton: a(e, "grouptoolbarbutton"),
          addToggleButton: a(e, "togglebutton"),
          addMenuButton: a(e, "menubutton"),
          addSplitButton: a(e, "splitbutton"),
          addMenuItem: a(t, "menuitem"),
          addNestedMenuItem: a(t, "nestedmenuitem"),
          addToggleMenuItem: a(t, "togglemenuitem"),
          addAutocompleter: a(n, "autocompleter"),
          addContextMenu: a(o, "contextmenu"),
          addContextToolbar: a(r, "contexttoolbar"),
          addContextForm: a(r, "contextform"),
          addSidebar: a(i, "sidebar"),
          addIcon: c,
          getAll: () => ({
            buttons: e,
            menuItems: t,
            icons: s,
            popups: n,
            contextMenus: o,
            contextToolbars: r,
            sidebars: i,
          }),
        };
      },
      C4 = () => {
        const e = b4();
        return {
          addAutocompleter: e.addAutocompleter,
          addButton: e.addButton,
          addContextForm: e.addContextForm,
          addContextMenu: e.addContextMenu,
          addContextToolbar: e.addContextToolbar,
          addIcon: e.addIcon,
          addMenuButton: e.addMenuButton,
          addMenuItem: e.addMenuItem,
          addNestedMenuItem: e.addNestedMenuItem,
          addSidebar: e.addSidebar,
          addSplitButton: e.addSplitButton,
          addToggleButton: e.addToggleButton,
          addGroupToolbarButton: e.addGroupToolbarButton,
          addToggleMenuItem: e.addToggleMenuItem,
          getAll: e.getAll,
        };
      },
      xr = st.DOM,
      vS = G.extend,
      y4 = G.each;
    class Zc {
      constructor(t, n, s) {
        (this.plugins = {}),
          (this.contentCSS = []),
          (this.contentStyles = []),
          (this.loadedCSS = {}),
          (this.isNotDirty = !1),
          (this.editorManager = s),
          (this.documentBaseUrl = s.documentBaseURL),
          vS(this, pS);
        const o = this;
        (this.id = t), (this.hidden = !1);
        const r = lj(s.defaultOptions, n);
        (this.options = u4(o, r)), WT(o);
        const i = this.options.get;
        i("deprecation_warnings") && _M(n, r);
        const a = i("suffix");
        a && (s.suffix = a), (this.suffix = s.suffix);
        const c = i("base_url");
        c && s._setBaseUrl(c), (this.baseUri = s.baseURI);
        const f = _f(o);
        f &&
          (Js.ScriptLoader._setReferrerPolicy(f),
          st.DOM.styleSheetLoader._setReferrerPolicy(f)),
          (nn.languageLoad = i("language_load")),
          (nn.baseURL = s.baseURL),
          this.setDirty(!1),
          (this.documentBaseURI = new rs(Fb(o), { base_uri: this.baseUri })),
          (this.baseURI = this.baseUri),
          (this.inline = Nf(o)),
          (this.shortcuts = new yS(this)),
          (this.editorCommands = new uS(this)),
          qj(this);
        const d = i("cache_suffix");
        d && (et.cacheSuffix = d.replace(/^[\?\&]+/, "")),
          (this.ui = {
            registry: C4(),
            styleSheetLoader: void 0,
            show: Ie,
            hide: Ie,
            setEnabled: Ie,
            isEnabled: rt,
          }),
          (this.mode = p4(o)),
          s.dispatch("SetupEditor", { editor: this });
        const p = B1(o);
        Ye(p) && p.call(o, o);
      }
      render() {
        Y8(this);
      }
      focus(t) {
        this.execCommand("mceFocus", !1, t);
      }
      hasFocus() {
        return ur(this);
      }
      translate(t) {
        return ts.translate(t);
      }
      getParam(t, n, s) {
        const o = this.options;
        return (
          o.isRegistered(t) ||
            (ke(s)
              ? o.register(t, { processor: s, default: n })
              : o.register(t, { processor: rt, default: n })),
          !o.isSet(t) && !Pt(n) ? n : o.get(t)
        );
      }
      hasPlugin(t, n) {
        return R(Rl(this), t) ? (n ? pi.get(t) !== void 0 : !0) : !1;
      }
      nodeChanged(t) {
        this._nodeChangeDispatcher.nodeChanged(t);
      }
      addCommand(t, n, s) {
        this.editorCommands.addCommand(t, n, s);
      }
      addQueryStateHandler(t, n, s) {
        this.editorCommands.addQueryStateHandler(t, n, s);
      }
      addQueryValueHandler(t, n, s) {
        this.editorCommands.addQueryValueHandler(t, n, s);
      }
      addShortcut(t, n, s, o) {
        this.shortcuts.add(t, n, s, o);
      }
      execCommand(t, n, s, o) {
        return this.editorCommands.execCommand(t, n, s, o);
      }
      queryCommandState(t) {
        return this.editorCommands.queryCommandState(t);
      }
      queryCommandValue(t) {
        return this.editorCommands.queryCommandValue(t);
      }
      queryCommandSupported(t) {
        return this.editorCommands.queryCommandSupported(t);
      }
      show() {
        const t = this;
        t.hidden &&
          ((t.hidden = !1),
          t.inline
            ? (t.getBody().contentEditable = "true")
            : (xr.show(t.getContainer()), xr.hide(t.id)),
          t.load(),
          t.dispatch("show"));
      }
      hide() {
        const t = this;
        t.hidden ||
          (t.save(),
          t.inline
            ? ((t.getBody().contentEditable = "false"),
              t === t.editorManager.focusedEditor &&
                (t.editorManager.focusedEditor = null))
            : (xr.hide(t.getContainer()),
              xr.setStyle(t.id, "display", t.orgDisplay)),
          (t.hidden = !0),
          t.dispatch("hide"));
      }
      isHidden() {
        return this.hidden;
      }
      setProgressState(t, n) {
        this.dispatch("ProgressState", { state: t, time: n });
      }
      load(t) {
        const n = this;
        let s = n.getElement(),
          o;
        if (n.removed) return "";
        if (s) {
          (t = t || {}), (t.load = !0);
          const r = qu(s) ? s.value : s.innerHTML;
          return (
            (o = n.setContent(r, t)),
            (t.element = s),
            t.no_events || n.dispatch("LoadContent", t),
            (t.element = s = null),
            o
          );
        }
      }
      save(t) {
        const n = this;
        let s = n.getElement(),
          o,
          r;
        if (!(!s || !n.initialized || n.removed))
          return (
            (t = t || {}),
            (t.save = !0),
            (t.element = s),
            (o = t.content = n.getContent(t)),
            t.no_events || n.dispatch("SaveContent", t),
            t.format === "raw" && n.dispatch("RawSaveContent", t),
            (o = t.content),
            qu(s)
              ? (s.value = o)
              : ((t.is_removing || !n.inline) && (s.innerHTML = o),
                (r = xr.getParent(n.id, "form")) &&
                  y4(r.elements, (i) => {
                    if (i.name === n.id) return (i.value = o), !1;
                  })),
            (t.element = s = null),
            t.set_dirty !== !1 && n.setDirty(!1),
            o
          );
      }
      setContent(t, n) {
        return fm(this, t, n);
      }
      getContent(t) {
        return bM(this, t);
      }
      insertContent(t, n) {
        n && (t = vS({ content: t }, n)),
          this.execCommand("mceInsertContent", !1, t);
      }
      resetContent(t) {
        t === void 0
          ? fm(this, this.startContent, { format: "raw" })
          : fm(this, t),
          this.undoManager.reset(),
          this.setDirty(!1),
          this.nodeChanged();
      }
      isDirty() {
        return !this.isNotDirty;
      }
      setDirty(t) {
        const n = !this.isNotDirty;
        (this.isNotDirty = !t), t && t !== n && this.dispatch("dirty");
      }
      getContainer() {
        const t = this;
        return (
          t.container ||
            (t.container = xr.get(t.editorContainer || t.id + "_parent")),
          t.container
        );
      }
      getContentAreaContainer() {
        return this.contentAreaContainer;
      }
      getElement() {
        return (
          this.targetElm || (this.targetElm = xr.get(this.id)), this.targetElm
        );
      }
      getWin() {
        const t = this;
        let n;
        return (
          t.contentWindow ||
            ((n = t.iframeElement), n && (t.contentWindow = n.contentWindow)),
          t.contentWindow
        );
      }
      getDoc() {
        const t = this;
        let n;
        return (
          t.contentDocument ||
            ((n = t.getWin()), n && (t.contentDocument = n.document)),
          t.contentDocument
        );
      }
      getBody() {
        const t = this.getDoc();
        return this.bodyElement || (t ? t.body : null);
      }
      convertURL(t, n, s) {
        const o = this,
          r = o.options.get,
          i = $1(o);
        return Ye(i)
          ? i.call(o, t, s, !0, n)
          : !r("convert_urls") ||
            (s && s.nodeName === "LINK") ||
            t.indexOf("file:") === 0 ||
            t.length === 0
          ? t
          : r("relative_urls")
          ? o.documentBaseURI.toRelative(t)
          : ((t = o.documentBaseURI.toAbsolute(t, r("remove_script_host"))), t);
      }
      addVisual(t) {
        cj(this, t);
      }
      remove() {
        TM(this);
      }
      destroy(t) {
        RM(this, t);
      }
      uploadImages() {
        return this.editorUpload.uploadImages();
      }
      _scanForImages() {
        return this.editorUpload.scanForImages();
      }
    }
    const Ei = st.DOM,
      Jc = G.each;
    let ES = !1,
      eu,
      gn = [];
    const tu = (e) => {
        const t = e.type;
        Jc($o.get(), (n) => {
          switch (t) {
            case "scroll":
              n.dispatch("ScrollWindow", e);
              break;
            case "resize":
              n.dispatch("ResizeWindow", e);
              break;
          }
        });
      },
      xS = (e) => {
        if (e !== ES) {
          const t = st.DOM;
          e
            ? (t.bind(window, "resize", tu), t.bind(window, "scroll", tu))
            : (t.unbind(window, "resize", tu), t.unbind(window, "scroll", tu)),
            (ES = e);
        }
      },
      wS = (e) => {
        const t = gn;
        return (
          (gn = H(gn, (n) => e !== n)),
          $o.activeEditor === e &&
            ($o.activeEditor = gn.length > 0 ? gn[0] : null),
          $o.focusedEditor === e && ($o.focusedEditor = null),
          t.length !== gn.length
        );
      },
      v4 = (e) => (
        e &&
          e.initialized &&
          !(e.getContainer() || e.getBody()).parentNode &&
          (wS(e),
          e.unbindAllNativeEvents(),
          e.destroy(!0),
          (e.removed = !0),
          (e = null)),
        e
      ),
      E4 = document.compatMode !== "CSS1Compat",
      $o = ct(Se({}, bp), {
        baseURI: null,
        baseURL: null,
        defaultOptions: {},
        documentBaseURL: null,
        suffix: null,
        majorVersion: "6",
        minorVersion: "0.1",
        releaseDate: "2022-03-23",
        i18n: ts,
        activeEditor: null,
        focusedEditor: null,
        setup() {
          const e = this;
          let t,
            n,
            s = "";
          (n = rs.getDocumentBaseUrl(document.location)),
            /^[^:]+:\/\/\/?[^\/]+\//.test(n) &&
              ((n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
              /[\/\\]$/.test(n) || (n += "/"));
          const o = window.tinymce || window.tinyMCEPreInit;
          if (o) (t = o.base || o.baseURL), (s = o.suffix);
          else {
            const r = document.getElementsByTagName("script");
            for (let i = 0; i < r.length; i++) {
              const a = r[i].src || "";
              if (a === "") continue;
              const c = a.substring(a.lastIndexOf("/"));
              if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)) {
                c.indexOf(".min") !== -1 && (s = ".min"),
                  (t = a.substring(0, a.lastIndexOf("/")));
                break;
              }
            }
            if (!t && document.currentScript) {
              const i = document.currentScript.src;
              i.indexOf(".min") !== -1 && (s = ".min"),
                (t = i.substring(0, i.lastIndexOf("/")));
            }
          }
          (e.baseURL = new rs(n).toAbsolute(t)),
            (e.documentBaseURL = n),
            (e.baseURI = new rs(e.baseURL)),
            (e.suffix = s),
            qO(e);
        },
        overrideDefaults(e) {
          const t = e.base_url;
          t && this._setBaseUrl(t);
          const n = e.suffix;
          e.suffix && (this.suffix = n), (this.defaultOptions = e);
          const s = e.plugin_base_urls;
          s !== void 0 &&
            ht(s, (o, r) => {
              nn.PluginManager.urls[r] = o;
            });
        },
        init(e) {
          const t = this;
          let n;
          const s = G.makeMap(
              "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu",
              " "
            ),
            o = (d, p) => d.inline && p.tagName.toLowerCase() in s,
            r = (d) => {
              let p = d.id;
              return (
                p ||
                  ((p = at(d, "name")
                    .filter((C) => !Ei.get(C))
                    .getOrThunk(Ei.uniqueId)),
                  d.setAttribute("id", p)),
                p
              );
            },
            i = (d) => {
              const p = e[d];
              if (!!p) return p.apply(t, []);
            },
            a = (d) =>
              et.browser.isIE() || et.browser.isEdge()
                ? (Ec(
                    "TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tiny.cloud/docs/tinymce/6/support/#supportedwebbrowsers"
                  ),
                  [])
                : E4
                ? (Ec(
                    "Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."
                  ),
                  [])
                : be(d.selector)
                ? Ei.select(d.selector)
                : ke(d.target)
                ? [d.target]
                : [];
          let c = (d) => {
            n = d;
          };
          const f = () => {
            let d = 0;
            const p = [];
            let C;
            const b = (x, y, E) => {
              const _ = new Zc(x, y, t);
              p.push(_),
                _.on("init", () => {
                  ++d === C.length && c(p);
                }),
                (_.targetElm = _.targetElm || E),
                _.render();
            };
            Ei.unbind(window, "ready", f),
              i("onpageload"),
              (C = el(a(e))),
              G.each(C, (x) => {
                v4(t.get(x.id));
              }),
              (C = G.grep(C, (x) => !t.get(x.id))),
              C.length === 0
                ? c([])
                : Jc(C, (x) => {
                    o(e, x)
                      ? Ec(
                          "Could not initialize inline editor on invalid inline target element",
                          x
                        )
                      : b(r(x), e, x);
                  });
          };
          return (
            Ei.bind(window, "ready", f),
            new Promise((d) => {
              n
                ? d(n)
                : (c = (p) => {
                    d(p);
                  });
            })
          );
        },
        get(e) {
          return arguments.length === 0
            ? gn.slice(0)
            : be(e)
            ? de(gn, (t) => t.id === e).getOr(null)
            : yn(e) && gn[e]
            ? gn[e]
            : null;
        },
        add(e) {
          const t = this,
            n = t.get(e.id);
          return (
            n === e ||
              (n === null && gn.push(e),
              xS(!0),
              (t.activeEditor = e),
              t.dispatch("AddEditor", { editor: e }),
              eu ||
                ((eu = (s) => {
                  const o = t.dispatch("BeforeUnload");
                  if (o.returnValue)
                    return (
                      s.preventDefault(),
                      (s.returnValue = o.returnValue),
                      o.returnValue
                    );
                }),
                window.addEventListener("beforeunload", eu))),
            e
          );
        },
        createEditor(e, t) {
          return this.add(new Zc(e, t, this));
        },
        remove(e) {
          const t = this;
          let n, s;
          if (!e) {
            for (n = gn.length - 1; n >= 0; n--) t.remove(gn[n]);
            return;
          }
          if (be(e)) {
            Jc(Ei.select(e), (o) => {
              (s = t.get(o.id)), s && t.remove(s);
            });
            return;
          }
          return (
            (s = e),
            qs(t.get(s.id))
              ? null
              : (wS(s) && t.dispatch("RemoveEditor", { editor: s }),
                gn.length === 0 &&
                  window.removeEventListener("beforeunload", eu),
                s.remove(),
                xS(gn.length > 0),
                s)
          );
        },
        execCommand(e, t, n) {
          var s;
          const o = this,
            r = ut(n) ? ((s = n.id) !== null && s !== void 0 ? s : n.index) : n;
          switch (e) {
            case "mceAddEditor": {
              if (!o.get(r)) {
                const i = n.options;
                new Zc(r, i, o).render();
              }
              return !0;
            }
            case "mceRemoveEditor": {
              const i = o.get(r);
              return i && i.remove(), !0;
            }
            case "mceToggleEditor": {
              const i = o.get(r);
              return i
                ? (i.isHidden() ? i.show() : i.hide(), !0)
                : (o.execCommand("mceAddEditor", !1, n), !0);
            }
          }
          return o.activeEditor ? o.activeEditor.execCommand(e, t, n) : !1;
        },
        triggerSave: () => {
          Jc(gn, (e) => {
            e.save();
          });
        },
        addI18n: (e, t) => {
          ts.add(e, t);
        },
        translate: (e) => ts.translate(e),
        setActive(e) {
          const t = this.activeEditor;
          this.activeEditor !== e &&
            (t && t.dispatch("deactivate", { relatedTarget: e }),
            e.dispatch("activate", { relatedTarget: t })),
            (this.activeEditor = e);
        },
        _setBaseUrl(e) {
          (this.baseURL = new rs(this.documentBaseURL).toAbsolute(
            e.replace(/\/+$/, "")
          )),
            (this.baseURI = new rs(this.baseURL));
        },
      });
    $o.setup();
    const x4 = (() => {
        const e = No(),
          t = (r) => ({
            items: r,
            types: Jn(r),
            getType: (i) => at(r, i).getOrUndefined(),
          }),
          n = (r) => {
            e.set(r);
          },
          s = () => e.get().getOrUndefined(),
          o = e.clear;
        return { FakeClipboardItem: t, write: n, read: s, clear: o };
      })(),
      SS = Math.min,
      xi = Math.max,
      nu = Math.round,
      _S = (e, t, n) => {
        let s = t.x,
          o = t.y;
        const r = e.w,
          i = e.h,
          a = t.w,
          c = t.h,
          f = (n || "").split("");
        return (
          f[0] === "b" && (o += c),
          f[1] === "r" && (s += a),
          f[0] === "c" && (o += nu(c / 2)),
          f[1] === "c" && (s += nu(a / 2)),
          f[3] === "b" && (o -= i),
          f[4] === "r" && (s -= r),
          f[3] === "c" && (o -= nu(i / 2)),
          f[4] === "c" && (s -= nu(r / 2)),
          wi(s, o, r, i)
        );
      },
      w4 = (e, t, n, s) => {
        let o, r;
        for (r = 0; r < s.length; r++)
          if (
            ((o = _S(e, t, s[r])),
            o.x >= n.x &&
              o.x + o.w <= n.w + n.x &&
              o.y >= n.y &&
              o.y + o.h <= n.h + n.y)
          )
            return s[r];
        return null;
      },
      S4 = (e, t, n) => wi(e.x - t, e.y - n, e.w + t * 2, e.h + n * 2),
      _4 = (e, t) => {
        const n = xi(e.x, t.x),
          s = xi(e.y, t.y),
          o = SS(e.x + e.w, t.x + t.w),
          r = SS(e.y + e.h, t.y + t.h);
        return o - n < 0 || r - s < 0 ? null : wi(n, s, o - n, r - s);
      },
      k4 = (e, t, n) => {
        let s = e.x,
          o = e.y,
          r = e.x + e.w,
          i = e.y + e.h;
        const a = t.x + t.w,
          c = t.y + t.h,
          f = xi(0, t.x - s),
          d = xi(0, t.y - o),
          p = xi(0, r - a),
          C = xi(0, i - c);
        return (
          (s += f),
          (o += d),
          n && ((r += f), (i += d), (s -= p), (o -= C)),
          (r -= p),
          (i -= C),
          wi(s, o, r - s, i - o)
        );
      },
      wi = (e, t, n, s) => ({ x: e, y: t, w: n, h: s }),
      N4 = {
        inflate: S4,
        relativePosition: _S,
        findBestRelativePosition: w4,
        intersect: _4,
        clamp: k4,
        create: wi,
        fromClientRect: (e) => wi(e.left, e.top, e.width, e.height),
      },
      A4 = (e, t, n = 1e3) => {
        let s = !1,
          o = null;
        const r =
            (f) =>
            (...d) => {
              s ||
                ((s = !0),
                o !== null && (clearTimeout(o), (o = null)),
                f.apply(null, d));
            },
          i = r(e),
          a = r(t);
        return {
          start: (...f) => {
            !s && o === null && (o = setTimeout(() => a.apply(null, f), n));
          },
          resolve: i,
          reject: a,
        };
      },
      T4 = (() => {
        const e = {},
          t = {};
        return {
          load: (r, i) => {
            const a = `Script at URL "${i}" failed to load`,
              c = `Script at URL "${i}" did not call \`tinymce.Resource.add('${r}', data)\` within 1 second`;
            if (e[r] !== void 0) return e[r];
            {
              const f = new Promise((d, p) => {
                const C = A4(d, p);
                (t[r] = C.resolve),
                  Js.ScriptLoader.loadScript(i).then(
                    () => C.start(c),
                    () => C.reject(a)
                  );
              });
              return (e[r] = f), f;
            }
          },
          add: (r, i) => {
            t[r] !== void 0 && (t[r](i), delete t[r]),
              (e[r] = Promise.resolve(i));
          },
          unload: (r) => {
            delete e[r];
          },
        };
      })(),
      R4 = () =>
        (() => {
          let e = {},
            t = [];
          const n = {
            getItem: (s) => {
              const o = e[s];
              return o || null;
            },
            setItem: (s, o) => {
              t.push(s), (e[s] = String(o));
            },
            key: (s) => t[s],
            removeItem: (s) => {
              (t = t.filter((o) => o === s)), delete e[s];
            },
            clear: () => {
              (t = []), (e = {});
            },
            length: 0,
          };
          return (
            Object.defineProperty(n, "length", {
              get: () => t.length,
              configurable: !1,
              enumerable: !1,
            }),
            n
          );
        })();
    let za;
    try {
      const e = "__storage_test__";
      (za = window.localStorage), za.setItem(e, e), za.removeItem(e);
    } catch {
      za = R4();
    }
    var P4 = za;
    const O4 = {
        geom: { Rect: N4 },
        util: {
          Delay: Un,
          Tools: G,
          VK: ge,
          URI: rs,
          EventDispatcher: hp,
          Observable: bp,
          I18n: ts,
          LocalStorage: P4,
          ImageUploader: aU,
        },
        dom: {
          EventUtils: nr,
          TreeWalker: zt,
          TextSeeker: sr,
          DOMUtils: st,
          ScriptLoader: Js,
          RangeUtils: ci,
          Serializer: BE,
          StyleSheetLoader: Dh,
          ControlSelection: ZC,
          BookmarkManager: ga,
          Selection: DE,
          Event: nr.Event,
        },
        html: {
          Styles: af,
          Entities: So,
          Node: pn,
          Schema: ko,
          DomParser: di,
          Writer: Iy,
          Serializer: Po,
        },
        Env: et,
        AddOnManager: nn,
        Annotator: jC,
        Formatter: qE,
        UndoManager: GE,
        EditorCommands: uS,
        WindowManager: FE,
        NotificationManager: LE,
        EditorObservable: pS,
        Shortcuts: yS,
        Editor: Zc,
        FocusManager: Ey,
        EditorManager: $o,
        DOM: st.DOM,
        ScriptLoader: Js.ScriptLoader,
        PluginManager: pi,
        ThemeManager: hr,
        ModelManager: mi,
        IconManager: yc,
        Resource: T4,
        FakeClipboard: x4,
        trim: G.trim,
        isArray: G.isArray,
        is: G.is,
        toArray: G.toArray,
        makeMap: G.makeMap,
        each: G.each,
        map: G.map,
        grep: G.grep,
        inArray: G.inArray,
        extend: G.extend,
        walk: G.walk,
        resolve: G.resolve,
        explode: G.explode,
        _addCacheSuffix: G._addCacheSuffix,
      },
      kS = G.extend($o, O4),
      D4 = (e) => {
        try {
          l.exports = e;
        } catch {}
      };
    ((e) => {
      (window.tinymce = e), (window.tinyMCE = e);
    })(kS),
      D4(kS);
  })();
})(ak);
var eK = ak.exports;
export {
  uo as F,
  nq as a,
  _q as b,
  Q9 as c,
  Y9 as d,
  sk as e,
  sg as f,
  Vq as g,
  K9 as h,
  Nq as i,
  Z9 as j,
  X9 as k,
  J9 as l,
  B5 as n,
  J5 as o,
  G9 as r,
  eK as t,
  Ap as w,
};
