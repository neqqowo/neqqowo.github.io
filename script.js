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
            } screen.width < 980 && n.addEventListener("click", (function(n) {
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
window.isMobile = !1;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.isMobile = !0
}
window.isiOS = !1;
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.isiOS = !0
}
window.isiOSVersion = '';
if (window.isiOS) {
    var version = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    if (version !== null) {
        window.isiOSVersion = [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)]
    }
}
window.isSafari = !1;
if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    window.isSafari = !0
}
window.isSafariVersion = '';
if (window.isSafari) {
    var version = (navigator.appVersion).match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/);
    if (version !== null) {
        window.isSafariVersion = [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)]
    }
}

function t_throttle(fn, threshhold, scope) {
    var last;
    var deferTimer;
    threshhold || (threshhold = 250);
    return function() {
        var context = scope || this;
        var now = +new Date();
        var args = arguments;
        if (last && now < last + threshhold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function() {
                last = now;
                fn.apply(context, args)
            }, threshhold)
        } else {
            last = now;
            fn.apply(context, args)
        }
    }
}

function t602_init(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return;
    var indicator = rec.querySelector('.t602__indicator');
    if (!indicator) return;
    window.addEventListener('scroll', t_throttle(function() {
        var documentHeight = document.body.clientHeight;
        var windowScrollTop = document.documentElement.scrollTop;
        var windowHeight = window.innerHeight;
        var scrollPercent = (windowScrollTop / (documentHeight - windowHeight)) * 100;
        indicator.style.width = scrollPercent + '%'
    }, 100))
}

function t228__init(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return;
    var menuBlock = rec.querySelector('.t228');
    var mobileMenu = rec.querySelector('.t228__mobile');
    var menuSubLinkItems = rec.querySelectorAll('.t-menusub__link-item');
    var rightBtn = rec.querySelector('.t228__right_buttons_but .t-btn');
    var mobileMenuPosition = mobileMenu ? mobileMenu.style.position || window.getComputedStyle(mobileMenu).position : '';
    var mobileMenuDisplay = mobileMenu ? mobileMenu.style.display || window.getComputedStyle(mobileMenu).display : '';
    var isFixedMobileMenu = mobileMenuPosition === 'fixed' && mobileMenuDisplay === 'block';
    var overflowEvent = document.createEvent('Event');
    var noOverflowEvent = document.createEvent('Event');
    overflowEvent.initEvent('t228_overflow', !0, !0);
    noOverflowEvent.initEvent('t228_nooverflow', !0, !0);
    if (menuBlock) {
        menuBlock.addEventListener('t228_overflow', function() {
            t228_checkOverflow(recid)
        });
        menuBlock.addEventListener('t228_nooverflow', function() {
            t228_checkNoOverflow(recid)
        })
    }
    rec.addEventListener('click', function(e) {
        var targetLink = e.target.closest('.t-menusub__target-link');
        if (targetLink && window.isMobile) {
            if (targetLink.classList.contains('t-menusub__target-link_active')) {
                if (menuBlock) menuBlock.dispatchEvent(overflowEvent)
            } else {
                if (menuBlock) menuBlock.dispatchEvent(noOverflowEvent)
            }
        }
        var currentLink = e.target.closest('.t-menu__link-item:not(.tooltipstered):not(.t-menusub__target-link):not(.t794__tm-link):not(.t966__tm-link):not(.t978__tm-link):not(.t978__menu-link)');
        if (currentLink && mobileMenu && isFixedMobileMenu) mobileMenu.click()
    });
    Array.prototype.forEach.call(menuSubLinkItems, function(linkItem) {
        linkItem.addEventListener('click', function() {
            if (mobileMenu && isFixedMobileMenu) mobileMenu.click()
        })
    });
    if (rightBtn) {
        rightBtn.addEventListener('click', function() {
            if (mobileMenu && isFixedMobileMenu) mobileMenu.click()
        })
    }
    if (menuBlock) {
        menuBlock.addEventListener('showME601a', function() {
            var menuLinks = rec.querySelectorAll('.t966__menu-link');
            Array.prototype.forEach.call(menuLinks, function(menuLink) {
                menuLink.addEventListener('click', function() {
                    if (mobileMenu && isFixedMobileMenu) mobileMenu.click()
                })
            })
        })
    }
}

function t228_checkOverflow(recid) {
    var rec = document.getElementById('rec' + recid);
    var menu = rec ? rec.querySelector('.t228') : null;
    if (!menu) return;
    var mobileContainer = document.querySelector('.t228__mobile_container');
    var mobileContainerHeight = t228_getFullHeight(mobileContainer);
    var windowHeight = document.documentElement.clientHeight;
    var menuPosition = menu.style.position || window.getComputedStyle(menu).position;
    if (menuPosition === 'fixed') {
        menu.classList.add('t228__overflow');
        menu.style.setProperty('height', (windowHeight - mobileContainerHeight) + 'px', 'important')
    }
}

function t228_checkNoOverflow(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return !1;
    var menu = rec.querySelector('.t228');
    var menuPosition = menu ? menu.style.position || window.getComputedStyle(menu).position : '';
    if (menuPosition === 'fixed') {
        if (menu) menu.classList.remove('t228__overflow');
        if (menu) menu.style.height = 'auto'
    }
}

function t228_setWidth(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return;
    var menuCenterSideList = rec.querySelectorAll('.t228__centerside');
    Array.prototype.forEach.call(menuCenterSideList, function(menuCenterSide) {
        menuCenterSide.classList.remove('t228__centerside_hidden')
    });
    if (window.innerWidth <= 980) return;
    var menuBlocks = rec.querySelectorAll('.t228');
    Array.prototype.forEach.call(menuBlocks, function(menu) {
        var maxWidth;
        var centerWidth = 0;
        var paddingWidth = 40;
        var leftSide = menu.querySelector('.t228__leftside');
        var rightSide = menu.querySelector('.t228__rightside');
        var menuList = menu.querySelector('.t228__list');
        var mainContainer = menu.querySelector('.t228__maincontainer');
        var leftContainer = menu.querySelector('.t228__leftcontainer');
        var rightContainer = menu.querySelector('.t228__rightcontainer');
        var centerContainer = menu.querySelector('.t228__centercontainer');
        var centerContainerLi = centerContainer ? centerContainer.querySelectorAll('li') : [];
        var leftContainerWidth = t228_getFullWidth(leftContainer);
        var rightContainerWidth = t228_getFullWidth(rightContainer);
        var mainContainerWidth = mainContainer ? mainContainer.offsetWidth : 0;
        var dataAlign = menu.getAttribute('data-menu-items-align');
        var isDataAlignCenter = dataAlign === 'center' || dataAlign === null;
        maxWidth = leftContainerWidth >= rightContainerWidth ? leftContainerWidth : rightContainerWidth;
        maxWidth = Math.ceil(maxWidth);
        Array.prototype.forEach.call(centerContainerLi, function(li) {
            centerWidth += t228_getFullWidth(li)
        });
        if (mainContainerWidth - (maxWidth * 2 + paddingWidth * 2) > centerWidth + 20) {
            if (isDataAlignCenter) {
                if (leftSide) leftSide.style.minWidth = maxWidth + 'px';
                if (rightSide) rightSide.style.minWidth = maxWidth + 'px'
            }
        } else {
            if (leftSide) leftSide.style.minWidth = maxWidth + '';
            if (rightSide) rightSide.style.minWidth = maxWidth + ''
        }
        if (menuList && menuList.classList.contains('t228__list_hidden')) menuList.classList.remove('t228__list_hidden')
    })
}

function t228_getFullWidth(el) {
    if (!el) return 0;
    var marginLeft = el.style.marginLeft || window.getComputedStyle(el).marginLeft;
    var marginRight = el.style.marginRight || window.getComputedStyle(el).marginRight;
    marginLeft = parseInt(marginLeft, 10) || 0;
    marginRight = parseInt(marginRight, 10) || 0;
    return el.offsetWidth + marginLeft + marginRight
}

function t228_getFullHeight(el) {
    if (!el) return 0;
    var marginTop = el.style.marginTop || window.getComputedStyle(el).marginTop;
    var marginBottom = el.style.marginBottom || window.getComputedStyle(el).marginBottom;
    marginTop = parseInt(marginTop, 10) || 0;
    marginBottom = parseInt(marginBottom, 10) || 0;
    return el.offsetHeight + marginTop + marginBottom
}

function t821_init(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return;
    var menu = rec ? rec.querySelector('.t821') : null;
    if (!menu) return;
    var isFixed = menu.style.position === 'fixed' || window.getComputedStyle(menu).position === 'fixed';
    var isRedactorMode = menu.classList.contains('t821_redactor-mode');
    if (!isRedactorMode) {
        menu.classList.remove('t821__beforeready');
        if (isFixed && menu.getAttribute('data-bgopacity-two')) {
            t_onFuncLoad('t_menu__changeBgOpacity', function() {
                t_menu__changeBgOpacity(recid, '.t821');
                window.addEventListener('scroll', t_throttle(function() {
                    t_menu__changeBgOpacity(recid, '.t821')
                }, 200))
            })
        }
        if (isFixed && menu.getAttribute('data-appearoffset')) {
            menu.classList.remove('t821__beforeready');
            t_onFuncLoad('t_menu__showFixedMenu', function() {
                t_menu__showFixedMenu(recid, '.t821');
                window.addEventListener('scroll', t_throttle(function() {
                    t_menu__showFixedMenu(recid, '.t821')
                }, 200))
            })
        }
    }
    t_onFuncLoad('t_menu__setBGcolor', function() {
        t_menu__setBGcolor(recid, '.t821');
        window.addEventListener('resize', t_throttle(function() {
            t_menu__setBGcolor(recid, '.t821')
        }, 200))
    })
}

function t702_initPopup(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec) return;
    var container = rec.querySelector('.t702');
    if (!container) return;
    rec.setAttribute('data-animationappear', 'off');
    rec.setAttribute('data-popup-subscribe-inited', 'y');
    rec.style.opacity = 1;
    var documentBody = document.body;
    var popup = rec.querySelector('.t-popup');
    var popupTooltipHook = popup.getAttribute('data-tooltip-hook');
    var analitics = popup.getAttribute('data-track-popup');
    var popupCloseBtn = popup.querySelector('.t-popup__close');
    var hrefs = rec.querySelectorAll('a[href*="#"]');
    var submitHref = rec.querySelector('.t-submit[href*="#"]');
    if (popupTooltipHook) {
        t_onFuncLoad('t_popup__addAttributesForAccessibility', function() {
            t_popup__addAttributesForAccessibility(popupTooltipHook)
        });
        document.addEventListener('click', function(event) {
            var target = event.target;
            var href = target.closest('a[href$="' + popupTooltipHook + '"]') ? target : !1;
            if (!href) return;
            event.preventDefault();
            t702_showPopup(recId);
            t_onFuncLoad('t_popup__resizePopup', function() {
                t_popup__resizePopup(recId)
            });
            t702__lazyLoad();
            if (analitics && window.Tilda) {
                Tilda.sendEventToStatistics(analitics, popupTooltipHook)
            }
        });
        t_onFuncLoad('t_popup__addClassOnTriggerButton', function() {
            t_popup__addClassOnTriggerButton(document, popupTooltipHook)
        })
    }
    popup.addEventListener('scroll', t_throttle(function() {
        t702__lazyLoad()
    }));
    popup.addEventListener('click', function(event) {
        var windowWithoutScrollBar = window.innerWidth - 17;
        if (event.clientX > windowWithoutScrollBar) return;
        if (event.target === this) t702_closePopup(recId)
    });
    popupCloseBtn.addEventListener('click', function() {
        t702_closePopup(recId)
    });
    if (submitHref) {
        submitHref.addEventListener('click', function() {
            if (documentBody.classList.contains('t-body_scroll-locked')) {
                documentBody.classList.remove('t-body_scroll-locked')
            }
        })
    }
    for (var i = 0; i < hrefs.length; i++) {
        hrefs[i].addEventListener('click', function() {
            var url = this.getAttribute('href');
            if (!url || url.substring(0, 7) != '#price:') {
                t702_closePopup(recId);
                if (!url || url.substring(0, 7) == '#popup:') {
                    setTimeout(function() {
                        if (typeof t_triggerEvent === 'function') t_triggerEvent(document.body, 'popupShowed');
                        documentBody.classList.add('t-body_popupshowed')
                    }, 300)
                }
            }
        })
    }

    function t702_escClosePopup(event) {
        if (event.key === 'Escape') t702_closePopup(recId)
    }
    popup.addEventListener('tildamodal:show' + popupTooltipHook, function() {
        document.addEventListener('keydown', t702_escClosePopup)
    });
    popup.addEventListener('tildamodal:close' + popupTooltipHook, function() {
        document.removeEventListener('keydown', t702_escClosePopup)
    })
}

function t702_lockScroll() {
    var documentBody = document.body;
    if (!documentBody.classList.contains('t-body_scroll-locked')) {
        var bodyScrollTop = typeof window.pageYOffset !== 'undefined' ? window.pageYOffset : (document.documentElement || documentBody.parentNode || documentBody).scrollTop;
        documentBody.classList.add('t-body_scroll-locked');
        documentBody.style.top = '-' + bodyScrollTop + 'px';
        documentBody.setAttribute('data-popup-scrolltop', bodyScrollTop)
    }
}

function t702_unlockScroll() {
    var documentBody = document.body;
    if (documentBody.classList.contains('t-body_scroll-locked')) {
        var bodyScrollTop = documentBody.getAttribute('data-popup-scrolltop');
        documentBody.classList.remove('t-body_scroll-locked');
        documentBody.style.top = null;
        documentBody.removeAttribute('data-popup-scrolltop');
        document.documentElement.scrollTop = parseInt(bodyScrollTop)
    }
}

function t702_showPopup(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec) return;
    var container = rec.querySelector('.t702');
    if (!container) return;
    var windowWidth = window.innerWidth;
    var screenMin = rec.getAttribute('data-screen-min');
    var screenMax = rec.getAttribute('data-screen-max');
    if (screenMin && windowWidth < parseInt(screenMin, 10)) return;
    if (screenMax && windowWidth > parseInt(screenMax, 10)) return;
    var popup = rec.querySelector('.t-popup');
    var popupTooltipHook = popup.getAttribute('data-tooltip-hook');
    var ranges = rec.querySelectorAll('.t-range');
    var documentBody = document.body;
    if (ranges.length) {
        Array.prototype.forEach.call(ranges, function(range) {
            t702__triggerEvent(range, 'popupOpened')
        })
    }
    t_onFuncLoad('t_popup__showPopup', function() {
        t_popup__showPopup(popup)
    });
    if (typeof t_triggerEvent === 'function') t_triggerEvent(document.body, 'popupShowed');
    documentBody.classList.add('t-body_popupshowed');
    documentBody.classList.add('t702__body_popupshowed');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && window.isiOSVersion && window.isiOSVersion[0] === 11) {
        setTimeout(function() {
            t702_lockScroll()
        }, 500)
    }
    t702__lazyLoad();
    t702__triggerEvent(popup, 'tildamodal:show' + popupTooltipHook)
}

function t702_closePopup(recId) {
    var rec = document.getElementById('rec' + recId);
    var popup = rec.querySelector('.t-popup');
    var popupTooltipHook = popup.getAttribute('data-tooltip-hook');
    var popupAll = document.querySelectorAll('.t-popup_show:not(.t-feed__post-popup):not(.t945__popup)');
    if (popupAll.length == 1) {
        if (typeof t_triggerEvent === 'function') t_triggerEvent(document.body, 'popupHidden');
        document.body.classList.remove('t-body_popupshowed')
    } else {
        var newPopup = [];
        for (var i = 0; i < popupAll.length; i++) {
            if (popupAll[i].getAttribute('data-tooltip-hook') === popupTooltipHook) {
                popupAll[i].classList.remove('t-popup_show');
                newPopup.push(popupAll[i])
            }
        }
        if (newPopup.length === popupAll.length) {
            if (typeof t_triggerEvent === 'function') t_triggerEvent(document.body, 'popupHidden');
            document.body.classList.remove('t-body_popupshowed')
        }
    }
    if (typeof t_triggerEvent === 'function') t_triggerEvent(document.body, 'popupHidden');
    popup.classList.remove('t-popup_show');
    document.body.classList.remove('t702__body_popupshowed');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && window.isiOSVersion && window.isiOSVersion[0] === 11) {
        t702_unlockScroll()
    }
    t_onFuncLoad('t_popup__addFocusOnTriggerButton', function() {
        t_popup__addFocusOnTriggerButton()
    });
    setTimeout(function() {
        var popupHide = document.querySelectorAll('.t-popup:not(.t-popup_show)');
        for (var i = 0; i < popupHide.length; i++) {
            popupHide[i].style.display = 'none'
        }
    }, 300);
    t702__triggerEvent(popup, 'tildamodal:close' + popupTooltipHook)
}

function t702_sendPopupEventToStatistics(popupName) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupName.substring(0, 7) == '#popup:') {
        popupName = popupName.substring(7)
    }
    virtPage += popupName;
    virtTitle += popupName;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0)
    } else {
        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {
                    hitType: 'pageview',
                    page: virtPage,
                    title: virtTitle
                })
            }
        }
        if (window.mainMetrika && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {
                title: virtTitle,
                referer: window.location.href
            })
        }
    }
}

function t702_onSuccess(form) {
    t_onFuncLoad('t_forms__onSuccess', function() {
        t_forms__onSuccess(form)
    })
}

function t702__lazyLoad() {
    if (window.lazy === 'y' || document.getElementById('allrecords').getAttribute('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function() {
            t_lazyload_update()
        })
    }
}

function t702__triggerEvent(el, eventName) {
    var event;
    if (typeof window.CustomEvent === 'function') {
        event = new CustomEvent(eventName)
    } else if (document.createEvent) {
        event = document.createEvent('HTMLEvents');
        event.initEvent(eventName, !0, !1)
    } else if (document.createEventObject) {
        event = document.createEventObject();
        event.eventType = eventName
    }
    event.eventName = eventName;
    if (el.dispatchEvent) {
        el.dispatchEvent(event)
    } else if (el.fireEvent) {
        el.fireEvent('on' + event.eventType, event)
    } else if (el[eventName]) {
        el[eventName]()
    } else if (el['on' + eventName]) {
        el['on' + eventName]()
    }
}

function t716_onSuccess(form) {
    t_onFuncLoad('t_forms__onSuccess', function() {
        t_forms__onSuccess(form)
    })
}

function t716_fixcontentheight(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return;
    var cover = rec.querySelector('.t-cover');
    var filter = rec.querySelector('.t-cover__filter');
    var carrier = rec.querySelector('.t-cover__carrier');
    var wrapper = rec.querySelector('.t-cover__wrapper');
    var container = rec.querySelector('.t-cover__container');
    var content = rec.querySelector('div[data-hook-content]');
    var coverHeight = cover ? cover.offsetHeight : 0;
    var contentHeight = content ? content.offsetHeight : 0;
    if (contentHeight > 300 && coverHeight < contentHeight) {
        var youTubeRecommendationsSpace = 120;
        if (contentHeight > 1000) youTubeRecommendationsSpace += 100;
        contentHeight += youTubeRecommendationsSpace;
        console.log('auto correct cover height: ' + contentHeight);
        if (cover) cover.style.height = contentHeight + 'px';
        if (filter) filter.style.height = contentHeight + 'px';
        if (carrier) carrier.style.height = contentHeight + 'px';
        if (wrapper) wrapper.style.height = contentHeight + 'px';
        if (container) container.style.height = contentHeight + 'px';
        if (!window.isMobile) {
            setTimeout(function() {
                var videoBlock = rec.querySelector('.t-cover__carrier');
                if (videoBlock && videoBlock.querySelector('iframe')) {
                    console.log('correct video from cover_fixcontentheight');
                    window.setWidthAndHeightVideo(videoBlock, contentHeight + 'px', 'youtube')
                }
            }, 2000)
        }
    }
}

function t923_init(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec) return;
    var container = rec.querySelector('.t923');
    if (!container) return;
    t923_unifyHeights(recId);
    window.addEventListener('resize', t_throttle(function() {
        t923_unifyHeights(recId)
    }));
    container.addEventListener('displayChanged', function() {
        t923_unifyHeights(recId)
    });
    window.addEventListener('load', function() {
        t923_unifyHeights(recId)
    });
    t_onFuncLoad('t_card__moveClickOnCard', function() {
        t_card__moveClickOnCard(recId)
    });
    t_onFuncLoad('t_card__addFocusOnTab', function() {
        t_card__addFocusOnTab(recId)
    })
}

function t923_unifyHeights(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec) return;
    var container = rec.querySelector('.t923');
    if (!container) return;
    var cols = rec.querySelectorAll('.t923__col');
    var img = container.querySelector('.t923__imgwrapper');
    var imgHeight = img ? img.offsetHeight : 0;
    var maxContentHeight = 0;
    for (var i = 0; i < cols.length; i++) {
        var col = cols[i];
        var colText = col.querySelector('.t923__textwrapper');
        var colBtn = col.querySelectorAll('.t-card__btn-wrapper, .t-card__btntext-wrapper')[0];
        var colContentHeight = colText.offsetHeight + (colBtn ? colBtn.offsetHeight : 0);
        if (colContentHeight > maxContentHeight) maxContentHeight = colContentHeight
    }
    for (var i = 0; i < cols.length; i++) {
        cols[i].querySelector('.t923__content').style.height = 0
    }
    for (var i = 0; i < cols.length; i++) {
        var image = cols[i].querySelector('.t923__imgwrapper');
        var contentHeight = image ? maxContentHeight : maxContentHeight + imgHeight;
        cols[i].querySelector('.t923__content').style.height = contentHeight + 'px'
    }
    t_onFuncLoad('t_slds_updateSlider', function() {
        t_slds_updateSlider(recId)
    })
}

function t746_initPopup(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return !1;
    rec.setAttribute('data-animationappear', 'off');
    rec.style.opacity = '1';
    var popup = rec.querySelector('.t-popup');
    var iframeBody = rec.querySelectorAll('.t746__frame');
    var hook = popup ? popup.getAttribute('data-tooltip-hook') : '';
    var analitics = popup ? popup.getAttribute('data-track-popup') : '';
    t746_imageHeight(recid);
    t746_arrowWidth(recid);
    t746_show(recid);
    t746_hide(recid);
    window.addEventListener('resize', t_throttle(function() {
        t746_arrowWidth(recid)
    }, 200));
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            t_onFuncLoad('t_slds_updateSlider', function() {
                t_slds_updateSlider(recid)
            })
        }, 500)
    });
    if (hook) {
        t_onFuncLoad('t_popup__addAttributesForAccessibility', function() {
            t_popup__addAttributesForAccessibility(hook)
        });
        if (popup) {
            popup.addEventListener('click', function(e) {
                if (e.target === popup) {
                    Array.prototype.forEach.call(iframeBody, function(iframeB) {
                        iframeB.innerHTML = '';
                        iframeB.style.zIndex = ''
                    });
                    t746_closePopup(recid)
                }
            })
        }
        var popupClose = rec.querySelector('.t-popup__close');
        if (popupClose) {
            popupClose.addEventListener('click', function() {
                Array.prototype.forEach.call(iframeBody, function(iframeB) {
                    iframeB.innerHTML = '';
                    iframeB.style.zIndex = ''
                });
                t746_closePopup(recid)
            })
        }
        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 27) {
                Array.prototype.forEach.call(iframeBody, function(iframeB) {
                    iframeB.innerHTML = '';
                    iframeB.style.zIndex = ''
                });
                t746_closePopup(recid)
            }
        });
        var allRec = document.getElementById('allrecords');
        var lazyMode = allRec ? allRec.getAttribute('data-tilda-lazy') : '';
        var isInitSlds = !1;
        document.addEventListener('click', function(e) {
            var href = e.target.closest('a[href="' + hook + '"]');
            if (href) {
                e.preventDefault();
                t746_showPopup(recid);
                if (isInitSlds) {
                    t_onFuncLoad('t_slds_updateSlider', function() {
                        t_slds_updateSlider(recid)
                    })
                } else {
                    t_onFuncLoad('t_sldsInit', function() {
                        t_sldsInit(recid);
                        isInitSlds = !0
                    })
                }
                t746_arrowWidth(recid);
                t_onFuncLoad('t_popup__resizePopup', function() {
                    t_popup__resizePopup(recid)
                });
                if (window.lazy === 'y' || lazyMode === 'yes') {
                    t_onFuncLoad('t_lazyload_update', function() {
                        t_lazyload_update()
                    })
                }
                if (analitics && window.Tilda) {
                    var virtTitle = hook;
                    if (virtTitle.substring(0, 7) === '#popup:') {
                        virtTitle = virtTitle.substring(7)
                    }
                    Tilda.sendEventToStatistics(analitics, virtTitle)
                }
            }
        });
        t_onFuncLoad('t_popup__addClassOnTriggerButton', function() {
            t_popup__addClassOnTriggerButton(document, hook)
        })
    }
}

function t746_showPopup(recid) {
    var rec = document.getElementById('rec' + recid);
    var popup = rec ? rec.querySelector('.t-popup') : null;
    t_onFuncLoad('t_popup__showPopup', function() {
        t_popup__showPopup(popup)
    });
    if (typeof t_triggerEvent === 'function') t_triggerEvent(document.body, 'popupShowed');
    document.body.classList.add('t-body_popupshowed')
}

function t746_closePopup(recid) {
    var rec = document.getElementById('rec' + recid);
    var popup = rec ? rec.querySelector('.t-popup') : null;
    var popupHook = popup ? popup.getAttribute('data-tooltip-hook') : '';
    var popupHookLink = document.querySelectorAll('[data-tooltip-hook="' + popupHook + '"]');
    if (popup && !popup.classList.contains('t-popup_show')) {
        return
    } else if (popup) {
        Array.prototype.forEach.call(popupHookLink, function(popup) {
            popup.classList.remove('t-popup_show')
        })
    }
    if (!document.querySelector('.t-popup_show')) {
        if (typeof t_triggerEvent === 'function') t_triggerEvent(document.body, 'popupHidden');
        document.body.classList.remove('t-body_popupshowed')
    }
    var allCovers = rec.querySelectorAll('.t-bgimg');
    Array.prototype.forEach.call(allCovers, function(cover) {
        if (cover.style.opacity === '0') {
            cover.style.opacity = ''
        }
    });
    t_onFuncLoad('t_popup__addFocusOnTriggerButton', function() {
        t_popup__addFocusOnTriggerButton()
    });
    setTimeout(function() {
        if (popup) popup.style.display = 'none'
    }, 300)
}

function t746_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) === '#popup:') {
        popupname = popupname.substring(7)
    }
    virtPage += popupname;
    virtTitle += popupname;
    if (ga) {
        if (window.mainTracker !== 'tilda') {
            ga('send', {
                'hitType': 'pageview',
                'page': virtPage,
                'title': virtTitle,
            })
        }
    }
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
        window[window.mainMetrika].hit(virtPage, {
            title: virtTitle,
            referer: window.location.href,
        })
    }
}

function t746_show(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return;
    var playBtns = rec ? rec.querySelectorAll('.t746__play') : [];
    Array.prototype.forEach.call(playBtns, function(play) {
        play.addEventListener('click', function() {
            var videoType = play.getAttribute('data-slider-video-type');
            var url;
            var nextEl;
            var prevEl;
            var iframe;
            switch (videoType) {
                case 'youtube':
                    url = play.getAttribute('data-slider-video-url');
                    nextEl = play.nextElementSibling;
                    prevEl = play.previousElementSibling.previousElementSibling;
                    if (nextEl) {
                        iframe = document.createElement('iframe');
                        iframe.classList.add('t746__iframe');
                        iframe.width = '100%';
                        iframe.height = '100%';
                        iframe.src = 'https://www.youtube.com/embed/' + url + '?autoplay=1&enablejsapi=1';
                        iframe.frameBorder = '0';
                        iframe.setAttribute('webkitallowfullscreen', '');
                        iframe.setAttribute('mozallowfullscreen', '');
                        iframe.setAttribute('allowfullscreen', '');
                        iframe.setAttribute('allow', 'autoplay');
                        if (nextEl) nextEl.innerHTML = '';
                        if (nextEl) nextEl.appendChild(iframe)
                    }
                    if (prevEl && prevEl.classList.contains('t-bgimg')) prevEl.style.opacity = '0';
                    break;
                case 'vimeo':
                    url = play.getAttribute('data-slider-video-url');
                    nextEl = play.nextElementSibling;
                    prevEl = play.previousElementSibling.previousElementSibling;
                    var idMatch = /vimeo[^/]*\/(\d+)\/?(\w*)\/?/i.exec(url);
                    var id = idMatch ? idMatch[1] : null;
                    var hash = idMatch ? '?h=' + idMatch[2] : null;
                    if (nextEl) {
                        iframe = document.createElement('iframe');
                        iframe.classList.add('t746__iframe');
                        iframe.width = '100%';
                        iframe.height = '100%';
                        iframe.src = 'https://player.vimeo.com/video/' + id + hash + '?autoplay=1&amp;api=1';
                        iframe.frameBorder = '0';
                        iframe.setAttribute('allowfullscreen', '');
                        iframe.setAttribute('allow', 'autoplay; fullscreen');
                        if (nextEl) nextEl.innerHTML = '';
                        if (nextEl) nextEl.appendChild(iframe)
                    }
                    if (prevEl && prevEl.classList.contains('t-bgimg')) prevEl.style.opacity = '0';
                    break
            }
            if (nextEl) nextEl.style.zIndex = '3'
        })
    })
}

function t746_hide(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return;
    var popupBody = rec ? rec.querySelector('.t746__frame') : null;
    rec.addEventListener('updateSlider', function() {
        popupBody.innerHTML = '';
        popupBody.style.zIndex = ''
    })
}

function t746_imageHeight(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return;
    var images = rec.querySelectorAll('.t746__separator');
    Array.prototype.forEach.call(images, function(img) {
        var width = img.getAttribute('data-slider-image-width') || 0;
        var height = img.getAttribute('data-slider-image-height') || 0;
        var ratio = height / width;
        var padding = ratio * 100;
        img.style.paddingBottom = padding + '%'
    })
}

function t746_arrowWidth(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return;
    var arrows = rec ? rec.querySelectorAll('.t-slds__arrow_wrapper') : [];
    var slide = rec ? rec.querySelector('.t-slds__wrapper') : null;
    var slideWidth = slide ? slide.offsetWidth : 0;
    var arrowWidth = window.innerWidth - slideWidth;
    Array.prototype.forEach.call(arrows, function(arrow) {
        var arrowContainer = arrow ? arrow.closest('.t-slds__arrow_container') : null;
        var isArrowNearPic = arrowContainer ? arrowContainer.classList.contains('t-slds__arrow-nearpic') : !1;
        if (window.innerWidth > 960 && isArrowNearPic) {
            arrow.style.width = (arrowWidth / 2) + 'px'
        } else {
            arrow.style.width = ''
        }
    })
}
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector
}
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        while (el && el.nodeType === 1) {
            if (Element.prototype.matches.call(el, s)) {
                return el
            }
            el = el.parentElement || el.parentNode
        }
        return null
    }
}

function t533_equalHeight(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec) return;
    var container = rec.querySelector('.t533');
    if (!container) return;
    var rows = rec.querySelectorAll('.t533__row');
    var wrapTexts = rec.querySelectorAll('.t533__textwrapper');
    container.style.visibility = 'visible';
    for (var i = 0; i < wrapTexts.length; i++) {
        wrapTexts[i].style.height = 'auto'
    }
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var heightBox = 0;
        var rowWrapTexts = row.querySelectorAll('.t533__textwrapper');
        for (var j = 0; j < rowWrapTexts.length; j++) {
            var element = rowWrapTexts[j];
            var styleElement = getComputedStyle(element, null);
            var paddingTop = parseInt(styleElement.paddingTop.replace('px', '')) || 0;
            var paddingBottom = parseInt(styleElement.paddingBottom.replace('px', '')) || 0;
            var elementHeight = element.clientHeight - (paddingTop + paddingBottom);
            if (elementHeight > heightBox) heightBox = elementHeight
        }
        for (var j = 0; j < rowWrapTexts.length; j++) {
            var element = rowWrapTexts[j];
            if (window.innerWidth >= 960 && element.offsetParent !== null) {
                element.style.height = heightBox + 'px'
            } else {
                element.style.height = 'auto'
            }
        }
    }
}

function t142_checkSize(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec) return;
    var button = rec.querySelector('.t142__submit');
    if (!button) return;
    var buttonStyle = getComputedStyle(button, null);
    var buttonPaddingTop = parseInt(buttonStyle.paddingTop) || 0;
    var buttonPaddingBottom = parseInt(buttonStyle.paddingBottom) || 0;
    var buttonHeight = button.clientHeight - (buttonPaddingTop + buttonPaddingBottom) + 5;
    var textHeight = button.scrollHeight;
    if (buttonHeight < textHeight) {
        button.classList.add('t142__submit-overflowed')
    }
}

function t604_init(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return;
    t604_imageHeight(recid);
    t604_arrowWidth(recid);
    t604_show(recid);
    t604_hide(recid);
    window.addEventListener('resize', t_throttle(function() {
        t_onFuncLoad('t_slds_updateSlider', function() {
            t_slds_updateSlider(recid)
        });
        t604_arrowWidth(recid)
    }));
    if (typeof jQuery !== 'undefined') {
        $(rec).find('.t604').bind('displayChanged', function() {
            t_onFuncLoad('t_slds_updateSlider', function() {
                t_slds_updateSlider(recid)
            });
            t604_arrowWidth(recid)
        })
    } else {
        var currentBlock = rec.querySelector('.t604');
        if (currentBlock) {
            currentBlock.addEventListener('displayChanged', function() {
                t_onFuncLoad('t_slds_updateSlider', function() {
                    t_slds_updateSlider(recid)
                });
                t604_arrowWidth(recid)
            })
        }
    }
}

function t604_show(recid) {
    var rec = document.getElementById('rec' + recid);
    var playBtns = rec.querySelectorAll('.t604__play');
    Array.prototype.forEach.call(playBtns, function(play) {
        play.addEventListener('click', function() {
            var parent = play.parentElement;
            var videoBg = parent ? parent.querySelector('.t-slds__bgimg') : null;
            if (videoBg) videoBg.style.opacity = '0';
            var sliderVideo = play.getAttribute('data-slider-video-type');
            var url = play.getAttribute('data-slider-video-url');
            var nextEl = play.nextElementSibling;
            if (nextEl) nextEl.style.zIndex = '3';
            var iframe;
            switch (sliderVideo) {
                case 'youtube':
                    iframe = document.createElement('iframe');
                    iframe.classList.add('t604__iframe');
                    iframe.width = '100%';
                    iframe.height = '100%';
                    iframe.src = 'https://www.youtube.com/embed/' + url + '?autoplay=1&enablejsapi=1';
                    iframe.frameBorder = '0';
                    iframe.setAttribute('webkitallowfullscreen', '');
                    iframe.setAttribute('mozallowfullscreen', '');
                    iframe.setAttribute('allowfullscreen', '');
                    iframe.setAttribute('allow', 'autoplay');
                    if (nextEl) nextEl.innerHTML = '';
                    if (nextEl) nextEl.appendChild(iframe);
                    break;
                case 'vimeo':
                    var idMatch = /vimeo[^/]*\/(\d+)\/?(\w*)\/?/i.exec(url);
                    var id = idMatch ? idMatch[1] : null;
                    var hash = idMatch ? '?h=' + idMatch[2] : null;
                    iframe = document.createElement('iframe');
                    iframe.classList.add('t604__iframe');
                    iframe.width = '100%';
                    iframe.height = '100%';
                    iframe.src = 'https://player.vimeo.com/video/' + id + hash + '?autoplay=1&amp;api=1';
                    iframe.frameBorder = '0';
                    iframe.setAttribute('webkitallowfullscreen', '');
                    iframe.setAttribute('mozallowfullscreen', '');
                    iframe.setAttribute('allowfullscreen', '');
                    if (nextEl) nextEl.innerHTML = '';
                    if (nextEl) nextEl.appendChild(iframe);
                    break
            }
        })
    })
}

function t604_hide(recid) {
    var rec = document.getElementById('rec' + recid);
    var frames = rec.querySelectorAll('.t604__frame');
    rec.addEventListener('updateSlider', function() {
        Array.prototype.forEach.call(frames, function(frame) {
            frame.innerHTML = '';
            frame.style.zIndex = ''
        })
    })
}

function t604_imageHeight(recid) {
    var rec = document.getElementById('rec' + recid);
    var images = rec.querySelectorAll('.t604__separator');
    Array.prototype.forEach.call(images, function(image) {
        var imgHeight = image.getAttribute('data-slider-image-height');
        var imgWidth = image.getAttribute('data-slider-image-width');
        var imgRatio = imgHeight / imgWidth;
        var imgPadding = imgRatio * 100;
        image.style.paddingBottom = imgPadding + '%'
    })
}

function t604_arrowWidth(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return;
    var arrows = rec.querySelectorAll('.t-slds__arrow_wrapper');
    var slide = rec.querySelector('.t-slds__wrapper');
    var slideWidth = slide ? slide.offsetWidth : 0;
    if (slide && slideWidth === 0) {
        t_onFuncLoad('t_slds_SliderWidth', function() {
            setTimeout(function() {
                slideWidth = slide.offsetWidth;
                t604__updateArrowWidth(slideWidth, arrows)
            }, 300)
        })
    } else {
        t604__updateArrowWidth(slideWidth, arrows)
    }
}

function t604__updateArrowWidth(slideWidth, arrows) {
    var calcArrowWidth = window.innerWidth - slideWidth;
    var arrowWidth = window.innerWidth > 960 ? (calcArrowWidth / 2) + 'px' : '';
    if (arrowWidth !== '0px' && arrowWidth !== '') {
        Array.prototype.forEach.call(arrows, function(arrow) {
            arrow.style.width = arrowWidth
        })
    }
}

function t604__UpdateSliderArrowsHeight(recid) {
    var sliderRec = document.getElementById('rec' + recid);
    if (!sliderRec) return;
    var activeItem = sliderRec.querySelector('.t-slds__item_active');
    if (activeItem) {
        var separator = activeItem.querySelector('.t604__separator');
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        var offsetForVideoBtns = 0;
        var isVideo = activeItem.querySelector('[data-slider-video-type]');
        if (isVideo && isMobile) offsetForVideoBtns = 40;
        var itemPaddingTop = parseInt(getComputedStyle(activeItem).paddingTop) || 0;
        var itemPaddingBottom = parseInt(getComputedStyle(activeItem).paddingBottom) || 0;
        var height = (itemPaddingTop + itemPaddingBottom) - offsetForVideoBtns;
        if (separator && separator.hasAttribute('data-slider-image-height') && activeItem.clientHeight === 0) {
            height = parseInt(separator.getAttribute('data-slider-image-height')) - height
        } else {
            height = activeItem.clientHeight - height
        }
    }
    var arrowWrappers = sliderRec.querySelectorAll('.t-slds__arrow_wrapper');
    if (height && arrowWrappers.length > 0) {
        Array.prototype.forEach.call(arrowWrappers, function(arrowWrapper) {
            arrowWrapper.style.height = height + 'px';
            var arrow = arrowWrapper.querySelector('.t-slds__arrow');
            if (arrow) arrow.style.marginTop = offsetForVideoBtns / 2 + 'px'
        })
    }
}

function t491_init(recId) {
    t_onFuncLoad('t_card__moveClickOnCard', function() {
        t_card__moveClickOnCard(recId)
    });
    t_onFuncLoad('t_card__addFocusOnTab', function() {
        t_card__addFocusOnTab(recId)
    })
}

function t452_scrollToTop() {
    var duration = 700;
    var difference = window.pageYOffset;
    var step = 10 * difference / duration;
    var timer = setInterval(function() {
        difference -= step;
        window.scrollTo(0, difference);
        document.body.setAttribute('data-scrollable', 'true');
        if (window.pageYOffset === 0) {
            document.body.removeAttribute('data-scrollable');
            clearInterval(timer)
        }
    }, 10)
}

function t190_init(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec) return;
    rec.addEventListener('click', function(e) {
        if (e.target.closest('.t190__button')) {
            t190_scrollToTop()
        }
    })
}

function t190_scrollToTop() {
    var duration = 700;
    var start = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    var change = 0 - start;
    var currentTime = 0;
    var increment = 16;
    document.body.setAttribute('data-scrollable', 'true');
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
        t190__animateScrollPolyfill(0)
    } else {
        t190__animateScroll()
    }

    function t190__easeInOutCubic(currentTime) {
        if ((currentTime /= duration / 2) < 1) {
            return (change / 2) * currentTime * currentTime * currentTime + start
        } else {
            return (change / 2) * ((currentTime -= 2) * currentTime * currentTime + 2) + start
        }
    }

    function t190__animateScroll() {
        currentTime += increment;
        window.scrollTo(0, t190__easeInOutCubic(currentTime));
        if (currentTime < duration) {
            setTimeout(t190__animateScroll, increment)
        } else {
            document.body.removeAttribute('data-scrollable')
        }
    }
}

function t190__animateScrollPolyfill(target) {
    var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    var bottomViewportPoint = documentHeight - document.documentElement.clientHeight;
    if (target > bottomViewportPoint) target = bottomViewportPoint;
    if (target === window.pageYOffset) return !1;
    var currentPosition = window.pageYOffset;
    var step = (target - currentPosition) / 30;
    var difference = window.pageYOffset;
    var timerID = setInterval(function() {
        difference += step;
        window.scrollTo(0, difference);
        document.body.setAttribute('data-scrollable', 'true');
        if ((target - currentPosition < 0 && window.pageYOffset <= target) || (target - currentPosition > 0 && window.pageYOffset >= target)) {
            clearInterval(timerID);
            document.body.removeAttribute('data-scrollable')
        }
    }, 10)
}

function t898_init(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec) return;
    var container = rec.querySelector('.t898');
    if (!container) return;
    rec.setAttribute('data-animationappear', 'off');
    rec.style.opacity = 1;
    var whatsApp = rec.querySelector('.t898__icon-whatsapp_wrapper');
    if (whatsApp) {
        var whatsAppHref = whatsApp.getAttribute('href');
        if (whatsAppHref && (whatsAppHref.indexOf('whatsapp://') > -1 || whatsAppHref.indexOf('wa.me') > -1)) {
            t898_removeExtraSymbolsFromWhatsApp(whatsApp, whatsAppHref)
        }
    }
    if (window.lazy === 'y' || document.getElementById('allrecords').getAttribute('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function() {
            t_lazyload_update()
        })
    }
}

function t898_removeExtraSymbolsFromWhatsApp(whatsApp, whatsAppHref) {
    if (whatsAppHref && whatsAppHref.indexOf('?text=') !== -1) {
        var whatsAppHrefArr = whatsAppHref.split('?text=');
        whatsAppHrefArr[0] = whatsAppHrefArr[0].replace(/[\(\)+-]/g, '');
        whatsAppHref = whatsAppHrefArr[0] + '?text=' + whatsAppHrefArr[1]
    } else {
        whatsAppHref = whatsAppHref.replace(/[\(\)+-]/, '')
    }
    whatsApp.setAttribute('href', whatsAppHref)
}