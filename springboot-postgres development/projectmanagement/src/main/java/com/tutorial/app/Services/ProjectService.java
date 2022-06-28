package com.tutorial.app.Services;

import com.tutorial.app.Models.Project;
import com.tutorial.app.Repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    public List<Project> getAllProjects() {
        List<Project> projects = new ArrayList<Project>(projectRepository.findAll());
        return projects;
    }

    public Project addProject(Project project) {
        return projectRepository.save(project);
    }
}
