async function closeYoutubeTabs() {
    let { numberYoutubeClosedTabs } = await chrome.storage.local.get('numberYoutubeClosedTabs');

    if (!numberYoutubeClosedTabs) {
        numberYoutubeClosedTabs = 0;
    }
    const tabs = await chrome.tabs.query({});
    tabs.forEach((tab)=>{
        if (tab.url.indexOf('youtube') > 0){
            chrome.tabs.remove(tab.id);
            chrome.storage.local.set({"numberYoutubeClosedTabs": numberYoutubeClosedTabs + 1});
        }
    })
}
chrome.tabs.onUpdated.addListener(closeYoutubeTabs);
