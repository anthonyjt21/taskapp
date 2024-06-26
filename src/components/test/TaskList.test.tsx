import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../../features/tasks/tasksSlice';
import TaskList from '../TaskList';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

describe('TaskList component', () => {
  test('renders tasks from the store', () => {
    store.dispatch({
      type: 'tasks/addTask',
      payload: { id: 1, description: 'Test Task' },
    });

    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });
});
