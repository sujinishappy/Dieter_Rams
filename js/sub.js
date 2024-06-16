const sliderBar = document.getElementById('sliderBar');
    const slides = document.querySelector('.slides');

    sliderBar.addEventListener('input', (event) => {
        const slideIndex = event.target.value;
        const percentage = -slideIndex * 25; // 슬라이드 이동 비율 계산
        slides.style.transform = `translateX(${percentage}%)`;
    });

    sliderBar.addEventListener('mousedown', () => {
        sliderBar.classList.add('active');
    });

    sliderBar.addEventListener('mouseup', () => {
        sliderBar.classList.remove('active');
    });