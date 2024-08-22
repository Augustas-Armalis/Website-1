document.addEventListener('DOMContentLoaded', () => {
  const logosSlide = document.querySelector('.logos-slide');
  if (logosSlide) {
    logosSlide.style.animation = 'none'; // Pause animation
    logosSlide.offsetHeight; // Trigger a reflow
    logosSlide.style.animation = ''; // Resume animation
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const logos = document.querySelector(".logos");
  const original = document.querySelector(".logos-slide");
  const copy = original.cloneNode(true);

  // Append the clone to the container
  logos.appendChild(copy);

  // Trigger a reflow to ensure that the clone is correctly applied
  logos.offsetHeight; // Trigger reflow

  // Optionally, you might need to reset the animation to ensure smooth continuation
  logos.querySelectorAll(".logos-slide").forEach(slide => {
    slide.style.animation = 'none'; // Pause the animation
    slide.offsetHeight; // Trigger reflow
    slide.style.animation = ''; // Resume the animation
  });
});
