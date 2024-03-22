var lzld = "1209_1713";

function t_lazyload__init() {
    t_lazyload__detectwebp();
    for (var t = document.querySelector("#allrecords"), e = (t && "yes" === t.getAttribute("data-tilda-imgoptimoff") ? window.lazy_imgoptimoff = "yes" : window.lazy_imgoptimoff = "", document.querySelectorAll(".t156 .t-img")), o = 0; o < e.length; o++) e[o].setAttribute("data-lazy-rule", "skip");
    t = document.querySelectorAll(".t492,.t552,.t251,.t603,.t660,.t661,.t662,.t680,.t827,.t909,.t218,.t740,.t132,.t694,.t762,.t786,.t546");
    Array.prototype.forEach.call(t, function(t) {
        t = t.querySelectorAll(".t-bgimg");
        Array.prototype.forEach.call(t, function(t) {
            t.setAttribute("data-lazy-rule", "comm:resize,round:100")
        })
    }), setTimeout(function() {
        lazyload_cover = new LazyLoad({
            elements_selector: ".t-cover__carrier",
            show_while_loading: !1,
            data_src: "content-cover-bg",
            placeholder: "",
            threshold: 700
        })
    }, 100), setTimeout(function() {
        var t;
        lazyload_img = new LazyLoad({
            elements_selector: ".t-img",
            threshold: 800
        }), lazyload_bgimg = new LazyLoad({
            elements_selector: ".t-bgimg",
            show_while_loading: !1,
            placeholder: "",
            threshold: 800
        }), lazyload_iframe = new LazyLoad({
            elements_selector: ".t-iframe"
        }), window.jQuery && jQuery(document).bind("slide.bs.carousel", function() {
            setTimeout(function() {
                t_lazyload_update()
            }, 500)
        }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && document.body && "object" == typeof document.body && document.body.classList && (document.querySelector(".t-mbfix") || ((t = document.createElement("div")).classList.add("t-mbfix"), document.body.appendChild(t), setTimeout(function() {
            t.classList.add("t-mbfix_hide")
        }, 50), setTimeout(function() {
            t && t.parentNode && t.parentNode.removeChild(t)
        }, 1e3)))
    }, 500), window.addEventListener("resize", function() {
        clearTimeout(window.t_lazyload_resize_timerid), window.t_lazyload_resize_timerid = setTimeout(t_lazyload__onWindowResize, 1e3)
    }), setTimeout(function() {
        "object" == typeof performance && "object" == typeof performance.timing && (window.t_lazyload_domloaded = +window.performance.timing.domContentLoadedEventEnd - +window.performance.timing.navigationStart)
    }, 0)
}

function t_lazyload_update() {
    "undefined" != typeof lazyload_cover && lazyload_cover.update(), "undefined" != typeof lazyload_img && lazyload_img.update(), "undefined" != typeof lazyload_bgimg && lazyload_bgimg.update(), "undefined" != typeof lazyload_iframe && lazyload_iframe.update()
}

function t_lazyload__onWindowResize() {
    var t;
    t_lazyload_update(), "yes" !== window.lazy_imgoptimoff && (t = document.querySelectorAll(".t-cover__carrier, .t-bgimg, .t-img"), Array.prototype.forEach.call(t, function(t) {
        window.t_lazyload_updateResize_elem(t)
    }))
}

function t_lazyload__detectwebp() {
    var t = new Image;
    t.onload = t.onerror = function() {
        2 == t.height && (window.lazy_webp = "y")
    }, t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
}

function t_lazyLoad__appendImgStatToArr(t, e) {
    var o;
    void 0 !== navigator.sendBeacon && (o = (new Date).getTime(), (t = t.getAttribute("src")) && (o = {
        time: o - e
    }, 0 === t.indexOf("https://thumb.tildacdn") && (o.th = "y"), 0 === t.indexOf("https://static.tildacdn") && (o.st = "y"), (o.th || o.st) && window.t_loadImgStats.push(o)))
}

function t_lazyload__ping(e) {
    var o = "https://" + e + ".tildacdn.com";
    if ("static" == e) {
        var t = document.currentScript;
        if ("object" == typeof t && "string" == typeof t.src && 0 === t.src.indexOf(o)) return;
        if (null === document.head.querySelector('script[src^="' + o + '"]')) return
    }
    t = new Image;
    t.src = o + "/pixel.png", t.onload = function() {
        window["lazy_ok_" + e] = "y"
    }, setTimeout(function() {
        var t;
        "y" !== window["lazy_ok_" + e] && (window["lazy_err_" + e] = "y", console.log(e + " ping error"), t = document.querySelectorAll(".loading"), Array.prototype.forEach.call(t, function(t) {
            var e = "",
                e = t.lazy_loading_src;
            "string" == typeof str && 0 === e.indexOf(o) && (t.classList.remove("loading"), t.wasProcessed = !1)
        }), t_lazyload_update())
    }, 1e4)
}! function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.LazyLoad = e()
}(this, function() {
    var e, a, l, o, h, y, i = !1;

    function r(t, e, o, i) {
        var n;
        a ? t.addEventListener(e, o, i) : l && t.attachEvent("on" + e, (n = t, function() {
            o.call(n, window.event)
        }))
    }

    function d(t, e, o) {
        a ? t.removeEventListener(e, o) : l && t.detachEvent("on" + e, o)
    }

    function c() {
        return (new Date).getTime()
    }

    function n(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function s(t, e) {
        o ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
    }

    function w(t, e) {
        o ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function b(t, e) {
        return o ? t.classList.contains(e) : new RegExp(" " + e + " ").test(" " + t.className + " ")
    }

    function v(t, e) {
        for (var o = t.parentNode; o && o !== document;) {
            if (!0 === b(o, e)) return o;
            o = o.parentNode
        }
        return null
    }

    function A(t) {
        return null != t
    }

    function u(t) {
        t = t.getBoundingClientRect();
        return {
            top: t.top + document.body.scrollTop,
            left: t.left + document.body.scrollLeft
        }
    }

    function x(t, e, o) {
        l = t;
        var i, n, a, l, r = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && l && window.tn && l.closest(".t396__artboard_scale") ? (l = (l = (l = l.closest(".t396__artboard")) && l.getAttribute("data-artboard-recid")) ? "ab" + l : "", window.tn[l] ? window.tn[l].scaleFactor || window.tn_scale_factor || 1 : window.tn_scale_factor || 1) : 1;

        function d() {
            return window.innerWidth || i.documentElement.clientWidth || document.body.clientWidth
        }

        function c(t) {
            return (t.getBoundingClientRect().top + n) * r - i.documentElement.clientTop
        }

        function s(t) {
            return (t.getBoundingClientRect().left + a) * r - i.documentElement.clientLeft
        }
        return !0 !== window.flag_performance_pass3000 && "object" == typeof performance && performance.now() < 3e3 ? o = 300 : window.flag_performance_pass3000 = !0, i = t.ownerDocument, n = window.pageYOffset || i.body.scrollTop, a = window.pageXOffset || i.body.scrollLeft, "fixed" === t.getAttribute("data-content-cover-parallax") && t.closest && t.closest(".t-cover__container") && (t = t.closest(".t-cover__container")), !((e === window ? (window.innerHeight || i.documentElement.clientHeight || document.body.clientHeight) + n : c(e) + e.offsetHeight) <= c(t) - o || (e === window ? n : c(e)) >= c(t) + 1200 + t.offsetHeight || (e === window ? d() + window.pageXOffset : s(e) + d()) <= s(t) - o || (e === window ? a : s(e)) >= s(t) + o + t.offsetWidth)
    }

    function _(t, e, o, i) {
        i = e.getAttribute("data-" + i);
        if (i) {
            var n, a, l, r = e.clientWidth,
                d = e.clientHeight,
                c = (!b(e, "t-slds__bgimg") && !b(e, "t-slds__img") || b(e, "t827__image") || (!1 === A(c = (c = v(e, "t-slds__wrapper")) || v(e, "t-slds__container")) && (c = v(e, "t-slds__thumbsbullet")), A(c) && (r = c.clientWidth, d = c.clientHeight)), b(e, "tn-atom") && b(e, "t-bgimg") && A(c = v(e, "tn-atom__scale-wrapper")) && (r = (n = z("round", (c = c.getBoundingClientRect()).width, c.height, 10))[0], d = n[1]), ""),
                s = "",
                u = "",
                x = "",
                _ = 1,
                p = !0,
                m = !1;
            if ("yes" == window.lazy_imgoptimoff && (p = !1), "y" !== window.lazy_err_thumb && "y" !== window.lazy_err_static || (p = !1), "IMG" === e.tagName ? u = "resize" : "undefined" != typeof getComputedStyle ? ((l = getComputedStyle(e).backgroundPosition) && ("50%" == (c = (n = l.split(" "))[0]) ? c = "center" : "0%" == c ? c = "left" : "100%" == c && (c = "right"), "50%" == (s = n[1]) ? s = "center" : "0%" == s ? s = "top" : "100%" == s && (s = "bottom")), u = "contain" == getComputedStyle(e)["background-size"] ? "contain" : "cover", "fixed" == getComputedStyle(e)["background-attachment"] && (m = !0)) : m = !0, x = e.getAttribute("data-lazy-rule"))
                for (var f = x.split(","), g = 0; g < f.length; g++) - 1 < f[g].indexOf("round:") && (_ = +f[g].split(":")[1]), -1 < f[g].indexOf("comm:") && "resize" != (u = f[g].split(":")[1]) && "cover" != u && "contain" != u && (p = !1), -1 < f[g].indexOf("skip") && (m = !0), -1 < f[g].indexOf("optimoff") && (p = !1);
            1 < _ && (r = (n = z(u, r, d, _))[0], d = n[1]), "cover" == u && 0 < r && 0 < d && r <= 1e3 && (r === 5 * Math.ceil(r / 5) && d === 5 * Math.ceil(d / 5) || -1 < h.indexOf(r + "x" + d) || -1 < y.indexOf(r + "x" + d) || b(e, "tn-atom") || b(e, "tn-atom__img") || (r = (n = z(u = b(e, "t-cover__carrier") ? u : "resize", r, d, 100))[0], d = n[1])), "resize" == u && r < 30 && (m = !0), !0 === p && (i = !0 === m || 1e3 < r || 1e3 < d || 0 == r || "IMG" != e.tagName && 0 == d ? O(i) : function(t, e, o, i, n, a, l) {
                if ("undefined" == o || null == o) return o;
                if (0 < o.indexOf(".svg") || 0 < o.indexOf(".gif") || 0 < o.indexOf(".ico") || -1 === o.indexOf("static.tildacdn.") || 0 < o.indexOf("-/empty/") || 0 < o.indexOf("-/resizeb/")) return o;
                if (-1 < o.indexOf("/-/")) return o;
                if (0 == i && 0 == n) return o;
                if ("y" == window.lazy_err_thumb) return o;
                if (-1 < o.indexOf("lib")) return o;
                if ("IMG" != t && "DIV" != t && "TD" != t && "A" != t) return o;
                var r = 1;
                1 === window.devicePixelRatio && Math.max(i, n) <= 400 && (r = 1.2);
                1 < window.devicePixelRatio && (r = 2);
                0 < i && (i = parseInt(r * i));
                0 < n && (n = parseInt(r * n));
                if (1e3 < i || 1800 < n) return d = O(o);
                if ("resize" == e) {
                    (c = o.split("/")).splice(o.split("/").length - 1, 0, "-/resize/" + i + "x" + ("DIV" == t && 0 < n ? n : "") + "/" + ("y" == window.lazy_webp ? "-/format/webp" : ""));
                    var d = c.join("/").replace("/static.tildacdn.com", "/thumb.tildacdn.com").replace("/static.tildacdn.info", "/thumb.tildacdn.com")
                } else {
                    if (!(0 < i && 0 < n)) return o;
                    "left" != a && "right" != a && (a = "center"), "top" != l && "bottom" != l && (l = "center");
                    (c = o.split("/")).splice(o.split("/").length - 1, 0, "-/" + e + "/" + i + "x" + n + "/" + a + "/" + l + "/" + ("y" == window.lazy_webp ? "-/format/webp" : ""));
                    var c, d = c.join("/").replace("/static.tildacdn.com", "/thumb.tildacdn.com").replace("/static.tildacdn.info", "/thumb.tildacdn.com")
                }
                return d
            }(e.tagName, u, i, r, d, c, s)), (i = "y" === window.lazy_err_static && 0 === i.indexOf("https://static.tildacdn.com/") ? i.replace("https://static.tildacdn.com/", "https://static3.tildacdn.com/") : i) && ("IMG" === t.tagName || "IFRAME" === t.tagName ? t.setAttribute("src", i) : "OBJECT" === t.tagName ? t.setAttribute("data", i) : (a = -1 !== t.style.backgroundImage.indexOf("-gradient(") ? t.style.backgroundImage.split("), ")[1] : a) ? t.style.backgroundImage = "url(" + i + "), " + a : (t.style.backgroundImage = "url(" + i + ")", l = i, (x = (x = t).getAttribute("data-content-cover-id")) && (l = (l = l.split("."))[l.length - 1], x = document.getElementById("recorddiv" + x), "svg" === l && (x.style.backgroundImage = ""))), e.lazy_loading_src = i)
        } else w(e, "loading")
    }

    function z(t, e, o, i) {
        var n;
        return "cover" == t && 0 < e && 0 < o ? (t = e / o) <= (n = 1) ? (t <= .8 && (n = .8), t <= .751 && (n = .75), t <= .667 && (n = .667), t <= .563 && (n = .562), t <= .501 && (n = .5), o = Math.ceil(o / i) * i, e = Math.ceil(o * n), e = 10 * Math.ceil(e / 10)) : (1.25 <= t && (n = 1.25), 1.332 <= t && (n = 1.333), 1.5 <= t && (n = 1.5), 1.777 <= t && (n = 1.777), 2 <= t && (n = 2), e = Math.ceil(e / i) * i, o = Math.ceil(e / n), o = 10 * Math.ceil(o / 10)) : (0 < e && (e = Math.ceil(e / i) * i), 0 < o && (o = Math.ceil(o / i) * i)), [e, o]
    }

    function O(t) {
        if ("undefined" == t || null == t) return t;
        if (0 < t.indexOf(".svg") || 0 < t.indexOf(".gif") || 0 < t.indexOf(".ico") || -1 === t.indexOf("static.tildacdn.") || 0 < t.indexOf("-/empty/") || 0 < t.indexOf("-/resizeb/")) return t;
        if (-1 < t.indexOf("/-/")) return t;
        if (-1 < t.indexOf("lib")) return t;
        if ("y" !== window.lazy_webp) return t;
        if ("y" === window.lazy_err_thumb) return t;
        var e = t.split("/");
        return e.splice(t.split("/").length - 1, 0, "-/format/webp"), e.join("/").replace("/static.tildacdn.com", "/thumb.tildacdn.com").replace("/static.tildacdn.info", "/thumb.tildacdn.com")
    }

    function p(t, e, o) {
        if ("string" == typeof e && null != e && "" != e) {
            if (console.log("lazy loading err"), 0 === e.indexOf("https://static.tildacdn.com/")) return window.lazy_err_static = "y", void m(t, e.replace("https://static.tildacdn.com/", "https://static3.tildacdn.com/"));
            if (-1 !== e.indexOf("https://thumb.tildacdn.com/") && -1 !== e.indexOf("/-/")) {
                window.lazy_err_thumb = "y";
                var i = e.split("/"),
                    n = "",
                    a = "";
                if (3 < i.length)
                    for (var l = 0; l < i.length; l++) "" !== i[l] && ("til" == i[l].substring(0, 3) && 36 == i[l].length && 4 == (i[l].match(/-/g) || []).length && (n = i[l]), l == i.length - 1 && (a = i[l]));
                "" !== n && "" !== a && m(t, "https://static3.tildacdn.com/" + n + "/" + a), "function" != typeof t_errors__sendCDNErrors && ((t = document.createElement("script")).src = "https://static.tildacdn.com/js/tilda-errors-1.0.min.js", t.type = "text/javascript", t.async = !0, document.body.appendChild(t));
                t = 1 < o ? c() - o : "";
                "object" != typeof window.t_cdnerrors && (window.t_cdnerrors = []), window.t_cdnerrors.push({
                    url: e,
                    time: t,
                    debug: {
                        domloaded: window.t_lazyload_domloaded
                    }
                })
            }
        }
    }

    function m(t, e) {
        console.log("try reload: " + e), "IMG" === t.tagName ? e && t.setAttribute("src", e) : e && (t.style.backgroundImage = "url(" + e + ")")
    }

    function t(t) {
        i || (e = {
            elements_selector: "img",
            container: window,
            threshold: 300,
            throttle: 50,
            data_src: "original",
            data_srcset: "original-set",
            class_loading: "loading",
            class_loaded: "loaded",
            skip_invisible: !0,
            show_while_loading: !0,
            callback_load: null,
            callback_error: null,
            callback_set: null,
            callback_processed: null,
            placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        }, a = !!window.addEventListener, l = !!window.attachEvent, document.body && "object" == typeof document.body && (o = !!document.body.classList), i = !0, h = ["200x151", "640x712", "320x356", "670x744", "335x372", "300x225", "500x375", "400x301", "748x832", "374x416", "670x502", "335x251", "360x234", "560x622", "280x311", "640x416"], y = ["353x245", "155x151", "158x164", "372x495", "280x272", "117x117", "291x280", "280x269", "335x241", "283x283", "150x156", "353x233", "414x730", "372x362", "275x206", "290x322", "248x207", "177x136", "173x173", "280x308", "195x214", "248x191", "155x196", "163x203", "320x444", "158x162", "176x203", "412x700", "360x88", "360x616", "167x167", "130x144", "280x233", "560x314", "320x299", "372x275", "320x178", "372x242", "360x352", "353x294", "260x182", "372x310", "335x344", "374x432", "414x500", "374x360", "220x338", "150x146", "335x239", "176x176", "320x302", "374x260", "360x568", "191x221", "192x192", "372x558", "335x188", "320x358", "335x258", "374x575", "26x26", "353x360", "360x206", "335x248", "335x322", "167x256", "560x364", "155x172", "163x216", "163x181", "360x257", "374x561", "374x243", "220x212", "177x148", "291x324", "167x160", "375x749", "335x387", "172x172", "260x302", "414x700", "220x254", "177x172", "374x519", "176x169", "320x352", "335x233", "150x203", "360x207", "158x121", "360x396", "158x131", "150x98", "220x169", "182x202", "320x179", "372x413", "181x226", "353x200", "158x153", "375x628", "176x271", "374x364", "320x492", "374x247", "414x833", "353x393", "335x218", "560x399", "412x264", "293x164", "56x56", "177x204", "248x382", "181x181", "118x118", "260x346", "374x497", "260x202", "393x251", "158x158", "372x200", "373x414", "320x229", "177x177", "312x175", "374x312", "84x84", "320x329", "177x194", "353x350", "335x503", "335x446", "335x326", "374x200", "158x182", "320x237", "335x221", "176x196", "150x229", "320x224", "248x276", "360x299", "260x289", "196x216", "335x279", "177x272", "320x426", "260x172", "155x194", "320x369", "372x350", "360x302", "360x402", "169x186", "158x242", "173x199", "167x185", "360x238", "220x123", "320x308", "414x265", "374x350", "300x333", "177x170", "320x222", "320x311", "260x169", "150x173", "320x246", "353x265", "192x222", "158x151", "372x414", "150x144", "760x502", "314x176", "320x208", "182x182", "320x211", "163x163", "372x279", "360x202", "360x252", "260x252", "260x286", "353x392", "160x104", "374x281", "353x353", "150x231", "320x267", "372x372", "177x197", "275x154", "158x175", "374x374", "150x167", "260x146"]), this._settings = function(t, e) {
            var o, i = {};
            for (o in t) Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
            for (o in e) Object.prototype.hasOwnProperty.call(e, o) && (i[o] = e[o]);
            return i
        }(e, t), this._queryOriginNode = this._settings.container === window ? document : this._settings.container, this._previousLoopTime = 0, this._loopTimeout = null, this._handleScrollFn = n(this.handleScroll, this), r(window, "resize", this._handleScrollFn), this.update(), this.loadAnimatedImages()
    }
    return t.prototype._showOnLoad = function(e) {
        var o, i, n = this._settings;
        !e.getAttribute("src") && n.placeholder && e.setAttribute("src", n.placeholder), r(o = document.createElement("img"), "load", function t() {
            null !== n && (t_lazyLoad__appendImgStatToArr(o, i), n.callback_load && n.callback_load(e), _(e, e, n.data_srcset, n.data_src), n.callback_set && n.callback_set(e), w(e, n.class_loading), s(e, n.class_loaded), d(o, "load", t))
        }), r(o, "error", function(t) {
            w(e, n.class_loading), n.callback_error && n.callback_error(e), void 0 !== t.path ? p(e, t.path[0].currentSrc, i) : void 0 !== t.target && p(e, t.target.currentSrc, i)
        }), s(e, n.class_loading), i = c(), _(o, e, n.data_srcset, n.data_src)
    }, t.prototype._showOnAppear = function(e) {
        var o, i = this._settings;

        function n() {
            null !== i && (t_lazyLoad__appendImgStatToArr(e, o), i.callback_load && i.callback_load(e), w(e, i.class_loading), s(e, i.class_loaded), d(e, "load", n))
        }
        "IMG" !== e.tagName && "IFRAME" !== e.tagName || (r(e, "load", n), r(e, "error", function(t) {
            d(e, "load", n), w(e, i.class_loading), i.callback_error && i.callback_error(e), void 0 !== t.path ? p(e, t.path[0].currentSrc, o) : void 0 !== t.target && p(e, t.target.currentSrc, o)
        }), s(e, i.class_loading)), o = c(), _(e, e, i.data_srcset, i.data_src), i.callback_set && i.callback_set(e)
    }, t.prototype._loopThroughElements = function() {
        for (var t, e = this._settings, o = this._elements, i = o ? o.length : 0, n = [], a = 0; a < i; a++) t = o[a], e.skip_invisible && t.isSkipByPosition && t.isNotUnderScreenRange || x(t, e.container, e.threshold) && (e.show_while_loading ? this._showOnAppear(t) : this._showOnLoad(t), n.push(a), t.wasProcessed = !0);
        for (; 0 < n.length;) o.splice(n.pop(), 1), e.callback_processed && e.callback_processed(o.length);
        0 === i && this._stopScrollHandler()
    }, t.prototype._purgeElements = function() {
        for (var t = this._elements, e = t.length, o = [], i = 0; i < e; i++) t[i].wasProcessed && o.push(i);
        for (; 0 < o.length;) t.splice(o.pop(), 1)
    }, t.prototype._startScrollHandler = function() {
        this._isHandlingScroll || (this._isHandlingScroll = !0, r(this._settings.container, "scroll", this._handleScrollFn, !0))
    }, t.prototype._stopScrollHandler = function() {
        this._isHandlingScroll && (this._isHandlingScroll = !1, d(this._settings.container, "scroll", this._handleScrollFn))
    }, t.prototype.loadAnimatedImages = function() {
        var t, e, o, i, n, a, l = this._settings,
            r = this._elements,
            d = r ? r.length : 0,
            c = [];

        function s(t, e) {
            o = t, "trigger" === (e = e) ? (n = o.getAttribute("data-animate-sbs-trgels")) && (i = document.querySelector('[data-elem-id="' + n + '"]')) : "viewport" === e && (i = v(o, "t396"));
            var o, i, n = A(i) ? u(i) : null;
            if (n) return e = u(t), o = Math.abs(n.top - e.top), i = Math.abs(n.left - e.left), o > l.threshold || i > l.threshold
        }
        for (t = 0; t < d; t++)(b(a = r[t], "tn-atom__img") || b(a, "tn-atom")) && (o = (e = v(a, "tn-elem")).getAttribute("data-animate-sbs-opts"), "intoview" !== (i = e.getAttribute("data-animate-sbs-event")) && "blockintoview" !== i || (n = "viewport"), e.getAttribute("data-animate-sbs-trgels") || (n = "trigger"), l.skip_invisible && null === a.offsetParent || !o || s(e, n) && (l.show_while_loading ? this._showOnAppear(a) : this._showOnLoad(a), c.push(t), a.wasProcessed = !0));
        for (; 0 < c.length;) r.splice(c.pop(), 1), l.callback_processed && l.callback_processed(r.length)
    }, t.prototype.handleScroll = function() {
        var t, e, o;
        this._settings && (e = c(), 0 !== (o = this._settings.throttle) ? (t = o - (e - this._previousLoopTime)) <= 0 || o < t ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = e, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(n(function() {
            this._previousLoopTime = c(), this._loopTimeout = null, this._loopThroughElements()
        }, this), t)) : this._loopThroughElements())
    }, t.prototype.update = function() {
        this._elements = function(e) {
            var o;
            try {
                o = Array.prototype.slice.call(e)
            } catch (t) {
                for (var i = [], n = e.length, a = 0; a < n; a++) i.push(e[a]);
                o = i
            }
            return o.forEach(function(t) {
                t.isSkipByPosition = null === t.offsetParent && !1 === A(v(t, "t396__carrier-wrapper")) && "fixed" !== t.getAttribute("data-content-cover-parallax");
                var e = v(t, "t-rec");
                A(e) && (t.isNotUnderScreenRange = !1 === e.hasAttribute("data-screen-max") && !1 === e.hasAttribute("data-screen-min"))
            }), o
        }(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)), this._purgeElements(), this._loopThroughElements(), this._startScrollHandler()
    }, t.prototype.destroy = function() {
        d(window, "resize", this._handleScrollFn), this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._stopScrollHandler(), this._elements = null, this._queryOriginNode = null, this._settings = null
    }, t
}), window.lazy = "y", "loading" != document.readyState ? t_lazyload__init() : document.addEventListener("DOMContentLoaded", t_lazyload__init), window.t_lazyload_updateResize_elem = function(t) {
    if (window.jQuery && t instanceof jQuery) {
        if (0 == t.length) return;
        t = t.get(0)
    }
    var e, o, i, n, a, l, r;
    null != t && (r = "IMG" == (e = t.tagName) ? (o = t.getAttribute("src"), "-/resize/") : "undefined" != typeof getComputedStyle ? (o = getComputedStyle(t)["background-image"].replace("url(", "").replace(")", "").replace(/"/gi, ""), "contain" == getComputedStyle(t)["background-size"] ? "-/contain/" : "-/cover/") : "-/cover/", null == o || -1 === o.indexOf(r) || 0 < o.indexOf(".svg") || 0 < o.indexOf(".gif") || 0 < o.indexOf(".ico") || -1 === o.indexOf("thumb.tildacdn.com") || 0 < o.indexOf("-/empty/") && 0 < o.indexOf("-/resizeb/") || (r = o.indexOf(r) + r.length, i = o.indexOf("/", r), 0 < r && 0 < i && (n = o.slice(r, i).split("x"), a = t.clientWidth, l = t.clientHeight, 0 < a && 0 < l && (0 < n[0] || 0 < n[1]) && (0 < n[0] && a > n[0] || 0 < n[1] && l > n[1]) && (0 < n[0] && 100 < a - n[0] || 0 < n[1] && 100 < l - n[1]) && (r = o.slice(0, r) + (0 < n[0] ? a : "") + "x" + (0 < n[1] ? l : "") + o.substring(i), "IMG" == e ? t.setAttribute("src", r) : t.style.backgroundImage = "url('" + r + "')"))))
}, window.t_loadImgStats = [];
(function() {
    try {
        (function() {
            function kf(a, c, b, d) {
                var e = this;
                return D(window, "c.i", function() {
                    function f(F) {
                        (F = lf(l, m, "", F)(l, m)) && (P(F.then) ? F.then(g) : g(F));
                        return F
                    }

                    function g(F) {
                        F && (P(F) ? p.push(F) : oa(F) && x(function(O) {
                            var L = O[0];
                            O = O[1];
                            P(O) && ("u" === L ? p.push(O) : h(O, L))
                        }, Oa(F)))
                    }

                    function h(F, O, L) {
                        e[O] = im(l, m, L || q, O, F)
                    }
                    var k, l = window;
                    (!l || isNaN(a) && !a) && he();
                    var m = jm(a, mf, c, b, d),
                        p = [],
                        q = [rh, lf, sh];
                    q.unshift(km);
                    var r = A(R, cb),
                        t = M(m);
                    m.id || Va(ib("Invalid Metrika id: " + m.id, !0));
                    var y = kd.C("counters", {});
                    if (y[t]) return Mb(l, t, "dc", (k = {}, k.key = t, k)), y[t];
                    y[t] = e;
                    kd.D("counters", y);
                    kd.Ia("counter", e);
                    x(function(F) {
                        F(l, m)
                    }, nf);
                    x(f, ld);
                    f(lm);
                    h(mm(l, m, p), "destruct", [rh, sh]);
                    Ub(l, C([l, r, f, 1, "a.i"], th));
                    x(f, W)
                })()
            }

            function nm(a) {
                om(a, function() {
                    for (var c = 0; c < arguments.length; c++);
                });
                return function(c) {
                    oa(c) && (c = c.code, Q(c) && x(function(b) {
                        if (Q(b) && 1 === b[0]) {
                            var d = b[1];
                            I(d, pm) && uh("ytm.p." + d, qm)(a, b)
                        }
                    }, c))
                }
            }

            function qm(a, c) {
                var b, d = c.slice(2),
                    e = [(b = {}, b.require = {
                        kind: 0,
                        value: w(rm, Pc([a, {}]))
                    }, b)];
                of(e, ie([3], d))
            }

            function of(a, c, b) {
                c = c.slice(1);
                a.push(b || {});
                x(function(d) {
                    Q(d) && 3 === d[0] ? of(a, d) : !Q(d) || 18 !== d[0] && 19 !== d[0] ? Q(d) && 2 === d[0] && ec(a, d[1]) : sm(a, d)
                }, c);
                a.pop()
            }

            function sm(a, c) {
                var b = 18 === c[0];
                x(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (b && 1 === d.length) throw ib("mca");
                    d = a[a.length - 1];
                    if (Nb(d, e)) throw ib("vr");
                    f = ec(a, f);
                    d[e] = {
                        kind: b ? 0 : 1,
                        value: f
                    }
                }, c.slice(1))
            }

            function ec(a, c) {
                if (fa(c) || "[object Number]" === Object.prototype.toString.call(c) || !!c === c || ha(c) || c instanceof RegExp) return c;
                if (Q(c) && 40 === c[0]) {
                    a: {
                        var b = c[1];
                        for (var d = a.length; 0 < d;) {
                            var e = a[--d];
                            if (Nb(e, b)) {
                                b = e[b];
                                break a
                            }
                        }
                        b = void 0
                    }
                    if (!b) throw ib("vnd");
                    return b.value
                }
                if (Q(c) && 37 === c[0]) {
                    d = c.slice(2);
                    b = ec(a, c[1]);
                    if (!P(b)) throw ib("tenf");
                    d = A(u(a, ec), d);
                    return b.apply(null, d)
                }
                if (Q(c) && 24 === c[0]) return tm(a, c);
                if (Q(c) && 35 === c[0]) {
                    d = c[2];
                    b = ec(a, c[1]);
                    d = ec(a, d);
                    if (!b) throw ib("noma");
                    return b["" + d]
                }
                if (Q(c) && 23 === c[0]) return um(a, c)
            }

            function um(a, c) {
                return N(function(b, d) {
                    var e = d[1],
                        f = ec(a, d[0]);
                    e = ec(a, e);
                    b["" + f] = e;
                    return b
                }, {}, c.slice(1))
            }

            function tm(a, c) {
                var b = c[1],
                    d = c[2],
                    e = c[3],
                    f = A(R, a);
                return uh("ytm.f." + b, function() {
                    var g = arguments,
                        h = N(function(k, l, m) {
                            k[l] = {
                                kind: 1,
                                value: g[m]
                            };
                            return k
                        }, {}, d);
                    b && !I(b, d) && (h[b] = {
                        kind: 0,
                        value: b
                    });
                    of(f, e, h)
                })
            }

            function uh(a, c) {
                return function() {
                    try {
                        return c.apply(null, arguments)
                    } catch (b) {
                        vh(a, b)
                    }
                }
            }

            function rm(a) {
                return vm[a]
            }

            function wm(a) {
                return N(function(c, b) {
                    Nb(a, b) && (c[b] = a[b]);
                    return c
                }, {}, ca(a))
            }

            function xm(a, c) {
                var b = "" + c,
                    d = {
                        id: 1,
                        ca: "0"
                    },
                    e = zm(b);
                e ? d.id = e : -1 === jb(b, ":") ? (b = Ia(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Ia(b[0]), d.ca = je(e) ? "1" : "0");
                return [Aa(a, d), d]
            }

            function Am(a, c) {
                if ("*" === c) return !0;
                var b = U(a);
                return c === b.host + b.pathname
            }

            function Bm(a, c) {
                var b = n(c, "target");
                b && a(b)
            }

            function Cm(a, c, b) {
                var d = n(b, "submitter");
                d || (b = n(b, "target")) && (d = ke(a, b));
                d && c(d)
            }

            function Dm(a, c, b, d) {
                var e = le(a, d);
                e && x(function(f) {
                    var g, h = null;
                    try {
                        var k = n(f, "css_selector"),
                            l = fc(k, a.document);
                        h = wh(l)
                    } catch (r) {}
                    k = null;
                    try {
                        var m = n(f, "xpath"),
                            p = Em(m);
                        var q = p ? n(a, "document.evaluate") ? a.document.evaluate(p, a.document, null, a.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue : null : null;
                        k = wh(q)
                    } catch (r) {}
                    f = (g = {}, g.s = [k, h], g.b = e, g);
                    c(f)
                }, b)
            }

            function wh(a) {
                return (a = Ob(a)) ? md(me(a)) : null
            }

            function Em(a) {
                if (!a) return "";
                a = a.match(Fm);
                if (!a || 0 === a.length) return "";
                var c = Gm();
                return "//HTML/BODY/" + N(function(b, d) {
                    var e = d[0],
                        f = Ia(d.slice(1));
                    return "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b
                }, "", a)
            }

            function Hm(a) {
                x(function(c) {
                    var b;
                    if (c.data.auctionId) {
                        var d = c.event,
                            e = c.data;
                        c = e.auctionId;
                        Ja[c] || (Ja[c] = (b = {}, b.auctionId = c, b));
                        b = "auctionInit" === d;
                        if (!Ja[c].startStamp || b) Ja[c].startStamp = b ? e.auctionStart || e.timestamp : e.auctionStart;
                        if (I(d, Im)) {
                            if (b = e.bidderCode) {
                                Ja[c][d] || (Ja[c][d] = {});
                                var f = {};
                                Ja[c][d][b] = f;
                                x(function(g) {
                                    var h = e[g];
                                    ha(h) || (f[g] = h)
                                }, Jm);
                                Ja[c].endStamp && (Ja[c].aa = !0)
                            }
                        } else "auctionEnd" === d && (Ja[c].aa = !0, Ja[c].endStamp = e.auctionEnd || e.timestamp, Ja[c].requestedBidders = ia(function(g, h, k) {
                            return pf(g, k) === h
                        }, A(S("bidderCode"), e.bidderRequests)))
                    }
                }, a)
            }

            function Km(a, c) {
                x(function(b) {
                    b.aa && Lm(a, c, b.auctionId)
                }, xh(Ja))
            }

            function Lm(a, c, b) {
                Ja[b].aa = !1;
                Ja[b].Ka && la(a, Ja[b].Ka);
                Ja[b].Ka = T(a, function() {
                    var d, e;
                    delete Ja[b].Ka;
                    delete Ja[b].aa;
                    c((d = {}, d.__ym = (e = {}, e.pbjs = Ja[b], e), d));
                    delete Ja[b]
                }, 2E3)
            }

            function Mm(a) {
                var c = n(a, "featurePolicy");
                return c ? "browsingTopics" in a && c.allowsFeature("browsing-topics") : !1
            }

            function Nm(a, c, b, d) {
                var e = n(d, "data");
                if (fa(e)) {
                    var f = e.split("*");
                    e = f[0];
                    var g = f[1];
                    f = f[2];
                    "sc.topics-response" === e ? (g && ("1" === g && f ? (a = zb(a, f), Q(a) && c.D("cta", a)) : c.D("cta.e", g)), b()) : "sc.frame" === e && d.source && d.source.postMessage("sc.topics", "*")
                }
            }

            function Om(a, c) {
                var b;
                if ("https://oauth.yandex.ru" === n(c, "origin") && n(c, "source.window") && "_ym_uid_request" === n(c.data, "_ym")) {
                    var d = c.source,
                        e = (b = {}, b._ym_uid = a, b);
                    d.postMessage(e, "https://oauth.yandex.ru")
                }
            }

            function yh(a, c) {
                void 0 === c && (c = !0);
                var b = fc("canvas", a.document);
                if (b && (b = Qc(b))) {
                    var d = ne(a) || Rc(a),
                        e = d[0];
                    d = d[1];
                    if (.3 <= zh(a, b, {
                            h: d,
                            w: e
                        }) / (d * e)) {
                        J(a).D("hc", 1);
                        return
                    }
                }
                c && T(a, C([a, !1], yh), 3E3)
            }

            function Ah(a) {
                return {
                    N: function(c, b) {
                        Pm(a).then(function(d) {
                            c.J || (c.J = {});
                            c.J.uah = d;
                            b()
                        }, b)
                    }
                }
            }

            function Qm(a) {
                var c = N(function(b, d) {
                    var e = d[1],
                        f = Rm(a[d[0]]);
                    f && b.push("" + e + "\n" + f);
                    return b
                }, [], Oa(Sm));
                return H("\n", c)
            }

            function Tm(a) {
                return "che\n" + a
            }

            function Rm(a) {
                return fa(a) ? a : Q(a) ? H(",", A(function(c) {
                    return '"' + c.brand + '";v="' + c.version + '"'
                }, a)) : ha(a) ? "" : a ? "?1" : "?0"
            }

            function Um(a, c) {
                var b = Vm(a),
                    d = [Wm(a) || Xm(a)];
                Bh(a) && d.push(b);
                var e = ka(a);
                b = Pa(a);
                var f = b.C("synced", {});
                d = ia(function(g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e(sb);
                        h && delete f[g];
                        return h
                    }
                }, d);
                b.D("synced", f);
                return A(function(g) {
                    return {
                        Oi: c[g],
                        ai: g
                    }
                }, d)
            }

            function Xm(a) {
                a = Ym(a);
                return Zm[a] || a
            }

            function Vm(a) {
                a = Ch(a);
                return $m[a] || "ru"
            }

            function an(a, c, b, d) {
                if (!b.K || je(c.ca)) d();
                else {
                    var e = oe(a),
                        f = u(e, bn),
                        g = Sc(a, ""),
                        h = function() {
                            var q = H(",", A(cn(qf), pe(e)));
                            q = "" + q + dn(q, g);
                            qe(b, "gdpr", q);
                            d()
                        };
                    if (c.gj) f("31"), h();
                    else if (3 === c.id) h();
                    else {
                        var k = J(a),
                            l = k.C("f1");
                        if (l) l(h);
                        else if (l = pe(e), Za(vc(qf), l)) h();
                        else if (g.C("yandex_login")) f("13"), g.D("gdpr", Tc, 525600), h();
                        else {
                            l = re(a);
                            var m = U(a);
                            var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                version: 2,
                                rf: en,
                                zf: "_inversed_buttons"
                            } : void 0;
                            l || p ? (l = g.C("gdpr"), I(l, wc) ? (f(l === rf ? "12" : "3"), h()) : sf(a) || fn(a) ? (f("17"), h()) : gn(a).then(R, E).then(function(q) {
                                q ? (f("28"), h()) : (Dh(h), k.D("f1", Dh), (0, tf[0])(a).then(S("params.eu")).then(function(r) {
                                    if (r || db(m.href, "yagdprcheck=1") || g.C("yaGdprCheck")) {
                                        g.D("gdpr_popup", rf);
                                        hn(a, c);
                                        if (kb(a)) return jn(a, f, c);
                                        var t = Eh(a, e);
                                        if (t) return r = kn(a, f, t, c, p), r.then(C([a, c], ln)), r
                                    }
                                    r || f("8");
                                    return K.resolve({
                                        value: Tc,
                                        Nd: !0
                                    })
                                }).then(function(r) {
                                    g.Gb("gdpr_popup");
                                    if (r) {
                                        var t = r.value;
                                        r = r.Nd;
                                        I(t, wc) && g.D("gdpr", t, r ? void 0 : 525600)
                                    }
                                    t = gc(Fh, ma);
                                    nd(a, t, 20)(Ra(D(a, "gdr"), E));
                                    k.D("f1", ma)
                                })["catch"](D(a, "gdp.a")))
                            })) : (f("14"), h())
                        }
                    }
                }
            }

            function ln(a, c) {
                if (re(a)) {
                    var b = oe(a),
                        d = Aa(a, c);
                    d = d && d.params;
                    b = A(u(mn, n), pe(b));
                    d && b.length && d("gdpr", va(b))
                }
            }

            function jn(a, c, b) {
                var d = se(a, b);
                return new K(function(e) {
                    var f;
                    if (d) {
                        var g = d.$,
                            h = w(u("4", c), u(null, e)),
                            k = T(a, h, 2E3, "gdp.f.t");
                        d.Tf((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.F(Gh, function(m) {
                                e({
                                    value: Hh(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(C([a, k], la))
                    } else e({
                        value: rf,
                        Nd: !0
                    })
                })
            }

            function hn(a, c) {
                var b = se(a, c);
                b && b.$.F(["isYandex"], function() {
                    var d;
                    return d = {
                        type: "isYandex"
                    }, d.isYandex = re(a), d
                });
                return b
            }

            function nn(a, c, b) {
                a = b || Ch(a);
                return I(a, c) ? a : "en"
            }

            function Hh(a) {
                if (I(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Tc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return I(a, wc) ? a : Tc
            }

            function Ih(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e) try {
                    G(e, d)(Ab(a, c))
                } catch (f) {} else Jh = T(a, C([a, c, 2 * b], Ih), b, "ai.d");
                return function() {
                    return la(a, Jh)
                }
            }

            function Kh(a, c, b, d) {
                var e, f, g, h = b.Vh,
                    k = b.Qh;
                b = b.isTrusted;
                a = uf(a, k);
                k = k.readOnly;
                d = (e = {}, e.fi = vf((f = {}, f.a = h ? 1 : 0, f.b = a, f.c = d || 0, f.d = k ? 1 : null, f)).Ha(), e);
                ha(b) || (d.ite = Bb(b));
                c.params((g = {}, g.__ym = d, g))
            }

            function Lh(a) {
                var c = n(a, "target");
                if (c) {
                    var b = n(c, "value");
                    if ((b = $a(b)) && !(100 <= Ua(b))) {
                        var d = Vb(b),
                            e = 0 < jb(b, "@"),
                            f = "tel" === n(c, "type") || !e && Ua(d);
                        if (e || f) {
                            if (f) {
                                if (on(b)) return;
                                var g = b[0],
                                    h = d[0];
                                if (g !== h && "+" !== g) return;
                                var k = b[1];
                                if ("+" === g && k !== h) return;
                                b = b[Ua(b) - 1];
                                g = d[Ua(d) - 1];
                                if (b !== g) return;
                                b = d
                            }
                            d = e ? 5 : 11;
                            g = e ? 100 : 16;
                            if (!(Ua(b) < d || Ua(b) > g)) return a = n(a, "isTrusted"), {
                                Qh: c,
                                Vh: e,
                                Cj: f,
                                Rh: b,
                                isTrusted: a
                            }
                        }
                    }
                }
            }

            function Mh(a, c, b, d, e) {
                if (!od(a)) return E;
                var f = [],
                    g = ja(a);
                Pb(a)(Ra(E, function() {
                    var h = lb(c, a.document.body);
                    e && (h = ia(e, h));
                    x(function(l) {
                        f.push(g.F(l, b, d))
                    }, h);
                    if (Ea("MutationObserver", a.MutationObserver)) {
                        var k = c.toUpperCase();
                        h = new a.MutationObserver(D(a, "de.m", function(l) {
                            x(function(m) {
                                var p = m.addedNodes;
                                m = m.removedNodes;
                                p && p.length && x(function(q) {
                                    pd(a, q, function(r) {
                                        r.nodeName !== k || e && !e(r) || f.push(g.F(r, b, d))
                                    }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                                }, p);
                                m && m.length && x(function(q) {
                                    pd(a, q, function(r) {
                                        r.nodeName !== k || e && !e(r) || g.xb(r, b, d)
                                    }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                                }, m)
                            }, l)
                        }));
                        h.observe(a.document.body, {
                            childList: !0,
                            subtree: !0
                        });
                        f.push(G(h.disconnect, h))
                    }
                }));
                return C([ma, f], x)
            }

            function pn(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (c) return a = G(c, a.speechSynthesis), xc(function(b) {
                    return A(u(b, n), qn)
                }, a())
            }

            function rn(a, c, b) {
                return H("x", A(w(R, Fa("concat", "" + a), u(b, n)), c))
            }

            function sn(a, c) {
                var b = c.Gg;
                if (!tn(a, b)) return "";
                var d = [];
                a: {
                    var e = un(a, b);
                    try {
                        var f = C(e, w)()();
                        break a
                    } catch (F) {
                        if ("ccf" === F.message) {
                            f = null;
                            break a
                        }
                        Va(F)
                    }
                    f = void 0
                }
                if (Wa(f)) var g = "";
                else try {
                    g = f.toDataURL()
                } catch (F) {
                    g = ""
                }(f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = pa(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                } catch (F) {
                    k = []
                }
                k = H(";", k);
                f = wf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = wf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (q) {
                    var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === r && (r = 2)
                }
                r = {
                    sj: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": q ? r : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": wf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                xf(d, r, ": ");
                a: {
                    try {
                        var t = b.getExtension("WEBGL_debug_renderer_info");
                        if (t) {
                            var y = {
                                "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (F) {}
                    y = {}
                }
                xf(d, y);
                if (!b.getShaderPrecisionFormat) return H("~", d);
                xf(d, vn(b));
                return H("~", d)
            }

            function xf(a, c, b) {
                void 0 === b && (b = ":");
                x(function(d) {
                    return a.push("" + d[0] + b + d[1])
                }, Oa(c))
            }

            function wn(a, c, b, d) {
                c = d.C("cc");
                d = C(["cc", ""], d.D);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    if ((e = (e = e[1]) && Ia(e)) && 1440 < ka(a)(sb) - e) return d();
                    b.D("cc", c)
                } else Ba(0)(c) || d()
            }

            function xn(a, c, b, d) {
                return ra(c, function(e) {
                    if (!yf(e) && !qd(a))
                        if (e = d.C("zzlc"), X(e) || Wa(e) || "na" === e) {
                            var f = eb(a);
                            if (f && (e = hc(a))) {
                                var g = f("iframe");
                                z(g.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                f = zf(a, 68);
                                var h = Af(a, 79);
                                g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + Nh("L21ldHJpa2EvenpsYy5odG1s");
                                e.appendChild(g);
                                var k = 0,
                                    l = ja(a).F(a, ["message"], D(a, "zz.m", function(m) {
                                        (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (yc(g), m = m.substr(8), d.D("zzlc", m), b.D("zzlc", m), l(), la(a, k))
                                    }));
                                k = T(a, w(l, u(g, yc)), 3E3)
                            }
                        } else b.D("zzlc", e)
                })
            }

            function yn(a, c, b) {
                var d, e;
                c = tb(u(a, n), zn);
                c = X(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    P(a) && (G(a, f, "y.metrika")(), a = n(f, "createOffer"), P(a) && !a.length && (a = G(a, f)(), d = n(a, "then"), P(d) && G(d, a, function(g) {
                        var h = n(f, "setLocalDescription");
                        P(h) && G(h, f, g, E, E)()
                    })(), z(f, (e = {}, e.onicecandidate = function() {
                        var g, h = n(f, "close");
                        if (P(h)) {
                            h = G(h, f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate = E;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = ic(k[1]), b.D("pp", g));
                            f.onicecandidate = E;
                            h()
                        }
                    }, e))))
                }
            }

            function An(a, c, b) {
                var d, e = rd(a, c);
                if (e) {
                    e.$.F(["gpu-get"], function() {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.C("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = T(a, C([a, c, b], Oh), 200, "pu.m");
                        e.oe(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
                            var l = n(k, "pu");
                            l && (la(a, g), b.D("pu", l))
                        })
                    } else Oh(a, c, b)
                }
            }

            function Oh(a, c, b) {
                var d = n(a, "location.host");
                a = sd(a, c);
                b.D("pu", "" + ic(d) + a)
            }

            function Ph(a, c, b) {
                c = Sc(a, void 0, c);
                c = Qh(a, c.C("phc_settings") || "");
                var d = n(c, "clientId"),
                    e = n(c, "orderId"),
                    f = n(c, "service_id"),
                    g = n(c, "phones") || [];
                return d && e && g && f ? Bn(a, b.oc, {
                    eg: Cn
                })(g).then(function(h) {
                    return Dn(b, {
                        Db: d,
                        Qb: e,
                        Wf: f
                    }, h.ja, g, h.Aa)
                })["catch"](E) : K.resolve()
            }

            function Cn(a, c, b) {
                a = En(b.Tb);
                if ("href" === b.ke) {
                    var d = b.sb;
                    c = d.href;
                    b = c.replace(a, b.bb);
                    if (c !== b) return d.href = b, !0
                } else if ((a = null === (d = b.sb.textContent) || void 0 === d ? void 0 : d.replace(a, b.bb)) && a !== b.sb.textContent) return b.sb.textContent = a, !0;
                return !1
            }

            function Dn(a, c, b, d, e) {
                var f;
                c.Db && c.Qb && (c.Db === a.Db && c.Qb === a.Qb || z(a, c, {
                    ja: {},
                    gb: !0
                }), 0 < e && sa(a.Aa, [e]), x(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = +(a.ja[l] && a.ja[l][g] ? a.ja[l][g] : 0);
                    z(a.ja, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, d), x(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = 1 + (a.ja[l] ? a.ja[l][g] : 0);
                    z(a.ja, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, b), a.nf && (a.gb || b.length) && ((c = Aa(a.l, a.oc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Db, f.orderId = a.Qb, f.service_id = a.Wf, f.phones = a.ja, f.performance = a.Aa, f)), a.gb = !1))
            }

            function Fn(a) {
                a = eb(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = Fa("canPlayType", a),
                        b = xc(function(d) {
                            return A(w(R, Fa("concat", d + "; codecs=")), Gn)
                        }, Rh);
                    return A(c, Rh.concat(b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function Hn(a) {
                var c = n(a, "matchMedia");
                if (c && Ea("matchMedia", c)) {
                    var b = Fa("matchMedia", a);
                    return N(function(d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, In)
                }
            }

            function vn(a) {
                return N(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                    return c
                }, {}, [
                    ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
                    ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                    ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)],
                    ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)],
                    ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                    ["webgl vertex shader medium int",
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)
                    ],
                    ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                    ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)],
                    ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                    ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
                ])
            }

            function un(a, c) {
                return [function() {
                    var b = c.createBuffer();
                    b && c.getParameter && Ea("getParameter", c.getParameter) || Bf();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(Jn);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.Xh = 3;
                    b.ji = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || Bf();
                    return {
                        ie: d,
                        fj: e,
                        ej: b
                    }
                }, function(b) {
                    var d = b.ie,
                        e = b.fj;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || Bf();
                    return z(b, {
                        mh: d
                    })
                }, function(b) {
                    var d = b.ie,
                        e = b.mh;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }, function(b) {
                    var d = b.ie;
                    b = b.ej;
                    d.dj = c.getAttribLocation(d, "attrVertex");
                    d.li = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.Nj);
                    c.vertexAttribPointer(d.dj, b.Xh, c.FLOAT, !1, 0, 0);
                    c.uniform2f(d.li, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.ji);
                    return c.canvas
                }]
            }

            function tn(a, c) {
                if (!P(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !Ea("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function wf(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function Kn(a, c) {
                if (n(c, "settings.ins")) {
                    var b = J(a);
                    if (!b.C("scip")) {
                        var d = Pa(a),
                            e = ka(a)(sb),
                            f = te(d.C("sci"));
                        if (!(f && 1440 >= e - f)) {
                            f = wa(a, "ci");
                            var g = ["sync.cook.int"],
                                h = function(l) {
                                    l = b.C("scip", "") + l;
                                    b.D("scip", l)
                                },
                                k = u("a", h);
                            b.D("scip", "0");
                            return f({
                                ba: {
                                    ha: g,
                                    Pa: 3E3,
                                    Ab: !0
                                }
                            }, ["https://an.yandex.ru/sync_cookie"]).then(function(l) {
                                l = n(l.Tc, "CookieMatchUrls");
                                if (Q(l) && Ua(l)) {
                                    h("1");
                                    var m = wa(a, "c");
                                    l = A(function(p, q) {
                                        return m({
                                            ba: {
                                                ha: g,
                                                Pa: 3E3
                                            }
                                        }, ["https://" + p])["catch"](w(u("b", h), u("" + q, h)))
                                    }, ia(fa, l));
                                    return K.all(l)
                                }
                                k()
                            }, k).then(function() {
                                var l = b.C("scip");
                                !l || db(l, "a") || db(l, "b") || (d.D("sci", e), h("2"))
                            }, E)
                        }
                    }
                }
            }

            function Sh(a) {
                return {
                    N: function(c, b) {
                        if (!c.K) return b();
                        var d = J(a).C("fid");
                        !Th && d && (qe(c, "fid", d), Th = !0);
                        return b()
                    }
                }
            }

            function Ln(a, c) {
                var b = a.document;
                if (I(b.readyState, ["interactive", "complete"])) Ub(a, c);
                else {
                    var d = ja(a),
                        e = d.F,
                        f = d.xb,
                        g = function() {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function Cf(a) {
                return {
                    N: function(c, b) {
                        var d = c.K;
                        if (d) {
                            var e = J(a).C("adBlockEnabled");
                            e && d.D("adb", e)
                        }
                        b()
                    }
                }
            }

            function Mn(a) {
                var c = D(a, "i.clch", Nn);
                ja(a).F(a.document, ["click"], u(a, c), {
                    passive: !1
                });
                return function(b) {
                    var d = Ga.Ra,
                        e = a.Ya[Ga.lc],
                        f = !!e._informer;
                    e._informer = z({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || zc(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function On(a, c) {
                var b = Pa(a);
                if ("" === b.C("cc")) {
                    var d = u("cc", b.D);
                    d(0);
                    var e = ka(a),
                        f = J(a);
                    f = w(S(Pn({
                        Tc: 1
                    }) + ".c"), td(function(g) {
                        d(g + "&" + e(sb))
                    }), u("cc", f.D));
                    wa(a, "6", c)({
                        ba: {
                            Ab: !0,
                            Ie: !1
                        }
                    }, ["https://mc.yandex.md/cc"]).then(f)["catch"](w(td(function() {
                        var g = e(sb);
                        b.D("cc", "&" + g)
                    }), D(a, "cc")))
                }
            }

            function ue(a, c) {
                if (!c) return !1;
                var b = U(a);
                return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
            }

            function Qn(a, c) {
                return ra(c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        Ug: Rn(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function Sn(a, c, b, d, e) {
                b = Df(a.document.body, b);
                d = Df(a.document.body, d);
                I(e.target, [b, d]) && Ef(a, c)
            }

            function Uh(a, c, b, d) {
                (b = Tn(a, d, b)) && Ef(a, c, b)
            }

            function Vh(a, c) {
                var b = Wh(a, c);
                return Un(a, b)
            }

            function Wh(a, c) {
                var b = Df(a.document.body, c);
                return b ? Vn(a, b) : ""
            }

            function Ef(a, c, b) {
                if (c = Aa(a, c)) a = ud(["dr", b || "" + Xa(a, 10, 99)]), c.params(ud(["__ym", a]))
            }

            function Df(a, c) {
                var b = null;
                try {
                    b = c ? fc(c, a) : b
                } catch (d) {}
                return b
            }

            function Xh(a) {
                a = Ca(Nh(a));
                return A(function(c) {
                    c = c.charCodeAt(0).toString(2);
                    return Yh("0", 8, c)
                }, a)
            }

            function Vn(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                pd(a, c, function(e) {
                    if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                    else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && $a(f)) && b.push(f)
                });
                return 0 === b.length ? "" : H(" ", b)
            }

            function Wn(a, c, b) {
                a = Qa(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    uc: b
                })
            }

            function Xn(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(Yn, d + "." + b.uc)) && (c && I(b, Zn) || a("ym-" + b + "-" + d))
                }
            }

            function $n(a, c, b) {
                if ("rt" === b) return "https://" + Zh(a, c) + ".mc.yandex.ru/watch/3/1";
                if ("mf" === b) {
                    b = U(a);
                    b = ve(b.protocol + "//" + b.hostname + b.pathname);
                    c = sd(a, c);
                    var d = "";
                    do d += Xa(a); while (d.length < c.length);
                    d = d.slice(0, c.length);
                    a = "";
                    for (var e = 0; e < c.length; e += 1) a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
                    a = [d, a];
                    return "https://adstat.yandex.ru/track?service=metrika&id=" + a[1] + "&mask=" + a[0] + "&ref=" + b
                }
            }

            function ao(a, c, b) {
                var d, e = Ff(c).Sb;
                return wa(a, "pi", c)({
                    K: Ka((d = {}, d[e] = 1, d))
                }, [b])
            }

            function bo(a, c, b) {
                return new K(function(d, e) {
                    if ($h(a, we, "isp")) {
                        var f = E,
                            g = function(h) {
                                ("1" === h ? d : e)();
                                f();
                                ai(we, "isp")
                            };
                        f = ja(a).F(a, ["message"], C([b, g], D(a, "isp.stat.m", co)));
                        T(a, g, 1500)
                    } else e()
                })
            }

            function co(a, c, b) {
                var d = n(b, "data");
                if (fa(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d && b.source ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
                }
            }

            function eo(a, c) {
                var b = Pa(a),
                    d = "wv2rf:" + M(c),
                    e = c.jc,
                    f = Gf(a),
                    g = b.C(d),
                    h = c.Xi;
                return X(f) || Wa(g) ? Ha(function(k, l) {
                    ra(c, function(m) {
                        var p = !!n(m, "settings.webvisor.forms");
                        p = !n(m, "settings.x3") && p;
                        f = Gf(a) || n(m, "settings.eu");
                        b.D(d, Bb(p));
                        l({
                            jc: e,
                            Md: !!f,
                            Cf: p,
                            hg: h
                        })
                    })
                }) : Hf({
                    jc: e,
                    Md: f,
                    Cf: !!Ia(g),
                    hg: h
                })
            }

            function fo() {
                var a = N(function(c, b) {
                    c[b[0]] = {
                        hd: 0,
                        Eg: 1 / b[1]
                    };
                    return c
                }, {}, [
                    ["blur", .0034],
                    ["change", .0155],
                    ["click", .01095],
                    ["deviceRotation", 2E-4],
                    ["focus", .0061],
                    ["mousemove", .5132],
                    ["scroll", .4795],
                    ["selection", .0109],
                    ["touchcancel", 2E-4],
                    ["touchend", .0265],
                    ["touchforcechange", .0233],
                    ["touchmove", .1442],
                    ["touchstart", .027],
                    ["zoom", .0014]
                ]);
                return {
                    Ag: function(c) {
                        if (c.length) return {
                            type: "activity",
                            data: N(function(b, d) {
                                var e = a[d];
                                return Math.round(b + e.hd * e.Eg)
                            }, 0, ca(a))
                        }
                    },
                    mi: function(c) {
                        c && (c = a[c.data.type || c.event]) && (c.hd += 1)
                    }
                }
            }

            function go(a) {
                return {
                    oh: function() {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null
                    },
                    qh: function() {
                        if (a.document.doctype) {
                            var c = z({
                                    name: "html",
                                    publicId: "",
                                    systemId: ""
                                }, a.document.doctype),
                                b = c.publicId,
                                d = c.systemId;
                            return "<!DOCTYPE " + H("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                        }
                        return null
                    }
                }
            }

            function ho(a, c, b) {
                var d = vd(a),
                    e = ja(a),
                    f = kb(a),
                    g = c.Ad(),
                    h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"),
                    k = u(d, R);
                if (h) {
                    if (!g) return T(a, G(d.T, d, "i", {
                        wa: !1
                    }), 10), {
                        zd: k,
                        Pf: E,
                        stop: E
                    };
                    Va(Sa())
                }
                d.F(["sr"], function(r) {
                    var t, y = bi(a, r.source);
                    y && If(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.ta().Z(y), t))
                });
                d.F(["sd"], function(r) {
                    var t = r.data;
                    r = r.source;
                    (a === r || bi(a, r)) && d.T("sdr", {
                        data: t.data,
                        frameId: t.frameId
                    })
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        p = function() {
                            var r;
                            If(a, a.parent, (r = {}, r.type = "sr", r));
                            m = T(a, p, 100, "if.i")
                        };
                    p();
                    var q = function(r) {
                        d.ga(["\u043d"], q);
                        la(a, m);
                        var t = Uc(a, r.origin).host;
                        l || r.source !== a.parent || !r.data.frameId || "about:blank" !== U(a).host && !I(t, b) || (l = !0, d.T("i", {
                            frameId: r.data.frameId,
                            wa: !0
                        }))
                    };
                    d.F(["\u043d"], q);
                    T(a, function() {
                        d.ga(["\u043d"], q);
                        la(a, m);
                        l || (l = !0, d.T("i", {
                            wa: !1
                        }))
                    }, 2E3, "if.r")
                }
                e = e.F(a, ["message"], function(r) {
                    var t = zb(a, r.data);
                    t && t.type && I(t.type, io) && d.T(t.type, {
                        data: t,
                        source: r.source,
                        origin: r.origin
                    })
                });
                return {
                    zd: k,
                    Pf: function(r) {
                        var t;
                        return If(a, a.parent, (t = {}, t.frameId = c.Ad(), t.data = r, t.type = "sd", t))
                    },
                    stop: e
                }
            }

            function bi(a, c) {
                try {
                    return tb(w(S("contentWindow"), Ba(c)), Ca(a.document.querySelectorAll("iframe")))
                } catch (b) {
                    return null
                }
            }

            function If(a, c, b) {
                c || Va(Sa());
                a = Ab(a, b);
                c.postMessage(a, "*")
            }

            function ci() {
                return jc() + jc() + "-" + jc() + "-" + jc() + "-" + jc() + "-" + jc() + jc() + jc()
            }

            function jc() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function jo(a, c) {
                if (fa(c)) return c;
                var b = a.textContent;
                if (fa(b)) return b;
                b = a.data;
                if (fa(b)) return b;
                b = a.nodeValue;
                return fa(b) ? b : ""
            }

            function ko(a, c, b, d, e) {
                void 0 === d && (d = {});
                void 0 === e && (e = Ma(c));
                var f = z(N(function(h, k) {
                    h[k.name] = k.value;
                    return h
                }, {}, Ca(c.attributes)), d);
                z(f, lo(c, e, f));
                var g = (d = Cb(function(h, k) {
                    var l = k[0],
                        m = xe(a, c, l, k[1], b, e),
                        p = m.value;
                    ha(p) ? delete f[l] : f[l] = p;
                    return h || m.pb
                }, !1, Oa(f))) && Qc(c);
                g && (f.width = g.width, f.height = g.height);
                return {
                    pb: d,
                    Bg: f
                }
            }

            function lo(a, c, b) {
                var d = {};
                Jf(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
                return d
            }

            function xe(a, c, b, d, e, f) {
                void 0 === f && (f = Ma(c));
                var g = {
                    pb: !1,
                    value: d
                };
                if (Jf(c)) "value" === b ? !ha(d) && "" !== d && (b = e.Md, f = e.Cf, e = wd(a, c), f ? (b = Vc(a, c, b), a = b.qb, c = b.hb, b = b.Va, g.pb = !c && (e || a)) : (g.pb = e, b = !(c && kc("ym-record-keys", c))), b || e) && (d = "" + d, g.value = 0 < d.length ? di("\u2022", d.length) : "") : "checked" === b && I((c.getAttribute("type") || "").toLowerCase(), mo) ? g.value = c.checked ? "checked" : null : no.test(b) && Kf(a, c) && (g.value = null);
                else if ("IMG" === f && "src" === b)(e = wd(a, c)) ? (g.pb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (I(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === jb(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && I(b, ["src", "type"])) g.value = null;
                return g
            }

            function Lf(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    H: function(e, f) {
                        return D(a, d + "." + b + "." + f, e, void 0, c)
                    }
                }
            }

            function oo(a, c, b, d, e) {
                function f() {
                    l && l.stop()
                }
                if (!c.zb) return K.resolve(E);
                var g = wa(a, "4", c),
                    h = {
                        K: Ka()
                    },
                    k = new po(a, b, function(m, p, q) {
                        if (!g) return K.resolve();
                        var r = "wv-data=" + md(m, !0),
                            t = D(a, "m.n.m.s");
                        p = {};
                        p["wv-part"] = "" + q;
                        q = m.length;
                        for (var y = 0, F = 255, O = 255, L, na, xa; q;) {
                            L = 21 < q ? 21 : q;
                            q -= L;
                            do na = "string" === typeof m ? m.charCodeAt(y) : m[y], y += 1, 255 < na && (xa = na >> 8, na &= 255, na ^= xa), F += na, O += F; while (--L);
                            F = (F & 255) + (F >> 8);
                            O = (O & 255) + (O >> 8)
                        }
                        m = (F & 255) + (F >> 8) << 8 | (O & 255) + (O >> 8);
                        return g(z({}, h, {
                            ba: {
                                da: r
                            },
                            J: (p["wv-check"] = "" + (65535 === m ? 0 : m), p["wv-type"] = b.type, p)
                        }), c)["catch"](t)
                    }),
                    l = qo(a, k, d, e);
                return ra(c, function(m) {
                    m && J(a).D("isEU", n(m, "settings.eu"));
                    J(a).C("oo") || l && ei(a, m) && l.start();
                    return f
                })
            }

            function qo(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = ja(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = G(c.flush, c),
                    m = ta(function(r, t) {
                        D(a, "hfv." + r, function() {
                            try {
                                var y = t.type
                            } catch (F) {
                                return
                            }
                            y = I(y, d);
                            c.push(t, {
                                type: r
                            });
                            y && l()
                        })()
                    }),
                    p = D(a, "sfv", function() {
                        var r = b(a),
                            t = ro(a);
                        x(function(y) {
                            f.push(g.F(y.target, [y.event], m(y.type)))
                        }, r);
                        x(function(y) {
                            f.push(g.F(y.target, [y.event], D(a, "hff." + y.type + "." + y.event, function(F) {
                                x(Ha({
                                    l: a,
                                    qa: F,
                                    flush: l
                                }), y.O)
                            })))
                        }, t);
                        k = fi(a, "form", e);
                        e.attachEvent && (r = fi(a, "form *", e), x(function(y) {
                            f.push(g.F(y, ["submit"], m("form")))
                        }, k), x(function(y) {
                            Mf(y) && f.push(g.F(y, ["change"], m("formInput")))
                        }, r));
                        x(function(y) {
                            var F = y.submit;
                            if (P(F) || "object" === typeof F && so.test("" + F)) y[h] = F, y.submit = D(a, "fv", function() {
                                var O = {
                                    target: y,
                                    type: "submit"
                                };
                                m("document")(O);
                                return y[h]()
                            })
                        }, k)
                    }),
                    q = D(a, "ufv", function() {
                        x(ma, f);
                        x(function(r) {
                            r && (r.submit = r[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: p,
                    stop: q
                }
            }

            function to(a, c) {
                var b = ia(function(e) {
                        return 0 < e.O.length
                    }, c),
                    d = gi({
                        target: a.document,
                        type: "document"
                    });
                return A(w(R, d, uo(a)), b)
            }

            function hi(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Ya] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        ye(h) && !h[Ya] && sa(d, Ac(b, h))
                    }
                } else sa(d, Ac(b, c));
                return d
            }

            function Nf(a) {
                if (xd) {
                    xd = !1;
                    var c = Db(a.l),
                        b = [];
                    mb(a.l, b, 15) ? a = [] : (V(b, c), a = b);
                    return a
                }
            }

            function ii(a) {
                if (!xd) {
                    xd = !0;
                    a = Db(a.l);
                    var c = [];
                    Wb(c, 14);
                    V(c, a);
                    return c
                }
            }

            function vo(a, c, b) {
                var d = c[Ya];
                if (d) {
                    a: {
                        var e = Db(a),
                            f = c[Ya];
                        if (0 < f) {
                            var g = [];
                            c = Of(a, c);
                            var h = Bc[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.yf) {
                                h.yf = k;
                                if (mb(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                V(g, e);
                                V(g, f);
                                V(g, c[0]);
                                V(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (mb(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                V(g, e);
                                V(g, f);
                                V(g, c[2]);
                                V(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    sa(b, a)
                }
                return d
            }

            function Vc(a, c, b) {
                void 0 === b && (b = !1);
                if (!c) return {
                    Va: !1,
                    hb: !1,
                    qb: !1
                };
                var d = c.getAttribute("type") || c.type;
                if ("button" === d) return {
                    Va: !1,
                    hb: !1,
                    qb: !1
                };
                var e = ia(ji, [c.className, c.id, c.name]),
                    f = c && kc("ym-record-keys", c);
                d = d && I(d, ki) || Za(fb(wo), e);
                var g;
                (g = d) || (g = c.placeholder, g = Za(fb(xo), e) || ji(g) && yo.test(g || ""));
                e = g;
                return {
                    Va: !f && (Pf(a, c) || e && b || e && !d && !b),
                    hb: f,
                    qb: e
                }
            }

            function Pf(a, c) {
                return Kf(a, c) || yd(a, c) ? !0 : wd(a, c)
            }

            function ji(a) {
                return !!(a && 2 < a.length)
            }

            function Jf(a) {
                try {
                    var c = Ma(a);
                    if (I(c, Qf)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || I(b.toLocaleLowerCase(), zo)
                        }
                        return !0
                    }
                } catch (d) {}
                return !1
            }

            function li(a, c) {
                return c && kc("(ym-disable-submit|-metrika-noform)", c)
            }

            function Ao(a, c) {
                return H("", A(function(b) {
                    return a.isNaN(b) ? Bo.test(b) ? (b = b.toUpperCase() === b ? Co : Do, String.fromCharCode(Xa(a, b[0], b[1]))) : b : "" + Xa(a, 0, 9)
                }, c.split("")))
            }

            function wd(a, c) {
                if (ha(c)) return !1;
                if (Rf(c)) {
                    var b = c.parentNode;
                    return (ha(b) ? 0 : 11 === b.nodeType) ? !1 : wd(a, c.parentNode)
                }
                b = mi(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
                return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ? !1 : d
            }

            function ei(a, c) {
                var b = Cc(a),
                    d = b.C("visorc");
                I(d, ["w", "b"]) || (d = "");
                ni(a) && oi(a, ze, "visorc") && !Eo.test(nb(a) || "") || (d = "b");
                var e = n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d || (d = J(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                b.D("visorc", d, 30);
                return "w" === d
            }

            function Fo(a, c) {
                return {
                    N: function(b, d) {
                        b.K.Xb("we", Qb(c.zb));
                        pi(a, c, b, "rn");
                        d()
                    }
                }
            }

            function qi(a, c, b) {
                if (ri.isEnabled(a)) return new ri(a, c);
                if (si.isEnabled(a)) return new si(a, b)
            }

            function ti(a, c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return gc([b], function(f, g) {
                    if (!f) return e;
                    f[0](a, f[2], e, d);
                    d += f[1];
                    g.push(f[3]);
                    return e
                })
            }

            function ui(a, c, b) {
                a = c(b);
                c = [E, 0, 0];
                var d = [0, c, c, void 0];
                return gc(a, function(e, f) {
                    var g = e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1) Dc(d, Y(l)), h = k(h), l & 2 && Dc(d, Y(h[1])), Dc(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g;) {
                            var m = k(h[g]);
                            m.push([0, 0, Sf]);
                            m.push([0, Y(l), Dc]);
                            m.unshift([0, 0, Tf]);
                            sa(f, m);
                            --g
                        } else if (g & 2) {
                            k = e[2];
                            var p = e[3],
                                q = e[4],
                                r = e[5],
                                t = ca(h);
                            for (g = t.length - 1; 0 <= g;) m = t[g], m = [
                                [0, 0, Tf],
                                [q, h[m], r],
                                [k, m, p],
                                [0, 0, Sf],
                                [0, Y(l), Dc]
                            ], sa(f, m), --g
                        } else m = k(h), m.push([0, 0, Sf]), m.push([0, Y(l), Dc]), m.unshift([0, 0, Tf]), sa(f, m);
                    return d
                })
            }

            function Tf(a) {
                var c = a[1],
                    b = a[0],
                    d = a[2];
                a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [E, 0, 0], a[2] = a[1]);
                Dc(a, Y(b));
                b && (a[2][3] = c[3], a[2] = d, a[0] += b)
            }

            function Sf(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [E, 0, 0];
                a[2] = a[1];
                a[0] = 0
            }

            function Dc(a, c) {
                a[0] += c[1];
                a[2][3] = c;
                a[2] = c
            }

            function vi(a) {
                return [
                    [1857, a.partsTotal,
                        Y
                    ],
                    [1793, a.activity, Y],
                    [1744, a.textChangeMutation, Go],
                    [1680, a.removedNodesMutation, Ho],
                    [1616, a.addedNodesMutation, Io],
                    [1552, a.attributesChangeMutation, Jo],
                    [1488, a.publishersHeader, Ko],
                    [1424, a.articleInfo, Lo],
                    [1360, a.focusEvent, Mo],
                    [1296, a.fatalErrorEvent, No],
                    [1232, a.deviceRotationEvent, Oo],
                    [1168, a.keystrokesEvent, Po],
                    [1104, a.resizeEvent, Qo],
                    [1040, a.zoomEvent, Ro],
                    [976, a.touchEvent, So],
                    [912, a.changeEvent, To],
                    [848, a.selectionEvent, Uo],
                    [784, a.scrollEvent, Vo],
                    [720, a.mouseEvent, Wo],
                    [656, a.Kj, Xo],
                    [592, a.page,
                        Yo
                    ],
                    [513, a.end, Ec],
                    [449, a.partNum, Y],
                    [401, a.chunk, Zo],
                    [257, a.frameId, ua],
                    [193, a.event, Y],
                    [129, a.type, Y],
                    [65, a.stamp, Y]
                ]
            }

            function $o(a) {
                return [
                    [84, a.Ci, vi]
                ]
            }

            function ap(a) {
                return [
                    [129, a.position, ua],
                    [81, a.name, da]
                ]
            }

            function bp(a) {
                return [
                    [81, a.name, da]
                ]
            }

            function cp(a) {
                return [
                    [81, a.name, da]
                ]
            }

            function Lo(a) {
                return [
                    [593, a.updateDate, da],
                    [532, a.rubric, ap],
                    [449, a.chars, ua],
                    [401, a.publicationDate, da],
                    [340, a.topics, bp],
                    [276, a.authors, cp],
                    [209, a.pageTitle, da],
                    [145, a.pageUrlCanonical, da],
                    [65, a.id, Y]
                ]
            }

            function dp(a) {
                return [
                    [513,
                        a.chars, ua
                    ],
                    [489, a.maxScrolled, zd],
                    [385, a.involvedTime, ua],
                    [321, a.height, ua],
                    [257, a.width, ua],
                    [193, a.y, ua],
                    [129, a.x, ua],
                    [65, a.id, Y]
                ]
            }

            function Ko(a) {
                return [
                    [129, a.involvedTime, ua],
                    [84, a.articleMeta, dp]
                ]
            }

            function Mo(a) {
                return [
                    [65, a.target, ua]
                ]
            }

            function No(a) {
                return [
                    [209, a.stack, da],
                    [145, a.Zg, da],
                    [81, a.code, da]
                ]
            }

            function Oo(a) {
                return [
                    [193, a.orientation, ua],
                    [129, a.height, Y],
                    [65, a.width, Y]
                ]
            }

            function Po(a) {
                return [
                    [84, a.keystrokes, ep]
                ]
            }

            function ep(a) {
                return [
                    [273, a.modifier, da],
                    [193, a.isMeta, Ec],
                    [145, a.key,
                        da
                    ],
                    [65, a.id, Y]
                ]
            }

            function Qo(a) {
                return [
                    [257, a.pageHeight, Y],
                    [193, a.pageWidth, Y],
                    [129, a.height, Y],
                    [65, a.width, Y]
                ]
            }

            function Ro(a) {
                return [
                    [193, a.y, ua],
                    [129, a.x, ua],
                    [105, a.level, zd]
                ]
            }

            function So(a) {
                return [
                    [129, a.target, ua],
                    [84, a.touches, fp]
                ]
            }

            function fp(a) {
                return [
                    [297, a.force, zd],
                    [233, a.y, zd],
                    [169, a.x, zd],
                    [81, a.id, da]
                ]
            }

            function To(a) {
                return [
                    [257, a.target, ua],
                    [193, a.hidden, Ec],
                    [129, a.checked, Ec],
                    [81, a.value, da]
                ]
            }

            function Uo(a) {
                return [
                    [257, a.endNode, Y],
                    [193, a.startNode, Y],
                    [129, a.end, ua],
                    [65, a.start, ua]
                ]
            }

            function Vo(a) {
                return [
                    [257, a.target, ua],
                    [193, a.page, Ec],
                    [129, a.y, ua],
                    [65, a.x, ua]
                ]
            }

            function Wo(a) {
                return [
                    [193, a.target, ua],
                    [129, a.y, Y],
                    [65, a.x, Y]
                ]
            }

            function Xo(a) {
                return [
                    [148, a.changes, gp],
                    [65, a.target, ua]
                ]
            }

            function gp(a) {
                return [
                    [193, a.index, Y],
                    [145, a.op, da],
                    [81, a.style, da]
                ]
            }

            function Go(a) {
                return [
                    [209, a.value, da],
                    [129, a.index, Y],
                    [65, a.target, Y]
                ]
            }

            function Ho(a) {
                return [
                    [129, a.index, Y],
                    [69, a.nodes, ua]
                ]
            }

            function Io(a) {
                return [
                    [129, a.index, Y],
                    [84, a.nodes, wi]
                ]
            }

            function Jo(a) {
                return [
                    [210, a.attributes, 81, da,
                        145, da
                    ],
                    [129, a.index, Y],
                    [65, a.target, Y]
                ]
            }

            function Yo(a) {
                return [
                    [852, a.content, wi],
                    [785, a.tabId, da],
                    [705, a.recordStamp, hp],
                    [656, a.location, ip],
                    [592, a.viewport, xi],
                    [528, a.screen, xi],
                    [449, a.hasBase, Ec],
                    [401, a.base, da],
                    [337, a.referrer, da],
                    [273, a.ua, da],
                    [209, a.address, da],
                    [145, a.title, da],
                    [81, a.doctype, da]
                ]
            }

            function ip(a) {
                return [
                    [209, a.path, da],
                    [145, a.protocol, da],
                    [81, a.host, da]
                ]
            }

            function xi(a) {
                return [
                    [129, a.height, ua],
                    [65, a.width, ua]
                ]
            }

            function wi(a) {
                return [
                    [513, a.hidden, Ec],
                    [449, a.prev, Y],
                    [385, a.next,
                        Y
                    ],
                    [337, a.content, da],
                    [257, a.parent, Y],
                    [210, a.attributes, 81, da, 145, da],
                    [145, a.name, da],
                    [65, a.id, Y]
                ]
            }

            function da(a) {
                var c = jp({}, a, [], 0);
                return c ? [kp, c, a] : [yi, 0, 0]
            }

            function Zo(a) {
                return [lp, a.length, a]
            }

            function Ec(a) {
                return [yi, 1, a ? 1 : 0]
            }

            function hp(a) {
                a = zi(a);
                var c = a[0],
                    b = a[1],
                    d = (b >>> 28 | c << 4) >>> 0;
                c >>>= 24;
                return [Ai, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
            }

            function zd(a) {
                return [mp, 4, a]
            }

            function ua(a) {
                return 0 > a ? [Ai, 10, zi(a)] : Y(a)
            }

            function Y(a) {
                return [np,
                    128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a
                ]
            }

            function np(a, c, b, d) {
                for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
                b[d] = a
            }

            function yi(a, c, b, d) {
                b[d] = c
            }

            function lp(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d + a] = c[a]
            }

            function Bi(a) {
                return function(c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c;
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue
                                }
                                d[e++] = c >> 6 | 192
                            } else {
                                if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                    if (a) {
                                        g += 4;
                                        continue
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = c >> 18 | 240;
                                    d[e++] = c >> 12 & 63 | 128
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue
                                    }
                                    d[e++] = c >> 12 | 224
                                }
                                d[e++] = c >> 6 & 63 | 128
                            }
                            d[e++] = c & 63 | 128
                        }
                    return a ? g : e
                }
            }

            function mp(a, c, b, d) {
                return op(a)(a, c, b, d)
            }

            function pp(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = -c);
                if (0 === c) Ad(0 < 1 / c ? 0 : 2147483648, b, d);
                else if (a.isNaN(c)) Ad(2143289344, b, d);
                else if (3.4028234663852886E38 < c) Ad((e << 31 | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875E-38 > c) Ad((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    Ad((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            }

            function Ad(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }

            function Ai(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a;) b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
                for (; 127 < c;) b[d++] = c & 127 | 128, c >>>= 7;
                b[d++] = c
            }

            function zi(a) {
                if (!a) return [0, 0];
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
                return [a, b]
            }

            function pi(a, c, b, d) {
                var e, f = b.J;
                f.wmode = "0";
                f["wv-hit"] = f["wv-hit"] || "" + Fc(a);
                f["page-url"] = f["page-url"] || U(a).href;
                d && (f[d] = f[d] || "" + Xa(a));
                a = {
                    na: {
                        Ba: "webvisor/" + c.id
                    },
                    ba: z(b.ba || {}, {
                        Za: (e = {}, e["Content-Type"] = "text/plain", e),
                        bd: "POST"
                    }),
                    J: f
                };
                z(b, a)
            }

            function qp(a, c) {
                return ra(c, function(b) {
                    var d = J(a);
                    M(c);
                    if (!d.C("dSync", !1)) return d.D("dSync", !0), Ci(a, b, {
                        cb: c,
                        Sb: "s",
                        Rd: "ds",
                        Mi: function(e, f, g) {
                            var h = e.Tc;
                            e = e.host;
                            if (n(h, "settings")) return Va(Sa("ds.e"));
                            f = f(Z) - g;
                            g = e[1];
                            var k, l;
                            h = Ka((k = {}, k.di = h, k.dit = f, k.dip = g, k));
                            k = (l = {}, l["page-url"] = U(a).href, l);
                            return wa(a, "S", Di)({
                                K: h,
                                J: k
                            }, Di)["catch"](D(a, "ds.rs"))
                        }
                    })
                })
            }

            function Ci(a, c, b) {
                var d, e = b.cb,
                    f = ka(a),
                    g = rp(a, c.userData, e),
                    h = sp(a),
                    k = w(Ei, C([tp, up], Bd))(a),
                    l = n(c, "settings.sbp");
                l && (b.data = z({}, l, (d = {}, d.c = e.id, d)));
                return h.length ? vp(a, f, g, c, k, b).then(function() {
                    return wp(a, h, g, f, k, b)
                }, E) : K.resolve()
            }

            function sp(a) {
                var c = Cd(a);
                a = w(Uf, vc(["iPhone", "iPad"]))(a);
                return c ? xp : a ? yp : []
            }

            function wp(a, c, b, d, e, f) {
                e = f.Mi;
                var g = void 0 === e ? E : e,
                    h = f.Rd,
                    k = d(Z);
                return zp(a, c, f)(Ra(function(l) {
                    x(function(m) {
                        m && Ae(a, h + ".s", m)
                    }, l);
                    l = d(sb);
                    b.D(h, l)
                }, function(l) {
                    b.D(h, d(sb));
                    g(l, d, k)
                }))
            }

            function vp(a, c, b, d, e, f) {
                var g = f.Rd,
                    h = f.cb;
                return new K(function(k, l) {
                    var m = b.C(g, 0);
                    m = parseInt("" + m, 10);
                    return c(sb) - m <= e.ag ? l() : Ap(a) ? k(void 0) : yf(d) ? l() : k(Bp(a, h))
                })
            }

            function zp(a, c, b) {
                var d = b.Sb,
                    e = b.data,
                    f = wa(a, d, b.cb);
                a = z({}, Fi);
                e && z(a.J, e);
                return Cp(A(function(g) {
                    return Dp(f(z({
                        ba: {
                            Ie: !1,
                            le: !0
                        }
                    }, Fi), A(function(h) {
                        var k = h[1],
                            l = h[2];
                        h = H("", A(function(m) {
                            return String.fromCharCode(m.charCodeAt(0) + 10)
                        }, h[0].split("")));
                        return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + Ep[d]
                    }, g)).then(function(h) {
                        return z({}, h, {
                            host: g[h.jg]
                        })
                    }))
                }, c))
            }

            function rp(a, c, b) {
                var d = c || {},
                    e = wa(a, "u", b),
                    f = Pa(a);
                return {
                    C: function(g, h) {
                        return X(d[g]) ? f.C(g, h) : d[g]
                    },
                    D: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.D(g, l);
                        return e({
                            J: (k = {}, k.key = g, k.value = l, k)
                        }, [Ga.Ra + "//" + lc + "/user_storage_set"], {})["catch"](D(a, "u.d.s.s"))
                    }
                }
            }

            function Fp(a) {
                return {
                    N: function(c, b) {
                        J(a).C("oo") || b()
                    }
                }
            }

            function Gp(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function() {
                        return K.resolve()
                    }
                }
                return function(e) {
                    var f,
                        g = (f = {}, f["browser-info"] = Hp, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = Ab(a, e)) ? d(Ip, {
                        $a: g,
                        ha: [],
                        da: "site-info=" + ve(e)
                    })["catch"](E) : K.resolve()
                }
            }

            function Jp(a, c) {
                if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
                    var b = M(c);
                    delete J(a).C("counters", {})[b];
                    Va(Sa("oo.e"))
                }
            }

            function Kp(a) {
                if (Dd(a)) return null;
                var c = Lp(a),
                    b = c.Bf;
                X(b) && (c.Bf = null, Mp(a).then(function(d) {
                    c.Bf = d
                }));
                return b ? 1 : null
            }

            function Np(a, c, b) {
                b = b.J;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = Ed(a);
                if (!a) return null;
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Op);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = Pp, d = e)
                }
                if (!b) return null;
                a = Qp(a, d, b);
                c = M(c);
                c = Rp(c);
                return (c = Sp(c, a)) && H(",", c)
            }

            function Sp(a, c) {
                var b = a.length ? A(function(d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                x(w(R, Fa("push", a)), c);
                return ia(Ba(null), b).length === a.length ? null : b
            }

            function Qp(a, c, b) {
                return A(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (P(e)) return e(a, c) || null;
                    if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Gi[d[0]] || Gi[g]));
                    if (!g) return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36E5 < d ? null : d
                }, b)
            }

            function Be(a, c) {
                try {
                    var b = c.localStorage.getItem(a);
                    return b && md(me(b))
                } catch (d) {}
                return null
            }

            function me(a) {
                for (var c = [], b = 0; b < a.length; b++) {
                    var d = a.charCodeAt(b);
                    128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
                }
                return c
            }

            function md(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length,
                        d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g & 63])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
                }
                e = H("", e);
                return c ? Hi(e, !0) : e
            }

            function Nh(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = Hi(b)); b.length % 4;) b += "=";
                do {
                    var f = Gc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        g = Gc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        h = Gc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        k = Gc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function Hi(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return Tp[b] || b
                }) : ""
            }

            function Up(a) {
                try {
                    var c = Ua(a) ? a : [];
                    return H(",", [a.name, a.description, w(Ca, va, Xb(Vp), Ce(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function Vp(a) {
                return H(",", [a.description, a.suffixes, a.type])
            }

            function Wp(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b
            }

            function Xp(a, c, b, d, e, f, g, h) {
                var k = b.C(f);
                ha(k) && (b.D(f, g), e(a, c, b, d), k = b.C(f, g));
                X(h) || h.Xb(f, "" + k);
                return k
            }

            function Yp(a, c) {
                if (Fd(a)) {
                    var b = nb(a).match(Zp);
                    if (b && b.length) return b[1] === c
                }
                return !1
            }

            function De(a, c, b) {
                return function(d) {
                    var e, f, g = Aa(c, b);
                    g && $p(a, d, c) && (g = G(g.params, g), (d = Vf({
                        event: a,
                        La: "products",
                        ya: mc,
                        Eh: "goods"
                    }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            }

            function $p(a, c, b) {
                var d = !1,
                    e = "";
                if (!oa(c)) return Mb(b, "", "ecomeo"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        Q(f) && f.length ? (d = Ii(function(g) {
                            return oa(g) && (fa(g.id) || Wc(b, g.id) || fa(g.name))
                        }, f)) || (e = "ecomgi") : e = "ecomgei";
                        break;
                    case "purchase":
                        Wc(b, c.id) || fa(c.id) ? d = !0 : e = "ecompi"
                }
                Mb(b, "", e);
                return d
            }

            function Gd(a, c) {
                return {
                    N: function(b, d) {
                        Wf(b) ? d() : ra(c, function(e) {
                            var f;
                            if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.J = z(b.J || {}, e);
                            d()
                        })
                    }
                }
            }

            function aq(a, c) {
                function b() {
                    q.hidden ? z(k.style, Hd(["top", "right", "left", "background"], "initial")) : z(k.style, Hd(["top", "right", "left"], "0"), {
                        background: "rgba(0, 0, 0, .3)"
                    });
                    y.parentNode || (r.appendChild(p), r.appendChild(y));
                    q.hidden = !q.hidden;
                    r.hidden = !r.hidden;
                    t.hidden = !t.hidden
                }

                function d(L) {
                    var na = g();
                    z(na.style, Hc("2px", "18px"), Xc, {
                        left: "15px",
                        top: "7px",
                        background: "#2f3747",
                        borderRadius: "2px"
                    });
                    na.style.transform = "rotate(" + L + "deg)";
                    return na
                }

                function e(L, na, xa, Eb, Id) {
                    var Ee = g();
                    z(Ee.style, Hc(na + "px", xa + "px"), Xc, {
                        left: L + "px",
                        bottom: 0,
                        background: Eb,
                        borderTopLeftRadius: Id
                    });
                    return Ee
                }
                var f = eb(a);
                if (!f) return E;
                var g = u("div", f),
                    h = u("iframe", f),
                    k = g();
                k.classList.add("__ym_wv_ign");
                z(k.style, Ji, {
                    bottom: "0",
                    width: "100%",
                    maxWidth: "initial",
                    zIndex: "999999999"
                });
                var l = k.attachShadow ? k.attachShadow({
                        mode: "open"
                    }) : k,
                    m = g();
                z(m.style, Hc("24px"), Xc, Xf, {
                    top: "12px",
                    right: "10px",
                    background: "#3367dc",
                    overflow: "hidden"
                });
                var p = g();
                z(p.style, {
                    border: "2px solid transparent",
                    animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear"
                }, Xf, Xc, Hc("48px"), Hd(["top", "left"], "calc(50% - 24px)"), Hd(["borderTopColor", "borderLeftColor"], "#fc0"));
                f = f("style");
                f.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
                p.appendChild(f);
                var q = g();
                q.id = "__ym_wv_ign__opener";
                z(q.style, Hc("46px", "48px"), Ji, {
                    right: "0",
                    bottom: "60px",
                    cursor: "pointer",
                    background: "#fff",
                    borderRadius: "16px 0 0 16px",
                    boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)"
                });
                var r = g();
                z(r.style, Xc, Hd(["top", "right", "bottom"], "0"), {
                    width: "600px",
                    background: "#fff"
                });
                var t = g();
                t.id = "__ym_wv_ign__closer";
                z(t.style, Hc("32px"), Xc, Xf, {
                    top: "12px",
                    right: "612px",
                    cursor: "pointer",
                    background: "#fff"
                });
                f = h();
                f.src = "https://metrika.yandex.ru/widget/iframe-check";
                var y = h();
                z(y.style, Hc("100%"), {
                    border: "none"
                });
                y.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
                r.hidden = !0;
                t.hidden = !0;
                t.appendChild(d(45));
                t.appendChild(d(-45));
                r.appendChild(f);
                m.appendChild(e(0, 8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"));
                m.appendChild(e(8, 9, 16, "#04acff", "3px"));
                m.appendChild(e(17, 7, 24, "#ffdd13"));
                q.appendChild(m);
                l.appendChild(r);
                l.appendChild(t);
                var F = ["click", "touchstart"];
                h = ja(a);
                m = a.document.body;
                l = [h.F(q, F, b), h.F(t, F, b), h.F(f, ["load"], C([ma, [G(r.removeChild, r, f), G(l.appendChild, l, q)]], x)), h.F(y, ["load"], G(r.removeChild, r, p)), G(m.removeChild, m, k)];
                var O = C([ma, l], x);
                l.push(h.F(a, ["securitypolicyviolation"], function(L) {
                    (L = n(L, "blockedURI")) && 0 <= jb(L, "https://metrika.yandex.ru") && O()
                }));
                m.appendChild(k);
                return O
            }

            function Hd(a, c) {
                return N(function(b, d) {
                    b[d] = c;
                    return b
                }, {}, a)
            }

            function Hc(a, c) {
                var b;
                return b = {}, b.width = a, b.height = c || a, b
            }

            function bq(a, c) {
                var b = n(c, "origin"),
                    d;
                if (d = b) d = cq.test(b) || dq.test(b);
                d && (b = zb(a, c.data), "appendremote" === n(b, "action") && eq(a, c, b))
            }

            function Ki(a, c, b, d) {
                var e, f, g, h;
                void 0 === b && (b = "");
                void 0 === d && (d = "");
                var k = J(a),
                    l = {};
                l.getCachedTags = Fe;
                l.form = (e = {}, e.closest = u(a, Li), e.select = fq, e.getData = u(a, Mi), e);
                l.button = (f = {}, f.closest = u(a, ke), f.select = Yf, f.getData = u(a, le), f);
                l.phone = (g = {}, g.hidePhones = C([a, null, [d]], Ni), g);
                l.status = (h = {}, h.checkStatus = C([a, Ia(b)], gq), h);
                k.D("_u", l);
                c && zc(a, {
                    src: c
                })
            }

            function Oi(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ? "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" : d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = H(".", va(A(w(R, Ia), b.split("."))));
                if (!I(d, hq) || !I(c, ["ru", "en", "tr"])) return "";
                c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js");
                return Pi(c) ? c : ""
            }

            function iq(a, c) {
                var b = eb(a);
                if (b) {
                    var d = b("div"),
                        e = hc(a);
                    if (e) {
                        d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function() {
                            var h = b("meta");
                            h.setAttribute("http-equiv", "Content-Security-Policy");
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            zc(f.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow ? g = d.attachShadow({
                            mode: "open"
                        }) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
                        g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer = f)
                    }
                }
            }

            function gq(a) {
                var c, b = Qi(a);
                a = J(a).C("getCounters", Jd)();
                a = A(S("id"), a);
                return c = {
                    id: b
                }, c.counterFound = !!b && I(b, a), c
            }

            function Ni(a, c, b) {
                var d;
                c = Ri(a, c, {
                    eg: jq,
                    hi: (d = {}, d.href = !0, d)
                });
                b = va(A(function(f) {
                    return "*" === f ? f : Vb(f)
                }, b));
                var e = A(w(R, Fa("concat", [""]), Si("reverse"), ma), b);
                b = Kd(a);
                d = Ti(a, b, 1E3);
                c = u(e, c);
                d.F(c);
                kq(a, b);
                Ui(a, b);
                c()
            }

            function jq(a, c, b) {
                var d = eb(a),
                    e = b.sb,
                    f = b.Tb,
                    g = e.parentNode,
                    h = e.textContent;
                if (!("text" === b.ke && h && d && g)) return !1;
                b = d("small");
                Vi(b);
                var k = Wi(h).length;
                x(Fa("appendChild", b), N(function(l, m) {
                    var p = l.nodes,
                        q = l.mg,
                        r = d("small");
                    r.innerHTML = m;
                    var t = lq.test(m);
                    Vi(r);
                    t && (r.style.opacity = "" + (k - q - 1) / k);
                    p.push(r);
                    return {
                        nodes: p,
                        mg: q + (t ? 1 : 0)
                    }
                }, {
                    nodes: [],
                    mg: 0
                }, h).nodes);
                mq(a, c, b, f);
                g.insertBefore(b, e);
                e.textContent = "";
                return !0
            }

            function mq(a, c, b, d) {
                function e() {
                    x(function(l) {
                        l.style && z(l.style, {
                            opacity: ""
                        })
                    }, Ca(b.childNodes));
                    if (c) {
                        var k = Aa(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }
                var f = ja(a),
                    g = E,
                    h = E;
                g = f.F(b, ["mouseenter"], function(k) {
                    if (k.target === b) {
                        var l = T(a, e, 200, "ph.h.e");
                        h();
                        h = f.F(b, ["mouseleave"], function(m) {
                            m.target === b && la(a, l)
                        })
                    }
                })
            }

            function Ui(a, c) {
                Pb(a)(Ra(E, function() {
                    var b,
                        d = a.document.body,
                        e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b);
                    Ea("MutationObserver", a.MutationObserver) && (new MutationObserver(c.T)).observe(d, e)
                }))
            }

            function kq(a, c) {
                return ja(a).F(a, ["load"], c.T)
            }

            function Ri(a, c, b) {
                function d(k) {
                    return f(a, c, k) ? h[k.Tb] && h[k.Tb].Zc : null
                }
                var e, f = b.eg;
                b = b.hi;
                var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b,
                    h;
                return function(k) {
                    return new K(function(l, m) {
                        k && k.length || m();
                        h = Xi()(k);
                        Pb(a)(Ra(u({
                            ja: [],
                            Aa: 0
                        }, l), function() {
                            var p = ka(a),
                                q = p(Z),
                                r = g.href ? nq(a, h) : [],
                                t = g.text ? Yi(a, h, a.document.body) : [];
                            l({
                                ja: ia(Q, va(A(d, r.concat(t)))),
                                Aa: p(Z) - q
                            })
                        }))
                    })
                }
            }

            function nq(a, c) {
                var b = a.document.body;
                if (!b) return [];
                var d = Zi(c);
                return N(function(e, f) {
                    var g = n(f, "href");
                    try {
                        var h = decodeURI(g || "")
                    } catch (p) {
                        h = ""
                    }
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0],
                            l = k ? Vb(k) : "",
                            m = c[l];
                        X(m) || !l && "*" !== m.Zc[0] || (e.push({
                            ke: "href",
                            sb: f,
                            Tb: l,
                            bb: $i(k, c[l].bb),
                            Pi: g
                        }), g = Vb(h.slice(4)), l = Xi()([l ? m.Zc : [g, ""]]), sa(e, Yi(a, l, f)))
                    }
                    return e
                }, [], Ca(b.querySelectorAll("a")))
            }

            function Yi(a, c, b) {
                if (!b) return [];
                var d = [],
                    e = Zi(c),
                    f = ["script", "style"];
                pd(a, b, function(g) {
                    var h = n(g, "parentNode.nodeName") || "";
                    g === b || I(h.toLowerCase(), f) || (h = va(e.exec(g.textContent || "") || []), x(function(k) {
                        var l = Vb(k);
                        X(c[l]) || d.push({
                            ke: "text",
                            sb: g,
                            Tb: l,
                            bb: $i(k, c[l].bb),
                            Pi: g.textContent || ""
                        })
                    }, h))
                }, function(g) {
                    return e.test(g.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }

            function Xi() {
                return Zf(function(a, c) {
                    var b = A(Vb, c),
                        d = b[0];
                    b = b[1];
                    a[d] = {
                        bb: b,
                        Zc: c
                    };
                    var e = aj(d);
                    e !== d && (a[e] = {
                        bb: aj(b),
                        Zc: c
                    });
                    return a
                }, {})
            }

            function $i(a, c) {
                for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h = d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                }
                return H("", b) + c.slice(f + 1)
            }

            function aj(a) {
                var c = {
                    7: "8",
                    8: "7"
                };
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }

            function Zi(a) {
                return new RegExp("(?:" + H("|", A(bj, ca(a))) + ")")
            }

            function cj(a, c, b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ? pd(a, c, Fa("push", e), d) : sa(e, dj(a, c, d)));
                    x(b, e)
                }
            }

            function pd(a, c, b, d, e, f) {
                function g(k) {
                    return P(d) ? d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                void 0 === f && (f = !1);
                var h = g(c);
                if (P(b) && (f || h === a.NodeFilter.FILTER_ACCEPT) && (h && b(c), !Rf(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                            acceptNode: g
                        } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function dj(a, c, b) {
                var d = [],
                    e = w(R, Fa("push", d));
                P(b) ? (b = b(c), (ha(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = dj(a, c[b]);
                        x(e, g)
                    }
                }
                return d
            }

            function ej(a, c, b) {
                var d;
                a = [fj(a, c, function(e) {
                    d = e;
                    e.ra.F(b)
                }), function() {
                    d && d.unsubscribe()
                }];
                return C([Ge, a], x)
            }

            function oq(a, c, b, d) {
                var e, f, g;
                if (b) {
                    var h = n(d, "ecommerce") || {};
                    var k = n(d, "event") || "";
                    h = oa(h) && fa(k) ? Vf(k, h) : void 0;
                    if (!h) a: {
                        var l = d;!Q(d) && Wc(a, Ua(d)) && (l = Qa(l));
                        if (Q(l) && (h = l[0], k = l[1], l = l[2], fa(k) && oa(l) && "event" === h)) {
                            h = Vf(k, l);
                            break a
                        }
                        h = void 0
                    }
                    if (d = h || pq(d)) ub(a, (e = {}, e.counterKey = c, e.name = "ecommerce", e.data = d, e)), b((f = {}, f.__ym = (g = {}, g.ecommerce = [d], g), f))
                }
            }

            function pq(a) {
                var c = n(a, "ecommerce");
                if (oa(c)) return a = ia(vc(qq), ca(c)), a = N(function(b, d) {
                    b[d] = c[d];
                    return b
                }, {}, a), 0 === ca(a).length ? void 0 : a
            }

            function Vf(a, c) {
                var b, d, e = fa(a) ? rq[a] : a;
                if (e) {
                    var f = e.event,
                        g = e.La,
                        h = e.Eh,
                        k = void 0 === h ? "items" : h,
                        l = c.purchase || c;
                    if (h = l[k]) {
                        e = A(u(e.ya, sq), h);
                        var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b);
                        b = ca(l);
                        g && 1 < b.length && (m[f].actionField = Cb(function(p, q) {
                            if (q === k) return p;
                            if ("currency" === q) return m.currencyCode = l.currency, p;
                            p[tq[q] || $f[q] || q] = l[q];
                            return p
                        }, {}, b));
                        return m
                    }
                }
            }

            function sq(a, c) {
                var b = {};
                x(function(d) {
                    var e = a[d] || $f[d] || d; - 1 !== jb(d, "item_category") ? (e = $f.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
                }, ca(c));
                return b
            }

            function uq(a, c, b) {
                var d, e, f, g = n(b, "target");
                if (g && (g = ke(a, g), g = le(a, g))) {
                    g = "?" + Ic(g);
                    var h = nc(a, c, "gbn", (d = {}, d.id = c.id, d.query = g, d));
                    b = n(b, "isTrusted");
                    b = ha(b) ? void 0 : (e = {}, e.__ym = (f = {}, f.ite = Bb(b), f), e);
                    He(a, c, "btn", h).reachGoal(g, b)
                }
            }

            function vq(a, c, b, d) {
                var e = n(d, "target");
                e && (d = n(d, "isTrusted"), (e = oc("button,input", a, e)) && "submit" === e.type && (e = Li(a, e))) && (b.push(e), T(a, C([!1, a, c, b, e, d], gj), 300))
            }

            function gj(a, c, b, d, e, f) {
                var g, h, k, l = Rb(c)(e, d),
                    m = -1 !== l;
                if (a || m) m && d.splice(l, 1), a = Mi(c, e), a = "?" + Ic(a), d = C([c, b, "fg", (g = {}, g.id = b.id, g.query = a, g)], hj), f = ha(f) ? void 0 : (h = {}, h.__ym = (k = {}, k.ite = Bb(f), k), h), He(c, b, "form", d).reachGoal(a, f)
            }

            function hj(a, c, b) {
                var d;
                return wq(a, c).then(w(C([nc(a, c, b, (d = {}, d.id = c.id, d)), E], Bd), ma))
            }

            function Mi(a, c, b) {
                return ij(a, c, ["i", "n", "p"], void 0, b)
            }

            function xq(a, c) {
                var b;
                a((b = {}, b.clickmap = X(c) ? !0 : c, b))
            }

            function yq(a, c, b, d, e) {
                var f, g = "clmap/" + e.id;
                c = (f = {}, f["page-url"] = c, f["pointer-click"] = b, f);
                f = {
                    K: Ka(),
                    J: c,
                    na: {
                        Ba: g
                    }
                };
                d(f, e)["catch"](D(a, "c.s.c"))
            }

            function zq(a, c, b, d, e) {
                if (Nb(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = Ma(c.element);
                if (e && !e(c.element, a) || I(c.button, [2, 3]) && "A" !== a || Za(Ba(a), d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (Aq(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function Bq(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function Cq(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function jj(a, c) {
                var b = hc(a),
                    d = ag(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function Ie(a, c) {
                return {
                    N: function(b, d) {
                        var e, f = b.K,
                            g = b.Ja,
                            h = b.J,
                            k = b.ba;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = ka(a);
                            f.Xb("rqnl", 1);
                            for (var m = Ld(a), p = 1; m[p];) p += 1;
                            b.M || (b.M = {});
                            b.M.Ub = p;
                            m[p] = (e = {}, e.protocol = Ga.Ra, e.host = lc, e.resource = b.na.Ba, e.postParams = k.da, e.time = l(Z), e.counterType = c.ca, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = Fc(a), e);
                            g && (m[p].telemetry = g.l());
                            bg(a)
                        }
                        d()
                    },
                    Da: function(b, d) {
                        kj(a, b);
                        d()
                    }
                }
            }

            function kj(a, c) {
                var b = Ld(a);
                c.K && !Wa(b) && c.M && (delete b[c.M.Ub], bg(a))
            }

            function bg(a) {
                var c = Ld(a);
                Pa(a).D("retryReqs", c)
            }

            function Dq(a, c) {
                if (a.Vi()) {
                    var b = lj(c);
                    if (b && !kc("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.Pg,
                            f = a.cb,
                            g = a.sender,
                            h = a.bh,
                            k = f.yc,
                            l = b.href;
                        var m = $a(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m || (m = (m = b.querySelector("img")) ? $a(m.getAttribute("title") || m.getAttribute("alt")) : "");
                        m = l === m ? "" : m;
                        var p = n(c, "isTrusted");
                        if (kc("ym-external-link", b)) Je(d, f, {
                            url: l,
                            ob: !0,
                            title: m,
                            Hc: p,
                            sender: g
                        });
                        else {
                            k = k ? Uc(d, k).hostname : U(d).hostname;
                            h = RegExp("\\.(" + H("|", A(Eq, h)) + ")$", "i");
                            var q = b.protocol + "//" + b.hostname + b.pathname;
                            h = mj.test(q) || mj.test(l) || h.test(l) || h.test(q);
                            b = b.hostname;
                            Ke(k) === Ke(b) ? h ? Je(d, f, {
                                url: l,
                                Fc: !0,
                                Hc: p,
                                title: m,
                                sender: g
                            }) : m && e.D("il", $a(m).slice(0, 100)) : l && Fq.test(l) || Je(d, f, {
                                url: l,
                                Jc: !0,
                                ob: !0,
                                Fc: h,
                                Hc: p,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }

            function Je(a, c, b) {
                var d, e, f, g, h = Ka();
                void 0 !== b.Hc && h.D("ite", Bb(b.Hc));
                b.Fc && h.D("dl", 1);
                b.ob && h.D("ln", 1);
                var k = b.lg || {};
                h = {
                    K: h,
                    M: {
                        title: k.title || b.title,
                        Jc: !!b.Jc,
                        R: k.params
                    },
                    J: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.yc || U(a).href, d)
                };
                d = "Link";
                b.Fc ? d = b.ob ? "Ext link - File" : "File" : b.ob && (d = "Ext link");
                ub(a, (e = {}, e.counterKey = M(c), e.name = "event", e.data = (f = {}, f.schema = "Link click", f.name = (b.ob ? "external" : "internal") + " url: " + b.url, f), e));
                c = b.sender(h, c).then(nc(a, c, "lcl", (g = {}, g.prefix = d, g.id = c.id, g.url = b.url, g), b.lg));
                return Yc(a, "cl.p.s", c, k.callback || E, k.ctx)
            }

            function Gq(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function Hq(a, c, b, d) {
                var e = U(a),
                    f = e.hostname;
                e = e.href;
                if (c = Md(c).url) a = Uc(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function nj(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function Iq(a, c, b, d) {
                var e;
                if (a = Aa(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    I(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.Tf((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function Eh(a, c, b) {
                void 0 === b && (b = R);
                var d = vd(a);
                b(d);
                var e = u(d, Jq);
                Nd(a, c, function(f) {
                    f.ra.F(e)
                });
                return d
            }

            function Jq(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.T(n(b, "type"), b)
            }

            function Nd(a, c, b, d) {
                void 0 === b && (b = E);
                void 0 === d && (d = !1);
                var e = Kd(a);
                if (c && P(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = Qa(arguments),
                            h = g[0];
                        d && e.T(h);
                        g = f.apply(c, g);
                        d || e.T(h);
                        return g
                    };
                    a = {
                        ra: e,
                        unsubscribe: function() {
                            c.push = f
                        }
                    };
                    b(a);
                    x(e.T, c);
                    return a
                }
            }

            function oe(a) {
                a = J(a);
                var c = a.C("dataLayer", []);
                a.D("dataLayer", c);
                return c
            }

            function bn(a, c) {
                var b, d;
                I(c, A(S("ymetrikaEvent.type"), a)) || a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function oj(a, c) {
                var b = rd(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = C([a, b.oe], Kq),
                    g = u(f, Lq);
                b.$.F(["initToParent"], function(h) {
                    g(d, b.children[h[1].counterId])
                }).F(["parentConnect"], function(h) {
                    g(e, b.Ga[h[1].counterId])
                });
                return {
                    $: b.$,
                    Jj: function(h, k) {
                        return new K(function(l, m) {
                            b.oe(h, k, function(p, q) {
                                l([p, q])
                            });
                            T(a, u(Sa(), m), 5100, "is.o")
                        })
                    },
                    Sf: function(h) {
                        var k = {
                            Vf: [],
                            Be: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.children, k, h)
                    },
                    Tf: function(h) {
                        var k = {
                            Vf: [],
                            Be: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.Ga, k, h)
                    }
                }
            }

            function Lq(a, c, b) {
                c = ia(function(d) {
                    return !I(b.info.counterId, d.Be)
                }, c);
                x(function(d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                }, c)
            }

            function Kq(a, c, b, d, e) {
                return (new K(function(f, g) {
                    var h = ca(b),
                        k = w(d.resolve || R, td(f)),
                        l = w(d.reject || R, td(g));
                    d.resolve = k;
                    d.reject = l;
                    x(function(m) {
                        var p;
                        d.Be.push(+m);
                        var q = b[m],
                            r = T(a, u(Sa(), l), 5100, "is.m");
                        c(q.window, z(e, (p = {}, p.toCounter = Ia(m), p)), function(t, y) {
                            la(a, r);
                            d.Vf.push(m);
                            d.resolve && d.resolve(y)
                        })
                    }, h)
                }))["catch"](D(a, "if.b"))
            }

            function Mq(a) {
                var c = E,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    P(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    P(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        Qg: b,
                        ec: c,
                        R: 1 === d.length ? a[0] : ud(d)
                    }
                }
            }

            function Yc(a, c, b, d, e) {
                var f = C([a, d, e], cg);
                return b.then(f, function(g) {
                    f();
                    Ae(a, c, g)
                })
            }

            function dg(a, c) {
                return {
                    N: function(b, d) {
                        var e, f, g = (b.M || {}).R,
                            h = b.ba;
                        h = void 0 === h ? {} : h;
                        if (g && (pj(c, g), !h.da && b.K && b.J)) {
                            var k = Ab(a, g),
                                l = qj(a),
                                m = b.K.C("pv");
                            k && !b.J.nohit && (ub(a, (e = {}, e.counterKey = M(c), e.name = "params", e.data = (f = {}, f.val = g, f), e)), m ? encodeURIComponent(k).length > Ga.rg ? l.push([b.K, g]) : b.J["site-info"] = k : (h.da = k, b.ba = h, b.Qc || (b.Qc = {}), b.Qc.ii = !0))
                        }
                        d()
                    },
                    Da: function(b, d) {
                        var e = qj(a),
                            f = Aa(a, c),
                            g = f && f.params;
                        g && (f = ia(w(Zc, Ba(b.K)), e), x(function(h) {
                            g(h[1]);
                            h = Le(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }

            function Me(a, c) {
                return function(b) {
                    eg(a, c, b)
                }
            }

            function Nq(a, c) {
                fg(a)(function(b) {
                    delete b[c]
                })
            }

            function eg(a, c, b) {
                fg(a)(function(d) {
                    d[c] = z(d[c] || {}, b)
                })
            }

            function fg(a) {
                a = J(a);
                var c = a.C("dsjf") || Ha({});
                a.Ia("dsjf", c);
                return c
            }

            function Oq(a, c) {
                return function(b) {
                    var d, e, f = Aa(a, c);
                    if (f) {
                        var g = pc(a, M(c));
                        oa(b) ? Ua(ca(b)) ? (b = rj(b)) && Ua(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : g.log("fpeo") : g.log("fpno")
                    }
                }
            }

            function rj(a) {
                return N(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = oa(e);
                    if (!fa(e) && !f) return c;
                    e = f ? rj(e) : e;
                    Ua(e) && c.push([d, e]);
                    return c
                }, [], Oa(a))
            }

            function sj(a, c, b) {
                void 0 === b && (b = 0);
                c = Oa(c);
                c = N(function(d, e) {
                    var f = e[0],
                        g = e[1],
                        h = oa(g);
                    if (!fa(g) && !h) return d;
                    h ? g = sj(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = Pq(a, g) : "email" === f && (g = Qq(g)), g = tj(a, g)) : g = K.resolve(g);
                    d.push(g.then(function(k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return K.all(c)
            }

            function Qq(a) {
                var c = $a(a).replace(/^\++/gm, "").toLowerCase(),
                    b = c.lastIndexOf("@");
                if (-1 === b) return c;
                a = c.substr(0, b);
                b = c.substr(b + 1);
                if (!b || !Rq(a)) return c;
                b = b.replace("googlemail.com", "gmail.com");
                uj(b) && (b = "yandex.ru");
                "yandex.ru" === b ? a = a.replace(gg, "-") : "gmail.com" === b && (a = a.replace(gg, ""));
                c = jb(a, "+"); - 1 !== c && (a = a.slice(0, c));
                return a + "@" + b
            }

            function Rq(a) {
                return 1 > a.length || 64 < a.length ? !1 : Ii(function(c) {
                    if (1 > c.length) c = !1;
                    else if ('"' === c[0] && '"' === c[c.length - 1] && 2 < c.length) a: {
                        for (var b = 1; b + 2 < c.length; b += 1) {
                            var d = c.charCodeAt(b);
                            if (32 > d || 34 === d || 126 < d) {
                                c = !1;
                                break a
                            }
                            if (92 === d) {
                                if (b + 2 === c.length || 32 > c.charCodeAt(b + 1)) {
                                    c = !1;
                                    break a
                                }
                                b += 1
                            }
                        }
                        c = !0
                    } else c = Sq.test(c) ? !0 : !1;
                    return c
                }, a.split("."))
            }

            function Pq(a, c) {
                var b = $a(c),
                    d = Vb(c);
                return 10 > d.length || 13 < d.length || b.startsWith("+8") ? b : "8" === b[0] ? "7" + d.slice(1) : "+" === b[0] || Wc(a, +b[0]) ? d : "7" + d
            }

            function tj(a, c) {
                return new K(function(b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function(h) {
                            h = n(h, "target.result") || "";
                            var k = jb(h, ","); - 1 !== k ? b(h.substring(k + 1)) : d(ib("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function Aa(a, c) {
                var b = J(a).C("counters", {}),
                    d = M(c);
                return b[d]
            }

            function nc(a, c, b, d, e) {
                return C([a, M(c), e ? [b + ".p", e] : b, d], Mb)
            }

            function Mb(a, c, b, d) {
                pc(a, c).log(b, d)
            }

            function Tq(a, c) {
                function b(d, e, f) {
                    var g, h;
                    ub(a, (g = {}, g.name = "log", g.counterKey = c, g.data = (h = {}, h.args = Q(e) ? e : [e], h.type = d, h.variables = f, h), g))
                }
                return {
                    log: u("log", b),
                    error: u("error", b),
                    warn: u("warn", b)
                }
            }

            function ra(a, c) {
                var b = M(a);
                return vj()(Uq(b)).then(c)
            }

            function Vq(a, c, b) {
                var d, e;
                c = M(c);
                var f = hg(a);
                b = z({
                    eh: f(Z)
                }, b);
                ub(a, (d = {}, d.counterKey = c, d.name = "counterSettings", d.data = (e = {}, e.settings = b, e), d));
                return vj()(Wq(c, b))
            }

            function Wq(a, c) {
                return function(b) {
                    var d = b[a];
                    d ? (d.Bi = c, d.Gf = !0, d.Ff ? d.Ff(c) : d.promise = K.resolve(c)) : b[a] = {
                        promise: K.resolve(c),
                        Bi: c,
                        Gf: !0
                    }
                }
            }

            function ig(a) {
                return !Dd(a) && jg(a)
            }

            function Od(a) {
                return eb(a) ? u(a, Xq) : !1
            }

            function Fb(a) {
                if (a.fetch) {
                    var c = n(a, "AbortController");
                    return C([a, c ? new c : void 0], Yq)
                }
                return !1
            }

            function jg(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && Ea("sendBeacon", c) ? C([a, G(c, n(a, "navigator"))], Zq) : !1
            }

            function Zq(a, c, b, d) {
                return new K(function(e, f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = z(d.$a, (g = {}, g["force-urlencoded"] = 1, g));
                    g = b + "?" + Ic(h) + (d.da ? "&" + d.da : "");
                    return 2E3 < g.length ? f(Sa("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function Xq(a, c, b) {
                return new K(function(d, e) {
                    var f, g, h = "_ymjsp" + Xa(a),
                        k = z((f = {}, f.callback = h, f), b.$a),
                        l = C([a, h], $q);
                    a[h] = function(p) {
                        try {
                            l(), yc(m), d(p)
                        } catch (q) {
                            e(q)
                        }
                    };
                    k.wmode = "5";
                    var m = zc(a, (g = {}, g.src = wj(c, b, k), g));
                    if (!m) return l(), e(ib("jp.s"));
                    f = u(m, yc);
                    f = w(f, u(Sa(b.ha), e));
                    g = Pd(a, f, b.Pa || 1E4);
                    g = C([a, g], la);
                    m.onload = g;
                    m.onerror = w(l, g, f)
                })
            }

            function $q(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function $c(a) {
                var c = eb(a);
                return c ? C([a, c], ar) : !1
            }

            function ar(a, c, b, d) {
                return new K(function(e, f) {
                    var g = hc(a),
                        h = c("img"),
                        k = w(u(h, yc), u(Sa(d.ha), f)),
                        l = Pd(a, k, d.Pa || 3E3);
                    h.onerror = k;
                    h.onload = w(u(h, yc), u(null, e), C([a, l], la));
                    k = z({}, d.$a);
                    delete k.wmode;
                    h.src = wj(b, d, k);
                    Fd(a) && (z(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), g.appendChild(h))
                })
            }

            function Yq(a, c, b, d) {
                var e, f = z(d.Ab ? (e = {}, e.wmode = "7", e) : {}, d.$a),
                    g = c || {
                        signal: void 0,
                        abort: E
                    },
                    h = a.fetch(b + "?" + Ic(f), {
                        method: d.bd,
                        body: d.da,
                        credentials: !1 === d.Ie ? "omit" : "include",
                        headers: d.Za,
                        signal: g.signal
                    }),
                    k = u(d.ha, Sa);
                return new K(function(l, m) {
                    d.Pa && Pd(a, function() {
                        try {
                            g.abort()
                        } catch (p) {}
                        m(k())
                    }, d.Pa);
                    return h.then(function(p) {
                        if (!p.ok) {
                            if (d.le) return Va(xj(p));
                            he(d.ha)
                        }
                        return d.le ? p.text() : d.Ab ? p.json() : null
                    }).then(l)["catch"](u(k(), m))
                })
            }

            function Gb(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (br.test(a.location.host) && a.opera && P(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    }
                return c ? u(a, cr) : !1
            }

            function cr(a, c, b) {
                var d, e = new a.XMLHttpRequest,
                    f = b.da,
                    g = z(b.Ab ? (d = {}, d.wmode = "7", d) : {}, b.$a);
                return new K(function(h, k) {
                    e.open(b.bd || "GET", c + "?" + Ic(g), !0);
                    e.withCredentials = !1 !== b.Ie;
                    b.Pa && (e.timeout = b.Pa);
                    dr(Oa, Xb(function(m) {
                        e.setRequestHeader(m[0], m[1])
                    }))(b.Za);
                    var l = C([a, e, Sa(b.ha), b.Ab, b.le, h, k], er);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {}
                })
            }

            function er(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(xj(c));
                    else {
                        e = null;
                        if (d) try {
                            (e = zb(a, c.responseText)) || g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    }
                return h
            }

            function wj(a, c, b) {
                (b = Ic(b)) && (a += "?" + b);
                c.da && (a += (b ? "&" : "?") + c.da);
                return a
            }

            function fr(a, c, b) {
                var d = A(Zc, Yb[c] || Zb);
                x(function(e) {
                    return d.unshift(e)
                }, Ne);
                return A(w(Pc([a, b]), ma), d)
            }

            function yj(a, c) {
                var b = U(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!fa(c) || X(c)) return d;
                b = c.replace(zj, "");
                if (-1 !== b.search(gr)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = jb(d, e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"),
                    d[d.length - 1] = b, H("/", d);
                return ""
            }

            function Oe(a, c) {
                return {
                    N: function(b, d) {
                        var e = Aj(c);
                        e = C([b, e, d], hr);
                        ir(a, c, e)
                    },
                    Da: function(b, d) {
                        var e = b.K,
                            f = Aj(c);
                        if (e) {
                            var g = f.va;
                            f.We === e && g && (x(ma, g), f.va = null)
                        }
                        d()
                    }
                }
            }

            function hr(a, c, b) {
                var d = a.K;
                d ? Wf(a) ? (c.We = d, b()) : c.va ? c.va.push(b) : b() : b()
            }

            function Wf(a) {
                return (a = a.K) && a.C("pv") && !a.C("ar")
            }

            function ir(a, c, b) {
                if (Pe(a) && kb(a)) {
                    var d = jr(c);
                    if (!d.Th) {
                        d.Th = !0;
                        c = rd(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.va = [];
                        var e = function() {
                            d.va && (x(ma, d.va), d.va = null)
                        };
                        T(a, e, 3E3);
                        c.$.F(["initToChild"], e)
                    }
                    d.va ? d.va.push(b) : b()
                } else b()
            }

            function Bj(a, c) {
                return {
                    N: function(b, d) {
                        var e = b.K;
                        if (e && (!c || c.Rf)) {
                            var f = a.document.title;
                            b.M && b.M.title && (f = b.M.title);
                            var g = Jc("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
                            f = f.slice(0, Ga.sg);
                            e.D("t", f)
                        }
                        d()
                    }
                }
            }

            function Sb(a) {
                return function(c, b) {
                    return {
                        N: function(d, e) {
                            var f = d.K,
                                g = d.J;
                            f && g && x(function(h) {
                                var k = Qd[h],
                                    l = "bi",
                                    m = f;
                                k || (k = kg[h], l = "tel", m = qe(d));
                                k && (k = B(l + ":" + h, k, null)(c, b, d), m.Xb(h, k))
                            }, a || kr());
                            e()
                        }
                    }
                }
            }

            function lr(a, c) {
                var b = Rd(a);
                c.F(["initToParent"], function(d) {
                    var e = d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).F(["initToChild"], function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.T("parentConnect", [e, d])
                }).F(["parentConnect"], function(d) {
                    var e = d[1];
                    e.counterId && (b.Ga[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function mr(a) {
                if (Ea("MutationObserver", a.MutationObserver)) {
                    var c = Rd(a).children,
                        b = new a.MutationObserver(function() {
                            x(function(d) {
                                n(c[d], "window.window") || delete c[d]
                            }, ca(c))
                        });
                    Pb(a)(Ra(E, function() {
                        b.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }

            function nr(a, c) {
                return function(b, d) {
                    var e, f = {
                        rc: ka(a)(Z),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.rc = Ia(b[0]), f.key = parseFloat(b[1]), f.dir = Ia(b[2]));
                    z(d, c);
                    var g = (e = {
                        data: d
                    }, e.__yminfo = H(":", ["__yminfo", f.rc, f.key, f.dir]), e);
                    return {
                        meta: f,
                        Zf: Ab(a, g) || ""
                    }
                }
            }

            function Pb(a, c) {
                function b(e) {
                    n(c, d) ? e() : T(a, u(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return Ha(function(e, f) {
                    b(f)
                })
            }

            function Sd(a, c) {
                var b = c.Sd,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = Cc(a),
                    f = Pa(a),
                    g = ka(a)(lg),
                    h = Cj(a, c),
                    k = h[0];
                h = h[1];
                var l = e.C("d");
                Dj(a, c);
                var m = !1;
                !h && k && (h = k, m = !0);
                if (!h) h = H("", [g, Xa(a, 1E6, 999999999)]), m = !0;
                else if (!l || 15768E3 < g - Ia(l)) m = !0;
                m && !c.Ta && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
                f.D(d, h);
                return h
            }

            function or(a, c) {
                return !c.Ta && Dj(a, c)
            }

            function Cj(a, c) {
                var b = Pa(a),
                    d = Cc(a),
                    e = c.Sd || "uid";
                return [b.C(e), d.C(e)]
            }

            function Fc(a) {
                var c = J(a),
                    b = c.C("hitId");
                b || (b = Xa(a), c.D("hitId", b));
                return b
            }

            function le(a, c, b) {
                var d = Ma(c);
                return d && ij(a, c, va(["p", pr[d], "c"]), Yf, b)
            }

            function ke(a, c) {
                var b = oc(mg, a, c);
                if (!b) {
                    var d = oc("div", a, c);
                    d && (lb(mg + ",div", d).length || (b = d))
                }
                return b
            }

            function ij(a, c, b, d, e) {
                return N(function(f, g) {
                    var h = null;
                    g in Ej ? h = c.getAttribute && c.getAttribute(Ej[g]) : g in ad && (h = "p" === g ? ad[g](a, c, e) : "c" === g ? ad[g](a, c, d) : ad[g](a, c));
                    h && (h = h.slice(0, Fj[g] || 100), f[g] = ng[g] ? "" + ic(h) : h);
                    return f
                }, {}, b)
            }

            function fi(a, c, b) {
                if (od(a)) return Ca(b.querySelectorAll(c));
                var d = Gj(c.split(" "), b);
                return ia(function(e, f) {
                    return Rb(a)(e, d) === f
                }, d)
            }

            function Gj(a, c) {
                var b = sa([], a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? xc(u(b, Gj), Ca(d)) : Ca(d)
            }

            function fc(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = lb(a, c);
                return b && b.length ? b[0] : null
            }

            function lb(a, c) {
                if (!c || !c.querySelectorAll) return [];
                var b = c.querySelectorAll(a);
                return b ? Ca(b) : []
            }

            function lj(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function zc(a, c) {
                var b = eb(a);
                if (b) {
                    var d = a.document,
                        e = b("script");
                    e.src = c.src;
                    e.type = c.type || "text/javascript";
                    e.charset = c.charset || "utf-8";
                    e.async = c.async || !0;
                    try {
                        var f = d.getElementsByTagName("head")[0];
                        if (!f) {
                            var g = d.getElementsByTagName("html")[0];
                            f = b("head");
                            g && g.appendChild(f)
                        }
                        f.insertBefore(e, f.firstChild);
                        return e
                    } catch (h) {}
                }
            }

            function ai(a, c) {
                var b = Hj(a);
                I(c, b.rb) && (b.rb = ia(w(Ba(c), Kc), b.rb), b.rb.length || (yc(b.ib), b.ib = null))
            }

            function $h(a, c, b) {
                var d = Hj(c);
                I(b, d.rb) || d.rb.push(b);
                if (Wa(d.ib)) {
                    b = eb(a);
                    if (!b) return null;
                    b = b("iframe");
                    z(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = hc(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.ib = b
                } else(a = n(d.ib, "contentWindow")) && a.postMessage("frameReinit", "*");
                return d.ib
            }

            function qr(a, c) {
                var b = Q(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = H(", ", A(function(e) {
                        return "." + e
                    }, b));
                    return Ca(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return xc(w(Fa("getElementsByClassName", c), Ca), b);
                d = c.getElementsByTagName("*");
                b = "(" + H("|", b) + ")";
                return ia(u(b, kc), Ca(d))
            }

            function uf(a, c, b) {
                for (var d = "", e = Fe(), f = Ma(c) || "*"; c && c.parentNode && !I(f, ["BODY", "HTML"]);) d += e[f] || "*", d += Ij(a, c, b) || "", c = c.parentElement, f = Ma(c) || "*";
                return $a(d, 128)
            }

            function Ij(a, c, b) {
                if (a = Qe(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function Qe(a, c) {
                var b = n(a, "document");
                return c && c !== b.documentElement ? c === Lc(a) ? b.documentElement : n(c, "parentNode") : null
            }

            function Of(a, c) {
                var b = og(a, c),
                    d = b.left;
                b = b.top;
                var e = Re(a, c);
                return [d, b, e[0], e[1]]
            }

            function Re(a, c) {
                var b = n(a, "document");
                if (c === Lc(a) || c === b.documentElement) {
                    b = hc(a);
                    var d = Rc(a);
                    return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
                }
                return (b = Qc(c)) ? [b.width, b.height] : [c.offsetWidth,
                    c.offsetHeight
                ]
            }

            function og(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = Ma(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === Lc(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = Qc(b)) return b = ag(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function oc(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
                if (c.Element.prototype.closest && Ea("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = mi(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (od(c)) {
                    for (a = Ca((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Rb(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function od(a) {
                return !(!Ea("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }

            function zh(a, c, b) {
                var d = c.top,
                    e = c.bottom,
                    f = c.left,
                    g = b.w;
                b = b.h;
                a = a.Math;
                c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
                return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
            }

            function Jj(a) {
                return Se(a) && !Za(Ba(a.type), rr) ? Te(a) ? !a.checked : !a.value : sr(a) ? !a.value : tr(a) ? 0 > a.selectedIndex : !0
            }

            function Ma(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (fa(c)) return c;
                    c = a.tagName;
                    if (fa(c)) return c
                } catch (b) {}
            }

            function Kj(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Rb(a)(c, Ca(b))
            }

            function ur(a, c, b) {
                b = Jc("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (Ea("(Event|Object|constructor)", e) || pg(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = Jc("createEvent", n(a, "document"))) && P(a)) {
                        try {
                            d = a(c)
                        } catch (g) {}
                        d && d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function Qc(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.wf && c.wf & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function ag(a) {
                var c = Lc(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function Rc(a) {
                var c = ne(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = hc(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function ne(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return ha(c) || ha(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function hc(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : Lc(a) || b
            }

            function Lc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function kc(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function Mc(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function yc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Ob(a) {
                return a ? a.innerText || "" : ""
            }

            function Rf(a) {
                if (ha(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function Lj(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c;
                d && (d += "_");
                return {
                    Ld: vr(a),
                    C: function(e, f) {
                        var g = Mj(a, "" + d + e);
                        return Wa(g) && !X(f) ? f : g
                    },
                    D: function(e, f) {
                        Nj(a, "" + d + e, f);
                        return this
                    },
                    Gb: function(e) {
                        Oj(a, "" + d + e);
                        return this
                    }
                }
            }

            function Nj(a, c, b) {
                var d = qg(a);
                a = Ab(a, b);
                if (!Wa(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function Mj(a, c) {
                var b = qg(a);
                try {
                    return zb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function Oj(a, c) {
                var b = qg(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function qg(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function Ab(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b)
                } catch (d) {
                    return null
                }
            }

            function qe(a, c, b) {
                void 0 === b && (b = null);
                a.Ja || (a.Ja = vf());
                c && a.Ja.Xb(c, b);
                return a.Ja
            }

            function Ue(a) {
                return {
                    N: function(c, b) {
                        var d = a.document,
                            e = c.K;
                        if (e && rg(a)) {
                            var f = ja(a),
                                g = function(h) {
                                    rg(a) || (f.xb(d, Pj, g), b());
                                    return h
                                };
                            f.F(d, Pj, g);
                            e.D("pr", "1")
                        } else b()
                    }
                }
            }

            function Td(a) {
                return function(c, b, d) {
                    return function(e, f) {
                        var g = A(w(Zc, Pc([c, f]), ma), Qj[a] || []);
                        g = sa(g, d);
                        return Rj(c, b, g)(e)
                    }
                }
            }

            function Rj(a, c, b) {
                var d = $b(a, c);
                return function(e) {
                    return Sj(b, e, !0).then(function() {
                        var f = e.na || {},
                            g = f.Lh,
                            h = void 0 === g ? "" : g;
                        g = f.Ba;
                        var k = void 0 === g ? "" : g;
                        f = f.Mh;
                        f = A(function(l) {
                            return Ga.Ra + "//" + ("" + h + l || lc) + "/" + k
                        }, void 0 === f ? [lc] : f);
                        return d(e, f)
                    }).then(function(f) {
                        var g = f.Tc;
                        f = f.jg;
                        e.Ei = g;
                        e.Ij = f;
                        return Sj(b, e).then(u(g, R))
                    })
                }
            }

            function $b(a, c) {
                return function(b, d) {
                    return Tj(a, c, d, b)
                }
            }

            function Tj(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = z({
                        ha: []
                    }, d.ba),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                h.Za && h.Za["Content-Type"] || !h.da || (h.Za = z({}, h.Za, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.da = "site-info=" + ve(h.da));
                h.bd = h.da ? "POST" : "GET";
                h.$a = wr(a, d, l);
                h.Ba = (d.na || {}).Ba;
                h.ha.push(l);
                z(d.ba, h);
                g = "" + m + (d.Qc && d.Qc.ii ? "/1" : "");
                var p = 0;
                p = xr(a, g, h);
                return k(g, h).then(function(q) {
                    var r = p,
                        t, y;
                    ub(a, (t = {}, t.name = "requestSuccess", t.data = (y = {}, y.body = q, y.requestId = r, y), t));
                    return {
                        Tc: q,
                        jg: e
                    }
                })["catch"](function(q) {
                    var r = p,
                        t, y;
                    ub(a, (t = {}, t.name = "requestFail", t.data = (y = {}, y.error = q, y.requestId = r, y), t));
                    r = f + 1 >= c.length;
                    t = e + 1 >= b.length;
                    r && t && Va(q);
                    return Tj(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1)
                })
            }

            function wr(a, c, b) {
                var d = z({}, c.J);
                a = ka(a);
                c.K && (d["browser-info"] = Ka(c.K.l()).D("st", a(lg)).Ha());
                !d.t && (c = c.Ja) && (c.D("ti", b), d.t = c.Ha());
                return d
            }

            function xr(a, c, b) {
                var d, e, f, g = Xa(a),
                    h = b.ha,
                    k = b.da,
                    l = b.Za,
                    m = b.$a;
                b = b.bd;
                ub(a, (d = {}, d.name = "request", d.data = (e = {}, e.url = c, e.requestId = g, e.senderParams = (f = {}, f.rBody = k, f.debugStack = h, f.rHeaders = l, f.rQuery = m, f.verb = b, f), e), d));
                return g
            }

            function Uj(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !ha(d) && Vj(a[c], b, d)
            }

            function Vj(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function Sj(a, c, b) {
                void 0 === b && (b = !1);
                return new K(function(d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        N: f,
                        Da: f
                    });
                    var h = gc(g, function(k, l) {
                        var m = b ? k.N : k.Da;
                        if (m) try {
                            m(c, l)
                        } catch (p) {
                            h(yr), e(p)
                        } else l()
                    });
                    h(Wj)
                })
            }

            function Ub(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = ja(a);
                    var e = "__ym__promise_" + Xa(a) + "_" + Xa(a),
                        f = E;
                    d = D(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation && g.stopPropagation(), c())
                    });
                    f = b.F(a, ["message"], d);
                    a.postMessage(e, "*")
                } else T(a, c, 0, d)
            }

            function th(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = gc(c, b);
                nd(a, c, d)(Ra(D(a, e), E))
            }

            function nd(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = Xj);
                sg = Infinity === b;
                return Ha(function(e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(zr);
                        if (c(Ud)) return f(h), Yj(a);
                        sg ? (c(d(a, 1E4)), f(h), Yj(a)) : T(a, g, 100)
                    }
                    var h = [];
                    Ar(g)
                })
            }

            function Yj(a) {
                if (tg.length) {
                    var c = tg.shift();
                    sg ? c() : T(a, c, 100)
                } else ug = !1
            }

            function Ar(a) {
                ug ? tg.push(a) : (ug = !0, a())
            }

            function Hf(a) {
                return Ha(function(c, b) {
                    b(a)
                })
            }

            function Dp(a) {
                return Ha(function(c, b) {
                    a.then(b, c)
                })
            }

            function Br(a) {
                var c = [],
                    b = 0;
                return Ha(function(d, e) {
                    x(function(f, g) {
                        f(Ra(d, function(h) {
                            try {
                                c[g] = h, b += 1, b === a.length && e(c)
                            } catch (k) {
                                d(k)
                            }
                        }))
                    }, a)
                })
            }

            function Cp(a) {
                var c = [],
                    b = !1;
                return Ha(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    x(function(g) {
                        g(Ra(f, function(h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function Ra(a, c) {
                return function(b) {
                    return b(a, c)
                }
            }

            function gc(a, c) {
                return Ha({
                    Sa: a,
                    Od: c || R,
                    ve: !1,
                    xa: 0
                })
            }

            function Wj(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.xa += 1
                    }
                    b = !1;
                    a.Od(a.Sa[a.xa], function() {
                        d()
                    });
                    b || (a.xa += 1, d = u(a, Wj))
                }
                for (var b = !0; !Ud(a) && b;) c()
            }

            function Xj(a, c) {
                return function(b) {
                    var d = ka(a),
                        e = d(Z);
                    return Zj(function(f, g) {
                        d(Z) - e >= c && g(ak)
                    })(b)
                }
            }

            function vg(a, c) {
                return function(b) {
                    var d = ka(a),
                        e = d(Z);
                    return wg(function(f) {
                        d(Z) - e >= c && ak(f)
                    })(b)
                }
            }

            function wg(a) {
                return function(c) {
                    for (var b; c.Sa.length && !Ud(c);) b = c.Sa.pop(), b = c.Od(b, c.Sa), a(c);
                    return b
                }
            }

            function Cr(a) {
                Ud(a) && Va(ib("i"));
                var c = a.Od(a.Sa[a.xa]);
                a.xa += 1;
                return c
            }

            function zr(a) {
                a.ve = !1
            }

            function ak(a) {
                a.ve = !0
            }

            function yr(a) {
                a.xa = a.Sa.length
            }

            function Ud(a) {
                return a.ve || a.Sa.length <= a.xa
            }

            function Db(a) {
                a = ka(a);
                return Math.round(a(bk) / 50)
            }

            function bk(a) {
                var c = a.Aa,
                    b = c[1];
                a = c[0] && b ? b() : Z(a) - a.Nh;
                return Math.round(a)
            }

            function lg(a) {
                return Math.round(Z(a) / 1E3)
            }

            function sb(a) {
                return Math.floor(Z(a) / 1E3 / 60)
            }

            function Z(a) {
                var c = a.De;
                return 0 !== c ? c : xg(a.l, a.Aa)
            }

            function hg(a) {
                var c = ja(a),
                    b = ck(a),
                    d = {
                        l: a,
                        De: 0,
                        Aa: b,
                        Nh: xg(a, b)
                    },
                    e = b[1];
                b[0] && e || c.F(a, ["beforeunload", "unload"], function() {
                    0 === d.De && (d.De = xg(a, d.Aa))
                });
                return Ha(d)
            }

            function Dr(a) {
                return (10 > a ? "0" : "") + a
            }

            function Ti(a, c, b) {
                function d() {
                    f = 0;
                    g && (g = !1, f = T(a, d, b), e.T(h))
                }
                var e = Kd(a),
                    f, g = !1,
                    h;
                c.F(function(k) {
                    g = !0;
                    h = k;
                    f || d();
                    return E
                });
                return e
            }

            function Er(a, c) {
                return a.clearInterval(c)
            }

            function Fr(a, c, b, d) {
                return a.setInterval(D(a, "i.err." + (d || "def"), c), b)
            }

            function T(a, c, b, d) {
                return Pd(a, D(a, "d.err." + (d || "def"), c), b)
            }

            function vd(a) {
                var c = {};
                return {
                    F: function(b, d) {
                        x(function(e) {
                            n(c, e) || (c[e] = Kd(a));
                            c[e].F(d)
                        }, b);
                        return this
                    },
                    ga: function(b, d) {
                        x(function(e) {
                            n(c, e) && c[e].ga(d)
                        }, b);
                        return this
                    },
                    T: function(b, d) {
                        return n(c, b) ? D(a, "e." + d, c[b].T)(d) : []
                    }
                }
            }

            function Kd(a) {
                var c = [],
                    b = {};
                b.Dj = c;
                b.F = w(Fa("push", c), u(b, R));
                b.ga = w(vb(Rb(a))(c), vb(Fa("splice", c))(1), u(b, R));
                b.T = w(R, vb(ma), Gr(c));
                return b
            }

            function dk(a, c, b, d, e, f) {
                a = Hr(a);
                var g = a.F,
                    h = a.ga;
                f = f ? h : g;
                if (c[f])
                    if (a.Ni) c[f](b, d, e);
                    else c[f]("on" + b, d)
            }

            function B(a, c, b) {
                return function() {
                    return D(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function D(a, c, b, d, e) {
                var f = Va,
                    g = b || f;
                return function() {
                    var h = d;
                    try {
                        h = g.apply(e || null, arguments)
                    } catch (k) {
                        Ae(a, c, k)
                    }
                    return h
                }
            }

            function xg(a, c) {
                var b = c || ck(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && P(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function ck(a) {
                a = Ed(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = G(b, a));
                return [c, b]
            }

            function Ed(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }

            function Ae(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b && ("object" === typeof b ? (b.unk && Va(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
                Ir(d) || Za(u(d, db), Jr) || Kr(d) && .1 <= a.Math.random() || x(w(R, Pc(["jserrs", d, c, e]), ma), ek)
            }

            function he() {
                var a = Qa(arguments);
                return Va(Sa(a))
            }

            function Sa(a) {
                var c = "";
                Q(a) ? c = H(".", a) : fa(a) && (c = a);
                return ib("err.kn(" + Ga.cc + ")" + c)
            }

            function xj(a) {
                return ib("http." + a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50))
            }

            function Lr(a) {
                this.message = a
            }

            function ub(a, c) {
                if (Ve(a)) {
                    var b = c.oa;
                    if (b) {
                        var d = b.split(":");
                        b = d[1];
                        d = yg(te(d[0]));
                        if ("1" === b || d) return
                    }
                    b = fk(a);
                    1E3 === b.length && b.shift();
                    b.push(c)
                }
            }

            function We(a, c) {
                return -1 < Gc(U(a).href, "_ym_debug=" + c)
            }

            function ni(a, c, b) {
                zg(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = gk(a);
                (d = d && d.metrika_enabled) && hk(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function zg(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (oi(a, ze, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + Mr(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h += "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(Nr, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")), g || (ik(a)[c] = b)
                    } catch (l) {}
                }
            }

            function ze(a, c) {
                var b = ik(a);
                return b ? b[c] || null : null
            }

            function gk(a) {
                try {
                    var c = a.document.cookie;
                    if (!ha(c)) {
                        var b = {};
                        x(function(d) {
                            d = d.split("=");
                            var e = d[1];
                            b[$a(d[0])] = $a(jk(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {}
                return null
            }

            function oi(a, c, b) {
                return !Ag.length || I(b, Vd) ? !0 : N(function(d, e) {
                    return d && e(a, c, b)
                }, !0, Ag)
            }

            function Ic(a) {
                return a ? w(Oa, Zf(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    X(e) || ha(e) || c.push(d + "=" + ve(e));
                    return c
                }, []), Ce("&"))(a) : ""
            }

            function Or(a) {
                return a ? w(Xb(function(c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], ha(b) ? void 0 : jk(b)]
                }), Zf(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function jk(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }

            function ve(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a = H("", ia(function(c) {
                    return 55296 >= c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }

            function $a(a, c) {
                if (a) {
                    var b = kk ? kk.call(a) : ("" + a).replace(zj, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function uj(a) {
                var c = a.match(lk);
                if (c) {
                    a = c[1];
                    if (c = c[2]) return I(c, Bg) ? c : !1;
                    if (a) return Bg[0]
                }
                return !1
            }

            function U(a) {
                return N(function(c, b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, Pr)
            }

            function mk(a) {
                return N(function(c, b) {
                    c[mf[b[0]].ea] = b[1];
                    return c
                }, {}, Oa(a))
            }

            function qc(a) {
                x(function(c) {
                    var b = c[1];
                    mf[c[0]] = {
                        ea: b.ea,
                        Ua: b.Ua
                    }
                }, Oa(a))
            }

            function jm(a, c, b, d, e) {
                var f = "object" === typeof a ? a : {
                    id: a,
                    ca: d,
                    nc: e,
                    R: b
                };
                a = N(function(g, h) {
                    var k = h[1],
                        l = k.Ua;
                    k = f[k.ea];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, Oa(c));
                pj(a, a.R || {});
                return a
            }

            function Qr(a) {
                a = M(a);
                return rc[a] && rc[a].Ui || null
            }

            function nk(a) {
                a = M(a);
                return rc[a] && rc[a].Ti
            }

            function pj(a, c) {
                var b = M(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                rc[b] || (rc[b] = {});
                if (d || e) rc[b].Ti = d, rc[b].Ui = e
            }

            function ok(a) {
                return Xe(a) || Cd(a) || /mobile/i.test(nb(a)) || !X(n(a, "orientation"))
            }

            function zf(a, c) {
                if (Wd(a) && c) {
                    var b = nb(a).match(Cg);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function Af(a, c) {
                var b = nb(a);
                return b && (b = b.match(Rr)) && 1 < b.length ? Ia(b[1]) >= c : !1
            }

            function rg(a) {
                return I("prerender", A(u(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Xa(a, c, b) {
                var d = X(b);
                X(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function Sr() {
                var a = Qa(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) Nb(b, d) && (c[d] = b[d]);
                    Nb(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function Tr(a) {
                return function(c) {
                    return c ? a(c) : []
                }
            }

            function pk(a) {
                return X(a) ? [] : Dg(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], qk(a))
            }

            function qk(a) {
                var c = [],
                    b;
                for (b in a) Nb(a, b) && c.push(b);
                return c
            }

            function te(a) {
                try {
                    return parseInt(a, 10)
                } catch (c) {
                    return null
                }
            }

            function Wc(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c)
            }

            function Ur(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function sa(a, c) {
                x(w(R, Fa("push", a)), c);
                return a
            }

            function Eg(a, c) {
                return Array.prototype.sort.call(c, a)
            }

            function Ye(a) {
                return a.splice(0, a.length)
            }

            function Ca(a) {
                return a ? Q(a) ? a : Xd ? Xd(a) : "number" === typeof a.length && 0 <= a.length ? rk(a) : [] : []
            }

            function Vr(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (b in c && a.call(c, c[b], b)) return !0;
                return !1
            }

            function Wr(a, c) {
                return N(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(Q(d) ? d : [d])
                }, [], c)
            }

            function sk(a, c) {
                return N(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function Xr(a, c) {
                if (!Wd(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function Yr(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function Zr(a, c) {
                return 1 <= tk(Ba(a), c).length
            }

            function $r(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c, c[b], b)) return c[b]
            }

            function tk(a, c) {
                return Dg(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function Bd(a, c, b) {
                return b ? a : c
            }

            function as(a, c) {
                return N(function(b, d, e) {
                    return b ? !!a(d, e) : !1
                }, !0, c)
            }

            function cg(a, c, b) {
                try {
                    if (P(c)) {
                        var d = Qa(arguments).slice(3);
                        ha(b) ? c.apply(null, d) : c.apply(b, d)
                    }
                } catch (e) {
                    Pd(a, u(e, Va), 0)
                }
            }

            function Va(a) {
                throw a;
            }

            function Pd(a, c, b) {
                return Jc("setTimeout", a)(c, b)
            }

            function la(a, c) {
                return Jc("clearTimeout", a)(c)
            }

            function Jd() {
                return []
            }

            function Nc() {
                return {}
            }

            function Jc(a, c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function ob(a, c, b) {
                return function() {
                    var d = J(arguments[0]),
                        e = b ? "global" : "m1272",
                        f = d.C(e, {}),
                        g = n(f, a);
                    g || (g = v(c), f[a] = g, d.D(e, f));
                    return g.apply(null, arguments)
                }
            }

            function ud(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                Cb(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : Nb(b, d) || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function Yd(a) {
                a = a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    Ia: function(b, d) {
                        Fg.call(c, b) || (c[b] = d);
                        return this
                    },
                    D: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    C: function(b, d) {
                        var e = c[b];
                        return Fg.call(c, b) || X(d) ? e : d
                    }
                }
            }

            function Nb(a, c) {
                return ha(a) ? !1 : Fg.call(a, c)
            }

            function v(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : R;
                return function() {
                    var f = Qa(arguments),
                        g = e.apply(void 0, f),
                        h = pf(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function Rb(a) {
                if (Gg) return Gg;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b = a.Array && a.Array.prototype && pa(a.Array.prototype.indexOf, "indexOf");
                a = void 0;
                return Gg = a = c && b ? function(d, e) {
                    return b.call(e, d)
                } : bs
            }

            function bs(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function ma(a, c) {
                return c ? a(c) : a()
            }

            function w() {
                var a = Qa(arguments),
                    c = a.shift();
                return function() {
                    var b = c.apply(void 0, arguments);
                    return N(uk, b, a)
                }
            }

            function Zf(a, c) {
                return C([a, c], N)
            }

            function Dg(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function fb(a) {
                return Fa("test", a)
            }

            function Fa(a, c) {
                return G(c[a], c)
            }

            function u(a, c) {
                return G(c, null, a)
            }

            function C(a, c) {
                return G.apply(void 0, ie([c, null], a))
            }

            function cs(a) {
                return function() {
                    var c = Qa(arguments);
                    return a.apply(c[0], [c[1]].concat(c.slice(2)))
                }
            }

            function ds() {
                var a = Qa(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e = ie(d, Qa(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, ie([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && vk(f, e, b);
                        delete b[f];
                        return e
                    }
                    return vk(c, e)
                }
            }

            function vk(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                P(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function Qa(a) {
                if (Xd) try {
                    return Xd(a)
                } catch (c) {}
                return rk(a)
            }

            function rk(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function oa(a) {
                return !Wa(a) && !X(a) && "[object Object]" === Object.prototype.toString.call(a)
            }

            function ha(a) {
                return X(a) || Wa(a)
            }

            function P(a) {
                return "function" === typeof a
            }

            function vb(a) {
                return function(c) {
                    return function(b) {
                        return a(b, c)
                    }
                }
            }

            function ta(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }

            function uk(a, c) {
                return c(a)
            }

            function Eq(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(gg, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function es(a) {
                return "" + a
            }

            function db(a, c) {
                return !(!a || -1 === jb(a, c))
            }

            function Gc(a, c) {
                return jb(a, c)
            }

            function fs(a, c) {
                for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
                    b = a[e] === c[b] ? b + 1 : 0;
                    if (b === c.length) return e - c.length + 1;
                    if (!b && e > d) break
                }
                return -1
            }

            function fa(a) {
                return "string" === typeof a
            }

            function pa(a, c) {
                return Ea(c, a) && a
            }

            function Ea(a, c) {
                var b = Ze(a, c);
                c && !b && Hg.push([a, c]);
                return b
            }

            function Ze(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                    f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function E() {}

            function Ig(a, c) {
                Ig = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof
                Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                };
                return Ig(a, c)
            }

            function Kc(a) {
                return !a
            }

            function gb(a, c) {
                return c
            }

            function R(a) {
                return a
            }

            function Na(a, c) {
                function b() {
                    this.constructor = a
                }
                Ig(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function ie() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function n(a, c) {
                return a ? N(function(b, d) {
                    if (ha(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }

            function gs(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }

            function hs() {}

            function is(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }

            function La(a) {
                if (!(this instanceof La)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.Ma = 0;
                this.Je = !1;
                this.Qa = void 0;
                this.Bb = [];
                wk(a, this)
            }

            function xk(a, c) {
                for (; 3 === a.Ma;) a = a.Qa;
                0 === a.Ma ? a.Bb.push(c) : (a.Je = !0, La.Ke(function() {
                    var b = 1 === a.Ma ? c.ni : c.ui;
                    if (null === b)(1 === a.Ma ? Jg : Zd)(c.promise, a.Qa);
                    else {
                        try {
                            var d = b(a.Qa)
                        } catch (e) {
                            Zd(c.promise, e);
                            return
                        }
                        Jg(c.promise, d)
                    }
                }))
            }

            function Jg(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof La) {
                            a.Ma = 3;
                            a.Qa = c;
                            Kg(a);
                            return
                        }
                        if ("function" === typeof b) {
                            wk(is(b, c), a);
                            return
                        }
                    }
                    a.Ma = 1;
                    a.Qa = c;
                    Kg(a)
                } catch (d) {
                    Zd(a, d)
                }
            }

            function Zd(a, c) {
                a.Ma = 2;
                a.Qa = c;
                Kg(a)
            }

            function Kg(a) {
                2 === a.Ma && 0 === a.Bb.length && La.Ke(function() {
                    a.Je || La.zg(a.Qa)
                });
                for (var c = 0, b = a.Bb.length; c < b; c++) xk(a, a.Bb[c]);
                a.Bb = null
            }

            function js(a, c, b) {
                this.ni = "function" === typeof a ? a : null;
                this.ui = "function" === typeof c ? c : null;
                this.promise = b
            }

            function wk(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, Jg(c, d))
                    }, function(d) {
                        b || (b = !0, Zd(c, d))
                    })
                } catch (d) {
                    b || (b = !0, Zd(c, d))
                }
            }

            function hk(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return zg(a, c, "", -100, b, d, e)
            }

            function Sc(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = ks(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    Gb: function(g, h, k) {
                        hk(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    C: function(g) {
                        return ze(a, "" + c + g + f)
                    },
                    D: function(g, h, k, l, m) {
                        zg(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function zb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function ic(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function km(a, c, b, d) {
                var e = yk[b];
                return e ? function() {
                    var f = Qa(arguments);
                    try {
                        var g = d.apply(void 0, f);
                        var h = J(a);
                        h.Ia("mt", {});
                        var k = h.C("mt"),
                            l = k[e];
                        k[e] = l ? l + 1 : 1
                    } catch (m) {
                        Va(m)
                    }
                    return g
                } : d
            }

            function Uc(a, c) {
                var b = ls(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }

            function zk(a) {
                return (a = U(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function ms(a, c) {
                var b = zk(a);
                Ak = Fr(a, function() {
                    var d = zk(a);
                    d !== b && (c(), b = d)
                }, 200, "t.h");
                return G(Er, null, a, Ak)
            }

            function ns(a, c, b, d) {
                var e, f, g = c.ca,
                    h = c.Ge,
                    k = c.yc,
                    l = J(a),
                    m = Ka((e = {}, e.wh = 1, e.pv = 1, e));
                e = n(d, "isTrusted");
                d && !ha(e) && m.D("ite", Bb(e));
                je(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
                h && m.D("ut", "1");
                g = l.C("lastReferrer");
                d = U(a).href;
                k = {
                    J: (f = {}, f["page-url"] = k || d, f["page-ref"] = g, f),
                    K: m
                };
                b(k, c)["catch"](D(a, "g.s"));
                l.D("lastReferrer", d)
            }

            function os(a, c, b) {
                function d() {
                    r || (q = !0, t = !1, r = !0, f())
                }

                function e() {
                    m = !0;
                    k(!1);
                    c()
                }

                function f() {
                    la(a, l);
                    if (m) k(!1);
                    else {
                        var L = Math.max(0, b - (t ? y : y + p(Z) - F));
                        L ? l = T(a, e, L, "u.t.d.c") : e()
                    }
                }

                function g() {
                    t = q = r = !0;
                    y += p(Z) - F;
                    F = p(Z);
                    f()
                }

                function h() {
                    q || r || (y = 0);
                    F = p(Z);
                    q = r = !0;
                    t = !1;
                    f()
                }

                function k(L) {
                    L = L ? O.F : O.xb;
                    L(a, ["blur"], g);
                    L(a, ["focus"], h);
                    L(a.document, ["click", "mousemove", "keydown", "scroll"], d)
                }
                var l = 0,
                    m = !1;
                if (pg(a)) return l = T(a, c, b, "u.t.d"), C([a, l], la);
                var p = ka(a),
                    q = !1,
                    r = !1,
                    t = !0,
                    y = 0,
                    F = p(Z),
                    O = ja(a);
                k(!0);
                f();
                return function() {
                    la(a, l);
                    k(!1)
                }
            }

            function lf(a, c, b, d) {
                return function() {
                    if (Aa(a, c)) {
                        var e = Qa(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }

            function wb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function sc(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function bd(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            }

            function pb(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function ya(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function Bk(a) {
                a = ya(a, [0, a[0] >>> 1]);
                a = wb(a, [4283543511, 3981806797]);
                a = ya(a, [0, a[0] >>> 1]);
                a = wb(a, [3301882366, 444984403]);
                return a = ya(a, [0, a[0] >>> 1])
            }

            function ps(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - b.length % 16;
                d = {
                    V: [0, d],
                    X: [0, d]
                };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24],
                        k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = wb(h, $e);
                    h = bd(h, 31);
                    h = wb(h, af);
                    g.V = ya(g.V, h);
                    g.V = bd(g.V, 27);
                    g.V = sc(g.V, g.X);
                    g.V = sc(wb(g.V, [0, 5]), [0, 1390208809]);
                    k = wb(k, af);
                    k = bd(k, 33);
                    k = wb(k, $e);
                    g.X = ya(g.X, k);
                    g.X = bd(g.X, 31);
                    g.X = sc(g.X, g.V);
                    g.X = sc(wb(g.X, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h = ya(h, pb([0, b.charCodeAt(f + 14)], 48));
                    case 14:
                        h = ya(h, pb([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = ya(h, pb([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = ya(h, pb([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = ya(h, pb([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = ya(h, pb([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        h = ya(h, [0, b.charCodeAt(f + 8)]), h = wb(h, af), h = bd(h, 33), h = wb(h, $e), d.X = ya(d.X, h);
                    case 8:
                        g = ya(g, pb([0, b.charCodeAt(f + 7)], 56));
                    case 7:
                        g = ya(g, pb([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = ya(g, pb([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = ya(g, pb([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g = ya(g, pb([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = ya(g, pb([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = ya(g, pb([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        g = ya(g, [0, b.charCodeAt(f)]), g = wb(g, $e), g = bd(g, 31), g = wb(g, af), d.V = ya(d.V, g)
                }
                d.V = ya(d.V, [0, b.length]);
                d.X = ya(d.X, [0, b.length]);
                d.V = sc(d.V, d.X);
                d.X = sc(d.X, d.V);
                d.V = Bk(d.V);
                d.X = Bk(d.X);
                d.V = sc(d.V, d.X);
                d.X = sc(d.X, d.V);
                return ("00000000" + (d.V[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.V[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.X[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.X[1] >>> 0).toString(16)).slice(-8)
            }

            function $d(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = lb('[itemprop~="' + b + '"]', c);
                return d ? ia(function(e) {
                    return e.parentNode && oc("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function hb(a, c, b) {
                return (a = $d(a, c, b)) && a.length ? a[0] : null
            }

            function ab(a) {
                if (!a) return "";
                a = Q(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Ob(a[0]) : ""
            }

            function Ck(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : ab(a) : ""
            }

            function yd(a, c, b) {
                a = c && (db(c.className, "ym-disable-keys") || db(c.className, "-metrika-nokeys"));
                return b && c ? a || !!qr(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function Kf(a, c) {
                return Se(c) ? "password" === c.type || c.name && I(c.name.toLowerCase(), Dk) || c.id && I(c.id.toLowerCase(), Dk) : !1
            }

            function Ek(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                sa(a, [b >> 8, b & 255])
            }

            function Wb(a, c) {
                sa(a, [c & 255])
            }

            function mb(a, c, b) {
                return -1 !== Rb(a)(b, qs) ? (Wb(c, b), !1) : !0
            }

            function V(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) sa(a, [b & 127 | 128]), b >>= 7;
                sa(a, [b])
            }

            function Lg(a, c) {
                V(a, c.length);
                for (var b = 0; b < c.length; b += 1) V(a, c.charCodeAt(b))
            }

            function Mg(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) Ek(a, b.charCodeAt(d))
            }

            function rs(a, c) {
                var b = [];
                if (mb(a, b, 27)) return [];
                V(b, c);
                return b
            }

            function ss(a, c) {
                var b = Ma(c);
                if (!b) return c[Ya] = -1, null;
                var d = +c[Ya];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e;) {
                        if (e.attributes.nj) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = Qe(a, c),
                    g = f && f[Ya] ? f[Ya] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = ts()[b];
                h || (e |= 2);
                var k = Ij(a, c);
                k || (e |= 4);
                var l = Of(a, c);
                (f = f ? Of(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                Bc[d].yf = l[0] + "x" + l[1];
                Bc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (mb(a, f, 1)) return null;
                V(f, d);
                Wb(f, e);
                V(f, g);
                h ? Wb(f, h) : Mg(f, b);
                k && V(f, k);
                e & 8 || (V(f, l[0]), V(f, l[1]), V(f, l[2]), V(f, l[3]));
                e & 32 && Mg(f, c.id);
                Wb(f, 0);
                return f
            }

            function us(a, c) {
                var b = c[Ya];
                if (!b || 0 > b || !Mf(c) || !c.form || li(a, c.form)) return [];
                var d = Kj(a, c.form);
                if (0 > d) return [];
                if (Se(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        rc: 0,
                        rj: 0,
                        "datetime-local": 0,
                        email: 0,
                        wf: 0,
                        Hj: 0,
                        search: 0,
                        Mj: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Oj: 0,
                        password: 2,
                        Gj: 3,
                        pj: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        kj: 1,
                        lj: 5
                    };
                    var f = Ma(c);
                    e = X(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    }
                if (0 > f) return [];
                g = [];
                if (mb(a, g, 7)) return [];
                V(g, b);
                V(g, d);
                V(g, e);
                Lg(g, c.name || "");
                V(g, f);
                return g
            }

            function Ac(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !vo(a, c, b); c = Qe(a, c)) d.push(c);
                x(function(e) {
                    Bc.counter += 1;
                    var f = Bc.counter;
                    e[Ya] = f;
                    Bc[f] = {};
                    f = ss(a, e);
                    e = us(a, e);
                    f && e && (sa(b, f), sa(b, e))
                }, vs(d));
                return b
            }

            function ws(a) {
                var c = a.qa;
                if (!xd || c && !c.fromElement) return ii(a)
            }

            function xs(a) {
                var c = a.qa;
                if (c && !c.toElement) return Nf(a)
            }

            function Fk(a) {
                var c = Mc(a.qa);
                if (c && ye(c)) {
                    var b = hi(a, c),
                        d = b.concat;
                    var e = Db(a.l),
                        f = [];
                    mb(a.l, f, 17) ? a = [] : (V(f, e), V(f, c[Ya]), a = f);
                    return d.call(b, a)
                }
            }

            function Gk(a) {
                var c = a.l,
                    b = a.qa.target;
                if (b && ye(b)) {
                    c = Ac(c, b);
                    var d = c.concat;
                    var e = Db(a.l),
                        f = [];
                    mb(a.l, f, 18) ? a = [] : (V(f, e), V(f, b[Ya]), a = f);
                    return d.call(c, a)
                }
            }

            function Hk(a) {
                var c = a.l,
                    b = Mc(a.qa);
                if (!b || Kf(c, b) || yd(c, b)) return [];
                if (Mf(b)) {
                    var d = J(c).C("isEU"),
                        e = Vc(c, b, d),
                        f = e.Va;
                    d = e.qb;
                    e = e.hb;
                    if (Te(b)) var g = b.checked;
                    else g = b.value, g = f ? H("", Ik(g.split(""))) : g;
                    c = Ac(c, b);
                    f = c.concat;
                    var h = Db(a.l);
                    d = d && !e;
                    e = [];
                    mb(a.l, e, 39) ? a = [] : (V(e, h), V(e, b[Ya]), Mg(e, String(g)), Wb(e, d ? 1 : 0), a = e);
                    return f.call(c, a)
                }
            }

            function bf(a) {
                var c = a.l,
                    b = a.qa,
                    d = Mc(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = u(e, sa);
                d && ye(d) ? f(hi(a, d)) : f(Ac(c, d));
                var g = jj(c, b);
                f = e.concat;
                a = Db(a.l);
                var h = b.type,
                    k = [g.x, g.y];
                g = b.which;
                b = b.button;
                var l;
                var m = Re(c, d);
                var p = m[0];
                for (m = m[1]; d && (!p || !m);)
                    if (d = Qe(c, d)) m = Re(c, d), p = m[0], m = m[1];
                d ? (p = d[Ya], !p || 0 > p ? c = [] : (m = (l = {}, l.mousemove = 2, l.click = 32, l.dblclick = 33, l.mousedown = 4, l.mouseup = 30, l.touch = 12, l)[h]) ? (l = [], d = og(c, d), mb(c, l, m) ? c = [] : (V(l, a), V(l, p), V(l, Math.max(0, k[0] - d.left)), V(l, Math.max(0, k[1] - d.top)), /^mouse(up|down)|click$/.test(h) && (c = g || b, Wb(l, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = l)) : c = []) : c = [];
                return f.call(e, c)
            }

            function ys(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Wa(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = Vc(b, c).Va || yd(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = Vc(b, d).Va || yd(b, d, !0), f += 1;
                if (e !== Ng) return Ng = e, d = d ? H("", Ik(e.split(""))) : e, e = Db(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], mb(a.l, c, 29) ? a = [] : (V(c, e), Lg(c, b), Lg(c, d), a = c), a
            }

            function zs(a) {
                return bf(a).concat(ys(a) || [])
            }

            function Jk(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function Kk(a) {
                var c = [];
                Og || (Og = !0, Ng && sa(c, rs(a.l, Db(a.l))), Ub(a.l, function() {
                    Og = !1
                }, "fv.c"));
                return c
            }

            function Lk(a, c, b, d) {
                c = Mc(c);
                if (!c || Pf(a, c)) return [];
                var e = Vc(a, c),
                    f = e.qb,
                    g = e.hb;
                e = e.Va;
                var h = J(a);
                if (!g && (f && h.C("isEU") || yd(a, c))) a = [];
                else {
                    f = Ac(a, c);
                    g = f.concat;
                    var k = Db(a);
                    h = [];
                    if (mb(a, h, 38)) a = [];
                    else {
                        V(h, k);
                        Ek(h, b);
                        Wb(h, d);
                        a = c[Ya];
                        if (!a || 0 > a) a = 0;
                        V(h, a);
                        Wb(h, e ? 1 : 0);
                        a = h
                    }
                    a = g.call(f, a)
                }
                return a
            }

            function As(a) {
                var c = a.l,
                    b = a.qa,
                    d = b.keyCode,
                    e = Jk(b),
                    f = [],
                    g = u(f, sa);
                if ({
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1
                    }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(Lk(c, b, d, e | 16)), Pg = !1, Ub(c, function() {
                    Pg = !0
                }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(Kk(a));
                return f
            }

            function Bs(a) {
                var c = a.l;
                a = a.qa;
                var b = [];
                Pg && !Qg && 0 !== a.which && (sa(b, Lk(c, a, a.charCode || a.keyCode, Jk(a))), Qg = !0, Ub(c, function() {
                    Qg = !1
                }, "fv.kp"));
                return b
            }

            function Mk(a) {
                var c = a.l,
                    b = Mc(a.qa);
                if (!b || li(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) Jj(e[f]) || sa(d, Ac(c, e[f]));
                    a = Db(a.l);
                    e = Kj(c, b);
                    if (0 > e) c = [];
                    else {
                        f = b.elements;
                        var g = f.length;
                        b = [];
                        for (var h = 0; h < g; h += 1)
                            if (!Jj(f[h])) {
                                var k = f[h][Ya];
                                k && 0 < k && b.push(k)
                            }
                        f = [];
                        if (mb(c, f, 11)) c = [];
                        else {
                            V(f, a);
                            V(f, e);
                            V(f, b.length);
                            for (c = 0; c < b.length; c += 1) V(f, b[c]);
                            c = f
                        }
                    }
                    sa(d, c)
                }
                return d
            }

            function Cs(a) {
                var c = a.flush;
                a = Mc(a.qa);
                "BODY" === Ma(a) && c()
            }

            function Nn(a, c) {
                var b, d = Mc(c),
                    e = Ga.lc,
                    f = Yd(a);
                if (d && kc("ym-advanced-informer", d)) {
                    var g = f.C("ifc", 0) + 1;
                    f.D("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Ia(d.getAttribute("data-cid") || "");
                    if (h || 0 === h)(e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.D("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function sh(a, c, b, d) {
                return function() {
                    var e = Qa(arguments);
                    e = d.apply(void 0, e);
                    return X(e) ? Aa(a, c) : e
                }
            }

            function rh(a, c, b, d) {
                return D(a, "cm." + b, d)
            }

            function im(a, c, b, d, e) {
                return b.length && e ? C(N(function(f, g, h) {
                    return b[h] ? f.concat(C([a,
                        c, d
                    ], g)) : f
                }, [], b), w)()(e) : e
            }
            var cd = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "1gvp3hi7cuop7kmz85fbovrof",
                    host: "mc.yandex.ru"
                },
                Hg = [],
                gg = /\./g,
                Nk = pa(String.prototype.indexOf, "indexOf"),
                jb = Nk ? function(a, c) {
                    return Nk.call(a, c)
                } : fs,
                Ba = ta(function(a, c) {
                    return a === c
                }),
                td = ta(function(a, c) {
                    a(c);
                    return c
                }),
                Ha = ta(uk),
                Wa = Ba(null),
                X = Ba(void 0),
                Xd = pa(Array.from, "from"),
                Ok = pa(Function.prototype.bind, "bind"),
                G = Ok ? cs(Ok) : ds,
                Pk = pa(Array.prototype.reduce, "reduce"),
                Cb = Pk ? function(a, c, b) {
                    return Pk.call(b, a, c)
                } : Dg,
                N = Cb,
                dr = w,
                Ge = w(R, ma),
                Gg, pf = Rb(window),
                cn = vb(pf),
                Fg = Object.prototype.hasOwnProperty,
                J = v(Yd),
                S = vb(n),
                Ua = S("length"),
                Pc = ta(C),
                Si = ta(Fa),
                Qk = pa(Array.prototype.every, "every"),
                Ii = Qk ? function(a, c) {
                    return Qk.call(c, a)
                } : as,
                Qb = C([1, null], Bd),
                Bb = C([1, 0], Bd),
                Hb = Boolean,
                Rk = pa(Array.prototype.filter, "filter"),
                ia = Rk ? function(a, c) {
                    return Rk.call(c, a)
                } : tk,
                va = u(Hb, ia),
                Ds = ta(ia),
                Sk = pa(Array.prototype.find, "find"),
                tb = Sk ? function(a, c) {
                    return Sk.call(c, a)
                } : $r,
                Tk = pa(Array.prototype.includes, "includes"),
                I = Tk ? function(a, c, b) {
                    return Tk.call(c, a, b)
                } : Zr,
                vc = vb(I),
                Uk = pa(Array.prototype.join, "join"),
                H = Uk ? function(a, c) {
                    return Uk.call(c, a)
                } : Yr,
                Ce = ta(H),
                Vk = v(function(a) {
                    var c = n(a, "navigator") || {};
                    a = n(c, "userAgent") || "";
                    c = n(c, "vendor") || "";
                    return {
                        mf: -1 < jb(c, "Apple"),
                        kg: a
                    }
                }),
                nb = v(S("navigator.userAgent")),
                Cg = /Firefox\/([0-9]+)/i,
                Wd = v(function(a) {
                    var c = n(a, "document.documentElement.style"),
                        b = n(a, "InstallTrigger");
                    a = -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(Cg);
                    Cg.lastIndex = 0;
                    return !(!(c && "MozAppearance" in c) || ha(b)) || a
                }),
                Wk = pa(Array.isArray, "isArray"),
                Q = Wk ? function(a) {
                    return Wk(a)
                } : gs,
                Xk = pa(Array.prototype.map, "map"),
                A = Xk && Xr(window, Array.prototype.map) ? function(a, c) {
                    return c && 0 < c.length ? Xk.call(c, a) : []
                } : sk,
                x = A,
                Yk = pa(Array.prototype.flatMap, "flatMap"),
                xc = Yk ? function(a, c) {
                    return Yk.call(c, a)
                } : Wr,
                Xb = ta(A),
                Gr = vb(A),
                Zk = pa(Array.prototype.some, "some"),
                Za = Zk ? function(a, c) {
                    return Zk.call(c, a)
                } : Vr,
                Le = v(Rb),
                Zc = S("0"),
                Es = ta(Eg),
                $k = pa(Array.prototype.reverse, "reverse"),
                vs = $k ? function(a) {
                    return $k.call(a)
                } : Ur,
                al = vb(parseInt),
                Ia = al(10),
                Rg = al(2),
                bl = pa(Object.keys, "keys"),
                cl = pa(Object.entries, "entries"),
                Oa = cl ? Tr(cl) : pk,
                ca = bl ? function(a) {
                    return bl(a)
                } : qk,
                dl = pa(Object.values, "values"),
                Fs = w(pk, u(S("1"), sk)),
                xh = dl ? function(a) {
                    return dl(a)
                } : Fs,
                z = Object.assign || Sr,
                gi = ta(function(a, c) {
                    return z({}, a, c)
                }),
                qd = v(w(S("String.fromCharCode"), u("fromCharCode", Ea), Kc)),
                Xe = v(w(nb, fb(/ipad|iphone|ipod/i))),
                Uf = v(function(a) {
                    return n(a, "navigator.platform") || ""
                }),
                Fd = v(function(a) {
                    a = Vk(a);
                    var c = a.kg;
                    return a.mf && !c.match("CriOS")
                }),
                Gs = fb(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                Hs = fb(/; wv\)/),
                Dd = v(function(a) {
                    a = nb(a);
                    return Hs(a) || Gs(a)
                }),
                Is = /Chrome\/(\d+)\./,
                Js = v(function(a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(Is)) && a.length ? 76 <= Ia(a[1]) : !1
                }),
                Cd = v(function(a) {
                    var c = (nb(a) || "").toLowerCase();
                    a = Uf(a);
                    return db(c, "android") && db(c, "mobile") && /^android|linux armv/i.test(a)
                }),
                Ks = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                Ls = v(function(a) {
                    var c = n(a, "navigator.connection.type");
                    if (X(c)) return null;
                    a = Le(a)(c, Ks);
                    return -1 === a ? c : "" + a
                }),
                pg = v(w(S("document.addEventListener"), Kc)),
                el = v(function(a) {
                    var c = n(a, "navigator") || {};
                    return N(function(b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                Ch = v(function(a) {
                    var c = n(a, "navigator") || {};
                    a = el(a);
                    fa(a) || (a = "", c = n(c, "languages.0"), fa(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                kb = v(function(a) {
                    return (n(a, "top") || a) !== a
                }),
                Ms = v(S("top.contentWindow")),
                Ns = v(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                Os = v(function(a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = n(b, "toString") ? "" + b.toString() : "";
                    b = -1 !== jb(b, "Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(Za(u(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Za(u(n(a, "document"), n), c) || b || d && Za(G(d.getAttribute, d), e))
                }),
                Ps = v(function(a) {
                    return !!(Za(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(nb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                Qs = v(function(a) {
                    return !(!n(a, "ia_document.shareURL") || !n(a, "ia_document.referrer"))
                }),
                ae = v(function(a) {
                    var c = nb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (Xe(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Fd(a)
                }),
                Rr = /Edg\/(\d+)\./,
                Pe = v(function(a) {
                    return ae(a) || zf(a, 68) || Af(a, 79)
                }),
                Rs = cd.construct,
                lc = cd.host,
                Sg = pg(window),
                Ga = {
                    vg: 24226447,
                    og: 26302566,
                    yg: 51533966,
                    ij: 65446441,
                    Ra: "https:",
                    cc: "1272",
                    lc: Rs,
                    ug: Sg ? 512 : 2048,
                    rg: Sg ? 512 : 2048,
                    sg: Sg ? 100 : 400,
                    jj: 100,
                    wg: "noindex"
                },
                be = [],
                M = v(function(a) {
                    return a.id + ":" + a.ca
                }),
                rc = {},
                je = Ba("1"),
                Ss = setTimeout;
            La.prototype["catch"] = function(a) {
                return this.then(null, a)
            };
            La.prototype.then = function(a, c) {
                var b = new this.constructor(hs);
                xk(this, new js(a, c, b));
                return b
            };
            La.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                    return c.resolve(a()).then(function() {
                        return b
                    })
                }, function(b) {
                    return c.resolve(a()).then(function() {
                        return c.reject(b)
                    })
                })
            };
            La.all = function(a) {
                return new La(function(c, b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            La.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === La ? a : new La(function(c) {
                    c(a)
                })
            };
            La.reject = function(a) {
                return new La(function(c, b) {
                    b(a)
                })
            };
            La.race = function(a) {
                return new La(function(c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) La.resolve(a[d]).then(c, b)
                })
            };
            La.Ke = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            } || function(a) {
                Ss(a, 0)
            };
            La.zg = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var K = window.Promise,
                Ts = pa(K, "Promise"),
                fl = pa(n(K, "resolve"), "resolve"),
                gl = pa(n(K, "reject"), "reject"),
                hl = pa(n(K, "all"), "all");
            if (Ts && fl && gl && hl) {
                var cf = function(a) {
                    return new Promise(a)
                };
                cf.resolve = G(fl, K);
                cf.reject = G(gl, K);
                cf.all = G(hl, K);
                K = cf
            } else K = La;
            var nf = [],
                ld = [],
                W = [],
                cb = [],
                Tg = [],
                tc = [],
                yg = vc([26812653]),
                Us = v(w(S("id"), yg), M),
                ac = {
                    id: "id",
                    Ge: "ut",
                    ca: "type",
                    Sd: "ldc",
                    Ta: "nck",
                    yc: "url",
                    lh: "referrer"
                },
                Vs = /^\d+$/,
                dd = {
                    id: function(a) {
                        a = "" + (a || "0");
                        Vs.test(a) || (a = "0");
                        try {
                            var c = Ia(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    ca: function(a) {
                        return "" + (a || 0 === a ? a : "0")
                    },
                    Ta: Hb,
                    Ge: Hb
                };
            ac.nc = "defer";
            dd.nc = Hb;
            ac.R = "params";
            dd.R = function(a) {
                return oa(a) || Q(a) ? a : null
            };
            ac.Fe = "userParams";
            ac.gg = "triggerEvent";
            dd.gg = Hb;
            ac.Rf = "sendTitle";
            dd.Rf = function(a) {
                return !!a || X(a)
            };
            ac.Ae = "trackHash";
            dd.Ae = Hb;
            ac.dg = "trackLinks";
            ac.Vg = "enableAll";
            var mf = N(function(a, c) {
                    var b = c[0];
                    a[b] = {
                        ea: c[1],
                        Ua: dd[b]
                    };
                    return a
                }, {}, Oa(ac)),
                Pr = "hash host hostname href pathname port protocol search".split(" "),
                Bg = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "),
                lk = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                Ke = v(function(a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                Ei = v(function(a) {
                    a = U(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(lk));
                    return c
                }),
                il = w(U, S("protocol"), Ba("https:")),
                Mr = v(function(a) {
                    return Js(a) && il(a) ? "SameSite=None;Secure;" : ""
                }),
                zj = /^\s+|\s+$/g,
                kk = pa(String.prototype.trim, "trim"),
                jl = ta(function(a, c) {
                    return c.replace(a, "")
                }),
                Wi = jl(/\s/g),
                Vb = jl(/\D/g),
                Vd = ["metrika_enabled"],
                Ag = [],
                ik = ob("gsc", gk),
                Nr = /:\d+$/,
                ks = v(function(a) {
                    var c = (U(a).host || "").split(".");
                    return 1 === c.length ? c[0] : N(function(b, d, e) {
                        e += 1;
                        2 <= e && !b && (e = H(".", c.slice(-e)), ni(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                Cc = v(Sc),
                Ve = v(function(a) {
                    var c = Cc(a),
                        b = "1" === c.C("debug"),
                        d = We(a, "1") || We(a, "2"),
                        e = a._ym_debug;
                    !e && !d || b || (a = U(a), c.D("debug", "1", void 0, a.host));
                    return !!(b || e || d)
                }),
                fk = ob("debuggerEvents", Jd, !0),
                Jr = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                ce, ib = function(a) {
                    return function(c, b) {
                        void 0 === b && (b = !1);
                        if (ce) var d = new ce(c);
                        else Ea("Error", a.Error) ? (ce = a.Error, d = new a.Error(c)) : (ce = Lr, d = new ce(c));
                        b && (d.unk = !0);
                        return d
                    }
                }(window),
                Kr = fb(/^http./),
                Ir = fb(/^err.kn/),
                ek = [],
                Hr = v(function(a) {
                    a = !(!a.addEventListener || !a.removeEventListener);
                    return {
                        Ni: a,
                        F: a ? "addEventListener" : "attachEvent",
                        ga: a ? "removeEventListener" : "detachEvent"
                    }
                }),
                Ws = v(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test", E, b)
                    } catch (d) {}
                    return c
                }),
                Xs = ta(function(a, c) {
                    return a ? z({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                ja = v(function(a) {
                    var c = Ws(a),
                        b = Xs(c),
                        d = {};
                    return z(d, {
                        F: function(e, f, g, h) {
                            x(function(k) {
                                var l = b(h);
                                dk(a, e, k, g, l, !1)
                            }, f);
                            return G(d.xb, d, e, f, g, h)
                        },
                        xb: function(e, f, g, h) {
                            x(function(k) {
                                var l = b(h);
                                dk(a, e, k, g, l, !0)
                            }, f)
                        }
                    })
                }),
                ka = v(hg),
                Zj = ta(function(a, c) {
                    for (var b = []; !Ud(c);) {
                        var d = Cr(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                kl = ta(function(a, c) {
                    return Ha(function(b, d) {
                        return c(b, function(e) {
                            try {
                                d(a(e))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                Ug = ta(function(a, c) {
                    return Ha(function(b, d) {
                        return c(b, function(e) {
                            try {
                                a(e)(Ra(b, d))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                tg = [],
                ug = !1,
                sg = !1,
                ll = ta(function(a, c) {
                    var b = c || {};
                    return {
                        l: u(b, R),
                        C: function(d, e) {
                            var f = b[d];
                            return X(f) && !X(e) ? e : f
                        },
                        D: function(d, e) {
                            b[d] = e;
                            return this
                        },
                        Xb: function(d, e) {
                            return "" === e || ha(e) ? this : this.D(d, e)
                        },
                        Ha: u(b, a)
                    }
                }),
                Ka = ll(function(a) {
                    var c = "";
                    a = Cb(function(b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], Oa(a));
                    c && a.push(c);
                    return H(":", a)
                }),
                Vg, Qj = (Vg = {}, Vg.w = [
                    [function(a, c) {
                        return {
                            N: function(b, d) {
                                var e, f = b.J;
                                f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                                "0" !== c.ca && (f["cnt-class"] = c.ca);
                                b.K || (b.K = Ka());
                                e = b.K;
                                var g = b.ba;
                                f = {
                                    na: {
                                        Ba: "watch/" + c.id
                                    },
                                    ba: z(void 0 === g ? {} : g, {
                                        Ab: !!e.C("pv") && !e.C("ar") && !e.C("wh")
                                    }),
                                    J: z(b.J || {}, f)
                                };
                                z(b, f);
                                d()
                            }
                        }
                    }, 1]
                ], Vg),
                Wg = u(Qj, Uj),
                qb = Td("w"),
                Pj = ["webkitvisibilitychange", "visibilitychange"],
                vf = ll(function(a) {
                    a = Oa(a);
                    return H("", A(function(c) {
                        var b = c[0];
                        c = c[1];
                        return Wa(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                ml = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                Fq = /^\s*(data|javascript):/i,
                mj = new RegExp(H("", ["\\.(" + H("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Ta, yk = (Ta = {}, Ta.hit = "h", Ta.params = "p", Ta.reachGoal = "g", Ta.userParams = "up", Ta.trackHash = "th", Ta.accurateTrackBounce = "atb", Ta.notBounce = "nb", Ta.addFileExtension = "fe", Ta.extLink = "el", Ta.file = "fc", Ta.trackLinks = "tl", Ta.destruct = "d", Ta.setUserID = "ui", Ta.getClientID = "ci", Ta.clickmap = "cm", Ta.enableAll = "ea", Ta),
                Ys = v(function() {
                    var a = 0;
                    return function() {
                        return a += 1
                    }
                }),
                Zs = w(M, Ys, ma),
                kg = {
                    mc: function(a) {
                        a = Yd(a).C("mt", {});
                        a = Oa(a);
                        return a.length ? N(function(c, b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    },
                    clc: function(a) {
                        var c = J(a).C("cls", {
                                kc: 0,
                                x: 0,
                                y: 0
                            }),
                            b = c.kc,
                            d = c.x;
                        c = c.y;
                        return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                    },
                    rqnt: function(a, c, b) {
                        a = b.J;
                        return !a || a.nohit ? null : Zs(c)
                    }
                },
                vr = v(function(a) {
                    Nj(a, "_ymBRC", "1");
                    var c = "1" !== Mj(a, "_ymBRC");
                    c || Oj(a, "_ymBRC");
                    return c
                }),
                Pa = v(Lj),
                ed = v(Lj, function(a, c, b) {
                    return "" + c + b
                }),
                $s = v(S("document.documentElement")),
                at = v(function(a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                eb = v(w(S("document"), u("createElement", Jc))),
                mi = v(function(a) {
                    var c = n(a, "Element.prototype");
                    return c ? (a = tb(function(b) {
                        var d = c[b];
                        return !!d && Ea(b, d)
                    }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                }),
                bt = Ba("INPUT"),
                Se = w(Ma, bt),
                ct = Ba("TEXTAREA"),
                sr = w(Ma, ct),
                dt = Ba("SELECT"),
                tr = w(Ma, dt),
                Te = w(S("type"), fb(/^(checkbox|radio)$/)),
                Mf = w(Ma, fb(/^INPUT|SELECT|TEXTAREA$/)),
                ye = w(Ma, fb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Qf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                rr = ["submit", "image", "hidden"],
                Fe = v(function() {
                    for (var a = 59, c = {},
                            b = 0; b < ml.length; b += 1) c[ml[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                Hj = v(function(a) {
                    return {
                        uj: a,
                        ib: null,
                        rb: []
                    }
                }),
                Fj = {},
                ng = {};
            Fj.p = 500;
            var Ej = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            ng.h = !0;
            ng.c = !0;
            var ad = {};
            ad.p = uf;
            ad.c = function(a, c, b) {
                (a = $a(n(c, "textContent"))) && b && (b = b(c), b.length && Za(w(S("textContent"), $a, Ba(a)), b) && (a = ""));
                Se(c) && (a = $a(c.getAttribute && c.getAttribute("value") || a));
                return a
            };
            var fd, mg = "button," + H(",", A(function(a) {
                    return 'input[type="' + a + '"]'
                }, ["button", "submit", "reset", "file"])) + ",a",
                Yf = u(mg, lb),
                pr = (fd = {}, fd.A = "h", fd.BUTTON = "i", fd.DIV = "i", fd.INPUT = "ty", fd),
                nl = /\/$/,
                Dj = ob("r", function(a, c) {
                    var b = Cj(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                Rd = v(function() {
                    return {
                        Ga: {},
                        pending: {},
                        children: {}
                    }
                }),
                Xg = S("postMessage"),
                et = B("s.f", function(a, c, b, d, e) {
                    c = c(d);
                    var f = Rd(a),
                        g = H(":", [c.meta.rc, c.meta.key]);
                    if (Xg(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.Zf, "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        T(a, function() {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }),
                ft = B("s.fh", function(a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k = Rd(a),
                        l = null;
                    try {
                        g = zb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!ha(h) && h.substring && "__yminfo" === h.substring(0, 8) && !ha(l) && (g = h.split(":"), 4 === g.length))
                        if (h = c.id, c = g[1], a = g[2], g = g[3], !Q(l) && l.type && "0" === g && l.counterId) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source
                                } catch (m) {}!Wa(k) && Xg(k) && (f = d.T(l.type, [f, l]), e = A(w(R, gi(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.Zf, "*"))
                            }
                        } else g === "" + h && Q(l) && ia(function(m) {
                            return !(!m.hid || !m.counterId)
                        }, l).length === l.length && (b = k.pending[H(":", [c, a])]) && b.apply(null, [f].concat(l))
                }),
                rd = v(function(a, c) {
                    var b, d = Jc("getElementsByTagName", n(a, "document")),
                        e = Rd(a),
                        f = Xg(a),
                        g = vd(a),
                        h = ja(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + Fc(a), b);
                    Pe(a) && (f.duid = Sd(a, c));
                    lr(a, g);
                    mr(a);
                    b = nr(a, f);
                    var k = C([a, u([], b)], et);
                    x(function(l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) {}
                        m && k(m, {
                            type: "initToChild"
                        }, function(p, q) {
                            g.T("initToParent", [p, q])
                        })
                    }, d);
                    kb(a) && k(a.parent, {
                        type: "initToParent"
                    }, function(l, m) {
                        g.T("parentConnect", [l, m])
                    });
                    h.F(a, ["message"], C([a, c, b, g, f], ft));
                    return {
                        $: g,
                        Ga: e.Ga,
                        children: e.children,
                        oe: k
                    }
                }, w(gb, M)),
                sd = v(function(a, c) {
                    if (!Pe(a) || !kb(a)) return Sd(a, c);
                    var b = rd(a, c);
                    return b && b.Ga[c.id] ? b.Ga[c.id].info.duid || Sd(a, c) : Sd(a, c)
                }, function(a, c) {
                    return "{" + c.Sd + c.Ta
                }),
                gt = v(w(ka, Ha(function(a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))),
                ht = w(ka, Ha(function(a) {
                    a = new a.l.Date;
                    return H("", A(Dr, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                })),
                it = w(ka, Ha(lg)),
                ol = v(w(ka, Ha(function(a) {
                    return a.Aa[0]
                }))),
                jt = v(function(a) {
                    a = J(a);
                    var c = a.C("counterNum", 0) + 1;
                    a.D("counterNum", c);
                    return c
                }, w(gb, M)),
                qa, Qd = (qa = {}, qa.vf = u(cd.version, R), qa.nt = Ls, qa.fu = function(a, c, b) {
                    var d = b.J;
                    if (!d) return null;
                    c = (n(a, "document.referrer") || "").replace(nl, "");
                    b = (d["page-ref"] || "").replace(nl, "");
                    d = d["page-url"];
                    a = U(a).href !== d;
                    c = c !== b;
                    b = 0;
                    a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                    return b
                }, qa.en = at, qa.la = el, qa.ut = function(a, c, b) {
                    var d = b.M;
                    b = b.J;
                    d = d && d.Jc;
                    b && (Ei(a) || c.Ge || d) && (b.ut = Ga.wg);
                    return null
                }, qa.v = u(Ga.cc, R), qa.cn = jt, qa.dp = function(a) {
                    var c = J(a),
                        b = c.C("bt", {});
                    if (X(c.C("bt"))) {
                        var d = n(a, "navigator.getBattery");
                        try {
                            b.p = d && d.call(a.navigator)
                        } catch (e) {}
                        c.D("bt", b);
                        b.p && b.p.then && b.p.then(D(a, "bi:dp.p", function(e) {
                            b.bj = n(e, "charging") && 0 === n(e, "chargingTime")
                        }))
                    }
                    return Bb(b.bj)
                }, qa.ls = v(function(a, c) {
                    var b = ed(a, c.id),
                        d = ka(a),
                        e = b.C("lsid");
                    return +e ? e : (d = Xa(a, 0, d(Z)), b.D("lsid", d), d)
                }, gb), qa.hid = Fc, qa.phid = function(a, c) {
                    if (!kb(a)) return null;
                    var b = rd(a, c);
                    if (!b) return null;
                    var d = ca(b.Ga);
                    return d.length ? b.Ga[d[0]].info.hid : null
                }, qa.z = gt, qa.i = ht, qa.et = it, qa.c = w(S("navigator.cookieEnabled"), Qb), qa.rn = w(R, Xa), qa.rqn = function(a, c, b) {
                    b = b.J;
                    if (!b || b.nohit) return null;
                    c = M(c);
                    a = ed(a, c);
                    c = (a.C("reqNum", 0) || 0) + 1;
                    a.D("reqNum", c);
                    if (a.C("reqNum") === c) return c;
                    a.Gb("reqNum");
                    return null
                }, qa.u = sd, qa.w = function(a) {
                    a = Rc(a);
                    return a[0] + "x" + a[1]
                }, qa.s = function(a) {
                    var c = n(a, "screen");
                    if (c) {
                        a = n(c, "width");
                        var b = n(c, "height");
                        c = n(c, "colorDepth") || n(c, "pixelDepth");
                        return H("x", [a, b, c])
                    }
                    return null
                }, qa.sk = S("devicePixelRatio"), qa.ifr = w(kb, Qb), qa.j = w(Ns, Qb), qa.sti = function(a) {
                    return kb(a) && Ms(a) ? "1" : null
                }, qa),
                kr = v(function() {
                    return sa(ca(Qd), ca(kg))
                }),
                jr = v(Nc, M),
                Aj = v(function() {
                    return {
                        We: null,
                        va: []
                    }
                }, M),
                gr = /^[a-z][\w.+-]+:/i,
                Yg, Zb = [
                    [Ue, 1],
                    [Oe, 2],
                    [Sb(), 3],
                    [Bj, 4]
                ],
                Ne = [],
                xb = u(Zb, Vj),
                Yb = (Yg = {}, Yg.h = Zb, Yg),
                aa = u(Yb, Uj);
            xb(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.J;
                        if (!c.K || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e ? d["page-ref"] = yj(a, e) : delete d["page-ref"];
                        d["page-url"] = yj(a, f).slice(0, Ga.ug);
                        return b()
                    }
                }
            }, -100);
            var br = /[^a-z0-9.:-]/,
                Zg, $g = {},
                pl = va([ig && [ig, 0], Fb && [Fb, 1],
                    [Gb, 2], Od && [Od, 3],
                    [$c, 4]
                ]),
                uc = va([ig, Fb, Gb, Od, $c]),
                ah = [Gb];
            ah.unshift(Fb);
            ah.push(Od);
            var ql = va(ah),
                gd = va([$c]);
            va([Fb, Gb]);
            var kt = va([Fb, $c]),
                rl = va([Fb, Gb, Od, $c]),
                za = (Zg = {}, Zg.h = ql, Zg),
                bh = v(function(a, c) {
                    var b = $g["*"] ? $g["*"] : c && $g[c];
                    b || (b = c ? za[c] || [] : uc);
                    b = N(function(d, e) {
                        var f = e(a);
                        if (f) {
                            var g = tb(w(Zc, Ba(e)), pl);
                            g && d.push([g[1], f])
                        }
                        return d
                    }, [], b);
                    b.length || he();
                    return b
                }, gb),
                ch, lt = G(K.reject, K, Sa()),
                Da = (ch = {}, ch.h = qb, ch),
                wa = B("g.sen", function(a, c, b) {
                    var d = bh(a, c);
                    b = b ? fr(a, c, b) : [];
                    var e = Da[c],
                        f = e ? e(a, d, b) : qb(a, d, b);
                    return function() {
                        var g = Qa(arguments),
                            h = g[0];
                        g = g.slice(1);
                        var k = h.ba;
                        h = z(h, {
                            ba: z(void 0 === k ? {} : k, {
                                ha: [c]
                            })
                        });
                        return f.apply(null, [h].concat(g))
                    }
                }, lt),
                Uq = ta(function(a, c) {
                    if (!c[a]) {
                        var b, d = new K(function(e) {
                            b = e
                        });
                        c[a] = {
                            Ff: b,
                            promise: d,
                            Gf: !1
                        }
                    }
                    return c[a].promise
                }),
                vj = v(w(Nc, Ha)),
                mt = B("dc.init", function(a, c) {
                    return c && yg(te(c.split(":")[0])) ? {
                        log: E,
                        warn: E,
                        error: E
                    } : Tq(a, c)
                }),
                pc = v(mt, gb),
                ea, df = /{(\w+)}/g,
                sl = (ea = {}, ea.gbn = "Button goal. Counter {id}. Button: {query}.", ea.gbi = "Button goal. Counter {id}. Init.", ea["gbi.p"] = "Button goal. Counter {id}. Init. Params: ", ea.dc = "Duplicate counter {key} initialization", ea.clel = "Empty link", ea.fpeo = "First party params error. Empty object.", ea.fpno = "First party params error. Not an object.", ea.fgi = "Form goal. Counter {id}. Init.", ea["fgi.p"] = "Form goal. Counter {id}. Init. Params: ", ea.fg = "Form goal. Counter {id}. Form: {query}.", ea["fg.p"] = "Form goal. Counter {id}. Form: {query}. Params: ", ea.gr = "Reach goal. Counter: {id}. Goal id: {goal}", ea["gr.p"] = "Reach goal. Counter: {id}. Goal id: {goal}. Params: ", ea.h = "PageView. Counter {id}. URL: {url}. Referrer: {ref}", ea["h.p"] = "PageView. Counter {id}. URL: {url}. Referrer: {ref}. Params: ", ea.lcl = "{prefix}. Counter {id}. Url: {url}", ea["lcl.p"] = "{prefix}. Counter {id}. Url: {url}. Params: ", ea.ns = "Not supported", ea.nnw = 'Function "{name}" has been overridden, this may cause issues with Metrika counter', ea.nbnc = '"callback" argument missing', ea.nci = "No counter instance found", ea.pv = "PageView. Counter {id}. URL: {url}. Referrer: {ref}", ea["pv.p"] = "PageView. Counter {id}. URL: {url}. Referrer: {ref}. Params: ", ea.pa = "Params. Counter {id}", ea["pa.p"] = "Params. Counter {id}. Params: ", ea.pau = "Set user id {uid}", ea["pau.p"] = "Set user id {uid}. Params: ", ea.paup = "User params. Counter {id}", ea["paup.p"] = "User params. Counter {id}. Params: ", ea.wuid = "Incorrect user ID", ea.wup = "Wrong user params", ea),
                lm = B("h.p", function(a, c) {
                    var b, d, e = wa(a, "h", c),
                        f = c.yc || "" + U(a).href,
                        g = c.lh || a.document.referrer,
                        h = {
                            K: Ka((b = {}, b.pv = 1, b)),
                            J: (d = {}, d["page-url"] = f, d["page-ref"] = g, d),
                            M: {}
                        };
                    h.M.R = c.R;
                    h.M.Fe = c.Fe;
                    c.nc && h.J && (h.J.nohit = "1");
                    return e(h, c).then(function(k) {
                        var l;
                        k && (c.nc || nc(a, c, "h", (l = {}, l.id = c.id, l.url = f, l.ref = g, l), c.R)(), Ub(a, C([a, c, k], Vq)))
                    })["catch"](D(a, "h.g.s"))
                }),
                dh = ["yandex_metrika_callback" + cd.callbackPostfix, "yandex_metrika_callbacks" + cd.callbackPostfix],
                nt = B("cb.i", function(a) {
                    var c = dh[0],
                        b = dh[1];
                    if (P(a[c])) a[c]();
                    "object" === typeof a[b] && x(function(d, e) {
                        a[b][e] = null;
                        cg(a, d)
                    }, a[b]);
                    x(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, dh)
                }),
                Sq = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/,
                tl = v(function(a) {
                    return !!n(a, "crypto.subtle.digest") && !!n(a, "TextEncoder") && !!n(a, "FileReader") && !!n(a, "Blob")
                }),
                ot = B("fpm", function(a, c) {
                    if (!il(a)) return E;
                    var b = M(c);
                    if (!tl(a)) return Mb(a, b, "ns"), E;
                    var d = Aa(a, c);
                    return d ? function(e) {
                        return (new K(function(f, g) {
                            return oa(e) ? ca(e).length ? f(sj(a, e).then(function(h) {
                                var k, l;
                                h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
                            }, E)) : g(Sa("fpm.l")) : g(Sa("fpm.o"))
                        }))["catch"](D(a, "fpm.en"))
                    } : E
                }),
                ef = ta(function(a, c) {
                    var b = {};
                    fg(a)(function(d) {
                        b = d[c] || {}
                    });
                    return b
                }),
                pt = B("c.c.cc", function(a) {
                    var c = J(a),
                        b = w(ef(a), function(d) {
                            var e, f = (e = {}, e.clickmap = !!d.clickmap, e);
                            return z({}, d, f)
                        });
                    return D(a, "g.c.cc", w(G(c.C, c, "counters", {}), ca, Xb(b)))
                }),
                qt = B("gt.c.rs", function(a, c) {
                    var b, d = M(c),
                        e = c.id,
                        f = c.ca,
                        g = c.Lg,
                        h = c.Ae,
                        k = C([a, d], Nq);
                    eg(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
                    return k
                }),
                qj = v(Jd),
                Md = v(Nc, M),
                rt = B("pa.int", function(a, c) {
                    var b;
                    return b = {}, b.params = function() {
                        var d, e, f, g = Qa(arguments),
                            h = Mq(g);
                        if (!h) return null;
                        g = h.Qg;
                        var k = h.R;
                        h = h.ec;
                        if (!oa(k) && !Q(k)) return null;
                        var l = wa(a, "1", c),
                            m = Md(c).url,
                            p = !Us(c),
                            q = "pa",
                            r = (d = {}, d.id = c.id, d);
                        d = k;
                        var t = "";
                        if (t = n(k, "__ym.user_id")) q = "pau", r.uid = t;
                        I("__ymu", ca(k)) && (q = "paup");
                        d.__ym && (d = z({}, k), d.__ym = N(function(y, F) {
                            var O = n(k, "__ym." + F);
                            O && (y[F] = O);
                            return y
                        }, {}, be), ca(d.__ym).length || delete d.__ym, p = !!ca(d).length);
                        d = t ? void 0 : JSON.stringify(d);
                        d = nc(a, c, q, r, d);
                        l = l({
                            M: {
                                R: k
                            },
                            K: Ka((e = {}, e.pa = 1, e.ar = 1, e)),
                            J: (f = {}, f["page-url"] = m || U(a).href, f)
                        }, c).then(p ? d : E);
                        return Yc(a, "p.s", l, h, g)
                    }, b
                }),
                se = v(oj, w(gb, M)),
                st = B("y.p", function(a, c) {
                    var b = oj(a, c);
                    if (b) {
                        var d = oe(a),
                            e = C([a, b, c], Iq);
                        Eh(a, d, function(f) {
                            f.F(["params"], e)
                        });
                        b.$.F(["params"], w(S("1"), e))
                    }
                }),
                ls = v(function(a) {
                    if (a = eb(a)) return a("a")
                }),
                ul = {
                    yj: fb(/[/&=?#]/)
                },
                He = B("go.in", function(a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return e = {}, e.reachGoal = function(f, g, h, k) {
                        var l, m, p;
                        if (!f || ul[b] && ul[b](f)) return null;
                        var q = g,
                            r = h || E;
                        P(g) && (r = g, q = void 0, k = h);
                        var t = nc(a, c, "gr", (l = {}, l.id = c.id, l.goal = f, l), q),
                            y = "goal" === b;
                        g = wa(a, "g", c);
                        l = Hq(a, c, f, b);
                        h = l[0];
                        l = l[1];
                        q = g({
                            M: {
                                R: q
                            },
                            K: Ka((m = {}, m.ar = 1, m)),
                            J: (p = {}, p["page-url"] = h, p["page-ref"] = l, p)
                        }, c).then(function() {
                            var F, O;
                            y && t();
                            ub(a, (F = {}, F.counterKey = M(c), F.name = "event", F.data = (O = {}, O.schema = b, O.name = f, O), F));
                            d && d()
                        });
                        return Yc(a, "g.s", q, r, k)
                    }, e
                }),
                tt = B("guid.int", function(a, c) {
                    var b;
                    return b = {}, b.getClientID = function(d) {
                        var e = Sd(a, c);
                        d && cg(a, d, null, e);
                        return e
                    }, b
                }),
                Ak,
                ut = B("th.e", function(a, c) {
                    function b() {
                        g || (k = Nb(a, "onhashchange") ? ja(a).F(a, ["hashchange"], h) : ms(a, h))
                    }
                    var d, e = wa(a, "t", c),
                        f = Me(a, M(c)),
                        g = !1,
                        h = D(a, "h.h.ch", G(ns, null, a, c, e)),
                        k = E;
                    c.Ae && (b(), g = !0);
                    e = D(a, "tr.hs.h", function(l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f((m = {}, m.trackHash = g, m))
                    });
                    return d = {}, d.trackHash = e, d.u = k, d
                }),
                vt = ta(function(a, c) {
                    fa(c) ? a.push(c) : x(w(R, Fa("push", a)), c)
                }),
                Ld = ob("retryReqs", function(a) {
                    var c = Pa(a),
                        b = c.C("retryReqs", {}),
                        d = ka(a)(Z);
                    x(function(e) {
                        var f = e[0];
                        e = e[1];
                        (!e || !e.time || e.time + 864E5 < d) && delete b[f]
                    }, Oa(b));
                    c.D("retryReqs", b);
                    return b
                }, !0),
                eh = w(Gc, Ba(0)),
                vl = vb(eh),
                wt = [vl("watch"), vl("clmap")],
                xt = B("g.r", function(a) {
                    var c = ka(a),
                        b = Ld(a),
                        d = c(Z),
                        e = Fc(a);
                    return Cb(function(f, g) {
                        var h = g[0],
                            k = g[1];
                        k && Za(Ha(k.resource), wt) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = {
                            protocol: k.protocol,
                            host: k.host,
                            Ba: k.resource,
                            zi: k.postParams,
                            R: k.params,
                            Dg: k.browserInfo,
                            wj: k.ghid,
                            time: k.time,
                            Ub: Ia(h),
                            Og: k.counterId,
                            ca: k.counterType
                        }, k.telemetry && (h.Ja = k.telemetry), f.push(h));
                        return f
                    }, [], Oa(b))
                }),
                yt = B("nb.p", function(a, c) {
                    function b(F) {
                        l() || (F = "number" === typeof F ? F : 15E3, y = os(a, d(!1), F), m())
                    }

                    function d(F) {
                        return function(O) {
                            var L, na, xa;
                            void 0 === O && (O = (L = {}, L.ctx = {}, L.callback = E, L));
                            if (F || !r && !k.Ld) {
                                r = !0;
                                m();
                                y && y();
                                var Eb = p(Z);
                                L = (Ia(k.C("lastHit")) || 0) < Eb - 18E5;
                                var Id = .1 > Math.random();
                                k.D("lastHit", Eb);
                                Eb = Ka((na = {}, na.nb = 1, na.cl = t, na.ar = 1, na));
                                na = Md(c);
                                na = {
                                    J: (xa = {}, xa["page-url"] = na.url || U(a).href, xa),
                                    K: Eb,
                                    M: {
                                        force: F
                                    }
                                };
                                xa = pc(a, M(c)).warn;
                                !O.callback && O.ctx && xa("nbnc");
                                (xa = F || L || Id) || (xa = a.location.href, L = a.document.referrer, xa = !(xa && L ? nj(xa) === nj(L) : !xa && !L));
                                if (xa) return xa = g(na, c), Yc(a, "l.o.l", xa, O.callback, O.ctx)
                            }
                            return null
                        }
                    }
                    var e, f, g = wa(a, "n", c),
                        h = M(c),
                        k = ed(a, c.id),
                        l = u(u(h, ef(a)), w(ma, S("accurateTrackBounce"))),
                        m = u((e = {}, e.accurateTrackBounce = !0, e), Me(a, h)),
                        p = ka(a),
                        q = p(Z),
                        r = !1,
                        t = 0,
                        y;
                    ra(c, function(F) {
                        t = F.eh - q
                    });
                    c.Le && b(c.Le);
                    e = (f = {}, f.notBounce = d(!0), f.u = y, f);
                    e.accurateTrackBounce = b;
                    return e
                }),
                Aq = ta(kc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                zt = B("clm.p", function(a, c) {
                    if (qd(a)) return E;
                    var b = wa(a, "m", c),
                        d = M(c),
                        e = ka(a),
                        f = e(Z),
                        g = u(u(d, ef(a)), w(ma, S("clickmap"))),
                        h, k = null;
                    d = D(a, "clm.p.c", function(l) {
                        var m = g();
                        if (m) {
                            var p = J(a),
                                q = p.C("cls", {
                                    kc: 0,
                                    x: 0,
                                    y: 0
                                });
                            p.D("cls", {
                                kc: q.kc + 1,
                                x: q.x + l.clientX,
                                y: q.y + l.clientY
                            });
                            p = "object" === typeof m ? m : {};
                            q = p.filter;
                            m = p.isTrackHash || !1;
                            var r = A(function(y) {
                                return ("" + y).toUpperCase()
                            }, p.ignoreTags || []);
                            X(h) && (h = p.quota || null);
                            var t = !!p.quota;
                            l = {
                                element: Bq(a, l),
                                position: jj(a, l),
                                button: Cq(l),
                                time: e(Z)
                            };
                            p = U(a).href;
                            if (zq(a, l, k, r, q)) {
                                if (t) {
                                    if (!h) return;
                                    --h
                                }
                                r = Re(a, l.element);
                                q = r[0];
                                r = r[1];
                                t = og(a, l.element);
                                q = ["rn", Xa(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", uf(a, l.element), "X", l.position.x, "Y", l.position.y];
                                q = H(":", q);
                                m && (q += ":wh:1");
                                yq(a, p, q, b, c);
                                k = l
                            }
                        }
                    });
                    return ja(a).F(n(a, "document"), ["click"], d)
                }),
                At = B("trigger.in", function(a, c) {
                    c.gg && Ub(a, C([a, "yacounter" + c.id + "inited"], ur), "t.i")
                }),
                Bt = B("c.m.p", function(a, c) {
                    var b,
                        d = M(c);
                    return b = {}, b.clickmap = u(Me(a, d), xq), b
                }),
                Li = u("form", oc),
                fq = u("form", lb),
                wq = v(w(gb, vb(ra)(S("settings.form_goals"))), gb),
                Ct = B("s.f.i", function(a, c) {
                    var b = [],
                        d = [],
                        e = ja(a);
                    b.push(e.F(a, ["click"], D(a, "s.f.c", C([a, c, d], vq))));
                    b.push(e.F(a, ["submit"], D(a, "s.f.e", function(f) {
                        var g = n(f, "target");
                        f = n(f, "isTrusted");
                        gj(!0, a, c, d, g, f)
                    })));
                    hj(a, c, "fgi");
                    return C([Ge, b], x)
                }),
                Dt = B("s.f.i", function(a, c) {
                    return ra(c, function(b) {
                        var d;
                        if (n(b, "settings.button_goals")) return b = ja(a).F(a, ["click"], D(a, "c.t.c", w(C([a, c], lf(a, c, "", uq))))), nc(a, c, "gbi", (d = {}, d.id = c.id, d))(), b
                    })
                }),
                bc, de, fh, hd, Ib, $f = (bc = {}, bc.transaction_id = "id", bc.item_brand = "brand", bc.index = "position", bc.item_variant = "variant", bc.value = "revenue", bc.item_category = "category", bc.item_list_name = "list", bc),
                mc = (de = {}, de.item_id = "id", de.item_name = "name", de.promotion_name = "coupon", de),
                tq = (fh = {}, fh.promotion_name = "name", fh),
                wl = (hd = {}, hd.promotion_name = "name", hd.promotion_id = "id", hd.item_id = "product_id", hd.item_name = "product_name", hd),
                qq = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "),
                rq = (Ib = {}, Ib.view_item = {
                    event: "detail",
                    ya: mc,
                    La: "products"
                }, Ib.add_to_cart = {
                    event: "add",
                    ya: mc,
                    La: "products"
                }, Ib.remove_from_cart = {
                    event: "remove",
                    ya: mc,
                    La: "products"
                }, Ib.begin_checkout = {
                    event: "checkout",
                    ya: mc,
                    La: "products"
                }, Ib.purchase = {
                    event: "purchase",
                    ya: mc,
                    La: "products"
                }, Ib.view_item_list = {
                    event: "impressions",
                    ya: mc
                }, Ib.select_item = {
                    event: "click",
                    La: "products",
                    ya: mc
                }, Ib.view_promotion = {
                    event: "promoView",
                    La: "promotions",
                    ya: wl
                }, Ib.select_promotion = {
                    event: "promoClick",
                    La: "promotions",
                    ya: wl
                }, Ib),
                fj = B("dl.w", function(a, c, b) {
                    function d() {
                        var g = n(a, c);
                        (e = Q(g) && Nd(a, g, b)) || (f = T(a, d, 1E3, "ec.dl"))
                    }
                    var e, f = 0;
                    d();
                    return function() {
                        return la(a, f)
                    }
                }),
                Et = B("p.e", function(a, c) {
                    var b = Aa(a, c);
                    if (b) {
                        var d = J(a);
                        b = b.params;
                        var e = D(a, "h.ee", C([a, M(c), b], oq));
                        return c.sd ? (d.D("ecs", 0), ej(a, c.sd, e)) : ra(c, function(f) {
                            if ((f = n(f, "settings.ecommerce")) && fa(f)) return d.D("ecs", 1), ej(a, f, e)
                        })
                    }
                }),
                bj = v(function(a) {
                    return H("[^\\d<>]*", a.split(""))
                }),
                En = v(function(a) {
                    return new RegExp(bj(a), "g")
                }),
                lq = /\S/,
                Vi = u(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], ud),
                xl = v(function(a) {
                    return qd(a) || !od(a)
                }),
                Ft = B("phc.h", function(a, c) {
                    if (!ok(a) && !xl(a)) return ra(c, function(b) {
                        if (!n(b, "settings.phchange")) {
                            var d = Pa(a),
                                e = db(U(a).search, "_ym_hide_phones=1") || d.C("_ym_hide_phones", 0);
                            b = n(b, "settings.phhide");
                            e && !b && (b = ["*"], d.D("_ym_hide_phones", 1));
                            b && Ni(a, c, b)
                        }
                    })["catch"](D(a, "phc.hs"))
                }),
                yl = v(function(a) {
                    a = U(a);
                    a = Or(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a
                }),
                Qi = w(yl, S("_ym_status-check"), Ia),
                Gt = w(yl, S("_ym_lang")),
                cq = /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
                dq = /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|by|kz|com|com\.tr)\/?$/,
                Pi = fb(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                hq = ["form", "button", "phone", "status"],
                gh = [],
                eq = v(function(a, c, b) {
                    x(w(Pc([a, c, b]), ma), gh);
                    if (b.inline) {
                        c = Oi(b);
                        var d = b.data;
                        b = b.id;
                        Ki(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d)
                    } else b.resource && Pi(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, iq(a, b.resource))
                }, function(a, c, b) {
                    return b.id
                }),
                Ht = B("cs.init", function(a, c) {
                    var b, d = Qi(a);
                    if (d && c.id === d && "0" === c.ca) {
                        var e = Oi((b = {}, b.lang = Gt(a), b.fileId = "status", b));
                        T(a, C([a, e, "" + d], Ki), 0, "cs")
                    }
                }),
                It = B("suid.int", function(a, c) {
                    var b;
                    return b = {}, b.setUserID = function(d, e, f) {
                        if (fa(d) || Wc(a, d)) {
                            var g = Aa(a, c);
                            d = ud(["__ym", "user_id", d]);
                            g.params(d, e || E, f)
                        } else pc(a, M(c)).error("wuid")
                    }, b
                }),
                Xc = {
                    position: "absolute"
                },
                Ji = {
                    position: "fixed"
                },
                Xf = {
                    borderRadius: "50%"
                },
                Jt = ob("siteStatistics", function(a, c) {
                    if (!ok(a)) return Pb(a)(Ra(E, C([c, w(S("settings.sm"), Ba(1), C([C([a, c.id], aq), E], Bd), ma)], ra)))
                }),
                Kt = B("up.int", function(a, c) {
                    var b;
                    return b = {}, b.userParams = D(a, "up.c", function(d, e, f) {
                        var g, h = Aa(a, c),
                            k = pc(a, M(c)).warn;
                        h ? oa(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || E, f)) : k("wup") : k("nci")
                    }), b
                }),
                Lt = /[\*\.\?\(\)]/g,
                Mt = v(function(a, c, b) {
                    var d;
                    try {
                        var e = b.replace("\\s", " ").replace(Lt, "");
                        pc(a, "").warn("nnw", (d = {}, d.name = e, d))
                    } catch (f) {}
                }, gb),
                Nt = B("r.nn", function(a) {
                    Ve(a) && Nd(a, Hg, function(c) {
                        c.ra.F(function(b) {
                            Mt(a, b[1], b[0]);
                            Hg.splice(100)
                        })
                    })
                }),
                Ot = B("e.a.p", function(a, c) {
                    var b, d = Aa(a, c);
                    d = C([w(R, Ha(!0)), va(A(u(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], A);
                    c.Vg && d();
                    return b = {}, b.enableAll = d, b
                }),
                Pt = v(Nc, M),
                Qt = B("fpi", function(a) {
                    var c = Ed(a);
                    if (c && !a.document.hidden) {
                        var b = J(a).Ia;
                        b("fpe", 1);
                        var d = ja(a).F(a, ["visibilitychange", "webkitvisibilitychange"], function() {
                            a.document.hidden && (b("fht", c.now()), d())
                        })
                    }
                }),
                zl = v(function(a) {
                    a = n(a, "console");
                    var c = n(a, "log");
                    c = Ze("log", c) ? G(c, a) : E;
                    var b = n(a, "warn");
                    b = Ze("warn", b) ? G(b, a) : c;
                    var d = n(a, "error");
                    a = Ze("error", d) ? G(d, a) : c;
                    return {
                        log: c,
                        error: a,
                        warn: b
                    }
                }),
                Rt = B("cr", function(a) {
                    if (Ve(a)) {
                        var c = fk(a),
                            b = zl(a);
                        Nd(a, c, function(d) {
                            d.ra.F(function(e) {
                                if ("log" === e.name) {
                                    var f = A(function(g) {
                                        if (fa(g)) {
                                            var h = e.data.variables;
                                            var k = sl[g];
                                            if (k) {
                                                if (h) {
                                                    df.lastIndex = 0;
                                                    for (var l = df.exec(k); l;) {
                                                        g = l[1];
                                                        if (Nb(h, g)) {
                                                            var m = g.length + 2;
                                                            l = l.index;
                                                            k = "" + k.substring(0, l) + h[g] + k.substring(l + m, k.length);
                                                            df.lastIndex = m + l
                                                        }
                                                        l = df.exec(k)
                                                    }
                                                }
                                                h = k
                                            } else h = g
                                        } else h = g;
                                        return h
                                    }, e.data.args);
                                    b[e.data.type].apply(b, f)
                                }
                            })
                        })
                    }
                }),
                Jb, St = (Jb = {}, Jb.ecomeo = "Ecommerce data should be an object", Jb.ecomgei = "Ecommerce data should contain 'goods' non-empty array", Jb.ecomgi = "All items in 'goods' should be objects and contain 'id' or 'name' field", Jb.ecompi = "Purchase object should contain string or number 'id' field", Jb.pcs = "Warning: content has only {chars} chars. Required {limit}", Jb.pdf = "Publisher content info found: ", Jb.pfi = "Warning: invalid value {value} in {itemField} in field {field}, this item will be ignored", Jb.ps = 'Publishers analytics schema "{schema}"', Jb.w2mo = "MutationObserver is overridden, webvisor is not guaranteed to work in this environment", Jb),
                Tt = u("add", De),
                Ut = u("remove", De),
                Vt = u("detail", De),
                Wt = u("purchase", De),
                Xt = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                sf = v(function(a) {
                    var c = Vk(a);
                    a = c.kg;
                    if (!c.mf) return !1;
                    c = Fa("indexOf", a);
                    c = Za(w(c, Ba(-1), Kc), Xt);
                    var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || d && e || !/Safari/.test(a) && e
                }),
                fn = v(function(a) {
                    var c = nb(a);
                    return c ? db(c, "YangoEats") || Dd(a) : !1
                }),
                Zp = /([0-9\\.]+) Safari/,
                Yt = /\sYptp\/\d\.(\d+)\s/,
                Al = v(function(a) {
                    var c;
                    a: {
                        if ((c = nb(a)) && (c = Yt.exec(c)) && 1 < c.length) {
                            c = Ia(c[1]);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || Af(a, 79) ? !1 : !ae(a) || sf(a)
                }),
                Bl = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                Zt = v(function(a) {
                    a = eb(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = G(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function(e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }),
                Cl = pa(String.prototype.repeat, "repeat"),
                di = Cl ? function(a, c) {
                    return Cl.call(a, c)
                } : Wp,
                Yh = u(!0, function(a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = di(c, b);
                    return a ? c + d : d + c
                }),
                $e = [2277735313, 289559509],
                af = [1291169091,
                    658871167
                ],
                $t = B("p.cd", function(a) {
                    if (Cd(a) || Xe(a)) {
                        var c = Pa(a);
                        if (ha(c.C("jn"))) {
                            c.D("jn", !1);
                            var b = a.chrome || Fd(a) ? function() {} : /./;
                            a = zl(a);
                            b.toString = function() {
                                c.D("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            a.log("%c%s", "color: inherit", b)
                        }
                    }
                }),
                au = v(function(a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && Ua(a) && Za(w(S("name"), fb(/Chrome PDF Viewer/)), a))
                }),
                cc = ta(function(a, c) {
                    return J(c).C(a, null)
                }),
                Tp = {
                    "*": "+",
                    "-": "/",
                    mj: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                bu = v(function(a) {
                    return P(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
                }),
                cu = v(u("panoramaId", Be)),
                du = v(function(a) {
                    return Be("pubcid.org", a) || Be("_pubCommonId", a)
                }),
                eu = v(u("_sharedid", Be)),
                fu = v(function(a, c) {
                    if (c.Ta) return null;
                    var b = Sc(a, "").C("_ga");
                    return b && md(me(b))
                }, w(gb, M)),
                Pp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                yb, Op = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                Gi = (yb = {}, yb.responseEnd = 1, yb.domInteractive = 1, yb.domContentLoadedEventStart = 1, yb.domContentLoadedEventEnd = 1, yb.domComplete = 1, yb.loadEventStart = 1, yb.loadEventEnd = 1, yb.unloadEventStart = 1, yb.unloadEventEnd = 1, yb.secureConnectionStart = 1, yb),
                Rp = v(Jd),
                Lp = v(Nc),
                Mp = v(function(a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (P(c) && !Cd(a)) return (new K(G(c, a, 0, 0))).then(function() {
                        var d = n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](u(!0, R));
                    if (Wd(a)) return c = n(a, "navigator.serviceWorker"), K.resolve(X(c));
                    c = n(a, "openDatabase");
                    if (Fd(a) && P(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return K.resolve(b)
                    }
                    return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                gu = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                hu = v(function(a, c) {
                    var b = Cc(a),
                        d = U(a).search.match(gu);
                    return d && 2 <= d.length ? (d = d[2], c.Ta || b.D("turbo_uid", d), d) : (b = b.C("turbo_uid")) ? b : ""
                }),
                iu = B("pa.plgn", function(a, c) {
                    var b = se(a, c);
                    b && b.$.F(["pluginInfo"], D(a, "c.plgn", function() {
                        var d = J(a);
                        d.D("cmc", d.C("cmc", 0) + 1);
                        return mk(c)
                    }))
                }),
                Tb, rb, Zm = (Tb = {}, Tb.am = "com.am", Tb.tr = "com.tr", Tb.ge = "com.ge", Tb.il = "co.il", Tb["\u0440\u0444"] = "ru", Tb["xn--p1ai"] = "ru", Tb["\u0431\u0435\u043b"] = "by", Tb["xn--90ais"] = "by", Tb),
                Dl = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                $m = (rb = {}, rb.ka = "ge", rb.ro = "md", rb.tg = "tj", rb.tk = "tm", rb.et = "ee", rb.hy = "com.am", rb.he = "co.li", rb.ky = "kg", rb.be = "by", rb.tr = "com.tr", rb.kk = "kz", rb),
                El = /^https?:\/\//,
                ju = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1,
                    3015043526: 1
                },
                Fl = v(function() {
                    return N(function(a, c) {
                        var b = ic(c + "/tag.js");
                        a[b] = 1;
                        return a
                    }, {}, ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                }),
                ku = v(function(a) {
                    a = Ed(a);
                    if (!a || !P(a.getEntriesByType)) return null;
                    a = a.getEntriesByType("resource");
                    var c = Fl();
                    return (a = tb(function(b) {
                        b = b.name.replace(El, "").split("?")[0];
                        b = ic(b);
                        return c[b]
                    }, a)) ? Bb(a.transferSize) : null
                }),
                Hp = "ar:1:pv:1:v:" + Ga.cc + ":vf:" + cd.version,
                Ip = Ga.Ra + "//" + lc + "/watch/" + Ga.og,
                Gl = {},
                lu = B("exps.int", function(a, c) {
                    var b;
                    return b = {}, b.experiments = function(d, e, f) {
                        var g, h;
                        void 0 === e && (e = E);
                        if (d && 0 < d.length) {
                            var k = wa(a, "e", c),
                                l = Md(c).url;
                            d = k({
                                K: Ka((g = {}, g.ex = 1, g.ar = 1, g)),
                                J: (h = {}, h["page-url"] = l || U(a).href, h.exp = d, h)
                            }, c);
                            return Yc(a, "exps.s", d, e, f)
                        }
                    }, b
                }),
                tf = [],
                mu = B("p.fh", function(a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Pa(a),
                        f = ka(a),
                        g = e.C("wasSynced"),
                        h = {
                            id: 3,
                            ca: "0"
                        };
                    return c && g && g.time + 864E5 > f(Z) ? K.resolve(g) : wa(a, "f", h)({
                        K: Ka((b = {}, b.pv = 1, b)),
                        J: (d = {}, d["page-url"] = U(a).href, d["page-ref"] = a.document.referrer, d)
                    }, h).then(function(k) {
                        var l;
                        k = (l = {}, l.time = f(Z), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l);
                        e.D("wasSynced", k);
                        return k
                    })["catch"](D(a, "f.h"))
                }),
                nu = ta(function(a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.Td.D("ymoo" + a.oa, a.cg(sb)), a.nd && a.nd.destruct && a.nd.destruct())
                }),
                yf = w(S("settings.pcs"), Ba("1")),
                xp = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                yp = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                Fi = {
                    J: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                up = {
                    ag: 60,
                    error: 15
                },
                tp = {
                    ag: 5,
                    error: 1
                },
                Di = {
                    id: 42822899,
                    ca: "0"
                },
                Hl = lc.split("."),
                ou = Hl.pop(),
                Il = H(".", Hl),
                Ym = v(function(a) {
                    a = U(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                Bh = v(function(a) {
                    return -1 !== U(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                pu = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech)$/,
                re = v(function(a) {
                    a = U(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(pu));
                    return c
                }),
                qu = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                Ap = v(function(a) {
                    a = U(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(qu));
                    return c
                }),
                Jl = Ga.Ra + "//" + lc + "/metrika",
                we = Jl + "/metrika_match.html",
                ff, Ep = (ff = {}, ff.s = "p", ff["8"] = "i", ff),
                Bp = ob("csp", function(a, c) {
                    return wa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                hh = "et w v z i u vf".split(" "),
                Kl = Td("wv"),
                ru = Td("pub"),
                si = function() {
                    function a(c, b) {
                        this.l = c;
                        this.type = b
                    }
                    a.isEnabled = function(c) {
                        return !!c.JSON
                    };
                    a.prototype.Ha = function(c) {
                        return Hf(Ab(this.l, c))
                    };
                    a.prototype.ub = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = Ab(this.l, c.data));
                        return b
                    };
                    a.prototype.lb = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.se = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    return a
                }(),
                op = v(function(a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[3];
                        h[k + 1] = e[2];
                        h[k + 2] = e[1];
                        h[k + 3] = e[0]
                    }

                    function b(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3]
                    }
                    if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return pp;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c
                }),
                kp = Bi(!1),
                jp = Bi(!0),
                ba, Oc, Ll = (ba = {}, ba.mousemove = 0, ba.mouseup = 1, ba.mousedown = 2, ba.click = 3, ba.scroll = 4, ba.windowblur = 5, ba.windowfocus = 6, ba.focus = 7, ba.blur = 8, ba.eof = 9, ba.selection = 10, ba.change = 11, ba.input = 12, ba.touchmove = 13, ba.touchstart = 14, ba.touchend = 15, ba.touchcancel = 16, ba.touchforcechange = 17, ba.zoom = 18, ba.resize = 19, ba.keystroke = 20, ba.deviceRotation = 21, ba.fatalError = 22, ba.hashchange = 23, ba.stylechange = 24, ba.articleInfo = 25, ba.publishersHeader = 26, ba.pageData = 27, ba.mutationAdd = 28, ba.mutationRemove = 29, ba.mutationTextChange = 30, ba.mutationAttributesChange = 31, ba),
                Ml = (Oc = {}, Oc.page = 0, Oc.event = 1, Oc.mutation = 2, Oc.publishers = 3, Oc.activity = 4, Oc),
                ri = function() {
                    function a(c, b) {
                        var d, e, f = this;
                        this.isSync = !1;
                        this.Fb = [];
                        this.Xg = (d = {}, d.ad = "mutationAdd", d.re = "mutationRemove", d.tc = "mutationTextChange", d.ac = "mutationAttributesChange", d.page = "pageData", d);
                        this.Sg = (e = {}, e.ad = "addedNodesMutation", e.re = "removedNodesMutation", e.tc = "textChangeMutation", e.ac = "attributesChangeMutation", e.touchmove = "touchEvent", e.touchstart = "touchEvent", e.touchend = "touchEvent", e.touchforcechange = "touchEvent", e.touchcancel = "touchEvent", e.resize = "resizeEvent", e.scroll = "scrollEvent", e.change = "changeEvent", e.mousemove = "mouseEvent", e.mousedown = "mouseEvent", e.mouseup = "mouseEvent", e.click = "mouseEvent", e.focus = "focusEvent", e.blur = "focusEvent", e.deviceRotation = "deviceRotationEvent", e.zoom = "zoomEvent", e.keystroke = "keystrokesEvent", e.selection = "selectionEvent", e.stylechange = "stylechangeEvent", e.fatalError = "fatalErrorEvent", e.pageData = "page", e);
                        this.sh = function(g) {
                            var h = g.type;
                            return g.event || "publishersHeader" !== h && "articleInfo" !== h ? {
                                type: Ml[h],
                                event: Ll[f.Xg[g.event] || g.event]
                            } : {
                                type: Ml.publishers,
                                event: Ll[h]
                            }
                        };
                        this.uf = function(g) {
                            var h = !X(g.partNum),
                                k = f.sh(g);
                            k = {
                                stamp: g.stamp,
                                type: k.type,
                                event: k.event,
                                frameId: g.frameId,
                                chunk: h ? g.data : void 0,
                                partNum: g.partNum,
                                end: g.end
                            };
                            !h && g.data && (h = f.Sg[g.event] || g.event || g.type) && (k[h] = g.data);
                            return k
                        };
                        this.l = c;
                        this.type = b
                    }
                    a.prototype.Ha = function(c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = gc(c, this.uf),
                            f = this.isSync || b ? Infinity : 10;
                        e = nd(this.l, e, f);
                        var g = [e];
                        this.Fb.push(e);
                        return e(Ug(function(h) {
                            h = ui(d.l, $o, {
                                Ci: h
                            });
                            h = nd(d.l, h, f, vg);
                            g.push(h);
                            d.Fb.push(h);
                            return h
                        }))(Ug(function(h) {
                            h = ti(d.l, h.slice(-4));
                            h = nd(d.l, h, f, vg);
                            g.push(h);
                            d.Fb.push(h);
                            return h
                        }))(kl(function(h) {
                            h = h[h.length - 1];
                            x(function(k) {
                                k = Le(d.l)(k, d.Fb);
                                d.Fb.splice(k, 1)
                            }, g);
                            return h
                        }))
                    };
                    a.prototype.ub = function(c) {
                        return ui(this.l, vi, this.uf(c))(wg(E))
                    };
                    a.prototype.lb = function(c) {
                        return c[0]
                    };
                    a.prototype.se = function(c, b) {
                        for (var d = ti(this.l, c)(wg(E)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g * e, e * (g + 1)));
                        return f
                    };
                    a.isEnabled = function(c) {
                        var b = Ve(c),
                            d = !1;
                        try {
                            d = (d = 2 === (new c.Blob(["\u00e4"])).size) && 2 === (new c.Blob([new c.Uint8Array([1, 2])])).size
                        } catch (e) {}
                        return !b && d && !(!c.Uint8Array || !n(c, "Uint8Array.prototype.slice"))
                    };
                    return a
                }(),
                Nl = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                su = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                tu = function() {
                    function a(c, b, d, e, f) {
                        var g = this;
                        this.Gc = !1;
                        this.meta = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.involvedTime = this.sf = 0;
                        this.Ud = this.Af = "";
                        this.fa = [];
                        this.pe = this.Ka = 0;
                        this.yb = {
                            h: 0,
                            w: 0
                        };
                        this.buffer = [];
                        this.pg = su;
                        this.flush = function() {
                            g.pe = T(g.l, g.flush, 2500);
                            var h = g.Cd();
                            if (g.buffer.length || h) {
                                var k = Ye(g.buffer);
                                h && k.push(h);
                                g.Af = g.Ud;
                                g.ma.Ha(k)(Ra(D(g.l, "p.b.st"), function(l) {
                                    l && g.Wb(l)
                                }))
                            }
                        };
                        this.Wb = e;
                        this.ma = d;
                        this.bc = G(this.bc, this);
                        this.Cd = G(this.Cd, this);
                        this.flush = G(this.flush, this);
                        this.l = c;
                        this.oa = f;
                        this.Uc = b;
                        this.Pd = "pai" + b.id;
                        this.Kb();
                        this.Se = ja(this.l);
                        this.time = ka(this.l);
                        this.ig();
                        this.Fd = J(this.l);
                        this.Ee = null
                    }
                    a.prototype.start = function() {
                        this.pe = T(this.l, this.flush, 2500);
                        if (!this.Gc) {
                            this.Li();
                            var c = this.Fd.C(this.Pd, []),
                                b = !c.length;
                            c.push(G(this.Yh, this));
                            this.Fd.Ia(this.Pd, c);
                            b && this.Jf();
                            this.Ee = ja(this.l).F(this.l, ["click"], G(this.Ji, this));
                            this.bc({
                                type: "page",
                                target: this.l
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.Zi();
                        this.Gc = !0;
                        this.flush();
                        la(this.l, this.pe)
                    };
                    a.prototype.pf = function(c) {
                        return oc("html", this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.Jf = function() {
                        var c = this;
                        D(this.l, "p.ic" + this.Uc.id, function() {
                            if (!c.Gc) {
                                var b = c.Fd.C(c.Pd),
                                    d = c.Uc.dh();
                                x(function(e) {
                                    var f = A(function(g) {
                                        return z({}, g)
                                    }, d);
                                    P(e) && e(f)
                                }, b);
                                c.Ka = T(c.l, G(c.Jf, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.Yh = function(c) {
                        this.Gc || (this.$i(c), this.aj(), this.Hg())
                    };
                    a.prototype.Mg = function(c, b) {
                        return (c.me || 0) <= (b.me || 0) ? b : c
                    };
                    a.prototype.Ji = function(c) {
                        if (this.fa.length) {
                            c = lj(c);
                            var b = U(this.l).hostname,
                                d;
                            if (d = c) d = Ke(c.hostname) === Ke(b);
                            d && (c = N(this.Mg, this.fa[0], this.fa).id, b = Fc(this.l), ed(this.l, this.oa.split(":")[0]).D("pai", c + "-" + b))
                        }
                    };
                    a.prototype.bc = function(c) {
                        var b = this;
                        D(this.l, "p.ec." + this.Uc.id, function() {
                            var d, e;
                            try {
                                var f = c.type;
                                var g = c.target
                            } catch (p) {
                                return
                            }
                            var h = "page" === f;
                            if ("scroll" === f || h) {
                                var k = [b.l, b.l.document, b.l.document.documentElement, Lc(b.l)];
                                I(g, k) && b.Kb()
                            }("resize" === f || h) && b.ig();
                            f = b.time(Z);
                            var l = Math.min(f - b.sf, 5E3);
                            b.involvedTime += Math.round(l);
                            b.sf = f;
                            if (b.meta && b.scroll && b.yb) {
                                var m = b.yb.h * b.yb.w;
                                b.fa = A(function(p) {
                                    var q = z({}, p),
                                        r = b.meta[q.id],
                                        t = Qc(p.Eb);
                                    if (!r || b.pf(q.element) || !t) return q;
                                    p = b.l.Math;
                                    r = p.max((b.scroll.y + b.yb.h - r.y) / r.height, 0);
                                    var y = t.height * t.width;
                                    t = zh(b.l, t, b.yb);
                                    q.me = t / m;
                                    q.visibility = t / y;
                                    if (.9 <= q.visibility || .1 <= q.me) q.involvedTime += l;
                                    q.maxScrolled = p.round(1E4 * r) / 1E4;
                                    return q
                                }, b.fa);
                                ub(b.l, (d = {}, d.name = "publishers", d.counterKey = b.oa, d.data = (e = {}, e.involvedTime = b.involvedTime, e.contentItems = A(function(p) {
                                    var q;
                                    return z((q = {}, q.contentElement = p.Eb, q), p)
                                }, b.fa), e), d))
                            }
                        })()
                    };
                    a.prototype.$i = function(c) {
                        var b = A(function(d) {
                            return d.id
                        }, this.fa);
                        this.fa = this.fa.concat(ia(function(d) {
                            return !I(d.id, b)
                        }, c))
                    };
                    a.prototype.ig = function() {
                        var c = ne(this.l) || Rc(this.l);
                        this.yb = {
                            w: c[0],
                            h: c[1]
                        }
                    };
                    a.prototype.aj = function() {
                        var c = this;
                        D(this.l, "p.um." + this.Uc.id, function() {
                            var b = [];
                            c.Kb();
                            c.meta = Cb(function(d, e) {
                                var f;
                                if (c.pf(e.element)) b.push(e), delete d[e.id];
                                else {
                                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                    e.Eb && (f = Qc(e.Eb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                    d[e.id] = g
                                }
                                return d
                            }, {}, c.fa);
                            x(function(d) {
                                d = Le(c.l)(d, c.fa);
                                c.fa.splice(d, 1)
                            }, b)
                        })()
                    };
                    a.prototype.Cd = function() {
                        var c, b, d = A(u(this.meta, n), ca(this.meta));
                        return d.length && (this.Ud = Ab(this.l, d), this.Af !== this.Ud) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.involvedTime, b), c) : null
                    };
                    a.prototype.Hg = function() {
                        var c = this;
                        if (this.fa.length) {
                            var b = A(function(d) {
                                var e, f = N(function(g, h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.pg);
                                d.Uf = !0;
                                return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e
                            }, ia(function(d) {
                                return !d.Uf
                            }, this.fa));
                            b.length && (this.buffer = this.buffer.concat(b), Mb(this.l, this.oa, ["pdf", b]))
                        }
                    };
                    a.prototype.Li = function() {
                        this.Se.F(this.l, Nl, this.bc)
                    };
                    a.prototype.Zi = function() {
                        this.Ee && this.Ee();
                        this.Se.xb(this.l, Nl, this.bc)
                    };
                    a.prototype.Kb = function() {
                        this.scroll = {
                            x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                            y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(),
                ee, ih = (ee = {}, ee[1] = 500, ee[2] = 500, ee[3] = 0, ee),
                uu = ["topics", "rubric", "authors"],
                jh = function() {
                    function a(c, b) {
                        var d, e = this;
                        this.id = "a";
                        this.Kd = !1;
                        this.Hb = {};
                        this.tb = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            xf: ["article"]
                        };
                        this.Ce = (d = {}, d.Answer = 3, d.Review = 2, d);
                        this.Ve = v(function(f, g, h) {
                            var k;
                            Mb(e.l, e.oa, "pfi", (k = {}, k.field = f, k.itemField = g, k.value = h, k))
                        }, function(f, g, h) {
                            return "" + f + g + h
                        });
                        this.cj = function(f) {
                            uu.forEach(function(g) {
                                f[g] && (f[g] = f[g].reduce(function(h, k) {
                                    var l = k.name,
                                        m = k.position;
                                    if (!l) return e.Ve(g, "name", l), h;
                                    if ("string" === typeof m) {
                                        l = te(m);
                                        if (null === l || e.l.isNaN(l)) return e.Ve(g, "position", m), h;
                                        k.position = l
                                    }
                                    h.push(k);
                                    return h
                                }, []))
                            });
                            return f
                        };
                        this.Ng = v(function(f, g) {
                            var h;
                            Mb(e.l, e.oa, ["pcs", g], (h = {}, h.chars = g.chars, h.limit = ih[g.type], h))
                        });
                        this.l = c;
                        this.root = hc(c);
                        this.oa = b
                    }
                    a.prototype.Na = function(c) {
                        return c.element
                    };
                    a.prototype.bf = function(c, b) {
                        var d = this,
                            e;
                        D(this.l, "P.s." + b, function() {
                            e = d.Hb[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.Ai = function(c) {
                        var b = z({}, c);
                        this.Kd && !b.id && I(c.type, [3, 2]) && (c = H(", ", A(S("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.Ch(b.Eb));
                        b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Ah());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.Ea = function(c) {
                        var b = this,
                            d = {},
                            e = this.Na(c);
                        if (!e) return null;
                        d.type = c.type;
                        x(function(g) {
                            d[g] = b.bf(c, g)
                        }, ca(this.Hb));
                        var f = ka(this.l);
                        d.stamp = f(bk);
                        d.element = c.element;
                        d.Eb = e;
                        d = this.cj(this.Ai(d));
                        d.id = d.id ? ic(d.id) : 1;
                        d.update = function(g) {
                            return b.Na(c) ? b.bf(c, g) : void 0
                        };
                        return d
                    };
                    a.prototype.Ch = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = ab(fc("h" + b, c));
                            if (d) return d
                        }
                    };
                    a.prototype.Ah = function() {
                        var c = fc('[rel="canonical"]', this.root);
                        if (c) return c.href
                    };
                    a.prototype.gf = function() {
                        return 1
                    };
                    a.prototype.xc = function() {
                        return []
                    };
                    a.prototype.dh = function() {
                        var c = this,
                            b = this.xc(),
                            d = 1;
                        return Cb(function(e, f) {
                            var g = c.Ea({
                                element: f,
                                type: c.gf(f)
                            }) || [];
                            Q(g) || (g = [g]);
                            g = Cb(function(h, k) {
                                var l = h.values,
                                    m = h.jf;
                                k && k.chars > ih[k.type] && !I(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= ih[k.type] && c.Ng(k.id, k);
                                return {
                                    values: l,
                                    jf: m
                                }
                            }, {
                                values: [],
                                jf: A(S("id"), e)
                            }, g).values;
                            return e.concat(A(function(h) {
                                var k;
                                h = z((k = {
                                    index: d,
                                    Uf: !1
                                }, k.involvedTime = 0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                Ol = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Kd = !0;
                        d.Pe = H(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                        d.Hb = (b = {}, b.id = function(e) {
                            var f = e.data["@id"];
                            e = e.data.mainEntity || e.data.mainEntityOfPage;
                            !f && oa(e) && (f = e["@id"]);
                            return f
                        }, b.chars = function(e) {
                            var f = e.data;
                            return fa(f.text) ? f.text.length : Ob(this.Na(e)).length
                        }, b.authors = function(e) {
                            e = e.data;
                            var f = [];
                            f = f.concat(this.wc(e, "author"));
                            f = f.concat(this.wc(e.mainEntity, "author"));
                            return f.concat(this.wc(e.mainEntityOfPage, "author"))
                        }, b.pageTitle = function(e) {
                            var f = e.data,
                                g = f.headline || "";
                            f.alternativeHeadline && (g += " " + f.alternativeHeadline);
                            "" === g && (f.name ? g = f.name : f.itemReviewed && (g = f.itemReviewed));
                            3 === e.type && oa(f.parentItem) && (g = f.parentItem.text);
                            return g
                        }, b.updateDate = function(e) {
                            return e.data.dateModified || ""
                        }, b.publicationDate = function(e) {
                            return e.data.datePublished || ""
                        }, b.pageUrlCanonical = function(e) {
                            return e.data.url
                        }, b.topics = function(e) {
                            return this.wc(e.data, "about", ["name", "alternateName"])
                        }, b.rubric = function(e) {
                            var f = this,
                                g = this.Na(e);
                            e = va(A(function(h) {
                                h = zb(f.l, Ob(h));
                                if (oa(h) || Q(h)) {
                                    var k = f.cf(h);
                                    if (k) return N(function(l, m) {
                                        return l ? l : oa(m) && "BreadcrumbList" === m["@type"] ? m : l
                                    }, null, k);
                                    if ("BreadcrumbList" === h["@type"]) return h
                                }
                                return null
                            }, [e.element].concat(lb(this.Pe, document.body === g ? document.documentElement : g))));
                            return e.length && (e = e[0].itemListElement, Q(e)) ? va(A(function(h) {
                                return oa(h) && h.item && oa(h.item) && !f.l.isNaN(h.position) ? {
                                    name: h.item.name || h.name,
                                    position: h.position
                                } : null
                            }, e)) : []
                        }, b);
                        return d
                    }
                    Na(c, a);
                    c.prototype.wc = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = Q(b[d]) ? b[d] : [b[d]];
                        b = va(A(function(f) {
                            return f ? "string" === typeof f ? f : N(function(g, h) {
                                return g || "" + f[h]
                            }, "", e) : null
                        }, b));
                        return A(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.Na = function(b) {
                        var d = b.element,
                            e = b.data || {};
                        b = e["@id"];
                        var f = e.url;
                        e = null;
                        f && fa(f) && (e = this.Ue(f));
                        !e && b && fa(b) && (e = this.Ue(b));
                        e || (e = b = d.parentNode, !oc("head", this.l, d) && b && 0 !== Ob(b).length) || (e = this.l.document.body);
                        return e
                    };
                    c.prototype.Ue = function(b) {
                        try {
                            var d = Uc(this.l, b).hash;
                            if (d) {
                                var e = fc(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.$d = function(b) {
                        return this.Ce[b["@type"]] || 1
                    };
                    c.prototype.Ea = function(b) {
                        var d = this,
                            e = b.element,
                            f = b.data;
                        if (!f && (f = zb(this.l, Ob(e)), !f || !/schema\.org/.test(f["@context"]) && !Q(f))) return null;
                        var g = this.cf(f);
                        if (g) return A(function(k) {
                            return oa(k) && I(k["@type"], d.tb["schema.org"]) ? a.prototype.Ea.call(d, {
                                element: e,
                                data: k,
                                type: d.$d(k)
                            }) : null
                        }, g);
                        b.data = f;
                        if ("QAPage" === b.data["@type"]) {
                            var h = b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!h) return null
                        }
                        "Question" === b.data["@type"] && (h = b.data);
                        return h ? (b = xc(u(h, n), ["acceptedAnswer", "suggestedAnswer"]), A(function(k) {
                            var l;
                            if (!oa(k) || !I(k["@type"], d.tb["schema.org"])) return null;
                            k = {
                                element: e,
                                type: d.$d(k),
                                data: z((l = {}, l.parentItem = h, l), k)
                            };
                            return a.prototype.Ea.call(d, k)
                        }, b)) : I(b.data["@type"], this.tb["schema.org"]) ? a.prototype.Ea.call(this, z(b, {
                            type: this.$d(b.data)
                        })) : null
                    };
                    c.prototype.xc = function() {
                        return lb(this.Pe, this.root)
                    };
                    c.prototype.cf = function(b) {
                        if (Q(b)) return b;
                        if (b && Q(b["@graph"])) return b["@graph"]
                    };
                    return c
                }(jh),
                kh = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Kd = !0;
                        d.Yi = Fa("exec", new RegExp("schema.org\\/(" + H("|", ca(d.Ce)) + ")$"));
                        d.Hb = (b = {}, b.id = function(e) {
                            e = e.element;
                            var f = hb(this.l, e, "identifier");
                            return f ? ab(f) : (f = hb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function(e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                                var k = hb(this.l, e, g[h]);
                                if (k) {
                                    f = ab(k).length;
                                    break
                                }
                            }
                            e = Ob(e);
                            0 === f && e && (f += e.length);
                            return f
                        }, b.topics = function(e) {
                            var f = this,
                                g = $d(this.l, e.element, "about");
                            return A(function(h) {
                                var k = {
                                    name: ab(h)
                                };
                                if (g = hb(f.l, h, "name")) k.name = ab(g);
                                return k
                            }, g)
                        }, b.rubric = function(e) {
                            var f = this;
                            (e = fc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = fc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                            return e ? A(function(g) {
                                return {
                                    name: ab(hb(f.l, g, "name")),
                                    position: ab(hb(f.l, g, "position"))
                                }
                            }, $d(this.l, e, "itemListElement")) : []
                        }, b.updateDate = function(e) {
                            return (e = hb(this.l, e.element, "dateModified")) ? Ck(e) : ""
                        }, b.publicationDate = function(e) {
                            return (e = hb(this.l, e.element, "datePublished")) ? Ck(e) : ""
                        }, b.pageUrlCanonical = function(e) {
                            e = $d(this.l, e.element, "url");
                            if (e.length) {
                                var f = e[0];
                                return f.href ? f.href : ab(e)
                            }
                            return null
                        }, b.pageTitle = function(e) {
                            var f = "",
                                g = e.element,
                                h = hb(this.l, g, "headline");
                            h && (f += ab(h));
                            (h = hb(this.l, g, "alternativeHeadline")) && (f += " " + ab(h));
                            "" === f && ((h = hb(this.l, g, "name")) || (h = hb(this.l, g, "itemReviewed")), h && (f += ab(h)));
                            3 === e.type && (e = oc('[itemtype$="schema.org/Question"]', this.l, g)) && (e = hb(this.l, e, "text")) && (f += ab(e));
                            return f
                        }, b.authors = function(e) {
                            var f = this;
                            e = $d(this.l, e.element, "author");
                            return A(function(g) {
                                var h, k = (h = {}, h.name = "", h);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = hb(f.l, g, "name")) && (k.name = ab(h));
                                k.name || (k.name = g.getAttribute("content") || Ob(g) || g.getAttribute("href"));
                                return k
                            }, e)
                        }, b);
                        return d
                    }
                    Na(c, a);
                    c.prototype.gf = function(b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.Yi(b)) ? this.Ce[b[1]] : 1
                    };
                    c.prototype.Ea = function(b) {
                        return b.element && Ob(b.element).length ? a.prototype.Ea.call(this, b) : null
                    };
                    c.prototype.xc = function() {
                        var b = H(",", A(function(d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.tb["schema.org"]));
                        return lb(b, this.root)
                    };
                    return c
                }(jh),
                Pl = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Hb = (e = {}, e.chars = function(g) {
                            g = this.Na(g);
                            return Ob(g).length
                        }, e.authors = function(g) {
                            return this.yd(g.data.author)
                        }, e.pageTitle = function(g) {
                            return this.Bc(g.data.title) || ""
                        }, e.updateDate = function(g) {
                            return this.Bc(g.data.modified_time)
                        }, e.publicationDate = function(g) {
                            return this.Bc(g.data.published_time)
                        }, e.pageUrlCanonical = function(g) {
                            return this.Bc(g.data.url)
                        }, e.rubric = function(g) {
                            return this.yd(g.data.section)
                        }, e.topics = function(g) {
                            return this.yd(g.data.tag)
                        }, e);
                        f.Wg = new RegExp("^(og:)?((" + H("|", f.tb.xf) + "):)?");
                        return f
                    }
                    Na(c, a);
                    c.prototype.yd = function(b) {
                        var d;
                        return b ? Q(b) ? A(function(e) {
                            var f;
                            return f = {}, f.name = e ? "" + e : null, f
                        }, b) : [(d = {}, d.name = b ? "" + b : null, d)] : []
                    };
                    c.prototype.Bc = function(b) {
                        return Q(b) ? b.length ? "" + b[0] : null : b ? "" + b : null
                    };
                    c.prototype.xc = function() {
                        var b = lb('meta[property="og:type"]', this.l.document.body);
                        return [this.l.document.head].concat(b)
                    };
                    c.prototype.rh = function(b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.Na(b);
                        e = lb("meta[property]", e === this.l.document.head ? e : g);
                        if (e.length) x(function(h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.Wg, ""),
                                        l = ab(h);
                                    f[k] ? Q(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                Ae(d.l, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return I(f.type, this.tb.xf) ? z(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.Na = function(b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.Ea = function(b) {
                        return (b = this.rh(b)) ? a.prototype.Ea.call(this, b) : null
                    };
                    return c
                }(jh),
                fe = {};
            Ol && (fe.json_ld = Ol);
            kh && (fe.schema = kh, fe.microdata = kh);
            Pl && (fe.opengraph = Pl);
            var vu = B("p.p", function(a, c) {
                    function b(m) {
                        var p = z({}, l);
                        p.ba.da = m;
                        return f(p, c)["catch"](D(a, "s.ww.p"))
                    }
                    var d, e = qi(a, "9", "8");
                    if (!Ea("querySelectorAll", a.document.querySelectorAll) || !e) return K.resolve();
                    var f = wa(a, "p", c),
                        g = Ka(),
                        h = ed(a, c.id),
                        k = h.C("pai");
                    k && (h.Gb("pai"), g.D("pai", k));
                    var l = {
                        J: (d = {}, d["wv-type"] = e.type, d),
                        K: g,
                        ba: {}
                    };
                    return ra(c, D(a, "ps.s", function(m) {
                        var p;
                        if (m = n(m, "settings.publisher.schema")) {
                            nk(c) && (m = "microdata");
                            var q = fe[m];
                            if (q && e) {
                                var r = M(c);
                                q = new q(a, r);
                                q = new tu(a, q, e, b, r);
                                q.start();
                                Mb(a, r, "ps", (p = {}, p.schema = m, p));
                                return G(q.stop, q)
                            }
                        }
                    }))
                }),
                wu = function() {
                    function a(c, b) {
                        this.type = "0";
                        this.l = c;
                        this.ph = b
                    }
                    a.prototype.Ha = function(c) {
                        return Hf(xc(G(this.ub, this), c))
                    };
                    a.prototype.ub = function(c, b) {
                        var d = this,
                            e = [],
                            f = this.ph(this.l, b && b.type, c.type);
                        f && (e = xc(function(g) {
                            return g({
                                l: d.l,
                                qa: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.lb = function(c) {
                        return c.length
                    };
                    a.prototype.se = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                Ql = function() {
                    function a(c, b, d) {
                        this.Qe = 0;
                        this.ae = 1;
                        this.cd = 5E3;
                        this.l = c;
                        this.ma = b;
                        this.Wb = d
                    }
                    a.prototype.Xc = function() {
                        this.Qe = T(this.l, w(G(this.flush, this), G(this.Xc, this)), this.cd, "b.f")
                    };
                    a.prototype.send = function(c, b) {
                        var d = this.Wb(c, b || [], this.ae);
                        this.ae += 1;
                        return d
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush = function() {};
                    return a
                }(),
                po = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.qg = 7500;
                        b.cd = 3E4;
                        b.Xc();
                        return b
                    }
                    Na(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.ma.ub(b, d);
                        sa(this.buffer, e);
                        this.ma.lb(this.buffer) > this.qg && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer;
                        b.length && (this.send(b), this.buffer = [])
                    };
                    return c
                }(Ql),
                Eo = /opera mini/i,
                ki = ["phone", "email"],
                Rl = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                Bo = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                Co = [65, 90],
                Do = [97, 122],
                zo = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                xo = new RegExp("(" + H("|", Rl) + ")", "i"),
                wo = new RegExp("(" + H("|", ki) + ")", "i"),
                Dk = ["password", "passwd", "pswd"],
                yo = new RegExp("(" + H("|", Rl.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) + ")", "i"),
                Ya = "metrikaId_" + Math.random(),
                Bc = {
                    counter: 0
                },
                ts = v(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML = 43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX = 100, a
                }),
                qs = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                xu = function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        vj: new RegExp("(" + H("|", a) + ")", "i"),
                        Fj: new RegExp("(" + H("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) + ")", "i"),
                        tj: /ym-record-keys/i,
                        ki: "\u2022",
                        Ej: 88
                    }
                }(),
                Ik = Xb(u(xu.ki, R)),
                xd = !0,
                Ng = "",
                Og = !1,
                Pg = !0,
                Qg = !1,
                uo = ta(function(a, c) {
                    var b = C([a, "efv." + c.event], D);
                    c.O = A(w(R, b), c.O);
                    return c
                }),
                Sl = v(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(Nf), b.push(ws), b.push(xs));
                    a.document.addEventListener ? c.push(Gk) : (b.push(Fk), d.push(Gk));
                    return to(a, [{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        O: [E]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        O: [E]
                    }, {
                        event: "click",
                        O: [bf]
                    }, {
                        event: "dblclick",
                        O: [bf]
                    }, {
                        event: "mousedown",
                        O: [bf]
                    }, {
                        event: "mouseup",
                        O: [zs]
                    }, {
                        event: "keydown",
                        O: [As]
                    }, {
                        event: "keypress",
                        O: [Bs]
                    }, {
                        event: "copy",
                        O: [Kk]
                    }, {
                        event: "blur",
                        O: c
                    }, {
                        event: "focusin",
                        O: b
                    }, {
                        event: "focusout",
                        O: d
                    }].concat(!a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        O: [ii]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        O: [Nf]
                    }] : []).concat(a.document.addEventListener ? [{
                        event: "focus",
                        O: [Fk]
                    }, {
                        event: "change",
                        O: [Hk]
                    }, {
                        event: "submit",
                        O: [Mk]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        O: [Hk]
                    }, {
                        type: "form",
                        event: "submit",
                        O: [Mk]
                    }]))
                }),
                ro = v(function(a) {
                    return Lc(a) ? [{
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        O: [Cs]
                    }] : []
                }),
                yu = ["submit", "beforeunload", "unload"],
                zu = v(function(a, c) {
                    var b = c(a);
                    return N(function(d, e) {
                        d[e.type + ":" + e.event] = e.O;
                        return d
                    }, {}, b)
                }),
                Au = u(Sl, function(a, c, b, d) {
                    return zu(c, a)[b + ":" + d] || []
                }),
                so = /^\s*function submit\(\)/,
                Bu = B("fw.p", function(a, c) {
                    var b;
                    if (!(b = c.Tg || !c.zb)) {
                        var d = J(a),
                            e = !1;
                        b = d.C("hitParam", {});
                        var f = M(c);
                        b[f] && (d = d.C("counters", {}), e = je(c.ca) && !d[f]);
                        b[f] = 1;
                        b = e
                    }
                    if (b) return K.resolve(E);
                    b = new wu(a, Au);
                    return oo(a, c, b, Sl, yu)
                }),
                lh, Tl = (lh = function(a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.ze = 0;
                        d.Cb = 0;
                        d.ye = 0;
                        d.buffer = [];
                        d.cd = 2E3;
                        d.$ = vd(b);
                        d.Xc();
                        d.ye = f;
                        return d
                    }
                    Na(c, a);
                    c.prototype.$e = function(b) {
                        return va(this.$.T("ag", b))
                    };
                    c.prototype.Ze = function(b, d) {
                        var e = this;
                        b(Ra(D(this.l, "wv2.b.st"), function(f) {
                            e.send(f, d)
                        }))
                    };
                    c.prototype.Ki = function(b, d) {
                        var e = this;
                        la(this.l, this.Qe);
                        var f = Math.ceil(this.ma.lb(d) / 63E4),
                            g = this.ma.se(d, f);
                        x(function(h, k) {
                            var l, m = z({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l.partsTotal = g.length, l));
                            l = e.ma.Ha([m], !1);
                            e.Ze(l, [m])
                        }, g);
                        this.Xc()
                    };
                    c.prototype.send = function(b, d) {
                        var e = this;
                        this.$.T("se", d);
                        return a.prototype.send.call(this, b, d).then(R, function() {
                            e.$.T("see", d)
                        })
                    };
                    c.af = function(b, d, e, f, g) {
                        c.fd["" + b + d] || (this.fd[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                        return this.fd[d]
                    };
                    c.prototype.Wh = function() {
                        return this.ye && this.ze >= this.ye
                    };
                    c.prototype.push = function(b) {
                        var d = this;
                        if (!this.Wh()) {
                            this.$.T("p", b);
                            var e = this.ma.ub(b),
                                f = this.ma.lb(e);
                            7E5 < f ? this.Ki(b, e) : (e = this.$e(this.buffer.concat([b])), e = Cb(function(g, h) {
                                return g + d.ma.lb(d.ma.ub(h))
                            }, 0, e), this.Cb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Cb += f)
                        }
                    };
                    c.prototype.F = function(b, d) {
                        this.$.F([b], d)
                    };
                    c.prototype.ga = function(b, d) {
                        this.$.ga([b], d)
                    };
                    c.prototype.flush = function(b) {
                        var d = this.buffer.concat(this.$e(this.buffer));
                        d.length && (this.buffer = [], this.ze += this.Cb, this.Cb = 0, b = this.ma.Ha(d, b), this.Ze(b, d))
                    };
                    return c
                }(Ql), lh.fd = {}, lh),
                bb = function() {
                    function a(c, b, d) {
                        this.$h = "wv2.c";
                        this.Pb = [];
                        this.ia = [];
                        this.l = c;
                        this.L = Lf(c, this, d, this.$h);
                        this.G = b;
                        this.eb = this.G.uh();
                        this.start = this.L.H(this.start, "st");
                        this.stop = this.L.H(this.stop, "sp")
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.Pb = A(function(b) {
                            var d = b[0],
                                e = b[2];
                            b = G(c.L.H(b[1], d[0]), c);
                            return c.eb.F(e || c.l, d, b)
                        }, this.ia)
                    };
                    a.prototype.stop = function() {
                        x(ma, this.Pb)
                    };
                    a.prototype.Z = function(c) {
                        return this.G.ta().Z(c)
                    };
                    return a
                }(),
                mo = ["checkbox", "radio"],
                no = /pwd|value|password/i,
                mh = S("location.href"),
                Cu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.sa = {
                            elements: [],
                            attributes: []
                        };
                        d.index = 0;
                        d.Wd = d.L.H(d.Wd, "o");
                        d.od = d.L.H(d.od, "io");
                        d.dd = d.L.H(d.dd, "ao");
                        d.ee = d.L.H(d.ee, "a");
                        d.ce = d.L.H(d.ce, "at");
                        d.fe = d.L.H(d.fe, "r");
                        d.de = d.L.H(d.de, "c");
                        d.ra = new b.MutationObserver(d.Wd);
                        return d
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        this.ra.observe(this.l.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    c.prototype.stop = function() {
                        this.ra.disconnect()
                    };
                    c.prototype.dd = function(b) {
                        var d = b.target;
                        b = b.attributeName;
                        var e = Rb(this.l)(d, this.sa.elements); - 1 === e && (e = this.sa.elements.push(d) - 1, this.sa.attributes[e] = {});
                        this.sa.attributes[e] || (this.sa.attributes[e] = {});
                        e = this.sa.attributes[e];
                        var f = d.getAttribute(b);
                        e[b] = xe(this.l, d, b, f, this.G.Jb()).value
                    };
                    c.prototype.od = function(b) {
                        function d(k) {
                            var l = Rb(e.l)(k, f);
                            return -1 === l ? (f.push(k), k = {
                                wd: {}
                            }, g.push(k), k) : g[l]
                        }
                        var e = this,
                            f = [],
                            g = [];
                        x(function(k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                p = k.oldValue,
                                q = k.target,
                                r = k.nextSibling,
                                t = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    e.dd(k);
                                    var y = d(q);
                                    y.wd[l] || (y.wd[l] = xe(e.l, q, l, p, e.G.Jb()).value);
                                    break;
                                case "childList":
                                    m && x(function(F) {
                                        y = d(F);
                                        y.Xe || z(y, {
                                            Xe: q,
                                            jh: r ? r : void 0,
                                            kh: t ? t : void 0
                                        })
                                    }, Ca(m));
                                    break;
                                case "characterData":
                                    y = d(q), y.Ye || (y.Ye = p)
                            }
                        }, b);
                        var h = this.G.ta();
                        x(function(k, l) {
                            h.qe(k, g[l])
                        }, f)
                    };
                    c.prototype.Wd = function(b) {
                        var d = this;
                        if (mh(this.l)) {
                            var e = this.G.stamp();
                            this.od(b);
                            x(function(f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h && h.length && d.fe(Ca(h), e);
                                        g && g.length && d.ee(Ca(g), e);
                                        break;
                                    case "characterData":
                                        d.de(k, e)
                                }
                            }, b);
                            this.ce(e)
                        } else this.stop()
                    };
                    c.prototype.ce = function(b) {
                        var d = this;
                        x(function(e, f) {
                            var g = d.zc();
                            d.G.Y("mutation", {
                                index: g,
                                attributes: d.sa.attributes[f],
                                target: d.Z(e)
                            }, "ac", b)
                        }, this.sa.elements);
                        this.sa.elements = [];
                        this.sa.attributes = []
                    };
                    c.prototype.ee = function(b, d) {
                        var e = this,
                            f = this.zc();
                        this.G.ta().Dc({
                            nodes: b,
                            Wc: function(g) {
                                g = A(function(h) {
                                    h.node = void 0;
                                    return h
                                }, g);
                                e.G.Y("mutation", {
                                    index: f,
                                    nodes: g
                                }, "ad", d)
                            }
                        })
                    };
                    c.prototype.fe = function(b, d) {
                        var e = this,
                            f = this.zc(),
                            g = this.G.ta(),
                            h = A(function(k) {
                                var l = g.removeNode(k);
                                cj(e.l, k, function(m) {
                                    g.removeNode(m)
                                });
                                return l
                            }, b);
                        this.G.Y("mutation", {
                            index: f,
                            nodes: h
                        }, "re", d)
                    };
                    c.prototype.de = function(b, d) {
                        var e = this.zc();
                        this.G.Y("mutation", {
                            value: b.textContent,
                            target: this.Z(b),
                            index: e
                        }, "tc", d)
                    };
                    c.prototype.zc = function() {
                        var b = this.index;
                        this.index += 1;
                        return b
                    };
                    return c
                }(bb),
                Du = function() {
                    function a(c, b) {
                        var d = this;
                        this.vc = [];
                        this.fb = [];
                        this.Vd = 1;
                        this.Ne = this.Qf = 0;
                        this.za = {};
                        this.Nb = {};
                        this.Ib = [];
                        this.Hd = function(f) {
                            return d.fb.length ? I(f, d.fb) : !1
                        };
                        this.removeNode = function(f) {
                            var g = d.Z(f),
                                h = Ma(f);
                            if (h) return h = "NR:" + h.toLowerCase(), d.Hd(h) && d.$.T(h, {
                                data: {
                                    node: f,
                                    id: g
                                }
                            }), g
                        };
                        this.kb = function(f) {
                            var g = Ma(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                return h ? h : (h = d.Vd, f.__ym_indexer = h, d.Vd += 1, g = "NA:" + g.toLowerCase(), d.Hd(g) && d.$.T(g, {
                                    data: {
                                        node: f,
                                        id: h
                                    }
                                }), h)
                            }
                            return null
                        };
                        this.Kf = function() {
                            d.Qf = T(d.l, w(G(d.aa, d, !1), d.Kf), 50, "i.s")
                        };
                        this.If = function() {
                            d.Ne = T(d.l, w(G(d.jd, d, !1), d.If), 50, "i.g")
                        };
                        this.Di = function(f) {
                            null === d.za[f] && delete d.za[f]
                        };
                        this.l = c;
                        var e = Lf(c, this, "i");
                        this.$ = vd(c);
                        this.options = b;
                        this.start = e.H(this.start, "st");
                        this.stop = e.H(this.stop, "sp");
                        this.Z = e.H(this.Z, "i");
                        this.qe = e.H(this.qe, "o");
                        this.Dc = e.H(this.Dc, "a");
                        this.removeNode = e.H(this.removeNode, "r");
                        this.aa = e.H(this.aa, "s");
                        this.jd = e.H(this.jd, "g")
                    }
                    a.prototype.qe = function(c, b) {
                        var d = this.kb(c);
                        Wa(d) || (this.Nb[d] && this.Z(c), this.Nb[d] = b)
                    };
                    a.prototype.F = function(c, b, d) {
                        c = "" + b + c;
                        this.fb.push(c);
                        this.Hd(c) || this.fb.push(c);
                        this.$.F([c], d)
                    };
                    a.prototype.ga = function(c, b, d) {
                        var e = "" + b + c;
                        this.fb = ia(function(f) {
                            return f !== e
                        }, this.fb);
                        this.$.ga([e], d)
                    };
                    a.prototype.start = function() {
                        this.Kf();
                        this.If()
                    };
                    a.prototype.stop = function() {
                        this.flush();
                        la(this.l, this.Ne);
                        la(this.l, this.Qf);
                        this.vc = [];
                        this.Ib = [];
                        this.za = {};
                        this.Nb = {}
                    };
                    a.prototype.Dc = function(c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = {
                                Wc: c.Wc,
                                result: [],
                                Ec: 0,
                                nodes: d
                            };
                        this.vc.push(f);
                        x(function(g) {
                            cj(b.l, g, function(h) {
                                var k = b.kb(h);
                                Wa(k) || (d.push(h), b.za[k] && b.Z(h), b.za[k] = {
                                    node: h,
                                    event: f,
                                    Wi: e
                                }, e += 1)
                            })
                        }, c.nodes)
                    };
                    a.prototype.Z = function(c) {
                        if (c === this.l) return 0;
                        var b = this.kb(c),
                            d = this.za[b],
                            e = this.nh(b),
                            f = e.Xe,
                            g = e.wd,
                            h = e.Ye,
                            k = e.jh,
                            l = e.kh;
                        if (d) {
                            e = d.event;
                            d = d.Wi;
                            var m = $s(this.l) === c;
                            k = k || c.nextSibling;
                            var p = l || c.previousSibling;
                            l = !m && k ? this.kb(k) : null;
                            p = !m && p ? this.kb(p) : null;
                            m = this.l;
                            k = this.options;
                            f = this.kb(f || c.parentNode || c.parentElement) || 0;
                            var q = g,
                                r = void 0;
                            void 0 === p && (p = null);
                            void 0 === l && (l = null);
                            void 0 === q && (q = {});
                            void 0 === r && (r = Ma(c));
                            if (X(r)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    prev: p !== f ? p : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: r.toLowerCase(),
                                    node: c
                                };
                                if (Rf(c)) {
                                    if (h = jo(c, h), g.attributes = {}, g.content = h)
                                        if (c = wd(m, c)) g.content = "" !== $a(h) ? Ao(m, h) : h, g.hidden = c
                                } else h = ko(m, c, k, q, r), m = h.pb, g.attributes = h.Bg, m && (g.hidden = m), c.namespaceURI && db(c.namespaceURI, "svg") && (g.namespace = c.namespaceURI);
                                c = g
                            }
                            if (X(c)) return;
                            this.za[b] = null;
                            this.Ib.push(b);
                            e.result[d] = c;
                            e.Ec += 1;
                            e.nodes.length === e.Ec && e.Wc(e.result)
                        }
                        return b
                    };
                    a.prototype.flush = function() {
                        this.aa(!0)
                    };
                    a.prototype.jd = function() {
                        if (this.Ib.length) {
                            var c = gc(this.Ib, this.Di),
                                b = vg(this.l, 30);
                            c(b)
                        }
                    };
                    a.prototype.aa = function(c) {
                        var b = this;
                        if (mh(this.l)) {
                            var d = ca(this.za);
                            d = N(function(e, f) {
                                b.za[f] && e.push(b.za[f].node);
                                return e
                            }, [], d);
                            d = gc(d, this.Z);
                            c = c ? Zj(E) : Xj(this.l, 20);
                            d(c);
                            this.vc = ia(function(e) {
                                return e.Ec !== e.result.length
                            }, this.vc)
                        }
                    };
                    a.prototype.nh = function(c) {
                        if (Wa(c)) return {};
                        var b = this.Nb[c];
                        return b ? (this.Nb[c] = null, this.Ib.push(c), b) : {}
                    };
                    return a
                }(),
                Eu = ["input", "change", "keyup", "paste", "cut"],
                Fu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.inputs = {};
                        b.rd = !1;
                        b.Lc = b.L.H(b.Lc, "ii");
                        b.Mc = b.L.H(b.Mc, "ir");
                        b.Rc = b.L.H(b.Rc, "ri");
                        b.$c = b.L.H(b.$c, "ur");
                        b.Gd = b.L.H(b.Gd, "ce");
                        b.Cc = b.L.H(b.Cc, "vc");
                        return b
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        var b = this,
                            d = this.G.ta();
                        this.rd = this.Ig();
                        x(function(e) {
                            e = e.toLowerCase();
                            d.F(e, "NA:", G(b.Lc, b));
                            d.F(e, "NR:", G(b.Mc, b))
                        }, Qf);
                        this.Pb = [this.eb.F(this.l.document, Eu, G(this.Gd, this)), function() {
                            x(function(e) {
                                e = e.toLowerCase();
                                d.ga(e, "NA:", b.Lc);
                                d.ga(e, "NR:", b.Mc)
                            }, Qf);
                            x(b.$c, ca(b.inputs))
                        }]
                    };
                    c.prototype.$c = function(b) {
                        var d = this.inputs[b];
                        if (d) {
                            if (this.rd) {
                                var e = d.xi;
                                d = d.element;
                                e && this.l.Object.defineProperty(d, this.Ac(d), e)
                            }
                            delete this.inputs[b]
                        }
                    };
                    c.prototype.Mc = function(b) {
                        b && this.$c(b.data.id)
                    };
                    c.prototype.Lc = function(b) {
                        b && (b = b.data, this.Rc(b.node, b.id))
                    };
                    c.prototype.Ac = function(b) {
                        return Te(b) ? "checked" : "value"
                    };
                    c.prototype.Gd = function(b) {
                        if (b = b.target) {
                            var d = this.Ac(b);
                            this.Cc(b[d], b)
                        }
                    };
                    c.prototype.Cc = function(b, d) {
                        var e = this.Z(d),
                            f = this.inputs[e];
                        if (!f && (f = this.Rc(f, e), !f)) return;
                        e = f.Kg;
                        var g = f.value,
                            h = this.Ac(d),
                            k = !b || I(typeof b, ["string", "boolean", "number"]),
                            l = this.G.Jb().Md;
                        k && b !== g && (g = xe(this.l, d, h, b, this.G.Jb()).value, e ? this.G.Y("event", {
                            target: this.Z(d),
                            checked: !!b
                        }, "change") : (e = Vc(this.l, d, l), l = e.hb, this.G.Y("event", {
                            value: g,
                            hidden: e.qb && !l,
                            target: this.Z(d)
                        }, "change")), f.value = b)
                    };
                    c.prototype.Rc = function(b, d) {
                        var e = this;
                        if (!Jf(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                        var f = Te(b),
                            g = this.Ac(b),
                            h = {
                                element: b,
                                Kg: f,
                                value: b[g]
                            };
                        this.inputs[d] = h;
                        this.rd && Ub(this.l, function() {
                            var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                                l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                                m = z({}, k, l);
                            if (Ea("((set)?(\\s?" + g + ")?)?", m.set)) {
                                try {
                                    e.l.Object.defineProperty(b, g, z({}, m, {
                                        configurable: !0,
                                        set: function(p) {
                                            e.Cc(p, this);
                                            return m.set.call(this, p)
                                        }
                                    }))
                                } catch (p) {}
                                h.xi = m
                            }
                        });
                        return h
                    };
                    c.prototype.Ig = function() {
                        var b = !0,
                            d = eb(this.l)("input");
                        try {
                            d = eb(this.l)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                                g = z({}, e, f);
                            this.l.Object.defineProperty(d, "value", z({}, g, {
                                configurable: !0,
                                set: function(h) {
                                    return g.set.call(d, h)
                                }
                            }));
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1)
                        } catch (h) {
                            b = !1
                        }
                        return b
                    };
                    return c
                }(bb),
                Gu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Xa = {
                            width: 0,
                            height: 0,
                            pageHeight: 0,
                            pageWidth: 0,
                            orientation: 0
                        };
                        b.ia.push([
                            ["resize"], b.vi
                        ]);
                        b.ia.push([
                            ["orientationchange"], b.ti
                        ]);
                        return b
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.Nf()
                    };
                    c.prototype.vi = function() {
                        var b = this.Ed();
                        this.Kh(b) && (this.Xa = b, this.Of(b))
                    };
                    c.prototype.ti = function() {
                        var b = this.Ed();
                        this.Xa.orientation !== b.orientation && (this.Xa = b, this.Gi(b))
                    };
                    c.prototype.qf = function(b) {
                        return !b.height || !b.width || !b.pageWidth || !b.pageHeight
                    };
                    c.prototype.Kh = function(b) {
                        return b.height !== this.Xa.height || b.width !== this.Xa.width
                    };
                    c.prototype.Ed = function() {
                        var b = this.G.jb(),
                            d = Rc(this.l),
                            e = d[0];
                        d = d[1];
                        b = b.Dd();
                        return {
                            width: e,
                            height: d,
                            pageWidth: b ? b.scrollWidth : 0,
                            pageHeight: b ? b.scrollHeight : 0,
                            orientation: this.G.jb().xh()
                        }
                    };
                    c.prototype.Gi = function(b) {
                        var d;
                        void 0 === d && (d = this.G.stamp());
                        this.G.Y("event", {
                            width: b.width,
                            height: b.height,
                            orientation: b.orientation
                        }, "deviceRotation", d)
                    };
                    c.prototype.Of = function(b, d) {
                        void 0 === d && (d = this.G.stamp());
                        this.G.Y("event", {
                            width: b.width,
                            height: b.height,
                            pageWidth: b.pageWidth,
                            pageHeight: b.pageHeight
                        }, "resize", d)
                    };
                    c.prototype.Nf = function() {
                        var b = this.Ed();
                        this.qf(b) ? T(this.l, G(this.Nf, this), 300) : (this.qf(this.Xa) && (this.Xa = b), this.Of(b, 0))
                    };
                    return c
                }(bb),
                gf = function() {
                    function a(c) {
                        this.index = 0;
                        this.wb = {};
                        this.l = c
                    }
                    a.prototype.qc = function(c, b, d) {
                        void 0 === d && (d = {});
                        var e = ka(this.l),
                            f = this.index;
                        this.index += 1;
                        this.wb[f] = {
                            Ka: 0,
                            Vb: !1,
                            hh: c,
                            ed: [],
                            Qd: e(Z)
                        };
                        var g = this;
                        return function() {
                            var h = Qa(arguments),
                                k = d.gb && !g.wb[f].Vb,
                                l = g.wb[f];
                            la(g.l, l.Ka);
                            l.ed = h;
                            l.Vb = !0;
                            var m = e(Z);
                            if (k || m - l.Qd >= b) c.apply(void 0, h), l.Qd = m;
                            l.Ka = T(g.l, function() {
                                k || (c.apply(void 0, h), l.Qd = e(Z));
                                l.Vb = !1;
                                l.ed = []
                            }, b, "th")
                        }
                    };
                    a.prototype.flush = function() {
                        var c = this;
                        x(function(b) {
                            var d = c.wb[b],
                                e = d.Ka,
                                f = d.hh,
                                g = d.ed;
                            d.Vb && (c.wb[b].Vb = !1, f.apply(void 0, g), la(c.l, e))
                        }, ca(this.wb))
                    };
                    return a
                }(),
                Hu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.bg = [];
                        d.He = {
                            x: 0,
                            y: 0
                        };
                        d.Ca = new gf(b);
                        d.Pc = d.L.H(d.Pc, "o");
                        d.ia.push([
                            ["scroll"], d.wi
                        ]);
                        return d
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.G.Y("event", {
                            x: Math.max(this.l.scrollX, 0),
                            y: Math.max(this.l.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ca.flush()
                    };
                    c.prototype.wi = function(b) {
                        if (this.G.jb().lf()) this.Pc(b);
                        else {
                            var d = b.target,
                                e = ia(function(f) {
                                    return f[0] === d
                                }, this.bg).pop();
                            e ? e = e[1] : (e = this.Ca.qc(G(this.Pc, this), 100, {
                                gb: !0
                            }), this.bg.push([d, e]));
                            e(b)
                        }
                    };
                    c.prototype.Pc = function(b) {
                        var d = this.G.jb().Dd();
                        b = b.target;
                        var e = this.Kb(b);
                        d = d === b || this.l === b || this.l.document === b;
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.He.x === f && this.He.y === e) return;
                            this.He = {
                                x: f,
                                y: e
                            }
                        }
                        this.G.Y("event", {
                            x: f,
                            y: e,
                            page: d,
                            target: d ? -1 : this.Z(b)
                        }, "scroll")
                    };
                    c.prototype.Kb = function(b) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (!b) return d;
                        if (b.window === b) return {
                            top: b.scrollY || 0,
                            left: b.scrollX || 0
                        };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView || e.parentWindow,
                            h = e.body;
                        return b !== e || (b = this.G.jb().Dd(), b) ? I(b, [f, h]) ? {
                            top: b.scrollTop || g.scrollY,
                            left: b.scrollLeft || g.scrollX
                        } : {
                            top: b.scrollTop || 0,
                            left: b.scrollLeft || 0
                        } : d
                    };
                    return c
                }(bb),
                Iu = ["mousemove", "mousedown", "mouseup", "click"],
                Ju = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ia.push([Iu, d.ri]);
                        d.Ca = new gf(b);
                        d.Kc = d.L.H(d.Kc, "n");
                        d.Qi = d.L.H(d.Ca.qc(G(d.Kc, d), 100), "t");
                        return d
                    }
                    Na(c, a);
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ca.flush()
                    };
                    c.prototype.ri = function(b) {
                        var d = null;
                        try {
                            d = b.type
                        } catch (e) {
                            return
                        }
                        "mousemove" === d ? this.Qi(b) : this.Kc(b)
                    };
                    c.prototype.Kc = function(b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 === e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.l.document.elementFromPoint(e, f);
                        this.G.Y("event", {
                            x: e || 0,
                            y: f || 0,
                            target: this.Z(b)
                        }, d)
                    };
                    return c
                }(bb),
                Ku = ["focus", "blur"],
                Lu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ia.push([Ku, b.ih]);
                        return b
                    }
                    Na(c, a);
                    c.prototype.ih = function(b) {
                        var d = b.target;
                        b = b.type;
                        this.G.Y("event", {
                            target: this.Z(d === this.l ? this.l.document.documentElement : d)
                        }, b)
                    };
                    return c
                }(bb),
                Mu = v(function(a) {
                    var c = pa(a.getSelection, "getSelection");
                    return c ? G(c, a) : E
                }),
                Nu = w(Mu, ma),
                Ou = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                Pu = /text|search|password|tel|url/,
                Qu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Id = !1;
                        b.ia.push([Ou, b.Ih]);
                        return b
                    }
                    Na(c, a);
                    c.prototype.Ih = function(b) {
                        var d = this.G,
                            e = b.type,
                            f = b.which;
                        b = b.target;
                        if ("mousemove" !== e || 1 === f)(e = "select" === e ? this.Bh(b) : this.zh()) && e.start !== e.end ? (this.Id = !0, d.Y("event", e, "selection")) : this.Id && (this.Id = !1, d.Y("event", {
                            start: 0,
                            end: 0
                        }, "selection"))
                    };
                    c.prototype.zh = function() {
                        var b = Nu(this.l);
                        if (b && 0 < b.rangeCount) {
                            b = b.getRangeAt(0) || this.l.document.createRange();
                            var d = this.Z(b.startContainer),
                                e = this.Z(b.endContainer);
                            if (!X(d) && !X(e)) return {
                                start: b.startOffset,
                                end: b.endOffset,
                                startNode: d,
                                endNode: e
                            }
                        }
                    };
                    c.prototype.Bh = function(b) {
                        if (Pu.test(b.type || "")) {
                            var d = this.Z(b);
                            if (!X(d)) return {
                                start: b.selectionStart,
                                end: b.selectionEnd,
                                target: d
                            }
                        }
                    };
                    return c
                }(bb),
                Ru = {
                    focus: "windowfocus",
                    blur: "windowblur"
                },
                Su = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        X(b.l.document.hidden) ? X(b.l.document.msHidden) ? X(b.l.document.webkitHidden) || (b.visibility = {
                            hidden: "webkitHidden",
                            event: "webkitvisibilitychange"
                        }) : b.visibility = {
                            hidden: "msHidden",
                            event: "msvisibilitychange"
                        } : b.visibility = {
                            hidden: "hidden",
                            event: "visibilitychange"
                        };
                        b.handleEvent = b.L.H(b.handleEvent, "e");
                        return b
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        this.Pb = [this.eb.F(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], G(this.handleEvent, this))]
                    };
                    c.prototype.handleEvent = function(b) {
                        this.G.Y("event", {}, Ru[this.visibility ? this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                    };
                    return c
                }(bb),
                Tu = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                Uu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Yc = {};
                        d.scrolling = !1;
                        d.Lf = 0;
                        d.ia.push([
                            ["scroll"], d.Fi, d.l.document
                        ]);
                        d.ia.push([Tu, d.Si, d.l.document]);
                        d.Ca = new gf(b);
                        d.Ob = d.L.H(d.Ob, "nh");
                        d.Ri = d.L.H(d.Ca.qc(d.Ob, d.G.jb().lf() ? 0 : 50, {
                            gb: !0
                        }), "th");
                        return d
                    }
                    Na(c, a);
                    c.prototype.Fi = function() {
                        var b = this;
                        this.scrolling = !0;
                        la(this.l, this.Lf);
                        this.Lf = T(this.l, function() {
                            b.scrolling = !1
                        }, 150)
                    };
                    c.prototype.Si = function(b) {
                        var d = this,
                            e = "touchcancel" === b.type || "touchend" === b.type;
                        b.changedTouches && 0 < b.changedTouches.length && x(function(f) {
                            var g = d.Dh(f);
                            f.__ym_touch_id = g;
                            e && delete d.Yc[f.identifier]
                        }, Ca(b.changedTouches));
                        "touchmove" === b.type ? this.scrolling ? this.Ob(b) : this.Ri(b, this.G.stamp()) : this.Ob(b)
                    };
                    c.prototype.Dh = function(b) {
                        this.Yc[b.identifier] || (this.Yc[b.identifier] = ci());
                        return this.Yc[b.identifier]
                    };
                    c.prototype.Ob = function(b, d) {
                        void 0 === d && (d = this.G.stamp());
                        var e = b.type,
                            f = A(function(g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, Ca(b.changedTouches));
                        0 < f.length && this.G.Y("event", {
                            touches: f,
                            target: this.Z(b.target)
                        }, e, d)
                    };
                    return c
                }(bb),
                Vu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ia.push([
                            ["load"], b.oi, b.l.document
                        ]);
                        return b
                    }
                    Na(c, a);
                    c.prototype.oi = function(b) {
                        b = b.target;
                        "IMG" === Ma(b) && b.getAttribute("srcset") && this.G.Y("mutation", {
                            target: this.Z(b),
                            attributes: {
                                src: b.currentSrc
                            }
                        }, "ac")
                    };
                    return c
                }(bb),
                Wu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ng = 1;
                        d.Ca = new gf(b);
                        d.ic = d.L.H(d.ic, "z");
                        return d
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        if (this.hf()) {
                            a.prototype.start.call(this);
                            this.ic();
                            var b = this.eb.F(n(this.l, "visualViewport"), ["resize"], this.Ca.qc(this.ic, 10));
                            this.Pb.push(b)
                        }
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ca.flush()
                    };
                    c.prototype.ic = function() {
                        var b = this.hf();
                        b && b !== this.ng && (this.ng = b, this.Hi(b))
                    };
                    c.prototype.hf = function() {
                        var b = ne(this.l);
                        return b ? b[2] : null
                    };
                    c.prototype.Hi = function(b) {
                        var d = ag(this.l);
                        this.G.Y("event", {
                            x: d.x,
                            y: d.y,
                            level: b
                        }, "zoom")
                    };
                    return c
                }(bb),
                ge, hf = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                Ul = {
                    "super": 1,
                    qj: 2,
                    alt: 3,
                    shift: 4,
                    Lj: 5,
                    "delete": 6,
                    oj: 6
                },
                Xu = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                Vl = (ge = {}, ge["1"] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, ge["2"] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, ge.bi = {
                    32: "SPACEBAR",
                    37: "&larr;",
                    38: "&uarr;",
                    39: "&rarr;",
                    40: "&darr;",
                    13: "Enter"
                }, ge),
                Yu = /flash/,
                Zu = /ym-disable-keys/,
                $u = /^&#/,
                av = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.mb = {};
                        d.Oa = 0;
                        d.Fa = [];
                        d.$f = [];
                        d.sc = 0;
                        d.Ef = 0;
                        d.ia.push([
                            ["keydown"], d.Fh
                        ]);
                        d.ia.push([
                            ["keyup"], d.Gh
                        ]);
                        d.xg = -1 !== Gc(n(b, "navigator.appVersion") || "", "Mac") ? "1" : "2";
                        d.Ic = d.L.H(d.Ic, "v");
                        d.ud = d.L.H(d.ud, "ec");
                        d.Vc = d.L.H(d.Vc, "sk");
                        d.Bd = d.L.H(d.Bd, "gk");
                        d.te = d.L.H(d.te, "sc");
                        d.fc = d.L.H(d.fc, "cc");
                        d.reset = d.L.H(d.reset, "r");
                        d.Sc = d.L.H(d.Sc, "rs");
                        return d
                    }
                    Na(c, a);
                    c.prototype.Fh = function(b) {
                        if (this.Ic(b) && !this.Uh(b)) {
                            var d = b.keyCode;
                            b.repeat || this.mb[d] || (this.mb[b.keyCode] = !0, hf[b.keyCode] && !this.Oa ? (this.Oa += 1, this.te(b), this.reset(300)) : this.Oa ? (this.Fg(), this.je(b), this.ud()) : (this.reset(), this.je(b)))
                        }
                    };
                    c.prototype.Gh = function(b) {
                        if (this.Ic(b)) {
                            var d = b.keyCode,
                                e = hf[b.keyCode];
                            this.mb[b.keyCode] && (this.mb[d] = !1);
                            e && this.Oa && (this.Oa = 0, this.mb = {});
                            1 === this.Fa.length && (b = this.Fa[0], I(b.keyCode, Xu) && (this.Vc([b], !0), this.reset()));
                            this.Fa = ia(w(S("keyCode"), Ba(d), Kc), this.Fa);
                            la(this.l, this.sc)
                        }
                    };
                    c.prototype.Ic = function(b) {
                        var d = this.l.document.activeElement;
                        d = d && "OBJECT" === d.nodeName && Yu.test(d.getAttribute("type") || "");
                        b = b.target;
                        if (!b) return !d;
                        b = "INPUT" === b.nodeName && "password" === b.getAttribute("type") && Zu.test(b.className);
                        return !d && !b
                    };
                    c.prototype.ud = function() {
                        this.$f = this.Fa.slice(0);
                        la(this.l, this.sc);
                        this.sc = T(this.l, u(this.$f, G(this.Vc, this)), 0, "e.c")
                    };
                    c.prototype.Vc = function(b, d) {
                        void 0 === d && (d = !1);
                        if (1 < b.length || d) {
                            var e = this.Bd(b);
                            this.G.Y("event", {
                                keystrokes: e
                            }, "keystroke")
                        }
                    };
                    c.prototype.Bd = function(b) {
                        var d = this;
                        b = A(function(e) {
                            e = e.keyCode;
                            var f = hf[e],
                                g = d.vh(e);
                            return {
                                id: e,
                                key: g,
                                isMeta: !!f && $u.test(g),
                                modifier: f
                            }
                        }, b);
                        return Eg(function(e, f) {
                            return (Ul[e.modifier] || 100) - (Ul[f.modifier] || 100)
                        }, b)
                    };
                    c.prototype.vh = function(b) {
                        return Vl[this.xg][b] || Vl.bi[b] || String.fromCharCode(b)
                    };
                    c.prototype.je = function(b) {
                        I(b, this.Fa) || this.Fa.push(b)
                    };
                    c.prototype.te = function(b) {
                        this.je(b);
                        this.fc()
                    };
                    c.prototype.fc = function() {
                        this.Oa ? T(this.l, this.fc, 100) : this.Fa = []
                    };
                    c.prototype.Fg = function() {
                        la(this.l, this.Ef)
                    };
                    c.prototype.reset = function(b) {
                        b ? this.Ef = T(this.l, G(this.Sc, this), b) : this.Sc()
                    };
                    c.prototype.Sc = function() {
                        this.Oa = 0;
                        this.Fa = [];
                        this.mb = {};
                        la(this.l, this.sc)
                    };
                    c.prototype.Uh = function(b) {
                        return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === hf[b.keyCode] : !1
                    };
                    return c
                }(bb),
                io = ["sr", "sd", "\u043d"],
                bv = /allow-same-origin/,
                cv = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Yb = [];
                        d.xd = {};
                        d.Xd = d.L.H(d.Xd, "fi");
                        d.Yd = d.L.H(d.Yd, "sd");
                        d.Zd = d.L.H(d.Zd, "src");
                        d.ra = new b.MutationObserver(d.Zd);
                        return d
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.G.Jb().jc && this.G.ta().F("iframe", "NA:", G(this.Xd, this));
                        this.G.df().zd().F(["sdr"], G(this.Yd, this))
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        x(function(b) {
                            b.G.stop()
                        }, this.Yb)
                    };
                    c.prototype.Zd = function(b) {
                        var d = b.pop().target;
                        if (b = tb(function(f) {
                                return f.kf === d
                            }, this.Yb)) {
                            this.Yb = ia(function(f) {
                                return f.kf !== d
                            }, this.Yb);
                            var e = b.G.Ad();
                            try {
                                b.G.stop()
                            } catch (f) {}
                            this.pc(d, e)
                        }
                    };
                    c.prototype.Xd = function(b) {
                        if (b) {
                            var d = b.data.node;
                            this.ra.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"]
                            });
                            this.pc(d, b.data.id)
                        }
                    };
                    c.prototype.pc = function(b, d) {
                        var e = this;
                        this.Sh(b) && Pb(this.l, b)(Ra(E, function() {
                            var f = e.G.pc(b.contentWindow, d);
                            e.Yb.push({
                                G: f,
                                kf: b
                            })
                        }))
                    };
                    c.prototype.Yd = function(b) {
                        var d = this,
                            e = b.frameId;
                        b = b.data;
                        this.xd[e] || (this.xd[e] = {
                            data: []
                        });
                        var f = this.xd[e];
                        f.data = f.data.concat(b);
                        this.l.isNaN(f.qd) && x(function(g) {
                            "page" === g.type && (f.qd = g.data.recordStamp - d.G.ef())
                        }, f.data);
                        this.l.isNaN(f.qd) || (this.G.aa(A(function(g) {
                            g.stamp += f.qd;
                            g.stamp = d.l.Math.max(0, g.stamp);
                            return g
                        }, f.data)), f.data = [])
                    };
                    c.prototype.Sh = function(b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return b.getAttribute("_ym_ignore") || e && !e.match(bv) || d && "about:blank" !== d && (d = Uc(this.l, d).host) && U(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
                    };
                    return c
                }(bb),
                dv = v(function(a) {
                    var c = n(a, "sessionStorage");
                    if (!c) return null;
                    try {
                        var b = c.getItem("__ym_tab_guid");
                        c = !1;
                        var d = n(a, "opener.sessionStorage");
                        try {
                            c = !!d && b === d.getItem("__ym_tab_guid")
                        } catch (e) {
                            c = !0
                        }
                        if (!b || c) b = ci(), a.sessionStorage.setItem("__ym_tab_guid", b);
                        return b
                    } catch (e) {
                        return null
                    }
                }),
                ev = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ne = b.L.H(b.ne, "ps");
                        return b
                    }
                    Na(c, a);
                    c.prototype.start = function() {
                        this.G.ta().Dc({
                            nodes: [this.l.document.documentElement],
                            Wc: this.ne
                        })
                    };
                    c.prototype.ne = function(b) {
                        var d = this.G.yh(),
                            e = d.oh(),
                            f = U(this.l),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = Rc(this.l),
                            l = k[0];
                        k = k[1];
                        this.G.Y("page", {
                            content: A(function(m) {
                                m.node = void 0;
                                return m
                            }, b),
                            base: e || "",
                            hasBase: !!e,
                            viewport: {
                                width: l,
                                height: k
                            },
                            title: this.l.document.title,
                            doctype: d.qh() || "",
                            address: this.l.location.href,
                            ua: this.l.navigator.userAgent,
                            referrer: this.l.document.referrer,
                            screen: {
                                width: this.l.screen.width,
                                height: this.l.screen.height
                            },
                            location: {
                                host: g,
                                protocol: h,
                                path: f
                            },
                            recordStamp: this.G.ef(),
                            tabId: dv(this.l)
                        }, "page", 0)
                    };
                    return c
                }(bb),
                fv = ["addRule", "removeRule", "insertRule", "deleteRule"],
                nh = [
                    [function(a) {
                        function c(b, d, e) {
                            b = a.call(this, b, d, e) || this;
                            b.ab = {};
                            b.Zb = {};
                            b.Me = 0;
                            b.Nc = b.L.H(b.Nc, "a");
                            b.vb = b.L.H(b.vb, "sr");
                            b.Oc = b.L.H(b.Oc, "r");
                            b.aa = b.L.H(b.aa, "d");
                            return b
                        }
                        Na(c, a);
                        c.prototype.start = function() {
                            var b = this.G.ta();
                            b.F("style", "NA:", this.Nc);
                            b.F("style", "NR:", this.Oc);
                            this.aa()
                        };
                        c.prototype.stop = function() {
                            var b = this;
                            a.prototype.stop.call(this);
                            var d = this.G.ta();
                            d.ga("style", "NA:", this.Nc);
                            d.ga("style", "NR:", this.Oc);
                            this.aa();
                            la(this.l, this.Me);
                            x(function(e) {
                                b.ab[e].sheet && b.Hf(b.ab[e].sheet)
                            }, ca(this.ab));
                            this.ab = {}
                        };
                        c.prototype.aa = function() {
                            var b = this;
                            x(function(d) {
                                var e = d[0];
                                d = d[1];
                                if (d.length) {
                                    for (var f = [], g = d[0].stamp, h = [], k = 0; k < d.length; k += 1) {
                                        var l = d[k],
                                            m = l.stamp;
                                        delete l.stamp;
                                        m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l])
                                    }
                                    f.length && h.push(f);
                                    h.length && x(function(p) {
                                        b.G.Y("event", {
                                            target: Ia(e),
                                            changes: p
                                        }, "stylechange", g)
                                    }, h);
                                    delete b.Zb[e]
                                }
                            }, Oa(this.Zb));
                            this.Me = T(this.l, this.aa, 100)
                        };
                        c.prototype.vb = function(b, d, e, f, g) {
                            void 0 === f && (f = "");
                            void 0 === g && (g = -1);
                            this.Zb[b] || (this.Zb[b] = []);
                            this.Zb[b].push({
                                op: d,
                                style: f,
                                index: g,
                                stamp: e
                            })
                        };
                        c.prototype.yi = function(b, d) {
                            var e = this,
                                f = b.addRule,
                                g = b.removeRule,
                                h = b.insertRule,
                                k = b.deleteRule;
                            P(f) && (b.addRule = function(l, m, p) {
                                e.vb(d, "a", e.G.stamp(), l + "{" + m + "}", p);
                                return f.call(b, l, m, p)
                            });
                            P(g) && (b.removeRule = function(l) {
                                e.vb(d, "r", e.G.stamp(), "", l);
                                return g.call(b, l)
                            });
                            P(h) && (b.insertRule = function(l, m) {
                                e.vb(d, "a", e.G.stamp(), l, m);
                                return h.call(b, l, m)
                            });
                            P(k) && (b.deleteRule = function(l) {
                                e.vb(d, "r", e.G.stamp(), "", l);
                                return k.call(b, l)
                            })
                        };
                        c.prototype.Hf = function(b) {
                            var d = this;
                            x(function(e) {
                                var f = d.l.CSSStyleSheet.prototype[e];
                                P(f) && (b[e] = G(f, b))
                            }, fv)
                        };
                        c.prototype.$g = function(b) {
                            try {
                                return b.cssRules || b.rules
                            } catch (d) {
                                return null
                            }
                        };
                        c.prototype.Nc = function(b) {
                            var d = b.data;
                            b = d.id;
                            d = d.node;
                            if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                var e = d.sheet,
                                    f = this.$g(e);
                                if (f && f.length) {
                                    for (var g = [], h = 0; h < f.length; h += 1) g.push({
                                        style: f[h].cssText,
                                        index: h,
                                        op: "a"
                                    });
                                    this.G.Y("event", {
                                        changes: g,
                                        target: b
                                    }, "stylechange")
                                }
                                this.yi(e, b);
                                this.ab[b] = d
                            }
                        };
                        c.prototype.Oc = function(b) {
                            b = b.data.id;
                            var d = this.ab[b];
                            d && (delete this.ab[b], d.sheet && this.Hf(d.sheet))
                        };
                        return c
                    }(bb), "ss"],
                    [Fu, "in"],
                    [Cu, "mu"],
                    [Gu, "r"],
                    [Hu, "sc"],
                    [Ju, "mo"],
                    [Lu, "f"],
                    [Qu, "se"],
                    [Su, "wf"],
                    [Uu, "t"],
                    [Vu, "src"],
                    [Wu, "z"],
                    [av, "ks"]
                ];
            nh.push([cv, "if"]);
            nh.push([ev, "pa"]);
            var gv = v(function(a) {
                    var c = a.document;
                    return {
                        Dd: function() {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b = 0 === jb(c.compatMode, "CSS1") ? c.documentElement : c.body;
                            return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                        },
                        xh: function() {
                            var b = a.screen;
                            if (!b) return 0;
                            var d = tb(u(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                            return n(b, d + ".angle") || 0
                        },
                        Bj: u(a, kb),
                        lf: u(a, Cd),
                        Aj: u(a, Xe)
                    }
                }),
                hv = function() {
                    function a(c, b) {
                        var d = this;
                        this.Mb = 0;
                        this.pd = [];
                        this.Lb = null;
                        this.wa = this.$b = this.Yf = !1;
                        this.recordStamp = 0;
                        this.yh = function() {
                            return d.page
                        };
                        this.Ad = function() {
                            return d.Mb
                        };
                        this.ef = function() {
                            return d.recordStamp
                        };
                        this.uh = function() {
                            return d.eb
                        };
                        this.df = function() {
                            return d.Lb
                        };
                        this.ta = function() {
                            return d.Jd
                        };
                        this.stamp = function() {
                            return d.xe ? d.l.Math.max(d.xe(Z) - d.recordStamp, 0) : 0
                        };
                        this.Jb = function() {
                            return d.options
                        };
                        this.jb = function() {
                            return d.Cg
                        };
                        this.Y = function(f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            f = d.th(f, g, h, k);
                            d.aa(f)
                        };
                        this.th = function(f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            return {
                                type: f,
                                data: g,
                                stamp: k,
                                frameId: d.Mb,
                                event: h
                            }
                        };
                        this.aa = function(f) {
                            f = Q(f) ? f : [f];
                            d.Yf && !d.$b ? d.wa ? (f = A(function(g) {
                                return g.frameId ? g : z(g, {
                                    frameId: d.Mb
                                })
                            }, f), d.df().Pf(f)) : d.Wb(f) : d.pd = d.pd.concat(f)
                        };
                        this.l = c;
                        var e = Lf(c, this, "R");
                        this.ue = e.H(this.ue, "s");
                        this.aa = e.H(this.aa, "sd");
                        e = J(c);
                        e.C("wv2e") && he();
                        e.D("wv2e", !0);
                        this.options = b;
                        this.eb = ja(c);
                        this.Jd = new Du(this.l, b);
                        this.Cg = gv(c);
                        this.Oe = A(function(f) {
                            return new f[0](c, d, f[1])
                        }, nh);
                        this.Ph();
                        this.page = go(this.l);
                        this.ue()
                    }
                    a.prototype.start = function(c) {
                        this.Yf = !0;
                        this.Wb = c;
                        this.Mf()
                    };
                    a.prototype.stop = function() {
                        mh(this.l) && (x(function(c) {
                            return c.stop()
                        }, this.Oe), this.Jd.stop(), this.Lb && this.Lb.stop(), this.wa || this.Y("event", {}, "eof"))
                    };
                    a.prototype.pc = function(c, b) {
                        var d = new a(c, z({}, this.options, {
                            frameId: b
                        }));
                        d.start(E);
                        return d
                    };
                    a.prototype.Ph = function() {
                        var c = this;
                        this.wa = !!this.options.frameId;
                        this.Mb = this.options.frameId || 0;
                        this.$b = !this.wa;
                        var b = this.options.hg || [];
                        b.push(U(this.l).host);
                        this.Lb = ho(this.l, this, b);
                        b = this.Lb.zd();
                        kb(this.l) ? this.$b && b.F(["i"], function(d) {
                            c.wa = d.wa;
                            c.$b = !1;
                            d.frameId && (c.Mb = d.frameId);
                            c.Mf()
                        }) : this.$b = this.wa = !1
                    };
                    a.prototype.Mf = function() {
                        var c = Ye(this.pd);
                        this.aa(c)
                    };
                    a.prototype.ue = function() {
                        this.xe = hg(this.l);
                        this.recordStamp = this.xe(Z);
                        x(function(c) {
                            c.start()
                        }, this.Oe);
                        this.Jd.start()
                    };
                    return a
                }(),
                iv = function() {
                    return function(a, c, b) {
                        var d = this;
                        this.gd = this.Rb = !1;
                        this.Wa = [];
                        this.tf = [];
                        this.Re = [];
                        this.send = function(e, f, g) {
                            e = d.sender(e, d.oc);
                            f && g && e.then(f, g);
                            return e
                        };
                        this.we = function(e, f, g) {
                            return new K(function(h, k) {
                                e.push([f, h, k, g])
                            })
                        };
                        this.Jh = function() {
                            d.Wa = Eg(function(g, h) {
                                return g[3].partNum - h[3].partNum
                            }, d.Wa);
                            var e = N(function(g, h, k) {
                                    h = h[3];
                                    return g && k + 1 === h.partNum
                                }, !0, d.Wa),
                                f = !!d.Wa[d.Wa.length - 1][3].end;
                            return e && f
                        };
                        this.vd = function(e) {
                            th(d.l, e.slice(), function(f) {
                                d.send(f[0], f[1], f[2])
                            }, 20, "s.w2.sf.fes");
                            Ye(e)
                        };
                        this.gh = function() {
                            d.gd || (d.gd = !0, d.vd(d.tf), d.vd(d.Re))
                        };
                        this.Jg = function(e) {
                            return N(function(f, g) {
                                var h = "page" === g.type && !g.frameId,
                                    k = "eof" === g.data.type || "eof" === g.event,
                                    l = h && !!g.partNum;
                                return {
                                    md: f.md || l,
                                    ld: f.ld || h,
                                    kd: f.kd || k
                                }
                            }, {
                                ld: !1,
                                kd: !1,
                                md: !1
                            }, e)
                        };
                        this.Hh = function(e, f, g) {
                            g ? (e = d.we(d.Wa, e, f[0]), d.Jh() && (d.vd(d.Wa), d.Rb = !0)) : (d.Rb = !0, e = d.send(e));
                            return e
                        };
                        this.ff = function(e, f, g) {
                            var h;
                            f = {
                                J: (h = {}, h["wv-part"] = "" + g, h["wv-type"] = d.Ii, h),
                                K: Ka(),
                                ba: {
                                    da: f
                                }
                            };
                            e && f.K.D("bt", 1);
                            return f
                        };
                        this.Yg = function(e, f, g) {
                            e = d.ff(!1, e, g);
                            return d.Rb ? d.send(e) : d.we(d.Re, e, f)
                        };
                        this.ei = function(e, f, g) {
                            e = d.ff(!0, e, g);
                            if (d.Rb) return d.send(e);
                            var h = d.Jg(f);
                            g = h.ld;
                            var k = h.kd;
                            h = h.md;
                            var l;
                            g && (l = d.Hh(e, f, h));
                            d.gd ? g || (l = d.send(e)) : (g || (l = d.we(d.tf, e, f)), (d.Rb || k) && d.gh());
                            return l
                        };
                        this.l = a;
                        this.Ii = b;
                        this.sender = wa(a, "W", c);
                        this.oc = c
                    }
                }(),
                Wl = v(function(a) {
                    var c = J(a),
                        b = c.C("isEU");
                    if (X(b)) {
                        var d = Ia(ze(a, "is_gdpr") || "");
                        if (I(d, [0, 1])) c.D("isEU", d), b = !!d;
                        else if (a = Pa(a).C("wasSynced"), a = n(a, "params.eu")) c.D("isEU", a), b = !!a
                    }
                    return b
                }, function(a) {
                    return J(a).C("isEU")
                }),
                Gf = B("i.e", Wl),
                jv = B("i.ep", function(a) {
                    Wl(a)
                }),
                kv = B("w2", function(a, c) {
                    function b() {
                        h = !0
                    }
                    var d = J(a),
                        e = M(c);
                    if (!c.zb || qd(a) || !a.MutationObserver || !Ea("Element", a.Element)) return E;
                    Ea("MutationObserver", a.MutationObserver) || pc(a, e).warn("w2mo");
                    var f = Ha(function(k, l) {
                            ra(c, l)["catch"](k)
                        }),
                        g = Pb(a)(Ug(C([a, c], eo)))(kl(function(k) {
                            return new hv(a, k)
                        })),
                        h = !1;
                    Br([g, f])(Ra(D(a, "wv2.R.c"), function(k) {
                        var l = k[0];
                        k = k[1];
                        if (!h) {
                            b = function() {
                                h || (h = !0, l && l.stop())
                            };
                            var m = d.C("wv2Counter");
                            if (!ei(a, k) || m) b();
                            else if (ja(a).F(a, ["beforeunload", "unload"], b), d.D("wv2Counter", e), d.D("stopRecorder", b), k = qi(a, "7", "6")) {
                                m = new iv(a, c, k.type);
                                var p = Tl.af(e, "m", G(m.ei, m), k, a),
                                    q = Tl.af(e, "e", G(m.Yg, m), k, a);
                                k = fo();
                                m = k.mi;
                                q.F("ag", k.Ag);
                                q.F("p", m);
                                p.F("see", function(t) {
                                    var y = !1;
                                    x(function(F) {
                                        "page" === F.type && (y = !0)
                                    }, t);
                                    y && (h || q.push({
                                        type: "event",
                                        event: "fatalError",
                                        data: {
                                            code: "invalid-snapshot",
                                            Zg: "p.s.f",
                                            stack: ""
                                        }
                                    }), b())
                                });
                                var r = Xb(function(t) {
                                    "eof" === n(t, "data.type") || "eof" === t.event ? (q.push(t), p.push(t), q.flush(!0), p.flush(!0)) : ("event" === t.type ? q : p).push(t)
                                });
                                T(a, b, 864E5);
                                Ub(a, function() {
                                    var t, y;
                                    ub(a, (t = {}, t.counterKey = e, t.name = "webvisor", t.data = (y = {}, y.version = 2, y), t));
                                    l.start(r)
                                })
                            }
                        }
                    }));
                    return function() {
                        return b()
                    }
                }),
                lv = B("w2.cs", function(a, c) {
                    var b, d = M(c);
                    eg(a, d, (b = {}, b.webvisor = !!c.zb, b))
                }),
                mv = ["rt", "mf"],
                Ff = v(Nc, M),
                Zh = w(sd, ic),
                nv = ob("isp", function(a, c) {
                    ra(c, function(b) {
                        var d = tb(function(h) {
                            return n(b, "settings." + h)
                        }, mv);
                        if (d && ae(a)) {
                            var e = yf(b) && !re(a),
                                f = Ff(c);
                            z(f, {
                                Sb: d,
                                status: e ? 3 : 4
                            });
                            if (!e) {
                                e = $n(a, c, d);
                                var g = function(h) {
                                    f.status = h
                                };
                                return ("mf" === d ? bo : ao)(a, c, e).then(u(1, g))["catch"](u(2, g))
                            }
                        }
                    })["catch"](D(a, "l.isp"))
                }),
                Xl = B("fbq.o", function(a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function() {
                            var g = Qa(arguments),
                                h = d.apply(void 0, g);
                            c(g);
                            return h
                        };
                        z(e, d);
                        b && x(c, b);
                        a.fbq = e
                    } else var f = T(a, C([a, c].concat(Ca(d && d.queue)), Xl), 1E3, "fbq.d");
                    return G(la, null, a, f)
                }),
                id, Kb, jd, oh = (id = {}, id.add_to_wishlist = "add-to-wishlist", id.begin_checkout = "begin-checkout", id.generate_lead = "submit-lead", id.add_payment_info = "add-payment-info", id),
                ph = (Kb = {}, Kb.AddToCart = "add-to-cart", Kb.Lead = "submit-lead", Kb.InitiateCheckout = "begin-checkout", Kb.Purchase = "purchase", Kb.CompleteRegistration = "register", Kb.Contact = "submit-contact", Kb.AddPaymentInfo = "add-payment-info", Kb.AddToWishlist = "add-to-wishlist", Kb.Subscribe = "subscribe", Kb),
                Yn = (jd = {}, jd["1"] = oh, jd["2"] = oh, jd["3"] = oh, jd["0"] = ph, jd),
                Zn = [ph.AddToCart, ph.Purchase],
                ov = ta(function(a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && {
                            version: "3",
                            uc: d
                        })) a: {
                        if (Q(c) || Ua(c))
                            if (b = Qa(c), d = b[1], "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    uc: d
                                };
                                break a
                            }
                        b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {
                        version: "1",
                        uc: H(",", ca(b))
                    });
                    b && a(b)
                }),
                pv = B("ag.e", function(a, c) {
                    if ("0" === c.ca) {
                        var b = [],
                            d = D(a, "ag.s", C([ma, b], x));
                        ra(c, function(e) {
                            if (n(e, "settings.auto_goals") && Aa(a, c) && (e = He(a, c, "autogoal").reachGoal)) {
                                e = C([e, c.sd], Xn);
                                var f = ov(e);
                                e = C([a, e], Wn);
                                b.push(Xl(a, e));
                                b.push(fj(a, "dataLayer", function(g) {
                                    g.ra.F(f)
                                }))
                            }
                        });
                        return d
                    }
                }),
                qv = /[^\d.,]/g,
                rv = /[.,]$/,
                Un = B("ep.pp", function(a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(qv, "").replace(rv, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (I(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(Vb(b[0]) + "." + Vb(d));
                    d = Math.pow(10, 8) - .01;
                    a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                sv = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]
                ],
                tv = v(function(a) {
                    return new RegExp(H("|", a), "i")
                }),
                uv = B("ep.cp", function(a) {
                    if (!a) return "643";
                    var c = Wi(a);
                    return (a = tb(function(b) {
                        return tv(b[0]).test(c)
                    }, sv)) ? a[1] : "643"
                }),
                vv = v(function() {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h + "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }
                    for (var d = H("", Xh("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")),
                            e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                    return e
                }),
                Rn = B("ep.dec", function(a, c) {
                    if (!c || qd(a)) return [];
                    var b = Xh(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== Rg(b[0])) return [];
                    b = vv();
                    f = H("", f);
                    e = Rg(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(Rg(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = zb(a, b);
                    return Q(d) ? A(es, d) : []
                }),
                Tn = B("ep.ent", function(a, c, b) {
                    a = "" + Xa(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Ua(b)) return "";
                    b = Yh("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }),
                Yl = w(Wh, uv),
                Zl = B("ep.ctp", function(a, c, b, d) {
                    var e = Yl(a, b),
                        f = Vh(a, d);
                    Uh(a, c, e, f);
                    Ea("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                        var g = Yl(a, b),
                            h = Vh(a, d);
                        if (e !== g || f !== h) e = g, f = h, Uh(a, c, e, f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                wv = B("ep.chp", function(a, c, b, d, e) {
                    b && Ef(a, c);
                    return d || e ? ja(a).F(a.document, ["click"], D(a, "ep.chp.cl", C([a, c, d, e], Sn))) : E
                }),
                Av = B("ep.i", function(a, c) {
                    if (od(a)) return Qn(a, c).then(function(b) {
                        var d = b.Ug,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            p = d[7],
                            q = d[8],
                            r = d[9],
                            t = d[10],
                            y = d[11],
                            F = d[12],
                            O = d[13],
                            L = d[14],
                            na = d[15];
                        if (!b.isEnabled) return K.resolve(E);
                        var xa = ue(a, e),
                            Eb = ue(a, h),
                            Id = ue(a, m),
                            Ee = ue(a, q),
                            xv = "" + e + f + g === "" + h + k + l;
                        return new K(function(yv, zv) {
                            Pb(a)(Ra(zv, function() {
                                xa && Zl(a, c, f, g, t, y, F);
                                Eb && !xv && Zl(a, c, k, l, O, L, na);
                                yv(wv(a, c, Id || Ee, p, r))
                            }))
                        })
                    })
                }),
                zn = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                Pn = w(ca, Zc),
                Bv = B("cc.i", function(a, c) {
                    var b = C([a, c], On);
                    b = C([a, b, 300, void 0], T);
                    ra(c, b)
                }),
                Cv = u("9-d5ve+.r%7", R),
                Dv = B("ad", function(a, c) {
                    if (!c.Ta) {
                        var b = J(a);
                        if (!b.C("adBlockEnabled")) {
                            var d = function(m) {
                                    I(m, ["2", "1"]) && b.D("adBlockEnabled", m)
                                },
                                e = Cc(a),
                                f = e.C("isad");
                            if (f) d(f);
                            else {
                                var g = u("adStatus", b.D),
                                    h = function(m) {
                                        m = m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.D("isad", m, 1200);
                                        return m
                                    },
                                    k = wa(a, "adb", c);
                                if (!b.C("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + Cv().replace(/[^a-v]+/g, "") + "t.gif";
                                    Ln(a, function() {
                                        return k({
                                            na: {
                                                Ba: l
                                            }
                                        }).then(u(!1, h))["catch"](u(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                Ev = B("pr.p", function(a, c) {
                    var b, d;
                    if (rg(a)) {
                        var e = wa(a, "5", c),
                            f = Ka((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            K: f,
                            J: (d = {}, d["page-url"] = U(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](D(a, "pr.p.s"))
                    }
                }),
                Th = !1,
                Fv = B("fid", function(a) {
                    var c, b = E;
                    if (!P(a.PerformanceObserver)) return b;
                    var d = J(a);
                    if (d.C("fido")) return b;
                    d.D("fido", !0);
                    var e = new a.PerformanceObserver(D(a, "fid", function(f) {
                        f = f.getEntries()[0];
                        d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function() {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {}
                    return b
                }),
                Gv = B("lt.p", ob("lt.p", function(a) {
                    var c;
                    if (Ea("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0,
                            d = new a.PerformanceObserver(D(a, "lt.o", function(e) {
                                e && e.getEntries && (e = e.getEntries(), b = N(function(f, g) {
                                    return f + g.duration
                                }, b, e), Yd(a).D("lt", b))
                            }));
                        try {
                            d.observe((c = {}, c.type = "longtask", c.buffered = !0, c))
                        } catch (e) {
                            return
                        }
                        return function() {
                            return d.disconnect()
                        }
                    }
                })),
                Hv = v(w(S("performance.memory.jsHeapSizeLimit"), Fa("concat", ""))),
                Iv = ["availWidth", "availHeight", "availTop"],
                Jv = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                Kv = ["webgl", "experimental-webgl"],
                Jn = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                Bf = u(Sa("ccf"), Va),
                In = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                Rh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                Gn = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                Bn = v(Ri),
                Qh = v(zb, gb),
                Lv = B("phc.p", function(a, c) {
                    if (!xl(a)) return ra(c, function(b) {
                        var d = c.id,
                            e = Sc(a, void 0, d),
                            f = e.C("phc_settings") || "";
                        if (b = n(b, "settings.phchange")) {
                            var g = Ab(a, b) || "";
                            g !== f && e.D("phc_settings", g)
                        } else f && (b = Qh(a, f));
                        e = n(b, "clientId");
                        f = n(b, "orderId");
                        b = n(b, "phones") || [];
                        e && f && b.length && (f = {
                            Db: "",
                            Qb: "",
                            Wf: 0,
                            ja: {},
                            Aa: [],
                            nf: !1,
                            gb: !0,
                            l: a,
                            oc: c
                        }, z(f, {
                            nf: !0
                        }), Ph(a, d, f), b = Kd(a), e = Ti(a, b, 1E3), d = G(Ph, null, a, d, f), e.F(d), Ui(a, b))
                    })
                }),
                qh = v(function(a, c) {
                    var b = J(a),
                        d = Pa(a),
                        e = [],
                        f = C([a, c, b, d], Xp);
                    Dd(a) || Yp(a, "14.1") || e.push(C([yn, "pp", ""], f));
                    var g = !Al(a) || zf(a, 68);
                    g && e.push(C([An, "pu", ""], f));
                    !g || d.Ld || ae(a) || (e.push(C([xn, "zzlc", "na"], f)), e.push(C([wn, "cc", ""], f)));
                    return e.length ? {
                        Da: function(h, k) {
                            if (0 === b.C("isEU")) try {
                                x(Ge, e)
                            } catch (l) {}
                            k()
                        },
                        N: function(h, k) {
                            var l = h.K;
                            if (l && 0 === b.C("isEU")) try {
                                x(Ha(l), e)
                            } catch (m) {}
                            k()
                        }
                    } : {}
                }, w(gb, M)),
                Mv = w(function(a) {
                    return (a = n(a, "navigator.plugins")) && Ua(a) ? w(Ca, va, Es(function(c, b) {
                        return c.name > b.name ? 1 : 2
                    }), Xb(Up))(a) : ""
                }, Ce(",")),
                Nv = function(a) {
                    return function(c) {
                        var b = eb(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.ah;
                        e = e.Rg;
                        try {
                            var g = Fa("getContext", b);
                            d = A(w(R, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = tb(R, d)) ? f(c, {
                            canvas: b,
                            Gg: g
                        }) : ""
                    }
                }(function() {
                    return {
                        Rg: Kv,
                        ah: sn
                    }
                }),
                qn = ["name", "lang", "localService", "voiceURI", "default"],
                Ov = B("p.tfs", function(a) {
                    var c = J(a);
                    if (!c.C("tfs")) {
                        c.D("tfs", !0);
                        c = ja(a);
                        var b = E;
                        b = c.F(a, ["message"], function(d) {
                            var e = n(d, "origin");
                            if ("https://iframe-toloka.com" === e || "https://iframe-tasks.yandex" === e)
                                if (d = zb(a, d.data), oa(d) && "appendremote" === d.action)
                                    if (d = Pa(a), d.C("tfsc") || a.confirm("\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?")) {
                                        d.D("tfsc", 1);
                                        var f, g;
                                        J(a).D("_u", (f = {}, f.getCachedTags = Fe, f.button = (g = {}, g.closest = u(a, ke), g.select = Yf, g.getData = u(a, le), g), f));
                                        zc(a, {
                                            src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js"
                                        });
                                        b()
                                    } else a.close()
                        })
                    }
                }),
                on = fb(/[a-z\u0430-\u044f\u0451,.]/gi),
                Pv = B("ice", function(a, c, b) {
                    (c = Aa(a, c)) && (b = Lh(b)) && Kh(a, c, b)
                }),
                Qv = B("ice", function(a, c, b) {
                    (c = Aa(a, c)) && (b = Lh(b)) && tj(a, b.Rh).then(C([a, c, b], Kh), D(a, "ice.s"))
                }),
                Rv = ["text", "email", "tel"],
                Sv = ["cc-", "name", "shipping"],
                Tv = B("icei", function(a, c) {
                    if (tl(a)) {
                        var b = !1,
                            d = E,
                            e = E;
                        ra(c, function(f) {
                            if (!(Gf(a) || n(f, "settings.eu") || b)) {
                                f = n(f, "settings.cf") ? Qv : Pv;
                                var g = C([a, c], f),
                                    h = function(k) {
                                        return Pf(a, k) || !I(k.type, Rv) || Za(Hb, A(u(k.autocomplete, db), Sv)) ? !1 : !0
                                    };
                                d = Mh(a, "input", ["blur"], g, h);
                                e = Mh(a, "form", ["submit"], function(k) {
                                    var l = k.target;
                                    l && (l = lb("input", l), x(function(m) {
                                        h(m) && g({
                                            target: m,
                                            isTrusted: k.isTrusted
                                        })
                                    }, l))
                                })
                            }
                        });
                        return function() {
                            b = !0;
                            d();
                            e()
                        }
                    }
                }),
                Jh, Uv = B("p.ai", function(a, c) {
                    if (Dd(a) || sf(a)) return ra(c, function(b) {
                        var d;
                        if (b = n(b, "settings.sbp")) return Ih(a, z({}, b, (d = {}, d.c = c.id, d)), 10)
                    })
                }),
                Vv = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "),
                $l = ob("uah", function(a) {
                    if (!Ea("getHighEntropyValues", n(a, "navigator.userAgentData.getHighEntropyValues"))) return K.reject("0");
                    try {
                        return a.navigator.userAgentData.getHighEntropyValues(Vv).then(function(c) {
                            if (!oa(c)) throw "2";
                            return c
                        }, function() {
                            throw "1";
                        })
                    } catch (c) {
                        return K.reject("3")
                    }
                }),
                am = new RegExp(H("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")),
                gn = v(function(a) {
                    var c = nb(a);
                    return (c = am.test(c)) ? K.resolve(c) : $l(a).then(function(b) {
                        try {
                            return N(function(d, e) {
                                return d || am.test(e.brand)
                            }, !1, b.brands)
                        } catch (d) {
                            return !1
                        }
                    }, u(!1, R))
                }),
                wc = ["0", "1", "2", "3"],
                Tc = wc[0],
                rf = wc[1],
                Wv = wc[2],
                bm = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"],
                Gh = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(bm),
                qf = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(bm).concat(["28", "29", "30", "31"]),
                Xv = "3 13 14 15 16 17 28".split(" "),
                pe = w(Xb(S("ymetrikaEvent.type")), Ds(vc(qf))),
                Yv = {
                    Zh: !0,
                    url: "https://yastatic.net/s3/gdpr/v3/gdpr",
                    zf: "",
                    rf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ")
                },
                kn = ob("gdpr", function(a, c, b, d, e) {
                    function f(p) {
                        c("10");
                        b.F(Gh, function(q) {
                            var r;
                            q = q.type;
                            l.Sf((r = {}, r.type = q, r));
                            p({
                                value: Hh(q)
                            })
                        })
                    }
                    var g = void 0 === e ? Yv : e;
                    e = g.url;
                    var h = g.zf,
                        k = g.Zh;
                    g = nn(a, g.rf, d.hj);
                    var l = se(a, d);
                    if (!l) return K.resolve({
                        value: Tc,
                        Nd: !0
                    });
                    if (a._yaGdprLoaded) return new K(function(p) {
                        c("7");
                        f(p)
                    });
                    var m = zc(a, {
                        src: "" + e + (k ? "" : g) + h + ".js"
                    });
                    return new K(function(p, q) {
                        m ? (c("7"), m.onerror = function() {
                            var r;
                            c("9");
                            l.Sf((r = {}, r.type = "GDPR-ok-view-default", r));
                            p(null)
                        }, m.onload = u(p, f)) : (c("9"), q(Sa("gdp.e")))
                    })
                }),
                dc, mn = (dc = {}, dc["GDPR-ok"] = "ok", dc["GDPR-ok-view-default"] = "ok-default", dc["GDPR-ok-view-detailed"] = "ok-detailed", dc["GDPR-ok-view-detailed-0"] = "ok-detailed-all", dc["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", dc["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", dc["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", dc),
                en = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "),
                Fh = [],
                Dh = Fa("push", Fh),
                dn = v(function(a, c) {
                    var b = c.C("gdpr");
                    return I(b, wc) ? "-" + b : ""
                }),
                cm = v(Jd),
                Zv = v(function() {
                    var a = N(function(c, b) {
                        "ru" !== b && (c[b] = Il + "." + b);
                        return c
                    }, {}, Bg);
                    x(function(c) {
                        a[c] = c
                    }, ca(Dl));
                    return a
                }),
                Wm = v(function(a) {
                    a = U(a).hostname;
                    return (a = tb(w(S("1"), Si("test"), vb(ma)(a)), Oa(Dl))) && a[0]
                }),
                dm = function(a, c) {
                    return function(b, d) {
                        var e = M(d);
                        e = Zv(e);
                        var f = Um(b, e),
                            g = J(b),
                            h = kb(b);
                        return ae(b) || Wd(b) ? {} : {
                            N: function(k, l) {
                                var m = k.K,
                                    p = Bh(b);
                                m = !(m && m.C("pv"));
                                if (!p || h || m || !f.length) return l();
                                if (g.C("startSync")) cm(b).push(l);
                                else {
                                    g.D("startSync", !0);
                                    p = C([b, f, E, !1], a);
                                    m = tf[0];
                                    if (!m) return l();
                                    m(b).then(p).then(l, w(td(l), D(b, c)))["catch"](E)
                                }
                            }
                        }
                    }
                }(function(a, c, b, d) {
                    var e = ka(a),
                        f = J(a),
                        g = Pa(a);
                    b = bh(a, "c");
                    var h = $b(a, b);
                    return Cb(function(k, l) {
                        function m() {
                            var r = g.C("synced");
                            f.D("startSync", !1);
                            r && (r[l.ai] = p, g.D("synced", r));
                            r = cm(a);
                            x(ma, r);
                            Ye(r)
                        }
                        var p, q = h({
                            ba: {
                                ha: ["sync.cook"],
                                Pa: 1500
                            }
                        }, [Ga.Ra + "//" + l.Oi + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                            p = e(sb);
                            m()
                        })["catch"](function() {
                            p = e(sb) - 1435;
                            m()
                        });
                        q = u(q, R);
                        return k.then(q)
                    }, K.resolve(), c)["catch"](D(a, "ctl"))
                }, "sy.c"),
                Lb, Sm = (Lb = {}, Lb.brands = "chu", Lb.architecture = "cha", Lb.bitness = "chb", Lb.uaFullVersion = "chf", Lb.fullVersionList = "chl", Lb.mobile = "chm", Lb.model = "cho", Lb.platform = "chp", Lb.platformVersion = "chv", Lb),
                Pm = v(function(a) {
                    return $l(a).then(Qm, Tm)
                }),
                $v = ob("ot", function(a, c) {
                    if (Pe(a)) {
                        var b = ja(a);
                        return ra(c, D(a, "ot.s", function(d) {
                            if (n(d, "settings.oauth")) {
                                var e = [],
                                    f = sd(a, c);
                                e.push(b.F(a, ["message"], D(a, "ot.m", u(f, Om))));
                                Pb(a)(Ra(E, D(a, "ot.b", function() {
                                    function g(q) {
                                        var r, t = q.href;
                                        t && eh(t, "https://oauth.yandex.ru/") && !db(t, "_ym_uid=") && (t = db(t, "?") ? "&" : "?", q.href += "" + t + Ic((r = {}, r._ym_uid = f, r.mc = "v", r)), b.F(q, ["click"], D(a, "ot.click", function() {
                                            var y = "et=" + l(Z);
                                            q.href += "&" + y
                                        })))
                                    }
                                    var h, k = a.document.body,
                                        l = ka(a),
                                        m = lb("a", k);
                                    x(g, m);
                                    if (Ea("MutationObserver", a.MutationObserver)) {
                                        m = new a.MutationObserver(D(a, "ot.m", u(function(q) {
                                            q = q.addedNodes;
                                            for (var r = 0; r < q.length; r += 1) {
                                                var t = q[r];
                                                "A" === t.nodeName && g(t)
                                            }
                                        }, x)));
                                        var p = (h = {}, h.childList = !0, h.subtree = !0, h);
                                        m.observe(k, p);
                                        e.push(G(m.disconnect, m))
                                    }
                                })));
                                return C([Ge, e], x)
                            }
                        }))
                    }
                }),
                aw = B("p.cta", function(a) {
                    Pb(a)(Ra(E, function() {
                        var c = J(a);
                        if (Mm(a.document)) {
                            var b = 0;
                            if ($h(a, we, "cta")) {
                                var d = E,
                                    e = function() {
                                        ai(we, "cta");
                                        d();
                                        la(a, b)
                                    };
                                d = ja(a).F(a, ["message"], B("p.cta.o", C([a, c, e], Nm)));
                                b = T(a, e, 1500)
                            } else c.D("cta.e", "if")
                        } else c.D("cta.e", "ns")
                    }))
                }),
                Im = ["bidResponse", "bidAdjustment", "bidWon"],
                Jm = ["cpm", "currency", "netRevenue", "requestTimestamp", "responseTimestamp"],
                Ja = {},
                bw = B("pj", function(a, c) {
                    var b, d = Aa(a, c),
                        e = d && d.params;
                    return e ? (b = {}, b.pbjs = function(f) {
                        Q(f) && (f = ia(Hb, A(function(g) {
                            if (oa(g) && g.data && g.event && oa(g.data)) {
                                var h = n(g, "data.args");
                                return h ? {
                                    event: g.event,
                                    data: h
                                } : g
                            }
                        }, f)), Hm(f), Km(a, e))
                    }, b) : E
                }),
                Fm = /(\D\d*)/g,
                Gm = v(function() {
                    var a = Fe();
                    return N(function(c, b) {
                        c[a[b]] = b;
                        return c
                    }, {}, ca(a))
                }),
                cw = B("g.v.e", function(a, c) {
                    return ra(c, D(a, "g.v.t", function(b) {
                        var d = Aa(a, c);
                        if (d && (b = n(b, "settings.goal_values"))) {
                            var e = ia(w(S("url"), u(a, Am)), b);
                            if (0 !== e.length) {
                                b = ja(a);
                                var f = [];
                                e = C([a, function(g) {
                                    var h, k;
                                    return d.params((h = {}, h.__ym = (k = {}, k.goal_values = g, k), h))
                                }, e], Dm);
                                f.push(b.F(a, ["click"], D(a, "g.v.c", C([e], Bm))));
                                f.push(b.F(a, ["submit"], D(a, "g.v.s", C([a, e], Cm))));
                                return C([w(R, ma), f], x)
                            }
                        }
                    }))
                }),
                em = {},
                fm = v(Nc),
                zm = w(Fa("exec", /counterID=(\d+)/), S("1")),
                gm = ta(function(a, c) {
                    var b, d = fm(a),
                        e = Ca(c),
                        f = e[0],
                        g = e[1],
                        h = e.slice(2);
                    if (g) {
                        e = xm(a, f);
                        var k = e[0],
                            l = e[1];
                        e = M(l);
                        d[e] || (d[e] = {});
                        d = d[e];
                        c.Te || em[g] && N(function(m, p) {
                            return m || !!p(a, l, h, k)
                        }, !1, em[g]) || ("init" === g ? (c.Te = !0, k ? Mb(a, "" + f, "dc", (b = {}, b.key = f, b)) : a["yaCounter" + l.id] = new a.Ya[Ga.lc](z({}, h[0], l))) : k && k[g] && d.Oh ? (k[g].apply(k, h), c.Te = !0) : (b = d.Xf, b || (b = [], d.Xf = b), b.push(sa([f, g], h))))
                    }
                }),
                dw = "close stop focus blur open alert confirm prompt print postMessage captureEvents releaseEvents getSelection getComputedStyle matchMedia moveTo moveBy resizeTo resizeBy scroll scrollTo scrollBy getDefaultComputedStyle scrollByLines scrollByPages find dump requestIdleCallback cancelIdleCallback requestAnimationFrame cancelAnimationFrame reportError setTimeout clearTimeout setInterval clearInterval queueMicrotask fetch self history customElements event frames opener parent frameElement navigator clientInformation external performance visualViewport crypto speechSynthesis localStorage origin indexedDB caches sessionStorage window document location top".split(" "),
                jf, vm = (jf = {}, jf.copyFromWindow = function(a, c, b) {
                    if (I(b, dw) || eh(b, "on")) throw ib("rwp");
                    c = a[b];
                    if (ha(c) || Wc(a, c) || fa(c) || P(c)) return c;
                    if (Q(c)) return Xd(c);
                    if (oa(c)) return wm(c)
                }, jf.loadScript = function(a, c, b, d, e) {
                    a = zc(a, {
                        src: b
                    });
                    if (!a) throw ib("stce");
                    P(d) && (a.onload = function() {
                        return d.apply(null)
                    });
                    P(e) && (a.onerror = function() {
                        return e.apply(null)
                    })
                }, jf),
                vh = E,
                om = v(function(a, c) {
                    vh = c
                }),
                pm = ["ymab", "rcmx", "yaServey", "ym_debug"],
                ew = ob("is", function(a) {
                    var c;
                    if (!kb(a)) {
                        var b = Cc(a);
                        if (We(a, "0")) b.Gb("sup_debug");
                        else {
                            var d = We(a, "2"),
                                e = !!b.C("sup_debug");
                            if (d || e) a._ym_debug = !0, b.D("sup_debug", "1", 1440), nm(a)((c = {}, c.code = [
                                [1, "ym_debug", [18, ["a", [37, [40, "require"], "loadScript"]]],
                                    [2, [37, [40, "a"], Jl + "/tag_debug.js"]]
                                ]
                            ], c))
                        }
                    }
                }),
                mm = B("destruct.e", function(a, c, b) {
                    return function() {
                        var d = J(a),
                            e = c.id;
                        x(function(f, g) {
                            return P(f) && D(a, "dest.fr." + g, f)()
                        }, b);
                        delete d.C("counters")[M(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                kd = J(window);
            kd.Ia("hitParam", {});
            kd.Ia("lastReferrer", window.location.href);
            (function() {
                W.push(function(a, c) {
                    var b;
                    return b = {}, b.firstPartyParams = ot(a, c), b.firstPartyParamsHashed = Oq(a, c), b
                });
                be.push("fpp");
                be.push("fpmh")
            })();
            (function() {
                var a = J(window);
                a.Ia("getCounters", pt(window));
                ld.push(qt);
                Tg.push(function(c, b) {
                    b.counters = a.C("getCounters")
                })
            })();
            (function() {
                W.push(function(a, c) {
                    var b;
                    ub(a, (b = {}, b.counterKey = M(c), b.name = "counter", b.data = mk(c), b))
                })
            })();
            Da["1"] = qb;
            W.push(rt);
            za["1"] = uc;
            xb(dg, -1);
            Yb["1"] = [
                [dg, -1],
                [Ue, 1],
                [Oe, 2],
                [Sb(), 3]
            ];
            W.push(st);
            W.push(B("p.ar", function(a, c) {
                var b, d = wa(a, "a", c);
                return b = {}, b.hit = function(e, f, g, h, k, l) {
                    var m, p, q, r = {
                        J: {},
                        K: Ka((m = {}, m.pv = 1, m.ar = 1, m))
                    };
                    f = oa(f) ? {
                        title: f.title,
                        Df: f.referer,
                        R: f.params,
                        ec: f.callback,
                        l: f.ctx
                    } : {
                        title: f,
                        Df: g,
                        R: h,
                        ec: k,
                        l: l
                    };
                    h = Md(c);
                    g = e || U(a).href;
                    h.url !== g && (h.ref = h.url, h.url = e);
                    e = f.Df || h.ref || a.document.referrer;
                    h = nc(a, c, "pv", (p = {}, p.id = c.id, p.url = g, p.ref = e, p), f.R);
                    p = z(r.M || {}, {
                        R: f.R,
                        title: f.title
                    });
                    r = d(z(r, {
                        M: p,
                        J: z(r.J || {}, (q = {}, q["page-url"] = g, q["page-ref"] = e, q))
                    }), c).then(h);
                    return Yc(a, "p.ar.s", r, f.ec || E, f.l)
                }, b
            }));
            Da.a = qb;
            Yb.a = Zb;
            za.a = rl;
            W.push(He);
            Da.g = qb;
            za.g = uc;
            Yb.g = Zb;
            W.push(tt);
            W.push(ut);
            Yb.t = Zb;
            Da.t = qb;
            za.t = uc;
            W.push(B("cl.p", function(a, c) {
                function b(p, q, r, t) {
                    void 0 === t && (t = {});
                    r ? Je(a, c, {
                        url: r,
                        ob: !0,
                        Fc: p,
                        Jc: q,
                        sender: e,
                        lg: t
                    }) : h.warn("clel")
                }
                var d, e = wa(a, "2", c),
                    f = [],
                    g = M(c),
                    h = pc(a, g),
                    k = D(a, "s.s.tr", u(Me(a, g), Gq));
                g = {
                    l: a,
                    cb: c,
                    bh: f,
                    sender: e,
                    xj: J(a),
                    Pg: ed(a, c.id),
                    zj: Fc(a),
                    Vi: u(u(g, ef(a)), w(ma, S("trackLinks")))
                };
                g = D(a, "cl.p.c", u(g, Dq));
                g = ja(a).F(a, ["click"], g);
                c.dg && k(c.dg);
                var l = D(a, "file.clc", C([!0, !1], b)),
                    m = D(a, "e.l.l.clc", C([!1, !0], b));
                f = D(a, "add.f.e.clc", vt(f));
                return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = g, d
            }));
            Yb["2"] = Zb;
            Da["2"] = qb;
            za["2"] = uc;
            Da.r = Td("r");
            za.r = rl;
            cb.push(B("p.r", function(a, c) {
                var b = xt(a),
                    d = wa(a, "r", c),
                    e = D(a, "rts.p");
                return ra(c, C([function(f, g) {
                    var h = {
                            id: g.Og,
                            ca: g.ca
                        },
                        k = {
                            ba: {
                                da: g.zi
                            },
                            K: Ka(g.Dg),
                            J: g.R,
                            M: {
                                Ub: g.Ub
                            },
                            na: {
                                Ba: g.Ba
                            }
                        };
                    g.Ja && (k.Ja = vf(g.Ja));
                    h = d(k, h)["catch"](e);
                    return f.then(u(h, R))
                }, K.resolve(), b], N))["catch"](e)
            }));
            aa("r", function(a) {
                return {
                    N: function(c, b) {
                        var d = c.K,
                            e = void 0 === d ? Ka() : d,
                            f = c.M.Ub,
                            g = Ld(a);
                        d = e.C("rqnl", 0) + 1;
                        e.D("rqnl", d);
                        if (e = n(g, H(".", [f, "browserInfo"]))) e.rqnl = d, bg(a);
                        b()
                    },
                    Da: function(c, b) {
                        kj(a, c);
                        b()
                    }
                }
            }, 1);
            xb(Ie, 100);
            aa("1", Ie, 100);
            W.push(yt);
            aa("n", Ue, 1);
            aa("n", Oe, 2);
            aa("n", Sb(), 3);
            aa("n", Ie, 100);
            Da.n = qb;
            za.n = uc;
            qc({
                Le: {
                    ea: "accurateTrackBounce"
                }
            });
            W.push(zt);
            Da.m = Td("cm");
            za.m = kt;
            aa("m", Sb(["u", "v", "vf"]), 1);
            aa("m", Ie, 2);
            qc({
                Lg: {
                    ea: "clickmap"
                }
            });
            W.push(At);
            W.push(Bt);
            W.push(Ct);
            W.push(Dt);
            (function() {
                W.push(Et);
                be.push("ecommerce");
                qc({
                    sd: {
                        ea: "ecommerce",
                        Ua: function(a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                })
            })();
            W.push(Ft);
            cb.push(Ht);
            W.push(It);
            be.push("user_id");
            cb.push(B("p.st", Jt));
            W.push(Kt);
            xb(function(a, c) {
                return {
                    Da: function(b, d) {
                        var e = Aa(a, c);
                        e = e && e.userParams;
                        var f = (b.M || {}).Fe;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            Vd.push("debug");
            tc.unshift(Nt);
            W.push(Ot);
            tc.push(function(a) {
                var c = J(a);
                c.C("i") || (c.D("i", !0), ja(a).F(a, ["message"], u(a, bq)))
            });
            (function() {
                var a, c = (a = {}, a.tp = w(gb, nk, Qb), a.tpid = w(gb, Qr), a);
                z(Qd, c)
            })();
            xb(Gd, 20);
            aa("n", Gd, 20);
            aa("1", Gd, 20);
            tc.unshift(Qt);
            Qd.fp = function(a, c, b) {
                if (b.J && b.J.nohit) return null;
                b = J(a).C;
                if (!b("fpe")) return null;
                c = Pt(c);
                if (c.fh) return null;
                b = b("fht", Infinity);
                a: {
                    var d = n(a, "performance.getEntriesByType");
                    if (P(d)) {
                        if (a = ia(w(R, S("name"), Ba("first-contentful-paint")), d.call(a.performance, "paint")), a.length) {
                            a = a[0].startTime;
                            break a
                        }
                    } else {
                        var e = n(a, "chrome.loadTimes");
                        d = ol(a);
                        if (P(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                            a = 1E3 * e - d;
                            break a
                        }
                        if (a = n(a, "performance.timing.msFirstPaint")) {
                            a -= d;
                            break a
                        }
                    }
                    a = void 0
                }
                return a && b > a ? (c.fh = a, Math.round(a)) : null
            };
            cb.push(Rt);
            W.push(function(a, c) {
                var b;
                return b = {}, b.ecommerceAdd = B("ecm.a", Tt(a, c)), b.ecommerceRemove = B("ecm.r", Ut(a, c)), b.ecommerceDetail = B("ecm.d", Vt(a, c)), b.ecommercePurchase = B("ecm.p", Wt(a, c)), b
            });
            (function() {
                var a, c = {};
                c.bu = bu;
                c.pri = Kp;
                c.wv = u(2, R);
                c.ds = Np;
                c.co = function(b) {
                    return Bb(J(b).C("jn"))
                };
                c.td = hu;
                z(c, (a = {}, a.iss = w(Os, Qb), a.hdl = w(Ps, Qb), a.iia = w(Qs, Qb), a.cpf = w(au, Qb), a.ntf = v(function(b) {
                    b = n(b, "Notification.permission");
                    b = "denied" === b ? !1 : "granted" === b ? !0 : null;
                    return Wa(b) ? null : b ? 2 : 1
                }), a.eu = cc("isEU"), a.ns = ol, a.np = function(b) {
                    return Xa(b, 0, 100) ? null : md(me($a(Uf(b), 100)))
                }, a));
                c.pani = cu;
                c.pci = du;
                c.si = eu;
                c.gi = fu;
                z(Qd, c)
            })();
            (function() {
                var a = {};
                a.hc = cc("hc");
                a.oo = cc("oo");
                a.pmc = cc("cmc");
                a.lt = function(c) {
                    var b = Yd(c).C("lt", null);
                    return b ? c.Math.round(100 * b) : b
                };
                a.re = w(or, Qb);
                a.aw = function(c) {
                    c = tb(w(ha, Kc), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                    return ha(c) ? null : Bb(!c)
                };
                a.rcm = ku;
                a.yu = function(c) {
                    return (c = Sc(c, "").C("yandexuid")) && c.substring(0, 25)
                };
                a.ifc = cc("ifc");
                a.ifb = cc("ifb");
                a.ecs = cc("ecs");
                a.csi = cc("scip");
                a.cdl = cc("cdl");
                z(kg, a)
            })();
            za.er = gd;
            (function(a) {
                try {
                    var c = bh(a, "er"),
                        b = Gp(a, c);
                    ek.push(function(d, e, f, g) {
                        var h, k, l, m, p;
                        .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[Ga.cc] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                    })
                } catch (d) {}
            })(window);
            (function() {
                nf.push(Jp);
                Ne.unshift(Fp);
                gh.push(function(a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    J(a).D("oo", c)
                })
            })();
            xb(function(a, c) {
                return {
                    N: function(b, d) {
                        var e = b.J,
                            f = b.K;
                        !Gl[c.id] && f.C("pv") && c.exp && !e.nohit && (e.exp = c.exp, Gl[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            W.push(lu);
            Yb.e = Zb;
            Da.e = qb;
            za.e = uc;
            qc({
                exp: {
                    ea: "experiments"
                }
            });
            yk.experiments = "ex";
            (function() {
                var a;
                tf.push(mu);
                Da.f = qb;
                z(za, (a = {}, a.f = ql, a));
                aa("f", Sb(), 1);
                aa("f", Bj, 2);
                aa("f", Gd, 20)
            })();
            nf.push(function(a, c) {
                var b = {
                        oa: M(c),
                        nd: Aa(a, c),
                        cg: ka(a),
                        Td: Pa(a)
                    },
                    d = b.cg(sb);
                if (!b.Td.Ld) {
                    var e = b.Td.C("ymoo" + b.oa);
                    if (e && 30 > d - e) b = b.oa, delete J(a).C("counters", {})[b], Va(Sa("uws"));
                    else ra(c, nu(b))["catch"](D(a, "d.f"))
                }
            });
            (function() {
                var a, c, b = [Gb];
                z(za, (a = {}, a.s = b, a.S = b, a.u = gd, a));
                z(Da, (c = {}, c.s = $b, c.S = qb, c.u = $b, c));
                aa("s");
                aa("u");
                aa("S", Sb(["v", "hid", "u", "vf", "rn"]), 1);
                W.push(B("s", qp))
            })();
            Da["8"] = $b;
            za["8"] = [jg];
            pl.push([jg, 0]);
            W.push(B("p.us", function(a, c) {
                return ra(c, function(b) {
                    if (n(b, "settings.sbp")) return Ci(a, b, {
                        cb: c,
                        Sb: "8",
                        Rd: "cs"
                    })
                })
            }));
            aa("p", Sb(hh), 1);
            Wg("pub", function(a, c) {
                return {
                    N: function(b, d) {
                        pi(a, c, b);
                        d()
                    }
                }
            }, 1);
            Da.p = ru;
            za.p = va([Fb, Gb]);
            cb.push(vu);
            qc({
                zb: {
                    ea: "webvisor",
                    Ua: Hb
                },
                Tg: {
                    ea: "disableFormAnalytics",
                    Ua: Hb
                }
            });
            aa("4", Sb(hh), 1);
            Da["4"] = Kl;
            za["4"] = va([Fb, Gb, $c]);
            cb.push(Bu);
            (function() {
                aa("W", Sb(hh), 1);
                Wg("wv", Fo, 1);
                za.W = va([Fb, Gb]);
                Da.W = Kl;
                cb.push(kv);
                W.push(lv);
                qc({
                    zb: {
                        ea: "webvisor"
                    }
                });
                qc({
                    Xi: {
                        ea: "trustedDomains"
                    },
                    jc: {
                        ea: "childIframe",
                        Ua: Hb
                    }
                });
                gh.push(function(a) {
                    J(a).C("stopRecorder", E)()
                })
            })();
            W.push(nv);
            aa("pi");
            Da.pi = $b;
            za.pi = gd;
            Wg("w", function(a, c) {
                return {
                    N: function(b, d) {
                        if (b.K) {
                            var e = Ff(c),
                                f = e.status;
                            "rt" === e.Sb && f && (b.K.D("rt", f), b.na || (b.na = {}), b.na.Lh = 1 === f ? Zh(a, c) + "." : "")
                        }
                        d()
                    }
                }
            }, 2);
            W.push(pv);
            W.push(Av);
            za["6"] = va([Fb, Gb]);
            Da["6"] = $b;
            W.push(Bv);
            W.push(iu);
            (function() {
                Tg.push(function(a, c) {
                    c.informer = Mn(a)
                })
            })();
            xb(Cf, 6);
            aa("1", Cf, 6);
            aa("adb");
            aa("n", Cf, 4);
            za.adb = gd;
            Da.adb = Rj;
            ld.push(Dv);
            za["5"] = uc;
            Da["5"] = qb;
            Yb["5"] = ia(w(Zc, vc([Ue, Oe]), Kc), Zb);
            W.push(Ev);
            aa("5", Gd, 20);
            xb(Sh, 7);
            aa("n", Sh, 6);
            cb.push(Fv);
            Da.d = qb;
            aa("d", Sb(["hid", "u", "v", "vf"]), 1);
            za.d = gd;
            aa("n", function(a, c) {
                return {
                    Da: function(b, d) {
                        if (!b.M || !b.M.force) {
                            var e = .002,
                                f = c.id === Ga.vg ? 1 : .002,
                                g, h, k, l, m;
                            void 0 === e && (e = 1);
                            void 0 === f && (f = 1);
                            var p = Ed(a);
                            if (p && P(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                p = p.getEntriesByType("resource");
                                for (var q = {}, r = {}, t = {}, y = Fl(), F = U(a).href, O = 0; O < p.length; O += 1) {
                                    var L = p[O],
                                        na = L.name.replace(El, "").split("?")[0],
                                        xa = ic(na),
                                        Eb = (g = {}, g.dns = Math.round(L.domainLookupEnd - L.domainLookupStart), g.tcp = Math.round(L.connectEnd - L.connectStart), g.duration = Math.round(L.duration), g.response = Math.round(L.responseEnd - L.requestStart), g);
                                    "script" !== L.initiatorType || e || (r[na] = z(Eb, (h = {}, h.name = L.name, h.decodedBodySize = L.decodedBodySize, h.transferSize = Math.round(L.transferSize), h)));
                                    !ju[xa] && !y[xa] || q[na] || f || (q[na] = z(Eb, (k = {}, k.pages = F, k)))
                                }
                                ca(q).length && (t.timings8 = q);
                                ca(r).length && (t.scripts = r);
                                if (ca(t).length) wa(a, "d", c)({
                                    K: Ka((l = {}, l.ar = 1, l.pv = 1, l)),
                                    ba: {
                                        da: Ab(a, t) || void 0
                                    },
                                    J: (m = {}, m["page-url"] = F, m)
                                }, {
                                    id: Ga.yg,
                                    ca: "0"
                                })["catch"](D(a, "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            za.ci = [Gb];
            Da.ci = $b;
            cb.push(B("p.sci", function(a, c) {
                return ra(c, u(a, Kn))["catch"](D(a, "ins.cs"))
            }));
            W.push(Gv);
            cb.push($t);
            W.push(Lv);
            xb(qh, 8);
            aa("f", qh, 3);
            aa("n", qh, 5);
            ld.push(function(a) {
                return B("fip", function(c) {
                    if (!Al(c) || Wd(c)) {
                        var b = Pa(c);
                        if (!b.C("fip")) {
                            var d = w(Xb(w(function(e, f) {
                                return B("fip." + f, e)(c)
                            }, G(ps, null))), Ce("-"))(a);
                            b.D("fip", d)
                        }
                    }
                })
            }([Nv, Mv, function(a) {
                var c = n(a, "ApplePaySession"),
                    b = U(a).protocol;
                a = c && "https:" === b && !kb(a) ? c : void 0;
                c = "";
                if (!a) return c;
                try {
                    c = "" + a.canMakePayments();
                    b = "";
                    var d = a.supportsVersion;
                    if (P(d))
                        for (var e = 1; 20 >= e; e += 1) b += d.call(a, e) ? "" + e : "0";
                    return b + c
                } catch (f) {
                    return c
                }
            }, function(a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }, function(a) {
                if (a = Zt(a)) try {
                    for (var c = [], b = 0; b < Bl.length; b += 1) {
                        var d = a(Bl[b]);
                        c.push(d)
                    }
                    var e = c
                } catch (f) {
                    e = []
                } else e = [];
                return e ? H("x", e) : ""
            }, function(a) {
                var c = void 0;
                void 0 === c && (c = Jv);
                var b = n(a, "navigator") || {};
                c = A(u(b, n), c);
                c = H("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = pa(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + Ua(e)
            }, Hv, function(a) {
                a = n(a, "screen") || {};
                return H("x", A(u(a, n), Iv))
            }, function(a) {
                return H("x", pn(a) || [])
            }, function(a) {
                a = Fn(a);
                return Q(a) ? H("x", a) : a
            }, function(a) {
                return (a = Hn(a)) ? H("x", A(C(["", ["matches", "media"]], rn), va(xh(a)))) : ""
            }]));
            xb(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.K,
                            e = Pa(a).C("fip");
                        e && d && (d.D("fip", e), qe(c, "fip", Bb(e)));
                        b()
                    }
                }
            }, 9);
            aa("h", function(a) {
                return {
                    Da: function(c, b) {
                        var d = c.Ei;
                        Wf(c) && d && J(a).D("isEU", n(d, "settings.eu"));
                        b()
                    }
                }
            }, 3);
            ld.push(jv);
            tc.push(Ov);
            cb.push(Tv);
            W.push(Uv);
            qc({
                gj: {
                    ea: "yaDisableGDPR"
                },
                hj: {
                    ea: "yaGDPRLang"
                }
            });
            Ne.push(function(a, c) {
                return {
                    N: C([a, c], an)
                }
            });
            Vd.push("gdpr");
            Vd.push("gdpr_popup");
            Ag.push(function(a, c) {
                var b = oe(a);
                b = pe(b);
                if (ia(vc(Xv), b).length) return !0;
                b = c(a, "gdpr");
                return I(b, [Tc, Wv])
            });
            Ne.push(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.na || {},
                            e;
                        (e = n(a, "document.referrer")) ? (e = Uc(a, e).host, e = uj(e), e = Il + "." + (e || ou)) : e = lc;
                        c.na = z(d, {
                            Mh: [e]
                        });
                        b()
                    }
                }
            });
            xb(dm, 5);
            aa("1", dm, 6);
            za.c = gd;
            Da.c = $b;
            aa("1", Ah, 7);
            xb(Ah, 7);
            tc.push(B("hcp", yh));
            cb.push(B("p.ot", $v));
            cb.push(ob("cta", aw, !0));
            aa("n", function(a) {
                var c = J(a);
                return {
                    N: function(b, d) {
                        var e = b.M || {},
                            f = c.C("cta"),
                            g = c.C("cta.e");
                        if (f || g) {
                            e.R || (e.R = {});
                            e.R.__ym || (e.R.__ym = {});
                            var h = {};
                            f ? (f = A(function(k) {
                                var l, m = n(k, "topic");
                                k = n(k, "version");
                                return l = {}, l.topic = m, l.version = k, l
                            }, f), h.ct = f) : g && (h["ct.e"] = g);
                            z(e.R.__ym, h);
                            b.M = z(b.M || {}, e)
                        }
                        d()
                    }
                }
            }, 7);
            aa("n", dg, 8);
            W.push(bw);
            W.push(cw);
            tc.push(B("cdl", function(a) {
                var c = J(a).Ia;
                if (a = n(a, "navigator.cookieDeprecationLabel")) try {
                    a.getValue().then(u("cdl", c), C(["cdl", "e"], c))
                } catch (b) {
                    c("cdl", "d")
                } else c("cdl", "na")
            }));
            z(sl, St);
            W.push(function(a, c) {
                var b = fm(a),
                    d = M(c),
                    e = b[d];
                e || (e = {}, b[d] = e);
                e.Oh = !0;
                if (b = e.Xf) d = gm(a), x(d, b)
            });
            Vd.push("_ym_sup_debug");
            tc.unshift(ew);
            x(vb(ma)(window), tc);
            if (window.Ya && kf) {
                var hm = Ga.lc;
                window.Ya[hm] = kf;
                nt(window);
                x(w(Pc([window, window.Ya[hm]]), ma), Tg)
            }(function(a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || (c.a = [], b = c.a);
                    var d = gm(a);
                    Nd(a, b, function(e) {
                        e.ra.F(d)
                    }, !0)
                }
            })(window)
        })()
    } catch (kf) {};
}).call(this)

function t_animate__init() {
    t_animate__checkAnimationAvailability() && (t_animate__generateStyles(), t_animate__wrapTextWithOpacity(), t_animate__addNoHoverClassToBtns(), t_animate__preventHorizontalScroll(), 1200 <= window.innerWidth && t_animate__parseNumberText(), setTimeout(function() {
        t_animate__startAnimation()
    }, 1500))
}

function t_animate__checkMobile(t) {
    return t.filter(function(t) {
        var e = t.closest(".t396__elem, .t396__group");
        return !(!e || "y" !== e.getAttribute("data-animate-mobile")) || (t.classList.contains("r") ? Array.prototype.forEach.call(t.querySelectorAll(".t-animate"), function(t) {
            t_animate__removeAnimationClass(t, "")
        }) : t_animate__removeAnimationClass(t, ""), !1)
    })
}

function t_animate__removeAnimationClass(e, t) {
    var a;
    e && (e.classList.remove(a = "t-animate"), t && (t = "string" == typeof t ? [t] : t).forEach(function(t) {
        e.classList.remove(a + "_" + t)
    }))
}

function t_animate__preventHorizontalScroll() {
    var t = document.querySelectorAll("[data-animate-style=fadeinleft]");
    !Array.prototype.filter.call(t, function(t) {
        return !t.classList.contains("t396__elem") && !t.closest(".t-cover")
    }).length || window.innerWidth < 980 || (t = document.querySelector(".t-records")) && (t.style.overflowX = "hidden")
}

function t_animate__checkAnimationAvailability() {
    var t = document.querySelector(".t-records"),
        e = t ? t.getAttribute("data-blocks-animationoff") : null,
        t = t ? t.getAttribute("data-tilda-mode") : null;
    return !/Bot/i.test(navigator.userAgent) && "yes" !== e && !t_animate__checkIE() && "edit" !== t || (e = document.querySelectorAll(".t-animate"), Array.prototype.forEach.call(e, function(t) {
        t_animate__removeAnimationClass(t, "")
    }), !1)
}

function t_animate__generateStyles() {
    if (!!document.querySelector(".t396")) {
        for (var t = t_animate__getBreakpointsArr(), e = '.t396 .t-animate[data-animate-style="fadein"],.t396 .t-animate[data-animate-style="fadeinup"],.t396 .t-animate[data-animate-style="fadeindown"],.t396 .t-animate[data-animate-style="fadeinleft"],.t396 .t-animate[data-animate-style="fadeinright"],.t396 .t-animate[data-animate-style="zoomin"],.t396 .t-animate[data-animate-style="zoomout"] {opacity: 0;-webkit-transition-property: opacity, transform;transition-property: opacity, transform;-webkit-transition-duration: 1s;transition-duration: 1s;-webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);-webkit-backface-visibility: hidden;backface-visibility: hidden;}', a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + ".t396 .t-animate[data-animate-style-res-" + n.minRes + '="fadein"],.t396 .t-animate[data-animate-style-res-' + n.minRes + '="fadeinup"],.t396 .t-animate[data-animate-style-res-' + n.minRes + '="fadeindown"],.t396 .t-animate[data-animate-style-res-' + n.minRes + '="fadeinleft"],.t396 .t-animate[data-animate-style-res-' + n.minRes + '="fadeinright"],.t396 .t-animate[data-animate-style-res-' + n.minRes + '="zoomin"],.t396 .t-animate[data-animate-style-res-' + n.minRes + '="zoomout"] {opacity: 0;-webkit-transition-property: opacity, transform;transition-property: opacity, transform;-webkit-transition-duration: 1s;transition-duration: 1s;-webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);-webkit-backface-visibility: hidden;backface-visibility: hidden;}}');
        e += '.t396 .t-title.t-animate {-webkit-transition-duration: 1.2s;transition-duration: 1.2s;}.t396 .t-descr.t-animate,.t396 .t-uptitle.t-animate,.t396 .t-subtitle.t-animate,.t396 .t-text.t-animate {-webkit-transition-duration: 0.7s;transition-duration: 0.7s;}.t396 .t-item.t-animate {-webkit-transition-duration: 0.5s;transition-duration: 0.5s;}.t396 .t-animate[data-animate-style="fadein"] {opacity: 0;transform: none;}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + n.minRes + '="fadein"] {opacity: 0;transform: none;}}');
        e += '.t396 .t-animate_started[data-animate-style="fadein"] {opacity: 1;}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + n.minRes + '="fadein"] {opacity: 1;}}');
        e += '.t396 .t-animate[data-animate-style="fadeinup"] {-webkit-transform: translate(0, 100px);transform: translate(0, 100px);}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + n.minRes + '="fadeinup"] {-webkit-transform: translate(0, 100px);transform: translate(0, 100px);}}');
        e += '.t396 .t-animate_started[data-animate-style="fadeinup"] {opacity: 1;-webkit-transform: none;transform: none;}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + n.minRes + '="fadeinup"] {opacity: 1;-webkit-transform: none;transform: none;}}');
        e += '.t396 .t-animate[data-animate-style="fadeindown"] {-webkit-transform: translate(0, -100px);transform: translate(0, -100px);}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + n.minRes + '="fadeindown"] {-webkit-transform: translate(0, -100px);transform: translate(0, -100px);}}');
        e += '.t396 .t-animate_started[data-animate-style="fadeindown"] {opacity: 1;-webkit-transform: none;transform: none;}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + n.minRes + '="fadeindown"] {opacity: 1;-webkit-transform: none;transform: none;}}');
        e += '.t396 .t-animate[data-animate-style="fadeinleft"] {-webkit-transform: translate(100px, 0);transform: translate(100px, 0);}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + n.minRes + '="fadeinleft"] {-webkit-transform: translate(100px, 0);transform: translate(100px, 0);}}');
        e += '.t396 .t-animate_started[data-animate-style="fadeinleft"] {opacity: 1;-webkit-transform: none;transform: none;}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + n.minRes + '="fadeinleft"] {opacity: 1;-webkit-transform: none;transform: none;}}');
        e += '.t396 .t-animate[data-animate-style="fadeinright"] {-webkit-transform: translate(-100px, 0);transform: translate(-100px, 0);}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + n.minRes + '="fadeinright"] {-webkit-transform: translate(-100px, 0);transform: translate(-100px, 0);}}');
        e += '.t396 .t-animate_started[data-animate-style="fadeinright"] {opacity: 1;-webkit-transform: none;transform: none;}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + n.minRes + '="fadeinright"] {opacity: 1;-webkit-transform: none;transform: none;}}');
        e += '.t396 .t-animate[data-animate-style="zoomin"] {-webkit-transform: scale(0.9);transform: scale(0.9);}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + n.minRes + '="zoomin"] {-webkit-transform: scale(0.9);transform: scale(0.9);}}');
        e += '.t396 .t-animate_started[data-animate-style="zoomin"] {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + n.minRes + '="zoomin"] {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}}');
        e += '.t396 .t-animate[data-animate-style="zoomout"] {-webkit-transform: scale(1.2);transform: scale(1.2);}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + n.minRes + '="zoomout"] {-webkit-transform: scale(1.2);transform: scale(1.2);}}');
        e += '.t396 .t-animate_started[data-animate-style="zoomout"] {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}';
        for (a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + n.minRes + '="zoomout"] {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}}');
        e += ".t396 .t-animate_started[data-animate-distance],.t396 .t-animate_started[data-animate-scale]{-webkit-transform: none !important;transform: none !important;}";
        for (var n, a = 0; a < t.length; a++)(n = t_animate__getMediaQuery(t, a)).isContinue || (e += n.text + "#allrecords .t396 .t-animate_started[data-animate-distance-res-" + n.minRes + "],#allrecords .t396 .t-animate_started[data-animate-style-res-" + n.minRes + '="zoomout"] {-webkit-transform: none !important;transform: none !important;}}');
        var i = document.createElement("style"),
            r = document.head || document.querySelector("head");
        i.textContent = e, r.appendChild(i)
    }
}

function t_animate__getBreakpointsArr() {
    var e = [],
        t = Array.prototype.slice.call(document.querySelectorAll('.r[data-record-type="396"]:not(.t397__off):not(.t395__off):not(.t400__off) .t396__artboard'));
    return Array.prototype.forEach.call(t, function(t) {
        t.classList.contains("t396__artboard") && (t = (t = (t = (t = t.getAttribute("data-artboard-screens")) ? t.split(",") : [1200, 960, 640, 480, 320]).map(function(t) {
            return parseInt(t, 10)
        })).filter(function(t) {
            return -1 === e.indexOf(t)
        }), e = e.concat(t))
    }), e = t_animate__sortArr(e)
}

function t_animate__getMediaQuery(t, e) {
    var a = "",
        n = !1,
        i = t[e + 1],
        r = t[e] - 1,
        o = e === t.length - 1,
        e = e === t.length - 2;
    return o ? n = !0 : a += e ? "@media screen and (max-width: " + r + "px) {" : "@media screen and (min-width: " + i + "px) and (max-width: " + r + "px) {", {
        text: a,
        isContinue: n,
        minRes: i
    }
}

function t_animate__sortArr(t) {
    return t.sort(function(t, e) {
        return e - t
    })
}

function t_animate__startAnimation() {
    var t, a, e, n = document.querySelectorAll(".r"),
        i = Array.prototype.filter.call(n, function(t) {
            return t.querySelector(".t-animate[data-animate-group=yes]")
        }),
        r = Array.prototype.filter.call(n, function(t) {
            return t.querySelector('.t-animate[data-animate-chain="yes"]')
        }),
        o = document.querySelectorAll(".t-animate");
    o = Array.prototype.filter.call(o, function(t) {
        return !("yes" === t.getAttribute("data-animate-group") || "yes" === t.getAttribute("data-animate-chain") || t.getAttribute("observer-ready"))
    }), window.innerWidth < 1200 && (i = t_animate__checkMobile(i), r = t_animate__checkMobile(r), o = t_animate__checkMobile(o)), (i.length || o.length || r.length) && (t_animate__setAnimationState(i, r, o), i = t_animate__hasWaitAnimation(i), o = t_animate__hasWaitAnimation(o), r = t_animate__hasWaitAnimation(r), t = "undefined" != typeof navigator && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent), "IntersectionObserver" in window && !t ? (i.length && (a = [], i.forEach(function(t) {
        var e = t.querySelector(".t-animate");
        "fadeindown" === e.getAttribute("data-animate-style") && e.closest(".t-cover") && (t = t.querySelector(".t-animate:not(:first-child)")) && (e = t), a.push(e)
    }), a.forEach(function(t) {
        var e = {
            rootMargin: t.offsetHeight / 5 * -1 + "px 0px"
        };
        new IntersectionObserver(function(t, a) {
            t.forEach(function(t) {
                var e;
                t.isIntersecting && (t = t.target, a.unobserve(t), e = t.closest(".r").querySelectorAll(".t-animate"), e = Array.prototype.filter.call(e, function(t) {
                    return !(t.classList.contains("t-animate__btn-wait-chain") || "yes" === t.getAttribute("data-animate-chain"))
                }), t_animate__makeSectionButtonWait(t), t_animate__saveSectionHeaderStartTime(t), Array.prototype.forEach.call(e, function(t) {
                    t.classList.remove("t-animate_wait"), t_animate__removeNoHoverClassFromBtns(t), t_animate__setStartAnimationClass(t, !1)
                }))
            })
        }, e).observe(t)
    })), o.length && o.forEach(function(t) {
        var e = {},
            a = t_animate__getAttrByResBase(t, "trigger-offset"),
            a = (a && (e.rootMargin = "0px 0px " + -1 * a.replace("px", "") + "px 0px"), new IntersectionObserver(function(t, n) {
                t.forEach(function(t) {
                    var e, a = t.target;
                    !a.demandTransform && a.style.transform ? (a.demandTransform = a.style.transform, a.style.transform = "unset") : (e = window.getComputedStyle(a).transform, a.style.transform || "none" === e || (a.demandTransform = e, a.style.transform = "unset")), t.isIntersecting && (a.closest(".t1093") || n.unobserve(a), e = -1 !== (e = a.style.transitionDelay || "0ms").indexOf("ms") ? parseInt(e) + 250 : 1e3 * parseFloat(e) + 250, a.demandTransform && -1 !== a.demandTransform.indexOf("matrix") && (a.style.transform = ""), a.demandTransform && "unset" === a.style.transform && (a.style.transform = a.demandTransform, delete a.demandTransform), setTimeout(function() {
                        a.classList.remove("t-animate_wait"), t_animate__removeNoHoverClassFromBtns(a), t_animate__setStartAnimationClass(a, !0), "animatednumber" === t_animate__getAttrByResBase(a, "style") && t_animate__animateNumbers(a)
                    }, e))
                })
            }, e));
        t.dataset.observerReady = !0, a.observe(t)
    }), r.length && ((e = function() {
        t_animate__getChainOffsets(r)
    })(), window.addEventListener("resize", t_throttle(function() {
        e()
    })), setInterval(e, 5e3), window.addEventListener("scroll", t_throttle(function() {
        var t = window.pageYOffset + window.innerHeight;
        t_animate__animateChainsBlocks(r, t)
    })))) : ((e = function() {
        t_animate__getGroupsOffsets(i), t_animate__getChainOffsets(r), t_animate__getElemsOffsets(o)
    })(), window.addEventListener("resize", t_throttle(e)), setInterval(e, 5e3), window.addEventListener("scroll", t_throttle(function() {
        var t = t_animate__deleteAnimatedEls(i, o),
            t = (o = t[0], t_animate__animateOnScroll(i = t[1], r, o));
        t && t.length && (i = t[0], r = t[1], o = t[2])
    }))), Array.prototype.forEach.call(n, function(t) {
        var a = t.querySelector(".t-popup");
        a && a.addEventListener("scroll", t_throttle(function() {
            var t, e = window.pageYOffset + window.innerHeight;
            (a.classList.contains("t-animate") && "yes" === a.getAttribute("data-animate-chain") || a.querySelector(".t-animate[data-animate-chain=yes]")) && (t_animate__setAnimationStateChains(t = [a]), t_animate__getChainOffsets(t = Array.prototype.filter.call(t, function(t) {
                return t.querySelector(".t-animate_wait")
            })), t_animate__animateChainsBlocks(t, e))
        }))
    }))
}

function t_animate__animateOnScroll(t, e, a) {
    var n, i;
    if (t.length || e.length || a.length) return n = window.pageYOffset, i = n + window.innerHeight, [t_animate__animateGroups(t, i, n), t_animate__animateChainsBlocks(e, i, n), t_animate__animateElems(a, i, n)]
}

function t_animate__animateGroups(t, a) {
    return t.forEach(function(t) {
        var e;
        t.curTopOffset < a && (e = t.querySelectorAll(".t-animate"), e = Array.prototype.filter.call(e, function(t) {
            return !(t.classList.contains("t-animate__btn-wait-chain") || "yes" === t.getAttribute("data-animate-chain"))
        }), t_animate__makeSectionButtonWait(t), t_animate__saveSectionHeaderStartTime(t), Array.prototype.forEach.call(e, function(t) {
            t.classList.remove("t-animate_wait"), t_animate__removeNoHoverClassFromBtns(t), t_animate__setStartAnimationClass(t, !1)
        }))
    }), t
}

function t_animate__animateChainsBlocks(t, e) {
    return t.forEach(function(t) {
        t.itemsOffsets[0] < e && t.querySelectorAll(".t-animate_wait").length && (t_animate__animateChainItemsOnScroll(t, e), t.itemsOffsets.length && t_animate__checkSectionButtonAnimation__outOfTurn(t))
    }), t
}

function t_animate__animateElems(t, a, n) {
    return Array.prototype.filter.call(t, function(t) {
        var e = t_animate__detectElemTriggerOffset(t, a);
        return t.curTopOffset < e ? (t.classList.remove("t-animate_wait"), t_animate__removeNoHoverClassFromBtns(t), t_animate__setStartAnimationClass(t, !1), "animatednumber" === t_animate__getAttrByResBase(t, "style") && t_animate__animateNumbers(t), !0) : !(t.curTopOffset < n) && void 0
    }), t
}

function t_animate__deleteAnimatedEls(t, e) {
    var a = window.pageYOffset,
        n = [],
        i = [];
    return t.forEach(function(t) {
        var e;
        t.curTopOffset <= a ? (e = t.querySelectorAll(".t-animate"), Array.prototype.forEach.call(e, function(t) {
            t_animate__removeAnimationClass(t, ["wait", "no-hover"])
        })) : n.push(t)
    }), e.forEach(function(t) {
        t.curTopOffset <= a ? (t_animate__removeAnimationClass(t, ["wait", "no-hover"]), t_animate__setStartAnimationClass(t, !1)) : i.push(t)
    }), [i, n]
}

function t_animate__animateChainItemsOnScroll(t, e) {
    var a = t.querySelectorAll(".t-animate_wait[data-animate-chain=yes]"),
        a = Array.prototype.slice.call(a),
        n = 0,
        i = 0,
        r = t.itemsOffsets[0],
        o = t_animate__getDelayFromPreviousScrollEvent(t, .16),
        s = t_animate__getSectionHeadDealy(t);
    a.length && a[0].classList.add("t-animate__chain_first-in-row");
    for (var l = 0; l < a.length; l++) {
        var m = a[l],
            c = t.itemsOffsets[l];
        if (!(c < e)) break;
        c !== r && (m.classList.add("t-animate__chain_first-in-row"), n = ++i, r = c);
        var _ = .16 * n + o + s;
        m.style.transitionDelay = _ + "s", m.classList.remove("t-animate_wait"), t_animate__setStartAnimationClass(m, !1), m.setAttribute("data-animate-start-time", Date.now() + 1e3 * _), m[0] === a[a.length - 1] && t_animate__checkSectionButtonAnimation(t, _), +c == +r && n++, a.splice(l, 1), t.itemsOffsets.splice(l, 1), l--
    }
    t_animate__catchTransitionEndEvent(t)
}

function t_animate__getSectionHeadDealy(t) {
    var e = t.querySelector(".t-section__title.t-animate"),
        t = t.querySelector(".t-section__descr.t-animate"),
        a = 0;
    if (e) {
        e = e.getAttribute("data-animate-start-time") || 0;
        if (Date.now() - e <= 160) return a = .16
    }
    if (t) {
        e = t.getAttribute("data-animate-start-time") || 0;
        if (Date.now() - e <= 160) return a = .16
    }
    return a
}

function t_animate__getDelayFromPreviousScrollEvent(t, e) {
    var a = !t.querySelectorAll(".t-animate_started").length,
        t = t.querySelectorAll(".t-animate__chain_first-in-row.t-animate_started"),
        t = Array.prototype.filter.call(t, function(t) {
            return !t.classList.contains("t-animate__chain_showed")
        });
    return a || !t.length ? 0 : t.length ? (a = (t[t.length - 1].getAttribute("data-animate-start-time") || 0) - Date.now()) <= 0 ? e : a / 1e3 + e : void 0
}

function t_animate__setStartAnimationClass(t, e) {
    var a;
    t && (e && (a = t.closest("." + (e = "t-animate-for-wrapper"))) && a.classList.remove(e), t.classList.add("t-animate_started"))
}

function t_animate__catchTransitionEndEvent(t) {
    t = t.querySelectorAll(".t-animate__chain_first-in-row.t-animate_started"), t = Array.prototype.filter.call(t, function(t) {
        return !t.classList.contains("t-animate__chain_showed")
    });
    Array.prototype.forEach.call(t, function(e) {
        ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "otransitionend", "MSTransitionEnd"].forEach(function(t) {
            e.addEventListener(t, function() {
                t_animate__addEventOnAnimateChain(e)
            }), e.removeEventListener(t, function() {
                t_animate__addEventOnAnimateChain(e)
            })
        })
    })
}

function t_animate__parseNumberText() {
    var r = window.pageYOffset,
        t = document.querySelectorAll(".t-animate[data-animate-style='animatednumber']");
    Array.prototype.forEach.call(t, function(t) {
        var e, a, n = "",
            i = t.querySelectorAll("span");
        Array.prototype.forEach.call(i, function(t) {
            n += t.getAttribute("style") || "", t.removeAttribute("style"), t.removeAttribute("data-redactor-style")
        }), t.querySelectorAll('div[data-customstyle="yes"]').length ? (e = (i = t.querySelector('div[data-customstyle="yes"]')) ? i.innerHTML : "", i = t.getAttribute("style") || "", (a = (a = t.querySelector("div[data-customstyle]")) ? a.getAttribute("style") : "") && (i += a), t.setAttribute("style", i)) : e = t.innerHTML, n = n.split(";").filter(function(t, e) {
            return n.split(";").indexOf(t) === e
        }).join(";"), t.getBoundingClientRect().top + window.pageYOffset < r - 500 || e.length && (i = a = e.replace(/<br>/g, " ").replace(/[^\d., ]+/g, "").replace(/ (\.|,)/g, "").replace(/(\d)(?=\d) /g, "$1").trim(), -1 === e.indexOf(a) && (i = a = a.split(" ")[0]), "" !== a && (t.setAttribute("data-animate-number-count", e), t_animate__changeNumberOnZero(t, e.replace(i, "num")), a = t.querySelectorAll("span"), a = Array.prototype.filter.call(a, function(t) {
            return !t.classList.contains(".t-animate__number")
        }), Array.prototype.forEach.call(a, function(t) {
            t.setAttribute("style", n)
        })))
    })
}

function t_animate__changeNumberOnZero(t, e) {
    t.innerHTML = e.replace(/num/g, '<span class="t-animate__number">0</span>')
}

function t_animate__animateNumbers(e) {
    if (!e) return !1;
    var a, n, i, r, o, s, l = e.getAttribute("data-animate-number-count"),
        m = [],
        t = e.querySelectorAll("span"),
        c = ((t = Array.prototype.filter.call(t, function(t) {
            return !t.classList.contains(".t-animate__number")
        })).length && (m = t[0].getAttribute("style") || ""), []),
        _ = null,
        f = (l && (_ = l.match(/\d+\.\d+|\d+,\d+/g), a = l.match(/\d+/g), l.replace(/(\d)(?= \d) /g, "$1").split(" ").forEach(function(t) {
            isNaN(parseInt(t.replace(/[^\d., ]+/g, ""), 10)) || c.push(t.replace(/[^\d., ]+/g, ""))
        })), 0),
        d = !1,
        u = !1,
        y = (e.removeAttribute("data-animate-number-count"), null !== _ && (u = -1 !== _[0].indexOf(",")), c.forEach(function(t, e) {
            var a;
            null !== _ && (-1 !== t.indexOf(",") && (a = t.split(",")), -1 !== t.indexOf(".") && (a = t.split(".")), -1 === t.indexOf(",") && -1 === t.indexOf(".") || (f = a[1].length, c[e] = +a.join("."), d = !0))
        }), e.querySelector(".t-animate__number"));
    c[0] && (n = Number(c[0]) || 0, i = 0, r = Math.pow(10, f), d && (n *= r, i *= r), o = 0, s = setInterval(function() {
        var t;
        i += n / 108, o = d ? (Math.round(i) / r).toFixed(f) + "" : Math.floor(i) + "", 1 < a.length && (o = o.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")), u && (o = o.replace(/\./g, ",")), y && (y.textContent = o), n <= i && (clearInterval(s), e.innerHTML = l, t = e.querySelectorAll("span"), Array.prototype.forEach.call(t, function(t) {
            t.setAttribute("style", m)
        }))
    }, 12))
}

function t_animate__setAnimationState(t, e, a) {
    var n = window.pageYOffset,
        i = n + window.innerHeight;
    t_animate__setGroupsBlocksState(t, n, i), e.forEach(function(t) {
        t_animate__assignChainDelay(t, i, n), t_animate__checkSectionButtonAnimation__outOfTurn(t)
    }), t_animate__setAnimELemsState(a, n, i), window.addEventListener("resize", t_throttle(t_animate__removeInlineAnimStyles))
}

function t_animate__setAnimELemsState(t, n, i) {
    t.forEach(function(t) {
        var e = t.getBoundingClientRect().top + window.pageYOffset;
        if (e < n - 500) return t_animate__removeAnimationClass(t, "no-hover"), "animatednumber" === t_animate__getAttrByResBase(t, "style") && t_animate__animateNumbers(t), !0;
        var a = t_animate__detectElemTriggerOffset(t, i);
        t_animate__setCustomAnimSettings(t, e, i), e < a && !t.closest(".t1093") && (t_animate__removeNoHoverClassFromBtns(t), t_animate__setStartAnimationClass(t, !0), "animatednumber" === t_animate__getAttrByResBase(t, "style") && t_animate__animateNumbers(t)), (a <= e || t.closest(".t1093")) && t.classList.add("t-animate_wait")
    })
}

function t_animate__setGroupsBlocksState(t, i, r) {
    t.forEach(function(a) {
        var t = a.querySelectorAll(".t-animate"),
            t = Array.prototype.filter.call(t, function(t) {
                return !("yes" === t.getAttribute("data-animate-chain"))
            }),
            n = a.getBoundingClientRect().top + window.pageYOffset,
            e = (t_animate__removeAnimFromHiddenSlides(a), t_animate__assignSectionDelay(a));
        t_animate__assignGroupDelay(a, e), Array.prototype.forEach.call(t, function(t) {
            var e = t.closest(".t397__off") || t.closest(".t395__off") || t.closest(".t400__off");
            if (t.classList.contains("t-animate_no-hover") && e && t.classList.remove("t-animate_no-hover"), n <= i - 100) return t_animate__saveSectionHeaderStartTime(a), t_animate__removeAnimationClass(t, "no-hover"), !(t.style.transitionDelay = "");
            n < r && i - 100 < n && (t_animate__makeSectionButtonWait(a), t.classList.contains(".t-animate__btn-wait-chain") || (t_animate__removeNoHoverClassFromBtns(t), e ? t.classList.add("t-animate_wait") : t_animate__setStartAnimationClass(t, !1))), r <= n && t.classList.add("t-animate_wait")
        })
    })
}

function t_animate__setAnimationStateChains(t) {
    if (!t || !t.length) return !1;
    var e = window.pageYOffset,
        a = e + window.innerHeight;
    Array.prototype.forEach.call(t, function(t) {
        t_animate__assignChainDelay(t, a, e), t_animate__checkSectionButtonAnimation__outOfTurn(t)
    })
}

function t_animate__assignSectionDelay(t) {
    var e = 0,
        a = t.querySelectorAll(".t-section__title.t-animate"),
        t = t.querySelectorAll(".t-section__descr.t-animate");
    return a.length && (e = .16), t.length && (Array.prototype.forEach.call(t, function(t) {
        t.style.transitionDelay = e + "s"
    }), e += .16), e
}

function t_animate__assignGroupDelay(t, e) {
    var a, n, i, r, o, s = 0;
    t.querySelectorAll("[data-animate-order]").length ? t_animate__assignOrderedElemsDelay(t, e) : (e = t.querySelectorAll(".t-img.t-animate"), a = t.querySelectorAll(".t-uptitle.t-animate"), n = t.querySelectorAll(".t-title.t-animate"), n = Array.prototype.filter.call(n, function(t) {
        return !t.classList.contains("t-section__title")
    }), i = t.querySelectorAll(".t-descr.t-animate"), i = Array.prototype.filter.call(i, function(t) {
        return !t.classList.contains("t-section__descr")
    }), r = t.querySelectorAll(".t-btn.t-animate, .t-btnwrapper.t-animate"), r = Array.prototype.filter.call(r, function(t) {
        return !t.closest(".t-section__bottomwrapper")
    }), o = t.querySelectorAll(".t-timer.t-animate"), t = t.querySelectorAll("form.t-animate"), e.length && (s = .5), n.length && Array.prototype.forEach.call(n, function(t) {
        t.style.transitionDelay = s + "s"
    }), n.length && (s += .3), i.length && Array.prototype.forEach.call(i, function(t) {
        t.style.transitionDelay = s + "s"
    }), i.length && (s += .3), a.length && Array.prototype.forEach.call(a, function(t) {
        t.style.transitionDelay = s + "s"
    }), a.length && (s += .3), (a.length || n.length || i.length) && (s += .2), o.length && Array.prototype.forEach.call(o, function(t) {
        t.style.transitionDelay = s + "s"
    }), o.length && (s += .5), r.length && (r[0].style.transitionDelay = s + "s"), 2 === r.length && (s += .4), 2 === r.length && (r[1].style.transitionDelay = s + "s"), 0 !== t.length && Array.prototype.forEach.call(t, function(t) {
        t.style.transitionDelay = s + "s"
    }))
}

function t_animate__assignOrderedElemsDelay(t, e) {
    var a = 0,
        e = (e && (a = e), t.querySelectorAll('.t-animate[data-animate-order="1"]')),
        n = t.querySelectorAll('.t-animate[data-animate-order="2"]'),
        i = t.querySelectorAll('.t-animate[data-animate-order="3"]'),
        r = t.querySelectorAll('.t-animate[data-animate-order="4"]'),
        o = t.querySelectorAll('.t-animate[data-animate-order="5"]'),
        s = t.querySelectorAll('.t-animate[data-animate-order="6"]'),
        l = t.querySelectorAll('.t-animate[data-animate-order="7"]'),
        m = t.querySelectorAll('.t-animate[data-animate-order="8"]'),
        t = t.querySelectorAll('.t-animate[data-animate-order="9"]');
    e.length && Array.prototype.forEach.call(e, function(t) {
        t.style.transitionDelay = a + "s"
    }), e.length && n.length && (a += +t_animate__getAttrByResBase(n[0], "delay"), Array.prototype.forEach.call(n, function(t) {
        t.style.transitionDelay = a + "s"
    })), (e.length || n.length) && i.length && (a += +t_animate__getAttrByResBase(i[0], "delay"), Array.prototype.forEach.call(i, function(t) {
        t.style.transitionDelay = a + "s"
    })), (e.length || n.length || i.length) && r.length && (a += +t_animate__getAttrByResBase(r[0], "delay"), Array.prototype.forEach.call(r, function(t) {
        t.style.transitionDelay = a + "s"
    })), (e.length || n.length || i.length || r.length) && o.length && (a += +t_animate__getAttrByResBase(o[0], "delay"), Array.prototype.forEach.call(o, function(t) {
        t.style.transitionDelay = a + "s"
    })), (e.length || n.length || i.length || r.length || o.length) && s.length && (a += +t_animate__getAttrByResBase(s[0], "delay"), Array.prototype.forEach.call(s, function(t) {
        t.style.transitionDelay = a + "s"
    })), (e.length || n.length || i.length || r.length || o.length || s.length) && l.length && (a += +t_animate__getAttrByResBase(l[0], "delay"), Array.prototype.forEach.call(l, function(t) {
        t.style.transitionDelay = a + "s"
    })), (e.length || n.length || i.length || r.length || o.length || s.length || l.length) && m.length && (a += +t_animate__getAttrByResBase(m[0], "delay"), Array.prototype.forEach.call(m, function(t) {
        t.style.transitionDelay = a + "s"
    })), (e.length || n.length || i.length || r.length || o.length || s.length || l.length || m.length) && t.length && (a += +t_animate__getAttrByResBase(t[0], "delay"), Array.prototype.forEach.call(t, function(t) {
        t.style.transitionDelay = a + "s"
    }))
}

function t_animate__assignChainDelay(a, n, i) {
    var r, o, s, l = a.querySelectorAll(".t-animate[data-animate-chain=yes]"),
        m = 0;
    l.length && (r = l[0], o = r.getBoundingClientRect().top + window.pageYOffset, r.classList.add("t-animate__chain_first-in-row"), s = t_animate__getCurBlockSectionHeadDelay(a), Array.prototype.forEach.call(l, function(e) {
        var t = e.getBoundingClientRect().top + window.pageYOffset;
        if (t < i) return t_animate__removeAnimationClass(e, ""), !0;
        t < n ? (t !== o && (e.classList.add("t-animate__chain_first-in-row"), o = t), t = .16 * m + s, e.style.transitionDelay = t + "s", t_animate__setStartAnimationClass(e, !1), e.setAttribute("data-animate-start-time", Date.now() + 1e3 * t), r === l[l.length - 1] && t_animate__checkSectionButtonAnimation(a, t), m++, ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "otransitionend", "MSTransitionEnd"].forEach(function(t) {
            e.addEventListener(t, function() {
                t_animate__addEventOnAnimateChain(e)
            }), e.removeEventListener(t, function() {
                t_animate__addEventOnAnimateChain(e)
            })
        })) : e.classList.add("t-animate_wait")
    }))
}

function t_animate__getAttrByResBase(t, e) {
    var a, n = t.closest(".t396__artboard");
    if (!n) return t.getAttribute("data-animate-" + e);
    var i, r, n = "ab" + n.getAttribute("data-artboard-recid"),
        o = void 0 !== window.tn[n] ? (i = window.tn[n].curResolution, r = window.tn[n].curResolution_max, window.tn[n].screens.slice()) : (i = window.tn.curResolution, [320, 480, 640, 960, r = 1200]),
        n = t.closest(".t396__elem, .t396__group"),
        n = n && n.getAttribute("data-animate-mobile");
    if (i === r) a = t.getAttribute("data-animate-" + e);
    else {
        if ("y" !== n && i < 1200) return t.style.transition = "none", null;
        a = t.getAttribute("data-animate-" + e + "-res-" + i)
    }
    if (!a && "" !== a)
        for (var s = 0; s < o.length; s++) {
            var l = o[s];
            if (!(l <= i) && (a = l === r ? t.getAttribute("data-animate-" + e) : t.getAttribute("data-animate-" + e + "-res-" + l))) break
        }
    return a
}

function t_animate__hasWaitAnimation(t) {
    return t.filter(function(t) {
        return t.classList.contains("t-animate_wait") || t.querySelector(".t-animate_wait")
    })
}

function t_animate__addEventOnAnimateChain(t) {
    t.classList.add("t-animate__chain_showed")
}

function t_animate__setCustomAnimSettings(t, e, a) {
    var n = t_animate__getAttrByResBase(t, "style"),
        i = t_animate__getAttrByResBase(t, "distance");
    if (i && "" !== i) {
        switch (i = i.replace("px", ""), t.style.transitionDuration = "0s", t.style.transitionDelay = "0s", n) {
            case "fadeinup":
                t.style.transform = "translate3d(0," + i + "px,0)";
                break;
            case "fadeindown":
                t.style.transform = "translate3d(0,-" + i + "px,0)";
                break;
            case "fadeinleft":
                t.style.transform = "translate3d(" + i + "px,0,0)";
                break;
            case "fadeinright":
                t.style.transform = "translate3d(-" + i + "px,0,0)"
        }
        t_animate__forceElemInViewPortRepaint(t, e, a), t.style.transitionDuration = "", t.style.transitionDelay = ""
    }
    n = t_animate__getAttrByResBase(t, "scale"), n && (t.style.transitionDuration = "0s", t.style.transitionDelay = "0s", t.style.transform = "scale(" + n + ")", t_animate__forceElemInViewPortRepaint(t, e, a), t.style.transitionDuration = "", t.style.transitionDelay = ""), n = t_animate__getAttrByResBase(t, "delay"), n && (t.style.transitionDelay = n + "s"), e = t_animate__getAttrByResBase(t, "duration");
    e && (t.style.transitionDuration = e + "s")
}

function t_animate__removeInlineAnimStyles() {
    var t;
    window.innerWidth < 980 && (t = document.querySelectorAll(".t396__elem.t-animate:not(.t-animate_wait)"), Array.prototype.forEach.call(t, function(t) {
        t.style.transform = "", t.style.transitionDuration = "", t.style.transitionDelay = ""
    }))
}

function t_animate__forceElemInViewPortRepaint(t, e, a) {
    t && e < a + 500 && t.offsetHeight
}

function t_animate__detectElemTriggerOffset(t, e) {
    var t = t_animate__getAttrByResBase(t, "trigger-offset"),
        a = e;
    return a = t ? e - +(t = t.replace("px", "")) : a
}

function t_animate__saveSectionHeaderStartTime(t) {
    var e = t.querySelectorAll(".t-section__title.t-animate"),
        t = t.querySelectorAll(".t-section__descr.t-animate");
    e.length && Array.prototype.forEach.call(e, function(t) {
        t.setAttribute("data-animate-start-time", Date.now())
    }), t.length && Array.prototype.forEach.call(t, function(t) {
        t.setAttribute("data-animate-start-time", Date.now() + 160)
    })
}

function t_animate__getCurBlockSectionHeadDelay(t) {
    var e = 0;
    return t.querySelectorAll(".t-section__title.t-animate").length && (e += .16), t.querySelectorAll(".t-section__descr.t-animate").length && (e += .16), e
}

function t_animate__makeSectionButtonWait(t) {
    var e = t.querySelectorAll(".t-animate[data-animate-chain=yes]").length,
        t = t.querySelectorAll(".t-section__bottomwrapper .t-btn.t-animate");
    e.length && t.length && Array.prototype.forEach.call(t, function(t) {
        t.classList.add("t-animate__btn-wait-chain")
    })
}

function t_animate__checkSectionButtonAnimation(t, e) {
    t = t.querySelectorAll(".t-animate__btn-wait-chain");
    t.length && Array.prototype.forEach.call(t, function(t) {
        t.style.transitionDelay = e + .16 + "s", t_animate__removeNoHoverClassFromBtns(t), t.classList.remove("t-animate__btn-wait-chain"), t_animate__setStartAnimationClass(t, !1)
    })
}

function t_animate__checkSectionButtonAnimation__outOfTurn(t) {
    var e = t.querySelectorAll(".t-animate[data-animate-chain=yes]");
    Array.prototype.filter.call(e, function(t) {
        return !t.classList.contains("t-animate_started")
    }).length || t_animate__checkSectionButtonAnimation(t, .16)
}

function t_animate__addNoHoverClassToBtns() {
    var t = document.querySelectorAll(".t-btn.t-animate");
    Array.prototype.forEach.call(t, function(t) {
        t.classList.add("t-animate_no-hover")
    })
}

function t_animate__removeNoHoverClassFromBtns(t) {
    if (!t) return !1;
    var e = t.classList.contains("t-btn") ? t : null;
    e && (e.ontransitionend = function(t) {
        "opacity" !== t.propertyName && "transform" !== t.propertyName || (e.classList.remove("t-animate_no-hover"), e.style.transitionDelay = "", e.style.transitionDuration = "", this.ontransitionend = null)
    })
}

function t_animate__getGroupsOffsets(t) {
    t.forEach(function(t) {
        var e = t.querySelector(".t-animate");
        e && (t.curTopOffset = e.getBoundingClientRect().top + window.pageYOffset, e = t_animation__getZoom(t), window.t_animation__isOnlyScalable || (t.curTopOffset *= e))
    })
}

function t_animation__getZoom(t) {
    t = t.closest(".t396__artboard");
    if (!t) return 1;
    var e = document.querySelector('script[src*="tilda-blocks-2.7"]');
    return t.classList.contains("t396__artboard_scale") || !e && "undefined" != typeof t396_ab__getFieldValue && "window" === t396_ab__getFieldValue(t, "upscale") ? window.tn_scale_factor : 1
}

function t_animate__getChainOffsets(t) {
    t.forEach(function(a) {
        var t = a.querySelectorAll(".t-animate_wait[data-animate-chain=yes]");
        a.itemsOffsets = [], Array.prototype.forEach.call(t, function(t, e) {
            a.itemsOffsets[e] = t.getBoundingClientRect().top + window.pageYOffset
        })
    })
}

function t_animate__getElemsOffsets(t) {
    t.forEach(function(t) {
        t.curTopOffset = window.pageYOffset + t.getBoundingClientRect().top;
        var e = t_animation__getZoom(t);
        window.t_animation__isOnlyScalable || (t.curTopOffset *= e)
    })
}

function t_animate__removeAnimFromHiddenSlides(t) {
    var e;
    t.querySelectorAll(".t-slides").length && (t = t.querySelectorAll(".t-slides__item"), t = Array.prototype.filter.call(t, function(t) {
        return !t.classList.contains("t-slides__item_active")
    }), e = [], t.forEach(function(t) {
        t = t.querySelector(".t-animate");
        t && e.push(t)
    }), e.forEach(function(t) {
        t_animate__removeAnimationClass(t, "no-hover")
    }))
}

function t_animate__wrapTextWithOpacity() {
    var t = document.querySelectorAll(".t-title.t-animate, .t-descr.t-animate, .t-uptitle.t-animate, .t-text.t-animate");
    Array.prototype.forEach.call(t, function(t) {
        var e, a = t.getAttribute("style");
        a && -1 !== a.indexOf("opacity") && (a = t.style.opacity) && 0 < a && (t.style.opacity = "", (e = document.createElement("div")).style.opacity = a, a = t.childNodes, Array.prototype.forEach.call(a, function(t) {
            t = t.cloneNode(!0);
            e.appendChild(t)
        }), t.innerHTML = "", t.appendChild(e))
    })
}

function t_animate__checkIE() {
    var t = window.navigator.userAgent,
        e = t.indexOf("MSIE"),
        a = !1;
    return 0 < e && (8 !== (t = parseInt(t.substring(e + 5, t.indexOf(".", e)))) && 9 !== t || (a = !0)), a
}
window.t_animation__isOnlyScalable = Boolean(-1 !== navigator.userAgent.search("Firefox") || Boolean(window.opr && window.opr.addons || window.opera || -1 !== navigator.userAgent.indexOf(" OPR/"))), "loading" !== document.readyState ? t_animate__init() : document.addEventListener("DOMContentLoaded", t_animate__init);

function t_cover__parallax(t) {
    var o = window.innerHeight,
        r = (window.addEventListener("resize", function() {
            o = window.innerHeight
        }), document.body.style.webkitTransform && (t.style.position = "relative"), t_cover__getFullHeight(t));
    ["scroll", "resize"].forEach(function(e) {
        window.addEventListener(e, function() {
            t_cover__parallaxUpdate(t, .2, o, r)
        })
    }), "complete" !== document.readyState && window.addEventListener("load", function() {
        t_cover__parallaxUpdate(t, .2, o, r)
    }), t_cover__parallaxUpdate(t, .2, o, r)
}

function t_cover__parallaxUpdate(e, t, o, r) {
    var n = window.pageYOffset,
        i = e.getBoundingClientRect().top + n,
        c = e.getBoundingClientRect().top;
    i + r < n || n + o < i || (r = -1 * Math.round(c * t), document.body.style.webkitTransform ? e.style.webkitTransform = "translateY(" + r + "px)" : e.style.top = r + "px")
}

function cover_init(e) {
    var t = document.getElementById("allrecords"),
        t = !!t && "yes" === t.getAttribute("data-tilda-lazy"),
        o = document.getElementById("rec" + e),
        r = document.getElementById("coverCarry" + e),
        n = o ? o.querySelector("img[data-hook-clogo]") : null;
    if (r) {
        var i, c = {
            "cover-bg": "",
            "cover-height": "",
            "cover-parallax": "",
            "video-url-mp4": "",
            "video-url-webm": "",
            "video-url-youtube": "",
            "video-noloop": "",
            "video-nomute": "",
            "video-nocover": "",
            "bg-base64": ""
        };
        for (i in c) {
            var a = r.getAttribute("data-content-" + i);
            a && (c[i] = a)
        }
        o = o ? o.getAttribute("data-bg-color") : "", o = (o && (c["parent-bg"] = o), ["mp4", "webm", "youtube"]), o = ("yes" === c["video-nocover"] ? o.forEach(function(e) {
            c["video-url-" + e] = ""
        }) : c["video-nomute"] = "", o.some(function(e) {
            return !!c["video-url-" + e]
        }));
        (window.t_cover__isMobile || "ontouchend" in document) && o && !t && (r.style.backgroundImage = 'url("' + c["cover-bg"] + '")'), setTimeout(function() {
            t_cover__recalcContentHeight(e, !1, 0), t_cover__fixBgFixedNode(e)
        }, 300), n && (n.onload = function() {
            t_cover__recalcContentHeight(e, !1, 500)
        }), window.t_cover__isMobile || "ontouchend" in document ? window.addEventListener("orientationchange", function() {
            t_cover__recalcContentHeight(e, !0, 200)
        }) : window.addEventListener("resize", function() {
            t_cover__recalcContentHeight(e, !1, 0)
        }), t_cover__setListenerToArrow(e), t_cover__setCoverParams(r, c, o), r.addEventListener("displayChanged", function() {
            t_cover__recalcContentHeight(e, !1, 0)
        })
    }
}

function t_cover__recalcContentHeight(e, t, o) {
    o ? setTimeout(function() {
        t_cover__fixBgFixedStyles(e), t_cover__recalcCoverHeight(e, t)
    }, o) : (t_cover__fixBgFixedStyles(e), t_cover__recalcCoverHeight(e, t))
}

function t_cover__setCoverParams(e, t, o) {
    var r, n, i, c = "fixed" === t["cover-parallax"],
        a = "dynamic" === t["cover-parallax"],
        d = "yes" === t["bg-base64"];
    t["parent-bg"] && (r = e.closest(".t-cover")) && r.classList.add("t-cover__transparent"), t_cover__setCoverVideoParams(e, t, o, c), c && window.isOpera && (e.style.transform = "unset"), a && !window.t_cover__isMobile && ((r = t_cover__getPureHeight(e)) < window.innerHeight && (c = .2 * window.innerHeight, e.style.height = r + c + "px"), t_cover__parallax(e)), d && t["cover-bg"] && !o && (n = !1, (i = document.createElement("img")).src = t["cover-bg"], i.onload = function() {
        i.parentElement && i.parentElement.removeChild(i), e.style.backgroundImage = 'url("' + t["cover-bg"] + '")', e.style.opacity = "1", n = !0
    }, n || (e.style.backgroundImage = "", e.style.opacity = "0", e.style.transition = "opacity 25ms"))
}

function t_cover__setCoverVideoParams(e, t, o, r) {
    var n = Boolean(t["video-url-youtube"]);
    window.t_cover__isMobile || "ontouchend" in document || !o || (t_cover__setStylesForCoverVideo(e, n ? "youtube" : ""), n ? t_cover__processYouTubeVideo(e, t) : t_cover__processHTML5Video(e, t, r))
}

function t_cover__processYouTubeVideo(e, r) {
    "IntersectionObserver" in window ? new IntersectionObserver(function(e, o) {
        e.forEach(function(e) {
            var t;
            e.isIntersecting && (t = e.target, o.unobserve(t), t_onFuncLoad("processYoutubeVideo", function() {
                window.processYoutubeVideo(t, r["cover-height"])
            }))
        })
    }).observe(e) : (t_cover__createYoutubeCover(e, r["cover-height"]), window.addEventListener("scroll", t_throttle(function() {
        t_cover__createYoutubeCover(e, r["cover-height"])
    }, 100)))
}

function t_cover__processHTML5Video(n, o, i) {
    n.style.backgroundSize = "auto";
    var e = -1 !== o["cover-height"].indexOf("vh") && 100 < parseInt(o["cover-height"], 10),
        t = -1 !== o["cover-height"].indexOf("px") && parseInt(o["cover-height"], 10) > window.innerHeight,
        c = !1,
        r = (i && (e || t) && (n.style.height = "100vh", c = !0), !o["video-noloop"]),
        a = !o["video-nomute"];
    "IntersectionObserver" in window ? new IntersectionObserver(function(e, t) {
        e.forEach(function(e) {
            e.isIntersecting && (e = e.target, t.unobserve(e), t_cover__createAndProcessHTML5Video(e, o, r, a))
        })
    }).observe(n) : (t_cover__createHTMLVideoCover(n, o, c, i, r, a), window.addEventListener("scroll", t_throttle(function() {
        t_cover__createHTMLVideoCover(n, o, c, i, r, a)
    }, 100))), window.addEventListener("scroll", function() {
        var e, t, o, r;
        i && c && (r = n.parentElement, t = (e = window.pageYOffset) + window.innerHeight, o = t_cover__getPureHeight(r), (r = r.getBoundingClientRect().top + e) + o <= t ? (n.style.position = "absolute", n.style.bottom = "0px", n.style.top = "auto") : r <= e ? (n.style.position = "fixed", n.style.top = "0px") : e < r && (n.style.position = "relative", n.style.top = "auto"))
    })
}

function t_cover__setStylesForCoverVideo(e, t) {
    e.style.backgroundColor = "#000000", e.style.backgroundImage = "youtube" === t ? "" : 'url("https://tilda.ws/img/spinner-white.gif")', e.setAttribute("data-content-cover-bg", "")
}

function t_cover__setListenerToArrow(e) {
    var t = document.getElementById("rec" + e);
    !t || (e = t.querySelector(".t-cover__arrow-wrapper")) && e.addEventListener("click", function() {
        t.offsetHeight && t_cover__scrollToNextSection(t.offsetHeight + t.getBoundingClientRect().top + window.pageYOffset)
    })
}

function t_cover__initCovers() {
    var e = document.querySelector(".t-records");
    !!e && "edit" === e.getAttribute("data-tilda-mode") || (e = document.querySelectorAll(".t-cover__carrier"), Array.prototype.forEach.call(e, function(e) {
        e = e.getAttribute("data-content-cover-id");
        e && cover_init(e)
    }), window.addEventListener("load", function() {
        var e = Array.prototype.slice.call(document.querySelectorAll(".t-cover__wrapper")),
            t = window.t_cover__isMobile ? document.documentElement.clientWidth : window.innerWidth;
        e.forEach(function(e) {
            !e.closest(".t-slds") && Math.floor(e.getBoundingClientRect().right) > t && (e.style.wordBreak = "break-all")
        })
    }))
}

function t_cover__createYoutubeCover(e, t) {
    var o, r, n, i;
    e.querySelector("iframe") || (o = window.pageYOffset, r = window.innerHeight, n = t_cover__getPureHeight(e), (i = e.getBoundingClientRect().top + o) - 500 < o + r && o <= i + n + 500 && t_onFuncLoad("processYoutubeVideo", function() {
        window.processYoutubeVideo(e, t)
    }))
}

function t_cover__createHTMLVideoCover(e, t, o, r, n, i) {
    var c, a, d, l;
    e.querySelector("video") || (c = window.pageYOffset, a = window.innerHeight, d = t_cover__getPureHeight(e), (l = e.getBoundingClientRect().top + c) - 500 < c + a && c <= d + l + 500 && t_cover__createAndProcessHTML5Video(e, t, n, i))
}

function t_cover__createAndProcessHTML5Video(e, t, o, r) {
    t_onFuncLoad("t_videoprocessor__processHTML5Video", function() {
        t_videoprocessor__processHTML5Video(e, {
            mp4: t["video-url-mp4"],
            ogv: "",
            webm: t["video-url-webm"],
            poster: "",
            autoplay: !0,
            loop: o,
            scale: !0,
            position: "absolute",
            opacity: 1,
            textReplacement: !1,
            zIndex: 0,
            width: "100%",
            height: 0,
            volume: 1,
            muted: r,
            fullscreen: !1,
            imgFallback: !0
        })
    })
}

function t_cover__recalcCoverHeight(e, t) {
    var o, r, n, i, c, a, d, l, _ = document.getElementById("rec" + e);
    _ && (e = _.querySelector(".t-cover"), a = _.getAttribute("data-record-type"), e && "935" !== a && ((l = (o = _.querySelector(".t-cover__carrier")) ? o.getAttribute("data-content-cover-height") : "") || (l = (r = _.querySelector("[data-content-cover-height]")) ? r.getAttribute("data-content-cover-height") : ""), r = "y" === _.getAttribute("data-fixed-bg"), n = [".t-cover", ".t-cover__filter", ".t-cover__carrier", ".t-cover__wrapper"], "734" !== a && !_.querySelector(".t734") || n.push(".t-slds__items-wrapper"), i = "dynamic" === o.getAttribute("data-content-cover-parallax"), (c = t_cover__getHeightFromAttr(l)) && n.forEach(function(e) {
        i && ".t-cover__carrier" === e || Array.prototype.slice.call(_.querySelectorAll(e)).forEach(function(e) {
            e && (e.style.height = Math.round(c) + "px")
        })
    }), a = t_cover__getHeightFromAttr(l), l = t_cover__getPureHeight(e), a = a || l, r || (d = e.style.height, e.style.height = "", a = l, d && (e.style.height = d)), l = t_cover__getContentHeight(_), e = !!o && "100vh" === o.getAttribute("data-content-cover-height"), 300 < l && a < l + 40 || r || (window.t_cover__isMobile || "ontouchend" in document) && t ? (t_cover__setRecalculatedHeight(_, l), t_cover__updateResizeElem(_)) : window.t_cover__isMobile && e && n.forEach(function(e) {
        e = _.querySelector(e);
        e && (e.style.height = document.documentElement.clientHeight + "px")
    })))
}

function t_cover__getContentHeight(e) {
    e = Array.prototype.slice.call(e.querySelectorAll("div[data-hook-content]"));
    if (e.length <= 1) return t_cover__getPureHeight(e[0]);
    e = e.map(function(e) {
        return t_cover__getPureHeight(e)
    });
    return e.sort(function(e, t) {
        return t - e
    }), e[0] || 0
}

function t_cover__getHeightFromAttr(e) {
    return e ? -1 !== e.indexOf("vh") ? parseInt(e, 10) * document.documentElement.clientHeight / 100 : parseInt(e, 10) : 0
}

function t_cover__setRecalculatedHeight(t, e) {
    var o = t.querySelector(".t-cover__carrier"),
        r = o ? o.getAttribute("data-content-cover-height") : "",
        n = t_cover__getHeightFromAttr(r = r ? r : (n = t.querySelector("[data-content-cover-height]")) ? n.getAttribute("data-content-cover-height") : "0"),
        i = o ? "dynamic" === o.getAttribute("data-content-cover-parallax") : "",
        r = "734" === t.getAttribute("data-record-type"),
        c = window.innerWidth <= 568 ? 40 : 120,
        a = window.innerWidth <= 568 ? 50 : 100,
        d = (r && (a = c = 0), 1e3 < (e += c) && (e += a), n < e ? e : n),
        l = 0,
        c = [".t-cover", ".t-cover__filter", ".t-cover__carrier", ".t-cover__wrapper"],
        a = ((r || t.querySelector(".t734")) && c.push(".t-slds__items-wrapper"), c.forEach(function(e) {
            Array.prototype.slice.call(t.querySelectorAll(e)).forEach(function(e) {
                i && e && e.classList.contains("t-cover__carrier") && d < document.documentElement.clientHeight ? (l = .2 * document.documentElement.clientHeight, e.style.height = d + l + "px") : e && (e.style.height = d + "px")
            })
        }), o.setAttribute("data-content-cover-updated-height", d + l + "px"), document.createEvent("Event"));
    a.initEvent("coverHeightUpdated", !0, !0), o.dispatchEvent(a)
}

function t_cover__updateResizeElem(e) {
    var t, o = document.getElementById("allrecords");
    !o || "yes" !== o.getAttribute("data-tilda-lazy") || (t = e.querySelector(".t-cover__carrier"), t_onFuncLoad("t_lazyload_updateResize_elem", function() {
        t_lazyload_updateResize_elem(t)
    }))
}

function t_cover__checkIsFixForBgNeeded(e) {
    var e = document.getElementById("rec" + e),
        t = e ? e.querySelector(".t-cover__carrier") : null;
    if (!t) return !1;
    var e = "y" === e.getAttribute("data-fixed-bg"),
        o = (o = ["mp4", "webm", "youtube"]).map(function(e) {
            return t.getAttribute("data-content-video-url-" + e)
        }),
        r = "fixed" === t.getAttribute("data-content-cover-parallax"),
        o = o.some(function(e) {
            return e
        }),
        n = window.t_cover__isMobile || "ontouchend" in document;
    return r && window.isSafari && !n && !o && !e
}

function t_cover__fixBgFixedNode(e) {
    var t, o, r, n = t_cover__checkIsFixForBgNeeded(e),
        e = document.getElementById("rec" + e);
    n && e && (n = e.getAttribute("data-record-type"), o = (r = e.querySelector(".t-cover")) ? r.parentElement : null, document.getElementById("fixed-bg-cover") || ((t = document.createElement("style")).id = "fixed-bg-cover", t.textContent = ".t-cover__container {position: relative;}.t-cover__container .t-cover {clip: rect(0, auto, auto, 0);position: absolute;top: 0;left: 0;width: 100%;height: 100% !important;}.t-cover__container .t-cover .t-cover__carrier {position: fixed;display: block;top: 0;left: 0;width: 100%;height: 100% !important;background-size: cover;background-position: center center;transform: translateZ(0);will-change: transform;}", document.head.insertAdjacentElement("beforeend", t)), (t = document.createElement("div")).classList.add("t-cover__container"), o.insertAdjacentElement("afterbegin", t), t.style.height = t_cover__getPureHeight(r) + "px", t.appendChild(r), (r = (o = {
        275: ".t256__video-container",
        286: ".t266__video-container",
        337: ".t-container",
        906: ".t906__video-container"
    }[n]) ? e.querySelector(o) : null) && t.appendChild(r))
}

function t_cover__fixBgFixedStyles(e) {
    var t = document.getElementById("rec" + e),
        e = t_cover__checkIsFixForBgNeeded(e),
        o = t ? t.querySelector(".t-cover") : null,
        r = t ? t.querySelector(".t-cover__container") : null;
    e && r && o && (e = o.style.height, o.style.height = 0, r.style.height = e, t.setAttribute("data-fixed-bg", "y"))
}

function t_cover__getPureHeight(e) {
    if (!e) return 0;
    var t = parseInt(e.style.paddingTop) || 0,
        o = parseInt(e.style.paddingBottom) || 0;
    return e.clientHeight ? e.clientHeight - (t + o) : parseInt(window.getComputedStyle(e).height, 10)
}

function t_cover__getFullHeight(e) {
    return e ? e.offsetHeight + (parseInt(e.style.marginTop) || 0) + (parseInt(e.style.marginBottom) || 0) : 0
}

function t_cover__scrollToNextSection(e) {
    var t = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight;
    if ((e = t < e ? t : e) === window.pageYOffset) return !1;
    var o = window.pageYOffset,
        r = (e - o) / 30,
        n = window.pageYOffset,
        i = setInterval(function() {
            n += r, window.scrollTo(0, n), document.body.setAttribute("data-scrollable", "true"), (e - o < 0 && window.pageYOffset <= e || 0 < e - o && window.pageYOffset >= e) && (clearInterval(i), document.body.removeAttribute("data-scrollable"))
        }, 10)
}

function cover_setRecalculatedCoverHeight(e, t) {
    t_cover__setRecalculatedHeight(e, t)
}

function t_cover__getHeightWithoutPadding(e) {
    return t_cover__getPureHeight(e)
}
window.t_cover__isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t_onReady(t_cover__initCovers);
window.Tilda = window.Tilda || {},
    function() {
        function t_events__initEvent() {
            var myNav = navigator.userAgent.toLowerCase(),
                isIE = -1 !== myNav.indexOf("msie") && parseInt(myNav.split("msie")[1]);
            if (8 === isIE || 9 === isIE) {
                var btns = document.querySelectorAll(".t-btn");
                Array.prototype.forEach.call(btns, (function(btn) {
                    var url = btn.getAttribute("href");
                    btn.querySelector("table") && url && -1 === url.indexOf("#popup:") && -1 === url.indexOf("#price:") && btn.addEventListener("click", (function(e) {
                        var currentUrl = e.target.getAttribute("href");
                        e.preventDefault(), window.location.href = currentUrl
                    }))
                }))
            }
            try {
                var allRec = document.getElementById("allrecords"),
                    allRecCookie = allRec ? allRec.getAttribute("data-tilda-cookie") : null;
                allRec && "no" === allRecCookie || Tilda.saveUTM()
            } catch (e) {}
            var records = document.querySelectorAll(".r");

            function linkClickCreateEvent(e) {
                var targetEl = e.target.closest("a.js-click-stat") || e.target.closest(".js-click-zero-stat");
                if (e.target && targetEl) {
                    var virtPage = targetEl.getAttribute("data-tilda-event-name"),
                        virtTitle = targetEl.textContent,
                        url = targetEl.getAttribute("href") || "",
                        target = targetEl.getAttribute("target");
                    if (!virtPage) {
                        var record = targetEl.closest(".r"),
                            recordId;
                        virtPage = "/tilda/click/" + (record ? record.getAttribute("id") : "") + "/?url=" + url
                    }
                    if (Tilda.sendEventToStatistics(virtPage, virtTitle), "http" === url.substring(0, 4) && -1 === url.indexOf(".typeform.com/")) return window.setTimeout((function() {
                        window.open(url, "_blank" === target ? "_blank" : "_self")
                    }), "_blank" === target ? 0 : 300), e.preventDefault(), !1
                }
            }
            Array.prototype.forEach.call(records, (function(record) {
                record.removeEventListener("click", linkClickCreateEvent), record.addEventListener("click", linkClickCreateEvent)
            }));
            var inputsAmount = document.querySelectorAll("input.js-amount");
            Array.prototype.forEach.call(inputsAmount, (function(inputAmount) {
                var price = inputAmount.value;
                price = price.replace(/,/g, "."), price = parseFloat(price.replace(/[^0-9\.]/g, "")), inputAmount.value = price
            }))
        }
        Tilda.sendEcommerceEvent = function(type, productsArr) {
            if (void 0 === productsArr || 0 === productsArr.length) return !1;
            if (void 0 === type || "add" !== type && "remove" !== type && "purchase" !== type && "detail" !== type) return !1;
            for (var virtPage, virtTitle = "", virtPrice = 0, virtProducts = [], variant_str, productObj, recid = "", uid = "", lid = "", i = 0; i < productsArr.length; i++) {
                virtTitle > "" && (virtTitle += ", "), virtTitle += (productObj = productsArr[i]).name, virtPrice += productObj.price, variant_str = "", void 0 !== productObj.options && productObj.options.length > 0 && Array.prototype.forEach.call(productObj.options, (function(option) {
                    variant_str += option.option + ": " + option.variant + "; "
                }));
                var virtProduct = {
                    name: productObj.name,
                    price: productObj.price,
                    variant: variant_str,
                    quantity: 1
                };
                productObj.id && productObj.id > 0 && (id = productObj.id, virtProduct.id = productObj.id), productObj.uid && productObj.uid > 0 && (uid = productObj.uid, virtProduct.uid = productObj.uid), productObj.recid && productObj.recid > 0 && (recid = productObj.recid, virtProduct.recid = productObj.recid), productObj.lid && productObj.lid > 0 && (lid = productObj.lid, virtProduct.lid = productObj.lid), productObj.sku && productObj.sku > 0 && (virtProduct.sku = productObj.sku), virtProducts[virtProducts.length] = virtProduct
            }
            var virtProduct;
            "add" !== type && "remove" !== type || (virtPage = "/tilda/cart/" + type + "/", recid > 0 && (virtPage += "" + recid), uid > 0 ? virtPage += "-u" + uid : lid > 0 && (virtPage += "-" + lid)), "detail" === type && (virtPage = "/tilda/product/detail/", uid > 0 ? virtPage += uid + "/" : (recid > 0 && (virtPage += "r" + recid), lid > 0 && (virtPage += "-l" + lid))), "purchase" === type && (virtPage = "/tilda/rec" + recid + "/payment/"), (virtProduct = {
                ecommerce: {}
            }).ecommerce[type] = {
                products: virtProducts
            }, Tilda.sendEventToStatistics(virtPage, virtTitle, virtProduct, virtPrice)
        }, Tilda.sendEventToStatistics = function(virtPage, virtTitle, referer, price) {
            var isVirtPage = "/" === virtPage.substring(0, 1),
                products = [],
                allRec, allRecFbSendEvent;
            (allRec = document.getElementById("allrecords")) && (allRecFbSendEvent = null !== allRec.getAttribute("data-fb-event") ? allRec.getAttribute("data-fb-event") : window.jQuery && void 0 !== jQuery("#allrecords").data("fb-event") ? jQuery("#allrecords").data("fb-event") : null);
            var noFbSendEvent = !(!allRecFbSendEvent || "nosend" !== allRecFbSendEvent),
                allRecVkSendEvent = allRec ? allRec.getAttribute("data-vk-event") : null;
            allRec && (allRecVkSendEvent = null !== allRec.getAttribute("data-vk-event") ? allRec.getAttribute("data-vk-event") : window.jQuery && void 0 !== jQuery("#allrecords").data("vk-event") ? jQuery("#allrecords").data("vk-event") : null);
            var noVkSendEvent = !(!allRecVkSendEvent || "nosend" !== allRecVkSendEvent),
                currencyCode = "",
                curBlock = document.querySelector(".t706");
            if (currencyCode = allRec.getAttribute("data-tilda-currency") ? allRec.getAttribute("data-tilda-currency") : curBlock && curBlock.getAttribute("data-project-currency-code") ? curBlock.getAttribute("data-project-currency-code") : "RUB", referer || (referer = window.location.href), (price = price ? parseFloat(price) : 0) > 0)
                if (window.dataLayer || (window.dataLayer = []), -1 !== virtPage.indexOf("/tilda/") && -1 !== virtPage.indexOf("/payment/") && window.tildaForm && window.tildaForm.orderIdForStat > "") referer = {
                    ecommerce: {
                        purchase: {
                            actionField: {
                                id: window.tildaForm.orderIdForStat,
                                revenue: window.tildaForm.amountForStat
                            },
                            products: window.tildaForm.arProductsForStat
                        }
                    }
                }, window.tildaForm.tildapayment && window.tildaForm.tildapayment.promocode && (referer.ecommerce.purchase.actionField.coupon = window.tildaForm.tildapayment.promocode), referer.event = "purchase";
                else if (referer && referer.ecommerce && (referer.ecommerce.add && referer.ecommerce.add.products ? products = referer.ecommerce.add.products : referer.ecommerce.remove && referer.ecommerce.remove.products ? products = referer.ecommerce.remove.products : referer.ecommerce.detail && referer.ecommerce.detail.products && (products = referer.ecommerce.detail.products), products && products.length > 0)) {
                for (var p = 0; p < products.length; p++) products[p].id || (products[p].sku ? products[p].id = products[p].sku : products[p].uid ? products[p].id = products[p].uid : products[p].recid && products[p].lid && (products[p].id = products[p].recid + "_" + products[p].lid));
                referer.ecommerce.add && referer.ecommerce.add.products ? (referer.ecommerce.add.products = products, referer.event = "addToCart") : referer.ecommerce.remove && referer.ecommerce.remove.products ? (referer.ecommerce.remove.products = products, referer.event = "removeFromCart") : referer.ecommerce.detail && referer.ecommerce.detail.products ? (referer.ecommerce.detail.products = products, referer.event = "viewProduct") : (isVirtPage ? (referer.event = "pageView", referer.eventAction = virtPage) : referer.event = virtPage, referer.title = virtTitle, referer.value = price)
            }
            void 0 !== window.dataLayer && (isVirtPage ? price > 0 ? referer && referer.ecommerce ? window.dataLayer.push(referer) : window.dataLayer.push({
                event: "pageView",
                eventAction: virtPage,
                title: virtTitle,
                value: price,
                product: referer
            }) : window.dataLayer.push({
                event: "pageView",
                eventAction: virtPage,
                title: virtTitle,
                referer: referer
            }) : referer && referer.ecommerce ? window.dataLayer.push(referer) : window.dataLayer.push({
                event: virtPage,
                eventAction: virtTitle,
                value: price,
                referer: referer
            }));
            try {
                var isOldCounter;
                if (window.gtagTrackerID && "gtag" === window.mainTracker)
                    if (isVirtPage)
                        if (referer && referer.event)
                            if ("purchase" === referer.event) {
                                for (var products = referer.ecommerce.purchase.products, delivery = 0, i = 0; i < products.length; i++)
                                    if ("delivery" === products[i].id) {
                                        delivery = products[i];
                                        break
                                    }
                                gtag("event", "purchase", {
                                    transaction_id: referer.ecommerce.purchase.actionField.id,
                                    value: parseFloat(price).toFixed(2),
                                    currency: currencyCode,
                                    shipping: delivery,
                                    items: referer.ecommerce.purchase.products
                                })
                            } else "addToCart" === referer.event && referer.ecommerce.add ? gtag("event", "add_to_cart", {
                                items: referer.ecommerce.add.products
                            }) : "removeFromCart" === referer.event && referer.ecommerce.remove ? gtag("event", "remove_from_cart", {
                                items: referer.ecommerce.remove.products
                            }) : "viewProduct" === referer.event && referer.ecommerce.detail && gtag("event", "view_item", {
                                items: referer.ecommerce.detail.products
                            });
                else !!window.gtagTrackerID && -1 !== window.gtagTrackerID.indexOf("UA-") ? gtag("config", window.gtagTrackerID, {
                    page_title: virtTitle,
                    page_path: virtPage
                }) : gtag("event", window.gtagTrackerID, {
                    page_title: virtTitle,
                    page_path: virtPage,
                    send_to: window.gtagTrackerID
                });
                else gtag("event", virtPage, {
                    event_category: "tilda",
                    event_label: virtTitle,
                    value: price
                })
            } catch (e) {}
            if (window.ga && "tilda" !== window.mainTracker && "gtag" !== window.mainTracker)
                if (isVirtPage)
                    if (referer && referer.event) {
                        try {
                            if (window.Tilda.isLoadGAEcommerce || (window.Tilda.isLoadGAEcommerce = !0, ga("require", "ec")), ga("set", "currencyCode", currencyCode), "purchase" === referer.event) {
                                for (var product, iProduct = referer.ecommerce.purchase.products.length, i = 0; i < iProduct; i++) product = referer.ecommerce.purchase.products[i], ga("ec:addProduct", {
                                    id: product.id || i,
                                    name: product.name,
                                    price: parseFloat(product.price).toFixed(2),
                                    quantity: product.quantity
                                });
                                ga("ec:setAction", "purchase", {
                                    id: referer.ecommerce.purchase.actionField.id,
                                    revenue: parseFloat(price).toFixed(2)
                                })
                            } else if ("addToCart" === referer.event && referer.ecommerce.add) {
                                for (var product, iProduct = referer.ecommerce.add.products.length, i = 0; i < iProduct; i++) product = referer.ecommerce.add.products[i], ga("ec:addProduct", {
                                    id: product.id || i,
                                    name: product.name,
                                    price: parseFloat(product.price).toFixed(2),
                                    quantity: product.quantity
                                });
                                ga("ec:setAction", "add")
                            } else if ("removeFromCart" === referer.event && referer.ecommerce.remove) {
                                for (var product, iProduct = referer.ecommerce.remove.products.length, i = 0; i < iProduct; i++) product = referer.ecommerce.remove.products[i], ga("ec:addProduct", {
                                    id: product.id || i,
                                    name: product.name,
                                    price: parseFloat(product.price).toFixed(2),
                                    quantity: product.quantity
                                });
                                ga("ec:setAction", "remove")
                            } else if ("viewProduct" === referer.event && referer.ecommerce.detail) {
                                for (var product, iProduct = referer.ecommerce.detail.products.length, i = 0; i < iProduct; i++) product = referer.ecommerce.detail.products[i], ga("ec:addProduct", {
                                    id: product.id || i,
                                    name: product.name,
                                    price: parseFloat(product.price).toFixed(2),
                                    quantity: product.quantity
                                });
                                ga("ec:setAction", "detail")
                            }
                        } catch (e) {}
                        ga("send", {
                            hitType: "pageview",
                            page: virtPage,
                            title: virtTitle,
                            params: referer
                        })
                    } else ga("send", {
                        hitType: "pageview",
                        page: virtPage,
                        title: virtTitle
                    });
            else ga("send", {
                hitType: "event",
                eventCategory: "tilda",
                eventAction: virtPage,
                eventLabel: virtTitle,
                eventValue: price
            });
            if (window.mainMetrikaId && window.mainMetrikaId > 0 && "function" == typeof ym)
                if (isVirtPage) {
                    var mOpts = {
                        title: virtTitle
                    };
                    price > 0 ? (mOpts.params = {
                        order_price: price
                    }, currencyCode && (mOpts.params.currency = currencyCode), ym(window.mainMetrikaId, "hit", virtPage, mOpts)) : ym(window.mainMetrikaId, "hit", virtPage, mOpts)
                } else price > 0 ? (mOpts = {
                    order_price: price
                }, currencyCode && (mOpts.currency = currencyCode), ym(window.mainMetrikaId, "reachGoal", virtPage, mOpts)) : ym(window.mainMetrikaId, "reachGoal", virtPage);
            if (window.mainMetrika > "" && window[window.mainMetrika] && (isVirtPage ? price > 0 ? window[window.mainMetrika].hit(virtPage, {
                    title: virtTitle,
                    order_price: price,
                    params: referer
                }) : window[window.mainMetrika].hit(virtPage, {
                    title: virtTitle
                }) : price > 0 ? window[window.mainMetrika].reachGoal(virtPage, {
                    title: virtTitle,
                    params: referer,
                    order_price: price
                }) : window[window.mainMetrika].reachGoal(virtPage, {
                    title: virtTitle,
                    referer: referer
                })), void 0 !== window.fbq && !1 === noFbSendEvent) try {
                if (isVirtPage)
                    if (-1 === virtPage.indexOf("tilda/") || -1 === virtPage.indexOf("/payment/") && -1 === virtPage.indexOf("/submitted/"))
                        if (referer && referer.event && price > 0)
                            if ("addToCart" === referer.event && referer.ecommerce.add) {
                                for (var product, iProduct = referer.ecommerce.add.products.length, content_ids = [], i = 0; i < iProduct; i++) product = referer.ecommerce.add.products[i], content_ids.push(product.id || product.uid || product.name);
                                window.fbq("track", "AddToCart", {
                                    content_ids: content_ids,
                                    content_type: "product",
                                    value: price,
                                    currency: currencyCode
                                })
                            } else if ("viewProduct" === referer.event && referer.ecommerce.detail) {
                    for (var product, iProduct = referer.ecommerce.detail.products.length, content_ids = [], i = 0; i < iProduct; i++) product = referer.ecommerce.detail.products[i], content_ids.push(product.id || product.uid || product.name);
                    window.fbq("track", "ViewContent", {
                        content_ids: content_ids,
                        content_type: "product",
                        value: price,
                        currency: currencyCode
                    })
                } else virtPage.indexOf("tilda/popup"), window.fbq("track", "ViewContent", {
                    content_name: virtTitle,
                    content_category: virtPage
                });
                else virtPage.indexOf("tilda/popup"), window.fbq("track", "ViewContent", {
                    content_name: virtTitle,
                    content_category: virtPage
                });
                else price > 0 && currencyCode ? window.fbq("track", "InitiateCheckout", {
                    content_name: virtTitle,
                    content_category: virtPage,
                    value: price,
                    currency: currencyCode
                }) : window.fbq("track", "Lead", {
                    content_name: virtTitle,
                    content_category: virtPage
                });
                else window.fbq("track", virtPage, {
                    content_name: virtTitle,
                    value: price
                })
            } catch (e) {}
            if (void 0 !== window.VK && void 0 !== window.VK.Retargeting && !1 === noVkSendEvent) try {
                if (isVirtPage) {
                    var allRec, vkPriceListId = (allRec = document.getElementById("allrecords")) ? allRec.getAttribute("data-vk-price-list-id") : null,
                        priceListID = vkPriceListId && parseInt(vkPriceListId) || 0,
                        eventName = "",
                        eventParams = !1,
                        tmp, tmp, tmp, tmp, tmp;
                    if (referer && referer.event)
                        if (eventParams = {
                                products: [],
                                currency_code: "",
                                total_price: 0
                            }, "purchase" === referer.event && referer.ecommerce.purchase)
                            if (price > 0 && priceListID > 0) {
                                var product;
                                eventParams.currency_code = currencyCode;
                                for (var iProduct = referer.ecommerce.purchase.products.length, content_ids = [], i = 0; i < iProduct; i++) product = referer.ecommerce.purchase.products[i], eventParams.products.push({
                                    id: product.id || product.uid || product.name,
                                    price: product.price ? product.price : 0
                                }), eventParams.total_price = price;
                                eventName = "init_checkout"
                            } else eventName = "t-purchase";
                    else if ("addToCart" === referer.event && referer.ecommerce.add)
                        if (price > 0 && priceListID > 0) {
                            var product;
                            eventParams.currency_code = currencyCode;
                            for (var iProduct = referer.ecommerce.add.products.length, content_ids = [], i = 0; i < iProduct; i++) product = referer.ecommerce.add.products[i], eventParams.products.push({
                                id: product.id || product.uid || product.name,
                                price: product.price ? product.price : 0
                            }), eventParams.total_price = price;
                            eventName = "add_to_cart"
                        } else eventName = "t-add-to-cart", referer.ecommerce.add[0] && referer.ecommerce.add[0].uid && (eventName += "-" + referer.ecommerce.add[0].uid);
                    else if ("viewProduct" === referer.event && referer.ecommerce.detail)
                        if (price > 0 && priceListID > 0) {
                            var product;
                            eventParams.currency_code = currencyCode;
                            for (var iProduct = referer.ecommerce.detail.products.length, content_ids = [], i = 0; i < iProduct; i++) product = referer.ecommerce.detail.products[i], eventParams.products.push({
                                id: product.id || product.uid || product.name,
                                price: product.price ? product.price : 0
                            }), eventParams.total_price = price;
                            eventName = "view_product"
                        } else eventName = "t-view-product", referer.ecommerce.detail[0] && referer.ecommerce.detail[0].uid && (eventName += "-" + referer.ecommerce.detail[0].uid);
                    else if ("removeFromCart" === referer.event && referer.ecommerce.remmove)
                        if (price > 0 && priceListID > 0) {
                            var product;
                            eventParams.currency_code = currencyCode;
                            for (var iProduct = referer.ecommerce.remove.products.length, content_ids = [], i = 0; i < iProduct; i++) product = referer.ecommerce.remove.products[i], eventParams.products.push({
                                id: product.id || product.uid || product.name,
                                price: product.price ? product.price : 0
                            }), eventParams.total_price = price;
                            eventName = "remove_from_cart"
                        } else eventName = "t-remove-product", referer.ecommerce.remove[0] && referer.ecommerce.remove[0].uid && (eventName += "-" + referer.ecommerce.remove[0].uid);
                    else eventName = referer.event;
                    else if (-1 !== virtPage.indexOf("tilda/") && -1 !== virtPage.indexOf("/payment/")) eventName = "t-purchase-" + (tmp = (tmp = (tmp = virtPage.replace("/tilda/", "")).replace("tilda/", "")).replace("/payment/", ""));
                    else if (-1 !== virtPage.indexOf("tilda/") && -1 !== virtPage.indexOf("/submitted/")) eventName = "t-lead-" + (tmp = (tmp = (tmp = virtPage.replace("/tilda/", "")).replace("tilda/", "")).replace("/submitted/", ""));
                    else if (-1 !== virtPage.indexOf("tilda/popup")) eventName = "t-" + (tmp = (tmp = virtPage.replace("/tilda/", "")).replace("/", "-"));
                    else if (-1 !== virtPage.indexOf("tilda/click")) eventName = "t-" + (tmp = (tmp = virtPage.replace("/tilda/", "")).replace("/", "-"));
                    else eventName = "t-" + (tmp = virtPage.replace("/", "-"));
                    priceListID > 0 && eventParams && eventParams.currency_code ? (VK.Retargeting.Event("purchase"), VK.Retargeting.ProductEvent(priceListID, eventName, eventParams)) : (VK.Retargeting.Event(eventName), "t-purchase" === eventName.substring(0, 10) ? VK.Goal("purchase") : "t-lead" === eventName.substring(0, 6) && VK.Goal("lead"))
                } else VK.Retargeting.Event(virtPage)
            } catch (e) {}
            if (window.mainMailruId > "0") {
                var _tmr = window._tmr || (window._tmr = []);
                isVirtPage ? price > 0 ? _tmr.push({
                    id: "" + window.mainMailruId,
                    type: "pageView",
                    url: virtPage,
                    value: price,
                    start: (new Date).getTime()
                }) : _tmr.push({
                    id: "" + window.mainMailruId,
                    type: "pageView",
                    url: virtPage,
                    start: (new Date).getTime()
                }) : price > 0 ? _tmr.push({
                    id: "" + window.mainMailruId,
                    type: "reachGoal",
                    goal: virtPage,
                    value: price
                }) : _tmr.push({
                    id: "" + window.mainMailruId,
                    type: "reachGoal",
                    goal: virtPage
                })
            }
            "function" == typeof window.tildastat && (isVirtPage ? (virtPage.indexOf("payment") > 0 && virtPage.indexOf("tilda/form") > -1 && (virtPage = virtPage.replace("tilda/form", "tilda/rec")), window.tildastat("pageview", {
                page: virtPage
            })) : window.tildastat("pageview", {
                page: "/tilda/event/" + virtPage
            }))
        }, Tilda.saveUTM = function() {
            try {
                var tildaPageURL = window.location.href,
                    tildaPageQuery = "",
                    tildaPageUTM = "";
                if (-1 !== tildaPageURL.toLowerCase().indexOf("utm_") && "string" == typeof(tildaPageQuery = (tildaPageQuery = (tildaPageURL = tildaPageURL.toLowerCase()).split("?"))[1])) {
                    var arPair, arParams = tildaPageQuery.split("&");
                    for (var i in arParams) "amp;" === (arPair = arParams[i].split("="))[0].substring(0, 4) && (arPair[0] = arPair[0].substring(4)), "utm_" === arPair[0].substring(0, 4) && (tildaPageUTM = tildaPageUTM + arParams[i] + "|||");
                    if (tildaPageUTM.length > 0) {
                        var date = new Date;
                        date.setDate(date.getDate() + 30), document.cookie = "TILDAUTM=" + encodeURIComponent(tildaPageUTM) + "; path=/; expires=" + date.toUTCString()
                    }
                }
            } catch (err) {}
        }, "loading" !== document.readyState ? t_events__initEvent() : document.addEventListener("DOMContentLoaded", t_events__initEvent)
    }(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(s) {
        for (var el = this; el && 1 === el.nodeType;) {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode
        }
        return null
    });

function t_fallback__init() {
    t_fallback__initTags("LINK"), t_fallback__initTags("SCRIPT"), "loading" != document.readyState ? t_fallback__initTags("IMG") : document.addEventListener("DOMContentLoaded", (function() {
        t_fallback__initTags("IMG")
    }))
}

function t_fallback__initTags(t) {
    var a = document.querySelectorAll(t);
    Array.prototype.forEach.call(a, (function(a) {
        "set" !== a.isReloadFuncSet && (a.onerror = function() {
            t_fallback__reloadSRC(this), this.isReloadFuncSet = "set"
        }), "y" === a.loaderr && (a.loaderr = "", t_fallback__reloadSRC(a)), "IMG" == t && a.complete && 0 === a.naturalWidth && "" !== a.src && t_fallback__reloadSRC(a)
    }))
}

function t_fallback__reloadSRC(t) {
    "function" == typeof t_falladv__reloadSRC ? t_falladv__reloadSRC(t) : (t_fallback__loadAdvancedJS(), setTimeout((function() {
        t_fallback__reloadSRC(t)
    }), 500))
}

function t_fallback__handleTimeout() {
    "loading" == document.readyState && "object" == typeof window.performance && null !== document.head.querySelector('script[src^="https://static.tildacdn."]') && (t_fallback__loadAdvancedJS(), setTimeout((function() {
        "function" == typeof t_falladv__handleDomTimeOut ? t_falladv__handleDomTimeOut() : t_fallback__handleTimeout()
    }), 500))
}

function t_fallback__loadAdvancedJS() {
    if (!0 !== window.t_isfalladvstartload) {
        window.t_isfalladvstartload = !0;
        var t = new XMLHttpRequest;
        t.open("GET", "https://neo.tildacdn.com/js/tilda-fallback-advanced-1.0.min.js", !0), t.onreadystatechange = function() {
            if (4 == t.readyState && 200 == t.status) {
                var a = document.createElement("script");
                a.innerHTML = t.responseText, document.head.appendChild(a)
            }
        }, t.send()
    }
}
t_fallback__init(), document.addEventListener("DOMContentLoaded", t_fallback__init), setTimeout(t_fallback__handleTimeout, 3e4), setTimeout((function() {
    var t = document.getElementById("allrecords");
    if (t && !t.classList.contains("t-records_animated")) {
        var a = document.createElement("style");
        a.type = "text/css", a.innerHTML = "div.t-records {opacity: 1;}", document.getElementsByTagName("head")[0].appendChild(a)
    }
}), 5e3);
window.t_forms__lang = (window.navigator.userLanguage || window.navigator.language).toUpperCase().slice(0, 2), window.scriptSysPayment = {}, window.handlerSysPayment = {}, window.isInitEventsZB = {}, window.isInitEventsCustomMask = {}, window.initForms = {}, window.tildaForm = {
    versionLib: "02.001",
    endpoint: "forms.tildacdn.com",
    isRecaptchaScriptInit: !1,
    currentFormProccessing: !1
}, t_onReady((function() {
    var t = document.getElementById("allrecords");
    if (t) {
        var r = t.getAttribute("data-tilda-project-lang");
        r && (window.t_forms__lang = r);
        var o = t.getAttribute("data-tilda-root-zone");
        o && (window.tildaForm.endpoint = "forms.tildaapi." + o)
    }
    t_forms__initForms();
    var a = !!document.querySelector(".t706"),
        n = !!document.querySelector(".js-payment-systembox"),
        s = !!document.querySelector("input[name=tld_product]");
    if (a || n || s) {
        var l = "tilda-forms-payments-1.0",
            c;
        if (!document.head.querySelector('script[src*="' + l + '"]'))(c = document.createElement("script")).type = "text/javascript", c.src = "https://static.tildacdn.com/js/" + l + ".min.js", c.onerror = function() {
            console.error("Failed to load tilda-forms-payments: ", this.src)
        }, document.head.appendChild(c)
    }
    var d = window.t_forms__lang;
    if ("RU" !== d && "EN" !== d) {
        var l = "tilda-forms-dict-1.0",
            c;
        if (!document.head.querySelector('script[src*="' + l + '"]'))(c = document.createElement("script")).type = "text/javascript", c.src = "https://static.tildacdn.com/js/" + l + ".min.js", c.onerror = function() {
            console.error("Failed to load tilda-forms-dictionary: ", this.src)
        }, document.head.appendChild(c)
    }
})), window.tildaForm.captchaCallback = function() {
    if (!window.tildaForm.currentFormProccessing || !window.tildaForm.currentFormProccessing.form) return !1;
    window.tildaForm.send(window.tildaForm.currentFormProccessing.form, window.tildaForm.currentFormProccessing.btn, window.tildaForm.currentFormProccessing.formtype, window.tildaForm.currentFormProccessing.formskey), window.tildaForm.currentFormProccessing = !1
}, window.tildaForm_customMasksLoad = function() {
    if (!0 !== window.isInitEventsCustomMask) {
        var t = document.createElement("script");
        t.type = "text/javascript", t.src = "https://static.tildacdn.com/js/tilda-forms-custommask-1.0.min.js", document.head.appendChild(t), t.onload = function() {
            window.isInitEventsCustomMask = !0
        }
    }
}, window.tildaForm_initMasks = function() {
    var t = document.querySelectorAll(".js-tilda-mask");
    if (t.length && !0 !== window.isInitEventsCustomMask) return window.tildaForm_customMasksLoad(), void window.setTimeout((function() {
        window.tildaForm_initMasks()
    }), 100);
    !0 === window.isInitEventsCustomMask && Array.prototype.forEach.call(t, (function(t) {
        t_asyncLoad(t)
    }))
}, t_onReady((function() {
    window.tildaForm_initMasks()
})), window.tildaForm.validate = function(t) {
    t instanceof Element || (t = t[0]);
    for (var r = t.querySelectorAll(".js-tilda-rule"), o = [], a = !0, n = 0; n < r.length; n++) {
        var s = r[n],
            l = s.closest(".t-input-group"),
            c;
        if (!(l && "true" === l.getAttribute("data-hidden-by-condition"))) {
            var d = !!parseInt(s.getAttribute("data-tilda-req") || 0, 10),
                u = s.getAttribute("data-tilda-rule") || "none",
                m = "",
                p = "",
                f = s.getAttribute("data-tilda-rule-minlength") || 0,
                _ = s.getAttribute("data-tilda-rule-maxlength") || 0,
                w = {},
                y = s.value,
                h = "",
                g = s.getAttribute("type"),
                v = s.getAttribute("name"),
                b = t.getAttribute("data-formcart");
            w.obj = s, w.type = [], y && y.length && (h = y.replace(/[\s\u0000—\u001F\u2000-\u200F\uFEFF\u2028-\u202F\u205F-\u206F]/gi, ""), y = y.trim()), y.length > 0 && (a = !1), f && (f = parseInt(f, 10)), _ && (_ = parseInt(_, 10));
            var E = !y.length && !h.length,
                A = "checkbox" === g || "radio" === g,
                x = !t.querySelectorAll('[name="' + v + '"]:checked').length;
            if (d && (E || A && x)) w.type.push("req");
            else {
                switch (u) {
                    case "email":
                        m = /^(?!\.)(?!.*\.\.)[a-zA-Zёа-яЁА-Я0-9\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD_\.\-\+]{0,63}[a-zA-Zёа-яЁА-Я0-9\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD_\-\+]@[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéû0-9][a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéû0-9\.\-]{0,253}\.[a-zA-Zёа-яЁА-Я]{2,11}$/gi, y.length && !y.match(m) && w.type.push("email");
                        break;
                    case "url":
                        m = /^((https?|ftp):\/\/)?[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9][a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9_\.\-]{0,253}\.[a-zA-Zёа-яЁА-Я]{2,10}\/?$/gi, y.length && ((p = (p = (p = y.split("//")) && p.length > 1 ? p[1] : p[0]).split("/")) && p.length && p[0] ? (p = p[0]).match(m) || w.type.push("url") : (p && !p[0] || w.type.push("url"), p = ""));
                        break;
                    case "phone":
                        var F = s.getAttribute("data-tilda-mask"),
                            S = "^[0-9()+-";
                        F && (-1 !== F.indexOf("*") ? S += "a-zёа-я" : (-1 !== F.indexOf("a") && (S += "a-z"), -1 !== F.indexOf("а") && (S += "а-яё"))), S += "]+$", m = new RegExp(S, "gi"), (h.length && !h.match(m) || 1 == (p = h.replace(/[^0-9]+/g, "")).indexOf("000") || 1 == p.indexOf("111") && "9" != p.substring(0, 1) || 1 == p.indexOf("222") && "5" != p.substring(0, 1) || 1 == p.indexOf("333") || 1 == p.indexOf("444") || 1 == p.indexOf("555") && "0" != p.substring(0, 1) || 1 == p.indexOf("666") && "0" != p.substring(0, 1) || 1 == p.indexOf("8888") && "4" != p.substring(0, 1)) && w.type.push("phone");
                        break;
                    case "number":
                        m = /^[0-9]+$/gi, h.length > 0 && !h.match(m) && w.type.push("number");
                        break;
                    case "date":
                        var k = {
                            "DD-MM-YYYY": /^(0[1-9]|1[0-9]|2[0-9]|3[01])[\-\.\/](0[1-9]|1[012])[\-\.\/][0-9]{4}$/,
                            "MM-DD-YYYY": /^(0[1-9]|1[012])[\-\.\/](0[1-9]|1[0-9]|2[0-9]|3[01])[\-\.\/][0-9]{4}$/,
                            "YYYY-MM-DD": /^[0-9]{4}[\-\.\/](0[1-9]|1[012])[\-\.\/](0[1-9]|1[0-9]|2[0-9]|3[01])$/
                        };
                        h.length > 0 && !h.match(k[s.getAttribute("data-tilda-dateformat")] || /^[0-9]{1,4}[\-\.\/][0-9]{1,2}[\-\.\/][0-9]{1,4}$/gi) && w.type.push("date");
                        break;
                    case "time":
                        m = /^[0-9]{2}[:\.][0-9]{2}$/gi, //! TODO: 00:00 - 23:59. Заменить на /^([0-1][0-9]|2[0-3])[:\.][0-5][0-9]$/gi
                            h.length > 0 && !h.match(m) && w.type.push("time");
                        break;
                    case "name":
                        m = /^([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u00C0\u00C0-\u00C3\u00C8-\u00CA\u00CC\u00CD\u00D2-\u00D9\u00DA\u00DD\u00E0-\u00E3\u00E8\u00E9\u00EA\u00EC\u00ED\u00F2-\u00F5\u00F9\u00FA\u00FD\u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A0\u01A1\u01AF\u01B0\u1EA0\u1EA1-\u1EF9\u0027\u2019\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\u0041-\u007A\u00C0-\u02B8\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F\u10A0-\u10FF\u3040-\u309F\u30A0-\u30FF\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD]{1,})([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u00C0\u00C0-\u00C3\u00C8-\u00CA\u00CC\u00CD\u00D2-\u00D9\u00DA\u00DD\u00E0-\u00E3\u00E8\u00E9\u00EA\u00EC\u00ED\u00F2-\u00F5\u00F9\u00FA\u00FD\u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A0\u01A1\u01AF\u01B0\u1EA0\u1EA1-\u1EF9\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F\u10A0-\u10FF\u3040-\u309F\u30A0-\u30FF\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD\-\'\‘\ʼ\s\.]{0,})$/gi, y.length && !y.match(m) && w.type.push("name");
                        break;
                    case "nameeng":
                        m = /^([A-Za-z\s]{1,}((\-)?[A-Za-z\.\s](\')?){0,})*$/i, y.length && !y.match(m) && w.type.push("nameeng");
                        break;
                    case "namerus":
                        m = /^([А-Яа-яЁё\s]{1,}((\-)?[А-Яа-яЁё\.\s](\')?){0,})*$/i, y.length && !y.match(m) && w.type.push("namerus");
                        break;
                    case "string":
                        m = /^[A-Za-zА-Яа-я0-9ЁёЁёäöüÄÖÜßèéûӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶ\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F\u10A0-\u10FF\u3040-\u309F\u30A0-\u30FF\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD,\.:;\"\'\`\-\_\+\?\!\%\$\@\*\&\^\s]$/i, y.length && !y.match(m) && w.type.push("string");
                        break;
                    case "chosevalue":
                        var L;
                        "true" === s.getAttribute("data-option-selected") || w.type.push("chosevalue");
                        break;
                    case "promocode":
                        "y" !== b || !h.length || !window.tcart || window.tcart.promocode && window.tcart.prodamount_discountsum || w.type.push("promocode");
                        break;
                    case "deliveryreq":
                        w.type.push("deliveryreq")
                }
                f > 0 && y.length && y.length < f && w.type.push("minlength"), _ > 0 && y.length && y.length > _ && w.type.push("maxlength")
            }
            w.type && w.type.length && (o[o.length] = w)
        }
    }
    if ("y" === b) {
        var T = void 0 !== window.tcart_minorder && window.tcart_minorder > 0,
            C = void 0 !== window.tcart_mincntorder && window.tcart_mincntorder > 0,
            w, w;
        if (T)
            if (window.tcart.prodamount < window.tcart_minorder)(w = {
                obj: {},
                type: []
            }).type.push("minorder"), o.push(w);
        if (C && window.tcart.total < window.tcart_mincntorder)(w = {
            obj: {},
            type: []
        }).type.push("minquantity"), o.push(w)
    }
    return a && !o.length && (o = [{
        obj: "none",
        type: ["emptyfill"]
    }]), o
}, window.tildaForm.hideErrors = function(t) {
    if ("object" != typeof t || t.length) {
        t instanceof Element || (t = t[0]);
        var r = t.querySelectorAll(".js-errorbox-all"),
            o = t.querySelectorAll(".js-rule-error"),
            a = t.querySelectorAll(".js-error-rule-all"),
            n = t.querySelectorAll(".js-successbox"),
            s = t.querySelectorAll(".js-error-control-box"),
            l = t.querySelectorAll(".js-error-control-box .t-input-error"),
            c = document.getElementById("tilda-popup-for-error");
        Array.prototype.forEach.call(r, (function(t) {
            t.style.display = "none"
        })), Array.prototype.forEach.call(o, (function(t) {
            t.style.display = "none"
        })), Array.prototype.forEach.call(a, (function(t) {
            t.innerHTML = ""
        })), Array.prototype.forEach.call(n, (function(t) {
            t.style.display = "none"
        })), Array.prototype.forEach.call(l, (function(t) {
            t.innerHTML = ""
        })), Array.prototype.forEach.call(s, (function(t) {
            t_removeClass(t, "js-error-control-box")
        })), t_removeClass(t, "js-send-form-error"), t_removeClass(t, "js-send-form-success"), c && t_fadeOut(c)
    }
}, window.tildaForm.showErrorInPopup = function(t, r) {
    if (t instanceof Element || (t = t[0]), !r || !r.length) return !1;
    var o = t.getAttribute("id"),
        a = t.getAttribute("data-inputbox");
    a || (a = ".blockinput");
    var n = "",
        s = !1,
        l = !0,
        c = "",
        d = "",
        u = "",
        m = "",
        p = document.getElementById("tilda-popup-for-error");
    p || (document.body.insertAdjacentHTML("beforeend", '<div id="tilda-popup-for-error" class="js-form-popup-errorbox tn-form__errorbox-popup" style="display: none;"> <div class="t-form__errorbox-text t-text t-text_xs"> error </div> <div class="tn-form__errorbox-close js-errorbox-close"> <div class="tn-form__errorbox-close-line tn-form__errorbox-close-line-left"></div> <div class="tn-form__errorbox-close-line tn-form__errorbox-close-line-right"></div> </div> </div>'), t_addEventListener(p = document.getElementById("tilda-popup-for-error"), "click", (function(t) {
        var r, o;
        if (((t = t || window.event).target || t.srcElement).closest(".js-errorbox-close")) return t.preventDefault ? t.preventDefault() : t.returnValue = !1, t_fadeOut(p), !1
    })));
    for (var f = 0; f < r.length; f++)
        if (r[f] && r[f].obj) {
            if (0 === f && "none" === r[f].obj) {
                m = '<p class="t-form__errorbox-item">' + t_forms__getMsg("emptyfill") + "</p>";
                break
            }
            var _ = r[f].obj;
            _ instanceof Element || (_ = _[0]), _ && (n = _.closest(a)), n && (d = n.querySelectorAll(".t-input-error"), t_addClass(n, "js-error-control-box"), d.length && (s = !0));
            for (var w = 0; w < r[f].type.length; w++) {
                var y = r[f].type[w],
                    h = t_forms__getMsg(y);
                u = "", (c = t.querySelector(".js-rule-error-" + y)) ? c.textContent && c.innerText || !h || -1 !== m.indexOf(h) ? (u = c.textContent || c.innerText, -1 === m.indexOf(u) && (m = m + '<p class="t-form__errorbox-item">' + u + "</p>")) : m = m + '<p class="t-form__errorbox-item">' + h + "</p>" : h && -1 === m.indexOf(h) && (m = m + '<p class="t-form__errorbox-item">' + h + "</p>"), s && (!u && t_forms__getMsg(y + "field") ? u = t_forms__getMsg(y + "field") : h && (u = h), u && n && (d = n.querySelectorAll(".t-input-error"), Array.prototype.forEach.call(d, (function(t) {
                    t.innerHTML = u, t_fadeIn(t)
                }))))
            }
        }
    if (m) {
        p.querySelector(".t-form__errorbox-text").innerHTML = m;
        var g = p.querySelectorAll(".t-form__errorbox-item");
        if (Array.prototype.forEach.call(g, (function(t) {
                t.style.display = "block"
            })), document.querySelector('.t1093 [data-elem-type="form"]')) {
            var v = window.tPopupObj && window.tPopupObj.openPopUpList;
            if (v && v.length) {
                var b, E = '.t1093 .t-popup[data-tooltip-hook="' + v[v.length - 1] + '"]',
                    A = document.querySelector(E),
                    x = A ? getComputedStyle(A).zIndex : 0,
                    F;
                x > 1e4 && (p.style.zIndex = x + 1)
            } else p.style.zIndex = ""
        }
        t_fadeIn(p)
    }

    function t_forms__hidePopup(t) {
        var r;
        if ("INPUT" === ((t = t || window.event).target || t.srcElement).tagName) {
            var a = S.querySelectorAll("form .t-input-error");
            t_fadeOut(p), Array.prototype.forEach.call(a, (function(t) {
                t.innerHTML = "", t_fadeOut(t)
            })), window.t_forms__errorTimerID && (window.clearTimeout(window.t_forms__errorTimerID), window.t_forms__errorTimerID = 0), window.isInitEventsZB[o] = !0
        }
    }
    if (window.t_forms__errorTimerID && window.clearTimeout(window.t_forms__errorTimerID), window.t_forms__errorTimerID = window.setTimeout((function() {
            t_fadeOut(p), d = t.querySelectorAll(".t-input-error"), Array.prototype.forEach.call(d, (function(t) {
                t.innerHTML = "", t_fadeOut(t)
            })), window.t_forms__errorTimerID = 0
        }), 1e4), !window.isInitEventsZB[o]) {
        var S = t.closest(".r"),
            k = "focus";
        document.addEventListener || (k = "focusin"), t_removeEventListener(S, k, t_forms__hidePopup), t_addEventListener(S, k, t_forms__hidePopup, !0), t_removeEventListener(S, "change", t_forms__hidePopup), t_addEventListener(S, "change", t_forms__hidePopup, !0)
    }
    return t_triggerEvent(t, "tildaform:aftererror"), !0
}, window.tildaForm.showErrors = function(t, r) {
    if (t instanceof Element || (t = t[0]), !r || !r.length) return !1;
    if ("y" === t.getAttribute("data-error-popup")) return tildaForm.showErrorInPopup(t, r);
    var o = t.getAttribute("data-inputbox");
    o || (o = ".blockinput");
    for (var a = "", n = !1, s = !0, l = "", c = "", d = "", u = [], m = 0; m < r.length; m++)
        if (r[m] && r[m].obj) {
            if (0 === m && "none" === r[m].obj) {
                l = t.querySelectorAll(".js-rule-error-all");
                for (var p = 0; p < l.length; p++) {
                    l[p].innerHTML = '<a href="#" class="t-form__errorbox-link">' + t_forms__getMsg("emptyfill") + "</a>", l[p].style.display = "block";
                    var f = t.querySelectorAll(".t-input")[0],
                        _;
                    if (f) t_forms__moveToErrorInput(f.getAttribute("id"), l[0])
                }
                break
            }
            var w = r[m].obj;
            w instanceof Element || (w = w[0]), w && (a = w.closest(o)), a && (c = a.querySelectorAll(".t-input-error"), t_addClass(a, "js-error-control-box"), c.length > 0 && (n = !0));
            for (var p = 0; p < r[m].type.length; p++) {
                var y = r[m].type[p],
                    h = r[m].obj.id;
                if (d = "", (l = t.querySelectorAll(".js-rule-error-" + y)).length)
                    for (var g = 0; g < l.length; g++) {
                        var v;
                        (v = l[g]).getAttribute("data-rule-filled") ? v.style.display = "block" : (v.textContent && v.innerText || !t_forms__getMsg(y) ? d = l[0].textContent || l[0].innerText : v.innerHTML = '<a href="#" class="t-form__errorbox-link">' + t_forms__getMsg(y) + "</a>", v.style.display = "block", -1 === u.indexOf(y) && t_forms__moveToErrorInput(h, v), u.push(y))
                    } else if (t_forms__getMsg(y) && (l = t.querySelectorAll(".js-rule-error-all")).length)
                        for (var g = 0; g < l.length; g++) {
                            var v;
                            (v = l[g]).innerHTML = '<a href="#" class="t-form__errorbox-link">' + t_forms__getMsg(y) + "</a>", v.style.display = "block", -1 === u.indexOf(y) && t_forms__moveToErrorInput(h, v), u.push(y)
                        }
                    n && (!d && t_forms__getMsg(y + "field") ? d = t_forms__getMsg(y + "field") : !d && t_forms__getMsg(y) && (d = t_forms__getMsg(y)), d && a && (c = a.querySelectorAll(".t-input-error"), Array.prototype.forEach.call(c, (function(t) {
                        t.innerHTML = d
                    }))))
            }
        }
    var b = t.querySelectorAll(".js-errorbox-all");
    return Array.prototype.forEach.call(b, (function(t) {
        t.style.display = "block", t.focus()
    })), t_triggerEvent(t, "tildaform:aftererror"), !0
}, window.tildaForm.addTildaCaptcha = function(t, r) {
    t instanceof Element || (t = t[0]);
    var o = document.getElementById("tildaformcaptchabox"),
        a = document.getElementById("js-tildaspec-captcha"),
        n;
    o && t_removeEl(o), a && t_removeEl(a), t.insertAdjacentHTML("beforeend", '<input type="hidden" name="tildaspec-tildacaptcha" id="js-tildaspec-captcha">');
    try {
        n = (new Date).getTime() + "=" + parseInt(8 * Math.random(), 10)
    } catch (l) {
        n = "rnd=" + parseInt(8 * Math.random(), 10)
    }
    var s = '<div id="tildaformcaptchabox" tabindex="-1" style="z-index: 99999999999; position:fixed; text-align: center; vertical-align: middle; top: 0px; left:0px; bottom: 0px; right: 0px; background: rgba(255,255,255,0.97);"><iframe id="captchaIframeBox" src="//' + window.tildaForm.endpoint + "/procces/captcha/?tildaspec-formid=" + t.getAttribute("id") + "&tildaspec-formskey=" + r + "&" + n + '" frameborder="0" width="100%" height="100%"></iframe></div>';
    document.body.insertAdjacentHTML("beforeend", s), window.removeEventListener("message", checkVerifyTildaCaptcha), window.addEventListener("message", checkVerifyTildaCaptcha), document.getElementById("tildaformcaptchabox").focus()
}, window.tildaForm.addMebersInfoToForm = function(t) {
    t instanceof Element || (t = t[0]);
    try {
        window.tildaForm.tildamember = {};
        var r = t.querySelector(".js-tilda-mauserinfo");
        if (r && t_removeEl(r), !window.mauser || !window.mauser.code || !window.mauser.email) return !1;
        window.mauser.name && (window.tildaForm.tildamember.name = window.mauser.name), window.tildaForm.tildamember.email = window.mauser.email, window.tildaForm.tildamember.code = window.mauser.code
    } catch (o) {
        return console.log("addMebersInfoToForm exception: ", o), !1
    }
    return !0
}, window.tildaForm.closeSuccessPopup = function() {
    var t = document.getElementById("tildaformsuccesspopup");
    t && (t_removeClass(document.body, "t-body_success-popup-showed"), /iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && window.tildaForm.unlockBodyScroll(), t_fadeOut(t))
}, window.tildaForm.lockBodyScroll = function() {
    var t = document.body;
    if (!t_hasClass(t, "t-body_scroll-locked")) {
        var r = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        t_addClass(t, "t-body_scroll-locked"), t.style.top = "-" + r + "px", t.setAttribute("data-popup-scrolltop", r)
    }
}, window.tildaForm.unlockBodyScroll = function() {
    var t = document.body;
    if (t_hasClass(t, "t-body_scroll-locked")) {
        var r = t.getAttribute("data-popup-scrolltop");
        t_removeClass(t, "t-body_scroll-locked"), t.style.top = null, t.removeAttribute("data-popup-scrolltop"), document.documentElement.scrollTop = parseInt(r)
    }
}, window.tildaForm.showSuccessPopup = function(t) {
    var r = "",
        o = document.getElementById("tildaformsuccesspopup"),
        a = document.getElementById("tildaformsuccesspopuptext"),
        n = document.body;
    if (!o) {
        r += '<style media="screen"> .t-form-success-popup { display: none; position: fixed; background-color: rgba(0,0,0,.8); top: 0px; left: 0px; width: 100%; height: 100%; z-index: 10000; overflow-y: auto; cursor: pointer; } .t-body_success-popup-showed { height: 100vh; min-height: 100vh; overflow: hidden; } .t-form-success-popup__window { width: 100%; max-width: 400px; position: absolute; top: 50%; -webkit-transform: translateY(-50%); transform: translateY(-50%); left: 0px; right: 0px; margin: 0 auto; padding: 20px; box-sizing: border-box; } .t-form-success-popup__wrapper { background-color: #fff; padding: 40px 40px 50px; box-sizing: border-box; border-radius: 5px; text-align: center; position: relative; cursor: default; } .t-form-success-popup__text { padding-top: 20px; } .t-form-success-popup__close-icon { position: absolute; top: 14px; right: 14px; cursor: pointer; } @media screen and (max-width: 480px) { .t-form-success-popup__text { padding-top: 10px; } .t-form-success-popup__wrapper { padding-left: 20px; padding-right: 20px; } } </style>', r += '<div class="t-form-success-popup" style="display:none;" id="tildaformsuccesspopup"> <div class="t-form-success-popup__window"> <div class="t-form-success-popup__wrapper"> <svg class="t-form-success-popup__close-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="t657__icon-close" viewBox="0 0 23 23"> <g fill-rule="evenodd"> <path d="M0 1.41L1.4 0l21.22 21.21-1.41 1.42z"/> <path d="M21.21 0l1.42 1.4L1.4 22.63 0 21.21z"/> </g> </svg> <svg width="50" height="50" fill="#62C584"> <path d="M25.1 49.28A24.64 24.64 0 0 1 .5 24.68 24.64 24.64 0 0 1 25.1.07a24.64 24.64 0 0 1 24.6 24.6 24.64 24.64 0 0 1-24.6 24.61zm0-47.45A22.87 22.87 0 0 0 2.26 24.68 22.87 22.87 0 0 0 25.1 47.52a22.87 22.87 0 0 0 22.84-22.84A22.87 22.87 0 0 0 25.1 1.83z"/> <path d="M22.84 30.53l-4.44-4.45a.88.88 0 1 1 1.24-1.24l3.2 3.2 8.89-8.9a.88.88 0 1 1 1.25 1.26L22.84 30.53z"/> </svg> <div class="t-form-success-popup__text t-descr t-descr_sm" id="tildaformsuccesspopuptext"> Thank You! </div> </div> </div> </div>', n.insertAdjacentHTML("beforeend", r), o = document.getElementById("tildaformsuccesspopup"), a = document.getElementById("tildaformsuccesspopuptext");
        var s = o.querySelector(".t-form-success-popup__close-icon");
        t_addEventListener(o, "click", (function(t) {
            var r;
            ((t = t || window.event).target || t.srcElement) === this && window.tildaForm.closeSuccessPopup()
        })), t_addEventListener(s, "click", (function() {
            window.tildaForm.closeSuccessPopup()
        })), t_addEventListener(n, "keydown", (function(t) {
            var r;
            27 == ((t = t || window.event).keyCode || t.which) && window.tildaForm.closeSuccessPopup()
        }))
    }
    a.innerHTML = t, t_fadeIn(o), t_addClass(n, "t-body_success-popup-showed"), /iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && setTimeout((function() {
        window.tildaForm.lockBodyScroll()
    }), 500)
}, window.tildaForm.successEnd = function(form, successUrl, successCallback) {
    form instanceof Element || (form = form[0]);
    var successBox = form.querySelector(".js-successbox"),
        successStr = t_forms__getMsg("success");
    if (successBox) {
        var dataSuccessMessage = successBox.getAttribute("data-success-message");
        dataSuccessMessage ? successBox.innerHTML = dataSuccessMessage : successBox.textContent && successBox.innerText || dataSuccessMessage || !successStr || (successBox.innerHTML = successStr), "y" === form.getAttribute("data-success-popup") ? window.tildaForm.showSuccessPopup(successBox.innerHTML) : successBox.style.display = "block"
    }
    t_addClass(form, "js-send-form-success"), successCallback && 0 === successCallback.indexOf("window.") && (successCallback = successCallback.split(".")[1]), successCallback && "function" == typeof window[successCallback] ? "undefined" != typeof jQuery ? eval(successCallback + "(jQuery(form))") : eval(successCallback + "(form)") : successUrl && setTimeout((function() {
        window.location.href = successUrl
    }), 500), window.tildaForm.clearTCart(form);
    var upwidgetRemoveBtns = form.querySelectorAll(".t-upwidget-container__data_table_actions_remove svg"),
        inputText = form.querySelectorAll('input[type="text"]'),
        inputNumber = form.querySelectorAll('input[type="number"]'),
        inputEmail = form.querySelectorAll('input[type="email"]'),
        inputPhone = form.querySelectorAll('input[type="tel"], input[type="hidden"][data-tilda-rule="phone"]'),
        inputTextarea = form.querySelectorAll("textarea");
    Array.prototype.forEach.call(upwidgetRemoveBtns, (function(t) {
        t_triggerEvent(t, "click")
    })), Array.prototype.forEach.call(inputText, (function(t) {
        t.value = ""
    })), Array.prototype.forEach.call(inputNumber, (function(t) {
        t.value = ""
    })), Array.prototype.forEach.call(inputEmail, (function(t) {
        t.value = ""
    })), Array.prototype.forEach.call(inputPhone, (function(t) {
        t.value = ""
    })), Array.prototype.forEach.call(inputTextarea, (function(t) {
        t.innerHTML = "", t.value = ""
    })), "undefined" != typeof jQuery && jQuery(form).data("tildaformresult", {
        tranId: "0",
        orderId: "0"
    }), form.tildaTranId = "0", form.tildaOrderId = "0"
}, window.tildaForm.clearTCart = function(t) {
    if (t instanceof Element || (t = t[0]), "y" === t.getAttribute("data-formcart")) {
        if (window.clearTCart = !0, window.tcart = {
                amount: 0,
                currency: "",
                system: "",
                products: []
            }, window.tcart.system = "none", "object" == typeof localStorage) try {
            localStorage.removeItem("tcart")
        } catch (r) {
            console.error("Your web browser does not support localStorage. Code status: ", r)
        }
        try {
            delete window.tcart, tcart__loadLocalObj()
        } catch (r) {}
        window.tcart_success = "yes"
    }
}, window.tildaForm.send = function(form, btnSubmit, formType, formKey) {
    form instanceof Element || (form = form[0]), btnSubmit instanceof Element || (btnSubmit = btnSubmit[0]);
    var allRecords = document.getElementById("allrecords"),
        pageId = allRecords.getAttribute("data-tilda-page-id"),
        projectId = allRecords.getAttribute("data-tilda-project-id"),
        formId = form.getAttribute("id"),
        dataFormCart = form.getAttribute("data-formcart");
    window.tildaForm.tildapayment = !1, ("y" === dataFormCart || form.closest(".t706__orderform")) && window.tildaForm.addPaymentInfoToForm(form);
    try {
        window.mauser && window.tildaForm.addMebersInfoToForm(form)
    } catch (error) {}
    var inputItsGood = form.querySelector('input[name="form-spec-comments"]');
    if (inputItsGood || form.insertAdjacentHTML("beforeend", '<div style="position: absolute; left: -5000px; bottom: 0; display: none;"><input type="text" name="form-spec-comments" value="Its good" class="js-form-spec-comments" tabindex="-1" /></div>'), 2 === formType || !formType && formKey) {
        var tildaSpecs = {
            "tildaspec-cookie": document.cookie,
            "tildaspec-referer": window.location.href,
            "tildaspec-formid": formId,
            "tildaspec-formskey": formKey,
            "tildaspec-version-lib": window.tildaForm.versionLib,
            "tildaspec-pageid": pageId,
            "tildaspec-projectid": projectId,
            "tildaspec-lang": window.t_forms__lang
        };
        for (spec in tildaSpecs) {
            var hiddenInput = form.querySelector('input[name="' + spec + '"]');
            hiddenInput || (form.insertAdjacentHTML("beforeend", '<input type="hidden" name="' + spec + '" value="">'), hiddenInput = form.querySelector('input[name="' + spec + '"]'), hiddenInput.value = tildaSpecs[spec])
        }
        try {
            hiddenInput = form.querySelector("input[name=tildaspec-fp]"), hiddenInput || (form.insertAdjacentHTML("beforeend", '<input type="hidden" name="tildaspec-fp" value="">'), hiddenInput = form.querySelector("input[name=tildaspec-fp]")), window.tildastat ? hiddenInput.value = window.tildastat("fingerprint") : hiddenInput.value = "st" + window.pageYOffset + "w" + window.innerWidth + "h" + window.innerHeight + "ft" + form.getBoundingClientRect().top + window.pageYOffset
        } catch (error) {}
        inputItsGood = form.querySelector(".js-form-spec-comments"), inputItsGood && (inputItsGood.value = "");
        var formUrl = "https://" + window.tildaForm.endpoint + "/procces/",
            dataForm = [],
            arrFilter = [];
        if (dataForm = t_serializeArray(form), Array.prototype.forEach.call(dataForm, (function(t) {
                -1 === t.name.indexOf("tildadelivery-") && arrFilter.push(t)
            })), dataForm = arrFilter, window.tildaForm.tildapayment && window.tildaForm.tildapayment.products) dataForm.push({
            name: "tildapayment",
            value: JSON.stringify(window.tildaForm.tildapayment)
        });
        else if (form.closest(".t706__orderform")) return !1;
        window.tildaForm.tildamember && window.tildaForm.tildamember.code && dataForm.push({
            name: "tildamember",
            value: JSON.stringify(window.tildaForm.tildamember)
        }), dataForm = t_forms__formData(dataForm);
        var startRequest = Date.now();
        t_triggerEvent(form, "tildaform:beforesend");
        var xhr = new XMLHttpRequest;
        return xhr.open("POST", formUrl, !0), xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), xhr.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01"), xhr.onreadystatechange = function() {
            if (4 === xhr.readyState)
                if (xhr.status >= 200 && xhr.status < 400) {
                    var data = xhr.responseText;
                    if (data) {
                        var objData = JSON.parse(data);
                        if ("object" == typeof objData) {
                            var dataSuccessUrl = form.getAttribute("data-success-url"),
                                dataSuccessCallback = form.getAttribute("data-success-callback"),
                                dataFormSendedCallback = form.getAttribute("data-formsended-callback");
                            t_removeClass(btnSubmit, "t-btn_sending"), btnSubmit.tildaSendingStatus = "0";
                            try {
                                if (objData && objData.redirectto && 3 == objData.redirectto.length && window.tildaForm.endpoint.substring(window.tildaForm.endpoint.length - 3) != objData.redirectto) return window.tildaForm.endpoint = "forms.tildaapi." + objData.redirectto, window.tildaForm.send(form, btnSubmit, formType, formKey), !1
                            } catch (e) {
                                console.log("error in dc action.")
                            }
                            if (objData && objData.error) {
                                dataSuccessUrl = "", dataSuccessCallback = "";
                                var msgContainers = t_forms__getErrorContainers(form, ""),
                                    errorBoxes = msgContainers.errorBoxes,
                                    allError = msgContainers.allError;
                                Array.prototype.forEach.call(allError, (function(t) {
                                    t.style.display = "block"
                                })), Array.prototype.forEach.call(errorBoxes, (function(t) {
                                    var r = t.querySelector(".t-form__errorbox-text");
                                    r ? r.textContent = objData.error : t.innerHTML = objData.error, t.style.display = "block"
                                })), t_addClass(form, "js-send-form-error"), t_triggerEvent(form, "tildaform:aftererror"), window.t_cart__discounts && window.localStorage.removeItem("tcart_discounts")
                            } else {
                                if (objData && objData.needcaptcha) return formKey ? void window.tildaForm.addTildaCaptcha(form, formKey) : void alert("Server busy. Please try again later.");
                                var formResult = {};
                                if (objData && objData.results && objData.results[0]) {
                                    var strValue = objData.results[0];
                                    strValue = strValue.split(":"), formResult.tranId = strValue[0] + ":" + strValue[1], formResult.orderId = strValue[2] ? strValue[2] : "0", formResult.orderId && "0" !== formResult.orderId && (window.tildaForm.orderIdForStat = formResult.orderId)
                                } else formResult.tranId = "0", formResult.orderId = "0";
                                "undefined" != typeof jQuery && jQuery(form).data("tildaformresult", formResult), form.tildaTranId = formResult.tranId, form.tildaOrderId = formResult.orderId;
                                var dataEventName = form.getAttribute("data-tilda-event-name") || "";
                                dataEventName || (dataEventName = "y" === dataFormCart && objData && (objData.next && objData.next.type && ("function" !== objData.next.type || objData.next.value && ("stripev3" === objData.next.value.sysname || "outersite" === objData.next.value.installation)) || !objData.next) ? "/tilda/" + formId + "/payment/" : "/tilda/" + formId + "/submitted/");
                                var title = "Send data from form " + formId,
                                    price = 0,
                                    product = "",
                                    priceEl = form.querySelector(".js-tilda-price");
                                if (window.Tilda && "function" == typeof window.Tilda.sendEventToStatistics) {
                                    window.tildaForm.tildapayment && window.tildaForm.tildapayment.amount ? (price = window.tildaForm.tildapayment.amount, parseFloat(price) > 0 && (title = "Order " + formResult.orderId)) : priceEl && (price = priceEl.value, parseFloat(price) > 0 && (title = "Order " + formResult.orderId));
                                    try {
                                        window.Tilda.sendEventToStatistics(dataEventName, title, product, price)
                                    } catch (error) {
                                        console.error("Error while sending statistics. Code status: ", error)
                                    }
                                    window.dataLayer && window.dataLayer.push({
                                        event: "submit_" + formId
                                    })
                                } else {
                                    try {
                                        ga && "tilda" !== window.mainTracker && ga("send", {
                                            hitType: "pageview",
                                            page: dataEventName,
                                            title
                                        }), window.mainMetrika && window[window.mainMetrika] && window[window.mainMetrika].hit(dataEventName, {
                                            title,
                                            referer: window.location.href
                                        })
                                    } catch (error) {
                                        console.error("Error while sending main metrica. Code status: ", error)
                                    }
                                    window.dataLayer && window.dataLayer.push({
                                        event: "submit_" + formId
                                    })
                                }
                                try {
                                    t_triggerEvent(form, "tildaform:aftersuccess"), dataFormSendedCallback && "function" == typeof jQuery ? eval(dataFormSendedCallback + "(jQuery(form));") : dataFormSendedCallback && eval(dataFormSendedCallback + "(form);")
                                } catch (error) {
                                    console.error("Error while call success callback. Code status: ", error)
                                }
                                if (objData && objData.next && objData.next.type) return window.tildaForm.payment(form, objData.next), dataSuccessUrl = "", !1;
                                window.tildaForm.successEnd(form, dataSuccessUrl, dataSuccessCallback)
                            }
                        }
                    }
                } else {
                    var tsDelta = Date.now() - startRequest;
                    t_removeClass(btnSubmit), btnSubmit.tildaSendingStatus = "0";
                    var msgContainers = t_forms__getErrorContainers(form, ""),
                        errorBoxes = msgContainers.errorBoxes,
                        allError = msgContainers.allError;
                    if (!xhr || 0 == xhr.status && tsDelta < 100) Array.prototype.forEach.call(allError, (function(t) {
                        t.innerHTML = "Request error (sending form data). Please check internet connection..."
                    }));
                    else {
                        if (xhr && (xhr.status >= 500 || 408 == xhr.status || 410 == xhr.status || 429 == xhr.status || "timeout" == xhr.statusText) && -1 !== window.tildaForm.endpoint.indexOf("forms.tilda")) return window.tildaForm.endpoint = "forms2.tildacdn.com", window.tildaForm.send(form, btnSubmit, formType, formKey), !1;
                        xhr && xhr.responseText ? Array.prototype.forEach.call(allError, (function(t) {
                            t.innerHTML = "[" + xhr.status + "] " + xhr.responseText + ". Please, try again later."
                        })) : xhr && xhr.statusText ? Array.prototype.forEach.call(allError, (function(t) {
                            t.innerHTML = "Error [" + xhr.status + ", " + xhr.statusText + "]. Please, try again later."
                        })) : Array.prototype.forEach.call(allError, (function(t) {
                            t.innerHTML = "[" + xhr.status + "] Unknown error. Please, try again later."
                        }))
                    }
                    Array.prototype.forEach.call(allError, (function(t) {
                        t.style.display = "block"
                    })), Array.prototype.forEach.call(errorBoxes, (function(t) {
                        t.style.display = "block"
                    })), t_addClass(form, "js-send-form-error"), t_triggerEvent(form, "tildaform:aftererror")
                }
        }, xhr.send(dataForm), !1
    }
    if ("y" === form.getAttribute("data-is-formajax")) {
        var dataForm = {};
        dataForm = t_serializeArray(form), window.tildaForm.tildapayment && window.tildaForm.tildapayment.amount && dataForm.push({
            name: "tildapayment",
            value: JSON.stringify(window.tildaForm.tildapayment)
        }), dataForm = t_forms__formData(dataForm);
        var xhr = new XMLHttpRequest;
        return xhr.open("POST", form.getAttribute("action"), !0), xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), xhr.setRequestHeader("Accept", "text/plain, */*; q=0.01"), xhr.onreadystatechange = function() {
            if (4 === xhr.readyState)
                if (xhr.status >= 200 && xhr.status < 400) {
                    var t = form.querySelector(".js-successbox"),
                        r = form.getAttribute("data-success-url"),
                        o = form.getAttribute("data-success-callback"),
                        a;
                    if (t_removeClass(btnSubmit, "t-btn_sending"), btnSubmit.tildaSendingStatus = "0", a = xhr.responseText)
                        if ("{" == a.substring(0, 1)) {
                            var n = JSON.parse(a);
                            if ("object" == typeof n)
                                if (n && n.message && "OK" !== n.message) t.innerHTML = n.message;
                                else if (n && n.error) {
                                var s, l = (s = t_forms__getErrorContainers(form, "Unknown error. Please, try again later.")).errorBoxes,
                                    c = s.allError;
                                return Array.prototype.forEach.call(c, (function(t) {
                                    t.style.display = "block", t.innerHTML = n.error
                                })), Array.prototype.forEach.call(l, (function(t) {
                                    t.style.display = "block"
                                })), t_addClass(form, "js-send-form-error"), t_triggerEvent(form, "tildaform:aftererror"), !1
                            }
                        } else t.innerHTML = a, t_parseScripts(t, "");
                    var d = "/tilda/" + formId + "/submitted/",
                        u = "Send data from form " + formId;
                    window.Tilda && "function" == typeof window.Tilda.sendEventToStatistics ? window.Tilda.sendEventToStatistics(d, u, "", 0) : "undefined" != typeof ga && "tilda" !== window.mainTracker ? ga("send", {
                        hitType: "pageview",
                        page: d,
                        title: u
                    }) : window.mainMetrika > "" && window[window.mainMetrika] && window[window.mainMetrika].hit(d, {
                        title: u,
                        referer: window.location.href
                    }), t_triggerEvent(form, "tildaform:aftersuccess"), window.tildaForm.successEnd(form, r, o)
                } else {
                    t_removeClass(btnSubmit, "t-btn_sending"), btnSubmit.tildaSendingStatus = "0";
                    var s, l = (s = t_forms__getErrorContainers(form, "")).errorBoxes,
                        c = s.allError,
                        a = xhr.responseText;
                    Array.prototype.forEach.call(c, (function(t) {
                        a ? t.innerHTML = a + ". Please, try again later. [" + xhr.status + "]" : xhr.statusText ? t.innerHTML = "Error [" + xhr.statusText + "]. Please, try again later. [" + xhr.status + "]" : t.innerHTML = "Unknown error. Please, try again later. [" + xhr.status + "]", t.style.display = "block"
                    })), Array.prototype.forEach.call(l, (function(t) {
                        t.style.display = "block"
                    })), t_addClass(form, "js-send-form-error"), t_triggerEvent(form, "tildaform:aftererror")
                }
        }, xhr.send(dataForm), !1
    }
    return -1 == form.getAttribute("action").indexOf(window.tildaForm.endpoint) && (t_removeClass(btnSubmit, "t-btn_sending"), btnSubmit.tildaSendingStatus = "3", form.submit(), !0)
}, window.validateForm = function(t) {
    return window.tildaForm.validate(t)
};
try {
    var TILDAPAGE_URL = window.location.href,
        TILDAPAGE_QUERY = "",
        TILDAPAGE_UTM = "";
    if (-1 !== TILDAPAGE_URL.toLowerCase().indexOf("utm_") && (TILDAPAGE_URL = TILDAPAGE_URL.toLowerCase(), TILDAPAGE_QUERY = TILDAPAGE_URL.split("?"), TILDAPAGE_QUERY = TILDAPAGE_QUERY[1], "string" == typeof TILDAPAGE_QUERY)) {
        var arPair, i, arParams = TILDAPAGE_QUERY.split("&");
        for (i in arParams) "function" != typeof arParams[i] && (arPair = arParams[i].split("="), "utm_" == arPair[0].substring(0, 4) && (TILDAPAGE_UTM = TILDAPAGE_UTM + arParams[i] + "|||"));
        if (TILDAPAGE_UTM.length > 0 && (!window.tildastatcookie || "no" != window.tildastatcookie)) {
            var date = new Date;
            date.setDate(date.getDate() + 30), document.cookie = "TILDAUTM=" + encodeURIComponent(TILDAPAGE_UTM) + "; path=/; expires=" + date.toUTCString()
        }
    }
} catch (error) {}

function t_forms__initForms() {
    var t = document.querySelectorAll('.r:not([data-record-type="1093"])');
    window.t_forms__inputData = {}, t_forms__addRecaptcha(), Array.prototype.forEach.call(t, (function(t) {
        var r = t.id;
        window.initForms[r] || (t_forms__initEventPlaceholder(t), t_forms__addInputItsGood(t), t_forms__addAttrAction(t), t_forms__onSubmit(t), t_forms__onClick(t), t_forms__onRender(t), t_forms__addFocusOnTab(t), t_onFuncLoad("t_throttle", (function() {
            window.addEventListener("resize", t_throttle((function() {
                t_forms__calculateInputsWidth(r)
            })))
        })), window.initForms[r] = !0)
    }))
}

function t_forms__addFocusOnTab(t) {
    if (!window.isMobile) {
        var r = t.querySelectorAll(".t-input, .t-select");
        if (r) {
            var o = null;
            document.addEventListener("keydown", (function() {
                o = "keyboard"
            })), document.addEventListener("mousedown", (function() {
                o = "mouse"
            })), document.addEventListener("visibilitychange", (function() {
                o = "mouse"
            })), Array.prototype.forEach.call(r, (function(t) {
                t.addEventListener("focus", (function() {
                    "keyboard" === o && ((t.classList.contains("t-input_pvis") || t.classList.contains("t-input-phonemask")) && (t = t.parentElement), t.classList.add("t-focusable"), o = null)
                })), t.addEventListener("blur", (function() {
                    t.classList.remove("t-focusable")
                }))
            }))
        }
    }
}

function t_forms__initEventPlaceholder(t) {
    var r = "focus",
        o = "blur";
    document.addEventListener || (r = "focusin", o = "focusout"), t_removeEventListener(t, r, t_forms__removePlaceholder), t_addEventListener(t, r, t_forms__removePlaceholder, !0), t_removeEventListener(t, o, t_forms__addPlaceholder), t_addEventListener(t, o, t_forms__addPlaceholder, !0)
}

function t_forms__removePlaceholder(t) {
    var r = (t = t || window.event).target || t.srcElement;
    if ("INPUT" === r.tagName) {
        var o = r.closest("[data-input-lid]"),
            a = r.getAttribute("placeholder"),
            n = "";
        if (o) n = o.getAttribute("data-input-lid");
        else {
            var s = r.closest("form");
            s && (n = s.getAttribute("data-input-lid"))
        }
        a && n && (window.t_forms__inputData[n] = a, r.setAttribute("placeholder", ""))
    }
}

function t_forms__moveToErrorInput(t, r) {
    var t_forms__focusIntoInput = function(r) {
        var o;
        r.preventDefault(), document.getElementById(t).focus()
    };
    r && (r.removeEventListener("click", t_forms__focusIntoInput), r.addEventListener("click", t_forms__focusIntoInput))
}

function t_forms__addPlaceholder(t) {
    var r = (t = t || window.event).target || t.srcElement,
        o = r.closest("[data-input-lid]"),
        a = "";
    if (o) a = o.getAttribute("data-input-lid");
    else {
        var n = r.closest("form");
        n && (a = n.getAttribute("data-input-lid"))
    }
    var s = window.t_forms__inputData[a] || "";
    s && a && (r.setAttribute("placeholder", s), window.t_forms__inputData[a] = "")
}

function t_forms__addInputItsGood(t) {
    var r = t.querySelectorAll(".js-form-proccess[data-formactiontype]");
    Array.prototype.forEach.call(r, (function(t) {
        var r = t.getAttribute("data-formactiontype"),
            o = t.querySelector('input[name="form-spec-comments"]');
        "1" === r || o || t.insertAdjacentHTML("beforeend", '<div style="position: absolute; left: -5000px; bottom: 0; display: none;"><input type="text" name="form-spec-comments" value="Its good" class="js-form-spec-comments" tabindex="-1" /></div>')
    }))
}

function t_forms__addAttrAction(t) {
    var r = t.querySelectorAll(".js-form-proccess");
    Array.prototype.forEach.call(r, (function(t) {
        var r;
        "2" === t.getAttribute("data-formactiontype") && t.setAttribute("action", "#")
    }))
}

function t_forms__calculateInputsWidth(t) {
    t && (t = t.replace("rec", ""));
    var r = document.querySelector("#rec" + t);
    if (t || !document.body.classList.contains("t706__body_cartwinshowed") && !document.body.classList.contains("t706__body_cartpageshowed") || (r = document.querySelector(".t706")), r) {
        var o = r.querySelector(".t-form__inputsbox");
        if (o) {
            o.closest(".t706") && o.classList.add("t-form__inputsbox_inrow");
            var a = r.querySelectorAll(".t-input-group_widthdef, .t-input-group_inrow");
            if (o.classList.contains("t-form__inputsbox_inrow") || (a = r.querySelectorAll(".t-input-block_width")), 0 !== a.length) {
                (o.classList.contains("t-form__inputsbox_vertical-form") || o.closest(".t706")) && o.classList.add("t-form__inputsbox_flex");
                var n = o.offsetWidth,
                    s = ["rd", "ri", "uc", "ws", "hd", "fr", "st"];
                Array.prototype.forEach.call(a, (function(t) {
                    if (o.classList.contains("t-form__inputsbox_inrow") || (t = t.closest(".t-input-group")), t && t.classList.contains("t-input-group_inrow-withsibling")) {
                        var r = t.nextElementSibling,
                            a = s.filter((function(t) {
                                return r.classList.contains("t-input-group_" + t)
                            }));
                        if (!r || 0 !== a.length || !(r.classList.contains("t-input-group_inrow") && !t.classList.contains("t-input-group_widthdef") || t.classList.contains("t-input-group_widthdef") && r.classList.contains("t-input-group") && !r.classList.contains("t-input-group_inrow"))) return t.classList.remove("t-input-group_inrow-withsibling"), void t.classList.add("t-input-group_inrow-last");
                        r.classList.add("t-input-group_inonerow")
                    } else t.classList.add("t-input-group_inrow-last");
                    r && t.classList.contains("t-input-group_widthdef") && t.classList.contains("t-input-group_inrow-withsibling") && r.classList.contains("t-input-group_inonerow") && !r.classList.contains("t-input-group_inrow") && (r.classList.add("t-input-group_widthdef"), r.classList.contains("t-input-group_inrow-withsibling") || r.classList.add("t-input-group_inrow-last"), r.classList.contains("t-input-group_inrow") && t.classList.add("t-input-group_inrow-last")), o.classList.contains("t-form__inputsbox_inrow") || t_forms__calculateFieldsWidthInJS(t, n)
                }));
                var l = r.querySelectorAll(".t-input-group_inrow.t-input-group_inonerow.t-input-group_inrow-last");
                l.length > 0 && t_forms__moveFieldToNextRow(l);
                var c = r.querySelectorAll(".t-input-group_widthdef.t-input-group_inrow-last");
                o.classList.contains("t-form__inputsbox_inrow") && c.length > 0 && t_forms__combineFieldsWithDefWidth(c, t)
            }
        }
    }
}

function t_forms__moveFieldToNextRow(t) {
    var r;
    t_forms__createArrWithAllRows(t, "t-input-group_inrow").forEach((function(t) {
        var r = !1;
        if (t.forEach((function(t) {
                t.classList.contains("t-input-group_inrow-last") && t.nextElementSibling && !t.nextElementSibling.classList.contains("t-input-group_inonerow") && (r = !0)
            })), !r) {
            var o = t.reduce((function(t, r) {
                var o, a = r.classList.value.split(" ").filter((function(t) {
                        return -1 !== t.indexOf("t-input-group_width")
                    })),
                    n = 2,
                    s;
                return -1 !== (a = a[0]).indexOf("100") && (n = 3), t + Number(a.substr(a.length - 2, n))
            }), 0);
            o <= 100 || t.forEach((function(t) {
                t.classList.contains("t-input-group_inrow-last") && (t.style.marginRight = "calc(100% - (" + (o - 100) + "%)", t.style.flex = "0 0 auto")
            }))
        }
    }))
}

function t_forms__combineFieldsWithDefWidth(t, r) {
    var o = [],
        a;
    t_forms__createArrWithAllRows(t, "t-input-group_widthdef").forEach((function(t) {
        var r = 4;
        if (t.length > 4)
            for (var a = 0; a < t.length; a += 4) {
                var n = t.slice(a, a + 4);
                o.push(n)
            } else o.push(t)
    })), o.forEach((function(t) {
        var o, a = "t-input-group_width" + ({
            4: "25",
            3: "33",
            2: "50"
        }[t.length] || "100");
        t.forEach((function(t) {
            if (t.classList.add(a), t.classList.contains("t-input-group_rg")) {
                var o = t.getAttribute("data-input-lid");
                t_input_range_init(r, o)
            }
        }))
    }))
}

function t_forms__createArrWithAllRows(t, r) {
    var o = [],
        a = [];
    return Array.prototype.forEach.call(t, (function(t) {
        for (a.push(t); t.previousElementSibling && t.previousElementSibling.classList.contains(r) && !t.previousElementSibling.classList.contains("t-input-group_inrow-last");) t = t.previousElementSibling, a.push(t);
        o.push(a.reverse()), a = []
    })), o
}

function t_forms__calculateFieldsWidthInJS(t, r) {
    var o = 15,
        a = {
            1: "t-input-block_width100",
            2: "t-input-block_width50",
            3: "t-input-block_width33",
            4: "t-input-block_width25"
        };
    for (var n in a)
        if (t.classList.contains(a[n])) {
            t.style.width = (r - o * (n - 1)) / n + "px";
            var s = t.previousElementSibling;
            s && s.classList.contains("t-input-title") && (s.style.width = (r - o * (n - 1)) / n + "px"), window.innerWidth < 480 && (t && (t.style.width = "100%"), s && (s.style.width = "100%"))
        }
}

function t_forms__onSubmit(t) {
    var r = t.querySelectorAll(".js-form-proccess");
    Array.prototype.forEach.call(r, (function(t) {
        t_removeEventListener(t, "submit", t_forms__submitEvent), t_addEventListener(t, "submit", t_forms__submitEvent)
    }))
}

function t_forms__onClick(t) {
    t_addEventListener(t, "dblclick", t_forms__initBtnDblClick), t_removeEventListener(t, "click", t_forms__initBtnClick), t_addEventListener(t, "click", t_forms__initBtnClick)
}

function t_forms__initBtnDblClick(t) {
    var r;
    if (((t = t || window.event).target || t.srcElement).closest('[type="submit"]')) return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
}

function t_forms__initBtnClick(t) {
    var r = (t = t || window.event).target || t.srcElement,
        o = !!r.closest('[type="submit"]') && r;
    if (o) {
        var a = o.closest(".js-form-proccess");
        if (a) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1;
            var n = a.getAttribute("id"),
                s = [],
                l = "";
            if (o.tildaSendingStatus && (l = o.tildaSendingStatus), !(l && l >= 1 || t_hasClass(o, "t706__submit_disable"))) {
                if (t_addClass(o, "t-btn_sending"), o.tildaSendingStatus = "1", window.tildaForm.hideErrors(a), s = window.tildaForm.validate(a), window.tildaForm.showErrors(a, s)) return t_removeClass(o, "t-btn_sending"), void(o.tildaSendingStatus = "0");
                var c, d = document.getElementById("allrecords").getAttribute("data-tilda-formskey"),
                    u = parseInt(a.getAttribute("data-formactiontype")),
                    m;
                if (!a.querySelectorAll(".js-formaction-services").length && 1 !== u && !d) {
                    var p = t_forms__getErrorContainers(a, ""),
                        f = p.errorBoxes,
                        _ = p.allError;
                    return Array.prototype.forEach.call(_, (function(t) {
                        t.innerHTML = "Please set receiver in block with forms", t.style.display = "block"
                    })), Array.prototype.forEach.call(f, (function(t) {
                        t.style.display = "block"
                    })), t_addClass(a, "js-send-form-error"), t_removeClass(o, "t-btn_sending"), o.tildaSendingStatus = "0", void t_triggerEvent(a, "tildaform:aftererror")
                }
                if (a.querySelector(".g-recaptcha") && grecaptcha) {
                    window.tildaForm.currentFormProccessing = {
                        form: a,
                        btn: o,
                        formtype: u,
                        formskey: d
                    };
                    var w = a.tildaCaptchaClientId;
                    if (w) grecaptcha.reset(w);
                    else {
                        var y = {
                            size: "invisible",
                            sitekey: a.getAttribute("data-tilda-captchakey"),
                            callback: window.tildaForm.captchaCallback
                        };
                        w = grecaptcha.render(n + "recaptcha", y), a.tildaCaptchaClientId = w
                    }
                    grecaptcha.execute(w)
                } else window.tildaForm.send(a, o, u, d)
            }
        }
    }
}

function t_forms__onRender(t) {
    var r;
    !!t.querySelector(".t396") && (t_removeEventListener(t, "render", t_forms__renderEvent), t_addEventListener(t, "render", t_forms__renderEvent))
}

function t_forms__renderEvent() {
    t_forms__onSubmit(this)
}

function t_forms__submitEvent(t) {
    var r = t;
    if (t.target && (r = t.target), r) {
        var o = r.querySelector('[type="submit"]'),
            a = "";
        o && o.tildaSendingStatus && (a = o.tildaSendingStatus), a && "3" === a ? o.tildaSendingStatus = "" : (o && !t_hasClass(o, "t706__submit_disable") && o.click(), t.preventDefault ? t.preventDefault() : t.returnValue = !1)
    }
}

function t_asyncLoad(t) {
    var r = t.getAttribute("data-tilda-mask"),
        o = t.getAttribute("data-tilda-mask-holder"),
        a = t.getAttribute("data-tilda-mask-init");
    r && !a && (o ? t_onFuncLoad("t_customMask__mask", (function() {
        t_customMask__mask(t, r, {
            placeholder: o
        })
    })) : t_onFuncLoad("t_customMask__mask", (function() {
        t_customMask__mask(t, r)
    })), t.setAttribute("data-tilda-mask-init", "1"))
}

function t_forms__getErrorContainers(t, r) {
    var o = t.querySelectorAll(".js-errorbox-all"),
        a = t.querySelectorAll(".js-errorbox-all .js-rule-error-all");
    return o.length || (t.insertAdjacentHTML("afterbegin", '<div class="js-errorbox-all"></div>'), o = t.querySelectorAll(".js-errorbox-all")), a.length || (Array.prototype.forEach.call(o, (function(t) {
        t.insertAdjacentHTML("beforeend", '<p class="js-rule-error-all">' + r + "</p>")
    })), a = t.querySelectorAll(".js-errorbox-all .js-rule-error-all")), {
        errorBoxes: o,
        allError: a
    }
}

function t_forms__addRecaptcha() {
    var t = document.querySelectorAll(".js-tilda-captcha");
    Array.prototype.forEach.call(t, (function(t) {
        var r = t.getAttribute("data-tilda-captchakey");
        if (r) {
            var o = t.getAttribute("id");
            if (!window.tildaForm.isRecaptchaScriptInit) {
                var a = document.head,
                    n = document.createElement("script");
                window.tildaForm.isRecaptchaScriptInit = !0, n.type = "text/javascript", n.src = "https://www.google.com/recaptcha/api.js?render=explicit", n.async = !0, a.appendChild(n), a.insertAdjacentHTML("beforeend", '<style type="text/css">.js-send-form-success .grecaptcha-badge {display: none;}</style>')
            }
            document.getElementById(o + "recaptcha") || t.insertAdjacentHTML("beforeend", '<div id="' + o + 'recaptcha" class="g-recaptcha" data-sitekey="' + r + '" data-callback="window.tildaForm.captchaCallback" data-size="invisible"></div>')
        } else t_removeClass(t, "js-tilda-captcha")
    }))
}

function t_forms__getMsg(t) {
    var r = [],
        o = window.t_forms__lang;
    return r.EN = {
        success: "Thank you! Your data has been submitted.",
        successorder: "Thank you! Order created. Please wait while you are redirected to the payment page...",
        email: "Please enter a valid email address",
        url: "Please put a correct URL",
        phone: "Please put a correct phone number",
        number: "Please put a correct number",
        date: "Please put a correct date",
        time: "Please put a correct time (HH:mm)",
        name: "Please put a name",
        namerus: "Please put a correct name (only cyrillic letters)",
        nameeng: "Please put a correct name (only latin letters)",
        string: "You put incorrect symbols. Only letters, numbers and punctuation symbols are allowed",
        req: "Please fill out all required fields",
        reqfield: "Required field",
        minlength: "Value is too short",
        maxlength: "Value too big",
        emptyfill: "None of the fields are filled in",
        chosevalue: "Please select an address from the options",
        deliveryreq: "It is not possible to place an order without delivery. Please refresh the page and try again",
        promocode: "Please activate promo code or clear input field"
    }, r.RU = {
        success: "Спасибо! Данные успешно отправлены.",
        successorder: "Спасибо! Заказ оформлен. Пожалуйста, подождите. Идет переход к оплате...",
        email: "Укажите, пожалуйста, корректный email",
        url: "Укажите, пожалуйста, корректный URL",
        phone: "Укажите, пожалуйста, корректный номер телефона",
        number: "Укажите, пожалуйста, корректный номер",
        date: "Укажите, пожалуйста, корректную дату",
        time: "Укажите, пожалуйста, корректное время (ЧЧ:ММ)",
        name: "Укажите, пожалуйста, имя",
        namerus: "Укажите, пожалуйста, имя (только кириллица)",
        nameeng: "Укажите, пожалуйста, имя (только латиница)",
        string: "Вы написали некорректные символы. Разрешены только буквы, числа и знаки пунктуации",
        req: "Пожалуйста, заполните все обязательные поля",
        reqfield: "Обязательное поле",
        minlength: "Слишком короткое значение",
        maxlength: "Слишком длинное",
        emptyfill: "Ни одно поле не заполнено",
        chosevalue: "Пожалуйста, выберите адрес из предложенных вариантов",
        deliveryreq: "Невозможно оформить заказ без доставки. Пожалуйста, перезагрузите страницу и попробуйте еще раз.",
        promocode: "Активируйте, пожалуйста, промокод или очистите поле"
    }, "function" == typeof t_forms__getDict && "RU" !== o && "EN" !== o && (r = t_forms__getDict()), r[o] ? r[o][t] : r.EN[t]
}

function checkVerifyTildaCaptcha(t) {
    if (-1 !== (t = t || window.event).origin.indexOf(window.tildaForm.endpoint)) {
        var r = document.getElementById("js-tildaspec-captcha"),
            o = document.getElementById("tildaformcaptchabox");
        if ("closeiframe" == t.data) return o && t_removeEl(o), void(r && t_removeEl(r));
        var a = t.data;
        if (r) {
            r.value = a, o && t_removeEl(o);
            var n = r.closest("form");
            n && t_forms__submitEvent(n)
        }
    }
}

function t_parseScripts(t, r) {
    var o = t.querySelectorAll(r + "script");
    Array.prototype.forEach.call(o, (function(r) {
        for (var o = document.createElement("script"), a = 0; a < r.attributes.length; a++) {
            var n = r.attributes[a];
            o.setAttribute(n.name, n.value)
        }
        if (r.innerHTML.length) o.appendChild(document.createTextNode(r.innerHTML)), r.parentNode.replaceChild(o, r);
        else {
            var s = document.createElement("script");
            s.src = r.attributes.src.value, t.appendChild(s), t_removeEl(r)
        }
    }))
}

function t_forms__onSuccess(t) {
    t instanceof Element || (t = t[0]);
    var r = t.closest(".r"),
        o = r.getAttribute("data-record-type"),
        a = t.querySelector(".t-form__inputsbox"),
        n = getComputedStyle(a, null),
        s = parseInt(n.paddingTop) || 0,
        l = parseInt(n.paddingBottom) || 0,
        c, d, u = a.clientHeight - (s + l) + (a.getBoundingClientRect().top + window.pageYOffset),
        m, p = t.querySelector(".t-form__successbox").getBoundingClientRect().top + window.pageYOffset,
        f = 0,
        _ = window.innerHeight,
        w = document.body,
        y = document.documentElement,
        h = Math.max(w.scrollHeight, w.offsetHeight, y.clientHeight, y.scrollHeight, y.offsetHeight);
    if (121 == o) {
        var g = t.getAttribute("data-success-callback");
        g && (o = g.split("_onSuccess")[0].replace("t", ""))
    }
    var v = "t" + o + "__inputsbox_hidden",
        b = [702, 708, 862, 945, 1014],
        E = !0;
    f = window.innerWidth > 960 ? p - 200 : p - 100;
    var A = document.querySelector(".t-tildalabel");
    if (p > window.scrollY || h - u < _ - 100) a.classList.add(v), _ > h && A && setTimeout((function() {
        t_fadeOut(A)
    }), 300);
    else {
        for (var x = 0; x < b.length; x++)
            if (b[x] == o) {
                E = !1;
                break
            }
        E && t_forms__scrollBeginForm(f), setTimeout((function() {
            a.classList.add(v)
        }), 400)
    }
    var F = t.getAttribute("data-success-url");
    if (F && setTimeout((function() {
            window.location.href = F
        }), 500), 835 == o || 862 == o) {
        var S = r.querySelector(".t" + o + "__btn_prev"),
            k = r.querySelector(".t" + o + "__wrapper"),
            L = r.querySelector(".t" + o + "__quiz-form-wrapper");
        S && (S.style.display = "none"), k && (k.style.minHeight = ""), L && (L.style.minHeight = "")
    }
}

function t_forms__scrollBeginForm(t) {
    var r = 400,
        o = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0),
        a = t - o,
        n = 0,
        s = 16;

    function t_forms__easeInOutCubic(t) {
        return (t /= r / 2) < 1 ? a / 2 * t * t * t + o : a / 2 * ((t -= 2) * t * t + 2) + o
    }

    function t_forms__animateScroll() {
        n += s, window.scrollTo(0, t_forms__easeInOutCubic(n)), n < r ? setTimeout(t_forms__animateScroll, s) : document.body.removeAttribute("data-scrollable")
    }
    document.body.setAttribute("data-scrollable", "true"), t_forms__animateScroll()
}

function t_removeEl(t) {
    t && t.parentNode && t.parentNode.removeChild(t)
}
Array.prototype.some || (Array.prototype.some = function(t) {
        "use strict";
        if (null == this) throw new TypeError("Array.prototype.some called on null or undefined");
        if ("function" != typeof t) throw new TypeError;
        for (var r = Object(this), o = r.length >>> 0, a = arguments.length >= 2 ? arguments[1] : void 0, n = 0; n < o; n++)
            if (n in r && t.call(a, r[n], n, r)) return !0;
        return !1
    }),
    function(t) {
        var r = t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector;
        t.matches = t.matchesSelector = r || function matches(t) {
            var matches = document.querySelectorAll(t),
                r = this;
            return Array.prototype.some.call(matches, (function(t) {
                return t === r
            }))
        }
    }(Element.prototype), Element.prototype.closest || (Element.prototype.closest = function(t) {
        for (var r = this; r && 1 === r.nodeType;) {
            if (Element.prototype.matches.call(r, t)) return r;
            r = r.parentElement || r.parentNode
        }
        return null
    }), String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, r) {
        "use strict";
        var o;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var a = Object(this),
            n = a.length >>> 0;
        if (0 === n) return -1;
        var s = 0 | r;
        if (s >= n) return -1;
        for (o = Math.max(s >= 0 ? s : n - Math.abs(s), 0); o < n; o++)
            if (o in a && a[o] === t) return o;
        return -1
    });
var t_forms__htmlEvents = {
    onblur: 1,
    onchange: 1,
    onfocus: 1,
    onsubmit: 1,
    onclick: 1,
    ondblclick: 1,
    onkeydown: 1,
    onkeypress: 1,
    onpaste: 1,
    oninput: 1
};

function t_removeEventListener(t, r, o) {
    t.removeEventListener ? t.removeEventListener(r, o, !1) : t.detachEvent && t_forms__htmlEvents["on" + r] ? t.detachEvent("on" + r, o) : t["on" + r] = null
}

function t_addEventListener(t, r, o, a) {
    t.addEventListener ? t.addEventListener(r, o, a) : t.attachEvent && t_forms__htmlEvents["on" + r] ? t.attachEvent("on" + r, o) : t["on" + r] = o
}

function t_serializeArray(t) {
    for (var r = [], o = t.querySelectorAll("input, textarea, button, select"), a = 0; a < o.length; a++) {
        var n = o[a].closest(".t-input-group");
        if (!(!o[a].name || o[a].disabled || ["file", "reset", "submit", "button"].indexOf(o[a].type) > -1 || n && n.getAttribute("data-hidden-by-condition")))
            if ("select-multiple" !== o[a].type)["checkbox", "radio"].indexOf(o[a].type) > -1 && !o[a].checked || r.push({
                name: o[a].name,
                value: o[a].value
            });
            else
                for (var s = o[a].options, l = 0; l < s.length; l++) s[l].selected && r.push({
                    name: s[l].name,
                    value: s[l].value
                })
    }
    return r
}

function t_addClass(t, r) {
    document.body.classList ? t.classList.add(r) : t.className += (t.className ? " " : "") + r
}

function t_removeClass(t, r) {
    document.body.classList ? t.classList.remove(r) : t.className = t.className.replace(new RegExp("(^|\\s+)" + r + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
}

function t_hasClass(t, r) {
    return document.body.classList ? t.classList.contains(r) : new RegExp("(\\s|^)" + r + "(\\s|$)").test(t.className)
}

function t_forms__formData(t) {
    for (var r = "", o = 0; o < t.length; o++) "" !== r && (r += "&"), r += encodeURIComponent(t[o].name) + "=" + encodeURIComponent(t[o].value);
    return r.replace(/%20/g, "+")
}

function t_fadeOut(t) {
    if ("none" !== t.style.display) var r = 1,
        o = setInterval((function() {
            t.style.opacity = r, (r -= .1) <= .1 && (clearInterval(o), t.style.display = "none", t.style.opacity = null)
        }), 30)
}

function t_fadeIn(t) {
    if ("block" !== t.style.display) {
        var r = 0;
        t.style.opacity = r, t.style.display = "block";
        var o = setInterval((function() {
            t.style.opacity = r, (r += .1) >= 1 && clearInterval(o)
        }), 30)
    }
}

function t_triggerEvent(t, r) {
    var o;
    document.createEvent ? (o = document.createEvent("HTMLEvents")).initEvent(r, !0, !1) : document.createEventObject && ((o = document.createEventObject()).eventType = r), o.eventName = r, t.dispatchEvent ? t.dispatchEvent(o) : t.fireEvent ? t.fireEvent("on" + o.eventType, o) : t[r] ? t[r]() : t["on" + r] && t["on" + r]()
}

function t_appendGoogleMap(recid, key) {
    if ("object" == typeof google && "object" == typeof google.maps) t_handleGoogleApiReady(recid);
    else if (window.googleapiiscalled) setTimeout((function() {
        t_appendGoogleMap(recid, key)
    }), 1e3);
    else {
        var runfunc = "window.t_handleGoogleApiReady_" + recid + ' = function () { t_handleGoogleApiReady("' + recid + '") }';
        eval(runfunc);
        var langPreferences = "",
            mapLang = "",
            tildaMapElement = document.querySelector("#rec" + recid + " .t-map"),
            tildaMapElLang = tildaMapElement.getAttribute("data-map-language");
        tildaMapElement && (mapLang = tildaMapElLang || ""), mapLang && 2 === mapLang.length && (langPreferences = "&language=" + mapLang);
        var script = document.createElement("script");
        script.type = "text/javascript";
        var mapKey = key ? key.trim() : "";
        script.src = "https://maps.google.com/maps/api/js?key=" + mapKey + "&callback=t_handleGoogleApiReady_" + recid + langPreferences, document.body.appendChild(script), window.googleapiiscalled = !0
    }
}

function t_handleGoogleApiReady(recid) {
    var gmaps = document.querySelectorAll("#rec" + recid + " .t-map");
    if (!gmaps.length) return !1;
    Array.prototype.forEach.call(gmaps, (function(gmap) {
        var arMarkers = window["arMapMarkers" + recid];
        window.isDragMap = !window.isMobile;
        var mapStyleAttr = gmap.getAttribute("data-map-style"),
            mapColorAttr = gmap.getAttribute("data-map-color"),
            mapModeAttr = gmap.getAttribute("data-map-mode"),
            mapZoomAttr = gmap.getAttribute("data-map-zoom"),
            myLatLng = arMarkers.length > 0 && new google.maps.LatLng(parseFloat(arMarkers[0].lat), parseFloat(arMarkers[0].lng)),
            myOptions = {
                zoom: parseInt(mapZoomAttr, 10),
                center: myLatLng,
                scrollwheel: !1,
                gestureHandling: "cooperative",
                zoomControl: !0,
                styles: getMapStyle(mapModeAttr, mapStyleAttr, mapColorAttr)
            };

        function getMapStyle(mode, style, color) {
            if (mode && !color) return style ? JSON.parse(style) : [];
            if (mode && color) {
                var hsl = t_map_hexToHsl(color),
                    saturation = 2 * hsl[1] - 100,
                    lightness = 2 * hsl[2] - 100,
                    invert = "bw_dark" === mode;
                return [{
                    featureType: "all",
                    elementType: "all",
                    stylers: [{
                        visibility: "simplified"
                    }, {
                        hue: color
                    }, {
                        saturation: saturation
                    }, {
                        lightness: invert ? -lightness : lightness
                    }, {
                        invert_lightness: invert
                    }]
                }]
            }
        }
        var map = new google.maps.Map(gmap, myOptions),
            bounds = new google.maps.LatLngBounds;

        function getSvgMarker(color) {
            return {
                path: "M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9   C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8   c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z",
                fillColor: color || "#ea4335",
                fillOpacity: 1,
                strokeColor: "#5e5e5e",
                strokeOpacity: .5,
                strokeWeight: 1,
                rotation: 0,
                scale: .075,
                anchor: new google.maps.Point(180, 555)
            }
        }

        function getAnchor(marker) {
            if (marker.offset) {
                var arr = marker.offset.replace(/\s/g, "").split(","),
                    x = -1 * +arr[0],
                    y = -1 * +arr[1];
                return new google.maps.Point(x, y)
            }
            return new google.maps.Point(0, 48)
        }
        Array.prototype.forEach.call(arMarkers, (function(el) {
            var myLatLng = new google.maps.LatLng(parseFloat(el.lat), parseFloat(el.lng)),
                icon = {
                    url: el.url,
                    size: new google.maps.Size(48, 48),
                    anchor: getAnchor(el)
                },
                marker = new google.maps.Marker({
                    position: myLatLng,
                    visible: !el.isHidden,
                    map: map,
                    title: el.title,
                    icon: el.url ? icon : getSvgMarker(el.color)
                });
            bounds.extend(myLatLng), (el.descr || el.title) && t_map__attachInfoMessage(marker, el.descr, el.title, el.isOpen)
        }));
        var mapPathAttr = gmap.getAttribute("data-map-path"),
            mapPathColorAttr = gmap.getAttribute("data-map-path-color"),
            mapPathWeightAttr = gmap.getAttribute("data-map-path-weight"),
            path;
        null !== mapPathAttr && arMarkers.length > 1 && new google.maps.Polyline({
            path: arMarkers.map((function(item) {
                return new google.maps.LatLng(parseFloat(item.lat), parseFloat(item.lng))
            })),
            geodesic: !0,
            strokeColor: mapPathColorAttr || "#ff6d61",
            strokeWeight: parseInt(mapPathWeightAttr) || 2
        }).setMap(map);

        function t_map__attachInfoMessage(marker, descr, title, isOpen) {
            var textarea = document.createElement("textarea");
            textarea.innerHTML = descr;
            var baloonTitle, baloonDescr, baloonContent = [title ? "<b>" + title + "</b>" : "", textarea.textContent].filter(Boolean).join("<br>"),
                infowindow = new google.maps.InfoWindow({
                    content: baloonContent
                });
            isOpen && infowindow.open(marker.get("map"), marker), marker.addListener("click", (function() {
                infowindow.open(marker.get("map"), marker)
            }))
        }
        if (arMarkers.length > 1) {
            map.fitBounds(bounds);
            var listener = google.maps.event.addListener(map, "idle", (function() {
                (map.getZoom() > parseInt(mapZoomAttr, 10) || 0 === map.getZoom()) && map.setZoom(parseInt(mapZoomAttr, 10)), map.getZoom() > 16 && map.setZoom(16), google.maps.event.removeListener(listener)
            }))
        }
        google.maps.event.addDomListener(window, "resize", (function() {
            var center = map.getCenter(),
                zoom = parseInt(mapZoomAttr, 10);
            google.maps.event.trigger(map, "resize"), map.setCenter(center), arMarkers.length > 0 && (map.fitBounds(bounds), zoom > 0 && (map.getZoom() > zoom || 0 == map.getZoom()) && map.setZoom(zoom))
        })), gmap.addEventListener("displayChanged", (function() {
            google.maps.event.trigger(map, "resize")
        })), gmap.addEventListener("sizechange", (function() {
            google.maps.event.trigger(map, "resize")
        }))
    }))
}

function t_appendYandexMap(recid, key) {
    if ("object" == typeof ymaps && "function" == typeof ymaps.Map) t_handleYandexApiReady(recid);
    else if (window.yandexmapsapiiscalled) setTimeout((function() {
        t_appendYandexMap(recid, key)
    }), 1e3);
    else {
        var runfunc = "window.t_handleYandexApiReady_" + recid + ' = function () { return t_handleYandexApiReady("' + recid + '") }';
        eval(runfunc);
        var mapLang = "",
            tildaMapElement = document.querySelector("#rec" + recid + " .t-map"),
            tildaMapElAttr = tildaMapElement.getAttribute("data-map-language");
        if (tildaMapElement) switch (tildaMapElAttr) {
            case "EN":
                mapLang = "en_US";
                break;
            default:
                mapLang = "ru_RU"
        }
        var script = document.createElement("script");
        script.type = "text/javascript", script.src = "https://api-maps.yandex.ru/2.1/?lang=" + mapLang + "&coordorder=latlong&onload=t_handleYandexApiReady_" + recid, key && (script.src += "&apikey=" + key), document.body.appendChild(script), window.yandexmapsapiiscalled = !0
    }
}

function t_handleYandexApiReady(recid) {
    var ymapsArr = document.querySelectorAll("#rec" + recid + " .t-map");
    if (!ymapsArr.length) return !1;
    Array.prototype.forEach.call(ymapsArr, (function(ymap) {
        var arMarkers = window["arMapMarkers" + recid],
            mapZoomAttr = ymap.getAttribute("data-map-zoom");
        window.isDragMap = !window.isMobile;
        var myLatLng = arMarkers.length > 0 && [parseFloat(arMarkers[0].lat), parseFloat(arMarkers[0].lng)],
            myOptions = {
                zoom: parseInt(mapZoomAttr, 10),
                center: myLatLng,
                scrollZoom: !1,
                controls: ["typeSelector", "zoomControl"],
                drag: window.isDragMap
            },
            map = new ymaps.Map(ymap, myOptions),
            eventsPane, eventsPaneEl = map.panes.get("events").getElement(),
            mobilePanelText = {
                EN: "Use two fingers to move the map",
                RU: "Чтобы переместить карту проведите по ней двумя пальцами",
                FR: "Utilisez deux doigts pour déplacer la carte",
                DE: "Verschieben der Karte mit zwei Fingern",
                ES: "Para mover el mapa, utiliza dos dedos",
                PT: "Use dois dedos para mover o mapa",
                UK: "Переміщуйте карту двома пальцями",
                JA: "地図を移動させるには指 2 本で操作します",
                ZH: "使用双指移动地图",
                PL: "Przesuń mapę dwoma palcami",
                KK: "Картаны екі саусақпен жылжытыңыз",
                IT: "Utilizza due dita per spostare la mappa",
                LV: "Lai pārvietotu karti, bīdiet to ar diviem pirkstiem"
            },
            mobilePanelStyles = {
                alignItems: "center",
                boxSizing: "border-box",
                color: "white",
                display: "flex",
                justifyContent: "center",
                fontSize: "22px",
                fontFamily: "Arial,sans-serif",
                opacity: "0.0",
                padding: "25px",
                textAlign: "center",
                transition: "opacity .3s",
                touchAction: "auto"
            };

        function getIconImageOffset(marker) {
            return marker.url && marker.offset ? marker.offset.replace(/\s/g, "").split(",").map(Number) : marker.url ? [0, -48] : void 0
        }
        Array.prototype.forEach.call(Object.keys(mobilePanelStyles), (function(name) {
            eventsPaneEl.style[name] = mobilePanelStyles[name]
        })), map.behaviors.disable("scrollZoom"), window.isMobile && (map.behaviors.disable("drag"), ymaps.domEvent.manager.add(eventsPaneEl, "touchmove", (function(event) {
            1 === event.get("touches").length && (eventsPaneEl.style.transition = "opacity .3s", eventsPaneEl.style.background = "rgba(0, 0, 0, .45)", eventsPaneEl.textContent = mobilePanelText[window.browserLang] || mobilePanelText.EN, eventsPaneEl.style.opacity = "1")
        })), ymaps.domEvent.manager.add(eventsPaneEl, "touchend", (function() {
            eventsPaneEl.style.transition = "opacity .8s", eventsPaneEl.style.opacity = "0"
        })));
        var placemarks = arMarkers.map((function(marker) {
                var myLatlng = [parseFloat(marker.lat), parseFloat(marker.lng)],
                    textarea = document.createElement("textarea");
                textarea.innerHTML = marker.descr;
                var baloonTitle, baloonDescr, baloonContent = [marker.title ? "<b>" + marker.title + "</b>" : "", textarea.textContent].filter(Boolean).join("<br>"),
                    placemark;
                return new ymaps.Placemark(myLatlng, {
                    hintContent: marker.title,
                    balloonContent: baloonContent
                }, {
                    iconColor: marker.color || void 0,
                    iconLayout: marker.url ? "default#imageWithContent" : void 0,
                    iconImageHref: marker.url || void 0,
                    iconImageSize: marker.url ? [48, 48] : void 0,
                    iconImageOffset: getIconImageOffset(marker),
                    visible: !marker.isHidden
                })
            })),
            collection = new ymaps.GeoObjectCollection({});
        placemarks.forEach((function(placemark) {
            collection.add(placemark)
        })), map.geoObjects.add(collection), placemarks.forEach((function(placemark, index) {
            arMarkers[index].isOpen && placemark.balloon.open()
        }));
        var mapPathAttr = ymap.getAttribute("data-map-path"),
            mapPathColorAttr = ymap.getAttribute("data-map-path-color"),
            mapPathWeightAttr = ymap.getAttribute("data-map-path-weight");
        if (arMarkers.length > 1 && null !== mapPathAttr) {
            var myPolyline = new ymaps.Polyline(arMarkers.map((function(marker) {
                return [parseFloat(marker.lat), parseFloat(marker.lng)]
            })), {}, {
                strokeColor: mapPathColorAttr || "#06f",
                strokeWidth: parseInt(mapPathWeightAttr, 10) || 1,
                strokeOpacity: .85
            });
            map.geoObjects.add(myPolyline)
        }
        var mapColorAttr = ymap.getAttribute("data-map-color"),
            mapModeAttr = ymap.getAttribute("data-map-mode");
        if (mapModeAttr) {
            var groundPaneElementChild = ymap.querySelector('ymaps[class$="ground-pane" i] > ymaps');
            if (groundPaneElementChild && (groundPaneElementChild.style.filter = "bw_light" === mapModeAttr ? "grayscale(1)" : "grayscale(1) invert(1)"), mapColorAttr) {
                var groundPaneElement = ymap.querySelector('ymaps[class$="ground-pane" i]'),
                    coloredDiv = document.createElement("div");
                if (coloredDiv.style.opacity = ".15", coloredDiv.style.backgroundColor = mapColorAttr, coloredDiv.style.position = "absolute", coloredDiv.style.top = "-2500px", coloredDiv.style.left = "-2500px", coloredDiv.style.width = "5000px", coloredDiv.style.height = "5000px", coloredDiv.style.zIndex = "9999", "bw_light" === mapModeAttr) {
                    var cloneLight = coloredDiv.cloneNode();
                    cloneLight.style.mixBlendMode = "color", cloneLight.style.zIndex = "9998", cloneLight.style.opacity = ".5", groundPaneElement && groundPaneElement.appendChild(cloneLight)
                }
                if ("bw_dark" === mapModeAttr) {
                    var cloneDark = coloredDiv.cloneNode();
                    cloneDark.style.mixBlendMode = "soft-light", cloneDark.style.zIndex = "9998", cloneDark.style.opacity = ".85", groundPaneElement && groundPaneElement.appendChild(cloneDark)
                }
                groundPaneElement && groundPaneElement.appendChild(coloredDiv)
            }
        }
        var zoom = parseInt(mapZoomAttr, 10);
        arMarkers.length > 1 ? (map.setBounds(collection.getBounds(), {
            checkZoomRange: !0
        }).then((function() {
            zoom > 0 && (0 == map.getZoom() || map.getZoom() > zoom) && map.setZoom(zoom)
        })), zoom > 0 && (0 == map.getZoom() || map.getZoom() > zoom) && map.setZoom(zoom)) : zoom > 0 && (0 == map.getZoom() || map.getZoom() > zoom) && map.setZoom(zoom), map.events.add("sizechange", (function() {
            map.container.fitToViewport(), arMarkers.length > 1 ? map.setBounds(collection.getBounds(), {
                checkZoomRange: !0
            }).then((function() {
                zoom > 0 && (0 == map.getZoom() || map.getZoom() > zoom) && map.setZoom(zoom)
            })) : zoom > 0 && (0 == map.getZoom() || map.getZoom() > zoom) && map.setZoom(zoom)
        }))
    }))
}

function t_map_hexToHsl(H) {
    var r = 0,
        g = 0,
        b = 0;
    4 === H.length ? (r = "0x" + H[1] + H[1], g = "0x" + H[2] + H[2], b = "0x" + H[3] + H[3]) : 7 === H.length && (r = "0x" + H[1] + H[2], g = "0x" + H[3] + H[4], b = "0x" + H[5] + H[6]), r /= 255, g /= 255, b /= 255;
    var cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
    return h = 0 === delta ? 0 : cmax === r ? (g - b) / delta % 6 : cmax === g ? (b - r) / delta + 2 : (r - g) / delta + 4, (h = Math.round(60 * h)) < 0 && (h += 360), l = (cmax + cmin) / 2, [h, s = +(100 * (s = 0 === delta ? 0 : delta / (1 - Math.abs(2 * l - 1)))).toFixed(1), l = +(100 * l).toFixed(1)]
}

function t_menu__highlightActiveLinks(e) {
    var t = window.location.href,
        n, r = window.location.pathname;
    "/" === t[t.length - 1] && (n = t.slice(0, -1)), "/" === r[r.length - 1] && (r = r.slice(0, -1)), "/" === r[0] && (r = r.slice(1)), "" === r && (r = "/");
    var i = document.querySelectorAll(e);
    Array.prototype.forEach.call(i, (function(e) {
        var i = e.getAttribute("href");
        if (i) {
            var o = e.href,
                a; - 1 !== r.indexOf("tpost") && (a = "/" + r.slice(0, r.indexOf("tpost"))), o !== t && o !== r && i !== t && i !== r && n !== t && n !== r && i !== a || e.classList.add("t-active")
        }
    }))
}

function t_menu__findAnchorLinks(e, t) {
    var n = document.getElementById("rec" + e);
    if (n && t_menu__isBlockVisible(n)) {
        var r = t + '[href*="#"]:not(.tooltipstered)',
            i = n ? n.querySelectorAll(r) : [];
        i.length && t_menu__updateActiveLinks(i, t)
    }
}

function t_menu__updateActiveLinks(e, t) {
    var n = t.slice(2);
    n = ".t" + (n = parseInt(n, 10)), e = Array.prototype.slice.call(e);
    var r = null,
        i = [],
        o = {};
    (e = e.reverse()).forEach((function(e) {
        var t = t_menu__getSectionByHref(e);
        t && t.id && (i.push(t), o[t.id] = e)
    })), t_menu__updateSectionsOffsets(i), i.sort((function(e, t) {
        var n = parseInt(e.getAttribute("data-offset-top"), 10) || 0,
            r;
        return (parseInt(t.getAttribute("data-offset-top"), 10) || 0) - n
    })), window.addEventListener("resize", t_throttle((function() {
        t_menu__updateSectionsOffsets(i)
    }), 200));
    var a = document.querySelectorAll(n);
    Array.prototype.forEach.call(a, (function(e) {
        e.addEventListener("displayChanged", (function() {
            t_menu__updateSectionsOffsets(i)
        }))
    })), t_menu__highlightNavLinks(e, i, o, r), e.forEach((function(t, n) {
        t.addEventListener("click", (function() {
            var i = t_menu__getSectionByHref(t);
            !t.classList.contains("tooltipstered") && i && i.id && (e.forEach((function(e, t) {
                t === n ? e.classList.add("t-active") : e.classList.remove("t-active")
            })), r = i.id)
        }))
    })), window.addEventListener("scroll", t_throttle((function() {
        r = t_menu__highlightNavLinks(e, i, o, r)
    }), 100)), "ResizeObserver" in window && setTimeout((function() {
        var e;
        new ResizeObserver((function() {
            t_menu__updateSectionsOffsets(i)
        })).observe(document.body)
    }), 500)
}

function t_menu__updateSectionsOffsets(e) {
    e.forEach((function(e) {
        var t = e.getBoundingClientRect().top + window.pageYOffset;
        e.getAttribute("data-offset-top") !== t.toString() && e.setAttribute("data-offset-top", t)
    }))
}

function t_menu__getSectionByHref(e) {
    if (e) {
        var t = e.getAttribute("href"),
            n = t ? t.replace(/\s+/g, "") : "";
        if (0 === n.indexOf("/") && (n = n.slice(1)), t && e.matches('[href*="#rec"]')) return n = n.replace(/.*#/, ""), document.getElementById(n);
        var r = t ? t.trim() : "",
            i = -1 !== r.indexOf("#") && r.indexOf("#");
        "number" == typeof i ? r = r.slice(i + 1) : "number" == typeof(i = -1 !== r.indexOf("/") && r.indexOf("/")) && (r = r.slice(i + 1));
        var o = '.r[data-record-type="215"] a[name="' + r + '"]',
            a = document.querySelector(o);
        return a ? a.closest(".r") : null
    }
}

function t_menu__highlightNavLinks(e, t, n, r) {
    if (document.documentElement.classList.contains("t-body_scroll-locked")) return null;
    var i = window.pageYOffset,
        o = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
        a = r,
        l = t.length ? t[t.length - 1] : null,
        s = l && parseInt(l.getAttribute("data-offset-top"), 10) || 0;
    if (t.length && null === r && s > i + 300) return e.forEach((function(e) {
        e.classList.remove("t-active")
    })), null;
    for (var u = 0; u < t.length; u++) {
        var c = parseInt(t[u].getAttribute("data-offset-top"), 10),
            d = t[u].id ? n[t[u].id] : null;
        if (i + 300 >= c || 0 === u && i >= o - window.innerHeight) {
            null === r && d && !d.classList.contains("t-active") ? (e.forEach((function(e) {
                e.classList.remove("t-active")
            })), d && d.classList.add("t-active"), a = null) : null !== r && t[u].id && r === t[u].id && (a = null);
            break
        }
    }
    return a
}

function t_menu__setBGcolor(e, t) {
    var n = document.querySelectorAll(t);
    Array.prototype.forEach.call(n, (function(e) {
        window.innerWidth > 980 ? "yes" === e.getAttribute("data-bgcolor-setbyscript") && (e.style.backgroundColor = e.getAttribute("data-bgcolor-rgba")) : (e.style.backgroundColor = e.getAttribute("data-bgcolor-hex"), e.setAttribute("data-bgcolor-setbyscript", "yes"), e.style.transform && (e.style.transform = ""), e.style.opacity && (e.style.opacity = ""))
    }))
}

function t_menu__showFixedMenu(e, t) {
    var n, r = [".t280", ".t282", ".t450", ".t451", ".t466", ".t453"].some((function(e) {
        return e === t
    }));
    if (!(window.innerWidth <= 980) || r) {
        var i = document.getElementById("rec" + e);
        if (!i) return !1;
        var o = i.querySelectorAll(t);
        Array.prototype.forEach.call(o, (function(e) {
            var t = e.getAttribute("data-appearoffset");
            if (t) {
                -1 !== t.indexOf("vh") && (t = Math.floor(window.innerHeight * (parseInt(t) / 100))), t = parseInt(t, 10);
                var n = e.clientHeight;
                "number" == typeof t && window.pageYOffset >= t ? e.style.transform === "translateY(-" + n + "px)" && t_menu__slideElement(e, n, "toBottom") : "translateY(0px)" === e.style.transform ? t_menu__slideElement(e, n, "toTop") : (e.style.transform = "translateY(-" + n + "px)", e.style.opacity = "0")
            }
        }))
    }
}

function t_menu__changeBgOpacity(e, t) {
    var n, r = ["t280", "t282", "t451", "t466"].some((function(e) {
        return -1 !== t.indexOf(e)
    }));
    if (!(window.innerWidth <= 980) || r) {
        var i = document.getElementById("rec" + e);
        if (!i) return !1;
        var o = i.querySelectorAll(t);
        Array.prototype.forEach.call(o, (function(e) {
            var t = e.getAttribute("data-bgcolor-rgba"),
                n = e.getAttribute("data-bgcolor-rgba-afterscroll"),
                r = e.getAttribute("data-bgopacity"),
                i = e.getAttribute("data-bgopacity-two"),
                o = parseInt(e.getAttribute("data-menushadow"), 10) || 0;
            o /= 100;
            var a = e.getAttribute("data-menushadow-css");
            e.style.backgroundColor = window.pageYOffset > 20 ? n : t, window.pageYOffset > 20 && "0" === i || window.pageYOffset <= 20 && ("0.0" === r || "0" === r) || !o && !a ? e.style.boxShadow = "none" : a ? e.style.boxShadow = a : o && (e.style.boxShadow = "0px 1px 3px rgba(0,0,0," + o + ")")
        }))
    }
}

function t_menu__createMobileMenu(e, t) {
    var n = document.getElementById("rec" + e);
    if (n) {
        var r = n.querySelector(t),
            i = r ? r.getAttribute("data-mobile-burgerhook") : "",
            o = n.querySelector(t + "__mobile"),
            a = o || n.querySelector(".tmenu-mobile"),
            l = o ? t.slice(1) + "_opened" : "tmenu-mobile_opened",
            s = "t-menuburger-opened";
        if (a)
            if (r && r.classList.contains(t.slice(1) + "__mobile_burgerhook") && i) {
                if (a.querySelector(".tmenu-mobile__burger")) var u = a.querySelector(".tmenu-mobile__burger");
                else if (a.querySelector(".t-menuburger")) var u = a.querySelector(".t-menuburger");
                if (u) {
                    var c = u.parentElement,
                        d = document.createElement("a");
                    d.href = i, c && (d.appendChild(u), c.appendChild(d))
                }
            } else {
                var u = a.querySelector(".t-menuburger");
                a.addEventListener("click", (function(n) {
                    if (!n.target.closest("a")) {
                        if (a.classList.contains(l)) t_menu__FadeOut(r, 300), a.classList.remove(l), u.classList.remove(s), u.setAttribute("aria-expanded", "false");
                        else if (t_menu__fadeIn(r, 300, (function() {
                                r.style.transform && (r.style.transform = ""), r.style.opacity && (r.style.opacity = "")
                            })), a.classList.add(l), u.classList.add(s), u.setAttribute("aria-expanded", "true"), r.classList.contains("tmenu-mobile__menucontent_fixed")) {
                            var i = getComputedStyle(a).height;
                            r.style.top = i
                        }
                        t_menu_checkOverflow(e, t)
                    }
                }))
            }
        screen.width < 980 && n.addEventListener("click", (function(n) {
            if (r && r.classList.contains("tmenu-mobile__menucontent_fixed")) {
                var i = n.target.closest(".t-menu__link-item, .t978__submenu-link, .t978__innermenu-link, .t966__menu-link, .t-menusub__link-item, .t-btn, .t794__link"),
                    o, c;
                if (i)["t978__menu-link_hook", "t978__tm-link", "t966__tm-link", "t794__tm-link", "t-menusub__target-link"].some((function(e) {
                    return i.classList.contains(e)
                })) ? r.addEventListener("menuOverflow", (function() {
                    t_menu_checkOverflow(e, t)
                })) : (t_menu__FadeOut(r, 300), a && a.classList.remove(l), a && u.classList.remove(s))
            }
        })), window.addEventListener("resize", t_throttle((function() {
            window.innerWidth > 980 && (r && (r.style.opacity = ""), r && (r.style.display = ""), r && (r.style.top = ""), a && a.classList.remove(l)), t_menu_checkOverflow(e, t)
        }), 200))
    }
}

function t_menu_checkOverflow(e, t) {
    var n = document.getElementById("rec" + e),
        r = n ? n.querySelector(t) : null;
    if (r) {
        var i = n.querySelector(t + "__mobile"),
            o = i || n.querySelector(".tmenu-mobile");
        if (o) {
            var a = o.offsetHeight,
                l = document.documentElement.clientHeight,
                s = r.style.position || window.getComputedStyle(r).position,
                u = r.offsetHeight;
            "fixed" === s && u > l - a && (r.style.overflow = "auto", r.style.maxHeight = "calc(100% - " + a + "px)")
        }
    }
}

function t_menu__FadeOut(e, t, n) {
    if (!e) return !1;
    var r = 1;
    t = parseInt(t, 10);
    var i, o = setInterval((function() {
        e.style.opacity = r, (r -= .1) <= .1 && (e.style.opacity = "0", e.style.display = "none", "function" == typeof n && n(), clearInterval(o))
    }), t > 0 ? t / 10 : 40)
}

function t_menu__fadeIn(e, t, n) {
    if (!e) return !1;
    if (("1" === getComputedStyle(e).opacity || "" === getComputedStyle(e).opacity) && "none" !== getComputedStyle(e).display) return !1;
    var r = 0,
        i = (t = parseInt(t, 10)) > 0 ? t / 10 : 40;
    e.style.opacity = r, e.style.display = "block";
    var o = setInterval((function() {
        e.style.opacity = r, (r += .1) >= 1 && (e.style.opacity = "1", "function" == typeof n && n(), clearInterval(o))
    }), i)
}

function t_menu__slideElement(e, t, n) {
    var r = "toTop" === n ? 0 : t,
        i = "toTop" === n ? 1 : 0,
        o = setInterval((function() {
            e.style.transform = "translateY(-" + r + "px)", e.style.opacity = i.toString(), i = "toTop" === n ? i - .1 : i + .1, r = "toTop" === n ? r + t / 20 : r - t / 20, "toTop" === n && r >= t && (e.style.transform = "translateY(-" + t + "px)", e.style.opacity = "0", clearInterval(o)), "toBottom" === n && r <= 0 && (e.style.transform = "translateY(0px)", e.style.opacity = "1", clearInterval(o))
        }), 10)
}

function t_menu__interactFromKeyboard(e) {
    var t = document.getElementById("rec" + e);
    if (t) {
        var n = t.querySelectorAll(".t-menu__list > li > a"),
            r = t.querySelectorAll(".t-menu__list > li li"),
            i = 9,
            o = 13,
            a = 27,
            l = 32,
            s = 0,
            u, c = function(e) {
                e === n.length ? e = 0 : e < 0 && (e = n.length - 1), n[e].focus(), s = e
            },
            d = function(e, t) {
                var n = e.querySelectorAll("a");
                t == n.length ? t = 0 : t < 0 && (t = n.length - 1), n[t].focus(), u = t
            },
            f = function(e) {
                e.addEventListener("keydown", (function(e) {
                    var t = this.parentNode.querySelector(".t-menusub__list");
                    switch (e.keyCode) {
                        case i:
                            if (!e.shiftKey && s <= n.length - 2) c(s + 1);
                            else {
                                if (!(e.shiftKey && s > 0)) return;
                                c(s - 1)
                            }
                            break;
                        case o:
                        case l:
                            if (!t) return;
                            this.click(), u = 0, d(t, 0)
                    }
                    e.preventDefault()
                }))
            },
            m = function(e) {
                e.addEventListener("focus", (function() {
                    u = 0
                }))
            },
            _ = function(e) {
                var t = e.parentNode.querySelector(".t-menusub__menu");
                e.addEventListener("click", (function(n) {
                    if ("false" == this.getAttribute("aria-expanded") || null == this.getAttribute("aria-expanded")) {
                        this.setAttribute("aria-expanded", "true");
                        var r = e.nextElementSibling,
                            i = r ? r.getAttribute("data-submenu-margin") : 0;
                        t_menusub__showSubmenu(e, t, i)
                    } else this.setAttribute("aria-expanded", "false");
                    return n.preventDefault(), !1
                }))
            },
            y = function(e) {
                var t = e.closest(".t-menusub__menu"),
                    r = !1;
                e.addEventListener("keydown", (function(e) {
                    var f = this.parentNode;
                    switch (e.keyCode) {
                        case i:
                            r = !0;
                            var m = f.querySelectorAll(".t-menusub__link-item").length;
                            if (e.shiftKey) 0 === u ? (c(s), t_menusub__hideSubmenu(t)) : d(f, u - 1);
                            else if (u === m - 1) {
                                if (t_menusub__hideSubmenu(t), s === n.length - 1) return;
                                c(s + 1)
                            } else d(f, u + 1);
                            break;
                        case o:
                        case l:
                            r = !1, t_menusub__hideSubmenu(t);
                            break;
                        case a:
                            r = !0, c(s), t_menusub__hideSubmenu(t)
                    }
                    r && (e.preventDefault(), e.stopPropagation())
                }))
            };
        Array.prototype.forEach.call(n, (function(e) {
            var t;
            m(e), f(e), !e.parentNode.querySelector(".t-menusub__menu") || window.isMobile || "ontouchend" in document || _(e)
        })), Array.prototype.forEach.call(r, (function(e) {
            y(e)
        }))
    }
}

function t_menu__isBlockVisible(e) {
    var t = window.innerWidth,
        n = e.getAttribute("data-screen-min"),
        r = e.getAttribute("data-screen-max");
    return !(n && t < parseInt(n, 10)) && !(r && t > parseInt(r, 10))
}

function t_popup__trapFocus(t) {
    var t = t.querySelectorAll('a, button, input:not([type="hidden"]):not(.js-form-spec-comments), select, textarea, embed, video, iframe, [tabindex="0"]'),
        e = t[0],
        o = t[t.length - 1];
    document.addEventListener("keydown", function(t) {
        !document.body.classList.contains("t-body_popupshowed") || "Tab" !== t.key && 9 !== t.keyCode || (t.shiftKey && document.activeElement.classList.contains("t-popup_show") && o.focus(), "Tab" !== t.key || t.shiftKey || document.activeElement !== o || (t.preventDefault(), e.focus()), "Tab" === t.key && t.shiftKey && document.activeElement === e && (t.preventDefault(), o.focus()))
    })
}

function t_popup__addAttributesForAccessibility(t) {
    t = document.querySelectorAll('a[href="' + t + '"]');
    Array.prototype.forEach.call(t, function(t) {
        t && (t.setAttribute("role", "button"), t.setAttribute("aria-haspopup", "dialog"))
    })
}

function t_popup__resizePopup(t) {
    var e, o, p, t = document.getElementById("rec" + t);
    !t || (e = t.querySelector(".t-popup__container")) && (p = getComputedStyle(e, null), o = parseInt(p.paddingTop) || 0, p = parseInt(p.paddingBottom) || 0, o = e.clientHeight - (o + p), p = 120, 364 !== (t = Number(t.getAttribute("data-record-type"))) && 365 !== t || (p = 30), 868 !== t && 331 !== t && 358 !== t && 1013 !== t && 746 !== t && 1093 !== t || (p = 0), o > window.innerHeight - p ? e.classList.add("t-popup__container-static") : e.classList.remove("t-popup__container-static"))
}

function t_popup__showPopup(e) {
    e && (e.style.display = "block"), setTimeout(function() {
        e.focus();
        var t = e ? e.querySelector(".t-popup__container") : null;
        t && t.classList.add("t-popup__container-animated"), e && e.classList.add("t-popup_show"), t_onFuncLoad("t_popup__trapFocus", function() {
            t_popup__trapFocus(e)
        })
    }, 50)
}

function t_popup__addClassOnTriggerButton(t, e) {
    var o = document.querySelectorAll(".t-popup__triggered-btn");
    Array.prototype.forEach.call(o, function(t) {
        t.classList.remove("t-popup__triggered-btn")
    }), t.addEventListener("keydown", function(t) {
        13 === t.keyCode && (t = !!(t = t.target).closest('a[href="' + e + '"]') && t) && !window.isMobile && t.classList.add("t-popup__triggered-btn")
    })
}

function t_popup__addFocusOnTriggerButton() {
    var t = document.querySelector(".t-popup__triggered-btn");
    t && (t.focus(), t.classList.remove("t-popup__triggered-btn"))
}
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
    for (var e = this; e && 1 === e.nodeType;) {
        if (Element.prototype.matches.call(e, t)) return e;
        e = e.parentElement || e.parentNode
    }
    return null
});

function t_onReady(func) {
    "loading" != document.readyState ? func() : document.addEventListener("DOMContentLoaded", func)
}

function t_addClass(el, className) {
    document.body.classList ? el.classList.add(className) : el.className += (el.className ? " " : "") + className
}

function t_removeClass(el, className) {
    document.body.classList ? el.classList.remove(className) : el.className = el.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
}

function t_removeEl(el) {
    el && el.parentNode && el.parentNode.removeChild(el)
}

function t_outerWidth(el) {
    var style = getComputedStyle(el),
        width = style.width,
        marginLeft = style.marginLeft,
        marginRight = style.marginRight;
    return "auto" === width && (width = 0), "auto" === marginLeft && (marginLeft = 0), "auto" === marginRight && (marginRight = 0), width = parseInt(width) + parseInt(marginLeft) + parseInt(marginRight)
}
var version, version;
(window.isSearchBot = !1, /Bot/i.test(navigator.userAgent) && (window.isSearchBot = !0), window.isMobile = !1, window.$isMobile = !1, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.isMobile = !0, window.$isMobile = !0), window.isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent), window.isiOS = !1, /iPhone|iPad|iPod/i.test(navigator.userAgent) && (window.isiOS = !0), window.isiOSChrome = !!navigator.userAgent.match("CriOS"), window.isFirefox = /firefox/i.test(navigator.userAgent), window.isOpera = !!window.opr && !!window.opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0, window.isiOSVersion = "", window.isiOS) && (null !== (version = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) && (window.isiOSVersion = [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)]));
(window.isSafari = !1, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (window.isSafari = !0), window.isIE = !!document.documentMode, window.isSafariVersion = "", window.isSafari) && (null !== (version = navigator.appVersion.match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/)) && (window.isSafariVersion = [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)]));

function t_throttle(fn, threshhold, scope) {
    var last, deferTimer;
    return threshhold || (threshhold = 250),
        function() {
            var context = scope || this,
                now = +new Date,
                args = arguments;
            last && now < last + threshhold ? (clearTimeout(deferTimer), deferTimer = setTimeout((function() {
                last = now, fn.apply(context, args)
            }), threshhold)) : (last = now, fn.apply(context, args))
        }
}

function t_onFuncLoad(funcName, okFunc, time) {
    if ("function" == typeof window[funcName] || "object" == typeof window[funcName]) okFunc();
    else {
        var startTime = Date.now(),
            error = new Error(funcName + " is undefined"),
            callbackError = function() {
                throw error
            };
        setTimeout((function checkFuncExist() {
            var currentTime = Date.now();
            "function" != typeof window[funcName] && "object" != typeof window[funcName] ? ("complete" === document.readyState && currentTime - startTime > 5e3 && "function" != typeof window[funcName] && callbackError(), setTimeout(checkFuncExist, time || 100)) : okFunc()
        }))
    }
}

function t_scrollBarWidthCompensator__setObject() {
    window.scrollBarWidthCompensator = {};
    var obj = window.scrollBarWidthCompensator;
    obj.isInited = !1, obj.scrollBarWidth = Math.abs(window.innerWidth - document.documentElement.clientWidth), obj.delay = 0, obj.cancelTimeout = null;
    var excludedElements = ["t450", "t282__container", "t282__container__bg_opened", "t282__menu__container", "t830m", "t830__panel", "t451m", "t204__menu"],
        allElements = document.querySelectorAll("*");
    allElements = Array.prototype.filter.call(allElements, (function(el) {
        return !el.closest(".t1093") && !excludedElements.some((function(className) {
            return el.classList.contains(className)
        }))
    })), obj.fixedElements = [], Array.prototype.forEach.call(allElements, (function(el) {
        if (!el.classList.contains("t975")) {
            var computedStyle = window.getComputedStyle(el),
                computedPosition = computedStyle.getPropertyValue("position"),
                computedWidth = computedStyle.getPropertyValue("width"),
                computedHeight = computedStyle.getPropertyValue("height"),
                isFullscreenWidth = "100%" === computedWidth || computedWidth === window.innerWidth + "px" || computedWidth === window.innerWidth - obj.scrollBarWidth + "px" || "100vw" === computedWidth,
                isFullscreenHeight = "100%" === computedHeight || computedHeight === window.innerHeight + "px" || computedHeight === window.innerHeight - obj.scrollBarWidth + "px" || "auto" === computedHeight || "100vh" === computedHeight;
            ("fixed" === computedPosition || "absolute" === computedPosition && isFullscreenWidth && !isFullscreenHeight) && obj.fixedElements.push({
                el: el,
                computedStyle: computedStyle
            })
        }
    }))
}

function t_scrollBarWidthCompensator__init() {
    if (!window.isMobile) {
        window.scrollBarWidthCompensator || t_scrollBarWidthCompensator__setObject();
        var obj = window.scrollBarWidthCompensator;
        if (obj.scrollBarWidth = Math.abs(window.innerWidth - document.documentElement.clientWidth), obj.cancelTimeout && (window.clearTimeout(obj.cancelTimeout), obj.cancelTimeout = null), !obj.isInited && obj.scrollBarWidth) {
            obj.isInited = !0;
            var bodyComputedPadding = window.getComputedStyle(document.body).getPropertyValue("padding-right");
            bodyComputedPadding = parseInt(bodyComputedPadding.replace("px", ""), 10);
            var bodyInlinePadding = document.body.style.paddingRight;
            bodyInlinePadding && document.body.setAttribute("data-tilda-initial-padding-right", bodyInlinePadding), document.body.style.paddingRight = obj.scrollBarWidth + bodyComputedPadding + "px", document.body.style.height = "100vh", document.body.style.minHeight = "100vh", document.body.style.overflow = "hidden";
            var transitionDurations = [];
            Array.prototype.forEach.call(obj.fixedElements, (function(entry) {
                var el = entry.el;
                if (document.body.contains(el) && !el.classList.contains("t975") && !el.classList.contains("t975")) {
                    var computedStyle = entry.computedStyle,
                        position = computedStyle.getPropertyValue("position");
                    if ("fixed" === position || "absolute" === position) {
                        var duration = computedStyle.getPropertyValue("transition-duration");
                        duration.indexOf("ms") + 1 ? (duration = parseInt(duration.replace("ms", ""), 10), transitionDurations.push(duration)) : duration.indexOf("s") + 1 && (duration = 1e3 * parseFloat(duration.replace("s", "")), transitionDurations.push(duration));
                        var computedRight = computedStyle.getPropertyValue("right");
                        computedRight = parseInt(computedRight.replace("px", ""), 10);
                        var computedWidth = computedStyle.getPropertyValue("width"),
                            computedHeight = computedStyle.getPropertyValue("height"),
                            elementInlineRight = el.style.right;
                        elementInlineRight && el.setAttribute("data-tilda-initial-right", elementInlineRight);
                        var inlineWidth = el.style.width;
                        inlineWidth && el.setAttribute("data-tilda-initial-width", inlineWidth);
                        var isFullscreenWidth = "100%" === computedWidth || computedWidth === window.innerWidth + "px" || computedWidth === window.innerWidth - obj.scrollBarWidth + "px" || "100vw" === computedWidth,
                            isFullscreenHeight = "100%" === computedHeight || computedHeight === window.innerHeight + "px" || computedHeight === window.innerHeight - obj.scrollBarWidth + "px" || "auto" === computedHeight || "100vh" === computedHeight;
                        !computedRight && 0 !== computedRight || "auto" === el.style.right || "absolute" === position || isFullscreenWidth ? isFullscreenWidth && !isFullscreenHeight && (el.style.width = "calc(100vw - " + obj.scrollBarWidth + "px)") : el.style.right = obj.scrollBarWidth + computedRight + "px"
                    }
                }
            })), transitionDurations.length && (obj.delay = Math.max.apply(null, transitionDurations))
        }
    }
}

function t_scrollBarWidthCompensator__cancel() {
    var obj = window.scrollBarWidthCompensator;
    obj && obj.isInited && (obj.isInited = !1, obj.delay = 0, document.body.hasAttribute("data-tilda-initial-padding-right") ? (document.body.style.paddingRight = document.body.getAttribute("data-tilda-initial-padding-right"), document.body.removeAttribute("data-tilda-initial-padding-right")) : document.body.style.removeProperty("padding-right"), document.body.style.removeProperty("height"), document.body.style.removeProperty("min-height"), document.body.style.removeProperty("overflow"), Array.prototype.forEach.call(obj.fixedElements, (function(entry) {
        var el = entry.el;
        el.hasAttribute("data-tilda-initial-right") ? (el.style.right = el.getAttribute("data-tilda-initial-right"), el.removeAttribute("data-tilda-initial-right")) : el.style.removeProperty("right"), el.hasAttribute("data-tilda-initial-width") ? (el.style.width = el.getAttribute("data-tilda-initial-width"), el.removeAttribute("data-tilda-initial-width")) : el.style.removeProperty("width")
    })))
}

function t_triggerEvent(el, eventName) {
    var event;
    document.createEvent ? (event = document.createEvent("HTMLEvents")).initEvent(eventName, !0, !1) : document.createEventObject && ((event = document.createEventObject()).eventType = eventName), event.eventName = eventName, el.dispatchEvent ? el.dispatchEvent(event) : el.fireEvent ? el.fireEvent("on" + event.eventType, event) : el[eventName] ? el[eventName]() : el["on" + eventName] && el["on" + eventName]()
}
window.browserLang = (window.navigator.userLanguage || window.navigator.language).toUpperCase().slice(0, 2), window.tildaBrowserLang = window.browserLang, t_onReady((function() {
        var allrecords = document.getElementById("allrecords");
        if (allrecords) var projectLang = allrecords.getAttribute("data-tilda-project-lang");
        projectLang && (window.browserLang = projectLang)
    })), t_onReady((function() {
        var userAgent = window.navigator.userAgent,
            isInstagram = -1 !== userAgent.indexOf("Instagram"),
            isFacebook = -1 !== userAgent.indexOf("FBAV"),
            isYandex = -1 !== userAgent.indexOf("YaSearchBrowser"),
            isSamsung = -1 !== userAgent.indexOf("SamsungBrowser"),
            isDuckDuckGo = -1 !== userAgent.indexOf("DuckDuckGo"),
            isAndroid;
        if (-1 !== userAgent.indexOf("Android") && (isFacebook || isInstagram || isYandex || isSamsung || isDuckDuckGo)) {
            var textElement = document.createElement("p");
            textElement.style.lineHeight = "100px", textElement.style.padding = "0", textElement.style.margin = "0", textElement.style.height = "auto", textElement.style.position = "absolute", textElement.style.opacity = "0.001", textElement.innerText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", document.body.appendChild(textElement);
            var factor = 100 / textElement.getBoundingClientRect().height;
            textElement.parentNode.removeChild(textElement), factor < .98 && document.body.insertAdjacentHTML("beforeend", '<style>.t396 [data-elem-type="text"] .tn-atom {zoom: ' + 100 * factor + "%;}</style>")
        }
        window.isiOS && !window.MSStream && (document.body.style.setProperty("-webkit-text-size-adjust", "100%"), document.body.style.setProperty("text-size-adjust", "100%"))
    })), t_onReady((function() {
        setTimeout((function() {
            var html = document.querySelector("html"),
                tildaLabel = document.querySelector(".t-tildalabel"),
                bodyScrollHeight = html.offsetHeight;
            if (document.body && (bodyScrollHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight, html.offsetHeight)), (document.getElementById("tildacopy") || tildaLabel) && tildaLabel.querySelectorAll("div")) bodyScrollHeight + 70 > window.innerHeight && tildaLabel && tildaLabel.setAttribute("style", "display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important; z-index: 1 !important");
            else {
                for (var childs = document.body.childNodes, arrChilds = [], i = 0; i < childs.length; i++) {
                    var element = childs[i];
                    8 === element.nodeType && arrChilds.push(element)
                }
                for (var i = 0; i < arrChilds.length; i++) - 1 !== arrChilds[i].nodeValue.indexOf("'t remove this l") && document.getElementById("allrecords").insertAdjacentHTML("afterend", '<div class="t-tildalabel t-tildalabel-free" style="display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important; z-index: 99900 !important"><div class="t-tildalabel-free__main"><a href="https://tilda.cc" target="_blank" style="padding-bottom:12px; display: block;"><img style="width:40px;" src="https://static.tildacdn.com/img/tildacopy.png"></a><div style="padding-bottom: 15px;">This site was made on <a href="https://tilda.cc" target="_blank" style="text-decoration: none; color:inherit;">Tilda — a website builder</a> that helps to&nbsp;create a&nbsp;website without any code</div><a href="https://tilda.cc/registration/" target="_blank" style="display: inline-block; padding: 10px 20px; font-size: 13px; border-radius: 50px; background-color: #fa8669; color: #fff; text-decoration: none;">Create a website</a></div><div class="t-tildalabel-free__links-wr"><a class="t-tildalabel-free__txt-link" href="https://help' + ("RU" === window.browserLang ? "-ru" : "") + '.tilda.cc/white-label" target="_blank">' + ("RU" === window.browserLang ? "Как удалить этот лейбл" : "How to remove this block") + "?</a></div></div>")
            }
        }), 500)
    })), t_onReady((function() {
        var allRecords = document.getElementById("allrecords");
        if (!window.isMobile && allRecords && "yes" !== allRecords.getAttribute("data-blocks-animationoff") && !1 === window.isSearchBot) {
            for (var recBlocks = document.querySelectorAll(".r"), i = 0; i < recBlocks.length; i++) {
                var rec, style = (rec = recBlocks[i]).getAttribute("style");
                style && -1 !== style.indexOf("background-color") && rec.setAttribute("data-animationappear", "off")
            }
            for (var recBlocksNot = Array.prototype.slice.call(recBlocks).filter((function(el) {
                    return !el.getAttribute("data-animationappear") && !el.getAttribute("data-screen-min") && !el.getAttribute("data-screen-max")
                })), i = 0; i < recBlocksNot.length; i++) {
                var rec, recTop = (rec = recBlocksNot[i]).getBoundingClientRect().top + window.pageYOffset,
                    position = window.pageYOffset + window.innerHeight + 300;
                t_addClass(rec, recTop > 1e3 && recTop > position ? "r_hidden" : "r_showed"), t_addClass(rec, "r_anim")
            }
            if (recBlocksNot.length) {
                function t_blocksFade() {
                    for (var i = recBlocksNot.length - 1; i >= 0; i--) {
                        var rec = recBlocksNot[i],
                            recTop, position = 0;
                        rec.getBoundingClientRect().top + window.pageYOffset < (position = rec.offsetHeight <= 100 ? window.pageYOffset + window.innerHeight : window.pageYOffset + window.innerHeight - 100) && (t_removeClass(rec, "r_hidden"), t_addClass(rec, "r_showed"), (recBlocksNot = Array.prototype.slice.call(recBlocksNot)).splice(i, 1))
                    }
                }
                var recBlocksT400 = document.querySelectorAll('[data-record-type="400"]');
                if (recBlocksT400.length > 0) var countCompleted = 0,
                    count = 0,
                    timer = setInterval((function() {
                        300 === (count += 1) && clearInterval(timer);
                        for (var i = 0; i < recBlocksT400.length; i++) {
                            var rec;
                            "yes" === recBlocksT400[i].getAttribute("data-hiding-completed") && (countCompleted += 1)
                        }
                        countCompleted === recBlocksT400.length && (t_blocksFade(), clearInterval(timer))
                    }), 100);
                window.addEventListener("scroll", t_throttle((function() {
                    t_blocksFade()
                }), 200)), setTimeout((function() {
                    t_blocksFade()
                }))
            }
        }
        var html = document.querySelector("html"),
            body = document.body;
        "none" === html.style.display && (html.style.display = "block");
        var tildaLabel = document.querySelector(".t-tildalabel"),
            bodyScrollHeight;
        (bodyScrollHeight = body ? Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight, html.offsetHeight) : html.offsetHeight) + 70 < window.innerHeight ? tildaLabel && (tildaLabel.style.display = "none") : tildaLabel && tildaLabel.setAttribute("style", "display: block !important")
    })),
    function() {
        function t_setWindowVars() {
            window.winWidth = window.innerWidth, window.winHeight = window.innerHeight
        }

        function t_blocksdisplay() {
            var windowWidth = window.isMobile ? document.documentElement.clientWidth : window.innerWidth,
                recBlocks = document.querySelectorAll(".r[data-screen-max], .r[data-screen-min]"),
                max, min, display; - 1 !== navigator.userAgent.indexOf("Instagram") && (windowWidth = screen.width);
            for (var i = 0; i < recBlocks.length; i++) {
                var rec = recBlocks[i];
                if ("yes" === rec.getAttribute("data-connect-with-tab")) return;
                display = getComputedStyle(rec).display, (max = rec.getAttribute("data-screen-max")) || (max = 1e4), (min = rec.getAttribute("data-screen-min")) || (min = 0), max = parseInt(max), (min = parseInt(min)) <= max && (windowWidth <= max && windowWidth > min ? "block" !== display && (rec.style.display = "block") : "none" !== display && (rec.style.display = "none"))
            }
        }
        t_onReady((function() {
            t_setWindowVars(), t_blocksdisplay(), window.addEventListener("resize", t_throttle((function() {
                t_setWindowVars()
            }), 200)), window.addEventListener("resize", t_throttle((function() {
                t_blocksdisplay()
            }), 200))
        }))
    }(),
    function() {
        var isInstagram = -1 !== navigator.userAgent.indexOf("Instagram");

        function t_correctHeight() {
            for (var coverCarries = document.querySelectorAll(".t-cover__carrier"), factor = 0, i = 0; i < coverCarries.length; i++) {
                var element, elementStyle;
                if ((elementStyle = (element = coverCarries[i]).style).height.indexOf("vh") > -1) {
                    factor = parseInt(elementStyle.height, 10) / 100;
                    var div = document.createElement("div");
                    div.id = "tempDiv", div.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100vh;visibility:hidden;", document.body.appendChild(div);
                    var tempDiv = document.getElementById("tempDiv"),
                        tempDivHeight = parseInt(getComputedStyle(tempDiv).height.replace("px", ""));
                    t_removeEl(tempDiv);
                    var newHeight = Math.round(tempDivHeight * factor) + "px",
                        cover = element.closest(".t-cover");
                    if (cover) {
                        var coverFilter = cover.querySelector(".t-cover__filter"),
                            textBox = cover.querySelector(".t-cover__wrapper");
                        cover.style.height = newHeight, coverFilter && (coverFilter.style.height = newHeight), textBox && (textBox.style.height = newHeight)
                    }
                    elementStyle.height = newHeight
                }
            }
            var elCarries = document.querySelectorAll("[data-height-correct-vh]"),
                windowHeight = window.innerHeight;
            factor = 0;
            for (var i = 0; i < elCarries.length; i++) {
                var element, elementStyle;
                (elementStyle = (element = elCarries[i]).style).height.indexOf("vh") > -1 && (factor = parseInt(elementStyle.height) / 100, newHeight = windowHeight + "px", elementStyle.height = newHeight)
            }
        }

        function setBreakWords() {
            var windowWidth = isInstagram ? screen.width : window.innerWidth;
            window.isMobile && !isInstagram && (windowWidth = document.documentElement.clientWidth);
            for (var recBlocks = document.querySelectorAll('.r:not([data-record-type="396"]):not([data-record-type="1003"])'), visibleRecBlocks = [], k = 0; k < recBlocks.length; k++) {
                var record = recBlocks[k],
                    recStyles = getComputedStyle(record);
                "none" !== recStyles.display && "hidden" !== recStyles.visibility && "0" !== recStyles.opacity && visibleRecBlocks.push(record)
            }
            for (var i = 0; i < visibleRecBlocks.length; i++)
                for (var rec = visibleRecBlocks[i], blocks = rec.querySelectorAll('div:not([data-auto-correct-mobile-width="false"]):not(.tn-elem):not(.tn-atom):not(.tn-atom__sbs-anim-wrapper):not(.tn-atom__prx-wrapper):not(.tn-atom__videoiframe):not(.tn-atom__sticky-wrapper):not(.t-store__relevants__container):not(.t-slds__items-wrapper):not(.js-product-controls-wrapper):not(.js-product-edition-option):not(.t-product__option-variants)'), j = 0; j < blocks.length; j++) {
                    var block = blocks[j];
                    rec.style.wordBreak = "";
                    var blockWidth = t_outerWidth(block);
                    if (blockWidth > windowWidth) {
                        if ("yes" === block.getAttribute("[data-customstyle]") && "false" === block.parentNode.getAttribute("[data-auto-correct-mobile-width]")) return;
                        console.log("Block not optimized for mobile width. Block width:" + blockWidth + " Block id:" + rec.getAttribute("id")), console.log(block), rec.style.overflow = "auto", rec.style.wordBreak = blockWidth - 3 > windowWidth ? "break-word" : ""
                    }
                }
        }

        function updateFontSize(breakpoint) {
            for (var elements = document.querySelectorAll('.t-text:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-name:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-title:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-descr:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-heading:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-text-impact:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-subtitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-uptitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"])'), i = 0; i < elements.length; i++) {
                var element = elements[i],
                    elementStyle = element.getAttribute("style");
                if (elementStyle) {
                    var isREMValue = "rem" === element.getAttribute("data-auto-correct-font-size"),
                        newStyle;
                    if (document.documentElement.clientWidth > breakpoint) newStyle = (newStyle = elementStyle.replace("lineheight", "line-height")).replace("fontsize", "font-size"), element.setAttribute("style", newStyle);
                    else {
                        if (-1 === elementStyle.indexOf("font-size")) continue;
                        if (parseInt(getComputedStyle(element).fontSize.replace("px", "")) < 26) continue;
                        newStyle = elementStyle.replace("line-height", "lineheight"), newStyle = isREMValue ? newStyle.replace(/font-size.*px;/gi, "font-size: 1.6rem;") : newStyle.replace("font-size", "fontsize"), element.setAttribute("style", newStyle)
                    }
                }
            }
        }(window.isMobile || window.parent.isPagePreview) && (t_onReady((function() {
            setTimeout(t_correctHeight, 400)
        })), window.addEventListener("load", (function() {
            setTimeout(t_correctHeight, 400)
        })), window.innerWidth < 480 || window.isMobile && document.documentElement.clientWidth < 480 || isInstagram && screen.width < 480 ? (t_onReady((function() {
            for (var customStyleElements = document.querySelectorAll('[data-customstyle="yes"]'), fieldElements = document.querySelectorAll("[field] span, [field] strong, [field] em, [field] a"), i = 0; i < customStyleElements.length; i++) {
                var element = customStyleElements[i];
                parseInt(getComputedStyle(element).fontSize.replace("px", "")) > 26 && (element.style.fontSize = null, element.style.lineHeight = null)
            }
            for (var i = 0; i < fieldElements.length; i++) {
                var element = fieldElements[i];
                parseInt(getComputedStyle(element).fontSize.replace("px", "")) > 26 && (element.style.fontSize = null)
            }
            updateFontSize(480), window.addEventListener("orientationchange", (function() {
                setTimeout((function() {
                    updateFontSize(480)
                }), 500)
            }))
        })), window.addEventListener("load", setBreakWords), window.addEventListener("orientationchange", (function() {
            setTimeout((function() {
                setBreakWords()
            }), 500)
        }))) : (window.innerWidth < 900 || window.isMobile && document.documentElement.clientWidth < 900 || isInstagram && screen.width < 900) && t_onReady((function() {
            for (var customStyleElements = document.querySelectorAll('[data-customstyle="yes"]'), fieldElements = document.querySelectorAll("[field] span, [field] strong, [field] em, [field] a"), i = 0; i < customStyleElements.length; i++) {
                var element = customStyleElements[i];
                parseInt(getComputedStyle(element).fontSize.replace("px", "")) > 30 && (element.style.fontSize = null, element.style.lineHeight = null)
            }
            for (var i = 0; i < fieldElements.length; i++) {
                var element = fieldElements[i];
                parseInt(getComputedStyle(element).fontSize.replace("px", "")) > 30 && (element.style.fontSize = null)
            }
            for (var elements = document.querySelectorAll('.t-text:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-name:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-title:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-descr:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-heading:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-text-impact:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-subtitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-uptitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"])'), i = 0; i < elements.length; i++) {
                var element, elementStyle = (element = elements[i]).getAttribute("style");
                if (elementStyle && elementStyle.indexOf("font-size") > -1 && parseInt(getComputedStyle(element).fontSize.replace("px", "")) > 30)
                    if ("rem" === element.getAttribute("data-auto-correct-font-size")) {
                        var newStyle = elementStyle.replace(/font-size.*px;/gi, "font-size: 1.6rem;").replace("line-height", "lineheight");
                        element.setAttribute("style", newStyle)
                    } else {
                        var newStyle = elementStyle.replace("font-size", "fontsize").replace("line-height", "lineheight");
                        element.setAttribute("style", newStyle)
                    }
            }
        })))
    }(), t_onReady((function() {
        setTimeout((function() {
            for (var links = document.querySelectorAll('a[href^="http"][target="_blank"]'), i = 0; i < links.length; i++) {
                var link = links[i],
                    attrRel = link.getAttribute("rel") || "";
                "" === attrRel ? link.setAttribute("rel", "noopener") : -1 === attrRel.indexOf("noopener") && link.setAttribute("rel", attrRel + " noopener")
            }
        }), 2500)
    })),
    function(window, Math) {
        window.onerror = function(message, filename, lineno, colno, error) {
            "object" != typeof window.t_jserrors && (window.t_jserrors = []), window.t_jserrors.push({
                message: message,
                filename: filename,
                lineno: lineno,
                colno: colno,
                error: error
            })
        }
    }(window, Math), t_onReady((function() {
        document.body.addEventListener("popupShowed", t_scrollBarWidthCompensator__init), document.body.addEventListener("popupHidden", (function() {
            var obj = window.scrollBarWidthCompensator;
            obj && (obj.cancelTimeout && (window.clearTimeout(obj.cancelTimeout), obj.cancelTimeout = null), obj.cancelTimeout = window.setTimeout((function() {
                obj.cancelTimeout = null, t_scrollBarWidthCompensator__cancel()
            }), Math.min(300, obj.delay)))
        }))
    }));

function t_sldsInit(rec, sliderOptions) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper"),
            isInit;
        if (sliderWrapper)
            if (!sliderWrapper.getAttribute("data-slider-initialized")) {
                var isFeedsSlider = sliderWrapper.classList.contains("js-feed-container"),
                    sliderItems = sliderRec.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)");
                if (sliderItems) {
                    var totalSlides = sliderItems.length,
                        firstSlide = sliderItems[0],
                        lastSlide = sliderItems[sliderItems.length - 1],
                        windowWidth = window.innerWidth,
                        itemsInRow = parseInt(sliderWrapper.getAttribute("data-slider-items-in-row"), 10) || 0,
                        sliderWithCycle = sliderWrapper.getAttribute("data-slider-with-cycle"),
                        sliderTransition = parseFloat(sliderWrapper.getAttribute("data-slider-transition")),
                        stopSlider = sliderWrapper.getAttribute("data-slider-stop"),
                        position = 1;
                    if (Array.prototype.forEach.call(sliderItems, (function(item, index) {
                            item.setAttribute("data-slide-index", index + 1), window.t_slds__isiOS && (item.style.transform = "translateZ(0)")
                        })), sliderTransition || 0 === sliderTransition || (sliderTransition = 300), "true" == stopSlider) return !1;
                    isNaN(sliderTransition) && sliderWrapper.setAttribute("data-slider-transition", "300"), sliderWrapper.classList.contains("t-slds_animated-fast") || sliderWrapper.classList.contains("t-slds_animated-slow") || sliderWrapper.classList.contains("t-slds_animated-none") || sliderWrapper.classList.add("t-slds_animated-fast");
                    var defaultCountItemsInRow = itemsInRow;
                    t_slds_setItemsInRow(rec), t_slds_changeImageUrl(rec);
                    var userAgent = window.navigator.userAgent,
                        Idx = userAgent.indexOf("MSIE"),
                        ieVersion = "",
                        oldIE = !1;
                    Idx > 0 && (8 != (ieVersion = parseInt(userAgent.substring(Idx + 5, userAgent.indexOf(".", Idx)))) && 9 != ieVersion || (oldIE = !0)), !0 === oldIE && (sliderWrapper.classList.remove("t-slds_animated-fast"), sliderWrapper.classList.remove("t-slds_animated-slow"), sliderWrapper.classList.add("t-slds_animated-none"), sliderWrapper.classList.add("t-slds_ie"), sliderWrapper.setAttribute("data-slider-correct-height", "true"), sliderWrapper.setAttribute("data-slider-items-in-row", 1)), sliderWrapper.setAttribute("data-slider-initialized", "true"), sliderWrapper.getAttribute("data-slider-totalslides") || sliderWrapper.setAttribute("data-slider-totalslides", totalSlides);
                    var sliderPosition = sliderWrapper.getAttribute("data-slider-pos");
                    sliderPosition ? position = parseInt(sliderPosition, 10) : sliderWrapper.setAttribute("data-slider-pos", 1), sliderWrapper.setAttribute("data-slider-cycle", ""), sliderWrapper.setAttribute("data-slider-animated", ""), isFeedsSlider || t_slds__createDummies(firstSlide, lastSlide, sliderWrapper), itemsInRow = parseInt(sliderWrapper.getAttribute("data-slider-items-in-row"), 10) || 0;
                    var arrowRight = sliderRec.querySelectorAll(".t-slds__arrow_wrapper-right");
                    arrowRight.length > 0 && Array.prototype.forEach.call(arrowRight, (function(arrow) {
                        arrow.style.display = "false" === sliderWithCycle && totalSlides - itemsInRow <= 0 ? "none" : ""
                    })), isFeedsSlider || t_slds_SliderWidth(rec), "true" == sliderWrapper.getAttribute("data-slider-correct-height") && t_slds_SliderHeight(rec), t_slds_SliderArrowsHeight(rec), t_slds_ActiveSlide(rec, position, totalSlides), t_slds_ActiveCaption(rec, position, totalSlides), isFeedsSlider ? windowWidth > 960 && ("true" === sliderWrapper.getAttribute("data-feeds-posts-loaded") ? (t_slds__initFeedsSlider(rec, sliderRec, sliderOptions), t_slds_initSliderControls(rec, sliderOptions)) : document.addEventListener("feedsLoadPosts", (function() {
                        t_slds__initFeedsSlider(rec, sliderRec, sliderOptions), t_slds_initSliderControls(rec, sliderOptions)
                    }))) : (oldIE || t_slds_onHammerLoad("Hammer", (function() {
                        t_slds_initSliderSwipe(rec, totalSlides, windowWidth)
                    })), t_slds_initSliderControls(rec, sliderOptions), t_slds_updateSlider(rec)), sliderWrapper.getAttribute("data-slider-timeout") > 0 ? t_slds_initAutoPlay(rec, position, totalSlides, sliderOptions) : sliderWrapper.addEventListener("slideAutoplayTimerReady", (function() {
                        sliderWrapper.getAttribute("data-slider-timeout") > 0 && t_slds_initAutoPlay(rec, position, totalSlides, sliderOptions)
                    })), sliderRec.querySelectorAll(".t-slds__item-loaded").length < totalSlides + 2 && t_slds_UpdateImages(rec, position), "yes" == sliderWrapper.getAttribute("data-slider-arrows-nearpic") && t_slds_positionArrows(rec);
                    var sldsBlock = sliderRec.querySelectorAll(".t-slds");
                    sldsBlock.length > 0 && Array.prototype.forEach.call(sldsBlock, (function(slide) {
                        slide.style.visibility = ""
                    })), t_slds__setTabindexForFocusableElements(rec), sliderRec.removeEventListener("displayChanged", t_slds_updateOnDisplayChange), sliderRec.addEventListener("displayChanged", t_slds_updateOnDisplayChange(rec, defaultCountItemsInRow)), isFeedsSlider && (sliderRec.removeEventListener("displayChanged", t_slds_updateFeedsSliderOnResize), sliderRec.addEventListener("displayChanged", (function() {
                        t_slds_updateFeedsSliderOnResize(rec, sliderRec, sliderOptions)
                    }))), window.addEventListener("resize", t_throttle((function() {
                        setTimeout((function() {
                            t_slds_setItemsInRow(rec, defaultCountItemsInRow), t_slds_updateSlider(rec), t_slds_positionArrows(rec), isFeedsSlider && t_slds_updateFeedsSliderOnResize(rec, sliderRec, sliderOptions)
                        }), 100)
                    }))), window.t_slds__isiOS && "complete" === document.readyState ? t_slds__hideMobileSlides(sliderRec.querySelector(".t-slds__item_active")) : window.t_slds__isiOS && window.addEventListener("load", (function() {
                        t_slds__hideMobileSlides(sliderRec.querySelector(".t-slds__item_active"))
                    })), window.addEventListener("load", (function() {
                        "true" == sliderWrapper.getAttribute("data-slider-correct-height") && t_slds_UpdateSliderHeight(rec), t_slds_UpdateSliderArrowsHeight(rec)
                    })), setTimeout((function() {
                        t_slds_UpdateSliderArrowsHeight(rec)
                    }), 500);
                    var allRecords = document.querySelector("#allrecords");
                    allRecords && allRecords.addEventListener("allRecPaddingInit", (function() {
                        t_slds_updateSlider(rec)
                    })), document.removeEventListener("click", t_slds__removeAutoplayByVideo), document.addEventListener("click", t_slds__removeAutoplayByVideo)
                }
            }
    }
}

function t_slds__removeAutoplayByVideo(e) {
    var videoSlide = e.target.closest("[data-slider-video-type]");
    if (videoSlide) {
        var sliderWrapper = videoSlide.closest(".t-slds__items-wrapper"),
            galleryIntervalIdAttr;
        if (sliderWrapper) sliderWrapper.getAttribute("data-slider-interval-id") && (sliderWrapper.setAttribute("data-slider-stopped", "yes"), sliderWrapper.setAttribute("data-slider-stopped-by-video", "y"))
    }
}

function t_slds__initFeedsSlider(rec, sliderRec) {
    var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper");
    if (sliderWrapper) {
        var sliderItems = sliderRec.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)"),
            totalSlides = parseInt(sliderWrapper.getAttribute("data-slider-totalslides"), 10) || 0,
            firstSlide = sliderItems[0],
            lastSlide = sliderItems[sliderItems.length - 1],
            sliderWithCycle = sliderWrapper.getAttribute("data-slider-with-cycle");
        t_slds__createDummies(firstSlide, lastSlide, sliderWrapper), t_slds_updateSlider(rec);
        var itemsInRow = parseInt(sliderWrapper.getAttribute("data-slider-items-in-row"), 10) || 0,
            arrowRight = sliderRec.querySelectorAll(".t-slds__arrow_wrapper-right");
        arrowRight.length > 0 && Array.prototype.forEach.call(arrowRight, (function(arrow) {
            arrow.style.display = "false" === sliderWithCycle && totalSlides - itemsInRow <= 0 ? "none" : ""
        })), "true" == sliderWrapper.getAttribute("data-slider-correct-height") && t_slds_SliderHeight(rec)
    }
}

function t_slds__createDummies(firstSlide, lastSlide, sliderWrapper) {
    var sliderItems, totalSlides = sliderWrapper.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)").length,
        itemsInRow = parseInt(sliderWrapper.getAttribute("data-slider-items-in-row"), 10) || 0,
        sliderWithCycle = sliderWrapper.getAttribute("data-slider-with-cycle"),
        isFeedsSlider = sliderWrapper.classList.contains("js-feed-container"),
        restoreAttrClassFirst = !1,
        restoreAttrClassLast = !1;
    if (firstSlide) {
        var firstSlideImgwrapper = firstSlide.querySelector('[data-zoomable="yes"]');
        firstSlideImgwrapper && (restoreAttrClassFirst = !0, firstSlideImgwrapper.classList.contains("t-zoomable") && firstSlideImgwrapper.classList.remove("t-zoomable"), firstSlideImgwrapper.removeAttribute("data-zoomable"))
    }
    if (lastSlide) {
        var lastSlideImgwrapper = lastSlide.querySelector('[data-zoomable="yes"]');
        lastSlideImgwrapper && (restoreAttrClassLast = !0, lastSlideImgwrapper.classList.contains("t-zoomable") && lastSlideImgwrapper.classList.remove("t-zoomable"), lastSlideImgwrapper.removeAttribute("data-zoomable"))
    }
    if (lastSlide && 0 == sliderWrapper.querySelectorAll('.t-slds__item[data-slide-index="0"]').length) {
        var lastSlideDummy = lastSlide.cloneNode(!0);
        lastSlideDummy.setAttribute("data-slide-index", "0"), lastSlideDummy.setAttribute("aria-hidden", "true");
        var sldsWrapper = firstSlide.parentNode;
        sldsWrapper.insertBefore(lastSlideDummy, firstSlide);
        var fieldItem = sldsWrapper.querySelectorAll('[data-slide-index="0"] [field]');
        fieldItem.length > 0 && Array.prototype.forEach.call(fieldItem, (function(item) {
            item.removeAttribute("field")
        }))
    }
    if (!isFeedsSlider && firstSlide && !sliderWrapper.querySelector('.t-slds__item[data-slide-index="' + (totalSlides + 1) + '"]')) {
        var firstSlideDummy = firstSlide.cloneNode(!0);
        if (firstSlideDummy.setAttribute("data-slide-index", totalSlides + 1), firstSlideDummy.classList.remove("t-slds__item_active"), firstSlideDummy.setAttribute("aria-hidden", "true"), lastSlide.insertAdjacentElement("afterend", firstSlideDummy), lastSlide.classList.add("t-slds__item-loaded"), itemsInRow > 0 && "true" === sliderWithCycle)
            for (var beginningSlide = firstSlide, endSlide = lastSlide, i = 0; i < itemsInRow - 1; i++) {
                var newSlide = beginningSlide.nextElementSibling.cloneNode(!0);
                newSlide.setAttribute("data-slide-index", totalSlides + i + 1), endSlide.nextElementSibling.insertAdjacentElement("afterend", newSlide), endSlide = endSlide.nextElementSibling, beginningSlide = beginningSlide.nextElementSibling
            }
    }
    restoreAttrClassFirst && (firstSlideImgwrapper.classList.add("t-zoomable"), firstSlideImgwrapper.setAttribute("data-zoomable", "yes")), restoreAttrClassLast && (lastSlideImgwrapper.classList.add("t-zoomable"), lastSlideImgwrapper.setAttribute("data-zoomable", "yes"))
}

function t_slds__hideMobileSlides(activeSlide) {
    if (activeSlide) {
        var slideWrapper = activeSlide.closest(".t-slds__items-wrapper"),
            slideWrapperStyles = slideWrapper && getComputedStyle(slideWrapper);
        if (!slideWrapperStyles || "scroll" !== slideWrapperStyles.overflowX || "flex" !== slideWrapperStyles.display) {
            var slides = Array.prototype.slice.call(slideWrapper.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)")),
                maxSlidesViewed = document.documentElement.clientWidth > 960 ? 5 : 3;
            if (!(slides.length <= 2 * maxSlidesViewed)) {
                for (var activeSlideIndex = activeSlide.getAttribute("data-slide-index"), activeIndexList = [activeSlideIndex = parseInt(activeSlideIndex, 10)], i = 1; i < maxSlidesViewed; i++) activeSlideIndex + i <= slides.length ? activeIndexList.push(activeSlideIndex + i) : activeIndexList.push(i), activeSlideIndex - i > 0 ? activeIndexList.push(activeSlideIndex - i) : activeIndexList.push(slides.length + 1 - i);
                var innactiveClass = "t-slds__item-innactive";
                slides.forEach((function(slide) {
                    var isActiveIndexSlide;
                    activeIndexList.some((function(index) {
                        return parseInt(slide.getAttribute("data-slide-index"), 10) === index
                    })) ? slide.classList.remove(innactiveClass) : slide.classList.add(innactiveClass)
                }))
            }
        }
    }
}

function t_slds_updateOnDisplayChange(rec, defaultCountItemsInRow) {
    t_throttle((function() {
        t_slds_setItemsInRow(rec, defaultCountItemsInRow), t_slds_updateSlider(rec), t_slds_positionArrows(rec)
    }))
}

function t_slds_updateFeedsSliderOnResize(rec, sliderRec, sliderOptions) {
    var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper"),
        isFeedsSlider;
    sliderWrapper && (sliderWrapper.classList.contains("js-feed-container") && (window.innerWidth > 960 ? "true" === sliderWrapper.getAttribute("data-feeds-posts-loaded") ? (t_slds__initFeedsSlider(rec, sliderRec, sliderOptions), t_slds_initSliderControls(rec, sliderOptions)) : document.addEventListener("feedsLoadPosts", (function() {
        t_slds__initFeedsSlider(rec, sliderRec, sliderOptions), t_slds_initSliderControls(rec, sliderOptions)
    })) : sliderWrapper.style.transform = "translateX(0)"))
}

function t_slds_setItemsInRow(rec, defaultCountItemsInRow) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper"),
            itemsInRow, updatedItemsInRow;
        if (sliderWrapper)(sliderWrapper.getAttribute("data-slider-items-in-row") || 0) && (window.innerWidth <= 960 && (updatedItemsInRow = 2), window.innerWidth <= 640 && (updatedItemsInRow = 1), window.innerWidth > 960 && (updatedItemsInRow = defaultCountItemsInRow)), updatedItemsInRow && sliderWrapper.setAttribute("data-slider-items-in-row", updatedItemsInRow)
    }
}

function t_slds_initSliderControls(rec, sliderOptions) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper");
        if (sliderWrapper) {
            var itemsInRow = sliderWrapper.getAttribute("data-slider-items-in-row") || 0,
                sliderItem = sliderRec.querySelector(".t-slds__container .t-slds__item"),
                sliderContainer = sliderRec.querySelector(".t-slds__container"),
                sliderWidth = itemsInRow > 0 && sliderItem && sliderContainer ? sliderItem.offsetWidth : sliderContainer.offsetWidth,
                stopSlider;
            if ("true" == sliderWrapper.getAttribute("data-slider-stop")) return !1;
            sliderWrapper.style.transform = "translateX(-" + sliderWidth + "px)";
            var arrowWrapper = sliderRec.querySelectorAll(".t-slds__arrow_wrapper");
            arrowWrapper.length > 0 && Array.prototype.forEach.call(arrowWrapper, (function(wrapper) {
                wrapper.addEventListener("click", (function() {
                    var currentTranslate = t_slds_getCurrentTranslate(sliderRec),
                        isAnimated = sliderWrapper.getAttribute("data-slider-animated"),
                        position = parseFloat(sliderWrapper.getAttribute("data-slider-pos")),
                        totalSlides = parseFloat(sliderWrapper.getAttribute("data-slider-totalslides")),
                        isCycled = sliderWrapper.getAttribute("data-slider-with-cycle"),
                        cycle = "",
                        direction;
                    "" == isAnimated && (sliderWrapper.setAttribute("data-slider-animated", "yes"), "left" === this.getAttribute("data-slide-direction") ? "false" == isCycled && 1 == position ? position = 1 : position-- : "false" == isCycled && position == totalSlides ? position = totalSlides : position++, sliderWrapper.setAttribute("data-slider-pos", position), position != totalSlides + 1 && 0 != position || (cycle = "yes"), sliderWrapper.setAttribute("data-slider-cycle", cycle), t_slideMoveWithoutAnimation(rec, !1, sliderOptions, currentTranslate));
                    t_slds_updateSlider(rec)
                }))
            }));
            var bullets = sliderRec.querySelectorAll(".t-slds__bullet");
            bullets.length > 0 && Array.prototype.forEach.call(bullets, (function(bullet) {
                bullet.addEventListener("click", (function() {
                    var newPosition = parseInt(bullet.getAttribute("data-slide-bullet-for"), 10),
                        currentPosition;
                    if (parseInt(sliderWrapper.getAttribute("data-slider-pos"), 10) !== newPosition) {
                        var currentTranslate = t_slds_getCurrentTranslate(sliderRec);
                        sliderWrapper.setAttribute("data-slider-pos", newPosition), t_slideMoveWithoutAnimation(rec, !1, sliderOptions, currentTranslate), t_slds_updateSlider(rec)
                    }
                }))
            }))
        }
    }
}

function t_slds_animate(timing, draw, duration) {
    var start = performance.now();
    requestAnimationFrame((function t_slds_animate(time) {
        var timeFraction = (time - start) / duration;
        timeFraction > 1 && (timeFraction = 1);
        var progress = timing(timeFraction);
        draw(progress), timeFraction < 1 ? requestAnimationFrame(t_slds_animate) : "y" !== window.lazy && "yes" !== document.querySelector("#allrecords").getAttribute("data-tilda-lazy") || t_slds_onHammerLoad("t_lazyload_update", (function() {
            t_lazyload_update()
        }))
    }))
}

function t_slide_MoveAnimation(sliderWrapper, position, sliderWidth, animateDuration) {
    if (sliderWrapper) {
        sliderWrapper.style.transition = "height ease-in-out .5s, transform ease-in-out 0s";
        var translateValue = -Math.abs(position * sliderWidth),
            currentTranslate = -parseInt(getComputedStyle(sliderWrapper).transform.match(/\d+/)[0]),
            nextTransformValue = currentTranslate - translateValue;
        0 !== nextTransformValue && t_slds_animate((function(timing) {
            return timing
        }), (function(progress) {
            sliderWrapper.style.transform = "translateX(" + (currentTranslate - nextTransformValue * progress) + "px)"
        }), animateDuration)
    }
}

function t_slideMoveWithoutAnimation(rec, withoutNewInterval, sliderOptions) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper");
        if (sliderWrapper) {
            var position = parseFloat(sliderWrapper.getAttribute("data-slider-pos")),
                itemsInRow, sliderWidth = (sliderWrapper.getAttribute("data-slider-items-in-row") || 0) > 0 ? sliderRec.querySelector(".t-slds__container .t-slds__item").offsetWidth : sliderRec.querySelector(".t-slds__container").offsetWidth,
                totalSlides = parseFloat(sliderWrapper.getAttribute("data-slider-totalslides")),
                sliderNotAnimated = sliderWrapper.classList.contains("t-slds_animated-none");
            if (position > totalSlides + 1 && (position = 1), sliderNotAnimated) {
                var activeSlide = sliderRec.querySelector(".t-slds__item_active"),
                    items = sliderRec.querySelectorAll(".t-slds__item");
                if (activeSlide && 0 === sliderRec.querySelectorAll(".t-slds__item_dummy").length) {
                    var dummy = activeSlide.cloneNode(!0);
                    if (dummy.classList.add("t-slds__item_dummy"), dummy.style.position = "absolute", dummy.style.left = sliderWidth * position + "px", sliderWrapper.appendChild(dummy), sliderRec.classList.contains("js-product")) catalog = sliderRec;
                    else var catalog = sliderRec.querySelector(".t-store") || sliderRec.querySelector(".js-product");
                    catalog ? (t_slds_fadeOut(dummy, 150, (function() {
                        null !== dummy.parentNode && dummy.parentNode.removeChild(dummy)
                    })), Array.prototype.forEach.call(items, (function(item) {
                        t_slds_fadeIn(item, 150)
                    }))) : (Array.prototype.forEach.call(items, (function(item) {
                        item.style.opacity = 0
                    })), t_slds_fadeOut(dummy, 400, (function() {
                        null !== dummy.parentNode && dummy.parentNode.removeChild(dummy)
                    })), setTimeout((function() {
                        Array.prototype.forEach.call(items, (function(item) {
                            t_slds_fadeIn(item)
                        }))
                    }), 50))
                }
                sliderWrapper.classList.add("t-slds_animated-cancel")
            }
            t_slideMove(rec, withoutNewInterval, sliderOptions), sliderNotAnimated && sliderWrapper.classList.remove("t-slds_animated-cancel")
        }
    }
}

function t_slideMoveInstantly(rec, withoutNewInterval, sliderOptions) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper");
        if (sliderWrapper) {
            var position = parseFloat(sliderWrapper.getAttribute("data-slider-pos")),
                itemsInRow, sliderWidth = (sliderWrapper.getAttribute("data-slider-items-in-row") || 0) > 0 ? sliderRec.querySelector(".t-slds__container .t-slds__item").offsetWidth : sliderRec.querySelector(".t-slds__container").offsetWidth,
                totalSlides = parseFloat(sliderWrapper.getAttribute("data-slider-totalslides")),
                sliderNotAnimated = sliderWrapper.classList.contains("t-slds_animated-none");
            if (position > totalSlides + 1 && (position = 1), sliderNotAnimated) {
                var activeSlide = sliderRec.querySelector(".t-slds__item_active");
                if (activeSlide && 0 === sliderRec.querySelectorAll(".t-slds__item_dummy").length) {
                    var dummy = activeSlide.cloneNode(!0);
                    dummy.classList.add("t-slds__item_dummy"), dummy.style.position = "absolute", dummy.style.left = sliderWidth * position + "px", sliderWrapper.appendChild(dummy), t_slds_fadeOut(dummy, 400, (function() {
                        null !== dummy.parentNode && dummy.parentNode.removeChild(dummy)
                    }))
                }
                sliderWrapper.classList.add("t-slds_animated"), sliderWrapper.classList.add("t-slds_animated-cancel")
            } else sliderWrapper.classList.add("t-slds_animated"), sliderWrapper.classList.add("t-slds_animated-cancel");
            t_slideMove(rec, withoutNewInterval, sliderOptions), sliderWrapper.classList.remove("t-slds_animated"), sliderWrapper.classList.remove("t-slds_animated-cancel")
        }
    }
}

function t_slideMove(rec, withoutNewInterval, sliderOptions) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper");
        if (sliderWrapper) {
            var sliderItems = sliderRec.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)"),
                isFeedsSlider = sliderWrapper.classList.contains("js-feed-container"),
                itemsInRow = parseInt(sliderWrapper.getAttribute("data-slider-items-in-row") || 0),
                loadedPosts = parseInt(sliderWrapper.getAttribute("data-feed-show-count") || 0),
                sliderWidth = itemsInRow > 0 ? sliderRec.querySelector(".t-slds__container .t-slds__item").offsetWidth : sliderRec.querySelector(".t-slds__container").offsetWidth,
                sliderTransition = parseFloat(sliderWrapper.getAttribute("data-slider-transition")),
                position = parseFloat(sliderWrapper.getAttribute("data-slider-pos")),
                totalSlides = parseFloat(sliderWrapper.getAttribute("data-slider-totalslides")),
                cycle = sliderWrapper.getAttribute("data-slider-cycle"),
                sliderNotAnimated = sliderWrapper.classList.contains("t-slds_animated-none"),
                sliderAutoPlay = sliderWrapper.getAttribute("data-slider-timeout") > 0,
                stopSlider = sliderWrapper.getAttribute("data-slider-stop"),
                arrowWrapperRight = sliderRec.querySelector(".t-slds__arrow_wrapper-right"),
                arrowWrapperLeft = sliderRec.querySelector(".t-slds__arrow_wrapper-left"),
                ariaLiveAttr;
            "off" === sliderWrapper.getAttribute("aria-live") && sliderWrapper.setAttribute("aria-live", "polite");
            var safariMajorVersion = 0;
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                var version = navigator.appVersion.match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/);
                null !== version && (safariMajorVersion = parseInt(version[1], 10))
            }
            var isiOSChrome = !!navigator.userAgent.match("CriOS");
            if (sliderTransition || 0 === sliderTransition || (sliderTransition = 300), position > totalSlides + 1 && (position = 1, sliderWrapper.setAttribute("data-slider-pos", 1)), "true" == stopSlider) return !1;
            if (arrowWrapperRight)
                if (isFeedsSlider) {
                    var lastSlide = sliderItems[sliderItems.length - 1],
                        lastSlideIndex = parseInt(lastSlide.getAttribute("data-slide-index"), 10);
                    if (itemsInRow < totalSlides && t_slds_fadeIn(arrowWrapperRight, 300), lastSlideIndex < totalSlides && itemsInRow > 0 && (position == lastSlideIndex - loadedPosts + 1 || lastSlideIndex === loadedPosts)) {
                        var lastSlideEvent = document.createEvent("Event");
                        lastSlideEvent.initEvent("feedsLastSlide", !0, !0), sliderWrapper.dispatchEvent(lastSlideEvent), document.addEventListener("feedsLoadSlide", (function() {
                            t_slds_updateSlider(rec), "function" == typeof t_animate__startAnimation && t_animate__startAnimation()
                        })), t_slds_fadeIn(arrowWrapperRight, 300)
                    } else lastSlideIndex === totalSlides && position === totalSlides - itemsInRow + 1 && t_slds_fadeOut(arrowWrapperRight, 300)
                } else "false" == sliderWrapper.getAttribute("data-slider-with-cycle") && (position == totalSlides || itemsInRow > 1 && position == totalSlides - itemsInRow + 1) ? t_slds_fadeOut(arrowWrapperRight, 300) : t_slds_fadeIn(arrowWrapperRight, 300);
            arrowWrapperLeft && ("false" == sliderWrapper.getAttribute("data-slider-with-cycle") && 1 == position ? t_slds_fadeOut(arrowWrapperLeft, 300) : t_slds_fadeIn(arrowWrapperLeft, 300)), sliderWrapper.classList.add("t-slds_animated"), safariMajorVersion >= 13 && isiOSChrome && !sliderNotAnimated ? t_slide_MoveAnimation(sliderWrapper, position, sliderWidth, sliderTransition) : sliderWrapper.style.transform = "translateX(-" + sliderWidth * position + "px)", setTimeout((function() {
                sliderWrapper.classList.remove("t-slds_animated"), sliderWrapper.setAttribute("data-slider-animated", ""), "yes" == (cycle = sliderWrapper.getAttribute("data-slider-cycle")) && (position == totalSlides + 1 && (position = 1), 0 == position && (position = totalSlides), safariMajorVersion >= 13 && isiOSChrome && !sliderNotAnimated ? t_slide_MoveAnimation(sliderWrapper, position, sliderWidth, 0) : sliderWrapper.style.transform = "translateX(-" + sliderWidth * position + "px)", !0 !== sliderNotAnimated && t_slds_ActiveSlide(rec, position, totalSlides, sliderOptions), sliderWrapper.setAttribute("data-slider-pos", position)), ("y" === window.lazy || document.querySelector("#allrecords") && "yes" === document.querySelector("#allrecords").getAttribute("data-tilda-lazy")) && t_slds_onHammerLoad("t_lazyload_update", (function() {
                    t_lazyload_update()
                })), !withoutNewInterval && sliderAutoPlay && t_slds_initAutoPlay(rec, position, totalSlides, sliderOptions)
            }), sliderTransition), t_slds_ActiveBullet(rec, position, totalSlides, sliderOptions), t_slds_ActiveSlide(rec, position, totalSlides), "true" == sliderWrapper.getAttribute("data-slider-correct-height") && t_slds_SliderHeight(rec), t_slds_SliderArrowsHeight(rec), t_slds_ActiveCaption(rec, position, totalSlides), sliderRec.querySelectorAll(".t-slds__item-loaded").length < totalSlides + 2 && t_slds_UpdateImages(rec, position)
        }
    }
}

function t_slds_updateSlider(rec) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        t_slds_SliderWidth(rec);
        var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper");
        if (sliderWrapper) {
            var itemsInRow = sliderWrapper.getAttribute("data-slider-items-in-row") || 0,
                sliderItem = sliderRec.querySelector(".t-slds__container .t-slds__item"),
                sliderContainer = sliderRec.querySelector(".t-slds__container"),
                sliderWidth = itemsInRow > 0 && sliderContainer && sliderItem ? sliderItem.offsetWidth : sliderContainer.offsetWidth,
                position = parseInt(sliderWrapper.getAttribute("data-slider-pos"), 10),
                totalSlides = parseInt(sliderWrapper.getAttribute("data-slider-totalslides"), 10),
                sliderWithCycle = sliderWrapper.getAttribute("data-slider-with-cycle"),
                arrowWrapperRight = sliderRec.querySelector(".t-slds__arrow_wrapper-right");
            position > totalSlides + 1 && (position = 1, sliderWrapper.setAttribute("data-slider-pos", 1)), arrowWrapperRight && (arrowWrapperRight.style.display = "false" === sliderWithCycle && (totalSlides - itemsInRow <= 0 || position === totalSlides) ? "none" : ""), sliderWrapper.style.transform = "translateX(-" + sliderWidth * position + "px)", "true" == sliderWrapper.getAttribute("data-slider-correct-height") && t_slds_UpdateSliderHeight(rec), t_slds_UpdateSliderArrowsHeight(rec)
        }
    }
}

function t_slds_UpdateImages(rec, position) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var item = sliderRec.querySelector('.t-slds__item[data-slide-index="' + position + '"]');
        item && (item.classList.add("t-slds__item-loaded"), item.nextElementSibling && item.nextElementSibling.classList.add("t-slds__item-loaded"), item.previousElementSibling && item.previousElementSibling.classList.add("t-slds__item-loaded"))
    }
}

function t_slds_ActiveCaption(rec, position, totalSlides) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var captions = sliderRec.querySelectorAll(".t-slds__caption"),
            captionActive = sliderRec.querySelector('.t-slds__caption[data-slide-caption="' + position + '"]');
        Array.prototype.forEach.call(captions, (function(caption) {
            caption.classList.remove("t-slds__caption-active")
        })), 0 == position ? captionActive = sliderRec.querySelector('.t-slds__caption[data-slide-caption="' + totalSlides + '"]') : position == totalSlides + 1 && (captionActive = sliderRec.querySelector('.t-slds__caption[data-slide-caption="1"]')), captionActive && captionActive.classList.add("t-slds__caption-active")
    }
}

function t_slds_scrollImages(rec, distance) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
        sliderRec.querySelector(".t-slds__items-wrapper").style.transform = "translateX(" + value + "px)"
    }
}

function t_slds_ActiveBullet(rec, position, totalSlides, sliderOptions) {
    var maxThumbsCount;
    if (sliderOptions && sliderOptions.thumbsbulletGallery) {
        var columnSizeForMainImage = parseInt(sliderOptions.storeOptions.popup_opts.columns),
            galleryImageAspectRatio = +sliderOptions.storeOptions.slider_slidesOpts.ratio;
        maxThumbsCount = t_store_prodPopup_gallery_calcMaxThumbsCount(columnSizeForMainImage, galleryImageAspectRatio, 60, 10)
    }
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var bullets = sliderRec.querySelectorAll(".t-slds__bullet"),
            bulletActive = sliderRec.querySelector('.t-slds__bullet[data-slide-bullet-for="' + position + '"]');
        if (Array.prototype.forEach.call(bullets, (function(bullet) {
                bullet.classList.remove("t-slds__bullet_active");
                var bulletButton = bullet.querySelector(".t-slds__bullet_body");
                bulletButton && bulletButton.removeAttribute("aria-current")
            })), sliderOptions && sliderOptions.thumbsbulletGallery && position >= maxThumbsCount && position != totalSlides + 1 || totalSlides >= maxThumbsCount && 0 == position ? bulletActive = sliderRec.querySelector('.t-slds__bullet[data-slide-bullet-for="' + maxThumbsCount + '"]') : 0 == position ? bulletActive = sliderRec.querySelector('.t-slds__bullet[data-slide-bullet-for="' + totalSlides + '"]') : position == totalSlides + 1 && (bulletActive = sliderRec.querySelector('.t-slds__bullet[data-slide-bullet-for="1"]')), bulletActive) {
            bulletActive.classList.add("t-slds__bullet_active");
            var bulletActiveButton = bulletActive.querySelector(".t-slds__bullet_body");
            bulletActiveButton && bulletActiveButton.setAttribute("aria-current", !0)
        }
    }
}

function t_slds_ActiveSlide(rec, position, totalSlides) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper"),
            slides = sliderRec.querySelectorAll(".t-slds__item"),
            slideActive = sliderRec.querySelector('.t-slds__item[data-slide-index="' + position + '"]'),
            sliderNotAnimated = !!sliderWrapper && sliderWrapper.classList.contains("t-slds_animated-none"),
            iframes = sliderRec.querySelectorAll("iframe"),
            videos = sliderRec.querySelectorAll("video");
        if (Array.prototype.forEach.call(iframes, (function(iframe) {
                iframe.src && (-1 !== iframe.src.indexOf("&enablejsapi=1") && iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"), -1 === iframe.src.indexOf("vimeo") || -1 === iframe.src.indexOf("&amp;api=1") && -1 === iframe.src.indexOf("&api=1") || iframe.contentWindow.postMessage('{"method":"pause","value":"true"}', "*"))
            })), Array.prototype.forEach.call(videos, (function(video) {
                video.pause()
            })), Array.prototype.forEach.call(slides, (function(slide) {
                slide.classList.remove("t-slds__item_active"), slide.setAttribute("aria-hidden", "true")
            })), 0 == position && !1 === sliderNotAnimated) sliderRec.querySelector('.t-slds__item[data-slide-index="' + totalSlides + '"]').classList.add("t-slds__item_active"), sliderRec.setAttribute("aria-hidden", "false");
        else if (0 == position && !0 === sliderNotAnimated) slideActive = sliderRec.querySelector('.t-slds__item[data-slide-index="' + totalSlides + '"]');
        else if (position == totalSlides + 1 && !1 === sliderNotAnimated) {
            var firstSlide = sliderRec.querySelector('.t-slds__item[data-slide-index="1"]');
            firstSlide && (firstSlide.classList.add("t-slds__item_active"), firstSlide.setAttribute("aria-hidden", "false"))
        } else position == totalSlides + 1 && !0 === sliderNotAnimated && (slideActive = sliderRec.querySelector('.t-slds__item[data-slide-index="1"]'));
        slideActive && (slideActive.classList.add("t-slds__item_active"), slideActive.setAttribute("aria-hidden", "false")), window.t_slds__isiOS && t_slds__hideMobileSlides(slideActive), t_slds__setTabindexForFocusableElements(rec)
    }
}

function t_slds__setTabindexForFocusableElements(rec) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper"),
            activeSlide = sliderRec.querySelector(".t-slds__item_active");
        if (activeSlide) {
            var focusableElementTags = 'a, button, input:not([type="hidden"]), select, textarea, video, iframe',
                allFocusableElements = sliderWrapper.querySelectorAll(focusableElementTags);
            Array.prototype.forEach.call(allFocusableElements, (function(focusableElement) {
                focusableElement.setAttribute("tabindex", "-1")
            }));
            var activeFocusableElements = activeSlide.querySelectorAll(focusableElementTags);
            Array.prototype.forEach.call(activeFocusableElements, (function(focusableElement) {
                focusableElement.setAttribute("tabindex", "0")
            }))
        }
    }
}

function t_slds_SliderWidth(rec) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderContainer = sliderRec.querySelector(".t-slds__container");
        if (sliderContainer) {
            var containerPaddingLeft = parseInt(getComputedStyle(sliderContainer).paddingLeft) || 0,
                containerPaddingRight = parseInt(getComputedStyle(sliderContainer).paddingRight) || 0,
                sliderContainerWidth = sliderContainer.clientWidth - (containerPaddingLeft + containerPaddingRight),
                totalSlides = sliderRec.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)").length,
                sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper"),
                itemsInRow = 0;
            if (sliderWrapper) {
                var stopSlider = sliderWrapper.getAttribute("data-slider-stop");
                if (itemsInRow = sliderWrapper.getAttribute("data-slider-items-in-row"), "true" == stopSlider) return !1;
                sliderWrapper.style.width = sliderContainerWidth * totalSlides + "px"
            }
            window.innerWidth <= 640 ? itemsInRow = 1 : window.innerWidth <= 960 && itemsInRow > 1 && (itemsInRow = 2);
            var itemWidth = itemsInRow > 1 ? sliderContainerWidth / itemsInRow : sliderContainerWidth;
            if (itemWidth > 0) {
                var items = sliderRec.querySelectorAll(".t-slds__item");
                sliderWrapper && (items = sliderWrapper.querySelectorAll(".t-slds__item")), Array.prototype.forEach.call(items, (function(item) {
                    item.style.width = itemWidth + "px"
                }))
            }
        }
    }
}

function t_slds_SliderHeight(rec) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderWrapper = sliderRec.querySelector('.t-slds__items-wrapper:not([data-slider-correct-height="false"])');
        if (sliderWrapper) {
            var isFeedsSlider = sliderWrapper.classList.contains("js-feed-container"),
                activeItem = sliderRec.querySelector(".t-slds__item_active");
            if (activeItem) var itemPaddingTop = parseInt(getComputedStyle(activeItem).paddingTop) || 0,
                itemPaddingBottom = parseInt(getComputedStyle(activeItem).paddingBottom) || 0,
                height = activeItem.clientHeight - (itemPaddingTop + itemPaddingBottom);
            height && sliderWrapper && (sliderWrapper.style.height = isFeedsSlider ? "" : height + "px")
        }
    }
}

function t_slds_UpdateSliderHeight(rec) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderWrapper = sliderRec.querySelector('.t-slds__items-wrapper:not([data-slider-correct-height="false"])');
        if (sliderWrapper) {
            var isFeedsSlider = sliderWrapper.classList.contains("js-feed-container"),
                activeItem = sliderRec.querySelector(".t-slds__item_active");
            if (activeItem) var itemPaddingTop = parseInt(getComputedStyle(activeItem).paddingTop) || 0,
                itemPaddingBottom = parseInt(getComputedStyle(activeItem).paddingBottom) || 0,
                height = activeItem.clientHeight - (itemPaddingTop + itemPaddingBottom);
            0 !== height && sliderWrapper && (sliderWrapper.style.height = isFeedsSlider ? "" : height + "px")
        }
    }
}

function t_slds_SliderArrowsHeight(rec) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var activeItem = sliderRec.querySelector(".t-slds__item_active"),
            isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (activeItem) {
            var offsetForVideoBtns = 0,
                isVideo;
            activeItem.querySelector("[data-slider-video-type]") && isMobile && (offsetForVideoBtns = 40);
            var itemPaddingTop = parseInt(getComputedStyle(activeItem).paddingTop) || 0,
                itemPaddingBottom = parseInt(getComputedStyle(activeItem).paddingBottom) || 0,
                height = activeItem.clientHeight - (itemPaddingTop + itemPaddingBottom) - offsetForVideoBtns
        }
        var arrowWrappers = sliderRec.querySelectorAll(".t-slds__arrow_wrapper");
        height && arrowWrappers.length > 0 && Array.prototype.forEach.call(arrowWrappers, (function(arrowWrapper) {
            arrowWrapper.style.height = height + "px";
            var arrow = arrowWrapper.querySelector(".t-slds__arrow");
            arrow && (arrow.style.marginTop = offsetForVideoBtns / 2 + "px")
        })), t_slds_fixArrowsInCatalog(sliderRec, activeItem, arrowWrappers, isMobile)
    }
}

function t_slds_UpdateSliderArrowsHeight(rec) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var activeItem = sliderRec.querySelector(".t-slds__item_active"),
            isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (activeItem) {
            var offsetForVideoBtns = 0,
                isVideo;
            activeItem.querySelector("[data-slider-video-type]") && isMobile && (offsetForVideoBtns = 40);
            var itemPaddingTop = parseInt(getComputedStyle(activeItem).paddingTop) || 0,
                itemPaddingBottom = parseInt(getComputedStyle(activeItem).paddingBottom) || 0,
                height = activeItem.clientHeight - (itemPaddingTop + itemPaddingBottom) - offsetForVideoBtns
        }
        var arrowWrappers = sliderRec.querySelectorAll(".t-slds__arrow_wrapper");
        height && arrowWrappers.length > 0 && Array.prototype.forEach.call(arrowWrappers, (function(arrowWrapper) {
            arrowWrapper.style.height = height + "px";
            var arrow = arrowWrapper.querySelector(".t-slds__arrow");
            arrow && (arrow.style.marginTop = offsetForVideoBtns / 2 + "px")
        })), t_slds_fixArrowsInCatalog(sliderRec, activeItem, arrowWrappers, isMobile)
    }
}

function t_slds_fixArrowsInCatalog(sliderRec, activeItem, arrowWrappers, isMobile) {
    if (activeItem && isMobile && sliderRec.classList.contains("t-store__relevants-grid-cont")) {
        var image = activeItem.querySelector(".js-product-img");
        if (image) {
            var imageHeight = image.offsetHeight;
            Array.prototype.forEach.call(arrowWrappers, (function(arrowWrapper) {
                var arrowWrapperHeight = arrowWrapper.offsetHeight,
                    arrowWrapperOffsetTop = (imageHeight - arrowWrapperHeight) / 2;
                arrowWrapper.style.top = arrowWrapperOffsetTop + "px", arrowWrapper.style.transform = "translateY(0)"
            }))
        }
    }
}

function t_slds_initAutoPlay(rec, position, totalSlides, sliderOptions) {
    var isZeroBlock = "object" == typeof rec,
        sliderRec = isZeroBlock ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderContainer = sliderRec.querySelector(".t-slds"),
            sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper");
        if (sliderWrapper) {
            var sliderTimeOut = parseFloat(sliderWrapper.getAttribute("data-slider-timeout")),
                cycle = "",
                stopSlider = sliderWrapper.getAttribute("data-slider-stop"),
                galleryIntervalIdAttr = sliderWrapper.getAttribute("data-slider-interval-id"),
                isMobile;
            if (galleryIntervalIdAttr && clearInterval(galleryIntervalIdAttr), "true" == stopSlider) return !1;
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && sliderContainer && (sliderContainer.addEventListener("mouseover", (function() {
                sliderWrapper.setAttribute("data-slider-stopped", "yes")
            })), sliderContainer.addEventListener("mouseout", (function() {
                "y" !== sliderWrapper.getAttribute("data-slider-stopped-by-video") && sliderWrapper.setAttribute("data-slider-stopped", "")
            })));
            var elementTop = sliderRec.getBoundingClientRect().top + window.pageYOffset,
                elementBottom = elementTop + sliderRec.offsetHeight,
                hidden, visibilityChange;
            window.addEventListener("resize", t_throttle((function() {
                elementTop = sliderRec.getBoundingClientRect().top + window.pageYOffset, elementBottom = elementTop + sliderRec.offsetHeight
            }))), void 0 !== document.hidden ? (hidden = "hidden", visibilityChange = "visibilitychange") : void 0 !== document.msHidden ? (hidden = "msHidden", visibilityChange = "msvisibilitychange") : void 0 !== document.webkitHidden && (hidden = "webkitHidden", visibilityChange = "webkitvisibilitychange"), document.addEventListener(visibilityChange, (function() {
                if (document[hidden]) sliderWrapper.setAttribute("data-slider-stopped", "yes");
                else {
                    var display = getComputedStyle(sliderRec).display,
                        viewportTop = window.pageYOffset,
                        viewportBottom = viewportTop + window.innerHeight;
                    elementTop = sliderRec.getBoundingClientRect().top + window.pageYOffset, (elementBottom = elementTop + sliderRec.offsetHeight) > viewportTop && elementTop < viewportBottom && "none" !== display && "y" !== sliderWrapper.getAttribute("data-slider-stopped-by-video") && sliderWrapper.setAttribute("data-slider-stopped", "")
                }
            }), !1), 1 === sliderRec.length && window.bind("scroll", t_throttle((function() {
                var display = getComputedStyle(sliderRec).display,
                    viewportTop = window.pageYOffset,
                    viewportBottom = viewportTop + window.innerHeight;
                "none" !== display ? (elementTop = sliderRec.getBoundingClientRect().top + window.pageYOffset, (elementBottom = elementTop + sliderRec.offsetHeight) > viewportTop && elementTop < viewportBottom && "y" !== sliderWrapper.getAttribute("data-slider-stopped-by-video") ? sliderWrapper.setAttribute("data-slider-stopped", "") : "" === sliderWrapper.getAttribute("data-slider-stopped") && sliderWrapper.setAttribute("data-slider-stopped", "yes")) : isZeroBlock || sliderWrapper.setAttribute("data-slider-stopped", "yes")
            })));
            var galleryIntervalId = setInterval((function() {
                var stopped = sliderWrapper.getAttribute("data-slider-stopped"),
                    ignorehover = sliderWrapper.getAttribute("data-slider-autoplay-ignore-hover"),
                    isSliderTouch = sliderWrapper.getAttribute("data-slider-touch"),
                    currentTranslate = t_slds_getCurrentTranslate(sliderRec);
                "yes" != stopped && "yes" != ignorehover && "yes" != isSliderTouch && ("false" == sliderWrapper.getAttribute("data-slider-with-cycle") && position == totalSlides ? position = totalSlides : position++, sliderWrapper.setAttribute("data-slider-pos", position), position != totalSlides + 1 && 0 != position || (cycle = "yes"), t_slideMoveWithoutAnimation(rec, !0, sliderOptions, currentTranslate), t_slds_updateSlider(rec), "yes" == cycle && (position == totalSlides + 1 && (position = 1), 0 == position && (position = totalSlides), sliderWrapper.setAttribute("data-slider-pos", position)), sliderWrapper.setAttribute("data-slider-cycle", cycle))
            }), sliderTimeOut);
            sliderWrapper.setAttribute("data-slider-interval-id", galleryIntervalId)
        }
    }
}

function t_slds_positionArrows(rec) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var container = sliderRec.querySelector(".t-slds__arrow_container-outside"),
            item = sliderRec.querySelector(".t-slds__item");
        if (item) {
            var inner = item.offsetWidth,
                arrowleft = sliderRec.querySelector(".t-slds__arrow-left") ? sliderRec.querySelector(".t-slds__arrow-left").offsetWidth : 0,
                arrowright = sliderRec.querySelector(".t-slds__arrow-right") ? sliderRec.querySelector(".t-slds__arrow-right").offsetWidth : 0;
            container && (container.style.maxWidth = arrowleft + arrowright + inner + 120 + "px")
        }
    }
}

function t_slds_initSliderSwipe(rec, totalSlides, windowWidth, sliderOptions) {
    var sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec);
    if (sliderRec) {
        var sliderMain = sliderRec.querySelector(".t-slds__main");
        if (sliderMain) {
            var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper");
            if (sliderWrapper) {
                var stopSlider = sliderWrapper.getAttribute("data-slider-stop"),
                    isSwiperInit = sliderWrapper.getAttribute("data-swiper-initialized"),
                    timeout, isScrolling = !1,
                    isSwiping = !1;
                if ("true" == stopSlider) return !1;
                if ("true" == isSwiperInit) return !1;
                delete Hammer.defaults.cssProps.userSelect, hammer = new Hammer(sliderMain, {
                    domEvents: !0,
                    inputClass: Hammer.TouchInput,
                    recognizers: [
                        [Hammer.Pan, {
                            direction: Hammer.DIRECTION_HORIZONTAL
                        }]
                    ]
                }), sliderWrapper.setAttribute("data-swiper-initialized", "true");
                var stopSliderIfNeed = function(stopAttribute) {
                        window.pageYOffset > sliderRec.getBoundingClientRect().bottom + window.pageYOffset || window.pageYOffset + document.documentElement.clientHeight < sliderRec.getBoundingClientRect().top + window.pageYOffset ? sliderWrapper.setAttribute(stopAttribute, "yes") : "y" !== sliderWrapper.getAttribute("data-slider-stopped-by-video") && sliderWrapper.setAttribute(stopAttribute, "")
                    },
                    stopAttribute = "ontouchend" in document ? "data-slider-touch" : "data-slider-stopped",
                    observer;
                if ("IntersectionObserver" in window) new IntersectionObserver((function(entries) {
                    var entry = entries[0];
                    sliderWrapper.setAttribute(stopAttribute, entry.isIntersecting ? "" : "yes")
                })).observe(sliderRec);
                else stopSliderIfNeed(stopAttribute), window.addEventListener("scroll", (function() {
                    isScrolling = !0, clearTimeout(timeout), timeout = setTimeout((function() {
                        stopSliderIfNeed(stopAttribute), isScrolling = !1
                    }), 250)
                }));
                if (1 == totalSlides) return !1;
                var scrollPrevent = function(event) {
                    if (isSwiping) return event.preventDefault(), !1
                };
                window.removeEventListener("touchmove", scrollPrevent, {
                    passive: !1
                }), window.addEventListener("touchmove", scrollPrevent, {
                    passive: !1
                }), hammer.on("pan", (function(event) {
                    if (isScrolling) return !1;
                    isSwiping = !0;
                    var sliderWrapper = sliderRec.querySelector(".t-slds__items-wrapper"),
                        itemsInRow = sliderWrapper.getAttribute("data-slider-items-in-row") || 0,
                        withSingleMove = itemsInRow > 1,
                        sliderWidth = withSingleMove ? sliderRec.querySelector(".t-slds__container .t-slds__item").offsetWidth : sliderRec.querySelector(".t-slds__container").offsetWidth,
                        position = parseFloat(sliderWrapper.getAttribute("data-slider-pos")),
                        totalSlides = parseFloat(sliderWrapper.getAttribute("data-slider-totalslides")),
                        cycle = "",
                        distance = event.deltaX,
                        percentage = 100 / totalSlides * event.deltaX / window.innerWidth,
                        sensitivity = 30,
                        stopSlider;
                    if ("true" == sliderWrapper.getAttribute("data-slider-stop")) return !1;
                    if (sliderWrapper.setAttribute("data-slider-touch", "yes"), t_slds_scrollImages(rec, sliderWidth * position - distance), event.isFinal) {
                        if (event.velocityX > .4) "false" == sliderWrapper.getAttribute("data-slider-with-cycle") && 1 == position ? position = 1 : position--, sliderWrapper.setAttribute("data-slider-pos", position), 0 == position && (cycle = "yes"), sliderWrapper.setAttribute("data-slider-cycle", cycle), t_slideMove(rec, !1, sliderOptions);
                        else if (event.velocityX < -.4) {
                            if ("false" == sliderWrapper.getAttribute("data-slider-with-cycle") && (position == totalSlides || withSingleMove && position == totalSlides - itemsInRow + 1)) position = withSingleMove ? totalSlides - itemsInRow : totalSlides;
                            else {
                                var sliderItems = sliderRec.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)"),
                                    lastSlide = sliderItems[sliderItems.length - 1],
                                    lastSlideIndex = parseFloat(lastSlide.getAttribute("data-slide-index"), 10);
                                if (lastSlideIndex < totalSlides && position == lastSlideIndex) {
                                    var lastSlideEvent = document.createEvent("Event");
                                    lastSlideEvent.initEvent("feedsLastSlide", !0, !0), sliderWrapper.dispatchEvent(lastSlideEvent), document.addEventListener("feedsLoadSlide", (function() {
                                        t_slds_updateSlider(rec)
                                    }))
                                }
                                position++
                            }
                            sliderWrapper.setAttribute("data-slider-pos", position), position == totalSlides + 1 && (cycle = "yes"), sliderWrapper.setAttribute("data-slider-cycle", cycle), t_slideMove(rec, !1, sliderOptions)
                        } else percentage <= -30 / totalSlides ? ("false" == sliderWrapper.getAttribute("data-slider-with-cycle") && (position == totalSlides || withSingleMove && position == totalSlides - itemsInRow + 1) ? position = withSingleMove ? totalSlides - itemsInRow : totalSlides : position++, sliderWrapper.setAttribute("data-slider-pos", position), position == totalSlides + 1 && (cycle = "yes"), sliderWrapper.setAttribute("data-slider-cycle", cycle), t_slideMove(rec, !1, sliderOptions)) : percentage >= 30 / totalSlides ? ("false" == sliderWrapper.getAttribute("data-slider-with-cycle") && 1 == position ? position = 1 : position--, sliderWrapper.setAttribute("data-slider-pos", position), 0 == position && (cycle = "yes"), sliderWrapper.setAttribute("data-slider-cycle", cycle), t_slideMove(rec, !1, sliderOptions)) : t_slideMove(rec, !1, sliderOptions);
                        sliderWrapper.setAttribute("data-slider-touch", ""), isSwiping = !1
                    }
                })), hammer.on("panend", (function() {
                    t_slideMove(rec, !1, sliderOptions), isSwiping = !1
                }))
            }
        }
    }
}

function t_slds_getCurrentTranslate(el) {
    var sliderWrapper = el.querySelector(".t-slds__items-wrapper");
    if (sliderWrapper) {
        var transform = getComputedStyle(sliderWrapper).transform;
        if (void 0 !== transform && "" !== transform) {
            var match = transform.match(/\d+/g);
            if (null !== match) return parseInt(match[0], 10)
        }
    }
}

function t_slds_changeImageUrl(rec) {
    var allRec = document.getElementById("allrecords"),
        isLazyActive = allRec && "yes" === allRec.getAttribute("data-tilda-lazy"),
        sliderRec = "object" == typeof rec ? rec[0] : document.querySelector("#rec" + rec),
        imgs;
    sliderRec && (imgs = isLazyActive ? sliderRec.querySelectorAll(".t-slds__img:not([data-original])") : sliderRec.querySelectorAll(".t-slds__img"), Array.prototype.forEach.call(imgs, (function(img) {
        var srcAttr = img.getAttribute("data-src");
        srcAttr && (img.setAttribute("src", srcAttr), img.removeAttribute("data-src"))
    })))
}

function t_slds_onHammerLoad(funcName, okFunc, time) {
    if ("function" == typeof window[funcName]) okFunc();
    else var startTime = Date.now(),
        timerId = setTimeout((function checkFuncExist() {
            var currentTime = Date.now();
            if ("function" != typeof window[funcName]) {
                if (currentTime - startTime > 7e3) throw new Error(funcName + " is undefined");
                timerId = setTimeout(checkFuncExist, time || 100)
            } else okFunc()
        }))
}

function t_slds_fadeOut(el, duration, complete) {
    if ("none" !== el.style.display && !el.getAttribute("data-fadeout-timeout")) {
        var opacity = 1;
        duration = parseInt(duration);
        var speed, timer = setInterval((function() {
            el.style.opacity = opacity, (opacity -= .1) <= .1 && (clearInterval(timer), el.removeAttribute("data-fadeout-timeout"), el.style.display = "none", "function" == typeof complete && complete())
        }), duration > 0 ? duration / 10 : 40);
        el.setAttribute("data-fadeout-timeout", timer)
    }
}

function t_slds_fadeIn(el, duration, complete) {
    if (("1" !== getComputedStyle(el).opacity && "" !== getComputedStyle(el).opacity || "none" === getComputedStyle(el).display) && !el.getAttribute("data-fadein-timeout")) {
        var opacity = 0,
            speed = (duration = parseInt(duration)) > 0 ? duration / 10 : 40;
        el.style.opacity = opacity, el.style.display = "block";
        var timer = setInterval((function() {
            el.style.opacity = opacity, (opacity += .1) >= 1 && (clearInterval(timer), el.removeAttribute("data-fadein-timeout"), "function" == typeof complete && complete())
        }), speed);
        el.setAttribute("data-fadein-timeout", timer)
    }
}
window.t_slds__isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.userAgent.indexOf("Macintosh") && "ontouchend" in document;
! function() {
    var r = document.getElementById("allrecords");

    function e() {
        var e = Math.floor(899999 * Math.random()) + 1e5;
        return (new Date).getTime() + "." + e
    }

    function n(e) {
        e = e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1"), e = new RegExp("(?:^|; )" + e + "=([^;]*)"), e = document.cookie.match(e);
        if (e) return decodeURIComponent(e[1])
    }

    function o(e, t, n) {
        if (i = n.expires) {
            "number" == typeof i && (o = (new Date).getTime() + 1e3 * i, (i = new Date(o)).toUTCString && (n.expires = i.toUTCString()));
            var o, i, a, r = e + "=" + (t = encodeURIComponent(t));
            for (a in n) r += "; " + a, !0 !== n[a] && (r += "=" + n[a]);
            document.cookie = r
        }
    }

    function a() {
        var e = window.pageYOffset,
            t = window.innerHeight,
            n = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
            o = 0,
            i = 0,
            a = (m = !0, document.getElementById("t-header")),
            r = document.getElementById("t-footer"),
            d = document.getElementById("tildacopy"),
            c = (a && (o = a.offsetHeight), r && (i = r.offsetHeight), d && (i += d.offsetHeight), Math.floor(100 * (e - o + t) / (n - o - i)));
        if (!(c < 10))
            for (var l = [10, 25, 50, 75, 90], s = 0; s < l.length; s++) {
                var u = l[s],
                    p = l.length - 1;
                if (0 === s && u <= c && !w["p" + u]) g.page = "/tilda/scroll/" + u + "/", window.tildastat("pageview"), w["p" + u] = !0;
                else if (u - 1 <= c) {
                    if (0 === w["p" + u]) {
                        g.page = "/tilda/scroll/" + u + "/", window.tildastat("pageview"), w["p" + u] = setTimeout(function() {
                            clearTimeout(w["p" + u]), w["p" + u] = -1
                        }, 5e3);
                        break
                    }
                    if ((s !== p && c < l[s + 1] || s === p) && -1 === w["p" + u]) {
                        w["p" + u] = 0;
                        break
                    }
                }
            }
    }

    function d() {
        var e = 0 === window.location.hostname.indexOf("www.") ? window.location.hostname.slice(4) : window.location.hostname;
        return (e = e.lastIndexOf(".") === e.length - 1 ? e.slice(0, -1) : e) + window.location.pathname
    }

    function c() {
        var e = (navigator.cookieEnabled ? "cT" : "cF") + (navigator.deviceMemory ? "dm" + navigator.deviceMemory : "dm") + (navigator.hardwareConcurrency ? "hc" + navigator.hardwareConcurrency : "hc") + (navigator.languages ? "l" + navigator.languages.join(",") : "l") + (navigator.platform ? "p" + navigator.platform : "p") + (navigator.vendor ? "v" + navigator.vendor : "v") + (navigator.appCodeName ? "a" + navigator.appCodeName : "a") + (navigator.appName ? "n" + navigator.appName : "n");
        if (navigator.plugins) {
            for (var t = "", n = 0; n < navigator.plugins.length; n++) t += navigator.plugins[n].filename;
            e += "pl" + t
        }
        return e = function(t) {
            for (var e = Array(t.length), n = 0; n < t.length; n++) e[n] = n;
            return Array.prototype.map.call(e, function(e) {
                return t.charCodeAt(e).toString(16)
            }).join("")
        }(e = (e += "pr" + window.devicePixelRatio) + ("w" + window.winWidth + "h" + window.winHeight))
    }

    function l() {
        v = n("tildauid"), y = n("tildasid"), y = f ? (v = v || "simple", y || "simple") : (v = v || e(), y || e())
    }

    function s() {
        f || (o("tildauid", v, {
            expires: 7776e3,
            path: "/"
        }), o("tildasid", y, {
            expires: 1800,
            path: "/"
        }))
    }

    function u() {
        if (!("" < g.user_agent && -1 != g.user_agent.indexOf("bot")))
            if ("http:" != window.location.protocol && "https:" != window.location.protocol) console.log("TildaStat: cannot work on local page");
            else {
                var t;
                l(), s(), g.page = d(), g.referrer = document.referrer || "", g.userid = v, g.sessionid = y, g.user_agent = window.navigator.userAgent, g.user_language = window.navigator.userLanguage || window.navigator.language, r && (g.projectid = r.getAttribute("data-tilda-project-id") || "0", g.pageid = r.getAttribute("data-tilda-page-id") || "0", g.pagealias = r.getAttribute("data-tilda-page-alias") || "", g.formskey = r.getAttribute("data-tilda-formskey") || ""), g.params = {};
                try {
                    n = decodeURIComponent(window.location.search)
                } catch (e) {
                    n = window.location.search
                }
                "?" < n && (g.pagequery = n.substring(1).toLowerCase(), ~g.pagequery.indexOf("utm_") && (n = g.pagequery.split("&"), Array.prototype.forEach.call(n, function(e) {
                    1 < (t = e.split("=")).length ? "utm_referrer" !== t[0] || g.referrer && !~g.referrer.indexOf("ohio8.v") ? g.params[t[0]] = t[1] : g.referrer = t[1] : g.params[t[0]] = ""
                })));
                var n = !1;
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (n = !0), g.ismobile = n, document.getElementById("tildastatscript") && (g.tildastatcode = document.getElementById("tildastatscript").key), h) try {
                    var e = function(e) {
                            m = !!e
                        },
                        o = !0;
                    if (!e) throw new Error("no callback given");

                    function i() {
                        o || e(o = !0)
                    }

                    function a() {
                        o && e(o = !1)
                    }
                    "hidden" in document && document.addEventListener("visibilitychange", function() {
                        (document.hidden ? a : i)()
                    }), "mozHidden" in document && document.addEventListener("mozvisibilitychange", function() {
                        (document.mozHidden ? a : i)()
                    }), "webkitHidden" in document && document.addEventListener("webkitvisibilitychange", function() {
                        (document.webkitHidden ? a : i)()
                    }), "msHidden" in document && document.addEventListener("msvisibilitychange", function() {
                        (document.msHidden ? a : i)()
                    }), "onfocusin" in document && (document.onfocusin = i, document.onfocusout = a), window.onpageshow = window.onfocus = i, window.onpagehide = window.onblur = a, document.body.addEventListener("mousewheel", t_throttle(function() {
                        m = !0
                    }, 1e3)), document.body.addEventListener("mousemove", t_throttle(function() {
                        m = !0
                    }, 1e3)), document.body.addEventListener("keypress", t_throttle(function() {
                        m = !0
                    }, 1e3)), document.body.addEventListener("click", t_throttle(function() {
                        m = !0
                    }, 1e3))
                } catch (e) {}
                g.fingerprint = c(), b = !0
            }
    }

    function p() {
        f || (n("tildasid") || "") != g.sessionid && o("tildasid", g.sessionid, {
            expires: 1800,
            path: "/"
        }), "" === g.referrer && (g.referrer = n("previousUrl") || ""), g.tildautm = n("TILDAUTM") || "", g.page || (console.log("TildaStat: page empty"), g.page = d(), window.location.hash && 0 === window.location.hash.indexOf("#!") && (g.page += window.location.hash)), "/" === g.page.substring(0, 1) && (g.page = window.location.hostname + g.page);
        var e = function(e) {
                var t, n = "";
                for (t in e)
                    if ("" != n && "object" != typeof e[t] && (n += "&"), "object" == typeof e[t]) {
                        if (Object.keys(e[t]).length)
                            for (var o in e[t]) n += "&" + t + "[" + o + "]=" + encodeURIComponent(e[t][o])
                    } else n += t + "=" + encodeURIComponent(e[t]);
                return n
            }(g),
            t = new XMLHttpRequest;
        t.open("POST", "https://stat.tildacdn.com/event/", !0), t.withCredentials = !1, t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), t.onerror = function(e) {
            console.error("TildaStat: fail pageview "), console.error(e)
        }, t.timeout = 3e3, t.send(e), g.page && -1 === g.page.indexOf("tilda/scroll") && -1 === g.page.indexOf("tilda/readtime") && -1 === g.page.indexOf("tilda/click") && -1 === g.page.indexOf("tilda/cookieenabled") && (g.referrer = g.page, f || o("previousUrl", g.page, {
            path: "/",
            expires: 1800
        })), g.page = "", window.tildastatload = !0
    }
    window.tildastat = function(e, t) {
        if (!e) return !1;
        if ("create" !== e && !b) return setTimeout(function() {
            window.tildastat(e, t)
        }, 1e3), !1;
        if (t) {
            var n, o = g,
                i = t;
            for (n in i) o[n] = i[n]
        }
        switch (e) {
            case "create":
                u();
                break;
            case "pageview":
                p();
                break;
            case "readtime":
                h && (m && (g.page = "/tilda/readtime/", m = !1, p()), setTimeout(function() {
                    window.tildastat("readtime")
                }, 15e3));
                break;
            case "scroll":
                h && "function" == typeof t_throttle && window.addEventListener("scroll", t_throttle(a, 1e3));
                break;
            case "cookieenabled":
                f = !1, l(), s(), g.userid = v, g.sessionid = y, g.page = "/tilda/cookieenabled/", p();
                break;
            case "fingerprint":
                return c()
        }
    };
    var g = {},
        w = {
            p10: 0,
            p25: 0,
            p50: 0,
            p75: 0,
            p90: 0
        },
        m = !0,
        f = "no" === window.tildastatcookie,
        h = (window.tildastatcookie || r && (f = "no" === r.getAttribute("data-tilda-cookie")), "yes" === window.tildastatcookiegdpr && !1 === f && (f = !0) === n("t_cookiesConsentGiven") && "string" == typeof(i = n("t_cookiesCategories")) && -1 < i.indexOf("analytics") && (f = !1), "yes" === window.tildastatscroll),
        v = (void 0 === window.tildastatscroll && r && (h = "yes" === r.getAttribute("data-tilda-stat-scroll")), ""),
        y = "",
        b = !1,
        t = (window.tildastat("create"), setTimeout(function() {
            window.tildastat("pageview"), window.tildastat("readtime"), window.tildastat("scroll")
        }, 500), setInterval(function() {
            var e;
            ("object" == typeof window.t_jserrors && 0 < window.t_jserrors.length || "object" == typeof window.t_cdnerrors && 0 < window.t_cdnerrors.length || "object" == typeof window.t_ajaxerrors && 0 < window.t_ajaxerrors.length) && "function" != typeof t_errors__sendJSErrors && ((e = document.createElement("script")).src = "https://static.tildacdn.com/js/tilda-errors-1.0.min.js", e.async = !0, document.body.appendChild(e), clearInterval(t))
        }, 2e3)),
        i = document.querySelector("link[rel*='shortcut icon']"),
        k = (k = document.querySelectorAll("link[href*='tilda.ws/project']").length) || document.querySelectorAll("link[href*='ws.tildacdn.com/project']").length,
        x = i ? i.getAttribute("href") : "",
        E = document.querySelector("script[src*='js/tilda-scripts']"),
        E = !!E && -1 === E.src.indexOf("tildacdn");
    E = E || i && -1 !== x.indexOf("static.tildacdn.com") && -1 !== x.indexOf("tilda.") && -1 !== x.indexOf("/tildafavicon.ico") && !document.querySelector("table#allrecords") && !(-1 !== window.location.hostname.indexOf(".tilda.ws")) && !k, void 0 === navigator.sendBeacon || /Bot/i.test(navigator.userAgent) || E || 1 === Math.floor(5 * Math.random()) && (i = function() {
        var e = document.createElement("script");
        e.async = !0, e.type = "text/javascript", e.src = "https://static.tildacdn.com/js/tilda-performance-1.0.min.js", document.body.insertAdjacentElement("beforeend", e)
    }, "complete" === document.readyState ? i() : window.addEventListener("load", i))
}();

function t396_init(recid) {
    var record = document.getElementById("rec" + recid),
        zeroBlock = record ? record.querySelector(".t396") : null,
        artBoard = record ? record.querySelector(".t396__artboard") : null;
    if (artBoard) {
        t396_initTNobj(recid, artBoard);
        var data = "",
            resolution = t396_detectResolution(recid),
            allRecords = document.getElementById("allrecords");
        window.tn_window_width = document.documentElement.clientWidth;
        var artBoardId = "ab" + recid;
        window.tn[artBoardId].scaleFactor = parseFloat((window.tn_window_width / resolution).toFixed(3)), window.tn_scale_factor = parseFloat((window.tn_window_width / resolution).toFixed(3)), t396_switchResolution(recid, resolution), t396_updateTNobj(recid), t396_artboard_build("", recid);
        var isTouchDevice = "ontouchend" in document;
        window.addEventListener("resize", (function() {
            artBoard.classList.add("t396_resizechange"), t396_waitForFinalEvent((function() {
                if (window.t396__isMobile || isTouchDevice) {
                    if (document.documentElement.clientWidth !== window.tn_window_width) {
                        if (!record) return;
                        if (!t396_isBlockVisible(record)) return;
                        t396_doResize(recid), artBoard.classList.remove("t396_resizechange")
                    }
                } else {
                    if (!record) return;
                    if (!t396_isBlockVisible(record)) return;
                    t396_doResize(recid), artBoard.classList.remove("t396_resizechange")
                }
            }), 500, "resizeruniqueid" + recid)
        })), window.addEventListener("orientationchange", (function() {
            t396_waitForFinalEvent((function() {
                record && t396_isBlockVisible(record) && t396_doResize(recid)
            }), 600, "orientationuniqueid" + recid)
        })), window.addEventListener("load", (function() {
            t396_allelems__renderView(artBoard), t396_allgroups__renderView(artBoard);
            var blockOverflow = artBoard ? window.getComputedStyle(artBoard).getPropertyValue("overflow") : "";
            "function" == typeof t_lazyload_update && "auto" === blockOverflow && artBoard && artBoard.addEventListener("scroll", t_throttle((function() {
                var dataLazy = allRecords ? allRecords.getAttribute("data-tilda-lazy") : null;
                "y" !== window.lazy && "yes" !== dataLazy || t_onFuncLoad("t_lazyload_update", (function() {
                    t_lazyload_update()
                }))
            }), 500)), "" !== window.location.hash && "visible" === blockOverflow && (artBoard && (artBoard.style.overflow = "hidden"), setTimeout((function() {
                artBoard && (artBoard.style.overflow = "visible")
            }), 1))
        })), document.querySelector(".t830") && t_onReady((function() {
            var menuClassList, isAllRecContainsClass;
            ["t830__allrecords_padd", "t830__allrecords_padd-small"].some((function(className) {
                return allRecords.classList.contains(className)
            })) ? t396_doResize(recid) : allRecords.addEventListener("allRecPaddingInit", (function() {
                t396_doResize(recid)
            }))
        })), record && zeroBlock && artBoard && "yes" === record.getAttribute("data-connect-with-tab") && zeroBlock.addEventListener("displayChanged", (function() {
            t396_allelems__renderView(artBoard), t396_allgroups__renderView(artBoard), t396_doResize(recid)
        })), setTimeout((function() {
            record && record.closest("#allrecordstable") && zeroBlock && artBoard && zeroBlock.addEventListener("displayChanged", (function() {
                t396_allelems__renderView(artBoard), t396_allgroups__renderView(artBoard), t396_doResize(recid)
            }))
        }), 1e3);
        var isT635Exist = !!document.querySelector(".t635__textholder");
        record && isT635Exist && zeroBlock && artBoard && zeroBlock.addEventListener("animationInited", (function() {
            t396_allelems__renderView(artBoard), t396_allgroups__renderView(artBoard), t396_doResize(recid)
        })), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && zeroBlock && zeroBlock.classList.add("t396_safari");
        var isScaled = "window" === t396_ab__getFieldValue(artBoard, "upscale"),
            isTildaModeEdit = allRecords ? "edit" === allRecords.getAttribute("data-tilda-mode") : null;
        isScaled && !isTildaModeEdit && t_onFuncLoad("t396_scaleBlock", (function() {
            t396_scaleBlock(recid)
        })), isTildaModeEdit || "y" !== t396_ab__getFieldValue(artBoard, "fixed-need-js") || t_onFuncLoad("t396__processFixedArtBoard", (function() {
            t396__processFixedArtBoard(artBoard)
        })), t396__processAbsoluteArtBoard(artBoard), t396__processTopShift(artBoard, recid, !1)
    }
}

function t396_isOnlyScalableBrowser() {
    var isFirefox = -1 !== navigator.userAgent.search("Firefox"),
        isOpera = !!window.opr && !!window.opr.addons || !!window.opera || -1 !== navigator.userAgent.indexOf(" OPR/");
    return isFirefox || isOpera
}

function t396__processTopShift(artBoard, recid, isResize) {
    "function" != typeof window.t396__updateTopShift || "y" !== t396_ab__getFieldValue(artBoard, "shift-processed") && "y" !== t396_ab__getFieldValue(artBoard, "fixed-shift") || t396__updateTopShift(recid, isResize)
}

function t396_doResize(recid) {
    var isOnlyScalable = t396_isOnlyScalableBrowser(),
        record = document.getElementById("rec" + recid),
        allRecords = document.getElementById("allrecords"),
        resolution = t396_detectResolution(recid),
        scaleStyle;
    if (t396_removeElementFromDOM(record ? record.querySelector(".t396__scale-style") : null), isOnlyScalable) {
        var coreElementList = record ? record.querySelectorAll(".tn-molecule, .tn-atom") : [];
        Array.prototype.forEach.call(coreElementList, (function(coreElement) {
            if (!coreElement.classList.contains("tn-atom") || !coreElement.closest(".tn-molecule")) {
                var atomWrapper = coreElement.closest(".tn-atom__scale-wrapper"),
                    atomParent = atomWrapper ? atomWrapper.parentNode : null;
                atomParent && atomParent.removeChild(atomWrapper), atomParent && atomParent.appendChild(coreElement)
            }
        }))
    } else {
        var elements = record ? record.querySelectorAll(".t396__elem") : [];
        Array.prototype.forEach.call(elements, (function(element) {
            element.style.zoom = "";
            var atom = element.querySelector(".tn-atom");
            atom && (atom.style.transformOrigin = "", atom.style.fontSize = "", atom.style.webkitTextSizeAdjust = "")
        }))
    }
    var artBoard = record ? record.querySelector(".t396__artboard") : null,
        artBoardId = "ab" + recid,
        artBoardWidth = artBoard ? artBoard.clientWidth : 0;
    window.tn_window_width = document.documentElement.clientWidth, window.tn[artBoardId].scaleFactor = parseFloat((window.tn_window_width / resolution).toFixed(3)), window.tn_scale_factor = parseFloat((window.tn_window_width / resolution).toFixed(3)), window.tn_scale_offset = (artBoardWidth * window.tn_scale_factor - artBoardWidth) / 2, t396_switchResolution(recid, resolution), t396_updateTNobj(recid), t396_ab__renderView(artBoard);
    var tildaMode = allRecords ? allRecords.getAttribute("data-tilda-mode") : "",
        isScaled, wrappers;
    ("window" === t396_ab__getFieldValue(artBoard, "upscale") && "edit" !== tildaMode && t_onFuncLoad("t396_scaleBlock", (function() {
        t396_scaleBlock(recid)
    })), "edit" !== tildaMode && "y" === t396_ab__getFieldValue(artBoard, "fixed-need-js") && t_onFuncLoad("t396__processFixedArtBoard", (function() {
        t396__processFixedArtBoard(artBoard)
    })), t396__processAbsoluteArtBoard(artBoard), t396__processTopShift(artBoard, recid, !0), t396_allelems__renderView(artBoard), t396_allgroups__renderView(artBoard), artBoard) && [artBoard, artBoard.querySelector(".t396__carrier"), artBoard.querySelector(".t396__filter")].forEach((function(wrapper) {
        wrapper && (wrapper.style.height = "")
    }))
}

function t396__processAbsoluteArtBoard(artBoard) {
    if (artBoard) {
        var currentPos = t396_ab__getFieldValue(artBoard, "pos");
        if ("fixed" !== currentPos) {
            var abNoBgClass = "t396__artboard-fixed-no-bg";
            if ("absolute" === currentPos) {
                var abStyles = getComputedStyle(artBoard),
                    filter = artBoard.querySelector(".t396__filter"),
                    filterHasNotBG = !filter || "none" === getComputedStyle(filter).backgroundImage,
                    abHasNotBG, action = "rgba(0, 0, 0, 0)" === abStyles.backgroundColor && "none" === abStyles.backgroundImage && filterHasNotBG ? "add" : "remove";
                artBoard.classList[action](abNoBgClass)
            } else artBoard.classList.remove(abNoBgClass)
        }
    }
}

function t396_detectResolution(recid) {
    if (recid) {
        var artBoardId = "ab" + recid,
            windowWidth = window.innerWidth,
            resolution;
        return (window.t396__isMobile || window.t396__isIPad) && (windowWidth = document.documentElement.clientWidth), window.tn[artBoardId].screens.forEach((function(screen) {
            windowWidth >= screen && (resolution = screen)
        })), void 0 === resolution && (resolution = window.tn[artBoardId].screens[0]), resolution
    }
}

function t396_initTNobj(recid, artBoard) {
    artBoard && (void 0 === window.tn ? (window.tn = {}, window.tn.ab_fields = ["height", "width", "bgcolor", "bgimg", "bgattachment", "bgposition", "filteropacity", "filtercolor", "filteropacity2", "filtercolor2", "height_vh", "valign"], t396_setScreensTNobj(recid, artBoard)) : t396_setScreensTNobj(recid, artBoard))
}

function t396_setScreensTNobj(recid, artBoard) {
    var artBoardId = "ab" + recid;
    window.tn[artBoardId] = {}, window.tn[artBoardId].screens = [];
    var screens = artBoard.getAttribute("data-artboard-screens");
    screens ? (screens = screens.split(",")).forEach((function(screen) {
        screen = parseInt(screen, 10), window.tn[artBoardId].screens.push(screen)
    })) : window.tn[artBoardId].screens = [320, 480, 640, 960, 1200]
}

function t396_updateTNobj(recid) {
    var artBoardId = "ab" + recid,
        allRecords = document.getElementById("allrecords"),
        allRecPaddingLeft = allRecords && window.getComputedStyle(allRecords).paddingLeft || "0";
    allRecPaddingLeft = parseInt(allRecPaddingLeft, 10);
    var allRecPaddingRight = allRecords && window.getComputedStyle(allRecords).paddingRight || "0";
    allRecPaddingRight = parseInt(allRecPaddingRight, 10), window.zero_window_width_hook && "allrecords" === window.zero_window_width_hook && allRecords ? window.tn.window_width = allRecords.clientWidth - (allRecPaddingLeft + allRecPaddingRight) : window.tn.window_width = document.documentElement.clientWidth, window.tn.window_height = window.t396__isMobile ? document.documentElement.clientHeight : window.innerHeight;
    for (var screensReverse = window.tn[artBoardId].screens.slice().reverse(), i = 0; i < screensReverse.length; i++) window.tn[artBoardId].curResolution === screensReverse[i] && (window.tn[artBoardId].canvas_min_width = screensReverse[i], window.tn[artBoardId].canvas_max_width = 0 === i ? window.tn.window_width : screensReverse[i - 1]);
    window.tn[artBoardId].grid_width = window.tn[artBoardId].canvas_min_width, window.tn[artBoardId].grid_offset_left = (window.tn.window_width - window.tn[artBoardId].grid_width) / 2
}
window.t396__isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.userAgent.indexOf("Instagram") > -1, window.t396__isIPad = "ontouchend" in document && -1 !== navigator.userAgent.indexOf("AppleWebKit");
var t396_waitForFinalEvent = function() {
    var timers = {};
    return function(callback, ms, uniqueId) {
        uniqueId || (uniqueId = "Don't call this twice without a uniqueId"), timers[uniqueId] && clearTimeout(timers[uniqueId]), timers[uniqueId] = setTimeout(callback, ms)
    }
}();

function t396_switchResolution(recid, resolution) {
    var artBoardId = "ab" + recid,
        resolutionMax = window.tn[artBoardId].screens[window.tn[artBoardId].screens.length - 1];
    window.tn[artBoardId].curResolution = resolution, window.tn[artBoardId].curResolution_max = resolutionMax, window.tn.curResolution = resolution, window.tn.curResolution_max = resolutionMax
}

function t396_artboard_build(data, recid) {
    var record = document.getElementById("rec" + recid),
        allRecords = document.getElementById("allrecords"),
        artBoard = record ? record.querySelector(".t396__artboard") : null;
    if (!artBoard) return !1;
    t396_ab__renderView(artBoard), t396_allgroups__renderView(artBoard);
    var event = document.createEvent("Event");
    event.initEvent("artBoardRendered", !0, !0);
    var elements = artBoard.querySelectorAll(".tn-elem");
    Array.prototype.forEach.call(elements, (function(element) {
        var dataType;
        switch (element.getAttribute("data-elem-type")) {
            case "text":
                t396_addText(artBoard, element);
                break;
            case "image":
                t396_addImage(artBoard, element);
                break;
            case "shape":
                t396_addShape(artBoard, element);
                break;
            case "button":
                t396_addButton(artBoard, element);
                break;
            case "video":
                t396_addVideo(artBoard, element);
                break;
            case "html":
                t396_addHtml(artBoard, element);
                break;
            case "tooltip":
                t396_addTooltip(artBoard, element);
                break;
            case "form":
                t396_addForm(artBoard, element, recid);
                break;
            case "gallery":
                t396_addGallery(artBoard, element, recid);
                break;
            case "vector":
                t396_addVector(artBoard, element)
        }
    })), artBoard.classList.remove("rendering"), artBoard.classList.add("rendered"), artBoard.dispatchEvent(event);
    var artBoardOverflow = artBoard.getAttribute("data-artboard-ovrflw"),
        sidebarSticky;
    "visible" !== artBoardOverflow && "visibleX" !== artBoardOverflow || !allRecords || (allRecords.style.overflow = "hidden", document.querySelector(".t951__sidebar_sticky,.t-store__prod-popup__col_fixed") && (allRecords.style.cssText += "overflow:clip;"));
    if ("auto" === artBoardOverflow) {
        var diff = Math.abs(artBoard.offsetHeight - artBoard.clientHeight);
        0 !== diff && (artBoard.style.paddingBottom = diff + "px")
    }
    if (window.t396__isMobile || window.t396__isIPad) {
        var style = document.createElement("style");
        style.textContent = "@media only screen and (min-width:1366px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2) {.t396__carrier {background-attachment:scroll!important;}}", record.insertAdjacentElement("beforeend", style)
    }
}

function t396_ab__renderView(artBoard) {
    if (!artBoard) return !1;
    for (var fields = window.tn.ab_fields, allRecords = document.getElementById("allrecords"), artBoardHeightVH, i = 0; i < fields.length; i++) t396_ab__renderViewOneField(artBoard, fields[i]);
    var artBoardMinHeight = t396_ab__getFieldValue(artBoard, "height"),
        artBoardMaxHeight = t396_ab__getHeight(artBoard),
        recid, currentScaleFactor = t396__getCurrentScaleFactor(artBoard.getAttribute("data-artboard-recid")),
        isTildaModeEdit = !!allRecords && "edit" === allRecords.getAttribute("data-tilda-mode"),
        isScaled = "window" === t396_ab__getFieldValue(artBoard, "upscale"),
        offsetTop, artBoardVerticalAlign;
    if (artBoardHeightVH = t396_ab__getFieldValue(artBoard, "height_vh"), isScaled && !isTildaModeEdit && artBoardHeightVH) var scaledMinHeight = parseInt(artBoardMinHeight, 10) * currentScaleFactor;
    if (artBoardMinHeight === artBoardMaxHeight || scaledMinHeight && scaledMinHeight >= artBoardMaxHeight) offsetTop = 0;
    else switch (t396_ab__getFieldValue(artBoard, "valign")) {
        case "top":
            offsetTop = 0;
            break;
        case "center":
            offsetTop = scaledMinHeight ? parseFloat(((artBoardMaxHeight - scaledMinHeight) / 2).toFixed(1)) : parseFloat(((artBoardMaxHeight - artBoardMinHeight) / 2).toFixed(1));
            break;
        case "bottom":
            offsetTop = scaledMinHeight ? parseFloat((artBoardMaxHeight - scaledMinHeight).toFixed(1)) : parseFloat((artBoardMaxHeight - artBoardMinHeight).toFixed(1));
            break;
        case "stretch":
            offsetTop = 0, artBoardMinHeight = artBoardMaxHeight;
            break;
        default:
            offsetTop = 0
    }
    artBoard.setAttribute("data-artboard-proxy-min-offset-top", offsetTop), artBoard.setAttribute("data-artboard-proxy-min-height", artBoardMinHeight), artBoard.setAttribute("data-artboard-proxy-max-height", artBoardMaxHeight);
    var filter = artBoard.querySelector(".t396__filter"),
        carrier = artBoard.querySelector(".t396__carrier");
    if (artBoardHeightVH = t396_ab__getFieldValue(artBoard, "height_vh"), artBoardHeightVH = parseFloat(artBoardHeightVH), (window.t396__isMobile || window.t396__isIPad) && artBoardHeightVH) {
        var height = document.documentElement.clientHeight * artBoardHeightVH / 100;
        artBoard.style.height = height + "px", filter && (filter.style.height = height + "px"), carrier && (carrier.style.height = height + "px")
    }
}

function t396__getCurrentScaleFactor(recid) {
    var artBoardId = "ab" + recid,
        abScaleFactor;
    return window.tn && window.tn[artBoardId] && window.tn[artBoardId].scaleFactor || window.tn_scale_factor
}

function t396_addText(artBoard, element) {
    if (element = t396_getEl(element)) {
        var fieldsString = "top,left,width,container,axisx,axisy,widthunits,leftunits,topunits";
        element.setAttribute("data-fields", fieldsString), t396_elem__renderView(element)
    }
}

function t396_addImage(artBoard, element) {
    if (element = t396_getEl(element)) {
        var fieldsString = "img,width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits";
        element.setAttribute("data-fields", fieldsString), t396_elem__renderView(element), t396_processElemTransform(element);
        var img = element.querySelector("img");
        img && (img.addEventListener("load", (function() {
            t396_elem__renderViewOneField(element, "top"), img.src && setTimeout((function() {
                t396_elem__renderViewOneField(element, "top")
            }), 2e3)
        })), img.complete && (t396_elem__renderViewOneField(element, "top"), img.src && setTimeout((function() {
            t396_elem__renderViewOneField(element, "top")
        }), 2e3)), img.addEventListener("tuwidget_done", (function() {
            t396_elem__renderViewOneField(element, "top")
        })), t396_changeFilterOnSafari(element))
    }
}

function t396_addShape(artBoard, element) {
    if (element = t396_getEl(element)) {
        var fieldsString = "width,height,top,left,";
        fieldsString += "container,axisx,axisy,widthunits,heightunits,leftunits,topunits", element.setAttribute("data-fields", fieldsString), t396_elem__renderView(element), t396_processElemTransform(element)
    }
}

function t396_processElemTransform(element) {
    var elementStyles = getComputedStyle(element),
        elementHasBlur;
    if (elementStyles.backdropFilter && "none" !== elementStyles.backdropFilter || elementStyles.webkitBackdropFilter && "none" !== elementStyles.webkitBackdropFilter) {
        var atom = element.querySelector(".tn-atom"),
            atomTransform = atom ? window.getComputedStyle(atom).transform : "none";
        "matrix(1, 0, 0, 1, 0, 0)" === atomTransform && (atomTransform = "none"), "none" !== atomTransform && (atom.style.transform = "none", element.style.transform = atomTransform)
    }
}

function t396_changeFilterOnSafari(element) {
    var hasBackdropFilter;
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (t396__checkContainBackdropFilter(element) && "IntersectionObserver" in window)) {
        var atom = element.querySelector(".tn-atom"),
            imageObserver;
        new IntersectionObserver((function(entries, imageObserver) {
            entries.forEach((function(entry) {
                if (entry.isIntersecting) {
                    var target = entry.target;
                    imageObserver.unobserve(target), t396__processBackdropFilterOnImage(element)
                }
            }))
        })).observe(atom)
    }
}

function t396__checkContainBackdropFilter(element) {
    if (!element) return !1;
    var backdropFilter = window.getComputedStyle(element).webkitBackdropFilter;
    if (backdropFilter && "none" !== backdropFilter) return !0;
    var animWrapper = element.querySelector(".tn-atom__sbs-anim-wrapper, .tn-atom__prx-wrapper, .tn-atom__sticky-wrapper");
    if (!animWrapper) return !1;
    var wrapperBackdropFilter = window.getComputedStyle(animWrapper).webkitBackdropFilter;
    return wrapperBackdropFilter && "none" !== wrapperBackdropFilter
}

function t396__processBackdropFilterOnImage(elem) {
    if (elem) {
        var hasSBS = elem.getAttribute("data-animate-sbs-opts"),
            hasExtendedAnimation = elem.getAttribute("data-animate-prx") || elem.getAttribute("data-animate-fix"),
            hasAnimation = hasSBS || hasExtendedAnimation,
            isProcessed = elem.classList.contains("t396__elem--backdrop-filter-img-wrappered");
        hasAnimation && isProcessed || !hasAnimation ? t396__updateBackdropFilterOnImage(elem) : elem.addEventListener("backdropFilterImgWrappered", (function() {
            t396__updateBackdropFilterOnImage(elem)
        }))
    }
}

function t396__updateBackdropFilterOnImage(elem) {
    if (elem) {
        var img = elem.querySelector("img"),
            animWrapper = elem.querySelector(".tn-atom__sbs-anim-wrapper, .tn-atom__prx-wrapper, .tn-atom__sticky-wrapper"),
            targetFilterValue = "";
        animWrapper && (elem = animWrapper, targetFilterValue = window.getComputedStyle(elem).webkitBackdropFilter || ""), elem.style.webkitBackdropFilter = "none", t396_waitForUploadImg(img, (function() {
            elem.style.webkitBackdropFilter = targetFilterValue
        }))
    }
}

function t396_waitForUploadImg(img, cb) {
    if ("y" === window.lazy) var timerID = setTimeout((function() {
        img.classList.contains("loaded") && img.clientWidth && img.src ? (cb(), clearTimeout(timerID)) : t396_waitForUploadImg(img, cb)
    }), 300);
    else cb()
}

function t396_addButton(artBoard, element) {
    if (element = t396_getEl(element)) {
        var fieldsString = "top,left,width,height,container,axisx,axisy,caption,leftunits,topunits";
        return element.setAttribute("data-fields", fieldsString), t396_elem__renderView(element), t396_processElemTransform(element), element
    }
}

function t396_addVideo(artBoard, element) {
    if (element = t396_getEl(element)) {
        var fieldsString = "width,height,top,left,";
        fieldsString += "container,axisx,axisy,widthunits,heightunits,leftunits,topunits", element.setAttribute("data-fields", fieldsString), t396_elem__renderView(element), t_onFuncLoad("t396_initVideo", (function() {
            t396_initVideo(element)
        }))
    }
}

function t396_addHtml(artBoard, element) {
    if (element = t396_getEl(element)) {
        var fieldsString = "width,height,top,left,";
        fieldsString += "container,axisx,axisy,widthunits,heightunits,leftunits,topunits", element.setAttribute("data-fields", fieldsString), t396_elem__renderView(element)
    }
}

function t396_addTooltip(artBoard, element) {
    if (element = t396_getEl(element)) {
        var fieldsString = "width,height,top,left,";
        fieldsString += "container,axisx,axisy,widthunits,heightunits,leftunits,topunits,tipposition", element.setAttribute("data-fields", fieldsString), t396_elem__renderView(element), t_onFuncLoad("t396_initTooltip", (function() {
            t396_initTooltip(element)
        }))
    }
}

function t396_addForm(artBoard, element, recid) {
    if (element = t396_getEl(element)) {
        var fieldsString = "width,top,left,",
            formElems;
        fieldsString += "inputs,container,axisx,axisy,widthunits,leftunits,topunits", element.setAttribute("data-fields", fieldsString);
        var elemid = element.getAttribute("data-elem-id"),
            textarea = element.querySelector(".tn-atom__inputs-textarea");
        textarea && (formElems = textarea.value), t_onFuncLoad("t_zeroForms__init", (function() {
            t396_elem__renderView(element), t_zeroForms__init(recid, elemid, formElems), t396_elem__renderView(element)
        }))
    }
}

function t396_addGallery(artBoard, element, recid) {
    if (element = t396_getEl(element)) {
        var fieldsString = "width,height,top,left,";
        fieldsString += "imgs,container,axisx,axisy,widthunits,heightunits,leftunits,topunits", element.setAttribute("data-fields", fieldsString), t396_elem__renderView(element);
        var elemid = element.getAttribute("data-elem-id");
        t_onFuncLoad("t_zeroGallery__init", (function() {
            t_zeroGallery__init(recid, elemid)
        }))
    }
}

function t396_addVector(artBoard, element) {
    if (element = t396_getEl(element)) {
        var fieldsString = "width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits";
        element.setAttribute("data-fields", fieldsString), t396_elem__renderView(element), t396_processElemTransform(element)
    }
}

function t396_elem__getFieldValue(element, prop) {
    if (element = t396_getEl(element)) {
        if (element.classList.contains("tn-group")) return t396_group__getFieldValue(element, prop);
        var artBoard = element.closest(".t396__artboard"),
            recid = artBoard.getAttribute("data-artboard-recid"),
            artBoardId = "ab" + recid,
            resolution;
        if (void 0 === window.tn[artBoardId]) t396_initTNobj(recid, artBoard), t396_switchResolution(recid, t396_detectResolution(recid));
        var curRes = window.tn[artBoardId].curResolution,
            curResMax = window.tn[artBoardId].curResolution_max,
            screens = window.tn[artBoardId].screens,
            dataField;
        if (!(dataField = curRes === curResMax ? element.getAttribute("data-field-" + prop + "-value") : element.getAttribute("data-field-" + prop + "-res-" + curRes + "-value")) && "" !== dataField)
            for (var i = 0; i < screens.length; i++) {
                var screen = screens[i];
                if (!(screen <= curRes) && (dataField = screen === curResMax ? element.getAttribute("data-field-" + prop + "-value") : element.getAttribute("data-field-" + prop + "-res-" + screen + "-value"))) break
            }
        return dataField
    }
}

function t396_elem__renderView(element) {
    var fields = (element = t396_getEl(element)) ? element.getAttribute("data-fields") : "";
    if (!fields) return !1;
    (fields = fields.split(",")).forEach((function(field) {
        t396_elem__renderViewOneField(element, field)
    })), t396_elem_fixLineHeight(element)
}

function t396_group__renderView(group) {
    var fields = group ? group.getAttribute("data-fields") : "";
    if (!fields) return !1;
    (fields = fields.split(",")).forEach((function(field) {
        var value = t396_group__getFieldValue(group, field);
        switch (field) {
            case "left":
                value = t396_elem__convertPosition__Local__toAbsolute(group, field, value), group.style.left = parseFloat(value).toFixed(1) + "px";
                break;
            case "top":
                value = t396_elem__convertPosition__Local__toAbsolute(group, field, value), group.style.top = parseFloat(value).toFixed(1) + "px"
        }
    }))
}

function t396_elem__renderViewOneField(element, field) {
    if (element = t396_getEl(element)) {
        var allRecords = document.getElementById("allrecords"),
            tildaMode = allRecords ? allRecords.getAttribute("data-tilda-mode") : "",
            artBoard, isScaled = "window" === t396_ab__getFieldValue(element.closest(".t396__artboard"), "upscale");
        if ("yes" !== element.getAttribute("data-scale-off") || !isScaled || "edit" === tildaMode) {
            var value = t396_elem__getFieldValue(element, field),
                elementType, borderWidth, borderStyle, currentValue, slidesMain, slidesImg;
            switch (field) {
                case "left":
                    value = t396_elem__convertPosition__Local__toAbsolute(element, field, value), element.style.left = parseFloat(value).toFixed(1) + "px";
                    break;
                case "top":
                    value = t396_elem__convertPosition__Local__toAbsolute(element, field, value), element.style.top = parseFloat(value).toFixed(1) + "px";
                    break;
                case "width":
                    switch (value = t396_elem__getWidth(element, value), element.style.width = parseFloat(value).toFixed(1) + "px", elementType = element.getAttribute("data-elem-type")) {
                        case "tooltip":
                            var pinSvgIcon = element.querySelectorAll(".tn-atom__pin-icon");
                            Array.prototype.forEach.call(pinSvgIcon, (function(pin) {
                                var pinSize = parseFloat(value).toFixed(1) + "px";
                                pin.style.width = pinSize, pin.style.height = pinSize
                            })), element.style.height = parseInt(value).toFixed(1) + "px";
                            break;
                        case "gallery":
                            borderWidth = t396_elem__getFieldValue(element, "borderwidth"), (borderStyle = t396_elem__getFieldValue(element, "borderstyle")) && borderWidth && "none" !== borderStyle || (borderWidth = 0), value -= 2 * borderWidth, currentValue = Math.round(parseFloat(value)) + "px", slidesMain = element.querySelector(".t-slds__main"), slidesImg = element.querySelectorAll(".tn-atom__slds-img"), element.style.width = currentValue, slidesMain && (slidesMain.style.width = currentValue), Array.prototype.forEach.call(slidesImg, (function(img) {
                                img.style.width = currentValue
                            }))
                    }
                    break;
                case "height":
                    if ("tooltip" === (elementType = element.getAttribute("data-elem-type"))) return;
                    value = t396_elem__getHeight(element, value), element.style.height = parseFloat(value).toFixed(1) + "px", "gallery" === elementType && (borderWidth = t396_elem__getFieldValue(element, "borderwidth"), (borderStyle = t396_elem__getFieldValue(element, "borderstyle")) && borderWidth && "none" !== borderStyle || (borderWidth = 0), value -= 2 * borderWidth, currentValue = Math.round(parseFloat(value)) + "px", slidesMain = element.querySelector(".t-slds__main"), slidesImg = element.querySelectorAll(".tn-atom__slds-img"), element.style.height = currentValue, slidesMain && (slidesMain.style.height = currentValue), Array.prototype.forEach.call(slidesImg, (function(img) {
                        img.style.height = currentValue
                    })));
                    break;
                case "container":
                    t396_elem__renderViewOneField(element, "left"), t396_elem__renderViewOneField(element, "top");
                    break;
                case "inputs":
                    var textArea = element.querySelector(".tn-atom__inputs-textarea");
                    value = textArea ? textArea.value : "";
                    try {
                        t_zeroForms__renderForm(element, value)
                    } catch (err) {}
            }
            "width" !== field && "height" !== field && "fontsize" !== field && "fontfamily" !== field && "letterspacing" !== field && "fontweight" !== field && "img" !== field || (t396_elem__renderViewOneField(element, "left"), t396_elem__renderViewOneField(element, "top"))
        }
    }
}

function t396_elem__convertPosition__Local__toAbsolute(element, field, value) {
    if (element = t396_getEl(element)) {
        var artBoard = element.closest(".t396__artboard"),
            recid = artBoard.getAttribute("data-artboard-recid"),
            artBoardId = "ab" + recid,
            verticalAlignValue = t396_ab__getFieldValue(artBoard, "valign"),
            isScaled = "window" === t396_ab__getFieldValue(artBoard, "upscale"),
            allRecords = document.getElementById("allrecords"),
            tildaMode, isTildaModeEdit = "edit" === (allRecords ? allRecords.getAttribute("data-tilda-mode") : ""),
            isOnlyScalable = t396_isOnlyScalableBrowser(),
            isScaledElement = !isTildaModeEdit && isScaled && isOnlyScalable,
            isZoomedElement = !isTildaModeEdit && isScaled && !isOnlyScalable,
            valueAxisY = t396_elem__getFieldValue(element, "axisy"),
            valueAxisX = t396_elem__getFieldValue(element, "axisx"),
            container = t396_elem__getFieldValue(element, "container"),
            isGroupPhysical = element.classList.contains("tn-group") && "physical" === t396_group__getFieldValue(element, "type"),
            parentGroup = element.parentNode.closest(".tn-group"),
            isParentGroupPhysical = "physical" === t396_group__getFieldValue(parentGroup, "type"),
            elementContainer, offsetLeft, offsetTop, elementWidth, elementContainerWidth, elementHeight, elementContainerHeight;
        isGroupPhysical && (container = "grid"), value = parseInt(value);
        var currentScaleFactor = t396__getCurrentScaleFactor(recid);
        switch (field) {
            case "left":
                var elementLeftUnits;
                if (elementContainer = "grid" === container ? "grid" : "window", offsetLeft = "grid" === container ? window.tn[artBoardId].grid_offset_left : 0, elementContainerWidth = "grid" === container ? window.tn[artBoardId].grid_width : window.tn.window_width, "%" === t396_elem__getFieldValue(element, "leftunits") && (value = t396_roundFloat(elementContainerWidth * value / 100)), isParentGroupPhysical) {
                    var parentGroupLeft = parseInt(t396_group__getFieldValue(parentGroup, "left"), 10),
                        parentGroupLeftUnits;
                    "%" === t396_group__getFieldValue(parentGroup, "leftunits") && (parentGroupLeft = t396_roundFloat(elementContainerWidth * parentGroupLeft / 100)), value -= parentGroupLeft;
                    break
                }!isTildaModeEdit && isScaled ? "grid" === container && isOnlyScalable && (value *= currentScaleFactor) : value = offsetLeft + value, "center" === valueAxisX && (elementWidth = t396_elem__getWidth(element), isScaledElement && "window" !== elementContainer && (elementContainerWidth *= currentScaleFactor, elementWidth *= currentScaleFactor), value = elementContainerWidth / 2 - elementWidth / 2 + value), "right" === valueAxisX && (elementWidth = t396_elem__getWidth(element), isScaledElement && "window" !== elementContainer && (elementContainerWidth *= currentScaleFactor, elementWidth *= currentScaleFactor), value = elementContainerWidth - elementWidth + value), isScaledElement && "window" !== elementContainer && (value += ((elementWidth = t396_elem__getWidth(element)) * currentScaleFactor - elementWidth) / 2);
                break;
            case "top":
                var artBoardParent = element.closest(".t396__artboard"),
                    proxyMinOffsetTop = artBoardParent ? artBoardParent.getAttribute("data-artboard-proxy-min-offset-top") : "0",
                    proxyMinHeight = artBoardParent ? artBoardParent.getAttribute("data-artboard-proxy-min-height") : "0",
                    proxyMaxHeight = artBoardParent ? artBoardParent.getAttribute("data-artboard-proxy-max-height") : "0",
                    getElementHeight = function(element) {
                        var height = t396_elem__getHeight(element);
                        if (element && "image" === element.getAttribute("data-elem-type")) {
                            var width = t396_elem__getWidth(element),
                                fileWidth = t396_elem__getFieldValue(element, "filewidth"),
                                fileHeight = t396_elem__getFieldValue(element, "fileheight"),
                                ratio;
                            if (fileWidth && fileHeight) height = width / (parseInt(fileWidth) / parseInt(fileHeight))
                        }
                        return height
                    },
                    elTopUnits;
                if (elementContainer = "grid" === container ? "grid" : "window", offsetTop = "grid" === container ? parseFloat(proxyMinOffsetTop) : 0, elementContainerHeight = "grid" === container ? parseFloat(proxyMinHeight) : parseFloat(proxyMaxHeight), "%" === t396_elem__getFieldValue(element, "topunits") && (value = elementContainerHeight * (value / 100)), isParentGroupPhysical) {
                    var parentGroupTop = parseInt(t396_group__getFieldValue(parentGroup, "top"), 10),
                        parentGroupTopUnits;
                    "%" === t396_group__getFieldValue(parentGroup, "topunits") && (parentGroupTop = t396_roundFloat(elementContainerHeight * parentGroupTop / 100)), value -= parentGroupTop;
                    break
                }
                isScaledElement && "window" !== elementContainer && (value *= currentScaleFactor), isZoomedElement && "window" !== elementContainer && (offsetTop = "stretch" === verticalAlignValue ? 0 : offsetTop / currentScaleFactor), value = offsetTop + value;
                var artBoardHeightVH = t396_ab__getFieldValue(artBoardParent, "height_vh"),
                    artBoardMinHeight = t396_ab__getFieldValue(artBoardParent, "height"),
                    artBoardMaxHeight = t396_ab__getHeight(artBoardParent);
                if (isScaled && !isTildaModeEdit && artBoardHeightVH) var scaledMinHeight = parseInt(artBoardMinHeight, 10) * currentScaleFactor;
                if ("center" === valueAxisY && (elementHeight = getElementHeight(element), isScaledElement && "window" !== elementContainer && ("stretch" !== verticalAlignValue ? elementContainerHeight *= currentScaleFactor : elementContainerHeight = scaledMinHeight ? scaledMinHeight > artBoardMaxHeight ? scaledMinHeight : artBoardMaxHeight : artBoardParent.clientHeight, elementHeight *= currentScaleFactor), isTildaModeEdit || !isScaled || isOnlyScalable || "window" === elementContainer || "stretch" !== verticalAlignValue || (elementContainerHeight = scaledMinHeight ? scaledMinHeight > artBoardMaxHeight ? scaledMinHeight : artBoardMaxHeight : artBoardParent.clientHeight, elementContainerHeight /= currentScaleFactor), value = elementContainerHeight / 2 - elementHeight / 2 + value), "bottom" === valueAxisY && (elementHeight = getElementHeight(element), isScaledElement && "window" !== elementContainer && ("stretch" !== verticalAlignValue ? elementContainerHeight *= currentScaleFactor : elementContainerHeight = scaledMinHeight ? scaledMinHeight > artBoardMaxHeight ? scaledMinHeight : artBoardMaxHeight : artBoardParent.clientHeight, elementHeight *= currentScaleFactor), isTildaModeEdit || !isScaled || isOnlyScalable || "window" === elementContainer || "stretch" !== verticalAlignValue || (elementContainerHeight = scaledMinHeight ? scaledMinHeight > artBoardMaxHeight ? scaledMinHeight : artBoardMaxHeight : artBoardParent.clientHeight, elementContainerHeight /= currentScaleFactor), value = elementContainerHeight - elementHeight + value), isScaledElement && "window" !== elementContainer) {
                    var scaledDifference = ((elementHeight = getElementHeight(element)) * currentScaleFactor - elementHeight) / 2;
                    value += scaledDifference = Math.round(scaledDifference)
                }
        }
        return value
    }
}

function t396_elem_fixLineHeight(element) {
    var elementType;
    if ("text" === element.getAttribute("data-elem-type")) {
        var atom = element.querySelector(".tn-atom");
        if (atom) {
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                zoom = element.style.zoom;
            atom.style.removeProperty("line-height");
            var lineHeight = parseFloat(window.getComputedStyle(atom).lineHeight);
            isSafari && zoom && (lineHeight = t396_elem__getCorrectStylesForSafari(element, "lineHeight")), lineHeight && !isNaN(lineHeight) && (atom.style.lineHeight = Math.round(lineHeight) + "px")
        }
    }
}

function t396_elem__getCorrectStylesForSafari(element, style) {
    var atom = element.querySelector(".tn-atom"),
        zoom = element.style.zoom,
        cachedTextSizeAdjust = atom.style.webkitTextSizeAdjust,
        cachedFontSize = atom.style.fontSize;
    atom.style.webkitTextSizeAdjust = "none", atom.style.fontSize = "", element.style.zoom = "";
    var value = parseFloat(window.getComputedStyle(atom)[style]);
    return atom.style.webkitTextSizeAdjust = cachedTextSizeAdjust, atom.style.fontSize = cachedFontSize, zoom && (element.style.zoom = zoom), value
}

function t396_ab__getFieldValue(artBoard, prop) {
    if (artBoard) {
        var dataField, recid = artBoard.getAttribute("data-artboard-recid"),
            artBoardId = "ab" + recid,
            resolution;
        if (void 0 === window.tn[artBoardId]) t396_initTNobj(recid, artBoard), t396_switchResolution(recid, t396_detectResolution(recid));
        var curRes = window.tn[artBoardId].curResolution,
            curResMax = window.tn[artBoardId].curResolution_max,
            screens = window.tn[artBoardId].screens;
        if (null === (dataField = curRes === curResMax ? artBoard.getAttribute("data-artboard-" + prop) : artBoard.getAttribute("data-artboard-" + prop + "-res-" + curRes)))
            for (var i = 0; i < screens.length; i++) {
                var screen = screens[i];
                if (!(screen <= curRes) && null !== (dataField = screen === curResMax ? artBoard.getAttribute("data-artboard-" + prop) : artBoard.getAttribute("data-artboard-" + prop + "-res-" + screen))) break
            }
        return dataField
    }
}

function t396_ab__renderViewOneField(artBoard, field) {
    t396_ab__getFieldValue(artBoard, field)
}

function t396_group__getFieldValue(group, field) {
    if (group) {
        var dataField, recid, artBoardId = "ab" + group.closest(".t396__artboard").getAttribute("data-artboard-recid"),
            curRes = window.tn[artBoardId].curResolution,
            curResMax = window.tn[artBoardId].curResolution_max,
            screens = window.tn[artBoardId].screens;
        if (null === (dataField = curRes === curResMax ? group.getAttribute("data-group-" + field + "-value") : group.getAttribute("data-group-" + field + "-res-" + curRes + "-value")))
            for (var i = 0; i < screens.length; i++) {
                var screen = screens[i];
                if (!(screen <= curRes) && null !== (dataField = screen === curResMax ? group.getAttribute("data-group-" + field + "-value") : group.getAttribute("data-group-" + field + "-res-" + screen + "-value"))) break
            }
        return dataField
    }
}

function t396_allgroups__renderView(artBoard) {
    if (artBoard) {
        var groups = artBoard.querySelectorAll(".tn-group"),
            physicalGroups = Array.prototype.filter.call(groups, (function(group) {
                return "physical" === t396_group__getFieldValue(group, "type")
            }));
        Array.prototype.forEach.call(physicalGroups, (function(group) {
            t396_group__renderView(group)
        }))
    }
}

function t396_allelems__renderView(artBoard) {
    if (!artBoard) return !1;
    var ArtBoardelements = artBoard.querySelectorAll(".tn-elem");
    Array.prototype.forEach.call(ArtBoardelements, (function(element) {
        t396_elem__renderView(element)
    }))
}

function t396_ab__getHeight(artBoard, artBoardHeight) {
    artBoardHeight || (artBoardHeight = t396_ab__getFieldValue(artBoard, "height")), artBoardHeight = parseFloat(artBoardHeight);
    var artBoardHeightVH = t396_ab__getFieldValue(artBoard, "height_vh");
    if (artBoardHeightVH && (artBoardHeightVH = parseFloat(artBoardHeightVH), !isNaN(artBoardHeightVH))) {
        var artBoardHeightVHpx = window.tn.window_height * artBoardHeightVH / 100;
        artBoardHeight < artBoardHeightVHpx && (artBoardHeight = artBoardHeightVHpx)
    }
    return artBoardHeight
}

function t396_elem__getWidth(element, value) {
    var artBoard, recid, artBoardId = "ab" + (element = t396_getEl(element)).closest(".t396__artboard").getAttribute("data-artboard-recid"),
        elWidthUnits, elementContainer;
    (value || (value = t396_elem__getFieldValue(element, "width")), value = parseFloat(value), "%" === t396_elem__getFieldValue(element, "widthunits")) && (value = "window" === t396_elem__getFieldValue(element, "container") ? window.tn.window_width * value / 100 : window.tn[artBoardId].grid_width * value / 100);
    return value
}

function t396_elem__getHeight(element, value) {
    element = t396_getEl(element), value || (value = t396_elem__getFieldValue(element, "height")), value = parseFloat(value);
    var elemType = element.getAttribute("data-elem-type");
    if ("shape" === elemType || "video" === elemType || "html" === elemType || "gallery" === elemType || "button" === elemType) {
        var elHeightUnits;
        if ("%" === t396_elem__getFieldValue(element, "heightunits")) {
            var artBoard = element.closest(".t396__artboard"),
                proxyMinHeight = artBoard ? artBoard.getAttribute("data-artboard-proxy-min-height") : "0",
                proxyMaxHeight = artBoard ? artBoard.getAttribute("data-artboard-proxy-max-height") : "0",
                artBoardMinHeight = parseFloat(proxyMinHeight),
                artBoardMaxHeight = parseFloat(proxyMaxHeight),
                elementContainer;
            value = "window" === t396_elem__getFieldValue(element, "container") ? artBoardMaxHeight * (value / 100) : artBoardMinHeight * (value / 100)
        }
    } else {
        if ("text" === elemType) {
            var atom = element.querySelector(".tn-atom");
            atom && (atom.style.lineHeight = "")
        }
        value = element.clientHeight
    }
    return value
}

function t396_roundFloat(n) {
    return n = Math.round(100 * n) / 100
}

function t396_removeElementFromDOM(el) {
    (el = t396_getEl(el)) && el.parentNode && el.parentNode.removeChild(el)
}

function t396_getEl(el) {
    return window.jQuery && el instanceof jQuery ? el.length ? el.get(0) : null : el
}

function t396_isBlockVisible(rec) {
    var windowWidth = window.innerWidth,
        screenMin = rec.getAttribute("data-screen-min"),
        screenMax = rec.getAttribute("data-screen-max");
    return !(screenMin && windowWidth < parseInt(screenMin, 10)) && !(screenMax && windowWidth > parseInt(screenMax, 10))
}