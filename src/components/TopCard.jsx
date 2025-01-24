import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Chip,
  Button,
  Divider,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';

const TopCard = ({ trader }) => {
  return (
    <Card
      elevation={5}
      sx={{
        width: 240,
        borderRadius: 3,
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
        background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        mx: '15px',
        p: 2,
      }}
    >
      {/* Top Rank Badge */}
      <Box
        sx={{
          position: 'absolute',
          top: 15,
          right: 15,
          bgcolor: 'rgba(255, 193, 7, 0.85)',
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="body2" fontWeight={700} color="text.primary">
          #{trader.rank}
        </Typography>
      </Box>

      {/* Trader Info */}
      <CardContent>
        <Avatar
          src={trader.avatar || 'https://via.placeholder.com/100'}
          alt={trader.name}
          sx={{
            width: 75,
            height: 75,
            mx: 'auto',
            mb: 1.5,
            border: '3px solid #ffd700',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
          }}
        />

        <Box display="flex" justifyContent="center" alignItems="center" gap={0.5} mb={1}>
          <Typography variant="h6" fontWeight={600}>
            {trader.name}
          </Typography>
          {trader.isVerified && <VerifiedIcon color="primary" fontSize="small" />}
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {trader.trophies}
        </Typography>

        {/* Xscore Badge */}
        <Chip
          label={`X ${trader.xscore}`}
          icon={<StarIcon sx={{ color: '#FFD700' }} />}
          sx={{
            bgcolor: '#1a237e',
            color: 'white',
            fontWeight: 600,
            borderRadius: 2,
            boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.2)',
            mb: 3,
          }}
          size="medium"
        />

        {/* Stats Section */}
        <Divider sx={{ mb: 2 }} />
        <Box display="flex" justifyContent="space-between" textAlign="center" px={2} mb={2}>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              {trader.alerts}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Alerts
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              {trader.trades}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Trades
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              {trader.avgGain}%
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Avg Gain
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mb: 3 }} />

        {/* Profile Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'none',
            borderRadius: 3,
            fontWeight: 600,
            width: '100%',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default TopCard;
