import React from 'react';
import { connect } from 'react-redux';
import { PostsList } from 'components';
import PostsListActions from '../actions';
class PostsListContainer extends React.Component {
  componentWillMount() {
    //const { fetchItems } = this.props;
    //fetchItems();
  }

}

const mapStateToProps=({posts})=>posts;
const mapDispatchToProps=PostsListActions;
export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);