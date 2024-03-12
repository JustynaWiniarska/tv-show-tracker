<template>
  <div class="modal-overlay">
		<div class="modal-for-adding-songs">
			<div class="close" @click="$emit('close-modal')">
				x
			</div>
			<h1>Which playlist do you want to add this song to?</h1>

				<ul>
					<li v-for="(list, index) in playists" :key="index">
						{{ list.name }}
					</li>
				</ul>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			playlists: []
		}
	},
  mounted() {
    // send Playlists to local storage
    const storedPlaylists = localStorage.getItem('playlists')
    this.playlists = storedPlaylists ? JSON.parse(storedPlaylists) : []


		console.log(storedPlaylists)
  },
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
</style>