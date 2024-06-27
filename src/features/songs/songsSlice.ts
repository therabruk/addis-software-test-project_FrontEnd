import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song, SongStats } from '../../utils/types';

interface SongsState {
  list: Song[];
  stats: SongStats;
  loading: boolean;
  error: string | null;
}

const initialState: SongsState = {
  list: [],
  stats: {} as SongStats,
  loading: false,
  error: null,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    fetchSongsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.list = action.payload;
      state.loading = false;
    },
    fetchSongsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchStatsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchStatsSuccess(state, action: PayloadAction<SongStats>) {
      state.stats = action.payload;
      state.loading = false;
    },
    fetchStatsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    createSongRequest(state, action: PayloadAction<Song>) {
      state.loading = true;
      state.error = null;
    },
    createSongSuccess(state, action: PayloadAction<Song>) {
      state.list.push(action.payload);
      state.loading = false;
    },
    createSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateSongRequest(state, action: PayloadAction<Song>) {
      state.loading = true;
      state.error = null;
    },
    updateSongSuccess(state, action: PayloadAction<Song>) {
      const index = state.list.findIndex(song => song._id === action.payload._id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
      state.loading = false;
    },
    updateSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSongRequest(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.list = state.list.filter(song => song._id !== action.payload);
      state.loading = false;
    },
    deleteSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  fetchStatsRequest,
  fetchStatsSuccess,
  fetchStatsFailure,
  createSongRequest,
  createSongSuccess,
  createSongFailure,
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure,
} = songsSlice.actions;

export default songsSlice.reducer;
