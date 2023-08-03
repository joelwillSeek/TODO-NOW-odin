//script imports
import { duration_of_new_project_animation_in_milliseconds } from "./dom_manipulator";
import Project, {
  list_of_created_projects,
  /**
   * @type {String}
   */
  get_current_project_name,
  set_current_project_name,
} from "./projects";
import { get_stored_projects, store_projects } from "./project_storage";

//get element form dom
const button_cancel_dialog = document.querySelector(
  "dialog.project_creator button.cancel"
);

const heading_currently_selected_project = document.querySelector(
  ".todocontent .top > h1"
);

const input_name_of_project_dialog = document.querySelector(
  "dialog.project_creator input.nameOfProject"
);

const new_project_dialog = document.querySelector("dialog.project_creator");

/**
 * @type {HTMLButtonElement}
 */
const create_button_dialog = document.querySelector(
  "dialog.project_creator button.createProject"
);

//listener
create_button_dialog.addEventListener("click", () => {
  let project_name = input_name_of_project_dialog.value;
  if (is_empty(project_name)) {
    input_name_of_project_dialog.classList.add("notFiledInput");
  } else {
    create_new_project(project_name);
    if (input_name_of_project_dialog.classList.contains("notFiledInput"))
      input_name_of_project_dialog.classList.remove("notFiledInput");
    closing_dialog();
  }
});

button_cancel_dialog.addEventListener("click", () => {
  closing_dialog();
});

//functions
let create_new_project = (project_name) => {
  let new_project_created = Project(project_name);

  new_project_created.setup_new_project();

  new_project_created.project_name = project_name;

  // currently_selected_project_index_number = list_of_created_projects.length;
  list_of_created_projects[`${project_name}`] = new_project_created;

  set_current_project_name(project_name);

  heading_currently_selected_project.textContent = get_current_project_name();
  store_projects();
};

let closing_dialog = () => {
  clear_new_project_input_fields();

  new_project_dialog.animate(
    [{ filter: "opacity(100%)" }, { filter: "opacity(0%)" }],
    {
      duration: duration_of_new_project_animation_in_milliseconds,
      iterations: 1,
    }
  );

  setTimeout(() => {
    new_project_dialog.close();
  }, duration_of_new_project_animation_in_milliseconds);
};

let clear_new_project_input_fields = () => {
  /**
   * @type {Array<HTMLInputElement>}
   */
  let listOfInputs = document.querySelectorAll("dialog.project_creator input");
  listOfInputs.forEach((input) => {
    input.value = "";
  });
};

/**
 *
 * @param {String} string
 * @returns {Boolean}
 */
let is_empty = (string) => {
  //returns false if 0, true if other number;
  !string.trim().length;
};
