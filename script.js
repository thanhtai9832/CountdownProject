// Lấy tham số `time` từ URL
const params = new URLSearchParams(window.location.search);
let time = parseInt(params.get('time'), 10) || 0; // Chuyển `time` thành số nguyên

// Hàm định dạng thời gian (phút:giây:phần nhỏ của giây)
function formatTime(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000); // Lấy số phút
    const seconds = Math.floor((milliseconds % 60000) / 1000); // Lấy số giây
    const fraction = Math.floor((milliseconds % 1000) / 100); // Lấy phần nhỏ của giây (tính đến 1/10 giây)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${fraction}`;
}

// Hiển thị và đếm ngược
const countdownElement = document.getElementById('countdown');
let milliseconds = time * 1000; // Chuyển giây thành mili giây

const timer = setInterval(() => {
    if (milliseconds <= 0) {
        clearInterval(timer);
        countdownElement.textContent = 'Hết giờ!';
    } else {
        countdownElement.textContent = `Đếm ngược: ${formatTime(milliseconds)}`;
        milliseconds -= 100; // Giảm đi 1/10 giây mỗi lần
    }
}, 100); // Cập nhật mỗi 1/10 giây
