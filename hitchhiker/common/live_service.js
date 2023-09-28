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

function liveService() {
  console.log("DEBUG: was call live service."),
    setTimeout(function () {
      document.querySelector(".using-innertube-heartbeat") &&
        getHeartbeatData(
          window.location.href.split("v=")[1].split("&")[0],
          document.body.getAttribute("hba"),
          "",
          "HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS"
        );
    }, 1e3),
    setInterval(metadataService, 4e3);
  var t =
    '<div class="comments-post-alert comments-post">\n        <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;hl=en_US&amp;passive=true&amp;service=youtube&amp;continue=https%3A%2F%2Fwww.youtube.com">Sign in</a> now to post a comment!\n\n      </div>';
  1 == authinfo.LOGGED_IN &&
    (t =
      '<form class="comments-post">\n    <div class="yt-alert yt-alert-default yt-alert-error hid comments-post-message">  <div class="yt-alert-icon">\n    <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">\n  </div>\n<div class="yt-alert-buttons"></div><div class="yt-alert-content" role="alert"></div></div>\n\n      <span class="video-thumb  yt-thumb yt-thumb-28">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <img src="' +
      userpicture +
      '" alt="" aria-hidden="true" width="28" height="28">\n          <span class="vertical-align"></span>\n        </span>\n      </span>\n    </span>\n\n<div class="comments-textarea-container " onclick=""><img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" class="comments-textarea-tip"><label class="comments-textarea-label create-channel-lightbox" data-upsell="comment"></label><textarea id="" placeholder="Share your thoughts" class="yt-uix-form-input-textarea comments-textarea create-channel-lightbox" data-upsell="comment" name="comment" dir=""></textarea></div>\n    <p class="comments-post-buttons needs-focus">\n<button class=" yt-uix-button yt-uix-button-default" type="submit" role="button"><span class="yt-uix-button-content">Post </span></button>    </p>\n\n    <p class="comments-remaining needs-focus" data-max-count="200">\n    </p>\n    <p class="comments-threshold-countdown hid">\n    </p>\n  </form>');
  var n =
    '\n    <div id="watch-live-comments" class="watch-sidebar-body">\n        \n        <div id="comments-view" data-type="everything" class="">\n\n        <div id="live-comments-section">\n    <div id="live-comments-controls">\n              ' +
    t +
    '\n\n\n\n\n        <div id="live-comments-setting-scroll" class="live-comments-setting hid">\n    <span id="live-comments-count"></span>\n    <a onclick="yt.www.watch.livecomments.setScroll(true); return false;">Update automatically</a>\n  </div>\n  <div id="live-comments-setting-no-scroll" class="live-comments-setting hid">\n    <a onclick="yt.www.watch.livecomments.setScroll(false); return false;">Disable automatic updates</a>\n  </div>\n\n    </div>\n    <div id="comments-scroller" class="scrollable-comment-list">\n        <ul id="all-comments"><p class="yt-spinner">\n        <img class="yt-spinner-img" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Loading icon" title="">\n\n    <span class="yt-spinner-message">\nLoading...\n    </span>\n  </p>\n\n  </ul>\n\n        \n    </div>\n  </div>\n\n\n\n    <ul>\n      <li class="hid" id="parent-comment-loading">Loading comment...</li>\n    </ul>\n  </div>\n  <div id="comments-loading" class="hid">Loading...</div>\n\n\n    </div>\n  ';
  document
    .querySelector("#watch7-sidebar-discussion")
    .insertAdjacentHTML("beforeend", n + '<hr class="yt-horizontal-rule ">'),
    liveChatService();
}

async function metadataService() {
  var t = window.location.href.split("v=")[1].split("&")[0],
    n = await getMetaData(t).then((t) => (n = t)),
    e =
      n.actions[0].updateViewershipAction.viewCount.videoViewCountRenderer
        .viewCount.simpleText;
  document.querySelector("#watch7-views-info .watch-view-count").innerText = e;
}

async function liveChatService() {
  var t =
      ytdata.contents.twoColumnWatchNextResults.conversationBar.liveChatRenderer
        .continuations[0].reloadContinuationData.continuation,
    n = await getLiveChatData(t).then((t) => (n = t));
  (console.log(n), 1 == authinfo.LOGGED_IN) &&
    liveChatFriend(
      n.continuationContents.liveChatContinuation.actionPanel
        .liveChatMessageInputRenderer.sendButton.buttonRenderer.serviceEndpoint
        .sendLiveChatMessageEndpoint.clientIdPrefix,
      n.continuationContents.liveChatContinuation.actionPanel
        .liveChatMessageInputRenderer.sendButton.buttonRenderer.serviceEndpoint
        .sendLiveChatMessageEndpoint.params
    );
  liveChatBuilder(n.continuationContents.liveChatContinuation.actions);
  var e = "",
    a = 0;

  try {
    (e =
      n.continuationContents.liveChatContinuation.continuations[0]
        .timedContinuationData.continuation),
      (a =
        n.continuationContents.liveChatContinuation.continuations[0]
          .timedContinuationData.timeoutMs);
  } catch (t) {
    (e =
      n.continuationContents.liveChatContinuation.continuations[0]
        .invalidationContinuationData.continuation),
      (a =
        n.continuationContents.liveChatContinuation.continuations[0]
          .invalidationContinuationData.timeoutMs);
  }

  console.log("[TIMEOUT] have to request continuation after " + a + " ms."),
    setTimeout(function () {
      moreLiveChat(e);
    }, a);
}

function liveChatFriend(t, n) {
  var e = "";
  document
    .querySelector(".comments-textarea-container textarea")
    .addEventListener("input", function (t) {
      e = t.target.value;
    }),
    (document.querySelector(".comments-textarea-container textarea").onfocus =
      function (t) {
        document
          .querySelector(".comments-post-buttons")
          .classList.remove("needs-focus"),
          document
            .querySelector(".comments-post-buttons")
            .classList.add("has-focus");
      }),
    (document.querySelector(".comments-textarea-container textarea").onblur =
      function (t) {
        "" == e &&
          (document
            .querySelector(".comments-post-buttons")
            .classList.add("needs-focus"),
          document
            .querySelector(".comments-post-buttons")
            .classList.remove("has-focus"));
      }),
    (document.querySelector(
      ".comments-post-buttons > button[type=submit]"
    ).onclick = function (a) {
      a.preventDefault(), "" != e && postLiveComment(e, t, n);
    });
}

async function postLiveComment(t, n, e) {
  var a = await postCommentLive(e, n, t).then((t) => (a = t)),
    i =
      a.actions[0].addChatItemAction.item.liveChatTextMessageRenderer
        .authorExternalChannelId,
    o =
      a.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.authorName
        .simpleText,
    s =
      a.actions[0].addChatItemAction.item.liveChatTextMessageRenderer
        .authorPhoto.thumbnails[0].url,
    c =
      '<li class="comment live-comment" data-author-id="' +
      i +
      '" data-id="' +
      a.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.id +
      '">\n    <button class="flip close yt-uix-button yt-uix-button-link yt-uix-button-empty" type="button" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-comment-close" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><span class="yt-uix-button-valign"></span></span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><div class=" yt-uix-button-menu yt-uix-button-menu-link" style="display: none;"><ul><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag-profile-pic"><span class="yt-uix-button-menu-item">Report profile image</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button>\n      <a href="/channel/' +
      i +
      '?v3cv=1&app=true" class="yt-user-photo ">    <span class="video-thumb  yt-thumb yt-thumb-28">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
      s +
      '" alt="' +
      o +
      '" width="28" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a>\n\n    \n\n  <div class="content">\n      <p class="metadata">\n        <span class="author ">\n          <a href="/channel/' +
      i +
      '?v3cv=1&app=true" class="yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr">' +
      o +
      '</a>\n        </span>\n      </p>\n\n\n      <div class="comment-text" dir="ltr">\n        <p>' +
      a.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.message
        .runs[0].text +
      "</p>\n\n      </div>\n  </div>\n\n\n  </li>";
  document
    .querySelector("#watch-live-comments #all-comments")
    .insertAdjacentHTML("afterbegin", c);
}

async function moreLiveChat(t) {
  var n = await getLiveChatData(t).then((t) => (n = t));
  liveChatMoreBuild(n.continuationContents.liveChatContinuation.actions);
  var e = "",
    a = 0;

  try {
    (e =
      n.continuationContents.liveChatContinuation.continuations[0]
        .timedContinuationData.continuation),
      (a =
        n.continuationContents.liveChatContinuation.continuations[0]
          .timedContinuationData.timeoutMs);
  } catch (t) {
    (e =
      n.continuationContents.liveChatContinuation.continuations[0]
        .invalidationContinuationData.continuation),
      (a =
        n.continuationContents.liveChatContinuation.continuations[0]
          .invalidationContinuationData.timeoutMs);
  }

  console.log(
    "[INTERVAL INIT] starting interval liveChat friend in " + a + " ms."
  ),
    setTimeout(async function t() {
      var n = await getLiveChatData(e).then((t) => (n = t));
      liveChatMoreBuild(n.continuationContents.liveChatContinuation.actions),
        flushCheck();

      try {
        (e =
          n.continuationContents.liveChatContinuation.continuations[0]
            .timedContinuationData.continuation),
          (a =
            n.continuationContents.liveChatContinuation.continuations[0]
              .timedContinuationData.timeoutMs);
      } catch (t) {
        (e =
          n.continuationContents.liveChatContinuation.continuations[0]
            .invalidationContinuationData.continuation),
          (a =
            n.continuationContents.liveChatContinuation.continuations[0]
              .invalidationContinuationData.timeoutMs);
      }

      console.log(
        "[INTERVAL] have to request continuation new in " + a + " ms."
      ),
        setTimeout(t, a);
    }, a);
}

function flushCheck() {
  document.querySelector("#watch-live-comments #all-comments")
    .childElementCount > 75 &&
    $("#watch-live-comments #all-comments > li")
      .slice(
        -1 *
          parseInt(
            document.querySelector("#watch-live-comments #all-comments")
              .childElementCount - 75
          )
      )
      .remove();
}

function liveChatBuilder(t) {
  var n = "";

  for (i = t.length - 1, j = 0; i >= j; i--)
    if (
      t[i].addChatItemAction &&
      !t[i].addChatItemAction.item.liveChatViewerEngagementMessageRenderer &&
      t[i].addChatItemAction.item.liveChatTextMessageRenderer
    ) {
      var e =
          t[i].addChatItemAction.item.liveChatTextMessageRenderer
            .authorExternalChannelId,
        a =
          t[i].addChatItemAction.item.liveChatTextMessageRenderer.authorName
            .simpleText,
        o =
          t[i].addChatItemAction.item.liveChatTextMessageRenderer.authorPhoto
            .thumbnails[0].url,
        s = t[i].addChatItemAction.item.liveChatTextMessageRenderer.id,
        c =
          t[i].addChatItemAction.item.liveChatTextMessageRenderer.message.runs,
        l = "";

      for (x = 0, y = c.length; x < y; x++)
        c[x].text ? (l += c[x].text) : c[x].emoji && (l += c[x].emoji.emojiId);

      n +=
        '<li class="comment live-comment" data-author-id="' +
        e +
        '" data-id="' +
        s +
        '">\n    <button class="flip close yt-uix-button yt-uix-button-link yt-uix-button-empty" type="button" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-comment-close" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><span class="yt-uix-button-valign"></span></span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><div class=" yt-uix-button-menu yt-uix-button-menu-link" style="display: none;"><ul><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag-profile-pic"><span class="yt-uix-button-menu-item">Report profile image</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button>\n      <a href="/channel/' +
        e +
        '?v3cv=1&app=true" class="yt-user-photo ">    <span class="video-thumb  yt-thumb yt-thumb-28">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
        o +
        '" alt="' +
        a +
        '" width="28" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a>\n\n    \n\n  <div class="content">\n      <p class="metadata">\n        <span class="author ">\n          <a href="/channel/' +
        e +
        '?v3cv=1&app=true" class="yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr">' +
        a +
        '</a>\n        </span>\n      </p>\n\n\n      <div class="comment-text" dir="ltr">\n        <p>' +
        l +
        "</p>\n\n      </div>\n  </div>\n\n\n  </li>";
    }

  (document.querySelector("#watch-live-comments #all-comments").innerHTML = ""),
    document
      .querySelector("#watch-live-comments #all-comments")
      .insertAdjacentHTML("beforeend", n);
}

function liveChatMoreBuild(t) {
  var n = "";
  if (t)
    for (i = t.length - 1, j = 0; i >= j; i--)
      if (
        t[i].addChatItemAction &&
        !t[i].addChatItemAction.item.liveChatViewerEngagementMessageRenderer &&
        t[i].addChatItemAction.item.liveChatTextMessageRenderer
      ) {
        var e =
            t[i].addChatItemAction.item.liveChatTextMessageRenderer
              .authorExternalChannelId,
          a =
            t[i].addChatItemAction.item.liveChatTextMessageRenderer.authorName
              .simpleText,
          o =
            t[i].addChatItemAction.item.liveChatTextMessageRenderer.authorPhoto
              .thumbnails[0].url,
          s = t[i].addChatItemAction.item.liveChatTextMessageRenderer.id,
          c =
            t[i].addChatItemAction.item.liveChatTextMessageRenderer.message
              .runs,
          l = "";

        for (x = 0, y = c.length; x < y; x++)
          c[x].text
            ? (l += c[x].text)
            : c[x].emoji && (l += c[x].emoji.emojiId);

        n +=
          '<li class="comment live-comment" data-author-id="' +
          e +
          '" data-id="' +
          s +
          '">\n    <button class="flip close yt-uix-button yt-uix-button-link yt-uix-button-empty" type="button" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-comment-close" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><span class="yt-uix-button-valign"></span></span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" title=""><div class=" yt-uix-button-menu yt-uix-button-menu-link" style="display: none;"><ul><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag-profile-pic"><span class="yt-uix-button-menu-item">Report profile image</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button>\n      <a href="/channel/' +
          e +
          '?v3cv=1&app=true" class="yt-user-photo ">    <span class="video-thumb  yt-thumb yt-thumb-28">\n      <span class="yt-thumb-square">\n        <span class="yt-thumb-clip">\n          <span class="yt-thumb-clip-inner">\n            <img src="' +
          o +
          '" alt="' +
          a +
          '" width="28" data-group-key="thumb-group-0">\n            <span class="vertical-align"></span>\n          </span>\n        </span>\n      </span>\n    </span>\n</a>\n\n    \n\n  <div class="content">\n      <p class="metadata">\n        <span class="author ">\n          <a href="/channel/' +
          e +
          '?v3cv=1&app=true" class="yt-uix-sessionlink yt-user-name " data-sessionlink="" dir="ltr">' +
          a +
          '</a>\n        </span>\n      </p>\n\n\n      <div class="comment-text" dir="ltr">\n        <p>' +
          l +
          "</p>\n\n      </div>\n  </div>\n\n\n  </li>";
      }
  document
    .querySelector("#watch-live-comments #all-comments")
    .insertAdjacentHTML("afterbegin", n);
}

async function getHeartbeatData(t, n, e, a) {
  var i = await getHeartbeat(t, n, e, a).then((t) => (i = t)),
    o = i.playabilityStatus.status,
    s = i.playabilityStatus.reason,
    c = i.pollDelayMs;
  console.log("[HEARTBEAT] " + o + " " + s + " " + c),
    (document.querySelector("#unavailable-message").innerText = s),
    "OK" == o &&
      setTimeout(function () {
        location.reload();
      }, 500),
    setTimeout(function () {
      getHeartbeatData(t, n, e, a);
    }, 8e3);
}

async function getMetaData(t) {
  var n = await getSapisidhash();
  return (
    await fetch(
      "https://www.youtube.com/youtubei/v1/updated_metadata?key=" +
        authinfo.INNERTUBE_API_KEY,
      {
        credentials: "include",
        headers: _objectSpread(
          _objectSpread(
            _objectSpread(
              {},
              authinfo.LOGGED_IN && {
                Authorization: n
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
          '",\r\n\t\t\t"hl": "en"\r\n\t\t}\r\n\t},\r\n\t"videoId":"' +
          t +
          '",\r\n}\r\n',
        method: "POST",
        mode: "cors"
      }
    )
  ).json();
}

async function postCommentLive(t, n, e) {
  var a = await getSapisidhash();
  return (
    await fetch(
      "https://www.youtube.com/youtubei/v1/live_chat/send_message?key=" +
        authinfo.INNERTUBE_API_KEY,
      {
        credentials: "include",
        headers: _objectSpread(
          _objectSpread(
            _objectSpread(
              {},
              authinfo.LOGGED_IN && {
                Authorization: a
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
          '",\r\n\t\t\t"hl": "en"\r\n\t\t}\r\n\t},\r\n\t"params":"' +
          t +
          '","clientMessageId":"' +
          n +
          '","richMessage":{"textSegments":[{"text":"' +
          e +
          '"}]}\r\n}\r\n',
        method: "POST",
        mode: "cors"
      }
    )
  ).json();
}

async function getLiveChatData(t) {
  var n = await getSapisidhash();
  return (
    await fetch(
      "https://www.youtube.com/youtubei/v1/live_chat/get_live_chat?key=" +
        authinfo.INNERTUBE_API_KEY,
      {
        credentials: "include",
        headers: _objectSpread(
          _objectSpread(
            _objectSpread(
              {},
              authinfo.LOGGED_IN && {
                Authorization: n
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
          t +
          '","webClientInfo":{"isDocumentHidden":false}\r\n}\r\n',
        method: "POST",
        mode: "cors"
      }
    )
  ).json();
}

async function getHeartbeat(t, n, e, a) {
  var i = await getSapisidhash();
  return (
    await fetch(
      "https://www.youtube.com/youtubei/v1/player/heartbeat?alt=json&key=" +
        authinfo.INNERTUBE_API_KEY,
      {
        credentials: "include",
        headers: _objectSpread(
          _objectSpread(
            _objectSpread(
              {},
              authinfo.LOGGED_IN && {
                Authorization: i
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
          '{"videoId":"' +
          t +
          '","sequenceNumber":0,"heartbeatServerData":"' +
          n +
          '",\r\n\t"context": {\r\n\t\t"client": {\r\n\t\t\t"clientName": "WEB",\r\n\t\t\t"clientVersion": "' +
          authinfo.INNERTUBE_CONTEXT_CLIENT_VERSION +
          '",\r\n\t\t\t"hl": "en"\r\n\t\t}\r\n\t},"cpn":"' +
          e +
          '","heartbeatRequestParams":{"heartbeatChecks":["' +
          a +
          '"]}}\r\n',
        method: "POST",
        mode: "cors"
      }
    )
  ).json();
}
