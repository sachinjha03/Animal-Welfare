const express = require('express');
const router = express.Router();
const query = require("../models/query");


router.post("/query" , async(req,res) => {
    try{
        const addQuery = new query({
            name: req.body.name,
            contact : req.body.contact,
            email : req.body.email,
            queryType : req.body.queryType,
            query : req.body.query
        })
        const response = await addQuery.save();
        res.status(200).json({success:true , data:response})
    }catch(err){
        res.status(500).json({success:false , reason : err})
    }
})

module.exports = router;