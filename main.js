/*!
  * sFULLSCREEN > Owner is https://github.com/sazl-ir;
  * Copyright 2020-2021;
  */
  function openSfullscreen(x){
    if(x.requestFullscreen){
      x.requestFullscreen();
    }else if(x.mozRequestFullScreen){
      x.mozRequestFullScreen();
    }else if(x.webkitRequestFullscreen){
      x.webkitRequestFullscreen();
    }
  }
  function closeSfullscreen(x){
    if(x.exitFullscreen){
      x.exitFullscreen();
    }else if(x.webkitExitFullscreen){
      x.webkitExitFullscreen();
    }else if(x.msExitFullscreen){
      x.msExitFullscreen();
    }
  }
/*!* POWERED BY SAZL.IR *!*/
