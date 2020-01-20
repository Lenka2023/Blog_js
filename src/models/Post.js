import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const PostSchema = new Schema(
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