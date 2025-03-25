import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../store/slices/weatherSlice";
import { Paper, Typography, Box, CircularProgress, Fade } from "@mui/material";

function WeatherWidget({ city }) {
  const dispatch = useDispatch();
  const { data: weather, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [dispatch, city]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" sx={{ animation: "fadeIn 0.5s ease-in-out" }}>
        <CircularProgress sx={{ color: "primary.main", animation: "spin 1s linear infinite" }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Fade in timeout={500}>
        <Paper
          sx={{
            p: 2,
            
            transition: "0.3s",
            "&:hover": { transform: "scale(1.02)",boxShadow: 5 },
          }}
        >
          <Typography color="error">Error loading weather data</Typography>
        </Paper>
      </Fade>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <Fade in timeout={500}>
      <Paper
        sx={{
          p: 3,
          textAlign: "center",
          transition: "0.3s",
          borderRadius: 2,
          boxShadow: 3,
           bgcolor: 'rgba(15, 241, 105, 0.8)',
          "&:hover": { transform: "scale(1.02)", boxShadow: 5 },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          Weather in {weather.name}
        </Typography>
        <Typography variant="h5" sx={{ color: "primary.main", fontWeight: "bold" }}>
          {weather.main.temp}°C
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1, textTransform: "capitalize" }}>
          {weather.weather[0].description}
        </Typography>
      </Paper>
    </Fade>
  );
}

export default WeatherWidget;
