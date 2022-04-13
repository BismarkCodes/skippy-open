/*
  ## Popup.js
    
  ## Notes
    - This file is the background script for the extension.
    - It handles the communication between the content 
    script and the popup with the use of service workers.

  ## To-Do
    - Add support for other browsers
    - Add user configurable options

  ## Author
    - @bismarkokletey

  ## License
    - MIT License

*/

function getDomElementById(id) {
  return document.getElementById(id);
}
