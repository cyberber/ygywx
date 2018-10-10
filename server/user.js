const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModule('user');

Router.post('/login',function(req, res){
	console.log(req.body);
	const { userName, passWord } = req.body
	// User.remove({},function(e,d){})
	User.find({userName, passWord},function(err,doc){
		if(!err) {
			console.log(doc)
			return res.json({code:200,data:doc})
		}else{
			console.log(err)
			return res.json({code:302,data:doc})
		}
	})
})

Router.post('/register', function(req, res){
	let param = {
		userName: req.body.userName,
		passWord: req.body.passWord
	}
	User.create(param , function(err, doc){
		if(!err) {
			console.log(doc)
			return res.json({code:200,data:doc})
		}else{
			console.log(err)
			return res.json({code:302,data:doc})
		}
	})
})

Router.post('/chenwei',function(req, res) {
	console.log(req.cookies)
})

module.exports = Router;