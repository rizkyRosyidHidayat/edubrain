import '../component/fixed_header.js'
import '../component/header.js'
import '../component/banner.js'
import '../component/features.js'
import '../component/features1.js'
import '../component/testimoni.js'
import '../component/brands.js'
import '../component/app.js'
import '../component/faq.js'
import '../component/footer.js'
import '../component/hidden_menu.js'

const app = new Vue({
    el: '#app',
    data: {
        active: false
    },
    methods: {
        showMenu(val) {
            this.active = val
        }
    }
})

AOS.init();

var header = document.querySelector('#header')
var mybutton = document.getElementById("btnToTop");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (window.innerWidth > 1100) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            header.style.cssText = "top: 0px"
            mybutton.style.bottom = "16px";
        } else {
            header.style.cssText = "top: -75px"
            mybutton.style.bottom = "-60px";
        }
    }
}

mybutton.addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        clickable: false
    },
    loop: true
})

var swiper_brand = new Swiper('.swiper-container-brands', {
    slidesPerView: 7,
    spaceBetween: 8,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    }
});