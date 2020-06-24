Vue.component('header-section', {
  template: `
  <header class="position-absolute w-100 d-none d-lg-block position-relative">
    <div class="navbar navbar-light navbar-expand-md">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img 
            src="img/edubrain.png" 
            alt="brand edubrain"
            height="30"
          >
        </a>
        <div 
          style="top: 0px;left: 40%;"
          class="position-absolute">
          <img src="img/top_100.svg" alt="top 100" />
        </div>
        <div class="navbar-nav">
          <a 
            v-for="item in nav" :key="item.text"
            class="nav-item nav-link font-weight-bold text-white" 
            :href="item.link">
            {{ item.text }}
          </a>
        </div>
      </div>
    </div>
  </header>
  `,
  data: () => ({
    nav: [
      { text: 'Home', link: '#' },
      { text: 'Features', link: '#' },
      { text: 'Pricing', link: '#' }
    ]
  })
})