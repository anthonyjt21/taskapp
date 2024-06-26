 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import { Provider } from 'react-redux';
 import { configureStore } from '@reduxjs/toolkit';
 import listingReducer from '../../features/listing/listingSlice';
 import ListingPage from '../ListingPage';

 const store = configureStore({
   reducer: {
     listing: listingReducer,
   },
 });

 describe('ListingPage component', () => {
   test('renders without crashing', () => {
     render(
       <Provider store={store}>
         <ListingPage />
       </Provider>
     );

     expect(screen.getByText('Listing')).toBeInTheDocument();
   });
 });
