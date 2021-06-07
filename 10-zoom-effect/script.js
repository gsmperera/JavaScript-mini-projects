const img = document.getElementById('z-img');
const container = document.getElementById('img-container');
const hoverBoard = document.getElementById('hover-div');

hoverBoard.addEventListener('mousemove', (event) => {
    let x = parseInt((event.offsetX / container.clientWidth) * 100);
    let y = parseInt((event.offsetY / container.clientHeight) * 100);

    img.style.width = '200%';
    img.style.height = '200%';

    img.style.transform = `translate(-${x}%, -${y}%)`;
});

hoverBoard.addEventListener('mouseleave', () => {
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.transform = 'translate(-50%, -50%)';
});
