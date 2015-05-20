chrome.tabs.onUpdated.addListener(function(id, info, tab){
    var parser = document.createElement('a');
    parser.href = tab.url;
    if(parser.hostname =="daynhauhoc.com") {
        var pathnames = parser.pathname.split('/');
        // chrome.browserAction.show(tab.id);
    }
});
