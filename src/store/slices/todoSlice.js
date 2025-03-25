import { createSlice } from '@reduxjs/toolkit';

const loadTodosFromStorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

const saveTodosToStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const initialState = {
  todos: loadTodosFromStorage(),
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      saveTodosToStorage(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      saveTodosToStorage(state.todos);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
        saveTodosToStorage(state.todos);
      }
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
      saveTodosToStorage(state.todos);
    },
  },
});

export const { addTodo, removeTodo, updateTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;