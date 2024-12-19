function setTextColor(color) {
    const mainPicElements = document.querySelectorAll(".main");
    mainPicElements.forEach(element => {
        element.style.color = color;
    });
}

window.addEventListener("load", () => {
    const savedColor = localStorage.getItem("mainColor");
    if (savedColor) {
        setTextColor(savedColor);
    }
});

document.getElementById("colorPicker").addEventListener("input", (event) => {
    const selectedColor = event.target.value;
    setTextColor(selectedColor); 
    localStorage.setItem("mainColor", selectedColor); 
});
