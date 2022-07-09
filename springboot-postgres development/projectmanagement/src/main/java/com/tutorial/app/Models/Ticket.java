package com.tutorial.app.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "tickets")
public class Ticket {
    /*
     id
     name
     description
     type
     project id
    */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name="type")
    private String type;


    @ManyToOne()
    @JoinColumn(name = "project_id")
    private Project project;

    public Ticket() {
    }
    public Ticket(String name, String description, String type,  Project project) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.project = project;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
