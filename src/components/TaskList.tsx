import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.description}</li>
      ))}
    </ul>
  );
};

export default TaskList;
