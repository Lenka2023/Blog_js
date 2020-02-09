import React from 'react';

import './HeaderBlock.scss';

const HeaderBlock = ({ title, description, imageUrl }) => {
  return (
    <div className="header-block" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="container">
        <div className="header-block__overlay" />
        <div className="header-block__center">
          <h1>{title}</h1>
          <h3>{description}</h3>
        </div>
      </div>
    </div>
  );
};
HeaderBlock.defaultProps={
  title="Заголовок сайта"
  description="Описание"
  imageUrl="https://images.unsplash.com/photo-1554956742-32f116cf57af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
};

export default HeaderBlock;