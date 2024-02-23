<template>
  <table class="table is-fullwidth is-striped is-hoverable is-narrow">
    <thead>
      <th style="width: 30%">Artist</th>
      <th style="width: 30%">Title</th>
      <th style="width: 30%">Album</th>
      <th style="width: 20%">Genre</th>
    </thead>
    <tbody 
      v-for="(song, index) in sortedSongs" 
      :key="index"
      class="has-text-left"
    >
      <tr>
        <td>{{ song.artist }}</td>
        <td>{{ song.title }}</td>
        <td>{{ song.album }}</td>
        <td>{{ song.genre }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import MusicData from '@/assets/list.json'

export default {
  data () {
    return {
      songs: MusicData,
      sortBy: '',
      sortDirection: 'asc'
    }
  },
  computed: {
    sortedSongs() {
      if (this.sortBy === '') {
        return this.songs
      }

      let sortModifier = this.sortDirection === 'asc' ? 1 : -1

      return this.songs.slice().sort((a, b) => {
        let colA = a[this.sortBy].toUpperCase()
        let colB = b[this.sortBy].toUpperCase()

        if (colA < colB) {
          return -1 * sortModifier
        }

        if (colA > colB) {
          return 1 * sortModifier
        }

        return 0
      })
    }
  },
  methods: {
    changeSort(columnName) {
      if (this.sortBy === columnName && this.sortDirection === 'asc') {
        this.sortDirection = 'desc'
      } else {
        this.sortDirection = 'asc'
      }
      this.sortBy = columnName
    }
  }
}
</script>