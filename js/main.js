'use strict';

import App from './class/App.js';
import Todo from './class/Todo.js';
import UI from './class/UI.js';

//console.log('main.js');

const app = new App();
const t1 = new Todo('Buy milk');

app.addTodo(new Todo('Buy milk'));
app.addTodo(new Todo('Read a book'));
app.addTodo(new Todo('Run Run Run'));

// Event Listeners

UI.addTodoBtnEl.addEventListener('click', () => {
    UI.makeNewTodo(app);
});

UI.mainListEl.addEventListener('click', (event) => {
    const elWePressedOn = event.target;
    if (elWePressedOn.tagName === 'BUTTON' || elWePressedOn.tagName === 'I') {
        const liId =
            elWePressedOn.tagName === 'I' ?
            elWePressedOn.parentElement.parentElement.dataset.id :
            elWePressedOn.parentElement.dataset.id;
        UI.delete(app, liId);
    }

    if (
        elWePressedOn.tagName === 'LI' ||
        (elWePressedOn.className.includes('toggle-icon') &&
            elWePressedOn.tagName === 'I')
    ) {
        const liId =
            elWePressedOn.tagName === 'LI' ?
            elWePressedOn.dataset.id :
            elWePressedOn.parentElement.dataset.id;
        app.toggleDone(liId);
    }
});