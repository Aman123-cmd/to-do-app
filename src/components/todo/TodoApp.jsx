import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { Box, AppBar, Toolbar, Typography, Button, Container, Slide } from '@mui/material';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import WeatherWidget from './WeatherWidget';

function TodoApp() {
  const dispatch = useDispatch();
  const [city, setCity] = useState('London');
  const todos = useSelector((state) => state.todos.todos);
  const [showWeather, setShowWeather] = useState(false);

  useEffect(() => {
    const hasOutdoorTask = todos.some((todo) => todo.taskType === 'outdoor');
    setShowWeather(hasOutdoorTask);
  }, [todos]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleTaskAdded = () => {
    setShowWeather(false);
  };

  return (
    <Container maxWidth="md" sx={{ animation: 'fadeIn 0.5s ease-in-out', mt: 5 }}>
      <AppBar position="static" sx={{ bgcolor: 'rgba(15, 241, 105, 0.8)', backdropFilter: 'blur(10px)', boxShadow: 3 }}>
        <Toolbar sx={{ flexDirection: { xs: 'column', sm: 'row' }, textAlign: 'center' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,color:'blue'}}>
            <b>Todo App</b>
          </Typography>
          <Button 
            color="inherit" 
            onClick={handleLogout} 
            sx={{ transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } , color: 'blue'}}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Slide direction="down" in={showWeather} mountOnEnter unmountOnExit>
        <Box sx={{ mt: 3, mb: 3 }}>
          <WeatherWidget city={city} />
        </Box>
      </Slide>

      <Box sx={{ mt: 3 }}>
        <TodoInput onTaskAdded={handleTaskAdded} />
      </Box>

      <Box sx={{ mt: 3 }}>
        <TodoList />
      </Box>
    </Container>
  );
}

export default TodoApp;
