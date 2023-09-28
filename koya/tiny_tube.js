var newURL = chrome.extension.getURL("playground/index.html");
chrome.tabs.create({ url: newURL });