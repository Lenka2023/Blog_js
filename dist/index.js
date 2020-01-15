"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Post = _interopRequireDefault(require("../models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
_mongoose["default"].connect('mongodb://localhost/blog');

var post = new _Post["default"]({
  title: 'первая запись',
  text: 'Hello World'
});
post.save().then(function () {
  console.log('OK!');
});
/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/server-side');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));*/