var ctx1; //背景，海葵，漂浮物
var ctx2; //大鱼，小鱼，果实，效果波纹
var anemone;
var backgroundImg = new Image();
var floatImg = new Image();
var cWidth,cHeight;
var lastTime,disTime;
var floater;
var mom,baby;
var mx,my;
var fruit;
var aliveNum = 0;
var wave ;
var data;
var gameover;
var hasSave = false;
var btn = document.getElementById('btn');
btn.onclick = function(){
	document.getElementById('tip').style.display = 'none';
	init();
	gameloop();
	start();
}			
function start(){
	var btn3 = document.getElementById('btn3');
	btn3.onclick = function(){
		init();
	}
}

function init(){
	hasSave = false;
	gameover = false;
	lastTime = Date.now();
	disTime = 0;
	var c1 = document.getElementById('canvas1');
	ctx1=c1.getContext('2d')
	var c2 = document.getElementById('canvas2');
	ctx2=c2.getContext('2d');
	cWidth = c1.width;
	cHeight = c1.height;
	mx = cWidth * 0.5;
	my = cHeight * 0.5;
	c2.addEventListener('mousemove',onMouseMove, false);
	backgroundImg.src = 'image/background.jpg';
	anemone = new AnemoneObj();
	anemone.init();
	floater = new FloaterObj();
	floater.init();
	mom = new MomObj();
	mom.init();
	baby = new BabyObj();
	baby.init();
	fruit = new FruitObj();
	fruit.init();
	wave = new WaveObj();
	wave.init();
	data = new DataObj();
	data.init();
	
}
function gameloop(){
	ctx2.clearRect(0,0,cWidth,cHeight);
	window.requestAnimFrame(gameloop);
	var nowTime = Date.now()
	disTime = nowTime - lastTime;
	lastTime = nowTime;
	backgroundDrawn();
	anemone.draw();
	floater.draw();
	mom.draw();
	baby.draw();
	fruit.draw();
	momeat();
	babyeat();
	wave.draw();
	data.draw();
}
function backgroundDrawn(){
	ctx1.drawImage(backgroundImg,0,0);
}
function onMouseMove(e){
	if(e.offSetX || e.layerX) {
		mx = e.offSetX === undefined ? e.layerX : e.offSetX;
		my = e.offSetY === undefined ? e.layerY : e.offSetY;
	}
}
function momeat(){
	if(gameover){
		if(!hasSave){
			hasSave = true;
			document.getElementById('save').style.display = 'block';
		}
		return false;
	}
	for(var i=0;i<fruit.num;i++){
		var momFruitDis = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
		if(momFruitDis < 400 ){
			fruit.alive[i] = false;
			aliveNum -=1;
			wave.born(fruit.x[i],fruit.y[i]);
			data.fruitNum += 1;
			if(fruit.type[i]){
				data.double = 2;
				mom.bodyType = 'blue';
			}else{
				data.double = 1;
				mom.bodyType = 'org';
			}
		}
	}
}
function babyeat(){
	if(gameover){
		return false;
	}
	if(data.fruitNum > 0){
		var babyFruitDis = calLength2(baby.x,baby.y,mom.x,mom.y);
		if(babyFruitDis < 400 ){
			wave.born(baby.x,baby.y);
			data.scoreUpdate();
			baby.bodyCount = 0;
			data.fruitNum = 0;
		}
	}
	
}