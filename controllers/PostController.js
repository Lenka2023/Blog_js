class PostController{
	index(req, res){
	Post.find().then((err, posts)=>{
		if(err){
			res.send(err);
		}
		res.json(posts);
	});
	}
	create(req, res){
	const data=req.body;

const post=new PostModel({
	title: data.title,
	text: data.text
});
post.save().then(() =>{
	res.send({status:'ok'});
});
	}
	read(req, res){
	PostModel.findOne({_id: req.params.id}).then((err, posts)=>{
		if(!post){
			res.send({err: 'not found'});
		}
		res.json(post);
	});

	}
	update(req, res){
	PostModel.findByIdAndUpdate(req.params.id, {$set: req.body},err=>{
	if(err){
			res.send(err);
		}
		res.json({status:'updatted'});
	});

	}
	delete(req, res){
	PostModel.remove({
		_id: req.params.id
	}).then(post=>{if(post){
		res.json({status:'deleted'});
	} else{
	res.json({status:'error'});	
	}
});

	}
}
module.exports = PostController;