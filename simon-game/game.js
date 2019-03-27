$(function(){

	var round = 0;
	var curStep = 0;
	var list = [];
	var started = false;
	var over = true;

	$(document).keydown(function(event){
		if(!started || over){
			$("#level-title").text("Level 1");
			started = true;
			over = false;
			round = 1;
			curStep = 0;

			var newNum = randomNum();
			var color = getColor(newNum);
			pressButton(true, color, $(".btn").eq(newNum));
			list = [newNum];
		}
	});

	$(".btn").click(function(event){
		if(started && !over){//正常游戏，没有结束
			var color = $(event.target).attr("id");
			if(list[curStep] === getIndex(color)){//点击正确
				pressButton(true, color, event.target);
				curStep++;

				if(curStep == round){//如果次轮完成，进入下一轮
					setTimeout(function(){
						if(!over){//要检查等待期间是不是点击错误了
							var newNum = randomNum();
							var newColor = getColor(newNum);
							pressButton(true, newColor, $(".btn").eq(newNum));

							curStep = 0;
							round++;
							list.push(newNum);
							$("#level-title").text("Level "+round);
						}
					}, 500);
				}
			}else{//点击错误
				pressButton(false, null, event.target);
			}
		}else{//游戏还没开始，或者已经结束
			pressButton(false, null, event.target);
		}
	});

	function pressButton(right, color, button){
		if(!right){
			new Audio("sounds/wrong.mp3").play();
			$("body").addClass("game-over");
			setTimeout(function(){
				$("body").removeClass("game-over");
			}, 100);

			over = true;
			$("#level-title").text("Game Over, Press Any Key to Restart");
		}else
			new Audio("sounds/"+color+".mp3").play();

		$(button).addClass("pressed");
		setTimeout(function(){
			$(button).removeClass("pressed");
		}, 100);
	}

	function randomNum(){
		return Math.ceil(Math.random()*4)-1;
	}

	function getIndex(color){
		switch(color){
			case "green":
				return 0;
			case "red":
				return 1;
			case "yellow":
				return 2;
			case "blue":
				return 3;
			default:
				console.log("something wrong here!");
		}
	}

	function getColor(index){
		switch(index){
			case 0:
				return "green";
			case 1:
				return "red";
			case 2:
				return "yellow";
			case 3:
				return "blue";
			default:
				console.log("something wrong here!");
		}
	}

});