// content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'checkURL') {
        const currentURL = window.location.href;
        sendResponse({ url: currentURL });
    }
});