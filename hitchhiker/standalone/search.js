if (
  ("/results" == window.location.pathname ||
    "/results/search" == window.location.pathname) &&
  !window.location.href.includes("v3cv=0")
) {
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

  function addStyle(t) {
    const e = document.createElement("style");
    (e.textContent = t), document.head.append(e);
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

  softChangeUrl(window.location.href.replace("&app=true", ""), !0),
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
      .setAttribute("class", v3.htmlBuilderConfig.search),
    document.body.classList.add("exp-fixed-masthead"),
    v3.htmlBuilderConfig.core.NIRVANA &&
      document
        .querySelector("body")
        .setAttribute(
          "class",
          "ltr site-center-aligned site-as-giant-card guide-pinning-enabled exp-appbar-open-guide exp-appbar-onebar appbar-hidden exp-appbar-small-thumbs not-exp-new-metadata-style hitchhiker-enabled guide-enabled guide-expanded flex-width-enabled flex-width-enabled-snap page-loaded exp-paginated-search"
        ),
    document.querySelector("body").setAttribute("data-player-size", "small"),
    document.querySelector("body").setAttribute("use-v3-proportion", ""),
    useverbose &&
      console.log(
        "%c[v3experimentalcode]",
        "color: #8A2BE2",
        " DEBUG : detected v3 search test page"
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
  var bodycont = document.createElement("div");

  function buildPagination(t) {
    if (t < 21) return "";
    var e = Math.round(t / 20);
    if (currentpage > e) return "";
    var n = currentpage - 3 > 0 ? currentpage - 3 : 1,
      a = currentpage + 3 > 7 ? currentpage + 3 : 7;
    a > e && (a = e), console.log(e, n, a);
    var s = '<div class="yt-uix-pager search-pager " role="navigation">';

    for (i = n, j = a; i <= j; i++) {
      var l = api.search.spgen({
        index: parseInt(20 * (i - 1))
      });
      currentfilter
        ? (l = api.search.spgen({
            filter: {
              currentfilter: currentfilter
            },
            index: parseInt(20 * (i - 1))
          }))
        : currentsort &&
          (l = api.search.spgen({
            sort: currentsort,
            index: parseInt(20 * (i - 1))
          })),
        (s +=
          '<a href="/results?search_query=' +
          window.location.href.split("search_query=")[1].split("&")[0] +
          "&amp;sp=" +
          l +
          "&amp;page=" +
          i +
          '" class="yt-uix-button  yt-uix-pager-button' +
          (i == currentpage ? " yt-uix-button-toggled" : "") +
          ' yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default" data-sessionlink="" data-page="' +
          i +
          '" aria-label="Go to page ' +
          i +
          '"><span class="yt-uix-button-content">' +
          i +
          " </span></a>");
    }

    return (s += "</div>");
  }

  function genSearchIndex(t) {
    var e = (18432 + 20 * (t - 1)).toString(16).replaceAll(" ", "") + "ea0300";
    return encodeURIComponent(
      encodeURIComponent(
        btoa(
          e
            .match(/\w{2}/g)
            .map((t) => String.fromCharCode(parseInt(t, 16)))
            .join("")
        )
      )
    );
  }

  bodycont.setAttribute("id", "body-container"),
    document.querySelector("body").prepend(bodycont),
    v3.htmlBuilderConfig.core.NIRVANA &&
      (document.querySelector("html").classList.add("guide-pinned"),
      document.querySelector("html").classList.add("show-guide")),
    buildPageFrame(),
    buildSearch(),
    createGb(),
    v3mainfriend(),
    v3.htmlBuilderConfig.core.NIRVANA &&
      document.querySelector("#gb").classList.add("hid"),
    document.querySelector("#ytauthdata-temp-container").remove(),
    document.querySelector("#ytdata-temp-container").remove();
  var userpicture,
    esticount,
    rawesticount,
    initialpagecount,
    searchtext = "";

  function buildSearch() {
    (document.querySelector("#masthead-search-term").value = decodeURIComponent(
      window.location.href.split("?search_query=")[1].split("&")[0]
    ).replace(new RegExp("\\+", "g"), " ")),
      (searchtext = window.location.href
        .split("?search_query=")[1]
        .split("&")[0]);
    var t =
      '<div id="page-container"><div id="page" class="  search  branded-page-v2-secondary-column-wide    no-flex clearfix"><div id="guide">        <div id="guide-container" class=" vve-check" data-sessionlink="ei=iyt0UtlK5IGUAom4gLAH&amp;ved=CFIQ_h4">\n      <div id="guide-main" class="    guide-module     spf-nolink   yt-uix-tdl " data-fold="225,524">\n        <div class="guide-module-toggle">\n          <span class="guide-module-toggle-icon">\n            <span class="guide-module-toggle-arrow"></span>\n            <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\n            <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" id="collapsed-notification-icon">\n          </span>\n          <div class="guide-module-toggle-label">\n            <h3>\n              <span>\nGuide\n              </span>\n            </h3>\n          </div>\n        </div>\n          <div class="guide-module-content yt-scrollbar">\n    <p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n  </div>\n\n      </div>\n        <div id="watch-context-container" class="guide-module collapsed hid"></div>\n\n    </div>\n\n</div><div id="content" class="">  \n\n\n\n\n  <div class="branded-page-v2-container ">\n\n    <div class="branded-page-v2-col-container clearfix">\n        <div class="branded-page-v2-secondary-col">\n              <div id="search-secondary-col-contents" class="branded-page-gutter-padding">\n      \n      \n      \n    </div>\n\n        </div>\n      <div class="branded-page-v2-primary-col">\n            <div class="branded-page-v2-primary-col-header-container">\n      \n    </div>\n  <div class="branded-page-v2-body" id="gh-activityfeed">\n            <noscript>\n      <div class="yt-alert yt-alert-default yt-alert-error  ">  <div class="yt-alert-icon">\n    <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-buttons"><button onclick=";return false;" type="button" class="close yt-uix-close yt-uix-button yt-uix-button-close yt-uix-button-size-default" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>\n    <div class="yt-alert-message">\n            Hello, you seem to have JavaScript turned off. Please enable it to see search results properly.\n    </div>\n</div></div>\n\n  </noscript>\n\n  <div id="context-source-container" data-context-source="&quot;Jordan Mein&quot;" style="display:none;"></div>\n\n  <div class="primary-col yt-card">\n    <div class="search-header yt-uix-expander yt-uix-expander-collapsed">\n        <div class="filter-top">\n    <div class="filter-bar-container">\n      <button onclick=";return false;" type="button" class="filter-button yt-uix-expander-head yt-uix-button yt-uix-button-default yt-uix-button-size-small" data-button-action="" data-button-toggle="true" data-button-menu-id="some-nonexistent-menu" role="button"><span class="yt-uix-button-content">Filters </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n      <ul class="filter-crumb-list"><li class="filter-crumb filter-crumb-ghost"><a class="filter"><span class="filter-text filter-ghost"></span><span class="yt-close">×</span></a></li></ul>\n      <p class="num-results">About <strong>' +
      esticount +
      '</strong> results</p>\n    </div>\n  </div>\n\n      <div id="filter-dropdown" class="yt-uix-expander-body">' +
      buildSearchOptionMenu() +
      '\n</div>\n    </div>\n    <div id="results">\n      \n\n\n\n        \n        \n\n\n\n\n    </div>\n\n  </div>\n\n\n  \n\n    <div class="yt-uix-pager search-pager " role="navigation">' +
      buildPagination2() +
      '\n\n          \n\n          \n\n          \n\n          \n\n          \n\n          \n\n          \n\n\n        \n<button id="search-more-related-button" class=" v3-ajax-search yt-uix-button yt-uix-button-default yt-uix-button-size-default" type="button" onclick=";return false;" data-button-action="" role="button"><span class="yt-uix-button-content"> « Next » </span></button>\n    </div>\n\n\n\n  </div>\n\n      </div>\n    </div>\n  </div>\n</div></div></div>';
    document
      .querySelector("#body-container")
      .insertAdjacentHTML("beforeend", t),
      v3.htmlBuilderConfig.core.NIRVANA &&
        (document.querySelector("#guide-container").outerHTML =
          '<div id="appbar-guide-menu" class="appbar-menu appbar-guide-menu-visibility appbar-guide-clickable-ancestor yt-uix-scroller" style="top: 0px;" data-scroller-mousewheel-listener="" data-scroller-scroll-listener="">' +
          document.querySelector("#guide-container").outerHTML +
          "</div>"),
      (document.querySelector(".filter-button").onclick = function () {
        document.querySelector(".search-header.yt-uix-expander-collapsed")
          ? document
              .querySelector(".search-header.yt-uix-expander-collapsed")
              .classList.remove("yt-uix-expander-collapsed")
          : document
              .querySelector(".search-header")
              .classList.add("yt-uix-expander-collapsed");
      });
    var e =
        ytdata.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents.find(
          function (t) {
            try {
              return !t.itemSectionRenderer.contents[0]
                .promotedSparklesTextSearchRenderer;
            } catch (t) {
              return !1;
            }
          }
        ).itemSectionRenderer.contents,
      n = "";

    for (i = 0, j = e.length; i < j; i++)
      if (void 0 !== e[i].videoRenderer) {
        var a = "",
          s = '<div class="yt-lockup-badges"><ul class="item-badge-line">';
        e[i].videoRenderer.badges &&
          (s +=
            '<li class="yt-lockup-badge-item"><span class="yt-badge ">' +
            e[i].videoRenderer.badges[0].metadataBadgeRenderer.label +
            "</span></li>"),
          e[i].videoRenderer.thumbnail.thumbnails[
            parseInt(e[i].videoRenderer.thumbnail.thumbnails.length - 1)
          ].url.includes("hq720") &&
            (s +=
              '<li class="yt-lockup-badge-item"><span class="yt-badge ">HD</span></li>'),
          (s += "</ul></div>"),
          void 0 !== e[i].videoRenderer.ownerBadges &&
            (a =
              '<span class="yt-user-name-icon-verified">\n    <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name" data-tooltip-text="Verified name">\n  </span>');
        var l = "0";

        try {
          l = e[i].videoRenderer.lengthText.simpleText;
        } catch (t) {}

        var r = "0";

        try {
          r = e[i].videoRenderer.publishedTimeText.simpleText;
        } catch (t) {}

        var o = "0";

        try {
          o = e[i].videoRenderer.viewCountText.simpleText;
        } catch (t) {}

        var d = "";
        if (
          void 0 !== e[i].videoRenderer.detailedMetadataSnippets &&
          e[i].videoRenderer.detailedMetadataSnippets[0].snippetText.runs
        )
          for (
            x = 0,
              y =
                e[i].videoRenderer.detailedMetadataSnippets[0].snippetText.runs
                  .length;
            x < y;
            x++
          ) {
            if (
              void 0 !==
              e[i].videoRenderer.detailedMetadataSnippets[0].snippetText.runs[x]
                .bold
            )
              var c =
                "<b>" +
                e[i].videoRenderer.detailedMetadataSnippets[0].snippetText.runs[
                  x
                ].text +
                "</b>";
            else
              c =
                e[i].videoRenderer.detailedMetadataSnippets[0].snippetText.runs[
                  x
                ].text;
            d += c;
          }
        n +=
          '<li class="yt-lockup clearfix yt-uix-tile result-item-padding yt-lockup-video yt-lockup-tile vve-check context-data-item" data-context-item-time="' +
          l +
          '" data-context-item-title="' +
          e[i].videoRenderer.title.runs[0].text +
          '" data-context-item-user="' +
          e[i].videoRenderer.ownerText.runs[0].text +
          '" data-context-item-views="' +
          o +
          '" data-context-item-id="' +
          e[i].videoRenderer.videoId +
          '" data-context-item-type="video">\n    <div class="yt-lockup-thumbnail">\n      \n  <a href="/watch?v=' +
          e[
            i
          ].videoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
            "?v="
          )[1] +
          '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto " data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-185">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" src="' +
          e[i].videoRenderer.thumbnail.thumbnails[
            parseInt(e[i].videoRenderer.thumbnail.thumbnails.length - 1)
          ].url +
          '" width="185">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n    <span class="video-time">' +
          l +
          '</span>\n\n\n  <button onclick=";return false;" title="Watch Later" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" data-video-ids="' +
          e[i].videoRenderer.videoId +
          '" data-button-menu-id="shared-addto-watch-later-login" role="button" data-tooltip-text="Watch Later"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n\n    </div>\n    <div class="yt-lockup-content">\n            <h3 class="yt-lockup-title">\n    <a class="yt-uix-sessionlink yt-uix-tile-link yt-uix-contextlink yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr" title="UFC 161: Jordan Mein Has No Regrets with Matt Brown Fight" data-sessionlink="" href="/watch?v=' +
          e[
            i
          ].videoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
            "?v="
          )[1] +
          '"><span class="yt-ui-ellipsis-wrapper" data-original-html="' +
          e[i].videoRenderer.title.runs[0].text +
          '\n    ">' +
          e[i].videoRenderer.title.runs[0].text +
          '\n    </span></a>\n  </h3>\n\n\n\n  <div class="yt-lockup-meta">\n    <ul class="yt-lockup-meta-info">\n<li>by <a href="' +
          e[i].videoRenderer.ownerText.runs[0].navigationEndpoint
            .commandMetadata.webCommandMetadata.url +
          '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
          e[i].videoRenderer.ownerText.runs[0].text +
          "</a>" +
          a +
          "</li><li>" +
          r +
          "</li><li>" +
          o +
          '</li>    </ul>\n  </div>\n\n\n      <div class="yt-lockup-description yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
          d +
          "\n    </span></div>" +
          s +
          "\n\n\n  \n\n  \n\n\n    </div>\n    \n  </li>";
      } else if (void 0 !== e[i].channelRenderer) {
        var u = "";

        try {
          u = e[i].channelRenderer.subscriberCountText.simpleText.split(" ")[0];
        } catch (t) {}

        var p = "0 videos";

        try {
          p =
            e[i].channelRenderer.videoCountText.runs.length > 1
              ? e[i].channelRenderer.videoCountText.runs[0].text +
                e[i].channelRenderer.videoCountText.runs[1].text
              : e[i].channelRenderer.videoCountText.runs[0].text;
        } catch (t) {}

        var m = "";
        void 0 !== e[i].channelRenderer.ownerBadges &&
          (m =
            '<span class="qualified-channel-title-badge">\n<img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified">  </span>');
        var h = "";

        try {
          h = e[i].channelRenderer.subscriptionButton.subscribed
            ? "yt-uix-button-subscribed-unbranded"
            : "yt-uix-button-subscribe-unbranded";
        } catch (t) {}

        d = "";
        var b = e[i].channelRenderer.navigationEndpoint.browseEndpoint.browseId;
        if (void 0 !== e[i].channelRenderer.descriptionSnippet)
          for (
            x = 0, y = e[i].channelRenderer.descriptionSnippet.runs.length;
            x < y;
            x++
          ) {
            if (void 0 !== e[i].channelRenderer.descriptionSnippet.runs[x].bold)
              c =
                "<b>" +
                e[i].channelRenderer.descriptionSnippet.runs[x].text +
                "</b>";
            else c = e[i].channelRenderer.descriptionSnippet.runs[x].text;
            d += c;
          }
        n +=
          '<li class="yt-lockup clearfix yt-uix-tile result-item-padding yt-lockup-channel yt-lockup-tile vve-check">\n    <div class="yt-lockup-thumbnail">\n        <a href="' +
          e[i].channelRenderer.navigationEndpoint.commandMetadata
            .webCommandMetadata.url +
          '" class="ux-thumb-wrap yt-uix-sessionlink " data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-104 g-hovercard" data-ytid="' +
          e[i].channelRenderer.navigationEndpoint.browseEndpoint.browseId +
          '">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" src="' +
          e[i].channelRenderer.thumbnail.thumbnails[
            parseInt(e[i].channelRenderer.thumbnail.thumbnails.length - 1)
          ].url +
          '" width="104">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a>\n\n    </div>\n    <div class="yt-lockup-content">\n      <span class="qualified-channel-title ellipsized has-badge"><span class="qualified-channel-title-wrapper  g-hovercard" data-ytid="' +
          e[i].channelRenderer.navigationEndpoint.browseEndpoint.browseId +
          '">  <span class="qualified-channel-title-text">\n        <h3 class="yt-lockup-title">     <a class="yt-uix-sessionlink yt-uix-tile-link yt-uix-contextlink yt-ui-ellipsis yt-ui-ellipsis-2 g-hovercard" dir="ltr" data-ytid="' +
          e[i].channelRenderer.navigationEndpoint.browseEndpoint.browseId +
          '" data-name="" data-sessionlink="" href="' +
          e[i].channelRenderer.navigationEndpoint.commandMetadata
            .webCommandMetadata.url +
          '"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
          e[i].channelRenderer.title.simpleText +
          "     </span></a>\n  </h3>\n\n  </span>\n</span>      " +
          m +
          '\n\n</span><div class="yt-lockup-meta"><ul class="yt-lockup-meta-info"><li>by <a href="' +
          e[i].channelRenderer.navigationEndpoint.commandMetadata
            .webCommandMetadata.url +
          '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
          e[i].channelRenderer.title.simpleText +
          "</a>\n</li><li>Active this eternity</li><li>" +
          p +
          '</li></ul></div>    <div class="yt-lockup-description yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
          d +
          '\n    </span></div>\n<div class="yt-lockup-badges"><ul class="item-badge-line"><li class="yt-lockup-badge-item"><span class="yt-badge ">CHANNEL</span></li></ul>    <span class=" yt-uix-button-subscription-container"><button onclick="window.location = \'https://www.youtube.com' +
          e[i].channelRenderer.navigationEndpoint.commandMetadata
            .webCommandMetadata.url +
          '\';" aria-role="button" aria-live="polite" aria-busy="false" class="yt-uix-subscription-button yt-uix-button ' +
          h +
          ' yt-uix-button-size-default yt-uix-button-has-icon" type="button" data-sessionlink="" data-href="" data-style-type="unbranded" data-channel-external-id="' +
          b +
          '" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-subscribe" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></span><span class="yt-uix-button-content"><span class="subscribe-label" aria-label="Subscribe">Subscribe</span><span class="subscribed-label" aria-label="Unsubscribe">Subscribed</span><span class="unsubscribe-label" aria-label="Unsubscribe">Unsubscribe</span> </span></button><span class="yt-subscription-button-subscriber-count-unbranded-horizontal">' +
          u +
          '</span>  <span class="yt-subscription-button-disabled-mask" title=""></span>\n</span>\n</div>\n    </div>\n    \n  </li>';
      } else if (
        void 0 !== e[i].playlistRenderer &&
        void 0 !== e[i].playlistRenderer.videos[1]
      ) {
        var v = "",
          g = "";

        try {
          (v = e[i].playlistRenderer.shortBylineText.runs[0].text),
            (g =
              e[i].playlistRenderer.shortBylineText.runs[0].navigationEndpoint
                .commandMetadata.webCommandMetadata.url);
        } catch (t) {}

        var f = "",
          k = "";

        try {
          f = e[i].playlistRenderer.thumbnails[1].thumbnails[0].url;
        } catch (t) {}

        try {
          k = e[i].playlistRenderer.thumbnails[2].thumbnails[0].url;
        } catch (t) {}

        n +=
          '<li class="yt-lockup clearfix yt-uix-tile result-item-padding yt-lockup-playlist yt-lockup-tile vve-check context-data-item" data-context-item-id="" data-context-item-videos="" data-context-item-count="" data-context-item-title="' +
          e[i].playlistRenderer.title.simpleText +
          '" data-context-item-count-label="videos" data-context-item-user="' +
          v +
          '" data-context-item-type="playlist">\n    <div class="yt-lockup-thumbnail">\n            <a href="' +
          e[i].playlistRenderer.navigationEndpoint.commandMetadata
            .webCommandMetadata.url +
          '" class="yt-pl-thumb-link yt-uix-sessionlink " data-sessionlink="">\n      <span class="yt-pl-thumb ">\n                <span class="video-thumb  yt-thumb yt-thumb-185">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img data-thumb="' +
          e[i].playlistRenderer.thumbnails[0].thumbnails[
            parseInt(e[i].playlistRenderer.thumbnails[0].thumbnails.length - 1)
          ].url +
          '" src="' +
          e[i].playlistRenderer.thumbnails[0].thumbnails[
            parseInt(e[i].playlistRenderer.thumbnails[0].thumbnails.length - 1)
          ].url +
          '" alt="Thumbnail" width="185" data-group-key="thumb-group-0">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n\n\n\n    <span class="sidebar">\n      <span class="video-count-wrapper yt-valign">\n        <span class="video-count-block yt-valign-container">\n          <span class="count-label">\n            ' +
          e[i].playlistRenderer.videoCountText.runs[0].text +
          '\n          </span>\n          <span class="text-label">\n            videos\n          </span>\n        </span>\n      </span>\n      <span class="side-thumbs yt-uix-tdl" data-fold="426,1903.75">\n          <span class="sidethumb ">\n                      <span class="video-thumb  yt-thumb yt-thumb-43">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img src="' +
          f +
          '" alt="Thumbnail" width="43">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n\n\n          </span>\n          <span class="sidethumb ">\n                      <span class="video-thumb  yt-thumb yt-thumb-43">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img src="' +
          k +
          '" alt="Thumbnail" width="43">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n\n\n          </span>\n          <span class="sidethumb  empty columns-support-required">\n                    <span class="video-thumb  yt-thumb yt-thumb-43">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Thumbnail" width="43">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n\n\n          </span>\n      </span>\n    </span>\n      <span class="yt-pl-thumb-overlay">\n        <span class="yt-pl-thumb-overlay-content">\n          <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\nPlay all\n        </span>\n      </span>\n  </span>\n\n  </a>\n\n\n    </div>\n    <div class="yt-lockup-content">\n          <h3 class="yt-lockup-title">\n    <a class="yt-uix-sessionlink yt-uix-tile-link yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr" title="Pet Butler TV PlayList for PB\'s Website" data-sessionlink="ei=0ECmUsyMOujtkQK9h4GYCg&amp;ved=CE0Qvxs" href="' +
          e[i].playlistRenderer.navigationEndpoint.commandMetadata
            .webCommandMetadata.url +
          '"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
          e[i].playlistRenderer.title.simpleText +
          '\n    </span></a>\n  </h3>\n\n    <div class="yt-lockup-meta">\n      <ul class="yt-lockup-meta-info">\n          <li>\n            by <a href="' +
          g +
          '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
          v +
          '</a>\n          </li>\n      </ul>\n    </div>\n  <ul class="yt-lockup-meta yt-lockup-playlist-items">\n      <li class="yt-lockup-playlist-item clearfix">\n          <span class="yt-lockup-playlist-item-length yt-lockup-deemphasized-text">\n            ' +
          e[i].playlistRenderer.videos[0].childVideoRenderer.lengthText
            .simpleText +
          '\n          </span>\n        <h4 class="yt-lockup-playlist-item-title">\n          <a href="' +
          e[i].playlistRenderer.videos[0].childVideoRenderer.navigationEndpoint
            .commandMetadata.webCommandMetadata.url +
          '" class=" yt-uix-sessionlink" data-sessionlink="">\n            ' +
          e[i].playlistRenderer.videos[0].childVideoRenderer.title.simpleText +
          '\n          </a>\n        </h4>\n      </li>\n      <li class="yt-lockup-playlist-item clearfix">\n          <span class="yt-lockup-playlist-item-length yt-lockup-deemphasized-text">\n            ' +
          e[i].playlistRenderer.videos[1].childVideoRenderer.lengthText
            .simpleText +
          '\n          </span>\n        <h4 class="yt-lockup-playlist-item-title">\n          <a href="' +
          e[i].playlistRenderer.videos[1].childVideoRenderer.navigationEndpoint
            .commandMetadata.webCommandMetadata.url +
          '" class=" yt-uix-sessionlink" data-sessionlink="">\n            ' +
          e[i].playlistRenderer.videos[1].childVideoRenderer.title.simpleText +
          '\n          </a>\n        </h4>\n      </li>\n  </ul>\n  <div class="yt-lockup-meta">\n    \n      <a class="yt-lockup-deemphasized-text yt-uix-sessionlink " href="//www.youtube.com/playlist?list=' +
          e[i].playlistRenderer.playlistId +
          '" data-sessionlink="">\nView full playlist (' +
          e[i].playlistRenderer.videoCountText.runs[0].text +
          e[i].playlistRenderer.videoCountText.runs[1].text +
          ")\n      </a>\n  </div>\n\n    </div>\n    \n\t\t\t\t</li>";
      }

    var w =
      '<ol id="search-results" class="result-list context-data-container">' +
      n +
      "</ol>";
    document.querySelector("#results").insertAdjacentHTML("beforeend", w),
      (document.querySelector("#search-more-related-button").outerHTML +=
        '<p class="yt-spinner hid">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>');

    try {
      var R =
        ytdata.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents.find(
          function (t) {
            try {
              return !!t.continuationItemRenderer;
            } catch (t) {
              return !1;
            }
          }
        ).continuationItemRenderer.continuationEndpoint.continuationCommand
          .token;

      document.querySelector("#search-more-related-button").onclick =
        function () {
          document
            .querySelector(".yt-uix-pager.search-pager .yt-spinner")
            .classList.remove("hid"),
            document
              .querySelector("#search-more-related-button")
              .classList.add("hid"),
            getMoreSearch(R);
        };
    } catch (t) {
      document.querySelector("#search-more-related-button").remove();
    }

    "0" == ytdata.estimatedResults &&
      (document.querySelector("#results").innerHTML =
        '<div class="yt-alert yt-alert-naked yt-alert-warn  ">  <div class="yt-alert-icon">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>\n    <div class="yt-alert-message">\n            No results found for “' +
        decodeURIComponent(
          window.location.href.split("?search_query=")[1].split("&")[0]
        ).replace(new RegExp("\\+", "g"), " ") +
        "”\n    </div>\n</div></div>"),
      window.location.href.includes("&sp=") &&
        (currentsort.sort || currentsort.filter) &&
        (document.querySelector(".filter-crumb-list").innerHTML =
          '<li class="filter-crumb " title=""><a href="' +
          window.location.href.split("&sp=")[0] +
          '" class="filter "><span class="filter-text filter-ghost">Unfilter</span><span class="yt-close">×</span></a></li>'),
      0 == authinfo.LOGGED_IN &&
        (document.querySelector(
          ".guide-module-content.yt-scrollbar"
        ).innerHTML =
          '<ul class="guide-toplevel">\n            <li class="guide-section vve-check" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg&amp;ved=CAIQ5isoAA" data-visibility-tracking="CAAQ5isiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n    <div class="guide-item-container personal-item">\n      <ul class="guide-user-links yt-box">\n            <li class="vve-check overflowable-list-item guide-channel" id="HCtnHdj3df7iM-guide-item" data-visibility-tracking="CAEQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HCtnHdj3df7iM" title="Popular on YouTube" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAEQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HCtnHdj3df7iM" data-serialized-endpoint="0qDduQEPEg1IQ3RuSGRqM2RmN2lN">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/tnHdj3df7iM/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Popular on YouTube</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UC-9-kyTW8ZkZNDHQJ6FgpwQ-guide-item" data-visibility-tracking="CAIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ" title="Music" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UC-9-kyTW8ZkZNDHQJ6FgpwQ" data-serialized-endpoint="0qDduQEaEhhVQy05LWt5VFc4WmtaTkRIUUo2Rmdwd1E%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/i/-9-kyTW8ZkZNDHQJ6FgpwQ/1.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Music</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HC7Dr1BKwqctY-guide-item" data-visibility-tracking="CAMQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HC7Dr1BKwqctY" title="Sports" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAMQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HC7Dr1BKwqctY" data-serialized-endpoint="0qDduQEPEg1IQzdEcjFCS3dxY3RZ">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/7Dr1BKwqctY/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Sports</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HChfZhJdhTqX8-guide-item" data-visibility-tracking="CAQQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HChfZhJdhTqX8" title="Gaming" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAQQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HChfZhJdhTqX8" data-serialized-endpoint="0qDduQEPEg1IQ2hmWmhKZGhUcVg4">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/hfZhJdhTqX8/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Gaming</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HC-r1FlvvNFs0-guide-item" data-visibility-tracking="CAUQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HC-r1FlvvNFs0" title="Education" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAUQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HC-r1FlvvNFs0" data-serialized-endpoint="0qDduQEPEg1IQy1yMUZsdnZORnMw">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/-r1FlvvNFs0/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Education</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UCczhp4wznQWonO7Pb8HQ2MQ-guide-item" data-visibility-tracking="CAYQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UCczhp4wznQWonO7Pb8HQ2MQ" title="Movies" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAYQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UCczhp4wznQWonO7Pb8HQ2MQ" data-serialized-endpoint="0qDduQEaEhhVQ2N6aHA0d3puUVdvbk83UGI4SFEyTVE%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://lh3.googleusercontent.com/-DIjHsEMMaRE/AAAAAAAAAAI/AAAAAAAAAAA/q6whn_JcUH8/s88-c-k-no/photo.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Movies</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UCl8dMTqDrJQ0c8y23UBu4kQ-guide-item" data-visibility-tracking="CAcQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UCl8dMTqDrJQ0c8y23UBu4kQ" title="TV Shows" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAcQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UCl8dMTqDrJQ0c8y23UBu4kQ" data-serialized-endpoint="0qDduQEaEhhVQ2w4ZE1UcURySlEwYzh5MjNVQnU0a1E%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://lh4.googleusercontent.com/-hFxEr8QHrvM/AAAAAAAAAAI/AAAAAAAAAAA/REjjL0X3gIs/s88-c-k-no/photo.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>TV Shows</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HCPvDBPPFfuaM-guide-item" data-visibility-tracking="CAgQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HCPvDBPPFfuaM" title="News" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAgQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HCPvDBPPFfuaM" data-serialized-endpoint="0qDduQEPEg1IQ1B2REJQUEZmdWFN">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/PvDBPPFfuaM/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>News</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="SBAaOjE-GIlRI-guide-item" data-visibility-tracking="CAkQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/SBAaOjE-GIlRI" title="Live" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAkQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="SBAaOjE-GIlRI" data-serialized-endpoint="0qDduQEPEg1TQkFhT2pFLUdJbFJJ">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//www.gstatic.com/youtube/img/livestream/house_channels/logos/live.png" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Live</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UCBR8-60-B28hp2BmDPdntcQ-guide-item" data-visibility-tracking="CAoQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UCBR8-60-B28hp2BmDPdntcQ" title="Spotlight" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAoQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UCBR8-60-B28hp2BmDPdntcQ" data-serialized-endpoint="0qDduQEaEhhVQ0JSOC02MC1CMjhocDJCbURQZG50Y1E%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://lh6.googleusercontent.com/-dL2jeHlm2Ok/AAAAAAAAAAI/AAAAAAAAAAA/ZCMMkRj-hrw/s88-c-k-no/photo.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Spotlight</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n      <hr class="guide-section-separator">\n  </li>\n\n            \n\n            <li class="guide-section vve-check" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg&amp;ved=CBMQ5isoAg" data-visibility-tracking="CBEQ5isiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n    <div class="guide-item-container personal-item">\n      <ul class="guide-user-links yt-box">\n            <li class="vve-check overflowable-list-item guide-channel" id="guide_builder-guide-item" data-visibility-tracking="CBIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channels" title="Browse channels" data-sessionlink="feature=g-manage&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CBIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="guide_builder" data-serialized-endpoint="0qPduQECCAE%3D">\n    <span class="yt-valign-container">\n        <img class="thumb guide-builder-icon" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="display-name  no-count">\n        <span>Browse channels</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n      <hr class="guide-section-separator">\n  </li>\n\n            <li class="guide-section guide-header signup-promo guided-help-box">\n    <p>\n      Sign in now to see your channels and recommendations!\n    </p>\n    <div id="guide-builder-promo-buttons" class="signed-out clearfix">\n      <a href="https://accounts.google.com/ServiceLogin?service=youtube&amp;uilel=3&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Dsign_in_promo%26hl%3Den%26next%3D%252F&amp;passive=true&amp;hl=en" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg"><span class="yt-uix-button-content">Sign In </span></a>\n    </div>\n  </li>\n\n    </ul>');
  }

  async function getMoreSearch(t) {
    var e =
      '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
      authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
      '",\r\n\t\t\t"hl": "' +
      authinfo.HL +
      '"\r\n\t\t}\r\n\t},\r\n\t"continuation":"' +
      t +
      '",\r\n}\r\n';
    await v3.innerTube
      .AJAX("search?", e, "1", authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION)
      .then((t) => {
        console.log(t);
        var e =
            t.onResponseReceivedCommands[0].appendContinuationItemsAction
              .continuationItems[0].itemSectionRenderer.contents,
          n = "";

        for (i = 0, j = e.length; i < j; i++)
          if (void 0 !== e[i].videoRenderer) {
            var a = "";
            void 0 !== e[i].videoRenderer.ownerBadges &&
              (a =
                '<span class="yt-user-name-icon-verified">\n    <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name" data-tooltip-text="Verified name">\n  </span>');
            var s = "0";

            try {
              s = e[i].videoRenderer.lengthText.simpleText;
            } catch (t) {}

            var l = "0";

            try {
              l = e[i].videoRenderer.publishedTimeText.simpleText;
            } catch (t) {}

            var r = "0";

            try {
              r = e[i].videoRenderer.viewCountText.simpleText;
            } catch (t) {}

            var o = "";
            if (void 0 !== e[i].videoRenderer.detailedMetadataSnippets)
              for (
                x = 0,
                  y =
                    e[i].videoRenderer.detailedMetadataSnippets[0].snippetText
                      .runs.length;
                x < y;
                x++
              ) {
                if (
                  void 0 !==
                  e[i].videoRenderer.detailedMetadataSnippets[0].snippetText
                    .runs[x].bold
                )
                  var d =
                    "<b>" +
                    e[i].videoRenderer.detailedMetadataSnippets[0].snippetText
                      .runs[x].text +
                    "</b>";
                else
                  d =
                    e[i].videoRenderer.detailedMetadataSnippets[0].snippetText
                      .runs[x].text;
                o += d;
              }
            n +=
              '<li class="yt-lockup clearfix yt-uix-tile result-item-padding yt-lockup-video yt-lockup-tile vve-check context-data-item" data-context-item-time="' +
              s +
              '" data-context-item-title="' +
              e[i].videoRenderer.title.runs[0].text +
              '" data-context-item-user="' +
              e[i].videoRenderer.ownerText.runs[0].text +
              '" data-context-item-views="' +
              r +
              '" data-context-item-id="' +
              e[i].videoRenderer.videoId +
              '" data-context-item-type="video">\n    <div class="yt-lockup-thumbnail">\n      \n  <a href="' +
              e[i].videoRenderer.navigationEndpoint.commandMetadata
                .webCommandMetadata.url +
              '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto " data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-185">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" src="' +
              e[i].videoRenderer.thumbnail.thumbnails[
                parseInt(e[i].videoRenderer.thumbnail.thumbnails.length - 1)
              ].url +
              '" width="185">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n    <span class="video-time">' +
              s +
              '</span>\n\n\n  <button onclick=";return false;" title="Watch Later" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" data-video-ids="' +
              e[i].videoRenderer.videoId +
              '" data-button-menu-id="shared-addto-watch-later-login" role="button" data-tooltip-text="Watch Later"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n\n    </div>\n    <div class="yt-lockup-content">\n            <h3 class="yt-lockup-title">\n    <a class="yt-uix-sessionlink yt-uix-tile-link yt-uix-contextlink yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr" title="UFC 161: Jordan Mein Has No Regrets with Matt Brown Fight" data-sessionlink="" href="' +
              e[i].videoRenderer.navigationEndpoint.commandMetadata
                .webCommandMetadata.url +
              '"><span class="yt-ui-ellipsis-wrapper" data-original-html="' +
              e[i].videoRenderer.title.runs[0].text +
              '\n    ">' +
              e[i].videoRenderer.title.runs[0].text +
              '\n    </span></a>\n  </h3>\n\n\n\n  <div class="yt-lockup-meta">\n    <ul class="yt-lockup-meta-info">\n<li>by <a href="' +
              e[i].videoRenderer.ownerText.runs[0].navigationEndpoint
                .commandMetadata.webCommandMetadata.url +
              '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
              e[i].videoRenderer.ownerText.runs[0].text +
              "</a>" +
              a +
              "</li><li>" +
              l +
              "</li><li>" +
              r +
              '</li>    </ul>\n  </div>\n\n\n      <div class="yt-lockup-description yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
              o +
              "\n    </span></div>\n\n\n  \n\n  \n\n\n    </div>\n    \n  </li>";
          } else if (void 0 !== e[i].channelRenderer) {
            var c = "";

            try {
              c =
                e[i].channelRenderer.subscriberCountText.simpleText.split(
                  " "
                )[0];
            } catch (t) {}

            var u = "0 videos";

            try {
              u =
                e[i].channelRenderer.videoCountText.runs[0].text +
                e[i].channelRenderer.videoCountText.runs[1].text;
            } catch (t) {}

            var p = "";
            void 0 !== e[i].channelRenderer.ownerBadges &&
              (p =
                '<span class="qualified-channel-title-badge">\n<img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified">  </span>');
            var m = "";

            try {
              m = e[i].channelRenderer.subscriptionButton.subscribed
                ? "yt-uix-button-subscribed-unbranded"
                : "yt-uix-button-subscribe-unbranded";
            } catch (t) {}

            o = "";
            var h =
              e[i].channelRenderer.navigationEndpoint.browseEndpoint.browseId;
            if (void 0 !== e[i].channelRenderer.descriptionSnippet)
              for (
                x = 0, y = e[i].channelRenderer.descriptionSnippet.runs.length;
                x < y;
                x++
              ) {
                if (
                  void 0 !==
                  e[i].channelRenderer.descriptionSnippet.runs[x].bold
                )
                  d =
                    "<b>" +
                    e[i].channelRenderer.descriptionSnippet.runs[x].text +
                    "</b>";
                else d = e[i].channelRenderer.descriptionSnippet.runs[x].text;
                o += d;
              }
            n +=
              '<li class="yt-lockup clearfix yt-uix-tile result-item-padding yt-lockup-channel yt-lockup-tile vve-check">\n    <div class="yt-lockup-thumbnail">\n        <a href="' +
              e[i].channelRenderer.navigationEndpoint.commandMetadata
                .webCommandMetadata.url +
              '" class="ux-thumb-wrap yt-uix-sessionlink " data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-104 g-hovercard" data-ytid="' +
              e[i].channelRenderer.navigationEndpoint.browseEndpoint.browseId +
              '">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" src="' +
              e[i].channelRenderer.thumbnail.thumbnails[
                parseInt(e[i].channelRenderer.thumbnail.thumbnails.length - 1)
              ].url +
              '" width="104">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a>\n\n    </div>\n    <div class="yt-lockup-content">\n      <span class="qualified-channel-title ellipsized has-badge"><span class="qualified-channel-title-wrapper  g-hovercard" data-ytid="' +
              e[i].channelRenderer.navigationEndpoint.browseEndpoint.browseId +
              '">  <span class="qualified-channel-title-text">\n        <h3 class="yt-lockup-title">     <a class="yt-uix-sessionlink yt-uix-tile-link yt-uix-contextlink yt-ui-ellipsis yt-ui-ellipsis-2 g-hovercard" dir="ltr" data-ytid="' +
              e[i].channelRenderer.navigationEndpoint.browseEndpoint.browseId +
              '" data-name="" data-sessionlink="" href="' +
              e[i].channelRenderer.navigationEndpoint.commandMetadata
                .webCommandMetadata.url +
              '"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
              e[i].channelRenderer.title.simpleText +
              "     </span></a>\n  </h3>\n\n  </span>\n</span>      " +
              p +
              '\n\n</span><div class="yt-lockup-meta"><ul class="yt-lockup-meta-info"><li>by <a href="' +
              e[i].channelRenderer.navigationEndpoint.commandMetadata
                .webCommandMetadata.url +
              '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
              e[i].channelRenderer.title.simpleText +
              "</a>\n</li><li>Active this eternity</li><li>" +
              u +
              '</li></ul></div>    <div class="yt-lockup-description yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
              o +
              '\n    </span></div>\n<div class="yt-lockup-badges"><ul class="item-badge-line"><li class="yt-lockup-badge-item"><span class="yt-badge ">CHANNEL</span></li></ul>    <span class=" yt-uix-button-subscription-container"><button onclick="window.location = \'https://www.youtube.com' +
              e[i].channelRenderer.navigationEndpoint.commandMetadata
                .webCommandMetadata.url +
              '\';" aria-role="button" aria-live="polite" aria-busy="false" class="yt-uix-subscription-button yt-uix-button ' +
              m +
              ' yt-uix-button-size-default yt-uix-button-has-icon" type="button" data-sessionlink="" data-href="" data-style-type="unbranded" data-channel-external-id="' +
              h +
              '" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-subscribe" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></span><span class="yt-uix-button-content"><span class="subscribe-label" aria-label="Subscribe">Subscribe</span><span class="subscribed-label" aria-label="Unsubscribe">Subscribed</span><span class="unsubscribe-label" aria-label="Unsubscribe">Unsubscribe</span> </span></button><span class="yt-subscription-button-subscriber-count-unbranded-horizontal">' +
              c +
              '</span>  <span class="yt-subscription-button-disabled-mask" title=""></span>\n</span>\n</div>\n    </div>\n    \n  </li>';
          } else if (void 0 !== e[i].playlistRenderer) {
            var b = "";

            try {
              b = e[i].playlistRenderer.thumbnails[1].thumbnails[0].url;
            } catch (t) {}

            n +=
              '<li class="yt-lockup clearfix yt-uix-tile result-item-padding yt-lockup-playlist yt-lockup-tile vve-check context-data-item" data-context-item-id="" data-context-item-videos="" data-context-item-count="" data-context-item-title="' +
              e[i].playlistRenderer.title.simpleText +
              '" data-context-item-count-label="videos" data-context-item-user="' +
              e[i].playlistRenderer.shortBylineText.runs[0].text +
              '" data-context-item-type="playlist">\n    <div class="yt-lockup-thumbnail">\n            <a href="' +
              e[i].playlistRenderer.navigationEndpoint.commandMetadata
                .webCommandMetadata.url +
              '" class="yt-pl-thumb-link yt-uix-sessionlink " data-sessionlink="">\n      <span class="yt-pl-thumb ">\n                <span class="video-thumb  yt-thumb yt-thumb-185">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img data-thumb="' +
              e[i].playlistRenderer.thumbnails[0].thumbnails[
                parseInt(
                  e[i].playlistRenderer.thumbnails[0].thumbnails.length - 1
                )
              ].url +
              '" src="' +
              e[i].playlistRenderer.thumbnails[0].thumbnails[
                parseInt(
                  e[i].playlistRenderer.thumbnails[0].thumbnails.length - 1
                )
              ].url +
              '" alt="Thumbnail" width="185" data-group-key="thumb-group-0">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n\n\n\n    <span class="sidebar">\n      <span class="video-count-wrapper yt-valign">\n        <span class="video-count-block yt-valign-container">\n          <span class="count-label">\n            ' +
              e[i].playlistRenderer.videoCountText.runs[0].text +
              '\n          </span>\n          <span class="text-label">\n            videos\n          </span>\n        </span>\n      </span>\n      <span class="side-thumbs yt-uix-tdl" data-fold="426,1903.75">\n          <span class="sidethumb ">\n                      <span class="video-thumb  yt-thumb yt-thumb-43">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img src="' +
              b +
              '" alt="Thumbnail" width="43">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n\n\n          </span>\n          <span class="sidethumb ">\n                      <span class="video-thumb  yt-thumb yt-thumb-43">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img src="' +
              e[i].playlistRenderer.thumbnails[2].thumbnails[0].url +
              '" alt="Thumbnail" width="43">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n\n\n          </span>\n          <span class="sidethumb  empty columns-support-required">\n                    <span class="video-thumb  yt-thumb yt-thumb-43">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Thumbnail" width="43">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n\n\n          </span>\n      </span>\n    </span>\n      <span class="yt-pl-thumb-overlay">\n        <span class="yt-pl-thumb-overlay-content">\n          <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\nPlay all\n        </span>\n      </span>\n  </span>\n\n  </a>\n\n\n    </div>\n    <div class="yt-lockup-content">\n          <h3 class="yt-lockup-title">\n    <a class="yt-uix-sessionlink yt-uix-tile-link yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr" title="Pet Butler TV PlayList for PB\'s Website" data-sessionlink="ei=0ECmUsyMOujtkQK9h4GYCg&amp;ved=CE0Qvxs" href="' +
              e[i].playlistRenderer.navigationEndpoint.commandMetadata
                .webCommandMetadata.url +
              '"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
              e[i].playlistRenderer.title.simpleText +
              '\n    </span></a>\n  </h3>\n\n    <div class="yt-lockup-meta">\n      <ul class="yt-lockup-meta-info">\n          <li>\n            by <a href="' +
              e[i].playlistRenderer.shortBylineText.runs[0].navigationEndpoint
                .commandMetadata.webCommandMetadata.url +
              '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
              e[i].playlistRenderer.shortBylineText.runs[0].text +
              '</a>\n          </li>\n      </ul>\n    </div>\n  <ul class="yt-lockup-meta yt-lockup-playlist-items">\n      <li class="yt-lockup-playlist-item clearfix">\n          <span class="yt-lockup-playlist-item-length yt-lockup-deemphasized-text">\n            ' +
              e[i].playlistRenderer.videos[0].childVideoRenderer.lengthText
                .simpleText +
              '\n          </span>\n        <h4 class="yt-lockup-playlist-item-title">\n          <a href="' +
              e[i].playlistRenderer.videos[0].childVideoRenderer
                .navigationEndpoint.commandMetadata.webCommandMetadata.url +
              '" class=" yt-uix-sessionlink" data-sessionlink="">\n            ' +
              e[i].playlistRenderer.videos[0].childVideoRenderer.title
                .simpleText +
              '\n          </a>\n        </h4>\n      </li>\n      <li class="yt-lockup-playlist-item clearfix">\n          <span class="yt-lockup-playlist-item-length yt-lockup-deemphasized-text">\n            ' +
              e[i].playlistRenderer.videos[1].childVideoRenderer.lengthText
                .simpleText +
              '\n          </span>\n        <h4 class="yt-lockup-playlist-item-title">\n          <a href="' +
              e[i].playlistRenderer.videos[1].childVideoRenderer
                .navigationEndpoint.commandMetadata.webCommandMetadata.url +
              '" class=" yt-uix-sessionlink" data-sessionlink="">\n            ' +
              e[i].playlistRenderer.videos[1].childVideoRenderer.title
                .simpleText +
              '\n          </a>\n        </h4>\n      </li>\n  </ul>\n  <div class="yt-lockup-meta">\n    \n      <a class="yt-lockup-deemphasized-text yt-uix-sessionlink " href="//www.youtube.com/playlist?list=' +
              e[i].playlistRenderer.playlistId +
              '" data-sessionlink="">\nView full playlist (' +
              e[i].playlistRenderer.videoCountText.runs[0].text +
              e[i].playlistRenderer.videoCountText.runs[1].text +
              ")\n      </a>\n  </div>\n\n    </div>\n    \n  </li>";
          }

        document
          .querySelector("#search-results")
          .insertAdjacentHTML("beforeend", n);

        try {
          document
            .querySelector(".yt-uix-pager.search-pager .yt-spinner")
            .classList.add("hid"),
            document
              .querySelector("#search-more-related-button")
              .classList.remove("hid");
          var v =
            t.onResponseReceivedCommands[0].appendContinuationItemsAction
              .continuationItems[1].continuationItemRenderer
              .continuationEndpoint.continuationCommand.token;

          document.querySelector("#search-more-related-button").onclick =
            function () {
              document
                .querySelector(".yt-uix-pager.search-pager .yt-spinner")
                .classList.remove("hid"),
                document
                  .querySelector("#search-more-related-button")
                  .classList.add("hid"),
                getMoreSearch(v);
            };
        } catch (t) {
          document.querySelector("#search-more-related-button").remove();
        }
      });
  }

  function isChannelFeatureCont(t) {
    try {
      if (
        t.itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridChannelRenderer
      )
        return !0;
    } catch (t) {
      return !1;
    }
  }

  var issorted,
    currentsort,
    sorterhtml = "";

  function parseYtData(t) {
    1 == authinfo.LOGGED_IN,
      (esticount = t.estimatedResults
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
      (rawesticount = parseInt(t.estimatedResults)),
      (initialpagecount =
        parseInt(t.estimatedResults) / 19 > 7
          ? 7
          : ~~(parseInt(t.estimatedResults) / 19));
  }

  function buildSearchOptionMenu() {
    for (
      currentsort = {},
        window.sortpath =
          ytdata.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.subMenu.searchSubMenuRenderer.groups,
        i = 0,
        j = sortpath.length;
      i < j;
      i++
    ) {
      var t = sortpath[i].searchFilterGroupRenderer.title.simpleText.replaceAll(
        " ",
        ""
      );

      for (
        t = t.toLowerCase(),
          sorterhtml +=
            '<div class="filter-col"><h4 class="filter-col-title">' +
            sortpath[i].searchFilterGroupRenderer.title.simpleText +
            "</h4><ul>",
          x = 0,
          y = sortpath[i].searchFilterGroupRenderer.filters.length;
        x < y;
        x++
      ) {
        var e = "";
        sortpath[i].searchFilterGroupRenderer.filters[x].searchFilterRenderer
          .status &&
          ("FILTER_STATUS_SELECTED" ==
          sortpath[i].searchFilterGroupRenderer.filters[x].searchFilterRenderer
            .status
            ? ((e = "filter-match"),
              (issorted = !0),
              3 == i
                ? (currentsort.filter || (currentsort.filter = {}),
                  (currentsort.filter["b" + (x + 1)] = !0))
                : i < 3
                ? (currentsort.filter || (currentsort.filter = {}),
                  (currentsort.filter["f" + (i + 1)] = x + 1))
                : ((currentsort.sort = x),
                  1 == x
                    ? (currentsort.sort = 2)
                    : 2 == x
                    ? (currentsort.sort = 3)
                    : 3 == x && (currentsort.sort = 1)))
            : "FILTER_STATUS_DISABLED" ==
                sortpath[i].searchFilterGroupRenderer.filters[x]
                  .searchFilterRenderer.status && (e = "hid")),
          (sorterhtml +=
            '<li><a api-filter-parent="' +
            t +
            '" api-filter-index="' +
            x +
            '" class="filter ' +
            e +
            '" title="' +
            sortpath[i].searchFilterGroupRenderer.filters[x]
              .searchFilterRenderer.tooltip +
            '" href="' +
            (sortpath[i].searchFilterGroupRenderer.filters[x]
              .searchFilterRenderer.navigationEndpoint
              ? sortpath[i].searchFilterGroupRenderer.filters[x]
                  .searchFilterRenderer.navigationEndpoint.commandMetadata
                  .webCommandMetadata.url
              : "") +
            '"><span class="filter-text filter-ghost">' +
            sortpath[i].searchFilterGroupRenderer.filters[x]
              .searchFilterRenderer.label.simpleText +
            "</span></a></li>");
      }

      sorterhtml += "</ul></div>";
    }

    return sorterhtml.replace("undefined", "");
  }

  function buildPagination2() {
    var t = 1;
    if (
      (window.location.href.includes("page=") &&
        (t = parseInt(window.location.href.split("page=")[1].split("&")[0])),
      rawesticount < 21)
    )
      return "";
    var e = Math.round(rawesticount / 20);
    if (t > e) return "";
    var n = t - 3 > 0 ? t - 3 : 1,
      a = t + 3 > 7 ? t + 3 : 7;
    a > e && (a = e), console.log(e, t, n, a);
    var s = "";

    for (
      t > 1 &&
        (s +=
          '<button id="search-back-related-button" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default" type="button" onclick="window.location = \'REPLACE_ME\';" data-button-action="" role="button"><span class="yt-uix-button-content"> « ' +
          v3.UIMSG.get("PAGINATION_BACK") +
          " </span></button>"),
        i = n,
        j = a;
      i <= j;
      i++
    ) {
      var l = currentsort;
      (l.index = 20 * (i - 1)),
        (l = api.search.spgen(l)),
        1 == i && (l = ""),
        i + 1 == t &&
          s.includes("REPLACE_ME") &&
          (s = s.replace(
            "REPLACE_ME",
            "/results?search_query=" +
              window.location.href.split("search_query=")[1].split("&")[0] +
              "&amp;sp=" +
              l +
              "&amp;page=" +
              i
          )),
        (s +=
          '\n\t\t\t<a href="/results?search_query=' +
          window.location.href.split("search_query=")[1].split("&")[0] +
          "&amp;sp=" +
          l +
          "&amp;page=" +
          i +
          '" class="yt-uix-button yt-uix-tooltip yt-uix-pager-button' +
          (i == t ? " yt-uix-button-toggled" : "") +
          ' yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default" data-sessionlink="" data-page="' +
          i +
          '" title="' +
          v3.UIMSG.get("PAGINATION_GOTO_TOOLTIP", i) +
          '"><span class="yt-uix-button-content">' +
          i +
          " </span></a>\n\t\t\t");
    }

    return (
      t + 1 < e &&
        (s +=
          '<button id="search-next-related-button" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default" type="button" onclick="window.location = document.querySelector(\'.yt-uix-pager-button.yt-uix-button-toggled + .yt-uix-pager-button\').href;" data-button-action="" role="button"><span class="yt-uix-button-content"> ' +
          v3.UIMSG.get("PAGINATION_NEXT") +
          " » </span></button>"),
      s
    );
  }

  function v3mainfriend() {
    (document.title =
      decodeURIComponent(
        window.location.href.split("?search_query=")[1].split("&")[0]
      ).replace(new RegExp("\\+", "g"), " ") + " - YouTube TUDO2"),
      changeFavicon(chrome.extension.getURL("/images/favicon2.png"));
    var t =
      window.performance.timing.domContentLoadedEventEnd -
      window.performance.timing.navigationStart;
    console.log("Page have loaded in " + t + "ms."),
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
    var e = document.createElement("script");
    (e.src = chrome.extension.getURL("hitchhiker/common/searchbox_service.js")),
      (e.onload = function () {
        console.log("search load"), v3SearchFriend();
      }),
      document.head.appendChild(e);
  }
}
