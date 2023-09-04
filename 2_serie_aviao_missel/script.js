const canvas = document.getElementById("gameCanvas");
canvas.width = 1200;
canvas.height = 600;
const ctx = canvas.getContext("2d");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const explosionSound = document.getElementById("explosionSound");
const missileSound = document.getElementById("missileSound");

let airplaneX = canvas.width / 2;
let airplaneY = canvas.height / 2;
let airplaneSpeed = 2;
let missileX = 50;
let missileY = canvas.height - 20;
let missileSpeed = 7;
let missileActive = false;
let soundEnabled = true;

const airplaneImage = new Image();
airplaneImage.src = "airplane.png";

const missileImage = new Image();
missileImage.src = "missile.png";

function drawAirplane(x, y) {
    ctx.drawImage(airplaneImage, x - 20, y - 15, 40, 30);
}

function drawMissile(x, y) {
    ctx.save();
    ctx.translate(x, y);

    // Calcular a rotação do míssil em relação à posição do avião
    const angle = Math.atan2(airplaneY - missileY, airplaneX - missileX);
    ctx.rotate(angle); // Rote o míssil com base no ângulo

    ctx.drawImage(missileImage, -15, -7.5, 60, 30);
    ctx.restore();
}

function checkCollision() {
    const distance = Math.sqrt((airplaneX - missileX) ** 2 + (airplaneY - missileY) ** 2);
    if (distance < 20) {
        if (soundEnabled) {
            explosionSound.play();
        }
        alert("O avião foi atingido! BOOM!");
        resetGame();
    }
}

function resetGame() {
    missileActive = false;
    missileX = 50;
    missileY = canvas.height - 20;
    airplaneX = canvas.width / 2;
    airplaneY = canvas.height / 2;
}

canvas.addEventListener("mousemove", (event) => {
    airplaneX = event.clientX;
    if (airplaneX > canvas.width) {
        airplaneX = canvas.width;
    }
    airplaneY = event.clientY - canvas.getBoundingClientRect().top;
});

canvas.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    if (!missileActive) {
        missileActive = true;
        if (soundEnabled) {
            missileSound.play();
        }
    }
});

startButton.addEventListener("click", () => {
    soundEnabled = true;
});

stopButton.addEventListener("click", () => {
    soundEnabled = false;
    explosionSound.pause();
    missileSound.pause();
});

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawAirplane(airplaneX, airplaneY);
    drawMissile(missileX, missileY);

    if (missileActive) {
        const angle = Math.atan2(airplaneY - missileY, airplaneX - missileX);
        const missileSpeedX = Math.cos(angle) * missileSpeed;
        const missileSpeedY = Math.sin(angle) * missileSpeed;
        
        missileX += missileSpeedX;
        missileY += missileSpeedY;
        
        checkCollision();
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();
