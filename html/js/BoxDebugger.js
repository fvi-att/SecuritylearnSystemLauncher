// intilized nums
  var user_answers = new Object();
  var process_step_cnt = 0;


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
    //alert(user_answers.toSource());
    
  }});



  /* 擬似デバッガを操作*/
  $("#btn_start").click(function(){
  process_obj = getDebuggerProcess();
  processes = process_obj["process"];

  /*変更している部分を表示する　*/
$("#" + processes[process_step_cnt]["id"] ).css('border-color','red');
$("#" + processes[process_step_cnt]["id"] ).css('border-width','5px');

/*擬似デバッガ内での処理を行うステップ */
processes[process_step_cnt]["action"]();


if (process_step_cnt > 0){
$("#" + processes[process_step_cnt -1]["id"] ).css('border-color','blue');
$("#" + processes[process_step_cnt -1]["id"] ).css('border-width','2px');
}
  process_step_cnt++;
　
　$("#step_cnt").text(process_step_cnt);

  //各要素の一括評価
  if(process_step_cnt >= processes.length) {
    Evaluate_once();
  }


  });


  /* arrowの中身が正解かどうか評価を行う　*/
 function Evaluate_once() {
  //外部モジュール　Evaluate_xxxx.js内のEvaluateメソッドを用いて評価を行う
  result_obj = Evaluate(user_answers);

 

  if(result_obj.result) {
    //正解の時

    $("#right_message").load(result_obj.feedback);
    $("#correct-popup").show();

  }else{
//不正解の時
    $("#right_message").load(result_obj.feedback);
    $("#incorrect-popup").show();

  }
  }


});
