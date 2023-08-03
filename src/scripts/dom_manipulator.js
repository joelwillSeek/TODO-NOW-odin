//import style
import "../style/general.css";

//import script
import "./new_project_dialog";
import "./new_todo_dialog";
import { get_stored_projects, store_projects } from "./project_storage";
import {
  list_of_created_projects,
  get_current_project_name,
  currently_selected_project_name,
  set_current_project_name,
  get_first_object_form_created_projects,
} from "./projects";

//declaration
let duration_of_new_project_animation_in_milliseconds = 300;

//get elements form dom
const button_new_project_dialog_display = document.querySelector(
  ".sidenav .createprojects"
);

const div_sidenav_projects = document.querySelector(".sidenav .projectlist");

const button_delete_selected_todos = document.querySelector(
  ".todocontent .top .button_add_and_delete button.delete_todo"
);

const button_show_dialog_for_todo_creation = document.querySelector(
  ".todocontent button.createTodo"
);

const button_delete_selected_project = document.querySelector(
  ".sidenav button.delete_projects"
);

const heading_currently_selected_project = document.querySelector(
  ".todocontent .top > h1"
);

const dialog_create_todo = document.querySelector("dialog.todo_creator");

const dialog_new_project = document.querySelector("dialog.project_creator");

//Listener
button_delete_selected_todos.addEventListener("click", () => {
  /**
   * @type {{delete_selected_todos:Function}}
   */
  let current_project =
    list_of_created_projects[`${get_current_project_name()}`];
  current_project.delete_selected_todos();

  store_projects();
});

button_delete_selected_project.addEventListener("click", () => {
  delete_project(button_delete_selected_project);
});

button_new_project_dialog_display.addEventListener("click", () => {
  dialog_new_project.showModal();
  dialog_new_project.animate(
    [{ filter: "opacity(0%)" }, { filter: "opacity(100%)" }],
    {
      duration: duration_of_new_project_animation_in_milliseconds,
      iterations: 1,
    }
  );
});

button_show_dialog_for_todo_creation.addEventListener("click", () => {
  open_create_todo_dialog();
});

//Functions
let delete_project = () => {
  /**
   * @type {{clear_todo_list_ui:Function}}
   */
  let current_project =
    list_of_created_projects[`${get_current_project_name()}`];

  current_project.clear_todo_list_ui();

  delete list_of_created_projects[`${get_current_project_name()}`];

  get_element_to_delete_by_searching_name(get_current_project_name());

  if (Object.keys(list_of_created_projects).length <= 0) {
    heading_currently_selected_project.textContent = "Project Name";
    set_current_project_name("none");
  } else {
    /**
     * @type {{project_name:String,total_update_todo_list_ui:Function}}
     */
    let alternate_project;
    //gets the first project
    console.table(alternate_project);
    alternate_project = get_first_object_form_created_projects();
    set_current_project_name(alternate_project.project_name);
    heading_currently_selected_project.textContent = `${get_current_project_name()}`;
    alternate_project.total_update_todo_list_ui();
  }
  store_projects();
};

/**
 *
 * @param {String} name_of_project
 * @returns {HTMLButtonElement}
 */
let get_element_to_delete_by_searching_name = (name_of_project) => {
  let button_found;
  div_sidenav_projects.childNodes.forEach((button) => {
    if (button.textContent == name_of_project) {
      div_sidenav_projects.removeChild(button);
      return;
    }
  });
  return button_found;
};

let open_create_todo_dialog = () => {
  dialog_create_todo.showModal();
  dialog_create_todo.animate(
    [{ filter: "opacity(0%)" }, { filter: "opacity(100%)" }],
    {
      duration: duration_of_new_project_animation_in_milliseconds,
      iterations: 1,
    }
  );
};

//exports
export {
  dialog_new_project,
  dialog_create_todo,
  duration_of_new_project_animation_in_milliseconds,
};

get_stored_projects();
