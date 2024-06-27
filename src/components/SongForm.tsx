import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSongRequest } from '../features/songs/songsSlice';
import { Song } from '../utils/types';

const SongForm: React.FC = () => {
  const dispatch = useDispatch();
  const [song, setSong] = useState<Song>({ _id: '', title: '', artist: '', album: '', genre: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createSongRequest(song));
    setSong({ _id: '', title: '', artist: '', album: '', genre: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={song.title} onChange={handleChange} placeholder="Title" />
      <input name="artist" value={song.artist} onChange={handleChange} placeholder="Artist" />
      <input name="album" value={song.album} onChange={handleChange} placeholder="Album" />
      <input name="genre" value={song.genre} onChange={handleChange} placeholder="Genre" />
      <button type="submit">Add Song</button>
    </form>
  );
};

export default SongForm;
