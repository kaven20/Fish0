function WaveObj(){
	this.x = [];
	this.y = [];
	this.r = [];
	this.opr =[];
	this.alive = [];
}
WaveObj.prototype.num = 15;
WaveObj.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.x[i] = 0;
		this.y[i] = 0;
		this.alive[i] = false;	
	}	
}
WaveObj.prototype.draw = function(){
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			if(this.opr[i] <= 0.03 ){
				this.alive[i] = false;
				return false;
			}
			this.opr[i] -= 0.03;
			this.r[i] += 0.6;
			ctx2.save();
			ctx2.globalAlpha=this.opr[i];
			ctx2.strokeStyle="#fcf5ac";
			ctx2.beginPath();
			ctx2.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
			ctx2.stroke();
			ctx2.restore();
		}
	}
	
}
WaveObj.prototype.born = function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.alive[i]){
			this.alive[i] = true;
			this.x[i] = x;
			this.y[i] = y;
			this.r[i] = 30;
			this.opr[i] = 0.7;
			return;
		}
	}

}