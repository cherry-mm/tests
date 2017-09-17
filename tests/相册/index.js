$(function(){
	//相册切换
	$(".next").click(function(){
		$(".pic_img  span:last").animate({"left":"688px"},800,function(){
			$(".pic_img").prepend($(this));//开头插入内容
			$(this).animate({"left":"0"},800);
		});
	});
	$(".pre").click(function(){
		$(".pic_img  span:first").animate({"left":"-688px"},800,function(){
			$(".pic_img").append($(this));//结尾插入内容
			$(this).animate({"left":"0"},800);
		});
	});
	//点击相片，遮罩和大图出现
	$(".picList ul li").click(function(){
		var img=$(".pic_img img");
		var _index=$(this).index();
		for(var i=0;i<5;i++){
			var _src="images/show/"+_index+"/"+(i+1)+".jpg";
			img.eq(i).attr("src",_src);
		}
		$(".pan").fadeIn(800);
		$(".content").fadeIn(800);
	});

	$(".pan").click(function(){
		$(".content").fadeOut(800);
		$(".pan").fadeOut(800);
	});
})