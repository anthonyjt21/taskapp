import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../../features/tasks/tasksSlice';
import TaskPage from '../TaskPage';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

describe('TaskPage component', () => {
  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Router>
          <TaskPage />
        </Router>
      </Provider>
    );

    const tasksButtons = screen.getAllByText('Tasks');
    expect(tasksButtons[0]).toBeInTheDocument(); 

    const addTaskButtons = screen.getAllByText('Add New Task');
    expect(addTaskButtons[0]).toBeInTheDocument(); 
  });

  test('opens and closes AddTaskModal', () => {
    render(
      <Provider store={store}>
        <Router>
          <TaskPage />
        </Router>
      </Provider>
    );
    const addTaskButtons = screen.getAllByText('Add New Task');
    const openButton = addTaskButtons[0];
    fireEvent.click(openButton);

    // Check if the modal opens by looking for the modal content
    const modalHeading = screen.getAllByText('Add New Task');
    expect(modalHeading.length).toBeGreaterThan(1); 

    // Assuming there's a close button inside the modal
    const closeButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(closeButton);

   
    expect(screen.getByText('Add New Task')).toBeInTheDocument();
  });

  test('adds a task', () => {
    render(
      <Provider store={store}>
        <Router>
          <TaskPage />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByText('Add New Task'));
    fireEvent.change(screen.getByPlaceholderText('Task description'), {
      target: { value: 'New Task' },
    });
    fireEvent.click(screen.getByRole('button', { name: /add task/i }));

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });
});
