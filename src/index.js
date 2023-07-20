import "./styles/style.css";

let newProjectDialog = document.querySelector("dialog");
let newProjectButton = document.querySelector(".createprojects");
let cancelButton = document.querySelector("button.cancel");

newProjectButton.addEventListener("click", () => {
  newProjectDialog.showModal();
  newProjectDialog.style["display"] = "flex";
  newProjectDialog.animate(
    [{ filter: "opacity(0%)" }, { filter: "opacity(100%)" }],
    { duration: 300, iterations: 0 }
  );
});

cancelButton.addEventListener("click", () => {
  newProjectDialog.close();
  newProjectDialog.animate(
    [{ filter: "opacity(100%)" }, { filter: "opacity(0%)" }],
    { duration: 300, iterations: 1 }
  );
  let handler;
  newProjectDialog.addEventListener(
    "transitionend",
    (handler = () => {
      newProjectDialog.style["display"] = "none";
      setTimeout(() => {
        newProjectDialog.removeEventListener("transitionend", handler);
      }, 1000);
    })
  );
});
