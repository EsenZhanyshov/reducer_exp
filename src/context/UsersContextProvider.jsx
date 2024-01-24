import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API } from "../helpers/const";
export const UsersContext = createContext();
const UsersContextProvider = ({ children }) => {
  // ! userReducer
  const INIT_STATE = {
    users: [],
    user: {},
    photos: [],
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_USERS":
        return { ...state, users: action.payload };
      case "GET_ONE_USER":
        return { ...state, user: action.payload };
      case "GET_PHOTOS":
        return { ...state, photos: action.payload };
      case "GET_POSTS":
        return { ...state, posts: action.payload };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // ! get users
  const getUsers = async () => {
    const { data } = await axios(`${API}/users`);
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };
  // ! get one user
  const getOneUser = async (id) => {
    const { data } = await axios(`${API}/users/${id}`);
    dispatch({
      type: "GET_ONE_USER",
      payload: data,
    });
  };
  // ! get posts
  const getPosts = async () => {
    const { data } = await axios(`${API}/posts`);
    dispatch({
      type: "GET_POSTS",
      payload: data,
    });
  };
  // ! get photos
  const getPhotos = async () => {
    const { data } = await axios(`${API}/photos`);
    dispatch({
      type: "GET_PHOTOS",
      payload: data,
    });
  };
  const values = {
    getUsers,
    users: state.users,
    getOneUser,
    user: state.user,
    getPosts,
    posts: state.posts,
    getPhotos,
    photos: state.photos,
  };
  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
};

export default UsersContextProvider;
