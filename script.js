const music = document.getElementById("bgMusic");
const btn = document.getElementById("playBtn");

let isPlaying = false;

btn.addEventListener("click", () => {
    if (!isPlaying) {
        music.play();
        isPlaying = true;
        btn.innerText = "⏸ Matikan Musik";
    } else {
        music.pause();
        isPlaying = false;
        btn.innerText = "▶ Nyalakan Musik";
    }
});