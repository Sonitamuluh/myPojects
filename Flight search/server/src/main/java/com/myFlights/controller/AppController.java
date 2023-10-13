package com.myflights.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.myflights.entity.Flight;
import com.myflights.response.ObjectResponse;
import com.myflights.service.Flightservice;

@RestController

public class AppController {

    @Autowired
    private Flightservice flightService;
    
    @GetMapping("/find-flights")
    public ResponseEntity<ObjectResponse>findFlights(@RequestParam() String origin, @RequestParam() String dest, @RequestParam() String date)  {
      
        ObjectResponse resp = new ObjectResponse();
    try{
        List<Flight> flights = flightService.findFlightsByDate(origin, dest, date);
        resp.setResponseData(flights);
        resp.setStatusCode(HttpStatus.OK);

        //return flights;

    } catch (Exception ex){
         resp.setStatusCode(HttpStatus.BAD_REQUEST);
        ex.printStackTrace();
    }
     return new ResponseEntity<ObjectResponse>(resp, resp.getStatusCode()); 
    }
    
}
