"strict";

//Elements Selected
const formInput = document.querySelector(".todo-list-input");
const btnAdd = document.querySelector(".todo-list-add-btn");
const listTodo = document.querySelector(".todo-list");
const storageObject = {};

//Event Listeners

//Getting Value from Input
btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const formInputValue = formInput.value;

  //guard clause
  if (!formInputValue) return;
  const Markup = `<li >
    <div class="form-check">
      <label class="form-check-label">
        <input class="checkbox" type="checkbox" /> ${formInputValue}
        <i class="input-helper"></i
      ></label>
    </div>
    <i class="remove mdi mdi-close-circle-outline"></i>
  </li>`;

  //incert new markup into the List
  listTodo.insertAdjacentHTML("beforeend", Markup);
  storageObject[formInputValue] = true;
  storageEnable();

  //clear the input
  formInput.value = "";
});

//Checkbox Change
listTodo.addEventListener("click", (e) => {
  const checkBox = e.target.closest(".checkbox");

  //guard clause
  if (!checkBox) return;
  const checkBoxText = checkBox.closest(".form-check-label");
  const checkboxParent = checkBox.closest("li");
  if (checkBox.checked) checkboxParent.classList.add("completed");
  else checkboxParent.classList.remove("completed");
  storageObject[checkBoxText.textContent.trim()] = false;
  storageEnable();
});

//Delete

listTodo.addEventListener("click", (e) => {
  const deleteBox = e.target.closest(".remove");

  if (!deleteBox) return;
  const deleteBoxText =
    deleteBox.parentElement.querySelector(".form-check-label");
  delete storageObject[deleteBoxText.textContent.trim()];
  listTodo.removeChild(deleteBox.closest("li"));
  storageEnable();
});

const storageEnable = function () {
  localStorage.setItem("todolist", JSON.stringify(storageObject));
};

const init = function () {};
