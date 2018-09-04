var express = require('express');
var app = express();

app.get('/api/example', (req, res, next)=> {
    res.json({user: "huy", name: "manh huy"})
})

app.use(express.static("client/dist"))

app.listen(process.env.PORT || 3000, ()=> {
    console.log("server running on port 3000")
})
