const boxes = document.querySelectorAll(".reward-box");

const spinButton = document.getElementById("spinButton");

const result = document.getElementById("result");

const spinnerMusic = document.getElementById("spinnerMusic");

const popupSound = document.getElementById("popupSound");

let spinning = false;


spinButton.addEventListener("click", () => {

    if (spinning) return;

    spinnerMusic.play();

    spinnerMusic.volume = 0.4;
    
    spinning = true;

    result.innerHTML = "";

    let currentIndex = 0;

    let speed = 100;

    let totalSteps = 30;

    const winnerIndex = 4; // RM288

    function spinStep(step) {

        // remove previous highlight
        boxes.forEach(box => {
            box.classList.remove("active");
        });

        // highlight current box
        boxes[currentIndex].classList.add("active");

        currentIndex = (currentIndex + 1) % boxes.length;

        // slowing effect
        speed += 15;

        // continue spinning
        if (step < totalSteps) {

            setTimeout(() => {
                spinStep(step + 1);
            }, speed);

        } else {

            // final stop on RM288
            boxes.forEach(box => {
                box.classList.remove("active");
            });

            boxes[winnerIndex].classList.add("active");

            document.getElementById("popup").style.display = "flex";


            popupSound.currentTime = 0;

            popupSound.volume = 1;

            popupSound.play();


            spinning = false;
        }
    }

    spinStep(0);

});

function closePopup() {

    document.getElementById("popup").style.display = "none";
}