import { Button, Container, Paper, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';





export default function LandingView (props) {

    const [travelDate, setTravelDate] = useState(new Date());
    const [returnDare, setReturnDate] = useState(new Date());
    return (
        <div>
            <Stack direction='column'justifyContent='center'>
            <Container maxWidth="sm">
           <Paper elevation={6}>

                    <h3>Enter Search Criteria to fing flighs</h3>
                    <div className='inner-search-form'> 
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="oneWay"
                            name="radio-buttons-group"
                        >
                        <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
                        <FormControlLabel value="roundTrip" control={<Radio />} label="Round Trip" />
                       </RadioGroup>
                    </FormControl>

                <div>
                    <TextField
                        label="From"
                        variant="outlined"
                      />
                      &nbsp;
                    <TextField
                        label="To"
                        variant="outlined"
                     />
                    </div>
                    <br/>
                    <div>
                        <Stack direction="row">
                    <TextField
                        onChange={(even) =>setTravelDate(even.target.value)}
                        label="Date"
                        variant="outlined"
                        type="date"
                        value={travelDate}
                      />
                      &nbsp;
                    <TextField
                        
                        lab onChange={(even) =>setReturnDate(even.target.value)}el="Return Date"
                        label="Return date"
                        variant="outlined"
                        type="date"
                        value="returnDate"
                      />
                      &nbsp;
                    <TextField
                        label="# Travellers"
                        variant="outlined"     
                      />
                      </Stack>
                    </div>
                    <br/>
                    <div>

                        <Button size='large' variant = "contained" color='success'>Search</Button>
                    </div>

                    </div>
                    </Paper>
                    </Container>
                
            <div>
                <Stack direction='column'justifyContent='center'>
                 <Container maxWidth="XL">
                <Paper elevation={6} >
                    <h3>Recommendations</h3>
                    <div style = {{padding: '10px'}}>

                    <Stack direction='row'justifyContent='center' spacing={2}> 
                         <Box
                            sx={{
                                width: 150,
                                height: 150,
                                border: 'solid 2px orange' 
            
                            }}
                            />
                
                         <Box
                            sx={{
                                width: 150,
                                height: 150,
                                border: 'solid 2px orange'  
            
                            }}
                            />  

                         <Box
                            sx={{
                                width: 150,
                                height: 150,
                                border: 'solid 2px orange'  
            
                            }}
                            />  

                         <Box
                            sx={{
                                width: 150,
                                height: 150,
                                border: 'solid 2px orange'  
            
                            }}
                            />  
                            
                        </Stack>   
                    </div>
                    </Paper>
                    </Container>
                </Stack>

                </div>

            </Stack>

        </div>
       
    )
} 






