// $(document).ready(function() {
//     const loader = $('.loader');
//     const html = $('html');

//     function hideLoader() {
//         loader.addClass('hidden2');
//         html.removeClass('no-scroll');
//     }

//     // Always show the loader on page load or reload
//     html.addClass('no-scroll');
//     setTimeout(hideLoader, 5500);
// });




//포인터
const $cursor = document.querySelector('.pointer');
        let mouseX = 0, mouseY = 0;
        let isHovering = false;

        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            requestAnimationFrame(updatePointerPosition);
        });

        const hoverElements = document.querySelectorAll('.concept_left1, .concept_left2, .concept_right1, .concept_right2, .circle-container, #circle_moem, .lines-container, .card, .back, .slider-bar, .slide, #topButton, .grids, .nav');

        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                isHovering = true;
                updatePointerStyle();
            });

            element.addEventListener('mouseleave', () => {
                isHovering = false;
                updatePointerStyle();
            });
        });

        function updatePointerPosition() {
            $cursor.style.left = mouseX + 'px';
            $cursor.style.top = mouseY + 'px';
        }

        function updatePointerStyle() {
            if (isHovering) {
                $cursor.style.transform = 'scale(1.3)';
                $cursor.style.border = '.15vw solid #1C246A';
                $cursor.style.backgroundColor = '#1C246A';
            } else {
                $cursor.style.transform = 'scale(1)';
                $cursor.style.border = '.15vw solid #ABBAFF';
                $cursor.style.backgroundColor = '#ABBAFF';
            }
        }

//해더
var myHeader = document.getElementById("header");
var isHeaderVisible = true;
var previousScrollY = window.scrollY;

myHeader.onmouseover = function() {
    this.classList.add("over");
};

myHeader.onmouseout = function() {
    this.classList.remove("over");
};

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var hideTimeout;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        if (!hideTimeout) {
            hideTimeout = setTimeout(function() {
                $('header').addClass('nav-up');
                hideTimeout = null;
            }, 4000); // 2초 대기
        }
    } else {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
        $('header').removeClass('nav-up');
    }
    
    lastScrollTop = st;
}

//스크롤탑
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// Add this JavaScript


//섹션 이동
