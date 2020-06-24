Vue.component('brands-section', {
  template: `
  <section class="brands py-5">
    <div class="container overflow-hidden">
      <div class="swiper-container-brands">
        <div class="swiper-wrapper d-flex">
          <div 
            v-for="(item, i) in brand" :key="i"
            class="swiper-slide">
            <img :src="'img/'+item" alt="brands">
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    brand: [
      'brand-1-6.png',
      'brand-1-6.png',
      'brand-1-6.png',
      'brand-1-6.png',
      'brand-1-6.png',
      'brand-1-6.png',
      'brand-1-6.png',
      'brand-1-6.png',
      'brand-1-6.png',
    ]
  })
})