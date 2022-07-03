package com.tutorial.app.Services;

import com.tutorial.app.Models.Project;
import com.tutorial.app.Models.Ticket;
import com.tutorial.app.Repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class TicketService {

    @Autowired
    TicketRepository ticketRepository;
    public List<Ticket> getAllTickets() {
        List<Ticket> tickets = new ArrayList<Ticket>(ticketRepository.findAll());
        return tickets;
    }

    public Ticket getTicketById(long ticketId) {
        Ticket ticket = ticketRepository.getById(ticketId);
        return ticket;
    }

    public Ticket addTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public Ticket updateTicket(long ticketId, Ticket _ticket) {
        Optional<Ticket> ticket = ticketRepository.findById(ticketId);
        if(ticket.isPresent()){
            Ticket ticketData = ticket.get();
            ticketData.setName(_ticket.getName());
            ticketData.setDescription(_ticket.getDescription());
            ticketData.setType(_ticket.getType());
            ticketData.setProjectId(_ticket.getProjectId());
        }
        return _ticket;
    }

    public String deleteTicket(long ticketId) {
        Optional<Ticket> ticket = ticketRepository.findById(ticketId);
        if(ticket.isPresent()) {
            ticketRepository.deleteById(ticketId);
            return (ticket.get().getName() + " is deleted successfully");
        } else {
            return "Project not found with the given ID";
        }
    }

    public List<Ticket> getTicketsByProject(long projectId) {
        List<Ticket> filteredTickets = ticketRepository.findAll().stream()
                .filter(ticket -> ticket.getProjectId() == projectId)
                .collect(Collectors.toList());
        return filteredTickets;
    }
}
