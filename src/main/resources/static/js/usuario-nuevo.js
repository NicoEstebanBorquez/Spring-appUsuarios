
async function nuevoUsuario() {

    let datos = {};
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.telefono = document.getElementById('txtTelefono').value;
    datos.password = document.getElementById('txtPassword').value;

  const request = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  //Mensaje de confirmación y redirección a Login.html
  alert("Usuario guardado correctamente.");
  window.location.href = 'usuarios.html';
}
