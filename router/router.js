var express=require("express");

var router=express.Router();
router.get("/",function(req,res){
	res.send("<h1>这是我的首页</h1>");
});
router.get("/a",function(req,res){
	res.send("这是我的A页面")
	
});
router.get("/b",function(req,res){
	res.send("<a href='/baidu.html'>点击文档</a>")
});
router.get("/a/b",function(req,res){
	res.send("<a href='/1.jpg'>点击图片</a>")
});

module.exports=router;




