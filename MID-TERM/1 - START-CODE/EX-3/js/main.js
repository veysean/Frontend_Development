//
//  Clear the inputs
//
function clearInput() {
  // TODO



}

//
//  Get the input and create a new row on the table
//
function onAddUser(event) {
  event.preventDefault();

  // TODO Create a row
  

  // TODO Add the first name to the row
 
  // TODO Add the last name to the row
 
  // TODO Add the province to the row
 
  // TODO Add the gender to the row

  // TODO Add the skills  to the row

  // TODO Add the comment to the row
 
  // TODO Add TR to tbody
 
  // TODO Clear inputs
}

// Main
const firstNameInput = document.querySelector("#firstname");
const lastNameInput = document.querySelector("#lastname");
const provinceDropDown = document.querySelector("#province");
const genderRadios = document.querySelectorAll('input[type="radio"]');    // This will return a collection of DOM elements
const skillsCheckboxes = document.querySelectorAll(".skill");             // This will return a collection of DOM elements
const commentTextArea = document.querySelector("#comment");

const table = document.querySelector("tbody");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", onAddUser);
