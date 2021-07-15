function changeStatus(arr, arg) {
  const elemID = arr[arg];
  if (elemID.checked) {
    elemID.checked = false;
  } else {
    elemID.checked = true;
  }
}

export default changeStatus;