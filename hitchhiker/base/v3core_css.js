function v3InjectCoreCss(){
function insertAfter(referenceNode, newNode) {
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}
var STY_core1css = `.ytp-button-watch-later.html5-async-error:not(.v3-finish){background:no-repeat url(//s.ytimg.com/yts/imgbin/player-common-vflGwqWf5.png) -34px -1585px;background-size:auto;width:30px;height:25px}body.user-logged-in .ytp-button-dislike,body.user-logged-in .ytp-button-like{display:block}#v3a,#v3suffer{position:absolute;top:0}body.ytg-old-clearfix:not(.exp-v3-enhanced-c3){--v3-player-width:640.5px!important;--v3-player-height:360px!important}.ytp-clip-watch-full-video-button-separator{display:none}.ytp-big-mode .ytp-chapter-title.ytp-button,.ytp-chapter-title.ytp-button,.ytp-embed-mobile-exp .ytp-chrome-controls .ytp-chapter-title.ytp-button,.ytp-exp-bigger-button-like-mobile .ytp-chapter-title.ytp-button,.ytp-small-mode .ytp-chrome-controls .ytp-chapter-title.ytp-button{font-size:11px;margin-left:6px;margin-top:-5px;color:#999}.ytp-chapter-title-chevron{margin-top:3px;margin-left:5px;border:1px solid transparent;border-top-color:#999;border-width:4px 4px 0;width:0;height:0;flex:0}.stat.view-count{display:inline-block!important}.video-list-item:hover .upload-day{display:inline-block!important}.upload-day{margin-left:8px}.video-list-item:not(:hover) .upload-day{display:none}#chatframe{width:400px;height:calc(var(--v3-player-height) + 30px)}.html5-video-player{-webkit-font-smoothing:none!important;-moz-osx-font-smoothing:none!important}body.using-kevlar-livechat #watch7-container:not(.watch-wide) #watch7-sidebar{top:calc(var(--v3-player-height) - 75px)}html[v3fullscreen] body #all-comments,html[v3fullscreen] body #guide-channels{display:none!important}.comments-post-buttons{right:10px;margin-top:5px}.comments-textarea-container textarea::placeholder{padding-top:3px;padding-left:3px}.comment-action[data-action=reply][data-load-ajax-id].more-reply-loader{margin-top:15px}.comment-action[data-action=reply][data-load-ajax-id].more-reply-loader:not(:hover){color:grey}.yt-uix-button-subscribed-branded .yt-uix-button-content{font-size:11px;font-weight:550;padding-left:3px;padding-right:3px}.yt-uix-button-subscribed-branded .yt-uix-button-icon-subscribe{width:16px;height:12px;background:url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflJNvSK4.png) -31px -482px/auto no-repeat}.yt-uix-button-subscribe-branded .yt-uix-button-content{font-size:11px;font-weight:550;padding-left:4px;padding-right:4px}body.ytg-old-clearfix #page{padding-left:0!important}.gbt:not(:first-of-type){margin-left:5px}#movie_player:not(.ytp-exp-bottom-control-flexbox) .ytp-chrome-controls .ytp-play-button,#movie_player:not(.ytp-exp-bottom-control-flexbox) .ytp-volume-area{top:-3px}#movie_player:not(.ytp-exp-bottom-control-flexbox).ytp-big-mode .ytp-chrome-controls .ytp-play-button,#movie_player:not(.ytp-exp-bottom-control-flexbox).ytp-big-mode .ytp-volume-area{top:-21px}body #watch7-creator-bar{width:calc(var(--v3-player-width) - 41px)}body #player-container-inner{padding-top:0!important}#player.watch-small .html5-video-player:not(.ytp-big-mode) .ytp-caption-window-container{height:var(--v3-player-height)}#player.watch-medium .html5-video-player:not(.ytp-big-mode) .ytp-caption-window-container{height:var(--v3-teather-height)}body .html5-video-player:not(.ytp-fullscreen) .ytp-chrome-bottom{opacity:1!important}.html5-video-player:not(.ytp-big-mode) .ytp-gradient-top{transform:scaleY(.3)}#player.watch-small{height:calc(var(--v3-player-height) + 30px)}#player.watch-small .html5-video-player:not(.ideal-aspect) .html5-main-video{max-width:var(--v3-player-width);max-height:var(--v3-player-height)}#player.watch-medium .html5-video-player:not(.ideal-aspect) .html5-main-video{max-width:var(--v3-teather-width);max-height:var(--v3-teather-height)}body ytd-watch-flexy{display:none!important}body .ytp-size-button{display:none!important}button.ytp-v3teather.ytp-button{width:0;max-width:0;height:29px;background:no-repeat url(//s.ytimg.com/yts/imgbin/player-darkhh-vflvDcUVL.png) 0 -1458px;background-size:auto;padding:0 15px;margin-top:1px;float:right}body:not(.exp-modern-cinema-player) .ytp-size-toggle-large,body:not(.exp-modern-cinema-player) .ytp-size-toggle-small{display:none!important}#player.watch-medium button.ytp-v3teather.ytp-button{background:no-repeat url(//s.ytimg.com/yts/imgbin/player-darkhh-vflvDcUVL.png) 0 -2160px}button.ytp-v3normal.ytp-button{width:0;max-width:0;height:29px;background:no-repeat url(//s.ytimg.com/yts/imgbin/player-darkhh-vflvDcUVL.png) 0 -918px;background-size:auto;padding:0 15px;margin-top:1px;float:right}.ytp-time-display{margin-top:1px}#player.watch-small button.ytp-v3normal.ytp-button{background:no-repeat url(//s.ytimg.com/yts/imgbin/player-darkhh-vflvDcUVL.png) 0 -621px}#player.watch-medium button.ytp-v3teather.ytp-button,#player.watch-small button.ytp-v3normal.ytp-button,.ideal-aspect button.ytp-v3normal.ytp-button,.ideal-aspect button.ytp-v3teather.ytp-button{pointer-events:none!important}body #watch7-sidebar-contents{margin-top:-15px}#player.watch-medium{width:var(--v3-teather-width)!important;height:calc(var(--v3-teather-height) + 30px)!important}body #watch-headline-title{margin-bottom:5px}body .yt-subscription-button-subscriber-count-branded-horizontal:empty{display:none!important}#reply_container>li:nth-of-type(1){margin-top:15px}#reply_container>li>a>span{transform:scale(.8)}#reply_container>li>a{margin-top:-2px}#reply_container{margin-left:55px}body div[role=tooltip]{z-index:2147483647;width:auto;opacity:1;border:0!important;visibility:hidden}body .ui-tooltip-content{position:relative;padding:6px;color:#fff;background:#000;font-size:11px;font-weight:700;white-space:nowrap;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;-moz-box-shadow:0 1px 1px rgba(0,0,0,.25);-ms-box-shadow:0 1px 1px rgba(0,0,0,.25);-webkit-box-shadow:0 1px 1px rgba(0,0,0,.25);box-shadow:0 1px 1px rgba(0,0,0,.25);width:auto;visibility:visible!important;font-family:arial;top:-80px}body .ui-tooltip-content:after{content:"";position:absolute;z-index:2147483647;bottom:-5px;width:0;height:0;vertical-align:top;border:1px solid transparent;border-width:5px 5px 0;border-top-color:#000;opacity:1;left:calc(50% - 7%)}#avatar.yt-live-chat-message-input-renderer, #input-container > yt-live-chat-author-chip{display:none;}#label.yt-live-chat-text-input-field-renderer{visibility:hidden;}#label.yt-live-chat-text-input-field-renderer:before{visibility:visible!important;content:"Share your thoughts...";}`;
var STY_core2css = `@media (min-width:854px){:root{--v3-player-width:640px;--v3-player-height:360px;--v3-teather-width:853.5px;--v3-teather-height:480px;--v3-alternative-color:#3f76b7;--v3-padder-fix:0px;--v3-padder2-fix:0.5px}}@media (min-width:1590px){:root{--v3-player-width:853.5px;--v3-player-height:480px;--v3-teather-width:1280px;--v3-teather-height:720px;--v3-padder-fix:0.5px;--v3-padder2-fix:0px}}@media (min-width:2500px){:root{--v3-player-width:1280px;--v3-player-height:720px;--v3-teather-width:1280px;--v3-teather-height:720px;--v3-padder-fix:0px;--v3-padder2-fix:0px}}#watch7-container:not(.watch-wide) #watch7-sidebar{min-height:var(--v3-player-height)}#comments-view .comment .comment-action .yt-uix-button-icon{opacity:.7}#watch7-container.watch-wide #watch7-sidebar{min-height:var(--v3-teather-height)}.site-left-aligned #gbz{margin-left:43px!important}.site-center-aligned #gbz{margin-left:30px!important}.yt-dialog-content{visibility:visible}#watch-description-clip{width:calc(var(--v3-player-width) - 250px)}#page.playlist #branded-page-header .profile-thumb{height:77px!important;background:#000}#page.playlist .yt-thumb-clip{position:static!important}#watch7-playlist-tray{overflow:auto!important}.sb-card{right:29px;top:55px}.yt-ui-ellipsis{background:0 0!important}.watch7-playlist-bar-left{width:calc(var(--v3-player-width) - .5px)}#player.watch-medium #watch7-playlist-tray-container{display:none}.watch-medium .watch7-playlist-bar-left{width:calc(var(--v3-teather-width) - 300px)}#watch7-playlist-tray-container{height:calc(var(--v3-player-height) + 30px)}.site-left-aligned .watch-playlist #watch7-sidebar{top:0!important}#watch7-container.watch-playlist{margin-top:34px}#page:not(.search):not(.history) .branded-page-v2-container{margin-top:15px}#page.history .branded-page-v2-primary-col{width:640px!important}#page.history .branded-page-v2-container{width:825px!important}.site-center-aligned #page.history .branded-page-v2-primary-col{width:calc(var(--v3-player-width) - 10px)!important}.site-center-aligned #page.history .branded-page-v2-container{width:calc(var(--v3-player-width) + 175px)!important}body:not(.site-center-aligned) #page.history:not(.subscription) .feed-list-item{left:-35px}#page.history .date-day{padding-top:15px;padding-bottom:5px;margin-left:30px}#page.search .qualified-channel-title.ellipsized .qualified-channel-title-badge{left:-12px;top:2px}.yt-uix-button-subscribe-unbranded+.yt-subscription-button-subscriber-count-unbranded-horizontal:empty{display:none}.yt-subscription-button-subscriber-count-unbranded-horizontal:not(:empty){display:inline-block}.ytg-old-clearfix #body-container{padding-bottom:140px}#player-api{width:calc(var(--v3-player-width) + -.5px);height:calc(var(--v3-player-height) + 30px);background:#000}.html5-main-video{top:0!important;bottom:0!important;left:0!important;right:0!important;margin:auto}#watch-description-extra-info{margin-left:calc(var(--v3-player-width) - 230px)}#comments-view .comment .comment-action-vote-down,#comments-view .comment .comment-action-vote-up{opacity:.9}#comments-view .comment .voted-up .yt-uix-button-icon{opacity:1}#comments-view .comment .voted-up{opacity:1}#watch-more-related-button{margin-left:5px}.yt-subscription-button-subscriber-count-branded-horizontal{display:inline-block;background-image:linear-gradient(to top,#f6f6f6 0,#fcfcfc 100%)}.channels-content-item .context-data-item[data-context-item-videos] .yt-thumb-clip{position:static}.qualified-channel-title.ellipsized .qualified-channel-title-text,.qualified-channel-title.ellipsized .qualified-channel-title-wrapper{height:25px!important}.action-panel-transition .action-panel-content{position:absolute;top:0;-moz-transition:left 250ms ease;-ms-transition:left 250ms ease;-o-transition:left 250ms ease;-webkit-transition:left 250ms ease;transition:left 250ms ease}#guide .collapsible-guide .guide-module-content.guide-module-loading{display:block}.action-panel-transition .action-panel-center{left:0}.action-panel-transition .action-panel-left{left:calc(var(--v3-player-width) * -1)}.action-panel-transition .action-panel-right{left:var(--v3-player-width)}#player.watch-medium .html5-main-video[style^="width: 854px;"]:not([style^="height: 480px;"]){width:calc(var(--v3-teather-width) + var(--v3-padder2-fix))!important}#player.watch-medium .html5-main-video[style^="width: 854px;"]{width:100%!important;height:auto!important}#player.watch-medium .html5-main-video:not([style^="width: 854px;"]){width:auto!important}#watch7-content.watch-content{width:var(--v3-player-width)}#watch7-container:not(.watch-wide) #watch7-sidebar{top:calc((var(--v3-player-height) - 360px) * -1)}#player.watch-medium #player-api{width:var(--v3-teather-width);height:calc(var(--v3-teather-height) + 29px)}#watch7-action-panel-footer .yt-horizontal-rule{margin-left:auto;margin-right:auto}.action-panel-content{width:calc(var(--v3-player-width) - 40px)}.yt-horizontal-rule{width:438px!important}#watch7-headline.yt-uix-expander-collapsed h1{white-space:normal;pointer-events:none}body:not(.site-center-aligned) .yt-uix-button-primary,body:not(.site-center-aligned) .yt-uix-button-primary[disabled],body:not(.site-center-aligned) .yt-uix-button-primary[disabled]:active,body:not(.site-center-aligned) .yt-uix-button-primary[disabled]:focus,body:not(.site-center-aligned) .yt-uix-button-primary[disabled]:hover{background:linear-gradient(to bottom,#3f76b7 0,#3d71b0 100%);border-color:#325e92}.html5-watch-later-button{pointer-events:none!important}.html5-text-button[aria-label="3D"]{display:block}#eow-description:empty:after{content:"No description available.";color:#4d4d4d}.player-unavailable{width:var(--v3-player-width); height:calc(var(--v3-player-height) + 30px)}.unavailable-video #watch7-content, .unavailable-video #watch7-sidebar{display:none!important;}.html5-video-info-panel{background-color:rgba(31,31,31,.9)}body:not(.site-center-aligned) #guide{padding-bottom:330px}#error-page{position:relative;top:calc(var(--v3-player-height) - 170px)}.watch-playlist .ytp-button-playlist{display:block;}.html5-video-info:not(:hover) #v3_debug_info {visibility:hidden;}.yt-uix-button-icon-watch-comment-vote-up{background:no-repeat url(`+ chrome.extension.getURL('images/www-hitchhiker-vflJNvSK4-MOD.png') +`) -55px -291px}.yt-uix-button:hover .yt-uix-button-icon-watch-comment-vote-up{background:no-repeat url(`+ chrome.extension.getURL('images/www-hitchhiker-vflJNvSK4-MOD.png') +`) -16px -699px}.voted-up .yt-uix-button-icon-watch-comment-vote-up, .voted-up:hover .yt-uix-button-icon-watch-comment-vote-up{background:no-repeat url(`+ chrome.extension.getURL('images/www-hitchhiker-vflJNvSK4-MOD.png') +`) -51px -482px}#comments-view .comment .comment-action-vote-up:hover, #comments-view .comment .comment-action-vote-down:hover{opacity:1}.yt-uix-button-icon-watch-comment-vote-down{background:no-repeat url(`+ chrome.extension.getURL('images/www-hitchhiker-vflJNvSK4-MOD.png') +`) -62px 0}.yt-uix-button:hover .yt-uix-button-icon-watch-comment-vote-down{background:no-repeat url(`+ chrome.extension.getURL('images/www-hitchhiker-vflJNvSK4-MOD.png') +`) -124px -453px}.voted-down .yt-uix-button-icon-watch-comment-vote-down{background:no-repeat url(`+ chrome.extension.getURL('images/www-hitchhiker-vflJNvSK4-MOD.png') +`) -34px -617px}#reply_container .start.comment-action[data-action=reply]{pointer-events:none;}.reply-post{margin-left:60px; margin-top:15px; padding-bottom:15px;}.watch-dancing-psy {background: url(//s.ytimg.com/yts/img/logo_dancing_psy-vflsJl9hC.gif) no-repeat -73px 1px;width: 20px;height: 30px;margin-top: -30px;}button.ytp-v3teather.ytp-button, button.ytp-v3normal.ytp-button{height:25px;}#watch7-sidebar .watch-sidebar-section.autoplay{margin-bottom:5px;}.v3-padder-help-editor{margin-top:10px;width:510px}.v3-padder-help-submit{left:474px}.v3-padder-help-action{padding-top:14px}.videowall-still-info-upnext{display:none;}html[c3]:not([c3loaded]),html[pl]:not([plloaded]),html[feed]:not([feedload]){display:none;}.exp-fixed-masthead .gstl_50.gssb_c{z-index:9999;position:fixed!important}.exp-fixed-masthead.site-left-aligned #yt-masthead-container{margin-top:30px;width:100%!important;position:fixed;z-index:999;top:0}.exp-fixed-masthead #page-container,body.exp-fixed-masthead #masthead-expanded{margin-top:80px}body.exp-fixed-masthead #masthead-expanded{margin-bottom:-80px}.exp-fixed-masthead #upload-button-menu,.sb-card{position:fixed}.exp-fixed-masthead #sb-container{top:90px}.exp-fixed-masthead #gb{width:100%!important;position:fixed;z-index:9999;top:0}.exp-fixed-masthead #upload-button-menu{position:fixed;top:68px!important}body.exp-fixed-guide #guide-container{position:fixed!important;top:95px!important}#error-page-content #yt-masthead{margin:25px 128px!important}#watch7-sidebar-discussion{margin-top:15px!important}#watch-live-comments .comments-post .video-thumb{position:absolute}#watch-live-comments textarea::placeholder{position:relative!important;top:-2px;left:0}#watch-live-comments .comments-post-buttons{right:11px;z-index:9600}.exp-fixed-masthead #alerts{position:absolute; top:85px;}.showing-alert #page{top:45px;}.site-center-aligned.showing-alert #page{top:0px;}html[c3] #watch7-creator-bar{margin-top:10px;margin-left:auto;margin-right:auto;width:929px}a.stat-entry:empty{display:none;}#watch-headline-title{white-space:normal;}.innertube-studio-meta2-editor-v1 .yt-uix-form-input-textarea{width:calc(var(--v3-player-width) - 60px)}.exp-unique-cinema #player.watch-medium button.ytp-v3teather.ytp-button, .exp-unique-cinema #player.watch-small button.ytp-v3normal.ytp-button{display:none;}`;
var STY_core3css = `.exp-v3-enhanced-c3 #branded-page-body,.exp-v3-enhanced-c3 #branded-page-header,.exp-v3-enhanced-c3 #branded-page-header-container,.exp-v3-enhanced-c3 #channel-header-main{width:calc(var(--v3-player-width) + 333px)}.exp-v3-enhanced-c3 .primary-pane{width:calc(var(--v3-player-width) + 19px)!important}.exp-v3-enhanced-c3 #channels-browse-content-grid{width:calc(var(--v3-player-width) + 19px)}#playlist-pane-container,.exp-v3-enhanced-c3 .channel-layout-two-column .tab-content-body{background:#e6e6e6}.exp-v3-enhanced-c3 .primary-pane{box-shadow:0 0 15px rgba(0,0,0,.2);clip-path:inset(0 -15px 0 0)}.exp-v3-enhanced-c3 .video-item-content{width:calc(var(--v3-player-width) - 332px)!important}.exp-v3-enhanced-c3 .channels-featured-video,.exp-v3-enhanced-c3 .featured-video-view-module{height:calc(var(--v3-player-height) + 59px)!important}.exp-v3-enhanced-c3 #player,.exp-v3-enhanced-c3 .channels-video-player,.exp-v3-enhanced-c3 .featured-video-view-module{width:var(--v3-player-width)!important;max-width:var(--v3-player-width)!important}.exp-v3-enhanced-c3 #player-api,.exp-v3-enhanced-c3 .channels-video-player{height:calc(var(--v3-player-height))!important}html[c3] .exp-v3-enhanced-c3 #watch7-creator-bar{width:calc(var(--v3-player-height) + 665px)!important}.exp-v3-enhanced-c3.exp-v3-enhanced-c3-new-featured .v3-not-blog-shelf{margin-left:7px}.exp-v3-enhanced-c3.exp-v3-enhanced-c3-new-featured .playlist-info{margin-left:7px}html[c3] .ytp-button-watch-on-youtube{display:block!important}#watch-description.yt-uix-expander-collapsed #watch-description-content.click-to-buy{height:135px;min-height:135px}#watch7-player{width:var(--v3-player-width);height:calc(var(--v3-player-height) + 30px);background-color:#000}.yt-scrollbar-wide ::-webkit-scrollbar{width:10px}#player-branded-banner{height:calc(var(--v3-player-height) + 98px)}.vevo #guide-container{background-image:none;}.vevo #watch-related{margin-top:25px!important;}.Merry-Christmas #logo-container:after{content:url(https://i114.fastpic.ru/big/2020/1210/7f/fee2e73ed074bfbfc5ba634b88a1ea7f.png);filter:drop-shadow(1px 1px 1px rgb(128, 128, 128));position:absolute;top:-17px;left:90px;z-index:9999}.watch-playlist #player-branded-banner{height:72px!important}.watch-branded-banner.watch-playlist+#content #watch7-container{margin-top:0}#guide-main.collapsed .guide-module-content{pointer-events:none;}.exp-fixed-masthead #masthead-expanded:not(.hid)+#alerts{top:220px;}.guide-item .guide-trending-icon{background:no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflNlthLq.webp) -674px 0;background-size:auto;width:20px;height:20px}.site-center-aligned #watch7-main-container{width:calc(var(--v3-player-width) + 363px)}.exp-fixed-masthead #masthead-expanded:not(.hid)+#alerts{top:220px}.site-center-aligned #guide{width:220px!important;position:fixed!important;left:0!important;margin:0!important;right:0!important;top:60px!important}.site-center-aligned #player.watch-small,.site-center-aligned .watch #content.content-alignment{max-width:calc(var(--v3-player-width) + 362px)}.site-center-aligned .signup-promo>*{margin-top:15px;margin-bottom:15px;margin-left:10px}.site-center-aligned #page.feed #content.content-alignment{margin-top:0;width:calc(var(--v3-player-width) - 10px)}.site-center-aligned #page.feed #content.content-alignment .branded-page-v2-primary-col{position:relative;left:-92px}.site-center-aligned .branded-page-related-channels{display:none}.site-center-aligned .lohp-large-shelf-container{width:690px!important}.site-center-aligned #player.watch-medium:before{content:'';position:absolute;left:0;background-color:#1b1b1b;height:calc(var(--v3-teather-height) + 30px);width:100%}.site-center-aligned #guide{z-index:9}.site-center-aligned #player.watch-playlist.watch-small+#content #watch7-sidebar-contents{margin-top:calc(var(--v3-player-height) + 45px)}.site-center-aligned #player.watch-playlist.watch-medium:before{height:calc(var(--v3-teather-height) + 63px)}body[spfprogress]:after{content:"";background-color:red;height:2px;position:fixed;top:0;z-index:99993323139!important;box-shadow:0 2px 3px #930000}body.site-center-aligned[spfprogress]:after{box-shadow: 0px 1px 2px #ffd5d5;}body[spfprogress]:not([spfprogress="100"]):after{animation:progressBar 1s ease-in-out;animation-fill-mode:both}body[spfprogress="0"]:after{width:3px}body[spfprogress="50"]:after{width:50%}body[spfprogress="90"]:after{width:100%}@keyframes progressBar{0%{width:0}100%{width:100%}}#appbar-guide-menu #guide-loading-toggle{display:none;}.exp-paginated-search #search-more-related-button{display:none;}body:not(.exp-paginated-search) .search-pager > *:not([id="search-more-related-button"]){display:none;}@media (max-width:1600px){.site-center-aligned #page.search.no-flex .branded-page-v2-primary-col{width:640px;}}.exp-colorful-body #page, .exp-colorful-body #watch7-sidebar, .exp-colorful-body #body-container{background-color: #fbfbfb}.exp-modern-sentiment-bar .actionable #watch-like:active .yt-uix-button-content, .exp-modern-sentiment-bar .actionable #watch-like.yt-uix-button-toggled .yt-uix-button-content{color: #167ac6;}.exp-modern-sentiment-bar .video-extras-sparkbar-likes {float: left;height: 2px;background: #167ac6;}.exp-sort-comments #comments-view .comments-post{margin: 0 0 16px;}body:not(.exp-sort-comments) #watch-response-content-sort{display:none;} #watch-response-content-sort{border:0;}.exp-modern-comment-header #comments-view h4 a{pointer-events:none;color:#666;cursor:pointer;font-size:12px;font-weight:400;text-transform:uppercase}.exp-modern-comment-header .comments-textarea-container textarea{margin-left:6px}.exp-modern-comment-header .comments-textarea-container .comments-textarea-tip{border:6px solid #d5d5d5;left:-5px;top:0;border-bottom-color:transparent;border-left-color:transparent}.exp-modern-comment-header .comments-textarea-container:before{content:'';position:absolute;border:7px solid #fff;left:-3px;top:1px;z-index:1;border-bottom-color:transparent;border-left-color:transparent}`;
var STY_core1 = document.createElement("style");
	STY_core1.setAttribute("id", "v3_sty_01");
	STY_core1.innerHTML = STY_core1css + STY_core2css;
	var STY_core2 = document.createElement("style");
	STY_core2.setAttribute("id", "v3_sty_02");
	STY_core2.innerHTML = STY_core3css;
insertAfter(document.head, STY_core1);
insertAfter(document.head, STY_core2);
}