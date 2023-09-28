function create404(reason){
	var errorhtml = `<div id="error-page">
      <div id="error-page-content">
        <img id="error-page-hh-illustration" src="//s.ytimg.com/yts/img/image-hh-404-vflxxCpNv.png" alt="">
        <p>
          `+ reason +`
        </p>
        <div id="yt-masthead">
              <a id="logo-container" href="//www.youtube.com/" title="YouTube home" class=" "><img id="logo" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="YouTube home"></a>

          

  <form id="masthead-search" class="search-form consolidated-form" action="/results" onsubmit="if (_gel('masthead-search-term').value == '') return false;">
<button tabindex="2" dir="ltr" class="search-btn-component search-button yt-uix-button yt-uix-button-default yt-uix-button-size-default" onclick="if (_gel('masthead-search-term').value == '') return false; _gel('masthead-search').submit(); return false;;return true;" id="search-btn" type="submit" role="button">    <span class="yt-uix-button-content">
Search 
    </span>
</button><div id="masthead-search-terms" class="masthead-search-terms-border" dir="ltr"><label><input id="masthead-search-term" autocomplete="off" class="search-term" name="search_query" value="" type="text" tabindex="1" onkeyup="goog.i18n.bidi.setDirAttribute(event,this)" title="Search"></label></div>  </form>

        </div>
      </div>
      <span id="error-page-vertical-align"></span>
    </div>`;
	return errorhtml;
}