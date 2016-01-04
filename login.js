$(document).ready(function(){
	  //提交账号、密码
	$("form").submit(function(){
		strNumber=$("#userNumber").val();
		//获取系统时间
		$.post(
			"http://202.116.161.73:6391/query/Sys_GetSystemTime",//系统时间
			{//参数
				strUserNumber:strNumber
			},//回调函数
			function(data,status){
				strTime=data.result;
				localStorage.setItem("date",strTime);	    //存登录时间
				//密码MD5加密
				psw=$("#psw").val();
				pswd=$.md5(psw); 
				localStorage.setItem("number",strNumber);	    //存账号
				localStorage.setItem("psw",pswd);		    //存密码
				//post账号、密码到JSON接口
				$.post(
					"http://202.116.161.73:6391/query/Sys_UserLogin",//登录
					{//参数
						strUserNumber:strNumber,
						strPassWordMd5:pswd,
						strCurrentDate:strTime
					},//回调函数
					function(data,status){
						//判断登入是否成功
						if(data.result.length>29){
							sessionStorage.setItem("sess",data.result);  //存session
							localStorage.setItem("log","access");	      //存正确账号密码的标记
							window.location.href="main.html";
						}
					}//返回类型
					,"json"
				);
				return false;
			}
			  //返回类型
			,"json"
		);
		return false;
  	});
});
