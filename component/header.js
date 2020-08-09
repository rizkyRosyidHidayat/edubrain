Vue.component('header-section', {
  template: `
  <header class="position-absolute w-100 d-none d-lg-block position-relative">
    <div class="navbar navbar-expand-md justify-content-between">
      
        <a href="index.html" class="navbar-brand">
          <img 
            src="img/edubrand.png" 
            alt="brand edubrand"
            height="30"
          >
        </a>
        <div 
          style="top: 0px;left: 42%;"
          class="position-absolute">
          <img src="img/top_100.svg" alt="top 100" />
        </div>
        <div class="navbar-nav align-items-center">
          <a 
            v-for="item in nav" :key="item.text"
            class="nav-item nav-link font-weight-bold" 
            :class="navbarType"
            :href="item.link">
            {{ item.text }}
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6285727244000"
            class="nav-item nav-link">
            <div class="btn btn-primary rounded-pill btn-sm font-weight-bold">
              Call Me
            </div>
          </a>
        </div>
      
    </div>
  </header>
  `,
  props: ['navbarType'],
  data: () => ({
    nav: [
      { text: 'Home', link: 'https://edubrand.id' },
      { text: 'Tentang Kami', link: 'tentang.html' },
      { text: 'Layanan', link: '#' }
    ]
  })
})