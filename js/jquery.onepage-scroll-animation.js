$(function(){
　　var sHash = window.location.hash;									//取当前页面地址#及后面的值
	var sHashnumber = sHash.substr(1,1);								//本吊成功取到了当前页面的值的纯数字部分
	
	if (sHashnumber=="5" || sHashnumber=="") {
		sHashnumber="1"	;												//消除滚动插件的idnex值的bug
	};
	if (sHashnumber=="0") {
		sHashnumber="4"	;												//消除滚动插件的idnex值的bug
	}; 
	
	if (sHashnumber=="1") {
		$(".city li").each(function(){
			$(this).addClass("scani")									//添加动画类名
		});		
	};
	if (sHashnumber=="2") {
		$(".devil li div").each(function(){
			$(this).addClass("scani")									//添加动画类名
		});		
	};	
	if (sHashnumber=="3") {
		$("<link>")														//创建添加css文件
		.attr({ rel: "stylesheet",
		type: "text/css",
		href: "css/naruto.css"
		})
		.appendTo("head");	
	};
	if (sHashnumber=="4") {
		$("<link>")														//创建添加css文件
		.attr({ rel: "stylesheet",
		type: "text/css",
		href: "css/dice.css"
		})
		.appendTo("head");	
	};

});



$(function(){
	$('main').onepage_scroll({
		sectionContainer: '.page',
		easing: "ease-in-out",
		direction: 'horizontal',
		animationTime: 1000,
//		responsiveFallback: 600
//		pagination: false
		loop: false,
		updateURL: true,
		beforeMove: function(index){
					switch(index){
						case 1:
							if (!($(".city li").is('.scani'))) {
								$(".city li").each(function(){
									$(this).addClass("scani");								//添加动画类名
								});
							};
						break;
												
						case 2:
							if (!($(".devil li div").is('.scani'))) {
								$(".devil li div").each(function(){
									$(this).addClass("scani");								//添加动画类名
								});
							};
						break;
							
						case 3:
							if ($(".picture").css("position")!="absolute") {
								$("<link>")														//创建添加css文件
								.attr({ rel: "stylesheet",
								type: "text/css",
								href: "css/naruto.css"
								})
								.appendTo("head");	
							};
						break;
							
						case 4:
							if ($("#dice").css("width")!="200px") {
								console.log(1);
								$("<link>")														//创建添加css文件
								.attr({ rel: "stylesheet",
								type: "text/css",
								href: "css/dice.css"
								})
								.appendTo("head");	
							};
						break;
							
					}
				}
   
	});
});