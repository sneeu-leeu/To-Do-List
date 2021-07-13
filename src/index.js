/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const todoItems = [];

function renderTodo(todo) {
  const list = document.querySelector('.js-todo-list');

  const isChecked = todo.checked ? 'done' : '';
  const node = document.createElement('li');
  node.setAttribute('class', `todo-item ${isChecked} border flex height pad-left`);
  node.setAttribute('data-key', todo.index);
  node.innerHTML = `
    <div class="left flex">
      <input class="check" id="${todo.index}" type="checkbox"/>
      <label for="${todo.index}" class="tick js-tick"></label>
      <span>${todo.text}</span>
    </div>
    <div class="right flex">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v" class="svg-inline--fa move move-js-todo fa-ellipsis-v fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg>
    </div>
  `;

  list.append(node);
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    index: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});
