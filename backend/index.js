const express = require('express');
const port = 9999;
const userRoute = require("./routes/user");
const app = express();

app.get("/", function(req, res){
    res.status(403).send("<h1 style='justify-content:center;;height:100%;display:flex;align-items:center;'>I Am Sorry, You Can't Access This Page.</h1>");
});
app.get("/check", (req,res) => {
    res.send(200);
});

app.use('/user',userRoute);

app.listen(port, '192.168.0.197', () => console.log(`Server telah dijalankan di port ${port}`));