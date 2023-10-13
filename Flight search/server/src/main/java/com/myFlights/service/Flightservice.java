package com.myflights.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.myflights.entity.Flight;
import com.myflights.repository.FlightRepository;

@Service
public class Flightservice {

    private FlightRepository repo;

    public List<Flight> findFlightsByDate(String origin, String dest, String date){
        return repo.findByOriginAndDestAndDepartureDate(origin, dest,date);
    }
    
}
