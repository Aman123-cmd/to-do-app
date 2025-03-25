import { useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import Login from './components/auth/Login';
import TodoApp from './components/todo/TodoApp';
import { checkAuth } from './store/slices/authSlice';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Router>
          <Routes>
            <Route 
              path="/login" 
              element={isAuthenticated ? <Navigate to="/" /> : <Login />} 
            />
            <Route 
              path="/" 
              element={isAuthenticated ? <TodoApp /> : <Navigate to="/login" />} 
            />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;