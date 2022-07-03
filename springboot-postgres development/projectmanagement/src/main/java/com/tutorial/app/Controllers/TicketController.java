package com.tutorial.app.Controllers;

import com.tutorial.app.Models.Ticket;
import com.tutorial.app.Services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TicketController {

    @Autowired
    TicketService ticketService;

    @GetMapping("/tickets")
    private List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @GetMapping("/tickets/{ticketId}")
    private Ticket getTicketById(@PathVariable("ticketId") long ticketId) {
        return ticketService.getTicketById(ticketId);
    }

    @GetMapping("/tickets/{projectId}")
    private List<Ticket> getTicketsByProject(@PathVariable("projectId") long projectId){
        return ticketService.getTicketsByProject(projectId);
    }

    @PostMapping("/tickets")
    private Ticket addTicket(@RequestBody Ticket ticket) {
        return ticketService.addTicket(ticket);
    }

    @PutMapping("/update/tickets/{ticketId}")
    private Ticket updateTicket(@PathVariable("ticketId") long ticketId, @RequestBody Ticket _ticket) {
        return ticketService.updateTicket(ticketId,_ticket);
    }

    @DeleteMapping("/delete/{ticketId}")
    private String deleteTicket(@PathVariable("ticketId") long ticketId){
        return ticketService.deleteTicket(ticketId);
    }

}
