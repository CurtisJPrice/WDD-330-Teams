document.getElementById('addToCart').addEventListener('click', () => {
  const icon = document.querySelector('.cart');

  // Trigger animation
  icon.classList.add('backpackOpen');

  // Remove animation class after animation ends
  setTimeout(() => {
    icon.classList.remove('backpackOpen');
  }, 300); // Match the duration in CSS
});
