const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

// 各个模块router中中间件的用法
const userRouter = require('./user')
app.use('/user', userRouter)


// const mongoose = require('mongoose')

// const DB_URL = 'mongodb://localhost:27017'

// mongoose.connect(DB_URL)

// mongoose.connection.on('connected', function(){
//     console.log(123)
// })

// // 新建类似于mysql的表
// const User = mongoose.model('user', new mongoose.Schema({
//     name: {type: String, require: true},
//     age: {type: Number, require: true}
// }))

// User.create({
//     name: '123',
//     age: 18
// }, function(err, doc){
//     if(!err) {
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// app.get('/', function(req,res){
//     res.send('hello121121')
// })

// User.remove({age:18},function(err, doc){
//     console.log(doc)
// });

// app.get('/data', function(req,res) {
//     User.find({name: '123'}, function(err,doc) {
//         return res.json(doc);
//     })
// })



// app.get('delete', function(req,res){
//     User.
// })

app.listen('9093', function() {
    console.log('第一个后台服务');
})