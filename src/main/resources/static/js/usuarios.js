// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#dataTable').DataTable();
});

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
    let botonEditar = '<a href="#" onclick="editarUsuario('+usuario.id+')" class="btn btn-primary btn-icon-split btn-sm"><span class="icon text-white-50"> <i class="fas fa-edit"> </i></span><span class="text">Editar</span></a>';
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

async function editarUsuario(id){

    const request = await fetch('api/usuarios/' + id, {
        method: 'GET',
        headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'//,
        //'Authorization': localStorage.token
        }
      });

      const usuarioEditar = await request.text();
      localStorage.setItem("usuarioAEditar", JSON.stringify(usuarioEditar));

      /*
      "{
      \"id\":7,
      \"nombre\":\"Fernando\",
      \"apellido\":\"Gómez\",
      \"email\":\"fernando.gomez@mail.com\",
      \"telefono\":null,
      \"password\":\"$argon2id$v=19$m=1024,t=1,p=1$ztpFrLOGb/Kk3muUr66nbQ$k06Jtu/NC33dteSK6VnxuRPPmu3mS0QmC4CAIsg5muA
      \"}"
      */

      window.location.href = 'editar-usuarios.html';
}