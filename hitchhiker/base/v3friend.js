if (!window.location.href.includes("studio.youtube.com")) if (((window.location.href.includes('/channel/') && !window.location.href.includes('v3cv=0')) || (window.location.href.includes('/user/') && !window.location.href.includes('v3cv=0')) || (window.location.href.includes('/c/') && !window.location.href.includes('v3cv=0'))) && !window.location.href.includes('/videos') && !window.location.href.includes('/playlists')) window.location = window.location.href + '/videos';
var v3 = {};

function ln() {
  var e = new Error();
  if (!e.stack)
    try {
      throw e;
    } catch (e) {
      if (!e.stack) return 0;
    }
  var t = e.stack.toString().split(/\r\n|\n/),
    n = /:(\d+):(?:\d+)[^\d]*$/;

  do {
    var s = t.shift();
  } while (!n.exec(s) && t.length);

  return n.exec(t.shift())[1];
}

function waitForElmHtml(e) {
  return new Promise((t) => {
    if (document.querySelector(e)) return t(document.querySelector(e));
    const n = new MutationObserver((s) => {
      document.querySelector(e) &&
        (t(document.querySelector(e)), n.disconnect());
    });
    n.observe(document, {
      childList: !0,
      subtree: !0
    });
  });
}

function addStyle(e) {
  const t = document.createElement("style");
  (t.textContent = e), document.querySelector("html").append(t);
}

function getCookie(e) {
  try {
    return document.cookie.split(e)[1].split(";")[0].replace("=", "");
  } catch (e) {
    return;
  }
}

function goRtl() {
  (document.querySelector(".www-core").href =
    "//s.ytimg.com/yts/cssbin/www-core-rtl-vflZr75NV.css"),
    (document.querySelector("#css-688526446").href =
      "//s.ytimg.com/yts/cssbin/www-guide-rtl-vfle2L3QE.css"),
    (document.querySelector("body").dir = "rtl");
}

(v3.nationIndex = document.querySelector("html").getAttribute("lang")),
  (v3.loggerDialog = ""),
  (v3.loggerTitle = "log");
var isgecko = "onbeforescriptexecute" in document,
  usev3fullscreen = !1,
  forcesentimentbar = !0;

try {
  var useverbose = getCookie("vtcf").includes("c=1"),
    isusingautoplay = getCookie("vtcf").includes("a=1"),
    isusingloopvideo = getCookie("vtcf").includes("b=1"),
    cinemastate = getCookie("vtcf").includes("g=1");
} catch (e) {
  (isusingautoplay = !1),
    (isusingloopvideo = !1),
    (useverbose = !1),
    (cinemastate = !1);
}

if (
  (document
    .querySelector("html")
    .setAttribute(
      "id",
      chrome.extension.getURL("").split("://")[1].split("/")[0]
    ),
  !window.location.href.includes("studio.youtube.com"))
) {
  var before_loadtime = new Date().getTime();
  window.location.href.includes("video?v") &&
    (window.location =
      "https://www.youtube.com/watch?v=" +
      window.location.href.split("v=")[1].split("&")[0]),
    window.location.href.includes("?gotoplaylist") &&
      (window.location =
        "https://www.youtube.com/channel/" +
        window.location.href.split("/")[4].split("?")[0] +
        "/playlists?v3cv=1&app=true"),
    window.location.href.includes("/results?") &&
      !window.location.href.includes("v3cv") &&
      (window.location =
        "https://www.youtube.com/results/search" +
        window.location.href.split("/results")[1] +
        "&v3cv=1&app=true"),
    ((window.location.href.includes("/feed/history") &&
      !window.location.href.includes("v3cv")) ||
      "https://www.youtube.com/feed?v3feed=hIsToRy" == window.location.href) &&
      (window.location =
        "https://www.youtube.com/reporthistory?v3feed=hIsToRy&v3cv=1&app=true"),
    "/" != window.location.pathname ||
      window.location.href.includes("v3cv") ||
      (window.location =
        "https://www.youtube.com/reporthistory?v3feed=wHaT_2_wAtCh&v3cv=1&app=true"),
    ((window.location.href.includes("/feed/trending") &&
      !window.location.href.includes("v3cv")) ||
      "https://www.youtube.com/feed?v3feed=tReNdInG" == window.location.href) &&
      (window.location =
        "https://www.youtube.com/reporthistory?v3feed=tReNdInG&v3cv=1&app=true"),
    ((window.location.href.includes("/feed/subscriptions") &&
      !window.location.href.includes("v3cv")) ||
      "https://www.youtube.com/feed?v3feed=sUbScRiPtIoN" ==
        window.location.href ||
      "https://www.youtube.com/feed?v3feed=sUbScRiPtIoN&view=0" ==
        window.location.href) &&
      (window.location =
        "https://www.youtube.com/reporthistory?v3feed=sUbScRiPtIoN&view=0&v3cv=1&app=true"),
    ((window.location.href.includes("/feed/channels") &&
      !window.location.href.includes("v3cv")) ||
      "https://www.youtube.com/feed?v3feed=sUbScRiPtIoN&view=1" ==
        window.location.href) &&
      (window.location =
        "https://www.youtube.com/reporthistory?v3feed=sUbScRiPtIoN&view=1&v3cv=1&app=true"),
    ((window.location.href.includes("/feed/guide_builder") &&
      !window.location.href.includes("v3cv")) ||
      "https://www.youtube.com/feed?v3feed=gUiDeBuIlDeR" ==
        window.location.href) &&
      (window.location =
        "https://www.youtube.com/reporthistory?v3feed=gUiDeBuIlDeR&v3cv=1&app=true");
}

"/404" == window.location.pathname &&
  waitForElmHtml("body").then(function (e) {
    (document.querySelector("head").innerHTML +=
      '<link id="css-core" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflWmP98v.css" data-loaded="true"><link id="dynamic-favicon" rel="shortcut icon" href="' +
      chrome.extension.getURL("/images/favicon2.png") +
      '">'),
      (document.querySelector("body").innerHTML =
        '<style type="text/css">\nbody {\n  margin-top:0 !important;\n  padding-top:0 !important;\n  /*min-width:800px !important;*/\n}\n</style>' +
        create404("This page isn't available. Sorry about that."));
  });
var playerscr = document.createElement("script");
(playerscr.src = chrome.extension.getURL("hitchhiker/base/v3player_loader.js")),
  (playerscr.onload = function () {
    document.querySelector("html").setAttribute("v3player", "true"),
      console.log("player loaded1"),
      playerscr.remove();
  }),
  document.querySelector("html").appendChild(playerscr);
var apiscr = document.createElement("script");
(apiscr.src = chrome.extension.getURL("api/servant.js")),
  document.querySelector("html").appendChild(apiscr);
var accountname,
  accountemail,
  authorvideocountresponse,
  apiscr2 = document.createElement("script");
((apiscr2.src = chrome.extension.getURL("api/endpoint_search.js")),
document.querySelector("html").appendChild(apiscr2),
("/watch" != window.location.pathname &&
  "/watch/video" != window.location.pathname) ||
  window.location.href.includes("v3cv=0")) ||
  (document.querySelector("html").setAttribute("w7", ""),
  ((guidescr = document.createElement("script")).src = chrome.extension.getURL(
    "hitchhiker/base/guide_service.js"
  )),
  (guidescr.onload = function () {
    guidescr.remove();
    var e = document.createElement("script");
    (e.src = chrome.extension.getURL("hitchhiker/config/HTML_BUILDER.js")),
      (e.onload = function () {
        e.remove();
      }),
      document.querySelector("html").appendChild(e);
  }),
  setTimeout(function () {
    document.querySelector("html").appendChild(guidescr);
  }, 5),
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
      waitForElmHtml("meta[itemprop=channelId]").then((e) =>
        v3.innerTube
          .getChannelVideoCount(e.getAttribute("content"))
          .then((e) =>
            waitForElmHtml(".yt-user-videos").then((t) => (t.innerHTML = e))
          )
      ))
    : waitForElmHtml("span[itemprop=author]").then(async function (e) {
        await getAuthorVideoCount();
      }),
  getAccountInfo(),
  addStyle(
    "ytd-app, ytd-watch-flexy, #player-container-inner.ytd-watch-flexy:not([v3loaded]) {display:none!important;}"
  ),
  document.querySelector("html").setAttribute("v3cv2o13", ""),
  document.querySelector("html").removeAttribute("style"),
  document.querySelector("html").removeAttribute("system-icons"),
  document.querySelector("html").removeAttribute("typography"),
  document.querySelector("html").removeAttribute("typography-spacing"),
  isgecko ||
    (waitForElmHtml("script#base-js").then(function (e) {
      e.remove();
    }),
    waitForElmHtml('script[src*="js/th"]').then(function (e) {
      e.remove();
    }),
    waitForElmHtml('script[src*="s/player"]').then(function (e) {
      e.remove();
    }),
    waitForElmHtml('script[src*="cast_sender"]').then(function (e) {
      e.remove();
    })),
  waitForElmHtml("body[data-loaded]").then(function (e) {
    v3WatchPage();
  }),
  waitForElmHtml("#player.skeleton.flexy").then(function (e) {
    e.remove(), document.querySelector("body").setAttribute("ytdataloaded", "");
    var t = document.createElement("head");
    t.setAttribute("v3head", ""),
      document.querySelector("html").prepend(t),
      document.querySelector("html head:not([v3head])").remove();
    var n = document.createElement("link");
    n.setAttribute("id", "csscore-temp-container"),
      document.querySelector("head").append(n),
      v3.htmlBuilderConfig.core.NIRVANA
        ? (document.querySelector("#csscore-temp-container").outerHTML =
            '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflRpDX3b.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-home-c4-vflqZnGt6.css" data-loaded="true">')
        : (document.querySelector("#csscore-temp-container").outerHTML =
            '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflXh4Zic.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-guide-vflshDMkV.css" data-loaded="true">'),
      window.location.href.includes("&rtl=1") && goRtl();
    var s = document.createElement("link");
    s.setAttribute("id", "playercsscore-temp-container"),
      document.querySelector("head").append(s),
      (document.querySelector("#playercsscore-temp-container").outerHTML =
        '<link id="css-player" class="www-core" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-player-vfluwFMix.css" data-loaded="true">'),
      setTimeout(function () {
        document.querySelector("body").setAttribute("ythtmlloaded", "");
      }, 1);
  }),
  waitForElmHtml("ytd-app").then(function (e) {
    document.querySelector("ytd-app").remove();
  }),
  waitForElmHtml("head").then(function (e) {
    v3InjectCoreCss();
  }),
  isgecko
    ? document.addEventListener("beforescriptexecute", function (e) {
        let t = e.target;
        (t.src.search("base.js") > -1 ||
          t.src.search("desktop_polymer.js") > -1 ||
          t.src.search("network.vflset") > -1 ||
          t.src.search("spf") > -1) &&
          (e.preventDefault(), console.log(t.src + "REMOVED"), t.remove());
      })
    : (waitForElmHtml('script[src*="network.vflset"]').then(function (e) {
        e.remove();
      }),
      waitForElmHtml("script[src*=spf]").then(function (e) {
        e.remove();
      })));

function isCurrentChannel(e) {
  try {
    if (1 == e.accountItem.isSelected) return !0;
  } catch (e) {
    return !1;
  }
}

async function fetchAccountInfo(e = {}) {
  var t = await fetch(
    "https://www.youtube.com/getAccountSwitcherEndpoint"
  ).catch(function () {
    v3.loggerDialog +=
      "cound not get account info (at line " +
      ln() +
      " in v3friend.js) [is user log out?]\n";
  });

  try {
    return t.text();
  } catch (e) {
    v3.loggerDialog +=
      "cound not get account info (at line " +
      ln() +
      " in v3friend.js) [is user log out?]\n";
  }
}

async function getAccountInfo() {
  var e = await fetchAccountInfo().then((t) => {
    try {
      e = t.slice(4);
    } catch (e) {
      return;
    }

    (e = JSON.parse(e)),
      (accountname =
        e.data.actions[0].getMultiPageMenuAction.menu.multiPageMenuRenderer.sections[0].accountSectionListRenderer.contents[0].accountItemSectionRenderer.contents.find(
          isCurrentChannel
        ).accountItem.accountName.simpleText),
      (accountemail =
        e.data.actions[0].getMultiPageMenuAction.menu.multiPageMenuRenderer
          .sections[0].accountSectionListRenderer.header
          .googleAccountHeaderRenderer.email.simpleText),
      waitForElmHtml("#yt-masthead-user-displayname").then(function (e) {
        (document.querySelector("#yt-masthead-user-displayname").innerHTML =
          accountname),
          buildMastSetting();
      }),
      waitForElmHtml(".guide-item .display-name.no-count > span").then(
        function (e) {
          document.querySelector(
            ".guide-item .display-name.no-count > span"
          ).innerHTML = "<b>" + accountname + "</b>";
        }
      );
  });
}

async function getAuthorVideoCount() {
  try {
    if (
      document
        .querySelector("span[itemprop=author] > link[itemprop=url]")
        .href.includes("/user/")
    )
      var e =
        '"user=' +
        document
          .querySelector("span[itemprop=author] > link[itemprop=url]")
          .href.split("/user/")[1] +
        '"';
    else e = document.querySelector("meta[itemprop=channelId]").content;
  } catch (e) {
    console.log(e);
  }

  var t,
    n = e,
    s = document
      .querySelector("meta[itemprop=channelId]")
      .content.replace("UC", "UU");

  function r(e) {
    try {
      if (
        e.channelRenderer &&
        e.channelRenderer.title.simpleText ==
          document
            .querySelector("span[itemprop=author] > link[itemprop=name]")
            .getAttribute("content")
      )
        return !0;
    } catch (e) {
      return !1;
    }
  }

  function o(e) {
    try {
      if (e.itemSectionRenderer.contents.find(r).channelRenderer) return !0;
    } catch (e) {
      return !1;
    }
  }

  !(async function () {
    var e = await (async function (e = {}) {
      return (
        await fetch(
          "https://www.youtube.com/results?search_query=" +
            n +
            "&sp=EgIQAg%253D%253D&hl=en&persist_hl=1",
          {
            credentials: "omit"
          }
        )
      ).text();
    })().then((n) => {
      !0, (e = n);
      var s = JSON.parse(
        e
          .substr(parseInt(e.search("var ytInitialData = ") + 20))
          .substr(
            0,
            parseInt(
              e
                .substr(parseInt(e.search("var ytInitialData = ") + 20))
                .search("</script>") - 1
            )
          )
      );

      try {
        if (
          2 ==
          s.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents
            .find(o)
            .itemSectionRenderer.contents.find(r).channelRenderer.videoCountText
            .runs.length
        )
          var i =
            s.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents
              .find(o)
              .itemSectionRenderer.contents.find(r).channelRenderer
              .videoCountText.runs[0].text +
            s.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents
              .find(o)
              .itemSectionRenderer.contents.find(r).channelRenderer
              .videoCountText.runs[1].text;
        else
          i =
            s.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents
              .find(o)
              .itemSectionRenderer.contents.find(r).channelRenderer
              .videoCountText.runs[0].text;
        authorvideocountresponse = i;

        try {
          document.querySelector(".yt-user-videos").innerHTML = i;
        } catch (e) {}
      } catch (e) {
        if ((useverbose && console.log(e), t))
          try {
            document.querySelector(".yt-user-videos").innerHTML = t;
          } catch (e) {}
        else
          waitForElmHtml(".yt-user-videos").then(function (e) {
            t || (t = "0 videos"),
              (document.querySelector(".yt-user-videos").innerHTML = t);
          });
      }
    });
  })(),
    (async function () {
      var e = await (async function (e = {}) {
        return (
          await fetch(
            "https://www.youtube.com/playlist?list=" +
              s +
              "&hl=en&persist_hl=1",
            {
              credentials: "omit"
            }
          )
        ).text();
      })().then((n) => {
        !0,
          document
            .querySelector("body")
            .classList.add("exp-using-fallback-innertube-playlist"),
          (e = JSON.parse(
            n
              .substr(parseInt(n.search("var ytInitialData = ") + 20))
              .substr(
                0,
                parseInt(
                  n
                    .substr(parseInt(n.search("var ytInitialData = ") + 20))
                    .search("</script>") - 1
                )
              )
          ));

        try {
          var s =
            e.sidebar.playlistSidebarRenderer.items[0]
              .playlistSidebarPrimaryInfoRenderer.stats[0].runs[0].text;
          e.sidebar.playlistSidebarRenderer.items[0]
            .playlistSidebarPrimaryInfoRenderer.stats[0].runs[1] &&
            (s +=
              e.sidebar.playlistSidebarRenderer.items[0]
                .playlistSidebarPrimaryInfoRenderer.stats[0].runs[1].text),
            useverbose && console.log(s),
            (t = s) || (t = "0 videos");
        } catch (e) {
          useverbose && console.log(e);
        }
      });
    })();
}

!window.location.href.includes("studio.youtube.com") &&
  ((window.location.href.includes("/channel/") &&
    !window.location.href.includes("v3cv=0")) ||
    (window.location.href.includes("/user/") &&
      !window.location.href.includes("v3cv=0")) ||
    (window.location.href.includes("/c/") &&
      !window.location.href.includes("v3cv=0"))) &&
  (document.querySelector("html").setAttribute("c3", ""),
  getAccountInfo(),
  ((guidescr = document.createElement("script")).src = chrome.extension.getURL(
    "hitchhiker/base/guide_service.js"
  )),
  (guidescr.onload = function () {
    guidescr.remove();
    var e = document.createElement("script");
    (e.src = chrome.extension.getURL("hitchhiker/config/HTML_BUILDER.js")),
      (e.onload = function () {
        e.remove();
      }),
      document.querySelector("html").appendChild(e);
  }),
  document.querySelector("html").appendChild(guidescr),
  addStyle(
    "ytd-app, ytd-watch-flexy, #player-container-inner.ytd-watch-flexy:not([v3loaded]) {display:none!important;}"
  ),
  document.querySelector("html").setAttribute("v3cv2o13", ""),
  document.querySelector("html").removeAttribute("style"),
  document.querySelector("html").removeAttribute("system-icons"),
  document.querySelector("html").removeAttribute("typography"),
  document.querySelector("html").removeAttribute("typography-spacing"),
  waitForElmHtml("ytd-app").then(function (e) {
    document.querySelector("ytd-app").remove(),
      document.querySelector("body").setAttribute("ytdataloaded", "");
    var t = document.createElement("head");
    t.setAttribute("v3head", ""),
      document.querySelector("html").prepend(t),
      document.querySelector("html head:not([v3head])").remove();
    var n = document.createElement("link");
    n.setAttribute("id", "csscore-temp-container"),
      document.querySelector("head").append(n),
      v3.htmlBuilderConfig.core.NIRVANA
        ? (document.querySelector("#csscore-temp-container").outerHTML =
            '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflRpDX3b.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-home-c4-vflqZnGt6.css" data-loaded="true"><link id="css-2101524411" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-channels3-vfl78ooQP.css">')
        : (document.querySelector("#csscore-temp-container").outerHTML =
            '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflXh4Zic.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-guide-vflshDMkV.css" data-loaded="true"><link id="css-2101524411" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-channels3-vfl78ooQP.css">');
    var s = document.createElement("link");
    s.setAttribute("id", "playercsscore-temp-container"),
      document.querySelector("head").append(s),
      (document.querySelector("#playercsscore-temp-container").outerHTML =
        '<link id="css-player" class="www-core" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-player-vfluwFMix.css" data-loaded="true">'),
      setTimeout(function () {
        document.querySelector("body").setAttribute("ythtmlloaded", "");
      }, 1);
  }),
  waitForElmHtml("body").then(function (e) {
    v3InjectCoreCss(),
      $("body").append(
        '<script>yt.config_.DISABLE_WARM_LOADS = true; yt.config_.DISABLE_YT_IMG_DELAY_LOADING = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.externalFullscreen = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerButton = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerUiWhenMinimized = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.useFastSizingOnWatchDefault = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.enableCsiLogging = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.playerStyle = "desktop"; yt.config_.EXPERIMENT_FLAGS.kevlar_watch_snap_sizing = true;</script>'
      );
  }),
  waitForElmHtml("head").then(function (e) {
    var t = document.createElement("script");
    (t.src = chrome.extension.getURL("hitchhiker/base/v3player_loader.js")),
      (t.onload = function () {
        console.log("player loaded1"), t.remove();
      }),
      document.head.appendChild(t);
  }),
  isgecko
    ? document.addEventListener("beforescriptexecute", function (e) {
        let t = e.target;
        (t.src.search("base.js") > -1 ||
          t.src.search("desktop_polymer.js") > -1 ||
          t.src.search("network.vflset") > -1 ||
          t.src.search("spf") > -1) &&
          (e.preventDefault(), console.log(t.src + "REMOVED"), t.remove());
      })
    : (waitForElmHtml('script[src*="network.vflset"]').then(function (e) {
        document.querySelector('script[src*="network.vflset"]').remove();
      }),
      waitForElmHtml("script#base-js").then(function (e) {
        document.querySelector("script#base-js").remove();
      }),
      waitForElmHtml("script[src*=spf]").then(function (e) {
        document.querySelector("script[src*=spf]").remove();
      })));

if (
  window.location.href
    .toLocaleLowerCase()
    .includes("/reporthistory?v3feed=trending") &&
  !window.location.href.includes("v3cv=0")
) {
  async function getTrending(e = {}) {
    return (await fetch("https://www.youtube.com/feed/trending")).text();
  }

  async function v3GrabTrending() {
    await getTrending().then((e) => {
      buildTrending2Feed(
        JSON.parse(
          e
            .substr(parseInt(e.search("var ytInitialData = ") + 20))
            .substr(
              0,
              parseInt(
                e
                  .substr(parseInt(e.search("var ytInitialData = ") + 20))
                  .search("</script>") - 1
              )
            )
        )
      );
    });
  }

  function buildTrending2Feed(e) {
    e =
      e.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
        .sectionListRenderer.contents[0].itemSectionRenderer.contents[0]
        .shelfRenderer.content.expandedShelfContentsRenderer.items;
    var t = document.createElement("ul");
    t.setAttribute("class", "feed-list context-data-container");
    var n = "";

    for (x = 0, y = e.length; x < y; x++) {
      var s = e[x].videoRenderer,
        r = "";
      e[x].videoRenderer.ownerBadges &&
        (r =
          '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name" data-tooltip-text="Verified name">\n  </span>');
      var o = "";

      try {
        o = s.descriptionSnippet.runs[0].text;
      } catch (e) {}

      n +=
        '<li class="feed-list-item feed-item-container yt-card" data-channel-key="' +
        s.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId +
        '">\n    <div class="feed-item-dismissable  ">\n                \n\n\n        <div class="feed-item-main">\n          \n          <div class="feed-item-main-content">\n                    \n\n\n    <div class="yt-lockup clearfix  yt-lockup-video yt-lockup-tile context-data-item" data-context-item-type="video" data-context-item-user="' +
        s.longBylineText.runs[0].text +
        '" data-context-item-views="' +
        s.viewCountText.simpleText +
        '" data-context-item-title="' +
        s.title.runs[0].text +
        '" data-context-item-time="' +
        s.lengthText.simpleText +
        '" data-context-item-id="' +
        s.videoId +
        '">\n    <div class="yt-lockup-thumbnail">\n        <a href="/watch?v=' +
        s.videoId +
        '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto " data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-185">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" data-thumb="" src="' +
        s.thumbnail.thumbnails[parseInt(s.thumbnail.thumbnails.length - 1)]
          .url +
        '" width="185" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
        s.lengthText.simpleText +
        '</span>\n\n  <button class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" title="Watch Later" onclick=";return false;" data-video-ids="' +
        s.videoId +
        '" data-button-menu-id="shared-addto-watch-later-login" role="button" data-tooltip-text="Watch Later"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n\n    </div>\n    <div class="yt-lockup-content">\n            <h3 class="yt-lockup-title">\n    <a class="yt-uix-sessionlink yt-uix-tile-link yt-uix-contextlink yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr" title="' +
        s.title.runs[0].text +
        '" data-sessionlink="" href="/watch?v=' +
        s.videoId +
        '"><span class="yt-ui-ellipsis-wrapper" data-original-html="' +
        s.title.runs[0].text +
        '">' +
        s.title.runs[0].text +
        '\n    </span></a>\n  </h3>\n\n\n\n  <div class="yt-lockup-meta">\n    <ul class="yt-lockup-meta-info">\n<li>by <a href="/channel/' +
        s.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId +
        '" class="g-hovercard yt-uix-sessionlink yt-user-name ">' +
        s.longBylineText.runs[0].text +
        "</a>" +
        r +
        "</li><li>" +
        s.publishedTimeText.simpleText +
        "</li><li>" +
        s.viewCountText.simpleText +
        '</li>    </ul>\n  </div>\n\n\n      <div class="yt-lockup-description yt-ui-ellipsis yt-ui-ellipsis-2 yt-ui-ellipsis-ellipsized" dir="ltr"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
        o +
        "</span></div>\n\n\n  \n\n  \n\n\n    </div>\n    \n  </div>\n\n\n\n  \n\n          </div>\n        </div>\n      </div>\n  </li>";
    }

    (t.innerHTML += n),
      waitForElmHtml("#page").then(function (e) {
        (document.querySelector(".feed-page").innerHTML = ""),
          document.querySelector(".feed-page").append(t);
      });
  }

  document.querySelector("html").setAttribute("feed", ""),
    ((guidescr = document.createElement("script")).src =
      chrome.extension.getURL("hitchhiker/base/guide_service.js")),
    (guidescr.onload = function () {
      guidescr.remove();
      var e = document.createElement("script");
      (e.src = chrome.extension.getURL("hitchhiker/config/HTML_BUILDER.js")),
        (e.onload = function () {
          e.remove();
        }),
        document.querySelector("html").appendChild(e);
    }),
    document.querySelector("html").appendChild(guidescr),
    getAccountInfo(),
    v3GrabTrending(),
    addStyle("ytd-app{display:none!important;}"),
    document.querySelector("html").setAttribute("v3cv2o13", ""),
    document.querySelector("html").removeAttribute("style"),
    document.querySelector("html").removeAttribute("system-icons"),
    document.querySelector("html").removeAttribute("typography"),
    document.querySelector("html").removeAttribute("typography-spacing"),
    waitForElmHtml("ytd-app").then(function (e) {
      document.querySelector("ytd-app").remove(),
        document.querySelector("body").setAttribute("ytdataloaded", "");
      var t = document.createElement("head");
      t.setAttribute("v3head", ""),
        document.querySelector("html").prepend(t),
        document.querySelector("html head:not([v3head])").remove();
      var n = document.createElement("link");
      n.setAttribute("id", "csscore-temp-container"),
        document.querySelector("head").append(n),
        v3.htmlBuilderConfig.core.NIRVANA
          ? (document.querySelector("#csscore-temp-container").outerHTML =
              '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflRpDX3b.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-home-c4-vflqZnGt6.css" data-loaded="true"><link id="css-3229727439" class="www-home-c4" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-home-c4-vflbEBwrR.css" data-loaded="true">')
          : (document.querySelector("#csscore-temp-container").outerHTML =
              '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflXh4Zic.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-guide-vflshDMkV.css" data-loaded="true"><link id="css-3229727439" class="www-home-c4" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-home-c4-vflbEBwrR.css" data-loaded="true">');
      var s = document.createElement("link");
      s.setAttribute("id", "playercsscore-temp-container"),
        document.querySelector("head").append(s),
        (document.querySelector("#playercsscore-temp-container").outerHTML =
          '<link id="css-player" class="www-core" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-player-vfluwFMix.css" data-loaded="true">'),
        setTimeout(function () {
          document.querySelector("body").setAttribute("ythtmlloaded", "");
        }, 1);
    }),
    waitForElmHtml("body").then(function (e) {
      v3InjectCoreCss(),
        $("body").append(
          '<script>yt.config_.DISABLE_WARM_LOADS = true; yt.config_.DISABLE_YT_IMG_DELAY_LOADING = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.externalFullscreen = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerButton = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerUiWhenMinimized = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.useFastSizingOnWatchDefault = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.enableCsiLogging = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.playerStyle = "desktop"; yt.config_.EXPERIMENT_FLAGS.kevlar_watch_snap_sizing = true;</script>'
        );
    }),
    waitForElmHtml('script[src*="network.vflset"]').then(function (e) {
      document.querySelector('script[src*="network.vflset"]').remove();
    }),
    waitForElmHtml("script#base-js").then(function (e) {
      document.querySelector("script#base-js").remove();
    }),
    waitForElmHtml("script[src*=spf]").then(function (e) {
      document.querySelector("script[src*=spf]").remove();
    });
}

if (
  window.location.href
    .toLocaleLowerCase()
    .includes("/reporthistory?v3feed=subscription") &&
  !window.location.href.includes("v3cv=0")
) {
  var subscriptionstate = 0;

  async function getSubscriptions(e) {
    if (0 == e)
      var t = await fetch("https://www.youtube.com/feed/subscriptions?flow=2");
    else if (1 == e) t = await fetch("https://www.youtube.com/feed/channels");
    return t.text();
  }

  async function v3GrabSubscriptions(e) {
    var t = await getSubscriptions(e).then((n) => {
      (t = (t = JSON.parse(
        n
          .substr(parseInt(n.search("var ytInitialData = ") + 20))
          .substr(
            0,
            parseInt(
              n
                .substr(parseInt(n.search("var ytInitialData = ") + 20))
                .search("</script>") - 1
            )
          )
      )).contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
        .sectionListRenderer.contents),
        buildSubscriptionFeed(e, t);
    });
  }

  function buildSubscriptionFeed(e, t) {
    console.log(t);
    var n = '<ul id="" class="feed-list context-data-container">';

    if (0 == e) {
      function s(e) {
        try {
          return !!e.thumbnailOverlayTimeStatusRenderer;
        } catch (e) {
          return !1;
        }
      }

      for (i = 0, j = t.length; i < j; i++)
        if (t[i].itemSectionRenderer) {
          var r =
              t[i].itemSectionRenderer.contents[0].shelfRenderer.content
                .expandedShelfContentsRenderer.items[0].videoRenderer,
            o =
              r.channelThumbnailSupportedRenderers
                .channelThumbnailWithLinkRenderer.thumbnail.thumbnails[0].url,
            c = "LIVE";

          try {
            c =
              r.thumbnailOverlays.find(s).thumbnailOverlayTimeStatusRenderer
                .text.simpleText;
          } catch (e) {}

          var a = "";

          try {
            a = r.viewCountText.simpleText;
          } catch (e) {}

          a || (a = 0);
          var l =
              r.thumbnail.thumbnails[
                parseInt(r.thumbnail.thumbnails.length - 1)
              ].url.split("?")[0],
            u = "";

          try {
            u = r.descriptionSnippet.runs[0].text;
          } catch (e) {}

          var d = "";

          try {
            d = r.publishedTimeText.simpleText;
          } catch (e) {}

          d || (d = 0);
          var m = r.videoId,
            y =
              r.shortBylineText.runs[0].navigationEndpoint.browseEndpoint
                .browseId,
            p = r.shortBylineText.runs[0].text,
            h = r.title.runs[0].text;
          n +=
            '<li class="feed-list-item feed-item-container yt-card" data-channel-key="' +
            y +
            '">\n    <div class="feed-item-dismissable  ">\n                <div class="feed-author-bubble-container">\n<a href="/channel/' +
            y +
            '" class="feed-author-bubble yt-uix-sessionlink   " data-sessionlink="">  <span class="feed-item-author ">\n          <span class="video-thumb  yt-thumb yt-thumb-28">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="' +
            p +
            '" src="' +
            o +
            '" width="28" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n\n  </span>\n</a>  </div>\n\n\n        <div class="feed-item-main">\n          <div class="feed-item-header ">\n              \n  <span class="feed-item-actions-line">\n      \n      <span class="feed-item-owner"><a href="/channel/' +
            y +
            '" class="yt-uix-sessionlink yt-user-name spf-nolink" data-sessionlink="" dir="ltr">' +
            p +
            '</a>  \n</span> uploaded a video\n\n\n  </span>\n\n                <span class="feed-item-time">\n      ' +
            d +
            '\n    </span>\n\n          </div>\n          <div class="feed-item-main-content">\n                    \n\n\n    <div class="yt-lockup clearfix  yt-lockup-video yt-lockup-tile context-data-item" data-context-item-type="video" data-context-item-user="Clevver Movies" data-context-item-views="301 views" data-context-item-title="Riddick A Look Inside Featurette - Vin Diesel" data-context-item-time="' +
            c +
            '" data-context-item-id="' +
            m +
            '">\n    <div class="yt-lockup-thumbnail">\n        <a href="/watch?v=' +
            m +
            '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto " data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-185">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" data-thumb="' +
            l +
            '" src="' +
            l +
            '" width="185" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
            c +
            '</span>\n\n  <button class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" type="button" title="Watch Later" onclick=";return false;" data-video-ids="' +
            m +
            '" data-button-menu-id="shared-addto-watch-later-login" role="button"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n\n    </div>\n    <div class="yt-lockup-content">\n            <h3 class="yt-lockup-title">\n    <a class="yt-uix-sessionlink yt-uix-tile-link yt-uix-contextlink yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr" title="' +
            h +
            '" data-sessionlink="" href="/watch?v=' +
            m +
            '"><span class="yt-ui-ellipsis-wrapper" data-original-html="' +
            h +
            '">' +
            h +
            '\n    </span></a>\n  </h3>\n\n\n\n  <div class="yt-lockup-meta">\n    <ul class="yt-lockup-meta-info">\n<li>' +
            d +
            "</li><li>" +
            a +
            '</li>    </ul>\n  </div>\n\n\n      <div class="yt-lockup-description yt-ui-ellipsis yt-ui-ellipsis-2 yt-ui-ellipsis-ellipsized" dir="ltr"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
            u +
            "</span></div></div>\n    \n  </div></div>\n        </div>\n      </div>\n  </li>";
        }

      (n += "</ul>"),
        (document.querySelector(".feed-page").innerHTML = ""),
        document.querySelector(".feed-page").insertAdjacentHTML("beforeend", n);
    } else {
      var w =
        t[0].itemSectionRenderer.contents[0].shelfRenderer.content
          .expandedShelfContentsRenderer.items;

      for (i = 0, j = w.length; i < j; i++) {
        var f = w[i].channelRenderer,
          v = "0 videos";

        try {
          v = f.videoCountText.runs[0].text;
        } catch (e) {}

        try {
          v = f.videoCountText.runs[0].text + f.videoCountText.runs[1].text;
        } catch (e) {}

        var _ = "";

        try {
          _ = f.descriptionSnippet.runs[0].text;
        } catch (e) {}

        var b = "";

        try {
          b = f.subscriberCountText.simpleText.split(" ")[0];
        } catch (e) {}

        n +=
          '<li style="margin-top:15px; margin-left:35px;" class="yt-lockup clearfix yt-uix-tile yt-lockup-channel yt-lockup-tile vve-check">\n    <div class="yt-lockup-thumbnail">\n        <a href="/channel/' +
          f.channelId +
          '" class="ux-thumb-wrap yt-uix-sessionlink " data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-104 g-hovercard" data-ytid="' +
          f.channelId +
          '">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" src="' +
          f.thumbnail.thumbnails[parseInt(f.thumbnail.thumbnails.length - 1)]
            .url +
          '" width="104">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a>\n\n    </div>\n    <div class="yt-lockup-content">\n      <span class="qualified-channel-title ellipsized has-badge"><span class="qualified-channel-title-wrapper  g-hovercard" data-ytid="' +
          f.channelId +
          '">  <span class="qualified-channel-title-text">\n        <h3 class="yt-lockup-title">     <a class="yt-uix-sessionlink yt-uix-tile-link yt-uix-contextlink yt-ui-ellipsis yt-ui-ellipsis-2 g-hovercard" dir="ltr" data-ytid="' +
          f.channelId +
          '" data-name="" data-sessionlink="" href="/channel/' +
          f.channelId +
          '"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
          f.title.simpleText +
          '     </span></a>\n  </h3>\n\n  </span>\n</span>      \n\n</span><div class="yt-lockup-meta"><ul class="yt-lockup-meta-info"><li>by <a href="/channel/' +
          f.channelId +
          '" class="g-hovercard yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr" data-ytid="" data-name="">' +
          f.title.simpleText +
          "</a>\n</li><li>Active this eternity</li><li>" +
          v +
          '</li></ul></div>    <div class="yt-lockup-description yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr"><span class="yt-ui-ellipsis-wrapper" data-original-html="">' +
          _ +
          '</span></div>\n<div class="yt-lockup-badges"><ul class="item-badge-line"><li class="yt-lockup-badge-item"><span class="yt-badge ">CHANNEL</span></li></ul>    <span class=" yt-uix-button-subscription-container"><button onclick="return false;" aria-role="button" aria-live="polite" aria-busy="false" class="yt-uix-subscription-button yt-uix-button yt-uix-button-subscribed-unbranded yt-uix-button-size-default yt-uix-button-has-icon" type="button" data-sessionlink="" data-href="" data-style-type="unbranded" data-channel-external-id="' +
          f.channelId +
          '" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-subscribe" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></span><span class="yt-uix-button-content"><span class="subscribe-label" aria-label="Subscribe">Subscribe</span><span class="subscribed-label" aria-label="Unsubscribe">Subscribed</span><span class="unsubscribe-label" aria-label="Unsubscribe">Unsubscribe</span> </span></button><span class="yt-subscription-button-subscriber-count-unbranded-horizontal">' +
          b +
          '</span>  <span class="yt-subscription-button-disabled-mask" title=""></span>\n</span>\n</div>\n    </div>\n    \n  </li>';
      }

      (n += "</ul>"),
        (document.querySelector(".feed-page").innerHTML = ""),
        document.querySelector(".feed-page").insertAdjacentHTML("beforeend", n),
        t[1].continuationItemRenderer &&
          document
            .querySelector(".feed-page")
            .insertAdjacentHTML(
              "beforeend",
              '<div style="text-align: center;margin-top: 20px;margin-bottom: 10px;" class="yt-uix-pager feed-pager " role="navigation"><button id="feed-more-button" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default" type="button" data-ajax-id="' +
                t[1].continuationItemRenderer.continuationEndpoint
                  .continuationCommand.token +
                '" onclick=";return false;" data-button-action="" role="button"><span class="yt-uix-button-content"> « Next » </span></button><p class="yt-spinner hid">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n    </div>'
            ),
        v3SubscriptionFriend();
    }
  }

  window.location.href.includes("view=1") && (subscriptionstate = 1),
    document.querySelector("html").setAttribute("feed", ""),
    ((guidescr = document.createElement("script")).src =
      chrome.extension.getURL("hitchhiker/base/guide_service.js")),
    (guidescr.onload = function () {
      guidescr.remove();
      var e = document.createElement("script");
      (e.src = chrome.extension.getURL("hitchhiker/config/HTML_BUILDER.js")),
        (e.onload = function () {
          e.remove();
        }),
        document.querySelector("html").appendChild(e);
    }),
    document.querySelector("html").appendChild(guidescr),
    getAccountInfo(),
    v3GrabSubscriptions(subscriptionstate),
    addStyle("ytd-app{display:none!important;}"),
    document.querySelector("html").setAttribute("v3cv2o13", ""),
    document.querySelector("html").removeAttribute("style"),
    document.querySelector("html").removeAttribute("system-icons"),
    document.querySelector("html").removeAttribute("typography"),
    document.querySelector("html").removeAttribute("typography-spacing"),
    waitForElmHtml("ytd-app").then(function (e) {
      document.querySelector("ytd-app").remove(),
        document.querySelector("body").setAttribute("ytdataloaded", "");
      var t = document.createElement("head");
      t.setAttribute("v3head", ""),
        document.querySelector("html").prepend(t),
        document.querySelector("html head:not([v3head])").remove();
      var n = document.createElement("link");
      n.setAttribute("id", "csscore-temp-container"),
        document.querySelector("head").append(n),
        v3.htmlBuilderConfig.core.NIRVANA
          ? (document.querySelector("#csscore-temp-container").outerHTML =
              '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflRpDX3b.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="' +
              chrome.extension.getURL(
                "/hitchhiker/cssbin/www-home-c4-vflqZnGt6.css"
              ) +
              '" data-loaded="true"><link id="css-3229727439" class="www-home-c4" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-home-c4-vflbEBwrR.css" data-loaded="true">')
          : (document.querySelector("#csscore-temp-container").outerHTML =
              '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflXh4Zic.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-guide-vflshDMkV.css" data-loaded="true"><link id="css-3229727439" class="www-home-c4" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-home-c4-vflbEBwrR.css" data-loaded="true">');
      var s = document.createElement("link");
      s.setAttribute("id", "playercsscore-temp-container"),
        document.querySelector("head").append(s),
        (document.querySelector("#playercsscore-temp-container").outerHTML =
          '<link id="css-player" class="www-core" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-player-vfluwFMix.css" data-loaded="true">'),
        setTimeout(function () {
          document.querySelector("body").setAttribute("ythtmlloaded", "");
        }, 1);
    }),
    waitForElmHtml("body").then(function (e) {
      v3InjectCoreCss(),
        $("body").append(
          '<script>yt.config_.DISABLE_WARM_LOADS = true; yt.config_.DISABLE_YT_IMG_DELAY_LOADING = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.externalFullscreen = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerButton = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerUiWhenMinimized = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.useFastSizingOnWatchDefault = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.enableCsiLogging = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.playerStyle = "desktop"; yt.config_.EXPERIMENT_FLAGS.kevlar_watch_snap_sizing = true;</script>'
        );
    }),
    waitForElmHtml('script[src*="network.vflset"]').then(function (e) {
      document.querySelector('script[src*="network.vflset"]').remove();
    }),
    waitForElmHtml("script#base-js").then(function (e) {
      document.querySelector("script#base-js").remove();
    }),
    waitForElmHtml("script[src*=spf]").then(function (e) {
      document.querySelector("script[src*=spf]").remove();
    });
}

if (
  window.location.href
    .toLocaleLowerCase()
    .includes("/reporthistory?v3feed=what_2_watch") &&
  !window.location.href.includes("v3cv=0")
) {
  function getPageV1() {
    const e = new XMLHttpRequest();
    e.open("GET", "https://www.youtube.com"),
      e.setRequestHeader("X-YOUTUBE-CLIENT-NAME", "1"),
      e.setRequestHeader("X-YOUTUBE-CLIENT-VERSION", "1.20200101.01.01"),
      e.send(),
      (e.onload = () => {
        var t = JSON.parse(
          e.responseText
            .substr(
              parseInt(e.responseText.search("var ytInitialData = ") + 20)
            )
            .substr(
              0,
              parseInt(
                e.responseText
                  .substr(
                    parseInt(e.responseText.search("var ytInitialData = ") + 20)
                  )
                  .search("</script>") - 1
              )
            )
        );
        console.log(t);
        var n =
          t.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
            .sectionListRenderer;
        buildHomeFeed(n);
      });
  }

  document.querySelector("html").setAttribute("feed", ""),
    ((guidescr = document.createElement("script")).src =
      chrome.extension.getURL("hitchhiker/base/guide_service.js")),
    (guidescr.onload = function () {
      guidescr.remove();
      var e = document.createElement("script");
      (e.src = chrome.extension.getURL("hitchhiker/config/HTML_BUILDER.js")),
        (e.onload = function () {
          e.remove();
        }),
        document.querySelector("html").appendChild(e);
    }),
    document.querySelector("html").appendChild(guidescr),
    getAccountInfo(),
    addStyle("ytd-app {display:none!important;}"),
    document.querySelector("html").setAttribute("v3cv2o13", ""),
    document.querySelector("html").removeAttribute("style"),
    document.querySelector("html").removeAttribute("system-icons"),
    document.querySelector("html").removeAttribute("typography"),
    document.querySelector("html").removeAttribute("typography-spacing"),
    waitForElmHtml("ytd-app").then(function (e) {
      document.querySelector("ytd-app").remove();
    }),
    waitForElmHtml("body").then(function (e) {
      v3InjectCoreCss(),
        $("body").append(
          '<script>yt.config_.DISABLE_WARM_LOADS = true; yt.config_.DISABLE_YT_IMG_DELAY_LOADING = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.externalFullscreen = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerButton = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerUiWhenMinimized = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.useFastSizingOnWatchDefault = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.enableCsiLogging = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.playerStyle = "desktop"; yt.config_.EXPERIMENT_FLAGS.kevlar_watch_snap_sizing = true;</script>'
        );
    }),
    waitForElmHtml('script[src*="network.vflset"]').then(function (e) {
      document.querySelector('script[src*="network.vflset"]').remove();
    }),
    waitForElmHtml("script#base-js").then(function (e) {
      document.querySelector("script#base-js").remove(),
        document.querySelector("body").setAttribute("ytdataloaded", "");
      var t = document.createElement("head");
      t.setAttribute("v3head", ""),
        document.querySelector("html").prepend(t),
        document.querySelector("html head:not([v3head])").remove();
      var n = document.createElement("link");
      n.setAttribute("id", "csscore-temp-container"),
        document.querySelector("head").append(n),
        v3.htmlBuilderConfig.core.NIRVANA
          ? (document.querySelector("#csscore-temp-container").outerHTML =
              '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflRpDX3b.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-home-c4-vflqZnGt6.css" data-loaded="true"><link id="css-2944141605" class="www-home-c4" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-home-c4-vfl2aSRsB.css" data-loaded="true">')
          : (document.querySelector("#csscore-temp-container").outerHTML =
              '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflXh4Zic.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-guide-vflshDMkV.css" data-loaded="true"><link id="css-2944141605" class="www-home-c4" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-home-c4-vfl2aSRsB.css" data-loaded="true">');
      var s = document.createElement("link");
      s.setAttribute("id", "playercsscore-temp-container"),
        document.querySelector("head").append(s),
        (document.querySelector("#playercsscore-temp-container").outerHTML =
          '<link id="css-player" class="www-core" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-player-vfluwFMix.css" data-loaded="true">'),
        setTimeout(function () {
          document.querySelector("body").setAttribute("ythtmlloaded", "");
        }, 1);
    }),
    waitForElmHtml("script[src*=spf]").then(function (e) {
      document.querySelector("script[src*=spf]").remove();
    });
}

("/results" != window.location.pathname &&
  "/results/search" != window.location.pathname) ||
  window.location.href.includes("v3cv=0") ||
  (((guidescr = document.createElement("script")).src = chrome.extension.getURL(
    "hitchhiker/base/guide_service.js"
  )),
  (guidescr.onload = function () {
    guidescr.remove();
    var e = document.createElement("script");
    (e.src = chrome.extension.getURL("hitchhiker/config/HTML_BUILDER.js")),
      (e.onload = function () {
        e.remove();
      }),
      document.querySelector("html").appendChild(e);
  }),
  document.querySelector("html").appendChild(guidescr),
  getAccountInfo(),
  addStyle("ytd-app{display:none!important;}"),
  document.querySelector("html").setAttribute("v3cv2o13", ""),
  document.querySelector("html").removeAttribute("style"),
  document.querySelector("html").removeAttribute("system-icons"),
  document.querySelector("html").removeAttribute("typography"),
  document.querySelector("html").removeAttribute("typography-spacing"),
  waitForElmHtml("ytd-app").then(function (e) {
    document.querySelector("ytd-app").remove(),
      document.querySelector("body").setAttribute("ytdataloaded", "");
    var t = document.createElement("head");
    t.setAttribute("v3head", ""),
      document.querySelector("html").prepend(t),
      document.querySelector("html head:not([v3head])").remove();
    var n = document.createElement("link");
    n.setAttribute("id", "csscore-temp-container"),
      document.querySelector("head").append(n),
      v3.htmlBuilderConfig.core.NIRVANA
        ? (document.querySelector("#csscore-temp-container").outerHTML =
            '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflRpDX3b.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-home-c4-vflqZnGt6.css" data-loaded="true"><link id="css-3588632221" class="www-results" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-results-vfl0ja5nz.css" data-loaded="true">')
        : (document.querySelector("#csscore-temp-container").outerHTML =
            '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflXh4Zic.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-guide-vflshDMkV.css" data-loaded="true"><link id="css-3588632221" class="www-results" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-results-vfl0ja5nz.css" data-loaded="true">');
    var s = document.createElement("link");
    s.setAttribute("id", "playercsscore-temp-container"),
      document.querySelector("head").append(s),
      (document.querySelector("#playercsscore-temp-container").outerHTML =
        '<link id="css-player" class="www-core" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-player-vfluwFMix.css" data-loaded="true">'),
      setTimeout(function () {
        document.querySelector("body").setAttribute("ythtmlloaded", "");
      }, 1);
  }),
  waitForElmHtml("body").then(function (e) {
    v3InjectCoreCss(),
      $("body").append(
        '<script>yt.config_.DISABLE_WARM_LOADS = true; yt.config_.DISABLE_YT_IMG_DELAY_LOADING = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.externalFullscreen = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerButton = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerUiWhenMinimized = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.useFastSizingOnWatchDefault = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.enableCsiLogging = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.playerStyle = "desktop"; yt.config_.EXPERIMENT_FLAGS.kevlar_watch_snap_sizing = true;</script>'
      );
  }),
  waitForElmHtml('script[src*="network.vflset"]').then(function (e) {
    document.querySelector('script[src*="network.vflset"]').remove();
  }),
  waitForElmHtml("script#base-js").then(function (e) {
    document.querySelector("script#base-js").remove();
  }),
  waitForElmHtml("script[src*=spf]").then(function (e) {
    document.querySelector("script[src*=spf]").remove();
  }));

if (
  window.location.href
    .toLocaleLowerCase()
    .includes("/reporthistory?v3feed=history") &&
  !window.location.href.includes("v3cv=0")
) {
  var guidescr;

  function getHistoryFeed() {
    const e = new XMLHttpRequest();
    e.open("GET", "https://www.youtube.com/feed/history"),
      e.send(),
      (e.onload = () => {
        var t = JSON.parse(
          e.responseText
            .substr(
              parseInt(e.responseText.search("var ytInitialData = ") + 20)
            )
            .substr(
              0,
              parseInt(
                e.responseText
                  .substr(
                    parseInt(e.responseText.search("var ytInitialData = ") + 20)
                  )
                  .search("</script>") - 1
              )
            )
        );
        waitForElmHtml("#page").then(function (e) {
          buildHistoryFeed(t);
        });
      });
  }

  document.querySelector("html").setAttribute("feed", ""),
    ((guidescr = document.createElement("script")).src =
      chrome.extension.getURL("hitchhiker/base/guide_service.js")),
    (guidescr.onload = function () {
      guidescr.remove();
      var e = document.createElement("script");
      (e.src = chrome.extension.getURL("hitchhiker/config/HTML_BUILDER.js")),
        (e.onload = function () {
          e.remove();
        }),
        document.querySelector("html").appendChild(e);
    }),
    document.querySelector("html").appendChild(guidescr),
    getAccountInfo(),
    getHistoryFeed(),
    addStyle("ytd-app{display:none!important;}"),
    document.querySelector("html").setAttribute("v3cv2o13", ""),
    document.querySelector("html").removeAttribute("style"),
    document.querySelector("html").removeAttribute("system-icons"),
    document.querySelector("html").removeAttribute("typography"),
    document.querySelector("html").removeAttribute("typography-spacing"),
    waitForElmHtml("ytd-app").then(function (e) {
      document.querySelector("ytd-app").remove(),
        document.querySelector("body").setAttribute("ytdataloaded", "");
      var t = document.createElement("head");
      t.setAttribute("v3head", ""),
        document.querySelector("html").prepend(t),
        document.querySelector("html head:not([v3head])").remove();
      var n = document.createElement("link");
      n.setAttribute("id", "csscore-temp-container"),
        document.querySelector("head").append(n),
        v3.htmlBuilderConfig.core.NIRVANA
          ? (document.querySelector("#csscore-temp-container").outerHTML =
              '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflRpDX3b.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="' +
              chrome.extension.getURL(
                "/hitchhiker/cssbin/www-home-c4-vflqZnGt6.css"
              ) +
              '" data-loaded="true"><link id="css-3229727439" class="www-home-c4" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-home-c4-vflbEBwrR.css" data-loaded="true">')
          : (document.querySelector("#csscore-temp-container").outerHTML =
              '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflXh4Zic.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-guide-vflshDMkV.css" data-loaded="true"><link id="css-3229727439" class="www-home-c4" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-home-c4-vflbEBwrR.css" data-loaded="true">');
      var s = document.createElement("link");
      s.setAttribute("id", "playercsscore-temp-container"),
        document.querySelector("head").append(s),
        (document.querySelector("#playercsscore-temp-container").outerHTML =
          '<link id="css-player" class="www-core" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-player-vfluwFMix.css" data-loaded="true">'),
        setTimeout(function () {
          document.querySelector("body").setAttribute("ythtmlloaded", "");
        }, 1);
    }),
    waitForElmHtml("body").then(function (e) {
      v3InjectCoreCss(),
        $("body").append(
          '<script>yt.config_.DISABLE_WARM_LOADS = true; yt.config_.DISABLE_YT_IMG_DELAY_LOADING = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.externalFullscreen = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerButton = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerUiWhenMinimized = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.useFastSizingOnWatchDefault = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.enableCsiLogging = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.playerStyle = "desktop"; yt.config_.EXPERIMENT_FLAGS.kevlar_watch_snap_sizing = true;</script>'
        );
    }),
    waitForElmHtml('script[src*="network.vflset"]').then(function (e) {
      document.querySelector('script[src*="network.vflset"]').remove();
    }),
    waitForElmHtml("script#base-js").then(function (e) {
      document.querySelector("script#base-js").remove();
    }),
    waitForElmHtml("script[src*=spf]").then(function (e) {
      document.querySelector("script[src*=spf]").remove();
    });
}

window.location.href.includes("/playlist?list") &&
  !window.location.href.includes("v3cv=0") &&
  (document.querySelector("html").setAttribute("pl", ""),
  ((guidescr = document.createElement("script")).src = chrome.extension.getURL(
    "hitchhiker/base/guide_service.js"
  )),
  (guidescr.onload = function () {
    guidescr.remove();
    var e = document.createElement("script");
    (e.src = chrome.extension.getURL("hitchhiker/config/HTML_BUILDER.js")),
      (e.onload = function () {
        e.remove();
      }),
      document.querySelector("html").appendChild(e);
  }),
  document.querySelector("html").appendChild(guidescr),
  getAccountInfo(),
  addStyle(
    "ytd-app, ytd-watch-flexy, #player-container-inner.ytd-watch-flexy:not([v3loaded]) {display:none!important;}"
  ),
  document.querySelector("html").setAttribute("v3cv2o13", ""),
  document.querySelector("html").removeAttribute("style"),
  document.querySelector("html").removeAttribute("system-icons"),
  document.querySelector("html").removeAttribute("typography"),
  document.querySelector("html").removeAttribute("typography-spacing"),
  waitForElmHtml("ytd-app").then(function (e) {
    document.querySelector("ytd-app").remove(),
      document.querySelector("body").setAttribute("ytdataloaded", "");
    var t = document.createElement("head");
    t.setAttribute("v3head", ""),
      document.querySelector("html").prepend(t),
      document.querySelector("html head:not([v3head])").remove();
    var n = document.createElement("link");
    n.setAttribute("id", "csscore-temp-container"),
      document.querySelector("head").append(n),
      (document.querySelector("#csscore-temp-container").outerHTML =
        '<link id="css-2838365198" class="www-core" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-vflXh4Zic.css" data-loaded="true"><link id="css-688526446" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-guide-vflshDMkV.css" data-loaded="true"><link id="css-3031658408" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-the-rest-vflzYVqky.css"><link id="css-1090066155" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-playlist-vfl2oMEvj.css">');
    var s = document.createElement("link");
    s.setAttribute("id", "playercsscore-temp-container"),
      document.querySelector("head").append(s),
      (document.querySelector("#playercsscore-temp-container").outerHTML =
        '<link id="css-player" class="www-core" rel="stylesheet" href="https://s.ytimg.com/yts/cssbin/www-player-vfluwFMix.css" data-loaded="true">'),
      setTimeout(function () {
        document.querySelector("body").setAttribute("ythtmlloaded", "");
      }, 1);
  }),
  waitForElmHtml("body").then(function (e) {
    v3InjectCoreCss(),
      $("body").append(
        "<script>function ensureFooIsSet() {\r\n    return new Promise(function (resolve, reject) {\r\n        (function waitForFoo(){\r\n            if (window.ytInitialData) return resolve();\r\n            setTimeout(waitForFoo, 10);\r\n        })();\r\n    });\r\n}\r\nensureFooIsSet().then(function(){document.body.setAttribute('data-loaded', '');});</script>"
      ),
      $("body").append(
        '<script>yt.config_.DISABLE_WARM_LOADS = true; yt.config_.DISABLE_YT_IMG_DELAY_LOADING = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.externalFullscreen = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerButton = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.showMiniplayerUiWhenMinimized = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.useFastSizingOnWatchDefault = true; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.enableCsiLogging = false; yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.playerStyle = "desktop"; yt.config_.EXPERIMENT_FLAGS.kevlar_watch_snap_sizing = true;</script>'
      );
  }),
  waitForElmHtml('script[src*="network.vflset"]').then(function (e) {
    document.querySelector('script[src*="network.vflset"]').remove();
  }),
  waitForElmHtml("script#base-js").then(function (e) {
    document.querySelector("script#base-js").remove();
  }),
  waitForElmHtml("script[src*=spf]").then(function (e) {
    document.querySelector("script[src*=spf]").remove();
  }));
