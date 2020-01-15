import mongoose, {Schema} from 'mongoose';
let {Schema} = require('mongoose');
const postSchema = new Schema(
	{
		title:String,
		text:String
	},
	{
		timestamps:true
	}
);
const Post= mongoose.model('Post', PostSchema);
export default Post;