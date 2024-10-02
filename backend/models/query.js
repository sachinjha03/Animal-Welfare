const mongoose = require('mongoose')

const querySchema = new mongoose.Schema({
    name:String,
    contact : Number,
    email : String,
    queryType : String,
    query : String
})

const queryModel = new mongoose.model("Query" , querySchema);

module.exports = queryModel;