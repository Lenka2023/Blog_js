import React from 'react';

import './PostItem.scss';

const PostItem = ({ title, slug, createdAt, _id }) => {
  return (
    <div className="post-item" >
       <a href='/post/${_id}'>
                  <h2> {title}</h2>
              </a>
              <p>
                  <i>Posted on {createdAt}</i>
                  <a href="#">Remove</a> 
                   <a href="#">Edit</a> 
                </p> 
      </div>
  );
};

export default PostItem;