import React from 'react';
import { Link } from 'react-router-dom';

import './FullPost.scss';

const FullPost = ({ title, slug, createdAt, _id, onRemove }) => {
  return (
    <div className="full-post" >
       
      <h2>{title}</h2>
    
    <p>
      <i>Posted on {createdAt}</i>
      </p> 
     <br/>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
       </p>        
      </div>
  );
};

export default FullPost;