const express=require('express');

const hostname="localhost";
const port= 3001;

const app=express();

app.use(function(req,res,next){
    console.log(req.url);
    console.log(req.method);
    console.log(req.path);
    console.log(req.query.id);

    if(req.method!="GET"){
        res.type('.html');
        var msg="<html><body>This server only serves web pages with GET!</body></html>";
        res.end(msg);
    }else{
        next();
    }
});

app.use(express.static('./public/'));

app.listen(port,hostname,function() {
    console.log(`Server hosted at http://${hostname}:${port}`);
});