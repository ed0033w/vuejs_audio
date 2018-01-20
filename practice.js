var mouse = 0;
var app = new Vue({
    el: '#app',
    
    methods: {
      play : function(event) {
        mouse = 1;
        var d = new Date();
        var temp = d.getTime();
        //console.log(mouse);
        this.$refs.audioElm.play();
        var timecheck = setTimeout(
            "change()",3000)
    
      },
     

      pause : function(event){
        mouse = 3;
        this.$refs.audioElm.pause();
        this.$refs.audioElm.currentTime = 0
        this.$refs.audioElm2.pause();
        this.$refs.audioElm2.currentTime = 0
        
      }
      
    }
  })
  var int = self.setInterval("mousecheck()",5)
  function mousecheck(){
      if(mouse %3 == 1){
        //console.log(mouse);
       // this.$refs.audioElm.play();
        
    }
      else if(mouse%3 ==0){
        //console.log(mouse);
      }
  }
  function change(){
    if(mouse%3 != 0){mouse = 2;//console.log(mouse);
        var au2 = document.getElementById("au2");
        au2.play();
        var au1 = document.getElementById("au1");
        au1.pause();
        au1.currentTime = 0;
    }
  }