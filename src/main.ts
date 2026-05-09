import 'aframe';
import './style.css';

const video = document.querySelector<HTMLVideoElement>('#demo')!;
const audioBtn = document.querySelector<HTMLButtonElement>('#audio-btn')!;

audioBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  if (!video.muted) video.play();
  audioBtn.textContent = video.muted ? '🔇' : '🔊';
});
