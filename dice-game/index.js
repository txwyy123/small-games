$(function(){

	$(document).click(function (event){
		var randomNum1 = Math.ceil(Math.random()*6);
		var randomNum2 = Math.ceil(Math.random()*6);
		$(".img1").attr("src", "images/dice"+randomNum1+".png");
		$(".img2").attr("src", "images/dice"+randomNum2+".png");
	});
});