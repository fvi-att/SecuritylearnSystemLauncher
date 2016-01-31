/*
擬似デバッガシステムの動きを定義するオブジェクトの生成
processの内部要素の順列にそって実行されます
idはどの要素をアクティブにして動作させるか
actionはその要素でどのような動作を行うかを提議させます
*/
function getDebuggerProcess(target) {

    var process_obj = {


	process:[
	    {id:["drop1"], action:function(){
		//id=drop1の処理が通過するとき、このfunction内の処理が実行されます
		$("#scope-input1").text("id="+$("#psuedo-loginform [name=id-form]").val()+"&password="+$("#psuedo-loginform [name=pw-form]").val());
		$("#scope-input1").fadeOut(200,function(){$(this).fadeIn(200)});
		
	    }, evaluate:function(){return true;}
	     ,feedback:"feedback/exercise01/http_wrong.html"},
	    
	    {id:["drag1","scope1"], action:function() {
		//id=arrow1の処理が通過するとき、このfunction内の処理が実行されます
		
	    }, evaluate:function(){return true;},feedback:"feedback/exercise01/http_wrong.html"},
	    
	    {id:["drop2"], action:function() {
		//id=drop2の処理が通過するとき、このfunction内の処理が実行されます
		$("#scope-input2").text("ID='" + $("#psuedo-loginform [name=id-form]").val() + "' AND PASSWORD='" + $("#psuedo-loginform [name=pw-form]").val()+"'");
	    }, evaluate:function(){return true;},feedback:"feedback/exercise01/http_wrong.html"},
	    
	    {id:["drag3","scope2"],action:function() {
		//id=arrow2の処理が通過するとき、このfunction内の処理が実行されます

	    }, evaluate:function(){
	        var form_id = $("#psuedo-loginform [name=id-form]").val();
		var form_pw = $("#psuedo-loginform [name=pw-form]").val();
		if(!form_pw.match(/';--OR1=1/)){return true;}else{
	        if(!form_pw.match(/'/)){return false;}
		if(!form_pw.match(/;/)){return false;}
		if(!form_pw.match(/--/)){return false;}
		    return true;
		}},
	     feedback:function(){
		 var form_id = $("#psuedo-loginform [name=id-form]").val();
		 var form_pw = $("#psuedo-loginform [name=pw-form]").val();

		 if(!form_pw.match(/'/)){return  "feedback/exercise01/quote_not_found.html"}
		 if(!form_pw.match(/;/)){return "feedback/exercise01/sql_not_end.html"}
		 if(!form_pw.match(/--/)){return "feedback/exercise01/comment_not_found"}
	
	     }},
	    
	    {id:["drop3"], action:function() {
		//id=drop3の処理が通過するとき、このfunction内の処理が実行されます

	    }, evaluate:function(){return true;},feedback:"feedback/exercise01/correct.html"},

	    {id:["drag6","scope3"],action:function() {
		//id=arrow3の処理が通過するとき、このfunction内の処理が実行されます
		var form_id = $("#psuedo-loginform [name=id-form]").val();
		var form_pw = $("#psuedo-loginform [name=pw-form]").val();
		
		if(form_id == "admin" && form_pw.match(/'OR 1=1;--/)) {$("#scope-input3").text("{user_id:'admin'}");}
		   else {
		       $("#scope-input3").text("{user_id:''}");
		   }

	    }, evaluate:function(){return true;},feedback:"feedback/exercise01/http_wrong.html"},

	    {id:["drop2"], action:function() {
		//id=drop2の処理が通過するとき、このfunction内の処理が実行されます
		
	    }, evaluate:function(){
	        var form_id = $("#psuedo-loginform [name=id-form]").val();
	        if(form_id != "admin"){return false;}},feedback:"feedback/exercise01/login_fail.html",

	    {id:["drag2","scope4"],action:function() {
		//id=arrow4の処理が通過するとき、このfunction内の処理が実行されます
		$("#scope-input4").text("こんにちは"+$("#psuedo-loginform [name=id-form]").val()+ "様");
	    }, evaluate:function(){
		var id_form = $("#psuedo-loginform [name=id-form]").val();
		var pw_form = $("#psuedo-loginform [name=id-form]").val();
		if (id_form == "admin" && pw_form.match(/'OR 1=1;--/)){return true;}else{return false;}},feedback:"feedback/exercise01/http_wrong.html"},

	    {id:"drop1", action:function() {
		//id=drop1の処理が通過するとき、このfunction内の処理が実行されます
		$("#psuedo-browser-content").html("<h1>ログイン完了！</h1><p>こんにちは"+$("#psuedo-loginform [name=id-form]").val()+ "様</p>");
	    }, evaluate:function(){return true;},feedback:"feedback/exercise01/correct.html"},

	    
	]
    }

    return process_obj;
}
