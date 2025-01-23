import { Box, Container } from "@mui/material";
import PrimarySearchAppBar from "../components/appbar";
import "../App.css";
import React, { useState, useEffect } from "react";
import { useTraderData } from "../Context/Context";
import TraderLeaderboard from "../components/LeaderBoard";
import TopThree from "../components/TopThree";
import TraderMatrix from "../components/TraderMatrix";
import Tabs from "../components/Tabs";
import bg from "../assets/image.png"

export default function All() {
  const traders = useTraderData();
  const [options, setOptions] = useState([]);
  const [stocks, Setstocks] = useState([]);

  console.log("traders", traders);

  useEffect(() => {
    if (traders && traders.length > 0) {
      const optionsTraders = traders.filter(
        (item) => item.trophies === "Options"
      );
      const stocksTraders = traders.filter(
        (item) => item.trophies === "Stocks"
      );
      console.log("Filtered options:", optionsTraders);
      console.log("Filtered stocks:", stocksTraders);
      setOptions(optionsTraders);
      Setstocks(stocksTraders);
    }
  }, [traders]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Optional: For parallax effect
        minHeight: "100vh",
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        <TraderMatrix />
      </div>

      <TraderLeaderboard traders={traders} />
    </Box>
  );
}
