package com.nicoesteban.appusuarios.dao;

import com.nicoesteban.appusuarios.models.Oficina;

import java.util.List;

public interface OficinaDao {

    List<Oficina> getOficinas();
    void eliminarOficina(Long id);
}
