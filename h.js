$(document).on("pageinit",function(){
$.post("http://202.116.161.73:6391/query/Ext_File_DeleteFile",
    {//参数
      strUserNumber:localStorage.getItem("number"),
      strSession:sessionStorage.getItem("sess")
    },//回调函数
    function(data,status)
    {
		if(data.result == "文件不存在或不具备对应权限"){
			alert(data.result)
		}else{leng=data.result.length;//获取result数组长度
			for(i=0;i<leng;i++){
					$("#table-courses-body").append(
						'<tr><td>'+data.result[i][0]+'</td>'+
						'<td>'+data.result[i][1]+'</td>'+
						'<td>'+data.result[i][2]+'</td>'+
						'<td>'+data.result[i][3]+'</td>'+
						'<td>'+data.result[i][4]+'</td>'+
						'<td>'+data.result[i][5]+'</td></tr>'
					);
			}
		}
	}
      //返回类型
	,"json");
})

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
				} 
			} 

			reader.readAsBinaryString(file); 
		} else { 
			alert ("Please choose a file."); 
		} 
	}
	
$("#submit").click(function(){
	remarkmes=$("#remark").val();
	$.post("http://202.116.161.73:6391/query/Ext_File_DeleteFile",
    {//参数
      strUserNumber:localStorage.getItem("number"),
      strSession:sessionStorage.getItem("sess"),
	  strFileName:file.name,
	  strDesc:remarkmes,
	  bytesBase64:window.btoa(reader.result)
    },//回调函数
    function(data,status)
    {
		alert(data.result);
	}
      //返回类型
	,"json");
});
