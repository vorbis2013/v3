function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function waitForElm(t) {
  return new Promise((e) => {
    if (document.querySelector(t)) return e(document.querySelector(t));
    const n = new MutationObserver((a) => {
      document.querySelector(t) &&
        (e(document.querySelector(t)), n.disconnect());
    });
    n.observe(document.body, {
      childList: !0,
      subtree: !0
    });
  });
}

const waitForElm2 = async (t) => {
  for (; null === document.querySelector(t); )
    await new Promise((t) => requestAnimationFrame(t));

  return document.querySelector(t);
};

function softChangeUrl(t, e = !1) {
  try {
    1 == e
      ? window.history.replaceState(null, "", t)
      : window.history.pushState(null, "", t);
  } catch (e) {
    reportError("Failed to change URL to " + t);
  }
}

function addStyle(t) {
  const e = document.createElement("style");
  (e.textContent = t), document.head.append(e);
}

function v3playerQualityArrow() {
  document
    .querySelector(".ytp-settings-button")
    .addEventListener("click", function () {
      var t = document.querySelector(
        ".ytp-menuitem:last-child > .ytp-menuitem-content > div > span:last-of-type"
      ).innerText;
      4 == t.length &&
        (t.includes("720p")
          ? document
              .querySelector(
                ".ytp-menuitem:last-child > .ytp-menuitem-content > div > span:last-of-type"
              )
              .setAttribute("hfrval", "720plfr")
          : document
              .querySelector(
                ".ytp-menuitem:last-child > .ytp-menuitem-content > div > span:last-of-type"
              )
              .setAttribute("hfrval", "lowlfr")),
        6 == t.length &&
          document
            .querySelector(
              ".ytp-menuitem:last-child > .ytp-menuitem-content > div > span:last-of-type"
            )
            .setAttribute("hfrval", "720phfr"),
        8 == t.length &&
          document
            .querySelector(
              ".ytp-menuitem:last-child > .ytp-menuitem-content > div > span:last-of-type"
            )
            .setAttribute("hfrval", "highlfr"),
        t.length > 8 &&
          document
            .querySelector(
              ".ytp-menuitem:last-child > .ytp-menuitem-content > div > span:last-of-type"
            )
            .setAttribute("hfrval", "highhfr");
    });
}

function changeFavicon(t) {
  var e = document.createElement("link"),
    n = document.getElementById("dynamic-favicon");
  (e.id = "dynamic-favicon"),
    (e.rel = "shortcut icon"),
    (e.href = t),
    n && document.head.removeChild(n),
    document.head.appendChild(e);
}

function goToPanel(t) {
  document.querySelector("#action-panel-share[b-pl]") &&
    document.querySelector("#action-panel-share").removeAttribute("b-pl"),
    Array.prototype.indexOf.call(
      document.querySelector("#watch7-action-panels").children,
      document.querySelector(".action-panel-content:not(.hid)")
    ) +
      1 !=
      Array.prototype.indexOf.call(
        document.querySelector("#watch7-action-panels").children,
        document.querySelector(".action-panel-content:nth-of-type(" + t + ")")
      ) +
        1 &&
      (document
        .querySelector("#watch7-action-panels")
        .setAttribute(
          "style",
          "height: " +
            document.querySelector(".action-panel-content:not(.hid)")
              .offsetHeight +
            "px;"
        ),
      document
        .querySelector("#watch7-action-panels")
        .classList.add("action-panel-transition"),
      Array.prototype.indexOf.call(
        document.querySelector("#watch7-action-panels").children,
        document.querySelector(".action-panel-content:not(.hid)")
      ) +
        1 <
      Array.prototype.indexOf.call(
        document.querySelector("#watch7-action-panels").children,
        document.querySelector(".action-panel-content:nth-of-type(" + t + ")")
      ) +
        1
        ? (document
            .querySelector(
              "#watch7-action-panels > div.action-panel-content:not(.hid)"
            )
            .classList.add("action-panel-left"),
          document
            .querySelector(
              "#watch7-action-panels > div.action-panel-content:not(.hid)"
            )
            .setAttribute("style", "left: 0px;"),
          document
            .querySelector(
              "#watch7-action-panels > div.action-panel-content:nth-of-type(" +
                t +
                ")"
            )
            .classList.remove("hid"),
          document
            .querySelector(
              "#watch7-action-panels > div.action-panel-content:nth-of-type(" +
                t +
                ")"
            )
            .classList.add("action-panel-center"),
          document
            .querySelector(
              "#watch7-action-panels > div.action-panel-content:nth-of-type(" +
                t +
                ")"
            )
            .setAttribute("style", "left: 100%;"),
          setTimeout(function () {
            document
              .querySelector(
                "#watch7-secondary-actions > span > .yt-uix-button-toggled"
              )
              .classList.remove("yt-uix-button-toggled"),
              document
                .querySelector(
                  "#watch7-secondary-actions > span:nth-of-type(" +
                    t +
                    ") > button"
                )
                .classList.add("yt-uix-button-toggled"),
              document
                .querySelector(
                  "#watch7-action-panels > div.action-panel-content:not(.hid)"
                )
                .removeAttribute("style"),
              document
                .querySelector(
                  "#watch7-action-panels > div.action-panel-content:nth-of-type(" +
                    t +
                    ")"
                )
                .removeAttribute("style");
          }, 10),
          setTimeout(function () {
            document
              .querySelector(
                "#watch7-action-panels > div.action-panel-content.action-panel-center"
              )
              .classList.remove("hid"),
              document
                .querySelector(
                  "#watch7-action-panels > div.action-panel-content.action-panel-left"
                )
                .classList.add("hid"),
              document
                .querySelector("#watch7-action-panels")
                .classList.remove("action-panel-transition"),
              document
                .querySelector(
                  "#watch7-action-panels > div.action-panel-content.action-panel-left"
                )
                .classList.remove("action-panel-left"),
              document
                .querySelector(
                  "#watch7-action-panels > div.action-panel-content.action-panel-center"
                )
                .classList.remove("action-panel-center"),
              document
                .querySelector("#watch7-action-panels")
                .removeAttribute("style");
          }, 260))
        : (document
            .querySelector(
              "#watch7-action-panels > div.action-panel-content:not(.hid)"
            )
            .classList.add("action-panel-right"),
          document
            .querySelector(
              "#watch7-action-panels > div.action-panel-content:not(.hid)"
            )
            .setAttribute("style", "left: 0px;"),
          document
            .querySelector(
              "#watch7-action-panels > div.action-panel-content:nth-of-type(" +
                t +
                ")"
            )
            .classList.remove("hid"),
          document
            .querySelector(
              "#watch7-action-panels > div.action-panel-content:nth-of-type(" +
                t +
                ")"
            )
            .classList.add("action-panel-center"),
          document
            .querySelector(
              "#watch7-action-panels > div.action-panel-content:nth-of-type(" +
                t +
                ")"
            )
            .setAttribute("style", "left: -100%;"),
          setTimeout(function () {
            document
              .querySelector(
                "#watch7-secondary-actions > span > .yt-uix-button-toggled"
              )
              .classList.remove("yt-uix-button-toggled"),
              document
                .querySelector(
                  "#watch7-secondary-actions > span:nth-of-type(" +
                    t +
                    ") > button"
                )
                .classList.add("yt-uix-button-toggled"),
              document
                .querySelector(
                  '#watch7-action-panels > div.action-panel-content:not(.hid)[style="left: 0px;"]'
                )
                .removeAttribute("style"),
              document
                .querySelector(
                  "#watch7-action-panels > div.action-panel-content:nth-of-type(" +
                    t +
                    ")"
                )
                .removeAttribute("style");
          }, 10),
          setTimeout(function () {
            document
              .querySelector(
                "#watch7-action-panels > div.action-panel-content.action-panel-center"
              )
              .classList.remove("hid"),
              document
                .querySelector(
                  "#watch7-action-panels > div.action-panel-content.action-panel-right"
                )
                .classList.add("hid"),
              document
                .querySelector("#watch7-action-panels")
                .classList.remove("action-panel-transition"),
              document
                .querySelector(
                  "#watch7-action-panels > div.action-panel-content.action-panel-right"
                )
                .classList.remove("action-panel-right"),
              document
                .querySelector(
                  "#watch7-action-panels > div.action-panel-content.action-panel-center"
                )
                .classList.remove("action-panel-center"),
              document
                .querySelector("#watch7-action-panels")
                .removeAttribute("style");
          }, 260)));
}

var wasshareajaxcreated = !1;

function craftShareAjax() {
  var t =
      "https://youtu.be/" +
      window.location.href.split("?v=")[1].split("&")[0] +
      "&feature=v3core",
    e =
      '\n      <div id="watch-actions-share-loading" class="hid" style="display: none;">\n    <div class="action-panel-loading">\n        <p class="yt-spinner">\n      <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img yt-sprite" alt="Loading icon">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n    </div>\n  </div>\n  <div id="watch-actions-share-panel">  <div class="share-panel">\n      \n\n\n        <div id="share-panel-buttons" class="share-panel-buttons">\n    <span class="share-panel-main-buttons yt-uix-button-group" data-button-toggle-group="share-panels">\n<button class="share-panel-services yt-uix-button-toggled yt-uix-button yt-uix-button-text yt-uix-button-size-default" type="button" onclick=";return false;" data-button-toggle="true" role="button"><span class="yt-uix-button-content">' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_SHARE +
      '</span></button><button class="share-panel-embed yt-uix-button yt-uix-button-text yt-uix-button-size-default" type="button" onclick=";return false;" data-button-toggle="true" role="button"><span class="yt-uix-button-content">' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_EMBED +
      '</span></button><button class="share-panel-email yt-uix-button yt-uix-button-text yt-uix-button-size-default" type="button" onclick=";return false;" data-button-toggle="true" role="button"><span class="yt-uix-button-content">' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_EMAIL +
      '</span></button>    </span>\n  </div>\n\n      <div class="share-panel-services-container">\n        <div id="share-services-container" class="clearfix">\n            <div class="share-panel-services ">\n    <ul class="share-group ytg-box">\n          <li>\n    <button onclick="yt.window.popup(&quot;https://vkontakte.ru/share.php?url=http%3A//www.youtube.com/attribution_link%3Fa%3DcdX5lNZe0pc%26u%3D%252Fwatch%253Fv%253DjNQXAC9IVRw%2526feature%253Dshare&quot;, {\'height\': 650,\'width\': 1024,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=36&name=VKONTAKTE&feature=share&v=jNQXAC9IVRw&attribution_tag=cdX5lNZe0pc&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&quot;);return false;" data-service-name="VKONTAKTE" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'VKONTAKTE" class="yt-uix-tooltip share-service-button share-vkontakte-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'VKONTAKTE">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-vkontakte">\n      <span>VKONTAKTE</span>\n    </button>\n  </li>\n\n          <li>\n    <button onclick="yt.window.popup(&quot;https://www.facebook.com/dialog/feed?app_id=87741124305&link=http%3A//www.youtube.com/attribution_link%3Fa%3DcdX5lNZe0pc%26u%3D%252Fwatch%253Fv%253DjNQXAC9IVRw%2526feature%253Dshare&display=popup&name=Me%20at%20the%20zoo&caption=&description=I%20can%27t%20comment%20here%20anymore%2C%20since%20I%20don%27t%20want%20a%20google%2B%20account.%0A%0AThe%20first%20video%20on%20YouTube%2C%20uploaded%20at%208%3A27%20P.M.%20on%20Saturday%20April%2023rd%2C%202005.%20The%20video%20was%20shot%20by%20Yakov%20Lapitsky%20at%20the%20San%20Diego%20Zoo.&picture=https%3A//i1.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg&source=http%3A//www.youtube.com/v/jNQXAC9IVRw%3Fautohide%3D1%26version%3D3%26attribution_tag%3DcdX5lNZe0pc%26feature%3Dshare%26autoplay%3D1%26showinfo%3D1%26autohide%3D1&ref=share&actions={&quot;name&quot;:&quot;Подписаться на Youtube&quot;, &quot;link&quot;:&quot;https://www.youtube.com/channel/UC4QobU6STFB0P71PMvOGN5A?sub_confirmation=1&quot;}&redirect_uri=https://www.youtube.com/facebook_redirect&quot;, {\'height\': 306,\'width\': 650,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=10&name=FACEBOOK&feature=share&v=jNQXAC9IVRw&attribution_tag=cdX5lNZe0pc&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&quot;);return false;" data-service-name="FACEBOOK" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Facebook" class="yt-uix-tooltip share-service-button share-facebook-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Facebook">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-facebook">\n      <span>Facebook</span>\n    </button>\n  </li>\n\n          <li>\n    <button onclick="yt.window.popup(&quot;https://plus.google.com/share?url=http%3A//www.youtube.com/attribution_link%3Fa%3DcdX5lNZe0pc%26u%3D%252Fwatch%253Fv%253DjNQXAC9IVRw%2526feature%253Dshare&source=yt&hl=ru&soc-platform=1&soc-app=130&quot;, {\'height\': 620,\'width\': 620,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=43&name=GOOGLEPLUS&feature=share&v=jNQXAC9IVRw&attribution_tag=cdX5lNZe0pc&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&quot;);return false;" data-service-name="GOOGLEPLUS" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Google+" class="yt-uix-tooltip share-service-button share-googleplus-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Google+">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-googleplus">\n      <span>Google+</span>\n    </button>\n  </li>\n\n          <li>\n    <button onclick="yt.window.popup(&quot;https://twitter.com/intent/tweet?url=http%3A//youtu.be/jNQXAC9IVRw&text=Me%20at%20the%20zoo:&via=YouTube&related=YouTube,YouTubeTrends,YTCreators&quot;, {\'height\': 420,\'width\': 550,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=31&name=TWITTER&v=jNQXAC9IVRw&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&feature=share&quot;);return false;" data-service-name="TWITTER" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Twitter" class="yt-uix-tooltip share-service-button share-twitter-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Twitter">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-twitter">\n      <span>Twitter</span>\n    </button>\n  </li>\n\n          <li>\n    <button onclick="yt.window.popup(&quot;https://www.odnoklassniki.ru/dk?st.cmd=addShare&st.noresize=on&st._surl=http%3A//www.youtube.com/watch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&quot;, {\'height\': 650,\'width\': 1024,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=39&name=ODNOKLASSNIKI&v=jNQXAC9IVRw&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&feature=share&quot;);return false;" data-service-name="ODNOKLASSNIKI" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Одноклассники" class="yt-uix-tooltip share-service-button share-odnoklassniki-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Одноклассники">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-odnoklassniki">\n      <span>Одноклассники</span>\n    </button>\n  </li>\n\n          <li>\n    <button onclick="yt.window.popup(&quot;https://www.livejournal.com/update.bml?url=http%3A//www.youtube.com/attribution_link%3Fa%3DcdX5lNZe0pc%26u%3D%252Fwatch%253Fv%253DjNQXAC9IVRw%2526feature%253Dshare&subject=Me%20at%20the%20zoo&quot;, {\'height\': 650,\'width\': 1024,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=38&name=LIVEJOURNAL&feature=share&v=jNQXAC9IVRw&attribution_tag=cdX5lNZe0pc&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&quot;);return false;" data-service-name="LIVEJOURNAL" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'LiveJournal" class="yt-uix-tooltip share-service-button share-livejournal-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'LiveJournal">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-livejournal">\n      <span>LiveJournal</span>\n    </button>\n  </li>\n\n          <li>\n    <button onclick="yt.window.popup(&quot;https://www.blogger.com/blog-this.g?n=Me%20at%20the%20zoo&source=youtube&b=%3Ciframe%20width%3D%22459%22%20height%3D%22344%22%20src%3D%22//www.youtube.com/embed/jNQXAC9IVRw%22%20frameborder%3D%220%22%20allowfullscreen%3E%3C/iframe%3E&eurl=https%3A//i1.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg&quot;, {\'height\': 468,\'width\': 768,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=34&name=BLOGGER&feature=share&v=jNQXAC9IVRw&attribution_tag=cdX5lNZe0pc&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&quot;);return false;" data-service-name="BLOGGER" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Blogger" class="yt-uix-tooltip share-service-button share-blogger-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Blogger">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-blogger">\n      <span>Blogger</span>\n    </button>\n  </li>\n\n          <li>\n    <button onclick="yt.window.popup(&quot;https://reddit.com/submit?url=http%3A//www.youtube.com/attribution_link%3Fa%3DcdX5lNZe0pc%26u%3D%252Fwatch%253Fv%253DjNQXAC9IVRw%2526feature%253Dshare&title=Me%20at%20the%20zoo&quot;, {\'height\': 650,\'width\': 1024,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=4&name=REDDIT&feature=share&v=jNQXAC9IVRw&attribution_tag=cdX5lNZe0pc&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&quot;);return false;" data-service-name="REDDIT" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'reddit" class="yt-uix-tooltip share-service-button share-reddit-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'reddit">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-reddit">\n      <span>reddit</span>\n    </button>\n  </li>\n\n          <li>\n    <button onclick="yt.window.popup(&quot;https://www.tumblr.com/share?v=3&u=http%3A//www.youtube.com/attribution_link%3Fa%3DcdX5lNZe0pc%26u%3D%252Fwatch%253Fv%253DjNQXAC9IVRw%2526feature%253Dshare&quot;, {\'height\': 650,\'width\': 1024,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=40&name=TUMBLR&feature=share&v=jNQXAC9IVRw&attribution_tag=cdX5lNZe0pc&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&quot;);return false;" data-service-name="TUMBLR" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'tumblr." class="yt-uix-tooltip share-service-button share-tumblr-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'tumblr.">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-tumblr">\n      <span>tumblr.</span>\n    </button>\n  </li>\n\n          <li>\n    <button onclick="yt.window.popup(&quot; https://pinterest.com/pin/create/button/?url=http%3A//www.youtube.com/attribution_link%3Fa%3DcdX5lNZe0pc%26u%3D%252Fwatch%253Fv%253DjNQXAC9IVRw%2526feature%253Dshare&description=Me%20at%20the%20zoo&is_video=true&media=https%3A//i1.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg&quot;, {\'height\': 650,\'width\': 1024,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=45&name=PINTEREST&feature=share&v=jNQXAC9IVRw&attribution_tag=cdX5lNZe0pc&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&quot;);return false;" data-service-name="PINTEREST" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Pinterest" class="yt-uix-tooltip share-service-button share-pinterest-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Pinterest">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-pinterest">\n      <span>Pinterest</span>\n    </button>\n  </li>\n\n          <li>\n    <button onclick="yt.window.popup(&quot;https://www.linkedin.com/shareArticle?url=http%3A//www.youtube.com/attribution_link%3Fa%3DcdX5lNZe0pc%26u%3D%252Fwatch%253Fv%253DjNQXAC9IVRw%2526feature%253Dshare&title=Me%20at%20the%20zoo&summary=I%20can%27t%20comment%20here%20anymore%2C%20since%20I%20don%27t%20want%20a%20google%2B%20account.%0A%0AThe%20first%20video%20on%20YouTube%2C%20uploaded%20at%208%3A27%20P.M.%20on%20Saturday%20April%2023rd%2C%202005.%20The%20video%20was%20shot%20by%20Yakov%20Lapitsky%20at%20the%20San%20Diego%20Zoo.&source=Youtube&quot;, {\'height\': 650,\'width\': 1024,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=42&name=LINKEDIN&feature=share&v=jNQXAC9IVRw&attribution_tag=cdX5lNZe0pc&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&quot;);return false;" data-service-name="LINKEDIN" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'LinkedIn" class="yt-uix-tooltip share-service-button share-linkedin-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'LinkedIn">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-linkedin">\n      <span>LinkedIn</span>\n    </button>\n  </li>\n\n          <li>\n    <button onclick="yt.window.popup(&quot;https://www.stumbleupon.com/submit?url=http%3A//www.youtube.com/watch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&title=Me%20at%20the%20zoo&quot;, {\'height\': 650,\'width\': 1024,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=5&name=STUMBLEUPON&v=jNQXAC9IVRw&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&feature=share&quot;);return false;" data-service-name="STUMBLEUPON" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'StumbleUpon" class="yt-uix-tooltip share-service-button share-stumbleupon-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'StumbleUpon">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-stumbleupon">\n      <span>StumbleUpon</span>\n    </button>\n  </li>\n\n          <li>\n    <button onclick="yt.window.popup(&quot;https://digg.com/submit?url=http%3A//www.youtube.com/attribution_link%3Fa%3DcdX5lNZe0pc%26u%3D%252Fwatch%253Fv%253DjNQXAC9IVRw%2526feature%253Dshare&quot;, {\'height\': 650,\'width\': 1024,\'scrollbars\': true});yt.net.ping.send(&quot;/sharing_services?id=1&name=DIGG&feature=share&v=jNQXAC9IVRw&attribution_tag=cdX5lNZe0pc&relative_url=%2Fwatch%3Fv%3DjNQXAC9IVRw%26feature%3Dshare&quot;);return false;" data-service-name="DIGG" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Digg" class="yt-uix-tooltip share-service-button share-digg-icon" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TO.replace(" %s", "") +
      'Digg">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="share-service-icon share-service-icon-digg">\n      <span>Digg</span>\n    </button>\n  </li>\n\n    </ul>\n\n  </div>\n\n        </div>\n          <div class="share-panel-url-container share-panel-reverse">\n    <span class="share-panel-url-input-container yt-uix-form-input-container yt-uix-form-input-text-container  yt-uix-form-input-non-empty">    <input class="yt-uix-form-input-text share-panel-url" name="share_url" value="' +
      t +
      '" data-video-id="' +
      window.location.href.split("?v=")[1].split("&")[0] +
      '">\n</span>\n      <div class="share-panel-start-at-container ">\n        <label>\n          <span class="yt-uix-form-input-checkbox-container">\n            <input class="share-panel-start-at" type="checkbox">\n            <span class="yt-uix-form-input-checkbox-element"></span>\n          </span>\n' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_SHARE_TIME +
      '\n        </label>\n        <input type="text" value="0:00" class="yt-uix-form-input-text share-panel-start-at-time">\n      </div>\n  </div>\n\n      </div>\n\n        <div class="share-panel-embed-container hid">\n      <div class="action-panel-loading">\nLoading...\n      </div>\n  </div>\n\n\n        <div class="share-panel-email-container hid" data-disabled="true">\n        <strong><a href="https://accounts.google.com/ServiceLogin?hl=ru&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Demail%26hl%3Dru%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DjNQXAC9IVRw%2526feature%253Dshare_email&amp;uilel=3">Войдите в аккаунт</a>.\n</strong>\n\n  </div>\n\n\n  </div>\n</div>';
  (document.querySelector("#action-panel-share").innerHTML = e),
    (wasshareajaxcreated = !0);
}

function v3TestSyntax(testsyn) {
  try {
    return eval(testsyn);
  } catch (t) {
    return;
  }
}

function isChosenNotification(t) {
  try {
    return 1 == t.menuServiceItemRenderer.isSelected;
  } catch (t) {
    return !1;
  }
}

function craftSubscribePreference() {
  function t(t) {
    try {
      return (
        t.menuServiceItemRenderer.text.simpleText.toLowerCase() ==
        n.toLowerCase()
      );
    } catch (t) {
      return !1;
    }
  }

  document.querySelector("#v3subscribersetting") &&
    document.querySelector("#v3subscribersetting").remove();
  var e = "",
    n = "",
    a = "Personalized";

  try {
    a = ytdata.contents.twoColumnWatchNextResults.results.results.contents
      .find(isVideoSecInfo)
      .videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.notificationPreferenceButton.subscriptionNotificationToggleButtonRenderer.command.commandExecutorCommand.commands[0].openPopupAction.popup.menuPopupRenderer.items.find(
        isChosenNotification
      ).menuServiceItemRenderer.text.simpleText;
  } catch (t) {}

  var i =
    '<div class="yt-dialog hid" id="v3subscribersetting">\n    <div class="yt-dialog-base">\n      <span class="yt-dialog-align"></span>\n      <div class="yt-dialog-fg">\n        <div class="yt-dialog-fg-content">\n            <div class="yt-dialog-header">\n                  <button onclick=";return false;" type="button" class="  yt-dialog-dismiss yt-dialog-close yt-uix-button yt-uix-button-default yt-uix-button-size-default" data-action="close" role="button"><span class="yt-uix-button-content">Close </span></button>\n\n                <h2 class="yt-dialog-title">\n                        Channel subscription setting\n\n\n                </h2>\n            </div>\n          <div class="yt-dialog-loading">\n              <div class="yt-dialog-waiting-content">\n    <div class="yt-spinner-img"></div><div class="yt-dialog-waiting-text">Loading...</div>\n  </div>\n\n          </div>\n          <div class="yt-dialog-content">\n              <p style="margin-bottom:7px;">\nPlease choose how to receive notifications from <b>' +
    authorname +
    '</b> \n\n</p>\n\n    <p class="yt" style="margin-top:10px;">\n      <label class="yt-uix-form-label">\nNotifications:<br>\n        <span class="yt-uix-form-input-select"><span class="yt-uix-form-input-select-content"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-form-input-select-arrow"><span class="yt-uix-form-input-select-value">\n' +
    a +
    '\n  </span></span><select class="yt-uix-form-input-select-element eow-privacy-select" name="privacy">  <option value="all">\nAll\n  </option>\n  <option value="personalized" selected="">\nPersonalized\n  </option>\n    <option value="none">\nNone\n    </option>\n</select></span>\n      </label>\n    </p>\n  <div class="yt-uix-overlay-actions">\n    \n    <button onclick=";return false;" type="button" class="yt-uix-overlay-close yt-uix-button yt-uix-button-primary yt-uix-button-size-default" role="button"><span class="yt-uix-button-content">Select </span></button>\n  </div>\n\n          </div>\n          <div class="yt-dialog-working">\n              <div id="yt-dialog-working-overlay">\n  </div>\n  <div id="yt-dialog-working-bubble">\n    <div class="yt-dialog-waiting-content">\n      <div class="yt-spinner-img"></div><div class="yt-dialog-waiting-text">Working...</div>\n    </div>\n  </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\t\t\t</div>';
  document.querySelector("#page").insertAdjacentHTML("beforeend", i),
    (document.querySelector(".yt-uix-subscription-preferences-button").onclick =
      function () {
        document.querySelector("#v3subscribersetting").classList.remove("hid"),
          (e = document.querySelector(
            "#v3subscribersetting .yt-uix-form-input-select-value"
          ).innerText);
      }),
    (document.querySelector(
      "#v3subscribersetting .yt-dialog-base .yt-dialog-header .yt-dialog-close"
    ).onclick = function () {
      document.querySelector("#v3subscribersetting").classList.add("hid");
    }),
    (document.querySelector("#v3subscribersetting select").onchange =
      function () {
        (document.querySelector(
          "#v3subscribersetting .yt-uix-form-input-select-value"
        ).innerText =
          document
            .querySelector("#v3subscribersetting select")
            .value.charAt(0)
            .toUpperCase() +
          document
            .querySelector("#v3subscribersetting select")
            .value.toLocaleLowerCase()
            .slice(1)),
          (n = document.querySelector(
            "#v3subscribersetting .yt-uix-form-input-select-value"
          ).innerText);
      }),
    (document.querySelector(
      "#v3subscribersetting .yt-dialog-base .yt-uix-button-primary"
    ).onclick = function () {
      e.toLowerCase() !=
        document
          .querySelector("#v3subscribersetting .yt-uix-form-input-select-value")
          .innerText.toLowerCase() &&
        v3.innerTube.subscriptionNotification(
          ytdata.contents.twoColumnWatchNextResults.results.results.contents
            .find(isVideoSecInfo)
            .videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.notificationPreferenceButton.subscriptionNotificationToggleButtonRenderer.command.commandExecutorCommand.commands[0].openPopupAction.popup.menuPopupRenderer.items.find(
              t
            ).menuServiceItemRenderer.serviceEndpoint
            .modifyChannelNotificationPreferenceEndpoint.params
        ),
        document.querySelector("#v3subscribersetting").classList.add("hid");
    });
}

var wasaddtoajaxcreated = !1;

async function craftAddToAjax() {
  await v3.innerTube
    .getAddToAjax(window.location.href.split("?v=")[1].split("&")[0])
    .then((t) => {
      var e = t.contents[0].addToPlaylistRenderer.playlists,
        n =
          '<div class="watch-playlists-drawer">\n    <h3>' +
          v3.UIMSG[v3.nationIndex].WATCH7_PANEL_ADDTO_ADDTO +
          '</h3><div class="playlist-addto-title-options"></div>\n    \n    <ul>';

      for (i = 0, j = e.length; i < j; i++)
        if (void 0 !== e[i].playlistAddToOptionRenderer) {
          var a = "playlist-item",
            o = "";
          "NONE" != e[i].playlistAddToOptionRenderer.containsSelectedVideos &&
            ((a = "playlist-item contains-selected-videos selected"),
            (o =
              '<div style="display:inline-block;" class="playlist-selected"></div>')),
            (n +=
              '<li class="' +
              a +
              '" playlistid="' +
              e[i].playlistAddToOptionRenderer.playlistId +
              '">\n<form></form>\n    \n    <span class="playlist-title">' +
              o +
              e[i].playlistAddToOptionRenderer.title.simpleText +
              '<span class="playlist-video-count-container"></span></span>\n\n<span class="playlist-public-private">' +
              e[i].playlistAddToOptionRenderer.privacy
                .toLocaleLowerCase()
                .charAt(0)
                .toUpperCase() +
              e[i].playlistAddToOptionRenderer.privacy
                .toLocaleLowerCase()
                .slice(1) +
              '</span>\n<span class="created-at"></span>\n<button></button>\n</li>');
        }

      (n +=
        '</ul>\n\t\t<div class="playlist-create-form-actions">\n<p class="yt">\n      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary" type="submit" onclick=";return true;" id="playlist-create-new"><span class="yt-uix-button-content">' +
        v3.UIMSG[v3.nationIndex].WATCH7_PANEL_ADDTO_CREATE +
        "</span></button>\n      \n    </p>\n</div>\n</div>"),
        (document.querySelector("#action-panel-addto").innerHTML = n),
        (wasaddtoajaxcreated = !0),
        $(document).on("click", ".playlist-item", function (t) {
          var e = t.currentTarget,
            n = {};
          (n.id = e.getAttribute("playlistid")),
            (n.videoid = window.location.href.split("?v=")[1].split("&")[0]),
            e.className.includes("contains-selected-videos")
              ? (v3.innerTube.editPlaylist(n.videoid, n.id, 1),
                (e.className = "playlist-item"),
                (e.querySelector(".playlist-title").innerHTML = e
                  .querySelector(".playlist-title")
                  .innerHTML.replace(
                    '<div style="display:inline-block;" class="playlist-selected"></div>',
                    ""
                  )),
                document.querySelector(".watch-playlists-drawer .yt-alert") &&
                  document
                    .querySelector(".watch-playlists-drawer .yt-alert")
                    .remove(),
                (document.querySelector(".watch-playlists-drawer").innerHTML =
                  '<div class="yt-alert yt-alert-default yt-alert-success" id="">  <div class="yt-alert-icon">\n    <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-buttons"><button class="close yt-uix-close yt-uix-button yt-uix-button-close" type="button" onclick="document.querySelector(\'.watch-playlists-drawer .yt-alert\').remove();" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert">Removed from ' +
                  e.querySelector(".playlist-title").innerText +
                  ".</div></div>" +
                  document.querySelector(".watch-playlists-drawer").innerHTML))
              : (v3.innerTube.editPlaylist(n.videoid, n.id, 0),
                (e.className =
                  "playlist-item contains-selected-videos selected"),
                (e.querySelector(".playlist-title").innerHTML =
                  '<div style="display:inline-block;" class="playlist-selected"></div>' +
                  e.querySelector(".playlist-title").innerHTML),
                document.querySelector(".watch-playlists-drawer .yt-alert") &&
                  document
                    .querySelector(".watch-playlists-drawer .yt-alert")
                    .remove(),
                (document.querySelector(".watch-playlists-drawer").innerHTML =
                  '<div class="yt-alert yt-alert-default yt-alert-success" id="">  <div class="yt-alert-icon">\n    <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-buttons"><button class="close yt-uix-close yt-uix-button yt-uix-button-close" type="button" onclick="document.querySelector(\'.watch-playlists-drawer .yt-alert\').remove();" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert">Added to ' +
                  e.querySelector(".playlist-title").innerText +
                  ".</div></div>" +
                  document.querySelector(".watch-playlists-drawer").innerHTML));
        });
      var r =
        '<div class="yt-dialog hid" id="v3playlistcreator">\n    <div class="yt-dialog-base">\n      <span class="yt-dialog-align"></span>\n      <div class="yt-dialog-fg">\n        <div class="yt-dialog-fg-content">\n            <div class="yt-dialog-header">\n                  <button onclick=";return false;" type="button" class="  yt-dialog-dismiss yt-dialog-close yt-uix-button yt-uix-button-default yt-uix-button-size-default" data-action="close" role="button"><span class="yt-uix-button-content">Close </span></button>\n\n                <h2 class="yt-dialog-title">\n                        ' +
        v3.UIMSG[v3.nationIndex].PLAYLIST_CREATE_TITLE +
        '\n\n\n                </h2>\n            </div>\n          <div class="yt-dialog-loading">\n              <div class="yt-dialog-waiting-content">\n    <div class="yt-spinner-img"></div><div class="yt-dialog-waiting-text">Loading...</div>\n  </div>\n\n          </div>\n          <div class="yt-dialog-content">\n              <p style="margin-bottom:7px;">\n' +
        v3.UIMSG[v3.nationIndex].PLAYLIST_CREATE_NAMING +
        '\n\n</p>\n<span class=" yt-uix-form-input-container yt-uix-form-input-text-container ">    <input class="yt-uix-form-input-text " name="field_myvideo_title">\n</span>\n    <p class="yt" style="margin-top:10px;">\n      <label class="yt-uix-form-label">\n' +
        v3.UIMSG[v3.nationIndex].PLAYLIST_CREATE_PRIVACY +
        '<br>\n        <span class="yt-uix-form-input-select"><span class="yt-uix-form-input-select-content"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-form-input-select-arrow"><span class="yt-uix-form-input-select-value">\n' +
        v3.UIMSG[v3.nationIndex].VIDEO_INFO_PRIVATE +
        '\n  </span></span><select class="yt-uix-form-input-select-element eow-privacy-select" name="privacy">  <option value="public">\n' +
        v3.UIMSG[v3.nationIndex].VIDEO_INFO_PUBLIC +
        '\n  </option>\n  <option value="private" selected="">\n' +
        v3.UIMSG[v3.nationIndex].VIDEO_INFO_PRIVATE +
        '\n  </option>\n    <option value="unlisted">\n' +
        v3.UIMSG[v3.nationIndex].VIDEO_INFO_UNLISTED +
        '\n    </option>\n</select></span>\n      </label>\n    </p>\n  <div class="yt-uix-overlay-actions">\n    <button onclick=";return false;" type="button" class="watch-history-clear-button yt-uix-overlay-close yt-uix-button yt-uix-button-default yt-uix-button-size-default" role="button"><span class="yt-uix-button-content">' +
        v3.UIMSG[v3.nationIndex].DLG_DEFAULT_CREATE +
        '</span></button>\n    <button onclick=";return false;" type="button" class="yt-uix-overlay-close yt-uix-button yt-uix-button-primary yt-uix-button-size-default" role="button"><span class="yt-uix-button-content">' +
        v3.UIMSG[v3.nationIndex].DLG_DEFAULT_CANCLE +
        ' </span></button>\n  </div>\n\n          </div>\n          <div class="yt-dialog-working">\n              <div id="yt-dialog-working-overlay">\n  </div>\n  <div id="yt-dialog-working-bubble">\n    <div class="yt-dialog-waiting-content">\n      <div class="yt-spinner-img"></div><div class="yt-dialog-waiting-text">Working...</div>\n    </div>\n  </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\t\t\t</div>';
      document.querySelector("#page").insertAdjacentHTML("beforeend", r),
        registerV3InteractiveDialog(),
        (document.querySelector("#playlist-create-new").onclick = function () {
          document.querySelector("#v3playlistcreator").classList.remove("hid");
        });
    });
}

function registerV3InteractiveDialog() {
  (document.querySelector(
    "#v3playlistcreator .yt-dialog-base .yt-dialog-header .yt-dialog-close"
  ).onclick = function () {
    document.querySelector("#v3playlistcreator").classList.add("hid");
  }),
    (document.querySelector(
      "#v3playlistcreator .yt-dialog-base .yt-uix-button-primary"
    ).onclick = function () {
      document.querySelector("#v3playlistcreator").classList.add("hid");
    });
  var t = "";
  document
    .querySelector("#v3playlistcreator .yt-uix-form-input-text")
    .addEventListener("input", function (e) {
      (t = e.target.value), console.log(t);
    }),
    (document.querySelector("#v3playlistcreator select").onchange =
      function () {
        document.querySelector(
          "#v3playlistcreator .yt-uix-form-input-select-value"
        ).innerText =
          document
            .querySelector("#v3playlistcreator select")
            .value.charAt(0)
            .toUpperCase() +
          document
            .querySelector("#v3playlistcreator select")
            .value.toLocaleLowerCase()
            .slice(1);
      }),
    (document.querySelector(
      "#v3playlistcreator .watch-history-clear-button"
    ).onclick = function () {
      if ("" != t) {
        var e =
          '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
          '",\r\n\t\t\t"hl": "' +
          authinfo.HL +
          '"\r\n\t\t}\r\n\t},\r\n\t"title":"' +
          t +
          '","privacyStatus":"' +
          document
            .querySelector("#v3playlistcreator select")
            .value.toUpperCase() +
          '","videoIds":["' +
          window.location.href.split("v=")[1].split("&")[0] +
          '"],\r\n}\r\n';
        v3.innerTube.AJAX(
          "playlist/create?",
          e,
          "1",
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
        ),
          document.querySelector("#v3playlistcreator").classList.add("hid"),
          (document.querySelector("#action-panel-addto").innerHTML =
            '<div id="watch-actions-addto-loading">\n    <div class="action-panel-loading">\n        <p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n    </div>\n  </div>'),
          (wasaddtoajaxcreated = !1),
          goToPanel(1);
      }
    });
}

v3.htmlBuilderConfig.core.NIRVANA &&
  (window.innerWidth < 1366
    ? document.querySelector("html").classList.add("content-snap-width-1")
    : 1366 == window.innerWidth
    ? document.querySelector("html").classList.add("content-snap-width-2")
    : document.querySelector("html").classList.add("content-snap-width-3"),
  window.addEventListener("resize", function (t) {
    var e = "";
    document.querySelector("html").className &&
      (document.querySelector("html").className.includes("show-guide") &&
        (e += "show-guide"),
      document.querySelector("html").className.includes("guide-pinned") &&
        (e += " guide-pinned")),
      window.innerWidth < 1366
        ? document
            .querySelector("html")
            .setAttribute("class", "content-snap-width-1 " + e)
        : 1366 == window.innerWidth
        ? document
            .querySelector("html")
            .setAttribute("class", "content-snap-width-2 " + e)
        : document
            .querySelector("html")
            .setAttribute("class", "content-snap-width-3 " + e);
  })),
  (v3.watch = {}),
  (v3.watch.v3mainfriend = function () {
    var t = new Date().getTime();
    console.log("Page have loaded in", t - before_loadtime, "ms"),
      (v3.loggerTitle = "loading time: " + (t - before_loadtime) + " ms"),
      document.querySelector("#watch-page-skeleton") &&
        document.querySelector("#watch-page-skeleton").remove();

    try {
      document.title =
        "▶ " +
        document.querySelector("meta[itemprop=name]").content +
        " - YouTube TUDO2";
    } catch (t) {
      document.title = "Video - YouTube TUDO2";
    }

    changeFavicon(chrome.extension.getURL("/images/favicon2.png"));
    var e, n, a;
    window.performance.timing.domContentLoadedEventEnd,
      window.performance.timing.navigationStart;
    v3CookiFriend(),
      1 == isuserloggedin &&
        0 == isownvideo &&
        ((document.querySelector(
          "#watch7-subscription-container > .yt-uix-button-subscription-container > button.yt-uix-button"
        ).onclick = function () {
          document.querySelector(
            "#watch7-subscription-container > .yt-uix-button-subscription-container > button.yt-uix-button.yt-uix-button-subscribed-branded"
          )
            ? (v3.innerTube.unsubscribe(
                ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(
                  isVideoSecInfo
                ).videoSecondaryInfoRenderer.subscribeButton
                  .subscribeButtonRenderer.channelId,
                ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(
                  isVideoSecInfo
                ).videoSecondaryInfoRenderer.subscribeButton
                  .subscribeButtonRenderer.onUnsubscribeEndpoints[0]
                  .signalServiceEndpoint.actions[0].openPopupAction.popup
                  .confirmDialogRenderer.confirmButton.buttonRenderer
                  .serviceEndpoint.unsubscribeEndpoint.params
              ),
              document
                .querySelector(
                  "#watch7-subscription-container > .yt-uix-button-subscription-container > button.yt-uix-button"
                )
                .classList.remove("yt-uix-button-subscribed-branded"),
              document
                .querySelector(
                  "#watch7-subscription-container > .yt-uix-button-subscription-container > button.yt-uix-button"
                )
                .classList.add("yt-uix-button-subscribe-branded"))
            : (v3.innerTube.subscribe(
                ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(
                  isVideoSecInfo
                ).videoSecondaryInfoRenderer.subscribeButton
                  .subscribeButtonRenderer.channelId,
                ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(
                  isVideoSecInfo
                ).videoSecondaryInfoRenderer.subscribeButton
                  .subscribeButtonRenderer.onSubscribeEndpoints[0]
                  .subscribeEndpoint.params
              ),
              document
                .querySelector(
                  "#watch7-subscription-container > .yt-uix-button-subscription-container > button.yt-uix-button"
                )
                .classList.remove("yt-uix-button-subscribe-branded"),
              document
                .querySelector(
                  "#watch7-subscription-container > .yt-uix-button-subscription-container > button.yt-uix-button"
                )
                .classList.add("yt-uix-button-subscribed-branded"));
        }),
        (document.querySelector("button#watch-like").onclick = function () {
          document.querySelector(
            "button#watch-dislike.yt-uix-button-toggled"
          ) &&
            (v3.innerTube.sentiment(
              window.location.href.split("?v=")[1].split("&")[0],
              mainvideoinfo.videoPrimaryInfoRenderer.videoActions.menuRenderer
                .topLevelButtons[1].toggleButtonRenderer.toggledServiceEndpoint
                .likeEndpoint.removeLikeParams,
              3
            ),
            document
              .querySelector("button#watch-dislike")
              .classList.remove("yt-uix-button-toggled"),
            (document.querySelector(".dislikes-count").innerText =
              parseInt(
                document
                  .querySelector(".dislikes-count")
                  .innerText.replace(/[^0-9.]/g, "")
              ) - 1),
            (document.querySelector(".dislikes-count").innerText = document
              .querySelector(".dislikes-count")
              .innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ","))),
            document.querySelector("button#watch-like.yt-uix-button-toggled")
              ? (setTimeout(function () {
                  v3.innerTube.sentiment(
                    window.location.href.split("?v=")[1].split("&")[0],
                    mainvideoinfo.videoPrimaryInfoRenderer.videoActions
                      .menuRenderer.topLevelButtons[0].toggleButtonRenderer
                      .toggledServiceEndpoint.likeEndpoint.removeLikeParams,
                    1
                  ),
                    document
                      .querySelector("button#watch-like")
                      .classList.remove("yt-uix-button-toggled");
                }, 50),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-likes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + sentimentbarprocent + "%;"
                  ),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-dislikes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + parseInt(100 - sentimentbarprocent) + "%;"
                  ),
                (document.querySelector(".likes-count").innerText =
                  parseInt(
                    document
                      .querySelector(".likes-count")
                      .innerText.replace(/[^0-9.]/g, "")
                  ) - 1),
                (document.querySelector(".likes-count").innerText = document
                  .querySelector(".likes-count")
                  .innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",")))
              : (setTimeout(function () {
                  v3.innerTube.sentiment(
                    window.location.href.split("?v=")[1].split("&")[0],
                    mainvideoinfo.videoPrimaryInfoRenderer.videoActions
                      .menuRenderer.topLevelButtons[0].toggleButtonRenderer
                      .defaultServiceEndpoint.commandExecutorCommand.commands[1]
                      .likeEndpoint.likeParams,
                    0
                  ),
                    document
                      .querySelector("button#watch-like")
                      .classList.add("yt-uix-button-toggled");
                }, 50),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-likes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + sentimentbarprocentlike + "%;"
                  ),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-dislikes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + parseInt(100 - sentimentbarprocentlike) + "%;"
                  ),
                (document.querySelector(".likes-count").innerText =
                  parseInt(
                    document
                      .querySelector(".likes-count")
                      .innerText.replace(/[^0-9.]/g, "")
                  ) + 1),
                (document.querySelector(".likes-count").innerText = document
                  .querySelector(".likes-count")
                  .innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",")));
        }),
        (document.querySelector("button#watch-dislike").onclick = function () {
          document.querySelector("button#watch-like.yt-uix-button-toggled") &&
            (v3.innerTube.sentiment(
              window.location.href.split("?v=")[1].split("&")[0],
              mainvideoinfo.videoPrimaryInfoRenderer.videoActions.menuRenderer
                .topLevelButtons[0].toggleButtonRenderer.toggledServiceEndpoint
                .likeEndpoint.removeLikeParams,
              1
            ),
            document
              .querySelector("button#watch-like")
              .classList.remove("yt-uix-button-toggled"),
            (document.querySelector(".likes-count").innerText =
              parseInt(
                document
                  .querySelector(".likes-count")
                  .innerText.replace(/[^0-9.]/g, "")
              ) - 1),
            (document.querySelector(".likes-count").innerText = document
              .querySelector(".likes-count")
              .innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ","))),
            document.querySelector("button#watch-dislike.yt-uix-button-toggled")
              ? (setTimeout(function () {
                  v3.innerTube.sentiment(
                    window.location.href.split("?v=")[1].split("&")[0],
                    mainvideoinfo.videoPrimaryInfoRenderer.videoActions
                      .menuRenderer.topLevelButtons[1].toggleButtonRenderer
                      .toggledServiceEndpoint.likeEndpoint.removeLikeParams,
                    3
                  ),
                    document
                      .querySelector("button#watch-dislike")
                      .classList.remove("yt-uix-button-toggled");
                }, 50),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-likes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + sentimentbarprocent + "%;"
                  ),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-dislikes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + parseInt(100 - sentimentbarprocent) + "%;"
                  ),
                (document.querySelector(".dislikes-count").innerText =
                  parseInt(
                    document
                      .querySelector(".dislikes-count")
                      .innerText.replace(/[^0-9.]/g, "")
                  ) - 1),
                (document.querySelector(".dislikes-count").innerText = document
                  .querySelector(".dislikes-count")
                  .innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",")))
              : (setTimeout(function () {
                  v3.innerTube.sentiment(
                    window.location.href.split("?v=")[1].split("&")[0],
                    mainvideoinfo.videoPrimaryInfoRenderer.videoActions
                      .menuRenderer.topLevelButtons[1].toggleButtonRenderer
                      .defaultServiceEndpoint.commandExecutorCommand.commands[1]
                      .likeEndpoint.dislikeParams,
                    2
                  ),
                    document
                      .querySelector("button#watch-dislike")
                      .classList.add("yt-uix-button-toggled");
                }, 50),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-likes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + sentimentbarprocentdislike + "%;"
                  ),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-dislikes"
                  )
                  .setAttribute(
                    "style",
                    "width: " +
                      parseInt(100 - sentimentbarprocentdislike) +
                      "%;"
                  ),
                (document.querySelector(".dislikes-count").innerText =
                  parseInt(
                    document
                      .querySelector(".dislikes-count")
                      .innerText.replace(/[^0-9.]/g, "")
                  ) + 1),
                (document.querySelector(".dislikes-count").innerText = document
                  .querySelector(".dislikes-count")
                  .innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",")));
        }),
        (document.querySelector("#yt-masthead-user .video-thumb").onclick =
          function () {
            document.querySelector("#masthead-expanded.hid")
              ? document
                  .querySelector("#masthead-expanded")
                  .classList.remove("hid")
              : document
                  .querySelector("#masthead-expanded")
                  .classList.add("hid");
          }),
        craftSubscribePreference()),
      (document.querySelector(
        "#watch7-secondary-actions span:nth-of-type(1) button"
      ).onclick = function () {
        goToPanel(1);
      }),
      (document.querySelector(
        "#watch7-secondary-actions span:nth-of-type(2) button"
      ).onclick = function () {
        goToPanel(2), 0 == wasshareajaxcreated && craftShareAjax();
      }),
      (document.querySelector(
        "#watch7-secondary-actions span:nth-of-type(3) button"
      ).onclick = function () {
        goToPanel(3),
          1 == authinfo.LOGGED_IN &&
            0 == wasaddtoajaxcreated &&
            craftAddToAjax();
      }),
      (document.querySelector(
        "#watch7-secondary-actions span:nth-of-type(4) button"
      ).onclick = function () {
        goToPanel(4);
      }),
      (document.querySelector(
        "#watch7-secondary-actions span:nth-of-type(5) button"
      ).onclick = function () {
        goToPanel(5);
      }),
      document.querySelector("#guide-loading-toggle") &&
        (document.querySelector("#guide-loading-toggle").onclick = function () {
          document.querySelector("#guide-main.collapsed")
            ? (document
                .querySelector("#guide-main")
                .classList.remove("collapsed"),
              document
                .querySelector("#guide-main")
                .classList.add("uncollapsed"))
            : (document
                .querySelector("#guide-main")
                .classList.remove("uncollapsed"),
              document.querySelector("#guide-main").classList.add("collapsed"));
        }),
      document.querySelector("#appbar-guide-button") &&
        (document.querySelector("#appbar-guide-button").onclick = function () {
          document.querySelector("html.show-guide")
            ? (document.querySelector("html").classList.remove("show-guide"),
              document.querySelector("html.guide-pinned") &&
                document.querySelector("html").classList.remove("guide-pinned"))
            : document.querySelector("html").classList.add("show-guide");
        }),
      ytdata.contents.twoColumnWatchNextResults.secondaryResults &&
        ytdata.contents.twoColumnWatchNextResults.secondaryResults
          .secondaryResults.results &&
        (document.querySelector("#watch-more-related-button").outerHTML +=
          '<p class="yt-spinner hid">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>'),
      ytdata.contents.twoColumnWatchNextResults.secondaryResults &&
        ytdata.contents.twoColumnWatchNextResults.secondaryResults
          .secondaryResults.results &&
        (document.querySelector("#watch-more-related-button").onclick =
          function () {
            document
              .querySelector("#watch-more-related-button")
              .classList.add("hid"),
              document
                .querySelector("#watch-more-related-button+.yt-spinner")
                .classList.remove("hid");

            try {
              getMoreAjax(
                ytdata.contents.twoColumnWatchNextResults.secondaryResults
                  .secondaryResults.results[1].itemSectionRenderer.contents[
                  ytdata.contents.twoColumnWatchNextResults.secondaryResults
                    .secondaryResults.results[1].itemSectionRenderer.contents
                    .length - 1
                ].continuationItemRenderer.continuationEndpoint
                  .continuationCommand.token,
                1
              );
            } catch (t) {
              getMoreAjax(
                ytdata.contents.twoColumnWatchNextResults.secondaryResults
                  .secondaryResults.results[
                  ytdata.contents.twoColumnWatchNextResults.secondaryResults
                    .secondaryResults.results.length - 1
                ].continuationItemRenderer.continuationEndpoint
                  .continuationCommand.token,
                1
              );
            }
          }),
      2 == document.querySelector("#watch-related").childElementCount &&
        document.querySelector("#watch-related #watch-more-related-button") &&
        document
          .querySelector("#watch-related #watch-more-related-button")
          .click(),
      (e = function () {
        alert("GO BACK TO 2O12"),
          document
            .querySelector("#css-2838365198")
            .setAttribute(
              "href",
              "//s.ytimg.com/yts/cssbin/www-core-vfl3zR8j4.css"
            ),
          document
            .querySelector("#css-688526446")
            .setAttribute(
              "href",
              "//s.ytimg.com/yts/cssbin/www-guide-vflnbp017.css"
            );
      }),
      (n = ""),
      (a = "38384040373937396665"),
      document.addEventListener("keydown", function (t) {
        if ((n += "" + t.keyCode) === a) return e();
        a.indexOf(n) && (n = "" + t.keyCode);
      }),
      $(document).on(
        "webkitfullscreenchange mozfullscreenchange fullscreenchange",
        function () {
          document.querySelector(".ytp-button-fullscreen-exit") ||
            (usev3fullscreen &&
              setTimeout(function () {
                document
                  .querySelector("html")
                  .removeAttribute("v3fullscreen", "");
              }, 25)),
            1 != liketoggled ||
            document
              .querySelector(".html5-info-bar")
              .className.includes("sentiment-like")
              ? 1 != disliketoggled ||
                document
                  .querySelector(".html5-info-bar")
                  .className.includes("sentiment-dislike") ||
                document
                  .querySelector(".html5-info-bar")
                  .classList.add("sentiment-dislike")
              : document
                  .querySelector(".html5-info-bar")
                  .classList.add("sentiment-like");
        }
      ),
      window.addEventListener("resize", function (t) {
        window.innerWidth <= 1165 &&
          document.querySelector("#guide-main.uncollapsed") &&
          document.querySelector(".guide-module-toggle-icon").click();
      });
    var i = document.createElement("script");
    (i.src = chrome.extension.getURL("hitchhiker/common/searchbox_service.js")),
      (i.onload = function () {
        console.log("search load"), v3SearchFriend();
      }),
      document.querySelector("html[s-load]") || document.head.appendChild(i),
      isownvideo && v3InnertubeEditorFriend(),
      document.querySelectorAll("script:not([src])").forEach((t) => t.remove());
  });
var guidewaspinned = !1;

function v3InnertubeEditorFriend() {
  var t = "",
    e = "";
  (document.querySelector("#eow-title").onclick = function () {
    document.querySelector("#eow-title").classList.add("hid"),
      document
        .querySelector(".innertube-studio-meta1-editor-v1")
        .classList.remove("hid"),
      (document.querySelector(
        ".yt-uix-form-input-text[name=field_myvideo_title]"
      ).value = document.querySelector("#eow-title").innerText),
      (t = document.querySelector("#eow-title").innerText),
      (e = document.querySelector("#eow-title").innerText),
      document.querySelector("#watch-privacy-icon").classList.add("hid");
  }),
    (document.querySelector(
      ".yt-uix-form-input-text[name=field_myvideo_title]"
    ).onchange = function () {
      e = document.querySelector(
        ".yt-uix-form-input-text[name=field_myvideo_title]"
      ).value;
    }),
    (document.querySelector(
      ".innertube-studio-meta1-editor-v1 .form-buttons .yt-uix-button-default"
    ).onclick = function () {
      document.querySelector("#eow-title").classList.remove("hid"),
        document
          .querySelector(".innertube-studio-meta1-editor-v1")
          .classList.add("hid"),
        (document.querySelector(
          ".yt-uix-form-input-text[name=field_myvideo_title]"
        ).value = document.querySelector("#eow-title").innerText),
        document.querySelector("#watch-privacy-icon").classList.remove("hid");
    }),
    (document.querySelector(
      ".innertube-studio-meta1-editor-v1 .form-buttons .yt-uix-button-primary"
    ).onclick = function () {
      t != e && v3EditTitle(e),
        document.querySelector("#eow-title").classList.remove("hid"),
        document
          .querySelector(".innertube-studio-meta1-editor-v1")
          .classList.add("hid"),
        (document.querySelector(
          ".yt-uix-form-input-text[name=field_myvideo_title]"
        ).value = e),
        (document.querySelector("#eow-title").innerText = e),
        document.querySelector("#watch-privacy-icon").classList.remove("hid");
    });
  var n = "",
    a = "";
  (document.querySelector("#watch-description-content").onclick = function () {
    document.querySelector("#watch-description").classList.add("hid"),
      document
        .querySelector(".innertube-studio-meta2-editor-v1")
        .classList.remove("hid"),
      document
        .querySelector("#action-panel-details")
        .classList.remove("watch-editable"),
      (document.querySelector(".eow-description-textarea").value =
        authinfo.VIDEO_DESCRIPTION),
      (n = document.querySelector(".eow-description-textarea").value),
      (a = document.querySelector(".eow-description-textarea").value);
  }),
    (document.querySelector(".eow-description-textarea").onchange =
      function () {
        a = document.querySelector(".eow-description-textarea").value;
      }),
    (document.querySelector(
      ".innertube-studio-meta2-editor-v1 .yt .yt-uix-button-default"
    ).onclick = function () {
      document.querySelector("#watch-description").classList.remove("hid"),
        document
          .querySelector(".innertube-studio-meta2-editor-v1")
          .classList.add("hid"),
        (document.querySelector(".eow-description-textarea").value = decodeURI(
          encodeURI(document.querySelector("#eow-description").innerText)
        )),
        document
          .querySelector("#action-panel-details")
          .classList.add("watch-editable");
    }),
    (document.querySelector(
      ".innertube-studio-meta2-editor-v1 #watch-video-info-submit"
    ).onclick = function () {
      a != n && v3EditDescription(a, r, !0),
        o != i && v3EditDescription(n, r, !1),
        document.querySelector("#watch-description").classList.remove("hid"),
        document
          .querySelector(".innertube-studio-meta2-editor-v1")
          .classList.add("hid"),
        (document.querySelector("#eow-description").innerText =
          document.querySelector(".eow-description-textarea").value),
        document
          .querySelector("#action-panel-details")
          .classList.add("watch-editable");
    });
  var i = document.querySelector(".eow-privacy-select").value,
    o = document.querySelector(".eow-privacy-select").value,
    r = {};
  (r.initialValue = document.querySelector(".eow-privacy-select").value),
    (r.shouldChange = !1),
    (document.querySelector(".eow-privacy-select").onchange = function () {
      (o = document.querySelector(".eow-privacy-select").value) != i &&
        ((r.newValue = document.querySelector(".eow-privacy-select").value),
        (r.shouldChange = !0)),
        (document.querySelector(
          ".innertube-studio-meta2-editor-v1 .yt-uix-form-input-select-value"
        ).innerText = document
          .querySelector(".eow-privacy-select")
          .value.toUpperCase()),
        document.querySelector("option[selected]") &&
          document
            .querySelector("option[selected]")
            .removeAttribute("selected"),
        document
          .querySelector(
            "option[value=" +
              document.querySelector(".eow-privacy-select").value +
              "]"
          )
          .setAttribute("selected", "");
    });
}

async function v3EditDescription(t, e, n) {
  (t = (t = t.replaceAll("\n", "\\n")).replaceAll('"', '\\"')),
    1 == e.shouldChange
      ? (document
          .querySelector("#watch-privacy-icon")
          .setAttribute("class", "yt-uix-tooltip yt-uix-tooltip-reverse "),
        document.querySelector("#watch-privacy-icon").classList.add(e.newValue),
        document
          .querySelector("#watch-privacy-icon")
          .setAttribute("title", "This video is " + e.newValue + "."),
        document
          .querySelector("#watch-privacy-icon")
          .setAttribute(
            "data-tooltip-text",
            "This video is " + e.newValue + "."
          ),
        n
          ? v3.innerTube.changeVideoMetadata(void 0, t, e.newValue)
          : v3.innerTube.changeVideoMetadata(void 0, void 0, e.newValue))
      : n && v3.innerTube.changeVideoMetadata(void 0, t, void 0);
}

async function v3EditTitle(t) {
  (t = t.replaceAll('"', '\\"')),
    v3.innerTube.changeVideoMetadata(t, void 0, void 0);
}

async function getChannelSwitcher() {
  if (document.querySelector(".masthead-card-switch-account"))
    document.querySelector(".masthead-card-switch-account.hid")
      ? (document
          .querySelector(".masthead-card-switch-account")
          .classList.remove("hid"),
        (document.querySelector(".masthead-card-switch-account").style.top =
          (
            document
              .querySelector("[data-card-class=masthead-card-switch-account]")
              .getBoundingClientRect().top + 25
          ).toString() + "px"),
        (document.querySelector(".masthead-card-switch-account").style.left =
          (
            Math.round(
              document
                .querySelector("[data-card-class=masthead-card-switch-account]")
                .getBoundingClientRect().left
            ) - 215
          ).toString() + "px"))
      : document
          .querySelector(".masthead-card-switch-account")
          .classList.add("hid");
  else {
    var t =
        '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
        authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
        '",\r\n\t\t\t"hl": "' +
        authinfo.HL +
        '"\r\n\t\t}\r\n\t},\r\n\t"requestType":"ACCOUNTS_LIST_REQUEST_TYPE_CHANNEL_SWITCHER","callCircumstance":"SWITCHING_USERS_FULL",\r\n}\r\n',
      e = await v3.innerTube
        .AJAX(
          "account/accounts_list?",
          t,
          "1",
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
        )
        .then((t) => (e = t));
    useverbose && console.log(e);
    var n =
      e.actions[0].updateChannelSwitcherPageAction.page
        .channelSwitcherPageRenderer.contents;
    useverbose && console.log(n);
    var a = "";

    for (i = 0, j = n.length; i < j; i++)
      if (n[i].accountItemRenderer) {
        var o = "",
          r =
            "/signin?action_handle_signin=true&authuser=0&next=%2F&feature=channel_switcher&skip_identity_prompt=true";

        try {
          r =
            n[i].accountItemRenderer.serviceEndpoint
              .selectActiveIdentityEndpoint.supportedTokens[3]
              .accountSigninToken.signinUrl;
        } catch (t) {
          useverbose && console.log(t),
            (v3.loggerDialog += t + " (at line " + ln() + " in watch.js)\n");
        }

        n[i].accountItemRenderer.isSelected && (o = "Selected"),
          (a +=
            '<li>\n    <a class="yt-masthead-multilogin-user yt-valign" href="' +
            r +
            '">\n          <span class="video-thumb yt-masthead-multilogin-user-icon yt-thumb yt-thumb-46">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img src="' +
            n[i].accountItemRenderer.accountPhoto.thumbnails[0].url +
            '" alt="' +
            n[i].accountItemRenderer.accountName.simpleText +
            '" width="46" height="46">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n\n      <span class="yt-masthead-multilogin-user-content yt-valign-container">\n        <span class="yt-masthead-multilogin-user-link" dir="ltr">' +
            n[i].accountItemRenderer.accountName.simpleText +
            "</span><br>\n        " +
            o +
            "\n      </span>\n    </a>\n  </li>");
      }

    var s =
      '<div id="yt-uix-clickcard-card2" class="yt-uix-clickcard-card masthead-card-switch-account yt-uix-clickcard-card-reverse yt-uix-clickcard-card-visible" style="left: ' +
      (
        Math.round(
          document
            .querySelector("[data-card-class=masthead-card-switch-account]")
            .getBoundingClientRect().left
        ) - 215
      ).toString() +
      "px; top: " +
      (
        document
          .querySelector("[data-card-class=masthead-card-switch-account]")
          .getBoundingClientRect().top + 25
      ).toString() +
      'px;"><div class="yt-uix-card-border-arrow yt-uix-card-border-arrow-vertical" style="right: 34.5px;"></div><div class="yt-uix-clickcard-card-border"><div class="yt-uix-card-body-arrow yt-uix-card-body-arrow-vertical" style="right: 34.5px;"></div><div class="yt-uix-clickcard-card-body"><div class="yt-uix-clickcard-card-content">\n        <ul id="yt-masthead-multilogin" style="max-height:460px; overflow-y:scroll">\n              ' +
      a +
      '\n        </ul>\n        <div id="yt-masthead-multilogin-actions" class="yt-grid-box">\n          <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-link" type="button" onclick="window.location = \'https://accounts.google.com/Logout?continue=\' + encodeURIComponent(window.location.href);" id="yt-masthead-multilogin-sign-out"><span class="yt-uix-button-content">Sign out </span></button>\n\n            <a href="/channel_switcher">Manage channels</a>\n        </div>\n    </div></div></div></div>';
    document.body.insertAdjacentHTML("beforeend", s);
  }
}

async function fuckAsync() {
  var t =
    '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
    authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
    '",\r\n\t\t\t"hl": "' +
    authinfo.HL +
    '"\r\n\t\t}\r\n\t},\r\n\t"continuation":"' +
    commentcontinuation +
    '",\r\n}\r\n';
  await v3.innerTube
    .AJAX("next?", t, "1", authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION)
    .then((t) => craftComments(t, 0));
}

function v3SearchFriend() {
  $(document).on("mouseover", ".v3-searcher", function (t) {
    t.currentTarget.classList.add("gssb_i");
  }),
    $(document).on("mouseleave", ".v3-searcher", function (t) {
      t.currentTarget.classList.remove("gssb_i");
    }),
    $(document).on("click", ".v3-searcher", function (t) {
      document.querySelector("#masthead-search-term").value =
        t.currentTarget.querySelector(
          ".gsq_a table tbody tr td span"
        ).innerText;

      try {
        document
          .getElementById("masthead-search-terms")
          .setAttribute(
            "class",
            document
              .getElementById("masthead-search-terms")
              .getAttribute("class")
              .replace(" gsfe_a", "")
          );

        try {
          document.querySelector("table.gstl_50").classList.add("hid");
        } catch (t) {}
      } catch (t) {}

      $("body").append(
        '<script>if (document.getElementById("masthead-search-term").value != "") constructSearchSuggestions(); else try{document.querySelector("table.gstl_50:not(.hid)").classList.add("hid")}catch(err){}</script>'
      ),
        document.querySelector("#masthead-search-terms").focus();
    }),
    $(document).keydown(function (t) {
      if (
        (40 == t.which &&
          document.querySelector(".v3-searcher") &&
          ("masthead-search-term" != document.activeElement.id ||
          document.querySelector(".v3-searcher.gssb_i")
            ? document.querySelector(".v3-searcher.gssb_i") &&
              (document.querySelector(".v3-searcher.gssb_i+.v3-searcher")
                ? (t.preventDefault(),
                  document
                    .querySelector(".v3-searcher.gssb_i+.v3-searcher")
                    .classList.add("gssb_i"),
                  document
                    .querySelector(".v3-searcher.gssb_i")
                    .classList.remove("gssb_i"))
                : (t.preventDefault(),
                  document
                    .querySelector(".v3-searcher.gssb_i")
                    .classList.remove("gssb_i"),
                  document
                    .querySelector(".v3-searcher:nth-of-type(1)")
                    .classList.add("gssb_i")))
            : (t.preventDefault(),
              document
                .querySelector(".v3-searcher:nth-of-type(1)")
                .classList.add("gssb_i")),
          (document.querySelector("#masthead-search-term").value =
            document.querySelector(
              ".v3-searcher.gssb_i .gsq_a table tbody tr td span"
            ).innerText)),
        38 == t.which && document.querySelector(".v3-searcher"))
      ) {
        if (
          "masthead-search-term" != document.activeElement.id ||
          document.querySelector(".v3-searcher.gssb_i")
        ) {
          if (document.querySelector(".v3-searcher.gssb_i"))
            if (
              Array.prototype.indexOf.call(
                document.querySelector(".gsq_a > table > tbody").children,
                document.querySelector(".v3-searcher.gssb_i")
              ) +
                1 ==
              1
            )
              t.preventDefault(),
                document
                  .querySelector(".v3-searcher.gssb_i")
                  .classList.remove("gssb_i"),
                document
                  .querySelector(".v3-searcher:last-of-type")
                  .classList.add("gssb_i");
            else {
              t.preventDefault();
              var e = Array.prototype.indexOf.call(
                document.querySelector(".gsq_a > table > tbody").children,
                document.querySelector(".v3-searcher.gssb_i")
              );
              e > 0 &&
                (document
                  .querySelector(".v3-searcher.gssb_i")
                  .classList.remove("gssb_i"),
                document
                  .querySelector(".v3-searcher:nth-of-type(" + e + ")")
                  .classList.add("gssb_i"));
            }
        } else
          t.preventDefault(),
            document
              .querySelector(".v3-searcher:last-of-type")
              .classList.add("gssb_i");

        document.querySelector("#masthead-search-term").value =
          document.querySelector(
            ".v3-searcher.gssb_i .gsq_a table tbody tr td span"
          ).innerText;
      }

      if (13 == t.which && document.querySelector(".v3-searcher.gssb_i")) {
        t.preventDefault(),
          (document.querySelector("#masthead-search-term").value =
            document.querySelector(
              ".v3-searcher.gssb_i .gsq_a table tbody tr td span"
            ).innerText);

        try {
          document
            .getElementById("masthead-search-terms")
            .setAttribute(
              "class",
              document
                .getElementById("masthead-search-terms")
                .getAttribute("class")
                .replace(" gsfe_a", "")
            );

          try {
            document.querySelector("table.gstl_50").classList.add("hid");
          } catch (t) {}
        } catch (t) {}

        $("body").append(
          '<script>if (document.getElementById("masthead-search-term").value != "") constructSearchSuggestions(); else try{document.querySelector("table.gstl_50:not(.hid)").classList.add("hid")}catch(err){}</script>'
        ),
          document.querySelector("#masthead-search-terms").focus(),
          document.querySelector("#search-btn").click();
      }

      if (9 == t.which && document.querySelector(".v3-searcher.gssb_i")) {
        t.preventDefault(),
          (document.querySelector("#masthead-search-term").value =
            document.querySelector(
              ".v3-searcher.gssb_i .gsq_a table tbody tr td span"
            ).innerText);

        try {
          document
            .getElementById("masthead-search-terms")
            .setAttribute(
              "class",
              document
                .getElementById("masthead-search-terms")
                .getAttribute("class")
                .replace(" gsfe_a", "")
            );

          try {
            document.querySelector("table.gstl_50").classList.add("hid");
          } catch (t) {}
        } catch (t) {}

        $("body").append(
          '<script>if (document.getElementById("masthead-search-term").value != "") constructSearchSuggestions(); else try{document.querySelector("table.gstl_50:not(.hid)").classList.add("hid")}catch(err){}</script>'
        ),
          document.querySelector("#masthead-search-terms").focus();
      }
    });
}

function v3CookiFriend() {
  $(document).on("click", ".ytp-drop-down[aria-label=Quality]", function (t) {
    $("body").append(
      '<script>document.querySelector("body").setAttribute("cpq", document.querySelector("#movie_player").getPlaybackQuality());</script>'
    );
    var e = document.querySelector("body").getAttribute("cpq");
    setTimeout(function () {
      $("body").append(
        '<script>document.querySelector("body").setAttribute("cpq", document.querySelector("#movie_player").getPlaybackQuality());</script>'
      );
      var t = document.querySelector("body").getAttribute("cpq");
      t != e &&
        (getCookie("vtpc")
          ? getCookie("vtpc") != t &&
            (document.cookie =
              "vtpc=" + t + "; expires=Thu, 24 Dec 2037 12:00:00 UTC; path=/")
          : (document.cookie =
              "vtpc=" + t + "; expires=Thu, 24 Dec 2037 12:00:00 UTC; path=/"));
    }, 3e3);
  });
}

(v3.innerTube = {}),
  (v3.innerTube.getChannelMetric = async function (t) {
    var e =
        '{"context":{"client":{"clientName":62,"clientVersion":"1.20211213.02.00","hl":"en","gl":"RO","experimentsToken":""},"request":{"returnLogEntry":true,"internalExperimentFlags":[]}},"channelIds":["' +
        t +
        '"],"mask":{"channelId":true,"title":true,"metric":{"all":true}}}',
      n = await v3.innerTube
        .AJAX(
          "creator/get_creator_channels?alt=json&",
          e,
          "62",
          "1.20211213.02.00"
        )
        .then((t) => (n = t));
    return n;
  }),
  (v3.innerTube.getChannelVideoCount = async function (t) {
    var e =
        '{"context":{"client":{"clientName":62,"clientVersion":"1.20211213.02.00","hl":"en","gl":"RO","experimentsToken":""},"request":{"returnLogEntry":true,"internalExperimentFlags":[]}},"channelIds":["' +
        t +
        '"],"mask":{"channelId":true,"title":true,"metric":{"all":true}}}',
      n = await v3.innerTube
        .AJAX(
          "creator/get_creator_channels?alt=json&",
          e,
          "62",
          "1.20211213.02.00"
        )
        .then((t) => (n = t));
    return (n =
      1 == (n = n.channels[0].metric.videoCount)
        ? "1 video"
        : n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " videos");
  }),
  (v3.innerTube.changeVideoMetadata = async function (t, e, n) {
    if (t)
      var a =
        '{"encryptedVideoId":"' +
        window.location.href.split("v=")[1].split("&")[0] +
        '","title":{"newTitle":"' +
        t +
        '","shouldSegment":true},"context":{"client":{"clientName": "ANDROID",\r\n\t\t\t"clientVersion": "14.21","hl":"en","gl":"RO","experimentsToken":""},"request":{"returnLogEntry":true,"internalExperimentFlags":[],}}}';
    else if (e || n) {
      a =
        '{"encryptedVideoId":"' +
        window.location.href.split("v=")[1].split("&")[0] +
        '"';
      e &&
        (a +=
          ',"description":{"newDescription":"' + e + '","shouldSegment":true}'),
        n && (a += ',"privacyState":{"newPrivacy":"' + n.toUpperCase() + '"}'),
        (a +=
          ',"context":{"client":{"clientName": "ANDROID",\r\n\t\t\t"clientVersion": "14.21","hl":"en","gl":"RO","experimentsToken":""},"request":{"returnLogEntry":true,"internalExperimentFlags":[],}}}');
    }
    await v3.innerTube.AJAX(
      "video_manager/metadata_update?alt=json&",
      a,
      "3",
      "14.21"
    );
  }),
  (v3.innerTube.subscribe = async function (t, e) {
    var n =
        '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
        authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
        '",\r\n\t\t\t"hl": "' +
        authinfo.HL +
        '"\r\n\t\t}\r\n\t},\r\n\t"channelIds":["' +
        t +
        '"],"params":"' +
        e +
        '",\r\n}\r\n',
      a = await v3.innerTube
        .AJAX(
          "subscription/subscribe?",
          n,
          "1",
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
        )
        .then((t) => (a = t));
    return a;
  }),
  (v3.innerTube.unsubscribe = async function (t, e) {
    var n =
        '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
        authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
        '",\r\n\t\t\t"hl": "' +
        authinfo.HL +
        '"\r\n\t\t}\r\n\t},\r\n\t"channelIds":["' +
        t +
        '"],"params":"' +
        e +
        '",\r\n}\r\n',
      a = await v3.innerTube
        .AJAX(
          "subscription/unsubscribe?",
          n,
          "1",
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
        )
        .then((t) => (a = t));
    return a;
  }),
  (v3.innerTube.sentiment = async function (t, e, n) {
    var a =
      '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
      authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
      '",\r\n\t\t\t"hl": "' +
      authinfo.HL +
      '"\r\n\t\t}\r\n\t},\r\n\t"target":{"videoId":"' +
      t +
      '"},"params":"' +
      e +
      '",\r\n}\r\n';
    if (0 == n)
      var i = await v3.innerTube
        .AJAX("like/like?", a, "1", authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION)
        .then((t) => (i = t));
    else if (1 == n)
      i = await v3.innerTube
        .AJAX(
          "like/removelike?",
          a,
          "1",
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
        )
        .then((t) => (i = t));
    else if (2 == n)
      i = await v3.innerTube
        .AJAX(
          "like/dislike?",
          a,
          "1",
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
        )
        .then((t) => (i = t));
    else if (3 == n)
      i = await v3.innerTube
        .AJAX(
          "like/removelike?",
          a,
          "1",
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
        )
        .then((t) => (i = t));
    return i;
  }),
  (v3.innerTube.rateComment = async function (t) {
    var e =
        '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
        authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
        '",\r\n\t\t\t"hl": "' +
        authinfo.HL +
        '"\r\n\t\t}\r\n\t},\r\n\t"actions":"' +
        t +
        '",\r\n}\r\n',
      n = await v3.innerTube
        .AJAX(
          "comment/perform_comment_action?",
          e,
          "1",
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
        )
        .then((t) => (n = t));
    return n;
  }),
  (v3.innerTube.subscriptionNotification = async function (t) {
    var e =
        '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
        authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
        '",\r\n\t\t\t"hl": "' +
        authinfo.HL +
        '"\r\n\t\t}\r\n\t},\r\n\t"params":"' +
        t +
        '",\r\n}\r\n',
      n = await v3.innerTube
        .AJAX(
          "notification/modify_channel_preference?",
          e,
          "1",
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
        )
        .then((t) => (n = t));
    return n;
  }),
  (v3.innerTube.getAddToAjax = async function (t) {
    var e =
        '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
        authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
        '",\r\n\t\t\t"hl": "' +
        authinfo.HL +
        '"\r\n\t\t}\r\n\t},\r\n\t"videoIds":["' +
        t +
        '"],"excludeWatchLater":false\r\n}\r\n',
      n = await v3.innerTube
        .AJAX(
          "playlist/get_add_to_playlist?",
          e,
          "1",
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
        )
        .then((t) => (n = t));
    return n;
  }),
  (v3.innerTube.editPlaylist = async function (t, e, n) {
    if (0 == n)
      var a =
        '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
        authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
        '",\r\n\t\t\t"hl": "' +
        authinfo.HL +
        '"\r\n\t\t}\r\n\t},\r\n\t"actions":[{"addedVideoId":"' +
        t +
        '","action":"ACTION_ADD_VIDEO"}],"playlistId":"' +
        e +
        '"\r\n}\r\n';
    else if (1 == n)
      a =
        '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
        authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
        '",\r\n\t\t\t"hl": "' +
        authinfo.HL +
        '"\r\n\t\t}\r\n\t},\r\n\t"actions":[{"action":"ACTION_REMOVE_VIDEO_BY_VIDEO_ID","removedVideoId":"' +
        t +
        '"}],"playlistId":"' +
        e +
        '"\r\n}\r\n';
    var i = await v3.innerTube
      .AJAX(
        "browse/edit_playlist?",
        a,
        "1",
        authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
      )
      .then((t) => (i = t));
    return i;
  }),
  (v3.innerTube.AJAX = async function (t, e, n, a) {
    var i, o, r;
    window.authinfo.INNERTUBE_API_KEY
      ? ((r = authinfo.LOGGED_IN),
        (i = authinfo.INNERTUBE_API_KEY),
        (o = authinfo.DELEGATED_SESSION_ID),
        authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION)
      : ((r = window.fytauth.LOGGED_IN),
        (i = window.fytauth.INNERTUBE_API_KEY),
        (o = window.fytauth.DELEGATED_SESSION_ID),
        window.fytauth.INNERTUBE_CONTEXT_CLIENT_VERSION);
    var s = await getSapisidhash();
    return (
      await fetch("https://www.youtube.com/youtubei/v1/" + t + "key=" + i, {
        credentials: "include",
        headers: _objectSpread(
          _objectSpread(
            _objectSpread(
              {},
              r && {
                Authorization: s
              }
            ),
            r && {
              "X-Goog-AuthUser": "0"
            }
          ),
          {},
          {
            "Content-Type": "application/json",
            Origin: "https://www.youtube.com",
            "X-Youtube-Client-Name": n,
            "X-Youtube-Client-Version": a,
            "X-GOOG-VISITOR-ID": ""
          },
          !!o && {
            "X-Goog-PageId": o
          }
        ),
        referrer: "https://www.youtube.com",
        body: e,
        method: "POST",
        mode: "cors"
      })
    ).json();
  });
var ytdata = {},
  authinfo = {},
  gbarname = "",
  v3playerwidth,
  v3playerheight,
  v3teatherwidth,
  v3teatherheight;

async function v3WatchPage() {
  window.location.href.includes("&app=true") &&
    softChangeUrl(window.location.href.replace("&app=true", ""), !0),
    document
      .querySelector("html")
      .removeAttribute("standardized-themed-scrollbar"),
    document
      .querySelector("html")
      .setAttribute("data-cast-api-enabled", "true"),
    document
      .querySelector("body")
      .removeAttribute("standardized-themed-scrollbar"),
    document
      .querySelector("body")
      .setAttribute("class", v3.htmlBuilderConfig.watch),
    document.body.classList.add("exp-fixed-masthead"),
    v3.htmlBuilderConfig.core.NIRVANA &&
      document
        .querySelector("body")
        .setAttribute(
          "class",
          "date-20140228 ltr site-center-aligned site-as-giant-card exp-appbar-open-guide exp-appbar-onebar appbar-hidden exp-appbar-small-thumbs not-exp-new-metadata-style hitchhiker-enabled guide-enabled guide-collapsed sidebar-expanded exp-using-innertube innertube-v2 innertube-player exp-using-v3-snap page-loaded exp-modern-cinema-player exp-modern-sentiment-bar"
        ),
    document.querySelector("body").setAttribute("data-player-size", "small"),
    useverbose &&
      console.log(
        "%c[v3experimentalcore]\n\n",
        "color: #8A2BE2",
        " DEBUG : detected v3 watch test page"
      );
  var t = document.createElement("div");
  t.setAttribute("id", "ytdata-temp-container"),
    t.setAttribute("style", "display:none;"),
    document.querySelector("body").append(t),
    $("body").append(
      '<script>document.querySelector("#ytdata-temp-container").innerHTML = JSON.stringify(ytInitialData);</script>'
    ),
    (ytdata = document.querySelector("#ytdata-temp-container").innerHTML),
    (ytdata = JSON.parse(ytdata));
  var e = document.createElement("div");
  e.setAttribute("id", "ytauthdata-temp-container"),
    e.setAttribute("style", "display:none;"),
    document.querySelector("body").append(e),
    $("body").append(
      '<script>var authinfo = {};\r\nauthinfo.INNERTUBE_API_KEY = yt.config_.INNERTUBE_API_KEY;\r\nauthinfo.INNERTUBE_CONTEXT = yt.config_.INNERTUBE_CONTEXT;\r\nauthinfo.INNERTUBE_CONTEXT_CLIENT_VERSION = yt.config_.INNERTUBE_CONTEXT_CLIENT_VERSION;\r\nauthinfo.LOGGED_IN = yt.config_.LOGGED_IN;\r\nauthinfo.DELEGATED_SESSION_ID = yt.config_.DELEGATED_SESSION_ID;\r\nauthinfo.HL = yt.config_.HL;\r\nauthinfo.GL = yt.config_.GL;\r\nauthinfo.VISITOR_DATA = yt.config_.VISITOR_DATA;try{authinfo.playerVersion = yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_CHANNEL_TRAILER.cssUrl.split("/")[3];}catch(err){}try{authinfo.VIDEO_LENGTH = parseInt(ytInitialPlayerResponse.videoDetails.lengthSeconds);}catch(err){}try{if (ytInitialPlayerResponse.videoDetails.averageRating) authinfo.VIDEO_RATING = ytInitialPlayerResponse.videoDetails.averageRating; else authinfo.VIDEO_RATING = innertuberesponse.videoDetails.averageRating;}catch(err){}try{authinfo.VIDEO_DESCRIPTION = ytInitialPlayerResponse.videoDetails.shortDescription;}catch(err){} \r\ndocument.querySelector("#ytauthdata-temp-container").innerHTML = JSON.stringify(authinfo);</script>'
    ),
    (authinfo = JSON.parse(
      document.querySelector("#ytauthdata-temp-container").innerHTML
    )),
    v3.watch.parseYtData(ytdata);
  var n = document.createElement("div");
  n.setAttribute("id", "body-container"),
    document.querySelector("body").prepend(n),
    (gbarname = "Sign In"),
    authinfo.LOGGED_IN &&
      (getUnreadNotifications(),
      document.querySelector("body").classList.add("user-logged-in"),
      (gbarname = v3.UIMSG[v3.nationIndex].GBAR_INFO_MY_ACCOUNT)),
    buildPageFrame(),
    buildWatchContainer(),
    buildPlayerContainer(),
    createGb(),
    v3.htmlBuilderConfig.core.NIRVANA &&
      document.querySelector("#gb").classList.add("hid"),
    $("body").append(
      '<script>function v3ExpandDescription(){document.querySelector("#watch-description").setAttribute("class", "yt-uix-expander yt-uix-button-panel");}function v3CollapseDescription(){document.querySelector("#watch-description").setAttribute("class", "yt-uix-expander yt-uix-expander-collapsed yt-uix-button-panel");} document.body.setAttribute("w-expander", "")</script>'
    ),
    document.querySelector("#ytauthdata-temp-container").remove(),
    document.querySelector("#ytdata-temp-container").remove();
}

function buildPageFrame() {
  document.querySelector("html[c3]") &&
    isownchannel &&
    document
      .querySelector("head")
      .insertAdjacentHTML(
        "beforeend",
        '<link id="css-688526440" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-watch-inlineedit-vflg-l3kd.css" data-loaded="true">'
      );
  var t = document.createElement("div");
  t.setAttribute("id", "yt-masthead-container"),
    v3.htmlBuilderConfig.core.NIRVANA
      ? (document
          .querySelector("#body-container")
          .insertAdjacentHTML(
            "beforeend",
            '<div id="masthead-positioner"></div><div id="masthead-positioner-height-offset"></div>'
          ),
        document.querySelector("#masthead-positioner").append(t))
      : document.querySelector("#body-container").append(t);
  var e,
    n = document.createElement("div");
  n.setAttribute("id", "alerts"),
    document.querySelector("#body-container").append(n),
    (e =
      1 == authinfo.LOGGED_IN
        ? v3.htmlBuilderConfig.core.NIRVANA
          ? '<div id="yt-masthead-user" class="yt-uix-clickcard"> <span class="yt-uix-button-group" id="appbar-onebar-upload-group"><a href="//www.youtube.com/upload" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsb" id="upload-btn" data-upsell="upload"><span class="yt-uix-button-content">Upload </span></a><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon flip" type="button" onclick=";return false;" aria-haspopup="true" id="appbar-settings-button" data-button-menu-fixed="True" data-button-menu-action="yt.www.masthead.appbar.toggleMenu" data-button-menu-id="appbar-settings-menu" aria-label="Settings" aria-pressed="false" aria-expanded="false"><span class="yt-uix-button-icon-wrapper"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-button-icon yt-uix-button-icon-appbar-settings"></span><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-button-arrow"></button><ul id="appbar-settings-menu" class="appbar-menu yt-uix-button-menu yt-uix-button-menu-default yt-uix-button-menu-external hid" role="menu" aria-haspopup="true" style="min-width: 33px; left: 1576.75px; top: 37px; display: none;">  <li role="menuitem">\n    <a href="/dashboard" class="yt-uix-button-menu-item upload-menu-item yt-uix-sessionlink" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsb">\n        <span class="yt-valign icon-container">\n          <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="upload-menu-dashboard-icon yt-valign-container">\n        </span>\n      Dashboard\n    </a>\n  </li>\n  <li role="menuitem">\n    <a href="/my_videos" class="yt-uix-button-menu-item upload-menu-item yt-uix-sessionlink" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsb">\n        <span class="yt-valign icon-container">\n          <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="upload-menu-vm-icon yt-valign-container">\n        </span>\n      Video Manager\n    </a>\n  </li>\n  <li role="menuitem">\n    <a href="https://www.youtube.com/analytics" class="yt-uix-button-menu-item upload-menu-item yt-uix-sessionlink" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsb">\n        <span class="yt-valign icon-container">\n          <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="upload-menu-analytics-icon yt-valign-container">\n        </span>\n      Analytics\n    </a>\n  </li>\n  <li role="menuitem" class="yt-uix-button-menu-new-section-separator">\n    <a href="/account" class="yt-uix-button-menu-item upload-menu-item yt-uix-sessionlink" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsb">\n      YouTube settings\n    </a>\n  </li>\n<li role="menuitem">    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-google-help yt-uix-button-reverse yt-google-help-link inq-no-click yt-uix-button-menu-item upload-menu-item" type="button" onclick=";return false;" data-ghelp-anchor="appbar-settings-button" data-ghelp-tracking-param="appbar" id="appbar-help"><span class="yt-uix-button-content">Help\n </span></button>\n</li></ul></span>   <span id="yt-masthead-user-displayname" dir="ltr" class="yt-valign-container yt-masthead-toggle-expanded">\n      My account\n    </span>\n\n    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon sb-notif-off" type="button" onclick=";return false;" id="sb-button-notify"><span class="yt-uix-button-icon-wrapper"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-button-icon yt-uix-button-icon-bell"></span><span class="yt-uix-button-content">  </span></button>\n\n      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-masthead-user-icon yt-masthead-toggle-expanded" type="button" onclick=";return false;" data-orientation="vertical"><span class="yt-uix-button-content">    <span class="video-thumb  yt-thumb yt-thumb-27">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img src="' +
            userpicture +
            '" alt="" aria-hidden="true" width="27" height="27">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n </span></button>\n\n</div>'
          : '<div id="yt-masthead-user" class="yt-uix-clickcard">    <span id="yt-masthead-user-displayname" dir="ltr" class="yt-valign-container yt-masthead-toggle-expanded">\n      My account\n    </span>\n\n    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon sb-notif-off" type="button" onclick=";return false;" id="sb-button-notify"><span class="yt-uix-button-icon-wrapper"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-button-icon yt-uix-button-icon-bell"></span><span class="yt-uix-button-content">  </span></button>\n\n      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-masthead-user-icon yt-masthead-toggle-expanded" type="button" onclick=";return false;" data-orientation="vertical"><span class="yt-uix-button-content">    <span class="video-thumb  yt-thumb yt-thumb-27">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img src="' +
            userpicture +
            '" alt="" aria-hidden="true" width="27" height="27">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n </span></button>\n\n</div>'
        : v3.htmlBuilderConfig.core.NIRVANA
        ? '<div id="yt-masthead-signin"><span id="appbar-onebar-upload-group" class="yt-uix-button-group"><a href="//www.youtube.com/upload" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default" data-sessionlink="feature=mhsb&amp;ei=KL0PU_zcDcLX-APTkYFw" id="upload-btn"><span class="yt-uix-button-content">Upload </span></a></span><button class=" yt-uix-button yt-uix-button-primary yt-uix-button-size-default" type="button" href="https://accounts.google.com/ServiceLogin?hl=en&amp;passive=true&amp;service=youtube&amp;continue=' +
          encodeURIComponent(window.location.href) +
          ';uilel=3" onclick=";window.location.href=this.getAttribute(\'href\');return false;" role="button"><span class="yt-uix-button-content">Sign in </span></button></div>'
        : '<div id="yt-masthead-signin"><button class=" yt-uix-button yt-uix-button-primary yt-uix-button-size-default" type="button" href="https://accounts.google.com/ServiceLogin?hl=en&amp;passive=true&amp;service=youtube&amp;continue=' +
          encodeURIComponent(window.location.href) +
          ';uilel=3" onclick=";window.location.href=this.getAttribute(\'href\');return false;" role="button"><span class="yt-uix-button-content">Sign in </span></button></div>'),
    v3.htmlBuilderConfig.core.NIRVANA
      ? (document.querySelector("#yt-masthead-container").outerHTML =
          '<div id="yt-masthead-container" class="yt-grid-box yt-base-gutter"><div id="yt-masthead" class="">    <div class="yt-masthead-logo-container "><a id="logo-container" href="/reporthistory?v3feed=wHaT_2_wAtCh" title="YouTube home" class=" "><img id="logo" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="YouTube home"></a><button onclick=";return false;" class="appbar-guide-toggle appbar-guide-clickable-ancestor yt-uix-button yt-uix-button-text yt-uix-button-size-default yt-uix-button-has-icon yt-uix-button-empty" id="appbar-guide-button" type="button" role="button" aria-label="Guide"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-appbar-guide" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button></div>' +
          e +
          '<div id="yt-masthead-content"><span id="masthead-upload-button-group" style="display:none!important"><a href="//www.youtube.com/upload" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default" data-sessionlink="ei=2I-cUqS7MofVgAKhooHoCw&amp;feature=mhsb"><span class="yt-uix-button-content">' +
          v3.UIMSG[v3.nationIndex].MASTHEAD_UPLOAD +
          ' </span></a></span><form id="masthead-search" class="search-form consolidated-form" action="/results" onsubmit="if (_gel(\'masthead-search-term\').value == \'\') return false;"><button type="submit" dir="ltr" id="search-btn" tabindex="2" class="search-btn-component search-button yt-uix-button yt-uix-button-default yt-uix-button-size-default" onclick="if (_gel(\'masthead-search-term\').value == \'\') return false; _gel(\'masthead-search\').submit(); return false;;return true;" role="button"><span class="yt-uix-button-content">Search </span></button><div id="masthead-search-terms" class="masthead-search-terms-border" dir="ltr"><label><input id="masthead-search-term" autocomplete="off" class="search-term yt-uix-form-input-bidi" name="search_query" value="" type="text" tabindex="1" title="Search" dir="ltr" spellcheck="false" style="outline: none;"></label></div><input type="hidden" name="sm"></form></div></div></div>')
      : (document.querySelector("#yt-masthead-container").outerHTML =
          '<div id="yt-masthead-container" class="yt-grid-box yt-base-gutter"><div id="yt-masthead" class="">    <a id="logo-container" href="/reporthistory?v3feed=wHaT_2_wAtCh" title="YouTube home" class=" "><img id="logo" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="YouTube home"></a>' +
          e +
          '<div id="yt-masthead-content"><span id="masthead-upload-button-group"><a href="//www.youtube.com/upload" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default" data-sessionlink="ei=2I-cUqS7MofVgAKhooHoCw&amp;feature=mhsb"><span class="yt-uix-button-content">' +
          v3.UIMSG[v3.nationIndex].MASTHEAD_UPLOAD +
          ' </span></a></span><form id="masthead-search" class="search-form consolidated-form" action="/results" onsubmit="if (_gel(\'masthead-search-term\').value == \'\') return false;"><button type="submit" dir="ltr" id="search-btn" tabindex="2" class="search-btn-component search-button yt-uix-button yt-uix-button-default yt-uix-button-size-default" onclick="if (_gel(\'masthead-search-term\').value == \'\') return false; _gel(\'masthead-search\').submit(); return false;;return true;" role="button"><span class="yt-uix-button-content">Search </span></button><div id="masthead-search-terms" class="masthead-search-terms-border" dir="ltr"><label><input id="masthead-search-term" autocomplete="off" class="search-term yt-uix-form-input-bidi" name="search_query" value="" type="text" tabindex="1" title="Search" dir="ltr" spellcheck="false" style="outline: none;"></label></div><input type="hidden" name="sm"></form></div></div></div>'),
    1 == authinfo.LOGGED_IN
      ? (document
          .querySelector("#masthead-upload-button-group")
          .setAttribute("class", "yt-uix-button-group"),
        document
          .querySelector("#masthead-upload-button-group > a")
          .classList.add("start"),
        (document.querySelector("#masthead-upload-button-group").innerHTML +=
          '<button aria-haspopup="true" onclick="return false;" class="end flip yt-uix-button yt-uix-button-default yt-uix-button-size-default yt-uix-button-empty" type="button" data-button-menu-id="upload-button-menu" role="button" aria-label="Creator tools menu" aria-pressed="false" aria-expanded="false"><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>'))
      : document
          .querySelector("body")
          .insertAdjacentHTML(
            "beforeend",
            '<div id="yt-uix-clickcard-card5" class="yt-uix-clickcard-card yt-uix-clickcard-card-reverse hid" style="left: 301.922px; top: 673px;"><div class="yt-uix-card-border-arrow yt-uix-card-border-arrow-vertical" style="right: 21px;"></div><div class="yt-uix-clickcard-card-border"><div class="yt-uix-card-body-arrow yt-uix-card-body-arrow-vertical" style="right: 21px;"></div><div class="yt-uix-clickcard-card-body"><div class="watch7-hovercard yt-uix-clickcard-card-content">\n    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>\n    <div class="watch7-hovercard-message">\n      Sign in with your Google Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to add <span class="yt-user-name  g-hovercard" dir="ltr" data-ytid="">' +
              authorname +
              '</span>\'s video to your playlist.\n\n    </div>\n    <ul class="watch7-hovercard-icon-strip clearfix">\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-youtube-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gplus-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gmail-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-picasa-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-chrome-icon"></div>\n      </li>\n    </ul>\n    <div class="watch7-hovercard-account-line">\n      <a href="https://accounts.google.com/ServiceLogin?hl=en&amp;passive=true&amp;service=youtube&amp;continue=' +
              encodeURIComponent(window.location.href) +
              '&amp;uilel=3" class="yt-uix-button yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=2I-cUqS7MofVgAKhooHoCw"><span class="yt-uix-button-content">Sign in </span></a>\n    </div>\n  </div></div></div></div>'
          ),
    "en" != authinfo.GL.toLowerCase() &&
      (document.querySelector("#logo-container").innerHTML +=
        '<span class="content-region">' + authinfo.GL + "</span>"),
    buildFooter(),
    1 == haserror &&
      (document
        .querySelector("#body-container")
        .insertAdjacentHTML("beforeend", create404(errorreason)),
      document.querySelector("html").setAttribute("c3loaded", "")),
    isgecko &&
      ((document.querySelector("#alerts").innerHTML =
        '<div class="yt-alert yt-alert-default yt-alert-info hid " id="old-browser-alert" style="display: block;">  <div class="yt-alert-icon">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-buttons"><button class="close yt-uix-close yt-uix-button yt-uix-button-close yt-uix-button-size-default" onclick="yt.net.cookies.set(\'hideOldBrowserBox\', \'true\', 604800);;return false;" type="button" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>\n    <div class="yt-alert-message">\n            You\'re using a gecko-based browser. Functionality is not guaranteed.\n\n    </div>\n</div></div>'),
      document.querySelector(".showing-alert") ||
        document.querySelector("body").classList.add("showing-alert")),
    issentimentbarbroken &&
      !getCookie("isup") &&
      ((document.querySelector("#alerts").innerHTML =
        '<div class="yt-alert yt-alert-default yt-alert-info hid " id="dumb-update" style="display: block;">  <div class="yt-alert-icon">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-buttons"><button class="close yt-uix-close yt-uix-button yt-uix-button-close yt-uix-button-size-default" onclick="document.querySelector(\'.yt-alert\').remove(); document.querySelector(\'.showing-alert\').classList.remove(\'showing-alert\'); document.cookie=\'isup=true; expires=Thu, 24 Dec 2037 12:00:00 UTC; path=/\';" type="button" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>\n    <div class="yt-alert-message">\n            ' +
        (authinfo.VIDEO_RATING
          ? v3.UIMSG[v3.nationIndex].WARNING_SENTIMENT_BAR_BROKEN_211110
          : v3.UIMSG[v3.nationIndex].WARNING_SENTIMENT_BAR_DEATH) +
        "\n\n    </div>\n</div></div>"),
      document.querySelector(".showing-alert") ||
        document.querySelector("body").classList.add("showing-alert")),
    v3.htmlBuilderConfig.core.NIRVANA &&
      document.querySelector("#alerts").classList.add("content-alignment"),
    v3.warningNationIndex &&
      ((document.querySelector("#alerts").innerHTML =
        '<div class="yt-alert yt-alert-default yt-alert-info hid " id="dumb-update" style="display: block;">  <div class="yt-alert-icon">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-buttons"><button class="close yt-uix-close yt-uix-button yt-uix-button-close yt-uix-button-size-default" onclick="document.querySelector(\'.yt-alert\').remove(); document.querySelector(\'.showing-alert\').classList.remove(\'showing-alert\'); document.cookie=\'isup=true; expires=Thu, 24 Dec 2037 12:00:00 UTC; path=/\';" type="button" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>\n    <div class="yt-alert-message">\n            You are using YouTube in a language V3 does not currently support. <a href="/supported_browsers">Switch to English</a> or <a href="/supported_browsers">learn how you can help fixing this</a>.\n\n    </div>\n</div></div>'),
      document.querySelector(".showing-alert") ||
        document.querySelector("body").classList.add("showing-alert")),
    api.common.initialTasks.INITIAL_TIP &&
      !getCookie("vtcf").includes("i=1") &&
      ((document.querySelector("#alerts").innerHTML =
        '<div class="yt-alert yt-alert-default yt-alert-info hid " id="v3-initial-tip" style="display: block;">  <div class="yt-alert-icon">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-buttons"><button class="close yt-uix-close yt-uix-button yt-uix-button-close yt-uix-button-size-default" onclick="document.querySelector(\'.yt-alert\').remove(); document.querySelector(\'.showing-alert\').classList.remove(\'showing-alert\'); v3.setSetting(\'ignoreinitialtip\', 1, 0);" type="button" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>\n    <div class="yt-alert-message">\n            ' +
        api.common.initialTasks.INITIAL_TIP +
        "\n\n    </div>\n</div></div>"),
      document.querySelector(".showing-alert") ||
        document.querySelector("body").classList.add("showing-alert"));
}

function buildMastSetting() {
  var t = document.createElement("div");
  t.setAttribute("id", "masthead-expanded"),
    t.setAttribute("class", "hid"),
    (t.innerHTML =
      '<div id="masthead-expanded-container" class="with-sandbar">\n      <div id="masthead-expanded-menus-container">\n\n\n        <span id="masthead-expanded-menu-shade"></span>\n          <div id="masthead-expanded-menu">\n    <span class="masthead-expanded-menu-header">\n' +
      v3.UIMSG[v3.nationIndex].MASTHEAD_NAME +
      '\n    </span>\n    <ul id="masthead-expanded-menu-list">\n      <li class="masthead-expanded-menu-item">\n        <a href="/profile" class="yt-uix-sessionlink" data-sessionlink="">\n' +
      v3.UIMSG[v3.nationIndex].MASTHEAD_PROFILE +
      '\n        </a>\n      </li>\n      <li class="masthead-expanded-menu-item">\n        <a href="/my_videos" class="yt-uix-sessionlink" data-sessionlink="">\n' +
      v3.UIMSG[v3.nationIndex].MASTHEAD_UPLOAD_VIDEO_MANAGER +
      '\n        </a>\n      </li>\n      <li class="masthead-expanded-menu-item">\n        <a href="/feed/subscriptions" class="yt-uix-sessionlink" data-sessionlink="">' +
      v3.UIMSG[v3.nationIndex].MASTHEAD_SUBSCRIPTIONS +
      '</a>\n      </li>\n      <li class="masthead-expanded-menu-item">\n        <a href="/account" class="yt-uix-sessionlink" data-sessionlink="">\n' +
      v3.UIMSG[v3.nationIndex].MASTHEAD_SETTINGS +
      '\n        </a>\n      </li>\n        <li class="masthead-expanded-menu-item">\n          <a href="https://accounts.google.com/b/0/DelegateAccountSelector?continue=https%3A%2F%2Fyoutube.com%2Fchannel_switcher" class="yt-uix-sessionlink" data-sessionlink="">\n' +
      v3.UIMSG[v3.nationIndex].MASTHEAD_CHANNEL_PAGE +
      '\n          </a>\n        </li>\n    </ul>\n  </div>\n\n          <div id="masthead-expanded-google-menu">\n    <span class="masthead-expanded-menu-header">\n' +
      v3.UIMSG[v3.nationIndex].MASTHEAD_G_NAME +
      '\n    </span>\n    <div id="masthead-expanded-menu-google-container">\n      <div id="masthead-expanded-menu-google-column1">\n        <ul>\n          <li class="masthead-expanded-menu-item">\n            <a href="/account_advanced">\n' +
      v3.UIMSG[v3.nationIndex].MASTHEAD_G_SETTING +
      '\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div id="masthead-expanded-menu-google-column2">\n        <div id="masthead-expanded-menu-account-container">\n              <img id="masthead-expanded-menu-gaia-photo" alt="" data-src="' +
      userpicture +
      '" width="28" height="28" src="' +
      userpicture +
      '">\n  <div id="masthead-expanded-menu-account-info" class="email-only">\n      <p>' +
      accountname +
      '</p>\n    <p id="masthead-expanded-menu-email">' +
      accountemail +
      '</p>\n  </div>\n\n        </div>\n        <ul>\n          <li class="masthead-expanded-menu-item">\n            \n                <div class="yt-uix-clickcard masthead-expanded-menu-switch" data-card-class="masthead-card-switch-account">\n    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-link yt-uix-clickcard-target" type="button" onclick=";return false;" data-position="rightbottom" data-orientation="vertical"><span class="yt-uix-button-content">' +
      v3.UIMSG[v3.nationIndex].MASTHEAD_CHANNEL_SELECTOR +
      ' </span></button>\n    \n  </div>\n\n            </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n      </div>\n      <div id="masthead-expanded-sandbar" class=" spf-link ">\n        <div id="masthead-expanded-lists-container">\n<div id="masthead-expanded-loading-message">Loading...</div>\n        </div>\n      </div>\n      <div class="clear"></div>\n    </div>'),
    insertAfter(document.querySelector("#yt-masthead-container"), t),
    (document.querySelector(
      "[data-card-class=masthead-card-switch-account]"
    ).onclick = function () {
      getChannelSwitcher();
    }),
    injectNotificationBody();
}

function buildWatchContainer() {
  var t = document.createElement("div");
  t.setAttribute("id", "page-container"),
    document.querySelector("#body-container").append(t);
  var e = document.createElement("div");
  e.setAttribute("id", "page"),
    e.setAttribute("class", "  watch   clearfix"),
    document.querySelector("#page-container").append(e);
  var n = document.createElement("div");
  n.setAttribute("id", "guide"),
    document.querySelector("#page").append(n),
    (document.querySelector("#page #guide").innerHTML =
      '<div id="guide-container" class="    collapsible-guide  loading">\n    <div id="guide-main" class="    guide-module collapsed     spf-nolink   yt-uix-tdl " data-fold="225,173">\n      <div id="guide-loading-toggle" class="guide-module-toggle">\n        <span class="guide-module-toggle-icon">\n          <span class="guide-module-toggle-arrow"></span>\n          <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\n        </span>\n        <div class="guide-module-toggle-label">\n          <h3>\n            <span>\nGuide\n            </span>\n          </h3>\n        </div>\n      </div>\n      <div class="guide-module-content guide-module-loading">\n          <p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n      </div>\n    </div>\n  </div>'),
    0 == authinfo.LOGGED_IN && buildStaticGuide(),
    v3.htmlBuilderConfig.core.NIRVANA &&
      ((document.querySelector("#guide-container").outerHTML =
        '<div id="appbar-guide-menu" class="appbar-menu appbar-guide-menu-visibility appbar-guide-clickable-ancestor yt-uix-scroller" style="top: 0px;" data-scroller-mousewheel-listener="" data-scroller-scroll-listener="">' +
        document.querySelector("#guide-container").outerHTML +
        "</div>"),
      document
        .querySelector("#guide-loading-toggle")
        .setAttribute("style", "display:none!important"));

  try {
    window.innerWidth > 1165 &&
      null !=
        ytdata.contents.twoColumnWatchNextResults.results.results.contents &&
      !usingvevocover &&
      (document.querySelector("#guide-main").classList.remove("collapsed"),
      document.querySelector("#guide-main").classList.add("uncollapsed"));
  } catch (t) {}

  var a = document.createElement("div");
  a.setAttribute("id", "player"),
    cinemastate
      ? a.setAttribute("class", "watch-medium")
      : a.setAttribute("class", "watch-small"),
    usingvevocover &&
      (a.setAttribute("class", "watch-branded-banner"),
      a.setAttribute(
        "style",
        'background: url("' +
          chrome.extension.getURL("/images/VEVO/VEVO_COVER.png") +
          '") left top no-repeat rgb(209, 208, 212);'
      )),
    document.querySelector("#page").append(a);
  var i = document.createElement("div");
  i.setAttribute("id", "content"),
    i.setAttribute("class", ""),
    document.querySelector("#page").append(i),
    v3.htmlBuilderConfig.core.NIRVANA &&
      document
        .querySelector("#content")
        .setAttribute("class", "  content-alignment    yt-card "),
    buildWatch7();
}

function buildPlayerContainer() {
  window.innerWidth < 1590 &&
    ((v3playerwidth = 652),
    (v3playerheight = 360),
    (v3teatherwidth = 866),
    (v3teatherheight = 480)),
    window.innerWidth > 1590 &&
      ((v3playerwidth = 866),
      (v3playerheight = 480),
      (v3teatherwidth = 1292),
      (v3teatherheight = 720)),
    window.innerWidth > 2550 &&
      ((v3playerwidth = 1292),
      (v3playerheight = 720),
      (v3teatherwidth = 1292),
      (v3teatherheight = 720)),
    ytdata.contents.twoColumnWatchNextResults.playlist && craftPlaylist();
  var t = document.createElement("div");
  t.setAttribute("id", "player-api"),
    (t.innerHTML = html5PlayerTemplate()),
    t.setAttribute(
      "class",
      "player-width player-height off-screen-target watch-content player-api"
    ),
    document.querySelector("#player").append(t),
    usingvevocover &&
      document
        .querySelector("#player")
        .insertAdjacentHTML(
          "beforeend",
          '<div id="player-branded-banner">\n            \n\n    <map name="watch-branding-small-banner-image-map"><area shape="rect" coords="0,0,640,70" href="/redirect?event=imagemapurl&amp;q=http%3A%2F%2Fvevo.ly%2F190GRF4&amp;usg=sqfFiQK5nNQxIuhXAITetLoMh88="></map>\n      <img usemap="#watch-branding-small-banner-image-map" data-thumb="' +
            chrome.extension.getURL("/images/VEVO/small_banner.png") +
            '" src="' +
            chrome.extension.getURL("/images/VEVO/small_banner.png") +
            '" onmousedown="yt.tracking.track(\'image_map_down\', \'feature=vevo\')" height="70" width="640" class="banner-small" data-group-key="thumb-group-0">\n\n    \n\n    <map name="watch-branding-large-banner-image-map"><area shape="rect" coords="0,0,862,69" href="/redirect?event=imagemapurl&amp;q=http%3A%2F%2Fvevo.ly%2F190GRF4&amp;usg=sqfFiQK5nNQxIuhXAITetLoMh88="></map>\n      <img usemap="#watch-branding-large-banner-image-map" data-thumb="http://i1.ytimg.com/u/ZijND2e2tPp2AQL8Go2YSg/large_banner.jpg?v=51c1d9de" src="' +
            chrome.extension.getURL("/images/VEVO/BIG_BANNER.png") +
            '" onmousedown="yt.tracking.track(\'image_map_down\', \'feature=vevo\')" height="70" width="854" class="banner-large" data-group-key="thumb-group-0">\n\n\n\n  </div>'
        ),
    ytdata.contents.twoColumnWatchNextResults.playlist && craftPlaylist2(),
    waitForElm2("#player-api video").then(function (t) {
      v3.watch.v3playerfriend();
    }),
    v3.watch.v3mainfriend();
}

async function playerAddWl() {
  var t = {
    id: "WL"
  };
  t.videoid = window.location.href.split("?v=")[1].split("&")[0];
  await v3.innerTube.editPlaylist(t.videoid, t.id, 0).then((t) => {
    "STATUS_SUCCEEDED" == t.status
      ? (document.querySelector(".ytp-button-watch-later").className =
          "ytp-button ytp-button-watch-later html5-async-success")
      : (document.querySelector(".ytp-button-watch-later").className =
          "ytp-button ytp-button-watch-later html5-async-error v3-finish");
  });
}

function gtErrCreateLog(t) {
  t = t.replace(/\n/g, "<br />");
  var e = document.createElement("div"),
    n = Date.now();
  e.setAttribute("id", "gterrPlaceholderDivRid" + n);
  var a = document.getElementById("footer-container").nextSibling;
  document.body.insertBefore(e, a),
    (document.getElementById("gterrPlaceholderDivRid" + n).outerHTML =
      '<div id="yt-dialog-bg" class="yt-dialog-bg gterrorbg" style="height: 100%;width: 100%;position: fixed;"></div>');
  var i = document.createElement("div");
  n = Date.now();
  i.setAttribute("id", "gterrPlaceholderDivRid" + n);
  a = document.getElementById("page-container");
  document.getElementById("page-container").appendChild(i),
    (document.getElementById("gterrPlaceholderDivRid" + n).outerHTML =
      '<div id="gterr-dialog" class="yt-dialog preserve-players" data-player-ready-pubsub-key="589"><div class="yt-dialog-base"> <span class="yt-dialog-align"></span><div role="dialog" tabindex="0" class="yt-dialog-fg yt-uix-overlay-primary yt-uix-overlay"><div class="yt-dialog-fg-content yt-dialog-show-content"><div class="yt-dialog-content"><div class="gterr-overlay-content-container"><div style="margin-top: 20px"><h1>' +
      v3.loggerTitle +
      '</h1></div><div style="margin-top: 20px;width: 600px;height: 300px;border: 1px solid #ccc;padding: 6px;overflow: scroll;overflow-x: auto;">' +
      t +
      '</div><div class="yt-uix-overlay-actions"><button id="gterr-log-close" class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-overlay-close" type="button" onclick="document.getElementById(\'gterr-dialog\').remove(); document.querySelector(\'.gterrorbg\').remove();"><span class="yt-uix-button-content">close</span></button></div></div></div></div><div class="yt-dialog-focus-trap" tabindex="0"></div></div></div></div>');
}

function craftMoviePlayerInfo() {
  var t =
    '<div class="html5-info-panel-loading-icon"><canvas width="30" height="30" class="html5-info-panel-loader" style="display: none;" aria-hidden="true"></canvas></div><div class="html5-info-panel-content"><div><div class="html5-author-img"><img src="' +
    authorpic +
    '"></div><div class="html5-author-info"><div class="html5-author-name">' +
    authorname +
    '</div></div><div class="html5-subscribe-button-container">' +
    document.querySelector("#watch7-subscription-container").innerHTML +
    '  <span class="yt-subscription-button-disabled-mask" title=""></span>\n</span></div></div><div><div class="html5-video-info"><div class="html5-view-count">' +
    viewcount +
    '</div><div class="ytp-sentiment-display"><div class="ytp-sentiment-bar"><div class="ytp-sentiment-bar-likes" style="width: ' +
    sentimentbarprocent +
    '%;"></div><div class="ytp-sentiment-bar-dislikes" style="width: ' +
    parseInt(100 - sentimentbarprocent) +
    '%;"></div><p id="v3_debug_info" style="position:relative; top:10px; line-height:18px;">V3CORE DEBUG:<br>Title: ' +
    chrome.runtime.getManifest().name +
    "<br>Version: " +
    chrome.runtime.getManifest().version +
    "<br>Tag: " +
    chrome.runtime.getManifest().description +
    "<br>CV: true<br>NIRVANA: " +
    v3.htmlBuilderConfig.core.NIRVANA +
    '</p></div></div></div><p class="html5-description-text" dir="auto"></p></div></div>';
  document.querySelector(".html5-info-panel").innerHTML = t;
}

function buildStaticGuide() {
  document.querySelector(".guide-module-content").innerHTML =
    '<ul class="guide-toplevel">\n            <li class="guide-section vve-check" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg&amp;ved=CAIQ5isoAA" data-visibility-tracking="CAAQ5isiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n    <div class="guide-item-container personal-item">\n      <ul class="guide-user-links yt-box">\n            <li class="vve-check overflowable-list-item guide-channel" id="HCtnHdj3df7iM-guide-item" data-visibility-tracking="CAEQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HCtnHdj3df7iM" title="Popular on YouTube" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAEQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HCtnHdj3df7iM" data-serialized-endpoint="0qDduQEPEg1IQ3RuSGRqM2RmN2lN">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/tnHdj3df7iM/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Popular on YouTube</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UC-9-kyTW8ZkZNDHQJ6FgpwQ-guide-item" data-visibility-tracking="CAIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ" title="Music" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UC-9-kyTW8ZkZNDHQJ6FgpwQ" data-serialized-endpoint="0qDduQEaEhhVQy05LWt5VFc4WmtaTkRIUUo2Rmdwd1E%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Music</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HC7Dr1BKwqctY-guide-item" data-visibility-tracking="CAMQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HC7Dr1BKwqctY" title="Sports" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAMQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HC7Dr1BKwqctY" data-serialized-endpoint="0qDduQEPEg1IQzdEcjFCS3dxY3RZ">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/7Dr1BKwqctY/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Sports</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HChfZhJdhTqX8-guide-item" data-visibility-tracking="CAQQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HChfZhJdhTqX8" title="Gaming" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAQQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HChfZhJdhTqX8" data-serialized-endpoint="0qDduQEPEg1IQ2hmWmhKZGhUcVg4">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/hfZhJdhTqX8/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Gaming</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HC-r1FlvvNFs0-guide-item" data-visibility-tracking="CAUQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HC-r1FlvvNFs0" title="Education" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAUQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HC-r1FlvvNFs0" data-serialized-endpoint="0qDduQEPEg1IQy1yMUZsdnZORnMw">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/-r1FlvvNFs0/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Education</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UCczhp4wznQWonO7Pb8HQ2MQ-guide-item" data-visibility-tracking="CAYQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UCczhp4wznQWonO7Pb8HQ2MQ" title="Movies" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAYQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UCczhp4wznQWonO7Pb8HQ2MQ" data-serialized-endpoint="0qDduQEaEhhVQ2N6aHA0d3puUVdvbk83UGI4SFEyTVE%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://lh3.googleusercontent.com/-DIjHsEMMaRE/AAAAAAAAAAI/AAAAAAAAAAA/q6whn_JcUH8/s88-c-k-no/photo.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Movies</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UCl8dMTqDrJQ0c8y23UBu4kQ-guide-item" data-visibility-tracking="CAcQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UCl8dMTqDrJQ0c8y23UBu4kQ" title="TV Shows" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAcQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UCl8dMTqDrJQ0c8y23UBu4kQ" data-serialized-endpoint="0qDduQEaEhhVQ2w4ZE1UcURySlEwYzh5MjNVQnU0a1E%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://lh4.googleusercontent.com/-hFxEr8QHrvM/AAAAAAAAAAI/AAAAAAAAAAA/REjjL0X3gIs/s88-c-k-no/photo.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>TV Shows</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HCPvDBPPFfuaM-guide-item" data-visibility-tracking="CAgQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HCPvDBPPFfuaM" title="News" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAgQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HCPvDBPPFfuaM" data-serialized-endpoint="0qDduQEPEg1IQ1B2REJQUEZmdWFN">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/PvDBPPFfuaM/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>News</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="SBAaOjE-GIlRI-guide-item" data-visibility-tracking="CAkQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/SBAaOjE-GIlRI" title="Live" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAkQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="SBAaOjE-GIlRI" data-serialized-endpoint="0qDduQEPEg1TQkFhT2pFLUdJbFJJ">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//www.gstatic.com/youtube/img/livestream/house_channels/logos/live.png" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Live</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UCBR8-60-B28hp2BmDPdntcQ-guide-item" data-visibility-tracking="CAoQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UCBR8-60-B28hp2BmDPdntcQ" title="Spotlight" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAoQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UCBR8-60-B28hp2BmDPdntcQ" data-serialized-endpoint="0qDduQEaEhhVQ0JSOC02MC1CMjhocDJCbURQZG50Y1E%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://lh6.googleusercontent.com/-dL2jeHlm2Ok/AAAAAAAAAAI/AAAAAAAAAAA/ZCMMkRj-hrw/s88-c-k-no/photo.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Spotlight</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n      <hr class="guide-section-separator">\n  </li>\n\n            \n\n            <li class="guide-section vve-check" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg&amp;ved=CBMQ5isoAg" data-visibility-tracking="CBEQ5isiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n    <div class="guide-item-container personal-item">\n      <ul class="guide-user-links yt-box">\n            <li class="vve-check overflowable-list-item guide-channel" id="guide_builder-guide-item" data-visibility-tracking="CBIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channels" title="Browse channels" data-sessionlink="feature=g-manage&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CBIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="guide_builder" data-serialized-endpoint="0qPduQECCAE%3D">\n    <span class="yt-valign-container">\n        <img class="thumb guide-builder-icon" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="display-name  no-count">\n        <span>Browse channels</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n      <hr class="guide-section-separator">\n  </li>\n\n            <li class="guide-section guide-header signup-promo guided-help-box">\n    <p>\n      Sign in now to see your channels and recommendations!\n    </p>\n    <div id="guide-builder-promo-buttons" class="signed-out clearfix">\n      <a href="https://accounts.google.com/ServiceLogin?service=youtube&amp;uilel=3&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Dsign_in_promo%26hl%3Den%26next%3D%252F&amp;passive=true&amp;hl=en" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg"><span class="yt-uix-button-content">Sign In </span></a>\n    </div>\n  </li>\n\n    </ul>';
}

function craftPlaylist() {
  var t = document.createElement("div");
  t.setAttribute("id", "playlist"), t.setAttribute("class", "playlist");
  var e = "#";

  try {
    e =
      ytdata.contents.twoColumnWatchNextResults.playlist.playlist.endpoint
        .commandMetadata.webCommandMetadata.url;
  } catch (t) {}

  var n = "";

  try {
    n =
      ytdata.contents.twoColumnWatchNextResults.playlist.playlist.ownerName
        .simpleText;
  } catch (t) {}

  (t.innerHTML =
    '<div id="watch7-playlist-data" class="watch7-playlist" data-initial-autoplay-state="true" data-shareable="True" data-list-title="' +
    ytdata.contents.twoColumnWatchNextResults.playlist.playlist.title +
    '" data-autoplay-clicktracking="" data-list-author="' +
    n +
    '" data-full-list-id="' +
    ytdata.contents.twoColumnWatchNextResults.playlist.playlist.playlistId +
    '" data-list-description="None">\n    <div class="watch7-playlist-bar">\n      <div class="watch7-playlist-bar-left watch-content">  <div class="watch7-playlist-bar-notifications hid">\n    <span class="autoplay-notification-1">\nNext video in 1\n    </span>\n    <span class="autoplay-notification-2">\nNext video in 2\n    </span>\n    <span class="autoplay-notification-3">\nNext video in 3\n    </span>\n    <span class="autoplay-notification-4">\nNext video in 4\n    </span>\n    <span class="autoplay-notification-5">\nNext video in 5\n    </span>\n  </div>\n<a class="title " href="' +
    e +
    '">' +
    ytdata.contents.twoColumnWatchNextResults.playlist.playlist.title +
    '</a>  <span class="stat attribution">\nby ' +
    n +
    '\n  </span>\n</div>  <div id="watch7-playlist-interstitial" class="watch7-playlist-interstitial hid watch-content player-width player-height">\n    <div class="watch7-interstitial-content">\n      <div class="watch7-interstitial-message">\nAre you still there? If so, please click to continue watching the playlist.\n      </div>\n      <button onclick=";return false;" class="watch7-interstitial-button yt-uix-button yt-uix-button-primary yt-uix-button-size-default" type="button" role="button"><span class="yt-uix-button-content">OK </span></button>\n    </div>\n  </div>\n\n      <div class="watch7-playlist-bar-right yt-uix-button-panel watch-sidebar">\n        <div class="watch7-playlist-bar-secondary-controls">\n          <button title="Autoplay" onclick=";return false;" class="yt-uix-tooltip yt-uix-button-toggled yt-uix-button yt-uix-button-player-controls yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" type="button" id="watch7-playlist-bar-autoplay-button" data-button-toggle="true" role="button" aria-label="Autoplay"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-autoplay" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Autoplay" title=""></span></button>\n          \n          <button onclick=";return false;" class="yt-uix-tooltip yt-uix-button yt-uix-button-player-controls yt-uix-button-size-default yt-uix-button-has-icon yt-uix-button-empty" type="button" id="watch7-playlist-bar-toggle-button" data-button-toggle="true" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-toggle" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></span></button>\n        </div>\n        <div id="watch7-playlist-bar-controls" class="yt-uix-button-panel">\n            <a href="/watch?v=gqVYEYUss_8&amp;list=UUirStL_WpsFAq2wQNV5mhOA" class="yt-uix-button  yt-uix-tooltip spf-link yt-uix-button-player-controls yt-uix-button-size-default yt-uix-button-empty" id="watch7-playlist-bar-prev-button" data-clicktracking="CAIQsjA" title="Previous video"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-prev" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></span></a>\n          <span id="watch7-playlist-index-and-length">\n            <span id="watch7-playlist-current-index">' +
    parseInt(
      ytdata.contents.twoColumnWatchNextResults.playlist.playlist.currentIndex +
        1
    ) +
    "</span>" +
    (ytdata.contents.twoColumnWatchNextResults.playlist.playlist.totalVideos
      ? '/<span id="watch7-playlist-length">' +
        ytdata.contents.twoColumnWatchNextResults.playlist.playlist
          .totalVideos +
        "</span>"
      : "") +
    '\n          </span>\n            <a href="/watch?v=QUan0mJGZvg&amp;list=UUirStL_WpsFAq2wQNV5mhOA" class="yt-uix-button  yt-uix-tooltip spf-link yt-uix-button-player-controls yt-uix-button-size-default yt-uix-button-empty" id="watch7-playlist-bar-next-button" data-clicktracking="CAMQsTA" title="Next video"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-next" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></span></a>\n        </div>\n      </div>\n    </div>\n  </div>'),
    document.querySelector("#player").insertAdjacentElement("afterbegin", t);
}

function craftPlaylist2() {
  var t = document.createElement("div");
  t.setAttribute("id", "playlist-tray"),
    t.setAttribute("class", "playlist-tray"),
    (t.innerHTML =
      '<div id="watch7-playlist-tray-container" class="watch-sidebar yt-scrollbar yt-scrollbar-wide yt-scrollbar-dark player-height ">\n    \n    \n  </div>'),
    insertAfter(document.querySelector("#player-api"), t),
    document.querySelector("#player").classList.add("watch-playlist"),
    document.querySelector("#watch7-container").classList.add("watch-playlist");
  var e = ytdata.contents.twoColumnWatchNextResults.playlist.playlist.contents,
    n = "",
    a = 0,
    o = e.length;
  if (e.length > 100)
    try {
      ytdata.contents.twoColumnWatchNextResults.playlist.playlist.contents.findIndex(
        (t) =>
          t.playlistPanelVideoRenderer.indexText.simpleText ==
          parseInt(
            ytdata.contents.twoColumnWatchNextResults.playlist.playlist
              .currentIndex + 1
          ) -
            100
      ) > 0 &&
        (a =
          ytdata.contents.twoColumnWatchNextResults.playlist.playlist.contents.findIndex(
            (t) =>
              t.playlistPanelVideoRenderer.indexText.simpleText ==
              parseInt(
                ytdata.contents.twoColumnWatchNextResults.playlist.playlist
                  .currentIndex + 1
              ) -
                100
          )),
        ytdata.contents.twoColumnWatchNextResults.playlist.playlist.contents.findIndex(
          (t) =>
            t.playlistPanelVideoRenderer.indexText.simpleText ==
            parseInt(
              ytdata.contents.twoColumnWatchNextResults.playlist.playlist
                .currentIndex + 1
            ) +
              100
        ) < e.length &&
          (o =
            ytdata.contents.twoColumnWatchNextResults.playlist.playlist.contents.findIndex(
              (t) =>
                t.playlistPanelVideoRenderer.indexText.simpleText ==
                parseInt(
                  ytdata.contents.twoColumnWatchNextResults.playlist.playlist
                    .currentIndex + 1
                ) +
                  100
            ));
    } catch (t) {
      console.log(t);
    }

  for (i = a, j = o; i < j; i++) {
    var r = " ";
    void 0 !== e[i].playlistPanelVideoRenderer &&
      (void 0 === e[i].playlistPanelVideoRenderer.unplayableText
        ? (e[i].playlistPanelVideoRenderer.indexText ||
            (e[i].playlistPanelVideoRenderer.indexText = {
              simpleText: ""
            }),
          "▶" == e[i].playlistPanelVideoRenderer.indexText.simpleText &&
            (r = " playlist-bar-item-playing"),
          (n +=
            '<li class="video-list-item yt-uix-scroller-scroll-unit' +
            r +
            '" data-clicktracking="" data-video-username="' +
            e[i].playlistPanelVideoRenderer.longBylineText.runs[0].text +
            '" data-video-clip-start="None" data-index="' +
            e[i].playlistPanelVideoRenderer.indexText.simpleText +
            '" data-video-title="' +
            e[i].playlistPanelVideoRenderer.title.simpleText +
            '" data-video-clip-end="None" data-video-id="' +
            e[i].playlistPanelVideoRenderer.videoId +
            '"><a class="spf-link" href="' +
            e[i].playlistPanelVideoRenderer.navigationEndpoint.commandMetadata
              .webCommandMetadata.url +
            '" title="' +
            e[i].playlistPanelVideoRenderer.title.simpleText +
            '" role="button"><span class="stat count">' +
            e[i].playlistPanelVideoRenderer.indexText.simpleText +
            '</span><span class="ux-thumb-wrap">    <span class="video-thumb  yt-thumb yt-thumb-64">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img data-group-key="watch-playlist-thumbs" src="' +
            e[i].playlistPanelVideoRenderer.thumbnail.thumbnails[
              parseInt(
                e[i].playlistPanelVideoRenderer.thumbnail.thumbnails.length - 1
              )
            ].url +
            '" data-thumb-manual="1" alt="" width="64" height="38.5">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span><span dir="ltr" class="title yt-ui-ellipsis yt-ui-ellipsis-2"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
            e[i].playlistPanelVideoRenderer.title.simpleText +
            '</span></span>  <span class="stat attribution">\nby ' +
            e[i].playlistPanelVideoRenderer.longBylineText.runs[0].text +
            "\n  </span>\n\t\t\t</a></li>"))
        : (n +=
            '<li class="video-list-item yt-uix-scroller-scroll-unit  playlist-bar-item-unviewable" data-video-clip-end="None" data-clicktracking="" data-video-title="[Private Video]" data-index="10" data-video-username="" data-video-id="" data-video-clip-start="None"><a class="spf-link" href="' +
            e[i].playlistPanelVideoRenderer.navigationEndpoint.commandMetadata
              .webCommandMetadata.url +
            '" title="" role="button"><span class="stat count">' +
            e[i].playlistPanelVideoRenderer.indexText.simpleText +
            '</span><span class="ux-thumb-wrap">    <span class="video-thumb  yt-thumb yt-thumb-64">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img data-thumb="//s.ytimg.com/yts/img/meh_mini-vfl0Ugnu3.png" data-thumb-manual="1" alt="" src="//s.ytimg.com/yts/img/meh_mini-vfl0Ugnu3.png" width="64" height="38.5">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span><span dir="ltr" class="title yt-ui-ellipsis yt-ui-ellipsis-2"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
            e[i].playlistPanelVideoRenderer.unplayableText.simpleText +
            '</span></span>  <span class="stat attribution">\nby \n  </span>\n</a></li>'));
  }

  var s = document.createElement("ol");
  s.setAttribute("id", "watch7-playlist-tray"),
    s.setAttribute("class", "yt-uix-scroller"),
    (s.innerHTML = n),
    document
      .querySelector("#player #playlist-tray #watch7-playlist-tray-container")
      .append(s),
    (document.querySelector(
      "#player #playlist-tray #watch7-playlist-tray-container"
    ).innerHTML += '<div id="watch7-playlist-tray-trim">&nbsp;</div>'),
    (document.querySelector("#watch7-playlist-tray").scrollTop =
      document.querySelector(
        ".video-list-item.playlist-bar-item-playing"
      ).offsetTop);

  try {
    (document.querySelector(
      "#watch7-playlist-bar-controls > a:nth-of-type(1)"
    ).href = document.querySelector(
      ".video-list-item:nth-of-type(" +
        Array.prototype.indexOf.call(
          document.querySelector("#watch7-playlist-tray").children,
          document.querySelector(".playlist-bar-item-playing")
        ) +
        ") a"
    ).href),
      (document.querySelector(
        "#watch7-playlist-bar-controls > a:nth-of-type(2)"
      ).href = document.querySelector(
        ".video-list-item.playlist-bar-item-playing+.video-list-item a"
      ).href);
  } catch (t) {
    useverbose && console.log(t),
      (v3.loggerDialog += t + " (at line " + ln() + " in watch.js)\n");
  }
}

function buildWatch7() {
  try {
    (t = document.querySelector("#watch7-content.watch-main-col")).setAttribute(
      "id",
      "watch7-container"
    ),
      cinemastate
        ? t.setAttribute("class", "watch-wide")
        : t.setAttribute("class", ""),
      document.querySelector("#content").append(t);
  } catch (e) {
    var t;
    (t = document.createElement("div")).setAttribute("id", "watch7-container"),
      t.setAttribute("class", "unavailable-video"),
      document.querySelector("#content").append(t);
  }

  var e = document.createElement("div");
  e.setAttribute("id", "watch7-main-container"),
    document.querySelector("#watch7-container").append(e);
  var n = document.createElement("div");
  n.setAttribute("id", "watch7-main"),
    n.setAttribute("class", "clearfix"),
    document.querySelector("#watch7-main-container").append(n);
  var a = document.createElement("div");
  a.setAttribute("id", "watch7-content"),
    a.setAttribute("class", "watch-content"),
    document.querySelector("#watch7-main").append(a);
  var i = document.createElement("div");
  i.setAttribute("id", "watch7-sidebar"),
    i.setAttribute("class", "watch-sidebar"),
    document.querySelector("#watch7-main").append(i);
  var o = document.createElement("div");
  o.setAttribute("class", "yt-uix-button-panel"),
    document.querySelector("#watch7-content").append(o);
  var r = document.createElement("div");
  r.setAttribute("id", "watch-discussion"),
    (r.innerHTML =
      '    <div class="action-panel-loading">\n        <p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n    </div>'),
    "NO" == commentcontinuation &&
      (r.innerHTML =
        0 == islivestream
          ? '<div class="action-panel-loading">\n        <p class="yt-spinner">\n        \n\n    <span class="yt-spinner-message">\n' +
            v3.UIMSG[v3.nationIndex].COMMENT_DISABLED +
            "\n    </span>\n  </p>\n\n    </div>"
          : '<div class="action-panel-loading">\n        <p class="yt-spinner">\n        \n\n    <span class="yt-spinner-message">\n\n    </span>\n  </p>\n\n    </div>'),
    document.querySelector("#watch7-content").append(r);
  var s = document.createElement("div");
  s.setAttribute("id", "comments-view"),
    document.querySelector("#watch7-content #watch-discussion").append(s);
  var c = document.createElement("div");
  c.setAttribute("id", "watch7-headline"),
    c.setAttribute("class", "clearfix  yt-uix-expander"),
    document.querySelector("#watch7-content .yt-uix-button-panel").append(c);
  var l = document.createElement("div");
  l.setAttribute("id", "watch7-user-header"),
    l.setAttribute("class", "spf-nolink"),
    document.querySelector("#watch7-content .yt-uix-button-panel").append(l);
  var d = document.createElement("div");
  d.setAttribute("id", "watch7-action-buttons"),
    d.setAttribute("class", "clearfix"),
    document.querySelector("#watch7-content .yt-uix-button-panel").append(d);
  var u = document.createElement("div");
  u.setAttribute("id", "watch7-action-panels"),
    u.setAttribute("class", "yt-uix-button-panel"),
    document.querySelector("#watch7-content .yt-uix-button-panel").append(u),
    buildWatchHeadline(),
    buildWatchUserheader(),
    buildActionButtons(),
    buildActionPanels(),
    buildSidebar();
}

function buildSidebar() {
  var t = document.createElement("div");
  t.setAttribute("id", "watch7-sidebar-contents"),
    t.setAttribute("class", "watch-sidebar-gutter"),
    document.querySelector("#watch7-main #watch7-sidebar").append(t);
  var e = document.createElement("div");
  e.setAttribute("id", "watch7-sidebar-discussion"),
    document
      .querySelector("#watch7-main #watch7-sidebar #watch7-sidebar-contents")
      .append(e);
  var n = document.createElement("div");
  n.setAttribute("id", "watch-channel-brand-div"),
    n.setAttribute("class", ""),
    document
      .querySelector("#watch7-main #watch7-sidebar #watch7-sidebar-contents")
      .append(n);
  var a = document.createElement("div");
  a.setAttribute("class", "watch-sidebar-section normal"),
    document
      .querySelector("#watch7-main #watch7-sidebar #watch7-sidebar-contents")
      .append(a);
  var i = document.createElement("div");
  i.setAttribute("class", "watch-sidebar-body"),
    document
      .querySelector(
        "#watch7-main #watch7-sidebar #watch7-sidebar-contents .watch-sidebar-section"
      )
      .append(i),
    1 == islivestream && liveService();
  var o = document.createElement("ul");
  o.setAttribute("id", "watch-related"),
    o.setAttribute("class", "video-list"),
    (o.innerHTML = craftRecoms(recomshtml));

  try {
    ytdata.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults
      .results &&
      (o.innerHTML +=
        '<button id="watch-more-related-button" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default" type="button" onclick=";return false;" data-button-action="yt.www.watch.related.loadMore" role="button"><span class="yt-uix-button-content">Load more suggestions </span></button>');
  } catch (t) {}

  document
    .querySelector(
      "#watch7-main #watch7-sidebar #watch7-sidebar-contents .watch-sidebar-section.normal .watch-sidebar-body"
    )
    .append(o);
}

function buildActionPanels() {
  var t = document.createElement("div");
  t.setAttribute("id", "action-panel-details"),
    t.setAttribute("class", "action-panel-content"),
    t.setAttribute("data-panel-loaded", "true"),
    isownvideo &&
      (t.setAttribute("class", "action-panel-content watch-editable"),
      (t.innerHTML =
        '<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon watch-pencil-icon" type="button" onclick=";return false;"><span class="yt-uix-button-icon-wrapper"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-button-icon yt-uix-button-icon-pencil"></span></button>')),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels"
      )
      .append(t);
  var e = document.createElement("div");
  e.setAttribute("id", "action-panel-share"),
    e.setAttribute("class", "action-panel-content hid"),
    (e.innerHTML =
      '<div id="watch-actions-share-loading">\n    <div class="action-panel-loading">\n        <p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n    </div>\n  </div>\n  <div id="watch-actions-share-panel"></div>\n'),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels"
      )
      .append(e);
  var n = document.createElement("div");
  n.setAttribute("id", "action-panel-addto"),
    n.setAttribute("class", "action-panel-content hid"),
    (n.innerHTML =
      '<div id="watch-actions-share-loading">\n    <div class="action-panel-loading">\n        <p class="yt-spinner">\n      <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img yt-sprite" alt="Loading icon">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n    </div>\n  </div>\n  <div id="watch-actions-share-panel"></div>'),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels"
      )
      .append(n);
  var a = document.createElement("div");
  a.setAttribute("id", "action-panel-stats"),
    a.setAttribute("class", "action-panel-content hid"),
    (a.innerHTML =
      '<div id="watch-actions-share-loading">\n    <div class="action-panel-loading">\n        <p class="yt-spinner">\n    <span class="yt-spinner-message">\n' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_NOT_IMPLEMENT +
      '\n    </span>\n  </p>\n\n    </div>\n  </div>\n  <div id="watch-actions-share-panel"></div>'),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels"
      )
      .append(a);
  var i = document.createElement("div");
  i.setAttribute("id", "action-panel-report"),
    i.setAttribute("class", "action-panel-content hid"),
    (i.innerHTML =
      '<div id="watch-actions-share-loading">\n    <div class="action-panel-loading">\n        <p class="yt-spinner">\n    <span class="yt-spinner-message">\n' +
      v3.UIMSG[v3.nationIndex].WATCH7_PANEL_NOT_IMPLEMENT +
      '\n    </span>\n  </p>\n\n    </div>\n  </div>\n  <div id="watch-actions-share-panel"></div>'),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels"
      )
      .append(i);
  var o = document.createElement("div");
  o.setAttribute("id", "action-panel-login"),
    o.setAttribute("class", "action-panel-content hid"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels"
      )
      .append(o);
  var r = document.createElement("div");
  r.setAttribute("id", "action-panel-ratings-disabled"),
    r.setAttribute("class", "action-panel-content hid"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels"
      )
      .append(r);
  var s = document.createElement("div");
  s.setAttribute("id", "action-panel-rental-required"),
    s.setAttribute("class", "action-panel-content hid"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels"
      )
      .append(s);
  var c = document.createElement("div");
  c.setAttribute("id", "action-panel-error"),
    c.setAttribute("class", "action-panel-content hid"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels"
      )
      .append(c);
  var l = document.createElement("div");
  l.setAttribute("id", "watch7-action-panel-footer"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels"
      )
      .append(l);
  var d = document.createElement("hr");
  d.setAttribute("class", "yt-horizontal-rule "),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #watch7-action-panel-footer"
      )
      .append(d);
  var u = document.createElement("div");
  u.setAttribute("id", "watch-description"),
    u.setAttribute(
      "class",
      "yt-uix-expander yt-uix-expander-collapsed yt-uix-button-panel"
    ),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details"
      )
      .append(u);
  var m = document.createElement("div");
  m.setAttribute("id", "watch-description-content"),
    m.setAttribute("onclick", "v3ExpandDescription();"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description"
      )
      .append(m);
  var p = document.createElement("div");
  p.setAttribute("id", "watch-description-toggle"),
    p.setAttribute("class", "yt-uix-expander-head yt-uix-button-panel"),
    (p.innerHTML =
      '        <div id="watch-description-expand" class="expand">\n          <button class="metadata-inline yt-uix-button yt-uix-button-text yt-uix-button-size-default" type="button" onclick="v3ExpandDescription()" role="button"><span class="yt-uix-button-content">' +
      v3.UIMSG[v3.nationIndex].SHOW_MORE +
      ' </span></button>\n        </div>\n        <div id="watch-description-collapse" class="collapse">\n          <button class="metadata-inline yt-uix-button yt-uix-button-text yt-uix-button-size-default" type="button" onclick="v3CollapseDescription()" role="button"><span class="yt-uix-button-content">' +
      v3.UIMSG[v3.nationIndex].SHOW_LEAST +
      " </span></button>\n        </div>"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description"
      )
      .append(p);
  var b = document.createElement("div");
  b.setAttribute("id", "watch-description-clip"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content"
      )
      .append(b);
  var y = document.createElement("ul");
  y.setAttribute("id", "watch-description-extra-info"),
    1 == videoisagerestrict &&
      (y.innerHTML =
        '<li class="">  <img class="metadata-icon age-restricted" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">\n  <span class="metadata-info">\nThis video has been age-restricted based on our <a href="/t/community_guidelines">Community Guidelines</a>\n  </span>\n</li>'),
    null != metasongname && "" != metaartistname
      ? (y.innerHTML +=
          '<li class="watch-extra-info"><span class="metadata-info"><span class="metadata-info-title">' +
          v3.UIMSG[v3.nationIndex].VIDEO_METADATA_MUSIC.replace(
            "%s",
            metasongname
          ) +
          '<br></span></span></li><li class="watch-extra-info">  <span class="metadata-info">\n    <span class="metadata-info-title">\n' +
          v3.UIMSG[v3.nationIndex].VIDEO_METADATA_ARTIST +
          "<br>\n    </span>\n\n        <span>" +
          metaartistname +
          "</span>\n  </span>\n</li>")
      : null != metasongname &&
        (y.innerHTML +=
          '<li class="watch-extra-info"><span class="metadata-info"><span class="metadata-info-title">' +
          v3.UIMSG[v3.nationIndex].VIDEO_METADATA_MUSIC.replace(
            "%s",
            metasongname
          ) +
          "<br></span></span></li>\n</li>"),
    metagame &&
      ((y.innerHTML +=
        '<li class=""><span class="metadata-info"><span class="metadata-info-title">Watching "' +
        metagame.name +
        '" ' +
        metagame.year +
        '<br></span></span><div class="offer-image-thumbnail"><a href="' +
        metagame.navhref +
        '" rel="nofollow" target="_blank"><img src="' +
        metagame.avatar +
        '" alt="" data-group-key="thumb-group-0"></a></div><span class="link-list metadata-info offer-links-with-thumbnail"><a href="' +
        metagame.navhref +
        '" class="nowrap" rel="nofollow" target="_blank">' +
        metagame.nav +
        "</a></span></li>"),
      document
        .querySelector("#watch-description-content")
        .classList.add("click-to-buy")),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content"
      )
      .append(y);
  var h = document.createElement("p");
  h.setAttribute("id", "watch-uploader-info"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip"
      )
      .append(h);
  var g = document.createElement("div");
  g.setAttribute("id", "watch-description-text"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip"
      )
      .append(g);
  var v = document.createElement("div");
  v.setAttribute("id", "watch-description-extras"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip"
      )
      .append(v);
  var f = document.createElement("strong");
  (f.innerHTML = uploaddate),
    null != trendinginfo &&
      ((f.innerHTML += "\n   | "), (f.innerHTML += trendinginfo)),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip #watch-uploader-info"
      )
      .append(f);
  var x = document.createElement("p");
  x.setAttribute("id", "eow-description"),
    (x.innerHTML = bakeDescription(descriptionstring));
  var w = "Public";
  videoisunlisted ? (w = "Unlisted") : videoisprivate && (w = "Private"),
    isownvideo &&
      document
        .querySelector(
          "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details"
        )
        .insertAdjacentHTML(
          "beforeend",
          '<div class="innertube-studio-meta2-editor-v1 hid" id="watch-video-info-form" style="">\n    \n    \n    \n    <p class="yt">\n      <label class="yt-uix-form-label">\nDescription:\n        <span class="yt-uix-form-input-container yt-uix-form-input-textarea-container  yt-uix-form-input-non-empty">    <textarea class="yt-uix-form-input-textarea eow-description-textarea" name="field_myvideo_descr" rows="6">' +
            bakeDescription(descriptionstring) +
            '</textarea>\n</span>\n      </label>\n    </p>\n    <div class="yt-alert yt-alert-naked yt-alert-error hid ">  <div class="yt-alert-icon">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-content" role="alert"></div></div>\n    <p class="yt">\n      <label class="yt-uix-form-label">\nPrivacy:<br>\n        <span class="yt-uix-form-input-select"><span class="yt-uix-form-input-select-content"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-form-input-select-arrow"><span class="yt-uix-form-input-select-value">\n' +
            w +
            '\n  </span></span><select class="yt-uix-form-input-select-element eow-privacy-select" name="privacy">  <option value="public">\nPublic\n  </option>\n  <option value="private">\nPrivate\n  </option>\n    <option value="unlisted">\nUnlisted\n    </option>\n</select></span>\n      </label>\n    </p>\n   <p class="yt">\n      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary" type="submit" onclick=";return true;" id="watch-video-info-submit"><span class="yt-uix-button-content">Save </span></button>\n      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default" type="button" onclick=";return false;" id="watch-video-info-reset"><span class="yt-uix-button-content">Cancel </span></button>\n    </p>\n  </div>'
        ),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip #watch-description-text"
      )
      .append(x);
  var S = document.createElement("ul");
  S.setAttribute("class", "watch-extras-section"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip #watch-description-extras"
      )
      .append(S);
  var k = document.createElement("li");
  document
    .querySelector(
      "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip #watch-description-extras .watch-extras-section"
    )
    .append(k);
  var A = document.createElement("li");
  document
    .querySelector(
      "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip #watch-description-extras .watch-extras-section"
    )
    .append(A);
  var I = document.createElement("h4");
  I.setAttribute("class", "title"),
    (I.innerHTML =
      " \n" + v3.UIMSG[v3.nationIndex].VIDEO_METADATA_CATEGORY + " \n        "),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip #watch-description-extras .watch-extras-section li:nth-of-type(1)"
      )
      .append(I);
  var R = document.createElement("div");
  R.setAttribute("class", "content"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip #watch-description-extras .watch-extras-section li:nth-of-type(1)"
      )
      .append(R);
  var E = document.createElement("p");
  E.setAttribute("id", "eow-category"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip #watch-description-extras .watch-extras-section li:nth-of-type(1) .content"
      )
      .append(E);
  var T = document.createElement("a");
  T.setAttribute("class", "yt-uix-sessionlink");

  try {
    T.setAttribute(
      "href",
      "/" + document.querySelector("meta[itemprop=genre]").content.toLowerCase()
    ),
      (T.innerHTML = document.querySelector("meta[itemprop=genre]").content);
  } catch (t) {
    useverbose && console.log(t),
      (v3.loggerDialog += t + " (at line " + ln() + " in watch.js)\n");
  }

  document
    .querySelector(
      "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip #watch-description-extras .watch-extras-section li:nth-of-type(1) .content #eow-category"
    )
    .append(T);
  var q = document.createElement("h4");
  q.setAttribute("class", "title"),
    (q.innerHTML = v3.UIMSG[v3.nationIndex].VIDEO_METADATA_LICENSE),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip #watch-description-extras .watch-extras-section li:nth-of-type(2)"
      )
      .append(q);
  var C = document.createElement("div");
  C.setAttribute("class", "content"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip #watch-description-extras .watch-extras-section li:nth-of-type(2)"
      )
      .append(C);

  var _ = document.createElement("p");

  _.setAttribute("id", "eow-reuse"),
    (_.innerHTML = licenseused),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-panels #action-panel-details #watch-description #watch-description-content #watch-description-clip #watch-description-extras .watch-extras-section li:nth-of-type(2) .content"
      )
      .append(_);
}

function buildActionButtons() {
  var t = document.createElement("div");
  t.setAttribute("id", "watch7-sentiment-actions"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-buttons"
      )
      .append(t);
  var e = document.createElement("div");
  e.setAttribute("id", "watch7-secondary-actions"),
    e.setAttribute("class", "yt-uix-button-group"),
    e.setAttribute("data-button-toggle-group", "required"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-buttons"
      )
      .append(e);
  var n = document.createElement("span");
  n.setAttribute("id", "watch-like-dislike-buttons"),
    n.setAttribute("class", "yt-uix-button-group actionable"),
    n.setAttribute("data-button-toggle-group", "optional"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-buttons #watch7-sentiment-actions"
      )
      .append(n);
  var a = document.createElement("span");
  a.setAttribute("class", "yt-uix-clickcard"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-buttons #watch7-sentiment-actions #watch-like-dislike-buttons"
      )
      .append(a);
  var i = document.createElement("span");
  i.setAttribute("class", "yt-uix-clickcard"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-buttons #watch7-sentiment-actions #watch-like-dislike-buttons"
      )
      .append(i);
  var o = document.createElement("button");
  liketoggled
    ? o.setAttribute(
        "class",
        "yt-uix-button yt-uix-button-size-default yt-uix-button-text yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-toggled"
      )
    : o.setAttribute(
        "class",
        "yt-uix-clickcard-target yt-uix-button yt-uix-button-text yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip"
      ),
    o.setAttribute("type", "button"),
    o.setAttribute("onclick", ";return false;"),
    o.setAttribute("title", v3.UIMSG[v3.nationIndex].LIKE_TOOLTIP),
    o.setAttribute("id", "watch-like"),
    o.setAttribute("data-force-position", "true"),
    o.setAttribute("data-like-tooltip", v3.UIMSG[v3.nationIndex].LIKE_TOOLTIP),
    o.setAttribute(
      "data-unlike-tooltip",
      v3.UIMSG[v3.nationIndex].LIKE_TOOLTIP
    ),
    o.setAttribute("data-orientation", "vertical"),
    o.setAttribute("data-position", "bottomright"),
    o.setAttribute("data-button-toggle", "true"),
    o.setAttribute("data-tooltip-text", v3.UIMSG[v3.nationIndex].LIKE_TOOLTIP),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-buttons #watch7-sentiment-actions #watch-like-dislike-buttons .yt-uix-clickcard:nth-of-type(1)"
      )
      .append(o);
  var r = document.createElement("span");
  r.setAttribute("class", "yt-uix-button-icon-wrapper"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-buttons #watch7-sentiment-actions #watch-like-dislike-buttons .yt-uix-clickcard:nth-of-type(1) .yt-uix-button"
      )
      .append(r);
  var s = document.createElement("span");
  s.setAttribute("class", "yt-uix-button-content"),
    (s.innerHTML = v3.UIMSG[v3.nationIndex].LIKE + " "),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-buttons #watch7-sentiment-actions #watch-like-dislike-buttons .yt-uix-clickcard:nth-of-type(1) .yt-uix-button"
      )
      .append(s);
  var c = document.createElement("img");
  c.setAttribute("class", "yt-uix-button-icon yt-uix-button-icon-watch-like"),
    c.setAttribute("src", "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"),
    c.setAttribute("alt", ""),
    c.setAttribute("title", ""),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-buttons #watch7-sentiment-actions #watch-like-dislike-buttons .yt-uix-clickcard:nth-of-type(1) .yt-uix-button .yt-uix-button-icon-wrapper"
      )
      .append(c);
  var l = document.createElement("button");
  disliketoggled
    ? l.setAttribute(
        "class",
        "yt-uix-clickcard-target yt-uix-button yt-uix-button-text yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty yt-uix-button-toggled"
      )
    : l.setAttribute(
        "class",
        "yt-uix-clickcard-target yt-uix-button yt-uix-button-text yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty"
      ),
    l.setAttribute("type", "button"),
    l.setAttribute("onclick", ";return false;"),
    l.setAttribute("title", v3.UIMSG[v3.nationIndex].DISLIKE_TOOLTIP),
    l.setAttribute("id", "watch-dislike"),
    l.setAttribute("data-force-position", "true"),
    l.setAttribute(
      "data-like-tooltip",
      v3.UIMSG[v3.nationIndex].DISLIKE_TOOLTIP
    ),
    l.setAttribute("data-orientation", "vertical"),
    l.setAttribute("data-position", "bottomright"),
    l.setAttribute("data-button-toggle", "true"),
    l.setAttribute(
      "data-tooltip-text",
      v3.UIMSG[v3.nationIndex].DISLIKE_TOOLTIP
    ),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-buttons #watch7-sentiment-actions #watch-like-dislike-buttons .yt-uix-clickcard:nth-of-type(2)"
      )
      .append(l);
  var d = document.createElement("span");
  d.setAttribute("class", "yt-uix-button-icon-wrapper"),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-buttons #watch7-sentiment-actions #watch-like-dislike-buttons .yt-uix-clickcard:nth-of-type(2) .yt-uix-button"
      )
      .append(d);
  var u = document.createElement("img");
  u.setAttribute(
    "class",
    "yt-uix-button-icon yt-uix-button-icon-watch-dislike"
  ),
    u.setAttribute("src", "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"),
    u.setAttribute("alt", v3.UIMSG[v3.nationIndex].DISLIKE_TOOLTIP),
    u.setAttribute("title", ""),
    document
      .querySelector(
        "#watch7-content .yt-uix-button-panel #watch7-action-buttons #watch7-sentiment-actions #watch-like-dislike-buttons .yt-uix-clickcard:nth-of-type(2) .yt-uix-button .yt-uix-button-icon-wrapper"
      )
      .append(u),
    (document.querySelector(
      "#watch7-content .yt-uix-button-panel #watch7-action-buttons #watch7-secondary-actions"
    ).outerHTML =
      '<div id="watch7-secondary-actions" class="yt-uix-button-group" data-button-toggle-group="required">\n        <span>\n    <button class="action-panel-trigger  yt-uix-button-toggled yt-uix-button yt-uix-button-text yt-uix-button-size-default yt-uix-tooltip" title="" type="button" onclick=";return false;" data-button-toggle="true" data-trigger-for="action-panel-details" role="button"><span class="yt-uix-button-content">' +
      v3.UIMSG[v3.nationIndex].WATCH7_ABOUT +
      ' </span></button>\n  </span>\n\n          <span>\n    <button class="action-panel-trigger   yt-uix-button yt-uix-button-text yt-uix-button-size-default yt-uix-tooltip" title="" type="button" onclick=";return false;" data-button-toggle="true" data-trigger-for="action-panel-share" role="button"><span class="yt-uix-button-content">' +
      v3.UIMSG[v3.nationIndex].WATCH7_SHARE +
      ' </span></button>\n  </span>\n\n          <span class="yt-uix-clickcard">\n    <button class="action-panel-trigger   yt-uix-clickcard-target yt-uix-button yt-uix-button-text yt-uix-button-size-default yt-uix-tooltip" title="" type="button" onclick=";return false;" data-position="bottomleft" data-button-toggle="true" data-upsell="playlist" data-orientation="vertical" data-trigger-for="action-panel-none" role="button"><span class="yt-uix-button-content">' +
      v3.UIMSG[v3.nationIndex].WATCH7_ADDTO +
      ' </span></button>\n        <div class="watch7-hovercard yt-uix-clickcard-content">\n    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>\n    <div class="watch7-hovercard-message">\n      Sign in with your Google Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to add <span class="yt-user-name  g-hovercard" dir="ltr" data-ytid="UCrmM3GC930hyfrejfxnGNfA">oz3cv</span>\'s video to your playlist.\n\n    </div>\n    <ul class="watch7-hovercard-icon-strip clearfix">\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-youtube-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gplus-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gmail-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-picasa-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-chrome-icon"></div>\n      </li>\n    </ul>\n    <div class="watch7-hovercard-account-line">\n      <a href="https://accounts.google.com/ServiceLogin?hl=en&amp;passive=true&amp;service=youtube&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3D__FEATURE__%26hl%3Den%26next%3D%252Fwatch%253Fv%253DhuhYZn2r-Mo%2526gl%253DUS%2526hl%253Den&amp;uilel=3" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=2I-cUqS7MofVgAKhooHoCw"><span class="yt-uix-button-content">Sign in </span></a>\n    </div>\n  </div>\n\n  </span>\n\n          <span>\n    <button class="action-panel-trigger   yt-uix-button yt-uix-button-text yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_STATISTIC +
      '" type="button" onclick=";return false;" data-button-toggle="true" data-trigger-for="action-panel-stats" role="button" data-tooltip-text="' +
      v3.UIMSG[v3.nationIndex].WATCH7_STATISTIC +
      '"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-action-panel-stats" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Statistics" title=""></span></button>\n  </span>\n\n\n        <span>\n    <button class="action-panel-trigger   yt-uix-button yt-uix-button-text yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" title="' +
      v3.UIMSG[v3.nationIndex].WATCH7_REPORT +
      '" type="button" onclick=";return false;" data-button-toggle="true" data-trigger-for="action-panel-report" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-action-panel-report" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Report" title=""></span></button>\n  </span>\n\n    </div>');
}

function buildWatchHeadline() {
  var t = document.createElement("h1");

  if (
    (t.setAttribute("id", "watch-headline-title"),
    t.setAttribute("class", "yt"),
    document.querySelector("#watch7-headline").append(t),
    1 == isownvideo)
  ) {
    var e = document.createElement("link");
    e.setAttribute("id", "csscore-temp-container"),
      document.querySelector("head").append(e),
      (document.querySelector("#csscore-temp-container").outerHTML =
        '<link id="css-688526440" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-watch-inlineedit-vflg-l3kd.css" data-loaded="true">'),
      document
        .querySelector("#watch7-headline")
        .insertAdjacentHTML(
          "afterbegin",
          '<div id="watch-headline-title-form" class="innertube-studio-meta1-editor-v1 hid">\n    \n    \n    <span class=" yt-uix-form-input-container yt-uix-form-input-text-container ">    <input class="yt-uix-form-input-text " name="field_myvideo_title">\n</span>\n    <span class="form-buttons">\n      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary" type="submit" onclick=";return true;"><span class="yt-uix-button-content">Save </span></button>\n      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default" type="button" onclick=";return false;" id="watch-headline-title-reset"><span class="yt-uix-button-content">Cancel </span></button>\n    </span>\n    <div class="yt-alert yt-alert-naked yt-alert-error  hid">  <div class="yt-alert-icon">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-content" role="alert"></div></div>\n  </div>'
        ),
      document
        .querySelector("body")
        .classList.add("exp-using-innertube-studio-editor-v1"),
      0 == videoisunlisted &&
        0 == videoisprivate &&
        (document.querySelector(
          "#watch7-headline #watch-headline-title"
        ).innerHTML =
          '<span id="watch-privacy-icon" class="yt-uix-tooltip yt-uix-tooltip-reverse public" title="This video is public." data-tooltip-text="This video is public.">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="This video is public.">\n    </span>');
    var n =
      '<div id="watch7-creator-bar" class="clearfix yt-uix-button-panel">\n<ul id="watch7-creator-bar-nav-buttons">  <li class="creator-bar-item ">\n    <a href="https://www.youtube.com/analytics#;fi=v-' +
      window.location.href.split("?v=")[1].split("&")[0] +
      '" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-dark yt-uix-button-size-default" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsn"><span class="yt-uix-button-content">' +
      v3.UIMSG[v3.nationIndex].MASTHEAD_UPLOAD_ANALYTICS +
      '\n </span></a>\n  </li>\n  <li class="creator-bar-item ">\n    <a href="/my_videos" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-dark yt-uix-button-size-default" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsn"><span class="yt-uix-button-content">' +
      v3.UIMSG[v3.nationIndex].MASTHEAD_UPLOAD_VIDEO_MANAGER +
      ' </span></a>\n  </li>\n</ul><ul id="watch7-creator-bar-edit-buttons">  <li class="creator-bar-item yt-uix-tooltip yt-uix-tooltip-reverse" title="Info and Settings">\n    <a href="/edit?video_id=' +
      window.location.href.split("?v=")[1].split("&")[0] +
      '&amp;video_referrer=watch" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-text-dark yt-uix-button-size-default yt-uix-button-empty" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsn"><span class="yt-uix-button-icon-wrapper"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-button-icon yt-uix-button-icon-info"></span></a>\n  </li>\n  <li class="creator-bar-item yt-uix-tooltip yt-uix-tooltip-reverse" title="Enhancements">\n    <a href="/enhance?video_referrer=watch&amp;v=' +
      window.location.href.split("?v=")[1].split("&")[0] +
      '" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-text-dark yt-uix-button-size-default yt-uix-button-empty" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsn"><span class="yt-uix-button-icon-wrapper"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-button-icon yt-uix-button-icon-enhance"></span></a>\n  </li>\n  <li class="creator-bar-item yt-uix-tooltip yt-uix-tooltip-reverse" title="Audio">\n    <a href="/audio?video_referrer=watch&amp;v=' +
      window.location.href.split("?v=")[1].split("&")[0] +
      '" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-text-dark yt-uix-button-size-default yt-uix-button-empty" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsn"><span class="yt-uix-button-icon-wrapper"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-button-icon yt-uix-button-icon-audio"></span></a>\n  </li>\n  <li class="creator-bar-item yt-uix-tooltip yt-uix-tooltip-reverse" title="Annotations">\n    <a href="/my_videos_annotate?video_referrer=watch&amp;v=' +
      window.location.href.split("?v=")[1].split("&")[0] +
      '" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-text-dark yt-uix-button-size-default yt-uix-button-empty" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsn"><span class="yt-uix-button-icon-wrapper"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-button-icon yt-uix-button-icon-annotations"></span></a>\n  </li>\n  <li class="creator-bar-item yt-uix-tooltip yt-uix-tooltip-reverse" title="Captions">\n    <a href="/timedtext_video?video_referrer=watch&amp;v=' +
      window.location.href.split("?v=")[1].split("&")[0] +
      '" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-text-dark yt-uix-button-size-default yt-uix-button-empty" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsn"><span class="yt-uix-button-icon-wrapper"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-button-icon yt-uix-button-icon-captions"></span></a>\n  </li>\n</ul>  </div>';
    document
      .querySelector("#watch7-content > .yt-uix-button-panel")
      .insertAdjacentHTML("afterbegin", n);
  }

  1 == videoisunlisted &&
    (document.querySelector(
      "#watch7-headline #watch-headline-title"
    ).innerHTML =
      '<span id="watch-privacy-icon" class="yt-uix-tooltip yt-uix-tooltip-reverse unlisted" title="This video is unlisted. Only those with the link can see it." data-tooltip-text="This video is unlisted. Only those with the link can see it.">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="This video is unlisted. Only those with the link can see it.">\n    </span>'),
    1 == videoisprivate &&
      (document.querySelector(
        "#watch7-headline #watch-headline-title"
      ).innerHTML =
        '<span id="watch-privacy-icon" class="yt-uix-tooltip yt-uix-tooltip-reverse private" title="This video is private." data-tooltip-text="This video is private.">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="This video is private.">\n    </span>');
  var a = document.createElement("span");
  a.setAttribute("id", "eow-title"),
    a.setAttribute("class", "watch-title  yt-uix-expander-head"),
    a.setAttribute("dir", "ltr");

  try {
    a.setAttribute(
      "title",
      document.querySelector("meta[itemprop=name]").content
    ),
      (a.innerHTML = document.querySelector(
        "#watch7-container > meta[itemprop=name]"
      ).content),
      isownvideo &&
        ((a.innerHTML +=
          '<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon watch-pencil-icon" type="button" onclick=";return false;"><span class="yt-uix-button-icon-wrapper"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-button-icon yt-uix-button-icon-pencil"></span></button>'),
        a.setAttribute(
          "class",
          "watch-title  yt-uix-expander-head   watch-editable"
        ));
  } catch (t) {
    useverbose && console.log(t),
      (v3.loggerDialog += t + " (at line " + ln() + " in watch.js)\n");
  }

  document.querySelector("#watch-headline-title").append(a);
}

function buildWatchUserheader() {
  var t = document.createElement("a");
  t.setAttribute("href", authorurl),
    t.setAttribute("class", "yt-user-photo "),
    document.querySelector("#watch7-user-header").append(t);
  var e = document.createElement("a");

  try {
    e.setAttribute(
      "href",
      document
        .querySelector("span[itemprop=author] > link[itemprop=url]")
        .href.split(".com")[1] + ""
    );
  } catch (t) {}

  e.setAttribute("class", "g-hovercard yt-uix-sessionlink yt-user-name "),
    e.setAttribute("dir", "ltr");

  try {
    e.setAttribute(
      "data-ytid",
      document
        .querySelector("span[itemprop=author] > link[itemprop=url]")
        .href.split(".com")[1]
    );
  } catch (t) {}

  e.setAttribute("data-name", "watch"),
    (e.innerHTML = authorname),
    document.querySelector("#watch7-user-header").append(e),
    verifyAuthor();
  var n = document.createElement("span");
  n.setAttribute("class", "yt-user-separator"),
    (n.innerHTML = "·"),
    document.querySelector("#watch7-user-header").append(n);
  var a = document.createElement("a");
  a.setAttribute("class", "yt-uix-sessionlink yt-user-videos");

  try {
    a.setAttribute(
      "href",
      document
        .querySelector("span[itemprop=author] > link[itemprop=url]")
        .href.split(".com")[1] + "/videos"
    );
  } catch (t) {}

  document.querySelector("body[spfprogress]") ||
    (authorvideocount && (a.innerHTML = authorvideocount));

  try {
    null != authorvideocountresponse &&
      (a.innerHTML = authorvideocountresponse);
  } catch (t) {
    useverbose && console.log(t),
      (v3.loggerDialog += t + " (at line " + ln() + " in watch.js)\n");
  }

  document.querySelector("#watch7-user-header").append(a),
    (document.querySelector("#watch7-user-header .yt-user-videos").outerHTML +=
      "<br>");
  var i = document.createElement("span");
  i.setAttribute("id", "watch7-subscription-container"),
    document.querySelector("#watch7-user-header").append(i);
  var o = document.createElement("div");
  o.setAttribute("id", "watch7-views-info"),
    document.querySelector("#watch7-user-header").append(o),
    buildUserPhoto(),
    buildViewsInfo(),
    buildSubscriptionContainer();
}

function buildSubscriptionContainer() {
  if (1 == isownvideo)
    document.querySelector("#watch7-subscription-container").innerHTML =
      '<a href="/advanced_settings" class="yt-uix-button  channel-settings-link yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default" data-sessionlink=""><span class="yt-uix-button-icon-wrapper"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-button-icon yt-uix-button-icon-settings"></span><span class="yt-uix-button-content">Channel settings </span></a>';
  else {
    var t = document.createElement("span");
    t.setAttribute(
      "class",
      " yt-uix-button-subscription-container with-preferences"
    ),
      document.querySelector("#watch7-subscription-container").append(t);
    var e = document.createElement("button");
    e.setAttribute("aria-busy", "false"),
      e.setAttribute("aria-role", "button"),
      1 == subscribedtoauthor
        ? (e.setAttribute(
            "class",
            "yt-uix-subscription-button yt-uix-button yt-uix-button-subscribed-branded hover-enabled yt-uix-button-size-default yt-uix-button-has-icon"
          ),
          e.setAttribute("title", subscribecount + " subscribers"))
        : e.setAttribute(
            "class",
            "yt-uix-subscription-button yt-uix-button yt-uix-button-subscribe-branded hover-enabled yt-uix-button-size-default yt-uix-button-has-icon"
          ),
      e.setAttribute("aria-live", "polite"),
      e.setAttribute("onclick", ";return false;"),
      e.setAttribute("data-sessionlink", "");

    try {
      e.setAttribute("data-channel-external-id", authorurl.split("/")[2]);
    } catch (t) {}

    e.setAttribute("data-style-type", "branded"),
      e.setAttribute("data-href", ""),
      e.setAttribute("role", "button"),
      document
        .querySelector(
          "#watch7-subscription-container .yt-uix-button-subscription-container"
        )
        .append(e);
    var n = document.createElement("span");
    n.setAttribute("class", "yt-uix-button-icon-wrapper"),
      document
        .querySelector(
          "#watch7-subscription-container .yt-uix-button-subscription-container .yt-uix-subscription-button"
        )
        .append(n);
    var a = document.createElement("img");
    a.setAttribute("class", "yt-uix-button-icon yt-uix-button-icon-subscribe"),
      a.setAttribute("src", "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"),
      a.setAttribute("alt", ""),
      a.setAttribute("title", ""),
      document
        .querySelector(
          "#watch7-subscription-container .yt-uix-button-subscription-container .yt-uix-subscription-button .yt-uix-button-icon-wrapper"
        )
        .append(a);
    var i = document.createElement("span");
    i.setAttribute("class", "yt-uix-button-content"),
      document
        .querySelector(
          "#watch7-subscription-container .yt-uix-button-subscription-container .yt-uix-subscription-button"
        )
        .append(i);
    var o = document.createElement("span");
    o.setAttribute("class", "subscribe-label"),
      o.setAttribute(
        "aria-label",
        v3.UIMSG[v3.nationIndex].SUBSCRIBE_STATE_NONE
      ),
      (o.innerHTML = v3.UIMSG[v3.nationIndex].SUBSCRIBE_STATE_NONE),
      document
        .querySelector(
          "#watch7-subscription-container .yt-uix-button-subscription-container .yt-uix-subscription-button .yt-uix-button-content"
        )
        .append(o);
    var r = document.createElement("span");
    r.setAttribute("class", "subscribed-label"),
      r.setAttribute(
        "aria-label",
        v3.UIMSG[v3.nationIndex].SUBSCRIBE_STATE_SUBSCRIBED
      ),
      (r.innerHTML = v3.UIMSG[v3.nationIndex].SUBSCRIBE_STATE_SUBSCRIBED),
      document
        .querySelector(
          "#watch7-subscription-container .yt-uix-button-subscription-container .yt-uix-subscription-button .yt-uix-button-content"
        )
        .append(r);
    var s = document.createElement("span");
    s.setAttribute("class", "unsubscribe-label"),
      s.setAttribute(
        "aria-label",
        v3.UIMSG[v3.nationIndex].SUBSCRIBE_STATE_QUESTION
      ),
      (s.innerHTML = v3.UIMSG[v3.nationIndex].SUBSCRIBE_STATE_QUESTION),
      document
        .querySelector(
          "#watch7-subscription-container .yt-uix-button-subscription-container .yt-uix-subscription-button .yt-uix-button-content"
        )
        .append(s);
    var c = document.createElement("button");
    c.setAttribute(
      "class",
      "yt-uix-subscription-preferences-button yt-uix-button yt-uix-button-default yt-uix-button-size-default yt-uix-button-has-icon yt-uix-button-empty"
    ),
      c.setAttribute("type", "button"),
      c.setAttribute("onclick", ";return false;"),
      c.setAttribute("data-sessionlink", "");

    try {
      c.setAttribute("data-channel-external-id", authorurl.split("/")[2]);
    } catch (t) {}

    c.setAttribute("role", "button"),
      document
        .querySelector(
          "#watch7-subscription-container .yt-uix-button-subscription-container"
        )
        .append(c);
    var l = document.createElement("span");
    l.setAttribute("class", "yt-uix-button-icon-wrapper"),
      document
        .querySelector(
          "#watch7-subscription-container .yt-uix-button-subscription-container .yt-uix-subscription-preferences-button"
        )
        .append(l);
    var d = document.createElement("img");
    d.setAttribute(
      "class",
      "yt-uix-button-icon yt-uix-button-icon-subscription-preferences"
    ),
      d.setAttribute("src", "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"),
      d.setAttribute("alt", ""),
      a.setAttribute("title", ""),
      document
        .querySelector(
          "#watch7-subscription-container .yt-uix-button-subscription-container .yt-uix-subscription-preferences-button .yt-uix-button-icon-wrapper"
        )
        .append(d);
    var u = document.createElement("span");
    u.setAttribute(
      "class",
      "yt-subscription-button-subscriber-count-branded-horizontal"
    ),
      "en" == v3.nationIndex
        ? (u.innerHTML = deabreviateCnt(subscribecount))
        : (u.innerHTML = subscribecount),
      document
        .querySelector(
          "#watch7-subscription-container .yt-uix-button-subscription-container"
        )
        .append(u);
  }
}

function buildUserPhoto() {
  var t = document.createElement("span");
  t.setAttribute("class", "video-thumb  yt-thumb yt-thumb-48 g-hovercard");

  try {
    t.setAttribute("data-ytid", authorurl.split("/")[2]);
  } catch (t) {}

  document.querySelector("a.yt-user-photo").append(t);
  var e = document.createElement("span");
  e.setAttribute("class", "yt-thumb-square"),
    document.querySelector("a.yt-user-photo span.video-thumb").append(e);
  var n = document.createElement("span");
  n.setAttribute("class", "yt-thumb-clip"),
    document
      .querySelector("a.yt-user-photo span.video-thumb span.yt-thumb-square")
      .append(n);
  var a = document.createElement("img");
  a.setAttribute("alt", authorname),
    a.setAttribute("src", authorpic),
    a.setAttribute("width", "48"),
    document
      .querySelector(
        "a.yt-user-photo span.video-thumb span.yt-thumb-square span.yt-thumb-clip"
      )
      .append(a);
  var i = document.createElement("span");
  i.setAttribute("class", "vertical-align"),
    document
      .querySelector(
        "a.yt-user-photo span.video-thumb span.yt-thumb-square span.yt-thumb-clip"
      )
      .append(i);
}

function buildViewsInfo() {
  var t = document.createElement("span");
  t.setAttribute("class", "watch-view-count "),
    (t.innerHTML = "\n    " + viewcount + "\n  "),
    document.querySelector("#watch7-views-info").append(t);

  try {
    "9bZkp7q19f0" == window.location.href.split("?v=")[1].split("&")[0] &&
      document
        .querySelector("#watch7-views-info")
        .insertAdjacentHTML(
          "beforeend",
          '<img class="watch-dancing-psy" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">'
        );
  } catch (t) {}

  var e = document.createElement("div");
  e.setAttribute("class", "video-extras-sparkbars"),
    document.querySelector("#watch7-views-info").append(e);
  var n = document.createElement("span");
  n.setAttribute("class", "video-extras-likes-dislikes"),
    document.querySelector("#watch7-views-info").append(n),
    buildSentimentBar(),
    buildSentimentInfo();
}

function buildSentimentBar() {
  var t = document.createElement("div");
  t.setAttribute("class", "video-extras-sparkbar-likes"),
    t.setAttribute("style", "width: " + sentimentbarprocent + "%;"),
    document
      .querySelector("#watch7-views-info .video-extras-sparkbars")
      .append(t);
  var e = document.createElement("div");
  e.setAttribute("class", "video-extras-sparkbar-dislikes"),
    e.setAttribute(
      "style",
      "width: " + parseInt(100 - sentimentbarprocent) + "%;"
    ),
    document
      .querySelector("#watch7-views-info .video-extras-sparkbars")
      .append(e);
}

function buildSentimentInfo() {
  var t = document.createElement("img");
  t.setAttribute("id", "watch-stats-like"),
    t.setAttribute("class", "icon-watch-stats-like"),
    t.setAttribute("src", "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"),
    t.setAttribute("alt", v3.UIMSG[v3.nationIndex].LIKE),
    document
      .querySelector("#watch7-views-info .video-extras-likes-dislikes")
      .append(t),
    (document.querySelector(
      "#watch7-views-info .video-extras-likes-dislikes #watch-stats-like"
    ).outerHTML += " ");
  var e = document.createElement("span");
  e.setAttribute("class", "likes-count"),
    (e.innerHTML = likecount),
    document
      .querySelector("#watch7-views-info .video-extras-likes-dislikes")
      .append(e),
    (document.querySelector(
      "#watch7-views-info .video-extras-likes-dislikes .likes-count"
    ).outerHTML += "\n\n       \n      ");
  var n = document.createElement("img");
  n.setAttribute("id", "watch-stats-dislike"),
    n.setAttribute("class", "icon-watch-stats-dislike"),
    n.setAttribute("src", "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"),
    n.setAttribute("alt", v3.UIMSG[v3.nationIndex].DISLIKE),
    document
      .querySelector("#watch7-views-info .video-extras-likes-dislikes")
      .append(n),
    (document.querySelector(
      "#watch7-views-info .video-extras-likes-dislikes #watch-stats-dislike"
    ).outerHTML += " ");
  var a = document.createElement("span");
  a.setAttribute("class", "dislikes-count"),
    (a.innerHTML = dislikecount),
    document
      .querySelector("#watch7-views-info .video-extras-likes-dislikes")
      .append(a);
}

function insertAfter(t, e) {
  t.parentNode.insertBefore(e, t.nextSibling);
}

function buildFooter() {
  var t = document.createElement("div");
  t.setAttribute("id", "footer-container"),
    v3.htmlBuilderConfig.core.NIRVANA &&
      t.setAttribute("class", "yt-base-gutter"),
    (t.innerHTML =
      '<div id="footer"><div id="footer-main"><div id="footer-logo"><a href="/reporthistory?v3feed=wHaT_2_wAtCh" title="YouTube home"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="YouTube home"></a></div>  <ul class="pickers yt-uix-button-group" data-button-toggle-group="optional">\n      <li>\n          \n  <button id="yt-picker-language-button" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default yt-uix-button-has-icon" type="button" onclick=";return false;" data-button-toggle="true" data-button-menu-id="arrow-display" data-picker-position="footer" data-picker-key="language" data-button-action="yt.www.picker.load" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-footer-language" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></span><span class="yt-uix-button-content">  <span class="yt-picker-button-label">\nLanguage:\n  </span>\n  ' +
      authinfo.HL.toUpperCase() +
      '\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n\n\n      </li>\n      <li>\n          \n  <button id="yt-picker-country-button" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default" type="button" onclick=";return false;" data-button-toggle="true" data-button-menu-id="arrow-display" data-picker-position="footer" data-picker-key="country" data-button-action="yt.www.picker.load" role="button"><span class="yt-uix-button-content">  <span class="yt-picker-button-label">\nCountry:\n  </span>\n  ' +
      authinfo.GL +
      '\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n\n\n      </li>\n      <li>\n          \n  <button id="yt-picker-safetymode-button" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default" type="button" onclick=";return false;" data-button-toggle="true" data-button-menu-id="arrow-display" data-picker-position="footer" data-picker-key="safetymode" data-button-action="yt.www.picker.load" role="button"><span class="yt-uix-button-content">  <span class="yt-picker-button-label">\nSafety:\n  </span>\nOff\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n\n\n      </li>\n  </ul>\n  <button id="google-help" data-ghelp-anchor="google-help" class="yt-uix-button-reverse yt-google-help-link yt-uix-button yt-uix-button-default yt-uix-button-size-default" type="button" onclick=";return false;" role="button"><span class="yt-uix-button-content">  <img class="questionmark" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">\n  <span>Help</span>\n    <img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">\n </span></button>\n <button id="gterrorinvoker" style="margin-left:9px;" class="yt-uix-button-reverse yt-google-help-link yt-uix-button yt-uix-button-default yt-uix-button-size-default" type="button" onclick="return false;" role="button"><span class="yt-uix-button-content">\n  <span>Log</span>\n </span></button>\n      <div id="yt-picker-language-footer" class="yt-picker" style="display: none">\n      <p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n  </div>\n\n      <div id="yt-picker-country-footer" class="yt-picker" style="display: none">\n      <p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n  </div>\n\n      <div id="yt-picker-safetymode-footer" class="yt-picker" style="display: none">\n      <p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n  </div>\n\n</div><div id="footer-links"><ul id="footer-links-primary">  <li><a href="//www.youtube.com/yt/about/">About</a></li>\n  <li><a href="//www.youtube.com/yt/press/">Press &amp; Blogs</a></li>\n  <li><a href="//www.youtube.com/yt/copyright/">Copyright</a></li>\n  <li><a href="//www.youtube.com/yt/creators/">Creators &amp; Partners</a></li>\n  <li><a href="//www.youtube.com/yt/advertise/">Advertising</a></li>\n  <li><a href="//www.youtube.com/yt/dev/">Developers</a></li>\n</ul><ul id="footer-links-secondary">  <li><a href="/t/terms">Terms</a></li>\n  <li><a href="https://www.google.com/intl/en/policies/privacy/">Privacy</a></li>\n  <li><a href="//www.youtube.com/yt/policyandsafety/">\nPolicy &amp; Safety\n  </a></li>\n  <li><a href="//www.google.com/tools/feedback/intl/en/error.html" onclick="return yt.www.feedback.start(59);" class="reportbug">Send feedback</a></li>\n  <li><a href="#" onclick="if (v3.config.nirvanaUi) v3.setSetting(\'nirvanaUi\', 0, 1); else v3.setSetting(\'nirvanaUi\', 1, 1);">' +
      (v3.htmlBuilderConfig.core.NIRVANA
        ? v3.UIMSG.get("FOOTER_KILL_DOGFOOD")
        : v3.UIMSG.get("FOOTER_TRY_DOGFOOD")) +
      "</a></li>\n  <li></li>\n</ul></div></div>"),
    insertAfter(document.querySelector("#body-container"), t),
    (document.querySelector("#gterrorinvoker").onclick = function () {
      gtErrCreateLog(v3.loggerDialog);
    });
}

function isSongName(t) {
  try {
    if ("Song" === t.metadataRowRenderer.title.simpleText) return !0;
  } catch (t) {
    return !1;
  }
}

function isArtistName(t) {
  try {
    if ("Artist" === t.metadataRowRenderer.title.simpleText) return !0;
  } catch (t) {
    return !1;
  }
}

function hasContinuation(t) {
  try {
    if (t.continuationItemRenderer) return !0;
  } catch (t) {
    return !1;
  }
}

function isCurrentChannel(t) {
  try {
    if (1 == t.accountItem.isSelected) return !0;
  } catch (t) {
    return !1;
  }
}

function capitalizeTheFirstLetterOfEachWord(t) {
  for (var e = t.toLowerCase().split(" "), n = 0; n < e.length; n++)
    e[n] = e[n].charAt(0).toUpperCase() + e[n].substring(1);

  return e.join(" ");
}

function isVideoMainInfo(t) {
  try {
    return !!t.videoPrimaryInfoRenderer;
  } catch (t) {
    return !1;
  }
}

function isVideoSecInfo(t) {
  try {
    return !!t.videoSecondaryInfoRenderer;
  } catch (t) {
    return !1;
  }
}

function isVideoComments(t) {
  try {
    return "comment-item-section" == t.itemSectionRenderer.sectionIdentifier;
  } catch (t) {
    return !1;
  }
}

function isMetaGameInfo(t) {
  try {
    return (
      "RICH_METADATA_RENDERER_STYLE_BOX_ART" == t.richMetadataRenderer.style
    );
  } catch (t) {
    return !1;
  }
}

("/watch" != window.location.pathname &&
  "/watch/video" != window.location.pathname) ||
  window.location.href.includes("v3cv=0") ||
  waitForElmHtml("#v3-initial-comment-ajax").then(function (t) {
    craftComments(JSON.parse(t.innerHTML), 0), t.remove();
  }),
  (v3.watch.v3playerfriend = function () {
    setTimeout(function () {
      document.querySelector("body").setAttribute("p-load", ""),
        $("body").append("<script>registerYtWatchHistory();</script>");
    }, 600);
    var t = !1,
      e = !1;
    const n = document.querySelector("video");
    n.addEventListener("playing", (n) => {
      t ||
        (setTimeout(function () {
          $("body").append(
            "<script>try{if (ytInitialPlayerResponse.streamingData.dashManifestUrl) if (getCookie('vtpc')) {if (document.querySelector('#movie_player').getAvailableQualityLevels().toString().includes(getCookie('vtpc')))\r\n{\r\ndocument.querySelector('#movie_player').setPlaybackQualityRange(getCookie('vtpc'));\r\ndocument.querySelector('#movie_player').setPlaybackQuality(getCookie('vtpc'));\r\n}\r\nelse {document.querySelector('#movie_player').setPlaybackQualityRange(document.querySelector('#movie_player').getAvailableQualityLevels()[0]); document.querySelector('#movie_player').setPlaybackQuality(document.querySelector('#movie_player').getAvailableQualityLevels()[0]);}\r\n}}catch(err){}</script>"
          );
        }, 50),
        setTimeout(function () {
          $("body").append(
            "<script>try{if (ytInitialPlayerResponse.streamingData.dashManifestUrl) if (getCookie('vtpc')) {if (document.querySelector('#movie_player').getAvailableQualityLevels().toString().includes(getCookie('vtpc')))\r\n{\r\ndocument.querySelector('#movie_player').setPlaybackQualityRange(getCookie('vtpc'));\r\ndocument.querySelector('#movie_player').setPlaybackQuality(getCookie('vtpc'));\r\n}\r\nelse {document.querySelector('#movie_player').setPlaybackQualityRange(document.querySelector('#movie_player').getAvailableQualityLevels()[0]); document.querySelector('#movie_player').setPlaybackQuality(document.querySelector('#movie_player').getAvailableQualityLevels()[0]);}\r\n}}catch(err){}</script>"
          );
        }, 100),
        (t = !0)),
        0 == document.title.includes("▶") &&
          (document.title =
            "▶ " +
            document.querySelector("meta[itemprop=name]").content +
            " - YouTube TUDO2"),
        document.querySelector("#action-panel-share:not(.hid)[b-pl]") &&
          goToPanel(1),
        window.location.href.includes("&t=") &&
          !e &&
          ($("body").append(
            '<script id="v3framer">document.querySelector("#movie_player").seekTo(window.location.href.split("&t=")[1].split("s")[0]);</script>'
          ),
          (e = !0));
    }),
      n.addEventListener("pause", (t) => {
        1 == document.title.includes("▶") &&
          (document.title =
            document.querySelector("meta[itemprop=name]").content +
            " - YouTube TUDO2");
      }),
      n.addEventListener("ended", (t) => {
        (document.querySelector(".ytp-button-replay").onclick = function () {
          goToPanel(1);
        }),
          window.location.href.includes("&list=")
            ? document.querySelector(
                ".video-list-item.playlist-bar-item-playing+.video-list-item a"
              ) &&
              (window.location = document.querySelector(
                ".video-list-item.playlist-bar-item-playing+.video-list-item a"
              ).href)
            : (goToPanel(2),
              0 == wasshareajaxcreated && craftShareAjax(),
              document
                .querySelector("#action-panel-share")
                .setAttribute("b-pl", "")),
          document.querySelector(".autoplay li a") &&
            (window.location = document.querySelector(".autoplay li a").href),
          (1 == isusingloopvideo || window.location.href.includes("&loop=1")) &&
            document.querySelector(".ytp-button-replay").click();
      }),
      (document.querySelector(".ytp-button-fullscreen-enter").onclick =
        function () {
          usev3fullscreen &&
            document.querySelector("html").setAttribute("v3fullscreen", "");
        });
    var a = "";
    if (
      ((a = usingvevocover ? "watch-branded-banner" : "watch-small"),
      cinemastate && document.querySelector(".ytp-size-toggle-large").click(),
      document.querySelector(".ytp-size-toggle-large")
        ? document
            .querySelector(".ytp-size-toggle-large")
            .setAttribute("onclick", "v3.unsafeSetting('g', 1)")
        : document
            .querySelector(".ytp-size-toggle-small")
            .setAttribute("onclick", "v3.unsafeSetting('g', 0)"),
      document.querySelector(".exp-modern-cinema-player"))
    )
      $(document).on("click", ".ytp-size-toggle-large", function (t) {
        (cinemastate = !1),
          document
            .querySelector("#watch7-container")
            .classList.remove("watch-wide"),
          document.querySelector("#player").classList.add(a),
          document.querySelector("#player").classList.remove("watch-medium"),
          t.currentTarget.setAttribute("onclick", "v3.unsafeSetting('g', 1)");
      }),
        $(document).on("click", ".ytp-size-toggle-small", function (t) {
          (cinemastate = !0),
            document
              .querySelector("#watch7-container")
              .classList.add("watch-wide"),
            setTimeout(function () {
              document.querySelector("#player").classList.remove(a),
                document.querySelector("#player").classList.add("watch-medium");
            }, 300),
            t.currentTarget.setAttribute("onclick", "v3.unsafeSetting('g', 0)");
        });
    else {
      var i = document.createElement("button");
      i.setAttribute("class", "ytp-v3teather ytp-button yt-uix-tooltip"),
        i.setAttribute("title", "Cinema mode"),
        i.setAttribute("aria-label", "Cinema mode");
      var o = document.createElement("button");
      o.setAttribute("class", "ytp-v3normal ytp-button yt-uix-tooltip"),
        o.setAttribute("title", "Normal mode"),
        o.setAttribute("aria-label", "Normal mode"),
        insertAfter(document.querySelector(".ytp-size-toggle-large"), o),
        insertAfter(document.querySelector(".ytp-size-toggle-large"), i),
        (document.querySelector(".ytp-v3teather").onclick = function () {
          document.querySelector("#player." + a) &&
            (document.querySelector(".ytp-size-toggle-large").click(),
            document
              .querySelector("#watch7-container")
              .classList.add("watch-wide"),
            setTimeout(function () {
              document.querySelector("#player").classList.remove(a),
                document.querySelector("#player").classList.add("watch-medium");
            }, 300));
        }),
        (document.querySelector(".ytp-v3normal").onclick = function () {
          document.querySelector("#player.watch-medium") &&
            (document.querySelector(".ytp-size-toggle-small").click(),
            document
              .querySelector("#watch7-container")
              .classList.remove("watch-wide"),
            document.querySelector("#player").classList.add(a),
            document.querySelector("#player").classList.remove("watch-medium"));
        });
    }
    (document.querySelector(".ytp-button-share").onclick = function () {
      goToPanel(2), 0 == wasshareajaxcreated && craftShareAjax();
    }),
      (document.querySelector(".ytp-button-watch-later").onclick = function () {
        playerAddWl();
      }),
      1 != liketoggled ||
      document
        .querySelector(".html5-info-bar")
        .className.includes("sentiment-like")
        ? 1 != disliketoggled ||
          document
            .querySelector(".html5-info-bar")
            .className.includes("sentiment-dislike") ||
          document
            .querySelector(".html5-info-bar")
            .classList.add("sentiment-dislike")
        : document
            .querySelector(".html5-info-bar")
            .classList.add("sentiment-like"),
      1 == authinfo.LOGGED_IN &&
        ((document.querySelector(".ytp-button-like").onclick = function () {
          document.querySelector(
            "button#watch-dislike.yt-uix-button-toggled"
          ) &&
            (v3.innerTube.sentiment(
              window.location.href.split("?v=")[1].split("&")[0],
              mainvideoinfo.videoPrimaryInfoRenderer.videoActions.menuRenderer
                .topLevelButtons[1].toggleButtonRenderer.toggledServiceEndpoint
                .likeEndpoint.removeLikeParams,
              3
            ),
            document
              .querySelector("button#watch-dislike")
              .classList.remove("yt-uix-button-toggled"),
            (document.querySelector(".dislikes-count").innerText =
              parseInt(
                document
                  .querySelector(".dislikes-count")
                  .innerText.replace(/[^0-9.]/g, "")
              ) - 1),
            (document.querySelector(".dislikes-count").innerText = document
              .querySelector(".dislikes-count")
              .innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ","))),
            document.querySelector("button#watch-like.yt-uix-button-toggled")
              ? (setTimeout(function () {
                  v3.innerTube.sentiment(
                    window.location.href.split("?v=")[1].split("&")[0],
                    mainvideoinfo.videoPrimaryInfoRenderer.videoActions
                      .menuRenderer.topLevelButtons[0].toggleButtonRenderer
                      .toggledServiceEndpoint.likeEndpoint.removeLikeParams,
                    1
                  ),
                    document
                      .querySelector("button#watch-like")
                      .classList.remove("yt-uix-button-toggled");
                }, 50),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-likes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + sentimentbarprocentdislike + "%;"
                  ),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-dislikes"
                  )
                  .setAttribute(
                    "style",
                    "width: " +
                      parseInt(100 - sentimentbarprocentdislike) +
                      "%;"
                  ),
                (document.querySelector(".likes-count").innerText =
                  parseInt(
                    document
                      .querySelector(".likes-count")
                      .innerText.replace(/[^0-9.]/g, "")
                  ) - 1),
                (document.querySelector(".likes-count").innerText = document
                  .querySelector(".likes-count")
                  .innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",")))
              : (setTimeout(function () {
                  v3.innerTube.sentiment(
                    window.location.href.split("?v=")[1].split("&")[0],
                    mainvideoinfo.videoPrimaryInfoRenderer.videoActions
                      .menuRenderer.topLevelButtons[0].toggleButtonRenderer
                      .defaultServiceEndpoint.commandExecutorCommand.commands[1]
                      .likeEndpoint.likeParams,
                    0
                  ),
                    document
                      .querySelector("button#watch-like")
                      .classList.add("yt-uix-button-toggled");
                }, 50),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-likes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + sentimentbarprocentlike + "%;"
                  ),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-dislikes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + parseInt(100 - sentimentbarprocentlike) + "%;"
                  ),
                (document.querySelector(".likes-count").innerText =
                  parseInt(
                    document
                      .querySelector(".likes-count")
                      .innerText.replace(/[^0-9.]/g, "")
                  ) + 1),
                (document.querySelector(".likes-count").innerText = document
                  .querySelector(".likes-count")
                  .innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",")));
        }),
        (document.querySelector(".ytp-button-dislike").onclick = function () {
          document.querySelector("button#watch-like.yt-uix-button-toggled") &&
            (v3.innerTube.sentiment(
              window.location.href.split("?v=")[1].split("&")[0],
              mainvideoinfo.videoPrimaryInfoRenderer.videoActions.menuRenderer
                .topLevelButtons[0].toggleButtonRenderer.toggledServiceEndpoint
                .likeEndpoint.removeLikeParams,
              1
            ),
            document
              .querySelector("button#watch-like")
              .classList.remove("yt-uix-button-toggled"),
            (document.querySelector(".likes-count").innerText =
              parseInt(
                document
                  .querySelector(".likes-count")
                  .innerText.replace(/[^0-9.]/g, "")
              ) - 1),
            (document.querySelector(".likes-count").innerText = document
              .querySelector(".likes-count")
              .innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ","))),
            document.querySelector("button#watch-dislike.yt-uix-button-toggled")
              ? (setTimeout(function () {
                  v3.innerTube.sentiment(
                    window.location.href.split("?v=")[1].split("&")[0],
                    mainvideoinfo.videoPrimaryInfoRenderer.videoActions
                      .menuRenderer.topLevelButtons[1].toggleButtonRenderer
                      .toggledServiceEndpoint.likeEndpoint.removeLikeParams,
                    3
                  ),
                    document
                      .querySelector("button#watch-dislike")
                      .classList.remove("yt-uix-button-toggled");
                }, 50),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-likes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + sentimentbarprocentlike + "%;"
                  ),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-dislikes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + parseInt(100 - sentimentbarprocentlike) + "%;"
                  ),
                (document.querySelector(".dislikes-count").innerText =
                  parseInt(
                    document
                      .querySelector(".dislikes-count")
                      .innerText.replace(/[^0-9.]/g, "")
                  ) - 1),
                (document.querySelector(".dislikes-count").innerText = document
                  .querySelector(".dislikes-count")
                  .innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",")))
              : (setTimeout(function () {
                  v3.innerTube.sentiment(
                    window.location.href.split("?v=")[1].split("&")[0],
                    mainvideoinfo.videoPrimaryInfoRenderer.videoActions
                      .menuRenderer.topLevelButtons[1].toggleButtonRenderer
                      .defaultServiceEndpoint.commandExecutorCommand.commands[1]
                      .likeEndpoint.dislikeParams,
                    2
                  ),
                    document
                      .querySelector("button#watch-dislike")
                      .classList.add("yt-uix-button-toggled");
                }, 50),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-likes"
                  )
                  .setAttribute(
                    "style",
                    "width: " + sentimentbarprocentdislike + "%;"
                  ),
                document
                  .querySelector(
                    "#watch7-views-info .video-extras-sparkbars .video-extras-sparkbar-dislikes"
                  )
                  .setAttribute(
                    "style",
                    "width: " +
                      parseInt(100 - sentimentbarprocentdislike) +
                      "%;"
                  ),
                (document.querySelector(".dislikes-count").innerText =
                  parseInt(
                    document
                      .querySelector(".dislikes-count")
                      .innerText.replace(/[^0-9.]/g, "")
                  ) + 1),
                (document.querySelector(".dislikes-count").innerText = document
                  .querySelector(".dislikes-count")
                  .innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",")));
        })),
      (document.querySelector(".ytp-button-playlist").onclick = function () {
        window.location =
          "https://www.youtube.com/watch?v=" +
          window.location.href.split("?v=")[1].split("&")[0];
      });

    try {
      craftMoviePlayerInfo();
    } catch (t) {
      useverbose && console.log(t),
        (v3.loggerDialog += t + " (at line " + ln() + " in watch.js)\n");
    }

    document.onkeydown = function (t) {
      " " == t.key && t.target == document.body
        ? (t.preventDefault(),
          document.querySelector("video").click(),
          document.querySelector("body").click())
        : "." == t.key && t.target == document.body
        ? (t.preventDefault(),
          $("body").append(
            '<script id="v3framer">document.querySelector("#movie_player").seekBy(0.03);</script>'
          ),
          document.querySelector("#v3framer").remove())
        : "," == t.key &&
          t.target == document.body &&
          (t.preventDefault(),
          $("body").append(
            '<script id="v3framer">document.querySelector("#movie_player").seekBy(-0.03);</script>'
          ),
          document.querySelector("#v3framer").remove());
    };
  });
var mainvideoinfo = {},
  secondaryvideoinfo = {},
  commentvideoinfo = {},
  uploaddate,
  viewcount,
  sentimentbarprocent,
  sentimentbarprocentlike,
  sentimentbarprocentdislike,
  likecount,
  liketoggled,
  dislikecount,
  disliketoggled,
  authorurl,
  authorpic,
  subscribecount,
  authorname,
  authorisverified,
  subscribedtoauthor,
  authorvideocount = "   ",
  isuserloggedin,
  userpicture,
  descriptionstring,
  licenseused,
  recomshtml,
  isauthorverified,
  commentcontinuation,
  videoisunlisted,
  videoisprivate,
  isownvideo,
  videoisagerestrict,
  metasongname,
  metaartistname,
  metagamename,
  metagameimg,
  isusingplaylist,
  countloadcomments = 0,
  trendinginfo,
  islivestream,
  issentimentbarbroken,
  metagameinfo,
  metagame,
  usingvevocover,
  createCommentParams;

function calculateSentiment(t, e) {
  return (t / (t + e)) * 100;
}

function v3HandleBrokenSentimentUpdate() {
  if (
    (console.log("was called v3HandleBrokenSentimentUpdate"),
    api.watch.meta.AltSentiment)
  ) {
    var t = api.watch.meta.AltSentiment;
    return (
      likecount || (likecount = 0),
      (dislikecount = t.dislikes
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
      (sentimentbarprocent = calculateSentiment(
        parseInt(likecount.toString().replace(/[^0-9.]/g, "")),
        parseInt(dislikecount.toString().replace(/[^0-9.]/g, ""))
      )),
      (sentimentbarprocentlike = calculateSentiment(
        parseInt(likecount.toString().replace(/[^0-9.]/g, "")) + 1,
        parseInt(dislikecount.toString().replace(/[^0-9.]/g, ""))
      )),
      void (sentimentbarprocentdislike = calculateSentiment(
        parseInt(likecount.toString().replace(/[^0-9.]/g, "")),
        parseInt(dislikecount.toString().replace(/[^0-9.]/g, "")) + 1
      ))
    );
  }

  return null == authinfo.VIDEO_RATING
    ? ((dislikecount = 0),
      (sentimentbarprocent = 100),
      (sentimentbarprocentlike = 100),
      (sentimentbarprocentdislike = 100),
      void (issentimentbarbroken = !0))
    : 0 == authinfo.VIDEO_RATING
    ? ((likecount = 0),
      (dislikecount = 0),
      (sentimentbarprocent = 50),
      (sentimentbarprocentlike = 100),
      (sentimentbarprocentdislike = 0),
      void (issentimentbarbroken = !0))
    : 5 != authinfo.VIDEO_RATING || likecount
    ? ("No" == likecount && (likecount = 0),
      (dislikecount = parseInt(
        Math.round(
          parseInt(likecount.toString().replace(/[^0-9.]/g, "")) *
            ((5 - authinfo.VIDEO_RATING) / (authinfo.VIDEO_RATING - 1))
        )
      )
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
      0 == authinfo.VIDEO_RATING
        ? ((sentimentbarprocent = 50),
          (sentimentbarprocentlike = 100),
          (sentimentbarprocentdislike = 0))
        : ((sentimentbarprocent = calculateSentiment(
            parseInt(likecount.toString().replace(/[^0-9.]/g, "")),
            parseInt(dislikecount.toString().replace(/[^0-9.]/g, ""))
          )),
          (sentimentbarprocentlike = calculateSentiment(
            parseInt(likecount.toString().replace(/[^0-9.]/g, "")) + 1,
            parseInt(dislikecount.toString().replace(/[^0-9.]/g, ""))
          )),
          (sentimentbarprocentdislike = calculateSentiment(
            parseInt(likecount.toString().replace(/[^0-9.]/g, "")),
            parseInt(dislikecount.toString().replace(/[^0-9.]/g, "")) + 1
          ))),
      void (issentimentbarbroken = !0))
    : ((likecount = 0),
      (dislikecount = 0),
      (sentimentbarprocent = 50),
      (sentimentbarprocentlike = 100),
      (sentimentbarprocentdislike = 0),
      void (issentimentbarbroken = !0));
}

function verifyAuthor() {
  isauthorverified &&
    (document.querySelector("#watch7-user-header .yt-user-name").outerHTML +=
      '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name">\n  </span>');
}

function truncateString(t, e) {
  return t.length > e ? t.substr(0, e - 3) + "..." : t;
}

function bakeDescription(t) {
  if (
    ((t = ""),
    void 0 !==
      v3TestSyntax(
        "ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(isVideoSecInfo).videoSecondaryInfoRenderer.description"
      ))
  )
    for (
      i = 0,
        j =
          ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(
            isVideoSecInfo
          ).videoSecondaryInfoRenderer.description.runs.length;
      i < j;
      i++
    )
      try {
        void 0 !==
        ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(
          isVideoSecInfo
        ).videoSecondaryInfoRenderer.description.runs[i].navigationEndpoint
          ? "undefined" !=
            decodeURIComponent(
              ytdata.contents.twoColumnWatchNextResults.results.results.contents
                .find(isVideoSecInfo)
                .videoSecondaryInfoRenderer.description.runs[
                  i
                ].navigationEndpoint.urlEndpoint.url.split("&q=")[1]
            )
            ? (t +=
                '<a href="' +
                decodeURIComponent(
                  ytdata.contents.twoColumnWatchNextResults.results.results.contents
                    .find(isVideoSecInfo)
                    .videoSecondaryInfoRenderer.description.runs[
                      i
                    ].navigationEndpoint.urlEndpoint.url.split("&q=")[1]
                ) +
                '" target="_blank" title="' +
                decodeURIComponent(
                  ytdata.contents.twoColumnWatchNextResults.results.results.contents
                    .find(isVideoSecInfo)
                    .videoSecondaryInfoRenderer.description.runs[
                      i
                    ].navigationEndpoint.urlEndpoint.url.split("&q=")[1]
                ) +
                '" rel="nofollow" dir="ltr" class="yt-uix-redirect-link">' +
                truncateString(
                  decodeURIComponent(
                    ytdata.contents.twoColumnWatchNextResults.results.results.contents
                      .find(isVideoSecInfo)
                      .videoSecondaryInfoRenderer.description.runs[
                        i
                      ].navigationEndpoint.urlEndpoint.url.split("&q=")[1]
                  ),
                  37
                ) +
                "</a>")
            : (t +=
                '<a href="' +
                decodeURIComponent(
                  ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(
                    isVideoSecInfo
                  ).videoSecondaryInfoRenderer.description.runs[i]
                    .navigationEndpoint.urlEndpoint.url
                ) +
                '" target="_blank" title="' +
                decodeURIComponent(
                  ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(
                    isVideoSecInfo
                  ).videoSecondaryInfoRenderer.description.runs[i]
                    .navigationEndpoint.urlEndpoint.url
                ) +
                '" rel="nofollow" dir="ltr" class="yt-uix-redirect-link">' +
                truncateString(
                  decodeURIComponent(
                    ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(
                      isVideoSecInfo
                    ).videoSecondaryInfoRenderer.description.runs[i]
                      .navigationEndpoint.urlEndpoint.url
                  ),
                  37
                ) +
                "</a>")
          : void 0 !==
              ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(
                isVideoSecInfo
              ).videoSecondaryInfoRenderer.description.runs[i].text &&
            (t +=
              ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(
                isVideoSecInfo
              ).videoSecondaryInfoRenderer.description.runs[i].text);
      } catch (t) {}
  return (t = t.replace(/\n/g, "<br>"));
}

function craftRecoms(t) {
  var e;
  t = "";
  var n = "",
    a = "";
  (window.location.href.includes("&autoplay=1") || 1 == isusingautoplay) &&
    ((n =
      '<div class="watch-sidebar-section autoplay">\n    <h4 class="watch-sidebar-head">\n        ' +
      v3.UIMSG[v3.nationIndex].SIDEBAR_TITLE_AUTOPLAY +
      '\n    </h4>\n      <div class="watch-sidebar-body">\n    <ul class="video-list">'),
    (a = "\n    </ul>\n  </div>\n\n\n  </div>"));

  try {
    for (
      e =
        void 0 !==
        ytdata.contents.twoColumnWatchNextResults.secondaryResults
          .secondaryResults.results[1].itemSectionRenderer
          ? ytdata.contents.twoColumnWatchNextResults.secondaryResults
              .secondaryResults.results[1].itemSectionRenderer.contents
          : ytdata.contents.twoColumnWatchNextResults.secondaryResults
              .secondaryResults.results,
        i = 0,
        j = e.length;
      i < j;
      i++
    ) {
      var o = "",
        r = "";

      try {
        r = e[i].compactVideoRenderer.lengthText.simpleText;
      } catch (t) {}

      0 != i ||
        window.location.href.includes("&autoplay=1") ||
        0 != isusingautoplay ||
        v3.htmlBuilderConfig.core.NIRVANA ||
        ((e[i].compactVideoRenderer.viewCountText.simpleText =
          e[i].compactVideoRenderer.viewCountText.simpleText.split(" ")[0]),
        (o =
          '<span class="stat alt badge">  <span class="yt-badge ">' +
          v3.UIMSG[v3.nationIndex].RENDERER_TAG_FEATURED +
          "</span>\n\t\t\t\t</span>"));

      try {
        "Funketon" == e[i].compactVideoRenderer.shortBylineText.runs[0].text &&
          (e[i].compactVideoRenderer.shortBylineText.runs[0].text =
            "djtomproductions"),
          void 0 !== e[i].compactVideoRenderer &&
            ((0 == i && window.location.href.includes("&autoplay=1")) ||
            (0 == i && 1 == isusingautoplay)
              ? (n +=
                  '<li class="video-list-item related-list-item"><a href="/watch' +
                  e[
                    i
                  ].compactVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
                    "/watch"
                  )[1] +
                  '&autoplay=1" class="related-video yt-uix-contextlink  yt-uix-sessionlink" data-sessionlink=""><span class="ux-thumb-wrap contains-addto ">    <span class="video-thumb  yt-thumb yt-thumb-120">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img alt="" data-thumb="' +
                  e[i].compactVideoRenderer.thumbnail.thumbnails[0].url +
                  '" src="' +
                  e[i].compactVideoRenderer.thumbnail.thumbnails[0].url +
                  '" width="120" data-group-key="thumb-group-0">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
                  r +
                  '</span>\n\n  <button class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" title="' +
                  v3.UIMSG[v3.nationIndex].GUIDE_WL +
                  '" type="button" onclick=";return false;" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
                  e[i].compactVideoRenderer.videoId +
                  '" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="' +
                  v3.UIMSG[v3.nationIndex].GUIDE_WL +
                  '">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</span><span dir="ltr" class="title" title="' +
                  e[i].compactVideoRenderer.title.simpleText +
                  '">' +
                  e[i].compactVideoRenderer.title.simpleText +
                  '</span><span class="stat attribution"><span class="g-hovercard" data-ytid="" data-name="watch-vrec">' +
                  v3.UIMSG[v3.nationIndex].C3_BYUSER +
                  '<b><span class="g-hovercard" data-ytid="">' +
                  e[i].compactVideoRenderer.shortBylineText.runs[0].text +
                  '</span></b></span></span><span class="stat view-count">' +
                  e[i].compactVideoRenderer.viewCountText.simpleText +
                  '</span><span class="stat upload-day">' +
                  e[i].compactVideoRenderer.publishedTimeText.simpleText +
                  "</span></a></li>")
              : (t +=
                  '<li class="video-list-item related-list-item"><a href="/watch' +
                  e[
                    i
                  ].compactVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
                    "/watch"
                  )[1] +
                  '" class="related-video yt-uix-contextlink  yt-uix-sessionlink" data-sessionlink=""><span class="ux-thumb-wrap contains-addto ">    <span class="video-thumb  yt-thumb yt-thumb-120">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img alt="" data-thumb="' +
                  e[i].compactVideoRenderer.thumbnail.thumbnails[0].url +
                  '" src="' +
                  e[i].compactVideoRenderer.thumbnail.thumbnails[0].url +
                  '" width="120" data-group-key="thumb-group-0">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
                  r +
                  '</span>\n\n  <button class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" title="' +
                  v3.UIMSG[v3.nationIndex].GUIDE_WL +
                  '" type="button" onclick=";return false;" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
                  e[i].compactVideoRenderer.videoId +
                  '" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="' +
                  v3.UIMSG[v3.nationIndex].GUIDE_WL +
                  '">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</span><span dir="ltr" class="title" title="' +
                  e[i].compactVideoRenderer.title.simpleText +
                  '">' +
                  e[i].compactVideoRenderer.title.simpleText +
                  '</span><span class="stat attribution"><span class="g-hovercard" data-ytid="" data-name="watch-vrec">' +
                  v3.UIMSG[v3.nationIndex].C3_BYUSER +
                  '<b><span class="g-hovercard" data-ytid="">' +
                  e[i].compactVideoRenderer.shortBylineText.runs[0].text +
                  "</span></b></span></span>" +
                  o +
                  '<span class="stat view-count">' +
                  e[i].compactVideoRenderer.viewCountText.simpleText +
                  '</span><span class="stat upload-day">' +
                  e[i].compactVideoRenderer.publishedTimeText.simpleText +
                  "</span></a></li>"));
      } catch (t) {}
    }
  } catch (t) {}

  return (
    (window.location.href.includes("&autoplay=1") || 1 == isusingautoplay) &&
      (document
        .querySelector("#watch-channel-brand-div")
        .insertAdjacentHTML("afterend", n + a),
      document
        .querySelector(".watch-sidebar-section.normal .watch-sidebar-body")
        .insertAdjacentHTML(
          "afterbegin",
          '<h4 class="watch-sidebar-head">\n        ' +
            v3.UIMSG[v3.nationIndex].SIDEBAR_TITLE_DEFAULT +
            "\n      </h4>"
        )),
    t
  );
}

function isCommentDelete(t) {
  try {
    return "DELETE" == t.menuNavigationItemRenderer.icon.iconType;
  } catch (t) {
    return !1;
  }
}

function isCommentEdit(t) {
  try {
    return "EDIT" == t.menuNavigationItemRenderer.icon.iconType;
  } catch (t) {
    return !1;
  }
}

function craftComments(t, e) {
  try {
    var n = t,
      a = "";

    try {
      var o =
        n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
          .continuationItems.length;
      21 == o && (o = 20);
    } catch (t) {}

    for (i = 0, j = o; i < j; i++)
      if (
        void 0 !==
        n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
          .continuationItems[i].commentThreadRenderer
      ) {
        var r =
            '<span class="comments-rating-positive" title="">\n        \n\t\t\t</span>',
          s = "",
          c = "",
          l = "",
          d = "",
          u = "";
        n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
          .continuationItems[i].commentThreadRenderer.comment.commentRenderer
          .authorCommentBadge &&
          n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
            .continuationItems[i].commentThreadRenderer.comment.commentRenderer
            .authorCommentBadge.authorCommentBadgeRenderer.iconTooltip &&
          (u =
            '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name" data-tooltip-text="Verified name">\n  </span>');

        try {
          n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand.continuationItems[
            i
          ].commentThreadRenderer.comment.commentRenderer.actionMenu.menuRenderer.items.find(
            isCommentEdit
          ).menuNavigationItemRenderer.navigationEndpoint
            .updateCommentDialogEndpoint.dialog.commentDialogRenderer
            .submitButton.buttonRenderer.serviceEndpoint.updateCommentEndpoint
            .updateCommentParams &&
            (d =
              n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand.continuationItems[
                i
              ].commentThreadRenderer.comment.commentRenderer.actionMenu.menuRenderer.items.find(
                isCommentEdit
              ).menuNavigationItemRenderer.navigationEndpoint
                .updateCommentDialogEndpoint.dialog.commentDialogRenderer
                .submitButton.buttonRenderer.serviceEndpoint
                .updateCommentEndpoint.updateCommentParams);
        } catch (t) {}

        try {
          1 ==
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.viewerIsAuthor &&
            (l =
              n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand.continuationItems[
                i
              ].commentThreadRenderer.comment.commentRenderer.actionMenu.menuRenderer.items.find(
                isCommentDelete
              ).menuNavigationItemRenderer.navigationEndpoint
                .confirmDialogEndpoint.content.confirmDialogRenderer
                .confirmButton.buttonRenderer.serviceEndpoint
                .performCommentActionEndpoint.action);
        } catch (t) {}

        try {
          1 ==
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.actionButtons.commentActionButtonsRenderer
              .likeButton.toggleButtonRenderer.isToggled && (c = " voted-up");
        } catch (t) {}

        try {
          1 ==
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.actionButtons.commentActionButtonsRenderer
              .dislikeButton.toggleButtonRenderer.isToggled &&
            (c = " voted-down");
        } catch (t) {}

        if (
          void 0 !==
          n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
            .continuationItems[i].commentThreadRenderer.comment.commentRenderer
            .contentText.runs
        )
          if (
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.contentText.runs.length > 1
          )
            for (
              x = 0,
                y =
                  n.onResponseReceivedEndpoints[1]
                    .reloadContinuationItemsCommand.continuationItems[i]
                    .commentThreadRenderer.comment.commentRenderer.contentText
                    .runs.length;
              x < y;
              x++
            )
              "\n" ==
              n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
                .continuationItems[i].commentThreadRenderer.comment
                .commentRenderer.contentText.runs[x].text
                ? (s += "<br>")
                : (s +=
                    n.onResponseReceivedEndpoints[1]
                      .reloadContinuationItemsCommand.continuationItems[i]
                      .commentThreadRenderer.comment.commentRenderer.contentText
                      .runs[x].text);
          else
            s +=
              n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
                .continuationItems[i].commentThreadRenderer.comment
                .commentRenderer.contentText.runs[0].text;
        var m = "";

        try {
          void 0 !==
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.replyCount &&
            (m =
              '<button class="comment-action yt-uix-button yt-uix-button-link" type="button" onclick=";return false;" data-action="reply" role="button" data-load-ajax-id="' +
              n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
                .continuationItems[i].commentThreadRenderer.replies
                .commentRepliesRenderer.contents[0].continuationItemRenderer
                .continuationEndpoint.continuationCommand.token +
              '">    <span class="yt-uix-button-content">\nReplies: ' +
              n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
                .continuationItems[i].commentThreadRenderer.comment
                .commentRenderer.replyCount +
              "\n    </span>\n</button>");
        } catch (t) {}

        try {
          null !=
            typeof n.onResponseReceivedEndpoints[1]
              .reloadContinuationItemsCommand.continuationItems[i]
              .commentThreadRenderer.comment.commentRenderer.voteCount &&
            (r =
              '<span class="comments-rating-positive" title="' +
              n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
                .continuationItems[i].commentThreadRenderer.comment
                .commentRenderer.voteCount.accessibility.accessibilityData
                .label +
              '">\n        ' +
              n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand.continuationItems[
                i
              ].commentThreadRenderer.comment.commentRenderer.actionButtons.commentActionButtonsRenderer.likeButton.toggleButtonRenderer.accessibilityData.accessibilityData.label
                .replace(/[^0-9.]/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              "\n\t\t\t</span>");
        } catch (t) {}

        var p = "";

        try {
          p =
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.actionButtons.commentActionButtonsRenderer
              .replyButton.buttonRenderer.navigationEndpoint
              .createCommentReplyDialogEndpoint.dialog
              .commentReplyDialogRenderer.replyButton.buttonRenderer
              .serviceEndpoint.createCommentReplyEndpoint.createReplyParams;
        } catch (t) {}

        var b = "";
        (1 == authinfo.LOGGED_IN || getCookie("vtfia")) &&
          (b =
            ' data-like-ajax-id="' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.actionButtons.commentActionButtonsRenderer
              .likeButton.toggleButtonRenderer.defaultServiceEndpoint
              .performCommentActionEndpoint.action +
            '" data-unlike-ajax-id="' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.actionButtons.commentActionButtonsRenderer
              .likeButton.toggleButtonRenderer.toggledServiceEndpoint
              .performCommentActionEndpoint.action +
            '" data-dislike-ajax-id="' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.actionButtons.commentActionButtonsRenderer
              .dislikeButton.toggleButtonRenderer.defaultServiceEndpoint
              .performCommentActionEndpoint.action +
            '" data-undislike-ajax-id="' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.actionButtons.commentActionButtonsRenderer
              .dislikeButton.toggleButtonRenderer.toggledServiceEndpoint
              .performCommentActionEndpoint.action +
            '" data-post-reply-ajax-id="' +
            p +
            '"');
        var h =
          '<li class="comment-action" data-action="flag-profile-pic"><span class="yt-uix-button-menu-item">Hide comment</span></li>';
        "" != l &&
          ((b += ' data-delete-ajax="' + l + '"'),
          (h =
            '<li class="comment-action v3-delete-comment" data-action="v3-delete-comment"><span class="yt-uix-button-menu-item">Delete</span></li>')),
          "" != d &&
            ((b += ' data-edit-ajax="' + d + '"'),
            (h +=
              '<li class="comment-action v3-edit-comment" data-action="v3-edit-comment"><span class="yt-uix-button-menu-item">Edit</span></li>')),
          (a +=
            '<li class="comment" data-author-id="' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.authorEndpoint.browseEndpoint.browseId +
            '" data-id="' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.commentId +
            '"' +
            b +
            '>\n    <button class="flip close yt-uix-button yt-uix-button-link yt-uix-button-empty" type="button" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant="">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-comment-close" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n<img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><div class=" yt-uix-button-menu yt-uix-button-menu-link" style="display: none;"><ul>' +
            h +
            '</ul></div></button>\n      <a href="' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.authorEndpoint.browseEndpoint.canonicalBaseUrl +
            '" class="yt-user-photo ">    <span class="video-thumb  yt-thumb yt-thumb-48">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.authorThumbnail.thumbnails[0].url +
            '" alt="' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.authorText.simpleText +
            '" width="48" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a>\n\n    \n\n  <div class="content">\n      <p class="metadata">\n        <span class="author ">\n          <a href="' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.authorEndpoint.browseEndpoint.canonicalBaseUrl +
            '" class="yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr">' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.authorText.simpleText +
            "</a>" +
            u +
            '\n        </span>\n          <span class="time" dir="ltr">\n            <a dir="ltr" href="/comment?lc=' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.commentId +
            '">\n              ' +
            n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.publishedTimeText.runs[0].text +
            '\n            </a>\n          </span>\n      </p>\n\n\n      <div class="comment-text" dir="ltr">\n        <p>' +
            s +
            '</p>\n\n      </div>\n      \n  <div class="comment-actions">\n    <button class="start comment-action yt-uix-button yt-uix-button-link" type="button" onclick=";return false;" data-action="reply" role="button">    <span class="yt-uix-button-content">\nReply \n    </span>\n</button>\n    <span class="separator">·</span>' +
            r +
            '\n\n\n    <span class="yt-uix-clickcard"><button class="start comment-action-vote-up comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty' +
            c +
            '" type="button" onclick=";return false;" title="" data-action="" data-tooltip-show-delay="300" role="button">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n</button>  <div class="watch7-hovercard yt-uix-clickcard-content">\n    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>\n    <div class="watch7-hovercard-message">\n      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">Shok Hovhannisyan</span>\'s comment.\n\n    </div>\n    <ul class="watch7-hovercard-icon-strip clearfix">\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-youtube-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gplus-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gmail-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-picasa-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-chrome-icon"></div>\n      </li>\n    </ul>\n    <div class="watch7-hovercard-account-line">\n      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;hl=en_US&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D9bZkp7q19f0%26nomobiletemp%3D1" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary" data-sessionlink="ei=jAXSUYa8KYHXkAKH2oDoBg"><span class="yt-uix-button-content">Sign in</span></a>\n    </div>\n  </div>\n</span><span class="yt-uix-clickcard"><button class="end comment-action-vote-down comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" type="button" onclick=";return false;" title="" data-action="" data-tooltip-show-delay="300" role="button">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n</button>  <div class="watch7-hovercard yt-uix-clickcard-content">\n    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>\n    <div class="watch7-hovercard-message">\n      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">Shok Hovhannisyan</span>\'s comment.\n\n    </div>\n    <ul class="watch7-hovercard-icon-strip clearfix">\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-youtube-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gplus-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gmail-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-picasa-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-chrome-icon"></div>\n      </li>\n    </ul>\n    <div class="watch7-hovercard-account-line">\n      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;hl=en_US&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D9bZkp7q19f0%26nomobiletemp%3D1" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary" data-sessionlink="ei=jAXSUYa8KYHXkAKH2oDoBg"><span class="yt-uix-button-content">Sign in</span></a>\n    </div>\n  </div>\n</span>' +
            m +
            "\n  </div>\n\n  </div>\n\n\n  </li>"),
          countloadcomments++;
      }

    var g = "";

    try {
      var v = "Relevance",
        f = "time";
      t.onResponseReceivedEndpoints[0].reloadContinuationItemsCommand.continuationItems[0].commentsHeaderRenderer.sortMenu.sortFilterSubMenuRenderer.subMenuItems.findIndex(
        (t) => !!t.selected
      ) && ((v = "Time"), (f = "relevance")),
        (g =
          '<div id="watch-response-content-sort">\n        <button class="yt-uix-button yt-uix-button-default yt-uix-button-size-default" type="button" onclick=";return false;" data-button-menu-id="watch-response-sort-menu" role="button" aria-pressed="false" aria-expanded="false">    <span class="yt-uix-button-content">\nSort by: <span>' +
          v +
          '</span>\n \n    </span>\n<img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n          \n\n      <ul class="yt-uix-button-menu yt-uix-button-menu-default yt-uix-button-menu-external hid" id="watch-response-sort-menu" style="min-width: 103px; left: 236px; top: 199px; display: none;">\n    <li role="menuitem"><div class="yt-uix-button-menu-item sort-by-other-option" data-ajax-id="' +
          t.onResponseReceivedEndpoints[0].reloadContinuationItemsCommand.continuationItems[0].commentsHeaderRenderer.sortMenu.sortFilterSubMenuRenderer.subMenuItems.find(
            (t) => !t.selected
          ).serviceEndpoint.continuationCommand.token +
          '">Sort by ' +
          f +
          "</a></li>\n  </ul></div>");
    } catch (t) {
      console.log(t);
    }

    async function w() {
      document
        .querySelector("#watch-discussion .action-panel-loading")
        .setAttribute("class", "action-panel-loading hid"),
        (document.querySelector("#comments-view").innerHTML = ""),
        document.querySelector(".comments-pagination") &&
          document.querySelector(".comments-pagination").remove(),
        document
          .querySelector("#comments-view")
          .insertAdjacentHTML("beforeend", commenthtml);

      try {
        void 0 !==
          n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand.continuationItems.find(
            hasContinuation
          ) &&
          ((document.querySelector("#watch-discussion").innerHTML +=
            '<div class="comments-pagination" data-ajax-enabled="true">\n        <button type="button" class="yt-uix-pager-button yt-uix-pager-show-more yt-uix-button yt-uix-button-default" onclick=";return false;" role="button"><span class="yt-uix-button-content">Show more </span></button>\n    </div>'),
          (document.querySelector(".comments-pagination").innerHTML +=
            '<p class="yt-spinner hid">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>'),
          (document.querySelector("button.yt-uix-pager-button").onclick =
            function () {
              document
                .querySelector(".comments-pagination .yt-spinner")
                .classList.remove("hid"),
                getMoreAjax(
                  n.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand.continuationItems.find(
                    hasContinuation
                  ).continuationItemRenderer.continuationEndpoint
                    .continuationCommand.token,
                  2
                ),
                document.querySelector("button.yt-uix-pager-button").remove();
            }));
      } catch (t) {
        useverbose && console.log(t),
          (v3.loggerDialog += t + " (at line " + ln() + " in watch.js)\n");
      }

      if (
        (1 != authinfo.LOGGED_IN || v3commentfrienda || v3commentfriend(),
        v3commentfriend2(),
        1 == authinfo.LOGGED_IN)
      ) {
        document.querySelector(".comments-post-alert").outerHTML =
          '<form class="comments-post" method="post" action="/comment_servlet?add_comment=1">\n    <div class="yt-alert yt-alert-default yt-alert-error hid comments-post-message">  <div class="yt-alert-icon">\n    <img src="' +
          userpicture +
          '" class="icon master-sprite" alt="">\n  </div>\n<div class="yt-alert-buttons"></div><div class="yt-alert-content" role="alert"></div></div>\n\n    <input name="session_token" value="" type="hidden">\n    <input name="video_id" value="" type="hidden">\n\n\n    <input name="form_id" value="" type="hidden">\n    <input name="source" value="w" type="hidden">\n    <input value="" name="reply_parent_id" type="hidden">\n\n<a href="https://www.youtube.com/profile" class="yt-user-photo ">    <span class="video-thumb  yt-thumb yt-thumb-48">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
          userpicture +
          '" alt="" width="48">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a><div class="comments-textarea-container " onclick=""><img src="' +
          userpicture +
          '" alt="" class="comments-textarea-tip"><label class="comments-textarea-label" data-upsell="comment"></label><textarea id="" class="yt-uix-form-input-textarea comments-textarea" placeholder="Share your thoughts" onfocus="" data-upsell="comment" name="comment"></textarea></div>\n    <p class="comments-post-buttons needs-focus">\n<span class="comments-post-video-response-link"><a href="https://www.youtube.com/video_response_upload">Create a video response</a>&nbsp;or&nbsp;</span><button type="submit" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default" onclick=";return false;" role="button">    <span class="yt-uix-button-content">\nPost \n    </span>\n</button>    </p>\n\n    <p class="comments-remaining needs-focus" data-max-count="500">\n    </p>\n    <p class="comments-threshold-countdown hid">\n    </p>\n  </form>';
        var t = "";
        document
          .querySelector(".comments-textarea-container textarea")
          .addEventListener("input", function (e) {
            t = e.target.value;
          }),
          (document.querySelector(
            ".comments-textarea-container textarea"
          ).onfocus = function (t) {
            document
              .querySelector(".comments-post-buttons")
              .classList.remove("needs-focus"),
              document
                .querySelector(".comments-post-buttons")
                .classList.add("has-focus");
          }),
          (document.querySelector(
            ".comments-textarea-container textarea"
          ).onblur = function (e) {
            "" == t &&
              (document
                .querySelector(".comments-post-buttons")
                .classList.add("needs-focus"),
              document
                .querySelector(".comments-post-buttons")
                .classList.remove("has-focus"));
          }),
          (document.querySelector(
            ".comments-post-buttons > button[type=submit]"
          ).onclick = function () {
            (createCommentParams =
              n.onResponseReceivedEndpoints[0].reloadContinuationItemsCommand
                .continuationItems[0].commentsHeaderRenderer.createRenderer
                .commentSimpleboxRenderer.submitButton.buttonRenderer
                .serviceEndpoint.createCommentEndpoint.createCommentParams),
              "" != t && postComment(t);
          });
      }

      document.querySelector("#watch-response-content-sort") &&
        $(document).on("click", ".sort-by-other-option", function (t) {
          (commentcontinuation = t.currentTarget.getAttribute("data-ajax-id")),
            (document.querySelector("#watch-discussion").innerHTML = ""),
            (document.querySelector("#watch-discussion").innerHTML =
              ' <div class="action-panel-loading">\n        <p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n    </div><div id="comments-view"></div>'),
            fuckAsync();
        });
    }

    (commenthtml =
      '<div onmouseover="if (yt.www &amp;&amp; yt.www.watch &amp;&amp; yt.www.watch.livecomments) yt.www.watch.livecomments.handleCommentMouseEvent(this, event);" onmouseout="if (yt.www &amp;&amp; yt.www.watch &amp;&amp; yt.www.watch.livecomments) yt.www.watch.livecomments.handleCommentMouseEvent(this, event);">\n      <h4>\n      <a href="/all_comments?v=' +
      window.location.href.split("?v=")[1].split("&")[0] +
      '">\n            <strong>All Comments</strong> (' +
      n.onResponseReceivedEndpoints[0].reloadContinuationItemsCommand
        .continuationItems[0].commentsHeaderRenderer.countText.runs[0].text +
      ')\n\n      </a>\n  </h4>\n\n\n          <div class="comments-post-alert comments-post">\n        <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;hl=en_US&amp;passive=true&amp;service=youtube&amp;continue=https%3A%2F%2Fwww.youtube.com">Sign in</a> now to post a comment!\n\n      </div>' +
      g +
      '\n\n\n        <div id="live-comments-setting-scroll" class="live-comments-setting hid">\n    <span id="live-comments-count"></span>\n    <a onclick="yt.www.watch.livecomments.setScroll(true); return false;">Update automatically</a>\n  </div>\n  <div id="live-comments-setting-no-scroll" class="live-comments-setting hid">\n    <a onclick="yt.www.watch.livecomments.setScroll(false); return false;">Disable automatic updates</a>\n  </div>\n\n      <ul id="all-comments">\n      \n\n\n  ' +
      a +
      "\n  </ul>\n\n  </div>"),
      e
        ? waitForElm2("#comments-view.spf" + e).then(function (t) {
            w();
          })
        : waitForElm2("#comments-view").then(function (t) {
            w();
          });
  } catch (t) {
    useverbose && console.log(t),
      (v3.loggerDialog += t + " (at line " + ln() + " in watch.js)\n");
  }
}

async function postComment(t) {
  var e =
    '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
    authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
    '",\r\n\t\t\t"hl": "' +
    authinfo.HL +
    '"\r\n\t\t}\r\n\t},\r\n\t"createCommentParams":"' +
    createCommentParams +
    '","commentText":"' +
    t +
    '",\r\n}\r\n';
  await v3.innerTube
    .AJAX(
      "comment/create_comment?",
      e,
      "1",
      authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
    )
    .then((t) => {
      if ("STATUS_SUCCEEDED" == t.actionResult.status) {
        var e =
          '<li class="comment" data-author-id="' +
          t.actions[1].createCommentAction.contents.commentThreadRenderer
            .comment.commentRenderer.authorEndpoint.browseEndpoint.browseId +
          '" data-id="' +
          t.actions[1].createCommentAction.contents.commentThreadRenderer
            .comment.commentRenderer.commentId +
          '" data-like-ajax-id="' +
          t.actions[1].createCommentAction.contents.commentThreadRenderer
            .comment.commentRenderer.actionButtons.commentActionButtonsRenderer
            .likeButton.toggleButtonRenderer.defaultServiceEndpoint
            .performCommentActionEndpoint.action +
          '" data-unlike-ajax-id="' +
          t.actions[1].createCommentAction.contents.commentThreadRenderer
            .comment.commentRenderer.actionButtons.commentActionButtonsRenderer
            .likeButton.toggleButtonRenderer.toggledServiceEndpoint
            .performCommentActionEndpoint.action +
          '" data-dislike-ajax-id="" data-undislike-ajax-id="">\n    <button class="flip close yt-uix-button yt-uix-button-link yt-uix-button-empty" type="button" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant="">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-comment-close" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n<img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><div class=" yt-uix-button-menu yt-uix-button-menu-link" style="display: none;"><ul><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag-profile-pic"><span class="yt-uix-button-menu-item">Report profile image</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button>\n      <a href="/channel/' +
          t.actions[1].createCommentAction.contents.commentThreadRenderer
            .comment.commentRenderer.authorEndpoint.browseEndpoint.browseId +
          '" class="yt-user-photo ">    <span class="video-thumb  yt-thumb yt-thumb-48">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
          t.actions[1].createCommentAction.contents.commentThreadRenderer
            .comment.commentRenderer.authorThumbnail.thumbnails[0].url +
          '" alt="' +
          t.actions[1].createCommentAction.contents.commentThreadRenderer
            .comment.commentRenderer.authorText.simpleText +
          '" width="48" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a>\n\n    \n\n  <div class="content">\n      <p class="metadata">\n        <span class="author ">\n          <a href="/channel/' +
          t.actions[1].createCommentAction.contents.commentThreadRenderer
            .comment.commentRenderer.authorEndpoint.browseEndpoint.browseId +
          '" class="yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr">' +
          t.actions[1].createCommentAction.contents.commentThreadRenderer
            .comment.commentRenderer.authorText.simpleText +
          '</a>\n        </span>\n          <span class="time" dir="ltr">\n            <a dir="ltr" href="/comment?lc=' +
          t.actions[1].createCommentAction.contents.commentThreadRenderer
            .comment.commentRenderer.commentId +
          '">\n              ' +
          t.actions[1].createCommentAction.contents.commentThreadRenderer
            .comment.commentRenderer.publishedTimeText.runs[0].text +
          '\n            </a>\n          </span>\n      </p>\n\n\n      <div class="comment-text" dir="ltr">\n        <p>' +
          t.actions[1].createCommentAction.contents.commentThreadRenderer
            .comment.commentRenderer.contentText.runs[0].text +
          '</p>\n\n      </div>\n      \n  <div class="comment-actions">\n    <button class="start comment-action yt-uix-button yt-uix-button-link" type="button" onclick=";return false;" data-action="reply" role="button">    <span class="yt-uix-button-content">\nReply \n    </span>\n</button>\n    <span class="separator">·</span>\n\n\n    <span class="yt-uix-clickcard"><button class="start comment-action-vote-up comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" type="button" onclick=";return false;" title="" data-action="" data-tooltip-show-delay="300" role="button">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n</button>  <div class="watch7-hovercard yt-uix-clickcard-content">\n    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>\n    <div class="watch7-hovercard-message">\n      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">Shok Hovhannisyan</span>\'s comment.\n\n    </div>\n    <ul class="watch7-hovercard-icon-strip clearfix">\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-youtube-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gplus-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gmail-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-picasa-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-chrome-icon"></div>\n      </li>\n    </ul>\n    <div class="watch7-hovercard-account-line">\n      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;hl=en_US&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D9bZkp7q19f0%26nomobiletemp%3D1" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary" data-sessionlink="ei=jAXSUYa8KYHXkAKH2oDoBg"><span class="yt-uix-button-content">Sign in</span></a>\n    </div>\n  </div>\n</span><span class="yt-uix-clickcard"><button class="end comment-action-vote-down comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" type="button" onclick=";return false;" title="" data-action="" data-tooltip-show-delay="300" role="button">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n</button>  <div class="watch7-hovercard yt-uix-clickcard-content">\n    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>\n    <div class="watch7-hovercard-message">\n      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">Shok Hovhannisyan</span>\'s comment.\n\n    </div>\n    <ul class="watch7-hovercard-icon-strip clearfix">\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-youtube-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gplus-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gmail-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-picasa-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-chrome-icon"></div>\n      </li>\n    </ul>\n    <div class="watch7-hovercard-account-line">\n      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;hl=en_US&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D9bZkp7q19f0%26nomobiletemp%3D1" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary" data-sessionlink="ei=jAXSUYa8KYHXkAKH2oDoBg"><span class="yt-uix-button-content">Sign in</span></a>\n    </div>\n  </div>\n</span>\n  </div>\n\n  </div>\n\n\n  </li>';
        document
          .querySelector("#all-comments")
          .insertAdjacentHTML("afterbegin", e),
          (document.querySelector(
            ".comments-textarea-container textarea"
          ).value = ""),
          document
            .querySelector(".comments-textarea-container textarea")
            .blur();
      }
    });
}

v3.watch.parseYtData = function (t) {
  try {
    !t.contents.twoColumnWatchNextResults.playlist &&
      window.location.href.includes("&list") &&
      (window.location = window.location.href.replace(
        "&list=" + window.location.href.split("&list=")[1].split("&")[0],
        ""
      ));
  } catch (t) {}

  try {
    (mainvideoinfo =
      t.contents.twoColumnWatchNextResults.results.results.contents.find(
        isVideoMainInfo
      )),
      (secondaryvideoinfo =
        t.contents.twoColumnWatchNextResults.results.results.contents.find(
          isVideoSecInfo
        )),
      (commentvideoinfo =
        t.contents.twoColumnWatchNextResults.results.results.contents.find(
          isVideoComments
        ));
  } catch (t) {
    useverbose &&
      console.log(
        "%c[v3experimentalcore]\n\n",
        "color: #8A2BE2",
        "FATAL ERROR: cound not load video info"
      );
  }

  try {
    islivestream =
      void 0 !==
      mainvideoinfo.videoPrimaryInfoRenderer.viewCount.videoViewCountRenderer
        .isLive;
  } catch (t) {
    useverbose && console.log(t),
      (v3.loggerDialog += t + " (at line " + ln() + " in watch.js)\n");
  }

  try {
    void 0 !== mainvideoinfo.videoPrimaryInfoRenderer.superTitleLink.runs &&
      mainvideoinfo.videoPrimaryInfoRenderer.superTitleLink.runs[0].text
        .toLowerCase()
        .includes("trending") &&
      (trendinginfo = capitalizeTheFirstLetterOfEachWord(
        mainvideoinfo.videoPrimaryInfoRenderer.superTitleLink.runs[0].text
      ));
  } catch (t) {}

  useverbose &&
    console.log(
      "%c[v3experimentalcore]\n\n",
      "color: #8A2BE2",
      "Trending state of video is: " + trendinginfo
    );

  try {
    (metagameinfo =
      secondaryvideoinfo.videoSecondaryInfoRenderer.metadataRowContainer.metadataRowContainerRenderer.rows[0].richMetadataRowRenderer.contents.find(
        isMetaGameInfo
      ).richMetadataRenderer),
      ((metagame = {}).year = "(" + metagameinfo.subtitle.simpleText + ")"),
      (metagame.name = metagameinfo.title.simpleText),
      (metagame.avatar = metagameinfo.thumbnail.thumbnails[0].url),
      (metagame.nav = "Explore in YouTube Gaming"),
      (metagame.navhref =
        metagameinfo.endpoint.commandMetadata.webCommandMetadata.url);
  } catch (t) {}

  (isusingplaylist = !!window.location.href.includes("&list=")),
    (videoisunlisted = !1),
    (videoisprivate = !1);

  try {
    void 0 !== mainvideoinfo.videoPrimaryInfoRenderer.badges &&
      ("PRIVACY_UNLISTED" ==
        mainvideoinfo.videoPrimaryInfoRenderer.badges[0].metadataBadgeRenderer
          .icon.iconType && (videoisunlisted = !0),
      "PRIVACY_PRIVATE" ==
        mainvideoinfo.videoPrimaryInfoRenderer.badges[0].metadataBadgeRenderer
          .icon.iconType && (videoisprivate = !0));
  } catch (t) {}

  if (
    (useverbose &&
      console.log(
        "%c[v3experimentalcore]\n\n",
        "color: #8A2BE2",
        "Video is unlisted: " +
          videoisunlisted +
          " and Video is private: " +
          videoisprivate
      ),
    (videoisagerestrict = !1),
    void 0 !== t.contents)
  ) {
    if (
      void 0 !==
      v3TestSyntax(
        "ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(isVideoSecInfo).videoSecondaryInfoRenderer.metadataRowContainer.metadataRowContainerRenderer.rows"
      )
    ) {
      try {
        t.contents.twoColumnWatchNextResults.results.results.contents
          .find(isVideoSecInfo)
          .videoSecondaryInfoRenderer.metadataRowContainer.metadataRowContainerRenderer.rows[0].metadataRowRenderer.contents[0].runs[0].text.includes(
            "Age-restricted"
          ) && (videoisagerestrict = !0);
      } catch (t) {}

      if (
        void 0 !==
        t.contents.twoColumnWatchNextResults.results.results.contents
          .find(isVideoSecInfo)
          .videoSecondaryInfoRenderer.metadataRowContainer.metadataRowContainerRenderer.rows.find(
            isSongName
          )
      ) {
        try {
          metasongname =
            null ==
            t.contents.twoColumnWatchNextResults.results.results.contents
              .find(isVideoSecInfo)
              .videoSecondaryInfoRenderer.metadataRowContainer.metadataRowContainerRenderer.rows.find(
                isSongName
              ).metadataRowRenderer.contents[0].simpleText
              ? t.contents.twoColumnWatchNextResults.results.results.contents
                  .find(isVideoSecInfo)
                  .videoSecondaryInfoRenderer.metadataRowContainer.metadataRowContainerRenderer.rows.find(
                    isSongName
                  ).metadataRowRenderer.contents[0].runs[0].text
              : t.contents.twoColumnWatchNextResults.results.results.contents
                  .find(isVideoSecInfo)
                  .videoSecondaryInfoRenderer.metadataRowContainer.metadataRowContainerRenderer.rows.find(
                    isSongName
                  ).metadataRowRenderer.contents[0].simpleText;
        } catch (t) {}

        try {
          metaartistname =
            null ==
            t.contents.twoColumnWatchNextResults.results.results.contents
              .find(isVideoSecInfo)
              .videoSecondaryInfoRenderer.metadataRowContainer.metadataRowContainerRenderer.rows.find(
                isArtistName
              ).metadataRowRenderer.contents[0].simpleText
              ? t.contents.twoColumnWatchNextResults.results.results.contents
                  .find(isVideoSecInfo)
                  .videoSecondaryInfoRenderer.metadataRowContainer.metadataRowContainerRenderer.rows.find(
                    isArtistName
                  ).metadataRowRenderer.contents[0].runs[0].text
              : t.contents.twoColumnWatchNextResults.results.results.contents
                  .find(isVideoSecInfo)
                  .videoSecondaryInfoRenderer.metadataRowContainer.metadataRowContainerRenderer.rows.find(
                    isArtistName
                  ).metadataRowRenderer.contents[0].simpleText;
        } catch (t) {
          metaartistname = "";
        }
      }
    }

    useverbose &&
      console.log(
        "%c[v3experimentalcore]\n\n",
        "color: #8A2BE2",
        "Video is age restrict: " +
          videoisagerestrict +
          ", Video has song name: " +
          metasongname +
          " and artist name: " +
          metaartistname
      );

    try {
      commentcontinuation =
        commentvideoinfo.itemSectionRenderer.contents[0]
          .continuationItemRenderer.continuationEndpoint.continuationCommand
          .token;
    } catch (t) {
      commentcontinuation = "NO";
    }

    (uploaddate = "Uploaded on Jan 1, 1970"),
      void 0 !==
        v3TestSyntax("mainvideoinfo.videoPrimaryInfoRenderer.dateText") &&
        (uploaddate =
          mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText.includes(
            v3.UIMSG[v3.nationIndex].INNERTUBE_UPLOAD_PREMIERE
          ) ||
          mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText.includes(
            v3.UIMSG[v3.nationIndex].INNERTUBE_UPLOAD_STREAM
          ) ||
          mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText.includes(
            v3.UIMSG[v3.nationIndex].INNERTUBE_UPLOAD_LIVE
          ) ||
          mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText.includes(
            v3.UIMSG[v3.nationIndex].INNERTUBE_UPLOAD_PREMIERE_FUTURE
          )
            ? mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText.includes(
                "Premiered"
              ) &&
              !mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText.includes(
                "ago"
              )
              ? mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText.replace(
                  "Premiered",
                  "Premiered on"
                )
              : mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText
            : 0 == videoisunlisted && 0 == videoisprivate
            ? parseInt(
                mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText.substr(
                  mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText
                    .length - 4
                )
              ) > 2011
              ? v3.UIMSG[v3.nationIndex].UPLOAD_DATE_PUBLISH.replace(
                  "%s",
                  mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText
                )
              : v3.UIMSG[v3.nationIndex].UPLOAD_DATE_LEGACY.replace(
                  "%s",
                  mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText
                )
            : "Uploaded on " +
              mainvideoinfo.videoPrimaryInfoRenderer.dateText.simpleText),
      useverbose &&
        console.log(
          "%c[v3experimentalcore]\n\n",
          "color: #8A2BE2",
          "Upload date is",
          uploaddate
        );

    try {
      "Uploaded on Jan 1, 1970" == uploaddate &&
        (uploaddate =
          "Uploaded on " +
          "NULJanFebMarAprMayJunJulAugSepOctNovDec".match(/.{1,3}/g)[
            parseInt(
              document
                .querySelector("meta[itemprop=datePublished]")
                .content.split("-")[1]
            )
          ] +
          " " +
          parseInt(
            document
              .querySelector("meta[itemprop=datePublished]")
              .content.split("-")[2]
          ) +
          ", " +
          parseInt(
            document
              .querySelector("meta[itemprop=datePublished]")
              .content.split("-")[0]
          ));
    } catch (t) {}

    (isownvideo = !1),
      void 0 !==
        v3TestSyntax(
          "ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(isVideoSecInfo).videoSecondaryInfoRenderer.subscribeButton.buttonRenderer"
        ) &&
        "Edit video" ==
          t.contents.twoColumnWatchNextResults.results.results.contents.find(
            isVideoSecInfo
          ).videoSecondaryInfoRenderer.subscribeButton.buttonRenderer.text
            .simpleText &&
        (isownvideo = !0),
      useverbose &&
        console.log(
          "%c[v3experimentalcore]\n\n",
          "color: #8A2BE2",
          "Is own video: " + isownvideo
        ),
      (viewcount = "");

    try {
      viewcount = isownvideo
        ? mainvideoinfo.videoPrimaryInfoRenderer.viewCount
            .videoViewCountRenderer.viewCount.simpleText
        : mainvideoinfo.videoPrimaryInfoRenderer.viewCount.videoViewCountRenderer.viewCount.simpleText
            .replace(/[^0-9.]/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } catch (t) {
      try {
        viewcount =
          mainvideoinfo.videoPrimaryInfoRenderer.viewCount
            .videoViewCountRenderer.viewCount.runs[0].text +
          " " +
          mainvideoinfo.videoPrimaryInfoRenderer.viewCount
            .videoViewCountRenderer.viewCount.runs[1].text;
      } catch (t) {}
    }

    useverbose &&
      console.log(
        "%c[v3experimentalcore]\n\n",
        "color: #8A2BE2",
        "View count is",
        viewcount
      );

    try {
      viewcount ||
        (viewcount = document
          .querySelector("meta[itemprop=interactionCount]")
          .content.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    } catch (t) {}

    (likecount = ""), (dislikecount = "");

    try {
      likecount =
        mainvideoinfo.videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].toggleButtonRenderer.defaultText.accessibility.accessibilityData.label
          .replace(/[^0-9.]/g, "")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      try {
        dislikecount =
          mainvideoinfo.videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[1].toggleButtonRenderer.defaultText.accessibility.accessibilityData.label
            .replace(/[^0-9.]/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } catch (t) {
        v3HandleBrokenSentimentUpdate();
      }
    } catch (t) {
      console.log("cound not load like count!"),
        console.log(t),
        (v3.loggerDialog += t + " (at line " + ln() + " in watch.js)\n");
    }

    try {
      (sentimentbarprocent =
        mainvideoinfo.videoPrimaryInfoRenderer.sentimentBar.sentimentBarRenderer
          .percentIfIndifferent),
        (sentimentbarprocentlike =
          mainvideoinfo.videoPrimaryInfoRenderer.sentimentBar
            .sentimentBarRenderer.percentIfLiked),
        (sentimentbarprocentdislike =
          mainvideoinfo.videoPrimaryInfoRenderer.sentimentBar
            .sentimentBarRenderer.percentIfDisliked),
        (dislikecount =
          mainvideoinfo.videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[1].toggleButtonRenderer.defaultText.accessibility.accessibilityData.label
            .replace(/[^0-9.]/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
        "" == likecount && (likecount = "0"),
        "" == dislikecount && (dislikecount = "0"),
        useverbose &&
          console.log(
            "%c[v3experimentalcore]\n\n",
            "color: #8A2BE2",
            "Video have sentiment bar procent " +
              sentimentbarprocent +
              "%, Like count is " +
              likecount +
              ", Dislike count is " +
              dislikecount +
              ". You like video: " +
              liketoggled +
              " and You dislike video: " +
              disliketoggled
          ),
        void 0 ===
          mainvideoinfo.videoPrimaryInfoRenderer.viewCount
            .videoViewCountRenderer.isLive &&
          parseInt(likecount.replace(/[^0-9.]/g, "")) >
            parseInt(viewcount.replace(/[^0-9.]/g, "")) &&
          (viewcount = "301+");
    } catch (t) {}

    try {
      forcesentimentbar &&
        !likecount &&
        !dislikecount &&
        authinfo.VIDEO_RATING &&
        ((sentimentbarprocent = Math.round(20 * authinfo.VIDEO_RATING)),
        (sentimentbarprocentlike = Math.round(20 * authinfo.VIDEO_RATING)),
        (sentimentbarprocentdislike = Math.round(20 * authinfo.VIDEO_RATING)));
    } catch (t) {
      useverbose && console.log(t),
        (v3.loggerDialog += t + " (at line " + ln() + " in watch.js)\n");
    }

    void 0 !==
      v3TestSyntax("mainvideoinfo.videoPrimaryInfoRenderer.videoActions") &&
      ((liketoggled =
        mainvideoinfo.videoPrimaryInfoRenderer.videoActions.menuRenderer
          .topLevelButtons[0].toggleButtonRenderer.isToggled),
      (disliketoggled =
        mainvideoinfo.videoPrimaryInfoRenderer.videoActions.menuRenderer
          .topLevelButtons[1].toggleButtonRenderer.isToggled)),
      void 0 !==
        v3TestSyntax(
          "ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(isVideoSecInfo).videoSecondaryInfoRenderer.owner.videoOwnerRenderer"
        ) &&
        ((authorurl =
          t.contents.twoColumnWatchNextResults.results.results.contents.find(
            isVideoSecInfo
          ).videoSecondaryInfoRenderer.owner.videoOwnerRenderer.title.runs[0]
            .navigationEndpoint.browseEndpoint.canonicalBaseUrl),
        (authorpic =
          t.contents.twoColumnWatchNextResults.results.results.contents.find(
            isVideoSecInfo
          ).videoSecondaryInfoRenderer.owner.videoOwnerRenderer.thumbnail
            .thumbnails[0].url));

    try {
      authorpic || (authorpic = "https://yt3.ggpht.com/a/default-user");
    } catch (t) {}

    (subscribecount =
      void 0 ===
      v3TestSyntax(
        "ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(isVideoSecInfo).videoSecondaryInfoRenderer.owner.videoOwnerRenderer.subscriberCountText"
      )
        ? null
        : "en" != v3.nationIndex || v3.warningNationIndex
        ? t.contents.twoColumnWatchNextResults.results.results.contents.find(
            isVideoSecInfo
          ).videoSecondaryInfoRenderer.owner.videoOwnerRenderer
            .subscriberCountText.simpleText
        : t.contents.twoColumnWatchNextResults.results.results.contents
            .find(isVideoSecInfo)
            .videoSecondaryInfoRenderer.owner.videoOwnerRenderer.subscriberCountText.simpleText.split(
              " "
            )[0]),
      (usingvevocover = !1);

    try {
      "VEVO" ==
        (authorname = document
          .querySelector("span[itemprop=author] > link[itemprop=name]")
          .getAttribute("content")).substr(authorname.length - 4) &&
        document.querySelector(".exp-branded-watch-vevo") &&
        !v3.htmlBuilderConfig.core.NIRVANA &&
        ((usingvevocover = !0), document.body.classList.add("vevo"));
    } catch (t) {
      console.log("cound not found author name");
    }

    (authorisverified =
      void 0 !==
      v3TestSyntax(
        "ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(isVideoSecInfo).videoSecondaryInfoRenderer.owner.videoOwnerRenderer.badges"
      )),
      void 0 !==
        v3TestSyntax(
          "ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(isVideoSecInfo).videoSecondaryInfoRenderer.owner.videoOwnerRenderer.subscriptionButton"
        ) &&
        (subscribedtoauthor =
          t.contents.twoColumnWatchNextResults.results.results.contents.find(
            isVideoSecInfo
          ).videoSecondaryInfoRenderer.owner.videoOwnerRenderer
            .subscriptionButton.subscribed),
      useverbose &&
        console.log(
          "%c[v3experimentalcore]\n\n",
          "color: #8A2BE2",
          "Video is uploaded by " +
            authorname +
            ", subscriber count of author is " +
            subscribecount +
            ", Author is verified: " +
            authorisverified +
            " and You are subscribed to author: " +
            subscribedtoauthor
        ),
      "logged_in" == t.responseContext.serviceTrackingParams[1].params[0].key
        ? (isuserloggedin =
            "1" == t.responseContext.serviceTrackingParams[1].params[0].value)
        : "logged_in" ==
            t.responseContext.serviceTrackingParams[1].params[2].key &&
          (isuserloggedin =
            "1" == t.responseContext.serviceTrackingParams[1].params[2].value),
      useverbose &&
        console.log(
          "%c[v3experimentalcore]\n\n",
          "color: #8A2BE2",
          "You are logged in: " + isuserloggedin
        ),
      1 == isuserloggedin

    try {
      null !=
        typeof t.contents.twoColumnWatchNextResults.results.results.contents.find(
          isVideoSecInfo
        ).videoSecondaryInfoRenderer.metadataRowContainer
          .metadataRowContainerRenderer.rows &&
        "License" ==
          t.contents.twoColumnWatchNextResults.results.results.contents.find(
            isVideoSecInfo
          ).videoSecondaryInfoRenderer.metadataRowContainer
            .metadataRowContainerRenderer.rows[0].metadataRowRenderer.title
            .runs[0].text &&
        (licenseused =
          '<a class="yt-uix-sessionlink" href="' +
          t.contents.twoColumnWatchNextResults.results.results.contents.find(
            isVideoSecInfo
          ).videoSecondaryInfoRenderer.metadataRowContainer
            .metadataRowContainerRenderer.rows[0].metadataRowRenderer
            .contents[0].runs[0].navigationEndpoint.commandMetadata
            .webCommandMetadata.url +
          '">' +
          t.contents.twoColumnWatchNextResults.results.results.contents.find(
            isVideoSecInfo
          ).videoSecondaryInfoRenderer.metadataRowContainer
            .metadataRowContainerRenderer.rows[0].metadataRowRenderer
            .contents[0].runs[0].text +
          "</a>");
    } catch (t) {}

    useverbose &&
      console.log(
        "%c[v3experimentalcore]\n\n",
        "color: #8A2BE2",
        "License of video is",
        licenseused
      ),
      void 0 !==
        v3TestSyntax(
          "ytdata.contents.twoColumnWatchNextResults.results.results.contents.find(isVideoSecInfo).videoSecondaryInfoRenderer.owner.videoOwnerRenderer"
        ) &&
        (isauthorverified =
          void 0 !==
          t.contents.twoColumnWatchNextResults.results.results.contents.find(
            isVideoSecInfo
          ).videoSecondaryInfoRenderer.owner.videoOwnerRenderer.badges),
      useverbose &&
        console.log(
          "%c[v3experimentalcore]\n\n",
          "color: #8A2BE2",
          "Author is verified: " + isauthorverified
        );

    try {
      document
        .querySelector("span[itemprop=author] > link[itemprop=url]")
        .href.includes("djtomproductions") &&
        ((authorpic =
          "https://yt3.ggpht.com/-D3FmAqFb5bY/AAAAAAAAAAI/AAAAAAAAAAA/Grw9gmLDr7M/s88-c-k-no/photo.jpg"),
        (authorname = "djtomproductions"));
    } catch (t) {}
  }
};

var v3commentfrienda = !1;

function v3commentfriend() {
  (v3commentfrienda = !0),
    $(document).on("click", ".comment-action-vote-up", function (t) {
      var e =
        t.currentTarget.parentElement.parentElement.parentElement.parentElement;
      t.currentTarget.className.includes("voted-up")
        ? (v3.innerTube.rateComment(e.getAttribute("data-unlike-ajax-id")),
          "NaN" ==
          parseInt(
            e.querySelector(".comments-rating-positive").innerText
          ).toString()
            ? (e.querySelector(".comments-rating-positive").innerText = " ")
            : (e.querySelector(".comments-rating-positive").innerText =
                " " +
                parseInt(
                  parseInt(
                    e
                      .querySelector(".comments-rating-positive")
                      .innerText.replace(/[^0-9.]/g, "")
                  ) - 1
                )
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
          0 == e.querySelector(".comments-rating-positive").innerText &&
            (e.querySelector(".comments-rating-positive").innerText = " "),
          t.currentTarget.classList.remove("voted-up"))
        : (v3.innerTube.rateComment(e.getAttribute("data-like-ajax-id")),
          "NaN" ==
            parseInt(
              e.querySelector(".comments-rating-positive").innerText
            ).toString() &&
            (e.querySelector(".comments-rating-positive").innerText = " 0"),
          1 != e.querySelector(".comments-rating-positive").innerText
            ? (e.querySelector(".comments-rating-positive").innerText =
                " " +
                parseInt(
                  parseInt(
                    e
                      .querySelector(".comments-rating-positive")
                      .innerText.replace(/[^0-9.]/g, "")
                  ) + 1
                )
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            : (e.querySelector(".comments-rating-positive").innerText = " "),
          0 == e.querySelector(".comments-rating-positive").innerText &&
            (e.querySelector(".comments-rating-positive").innerText = " "),
          t.currentTarget.classList.add("voted-up"));
    }),
    $(document).on("click", ".comment-action-vote-down", function (t) {
      alert("Option not yet implemented.");
    }),
    $(document).on(
      "click",
      '.start.comment-action[data-action="reply"]',
      function (t) {
        var e = t.currentTarget.parentElement.parentElement.parentElement;
        if (e.getAttribute("data-post-reply-ajax-id"))
          if (e.querySelector(".reply-post"))
            e.querySelector(".reply-post").remove();
          else {
            var n =
              '<form class="reply-post" method="post" action="/comment_servlet?add_comment=1">\n    <div class="yt-alert yt-alert-default yt-alert-error hid comments-post-message">  <div class="yt-alert-icon">\n    <img src="' +
              userpicture +
              '" class="icon master-sprite" alt="">\n  </div>\n<div class="yt-alert-buttons"></div><div class="yt-alert-content" role="alert"></div></div>\n\n    <input name="session_token" value="" type="hidden">\n    <input name="video_id" value="" type="hidden">\n\n\n    <input name="form_id" value="" type="hidden">\n    <input name="source" value="w" type="hidden">\n    <input value="" name="reply_parent_id" type="hidden">\n\n<a href="https://www.youtube.com/profile" class="yt-user-photo ">    <span class="video-thumb  yt-thumb yt-thumb-48">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
              userpicture +
              '" alt="" width="48">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a><div class="comments-textarea-container " onclick=""><img src="' +
              userpicture +
              '" alt="" class="comments-textarea-tip"><label class="comments-textarea-label" data-upsell="comment"></label><textarea id="" class="yt-uix-form-input-textarea comments-textarea" placeholder="Reply to comment" onfocus="" data-upsell="comment" name="comment"></textarea></div>\n    <p class="comments-post-buttons needs-focus">\n\t<button type="submit" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default cancel-reply" onclick=";return false;" role="button">    <span class="yt-uix-button-content">\nCancel \n    </span>\n</button>\n<button type="submit" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default post-reply" onclick=";return false;" role="button">    <span class="yt-uix-button-content">\nReply \n    </span>\n</button>    </p>\n\n    <p class="comments-remaining needs-focus" data-max-count="500">\n    </p>\n    <p class="comments-threshold-countdown hid">\n    </p>\n  </form>';
            e.insertAdjacentHTML("beforeend", n);
            var a = "",
              i = "";
            e
              .querySelector(".comments-textarea-container textarea")
              .addEventListener("input", function (t) {
                i = t.target.value;
              }),
              (e.querySelector(
                ".comments-textarea-container textarea"
              ).onfocus = function (t) {
                e
                  .querySelector(".comments-post-buttons")
                  .classList.remove("needs-focus"),
                  e
                    .querySelector(".comments-post-buttons")
                    .classList.add("has-focus");
              }),
              (e.querySelector(".comments-textarea-container textarea").onblur =
                function (t) {
                  "" == i &&
                    (e
                      .querySelector(".comments-post-buttons")
                      .classList.add("needs-focus"),
                    e
                      .querySelector(".comments-post-buttons")
                      .classList.remove("has-focus"));
                }),
              (e.querySelector(".post-reply").onclick = function () {
                (a = e.getAttribute("data-post-reply-ajax-id")),
                  "" != i
                    ? postReply(i, a, e)
                    : e.querySelector(".reply-post").remove();
              });
          }
      }
    ),
    $(document).on("click", ".cancel-reply", function (t) {
      t.currentTarget.parentElement.parentElement.parentElement
        .querySelector(".reply-post")
        .remove();
    }),
    $(document).on("click", ".v3-delete-comment", function (t) {
      var e = t.currentTarget.parentElement.parentElement.parentElement;
      v3.innerTube.rateComment(e.getAttribute("data-delete-ajax")), e.remove();
    }),
    $(document).on(
      "click",
      ".comment-action[data-action=flag-profile-pic]",
      function (t) {
        t.currentTarget.parentElement.parentElement.parentElement
          .querySelector(".comment-text")
          .className.includes("flagged")
          ? (t.currentTarget.parentElement.parentElement.parentElement
              .querySelector(".comment-text")
              .classList.remove("flagged"),
            (t.currentTarget.parentElement.parentElement.parentElement.querySelector(
              ".comment-text > p"
            ).innerHTML = t.currentTarget.parentElement.parentElement.parentElement
              .querySelector(".comment-text")
              .getAttribute("original-content")),
            (t.currentTarget.querySelector("span").innerText = "Hide comment"))
          : (t.currentTarget.parentElement.parentElement.parentElement
              .querySelector(".comment-text")
              .setAttribute(
                "original-content",
                t.currentTarget.parentElement.parentElement.parentElement.querySelector(
                  ".comment-text > p"
                ).innerText
              ),
            t.currentTarget.parentElement.parentElement.parentElement
              .querySelector(".comment-text")
              .classList.add("flagged"),
            (t.currentTarget.parentElement.parentElement.parentElement.querySelector(
              ".comment-text > p"
            ).innerHTML = "<i>[comment hidden]</i>"),
            (t.currentTarget.querySelector("span").innerText =
              "Unhide comment"));
      }
    ),
    $(document).on("click", ".v3-edit-comment", function (t) {
      var e = t.currentTarget.parentElement.parentElement.parentElement,
        n = e.querySelector(".comment-text").outerHTML,
        a = e.querySelector(".comment-text p").innerText;
      (e.querySelector(".comment-text").outerHTML =
        '<div class="v3editor"><textarea id="" class="yt-uix-form-input-textarea comments-textarea v3-padder-help-editor" placeholder="Edit comment" onfocus="" data-upsell="comment" name="comment"></textarea><p class="comments-post-buttons needs-focus v3-padder-help-submit">\n\t<button type="submit" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default cancel-edit" onclick=";return false;" role="button">    <span class="yt-uix-button-content">\nCancel \n    </span>\n</button>\n<button type="submit" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default post-edit" onclick=";return false;" role="button">    <span class="yt-uix-button-content">\nEdit \n    </span>\n</button>    </p></div>'),
        (e.querySelector(".v3-padder-help-editor").value = a),
        e
          .querySelector(".comment-actions")
          .classList.add("v3-padder-help-action"),
        (e.querySelector(".cancel-edit").onclick = function () {
          (e.querySelector(".v3editor").outerHTML = n),
            e
              .querySelector(".comment-actions")
              .classList.remove("v3-padder-help-action");
        }),
        (e.querySelector(".post-edit").onclick = async function () {
          if (
            "" == e.querySelector(".v3-padder-help-editor").value ||
            e.querySelector(".v3-padder-help-editor").value == a
          )
            (e.querySelector(".v3editor").outerHTML = n),
              e
                .querySelector(".comment-actions")
                .classList.remove("v3-padder-help-action");
          else if ("reply_container" != e.parentElement.id)
            await updateCommentNormal(
              e.querySelector(".v3-padder-help-editor").value,
              e.getAttribute("data-edit-ajax")
            ).then((t) => {
              try {
                if (
                  "STATUS_SUCCEEDED" ==
                  t.actions[0].updateCommentAction.actionResult.status
                ) {
                  var a = e.querySelector(".v3-padder-help-editor").value;
                  (e.querySelector(".v3editor").outerHTML = n),
                    (e.querySelector(".comment-text p").innerText = a),
                    e.querySelector(".time a").innerText.includes("edited") ||
                      (e.querySelector(".time a").innerText += " (edited)"),
                    e
                      .querySelector(".comment-actions")
                      .classList.remove("v3-padder-help-action");
                }
              } catch (t) {
                useverbose && console.log(t),
                  (v3.loggerDialog +=
                    t + " (at line " + ln() + " in watch.js)\n");
              }
            });
          else
            await updateCommentReply(
              e.querySelector(".v3-padder-help-editor").value,
              e.getAttribute("data-edit-ajax")
            ).then((t) => {
              try {
                if (
                  "STATUS_SUCCEEDED" ==
                  t.actions[0].updateCommentReplyAction.actionResult.status
                ) {
                  var a = e.querySelector(".v3-padder-help-editor").value;
                  (e.querySelector(".v3editor").outerHTML = n),
                    (e.querySelector(".comment-text p").innerText = a),
                    e.querySelector(".time a").innerText.includes("edited") ||
                      (e.querySelector(".time a").innerText += " (edited)"),
                    e
                      .querySelector(".comment-actions")
                      .classList.remove("v3-padder-help-action");
                }
              } catch (t) {
                useverbose && console.log(t),
                  (v3.loggerDialog +=
                    t + " (at line " + ln() + " in watch.js)\n");
              }
            });
        });
    });
}

function v3commentfriend2() {
  $(
    ".comment-action[data-action=reply][data-load-ajax-id]:not(.more-reply-loader)"
  ).on("click", function (t) {
    var e = t.currentTarget.parentElement.parentElement.parentElement;

    if (!e.querySelector("#reply_container")) {
      var n = document.createElement("ul");
      n.setAttribute("id", "reply_container"),
        e.append(n),
        loadReplies(
          t.currentTarget.getAttribute("data-load-ajax-id"),
          e.querySelector("#reply_container")
        ),
        e
          .querySelector("[data-action=flag-profile-pic]")
          .parentElement.insertAdjacentHTML(
            "beforeend",
            '<li class="comment-action unload-reply-button" data-action="flag-reply"><span class="yt-uix-button-menu-item">Unload replies</span></li>'
          ),
        (e.querySelector(".unload-reply-button").onclick = function () {
          e.querySelector("#reply_container").remove(),
            e.querySelector(".unload-reply-button").remove();
        });
    }

    e.querySelector("#reply_container.showing-replies:not(.hid)")
      ? e.querySelector("#reply_container.showing-replies").classList.add("hid")
      : e.querySelector("#reply_container.showing-replies.hid") &&
        e
          .querySelector("#reply_container.showing-replies")
          .classList.remove("hid");
  });
}

async function postReply(t, e, n) {
  var a =
    '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
    authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
    '",\r\n\t\t\t"hl": "' +
    authinfo.HL +
    '"\r\n\t\t}\r\n\t},\r\n\t"createReplyParams":"' +
    e +
    '","commentText":"' +
    t +
    '",\r\n}\r\n';
  await v3.innerTube
    .AJAX(
      "comment/create_comment_reply?",
      a,
      "1",
      authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
    )
    .then((t) => {
      if ("STATUS_SUCCEEDED" == t.actionResult.status) {
        var e =
          '<li class="comment" data-author-id="' +
          t.actions[1].createCommentReplyAction.contents.commentRenderer
            .authorEndpoint.browseEndpoint.browseId +
          '" data-id="' +
          t.actions[1].createCommentReplyAction.contents.commentRenderer
            .commentId +
          '" data-like-ajax-id="' +
          t.actions[1].createCommentReplyAction.contents.commentRenderer
            .actionButtons.commentActionButtonsRenderer.likeButton
            .toggleButtonRenderer.defaultServiceEndpoint
            .performCommentActionEndpoint.action +
          '" data-unlike-ajax-id="' +
          t.actions[1].createCommentReplyAction.contents.commentRenderer
            .actionButtons.commentActionButtonsRenderer.likeButton
            .toggleButtonRenderer.toggledServiceEndpoint
            .performCommentActionEndpoint.action +
          '" data-dislike-ajax-id="" data-undislike-ajax-id="">\n    <button class="flip close yt-uix-button yt-uix-button-link yt-uix-button-empty" type="button" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant="">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-comment-close" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n<img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><div class=" yt-uix-button-menu yt-uix-button-menu-link" style="display: none;"><ul><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag-profile-pic"><span class="yt-uix-button-menu-item">Report profile image</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button>\n      <a href="/channel/' +
          t.actions[1].createCommentReplyAction.contents.commentRenderer
            .authorEndpoint.browseEndpoint.browseId +
          '" class="yt-user-photo ">    <span class="video-thumb  yt-thumb yt-thumb-48">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
          t.actions[1].createCommentReplyAction.contents.commentRenderer
            .authorThumbnail.thumbnails[0].url +
          '" alt="' +
          t.actions[1].createCommentReplyAction.contents.commentRenderer
            .authorText.simpleText +
          '" width="48" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a>\n\n    \n\n  <div class="content">\n      <p class="metadata">\n        <span class="author ">\n          <a href="/channel/' +
          t.actions[1].createCommentReplyAction.contents.commentRenderer
            .authorEndpoint.browseEndpoint.browseId +
          '" class="yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr">' +
          t.actions[1].createCommentReplyAction.contents.commentRenderer
            .authorText.simpleText +
          '</a>\n        </span>\n          <span class="time" dir="ltr">\n            <a dir="ltr" href="/comment?lc=' +
          t.actions[1].createCommentReplyAction.contents.commentRenderer
            .commentId +
          '">\n              ' +
          t.actions[1].createCommentReplyAction.contents.commentRenderer
            .publishedTimeText.runs[0].text +
          '\n            </a>\n          </span>\n      </p>\n\n\n      <div class="comment-text" dir="ltr">\n        <p>' +
          t.actions[1].createCommentReplyAction.contents.commentRenderer
            .contentText.runs[0].text +
          '</p>\n\n      </div>\n      \n  <div class="comment-actions">\n    <button class="start comment-action yt-uix-button yt-uix-button-link" type="button" onclick=";return false;" data-action="reply" role="button">    <span class="yt-uix-button-content">\nReply \n    </span>\n</button>\n    <span class="separator">·</span>\n\n\n    <span class="yt-uix-clickcard"><button class="start comment-action-vote-up comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" type="button" onclick=";return false;" title="" data-action="" data-tooltip-show-delay="300" role="button">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n</button>  <div class="watch7-hovercard yt-uix-clickcard-content">\n    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>\n    <div class="watch7-hovercard-message">\n      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">Shok Hovhannisyan</span>\'s comment.\n\n    </div>\n    <ul class="watch7-hovercard-icon-strip clearfix">\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-youtube-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gplus-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gmail-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-picasa-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-chrome-icon"></div>\n      </li>\n    </ul>\n    <div class="watch7-hovercard-account-line">\n      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;hl=en_US&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D9bZkp7q19f0%26nomobiletemp%3D1" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary" data-sessionlink="ei=jAXSUYa8KYHXkAKH2oDoBg"><span class="yt-uix-button-content">Sign in</span></a>\n    </div>\n  </div>\n</span><span class="yt-uix-clickcard"><button class="end comment-action-vote-down comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" type="button" onclick=";return false;" title="" data-action="" data-tooltip-show-delay="300" role="button">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n</button>  <div class="watch7-hovercard yt-uix-clickcard-content">\n    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>\n    <div class="watch7-hovercard-message">\n      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">Shok Hovhannisyan</span>\'s comment.\n\n    </div>\n    <ul class="watch7-hovercard-icon-strip clearfix">\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-youtube-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gplus-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gmail-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-picasa-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-chrome-icon"></div>\n      </li>\n    </ul>\n    <div class="watch7-hovercard-account-line">\n      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;hl=en_US&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D9bZkp7q19f0%26nomobiletemp%3D1" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary" data-sessionlink="ei=jAXSUYa8KYHXkAKH2oDoBg"><span class="yt-uix-button-content">Sign in</span></a>\n    </div>\n  </div>\n</span>\n  </div>\n\n  </div>\n\n\n  </li>';
        if (n.querySelector("#reply_container"))
          n.querySelector("#reply_container").insertAdjacentHTML(
            "beforeend",
            e
          );
        else if (
          n.querySelector(
            ".comment-action[data-action=reply][data-load-ajax-id]:not(.more-reply-loader)"
          )
        )
          n.querySelector(
            ".comment-action[data-action=reply][data-load-ajax-id]:not(.more-reply-loader)"
          ).click();
        else {
          var a = document.createElement("ul");
          a.setAttribute("id", "reply_container"),
            a.setAttribute("class", "showing-replies"),
            (a.innerHTML = e),
            n.append(a);
        }
        (n.querySelector(".comments-textarea-container textarea").value = ""),
          n.querySelector(".reply-post").remove();
      }
    });
}

function isHaveContinuation(t) {
  try {
    if (t.continuationItemRenderer) return !0;
  } catch (t) {
    return !1;
  }
}

async function loadReplies(t, e) {
  var n =
    '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
    authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
    '",\r\n\t\t\t"hl": "' +
    authinfo.HL +
    '"\r\n\t\t}\r\n\t},\r\n\t"continuation":"' +
    t +
    '",\r\n}\r\n';
  await v3.innerTube
    .AJAX("next?", n, "1", authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION)
    .then((t) => {
      ajaxresponse = t;
      var n = t,
        a = (n = n.onResponseReceivedEndpoints[0]).appendContinuationItemsAction
          .continuationItems.length;
      n.appendContinuationItemsAction.continuationItems.find(
        isHaveContinuation
      ) && (a = n.appendContinuationItemsAction.continuationItems.length - 1);
      var o = "";

      for (i = 0, j = a; i < j; i++) {
        var r = "";
        n.appendContinuationItemsAction.continuationItems.find(
          isHaveContinuation
        ) &&
          i == j - 1 &&
          (r =
            '<button class="comment-action yt-uix-button yt-uix-button-link more-reply-loader" type="button" onclick=";return false;" data-action="reply" role="button" data-load-ajax-id="' +
            n.appendContinuationItemsAction.continuationItems.find(
              isHaveContinuation
            ).continuationItemRenderer.button.buttonRenderer.command
              .continuationCommand.token +
            '">    <span class="yt-uix-button-content">\nLoad more replies\n    </span>\n</button>');
        var s =
            '<span class="comments-rating-positive" title="">\n        \n\t\t\t</span>',
          c = "",
          l = "",
          d = "",
          u = "",
          m = "";
        n.appendContinuationItemsAction.continuationItems[i].commentRenderer
          .authorCommentBadge &&
          n.appendContinuationItemsAction.continuationItems[i].commentRenderer
            .authorCommentBadge.authorCommentBadgeRenderer.iconTooltip &&
          (m =
            '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name" data-tooltip-text="Verified name">\n  </span>');

        try {
          n.appendContinuationItemsAction.continuationItems[
            i
          ].commentRenderer.actionMenu.menuRenderer.items.find(isCommentEdit)
            .menuNavigationItemRenderer.navigationEndpoint
            .updateCommentReplyDialogEndpoint.dialog.commentReplyDialogRenderer
            .replyButton.buttonRenderer.serviceEndpoint
            .updateCommentReplyEndpoint.updateReplyParams &&
            (u =
              n.appendContinuationItemsAction.continuationItems[
                i
              ].commentRenderer.actionMenu.menuRenderer.items.find(
                isCommentEdit
              ).menuNavigationItemRenderer.navigationEndpoint
                .updateCommentReplyDialogEndpoint.dialog
                .commentReplyDialogRenderer.replyButton.buttonRenderer
                .serviceEndpoint.updateCommentReplyEndpoint.updateReplyParams);
        } catch (t) {}

        try {
          1 ==
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .viewerIsAuthor &&
            (d =
              n.appendContinuationItemsAction.continuationItems[
                i
              ].commentRenderer.actionMenu.menuRenderer.items.find(
                isCommentDelete
              ).menuNavigationItemRenderer.navigationEndpoint
                .confirmDialogEndpoint.content.confirmDialogRenderer
                .confirmButton.buttonRenderer.serviceEndpoint
                .performCommentActionEndpoint.action);
        } catch (t) {}

        try {
          1 ==
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .isLiked && (l = " voted-up");
        } catch (t) {}

        if (
          void 0 !==
          n.appendContinuationItemsAction.continuationItems[i].commentRenderer
            .contentText.runs
        )
          if (
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .contentText.runs.length > 1
          )
            for (
              x = 0,
                y =
                  n.appendContinuationItemsAction.continuationItems[i]
                    .commentRenderer.contentText.runs.length;
              x < y;
              x++
            )
              "\n" ==
              n.appendContinuationItemsAction.continuationItems[i]
                .commentRenderer.contentText.runs[x].text
                ? (c += "<br>")
                : (c +=
                    n.appendContinuationItemsAction.continuationItems[i]
                      .commentRenderer.contentText.runs[x].text);
          else
            c +=
              n.appendContinuationItemsAction.continuationItems[i]
                .commentRenderer.contentText.runs[0].text;

        try {
          null !=
            typeof n.appendContinuationItemsAction.continuationItems[i]
              .commentRenderer.voteCount &&
            (s =
              '<span class="comments-rating-positive" title="' +
              n.appendContinuationItemsAction.continuationItems[i]
                .commentRenderer.voteCount.accessibility.accessibilityData
                .label +
              '">\n        ' +
              n.appendContinuationItemsAction.continuationItems[
                i
              ].commentRenderer.actionButtons.commentActionButtonsRenderer.likeButton.toggleButtonRenderer.accessibilityData.accessibilityData.label
                .replace(/[^0-9.]/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              "\n\t\t\t</span>");
        } catch (t) {}

        var p = "";
        1 == authinfo.LOGGED_IN &&
          (p =
            ' data-like-ajax-id="' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .actionButtons.commentActionButtonsRenderer.likeButton
              .toggleButtonRenderer.defaultServiceEndpoint
              .performCommentActionEndpoint.action +
            '" data-unlike-ajax-id="' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .actionButtons.commentActionButtonsRenderer.likeButton
              .toggleButtonRenderer.toggledServiceEndpoint
              .performCommentActionEndpoint.action +
            '" data-dislike-ajax-id="' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .actionButtons.commentActionButtonsRenderer.dislikeButton
              .toggleButtonRenderer.defaultServiceEndpoint
              .performCommentActionEndpoint.action +
            '" data-undislike-ajax-id="' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .actionButtons.commentActionButtonsRenderer.dislikeButton
              .toggleButtonRenderer.toggledServiceEndpoint
              .performCommentActionEndpoint.action +
            '"');
        var b =
          '<li class="comment-action" data-action="flag-profile-pic"><span class="yt-uix-button-menu-item">Hide comment</span></li>';
        "" != d &&
          ((p += ' data-delete-ajax="' + d + '"'),
          (b =
            '<li class="comment-action v3-delete-comment" data-action="v3-delete-comment"><span class="yt-uix-button-menu-item">Delete</span></li>')),
          "" != u &&
            ((p += ' data-edit-ajax="' + u + '"'),
            (b +=
              '<li class="comment-action v3-edit-comment" data-action="v3-edit-comment"><span class="yt-uix-button-menu-item">Edit</span></li>')),
          (o +=
            '<li class="comment" data-author-id="' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .authorEndpoint.browseEndpoint.browseId +
            '" data-id="' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .commentId +
            '"' +
            p +
            '>\n    <button class="flip close yt-uix-button yt-uix-button-link yt-uix-button-empty" type="button" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant="">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-comment-close" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n<img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><div class=" yt-uix-button-menu yt-uix-button-menu-link" style="display: none;"><ul>' +
            b +
            '</ul></div></button>\n      <a href="' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .authorEndpoint.browseEndpoint.canonicalBaseUrl +
            '" class="yt-user-photo ">    <span class="video-thumb  yt-thumb yt-thumb-48">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .authorThumbnail.thumbnails[0].url +
            '" alt="' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .authorText.simpleText +
            '" width="48" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a>\n\n    \n\n  <div class="content">\n      <p class="metadata">\n        <span class="author ">\n          <a href="' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .authorEndpoint.browseEndpoint.canonicalBaseUrl +
            '" class="yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr">' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .authorText.simpleText +
            "</a>" +
            m +
            '\n        </span>\n          <span class="time" dir="ltr">\n            <a dir="ltr" href="/comment?lc=' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .commentId +
            '">\n              ' +
            n.appendContinuationItemsAction.continuationItems[i].commentRenderer
              .publishedTimeText.runs[0].text +
            '\n            </a>\n          </span>\n      </p>\n\n\n      <div class="comment-text" dir="ltr">\n        <p>' +
            c +
            '</p>\n\n      </div>\n      \n  <div class="comment-actions">\n    <button class="start comment-action yt-uix-button yt-uix-button-link" type="button" onclick=";return false;" data-action="reply" role="button">    <span class="yt-uix-button-content">\nReply \n    </span>\n</button>\n    <span class="separator">·</span>' +
            s +
            '\n\n\n    <span class="yt-uix-clickcard"><button class="start comment-action-vote-up comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty' +
            l +
            '" type="button" onclick=";return false;" title="" data-action="" data-tooltip-show-delay="300" role="button">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n</button>  <div class="watch7-hovercard yt-uix-clickcard-content">\n    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>\n    <div class="watch7-hovercard-message">\n      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">Shok Hovhannisyan</span>\'s comment.\n\n    </div>\n    <ul class="watch7-hovercard-icon-strip clearfix">\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-youtube-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gplus-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gmail-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-picasa-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-chrome-icon"></div>\n      </li>\n    </ul>\n    <div class="watch7-hovercard-account-line">\n      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;hl=en_US&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D9bZkp7q19f0%26nomobiletemp%3D1" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary" data-sessionlink="ei=jAXSUYa8KYHXkAKH2oDoBg"><span class="yt-uix-button-content">Sign in</span></a>\n    </div>\n  </div>\n</span><span class="yt-uix-clickcard"><button class="end comment-action-vote-down comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" type="button" onclick=";return false;" title="" data-action="" data-tooltip-show-delay="300" role="button">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n</button>  <div class="watch7-hovercard yt-uix-clickcard-content">\n    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>\n    <div class="watch7-hovercard-message">\n      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">Shok Hovhannisyan</span>\'s comment.\n\n    </div>\n    <ul class="watch7-hovercard-icon-strip clearfix">\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-youtube-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gplus-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gmail-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-picasa-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-chrome-icon"></div>\n      </li>\n    </ul>\n    <div class="watch7-hovercard-account-line">\n      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;hl=en_US&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D9bZkp7q19f0%26nomobiletemp%3D1" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary" data-sessionlink="ei=jAXSUYa8KYHXkAKH2oDoBg"><span class="yt-uix-button-content">Sign in</span></a>\n    </div>\n  </div>\n</span>\nin reply to \n<a href="' +
            e.parentElement.querySelector(
              ".content .metadata .author .yt-user-name"
            ).href +
            '" class="yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr">' +
            e.parentElement.querySelector(
              ".content .metadata .author .yt-user-name"
            ).innerText +
            "</a>\n  </div>\n" +
            r +
            "\n  </div>\n\n\n  </li>\n  </div>\n\n  </div>\n\n\n  </li>");
      }

      e.insertAdjacentHTML("beforeend", o),
        e.setAttribute("class", "showing-replies"),
        n.appendContinuationItemsAction.continuationItems.find(
          isHaveContinuation
        ) &&
          $(
            ".comment-action[data-action=reply][data-load-ajax-id].more-reply-loader"
          ).on("click", function (t) {
            var e = t.currentTarget.parentElement.parentElement.parentElement;
            loadReplies(t.currentTarget.getAttribute("data-load-ajax-id"), e),
              t.currentTarget.remove();
          });
    });
}

function isSubscriberRenderer(t) {
  try {
    if (t.guideSubscriptionsSectionRenderer) return !0;
  } catch (t) {
    return !1;
  }
}

function isSubscriberExpandableRenderer(t) {
  try {
    if (t.guideCollapsibleEntryRenderer) return !0;
  } catch (t) {
    return !1;
  }
}

async function getUnreadNotifications() {
  var t =
      '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
      authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
      '",\r\n\t\t\t"hl": "' +
      authinfo.HL +
      '"\r\n\t\t}\r\n\t}}\r\n',
    e = await v3.innerTube
      .AJAX(
        "notification/get_unseen_count?",
        t,
        "1",
        authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
      )
      .then((t) => {
        void 0 !== (e = t).actions &&
          void 0 !==
            e.actions[0].updateNotificationsUnseenCountAction.unseenCount &&
          (document
            .querySelector("#yt-masthead-user #sb-button-notify")
            .classList.remove("sb-notif-off"),
          document
            .querySelector("#yt-masthead-user #sb-button-notify")
            .classList.add("sb-notif-on"),
          (document.querySelector(
            "#yt-masthead-user .sb-notif-on .yt-uix-button-content"
          ).innerHTML =
            e.actions[0].updateNotificationsUnseenCountAction.unseenCount));
      });
}

async function getMoreAjax(t, e) {
  var n =
      '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
      authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
      '",\r\n\t\t\t"hl": "' +
      authinfo.HL +
      '"\r\n\t\t}\r\n\t},\r\n\t"continuation":"' +
      t +
      '",\r\n}\r\n',
    a = await v3.innerTube
      .AJAX("next?", n, "1", authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION)
      .then((t) => {
        if (((a = t), 1 == e)) {
          var n = "",
            o =
              a.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                .continuationItems;

          for (i = 0, j = o.length; i < j; i++)
            if (void 0 !== o[i].compactVideoRenderer) {
              var r = "",
                s = "";

              try {
                s = o[i].compactVideoRenderer.publishedTimeText.simpleText;
              } catch (t) {}

              try {
                r = o[i].compactVideoRenderer.lengthText.simpleText;
              } catch (t) {}

              try {
                "Funketon" ==
                  o[i].compactVideoRenderer.shortBylineText.runs[0].text &&
                  (o[i].compactVideoRenderer.shortBylineText.runs[0].text =
                    "djtomproductions");
              } catch (t) {}

              n +=
                '<li class="video-list-item related-list-item"><a href="/watch' +
                o[
                  i
                ].compactVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
                  "/watch"
                )[1] +
                '" class="related-video yt-uix-contextlink  yt-uix-sessionlink" data-sessionlink=""><span class="ux-thumb-wrap contains-addto ">    <span class="video-thumb  yt-thumb yt-thumb-120">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img alt="" data-thumb="' +
                o[i].compactVideoRenderer.thumbnail.thumbnails[0].url +
                '" src="' +
                o[i].compactVideoRenderer.thumbnail.thumbnails[0].url +
                '" width="120" data-group-key="thumb-group-0">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
                r +
                '</span>\n\n  <button class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" title="' +
                v3.UIMSG[v3.nationIndex].GUIDE_WL +
                '" type="button" onclick=";return false;" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
                o[i].compactVideoRenderer.videoId +
                '" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="' +
                v3.UIMSG[v3.nationIndex].GUIDE_WL +
                '">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</span><span dir="ltr" class="title" title="' +
                o[i].compactVideoRenderer.title.simpleText +
                '">' +
                o[i].compactVideoRenderer.title.simpleText +
                '</span><span class="stat attribution"><span class="g-hovercard" data-ytid="" data-name="watch-vrec">' +
                v3.UIMSG[v3.nationIndex].C3_BYUSER +
                '<b><span class="g-hovercard" data-ytid="">' +
                o[i].compactVideoRenderer.shortBylineText.runs[0].text +
                '</span></b></span></span><span class="stat view-count">' +
                o[i].compactVideoRenderer.viewCountText.simpleText +
                '</span><span class="stat upload-day">' +
                s +
                "</span></a></li>";
            }

          document
            .querySelector("#watch-related")
            .insertAdjacentHTML("beforeend", n),
            document
              .querySelector("#watch-related")
              .appendChild(
                document.querySelector("#watch-more-related-button")
              ),
            document
              .querySelector("#watch-related")
              .appendChild(
                document.querySelector("#watch-related .yt-spinner")
              ),
            document
              .querySelector("#watch-more-related-button")
              .classList.remove("hid"),
            document
              .querySelector("#watch-more-related-button+.yt-spinner")
              .classList.add("hid"),
            document.querySelectorAll("#watch-more-related-button+.yt-spinner")
              .length > 1 &&
              document
                .querySelector("#watch-more-related-button+.yt-spinner")
                .remove(),
            (document.querySelector("#watch-more-related-button").onclick =
              function () {
                document
                  .querySelector("#watch-more-related-button")
                  .classList.add("hid"),
                  document
                    .querySelector("#watch-more-related-button+.yt-spinner")
                    .classList.remove("hid"),
                  getMoreAjax(
                    o[20].continuationItemRenderer.continuationEndpoint
                      .continuationCommand.token,
                    1
                  );
              });
        }

        if (2 == e) {
          var c = a,
            l = "",
            d =
              c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                .continuationItems.length;

          for (21 == d && (d = 20), i = 0, j = d; i < j; i++) {
            var u =
                '<span class="comments-rating-positive" title="">\n        \n\t\t\t</span>',
              m = "",
              p = "",
              b = "",
              h = "",
              g = "";
            c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
              .continuationItems[i].commentThreadRenderer.comment
              .commentRenderer.authorCommentBadge &&
              c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                .continuationItems[i].commentThreadRenderer.comment
                .commentRenderer.authorCommentBadge.authorCommentBadgeRenderer
                .iconTooltip &&
              (g =
                '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name" data-tooltip-text="Verified name">\n  </span>');

            try {
              c.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems[
                i
              ].commentThreadRenderer.comment.commentRenderer.actionMenu.menuRenderer.items.find(
                isCommentEdit
              ).menuNavigationItemRenderer.navigationEndpoint
                .updateCommentDialogEndpoint.dialog.commentDialogRenderer
                .submitButton.buttonRenderer.serviceEndpoint
                .updateCommentEndpoint.updateCommentParams &&
                (h =
                  c.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems[
                    i
                  ].commentThreadRenderer.comment.commentRenderer.actionMenu.menuRenderer.items.find(
                    isCommentEdit
                  ).menuNavigationItemRenderer.navigationEndpoint
                    .updateCommentDialogEndpoint.dialog.commentDialogRenderer
                    .submitButton.buttonRenderer.serviceEndpoint
                    .updateCommentEndpoint.updateCommentParams);
            } catch (t) {}

            try {
              1 ==
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.viewerIsAuthor &&
                (b =
                  c.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems[
                    i
                  ].commentThreadRenderer.comment.commentRenderer.actionMenu.menuRenderer.items.find(
                    isCommentDelete
                  ).menuNavigationItemRenderer.navigationEndpoint
                    .confirmDialogEndpoint.content.confirmDialogRenderer
                    .confirmButton.buttonRenderer.serviceEndpoint
                    .performCommentActionEndpoint.action);
            } catch (t) {}

            try {
              1 ==
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.actionButtons.commentActionButtonsRenderer
                  .likeButton.toggleButtonRenderer.isToggled &&
                (p = " voted-up");
            } catch (t) {}

            try {
              1 ==
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.actionButtons.commentActionButtonsRenderer
                  .dislikeButton.toggleButtonRenderer.isToggled &&
                (p = " voted-down");
            } catch (t) {}

            if (
              void 0 !==
              c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                .continuationItems[i].commentThreadRenderer.comment
                .commentRenderer.contentText.runs
            )
              if (
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.contentText.runs.length > 1
              )
                for (
                  x = 0,
                    y =
                      c.onResponseReceivedEndpoints[0]
                        .appendContinuationItemsAction.continuationItems[i]
                        .commentThreadRenderer.comment.commentRenderer
                        .contentText.runs.length;
                  x < y;
                  x++
                )
                  "\n" ==
                  c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                    .continuationItems[i].commentThreadRenderer.comment
                    .commentRenderer.contentText.runs[x].text
                    ? (m += "<br>")
                    : (m +=
                        c.onResponseReceivedEndpoints[0]
                          .appendContinuationItemsAction.continuationItems[i]
                          .commentThreadRenderer.comment.commentRenderer
                          .contentText.runs[x].text);
              else
                m +=
                  c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                    .continuationItems[i].commentThreadRenderer.comment
                    .commentRenderer.contentText.runs[0].text;
            var v = "";

            try {
              void 0 !==
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.replyCount &&
                (v =
                  '<button class="comment-action yt-uix-button yt-uix-button-link" type="button" onclick=";return false;" data-action="reply" role="button" data-load-ajax-id="' +
                  c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                    .continuationItems[i].commentThreadRenderer.replies
                    .commentRepliesRenderer.contents[0].continuationItemRenderer
                    .continuationEndpoint.continuationCommand.token +
                  '">    <span class="yt-uix-button-content">\nReplies: ' +
                  c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                    .continuationItems[i].commentThreadRenderer.comment
                    .commentRenderer.replyCount +
                  "\n    </span>\n</button>");
            } catch (t) {}

            void 0 !==
              c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                .continuationItems[i].commentThreadRenderer.comment
                .commentRenderer.voteCount &&
              (u =
                '<span class="comments-rating-positive" title="' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.voteCount.accessibility.accessibilityData
                  .label +
                '">\n        ' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems[
                  i
                ].commentThreadRenderer.comment.commentRenderer.actionButtons.commentActionButtonsRenderer.likeButton.toggleButtonRenderer.accessibilityData.accessibilityData.label
                  .replace(/[^0-9.]/g, "")
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                "\n\t\t\t</span>");
            var f = "";

            try {
              f =
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.actionButtons.commentActionButtonsRenderer
                  .replyButton.buttonRenderer.navigationEndpoint
                  .createCommentReplyDialogEndpoint.dialog
                  .commentReplyDialogRenderer.replyButton.buttonRenderer
                  .serviceEndpoint.createCommentReplyEndpoint.createReplyParams;
            } catch (t) {}

            var w = "";
            1 == authinfo.LOGGED_IN &&
              (w =
                ' data-like-ajax-id="' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.actionButtons.commentActionButtonsRenderer
                  .likeButton.toggleButtonRenderer.defaultServiceEndpoint
                  .performCommentActionEndpoint.action +
                '" data-unlike-ajax-id="' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.actionButtons.commentActionButtonsRenderer
                  .likeButton.toggleButtonRenderer.toggledServiceEndpoint
                  .performCommentActionEndpoint.action +
                '" data-dislike-ajax-id="' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.actionButtons.commentActionButtonsRenderer
                  .dislikeButton.toggleButtonRenderer.defaultServiceEndpoint
                  .performCommentActionEndpoint.action +
                '" data-undislike-ajax-id="' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.actionButtons.commentActionButtonsRenderer
                  .dislikeButton.toggleButtonRenderer.toggledServiceEndpoint
                  .performCommentActionEndpoint.action +
                '" data-post-reply-ajax-id="' +
                f +
                '"');
            var S =
              '<li class="comment-action" data-action="flag-profile-pic"><span class="yt-uix-button-menu-item">Hide comment</span></li>';
            "" != b &&
              ((w += ' data-delete-ajax="' + b + '"'),
              (S =
                '<li class="comment-action v3-delete-comment" data-action="v3-delete-comment"><span class="yt-uix-button-menu-item">Delete</span></li>')),
              "" != h &&
                ((w += ' data-edit-ajax="' + h + '"'),
                (S +=
                  '<li class="comment-action v3-edit-comment" data-action="v3-edit-comment"><span class="yt-uix-button-menu-item">Edit</span></li>')),
              (l +=
                '<li class="comment" data-author-id="' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.authorEndpoint.browseEndpoint.browseId +
                '" data-id="' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.commentId +
                '"' +
                w +
                '>\n    <button class="flip close yt-uix-button yt-uix-button-link yt-uix-button-empty" type="button" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant="">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-comment-close" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n<img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><div class=" yt-uix-button-menu yt-uix-button-menu-link" style="display: none;"><ul>' +
                S +
                '</ul></div></button>\n      <a href="' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.authorEndpoint.browseEndpoint
                  .canonicalBaseUrl +
                '" class="yt-user-photo ">    <span class="video-thumb  yt-thumb yt-thumb-48">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.authorThumbnail.thumbnails[0].url +
                '" alt="' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.authorText.simpleText +
                '" width="48" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a>\n\n    \n\n  <div class="content">\n      <p class="metadata">\n        <span class="author ">\n          <a href="' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.authorEndpoint.browseEndpoint
                  .canonicalBaseUrl +
                '" class="yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr">' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.authorText.simpleText +
                "</a>" +
                g +
                '\n        </span>\n          <span class="time" dir="ltr">\n            <a dir="ltr" href="/comment?lc=' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.commentId +
                '">\n              ' +
                c.onResponseReceivedEndpoints[0].appendContinuationItemsAction
                  .continuationItems[i].commentThreadRenderer.comment
                  .commentRenderer.publishedTimeText.runs[0].text +
                '\n            </a>\n          </span>\n      </p>\n\n\n      <div class="comment-text" dir="ltr">\n        <p>' +
                m +
                '</p>\n\n      </div>\n      \n  <div class="comment-actions">\n    <button class="start comment-action yt-uix-button yt-uix-button-link" type="button" onclick=";return false;" data-action="reply" role="button">    <span class="yt-uix-button-content">\nReply \n    </span>\n</button>\n    <span class="separator">·</span>' +
                u +
                '\n\n\n    <span class="yt-uix-clickcard"><button class="start comment-action-vote-up comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty' +
                p +
                '" type="button" onclick=";return false;" title="" data-action="" data-tooltip-show-delay="300" role="button">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n</button>  <div class="watch7-hovercard yt-uix-clickcard-content">\n    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>\n    <div class="watch7-hovercard-message">\n      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">Shok Hovhannisyan</span>\'s comment.\n\n    </div>\n    <ul class="watch7-hovercard-icon-strip clearfix">\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-youtube-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gplus-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gmail-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-picasa-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-chrome-icon"></div>\n      </li>\n    </ul>\n    <div class="watch7-hovercard-account-line">\n      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;hl=en_US&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D9bZkp7q19f0%26nomobiletemp%3D1" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary" data-sessionlink="ei=jAXSUYa8KYHXkAKH2oDoBg"><span class="yt-uix-button-content">Sign in</span></a>\n    </div>\n  </div>\n</span><span class="yt-uix-clickcard"><button class="end comment-action-vote-down comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" type="button" onclick=";return false;" title="" data-action="" data-tooltip-show-delay="300" role="button">    <span class="yt-uix-button-icon-wrapper">\n      <img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="yt-uix-button-valign"></span>\n    </span>\n</button>  <div class="watch7-hovercard yt-uix-clickcard-content">\n    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>\n    <div class="watch7-hovercard-message">\n      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">Shok Hovhannisyan</span>\'s comment.\n\n    </div>\n    <ul class="watch7-hovercard-icon-strip clearfix">\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-youtube-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gplus-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-gmail-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-picasa-icon"></div>\n      </li>\n      <li class="watch7-hovercard-icon">\n        <div class="watch7-hovercard-chrome-icon"></div>\n      </li>\n    </ul>\n    <div class="watch7-hovercard-account-line">\n      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;hl=en_US&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D9bZkp7q19f0%26nomobiletemp%3D1" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary" data-sessionlink="ei=jAXSUYa8KYHXkAKH2oDoBg"><span class="yt-uix-button-content">Sign in</span></a>\n    </div>\n  </div>\n</span>' +
                v +
                "\n  </div>\n\n  </div>\n\n\n  </li>"),
              countloadcomments++;
          }

          document
            .querySelector("#all-comments")
            .insertAdjacentHTML("beforeend", l),
            void 0 !==
              c.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems.find(
                hasContinuation
              ) &&
              ((document.querySelector("#watch-discussion").innerHTML +=
                '<div class="comments-pagination" data-ajax-enabled="true">\n        <button type="button" class="yt-uix-pager-button yt-uix-pager-show-more yt-uix-button yt-uix-button-default" onclick=";return false;" role="button"><span class="yt-uix-button-content">Show more </span></button>\n    </div>'),
              document
                .querySelector(".comments-pagination .yt-spinner")
                .classList.add("hid"),
              (document.querySelector("button.yt-uix-pager-button").onclick =
                function () {
                  document
                    .querySelector(".comments-pagination .yt-spinner")
                    .classList.remove("hid"),
                    getMoreAjax(
                      c.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems.find(
                        hasContinuation
                      ).continuationItemRenderer.continuationEndpoint
                        .continuationCommand.token,
                      2
                    ),
                    document
                      .querySelector("button.yt-uix-pager-button")
                      .remove();
                }),
              v3commentfriend2());
        }
      });
}

function deabreviateCnt(t) {
  if (t) {
    var e,
      n,
      a = 0;
    if (
      ("M" == t.charAt(t.length - 1) && (a = 1),
      "K" == t.charAt(t.length - 1) && (a = 2),
      0 != a)
    )
      1 == a && ((e = "000,000"), (n = "M")),
        2 == a && ((e = "000"), (n = "K")),
        (t =
          -1 != t.indexOf(".")
            ? t.split(".")[0] +
              "," +
              t.split(".")[1].split(n)[0].slice(0, 2) +
              e.slice(t.split(".")[1].split(n)[0].length, e.length)
            : t.substring(0, t.length - 1) + "," + e);
    return t;
  }

  return null;
}

var utcoffsets = {
  asiakabul: "+270",
  europetirane: "+120",
  africaalgiers: "+60",
  pacificpagopago: "-660",
  europeandorra: "+120",
  africaluanda: "+60",
  americaanguilla: "-240",
  antarcticacasey: "+660",
  antarcticadavis: "+420",
  antarcticadumontdurville: "+600",
  antarcticamawson: "+300",
  antarcticamcmurdo: "+720",
  antarcticapalmer: "-180",
  antarcticarothera: "-180",
  antarcticasyowa: "+180",
  antarcticatroll: "+120",
  antarcticavostok: "+360",
  americaantigua: "-240",
  americaargentinabuenosaires: "-180",
  americaargentinacatamarca: "-180",
  americaargentinacordoba: "-180",
  americaargentinajujuy: "-180",
  americaargentinalarioja: "-180",
  americaargentinamendoza: "-180",
  americaargentinariogallegos: "-180",
  americaargentinasalta: "-180",
  americaargentinasanjuan: "-180",
  americaargentinasanluis: "-180",
  americaargentinatucuman: "-180",
  americaargentinaushuaia: "-180",
  asiayerevan: "+240",
  americaaruba: "-240",
  antarcticamacquarie: "+600",
  australiaadelaide: "+570",
  australiabrisbane: "+600",
  australiabrokenhill: "+570",
  australiadarwin: "+570",
  australiaeucla: "+525",
  australiahobart: "+600",
  australialindeman: "+600",
  australialordhowe: "+630",
  australiamelbourne: "+600",
  australiaperth: "+480",
  australiasydney: "+600",
  europevienna: "+120",
  asiabaku: "+240",
  americanassau: "-240",
  asiabahrain: "+180",
  asiadhaka: "+360",
  americabarbados: "-240",
  europeminsk: "+180",
  europebrussels: "+120",
  americabelize: "-360",
  africaportonovo: "+60",
  atlanticbermuda: "-180",
  asiathimphu: "+360",
  americalapaz: "-240",
  americakralendijk: "-240",
  europesarajevo: "+120",
  africagaborone: "+120",
  americaaraguaina: "-180",
  americabahia: "-180",
  americabelem: "-180",
  americaboavista: "-240",
  americacampogrande: "-240",
  americacuiaba: "-240",
  americaeirunepe: "-300",
  americafortaleza: "-180",
  americamaceio: "-180",
  americamanaus: "-240",
  americanoronha: "-120",
  americaportovelho: "-240",
  americarecife: "-180",
  americariobranco: "-300",
  americasantarem: "-180",
  americasaopaulo: "-180",
  indianchagos: "+360",
  asiabrunei: "+480",
  europesofia: "+180",
  africaouagadougou: "0",
  africabujumbura: "+120",
  asiaphnompenh: "+420",
  africadouala: "+60",
  americaatikokan: "-300",
  americablancsablon: "-240",
  americacambridgebay: "-360",
  americacreston: "-420",
  americadawson: "-420",
  americadawsoncreek: "-420",
  americaedmonton: "-360",
  americafortnelson: "-420",
  americaglacebay: "-180",
  americagoosebay: "-180",
  americahalifax: "-180",
  americainuvik: "-360",
  americaiqaluit: "-240",
  americamoncton: "-180",
  americanipigon: "-240",
  americapangnirtung: "-240",
  americarainyriver: "-300",
  americarankininlet: "-300",
  americaregina: "-360",
  americaresolute: "-300",
  americastjohns: "-150",
  americaswiftcurrent: "-360",
  americathunderbay: "-240",
  americatoronto: "-240",
  americavancouver: "-420",
  americawhitehorse: "-420",
  americawinnipeg: "-300",
  americayellowknife: "-360",
  atlanticcapeverde: "-60",
  americacayman: "-300",
  africabangui: "+60",
  africandjamena: "+60",
  americapuntaarenas: "-180",
  americasantiago: "-240",
  pacificeaster: "-360",
  asiashanghai: "+480",
  asiaurumqi: "+360",
  indianchristmas: "+420",
  indiancocos: "+390",
  americabogota: "-300",
  indiancomoro: "+180",
  africabrazzaville: "+60",
  africakinshasa: "+60",
  africalubumbashi: "+120",
  pacificrarotonga: "-600",
  americacostarica: "-360",
  europezagreb: "+120",
  americahavana: "-240",
  americacuracao: "-240",
  asiafamagusta: "+180",
  asianicosia: "+180",
  europeprague: "+120",
  africaabidjan: "0",
  europecopenhagen: "+120",
  africadjibouti: "+180",
  americadominica: "-240",
  americasantodomingo: "-240",
  americaguayaquil: "-300",
  pacificgalapagos: "-360",
  africacairo: "+120",
  americaelsalvador: "-360",
  africamalabo: "+60",
  africaasmara: "+180",
  europetallinn: "+180",
  africaaddisababa: "+180",
  atlanticstanley: "-180",
  atlanticfaroe: "+60",
  pacificfiji: "+720",
  europehelsinki: "+180",
  europeparis: "+120",
  americacayenne: "-180",
  pacificgambier: "-540",
  pacificmarquesas: "-570",
  pacifictahiti: "-600",
  indiankerguelen: "+300",
  africalibreville: "+60",
  africabanjul: "0",
  asiatbilisi: "+240",
  europeberlin: "+120",
  europebusingen: "+120",
  africaaccra: "0",
  europegibraltar: "+120",
  europeathens: "+180",
  americadanmarkshavn: "0",
  americanuuk: "-120",
  americascoresbysund: "0",
  americathule: "-180",
  americagrenada: "-240",
  americaguadeloupe: "-240",
  pacificguam: "+600",
  americaguatemala: "-360",
  europeguernsey: "+60",
  africaconakry: "0",
  africabissau: "0",
  americaguyana: "-240",
  americaportauprince: "-240",
  europevatican: "+120",
  americategucigalpa: "-360",
  asiahongkong: "+480",
  europebudapest: "+120",
  atlanticreykjavik: "0",
  asiakolkata: "+330",
  asiajakarta: "+420",
  asiajayapura: "+540",
  asiamakassar: "+480",
  asiapontianak: "+420",
  asiatehran: "+270",
  asiabaghdad: "+180",
  europedublin: "+60",
  europeisleofman: "+60",
  asiajerusalem: "+180",
  europerome: "+120",
  americajamaica: "-300",
  asiatokyo: "+540",
  europejersey: "+60",
  asiaamman: "+180",
  asiaalmaty: "+360",
  asiaaqtau: "+300",
  asiaaqtobe: "+300",
  asiaatyrau: "+300",
  asiaoral: "+300",
  asiaqostanay: "+360",
  asiaqyzylorda: "+300",
  africanairobi: "+180",
  pacificenderbury: "+780",
  pacifickiritimati: "+840",
  pacifictarawa: "+720",
  asiapyongyang: "+540",
  asiaseoul: "+540",
  asiakuwait: "+180",
  asiabishkek: "+360",
  asiavientiane: "+420",
  europeriga: "+180",
  asiabeirut: "+180",
  africamaseru: "+120",
  africamonrovia: "0",
  africatripoli: "+120",
  europevaduz: "+120",
  europevilnius: "+180",
  europeluxembourg: "+120",
  asiamacau: "+480",
  europeskopje: "+120",
  indianantananarivo: "+180",
  africablantyre: "+120",
  asiakualalumpur: "+480",
  asiakuching: "+480",
  indianmaldives: "+300",
  africabamako: "0",
  europemalta: "+120",
  pacifickwajalein: "+720",
  pacificmajuro: "+720",
  americamartinique: "-240",
  africanouakchott: "0",
  indianmauritius: "+240",
  indianmayotte: "+180",
  americabahiabanderas: "-300",
  americacancun: "-300",
  americachihuahua: "-360",
  americahermosillo: "-420",
  americamatamoros: "-300",
  americamazatlan: "-360",
  americamerida: "-300",
  americamexicocity: "-300",
  americamonterrey: "-300",
  americaojinaga: "-360",
  americatijuana: "-420",
  pacificchuuk: "+600",
  pacifickosrae: "+660",
  pacificpohnpei: "+660",
  europechisinau: "+180",
  europemonaco: "+120",
  asiachoibalsan: "+480",
  asiahovd: "+420",
  asiaulaanbaatar: "+480",
  europepodgorica: "+120",
  americamontserrat: "-240",
  africacasablanca: "+60",
  africamaputo: "+120",
  asiayangon: "+390",
  africawindhoek: "+120",
  pacificnauru: "+720",
  asiakathmandu: "+345",
  europeamsterdam: "+120",
  pacificnoumea: "+660",
  pacificauckland: "+720",
  pacificchatham: "+765",
  americamanagua: "-360",
  africaniamey: "+60",
  africalagos: "+60",
  pacificniue: "-660",
  pacificnorfolk: "+660",
  pacificsaipan: "+600",
  europeoslo: "+120",
  asiamuscat: "+240",
  asiakarachi: "+300",
  pacificpalau: "+540",
  asiagaza: "+180",
  asiahebron: "+180",
  americapanama: "-300",
  pacificbougainville: "+660",
  pacificportmoresby: "+600",
  americaasuncion: "-240",
  americalima: "-300",
  asiamanila: "+480",
  pacificpitcairn: "-480",
  europewarsaw: "+120",
  atlanticazores: "0",
  atlanticmadeira: "+60",
  europelisbon: "+60",
  americapuertorico: "-240",
  asiaqatar: "+180",
  europebucharest: "+180",
  asiaanadyr: "+720",
  asiabarnaul: "+420",
  asiachita: "+540",
  asiairkutsk: "+480",
  asiakamchatka: "+720",
  asiakhandyga: "+540",
  asiakrasnoyarsk: "+420",
  asiamagadan: "+660",
  asianovokuznetsk: "+420",
  asianovosibirsk: "+420",
  asiaomsk: "+360",
  asiasakhalin: "+660",
  asiasrednekolymsk: "+660",
  asiatomsk: "+420",
  asiaustnera: "+600",
  asiavladivostok: "+600",
  asiayakutsk: "+540",
  asiayekaterinburg: "+300",
  europeastrakhan: "+240",
  europekaliningrad: "+120",
  europekirov: "+180",
  europemoscow: "+180",
  europesamara: "+240",
  europesaratov: "+240",
  europeulyanovsk: "+240",
  europevolgograd: "+180",
  africakigali: "+120",
  indianreunion: "+240",
  americastbarthelemy: "-240",
  atlanticsthelena: "0",
  americastkitts: "-240",
  americastlucia: "-240",
  americamarigot: "-240",
  americamiquelon: "-120",
  americastvincent: "-240",
  pacificapia: "+780",
  europesanmarino: "+120",
  africasaotome: "0",
  asiariyadh: "+180",
  africadakar: "0",
  europebelgrade: "+120",
  indianmahe: "+240",
  africafreetown: "0",
  asiasingapore: "+480",
  americalowerprinces: "-240",
  europebratislava: "+120",
  europeljubljana: "+120",
  pacificguadalcanal: "+660",
  africamogadishu: "+180",
  africajohannesburg: "+120",
  atlanticsouthgeorgia: "-120",
  africajuba: "+120",
  africaceuta: "+120",
  atlanticcanary: "+60",
  europemadrid: "+120",
  asiacolombo: "+330",
  africakhartoum: "+120",
  americaparamaribo: "-180",
  arcticlongyearbyen: "+120",
  africambabane: "+120",
  europestockholm: "+120",
  europezurich: "+120",
  asiadamascus: "+180",
  asiataipei: "+480",
  asiadushanbe: "+300",
  africadaressalaam: "+180",
  asiabangkok: "+420",
  asiadili: "+540",
  africalome: "0",
  pacificfakaofo: "+780",
  pacifictongatapu: "+780",
  americaportofspain: "-240",
  africatunis: "+60",
  europeistanbul: "+180",
  asiaashgabat: "+300",
  americagrandturk: "-240",
  pacificfunafuti: "+720",
  africakampala: "+180",
  europekiev: "+180",
  europesimferopol: "+180",
  europeuzhgorod: "+180",
  europezaporozhye: "+180",
  asiadubai: "+240",
  europelondon: "+60",
  americaadak: "-540",
  americaanchorage: "-480",
  americaboise: "-360",
  americachicago: "-300",
  americadenver: "-360",
  americadetroit: "-240",
  americaindianaindianapolis: "-240",
  americaindianaknox: "-300",
  americaindianamarengo: "-240",
  americaindianapetersburg: "-240",
  americaindianatellcity: "-300",
  americaindianavevay: "-240",
  americaindianavincennes: "-240",
  americaindianawinamac: "-240",
  americajuneau: "-480",
  americakentuckylouisville: "-240",
  americakentuckymonticello: "-240",
  americalosangeles: "-420",
  americamenominee: "-300",
  americametlakatla: "-480",
  americanewyork: "-240",
  americanome: "-480",
  americanorthdakotabeulah: "-300",
  americanorthdakotacenter: "-300",
  americanorthdakotanewsalem: "-300",
  americaphoenix: "-420",
  americasitka: "-480",
  americayakutat: "-480",
  pacifichonolulu: "-600",
  pacificmidway: "-660",
  pacificwake: "+720",
  americamontevideo: "-180",
  asiasamarkand: "+300",
  asiatashkent: "+300",
  pacificefate: "+660",
  americacaracas: "-240",
  asiahochiminh: "+420",
  americatortola: "-240",
  americastthomas: "-240",
  pacificwallis: "+720",
  africaelaaiun: "+60",
  asiaaden: "+180",
  africalusaka: "+120",
  africaharare: "+120",
  europemariehamn: "+180"
};

function getSapisidhash() {
  class t {
    static hash(e, n) {
      const a = Object.assign(
        {
          msgFormat: "string",
          outFormat: "hex"
        },
        n
      );

      switch (a.msgFormat) {
        default:
        case "string":
          e = (function (t) {
            try {
              return new TextEncoder()
                .encode(t, "utf-8")
                .reduce((t, e) => t + String.fromCharCode(e), "");
            } catch (e) {
              return unescape(encodeURIComponent(t));
            }
          })(e);

          break;

        case "hex-bytes":
          e = (function (t) {
            const e = t.replace(" ", "");
            return "" == e
              ? ""
              : e
                  .match(/.{2}/g)
                  .map((t) => String.fromCharCode(parseInt(t, 16)))
                  .join("");
          })(e);
      }

      const i = [1518500249, 1859775393, 2400959708, 3395469782],
        o = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        r = (e += String.fromCharCode(128)).length / 4 + 2,
        s = Math.ceil(r / 16),
        c = new Array(s);

      for (let t = 0; t < s; t++) {
        c[t] = new Array(16);

        for (let n = 0; n < 16; n++)
          c[t][n] =
            (e.charCodeAt(64 * t + 4 * n + 0) << 24) |
            (e.charCodeAt(64 * t + 4 * n + 1) << 16) |
            (e.charCodeAt(64 * t + 4 * n + 2) << 8) |
            (e.charCodeAt(64 * t + 4 * n + 3) << 0);
      }

      (c[s - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
        (c[s - 1][14] = Math.floor(c[s - 1][14])),
        (c[s - 1][15] = (8 * (e.length - 1)) & 4294967295);

      for (let e = 0; e < s; e++) {
        const n = new Array(80);

        for (let t = 0; t < 16; t++) n[t] = c[e][t];

        for (let e = 16; e < 80; e++)
          n[e] = t.ROTL(n[e - 3] ^ n[e - 8] ^ n[e - 14] ^ n[e - 16], 1);

        let a = o[0],
          r = o[1],
          s = o[2],
          l = o[3],
          d = o[4];

        for (let e = 0; e < 80; e++) {
          const o = Math.floor(e / 20),
            c = (t.ROTL(a, 5) + t.f(o, r, s, l) + d + i[o] + n[e]) >>> 0;
          (d = l), (l = s), (s = t.ROTL(r, 30) >>> 0), (r = a), (a = c);
        }

        (o[0] = (o[0] + a) >>> 0),
          (o[1] = (o[1] + r) >>> 0),
          (o[2] = (o[2] + s) >>> 0),
          (o[3] = (o[3] + l) >>> 0),
          (o[4] = (o[4] + d) >>> 0);
      }

      for (let t = 0; t < o.length; t++)
        o[t] = ("00000000" + o[t].toString(16)).slice(-8);

      const l = "hex-w" == a.outFormat ? " " : "";
      return o.join(l);
    }

    static f(t, e, n, a) {
      switch (t) {
        case 0:
          return (e & n) ^ (~e & a);

        case 1:
        case 3:
          return e ^ n ^ a;

        case 2:
          return (e & n) ^ (e & a) ^ (n & a);
      }
    }

    static ROTL(t, e) {
      return (t << e) | (t >>> (32 - e));
    }
  }

  return (
    (e = Math.round(new Date() / 1e3)),
    (n = (function (t) {
      for (
        var e = t + "=",
          n = decodeURIComponent(document.cookie).split(";"),
          a = 0;
        a < n.length;
        a++
      ) {
        for (var i = n[a]; " " == i.charAt(0); ) i = i.substring(1);

        if (0 == i.indexOf(e)) return i.substring(e.length, i.length);
      }

      return "";
    })("SAPISID")),
    "SAPISIDHASH " + e + "_" + t.hash(e + " " + n + " https://www.youtube.com")
  );
  var e, n;
}

function appendv3Search() {
  $("body").append(
    '<script>const style = document.createElement(\'style\');\r\n  style.textContent = `.gsok_a{background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px}.gsok_a img{border:none;visibility:hidden}.gsst_a{display:inline-block}.gsst_a{cursor:pointer;padding:0 4px}.gsst_a:hover{text-decoration:none!important}.gsst_b{font-size:16px;padding:0 2px;position:relative;user-select:none;-webkit-user-select:none;white-space:nowrap}.gsst_e{opacity:0.55;}.gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e{opacity:0.72;}.gsst_a:active .gsst_e{opacity:1;}.gsst_f{background:white;text-align:left}.gsst_g{background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;box-shadow:0 2px 4px rgba(0,0,0,0.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.2);margin:-1px -3px;padding:0 6px}.gsst_h{background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px}.gsib_a{width:100%;padding:4px 6px 0}.gsib_a,.gsib_b{vertical-align:top}.gssb_c{border:0;position:absolute;z-index:989}.gssb_e{border:1px solid #ccc;border-top-color:#d9d9d9;box-shadow:0 2px 4px rgba(0,0,0,0.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.2);cursor:default}.gssb_f{visibility:hidden;white-space:nowrap}.gssb_k{border:0;display:block;position:absolute;top:0;z-index:988}.gsdd_a{border:none!important}a.gspqs_a{padding:0 3px 0 8px}.gspqs_b{color:#666;line-height:22px}.gspr_a{padding-right:1px}.gsq_a{padding:0}.gssb_a{padding:0 7px}.gssb_a,.gssb_a td{white-space:nowrap;overflow:hidden;line-height:22px}#gssb_b{font-size:11px;color:#36c;text-decoration:none}#gssb_b:hover{font-size:11px;color:#36c;text-decoration:underline}.gssb_g{text-align:center;padding:8px 0 7px;position:relative}.gssb_h{font-size:15px;height:28px;margin:0.2em;-webkit-appearance:button}.gssb_i{background:#eee}.gss_ifl{visibility:hidden;padding-left:5px}.gssb_i .gss_ifl{visibility:visible}a.gssb_j{font-size:13px;color:#36c;text-decoration:none;line-height:100%}a.gssb_j:hover{text-decoration:underline}.gssb_l{height:1px;background-color:#e5e5e5}.gssb_m{color:#000;background:#fff}.gsfe_a{border:1px solid #b9b9b9;border-top-color:#a0a0a0;box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1);-moz-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1);-webkit-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1);}.gsfe_b{border:1px solid #4d90fe;outline:none;box-shadow:inset 0px 1px 2px rgba(0,0,0,0.3);-moz-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.3);-webkit-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.3);}.gsfi{font-size:16px}.gsfs{font-size:16px}a.gssb_j{font-size:12px;color:#03c}.gssb_a,.gssb_a td{line-height:20px}.gssb_a{padding:0 6px}.gssb_c{z-index:2000000007}.gssb_i td{background:#eee}.gssb_k{z-index:2000000006}.gssb_l{margin:2px 0}.gsib_a{padding:0 4px}.gsok_a{padding:0}.gsok_a img{display:block}.gsfe_b{border:1px solid #1c62b9;box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);outline:none;}`;\r\n  document.head.append(style);\r\n\r\nfunction getRidOfUnicodeEscapeCharacters(x) {\r\n\r\nvar r = /\\\\u([\\d\\w]{4})/gi;\r\n\r\nreturn unescape(x.replace(r, function(numbergroup) {\r\n\treturn String.fromCharCode(parseInt(numbergroup, 16));\r\n}));\r\n\r\n}\r\n \r\n var searchsuggestiondata;\r\nfunction getSearch2(searchparameter) {\r\nvar xhttp = new XMLHttpRequest();\r\nxhttp.onreadystatechange = function() {\r\n    if (this.readyState == 4 && this.status == 200) {\r\n       // Typical action to be performed when the document is ready:\r\n       searchsuggestiondata = xhttp.responseText;\r\n    }\r\n};\r\n\r\n    var hl = (yt.config_.INNERTUBE_CONTEXT_HL).toLowerCase();\r\n    var gl = (yt.config_.INNERTUBE_CONTEXT_GL).toLowerCase();\r\n\r\nvar url = (`https://clients1.google.com/complete/search?client=youtube&hl=` + hl + `&gl=` + gl + `&sugexp=ytd4_arm_1&gs_rn=23&gs_ri=youtube&ds=yt&cp=5&gs_id=g&q=` + searchparameter + `&callback=google.sbox.p50&gs_gbg=KM7SGv5`);\r\nxhttp.open("GET", url, true);\r\nxhttp.send();\r\n\r\n}\r\n\r\n document.getElementById("masthead-search-terms").onmouseenter = function() {\r\n\r\n        document.getElementById("masthead-search-terms").setAttribute("class", document.getElementById("masthead-search-terms").getAttribute("class") + " gsfe_a");\r\n\t\ttry{document.querySelector(\'table.gstl_50\').classList.remove(\'hid\')}catch(err){}\r\n\r\n    }\r\n\r\n    document.getElementById("masthead-search-terms").onmouseleave = function() {\r\n\r\n        document.getElementById("masthead-search-terms").setAttribute("class", document.getElementById("masthead-search-terms").getAttribute("class").replace(" gsfe_a", ""));\r\n\t\ttry{document.querySelector(\'table.gstl_50\').classList.add(\'hid\')}catch(err){}\r\n\r\n    }\r\n\r\n    document.getElementById("masthead-search-terms").onclick = function() {\r\n\r\n        if (document.getElementById("masthead-search-terms").getAttribute("class").search("gsfe_b") == "-1") {\r\n\r\n        document.getElementById("masthead-search-terms").setAttribute("class", document.getElementById("masthead-search-terms").getAttribute("class") + " gsfe_b");\r\n\r\n        }\r\n\r\n    }\r\n\r\n    document.getElementById("masthead-search-terms").oncontextmenu = function() {\r\n\r\n        document.getElementById("masthead-search-terms").setAttribute("class", document.getElementById("masthead-search-terms").getAttribute("class") + " gsfe_b");\r\n\r\n    }\r\n\t\r\n\t\r\n\t\r\n    function injectSearchboxListener() {\r\n\r\n        var checkforclickclass = setInterval(function() {\r\n\r\n            if (document.getElementById("masthead-search-terms").getAttribute(\'class\').search("gsfe_b") != "-1") {\r\n\r\n                clearInterval(checkforclickclass);\r\n\r\n                injectListener();\r\n\r\n            }\r\n\r\n        }, 100);\r\n\r\n        function injectListener() {\r\n\r\n            function toggle(e) {\r\n\r\n                if (e.target.id !== \'masthead-search-terms\' && e.target.id !== \'masthead-search-term\') {\r\n\r\n                    document.getElementById("masthead-search-terms").setAttribute("class", document.getElementById("masthead-search-terms").getAttribute("class").replace("gsfe_b", ""));\r\n\r\n                }\r\n\r\n            }\r\n\r\n            window.addEventListener("click", toggle, false);\r\n            window.addEventListener("contextmenu", toggle, false);\r\n\r\n            var checkforfocusloss = setInterval(function() {\r\n\r\n                if (document.getElementById("masthead-search-terms").getAttribute("class").search("gsfe_b") == "-1") {\r\n\r\n                    clearInterval(checkforfocusloss);\r\n\r\n                    window.removeEventListener("click", toggle, false);\r\n                    window.removeEventListener("contextmenu", toggle, false);\r\n\r\n                }\r\n\r\n            }, 10);\r\n\r\n        }\r\n\r\n    }\r\n\r\n    var searchboxlistener = setInterval(injectSearchboxListener, 10);\r\n\r\n    function injectAutosuggestionListener() {\r\n\r\n        var waitformenuopen = setInterval(function() {\r\n\r\n          if (document.getElementsByClassName("gstl_50 gssb_c")[0] != undefined) {\r\n\r\n               clearInterval(waitformenuopen);\r\n\r\n              injectListener();\r\n\r\n          }\r\n\r\n        }, 10);\r\n\r\n        function injectListener() {\r\n\r\n            function toggle(e) {\r\n\r\n               if (e.target) {}\r\n\r\n            }\r\n\r\n        }\r\n\r\n    }\r\n\t\r\n\t\r\n\t\r\n\t    document.getElementById("masthead-search-term").oninput = function() {\r\n\r\n        if (document.getElementById("masthead-search-term").value != "") {\r\n\r\n            constructSearchSuggestions();\r\n\t\t\ttry{document.querySelector(\'table.gstl_50.hid\').classList.remove(\'hid\')}catch(err){}\r\n\r\n        }\r\n\t\t\r\n\t\telse {\r\n\t\t\ttry{document.querySelector(\'table.gstl_50:not(.hid)\').classList.add(\'hid\')}catch(err){}\r\n\t\t}\r\n\r\n    }\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t    function constructSearchSuggestions() {\r\n\r\n        var searchparameter = encodeURIComponent(document.getElementById("masthead-search-term").value.toString());\r\n\r\n        getSearch2(searchparameter);\r\n\r\n        var waitforsuggestiondataupdate = setInterval(function() {\r\n\r\n            if (searchsuggestiondata) {\r\n\r\n                clearInterval(waitforsuggestiondataupdate);\r\n\r\n                rest();\r\n\r\n            }\r\n\r\n        }, 10);\r\n\r\n        var presentationlis = (``);\r\n\r\n        function rest() {\r\n\r\n        try {\r\n\r\n        var sbseid = 0;\r\n\t\t\r\n\t\tString.prototype.replaceAll = function(search, replacement) {\r\n    var target = this;\r\n    return target.replace(new RegExp(search, \'g\'), replacement);\r\n};\r\n\r\n        for (var i = 0; i < searchsuggestiondata.split(",").length; i++) {\r\n\r\n            var ropmet = searchsuggestiondata.replace("google.sbox.p50 && google.sbox.p50", "").split(",")[i].replace("[", "").replaceAll(\'"\', \'\');\r\n\r\n            var tempor = getRidOfUnicodeEscapeCharacters(ropmet);\r\n\r\n            var value = document.getElementById("masthead-search-term").value.toString();\r\n\r\n            if (!tempor.startsWith(value)) {\r\n\r\n                continue;\r\n\r\n            }\r\n\t\t\t\r\n\t\t\telse {\r\n\r\n                var othertext = tempor.replace(value, "");\r\n\r\n                var appropiatedfinal = (value + `<b>` + othertext + `</b>`);\r\n\t\t\t\t\t\r\n\t\t\t\tpresentationlis += `<tr><td class="gssb_a gsfs" dir="ltr" style="text-align: left;"><div class="gsq_a"><table cellspacing="0" cellpadding="0" style="width: 100%;"><tbody><tr><td style="width: 100%;"><span>`+ appropiatedfinal +`</span></td></tr></tbody></table></div></td></tr>`;\r\n\r\n                sbseid++;\r\n\r\n            }\r\n        }\r\n\r\n\r\n\r\n        var widthattr = (document.getElementById("masthead-search-terms").getBoundingClientRect().width).toString();\r\n        var topattr = (document.getElementById("masthead-search-terms").getBoundingClientRect().top + 27).toString();\r\n        var leftattr = (document.getElementById("masthead-search-terms").getBoundingClientRect().left).toString();\r\n\r\n\t\tvar finalSearchSuggestionsTemplate = `<table cellspacing="0" cellpadding="0" class="gstl_50 gssb_c" style="width: `+ widthattr +`px;top: `+ topattr +`px;position: absolute;text-align: left;left: `+ leftattr +`px;" dir="ltr"><tbody><tr><td class="gssb_f"></td><td class="gssb_e" style="width: 100%;"><table cellspacing="0" cellpadding="0" class="gssb_m" style="width: 100%;"><tbody><tr><td class="gssb_a gsfs" dir="ltr" style="text-align: left;"><div class="gsq_a"><table cellspacing="0" cellpadding="0" style="width: 100%;"><tbody>`+ presentationlis +`</tbody></table>`;\r\n\r\n            if (document.getElementsByClassName("gstl_50 gssb_c")[0] != undefined) {\r\n\r\n                document.getElementsByClassName("gstl_50 gssb_c")[0].remove();\r\n\r\n            }\r\n\r\n\r\n\r\n\r\n        var htmlparser = new DOMParser().parseFromString(finalSearchSuggestionsTemplate, "text/html");\r\n\r\n        if (htmlparser.querySelector("td")) {\r\n\r\n        document.body.insertAdjacentHTML(\'beforeend\', finalSearchSuggestionsTemplate);\r\n\r\n        }\r\n\r\n        } catch(err) {\r\n\r\n            console.error(err);\r\n\r\n        }\r\n\r\n        }\r\n\r\n    }\r\n\t</script>'
  );
}

function createGb() {
  var t = document.createElement("div");
  t.setAttribute("id", "gb-temp-container"),
    document.querySelector("#body-container").prepend(t),
    (document.getElementById("gb-temp-container").outerHTML =
      '<style>#gb{font:13px/27px Arial,sans-serif;height:30px}#gbz,#gbg{position:absolute;white-space:nowrap;top:0;height:30px;z-index:1000}#gbz{left:0;padding-left:4px}#gbg{right:0;padding-right:5px}#gbs{background:transparent;position:absolute;top:-999px;visibility:hidden;z-index:998}.gbto #gbs{background:#fff}#gbx3,#gbx4{background-color:#2d2d2d;background-image:none;_background-image:none;background-position:0 -138px;background-repeat:repeat-x;border-bottom:1px solid #000;font-size:24px;height:29px;_height:30px;opacity:1;filter:alpha(opacity=100);position:absolute;top:0;width:100%;z-index:990}#gbx3{left:0}#gbx4{right:0}#gbb{position:relative}#gbbw{left:0;position:absolute;top:30px;width:100%}.gbtcb{position:absolute;visibility:hidden}#gbz .gbtcb{right:0}#gbg .gbtcb{left:0}.gbxx{display:none !important}.gbxo{opacity:0 !important;filter:alpha(opacity=0) !important}.gbm{position:absolute;z-index:999;top:-999px;visibility:hidden;text-align:left;border:1px solid #bebebe;background:#fff;-moz-box-shadow:-1px 1px 1px rgba(0,0,0,.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.gbrtl .gbm{-moz-box-shadow:1px 1px 1px rgba(0,0,0,.2)}.gbto .gbm,.gbto #gbs{top:29px;visibility:visible}#gbz .gbm,#gbz #gbs{left:0}#gbg .gbm,#gbg #gbs{right:0}.gbxms{background-color:#ccc;display:block;position:absolute;z-index:1;top:-1px;left:-2px;right:-2px;bottom:-2px;opacity:.4;-moz-border-radius:3px;filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=5);*opacity:1;*top:-2px;*left:-5px;*right:5px;*bottom:4px;-ms-filter:"progid:DXImageTransform.Microsoft.Blur(pixelradius=5)";opacity:1\0/;top:-4px\0/;left:-6px\0/;right:5px\0/;bottom:4px\0/}.gbma{position:relative;top:-1px;border-style:solid dashed dashed;border-color:transparent;border-top-color:#c0c0c0;display:-moz-inline-box;display:inline-block;font-size:0;height:0;line-height:0;width:0;border-width:3px 3px 0;padding-top:1px;left:4px}#gbztms1,#gbi4m1,#gbi4s,#gbi4t{zoom:1}.gbtc,.gbmc,.gbmcc{display:block;list-style:none;margin:0;padding:0}.gbmc{background:#fff;padding:10px 0;position:relative;z-index:2;zoom:1}.gbt{position:relative;display:-moz-inline-box;display:inline-block;line-height:27px;padding:0;vertical-align:top}.gbt{*display:inline}.gbto{box-shadow:0 2px 4px rgba(0,0,0,.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2)}.gbzt,.gbgt{cursor:pointer;display:block;text-decoration:none !important}span#gbg6,span#gbg4{cursor:default}.gbts{border-left:1px solid transparent;border-right:1px solid transparent;display:block;*display:inline-block;padding:0 5px;position:relative;z-index:1000}.gbts{*display:inline}.gbto .gbts{background:#fff;border-color:#bebebe;color:#36c;padding-bottom:1px;padding-top:2px}.gbz0l .gbts{color:#fff;font-weight:bold}.gbtsa{padding-right:9px}#gbz .gbzt,#gbz .gbgt,#gbg .gbgt{color:#ccc!important}.gbtb2{display:block;border-top:2px solid transparent}.gbto .gbzt .gbtb2,.gbto .gbgt .gbtb2{border-top-width:0}.gbtb .gbts{background:url(//ssl.gstatic.com/gb/images/b_8d5afc09.png);_background:url(//ssl.gstatic.com/gb/images/b8_3615d64d.png);background-position:-27px -22px;border:0;font-size:0;padding:29px 0 0;*padding:27px 0 0;width:1px}.gbzt-hvr,.gbzt:focus,.gbgt-hvr,.gbgt:focus{background-color:#4c4c4c;background-image:none;_background-image:none;background-position:0 -102px;background-repeat:repeat-x;outline:none;text-decoration:none !important}.gbpdjs .gbto .gbm{min-width:99%}.gbz0l .gbtb2{border-top-color:#dd4b39!important}#gbi4s,#gbi4s1{font-weight:bold}#gbg6.gbgt-hvr,#gbg6.gbgt:focus{background-color:transparent;background-image:none}.gbg4a{font-size:0;line-height:0}.gbg4a .gbts{padding:27px 5px 0;*padding:25px 5px 0}.gbto .gbg4a .gbts{padding:29px 5px 1px;*padding:27px 5px 1px}#gbi4i,#gbi4id{left:5px;border:0;height:24px;position:absolute;top:1px;width:24px}.gbto #gbi4i,.gbto #gbi4id{top:3px}.gbi4p{display:block;width:24px}#gbi4id{background-position:-44px -101px}#gbmpid{background-position:0 0}#gbmpi,#gbmpid{border:none;display:inline-block;height:48px;width:48px}#gbmpiw{display:inline-block;line-height:9px;padding-left:20px;margin-top:10px;position:relative}#gbmpi,#gbmpid,#gbmpiw{*display:inline}#gbg5{font-size:0}#gbgs5{padding:5px !important}.gbto #gbgs5{padding:7px 5px 6px !important}#gbi5{background:url(//ssl.gstatic.com/gb/images/b_8d5afc09.png);_background:url(//ssl.gstatic.com/gb/images/b8_3615d64d.png);background-position:0 0;display:block;font-size:0;height:17px;width:16px}.gbto #gbi5{background-position:-6px -22px}.gbn .gbmt,.gbn .gbmt:visited,.gbnd .gbmt,.gbnd .gbmt:visited{color:#dd8e27 !important}.gbf .gbmt,.gbf .gbmt:visited{color:#900 !important}.gbmt,.gbml1,.gbmlb,.gbmt:visited,.gbml1:visited,.gbmlb:visited{color:#36c !important;text-decoration:none !important}.gbmt,.gbmt:visited{display:block}.gbml1,.gbmlb,.gbml1:visited,.gbmlb:visited{display:inline-block;margin:0 10px}.gbml1,.gbmlb,.gbml1:visited,.gbmlb:visited{*display:inline}.gbml1,.gbml1:visited{padding:0 10px}.gbml1-hvr,.gbml1:focus{outline:none;text-decoration:underline !important}#gbpm .gbml1{display:inline;margin:0;padding:0;white-space:nowrap}.gbmlb,.gbmlb:visited{line-height:27px}.gbmlb-hvr,.gbmlb:focus{outline:none;text-decoration:underline !important}.gbmlbw{color:#ccc;margin:0 10px}.gbmt{padding:0 20px}.gbmt-hvr,.gbmt:focus{background:#eee;cursor:pointer;outline:0 solid black;text-decoration:none !important}.gbm0l,.gbm0l:visited{color:#000 !important;font-weight:bold}.gbmh{border-top:1px solid #bebebe;font-size:0;margin:10px 0}#gbd4 .gbmc{background:#f5f5f5;padding-top:0}#gbd4 .gbsbic::-webkit-scrollbar-track:vertical{background-color:#f5f5f5;margin-top:2px}#gbmpdv{background:#fff;border-bottom:1px solid #bebebe;-moz-box-shadow:0 2px 4px rgba(0,0,0,.12);-o-box-shadow:0 2px 4px rgba(0,0,0,.12);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12);box-shadow:0 2px 4px rgba(0,0,0,.12);position:relative;z-index:1}#gbd4 .gbmh{margin:0}.gbmtc{padding:0;margin:0;line-height:27px}.GBMCC:last-child:after,#GBMPAL:last-child:after{content:\'\0A\0A\';white-space:pre;position:absolute}#gbmps{*zoom:1}#gbd4 .gbpc,#gbmpas .gbmt{line-height:17px}#gbd4 .gbpgs .gbmtc{line-height:27px}#gbd4 .gbmtc{border-bottom:1px solid #bebebe}#gbd4 .gbpc{display:inline-block;margin:16px 0 10px;padding-right:50px;vertical-align:top}#gbd4 .gbpc{*display:inline}.gbpc .gbps,.gbpc .gbps2{display:block;margin:0 20px}#gbmplp.gbps{margin:0 10px}.gbpc .gbps{color:#000;font-weight:bold}.gbpc .gbpd{margin-bottom:5px}.gbpd .gbmt,.gbpd .gbps{color:#666 !important}.gbpd .gbmt{opacity:.4;filter:alpha(opacity=40)}.gbps2{color:#666;display:block}.gbp0{display:none}.gbp0 .gbps2{font-weight:bold}#gbd4 .gbmcc{margin-top:5px}.gbpmc{background:#fef9db}.gbpmc .gbmt{padding:10px 20px}#gbpm{*border-collapse:collapse;border-spacing:0;margin:0;white-space:normal}#gbpm .gbmt{border-top:none;color:#000 !important;font:11px Arial,sans-serif}#gbpms{*white-space:nowrap}.gbpms2{font-weight:bold;white-space:nowrap}#gbmpal{*border-collapse:collapse;border-spacing:0;margin:0;white-space:nowrap;width:100%}.gbmpala,.gbmpalb{font:13px Arial,sans-serif;line-height:27px;padding:10px 20px 0;white-space:nowrap}.gbmpala{padding-left:0;text-align:left}.gbmpalb{padding-right:0;text-align:right}#gbmpasb .gbps{color:#000}#gbmpal .gbqfbb{margin:0 20px}.gbp0 .gbps{*display:inline}.gbiba{margin:8px 20px 10px}.gbmpiaw{display:inline-block;padding-right:10px;margin-bottom:6px;margin-top:10px}.gbxv{visibility:hidden}.gbmpiaa{display:block;margin-top:10px}.gbmpia{border:none;display:block;height:48px;width:48px}.gbmpnw{display:inline-block;height:auto;margin:10px 0;vertical-align:top}.gbqfb,.gbqfba,.gbqfbb{-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;cursor:default !important;display:inline-block;font-weight:bold;height:29px;line-height:29px;min-width:54px;*min-width:70px;padding:0 8px;text-align:center;text-decoration:none !important;-moz-user-select:none;-webkit-user-select:none}.gbqfb:focus,.gbqfba:focus,.gbqfbb:focus{border:1px solid #4d90fe;-moz-box-shadow:inset 0 0 0 1px rgba(255,255,255,.5);-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,.5);box-shadow:inset 0 0 0 1px rgba(255,255,255,.5);outline:none}#gbqfb.gbqfb-no-focus{border:1px solid #3079ed;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none}.gbqfb-hvr:focus,.gbqfba-hvr:focus,.gbqfbb-hvr:focus{-webkit-box-shadow:inset 0 0 0 1px #fff,0 1px 1px rgba(0,0,0,.1);-moz-box-shadow:inset 0 0 0 1px #fff,0 1px 1px rgba(0,0,0,.1);box-shadow:inset 0 0 0 1px #fff,0 1px 1px rgba(0,0,0,.1)}.gbqfb-hvr,.gbqfba-hvr,.gbqfbb-hvr{-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);-moz-box-shadow:0 1px 1px rgba(0,0,0,.1);box-shadow:0 1px 1px rgba(0,0,0,.1)}.gbqfb::-moz-focus-inner,.gbqfba::-moz-focus-inner,.gbqfbb::-moz-focus-inner{border:0}.gbqfba,.gbqfbb{border:1px solid #dcdcdc;border-color:rgba(0,0,0,.1);color:#444 !important;font-size:11px}.gbqfb{background-color:#4d90fe;background-image:-webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#4787ed));background-image:-webkit-linear-gradient(top,#4d90fe,#4787ed);background-image:-moz-linear-gradient(top,#4d90fe,#4787ed);background-image:-ms-linear-gradient(top,#4d90fe,#4787ed);background-image:-o-linear-gradient(top,#4d90fe,#4787ed);background-image:linear-gradient(top,#4d90fe,#4787ed);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#4d90fe\',EndColorStr=\'#4787ed\');border:1px solid #3079ed;color:#fff !important}.gbqfb-hvr,.gbqfb-hvr:focus{border-color:#2f5bb7;background-color:#357ae8;background-image:-webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#357ae8));background-image:-webkit-linear-gradient(top,#4d90fe,#357ae8);background-image:-moz-linear-gradient(top,#4d90fe,#357ae8);background-image:-ms-linear-gradient(top,#4d90fe,#357ae8);background-image:-o-linear-gradient(top,#4d90fe,#357ae8);background-image:linear-gradient(top,#4d90fe,#357ae8)}.gbqfb:active{-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.3);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.3);box-shadow:inset 0 1px 2px rgba(0,0,0,.3)}.gbqfba{background-color:#f5f5f5;background-image:-webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:linear-gradient(top,#f5f5f5,#f1f1f1);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#f5f5f5\',EndColorStr=\'#f1f1f1\')}.gbqfba-hvr,.gbqfba-hvr:active{background-color:#f8f8f8;background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-o-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:linear-gradient(top,#f8f8f8,#f1f1f1);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#f8f8f8\',EndColorStr=\'#f1f1f1\')}.gbqfbb{background-color:#fff;background-image:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#fbfbfb));background-image:-webkit-linear-gradient(top,#fff,#fbfbfb);background-image:-moz-linear-gradient(top,#fff,#fbfbfb);background-image:-ms-linear-gradient(top,#fff,#fbfbfb);background-image:-o-linear-gradient(top,#fff,#fbfbfb);background-image:linear-gradient(top,#fff,#fbfbfb);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#ffffff\',EndColorStr=\'#fbfbfb\')}.gbqfbb-hvr,.gbqfbb-hvr:active{background-color:#fff;background-image:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#f8f8f8));background-image:-webkit-linear-gradient(top,#fff,#f8f8f8);background-image:-moz-linear-gradient(top,#fff,#f8f8f8);background-image:-ms-linear-gradient(top,#fff,#f8f8f8);background-image:-o-linear-gradient(top,#fff,#f8f8f8);background-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#ffffff\',EndColorStr=\'#f8f8f8\')}.gbqfba-hvr,.gbqfba-hvr:active,.gbqfbb-hvr,.gbqfbb-hvr:active{border-color:#c6c6c6;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);-moz-box-shadow:0 1px 1px rgba(0,0,0,.1);box-shadow:0 1px 1px rgba(0,0,0,.1);color:#222 !important}.gbqfba:active,.gbqfbb:active{-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}#gbmpas{max-height:220px}#gbmm{max-height:530px}.gbsb{-webkit-box-sizing:border-box;display:block;position:relative;*zoom:1}.gbsbic{overflow:auto}.gbsbis .gbsbt,.gbsbis .gbsbb{-webkit-mask-box-image:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(0,0,0,.1)),color-stop(.5,rgba(0,0,0,.8)),color-stop(1,rgba(0,0,0,.1)));left:0;margin-right:0;opacity:0;position:absolute;width:100%}.gbsb .gbsbt:after,.gbsb .gbsbb:after{content:"";display:block;height:0;left:0;position:absolute;width:100%}.gbsbis .gbsbt{background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.2)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.2),rgba(0,0,0,0));background-image:-moz-linear-gradient(top,rgba(0,0,0,.2),rgba(0,0,0,0));background-image:-ms-linear-gradient(top,rgba(0,0,0,.2),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.2),rgba(0,0,0,0));background-image:linear-gradient(top,rgba(0,0,0,.2),rgba(0,0,0,0));height:6px;top:0}.gbsb .gbsbt:after{border-top:1px solid #ebebeb;border-color:rgba(0,0,0,.3);top:0}.gbsb .gbsbb{-webkit-mask-box-image:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(0,0,0,.1)),color-stop(.5,rgba(0,0,0,.8)),color-stop(1,rgba(0,0,0,.1)));background:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.2)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.2),rgba(0,0,0,0));background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.2),rgba(0,0,0,0));background-image:-ms-linear-gradient(bottom,rgba(0,0,0,.2),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.2),rgba(0,0,0,0));background-image:linear-gradient(bottom,rgba(0,0,0,.2),rgba(0,0,0,0));bottom:0;height:4px}.gbsb .gbsbb:after{border-bottom:1px solid #ebebeb;border-color:rgba(0,0,0,.3);bottom:0}#gb{height:30px !important}#gbu{display:none}</style>\n\n<div id="gb"><script>window.gbar&&gbar.eli&&gbar.eli()</script><div id="gbw"><div id="gbz"><span class="gbtcb"></span><ol id="gbzc" class="gbtc"><li class="gbt"><a target="_blank" onclick="gbar.qs(this);gbar.logger.il(1,{t:1});" class="gbzt" id="gb_1" href="https://www.google.com/webhp?hl=en&amp;tab=yw"><span class="gbtb2"></span><span class="gbts">Search</span></a></li><li class="gbt"><a target="_blank" onclick="gbar.qs(this);gbar.logger.il(1,{t:2});" class="gbzt" id="gb_2" href="https://www.google.com/imghp?hl=en&amp;tab=yi"><span class="gbtb2"></span><span class="gbts">Images</span></a></li><li class="gbt"><a target="_blank" onclick="gbar.qs(this);gbar.logger.il(1,{t:8});" class="gbzt" id="gb_8" href="https://maps.google.com/maps?hl=en&amp;tab=yl"><span class="gbtb2"></span><span class="gbts">Maps</span></a></li><li class="gbt"><a target="_blank" onclick="gbar.logger.il(1,{t:78});" class="gbzt" id="gb_78" href="https://play.google.com/?hl=en&amp;tab=y8"><span class="gbtb2"></span><span class="gbts">Play</span></a></li><li class="gbt"><a target="_blank" onclick="gbar.logger.il(1,{t:36});" class="gbzt gbz0l gbp1" id="gb_36" href="https://www.youtube.com/?tab=yy"><span class="gbtb2"></span><span class="gbts">YouTube</span></a></li><li class="gbt"><a target="_blank" onclick="gbar.logger.il(1,{t:5});" class="gbzt" id="gb_5" href="https://news.google.com/nwshp?hl=en&amp;tab=yn"><span class="gbtb2"></span><span class="gbts">News</span></a></li><li class="gbt"><a target="_blank" onclick="gbar.logger.il(1,{t:23});" class="gbzt" id="gb_23" href="https://mail.google.com/mail/?tab=ym"><span class="gbtb2"></span><span class="gbts">Gmail</span></a></li><li class="gbt"><a target="_blank" onclick="gbar.logger.il(1,{t:25});" class="gbzt" id="gb_25" href="https://docs.google.com/?tab=yo"><span class="gbtb2"></span><span class="gbts">Documents</span></a></li><li class="gbt"><a class="gbgt" id="gbztm" href="https://www.google.com/intl/en/options/" onclick="gbar.tg(event,this)" aria-haspopup="true" aria-owns="gbd"><span class="gbtb2"></span><span id="gbztms" class="gbts gbtsa"><span id="gbztms1">' +
      v3.UIMSG[v3.nationIndex].GBAR_MORE +
      '</span><span class="gbma"></span></span></a><div class="gbm" id="gbd" aria-owner="gbztm"><div id="gbmmb" class="gbmc gbsb gbsbis"><ol id="gbmm" class="gbmcc gbsbic"><li class="gbmtc"><a target="_blank" onclick="gbar.logger.il(1,{t:24});" class="gbmt" id="gb_24" href="https://www.google.com/calendar?tab=yc">Calendar</a></li><li class="gbmtc"><a target="_blank" onclick="gbar.qs(this);gbar.logger.il(1,{t:51});" class="gbmt" id="gb_51" href="https://translate.google.com/?hl=en&amp;tab=yT">Translate</a></li><li class="gbmtc"><a target="_blank" onclick="gbar.logger.il(1,{t:17});" class="gbmt" id="gb_17" href="https://www.google.com/mobile/?tab=yD">Mobile</a></li><li class="gbmtc"><a target="_blank" onclick="gbar.qs(this);gbar.logger.il(1,{t:10});" class="gbmt" id="gb_10" href="https://books.google.com/bkshp?hl=en&amp;tab=yp">Books</a></li><li class="gbmtc"><a target="_blank" onclick="gbar.logger.il(1,{t:172});" class="gbmt" id="gb_172" href="https://www.google.com/offers/home?utm_source=xsell&amp;utm_medium=products&amp;utm_campaign=sandbar&amp;tab=yG#!details">Offers</a></li><li class="gbmtc"><a target="_blank" onclick="gbar.logger.il(1,{t:212});" class="gbmt" id="gb_212" href="https://wallet.google.com/manage/?tab=ya">Wallet</a></li><li class="gbmtc"><a target="_blank" onclick="gbar.qs(this);gbar.logger.il(1,{t:6});" class="gbmt" id="gb_6" href="https://www.google.com/shopping?hl=en&amp;tab=yf">Shopping</a></li><li class="gbmtc"><a target="_blank" onclick="gbar.logger.il(1,{t:30});" class="gbmt" id="gb_30" href="https://www.blogger.com/?tab=yj">Blogger</a></li><li class="gbmtc"><a target="_blank" onclick="gbar.logger.il(1,{t:32});" class="gbmt" id="gb_32" href="https://www.google.com/reader/?hl=en&amp;tab=yq">Reader</a></li><li class="gbmtc"><a target="_blank" onclick="gbar.qs(this);gbar.logger.il(1,{t:27});" class="gbmt" id="gb_27" href="https://www.google.com/finance?tab=ye">Finance</a></li><li class="gbmtc"><a target="_blank" onclick="gbar.qs(this);gbar.logger.il(1,{t:31});" class="gbmt" id="gb_31" href="https://picasaweb.google.com/home?hl=en&amp;tab=yq">Photos</a></li><li class="gbmtc"><a target="_blank" onclick="gbar.qs(this);gbar.logger.il(1,{t:12});" class="gbmt" id="gb_12" href="https://video.google.com/?hl=en&amp;tab=yv">Videos</a></li><li class="gbmtc"><div class="gbmt gbmh"></div></li><li class="gbmtc"><a target="_blank" onclick="gbar.logger.il(1,{t:66});" href="https://www.google.com/intl/en/options/" class="gbmt">Even more »</a></li></ol><div class="gbsbt" style="opacity: 0;"></div><div class="gbsbb" style="opacity: 0;"></div></div></div></li></ol></div><div id="gbg"><h2 class="gbxx">Account Options</h2><span class="gbtcb"></span><ol class="gbtc"><li class="gbt"><a target="_top" href="https://www.youtube.com/profile" onclick="gbar.logger.il(9,{l:\'i\'})" id="gb_70" class="gbgt"><span class="gbtb2"></span><span id="gbgs4" class="gbts"><span id="gbi4s1">' +
      gbarname +
      '</span></span></a></li><li class="gbt gbtb"><span class="gbts"></span></li><li class="gbt"><a class="gbgt" id="gbg5" href="https://www.google.com/preferences?hl=en" title="Options" onclick="gbar.tg(event,this)" aria-haspopup="true" aria-owns="gbd5"><span class="gbtb2"></span><span id="gbgs5" class="gbts"><span id="gbi5"></span></span></a><div class="gbm" id="gbd5" aria-owner="gbg5"><div class="gbmc"><ol id="gbom" class="gbmcc"></ol></div></div></li></ol></div></div><div id="gbx3"></div><div id="gbx4"></div><script>window.gbar&&gbar.elp&&gbar.elp()</script></div>'),
    $("body").append(
      '<script>(function(){try{var e=!0,h=null,i=!1;var aa=function(a,b,c,d){d=d||{};d._sn=["cfg",b,c].join(".");window.gbar.logger.ml(a,d)};var k=window.gbar=window.gbar||{},n=window.gbar.i=window.gbar.i||{},ba;function _tvn(a,b){var c=parseInt(a,10);return isNaN(c)?b:c}function _tvf(a,b){var c=parseFloat(a);return isNaN(c)?b:c}function _tvv(a){return!!a}function p(a,b,c){(c||k)[a]=b}k.bv={n:_tvn("2",0),r:"r_gc.r_pw.",f:".41.",m:_tvn("1",1)};\r\nfunction ca(a,b,c){var d="on"+b;if(a.addEventListener)a.addEventListener(b,c,i);else if(a.attachEvent)a.attachEvent(d,c);else{var g=a[d];a[d]=function(){var a=g.apply(this,arguments),b=c.apply(this,arguments);return void 0==a?b:void 0==b?a:b&&a}}}var da=function(a){return function(){return k.bv.m==a}},ea=da(1),fa=da(2);p("sb",ea);p("kn",fa);n.a=_tvv;n.b=_tvf;n.c=_tvn;n.i=aa;var r=window.gbar.i.i;var s=function(){},t=function(){},u=function(a){var b=new Image,c=ga;b.onerror=b.onload=b.onabort=function(){try{delete ha[c]}catch(a){}};ha[c]=b;b.src=a;ga=c+1},ha=[],ga=0;p("logger",{il:t,ml:s,log:u});var v=window.gbar.logger;var w={},ia={},x=[],ja=function(a,b){x.push([a,b])},ka=function(a,b){w[a]=b},la=function(a){return a in w},z={},A=function(a,b){z[a]||(z[a]=[]);z[a].push(b)},B=function(a){A("m",a)},ma=function(a,b){var c=document.createElement("script");c.src=a;n.a("1")&&(c.async=e);n.a("")&&(c.defer=e);n.a("")&&(c.onerror=function(){c.onerror=h;s(Error("Bundle load failed: name="+(b||"UNK")+" url="+a))});(document.getElementById("xjsc")||\r\ndocument.body).appendChild(c)},E=function(a){for(var b=0,c;(c=x[b])&&!(c[0]==a);++b);c&&!c[1].l&&!c[1].s&&(c[1].s=e,C(2,a),c[1].url&&ma(c[1].url,a),c[1].libs&&D&&D(c[1].libs))},na=function(a){A("gc",a)},F=h,oa=function(a){F=a},C=function(a,b,c){if(F){a={t:a,b:b};if(c)for(var d in c)a[d]=c[d];try{F(a)}catch(g){}}};p("mdc",w);p("mdi",ia);p("bnc",x);p("qGC",na);p("qm",B);p("qd",z);p("lb",E);p("mcf",ka);p("bcf",ja);p("aq",A);p("mdd","");p("has",la);p("trh",oa);p("tev",C);if(n.a("1")){var G=n.a("1"),pa=n.a(""),qa=window.gapi={},ra=function(a,b){var c=function(){k.dgl(a,b)};G?B(c):(A("gl",c),E("gl"))},sa={},ta=function(a){for(var a=a.split(":"),b;(b=a.pop())&&sa[b];);return!b},D=function(a){function b(){for(var b=a.split(":"),d=0,g;g=b[d];++d)sa[g]=1;for(b=0;d=x[b];++b)d=d[1],(g=d.libs)&&!d.l&&d.i&&ta(g)&&d.i()}k.dgl(a,b)},H=window.___jsl={};H.h="m;/_/abc-static/_/js/gapi/__features__/rt=j/ver=EIvmC0XHjQM.en./sv=1/am=!9Ag6gGPKM9qZ6klcaQ/d=1";H.ms="https://apis.google.com";H.m="";\r\nH.l=[];G||x.push(["gl",{url:"//ssl.gstatic.com/gb/js/abc/glm_e7bb39a7e1a24581ff4f8d199678b1b9.js"}]);var ua={"export":"1",isPlusUser:pa,socialhost:""};w.gl=ua;p("load",ra,qa);p("dgl",ra);p("agl",ta);n.o=G};var va=n.b("0.01",1.0E-4),wa=0;\r\nfunction _mlToken(a,b){try{if(1>wa){wa++;var c,d=a,g=b||{},f=encodeURIComponent,j="es_plusone_gc_20120924.0_p0",l=["//www.google.com/gen_204?atyp=i&zx=",(new Date).getTime(),"&jexpid=",f("30316"),"&srcpg=",f("prop=36"),"&jsr=",Math.round(1/va),"&ogf=",k.bv.f,"&ogrp=",f(""),"&ogv=",f("1349924076.1350324392"),j?"&oggv="+f(j):"","&ogd=",f("com"),"&ogl=",f("en")];g._sn&&(g._sn="og."+g._sn);for(var m in g)l.push("&"),\r\nl.push(f(m)),l.push("="),l.push(f(g[m]));l.push("&emsg=");l.push(f(d.name+":"+d.message));var q=l.join("");xa(q)&&(q=q.substr(0,2E3));c=q;var y=window.gbar.logger._aem(a,c);u(y)}}catch(W){}}var xa=function(a){return 2E3<=a.length},ya=function(a,b){return b};function za(a){s=a;p("_itl",xa,v);p("_aem",ya,v);p("ml",s,v);a={};w.er=a}n.a("")?za(function(a){throw a;}):n.a("1")&&Math.random()<va&&za(_mlToken);var _E="left",J=function(a,b){var c=a.className;I(a,b)||(a.className+=(""!=c?" ":"")+b)},K=function(a,b){var c=a.className,d=RegExp("\\\\s?\\\\b"+b+"\\\\b");c&&c.match(d)&&(a.className=c.replace(d,""))},I=function(a,b){var c=RegExp("\\\\b"+b+"\\\\b"),d=a.className;return!(!d||!d.match(c))},Ba=function(a,b){I(a,b)?K(a,b):J(a,b)};p("ca",J);p("cr",K);p("cc",I);n.k=J;n.l=K;n.m=I;n.n=Ba;var Ea=["gb_71","gb_155"],L;function Fa(a){L=a}function Ga(a){var b=L&&!a.href.match(/.*\\/accounts\\/ClearSID[?]/)&&encodeURIComponent(L());b&&(a.href=a.href.replace(/([?&]continue=)[^&]*/,"$1"+b))}function Ha(a){window.gApplication&&(a.href=window.gApplication.getTabUrl(a.href))}function Ia(a){try{var b=(document.forms[0].q||"").value;b&&(a.href=a.href.replace(/([?&])q=[^&]*|$/,function(a,c){return(c||"&")+"q="+encodeURIComponent(b)}))}catch(c){r(c,"sb","pq")}}\r\nvar Ja=function(){for(var a=[],b=0,c;c=Ea[b];++b)(c=document.getElementById(c))&&a.push(c);return a},Ka=function(){var a=Ja();return 0<a.length?a[0]:h},La=function(){return document.getElementById("gb_70")},M={},N={},Ma={},O={},P=void 0,Ra=function(a,b){try{var c=document.getElementById("gb");J(c,"gbpdjs");Q();Na(document.getElementById("gb"))&&J(c,"gbrtl");if(b&&b.getAttribute){var d=b.getAttribute("aria-owns");if(d.length){var g=document.getElementById(d);if(g){var f=b.parentNode;if(P==d)P=void 0,\r\nK(f,"gbto");else{if(P){var j=document.getElementById(P);if(j&&j.getAttribute){var l=j.getAttribute("aria-owner");if(l.length){var m=document.getElementById(l);m&&m.parentNode&&K(m.parentNode,"gbto")}}}Oa(g)&&Pa(g);P=d;J(f,"gbto")}}}}B(function(){k.tg(a,b,e)});Qa(a)}catch(q){r(q,"sb","tg")}},Sa=function(a){B(function(){k.close(a)})},Ta=function(a){B(function(){k.rdd(a)})},Na=function(a){var b,c="direction",d=document.defaultView;d&&d.getComputedStyle?(a=d.getComputedStyle(a,""))&&(b=a[c]):b=a.currentStyle?\r\na.currentStyle[c]:a.style[c];return"rtl"==b},Va=function(a,b,c){if(a)try{var d=document.getElementById("gbd5");if(d){var g=d.firstChild,f=g.firstChild,j=document.createElement("li");j.className=b+" gbmtc";j.id=c;a.className="gbmt";j.appendChild(a);if(f.hasChildNodes()){for(var c=[["gbkc"],["gbf","gbe","gbn"],["gbkp"],["gbnd"]],d=0,l=f.childNodes.length,g=i,m=-1,q=0,y;y=c[q];q++){for(var W=0,Y;Y=y[W];W++){for(;d<l&&I(f.childNodes[d],Y);)d++;if(Y==b){f.insertBefore(j,f.childNodes[d]||h);g=e;break}}if(g){if(d+\r\n1<f.childNodes.length){var Aa=f.childNodes[d+1];!I(Aa.firstChild,"gbmh")&&!Ua(Aa,y)&&(m=d+1)}else if(0<=d-1){var Ca=f.childNodes[d-1];!I(Ca.firstChild,"gbmh")&&!Ua(Ca,y)&&(m=d)}break}0<d&&d+1<l&&d++}if(0<=m){var Z=document.createElement("li"),Da=document.createElement("div");Z.className="gbmtc";Da.className="gbmt gbmh";Z.appendChild(Da);f.insertBefore(Z,f.childNodes[m])}k.addHover&&k.addHover(a)}else f.appendChild(j)}}catch(pb){r(pb,"sb","al")}},Ua=function(a,b){for(var c=b.length,d=0;d<c;d++)if(I(a,\r\nb[d]))return e;return i},Wa=function(a,b,c){Va(a,b,c)},Xa=function(a,b){Va(a,"gbe",b)},Ya=function(){B(function(){k.pcm&&k.pcm()})},Za=function(){B(function(){k.pca&&k.pca()})},$a=function(a,b,c,d,g,f,j,l,m,q){B(function(){k.paa&&k.paa(a,b,c,d,g,f,j,l,m,q)})},ab=function(a,b){M[a]||(M[a]=[]);M[a].push(b)},bb=function(a,b){N[a]||(N[a]=[]);N[a].push(b)},cb=function(a,b){Ma[a]=b},db=function(a,b){O[a]||(O[a]=[]);O[a].push(b)},Qa=function(a){a.preventDefault&&a.preventDefault();a.returnValue=i;a.cancelBubble=\r\ne},R=h,Pa=function(a,b){Q();if(a){eb(a,"Opening&hellip;");S(a,e);var c="undefined"!=typeof b?b:1E4,d=function(){fb(a)};R=window.setTimeout(d,c)}},gb=function(a){Q();a&&(S(a,i),eb(a,""))},fb=function(a){try{Q();var b=a||document.getElementById(P);b&&(eb(b,"This service is currently unavailable.%1$sPlease try again later.","%1$s"),S(b,e))}catch(c){r(c,"sb","sdhe")}},eb=function(a,b,c){if(a&&b){var d=Oa(a);if(d){if(c){d.innerHTML="";for(var b=b.split(c),c=0,g;g=b[c];c++){var f=document.createElement("div");f.innerHTML=g;d.appendChild(f)}}else d.innerHTML=\r\nb;S(a,e)}}},S=function(a,b){var c=void 0!==b?b:e;c?J(a,"gbmsgo"):K(a,"gbmsgo")},Oa=function(a){for(var b=0,c;c=a.childNodes[b];b++)if(I(c,"gbmsg"))return c},Q=function(){R&&window.clearTimeout(R)},hb=function(a){var b="inner"+a,a="offset"+a;return window[b]?window[b]:document.documentElement&&document.documentElement[a]?document.documentElement[a]:0};p("so",Ka);p("sos",Ja);p("si",La);p("tg",Ra);p("close",Sa);p("rdd",Ta);p("addLink",Wa);p("addExtraLink",Xa);p("pcm",Ya);p("pca",Za);p("paa",$a);\r\np("ddld",Pa);p("ddrd",gb);p("dderr",fb);p("rtl",Na);p("bh",M);p("abh",ab);p("dh",N);p("adh",bb);p("ch",O);p("ach",db);p("eh",Ma);p("aeh",cb);ba=n.a("")?Ha:Ia;p("qs",ba);p("setContinueCb",Fa);p("pc",Ga);n.d=Qa;n.j=hb;var ib={};w.base=ib;x.push(["m",{url:"//ssl.gstatic.com/gb/js/sem_f351e68db94859519eb1e0e4aafcebc8.js"}]);k.sg={c:""};p("wg",{rg:{}});var jb={tiw:n.c("15000",0),tie:n.c("30000",0)};w.wg=jb;var kb={thi:n.c("10000",0),thp:n.c("180000",0),tho:n.c("5000",0),tet:n.b("0.5",0)};w.wm=kb;if(n.a("1")){var lb=n.a("");x.push(["gc",{auto:lb,url:"//ssl.gstatic.com/gb/js/abc/gci_91f30755d6a6b787dcc2a4062e6e9824.js",libs:"googleapis.client:plusone"}]);var mb={version:"gci_91f30755d6a6b787dcc2a4062e6e9824.js",index:"",lang:"en"};w.gc=mb;var nb=function(a){window.googleapis&&window.iframes?a&&a():(a&&na(a),E("gc"))};p("lGC",nb);n.a("1")&&p("lPWF",nb)};window.__PVT="";if(n.a("1")&&n.a("1")){var ob=function(a){nb(function(){A("pw",a);E("pw")})};p("lPW",ob);x.push(["pw",{url:"//ssl.gstatic.com/gb/js/abc/pwm_45f73e4df07a0e388b0fa1f3d30e7280.js"}]);var qb=[],rb=function(a){qb[0]=a},sb=function(a,b){var c=b||{};c._sn="pw";s(a,c)},tb={signed:qb,elog:sb,base:"https://plusone.google.com/u/0",loadTime:(new Date).getTime()};w.pw=tb;var ub=function(a,b){for(var c=b.split("."),d=function(){var b=arguments;a(function(){for(var a=k,d=0,f=c.length-1;d<f;++d)a=a[c[d]];a[c[d]].apply(a,b)})},g=k,f=0,j=c.length-\r\n1;f<j;++f)g=g[c[f]]=g[c[f]]||{};return g[c[f]]=d};ub(ob,"pw.clk");ub(ob,"pw.hvr");p("su",rb,k.pw)};var vb={J:1,L:2,da:3,C:4,X:5,Q:6,v:7,w:8,ha:9,W:10,P:11,A:12,V:13,z:14,T:15,S:16,fa:17,G:18,R:19,ga:20,ea:21,D:22,K:23,ja:24,ka:25,ia:26,H:27,g:28,B:29,u:30,ca:31,Z:32,$:33,N:34,O:35,ba:36,aa:37,Y:38,I:39,U:40,F:41,M:500};var wb=n.b("0.01",1.0E-4),xb=n.b("0.1",1),yb=i,zb=i;if(n.a("1")){var Ab=Math.random();Ab<=wb&&(yb=e);Ab<=xb&&(zb=e)}var T=vb;function Bb(){var a=0,b=function(b,d){n.a(d)&&(a|=b)};b(1,"");b(2,"");b(4,"");b(8,"");return a}\r\nfunction Cb(a,b){var c=wb,d=yb,g;g=34>=a?a<=T.z?a==T.v||a==T.w||a==T.A?i:e:a>=T.g&&a<=T.u?e:i:200<=a?e:i;g&&(c=xb,d=zb);if(d){d=encodeURIComponent;g="es_plusone_gc_20120924.0_p0";var f;k.rp?(f=k.rp(),f="-1"!=f?f:""):f="";c=["//www.google.com/gen_204?atyp=i&zx=",(new Date).getTime(),"&oge=",a,"&ogex=",d("30316"),"&ogf=",k.bv.f,"&ogp=",d("36"),"&ogrp=",d(f),"&ogsr=",Math.round(1/c),"&ogv=",d("1349924076.1350324392"),\r\ng?"&oggv="+d(g):"","&ogd=",d("com"),"&ogl=",d("en"),"&ogus=",Bb()];if(b){"ogw"in b&&(c.push("&ogw="+b.ogw),delete b.ogw);var j;g=b;f=[];for(j in g)0!=f.length&&f.push(","),f.push(j),f.push("."),f.push(g[j]);j=f.join("");""!=j&&(c.push("&ogad="),c.push(d(j)))}u(c.join(""))}}t=Cb;p("il",t,v);var Db={};w.il=Db;var Eb=function(a,b,c,d,g,f,j,l,m,q){B(function(){k.paa(a,b,c,d,g,f,j,l,m,q)})},Fb=function(){B(function(){k.prm()})},Gb=function(a){B(function(){k.spn(a)})},Hb=function(a){B(function(){k.sps(a)})},Ib=function(a){B(function(){k.spp(a)})},Jb={"27":"//ssl.gstatic.com/gb/images/silhouette_24.png","27":"//ssl.gstatic.com/gb/images/silhouette_24.png","27":"//ssl.gstatic.com/gb/images/silhouette_24.png"},Kb=function(a){return(a=Jb[a])||"//ssl.gstatic.com/gb/images/silhouette_24.png"},\r\nLb=function(){B(function(){k.spd()})};p("spn",Gb);p("spp",Ib);p("sps",Hb);p("spd",Lb);p("paa",Eb);p("prm",Fb);ab("gbd4",Fb);\r\nif(n.a("")){var Mb={d:n.a(""),e:"",sanw:n.a("1"),p:"//ssl.gstatic.com/gb/images/silhouette_96.png",cp:"1",xp:n.a("1"),mg:"%1$s (delegated)",md:"%1$s (default)",mh:"220",s:"1",pp:Kb,ppl:n.a(""),ppa:n.a(""),\r\nppm:"Google+ page"};w.prf=Mb};var U,Nb,V,Ob,X=0,Pb=function(a,b,c){if(a.indexOf)return a.indexOf(b,c);if(Array.indexOf)return Array.indexOf(a,b,c);for(c=c==h?0:0>c?Math.max(0,a.length+c):c;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},$=function(a,b){return-1==Pb(a,X)?(r(Error(X+"_"+b),"up","caa"),i):e},Rb=function(a,b){$([1,2],"r")&&(U[a]=U[a]||[],U[a].push(b),2==X&&window.setTimeout(function(){b(Qb(a))},0))},Sb=function(a,b,c){if($([1],"nap")&&c){for(var d=0;d<c.length;d++)Nb[c[d]]=e;k.up.spl(a,b,"nap",c)}},Tb=function(a,\r\nb,c){if($([1],"aop")&&c){if(V)for(var d in V)V[d]=V[d]&&-1!=Pb(c,d);else{V={};for(d=0;d<c.length;d++)V[c[d]]=e}k.up.spl(a,b,"aop",c)}},Ub=function(){try{if(X=2,!Ob){Ob=e;for(var a in U)for(var b=U[a],c=0;c<b.length;c++)try{b[c](Qb(a))}catch(d){r(d,"up","tp")}}}catch(g){r(g,"up","mtp")}},Qb=function(a){if($([2],"ssp")){var b=!Nb[a];V&&(b=b&&!!V[a]);return b}};Ob=i;U={};Nb={};V=h;\r\nvar X=1,Vb=function(){try{return"object"==typeof window.localStorage}catch(a){return i}},Wb=function(a){return a&&a.style&&a.style.la&&"undefined"!=typeof a.load},Xb=function(a,b,c,d){try{d||(b="og-up-"+b),Vb()?window.localStorage.setItem(b,c):Wb(a)&&(a.setAttribute(b,c),a.save(a.id))}catch(g){r(g,"up","spd")}},Yb=function(a,b,c){try{c||(b="og-up-"+b);if(Vb())return window.localStorage.getItem(b);if(Wb(a))return a.load(a.id),a.getAttribute(b)}catch(d){r(d,"up","gpd")}return""},Zb=function(a,b,c){a.addEventListener?\r\na.addEventListener(b,c,i):a.attachEvent&&a.attachEvent("on"+b,c)};p("up",{r:Rb,nap:Sb,aop:Tb,tp:Ub,ssp:Qb,spd:Xb,gpd:Yb,aeh:Zb});var $b=function(a,b){a[b]=function(c){var d=arguments;k.qm(function(){a[b].apply(this,d)})}};$b(k.up,"sl");$b(k.up,"si");$b(k.up,"spl");k.mcf("up",{sp:n.b("0.01",1)});function ac(){function a(){for(var b;(b=f[j++])&&!("m"==b[0]||b[1].auto););b&&(C(2,b[0]),b[1].url&&ma(b[1].url,b[0]),b[1].libs&&D&&D(b[1].libs));j<f.length&&setTimeout(a,0)}function b(){0<g--?setTimeout(b,0):a()}var c=n.a("1"),d=n.a(""),g=3,f=x,j=0,l=window.gbarOnReady;if(l)try{l()}catch(m){r(m,"ml","or")}d?p("ldb",a):c?ca(window,"load",b):b()}p("rdl",ac);}catch(e){window.gbar&&gbar.logger&&gbar.logger.ml(e,{"_sn":"cfg.init"});}})();\r\n(function(){try{var a=window.gbar;a.mcf("pm",{p:""});}catch(e){window.gbar&&gbar.logger&&gbar.logger.ml(e,{"_sn":"cfg.init"});}})();\r\n(function(){try{var a=window.gbar;a.mcf("mm",{s:"1"});}catch(e){window.gbar&&gbar.logger&&gbar.logger.ml(e,{"_sn":"cfg.init"});}})();\r\n(function(){try{window.gbar.rdl();}catch(e){window.gbar&&gbar.logger&&gbar.logger.ml(e,{"_sn":"cfg.init"});}})();\r\n</script>'
    );
}

function html5PlayerTemplate() {
  $("body").append(
    "<script>function isHd720(el) {try{if(el.quality == 'hd720') return true; else return false;} catch(err){return false;}}\r\nvar meta = document.createElement('meta');\r\nmeta.setAttribute('class', 'ihvd');\r\ntry{meta.setAttribute('isHDVideo', ytInitialPlayerResponse.streamingData.adaptiveFormats.find(isHd720) != undefined);}catch(err){meta.setAttribute('isHDVideo', false)}\r\ndocument.head.appendChild(meta);</script>"
  );
  var t = "";
  return (
    "true" != document.querySelector(".ihvd").getAttribute("ishdvideo") ||
      ("hd720" != getCookie("vtpc") &&
        "hd1080" != getCookie("vtpc") &&
        "hd1440" != getCookie("vtpc")) ||
      (t = '<div class="ytp-settings-hd-quality-badge"></div>'),
    '<div class="html5-video-player el-detailpage ps-null hide-info-bar autohide-controls-fullscreen autominimize-progress-bar-non-aspect iv-module-created iv-module-loaded endscreen-created playing-mode ytp-block-autohide" style=""><div class="html5-video-container"><div class="html5-video-content"></div><div class="html5-storyboard-framepreview" aria-hidden="true" style="display: none;"><img class="html5-storyboard-framepreview-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></div><canvas width="60" height="60" class="html5-video-loader html5-center-overlay ytp-scalable-icon-grow" style="display: block; transform: scale(0.5);"></canvas><div class="ytp-thumbnail html5-stop-propagation"></div><div class="html5-bezel html5-center-overlay" aria-hidden="true" style="display: none;"><div></div></div></div><div class="html5-video-info-panel"><span class="html5-video-info-panel-close" role="button" title="close">[x]</span><div class="html5-video-info-panel-content"><table class="html5-video-info-table"><tr><th>Video ID:</th><td></td></tr><tr><th>Dimensions:</th><td></td></tr><tr><th>Resolution:</th><td></td></tr><tr><th>Volume:</th><td></td></tr><tr><th>Stream Type:</th><td></td></tr><tr><th>CPN:</th><td></td></tr><tr><th>Mime Type:</th><td></td></tr><tr><th>DASH:</th><td></td></tr><tr><th>Protected:</th><td></td></tr><tr><th>Bandwidth:</th><td><span><span><span></span></span></span><span></span></td></tr></table><table class="html5-video-info-table html5-video-element-info-table"><tr><th>Decoded Frames</th><th>Dropped Frames</th><th>Parsed Frames</th><th>Presented Frames</th></tr><tr><td></td><td></td><td></td><td></td></tr><tr><th>Video Bytes Decoded</th><th>Audio Bytes Decoded</th><th>Painted Frames</th><th>Paint Delay</th></tr><tr><td></td><td></td><td></td><td></td></tr></table></div></div><div class="html5-video-controls"><div class="ytp-progress-bar-container" style="height: 8px;"><div class="html5-storyboard" aria-hidden="true" style="display: none;"><div class="html5-storyboard-filmstrip"></div><div class="html5-storyboard-lens"><img class="html5-storyboard-lens-thumbnail" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span class="html5-storyboard-lens-timestamp"></span></div></div><div class="html5-progress-bar ytp-force-transform red" tabindex="6250" role="slider" aria-label="Seek slider" aria-valuemin="0" aria-valuemax="0" aria-valuenow="NaN" aria-valuetext="NaN of 0 seconds"><div class="ytp-progress-bar-padding"></div><div class="ytp-progress-list"><div class="ytp-unloaded-progress"></div><div class="ytp-play-progress" style="left: 0%; transform: scaleX(0);"></div><div class="ytp-load-progress" style="left: 0%; transform: scaleX(0);"></div><div class="ytp-spacecast-load-progress"></div><div class="ytp-clip-start-exclude" style="width: 0%;"></div><div class="ytp-clip-end-exclude" style="left: 100%; width: 0%;"></div><div class="html5-ad-progress-list"></div><div class="ytp-marker-crenellation-list"></div><div class="ytp-marker-progress-list"></div></div><div class="ytp-scrubber-pull-indicator" style="left: 846px;"></div><div class="html5-scrubber-button" style="height: 6px; transform-origin: 0% center 0px; left: 8px;"></div></div><div class="ytp-bound-time-left">0:00</div><div class="ytp-bound-time-right">' +
      secondsToHms(authinfo.VIDEO_LENGTH) +
      '</div><div class="ytp-clip-start html5-clip-marker yt-uix-tooltip" draggable="true" style="left: 0%;"></div><div class="ytp-clip-end html5-clip-marker yt-uix-tooltip" draggable="true" style="left: 100%;"></div><div class="ytp-progress-tooltip" aria-hidden="true" style="display: none;"><div class="ytp-progress-tooltip-thumbnail-container"><div class="ytp-progress-tooltip-thumbnail"></div></div><div class="ytp-progress-tooltip-text-container"><div class="ytp-progress-tooltip-text"></div></div><div class="ytp-progress-tooltip-timestamp-container"><div class="ytp-progress-tooltip-timestamp"></div></div><div class="ytp-progress-tooltip-arrow"></div></div></div><div class="html5-player-chrome"><div class="ytp-button ytp-button-play" role="button" tabindex="6000" aria-label="Play"></div><div class="ytp-button ytp-button-prev" role="button" aria-label="Previous" tabindex="6050" aria-hidden="true" style="display: none;"></div><div class="ytp-button ytp-button-next" role="button" aria-label="Next" tabindex="6051" aria-hidden="true" style="display: none;"></div><span class="ytp-volume-hover-area" draggable="true"><div class="ytp-volume-control" draggable="true"><div class="ytp-button ytp-button-volume" role="button" tabindex="6100" aria-label="mute toggle" data-value="max"></div><div class="ytp-volume-panel" role="slider" aria-valuemin="0" aria-valuemax="100" tabindex="6200" aria-valuenow="100" aria-valuetext="100% volume"><div class="ytp-volume-slider" draggable="true"><div class="ytp-volume-slider-foreground" style="left: 49px;"></div></div></div></div><div class="ytp-time-display html5-control" aria-hidden="true"><span class="ytp-time-current">0:00</span><span class="ytp-time-separator"> / </span><span class="ytp-time-duration">' +
      secondsToHms(authinfo.VIDEO_LENGTH) +
      '</span><span class="ytp-time-live-badge">Live</span></div></span><div class="ytp-button ytp-button-fullscreen-enter" role="button" tabindex="6900" aria-label="Full screen" style="display: inline-block;"></div><div class="ytp-button ytp-size-toggle-large" role="button" aria-label="Theater mode" tabindex="6800" style="display: inline-block;"></div><button class="ytp-v3teather ytp-button" title="Cinema mode" aria-label="Cinema mode"></button><button class="ytp-v3normal ytp-button" title="Normal mode" aria-label="Normal mode"></button><div class="ytp-button ytp-button-watch-on-youtube" role="button" aria-label="Watch on YouTube.com" tabindex="6700" aria-hidden="true" style="display: none;"></div><div class="ytp-button ytp-settings-button" role="button" aria-label="Settings" tabindex="6600" aria-haspopup="true" id="settings_button">' +
      t +
      '<div class=""></div></div><div class="ytp-button ytp-button-playlist" role="button" aria-label="Playlist" tabindex="6400"></div><div class="ytp-button ytp-button-watch-later" role="button" aria-label="' +
      v3.UIMSG[v3.nationIndex].GUIDE_WL +
      '" tabindex="6300"></div></div><div class="ytp-menu-container" tabindex="-1" role="menu" aria-labelledby="settings_button" aria-hidden="true" style="display: none;"><div class="ytp-menu"><div class="ytp-menu-content"><div class="ytp-menu-row"><div class="ytp-menu-cell">Speed</div></div><div class="ytp-menu-row"><div class="ytp-menu-cell"><div class="ytp-drop-down" aria-label="Speed" style="min-width: 100px;"><div class="ytp-drop-down-menu" tabindex="-1" role="listbox" aria-hidden="true" style="display: none; bottom: -1px;"><div class="ytp-drop-down-menu-content"><div class="ytp-button ytp-drop-down-menu-button" role="option" aria-checked="false" tabindex="2300"><div class="ytp-drop-down-menu-button-check"></div>0.25</div><div class="ytp-button ytp-drop-down-menu-button" role="option" aria-checked="false" tabindex="2300"><div class="ytp-drop-down-menu-button-check"></div>0.5</div><div class="ytp-button ytp-drop-down-menu-button ytp-drop-down-menu-button-selected ytp-drop-down-menu-button-checked" role="option" aria-checked="true" tabindex="2300"><div class="ytp-drop-down-menu-button-check"></div>Normal</div><div class="ytp-button ytp-drop-down-menu-button" role="option" aria-checked="false" tabindex="2300"><div class="ytp-drop-down-menu-button-check"></div>1.25</div><div class="ytp-button ytp-drop-down-menu-button" role="option" aria-checked="false" tabindex="2300"><div class="ytp-drop-down-menu-button-check"></div>1.5</div><div class="ytp-button ytp-drop-down-menu-button" role="option" aria-checked="false" tabindex="2300"><div class="ytp-drop-down-menu-button-check"></div>2</div></div></div><div class="ytp-button ytp-drop-down-label" role="button" tabindex="2301"><div class="ytp-drop-down-label-content">Normal</div><div class="ytp-drop-down-arrow"></div></div></div></div></div></div></div></div></div><div class="ytp-clickguard"></div><div class="ytp-dialog-holder" aria-hidden="true" style="display: none;"></div><img class="html5-watermark ytp-scalable-icon-shrink hid" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Watermark"><div class="html5-info-bar ytp-can-share"><div class="html5-title"><div class="html5-like-dislike-buttons hid"></div><div class="ytp-action-buttons"><div class="ytp-button ytp-button-info" role="button" aria-label="More info" tabindex="3500"></div><div class="ytp-button ytp-button-share" role="button" aria-label="share" tabindex="3400"></div><div class="ytp-button ytp-button-dislike" role="button" aria-label="Dislike" tabindex="3300" data-tooltip-below="1"></div><div class="ytp-button ytp-button-like" role="button" aria-label="Like" tabindex="3200" data-tooltip-below="1"></div></div><a class="html5-title-logo" tabindex="3550" aria-label="Watch on YouTube.com" data-tooltip="Watch on YouTube.com" data-tooltip-below="1" href="http://web.archive.org/watch">YouTube</a><div class="html5-title-text-wrapper"><a class="html5-title-text" tabindex="3100" href="http://web.archive.org/watch"></a></div></div><div class="html5-info-panel"><div class="html5-info-panel-loading-icon"></div><div class="html5-info-panel-content hid"><div><div class="html5-author-img"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></div><div class="html5-author-info"><div class="html5-author-name"></div></div><div class="html5-subscribe-button-container"></div></div><div><div class="html5-video-info"><div class="html5-view-count"></div></div><p class="html5-description-text" dir="auto"></p></div></div></div></div></div>'
  );
}

function secondsToHms(t) {
  const e = parseInt(t, 10);
  let n = Math.floor(e / 3600),
    a = Math.floor((e - 3600 * n) / 60),
    i = e - 3600 * n - 60 * a;
  return (
    n < 10 && (n = "0" + n),
    a < 10 && (a = "0" + a),
    i < 10 && (i = "0" + i),
    0 == n ? +a + ":" + i : n + ":" + a + ":" + i
  );
}

async function updateCommentNormal(t, e) {
  var n = await getSapisidhash();
  return (
    await fetch(
      "https://www.youtube.com/youtubei/v1/comment/update_comment?key=" +
        authinfo.INNERTUBE_API_KEY,
      {
        credentials: "include",
        headers: _objectSpread(
          _objectSpread(
            _objectSpread(
              {},
              authinfo.LOGGED_IN && {
                Authorization: n
              }
            ),
            authinfo.LOGGED_IN && {
              "X-Goog-AuthUser": "0"
            }
          ),
          {},
          {
            "Content-Type": "application/json",
            Origin: window.location.href.replace("&v3cv=1", ""),
            "X-Youtube-Client-Name": "1",
            "X-Youtube-Client-Version":
              authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION,
            "X-GOOG-VISITOR-ID": ""
          },
          !!authinfo.DELEGATED_SESSION_ID && {
            "X-Goog-PageId": authinfo.DELEGATED_SESSION_ID
          }
        ),
        referrer: "https://www.youtube.com",
        body:
          '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
          '",\r\n\t\t\t"hl": "' +
          authinfo.HL +
          '"\r\n\t\t}\r\n\t},\r\n\t"commentText":"' +
          t +
          '","updateCommentParams":"' +
          e +
          '",\r\n}\r\n',
        method: "POST",
        mode: "cors"
      }
    )
  ).json();
}

async function updateCommentReply(t, e) {
  var n = await getSapisidhash();
  return (
    await fetch(
      "https://www.youtube.com/youtubei/v1/comment/update_comment_reply?key=" +
        authinfo.INNERTUBE_API_KEY,
      {
        credentials: "include",
        headers: _objectSpread(
          _objectSpread(
            _objectSpread(
              {},
              authinfo.LOGGED_IN && {
                Authorization: n
              }
            ),
            authinfo.LOGGED_IN && {
              "X-Goog-AuthUser": "0"
            }
          ),
          {},
          {
            "Content-Type": "application/json",
            Origin: window.location.href.replace("&v3cv=1", ""),
            "X-Youtube-Client-Name": "1",
            "X-Youtube-Client-Version":
              authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION,
            "X-GOOG-VISITOR-ID": ""
          },
          !!authinfo.DELEGATED_SESSION_ID && {
            "X-Goog-PageId": authinfo.DELEGATED_SESSION_ID
          }
        ),
        referrer: "https://www.youtube.com",
        body:
          '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
          '",\r\n\t\t\t"hl": "' +
          authinfo.HL +
          '"\r\n\t\t}\r\n\t},\r\n\t"replyText":"' +
          t +
          '","updateReplyParams":"' +
          e +
          '",\r\n}\r\n',
        method: "POST",
        mode: "cors"
      }
    )
  ).json();
}

function loadVideoPage(t) {
  var e = {},
    n = "";
  const a = new XMLHttpRequest();
  a.open("GET", "https://www.youtube.com/watch?v=" + t),
    a.send(),
    (a.onload = () => {
      (e = JSON.parse(
        a.responseText
          .substr(parseInt(a.responseText.search("var ytInitialData = ") + 20))
          .substr(
            0,
            parseInt(
              a.responseText
                .substr(
                  parseInt(a.responseText.search("var ytInitialData = ") + 20)
                )
                .search("</script>") - 1
            )
          )
      )),
        (n =
          '<div id="watch7-content"' +
          (n = a.responseText)
            .split('<div id="watch7-content"')[1]
            .split("</div>")[0] +
          "</div>"),
        (document.querySelector("#body-container").innerHTML = ""),
        (document.querySelector("#body-container").innerHTML = n),
        document.querySelector("#footer-container").remove(),
        v3.watch.parseYtData(e),
        buildPageFrame(),
        buildWatchContainer(),
        buildPlayerContainer(),
        createGb();
    });
}

String.prototype.replaceAll = function (t, e) {
  return this.replace(new RegExp(t, "g"), e);
};

var rmguide = !1;
(v3.navigator = {}),
  (v3.navigator.debugspf = !1),
  (v3.navigator.enablespf = !0),
  (v3.watch.usingspf = !0),
  (v3.navigator.spf = async function (t, e) {
    if (
      ((v3.navigator.spftoken = Math.floor(1e5 * Math.random())),
      document.body.setAttribute("spfprogress", "0"),
      document.body.setAttribute("spftoken", v3.navigator.spftoken),
      (before_loadtime = new Date().getTime()),
      softChangeUrl(t, !!e),
      document.querySelector(".sb-card-content") &&
        document.querySelector(".sb-card-content").innerHTML &&
        ((document.querySelector(".sb-card-content").innerHTML = ""),
        injectNotificationBody()),
      v3.navigator.debugspf &&
        console.log("[V3SPF] was succesfully change page to " + t),
      getUnreadNotifications(),
      v3.navigator.debugspf &&
        console.log("[V3SPF] was succesfully refreshed notifications"),
      "/watch" === window.location.pathname)
    ) {
      if (
        (v3.watch.usingspf || location.reload(),
        api.watch.meta
          .getAltSentiment(window.location.href.split("v=")[1].split("&")[0], 0)
          .then((t) => (api.watch.meta.AltSentiment = t)),
        authinfo.LOGGED_IN &&
          waitForElmHtml("html[spfinitial" + v3.navigator.spftoken + "]").then(
            (t) =>
              v3.innerTube
                .getChannelVideoCount(t.getAttribute("author"))
                .then((t) =>
                  waitForElm('body[spfprogress="100"] .yt-user-videos').then(
                    (e) => (e.innerHTML = t)
                  )
                )
          ),
        $("body").append("<script>window.ytInitialData = undefined;</script>"),
        $("body").append("<script>spfFastComments();</script>"),
        waitForElmHtml("#v3-initial-comment-ajax").then(function (t) {
          var e = JSON.parse(t.innerHTML);
          craftComments(e, v3.navigator.spftoken), t.remove(), console.log(e);
        }),
        (wasshareajaxcreated = !1),
        (wasaddtoajaxcreated = !1),
        document.querySelector("html[c3]") &&
          $("body").append("<script>mainGuideSrv();</script>"),
        document.querySelector("html[v3player=true]"))
      )
        $("body").append(
          '<script>v3PlayerLoader(window.location.href.split("v=")[1].split("&")[0]); if (authinfo.LOGGED_IN) guideService.a(1, "' +
            accountname +
            '");</script>'
        );
      else {
        v3.navigator.watch.genData();
        var n = document.createElement("script");
        (n.src = chrome.extension.getURL("hitchhiker/base/v3player_loader.js")),
          (n.onload = function () {
            document.querySelector("html").setAttribute("v3player", "true"),
              n.remove();
          }),
          document.querySelector("html").appendChild(n);
      }
      document.querySelector("body[w-expander]") ||
        $("body").append(
          '<script>function v3ExpandDescription(){document.querySelector("#watch-description").setAttribute("class", "yt-uix-expander yt-uix-button-panel");}function v3CollapseDescription(){document.querySelector("#watch-description").setAttribute("class", "yt-uix-expander yt-uix-expander-collapsed yt-uix-button-panel");}</script>'
        ),
        await (async function (e = {}) {
          var n = await fetch("https://www.youtube.com" + t);
          return document.body.setAttribute("spfprogress", "50"), n.text();
        })().then((t) => {
          document.querySelector("#css-3588632221") &&
            document.querySelector("#css-3588632221").remove(),
            document.querySelector("#css-3229727439") &&
              document.querySelector("#css-3229727439").remove(),
            document.querySelector("#css-2944141605") &&
              document.querySelector("#css-2944141605").remove(),
            document.body.setAttribute("spfprogress", "90"),
            document.querySelector("#guide-loading-toggle") ||
              (document.querySelector("#guide") ||
                document
                  .querySelector("#page")
                  .insertAdjacentHTML(
                    "afterbegin",
                    '<div id="guide" class="hid">        <div id="guide-container" class=" vve-check" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg&amp;ved=CAEQ_h4">\n      <div id="guide-main" class="    guide-module     spf-nolink   yt-uix-tdl " data-fold="225,649">\n        <div class="guide-module-content yt-scrollbar hid" style="display: block;"></div>\n          \n\n      </div>\n    </div>\n\n</div>'
                  ),
              document
                .querySelector("#guide-main")
                .insertAdjacentHTML(
                  "afterbegin",
                  '<div id="guide-loading-toggle" class="guide-module-toggle">\n        <span class="guide-module-toggle-icon">\n          <span class="guide-module-toggle-arrow"></span>\n          <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\n        </span>\n        <div class="guide-module-toggle-label">\n          <h3>\n            <span>\nGuide\n            </span>\n          </h3>\n        </div>\n\t\t</div>'
                ),
              (document.querySelector("#guide-container").className =
                "    collapsible-guide  loading")),
            document
              .querySelector("body")
              .setAttribute("class", v3.htmlBuilderConfig.watch),
            document.querySelector("#alerts").innerHTML &&
              !document.querySelector(".showing-alert") &&
              document.body.classList.add("showing-alert"),
            document.body.classList.add("exp-fixed-masthead"),
            v3.htmlBuilderConfig.core.NIRVANA &&
              document
                .querySelector("body")
                .setAttribute(
                  "class",
                  "date-20140228 ltr site-center-aligned site-as-giant-card exp-appbar-open-guide exp-appbar-onebar appbar-hidden exp-appbar-small-thumbs not-exp-new-metadata-style hitchhiker-enabled guide-enabled guide-collapsed sidebar-expanded exp-using-innertube innertube-v2 innertube-player exp-using-v3-snap page-loaded exp-modern-cinema-player exp-modern-sentiment-bar"
                ),
            authinfo.LOGGED_IN && document.body.classList.add("user-logged-in"),
            document.querySelector("#guide.hid") &&
              document.querySelector("#guide.hid").classList.remove("hid"),
            document.querySelector("html[c3]") &&
              document.querySelector("html").removeAttribute("c3"),
            (datareceived1 = JSON.parse(
              t
                .substr(parseInt(t.search("var ytInitialData = ") + 20))
                .substr(
                  0,
                  parseInt(
                    t
                      .substr(parseInt(t.search("var ytInitialData = ") + 20))
                      .search("</script>") - 1
                  )
                )
            )),
            $("body").append(
              "<script>window.ytInitialData = " +
                JSON.stringify(datareceived1) +
                ";</script>"
            ),
            (legacyresponse = t),
            (window.spfResponse = t),
            (window.spfPlayerResponse = JSON.parse(
              t
                .substr(
                  parseInt(t.search("var ytInitialPlayerResponse = ") + 30)
                )
                .substr(
                  0,
                  parseInt(
                    t
                      .substr(
                        parseInt(
                          t.search("var ytInitialPlayerResponse = ") + 30
                        )
                      )
                      .search("</script>") - 1
                  )
                )
                .split("};")[0] + "}"
            ));

          try {
            authinfo.VIDEO_RATING =
              spfPlayerResponse.videoDetails.averageRating;
          } catch (t) {}

          (legacyresponse =
            '<div id="watch7-content"' +
            legacyresponse
              .split('<div id="watch7-content"')[1]
              .split("</div>")[0] +
            "</div>"),
            document.querySelector("#watch7-container")
              ? (document.querySelector("#watch7-container").outerHTML =
                  legacyresponse)
              : document.querySelector(
                  '#content > *:not([id="watch7-container"])'
                ) &&
                (document.querySelector(
                  '#content > *:not([id="watch7-container"])'
                ).outerHTML = legacyresponse),
            authinfo.LOGGED_IN || getAuthorVideoCount(),
            (ytdata = datareceived1),
            v3.navigator.watch.refreshData(),
            v3.watch.parseYtData(datareceived1),
            document.querySelector("#player.off-screen")
              ? (document
                  .querySelector("#page")
                  .setAttribute("class", "  watch   clearfix"),
                document
                  .querySelector("#player")
                  .setAttribute("class", "watch-small"),
                buildWatch7(),
                buildPlayerContainer(),
                $("body").append(
                  '<script>v3PlayerLoader(window.location.href.split("v=")[1].split("&")[0]); if (authinfo.LOGGED_IN) guideService.a(1, "' +
                    accountname +
                    '");</script>'
                ))
              : document.querySelector("#player")
              ? buildWatch7()
              : document.querySelector("#guide")
              ? (document
                  .querySelector("#guide")
                  .insertAdjacentHTML(
                    "afterend",
                    '<div id="player" class="watch-small"></div>'
                  ),
                document
                  .querySelector("#page")
                  .setAttribute("class", "  watch   clearfix"),
                buildWatch7(),
                buildPlayerContainer(),
                $("body").append(
                  '<script>v3PlayerLoader(window.location.href.split("v=")[1].split("&")[0]); if (authinfo.LOGGED_IN) guideService.a(1, "' +
                    accountname +
                    '");</script>'
                ))
              : (document
                  .querySelector("#page")
                  .insertAdjacentHTML(
                    "afterbegin",
                    '<div id="player" class="watch-small"></div>'
                  ),
                document
                  .querySelector("#page")
                  .setAttribute("class", "  watch   clearfix"),
                buildWatch7(),
                buildPlayerContainer()),
            authinfo.LOGGED_IN
              ? document.querySelector(
                  '.guide-module-toggle:not([id="guide-loading-toggle"])'
                ) &&
                document
                  .querySelector(
                    '.guide-module-toggle:not([id="guide-loading-toggle"])'
                  )
                  .remove()
              : (buildStaticGuide(),
                document.querySelector(
                  '.guide-module-toggle:not([id="guide-loading-toggle"])'
                ) &&
                  document
                    .querySelector(
                      '.guide-module-toggle:not([id="guide-loading-toggle"])'
                    )
                    .remove(),
                document.querySelector(".guide-module-content") &&
                  document
                    .querySelector(".guide-module-content")
                    .setAttribute(
                      "class",
                      "guide-module-content guide-module-loading"
                    )),
            document.querySelector(".guide-module-toggle") &&
              document
                .querySelector(".guide-module-toggle")
                .setAttribute("id", "guide-loading-toggle"),
            usingvevocover &&
              !document.querySelector("#player-branded-banner") &&
              document
                .querySelector("#player")
                .insertAdjacentHTML(
                  "beforeend",
                  '<div id="player-branded-banner">\n            \n\n    <map name="watch-branding-small-banner-image-map"><area shape="rect" coords="0,0,640,70" href="/redirect?event=imagemapurl&amp;q=http%3A%2F%2Fvevo.ly%2F190GRF4&amp;usg=sqfFiQK5nNQxIuhXAITetLoMh88="></map>\n      <img usemap="#watch-branding-small-banner-image-map" data-thumb="' +
                    chrome.extension.getURL("/images/VEVO/small_banner.png") +
                    '" src="' +
                    chrome.extension.getURL("/images/VEVO/small_banner.png") +
                    '" onmousedown="yt.tracking.track(\'image_map_down\', \'feature=vevo\')" height="70" width="640" class="banner-small" data-group-key="thumb-group-0">\n\n    \n\n    <map name="watch-branding-large-banner-image-map"><area shape="rect" coords="0,0,862,69" href="/redirect?event=imagemapurl&amp;q=http%3A%2F%2Fvevo.ly%2F190GRF4&amp;usg=sqfFiQK5nNQxIuhXAITetLoMh88="></map>\n      <img usemap="#watch-branding-large-banner-image-map" data-thumb="http://i1.ytimg.com/u/ZijND2e2tPp2AQL8Go2YSg/large_banner.jpg?v=51c1d9de" src="' +
                    chrome.extension.getURL("/images/VEVO/BIG_BANNER.png") +
                    '" onmousedown="yt.tracking.track(\'image_map_down\', \'feature=vevo\')" height="70" width="854" class="banner-large" data-group-key="thumb-group-0">\n\n\n\n  </div>'
                ),
            cinemastate
              ? document
                  .querySelector("#player")
                  .setAttribute("class", "watch-medium")
              : document
                  .querySelector("#player")
                  .setAttribute("class", "watch-small"),
            usingvevocover
              ? (document
                  .querySelector("#player")
                  .setAttribute("class", "watch-branded-banner"),
                document
                  .querySelector("#player")
                  .setAttribute(
                    "style",
                    'background: url("' +
                      chrome.extension.getURL("/images/VEVO/VEVO_COVER.png") +
                      '") left top no-repeat rgb(209, 208, 212);'
                  ),
                document.querySelector("#guide-main.collapsed") ||
                  (document.querySelector("#guide-loading-toggle").click(),
                  (rmguide = !0)))
              : (document.querySelector("#player").setAttribute("style", ""),
                document.querySelector("#player-branded-banner") &&
                  document.querySelector("#player-branded-banner").remove(),
                rmguide &&
                  (document.querySelector("#guide-loading-toggle").click(),
                  (rmguide = !1))),
            document
              .querySelector("#comments-view")
              .classList.add("spf" + v3.navigator.spftoken),
            document
              .querySelector("#player-api")
              .className.includes("spfplayer") &&
              (document.querySelector("#player-api").className = document
                .querySelector("#player-api")
                .className.split(" spfplayer")[0]),
            document
              .querySelector("#player-api")
              .classList.add("spfplayer" + v3.navigator.spftoken),
            v3.navigator.debugspf &&
              console.log("[V3SPF] was succesfully refresh watch info"),
            v3.watch.v3mainfriend(),
            v3.navigator.debugspf &&
              console.log("[V3SPF] was succesfully refresh v3 friend"),
            document.body.setAttribute("spfprogress", "100"),
            ytdata.contents.twoColumnWatchNextResults.playlist &&
              (document.querySelector("#playlist") &&
                document.querySelector("#playlist").remove(),
              document.querySelector("#playlist-tray") &&
                document.querySelector("#playlist-tray").remove(),
              craftPlaylist(),
              craftPlaylist2()),
            setTimeout(function () {
              document.querySelector(".html5-video-player video") &&
                v3.watch.v3playerfriend();
            }, 100);
        }),
        v3.navigator.debugspf &&
          console.log("[V3SPF] was succesfully refresh player and guide");
    } else location.reload();
  }),
  v3.navigator.enablespf &&
    ($(document).on("click", 'a[href*="/watch"]', function (t) {
      t.preventDefault(),
        v3.navigator.spf(
          "/watch?v=" + t.currentTarget.getAttribute("href").split("v=")[1],
          0
        );
    }),
    (window.onpopstate = function () {
      v3.navigator.spf(window.location.pathname + window.location.search, 1);
    })),
  (v3.navigator.watch = {}),
  (v3.navigator.watch.refreshData = function () {
    (mainvideoinfo = {}),
      (secondaryvideoinfo = {}),
      (commentvideoinfo = {}),
      (uploaddate = void 0),
      (viewcount = void 0),
      (sentimentbarprocent = void 0),
      (sentimentbarprocentlike = void 0),
      (sentimentbarprocentdislike = void 0),
      (likecount = void 0),
      (liketoggled = void 0),
      (dislikecount = void 0),
      (disliketoggled = void 0),
      (authorurl = void 0),
      (authorpic = void 0),
      (subscribecount = void 0),
      (authorname = void 0),
      (authorisverified = void 0),
      (subscribedtoauthor = void 0),
      (authorvideocount = "   "),
      (isuserloggedin = void 0),
      (userpicture = void 0),
      (descriptionstring = void 0),
      (licenseused = void 0),
      (recomshtml = void 0),
      (isauthorverified = void 0),
      (commentcontinuation = void 0),
      (videoisunlisted = void 0),
      (videoisprivate = void 0),
      (isownvideo = void 0),
      (videoisagerestrict = void 0),
      (metasongname = void 0),
      (metaartistname = void 0),
      (metagamename = void 0),
      (metagameimg = void 0),
      (isusingplaylist = void 0),
      (countloadcomments = 0),
      (trendinginfo = void 0),
      (islivestream = void 0),
      (issentimentbarbroken = void 0),
      (metagameinfo = void 0),
      (metagame = void 0),
      (usingvevocover = void 0);
  }),
  (v3.navigator.watch.genData = function () {
    (window.mainvideoinfo = {}),
      (window.secondaryvideoinfo = {}),
      (window.commentvideoinfo = {}),
      (window.uploaddate = void 0),
      (window.viewcount = void 0),
      (window.sentimentbarprocent = void 0),
      (window.sentimentbarprocentlike = void 0),
      (window.sentimentbarprocentdislike = void 0),
      (window.likecount = void 0),
      (window.liketoggled = void 0),
      (window.dislikecount = void 0),
      (window.disliketoggled = void 0),
      (window.authorurl = void 0),
      (window.authorpic = void 0),
      (window.subscribecount = void 0),
      (window.authorname = void 0),
      (window.authorisverified = void 0),
      (window.subscribedtoauthor = void 0),
      (window.authorvideocount = "   "),
      (window.isuserloggedin = void 0),
      (window.userpicture = void 0),
      (window.descriptionstring = void 0),
      (window.licenseused = void 0),
      (window.recomshtml = void 0),
      (window.isauthorverified = void 0),
      (window.commentcontinuation = void 0),
      (window.videoisunlisted = void 0),
      (window.videoisprivate = void 0),
      (window.isownvideo = void 0),
      (window.videoisagerestrict = void 0),
      (window.metasongname = void 0),
      (window.metaartistname = void 0),
      (window.metagamename = void 0),
      (window.metagameimg = void 0),
      (window.isusingplaylist = void 0),
      (window.countloadcomments = 0),
      (window.trendinginfo = void 0),
      (window.islivestream = void 0),
      (window.issentimentbarbroken = void 0),
      (window.metagameinfo = void 0),
      (window.metagame = void 0),
      (window.usingvevocover = void 0);
  });
