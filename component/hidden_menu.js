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
            href="https://api.whatsapp.com/send?phone=6285727244000"
            class="nav-link pl-0" target="_blank">
            <div class="btn btn-primary rounded-pill font-weight-bold">
              <span class="h3">Call Me</span>
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
      { text: 'Layanan', link: '#' }
    ]
  })
})