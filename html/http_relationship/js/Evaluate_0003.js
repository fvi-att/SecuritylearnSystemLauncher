/*
擬似デバッガシステムの動きを定義するオブジェクトの生成
processの内部要素の順列にそって実行されます
idはどの要素をアクティブにして動作させるか
actionはその要素でどのような動作を行うかを提議させます
*/
function getDebuggerProcess(target) {

    var process_obj = {


	process:[
	    {id:"drop1", action:function(){
		//id=drop1の処理が通過するとき、このfunction内の処理が実行されます
		
	    }, evaluate:function(){return true;}
	     ,feedback:"feedback/exercise02/http_wrong.html"},
	    
	    {id:"drag1", action:function() {
		//id=arrow1の処理が通過するとき、このfunction内の処理が実行されます
		$("#scope1" ).css('border-color','red');
		$("#scope1").css('border-width','5px');
	    }, evaluate:function(){return true;},feedback:"feedback/exercise02/http_wrong.html"},
	    
	    {id:"drop2", action:function() {
		//id=drop2の処理が通過するとき、このfunction内の処理が実行されます
		　　$("#scope1").css('border-color','blue');
		　　$("#scope1").css('border-width','2px');
	    }, evaluate:function(){return true;},feedback:"feedback/exercise02/http_wrong.html"},
	    
	    {id:"drag3",action:function() {
		//id=arrow2の処理が通過するとき、このfunction内の処理が実行されます
		$("#scope2" ).css('border-color','red');
		$("#scope2").css('border-width','5px');
	    }, evaluate:function(){return true;},feedback:"feedback/exercise02/http_wrong.html"},
	    
	    {id:"drop3", action:function() {
		//id=drop3の処理が通過するとき、このfunction内の処理が実行されます
		$("#scope2").css('border-color','blue');
		$("#scope2").css('border-width','2px');
	    }, evaluate:function(){return true;},feedback:"feedback/exercise02/correct.html"},

	    {id:"drag6",action:function() {
		//id=arrow3の処理が通過するとき、このfunction内の処理が実行されます
		$("#scope3" ).css('border-color','red');
		$("#scope3").css('border-width','5px');
	    }, evaluate:function(){return true; },feedback:"feedback/exercise02/http_wrong.html"},

	    {id:"drop2", action:function() {
		//id=drop2の処理が通過するとき、このfunction内の処理が実行されます
		$("#scope3").css('border-color','blue');
		$("#scope3").css('border-width','2px');
	    }, evaluate:function(){return true;},feedback:"feedback/exercise02/http_wrong.html"},

	    {id:"drag2",action:function() {
		//id=arrow4の処理が通過するとき、このfunction内の処理が実行されます
		$("#scope4" ).css('border-color','red');
		$("#scope4").css('border-width','5px');
	    }, evaluate:function(){return true;},feedback:"feedback/exercise02/http_wrong.html"},

	    {id:"drop1", action:function() {
		//id=drop1の処理が通過するとき、このfunction内の処理が実行されます
		$("#scope4").css('border-color','blue');
		$("#scope4").css('border-width','2px');
	    }, evaluate:function(){return true;},feedback:"feedback/exercise02/correct.html"},

	    
	]
    }

    return process_obj;
}
