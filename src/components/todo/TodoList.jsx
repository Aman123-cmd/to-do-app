import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../../store/slices/todoSlice';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Chip,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const priorityColors = {
  low: 'success',
  medium: 'warning',
  high: 'error',
};

const taskTypeColors = {
  indoor: 'info', // Blue for indoor
  outdoor: 'primary', // Light blue for outdoor
};

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleToggle = (todo) => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <List sx={{ width: '100%'}}>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          sx={{
            bgcolor: 'rgba(15, 241, 105, 0.8)',
            mb: 1,
            borderRadius: 1,
            boxShadow: 1,
            flexDirection: { xs: 'column', sm: 'row' }, // Stack layout on mobile
            alignItems: 'flex-start',
            padding: 2,
            transition: '0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.02)', boxShadow: 3 }, // Smooth hover effect
          }}
        >
          {/* Task Checkbox & Text */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
            <Checkbox
              edge="start"
              checked={todo.completed}
              onChange={() => handleToggle(todo)}
              sx={{
                transition: '0.3s ease-in-out',
                '&:checked': { transform: 'scale(1.1)', color: 'success.main' }, // Animation on check
              }}
            />
            <ListItemText
              primary={todo.text}
              sx={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                wordBreak: 'break-word', // Prevents text overflow
                transition: '0.3s',
                '&:hover': { color: 'primary.main' }, // Subtle text hover effect
              }}
            />
          </Box>

          {/* Task Type, Priority & Delete Button */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap', // Wrap items on smaller screens
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'flex-end' },
              gap: 1.5,
              width: { xs: '100%', sm: 'auto' }, // Full width on mobile
              mt: { xs: 1, sm: 0 }, // Add margin on mobile for spacing
            }}
          >
            <Chip
              label={todo.taskType}
              color={taskTypeColors[todo.taskType]}
              size="small"
              sx={{
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.1)' }, // Hover animation
              }}
            />
            <Chip
              label={todo.priority}
              color={priorityColors[todo.priority]}
              size="small"
              sx={{
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.1)' }, // Hover animation
              }}
            />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDelete(todo.id)}
              sx={{
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.2)', color: 'error.main' }, // Delete button animation
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
