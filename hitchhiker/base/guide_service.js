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

function getCookie(e) {
  try {
    return document.cookie.split(e)[1].split(";")[0].replace("=", "");
  } catch (e) {
    return;
  }
}

var guideService = {};
getCookie("vtcf") ||
  ((document.cookie =
    "vtcf=a=0,b=0,c=0,d=1,e=1,f=0,g=0,h=0,i=0; expires=Thu, 24 Dec 2037 12:00:00 UTC; path=/"),
  location.reload()),
  window.v3 || (window.v3 = {}),
  (v3.id = document.querySelector("html").getAttribute("id")),
  (v3.config = {});

try {
  getCookie("vtcf") &&
    ((v3.config.autoplay = getCookie("vtcf").includes("a=1")),
    (v3.config.loop = getCookie("vtcf").includes("b=1")),
    (v3.config.verbose = getCookie("vtcf").includes("c=1")),
    (v3.config.dash = getCookie("vtcf").includes("d=1")),
    (v3.config.vp9 = getCookie("vtcf").includes("e=1")),
    (v3.config.channelDefaultPage = getCookie("vtcf")
      .split("f=")[1]
      .split(",")[0]),
    (v3.config.cinemaState = getCookie("vtcf").includes("g=1")),
    (v3.config.nirvanaUi = getCookie("vtcf").includes("h=1")),
    (v3.config.ignoreInitialTip = getCookie("vtcf").includes("i=1")));
} catch (e) {
  (document.cookie =
    "vtcf=a=0,b=0,c=0,d=1,e=1,f=0,g=0,h=0,i=0; expires=Thu, 24 Dec 2037 12:00:00 UTC; path=/"),
    location.reload();
}

function mainGuideSrv() {
  function e(e) {
    return new Promise((n) => {
      if (document.querySelector(e)) return n(document.querySelector(e));
      const t = new MutationObserver((i) => {
        document.querySelector(e) &&
          (n(document.querySelector(e)), t.disconnect());
      });
      t.observe(document, {
        childList: !0,
        subtree: !0
      });
    });
  }

  function n() {
    return new Promise(function (e, n) {
      !(function n() {
        try {
          window.yt.config_.INNERTUBE_API_KEY &&
            ((window.yt.config_.LOGGED_IN &&
              window.yt.config_.DELEGATED_SESSION_ID) ||
              0 == window.yt.config_.LOGGED_IN) &&
            setTimeout(function () {
              return e();
            }, 10);
        } catch (e) {}

        setTimeout(n, 10);
      })();
    });
  }

  async function t(e, n) {
    var t, i, a, s;
    0 == n
      ? ((s = window.fytauth.LOGGED_IN),
        (t = window.fytauth.INNERTUBE_API_KEY),
        (i = window.fytauth.DELEGATED_SESSION_ID),
        (a = window.fytauth.INNERTUBE_CONTEXT_CLIENT_VERSION))
      : ((s = yt.config_.LOGGED_IN),
        (t = yt.config_.INNERTUBE_API_KEY),
        (i = yt.config_.DELEGATED_SESSION_ID),
        (a = yt.config_.INNERTUBE_CONTEXT_CLIENT_VERSION));
    var o = await l();
    return (
      await fetch("https://www.youtube.com/youtubei/v1/next?key=" + t, {
        credentials: "include",
        headers: _objectSpread(
          _objectSpread(
            _objectSpread(
              {},
              s && {
                Authorization: o
              }
            ),
            s && {
              "X-Goog-AuthUser": "0"
            }
          ),
          {},
          {
            "Content-Type": "application/json",
            Origin: "https://www.youtube.com",
            "X-Youtube-Client-Name": "1",
            "X-Youtube-Client-Version": "2.20200101.00.00",
            "X-GOOG-VISITOR-ID": ""
          },
          !!i && {
            "X-Goog-PageId": i
          }
        ),
        referrer: "https://www.youtube.com",
        body:
          '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
          a +
          '",\r\n\t\t\t"hl": "en"\r\n\t\t}\r\n\t},\r\n\t"continuation":"' +
          e +
          '",\r\n}\r\n',
        method: "POST",
        mode: "cors"
      })
    ).json();
  }

  async function a(e) {
    await (async function (e) {
      var n, t, i, a;
      0 == e
        ? ((a = window.fytauth.LOGGED_IN),
          (n = window.fytauth.INNERTUBE_API_KEY),
          (t = window.fytauth.DELEGATED_SESSION_ID),
          (i = window.fytauth.INNERTUBE_CONTEXT_CLIENT_VERSION))
        : ((a = yt.config_.LOGGED_IN),
          (n = yt.config_.INNERTUBE_API_KEY),
          (t = yt.config_.DELEGATED_SESSION_ID),
          (i = yt.config_.INNERTUBE_CONTEXT_CLIENT_VERSION));
      var s = await l();
      return (
        await fetch("https://www.youtube.com/youtubei/v1/browse?key=" + n, {
          credentials: "include",
          headers: _objectSpread(
            _objectSpread(
              _objectSpread(
                {},
                a && {
                  Authorization: s
                }
              ),
              a && {
                "X-Goog-AuthUser": "0"
              }
            ),
            {},
            {
              "Content-Type": "application/json",
              Origin: "https://www.youtube.com",
              "X-Youtube-Client-Name": "1",
              "X-Youtube-Client-Version": i.replace("2.", "1."),
              "X-GOOG-VISITOR-ID": ""
            },
            !!t && {
              "X-Goog-PageId": t
            }
          ),
          referrer: "https://www.youtube.com",
          body:
            '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
            i.replace("2.", "1.") +
            '",\r\n\t\t\t"hl": "en"\r\n\t\t}\r\n\t},\r\n\t"browseId":"FEwhat_to_watch",\r\n}\r\n',
          method: "POST",
          mode: "cors"
        })
      ).json();
    })(e).then((e) => {
      (window.feedw2wresponse = e),
        (function (e) {
          e = e.contents;
          var n = document.createElement("ul");
          n.setAttribute("class", "feed-list context-data-container"),
            document.querySelector(".feed-page").append(n);
          var t = "";

          try {
            var a,
              s,
              o,
              r,
              l,
              d = "",
              c = "",
              u = "",
              p = "";
            e[0].itemSectionRenderer.contents[0].shelfRenderer.content
              .horizontalListRenderer.items[0].gridVideoRenderer.ownerBadges &&
              (p =
                '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name" data-tooltip-text="Verified name">\n  </span>');
            var m = "";
            e[0].itemSectionRenderer.contents[0].shelfRenderer.content
              .horizontalListRenderer.items[1].gridVideoRenderer.ownerBadges &&
              (m =
                '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name" data-tooltip-text="Verified name">\n  </span>');
            var h = "";
            e[0].itemSectionRenderer.contents[0].shelfRenderer.content
              .horizontalListRenderer.items[2].gridVideoRenderer.ownerBadges &&
              (h =
                '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name" data-tooltip-text="Verified name">\n  </span>');
            var g,
              v = "";
            e[0].itemSectionRenderer.contents[0].shelfRenderer.content
              .horizontalListRenderer.items[3].gridVideoRenderer.ownerBadges &&
              (v =
                '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name" data-tooltip-text="Verified name">\n  </span>');

            try {
              u =
                e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                  .horizontalListRenderer.items[3].gridVideoRenderer
                  .viewCountText.simpleText;
            } catch (e) {}

            try {
              c =
                e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                  .horizontalListRenderer.items[2].gridVideoRenderer
                  .viewCountText.simpleText;
            } catch (e) {}

            try {
              d =
                e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                  .horizontalListRenderer.items[1].gridVideoRenderer
                  .viewCountText.simpleText;
            } catch (e) {}

            try {
              l =
                e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                  .horizontalListRenderer.items[3].gridVideoRenderer
                  .publishedTimeText.simpleText;
            } catch (e) {
              l = "";
            }

            try {
              o =
                e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                  .horizontalListRenderer.items[2].gridVideoRenderer
                  .publishedTimeText.simpleText;
            } catch (e) {
              o = "";
            }

            try {
              r =
                e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                  .horizontalListRenderer.items[1].gridVideoRenderer.lengthText
                  .simpleText;
            } catch (e) {
              r = "";
            }

            try {
              a =
                e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                  .horizontalListRenderer.items[1].gridVideoRenderer
                  .publishedTimeText.simpleText;
            } catch (e) {
              a = "";
            }

            try {
              s =
                e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                  .horizontalListRenderer.items[2].gridVideoRenderer.lengthText
                  .simpleText;
            } catch (e) {
              s = "";
            }

            try {
              g =
                e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                  .horizontalListRenderer.items[3].gridVideoRenderer.lengthText
                  .simpleText;
            } catch (e) {
              g = "";
            }

            t =
              '<li class="feed-item-container  browse-list-item-container vve-check " data-sessionlink="">\n    <div class="feed-item-dismissable  ">\n      <div class="feed-item-main feed-item-no-author">\n        <div class="feed-item-main-content">\n                    <div class="shelf-wrapper clearfix">\n          <div class="lohp-newspaper-shelf vve-check" data-sessionlink="">\n    \n    <div class="lohp-large-shelf-container">\n        <div class="context-data-item clearfix" data-context-item-time="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer.lengthText
                .simpleText +
              '" data-context-item-type="video" data-context-item-user="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer
                .longBylineText.runs[0].text +
              '" data-context-item-views="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer.viewCountText
                .simpleText +
              '" data-context-item-title="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer.title.runs[0]
                .text +
              '" data-context-item-id="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" data-sessionlink="">\n    \n    <a href="/watch?v=' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink yt-fluid-thumb-link contains-addto lohp-thumb-wrap" data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-370 yt-thumb-fluid">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[0].gridVideoRenderer.thumbnail.thumbnails[
                parseInt(
                  e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                    .horizontalListRenderer.items[0].gridVideoRenderer.thumbnail
                    .thumbnails.length - 1
                )
              ].url.split("?")[0] +
              '" width="370">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n    <span class="video-time">' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer.lengthText
                .simpleText +
              '</span>\n\n\n  <button title="' +
              v3.UIMSG[v3.nationIndex].GUIDE_WL +
              '" onclick=";return false;" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" data-video-ids="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" data-button-menu-id="shared-addto-watch-later-login" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="' +
              v3.UIMSG[v3.nationIndex].GUIDE_WL +
              '">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n      <a class="lohp-video-link max-line-2 yt-uix-sessionlink " data-sessionlink="" href="/watch?v=' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" title="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer.title.runs[0]
                .text +
              '">' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer.title.runs[0]
                .text +
              '</a>\n\n\n      <div class="lohp-video-metadata">\n          <span class="content-uploader spf-nolink">\n<span class="username-prepend">by</span> <a href="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer
                .shortBylineText.runs[0].navigationEndpoint.browseEndpoint
                .canonicalBaseUrl +
              '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer
                .longBylineText.runs[0].text +
              "</a>" +
              p +
              '\n  </span>\n\n          <span class="view-count">\n      ' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer.viewCountText
                .simpleText +
              '\n  </span>\n\n            <span class="content-item-time-created" title="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer
                .publishedTimeText.simpleText +
              '">\n      ' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[0].gridVideoRenderer
                .publishedTimeText.simpleText +
              '\n    </span>\n\n      </div>\n  </div>\n\n    </div>\n    <div class="lohp-medium-shelves-container">\n            <div class="lohp-medium-shelf context-data-item vve-check " data-context-item-time="' +
              r +
              '" data-context-item-type="video" data-context-item-user="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[1].gridVideoRenderer
                .longBylineText.runs[0].text +
              '" data-context-item-views="' +
              d +
              '" data-context-item-title="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[1].gridVideoRenderer.title.runs[0]
                .text +
              '" data-context-item-id="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[1].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" data-sessionlink="">\n    \n    <div class="lohp-media-object">\n      <a href="/watch?v=' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[1].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink yt-fluid-thumb-link contains-addto lohp-thumb-wrap" data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-170 yt-thumb-fluid">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[1].gridVideoRenderer.thumbnail
                .thumbnails[
                parseInt(
                  e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                    .horizontalListRenderer.items[0].gridVideoRenderer.thumbnail
                    .thumbnails.length - 1
                )
              ].url +
              '" width="170">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n    <span class="video-time">' +
              r +
              '</span>\n\n\n  <button title="' +
              v3.UIMSG[v3.nationIndex].GUIDE_WL +
              '" onclick=";return false;" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" data-video-ids="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[1].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" data-button-menu-id="shared-addto-watch-later-login" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="' +
              v3.UIMSG[v3.nationIndex].GUIDE_WL +
              '">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n    </div>\n    <div class="lohp-media-object-content lohp-medium-shelf-content">\n        <a class="lohp-video-link max-line-2 yt-uix-sessionlink " data-sessionlink="" href="/watch?v=' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[1].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" title="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[1].gridVideoRenderer.title.runs[0]
                .text +
              '">' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[1].gridVideoRenderer.title.runs[0]
                .text +
              '</a>\n\n      <div class="lohp-video-metadata attached">\n          <span class="content-uploader spf-nolink">\n<span class="username-prepend">by</span> <a href="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[1].gridVideoRenderer
                .shortBylineText.runs[0].navigationEndpoint.browseEndpoint
                .canonicalBaseUrl +
              '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[1].gridVideoRenderer
                .longBylineText.runs[0].text +
              "</a>" +
              m +
              '\n  </span>\n\n      </div>\n        <div class="lohp-video-metadata">\n            <span class="view-count">\n      ' +
              d +
              '\n  </span>\n\n              <span class="content-item-time-created" title="' +
              a +
              '">\n      ' +
              a +
              '\n    </span>\n\n        </div>\n    </div>\n  </div>\n\n            <div class="lohp-medium-shelf context-data-item vve-check " data-context-item-time="' +
              s +
              '" data-context-item-type="video" data-context-item-user="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[2].gridVideoRenderer
                .longBylineText.runs[0].text +
              '" data-context-item-views="' +
              c +
              '" data-context-item-title="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[2].gridVideoRenderer.title.runs[0]
                .text +
              '" data-context-item-id="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[2].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" data-sessionlink="">\n    \n    <div class="lohp-media-object">\n      <a href="/watch?v=' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[2].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink yt-fluid-thumb-link contains-addto lohp-thumb-wrap" data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-170 yt-thumb-fluid">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[2].gridVideoRenderer.thumbnail
                .thumbnails[
                parseInt(
                  e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                    .horizontalListRenderer.items[0].gridVideoRenderer.thumbnail
                    .thumbnails.length - 1
                )
              ].url +
              '" width="170">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n    <span class="video-time">' +
              s +
              '</span>\n\n\n  <button title="' +
              v3.UIMSG[v3.nationIndex].GUIDE_WL +
              '" onclick=";return false;" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" data-video-ids="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[2].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" data-button-menu-id="shared-addto-watch-later-login" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="' +
              v3.UIMSG[v3.nationIndex].GUIDE_WL +
              '">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n    </div>\n    <div class="lohp-media-object-content lohp-medium-shelf-content">\n        <a class="lohp-video-link max-line-2 yt-uix-sessionlink " data-sessionlink="" href="/watch?v=' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[2].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" title="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[2].gridVideoRenderer.title.runs[0]
                .text +
              '">' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[2].gridVideoRenderer.title.runs[0]
                .text +
              '</a>\n\n      <div class="lohp-video-metadata attached">\n          <span class="content-uploader spf-nolink">\n<span class="username-prepend">by</span> <a href="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[2].gridVideoRenderer
                .shortBylineText.runs[0].navigationEndpoint.browseEndpoint
                .canonicalBaseUrl +
              '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[2].gridVideoRenderer
                .longBylineText.runs[0].text +
              "</a>" +
              h +
              '\n  </span>\n\n      </div>\n        <div class="lohp-video-metadata">\n            <span class="view-count">\n      ' +
              c +
              '\n  </span>\n\n              <span class="content-item-time-created" title="' +
              o +
              '">\n      ' +
              o +
              '\n    </span>\n\n        </div>\n    </div>\n  </div>\n\n            <div class="lohp-medium-shelf context-data-item vve-check " data-context-item-time="' +
              g +
              '" data-context-item-type="video" data-context-item-user="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[3].gridVideoRenderer
                .longBylineText.runs[0].text +
              '" data-context-item-views="' +
              u +
              '" data-context-item-title="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[3].gridVideoRenderer.title.runs[0]
                .text +
              '" data-context-item-id="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[3].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" data-sessionlink="">\n    \n    <div class="lohp-media-object">\n      <a href="/watch?v=' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[3].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink yt-fluid-thumb-link contains-addto lohp-thumb-wrap" data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-170 yt-thumb-fluid">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[3].gridVideoRenderer.thumbnail
                .thumbnails[
                parseInt(
                  e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                    .horizontalListRenderer.items[0].gridVideoRenderer.thumbnail
                    .thumbnails.length - 1
                )
              ].url +
              '" width="170">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n    <span class="video-time">' +
              g +
              '</span>\n\n\n  <button title="' +
              v3.UIMSG[v3.nationIndex].GUIDE_WL +
              '" onclick=";return false;" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" data-video-ids="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[3].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" data-button-menu-id="shared-addto-watch-later-login" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="' +
              v3.UIMSG[v3.nationIndex].GUIDE_WL +
              '">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n    </div>\n    <div class="lohp-media-object-content lohp-medium-shelf-content">\n        <a class="lohp-video-link max-line-2 yt-uix-sessionlink " data-sessionlink="" href="/watch?v=' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[3].gridVideoRenderer
                .navigationEndpoint.watchEndpoint.videoId +
              '" title="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[3].gridVideoRenderer.title.runs[0]
                .text +
              '">' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[3].gridVideoRenderer.title.runs[0]
                .text +
              '</a>\n\n      <div class="lohp-video-metadata attached">\n          <span class="content-uploader spf-nolink">\n<span class="username-prepend">by</span> <a href="' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[3].gridVideoRenderer
                .shortBylineText.runs[0].navigationEndpoint.browseEndpoint
                .canonicalBaseUrl +
              '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
              e[0].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items[3].gridVideoRenderer
                .longBylineText.runs[0].text +
              "</a>" +
              v +
              '\n  </span>\n\n      </div>\n        <div class="lohp-video-metadata">\n            <span class="view-count">\n      ' +
              u +
              '\n  </span>\n\n              <span class="content-item-time-created" title="' +
              l +
              '">\n      ' +
              l +
              '\n    </span>\n\n        </div>\n    </div>\n  </div>\n\n    </div>\n  </div>\n\n\n  </div>\n\n\n  \n\n        </div>\n      </div>\n    </div>\n      <div class="feed-item-dismissal-notices"><div class="feed-item-dismissal feed-item-dismissal-hide hid">This item has been removed from your feed</div></div>\n\t\t</li>';
          } catch (e) {
            console.log(e);
          }

          document
            .querySelector(".feed-list")
            .insertAdjacentHTML("beforeend", t);
          var f = "",
            R = 2;

          for (i = 0, j = e.length; i < j; i++)
            try {
              if (
                "YouTube Mixes" !=
                e[i].itemSectionRenderer.contents[0].shelfRenderer.title.runs[0]
                  .text
              ) {
                var b = !1,
                  E = "",
                  I =
                    e[i].itemSectionRenderer.contents[0].shelfRenderer.content
                      .horizontalListRenderer.items,
                  w = 0;
                0 == i && (w = 4);

                try {
                  for (x = w, y = I.length; x < y; x++) {
                    var S = "",
                      _ = "",
                      k = "LIVE",
                      T = "";
                    I[x].gridVideoRenderer.ownerBadges &&
                      (T =
                        '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name" data-tooltip-text="Verified name">\n  </span>');

                    try {
                      k = I[x].gridVideoRenderer.lengthText.simpleText;
                    } catch (e) {}

                    try {
                      (S = I[x].gridVideoRenderer.publishedTimeText.simpleText),
                        (_ = I[x].gridVideoRenderer.viewCountText.simpleText);
                    } catch (e) {}

                    void 0 !== I[x].gridVideoRenderer &&
                      (E +=
                        '<li class="channels-content-item yt-shelf-grid-item yt-uix-shelfslider-item ">\n              \n\n\n    <div class="yt-lockup clearfix  yt-lockup-video yt-lockup-grid vve-check context-data-item" data-context-item-time="' +
                        k +
                        '" data-context-item-type="video" data-context-item-user="' +
                        I[x].gridVideoRenderer.shortBylineText.runs[0].text +
                        '" data-context-item-views="' +
                        _ +
                        '" data-context-item-title="' +
                        I[x].gridVideoRenderer.title.runs[0].text +
                        '" data-context-item-id="' +
                        I[x].gridVideoRenderer.videoId +
                        '">\n    <div class="yt-lockup-thumbnail">\n      \n  <a href="/watch?v=' +
                        I[x].gridVideoRenderer.videoId +
                        '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink yt-fluid-thumb-link contains-addto " data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-175 yt-thumb-fluid">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="' +
                        I[x].gridVideoRenderer.thumbnail.thumbnails[
                          parseInt(
                            I[x].gridVideoRenderer.thumbnail.thumbnails.length -
                              1
                          )
                        ].url +
                        '" width="175">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n    <span class="video-time">' +
                        k +
                        '</span>\n\n\n  <button title="' +
                        v3.UIMSG[v3.nationIndex].GUIDE_WL +
                        '" onclick=";return false;" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" data-video-ids="' +
                        I[x].gridVideoRenderer.videoId +
                        '" data-button-menu-id="shared-addto-watch-later-login" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="' +
                        v3.UIMSG[v3.nationIndex].GUIDE_WL +
                        '">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n\n    </div>\n    <div class="yt-lockup-content">\n            <h3 class="yt-lockup-title">\n    <a class="yt-uix-sessionlink yt-uix-tile-link yt-ui-ellipsis yt-ui-ellipsis-2 yt-ui-ellipsis-ellipsized" dir="ltr" title="' +
                        I[x].gridVideoRenderer.title.runs[0].text +
                        '" data-sessionlink="" href="/watch?v=' +
                        I[x].gridVideoRenderer.videoId +
                        '"><span class="yt-ui-ellipsis-wrapper" data-original-html="' +
                        I[x].gridVideoRenderer.title.runs[0].text +
                        '">' +
                        I[x].gridVideoRenderer.title.runs[0].text +
                        '</span></a>\n  </h3>\n\n\n  <div class="yt-lockup-meta">\n    <ul class="yt-lockup-meta-info">\n        <li>\n          by <a href="' +
                        I[x].gridVideoRenderer.shortBylineText.runs[0]
                          .navigationEndpoint.browseEndpoint.canonicalBaseUrl +
                        '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="g-high">' +
                        I[x].gridVideoRenderer.shortBylineText.runs[0].text +
                        "</a>" +
                        T +
                        "\n        </li>\n      <li>" +
                        _ +
                        '</li>\n        <li class="yt-lockup-deemphasized-text">\n            ' +
                        S +
                        "\n        </li>\n    </ul>\n  </div>\n  \n  \n\n    </div>\n    \n  </div>\n\n\n\n        </li>");
                  }

                  b = !0;
                } catch (e) {
                  console.log(e);
                }

                if (1 == b) {
                  var L = "Static";
                  if (
                    void 0 !==
                    e[i].itemSectionRenderer.contents[0].shelfRenderer.title
                  )
                    try {
                      (L =
                        e[i].itemSectionRenderer.contents[0].shelfRenderer.title
                          .runs[0].text),
                        2 ==
                          e[i].itemSectionRenderer.contents[0].shelfRenderer
                            .title.runs.length &&
                          (L +=
                            e[i].itemSectionRenderer.contents[0].shelfRenderer
                              .title.runs[1].text);
                    } catch (n) {
                      L =
                        e[i].itemSectionRenderer.contents[0].shelfRenderer.title
                          .simpleText;
                    }
                  var G = '<ul class="yt-uix-shelfslider-list">' + E + "</ul>",
                    U = "";
                  parseInt(
                    G.split(
                      '<li class="channels-content-item yt-shelf-grid-item yt-uix-shelfslider-item ">'
                    ).length - 1
                  ) > 6 &&
                    (U =
                      '<button onclick="slideShelf(' +
                      R +
                      ')" class="yt-uix-shelfslider-prev yt-uix-button yt-uix-button-shelf-slider-pager yt-uix-button-size-default" type="button" role="button"><span class="yt-uix-button-content">  <img class="yt-uix-shelfslider-prev-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Previous">\n </span></button>\n    <button onclick="slideShelf(' +
                      R +
                      ')" class="yt-uix-shelfslider-next yt-uix-button yt-uix-button-shelf-slider-pager yt-uix-button-size-default" type="button" role="button"><span class="yt-uix-button-content">  <img class="yt-uix-shelfslider-next-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Next">\n </span></button>'),
                    (f +=
                      '<li class="feed-item-container  browse-list-item-container vve-check " data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg">\n    <div class="feed-item-dismissable  ">\n      <div class="feed-item-main feed-item-no-author">\n        <div class="feed-item-main-content">\n                    <div class="shelf-wrapper clearfix">\n          <div class="compact-shelf shelf-item yt-uix-shelfslider yt-uix-shelfslider-at-head vve-check clearfix feeds-mode yt-uix-tdl" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg&amp;ved=CCAQ3Bw" data-fold="1428,814.875">\n            <h2 class="branded-page-module-title">\n          \n      <a href="/feed/FEwhat_to_watch" class="yt-uix-sessionlink branded-page-module-title-link spf-nolink g-hovercard" data-sessionlink="" data-ytid="FEED">\n\n      <span class="shelf-title">\n        ' +
                      L +
                      '\n      </span>\n\n      </a>\n  </h2>\n\n\n    \n\n      <div class="yt-uix-shelfslider-body context-data-container">\n    ' +
                      G +
                      "\n  </div>\n\n\n    " +
                      U +
                      '\n\n  </div>\n\n      \n\n\n  </div>\n\n\n  \n\n        </div>\n      </div>\n    </div>\n      <div class="feed-item-dismissal-notices"><div class="feed-item-dismissal feed-item-dismissal-hide hid">This item has been removed from your feed</div></div>\n  </li>'),
                    R++;
                }
              }
            } catch (e) {}

          document
            .querySelector(".feed-list")
            .insertAdjacentHTML("beforeend", f),
            document
              .querySelector(".feed-page .yt-spinner")
              .classList.add("hid");
        })(
          e.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
            .sectionListRenderer
        );
    });
  }

  function s(e) {
    try {
      if (e.guideSubscriptionsSectionRenderer) return !0;
    } catch (e) {
      return !1;
    }
  }

  function o(e) {
    try {
      if (e.guideCollapsibleEntryRenderer) return !0;
    } catch (e) {
      return !1;
    }
  }

  async function r(n, t) {
    var a = await (async function (e) {
      var n, t, i, a;
      0 == e
        ? ((a = window.fytauth.LOGGED_IN),
          (n = window.fytauth.INNERTUBE_API_KEY),
          (t = window.fytauth.DELEGATED_SESSION_ID),
          (i = window.fytauth.INNERTUBE_CONTEXT_CLIENT_VERSION))
        : ((a = yt.config_.LOGGED_IN),
          (n = yt.config_.INNERTUBE_API_KEY),
          (t = yt.config_.DELEGATED_SESSION_ID),
          (i = yt.config_.INNERTUBE_CONTEXT_CLIENT_VERSION));
      var s = await l();
      return (
        await fetch("https://www.youtube.com/youtubei/v1/guide?key=" + n, {
          credentials: "include",
          headers: _objectSpread(
            _objectSpread(
              _objectSpread(
                {},
                a && {
                  Authorization: s
                }
              ),
              a && {
                "X-Goog-AuthUser": "0"
              }
            ),
            {},
            {
              "Content-Type": "application/json",
              Origin: "https://www.youtube.com",
              "X-Youtube-Client-Name": "3",
              "X-Youtube-Client-Version": "14.21",
              "X-GOOG-VISITOR-ID": ""
            },
            !!t && {
              "X-Goog-PageId": t
            }
          ),
          referrer: "https://www.youtube.com",
          body:
            '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
            i +
            '",\r\n\t\t\t"hl": "en"\r\n\t\t}\r\n\t},\r\n\t"fetchLiveState": true,\r\n}\r\n',
          method: "POST",
          mode: "cors"
        })
      ).json();
    })(n).then((n) => {
      document.querySelector("html[feed]") &&
        document.querySelector("html").setAttribute("feedload", ""),
        (a = n);

      try {
        var r = a.items.find(s).guideSubscriptionsSectionRenderer.items;
      } catch (e) {
        1 == yt.config_.LOGGED_IN && location.reload();
      }

      if (a.items.find(s).guideSubscriptionsSectionRenderer.items.find(o))
        var l =
          a.items.find(s).guideSubscriptionsSectionRenderer.items.find(o)
            .guideCollapsibleEntryRenderer.expandableItems.length + 6;
      else l = a.items.find(s).guideSubscriptionsSectionRenderer.items.length;
      var d = "";

      for (i = 0, j = r.length - 1; i < j; i++) {
        var c = "",
          u = " no-count";
        ("GUIDE_ENTRY_PRESENTATION_STYLE_NEW_CONTENT" !=
          r[i].guideEntryRenderer.presentationStyle &&
          1 != r[i].guideEntryRenderer.badges.liveBroadcasting) ||
          ((c =
            '<span class="guide-count yt-uix-tooltip yt-valign">\n      <span class="yt-valign-container">+1</span>\n\t\t\t</span>'),
          (u = "")),
          (d +=
            '<li class="guide-channel" id="' +
            r[
              i
            ].guideEntryRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
              "/"
            )[2] +
            '-wg-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="' +
            r[i].guideEntryRenderer.navigationEndpoint.commandMetadata
              .webCommandMetadata.url +
            '" title="' +
            r[i].guideEntryRenderer.formattedTitle.simpleText +
            '" data-sessionlink="" data-channel-id="' +
            r[
              i
            ].guideEntryRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
              "/"
            )[2] +
            '">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img data-thumb-manual="1" data-group-key="guide-channel-thumbs" src="' +
            r[i].guideEntryRenderer.thumbnail.thumbnails[0].url +
            '" alt="Thumbnail" width="18">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name' +
            u +
            '">\n        <span>' +
            r[i].guideEntryRenderer.formattedTitle.simpleText +
            "</span>\n      </span>\n    </span>" +
            c +
            "\n\n  </a>\n\n  </li>");
      }

      try {
        r =
          a.items.find(s).guideSubscriptionsSectionRenderer.items[7]
            .guideCollapsibleEntryRenderer.expandableItems;
        (c = ""), (u = " no-count");

        for (
          ("GUIDE_ENTRY_PRESENTATION_STYLE_NEW_CONTENT" !=
            r[i].guideEntryRenderer.presentationStyle &&
            1 != r[i].guideEntryRenderer.badges.liveBroadcasting) ||
            ((c =
              '<span class="guide-count yt-uix-tooltip yt-valign">\n      <span class="yt-valign-container">+1</span>\n\t\t\t</span>'),
            (u = "")),
            i = 0,
            j = 14;
          i < j;
          i++
        )
          d +=
            '<li class="guide-channel" id="' +
            r[
              i
            ].guideEntryRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
              "/"
            )[2] +
            '-wg-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="' +
            r[i].guideEntryRenderer.navigationEndpoint.commandMetadata
              .webCommandMetadata.url +
            '" title="' +
            r[i].guideEntryRenderer.formattedTitle.simpleText +
            '" data-sessionlink="" data-channel-id="' +
            r[
              i
            ].guideEntryRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
              "/"
            )[2] +
            '">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img data-thumb-manual="1" data-group-key="guide-channel-thumbs" src="' +
            r[i].guideEntryRenderer.thumbnail.thumbnails[0].url +
            '" alt="Thumbnail" width="18">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name' +
            u +
            '">\n        <span>' +
            r[i].guideEntryRenderer.formattedTitle.simpleText +
            "</span>\n      </span>\n    </span>" +
            c +
            "\n\n  </a>\n\n  </li>";

        r.length >= 14 &&
          (d +=
            '<li class="guide-channel load-more-channels" id="wg-guide-item">\n        <div class="guide-item yt-uix-sessionlink yt-valign spf-nolink no-spf " href="#" data-sessionlink="" data-channel-id="">\n    <span class="yt-valign-container">\n\n</span>\n      <span class="display-name no-count">\n        <span>' +
            v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_LOAD +
            "</span>\n      </span>\n    </span>\n\n  </div>\n\n  </li>");
      } catch (e) {
        console.log(e);
      }

      function p() {
        var e = "";

        for (i = 14, j = r.length - 1; i < j; i++) {
          var n = "",
            t = " no-count";
          ("GUIDE_ENTRY_PRESENTATION_STYLE_NEW_CONTENT" !=
            r[i].guideEntryRenderer.presentationStyle &&
            1 != r[i].guideEntryRenderer.badges.liveBroadcasting) ||
            ((n =
              '<span class="guide-count yt-uix-tooltip yt-valign">\n      <span class="yt-valign-container">+1</span>\n\t\t\t</span>'),
            (t = "")),
            (e +=
              '<li class="guide-channel guide-optional-ajax" id="' +
              r[
                i
              ].guideEntryRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
                "/"
              )[2] +
              '-wg-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="' +
              r[i].guideEntryRenderer.navigationEndpoint.commandMetadata
                .webCommandMetadata.url +
              '" title="' +
              r[i].guideEntryRenderer.formattedTitle.simpleText +
              '" data-sessionlink="" data-channel-id="' +
              r[
                i
              ].guideEntryRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
                "/"
              )[2] +
              '">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img data-thumb-manual="1" data-group-key="guide-channel-thumbs" src="' +
              r[i].guideEntryRenderer.thumbnail.thumbnails[0].url +
              '" alt="Thumbnail" width="18">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name' +
              t +
              '">\n        <span>' +
              r[i].guideEntryRenderer.formattedTitle.simpleText +
              "</span>\n      </span>\n    </span>" +
              n +
              "\n\n  </a>\n\n  </li>");
        }

        return (
          document
            .querySelector(".guide-sort-choice")
            .parentElement.insertAdjacentHTML(
              "beforeend",
              '<span checked="false" onclick=";return false;" class="guide-sort-choice yt-uix-button-menu-item optional-ajax-killer" data-guide-sort="0">' +
                v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_UNLOAD +
                "</span>"
            ),
          (document.querySelector(".optional-ajax-killer").onclick =
            function () {
              document
                .querySelectorAll(".guide-optional-ajax")
                .forEach((e) => e.remove()),
                document.querySelector(".optional-ajax-killer").remove();
            }),
          e
        );
      }

      if (v3.htmlBuilderConfig.core.NIRVANA)
        m =
          '<div class="guide-module-content yt-scrollbar hid" style="display: block;">\n    <ul class="guide-toplevel">\n            <li class="guide-section hid">\n    <div class="guide-item-container personal-item">\n        <h3></h3>\n      <ul class="guide-user-links yt-box">\n          \n  <li class="guide-channel" id="">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/profile" title="Your channel" data-sessionlink="" data-channel-id="">\n    <span class="yt-valign-container">\n      <span class="display-name no-count">\n        <span><b></b></span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n          \n  <li class="guide-channel" id="watch_later-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/feed/watch_later" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_WL +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-personal" data-channel-id="watch_later">\n    <span class="yt-valign-container">\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_WL +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n          \n  <li class="guide-channel" id="history-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/reporthistory?v3feed=hIsToRy" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_HISTORY +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-personal" data-channel-id="history">\n    <span class="yt-valign-container">\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_HISTORY +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n          \n  <li class="guide-channel" id="playlists-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/profile?gotoplaylist" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_PLAYLISTS +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-personal" data-channel-id="playlists">\n    <span class="yt-valign-container">\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_PLAYLISTS +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n    <hr class="guide-section-separator">\n  </li>\n\n            <li class="guide-section">\n    <div class="guide-item-container personal-item">\n        <h3></h3>\n      <ul class="guide-user-links yt-box">\n          \n  <li class="guide-channel" id="what_to_watch-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/reporthistory?v3feed=wHaT_2_wAtCh" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_W2W +
          '" data-sessionlink="" data-channel-id="what_to_watch">\n    <span class="yt-valign-container"><span class="thumb guide-what-to-watch-icon yt-sprite"></span>\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_W2W +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n          \n  <li class="guide-channel" id="social-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/reporthistory?v3feed=tReNdInG" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_TRENDING +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-system" data-channel-id="Trending">\n    <span class="yt-valign-container"><span class="thumb guide-trending-icon yt-sprite"></span>\n      <span class="display-name">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_TRENDING +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n  \n    <li class="guide-channel" id="subscriptions-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/feed/subscriptions" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTION +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-system" data-channel-id="subscriptions">\n    <span class="yt-valign-container"><span class="thumb guide-my-subscriptions-icon yt-sprite"></span>\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTION_NIRVANA +
          '</span>\n      </span>\n    </span>\n\t\n\t<span class="guide-count yt-uix-tooltip yt-valign">\n      <span class="yt-valign-container">' +
          l +
          '</span>\n    </span>\n\n  </a>\n\n  </li>\n  <li class="guide-channel" id="history-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/reporthistory?v3feed=hIsToRy" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_HISTORY +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-personal" data-channel-id="history">\n    <span class="yt-valign-container"><span class="thumb guide-history-icon yt-sprite"></span>\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_HISTORY_NIRVANA +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n  <li class="guide-channel" id="watch_later-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/feed/watch_later" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_WL +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-personal" data-channel-id="watch_later">\n    <span class="yt-valign-container"><span class="thumb guide-watch-later-icon yt-sprite"></span>\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_WL +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n    <hr class="guide-section-separator">\n  </li>\n\n            <li id="guide-subscriptions-section" class="guide-section without-filter">\n      <span class="guide-sort-container yt-uix-button-group"><button onclick=";return false;" class="guide-sort-button flip yt-uix-button yt-uix-button-guide-sorts yt-uix-button-size-small yt-uix-button-empty" type="button" data-button-has-sibling-menu="true" data-guide-sort="0" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true"><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><ul class="yt-uix-button-menu yt-uix-button-menu-guide-sorts hid" role="menu" aria-haspopup="true" style="min-width: 10px; left: 19px; top: 11px; display: none;"><li role="menuitem" id="aria-id-31698663123"><span class="yt-uix-button-icon-wrapper yt-uix-button-icon-checkbox"><img class="yt-uix-button-icon-dropdown-checked" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></span><span checked="True" onclick=";return false;" class="guide-sort-choice yt-uix-button-menu-item" data-guide-sort="0">' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_ATOZ +
          "</span></li></ul></button></span>\n    <h3>" +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_HEADER +
          '</h3>\n    <div id="guide-subs-footer-container">\n      <div id="guide-subscriptions-container">\n          <div class="guide-channels-content yt-scrollbar">\n    <ul id="guide-channels" class="guide-channels-list guide-item-container yt-uix-scroller filter-has-matches" data-scroller-mousewheel-listener="" data-scroller-scroll-listener="">' +
          d +
          '\n\n\n    </ul>\n  </div>\n\n      </div>\n    </div>\n    <hr class="guide-section-separator">\n  </li>\n\n            <li class="guide-section">\n    <div class="guide-item-container personal-item">\n        <h3></h3>\n      <ul class="guide-user-links yt-box">\n          \n  <li class="guide-channel" id="guide_builder-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/channels" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_GUIDEBUILDER +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-manage" data-channel-id="guide_builder">\n    <span class="yt-valign-container">\n        <span class="thumb guide-builder-icon yt-sprite"></span>\n          <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\n        </span>\n      <span class=" no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_GUIDEBUILDER +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n          \n  <li class="guide-channel" id="subscription_manager-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/subscription_manager" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_MANAGE +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-manage" data-channel-id="subscription_manager">\n    <span class="yt-valign-container">\n        <span class="thumb guide-subscription-manager-icon yt-sprite"></span>\n          <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\n        </span>\n      <span class=" no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_MANAGE +
          "</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n  </li>\n\n    </ul>\n  </div>";
      else
        var m =
          '<div class="guide-module-content yt-scrollbar hid" style="display: block;">\n    <ul class="guide-toplevel">\n            <li class="guide-section">\n    <div class="guide-item-container personal-item">\n        <h3></h3>\n      <ul class="guide-user-links yt-box">\n          \n  <li class="guide-channel" id="">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/profile" title="Your channel" data-sessionlink="" data-channel-id="">\n    <span class="yt-valign-container">\n      <span class="display-name no-count">\n        <span><b>' +
          t +
          '</b></span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n          \n  <li class="guide-channel" id="watch_later-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/feed/watch_later" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_WL +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-personal" data-channel-id="watch_later">\n    <span class="yt-valign-container">\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_WL +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n          \n  <li class="guide-channel" id="history-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/reporthistory?v3feed=hIsToRy" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_HISTORY +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-personal" data-channel-id="history">\n    <span class="yt-valign-container">\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_HISTORY +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n          \n  <li class="guide-channel" id="playlists-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/profile?gotoplaylist" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_PLAYLISTS +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-personal" data-channel-id="playlists">\n    <span class="yt-valign-container">\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_PLAYLISTS +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n    <hr class="guide-section-separator">\n  </li>\n\n            <li class="guide-section">\n    <div class="guide-item-container personal-item">\n        <h3></h3>\n      <ul class="guide-user-links yt-box">\n          \n  <li class="guide-channel" id="what_to_watch-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/reporthistory?v3feed=wHaT_2_wAtCh" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_W2W +
          '" data-sessionlink="" data-channel-id="what_to_watch">\n    <span class="yt-valign-container">\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_W2W +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n          \n  <li class="guide-channel" id="social-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/reporthistory?v3feed=tReNdInG" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_TRENDING +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-system" data-channel-id="Trending">\n    <span class="yt-valign-container">\n      <span class="display-name">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_TRENDING +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n  \n    <li class="guide-channel" id="subscriptions-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/feed/subscriptions" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTION +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-system" data-channel-id="subscriptions">\n    <span class="yt-valign-container">\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTION +
          '</span>\n      </span>\n    </span>\n\t\n\t<span class="guide-count yt-uix-tooltip yt-valign">\n      <span class="yt-valign-container">' +
          l +
          '</span>\n    </span>\n\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n    <hr class="guide-section-separator">\n  </li>\n\n            <li id="guide-subscriptions-section" class="guide-section without-filter">\n      <span class="guide-sort-container yt-uix-button-group"><button onclick=";return false;" class="guide-sort-button flip yt-uix-button yt-uix-button-guide-sorts yt-uix-button-size-small yt-uix-button-empty" type="button" data-button-has-sibling-menu="true" data-guide-sort="0" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true"><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><ul class="yt-uix-button-menu yt-uix-button-menu-guide-sorts hid" role="menu" aria-haspopup="true" style="min-width: 10px; left: 19px; top: 11px; display: none;"><li role="menuitem" id="aria-id-31698663123"><span class="yt-uix-button-icon-wrapper yt-uix-button-icon-checkbox"><img class="yt-uix-button-icon-dropdown-checked" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></span><span checked="True" onclick=";return false;" class="guide-sort-choice yt-uix-button-menu-item" data-guide-sort="0">' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_ATOZ +
          "</span></li></ul></button></span>\n    <h3>" +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_HEADER +
          '</h3>\n    <div id="guide-subs-footer-container">\n      <div id="guide-subscriptions-container">\n          <div class="guide-channels-content yt-scrollbar">\n    <ul id="guide-channels" class="guide-channels-list guide-item-container yt-uix-scroller filter-has-matches" data-scroller-mousewheel-listener="" data-scroller-scroll-listener="">' +
          d +
          '\n\n\n    </ul>\n  </div>\n\n      </div>\n    </div>\n    <hr class="guide-section-separator">\n  </li>\n\n            <li class="guide-section">\n    <div class="guide-item-container personal-item">\n        <h3></h3>\n      <ul class="guide-user-links yt-box">\n          \n  <li class="guide-channel" id="guide_builder-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/channels" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_GUIDEBUILDER +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-manage" data-channel-id="guide_builder">\n    <span class="yt-valign-container">\n        <span class="thumb guide-management-plus-icon">\n          <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\n        </span>\n      <span class="display-name no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_GUIDEBUILDER +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n          \n  <li class="guide-channel" id="subscription_manager-guide-item">\n        <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink " href="/subscription_manager" title="' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_MANAGE +
          '" data-sessionlink="ei=nn0KUubpEcL8kwLQ5oGQDA&amp;feature=g-manage" data-channel-id="subscription_manager">\n    <span class="yt-valign-container">\n        <span class="thumb guide-management-settings-icon">\n          <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\n        </span>\n      <span class=" no-count">\n        <span>' +
          v3.UIMSG[v3.nationIndex].GUIDE_FEED_SUBSCRIPTIONS_MANAGE +
          '</span>\n      </span>\n    </span>\n\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n    <hr class="guide-section-separator">\n  </li>\n\n    </ul>\n  </div>';

      try {
        (document.querySelector(".guide-module-content").outerHTML = m),
          document.querySelector(".load-more-channels") &&
            (document.querySelector(".load-more-channels").onclick =
              function () {
                document
                  .querySelector("#guide-channels")
                  .insertAdjacentHTML("beforeend", p()),
                  document.querySelector(".load-more-channels").remove();
              });
      } catch (n) {
        e(".guide-module-content").then(function (e) {
          (e.outerHTML = m),
            (document.querySelector(".load-more-channels").onclick =
              function () {
                document
                  .querySelector("#guide-channels")
                  .insertAdjacentHTML("beforeend", p()),
                  document.querySelector(".load-more-channels") &&
                    document.querySelector(".load-more-channels").remove();
              });
        });
      }
    });
  }

  function l() {
    class e {
      static hash(n, t) {
        const i = Object.assign(
          {
            msgFormat: "string",
            outFormat: "hex"
          },
          t
        );

        switch (i.msgFormat) {
          default:
          case "string":
            n = (function (e) {
              try {
                return new TextEncoder()
                  .encode(e, "utf-8")
                  .reduce((e, n) => e + String.fromCharCode(n), "");
              } catch (n) {
                return unescape(encodeURIComponent(e));
              }
            })(n);

            break;

          case "hex-bytes":
            n = (function (e) {
              const n = e.replace(" ", "");
              return "" == n
                ? ""
                : n
                    .match(/.{2}/g)
                    .map((e) => String.fromCharCode(parseInt(e, 16)))
                    .join("");
            })(n);
        }

        const a = [1518500249, 1859775393, 2400959708, 3395469782],
          s = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
          o = (n += String.fromCharCode(128)).length / 4 + 2,
          r = Math.ceil(o / 16),
          l = new Array(r);

        for (let e = 0; e < r; e++) {
          l[e] = new Array(16);

          for (let t = 0; t < 16; t++)
            l[e][t] =
              (n.charCodeAt(64 * e + 4 * t + 0) << 24) |
              (n.charCodeAt(64 * e + 4 * t + 1) << 16) |
              (n.charCodeAt(64 * e + 4 * t + 2) << 8) |
              (n.charCodeAt(64 * e + 4 * t + 3) << 0);
        }

        (l[r - 1][14] = (8 * (n.length - 1)) / Math.pow(2, 32)),
          (l[r - 1][14] = Math.floor(l[r - 1][14])),
          (l[r - 1][15] = (8 * (n.length - 1)) & 4294967295);

        for (let n = 0; n < r; n++) {
          const t = new Array(80);

          for (let e = 0; e < 16; e++) t[e] = l[n][e];

          for (let n = 16; n < 80; n++)
            t[n] = e.ROTL(t[n - 3] ^ t[n - 8] ^ t[n - 14] ^ t[n - 16], 1);

          let i = s[0],
            o = s[1],
            r = s[2],
            d = s[3],
            c = s[4];

          for (let n = 0; n < 80; n++) {
            const s = Math.floor(n / 20),
              l = (e.ROTL(i, 5) + e.f(s, o, r, d) + c + a[s] + t[n]) >>> 0;
            (c = d), (d = r), (r = e.ROTL(o, 30) >>> 0), (o = i), (i = l);
          }

          (s[0] = (s[0] + i) >>> 0),
            (s[1] = (s[1] + o) >>> 0),
            (s[2] = (s[2] + r) >>> 0),
            (s[3] = (s[3] + d) >>> 0),
            (s[4] = (s[4] + c) >>> 0);
        }

        for (let e = 0; e < s.length; e++)
          s[e] = ("00000000" + s[e].toString(16)).slice(-8);

        const d = "hex-w" == i.outFormat ? " " : "";
        return s.join(d);
      }

      static f(e, n, t, i) {
        switch (e) {
          case 0:
            return (n & t) ^ (~n & i);

          case 1:
          case 3:
            return n ^ t ^ i;

          case 2:
            return (n & t) ^ (n & i) ^ (t & i);
        }
      }

      static ROTL(e, n) {
        return (e << n) | (e >>> (32 - n));
      }
    }

    return (
      (n = Math.round(new Date() / 1e3)),
      (t = (function (e) {
        for (
          var n = e + "=",
            t = decodeURIComponent(document.cookie).split(";"),
            i = 0;
          i < t.length;
          i++
        ) {
          for (var a = t[i]; " " == a.charAt(0); ) a = a.substring(1);

          if (0 == a.indexOf(n)) return a.substring(n.length, a.length);
        }

        return "";
      })("SAPISID")),
      "SAPISIDHASH " +
        n +
        "_" +
        e.hash(n + " " + t + " https://www.youtube.com")
    );
    var n, t;
  }

  getCookie("vtfia")
    ? ((window.fytauth = {}),
      (window.fytauth.INNERTUBE_API_KEY = getCookie("vtfia")
        .split("a=")[1]
        .split(",")[0]),
      (window.fytauth.DELEGATED_SESSION_ID = getCookie("vtfia")
        .split("b=")[1]
        .split(",")[0]),
      (window.fytauth.INNERTUBE_CONTEXT_CLIENT_VERSION = getCookie("vtfia")
        .split("c=")[1]
        .split(",")[0]),
      (window.fytauth.LOGGED_IN = getCookie("vtfia")
        .split("d=")[1]
        .split(",")[0]),
      r(0, ""),
      "/watch" == window.location.pathname &&
        t(
          api.watch.comment.contigen(
            window.location.href.split("v=")[1].split("&")[0]
          ),
          0
        ).then((e) =>
          document.documentElement.insertAdjacentHTML(
            "beforeend",
            '<div id="v3-initial-comment-ajax" class="hid">' +
              JSON.stringify(e) +
              "</div>"
          )
        ),
      document.querySelector("html[w7]") &&
        (document.querySelector("html[v3player]")
          ? v3PlayerLoader(window.location.href.split("v=")[1].split("&")[0], 0)
          : e("html[v3player]").then(function (e) {
              v3PlayerLoader(
                window.location.href.split("v=")[1].split("&")[0],
                0
              );
            })),
      window.location.href.includes("v3feed=wHaT_2_wAtCh") &&
        !window.location.href.includes("v3cv=0") &&
        a(0),
      n().then(function () {
        0 == yt.config_.LOGGED_IN &&
          (document.cookie =
            "vtfia=NULL; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/");
      }))
    : n().then(function () {
        "/watch" == window.location.pathname &&
          t(
            api.watch.comment.contigen(
              window.location.href.split("v=")[1].split("&")[0]
            ),
            1
          ).then((e) =>
            document.documentElement.insertAdjacentHTML(
              "beforeend",
              '<div id="v3-initial-comment-ajax" class="hid">' +
                JSON.stringify(e) +
                "</div>"
            )
          ),
          1 == yt.config_.LOGGED_IN &&
            (document.cookie =
              "vtfia=a=" +
              yt.config_.INNERTUBE_API_KEY +
              ",b=" +
              yt.config_.DELEGATED_SESSION_ID +
              ",c=" +
              yt.config_.INNERTUBE_CONTEXT_CLIENT_VERSION +
              ",d=" +
              yt.config_.LOGGED_IN +
              "; expires=" +
              new Date(864e5 + Date.now()).toUTCString() +
              "; path=/"),
          1 == yt.config_.LOGGED_IN && r(1, ""),
          document.querySelector("html[w7]") &&
            (document.querySelector("html[v3player]")
              ? v3PlayerLoader(
                  window.location.href.split("v=")[1].split("&")[0],
                  1
                )
              : e("html[v3player]").then(function (e) {
                  v3PlayerLoader(
                    window.location.href.split("v=")[1].split("&")[0],
                    1
                  );
                })),
          window.location.href.includes("v3feed=wHaT_2_wAtCh") &&
            !window.location.href.includes("v3cv=0") &&
            a(1);
      }),
    (window.spfFastComments = function () {
      t(
        api.watch.comment.contigen(
          window.location.href.split("v=")[1].split("&")[0]
        ),
        1
      ).then((e) =>
        document.documentElement.insertAdjacentHTML(
          "beforeend",
          '<div id="v3-initial-comment-ajax" class="hid">' +
            JSON.stringify(e) +
            "</div>"
        )
      );
    }),
    (guideService.a = r);
}

getCookie("vtpc")
  ? (v3.playerDemandedQuality = getCookie("vtpc"))
  : (v3.playerDemandedQuality = "auto"),
  (v3.setSetting = function (e, n, t) {
    return (
      ("autoplay" == (e = e.toLocaleLowerCase()) ||
        "loop" == e ||
        "verbose" == e ||
        "dash" == e ||
        "vp9" == e ||
        "channeldefaultpage" == e ||
        "cinemastate" == e ||
        "nirvanaui" == e ||
        "ignoreinitialtip" == e) &&
      (1 == n ? (n = 1) : 0 == n && (n = 0),
      "autoplay" == e && (e = "a"),
      "loop" == e && (e = "b"),
      "verbose" == e && (e = "c"),
      "dash" == e && (e = "d"),
      "vp9" == e && (e = "e"),
      "channeldefaultpage" == e && (e = "f"),
      "cinemastate" == e && (e = "g"),
      "nirvanaui" == e && (e = "h"),
      "ignoreinitialtip" == e && (e = "i"),
      (document.cookie =
        "vtcf=" +
        getCookie("vtcf").replace(
          e + "=" + getCookie("vtcf")[getCookie("vtcf").search(e + "=") + 2],
          e + "=" + n
        ) +
        "; expires=Thu, 24 Dec 2037 12:00:00 UTC; path=/"),
      t && location.reload(),
      !0)
    );
  }),
  (v3.unsafeSetting = function (e, n) {
    document.cookie =
      "vtcf=" +
      getCookie("vtcf").replace(
        e + "=" + getCookie("vtcf")[getCookie("vtcf").search(e + "=") + 2],
        e + "=" + n
      ) +
      "; expires=Thu, 24 Dec 2037 12:00:00 UTC; path=/";
  }),
  (window.location.href.includes("/channel/") &&
    !window.location.href.includes("v3cv=0")) ||
    (window.location.href.includes("/user/") &&
      !window.location.href.includes("v3cv=0")) ||
    (window.location.href.includes("/c/") &&
      !window.location.href.includes("v3cv=0")) ||
    mainGuideSrv();
