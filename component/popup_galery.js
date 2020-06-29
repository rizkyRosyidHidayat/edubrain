Vue.component('popup-galery', {
  template: `
    <section class="embed-video justify-content-center">
			<div style="width: 300px">
				<div class="d-flex justify-content-end mb-3">
          <div 
            @click="$emit('hiddenImg', false)"
            class="btn btn-icon btn-secondary" 
            style="width: 40px;height: 40px;">
						<img src="icon/close.svg" alt="icon close" width="20">
					</div>
				</div>
				<img :src="'img/'+img" alt="image galery" class="w-100" />
			</div>
		</section>
  `,
  props: ['img']
})