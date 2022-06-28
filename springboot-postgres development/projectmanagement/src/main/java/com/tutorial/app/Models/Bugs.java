package com.tutorial.app.Models;

import javax.persistence.*;

@Entity
@Table(name = "bugs")
public class Bugs {
    /*
     id
     name
     description
     ticket id
    */

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "ticket_id")
    private long ticketId;
}
