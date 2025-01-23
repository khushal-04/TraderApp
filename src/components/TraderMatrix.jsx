import React from 'react';
import { Grid2, Card, CardContent, Avatar, Typography, Box, Badge } from '@mui/material'; 
import { useTraderData } from '../Context/Context'

const TraderMatrix = () => {
  const traders = useTraderData();

  // top-ranked traders for each category
  const getTopTrader = (key) =>
    traders.slice().sort((a, b) => b[key] - a[key])[0];

  const matrices = [
    {
      title: 'Most Tips Given',
      key: 'alerts',
      trader: getTopTrader('alerts'),
    },
    {
      title: 'Most Active',
      key: 'xscore',
      trader: getTopTrader('xscore'),
    },
    {
      title: 'Longest Streaks',
      key: 'streaks',
      trader: getTopTrader('streaks'),
    },
  ];

  return (
    <Box sx={{ px: 3, py: 2 ,my:2,display:"flex",justifyContent:"center"}}>
      <Grid2 container spacing={3}>
        {matrices.map((matrix, index) => (
          <Grid2 item xs={12} sm={4} key={index} sx={{height:"fit"}}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                textAlign: 'center',
                position: 'relative',height:"fit",width:"fit",
              }}
            >
              <CardContent sx={{justifyContent:"center" , display:"flex", alignItems:"center"}}>
                <Avatar
                  src={matrix.trader?.avatar || ''}
                  alt={matrix.trader?.name || ''}
                  sx={{
                    width: 50,
                    height: 50,
                    mx: '6px',
                  
                    bgcolor: '#f5f5f5',
                  }}
                >
                  {matrix.trader?.name?.charAt(0) || ''}
                </Avatar>
                <Box>
                <Typography variant="body2" color="textSecondary" sx={{mx:"6px"}}>
                  {matrix.title}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {matrix.trader?.name || 'Unknown'}
                </Typography>
                </Box>
                <Typography
                  variant="h5"
                  sx={{mr:"10px",ml:"60px", color: 'primary.main', fontWeight: 'bold' }}
                >
                  {matrix.trader?.[matrix.key] || 0}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default TraderMatrix;
