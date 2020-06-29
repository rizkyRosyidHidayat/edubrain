Vue.component('embed-video', {
  template: `
    <section class="embed-video">
			<div class="container">
				<div class="d-flex justify-content-end mb-3">
          <div 
            @click="$emit('visibleVideo', false)"
            class="btn btn-icon btn-secondary" 
            style="width: 40px;height: 40px;">
						<img src="icon/close.svg" alt="icon close" width="20">
					</div>
				</div>
				<iframe width="100%" src="https://www.youtube.com/embed/BcUf775GFO4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</section>
  `
})