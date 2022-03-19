import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "./slices/rootSlice";
import commentsReducer from "./slices/commentSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;