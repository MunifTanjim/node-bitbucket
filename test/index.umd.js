!(function (e, r) {
  'object' == typeof exports && 'undefined' != typeof module
    ? r(exports, require('node-fetch'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'node-fetch'], r)
    : r(((e = e || self).Bitbucket = {}), e.fetch)
})(this, function (e, r) {
  'use strict'
  r = r && Object.prototype.hasOwnProperty.call(r, 'default') ? r.default : r
  var t = function e(r, t, s, i) {
    if ('function' != typeof s)
      throw new Error('method for before hook must be a function')
    i || (i = {})
    if (Array.isArray(t))
      return t.reverse().reduce(function (t, s) {
        return e.bind(null, r, s, t, i)
      }, s)()
    return Promise.resolve().then(function () {
      return r.registry[t]
        ? r.registry[t].reduce(function (e, r) {
            return r.hook.bind(null, e, i)
          }, s)()
        : s(i)
    })
  }
  var s = function (e, r, t, s) {
    var i = s
    e.registry[t] || (e.registry[t] = [])
    'before' === r &&
      (s = function (e, r) {
        return Promise.resolve().then(i.bind(null, r)).then(e.bind(null, r))
      })
    'after' === r &&
      (s = function (e, r) {
        var t
        return Promise.resolve()
          .then(e.bind(null, r))
          .then(function (e) {
            return i((t = e), r)
          })
          .then(function () {
            return t
          })
      })
    'error' === r &&
      (s = function (e, r) {
        return Promise.resolve()
          .then(e.bind(null, r))
          .catch(function (e) {
            return i(e, r)
          })
      })
    e.registry[t].push({ hook: s, orig: i })
  }
  var i = function (e, r, t) {
    if (!e.registry[r]) return
    var s = e.registry[r]
      .map(function (e) {
        return e.orig
      })
      .indexOf(t)
    if (-1 === s) return
    e.registry[r].splice(s, 1)
  }
  var o = Function.bind,
    a = o.bind(o)
  function p(e, r, t) {
    var o = a(i, null).apply(null, t ? [r, t] : [r])
    ;(e.api = { remove: o }),
      (e.remove = o),
      ['before', 'error', 'after', 'wrap'].forEach(function (i) {
        var o = t ? [r, i, t] : [r, i]
        e[i] = e.api[i] = a(s, null).apply(null, o)
      })
  }
  function n() {
    var e = { registry: {} },
      r = t.bind(null, e)
    return p(r, e), r
  }
  var u = !1
  function l() {
    return (
      u ||
        (console.warn(
          '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
        ),
        (u = !0)),
      n()
    )
  }
  ;(l.Singular = function () {
    var e = { registry: {} },
      r = t.bind(null, e, 'h')
    return p(r, e, 'h'), r
  }.bind()),
    (l.Collection = n.bind())
  var d = l,
    c = l,
    g = l.Singular,
    m = l.Collection
  ;(d.Hook = c), (d.Singular = g), (d.Collection = m)
  var y = {
    method: 'GET',
    baseUrl: ''
      .concat('https', '://')
      .concat('api.bitbucket.org')
      .concat('/2.0'),
    headers: {
      accept: 'application/json',
      'user-agent': 'bitbucket.js/'.concat('2.4.2'),
    },
  }
  function h(e, r) {
    if (!(e instanceof r))
      throw new TypeError('Cannot call a class as a function')
  }
  function q(e) {
    return (q = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
  }
  function _(e, r) {
    return (_ =
      Object.setPrototypeOf ||
      function (e, r) {
        return (e.__proto__ = r), e
      })(e, r)
  }
  function k() {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1
    if (Reflect.construct.sham) return !1
    if ('function' == typeof Proxy) return !0
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      )
    } catch (e) {
      return !1
    }
  }
  function w(e, r, t) {
    return (w = k()
      ? Reflect.construct
      : function (e, r, t) {
          var s = [null]
          s.push.apply(s, r)
          var i = new (Function.bind.apply(e, s))()
          return t && _(i, t.prototype), i
        }).apply(null, arguments)
  }
  function f(e) {
    var r = 'function' == typeof Map ? new Map() : void 0
    return (f = function (e) {
      if (
        null === e ||
        ((t = e), -1 === Function.toString.call(t).indexOf('[native code]'))
      )
        return e
      var t
      if ('function' != typeof e)
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      if (void 0 !== r) {
        if (r.has(e)) return r.get(e)
        r.set(e, s)
      }
      function s() {
        return w(e, arguments, q(this).constructor)
      }
      return (
        (s.prototype = Object.create(e.prototype, {
          constructor: {
            value: s,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        _(s, e)
      )
    })(e)
  }
  function b(e, r) {
    if (null == e) return {}
    var t,
      s,
      i = (function (e, r) {
        if (null == e) return {}
        var t,
          s,
          i = {},
          o = Object.keys(e)
        for (s = 0; s < o.length; s++)
          (t = o[s]), r.indexOf(t) >= 0 || (i[t] = e[t])
        return i
      })(e, r)
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e)
      for (s = 0; s < o.length; s++)
        (t = o[s]),
          r.indexOf(t) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]))
    }
    return i
  }
  function P(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return e
  }
  function E(e, r) {
    return !r || ('object' != typeof r && 'function' != typeof r) ? P(e) : r
  }
  function T(e, r) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e
      })(e) ||
      (function (e, r) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return
        var t = [],
          s = !0,
          i = !1,
          o = void 0
        try {
          for (
            var a, p = e[Symbol.iterator]();
            !(s = (a = p.next()).done) &&
            (t.push(a.value), !r || t.length !== r);
            s = !0
          );
        } catch (e) {
          ;(i = !0), (o = e)
        } finally {
          try {
            s || null == p.return || p.return()
          } finally {
            if (i) throw o
          }
        }
        return t
      })(e, r) ||
      v(e, r) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function v(e, r) {
    if (e) {
      if ('string' == typeof e) return S(e, r)
      var t = Object.prototype.toString.call(e).slice(8, -1)
      return (
        'Object' === t && e.constructor && (t = e.constructor.name),
        'Map' === t || 'Set' === t
          ? Array.from(e)
          : 'Arguments' === t ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          ? S(e, r)
          : void 0
      )
    }
  }
  function S(e, r) {
    ;(null == r || r > e.length) && (r = e.length)
    for (var t = 0, s = new Array(r); t < r; t++) s[t] = e[t]
    return s
  }
  var R = function (e) {
    return (
      (function (e) {
        return !!e && 'object' == typeof e
      })(e) &&
      !(function (e) {
        var r = Object.prototype.toString.call(e)
        return (
          '[object RegExp]' === r ||
          '[object Date]' === r ||
          (function (e) {
            return e.$$typeof === C
          })(e)
        )
      })(e)
    )
  }
  var C =
    'function' == typeof Symbol && Symbol.for
      ? Symbol.for('react.element')
      : 60103
  function j(e, r) {
    return !1 !== r.clone && r.isMergeableObject(e)
      ? D(((t = e), Array.isArray(t) ? [] : {}), e, r)
      : e
    var t
  }
  function G(e, r, t) {
    return e.concat(r).map(function (e) {
      return j(e, t)
    })
  }
  function O(e) {
    return Object.keys(e).concat(
      (function (e) {
        return Object.getOwnPropertySymbols
          ? Object.getOwnPropertySymbols(e).filter(function (r) {
              return e.propertyIsEnumerable(r)
            })
          : []
      })(e)
    )
  }
  function V(e, r) {
    try {
      return r in e
    } catch (e) {
      return !1
    }
  }
  function A(e, r, t) {
    var s = {}
    return (
      t.isMergeableObject(e) &&
        O(e).forEach(function (r) {
          s[r] = j(e[r], t)
        }),
      O(r).forEach(function (i) {
        ;(function (e, r) {
          return (
            V(e, r) &&
            !(
              Object.hasOwnProperty.call(e, r) &&
              Object.propertyIsEnumerable.call(e, r)
            )
          )
        })(e, i) ||
          (V(e, i) && t.isMergeableObject(r[i])
            ? (s[i] = (function (e, r) {
                if (!r.customMerge) return D
                var t = r.customMerge(e)
                return 'function' == typeof t ? t : D
              })(i, t)(e[i], r[i], t))
            : (s[i] = j(r[i], t)))
      }),
      s
    )
  }
  function D(e, r, t) {
    ;((t = t || {}).arrayMerge = t.arrayMerge || G),
      (t.isMergeableObject = t.isMergeableObject || R),
      (t.cloneUnlessOtherwiseSpecified = j)
    var s = Array.isArray(r)
    return s === Array.isArray(e)
      ? s
        ? t.arrayMerge(e, r, t)
        : A(e, r, t)
      : j(r, t)
  }
  D.all = function (e, r) {
    if (!Array.isArray(e)) throw new Error('first argument should be an array')
    return e.reduce(function (e, t) {
      return D(e, t, r)
    }, {})
  }
  var U = D
  /*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  function I(e) {
    return (
      !0 ==
        (null != (r = e) && 'object' == typeof r && !1 === Array.isArray(r)) &&
      '[object Object]' === Object.prototype.toString.call(e)
    )
    /*!
     * isobject <https://github.com/jonschlinkert/isobject>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */
    var r
  }
  function W(e) {
    var r, t
    return (
      !1 !== I(e) &&
      'function' == typeof (r = e.constructor) &&
      !1 !== I((t = r.prototype)) &&
      !1 !== t.hasOwnProperty('isPrototypeOf')
    )
  }
  function F() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
    return Object.keys(e).reduce(function (r, t) {
      return (r[t.toLowerCase()] = e[t]), r
    }, {})
  }
  function K(e, r, t) {
    if ('string' == typeof r) {
      var s = T(r.split(' '), 2),
        i = s[0],
        o = s[1]
      t = Object.assign(o ? { method: i, url: o } : { url: i }, t)
    } else t = r
    return (
      (t.headers = F(t.headers)),
      U.all([e, t].filter(Boolean), { isMergeableObject: W })
    )
  }
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self && self
  var B = (function (e, r) {
    return e((r = { exports: {} }), r.exports), r.exports
  })(function (e, r) {
    e.exports = (function () {
      function e() {}
      return (
        (e.prototype.encodeReserved = function (e) {
          return e
            .split(/(%[0-9A-Fa-f]{2})/g)
            .map(function (e) {
              return (
                /%[0-9A-Fa-f]/.test(e) ||
                  (e = encodeURI(e).replace(/%5B/g, '[').replace(/%5D/g, ']')),
                e
              )
            })
            .join('')
        }),
        (e.prototype.encodeUnreserved = function (e) {
          return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
            return '%' + e.charCodeAt(0).toString(16).toUpperCase()
          })
        }),
        (e.prototype.encodeValue = function (e, r, t) {
          return (
            (r =
              '+' === e || '#' === e
                ? this.encodeReserved(r)
                : this.encodeUnreserved(r)),
            t ? this.encodeUnreserved(t) + '=' + r : r
          )
        }),
        (e.prototype.isDefined = function (e) {
          return null != e
        }),
        (e.prototype.isKeyOperator = function (e) {
          return ';' === e || '&' === e || '?' === e
        }),
        (e.prototype.getValues = function (e, r, t, s) {
          var i = e[t],
            o = []
          if (this.isDefined(i) && '' !== i)
            if (
              'string' == typeof i ||
              'number' == typeof i ||
              'boolean' == typeof i
            )
              (i = i.toString()),
                s && '*' !== s && (i = i.substring(0, parseInt(s, 10))),
                o.push(this.encodeValue(r, i, this.isKeyOperator(r) ? t : null))
            else if ('*' === s)
              Array.isArray(i)
                ? i.filter(this.isDefined).forEach(function (e) {
                    o.push(
                      this.encodeValue(r, e, this.isKeyOperator(r) ? t : null)
                    )
                  }, this)
                : Object.keys(i).forEach(function (e) {
                    this.isDefined(i[e]) && o.push(this.encodeValue(r, i[e], e))
                  }, this)
            else {
              var a = []
              Array.isArray(i)
                ? i.filter(this.isDefined).forEach(function (e) {
                    a.push(this.encodeValue(r, e))
                  }, this)
                : Object.keys(i).forEach(function (e) {
                    this.isDefined(i[e]) &&
                      (a.push(this.encodeUnreserved(e)),
                      a.push(this.encodeValue(r, i[e].toString())))
                  }, this),
                this.isKeyOperator(r)
                  ? o.push(this.encodeUnreserved(t) + '=' + a.join(','))
                  : 0 !== a.length && o.push(a.join(','))
            }
          else
            ';' === r
              ? this.isDefined(i) && o.push(this.encodeUnreserved(t))
              : '' !== i || ('&' !== r && '?' !== r)
              ? '' === i && o.push('')
              : o.push(this.encodeUnreserved(t) + '=')
          return o
        }),
        (e.prototype.parse = function (e) {
          var r = this,
            t = ['+', '#', '.', '/', ';', '?', '&']
          return {
            expand: function (s) {
              return e.replace(
                /\{([^\{\}]+)\}|([^\{\}]+)/g,
                function (e, i, o) {
                  if (i) {
                    var a = null,
                      p = []
                    if (
                      (-1 !== t.indexOf(i.charAt(0)) &&
                        ((a = i.charAt(0)), (i = i.substr(1))),
                      i.split(/,/g).forEach(function (e) {
                        var t = /([^:\*]*)(?::(\d+)|(\*))?/.exec(e)
                        p.push.apply(p, r.getValues(s, a, t[1], t[2] || t[3]))
                      }),
                      a && '+' !== a)
                    ) {
                      var n = ','
                      return (
                        '?' === a ? (n = '&') : '#' !== a && (n = a),
                        (0 !== p.length ? a : '') + p.join(n)
                      )
                    }
                    return p.join(',')
                  }
                  return r.encodeReserved(o)
                }
              )
            },
          }
        }),
        new e()
      )
    })()
  })
  function H(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      t = e.includes('?') ? '&' : '?',
      s = Object.keys(r).filter(function (e) {
        return void 0 !== r[e]
      })
    return 0 === s.length
      ? e
      : ''
          .concat(e)
          .concat(t)
          .concat(
            s
              .map(function (e) {
                return 'q' === e
                  ? 'q='.concat(
                      r.q.split(' ').map(encodeURIComponent).join('+')
                    )
                  : Array.isArray(r[e])
                  ? r[e]
                      .map(function (r) {
                        return ''.concat(e, '=').concat(encodeURIComponent(r))
                      })
                      .join('&')
                  : ''.concat(e, '=').concat(encodeURIComponent(r[e]))
              })
              .join('&')
          )
  }
  var x = /\{[^}]+\}/g
  function L(e) {
    return e.replace(/^\W+|\W+$/g, '').split(/,/)
  }
  var M = 'multipart/form-data',
    N = 'application/x-www-form-urlencoded',
    J = 'application/json; charset=utf-8'
  function z(e) {
    var r = e.accepts,
      t = void 0 === r ? [] : r,
      s = e.method,
      i = e.baseUrl,
      o = e.url,
      a = e.headers,
      p = e.request,
      n = b(e, ['accepts', 'method', 'baseUrl', 'url', 'headers', 'request']),
      u = s.toUpperCase(),
      l = (function (e) {
        var r = e.match(x)
        return r
          ? r.map(L).reduce(function (e, r) {
              return e.concat(r)
            }, [])
          : []
      })(o),
      d = B.parse(o).expand(n)
    ;/^http/.test(d) || (d = ''.concat(i).concat(d))
    var c,
      g = Object.keys(n).reduce(function (e, r) {
        return l.includes(r) || (e[r] = n[r]), e
      }, {}),
      m = g._body,
      y = b(g, ['_body']),
      h = !1,
      q = !1
    if (['GET', 'DELETE'].includes(u)) d = H(d, y)
    else if (void 0 !== m) {
      if (
        ((h = /form-?data/i.test((c = m).constructor.name)),
        (q = c instanceof URLSearchParams),
        h && t.includes(M))
      )
        for (var _ = 0, k = Object.keys(y); _ < k.length; _++) {
          var w = k[_]
          c.append(w, y[w])
        }
      q && (c = c.toString())
    } else Object.keys(y).length && (c = y)
    return (
      h ||
        q ||
        (t.includes(N)
          ? ((c = H('', c).substring(1)), (a['content-type'] = N))
          : ((c = JSON.stringify(c)), (a['content-type'] = J))),
      void 0 === c && delete a['content-type'],
      { method: u, url: d, body: c, headers: a, request: p }
    )
  }
  function $(e, r, t) {
    return z(K(e, r, t))
  }
  var Q = (function e(r, t) {
      var s = K(r, t),
        i = $.bind(null, s)
      return (
        (i.DEFAULTS = s),
        (i.defaults = e.bind(null, s)),
        (i.merge = K.bind(null, s)),
        (i.parse = z),
        i
      )
    })(null, y),
    X = (function (e) {
      !(function (e, r) {
        if ('function' != typeof r && null !== r)
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        ;(e.prototype = Object.create(r && r.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          r && _(e, r)
      })(i, e)
      var r,
        t,
        s =
          ((r = i),
          (t = k()),
          function () {
            var e,
              s = q(r)
            if (t) {
              var i = q(this).constructor
              e = Reflect.construct(s, arguments, i)
            } else e = s.apply(this, arguments)
            return E(this, e)
          })
      function i(e, r) {
        var t,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        return (
          h(this, i),
          (t = s.call(this, e)),
          Error.captureStackTrace &&
            Error.captureStackTrace(P(t), t.constructor),
          (t.name = 'HTTPError'),
          (t.error = o.error),
          (t.headers = o.headers),
          (t.request = o.request),
          (t.status = r),
          t
        )
      }
      return i
    })(f(Error))
  function Y(e) {
    var r = e.headers.get('content-type')
    return r.includes('application/json')
      ? e.json()
      : !r || /^text\/|charset=utf-8$/.test(r)
      ? e.text()
      : e.arrayBuffer()
  }
  function Z(e) {
    var t,
      s,
      i,
      o = e.method,
      a = e.url,
      p = e.headers,
      n = e.body,
      u = e.request,
      l = Object.assign({ method: o, body: n, headers: p }, u),
      d = {}
    return (null !== (t = u.fetch) && void 0 !== t ? t : r)(a, l)
      .then(function (r) {
        ;(s = r.status), (i = r.url)
        var t,
          o = (function (e, r) {
            var t
            if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
              if (
                Array.isArray(e) ||
                (t = v(e)) ||
                (r && e && 'number' == typeof e.length)
              ) {
                t && (e = t)
                var s = 0,
                  i = function () {}
                return {
                  s: i,
                  n: function () {
                    return s >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[s++] }
                  },
                  e: function (e) {
                    throw e
                  },
                  f: i,
                }
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            }
            var o,
              a = !0,
              p = !1
            return {
              s: function () {
                t = e[Symbol.iterator]()
              },
              n: function () {
                var e = t.next()
                return (a = e.done), e
              },
              e: function (e) {
                ;(p = !0), (o = e)
              },
              f: function () {
                try {
                  a || null == t.return || t.return()
                } finally {
                  if (p) throw o
                }
              },
            }
          })(r.headers)
        try {
          for (o.s(); !(t = o.n()).done; ) {
            var a = T(t.value, 2),
              p = a[0],
              n = a[1]
            d[p] = n
          }
        } catch (e) {
          o.e(e)
        } finally {
          o.f()
        }
        return r.status >= 400 || [304].includes(r.status)
          ? Y(r).then(function (t) {
              throw new X(r.statusText, s, { error: t, headers: d, request: e })
            })
          : Y(r)
      })
      .then(function (e) {
        return { data: e, headers: d, status: s, url: i }
      })
      .catch(function (r) {
        if (r instanceof X) throw r
        throw new X(r.message, 500, { headers: d, request: e })
      })
  }
  var ee = (function e(r, t) {
    var s = r.defaults(t)
    function i(e, r) {
      var t = s.merge(e, r)
      return t.request && t.request.hook
        ? t.request.hook(function (e) {
            return Z(s.parse(e))
          }, t)
        : Z(s.parse(t))
    }
    return (i.defaults = e.bind(null, s)), (i.endpoint = s), i
  })(Q, {})
  function re(e, r) {
    e.headers = F(e.headers)
    var t,
      s = U(
        { headers: {}, request: {} },
        ((t = e),
        ['baseUrl', 'headers', 'request'].reduce(function (e, r) {
          return void 0 !== t[r] && (e[r] = t[r]), e
        }, {})),
        { isMergeableObject: W }
      )
    return (s.request.hook = r), s
  }
  function te(e) {
    return function () {
      for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t]
      try {
        return Promise.resolve(e.apply(this, r))
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
  function se(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      t = new g(),
      s = re(r, t),
      i = {
        auth: te(function () {
          return { type: 'unauthenticated' }
        }),
        request: ee.defaults(s),
        requestHook: t,
      }
    return (
      e.forEach(function (e) {
        e(i, r)
      }),
      i
    )
  }
  function ie() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      t = e.slice(0)
    return (
      r.forEach(function (e) {
        t.includes(e) || t.push(e)
      }),
      oe(t)
    )
  }
  function oe() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      r = se.bind(null, e)
    return (r.plugins = ie.bind(null, e)), r
  }
  var ae = oe(),
    pe = function (e) {
      return new Buffer(e).toString('base64')
    }
  function ne(e, r) {
    var t,
      s =
        'token' === (t = e.auth).type
          ? {
              type: 'token',
              token: t.token,
              headers: { authorization: 'Bearer '.concat(t.token) },
            }
          : {
              type: 'basic',
              username: t.username,
              password: t.password,
              headers: {
                authorization: 'Basic '.concat(
                  pe(''.concat(t.username, ':').concat(t.password))
                ),
              },
            }
    r.headers = Object.assign({}, r.headers, s.headers)
  }
  function ue(e, r) {
    var t = r.authStrategy
    if (r.auth && (!t || 'basic' === t || 'apppassword' === t)) {
      !(function (e) {
        if (!('token' in e || (e.username && e.password)))
          throw new Error(
            'Specify username and password for basic authentication'
          )
      })(r.auth)
      var s,
        i = { client: e, auth: r.auth }
      ;(e.auth = ((s = function (e) {
        return (function (e) {
          return 'token' === e.type
            ? {
                type: 'token',
                token: e.token,
                headers: { authorization: 'Bearer '.concat(e.token) },
              }
            : {
                type: 'basic',
                username: e.username,
                password: e.password,
                headers: {
                  authorization: 'Basic '.concat(
                    pe(''.concat(e.username, ':').concat(e.password))
                  ),
                },
              }
        })(e)
      }),
      function () {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
        try {
          return Promise.resolve(s.apply(this, e))
        } catch (e) {
          return Promise.reject(e)
        }
      }).bind(null, i.auth)),
        e.requestHook.before(ne.bind(null, i))
    }
  }
  var le = {
      authorizationUrl: 'https://bitbucket.org/site/oauth2/authorize',
      description:
        'OAuth 2 as per [RFC-6749](https://tools.ietf.org/html/rfc6749).',
      flow: 'accessCode',
      scopes: {
        account: 'Read your account information',
        'account:write': 'Read and modify your account information',
        email: "Read your account's primary email address",
        issue: "Read your repositories' issues",
        'issue:write': "Read and modify your repositories' issues",
        pipeline: "Access your repositories' build pipelines",
        'pipeline:variable':
          "Access your repositories' build pipelines and configure their variables",
        'pipeline:write': "Access and rerun your repositories' build pipelines",
        project:
          "Read your workspace's project settings and read repositories contained within your workspace's projects",
        'project:write':
          "Read and modify your workspace's project settings, and read and transfer repositories within your workspace's projects",
        pullrequest: 'Read your repositories and their pull requests',
        'pullrequest:write':
          'Read and modify your repositories and their pull requests',
        repository: 'Read your repositories',
        'repository:admin': 'Administer your repositories',
        'repository:delete': 'Delete your repositories',
        'repository:write': 'Read and modify your repositories',
        snippet: 'Read your snippets',
        'snippet:write': 'Read and modify your snippets',
        team: 'Read your team membership information',
        'team:write': 'Read and modify your team membership information',
        webhook: "Read and modify your repositories' webhooks",
        wiki: "Read and modify your repositories' wikis",
      },
      tokenUrl: 'https://bitbucket.org/site/oauth2/access_token',
      type: 'oauth2',
    },
    de = function (e) {
      return {
        getToken: {
          authorizationCodeGrant: {
            accepts: ['application/x-www-form-urlencoded'],
            grant_type: 'authorization_code',
            method: 'POST',
            params: {
              client_id: { in: '_body', required: !0, type: 'string' },
              client_secret: { in: '_body', required: !0, type: 'string' },
              code: { required: !0, type: 'string' },
              grant_type: { in: '_body', required: !0, type: 'string' },
            },
            url: ''.concat(e.tokenUrl),
          },
          resourceOwnerPasswordCredentialsGrant: {
            accepts: ['application/x-www-form-urlencoded'],
            grant_type: 'password',
            method: 'POST',
            params: {
              client_id: { in: '_body', required: !0, type: 'string' },
              client_secret: { in: '_body', required: !0, type: 'string' },
              grant_type: { in: '_body', required: !0, type: 'string' },
              password: { in: '_body', required: !0, type: 'string' },
              username: { in: '_body', required: !0, type: 'string' },
            },
            url: ''.concat(e.tokenUrl),
          },
          clientCredentialsGrant: {
            accepts: ['application/x-www-form-urlencoded'],
            grant_type: 'client_credentials',
            method: 'POST',
            params: {
              client_id: { in: '_body', required: !0, type: 'string' },
              client_secret: { in: '_body', required: !0, type: 'string' },
              grant_type: { in: '_body', required: !0, type: 'string' },
            },
            url: ''.concat(e.tokenUrl),
          },
          bitbucketCloudJWTGrant: {
            accepts: ['application/x-www-form-urlencoded'],
            grant_type: 'urn:bitbucket:oauth2:jwt',
            method: 'POST',
            params: {
              grant_type: { in: '_body', required: !0, type: 'string' },
              jwtToken: {
                in: 'headers.authorization:JWT',
                required: !0,
                type: 'string',
              },
            },
            url: ''.concat(e.tokenUrl),
          },
          refreshToken: {
            accepts: ['application/x-www-form-urlencoded'],
            grant_type: 'refresh_token',
            method: 'POST',
            params: {
              grant_type: { in: '_body', required: !0, type: 'string' },
              refresh_token: { in: '_body', required: !0, type: 'string' },
            },
            url: ''.concat(e.tokenUrl),
          },
        },
      }
    }
  var ce = de(le).getToken
  var ge,
    me =
      ((ge = function (e, r) {
        var t,
          s,
          i,
          o,
          a = r.auth,
          p = a.grant_type
        return (
          (t =
            'bitbucketCloudJWTGrant' === a.grant_type
              ? e.oauth[p].defaults({
                  headers: {
                    accept: 'application/x-www-form-urlencoded',
                    authorization: 'JWT '.concat(pe(''.concat(a.jwt_token))),
                  },
                })
              : e.oauth[p].defaults({
                  headers: {
                    authorization: 'Basic '.concat(
                      pe(''.concat(a.client_id, ':').concat(a.client_secret))
                    ),
                  },
                })),
          (a.grant_type = ce[p].grant_type),
          (s = t(a)),
          (i = function (e) {
            var r = e.data
            return {
              token: r.access_token,
              scopes: r.scope.split(/,\s*/).filter(Boolean),
            }
          }),
          o
            ? i
              ? i(s)
              : s
            : ((s && s.then) || (s = Promise.resolve(s)), i ? s.then(i) : s)
        )
      }),
      function () {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
        try {
          return Promise.resolve(ge.apply(this, e))
        } catch (e) {
          return Promise.reject(e)
        }
      })
  var ye = (function (e) {
    return function () {
      for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t]
      try {
        return Promise.resolve(e.apply(this, r))
      } catch (e) {
        return Promise.reject(e)
      }
    }
  })(function (e, r) {
    return (
      (t = me(e, r)),
      (s = function (e) {
        return {
          type: 'token',
          tokenType: 'oauth',
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          scopes: e.scopes,
        }
      }),
      i
        ? s
          ? s(t)
          : t
        : ((t && t.then) || (t = Promise.resolve(t)), s ? t.then(s) : t)
    )
    var t, s, i
  })
  var he = function (e, r) {
      if (r.auth && 'OAuth' === r.authStrategy) {
        !(function (e) {
          if (
            !(
              'bitbucketCloudJWTGrant' === e.grant_type ||
              (e.client_id && e.client_secret)
            )
          )
            throw new Error(
              'Specify client id and client secret for authentication'
            )
        })(r.auth)
        var t = { authStrategy: r.authStrategy, auth: r.auth }
        e.auth = ye.bind(null, e, t)
      }
    },
    qe = de(le)
  function _e(e, r, t) {
    var s = t[r]
    if (!s) throw new X('not found: '.concat(r, ' page'), 404)
    return e.request({ method: 'GET', url: s })
  }
  var ke = {
    branching_model: {
      get: { alias: 'repositories.getBranchingModel' },
      getSettings: { alias: 'repositories.getBranchingModelSettings' },
      updateSettings: { alias: 'repositories.updateBranchingModelSettings' },
    },
    branchrestrictions: {
      create: { alias: 'repositories.createBranchRestriction' },
      delete: { alias: 'repositories.deleteBranchRestriction' },
      get: { alias: 'repositories.getBranchRestriction' },
      list: { alias: 'repositories.listBranchRestrictions' },
      update: { alias: 'repositories.updateBranchRestriction' },
    },
    commits: {
      bulkCreateOrUpdateAnnotations: {
        alias: 'repositories.bulkCreateOrUpdateAnnotations',
      },
      createApproval: { alias: 'repositories.createCommitApproval' },
      createComment: { alias: 'repositories.createCommitComment' },
      createOrUpdateAnnotation: {
        alias: 'repositories.createOrUpdateAnnotation',
      },
      createOrUpdateReport: { alias: 'repositories.createOrUpdateReport' },
      deleteAnnotation: { alias: 'repositories.deleteAnnotation' },
      deleteApproval: { alias: 'repositories.deleteCommitApproval' },
      deleteReport: { alias: 'repositories.deleteReport' },
      get: { alias: 'repositories.getCommit' },
      getAnnotation: { alias: 'repositories.getAnnotation' },
      getAnnotationsForReport: {
        alias: 'repositories.getAnnotationsForReport',
      },
      getComment: { alias: 'repositories.getCommitComment' },
      getDiff: { alias: 'repositories.getDiff' },
      getPatch: { alias: 'repositories.getPatch' },
      getReport: { alias: 'repositories.getReport' },
      getReportsForCommit: { alias: 'repositories.getReportsForCommit' },
      list: { alias: 'repositories.listCommits' },
      listAlt: { alias: 'repositories.listCommitsAlt' },
      listAt: { alias: 'repositories.listCommitsAt' },
      listAtAlt: { alias: 'repositories.listCommitsAtAlt' },
      listComments: { alias: 'repositories.listCommitComments' },
    },
    commitstatuses: {
      createBuildStatus: { alias: 'repositories.createCommitBuildStatus' },
      getBuildStatus: { alias: 'repositories.getCommitBuildStatus' },
      list: { alias: 'repositories.listCommitStatuses' },
      listPullRequestStatuses: {
        alias: 'repositories.listPullRequestStatuses',
      },
      updateBuildStatus: { alias: 'repositories.updateCommitBuildStatus' },
    },
    deploy: {
      createKey: { alias: 'repositories.createDeployKey' },
      deleteKey: { alias: 'repositories.deleteDeployKey' },
      getKey: { alias: 'repositories.getDeployKey' },
      listKeys: { alias: 'repositories.listDeployKeys' },
      updateKey: { alias: 'repositories.updateDeployKey' },
    },
    deployments: {
      createEnvironment: { alias: 'repositories.createEnvironment' },
      deleteEnvironmentForRepository: {
        alias: 'repositories.deleteEnvironment',
      },
      get: { alias: 'repositories.getDeployment' },
      getEnvironment: { alias: 'repositories.getEnvironment' },
      list: { alias: 'repositories.listDeployments' },
      listEnvironments: { alias: 'repositories.listEnvironments' },
      updateEnvironment: { alias: 'repositories.updateEnvironment' },
    },
    downloads: {
      create: { alias: 'repositories.createDownload' },
      delete: { alias: 'repositories.deleteDownload' },
      get: { alias: 'repositories.getDownload' },
      list: { alias: 'repositories.listDownloads' },
    },
    hook_events: {
      getAllSubjectTypes: {
        method: 'GET',
        returns: 'SubjectTypes',
        url: '/hook_events',
      },
      list: {
        method: 'GET',
        params: {
          subject_type: {
            enum: ['workspace', 'user', 'repository', 'team'],
            required: !0,
            type: 'string',
          },
        },
        returns: 'PaginatedHookEvents',
        url: '/hook_events/{subject_type}',
      },
    },
    issue_tracker: {
      create: { alias: 'repositories.createIssue' },
      createAttachments: { alias: 'repositories.createIssueAttachments' },
      createChange: { alias: 'repositories.createIssueChange' },
      createComment: { alias: 'repositories.createIssueComment' },
      createVote: { alias: 'repositories.createIssueVote' },
      createWatch: { alias: 'repositories.createIssueWatch' },
      delete: { alias: 'repositories.deleteIssue' },
      deleteAttachment: { alias: 'repositories.deleteIssueAttachment' },
      deleteComment: { alias: 'repositories.deleteIssueComment' },
      deleteVote: { alias: 'repositories.deleteIssueVote' },
      deleteWatch: { alias: 'repositories.deleteIssueWatch' },
      get: { alias: 'repositories.getIssue' },
      getAttachment: { alias: 'repositories.getIssueAttachment' },
      getChange: { alias: 'repositories.getIssueChange' },
      getComment: { alias: 'repositories.getIssueComment' },
      getComponent: { alias: 'repositories.getIssueComponent' },
      getMilestone: { alias: 'repositories.getIssueMilestone' },
      getVersion: { alias: 'repositories.getIssueVersion' },
      getVote: { alias: 'repositories.getIssueVote' },
      getWatch: { alias: 'repositories.getIssueWatch' },
      list: { alias: 'repositories.listIssues' },
      listAttachments: { alias: 'repositories.listIssueAttachments' },
      listChanges: { alias: 'repositories.listIssueChanges' },
      listComments: { alias: 'repositories.listIssueComments' },
      listComponents: { alias: 'repositories.listComponents' },
      listMilestones: { alias: 'repositories.listMilestones' },
      listVersions: { alias: 'repositories.listVersions' },
      update: { alias: 'repositories.updateIssue' },
      updateComment: { alias: 'repositories.updateIssueComment' },
    },
    pipelines: {
      create: { alias: 'repositories.createPipeline' },
      createDeploymentVariable: {
        alias: 'repositories.createDeploymentVariable',
      },
      createKnownHost: { alias: 'repositories.createPipelineKnownHost' },
      createSchedule: { alias: 'repositories.createPipelineSchedule' },
      createVariable: { alias: 'repositories.createPipelineVariable' },
      createVariableForTeam: { alias: 'teams.createPipelineVariable' },
      createVariableForUser: { alias: 'users.createPipelineVariable' },
      deleteDeploymentVariable: {
        alias: 'repositories.deleteDeploymentVariable',
      },
      deleteKnownHost: { alias: 'repositories.deletePipelineKnownHost' },
      deleteSchedule: { alias: 'repositories.deletePipelineSchedule' },
      deleteSshKeyPair: { alias: 'repositories.deletePipelineSshKeyPair' },
      deleteVariable: { alias: 'repositories.deletePipelineVariable' },
      deleteVariableForTeam: { alias: 'teams.deletePipelineVariable' },
      deleteVariableForUser: { alias: 'users.deletePipelineVariable' },
      get: { alias: 'repositories.getPipeline' },
      getConfig: { alias: 'repositories.getPipelineConfig' },
      getKnownHost: { alias: 'repositories.getPipelineKnownHost' },
      getSchedule: { alias: 'repositories.getPipelineSchedule' },
      getSshKeyPair: { alias: 'repositories.getPipelineSshKeyPair' },
      getStep: { alias: 'repositories.getPipelineStep' },
      getStepLog: { alias: 'repositories.getPipelineStepLog' },
      getVariable: { alias: 'repositories.getPipelineVariable' },
      getVariableForTeam: { alias: 'teams.getPipelineVariable' },
      getVariableForUser: { alias: 'users.getPipelineVariable' },
      list: { alias: 'repositories.listPipelines' },
      listDeploymentVariables: {
        alias: 'repositories.listDeploymentVariables',
      },
      listKnownHosts: { alias: 'repositories.listPipelineKnownHosts' },
      listScheduleExecutions: {
        alias: 'repositories.listPipelineScheduleExecutions',
      },
      listSchedules: { alias: 'repositories.listPipelineSchedules' },
      listSteps: { alias: 'repositories.listPipelineSteps' },
      listVariablesForRepo: { alias: 'repositories.listPipelineVariables' },
      listVariablesForTeam: { alias: 'teams.listPipelineVariables' },
      listVariablesForUser: { alias: 'users.listPipelineVariables' },
      stop: { alias: 'repositories.stopPipeline' },
      updateBuildNumber: { alias: 'repositories.updatePipelineBuildNumber' },
      updateConfig: { alias: 'repositories.updatePipelineConfig' },
      updateDeploymentVariable: {
        alias: 'repositories.updateDeploymentVariable',
      },
      updateKnownHost: { alias: 'repositories.updatePipelineKnownHost' },
      updateSchedule: { alias: 'repositories.updatePipelineSchedule' },
      updateSshKeyPair: { alias: 'repositories.updatePipelineSshKeyPair' },
      updateVariable: { alias: 'repositories.updatePipelineVariable' },
      updateVariableForTeam: { alias: 'teams.updatePipelineVariable' },
      updateVariableForUser: { alias: 'users.updatePipelineVariable' },
    },
    projects: {
      createForTeam: { alias: 'teams.createProject' },
      createOrUpdateProject: { alias: 'workspaces.createOrUpdateProject' },
      createProject: { alias: 'workspaces.createProject' },
      deleteForTeam: { alias: 'teams.deleteProject' },
      deleteProject: { alias: 'workspaces.deleteProject' },
      getForTeam: { alias: 'teams.getProject' },
      getProject: { alias: 'workspaces.getProject' },
      listForTeam: { alias: 'teams.listProjects' },
      updateForTeam: { alias: 'teams.updateProject' },
    },
    properties: {
      deleteCommitHostedPropertyValue: {
        alias: 'repositories.deleteCommitHostedPropertyValue',
      },
      deletePullRequestHostedPropertyValue: {
        alias: 'repositories.deletePullRequestHostedPropertyValue',
      },
      deleteRepositoryHostedPropertyValue: {
        alias: 'repositories.deleteRepositoryHostedPropertyValue',
      },
      deleteUserHostedPropertyValue: {
        alias: 'users.deleteUserHostedPropertyValue',
      },
      getCommitHostedPropertyValue: {
        alias: 'repositories.getCommitHostedPropertyValue',
      },
      getPullRequestHostedPropertyValue: {
        alias: 'repositories.getPullRequestHostedPropertyValue',
      },
      getRepositoryHostedPropertyValue: {
        alias: 'repositories.getRepositoryHostedPropertyValue',
      },
      retrieveUserHostedPropertyValue: {
        alias: 'users.retrieveUserHostedPropertyValue',
      },
      updateCommitHostedPropertyValue: {
        alias: 'repositories.updateCommitHostedPropertyValue',
      },
      updatePullRequestHostedPropertyValue: {
        alias: 'repositories.updatePullRequestHostedPropertyValue',
      },
      updateRepositoryHostedPropertyValue: {
        alias: 'repositories.updateRepositoryHostedPropertyValue',
      },
      updateUserHostedPropertyValue: {
        alias: 'users.updateUserHostedPropertyValue',
      },
    },
    pullrequests: {
      addDefaultReviewer: { alias: 'repositories.addDefaultReviewer' },
      create: { alias: 'repositories.createPullRequest' },
      createApproval: { alias: 'repositories.createPullRequestApproval' },
      createComment: { alias: 'repositories.createPullRequestComment' },
      decline: { alias: 'repositories.declinePullRequest' },
      deleteApproval: { alias: 'repositories.deletePullRequestApproval' },
      deleteComment: { alias: 'repositories.deletePullRequestComment' },
      deleteDefaultReviewer: { alias: 'repositories.deleteDefaultReviewer' },
      get: { alias: 'repositories.getPullRequest' },
      getComment: { alias: 'repositories.getPullRequestComment' },
      getDefaultReviewer: { alias: 'repositories.getDefaultReviewer' },
      getDiff: { alias: 'repositories.getPullRequestDiff' },
      getDiffStat: { alias: 'repositories.getPullRequestDiffStat' },
      getPatch: { alias: 'repositories.getPullRequestPatch' },
      list: { alias: 'repositories.listPullRequests' },
      listActivities: { alias: 'repositories.listPullRequestActivities' },
      listActivitiesForRepo: {
        alias: 'repositories.listPullRequestActivitiesForRepo',
      },
      listComments: { alias: 'repositories.listPullRequestComments' },
      listCommits: { alias: 'repositories.listPullRequestCommits' },
      listDefaultReviewers: { alias: 'repositories.listDefaultReviewers' },
      listForCommit: { alias: 'repositories.listPullrequestsForCommit' },
      listStatuses: { alias: 'repositories.listPullRequestStatuses' },
      merge: { alias: 'repositories.mergePullRequest' },
      update: { alias: 'repositories.updatePullRequest' },
      updateComment: { alias: 'repositories.updatePullRequestComment' },
    },
    refs: {
      createBranch: { alias: 'repositories.createBranch' },
      createTag: { alias: 'repositories.createTag' },
      deleteBranch: { alias: 'repositories.deleteBranch' },
      deleteTag: { alias: 'repositories.deleteTag' },
      getBranch: { alias: 'repositories.getBranch' },
      getTag: { alias: 'repositories.getTag' },
      list: { alias: 'repositories.listRefs' },
      listBranches: { alias: 'repositories.listBranches' },
      listTags: { alias: 'repositories.listTags' },
    },
    reports: {
      bulkCreateOrUpdateAnnotations: {
        alias: 'repositories.bulkCreateOrUpdateAnnotations',
      },
      createOrUpdateAnnotation: {
        alias: 'repositories.createOrUpdateAnnotation',
      },
      createOrUpdateReport: { alias: 'repositories.createOrUpdateReport' },
      deleteAnnotation: { alias: 'repositories.deleteAnnotation' },
      deleteReport: { alias: 'repositories.deleteReport' },
      getAnnotation: { alias: 'repositories.getAnnotation' },
      getAnnotationsForReport: {
        alias: 'repositories.getAnnotationsForReport',
      },
      getReport: { alias: 'repositories.getReport' },
      getReportsForCommit: { alias: 'repositories.getReportsForCommit' },
    },
    repositories: {
      addDefaultReviewer: {
        method: 'PUT',
        params: {
          repo_slug: { required: !0, type: 'string' },
          target_username: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}',
      },
      bulkCreateOrUpdateAnnotations: {
        headers: { accept: 'application/json' },
        method: 'POST',
        params: {
          _body: { required: !0, type: 'any' },
          commit: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          reportId: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'ReportAnnotation[]',
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations',
      },
      create: {
        headers: { accept: 'application/json' },
        method: 'POST',
        params: {
          _body: { schema: 'Repository', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Repository',
        url: '/repositories/{workspace}/{repo_slug}',
      },
      createBranch: {
        method: 'POST',
        params: {
          _body: { required: !0, type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Branch',
        url: '/repositories/{workspace}/{repo_slug}/refs/branches',
      },
      createBranchRestriction: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'Branchrestriction', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Branchrestriction',
        url: '/repositories/{workspace}/{repo_slug}/branch-restrictions',
      },
      createCommitApproval: {
        method: 'POST',
        params: {
          node: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Participant',
        url: '/repositories/{workspace}/{repo_slug}/commit/{node}/approve',
      },
      createCommitBuildStatus: {
        method: 'POST',
        params: {
          _body: { schema: 'Commitstatus', type: 'any' },
          node: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Commitstatus',
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{node}/statuses/build',
      },
      createCommitComment: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'CommitComment', type: 'any' },
          node: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/commit/{node}/comments',
      },
      createDeployKey: {
        method: 'POST',
        params: {
          key: { required: !0, type: 'string' },
          label: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'DeployKey',
        url: '/repositories/{workspace}/{repo_slug}/deploy-keys',
      },
      createDeploymentVariable: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'DeploymentVariable', type: 'any' },
          environment_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          variable_uuid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'DeploymentVariable',
        url:
          '/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables',
      },
      createDownload: {
        accepts: ['multipart/form-data'],
        method: 'POST',
        params: {
          _body: { required: !0, type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/downloads',
      },
      createEnvironment: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'DeploymentEnvironment', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'DeploymentEnvironment',
        url: '/repositories/{workspace}/{repo_slug}/environments/',
      },
      createFork: {
        method: 'POST',
        params: {
          _body: { schema: 'Repository', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Repository',
        url: '/repositories/{workspace}/{repo_slug}/forks',
      },
      createIssue: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'Issue', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Issue',
        url: '/repositories/{workspace}/{repo_slug}/issues',
      },
      createIssueAttachments: {
        accepts: ['multipart/form-data'],
        method: 'POST',
        params: {
          _body: { required: !0, type: 'any' },
          issue_id: { required: !0, type: 'integer' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments',
      },
      createIssueChange: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'IssueChange', type: 'any' },
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'IssueChange',
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes',
      },
      createIssueComment: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'IssueComment', type: 'any' },
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments',
      },
      createIssueExportJob: {
        method: 'POST',
        params: {
          _body: { schema: 'ExportOptions', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/issues/export',
      },
      createIssueImportJob: {
        method: 'POST',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'IssueJobStatus',
        url: '/repositories/{workspace}/{repo_slug}/issues/import',
      },
      createIssueVote: {
        method: 'PUT',
        params: {
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Error',
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote',
      },
      createIssueWatch: {
        method: 'PUT',
        params: {
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Error',
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch',
      },
      createOrUpdateAnnotation: {
        headers: { accept: 'application/json' },
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'ReportAnnotation', type: 'any' },
          annotationId: { required: !0, type: 'string' },
          commit: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          reportId: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'ReportAnnotation',
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}',
      },
      createOrUpdateReport: {
        headers: { accept: 'application/json' },
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'Report', type: 'any' },
          commit: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          reportId: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Report',
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}',
      },
      createPipeline: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'Pipeline', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Pipeline',
        url: '/repositories/{workspace}/{repo_slug}/pipelines/',
      },
      createPipelineKnownHost: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'PipelineKnownHost', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineKnownHost',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/',
      },
      createPipelineSchedule: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'PipelineSchedule', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineSchedule',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/',
      },
      createPipelineVariable: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'PipelineVariable', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineVariable',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/variables/',
      },
      createPullRequest: {
        method: 'POST',
        params: {
          _body: { schema: 'Pullrequest', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Pullrequest',
        url: '/repositories/{workspace}/{repo_slug}/pullrequests',
      },
      createPullRequestApproval: {
        method: 'POST',
        params: {
          pull_request_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Participant',
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve',
      },
      createPullRequestComment: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'PullrequestComment', type: 'any' },
          pull_request_id: { required: !0, type: 'integer' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PullrequestComment',
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments',
      },
      createSrcFileCommit: {
        accepts: ['multipart/form-data', 'application/x-www-form-urlencoded'],
        method: 'POST',
        params: {
          _body: { type: 'any' },
          author: { type: 'string' },
          branch: { type: 'string' },
          files: { type: 'string' },
          message: { type: 'string' },
          parents: { type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/src',
      },
      createTag: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'Tag', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Tag',
        url: '/repositories/{workspace}/{repo_slug}/refs/tags',
      },
      createWebhook: {
        method: 'POST',
        params: {
          _body: { required: !0, type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'WebhookSubscription',
        url: '/repositories/{workspace}/{repo_slug}/hooks',
      },
      declinePullRequest: {
        method: 'POST',
        params: {
          pull_request_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Pullrequest',
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline',
      },
      delete: {
        method: 'DELETE',
        params: {
          redirect_to: { type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}',
      },
      deleteAnnotation: {
        headers: { accept: 'application/json' },
        method: 'DELETE',
        params: {
          annotationId: { required: !0, type: 'string' },
          commit: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          reportId: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}',
      },
      deleteBranch: {
        method: 'DELETE',
        params: {
          name: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/refs/branches/{name}',
      },
      deleteBranchRestriction: {
        method: 'DELETE',
        params: {
          id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}',
      },
      deleteCommitApproval: {
        method: 'DELETE',
        params: {
          node: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/commit/{node}/approve',
      },
      deleteCommitHostedPropertyValue: {
        method: 'DELETE',
        params: {
          app_key: { required: !0, type: 'string' },
          commit: { required: !0, type: 'string' },
          property_name: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}',
      },
      deleteDefaultReviewer: {
        method: 'DELETE',
        params: {
          repo_slug: { required: !0, type: 'string' },
          target_username: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}',
      },
      deleteDeployKey: {
        method: 'DELETE',
        params: {
          key_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}',
      },
      deleteDeploymentVariable: {
        method: 'DELETE',
        params: {
          environment_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          variable_uuid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}',
      },
      deleteDownload: {
        method: 'DELETE',
        params: {
          filename: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/downloads/{filename}',
      },
      deleteEnvironment: {
        method: 'DELETE',
        params: {
          environment_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}',
      },
      deleteIssue: {
        method: 'DELETE',
        params: {
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Issue',
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}',
      },
      deleteIssueAttachment: {
        method: 'DELETE',
        params: {
          issue_id: { required: !0, type: 'string' },
          path: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}',
      },
      deleteIssueComment: {
        method: 'DELETE',
        params: {
          _body: { required: !0, schema: 'IssueComment', type: 'any' },
          comment_id: { required: !0, type: 'string' },
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}',
      },
      deleteIssueVote: {
        method: 'DELETE',
        params: {
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote',
      },
      deleteIssueWatch: {
        method: 'DELETE',
        params: {
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Error',
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch',
      },
      deletePipelineKnownHost: {
        method: 'DELETE',
        params: {
          known_host_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}',
      },
      deletePipelineSchedule: {
        method: 'DELETE',
        params: {
          repo_slug: { required: !0, type: 'string' },
          schedule_uuid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}',
      },
      deletePipelineSshKeyPair: {
        method: 'DELETE',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair',
      },
      deletePipelineVariable: {
        method: 'DELETE',
        params: {
          repo_slug: { required: !0, type: 'string' },
          variable_uuid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}',
      },
      deletePullRequestApproval: {
        method: 'DELETE',
        params: {
          pull_request_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve',
      },
      deletePullRequestComment: {
        method: 'DELETE',
        params: {
          comment_id: { required: !0, type: 'string' },
          pull_request_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}',
      },
      deletePullRequestHostedPropertyValue: {
        method: 'DELETE',
        params: {
          app_key: { required: !0, type: 'string' },
          property_name: { required: !0, type: 'string' },
          pullrequest_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}',
      },
      deleteReport: {
        headers: { accept: 'application/json' },
        method: 'DELETE',
        params: {
          commit: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          reportId: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}',
      },
      deleteRepositoryHostedPropertyValue: {
        method: 'DELETE',
        params: {
          app_key: { required: !0, type: 'string' },
          property_name: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}',
      },
      deleteTag: {
        method: 'DELETE',
        params: {
          name: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/refs/tags/{name}',
      },
      deleteWebhook: {
        method: 'DELETE',
        params: {
          repo_slug: { required: !0, type: 'string' },
          uid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/hooks/{uid}',
      },
      get: {
        headers: { accept: 'application/json' },
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Repository',
        url: '/repositories/{workspace}/{repo_slug}',
      },
      getAnnotation: {
        headers: { accept: 'application/json' },
        method: 'GET',
        params: {
          annotationId: { required: !0, type: 'string' },
          commit: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          reportId: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'ReportAnnotation',
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}',
      },
      getAnnotationsForReport: {
        headers: { accept: 'application/json' },
        method: 'GET',
        params: {
          commit: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          reportId: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedAnnotations',
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations',
      },
      getBranch: {
        method: 'GET',
        params: {
          name: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Branch',
        url: '/repositories/{workspace}/{repo_slug}/refs/branches/{name}',
      },
      getBranchingModel: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'BranchingModel',
        url: '/repositories/{workspace}/{repo_slug}/branching-model',
      },
      getBranchingModelSettings: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'BranchingModelSettings',
        url: '/repositories/{workspace}/{repo_slug}/branching-model/settings',
      },
      getBranchRestriction: {
        method: 'GET',
        params: {
          id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Branchrestriction',
        url: '/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}',
      },
      getCommit: {
        method: 'GET',
        params: {
          node: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Commit',
        url: '/repositories/{workspace}/{repo_slug}/commit/{node}',
      },
      getCommitBuildStatus: {
        method: 'GET',
        params: {
          key: { required: !0, type: 'string' },
          node: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Commitstatus',
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{node}/statuses/build/{key}',
      },
      getCommitComment: {
        method: 'GET',
        params: {
          comment_id: { required: !0, type: 'integer' },
          node: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'CommitComment',
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{node}/comments/{comment_id}',
      },
      getCommitHostedPropertyValue: {
        method: 'GET',
        params: {
          app_key: { required: !0, type: 'string' },
          commit: { required: !0, type: 'string' },
          property_name: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}',
      },
      getDefaultReviewer: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          target_username: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}',
      },
      getDeployKey: {
        method: 'GET',
        params: {
          key_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'DeployKey',
        url: '/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}',
      },
      getDeployment: {
        method: 'GET',
        params: {
          deployment_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Deployment',
        url:
          '/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}',
      },
      getDiff: {
        method: 'GET',
        params: {
          binary: { type: 'boolean' },
          context: { type: 'integer' },
          ignore_whitespace: { type: 'boolean' },
          merge: { type: 'boolean' },
          path: { type: 'string' },
          renames: { type: 'boolean' },
          repo_slug: { required: !0, type: 'string' },
          spec: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/diff/{spec}',
      },
      getDownload: {
        method: 'GET',
        params: {
          filename: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/downloads/{filename}',
      },
      getEnvironment: {
        method: 'GET',
        params: {
          environment_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'DeploymentEnvironment',
        url:
          '/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}',
      },
      getIssue: {
        method: 'GET',
        params: {
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Issue',
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}',
      },
      getIssueAttachment: {
        method: 'GET',
        params: {
          issue_id: { required: !0, type: 'string' },
          path: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}',
      },
      getIssueChange: {
        method: 'GET',
        params: {
          change_id: { required: !0, type: 'string' },
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'IssueChange',
        url:
          '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes/{change_id}',
      },
      getIssueComment: {
        method: 'GET',
        params: {
          comment_id: { required: !0, type: 'string' },
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'IssueComment',
        url:
          '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}',
      },
      getIssueComponent: {
        method: 'GET',
        params: {
          component_id: { required: !0, type: 'integer' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Component',
        url: '/repositories/{workspace}/{repo_slug}/components/{component_id}',
      },
      getIssueExportJobStatus: {
        method: 'GET',
        params: {
          repo_name: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          task_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'IssueJobStatus',
        url:
          '/repositories/{workspace}/{repo_slug}/issues/export/{repo_name}-issues-{task_id}.zip',
      },
      getIssueImportJobStatus: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'IssueJobStatus',
        url: '/repositories/{workspace}/{repo_slug}/issues/import',
      },
      getIssueMilestone: {
        method: 'GET',
        params: {
          milestone_id: { required: !0, type: 'integer' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Milestone',
        url: '/repositories/{workspace}/{repo_slug}/milestones/{milestone_id}',
      },
      getIssueVersion: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          version_id: { required: !0, type: 'integer' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Version',
        url: '/repositories/{workspace}/{repo_slug}/versions/{version_id}',
      },
      getIssueVote: {
        method: 'GET',
        params: {
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Error',
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote',
      },
      getIssueWatch: {
        method: 'GET',
        params: {
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Error',
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch',
      },
      getPatch: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          spec: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/patch/{spec}',
      },
      getPipeline: {
        method: 'GET',
        params: {
          pipeline_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Pipeline',
        url: '/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}',
      },
      getPipelineConfig: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelinesConfig',
        url: '/repositories/{workspace}/{repo_slug}/pipelines_config',
      },
      getPipelineKnownHost: {
        method: 'GET',
        params: {
          known_host_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineKnownHost',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}',
      },
      getPipelineSchedule: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          schedule_uuid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineSchedule',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}',
      },
      getPipelineSshKeyPair: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineSshKeyPair',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair',
      },
      getPipelineStep: {
        method: 'GET',
        params: {
          pipeline_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          step_uuid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineStep',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}',
      },
      getPipelineStepLog: {
        headers: { accept: 'application/octet-stream' },
        method: 'GET',
        params: {
          pipeline_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          step_uuid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log',
      },
      getPipelineVariable: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          variable_uuid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineVariable',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}',
      },
      getPullRequest: {
        method: 'GET',
        params: {
          pull_request_id: { required: !0, type: 'integer' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Pullrequest',
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}',
      },
      getPullRequestComment: {
        method: 'GET',
        params: {
          comment_id: { required: !0, type: 'string' },
          pull_request_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PullrequestComment',
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}',
      },
      getPullRequestDiff: {
        method: 'GET',
        params: {
          pull_request_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff',
      },
      getPullRequestDiffStat: {
        method: 'GET',
        params: {
          pull_request_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat',
      },
      getPullRequestHostedPropertyValue: {
        method: 'GET',
        params: {
          app_key: { required: !0, type: 'string' },
          property_name: { required: !0, type: 'string' },
          pullrequest_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}',
      },
      getPullRequestPatch: {
        method: 'GET',
        params: {
          pull_request_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch',
      },
      getReport: {
        headers: { accept: 'application/json' },
        method: 'GET',
        params: {
          commit: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          reportId: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Report',
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}',
      },
      getReportsForCommit: {
        headers: { accept: 'application/json' },
        method: 'GET',
        params: {
          commit: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedReports',
        url: '/repositories/{workspace}/{repo_slug}/commit/{commit}/reports',
      },
      getRepositoryHostedPropertyValue: {
        method: 'GET',
        params: {
          app_key: { required: !0, type: 'string' },
          property_name: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}',
      },
      getTag: {
        method: 'GET',
        params: {
          name: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Tag',
        url: '/repositories/{workspace}/{repo_slug}/refs/tags/{name}',
      },
      getWebhook: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          uid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'WebhookSubscription',
        url: '/repositories/{workspace}/{repo_slug}/hooks/{uid}',
      },
      list: {
        method: 'GET',
        params: {
          role: {
            enum: ['admin', 'contributor', 'member', 'owner'],
            type: 'string',
          },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedRepositories',
        url: '/repositories/{workspace}',
      },
      listBranches: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedBranches',
        url: '/repositories/{workspace}/{repo_slug}/refs/branches',
      },
      listBranchRestrictions: {
        method: 'GET',
        params: {
          kind: { type: 'string' },
          pattern: { type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedBranchrestrictions',
        url: '/repositories/{workspace}/{repo_slug}/branch-restrictions',
      },
      listCommitComments: {
        method: 'GET',
        params: {
          node: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedCommitComments',
        url: '/repositories/{workspace}/{repo_slug}/commit/{node}/comments',
      },
      listCommits: {
        method: 'GET',
        params: {
          exclude: { type: 'string' },
          include: { type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/commits',
      },
      listCommitsAlt: {
        accepts: ['application/x-www-form-urlencoded'],
        method: 'POST',
        params: {
          exclude: { type: 'string' },
          include: { type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/commits{?page,pagelen,q,sort}',
      },
      listCommitsAt: {
        method: 'GET',
        params: {
          exclude: { type: 'string' },
          include: { type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          revision: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/commits/{revision}',
      },
      listCommitsAtAlt: {
        method: 'POST',
        params: {
          exclude: { type: 'string' },
          include: { type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          revision: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/commits/{revision}{?page,pagelen,q,sort}',
      },
      listCommitStatuses: {
        method: 'GET',
        params: {
          node: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedCommitstatuses',
        url: '/repositories/{workspace}/{repo_slug}/commit/{node}/statuses',
      },
      listComponents: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedComponents',
        url: '/repositories/{workspace}/{repo_slug}/components',
      },
      listDefaultReviewers: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/default-reviewers',
      },
      listDeployKeys: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedDeployKeys',
        url: '/repositories/{workspace}/{repo_slug}/deploy-keys',
      },
      listDeployments: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedDeployments',
        url: '/repositories/{workspace}/{repo_slug}/deployments/',
      },
      listDeploymentVariables: {
        method: 'GET',
        params: {
          environment_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedDeploymentVariable',
        url:
          '/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables',
      },
      listDiffStats: {
        method: 'GET',
        params: {
          ignore_whitespace: { type: 'boolean' },
          merge: { type: 'boolean' },
          path: { type: 'string' },
          renames: { type: 'boolean' },
          repo_slug: { required: !0, type: 'string' },
          spec: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedDiffstats',
        url: '/repositories/{workspace}/{repo_slug}/diffstat/{spec}',
      },
      listDownloads: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/downloads',
      },
      listEnvironments: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedEnvironments',
        url: '/repositories/{workspace}/{repo_slug}/environments/',
      },
      listFileHistory: {
        method: 'GET',
        params: {
          node: { required: !0, type: 'string' },
          path: { required: !0, type: 'string' },
          renames: { type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedFiles',
        url: '/repositories/{workspace}/{repo_slug}/filehistory/{node}/{path}',
      },
      listForks: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          role: {
            enum: ['admin', 'contributor', 'member', 'owner'],
            type: 'string',
          },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedRepositories',
        url: '/repositories/{workspace}/{repo_slug}/forks',
      },
      listGlobal: {
        method: 'GET',
        params: {
          after: { type: 'string' },
          role: {
            enum: ['admin', 'contributor', 'member', 'owner'],
            type: 'string',
          },
        },
        returns: 'PaginatedRepositories',
        url: '/repositories',
      },
      listIssueAttachments: {
        method: 'GET',
        params: {
          issue_id: { required: !0, type: 'integer' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedIssueAttachments',
        url:
          '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments',
      },
      listIssueChanges: {
        method: 'GET',
        params: {
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedLogEntries',
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes',
      },
      listIssueComments: {
        method: 'GET',
        params: {
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedIssueComments',
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments',
      },
      listIssues: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedIssues',
        url: '/repositories/{workspace}/{repo_slug}/issues',
      },
      listMilestones: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedMilestones',
        url: '/repositories/{workspace}/{repo_slug}/milestones',
      },
      listPermissions: { alias: 'user.listPermissionsForRepos' },
      listPipelineKnownHosts: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedPipelineKnownHosts',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/',
      },
      listPipelines: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedPipelines',
        url: '/repositories/{workspace}/{repo_slug}/pipelines/',
      },
      listPipelineScheduleExecutions: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedPipelineScheduleExecutions',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions/',
      },
      listPipelineSchedules: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedPipelineSchedules',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/',
      },
      listPipelineSteps: {
        method: 'GET',
        params: {
          pipeline_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedPipelineSteps',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/',
      },
      listPipelineVariables: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedPipelineVariables',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/variables/',
      },
      listPullRequestActivities: {
        method: 'GET',
        params: {
          pull_request_id: { required: !0, type: 'integer' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity',
      },
      listPullRequestActivitiesForRepo: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/pullrequests/activity',
      },
      listPullRequestComments: {
        method: 'GET',
        params: {
          pull_request_id: { required: !0, type: 'integer' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedPullrequestComments',
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments',
      },
      listPullRequestCommits: {
        method: 'GET',
        params: {
          pull_request_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits',
      },
      listPullRequests: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          state: {
            enum: ['MERGED', 'SUPERSEDED', 'OPEN', 'DECLINED'],
            type: 'string',
          },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedPullrequests',
        url: '/repositories/{workspace}/{repo_slug}/pullrequests',
      },
      listPullrequestsForCommit: {
        headers: { accept: 'application/json' },
        method: 'GET',
        params: {
          commit: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedPullrequests',
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests',
      },
      listPullRequestStatuses: {
        method: 'GET',
        params: {
          pull_request_id: { required: !0, type: 'integer' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedCommitstatuses',
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses',
      },
      listRefs: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedRefs',
        url: '/repositories/{workspace}/{repo_slug}/refs',
      },
      listTags: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedTags',
        url: '/repositories/{workspace}/{repo_slug}/refs/tags',
      },
      listVersions: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedVersions',
        url: '/repositories/{workspace}/{repo_slug}/versions',
      },
      listWatchers: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/repositories/{workspace}/{repo_slug}/watchers',
      },
      listWebhooks: {
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedWebhookSubscriptions',
        url: '/repositories/{workspace}/{repo_slug}/hooks',
      },
      mergePullRequest: {
        method: 'POST',
        params: {
          _body: { schema: 'PullrequestMergeParameters', type: 'any' },
          pull_request_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Pullrequest',
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge',
      },
      readSrc: {
        method: 'GET',
        params: {
          format: { enum: ['meta', 'rendered'], type: 'string' },
          max_depth: { type: 'integer' },
          node: { required: !0, type: 'string' },
          path: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedTreeentries',
        url: '/repositories/{workspace}/{repo_slug}/src/{node}/{path}',
      },
      readSrcRoot: {
        method: 'GET',
        params: {
          format: { enum: ['meta'], type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedTreeentries',
        url: '/repositories/{workspace}/{repo_slug}/src',
      },
      stopPipeline: {
        method: 'POST',
        params: {
          pipeline_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline',
      },
      update: {
        headers: { accept: 'application/json' },
        method: 'PUT',
        params: {
          _body: { schema: 'Repository', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Repository',
        url: '/repositories/{workspace}/{repo_slug}',
      },
      updateBranchingModelSettings: {
        method: 'PUT',
        params: {
          _body: { schema: 'BranchingModelSettings', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'BranchingModelSettings',
        url: '/repositories/{workspace}/{repo_slug}/branching-model/settings',
      },
      updateBranchRestriction: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'Branchrestriction', type: 'any' },
          id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Branchrestriction',
        url: '/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}',
      },
      updateCommitBuildStatus: {
        method: 'PUT',
        params: {
          _body: { schema: 'Commitstatus', type: 'any' },
          key: { required: !0, type: 'string' },
          node: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Commitstatus',
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{node}/statuses/build/{key}',
      },
      updateCommitHostedPropertyValue: {
        method: 'PUT',
        params: {
          app_key: { required: !0, type: 'string' },
          commit: { required: !0, type: 'string' },
          property_name: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}',
      },
      updateDeployKey: {
        method: 'PUT',
        params: {
          key_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'DeployKey',
        url: '/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}',
      },
      updateDeploymentVariable: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'DeploymentVariable', type: 'any' },
          environment_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          variable_uuid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'DeploymentVariable',
        url:
          '/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}',
      },
      updateEnvironment: {
        method: 'POST',
        params: {
          _body: { required: !0, type: 'any' },
          environment_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes/',
      },
      updateIssue: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'Issue', type: 'any' },
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Issue',
        url: '/repositories/{workspace}/{repo_slug}/issues/{issue_id}',
      },
      updateIssueComment: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'IssueComment', type: 'any' },
          comment_id: { required: !0, type: 'string' },
          issue_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'IssueComment',
        url:
          '/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}',
      },
      updatePipelineBuildNumber: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'PipelineBuildNumber', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineBuildNumber',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/build_number',
      },
      updatePipelineConfig: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'PipelinesConfig', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelinesConfig',
        url: '/repositories/{workspace}/{repo_slug}/pipelines_config',
      },
      updatePipelineKnownHost: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'PipelineKnownHost', type: 'any' },
          known_host_uuid: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineKnownHost',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}',
      },
      updatePipelineSchedule: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'PipelineSchedule', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          schedule_uuid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineSchedule',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}',
      },
      updatePipelineSshKeyPair: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'PipelineSshKeyPair', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineSshKeyPair',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair',
      },
      updatePipelineVariable: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'PipelineVariable', type: 'any' },
          repo_slug: { required: !0, type: 'string' },
          variable_uuid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PipelineVariable',
        url:
          '/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}',
      },
      updatePullRequest: {
        method: 'PUT',
        params: {
          _body: { schema: 'Pullrequest', type: 'any' },
          pull_request_id: { required: !0, type: 'integer' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Pullrequest',
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}',
      },
      updatePullRequestComment: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'PullrequestComment', type: 'any' },
          comment_id: { required: !0, type: 'string' },
          pull_request_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PullrequestComment',
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}',
      },
      updatePullRequestHostedPropertyValue: {
        method: 'PUT',
        params: {
          app_key: { required: !0, type: 'string' },
          property_name: { required: !0, type: 'string' },
          pullrequest_id: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}',
      },
      updateRepositoryHostedPropertyValue: {
        method: 'PUT',
        params: {
          app_key: { required: !0, type: 'string' },
          property_name: { required: !0, type: 'string' },
          repo_slug: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url:
          '/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}',
      },
      updateWebhook: {
        method: 'PUT',
        params: {
          repo_slug: { required: !0, type: 'string' },
          uid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'WebhookSubscription',
        url: '/repositories/{workspace}/{repo_slug}/hooks/{uid}',
      },
    },
    search: {
      codeOfTeam: { alias: 'teams.searchCode' },
      codeOfUser: { alias: 'users.searchCode' },
      searchAccount: { alias: 'workspaces.searchAccount' },
    },
    snippet: { getRawFiles: { alias: 'snippets.getRawFiles' } },
    snippets: {
      checkWatch: {
        method: 'GET',
        params: {
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/snippets/{workspace}/{encoded_id}/watch',
      },
      create: {
        method: 'POST',
        params: { _body: { required: !0, schema: 'Snippet', type: 'any' } },
        returns: 'Snippet',
        url: '/snippets',
      },
      createComment: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'Snippet', type: 'any' },
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Snippet',
        url: '/snippets/{workspace}/{encoded_id}/comments',
      },
      createForUser: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'Snippet', type: 'any' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Snippet',
        url: '/snippets/{workspace}',
      },
      delete: {
        method: 'DELETE',
        params: {
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/snippets/{workspace}/{encoded_id}',
      },
      deleteAt: {
        method: 'DELETE',
        params: {
          encoded_id: { required: !0, type: 'string' },
          node_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/snippets/{workspace}/{encoded_id}/{node_id}',
      },
      deleteComment: {
        method: 'DELETE',
        params: {
          comment_id: { required: !0, type: 'string' },
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/snippets/{workspace}/{encoded_id}/comments/{comment_id}',
      },
      get: {
        method: 'GET',
        params: {
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Snippet',
        url: '/snippets/{workspace}/{encoded_id}',
      },
      getAt: {
        method: 'GET',
        params: {
          encoded_id: { required: !0, type: 'string' },
          node_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Snippet',
        url: '/snippets/{workspace}/{encoded_id}/{node_id}',
      },
      getComment: {
        method: 'GET',
        params: {
          comment_id: { required: !0, type: 'string' },
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'SnippetComment',
        url: '/snippets/{workspace}/{encoded_id}/comments/{comment_id}',
      },
      getCommit: {
        method: 'GET',
        params: {
          encoded_id: { required: !0, type: 'string' },
          revision: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'SnippetCommit',
        url: '/snippets/{workspace}/{encoded_id}/commits/{revision}',
      },
      getDiff: {
        method: 'GET',
        params: {
          encoded_id: { required: !0, type: 'string' },
          path: { type: 'string' },
          revision: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/snippets/{workspace}/{encoded_id}/{revision}/diff',
      },
      getFile: {
        method: 'GET',
        params: {
          encoded_id: { required: !0, type: 'string' },
          node_id: { required: !0, type: 'string' },
          path: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/snippets/{workspace}/{encoded_id}/{node_id}/files/{path}',
      },
      getPatch: {
        method: 'GET',
        params: {
          encoded_id: { required: !0, type: 'string' },
          revision: { required: !0, type: 'string' },
          spec: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/snippets/{workspace}/{encoded_id}/{revision}/patch',
      },
      getRawFiles: {
        method: 'GET',
        params: {
          encoded_id: { required: !0, type: 'string' },
          path: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/snippets/{workspace}/{encoded_id}/files/{path}',
      },
      list: {
        method: 'GET',
        params: {
          role: { enum: ['owner', 'contributor', 'member'], type: 'string' },
        },
        returns: 'PaginatedSnippets',
        url: '/snippets',
      },
      listComments: {
        method: 'GET',
        params: {
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedSnippetComments',
        url: '/snippets/{workspace}/{encoded_id}/comments',
      },
      listCommits: {
        method: 'GET',
        params: {
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedSnippetCommit',
        url: '/snippets/{workspace}/{encoded_id}/commits',
      },
      listForUser: {
        method: 'GET',
        params: {
          role: { enum: ['owner', 'contributor', 'member'], type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedSnippets',
        url: '/snippets/{workspace}',
      },
      listWatchers: {
        deprecated: !0,
        method: 'GET',
        params: {
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'PaginatedUsers',
        url: '/snippets/{workspace}/{encoded_id}/watchers',
      },
      startWatch: {
        method: 'PUT',
        params: {
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/snippets/{workspace}/{encoded_id}/watch',
      },
      stopWatch: {
        method: 'DELETE',
        params: {
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/snippets/{workspace}/{encoded_id}/watch',
      },
      update: {
        accepts: [
          'application/json',
          'multipart/related',
          'multipart/form-data',
        ],
        method: 'PUT',
        params: {
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Snippet',
        url: '/snippets/{workspace}/{encoded_id}',
      },
      updateAt: {
        accepts: [
          'application/json',
          'multipart/related',
          'multipart/form-data',
        ],
        method: 'PUT',
        params: {
          encoded_id: { required: !0, type: 'string' },
          node_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Snippet',
        url: '/snippets/{workspace}/{encoded_id}/{node_id}',
      },
      updateComment: {
        method: 'PUT',
        params: {
          comment_id: { required: !0, type: 'string' },
          encoded_id: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/snippets/{workspace}/{encoded_id}/comments/{comment_id}',
      },
    },
    source: {
      createFileCommit: { alias: 'repositories.createSrcFileCommit' },
      listHistory: { alias: 'repositories.listFileHistory' },
      read: { alias: 'repositories.readSrc' },
      readRoot: { alias: 'repositories.readSrcRoot' },
    },
    ssh: {
      createKey: { alias: 'users.createSshKey' },
      deleteKey: { alias: 'users.deleteSshKey' },
      getKey: { alias: 'users.getSshKey' },
      listKeys: { alias: 'users.listSshKeys' },
      updateKey: { alias: 'users.updateSshKey' },
    },
    teams: {
      createPipelineVariable: {
        method: 'POST',
        params: {
          _body: { schema: 'PipelineVariable', type: 'any' },
          username: { required: !0, type: 'string' },
        },
        returns: 'PipelineVariable',
        url: '/teams/{username}/pipelines_config/variables/',
      },
      createProject: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'Project', type: 'any' },
          username: { required: !0, type: 'string' },
        },
        returns: 'Project',
        url: '/teams/{username}/projects/',
      },
      createWebhook: {
        method: 'POST',
        params: { username: { required: !0, type: 'string' } },
        returns: 'WebhookSubscription',
        url: '/teams/{username}/hooks',
      },
      deletePipelineVariable: {
        method: 'DELETE',
        params: {
          username: { required: !0, type: 'string' },
          variable_uuid: { required: !0, type: 'string' },
        },
        url: '/teams/{username}/pipelines_config/variables/{variable_uuid}',
      },
      deleteProject: {
        method: 'DELETE',
        params: {
          project_key: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        url: '/teams/{username}/projects/{project_key}',
      },
      deleteWebhook: {
        method: 'DELETE',
        params: {
          uid: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        url: '/teams/{username}/hooks/{uid}',
      },
      get: {
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'Team',
        url: '/teams/{username}',
      },
      getAllMembers: {
        deprecated: !0,
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'User',
        url: '/teams/{username}/members',
      },
      getMembers: { alias: 'users.getTeamMembers' },
      getPipelineVariable: {
        method: 'GET',
        params: {
          username: { required: !0, type: 'string' },
          variable_uuid: { required: !0, type: 'string' },
        },
        returns: 'PipelineVariable',
        url: '/teams/{username}/pipelines_config/variables/{variable_uuid}',
      },
      getProject: {
        method: 'GET',
        params: {
          project_key: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        returns: 'Project',
        url: '/teams/{username}/projects/{project_key}',
      },
      getWebhook: {
        method: 'GET',
        params: {
          uid: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        returns: 'WebhookSubscription',
        url: '/teams/{username}/hooks/{uid}',
      },
      list: {
        deprecated: !0,
        method: 'GET',
        params: {
          role: { enum: ['admin', 'contributor', 'member'], type: 'string' },
        },
        returns: 'PaginatedTeams',
        url: '/teams',
      },
      listFollowers: {
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'PaginatedUsers',
        url: '/teams/{username}/followers',
      },
      listFollowing: {
        deprecated: !0,
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'PaginatedUsers',
        url: '/teams/{username}/following',
      },
      listPermissions: {
        deprecated: !0,
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'PaginatedTeamPermissions',
        url: '/teams/{username}/permissions',
      },
      listPermissionsForRepo: {
        deprecated: !0,
        method: 'GET',
        params: {
          repo_slug: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        returns: 'PaginatedRepositoryPermissions',
        url: '/teams/{username}/permissions/repositories/{repo_slug}',
      },
      listPermissionsForRepos: {
        deprecated: !0,
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'PaginatedRepositoryPermissions',
        url: '/teams/{username}/permissions/repositories',
      },
      listPipelineVariables: {
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'PaginatedPipelineVariables',
        url: '/teams/{username}/pipelines_config/variables/',
      },
      listProjects: {
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'PaginatedProjects',
        url: '/teams/{username}/projects/',
      },
      listRepositories: {
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        url: '/teams/{username}/repositories',
      },
      listRepositoriesForUser: { alias: 'users.listRepositories' },
      listWebhooks: {
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'PaginatedWebhookSubscriptions',
        url: '/teams/{username}/hooks',
      },
      searchCode: {
        headers: { accept: 'application/json' },
        method: 'GET',
        params: {
          search_query: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        returns: 'SearchResultPage',
        url: '/teams/{username}/search/code',
      },
      updatePipelineVariable: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'PipelineVariable', type: 'any' },
          username: { required: !0, type: 'string' },
          variable_uuid: { required: !0, type: 'string' },
        },
        returns: 'PipelineVariable',
        url: '/teams/{username}/pipelines_config/variables/{variable_uuid}',
      },
      updateProject: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'Project', type: 'any' },
          project_key: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        returns: 'Project',
        url: '/teams/{username}/projects/{project_key}',
      },
      updateWebhook: {
        method: 'PUT',
        params: {
          uid: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        returns: 'WebhookSubscription',
        url: '/teams/{username}/hooks/{uid}',
      },
    },
    user: {
      get: { method: 'GET', returns: 'User', url: '/user' },
      getEmail: {
        method: 'GET',
        params: { email: { required: !0, type: 'string' } },
        url: '/user/emails/{email}',
      },
      listEmails: { method: 'GET', url: '/user/emails' },
      listPermissionsForRepos: {
        method: 'GET',
        returns: 'PaginatedRepositoryPermissions',
        url: '/user/permissions/repositories',
      },
      listPermissionsForTeams: {
        method: 'GET',
        returns: 'PaginatedTeamPermissions',
        url: '/user/permissions/teams',
      },
    },
    users: {
      createPipelineVariable: {
        method: 'POST',
        params: {
          _body: { schema: 'PipelineVariable', type: 'any' },
          selected_user: { required: !0, type: 'string' },
        },
        returns: 'PipelineVariable',
        url: '/users/{selected_user}/pipelines_config/variables/',
      },
      createSshKey: {
        method: 'POST',
        params: {
          _body: { schema: 'SshAccountKey', type: 'any' },
          username: { required: !0, type: 'string' },
        },
        returns: 'SshAccountKey',
        url: '/users/{username}/ssh-keys',
      },
      createWebhook: {
        method: 'POST',
        params: { username: { required: !0, type: 'string' } },
        returns: 'WebhookSubscription',
        url: '/users/{username}/hooks',
      },
      deletePipelineVariable: {
        method: 'DELETE',
        params: {
          selected_user: { required: !0, type: 'string' },
          variable_uuid: { required: !0, type: 'string' },
        },
        url:
          '/users/{selected_user}/pipelines_config/variables/{variable_uuid}',
      },
      deleteSshKey: {
        method: 'DELETE',
        params: {
          key_id: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        url: '/users/{username}/ssh-keys/{key_id}',
      },
      deleteUserHostedPropertyValue: {
        method: 'DELETE',
        params: {
          app_key: { required: !0, type: 'string' },
          property_name: { required: !0, type: 'string' },
          selected_user: { required: !0, type: 'string' },
        },
        url: '/users/{selected_user}/properties/{app_key}/{property_name}',
      },
      deleteWebhook: {
        method: 'DELETE',
        params: {
          uid: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        url: '/users/{username}/hooks/{uid}',
      },
      get: {
        deprecated: !0,
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'User',
        url: '/users/{username}',
      },
      getAuthedUser: { alias: 'user.get' },
      getEmailForAuthedUser: { alias: 'user.getEmail' },
      getPipelineVariable: {
        method: 'GET',
        params: {
          selected_user: { required: !0, type: 'string' },
          variable_uuid: { required: !0, type: 'string' },
        },
        returns: 'PipelineVariable',
        url:
          '/users/{selected_user}/pipelines_config/variables/{variable_uuid}',
      },
      getSshKey: {
        method: 'GET',
        params: {
          key_id: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        returns: 'SshAccountKey',
        url: '/users/{username}/ssh-keys/{key_id}',
      },
      getTeamMembers: {
        deprecated: !0,
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'User',
        url: '/users/{username}/members',
      },
      getWebhook: {
        method: 'GET',
        params: {
          uid: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        returns: 'WebhookSubscription',
        url: '/users/{username}/hooks/{uid}',
      },
      listEmailsForAuthedUser: { alias: 'user.listEmails' },
      listPipelineVariables: {
        method: 'GET',
        params: { selected_user: { required: !0, type: 'string' } },
        returns: 'PaginatedPipelineVariables',
        url: '/users/{selected_user}/pipelines_config/variables/',
      },
      listRepositories: {
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        url: '/users/{username}/repositories',
      },
      listRepositoriesForTeam: { alias: 'teams.listRepositories' },
      listSshKeys: {
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'PaginatedSshUserKeys',
        url: '/users/{username}/ssh-keys',
      },
      listWebhooks: {
        deprecated: !0,
        method: 'GET',
        params: { username: { required: !0, type: 'string' } },
        returns: 'PaginatedWebhookSubscriptions',
        url: '/users/{username}/hooks',
      },
      retrieveUserHostedPropertyValue: {
        method: 'GET',
        params: {
          app_key: { required: !0, type: 'string' },
          property_name: { required: !0, type: 'string' },
          selected_user: { required: !0, type: 'string' },
        },
        url: '/users/{selected_user}/properties/{app_key}/{property_name}',
      },
      searchCode: {
        headers: { accept: 'application/json' },
        method: 'GET',
        params: {
          search_query: { required: !0, type: 'string' },
          selected_user: { required: !0, type: 'string' },
        },
        returns: 'SearchResultPage',
        url: '/users/{selected_user}/search/code',
      },
      updatePipelineVariable: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'PipelineVariable', type: 'any' },
          selected_user: { required: !0, type: 'string' },
          variable_uuid: { required: !0, type: 'string' },
        },
        returns: 'PipelineVariable',
        url:
          '/users/{selected_user}/pipelines_config/variables/{variable_uuid}',
      },
      updateSshKey: {
        method: 'PUT',
        params: {
          _body: { schema: 'SshAccountKey', type: 'any' },
          key_id: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        returns: 'SshAccountKey',
        url: '/users/{username}/ssh-keys/{key_id}',
      },
      updateUserHostedPropertyValue: {
        method: 'PUT',
        params: {
          app_key: { required: !0, type: 'string' },
          property_name: { required: !0, type: 'string' },
          selected_user: { required: !0, type: 'string' },
        },
        url: '/users/{selected_user}/properties/{app_key}/{property_name}',
      },
      updateWebhook: {
        method: 'PUT',
        params: {
          uid: { required: !0, type: 'string' },
          username: { required: !0, type: 'string' },
        },
        returns: 'WebhookSubscription',
        url: '/users/{username}/hooks/{uid}',
      },
    },
    webhooks: {
      create: { alias: 'repositories.createWebhook' },
      createForTeam: { alias: 'teams.createWebhook' },
      createForUser: { alias: 'users.createWebhook' },
      createWebhookForWorkspace: {
        alias: 'workspaces.createWebhookForWorkspace',
      },
      delete: { alias: 'repositories.deleteWebhook' },
      deleteForTeam: { alias: 'teams.deleteWebhook' },
      deleteForUser: { alias: 'users.deleteWebhook' },
      deleteWebhookForWorkspace: {
        alias: 'workspaces.deleteWebhookForWorkspace',
      },
      get: { alias: 'repositories.getWebhook' },
      getAllSubjectTypes: { alias: 'hook_events.getAllSubjectTypes' },
      getForTeam: { alias: 'teams.getWebhook' },
      getForUser: { alias: 'users.getWebhook' },
      getWebhookForWorkspace: { alias: 'workspaces.getWebhookForWorkspace' },
      getWebhooksForWorkspace: { alias: 'workspaces.getWebhooksForWorkspace' },
      list: { alias: 'hook_events.list' },
      listForRepo: { alias: 'repositories.listWebhooks' },
      listForTeam: { alias: 'teams.listWebhooks' },
      listForUser: { alias: 'users.listWebhooks' },
      update: { alias: 'repositories.updateWebhook' },
      updateForTeam: { alias: 'teams.updateWebhook' },
      updateForUser: { alias: 'users.updateWebhook' },
      updateWebhookForWorkspace: {
        alias: 'workspaces.updateWebhookForWorkspace',
      },
    },
    workspaces: {
      createOrUpdateProject: {
        method: 'PUT',
        params: {
          _body: { required: !0, schema: 'Project', type: 'any' },
          project_key: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Project',
        url: '/workspaces/{workspace}/projects/{project_key}',
      },
      createProject: {
        method: 'POST',
        params: {
          _body: { required: !0, schema: 'Project', type: 'any' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Project',
        url: '/workspaces/{workspace}/projects',
      },
      createWebhookForWorkspace: {
        method: 'POST',
        params: { workspace: { required: !0, type: 'string' } },
        returns: 'WebhookSubscription',
        url: '/workspaces/{workspace}/hooks',
      },
      deleteProject: {
        method: 'DELETE',
        params: {
          project_key: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/workspaces/{workspace}/projects/{project_key}',
      },
      deleteWebhookForWorkspace: {
        method: 'DELETE',
        params: {
          uid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        url: '/workspaces/{workspace}/hooks/{uid}',
      },
      getMemberForWorkspace: {
        method: 'GET',
        params: {
          member: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'WorkspaceMembership',
        url: '/workspaces/{workspace}/members/{member}',
      },
      getMembersForWorkspace: {
        method: 'GET',
        params: { workspace: { required: !0, type: 'string' } },
        returns: 'PaginatedWorkspaceMemberships',
        url: '/workspaces/{workspace}/members',
      },
      getProject: {
        method: 'GET',
        params: {
          project_key: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'Project',
        url: '/workspaces/{workspace}/projects/{project_key}',
      },
      getProjects: {
        method: 'GET',
        params: { workspace: { required: !0, type: 'string' } },
        returns: 'PaginatedProjects',
        url: '/workspaces/{workspace}/projects',
      },
      getWebhookForWorkspace: {
        method: 'GET',
        params: {
          uid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'WebhookSubscription',
        url: '/workspaces/{workspace}/hooks/{uid}',
      },
      getWebhooksForWorkspace: {
        method: 'GET',
        params: { workspace: { required: !0, type: 'string' } },
        returns: 'PaginatedWebhookSubscriptions',
        url: '/workspaces/{workspace}/hooks',
      },
      getWorkspace: {
        method: 'GET',
        params: { workspace: { required: !0, type: 'string' } },
        returns: 'Workspace',
        url: '/workspaces/{workspace}',
      },
      getWorkspaces: {
        method: 'GET',
        returns: 'PaginatedWorkspaces',
        url: '/workspaces',
      },
      searchAccount: {
        headers: { accept: 'application/json' },
        method: 'GET',
        params: {
          search_query: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'SearchResultPage',
        url: '/workspaces/{workspace}/search/code',
      },
      updateWebhookForWorkspace: {
        method: 'PUT',
        params: {
          uid: { required: !0, type: 'string' },
          workspace: { required: !0, type: 'string' },
        },
        returns: 'WebhookSubscription',
        url: '/workspaces/{workspace}/hooks/{uid}',
      },
    },
  }
  function we(e, r) {
    for (
      var t = function () {
          var t = i[s]
          e[t] || (e[t] = {})
          for (
            var o = function () {
                var s = p[a],
                  i = r[t][s]
                if (i.alias) {
                  var o = T(i.alias.split('.'), 2),
                    n = o[0],
                    u = o[1]
                  i = r[n][u]
                }
                var l = ['accepts', 'method', 'url', 'headers'].reduce(
                  function (e, r) {
                    return (r in i) && (e[r] = i[r]), e
                  },
                  {}
                )
                l.request = { validate: i.params }
                var d = e.request.defaults(l)
                if (i.deprecated)
                  return (
                    (e[t][s] = function () {
                      return (
                        console.log(
                          '[43m[30m %s [0m[33m %s [0m',
                          'DEPRECATION WARNING:',
                          ''.concat(l.method, ' ').concat(l.url)
                        ),
                        (e[t][s] = d),
                        d.apply(void 0, arguments)
                      )
                    }),
                    'continue'
                  )
                e[t][s] = d
              },
              a = 0,
              p = Object.keys(r[t]);
            a < p.length;
            a++
          )
            o()
        },
        s = 0,
        i = Object.keys(r);
      s < i.length;
      s++
    )
      t()
  }
  function fe(e, r) {
    var t = r.request.validate
    if (t)
      for (var s = 0, i = Object.keys(t); s < i.length; s++) {
        var o = i[s],
          a = t[o],
          p = a.type,
          n = r[o],
          u = void 0 !== n
        if (a.required || u) {
          if (a.required && !u)
            throw new X("parameter required: '".concat(o, "'"), 400)
          if ('integer' === p) {
            var l = n
            if (((n = parseInt(n, 10)), isNaN(n)))
              throw new X(
                "invalid value for parameter '"
                  .concat(o, "': ")
                  .concat(JSON.stringify(l), ' is NaN'),
                400
              )
          }
          if ('boolean' === p)
            if (!('boolean' == typeof n))
              throw new X(
                "invalid value for parameter '"
                  .concat(o, "': ")
                  .concat(JSON.stringify(n)),
                400
              )
          if (a.enum && !a.enum.includes(n))
            throw new X(
              "invalid value for parameter '"
                .concat(o, "': ")
                .concat(JSON.stringify(n)),
              400
            )
        }
      }
  }
  var be = [
      function (e, r) {
        var t = r.notice
        ;(void 0 === t || t) &&
          console.log(
            '[46m[30m %s [0m[36m %s [0m',
            'BITBUCKET CLOUD API LATEST UPDATES:',
            'https://developer.atlassian.com/cloud/bitbucket'
          )
      },
      function (e) {
        ;(e.hasNextPage = function (e) {
          var r = e.next
          return Boolean(r)
        }),
          (e.getNextPage = _e.bind(null, e, 'next')),
          (e.hasPreviousPage = function (e) {
            var r = e.previous
            return Boolean(r)
          }),
          (e.getPreviousPage = _e.bind(null, e, 'previous'))
      },
      function (e) {
        e.registerEndpoints = we.bind(null, e)
      },
      function (e) {
        e.registerEndpoints(ke)
      },
      function (e) {
        e.requestHook.before(fe.bind(null, e))
      },
      function (e, r) {
        if ((e.registerEndpoints({ oauth: qe.getToken }), r.auth))
          switch (r.authStrategy) {
            case 'OAuth':
              he(e, r)
              break
            default:
              ue(e, r)
          }
      },
    ],
    Pe = ae.plugins(be)
  ;(e.Bitbucket = Pe), Object.defineProperty(e, '__esModule', { value: !0 })
})
//# sourceMappingURL=index.umd.js.map
