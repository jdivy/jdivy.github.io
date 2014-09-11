/**
 * Created by jivy on 9/11/14.
 */
var clip1;
var clip2;
function onYouTubeIframeAPIReady() {
  clip1 = new YT.Player('clip1-player', {
    height: '600',
    width: '800',
    videoId: '4XpnKHJAok8',
    playerVars: {
      start: 2093
    },
    events: {
      'onStateChange': onClip1StateChange
    }
  });

  clip2 = new YT.Player('clip2-player', {
    height: '600',
    width: '800',
    videoId: '4XpnKHJAok8',
    playerVars: {
      start: 3026
    },
    events: {
      'onStateChange' : onClip2StateChange
    }
  });

  var clip1Done = false;
  function onClip1StateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && ! clip1Done) {
      setTimeout(stopClip1, 186 * 1000);
    }
  }
  function stopClip1(){
    clip1.stopVideo();
  }


  var clip2Done = false;
  function onClip2StateChange(event){
    if (event.data == YT.PlayerState.PLAYING && !clip2Done) {
      setTimeout(stopClip2, 281 * 1000);
      clip2Done = true;
    }
  }
  function stopClip2(){
    clip2.stopVideo();
  }

  document.addEventListener('impress:stepenter', function (e) {
    switch (e.target.id) {
      case "clip2": {
        clip2.playVideo();
        break;
      }
      case "clip1": {
        clip1.playVideo();
        break;
      }
    }
  });
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);