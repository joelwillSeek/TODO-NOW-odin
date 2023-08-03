/**
 * ->In order to store values using localStorage
 * ->I must store the values instead of objects
 * ->So what i'm think now is to store using array
 * ->Store the Project names in an array called project_name
 * ->And store the todo's title and description as an array
 * ->Make sure to give each todo key of project_name+number
 */

import Project, {
  get_current_project_name,
  list_of_created_projects,
} from "./projects";
import { set_current_project_name } from "./projects";

//get element
const heading_currently_selected_project = document.querySelector(
  ".todocontent .top > h1"
);

let name_of_projects_created_saved_key = "project_name";

//there is a problem when trying to delete project

let store_projects = () => {
  localStorage.clear();
  let object_key_in_Array_form = Object.keys(list_of_created_projects);
  let list_of_created_projects_names = [];

  object_key_in_Array_form.forEach((key) => {
    list_of_created_projects_names.push(key);
    store_todo_of_project(key);
  });

  localStorage.setItem(
    name_of_projects_created_saved_key,
    JSON.stringify(list_of_created_projects_names)
  );
};

let store_todo_of_project = (key) => {
  let iteration_of_todo = 0;
  /**
   * @type {{get_all_todo:Function}}
   */
  let value_of_key = list_of_created_projects[`${key}`];
  /**
   * @type {Array<{title:String,detailed_text:String}>}
   */
  let all_todo = value_of_key.get_all_todo();
  all_todo.forEach(
    /**
     *
     * @param {HTMLDivElement} todo
     */
    (todo) => {
      let get_title = todo.querySelector(".todo h1").textContent;
      let detailed_text = todo.querySelector(
        ".detailed_text_container p"
      ).textContent;
      let setup = [get_title, detailed_text];
      localStorage.setItem(
        `${key}${iteration_of_todo++}`,
        JSON.stringify(setup)
      );
    }
  );
};

let get_stored_projects = () => {
  //gets an array of project names
  let test = localStorage.getItem(name_of_projects_created_saved_key);
  if (test == null) return;
  /**
   * @type {Array<String>}
   */
  let get_project_names = JSON.parse(test);

  get_project_names.forEach((project_name) => {
    let iteration_of_todo = 0;
    let new_project = Project(project_name);

    new_project.setup_new_project();

    new_project.project_name = project_name;

    list_of_created_projects[`${project_name}`] = new_project;

    while (true) {
      /**
       * @type {Array<String>}
       */
      let todo = JSON.parse(
        localStorage.getItem(`${project_name}${iteration_of_todo++}`)
      );
      if (todo != null) {
        new_project.add_todos(
          todo[0],
          `${todo[1].substring(0, 10)}...`,
          todo[1]
        );
      } else {
        break;
      }
      console.log(todo);
    }
  });

  let first_project_key = Object.keys(list_of_created_projects)[0];
  /**
   * @type {{when_project_button_is_clicked:Function}}
   */
  set_current_project_name(first_project_key);
};

export { store_projects, get_stored_projects };
