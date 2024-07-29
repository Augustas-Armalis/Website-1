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


let lastScrollTop = 0;
window.addEventListener('scroll', function () {
  const logo = document.querySelector('.logo');
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    logo.classList.add('hidden');
  } else {
    // Scrolling up
    logo.classList.remove('hidden');
  }

  lastScrollTop = scrollTop;
});