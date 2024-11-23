// Lấy tham số `time` từ URL
const params = new URLSearchParams(window.location.search);
let time = parseInt(params.get('time'), 10) || 0; // Chuyển `time` thành số nguyên

// Đổi giây thành mili giây
let initialMilliseconds = time * 1000;

// Lấy thời điểm hiện tại
const currentTime = Date.now();

// Tính toán chênh lệch thời gian
let milliseconds = Math.max(initialMilliseconds - (Date.now() - currentTime), 0); // Đảm bảo không âm

// Hàm định dạng thời gian
function formatTime(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const fraction = Math.floor((milliseconds % 1000) / 100);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${fraction}`;
}

// Hiển thị và đếm ngược
const countdownElement = document.getElementById('countdown');

const timer = setInterval(() => {
    if (milliseconds <= 0) {
        clearInterval(timer);
        countdownElement.textContent = 'Hết giờ!';
    } else {
        countdownElement.textContent = `Đếm ngược: ${formatTime(milliseconds)}`;
        milliseconds -= 100;
    }
}, 100);
