const express =require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.send('Genres Get entry point');
});

router.post('/', (req,res)=>{
    res.send('Genres Post entry point');
});

router.put('/', (req,res)=>{
    res.send('Genres Put entry point');
});

router.delete('/', (req,res)=>{
    res.send('Genres Delete entry point');
});

module.exports = router;