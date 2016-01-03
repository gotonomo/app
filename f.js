
$(document).on("pageinit",function(){
$.post("http://202.116.161.73:6391/query/Ext_LBS_GetMyLastPosition",
    {//参数
      strUserNumber:localStorage.getItem("number"),
      strSession:sessionStorage.getItem("sess")
    },//回调函数
    function(data,status)
    {
        if(data.result == null){
			alert("无定位记录");
		}else{
				$("#table-courses-body").append(
					'<tr><td>'+data.result[0]+'</td>'+
					'<td>'+data.result[1]+'</td>'+
					'<td>'+data.result[2]+'</td>'+
					'<td>'+data.result[3]+'</td>'+
					'<td>'+data.result[4]+'</td></tr>'
				);
		}
    }
      //返回类型
	,"json");
})

function showPosition(position){
	$.mobile.loading( "hide" );
	//$("#lbs-result").html("纬度: " + position.coords.latitude + "<br />经度: " + position.coords.longitude);	
	//TODO: 上传坐标
	$.post("http://202.116.161.73:6391/query/Ext_LBS_SaveMyPosition",
    {//参数
      strUserNumber:localStorage.getItem("number"),
      strSession:sessionStorage.getItem("sess"),
	  Longitude:position.coords.longitude,
	  Latitude:position.coords.latitude,
	  strRemark:remarkmes
    },//回调函数
    function(data)
    {
		console.log(data.result);
		if(true == data.result){
        alert("定位成功");
		window.location.reload();
		}
    }
      //返回类型
	,"json");
}
function showError(){
	$.mobile.loading( "hide" );
	$("#lbs-result").html("我们在获取坐标时遇到了错误，请重试");
}
function getLocation(){
	remarkmes=$("#remark").val();
	$.mobile.loading( "show", {
        text: "请稍候……",
        textVisible: true,
        theme: 'b'
    });
	
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition, showError);
    }else showError();
}
