Vue.component('testimoni-section', {
  template: `
  <section class="bg-lightblue py-5 testimoni">
    <div class="container">
      <div class="row align-items-center">
        <div 
          data-aos="zoom-in"
          class="col-lg-6 col-md-12 mb-sm-5 d-flex justify-content-center">
          <div 
            class="position-relative circle-testi-animate">
            <div class="testi-active">
              <img 
                :src="'img/'+person[changePerson].img" 
                alt="circle"
                width="120"
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
                  width="70"
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
                  width="70"
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
            Checkout Latest Post
          </div>
          <h1 class="font-weight-bold">
            What Our Clients Are Saying
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
            <div class="position-absolute d-flex arrow-navigator">
              <div class="btn-group">
                <div 
                  @click="changingPerson('+')"
                  class="btn btn-light p-1 rounded-0 arrow-left">
                  <img 
                    width="40"
                    src="icon/arrow_left.svg" 
                    alt="arrow left"
                  />
                </div>
                <div 
                  @click="changingPerson('-')"
                  class="btn btn-light p-1 rounded-0 arrow-right">
                  <img 
                    width="40"
                    src="icon/arrow_right.svg" 
                    alt="arrow right"
                  />
                </div>
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
        name: 'Name Person 1', 
        text: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt sequi maiores eligendi magni minima tempore corporis, 
          consectetur in consequuntur debitis.
        `,
        img: 'testi-1-2.jpg'
      },
      { 
        name: 'Name Person 2', 
        text: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt sequi maiores eligendi magni minima tempore corporis, 
          consectetur in consequuntur debitis.
        `,
        img: 'testi-1-2.jpg'
      },
      { 
        name: 'Name Person 3', 
        text: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt sequi maiores eligendi magni minima tempore corporis, 
          consectetur in consequuntur debitis.
        `,
        img: 'testi-1-2.jpg'
      },
      { 
        name: 'Name Person 4', 
        text: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt sequi maiores eligendi magni minima tempore corporis, 
          consectetur in consequuntur debitis.
        `,
        img: 'testi-1-2.jpg'
      },
      { 
        name: 'Name Person 5', 
        text: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt sequi maiores eligendi magni minima tempore corporis, 
          consectetur in consequuntur debitis.
        `,
        img: 'testi-1-2.jpg'
      },
      { 
        name: 'Name Person 6', 
        text: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt sequi maiores eligendi magni minima tempore corporis, 
          consectetur in consequuntur debitis.
        `,
        img: 'testi-1-2.jpg'
      },
      { 
        name: 'Name Person 7', 
        text: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt sequi maiores eligendi magni minima tempore corporis, 
          consectetur in consequuntur debitis.
        `,
        img: 'testi-1-2.jpg'
      },
      { 
        name: 'Name Person 8', 
        text: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt sequi maiores eligendi magni minima tempore corporis, 
          consectetur in consequuntur debitis.
        `,
        img: 'testi-1-2.jpg'
      }
    ],
    changePerson: 0
  }),
  methods: {
    changingPerson(operator) {
      if (operator === '+') {
        if (this.changePerson < 8) {
          this.changePerson++
        } else {
          this.changePerson = 0
        }
      } else {
        if (this.changePerson > -1) {
          this.changePerson--
        } else {
          this.changePerson = 8
        }
      }
    }
  }
})