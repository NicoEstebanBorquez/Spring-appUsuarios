package com.nicoesteban.appusuarios.dao;

import com.nicoesteban.appusuarios.models.Oficina;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class OficinaDaoImpl implements OficinaDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Oficina> getOficinas() {
        String query = "FROM Oficina";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminarOficina(Long id) {
        Oficina oficina = entityManager.find(Oficina.class, id);
        entityManager.remove(oficina);
    }
}
