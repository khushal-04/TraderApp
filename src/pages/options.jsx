import {Box, Container, Grid2,Button,Paper} from "@mui/material"
import PrimarySearchAppBar from "../components/appbar"
import "../App.css"
import React from 'react';
import TraderLeaderboard from '../components/LeaderBoard';
import TopThree from "../components/TopThree"
import TraderMatrix from "../components/TraderMatrix"
import Tabs from "../components/Tabs"
import { useTraderData } from '../Context/Context';
import { useState,useEffect } from "react"
import bg from "../assets/image.png"

export default function Options(){
    const traders = useTraderData();
    const [options, setOptions] = useState([]);
    const [stocks,Setstocks]=useState([]);
  
      useEffect(() => {
        if (traders && traders.length > 0) {
          const optionsTraders = traders.filter(item => item.trophies === "Options");
          const stocksTraders = traders.filter(item => item.trophies === "Stocks");
      
          setOptions(optionsTraders);
          Setstocks(stocksTraders);
        }
      }, [traders]);
  
  
  return (
    
    <Box sx={{
            backgroundImage: `url(${bg})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", 
            minHeight: "100vh",
          }} >

    <PrimarySearchAppBar/>

    <Container sx={{justifyContent:"center" , display:"flex", mt:"10px"}}>

      <Tabs></Tabs> 
      
    </Container>

    <TopThree/>

    <div style={{display:"flex",justifyContent:"center"}}>
      <TraderMatrix></TraderMatrix>
    </div>

    <TraderLeaderboard traders={options} ></TraderLeaderboard>

    </Box>
      
  )
}


