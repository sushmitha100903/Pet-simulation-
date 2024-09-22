// Pet attributes
let hunger = 50;
let energy = 50;
let happiness = 50;

// Get DOM elements
const hungerBar = document.getElementById('hunger-bar');
const energyBar = document.getElementById('energy-bar');
const happinessBar = document.getElementById('happiness-bar');
const notification = document.getElementById('notification');
const petImage = document.getElementById('pet-image');
const gameContent = document.getElementById('game-content');
const petNameInput = document.getElementById('pet-name-input');
const displayPetName = document.getElementById('display-pet-name');

// Function to set the pet's name
function setPetName() {
    const petName = document.getElementById('pet-name').value.trim();
    if (petName === "") {
        alert("Please enter a valid pet name.");
        return;
    }

    displayPetName.textContent = petName;
    petNameInput.classList.add('hidden');
    gameContent.classList.remove('hidden');
}

// Update the status bars on the page
function updateStatus() {
    hungerBar.value = hunger;
    energyBar.value = energy;
    happinessBar.value = happiness;
}

// Show notifications with fade effect
function showNotification(message) {
    notification.textContent = message;
    notification.classList.remove('fade'); // Reset the fade effect
    setTimeout(() => {
        notification.classList.add('fade');
    }, 100);
}

// Feed the pet
function feedPet() {
    if (hunger > 0) {
        hunger -= 10;
        happiness += 5;
        petImage.classList.add('feed-animation');
        showNotification("You fed your pet!");
    } else {
        showNotification("Your pet is not hungry!");
    }
    setTimeout(() => petImage.classList.remove('feed-animation'), 1000);
    updateStatus();
}

// Play with the pet
function playWithPet() {
    if (energy > 0) {
        energy -= 10;
        hunger += 5;
        happiness += 10;
        petImage.classList.add('play-animation');
        showNotification("You played with your pet!");
    } else {
        showNotification("Your pet is too tired to play!");
    }
    setTimeout(() => petImage.classList.remove('play-animation'), 1000);
    updateStatus();
}

// Put the pet to sleep
function putPetToSleep() {
    energy += 20;
    hunger += 10;
    petImage.classList.add('sleep-animation');
    showNotification("Your pet is sleeping...");
    setTimeout(() => {
        showNotification("Your pet woke up refreshed!");
        petImage.classList.remove('sleep-animation');
        updateStatus();
    }, 2000);
}

// Initialize the status when the page loads
updateStatus();
