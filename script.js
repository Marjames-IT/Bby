
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");

openBtn.addEventListener("click", function () {
    envelope.classList.add("open");

    message.style.display = "block";

    openBtn.textContent = "My letter is open ❤️";

    openBtn.disabled = true;
});

envelope.addEventListener("click", function () {
    envelope.classList.add("open");
    message.style.display = "block";
    openBtn.textContent = "My letter is open ❤️";
    openBtn.disabled = true;
});

// Background music
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {
    if (music.paused) {
        music.play()
            .then(() => {
                musicBtn.textContent = "⏸ Pause Music";
            })
            .catch(() => {
                alert("Please check your MP3 file location.");
            });
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Play Music";
    }
});

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);
