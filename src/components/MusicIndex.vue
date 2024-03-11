<template>
  <div>
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
          <PaginatedTableBody 
            :items="sortedSongs"
            @open-modal="openModal"
          />
        </table>
      </div>
    </div>
    <Modal 
      v-if="modalOpen"
      @close-modal="closeModal"
    />
  </div>
</template>

<script>
import MusicData from '@/assets/list.json'
import MusicSort from './MusicSort.vue';
import PaginatedTableBody from './PaginatedTableBody.vue';
import Playlists from './Playlists.vue'
import Modal from './Modal.vue'

export default {
  components: {
    MusicSort,
    PaginatedTableBody,
    Playlists,
    Modal
  },
  data () {
    return {
      songs: MusicData,
      sortedSongs: MusicData,
      modalOpen: false,
    }
  },
  methods: {
    sortedMusicData (data) {
      // assigns sortedSongs prop the value of emitted data
      this.sortedSongs = data
    },
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false
    }
  }
}
</script>