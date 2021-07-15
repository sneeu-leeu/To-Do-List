/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */

import _, { each, replace } from 'lodash';
import './style.css';
import { dragStart, dragOver, drop } from './move.js';
import changeStatus from './status.js';

const mainList = document.getElementById('js-todo-list');

let todoItems = [{
  text: 'Finish Project',
  checked: false,
  index: 0,
},
{
  text: 'Swim with Sharks',
  checked: false,
  index: 1,
}];

function dropzoneSet() {
  const ul = document.getElementById('js-todo-list');
  ul.addEventListener(dragenter, (e) => { ulDragEnter(e), false; });
  ul.addEventListener(dragleave, (e) => {ulDragLeave(e), false});
  ul.addEventListener(dragover, (e) => {ulDragOver(e), false});
  ul.addEventListener(drop, (e) => {itemDrop(e), this});
}

function renderTodo(todo) {
  const list = document.querySelector('.js-todo-list');
  const item = document.querySelector(`[data-key='${todo.index}']`);

  const isChecked = todo.checked ? 'done' : '';
  const node = document.createElement('li');
  node.setAttribute('class', `todo-item ${isChecked} border flex height pad-left drag`);
  node.setAttribute('data-key', todo.index);
  node.setAttribute('draggable', true);
  node.innerHTML = `
    <div class="left flex">
      <input class="check" id="${todo.index}" type="checkbox"/>
      <label for="${todo.index}" class="tick js-tick">${todo.text}</label>
    </div>
    <div class="right flex">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v" class="svg-inline--fa move move-js-todo fa-ellipsis-v fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg>
    </div>
  `;
  node.addEventListener('dragStart', (e) => { taskDrag(e), false; });
  list.appendChild(node);
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    index: todoItems.length,
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

window.addEventListener('load', () => {
  todoItems.forEach((todo) => {
    renderTodo(todo);
    const boxSelect = document.getElementById(todo.index);
    boxSelect.onchange = () => { changeStatus(todoItems, todo.index); };
  });
});

if (localStorage.getItem('tasks')) {
  todoItems = JSON.parse(localStorage.getItem('tasks'));
} else {
  localStorage.setItem('tasks', JSON.stringify(todoItems));
}
