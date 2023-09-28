if (
  window.location.href
    .toLocaleLowerCase()
    .includes("/reporthistory?v3feed=trending") &&
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

  softChangeUrl("feed/trending", !0),
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
      .setAttribute("class", v3.htmlBuilderConfig.feed.trending),
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
        " DEBUG : detected v3 feed trending test page"
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
        '<div id="page-container"><div id="page" class="feed history clearfix"><div id="guide">        <div id="guide-container" class=" vve-check" data-sessionlink="">\n      <div id="guide-main" class="    guide-module     spf-nolink ">\n        <div class="guide-module-toggle">\n          <span class="guide-module-toggle-icon">\n            <span class="guide-module-toggle-arrow"></span>\n            <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\n            <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" id="collapsed-notification-icon">\n          </span>\n          <div class="guide-module-toggle-label">\n            <h3>\n              <span>\nGuide\n              </span>\n            </h3>\n          </div>\n        </div>\n          <div class="guide-module-content yt-scrollbar">\n    \n        \n\n  </div>\n\n      </div>\n        <div id="watch-context-container" class="guide-module collapsed hid"></div>\n\n    </div>\n\n</div>\n<div id="content">  \n\n\n\n\n  <div class="branded-page-v2-container ">\n    <div class="branded-page-v2-col-container clearfix">\n        \n      <div class="branded-page-v2-primary-col">\n            <div class="branded-page-v2-primary-col-header-container">\n            <div class="feed-header collection clearfix">\n    <div class="feed-channel-header">\n        <div class="feed-channel-header-secondary">\n          <ul>\n              \n              </li>\n              <li class="collection-channel-icon">\n                <a href="/feed/trending">\n                      <span class="video-thumb  yt-thumb yt-thumb-32">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img title="Trending" alt="Trending" src="https://www.youtube.com/img/trending/avatar/trending_avatar.png" width="32">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n\n                </a>\n              </li>\n          </ul>\n        </div>\n      <div class="feed-channel-header-details">\n        <h2 class="feed-channel-header-title">\n          Trending\n        </h2>\n      </div>\n    </div>\n    <div class="feed-header-feed-filter">\n        <ul id="channel-navigation-menu" class="clearfix">\n      <li>\n      <h2 class="epic-nav-item-heading">\n        All categories\n\n      </h2>\n  </li>\n\n      \n\n  </ul>\n\n    </div>\n  </div>\n\n\n  <div id="context-source-container" data-context-source="Trending" style="display:none;"></div>\n\n    </div>\n  <div class="branded-page-v2-body" id="gh-activityfeed">\n      <div id="feed" class="spf-nolink">\n      <div class="individual-feed" data-feed-name="" data-feed-type="collection" data-filter-type="">\n\n\n    \n      <div class="feed-container" data-filter-type="" data-paging="1377215189">\n    <div class="feed-page">\n          <p class="yt-spinner">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n    </div>\n\n        \n\n  </div>\n\n  </div>\n\n  <div id="feed-error" class="individual-feed hid">\n    <p class="feed-message">\nWe were unable to complete the request, please try again later.\n    </p>\n  </div>\n\n  <div id="feed-loading-template" class="hid">\n    <div class="feed-message">\n        <p class="yt-spinner">\n      <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n    </div>\n  </div>\n\n  </div>\n\n  </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n</div></div></div>'
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
        : waitForElm("#social-guide-item .guide-item").then(function (n) {
            document
              .querySelector("#social-guide-item .guide-item")
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

  function buildTrendingFeed(n) {
    (n =
      n.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
        .sectionListRenderer.contents[0].itemSectionRenderer.contents[0]
        .shelfRenderer.content.expandedShelfContentsRenderer.items),
      console.log(n);
    var e = document.createElement("ul");
    e.setAttribute("class", "feed-list context-data-container");
    var t = "";

    for (x = 0, y = n.length; x < y; x++) {
      var a = n[x].videoRenderer,
        i = "";

      try {
        i = a.descriptionSnippet.runs[0].text;
      } catch (n) {}

      t +=
        '<li class="feed-list-item feed-item-container yt-card" data-channel-key="' +
        a.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId +
        '">\n    <div class="feed-item-dismissable  ">\n                \n\n\n        <div class="feed-item-main">\n          \n          <div class="feed-item-main-content">\n                    \n\n\n    <div class="yt-lockup clearfix  yt-lockup-video yt-lockup-tile context-data-item" data-context-item-type="video" data-context-item-user="' +
        a.longBylineText.runs[0].text +
        '" data-context-item-views="' +
        a.viewCountText.simpleText +
        '" data-context-item-title="' +
        a.title.runs[0].text +
        '" data-context-item-time="' +
        a.lengthText.simpleText +
        '" data-context-item-id="' +
        a.videoId +
        '">\n    <div class="yt-lockup-thumbnail">\n        <a href="/watch?v=' +
        a.videoId +
        '&v3cv=1&app=true" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto " data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-185">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" data-thumb="" src="' +
        a.thumbnail.thumbnails[parseInt(a.thumbnail.thumbnails.length - 1)]
          .url +
        '" width="185" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
        a.lengthText.simpleText +
        '</span>\n\n  <button class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" title="Watch Later" onclick=";return false;" data-video-ids="' +
        a.videoId +
        '" data-button-menu-id="shared-addto-watch-later-login" role="button" data-tooltip-text="Watch Later"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n\n    </div>\n    <div class="yt-lockup-content">\n            <h3 class="yt-lockup-title">\n    <a class="yt-uix-sessionlink yt-uix-tile-link yt-uix-contextlink yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr" title="' +
        a.title.runs[0].text +
        '" data-sessionlink="" href="/watch?v=' +
        a.videoId +
        '&v3cv=1&app=true"><span class="yt-ui-ellipsis-wrapper" data-original-html="' +
        a.title.runs[0].text +
        '">' +
        a.title.runs[0].text +
        '\n    </span></a>\n  </h3>\n\n\n\n  <div class="yt-lockup-meta">\n    <ul class="yt-lockup-meta-info">\n<li>by <a href="/channel/' +
        a.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId +
        '?v3cv=1&app=true" class="g-hovercard yt-uix-sessionlink yt-user-name ">' +
        a.longBylineText.runs[0].text +
        "</a></li><li>" +
        a.publishedTimeText.simpleText +
        "</li><li>" +
        a.viewCountText.simpleText +
        '</li>    </ul>\n  </div>\n\n\n      <div class="yt-lockup-description yt-ui-ellipsis yt-ui-ellipsis-2 yt-ui-ellipsis-ellipsized" dir="ltr"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
        i +
        "</span></div>\n\n\n  \n\n  \n\n\n    </div>\n    \n  </div>\n\n\n\n  \n\n          </div>\n        </div>\n      </div>\n  </li>";
    }

    (e.innerHTML += t),
      (document.querySelector(".feed-page").innerHTML = ""),
      document.querySelector(".feed-page").append(e);
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
    (document.title = "Trending - YouTube TUDO2"),
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
