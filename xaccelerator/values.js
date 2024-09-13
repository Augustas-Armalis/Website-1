let price = '$49';
let offerLink = "https://sproutmarketing.xyz/xaccelerator/checkout";
let dynamicText = '+1 Sprout NFT';





































// Don't touch these, only those ↑↑↑
document.getElementById('price').innerText = price;
document.getElementById('dynamicText').innerText = dynamicText;
document.getElementById('offerButton').addEventListener('click', function () {
  window.location.href = offerLink;
});


// The clock

let countdownTime = 2 * 60 * 60;

const countdownElement = document.getElementById('countdown');

function updateCountdown() {
  const hours = Math.floor(countdownTime / 3600);
  const minutes = Math.floor((countdownTime % 3600) / 60);
  const seconds = countdownTime % 60;

  countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  countdownTime--;

  if (countdownTime < 0) {
    clearInterval(interval);
    countdownElement.textContent = "00:00:00";
  }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();


function openModal() {
  document.getElementById("videoModal").style.display = "flex";
  document.getElementById("youtubeVideo").src = "https://www.youtube.com/embed/oTVoNF264K0?si=3DGS-X2aPqhu-OHW";
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "hidden";
  document.documentElement.style.overflowX = "hidden";
  document.documentElement.style.overflowY = "hidden";
}

function closeModal() {
  document.getElementById("videoModal").style.display = "none";
  document.getElementById("youtubeVideo").src = "";
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "visible";
  document.documentElement.style.overflowX = "hidden";
  document.documentElement.style.overflowY = "visible";
}









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
        start: 'top 100%',
        toggleActions: 'play none none none'
      }
    });
  });
});






document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.not-only-one-first-point, .not-only-one-second-point, .not-only-one-third-point', {
    opacity: 0,
    y: 100,
    duration: 0.5,
    ease: 'ease-out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.not-only-one-first-point, .not-only-one-second-point, .not-only-one-third-point',
      start: 'top 100%',
      toggleActions: 'play none none none'
    }
  });
});






document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.expectations-first-point, .expectations-second-point, .expectations-third-point', {
    opacity: 0,
    y: 100,
    duration: 0.5,
    ease: 'ease-out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.expectations-first-point, .expectations-second-point, .expectations-third-point',
      start: 'top 100%',
      toggleActions: 'play none none none'
    }
  });
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
      start: 'top 100%',
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
      start: 'top 100%',
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
      start: 'top 100%',
      toggleActions: 'play none none none'
    }
  });
});



