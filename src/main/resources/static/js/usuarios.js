// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#dataTable').DataTable();
});

function irNuevoUsuario(){
  //Redirección:
  window.location.href = 'nuevo-usuario.html';
}


async function cargarUsuarios() {
  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: {
    'Accept' : 'application/json',
    'Content-Type': 'application/json'//,
    //'Authorization': localStorage.token
    }
  });
  const usuarios = await request.json();

  let listadoHTML = '';

  for(let usuario of usuarios){
    let botonEditar = '<a href="#" onclick="irEditarUsuario('+usuario.id+')" class="btn btn-primary btn-icon-split btn-sm"><span class="icon text-white-50"> <i class="fas fa-edit"> </i></span><span class="text">Editar</span></a>';
    let botonEliminar = '<a href="#" onclick="eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-icon-split btn-sm"> <span class="icon text-white-50"> <i class="fas fa-trash"></i> </span> <span class="text">Eliminar</span></a>';

    let telefonoTxt = usuario.telefono == null ? '-' : usuario.telefono;

    let usuarioHTML = '<tr>'+
                        '<td>'+usuario.id+'</td>' +
                        '<td>'+usuario.nombre+' '+usuario.apellido+'</td>' +
                        '<td>'+usuario.email+'</td>' +
                        '<td>'+telefonoTxt+'</td>' +
                        '<td>'+botonEditar+' '+botonEliminar+'</td>' +
                       '</tr>';
    listadoHTML += usuarioHTML;
  }
  document.querySelector('#tabla-usuarios tbody').outerHTML = listadoHTML;
}

async function irEditarUsuario(id){
    const request = await fetch('api/usuarios/' + id, {
        method: 'GET',
        headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'//,
        //'Authorization': localStorage.token
        }
      });

      const usuario = await request.json();
      //localStorage.setItem("usuarioAEditar", JSON.stringify(usuarioEditar));
      //Almacena en el localStorage el ID del usuario a editar:
      localStorage.setItem("idUsuarioEditar", JSON.stringify(usuario.id));

      window.location.href = 'editar-usuarios.html';
}

async function eliminarUsuario(id){
    if(!confirm('¿Desea eliminar este usuario?')){
        return
    }

    const request = await fetch('api/usuarios/' + id, {
        method: 'DELETE',
        headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'//,
        //'Authorization': localStorage.token
        }
      });

      //Recargar página
      location.reload();
}

