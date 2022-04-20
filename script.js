chrome.storage.local.get('numberYoutubeClosedTabs', function (result) {
    const info = document.getElementById('numberYoutubeClosedTabs');
    info.innerText = result.numberYoutubeClosedTabs || 0;
});
