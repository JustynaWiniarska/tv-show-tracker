<template>
  <thead>
    <th style="width: 30%">
      <a @click="changeSort('artist')">Artist
        <fa-icon icon="chevron-up" v-if="sortBy === 'artist' && sortDirection === 'asc'" />
        <fa-icon icon="chevron-down" v-if="sortBy === 'artist' && sortDirection === 'desc'" />
      </a>
    </th>
    <th style="width: 30%">
      <a @click="changeSort('title')">Title
        <fa-icon icon="chevron-up" v-if="sortBy === 'title' && sortDirection === 'asc'" />
        <fa-icon icon="chevron-down" v-if="sortBy === 'title' && sortDirection === 'desc'" />
    </a></th>
    <th style="width: 30%">
      <a @click="changeSort('album')">Album
        <fa-icon icon="chevron-up" v-if="sortBy === 'album' && sortDirection === 'asc'" />
        <fa-icon icon="chevron-down" v-if="sortBy === 'album' && sortDirection === 'desc'" />
      </a></th>
    <th style="width: 20%">
      <a @click="changeSort('genre')">Genre
        <fa-icon icon="chevron-up" v-if="sortBy === 'genre' && sortDirection === 'asc'" />
        <fa-icon icon="chevron-down" v-if="sortBy === 'genre' && sortDirection === 'desc'" />
      </a></th>
  </thead>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      sortBy: '',
      sortDirection: 'asc'
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

      this.sortSongs()
    },
    sortSongs() {
      if (this.sortBy === '') {
        this.$emit('sortedSongs', this.songs)
        return
      }

      let sortModifier = this.sortDirection === 'asc' ? 1 : -1

      let sortedSongs = this.songs.slice().sort((a, b) => {
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

      // emitting sorted data
      this.$emit('sortedSongs', sortedSongs)
      return sortedSongs
    }
  }
}
</script>
