import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const navigate  = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/tasks')}>Tasks</button>
      <button onClick={() => navigate('/listing')}>Listing</button>
    </div>
  );
};

export default MainPage;
