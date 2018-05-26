function FloaterObj(){
	this.ox = [];
	this.x = [];
	this.y = [];
	this.w =[];
	this.angle; //角度
	this.amp = []; //振幅
	this.floatImg = new Image();
}
FloaterObj.prototype.num = 20;
FloaterObj.prototype.init = function(){
	this.angle = 0;
	for(var i=0;i<this.num;i++){
		this.ox[i] = i * (cWidth/this.num) + Math.random()*20
		this.x[i] = this.ox[i];
		this.y[i] = (cHeight - 200) * Math.random();
		this.w[i] = 10 * Math.random() + 10;
		this.amp[i] = 20 + 20 * Math.random();
		this.floatImg.src = 'image/dust0.png';
	}
}
FloaterObj.prototype.draw = function(){
	this.angle += 0.02;
	for(var i=0;i<this.num;i++){
		this.x[i] = this.ox[i] + Math.sin(this.angle) * this.amp[i];
		ctx1.drawImage(this.floatImg,this.x[i],this.y[i],this.w[i],this.w[i]);
	}

}