Vue.component('brands-section', {
  template: `
  <section class="brands py-4 d-none d-md-block">
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
      'aksi.png',
      'bar.png',
      'bcs.png',
      'brainlogic.png',
      'cc.png',
      'mtr.png',
      'p3d.png',
      'pm.png',
      'psd.png',
      'tbs.png',
    ]
  })
})