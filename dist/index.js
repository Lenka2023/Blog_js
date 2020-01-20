"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

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
var app = (0, _express["default"])();

_mongoose["default"].connect('mongodb://localhost/blog');

app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.post('/posts', function (req, res) {
  var data = req.body;
  var post = new _Post["default"]({
    title: data.title,
    text: data.text
  });
  post.save().then(function () {
    res.send({
      status: 'ok'
    });
  });
});
app.get('/posts', function (req, res) {
  Post.find().then(function (err, posts) {
    if (err) {
      res.send(err);
    }

    res.json(posts);
  });
});
app["delete"]('/posts/:id', function (req, res) {
  _Post["default"].remove({
    _id: req.params.id
  }).then(function (post) {
    if (post) {
      res.json({
        status: 'deleted'
      });
    } else {
      res.json({
        status: 'error'
      });
    }
  });
});
app.put('/posts/:id', function (req, res) {
  _Post["default"].findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function (err) {
    if (err) {
      res.send(err);
    }

    res.json({
      status: 'updatted'
    });
  });
});
app.listen(3333, function () {
  console.log('SERVER ZAPUSHEN!');
});
/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/server-side');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));*/