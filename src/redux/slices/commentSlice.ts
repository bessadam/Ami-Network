import { createSlice } from "@reduxjs/toolkit";
import { IComment } from "../../types/PostInterface";

interface PostsState {
  comments: IComment[];
}

const initialState: PostsState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    addComment(state, action) {
      state.comments.push({
        text: action.payload.text,
        avatar: action.payload.avatar,
        date: action.payload.date
      });
    },
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
