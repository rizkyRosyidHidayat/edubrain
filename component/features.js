Vue.component('features-section', {
  template: `
  <section class="mt-5">
    <div class="container">
      <p class="text-center">
        <span class="text-danger">Checkout Apps Features</span><br>
        <span class="h1 font-weight-bold">The Only App You'll Need</span>
      </p>
      <div class="row mt-5">
        <div
          v-for="(item, i) in features" :key="i"
          class="col-lg-3 col-md-6 mb-sm-4">
          <div class="card rounded-0">
            <div 
              style="height: 250px;"
              class="card-body d-flex justify-content-center align-items-center flex-column">
              <button 
                :style="'background-image: linear-gradient('+item.color+');'"
                type="button" 
                class="btn btn-icon">
                <img 
                  :src="'icon/'+item.icon" 
                  width="60" alt="icon features"
                >
              </button>
              <div class="font-weight-bold h5 mt-3">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    features: [
      { text: 'Features', icon: 'search.svg', color: '90deg, #4a0e8f 0%, #b430a7 51%, #4a0e8f 100%' },
      { text: 'Features', icon: 'search.svg', color: '90deg, #4453ac 0%, #03a9db 51%, #4453ac 100%' },
      { text: 'Features', icon: 'search.svg', color: '90deg, #e41256 0%, #ffa337 51%, #e41256 100%' },
      { text: 'Features', icon: 'search.svg', color: '90deg, #0349a6 0%, #15c27b 51%, #0349a6 100%' }
    ]
  })
})