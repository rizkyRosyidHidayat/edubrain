import '../component/embed_video.js'

Vue.component('banner-section', {
  template: `
  <section class="banner-section">
    <div class="container">
      <div 
        class="row align-items-center banner-container">
        <div class="col-lg-6 col-md-12 mb-5">
          <div class="btn btn-primary btn-sm">
            <span class="h5 font-weight-bold">Mitra Terbaik Sekolah</span>
          </div>
          <div class="h1 font-weight-bold my-3">
            Wujudkan Sekolah Unggul dan berkualitas!!!
          </div>
          <p 
            class="border-primary p-3 mb-5"
            style="border-left: 3px solid;">
            Dengan terobosan teknologi informasi terkini, 
            seiring sejalan dengan kebijakan pemerintah dalam 
            menyiapkan langkah-langkah strategis 
            peningkatan mutu pendidikan di Indonesia
          </p>
          <button type="button" class="btn btn-lg rounded-pill btn-orange px-5 animate-btn-orange">
            <span>HUBUNGI KAMI</span>
          </button>
        </div>
        <div class="col-6 d-none d-lg-block">
          <div class="d-flex justify-content-center">
            <button 
              type="button" 
              @click="video=true"
              class="btn btn-video-play">
              <img src="img/video-play-icon.svg" alt="icon video play" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <embed-video v-if="video" @visibleVideo="visibleVideo"></embed-video>
  </section>
  `,
  data: () => ({
    video: false
  }),
  methods: {
    visibleVideo(val) {
      this.video = val
    }
  }
})