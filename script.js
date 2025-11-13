
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const soundName = btn.dataset.sound;
        playSound(soundName);
    });
});

function playSound(name) {
    stopAll();
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
    window._lastPlayed = audio; 
}

function stopAll() {
    if (window._lastPlayed) {
        window._lastPlayed.pause();
        window._lastPlayed.currentTime = 0;
    }
}

document.getElementById("stop").addEventListener("click", stopAll);
