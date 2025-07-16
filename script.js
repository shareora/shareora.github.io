// Interactive controls
document.getElementById('opacity').addEventListener('input', function() {
    const opacity = this.value;
    document.getElementById('opacity-value').textContent = opacity;
    document.querySelector('.logo-bg').style.opacity = opacity;
});

document.getElementById('size').addEventListener('input', function() {
    const size = this.value + '%';
    document.getElementById('size-value').textContent = size;
    document.querySelector('.logo-bg').style.backgroundSize = size;
});

document.getElementById('position').addEventListener('change', function() {
    document.querySelector('.logo-bg').style.backgroundPosition = this.value;
});

document.getElementById('bg-color').addEventListener('input', function() {
    document.querySelector('header').style.background = `linear-gradient(45deg, ${this.value}, #2a5298)`;
});
