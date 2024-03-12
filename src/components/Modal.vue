<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
		<div class="modal-for-adding-songs" @click.stop>
			<div class="close" @click="$emit('close-modal')">
				x
			</div>
			<h1>Which playlist do you want to add this song to?</h1>

				<ul class="playlists">
					<li 
						v-for="(list, index) in playlists" 
						:key="index"
						@click="selectPlaylist"
					>
						{{ list.name }}
					</li>
				</ul>
		</div>
  </div>
</template>

<script>
export default {
	props: {
    playlists: {
      type: Array,
      required: true,
    }
  },
	mounted() {
		console.log('playlists in Modal', this.playlists)
	},
	methods: {
		selectPlaylist() {
			this.$emit('close-modal')
		}
	}
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: lightgray;
}

.modal-for-adding-songs {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
	position: relative;
}
.close {
  cursor: pointer;
	position: absolute;
	top: 30px;
	right: 30px;
	font-size: 20px;
	font-weight: bold;
}

.playlists {
	margin: 15px 30px;
}
.playlists li {
	padding-top: 8px;
	padding-bottom: 4px;
	border-bottom: 1px solid lightgray;
}

.playlists li:hover {
	cursor: pointer;
	font-weight: bold;
}
</style>