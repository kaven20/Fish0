function MomObj(){
	this.x;
	this.y;
	this.angle;
	this.eyeImg = new Image();
	this.bodyImg =[];
	this.bodyImgblue =[];
	this.tailImg =[];
	this.eyeTimer,this.taileIndex,this.taileTimer,this.bodyCount;
}
MomObj.prototype.init = function(){
	this.x = cWidth * 0.5;
	this.y = cHeight * 0.5;
	this.angle = 0;
	this.eyeTimer = 0;
	this.taileTimer = 0;
	this.eyeImg.src = 'image/bigEye0.png';
	this.taileIndex = 0;
	this.bodyTimer = 0;
	this.bodyType = 'org';
	for(var i=0;i<8;i++){
		this.bodyImg[i] = new Image;
		this.bodyImgblue[i] = new Image;
		this.tailImg[i] = new Image;
		this.bodyImg[i].src = 'image/bigSwim'+ i +'.png';
		this.bodyImgblue[i].src = 'image/bigSwimBlue'+ i +'.png';
		this.tailImg[i].src = 'image/bigTail'+ i +'.png'
	}
}
MomObj.prototype.draw = function(){
	if(this.eyeTimer >400){
		this.eyeTimer = 0;
	}else if(this.eyeTimer<=400 && this.eyeTimer >320 ){
		this.eyeTimer += Math.random() * 10;
		this.eyeImg.src = 'image/bigEye1.png';
	}else{
		this.eyeTimer += 1;
		this.eyeImg.src = 'image/bigEye0.png';
	}
	if(this.taileTimer > 40){
		this.taileIndex +=1;
		this.taileTimer = 0;
	}else{
		this.taileTimer += disTime;
	}
	if(data.fruitNum >=7){
		this.bodyCount = 7;
	}else{
		this.bodyCount = data.fruitNum;
	}
	this.x = lerpDistance(mx, this.x, 0.93);
	this.y = lerpDistance(my, this.y, 0.93);
	var angleA = Math.atan2((my-this.y),(mx-this.x)) + Math.PI; 
	this.angle = lerpAngle(angleA, this.angle, 0.8) ;
	ctx2.save();
	ctx2.translate(this.x, this.y);  
	ctx2.rotate(this.angle);
	if(this.bodyType == 'org'){
		ctx2.drawImage(this.bodyImg[this.bodyCount],-this.bodyImg[0].width*0.5,-this.bodyImg[0].height*0.5);  
	}else{
		ctx2.drawImage(this.bodyImgblue[this.bodyCount],-this.bodyImg[0].width*0.5,-this.bodyImg[0].height*0.5);  
	}
	ctx2.drawImage(this.tailImg[this.taileIndex%8],-this.tailImg[0].width*0.5 + 30,-this.tailImg[0].height*0.5); 
	ctx2.drawImage(this.eyeImg, -this.eyeImg.width*0.5,-this.eyeImg.height*0.5);   
	ctx2.restore();
}