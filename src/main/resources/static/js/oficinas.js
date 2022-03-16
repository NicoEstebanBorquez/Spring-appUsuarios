// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarOficinas();
  $('#dataTable').DataTable();
});

async function cargarOficinas() {
  const request = await fetch('api/oficinas', {
    method: 'GET',
    headers: {
    'Accept' : 'application/json',
    'Content-Type': 'application/json'//,
    //'Authorization': localStorage.token
    }
  });
  const oficinas = await request.json();

  let listadoHTML = '';

  for(let oficina of oficinas){
    let botonEditar = '<a href="#" onclick="editarOficina('+oficina.id+')" class="btn btn-primary btn-icon-split btn-sm"><span class="icon text-white-50"> <i class="fas fa-edit"> </i></span><span class="text">Editar</span></a>';
    let botonEliminar = '<a href="#" onclick="eliminarOficina('+oficina.id+')" class="btn btn-danger btn-icon-split btn-sm"> <span class="icon text-white-50"> <i class="fas fa-trash"></i> </span> <span class="text">Eliminar</span></a>';

    let oficinaHTML = '<tr>'+
                        '<td>'+oficina.id+'</td>' +
                        '<td>'+oficina.denominacion+'</td>' +
                        '<td>'+oficina.direccion+'</td>' +
                        '<td>'+oficina.ciudad+'</td>' +
                        '<td>'+oficina.provincia+'</td>' +
                        '<td>'+oficina.pais+'</td>' +
                        '<td>'+botonEditar+' '+botonEliminar+' </td>' +
                       '</tr>';
    listadoHTML += oficinaHTML;
  }
  document.querySelector('#tabla-oficinas tbody').outerHTML = listadoHTML;
}

async function eliminarOficina(id){
    if(!confirm('¿Desea eliminar esta oficina?')){
        return
    }

    const request = await fetch('api/oficinas/' + id, {
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