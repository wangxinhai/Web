
//nodejs调用mongodb操作数据库！
/*
 * 1.引入所需模块
 * 2.打开数据库       1)创建连接池    2)获取连接    3)连接数据库
 * 3.操作！ 增删改查
 * 4.释放链接!
 */
var mongo=require("mongodb");
var assert=require("assert");
var MongoClient=mongo.MongoClient;

var Urls="mongodb://localhost:27017/test";   //服务名字:// 主机名称:端口号/连接的数据库
MongoClient.connect(Urls,function(err,db){  //MongoClient.connect ==》连接数据库  ; db ==》 获取到的链接
	assert.equal(err,null);      //拿着获取到的链接 ==》连接数据库，操作数据
	
	//修改
//	db.collection("op").update({"name":"皮皮虾2"},{$set:{"爱好":"泡妹纸"}},function(err,result){
//		assert.equal(err,null);
//		console.log(result);
//		console.log("关闭数据库!")
//		db.close();
//	})

    //删除
//  db.collection("op").deleteOne({"name":"皮皮虾7"},function(err,data){
//  	assert.equal(err,null);
//  	console.log(data);
//  	db.close();
//  })
    
    //增加
//  db.collection("op").insert({"name":"喵喵","age":66,"技能":"萌萌哒"},function(err,data){
//  	assert.equal(err,null);
//  	console.log(data);
//  	console.log("关闭数据库!");
//  	db.close();  //关闭数据库！！
//  })
    //查询
    db.collection("op").find({"age":{"$gt":4}}).toArray(function(err,data){
		assert.equal(err,null);
		console.log(data);
		db.close();
	});
	
	
})





