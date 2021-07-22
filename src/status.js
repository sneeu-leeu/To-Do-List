/* eslint-disable import/no-cycle */

function changeStatus(arr, item) {
  const elemID = arr[item];
  if (elemID.checked) {
    elemID.checked = false;
  } else {
    elemID.checked = true;
  }
}

export default changeStatus;