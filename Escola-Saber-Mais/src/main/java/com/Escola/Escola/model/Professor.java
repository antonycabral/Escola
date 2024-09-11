package com.Escola.Escola.model;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="professor")

public class Professor {

    @Id
    @GeneratedValue (strategy=GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String senha;
    private String disciplina;

}
