let form = document.createElement("form");
let input = document.createElement("input");
let btn = document.createElement("button");
let containerCaracters = document.createElement("div");
let draggeredId;
let draggeredValue;

function createCaracter() {
  let span = document.createElement("span");
  span.id = Math.random().toString();
  span.innerText = input.value;
  span.draggable = true;
  span.style.margin = "10px";
  span.style.padding = "5px";
  span.style.height = "10px";
  span.style.backgroundColor = "yellow";
  span.ondragstart = (e) => {
    draggeredId = e.target.id;
    draggeredValue = e.target.innerText;
  };
  return span;
}

function createDroppableAreaPares() {
  let dropArea = document.getElementById("par");

  dropArea.ondragenter = (e) => {
    e.target.style.background = "yellow";
  };
  dropArea.ondragleave = (e) => {
    e.target.style.background = "";
  };
  dropArea.ondragover = (e) => {
    e.preventDefault();
  };
  dropArea.ondragend = (e) => {
    e.target.style.background = "";
  };
  dropArea.ondrop = (e) => {
    if (!(draggeredValue % 2) && draggeredValue > 0) {
      e.target.append(document.getElementById(draggeredId));
    }
    e.target.style.background = "";
  };
  return dropArea;
}

function createDroppableAreaImpares() {
  let dropArea = document.getElementById("impar");

  dropArea.ondragenter = (e) => {
    e.target.style.background = "yellow";
  };
  dropArea.ondragleave = (e) => {
    e.target.style.background = "";
  };
  dropArea.ondragover = (e) => {
    e.preventDefault();
  };
  dropArea.ondragend = (e) => {
    e.target.style.background = "";
  };
  dropArea.ondrop = (e) => {
    if (draggeredValue % 2 && draggeredValue > 0) {
      e.target.append(document.getElementById(draggeredId));
    }
    e.target.style.background = "";
  };
  return dropArea;
}

function createDroppableAreaNegativos() {
  let dropArea = document.getElementById("negativo");

  dropArea.ondragenter = (e) => {
    e.target.style.background = "yellow";
  };
  dropArea.ondragleave = (e) => {
    e.target.style.background = "";
  };
  dropArea.ondragover = (e) => {
    e.preventDefault();
  };
  dropArea.ondragend = (e) => {
    e.target.style.background = "";
  };
  dropArea.ondrop = (e) => {
    if (draggeredValue < 0) {
      e.target.append(document.getElementById(draggeredId));
    }
    e.target.style.background = "";
  };
  return dropArea;
}

createDroppableAreaPares();
createDroppableAreaImpares();
createDroppableAreaNegativos();

input.type = "number";
input.id = "input";

btn.innerText = "Agregar";
btn.id = "btn";
btn.onclick = (e) => {
  e.preventDefault();
  let span = createCaracter();
  containerCaracters.append(span);
  input.value = "";
};

containerCaracters.style.backgroundColor = "#E6ED78";
containerCaracters.style.width = "100%";
//containerCaracters.style.height = "150px";
containerCaracters.style.overflowY = "auto";
containerCaracters.style.minHeight = "40px";
containerCaracters.style.maxHeight = "150px";
containerCaracters.style.display = "flex";
containerCaracters.style.flexWrap = "wrap";

form.append(input);
form.append(btn);

document.body.prepend(containerCaracters);
document.body.prepend(form);
