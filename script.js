function updateHeading() {
  const heading = document.getElementById('spartan');
  if (window.innerWidth <= 850) {
    heading.textContent = 'Building supercharged communities for Web3';
  } else {
    heading.textContent = 'Crypto’s premium marketing agency for social media & GTM strategies';
  }
}

updateHeading();
window.addEventListener('resize', updateHeading);

document.addEventListener('DOMContentLoaded', () => {
  const logosSlide = document.querySelector('.logos-slide');
  if (logosSlide) {
    logosSlide.style.animation = 'none';
    logosSlide.offsetHeight;
    logosSlide.style.animation = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const logos = document.querySelector(".logos");
  const original = document.querySelector(".logos-slide");
  const copy = original.cloneNode(true);

  logos.appendChild(copy);
  logos.offsetHeight;

  logos.querySelectorAll(".logos-slide").forEach(slide => {
    slide.style.animation = 'none';
    slide.offsetHeight;
    slide.style.animation = '';
  });
});

let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    nav.classList.remove('visible');
    nav.classList.add('hidden');
  } else {
    nav.classList.remove('hidden');
    nav.classList.add('visible');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

let lastScrollTopMobile = 0;
const mobileNav = document.querySelector('.mobile-nav');

function handleScroll() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll === 0) {
    mobileNav.style.background = 'none';
    mobileNav.style.boxShadow = 'none';
    mobileNav.style.backdropFilter = 'none';
  } else if (currentScroll > lastScrollTopMobile) {
    mobileNav.classList.remove('visible');
    mobileNav.classList.add('hidden');
    mobileNav.style.background = 'rgba(255, 255, 255, 0.30)';
    mobileNav.style.boxShadow = '0px 8px 25px 0px rgba(0, 0, 0, 0.25)';
    mobileNav.style.backdropFilter = 'blur(10px)';
  } else {
    mobileNav.classList.remove('hidden');
    mobileNav.classList.add('visible');
  }

  lastScrollTopMobile = currentScroll <= 0 ? 0 : currentScroll;
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('load', function () {
  mobileNav.style.background = 'none';
  mobileNav.style.boxShadow = 'none';
  mobileNav.style.backdropFilter = 'none';
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

  mobileXContainer.addEventListener('click', toggleNav);

  const navLinks = mobileOpenedNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
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
    delay: 0.1,
    scrollTrigger: {
      trigger: ".hero-section-right-side",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);

gsap.fromTo(".hero-section-left-side",
  {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".hero-section-left-side",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);

gsap.fromTo(".grid-hero",
  {
    opacity: 0,
    y: 100
  },
  {
    opacity: 1,
    delay: 0.2,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }
);

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.framework-buttons > div');
  const images = document.querySelectorAll('.frm-image-container > div');
  const descriptions = document.querySelectorAll('.framework-desc-container > div');

  function handleButtonClick(e) {
    buttons.forEach(btn => btn.classList.remove('active'));
    images.forEach(img => img.classList.remove('active-img'));
    descriptions.forEach(desc => desc.classList.remove('active-desc'));

    const clickedButton = e.currentTarget;
    clickedButton.classList.add('active');

    const targetImgId = clickedButton.getAttribute('data-target');
    document.querySelector(`.${targetImgId}`).classList.add('active-img');

    const targetDescClass = targetImgId.replace('frm-img', 'desc');
    document.querySelector(`.${targetDescClass}`).classList.add('active-desc');
  }

  buttons[0].classList.add('active');
  images[0].classList.add('active-img');
  descriptions[0].classList.add('active-desc');

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
      trigger: ".framework-title",
      start: "top bottom",
      end: "bottom top",
      once: true
    }
  }
);

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " actives";
}

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".framework-buttons > div",
  {
    opacity: 0,
    y: 100
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".framework-title",
      start: "top bottom",
      end: "bottom top",
      once: true
    },
    stagger: 0.1
  }
);

gsap.utils.toArray(".framework-desc-container > div").forEach((desc) => {
  gsap.fromTo(
    desc,
    {
      opacity: 0,
      y: 100
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".framework-title",
        start: "top bottom",
        end: "bottom top",
        once: true
      }
    }
  );
});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".frm-image-container",
  {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".frm-image-container",
      start: "top 80%",
      end: "bottom 20%",
      once: true
    }
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".phone-slider-header-title",
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
      trigger: ".phone-slider-header-title",
      toggleActions: "play none none none"
    }
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray([".top-row", ".description", ".image-placeholder"]).forEach((element, index) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 100
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        once: true
      }
    }
  );
});

gsap.utils.toArray(".dots .dot").forEach((dot, index) => {
  gsap.fromTo(
    dot,
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".dots",
        start: "top bottom",
        end: "bottom top",
        once: true
      }
    }
  );
});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".cmm-title",
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
      trigger: ".cmm-title",
      toggleActions: "play none none none"
    }
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".cmm-alt",
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
      trigger: ".cmm-alt",
      toggleActions: "play none none none"
    }
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".rigth-side-cmm",
  {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".rigth-side-cmm",
      toggleActions: "play none none none"
    }
  }
);

let customSlideIndex = 1;
showCustomSlides(customSlideIndex);

function changeCustomSlide(n) {
  showCustomSlides(customSlideIndex += n);
}

function currentCustomSlide(n) {
  showCustomSlides(customSlideIndex = n);
}

function showCustomSlides(n) {
  let i;
  let slides = document.getElementsByClassName("custom-slide");
  let dots = document.getElementsByClassName("custom-dot");
  if (n > slides.length) { customSlideIndex = 1 }
  if (n < 1) { customSlideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" custom-actives", "");
  }
  slides[customSlideIndex - 1].style.display = "block";
  dots[customSlideIndex - 1].className += " custom-actives";
}

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".tes-title",
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
      trigger: ".tes-title",
      start: "top bottom",
      end: "bottom top",
      once: true
    }
  }
);

gsap.fromTo(".custom-slider-header-title",
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".custom-slider-header-title",
      start: "top bottom",
      end: "bottom top",
      once: true
    }
  }
);

gsap.fromTo(".custom-slider-content",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".custom-slider-content",
      start: "top bottom",
      end: "bottom top",
      once: true
    }
  }
);

gsap.utils.toArray(".custom-dots .custom-dot").forEach((dot, index) => {
  gsap.fromTo(
    dot,
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".custom-dots",
        start: "top bottom",
        end: "bottom top",
        once: true
      }
    }
  );
});

gsap.utils.toArray(".testies .first-tes").forEach((tes, index) => {
  gsap.fromTo(
    tes,
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: index * 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testies",
        start: "top 80%",
        once: true
      }
    }
  );
});

document.getElementById('toggle-switch').addEventListener('change', function () {
  if (this.checked) {
    document.getElementById('content-companies').classList.remove('active');
    document.getElementById('content-founders').classList.add('active');
  } else {
    document.getElementById('content-founders').classList.remove('active');
    document.getElementById('content-companies').classList.add('active');
  }
});

gsap.fromTo(".offer-title",
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".offer-title",
      start: "top bottom",
      end: "bottom top",
      once: true
    }
  }
);

gsap.fromTo(".toggle-container",
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".toggle-container",
      start: "top bottom",
      end: "bottom top",
      once: true
    }
  }
);

gsap.fromTo(".content",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".content",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".grid-offer",
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".grid-offer",
      start: "top 130%",
      end: "bottom top",
      once: true
    }
  }
);

gsap.fromTo(".news-title",
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".news-title",
      start: "top bottom",
      end: "bottom top",
      once: true
    }
  }
);

gsap.fromTo(".news-alt",
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".news-alt",
      start: "top bottom",
      end: "bottom top",
      once: true
    }
  }
);

gsap.fromTo(".name-text-news",
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".name-text-news",
      start: "top bottom",
      end: "bottom top",
      once: true
    }
  }
);

gsap.fromTo(".email-text-news",
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".email-text-news",
      start: "top bottom",
      end: "bottom top",
      once: true
    }
  }
);

gsap.fromTo(".footer-background-container",
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".footer-background-container",
      start: "top bottom",
      end: "bottom top",
      once: true
    }
  }
);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }

    window.history.replaceState(null, null, ' ');
  });
});

function scrollToSection(id) {
  const targetElement = document.getElementById(id);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      window.history.replaceState(null, null, ' ');
    }, 100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    const newImg = new Image();
    newImg.src = img.src;
  });
});