function Evaluate(target) {


    //コンテンツの結果に関する
    var result_obj ={
	result:false,
	message:document,
	feedback:'<p>これはフィードバックです</p><a href="index.html">次へいく</a>'
    };

    //ユーザの解答に対して評価を行う
    if (target["arrow1"] == "drag1"){
	    result_obj.result = true;
	
    }else {
	result_obj.result = false;
	result_obj.feedback = "最初にやることは何でしょう？";
    }
    return result_obj;
}
