class Todo {
    constructor(title, description, dueDate, priority, project, todoID, complete = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.todoID = todoID;
        this.complete = complete;
    }

    toggleComplete() {
        if (this.complete) {
            this.complete = false;
        } else {
            this.complete = true;
        }
    }
}

export default Todo;