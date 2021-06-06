const applause = document.getElementById('applause');
const drum = document.getElementById('drum');
const hiccup = document.getElementById('hiccup');
const horn = document.getElementById('horn');
const mud = document.getElementById('mud');

const applauseAudio = new Audio('./audios/applause.wav');
const drumAudio = new Audio('./audios/drum.wav');
const hiccupAudio = new Audio('./audios/hiccup.wav');
const hornAudio = new Audio('./audios/horn.wav');
const mudAudio = new Audio('./audios/mud.wav');

applause.addEventListener('click', () => {
    applauseAudio.play();
});
drum.addEventListener('click', () => {
    drumAudio.play();
});
hiccup.addEventListener('click', () => {
    hiccupAudio.play();
});
horn.addEventListener('click', () => {
    hornAudio.play();
});
mud.addEventListener('click', () => {
    mudAudio.play();
});
