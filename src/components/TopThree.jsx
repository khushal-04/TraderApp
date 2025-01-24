import React from "react";
import TopCard from "./TopCard";
import { Grid2, Typography, Box } from "@mui/material";
import { useTraderData } from "../Context/Context";
import { useLocation } from "react-router-dom";

export default function TopThree() {
  const traders = useTraderData() || [];
  const location = useLocation();

  let filteredTraders = [];
  if (location.pathname === "/stocks") {
    filteredTraders = traders.filter((item) => item.trophies === "Stocks").slice(0, 3);
  } else if (location.pathname === "/options") {
    filteredTraders = traders.filter((item) => item.trophies === "Options").slice(0, 3);
  } else {
    filteredTraders = traders.slice(0, 3);
  }

  if (traders.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" color="text.secondary">
          Loading...
        </Typography>
      </Box>
    );
  }

  if (filteredTraders.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" color="text.secondary">
          No top traders found for this category.
        </Typography>
      </Box>
    );
  }

  return (
    <Box mt={4} mx="auto" px={2}>
      <Grid2 container spacing={2} justifyContent="center">
        {filteredTraders.map((item, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <TopCard trader={item} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
