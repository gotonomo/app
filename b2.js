
$(document).on("pageinit",function(){
$.post("http://202.116.161.73:6391/query/Sys_GetMyCourseDetailByID",
    {
	  //参数
      strUserNumber:localStorage.getItem("number"),
      strSession:sessionStorage.getItem("sess"),
	  courseID:sessionStorage.getItem("coid")
    },
	//回调函数
    function(data,status)
    {
		$("#table-courses-body").append(
			'<tr><th data-id="'+data.result[0]+'">'+data.result[0]+'</th>'+
			'<td>'+data.result[1]+'</td>'+
			'<td>'+data.result[2]+'</td>'+
			'<td>'+data.result[3]+'</td>'+
			'<td>'+data.result[4]+'</td></tr>'
		);
	}
    //返回类型
	,"json");
})