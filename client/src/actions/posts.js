import * as api from "../api";
import * as actions from "../constants/actionTypes";

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: actions.START_LOADING });
    const { data } = await api.fetchPosts(page);

    dispatch({ type: actions.FETCH_ALL, payload: data });
    dispatch({ type: actions.END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.START_LOADING });
    const { data } = await api.fetchPost(id);

    dispatch({ type: actions.FETCH_BY_ID, payload: data });
    dispatch({ type: actions.END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: actions.START_LOADING });

    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: actions.FETCH_BY_SEARCH, payload: data });
    dispatch({ type: actions.END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: actions.START_LOADING });

    const { data } = await api.createPost(post);

    dispatch({ type: actions.CREATE, payload: data });
    history.push(`/posts/${data._id}`);
    dispatch({ type: actions.END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);

    dispatch({ type: actions.UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);

    dispatch({ type: actions.DELETE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: actions.LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
