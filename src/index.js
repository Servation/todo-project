import './style.css';
import { addToDoFromEl, showAllTodo } from './ui';

(() => {
    const addButton = document.getElementById("submitButton");
    addButton.addEventListener("click", function () {
        addToDoFromEl();
        showAllTodo();
    })

    const buttonExitEl = document.getElementsByClassName("close");
    const titleInputEl = document.getElementById("title");
    buttonExitEl[0].addEventListener("click", function () {
        titleInputEl.style.backgroundColor = "white";
    })

    showAllTodo();
})();
