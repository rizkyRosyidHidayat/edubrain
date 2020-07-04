Vue.component('testimoni-section', {
  template: `
  <section class="bg-lightblue py-5 testimoni overflow-hidden">
    <div class="container">
      <div class="row align-items-center">
        <div 
          data-aos="zoom-in"
          class="col-lg-6 col-md-12 mb-5 d-flex justify-content-center">
          <div 
            class="position-relative circle-testi-animate">
            <div class="testi-active">
              <img 
                :src="'img/'+imgPersonActive" 
                alt="circle"
                class="rounded-circle testi-image-animate"
                :key="changePerson"
              />
            </div>
            <div class="position-relative circle-testi">            
              <div
                v-for="(item, i) in person" :key="i"
                class="testi-image">
                <img 
                  v-if="i < 4"
                  :src="'img/'+item.img" 
                  alt="circle"
                  class="rounded-circle"
                />
              </div>
            </div>
            <div 
              class="circle-testi circle-testi-2">            
              <div
                v-for="(item, i) in person" :key="i"
                class="testi-image">
                <img 
                  v-if="i > 3"
                  :src="'img/'+item.img" 
                  alt="circle"
                  class="rounded-circle"
                />
              </div>
            </div>
          </div>
        </div>
        <div 
          data-aos="fade-down"
          class="col-lg-6 col-md-12">
          <div class="text-danger">
            Edubrain Core Values
          </div>
          <h1 class="font-weight-bold">
            Joint inspiration, create quality schools
          </h1>
          <div class="position-relative swiper-container">
            <div class="swiper-wrapper">
              <div 
                v-for="item in person" :key="item.name"
                class="h4 text-secondary mt-3 text-justify swiper-slide">
                {{ item.text }} <br>
                <span class="text-danger mt-4 d-inline-block">
                {{ item.name }}
                </span>
              </div>                          
            </div>            
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    person: [
      {  
        name: 'Rudi Yanto', 
        text: `
        Edubrain memberi layanan terbaik & profesional mewujudkan sekolah 
        yang unggul dan berkualitas. 
        Bekerja & melayani dengan ikhlas, komitmen dan berdedikasi tinggi. 
        `,
        img: 'rudi.png'
      },
      { 
        name: 'Livaris Eko Saputro', 
        text: `
          Edubrain memberi layanan terbaik & profesional mewujudkan sekolah 
        yang unggul dan berkualitas. 
        Bekerja & melayani dengan ikhlas, komitmen dan berdedikasi tinggi.
        `,
        img: 'livaris.png'
      },
      { 
        name: 'Stephani julia', 
        text: `
        Edubrain memberi layanan terbaik & profesional mewujudkan sekolah 
        yang unggul dan berkualitas. 
        Bekerja & melayani dengan ikhlas, komitmen dan berdedikasi tinggi.
        `,
        img: 'livaris.png'
      },
      { 
        name: 'Fidiawati Khasanah', 
        text: `
          Edubrain memberi layanan terbaik & profesional mewujudkan sekolah 
        yang unggul dan berkualitas. 
        Bekerja & melayani dengan ikhlas, komitmen dan berdedikasi tinggi.
        `,
        img: 'pipit.png'
      },
      { 
        name: 'Thobib Kawakibuz', 
        text: `
          Edubrain memberi layanan terbaik & profesional mewujudkan sekolah 
        yang unggul dan berkualitas. 
        Bekerja & melayani dengan ikhlas, komitmen dan berdedikasi tinggi.
        `,
        img: 'thobib.png'
      },
      { 
        name: 'Amiridzal Jundi', 
        text: `
          Edubrain memberi layanan terbaik & profesional mewujudkan sekolah 
        yang unggul dan berkualitas. 
        Bekerja & melayani dengan ikhlas, komitmen dan berdedikasi tinggi.
        `,
        img: 'rizal.png'
      },
      { 
        name: 'Sari Mardianto', 
        text: `
          Edubrain memberi layanan terbaik & profesional mewujudkan sekolah 
        yang unggul dan berkualitas. 
        Bekerja & melayani dengan ikhlas, komitmen dan berdedikasi tinggi.
        `,
        img: 'antok.png'
      },
      { 
        name: 'Huda', 
        text: `
          Edubrain memberi layanan terbaik & profesional mewujudkan sekolah 
        yang unggul dan berkualitas. 
        Bekerja & melayani dengan ikhlas, komitmen dan berdedikasi tinggi.
        `,
        img: 'agus.png'
      },
      { 
        name: 'Cahyo', 
        text: `
          Edubrain memberi layanan terbaik & profesional mewujudkan sekolah 
        yang unggul dan berkualitas. 
        Bekerja & melayani dengan ikhlas, komitmen dan berdedikasi tinggi.
        `,
        img: 'cahyo.png'
      }
    ],
    changePerson: 0,
    imgPersonActive: ''
  }),
  mounted() {
    this.autoplaySlide()
    this.imgPersonActive = this.person[this.changePerson].img
  },
  watch: {
    imgPersonActive() {
      this.person[this.changePerson].img = this.person[this.person.length-1].img
    }
  },
  methods: {
    autoplaySlide(){
      setInterval(() => this.changingPerson('+'), 3300)
    },
    changingPerson(operator) {
      if (operator === '+') {
        if (this.changePerson < this.person.length-1) {
          this.changePerson++
          this.person[this.changePerson-1].img = this.imgPersonActive
          this.imgPersonActive = this.person[this.changePerson].img
      } else {
          this.changePerson = 0
          this.imgPersonActive = this.person[this.changePerson].img
        }
      } else {
        if (this.changePerson > 0) {
          this.changePerson--
        } else {
          this.changePerson = 7
        }
      }
    }
  }
})