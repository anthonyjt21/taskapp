import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import TaskPage from '../components/TaskPage';
import ListingPage from '../components/ListingPage';
import Navigation from '../components/Navigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/listing" element={<ListingPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
