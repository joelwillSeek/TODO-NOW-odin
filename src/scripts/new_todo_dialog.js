//import script
import {
  dialog_create_todo,
  duration_of_new_project_animation_in_milliseconds,
} from "./dom_manipulator";
import {
  Project,
  get_current_project_name,
  list_of_created_projects,
} from "./projects";

import { store_projects } from "./project_storage";

import generate_todo from "./todo";

//get element from dom
const button_cancel_todo_creation = document.querySelector(
  "dialog.todo_creator button.cancel_creation_of_todo"
);

const div_container_for_todos = document.querySelector(
  ".todocontent .todolistofselectedproject"
);

const input_title_for_todo = document.querySelector(
  "dialog.todo_creator input.title_for_todo"
);

const input_detailed_text_for_todo = document.querySelector(
  "dialog.todo_creator input.detailed_text_todo"
);

const button_create_todo = document.querySelector(
  "dialog.todo_creator button.create_todo"
);

//listener
button_cancel_todo_creation.addEventListener("click", () => {
  closing_dialog();
});

button_create_todo.addEventListener("click", () => {
  create_todo();
});

//functions
/**
 *
 * @returns {HTMLDivElement}
 */
let create_todo = () => {
  /**
   * @type {{add_todos:Function}}
   */
  let get_current_project =
    list_of_created_projects[`${get_current_project_name()}`];

  /**
   * @type {String}
   */
  let description = input_detailed_text_for_todo.value;

  get_current_project.add_todos(
    input_title_for_todo.value,
    `${description.substring(0, 10)}...`,
    description
  );
  store_projects();
};

let closing_dialog = () => {
  clear_new_project_input_fields();

  dialog_create_todo.animate(
    [{ filter: "opacity(100%)" }, { filter: "opacity(0%)" }],
    {
      duration: duration_of_new_project_animation_in_milliseconds,
      iterations: 1,
    }
  );

  setTimeout(() => {
    dialog_create_todo.close();
  }, duration_of_new_project_animation_in_milliseconds);
};

let clear_new_project_input_fields = () => {
  /**
   * @type {Array<HTMLInputElement>}
   */
  let listOfInputs = document.querySelectorAll("dialog.todo_creator input");
  listOfInputs.forEach((input) => {
    input.value = "";
  });
};
