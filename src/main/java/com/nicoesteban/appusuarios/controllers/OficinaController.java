package com.nicoesteban.appusuarios.controllers;

import com.nicoesteban.appusuarios.dao.OficinaDao;
import com.nicoesteban.appusuarios.models.Oficina;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OficinaController {

    @Autowired
    private OficinaDao oficinaDao;

    @RequestMapping(value = "api/oficinas", method = RequestMethod.GET)
    public List<Oficina> getOficinas() {
        return oficinaDao.getOficinas();
    }

    @RequestMapping(value = "api/oficinas/{id}", method = RequestMethod.DELETE)
    public void eliminarOficina(@PathVariable Long id) {
        oficinaDao.eliminarOficina(id);
    }
}
