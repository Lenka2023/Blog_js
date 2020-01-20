const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new mongoose.Schema(
	{
		title:String,
		text:String
	},
	{
		timestamps:true
	}
);
const Post= mongoose.model('Post', postSchema);
module.exports = Post;