const express = require('express');
const Router = express.Router();
const model = require('./model.js');
const cusInfo = model.getModule('cusInfo');


Router.post('/addCus', function(req, res){
	let param = {
		name: req.body.name,
		age: req.body.age,
		address: req.body.address,
		description: req.body.description
	}
	cusInfo.create(param , function(err, doc){
		if(!err) {
			console.log(doc)
			return res.json({code:200,data:doc})
		}else{
			console.log(err)
			return res.json({code:302,data:doc})
		}
	})
})



module.exports = Router;


