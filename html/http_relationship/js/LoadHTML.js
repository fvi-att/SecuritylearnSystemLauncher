/*

author: fvi-att
purpose: コンテンツを動的にjavascriptのみで生成するため
ver 0.1

*/

function LoadHTML(element,url) {
    $.ajax({
	type:'GET',
	url:url,
	dataType:'HTML',
	timeout : 360000,

	onSuccess : function(request) {
	    element.html("<p>データ取得成功</p>");
	    return true;
	},
	onFailure : function(request) {
	    element.html("<p>読み込みに失敗しました</p>");
	    return false;
	},
	onException : function(request) {
	    element.html("<p>読み込みに失敗しました</p>");
	}
    });
}
