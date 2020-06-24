Vue.component('features1-section', {
  template: `
  <section class="mt-5 bg-lightblue py-5 bg-feature">
    <div class="container">
      <div class="row align-items-center">
        <div
          data-aos="fade-right" 
          class="col-lg-6 col-sm-12 mb-sm-3">
          <img 
            src="img/geometrical.PNG" 
            alt="gambar features"
            class="img-fluid"
          >
        </div>
        <div 
          data-aos="fade-left" 
          class="col-lg-6 col-sm-12 mb-sm-3">
          <div class="h1 font-weight-bold my-3">
            Simple and quick creation
          </div>
          <p 
            class="border-warning p-3 mb-5"
            style="border-left: 3px solid;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis veritatis ratione porro.
          </p>
          <button type="button" class="btn btn-lg rounded-pill btn-blue px-5">
            <span>START CREATING</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  `
})