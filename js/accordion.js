$(function() { 

	// 任何需要执行的js特效 
	$(".ul-item li").hover(function(){
		$(".ul-item li").removeClass("active");
		$(".ul-item").addClass("active");
		$(this).addClass("active");
		
	
		
	},function(){
		$(".ul-item").removeClass("active");
		$(this).removeClass("active");
	});
	
	
	
	
	

	

	
}); 