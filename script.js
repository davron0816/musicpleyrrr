const audioPlayer = document.getElementById('audioPlayer');
const fileInput = document.getElementById('fileInput');
const songName = document.getElementById('songName');

fileInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    audioPlayer.src = url;
    songName.textContent = `Tanlangan fayl: ${file.name}`;
  }
});

function playAudio() {
  audioPlayer.play();
}

function pauseAudio() {
  audioPlayer.pause();
}

function stopAudio() {
  audioPlayer.pause();  
  audioPlayer.currentTime = 0;
}
