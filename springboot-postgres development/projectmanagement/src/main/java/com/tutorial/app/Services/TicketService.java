package com.tutorial.app.Services;

import com.tutorial.app.Dto.TicketReqDto;
import com.tutorial.app.Models.Project;
import com.tutorial.app.Models.Ticket;
import com.tutorial.app.Repositories.ProjectRepository;
import com.tutorial.app.Repositories.TicketRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TicketService {

    @Autowired
    TicketRepository ticketRepository;
    @Autowired
    ProjectRepository projectRepository;
    public List<Ticket> getAllTickets() {
        List<Ticket> tickets = new ArrayList<Ticket>(ticketRepository.findAll());
        return tickets;
    }

    public Ticket getTicketById(long ticketId) {
        Ticket ticket = ticketRepository.getById(ticketId);
        return ticket;
    }

    public Ticket addTicket(@NotNull TicketReqDto ticketReqDto) {
        Project project = projectRepository.findById(ticketReqDto.getProjectId()).get();
        System.out.println("project :"+project.getName());
        Ticket ticket = new Ticket();
        ticket.setName(ticketReqDto.getName());
        ticket.setDescription(ticketReqDto.getDescription());
        ticket.setType(ticketReqDto.getType());
        ticket.setProject(project);
        return ticketRepository.save(ticket);

    }

    public Ticket updateTicket(long ticketId, TicketReqDto ticketReqDto) {
        Optional<Ticket> ticket = ticketRepository.findById(ticketId);
        Project project = projectRepository.findById(ticketReqDto.getProjectId()).get();
        Ticket ticketData = new Ticket();
        if (ticket.isPresent()) {
            ticketData = ticket.get();
            ticketData.setName(ticketReqDto.getName());
            ticketData.setDescription(ticketReqDto.getDescription());
            ticketData.setType(ticketReqDto.getType());
            ticketData.setProject(project);
        }
        return ticketRepository.save(ticketData);
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

    public String deleteAllTickets() {
        ticketRepository.deleteAll();
        return "All tickets deleted !";
    }
}
