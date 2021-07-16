let dumpee;
let dumpZone;

function ulDragStart(e) {
  dumpee = parseInt(e.target.id, 10);
}

function ulDragOver(e) {
  e.preventDefault();
  dumpZone = parseInt(e.target.id, 10);
}

function ulDrop(arr) {
  const dumpObj = arr[dumpee];
  // const dumpZoneObj = arr[dumpZone];
  arr.splice(dumpee, 1);
  arr.splice(dumpZone, 0, dumpObj);
}

export {
  ulDragStart,
  ulDragOver,
  ulDrop,
};