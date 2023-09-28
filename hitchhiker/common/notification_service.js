function injectNotificationBody() {
  document.querySelector("#sb-wrapper") ||
    (document.querySelector("#gb").outerHTML +=
      '<div id="sb-wrapper">\n    <div id="sb-container" class="sb-card sb-off">\n      <div class="sb-card-arrow"></div>\n      <div class="sb-card-border">\n        <div class="sb-card-body-arrow"></div>\n        <div class="sb-card-content" id="sb-target"></div>\n      </div>\n    </div>\n    <div id="sb-onepick-target" class="sb-off" style="top: 128.5px;"></div>\n  </div>');
  var t = !1;
  document.querySelector("#masthead-expanded-lists-container .yt-uix-slider") ||
    v3CraftPlaylistMasthead(),
    (document.querySelector("#yt-masthead-user #sb-button-notify").onclick =
      function () {
        document.querySelector("#sb-container.sb-off")
          ? document
              .querySelector("#sb-container")
              .setAttribute("class", "sb-card sb-on sb-card-notif")
          : document
              .querySelector("#sb-container")
              .setAttribute("class", "sb-card sb-off"),
          0 == t && (injectV3Notification(), (t = !0));
      }),
    window.location.href.includes("/watch/") || v3LoadPlayer(),
    1 == authinfo.LOGGED_IN &&
      document
        .querySelector("body")
        .insertAdjacentHTML(
          "beforeend",
          '<ul id="upload-button-menu" class="yt-uix-button-menu yt-uix-button-menu-default yt-uix-button-menu-external hid" role="menu" aria-haspopup="true" style="min-width: 28px; left: 725.156px; top: 38px;"><li id="upload-menu-video-manager" role="menuitem"><a href="/my_videos" class="yt-uix-button-menu-item upload-menu-link"><img class="upload-menu-vm" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">Video Manager</a></li><li id="upload-menu-analytics" role="menuitem"><a href="https://www.youtube.com/analytics" class="yt-uix-button-menu-item upload-menu-link"><img class="upload-menu-analytics" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">Analytics</a></li></ul>'
        );
}

async function injectV3Notification() {
  var t =
    '<div id="v3notifparent" style="background-color:#e6e6e6; width:440px; height:550px;">\n<span id="v3title">' +
    v3.UIMSG[v3.nationIndex].NOTIFICATIONS +
    '</span>\n<button id="v3setting" onclick="window.location = \'https://www.youtube.com/account_notifications\';"><img id="v3setting_icon" src="https://i.imgur.com/t056oaw.png"></button>\n<ul id="v3notifcontainer">\n<p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n</ul>\n</div><style>#v3notifparent{font-family:Arial,Helvetica,sans-serif;background-color:#ddd!important}.sb-card-body-arrow{border-bottom-color:#ddd}#v3title{color:#333;font-size:15px;font-weight:500;position:relative;left:172px;top:20px}#v3setting{position:absolute;left:390px;top:20px;border:none}#v3notifparent:after{position:absolute;content:url(https://imgur.com/ebeHsYU.png);top:9px;left:10px}#v3setting_logo{position:absolute;width:65px;top:2px}#v3notification{display:block;background:#fff;margin-bottom:15px;margin-left:9px;width:398px;position:relative;margin-top:12px;padding-top:9px;padding-bottom:5px;padding-left:9px;padding-right:14px;box-shadow:0 10px 20px rgba(0,0,0,.1),0 1px 6px rgba(0,0,0,.23)}#v3notification:first-of-type{position:relative;top:0;margin-top:0}#v3notifcontainer{width:440px;margin-left:0;margin-top:40px;height:460px;overflow-y:auto;overflow-x:hidden}#v3notif_authorpic,#v3notif_content{display:inline-block;padding-right:5px}#v3notif_content span{display:block}#v3notif_header{font-weight:550;font-size:13px;position:relative;top:-20px;max-width:320px;height:30px!important;overflow:hidden;white-space:break-spaces;text-overflow:ellipsis}#v3notif_info{font-size:13px;margin-left:1px;max-width:320px;position:absolute;bottom:9px;height:14.5px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#v3notifparent a{text-decoration:none!important}#v3notifparent a:not(:hover){color:#000}#v3notif_authorpic,#v3notif_authorpic img{width:50px;height:50px}</style>';
  document.querySelector(".sb-card-content").innerHTML = t;
  var e =
    '{\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
    authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
    '",\r\n\t\t\t"hl": "' +
    authinfo.HL +
    '"\r\n\t\t}\r\n\t},\r\n\t"notificationsMenuRequestType":"NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX",\r\n}\r\n';
  await v3.innerTube
    .AJAX(
      "notification/get_notification_menu?",
      e,
      "1",
      authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION
    )
    .then((t) => {
      var e = t.actions[0].openPopupAction.popup.multiPageMenuRenderer.sections,
        n = "";

      for (i = 0, j = e.length; i < j; i++) {
        var s = e[i].multiPageMenuNotificationSectionRenderer.items;

        for (x = 0, y = s.length; x < y; x++)
          if (void 0 !== s[x].notificationRenderer) {
            var o = "";
            void 0 !==
            s[x].notificationRenderer.navigationEndpoint.watchEndpoint
              ? (o =
                  "/watch?v=" +
                  s[x].notificationRenderer.navigationEndpoint.watchEndpoint
                    .videoId +
                  "&v3cv=1&app=true")
              : void 0 !==
                  s[x].notificationRenderer.navigationEndpoint
                    .getCommentsFromInboxCommand &&
                (o =
                  "/watch?v=" +
                  s[x].notificationRenderer.navigationEndpoint
                    .getCommentsFromInboxCommand.videoId),
              (n +=
                '<li id="v3notification">\n<a id="v3notifredir" href="' +
                o +
                '">\n<div id="v3notif_authorpic"><img src="' +
                s[x].notificationRenderer.thumbnail.thumbnails[0].url +
                '"></div>\n<div id="v3notif_content">\n<span id="v3notif_header">' +
                s[x].notificationRenderer.shortMessage.simpleText +
                '</span>\n<span id="v3notif_info">' +
                s[x].notificationRenderer.sentTimeText.simpleText +
                "</span>\n</div>\n</a>\n\t\t\t\t</li>");
          }
      }

      (document.querySelector("#v3notifcontainer").innerHTML = n),
        document
          .querySelector("#yt-masthead-user #sb-button-notify")
          .className.includes("sb-notif-off") ||
          (document.querySelector(
            "#yt-masthead-user #sb-button-notify"
          ).className =
            "yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon sb-notif-off");
    });
}

function v3CraftPlaylistMasthead() {
  var t = new XMLHttpRequest();
  t.open("GET", "https://www.youtube.com/profile", !0),
    (t.onload = function () {
      var e = new XMLHttpRequest();
      e.open("GET", t.responseURL + "/playlists", !0),
        (e.onload = function () {
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
                      parseInt(
                        e.responseText.search("var ytInitialData = ") + 20
                      )
                    )
                    .search("</script>") - 1
                )
              )
          );

          try {
            t =
              t.contents.twoColumnBrowseResultsRenderer.tabs[2].tabRenderer
                .content.sectionListRenderer.contents[0].itemSectionRenderer
                .contents[0].gridRenderer.items;
          } catch (e) {
            try {
              t =
                t.contents.twoColumnBrowseResultsRenderer.tabs[2].tabRenderer
                  .content.sectionListRenderer.contents[0].itemSectionRenderer
                  .contents[0].shelfRenderer.content.horizontalListRenderer
                  .items;
            } catch (t) {}
          }

          var n = "";

          for (
            n +=
              '<div id="masthead-expanded-lists-container">\n   <div data-slider-offset="0" class="yt-uix-slider yt-uix-slider-fluid yt-rounded">\n      <button rel="prev" class="yt-uix-button yt-uix-button-default yt-uix-slider-prev"><img class="yt-uix-slider-prev-arrow" src="/static/pixel-vfl3z5WfW.gif" alt=""></button>\n      <button rel="next" class="yt-uix-button yt-uix-button-default yt-uix-slider-next"><img class="yt-uix-slider-next-arrow" src="/static/pixel-vfl3z5WfW.gif" alt=""></button>\n      <div id="masthead-expanded-lists-content" class="yt-uix-slider-body">\n         <ul class="yt-uix-slider-list" style="font-size: 11px; left: 0px;">',
              i = 0,
              j = t.length - 1;
            i < j;
            i++
          )
            t[i].gridPlaylistRenderer &&
              (n +=
                '<li class="playlist-bar-item yt-uix-slider-item">\n               <a data-sessionlink="" class="yt-uix-sessionlink playlist-thumb-section" href="/playlist?list=' +
                t[i].gridPlaylistRenderer.playlistId +
                '&v3cv=1&app=true" title="' +
                t[i].gridPlaylistRenderer.title.runs[0].text +
                '">\n                  <span class="yt-uix-simple-thumb-wrap yt-thumb-160 "><span class="playlist-data-section"><span class="list-video-count">' +
                t[i].gridPlaylistRenderer.videoCountShortText.simpleText +
                '</span><span class="playlist-data-item-title list-title">' +
                t[i].gridPlaylistRenderer.title.runs[0].text +
                '</span></span><img data-thumb-manual="true" src="' +
                t[i].gridPlaylistRenderer.thumbnailRenderer
                  .playlistVideoThumbnailRenderer.thumbnail.thumbnails[0].url +
                '" data-thumb="' +
                t[i].gridPlaylistRenderer.thumbnailRenderer
                  .playlistVideoThumbnailRenderer.thumbnail.thumbnails[0].url +
                '" width="160"><span class="yt-thumb-clip" style="display: none;"><span class="yt-thumb-clip-inner"><span class="vertical-align"></span></span></span></span>\n                  <span class="screen video-actions">\n                     <div class="play-all"><img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="play-arrow ">' +
                v3.UIMSG[v3.nationIndex].PLAY_ALL +
                "</div>\n                  </span>\n               </a>\n            </li>");

          (n +=
            '<li class="playlist-bar-item yt-uix-slider-slide-unit" id="howto-addto">\n               <p>' +
            v3.UIMSG[v3.nationIndex].MASTHEAD_INFO_PLAYLIST_BEGGINER +
            '</p>\n            </li>\n         </ul>\n         <div class="yt-uix-slider-shade-left"></div>\n         <div class="yt-uix-slider-shade-right"></div>\n      </div>\n   </div>\n</div>'),
            (document.querySelector("#masthead-expanded-sandbar").innerHTML =
              n),
            (document.querySelector(
              "#masthead-expanded-lists-container > div > button[rel=prev]"
            ).onclick = function () {
              slideMastheadPlaylists(1);
            }),
            (document.querySelector(
              "#masthead-expanded-lists-container > div > button[rel=next]"
            ).onclick = function () {
              slideMastheadPlaylists(2);
            });
        }),
        e.send();
    }),
    t.send();
}

function slideMastheadPlaylists(t) {
  1 == t
    ? "0px" !=
        document.querySelector(
          "#masthead-expanded-lists-container > .yt-uix-slider ul"
        ).style.left &&
      document.querySelector(
        "#masthead-expanded-lists-container > .yt-uix-slider ul"
      ).offsetWidth >
        document.querySelector("#masthead-expanded-lists-content")
          .offsetWidth &&
      (2 *
        document.querySelector("#masthead-expanded-lists-content").offsetWidth >
      document.querySelector(
        "#masthead-expanded-lists-container > .yt-uix-slider ul"
      ).offsetWidth
        ? (document
            .querySelector(
              "#masthead-expanded-lists-container > .yt-uix-slider"
            )
            .classList.add("yt-uix-slider-is-moving"),
          (document.querySelector(
            "#masthead-expanded-lists-container > .yt-uix-slider ul"
          ).style.left = "0px"),
          setTimeout(function () {
            document
              .querySelector(
                "#masthead-expanded-lists-container > .yt-uix-slider"
              )
              .classList.remove("yt-uix-slider-is-moving"),
              document
                .querySelector(
                  "#masthead-expanded-lists-container > .yt-uix-slider"
                )
                .classList.add("yt-uix-slider-at-head");
          }, 10))
        : (document
            .querySelector(
              "#masthead-expanded-lists-container > .yt-uix-slider"
            )
            .classList.add("yt-uix-slider-is-moving"),
          parseInt(
            parseInt(
              document
                .querySelector(
                  "#masthead-expanded-lists-container > .yt-uix-slider ul"
                )
                .style.left.split("px")[0]
            ) +
              document.querySelector("#masthead-expanded-lists-content")
                .offsetWidth
          ) < 0
            ? (document.querySelector(
                "#masthead-expanded-lists-container > .yt-uix-slider ul"
              ).style.left =
                parseInt(
                  parseInt(
                    document
                      .querySelector(
                        "#masthead-expanded-lists-container > .yt-uix-slider ul"
                      )
                      .style.left.split("px")[0]
                  ) +
                    document.querySelector("#masthead-expanded-lists-content")
                      .offsetWidth
                ) + "px")
            : ((document.querySelector(
                "#masthead-expanded-lists-container > .yt-uix-slider ul"
              ).style.left = "0px"),
              setTimeout(function () {
                document
                  .querySelector(
                    "#masthead-expanded-lists-container > .yt-uix-slider"
                  )
                  .classList.add("yt-uix-slider-at-head");
              }, 10)),
          setTimeout(function () {
            document
              .querySelector(
                "#masthead-expanded-lists-container > .yt-uix-slider"
              )
              .classList.remove("yt-uix-slider-is-moving");
          }, 10)))
    : document.querySelector(
        "#masthead-expanded-lists-container > .yt-uix-slider ul"
      ).offsetWidth >
        document.querySelector("#masthead-expanded-lists-content")
          .offsetWidth &&
      (2 *
        document.querySelector("#masthead-expanded-lists-content").offsetWidth >
      document.querySelector(
        "#masthead-expanded-lists-container > .yt-uix-slider ul"
      ).offsetWidth
        ? (document
            .querySelector(
              "#masthead-expanded-lists-container > .yt-uix-slider"
            )
            .classList.add("yt-uix-slider-is-moving"),
          (document.querySelector(
            "#masthead-expanded-lists-container > .yt-uix-slider ul"
          ).style.left =
            (
              -1 *
              document.querySelector("#masthead-expanded-lists-content")
                .offsetWidth
            ).toString() + "px"),
          setTimeout(function () {
            document
              .querySelector(
                "#masthead-expanded-lists-container > .yt-uix-slider"
              )
              .classList.remove("yt-uix-slider-is-moving"),
              document
                .querySelector(
                  "#masthead-expanded-lists-container > .yt-uix-slider"
                )
                .classList.add("yt-uix-slider-at-tail");
          }, 10))
        : (document
            .querySelector(
              "#masthead-expanded-lists-container > .yt-uix-slider"
            )
            .classList.add("yt-uix-slider-is-moving"),
          parseInt(
            parseInt(
              document
                .querySelector(
                  "#masthead-expanded-lists-container > .yt-uix-slider ul"
                )
                .style.left.split("px")[0]
            ) -
              document.querySelector("#masthead-expanded-lists-content")
                .offsetWidth
          ) >
          -1 *
            parseInt(
              document.querySelector(
                "#masthead-expanded-lists-container > .yt-uix-slider ul"
              ).offsetWidth -
                document.querySelector("#masthead-expanded-lists-content")
                  .offsetWidth
            )
            ? (document.querySelector(
                "#masthead-expanded-lists-container > .yt-uix-slider ul"
              ).style.left =
                parseInt(
                  parseInt(
                    document
                      .querySelector(
                        "#masthead-expanded-lists-container > .yt-uix-slider ul"
                      )
                      .style.left.split("px")[0]
                  ) -
                    document.querySelector("#masthead-expanded-lists-content")
                      .offsetWidth
                ).toString() + "px")
            : ((document.querySelector(
                "#masthead-expanded-lists-container > .yt-uix-slider ul"
              ).style.left =
                (
                  -1 *
                  parseInt(
                    document.querySelector(
                      "#masthead-expanded-lists-container > .yt-uix-slider ul"
                    ).offsetWidth -
                      document.querySelector("#masthead-expanded-lists-content")
                        .offsetWidth
                  )
                ).toString() + "px"),
              setTimeout(function () {
                document
                  .querySelector(
                    "#masthead-expanded-lists-container > .yt-uix-slider"
                  )
                  .classList.add("yt-uix-slider-at-tail");
              }, 10)),
          setTimeout(function () {
            document
              .querySelector(
                "#masthead-expanded-lists-container > .yt-uix-slider"
              )
              .classList.remove("yt-uix-slider-is-moving");
          }, 10)));
}

function v3LoadPlayer() {
  var t = document.createElement("script");
  (t.src =
    "//s.ytimg.com/yts/jsbin/html5player-en_US-vfln6g5Eq/html5player.js"),
    (t.onload = function () {
      t.remove();
    }),
    document.head.appendChild(t);
}

$(document).on(
  "click",
  ".ux-thumb-wrap .yt-uix-button.addto-button",
  function (t) {
    var e = {
      id: "WL"
    };
    (e.videoid = t.currentTarget.getAttribute("data-video-ids")),
      t.currentTarget.className.includes("addto-watch-later-button-success")
        ? (v3.innerTube.editPlaylist(e.videoid, e.id, 1),
          t.currentTarget.setAttribute(
            "class",
            "addto-button video-actions spf-nolink addto-watch-later-button yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip"
          ))
        : (v3.innerTube.editPlaylist(e.videoid, e.id, 0),
          t.currentTarget.setAttribute(
            "class",
            "addto-button video-actions spf-nolink addto-watch-later-button-success yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip"
          ));
  }
);
