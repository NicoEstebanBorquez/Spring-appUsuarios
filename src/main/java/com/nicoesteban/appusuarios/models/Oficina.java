package com.nicoesteban.appusuarios.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "oficinas")
public class Oficina {

    @Getter
    @Setter
    @Column(name = "id_oficina")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Getter
    @Setter
    @Column(name = "denominacion")
    private String denominacion;

    @Getter
    @Setter
    @Column(name = "direccio")
    private String direccion;

    @Getter
    @Setter
    @Column(name = "ciudad")
    private String ciudad;

    @Getter
    @Setter
    @Column(name = "provincia")
    private String provincia;

    @Getter
    @Setter
    @Column(name = "pais")
    private String pais;


}
