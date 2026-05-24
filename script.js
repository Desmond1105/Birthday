const balloon = document.getElementById("balloon");
const message = document.getElementById("message");

let size = 1;
let popped = false;

balloon.addEventListener("click", () => {

    // stop if already popped
    if (popped) return;

    size += 0.2;

    balloon.style.transform = `scale(${size})`;

    if (size > 2) {

        popped = true;

        balloon.innerHTML = "<img src='her.jpeg' class='photo'>";

        message.style.display = "block";
    }

});