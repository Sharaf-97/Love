const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const loveSection = document.getElementById("loveSection");
noBtn.addEventListener("mouseover", () => {
 const i = Math.floor(Math.random() * 80);
 const j = Math.floor(Math.random() * 60);
 noBtn.style.left = i + "%";
 noBtn.style.top = j + "px";
});
yesBtn.addEventListener("click", () => {
 document.querySelector(".question").textContent = "Yaaaay!";
 document.querySelector(".buttons").style.display = "none";
 loveSection.classList.remove("hidden");
 // Start falling hearts
 setInterval(() => {
   const heart = document.createElement("div");
   heart.className = "heart";
   heart.style.left = Math.random() * 100 + "vw";
   heart.textContent = "♥";
   document.body.appendChild(heart);
   setTimeout(() => {
     heart.remove();
   }, 5000);
 }, 200);
});
