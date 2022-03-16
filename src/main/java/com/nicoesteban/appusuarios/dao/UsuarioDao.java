package com.nicoesteban.appusuarios.dao;

import com.nicoesteban.appusuarios.models.Usuario;

import java.util.List;

public interface UsuarioDao {

    Usuario obtenerUsuario(Long id);
    List<Usuario> getUsuarios();
    void eliminarUsuario(Long id);
    void registrar(Usuario usuario);
    Usuario obtenerUsuarioPorCredenciales(Usuario usuario);
}
