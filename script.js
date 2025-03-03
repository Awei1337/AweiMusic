document.addEventListener('DOMContentLoaded', function() {
    let audio = document.getElementById('audio');
    let playPauseBtn = document.getElementById('play-pause');
    let progress = document.getElementById('progress');
    let lyrics = document.getElementById('lyrics');
    let toggleLyricsBtn = document.getElementById('toggle-lyrics');

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = '⏸';
        } else {
            audio.pause();
            playPauseBtn.textContent = '▶️';
        }
    });

    audio.addEventListener('timeupdate', function() {
        progress.value = (audio.currentTime / audio.duration) * 100;
    });

    progress.addEventListener('input', function() {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });

    toggleLyricsBtn.addEventListener('click', function() {
        if (lyrics.style.display === 'none') {
            lyrics.style.display = 'block';
            toggleLyricsBtn.textContent = 'Скрыть текст';
        } else {
            lyrics.style.display = 'none';
            toggleLyricsBtn.textContent = 'Показать текст';
        }
    });
});
