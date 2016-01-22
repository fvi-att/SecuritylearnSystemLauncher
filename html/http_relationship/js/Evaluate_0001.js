/*
擬似デバッガシステムの動きを定義するオブジェクトの生成
processの内部要素の順列にそって実行されます
idはどの要素をアクティブにして動作させるか
actionはその要素でどのような動作を行うかを提議させます
*/
function getDebuggerProcess() {

    var process_obj = {
	process:[
	    {id:"drop1", action:function(){


	    }},
	    {id:"arrow1", action:function() {
	    }},
	    {id:"drop2", action:function() {
	    }},
	    {id:"arrow2",action:function() {
	    }},
	    {id:"drop3", action:function() {
	    }}
	]
    }

    return process_obj;
}





function Evaluate(target) {


    //コンテンツの結果に関する
    var result_obj ={
	result:false,
	message:document,
	feedback:""
    };

        
    //ユーザの解答に対して評価を行う
    //２問とも不正解の場合、HTTPとにおけるぶらうざとサーバの役割が理解できていない
    result_obj.feedback ="feedback/exercise01/http_wrong.html";
    if (target["arrow2"] == "drag2"){

	//SQLを選択する部分を間違えている
	result_obj.feedback = "feedback/exercise01/sql_wrong.html";
	
	if (target["arrow1"] == "drag1"){
	    result_obj.result = true;
	    result_obj.feedback = 'feedback/exercise01/correct.html';
	}
    }
    
    return result_obj;
}
