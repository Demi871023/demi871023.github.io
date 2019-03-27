$(function(){
	var $block = $('#abgne-20110714'),
		$img = $block.find('ul li img'),
		timer, speed = 3000;
 
	// 幫 .mask 加上透明度
	$block.find('.box .mask').css('opacity', .6);
	// 當滑鼠移到小圖片時
	$img.mouseover(function(e){
		$img.filter('.selected').removeClass('selected');
		var $this = $(this).addClass('selected');
 
		// 把小圖的相關資訊顯示在 .box 中
		$('#abgne-title').html($this.attr('alt'));
		$('#abgne-link').attr('href', $this.attr('href'));
		$('#abgne-img').attr('src', $this.attr('src'));
 
		if(e.pageX == undefined){
			// 啟動計時器
			timer = setTimeout(move, speed);
		}
	});
 
	// 當滑鼠移入到 $block 時
	$block.hover(function(e){
		if(e.pageX != undefined) clearTimeout(timer);
	}, function(){
		// 啟動計時器
		timer = setTimeout(move, speed);
	});
 
	// 控制輪播用
	function move() {
		var i = $img.index($img.filter('.selected'));
		$img.eq((i + 1) % $img.length).mouseover();
	}
 
	// 啟動計時器
	timer = setTimeout(move, speed);
});
