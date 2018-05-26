function AnemoneObj(){
	this.topX = [];
	this.topY = [];
	this.centerX = [];
	this.centerY = [];
	this.bottomX = [];
	this.bottomY = [];
	this.angle; //角度
	this.amp = []; //振幅
}
AnemoneObj.prototype.num = 50;
AnemoneObj.prototype.init = function(){
	this.angle = 0;
	for(var i=0;i<this.num;i++){
		this.bottomX[i] = i * (cWidth/this.num) + Math.random()*10;
		this.bottomY[i] = cHeight;
		this.centerX[i] = this.bottomX[i];
		this.centerY[i] = cHeight - 100;
		this.topX[i] = this.bottomX[i];
		this.topY[i] = cHeight - 280 + Math.random() * 50;
		this.amp[i] = 30 + 20 * Math.random();
	}
}
AnemoneObj.prototype.draw = function(){
	ctx1.save();
	ctx1.globalAlpha = 0.5;
	ctx1.strokeStyle="#b30aa0";
	ctx1.lineCap="round";
	ctx1.lineWidth=15;
	this.angle += 0.02;
	for(var i=0;i<this.num;i++){
		this.topX[i] = this.bottomX[i] + Math.sin(this.angle)*this.amp[i];
		ctx1.beginPath();
		ctx1.moveTo(this.bottomX[i],this.bottomY[i]);
		ctx1.quadraticCurveTo(this.centerX[i],this.centerY[i],this.topX[i],this.topY[i]);
		ctx1.stroke();
	}
	ctx1.restore();
}