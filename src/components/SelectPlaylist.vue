<template>
  <div>
    <label for="playlists"></label>
    <select id="playlists">
      <option>Add</option>
      <option value=""
        v-for="(list, index) in playlists"
        :key="index"
      >{{ list.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
		playlists: {
			type: Array,
			required: true,
		}
  }
}
</script>