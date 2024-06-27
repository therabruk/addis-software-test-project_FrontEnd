import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { fetchSongsRequest, deleteSongRequest } from '../features/songs/songsSlice';

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state: RootState) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteSongRequest(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Songs</h2>
      <ul>
        {list.map(song => (
          <li key={song._id}>
            {song.title} by {song.artist} <button onClick={() => handleDelete(song._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
