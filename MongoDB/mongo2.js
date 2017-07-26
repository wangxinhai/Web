

var mongo=require("mongodb");
var assert=require("assert");
var MongoClient=mongo.MongoClient;
var Urls="mongodb://localhost:27017/test";
//封装删除操作!
var deletes=function(db,collections){
	db.collection(collections).deleteOne({"name":"皮皮虾5"},function(err,data){
		assert.equal(err,null);
		console.log("删除成功!!!")
	})
};

//封装修改操作!
var deletes=function(db,collections){
	db.collection(collections).update({"name":"皮皮虾2"},{$set:{"爱好":"打架"}},function(err,data){
		assert.equal(err,null);
		console.log("修改成功!!!")
	})
};

//封装增加操作!
var deletes=function(db,collections){
	db.collection(collections).insert({"name":"皮皮虾6","age":20,"技能":"逃跑"},function(err,data){
		assert.equal(err,null);
		console.log("增加成功!!!")
	})
};

//封装查询操作!
var deletes=function(db,collections){
	db.collection(collections).find({"age":{$gt:8}}).toArray(function(err,data){
		assert.equal(err,null);
		console.log(data);
		console.log("查询成功!!!")
	})
};


MongoClient.connect(Urls,function(err,db){
	assert.equal(err,null);
	deletes(db,"op");
	db.close();
})


