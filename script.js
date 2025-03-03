document.getElementById("toggleLyrics").addEventListener("click", function () {
    let lyrics = document.getElementById("lyrics");
    if (lyrics.classList.contains("hidden")) {
        lyrics.classList.remove("hidden");
        this.textContent = "Скрыть текст";
    } else {
        lyrics.classList.add("hidden");
        this.textContent = "Показать текст";
    }
});
