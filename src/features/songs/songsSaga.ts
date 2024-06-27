import { call, put, takeEvery } from 'redux-saga/effects';
import {
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
} from './songsSlice';
import { fetchSongs, fetchStats, createSong, updateSong, deleteSong } from './songsAPI';
import { PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../../utils/types';

function* handleFetchSongs() {
  try {
    const songs = yield call(fetchSongs);
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* handleFetchStats() {
  try {
    const stats = yield call(fetchStats);
    yield put(fetchStatsSuccess(stats));
  } catch (error) {
    yield put(fetchStatsFailure(error.message));
  }
}

function* handleCreateSong(action: PayloadAction<Song>) {
  try {
    const song = yield call(createSong, action.payload);
    yield put(createSongSuccess(song));
  } catch (error) {
    yield put(createSongFailure(error.message));
  }
}

function* handleUpdateSong(action: PayloadAction<Song>) {
  try {
    const song = yield call(updateSong, action.payload);
    yield put(updateSongSuccess(song));
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}

function* handleDeleteSong(action: PayloadAction<string>) {
  try {
    const songId = yield call(deleteSong, action.payload);
    yield put(deleteSongSuccess(songId));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

export default function* songsSaga() {
  yield takeEvery(fetchSongsRequest.type, handleFetchSongs);
  yield takeEvery(fetchStatsRequest.type, handleFetchStats);
  yield takeEvery(createSongRequest.type, handleCreateSong);
  yield takeEvery(updateSongRequest.type, handleUpdateSong);
  yield takeEvery(deleteSongRequest.type, handleDeleteSong);
}
