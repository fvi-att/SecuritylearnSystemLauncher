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
		alert("you run step1");

	    }},
	    {id:"arrow1", action:function() {
	    }},
	    {id:"drop2", action:function() {
	    }},
	    {id:"arrow2",action:function() {
	    }},
	    {id:"drop3", action:function() {
	    }},
	    {id:"arrow3", action:function() {
	    }},
	    {id:"drop2", action:function() {
	    }},
	    {id:"arrow4", action:function() {
	    }},
	    {id:"drop1", action:function() {
	    }},   
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
    if (target["arrow2"] == "drag3"){

	//SQLを選択する部分を間違えている
	result_obj.feedback = "<img class='result-icon' src='../images/mark_batsu.png' alt='不正解です'><p>データベースからデータを取り出すためには何が必要でしょうか？</p>";
	
	if (target["arrow1"] == "drag1"){
	    result_obj.result = true;
	    result_obj.feedback = '<img class="result-icon" src="../images/mark_maru.png" alt="正解です"><p>正解です！　これであなたはSQLインジェクションの仕組みを把握しました。</p><a href="sqli_principle_1.html">解説ページへ</a>';
	}
    }
    
    return result_obj;
}
