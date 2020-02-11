import { HeaderBlock } from 'components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


const mapStateToProps = ({ posts }, { location: {pathname} }) => {
   const postId = pathname.split('/post/')[1];
	return !posts.items ? {} : posts.items.filter(post => post._id === postId)[0];
};
HeaderBlock.defaultProps = {
  title: 'React Blog',
  description: 'Мой блог на ReactJS и MongoDB',
  imageUrl:"https://images.unsplash.com/photo-1554956742-32f116cf57af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
};

export default withRouter(  connect(    mapStateToProps)(HeaderBlock),);