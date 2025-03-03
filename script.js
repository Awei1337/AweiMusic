// Проигрыватель
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const progress = document.getElementById("progress");

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶️";
    }
});

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// Кнопка "Показать текст"
const lyrics = document.getElementById("lyrics");
const toggleLyricsBtn = document.getElementById("toggleLyrics");

toggleLyricsBtn.addEventListener("click", () => {
    lyrics.classList.toggle("show");
    toggleLyricsBtn.textContent = lyrics.classList.contains("show") ? "Скрыть текст" : "Показать текст";
});
