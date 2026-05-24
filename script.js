const balloon = document.getElementById("balloon");

const photo = document.getElementById("photo");

const message = document.getElementById("message");

const hint = document.getElementById("hint");

const rewardButton = document.getElementById("rewardButton");

const popSound = document.getElementById("popSound");

const bgMusic = document.getElementById("bgMusic");

let size = 1;

let popped = false;

balloon.addEventListener("click", () => {

    if (popped) return;

    size += 0.5;

    balloon.style.transform = `scale(${size})`;

    if (size > 2) {
        popSound.volume = 1;
        popSound.play();
        popped = true;
        bgMusic.volume = 0.4;
        bgMusic.playbackRate = 1.2;
        bgMusic.play();

        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 }
        });

        // hide balloon
        balloon.style.display = "none";

        //hide hint 
        hint.style.display = "none";

        // show photo
        photo.style.display = "block";

        // show message
        message.style.display = "block";

        //show reward button
        rewardButton.style.display = "inline-block";
    }
});