chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
  if (msg.from === "popup" && msg.subject === "data") {
    // Enable the page-action for the requesting tab.
    chrome.pageAction.show(sender.tab.id);
  }
});

chrome.runtime.onInstalled.addListener(({ reason, version }) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    showReadme();
  }
});

chrome.action.onClicked.addListener((tab) => {
  showReadme();
});

function showReadme(info, tab) {
  let url = chrome.runtime.getURL("readme.html");
  chrome.tabs.create({ url });
}
