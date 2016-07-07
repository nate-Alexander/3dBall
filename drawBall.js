function drawBall(){
	this.radius=250;
	this.angles=[];
	this.length=25;
	this.all=[];
	this.text=["javascript","jquery","div","css","html","html5","css3","flash","php","mysql","javascript","jquery","div","css","html","html5","css3","flash","php","mysql","javascript","jquery","div","css"];
}
drawBall.prototype={
angle:function(){
	var num=0;
	for(var i=0;i<this.length;i++){
		var obj={};
	    if(i==0){
			obj.theta=0;
			obj.phi=0;
		
			}
			if(i>0&&i<4){
			  obj.theta=Math.PI/6*1;
			  obj.phi=Math.PI*2/3*num;
			
			
			  num++;

			}
			if(i>3&&i<9){
			  obj.theta=Math.PI/6*2;
			  obj.phi=Math.PI*2/5*num;
			  num++; 
			 
			}
			if(i>8&&i<16){
			  obj.theta=Math.PI/6*3;
			  obj.phi=Math.PI*2/7*num; 
			  num++
			}
			if(i>15&&i<21){
			  obj.theta=Math.PI/6*4;
			  obj.phi=Math.PI*2/5*num; 
			  num++
			}
			if(i>20&&i<24){
			  obj.theta=Math.PI/6*5;
			  obj.phi=Math.PI*2/3*num; 
			  num++
			}
			if(i>23){
			  obj.theta=Math.PI; 
			  obj.phi=0;
			}
			this.angles.push(obj);
	}
},
draw:function(){

     this.angle();
     var radius=this.radius;
     for(var i=0;i<this.length;i++){
	var theta=this.angles[i].theta;
	var phi=this.angles[i].phi;
	var z= radius*Math.sin(theta)*Math.cos(phi);
	var x= radius*Math.sin(theta)*Math.sin(phi)+250;
	var y= radius*Math.cos(theta)+250;
	 var li=document.createElement('li');
	 li.innerHTML=this.text[i];
	 li.style.cssText='left:'+x+'px;top:'+y+'px;'
    if(i==24){
	 setCss3(li,{transform:"translateZ("+10+"px) rotateY("+phi+"rad) rotateX("+(theta-Math.PI/2)+"rad)"}) 
	 this.all.push(li);
	  }else{
	setCss3(li,{transform:"translateZ("+z+"px) rotateY("+phi+"rad) rotateX("+(theta-Math.PI/2)+"rad)"});
	this.all.push(li);
			   }
    
	 }

}
}

