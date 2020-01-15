import mongoose, {Schema} from 'mongose';
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