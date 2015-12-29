function Evaluate(target) {


    //コンテンツの結果に関する初期設定
    var result_obj ={
	result:false,
	message:document,
	feedback:""
    };

    //コンテンツの評価を行う
    if (target["arrow2"] == "drag3"){
	if (target["arrow1"] == "drag1"){
	    result_obj.result = true;
	}
    }
    
    return result_obj;
}
