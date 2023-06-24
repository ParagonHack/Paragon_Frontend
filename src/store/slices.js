import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
  authState: false,
  selectedVideo: '',
  chatHistory: {},
  selectedChat: ''
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
    //Action to set the chat history with saving to s3
    setChatHistory(state, action) {
      state.chatHistory = action.payload
    },
    //Action to set the selected chat
    setSelectedChat(state, action) {
      state.chatHistory = action.payload
    },
    //Action to revert to initialState
    setInitialState(state, action) {
      state = initialState
    }
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.slicer,
      };
    },
  },
});

export const { setAuthState, setVideo, setInitialState, setChatHistory } = slice.actions;

export const selectAuthState = (state) => state.slicer.authState;
export const selectVideo = (state) => state.slicer.selectedVideo;
export const selectChatHistory = (state) => state.slicer.chatHistory;
export const selectChat = (state) => state.slicer.selectedChat;

export default slice.reducer;