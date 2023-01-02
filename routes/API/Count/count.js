const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
    if(req.session.count){
        req.session.count = req.session.count + 1
        req.session.save((err)=>{
            if(err) next(err)
            res.json(req.session.count)
        })
    }else{
        req.session.regenerate((err)=>{
            if(err) next(err)
            req.session.count = 1
            req.session.save((err)=>{
                if(err) next(err)
                res.json(req.session.count)
            })
        })
    }
})

module.exports = router