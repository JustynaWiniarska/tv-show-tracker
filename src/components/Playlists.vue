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
        <span class="panel-icon"><fa-icon icon="book" class="playlist-book-icon" /></span>
        {{ playlist.name }}
      </router-link>

        <span class="playlist-icons">
          <a v-if="!playlist.adding" @click="enableSongAdding(index)" title="Enable adding songs"><fa-icon icon="plus" /></a>
          <a v-if="playlist.adding" @click="disableSongAdding(index)" title="Disable adding songs"><fa-icon icon="list-ol" /></a>

          <a @click="deletePlaylist(index)" ><fa-icon icon="trash" /></a>
        </span>

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
  data () {
    return {
      newPlaylistName: '',
      playlists: [],
      adding: false,
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
    // send Playlists to local storage
    const storedPlaylists = localStorage.getItem('playlists')
    this.playlists = storedPlaylists ? JSON.parse(storedPlaylists) : []

    // disable song adding
    this.playlists.forEach((pl, index) => {
      this.playlists[index].adding = false
    })
  },
  methods: {
    addPlaylist() {
      this.playlists.push({
        name: this.newPlaylistName,
        slug: this.slugify(this.newPlaylistName),
        adding: false,
        songs: []
      })
      this.newPlaylistName = ''
    },
    enableSongAdding (index) {
      this.playlists[index].adding = true
      console.log(this.playlists[index])
    },
    disableSongAdding (index) {
      this.playlists[index].adding = false
    },
    deletePlaylist (index) {
      this.playlists.splice(index, 1)
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
.playlist-book-icon {
  margin-top: 5px;
}
.playlist-icons a {
  margin-left: 5px;
  color: grey;
}
</style>