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

    //  if skip button is present click it
    if (ytSkipBtnContainer.length > 0) {
      if (ytSkipBtn.length > 0) {
        ytSkipBtn[0].click();
      }
    }
  }, 500);
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    autoSkip();
  }
};
