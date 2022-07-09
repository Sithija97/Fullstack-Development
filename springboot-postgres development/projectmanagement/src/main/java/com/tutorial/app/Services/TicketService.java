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

    public Ticket updateTicket(long ticketId, Ticket _ticket) {
        Optional<Ticket> ticket = ticketRepository.findById(ticketId);
        if(ticket.isPresent()){
            Ticket ticketData = ticket.get();
            ticketData.setName(_ticket.getName());
            ticketData.setDescription(_ticket.getDescription());
            ticketData.setType(_ticket.getType());
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

}
