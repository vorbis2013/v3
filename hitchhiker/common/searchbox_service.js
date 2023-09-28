var style = document.createElement('style');
  style.textContent = `.gsok_a{background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px}.gsok_a img{border:none;visibility:hidden}.gsst_a{display:inline-block}.gsst_a{cursor:pointer;padding:0 4px}.gsst_a:hover{text-decoration:none!important}.gsst_b{font-size:16px;padding:0 2px;position:relative;user-select:none;-webkit-user-select:none;white-space:nowrap}.gsst_e{opacity:0.55;}.gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e{opacity:0.72;}.gsst_a:active .gsst_e{opacity:1;}.gsst_f{background:white;text-align:left}.gsst_g{background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;box-shadow:0 2px 4px rgba(0,0,0,0.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.2);margin:-1px -3px;padding:0 6px}.gsst_h{background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px}.gsib_a{width:100%;padding:4px 6px 0}.gsib_a,.gsib_b{vertical-align:top}.gssb_c{border:0;position:absolute;z-index:989}.gssb_e{border:1px solid #ccc;border-top-color:#d9d9d9;box-shadow:0 2px 4px rgba(0,0,0,0.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.2);cursor:default}.gssb_f{visibility:hidden;white-space:nowrap}.gssb_k{border:0;display:block;position:absolute;top:0;z-index:988}.gsdd_a{border:none!important}a.gspqs_a{padding:0 3px 0 8px}.gspqs_b{color:#666;line-height:22px}.gspr_a{padding-right:1px}.gsq_a{padding:0}.gssb_a{padding:0 7px}.gssb_a,.gssb_a td{white-space:nowrap;overflow:hidden;line-height:22px}#gssb_b{font-size:11px;color:#36c;text-decoration:none}#gssb_b:hover{font-size:11px;color:#36c;text-decoration:underline}.gssb_g{text-align:center;padding:8px 0 7px;position:relative}.gssb_h{font-size:15px;height:28px;margin:0.2em;-webkit-appearance:button}.gssb_i{background:#eee}.gss_ifl{visibility:hidden;padding-left:5px}.gssb_i .gss_ifl{visibility:visible}a.gssb_j{font-size:13px;color:#36c;text-decoration:none;line-height:100%}a.gssb_j:hover{text-decoration:underline}.gssb_l{height:1px;background-color:#e5e5e5}.gssb_m{color:#000;background:#fff}.gsfe_a{border:1px solid #b9b9b9;border-top-color:#a0a0a0;box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1);-moz-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1);-webkit-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1);}.gsfe_b{border:1px solid #4d90fe;outline:none;box-shadow:inset 0px 1px 2px rgba(0,0,0,0.3);-moz-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.3);-webkit-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.3);}.gsfi{font-size:16px}.gsfs{font-size:16px}a.gssb_j{font-size:12px;color:#03c}.gssb_a,.gssb_a td{line-height:20px}.gssb_a{padding:0 6px}.gssb_c{z-index:2000000007}.gssb_i td{background:#eee}.gssb_k{z-index:2000000006}.gssb_l{margin:2px 0}.gsib_a{padding:0 4px}.gsok_a{padding:0}.gsok_a img{display:block}.gsfe_b{border:1px solid #1c62b9;box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);outline:none;}`;
  document.head.appendChild(style);

function getRidOfUnicodeEscapeCharacters(x) {

var r = /\\u([\d\w]{4})/gi;

return unescape(x.replace(r, function(numbergroup) {
	return String.fromCharCode(parseInt(numbergroup, 16));
}));

}

document.querySelector('html').setAttribute('s-load', '');
 
 var searchsuggestiondata;
function getSearch2(searchparameter) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       searchsuggestiondata = xhttp.responseText;
    }
};

    var hl = (yt.config_.INNERTUBE_CONTEXT_HL).toLowerCase();
    var gl = (yt.config_.INNERTUBE_CONTEXT_GL).toLowerCase();

var url = (`https://clients1.google.com/complete/search?client=youtube&hl=` + hl + `&gl=` + gl + `&sugexp=ytd4_arm_1&gs_rn=23&gs_ri=youtube&ds=yt&cp=5&gs_id=g&q=` + searchparameter + `&callback=google.sbox.p50&gs_gbg=KM7SGv5`);
xhttp.open("GET", url, true);
xhttp.send();

}

 document.getElementById("masthead-search-term").onfocus = function() {

        document.getElementById("masthead-search-terms").setAttribute("class", document.getElementById("masthead-search-terms").getAttribute("class") + " gsfe_a");
		try{document.querySelector('table.gstl_50').classList.remove('hid')}catch(err){}

    }

    document.getElementById("masthead-search-term").onblur = function() {

        setTimeout(function () {document.getElementById("masthead-search-terms").setAttribute("class", document.getElementById("masthead-search-terms").getAttribute("class").replace(" gsfe_a", ""));
		try{document.querySelector('table.gstl_50').classList.add('hid')}catch(err){}}, 200);
		try{document.querySelector('#masthead-search-terms').classList.remove('gsfe_b');}catch(err){}

    }

    document.getElementById("masthead-search-term").onclick = function() {

        if (document.getElementById("masthead-search-terms").getAttribute("class").search("gsfe_b") == "-1") {

        document.getElementById("masthead-search-terms").setAttribute("class", document.getElementById("masthead-search-terms").getAttribute("class") + " gsfe_b");

        }

    }

    document.getElementById("masthead-search-terms").oncontextmenu = function() {

        document.getElementById("masthead-search-terms").setAttribute("class", document.getElementById("masthead-search-terms").getAttribute("class") + " gsfe_b");

    }
	
	
	
    function injectSearchboxListener() {

        var checkforclickclass = setInterval(function() {

            if (document.getElementById("masthead-search-terms").getAttribute('class').search("gsfe_b") != "-1") {

                clearInterval(checkforclickclass);

                injectListener();

            }

        }, 100);

        function injectListener() {

            function toggle(e) {

                if (e.target.id !== 'masthead-search-terms' && e.target.id !== 'masthead-search-term') {

                    document.getElementById("masthead-search-terms").setAttribute("class", document.getElementById("masthead-search-terms").getAttribute("class").replace("gsfe_b", ""));

                }

            }

            window.addEventListener("click", toggle, false);
            window.addEventListener("contextmenu", toggle, false);

            var checkforfocusloss = setInterval(function() {

                if (document.getElementById("masthead-search-terms").getAttribute("class").search("gsfe_b") == "-1") {

                    clearInterval(checkforfocusloss);

                    window.removeEventListener("click", toggle, false);
                    window.removeEventListener("contextmenu", toggle, false);

                }

            }, 10);

        }

    }

    //var searchboxlistener = setInterval(injectSearchboxListener, 10);

    function injectAutosuggestionListener() {

        var waitformenuopen = setInterval(function() {

          if (document.getElementsByClassName("gstl_50 gssb_c")[0] != undefined) {

               clearInterval(waitformenuopen);

              injectListener();

          }

        }, 10);

        function injectListener() {

            function toggle(e) {

               if (e.target) {}

            }

        }

    }
	
	
	
	    document.getElementById("masthead-search-term").oninput = function() {

        if (document.getElementById("masthead-search-term").value != "") {

            constructSearchSuggestions();
			try{document.querySelector('table.gstl_50.hid').classList.remove('hid')}catch(err){}

        }
		
		else {
			try{document.querySelector('table.gstl_50').remove()}catch(err){}
		}

    }
	
	
	
	
	
	    function constructSearchSuggestions() {

        var searchparameter = encodeURIComponent(document.getElementById("masthead-search-term").value.toString());

        getSearch2(searchparameter);

        var waitforsuggestiondataupdate = setInterval(function() {

            if (searchsuggestiondata) {

                clearInterval(waitforsuggestiondataupdate);

                rest();

            }

        }, 10);

        var presentationlis = (``);

        function rest() {

        try {

        var sbseid = 0;
		
		String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

        for (var i = 0; i < searchsuggestiondata.split(",").length; i++) {

            var ropmet = searchsuggestiondata.replace("google.sbox.p50 && google.sbox.p50", "").split(",")[i].replace("[", "").replaceAll('"', '');

            var tempor = getRidOfUnicodeEscapeCharacters(ropmet);

            var value = document.getElementById("masthead-search-term").value.toString();

            if (!tempor.startsWith(value)) {

                continue;

            }
			
			else {

                var othertext = tempor.replace(value, "");

                var appropiatedfinal = (value + `<b>` + othertext + `</b>`);
					
				presentationlis += `<tr class="v3-searcher"><td class="gssb_a gsfs" dir="ltr" style="text-align: left;"><div class="gsq_a"><table cellspacing="0" cellpadding="0" style="width: 100%;"><tbody><tr><td style="width: 100%;"><span>`+ appropiatedfinal +`</span></td></tr></tbody></table></div></td></tr>`;

                sbseid++;

            }
        }



        var widthattr = (document.getElementById("masthead-search-terms").getBoundingClientRect().width).toString();
        var topattr = (document.getElementById("masthead-search-terms").getBoundingClientRect().top + 28).toString();
        var leftattr = (document.getElementById("masthead-search-terms").getBoundingClientRect().left).toString();

		var finalSearchSuggestionsTemplate = `<table cellspacing="0" cellpadding="0" class="gstl_50 gssb_c" style="width: `+ widthattr +`px;top: `+ topattr +`px;position: absolute;text-align: left;left: `+ leftattr +`px;" dir="ltr"><tbody><tr><td class="gssb_f"></td><td class="gssb_e" style="width: 100%;"><table cellspacing="0" cellpadding="0" class="gssb_m" style="width: 100%;"><tbody><tr><td class="gsfs" dir="ltr" style="text-align: left;"><div class="gsq_a"><table cellspacing="0" cellpadding="0" style="width: 100%;"><tbody>`+ presentationlis +`</tbody></table>`;

            if (document.getElementsByClassName("gstl_50 gssb_c")[0] != undefined) {

                document.getElementsByClassName("gstl_50 gssb_c")[0].remove();

            }




        var htmlparser = new DOMParser().parseFromString(finalSearchSuggestionsTemplate, "text/html");

        if (htmlparser.querySelector("td")) {

        document.body.insertAdjacentHTML('beforeend', finalSearchSuggestionsTemplate);

        }

        } catch(err) {

            console.error(err);

        }

        }

    }
	