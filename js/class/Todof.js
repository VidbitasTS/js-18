export default class Todof {
    // savybe pridedama prie klases on ne prie klases objektu
    static todoCount = 0;
    static mainEl = document.body;

    constructor(newEl) {
        //   this.id = `t_${++ Todo.todoCount}`;
        this.id = `t_${++this.todoCount}`;
        this.title = newEl;
        this.complete = false;
        this.timeStamp = new Date().toLocaleTimeString();
    }

    toggleComplete() {
        this.complete = !this.complete;
        // this.timeStamp = new Date().toLocaleTimeString();
    }
}