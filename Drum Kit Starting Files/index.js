$(function(){

	$(".drum").click(function(event){
		makeNoise($(event.target).text());
		pressed($(this));
	});

	$(document).keydown(function(event){
		makeNoise(event.key);
		pressed($("."+event.key+".drum"));
	});

	function makeNoise(key){
		switch(key){
			case 'w':
				new Audio("sounds/tom-1.mp3").play();
				break;
			case 'a':
				new Audio("sounds/tom-2.mp3").play();break;
			case 's':
				new Audio("sounds/tom-3.mp3").play();break;
			case 'd':
				new Audio("sounds/tom-4.mp3").play();break;
			case 'j':
				new Audio("sounds/crash.mp3").play();break;
			case 'k':
				new Audio("sounds/kick-bass.mp3").play();break;
			case 'l':
				new Audio("sounds/snare.mp3").play();break;
			default:
				break;
		}
	}

	function pressed(drum){
		drum.addClass("pressed");
		setTimeout(function(){
			drum.removeClass("pressed");
		}, 100);
	}
});