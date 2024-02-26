<template>
  <table class="table is-fullwidth is-striped is-hoverable is-narrow">
    <MusicSort 
      :songs="songs"
      @sorted-songs="sortedMusicData"
    />
    <PaginatedTableBody :items="sortedSongs" />
  </table>
</template>

<script>
import MusicData from '@/assets/list.json'
import MusicSort from './MusicSort.vue';
import PaginatedTableBody from './PaginatedTableBody.vue';

export default {
  components: {
    MusicSort,
    PaginatedTableBody,
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