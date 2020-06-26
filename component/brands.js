Vue.component('brands-section', {
  template: `
  <section class="brands py-5 d-none d-md-block">
    <div class="container overflow-hidden">
      <div class="swiper-container-brands">
        <div class="swiper-wrapper d-flex">
          <div 
            v-for="(item, i) in brand" :key="i"
            class="swiper-slide">
            <img :src="'img/'+item" alt="brands" class="img-brand">
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