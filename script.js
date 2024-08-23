function updateHeading() {
  const heading = document.getElementById('spartan');
  if (window.innerWidth <= 850) {
    heading.textContent = 'Building supercharged communities for Web3';
  } else {
    heading.textContent = 'Crypto’s premium marketing agency for social media & GTM strategies';
  }
}

// Initial check
updateHeading();

// Add event listener for resizing
window.addEventListener('resize', updateHeading);












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


let lastScrollTop = 0;
const nav = document.querySelector('nav');


window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    nav.classList.remove('visible');
    nav.classList.add('hidden');
  } else {
    // Scrolling up
    nav.classList.remove('hidden');
    nav.classList.add('visible');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});



let lastScrollTopMobile = 0;
const mobileNav = document.querySelector('.mobile-nav');

// Function to update visibility based on scroll direction
function handleScroll() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll === 0) {
    // At the top of the page
    mobileNav.classList.remove('visible');
    mobileNav.classList.add('hidden');
  } else if (currentScroll > lastScrollTopMobile) {
    // Scrolling down
    mobileNav.classList.remove('visible');
    mobileNav.classList.add('hidden');
  } else {
    // Scrolling up
    mobileNav.classList.remove('hidden');
    mobileNav.classList.add('visible');
  }

  lastScrollTopMobile = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initialize state on page load
window.addEventListener('load', function () {
  mobileNav.classList.add('hidden'); // Ensure it's hidden initially
});




document.addEventListener('DOMContentLoaded', function () {
  const mobileXContainer = document.querySelector('.mobile-x-container');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOpenedNav = document.querySelector('.mobile-opened-nav');
  const body = document.body;
  let scrollPosition = 0;

  function toggleNav() {
    const isActive = mobileNav.classList.toggle('active');
    mobileOpenedNav.classList.toggle('visible', isActive);
    mobileXContainer.classList.toggle('active', isActive);
    body.classList.toggle('nav-active', isActive);

    if (isActive) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }

  // Event listener for the mobile X container
  mobileXContainer.addEventListener('click', toggleNav);


  // Event listeners for each link in the mobile opened nav
  const navLinks = mobileOpenedNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Call the toggleNav function
      toggleNav();
    });
  });


});








gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".hero-section-right-side",
  {
    x: '100%',
    opacity: 0
  },
  {
    x: '0%',
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 0.1, // Add a 0.5 second delay before the animation starts
    scrollTrigger: {
      trigger: ".hero-section-right-side",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);



// Fade in the element when it enters the viewport
gsap.fromTo(".hero-section-left-side",
  {
    opacity: 0  // Start fully transparent
  },
  {
    opacity: 1, // Fade to fully visible
    duration: 1, // Duration of 1 second
    ease: "power2.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".hero-section-left-side",
      start: "top 80%", // Start the animation when the top of the element hits 80% of the viewport
      toggleActions: "play none none none"
    }
  }
);


// Animate the element to fade in and move from bottom to top on page load
gsap.fromTo(".grid-hero",
  {
    opacity: 0,    // Start fully transparent
    y: 100         // Start 100 pixels below the original position
  },
  {
    opacity: 1,
    delay: 0.2,    // Fade to fully visible
    y: 0,          // Move to the original position
    duration: 1.5, // Duration of 1.5 seconds
    ease: "power2.out" // Smooth easing effect
  }
);













document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.framework-buttons > div'); // Select all buttons
  const images = document.querySelectorAll('.frm-image-container > div'); // Select all images
  const descriptions = document.querySelectorAll('.framework-desc-container > div'); // Select all descriptions

  function handleButtonClick(e) {
    // Remove active state from all buttons, images, and descriptions
    buttons.forEach(btn => btn.classList.remove('active'));
    images.forEach(img => img.classList.remove('active-img'));
    descriptions.forEach(desc => desc.classList.remove('active-desc'));

    // Add active state to the clicked button
    const clickedButton = e.currentTarget;
    clickedButton.classList.add('active');

    // Show the corresponding image and description
    const targetImgId = clickedButton.getAttribute('data-target');
    document.querySelector(`.${targetImgId}`).classList.add('active-img');

    // Determine which description to show based on button clicked
    const targetDescClass = targetImgId.replace('frm-img', 'desc'); // e.g., frm-img1 => desc1
    document.querySelector(`.${targetDescClass}`).classList.add('active-desc');
  }

  // Initialize by showing the first button, image, and description as active
  buttons[0].classList.add('active');
  images[0].classList.add('active-img');
  descriptions[0].classList.add('active-desc');

  // Attach event listeners to each button
  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });
});






gsap.fromTo(".framework-title",
  {
    opacity: 0,
    y: 100
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".framework-title", // Element that triggers the animation
      start: "top bottom", // When the top of the element hits the bottom of the viewport
      end: "bottom top",   // When the bottom of the element hits the top of the viewport         // Optional: sync the animation with the scroll position
      once: true           // Optional: animate only once
    }
  }
);
