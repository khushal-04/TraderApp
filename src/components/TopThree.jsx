import React from "react";
import TopCard from "./TopCard";
import { Container, Box, Typography } from "@mui/material";
import { useTraderData } from "../Context/Context";
import { useLocation } from "react-router-dom";


export default function TopThree() {
  const traders = useTraderData() || [];
  const location = useLocation();

  
  let filteredTraders = [];
  if (location.pathname === "/stocks") {
    filteredTraders = traders.filter((item) => item.trophies === "Stocks");
    filteredTraders=filteredTraders.slice(0,3);
  } else if (location.pathname === "/options") {
    filteredTraders = traders.filter((item) => item.trophies === "Options");
    filteredTraders=filteredTraders.slice(0,3);
  } else {
    filteredTraders = traders.slice(0, 3); 
  }

  if (!traders || traders.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" color="text.secondary">
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <Container
      sx={{
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "60px",
      }}
    >
      {filteredTraders.map((item, index) => (
        <TopCard key={index} trader={item} />
      ))}
    </Container>
  );
}
