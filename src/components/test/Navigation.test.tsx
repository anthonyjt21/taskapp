import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import Navigation from '../Navigation';
import ListingPage from '../ListingPage';
import TaskPage from '../TaskPage';

describe('Navigation component', () => {
  test('navigates to Main page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/tasks']}>
          <Routes>
            <Route path="/" element={<Navigation />} />
            <Route path="/tasks" element={<TaskPage />} />
          </Routes>
          <Navigation />
        </MemoryRouter>
      </Provider>
    );

    const MainButtons = screen.getAllByText('Main');
    fireEvent.click(MainButtons[0]);
  });
  test('navigates to Tasks page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Navigation />} />
            <Route path="/tasks" element={<TaskPage />} />
          </Routes>
          <Navigation />
        </MemoryRouter>
      </Provider>
    );

    const taskButtons = screen.getAllByText('Tasks');
    fireEvent.click(taskButtons[0]);

    // Check for TaskPage specific content
    expect(screen.getByText('Add New Task')).toBeInTheDocument();
  });

  test('navigates to Listing page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Navigation />} />
            <Route path="/listing" element={<ListingPage />} />
          </Routes>
          <Navigation />
        </MemoryRouter>
      </Provider>
    );

    // Find the 'Listing' button and click it
    const listingButtons = screen.getAllByText('Listing');
    fireEvent.click(listingButtons[0]);


    expect(
      screen.getByRole('heading', { name: /Listing/i })
    ).toBeInTheDocument();
  });
});
