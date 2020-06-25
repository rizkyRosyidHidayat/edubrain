Vue.component('app-section', {
  template: `
  <section class="mt-5 app">
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
              Checkout App Features
            </div>
            <h1 class="font-weight-bold mb-5">
              Control Everything From One Application
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
              <img 
                :src="'icon/'+item.icon" 
                alt="icon features" 
                width="40"
              />
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
          <button 
            data-aos="fade-down" data-aos-delay="300"
            class="btn btn-lg btn-orange px-5 rounded-pill mt-3 animate-btn-orange">
            Discover More
          </button>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    data: [
      {
        title: 'Title Feature',
        icon: 'search.svg',
        text: `
          Cras sit amet nibh libero, in gravida nulla. 
          Nulla vel metus scelerisque ante sollicitudin.
        `,
        color: '90deg, #4a0e8f 0%, #b430a7 51%, #4a0e8f 100%'
      },
      {
        title: 'Title Feature',
        icon: 'search.svg',
        text: `
          Cras sit amet nibh libero, in gravida nulla. 
          Nulla vel metus scelerisque ante sollicitudin.
        `,
        color: '90deg, #4453ac 0%, #03a9db 51%, #4453ac 100%'
      },
    ]
  })
})