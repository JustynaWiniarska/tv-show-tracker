<template>
  <div class="columns">
    <div class="column is-3">
      <Playlists />
    </div>
    <div class="column is-9">
      <table class="table is-fullwidth is-striped is-hoverable is-narrow">
        <MusicSort 
          :songs="songs"
          @sorted-songs="sortedMusicData"
        />
        <PaginatedTableBody :items="sortedSongs" />
      </table>
    </div>
  </div>
</template>

<script>
import MusicData from '@/assets/list.json'
import MusicSort from './MusicSort.vue';
import PaginatedTableBody from './PaginatedTableBody.vue';
import Playlists from './Playlists.vue'

export default {
  components: {
    MusicSort,
    PaginatedTableBody,
    Playlists
  },
  data () {
    return {
      songs: MusicData,
      sortedSongs: MusicData
    }
  },
  methods: {
    sortedMusicData (data) {
      // assigns sortedSongs prop the value of emitted data
      this.sortedSongs = data
    }
  }
}
</script>