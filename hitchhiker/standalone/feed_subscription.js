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

if (
  window.location.href
    .toLocaleLowerCase()
    .includes("/reporthistory?v3feed=subscription") &&
  !window.location.href.includes("v3cv=0")
) {
  function waitForElm(n) {
    return new Promise((e) => {
      if (document.querySelector(n)) return e(document.querySelector(n));
      const t = new MutationObserver((i) => {
        document.querySelector(n) &&
          (e(document.querySelector(n)), t.disconnect());
      });
      t.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    });
  }

  function addStyle(n) {
    const e = document.createElement("style");
    (e.textContent = n), document.head.append(e);
  }

  function changeFavicon(n) {
    var e = document.createElement("link"),
      t = document.getElementById("dynamic-favicon");
    (e.id = "dynamic-favicon"),
      (e.rel = "shortcut icon"),
      (e.href = n),
      t && document.head.removeChild(t),
      document.head.appendChild(e);
  }

  softChangeUrl("feed/subscriptions&view=" + subscriptionstate, !0),
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
      .setAttribute("class", v3.htmlBuilderConfig.feed.subscription),
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
        " DEBUG : detected v3 feed subscription test page"
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

  function v3SubscriptionFriend() {
    document.querySelector("#feed-more-button") &&
      (document.querySelector("#feed-more-button").onclick = function () {
        loadMoreSubscriptions(
          document
            .querySelector("#feed-more-button")
            .getAttribute("data-ajax-id")
        ),
          document.querySelector("#feed-more-button").classList.add("hid"),
          document
            .querySelector("#feed-more-button+.yt-spinner")
            .classList.remove("hid");
      });
  }

  async function loadMoreSubscriptions(n) {
    var e = await getMoreSub(n).then((n) => {
      (e =
        n.onResponseReceivedActions[0].appendContinuationItemsAction
          .continuationItems),
        console.log(e),
        buildMoreSubscriptions(e);
    });
  }

  function buildMoreSubscriptions(n) {
    var e =
        n[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .expandedShelfContentsRenderer.items,
      t = "";

    for (i = 0, j = e.length; i < j; i++) {
      var a = e[i].channelRenderer,
        s = "0 videos";

      try {
        s = a.videoCountText.runs[0].text;
      } catch (n) {}

      try {
        s = a.videoCountText.runs[0].text + a.videoCountText.runs[1].text;
      } catch (n) {}

      var l = "";

      try {
        l = a.descriptionSnippet.runs[0].text;
      } catch (n) {}

      var c = "";

      try {
        c = a.subscriberCountText.simpleText.split(" ")[0];
      } catch (n) {}

      t +=
        '<li style="margin-top:15px; margin-left:35px;" class="yt-lockup clearfix yt-uix-tile yt-lockup-channel yt-lockup-tile vve-check">\n    <div class="yt-lockup-thumbnail">\n        <a href="/channel/' +
        a.channelId +
        '?v3cv=1&amp;app=true" class="ux-thumb-wrap yt-uix-sessionlink " data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-104 g-hovercard" data-ytid="' +
        a.channelId +
        '">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" src="' +
        a.thumbnail.thumbnails[parseInt(a.thumbnail.thumbnails.length - 1)]
          .url +
        '" width="104">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a>\n\n    </div>\n    <div class="yt-lockup-content">\n      <span class="qualified-channel-title ellipsized has-badge"><span class="qualified-channel-title-wrapper  g-hovercard" data-ytid="' +
        a.channelId +
        '">  <span class="qualified-channel-title-text">\n        <h3 class="yt-lockup-title">     <a class="yt-uix-sessionlink yt-uix-tile-link yt-uix-contextlink yt-ui-ellipsis yt-ui-ellipsis-2 g-hovercard" dir="ltr" data-ytid="' +
        a.channelId +
        '" data-name="" data-sessionlink="" href="/channel/' +
        a.channelId +
        '?v3cv=1&amp;app=true"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
        a.title.simpleText +
        '     </span></a>\n  </h3>\n\n  </span>\n</span>      \n\n</span><div class="yt-lockup-meta"><ul class="yt-lockup-meta-info"><li>by <a href="/channel/' +
        a.channelId +
        '?v3cv=1&amp;app=true" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
        a.title.simpleText +
        "</a>\n</li><li>Active this eternity</li><li>" +
        s +
        '</li></ul></div>    <div class="yt-lockup-description yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
        l +
        '</span></div>\n<div class="yt-lockup-badges"><ul class="item-badge-line"><li class="yt-lockup-badge-item"><span class="yt-badge ">CHANNEL</span></li></ul>    <span class=" yt-uix-button-subscription-container"><button onclick="return false;" aria-role="button" aria-live="polite" aria-busy="false" class="yt-uix-subscription-button yt-uix-button yt-uix-button-subscribed-unbranded yt-uix-button-size-default yt-uix-button-has-icon" type="button" data-sessionlink="" data-href="" data-style-type="unbranded" data-channel-external-id="' +
        a.channelId +
        '" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-subscribe" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></span><span class="yt-uix-button-content"><span class="subscribe-label" aria-label="Subscribe">Subscribe</span><span class="subscribed-label" aria-label="Unsubscribe">Subscribed</span><span class="unsubscribe-label" aria-label="Unsubscribe">Unsubscribe</span> </span></button><span class="yt-subscription-button-subscriber-count-unbranded-horizontal">' +
        c +
        '</span>  <span class="yt-subscription-button-disabled-mask" title=""></span>\n</span>\n</div>\n    </div>\n    \n  </li>';
    }

    document.querySelector(".yt-spinner:not(.hid)").classList.add("hid"),
      document.querySelector("ul.feed-list").insertAdjacentHTML("beforeend", t),
      n[1].continuationItemRenderer
        ? (document.querySelector("#feed-more-button").classList.remove("hid"),
          document
            .querySelector("#feed-more-button")
            .setAttribute(
              "data-ajax-id",
              n[1].continuationItemRenderer.continuationEndpoint
                .continuationCommand.token
            ))
        : document.querySelector("#feed-more-button").remove();
  }

  async function getMoreSub(n) {
    var e = await getSapisidhash();
    return (
      await fetch(
        "https://www.youtube.com/youtubei/v1/browse?key=" +
          authinfo.INNERTUBE_API_KEY,
        {
          credentials: "include",
          headers: _objectSpread(
            _objectSpread(
              _objectSpread(
                {},
                authinfo.LOGGED_IN && {
                  Authorization: e
                }
              ),
              authinfo.LOGGED_IN && {
                "X-Goog-AuthUser": "0"
              }
            ),
            {},
            {
              "Content-Type": "application/json",
              Origin: "https://www.youtube.com",
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
            '",\r\n\t\t\t"hl": "en"\r\n\t\t}\r\n\t},\r\n\t"continuation":"' +
            n +
            '",\r\n}\r\n',
          method: "POST",
          mode: "cors"
        }
      )
    ).json();
  }

  function buildSearch() {
    document
      .querySelector("#body-container")
      .insertAdjacentHTML(
        "beforeend",
        '<div id="page-container"><div id="page" class="feed history subscription clearfix"><div id="guide">        <div id="guide-container" class=" vve-check" data-sessionlink="">\n      <div id="guide-main" class="    guide-module     spf-nolink ">\n        <div class="guide-module-toggle">\n          <span class="guide-module-toggle-icon">\n            <span class="guide-module-toggle-arrow"></span>\n            <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\n            <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" id="collapsed-notification-icon">\n          </span>\n          <div class="guide-module-toggle-label">\n            <h3>\n              <span>\nGuide\n              </span>\n            </h3>\n          </div>\n        </div>\n          <div class="guide-module-content yt-scrollbar">\n    \n        \n\n  </div>\n\n      </div>\n        <div id="watch-context-container" class="guide-module collapsed hid"></div>\n\n    </div>\n\n</div>\n<div id="content">  \n\n\n\n\n  <div class="branded-page-v2-container ">\n    <div class="branded-page-v2-col-container clearfix">\n        \n      <div class="branded-page-v2-primary-col">\n            <div class="branded-page-v2-primary-col-header-container">\n            <div class="feed-header collection clearfix">\n    <div class="feed-channel-header">\n        <div class="feed-channel-header-secondary">\n          <ul>\n              \n              </li>\n              <li class="collection-channel-icon">\n                <a href="/feed?v3feed=sUbScRiPtIoN">\n                      \n\n                </a>\n              </li>\n          </ul>\n        </div>\n      <div class="feed-channel-header-details">\n        <h2 class="feed-channel-header-title">\n          Subscriptions\n        </h2>\n      </div>\n    </div>\n    <div class="feed-header-feed-filter">\n        <ul id="channel-navigation-menu" class="clearfix">\n      <li>\n      <h2 class="epic-nav-item-heading">\n        New\n\n      </h2>\n  </li>\n\n      <li>\n      <a href="/feed?v3feed=sUbScRiPtIoN&view=1" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-epic-nav-item yt-uix-button-size-default" data-sessionlink=""><span class="yt-uix-button-content">Manage\n</span></a>\n  </li>\n\n  </ul>\n\n    </div>\n  </div>\n\n\n  <div id="context-source-container" data-context-source="Subscriptions" style="display:none;"></div>\n\n    </div>\n  <div class="branded-page-v2-body" id="gh-activityfeed">\n      <div id="feed" class="spf-nolink">\n      <div class="individual-feed" data-feed-name="" data-feed-type="collection" data-filter-type="">\n\n\n    \n      <div class="feed-container" data-filter-type="" data-paging="1377215189">\n    <div class="feed-page">\n          <p class="yt-spinner">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n    </div>\n\n        \n\n  </div>\n\n  </div>\n\n  <div id="feed-error" class="individual-feed hid">\n    <p class="feed-message">\nWe were unable to complete the request, please try again later.\n    </p>\n  </div>\n\n  <div id="feed-loading-template" class="hid">\n    <div class="feed-message">\n        <p class="yt-spinner">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n    </div>\n  </div>\n\n  </div>\n\n  </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n</div></div></div>'
      ),
      v3.htmlBuilderConfig.core.NIRVANA &&
        ((document.querySelector("#guide-container").outerHTML =
          '<div id="appbar-guide-menu" class="appbar-menu appbar-guide-menu-visibility appbar-guide-clickable-ancestor yt-uix-scroller" style="top: 0px;" data-scroller-mousewheel-listener="" data-scroller-scroll-listener="">' +
          document.querySelector("#guide-container").outerHTML +
          "</div>"),
        document
          .querySelector("#content")
          .setAttribute("class", "content-alignment yt-card")),
      0 == authinfo.LOGGED_IN &&
        document.querySelector("html[feed]") &&
        document.querySelector("html").setAttribute("feedload", ""),
      0 == authinfo.LOGGED_IN
        ? (document.querySelector(
            ".guide-module-content.yt-scrollbar"
          ).innerHTML =
            '<ul class="guide-toplevel">\n            <li class="guide-section vve-check" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg&amp;ved=CAIQ5isoAA" data-visibility-tracking="CAAQ5isiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n    <div class="guide-item-container personal-item">\n      <ul class="guide-user-links yt-box">\n            <li class="vve-check overflowable-list-item guide-channel" id="HCtnHdj3df7iM-guide-item" data-visibility-tracking="CAEQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HCtnHdj3df7iM" title="Popular on YouTube" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAEQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HCtnHdj3df7iM" data-serialized-endpoint="0qDduQEPEg1IQ3RuSGRqM2RmN2lN">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/tnHdj3df7iM/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Popular on YouTube</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UC-9-kyTW8ZkZNDHQJ6FgpwQ-guide-item" data-visibility-tracking="CAIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ" title="Music" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UC-9-kyTW8ZkZNDHQJ6FgpwQ" data-serialized-endpoint="0qDduQEaEhhVQy05LWt5VFc4WmtaTkRIUUo2Rmdwd1E%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/i/-9-kyTW8ZkZNDHQJ6FgpwQ/1.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Music</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HC7Dr1BKwqctY-guide-item" data-visibility-tracking="CAMQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HC7Dr1BKwqctY" title="Sports" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAMQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HC7Dr1BKwqctY" data-serialized-endpoint="0qDduQEPEg1IQzdEcjFCS3dxY3RZ">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/7Dr1BKwqctY/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Sports</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HChfZhJdhTqX8-guide-item" data-visibility-tracking="CAQQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HChfZhJdhTqX8" title="Gaming" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAQQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HChfZhJdhTqX8" data-serialized-endpoint="0qDduQEPEg1IQ2hmWmhKZGhUcVg4">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/hfZhJdhTqX8/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Gaming</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HC-r1FlvvNFs0-guide-item" data-visibility-tracking="CAUQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HC-r1FlvvNFs0" title="Education" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAUQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HC-r1FlvvNFs0" data-serialized-endpoint="0qDduQEPEg1IQy1yMUZsdnZORnMw">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/-r1FlvvNFs0/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Education</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UCczhp4wznQWonO7Pb8HQ2MQ-guide-item" data-visibility-tracking="CAYQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UCczhp4wznQWonO7Pb8HQ2MQ" title="Movies" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAYQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UCczhp4wznQWonO7Pb8HQ2MQ" data-serialized-endpoint="0qDduQEaEhhVQ2N6aHA0d3puUVdvbk83UGI4SFEyTVE%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://lh3.googleusercontent.com/-DIjHsEMMaRE/AAAAAAAAAAI/AAAAAAAAAAA/q6whn_JcUH8/s88-c-k-no/photo.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Movies</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UCl8dMTqDrJQ0c8y23UBu4kQ-guide-item" data-visibility-tracking="CAcQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UCl8dMTqDrJQ0c8y23UBu4kQ" title="TV Shows" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAcQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UCl8dMTqDrJQ0c8y23UBu4kQ" data-serialized-endpoint="0qDduQEaEhhVQ2w4ZE1UcURySlEwYzh5MjNVQnU0a1E%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://lh4.googleusercontent.com/-hFxEr8QHrvM/AAAAAAAAAAI/AAAAAAAAAAA/REjjL0X3gIs/s88-c-k-no/photo.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>TV Shows</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="HCPvDBPPFfuaM-guide-item" data-visibility-tracking="CAgQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/HCPvDBPPFfuaM" title="News" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAgQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="HCPvDBPPFfuaM" data-serialized-endpoint="0qDduQEPEg1IQ1B2REJQUEZmdWFN">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//i1.ytimg.com/li/PvDBPPFfuaM/default.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>News</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="SBAaOjE-GIlRI-guide-item" data-visibility-tracking="CAkQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/SBAaOjE-GIlRI" title="Live" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAkQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="SBAaOjE-GIlRI" data-serialized-endpoint="0qDduQEPEg1TQkFhT2pFLUdJbFJJ">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="//www.gstatic.com/youtube/img/livestream/house_channels/logos/live.png" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Live</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n            <li class="vve-check overflowable-list-item guide-channel" id="UCBR8-60-B28hp2BmDPdntcQ-guide-item" data-visibility-tracking="CAoQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channel/UCBR8-60-B28hp2BmDPdntcQ" title="Spotlight" data-sessionlink="feature=g-channel&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CAoQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="UCBR8-60-B28hp2BmDPdntcQ" data-serialized-endpoint="0qDduQEaEhhVQ0JSOC02MC1CMjhocDJCbURQZG50Y1E%3D">\n    <span class="yt-valign-container">\n        <span class="thumb">    <span class="video-thumb  yt-thumb yt-thumb-18">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img alt="Thumbnail" src="https://lh6.googleusercontent.com/-dL2jeHlm2Ok/AAAAAAAAAAI/AAAAAAAAAAA/ZCMMkRj-hrw/s88-c-k-no/photo.jpg" width="18">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n</span>\n      <span class="display-name  no-count">\n        <span>Spotlight</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n      <hr class="guide-section-separator">\n  </li>\n\n            \n\n            <li class="guide-section vve-check" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg&amp;ved=CBMQ5isoAg" data-visibility-tracking="CBEQ5isiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n    <div class="guide-item-container personal-item">\n      <ul class="guide-user-links yt-box">\n            <li class="vve-check overflowable-list-item guide-channel" id="guide_builder-guide-item" data-visibility-tracking="CBIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=">\n      \n  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channels" title="Browse channels" data-sessionlink="feature=g-manage&amp;ei=eeawUpLNNYrMiQLUmIGICg" data-visibility-tracking="CBIQtSwiEwjS7aTGvLi7AhUKZkIKHVRMAKE=" data-external-id="guide_builder" data-serialized-endpoint="0qPduQECCAE%3D">\n    <span class="yt-valign-container">\n        <img class="thumb guide-builder-icon" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">\n      <span class="display-name  no-count">\n        <span>Browse channels</span>\n      </span>\n    </span>\n  </a>\n\n  </li>\n\n      </ul>\n    </div>\n      <hr class="guide-section-separator">\n  </li>\n\n            <li class="guide-section guide-header signup-promo guided-help-box">\n    <p>\n      Sign in now to see your channels and recommendations!\n    </p>\n    <div id="guide-builder-promo-buttons" class="signed-out clearfix">\n      <a href="https://accounts.google.com/ServiceLogin?service=youtube&amp;uilel=3&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Dsign_in_promo%26hl%3Den%26next%3D%252F&amp;passive=true&amp;hl=en" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=eeawUpLNNYrMiQLUmIGICg"><span class="yt-uix-button-content">Sign In </span></a>\n    </div>\n  </li>\n\n    </ul>')
        : 0 == subscriptionstate
        ? waitForElm("#subscriptions-guide-item .guide-item").then(function (
            n
          ) {
            document
              .querySelector("#subscriptions-guide-item .guide-item")
              .setAttribute(
                "class",
                "guide-item guide-item-selected yt-uix-sessionlink yt-valign spf-nolink "
              );
          })
        : waitForElm("#subscription_manager-guide-item .guide-item").then(
            function (n) {
              document
                .querySelector("#subscription_manager-guide-item .guide-item")
                .setAttribute(
                  "class",
                  "guide-item guide-item-selected yt-uix-sessionlink yt-valign spf-nolink "
                );
            }
          ),
      v3SubscriptionService();
  }

  function hasContinuation(n) {
    try {
      if (n.continuationItemRenderer) return !0;
    } catch (n) {
      return !1;
    }
  }

  function v3SubscriptionService() {
    document.querySelector("#channel-navigation-menu li:nth-of-type(2) h2") ||
      1 != subscriptionstate ||
      ((document.querySelector(
        "#channel-navigation-menu li:nth-of-type(2)"
      ).innerHTML =
        '<h2 class="epic-nav-item-heading">\n        Manage\n\n      </h2>'),
      (document.querySelector(
        "#channel-navigation-menu li:nth-of-type(1)"
      ).innerHTML =
        '<a href="/feed?v3feed=sUbScRiPtIoN&view=0" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-epic-nav-item yt-uix-button-size-default" data-sessionlink=""><span class="yt-uix-button-content">New\n</span></a>'));
  }

  function isChannelFeatureCont(n) {
    try {
      if (
        n.itemSectionRenderer.contents[0].shelfRenderer.content
          .horizontalListRenderer.items[0].gridChannelRenderer
      )
        return !0;
    } catch (n) {
      return !1;
    }
  }

  function parseYtData(n) {
    1 == authinfo.LOGGED_IN &&
      (userpicture =
        n.topbar.desktopTopbarRenderer.topbarButtons[3].topbarMenuButtonRenderer
          .avatar.thumbnails[0].url);
  }

  function v3mainfriend() {
    (document.title = "Subscriptions - YouTube TUDO2"),
      changeFavicon(chrome.extension.getURL("/images/favicon2.png")),
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
    var n = document.createElement("script");
    (n.src = chrome.extension.getURL("hitchhiker/common/searchbox_service.js")),
      (n.onload = function () {
        console.log("search load"), v3SearchFriend();
      }),
      document.head.appendChild(n);
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
}
