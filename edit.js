let buttonsContainer = document.getElementById("buttonDiv");
let selectedClass = "current";
let newButtonColorsList = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

function clickButtonHandler(event) {
  // get previous selected button
  let current = event.target.parentElement.querySelector(`.${selectedClass}`);
  // remove current class if current exists
  if (current && current !== event.target) {
    current.classList.remove(selectedClass);
  }

  // set clicked button as current
  event.target.classList.add(selectedClass);
  //   get button color from button dataset
  let color = event.target.dataset.color;
  //   store color to storage
  chrome.storage.sync.set({ color });
}

// create buttons constructor
function contructButtons(buttonColors) {
  chrome.storage.sync.get("color", ({ color }) => {
    let currentColor = color;

    // create buttons for each buttonColors
    for (let buttonColor of buttonColors) {
      let button = document.createElement("button");
      button.dataset.color = buttonColor;
      button.style.backgroundColor = buttonColor;

      // mark button as current
      if (buttonColor === currentColor) {
        button.classList.add(selectedClass);
      }

      // add event listener to button
      button.addEventListener("click", clickButtonHandler);
      // add or append new button to buttonsContainer
      buttonsContainer.appendChild(button);
    }
  });
}

// initialize options page
contructButtons(newButtonColorsList);
