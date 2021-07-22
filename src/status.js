/* eslint-disable import/no-cycle */
import storeItems from './index.js';

function changeStatus(arr, item) {
  const elemID = arr[item];
  if (elemID.checked) {
    elemID.checked = false;
    console.log(elemID.checked);
    storeItems();
  } else {
    elemID.checked = true;
    console.log(elemID.checked);
    storeItems();
  }
}

export default changeStatus;