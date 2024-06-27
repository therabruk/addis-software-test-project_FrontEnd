import React from 'react';
import SongList from '../components/SongList';
import SongForm from '../components/SongForm';
import Statistics from '../components/Statistics';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Music Library</h1>
      <SongForm />
      <SongList />
      <Statistics />
    </div>
  );
};

export default Home;
