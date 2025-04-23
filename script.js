const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
noButton.addEventListener('mouseover', () => {
 const x = Math.random() * (window.innerWidth - 100);
 const y = Math.random() * (window.innerHeight - 100);
 noButton.style.left = `${x}px`;
 noButton.style.top = `${y}px`;
});
yesButton.addEventListener('click', () => {
 confetti();
 showHugPopup();
});
function confetti() {
 for (let i = 0; i < 100; i++) {
   const heart = document.createElement('div');
   heart.classList.add('heart');
   heart.textContent = '❤️';
   heart.style.left = `${Math.random() * 100}%`;
   heart.style.animationDelay = `${Math.random()}s`;
   document.getElementById('floating-hearts').appendChild(heart);
   setTimeout(() => heart.remove(), 8000);
 }
}
function updateCounter() {
 const startDate = new Date('2023-08-22');
 const now = new Date();
 const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
 document.getElementById('counter').textContent = `We've been together for ${diff} days and counting!`;
}
function showHugPopup() {
 const popup = document.createElement('div');
 popup.style.position = 'fixed';
 popup.style.top = '50%';
 popup.style.left = '50%';
 popup.style.transform = 'translate(-50%, -50%)';
 popup.style.backgroundColor = '#fff';
 popup.style.color = '#333';
 popup.style.padding = '30px';
 popup.style.borderRadius = '20px';
 popup.style.boxShadow = '0 0 30px rgba(0,0,0,0.3)';
 popup.style.fontSize = '1.5em';
 popup.style.zIndex = '9999';
 popup.innerHTML = `
<div style="font-size: 2em;">Here’s your virtual hug!</div>
<div style="font-size: 4em;">(づ｡◕‿‿◕｡)づ</div>
<div style="margin-top: 20px;">I love you so much</div>
<button style="margin-top: 20px; padding: 10px 20px; font-size: 1em; border: none; background-color: #f44336; color: white; border-radius: 10px; cursor: pointer;" onclick="this.parentElement.remove()">Close</button>
 `;
 document.body.appendChild(popup);
}
updateCounter();
