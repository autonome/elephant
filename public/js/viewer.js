(function() {

  var firstRun = localStorage.userExists ? false : true,
      server = window.location.hostname,
      socketURL = 'wss://' + server,
      socket = null;

  console.log('firstRun', firstRun);
  
  if (firstRun) {
    localStorage.userExists = 1;
  }
  
  function onDCL() {
    // initialize websocket connection
    socket = new WebSocket(socketURL);

    socket.onopen = function() {
      console.log('socket opened')

      // ensures binary sends work correctly
      socket.binaryType = "arraybuffer";

      // register with server
      socket.send(JSON.stringify({ 'firstRun': firstRun }));
      console.log('registered!');

      socket.onmessage = function(msg) {
        var obj = JSON.parse(msg.data);
        console.log('ws message:', obj)
      };
    };
    
    //startCamera();
  }
  window.addEventListener('DOMContentLoaded', onDCL);

  function startCamera() {
    
    navigator.mediaDevices.getUserMedia({
			audio: true,
			video: true
		}).then(function (stream) {
			var video = document.createElement('video');
			video.src = URL.createObjectURL(stream);
			document.body.appendChild(video);
			video.play();

			var recorder = new MediaRecorder(stream);
			recorder.addEventListener('dataavailable', e => {
				video.src = URL.createObjectURL(e.data);
				video.play();
				video.loop = true;
			});
			setTimeout(() => {
				recorder.start();
			}, 500);

			setTimeout(() => {
				recorder.stop();
			}, 5000);

		});

    /*
    var button = document.createElement('button')
    button.innerText = 'take snapshot'
    button.addEventListener('click', function() {
      // uncomment for trashbeaty v1 testing
      //cameraSource.snapshot();

      cameraSource.snapshotToCanvas(function(canvas) {
        // local test
        var img = document.createElement('img')
        img.src = canvas.toDataURL()
        document.body.appendChild(img)

        var context = canvas.getContext('2d'),
            image = context.getImageData(0, 0, canvas.width, canvas.height),
            buffer = new ArrayBuffer(image.data.length),
            bytes = new Uint8Array(buffer);
        for (var i = 0; i < bytes.length; i++) {
            bytes[i] = image.data[i];
        }
        socket.send(buffer);
      });
    });
    document.body.appendChild(button)
    */
  }
})();
