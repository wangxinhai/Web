var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   // res.render('index', { title: 'Express' });
//res.send("这是我的默认页面！")
    return res.redirect("/Test_html.html")
});

module.exports = router;
