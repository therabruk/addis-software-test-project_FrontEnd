import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { fetchStatsRequest } from '../features/songs/songsSlice';

const Statistics: React.FC = () => {
  const dispatch = useDispatch();
  const { stats, loading, error } = useSelector((state: RootState) => state.songs);

  useEffect(() => {
    dispatch(fetchStatsRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Songs: {stats.totalSongs}</p>
      <p>Total Artists: {stats.totalArtists}</p>
      <p>Total Albums: {stats.totalAlbums}</p>
      <p>Total Genres: {stats.totalGenres}</p>
      {/* Add more statistics as needed */}
    </div>
  );
};

export default Statistics;
