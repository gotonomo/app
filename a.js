//点击后的事件
$(document).on("pageinit",function(){
	//将数据POST到JSON接口
	$.post(
		"http://202.116.161.73:6391/query/Sys_GetMyCourseDetail",
    	{//参数
      		strUserNumber:localStorage.getItem("number"),
      		strSession:sessionStorage.getItem("sess")
    	},//回调函数
    	function(data,status){//显示数据
        	leng=data.result.length;//获取result数组长度
			for(i=0;i<leng;i++){
		  		$("#table-courses-body").append(
					'<tr><th data-id="'+data.result[i][0]+'">'+data.result[i][0]+'</th>'+
					'<td>'+data.result[i][1]+'</td>'+
					'<td>'+data.result[i][2]+'</td>'+
					'<td>'+data.result[i][3]+'</td>'+
					'<td>'+data.result[i][4]+'</td></tr>'
				);
			}
    	}
      	//返回类型
		,"json"
	);
})
