var express = require('express');
var app = express();

app.get('/url', (req, res, next)=> {
    res.json(["a", "b","c"])
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log("server running on port 3000")
})
