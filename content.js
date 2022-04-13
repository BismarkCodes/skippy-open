function skippyIcon() {
  let mastHeadContainer = document.getElementsByClassName(
    "style-scope ytd-masthead"
  );

  for (let i = 0; i < mastHeadContainer.length; i++) {
    // create css link
    var link = document.createElement("link");
    link.href = chrome.runtime.getURL("content.css");
    link.type = "text/css";
    link.rel = "stylesheet";
    // inject link into the DOM head
    document.getElementsByTagName("head")[0].appendChild(link);
    // inject skippy icon into the navbar
    if (mastHeadContainer[i].id == "end") {
      let skippyIcon = document.createElement("img");
      skippyIcon.src = chrome.runtime.getURL("images/icon_150.png");
      //   add class to skippy icon
      skippyIcon.className = "skippy-icon";
      // inject
      mastHeadContainer[i].insertBefore(
        skippyIcon,
        mastHeadContainer[i].childNodes[0]
      );
    }
  }
}

function autoSkip() {
  // set interval
  setInterval(() => {
    //   get DOM elements for skip button and ads overlay close button
    let ytSkipBtnContainer = document.getElementsByClassName(
      "ytp-ad-skip-button-container"
    );
    let ytSkipBtn = document.getElementsByClassName(
      "ytp-ad-skip-button ytp-button"
    );
    // ads overlay close button
    let addOverlayButton = document.getElementsByClassName(
      "ytp-ad-overlay-close-button"
    );
    //  if skip button is present click it
    if (ytSkipBtnContainer.length > 0) {
      if (ytSkipBtn.length > 0) {
        ytSkipBtn[0].click();
      }
      //   close add overlay popup if present
      if (addOverlayButton.length > 0) {
        addOverlayButton[0].click();
      }
    }
  }, 500);
}

skippyIcon();
autoSkip();
