const mongoose = require('mongoose')

// 数据库链接的地址
const DB_URL = 'mongodb://localhost:27017'

mongoose.connect(DB_URL);

const models = {
    user: {
        'userName':{ type: String, 'required':true},
        'passWord':{ type: String, 'required': true}
    }
}

for(let key in models){
    mongoose.model(key, mongoose.Schema(models[key]))
}

module.exports = {
    getModule: function(name){
        return mongoose.model(name);

    }
}