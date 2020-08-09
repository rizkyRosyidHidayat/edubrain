import '../component/popup_galery.js'

Vue.component('footer-section', {
  template: `
  <footer class="pt-5 text-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-12 mb-sm-3 col-sm-12">
          <p class="text-left">
            Platform Edubrand adalah Aplikasi berbasis web semi-online/full-online, yang dikemas dengan fitur dan analisis terlengkap.
          </p>
          <div class="d-flex">
            <div
              v-for="item in icons" :key="item"
              class="btn btn-icon border border-white mr-3"
              style="width: 40px;height: 40px;">
              <img :src="'icon/'+item" :alt="item" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 mb-sm-3 col-sm-12">
          <h4 class="font-weight-bold">GALERY</h4>
          <div class="row">
            <div 
              v-for="(item, i) in galery" :key="i"
              @click="selectedImg=item;popup=true"
              style="cursor: pointer"
              class="col-2 px-1 mb-2">
              <img :src="'img/'+item" alt="img galery" class="img-fluid"/>
            </div>
          </div>
          <popup-galery v-if="popup" @hiddenImg="hiddenImg" :img="selectedImg" />
        </div>
        <div class="col-lg-3 col-md-12 mb-sm-3 col-sm-12">
          <h4 class="font-weight-bold">Contact Us</h4>
          <div
            v-for="item in contact" :key="item.icon"
            class="media mb-2">
            <img 
              :src="'icon/'+item.icon" 
              alt="icon features" 
              width="30"
            />
            <div class="media-body ml-3">
              <h6 class="mt-0 mb-1 font-weight-bold">
                {{ item.title }}
              </h6>
              <p class="h6">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>				
    </div>
    <div class="footer-copyright">
      <div class="container">
        <div class="d-flex justify-content-between py-4 mt-5">
          <div>Copyright &copy; {{ new Date().getUTCFullYear() }} PT.EDU INOVASI INDONESIA </div>
          <div>
            <a href="" class="text-white">Help Desk / Privacy Policy</a>
          </div>						
        </div>
      </div>
    </div>
  </footer>
  `,
  data: () => ({
    icons: ['facebook.svg', 'instagram.svg', 'twitter.svg'],
    galery: [
      'galeri1.png',
      'galeri2.png',
      'galeri3.png',
      'galeri4.png',
      'galeri5.png',
      'galeri6.png',
      'galeri7.png',
      'galeri8.png',
      'galeri9.png',
      'galeri10.png',
      'galeri11.png',
      'galeri12.png'
    ],
    contact: [
      {
        icon: 'geo.svg',
        title: 'ADDRESS',
        desc: `
          Jl. Ketileng Indah Raya, Mutiara Gading A7, Kota Semarang, Jawa Tengah
        `
      },
      {
        icon: 'phone.svg',
        title: 'PHONE',
        desc: `
          085-7272-44-000
        `
      },
      {
        icon: 'mail.svg',
        title: 'EMAIL',
        desc: `
          admin@edubrand.id
        `
      },
    ],
    popup: false,
    selectedImg: ''
  }),
  methods: {
    hiddenImg(val) {
      this.popup = val
    }
  }
})