function Evaluate(target) {


    //コンテンツの結果に関する
    var result_obj ={
	result:false,
	message:document,
	feedback:""
    };

    //ユーザの解答に対して評価を行う
    if (target["arrow1"] == "drag1"){
	    result_obj.result = true;
	
    }
    
    return result_obj;
}
