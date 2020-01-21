/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));*/


/*const express = require('express');
const bodyParser = require('body-parser');
const app =express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const posts =[
{
	title: 'Hello, World',
	text:
'	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
},
{
	title: 'Hello, World1',
	text:
'	Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
},
{
	title: 'Hello, World2',
	text:
'	Lorem ipsum dolor sit amet, '
},
{
	title: 'Hello, World3',
	text:
'	Lorem ipsum '
}
];
app.get('/posts/:id', function(req, res){
	console.log(req.params);
	const id =req.params.id;
	return res.send(posts[id]);
});
app.get('/posts', function(req, res){

	return res.send(posts);
});
app.post('/posts', function(req, res){
const data =req.body;
console.log(data);
	posts.push(data);
	return res.send(posts);
});
app.listen(3333, function(){
	console.log('SERVER ZAPUSHEN!');
});*/
/*const arr=[1,2,3,4,5];
const result=arr.map(value=>value*2);
console.log(result);*/
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
//import PostModel from '../models/Post';
import PostModel from '../controllers/PostController';
const app=express();
mongoose.connect('mongodb://localhost/blog');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.post('/posts',(req, res)=>{
	const data=req.body;

const post=new PostModel({
	title: data.title,
	text: data.text
});
post.save().then(() =>{
	res.send({status:'ok'});
});
});
app.get('/posts',(req, res)=>{
	Post.find().then((err, posts)=>{
		if(err){
			res.send(err);
		}
		res.json(posts);
	});
});
app.delete('/posts/:id',(req, res)=>{
	PostModel.remove({
		_id: req.params.id
	}).then(post=>{if(post){
		res.json({status:'deleted'});
	} else{
	res.json({status:'error'});	
	}
});
	});
app.put('/posts/:id',(req, res)=>{
	PostModel.findByIdAndUpdate(req.params.id, {$set: req.body},err=>{
	if(err){
			res.send(err);
		}
		res.json({status:'updatted'});
	});
});	
	
app.listen(3333, function(){
	console.log('SERVER ZAPUSHEN!');
});
/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/server-side');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));*/