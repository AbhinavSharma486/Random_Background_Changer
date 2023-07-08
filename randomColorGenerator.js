const mainButton = document.querySelector("button")
const body = document.body;
const currentColor = document.querySelector(".current-color")

function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const alpha = Math.random().toFixed(1)
    const randomColor = `rgba(${red} , ${green} , ${blue} , ${alpha})`
    return randomColor;

}

mainButton.addEventListener("click", () => {
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.innerHTML = randomColor
})