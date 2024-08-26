// script.js

document.getElementById('toggle-switch').addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('content-companies').classList.remove('active');
        document.getElementById('content-founders').classList.add('active');
    } else {
        document.getElementById('content-founders').classList.remove('active');
        document.getElementById('content-companies').classList.add('active');
    }
});
