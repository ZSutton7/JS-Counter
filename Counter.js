// Get references to the elements we'll need to update
const decreaseBtn = document.getElementById('decrsBtn');
const increaseBtn = document.getElementById('incrsBtn');
const countDisplay = document.getElementById('countDisplay');

// Set the initial count value to 0
let count = 0;

// Listen for clicks on the decrease button and decrease the count by 1
decreaseBtn.onclick = function() {
  count--;
  countDisplay.textContent = count;
};

// Listen for clicks on the increase button and increase the count by 1
increaseBtn.onclick = function() {
  count++;
  countDisplay.textContent = count;
};