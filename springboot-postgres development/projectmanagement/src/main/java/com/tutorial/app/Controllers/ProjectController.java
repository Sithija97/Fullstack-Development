package com.tutorial.app.Controllers;

import com.tutorial.app.Models.Project;
import com.tutorial.app.Services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ProjectController {

    @Autowired
    ProjectService projectService;

    @GetMapping("/projects")
    private List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/projects/{projectId}")
    private Project getProjectById(@PathVariable("projectId") long projectId) {return projectService.getProjectById(projectId);}

    @PostMapping("/projects")
    private Project addProject(@RequestBody Project project) {
        return projectService.addProject(project);
    }

    @PutMapping("/update/projects/{projectId}")
    private Project updateProject(@PathVariable("projectId") long projectId,  @RequestBody Project project) {
        return projectService.updateProject(projectId,project);
    }

    @DeleteMapping("/delete/project/{projectId}")
    private String deleteProject(@PathVariable("projectId") long projectId) {
        return projectService.deleteProject(projectId);
    }
}
