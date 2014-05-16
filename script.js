window.onload = function() {
//window.addEventListener('DOMContentLoaded', function() {
  
   var v = document.getElementById('v');
   navigator.getUserMedia = (navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia ||
                             navigator.msGetUserMedia);
   if (navigator.getUserMedia) {
      // Request access to video only
      navigator.getUserMedia(
         {
            video:true,
            audio:false
         },        
         function(stream) {
            var url = window.URL || window.webkitURL;
            console.log(url)
            v.src = url ? url.createObjectURL(stream) : stream;
            console.log(v.src)
             v.play();
         },
         function(error) {
            alert('Something went wrong. (error code ' + error.code + ')');
            return;
         }
      );
   }
   else {
      alert('Sorry, the browser you are using doesn\'t support getUserMedia');
      return;
   }
   
};


var count = 0;
var timer = $.timer(
    function() {
        count++;
        if(count% ($("input[type='number']").val() ) == 0)
            snapshot();        
    },
    1000,
    true
);	

var video = document.querySelector('video');
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var localMediaStream = null;

var image;

function snapshot(){         
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      // "image/webp" works in Chrome.
      // Other browsers will fall back to image/png.
      mysrc = canvas.toDataURL();
      image = document.querySelector('img'); 
      $("#down").attr("href", mysrc).attr("download","img.png");
    
      image.src = mysrc          
      //console.log(mysrc)
   }



