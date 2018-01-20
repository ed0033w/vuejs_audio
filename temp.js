play: function(event) {
    this.mouse = false; 
    var test = false;
     var d = new Date();
     var temp = d.getTime();
     //var check = temp+10000
    // console.log(temp);
    // console.log(check);
    console.log(this.mouse);
     this.$refs.audioElm.play();
      for(var i = temp;;i--){
          var d_now = new Date();
          var now = d_now.getTime();
          if(this.mouse == true){
              console.log(this.mouse);
              break;
          }
          if((now-temp)>=2000){
           this.$refs.audioElm.pause();
           this.$refs.audioElm.currentTime = 0
           this.$refs.audioElm2.pause();
           this.$refs.audioElm2.currentTime = 0
          // console.log(this.data.mouse);
           break;
           
          }
          else if((now-temp)>=1000){
           this.$refs.audioElm.pause();
           this.$refs.audioElm.currentTime = 0
           this.$refs.audioElm2.play();
              
           }
           
           
           
        //  console.log(i);
      }
   
 },
 pause: function(event){
   this.mouse = true;
   var d = new Date();
   var temp = d.getTime();
   console.log(this.mouse);
   this.$refs.audioElm.pause();
   this.$refs.audioElm.currentTime = 0
   this.$refs.audioElm2.pause();
   this.$refs.audioElm2.currentTime = 0
  
 }