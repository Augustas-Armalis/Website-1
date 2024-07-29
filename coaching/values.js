let price = 'XXX';
let offerLink = "https://www.augustas.co";
let callLink = "https://www.augustas.co";
let spotsCount = 'X';
















// Don't touch these, only those ↑↑↑
document.getElementById('price').innerText = price;
document.getElementById('offerButton').addEventListener('click', function () {
  window.location.href = offerLink;
});
document.getElementById('callLink').href = callLink;
document.getElementById('spotsCount').innerText = spotsCount;


// FAQ section dropdown
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const faq = button.nextElementSibling;
    const icon = button.children[1];

    faq.classList.toggle('show');
    icon.classList.toggle('rotate');
  })
})

// Logo
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
  const logo = document.querySelector('.logo');
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    logo.classList.add('hidden');
  } else {
    logo.classList.remove('hidden');
  }

  lastScrollTop = scrollTop;
});


// GSAP animations

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  const elements = document.querySelectorAll('.hero-section-left-side, .coach-section, .thirty-right-container, .video');

  elements.forEach(element => {
    gsap.from(element, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: 'ease-out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
});






document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  // Function to apply animations
  function applyAnimations() {
    const elements = document.querySelectorAll('.not-only-one-first-point, .not-only-one-second-point, .not-only-one-third-point');

    // Check if the viewport width is less than or equal to 768px (typical mobile breakpoint)
    if (window.innerWidth <= 768) {
      elements.forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          y: 100,
          duration: 0.5,
          ease: 'ease-out',
          delay: index * 0.15, // Staggered delay based on index
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });
      });
    } else {
      // Desktop view
      gsap.from('.not-only-one-first-point, .not-only-one-second-point, .not-only-one-third-point', {
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: 'ease-out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.not-only-one-first-point, .not-only-one-second-point, .not-only-one-third-point',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }
  }

  // Apply animations on page load
  applyAnimations();

  // Reapply animations on window resize (in case the viewport changes)
  window.addEventListener('resize', applyAnimations);
});






document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  // Function to apply animations
  function applyAnimations() {
    const elements = document.querySelectorAll('.expectations-first-point, .expectations-second-point, .expectations-third-point');

    // Check if the viewport width is less than or equal to 768px (typical mobile breakpoint)
    if (window.innerWidth <= 768) {
      elements.forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          y: 100,
          duration: 0.5,
          ease: 'ease-out',
          delay: index * 0.15, // Staggered delay based on index
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });
      });
    } else {
      // Desktop view
      gsap.from('.expectations-first-point, .expectations-second-point, .expectations-third-point', {
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: 'ease-out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.expectations-first-point, .expectations-second-point, .expectations-third-point',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }
  }

  // Apply animations on page load
  applyAnimations();

  // Reapply animations on window resize (in case the viewport changes)
  window.addEventListener('resize', applyAnimations);
});


document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.offer-text-side-container, .offer-image-side-container', {
    opacity: 0,
    y: 100,
    duration: 0.5,
    ease: 'ease-out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.offer-text-side-container, .offer-image-side-container',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('#quest1, #quest2, #quest3, #quest4', {
    opacity: 0,
    y: 100,
    duration: 0.5,
    ease: 'ease-out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: '#quest1, #quest2, #quest3, #quest4',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero-section-right-side', {
    x: '100%',
    opacity: 0,
    duration: 0.5,
    ease: 'ease-out',
    scrollTrigger: {
      trigger: '.hero-section-right-side',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});