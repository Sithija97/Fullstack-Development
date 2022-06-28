package com.tutorial.app.Models;

import javax.persistence.*;

@Entity
@Table(name = "projects")
public class Project {
    /*
     id
     name
     description
     tech_stack
     client id -> next feature
    */

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "tech_stack")
    private String techStack;

    public Project() {
    }

    public Project(String name, String description, String techStack) {
        this.name = name;
        this.description = description;
        this.techStack = techStack;
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

    public String getTechStack() {
        return techStack;
    }

    public void setTechStack(String techStack) {
        this.techStack = techStack;
    }
}
