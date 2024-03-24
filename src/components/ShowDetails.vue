<template>
	<section class="content mt-6">
		<h1 class="title is-2">{{ details.name }}</h1>
		<div class="has-text-left my-4 mx-6 pl-2"><router-link to="/"><i class="fa-solid fa-arrow-left"></i> back</router-link></div>
		<div class="columns">
			<div v-if="details.image" class="column is-4">
				<img 						
					:src="details.image.medium"
					:alt="details.name"
				/>
			</div>
			<div class="column is-7 mr-6">
				<div 
					class="has-text-left mb-6"
					v-html="details.summary">
				</div>

				<div v-for="season in allEpisodes" :key="season.season">
					<h2 class="title">Season {{ season.season }}</h2>
					<table class="table is-striped is-fullwidth">
						<thead>
							<tr>
								<th>Date</th>
								<th>Number</th>
								<th>Title</th>
							</tr>
						</thead>
						
						<tbody>
							<tr v-for="show in season.episodes" :key="show.id">
								<td>{{ show.airdate }}</td>
								<td>{{ show.number }}</td>
								<td>{{ show.name }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Fetch from '../library/Fetch.js'

export default {
	data () {
		return {
			details: {},
			allEpisodes: []
		}
	},
	created() {
		// fetches show details
		Fetch.get('shows/' + this.$route.params.id)
		.then(response => {
			this.details = response
		})

		// fetches episodes
		Fetch.get('shows/' + this.$route.params.id + '/episodes')
		.then(response => {

			let modifiedData = {}
				response.reverse().forEach(episode => {

					// modifies data to group episodes by each season:
					let key = 'season_' + episode.season

					if (!modifiedData[key]) modifiedData[key] = { episodes: [] }
					modifiedData[key].season = episode.season
					modifiedData[key].episodes.unshift(episode)
				})
			
			this.allEpisodes = modifiedData
		})
	
	}
}
</script>