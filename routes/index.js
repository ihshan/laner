/*
 * GET home page.
 */

var note = require('../controllers/note'),
    site = require('../controllers/site');

exports.index = function(req, res){
};

/**
 * 给模块本身赋值
 * module.exports是require返回真正的东东。
 * exports.xxx只是一种helper，他最后所有的东西都将赋值给module.exports。
 */
module.exports = function(app){
	// 参数1是GET的URL地址
	// 参数2是控制器地址
	app.get('/', site.index);
	app.get('/add_note', note.add);	
};
