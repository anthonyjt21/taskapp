import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './components/MainPage';
import TaskPage from './components/TaskPage';
import ListingPage from './components/ListingPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/"  element={<MainPage/>} />
          <Route path="/tasks" element={<TaskPage/>} />
          <Route path="/listing" element={<ListingPage/>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
