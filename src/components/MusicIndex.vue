<template>
  <div>
    <div class="columns">
      <div class="column is-3">
        <Playlists 
          :playlists="playlists"
          @add-playlist="addPlaylist"
          @delete-playlist="deletePlaylist"
        />
      </div>
      <div class="column is-9">
        <table class="table is-fullwidth is-striped is-hoverable is-narrow">
          <MusicSort 
            :songs="songs"
            @sorted-songs="sortedMusicData"
          />
          <PaginatedTableBody 
            :items="sortedSongs"
            :playlists="playlists"
            @open-modal="openModal"
            @add-song-to-list="addSongToList"
          />
        </table>
      </div>
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
      sortedSongs: MusicData,
      playlists: []
    }
  },
  watch: {
    playlists: {
      handler() {
        localStorage.setItem('playlists', JSON.stringify(this.playlists));
      },
      deep: true,
    }
  },
  created() {
    // get Playlists from local storage
    const storedPlaylists = localStorage.getItem('playlists')
    this.playlists = storedPlaylists ? JSON.parse(storedPlaylists) : []
  },
  methods: {
    sortedMusicData (data) {
      // assigns sortedSongs prop the value of emitted data
      this.sortedSongs = data
    },
    addPlaylist(data) {
      this.playlists.push(data)
    },
    deletePlaylist(index) {
      this.playlists.splice(index, 1)
    }
  }
}
</script>