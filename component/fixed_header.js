Vue.component('fixed-header', {
  template: `
  <header id="header" class="fixed-header fixed-top shadow">
    <div 
      class="navbar navbar-dark navbar-expand-md"
      style="background-image: linear-gradient(to left, #3264f5, #4a54e8, #5b42db, #682ccb, #7202bb) !important">
      <div class="container">
        <a href="index.html" class="navbar-brand">
          <img 
            src="img/edubrand.png" 
            alt="brand edubrand"
            height="30"
          >
        </a>
        <div class="navbar-nav visible-on-lg align-items-center">
          <a 
            v-for="item in nav" :key="item.text"
            class="nav-item nav-link font-weight-bold text-white" 
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
        <div class="navbar-nav hidden-on-lg" :key="active">
          <a 
            v-if="!active"
            @click="$emit('show-menu', true)"
            class="nav-item nav-link font-weight-bold" 
            href="javascript:void(0)">
            <img src="icon/align_right.svg" alt="icon nav" height="30" />
          </a>
          <a 
            v-else
            @click="$emit('show-menu', false)"
            class="nav-item nav-link font-weight-bold" 
            href="javascript:void(0)">
            <img src="icon/close.svg" alt="icon nav" height="30" />
          </a>
        </div>
      </div>
    </div>
  </header>
  `,
  props: ['active'],
  data: () => ({
    nav: [
      { text: 'Home', link: 'https://edubrand.id' },
      { text: 'Tentang Kami', link: 'tentang.html' },
      { text: 'Layanan', link: '#' }
    ]
  })
})