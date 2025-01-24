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
import bgmobile from "../assets/bgmobile.png"

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
    
    <Box
  sx={{
    backgroundImage: {
      xs: `url(${bgmobile})`, 
      sm: `url(${bg})`,     
    },
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: {
      xs: "scroll",  
      sm: "fixed",   
    },
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  }}
>

      <PrimarySearchAppBar />

      <Container
        sx={{
          justifyContent: "center",
          display: "flex",
          mt: "10px",
        }}
      >
        <Tabs />
      </Container>

      <TopThree />

      <Box display="flex" justifyContent="center">
        <TraderMatrix />
      </Box>

      <TraderLeaderboard traders={traders} />
    </Box>
      
  )
}


