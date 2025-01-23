import {Box, Container, Grid2,Button,Paper} from "@mui/material"
import PrimarySearchAppBar from "./components/appbar"
import "./App.css"
import TopCard from "./components/TopCard"
import Metric from "./components/TraderMatrix"
import Leaderboard from "./components/LeaderBoard"
import React from 'react';
import ReactDOM from 'react-dom';
import { TraderProvider } from './Context/Context';
import TraderLeaderboard from './components/LeaderBoard';
import TopThree from "./components/TopThree"
import TraderMatrix from "./components/TraderMatrix"
import Tabs from "./components/Tabs"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Stocks from "./pages/stocks"
import All from "./pages/all"
import Options from "./pages/options"
function App() {
  
  return (
    <TraderProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<All />} />
        <Route path="/stocks" element={<Stocks/>}/>
        <Route path="/options" element={<Options/>}/>
      </Routes>
    </BrowserRouter>  
    </TraderProvider>
  )
}

export default App
