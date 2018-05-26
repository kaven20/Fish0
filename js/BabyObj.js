function BabyObj(){
	this.x;
	this.y;
	this.angle;
	this.eyeImg = new Image();
	this.bodyImg = [];
	this.tailImg = [];
	this.eyeTimer,this.taileIndex;this.taileTimer;this.bodyTimer;
	this.bodyCount;
}
BabyObj.prototype.init = function(){
	this.x = cWidth * 0.5 - 150;
	this.y = cHeight * 0.5 + 150;
	this.angle = 0;
	this.eyeTimer = 0;
	this.taileTimer = 0;
	this.eyeImg.src = 'image/babyEye0.png';
	for(var i=0;i<19;i++){
		this.bodyImg[i] = new Image();
		this.bodyImg[i].src = 'image/babyFade'+ i +'.png';
	}
	for(var i=0;i<8;i++){
		this.tailImg[i] = new Image();
		this.tailImg[i].src = 'image/babyTail'+ i +'.png';
	}
	
	this.taileIndex = 0;
	this.bodyCount = 0;
	this.bodyTimer = 0;
}
BabyObj.prototype.draw = function(){
	if(this.eyeTimer > 200){
		this.eyeTimer = 0;
	}else if(this.eyeTimer<=200 && this.eyeTimer >140 ){
		this.eyeTimer += Math.random() * 10;
		this.eyeImg.src = 'image/babyEye1.png';
	}else{
		this.eyeTimer += 1;
		this.eyeImg.src = 'image/babyEye0.png';
	}
	if(this.taileTimer > 40){
		this.taileIndex +=1;
		this.taileTimer = 0;
	}else{
		this.taileTimer += disTime;
	}
	if(this.bodyTimer >300){
		this.bodyCount +=1;
		this.bodyTimer = 0;
	}else{
		this.bodyTimer +=disTime;
	}
	if(this.bodyCount >= 18){
		this.bodyCount = 18;
		gameover = true;
	}
	this.x = lerpDistance(mom.x + 30, this.x, 0.95);
	this.y = lerpDistance(mom.y + 30, this.y, 0.95);
	var angleA = Math.atan2((mom.y-this.y),(mom.x-this.x)) + Math.PI; 
	this.angle = lerpAngle(angleA, this.angle, 0.82) ;
	var taileii = this.taileIndex%8;
	var bodyii = this.bodyCount;
	ctx2.save();
	ctx2.translate(this.x, this.y);  
	ctx2.rotate(this.angle);
	ctx2.drawImage(this.tailImg[taileii],-this.tailImg[taileii].width*0.5 + 25,-this.tailImg[taileii].height*0.5);  
	ctx2.drawImage(this.bodyImg[bodyii],-this.bodyImg[bodyii].width*0.5,-this.bodyImg[bodyii].height*0.5);  
	ctx2.drawImage(this.eyeImg, -this.eyeImg.width*0.5,-this.eyeImg.height*0.5);  
	ctx2.restore();
	
}