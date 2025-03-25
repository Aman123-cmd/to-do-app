import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/slices/todoSlice';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

function TodoInput({ onTaskAdded }) {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [taskType, setTaskType] = useState('outdoor');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(
        addTodo({
          id: Date.now(),
          text: task,
          priority,
          taskType,
          completed: false,
        })
      );
      setTask('');
      setTaskType('outdoor');
      onTaskAdded(); // Hide weather on new task
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        animation: 'fadeIn 0.5s ease-in-out',
      }}
    >
      <TextField
        fullWidth
        label="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        variant="outlined"
        sx={{
          transition: '0.3s',
          '&:focus-within': { borderColor: 'primary.main', transform: 'scale(1.02)' }, bgcolor:'rgba(0, 255, 0, 0)'
        }}
      />

      <FormControl sx={{ minWidth: 120, width: { xs: '100%', sm: 'auto' } }}>
        <InputLabel>Priority</InputLabel>
        <Select value={priority} label="Priority" onChange={(e) => setPriority(e.target.value)}>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 120, width: { xs: '100%', sm: 'auto' } }}>
        <InputLabel>Task Type</InputLabel>
        <Select value={taskType} label="Task Type" onChange={(e) => setTaskType(e.target.value)}>
          <MenuItem value="indoor">Indoor</MenuItem>
          <MenuItem value="outdoor">Outdoor</MenuItem>
        </Select>
      </FormControl>

      <Button 
        type="submit" 
        variant="contained" 
        sx={{
          width: { xs: '100%', sm: 'auto' },
          transition: '0.3s',
          '&:hover': { transform: 'scale(1.05)' },
        }}
      >
        Add
      </Button>
    </Box>
  );
}

export default TodoInput;
