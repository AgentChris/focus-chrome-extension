chrome.storage.local.get('numberYoutubeClosedTabs', function (result) {
    const info = document.getElementById('numberYoutubeClosedTabs');
    info.innerText = result.numberYoutubeClosedTabs || 0;
});
chrome.storage.local.get('numberFacebookClosedTabs', function (result) {
    const info = document.getElementById('numberFacebookClosedTabs');
    info.innerText = result.numberFacebookClosedTabs || 0;
});
chrome.storage.local.get('numberInstagramClosedTabs', function (result) {
    const info = document.getElementById('numberInstagramClosedTabs');
    info.innerText = result.numberInstagramClosedTabs || 0;
});
