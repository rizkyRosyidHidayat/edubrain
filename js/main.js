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

var header = document.querySelector('#header')

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (window.innerWidth > 1100) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            header.style.cssText = "top: 0px"
        } else {
            header.style.cssText = "top: -75px"
        }
    } else {
        header.style.cssText = "top: 0px"
    }
}

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
    },
    loop: true
})

var swiper_brand = new Swiper('.swiper-container-brands', {
    slidesPerView: 7,
    spaceBetween: 16,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    }
});