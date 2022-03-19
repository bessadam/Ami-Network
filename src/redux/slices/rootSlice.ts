import {createSlice} from '@reduxjs/toolkit';
import {MockPosts} from "../../assets/data/Posts";
import {IPost} from "../../types/PostInterface";

interface PostsState {
  posts: IPost[]
}

const initialState: PostsState = {
  posts: MockPosts
}

const rootSlice = createSlice({
  name: "rootSlice",
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts.unshift({
        date: new Date().toLocaleDateString(),
        avatar: action.payload.avatar,
        login: action.payload.login,
        category: action.payload.category,
        title: action.payload.title,
        text: action.payload.text,
        loggedIn: true,
        visibility: action.payload.visibility,
        like: 0,
        heart: 0,
        comments: []
      })
    },
    addComment(state, action) {
      // state.posts.comments.unshift({

      // })
    }
  }
})

export const { addPost, addComment } = rootSlice.actions;

export default rootSlice.reducer;