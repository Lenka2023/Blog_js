import React from 'react';
import { FullPost } from 'components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
export default connect(({posts})=>{
	return posts.items[0];
})
  (FullPost);
