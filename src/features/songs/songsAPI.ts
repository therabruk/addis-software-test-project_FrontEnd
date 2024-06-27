import axios from 'axios';
import { Song, SongStats } from '../../utils/types';

const API_URL = 'http://localhost:5000/api';

export const fetchSongs = async (): Promise<Song[]> => {
  const response = await axios.get(`${API_URL}/songs`);
  return response.data;
};

export const fetchStats = async (): Promise<SongStats> => {
  const response = await axios.get(`${API_URL}/stats`);
  return response.data;
};

export const createSong = async (song: Song): Promise<Song> => {
  const response = await axios.post(`${API_URL}/songs`, song);
  return response.data;
};

export const updateSong = async (song: Song): Promise<Song> => {
  const response = await axios.put(`${API_URL}/songs/${song._id}`, song);
  return response.data;
};

export const deleteSong = async (id: string): Promise<string> => {
  await axios.delete(`${API_URL}/songs/${id}`);
  return id;
};
