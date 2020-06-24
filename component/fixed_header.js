Vue.component('fixed-header', {
  template: `
  <header id="header" class="fixed-header fixed-top shadow">
    <div class="navbar navbar-light navbar-expand-md bg-white">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img 
            src="img/edubrain.png" 
            alt="brand edubrain"
            height="30"
          >
        </a>
        <div class="navbar-nav d-none d-lg-flex">
          <a 
            v-for="item in nav" :key="item.text"
            class="nav-item nav-link font-weight-bold" 
            :href="item.link">
            {{ item.text }}
          </a>
        </div>
        <div class="navbar-nav d-lg-none">
          <a 
            class="nav-item nav-link font-weight-bold" 
            href="javascript:void(0)">
            <img src="icon/align_right.svg" alt="icon nav" height="30" />
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