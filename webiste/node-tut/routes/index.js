const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('login',{
        layout: 'login'
    })
})

router.get('/dashboard', (req,res)=>{
    res.redner('dashboard')
})



module.exports = router