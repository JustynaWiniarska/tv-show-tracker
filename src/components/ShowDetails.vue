<template>
	<div class="columns">
		<div class="column is-8">
			<router-link to="/"><fa-icon icon="angle-double-left" /> back</router-link>

			<section class="content">
				<h1 class="title is-2">{{ details.name }}</h1>
				<div v-html="details.summary"></div>
			</section>
    </div>
  
		<div class="column is-4">
			<img  />
		</div>
	</div>
</template>

<script>
import Fetch from '../library/Fetch.js'

export default {
	data () {
		return {
			details: {}
		}
	},
	created() {
		Fetch.get('shows/' + this.$route.params.id)
		.then(response => {
			this.details = response
		})

	}
}
</script>