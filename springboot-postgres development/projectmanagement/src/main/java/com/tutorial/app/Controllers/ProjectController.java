package com.tutorial.app.Controllers;

import com.tutorial.app.Models.Project;
import com.tutorial.app.Services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ProjectController {

    @Autowired
    ProjectService projectService;

    @GetMapping("/projects")
    private List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @PostMapping("/projects")
    private Project addProject(@RequestBody Project project) {
        return projectService.addProject(project);
    }
}
