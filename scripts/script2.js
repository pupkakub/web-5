const base = 10; 
const height = 5; 

function calculateTriangleArea(base, height) {
    return (base * height) / 2; 
}

const area = calculateTriangleArea(base, height);

const block3 = document.querySelector(".three");

if (block3) {
    block3.textContent = `Area: ${area}`;
}
