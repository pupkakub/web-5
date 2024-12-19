let lists = {};

function addItemToList(blockId) {
    const item = prompt("Enter data:");
    if (item) {
        if (!lists[blockId]) {
            lists[blockId] = [];
        }
        lists[blockId].push(item); 
        updateBlockContent(blockId);
    }
}

function updateBlockContent(blockId) {
    const block = document.querySelector(`.block[data-block="${blockId}"]`);
    const list = lists[blockId];

    if (list && list.length > 0) {
        const menuTitle = document.createElement("div");
        menuTitle.textContent = `Block ${blockId}`; 
        menuTitle.style.cursor = "pointer";
        menuTitle.style.color = "blue";
        menuTitle.style.textDecoration = "underline";

        const hiddenList = document.createElement("ul");
        hiddenList.style.display = "none";
        hiddenList.innerHTML = list.map(item => `<li>${item}</li>`).join("");

        menuTitle.addEventListener("click", () => {
            hiddenList.style.display =
                hiddenList.style.display === "none" ? "block" : "none";
        });

        block.innerHTML = "";
        block.appendChild(menuTitle);
        block.appendChild(hiddenList);
    }
}

function saveLists() {
    const keys = Object.keys(lists);
    if (keys.length > 0) {
        keys.forEach(key => {
            localStorage.setItem(`block-${key}`, JSON.stringify(lists[key]));
        });
        alert("The list is saved!");
    } else {
        alert("The list is empty!");
    }
}

function clearLocalStorageOnLoad() {
    localStorage.clear();
}

function initialize() {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(block => {
        block.addEventListener("dblclick", () => addItemToList(block.dataset.block));
    });

    const saveButton = document.getElementById("save-button");
    saveButton.addEventListener("click", saveLists);

    clearLocalStorageOnLoad();
}

window.onload = initialize;
