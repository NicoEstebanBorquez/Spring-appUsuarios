package com.nicoesteban.appusuarios.controllers;

import com.nicoesteban.appusuarios.dao.UsuarioDao;
import com.nicoesteban.appusuarios.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class usuarioController {

    @Autowired
    private UsuarioDao usuarioDao;

    @RequestMapping(value = "api/usuarios", method = RequestMethod.POST)
    public void registrarUsuario(@RequestBody Usuario usuario) {
        usuarioDao.registrar(usuario);
    }

    @RequestMapping(value = "api/usuarios/{id}", method = RequestMethod.GET)
    public Usuario getUsuario(@PathVariable Long id) {
        return usuarioDao.obtenerUsuario(id);
    }

    @RequestMapping(value = "api/usuarios", method = RequestMethod.GET)
    public List<Usuario> getUsuarios() {
        return usuarioDao.getUsuarios();
    }

    @RequestMapping(value = "api/usuarios/{id}", method = RequestMethod.DELETE)
    public void eliminarUsuario(@PathVariable Long id) {
        usuarioDao.eliminarUsuario(id);
    }
}
