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
	    }, evaluate:function(){return true;}
	     ,feedback:"feedback/exercise02/http_wrong.html"},
	    
	    {id:["arrow1"], action:function() {
		//id=arrow1の処理が通過するとき、このfunction内の処理が実行されます
	    }, evaluate:function(){
		if(target["arrow1"] == "drag1"){return true;}else{return false;}
	    },feedback:"feedback/exercise02/http_wrong.html"},
	    
	    {id:["drop2"], action:function() {
		//id=drop2の処理が通過するとき、このfunction内の処理が実行されます
	    }, evaluate:function(){return true;},feedback:"feedback/exercise02/http_wrong.html"},
	    
	    {id:["arrow2"],action:function() {
		//id=arrow2の処理が通過するとき、このfunction内の処理が実行されます
	    }, evaluate:function(){if(target["arrow2"] == "drag3") {return true;}else{return false;}
	      },feedback:"feedback/exercise02/http_wrong.html"},
	    
	    {id:["drop3"], action:function() {
		//id=drop3の処理が通過するとき、このfunction内の処理が実行されます
	    }, evaluate:function(){return true;},feedback:"feedback/exercise02/correct.html"},

	    {id:["arrow3"],action:function() {
		//id=arrow3の処理が通過するとき、このfunction内の処理が実行されます
	    }, evaluate:function(){if(target["arrow3"] == "drag6") {return true;}else{return false;}
	      },feedback:"feedback/exercise02/http_wrong.html"},

	    {id:["drop2"], action:function() {
		//id=drop2の処理が通過するとき、このfunction内の処理が実行されます
	    }, evaluate:function(){return true;},feedback:"feedback/exercise02/http_wrong.html"},

	    {id:["arrow4"],action:function() {
		//id=arrow4の処理が通過するとき、このfunction内の処理が実行されます
	    }, evaluate:function(){if(target["arrow4"] == "drag2") {return true;}else{return false;}
	      },feedback:"feedback/exercise02/http_wrong.html"},

	    {id:["drop1"], action:function() {
		//id=drop1の処理が通過するとき、このfunction内の処理が実行されます
	    }, evaluate:function(){return true;},feedback:"feedback/exercise02/correct.html"},

	    
	]
    }

    return process_obj;
}
