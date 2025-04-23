const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionSection = document.getElementById('questionSection');
const surpriseSection = document.getElementById('surpriseSection');
const hugBtn = document.getElementById('hugBtn');
const hugMessage = document.getElementById('hugMessage');
let moveCount = 0;
noBtn.addEventListener('mouseover', () => {
 const x = Math.random() * window.innerWidth * 0.8;
 const y = Math.random() * window.innerHeight * 0.8;
 noBtn.style.position = 'absolute';
 noBtn.style.left = `${x}px`;
 noBtn.style.top = `${y}px`;
 moveCount++;
});
yesBtn.addEventListener('click', () => {
 questionSection.style.display = 'none';
 surpriseSection.style.display = 'block';
 setInterval(createHeart, 300);
});
hugBtn.addEventListener('click', () => {
 hugMessage.innerText = "Sending a BIG warm virtual hug your way!";
});
function createHeart() {
 const heart = document.createElement('div');
 heart.classList.add('heart');
 heart.innerText = '❤️';
 heart.style.left = Math.random() * window.innerWidth + 'px';
 document.body.appendChild(heart);
 setTimeout(() => {
   heart.remove();
 }, 4000);
}
