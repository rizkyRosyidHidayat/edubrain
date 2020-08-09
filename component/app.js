Vue.component('app-section', {
  template: `
  <section class="mt-5 app overflow-hidden">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 d-none d-lg-block">
          <img 
            class="img-fluid"
            src="img/app.png" 
            alt="gambar aplikasi"
          />
        </div>
        <div class="col-lg-6 col-md-12">
          <div data-aos="fade-left">
            <div class="text-danger">
              Fitur & Layanan
            </div>
            <h1 class="font-weight-bold mb-5">
              Platform Edubrand dengan fitur, analisis & benefit terlengkap!


            </h1>
          </div>
          <div 
            v-for="(item, i) in data" :key="i"
            class="media mb-4"
            data-aos="fade-left" :data-aos-delay="'100'*(i+1)">
            <div 
              class="btn btn-icon"
              style="width: 80px;height: 80px;"
              :style="'background-image: linear-gradient('+item.color+');'">
              <i
                class="display-4 text-white"
                :class="item.icon"
              ></i>
            </div>
            <div class="media-body ml-3">
              <h5 class="mt-0 mb-3 font-weight-bold">
                {{ item.title }}
              </h5>
              <p class="text-secondary h6">
                {{ item.text }}
              </p>
            </div>
          </div>
          <a href="https://api.whatsapp.com/send?phone=6285727244000" target="_blank">
            <button 
              data-aos="fade-down" data-aos-delay="300"
              class="btn btn-lg btn-orange px-5 rounded-pill mt-3 animate-btn-orange mb-5">
              KIRIM PENAWARAN!
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    data: [
      {
        title: 'TryOut AKM',
        icon: 'zimed-icon-strategy',
        text: `
           TryOut Asesmen Kompetensi Minimum sebagai pemetaan capaian pendidikan berdasarkan kemampuan minimal siswa.
        `,
        color: '90deg, #4a0e8f 0%, #b430a7 51%, #4a0e8f 100%'
      },
      {
        title: 'TryOut UTBK',
        icon: 'zimed-icon-training',
        text: `
          TryOut Ujian Tulis Berbasis Komputer [UTBK] SBMPTN/MANDIRI, dengan fitur dan fasilitas yang lengkap.
        `,
        color: '90deg, #4453ac 0%, #03a9db 51%, #4453ac 100%'
      },
      {
        title: 'Ujian Satuan Pendidikan',
        icon: 'zimed-icon-development',
        text: `
          Aplikasi CBT Semi Online/Full Online, untuk pelaksanaan penilaian hasil belajar oleh Satuan Pendidikan.
        `,
        color: '90deg, #15c27b 0%, #0349a6 100%'
      },

    ]
  })
})