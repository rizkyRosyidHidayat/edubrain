Vue.component('features-section', {
  template: `
  <section class="d-none d-lg-block pb-5 bg-lightblue">
    <img src="img/img-top-features.svg" alt="top feature" class="w-100" />
    <div class="container">
      <p class="text-center">
        <span class="text-danger">Checkout Apps Features</span><br>
        <span class="h1 font-weight-bold">The Only App You'll Need</span>
      </p>
      <div class="row mt-5">
        <div
          v-for="(item, i) in features" :key="i"
          class="w-20 col-md-6 mb-sm-4"
          data-aos="fade-up" :data-aos-delay="'100'*(i)">
          <div class="card rounded-0">
            <div 
              style="height: 250px;"
              class="card-body d-flex justify-content-center align-items-center flex-column">
              <button
                type="button" 
                :class="'btn btn-icon icon-feature-'+i">
                <i 
                  class="text-white display-3"
                  :class="item.icon"
                ></i>
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
      { text: 'Free Setup', icon: 'zimed-icon-responsive'},
      { text: 'Quick Accsess', icon: 'zimed-icon-computer-graphic'},
      { text: 'Manage Users', icon: 'zimed-icon-development1'},
      { text: 'Fully Secyred', icon: 'zimed-icon-development'},
      { text: 'Daily Update', icon: 'zimed-icon-development' }
    ]
  })
})