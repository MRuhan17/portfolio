// Main JavaScript
function openProject(page) {
window.location.href = page;
}




### js/particles.js


const canvas = document.getElementById("particles");
if (canvas) {
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const particles = [];
for (let i = 0; i < 100; i++) {
particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: 1 + Math.random() * 2 });
}


function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "white";
particles.forEach(p => {
ctx.beginPath();
ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
ctx.fill();
p.y += 0.2;
if (p.y > canvas.height) p.y = 0;
});
requestAnimationFrame(draw);
}
draw();
}
