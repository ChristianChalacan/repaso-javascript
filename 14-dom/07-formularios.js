let validate = (data) => {
  let error = {};
  if (!data.name) error.name = "el nombre es obligatorio";
  if (!data.lastname) error.lastname = "el apellido es obligatorio";
  return error;
};
const initialData = {
  name: "",
  lastname: "",
};

let render = ({ errors, data }) => {
  return `
    <form>
        <div>
            <label>Nombre</label>
            <input name="name" value="${data.name || ""}" />
            ${errors.name || ""}
        </div>
        <div>
            <label>Apellido</label>
            <input name="lastname"  value="${data.lastname || ""}"/>
            ${errors.lastname || ""}
        </div>
        <div>
        <button>Enviar</button>
        </div>
    </form>
    `;
};

let form = document.createElement("form");
form.innerHTML = render({ errors: {}, data: {} });
document.body.append(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Array.from(e.target.elements).reduce((acc, el) => {
    if (!el.name) return acc;
    acc[el.name] = el.value;
    return acc;
  }, {});
  const errors = validate(data);

  if (Object.keys(errors).length > 0) {
    let html = render({ errors, data });
    form.innerHTML = html;
    return;
  } else {
    let html = render({ errors: {}, data });
    form.innerHTML = html;
    return;
  }
});
