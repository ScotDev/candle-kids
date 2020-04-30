const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const newsletter = document.getElementById('newsletter');
const credits = document.getElementById('credits');
const loading = document.getElementById('loading');
const form = document.getElementById('form');


const currentYear = new Date().getFullYear() + 1;

const candleConTime = new Date(`May 11 ${currentYear} 00:00:00`);


// Update counter
function updateCountdown() {
    const currentTime = new Date();
    const diff = candleConTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d < 10 ? '0' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Redirect to prank site
function submitPrank() {
    window.location.href = "https://sketchywebsite.net/";
}


// Show spinner before content load
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
    form.style.display = 'flex';
    credits.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);


// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitPrank();
});
