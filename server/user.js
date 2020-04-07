const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModule('user');

Router.post('/login',function(req, res){
	console.log('request', req.body);
	const { userName, passWord } = req.body
	// User.remove({},function(e,d){})
	User.findOne({userName: userName},function(err,doc){
		if(!err) {
			console.log(doc);
			if(doc && doc.passWord === passWord) {
				res.cookie('userId', doc._id)
				return res.json({code:200,msg:'登陆成功',data:doc})
			} else if (doc && doc.passWord !== passWord) {
				return res.json({code:201,msg:'用户密码错误'})
			} else if (doc === null) {
				return res.json({code:201,msg:'该用户尚未注册'})
			}
		}else{
			console.log(err)
			return res.json({code:302,data:doc})
		}
	})
})

Router.post('/register', function(req, res){
	const { userName, passWord } = req.body
	User.findOne({userName}, function(err, doc){
		if(doc) {
			return res.json({code:1,msg:'用户名重复'})
		}
	})
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