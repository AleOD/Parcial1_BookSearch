var contact = {
  nombre: "",
  mensaje: "",
  email: ""
};

var contactJson;



function grabContact() {
  var nombreElement = document.getElementById("nombre");
  var mensajeElement = document.getElementById("mensaje");
  var emailElement = document.getElementById("email");

  contact.nombre = nombreElement.value;
  contact.mensaje = mensajeElement.value;
  contact.email = emailElement.value;

  //console.log(contact);
  contactJson = JSON.stringify(contact);
  console.log(contactJson);

const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([contactJson], {
    type: "text/plain"
  }));
  a.setAttribute("download", "data.txt");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

}