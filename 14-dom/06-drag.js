let draggeredId;

function createDraggable() {
  let span = document.createElement("span");
  span.id = "hola-mundo";
  span.innerText = "arrastrable";
  span.draggable = true;
  span.ondragstart = (e) => {
    draggeredId = e.target.id;
  };
  return span;
}
function createDroppableArea() {
  let dropArea = document.createElement("div");
  dropArea.className = "drop";

  dropArea.ondragenter = (e) => {
    console.log("drag", e);
    e.target.style.background = "yellow";
  };
  dropArea.ondragleave = (e) => {
    e.target.style.background = "";
  };
  dropArea.ondragover = (e) => e.preventDefault();
  dropArea.ondrop = (e) => {
    console.log("Drop", e);
    e.target.append(document.getElementById(draggeredId));
  };
  return dropArea;
}

let draggable = createDraggable();
let dropArea1 = createDroppableArea();

document.body.append(dropArea1);
document.body.append(draggable);
