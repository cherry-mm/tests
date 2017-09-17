 $(function(){
	$(".pic_img").bind("mouseenter mouseleave",function(e){
		var $this=$(this);
		var w=$(this).width();
		var h=$(this).height();
		//实现鼠标进入进出div时位置的监听效果公式
		var x=(e.pageX-this.offsetLeft-(w/2))*(w > h ? (h / w):1);
		var y=(e.pageY-this.offsetTop-(h/2))*( h > w ? ( w / h ):1);
		var direction = Math.round(((Math.atan2(y,x)*(180/Math.PI))/90)+3) % 4;
		if(e.type == "mouseenter"){
			switch(direction){
				case 0:into("bottom_s");//console.log("bottom_s");
				break;
				case 1:into("left_s");//console.log("left_s");
				break;
				case 2:into("top_s");//console.log("top_s");
				break;
				case 3:into("right_s");//console.log("right_s");
				break;
			}
		}else{
			switch(direction){
				case 0:out("bottom_s");
				break;
				case 1:out("left_s");
				break;
				case 2:out("top_s");
				break;
				case 3:out("right_s");
				break;
			}
		}
		function into(str){
			$this.find("div").removeClass().addClass(str);
			$this.addClass("cur");
			console.log("add");
		}
		function out(str){
			$this.removeClass("cur");
			$this.find("div").removeClass().addClass(str);
		}
	});
	
})