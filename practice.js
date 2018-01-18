
var app = new Vue({
    el: '#app',
    methods: {
      play: function(event) {
          var test = false;
          var d = new Date();
          var temp = d.getTime();
          var check = temp+10000
         // console.log(temp);
         // console.log(check);
          this.$refs.audioElm.play();
           for(var i = check;;i--){
               var d_now = new Date();
               var now = d_now.getTime();
               if((now-temp)>5000){
                this.$refs.audioElm.pause();
                this.$refs.audioElm.currentTime = 0
                this.$refs.audioElm2.play();
               }
               if((now-temp)>=10000){
                    
                    this.$refs.audioElm.pause();
                    this.$refs.audioElm.currentTime = 0
                    this.$refs.audioElm2.pause();
                    this.$refs.audioElm2.currentTime = 0
                    break;
                }
                
             //  console.log(i);
           }
        
      },
      pause: function(event,){
        var d = new Date();
        var temp = d.getTime();
        console.log(temp);
        this.$refs.audioElm.pause();
        this.$refs.audioElm.currentTime = 0
        this.$refs.audioElm2.pause();
        this.$refs.audioElm2.currentTime = 0
       
      }
    }
  })