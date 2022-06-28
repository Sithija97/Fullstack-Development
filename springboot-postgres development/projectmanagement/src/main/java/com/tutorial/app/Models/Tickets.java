package com.tutorial.app.Models;

import javax.persistence.*;

@Entity
@Table(name = "tickets")
public class Tickets {
    /*
     id
     name
     description
     type
     project id
    */

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name="project_id")
    private long projectId;
}
