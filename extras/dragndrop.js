let form = document.createElement("form");
let input = document.createElement("input");
let btn = document.createElement("button");
let containerCaracters = document.createElement("div");
let draggeredId;

input.type = "text";
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
containerCaracters.style.height = "150px";
//containerCaracters.style.overflow = "visible";
containerCaracters.style.display = "flex";

form.append(input);
form.append(btn);
document.body.append(form);
document.body.append(containerCaracters);
function createCaracter() {
  let span = document.createElement("span");
  span.id = Math.random().toString();
  span.innerText = input.value;
  span.draggable = true;
  span.style.margin = "10px";
  span.style.padding = "5px";
  span.ondragstart = (e) => {
    draggeredId = e.target.id;
  };
  return span;
}
