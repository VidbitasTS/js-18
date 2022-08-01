import Todo from './Todo.js';
import App from './App.js';

export default class UI {
    static inputEl = document.getElementById('new-todo');
    static addTodoBtnEl = document.getElementById('add-todo');
    static mainListEl = document.getElementById('list-todo');

    static makeNewTodo(app) {
            // console.log('makeNewTodo ===');
            if (UI.inputEl.value === '') return;
            const value = UI.inputEl.value;
            app.addTodo(new Todo(value));
            UI.inputEl.value = '';
        }
        /**
         *
         * @param {Todo} todo
         */
    static createLi(todo) {
        const liEl = document.createElement('li');
        // pridedam <li data-id=5 >
        liEl.dataset.id = todo.id;
        liEl.className = todo.complete ? 'done-todo' : '';
        liEl.textContent = `${todo.title} created at ${todo.timeStamp} `;
        const buttonEl = document.createElement('button');
        buttonEl.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
        liEl.insertAdjacentHTML(
            'afterbegin',
            `<i class="fa fa-${
        todo.complete ? 'check-circle' : 'circle-thin'
      } toggle-icon" aria-hidden="true"></i> `
        );

        liEl.append(buttonEl);
        return liEl;
    }

    /**
     *
     * @param {App} app
     * @param {string} id
     */
    static delete(app, id) {
        //console.log('id ===', id);
        app.removeTodo(id);
    }

    /**
     *
     * @param {Todo[]} todoArr
     */
    static appendTodoList(todoArr) {
        UI.mainListEl.innerHTML = '';
        todoArr.forEach((todo) => {
            const singleTodoEl = UI.createLi(todo);
            UI.mainListEl.append(singleTodoEl);
        });
    }
}