var aliveNum = 0;
function FruitObj(){
	this.x = [];
	this.y = [];
	this.speed = [];
	this.type = [];
	this.ane = [];//长在哪个海葵上面
	this.alive = []; //是否是活跃状态
	this.orange = new Image();
	this.blue = new Image();
	this.w = [];
}
FruitObj.prototype.num = 20;
FruitObj.prototype.init = function(){
	this.orange.src = './image/fruit.png';
	this.blue.src = './image/blue.png';
	for(var i=0;i<this.num;i++){
		this.x[i] = 0;
		this.y[i] = 0;
		this.speed[i] = Math.random() * 10;
		this.alive[i] = false;
		this.born(i);
 	}
}
FruitObj.prototype.draw =function(){
	for(var i=0;i<this.num;i++){
		var anei = this.ane[i];
		if(aliveNum < 15){
			this.born(i);
		}
		if(this.w[i] >= 12){
			this.w[i] = 12;
			this.y[i] -= 1 + this.speed[i] * 1;
		}else{
			this.w[i] += 0.04 + this.speed[i] * 0.8;
			this.x[i] = anemone.topX[anei] - this.w[i] * 0.5;
			this.y[i] = anemone.topY[anei] - this.w[i] * 0.5;
		}
		if(this.type[i]){
			ctx1.drawImage(this.blue,this.x[i],this.y[i],this.w[i],this.w[i]);	
		}else{
			ctx1.drawImage(this.orange,this.x[i],this.y[i],this.w[i],this.w[i]);
		}
		if(this.y[i] <= 0){
			this.alive[i] = false;
			aliveNum -=1;
		}
	}
}
FruitObj.prototype.born = function(i){
	if(!this.alive[i]){
		var ftype = Math.random();
		if(ftype < 0.2){
			this.type[i] = true; //蓝色果实
		}else{
			this.type[i] = false; //黄色果实
		}
		this.ane[i]	= Math.floor(Math.random() * anemone.num);
		this.w[i] = 0;
		this.alive[i] = true;
		this.speed[i] = Math.random();
		aliveNum +=1;
	}
}