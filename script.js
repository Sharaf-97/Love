const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const revealBtn = document.getElementById('revealBtn');
const loveNote = document.getElementById('loveNote');
noButton.addEventListener('mouseover', () => {
 const x = Math.random() * (window.innerWidth - noButton.clientWidth);
 const y = Math.random() * (window.innerHeight - noButton.clientHeight);
 noButton.style.left = `${x}px`;
 noButton.style.top = `${y}px`;
});
yesButton.addEventListener('click', () => {
 alert("I knew it! I love you too!");
 createFireworks();
});
revealBtn.addEventListener('click', () => {
 loveNote.classList.remove('hidden');
});
function createFireworks() {
 const duration = 1.5 * 1000;
 const end = Date.now() + duration;
 (function frame() {
   confetti({
     particleCount: 5,
     angle: 60,
     spread: 55,
     origin: { x: 0 }
   });
   confetti({
     particleCount: 5,
     angle: 120,
     spread: 55,
     origin: { x: 1 }
   });
   if (Date.now() < end) {
     requestAnimationFrame(frame);
   }
 })();
}
