indexScroll = function(){
      jarallax = new Jarallax();
      
      jarallax.setDefault('.scrolling-cate,.scrolling-list', {opacity:'0'});
      jarallax.addAnimation('.arrow-down-2',[{progress: "20%", opacity:"0"}, {progress: "60%", opacity: "1"}]);
      
      jarallax.addAnimation('.glasses',[{progress: "0%", top:"120px"}, {progress: "20%", top: "380px"}]);
      jarallax.addAnimation('.glasses',[{progress: "20%", top:"380px"}, {progress: "30%", top: "460px"}]);
      jarallax.addAnimation('.glasses',[{progress: "30%", top:"460px"}, {progress: "45%", top: "740px"}]);
      
      jarallax.addAnimation('.scr-txt-2',[{progress: "20%", left:"-600px"}, {progress: "30%", left: "400px"}]);
      jarallax.addAnimation('.scr-txt-2',[{progress: "30%", left:"400px"}, {progress: "45%", left: "570px"}]);
      jarallax.addAnimation('.scr-txt-2',[{progress: "45%", left:"570px"}, {progress: "70%", left: "870px"}]);
      jarallax.addAnimation('.scr-txt-2',[{progress: "20%", top:"420px"}, {progress: "30%", top: "400px"}]);
      jarallax.addAnimation('.scr-txt-2',[{progress: "30%", top:"400px"}, {progress: "45%", top: "320px"}]);
      jarallax.addAnimation('.scr-txt-2',[{progress: "45%", top:"320px"}, {progress: "70%", top: "120px"}]);
       
      jarallax.addAnimation('.scrolling-cate',[{progress: "65%", top:"-150px"}, {progress: "85%", top:"50px"}]);
      jarallax.addAnimation('.scrolling-cate',[{progress: "85%", top:"50px"}, {progress: "100%"}]);
      jarallax.addAnimation('.scrolling-cate',[{progress: "65%", opacity:"0"}, {progress: "85%", opacity:"0.5"}]);
      jarallax.addAnimation('.scrolling-cate',[{progress: "85%", opacity:"0.5"}, {progress: "100%", opacity:"1"}]);
      
      jarallax.addAnimation('.scrolling-list',[{progress: "85%", opacity:"0"}, {progress: "95%", opacity:"0.5"}]);
      jarallax.addAnimation('.scrolling-list',[{progress: "95%", opacity:"0.5"}, {progress: "100%", opacity:"1"}]);
    }
