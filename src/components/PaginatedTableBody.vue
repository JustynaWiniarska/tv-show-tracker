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
      <td>{{ song.genre }}
        <span class="add-icon"><fa-icon icon="plus" @click="openModal" /></span>
      </td>
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
  },
  methods: {
    openModal() {
      this.$emit('open-modal')
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
</style>