/**
 * -this function is a factory function
 * -creates a todo in ui form
 */
/**
 *
 * @param {String} title
 * @param {String} description
 * @param {String} detailed_text
 * @param {Number} index_of_todo_stored_in_array
 */
let generate_todo = (
  title,
  description,
  detailed_text,
  index_of_todo_stored_in_array
) => {
  let detailed_text_disabled = false;

  /**
   *
   * @returns {HTMLDivElement}
   */
  let create_gui = () => {
    //order of function calling matters
    let svg_icon_for_more_details_button = create_plus_svg_for_gui();

    let title_header = title_header_todo();

    let description_paragraph = description_paragraph_todo();

    let div_detailed_text = create_detailed_text_div();

    let more_details_button = more_details_button_todo(div_detailed_text);

    let todo_div = create_todo_div();

    let container_for_todo_input_and_button =
      container_of_input_and_detailed_button_in_todo_content();

    let paragraph_detailed_text = create_paragraph_detailed_text();

    let selection_checkbox = create_checkbox_selection();

    more_details_button.classList.add("moredetails");
    more_details_button.textContent = "More";
    more_details_button.appendChild(svg_icon_for_more_details_button);

    div_detailed_text.append(paragraph_detailed_text);

    container_for_todo_input_and_button.append(
      selection_checkbox,
      title_header,
      description_paragraph,
      more_details_button
    );
    //this need to be last
    todo_div.append(container_for_todo_input_and_button, div_detailed_text);

    return todo_div;
  };

  let container_of_input_and_detailed_button_in_todo_content = () => {
    let container = document.createElement("div");
    container.classList.add("todo");
    return container;
  };

  let create_detailed_text_div = () => {
    let detailed_div = document.createElement("div");
    detailed_div.classList.add("detailed_text_container");
    return detailed_div;
  };

  let create_paragraph_detailed_text = () => {
    let p = document.createElement("p");
    p.textContent = detailed_text;
    return p;
  };

  //creates a checkbox that represents selection with labels that is inclosed by div for styling purposes
  let create_checkbox_selection = () => {
    let div_for_checkbox = document.createElement("div");
    div_for_checkbox.classList.add("selection");

    let label_for_checkbox = document.createElement("label");
    label_for_checkbox.setAttribute("for", "selection_checkbox");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("id", "selection_checkbox");
    checkbox.type = "checkbox";

    div_for_checkbox.appendChild(checkbox, label_for_checkbox);
    return div_for_checkbox;
  };

  //creates a button for more details and enables or disables the detailed text
  /**
   *
   * @returns {HTMLButtonElement}
   */
  let more_details_button_todo = (detailed_text_container) => {
    let more_details_button = document.createElement("button");
    more_details_button.addEventListener("click", () => {
      if (detailed_text_disabled) {
        detailed_text_container.style.display = "none";
      } else {
        detailed_text_container.style.display = "block";
      }

      detailed_text_disabled = !detailed_text_disabled;
    });

    return more_details_button;
  };

  /**
   *
   * @returns {HTMLParagraphElement}
   */
  let description_paragraph_todo = () => {
    let description_paragraph = document.createElement("p");
    description_paragraph.textContent = description;
    return description_paragraph;
  };

  /**
   *
   * @returns {HTMLHeadingElement}
   */
  let title_header_todo = () => {
    let title_header = document.createElement("h1");
    title_header.textContent = title;
    return title_header;
  };

  /**
   *
   * @returns {HTMLDivElement}
   */
  let create_todo_div = () => {
    let todo_div = document.createElement("div");
    todo_div.classList.add("main_todo");
    todo_div.setAttribute("id", `${index_of_todo_stored_in_array}`);
    return todo_div;
  };

  /**
   *
   * @returns {SVGElement}
   */
  let create_plus_svg_for_gui = () => {
    let name_space_of_svg = "http://www.w3.org/2000/svg";
    let svg_icon_for_more_details_button = document.createElementNS(
      name_space_of_svg,
      "svg"
    );
    svg_icon_for_more_details_button.setAttribute("width", "24");
    svg_icon_for_more_details_button.setAttribute("height", "24");
    svg_icon_for_more_details_button.setAttribute("viewBox", "0 0 24 24");
    svg_icon_for_more_details_button.setAttribute("fill", "none");
    svg_icon_for_more_details_button.setAttribute("stroke", "#fffeff");
    svg_icon_for_more_details_button.setAttribute("stroke-width", "2");
    svg_icon_for_more_details_button.setAttribute("stroke-linecap", "round");
    svg_icon_for_more_details_button.setAttribute("stroke-linejoin", "round");
    svg_icon_for_more_details_button.setAttribute(
      "class",
      "feather feather-plus-circle"
    );
    //child of svg start

    let circle_for_svg = document.createElement("circle");
    circle_for_svg.setAttribute("cx", "12");
    circle_for_svg.setAttribute("cy", "12");
    circle_for_svg.setAttribute("r", "10");

    let line_for_svg1 = document.createElement("line");
    line_for_svg1.setAttribute("x1", "12");
    line_for_svg1.setAttribute("y1", "8");
    line_for_svg1.setAttribute("x2", "12");
    line_for_svg1.setAttribute("y2", "16");

    let line_for_svg2 = document.createElement("line");
    line_for_svg2.setAttribute("x1", "12");
    line_for_svg2.setAttribute("y1", "8");
    line_for_svg2.setAttribute("x2", "12");
    line_for_svg2.setAttribute("y2", "16");

    let line_for_svg3 = document.createElement("line");
    line_for_svg3.setAttribute("x1", "8");
    line_for_svg3.setAttribute("y1", "12");
    line_for_svg3.setAttribute("x2", "16");
    line_for_svg3.setAttribute("y2", "12");

    //child of svg end

    svg_icon_for_more_details_button.append(
      circle_for_svg,
      line_for_svg1,
      line_for_svg2,
      line_for_svg3
    );
    return svg_icon_for_more_details_button;
  };

  return { actual_todo: create_gui(), title, detailed_text };
};

export default generate_todo;
