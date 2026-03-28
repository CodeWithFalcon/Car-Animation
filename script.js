// Create audio
const audio = new Audio("assets/Sound/sound.mp3");
audio.loop = true;
audio.volume = 0.5;

// Browsers block autoplay → fix with user interaction
document.addEventListener("click", () => {
    audio.play().catch(() => {
        console.log("Click again to enable sound");
    });
}, { once: true });

console.log("Car animation loaded successfully 🚗");
