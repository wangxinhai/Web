
var express=require("express");  //引入模块
var path=require("path");   
var app=express();     
var router=require("./router");
app.use("/",router);
app.use(express.static(path.join(__dirname)));
app.listen(3000);