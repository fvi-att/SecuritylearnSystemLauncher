// intilized nums
  var user_answers = new Object();
  var process_step_cnt = 0;
  var result_flag = true;



$(function() {
// 1ドラッグ＆ドロップ機能を実装
  $(".dragbox").draggable();
  $(".drop").droppable({
    drop: function(e,ui) {
     
    }
   });
　$(".arrow").droppable({
     drop: function(e,ui){

    user_answers[$(this).attr("id")] = ui.draggable.attr("id");

    
  }});



/* 擬似デバッガを操作*/
$("#btn_start").click(function(){

    if (!result_flag) {

	return;
    }
    
  process_obj = getDebuggerProcess(user_answers);
  processes = process_obj["process"];


    for (var arr=0; arr < processes[process_step_cnt]["id"].length; arr++){ 

  /* 変更している部分を表示する　*/
$("#" + processes[process_step_cnt]["id"][arr] ).css('border-color','red');
$("#" + processes[process_step_cnt]["id"][arr] ).css('border-width','5px');


　


    }

 /* 前のステップの部分を青で表示するようにする */
if (process_step_cnt > 0){
    for(var arr_pre=0; arr_pre < processes[process_step_cnt -1]["id"].length; arr_pre++){
	$("#" + processes[process_step_cnt -1]["id"][arr_pre]).css('border-color','blue');
	$("#" + processes[process_step_cnt -1]["id"][arr_pre]).css('border-width','2px');
    }
}
	

/*擬似デバッガ内での処理を行うステップ */
processes[process_step_cnt]["action"]();



/*フィードバックを返すかどうかの処理 */
if (!processes[process_step_cnt]["evaluate"]() || (process_step_cnt == processes.length -1)) {

    //feedback
    $("#right_message").load(processes[process_step_cnt]["feedback"]);

    //間違っていた時はブロックにびっくりを追加
    if(!processes[process_step_cnt]["evaluate"]()){
	$("#" +user_answers[processes[process_step_cnt]["id"]]).html("<img src='../images/bikkuri.png'>");
    }
    
    result_flag = false;
}


//ステップを進める
process_step_cnt++;

//ステップ数の表示
$("#step_cnt").text(process_step_cnt);


});
// 擬似デバッガステップ終了




});
