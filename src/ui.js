import Todo from "./todo";

const todoArr = [];
let TodoCounter = 0;

export function addToDoFromEl() {
    console.log("working");
    const titleEl = document.getElementById("title");
    const closeEl = document.getElementsByClassName("close");
    let close = closeEl[0];
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    let project = document.getElementById("project").value;
    let title = titleEl.value;
    let valid = validTitle(title);
    if (valid) {
        addTodoToArray(title, description, dueDate, priority, project, TodoCounter);
        close.click();
        console.log(todoArr);
        TodoCounter++;
        titleEl.style.backgroundColor = "white";
    } else {
        titleEl.style.backgroundColor = "pink";
    }
}

function validTitle(title) {
    if (title === "") {
        return false
    };
    return true;
}

function addTodoToArray(title, descrip, date, prio, proj, count) {
    let todoObj = new Todo(title, descrip, date, prio, proj, count);
    todoArr.push(todoObj);
}

function createSingleTodoContent(title, desc, date, prio, proj, count) {
    let todoContentEl = document.createElement("div");
    todoContentEl.setAttribute("id", String(count));
    todoContentEl.setAttribute("class", "singleTodo")
    let titleEl = document.createElement("h1");
    titleEl.textContent = title;
    titleEl.setAttribute("class", "todoTitle");
    todoContentEl.appendChild(titleEl);
    if (!(desc == "")) {
        let descEl = document.createElement("p");
        descEl.textContent = `Description: ${desc}`;
        descEl.setAttribute("class", "todoDescription");
        todoContentEl.appendChild(descEl);
    }
    if (!(date == "")) {
        let dateEl = document.createElement("div");
        dateEl.textContent = `Due: ${date}`;
        dateEl.setAttribute("class", "todoDueDate");
        todoContentEl.appendChild(dateEl);
    }
    let prioEl = document.createElement("div");
    prioEl.textContent = `Priority: ${prio}`;
    prioEl.setAttribute("class", "todoPrio");
    todoContentEl.appendChild(prioEl);
    if (!(proj == "")) {
        let projEl = document.createElement("div");
        projEl.textContent = `Project: ${proj}`;
        projEl.setAttribute("class", "todoProjec");
        todoContentEl.appendChild(projEl);
    }

    return todoContentEl;
}

export function showAllTodo() {
    const mainEl = document.getElementById("main")
    while (mainEl.firstChild) {
        mainEl.removeChild(mainEl.lastChild);
    }
    todoArr.forEach(element => {
        let title = element.title;
        let description = element.description;
        let dueDate = element.dueDate;
        let prio = element.priority;
        let project = element.project;
        mainEl.appendChild(createSingleTodoContent(title, description, dueDate, prio, project));
    });

}

(() => {
    addTodoToArray("Todo project", "", "", "Medium", "Odin Project", 1290129)
})()
