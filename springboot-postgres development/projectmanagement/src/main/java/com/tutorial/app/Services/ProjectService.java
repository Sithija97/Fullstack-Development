package com.tutorial.app.Services;

import com.tutorial.app.Models.Project;
import com.tutorial.app.Repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    public List<Project> getAllProjects() {
        List<Project> projects = new ArrayList<Project>(projectRepository.findAll());
        return projects;
    }

    public Project getProjectById(long projectId) {
        Project project = projectRepository.getById(projectId);
        return project;
    }

    public Project addProject(Project project) {
        return projectRepository.save(project);
    }

    public Project updateProject(long projectId, Project _project) {
        Optional<Project> project = projectRepository.findById(projectId);
        if(project.isPresent()) {
            Project projectData = project.get();
            projectData.setName(_project.getName());
            projectData.setDescription(_project.getDescription());
            projectData.setTechStack(_project.getTechStack());
            return projectRepository.save(projectData);
        }
        return _project;
    }

    public String deleteProject(long projectId) {
        Optional<Project> project = projectRepository.findById(projectId);
        if(project.isPresent()) {
            projectRepository.deleteById(projectId);
            return (project.get().getName() + " is deleted successfully");
        } else {
            return "Project not found with the given ID";
        }
    }
}
