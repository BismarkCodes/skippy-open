// encode url
function encodeUrlHandler(uri) {
  let encodedUri = encodeURI(uri);
  return encodedUri;
}

// function to create a popup card
function createPopupCard() {
  // create the popup card
  var popupCard = document.createElement("div");
  popupCard.className = "skippy-card-container";
  popupCard.id = "skippy-card-container";

  // create the popup card header
  var popupCardHeader = document.createElement("div");
  popupCardHeader.className = "skippy-card-header";

  // create the popup card header left side
  var popupCardHeaderLeft = document.createElement("div");
  popupCardHeaderLeft.className = "skippy-card-header-left";

  // create the popup card header image
  var popupCardHeaderImage = document.createElement("img");
  popupCardHeaderImage.src = encodeUrlHandler(
    chrome.runtime.getURL("images/icon_150.png")
  );

  // create the popup card header left inner
  var popupCardHeaderLeftInner = document.createElement("div");
  popupCardHeaderLeftInner.className = "skippy-card-header-left-inner";

  // create the popup card header left inner title
  var popupCardHeaderLeftInnerTitle = document.createElement("h2");
  popupCardHeaderLeftInnerTitle.innerText = "Skippy";

  // create the popup card header left inner subtitle
  var popupCardHeaderLeftInnerSubtitle = document.createElement("p");
  popupCardHeaderLeftInnerSubtitle.innerText = "YouTube Ads Skipper";

  //  create the popup card content
  var popupCardContent = document.createElement("div");
  popupCardContent.className = "skippy-card-content";

  // create the popup card content paragraph
  var popupCardContentParagraph = document.createElement("p");
  popupCardContentParagraph.innerHTML =
    "<strong>Skippy</strong> automatically skips Ads in youtube videos so you dont have to click the <strong>skip now</strong> button anymore 😃. ";

  // append the elements to the popup card
  popupCardHeaderLeftInner.appendChild(popupCardHeaderLeftInnerTitle);
  popupCardHeaderLeftInner.appendChild(popupCardHeaderLeftInnerSubtitle);
  popupCardHeaderLeft.appendChild(popupCardHeaderImage);
  popupCardHeaderLeft.appendChild(popupCardHeaderLeftInner);
  popupCardHeader.appendChild(popupCardHeaderLeft);
  popupCardContent.appendChild(popupCardContentParagraph);
  popupCard.appendChild(popupCardHeader);
  popupCard.appendChild(popupCardContent);

  return popupCard;
}

// custom ads slot message
function customAdsSlotMessageHandler() {
  // get DOM elements for custom ads slot message
  let container = document.getElementsByClassName("ytp-ad-message-container");
  let messages = document.getElementsByClassName(
    "ytp-ad-text ytp-ad-message-text"
  );
  // if custom ads slot message is present remove it
  if (container.length > 0) {
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].id === "ad-text:p") {
        container[0].style.backgroundColor = "#ff0000 !important";
        container[0].style.color = "#ffffff !important";
        messages[i].innerText = "Skippy";
        messages[i].style.backgroundColor = "#ff0000 !important";
        messages[i].style.color = "#ffffff !important";
      }
    }
  }
}

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
      // search if skippy icon is already present
      setInterval(() => {
        let exists = document.getElementsByClassName("skippy-icon");
        if (exists.length === 0) {
          let skippyPopupContainer = document.createElement("div");
          skippyPopupContainer.className = "skippy-popup-container";
          skippyPopupContainer.id = "skippy-popup-container";
          let skippyIcon = document.createElement("img");
          skippyIcon.src = encodeUrlHandler(
            chrome.runtime.getURL("images/icon_150.png")
          );
          //   add class to skippy icon
          skippyIcon.className = "skippy-icon";
          skippyPopupContainer.appendChild(skippyIcon);
          // append popup card to the skippy icon
          skippyPopupContainer.appendChild(createPopupCard());
          // inject
          mastHeadContainer[i].insertBefore(
            skippyPopupContainer,
            mastHeadContainer[i].childNodes[0]
          );
        }
      }, 500);
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

    // custom ads slot message
    customAdsSlotMessageHandler();

    //  if skip button is present click it
    if (ytSkipBtnContainer.length > 0) {
      if (ytSkipBtn.length > 0) {
        ytSkipBtn[0].style.backgroundColor = "#ff0000";
        ytSkipBtn[0].click();
      }
      //   close add overlay popup if present
      if (addOverlayButton.length > 0) {
        addOverlayButton[0].click();
      }
    }
  }, 500);
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    skippyIcon();
  }
};

autoSkip();
