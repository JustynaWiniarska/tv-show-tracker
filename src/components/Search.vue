<template>
	<div>
		<h1 class="title">TV Show Tracker</h1>
		<form 
			class="m-4" 
			@submit.prevent="search"
			@keydown.stop.enter.prevent="search"
		>
			<div class="field has-addons">
				<p class="control is-expanded has-icon has-icon-left">
					<input 
						type="text"
						class="input"
						placeholder="Search for shows ..."
						v-model="inputValue"
					/>
				</p>
				<p class="control"><button type="submit" class="button is-success"><i class="fa-solid fa-magnifying-glass"></i></button></p>
			</div>
		</form>

		<a
			v-if="searchResult.length"
			class="pull-left my-1"
			@click="clearSearch"
		>Clear search <i class="fa-regular fa-circle-xmark"></i></a>

		<p v-if="noResults">No results found.</p>

		<div class="columns is-multiline m-2">
			<div class="column is-2"
				v-for="show in searchResult"
				:key="show.show.id"
			>
				<div class="card">
					<div class="card-image">
						<router-link
							:to="'/shows/' + show.show.id"
						>
							<img 
								v-if="show.show.image" 
								:src="show.show.image.medium"
								:alt="show.show.name"
							/>
						</router-link>
					</div>
					<div class="card-content">
						<p class="title is-4">
							<router-link :to="'/shows/' + show.show.id">
								{{ show.show.name }}
							</router-link>
						</p>
						<p class="subtitle is-6">Running on 
							<span>{{ show.show.network ? show.show.network.name : show.show.webChannel.name }}</span>
						</p>
					</div>
					<div class="card-footer">
						<div class="card-footer-item">
							<a><i class="fa-solid fa-rss"></i> Subscribe</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Fetch from '../library/Fetch.js'

export default {
	data() {
		return {
			inputValue: '',
			searchResult: [],
			noResults: false
		}
	},
	methods: {
		search() {
			Fetch.get('search/shows?q=' + this.inputValue)
			.then(response => {
				if (response.length === 0) {
					this.noResults = true
				} else {
					this.searchResult = response
				}
			})
		},
		clearSearch() {
			this.searchResult = []
			this.inputValue = ''
		}
	}
}
</script>