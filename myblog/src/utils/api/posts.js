//import  axios  from 'axios';
import { axios } from 'core';


export default {
  ////get: id=> axios.get(`/posts${id ? '/' + id : ''}`),
  remove: id => axios.delete(`/posts/${id}`),
get: id=> axios.get('posts'),
};
