const clickBtn = document.getElementById('clickBtn');
const toastContainer = document.getElementById('toastContainer');

clickBtn.addEventListener('click',() => {
    showToastNotification();
})

function showToastNotification() {
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.innerText = 'You Clicked Button';

    toastContainer.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}