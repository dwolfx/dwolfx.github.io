(self.AMP = self.AMP || []).push({
  n: "amp-fx-flying-carpet",
  v: "1909051800160",
  f: function(AMP, _) {
    var g,
      h =
        "function" == typeof Object.create
          ? Object.create
          : function(a) {
              function b() {}
              b.prototype = a;
              return new b();
            },
      k;
    if ("function" == typeof Object.setPrototypeOf) k = Object.setPrototypeOf;
    else {
      var l;
      a: {
        var m = { a: !0 },
          n = {};
        try {
          n.__proto__ = m;
          l = n.a;
          break a;
        } catch (a) {}
        l = !1;
      }
      k = l
        ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
              throw new TypeError(a + " is not extensible");
            return a;
          }
        : null;
    }
    var p = k;
    self.log = self.log || { user: null, dev: null, userForEmbed: null };
    var q = self.log;
    function r(a, b, c, d, f) {
      if (!q.user) throw Error("failed to call initLogConstructor");
      q.user.assert(
        a,
        b,
        c,
        d,
        f,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0
      );
    }
    var t,
      u = "Webkit webkit Moz moz ms O o".split(" ");
    (function(a) {
      return a || {};
    })({ c: !0, v: !0, a: !0, ad: !0, action: !0 });
    function v(a) {
      var b = w(a);
      b = w(b);
      b = b.isSingleDoc() ? b.win : b;
      return x(b, "owners");
    }
    function w(a) {
      if (a.nodeType) {
        var b = (a.ownerDocument || a).defaultView;
        b = b.__AMP_TOP || (b.__AMP_TOP = b);
        a = x(b, "ampdoc").getAmpDoc(a);
      }
      return a;
    }
    function x(a, b) {
      var c = a.services;
      c || (c = a.services = {});
      var d = c;
      a = d[b];
      a.obj ||
        ((a.obj = new a.ctor(a.context)),
        (a.ctor = null),
        (a.context = null),
        a.resolve && a.resolve(a.obj));
      return a.obj;
    } /*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    function y(a) {
      a = AMP.BaseElement.call(this, a) || this;
      a.h = [];
      a.j = 0;
      a.l = null;
      a.m = !1;
      return a;
    }
    var z = AMP.BaseElement;
    y.prototype = h(z.prototype);
    y.prototype.constructor = y;
    if (p) p(y, z);
    else
      for (var B in z)
        if ("prototype" != B)
          if (Object.defineProperties) {
            var C = Object.getOwnPropertyDescriptor(z, B);
            C && Object.defineProperty(y, B, C);
          } else y[B] = z[B];
    y.w = z.prototype;
    g = y.prototype;
    g.isLayoutSupported = function(a) {
      return "fixed-height" == a;
    };
    g.buildCallback = function() {
      var a = this,
        b = this.element.ownerDocument,
        c = b.createElement("div");
      this.h = this.getRealChildren();
      this.l = c;
      var d = this.getRealChildNodes();
      this.j = D(d).length;
      var f = v(this.element);
      this.h.forEach(function(b) {
        return f.setOwner(b, a.element);
      });
      var e = b.createElement("div");
      e.setAttribute("class", "i-amphtml-fx-flying-carpet-clip");
      c.setAttribute("class", "i-amphtml-fx-flying-carpet-container");
      d.forEach(function(a) {
        return c.appendChild(a);
      });
      e.appendChild(c);
      this.element.appendChild(e);
      this.getViewport().addToFixedLayer(c, !1);
    };
    g.onMeasureChanged = function() {
      var a = this,
        b = this.getLayoutWidth();
      this.mutateElement(function() {
        var c = a.l;
        var d = c.style;
        t || (t = Object.create(null));
        var f = t.width;
        if (!f) {
          f = "width";
          if (void 0 === d.width) {
            var e;
            b: {
              for (e = 0; e < u.length; e++) {
                var A = u[e] + "Width";
                if (void 0 !== d[A]) {
                  e = A;
                  break b;
                }
              }
              e = "";
            }
            void 0 !== d[e] && (f = e);
          }
          t.width = f;
        }
        d = f;
        d && (c.style[d] = b + "px");
      });
      this.m && (v(this.element).scheduleLayout(this.element, this.h), E(this));
    };
    g.viewportCallback = function(a) {
      v(this.element).updateInViewport(this.element, this.h, a);
    };
    g.layoutCallback = function() {
      try {
        var a = this.element.getLayoutBox(),
          b = this.getViewport(),
          c = b.getHeight(),
          d = b.getScrollHeight();
        b = 0.75 * c;
        c = d - 0.95 * c;
        r(
          a.top >= b,
          "<amp-fx-flying-carpet> elements must be positioned after the 75% of first viewport: %s Current position: %s. Min: %s",
          this.element,
          a.top,
          b
        );
        r(
          a.top <= c,
          "<amp-fx-flying-carpet> elements must be positioned before the last viewport: %s Current position: %s. Max: %s",
          this.element,
          a.top,
          c
        );
      } catch (f) {
        throw (this.collapse(), f);
      }
      v(this.element).scheduleLayout(this.element, this.h);
      E(this);
      this.m = !0;
      return Promise.resolve();
    };
    function E(a) {
      new MutationObserver(function(b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c].addedNodes;
          if (d)
            for (var f = 0; f < d.length; f++) {
              var e = d[f];
              e.signals &&
                e
                  .signals()
                  .whenSignal("built")
                  .then(a.o.bind(a, e));
            }
        }
      }).observe(a.element, { childList: !0, subtree: !0 });
    }
    g.o = function(a) {
      a.getOwner() === this.element &&
        v(this.element).scheduleLayout(this.element, a);
    };
    g.collapsedCallback = function(a) {
      a = this.h.indexOf(a);
      if (-1 < a && (this.h.splice(a, 1), this.j--, 0 == this.j))
        return this.attemptCollapse().catch(function() {});
    };
    g.getChildren = function() {
      return this.h;
    };
    function D(a) {
      return a.filter(function(a) {
        return 1 === a.nodeType
          ? !0
          : 3 === a.nodeType
          ? /\S/.test(a.textContent)
          : !1;
      });
    }
    (function(a) {
      a.registerElement(
        "amp-fx-flying-carpet",
        y,
        "amp-fx-flying-carpet{position:relative!important;box-sizing:border-box!important}amp-fx-flying-carpet>.i-amphtml-fx-flying-carpet-clip{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;border:0!important;margin:0!important;padding:0!important;clip:rect(0,auto,auto,0)!important;-webkit-clip-path:polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important;clip-path:polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important}amp-fx-flying-carpet>.i-amphtml-fx-flying-carpet-clip>.i-amphtml-fx-flying-carpet-container{position:fixed!important;top:0!important;width:100%;height:100%;-webkit-transform:translateZ(0)!important;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.i-amphtml-fx-flying-carpet-container>.i-amphtml-layout-fixed-height,.i-amphtml-fx-flying-carpet-container>.i-amphtml-layout-responsive{-ms-flex-item-align:stretch;align-self:stretch}\n/*# sourceURL=/extensions/amp-fx-flying-carpet/0.1/amp-fx-flying-carpet.css*/"
      );
    })(self.AMP);
  }
});

//# sourceMappingURL=amp-fx-flying-carpet-0.1.js.map
