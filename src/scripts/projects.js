//imported scripts
import generate_todo from "./todo";

//declartions
//dont directly edit this use function below
let currently_selected_project_name = "none";

let list_of_created_projects = {};

//get element form dom
let project_list_ul = document.querySelector(".sidenav .projectlist");

/**
 * @type {HTMLDivElement}
 */
let todo_list_div = document.querySelector(
  ".todocontent .todolistofselectedproject"
);

const heading_currently_selected_project = document.querySelector(
  ".todocontent .top > h1"
);

//functions
let set_current_project_name = (name_of_project) =>
  (currently_selected_project_name = name_of_project);

let get_first_object_form_created_projects = () => {
  let first_object_name = Object.keys(list_of_created_projects)[0];
  let actual_object = list_of_created_projects[`${first_object_name}`];
  return actual_object;
};

let get_current_project_name = () => currently_selected_project_name;

//factory functions for project
/**
 *
 * @param {String} name_of_project
 * @returns {{setup_new_project,get_number_of_todos,add_todos}}
 */
let Project = (name_of_project) => {
  let project_number = 0;

  let project_name;
  /**
   * this array is useful to keep track of todo of each project
   */
  /**
   * @type {Array<HTMLDivElement>}
   */
  let list_of_todos = [];

  let get_number_of_todos = () => list_of_todos.length;

  let delete_selected_todos = () => {
    todo_list_div.childNodes.forEach(
      /**
       *
       * @param {HTMLDivElement} todo
       */
      (todo) => {
        /**
         * @type {HTMLInputElement}
         */
        let checkbox = todo.querySelector("#selection_checkbox");
        if (checkbox.checked) {
          list_of_todos.splice(checkbox.getAttribute("id"), 1);
        }
      }
    );
    total_update_todo_list_ui();
  };

  let get_all_todo = () => list_of_todos;

  let add_todos = (title, description, detailedText) => {
    let new_todo = generate_todo(
      title,
      description,
      detailedText,
      list_of_todos.length
    );
    let actual_todo = new_todo.actual_todo;
    todo_list_div.appendChild(actual_todo);
    list_of_todos.push(actual_todo);
  };

  let create_project_button = () => {
    let project_button = document.createElement("button");
    project_button.textContent = name_of_project;
    project_button.classList.add("projectButton");
    project_button.addEventListener("click", () => {
      when_project_button_is_clicked(project_button);
    });
    project_button.setAttribute("id", `${project_number++}`);
    return project_button;
  };

  let clear_todo_list_ui = () => {
    while (todo_list_div.firstChild) {
      todo_list_div.removeChild(todo_list_div.firstChild);
    }
  };

  let setup_new_project = () => {
    let create_button = create_project_button();
    project_list_ul.appendChild(create_button);
    clear_todo_list_ui();
    total_update_todo_list_ui();
  };

  let total_update_todo_list_ui = () => {
    clear_todo_list_ui();
    list_of_todos.forEach((todo) => todo_list_div.append(todo));
  };

  let update_heading_project_name = () => {
    heading_currently_selected_project.textContent =
      currently_selected_project_name;
  };

  let when_project_button_is_clicked = (this_button) => {
    currently_selected_project_name = this_button.textContent;
    /**
     * @type {{total_update_todo_list_ui:Function}}
     */
    let get_current_project =
      list_of_created_projects[`${currently_selected_project_name}`];
    get_current_project.total_update_todo_list_ui();
    update_heading_project_name();
  };

  return {
    setup_new_project,
    get_number_of_todos,
    add_todos,
    get_all_todo,
    total_update_todo_list_ui,
    delete_selected_todos,
    clear_todo_list_ui,
    project_name,
  };
};

//functions

//exports
export default Project;

export {
  list_of_created_projects,
  set_current_project_name,
  get_current_project_name,
  get_first_object_form_created_projects,
};
