const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: "redis-server"
});

app.get('/', (req,res,)=> {

    client.get('vists' , (err,visits)=>{
        res.send('No of visitors is '+ visits );
        client.set(visits , parseInt(visists)+1);
    });
});

app.listen(8080 ,() => {
    console.log('listening on 8080');
});