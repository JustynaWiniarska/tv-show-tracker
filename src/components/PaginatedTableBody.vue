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
      <td>{{ song.genre }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    perPage: {
      type: Number,
      required: false,
      default: 50
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
  }
}
</script>