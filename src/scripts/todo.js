//factory function to create a todo
/**
 *
 * @param {String} title
 * @param {String} description
 * @param {String} duedate
 */
let generateTodo = (title, description, dueDate) => {
  /**
   *
   * @returns {HTMLDivElement}
   */
  let createGui = () => {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //childs of todo start
    let titleHeader = document.createElement("h1");
    titleHeader.textContent = title;

    let descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = description;

    let moreDetailsButton = document.createElement("button");
    //child of more details
    let svgIconForMoreDetailsButton = createPlusSvgForGui();
    moreDetailsButton.classList.add("moredetails");
    moreDetailsButton.textContent = "More";
    moreDetailsButton.appendChild(svgIconForMoreDetailsButton);

    //childs of todo end
    todoDiv.append(titleHeader, descriptionParagraph, moreDetailsButton);

    return todoDiv;
  };

  /**
   *
   * @returns {SVGElement}
   */
  let createPlusSvgForGui = () => {
    let nameSpaceOfSvg = "http://www.w3.org/2000/svg";
    let svgIconForMoreDetailsButton = document.createElementNS(
      nameSpaceOfSvg,
      "svg"
    );
    svgIconForMoreDetailsButton.setAttribute("width", "24");
    svgIconForMoreDetailsButton.setAttribute("height", "24");
    svgIconForMoreDetailsButton.setAttribute("viewBox", "0 0 24 24");
    svgIconForMoreDetailsButton.setAttribute("fill", "none");
    svgIconForMoreDetailsButton.setAttribute("stroke", "#fffeff");
    svgIconForMoreDetailsButton.setAttribute(" stroke-width", "2");
    svgIconForMoreDetailsButton.setAttribute(" stroke-linecap", "round");
    svgIconForMoreDetailsButton.setAttribute(" stroke-linejoin", "round");
    svgIconForMoreDetailsButton.setAttribute(
      "class",
      "feather feather-plus-circle"
    );
    //child of svg start

    let circleForSvg = document.createElement("circle");
    circleForSvg.setAttribute("cx", "12");
    circleForSvg.setAttribute("cy", "12");
    circleForSvg.setAttribute("r", "10");

    let lineForsvg1 = document.createElement("line");
    lineForsvg1.setAttribute("x1", "12");
    lineForsvg1.setAttribute("y1", "8");
    lineForsvg1.setAttribute("x2", "12");
    lineForsvg1.setAttribute("y2", "16");

    let lineForsvg2 = document.createElement("line");
    lineForsvg2.setAttribute("x1", "12");
    lineForsvg2.setAttribute("y1", "8");
    lineForsvg2.setAttribute("x2", "12");
    lineForsvg2.setAttribute("y2", "16");

    let lineForsvg3 = document.createElement("line");
    lineForsvg3.setAttribute("x1", "8");
    lineForsvg3.setAttribute("y1", "12");
    lineForsvg3.setAttribute("x2", "16");
    lineForsvg3.setAttribute("y2", "12");

    //child of svg end

    svgIconForMoreDetailsButton.append(
      circleForSvg,
      lineForsvg1,
      lineForsvg2,
      lineForsvg3
    );
    return svgIconForMoreDetailsButton;
  };
  return { title, description, dueDate, createGui };
};

export default generateTodo;
