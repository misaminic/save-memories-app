import axios from 'axios';

const url = 'https://save-your-memories.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => {
  axios.delete(`${url}/${id}`);
};
export const likePost = (id) => {
  return axios.patch(`${url}/${id}/likePost`);
};
