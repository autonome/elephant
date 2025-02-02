/*
// https://github.com/c0bra/color-scheme-js
(function(){var t,e=[].slice,n={}.hasOwnProperty;t=function(){function t(){var e,n;for(e=[],n=1;4>=n;n++)e.push(new t.mutablecolor(60));this.col=e,this._scheme="mono",this._distance=.5,this._web_safe=!1,this._add_complement=!1}var r,o,a,i,u,s;for(o=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},t.SCHEMES={},s="mono monochromatic contrast triade tetrade analogic".split(/\s+/),i=0,u=s.length;u>i;i++)a=s[i],t.SCHEMES[a]=!0;return t.PRESETS={"default":[-1,-1,1,-.7,.25,1,.5,1],pastel:[.5,-.9,.5,.5,.1,.9,.75,.75],soft:[.3,-.8,.3,.5,.1,.9,.5,.75],light:[.25,1,.5,.75,.1,1,.5,1],hard:[1,-1,1,-.6,.1,1,.6,1],pale:[.1,-.85,.1,.5,.1,1,.1,.75]},t.COLOR_WHEEL={0:[255,0,0,100],15:[255,51,0,100],30:[255,102,0,100],45:[255,128,0,100],60:[255,153,0,100],75:[255,178,0,100],90:[255,204,0,100],105:[255,229,0,100],120:[255,255,0,100],135:[204,255,0,100],150:[153,255,0,100],165:[51,255,0,100],180:[0,204,0,80],195:[0,178,102,70],210:[0,153,153,60],225:[0,102,178,70],240:[0,51,204,80],255:[25,25,178,70],270:[51,0,153,60],285:[64,0,153,60],300:[102,0,153,60],315:[153,0,153,60],330:[204,0,153,80],345:[229,0,102,90]},t.prototype.colors=function(){var t,e,n,r,o,a,i,u,s;if(a=1,e=this.col[0].get_hue(),t={mono:function(){return function(){}}(this),contrast:function(t){return function(){return a=2,t.col[1].set_hue(e),t.col[1].rotate(180)}}(this),triade:function(t){return function(){var n;return a=3,n=60*t._distance,t.col[1].set_hue(e),t.col[1].rotate(180-n),t.col[2].set_hue(e),t.col[2].rotate(180+n)}}(this),tetrade:function(t){return function(){var n;return a=4,n=90*t._distance,t.col[1].set_hue(e),t.col[1].rotate(180),t.col[2].set_hue(e),t.col[2].rotate(180+n),t.col[3].set_hue(e),t.col[3].rotate(n)}}(this),analogic:function(t){return function(){var n;return a=t._add_complement?4:3,n=60*t._distance,t.col[1].set_hue(e),t.col[1].rotate(n),t.col[2].set_hue(e),t.col[2].rotate(360-n),t.col[3].set_hue(e),t.col[3].rotate(180)}}(this)},t.monochromatic=t.mono,null==t[this._scheme])throw"Unknown color scheme name: "+this._scheme;for(t[this._scheme](),o=[],n=i=0,s=a-1;s>=0?s>=i:i>=s;n=s>=0?++i:--i)for(r=u=0;3>=u;r=++u)o[4*n+r]=this.col[n].get_hex(this._web_safe,r);return o},t.prototype.colorset=function(){var t,e;for(t=r(this.colors()),e=[];t.length>0;)e.push(t.splice(0,4));return e},t.prototype.from_hue=function(t){if(null==t)throw"from_hue needs an argument";return this.col[0].set_hue(t),this},t.prototype.rgb2hsv=function(){var t,n,r,a,i,u,s,h,l,c;return h=1<=arguments.length?e.call(arguments,0):[],null!=h[0]&&o(h[0])&&(h=h[0]),s=h[0],r=h[1],t=h[2],u=Math.min.apply(Math,[s,r,t]),i=Math.max.apply(Math,[s,r,t]),n=i-u,c=i,n>0?(l=n/i,a=s===i?(r-t)/n:r===i?2+(t-s)/n:4+(s-r)/n,a*=60,a%=360,[a,l,c]):[0,0,c]},t.prototype.from_hex=function(e){var r,o,a,i,u,s,h,l,c,f,p,_,m,d,v,g,b,y,w,E,M;if(null==e)throw"from_hex needs an argument";if(!/^([0-9A-F]{2}){3}$/im.test(e))throw"from_hex("+e+") - argument must be in the form of RRGGBB";g=/(..)(..)(..)/.exec(e).slice(1,4),E=function(){var t,e,n;for(n=[],t=0,e=g.length;e>t;t++)d=g[t],n.push(parseInt(d,16));return n}(),v=E[0],a=E[1],r=E[2],l=this.rgb2hsv(function(){var t,e,n,o;for(n=[v,a,r],o=[],t=0,e=n.length;e>t;t++)f=n[t],o.push(f/255);return o}()),u=l[0],s=0,h=1e3,p=null,_=null,i=null,b=null,y=null,w=[],M=t.COLOR_WHEEL;for(f in M)n.call(M,f)&&w.push(f);for(f in w.sort(function(t,e){return t-e}))o=t.COLOR_WHEEL[w[f]],c=this.rgb2hsv(function(){var t,e,n,r;for(n=o.slice(0,3),r=[],t=0,e=n.length;e>t;t++)f=n[t],r.push(f/255);return r}()),i=c[0],i>=s&&u>=i&&(s=i,p=f),h>=i&&i>=u&&(h=i,_=f);return(0===h||h>360)&&(h=360,_=360),m=h!==s?(u-s)/(h-s):0,i=Math.round(p+m*(_-p)),i%=360,b=l[1],y=l[2],this.from_hue(i),this._set_variant_preset([b,y,b,.7*y,.25*b,1,.5*b,1]),this},t.prototype.add_complement=function(t){if(null==t)throw"add_complement needs an argument";return this._add_complement=t,this},t.prototype.web_safe=function(t){if(null==t)throw"web_safe needs an argument";return this._web_safe=t,this},t.prototype.distance=function(t){if(null==t)throw"distance needs an argument";if(0>t)throw"distance("+t+") - argument must be >= 0";if(t>1)throw"distance("+t+") - argument must be <= 1";return this._distance=t,this},t.prototype.scheme=function(e){if(null==e)return this._scheme;if(null==t.SCHEMES[e])throw"'"+e+"' isn't a valid scheme name";return this._scheme=e,this},t.prototype.variation=function(e){if(null==e)throw"variation needs an argument";if(null==t.PRESETS[e])throw"'$v' isn't a valid variation name";return this._set_variant_preset(t.PRESETS[e]),this},t.prototype._set_variant_preset=function(t){var e,n,r;for(r=[],e=n=0;3>=n;e=++n)r.push(this.col[e].set_variant_preset(t));return r},r=function(t){var e,n,o;if(null==t||"object"!=typeof t)return t;if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return e="",null!=t.global&&(e+="g"),null!=t.ignoreCase&&(e+="i"),null!=t.multiline&&(e+="m"),null!=t.sticky&&(e+="y"),new RegExp(t.source,e);o=new t.constructor;for(n in t)o[n]=r(t[n]);return o},t.mutablecolor=function(){function e(e){if(null==e)throw"No hue specified";this.saturation=[],this.value=[],this.base_red=0,this.base_green=0,this.base_blue=0,this.base_saturation=0,this.base_value=0,this.set_hue(e),this.set_variant_preset(t.PRESETS["default"])}return e.prototype.hue=0,e.prototype.saturation=[],e.prototype.value=[],e.prototype.base_red=0,e.prototype.base_green=0,e.prototype.base_saturation=0,e.prototype.base_value=0,e.prototype.get_hue=function(){return this.hue},e.prototype.set_hue=function(e){var n,r,o,a,i,u,s,h,l,c;n=function(t,e,n){return t+Math.round((e-t)*n)},this.hue=Math.round(e%360),i=this.hue%15+(this.hue-Math.floor(this.hue)),c=i/15,u=this.hue-Math.floor(i),s=(u+15)%360,o=t.COLOR_WHEEL[u],a=t.COLOR_WHEEL[s],h={red:0,green:1,blue:2,value:3};for(r in h)l=h[r],this["base_"+r]=n(o[l],a[l],c);return this.base_saturation=n(100,100,c)/100,this.base_value/=100},e.prototype.rotate=function(t){var e;return e=(this.hue+t)%360,this.set_hue(e)},e.prototype.get_saturation=function(t){var e,n;return n=this.saturation[t],e=0>n?-n*this.base_saturation:n,e>1&&(e=1),0>e&&(e=0),e},e.prototype.get_value=function(t){var e,n;return n=this.value[t],e=0>n?-n*this.base_value:n,e>1&&(e=1),0>e&&(e=0),e},e.prototype.set_variant=function(t,e,n){return this.saturation[t]=e,this.value[t]=n},e.prototype.set_variant_preset=function(t){var e,n,r;for(r=[],e=n=0;3>=n;e=++n)r.push(this.set_variant(e,t[2*e],t[2*e+1]));return r},e.prototype.get_hex=function(t,e){var n,r,o,a,i,u,s,h,l,c,f,p,_,m,d,v,g;for(u=Math.max.apply(Math,function(){var t,e,n,o;for(n=["red","green","blue"],o=[],t=0,e=n.length;e>t;t++)r=n[t],o.push(this["base_"+r]);return o}.call(this)),s=Math.min.apply(Math,function(){var t,e,n,o;for(n=["red","green","blue"],o=[],t=0,e=n.length;e>t;t++)r=n[t],o.push(this["base_"+r]);return o}.call(this)),p=255*(0>e?this.base_value:this.get_value(e)),c=0>e?this.base_saturation:this.get_saturation(e),i=u>0?p/u:0,h=[],g=["red","green","blue"],_=0,d=g.length;d>_;_++)r=g[_],l=Math.min.apply(Math,[255,Math.round(p-(p-this["base_"+r]*i)*c)]),h.push(l);for(t&&(h=function(){var t,e,r;for(r=[],t=0,e=h.length;e>t;t++)n=h[t],r.push(51*Math.round(n/51));return r}()),o="",m=0,v=h.length;v>m;m++)a=h[m],f=a.toString(16),f.length<2&&(f="0"+f),o+=f;return o},e}(),t}(),"undefined"!=typeof module&&null!==module&&null!=module.exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return t}):window.ColorScheme=t}).call(this);

// Generate colors
var scheme = new ColorScheme;
scheme.from_hue(21).scheme('triade').variation('hard');
var palette = scheme.colors();
var indices = randomInSet(2, 0, 7);
var colors = [ palette[ indices[0] ], palette[ indices[1] ] ].map(function(hex) {
  var rgb = hexToRGB(hex);
  return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
});
*/

(function initGUMCompat() {
  // Older browsers might not implement mediaDevices at all, so we set an empty object first
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }

  // Some browsers partially implement mediaDevices. We can't just assign an object
  // with getUserMedia as it would overwrite existing properties.
  // Here, we will just add the getUserMedia property if it's missing.
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {

      // First get ahold of the legacy getUserMedia, if present
      var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }

      // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    }
  }
})();

// Set up forked web audio context, for multiple browsers
// window. is needed otherwise Safari explodes
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var source;
var stream;

// Set up the different audio nodes we will use for the app
var analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;
analyser.smoothingTimeConstant = 0.85;

// Main block for doing the audio recording
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({audio: true})
    .then(function(stream) {
      source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);
      visualize(visualSetting);
    })
    .catch(function(err) {
      console.error('GUM STREAM ERROR', err);
    });
} else {
  console.log('getUserMedia not supported on your browser!');
}

// Set default visualization style
//var visualSetting = 'frequencybars';
var visualSetting = 'sinewave';

// Set up canvas context for visualizer
var canvas = document.querySelector('.visualizer');
var canvasCtx = canvas.getContext('2d');

function handleResize() {
    var w = window.innerWidth-2; // -2 accounts for the border
    var h = window.innerHeight-2;
    canvas.width = w;
    canvas.height = h;

    /*
    var ratio = 100/100; // 100 is the width and height of the circle content.
    var windowRatio = w/h;
    var scale = w/100;
    if (windowRatio > ratio) {
      scale = h/100;
    }
    // Scale up to fit width or height
    //c.scaleX= c.scaleY = scale; 
    
    // Center the shape
    canvas.x = w / 2;
    canvas.y = h / 2;
    */
}
window.addEventListener("resize", handleResize);

//visualize(visualSetting);

function visualize(visualSetting) {
  if (visualSetting == "sinewave") {
    analyser.fftSize = 2048;
    var bufferLength = analyser.fftSize;
    var dataArray = new Uint8Array(bufferLength);

    (function draw() {
      var w = canvas.width = window.innerWidth / 1.5; // -2 accounts for the border
      var h = canvas.height = w; //window.innerHeight);

      canvasCtx.clearRect(0, 0, w, h);

      // Draw circle
      canvasCtx.beginPath();
      canvasCtx.fillStyle = 'rgb(255,0,128)'; //colors[0];
      canvasCtx.arc(w/2, h/2, w/2, 0, 2 * Math.PI, false);
      canvasCtx.fill();

      // Draw sine wave
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(255,255,255)'; //colors[1];

      canvasCtx.beginPath();

      var sliceWidth = w * 1.0 / bufferLength;
      var x = 0;

      analyser.getByteTimeDomainData(dataArray);

      for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i] / 128.0;
        var y = v * h/2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();

      requestAnimationFrame(draw);
    })();
  }
  else if (visualSetting == "frequencybars") {
    analyser.fftSize = 256;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);

    canvasCtx.clearRect(0, 0, 800, 200);

    function draw() {
      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx.fillRect(0, 0, 800, 200);

      var barWidth = (800 / bufferLength) * 2.5;
      var barHeight;
      var x = 0;

      for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillRect(x,200-barHeight/2,barWidth,barHeight/2);

        x += barWidth + 1;
      }
    };

    draw();
  }
}

// http://stackoverflow.com/a/3759979
function randomInSet(num, min, max) {
  var arr = [];
  while(arr.length < num){
    var randomnumber = Math.ceil(Math.random()*(max - arr.length)), i;
    for(i = min; i < arr.length; i++) {
      if(arr[i] <= randomnumber) randomnumber++;
      else break;
    }
    arr.splice(i, 0, randomnumber);
  }
  return arr;
}

// http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRGB(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
