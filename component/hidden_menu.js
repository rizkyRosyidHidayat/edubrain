Vue.component('hidden-menu', {
  template: `
    <section 
      class="hidden-menu bg-white pt-5"
      :class="{'active': active}">
      <div class="container">
        <nav class="nav flex-column">
          <a 
            v-for="item in nav" :key="item.text"
            class="nav-link pl-0 h3 text-secondary" href="#">
            {{ item.text }}
          </a>
          <a 
            class="nav-link pl-0" href="#">
            <div class="btn btn-primary rounded-pill font-weight-bold">
              <span class="h3">Try free</span>
            </div>
          </a>
        </nav>
      </div>
    </section>
  `,
  props: ['active'],
  data: () => ({
    nav: [
      { text: 'Home', link: '#' },
      { text: 'Tentang Kami', link: '#' },
      { text: 'Layanan', link: '#' },
      { text: 'Call me', link: '#' }
    ]
  })
})