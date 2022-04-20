const bannedWebsites = ['www.youtube.com', 'www.facebook', 'www.instagram.com'];
async function closeYoutubeTabs() {
    let { numberYoutubeClosedTabs } = await chrome.storage.local.get('numberYoutubeClosedTabs');
    let { numberInstagramClosedTabs } = await chrome.storage.local.get('numberInstagramClosedTabs');
    let { numberFacebookClosedTabs } = await chrome.storage.local.get('numberFacebookClosedTabs');

    if (!numberYoutubeClosedTabs) {
        numberYoutubeClosedTabs = 0;
    }
    if (!numberInstagramClosedTabs) {
        numberInstagramClosedTabs = 0;
    }
    if (!numberFacebookClosedTabs) {
        numberFacebookClosedTabs = 0;
    }
    const tabs = await chrome.tabs.query({});
    tabs.forEach((tab)=>{
        if (bannedWebsites.some(v => tab.url.includes(v))){
            chrome.tabs.remove(tab.id);
            if (tab.url.indexOf(bannedWebsites[0]) > 0 ) {
                chrome.storage.local.set({"numberYoutubeClosedTabs": numberYoutubeClosedTabs + 1});
            }
            if (tab.url.indexOf(bannedWebsites[1]) > 0 ) {
                chrome.storage.local.set({"numberFacebookClosedTabs": numberFacebookClosedTabs + 1});
            }
            if (tab.url.indexOf(bannedWebsites[2]) > 0 ) {
                chrome.storage.local.set({"numberInstagramClosedTabs": numberInstagramClosedTabs + 1});
            }
        }
    })
}
chrome.tabs.onUpdated.addListener(closeYoutubeTabs);
