
$(document).on("pageinit",function(){
$.post("http://202.116.161.73:6391/query/Ext_Phone_GetMyClassMatesShortNumber",
    {//参数
      strUserNumber:localStorage.getItem("number"),
      		strSession:sessionStorage.getItem("sess")
    },//回调函数
    function(data,status){//显示数据
        leng=data.result.length;//获取result数组长度
		for(i=0;i<leng;i++){
			strs = data.result[i].split(",");
		  	$("#phone").append(
				'<li data-role="list-divider">'+strs[0]+'</li>'+
				'<li data-theme="c"><a href="#pagetwo" data-rel="dialog" data-id='+strs[1]+'>'+strs[1]+'</a></li>'
			);
		}
		$("#phone a").click(function(){
			courses_test($(this));
			return true;
		});
		$("ul").listview( "refresh" );
    }
      //返回类型
	,"json");
})

var courses_test = function(obj){
	$("#call").empty();
	console.log('号码是：' + obj.data('id'));
	sessionStorage.setItem("phone",obj.data('id'));
	$("#call").append(
		'<center><a href="tel:'+obj.data('id')+'">拨打号码</a><br><br>'+
		'<a href="sms:'+obj.data('id')+'">发送短信</a></center>'
	);
	$("a").click(function(){
			console.log('号码是：' + obj.data('id'));
		});
};