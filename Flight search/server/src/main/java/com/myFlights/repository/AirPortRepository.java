package com.myflights.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myflights.entity.Airport;

 @Repository
 public interface AirPortRepository extends JpaRepository<Airport, Integer> {
    Airport findByAirportCode(String airportCode);
    Airport findByAirportName(String longName);
}
