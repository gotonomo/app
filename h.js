$(document).on("pageinit",function(){
$.post("http://202.116.161.73:6391/query/Ext_File_QueryMyFiles",
    {//参数
      strUserNumber:localStorage.getItem("number"),
      strSession:sessionStorage.getItem("sess")
    },//回调函数
    function(data,status)
    {
		console.log(data.result);
		leng=data.result.length;//获取result数组长度
		for(i=0;i<leng;i++){
				$("#table-courses-body").append(
					'<tr><td>'+data.result[i][0]+'</td>'+
					'<td>'+data.result[i][1]+'</td>'+
					'<td>'+data.result[i][2]+'</td>'+
					'<td>'+data.result[i][3]+'</td>'+
					'<td>'+data.result[i][4]+'</td>'+
					'<td>'+data.result[i][5]+'</td>'+
					'<td><a data-id="'+data.result[i][0]+'" href="#">删除文件</a></td></tr>'
				);
		}
		$("#table-courses-body a").click(function(){
		courses_test($(this));
		return false;
	});
	}
      //返回类型
	,"json");
})

//删除文件
var courses_test = function(obj){
	$.post("http://202.116.161.73:6391/query/Ext_File_DeleteFile",
		{//参数
		  strUserNumber:localStorage.getItem("number"),
		  strSession:sessionStorage.getItem("sess"),
		  iFileID:obj.data('id')
		},//回调函数
		function(data,status)
		{
			alert(data.result);
		}
		//返回类型
		,"json");
	//window.location.reload();
};

var reader = new FileReader();

function uploadAndSubmit() { 
	var form = document.forms["demoForm"]; 

	if (form["file"].files.length > 0) { 
 		// 寻找表单域中的 <input type="file" ... /> 标签
 		var file = form["file"].files[0]; 
 		// try sending 
 		var reader = new FileReader(); 	 

		reader.onloadend = function() { 
   			// 这个事件在读取结束后，无论成功或者失败都会触发
		    if (reader.error) { 
		    	console.log(reader.error); 
		    } else { 
   				console.log('Name: ' + file.name); //file.name 是文件名
   				console.log(window.btoa(reader.result)); //window.btoa(reader.result) 文件的base64编码
				
				//上传文件
				remarkmes=$("#remark").val();
				$.ajax({
					url: "http://202.116.161.73:6391/query/Ext_File_UploadFile",
					//contentType: "multipart/form-data; charset=UTF-8",
					type: "POST",
					data: {//参数
					  strUserNumber:localStorage.getItem("number"),
					  strSession:sessionStorage.getItem("sess"),
					  strFileName:file.name,
					  strDesc:remarkmes,
					  bytesBase64:window.btoa(reader.result)
					},
					success: function(data,status)
					{
						console.log(data.result);
						if(data.result>0){
							alert("文件编号是"+data.result);
						}else{
							switch(data.result){
								case -1:alert("函数调用错误");
									break;
								case -2:alert("MD5值已经存在");
									break;
								case -3:alert("函数调用异常");
									break;
								case -4:alert("接口调用错误");
									break;
								case -5:alert("接口调用异常");
									break;
								case -100:alert("上传文件容量超出可使用空间（初始每个账号只允许最多上传200M内容）");
									break;
								default:alert("异常错误");
									break;
							}
						}
					}
				});
				/*$.post("http://202.116.161.73:6391/query/Ext_File_UploadFile",
				{//参数
				  strUserNumber:localStorage.getItem("number"),
				  strSession:sessionStorage.getItem("sess"),
				  strFileName:file.name,
				  strDesc:remarkmes,
				  bytesBase64:window.btoa(reader.result)
				},//回调函数
				function(data,status)
				{
					console.log(data.result);
					if(data.result>0){
						alert("文件编号是"+data.result);
					}else{
						switch(data.result){
							case -1:alert("函数调用错误");
								break;
							case -2:alert("MD5值已经存在");
								break;
							case -3:alert("函数调用异常");
								break;
							case -4:alert("接口调用错误");
								break;
							case -5:alert("接口调用异常");
								break;
							case -100:alert("上传文件容量超出可使用空间（初始每个账号只允许最多上传200M内容）");
								break;
							default:alert("异常错误");
								break;
						}
					}
				}
				  //返回类型
				,"json");*/
			} 
		} 
		
		reader.readAsBinaryString(file); 
	} else { 
		alert ("Please choose a file."); 
	} 
}
	
