document.addEventListener("DOMContentLoaded", () => {
 const noBtn = document.getElementById("noBtn");
 const yesBtn = document.getElementById("yesBtn");
 const loveSection = document.getElementById("loveSection");
 // Move the No button randomly when hovered
 noBtn.addEventListener("mouseenter", () => {
   const container = document.querySelector(".buttons");
   const containerWidth = container.offsetWidth;
   const containerHeight = container.offsetHeight;
   const newLeft = Math.floor(Math.random() * (containerWidth - noBtn.offsetWidth));
   const newTop = Math.floor(Math.random() * (containerHeight - noBtn.offsetHeight));
   noBtn.style.left = `${newLeft}px`;
   noBtn.style.top = `${newTop}px`;
 });
 // When Yes is clicked
 yesBtn.addEventListener("click", () => {
   document.querySelector(".question").textContent = "Yaaay!";
   document.querySelector(".buttons").style.display = "none";
   loveSection.classList.remove("hidden");
   // Start hearts falling
   setInterval(() => {
     const heart = document.createElement("div");
     heart.className = "heart";
     heart.style.left = Math.random() * 100 + "vw";
     heart.textContent = "♥";
     document.body.appendChild(heart);
     setTimeout(() => heart.remove(), 5000);
   }, 200);
 });
});
