const express = require('express');
const app=express();
const port=process.env.PORT || 8000;
const data=require('./quotes.json')

const cors=require('cors');
app.use(cors());

app.get('/',(req,res)=>{
    var min=1;
    var max=30;
    var diff=max-min;
    var rand=Math.random();
    rand=Math.floor(rand*diff);
    rand=rand+min;
    var x=""+rand;
    res.send(
        [
            {
                "quote":data[0][x]
            }
        ]
    )
});

app.listen(port);