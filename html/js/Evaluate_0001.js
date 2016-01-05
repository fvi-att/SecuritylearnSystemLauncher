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
	result_obj.feedback = "<p>データベースからデータを取り出すためには何が必要でしょうか？</p>";
	
	if (target["arrow1"] == "drag1"){
	    result_obj.result = true;
	    result_obj.feedback = '<p>これで全てのレクチャーは修了です！お疲れ様でした！　アンケートは必ず答えてください！</p><a href="questionaries.html">アンケートを応える</a>';
	}
    }
    
    return result_obj;
}
