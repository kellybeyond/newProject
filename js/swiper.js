
function Rotate(parent,width,height,...imgList){
}
Rotate.prototype={
    rotate(parent,width,height,...imgList){
        this.box=document.createElement('div');
        this.leadBox=document.createElement('div');
        this.rotateList=[],this.leadBoxList=[];
        this.k=0,this.lens
        this.state=0;
        this.box.setAttribute('style',`position: absolute;left: 50%;top: 50%;width:${width}px;height:${height}px;margin-left: -${width/2}px;
    margin-top: -${height/2}px;overflow: hidden;`)
        this.leadBox.setAttribute('style',`position:absolute;top:75%;left:50%;margin-left:-${imgList.length/2*40}px`)

        for(let i=0;i<imgList.length;i++){
            this.rotateList[i]=document.createElement('img');
            this.rotateList[i].setAttribute('src',imgList[i]);

            this.leadBoxList[i]=document.createElement('div');
            this.leadBoxList[i].setAttribute('style','width:30px;height:5px;display:inline-block;background-color:white;opacity:0.8;margin:5px;')

            this.rotateList[i].setAttribute('style',`position: absolute;left: ${i*width}px;width: ${width}px;height: ${height}px;transition: all 1s;`);
            if(i==0){
                this.leadBoxList[0].setAttribute('style','width:30px;height:5px;display:inline-block;background-color:#a2352b;opacity:0.8;margin:5px;')
            }
            this.box.appendChild(this.rotateList[i]);  
            this.leadBox.appendChild(this.leadBoxList[i])                  
        }
        this.box.appendChild(this.leadBox)
        parent.appendChild(this.box)        
        
        this.run=function(){
            if(this.state==0){//正轮播阶段
                for(let i=0;i<imgList.length;i++){  //清除所有格子红色样式
                    this.leadBoxList[i].setAttribute('style','width:30px;height:5px;display:inline-block;background-color:white;opacity:0.8;margin:5px;')                                                                            
                }
                this.k++
                if(this.k==imgList.length-1){
                    this.state=1;
                }        
                for(let i=0;i<imgList.length;i++){
                    this.lens=-width*this.k+i*width
                    this.rotateList[i].setAttribute('style',`position: absolute;left:${this.lens}px;width: ${width}px;height: ${height}px;transition: all 1s;`)
                    this.leadBoxList[this.k].setAttribute('style','width:30px;height:5px;display:inline-block;background-color:#a2352b;opacity:0.8;margin:5px;')
                    this.leadBoxList[this.k].setAttribute('style','width:30px;height:5px;display:inline-block;background-color:#a2352b;opacity:0.8;margin:5px;')
                }
            }else{//反轮播阶段
                for(let i=0;i<imgList.length;i++){
                    this.leadBoxList[i].setAttribute('style','width:30px;height:5px;display:inline-block;background-color:white;opacity:0.8;margin:5px;')                                                                            
                }
                this.k--
                if(this.k==0){
                    this.state=0;
                }
                for(let i=0;i<imgList.length;i++){
                    this.lens=-width*this.k+i*width                          
                    this.rotateList[i].setAttribute('style',`position: absolute;left:${this.lens}px;width: ${width}px;height: ${height}px;transition: all 1s;`)
                    this.leadBoxList[this.k].setAttribute('style','width:30px;height:5px;display:inline-block;background-color:#a2352b;opacity:0.8;margin:5px;')
                }
            }      
        }
        setInterval(this.run.bind(this),1000*3)
        
    }  
}
// let a=new Rotate();
// a.rotate(800,600,'m1.jpg','m2.jpg','m3.png','m4.jpg')
