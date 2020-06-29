Vue.component('faq-section', {
  template: `
  <section class="mt-5 faq pb-5">
    <div class="container">
      <div class="text-center">
        <span class="text-danger">
          Frequently Asked Questions
        </span><br>
        <h1 class="font-weight-bold mb-5">
          Have any Question?
        </h1>
        <div 
          v-for="(item, i) in faq" :key="i"
          class="card border-purple mt-4 rounded-0"
          data-aos="fade-down" :data-aos-delay="'100'*(i)">
          <div class="card-body">
            <div class="overflow-hidden">
              <div 
                @click="showAnswer(i)"
                class="title-question d-flex justify-content-between align-items-center">
                <div class="text-danger h5">
                  {{ item.question }}
                </div>
                <div>
                  <div 
                    v-if="item.active"                  
                    class="btn btn-blue btn-icon"
                    style="width: 50px;height: 50px;font-size: 24px;">
                    <span class="font-weight-bold">-</span>
                  </div>
                  <div 
                    v-else
                    class="btn btn-orange btn-icon"
                    style="width: 50px;height: 50px;font-size: 24px;">
                    <span class="font-weight-bold">+</span>
                  </div>
                </div>
              </div>

              <p 
                class="answer text-left mb-0 h5 text-secondary"
                :class="{'active': item.active}">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    faq: [
      {
        question: 'Bagaimana cara bekerja sama dalam kegiatan Layanan Edubrain?',
        answer: `
        Pihak sekolah dapat menghubungi admin atau call centre Edubrain di website ini. 
        Admin Edubrain akan menghubungi & mengirimkan proposal kerja sama kegiatan.
        `,
        active: false
      },
      {
        question: 'Apa keunggulan Layanan Edubrain, yang bisa meningkatkan mutu pendidikan di sekolah?',
        answer: `
        Beberapa program unggulan Edubrain, antara lain: TryOut AKM, TryOut UTBK, TOEIC, Ujian Satuan Pendidikan.
        `,
        active: false
      },
      {
        question: 'Kapan bisa dimulai kegiatan TryOut atau Layanan Edubrain lainnya?',
        answer: `
        Pelaksanaan Kegiatan TryOut atau Layanan Edubrain lainnya, menyesuaikan jadwal & agenda kegiatan sekolah.
        `,
        active: false
      }
    ]
  }),
  methods: {
    showAnswer(index) {
      const hasil = !this.faq[index].active
      this.faq.map((x, i) => {
        if(i === index){
          x.active = hasil
        } else {
          x.active = false
        }
      })
    }
  }
})