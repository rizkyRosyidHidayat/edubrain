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
				<iframe width="1100" height="619" src="https://www.youtube.com/embed/xCbn1VCRuGU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</section>
  `
})