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
        </nav>
      </div>
    </section>
  `,
  props: ['active'],
  data: () => ({
    nav: [
      { text: 'Home', link: '#' },
      { text: 'Features', link: '#' },
      { text: 'Pricing', link: '#' }
    ]
  })
})