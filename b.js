
$(document).on("pageinit",function(){
$.post("http://202.116.161.73:6391/query/Sys_GetMyCourseIDs",
    {
	  //参数
      strUserNumber:localStorage.getItem("number"),
      strSession:sessionStorage.getItem("sess")
    },
	//回调函数
    function(data,status)
    {
	leng=data.result.length;//获取result数组长度
	for(i=0;i<leng;i++){
		$("ul").append(
		'<li data-id='+data.result[i]+'><a href="#" ><h2><center>'+data.result[i]+'</center></h2></a></li>'
		)}
		$("ul li").click(function(){
			courses_test($(this));
			return false;
		});
	$("ul").listview( "refresh" );
	}
    //返回类型
	,"json");
})
var courses_test = function(obj){
	sessionStorage.setItem("coid",obj.data('id'))//存课程编号
	console.log('课程编号是：' + obj.data('id'));
	window.location.href="b2.html";
};