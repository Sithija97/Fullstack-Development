import React, { useEffect, useState } from "react";
import TicketService from "../services/TicketService";

import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const loadAllTickets = () => {
    TicketService.getAll()
      .then((data) => setTickets(data))
      .catch((e) => console.log("Error: ", e));
  };

  useEffect(() => {
    loadAllTickets();
  }, []);
  return (
    <Container>
      <h3>Tickets</h3>
      <Container maxWidth="sm">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Project</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets &&
                tickets.map((ticket, index) => (
                  <TableRow key={index}>
                    <TableCell>{ticket.name}</TableCell>
                    <TableCell>{ticket.description}</TableCell>
                    <TableCell>{ticket.type}</TableCell>
                    <TableCell>{ticket.project.name}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  );
};

export default TicketList;
