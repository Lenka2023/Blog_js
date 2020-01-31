import React from 'react';
import { PostItem } from '../';
import './PostsList.scss';

const PostsList = ({items}) => {
  return (
    <div className="post-items">
    {
    items.map(post=>
    (<PostItem{...post}/>))
    }
    </div>
  );
};


export default PostsList;