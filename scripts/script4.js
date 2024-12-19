function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function clearData(key) {
    localStorage.removeItem(key);
}

function handleSubmit(event) {
    event.preventDefault();
    const input = document.getElementById("numbers");
    const numbers = input.value.split(' ').map(Number);

    if (numbers.length === 10) {
        const min = Math.min(...numbers);
        const count = numbers.filter(num => num === min).length;

        saveData("numbers", input.value);

        alert(`Minimal number: ${min}, Quantity: ${count}`);
    } else {
        alert("Please enter 10 numbers separated by spaces");
    }
}

function confirmRefresh(event) {
    const storedNumbers = getData("numbers");
    if (storedNumbers) {
        const confirmationMessage = `Are you sure you want to reload? Stored numbers won't be saved: ${storedNumbers}`;
        if (!confirm(confirmationMessage)) {
            event.preventDefault();
        } else {
            clearData("numbers");
        }
    }
}

window.onload = function () {
    clearData("numbers"); 
    const input = document.getElementById("numbers");
    const storedNumbers = getData("numbers");
    if (storedNumbers) {
        input.value = storedNumbers;
    }
};

document.getElementById("number-form").addEventListener("submit", handleSubmit);
window.addEventListener("beforeunload", confirmRefresh);
