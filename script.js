// This file can be used for any additional JavaScript functionality that's not handled by React/Redux

// Keep track of the last color to avoid repeats
let lastColorIndex = -1;

// Function to change background color when getting a new quote
function changeBackgroundColor() {
  const colors = [
    '#5a7d7c', '#f28c28', '#7c5a5a', '#5a5a7c', '#7c7c5a', 
    '#4682B4', '#6B8E23', '#8B4513', '#483D8B', '#CD5C5C'
  ];
  
  // Get a different random color
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * colors.length);
  } while (randomIndex === lastColorIndex);
  
  // Update the last index
  lastColorIndex = randomIndex;
  const randomColor = colors[randomIndex];
  
  document.body.style.backgroundColor = randomColor;
  
  // Update buttons and text to match the new color
  setTimeout(() => {
    // After React has a chance to re-render
    const buttons = document.querySelectorAll('.button');
    const quoteText = document.getElementById('text');
    const authorText = document.getElementById('author');
    
    // Update all elements with the new color
    buttons.forEach(button => {
      button.style.backgroundColor = randomColor;
    });

    if (quoteText) quoteText.style.color = randomColor;
    if (authorText) authorText.style.color = randomColor;
  }, 100); // Slightly longer delay to ensure React has updated the DOM
}

// Add event listener to the new quote button after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initial color set
  changeBackgroundColor();
  
  // Set up event delegation for the new-quote button
  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'new-quote' || e.target.closest('#new-quote')) {
      changeBackgroundColor(); // Apply color change immediately
    }
  });
});
