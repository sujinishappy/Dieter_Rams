//해더
document.addEventListener('DOMContentLoaded', () => {
    const navDot = document.querySelector('.nav_dot');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav ul li');
    const navLine = document.querySelector('.nav_line');
    const navLinks = document.querySelectorAll('.nav ul li a');
    
    const updateNavDotPosition = () => {
        const scrollY = window.scrollY;
        let activeIndex = 0;

        sections.forEach((section, index) => {
            if (index % 2 === 0 && scrollY >= section.offsetTop - 50) {
                activeIndex = index / 2; // Adjust index for even sections
            }
        });

        if (navLinks[activeIndex]) {
            const activeLink = navLinks[activeIndex];
            const activeLinkRect = activeLink.getBoundingClientRect();
            const navLineRect = navLine.getBoundingClientRect();
            
            // Calculate the position with a small adjustment to the left
            const leftPosition = activeLinkRect.left - navLineRect.left + (activeLinkRect.width / 2) - (navDot.clientWidth / 2) - 0.1 * window.innerWidth / 100; // Adjust 0.1vw to fine-tune the position
            navDot.style.left = `${leftPosition}px`;
        }
    };

    window.addEventListener('scroll', updateNavDotPosition);

    // Initial position update
    updateNavDotPosition();
});

//섹션 이동
const first = document.querySelectorAll(".first");
const sections = document.querySelectorAll("section");

const firstTop = sections[0].offsetTop;
const secondTop = sections[2].offsetTop;
const thirdTop = sections[4].offsetTop;
const fourthTop = sections[6].offsetTop;
const fiveTop = sections[8].offsetTop;


first[0].onclick = function(event) {
event.preventDefault(); // 기본 이벤트 막기
window.scroll({ top: firstTop, behavior: "smooth" });
};

first[1].onclick = function(event) {
event.preventDefault(); // 기본 이벤트 막기
window.scroll({ top: secondTop, behavior: "smooth" });
};

first[2].onclick = function(event) {
event.preventDefault(); // 기본 이벤트 막기
window.scroll({ top: thirdTop, behavior: "smooth" });
};
first[3].onclick = function(event) {
    event.preventDefault(); // 기본 이벤트 막기
    window.scroll({ top: fourthTop, behavior: "smooth" });
};
first[4].onclick = function(event) {
    event.preventDefault(); // 기본 이벤트 막기
    window.scroll({ top: fiveTop, behavior: "smooth" });
};


//about
document.querySelectorAll('.horstrings').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
        setTimeout(() => {
            el.classList.remove('hovered');
        }, 2000); // 1초(1000밀리초) 딜레이
    });
});
//Concept
$(document).ready(function() {
    $('.circle-container').click(function() {
        $('.line').css('opacity', 0); // 초기화
        $('.line').each(function(index) {
            setTimeout(() => {
                $(this).css('opacity', 1);
            }, index * 50);
        });
    });
});
//Braun
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach(circle => {
        const randX = Math.random() * 100;
        const randY = Math.random() * 100;
        circle.style.transform = `translate(${randX}vw, ${randY}vh)`;
    });

    document.getElementById('circle_moem').addEventListener('mouseover', () => {
        circles.forEach(circle => {
            circle.style.transform = 'translate(0, 0)';
        });
    });

    document.getElementById('circle_moem').addEventListener('mouseout', () => {
        circles.forEach(circle => {
            const randX = Math.random() * 10;
            const randY = Math.random() * 20;
            circle.style.transform = `translate(${randX}vw, ${randY}vh)`;
        });
    });
});
//collection
document.querySelectorAll('.lines').forEach((line, index) => {
    line.addEventListener('click', () => {
      line.style.height = `${parseFloat(getComputedStyle(line).height) + 40}px`; // 클릭할 때마다 5vw씩 길어지게 함
    });
  });

//10계명 사진 나타나는 js
document.addEventListener('DOMContentLoaded', () => {
    const concepts = document.querySelectorAll('.concept_left1, .concept_left2, .concept_right1, .concept_right2');
    const conceptImage = document.querySelector('.concept-image'); // .concept-image 요소 찾기

    concepts.forEach((concept, index) => {
        const imageIndex = index + 1; // 이미지 경로는 1부터 시작하므로 index + 1

        concept.addEventListener('mouseover', () => {
            const imagePath = `url(img/concept/image${imageIndex}.jpg)`;
            showConceptImage(imagePath);
        });

        concept.addEventListener('mouseout', () => {
            hideConceptImage();
        });
    });

    function showConceptImage(imagePath) {
        conceptImage.style.backgroundImage = imagePath;
        conceptImage.classList.add('show');
    }

    function hideConceptImage() {
        conceptImage.classList.remove('show');
    }
});


//계산기
document.addEventListener('DOMContentLoaded', (event) => {
    const circles = document.querySelectorAll('.circles');

    // 초기 색상 저장
    const initialColor = '#F2F2F2';

    circles.forEach((circle) => {
        circle.addEventListener('click', () => {
            const index = parseInt(circle.getAttribute('data-index'));
            let color;

            // 현재 색상과 비교하여 색상 토글
            if (circle.style.backgroundColor === 'rgb(242, 242, 242)' || circle.style.backgroundColor === '') {
                if ([1, 2, 3, 4, 5].includes(index)) {
                    color = '#4F4F4F';
                } else if ([6, 10, 11, 15, 16, 20, 21, 23, 25].includes(index)) {
                    color = '#534135';
                } else if ([7, 8, 9, 17, 18, 19, 22].includes(index)) {
                    color = '#B9B9B9';
                } else if (index === 24) {
                    color = '#FCC45A';
                }
            } else {
                color = initialColor;
            }

            // Change the color of the clicked circle
            circle.style.backgroundColor = color;
        });
    });
});



///////텍스트 인터렉션///////////
//카드 나타나는
const addAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                if (entry.target.classList.contains('cd1') || entry.target.classList.contains('cd2') || entry.target.classList.contains('about_left') ||
                    entry.target.classList.contains('cd3') || entry.target.classList.contains('cd4')) {
                    entry.target.classList.add('slideInLeft');
                } else if (entry.target.classList.contains('cd5') || entry.target.classList.contains('cd6') || entry.target.classList.contains('about_right') ||
                    entry.target.classList.contains('cd7') || entry.target.classList.contains('cd8')) {
                    entry.target.classList.add('slideInRight');
                }
            }, 100); // 1초 딜레이
        }
    });
});

document.querySelectorAll('.about_left, .about_right, .cd1, .cd2, .cd3, .cd4, .cd5, .cd6, .cd7, .cd8').forEach((element) => {
    addAnimationObserver.observe(element);
});

const removeAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.about_left, .cd1, .cd2, .cd3, .cd4').forEach((element) => {
                element.classList.remove('slideInLeft');
            });
            document.querySelectorAll('.about_right, .cd5, .cd6, .cd7, .cd8').forEach((element) => {
                element.classList.remove('slideInRight');
            });
        }
    });
});
removeAnimationObserver.observe(document.getElementById('sense'));
removeAnimationObserver.observe(document.getElementById('ssense'));
removeAnimationObserver.observe(document.getElementById('Main'));
removeAnimationObserver.observe(document.getElementById('Abouta'));


