
//配置路由
var express=require("express");
var router=express.Router();  //引入路由模块！
router.get("/a",function(req,res){
	res.send("我是路由1号！")
});

router.get("/a/b",function(req,res){
	res.send("我是路由2号！")
});

router.get("/b",function(req,res){
	return res.redirect("../建桥学院/index.html")
});

module.exports=router;
