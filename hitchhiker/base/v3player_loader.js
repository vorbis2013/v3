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

var wasdash = !1;

function murderVp() {
  var e,
    t = window.MediaSource;

  if (t) {
    var a = t.isTypeSupported.bind(t);
    t.isTypeSupported =
      ((e = a),
      function (t) {
        return void 0 === t ||
          t.toLowerCase().indexOf("vp9") > -1 ||
          t.toLowerCase().indexOf("mp4a") > -1
          ? ""
          : e(t);
      });
  }
}

function reviveVp() {
  var e,
    t = window.MediaSource;

  if (t) {
    var a = t.isTypeSupported.bind(t);
    t.isTypeSupported =
      ((e = a),
      function (t) {
        return void 0 === t ? "" : e(t);
      });
  }
}

function murderDash() {
  var e,
    t = window.MediaSource;

  if (t) {
    var a = t.isTypeSupported.bind(t);
    t.isTypeSupported =
      ((e = a),
      function (t) {
        return void 0 === t ||
          t.toLowerCase().indexOf("vp9") > -1 ||
          t.toLowerCase().indexOf("mp4a") > -1 ||
          t.toLowerCase().indexOf("opus") > -1
          ? ""
          : e(t);
      });
  }
}

var waitForElm2 = async (e) => {
  for (; null === document.querySelector(e); )
    await new Promise((e) => requestAnimationFrame(e));

  return document.querySelector(e);
};

function ensureFooIsSet() {
  return new Promise(function (e, t) {
    !(function t() {
      if (window.ytInitialData) return e();
      setTimeout(t, 10);
    })();
  });
}

function ensureFoo2IsSet() {
  return new Promise(function (e, t) {
    !(function t() {
      try {
        if (window.ytInitialPlayerResponse.playabilityStatus) return e();
      } catch (e) {}

      setTimeout(t, 10);
    })();
  });
}

String.prototype.replaceAll ||
  (String.prototype.replaceAll = function (e, t) {
    return "[object regexp]" === Object.prototype.toString.call(e).toLowerCase()
      ? this.replace(e, t)
      : this.replace(new RegExp(e, "g"), t);
  }),
  ensureFooIsSet().then(function () {
    document.body.setAttribute("data-loaded", "");
  });
var playerscr1 = document.createElement("script");

playerscr1.onload = function () {
  ensureFooIsSet().then(function () {
    console.log("READY TO CALL"),
      document.querySelector("html[c3]") || v3PlayerLoader();
  });
};

var wasv3plcalled = !1,
  isgeckoo = !1;
if (
  ("onbeforescriptexecute" in document && (isgeckoo = !0),
  document.querySelector("html[c3]"))
)
  var c3video = {};
var playerwasloaded = !1,
  datawasloaded = !1,
  playerwasinvoked = !1;

function v3PlayerLoader(innertubevideoid, mission) {
  (playerwasloaded = !1), (datawasloaded = !1), (playerwasinvoked = !1);
  var playerscr1 = document.createElement("script");

  function waitForElm(e) {
    return new Promise((t) => {
      if (document.querySelector(e)) return t(document.querySelector(e));
      const a = new MutationObserver((n) => {
        document.querySelector(e) &&
          (t(document.querySelector(e)), a.disconnect());
      });
      a.observe(document, {
        childList: !0,
        subtree: !0
      });
    });
  }

  (playerscr1.src = "chrome-extension://" + v3.id + "/html5player.js"),
    isgeckoo &&
      (playerscr1.src = "moz-extension://" + v3.id + "/html5player.js"),
    document.querySelector("html[c3]") &&
      ((playerscr1.src = "chrome-extension://" + v3.id + "/html5player_C3.js"),
      isgeckoo &&
        (playerscr1.src = "moz-extension://" + v3.id + "/html5player_C3.js")),
    document.querySelector("html[c3]") &&
      document.querySelector(".exp-v3-enhanced-c3") &&
      ((playerscr1.src = "chrome-extension://" + v3.id + "/html5player.js"),
      isgeckoo &&
        (playerscr1.src = "moz-extension://" + v3.id + "/html5player.js")),
    (playerscr1.onload = function () {
      (playerwasloaded = !0),
        datawasloaded && (invokePlayer(), (playerwasinvoked = !0));
    }),
    document.head.appendChild(playerscr1),
    window.ytInitialPlayerResponse || (window.ytInitialPlayerResponse = {}),
    (wasv3plcalled = !0);
  var event = new CustomEvent("v3-player-ready"),
    streamingdata = {},
    decoder = "",
    obfuscator = "",
    decodername = "",
    dashmanifest = "",
    rvsdata = "";

  async function getPlayerData(e) {
    var t,
      a,
      n,
      i = "";
    window.location.href.includes("confirmed_watcher=1") &&
      (i = '"contentCheckOk":true,"racyCheckOk":true'),
      0 == e
        ? ((n = window.fytauth.LOGGED_IN),
          (t = window.fytauth.INNERTUBE_API_KEY),
          (a = window.fytauth.DELEGATED_SESSION_ID),
          window.fytauth.INNERTUBE_CONTEXT_CLIENT_VERSION)
        : ((n = yt.config_.LOGGED_IN),
          (t = yt.config_.INNERTUBE_API_KEY),
          (a = yt.config_.DELEGATED_SESSION_ID),
          yt.config_.INNERTUBE_CONTEXT_CLIENT_VERSION);
    var r = await getSapisidhash();
    return (
      await fetch("https://www.youtube.com/youtubei/v1/player?key=" + t, {
        credentials: "include",
        headers: _objectSpread(
          _objectSpread(
            _objectSpread(
              {},
              n && {
                Authorization: r
              }
            ),
            n && {
              "X-Goog-AuthUser": "0"
            }
          ),
          {},
          {
            "Content-Type": "application/json",
            Origin: "https://www.youtube.com",
            "X-Youtube-Client-Name": "3",
            "X-Youtube-Client-Version": "15.02",
            "X-GOOG-VISITOR-ID": ""
          },
          !!a && {
            "X-Goog-PageId": a
          }
        ),
        referrer: "https://www.youtube.com",
        body:
          '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "ANDROID",\r\n\t\t\t"clientVersion": "15.02",\r\n\t\t\t"hl": "en"\r\n\t\t}\r\n\t},\r\n\t"videoId": "' +
          innertubevideoid +
          '",' +
          i +
          "\r\n}\r\n",
        method: "POST",
        mode: "cors"
      })
    ).json();
  }

  async function grabPlayerData() {
    window.location.href.includes("use_legacy_player=1")
      ? ensureFoo2IsSet().then(function () {
          (window.innertuberesponse = ytInitialPlayerResponse),
            console.log(innertuberesponse);

          try {
            (innertuberesponse.streamingData.adaptiveFormats[0].qualityLabel.includes(
              "0s"
            ) ||
              window.location.href.includes("&only_h=1") ||
              0 == v3.config.vp9) &&
              murderVp();
          } catch (e) {}

          v3CraftVideoStreams();
        })
      : await getPlayerData(mission).then((e) => {
          window.innertuberesponse = e;

          try {
            document.documentElement.setAttribute(
              "author",
              innertuberesponse.videoDetails.channelId
            ),
              document.querySelector("body[spftoken]") &&
                (document.documentElement.setAttribute(
                  "spfinitial" + document.body.getAttribute("spftoken"),
                  ""
                ),
                innertuberesponse.streamingData || location.reload(),
                setTimeout(function () {
                  document.documentElement.removeAttribute(
                    "spfinitial" + document.body.getAttribute("spftoken")
                  );
                }, 1e3));
          } catch (e) {}

          console.log(innertuberesponse);

          try {
            (innertuberesponse.streamingData.adaptiveFormats[0].qualityLabel.includes(
              "0s"
            ) ||
              window.location.href.includes("&only_h=1") ||
              0 == v3.config.vp9) &&
              murderVp();
          } catch (e) {}

          v3CraftVideoStreams();
        });
  }

  function v3CraftVideoStreams() {
    function v3CraftDashUrlStream(plapipath, fallbackpath, readtype) {
      if (1 == readtype) {
        if (
          plapipath.mimeType.includes("vp9") &&
          void 0 !== streamingdata.dashManifestUrl
        )
          return "UNDEFINED";

        try {
          var decode =
            "encodeURIComponent(" +
            decodername +
            '(decodeURIComponent("' +
            plapipath.signatureCipher.split("s=")[1].split("&")[0] +
            '")))';

          try {
            return plapipath.width
              ? "init=" +
                  plapipath.initRange.start +
                  "-" +
                  plapipath.initRange.end +
                  "&size=" +
                  plapipath.width +
                  "x" +
                  plapipath.height +
                  "&fps=" +
                  plapipath.fps +
                  "&lmt=" +
                  plapipath.lastModified +
                  "&index=" +
                  plapipath.indexRange.start +
                  "-" +
                  plapipath.indexRange.end +
                  "&clen=" +
                  plapipath.contentLength +
                  "&bitrate=" +
                  plapipath.bitrate +
                  "&type=" +
                  encodeURIComponent(plapipath.mimeType).replace("%20", "+") +
                  "&url=" +
                  encodeURIComponent(
                    plapipath.signatureCipher
                      .split("&url=")[1]
                      .split("videoplayback")[0] +
                      "videoplayback" +
                      decodeURIComponent(
                        decodeURIComponent(
                          decodeURIComponent(
                            plapipath.signatureCipher
                              .split("&url=")[1]
                              .split("videoplayback")[1]
                          )
                        )
                      ) +
                      "&alr=yes&sig="
                  ) +
                  encodeURIComponent(eval(decode)) +
                  "&itag=" +
                  plapipath.itag
              : "init=" +
                  plapipath.initRange.start +
                  "-" +
                  plapipath.initRange.end +
                  "&lmt=" +
                  plapipath.lastModified +
                  "&index=" +
                  plapipath.indexRange.start +
                  "-" +
                  plapipath.indexRange.end +
                  "&clen=" +
                  plapipath.contentLength +
                  "&bitrate=" +
                  plapipath.bitrate +
                  "&type=" +
                  encodeURIComponent(plapipath.mimeType).replace("%20", "+") +
                  "&url=" +
                  encodeURIComponent(
                    plapipath.signatureCipher
                      .split("&url=")[1]
                      .split("videoplayback")[0] +
                      "videoplayback" +
                      decodeURIComponent(
                        decodeURIComponent(
                          decodeURIComponent(
                            plapipath.signatureCipher
                              .split("&url=")[1]
                              .split("videoplayback")[1]
                          )
                        )
                      ) +
                      "&alr=yes&sig="
                  ) +
                  encodeURIComponent(eval(decode)) +
                  "&itag=" +
                  plapipath.itag;
          } catch (err) {
            return plapipath.width
              ? "init=" +
                  fallbackpath.initRange.start +
                  "-" +
                  fallbackpath.initRange.end +
                  "&size=" +
                  plapipath.width +
                  "x" +
                  plapipath.height +
                  "&fps=" +
                  plapipath.fps +
                  "&lmt=" +
                  plapipath.lastModified +
                  "&index=" +
                  fallbackpath.indexRange.start +
                  "-" +
                  fallbackpath.indexRange.end +
                  "&clen=" +
                  fallbackpath.contentLength +
                  "&bitrate=" +
                  plapipath.bitrate +
                  "&type=" +
                  encodeURIComponent(plapipath.mimeType).replace("%20", "+") +
                  "&url=" +
                  encodeURIComponent(
                    plapipath.signatureCipher
                      .split("&url=")[1]
                      .split("videoplayback")[0] +
                      "videoplayback" +
                      decodeURIComponent(
                        decodeURIComponent(
                          decodeURIComponent(
                            plapipath.signatureCipher
                              .split("&url=")[1]
                              .split("videoplayback")[1]
                          )
                        )
                      ) +
                      "&alr=yes&sig="
                  ) +
                  encodeURIComponent(eval(decode)) +
                  "&itag=" +
                  plapipath.itag
              : "init=" +
                  fallbackpath.initRange.start +
                  "-" +
                  fallbackpath.initRange.end +
                  "&lmt=" +
                  plapipath.lastModified +
                  "&index=" +
                  fallbackpath.indexRange.start +
                  "-" +
                  fallbackpath.indexRange.end +
                  "&clen=" +
                  fallbackpath.contentLength +
                  "&bitrate=" +
                  plapipath.bitrate +
                  "&type=" +
                  encodeURIComponent(plapipath.mimeType).replace("%20", "+") +
                  "&url=" +
                  encodeURIComponent(
                    plapipath.signatureCipher
                      .split("&url=")[1]
                      .split("videoplayback")[0] +
                      "videoplayback" +
                      decodeURIComponent(
                        decodeURIComponent(
                          decodeURIComponent(
                            plapipath.signatureCipher
                              .split("&url=")[1]
                              .split("videoplayback")[1]
                          )
                        )
                      ) +
                      "&alr=yes&sig="
                  ) +
                  encodeURIComponent(eval(decode)) +
                  "&itag=" +
                  plapipath.itag;
          }
        } catch (e) {
          try {
            return plapipath.width
              ? "init=" +
                  plapipath.initRange.start +
                  "-" +
                  plapipath.initRange.end +
                  "&size=" +
                  plapipath.width +
                  "x" +
                  plapipath.height +
                  "&fps=" +
                  plapipath.fps +
                  "&lmt=" +
                  plapipath.lastModified +
                  "&index=" +
                  plapipath.indexRange.start +
                  "-" +
                  plapipath.indexRange.end +
                  "&clen=" +
                  plapipath.contentLength +
                  "&bitrate=" +
                  plapipath.bitrate +
                  "&type=" +
                  encodeURIComponent(plapipath.mimeType).replace("%20", "+") +
                  "&url=" +
                  encodeURIComponent(plapipath.url) +
                  "&itag=" +
                  plapipath.itag
              : "init=" +
                  plapipath.initRange.start +
                  "-" +
                  plapipath.initRange.end +
                  "&lmt=" +
                  plapipath.lastModified +
                  "&index=" +
                  plapipath.indexRange.start +
                  "-" +
                  plapipath.indexRange.end +
                  "&clen=" +
                  plapipath.contentLength +
                  "&bitrate=" +
                  plapipath.bitrate +
                  "&type=" +
                  encodeURIComponent(plapipath.mimeType).replace("%20", "+") +
                  "&url=" +
                  encodeURIComponent(plapipath.url) +
                  "&itag=" +
                  plapipath.itag;
          } catch (e) {
            return plapipath.width
              ? "init=" +
                  fallbackpath.initRange.start +
                  "-" +
                  fallbackpath.initRange.end +
                  "&size=" +
                  plapipath.width +
                  "x" +
                  plapipath.height +
                  "&fps=" +
                  plapipath.fps +
                  "&lmt=" +
                  plapipath.lastModified +
                  "&index=" +
                  fallbackpath.indexRange.start +
                  "-" +
                  fallbackpath.indexRange.end +
                  "&clen=" +
                  fallbackpath.contentLength +
                  "&bitrate=" +
                  plapipath.bitrate +
                  "&type=" +
                  encodeURIComponent(plapipath.mimeType).replace("%20", "+") +
                  "&url=" +
                  encodeURIComponent(plapipath.url) +
                  "&itag=" +
                  plapipath.itag
              : "init=" +
                  fallbackpath.initRange.start +
                  "-" +
                  fallbackpath.initRange.end +
                  "&lmt=" +
                  plapipath.lastModified +
                  "&index=" +
                  fallbackpath.indexRange.start +
                  "-" +
                  fallbackpath.indexRange.end +
                  "&clen=" +
                  fallbackpath.contentLength +
                  "&bitrate=" +
                  plapipath.bitrate +
                  "&type=" +
                  encodeURIComponent(plapipath.mimeType).replace("%20", "+") +
                  "&url=" +
                  encodeURIComponent(plapipath.url) +
                  "&itag=" +
                  plapipath.itag;
          }
        }
      }
    }

    function v3CraftDashUrlStreamCompact(e, t, a) {
      try {
        return e.width
          ? "init=" +
              e.initRange.start +
              "-" +
              e.initRange.end +
              "&size=" +
              e.width +
              "x" +
              e.height +
              "&fps=" +
              e.fps +
              "&lmt=" +
              e.lastModified +
              "&index=" +
              e.indexRange.start +
              "-" +
              e.indexRange.end +
              "&clen=" +
              e.contentLength +
              "&bitrate=" +
              e.bitrate +
              "&type=" +
              encodeURIComponent(e.mimeType).replace("%20", "+") +
              "&url=" +
              encodeURIComponent(e.url) +
              "&itag=" +
              e.itag
          : "init=" +
              e.initRange.start +
              "-" +
              e.initRange.end +
              "&lmt=" +
              e.lastModified +
              "&index=" +
              e.indexRange.start +
              "-" +
              e.indexRange.end +
              "&clen=" +
              e.contentLength +
              "&bitrate=" +
              e.bitrate +
              "&type=" +
              encodeURIComponent(e.mimeType).replace("%20", "+") +
              "&url=" +
              encodeURIComponent(e.url) +
              "&itag=" +
              e.itag;
      } catch (a) {
        return e.width
          ? "init=" +
              t.initRange.start +
              "-" +
              t.initRange.end +
              "&size=" +
              e.width +
              "x" +
              e.height +
              "&fps=" +
              e.fps +
              "&lmt=" +
              e.lastModified +
              "&index=" +
              t.indexRange.start +
              "-" +
              t.indexRange.end +
              "&clen=" +
              t.contentLength +
              "&bitrate=" +
              e.bitrate +
              "&type=" +
              encodeURIComponent(e.mimeType).replace("%20", "+") +
              "&url=" +
              encodeURIComponent(e.url) +
              "&itag=" +
              e.itag
          : "init=" +
              t.initRange.start +
              "-" +
              t.initRange.end +
              "&lmt=" +
              e.lastModified +
              "&index=" +
              t.indexRange.start +
              "-" +
              t.indexRange.end +
              "&clen=" +
              t.contentLength +
              "&bitrate=" +
              e.bitrate +
              "&type=" +
              encodeURIComponent(e.mimeType).replace("%20", "+") +
              "&url=" +
              encodeURIComponent(e.url) +
              "&itag=" +
              e.itag;
      }
    }

    try {
      streamingdata = innertuberesponse.streamingData;
    } catch (e) {
      streamingdata = streamingdata;
    }

    try {
      if (null != streamingdata.dashManifestUrl) {
        (dashmanifest = streamingdata.dashManifestUrl),
          (window.usingDashMpd = !0),
          (window.wasVideo = !0);
        var mse = window.MediaSource;

        if (mse) {
          var nativeITS = mse.isTypeSupported.bind(mse);
          mse.isTypeSupported = ourITS(nativeITS);
        }

        function ourITS(e) {
          return function (t) {
            return void 0 === t || t.toLowerCase().indexOf("vp9") > -1
              ? ""
              : e(t);
          };
        }
      } else
        (window.usingDashMpd = !1),
          "/watch" == window.location.pathname && (window.wasVideo = !0);
    } catch (e) {
      return void (
        window.location.pathname.includes("/watch") && buildErrorScreen()
      );
    }

    try {
      var adaptivefmts = innertuberesponse.streamingData.adaptiveFormats;
    } catch (e) {
      var adaptivefmts = streamingdata.adaptiveFormats;
    }

    var craftedadaptivefmts = "",
      needscut = !1;
    if (
      void 0 === streamingdata.hlsManifestUrl &&
      void 0 === streamingdata.dashManifestUrl
    )
      try {
        if ("" == dashmanifest) {
          for (i = 0, j = adaptivefmts.length; i < j; i++) {
            try {
              if (0 == adaptivefmts[i].audioTrack.audioIsDefault) {
                needscut = !0;
                continue;
              }
            } catch (e) {}

            "UNDEFINED" !=
              v3CraftDashUrlStreamCompact(
                adaptivefmts[i],
                adaptivefmts[0],
                1
              ) &&
              (i == j - 1
                ? (craftedadaptivefmts += v3CraftDashUrlStreamCompact(
                    adaptivefmts[i],
                    adaptivefmts[0],
                    1
                  ))
                : (craftedadaptivefmts +=
                    v3CraftDashUrlStreamCompact(
                      adaptivefmts[i],
                      adaptivefmts[0],
                      1
                    ) + ","));
          }

          needscut &&
            (craftedadaptivefmts = craftedadaptivefmts.substring(
              0,
              craftedadaptivefmts.length - 1
            ));
        }
      } catch (e) {
        console.log(e);
      }
    ensureFooIsSet().then(function () {
      try {
        try {
          if (1 == yt.config_.LOGGED_IN) {
            var e = !1;

            try {
              ytInitialData.contents.twoColumnWatchNextResults.secondaryResults
                .secondaryResults.results[1].itemSectionRenderer.contents
                .length && (e = !0);
            } catch (e) {}

            try {
              ytInitialData.contents.twoColumnWatchNextResults.secondaryResults
                .secondaryResults.results.length && (e = !0);
            } catch (e) {}

            try {
              ytInitialData.contents.twoColumnWatchNextResults.results.results.contents
                .find(function (e) {
                  try {
                    return !!e.videoSecondaryInfoRenderer;
                  } catch (e) {
                    return !1;
                  }
                })
                .videoSecondaryInfoRenderer.metadataRowContainer.metadataRowContainerRenderer.rows[0].metadataRowRenderer.contents[0].runs[0].text.includes(
                  "Age-restricted"
                ) &&
                !e &&
                v3AgeRestrictFriend();
            } catch (e) {}

            waitForElm2("#eow-description").then(function () {
              "" == document.querySelector("#eow-description").innerText &&
                "" != innertuberesponse.videoDetails.shortDescription &&
                (document.querySelector("#eow-description").innerText =
                  innertuberesponse.videoDetails.shortDescription);
            });
          }
        } catch (e) {
          console.log(e);
        }

        function t(e) {
          for (var t = e.split(":"), a = 0, n = 1; t.length > 0; )
            (a += n * parseInt(t.pop(), 10)), (n *= 60);

          return a;
        }

        var a;
        document.querySelector("html[c3]") && v3ChannelFriend(),
          (a =
            void 0 !==
            ytInitialData.contents.twoColumnWatchNextResults.secondaryResults
              .secondaryResults.results[1].itemSectionRenderer
              ? ytInitialData.contents.twoColumnWatchNextResults
                  .secondaryResults.secondaryResults.results[1]
                  .itemSectionRenderer.contents
              : ytInitialData.contents.twoColumnWatchNextResults
                  .secondaryResults.secondaryResults.results);
        var n = 0;

        for (i = 0, j = a.length; i < j; i++)
          if (n < 12 && a[i].compactVideoRenderer) {
            var r = 0;

            try {
              r = a[i].compactVideoRenderer.viewCountText.simpleText
                .split(" ")[0]
                .replace(new RegExp(",", "g"), "");
            } catch (e) {}

            var o = "";

            try {
              o = t(a[i].compactVideoRenderer.lengthText.simpleText);
            } catch (e) {}

            (rvsdata +=
              "title=" +
              encodeURIComponent(
                a[i].compactVideoRenderer.title.simpleText
              ).replace(new RegExp("%20", "g"), "+") +
              "&author=" +
              encodeURIComponent(
                a[i].compactVideoRenderer.shortBylineText.runs[0].text
              ).replace(new RegExp("%20", "g"), "+") +
              "&view_count=" +
              r +
              "&length_seconds=" +
              o +
              "&id=" +
              a[i].compactVideoRenderer.videoId),
              11 != n && (rvsdata += ","),
              n++;
          }
      } catch (e) {
        console.log(e);
      }

      craftVarYtPlayer(craftedadaptivefmts);
    });
  }

  function craftVarYtPlayer(e) {
    var t = "";

    try {
      t = innertuberesponse.storyboards.playerStoryboardSpecRenderer.spec;
    } catch (e) {
      try {
        t =
          ytInitialPlayerResponse.storyboards.playerStoryboardSpecRenderer.spec;
      } catch (e) {}
    }

    !wasdash && dashmanifest && (wasdash = !0);
    var a = {
      config: {
        url: "https://s.ytimg.com/yts/swfbin/player-vfl8Mj1Eu/watch_as3.swf",
        urlV8: "https://s.ytimg.com/yts/swfbin/player-vfl8Mj1Eu/cps.swf",
        urlV9As2: "https://s.ytimg.com/yts/swfbin/player-vfl8Mj1Eu/cps.swf",
        args: {
          author: document
            .querySelector("span[itemprop=author] > link[itemprop=name]")
            .getAttribute("content"),
          dashmpd: dashmanifest,
          focEnabled: "1",
          adaptive_fmts: "",
          account_playback_token: "",
          enablecsi: "0",
          length_seconds: innertuberesponse.videoDetails.lengthSeconds,
          ytfocEnabled: "1",
          remarketing_url: "",
          cos: "Windows",
          uid: "",
          iv_invideo_url: "",
          idpj: "0",
          sourceid: "y",
          vid: innertuberesponse.videoDetails.videoId,
          watermark:
            ",https://s.ytimg.com/yts/img/watermark/youtube_watermark-vflHX6b6E.png,https://s.ytimg.com/yts/img/watermark/youtube_hd_watermark-vflAzLcD6.png",
          avg_rating: "",
          fexp: "908547,914099,927622,930666,930672,932404,934040,940247,940642,947209,947215,949424,951701,952302,952901,953000,953912,957103,957201,958600",
          host_language: "en",
          iv_load_policy: "1",
          token: "1",
          loaderUrl:
            "https://www.youtube.com/watch?v=" +
            innertuberesponse.videoDetails.videoId,
          ptk: "ea",
          baseUrl:
            "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/962985656/",
          cosver: "6.2",
          t: "1",
          oid: "",
          cbrver: yt.config_.INNERTUBE_CONTEXT.client.browserVersion,
          plid: "",
          ptchn: "",
          dash: "1",
          no_get_video_log: "1",
          sdetail: "p:/embed/" + innertuberesponse.videoDetails.videoId,
          tmi: "1",
          storyboard_spec: t,
          vq: "auto",
          atc: "",
          of: "",
          allow_embed: "1",
          url_encoded_fmt_stream_map: "",
          aid: "",
          ucid: document
            .querySelector("meta[itemprop=channelId]")
            .getAttribute("content"),
          cr: "RO",
          timestamp: "1414688781",
          iv_module:
            "https://s.ytimg.com/yts/swfbin/player-vfl8Mj1Eu/iv_module.swf",
          rmktEnabled: "1",
          probe_url:
            "https://www.youtube.com/embed/" +
            innertuberesponse.videoDetails.videoId,
          video_id: innertuberesponse.videoDetails.videoId,
          title: innertuberesponse.videoDetails.title,
          cl: "78766649",
          eventid: "",
          csi_page_type: "watch,watch7",
          hl: "en_US",
          iv3_module: "1",
          sw: "0.1",
          fmt_list: "22/1280x720/9/0/115,18/640x360/9/0/115,17/256x144/99/1/0",
          cbr: yt.config_.INNERTUBE_CONTEXT.client.browserName,
          ytfocHistoryEnabled: "0",
          referrer:
            "https://www.youtube.com/embed/" +
            innertuberesponse.videoDetails.videoId,
          allow_ratings: "1",
          enablejsapi: 0,
          pltype: "content",
          keywords: innertuberesponse.videoDetails.title,
          ldpj: "0",
          c: "WEB",
          view_count: innertuberesponse.videoDetails.viewCount
        },
        assets: {
          css: "//s.ytimg.com/yts/cssbin/www-player-vfluwFMix.css",
          js: "//s.ytimg.com/yts/jsbin/html5player-en_US-vfln6g5Eq/html5player.js",
          html: "chrome-extension://" + v3.id + "/html5_player_template"
        },
        attrs: {
          id: "movie_player"
        },
        params: {
          allowfullscreen: "true",
          allowscriptaccess: "always",
          bgcolor: "#000000"
        },
        minVersion: "8.0.0",
        fallback: null,
        fallbackMessage: null,
        html5: !0,
        disable: {},
        loaded: !0,
        messages: {
          player_fallback: [
            'Adobe Flash Player or an HTML5 supported browser is required for video playback.<br><a href="https://get.adobe.com/flashplayer/">Get the latest Flash Player </a><br><a href="/html5">Learn more about upgrading to an HTML5 browser</a>'
          ]
        }
      }
    };
    (a.config.args.adaptive_fmts = e), (window.ytplayer = a);
    var n = "";

    if (void 0 === streamingdata.hlsManifestUrl) {
      try {
        for (
          i = 0, j = innertuberesponse.streamingData.formats.length;
          i < j;
          i++
        )
          (n +=
            "fallback_host=" +
            innertuberesponse.streamingData.formats[i].url
              .split("://")[1]
              .split(".com")[0] +
            ".com&type=" +
            encodeURIComponent(
              innertuberesponse.streamingData.formats[i].mimeType
            ).replace("%20", "+") +
            "&url=" +
            encodeURIComponent(innertuberesponse.streamingData.formats[i].url) +
            "&quality=" +
            innertuberesponse.streamingData.formats[i].quality +
            "&itag=" +
            innertuberesponse.streamingData.formats[i].itag),
            i < parseInt(innertuberesponse.streamingData.formats.length - 1) &&
              (n += ",");
      } catch (e) {
        console.log("cound not craft legacy stream url");
      }

      ytplayer.config.args.url_encoded_fmt_stream_map = n;
    } else {
      (ytplayer.config.args.live_chunk_readahead = 0),
        (ytplayer.config.args.live_playback = 1),
        (ytplayer.config.args.livestream = 0),
        (ytplayer.config.args.hlsdvr = 0),
        (ytplayer.config.args.hlsvp = streamingdata.hlsManifestUrl),
        (ytplayer.config.args.fmt_list = "");

      try {
        ytplayer.config.args.live_storyboard_spec =
          innertuberesponse.storyboards.playerLiveStoryboardSpecRenderer.spec;
      } catch (e) {}

      (ytplayer.config.args.instream = !0),
        (ytplayer.config.args.instream_long = !0),
        (ytplayer.config.args.streaminglib_module = 1),
        (ytplayer.config.args.pltype = "contentlive"),
        (ytplayer.config.args.ps = "live"),
        (ytplayer.config.args.probe_url = ""),
        (ytplayer.config.args.enable_cardio = 0),
        (ytplayer.config.args.enable_cardio_before_playback = 0);
    }

    ytInitialPlayerResponse.captions &&
      (ytInitialPlayerResponse.captions.playerCaptionsTracklistRenderer.captionTracks[0].name.simpleText.includes(
        "auto-generated"
      ) ||
        (ytplayer.config.args.ttsurl =
          ytInitialPlayerResponse.captions.playerCaptionsRenderer.baseUrl)),
      (ytplayer.config.args.rvs = rvsdata),
      (datawasloaded = !0),
      playerwasloaded && !playerwasinvoked && invokePlayer(),
      console.log("success to load player.");
  }

  function invokePlayer() {
    var e = document.createElement("div");
    e.setAttribute("id", "player-api-ske"),
      e.setAttribute("class", "hid"),
      document.querySelector("body").append(e),
      yt.player.Application.create("player-api-ske", ytplayer.config),
      document
        .querySelector(".html5-video-player")
        .setAttribute("id", "movie_player"),
      document
        .querySelector(".html5-video-player")
        .className.includes("autohide-controls-aspect") &&
        document
          .querySelector(".html5-video-player")
          .classList.remove("autohide-controls-aspect"),
      document.querySelector("body[spftoken]")
        ? (document
            .querySelector("#player-api-ske .html5-video-player")
            .pauseVideo(),
          document
            .querySelector("#player-api-ske .html5-video-player")
            .classList.add("spf" + document.body.getAttribute("spftoken")),
          wasdash &&
            document
              .querySelector("#player-api-ske .html5-video-player")
              .classList.add("legacy-dash"),
          waitForElm(
            ".spfplayer" + document.body.getAttribute("spftoken")
          ).then(function (e) {
            (document.querySelector("#player-api").innerHTML = ""),
              document
                .querySelector("#player-api")
                .append(document.querySelector(".html5-video-player")),
              getCookie("vtpc") &&
                (document
                  .querySelector("#movie_player")
                  .getAvailableQualityLevels()
                  .toString()
                  .includes(getCookie("vtpc"))
                  ? (document
                      .querySelector("#movie_player")
                      .setPlaybackQualityRange(getCookie("vtpc")),
                    document
                      .querySelector("#movie_player")
                      .setPlaybackQuality(getCookie("vtpc")))
                  : (document
                      .querySelector("#movie_player")
                      .setPlaybackQualityRange(
                        document
                          .querySelector("#movie_player")
                          .getAvailableQualityLevels()[0]
                      ),
                    document
                      .querySelector("#movie_player")
                      .setPlaybackQuality(
                        document
                          .querySelector("#movie_player")
                          .getAvailableQualityLevels()[0]
                      ))),
              document.querySelector("#movie_player").playVideo(),
              document.querySelector("#player-api-ske").remove();
          }))
        : document.querySelector("#player-api")
        ? ((document.querySelector("#player-api").innerHTML = ""),
          document
            .querySelector("#player-api")
            .append(document.querySelector(".html5-video-player")),
          getCookie("vtpc") &&
            (document
              .querySelector("#movie_player")
              .getAvailableQualityLevels()
              .toString()
              .includes(getCookie("vtpc"))
              ? (document
                  .querySelector("#movie_player")
                  .setPlaybackQualityRange(getCookie("vtpc")),
                document
                  .querySelector("#movie_player")
                  .setPlaybackQuality(getCookie("vtpc")))
              : (document
                  .querySelector("#movie_player")
                  .setPlaybackQualityRange(
                    document
                      .querySelector("#movie_player")
                      .getAvailableQualityLevels()[0]
                  ),
                document
                  .querySelector("#movie_player")
                  .setPlaybackQuality(
                    document
                      .querySelector("#movie_player")
                      .getAvailableQualityLevels()[0]
                  ))),
          document.querySelector("#movie_player").playVideo(),
          document.querySelector("#player-api-ske").remove())
        : waitForElm("#player-api").then(function (e) {
            (document.querySelector("#player-api").innerHTML = ""),
              document
                .querySelector("#player-api")
                .append(document.querySelector(".html5-video-player")),
              getCookie("vtpc") &&
                (document
                  .querySelector("#movie_player")
                  .getAvailableQualityLevels()
                  .toString()
                  .includes(getCookie("vtpc"))
                  ? (document
                      .querySelector("#movie_player")
                      .setPlaybackQualityRange(getCookie("vtpc")),
                    document
                      .querySelector("#movie_player")
                      .setPlaybackQuality(getCookie("vtpc")))
                  : (document
                      .querySelector("#movie_player")
                      .setPlaybackQualityRange(
                        document
                          .querySelector("#movie_player")
                          .getAvailableQualityLevels()[0]
                      ),
                    document
                      .querySelector("#movie_player")
                      .setPlaybackQuality(
                        document
                          .querySelector("#movie_player")
                          .getAvailableQualityLevels()[0]
                      ))),
              document.querySelector("#movie_player").playVideo(),
              document.querySelector("#player-api-ske").remove();
          });
  }

  function buildErrorScreen() {
    console.log("build error screen"),
      waitForElm("#player-api").then(function (e) {
        var t = "Video unavailable";

        try {
          (t = innertuberesponse.playabilityStatus.reason),
            innertuberesponse.playabilityStatus.reason
              .toLocaleLowerCase()
              .includes("premieres") &&
              document
                .querySelector("body")
                .classList.add("using-innertube-heartbeat"),
            document.querySelector("body").setAttribute("hbr", "wp"),
            document
              .querySelector("body")
              .setAttribute(
                "hba",
                innertuberesponse.heartbeatParams.heartbeatServerData
              );
        } catch (e) {}

        try {
          t =
            innertuberesponse.playabilityStatus.errorScreen
              .playerErrorMessageRenderer.subreason.simpleText;
        } catch (e) {}

        try {
          null == t && (t = innertuberesponse.playabilityStatus.reason);
        } catch (e) {}

        t.toLowerCase().includes("confirm")
          ? (document.querySelector("#player-api").innerHTML =
              '<div id="player-unavailable" class="    with-background    player-width player-height    player-unavailable ">\n          <img class="icon meh" src="//s.ytimg.com/yts/img/meh7-vflGevej7.png" alt="">\n  <div class="content">\n    <h1 id="unavailable-message" class="message">\n            Content Warning\n\n    </h1>\n    <div id="unavailable-submessage" class="submessage">\n              <div id="watch7-player-age-gate-content">\n          <p>This video may be inappropriate for some users.</p>\n\n      <button class=" yt-uix-button yt-uix-button-primary yt-uix-button-size-default" type="button" href="https://accounts.google.com/ServiceLogin?service=youtube&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Dverify_age_streamlined%26hl%3Den%26next%3D%252Fwatch%253Fv%253DMlPh_ycy62s&amp;passive=true&amp;shdf=Cp4BCxILZGVzY3JpcHRpb24aMkl0IHdvdWxkIGJlIGF3ZXNvbWUgaWYgeW91IGNvdWxkIHBsZWFzZSBTdWJzY3JpLi4uDAsSBnJlYXNvbhoBMwwLEgd2aWRlb0lkGgoyNDA0OTA3MzIwDAsSCnZpZGVvVGl0bGUaJ0hhcmxlbSBTaGFrZSBDb21waWxhdGlvbiEgKEJFU1QgVklERU9TKQwSB3lvdXR1YmUaBFNIQTEiFPT6MQfKLgISJ5I3OxthncBZEblbKAEyFP95e22CYyYjv222-YZ0VSobO--X&amp;ltmpl=verifyage&amp;hl=en" onclick=";window.location.href=this.getAttribute(\'href\');return false;" role="button"><span class="yt-uix-button-content">Sign in to confirm your age </span></button>\n  </div>\n\n    </div>\n  </div>\n\n\n  </div>')
          : (document.querySelector("#player-api").innerHTML =
              '<div id="player-unavailable" class="  player-width player-height    player-unavailable ">\n                <img class="icon meh" src="//s.ytimg.com/yts/img/meh7-vflGevej7.png" alt="">\n  <div class="content">\n    <h1 id="unavailable-message" class="message">\n              ' +
              t +
              '\n\n    </h1>\n    <div id="unavailable-submessage" class="submessage">\nSorry about that.\n    </div>\n  </div>\n\n\n    </div>'),
          "CONTENT_CHECK_REQUIRED" ==
            innertuberesponse.playabilityStatus.status &&
            "AGE_CHECK_REQUIRED" ==
              innertuberesponse.playabilityStatus.status &&
            (document.querySelector("#player-api").innerHTML =
              '<div id="player-unavailable" class="    with-background    player-width player-height    player-unavailable ">\n          <img class="icon meh" src="//s.ytimg.com/yts/img/meh7-vflGevej7.png" alt="">\n  <div class="content">\n    <h1 id="unavailable-message" class="message">\n            Content Warning\n\n    </h1>\n    <div id="unavailable-submessage" class="submessage">\n              <div id="watch7-player-age-gate-content">\n          <p>This video may be inappropriate for some users.</p>\n\n      <button class=" yt-uix-button yt-uix-button-primary yt-uix-button-size-default" type="button" onclick="v3ConfirmFriend();" role="button"><span class="yt-uix-button-content">I understand and wish to proceed </span></button>\n  </div>\n\n    </div>\n  </div>\n\n\n  </div>');
      });
  }

  async function getVideoData(e = {}) {
    var t = yt.config_.INNERTUBE_CONTEXT.client.visitorData,
      a = await getSapisidhash();
    return (
      await fetch(
        "https://www.youtube.com/youtubei/v1/next?key=" +
          yt.config_.INNERTUBE_API_KEY,
        {
          credentials: "include",
          headers: _objectSpread(
            _objectSpread(
              _objectSpread(
                {},
                yt.config_.LOGGED_IN && {
                  Authorization: a
                }
              ),
              yt.config_.LOGGED_IN && {
                "X-Goog-AuthUser": "0"
              }
            ),
            {},
            {
              "Content-Type": "application/json",
              Origin: "https://www.youtube.com",
              "X-Youtube-Client-Name": "3",
              "X-Youtube-Client-Version": "15.02",
              "X-GOOG-VISITOR-ID": t
            },
            !!yt.config_.DELEGATED_SESSION_ID && {
              "X-Goog-PageId": yt.config_.DELEGATED_SESSION_ID
            }
          ),
          referrer: "https://www.youtube.com",
          body:
            '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "ANDROID",\r\n\t\t\t"clientVersion": "15.02",\r\n\t\t\t"hl": "en"\r\n\t\t}\r\n\t},\r\n\t"videoId": "' +
            innertubevideoid +
            '",\r\n}\r\n',
          method: "POST",
          mode: "cors"
        }
      )
    ).json();
  }

  async function getVideo2Data(e = {}) {
    var t = yt.config_.INNERTUBE_CONTEXT.client.visitorData,
      a = await getSapisidhash();
    return (
      await fetch(
        "https://www.youtube.com/youtubei/v1/next?key=" +
          yt.config_.INNERTUBE_API_KEY,
        {
          credentials: "include",
          headers: _objectSpread(
            _objectSpread(
              _objectSpread(
                {},
                yt.config_.LOGGED_IN && {
                  Authorization: a
                }
              ),
              yt.config_.LOGGED_IN && {
                "X-Goog-AuthUser": "0"
              }
            ),
            {},
            {
              "Content-Type": "application/json",
              Origin: "https://www.youtube.com",
              "X-Youtube-Client-Name": "1",
              "X-Youtube-Client-Version":
                yt.config_.INNERTUBE_CONTEXT_CLIENT_VERSION,
              "X-GOOG-VISITOR-ID": t
            },
            !!yt.config_.DELEGATED_SESSION_ID && {
              "X-Goog-PageId": yt.config_.DELEGATED_SESSION_ID
            }
          ),
          referrer: "https://www.youtube.com",
          body:
            '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
            yt.config_.INNERTUBE_CONTEXT_CLIENT_VERSION +
            '",\r\n\t\t\t"hl": "en"\r\n\t\t}\r\n\t},\r\n\t"videoId": "' +
            innertubevideoid +
            '",\r\n}\r\n',
          method: "POST",
          mode: "cors"
        }
      )
    ).json();
  }

  function v3AgeRestrictFriend() {
    !(async function () {
      var e = await getVideoData().then((t) => {
        e = t;

        try {
          var a =
            e.contents.singleColumnWatchNextResults.results.results.contents[1]
              .shelfRenderer.content.horizontalListRenderer.items;
          document.querySelector("#watch-related").innerHTML =
            craftRecomsMApi(a);
        } catch (e) {
          document.querySelector("#watch-related").innerHTML = "";
        }
      });
    })();
  }

  function v3ChannelFriend() {
    1 == authinfo.LOGGED_IN &&
      (async function () {
        var e = await getVideo2Data().then((t) => {
          (e = t),
            console.log(e),
            (c3video.likeParam =
              e.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].toggleButtonRenderer.defaultServiceEndpoint.commandExecutorCommand.commands[1].likeEndpoint.likeParams),
            (c3video.unlikeParam =
              e.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].toggleButtonRenderer.toggledServiceEndpoint.likeEndpoint.removeLikeParams),
            (c3video.dislikeParam =
              e.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[1].toggleButtonRenderer.defaultServiceEndpoint.commandExecutorCommand.commands[1].likeEndpoint.dislikeParams),
            (c3video.undislikeParam =
              e.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[1].toggleButtonRenderer.toggledServiceEndpoint.likeEndpoint.removeLikeParams),
            (c3video.videoId = innertubevideoid),
            (c3video.isLiked =
              e.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].toggleButtonRenderer.isToggled),
            (c3video.isDisliked =
              e.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[1].toggleButtonRenderer.isToggled);

          try {
            (c3video.sentimentBarProcent =
              e.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.sentimentBar.sentimentBarRenderer.percentIfIndifferent),
              (c3video.sentimentBarProcentLike =
                e.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.sentimentBar.sentimentBarRenderer.percentIfLiked),
              (c3video.sentimentBarProcentDislike =
                e.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.sentimentBar.sentimentBarRenderer.percentIfDisliked);
          } catch (e) {
            (c3video.sentimentBarProcent = 100),
              (c3video.sentimentBarProcentLike = 100),
              (c3video.sentimentBarProcentDislike = 100);
          }

          var a;
          console.log(e),
            (a =
              '<div class="html5-info-panel-loading-icon"><canvas width="30" height="30" class="html5-info-panel-loader" style="display: none;" aria-hidden="true"></canvas></div><div class="html5-info-panel-content"><div><div class="html5-author-img"><img src="' +
              document.querySelector(".channel-thumb img").src +
              '"></div><div class="html5-author-info"><div class="html5-author-name">' +
              document.querySelector(".qualified-channel-title-text")
                .innerText +
              '</div></div><div class="html5-subscribe-button-container">' +
              document.querySelector(".yt-uix-button-subscription-container")
                .outerHTML +
              '  <span class="yt-subscription-button-disabled-mask" title=""></span>\n</span></div></div><div><div class="html5-video-info"><div class="html5-view-count">' +
              document.querySelector(".view-count-and-actions .count")
                .innerText +
              '</div><div class="ytp-sentiment-display"><div class="ytp-sentiment-bar"><div class="ytp-sentiment-bar-likes" style="width: ' +
              c3video.sentimentBarProcent +
              '%;"></div><div class="ytp-sentiment-bar-dislikes" style="width: ' +
              parseInt(100 - c3video.sentimentBarProcent) +
              '%;"></div></div></div></div><p class="html5-description-text" dir="auto"></p></div></div>'),
            (document.querySelector(".html5-info-panel").innerHTML = a),
            document
              .querySelector("#movie_player")
              .classList.add("autohide-controls"),
            (document.querySelector(".ytp-button-share").onclick = function () {
              window.location =
                document
                  .querySelector(".channels-featured-video-details a")
                  .href.replace("watch?v", "watch/video?v") + "&panel=share";
            }),
            document.querySelector(".hide-info-bar") &&
              document
                .querySelector(".html5-video-player")
                .classList.remove("hide-info-bar");
          var n = document.createElement("div");
          n.setAttribute("id", "ytdata-temp-container1"),
            n.setAttribute("style", "display:none;"),
            document.querySelector("body").append(n),
            (document.querySelector("#ytdata-temp-container1").innerHTML =
              JSON.stringify(c3video));
        });
      })();
  }

  mission && null == yt.config_.INNERTUBE_API_KEY && location.reload(),
    grabPlayerData();
}

async function registerYtWatchHistory() {
  var e = document.querySelector("#movie_player").getVideoData().cpn,
    t = "0";

  try {
    t = innertuberesponse.playbackTracking.videostatsPlaybackUrl.baseUrl
      .split("subscribed=")[1]
      .split("&")[0];
  } catch (e) {}

  var a =
    "https://www.youtube.com/api/stats/playback?ns=yt&el=detailpage&cpn=" +
    e +
    "&docid=" +
    window.location.href.split("?v=")[1].split("&")[0] +
    "&ver=2&cmt=0.004&ei=" +
    innertuberesponse.playbackTracking.videostatsPlaybackUrl.baseUrl
      .split("ei=")[1]
      .split("&")[0] +
    "&fmt=242&fs=0&rt=2.445&of=" +
    innertuberesponse.playbackTracking.videostatsPlaybackUrl.baseUrl
      .split("of=")[1]
      .split("&")[0] +
    "&euri&lact=2475&cl=" +
    innertuberesponse.playbackTracking.videostatsPlaybackUrl.baseUrl
      .split("cl=")[1]
      .split("&")[0] +
    "&mos=0&vm=" +
    innertuberesponse.playbackTracking.videostatsPlaybackUrl.baseUrl
      .split("vm=")[1]
      .split("&")[0] +
    "&volume=100&subscribed=" +
    t +
    "&cbrand=generic&cbr=Chrome&cbrver=86.0.4240.198&c=WEB&cver=2.20211026.11.00&cplayer=UNIPLAYER&cos=Windows&cosver=6.2&cplatform=DESKTOP&hl=en_US&cr=RO&len=" +
    innertuberesponse.playbackTracking.videostatsPlaybackUrl.baseUrl
      .split("len=")[1]
      .split("&")[0] +
    "&fexp=23858057%2C23983296%2C23986019%2C24001373%2C24002022%2C24002025%2C24004644%2C24007246%2C24064555%2C24067673%2C24080738%2C24082661%2C24094946%2C24101841%2C24102120%2C24108113%2C24115586%2C24116772&rtn=9&afmt=251&muted=0&cc=";
  await fetch(a, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    redirect: "follow"
  });
}

function craftRecomsMApi(e) {
  var t = "";

  try {
    for (i = 0, j = e.length; i < j; i++) {
      var a = "",
        n = "";

      try {
        n = e[i].gridVideoRenderer.lengthText.runs[0].text;
      } catch (e) {}

      0 == i &&
        ((e[i].gridVideoRenderer.viewCountText.runs[0].text =
          e[i].gridVideoRenderer.viewCountText.runs[0].text.split(" ")[0]),
        (a =
          '<span class="stat alt badge">  <span class="yt-badge ">Featured</span>\n\t\t\t\t</span>'));

      try {
        "Funk e ton" == e[i].gridVideoRenderer.shortBylineText.runs[0].text &&
          (e[i].gridVideoRenderer.shortBylineText.runs[0].text =
            "djtomproductions"),
          void 0 !== e[i].gridVideoRenderer &&
            (t +=
              '<li class="video-list-item related-list-item"><a href="/watch/video?v=' +
              e[i].gridVideoRenderer.navigationEndpoint.watchEndpoint.videoId +
              '&v3cv=1&app=true" class="related-video yt-uix-contextlink  yt-uix-sessionlink" data-sessionlink=""><span class="ux-thumb-wrap contains-addto ">    <span class="video-thumb  yt-thumb yt-thumb-120">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <img alt="" data-thumb="' +
              e[i].gridVideoRenderer.thumbnail.thumbnails[0].url +
              '" src="' +
              e[i].gridVideoRenderer.thumbnail.thumbnails[0].url +
              '" width="120" data-group-key="thumb-group-0">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
              n +
              '</span>\n\n  <button class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" title="Watch Later" type="button" onclick=";return false;" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
              e[i].gridVideoRenderer.videoId +
              '" role="button"><span class="yt-uix-button-content">  <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</span><span dir="ltr" class="title" title="' +
              e[i].gridVideoRenderer.title.runs[0].text +
              '">' +
              e[i].gridVideoRenderer.title.runs[0].text +
              '</span><span class="stat attribution"><span class="g-hovercard" data-ytid="" data-name="watch-vrec">by <b><span class="g-hovercard" data-ytid="">' +
              e[i].gridVideoRenderer.shortBylineText.runs[0].text +
              "</span></b></span></span>" +
              a +
              '<span class="stat view-count">' +
              e[i].gridVideoRenderer.viewCountText.runs[0].text +
              "</span></a></li>");
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log(e);
  }

  return t;
}

async function v3ConfirmFriend() {
  await (async function (e) {
    var t, a, n;
    (n = yt.config_.LOGGED_IN),
      (t = yt.config_.INNERTUBE_API_KEY),
      (a = yt.config_.DELEGATED_SESSION_ID),
      yt.config_.INNERTUBE_CONTEXT_CLIENT_VERSION;
    var i = await getSapisidhash();
    return (
      await fetch("https://www.youtube.com/youtubei/v1/verify_age?key=" + t, {
        credentials: "include",
        headers: _objectSpread(
          _objectSpread(
            _objectSpread(
              {},
              n && {
                Authorization: i
              }
            ),
            n && {
              "X-Goog-AuthUser": "0"
            }
          ),
          {},
          {
            "Content-Type": "application/json",
            Origin: "https://www.youtube.com",
            "X-Youtube-Client-Name": "3",
            "X-Youtube-Client-Version": "15.02",
            "X-GOOG-VISITOR-ID": ""
          },
          !!a && {
            "X-Goog-PageId": a
          }
        ),
        referrer: "https://www.youtube.com",
        body:
          '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "ANDROID",\r\n\t\t\t"clientVersion": "15.02",\r\n\t\t\t"hl": "en"\r\n\t\t}\r\n\t},\r\n\t"nextEndpoint":{"urlEndpoint":{"url":"/watch?v=' +
          window.location.href.split("v=")[1].split("&")[0] +
          '"}},"setControvercy":true,\r\n}\r\n',
        method: "POST",
        mode: "cors"
      })
    ).json();
  })().then((e) => {
    console.log(e),
      (window.location =
        "https://www.youtube.com" +
        e.actions[0].navigateAction.endpoint.urlEndpoint.url +
        "&confirmed_watcher=1");
  });
}

function getSapisidhash() {
  class e {
    static hash(t, a) {
      const n = Object.assign(
        {
          msgFormat: "string",
          outFormat: "hex"
        },
        a
      );

      switch (n.msgFormat) {
        default:
        case "string":
          t = (function (e) {
            try {
              return new TextEncoder()
                .encode(e, "utf-8")
                .reduce((e, t) => e + String.fromCharCode(t), "");
            } catch (t) {
              return unescape(encodeURIComponent(e));
            }
          })(t);

          break;

        case "hex-bytes":
          t = (function (e) {
            const t = e.replace(" ", "");
            return "" == t
              ? ""
              : t
                  .match(/.{2}/g)
                  .map((e) => String.fromCharCode(parseInt(e, 16)))
                  .join("");
          })(t);
      }

      const i = [1518500249, 1859775393, 2400959708, 3395469782],
        r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        o = (t += String.fromCharCode(128)).length / 4 + 2,
        s = Math.ceil(o / 16),
        l = new Array(s);

      for (let e = 0; e < s; e++) {
        l[e] = new Array(16);

        for (let a = 0; a < 16; a++)
          l[e][a] =
            (t.charCodeAt(64 * e + 4 * a + 0) << 24) |
            (t.charCodeAt(64 * e + 4 * a + 1) << 16) |
            (t.charCodeAt(64 * e + 4 * a + 2) << 8) |
            (t.charCodeAt(64 * e + 4 * a + 3) << 0);
      }

      (l[s - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
        (l[s - 1][14] = Math.floor(l[s - 1][14])),
        (l[s - 1][15] = (8 * (t.length - 1)) & 4294967295);

      for (let t = 0; t < s; t++) {
        const a = new Array(80);

        for (let e = 0; e < 16; e++) a[e] = l[t][e];

        for (let t = 16; t < 80; t++)
          a[t] = e.ROTL(a[t - 3] ^ a[t - 8] ^ a[t - 14] ^ a[t - 16], 1);

        let n = r[0],
          o = r[1],
          s = r[2],
          c = r[3],
          d = r[4];

        for (let t = 0; t < 80; t++) {
          const r = Math.floor(t / 20),
            l = (e.ROTL(n, 5) + e.f(r, o, s, c) + d + i[r] + a[t]) >>> 0;
          (d = c), (c = s), (s = e.ROTL(o, 30) >>> 0), (o = n), (n = l);
        }

        (r[0] = (r[0] + n) >>> 0),
          (r[1] = (r[1] + o) >>> 0),
          (r[2] = (r[2] + s) >>> 0),
          (r[3] = (r[3] + c) >>> 0),
          (r[4] = (r[4] + d) >>> 0);
      }

      for (let e = 0; e < r.length; e++)
        r[e] = ("00000000" + r[e].toString(16)).slice(-8);

      const c = "hex-w" == n.outFormat ? " " : "";
      return r.join(c);
    }

    static f(e, t, a, n) {
      switch (e) {
        case 0:
          return (t & a) ^ (~t & n);

        case 1:
        case 3:
          return t ^ a ^ n;

        case 2:
          return (t & a) ^ (t & n) ^ (a & n);
      }
    }

    static ROTL(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
  }

  return (
    (t = Math.round(new Date() / 1e3)),
    (a = (function (e) {
      for (
        var t = "SAPISID=",
          a = decodeURIComponent(document.cookie).split(";"),
          n = 0;
        n < a.length;
        n++
      ) {
        for (var i = a[n]; " " == i.charAt(0); ) i = i.substring(1);

        if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
      }

      return "";
    })()),
    "SAPISIDHASH " + t + "_" + e.hash(t + " " + a + " https://www.youtube.com")
  );
  var t, a;
}
