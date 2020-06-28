Vue.component('features-section', {
  template: `
  <section class="d-none d-lg-block pb-5 bg-lightblue">
    <img src="img/img-top-features.svg" alt="top feature" class="w-100" />
    <div class="container">
      <p class="text-center">
        <span class="text-danger">Layanan TryOut & Assessment</span><br>
        <span class="h1 font-weight-bold">Mewujudkan sekolah yang berkualitas</span>
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
              <div class="h5 mt-3">
                {{ counts[item.count] }}+
              </div>
              <div class="font-weight-bold h5">
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
      { text: 'AKM', icon: 'zimed-icon-responsive', count: 'akm'},
      { text: 'UTBK', icon: 'zimed-icon-computer-graphic', count: 'utbk'},
      { text: 'PAS', icon: 'zimed-icon-development1', count: 'pas'},
      { text: 'PAT', icon: 'zimed-icon-development', count: 'pat'},
      { text: 'TOEIC', icon: 'zimed-icon-development', count: 'toeic'},
    ],
    counts: {
      'akm': 0,
      'utbk': 0,
      'pas': 0,
      'pat': 0,
      'toeic': 0
    }
  }),

  mounted() {
    this.counter('akm', 300)  
    this.counter('utbk', 300)
    this.counter('pas', 300)
    this.counter('pat', 300)
    this.counter('toeic', 300)
  },

  methods: {
    counter(index, end) {
      const vm = this
      var timer = setInterval(function() {
          vm.counts[index]++;
          if (vm.counts[index] == end) {
            clearInterval(timer);
          }
      }, 50);
    }
  },
})