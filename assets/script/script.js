const buttons = document.querySelectorAll('.buttons img');
const legend = document.querySelectorAll('.buttons span');
let currentAudio = null;

for (let i = 1; i <= 12; i++) legend[i - 1].innerHTML = legend[i - 1].dataset.legend;

const getSound = (event) => {
    const audio = new Audio(`./assets/sounds/${event.target.dataset.audio}.mp3`);
    const currentItem = event.target;

    console.log(currentItem)
     
    if (currentAudio !== null) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
      
    audio.play();
    currentAudio = audio;
};

buttons.forEach(button => {
  button.addEventListener('click', getSound);
});
