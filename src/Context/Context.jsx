import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
const TraderContext = createContext();

// TraderProvider Component
export const TraderProvider = ({ children }) => {
  const [traders, setTraders] = useState([]);
  const [topTips, setTopTips] = useState();
  const [mostActive, setMostActive] = useState();
  const [longestStreak, setLongestStreak] = useState();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://script.googleusercontent.com/macros/echo?user_content_key=z3XwAWbHLnee1y6HP7fJMWY3OuD02L4AZdLqEiEZ7Gb5fSiIAQrPS4ih6acwwIXyLU6IBYps_uluOTHfL2Y3-J0hL0YAwcjlm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMRye1Flxh3mFeOpQq_bNhr1uAnEEFn75n0sZteBzSS6TvmdznMb60zd5fxewoiJFEwWUI3IErh2ELt-nUe383Tb65B0uVIXYQ&lib=MvS8ST7CCGnK4R4-oGU8ItkpkYEklKIS1'
        );

        const formattedData = response.data
          .sort((a, b) => (a.Rank || Infinity) - (b.Rank || Infinity)) // Sort based on Rank
          .map((item, index) => ({
            rank: item.Rank || index + 1,
            name: item.Name || 'Unknown',
            avatar: item.Avatar || '',
            verified: item.Verified || false,
            traderType: item.traderType || '',
            type: item.Type || 'General',
            streaks: item.Streaks || 0,
            alerts: item.Alerts || 0,
            alertsPercent: item.AlertsPercent || 0,
            trades: item.Trades || 0,
            tradesPercent: item.TradesPercent || 0,
            avgGain: item.AvgGain * 100,
            xscore: item.Xscore || 0,
            trophies: item.Trophies || 0,
          }));

        const tips = response.data
          .sort((a, b) => (a.Alerts || Infinity) - (b.Alerts || Infinity)) // Sort based on alerts
          .map((item, index) => ({
            rank: item.Rank || index + 1,
            name: item.Name || 'Unknown',
            avatar: item.Avatar || '',
            verified: item.Verified || false,
            traderType: item.traderType || '',
            type: item.Type || 'General',
            streaks: item.Streaks || 0,
            alerts: item.Alerts || 0,
            alertsPercent: item.AlertsPercent || 0,
            trades: item.Trades || 0,
            tradesPercent: item.TradesPercent || 0,
            avgGain: item.AvgGain * 100,
            xscore: item.Xscore || 0,
            trophies: item.Trophies || 0,
          }));


        setTopTips(tips);
        const active = response.data
          .sort((a, b) => (a.Xscore || Infinity) - (b.Xscore || Infinity))
          .map((item, index) => ({
            rank: item.Rank || index + 1,
            name: item.Name || 'Unknown',
            avatar: item.Avatar || '',
            verified: item.Verified || false,
            traderType: item.traderType || '',
            type: item.Type || 'General',
            streaks: item.Streaks || 0,
            alerts: item.Alerts || 0,
            alertsPercent: item.AlertsPercent || 0,
            trades: item.Trades || 0,
            tradesPercent: item.TradesPercent || 0,
            avgGain: item.AvgGain * 100,
            xscore: item.Xscore || 0,
            trophies: item.Trophies || 0,
          }));

        setMostActive(active);
        const streaks = response.data
          .sort((a, b) => (a.Streaks || Infinity) - (b.Streaks || Infinity)) // Sort based on Rank
          .map((item, index) => ({
            rank: item.Rank || index + 1,
            name: item.Name || 'Unknown',
            avatar: item.Avatar || '',
            verified: item.Verified || false,
            traderType: item.traderType || '',
            type: item.Type || 'General',
            streaks: item.Streaks || 0,
            alerts: item.Alerts || 0,
            alertsPercent: item.AlertsPercent || 0,
            trades: item.Trades || 0,
            tradesPercent: item.TradesPercent || 0,
            avgGain: item.AvgGain * 100,
            xscore: item.Xscore || 0,
            trophies: item.Trophies || 0,
          }));

        setLongestStreak(streaks);
        
        setTraders(formattedData);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <TraderContext.Provider value={traders}>{children}</TraderContext.Provider>;
};

// Custom Hook to Use TraderContext
export const useTraderData = () => useContext(TraderContext);
