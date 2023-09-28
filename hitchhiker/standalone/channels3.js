if (
  !window.location.href.includes("studio.youtube.com") &&
  ((window.location.href.includes("/channel/") &&
    !window.location.href.includes("v3cv=0")) ||
    (window.location.href.includes("/user/") &&
      !window.location.href.includes("v3cv=0")) ||
    (window.location.href.includes("/c/") &&
      !window.location.href.includes("v3cv=0")))
) {
  function waitForElm(e) {
    return new Promise((t) => {
      if (document.querySelector(e)) return t(document.querySelector(e));
      const n = new MutationObserver((a) => {
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

  v3.htmlBuilderConfig.core.NIRVANA && (v3.htmlBuilderConfig.core.NIRVANA = !1),
    softChangeUrl(window.location.href.replace("&app=true", ""), !0);
  var userpicture,
    authordefaulturl,
    authoravatar,
    authorchannelname,
    authorurl,
    subscribedtoauthor,
    subscribecount,
    authorjoindate,
    featurechannelspath,
    authoruserid,
    haserror,
    errorreason,
    isverified,
    isownchannel,
    ytdata = {},
    authinfo = {};

  function v3ChannelPage() {
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
        .setAttribute("class", v3.htmlBuilderConfig.channels3),
      document.body.classList.add("exp-fixed-masthead"),
      document.querySelector("body").setAttribute("v3notplaylist", ""),
      document.querySelector("body").setAttribute("data-player-size", "small"),
      document.querySelector("body").setAttribute("use-v3-proportion", ""),
      useverbose &&
        console.log(
          "%c[v3experimentalcode]",
          "color: #8A2BE2",
          " DEBUG : detected v3 channel test page"
        );
    var e = document.createElement("div");
    e.setAttribute("id", "ytdata-temp-container"),
      e.setAttribute("style", "display:none;"),
      document.querySelector("body").append(e),
      $("body").append(
        '<script>document.querySelector("#ytdata-temp-container").innerHTML = JSON.stringify(ytInitialData);</script>'
      ),
      (ytdata = document.querySelector("#ytdata-temp-container").innerHTML),
      (ytdata = JSON.parse(ytdata));
    var t = document.createElement("div");
    t.setAttribute("id", "ytauthdata-temp-container"),
      t.setAttribute("style", "display:none;"),
      document.querySelector("body").append(t),
      $("body").append(
        '<script>var authinfo = {};\r\nauthinfo.INNERTUBE_API_KEY = yt.config_.INNERTUBE_API_KEY;\r\nauthinfo.INNERTUBE_CONTEXT = yt.config_.INNERTUBE_CONTEXT;\r\nauthinfo.INNERTUBE_CONTEXT_CLIENT_VERSION = yt.config_.INNERTUBE_CONTEXT_CLIENT_VERSION;\r\nauthinfo.LOGGED_IN = yt.config_.LOGGED_IN;\r\nauthinfo.DELEGATED_SESSION_ID = yt.config_.DELEGATED_SESSION_ID;\r\nauthinfo.HL = yt.config_.HL;\r\nauthinfo.GL = yt.config_.GL;\r\nauthinfo.VISITOR_DATA = yt.config_.VISITOR_DATA; authinfo.playerVersion = yt.config_.WEB_PLAYER_CONTEXT_CONFIGS.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_CHANNEL_TRAILER.cssUrl.split("/")[3]; \r\ndocument.querySelector("#ytauthdata-temp-container").innerHTML = JSON.stringify(authinfo);</script>'
      ),
      (authinfo = JSON.parse(
        document.querySelector("#ytauthdata-temp-container").innerHTML
      )),
      parseYtData(ytdata),
      1 == authinfo.LOGGED_IN &&
        (getGuideDataCh(),
        document.querySelector("body").classList.add("user-logged-in"),
        (gbarname = v3.UIMSG[v3.nationIndex].GBAR_INFO_MY_ACCOUNT));
    var n = document.createElement("div");
    n.setAttribute("id", "body-container"),
      document.querySelector("body").prepend(n),
      buildPageFrame(),
      0 == haserror
        ? buildChannel()
        : (createGb(), (document.title = "Error - YouTube TUDO2")),
      v3mainfriend(),
      document.querySelector("#ytauthdata-temp-container").remove(),
      document.querySelector("#ytdata-temp-container").remove();
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
    if (
      (e.header.c4TabbedHeaderRenderer.editChannelButtons &&
        (isownchannel = !0),
      1 == authinfo.LOGGED_IN,
      e.alerts)
    )
      "ERROR" == e.alerts[0].alertRenderer.type &&
        ((haserror = !0),
        (errorreason = e.alerts[0].alertRenderer.text.simpleText));
    else {
      (haserror = !1),
        (authordefaulturl =
          "https://" +
          e.microformat.microformatDataRenderer.linkAlternates[0].hrefUrl.split(
            "/m."
          )[1]),
        (authoravatar =
          e.header.c4TabbedHeaderRenderer.avatar.thumbnails[0].url),
        (authorchannelname = e.header.c4TabbedHeaderRenderer.title),
        (authorurl = e.metadata.channelMetadataRenderer.channelUrl);

      try {
        (isverified = !1),
          e.header.c4TabbedHeaderRenderer.badges && (isverified = !0);
      } catch (e) {}

      try {
        subscribedtoauthor =
          e.header.c4TabbedHeaderRenderer.subscribeButton
            .subscribeButtonRenderer.subscribed;
      } catch (e) {}

      try {
        subscribecount =
          e.header.c4TabbedHeaderRenderer.subscriberCountText.simpleText.split(
            " "
          )[0];
      } catch (e) {
        subscribecount = "";
      }

      authorjoindate = "Static";

      try {
        featurechannelspath =
          e.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.find(
            isChannelFeatureCont
          );
      } catch (e) {}

      try {
        authoruserid = e.metadata.channelMetadataRenderer
          .doubleclickTrackingUsername
          ? e.metadata.channelMetadataRenderer.doubleclickTrackingUsername
          : e.metadata.channelMetadataRenderer.vanityChannelUrl.split("/")[4];
      } catch (e) {
        authoruserid = authorurl.split("/")[4];
      }

      getAboutUser(),
        window.location.href.includes("/videos") ||
          window.location.href.includes("/playlists") ||
          (getCookie("vtcf")
            ? getFeaturedPopularVideoUser(
                parseInt(getCookie("vtcf").split("f=")[1].split(",")[0])
              )
            : getFeaturedPopularVideoUser(0));
    }
  }

  function v3mainfriend() {
    var e = new Date().getTime();
    console.log("Page have loaded in", e - before_loadtime, "ms"),
      changeFavicon(chrome.extension.getURL("/images/favicon2.png"));
    window.performance.timing.domContentLoadedEventEnd,
      window.performance.timing.navigationStart;

    if (
      (1 != authinfo.LOGGED_IN ||
        ytdata.header.c4TabbedHeaderRenderer.editChannelButtons ||
        0 != haserror ||
        ((document.querySelector(
          ".yt-uix-button-subscription-container > button.yt-uix-button"
        ).onclick = function () {
          document.querySelector(
            ".yt-uix-button-subscription-container > button.yt-uix-button.yt-uix-button-subscribed-branded"
          )
            ? (v3.innerTube.unsubscribe(
                ytdata.header.c4TabbedHeaderRenderer.subscribeButton
                  .subscribeButtonRenderer.channelId,
                ytdata.header.c4TabbedHeaderRenderer.subscribeButton
                  .subscribeButtonRenderer.onUnsubscribeEndpoints[0]
                  .signalServiceEndpoint.actions[0].openPopupAction.popup
                  .confirmDialogRenderer.confirmButton.buttonRenderer
                  .serviceEndpoint.unsubscribeEndpoint.params
              ),
              document
                .querySelector(
                  ".yt-uix-button-subscription-container > button.yt-uix-button"
                )
                .classList.remove("yt-uix-button-subscribed-branded"),
              document
                .querySelector(
                  ".yt-uix-button-subscription-container > button.yt-uix-button"
                )
                .classList.add("yt-uix-button-subscribe-branded"))
            : (v3.innerTube.subscribe(
                ytdata.header.c4TabbedHeaderRenderer.subscribeButton
                  .subscribeButtonRenderer.channelId,
                ytdata.header.c4TabbedHeaderRenderer.subscribeButton
                  .subscribeButtonRenderer.onSubscribeEndpoints[0]
                  .subscribeEndpoint.params
              ),
              document
                .querySelector(
                  ".yt-uix-button-subscription-container > button.yt-uix-button"
                )
                .classList.remove("yt-uix-button-subscribe-branded"),
              document
                .querySelector(
                  ".yt-uix-button-subscription-container > button.yt-uix-button"
                )
                .classList.add("yt-uix-button-subscribed-branded"));
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
        craftChannelSubscribePreference()),
      window.location.href.includes("/videos"))
    ) {
      var t =
          '<ul>\n              <li>\n    <a href="' +
          authorurl +
          '/videos?view=0&sort=p&flow=grid" class="yt-uix-button-menu-item">\n      <span class="browse-view-option-check "><img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"></span>\n      Most popular\n    </a>\n  </li>\n\n      <li>\n    <a href="' +
          authorurl +
          '/videos?view=0&sort=da&flow=grid" class="yt-uix-button-menu-item">\n      <span class="browse-view-option-check "><img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"></span>\n      Date added (oldest - newest)\n    </a>\n  </li>\n\n      <li>\n    <a href="' +
          authorurl +
          '/videos?view=0&sort=dd&flow=grid" class="yt-uix-button-menu-item">\n      <span class="browse-view-option-check "><img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"></span>\n      Date added (newest - oldest)\n    </a>\n  </li>\n\n\n    </ul>',
        n = document.createElement("div");
      n.setAttribute(
        "class",
        "v3-upload-view channel-nav-item-dropdown yt-uix-button-menu yt-uix-button-menu-external"
      ),
        n.setAttribute(
          "style",
          "min-width: 68px; left: 867.563px; top: 251px;"
        ),
        (n.innerHTML = t),
        (document.querySelector(
          ".yt-uix-button-text.channels-browse-options"
        ).onclick = function () {
          document.querySelector(".v3-upload-view")
            ? (document.querySelector(".v3-upload-view").remove(),
              document
                .querySelector(".yt-uix-button-text.channels-browse-options")
                .classList.remove("yt-uix-button-active"))
            : (document.querySelector("body").append(n),
              n.setAttribute(
                "style",
                "min-width: 68px; left: " +
                  Math.round(
                    document
                      .querySelector("#browse-view-options")
                      .getBoundingClientRect().left - 174
                  ).toString() +
                  "px; top: " +
                  (
                    document
                      .querySelector("#browse-view-options")
                      .getBoundingClientRect().top + 27
                  ).toString() +
                  "px;"
              ),
              document
                .querySelector(".yt-uix-button-text.channels-browse-options")
                .classList.add("yt-uix-button-active"));
        }),
        (document.querySelector(
          ".yt-uix-button-text.channels-browse-options"
        ).onblur = function () {
          setTimeout(function () {
            document.querySelector(".v3-upload-view").remove();
          }, 200);
        });
    }

    var a = document.createElement("script");
    (a.src = chrome.extension.getURL("hitchhiker/common/searchbox_service.js")),
      (a.onload = function () {
        console.log("search load"), v3SearchFriend();
      }),
      document.head.appendChild(a);
  }

  function craftChannelSubscribePreference() {
    function e(e) {
      try {
        return (
          e.menuServiceItemRenderer.text.simpleText.toLowerCase() ==
          n.toLowerCase()
        );
      } catch (e) {
        return !1;
      }
    }

    var t = "",
      n = "",
      a = "Personalized";

    try {
      a =
        ytdata.header.c4TabbedHeaderRenderer.subscribeButton.subscribeButtonRenderer.notificationPreferenceButton.subscriptionNotificationToggleButtonRenderer.command.commandExecutorCommand.commands[0].openPopupAction.popup.menuPopupRenderer.items.find(
          isChosenNotification
        ).menuServiceItemRenderer.text.simpleText;
    } catch (e) {}

    var r =
      '<div class="yt-dialog hid" id="v3subscribersetting">\n    <div class="yt-dialog-base">\n      <span class="yt-dialog-align"></span>\n      <div class="yt-dialog-fg">\n        <div class="yt-dialog-fg-content">\n            <div class="yt-dialog-header">\n                  <button onclick=";return false;" type="button" class="  yt-dialog-dismiss yt-dialog-close yt-uix-button yt-uix-button-default yt-uix-button-size-default" data-action="close" role="button"><span class="yt-uix-button-content">Close </span></button>\n\n                <h2 class="yt-dialog-title">\n                        Channel subscription setting\n\n\n                </h2>\n            </div>\n          <div class="yt-dialog-loading">\n              <div class="yt-dialog-waiting-content">\n    <div class="yt-spinner-img"></div><div class="yt-dialog-waiting-text">Loading...</div>\n  </div>\n\n          </div>\n          <div class="yt-dialog-content">\n              <p style="margin-bottom:7px;">\nPlease choose how to receive notifications from <b>' +
      authorchannelname +
      '</b> \n\n</p>\n\n    <p class="yt" style="margin-top:10px;">\n      <label class="yt-uix-form-label">\nNotifications:<br>\n        <span class="yt-uix-form-input-select"><span class="yt-uix-form-input-select-content"><img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-form-input-select-arrow"><span class="yt-uix-form-input-select-value">\n' +
      a +
      '\n  </span></span><select class="yt-uix-form-input-select-element eow-privacy-select" name="privacy">  <option value="all">\nAll\n  </option>\n  <option value="personalized" selected="">\nPersonalized\n  </option>\n    <option value="none">\nNone\n    </option>\n</select></span>\n      </label>\n    </p>\n  <div class="yt-uix-overlay-actions">\n    \n    <button onclick=";return false;" type="button" class="yt-uix-overlay-close yt-uix-button yt-uix-button-primary yt-uix-button-size-default" role="button"><span class="yt-uix-button-content">Select </span></button>\n  </div>\n\n          </div>\n          <div class="yt-dialog-working">\n              <div id="yt-dialog-working-overlay">\n  </div>\n  <div id="yt-dialog-working-bubble">\n    <div class="yt-dialog-waiting-content">\n      <div class="yt-spinner-img"></div><div class="yt-dialog-waiting-text">Working...</div>\n    </div>\n  </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\t\t\t</div>';
    document.querySelector("#page").insertAdjacentHTML("beforeend", r),
      (document.querySelector(
        ".yt-uix-subscription-preferences-button"
      ).onclick = function () {
        document.querySelector("#v3subscribersetting").classList.remove("hid"),
          (t = document.querySelector(
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
        t.toLowerCase() !=
          document
            .querySelector(
              "#v3subscribersetting .yt-uix-form-input-select-value"
            )
            .innerText.toLowerCase() &&
          v3.innerTube.subscriptionNotification(
            ytdata.header.c4TabbedHeaderRenderer.subscribeButton.subscribeButtonRenderer.notificationPreferenceButton.subscriptionNotificationToggleButtonRenderer.command.commandExecutorCommand.commands[0].openPopupAction.popup.menuPopupRenderer.items.find(
              e
            ).menuServiceItemRenderer.serviceEndpoint
              .modifyChannelNotificationPreferenceEndpoint.params
          ),
          document.querySelector("#v3subscribersetting").classList.add("hid");
      });
  }

  async function getGuideDataCh() {
    var e =
        '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
        authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
        '",\r\n\t\t\t"hl": "' +
        authinfo.HL +
        '"\r\n\t\t}\r\n\t}}\r\n',
      t = await v3.innerTube
        .AJAX(
          "notification/get_unseen_count?",
          e,
          "1",
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
        )
        .then((e) => {
          void 0 !==
            (t = e).actions[0].updateNotificationsUnseenCountAction
              .unseenCount &&
            (document
              .querySelector("#yt-masthead-user #sb-button-notify")
              .classList.remove("sb-notif-off"),
            document
              .querySelector("#yt-masthead-user #sb-button-notify")
              .classList.add("sb-notif-on"),
            (document.querySelector(
              "#yt-masthead-user .sb-notif-on .yt-uix-button-content"
            ).innerHTML =
              t.actions[0].updateNotificationsUnseenCountAction.unseenCount));
        });
  }

  function isAboutSection(e) {
    try {
      if ("About" == e.tabRenderer.title) return !0;
    } catch (e) {
      return !1;
    }
  }

  function getAboutUser() {
    const e = new XMLHttpRequest();
    e.open(
      "GET",
      "https://www.youtube.com/channel/" +
        authorurl.split("/")[4] +
        "/about?hl=en&persist_hl=1"
    ),
      e.send(),
      (e.onload = () => {
        (window.location.href.includes("/videos") ||
          window.location.href.includes("/playlists")) &&
          document.querySelector("html").setAttribute("c3loaded", "");
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

        try {
          var n =
            t.contents.twoColumnBrowseResultsRenderer.tabs.find(isAboutSection);
          console.log(n);

          try {
            channelinfo =
              n.tabRenderer.content.sectionListRenderer.contents[0]
                .itemSectionRenderer.contents[0]
                .channelAboutFullMetadataRenderer.description.simpleText;
            var a =
              '<div class="user-profile-item profile-description">\n              <p>' +
              channelinfo +
              "</p>\n\n\n        </div>";
            document.querySelector(
              ".profile-view-module .section.first"
            ).innerHTML += a;
          } catch (e) {
            console.log(e);
          }

          try {
            document.querySelector(
              "#branded-page-header-container .header-stats .stat-entry:last-of-type .stat-value"
            ).innerHTML = n.tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].channelAboutFullMetadataRenderer.viewCountText.simpleText
              .replace(/[^0-9.]/g, "")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          } catch (e) {
            console.log(e);
          }

          try {
            document.querySelector(
              ".profile-view-module .created-by-section .user-profile-item .value"
            ).innerHTML =
              n.tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].channelAboutFullMetadataRenderer.joinedDateText.runs[1].text;
          } catch (e) {
            console.log(e);
          }

          try {
            void 0 !==
              n.tabRenderer.content.sectionListRenderer.contents[0]
                .itemSectionRenderer.contents[0]
                .channelAboutFullMetadataRenderer.country &&
              (document.querySelector(
                ".module-view.profile-view-module"
              ).innerHTML +=
                '<ul class="section">\n        <li class="user-profile-item ">\n        <span class="item-name">Country</span>\n      <span class="value">' +
                n.tabRenderer.content.sectionListRenderer.contents[0]
                  .itemSectionRenderer.contents[0]
                  .channelAboutFullMetadataRenderer.country.simpleText +
                "</span>\n    </li>\n\n  </ul>");
          } catch (e) {
            console.log(e);
          }

          try {
            if (
              n.tabRenderer.content.sectionListRenderer.contents[0]
                .itemSectionRenderer.contents[0]
                .channelAboutFullMetadataRenderer.primaryLinks.length > 0
            ) {
              var r = "";

              for (
                i = 0,
                  j =
                    n.tabRenderer.content.sectionListRenderer.contents[0]
                      .itemSectionRenderer.contents[0]
                      .channelAboutFullMetadataRenderer.primaryLinks.length;
                i < j;
                i++
              )
                r +=
                  '<div class="yt-c3-profile-custom-url field-container ">\n    <a href="' +
                  decodeURIComponent(
                    n.tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].channelAboutFullMetadataRenderer.primaryLinks[
                      i
                    ].navigationEndpoint.urlEndpoint.url.split("q=")[1]
                  ) +
                  '" rel="me nofollow" target="_blank" title="' +
                  n.tabRenderer.content.sectionListRenderer.contents[0]
                    .itemSectionRenderer.contents[0]
                    .channelAboutFullMetadataRenderer.primaryLinks[i].title
                    .simpleText +
                  '" class="yt-uix-redirect-link">\n        <img src="' +
                  n.tabRenderer.content.sectionListRenderer.contents[0]
                    .itemSectionRenderer.contents[0]
                    .channelAboutFullMetadataRenderer.primaryLinks[i].icon
                    .thumbnails[0].url +
                  '" class="favicon" alt="">\n      <span class="link-text">\n        ' +
                  n.tabRenderer.content.sectionListRenderer.contents[0]
                    .itemSectionRenderer.contents[0]
                    .channelAboutFullMetadataRenderer.primaryLinks[i].title
                    .simpleText +
                  "\n      </span>\n    </a>\n  </div>";

              var o = '<div class="user-profile-item">' + r + "</div>";
              document.querySelector(
                ".profile-view-module .section.first"
              ).innerHTML += o;
            }
          } catch (e) {
            console.log(e);
          }
        } catch (e) {
          console.log(e);
        }
      });
  }

  waitForElm2("body[data-loaded]").then(function (e) {
    v3ChannelPage();
  });
  var c3video = {};

  function getFeaturedPopularVideoUser(e) {
    var t = "Popular videos",
      n = "PU";
    if (0 == e) e = "&sort=p";
    else if (1 == e) (e = ""), (t = "Uploaded videos"), (n = "UU");
    else {
      if (2 != e) return;
      (e = "&sort=da"), (t = "Oldest videos"), (n = "UU");
    }

    async function a(e) {
      var t = document.createElement("div");
      t.setAttribute("id", "player"),
        t.setAttribute("class", "watch-small"),
        document.querySelector(".channels-video-player").append(t);
      var n = document.createElement("div");
      n.setAttribute("id", "player-api"),
        n.setAttribute(
          "class",
          "player-width player-height off-screen-target watch-content player-api"
        ),
        document.querySelector("#player").append(n),
        $("body").append('<script>v3PlayerLoader("' + e + '")</script>'),
        (document.onkeydown = function (e) {
          " " == e.key && e.target == document.body
            ? (e.preventDefault(),
              document.querySelector("video").click(),
              document.querySelector("body").click())
            : "." == e.key && e.target == document.body
            ? (e.preventDefault(),
              $("body").append(
                '<script id="v3framer">document.querySelector("#movie_player").seekBy(0.03);</script>'
              ),
              document.querySelector("#v3framer").remove())
            : "," == e.key &&
              e.target == document.body &&
              (e.preventDefault(),
              $("body").append(
                '<script id="v3framer">document.querySelector("#movie_player").seekBy(-0.03);</script>'
              ),
              document.querySelector("#v3framer").remove());
        }),
        waitForElm2("#ytdata-temp-container1").then(function (e) {
          (c3video = JSON.parse(
            document.querySelector("#ytdata-temp-container1").innerHTML
          )),
            document.querySelector("#ytdata-temp-container1").remove(),
            1 != c3video.isLiked ||
            document
              .querySelector(".html5-info-bar")
              .className.includes("sentiment-like")
              ? 1 != c3video.isDisliked ||
                document
                  .querySelector(".html5-info-bar")
                  .className.includes("sentiment-dislike") ||
                document
                  .querySelector(".html5-info-bar")
                  .classList.add("sentiment-dislike")
              : document
                  .querySelector(".html5-info-bar")
                  .classList.add("sentiment-like");
        });
    }

    const r = new XMLHttpRequest();
    r.open(
      "GET",
      "https://www.youtube.com/channel/" +
        authorurl.split("/")[4] +
        "/videos?view=0" +
        e +
        "&flow=grid"
    ),
      r.send(),
      (r.onload = () => {
        var e = JSON.parse(
          r.responseText
            .substr(
              parseInt(r.responseText.search("var ytInitialData = ") + 20)
            )
            .substr(
              0,
              parseInt(
                r.responseText
                  .substr(
                    parseInt(r.responseText.search("var ytInitialData = ") + 20)
                  )
                  .search("</script>") - 1
              )
            )
        );
        document.querySelector("html").setAttribute("c3loaded", "");

        try {
          var o;
          console.log(e);

          try {
            o =
              e.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer
                .content.sectionListRenderer.contents[0].itemSectionRenderer
                .contents[0].gridRenderer.items;
          } catch (t) {
            o =
              e.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer
                .content.sectionListRenderer.contents[1].itemSectionRenderer
                .contents[0].shelfRenderer.content.horizontalListRenderer.items;
          }

          var s = document.createElement("div");
          s.setAttribute(
            "class",
            "channels-featured-video channel-module yt-uix-c3-module-container has-visible-edge"
          ),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane"
              )
              .append(s);
          var c = document.createElement("div");
          c.setAttribute("class", "module-view featured-video-view-module"),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channels-featured-video"
              )
              .append(c);
          var d = document.createElement("div");
          d.setAttribute("class", "channels-video-player "),
            d.setAttribute("style", "overflow: hidden;");
          var l = 0;

          try {
            ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer
              .content.sectionListRenderer.contents[0].itemSectionRenderer
              .contents[0].channelVideoPlayerRenderer && (l = 1);
          } catch (e) {
            useverbose && console.log(e);
          }

          try {
            ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer
              .content.sectionListRenderer.contents[0].itemSectionRenderer
              .contents[0].channelFeaturedContentRenderer.items[0]
              .videoRenderer && (l = 2);
          } catch (e) {
            useverbose && console.log(e);
          }

          document
            .querySelector(
              "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channels-featured-video .module-view"
            )
            .append(d);
          var u = document.createElement("div");
          u.setAttribute(
            "class",
            "channels-featured-video-details yt-tile-visible clearfix"
          ),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channels-featured-video .module-view"
              )
              .append(u);
          var b = document.createElement("h3");

          if ((b.setAttribute("class", "title"), l)) {
            if (1 == l) {
              p = "Static Static";

              try {
                p =
                  ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                    .tabRenderer.content.sectionListRenderer.contents[0]
                    .itemSectionRenderer.contents[0].channelVideoPlayerRenderer
                    .viewCountText.simpleText;
              } catch (e) {}

              b.innerHTML =
                '        <a href="/watch?v=' +
                ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                  .tabRenderer.content.sectionListRenderer.contents[0]
                  .itemSectionRenderer.contents[0].channelVideoPlayerRenderer
                  .videoId +
                '" class="yt-uix-sessionlink" data-sessionlink="">\n          ' +
                ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                  .tabRenderer.content.sectionListRenderer.contents[0]
                  .itemSectionRenderer.contents[0].channelVideoPlayerRenderer
                  .title.runs[0].text +
                '\n        </a>\n        <div class="view-count-and-actions">\n              <div class="view-count">\n                <span class="count">\n                  ' +
                p.split(" ")[0] +
                "\n                </span>\n" +
                p.split(" ")[1] +
                "\n              </div>\n        </div>";
            } else if (2 == l) {
              p = "Static Static";

              try {
                p =
                  ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                    .tabRenderer.content.sectionListRenderer.contents[0]
                    .itemSectionRenderer.contents[0]
                    .channelFeaturedContentRenderer.items[0].videoRenderer
                    .viewCountText.runs[0].text +
                  ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                    .tabRenderer.content.sectionListRenderer.contents[0]
                    .itemSectionRenderer.contents[0]
                    .channelFeaturedContentRenderer.items[0].videoRenderer
                    .viewCountText.runs[1].text;
              } catch (e) {}

              try {
                ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                  .tabRenderer.content.sectionListRenderer.contents[0]
                  .itemSectionRenderer.contents[0]
                  .channelFeaturedContentRenderer.items[0].videoRenderer
                  .viewCountText.simpleText &&
                  (p =
                    ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                      .tabRenderer.content.sectionListRenderer.contents[0]
                      .itemSectionRenderer.contents[0]
                      .channelFeaturedContentRenderer.items[0].videoRenderer
                      .viewCountText.simpleText);
              } catch (e) {}

              b.innerHTML =
                '        <a href="/watch?v=' +
                ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                  .tabRenderer.content.sectionListRenderer.contents[0]
                  .itemSectionRenderer.contents[0]
                  .channelFeaturedContentRenderer.items[0].videoRenderer
                  .videoId +
                '" class="yt-uix-sessionlink" data-sessionlink="">\n          ' +
                ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                  .tabRenderer.content.sectionListRenderer.contents[0]
                  .itemSectionRenderer.contents[0]
                  .channelFeaturedContentRenderer.items[0].videoRenderer.title
                  .runs[0].text +
                '\n        </a>\n        <div class="view-count-and-actions">\n              <div class="view-count">\n                <span class="count">\n                  ' +
                p.split(" ")[0] +
                "\n                </span>\n" +
                p.split(" ")[1] +
                "\n              </div>\n        </div>";
            }
          } else {
            var p = "Static Static";

            try {
              p = o[0].gridVideoRenderer.viewCountText.simpleText;
            } catch (e) {}

            try {
              p =
                ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                  .tabRenderer.content.sectionListRenderer.contents[0]
                  .itemSectionRenderer.contents[0]
                  .channelFeaturedContentRenderer.items[0].videoRenderer
                  .viewCountText.simpleText;
            } catch (e) {}

            b.innerHTML =
              '        <a href="' +
              o[0].gridVideoRenderer.navigationEndpoint.commandMetadata
                .webCommandMetadata.url +
              '" class="yt-uix-sessionlink" data-sessionlink="">\n          ' +
              o[0].gridVideoRenderer.title.runs[0].text +
              '\n        </a>\n        <div class="view-count-and-actions">\n              <div class="view-count">\n                <span class="count">\n                  ' +
              p.split(" ")[0] +
              "\n                </span>\n" +
              p.split(" ")[1] +
              "\n              </div>\n        </div>";
          }

          document
            .querySelector(
              "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channels-featured-video .module-view .channels-featured-video-details"
            )
            .append(b),
            l
              ? 1 == l
                ? a(
                    ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                      .tabRenderer.content.sectionListRenderer.contents[0]
                      .itemSectionRenderer.contents[0]
                      .channelVideoPlayerRenderer.videoId
                  )
                : 2 == l &&
                  a(
                    ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                      .tabRenderer.content.sectionListRenderer.contents[0]
                      .itemSectionRenderer.contents[0]
                      .channelFeaturedContentRenderer.items[0].videoRenderer
                      .videoId
                  )
              : a(
                  document
                    .querySelector(".channels-featured-video-details > h3 > a")
                    .href.split("?v=")[1]
                    .split("&t")[0]
                );
          var m = document.createElement("p");
          m.setAttribute("class", "channels-featured-video-metadata");
          var y = "";

          try {
            y = o[0].gridVideoRenderer.publishedTimeText.simpleText;
          } catch (e) {}

          (m.innerHTML =
            "<span>by " +
            authorchannelname +
            '</span>\n          <span class="created-date">' +
            y +
            "</span>"),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channels-featured-video .module-view .channels-featured-video-details"
              )
              .append(m);
          var h = document.createElement("div");
          h.setAttribute(
            "class",
            "single-playlist channel-module yt-uix-c3-module-container"
          ),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane"
              )
              .append(h);
          var v = document.createElement("div");
          v.setAttribute("class", "module-view single-playlist-view-module"),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .single-playlist"
              )
              .append(v);
          var g = document.createElement("div");
          g.setAttribute("class", "blogger-playall"),
            (g.innerHTML =
              '<a class="yt-playall-link yt-playall-link-default yt-uix-sessionlink " href="' +
              o[0].gridVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.replace(
                "watch?v",
                "watch?v"
              ) +
              "&list=" +
              ytdata.metadata.channelMetadataRenderer.channelUrl
                .split("/")[4]
                .replace("UC", n) +
              '&index=1" data-sessionlink="">\n    <img class="small-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\nPlay all\n  </a>'),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .single-playlist .module-view"
              )
              .append(g);
          var f = document.createElement("div");

          if (
            (f.setAttribute("class", "playlist-info"),
            (f.innerHTML =
              "\n          <h2>" +
              t +
              '</h2>\n            <span class="blogger-video-count">1-10 of ' +
              o.length +
              '</span>\n              <hr class="yt-horizontal-rule " style="width:640px!important;">\n\n\n        '),
            document.querySelector(".exp-v3-enhanced-c3-new-featured"))
          ) {
            var x = o.length;
            x > 8 && (x = 8),
              (f.innerHTML =
                "\n          <h2>" +
                t +
                '</h2>\n            <span class="blogger-video-count">1-' +
                x +
                " of " +
                o.length +
                '</span>\n              <hr class="yt-horizontal-rule " style="width:640px!important;">\n\n\n        ');
          }

          if (
            (document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .single-playlist .module-view"
              )
              .append(f),
            document.querySelector(".exp-v3-enhanced-c3-new-featured"))
          ) {
            var R,
              w =
                '<ul id="channels-browse-content-grid" class="channels-browse-content-grid context-data-container v3-not-blog-shelf">',
              S = o;
            R = S.length > 8 ? 8 : S.length;
            var T = "";

            for (i = 0, j = R; i < j; i++) {
              var A = "";

              try {
                A =
                  S[i].gridVideoRenderer.thumbnailOverlays.find(isTimeInfo)
                    .thumbnailOverlayTimeStatusRenderer.text.simpleText;
              } catch (e) {}

              try {
                var q = S[i].gridVideoRenderer.viewCountText.simpleText,
                  E = S[i].gridVideoRenderer.publishedTimeText.simpleText;
              } catch (e) {
                (q = "Static"), (E = "Static");
              }

              try {
                T +=
                  '<li class="channels-content-item">\n              <span class="context-data-item" data-context-item-user="' +
                  authoruserid +
                  '" data-context-item-time="' +
                  A +
                  '" data-context-item-id="RnpyRe_7jZA" data-context-item-views="' +
                  q +
                  '" data-context-item-title="' +
                  S[i].gridVideoRenderer.title.runs[0].text +
                  '" data-context-item-type="video">\n    <a href="/watch?v=' +
                  S[i].gridVideoRenderer.videoId +
                  '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto spf-link" data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-194">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" src="' +
                  S[i].gridVideoRenderer.thumbnail.thumbnails[
                    parseInt(
                      S[i].gridVideoRenderer.thumbnail.thumbnails.length - 1
                    )
                  ].url +
                  '" width="194">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
                  A +
                  '</span>\n\n\n  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
                  S[i].gridVideoRenderer.videoId +
                  '" role="button"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n    <span class="content-item-detail">\n      <a href="/watch?v=' +
                  S[i].gridVideoRenderer.videoId +
                  '" title="' +
                  S[i].gridVideoRenderer.title.runs[0].text +
                  '" class="content-item-title spf-link yt-uix-sessionlink yt-uix-contextlink" dir="ltr" data-sessionlink="">\n        ' +
                  S[i].gridVideoRenderer.title.runs[0].text +
                  '\n      </a>\n      <span class="content-item-metadata">\n        \n          <span class="content-item-view-count">\n            ' +
                  q +
                  '\n          </span>\n          <span class="metadata-separator">|</span>\n          <span class="content-item-time-created">' +
                  E +
                  "</span>\n      </span>\n    </span>\n  </span>\n\n\n\t\t\t</li>";
              } catch (e) {
                console.log(e);
              }
            }

            (w += T),
              (w += "</ul>"),
              document
                .querySelector(
                  "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .single-playlist .module-view"
                )
                .insertAdjacentHTML("beforeend", w);
            var L = {};

            try {
              L =
                ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0]
                  .tabRenderer.content.sectionListRenderer.contents;
            } catch (e) {
              console.log(e);
            }

            if (!L) return;
            var C = "";

            for (i = 0, j = L.length; i < j; i++)
              if (
                L[i].itemSectionRenderer &&
                L[i].itemSectionRenderer.contents[0] &&
                L[i].itemSectionRenderer.contents[0].shelfRenderer &&
                L[i].itemSectionRenderer.contents[0].shelfRenderer.title &&
                "Uploads" !=
                  L[i].itemSectionRenderer.contents[0].shelfRenderer.title
                    .runs[0].text &&
                L[i].itemSectionRenderer.contents[0].shelfRenderer.content
                  .horizontalListRenderer &&
                L[i].itemSectionRenderer.contents[0].shelfRenderer.content
                  .horizontalListRenderer.items[0].gridVideoRenderer
              ) {
                console.log("NEW", L[i]);
                var M =
                    L[i].itemSectionRenderer.contents[0].shelfRenderer.content
                      .horizontalListRenderer.items.length,
                  k =
                    L[i].itemSectionRenderer.contents[0].shelfRenderer.content
                      .horizontalListRenderer.items;
                M > 8 && (M = 8);
                var I = "";

                try {
                  I =
                    L[i].itemSectionRenderer.contents[0].shelfRenderer.title
                      .runs[0].navigationEndpoint.commandMetadata
                      .webCommandMetadata.url;
                } catch (e) {}

                (C +=
                  '<div class="single-playlist channel-module yt-uix-c3-module-container"><div class="module-view single-playlist-view-module"><div class="blogger-playall"><a class="yt-playall-link yt-playall-link-default yt-uix-sessionlink " href="' +
                  I +
                  '" data-sessionlink="">\n    <img class="small-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\nView all\n  </a></div><div class="playlist-info">\n          <h2>' +
                  L[i].itemSectionRenderer.contents[0].shelfRenderer.title
                    .runs[0].text +
                  '</h2>\n            <span class="blogger-video-count">1-' +
                  M +
                  '</span>\n              <hr class="yt-horizontal-rule " style="width:var(--v3-player-width)!important;">\n\n\n        </div><ul id="channels-browse-content-grid" class="channels-browse-content-grid context-data-container v3-not-blog-shelf">'),
                  (C += generateGridVideosHtml(k)),
                  (C += "</ul></div></div>");
              }

            document
              .querySelector(".primary-pane")
              .insertAdjacentHTML("beforeend", C);
          } else {
            var V,
              B = document.createElement("ul");
            B.setAttribute("class", "gh-single-playlist"),
              (V = o.length > 10 ? 10 : o.length);
            var N = "";

            for (console.log(o), i = 0, j = V; i < j; i++)
              N +=
                '<li class="blogger-video">\n          <div class="video yt-tile-visible">\n    <a href="' +
                o[i].gridVideoRenderer.navigationEndpoint.commandMetadata
                  .webCommandMetadata.url +
                '" class="yt-uix-sessionlink" data-sessionlink="">\n        <span class="ux-thumb-wrap contains-addto ">    <span class="video-thumb  yt-thumb yt-thumb-288">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
                o[i].gridVideoRenderer.thumbnail.thumbnails[
                  parseInt(
                    o[i].gridVideoRenderer.thumbnail.thumbnails.length - 1
                  )
                ].url +
                '" alt="Thumbnail" width="288">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
                o[i].gridVideoRenderer.thumbnailOverlays.find(isTimeInfo)
                  .thumbnailOverlayTimeStatusRenderer.text.simpleText +
                '</span>\n\n\n  <button type="button" class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" onclick=";return false;" title="Watch Later" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
                o[i].gridVideoRenderer.videoId +
                '" role="button" data-tooltip-text="Watch Later"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</span>\n      <span class="video-item-content">\n          <span class="video-overview">\n    <span class="title video-title" title="' +
                o[i].gridVideoRenderer.title.runs[0].text +
                '">' +
                o[i].gridVideoRenderer.title.runs[0].text +
                '</span>\n  </span>\n  <span class="video-details">\n    <span class="yt-user-name video-owner" dir="ltr">' +
                authorchannelname +
                '</span>\n      <span class="video-view-count">\n' +
                o[i].gridVideoRenderer.viewCountText.simpleText +
                '\n      </span>\n      <span class="video-time-published">' +
                o[i].gridVideoRenderer.publishedTimeText.simpleText +
                '</span>\n      <span class="video-item-description">' +
                o[i].gridVideoRenderer.title.accessibility.accessibilityData
                  .label +
                "</span>\n  </span>\n\n      </span>\n    </a>\n  </div>\n\n      </li>";

            o.length > 10 &&
              (N +=
                '<li class="video">\n    <button name="page" type="button" class="more-videos yt-uix-button yt-uix-button-default" value="2" onclick="window.location = \'' +
                authordefaulturl +
                '/videos\'" data-list_id="' +
                authoruserid +
                '" role="button"><span class="yt-uix-button-content">  <span class="load-more-text">\nLoad more\n  </span>\n  <span class="loading-indicator">\n    <img src="//s.ytimg.com/yts/img/loader-vflff1Mjj.gif" alt="Loading">\n  </span>\n </span></button>\n  </li>'),
              (B.innerHTML = N),
              document
                .querySelector(
                  "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .single-playlist .module-view"
                )
                .append(B);
          }
        } catch (e) {
          console.log(e);
        }
      });
  }

  function generateGridVideosHtml(e) {
    console.log(e);
    var t = "",
      n = 0,
      a = e.length;

    for (a > 8 && (a = 8); n < a; ) {
      var r = "";

      try {
        r =
          e[n].gridVideoRenderer.thumbnailOverlays.find(isTimeInfo)
            .thumbnailOverlayTimeStatusRenderer.text.simpleText;
      } catch (e) {}

      try {
        var i = e[n].gridVideoRenderer.viewCountText.simpleText,
          o = e[n].gridVideoRenderer.publishedTimeText.simpleText;
      } catch (e) {
        (i = "Static"), (o = "Static");
      }

      try {
        t +=
          '<li class="channels-content-item">\n              <span class="context-data-item" data-context-item-user="' +
          authoruserid +
          '" data-context-item-time="' +
          r +
          '" data-context-item-id="RnpyRe_7jZA" data-context-item-views="' +
          i +
          '" data-context-item-title="' +
          e[n].gridVideoRenderer.title.simpleText +
          '" data-context-item-type="video">\n    <a href="/watch?v=' +
          e[n].gridVideoRenderer.videoId +
          '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto spf-link" data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-194">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" src="' +
          e[n].gridVideoRenderer.thumbnail.thumbnails[
            parseInt(e[n].gridVideoRenderer.thumbnail.thumbnails.length - 1)
          ].url +
          '" width="194">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
          r +
          '</span>\n\n\n  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
          e[n].gridVideoRenderer.videoId +
          '" role="button"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n    <span class="content-item-detail">\n      <a href="/watch?v=' +
          e[n].gridVideoRenderer.videoId +
          '" title="' +
          e[n].gridVideoRenderer.title.simpleText +
          '" class="content-item-title spf-link yt-uix-sessionlink yt-uix-contextlink" dir="ltr" data-sessionlink="">\n        ' +
          e[n].gridVideoRenderer.title.simpleText +
          '\n      </a>\n      <span class="content-item-metadata">\n        \n          <span class="content-item-view-count">\n            ' +
          i +
          '\n          </span>\n          <span class="metadata-separator">|</span>\n          <span class="content-item-time-created">' +
          o +
          "</span>\n      </span>\n    </span>\n  </span>\n\n\n\t\t\t</li>";
      } catch (e) {
        console.log(e);
      }

      n++;
    }

    return t;
  }

  function deabreviateCnt(e) {
    if (e) {
      var t,
        n,
        a = 0;
      if (
        ("M" == e.charAt(e.length - 1) && (a = 1),
        "K" == e.charAt(e.length - 1) && (a = 2),
        0 != a)
      )
        1 == a && ((t = "000,000"), (n = "M")),
          2 == a && ((t = "000"), (n = "K")),
          (e =
            -1 != e.indexOf(".")
              ? e.split(".")[0] +
                "," +
                e.split(".")[1].split(n)[0].slice(0, 2) +
                t.slice(e.split(".")[1].split(n)[0].length, t.length)
              : e.substring(0, e.length - 1) + "," + t);
      return e;
    }

    return null;
  }

  function buildChannel() {
    var e = document.createElement("div");
    e.setAttribute("id", "page-container"),
      insertAfter(document.querySelector("#yt-masthead-container"), e);
    var t = document.createElement("div");
    t.setAttribute("id", "page"),
      t.setAttribute("class", "page-default   branded-page channel "),
      document.querySelector("#page-container").append(t);
    var n = document.createElement("div");
    n.setAttribute("id", "content"), document.querySelector("#page").append(n);
    var a = document.createElement("div");
    a.setAttribute("id", "branded-page-default-bg"),
      a.setAttribute("class", "ytg-base"),
      document.querySelector("#content").append(a);
    var r = document.createElement("div");
    r.setAttribute("id", "branded-page-body-container"),
      r.setAttribute("class", "ytg-base clearfix"),
      r.setAttribute(
        "style",
        "background-color: #000000; background-size: 100%;"
      );

    try {
      r.setAttribute(
        "style",
        "background-attachment: fixed; background-color: #000000; background-size: 100%; background-image: url(" +
          ytdata.header.c4TabbedHeaderRenderer.tvBanner.thumbnails[
            parseInt(
              ytdata.header.c4TabbedHeaderRenderer.tvBanner.thumbnails.length -
                1
            )
          ].url +
          ");"
      );
    } catch (e) {
      console.log(e);
    }

    document.querySelector("#branded-page-default-bg").append(r),
      isownchannel &&
        document
          .querySelector("#branded-page-body-container")
          .insertAdjacentHTML(
            "beforeend",
            '<div id="watch7-creator-bar" class="clearfix yt-uix-button-panel">\n<ul id="watch7-creator-bar-nav-buttons">  <li class="creator-bar-item ">\n    <a href="https://www.youtube.com/analytics" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-dark yt-uix-button-size-default" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsn"><span class="yt-uix-button-content">' +
              v3.UIMSG[v3.nationIndex].MASTHEAD_UPLOAD_ANALYTICS +
              '\n </span></a>\n  </li>\n  <li class="creator-bar-item ">\n    <a href="/my_videos" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-dark yt-uix-button-size-default" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsn"><span class="yt-uix-button-content">' +
              v3.UIMSG[v3.nationIndex].MASTHEAD_UPLOAD_VIDEO_MANAGER +
              ' </span></a>\n  </li>\n</ul><ul id="watch7-creator-bar-edit-buttons">  \n  \n  \n  \n  <li class="creator-bar-item ">\n    <a href="https://studio.youtube.com/channel/' +
              ytdata.metadata.channelMetadataRenderer.externalId +
              '/editing/sections" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-dark yt-uix-button-size-default" data-sessionlink="ei=PAqqU5WaN4278AO4hoCACg&amp;feature=mhsn"><span class="yt-uix-button-content">Channel Settings</span></a>\n  </li>\n</ul>  </div>'
          );
    var i = document.createElement("div");
    i.setAttribute("id", "branded-page-header-container"),
      i.setAttribute("class", "ytg-wide banner-displayed-mode"),
      document.querySelector("#branded-page-body-container").append(i);
    var o = document.createElement("div");
    o.setAttribute("id", "branded-page-body"),
      document.querySelector("#branded-page-body-container").append(o),
      createGb(),
      buildChannelHeader(),
      window.location.href.includes("/videos")
        ? buildChannelUploads()
        : window.location.href.includes("/playlists")
        ? buildChannelPlaylist()
        : buildChannelFeatured();
  }

  function buildChannelHeader() {
    var e = document.createElement("div");
    e.setAttribute("id", "branded-page-header"),
      e.setAttribute("class", "ytg-wide"),
      document.querySelector("#branded-page-header-container").append(e);
    var t = document.createElement("div");
    t.setAttribute("id", "channel-header-main"),
      document.querySelector("#branded-page-header").append(t);
    var n = document.createElement("div");
    n.setAttribute("class", "upper-section clearfix"),
      document.querySelector("#channel-header-main").append(n);
    var a = document.createElement("div");
    a.setAttribute("class", "channel-horizontal-menu clearfix"),
      document.querySelector("#channel-header-main").append(a);
    var r = document.createElement("a");
    r.setAttribute("href", authordefaulturl),
      document.querySelector(".upper-section").append(r);
    var i = document.createElement("span");
    i.setAttribute("class", "channel-thumb"),
      document.querySelector(".upper-section > a").append(i);
    var o = document.createElement("span");
    o.setAttribute("class", "video-thumb  yt-thumb yt-thumb-60"),
      document.querySelector(".upper-section a .channel-thumb").append(o);
    var s = document.createElement("span");
    s.setAttribute("class", "yt-thumb-square"),
      document
        .querySelector(".upper-section a .channel-thumb .video-thumb")
        .append(s);
    var c = document.createElement("span");
    c.setAttribute("class", "yt-thumb-clip"),
      document
        .querySelector(
          ".upper-section a .channel-thumb .video-thumb .yt-thumb-square"
        )
        .append(c);
    var d = document.createElement("span");
    d.setAttribute("class", "yt-thumb-clip-inner"),
      document
        .querySelector(
          ".upper-section a .channel-thumb .video-thumb .yt-thumb-square .yt-thumb-clip"
        )
        .append(d);
    var l = document.createElement("img");
    l.setAttribute("src", authoravatar),
      l.setAttribute("alt", authorchannelname),
      l.setAttribute("width", "60"),
      document
        .querySelector(
          ".upper-section a .channel-thumb .video-thumb .yt-thumb-square .yt-thumb-clip .yt-thumb-clip-inner"
        )
        .append(l);
    var u = document.createElement("span");
    u.setAttribute("class", "vertical-align"),
      document
        .querySelector(
          ".upper-section a .channel-thumb .video-thumb .yt-thumb-square .yt-thumb-clip .yt-thumb-clip-inner"
        )
        .append(u);
    var b = document.createElement("div");
    b.setAttribute("class", "upper-left-section "),
      document.querySelector(".upper-section").append(b);
    var p = document.createElement("div");
    p.setAttribute("class", "upper-left-section "),
      document.querySelector(".upper-section").append(p);
    var m = document.createElement("div");
    m.setAttribute("class", "upper-right-section "),
      document.querySelector(".upper-section").append(m);
    var y = document.createElement("h1");
    document
      .querySelector(".upper-section .upper-left-section:nth-of-type(1)")
      .append(y);
    var h = document.createElement("span");
    h.setAttribute("class", "qualified-channel-title ellipsized"),
      h.setAttribute("title", authorchannelname),
      document
        .querySelector(".upper-section .upper-left-section:nth-of-type(1) h1")
        .append(h);
    var v = document.createElement("span");
    v.setAttribute("class", "qualified-channel-title-wrapper"),
      document
        .querySelector(
          ".upper-section .upper-left-section:nth-of-type(1) h1 .qualified-channel-title"
        )
        .append(v);
    var g = document.createElement("span");
    g.setAttribute("class", "qualified-channel-title-text"),
      (g.innerHTML = "\n      " + authorchannelname + "\n  "),
      document
        .querySelector(
          ".upper-section .upper-left-section:nth-of-type(1) h1 .qualified-channel-title .qualified-channel-title-wrapper"
        )
        .append(g);
    var f = document.createElement("span");

    if (
      (f.setAttribute("class", " yt-uix-button-subscription-container"),
      document
        .querySelector(".upper-section .upper-left-section:nth-of-type(2)")
        .append(f),
      !ytdata.header.c4TabbedHeaderRenderer.editChannelButtons)
    ) {
      var x = document.createElement("button");
      x.setAttribute("aria-busy", "false"),
        x.setAttribute("aria-role", "button"),
        1 == subscribedtoauthor
          ? (x.setAttribute(
              "class",
              "yt-uix-subscription-button yt-uix-button yt-uix-button-subscribed-branded hover-enabled yt-uix-button-size-default yt-uix-button-has-icon"
            ),
            x.setAttribute("title", subscribecount + " subscribers"))
          : x.setAttribute(
              "class",
              "yt-uix-subscription-button yt-uix-button yt-uix-button-subscribe-branded hover-enabled yt-uix-button-size-default yt-uix-button-has-icon"
            ),
        x.setAttribute("aria-live", "polite"),
        x.setAttribute("onclick", ";return false;"),
        x.setAttribute("data-sessionlink", ""),
        x.setAttribute("data-channel-external-id", authorurl.split("/")[4]),
        x.setAttribute("data-style-type", "branded"),
        x.setAttribute("data-href", ""),
        x.setAttribute("role", "button"),
        document
          .querySelector(
            ".upper-section .upper-left-section:nth-of-type(2) .yt-uix-button-subscription-container"
          )
          .append(x);
      var R = document.createElement("span");
      R.setAttribute("class", "yt-uix-button-icon-wrapper"),
        document
          .querySelector(
            ".upper-section .upper-left-section:nth-of-type(2) .yt-uix-button-subscription-container .yt-uix-subscription-button"
          )
          .append(R);
      var w = document.createElement("img");
      w.setAttribute(
        "class",
        "yt-uix-button-icon yt-uix-button-icon-subscribe"
      ),
        w.setAttribute(
          "src",
          "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"
        ),
        w.setAttribute("alt", ""),
        w.setAttribute("title", ""),
        document
          .querySelector(
            ".upper-section .upper-left-section:nth-of-type(2) .yt-uix-button-subscription-container .yt-uix-subscription-button .yt-uix-button-icon-wrapper"
          )
          .append(w);
      var S = document.createElement("span");
      S.setAttribute("class", "yt-uix-button-content"),
        document
          .querySelector(
            ".upper-section .upper-left-section:nth-of-type(2) .yt-uix-button-subscription-container .yt-uix-subscription-button"
          )
          .append(S);
      var T = document.createElement("span");
      T.setAttribute("class", "subscribe-label"),
        T.setAttribute("aria-label", "Subscribe"),
        (T.innerHTML = "Subscribe"),
        document
          .querySelector(
            ".upper-section .upper-left-section:nth-of-type(2) .yt-uix-button-subscription-container .yt-uix-subscription-button .yt-uix-button-content"
          )
          .append(T);
      var A = document.createElement("span");
      A.setAttribute("class", "subscribed-label"),
        A.setAttribute("aria-label", "Subscribed"),
        (A.innerHTML = "Subscribed"),
        document
          .querySelector(
            ".upper-section .upper-left-section:nth-of-type(2) .yt-uix-button-subscription-container .yt-uix-subscription-button .yt-uix-button-content"
          )
          .append(A);
      var q = document.createElement("span");
      q.setAttribute("class", "unsubscribe-label"),
        q.setAttribute("aria-label", "Unsubscribe"),
        (q.innerHTML = "Unsubscribe"),
        document
          .querySelector(
            ".upper-section .upper-left-section:nth-of-type(2) .yt-uix-button-subscription-container .yt-uix-subscription-button .yt-uix-button-content"
          )
          .append(q);
      var E = document.createElement("button");
      E.setAttribute(
        "class",
        "yt-uix-subscription-preferences-button yt-uix-button yt-uix-button-default yt-uix-button-size-default yt-uix-button-has-icon yt-uix-button-empty"
      ),
        E.setAttribute("type", "button"),
        E.setAttribute("onclick", ";return false;"),
        E.setAttribute("data-sessionlink", ""),
        E.setAttribute("data-channel-external-id", authorurl.split("/")[4]),
        E.setAttribute("role", "button"),
        document
          .querySelector(
            ".upper-section .upper-left-section:nth-of-type(2) .yt-uix-button-subscription-container"
          )
          .append(E);
      var L = document.createElement("span");
      L.setAttribute("class", "yt-uix-button-icon-wrapper"),
        document
          .querySelector(
            ".upper-section .upper-left-section:nth-of-type(2) .yt-uix-button-subscription-container .yt-uix-subscription-preferences-button"
          )
          .append(L);
      var C = document.createElement("img");
      C.setAttribute(
        "class",
        "yt-uix-button-icon yt-uix-button-icon-subscription-preferences"
      ),
        C.setAttribute(
          "src",
          "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"
        ),
        C.setAttribute("alt", ""),
        w.setAttribute("title", ""),
        document
          .querySelector(
            ".upper-section .upper-left-section:nth-of-type(2) .yt-uix-button-subscription-container .yt-uix-subscription-preferences-button .yt-uix-button-icon-wrapper"
          )
          .append(C);
      var M = document.createElement("span");
      M.setAttribute(
        "class",
        "yt-subscription-button-subscriber-count-branded-horizontal"
      ),
        (M.innerHTML = subscribecount),
        document
          .querySelector(
            ".upper-section .upper-left-section:nth-of-type(2) .yt-uix-button-subscription-container"
          )
          .append(M);
    }

    var k = document.createElement("div");
    k.setAttribute("class", "header-stats"),
      document.querySelector(".upper-section .upper-right-section").append(k);
    var I = document.createElement("span");
    if (
      (I.setAttribute("class", "valign-shim"),
      document.querySelector(".upper-section .upper-right-section").append(I),
      isownchannel)
    )
      (V = document.createElement("a")).setAttribute(
        "href",
        "https://studio.youtube.com/channel/" +
          ytdata.metadata.channelMetadataRenderer.externalId +
          "/analytics/tab-overview/period-default"
      );
    else var V = document.createElement("div");
    if (
      (V.setAttribute("class", "stat-entry"),
      document
        .querySelector(".upper-section .upper-right-section .header-stats")
        .append(V),
      isownchannel)
    )
      (B = document.createElement("a")).setAttribute(
        "href",
        "https://studio.youtube.com/channel/" +
          ytdata.metadata.channelMetadataRenderer.externalId +
          "/analytics/tab-overview/period-default"
      );
    else var B = document.createElement("div");

    if (
      (B.setAttribute("class", "stat-entry"),
      document
        .querySelector(".upper-section .upper-right-section .header-stats")
        .append(B),
      "" != subscribecount)
    ) {
      var N = document.createElement("span");
      N.setAttribute("class", "stat-value"),
        (N.innerHTML = deabreviateCnt(subscribecount)),
        document
          .querySelector(
            ".upper-section .upper-right-section .header-stats .stat-entry:nth-of-type(1)"
          )
          .append(N);
      var H = document.createElement("span");
      H.setAttribute("class", "stat-name"),
        (H.innerHTML = "subscribers"),
        document
          .querySelector(
            ".upper-section .upper-right-section .header-stats .stat-entry:nth-of-type(1)"
          )
          .append(H);
    }

    var _ = document.createElement("span");

    _.setAttribute("class", "stat-value"),
      (_.innerHTML = "0"),
      document
        .querySelector(
          ".upper-section .upper-right-section .header-stats .stat-entry:nth-of-type(2)"
        )
        .append(_);
    var P = document.createElement("span");
    P.setAttribute("class", "stat-name"),
      (P.innerHTML = "video views"),
      document
        .querySelector(
          ".upper-section .upper-right-section .header-stats .stat-entry:nth-of-type(2)"
        )
        .append(P);
    var W = document.createElement("ul");
    W.setAttribute("role", "tablist"),
      document.querySelector(".channel-horizontal-menu").append(W);
    var z = document.createElement("ul");
    z.setAttribute("id", "channel-search"),
      z.setAttribute("action", authordefaulturl + "/videos"),
      (z.innerHTML =
        '<span class="search-field-container yt-uix-form-input-container yt-uix-form-input-text-container ">    <input class="yt-uix-form-input-text search-field" name="query" placeholder="Search Channel" maxlength="100" autocomplete="off">\n</span>\n    <button class="search-btn" type="submit">\n      <span class="search-btn-content">\nSearch\n      </span>\n    </button>\n    <a class="search-dismiss-btn" href="' +
        authordefaulturl +
        '/videos">\n      <span class="search-btn-content">\nClear\n      </span>\n    </a>'),
      document.querySelector(".channel-horizontal-menu").append(z);
    var O = document.createElement("li");
    O.setAttribute("role", "presentation"),
      window.location.href.includes("/videos") ||
        window.location.href.includes("/playlists") ||
        O.setAttribute("class", "selected"),
      (O.innerHTML =
        '<a href="' +
        authordefaulturl +
        '/featured" class="gh-tab-100" role="tab" aria-selected="true">\n      Featured\n\n    </a>'),
      document
        .querySelector(".channel-horizontal-menu ul[role=tablist]")
        .append(O);
    var U = document.createElement("li");
    U.setAttribute("role", "presentation"),
      (window.location.href.includes("/videos") ||
        window.location.href.includes("/playlists")) &&
        U.setAttribute("class", "selected"),
      (U.innerHTML =
        '<a href="' +
        authordefaulturl +
        '/videos" class="gh-tab-101" role="tab" aria-selected="false">\n      Browse videos\n\n    </a>'),
      document
        .querySelector(".channel-horizontal-menu ul[role=tablist]")
        .append(U);
  }

  function buildChannelUploads() {
    document.body.setAttribute("c3-state", "uploads");
    var e = document.createElement("div");
    e.setAttribute(
      "class",
      "channel-tab-content channel-layout-two-column selected channel-tab-feed-content"
    ),
      document.querySelector("#branded-page-body").append(e);
    var t = document.createElement("div");
    t.setAttribute("class", "tab-content-body"),
      document
        .querySelector("#branded-page-body .channel-tab-content")
        .append(t);
    var n = document.createElement("div");
    n.setAttribute("class", "primary-pane"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body"
        )
        .append(n);
    var a = document.createElement("div");
    a.setAttribute("class", "secondary-pane"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body"
        )
        .append(a),
      buildSecondaryPane();
    var r = document.createElement("div");
    if (
      (r.setAttribute("class", "channel-browse"),
      ytdata.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer.content
        .sectionListRenderer.subMenu.channelSubMenuRenderer
        .contentTypeSubMenuItems)
    )
      if (
        1 ==
        ytdata.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer
          .content.sectionListRenderer.subMenu.channelSubMenuRenderer
          .contentTypeSubMenuItems.length
      )
        r.innerHTML =
          '<div class="browse-heading channels-browse-gutter-padding">\n              <div id="channels-browse-header" class="clearfix">\n      <div id="browse-view-options">\n      <button onclick=";return false;" type="button" class="flip channels-browse-options yt-uix-button yt-uix-button-text" data-button-menu-id="browse-view-options-menu" role="button"><span class="yt-uix-button-content">View </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n\n  </div>\n\n      <ul>\n\n    \n      <li class="channels-browse-filter selected">\n    <a href="' +
          authorurl +
          '/videos">\n      Uploads\n    </a>\n  </li>\n\n      <li class="channels-browse-filter ">\n    <a href="' +
          authorurl +
          '/playlists">\n      Playlists\n    </a>\n  </li>\n\n\n  </ul>\n\n  </div>\n\n              <hr class="yt-horizontal-rule channel-section-hr">\n\n          </div>';
      else {
        r.innerHTML =
          '<div class="browse-heading channels-browse-gutter-padding">\n              <div id="channels-browse-header" class="clearfix">\n      <div id="browse-view-options">\n      <button onclick=";return false;" type="button" class="flip channels-browse-options yt-uix-button yt-uix-button-text v3-rich-category" data-button-menu-id="browse-view-options-menu" role="button"><span class="yt-uix-button-content">View </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n\n  </div>\n\n      <ul>\n\n    \n  <button type="button" class="channels-browse-filter-more selected yt-uix-button yt-uix-button-text" onclick=";return false;" data-button-menu-id="browse-nav-more-menu" role="button" aria-pressed="false" aria-expanded="false"><span class="yt-uix-button-content">' +
          ytdata.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer.content.sectionListRenderer.subMenu.channelSubMenuRenderer.contentTypeSubMenuItems.find(
            isSelected
          ).title +
          ' </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""></button>\n\n      <li class="channels-browse-filter ">\n    <a href="' +
          authorurl +
          '/playlists">\n      Playlists\n    </a>\n  </li>\n\n\n  </ul>\n\n  </div>\n\n              <hr class="yt-horizontal-rule channel-section-hr">\n\n          </div>';
        var o = "";

        for (
          i = 0,
            j =
              ytdata.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer
                .content.sectionListRenderer.subMenu.channelSubMenuRenderer
                .contentTypeSubMenuItems.length;
          i < j;
          i++
        )
          o +=
            '<li>\n          <a href="' +
            ytdata.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer
              .content.sectionListRenderer.subMenu.channelSubMenuRenderer
              .contentTypeSubMenuItems[i].endpoint.commandMetadata
              .webCommandMetadata.url +
            '" class="yt-uix-button-menu-item">\n            ' +
            ytdata.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer
              .content.sectionListRenderer.subMenu.channelSubMenuRenderer
              .contentTypeSubMenuItems[i].title +
            "\n          </a>\n        </li>";

        document.body.insertAdjacentHTML(
          "beforeend",
          '<div id="browse-nav-more-menu" class="channel-nav-item-dropdown yt-uix-button-menu yt-uix-button-menu-external hid" style="min-width: 103px; left: 760.078px; top: 249.953px;">\n    <ul>\n        ' +
            o +
            "\n    </ul>\n  </div>"
        );
      }
    document
      .querySelector(
        "#branded-page-body .channel-tab-content .tab-content-body .primary-pane"
      )
      .append(r);
    var s = document.createElement("div");
    s.setAttribute("class", "channels-browse-gutter-padding"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse"
        )
        .append(s);
    var c = document.createElement("ul");
    c.setAttribute("id", "channels-browse-content-grid"),
      c.setAttribute(
        "class",
        "channels-browse-content-grid context-data-container "
      ),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse .channels-browse-gutter-padding:not(.browse-heading)"
        )
        .append(c),
      void 0 !==
        ytdata.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer
          .content.sectionListRenderer.contents[0].itemSectionRenderer
          .contents[0].gridRenderer.items && craftVideoInitialAjax();
  }

  function isTimeInfo(e) {
    try {
      if (e.thumbnailOverlayTimeStatusRenderer) return !0;
    } catch (e) {
      return !1;
    }
  }

  function craftVideoInitialAjax() {
    var e,
      t =
        ytdata.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer
          .content.sectionListRenderer.contents[0].itemSectionRenderer
          .contents[0].gridRenderer.items;
    e = t.length > 30 ? 30 : t.length;
    var n = "";

    for (i = 0, j = e; i < j; i++) {
      var a = "";

      try {
        a =
          t[i].gridVideoRenderer.thumbnailOverlays.find(isTimeInfo)
            .thumbnailOverlayTimeStatusRenderer.text.simpleText;
      } catch (e) {}

      try {
        var r = t[i].gridVideoRenderer.viewCountText.simpleText,
          o = t[i].gridVideoRenderer.publishedTimeText.simpleText;
      } catch (e) {
        (r = "Static"), (o = "Static");
      }

      try {
        n +=
          '<li class="channels-content-item">\n              <span class="context-data-item" data-context-item-user="' +
          authoruserid +
          '" data-context-item-time="' +
          a +
          '" data-context-item-id="RnpyRe_7jZA" data-context-item-views="' +
          r +
          '" data-context-item-title="' +
          t[i].gridVideoRenderer.title.runs[0].text +
          '" data-context-item-type="video">\n    <a href="/watch?v=' +
          t[i].gridVideoRenderer.videoId +
          '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto spf-link" data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-194">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" src="' +
          t[i].gridVideoRenderer.thumbnail.thumbnails[
            parseInt(t[i].gridVideoRenderer.thumbnail.thumbnails.length - 1)
          ].url +
          '" width="194">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
          a +
          '</span>\n\n\n  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
          t[i].gridVideoRenderer.videoId +
          '" role="button"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n    <span class="content-item-detail">\n      <a href="/watch?v=' +
          t[i].gridVideoRenderer.videoId +
          '" title="' +
          t[i].gridVideoRenderer.title.runs[0].text +
          '" class="content-item-title spf-link yt-uix-sessionlink yt-uix-contextlink" dir="ltr" data-sessionlink="">\n        ' +
          t[i].gridVideoRenderer.title.runs[0].text +
          '\n      </a>\n      <span class="content-item-metadata">\n        \n          <span class="content-item-view-count">\n            ' +
          r +
          '\n          </span>\n          <span class="metadata-separator">|</span>\n          <span class="content-item-time-created">' +
          o +
          "</span>\n      </span>\n    </span>\n  </span>\n\n\n\t\t\t</li>";
      } catch (e) {
        console.log(e);
      }
    }

    document
      .querySelector(".channels-browse-content-grid.context-data-container")
      .insertAdjacentHTML("beforeend", n),
      t.length > 30 &&
        ((document.querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse .channels-browse-gutter-padding:not(.browse-heading)"
        ).innerHTML +=
          '<button onclick=";return false;" type="button" class="yt-uix-load-more load-more-button yt-uix-button yt-uix-button-default" data-uix-load-more-href="" data-uix-load-more-target-id="channels-browse-content-grid" role="button"><span class="yt-uix-button-content">Load more </span></button>'),
        (document.querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse .channels-browse-gutter-padding:not(.browse-heading)"
        ).innerHTML +=
          '<p class="yt-spinner hid">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>'),
        (document.querySelector(".yt-uix-load-more.load-more-button").onclick =
          function () {
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse .channels-browse-gutter-padding:not(.browse-heading) .yt-spinner"
              )
              .classList.remove("hid"),
              getMoreVideos(
                t[parseInt(t.length - 1)].continuationItemRenderer
                  .continuationEndpoint.continuationCommand.token
              ),
              document
                .querySelector(".yt-uix-load-more.load-more-button")
                .remove();
          }));
  }

  async function getMoreVideos(e) {
    var t =
      '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
      authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
      '",\r\n\t\t\t"hl": "' +
      authinfo.HL +
      '"\r\n\t\t}\r\n\t},\r\n\t"continuation":"' +
      e +
      '",\r\n}\r\n';
    await v3.innerTube
      .AJAX("browse?", t, "1", authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION)
      .then((e) => {
        document
          .querySelector(
            "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse .channels-browse-gutter-padding:not(.browse-heading) .yt-spinner"
          )
          .classList.add("hid");
        var t,
          n =
            e.onResponseReceivedActions[0].appendContinuationItemsAction
              .continuationItems;
        t =
          void 0 !== n[parseInt(n.length - 1)].continuationItemRenderer
            ? n.length - 1
            : n.length;
        var a = "";

        for (i = 0, j = t; i < j; i++)
          a +=
            '<li class="channels-content-item">\n              <span class="context-data-item" data-context-item-user="' +
            authoruserid +
            '" data-context-item-time="' +
            n[i].gridVideoRenderer.thumbnailOverlays.find(isTimeInfo)
              .thumbnailOverlayTimeStatusRenderer.text.simpleText +
            '" data-context-item-id="RnpyRe_7jZA" data-context-item-views="' +
            n[i].gridVideoRenderer.viewCountText.simpleText +
            '" data-context-item-title="' +
            n[i].gridVideoRenderer.title.runs[0].text +
            '" data-context-item-type="video">\n    <a href="/watch?v=' +
            n[i].gridVideoRenderer.videoId +
            '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto spf-link" data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-194">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" src="' +
            n[i].gridVideoRenderer.thumbnail.thumbnails[
              parseInt(n[i].gridVideoRenderer.thumbnail.thumbnails.length - 1)
            ].url +
            '" width="194">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
            n[i].gridVideoRenderer.thumbnailOverlays.find(isTimeInfo)
              .thumbnailOverlayTimeStatusRenderer.text.simpleText +
            '</span>\n\n\n  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
            n[i].gridVideoRenderer.videoId +
            '" role="button"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n    <span class="content-item-detail">\n      <a href="/watch?v=' +
            n[i].gridVideoRenderer.videoId +
            '" title="' +
            n[i].gridVideoRenderer.title.runs[0].text +
            '" class="content-item-title spf-link yt-uix-sessionlink yt-uix-contextlink" dir="ltr" data-sessionlink="">\n        ' +
            n[i].gridVideoRenderer.title.runs[0].text +
            '\n      </a>\n      <span class="content-item-metadata">\n        \n          <span class="content-item-view-count">\n            ' +
            n[i].gridVideoRenderer.viewCountText.simpleText +
            '\n          </span>\n          <span class="metadata-separator">|</span>\n          <span class="content-item-time-created">' +
            n[i].gridVideoRenderer.publishedTimeText.simpleText +
            "</span>\n      </span>\n    </span>\n  </span>\n\n\n    </li>";

        document
          .querySelector(".channels-browse-content-grid.context-data-container")
          .insertAdjacentHTML("beforeend", a),
          t != n.length &&
            ((document.querySelector(
              "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse .channels-browse-gutter-padding:not(.browse-heading)"
            ).innerHTML +=
              '<button onclick=";return false;" type="button" class="yt-uix-load-more load-more-button yt-uix-button yt-uix-button-default" data-uix-load-more-href="" data-uix-load-more-target-id="channels-browse-content-grid" role="button"><span class="yt-uix-button-content">Load more </span></button>'),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse .channels-browse-gutter-padding:not(.browse-heading) .yt-spinner"
              )
              .classList.add("hid"),
            (document.querySelector(
              ".yt-uix-load-more.load-more-button"
            ).onclick = function () {
              document
                .querySelector(
                  "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse .channels-browse-gutter-padding:not(.browse-heading) .yt-spinner"
                )
                .classList.remove("hid"),
                getMoreVideos(
                  n[parseInt(n.length - 1)].continuationItemRenderer
                    .continuationEndpoint.continuationCommand.token
                ),
                document
                  .querySelector(".yt-uix-load-more.load-more-button")
                  .remove();
            }));
      });
  }

  function isSelected(e) {
    try {
      return !!e.selected;
    } catch (e) {
      return !1;
    }
  }

  function buildChannelPlaylist() {
    document.body.setAttribute("c3-state", "lists");
    var e = document.createElement("div");
    e.setAttribute(
      "class",
      "channel-tab-content channel-layout-two-column selected channel-tab-feed-content"
    ),
      document.querySelector("#branded-page-body").append(e);
    var t = document.createElement("div");
    t.setAttribute("class", "tab-content-body"),
      document
        .querySelector("#branded-page-body .channel-tab-content")
        .append(t);
    var n = document.createElement("div");
    n.setAttribute("class", "primary-pane"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body"
        )
        .append(n);
    var a = document.createElement("div");
    a.setAttribute("class", "secondary-pane"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body"
        )
        .append(a),
      buildSecondaryPane();
    var r = document.createElement("div");
    if (
      (r.setAttribute("class", "channel-browse"),
      1 ==
        ytdata.contents.twoColumnBrowseResultsRenderer.tabs[2].tabRenderer
          .content.sectionListRenderer.subMenu.channelSubMenuRenderer
          .contentTypeSubMenuItems.length)
    )
      r.innerHTML =
        '<div class="browse-heading channels-browse-gutter-padding">\n              <div id="channels-browse-header" class="clearfix">\n\n      <ul>\n\n    \n      <li class="channels-browse-filter">\n    <a href="' +
        authorurl +
        '/videos">\n      Uploads\n    </a>\n  </li>\n\n      <li class="channels-browse-filter selected">\n    <a href="' +
        authorurl +
        '/playlists">\n      Playlists\n    </a>\n  </li>\n\n\n  </ul>\n\n  </div>\n\n              <hr class="yt-horizontal-rule channel-section-hr">\n\n          </div>';
    else {
      "All playlists" ==
        ytdata.contents.twoColumnBrowseResultsRenderer.tabs[2].tabRenderer
          .content.sectionListRenderer.subMenu.channelSubMenuRenderer
          .contentTypeSubMenuItems[0].title &&
        (ytdata.contents.twoColumnBrowseResultsRenderer.tabs[2].tabRenderer.content.sectionListRenderer.subMenu.channelSubMenuRenderer.contentTypeSubMenuItems[0].title =
          "Playlists"),
        (r.innerHTML =
          '<div class="browse-heading channels-browse-gutter-padding">\n              <div id="channels-browse-header" class="clearfix">\n\n      <ul>\n\n    \n      <li class="channels-browse-filter">\n    <a href="' +
          authorurl +
          '/videos">\n      Uploads\n    </a>\n  </li>\n\n      <button type="button" class="channels-browse-filter-more selected yt-uix-button yt-uix-button-text" onclick=";return false;" data-button-menu-id="browse-nav-more-menu" role="button" aria-pressed="false" aria-expanded="false"><span class="yt-uix-button-content">' +
          ytdata.contents.twoColumnBrowseResultsRenderer.tabs[2].tabRenderer.content.sectionListRenderer.subMenu.channelSubMenuRenderer.contentTypeSubMenuItems.find(
            isSelected
          ).title +
          ' </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""></button>\n\n\n  </ul>\n\n  </div>\n\n              <hr class="yt-horizontal-rule channel-section-hr">\n\n          </div>');
      var o = "";

      for (
        i = 0,
          j =
            ytdata.contents.twoColumnBrowseResultsRenderer.tabs[2].tabRenderer
              .content.sectionListRenderer.subMenu.channelSubMenuRenderer
              .contentTypeSubMenuItems.length;
        i < j;
        i++
      )
        o +=
          '<li>\n          <a href="' +
          ytdata.contents.twoColumnBrowseResultsRenderer.tabs[2].tabRenderer
            .content.sectionListRenderer.subMenu.channelSubMenuRenderer
            .contentTypeSubMenuItems[i].endpoint.commandMetadata
            .webCommandMetadata.url +
          '" class="yt-uix-button-menu-item">\n            ' +
          ytdata.contents.twoColumnBrowseResultsRenderer.tabs[2].tabRenderer
            .content.sectionListRenderer.subMenu.channelSubMenuRenderer
            .contentTypeSubMenuItems[i].title +
          "\n          </a>\n        </li>";

      document.body.insertAdjacentHTML(
        "beforeend",
        '<div id="browse-nav-more-menu" class="channel-nav-item-dropdown yt-uix-button-menu yt-uix-button-menu-external hid" style="min-width: 103px; left: 760.078px; top: 249.953px;">\n    <ul>\n        ' +
          o +
          "\n    </ul>\n  </div>"
      );
    }
    document
      .querySelector(
        "#branded-page-body .channel-tab-content .tab-content-body .primary-pane"
      )
      .append(r);
    var s = document.createElement("div");
    s.setAttribute("class", "channels-browse-gutter-padding"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse"
        )
        .append(s);
    var c = document.createElement("ul");
    c.setAttribute("id", "channels-browse-content-grid"),
      c.setAttribute(
        "class",
        "channels-browse-content-grid context-data-container "
      ),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse .channels-browse-gutter-padding"
        )
        .append(c),
      craftPlaylistInitialAjax();
  }

  function craftPlaylistInitialAjax() {
    try {
      var e =
        ytdata.contents.twoColumnBrowseResultsRenderer.tabs[2].tabRenderer
          .content.sectionListRenderer.contents[0].itemSectionRenderer
          .contents[0].gridRenderer.items;
    } catch (t) {
      e =
        ytdata.contents.twoColumnBrowseResultsRenderer.tabs[2].tabRenderer
          .content.sectionListRenderer.contents[0].itemSectionRenderer
          .contents[0].shelfRenderer.content.horizontalListRenderer.items;
    }

    var t;
    (t =
      void 0 !== e[parseInt(e.length - 1)].continuationItemRenderer
        ? e.length - 1
        : e.length),
      console.log(e);
    var n = "";

    for (i = 0, j = t; i < j; i++) {
      var a = "";

      try {
        a =
          e[i].gridPlaylistRenderer.videoCountText.runs[0].text +
          e[i].gridPlaylistRenderer.videoCountText.runs[1].text;
      } catch (e) {}

      n +=
        '<li class="channels-content-item">\n            <span class="context-data-item" data-context-item-type="playlist" data-context-item-count-label="videos" data-context-item-count="' +
        e[i].gridPlaylistRenderer.videoCountText.runs[0].text +
        '" data-context-item-user="' +
        authoruserid +
        '" data-context-item-title="' +
        e[i].gridPlaylistRenderer.title.runs[0].text +
        '" data-context-item-id="' +
        e[i].gridPlaylistRenderer.playlistId +
        '" data-context-item-videos="["' +
        e[i].gridPlaylistRenderer.navigationEndpoint.watchEndpoint.videoId +
        '", "' +
        e[i].gridPlaylistRenderer.navigationEndpoint.watchEndpoint.videoId +
        '", "' +
        e[i].gridPlaylistRenderer.navigationEndpoint.watchEndpoint.videoId +
        ']">\n          <a href="/watch?v=' +
        e[
          i
        ].gridPlaylistRenderer.title.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
          "?v="
        )[1] +
        '" class="yt-pl-thumb-link yt-uix-contextlink yt-uix-sessionlink " data-sessionlink="">\n      <span class="yt-pl-thumb ">\n    <span class="video-thumb ux-thumb yt-thumb-default-194 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img data-thumb="' +
        e[i].gridPlaylistRenderer.thumbnail.thumbnails[0].url +
        '" src="' +
        e[i].gridPlaylistRenderer.thumbnail.thumbnails[0].url +
        '" alt="Thumbnail" width="194" data-group-key="thumb-group-0"><span class="vertical-align"></span></span></span></span>\n\n    <span class="sidebar sidebar-height-109">\n        <span class="video-count-wrapper">\n          <span class="video-count-block">\n            <span class="count-label">\n              ' +
        e[i].gridPlaylistRenderer.videoCountText.runs[0].text +
        '\n            </span>\n            <span class="text-label">\n              videos\n            </span>\n          </span>\n        </span>\n      <span class="side-thumbs">\n          <span class="sidethumb ">\n              <span class="video-thumb ux-thumb yt-thumb-default-43 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img data-thumb="' +
        e[i].gridPlaylistRenderer.thumbnail.thumbnails[0].url +
        '" src="' +
        e[i].gridPlaylistRenderer.thumbnail.thumbnails[0].url +
        '" alt="Thumbnail" width="43" data-group-key="thumb-group-0"><span class="vertical-align"></span></span></span></span>\n          </span>\n          <span class="sidethumb ">\n              <span class="video-thumb ux-thumb yt-thumb-default-43 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img data-thumb="' +
        e[i].gridPlaylistRenderer.thumbnail.thumbnails[0].url +
        '" src="' +
        e[i].gridPlaylistRenderer.thumbnail.thumbnails[0].url +
        '" alt="Thumbnail" width="43" data-group-key="thumb-group-0"><span class="vertical-align"></span></span></span></span>\n          </span>\n          <span class="sidethumb ">\n              <span class="video-thumb ux-thumb yt-thumb-default-43 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img data-thumb="' +
        e[i].gridPlaylistRenderer.thumbnail.thumbnails[0].url +
        '" src="' +
        e[i].gridPlaylistRenderer.thumbnail.thumbnails[0].url +
        '" alt="Thumbnail" width="43" data-group-key="thumb-group-0"><span class="vertical-align"></span></span></span></span>\n          </span>\n      </span>\n    </span>\n      <span class="yt-pl-thumb-overlay">\n        <span class="yt-pl-thumb-overlay-content">\n          <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\nPlay all\n        </span>\n      </span>\n  </span>\n\n  </a>\n\n    <span class="content-item-detail">\n      <a class="content-item-title" href="/playlist?list=' +
        e[
          i
        ].gridPlaylistRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
          "list="
        )[1] +
        '" dir="ltr">\n        ' +
        e[i].gridPlaylistRenderer.title.runs[0].text +
        '\n      </a>\n      <span class="content-item-metadata">\n        <span class="content-item-view-count">\n          ' +
        a +
        "\n        </span>\n      </span>\n    </span>\n  </span>\n\n\n    </li>";
    }

    document
      .querySelector(".channels-browse-content-grid.context-data-container")
      .insertAdjacentHTML("beforeend", n);
  }

  function buildChannelFeatured() {
    var e = document.createElement("div");
    e.setAttribute(
      "class",
      "channel-tab-content channel-layout-two-column selected   blogger-template "
    ),
      document.querySelector("#branded-page-body").append(e);
    var t = document.createElement("div");
    t.setAttribute("class", "tab-content-body"),
      document
        .querySelector("#branded-page-body .channel-tab-content")
        .append(t);
    var n = document.createElement("div");
    n.setAttribute("class", "featured-top-pane"),
      (n.innerHTML = "\n        \n      "),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body"
        )
        .append(n);
    var a = document.createElement("div");
    a.setAttribute("class", "primary-pane"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body"
        )
        .append(a);
    var r = document.createElement("div");
    r.setAttribute("class", "secondary-pane"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body"
        )
        .append(r),
      buildSecondaryPane();
  }

  function buildSecondaryPane() {
    var e = document.createElement("div");
    e.setAttribute(
      "class",
      "user-profile channel-module yt-uix-c3-module-container "
    ),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane"
        )
        .append(e);
    var t = document.createElement("div");
    t.setAttribute(
      "class",
      "channel-module other-channels yt-uix-c3-module-container other-channels-compact"
    ),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane"
        )
        .append(t);
    var n = document.createElement("div");
    n.setAttribute("class", "module-view profile-view-module"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .user-profile"
        )
        .append(n);
    var a = document.createElement("h2");
    (a.innerHTML = "\nAbout " + authorchannelname + "\n        "),
      isverified &&
        (a.innerHTML +=
          '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified" data-tooltip-text="Verified">\n  </span>'),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .user-profile .module-view"
        )
        .append(a);
    var r = document.createElement("div");
    r.setAttribute("class", "section first"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .user-profile .module-view"
        )
        .append(r);
    var i = document.createElement("div");
    i.setAttribute("class", "section created-by-section"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .user-profile .module-view"
        )
        .append(i);
    var o = document.createElement("div");
    o.setAttribute("class", "user-profile-item"),
      (o.innerHTML =
        '\nby <span class="yt-user-name " dir="ltr">' +
        authoruserid +
        "</span>"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .user-profile .module-view .created-by-section"
        )
        .append(o);
    var s = document.createElement("ul");
    (s.innerHTML =
      '<li class="user-profile-item ">\n        <span class="item-name">Date Joined</span>\n      <span class="value">' +
      authorjoindate +
      "</span>\n    </li>"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .user-profile .module-view .created-by-section"
        )
        .append(s);
    var c = document.createElement("div");

    if (
      (c.setAttribute("class", "module-view other-channels-view"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .other-channels"
        )
        .append(c),
      null != featurechannelspath)
    ) {
      var d = document.createElement("h2");
      (d.innerHTML = "Featured Channels"),
        document
          .querySelector(
            "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .other-channels .other-channels-view"
          )
          .append(d);
      var l = document.createElement("ul");
      l.setAttribute("class", "channel-summary-list "),
        document
          .querySelector(
            "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .other-channels .other-channels-view"
          )
          .append(l),
        buildFeaturedChannels();
    }
  }

  function buildFeaturedChannels() {
    var e =
        featurechannelspath.itemSectionRenderer.contents[0].shelfRenderer
          .content.horizontalListRenderer.items,
      t = "";

    for (i = 0, j = e.length; i < j; i++) {
      var n = "";

      try {
        n =
          '<span class="subscriber-count">\n    <strong>' +
          e[i].gridChannelRenderer.subscriberCountText.simpleText.split(
            " "
          )[0] +
          "</strong>\n" +
          e[i].gridChannelRenderer.subscriberCountText.simpleText.split(
            " "
          )[1] +
          "\n\t\t\t\t</span>";
      } catch (e) {}

      t +=
        '<li class="yt-tile-visible yt-uix-tile">\n          <div class="channel-summary clearfix channel-summary-compact">\n    <div class="channel-summary-thumb">\n          <span class="video-thumb  yt-thumb yt-thumb-46">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
        e[i].gridChannelRenderer.thumbnail.thumbnails[0].url +
        '" width="46" data-group-key="thumb-group-1">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n\n    </div>\n    <div class="channel-summary-info">\n      <h3 class="channel-summary-title">\n        <span class="qualified-channel-title ellipsized" title="' +
        e[i].gridChannelRenderer.title.simpleText +
        '"><span class="qualified-channel-title-wrapper">  <span class="qualified-channel-title-text">\n      <a href="' +
        e[i].gridChannelRenderer.navigationEndpoint.browseEndpoint
          .canonicalBaseUrl +
        '" dir="ltr" class="yt-uix-tile-link">\n        ' +
        e[i].gridChannelRenderer.title.simpleText +
        "\n      </a>\n  </span>\n</span></span>\n      </h3>\n        " +
        n +
        "\n\n    </div>\n  </div>\n\n      </li>";
    }

    document
      .querySelector(
        "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .other-channels .other-channels-view .channel-summary-list"
      )
      .insertAdjacentHTML("beforeend", t);
  }
}
