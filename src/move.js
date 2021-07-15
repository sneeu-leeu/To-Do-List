function taskDrag(e) {
  e.dataTransfer.setData('elemntid', e.target.id);
}

function ulDragEnter(e) {
  if (e.target.classList.contains('dropzone')) {
    e.target.classList.add('highlight');
  }
}

function ulDragLeave(e) {
  if (e.target.classList.contains('dropzone')) {
    e.target.classList.remove('highlight');
  }
}

function ulDragOver(e) {
  e.preventDefault();
}

function taskDrop(e) {
  if (e.target.classList.contains('dropzone')) {
    e.target.classList.remove('highlight');
  }

}

module.exports = { taskDrag, ulDragEnter, ulDragLeave, ulDragOver, taskDrop };