const buttons = document.querySelectorAll('.button-background');
const legend = document.querySelectorAll('.buttons span');
let currentAudio = null;

for (let i = 1; i <= 12; i++) {
  legend[i - 1].innerHTML = legend[i - 1].dataset.legend;
}

const getSound = (event) => {
    const button = event.currentTarget;
    const audio = new Audio(`./assets/sounds/${button.dataset.audio}.mp3`);    
    
    if (currentAudio !== null) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
      
    audio.play();
    currentAudio = audio;

    button.style.backgroundPosition = '-214px -11px';
};

const changePosition = (event) => {
    const button = event.currentTarget;
    button.style.backgroundPosition = '-5px -11px'
}

buttons.forEach(button => {
  button.addEventListener('mousedown', getSound);
  button.addEventListener('mouseup', changePosition);
});
