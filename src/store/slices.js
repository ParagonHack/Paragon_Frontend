import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
  authState: false,
  selectedVideo: ''
}

export const slice = createSlice({
  name: "slicer",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload
    },
    //Action to set the video selected
    setVideo(state, action) {
      state.selectedVideo = action.payload
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setAuthState, setVideo } = slice.actions;

export const selectAuthState = (state) => state.slicer.authState;

export const selectVideo = (state) => state.slicer.selectedVideo;

export default slice.reducer;