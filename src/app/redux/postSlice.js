"use client";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "https://jsonplaceholder.typicode.com/posts";
export const getData = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}`).then((res) => res);
    //  console.log("response", response);
    dispatch(fetchData(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const getDataById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`).then((res) => res);
    console.log("gggggggg", response.data);
    dispatch(fetchData(response.data));
  } catch (err) {
    err;
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}/${postId}`);
    console.log("ttttttt", response);
    dispatch(deleteData(postId));
  } catch (err) {
    throw new Error(err);
  }
};

export const addData = (postData) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, postData);
    console.log("uuuuuuuu", response);
    dispatch(createData(response.data));
  } catch (err) {
    throw new Error(err);
  }
};
// export const updatePost = (postId, updatedData) => async (dispatch) => {
//   try {
//     const response = await axios.put(`${API_URL}/${postId}`, updatedData);
//     dispatch(updateData(response.data));
//   } catch (err) {
//     throw new Error(err);
//   }
// };

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.posts = action.payload;
    },
    deleteData: (state, action) => {
      const postId = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
    // updateData: (state, action) => {
    //   const updatedPost = action.payload;
    //   state.posts = state.posts.map((post) =>
    //     post.id === updatedPost.id ? updatedPost : post
    //   );
    // },
    createData: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

const { fetchData, deleteData, updateData, createData } = postSlice.actions;
console.log("fetchData", postSlice.actions);

export default postSlice.reducer;
