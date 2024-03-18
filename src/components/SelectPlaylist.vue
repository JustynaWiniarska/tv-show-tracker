<template>
  <div>
    <label for="playlists"></label>
    <select 
      id="playlists"
      @change="emitSelectedPlaylist"
    >
      <option disabled selected>Add</option>
      <option :value="list.name"
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
		},
    song: {
      type: Object,
      required: false
    }
  },
  methods: {
    emitSelectedPlaylist(event) {
      const selectedIndex = event.target.selectedIndex;
      const selectedPlaylist = this.playlists[selectedIndex - 1];

      selectedPlaylist.songs.push(this.song)
      alert('The song was added to the playlist.')
    }
  }
}
</script>