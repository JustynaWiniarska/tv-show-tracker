<template>
  <tbody>
    <tr
      v-for="(song, index) in paginatedItems"
      :key="index"
      class="has-text-left"
    >
      <td>{{ song.artist }}</td>
      <td>{{ song.title }}</td>
      <td>{{ song.album }}</td>
      <td class="last-column">{{ song.genre }}     
        <SelectPlaylist 
          @click="addSongToPlaylist(song)"
          :playlists="playlists"
        />
      </td>
    </tr>
  </tbody>
</template>

<script>
import SelectPlaylist from './SelectPlaylist'

export default {
  components: {
    SelectPlaylist
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    perPage: {
      type: Number,
      required: false,
      default: 50
    },
		playlists: {
			type: Array,
			required: true,
		}
  },
  data() {
    return {
      page: 1
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.perPage)
    },
    paginatedItems() {
      return this.items.slice(0, this.page * this.perPage)
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      if (this.page >= this.totalPages) return
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100) {
        this.page++
      }
    })
  },
  watch: {
    items() {
      this.page = 1
    }
  },
  methods: {
    addSongToPlaylist(song) {
      this.$emit('open-modal')
      this.$emit('add-song-to-list', song)
    }
  }
}
</script>

<style>
.add-icon {
  float: right;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 5px;
  width: 26px;
  padding-left: 5px;
}

.add-icon .svg-inline--fa {
  height: 0.8em;
}

.last-column {
  display: flex;
  justify-content: space-between;
}
</style>