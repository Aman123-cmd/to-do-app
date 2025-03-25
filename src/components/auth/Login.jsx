import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
} from '@mui/material';

function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 400,
          width: '100%',
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
          Demo credentials: username: demo, password: password
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;