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


    //汎用的不正解に対するフィードバック
    result_obj.feedback = "<img class='result-icon' src='../images/mark_batsu.png' alt='不正解です'><p>(##要詳細##)まだそれぞれの間に流れる情報について学習しきれていないようです。以下のサイトを参考に調査を行ってみましょう。<a href='#'>リンク１</a><a href='#'>リンク2</a></p>";
    
    //ユーザの解答に対して評価を行う
    if (target["arrow2"] == "drag3"){

	//SQLを選択する部分を間違えている
	result_obj.feedback = "<img class='result-icon' src='../images/mark_batsu.png' alt='不正解です'><p>Hint:データベースからデータを取り出すためには何が必要でしょうか？</p>";
	
	if (target["arrow1"] == "drag1"){
	    //正解フラグを立てる
	    result_obj.result = true;
	    result_obj.feedback = '<img class="result-icon" src="../images/mark_maru.png" alt="正解です"><p>おめでとうございます！これで、あなたはウェブアプリケーション上のシステムに対する流れの大枠を学習しました。</p><a href="lecture2.html">解説へ</a>';
	}
    }
    
    return result_obj;
}
