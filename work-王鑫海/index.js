var express=require("express");
var router=require("./router");
var path=require("path");
var app=express();
app.use("/hello",router);
app.use(express.static(path.join(__dirname)));
app.listen(1234);

