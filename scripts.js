// Select DOM elements
const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

// Function saving name
const saveName = () => {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem('savedName', username);
        displaySavedName();
    }
};

// Function displauing name
const displaySavedName = () => {
    const savedName = localStorage.getItem('savedName');
    if (savedName) {
        displayName.textContent = `Hello, ${savedName}!`;
    } else {
        displayName.textContent = '';
    }
};

// Function clearing name
const clearName = () => {
    localStorage.removeItem('savedName');
    displaySavedName();
    usernameInput.value = '';
};

// Event listeners
saveBtn.addEventListener('click', saveName);
clearBtn.addEventListener('click', clearName);

// Check for saved name on page load
window.addEventListener('load', displaySavedName); // working; name is staying in p tag upon reload