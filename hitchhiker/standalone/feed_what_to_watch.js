if (
  window.location.href
    .toLocaleLowerCase()
    .includes("/reporthistory?v3feed=what_2_watch") &&
  !window.location.href.includes("v3cv=0")
) {
  function waitForElm(e) {
    return new Promise((t) => {
      if (document.querySelector(e)) return t(document.querySelector(e));
      const n = new MutationObserver((i) => {
        document.querySelector(e) &&
          (t(document.querySelector(e)), n.disconnect());
      });
      n.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    });
  }

  function addStyle(e) {
    const t = document.createElement("style");
    (t.textContent = e), document.head.append(t);
  }

  function changeFavicon(e) {
    var t = document.createElement("link"),
      n = document.getElementById("dynamic-favicon");
    (t.id = "dynamic-favicon"),
      (t.rel = "shortcut icon"),
      (t.href = e),
      n && document.head.removeChild(n),
      document.head.appendChild(t);
  }

  softChangeUrl("/", !0),
    document
      .querySelector("html")
      .removeAttribute("standardized-themed-scrollbar"),
    document
      .querySelector("html")
      .setAttribute("data-cast-api-enabled", "true"),
    document.querySelector("body").setAttribute("v3cv2o13", ""),
    document
      .querySelector("body")
      .removeAttribute("standardized-themed-scrollbar"),
    document
      .querySelector("body")
      .setAttribute("class", v3.htmlBuilderConfig.feed.what_2_watch),
    document.body.classList.add("exp-fixed-masthead"),
    v3.htmlBuilderConfig.core.NIRVANA &&
      document
        .querySelector("body")
        .setAttribute(
          "class",
          "ltr site-center-aligned site-as-giant-card guide-pinning-enabled exp-appbar-open-guide exp-appbar-onebar appbar-hidden exp-appbar-small-thumbs not-exp-new-metadata-style hitchhiker-enabled guide-enabled guide-expanded flex-width-enabled flex-width-enabled-snap page-loaded"
        ),
    document.querySelector("body").setAttribute("data-player-size", "small"),
    document.querySelector("body").setAttribute("use-v3-proportion", ""),
    useverbose &&
      console.log(
        "%c[v3experimentalcode]",
        "color: #8A2BE2",
        " DEBUG : detected v3 home test page"
      );
  var ytdatac = document.createElement("div");
  ytdatac.setAttribute("id", "ytdata-temp-container"),
    ytdatac.setAttribute("style", "display:none;"),
    document.querySelector("body").append(ytdatac),
    $("body").append(
      '<script>document.querySelector("#ytdata-temp-container").innerHTML = JSON.stringify(ytInitialData);</script>'
    );
  var ytdata = document.querySelector("#ytdata-temp-container").innerHTML;
  ytdata = JSON.parse(ytdata);
  var ytauthdata = document.createElement("div");
  ytauthdata.setAttribute("id", "ytauthdata-temp-container"),
    ytauthdata.setAttribute("style", "display:none;"),
    document.querySelector("body").append(ytauthdata),
    $("body").append(
      '<script>var authinfo = {};\r\nauthinfo.INNERTUBE_API_KEY = yt.config_.INNERTUBE_API_KEY;\r\nauthinfo.INNERTUBE_CONTEXT = yt.config_.INNERTUBE_CONTEXT;\r\nauthinfo.INNERTUBE_CONTEXT_CLIENT_VERSION = yt.config_.INNERTUBE_CONTEXT_CLIENT_VERSION;\r\nauthinfo.LOGGED_IN = yt.config_.LOGGED_IN;\r\nauthinfo.DELEGATED_SESSION_ID = yt.config_.DELEGATED_SESSION_ID;\r\nauthinfo.HL = yt.config_.HL;\r\nauthinfo.GL = yt.config_.GL;\r\nauthinfo.VISITOR_DATA = yt.config_.VISITOR_DATA;\r\ndocument.querySelector("#ytauthdata-temp-container").innerHTML = JSON.stringify(authinfo);</script>'
    );
  var authinfo = JSON.parse(
    document.querySelector("#ytauthdata-temp-container").innerHTML
  );
  parseYtData(ytdata),
    1 == authinfo.LOGGED_IN &&
      (getUnreadNotifications(),
      (gbarname = v3.UIMSG[v3.nationIndex].GBAR_INFO_MY_ACCOUNT));
  var userpicture,
    bodycont = document.createElement("div");

  async function getHomeFeed() {
    await homeAction("gethomefeeds", "").then((e) => {
      buildHomeFeed(
        e.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
          .sectionListRenderer
      );
    });
  }

  async function getTVFeed() {
    var e,
      t,
      n = await homeAction("gettvfeedtest", "").then((t) => {
        (n = t),
          console.log(n),
          document.querySelector(".feed-page .yt-spinner").classList.add("hid"),
          (e =
            n.contents.tvBrowseRenderer.content.tvSurfaceContentRenderer.content
              .sectionListRenderer.continuations[0].nextContinuationData
              .continuation);
      });
    (n = await homeAction("gettvcontitest", e).then((e) => {
      console.log(e),
        (t =
          e.continuationContents.sectionListContinuation.continuations[0]
            .nextContinuationData.continuation);
    })),
      (n = await homeAction("gettvcontitest", t).then((e) => {
        console.log(e);
      }));
  }

  function xmlGetHomeV1() {
    const e = new XMLHttpRequest();
    e.open("POST", "https://www.youtube.com/?pbj=1"),
      e.setRequestHeader("X-YOUTUBE-CLIENT-NAME", "1"),
      e.setRequestHeader("X-YOUTUBE-CLIENT-VERSION", "1.20200101.01.01"),
      e.send(),
      (e.onload = () => {
        var t = JSON.parse(e.responseText);
        console.log(t);
      });
  }

  function slideShelf(e) {
    document
      .querySelector(
        ".feed-item-container:nth-of-type(" + e + ") .compact-shelf"
      )
      .getAttribute("class")
      .includes("yt-uix-shelfslider-at-head")
      ? (document
          .querySelector(
            ".feed-item-container:nth-of-type(" + e + ") .compact-shelf"
          )
          .classList.add("yt-uix-shelfslider-is-moving"),
        document
          .querySelector(
            ".feed-item-container:nth-of-type(" + e + ") .compact-shelf"
          )
          .classList.remove("yt-uix-shelfslider-at-head"),
        document
          .querySelector(
            ".feed-item-container:nth-of-type(" + e + ") .compact-shelf"
          )
          .classList.add("yt-uix-shelfslider-at-tail"),
        document
          .querySelector(
            ".feed-item-container:nth-of-type(" +
              e +
              ") .compact-shelf .yt-uix-shelfslider-list"
          )
          .setAttribute("style", "left: 0px;"),
        setTimeout(function () {
          document
            .querySelector(
              ".feed-item-container:nth-of-type(" +
                e +
                ") .compact-shelf .yt-uix-shelfslider-list"
            )
            .setAttribute("style", "left: -835px;");
        }, 10),
        document
          .querySelector(
            ".feed-item-container:nth-of-type(" + e + ") .compact-shelf"
          )
          .classList.remove("yt-uix-shelfslider-is-moving"))
      : (document
          .querySelector(
            ".feed-item-container:nth-of-type(" + e + ") .compact-shelf"
          )
          .classList.add("yt-uix-shelfslider-is-moving"),
        document
          .querySelector(
            ".feed-item-container:nth-of-type(" + e + ") .compact-shelf"
          )
          .classList.remove("yt-uix-shelfslider-at-tail"),
        document
          .querySelector(
            ".feed-item-container:nth-of-type(" + e + ") .compact-shelf"
          )
          .classList.add("yt-uix-shelfslider-at-head"),
        document
          .querySelector(
            ".feed-item-container:nth-of-type(" +
              e +
              ") .compact-shelf .yt-uix-shelfslider-list"
          )
          .setAttribute("style", "left: -835px;"),
        setTimeout(function () {
          document
            .querySelector(
              ".feed-item-container:nth-of-type(" +
                e +
                ") .compact-shelf .yt-uix-shelfslider-list"
            )
            .setAttribute("style", "left: 0px;");
        }, 10),
        document
          .querySelector(
            ".feed-item-container:nth-of-type(" + e + ") .compact-shelf"
          )
          .classList.remove("yt-uix-shelfslider-is-moving"));
  }

  function buildHomeFeed(e) {
    e = e.contents;
    var t = document.createElement("ul");
    t.setAttribute("class", "feed-list context-data-container"),
      document.querySelector(".feed-page").append(t);
    var n = "";

    try {
      var s, a, d, o, r, l;

      try {
        r =
          e[0].itemSectionRenderer.contents[0].shelfRenderer.content
            .horizontalListRenderer.items[3].gridVideoRenderer.publishedTimeText
            .simpleText;
      } catch (e) {
        r = "Static";
      }

      try {
        d =
          e[0].itemSectionRenderer.contents[0].shelfRenderer.content
            .horizontalListRenderer.items[2].gridVideoRenderer.publishedTimeText
            .simpleText;
      } catch (e) {
        d = "Static";
      }

      try {
        o =
          e[0].itemSectionRenderer.contents[0].shelfRenderer.content
            .horizontalListRenderer.items[1].gridVideoRenderer.lengthText
            .simpleText;
      } catch (e) {
        o = "Static";
      }

      try {
        s =
          e[0].itemSectionRenderer.contents[0].shelfRenderer.content
            .horizontalListRenderer.items[1].gridVideoRenderer.publishedTimeText
            .simpleText;
      } catch (e) {
        s = "Static";
      }

      try {
        a =
          e[0].itemSectionRenderer.contents[0].shelfRenderer.content
            .horizontalListRenderer.items[2].gridVideoRenderer.lengthText
            .simpleText;
      } catch (e) {
        a = "Static";
      }

      try {
        l =
          e[0].itemSectionRenderer.contents[0].shelfRenderer.content
            .horizontalListRenderer.items[3].gridVideoRenderer.lengthText
            .simpleText;
      } catch (e) {
        l = "Static";
      }

      n =
        '<li class="feed-item-container  browse-list-item-container vve-check " data-sessionlink="">\n    <div class="feed-item-dismissable  ">\n      <div class="feed-item-main feed-item-no-author">\n        <div class="feed-item-main-content">\n                    <div class="shelf-wrapper clearfix">\n          <div class="lohp-newspaper-shelf vve-check" data-sessionlink="">\n    \n    <div class="lohp-large-shelf-container">\n        <div class="context-data-item clearfix" data-context-item-time="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridVideoRenderer.lengthText
          .simpleText +
        '" data-context-item-type="video" data-context-item-user="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridVideoRenderer.longBylineText
          .runs[0].text +
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
          .horizontalListRenderer.items[0].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
        '" data-sessionlink="">\n    \n    <a href="/watch?v=' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
        '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink yt-fluid-thumb-link contains-addto lohp-thumb-wrap" data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-370 yt-thumb-fluid">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://i.ytimg.com/vi/' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
        '/maxresdefault.jpg" width="370">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n    <span class="video-time">' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridVideoRenderer.lengthText
          .simpleText +
        '</span>\n\n\n  <button title="Watch Later" onclick=";return false;" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" data-video-ids="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
        '" data-button-menu-id="shared-addto-watch-later-login" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n      <a class="lohp-video-link max-line-2 yt-uix-sessionlink " data-sessionlink="" href="/watch?v=' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
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
          .horizontalListRenderer.items[0].gridVideoRenderer.shortBylineText
          .runs[0].navigationEndpoint.browseEndpoint.canonicalBaseUrl +
        '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridVideoRenderer.longBylineText
          .runs[0].text +
        '</a>\n  </span>\n\n          <span class="view-count">\n      ' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridVideoRenderer.viewCountText
          .simpleText +
        '\n  </span>\n\n            <span class="content-item-time-created" title="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridVideoRenderer.publishedTimeText
          .simpleText +
        '">\n      ' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridVideoRenderer.publishedTimeText
          .simpleText +
        '\n    </span>\n\n      </div>\n  </div>\n\n    </div>\n    <div class="lohp-medium-shelves-container">\n            <div class="lohp-medium-shelf context-data-item vve-check " data-context-item-time="' +
        o +
        '" data-context-item-type="video" data-context-item-user="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[1].gridVideoRenderer.longBylineText
          .runs[0].text +
        '" data-context-item-views="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[1].gridVideoRenderer.viewCountText
          .simpleText +
        '" data-context-item-title="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[1].gridVideoRenderer.title.runs[0]
          .text +
        '" data-context-item-id="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[1].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
        '" data-sessionlink="">\n    \n    <div class="lohp-media-object">\n      <a href="/watch?v=' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[1].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
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
        o +
        '</span>\n\n\n  <button title="Watch Later" onclick=";return false;" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" data-video-ids="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[1].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
        '" data-button-menu-id="shared-addto-watch-later-login" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n    </div>\n    <div class="lohp-media-object-content lohp-medium-shelf-content">\n        <a class="lohp-video-link max-line-2 yt-uix-sessionlink " data-sessionlink="" href="/watch?v=' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[1].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
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
          .horizontalListRenderer.items[1].gridVideoRenderer.shortBylineText
          .runs[0].navigationEndpoint.browseEndpoint.canonicalBaseUrl +
        '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[1].gridVideoRenderer.longBylineText
          .runs[0].text +
        '</a>\n  </span>\n\n      </div>\n        <div class="lohp-video-metadata">\n            <span class="view-count">\n      ' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[1].gridVideoRenderer.viewCountText
          .simpleText +
        '\n  </span>\n\n              <span class="content-item-time-created" title="' +
        s +
        '">\n      ' +
        s +
        '\n    </span>\n\n        </div>\n    </div>\n  </div>\n\n            <div class="lohp-medium-shelf context-data-item vve-check " data-context-item-time="' +
        a +
        '" data-context-item-type="video" data-context-item-user="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[2].gridVideoRenderer.longBylineText
          .runs[0].text +
        '" data-context-item-views="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[2].gridVideoRenderer.viewCountText
          .simpleText +
        '" data-context-item-title="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[2].gridVideoRenderer.title.runs[0]
          .text +
        '" data-context-item-id="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[2].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
        '" data-sessionlink="">\n    \n    <div class="lohp-media-object">\n      <a href="/watch?v=' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[2].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
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
        a +
        '</span>\n\n\n  <button title="Watch Later" onclick=";return false;" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" data-video-ids="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[2].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
        '" data-button-menu-id="shared-addto-watch-later-login" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n    </div>\n    <div class="lohp-media-object-content lohp-medium-shelf-content">\n        <a class="lohp-video-link max-line-2 yt-uix-sessionlink " data-sessionlink="" href="/watch?v=' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[2].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
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
          .horizontalListRenderer.items[2].gridVideoRenderer.shortBylineText
          .runs[0].navigationEndpoint.browseEndpoint.canonicalBaseUrl +
        '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[2].gridVideoRenderer.longBylineText
          .runs[0].text +
        '</a>\n  </span>\n\n      </div>\n        <div class="lohp-video-metadata">\n            <span class="view-count">\n      ' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[2].gridVideoRenderer.viewCountText
          .simpleText +
        '\n  </span>\n\n              <span class="content-item-time-created" title="' +
        d +
        '">\n      ' +
        d +
        '\n    </span>\n\n        </div>\n    </div>\n  </div>\n\n            <div class="lohp-medium-shelf context-data-item vve-check " data-context-item-time="' +
        l +
        '" data-context-item-type="video" data-context-item-user="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[3].gridVideoRenderer.longBylineText
          .runs[0].text +
        '" data-context-item-views="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[3].gridVideoRenderer.viewCountText
          .simpleText +
        '" data-context-item-title="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[3].gridVideoRenderer.title.runs[0]
          .text +
        '" data-context-item-id="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[3].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
        '" data-sessionlink="">\n    \n    <div class="lohp-media-object">\n      <a href="/watch?v=' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[3].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
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
        l +
        '</span>\n\n\n  <button title="Watch Later" onclick=";return false;" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" data-video-ids="' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[3].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
        '" data-button-menu-id="shared-addto-watch-later-login" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n    </div>\n    <div class="lohp-media-object-content lohp-medium-shelf-content">\n        <a class="lohp-video-link max-line-2 yt-uix-sessionlink " data-sessionlink="" href="/watch?v=' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[3].gridVideoRenderer.navigationEndpoint
          .watchEndpoint.videoId +
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
          .horizontalListRenderer.items[3].gridVideoRenderer.shortBylineText
          .runs[0].navigationEndpoint.browseEndpoint.canonicalBaseUrl +
        '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[3].gridVideoRenderer.longBylineText
          .runs[0].text +
        '</a>\n  </span>\n\n      </div>\n        <div class="lohp-video-metadata">\n            <span class="view-count">\n      ' +
        e[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[3].gridVideoRenderer.viewCountText
          .simpleText +
        '\n  </span>\n\n              <span class="content-item-time-created" title="' +
        r +
        '">\n      ' +
        r +
        '\n    </span>\n\n        </div>\n    </div>\n  </div>\n\n    </div>\n  </div>\n\n\n  </div>\n\n\n  \n\n        </div>\n      </div>\n    </div>\n      <div class="feed-item-dismissal-notices"><div class="feed-item-dismissal feed-item-dismissal-hide hid">This item has been removed from your feed</div></div>\n\t\t</li>';
    } catch (e) {
      console.log(e);
    }

    document.querySelector(".feed-list").insertAdjacentHTML("beforeend", n);
    var c = "",
      u = 2;

    for (i = 0, j = e.length; i < j; i++)
      try {
        if (
          "YouTube Mixes" !=
          e[i].itemSectionRenderer.contents[0].shelfRenderer.title.runs[0].text
        ) {
          var m = !1,
            h = "",
            p =
              e[i].itemSectionRenderer.contents[0].shelfRenderer.content
                .horizontalListRenderer.items,
            f = 0;
          0 == i && (f = 4);

          try {
            for (x = f, y = p.length; x < y; x++) {
              var g = "",
                v = "",
                b = "LIVE";

              try {
                b = p[x].gridVideoRenderer.lengthText.simpleText;
              } catch (e) {}

              try {
                (g = p[x].gridVideoRenderer.publishedTimeText.simpleText),
                  (v = p[x].gridVideoRenderer.viewCountText.simpleText);
              } catch (e) {}

              void 0 !== p[x].gridVideoRenderer &&
                (h +=
                  '<li class="channels-content-item yt-shelf-grid-item yt-uix-shelfslider-item ">\n              \n\n\n    <div class="yt-lockup clearfix  yt-lockup-video yt-lockup-grid vve-check context-data-item" data-context-item-time="' +
                  b +
                  '" data-context-item-type="video" data-context-item-user="' +
                  p[x].gridVideoRenderer.shortBylineText.runs[0].text +
                  '" data-context-item-views="' +
                  v +
                  '" data-context-item-title="' +
                  p[x].gridVideoRenderer.title.runs[0].text +
                  '" data-context-item-id="' +
                  p[x].gridVideoRenderer.videoId +
                  '">\n    <div class="yt-lockup-thumbnail">\n      \n  <a href="/watch?v=' +
                  p[x].gridVideoRenderer.videoId +
                  '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink yt-fluid-thumb-link contains-addto " data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-175 yt-thumb-fluid">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="' +
                  p[x].gridVideoRenderer.thumbnail.thumbnails[
                    parseInt(
                      p[x].gridVideoRenderer.thumbnail.thumbnails.length - 1
                    )
                  ].url +
                  '" width="175">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n    <span class="video-time">' +
                  b +
                  '</span>\n\n\n  <button title="Watch Later" onclick=";return false;" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" data-video-ids="' +
                  p[x].gridVideoRenderer.videoId +
                  '" data-button-menu-id="shared-addto-watch-later-login" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n\n    </div>\n    <div class="yt-lockup-content">\n            <h3 class="yt-lockup-title">\n    <a class="yt-uix-sessionlink yt-uix-tile-link yt-ui-ellipsis yt-ui-ellipsis-2 yt-ui-ellipsis-ellipsized" dir="ltr" title="' +
                  p[x].gridVideoRenderer.title.runs[0].text +
                  '" data-sessionlink="" href="/watch?v=' +
                  p[x].gridVideoRenderer.videoId +
                  '"><span class="yt-ui-ellipsis-wrapper" data-original-html="' +
                  p[x].gridVideoRenderer.title.runs[0].text +
                  '">' +
                  p[x].gridVideoRenderer.title.runs[0].text +
                  '</span></a>\n  </h3>\n\n\n  <div class="yt-lockup-meta">\n    <ul class="yt-lockup-meta-info">\n        <li>\n          by <a href="' +
                  p[x].gridVideoRenderer.shortBylineText.runs[0]
                    .navigationEndpoint.browseEndpoint.canonicalBaseUrl +
                  '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="g-high">' +
                  p[x].gridVideoRenderer.shortBylineText.runs[0].text +
                  "</a>\n        </li>\n      <li>" +
                  v +
                  '</li>\n        <li class="yt-lockup-deemphasized-text">\n            ' +
                  g +
                  "\n        </li>\n    </ul>\n  </div>\n  \n  \n\n    </div>\n    \n  </div>\n\n\n\n        </li>");
            }

            m = !0;
          } catch (e) {
            console.log(e);
          }

          if (1 == m) {
            var R = "Static";
            if (
              void 0 !==
              e[i].itemSectionRenderer.contents[0].shelfRenderer.title
            )
              try {
                (R =
                  e[i].itemSectionRenderer.contents[0].shelfRenderer.title
                    .runs[0].text),
                  2 ==
                    e[i].itemSectionRenderer.contents[0].shelfRenderer.title
                      .runs.length &&
                    (R +=
                      e[i].itemSectionRenderer.contents[0].shelfRenderer.title
                        .runs[1].text);
              } catch (t) {
                R =
                  e[i].itemSectionRenderer.contents[0].shelfRenderer.title
                    .simpleText;
              }
            var S = '<ul class="yt-uix-shelfslider-list">' + h + "</ul>",
              w = "";
            parseInt(
              S.split(
                '<li class="channels-content-item yt-shelf-grid-item yt-uix-shelfslider-item ">'
              ).length - 1
            ) > 6 &&
              (w =
                '<button onclick="slideShelf(' +
                u +
                ')" class="yt-uix-shelfslider-prev yt-uix-button yt-uix-button-shelf-slider-pager yt-uix-button-size-default" type="button" role="button"><span class="yt-uix-button-content">  <img class="yt-uix-shelfslider-prev-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Previous">\n </span></button>\n    <button onclick="slideShelf(' +
                u +
                ')" class="yt-uix-shelfslider-next yt-uix-button yt-uix-button-shelf-slider-pager yt-uix-button-size-default" type="button" role="button"><span class="yt-uix-button-content">  <img class="yt-uix-shelfslider-next-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Next">\n </span></button>'),
              (c +=
                '<li class="feed-item-container  browse-list-item-container vve-check " data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg">\n    <div class="feed-item-dismissable  ">\n      <div class="feed-item-main feed-item-no-author">\n        <div class="feed-item-main-content">\n                    <div class="shelf-wrapper clearfix">\n          <div class="compact-shelf shelf-item yt-uix-shelfslider yt-uix-shelfslider-at-head vve-check clearfix feeds-mode yt-uix-tdl" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg&amp;ved=CCAQ3Bw" data-fold="1428,814.875">\n            <h2 class="branded-page-module-title">\n          \n      <a href="/feed/FEwhat_to_watch" class="yt-uix-sessionlink branded-page-module-title-link spf-nolink g-hovercard" data-sessionlink="" data-ytid="FEED">\n\n      <span class="shelf-title">\n        ' +
                R +
                '\n      </span>\n\n      </a>\n  </h2>\n\n\n    \n\n      <div class="yt-uix-shelfslider-body context-data-container">\n    ' +
                S +
                "\n  </div>\n\n\n    " +
                w +
                '\n\n  </div>\n\n      \n\n\n  </div>\n\n\n  \n\n        </div>\n      </div>\n    </div>\n      <div class="feed-item-dismissal-notices"><div class="feed-item-dismissal feed-item-dismissal-hide hid">This item has been removed from your feed</div></div>\n  </li>'),
              u++;
          }
        }
      } catch (e) {}

    document.querySelector(".feed-list").insertAdjacentHTML("beforeend", c),
      document.querySelector(".feed-page .yt-spinner").classList.add("hid"),
      $("body").append(
        "<script>function slideShelf(shelfid){\r\n\t\tif (document.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').getAttribute('class').includes('yt-uix-shelfslider-at-head')){\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.add('yt-uix-shelfslider-is-moving');\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.remove('yt-uix-shelfslider-at-head');\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.add('yt-uix-shelfslider-at-tail');\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf .yt-uix-shelfslider-list').setAttribute('style', 'left: 0px;');\r\nsetTimeout(function () {\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf .yt-uix-shelfslider-list').setAttribute('style', 'left: -835px;');\r\n}, 10);\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.remove('yt-uix-shelfslider-is-moving');\r\n\t\t}\r\n\t\telse{\r\n\t\t\tdocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.add('yt-uix-shelfslider-is-moving');\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.remove('yt-uix-shelfslider-at-tail');\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.add('yt-uix-shelfslider-at-head');\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf .yt-uix-shelfslider-list').setAttribute('style', 'left: -835px;');\r\nsetTimeout(function () {\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf .yt-uix-shelfslider-list').setAttribute('style', 'left: 0px;');\r\n}, 10);\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.remove('yt-uix-shelfslider-is-moving');\r\n\t\t}\r\n}</script>"
      );
  }

  function appendSlider() {
    $("body").append(
      "<script>function slideShelf(shelfid){\r\n\t\tif (document.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').getAttribute('class').includes('yt-uix-shelfslider-at-head')){\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.add('yt-uix-shelfslider-is-moving');\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.remove('yt-uix-shelfslider-at-head');\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.add('yt-uix-shelfslider-at-tail');\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf .yt-uix-shelfslider-list').setAttribute('style', 'left: 0px;');\r\nsetTimeout(function () {\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf .yt-uix-shelfslider-list').setAttribute('style', 'left: -835px;');\r\n}, 10);\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.remove('yt-uix-shelfslider-is-moving');\r\n\t\t}\r\n\t\telse{\r\n\t\t\tdocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.add('yt-uix-shelfslider-is-moving');\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.remove('yt-uix-shelfslider-at-tail');\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.add('yt-uix-shelfslider-at-head');\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf .yt-uix-shelfslider-list').setAttribute('style', 'left: -835px;');\r\nsetTimeout(function () {\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf .yt-uix-shelfslider-list').setAttribute('style', 'left: 0px;');\r\n}, 10);\r\ndocument.querySelector('.feed-item-container:nth-of-type('+ shelfid +') .compact-shelf').classList.remove('yt-uix-shelfslider-is-moving');\r\n\t\t}\r\n}</script>"
    );
  }

  function isChannelFeatureCont(e) {
    try {
      if (
        e.itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridChannelRenderer
      )
        return !0;
    } catch (e) {
      return !1;
    }
  }

  function parseYtData(e) {
    1 == authinfo.LOGGED_IN
  }

  function v3mainfriend() {
    (document.title = "Youtube"),
      changeFavicon(chrome.extension.getURL("/images/favicon2.png"));
    var e =
      window.performance.timing.domContentLoadedEventEnd -
      window.performance.timing.navigationStart;
    console.log("Page have loaded in " + e + "ms."),
      1 == authinfo.LOGGED_IN &&
        (document.querySelector("#yt-masthead-user .video-thumb").onclick =
          function () {
            document.querySelector("#masthead-expanded.hid")
              ? document
                  .querySelector("#masthead-expanded")
                  .classList.remove("hid")
              : document
                  .querySelector("#masthead-expanded")
                  .classList.add("hid");
          });
    var t = document.createElement("script");
    (t.src = chrome.extension.getURL("hitchhiker/common/searchbox_service.js")),
      (t.onload = function () {
        console.log("search load"), v3SearchFriend();
      }),
      document.head.appendChild(t),
      appendSlider(),
      document.querySelector("#appbar-guide-button") &&
        (document.querySelector("#appbar-guide-button").onclick = function () {
          document.querySelector("html.show-guide")
            ? (document.querySelector("html").classList.remove("show-guide"),
              document.querySelector("html.guide-pinned") &&
                (document
                  .querySelector("html")
                  .classList.remove("guide-pinned"),
                (guidewaspinned = !0)))
            : (document.querySelector("html").classList.add("show-guide"),
              guidewaspinned &&
                document.querySelector("html").classList.add("guide-pinned"));
        });
  }

  function buildHome() {
    createGb();
    var e = document.createElement("div");
    e.setAttribute("id", "page-container"),
      (e.innerHTML =
        '<div id="page" class="home clearfix masthead-ad-expanded"><div id="guide">        <div id="guide-container" class=" vve-check" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg&amp;ved=CAEQ_h4">\n      <div id="guide-main" class="    guide-module     spf-nolink   yt-uix-tdl " data-fold="225,649">\n        <div class="guide-module-toggle">\n          <span class="guide-module-toggle-icon">\n            <span class="guide-module-toggle-arrow"></span>\n            <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\n            <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" id="collapsed-notification-icon">\n          </span>\n          <div class="guide-module-toggle-label">\n            <h3>\n              <span>\nGuide\n              </span>\n            </h3>\n          </div>\n        </div>\n          <div class="guide-module-content yt-scrollbar">\n    <p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n  </div>\n\n      </div>\n    </div>\n\n</div><div id="player" class="  off-screen  ">\n  <div id="playlist" class="playlist">\n    \n  </div>\n\n  <div id="player-unavailable" class="  hid  ">\n    \n  </div>\n\n    \n\n\n\n\n  <div id="playlist-tray" class="playlist-tray">\n    \n  </div>\n\n  <div class="clear"></div>\n</div>\n<div id="content" class="  content-alignment">  \n\n\n\n\n  <div class="branded-page-v2-container  branded-page-v2-has-top-row branded-page-v2-has-solid-bg branded-page-v2-secondary-column-hidden">\n      <div class="branded-page-v2-top-row">\n                \n\n\n      </div>\n\n    <div class="branded-page-v2-col-container">\n      <div class="branded-page-v2-col-container-inner">\n        <div class="branded-page-v2-primary-col">\n          <div class="">\n              <div class="branded-page-v2-body branded-page-v2-primary-column-content" id="gh-activityfeed">\n        <div id="feed" class="spf-nolink">\n        <div id="feed-main-what_to_watch" class="individual-feed" data-feed-name="what_to_watch" data-feed-type="main">\n    \n      <div class="feed-container" data-filter-type="">\n    <div class="feed-page">\n      <p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>    \n\n    </div>\n\n  </div>\n\n  </div>\n\n  \n\n  \n\n    </div>\n  \n\n  </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div></div>'),
      document.querySelector("#body-container").append(e),
      v3.htmlBuilderConfig.core.NIRVANA &&
        (document.querySelector("#guide-container").outerHTML =
          '<div id="appbar-guide-menu" class="appbar-menu appbar-guide-menu-visibility appbar-guide-clickable-ancestor yt-uix-scroller" style="top: 0px;" data-scroller-mousewheel-listener="" data-scroller-scroll-listener="">' +
          document.querySelector("#guide-container").outerHTML +
          "</div>"),
      0 == authinfo.LOGGED_IN &&
        document.querySelector("html[feed]") &&
        document.querySelector("html").setAttribute("feedload", ""),
      0 == authinfo.LOGGED_IN
        ? (document.querySelector(
            ".guide-module-content.yt-scrollbar"
          ).innerHTML =
            '<ul class="guide-toplevel">\n            <li class="guide-section vve-check" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg&amp;ved=CAIQ5isoAA" data-visibility-tracking="CAAQ5isiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n    <div class="guide-item-container personal-item">\n      <ul class="guide-user-links yt-box">\n            <li class="vve-check overflowable-list-item guide-channel" id="HCtnHdj3df7iM-guide-item" data-visibility-tracking="CAEQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HCtnHdj3df7iM" title="Popular on YouTube" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAEQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HCtnHdj3df7iM" data-serialized-endpoint="0qDduQEPEg1IQ3RuSGRqM2RmN2lN">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/tnHdj3df7iM/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Popular on YouTube</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UC-9-kyTW8ZkZNDHQJ6FgpwQ-guide-item" data-visibility-tracking="CAIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ" title="Music" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UC-9-kyTW8ZkZNDHQJ6FgpwQ" data-serialized-endpoint="0qDduQEaEhhVQy05LWt5VFc4WmtaTkRIUUo2Rmdwd1E%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/i/-9-kyTW8ZkZNDHQJ6FgpwQ/1.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Music</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HC7Dr1BKwqctY-guide-item" data-visibility-tracking="CAMQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HC7Dr1BKwqctY" title="Sports" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAMQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HC7Dr1BKwqctY" data-serialized-endpoint="0qDduQEPEg1IQzdEcjFCS3dxY3RZ">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/7Dr1BKwqctY/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Sports</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HChfZhJdhTqX8-guide-item" data-visibility-tracking="CAQQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HChfZhJdhTqX8" title="Gaming" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAQQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HChfZhJdhTqX8" data-serialized-endpoint="0qDduQEPEg1IQ2hmWmhKZGhUcVg4">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/hfZhJdhTqX8/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Gaming</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HC-r1FlvvNFs0-guide-item" data-visibility-tracking="CAUQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HC-r1FlvvNFs0" title="Education" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAUQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HC-r1FlvvNFs0" data-serialized-endpoint="0qDduQEPEg1IQy1yMUZsdnZORnMw">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/-r1FlvvNFs0/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Education</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UCczhp4wznQWonO7Pb8HQ2MQ-guide-item" data-visibility-tracking="CAYQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UCczhp4wznQWonO7Pb8HQ2MQ" title="Movies" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAYQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UCczhp4wznQWonO7Pb8HQ2MQ" data-serialized-endpoint="0qDduQEaEhhVQ2N6aHA0d3puUVdvbk83UGI4SFEyTVE%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://lh3.googleusercontent.com/-DIjHsEMMaRE/AAAAAAAAAAI/AAAAAAAAAAA/q6whn_JcUH8/s88-c-k-no/photo.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Movies</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UCl8dMTqDrJQ0c8y23UBu4kQ-guide-item" data-visibility-tracking="CAcQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UCl8dMTqDrJQ0c8y23UBu4kQ" title="TV Shows" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAcQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UCl8dMTqDrJQ0c8y23UBu4kQ" data-serialized-endpoint="0qDduQEaEhhVQ2w4ZE1UcURySlEwYzh5MjNVQnU0a1E%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://lh4.googleusercontent.com/-hFxEr8QHrvM/AAAAAAAAAAI/AAAAAAAAAAA/REjjL0X3gIs/s88-c-k-no/photo.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>TV Shows</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HCPvDBPPFfuaM-guide-item" data-visibility-tracking="CAgQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HCPvDBPPFfuaM" title="News" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAgQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HCPvDBPPFfuaM" data-serialized-endpoint="0qDduQEPEg1IQ1B2REJQUEZmdWFN">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/PvDBPPFfuaM/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>News</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="SBAaOjE-GIlRI-guide-item" data-visibility-tracking="CAkQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/SBAaOjE-GIlRI" title="Live" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAkQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="SBAaOjE-GIlRI" data-serialized-endpoint="0qDduQEPEg1TQkFhT2pFLUdJbFJJ">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//www.gstatic.com/youtube/img/livestream/house_channels/logos/live.png" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Live</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UCBR8-60-B28hp2BmDPdntcQ-guide-item" data-visibility-tracking="CAoQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UCBR8-60-B28hp2BmDPdntcQ" title="Spotlight" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAoQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UCBR8-60-B28hp2BmDPdntcQ" data-serialized-endpoint="0qDduQEaEhhVQ0JSOC02MC1CMjhocDJCbURQZG50Y1E%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://lh6.googleusercontent.com/-dL2jeHlm2Ok/AAAAAAAAAAI/AAAAAAAAAAA/ZCMMkRj-hrw/s88-c-k-no/photo.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Spotlight</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n      <hr class="guide-section-separator">\n  </li>\n\n            \n\n            <li class="guide-section vve-check" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg&amp;ved=CBMQ5isoAg" data-visibility-tracking="CBEQ5isiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n    <div class="guide-item-container personal-item">\n      <ul class="guide-user-links yt-box">\n            <li class="vve-check overflowable-list-item guide-channel" id="guide_builder-guide-item" data-visibility-tracking="CBIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channels" title="Browse channels" data-sessionlink="feature=g-manage&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CBIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="guide_builder" data-serialized-endpoint="0qPduQECCAE%3D">\n    <span class="yt-valign-container">\n        <img class="thumb guide-builder-icon" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="display-name  no-count">\n        <span>Browse channels</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n      <hr class="guide-section-separator">\n  </li>\n\n            <li class="guide-section guide-header signup-promo guided-help-box">\n    <p>\n      Sign in now to see your channels and recommendations!\n    </p>\n    <div id="guide-builder-promo-buttons" class="signed-out clearfix">\n      <a href="https://accounts.google.com/ServiceLogin?service=youtube&amp;uilel=3&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Dsign_in_promo%26hl%3Den%26next%3D%252F&amp;passive=true&amp;hl=en" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg"><span class="yt-uix-button-content">Sign In </span></a>\n    </div>\n  </li>\n\n    </ul>')
        : waitForElm("#what_to_watch-guide-item .guide-item").then(function (
            e
          ) {
            document
              .querySelector("#what_to_watch-guide-item .guide-item")
              .setAttribute(
                "class",
                "guide-item guide-item-selected yt-uix-sessionlink yt-valign spf-nolink "
              );
          });
  }

  bodycont.setAttribute("id", "body-container"),
    v3.htmlBuilderConfig.core.NIRVANA &&
      (document.querySelector("html").classList.add("guide-pinned"),
      document.querySelector("html").classList.add("show-guide")),
    document.querySelector("body").prepend(bodycont),
    buildPageFrame(),
    buildHome(),
    v3mainfriend(),
    v3.htmlBuilderConfig.core.NIRVANA &&
      document.querySelector("#gb").classList.add("hid"),
    document.querySelector("#ytauthdata-temp-container").remove(),
    document.querySelector("#ytdata-temp-container").remove();
}
