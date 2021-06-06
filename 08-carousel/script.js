const imgs = document.querySelectorAll('#img-container img');

let current = 0;

function run() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.transform = `translateX(-${current * 400}px)`;
    }
    current++;
    if (current > imgs.length - 1) current = 0;

    setTimeout(run, 3000);
}

run();
