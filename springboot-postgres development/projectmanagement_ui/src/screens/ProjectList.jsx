import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectService from "../services/ProjectService";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const loadAllProjects = () => {
    ProjectService.getAll()
      .then((data) => setProjects(data))
      .catch((e) => console.log("Error: ", e));
  };

  useEffect(() => {
    loadAllProjects();
  }, []);

  return (
    <Container>
      <div>
        <h3>Projects</h3>
        <Button variant="contained" size="small">
          Create
        </Button>
      </div>
      <Container maxWidth="sm">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Technologies</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects &&
                projects.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell>{project.name}</TableCell>
                    <TableCell>{project.description}</TableCell>
                    <TableCell>{project.techStack}</TableCell>
                    <TableCell>
                      <Link to={`/projects/${project.id}`}>
                        <Chip label="details"></Chip>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  );
};

export default ProjectList;
