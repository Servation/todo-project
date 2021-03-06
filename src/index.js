import './style.css';
import { addToDoFromEl, clearInputs, currentObj, refreshLocalStorage, showAllTodo } from './ui';

(() => {

    const addButton = document.getElementById("submitButton");
    const buttonExitEl = document.getElementsByClassName("close");
    const titleInputEl = document.getElementById("title");
    const allLinkEl = document.getElementById("all");
    addButton.addEventListener("click", function () {
        addToDoFromEl(currentObj);
        showAllTodo();
        refreshLocalStorage();
    })
    buttonExitEl[0].addEventListener("click", function () {
        titleInputEl.style.backgroundColor = "white";
        clearInputs();
    })
    allLinkEl.addEventListener("click", showAllTodo);


    showAllTodo();
})();
