const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
container = document.getElementById('container');

let index = 0;

function writeText() {
    container.innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 100);