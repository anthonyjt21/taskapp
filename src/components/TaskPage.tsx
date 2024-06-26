import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import AddTaskModal from './AddTaskModal';
import TaskList from './TaskList';

const TaskPage: React.FC = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (description: string) => {
    dispatch(addTask({ id: Date.now(), description }));
    setShowModal(false);
  };

  return (
    <div>    
      <h1>Tasks</h1>
      <TaskList />
      <button onClick={() => setShowModal(true)}>Add New Task</button>
      <AddTaskModal
        isOpen={showModal}
        onAddTask={handleAddTask}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default TaskPage;
