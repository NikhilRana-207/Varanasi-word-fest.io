
// code for nav bar
var navButton = document.querySelector('.navigation-button');
var navMenu = document.querySelector('.navigation-menu');
var win = window;


navButton.addEventListener("click", function openMenu() {

    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');

});
document.querySelector('.bi-x-square-fill').addEventListener("click", function closeMenu(event) {
    if (navButton.classList.contains('active')) {
        navButton.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// code for rangoli
window.onload = function () {
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        { audio: true },
        (stream) => {
          const context = new AudioContext();
          const src = context.createMediaStreamSource(stream);
          const analyser = context.createAnalyser();
  
          const svg = document.querySelector("#rangoli");
  
          src.connect(analyser);
          analyser.connect(context.destination);
  
          analyser.fftSize = 256;
  
          const bufferLength = 189;
  
          const dataArray = new Uint8Array(bufferLength);
  
          function renderFrame() {
            requestAnimationFrame(renderFrame);
  
            analyser.getByteFrequencyData(dataArray);
  
            for (let i = 0; i < bufferLength; i++) {
              barHeight = dataArray[i] * 2;
              const r = barHeight + 25 * (i / bufferLength);
              const g = 250 * (i / bufferLength);
              const b = 50 * (i / bufferLength);
  
              svg
                .getElementById(`rangoli-path-${i}`)
                .setAttribute("fill", `rgb(${r}, ${g}, ${b})`);
            }
          }
  
          renderFrame();
        },
        () => console.log("Error")
      );
    }
  };
  


