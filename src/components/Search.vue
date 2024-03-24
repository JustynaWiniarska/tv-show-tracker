<template>
	<div>
		<form id="search" @submit.prevent="search">
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


		<a class="pull-left">Clear search <i class="fa-regular fa-circle-xmark"></i></a>

		<!-- <p>No results found.</p> -->

		<div class="columns is-multiline">
			<div class="column is-2"
				v-for="show in searchResult"
				:key="show.show.id"
			>
				<div class="card">
					<div class="card-image">
						<img 
							v-if="show.show.image" 
							:src="show.show.image.medium"
							:alt="show.show.name"
						/>
												<!-- router-link -->
					</div>
					<div class="card-content">
						<p class="title is-4">
							{{ show.show.name }}
														<!-- router-link -->
						</p>
						<p class="subtitle is-6">Running on <span> ... </span></p>
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
		}
	},
	methods: {
		search() {
			Fetch.get('search/shows?q=' + this.inputValue)
			.then(response => {
				this.searchResult = response
				console.log(response)
			})
		}
	}
}
</script>