
$(document).on("pageinit",function(){
	//获取系统时间
	$.post(
		"http://202.116.161.73:6391/query/Sys_GetSystemTime",
        {//参数
			strUserNumber:"201230030127"
    	},//回调函数
    	function(data,status){
        	//alert("时间：" + data.result + "\n状态：" + status);
			strTime=data.result;
			localStorage.setItem("date",strTime);	    //存登录时间
    	}
      	//返回类型
		,"json"
	);
  	//判断是否已存账号密码
  	if(localStorage.getItem("log")=="access"){
    	//post账号、密码到JSON接口
    	$.post(
			"http://202.116.161.73:6391/query/Sys_UserLogin",
			{//参数
        		strUserNumber:localStorage.getItem("number"),
				strPassWordMd5:localStorage.getItem("psw"),
				strCurrentDate:localStorage.getItem("date"),
      		},//回调函数
      		function(data,status){
        		//alert("Session：" + data.result + "\n状态：" + status);//弹出获取到的session
				//判断登入是否成功
				if(data.result=="406"){window.location.href="main.html";}
        		if(data.result.length>29){
        			sessionStorage.setItem("sess",data.result)
				};//存session
      		}
    	)
  	}else{window.location.href="login.html";}
}); 

$(document).ready(function(){
	$(".back").click(function(){window.location.href="login.html";}) 
	$(".out").click(function(){
		localStorage.clear();
		sessionStorage.clear();
		window.location.href="login.html";
	}
	$("#a").click(function(){window.location.href="a.html";})
	$("#b").click(function(){window.location.href="b.html";})
	$("#c").click(function(){window.location.href="c.html";})
	$("#d").click(function(){window.location.href="d.html";})
	$("#e").click(function(){window.location.href="e.html";})
	$("#f").click(function(){window.location.href="f.html";})
	$("#g").click(function(){window.location.href="g.html";})
	$("#h").click(function(){window.location.href="h.html";})
	$("#i").click(function(){window.location.href="i.html";})
})