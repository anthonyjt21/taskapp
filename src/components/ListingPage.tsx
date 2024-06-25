import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchElements } from '../features/listing/listingSlice';
import Navigation from './Navigation';

const ListingPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { elements, loading, error } = useAppSelector((state) => state.listing);

  useEffect(() => {
    dispatch(fetchElements());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <h1>Listing</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {elements.map((element) => (
          <li key={element.id}>{element.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListingPage;
