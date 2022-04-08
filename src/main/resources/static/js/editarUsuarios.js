$(document).ready(function () {
  let id = localStorage.getItem("idUsuarioEditar");
  cargarUsuario(id);
});

/*function cargarUsuario2() {

   let formulario = '<form class="user">' +
     '<div class="form-group row">' +
     '<div class="col-sm-2"> <input type="text" class="form-control form-control-user" id="txtId" placeholder="ID" value="un ID"> </div>' +
     '</div>' +
     '<div class="form-group row">' +
     '<div class="col-sm-4 mb-2 mb-sm-0"><input type="text" class="form-control form-control-user" id="txtNombre" placeholder="Nombre" value="un nombre"> </div>' +
     '<div class="col-sm-4"><input type="text" class="form-control form-control-user" id="txtApellido" placeholder="Apellido" value="un apellido"></div>' +
     '</div>' +
     '<a onClick="guardarUsuarioEditado()" href="#" class="btn btn-primary btn-user ">Guardar</a><hr>' +
     '</form>';

  document.querySelector('#formularioAqui').outerHTML = formulario;
}*/

async function cargarUsuario(id) {
  const request = await fetch('api/usuarios/' + id, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'//,
      //'Authorization': localStorage.token
    }
  });
  const usuario = await request.json();

   let formulario = '<form class="user">' +
     '<div class="form-group row">' +
     '<div class="col-sm-2"> <input type="text" class="form-control form-control-user" id="txtId" placeholder="ID" value="'+usuario.id+'"> </div>' +
     '</div>' +
     '<div class="form-group row">' +
     '<div class="col-sm-4 mb-2 mb-sm-0"><input type="text" class="form-control form-control-user" id="txtNombre" placeholder="Nombre" value="'+usuario.nombre+'"> </div>' +
     '<div class="col-sm-4"><input type="text" class="form-control form-control-user" id="txtApellido" placeholder="Apellido" value="'+usuario.apellido+'"></div>' +
     '</div>' +
     '<div class="form-group row">' +
     '<div class="col-sm-4 mb-3 mb-sm-0"><input type="email" class="form-control form-control-user" id="txtEmail" placeholder="Email" value="'+usuario.email+'"></div>' +
     '<div class="col-sm-2"><input type="text" class="form-control form-control-user" id="txtTelefono" placeholder="Teléfono" value="'+usuario.telefono+'"></div>' +
     '</div>' +
     '<div class="form-group row">' +
     '<div class="col-sm-2"> <input type="text" class="form-control form-control-user" id="txtPassword" placeholder="Password" value="'+usuario.password+'"> </div>' +
     '</div>' +
     '<a onClick="guardarUsuarioEditado()" href="#" class="btn btn-primary btn-user ">Guardar</a><hr>' +
     '</form>';

  document.querySelector('#formularioAqui').outerHTML = formulario;
}


async function guardarUsuarioEditado() {

  let datos = {};
  datos.id = localStorage.getItem("idUsuarioEditar");
  console.log("Id del usuario: " + localStorage.getItem("idUsuarioEditar"));
  datos.nombre = document.getElementById('txtNombre').value;
  datos.apellido = document.getElementById('txtApellido').value;
  datos.email = document.getElementById('txtEmail').value;
  datos.telefono = document.getElementById('txtTelefono').value;

  const request = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  //Mensaje de confirmación y redirección a Login.html
  alert("Usuario modificado correctamente.");
  window.location.href = 'usuarios.html';
}