package com.tutorial.app.Dto;

public class TicketReqDto {
    private long id;
    private String name;
    private String description;
    private String type;
    private long projectId;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long project_id) {
        this.projectId = project_id;
    }
}
