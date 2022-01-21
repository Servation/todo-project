import './style.css';
import { addToDoFromEl, showAllTodo } from './ui';

(() => {
    const addButton = document.getElementById("submitButton");
    const buttonExitEl = document.getElementsByClassName("close");
    const titleInputEl = document.getElementById("title");
    const allLinkEl = document.getElementById("all");
    addButton.addEventListener("click", function () {
        addToDoFromEl();
        showAllTodo();
    })
    buttonExitEl[0].addEventListener("click", function () {
        titleInputEl.style.backgroundColor = "white";
    })
    allLinkEl.addEventListener("click", showAllTodo);


    showAllTodo();
})();
