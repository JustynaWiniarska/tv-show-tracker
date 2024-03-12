<template>
  <nav class="panel">
    <a class="panel-block">
      <router-link to="/">All Songs</router-link>
    </a>
    <p class="panel-heading">Playlists</p>
    <p v-for="(playlist, index) in playlists"
      :key="playlist.slug"
      class="playlist-item"
    >
      <router-link :to="'playlist/' + playlist.slug">
        <span class="panel-icon"><fa-icon icon="book" class="book-icon" /></span>
        {{ playlist.name }}
      </router-link>
      <a @click="deletePlaylist(index)" class="trash-icon" ><fa-icon icon="trash" /></a>
    </p>
    <div class="panel-block">
      <form @submit.prevent="addPlaylist">
        <div class="field has-addons">
          <input type="text" class="input" placeholder="New Playlist" v-model="newPlaylistName" />
          <p class="control"><button type="submit" class="button is-success"><fa-icon icon="plus" />Add</button></p>
        </div>
      </form>
    </div>

  </nav>
</template>

<script>
export default {
  props: {
    playlists: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      newPlaylistName: '',
    }
  },
  methods: {
    addPlaylist() {
      const data = {
        name: this.newPlaylistName,
        slug: this.slugify(this.newPlaylistName),
        songs: []
      }
      this.$emit('add-playlist', data)
    },
    deletePlaylist (index) {
      this.$emit('delete-playlist', index)
    },
    slugify (name) {
      return name.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')         // Replace spaces with -
        .replace(/&/g, '-and-')       // Replace & with 'and'
        .replace(/[^\w-]+/g, '')      // Remove all non-word chars
        .replace(/--+/g, '-')         // Replace multiple - with single -
    }
  }
}
</script>

<style>
.playlist-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
}
.book-icon {
  margin-top: 5px;
}
.trash-icon svg {
  color: grey;
  height: 14px;
}
</style>