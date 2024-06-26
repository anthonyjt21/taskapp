import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddTaskModal from '../AddTaskModal';

describe('AddTaskModal component', () => {
  test('renders modal with correct elements', () => {
    const onAddTask = jest.fn();
    const onClose = jest.fn();

    render(
      <AddTaskModal isOpen={true} onAddTask={onAddTask} onClose={onClose} />
    );

    // Check if the modal title and close button are rendered
    expect(screen.getByText('Add New Task')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /×/i })).toBeInTheDocument(); // Close button

    // Check if input and buttons are rendered
    expect(screen.getByPlaceholderText('Task description')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /add task/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  test('calls onAddTask with correct description when form is submitted', () => {
    const onAddTask = jest.fn();
    const onClose = jest.fn();

    render(
      <AddTaskModal isOpen={true} onAddTask={onAddTask} onClose={onClose} />
    );

    const descriptionInput = screen.getByPlaceholderText('Task description');
    const addButton = screen.getByRole('button', { name: /add task/i });

    // Simulate user input
    fireEvent.change(descriptionInput, { target: { value: 'Test Task' } });
    fireEvent.click(addButton);

    // Check if onAddTask is called with the correct description
    expect(onAddTask).toHaveBeenCalledWith('Test Task');
    expect(onClose).toHaveBeenCalled(); 
  });

  test('calls onClose when cancel button is clicked', () => {
    const onAddTask = jest.fn();
    const onClose = jest.fn();

    render(
      <AddTaskModal isOpen={true} onAddTask={onAddTask} onClose={onClose} />
    );

    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(cancelButton);

    // Check if onClose is called when cancel button is clicked
    expect(onClose).toHaveBeenCalled();
  });
});
