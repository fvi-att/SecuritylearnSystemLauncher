/*
このjavascriptはwebSQLを使えるようにすることで、学習者が提供したSQLが実行できるかどうか検証を行うことができるようにする
スクリプトです

author : fvi-att
version :1.00
since:2016/01

*/


$(function(){
    var dbName = 'Test1';
    var version = '1.0';
    var displayName = 'Test1';
    var estimatedSize = 65536;

    function createTableIfNotExists(){
	var db = openDB();
	db.transaction( function(trans){
	    trans.executeSql( 'CREATE TABLE IF NOT EXISTS meibo ' + '( id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' + ' name TEXT NOT NULL,' + ' email TEXT NOT NULL);' );
	});
    }

    function insertData(){
	var db = openDB();
	db.transaction( function(trans){
	    trans.executeSql( 'INSERT INTO meibo (name, email) ' + 'VALUES ("Ichiro","ichiro@example.com");' ); } );
    }

    function getData(){
	var db = openDB();
	db.transaction( function(trans){
	    trans.executeSql( 'SELECT * FROM meibo;', [], function(trans, r){
		for(var i=0; i<r.rows.length; i++){
		    alert( 'id=' + r.rows.item(i).id + ' name=' + r.rows.item(i).name + ' email=' + r.rows.item(i).email );
		}
	    }
			    );
	} ); }

    function openDB(){ return openDatabase( dbName, version, displayName, estimatedSize); }


    $('#button1').click(function(){ createTableIfNotExists(); });
    $('#button2').click(function(){ insertData(); });
    $('#button3').click(function(){ getData(); });


});


