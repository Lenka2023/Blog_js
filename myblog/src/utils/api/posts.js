//import  axios  from 'axios';
import { axios } from 'core';


export default {
  get: id=> axios.get(`/posts${id ? '/' + id : ''}`),
  
};
