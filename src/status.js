function changeStatus(arr, item) {
  const elemID = arr[item];
  if (elemID.checked) {
    elemID.checked = false;
    console.log(elemID.checked);
  } else {
    elemID.checked = true;
    console.log(elemID.checked);
  }
}

export default changeStatus;