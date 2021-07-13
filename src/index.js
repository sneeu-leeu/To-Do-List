import _ from 'lodash';
import './style.css';

// This holds the to do list items
let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    index: Date.now(),
  };

  todoItems.push(todo);
  console.log(todoItems);
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
    todoItems.todo.idex ++
  }
});