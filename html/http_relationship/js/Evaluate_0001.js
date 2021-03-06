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
	     ,feedback:"feedback/exercise01/http_wrong.html"},
	    
	    {id:"arrow1", action:function() {
		//id=arrow1の処理が通過するとき、このfunction内の処理が実行されます
	    }, evaluate:function(){
		if(target["arrow1"] == "drag1"){return true;}else{return false;}
	    },feedback:"feedback/exercise01/http_wrong.html"},
	    
	    {id:"drop2", action:function() {
		//id=drop2の処理が通過するとき、このfunction内の処理が実行されます
	    }, evaluate:function(){return true;},feedback:"feedback/exercise01/http_wrong.html"},
	    
	    {id:"arrow2",action:function() {
		//id=arrow2の処理が通過するとき、このfunction内の処理が実行されます
	    }, evaluate:function(){if(target["arrow2"] == "drag2") {return true;}else{return false;}
	      },feedback:"feedback/exercise01/http_wrong.html"},
	    
	    {id:"drop1", action:function() {
		//id=drop3の処理が通過するとき、このfunction内の処理が実行されます
	    }, evaluate:function(){return true;},feedback:"feedback/exercise01/correct.html"},
	]
    }

    return process_obj;
}
