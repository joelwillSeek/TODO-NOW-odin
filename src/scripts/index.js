/**
 * TODO
 * -> creating todo put on hold
 * -> making new project button create a button and change the name of current project then new array i think
 */

//style imports
import "../style/style.css";

//script imports
import generateTodo from "./todo";

//getting element form dom
const newProjectDialog = document.querySelector("dialog");
const newProjectButton = document.querySelector(".sidenav .createprojects");
const cancelButton = document.querySelector("dialog button.cancel");
const todoHolderDiv = document.querySelector(
  ".todocontent .todolistofselectedproject"
);
/**
 * @type {HTMLButtonElement}
 */
let createNewProjectButton = document.querySelector(
  "dialog button.createProject"
);

//declarations
let durationOfNewProjectAnimationInMilliseconds = 300;
let listOfExistingTodo = [];

//listeners with functions
newProjectButton.addEventListener("click", () => {
  newProjectDialog.showModal();
  newProjectDialog.animate(
    [{ filter: "opacity(0%)" }, { filter: "opacity(100%)" }],
    { duration: durationOfNewProjectAnimationInMilliseconds, iterations: 1 }
  );
});

createNewProjectButton.addEventListener("click", () => {
  if (checkIfDialogInputAreFilled()) {
  }
});

cancelButton.addEventListener("click", () => {
  clearNewProjectInputFields();

  newProjectDialog.animate(
    [{ filter: "opacity(100%)" }, { filter: "opacity(0%)" }],
    { duration: durationOfNewProjectAnimationInMilliseconds, iterations: 1 }
  );

  setTimeout(() => {
    newProjectDialog.close();
  }, durationOfNewProjectAnimationInMilliseconds);
});

//functions
let clearNewProjectInputFields = () => {
  /**
   * @type {Array<HTMLInputElement>}
   */
  let listOfInputs = document.querySelectorAll("dialog input");
  listOfInputs.forEach((input) => {
    input.value = "";
  });
};

let checkIfDialogInputAreFilled = () => {
  /**
   * @type {Array<HTMLInputElement>}
   */
  let listOfInputs = document.querySelectorAll("dialog input");
  listOfInputs.forEach((input) => {
    if (input.classList.contains("notFiledInput"))
      input.classList.remove("notFiledInput");

    if (isEmpty(input.value)) {
      input.classList.add("notFiledInput");
      return false;
    }
  });

  return true;
};

/**
 *
 * @param {String} string
 * @returns {number}
 */
let isEmpty = (string) => !string.trim().length;
