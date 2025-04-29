const express = require('express');
const ip =require('ip');
const app= express();

app.get('/ping',(req,res)=>{
  return res.json({message:"pong"
  , serveraddress : ip.address()

  });
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
}) 

