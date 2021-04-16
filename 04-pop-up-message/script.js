const container = document.getElementById('container');
clickBtn = document.getElementById('clickBtn');
closeBtn = document.getElementById('closeBtn');

clickBtn.addEventListener('click', () => {
    container.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    container.classList.remove('active');
});