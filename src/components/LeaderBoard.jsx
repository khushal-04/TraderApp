import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
  Typography,
  Chip,
  IconButton,
  useMediaQuery,
  Grid,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PeopleIcon from "@mui/icons-material/People";
import ShowChartIcon from "@mui/icons-material/ShowChart";

const TraderLeaderboard = ({ traders }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  if (!traders || traders.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" color="text.secondary">
          Loading...
        </Typography>
      </Box>
    );
  }

  return isMobile ? (
    // Mobile Layout
    <Box mt={4} px={2}>
      <Grid container spacing={2}>
        {traders.map((trader) => (
          <Grid item xs={12} key={trader.rank}>
            <Paper
              sx={{
                p: 2,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                borderRadius: 2,
              }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar
                  src={trader.avatar}
                  alt={trader.name}
                  sx={{
                    width: 56,
                    height: 56,
                    border: "2px solid",
                    borderColor: trader.rank <= 3 ? "primary.main" : "grey.300",
                  }}
                />
                <Box>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <Typography variant="h6" fontWeight={500}>
                      {trader.name}
                    </Typography>
                    {trader.verified && (
                      <VerifiedIcon color="primary" sx={{ fontSize: 16 }} />
                    )}
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    Rank #{trader.rank} | {trader.trophies} Trophies
                  </Typography>
                </Box>
              </Box>
              <Box mt={2}>
                <Typography variant="body2">
                  <strong>Streaks:</strong> {trader.streaks}
                </Typography>
                <Typography variant="body2">
                  <strong>Trades:</strong> {trader.trades} / {trader.avgGain}%
                </Typography>
                <Typography variant="body2">
                  <strong>Xscore:</strong> {trader.xscore}
                </Typography>
              </Box>
              <Box mt={2} display="flex" gap={1}>
                <IconButton size="small" color="primary">
                  <PeopleIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" color="secondary">
                  <ShowChartIcon fontSize="small" />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : (
    // Desktop Layout
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 1200,
        mx: "auto",
        mt: 4,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Table>
        {/* Table Head */}
        <TableHead>
          <TableRow sx={{ bgcolor: "primary.main" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Rank</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Trophies</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }} align="center">
              Streaks
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Trades</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Xscore</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {traders.map((trader) => (
            <TableRow
              key={trader.rank}
              sx={{
                "&:hover": { bgcolor: "grey.100" },
                bgcolor: trader.rank <= 3 ? "rgba(255, 215, 0, 0.15)" : "inherit",
              }}
            >
              {/* Rank */}
              <TableCell>
                <Typography
                  variant="body1"
                  fontWeight={trader.rank <= 3 ? 700 : 400}
                  color={trader.rank <= 3 ? "primary.main" : "text.primary"}
                >
                  {trader.rank}
                </Typography>
              </TableCell>

              {/* Trader Name */}
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar
                    src={trader.avatar}
                    alt={trader.name}
                    sx={{
                      border: "2px solid",
                      borderColor: trader.rank <= 3 ? "primary.main" : "grey.300",
                    }}
                  />
                  <Box>
                    <Box display="flex" alignItems="center" gap={0.5}>
                      <Typography variant="body1" fontWeight={500}>
                        {trader.name}
                      </Typography>
                      {trader.verified && (
                        <VerifiedIcon color="primary" sx={{ fontSize: 16 }} />
                      )}
                    </Box>
                  </Box>
                </Box>
              </TableCell>

              {/* Trophies */}
              <TableCell>
                <Chip
                  label={trader.trophies}
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: 2, bgcolor: "grey.50" }}
                />
              </TableCell>

              {/* Streaks */}
              <TableCell align="center">{trader.streaks}</TableCell>

              {/* Trades */}
              <TableCell>{trader.trades}</TableCell>

              {/* Xscore */}
              <TableCell>
                <Chip
                  label={`X ${trader.xscore}`}
                  size="small"
                  sx={{
                    bgcolor: "primary.dark",
                    color: "white",
                    borderRadius: 2,
                  }}
                />
              </TableCell>

              {/* Actions */}
              <TableCell>
                <Box display="flex" justifyContent="center" gap={1}>
                  <IconButton size="small" color="primary">
                    <PeopleIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="secondary">
                    <ShowChartIcon fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TraderLeaderboard;
