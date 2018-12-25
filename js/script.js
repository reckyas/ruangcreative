$(document).ready(function () {
    $('.menu-toggle').on('click', function () {
        $('nav.col ul').toggleClass('active');
    })
    $('.toggle-sosmed').on('click', function () {
        $('.toggle-sosmed').toggleClass('active');
        $('.sosmed').toggleClass('active');
    })
    $('.w-judul').addClass('fadeInLeft');
    $('.w-text').addClass('fadeInRight');
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        if (wScroll > 300) {
            $('.card.fj-center.animated.op-0').each(function (i) {
                setTimeout(function () {
                    $('.card.fj-center.animated.op-0').eq(i).addClass('fadeInUp');
                }, 300 * (i + 1));
            })
        }
        if (wScroll > 100) {
            $('section.beranda').addClass('bg-fixed');
        }
    })
})
// JS NATIVE SLIDER By Recky A.S\
// Ambil Element parent dari slider
const sliderParent = document.getElementById('testi');
// Ambil elemen anak/child dari elemen parent
const childSliders = sliderParent.children;
// Deklarasi variabel
const w = document.getElementById('w');
// Buat event click dengan addEventListner
w.addEventListener('click', function (e) {
    // Ambil even klik hanya dari slide navigator
    if (e.target.classList.contains('slide-navigator') || e.target.classList.contains('fa')) {
        // Ambil value dari data slider
        if (e.target.getAttribute('dataSlider') == 'next') {
            // Perulangan untuk mengecek dan mengaktifkan active class
            for (let i = 0; i < childSliders.length; i++) {
                const cs = childSliders[i];
                if (cs.classList.contains('active')) {
                    if (i < (childSliders.length - 1)) {
                        var j = i + 1;
                    } else if (i == (childSliders.length - 1)) {
                        var j = 0;
                    }
                    cs.classList.remove('active');
                    childSliders[j].classList.add('active');
                    break;
                }
            }
        } else {
            for (let i = 0; i < childSliders.length; i++) {
                const cs = childSliders[i];
                if (cs.classList.contains('active')) {
                    if (i == 0) {
                        var j = childSliders.length - 1;
                    } else if (i == i) {
                        var j = i - 1;
                    }
                    console.log(j);
                    cs.classList.remove('active');
                    childSliders[j].classList.add('active');
                    break;
                }
            }
        }
    }
})