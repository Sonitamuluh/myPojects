package com.myflights.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myflights.entity.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer>{
    List<Flight> findByOriginAndDestAndDepartureDate(String origin, String dest, String departureDate);
    
}
