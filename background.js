chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.indexOf('twitter.com') > -1) {
        chrome.tabs.setIcon({
            tabId: tab.id,
            path: 'icon16.png'
        });
    }
});
