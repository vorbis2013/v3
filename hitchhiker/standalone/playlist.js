if (
  window.location.href.includes("/playlist?list") &&
  !window.location.href.includes("v3cv=0")
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

  v3.htmlBuilderConfig.core.NIRVANA && (v3.htmlBuilderConfig.core.NIRVANA = !1);
  var playlistthumb,
    playlistauthor,
    playlisttitle,
    playlistdesc,
    playlistcount,
    playlistviews,
    playlistplayurl,
    authorchannelid,
    userpicture,
    playlistupdate,
    ytdata = {},
    authinfo = {};

  function v3PlaylistPage() {
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
        .setAttribute("class", v3.htmlBuilderConfig.playlist),
      document.body.classList.add("exp-fixed-masthead"),
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
        '<script>var authinfo = {};\r\nauthinfo.INNERTUBE_API_KEY = yt.config_.INNERTUBE_API_KEY;\r\nauthinfo.INNERTUBE_CONTEXT = yt.config_.INNERTUBE_CONTEXT;\r\nauthinfo.INNERTUBE_CONTEXT_CLIENT_VERSION = yt.config_.INNERTUBE_CONTEXT_CLIENT_VERSION;\r\nauthinfo.LOGGED_IN = yt.config_.LOGGED_IN;\r\nauthinfo.DELEGATED_SESSION_ID = yt.config_.DELEGATED_SESSION_ID;\r\nauthinfo.HL = yt.config_.HL;\r\nauthinfo.GL = yt.config_.GL;\r\nauthinfo.VISITOR_DATA = yt.config_.VISITOR_DATA;\r\ndocument.querySelector("#ytauthdata-temp-container").innerHTML = JSON.stringify(authinfo);</script>'
      ),
      (authinfo = JSON.parse(
        document.querySelector("#ytauthdata-temp-container").innerHTML
      )),
      parseYtData(ytdata),
      1 == authinfo.LOGGED_IN &&
        (getGuideDataCh(),
        (gbarname = v3.UIMSG[v3.nationIndex].GBAR_INFO_MY_ACCOUNT));
    var n = document.createElement("div");
    n.setAttribute("id", "body-container"),
      document.querySelector("body").prepend(n),
      buildPageFrame(),
      buildPlaylist(),
      v3mainfriend(),
      document.querySelector("#ytauthdata-temp-container").remove(),
      document.querySelector("#ytdata-temp-container").remove();
  }

  function parseYtData(e) {
    1 == authinfo.LOGGED_IN,
      (playlistupdate = "");

    try {
      playlistupdate =
        "<p>\n          " +
        e.sidebar.playlistSidebarRenderer.items[0]
          .playlistSidebarPrimaryInfoRenderer.stats[2].runs[0].text +
        e.sidebar.playlistSidebarRenderer.items[0]
          .playlistSidebarPrimaryInfoRenderer.stats[2].runs[1].text +
        "\n        </p>";
    } catch (e) {}

    try {
      authorchannelid =
        e.sidebar.playlistSidebarRenderer.items[1]
          .playlistSidebarSecondaryInfoRenderer.videoOwner.videoOwnerRenderer
          .navigationEndpoint.browseEndpoint.browseId;
    } catch (e) {
      console.log(e);
    }

    getAboutAuthor();

    try {
      playlistthumb =
        e.sidebar.playlistSidebarRenderer.items[0]
          .playlistSidebarPrimaryInfoRenderer.thumbnailRenderer
          .playlistVideoThumbnailRenderer.thumbnail.thumbnails[
          parseInt(
            e.sidebar.playlistSidebarRenderer.items[0]
              .playlistSidebarPrimaryInfoRenderer.thumbnailRenderer
              .playlistVideoThumbnailRenderer.thumbnail.thumbnails.length - 1
          )
        ].url;
    } catch (e) {
      console.log(e);
    }

    try {
      playlistauthor =
        e.sidebar.playlistSidebarRenderer.items[1]
          .playlistSidebarSecondaryInfoRenderer.videoOwner.videoOwnerRenderer
          .title.runs[0].text;
    } catch (e) {
      console.log(e);
    }

    try {
      playlisttitle =
        e.sidebar.playlistSidebarRenderer.items[0]
          .playlistSidebarPrimaryInfoRenderer.title.runs[0].text;
    } catch (e) {}

    try {
      playlisttitle = e.metadata.playlistMetadataRenderer.title;
    } catch (e) {}

    (playlistcount =
      e.sidebar.playlistSidebarRenderer.items[0]
        .playlistSidebarPrimaryInfoRenderer.stats[0].runs.length > 1
        ? e.sidebar.playlistSidebarRenderer.items[0]
            .playlistSidebarPrimaryInfoRenderer.stats[0].runs[0].text +
          e.sidebar.playlistSidebarRenderer.items[0]
            .playlistSidebarPrimaryInfoRenderer.stats[0].runs[1].text
        : e.sidebar.playlistSidebarRenderer.items[0]
            .playlistSidebarPrimaryInfoRenderer.stats[0].runs[0].text),
      "No" ==
        (playlistviews =
          e.sidebar.playlistSidebarRenderer.items[0].playlistSidebarPrimaryInfoRenderer.stats[1].simpleText.split(
            " "
          )[0]) && (playlistviews = "0"),
      (playlistplayurl =
        "/watch?v=" +
        e.sidebar.playlistSidebarRenderer.items[0].playlistSidebarPrimaryInfoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
          "?v="
        )[1]),
      (playlistdesc = "No description available.");

    try {
      e.sidebar.playlistSidebarRenderer.items[0]
        .playlistSidebarPrimaryInfoRenderer.description.simpleText &&
        (playlistdesc =
          e.sidebar.playlistSidebarRenderer.items[0]
            .playlistSidebarPrimaryInfoRenderer.description.simpleText);
    } catch (e) {}
  }

  function v3mainfriend() {
    var e = new Date().getTime();
    console.log("Page have loaded in", e - before_loadtime, "ms"),
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
    var t = document.createElement("script");
    (t.src = chrome.extension.getURL("hitchhiker/common/searchbox_service.js")),
      (t.onload = function () {
        console.log("search load"), v3SearchFriend();
      }),
      document.head.appendChild(t);
  }

  function isAboutSection(e) {
    try {
      if ("About" == e.tabRenderer.title) return !0;
    } catch (e) {
      return !1;
    }
  }

  function getAboutAuthor() {
    const e = new XMLHttpRequest();
    e.open(
      "GET",
      "https://www.youtube.com/channel/" + authorchannelid + "/about"
    ),
      e.send(),
      (e.onload = () => {
        document.querySelector("html").setAttribute("plloaded", "");
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

        try {
          var n =
            t.header.c4TabbedHeaderRenderer.tvBanner.thumbnails[
              parseInt(
                t.header.c4TabbedHeaderRenderer.tvBanner.thumbnails.length - 1
              )
            ].url;
          document.querySelector("#branded-page-body-container") &&
            document
              .querySelector("#branded-page-body-container")
              .setAttribute(
                "style",
                "background-attachment: fixed; background-color: #000000; background-size: 100%; background-image: url(" +
                  n +
                  ");"
              );
        } catch (e) {}

        var a =
            t.contents.twoColumnBrowseResultsRenderer.tabs.find(isAboutSection),
          i = "";
        t.header.c4TabbedHeaderRenderer.badges &&
          (i =
            '<span class="yt-user-name-icon-verified">\n    <img src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified" data-tooltip-text="Verified">\n  </span>');
        var r = "";

        try {
          r =
            a.tabRenderer.content.sectionListRenderer.contents[0]
              .itemSectionRenderer.contents[0].channelAboutFullMetadataRenderer
              .viewCountText.simpleText;
        } catch (e) {}

        try {
          try {
            channelinfo =
              a.tabRenderer.content.sectionListRenderer.contents[0]
                .itemSectionRenderer.contents[0]
                .channelAboutFullMetadataRenderer.description.simpleText;
          } catch (e) {
            channelinfo = "No description available.";
          }

          var s =
            '<div class="channel-module">\n    <div class="playlist-creator-info">\n      <h2>About ' +
            t.microformat.microformatDataRenderer.title +
            i +
            '</h2>\n              <div class="yt-uix-expander yt-c3-expander">\n    <div class="yt-uix-expander-body">\n      <p>' +
            channelinfo +
            '</p>\n    </div>\n    \n  </div>\n\n\n      <div class="creator-links">\n        <a href="' +
            t.metadata.channelMetadataRenderer.ownerUrls[0] +
            '/playlists">\nView all playlists\n        </a>\n        <a href="' +
            t.metadata.channelMetadataRenderer.ownerUrls[0] +
            '/videos">\nView all videos\n        </a>\n    </div>\n      <div class="creator-stats">\n\t  <p>\n          ' +
            r +
            '\n        </p>\n      </div>\n        <div class="enable-fancy-subscribe-button">\n            <span class="yt-uix-button-subscription-container yt-uix-button-context-light"></span>\n        </div>\n    </div>\n  </div>';

          if (
            (document
              .querySelector(".secondary-pane")
              .insertAdjacentHTML("beforeend", s),
            t.header.c4TabbedHeaderRenderer.subscribeButton)
          ) {
            var o =
                t.header.c4TabbedHeaderRenderer.subscribeButton
                  .subscribeButtonRenderer.subscribed,
              l = "";

            try {
              l =
                t.header.c4TabbedHeaderRenderer.subscriberCountText.simpleText.split(
                  " "
                )[0];
            } catch (e) {}

            var c = document.createElement("button");
            c.setAttribute("aria-busy", "false"),
              c.setAttribute("aria-role", "button"),
              1 == o
                ? (c.setAttribute(
                    "class",
                    "yt-uix-subscription-button yt-uix-button yt-uix-button-subscribed-branded hover-enabled yt-uix-button-size-default yt-uix-button-has-icon"
                  ),
                  c.setAttribute("title", l + " subscribers"))
                : c.setAttribute(
                    "class",
                    "yt-uix-subscription-button yt-uix-button yt-uix-button-subscribe-branded hover-enabled yt-uix-button-size-default yt-uix-button-has-icon"
                  ),
              c.setAttribute("aria-live", "polite"),
              c.setAttribute("onclick", ";return false;"),
              c.setAttribute("data-sessionlink", ""),
              c.setAttribute("data-channel-external-id", authorchannelid),
              c.setAttribute("data-style-type", "branded"),
              c.setAttribute("data-href", ""),
              c.setAttribute("role", "button"),
              document
                .querySelector(".enable-fancy-subscribe-button")
                .append(c);
            var d = document.createElement("span");
            d.setAttribute("class", "yt-uix-button-icon-wrapper"),
              document
                .querySelector(
                  ".enable-fancy-subscribe-button .yt-uix-subscription-button"
                )
                .append(d);
            var u = document.createElement("img");
            u.setAttribute(
              "class",
              "yt-uix-button-icon yt-uix-button-icon-subscribe"
            ),
              u.setAttribute(
                "src",
                "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"
              ),
              u.setAttribute("alt", ""),
              u.setAttribute("title", ""),
              document
                .querySelector(
                  ".enable-fancy-subscribe-button .yt-uix-subscription-button .yt-uix-button-icon-wrapper"
                )
                .append(u);
            var p = document.createElement("span");
            p.setAttribute("class", "yt-uix-button-content"),
              document
                .querySelector(
                  ".enable-fancy-subscribe-button .yt-uix-subscription-button"
                )
                .append(p);
            var b = document.createElement("span");
            b.setAttribute("class", "subscribe-label"),
              b.setAttribute("aria-label", "Subscribe"),
              (b.innerHTML = "Subscribe"),
              document
                .querySelector(
                  ".enable-fancy-subscribe-button .yt-uix-subscription-button .yt-uix-button-content"
                )
                .append(b);
            var m = document.createElement("span");
            m.setAttribute("class", "subscribed-label"),
              m.setAttribute("aria-label", "Subscribed"),
              (m.innerHTML = "Subscribed"),
              document
                .querySelector(
                  ".enable-fancy-subscribe-button .yt-uix-subscription-button .yt-uix-button-content"
                )
                .append(m);
            var y = document.createElement("span");
            y.setAttribute("class", "unsubscribe-label"),
              y.setAttribute("aria-label", "Unsubscribe"),
              (y.innerHTML = "Unsubscribe"),
              document
                .querySelector(
                  ".enable-fancy-subscribe-button .yt-uix-subscription-button .yt-uix-button-content"
                )
                .append(y);
            var h = document.createElement("button");
            h.setAttribute(
              "class",
              "yt-uix-subscription-preferences-button yt-uix-button yt-uix-button-default yt-uix-button-size-default yt-uix-button-has-icon yt-uix-button-empty"
            ),
              h.setAttribute("type", "button"),
              h.setAttribute("onclick", ";return false;"),
              h.setAttribute("data-sessionlink", ""),
              h.setAttribute("data-channel-external-id", authorchannelid),
              h.setAttribute("role", "button"),
              document
                .querySelector(".enable-fancy-subscribe-button")
                .append(h);
            var v = document.createElement("span");
            v.setAttribute("class", "yt-uix-button-icon-wrapper"),
              document
                .querySelector(
                  ".enable-fancy-subscribe-button .yt-uix-subscription-preferences-button"
                )
                .append(v);
            var g = document.createElement("img");
            g.setAttribute(
              "class",
              "yt-uix-button-icon yt-uix-button-icon-subscription-preferences"
            ),
              g.setAttribute(
                "src",
                "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"
              ),
              g.setAttribute("alt", ""),
              u.setAttribute("title", ""),
              document
                .querySelector(
                  ".enable-fancy-subscribe-button .yt-uix-subscription-preferences-button .yt-uix-button-icon-wrapper"
                )
                .append(g);
            var f = document.createElement("span");
            f.setAttribute(
              "class",
              "yt-subscription-button-subscriber-count-branded-horizontal"
            ),
              (f.innerHTML = deabreviateCnt(l)),
              document
                .querySelector(".enable-fancy-subscribe-button")
                .append(f),
              (document.querySelector(
                ".enable-fancy-subscribe-button"
              ).onclick = function () {
                window.location =
                  "https://www.youtube.com/channel/" + authorchannelid;
              });
          }
        } catch (e) {
          console.log(e);
        }
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
      "https://www.youtube.com/channel/" + authorchannelid + "/about"
    ),
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

        try {
          var n =
            t.contents.twoColumnBrowseResultsRenderer.tabs.find(isAboutSection);

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
            ).innerHTML =
              n.tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].channelAboutFullMetadataRenderer.viewCountText.simpleText.split(
                " "
              )[0];
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
                  n.tabRenderer.content.sectionListRenderer.contents[0]
                    .itemSectionRenderer.contents[0]
                    .channelAboutFullMetadataRenderer.primaryLinks[i]
                    .navigationEndpoint.urlEndpoint.url +
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

              var s = '<div class="user-profile-item">' + r + "</div>";
              document.querySelector(
                ".profile-view-module .section.first"
              ).innerHTML += s;
            }
          } catch (e) {
            console.log(e);
          }
        } catch (e) {
          console.log(e);
        }
      });
  }

  function getFeaturedPopularVideoUser() {
    const e = new XMLHttpRequest();
    e.open(
      "GET",
      "https://www.youtube.com/channel/" +
        authorurl.split("/")[4] +
        "/videos?view=0&sort=p&flow=grid"
    ),
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

        try {
          var n =
              t.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer
                .content.sectionListRenderer.contents[0].itemSectionRenderer
                .contents[0].gridRenderer.items,
            a = document.createElement("div");
          a.setAttribute(
            "class",
            "channels-featured-video channel-module yt-uix-c3-module-container has-visible-edge"
          ),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane"
              )
              .append(a);
          var r = document.createElement("div");
          r.setAttribute("class", "module-view featured-video-view-module"),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channels-featured-video"
              )
              .append(r);
          var s = document.createElement("div");
          s.setAttribute("class", "channels-video-player "),
            s.setAttribute("style", "overflow: hidden;"),
            (s.innerHTML =
              '<iframe id="ytplayer" type="text/html" width="640" height="390"\n  src="https://www.youtube.com/embed/' +
              n[0].gridVideoRenderer.navigationEndpoint.watchEndpoint.videoId +
              '"\n  frameborder="0"></iframe>'),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channels-featured-video .module-view"
              )
              .append(s);
          var o = document.createElement("div");
          o.setAttribute(
            "class",
            "channels-featured-video-details yt-tile-visible clearfix"
          ),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channels-featured-video .module-view"
              )
              .append(o);
          var l = document.createElement("h3");
          l.setAttribute("class", "title"),
            (l.innerHTML =
              '        <a href="' +
              n[0].gridVideoRenderer.navigationEndpoint.commandMetadata
                .webCommandMetadata.url +
              '" class="yt-uix-sessionlink" data-sessionlink="">\n          ' +
              n[0].gridVideoRenderer.title.runs[0].text +
              '\n        </a>\n        <div class="view-count-and-actions">\n              <div class="view-count">\n                <span class="count">\n                  ' +
              n[0].gridVideoRenderer.viewCountText.simpleText.split(" ")[0] +
              "\n                </span>\n" +
              n[0].gridVideoRenderer.viewCountText.simpleText.split(" ")[1] +
              "\n              </div>\n        </div>"),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channels-featured-video .module-view .channels-featured-video-details"
              )
              .append(l);
          var c = document.createElement("p");
          c.setAttribute("class", "channels-featured-video-metadata"),
            (c.innerHTML =
              "<span>by " +
              authorchannelname +
              '</span>\n          <span class="created-date">' +
              n[0].gridVideoRenderer.publishedTimeText.simpleText +
              "</span>"),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channels-featured-video .module-view .channels-featured-video-details"
              )
              .append(c);
          var d = document.createElement("div");
          d.setAttribute(
            "class",
            "single-playlist channel-module yt-uix-c3-module-container"
          ),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane"
              )
              .append(d);
          var u = document.createElement("div");
          u.setAttribute("class", "module-view single-playlist-view-module"),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .single-playlist"
              )
              .append(u);
          var p = document.createElement("div");
          p.setAttribute("class", "blogger-playall"),
            (p.innerHTML =
              '<a class="yt-playall-link yt-playall-link-default yt-uix-sessionlink " href="' +
              authorurl +
              '/videos?view=0&sort=p&flow=grid" data-sessionlink="">\n    <img class="small-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\nView all\n  </a>'),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .single-playlist .module-view"
              )
              .append(p);
          var b = document.createElement("div");
          b.setAttribute("class", "playlist-info"),
            (b.innerHTML =
              '<div class="playlist-info">\n          <h2>Popular videos</h2>\n            <span class="blogger-video-count">1-10 of ' +
              n.length +
              '</span>\n              <hr class="yt-horizontal-rule ">\n\n\n        </div>'),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .single-playlist .module-view"
              )
              .append(b);
          var m,
            y = document.createElement("ul");
          y.setAttribute("class", "gh-single-playlist"),
            (m = n.length > 10 ? 10 : n.length);
          var h = "";

          for (i = 0, j = m; i < j; i++)
            h +=
              '<li class="blogger-video">\n          <div class="video yt-tile-visible">\n    <a href="' +
              n[i].gridVideoRenderer.navigationEndpoint.commandMetadata
                .webCommandMetadata.url +
              '" class="yt-uix-sessionlink" data-sessionlink="">\n        <span class="ux-thumb-wrap contains-addto ">    <span class="video-thumb  yt-thumb yt-thumb-288">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
              n[i].gridVideoRenderer.thumbnail.thumbnails[
                parseInt(n[i].gridVideoRenderer.thumbnail.thumbnails.length - 1)
              ].url +
              '" alt="Thumbnail" width="288">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
              n[i].gridVideoRenderer.thumbnailOverlays.find(isTimeInfo)
                .thumbnailOverlayTimeStatusRenderer.text.simpleText +
              '</span>\n\n\n  <button type="button" class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" onclick=";return false;" title="Watch Later" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
              n[i].gridVideoRenderer.navigationEndpoint.watchEndpoint.videoId +
              '" role="button" data-tooltip-text="Watch Later"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</span>\n      <span class="video-item-content">\n          <span class="video-overview">\n    <span class="title video-title" title="' +
              n[i].gridVideoRenderer.title.runs[0].text +
              '">' +
              n[i].gridVideoRenderer.title.runs[0].text +
              '</span>\n  </span>\n  <span class="video-details">\n    <span class="yt-user-name video-owner" dir="ltr">' +
              authorchannelname +
              '</span>\n      <span class="video-view-count">\n' +
              n[i].gridVideoRenderer.viewCountText.simpleText +
              '\n      </span>\n      <span class="video-time-published">' +
              n[i].gridVideoRenderer.publishedTimeText.simpleText +
              '</span>\n      <span class="video-item-description">' +
              n[i].gridVideoRenderer.title.accessibility.accessibilityData
                .label +
              "</span>\n  </span>\n\n      </span>\n    </a>\n  </div>\n\n      </li>";

          (y.innerHTML = h),
            document
              .querySelector(
                "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .single-playlist .module-view"
              )
              .append(y);
        } catch (e) {
          console.log(e);
        }
      });
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

  function buildPlaylist() {
    var e = document.createElement("div");
    e.setAttribute("id", "page-container"),
      insertAfter(document.querySelector("#yt-masthead-container"), e);
    var t = document.createElement("div");
    t.setAttribute("id", "page"),
      t.setAttribute("class", "page-default   playlist branded-page "),
      document.querySelector("#page-container").append(t);
    var n = document.createElement("div");
    n.setAttribute("id", "content"), document.querySelector("#page").append(n);
    var a = document.createElement("div");
    a.setAttribute("id", "branded-page-default-bg"),
      a.setAttribute("class", "ytg-base"),
      document.querySelector("#content").append(a);
    var i = document.createElement("div");
    i.setAttribute("id", "branded-page-body-container"),
      i.setAttribute("class", "ytg-base clearfix"),
      i.setAttribute(
        "style",
        "background-color: #000000; background-size: 100%;"
      );

    try {
      i.setAttribute(
        "style",
        "background-color: #000000; background-size: 100%;"
      );
    } catch (e) {
      console.log(e);
    }

    document.querySelector("#branded-page-default-bg").append(i);
    var r = document.createElement("div");
    r.setAttribute("id", "branded-page-header-container"),
      r.setAttribute("class", "ytg-wide banner-displayed-mode");
    var s = "";

    try {
      s =
        ytdata.sidebar.playlistSidebarRenderer.items[1]
          .playlistSidebarSecondaryInfoRenderer.videoOwner.videoOwnerRenderer
          .thumbnail.thumbnails[
          parseInt(
            ytdata.sidebar.playlistSidebarRenderer.items[1]
              .playlistSidebarSecondaryInfoRenderer.videoOwner
              .videoOwnerRenderer.thumbnail.thumbnails.length - 1
          )
        ].url;
    } catch (e) {}

    (r.innerHTML =
      '<div id="branded-page-header" class="ytg-wide ytg-box">\n        <a class="profile-thumb" href="/channel/' +
      authorchannelid +
      '">\n    <span class="video-thumb ux-thumb yt-thumb-square-77 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="Thumbnail" src="' +
      s +
      '" width="77"><span class="vertical-align"></span></span></span></span>\n  </a>\n\n\n    <div class="ytg-box">\n      <div class="playlist-info">\n        <div class="header-right">\n          <div class="header-stats ytg-box">\n              <ul>\n    <li class="stat-entry first">\n      <span class="stat-value">' +
      playlistcount.split(" ")[0] +
      '</span>\n      <span class="stat-name">\n        videos\n      </span>\n    </li>\n      <li class="stat-entry">\n        <span class="stat-value">' +
      playlistviews +
      '</span>\n        <span class="stat-name">\n          views\n        </span>\n      </li>\n  </ul>\n\n          </div>\n        </div>\n        <div class="playlist-reference">\n          <h1 title="' +
      playlisttitle +
      '">' +
      playlisttitle +
      '</h1>\n            <p class="channel-author-attribution">\nby <a href="/channel/' +
      authorchannelid +
      '">' +
      playlistauthor +
      '</a>\n            </p>\n        </div>\n            <span id="play-all-button">\n      <a class="yt-playall-link yt-playall-link-dark yt-uix-sessionlink " href="' +
      playlistplayurl +
      '" data-sessionlink="">\n    <img class="small-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">\nPlay all\n  </a>\n\n  </span>\n\n      </div>\n    </div>\n  </div>'),
      document.querySelector("#branded-page-body-container").append(r);
    var o = document.createElement("div");
    o.setAttribute("id", "branded-page-body"),
      document.querySelector("#branded-page-body-container").append(o),
      (document.querySelector("#branded-page-body").innerHTML =
        '<div id="playlist-pane-container">\n    <div class="primary-pane">\n      <div class="playlist-landing ypc-list-container">\n          \n\n\n            \n\n            \n\n          \n\t<ol></ol>\n    <div class="yt-uix-pager" role="navigation">\n\n          \n\n          \n\n          \n\n          \n\n\n        \n<button id="channel-more-related-button" class=" yt-uix-button yt-uix-button-default yt-uix-button-size-default" type="button" onclick=";return false;" data-button-action="" role="button"><span class="yt-uix-button-content"> « Next » </span></button>\n    </div>\n\n      </div>\n    </div>\n      <div class="secondary-pane">\n\n        \n          <div class="channel-module">\n    <div class="playlist-creator-info">\n      <h2>About ' +
        playlisttitle +
        "</h2>\n            <p>" +
        playlistdesc +
        '</p>\n\n\n      <div class="creator-links">\n      </div>\n      <div class="creator-stats">\n\t  ' +
        playlistupdate +
        '\n      </div>\n    </div>\n        <hr class="yt-horizontal-rule ">\n\n  </div>\n\n          \n        \n\n\n      </div>\n  </div>'),
      craftPlaylistPage(),
      createGb();
  }

  waitForElm2("body[data-loaded]").then(function (e) {
    v3PlaylistPage();
  });
  var exp_duration = 0;

  function craftPlaylistPage() {
    var e,
      t =
        ytdata.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer
          .content.sectionListRenderer.contents[0].itemSectionRenderer
          .contents[0].playlistVideoListRenderer.contents;
    e = t[parseInt(t.length - 1)].continuationItemRenderer
      ? t.length - 1
      : t.length;
    var n = "";

    for (i = 0, j = e; i < j; i++) {
      exp_duration += parseInt(t[i].playlistVideoRenderer.lengthSeconds);
      var a = "";

      try {
        a = (a =
          t[i].playlistVideoRenderer.title.accessibility.accessibilityData.label
            .split(
              "by " + t[i].playlistVideoRenderer.shortBylineText.runs[0].text
            )[1]
            .split("ago")[0] + "ago").substring(1);
      } catch (e) {
        console.log(e);
      }

      var r = "even";
      i % 2 == 0 && (r = "odd"),
        (n +=
          '<li class="playlist-video-item\n' +
          r +
          '\n\n">\n          <div class="yt-uix-tile playlist-video-item-base-content">\n      <div class="thumb-container">\n    <div class="ux-thumb-wrap">\n          <span class="video-thumb ux-thumb yt-thumb-default-124 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="Thumbnail" src="' +
          t[i].playlistVideoRenderer.thumbnail.thumbnails[
            parseInt(t[i].playlistVideoRenderer.thumbnail.thumbnails.length - 1)
          ].url +
          '" width="124"><span class="vertical-align"></span></span></span></span>\n          <span class="video-time">' +
          t[i].playlistVideoRenderer.lengthText.simpleText +
          '</span>\n\n          \n\n\n  <button onclick=";return false;" type="button" class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" title="Watch Later" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
          t[i].playlistVideoRenderer.videoId +
          '" role="button"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""></button>\n\n    </div>\n  </div>\n\n\n    <span class="video-index">' +
          t[
            i
          ].playlistVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url
            .split("index=")[1]
            .split("&")[0] +
          '</span>\n\n    <div class="video-info ">\n\n\n\n        <div class="video-overview yt-grid-fluid">\n    <h3 class="video-title-container">\n\n\n      <a href="/watch?v=' +
          t[
            i
          ].playlistVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
            "?v="
          )[1] +
          '" class="yt-uix-tile-link yt-uix-sessionlink" data-sessionlink="">\n        <span class="title video-title " dir="ltr">' +
          t[i].playlistVideoRenderer.title.runs[0].text +
          '</span>\n      </a>\n    </h3>\n\n      <p class="video-details">\n        <span class="video-owner">\nby <span class="yt-user-name " dir="ltr">' +
          t[i].playlistVideoRenderer.shortBylineText.runs[0].text +
          '</span>\n        </span>\n<span class="separator" style="margin-left:-7px; margin-right:2px;">·</span>\n          <span class="video-view-count">\n            ' +
          a +
          "\n          </span>\n      </p>\n\n  </div>\n\n    </div>\n  </div>\n\n      </li>");
    }

    document
      .querySelector(".playlist-landing.ypc-list-container > ol")
      .insertAdjacentHTML("beforeend", n),
      (document.querySelector(".yt-uix-pager").innerHTML +=
        '<p class="yt-spinner hid">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>'),
      e == t.length
        ? (document.querySelector("#channel-more-related-button").remove(),
          showPlaylistDuration(secondsToHms(exp_duration)))
        : (document.querySelector("#channel-more-related-button").onclick =
            function () {
              document
                .querySelector(".yt-uix-pager .yt-spinner")
                .classList.remove("hid"),
                document
                  .querySelector("#channel-more-related-button")
                  .classList.add("hid"),
                getMorePlaylist(
                  t[t.length - 1].continuationItemRenderer.continuationEndpoint
                    .continuationCommand.token
                );
            });
  }

  function showPlaylistDuration(e) {
    document
      .querySelector(".stat-entry.first")
      .insertAdjacentHTML(
        "afterend",
        '<li class="stat-entry">\n        <span class="stat-value">' +
          e +
          '</span>\n        <span class="stat-name">\n          duration\n        </span>\n      </li>'
      );
  }

  async function getMorePlaylist(e) {
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
        console.log(e),
          document
            .querySelector(".yt-uix-pager .yt-spinner")
            .classList.add("hid");
        var t,
          n =
            e.onResponseReceivedActions[0].appendContinuationItemsAction
              .continuationItems;
        t = n[parseInt(n.length - 1)].continuationItemRenderer
          ? n.length - 1
          : n.length;
        var a = "";

        for (i = 0, j = t; i < j; i++) {
          var r = "";

          try {
            r = (r =
              n[
                i
              ].playlistVideoRenderer.title.accessibility.accessibilityData.label
                .split(
                  "by " +
                    n[i].playlistVideoRenderer.shortBylineText.runs[0].text
                )[1]
                .split("ago")[0] + "ago").substring(1);
          } catch (e) {
            console.log(e);
          }

          a +=
            '<li class="playlist-video-item\nodd\n\n">\n          <div class="yt-uix-tile playlist-video-item-base-content">\n      <div class="thumb-container">\n    <div class="ux-thumb-wrap">\n          <span class="video-thumb ux-thumb yt-thumb-default-124 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="Thumbnail" src="' +
            n[i].playlistVideoRenderer.thumbnail.thumbnails[
              parseInt(
                n[i].playlistVideoRenderer.thumbnail.thumbnails.length - 1
              )
            ].url +
            '" width="124"><span class="vertical-align"></span></span></span></span>\n          <span class="video-time">' +
            n[i].playlistVideoRenderer.lengthText.simpleText +
            '</span>\n\n          \n\n\n  <button onclick=";return false;" type="button" class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" title="Watch Later" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
            n[i].playlistVideoRenderer.videoId +
            '" role="button"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""></button>\n\n    </div>\n  </div>\n\n\n    <span class="video-index">' +
            n[
              i
            ].playlistVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url
              .split("index=")[1]
              .split("&")[0] +
            '</span>\n\n    <div class="video-info ">\n\n\n\n        <div class="video-overview yt-grid-fluid">\n    <h3 class="video-title-container">\n\n\n      <a href="/watch?v=' +
            n[
              i
            ].playlistVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
              "?v="
            )[1] +
            '" class="yt-uix-tile-link yt-uix-sessionlink" data-sessionlink="">\n        <span class="title video-title " dir="ltr">' +
            n[i].playlistVideoRenderer.title.runs[0].text +
            '</span>\n      </a>\n    </h3>\n\n      <p class="video-details">\n        <span class="video-owner">\nby <span class="yt-user-name " dir="ltr">' +
            n[i].playlistVideoRenderer.shortBylineText.runs[0].text +
            '</span>\n        </span>\n<span class="separator" style="margin-left:-7px; margin-right:2px;">·</span>\n          <span class="video-view-count">\n            ' +
            r +
            "\n          </span>\n      </p>\n\n  </div>\n\n    </div>\n  </div>\n\n      </li>";
        }

        document
          .querySelector(".playlist-landing.ypc-list-container > ol")
          .insertAdjacentHTML("beforeend", a),
          document
            .querySelector(".playlist-landing.ypc-list-container")
            .appendChild(document.querySelector(".yt-uix-pager")),
          document
            .querySelector("#channel-more-related-button")
            .classList.remove("hid"),
          t == n.length
            ? document.querySelector("#channel-more-related-button").remove()
            : (document.querySelector("#channel-more-related-button").onclick =
                function () {
                  document
                    .querySelector(".yt-uix-pager .yt-spinner")
                    .classList.remove("hid"),
                    document
                      .querySelector("#channel-more-related-button")
                      .classList.add("hid"),
                    getMorePlaylist(
                      n[n.length - 1].continuationItemRenderer
                        .continuationEndpoint.continuationCommand.token
                    );
                });
      });
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
    var i = document.createElement("a");
    i.setAttribute("href", authordefaulturl),
      document.querySelector(".upper-section").append(i);
    var r = document.createElement("span");
    r.setAttribute("class", "channel-thumb"),
      document.querySelector(".upper-section > a").append(r);
    var s = document.createElement("span");
    s.setAttribute("class", "video-thumb  yt-thumb yt-thumb-60"),
      document.querySelector(".upper-section a .channel-thumb").append(s);
    var o = document.createElement("span");
    o.setAttribute("class", "yt-thumb-square"),
      document
        .querySelector(".upper-section a .channel-thumb .video-thumb")
        .append(o);
    var l = document.createElement("span");
    l.setAttribute("class", "yt-thumb-clip"),
      document
        .querySelector(
          ".upper-section a .channel-thumb .video-thumb .yt-thumb-square"
        )
        .append(l);
    var c = document.createElement("span");
    c.setAttribute("class", "yt-thumb-clip-inner"),
      document
        .querySelector(
          ".upper-section a .channel-thumb .video-thumb .yt-thumb-square .yt-thumb-clip"
        )
        .append(c);
    var d = document.createElement("img");
    d.setAttribute("src", authoravatar),
      d.setAttribute("alt", authorchannelname),
      d.setAttribute("width", "60"),
      document
        .querySelector(
          ".upper-section a .channel-thumb .video-thumb .yt-thumb-square .yt-thumb-clip .yt-thumb-clip-inner"
        )
        .append(d);
    var u = document.createElement("span");
    u.setAttribute("class", "vertical-align"),
      document
        .querySelector(
          ".upper-section a .channel-thumb .video-thumb .yt-thumb-square .yt-thumb-clip .yt-thumb-clip-inner"
        )
        .append(u);
    var p = document.createElement("div");
    p.setAttribute("class", "upper-left-section "),
      document.querySelector(".upper-section").append(p);
    var b = document.createElement("div");
    b.setAttribute("class", "upper-left-section "),
      document.querySelector(".upper-section").append(b);
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
              "yt-uix-subscription-button yt-uix-button yt-uix-button-subscribed-branded yt-uix-button-size-default yt-uix-button-has-icon"
            ),
            x.setAttribute("title", subscribecount + " subscribers"))
          : x.setAttribute(
              "class",
              "yt-uix-subscription-button yt-uix-button yt-uix-button-subscribe-branded yt-uix-button-size-default yt-uix-button-has-icon"
            ),
        x.setAttribute("aria-live", "polite"),
        x.setAttribute("onclick", ";return false;"),
        x.setAttribute("data-sessionlink", ""),
        x.setAttribute("data-channel-external-id", authorurl.split("/")[4]),
        x.setAttribute("data-style-type", "branded"),
        x.setAttribute("data-href", ""),
        x.setAttribute("role", "button"),
        document.querySelector(".enable-fancy-subscribe-button").append(x);
      var R = document.createElement("span");
      R.setAttribute("class", "yt-uix-button-icon-wrapper"),
        document
          .querySelector(
            ".enable-fancy-subscribe-button .yt-uix-subscription-button"
          )
          .append(R);
      var S = document.createElement("img");
      S.setAttribute(
        "class",
        "yt-uix-button-icon yt-uix-button-icon-subscribe"
      ),
        S.setAttribute(
          "src",
          "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"
        ),
        S.setAttribute("alt", ""),
        S.setAttribute("title", ""),
        document
          .querySelector(
            ".enable-fancy-subscribe-button .yt-uix-subscription-button .yt-uix-button-icon-wrapper"
          )
          .append(S);
      var w = document.createElement("span");
      w.setAttribute("class", "yt-uix-button-content"),
        document
          .querySelector(
            ".enable-fancy-subscribe-button .yt-uix-subscription-button"
          )
          .append(w);
      var A = document.createElement("span");
      A.setAttribute("class", "subscribe-label"),
        A.setAttribute("aria-label", "Subscribe"),
        (A.innerHTML = "Subscribe"),
        document
          .querySelector(
            ".enable-fancy-subscribe-button .yt-uix-subscription-button .yt-uix-button-content"
          )
          .append(A);
      var E = document.createElement("span");
      E.setAttribute("class", "subscribed-label"),
        E.setAttribute("aria-label", "Subscribed"),
        (E.innerHTML = "Subscribed"),
        document
          .querySelector(
            ".enable-fancy-subscribe-button .yt-uix-subscription-button .yt-uix-button-content"
          )
          .append(E);
      var T = document.createElement("span");
      T.setAttribute("class", "unsubscribe-label"),
        T.setAttribute("aria-label", "Unsubscribe"),
        (T.innerHTML = "Unsubscribe"),
        document
          .querySelector(
            ".enable-fancy-subscribe-button .yt-uix-subscription-button .yt-uix-button-content"
          )
          .append(T);
      var q = document.createElement("button");
      q.setAttribute(
        "class",
        "yt-uix-subscription-preferences-button yt-uix-button yt-uix-button-default yt-uix-button-size-default yt-uix-button-has-icon yt-uix-button-empty"
      ),
        q.setAttribute("type", "button"),
        q.setAttribute("onclick", ";return false;"),
        q.setAttribute("data-sessionlink", ""),
        q.setAttribute("data-channel-external-id", authorurl.split("/")[4]),
        q.setAttribute("role", "button"),
        document.querySelector(".enable-fancy-subscribe-button").append(q);
      var L = document.createElement("span");
      L.setAttribute("class", "yt-uix-button-icon-wrapper"),
        document
          .querySelector(
            ".enable-fancy-subscribe-button .yt-uix-subscription-preferences-button"
          )
          .append(L);
      var I = document.createElement("img");
      I.setAttribute(
        "class",
        "yt-uix-button-icon yt-uix-button-icon-subscription-preferences"
      ),
        I.setAttribute(
          "src",
          "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif"
        ),
        I.setAttribute("alt", ""),
        S.setAttribute("title", ""),
        document
          .querySelector(
            ".enable-fancy-subscribe-button .yt-uix-subscription-preferences-button .yt-uix-button-icon-wrapper"
          )
          .append(I);
      var M = document.createElement("span");
      M.setAttribute(
        "class",
        "yt-subscription-button-subscriber-count-branded-horizontal"
      ),
        (M.innerHTML = subscribecount),
        document.querySelector(".enable-fancy-subscribe-button").append(M);
    }

    var k = document.createElement("div");
    k.setAttribute("class", "header-stats"),
      document.querySelector(".upper-section .upper-right-section").append(k);
    var C = document.createElement("span");
    C.setAttribute("class", "valign-shim"),
      document.querySelector(".upper-section .upper-right-section").append(C);
    var V = document.createElement("div");
    V.setAttribute("class", "stat-entry"),
      document
        .querySelector(".upper-section .upper-right-section .header-stats")
        .append(V);
    var H = document.createElement("div");

    if (
      (H.setAttribute("class", "stat-entry"),
      document
        .querySelector(".upper-section .upper-right-section .header-stats")
        .append(H),
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
      var P = document.createElement("span");
      P.setAttribute("class", "stat-name"),
        (P.innerHTML = "subscribers"),
        document
          .querySelector(
            ".upper-section .upper-right-section .header-stats .stat-entry:nth-of-type(1)"
          )
          .append(P);
    }

    var _ = document.createElement("span");

    _.setAttribute("class", "stat-value"),
      (_.innerHTML = "Static"),
      document
        .querySelector(
          ".upper-section .upper-right-section .header-stats .stat-entry:nth-of-type(2)"
        )
        .append(_);
    var W = document.createElement("span");
    W.setAttribute("class", "stat-name"),
      (W.innerHTML = "video views"),
      document
        .querySelector(
          ".upper-section .upper-right-section .header-stats .stat-entry:nth-of-type(2)"
        )
        .append(W);
    var O = document.createElement("ul");
    O.setAttribute("role", "tablist"),
      document.querySelector(".channel-horizontal-menu").append(O);
    var z = document.createElement("ul");
    z.setAttribute("id", "channel-search"),
      z.setAttribute("action", authordefaulturl + "/videos"),
      (z.innerHTML =
        '<span class="search-field-container yt-uix-form-input-container yt-uix-form-input-text-container ">    <input class="yt-uix-form-input-text search-field" name="query" placeholder="Search Channel" maxlength="100" autocomplete="off">\n</span>\n    <button class="search-btn" type="submit">\n      <span class="search-btn-content">\nSearch\n      </span>\n    </button>\n    <a class="search-dismiss-btn" href="' +
        authordefaulturl +
        '/videos">\n      <span class="search-btn-content">\nClear\n      </span>\n    </a>'),
      document.querySelector(".channel-horizontal-menu").append(z);
    var B = document.createElement("li");
    B.setAttribute("role", "presentation"),
      window.location.href.includes("/videos") ||
        window.location.href.includes("/playlists") ||
        B.setAttribute("class", "selected"),
      (B.innerHTML =
        '<a href="' +
        authordefaulturl +
        '/featured" class="gh-tab-100" role="tab" aria-selected="true">\n      Featured\n\n    </a>'),
      document
        .querySelector(".channel-horizontal-menu ul[role=tablist]")
        .append(B);
    var j = document.createElement("li");
    j.setAttribute("role", "presentation"),
      (window.location.href.includes("/videos") ||
        window.location.href.includes("/playlists")) &&
        j.setAttribute("class", "selected"),
      (j.innerHTML =
        '<a href="' +
        authordefaulturl +
        '/videos" class="gh-tab-101" role="tab" aria-selected="false">\n      Browse videos\n\n    </a>'),
      document
        .querySelector(".channel-horizontal-menu ul[role=tablist]")
        .append(j);
  }

  function buildChannelUploads() {
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
    var i = document.createElement("div");
    i.setAttribute("class", "channel-browse"),
      (i.innerHTML =
        '<div class="browse-heading channels-browse-gutter-padding">\n              <div id="channels-browse-header" class="clearfix">\n      <div id="browse-view-options">\n      <button onclick=";return false;" type="button" class="flip channels-browse-options yt-uix-button yt-uix-button-text" data-button-menu-id="browse-view-options-menu" role="button"><span class="yt-uix-button-content">View </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n\n  </div>\n\n      <ul>\n\n    \n      <li class="channels-browse-filter selected">\n    <a href="' +
        authorurl +
        '/videos">\n      Uploads\n    </a>\n  </li>\n\n      <li class="channels-browse-filter ">\n    <a href="' +
        authorurl +
        '/playlists">\n      Playlists\n    </a>\n  </li>\n\n\n  </ul>\n\n  </div>\n\n              <hr class="yt-horizontal-rule channel-section-hr">\n\n          </div>'),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .primary-pane"
        )
        .append(i);
    var r = document.createElement("div");
    r.setAttribute("class", "channels-browse-gutter-padding"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse"
        )
        .append(r);
    var s = document.createElement("ul");
    s.setAttribute("id", "channels-browse-content-grid"),
      s.setAttribute(
        "class",
        "channels-browse-content-grid context-data-container "
      ),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse .channels-browse-gutter-padding:not(.browse-heading)"
        )
        .append(s),
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
      try {
        var a = t[i].gridVideoRenderer.viewCountText.simpleText,
          r = t[i].gridVideoRenderer.publishedTimeText.simpleText;
      } catch (e) {
        (a = "Static"), (r = "Static");
      }

      n +=
        '<li class="channels-content-item">\n              <span class="context-data-item" data-context-item-user="' +
        authoruserid +
        '" data-context-item-time="' +
        t[i].gridVideoRenderer.thumbnailOverlays.find(isTimeInfo)
          .thumbnailOverlayTimeStatusRenderer.text.simpleText +
        '" data-context-item-id="RnpyRe_7jZA" data-context-item-views="' +
        a +
        '" data-context-item-title="' +
        t[i].gridVideoRenderer.title.runs[0].text +
        '" data-context-item-type="video">\n    <a href="/watch?v=' +
        t[
          i
        ].gridVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
          "?v="
        )[1] +
        '" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto spf-link" data-sessionlink="">    <span class="video-thumb  yt-thumb yt-thumb-194">\n      <span class="yt-thumb-default">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img alt="Thumbnail" src="' +
        t[i].gridVideoRenderer.thumbnail.thumbnails[
          parseInt(t[i].gridVideoRenderer.thumbnail.thumbnails.length - 1)
        ].url +
        '" width="194">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n<span class="video-time">' +
        t[i].gridVideoRenderer.thumbnailOverlays.find(isTimeInfo)
          .thumbnailOverlayTimeStatusRenderer.text.simpleText +
        '</span>\n\n\n  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="' +
        t[i].gridVideoRenderer.videoId +
        '" role="button"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\n </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""></button>\n</a>\n    <span class="content-item-detail">\n      <a href="/watch?v=' +
        t[
          i
        ].gridVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
          "?v="
        )[1] +
        '" title="' +
        t[i].gridVideoRenderer.title.runs[0].text +
        '" class="content-item-title spf-link yt-uix-sessionlink yt-uix-contextlink" dir="ltr" data-sessionlink="">\n        ' +
        t[i].gridVideoRenderer.title.runs[0].text +
        '\n      </a>\n      <span class="content-item-metadata">\n        \n          <span class="content-item-view-count">\n            ' +
        a +
        '\n          </span>\n          <span class="metadata-separator">|</span>\n          <span class="content-item-time-created">' +
        r +
        "</span>\n      </span>\n    </span>\n  </span>\n\n\n    </li>";
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
    await channelAction("getajax", e).then((e) => {
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
          n[
            i
          ].gridVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
            "?v="
          )[1] +
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
          n[
            i
          ].gridVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url.split(
            "?v="
          )[1] +
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

  function buildChannelPlaylist() {
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
    var i = document.createElement("div");
    i.setAttribute("class", "channel-browse"),
      (i.innerHTML =
        '<div class="browse-heading channels-browse-gutter-padding">\n              <div id="channels-browse-header" class="clearfix">\n\n      <ul>\n\n    \n      <li class="channels-browse-filter">\n    <a href="' +
        authorurl +
        '/videos">\n      Uploads\n    </a>\n  </li>\n\n      <li class="channels-browse-filter selected">\n    <a href="' +
        authorurl +
        '/playlists">\n      Playlists\n    </a>\n  </li>\n\n\n  </ul>\n\n  </div>\n\n              <hr class="yt-horizontal-rule channel-section-hr">\n\n          </div>'),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .primary-pane"
        )
        .append(i);
    var r = document.createElement("div");
    r.setAttribute("class", "channels-browse-gutter-padding"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse"
        )
        .append(r);
    var s = document.createElement("ul");
    s.setAttribute("id", "channels-browse-content-grid"),
      s.setAttribute(
        "class",
        "channels-browse-content-grid context-data-container "
      ),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .primary-pane .channel-browse .channels-browse-gutter-padding"
        )
        .append(s),
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

    for (i = 0, j = t; i < j; i++)
      if (e[i].gridPlaylistRenderer) {
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
    var i = document.createElement("div");
    i.setAttribute("class", "secondary-pane"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body"
        )
        .append(i),
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
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .user-profile .module-view"
        )
        .append(a);
    var i = document.createElement("div");
    i.setAttribute("class", "section first"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .user-profile .module-view"
        )
        .append(i);
    var r = document.createElement("div");
    r.setAttribute("class", "section created-by-section"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .user-profile .module-view"
        )
        .append(r);
    var s = document.createElement("div");
    s.setAttribute("class", "user-profile-item"),
      (s.innerHTML =
        '\nby <span class="yt-user-name " dir="ltr">' +
        authoruserid +
        "</span>"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .user-profile .module-view .created-by-section"
        )
        .append(s);
    var o = document.createElement("ul");
    (o.innerHTML =
      '<li class="user-profile-item ">\n        <span class="item-name">Date Joined</span>\n      <span class="value">' +
      authorjoindate +
      "</span>\n    </li>"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .user-profile .module-view .created-by-section"
        )
        .append(o);
    var l = document.createElement("div");

    if (
      (l.setAttribute("class", "module-view other-channels-view"),
      document
        .querySelector(
          "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .other-channels"
        )
        .append(l),
      null != featurechannelspath)
    ) {
      var c = document.createElement("h2");
      (c.innerHTML = "Featured Channels"),
        document
          .querySelector(
            "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .other-channels .other-channels-view"
          )
          .append(c);
      var d = document.createElement("ul");
      d.setAttribute("class", "channel-summary-list "),
        document
          .querySelector(
            "#branded-page-body .channel-tab-content .tab-content-body .secondary-pane .other-channels .other-channels-view"
          )
          .append(d),
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
