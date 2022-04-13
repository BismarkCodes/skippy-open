function getDomElementById(id) {
  return document.getElementById(id);
}

let switchBtn = getDomElementById("switch-btn");
let switchInput = getDomElementById("toggle-switch");
let onContent = getDomElementById("modal-on-content");
let offContent = getDomElementById("modal-off-content");
let instantSkipBtn = getDomElementById("instant-skip");
let delayedSkipBtn = getDomElementById("delayed-skip");
let delayInput = getDomElementById("delay");
let delayTextParent = getDomElementById("select-box-text");
let delayText = getDomElementById("seconds-selected");
let saveBtn = getDomElementById("save-btn");
var popup = getDomElementById("myPopup");

let stateNew = false;
let typeNew = "instant";
let delayNew = 1000;

// set default state
// function setDefaultPopUpState() {
//   chrome.storage.sync.get("state", ({ state }) => {
//     chrome.storage.sync.get("type", ({ type }) => {
//       chrome.storage.sync.get("delay", ({ delay }) => {
//         stateNew = state != null && state;
//         typeNew = type != null && type;
//         delayNew = delay != null && delay;
//         // configure popup
//         switchInput.checked = stateNew;
//         delayInput.value = delayNew;
//         delayText.innerText = delayNew / 1000 + " sec";

//         offContent.style.display = stateNew ? "none" : "block";
//         onContent.style.display = stateNew ? "block" : "none";
//         delayTextParent.style.display =
//           typeNew === "delayed" ? "block" : "none";

//         if (typeNew === "instant") {
//           delayedSkipBtn.classList.remove("active");
//           instantSkipBtn.classList.add("active");
//           delayInput.disabled = true;
//           delayInput.classList.add("disabled");
//         } else {
//           delayedSkipBtn.classList.add("active");
//           instantSkipBtn.classList.remove("active");
//           delayInput.disabled = false;
//           delayInput.classList.remove("disabled");
//         }
//       });
//     });
//   });
// }

// // save toggle switch state
// switchBtn.addEventListener("click", function () {
//   if (switchInput.checked) {
//     switchInput.checked = false;
//     // show off content
//     offContent.style.display = "block";
//     // hide on content
//     onContent.style.display = "none";
//     // save new state to storage
//     let state = false;
//     localStorage.setItem("state", state);
//     chrome.storage.sync.set({ state });
//   } else {
//     switchInput.checked = true;
//     // show off content
//     offContent.style.display = "none";
//     // hide on content
//     onContent.style.display = "block";
//     // save new state to storage
//     let state = true;
//     localStorage.setItem("state", state);
//     chrome.storage.sync.set({ state });
//   }
// });

// // skip type click
// instantSkipBtn.addEventListener("click", function () {
//   delayedSkipBtn.classList.remove("active");
//   instantSkipBtn.classList.add("active");
//   delayInput.disabled = true;
//   delayInput.classList.add("disabled");
//   delayTextParent.style.display = "none";
//   // save to storage
//   let type = "instant";
//   chrome.storage.sync.set({ type });
//   localStorage.setItem("type", type);
// });

// // skip type click
// delayedSkipBtn.addEventListener("click", function () {
//   delayedSkipBtn.classList.add("active");
//   instantSkipBtn.classList.remove("active");
//   delayInput.disabled = false;
//   delayInput.classList.remove("disabled");
//   delayTextParent.style.display = "block";
//   // save to storage
//   let type = "delayed";
//   chrome.storage.sync.set({ type });
//   localStorage.setItem("type", type);
// });

// // select change event
// delayInput.addEventListener("change", function () {
//   delayText.innerText = delayInput.value / 1000 + " sec";
//   // save to storage
//   chrome.storage.sync.set({ delay });
//   localStorage.setItem("delay", delay);
// });

// setDefaultPopUpState();
