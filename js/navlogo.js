$(function(){
　　var sHash = window.location.hash;				//取当前页面地址#及后面的值
	var sHashnumber = sHash.substr(1,1);			//本吊成功取到了当前页面的值的纯数字部分
	
	if (sHashnumber=="5") {
		sHashnumber="1"	;
	};												//保险起见
	if (sHashnumber=="0") {
		sHashnumber="1"	;
	};
	
	var sLogoidfirstload = "#" + "logo0" + (sHashnumber*2-1);			//计算对应logo的id
	var sLogoidfirstloads = "#" + "logo0" + (sHashnumber*2);
	
	$(sLogoidfirstload).animate({
		left:"50%"
	},1000);
	$(sLogoidfirstloads).animate({
		right:"50%"
	},1000);
	
	if (sHashnumber=="") {
		$("#logo01").animate({
			left:"50%"
		},1000);
		$("#logo02").animate({
			right:"50%"
		},1000);
	};
	
}); 



$(function(){
	$('main').onepage_scroll({
		sectionContainer: '.page',
		direction: 'horizontal',
		animationTime: 500,
//		responsiveFallback: 600
//		pagination: false
		loop: false,
		updateURL: true,
		beforeMove: function(index){
			var sLogoidnow = "#" + "logo0" + (index*2-1);			//计算对应logo的id
					var sLogoidnows = "#" + "logo0" + (index*2);
					
					switch(index){
						case 1:
//						console.log(slogoidnow);
							if (parseInt($("#logo03").position().left)!=0) {
								$("#logo03").animate({
									left:"0%"
								},500);
								$("#logo04").animate({
									right:"0%"
								},500);	
							} else if (parseInt($("#logo05").position().left)!=0) {
								$("#logo05").animate({
									left:"0%"
								},500);
								$("#logo06").animate({
									right:"0%"
								},500);									
							} else if (parseInt($("#logo07").position().left)!=0) {
								$("#logo07").animate({
									left:"0%"
								},500);
								$("#logo08").animate({
									right:"0%"
								},500);									
							};
							
							$(sLogoidnow).animate({
								left:"50%"
							},500);
							$(sLogoidnows).animate({
								right:"50%"
							},500);
							break;
							
						case 2:
//							console.log(slogoidnow);
							if (parseInt($("#logo01").position().left)!=0) {
								$("#logo01").animate({
									left:"0%"
								},500);
								$("#logo02").animate({
									right:"0%"
								},500);								
							} else if (parseInt($("#logo05").position().left)!=0) {
								
								$("#logo05").animate({
									left:"0%"
								},500);
								$("#logo06").animate({
									right:"0%"
								},500);									
							} else if (parseInt($("#logo07").position().left)!=0) {
								$("#logo07").animate({
									left:"0%"
								},500);
								$("#logo08").animate({
									right:"0%"
								},500);									
							}

							$(sLogoidnow).animate({
								left:"50%"
							},500);
							$(sLogoidnows).animate({
								right:"50%"
							},500);
							break;
							
						case 3:
//						console.log(slogoidnow);
							if (parseInt($("#logo01").position().left)!=0) {
								$("#logo01").animate({
									left:"0%"
								},500);
								$("#logo02").animate({
									right:"0%"
								},500);								
							} else if (parseInt($("#logo03").position().left)!=0) {
								$("#logo03").animate({
									left:"0%"
								},500);
								$("#logo04").animate({
									right:"0%"
								},500);									
							} else if (parseInt($("#logo07").position().left)!=0) {
								$("#logo07").animate({
									left:"0%"
								},500);
								$("#logo08").animate({
									right:"0%"
								},500);									
							}

							$(sLogoidnow).animate({
								left:"50%"
							},500);
							$(sLogoidnows).animate({
								right:"50%"
							},500);
							break;
							
						case 4:
//						console.log(slogoidnow);
							if (parseInt($("#logo01").position().left)!=0) {
								$("#logo01").animate({
									left:"0%"
								},500);
								$("#logo02").animate({
									right:"0%"
								},500);								
							} else if (parseInt($("#logo03").position().left)!=0) {
								$("#logo03").animate({
									left:"0%"
								},500);
								$("#logo04").animate({
									right:"0%"
								},500);									
							} else if (parseInt($("#logo05").position().left)!=0) {
								$("#logo05").animate({
									left:"0%"
								},500);
								$("#logo06").animate({
									right:"0%"
								},500);									
							}

							$(sLogoidnow).animate({
								left:"50%"
							},500);
							$(sLogoidnows).animate({
								right:"50%"
							},500);
							
							break;
							
					}
				}
 
			});
		});