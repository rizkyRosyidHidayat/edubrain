Vue.component('features1-section', {
  template: `
  <section class="bg-lightblue py-5 bg-feature mt-sm-5 mt-lg-0">
    <div class="container overflow-hidden">
      <div class="row align-items-center">
        <div
          data-aos="fade-right" 
          class="col-lg-6 col-sm-12 mb-sm-3">
          <img 
            src="img/geometrical.png" 
            alt="gambar features"
            class="img-fluid"
          >
        </div>
        <div 
          data-aos="fade-left" 
          class="col-lg-6 col-sm-12 mb-sm-3">
          <div class="h1 font-weight-bold my-3">
            Unggul & Berpengalaman
          </div>
          <p 
            class="border-warning p-3 mb-5"
            style="border-left: 3px solid;">
            Tim Develop Aplikasi yang sudah terbukti sukses di TryOut level Nasional.
             Ribuan sekolah & ratusan ribu peserta tryout serentak
          </p>
          <a href="https://api.whatsapp.com/send?phone=6285727244000" target="_blank">
            <button type="button" class="btn btn-lg rounded-pill btn-blue px-5 animate-btn-blue mb-5">
              <span>MULAI SEKARANG</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
  `
})