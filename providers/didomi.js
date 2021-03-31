
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log('onUpdated', changeInfo.status)
    if (changeInfo.status === 'complete') {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: () => {
                const badPopin = document.getElementById('didomi-host');
                if (badPopin) {
                    badPopin.style.display = 'none';
                }
            }
        });
    }
})
