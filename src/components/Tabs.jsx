import React, { useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useNavigate, useLocation } from "react-router-dom";

function Tabs() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [alignment, setAlignment] = React.useState();

  useEffect(() => {
    if (location.pathname === "/") {
      setAlignment("all");
    } else if (location.pathname === "/stocks") {
      setAlignment("stocks");
    } else if (location.pathname === "/options") {
      setAlignment("options");
    }
  }, [location.pathname]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (newAlignment === "all") {
      navigate("/");
    } else if (newAlignment === "stocks") {
      navigate("/stocks");
    } else if (newAlignment === "options") {
      navigate("/options");
    }
  };

  return (
    <ToggleButtonGroup
      color="standard"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{
        bgcolor: "white",
        padding: "3px",
        borderRadius: "8px",
        height: "30px",
      }}
    >
      <ToggleButton
        value="all"
        sx={{
          border: "none",
          bgcolor: "white",
          borderRadius: "5px",
          mr: "5px",
        }}
      >
        All
      </ToggleButton>
      <ToggleButton
        value="stocks"
        sx={{
          border: "none",
          bgcolor: "white",
          borderRadius: "5px",
          mx: "5px",
        }}
      >
        Stocks
      </ToggleButton>
      <ToggleButton
        value="options"
        sx={{
          border: "none",
          bgcolor: "white",
          borderRadius: "5px",
          ml: "2px",
        }}
      >
        Options
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Tabs;
