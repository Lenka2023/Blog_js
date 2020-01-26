import React from 'react';
import { Link } from 'react-router-dom';

import './PostItem.scss';

const PostItem = ({ title, slug, createdAt, _id }) => {
  return (
    <div className="post-item" >
       <Link href={'/post/${_id}'}>
                  <h2> {title}</h2>
              </a>
              <p>
                  <i>Posted on {createdAt}</i>
                  <Link to="#">Remove</Link> 
                   <Link to="#">Edit</Link> 
                </p> 
      </div>
  );
};

export default PostItem;