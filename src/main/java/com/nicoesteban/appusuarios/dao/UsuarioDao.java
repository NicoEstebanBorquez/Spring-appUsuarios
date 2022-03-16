package com.nicoesteban.appusuarios.dao;

import com.nicoesteban.appusuarios.models.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();
    void eliminarUsuario(Long id);
}
