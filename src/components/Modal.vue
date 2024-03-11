<template>
  <div class="modal-overlay">
		<div class="modal-for-adding-songs">
			<div class="close" @click="$emit('close-modal')">
				x
			</div>
			<h1>Which playlist do you want to add this song to?</h1>

		</div>
  </div>
</template>

<script>
export default {

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
}
</style>