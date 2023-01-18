/*
  ### Notes
  - This script is intended to be injected into the YouTube video page.
  - This script will automatically skip the ad after 500 ms i.e half a second.

  ### To-Do
  - Add support for other browsers
  - Add support for other video sites

  ### Author
  - @bismarkokletey

  ### License
  - MIT License
*/

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

  // create footer for popup card
  var popupCardFooter = document.createElement("div");
  popupCardFooter.className = "skippy-card-footer";

  // create footer text for popup card
  var popupCardFooterText = document.createElement("p");
  popupCardFooterText.innerText = "Made with ❤️ by ";

  // creat a link tag for the footer text
  var popupCardFooterLink = document.createElement("a");
  popupCardFooterLink.className = "skippy-link";
  popupCardFooterLink.href = "https://bismarkamanor.vercel.app/";
  popupCardFooterLink.target = "_blank";
  popupCardFooterLink.innerText = "Bismark Okletey";

  // append the elements to the popup card
  popupCardFooterText.appendChild(popupCardFooterLink);
  popupCardFooter.appendChild(popupCardFooterText);
  popupCardHeaderLeftInner.appendChild(popupCardHeaderLeftInnerTitle);
  popupCardHeaderLeftInner.appendChild(popupCardHeaderLeftInnerSubtitle);
  popupCardHeaderLeft.appendChild(popupCardHeaderImage);
  popupCardHeaderLeft.appendChild(popupCardHeaderLeftInner);
  popupCardHeader.appendChild(popupCardHeaderLeft);
  popupCardContent.appendChild(popupCardContentParagraph);
  //

  // popupCard.appendChild(popupCardHeader);
  popupCard.appendChild(popupCardContent);
  popupCard.appendChild(popupCardFooter);

  return popupCard;
}

// function to create an image element
function createImage(className, src, alt, id) {
  let img = document.createElement("img");
  img.className = className;
  img.src = src;
  img.alt = alt;
  img.id = id;
  return img;
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

    // get ads
    let adsCountBeforeButtonClick = document.getElementsByClassName(
      "ytp-ad-text ytp-ad-message-text"
    );

    // custom ads slot message
    customAdsSlotMessageHandler();

    //  if skip button is present click it
    if (ytSkipBtnContainer.length > 0) {
      if (ytSkipBtn.length > 0) {
        ytSkipBtn[0].style.backgroundColor = "#ff0000";
        ytSkipBtn[0].click();
      }
    }
    //   close add overlay popup if present
    if (addOverlayButton.length > 0) {
      addOverlayButton[0].click();
    }

    // if adsCountBeforeButtonClick is greater than 0
    if (adsCountBeforeButtonClick.length > 0) {
      // check if adsCountBeforeButtonClick has id which includes ad-text:
      if (adsCountBeforeButtonClick[0].id.includes("ad-text:")) {
        // if it does then give it a background color of red
        adsCountBeforeButtonClick[0].style.backgroundColor = "#ff0000";
        adsCountBeforeButtonClick[0].style.color = "#ffffff";
        // check if the adsCountBeforeButtonClick has a child element with id which includes skippy-ad-sm-image
        if (adsCountBeforeButtonClick[0].childNodes.length > 0) {
          if (
            adsCountBeforeButtonClick[0].childNodes[0].id.includes(
              "skippy-ad-sm-image"
            )
          ) {
            return;
          } else {
            // insert image at the beginning of the adsCountBeforeButtonClick
            adsCountBeforeButtonClick[0].insertBefore(
              createImage(
                "skippy-ad-sm-image",
                encodeUrlHandler(chrome.runtime.getURL("images/icon_48.png")),
                "skippy",
                "skippy-ad-sm-image"
              ),
              adsCountBeforeButtonClick[0].childNodes[0]
            );
          }
        }
      }
    }
  }, 500);
}

// run code when DOM elements are loaded
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    // create css link
    var link = document.createElement("link");
    link.href = chrome.runtime.getURL("content.css");
    link.type = "text/css";
    link.rel = "stylesheet";
    // inject link into the DOM head
    document.getElementsByTagName("head")[0].appendChild(link);
    setTimeout(() => {
      skippyIcon();
    }, 20000);
  }
};

autoSkip();
