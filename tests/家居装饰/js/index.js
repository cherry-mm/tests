function slideSwitch() {
	var $current = $("#slideshow div.current");
	// 判断div.current个数为0的时候 $current的取值
	if ( $current.length == 0 ) $current = $("#slideshow div:last");
	// 判断div.current存在时则匹配$current.next(),否则转到第一个div
	var $next =  $current.next().length ? $current.next() : $("#slideshow div:first");
	$current.addClass('prev');
	$next.css({opacity: 0.0}).addClass("current").animate({opacity: 1.0}, 1000, function() {
			//因为原理是层叠,删除类,让z-index的值只放在轮转到的div.current,从而最前端显示
			$current.removeClass("current prev");
		});
}
$(function() {
	$(".current").css("opacity","1.0");
	// 设定时间为3秒(1000=1秒)
    setInterval( "slideSwitch()", 3000 ); 
});