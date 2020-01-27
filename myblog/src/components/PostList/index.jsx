import React from 'react';
import { PostItem } from '../';
import './PostList.scss';

const PostList = ({posts}) => {
  return (
    <div className="post-items">
    {
    posts.map(post=>(
    <PostItem{...post}/>))
    }
    </div>
  );
};


export default PostList;