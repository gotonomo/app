
$(document).on("pageinit",function(){
$.post("http://202.116.161.73:6391/query/Sys_GetMyHomeWorkDetailByID",//通过作业ID获取作业详细信息
    {
	  //参数
      strUserNumber:localStorage.getItem("number"),
      strSession:sessionStorage.getItem("sess"),
	  homeworkID:sessionStorage.getItem("woid")
    },
	//回调函数
    function(data,status)
    {
		$("#table-courses-body").append(
			'<tr><th data-id="'+data.result[0]+'">'+data.result[0]+'</th>'+
			'<td>'+data.result[1]+'</td>'+
			'<td>'+data.result[2]+'</td>'+
			'<td>'+data.result[3]+'</td>'+
			'<td>'+data.result[4]+'</td>'+
			'<td>'+data.result[5]+'</td>'+
			'<td>'+data.result[6]+'</td>'+
			'<td>'+data.result[7]+'</td>'+
			'<td>'+data.result[8]+'</td>'+
			'<td>'+data.result[9]+'</td>'+
			'<td>'+data.result[10]+'</td></tr>'
		);
	}
    //返回类型
	,"json");
})