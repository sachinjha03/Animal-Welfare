const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/animal-welfare").then(() => {
    console.log("Connected to database successfully");
}).catch((err) => {
    console.log("Failed to connect with backend : " + err);
})