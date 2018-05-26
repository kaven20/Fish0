function DataObj(){
	this.fruitNum;
	this.double;
	this.score;

}
DataObj.prototype.init = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;

}
DataObj.prototype.scoreUpdate = function(){
	this.score +=this.fruitNum * this.double * 100;
	document.getElementById('defen').innerHTML = this.score;
}
DataObj.prototype.draw = function(){
	ctx2.save();
	ctx2.shadowBlur=20;
	ctx2.shadowColor="#FFFFFF";
	if(gameover){
		ctx2.font="30px Verdana";
		ctx2.fillStyle="#FFFFFF";
		ctx2.shadowColor="#FFFFFF";
		ctx2.fillText("GAMVE OVER",(cWidth - 205 )*0.5,(cHeight - 200 )*0.5);
	}else{
		var score ='SCORE:' + this.score;
		ctx2.font="20px arial";
		ctx2.fillStyle="#FFFFFF";
		ctx2.shadowColor="#FFFFFF";
		ctx2.fillText(score,(cWidth - 90 )*0.5,(cHeight - 40 ));
	}
	ctx2.restore();
}