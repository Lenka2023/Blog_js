import React from 'react';
import { FullPost } from 'components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PostsListActions from 'modules/PostsList/actions';
class FullPostContainer extends React.Component {
  componentDidMount() {
  	//...
  }
  render() {
  	return <FullPost {...this.props}/>
export default withRouter(
   connect(({posts}, {match: {params {id}}, PostsListActions})=>{
	return posts.items.filter(post=>post._id===id)[0];
})
  (FullPostContainer),);
