'use strict';

export default class Todo {
    static todoCount = 0;

    constructor(newTitle) {
        this.id = `t_${++Todo.todoCount}`;
        this.title = newTitle;
        this.complete = false;
        this.timeStamp = new Date().toLocaleTimeString();
    }

    markDone() {
        this.done = true;
    }
}