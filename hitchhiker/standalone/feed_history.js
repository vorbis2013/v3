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
    .includes("/reporthistory?v3feed=history") &&
  !window.location.href.includes("v3cv=0")
) {
  function waitForElm(n) {
    return new Promise((e) => {
      if (document.querySelector(n)) return e(document.querySelector(n));
      const t = new MutationObserver((a) => {
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

  softChangeUrl("feed/history", !0),
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
      .setAttribute("class", v3.htmlBuilderConfig.feed.history),
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
        " DEBUG : detected v3 feed history test page"
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

  function buildSearch() {
    document
      .querySelector("#body-container")
      .insertAdjacentHTML(
        "beforeend",
        '<div id="page-container"><div id="page" class="feed history clearfix"><div id="guide">        <div id="guide-container" class=" vve-check" data-sessionlink="">\n      <div id="guide-main" class="    guide-module     spf-nolink ">\n        <div class="guide-module-toggle">\n          <span class="guide-module-toggle-icon">\n            <span class="guide-module-toggle-arrow"></span>\n            <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\n            <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" id="collapsed-notification-icon">\n          </span>\n          <div class="guide-module-toggle-label">\n            <h3>\n              <span>\nGuide\n              </span>\n            </h3>\n          </div>\n        </div>\n          <div class="guide-module-content yt-scrollbar">\n    \n        \n\n  </div>\n\n      </div>\n        <div id="watch-context-container" class="guide-module collapsed hid"></div>\n\n    </div>\n\n</div><div id="content">  \n\n\n\n\n  <div class="branded-page-v2-container ">\n    <div class="branded-page-v2-col-container clearfix">\n        <div class="branded-page-v2-secondary-col">\n                  <div class="branded-page-related-channels yt-card branded-page-gutter-padding">\n            <h2 class="branded-page-related-channels-title" dir="ltr">\n        <a href="/channels/recommended_for_you">Recommended channels</a>\n    </h2>\n\n        <ul class="branded-page-related-channels-list">\n        <li class="branded-page-related-channels-item clearfix" data-external-id="UCaBf1a-dpIsw8OxqH4ki2Kg">\n        <span class="yt-featured-channel-label">\n    Featured\n  </span>\n\n    <a href="/feed/trending" class="spf-link yt-uix-sessionlink" data-sessionlink="ved=CAUQwBs&amp;ei=4JQiUrCaHYKZiQLS4oHICg&amp;feature=rc-feat">\n          <span class="video-thumb branded-page-related-channels-thumb yt-thumb yt-thumb-32 g-hovercard" data-ytid="UCaBf1a-dpIsw8OxqH4ki2Kg" data-name="rc-feat">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" src="https://www.youtube.com/img/trending/avatar/trending_avatar.png" data-thumb="https://lh3.googleusercontent.com/-cyEhEXnn2BI/AAAAAAAAAAI/AAAAAAAAAAA/Ek4fD_9iVxM/s88-c-k/photo.jpg" width="32" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n\n    </a>\n    <div class="branded-page-related-channels-content">\n        <h3>\n    <a class="spf-link yt-uix-tooltip yt-uix-sessionlink" href="/feed/trending" dir="ltr" data-sessionlink="ved=CAMQvxs&amp;ei=4JQiUrCaHYKZiQLS4oHICg&amp;feature=rc-feat">\n\n      <span class="qualified-channel-title ellipsized has-badge"><span class="qualified-channel-title-wrapper  g-hovercard" data-ytid="UCaBf1a-dpIsw8OxqH4ki2Kg" data-name="rc-feat">  <span class="qualified-channel-title-text">\n      Trending\n  </span>\n</span>        <span class="qualified-channel-title-badge">\n<img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name">  </span>\n\n\n</span>\n    </a>\n  </h3>\n\n      \n    </div>\n  </li>\n\n        \n\n        \n\n        \n\n        \n\n  </ul>\n\n    </div>\n\n\n        </div>\n      <div class="branded-page-v2-primary-col">\n            <div class="branded-page-v2-primary-col-header-container">\n          <div class="yt-alert yt-alert-default yt-alert-error hid managed-feed-message" id="managed-feed-error">  <div class="yt-alert-icon">\n    <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-buttons"><button onclick=";return false;" type="button" class="close yt-uix-close yt-uix-button yt-uix-button-close yt-uix-button-size-default" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>\n    <div class="yt-alert-message">\n            There was an error while processing your request. Please try again.\n    </div>\n</div></div>\n    <div class="yt-alert yt-alert-default yt-alert-success hid managed-feed-message" id="managed-feed-success">  <div class="yt-alert-icon">\n    <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-buttons"><button onclick=";return false;" type="button" class="close yt-uix-close yt-uix-button yt-uix-button-close yt-uix-button-size-default" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert"></div></div>\n      <div class="feed-header clearfix">\n      <span class="feed-header-message">\n        <span class="feed-history-header-message"><img class="feed-header-private" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">Only you can see your history</span>\n      </span>\n    <h2 class="epic-nav-item-heading">\n      Watch History\n    </h2>\n  </div>\n\n      <div class="branded-page-v2-subnav-container branded-page-gutter-padding">\n\n    \n  \n\n\n\n    \n  <span class="yt-uix-overlay ">\n    <span class="  yt-uix-overlay-target"><button onclick=";return false;" type="button" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default" role="button"><span class="yt-uix-button-content">Clear all watch history </span></button></span>\n\t<span class="  yt-uix-overlay-target" style="margin-left:5px;"><button onclick=";return false;" type="button" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default" role="button"><span class="yt-uix-button-content">Comments post history </span></button></span>\n\t<span class="  yt-uix-overlay-target" style="margin-left:5px;"><button onclick=";return false;" type="button" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default" role="button"><span class="yt-uix-button-content">Live chat history </span></button></span>\n\t<span class="  yt-uix-overlay-target hid v3-remove-historys" style="margin-left:5px;"><button onclick=";return false;" type="button" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default" role="button"><span class="yt-uix-button-content">Remove selected videos </span></button></span>\n        <div class="yt-dialog hid">\n    <div class="yt-dialog-base">\n      <span class="yt-dialog-align"></span>\n      <div class="yt-dialog-fg">\n        <div class="yt-dialog-fg-content">\n            <div class="yt-dialog-header">\n                  <button onclick=";return false;" type="button" class="  yt-dialog-dismiss yt-dialog-close yt-uix-button yt-uix-button-default yt-uix-button-size-default" data-action="close" role="button"><span class="yt-uix-button-content">Close </span></button>\n\n                <h2 class="yt-dialog-title">\n                        Clear all watch history\n\n\n                </h2>\n            </div>\n          <div class="yt-dialog-loading">\n              <div class="yt-dialog-waiting-content">\n    <div class="yt-spinner-img"></div><div class="yt-dialog-waiting-text">Loading...</div>\n  </div>\n\n          </div>\n          <div class="yt-dialog-content">\n              <p>\nAre you sure you want to clear your entire watch history? You can\'t undo this.\n  </p>\n  <div class="yt-uix-overlay-actions">\n    <button onclick=";return false;" type="button" class="watch-history-clear-button yt-uix-overlay-close yt-uix-button yt-uix-button-default yt-uix-button-size-default" role="button"><span class="yt-uix-button-content">Clear all watch history </span></button>\n    <button onclick=";return false;" type="button" class="yt-uix-overlay-close yt-uix-button yt-uix-button-primary yt-uix-button-size-default" role="button"><span class="yt-uix-button-content">Cancel </span></button>\n  </div>\n\n          </div>\n          <div class="yt-dialog-working">\n              <div id="yt-dialog-working-overlay">\n  </div>\n  <div id="yt-dialog-working-bubble">\n    <div class="yt-dialog-waiting-content">\n      <div class="yt-spinner-img"></div><div class="yt-dialog-waiting-text">Working...</div>\n    </div>\n  </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  </span>\n\n\n  </div>\n\n\n  <div id="context-source-container" data-context-source="Watch History" style="display:none;"></div>\n\n    </div>\n  <div class="branded-page-v2-body" id="gh-activityfeed">\n      <div id="feed" class="spf-nolink">\n      <div class="individual-feed" data-feed-name="history" data-feed-type="personal" data-filter-type="">\n\n\n    \n      <div class="feed-container" data-filter-type="">\n    <div class="feed-page">\n            <h1 class="no-recent-activity">\n    <p class="yt-spinner">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n  </h1>\n\n\n    </div>\n\n  </div>\n\n  </div>\n\n  <div id="feed-error" class="individual-feed hid">\n    <p class="feed-message">\nWe were unable to complete the request, please try again later.\n    </p>\n  </div>\n\n  <div id="feed-loading-template" class="hid">\n    <div class="feed-message">\n        <p class="yt-spinner">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n    </div>\n  </div>\n\n  </div>\n\n  </div>\n\n      </div>\n    </div>\n  </div>\n</div></div></div>'
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
        : waitForElm(
            ".guide-section:not(.hid) #history-guide-item .guide-item"
          ).then(function (n) {
            document
              .querySelector(
                ".guide-section:not(.hid) #history-guide-item .guide-item"
              )
              .setAttribute(
                "class",
                "guide-item guide-item-selected yt-uix-sessionlink yt-valign spf-nolink "
              );
          });
  }

  function hasContinuation(n) {
    try {
      if (n.continuationItemRenderer) return !0;
    } catch (n) {
      return !1;
    }
  }

  function buildHistoryFeed(n) {
    var e,
      t = n;

    try {
      removeallid =
        t.contents.twoColumnBrowseResultsRenderer.secondaryContents.browseFeedActionsRenderer.contents.find(
          isRemoveAllHistory
        ).buttonRenderer.navigationEndpoint.confirmDialogEndpoint.content
          .confirmDialogRenderer.confirmButton.buttonRenderer.serviceEndpoint
          .feedbackEndpoint.feedbackToken;
    } catch (n) {}

    (document.querySelector(
      ".yt-uix-overlay-target:nth-of-type(2) button"
    ).onclick = function () {
      window.location =
        t.contents.twoColumnBrowseResultsRenderer.secondaryContents.browseFeedActionsRenderer.contents[6].compactLinkRenderer.navigationEndpoint.urlEndpoint.url;
    }),
      (document.querySelector(
        ".yt-uix-overlay-target:nth-of-type(3) button"
      ).onclick = function () {
        window.location =
          t.contents.twoColumnBrowseResultsRenderer.secondaryContents.browseFeedActionsRenderer.contents[7].compactLinkRenderer.navigationEndpoint.urlEndpoint.url;
      }),
      (document.querySelector(
        ".yt-uix-overlay-target:nth-of-type(1) button"
      ).onclick = function () {
        document.querySelector(".yt-dialog.hid")
          ? document.querySelector(".yt-dialog.hid").classList.remove("hid")
          : document.querySelector(".yt-dialog").classList.add("hid");
      }),
      (document.querySelector(
        ".yt-dialog-base .yt-dialog-header .yt-dialog-close"
      ).onclick = function () {
        document.querySelector(".yt-dialog").classList.add("hid");
      }),
      (document.querySelector(
        ".yt-dialog-base .yt-uix-button-primary"
      ).onclick = function () {
        document.querySelector(".yt-dialog").classList.add("hid");
      }),
      (e = (n =
        n.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
          .sectionListRenderer.contents).find(hasContinuation)
        ? n.length - 1
        : n.length);
    var a = document.createElement("ul");

    for (
      a.setAttribute("class", "feed-list context-data-container"),
        document.querySelector(".feed-page").innerHTML = "",
        document.querySelector(".feed-page").append(a),
        i = 0,
        j = e;
      i < j;
      i++
    ) {
      var s = "";

      try {
        s =
          n[i].itemSectionRenderer.header.itemSectionHeaderRenderer.title
            .runs[0].text;
      } catch (n) {}

      var l = "";

      for (
        l += '<h1 class="date-day">\n    ' + s + "\n  </h1>",
          x = 0,
          y = n[i].itemSectionRenderer.contents.length;
        x < y;
        x++
      ) {
        var o = n[i].itemSectionRenderer.contents[x].videoRenderer,
          c = "";
        o.ownerBadges &&
          (c =
            '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name" data-tooltip-text="Verified name">\n  </span>');
        var d = "";

        try {
          d =
            n[i].itemSectionRenderer.contents[x].videoRenderer.menu.menuRenderer
              .topLevelButtons[0].buttonRenderer.serviceEndpoint
              .feedbackEndpoint.feedbackToken;
        } catch (n) {}

        var r = "";

        try {
          r = o.descriptionSnippet.runs[0].text;
        } catch (n) {}

        var u = "",
          p = "";

        try {
          p = o.viewCountText.simpleText;
        } catch (n) {}

        try {
          u = o.lengthText.simpleText;
        } catch (n) {}

        l +=
          '<li class="feed-list-item feed-item-container yt-card" data-channel-key="' +
          o.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId +
          '" feedback-ajax-id="' +
          d +
          '">\n    <div class="feed-item-dismissable  ">\n                \n\n\n        <div class="feed-item-main">\n          \n          <div class="feed-item-main-content">\n                    <div class="feed-item-checkbox-container">\n    <span class="yt-uix-form-input-checkbox-container feed-item-checkbox-container"><input type="checkbox" name="feed-item-checkbox" class="yt-uix-form-input-checkbox feed-item-checkbox tag-video-checkbox" value="' +
          o.videoId +
          '" aria-labelledby="' +
          o.videoId +
          '"><span class="yt-uix-form-input-checkbox-element"></span></span>\n  </div>\n\n\n    <div class="yt-lockup clearfix  yt-lockup-video yt-lockup-tile context-data-item" data-context-item-type="video" data-context-item-user="' +
          o.longBylineText.runs[0].text +
          '" data-context-item-views="' +
          p +
          '" data-context-item-title="' +
          o.title.runs[0].text +
          '" data-context-item-time="' +
          u +
          '" data-context-item-id="' +
          o.videoId +
          '">\n    <div class="yt-lockup-thumbnail">\n        <a href="/watch?v=' +
          o.videoId +
          '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto " data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-185">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" data-thumb="" src="' +
          o.thumbnail.thumbnails[parseInt(o.thumbnail.thumbnails.length - 1)]
            .url +
          '" width="185" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
          u +
          '</span>\n\n  <button class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" title="Watch Later" onclick=";return false;" data-video-ids="' +
          o.videoId +
          '" data-button-menu-id="shared-addto-watch-later-login" role="button" data-tooltip-text="Watch Later"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n\n    </div>\n    <div class="yt-lockup-content">\n            <h3 class="yt-lockup-title">\n    <a class="yt-uix-sessionlink yt-uix-tile-link yt-uix-contextlink yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr" title="' +
          o.title.runs[0].text +
          '" data-sessionlink="" href="/watch?v=' +
          o.videoId +
          '"><span class="yt-ui-ellipsis-wrapper" data-original-html="' +
          o.title.runs[0].text +
          '">' +
          o.title.runs[0].text +
          '\n    </span></a>\n  </h3>\n\n\n\n  <div class="yt-lockup-meta">\n    <ul class="yt-lockup-meta-info">\n<li>by <a href="/channel/' +
          o.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId +
          '?v3cv=1&app=true" class="g-hovercard yt-uix-sessionlink yt-user-name ">' +
          o.longBylineText.runs[0].text +
          "</a>" +
          c +
          "</li><li>" +
          p +
          '</li>    </ul>\n  </div>\n\n\n      <div class="yt-lockup-description yt-ui-ellipsis yt-ui-ellipsis-2 yt-ui-ellipsis-ellipsized" dir="ltr"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
          r +
          "</span></div>\n\n\n  \n\n  \n\n\n    </div>\n    \n  </div>\n\n\n\n  \n\n          </div>\n        </div>\n      </div>\n  </li>";
      }

      document.querySelector(".feed-page .feed-list").innerHTML += l;
    }

    var m =
      window.performance.timing.domContentLoadedEventEnd -
      window.performance.timing.navigationStart;
    console.log("Page have loaded in " + m + "ms.");
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
    (document.title = "History - YouTube TUDO2"),
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
      document.head.appendChild(n),
      v3HistoryFriend();
  }

  function isRemoveAllHistory(n) {
    try {
      return "Clear all watch history" == n.buttonRenderer.text.runs[0].text;
    } catch (n) {
      return !1;
    }
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
  var removeallid = "";

  function v3HistoryFriend() {
    var n = "";
    $(document).on("change", ".feed-item-checkbox", function (e) {
      var t =
          e.currentTarget.parentElement.parentElement.parentElement
            .parentElement.parentElement.parentElement,
        a = t.getAttribute("feedback-ajax-id");
      e.currentTarget.checked
        ? (t.className.includes("v3-selected") ||
            t.classList.add("v3-selected"),
          (n += "" == n ? '"' + a + '"' : ',"' + a + '"'))
        : (t.className.includes("v3-selected") &&
            t.classList.remove("v3-selected"),
          n.search(',"' + a + '"') > -1
            ? (n = n.replace(',"' + a + '"', ""))
            : n.search('"' + a + '",') > -1
            ? (n = n.replace('"' + a + '",', ""))
            : n.search('"' + a + '"') > -1 &&
              (n = n.replace('"' + a + '"', ""))),
        document.querySelector(".v3-selected") &&
          document
            .querySelector(".v3-remove-historys")
            .className.includes("hid") &&
          document.querySelector(".v3-remove-historys").classList.remove("hid"),
        document.querySelector(".v3-selected") ||
          document.querySelector(".v3-remove-historys.hid") ||
          document.querySelector(".v3-remove-historys").classList.add("hid");
    }),
      (document.querySelector(".v3-remove-historys").onclick = function () {
        v3RemoveVideos(n, 0);
      }),
      (document.querySelector(".watch-history-clear-button").onclick =
        function () {
          v3RemoveVideos('"' + removeallid + '"', 1);
        });
  }

  async function v3RemoveVideos(n, e) {
    await removeHistoryEntries(n).then((n) => {
      0 == e
        ? 1 == n.feedbackResponses[0].isProcessed &&
          (document.querySelectorAll(".v3-selected").forEach((n) => n.remove()),
          document.querySelector(".v3-selected") ||
            document.querySelector(".v3-remove-historys.hid") ||
            document.querySelector(".v3-remove-historys").classList.add("hid"))
        : 1 == e &&
          ((document.querySelector(
            ".feed-list.context-data-container"
          ).innerHTML = ""),
          document.querySelector(".yt-dialog").classList.add("hid"));
    });
  }
}

async function removeHistoryEntries(n) {
  var e = await getSapisidhash();
  return (
    await fetch(
      "https://www.youtube.com/youtubei/v1/feedback?key=" +
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
          '",\r\n\t\t\t"hl": "en"\r\n\t\t}\r\n\t},\r\n\t"feedbackTokens":[' +
          n +
          '],"isFeedbackTokenUnencrypted":false,"shouldMerge":false}\r\n',
        method: "POST",
        mode: "cors"
      }
    )
  ).json();
}
